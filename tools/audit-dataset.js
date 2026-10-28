#!/usr/bin/env node
/*
 * Dataset integrity audit for AgroScope.
 *
 *   node tools/audit-dataset.js
 *
 * Loads the classic data scripts through a fake `window`, then checks that
 * every cross-reference resolves and every required field is present. Exit
 * code 0 = clean, 1 = issues found. No dependencies; works from any directory.
 */
"use strict";

const path = require("path");

global.window = global;

const jsDir = path.join(__dirname, "..", "assets", "js");
[
  "data-core",
  "data-pests",
  "data-pests-2",
  "data-diseases",
  "data-disorders",
  "data-guides",
  "data-ipm",
].forEach((f) => require(path.join(jsDir, f + ".js")));

const A = window.AGRO;
const issues = [];
const cropIds = new Set(A.crops.map((c) => c.id));
const organIds = new Set(A.organs.map((o) => o.id));
const symIds = new Set(A.symptoms.map((s) => s.id));
const kinds = new Set(["insect", "mite", "disease", "weed", "beneficial", "disorder"]);
const ids = new Set();

for (const p of A.pests) {
  const w = p.id || p.name || "?";

  if (!p.id) issues.push("missing id: " + p.name);
  if (ids.has(p.id)) issues.push("duplicate id: " + p.id);
  ids.add(p.id);

  if (!kinds.has(p.kind)) issues.push(w + ": bad kind '" + p.kind + "'");

  ["name", "sci", "tagline", "bio", "damage", "severity"].forEach((f) => {
    if (p[f] === undefined || p[f] === "") issues.push(w + ": missing field '" + f + "'");
  });

  if (!(p.severity >= 1 && p.severity <= 5)) issues.push(w + ": severity out of range (" + p.severity + ")");

  (p.crops || []).forEach((c) => { if (!cropIds.has(c)) issues.push(w + ": unknown crop '" + c + "'"); });
  (p.organs || []).forEach((o) => { if (!organIds.has(o)) issues.push(w + ": unknown organ '" + o + "'"); });
  (p.symptoms || []).forEach((s) => { if (!symIds.has(s)) issues.push(w + ": unknown symptom '" + s + "'"); });

  if (p.kind !== "beneficial" && (!p.symptoms || !p.symptoms.length)) {
    issues.push(w + ": no symptoms (never retrievable by the wizard)");
  }

  (p.chem || []).forEach((c, i) => { if (!c.ai || !c.moa || !c.note) issues.push(w + ": chem[" + i + "] incomplete"); });
  (p.lookalikes || []).forEach((l, i) => { if (!l.n || !l.d) issues.push(w + ": lookalike[" + i + "] incomplete"); });

  if (p.ipm) ["cultural", "biological", "mechanical", "biotech"].forEach((k) => {
    if (!Array.isArray(p.ipm[k])) issues.push(w + ": ipm." + k + " is not an array");
  });
}

for (const [id, g] of Object.entries(A.cropGuides)) {
  if (!cropIds.has(id)) issues.push("guide '" + id + "': not a known crop id");

  ["climate", "soil", "planting", "density", "irrigation", "harvest", "storage", "rotation", "regionNote"]
    .forEach((f) => { if (!g[f]) issues.push("guide '" + id + "': missing field '" + f + "'"); });

  ["varieties", "nutrition", "keyRisks"].forEach((f) => {
    if (!Array.isArray(g[f]) || !g[f].length) issues.push("guide '" + id + "': missing non-empty list '" + f + "'");
  });

  if (!g.planting || !g.planting.window || !g.planting.method) issues.push("guide '" + id + "': planting incomplete");
  if (!g.id || g.id !== id) issues.push("guide '" + id + "': id mismatch (" + g.id + ")");
}

A.crops.forEach((c) => { if (!A.cropGuides[c.id]) issues.push("crop '" + c.id + "': no agronomy guide"); });

const moa = new Set();
A.moa.forEach((g) => {
  const k = g.scheme + ":" + g.code;
  if (moa.has(k)) issues.push("duplicate MoA group " + k);
  moa.add(k);
});

const usedSym = new Set();
A.pests.forEach((p) => (p.symptoms || []).forEach((s) => usedSym.add(s)));
A.symptoms.forEach((s) => { if (!usedSym.has(s.id)) issues.push("symptom never used by any entry: " + s.id); });

/* ---------------- identification key ----------------
   An option whose target does not exist, or a couplet nothing leads to, is a
   dead end in the interface: the reader answers and lands on "Key error". */

const keyNodes = A.keyNodes || {};
const taxa = A.taxa || {};
const keyReached = new Set();
const keyPath = [];

function walkKey(id) {
  if (keyPath.indexOf(id) >= 0) {
    issues.push("key: loop " + keyPath.concat(id).join(" > "));
    return;
  }
  if (keyReached.has(id) || !keyNodes[id]) return;
  keyReached.add(id);
  keyPath.push(id);
  (keyNodes[id].opts || []).forEach((o) => walkKey(o.next));
  keyPath.pop();
}

if (!keyNodes[A.keyStart]) issues.push("key: start couplet '" + A.keyStart + "' does not exist");
else walkKey(A.keyStart);

Object.keys(keyNodes).forEach((id) => {
  const n = keyNodes[id];
  if (!n.no) issues.push("key '" + id + "': missing couplet number");
  if (!n.q) issues.push("key '" + id + "': missing question");
  if (!Array.isArray(n.opts) || !n.opts.length) issues.push("key '" + id + "': no options");
  (n.opts || []).forEach((o, i) => {
    if (!o.label) issues.push("key '" + id + "' opt[" + i + "]: missing label");
    if (!o.next) issues.push("key '" + id + "' opt[" + i + "]: missing next");
    else if (!keyNodes[o.next] && !taxa[o.next]) {
      issues.push("key '" + id + "' opt[" + i + "]: next '" + o.next + "' resolves to no couplet or taxon");
    }
  });
  if (!keyReached.has(id)) issues.push("key '" + id + "': unreachable from the start couplet");
});

const taxaOffered = new Set();
Object.keys(keyNodes).forEach((id) =>
  (keyNodes[id].opts || []).forEach((o) => { if (taxa[o.next]) taxaOffered.add(o.next); }));

Object.keys(taxa).forEach((id) => {
  const t = taxa[id];
  ["rank", "name", "sci", "role"].forEach((f) => {
    if (!t[f]) issues.push("taxon '" + id + "': missing field '" + f + "'");
  });
  if (!Array.isArray(t.diag) || !t.diag.length) issues.push("taxon '" + id + "': no diagnostic characters");
  (t.families || []).forEach((f, i) => {
    if (!f.n || !f.d) issues.push("taxon '" + id + "' family[" + i + "]: incomplete");
  });
  (t.crops || []).forEach((c) => {
    if (!cropIds.has(c)) issues.push("taxon '" + id + "': unknown crop '" + c + "'");
  });
  if (!taxaOffered.has(id)) issues.push("taxon '" + id + "': never offered as a key outcome");
});

/* ---------------- IPM programmes ---------------- */

const ipmTypes = new Set(["prevent", "cultural", "monitor", "biological", "chemical", "mechanical"]);

function auditStages(where, stages) {
  if (!Array.isArray(stages) || !stages.length) { issues.push(where + ": no stages"); return; }
  stages.forEach((s, i) => {
    if (!s.stage) issues.push(where + " stage[" + i + "]: missing name");
    if (!Array.isArray(s.actions) || !s.actions.length) {
      issues.push(where + " stage[" + i + "] ('" + s.stage + "'): no actions");
      return;
    }
    s.actions.forEach((a, j) => {
      if (!a.text) issues.push(where + " stage[" + i + "] action[" + j + "]: missing text");
      if (!ipmTypes.has(a.type)) issues.push(where + " stage[" + i + "] action[" + j + "]: unknown type '" + a.type + "'");
    });
  });
}

Object.keys(A.ipmPrograms || {}).forEach((crop) => {
  if (!cropIds.has(crop)) issues.push("IPM programme '" + crop + "': not a known crop id");
  const p = A.ipmPrograms[crop];
  if (!p.note) issues.push("IPM programme '" + crop + "': missing note");
  auditStages("IPM '" + crop + "'", p.stages);
});
auditStages("IPM generic", A.ipmGeneric);

/* ---------------- field tools ---------------- */

const units = A.thresholdUnits || [];
if (!Array.isArray(units) || !units.length) issues.push("thresholdUnits: empty");
units.forEach((u, i) => {
  if (!u || typeof u !== "string") issues.push("thresholdUnits[" + i + "]: not a string");
  if (units.indexOf(u) !== i) issues.push("thresholdUnits[" + i + "]: duplicate '" + u + "'");
});

const presetIds = new Set();
(A.gddPresets || []).forEach((g) => {
  if (!g.id) issues.push("gdd preset '" + g.name + "': missing id");
  if (presetIds.has(g.id)) issues.push("duplicate gdd preset id: " + g.id);
  presetIds.add(g.id);
  if (!g.name || !g.note) issues.push("gdd preset '" + g.id + "': missing name or note");
  if (!(g.base >= -5 && g.base <= 30)) issues.push("gdd preset '" + g.id + "': base outside -5..30 (" + g.base + ")");
});

console.log(
  "Entries: " + A.pests.length +
  " | crops: " + A.crops.length +
  " | guides: " + Object.keys(A.cropGuides).length +
  " | MoA: " + A.moa.length +
  " | symptoms: " + A.symptoms.length +
  " | key: " + Object.keys(keyNodes).length + " couplets, " + Object.keys(taxa).length + " taxa"
);
console.log("ISSUES: " + issues.length);
issues.slice(0, 80).forEach((i) => console.log(" - " + i));

process.exit(issues.length ? 1 : 0);
