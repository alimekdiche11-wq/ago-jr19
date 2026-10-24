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

console.log(
  "Entries: " + A.pests.length +
  " | crops: " + A.crops.length +
  " | guides: " + Object.keys(A.cropGuides).length +
  " | MoA: " + A.moa.length +
  " | symptoms: " + A.symptoms.length
);
console.log("ISSUES: " + issues.length);
issues.slice(0, 80).forEach((i) => console.log(" - " + i));

process.exit(issues.length ? 1 : 0);
