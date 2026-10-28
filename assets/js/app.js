/* ============================================================
   AgroScope — application layer
   Classic script, no dependencies, works from file://
   ============================================================ */

(function () {
  "use strict";

  const AGRO = window.AGRO;
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------- icons ---------------- */

  const ICONS = {
    dash:   '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    diag:   '<path d="M3 12h3.5l2-5.5 3 11 2.5-5.5H21"/>',
    book:   '<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2Z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2Z"/>',
    leaf:   '<path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 15-9 0 8-3 15-9 15Z"/><path d="M4 20c3-5 7-8 12-9"/>',
    key:    '<path d="M14 7a4 4 0 1 0-3.2 3.9L4 18v3h3l1-1v-2h2v-2h1.1L14 12.9A4 4 0 0 0 14 7Z"/>',
    ipm:    '<path d="M4 6h16M4 12h16M4 18h10"/><path d="M18 16l2 2 3-3"/>',
    rotate: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>',
    scout:  '<path d="M9 4h6v3H9z"/><path d="M8 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2"/><path d="M9 12h6M9 16h4"/>',
    gdd:    '<path d="M10 4a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0Z"/><path d="M12 10v6"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>',
    info:   '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    plus:   '<path d="M12 5v14M5 12h14"/>',
    arrow:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back:   '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    print:  '<path d="M7 8V3h10v5"/><path d="M7 18H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2"/><path d="M7 14h10v7H7z"/>',
    link:   '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    download:'<path d="M12 3v12M7 11l5 5 5-5"/><path d="M5 21h14"/>',
    trash:  '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
    cycle:  '<path d="M4 8h12l-3-3"/><path d="M4 8l3 3"/><path d="M20 16H8l3 3"/><path d="M20 16l-3-3"/>'
  };

  const icon = (name, cls) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="${cls || ""}" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------------- utilities ---------------- */

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* "1 reference entry" / "3 reference entries" — counts appear in several
     places and a wrong plural reads like a bug. */
  const plural = (n, one, many) => n + " " + (n === 1 ? one : many);

  const cropOf = (id) => AGRO.crops.find((c) => c.id === id);
  const cropName = (id) => (cropOf(id) ? cropOf(id).name : id);
  const symLabel = (id) => {
    const s = AGRO.symptoms.find((x) => x.id === id);
    return s ? s.label : id;
  };
  const pestById = (id) => AGRO.pests.find((p) => p.id === id);

  const KIND_LABEL = {
    insect: "Insect", mite: "Mite", disease: "Disease", weed: "Weed",
    beneficial: "Beneficial", disorder: "Disorder"
  };

  function sevBar(n) {
    let html = '<span class="sev sev' + n + '" title="Severity ' + n + '/5">';
    for (let i = 1; i <= 5; i++) html += '<i class="' + (i <= n ? "on" : "") + '"></i>';
    return html + "</span>";
  }

  function kindPill(p) {
    if (p.kind === "beneficial") return '<span class="pill pill-green">Beneficial</span>';
    if (p.kind === "disease") return '<span class="pill pill-amber">' + esc(p.type || "Disease") + "</span>";
    if (p.kind === "weed") return '<span class="pill pill-blue">Weed</span>';
    if (p.kind === "disorder") return '<span class="pill pill-blue">' + esc(p.type || "Disorder") + "</span>";
    return '<span class="pill">' + esc(KIND_LABEL[p.kind] || p.kind) + "</span>";
  }

  /* ---------------- state ---------------- */

  const LS_SCOUT = "agroscope.scout.v1";
  const LS_SEQ = "agroscope.sequence.v1";
  const LS_DIAG = "agroscope.diagnosis.v1";
  const LS_ROT = "agroscope.rotation.v1";

  function freshDiag() {
    return { step: 0, crop: null, organ: null, symptoms: [], pattern: null, allSyms: false };
  }

  /* The assessment is the one piece of work that cannot be recreated after an
     accidental reload: a field observation takes time to enter. It is kept
     locally and handed back on return. Only ids that still exist in the
     dataset survive, so an old saved answer cannot point at a removed entry. */
  function loadDiag() {
    try {
      const v = JSON.parse(localStorage.getItem(LS_DIAG));
      if (!v || !AGRO.crops.some((c) => c.id === v.crop)) return null;
      const organ = AGRO.organs.some((o) => o.id === v.organ) ? v.organ : null;
      const symptoms = Array.isArray(v.symptoms)
        ? v.symptoms.filter((id) => AGRO.symptoms.some((s) => s.id === id)) : [];
      const pattern = AGRO.patterns.some((p) => p.id === v.pattern) ? v.pattern : null;
      let step = Math.min(Math.max(Number(v.step) || 1, 1), 4);
      if (!organ) step = Math.min(step, 1);
      else if (!symptoms.length) step = Math.min(step, 2);
      return { step: step, crop: v.crop, organ: organ, symptoms: symptoms,
        pattern: pattern, allSyms: !!v.allSyms };
    } catch (e) { return null; }
  }

  function saveDiag() {
    try {
      if (state.diag.step === 0) localStorage.removeItem(LS_DIAG);
      else localStorage.setItem(LS_DIAG, JSON.stringify(state.diag));
    } catch (e) { /* private mode: the session simply does not resume */ }
  }

  function loadScout() {
    try { return JSON.parse(localStorage.getItem(LS_SCOUT)) || []; }
    catch (e) { return []; }
  }

  function loadSeq() {
    try {
      const v = JSON.parse(localStorage.getItem(LS_SEQ));
      return Array.isArray(v) ? v.filter((id) => AGRO.cropGuides[id]) : [];
    } catch (e) { return []; }
  }

  /* The rotation tracker accumulates over a season, so losing it on reload
     means re-checking every group. It is saved like the scouting log, and the
     stored keys are validated against the current dataset so a group that is
     renamed or withdrawn cannot reappear. */
  function loadRot() {
    try {
      const v = JSON.parse(localStorage.getItem(LS_ROT));
      const valid = new Set(AGRO.moa.map((g) => g.scheme + ":" + g.code));
      return new Set(Array.isArray(v) ? v.filter((k) => valid.has(k)) : []);
    } catch (e) { return new Set(); }
  }

  function saveRot() {
    try {
      if (!state.rot.size) localStorage.removeItem(LS_ROT);
      else localStorage.setItem(LS_ROT, JSON.stringify(Array.from(state.rot)));
    } catch (e) { /* private mode: the selection does not survive the session */ }
  }

  const state = {
    route: "dashboard",
    param: null,
    diag: freshDiag(),
    lib: { kind: "all", crop: "all", q: "" },
    keyTrail: [],
    keyPath: [AGRO.keyStart],
    keyNode: AGRO.keyStart,
    rot: loadRot(),
    scout: loadScout(),
    /* Which observation + unit the scouting trend is showing; null means the
       most recently recorded series. Not persisted: it follows the data. */
    scoutSeries: null,
    /* What is typed into the observation form but not yet saved. Kept across
       re-renders (switching the chart series, deleting a row) so a half-typed
       field note is not thrown away by a click somewhere else. */
    scoutDraft: null,
    seq: loadSeq(),
    gdd: null,
    cropGuide: null,
    modalPest: null
  };

  function saveSeq() {
    try { localStorage.setItem(LS_SEQ, JSON.stringify(state.seq)); } catch (e) {}
  }

  function saveScout() {
    try { localStorage.setItem(LS_SCOUT, JSON.stringify(state.scout)); }
    catch (e) { toast("Local storage unavailable — entries kept for this session only."); }
  }

  /* Restore the last assessment before the first render, so returning to the
     page resumes instead of starting over. A share link still overrides it. */
  (function () {
    const saved = loadDiag();
    if (saved) { state.diag = saved; state._diagResumed = true; }
  })();

  /* ---------------- theme ---------------- */

  const LS_THEME = "agroscope.theme";

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncThemeButton() {
    const dark = currentTheme() === "dark";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0f1512" : "#1f6f4a");
    const b = document.querySelector('[data-action="theme"]');
    if (!b) return;
    const label = dark ? "Switch to light theme" : "Switch to dark theme";
    b.setAttribute("aria-label", label);
    b.setAttribute("title", label);
    b.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  function setTheme(mode) {
    if (mode === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem(LS_THEME, mode); } catch (e) {}
    syncThemeButton();
  }

  let toastTimer = null;
  let toastAction = null;

  /* A message for the live region, optionally with one action the reader can
     take before it disappears (used to undo a deletion). The action is not
     announced by the status region, so it is a real, reachable button. */
  function toast(msg, action) {
    const t = $("#toast");
    const undo = $("#toastUndo");
    $("#toastMsg").textContent = msg;
    /* The visible bar comes and goes; the live region never leaves the
       accessibility tree, so the message is announced when it is long past. */
    $("#toastLive").textContent = msg;
    toastAction = action || null;
    if (action) {
      undo.textContent = action.label;
      undo.hidden = false;
    } else {
      undo.hidden = true;
    }
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.hidden = true;
      undo.hidden = true;
      toastAction = null;
    }, action ? 7000 : 2600);
  }

  /* ---------------- modal ---------------- */

  let lastFocused = null;
  function openModal(html, pest) {
    /* A second profile opened from inside the first (the dialog stays open)
       must not adopt an element from the HTML that is about to be replaced:
       closing would then try to restore focus into a detached node. */
    if ($("#modal").hidden) lastFocused = document.activeElement;
    $("#modalBody").innerHTML = html;
    $("#modal").hidden = false;
    /* Print styles use this to drop the page behind the dialog: printing an
       open profile must yield the profile, not the listing it was opened
       from. */
    document.documentElement.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    /* A pest profile is what the reader is looking at, whatever route opened
       it, so it names the tab while the dialog stays open. */
    state.modalPest = pest ? pest.id : null;
    document.title = routeTitle();
    const card = $("#modal").querySelector(".modal-card");
    if (card) {
      const target = card.querySelector(".modal-x") || card;
      target.focus();
    }
  }
  function closeModal() {
    const pestId = state.modalPest;
    $("#modal").hidden = true;
    $("#modalBody").innerHTML = "";
    document.documentElement.classList.remove("modal-open");
    document.body.style.overflow = "";
    state.modalPest = null;

    /* A profile opened from a deep link (#/library/<id>) would be opened again
       by the next render for as long as that id stays in the address. Closing
       therefore returns the address to the plain library, replacing the history
       entry so that Back does not reopen what was just dismissed. */
    const r = parseHash();
    if (r.route === "library" && r.param && pestById(r.param)) {
      try { history.replaceState(null, "", "#/library"); }
      catch (e) { location.hash = "#/library"; }
      const after = parseHash();
      state.param = after.param;
      state.sub = after.sub;
    }
    document.title = routeTitle();

    /* Focus goes back where it came from. A profile reached by clicking a card
       puts its id in the address first, so the list is rebuilt and the original
       card is detached: fall back to the card for the same profile, which is
       the element the reader used. */
    const opener = lastFocused && lastFocused !== document.body &&
      document.contains(lastFocused) ? lastFocused : null;
    if (opener) opener.focus();
    else if (pestId) {
      const card = $('#view [data-action="open-pest"][data-id="' + pestId + '"]');
      if (card) card.focus();
    }
    lastFocused = null;
  }

  function shortcutsModal() {
    const rows = [
      ["/", "Jump to the search box"],
      ["?", "Show this shortcut list"],
      ["Esc", "Close a dialog or the menu"],
      ["Enter / Space", "Open the focused card or result"],
      ["Tab / Shift+Tab", "Move focus; cycles inside a dialog"]
    ];
    return '<div class="detail-head">' +
        '<h2 id="modalTitle">Keyboard shortcuts</h2>' +
        '<p class="small muted" style="margin-top:6px">The workbench is fully usable without a mouse.</p>' +
      "</div>" +
      '<div class="table-wrap"><table><tbody>' +
        rows.map((r) => '<tr><td style="width:170px"><span class="kbd">' + esc(r[0]) + '</span></td><td class="small">' + esc(r[1]) + "</td></tr>").join("") +
      "</tbody></table></div>" +
      '<div class="callout" style="margin-top:14px"><strong>Cards and results behave as buttons.</strong> ' +
      "Library entries and diagnosis results take focus with Tab and open with Enter or Space; the detail dialog traps focus until you close it.</div>";
  }

  /* ---------------- navigation ---------------- */

  const NAV = [
    { section: "Workbench" },
    { route: "dashboard", label: "Overview", icon: "dash" },
    { route: "diagnose",  label: "Diagnose a problem", icon: "diag" },
    { route: "key",       label: "Identification key", icon: "key" },
    { section: "Reference" },
    { route: "crops",     label: "Crop agronomy", icon: "leaf" },
    { route: "library",   label: "Pest & disease library", icon: "book", count: () => AGRO.pests.length },
    { route: "ipm",       label: "IPM planner", icon: "ipm" },
    { route: "rotation",  label: "Resistance rotation", icon: "rotate" },
    { route: "sequence",  label: "Crop rotation", icon: "cycle" },
    { section: "Field tools" },
    { route: "scout",     label: "Scouting log", icon: "scout", count: () => state.scout.length },
    { route: "gdd",       label: "Degree days", icon: "gdd" },
    { route: "protocol",  label: "Photo & sample protocol", icon: "camera" },
    { section: "About" },
    { route: "about",     label: "Scope & sources", icon: "info" }
  ];

  /* SPA route names are invisible to the browser: the tab, history and
     bookmarks keep the document title from index.html. Give every route a
     title of its own, and name the record when a detail view is open, so a
     reader can tell two tabs apart and WCAG 2.4.2 holds. */
  const SITE_TITLE = "AgroScope — Agronomy, Entomology & Plant Protection Workbench";

  function routeTitle() {
    const modalPest = state.modalPest && pestById(state.modalPest);
    if (modalPest) return modalPest.name + " · AgroScope";
    if (!state.route || state.route === "dashboard") return SITE_TITLE;
    const nav = NAV.find((n) => n.route === state.route);
    if (!nav) return SITE_TITLE;
    let detail = "";
    if (state.param && state.route === "library") {
      const pest = pestById(state.param);
      const crop = pest ? null : cropOf(state.param);
      if (pest) detail = pest.name;
      else if (crop) detail = crop.name + " guide";
    } else if (state.param && state.route === "crops") {
      const crop = cropOf(state.param);
      if (crop) detail = crop.name;
    }
    return (detail ? detail + " · " + nav.label : nav.label) + " · AgroScope";
  }

  function renderNav() {
    $("#nav").innerHTML = NAV.map((n) => {
      if (n.section) return '<div class="nav-label">' + n.section + "</div>";
      const c = typeof n.count === "function" ? n.count() : null;
      const isActive = state.route === n.route;
      return '<a href="#/' + n.route + '" class="' + (isActive ? "active" : "") + '"' +
        (isActive ? ' aria-current="page"' : "") + ">" +
        icon(n.icon) + "<span>" + n.label + "</span>" +
        (c != null ? '<span class="count">' + c + "</span>" : "") + "</a>";
    }).join("");
  }

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    const qi = raw.indexOf("?");
    const path = qi === -1 ? raw : raw.slice(0, qi);
    const bits = path.split("/");
    return {
      route: bits[0] || "dashboard",
      param: bits[1] ? decodeURIComponent(bits[1]) : null,
      sub: bits[2] ? decodeURIComponent(bits[2]) : null,
      params: new URLSearchParams(qi === -1 ? "" : raw.slice(qi + 1))
    };
  }

  /* A shared diagnosis link carries its answers in the hash query, e.g.
     #/diagnose?crop=citrus&organ=leaf&symptoms=chlorosis&pattern=whole.
     Rebuild the wizard state from it, stopping at the furthest complete step
     so a partially filled link still behaves sensibly. */
  function hydrateDiag(params) {
    const crop = params.get("crop");
    if (!AGRO.crops.some((c) => c.id === crop)) return;
    const d = { step: 1, crop: crop, organ: null, symptoms: [], pattern: null, allSyms: false };
    const organ = params.get("organ");
    if (AGRO.organs.some((o) => o.id === organ)) { d.organ = organ; d.step = 2; }
    const syms = (params.get("symptoms") || "").split(",").map((s) => s.trim())
      .filter((id) => AGRO.symptoms.some((s) => s.id === id));
    if (d.organ && syms.length) { d.symptoms = syms; d.step = 3; }
    const pattern = params.get("pattern");
    if (d.symptoms.length && AGRO.patterns.some((p) => p.id === pattern)) {
      d.pattern = pattern; d.step = 4;
    }
    state.diag = d;
  }

  function render() {
    const r = parseHash();
    state.route = r.route;
    state.param = r.param;
    state.sub = r.sub;
    state.params = r.params;

    /* Apply a shared diagnosis link once per distinct query. Later re-renders
       (after an answer) keep the hash unchanged, so they must not re-hydrate
       and undo what the user just changed. */
    if (r.route === "diagnose") {
      const shareKey = "diagnose?" + r.params.toString();
      if (r.params.has("crop") && state._diagShareKey !== shareKey) {
        /* The link is authoritative: apply it if it is valid, and start from
           scratch if it names a crop this build does not know, so a stale
           link never lands the reader in an unrelated saved assessment. */
        if (AGRO.crops.some((c) => c.id === r.params.get("crop"))) hydrateDiag(r.params);
        else state.diag = freshDiag();
        state._diagResumed = false;
      }
      state._diagShareKey = shareKey;
    } else {
      state._diagShareKey = null;
    }

    const views = {
      dashboard: viewDashboard,
      diagnose: viewDiagnose,
      crops: viewCrops,
      library: viewLibrary,
      key: viewKey,
      ipm: viewIpm,
      rotation: viewRotation,
      sequence: viewSequence,
      scout: viewScout,
      gdd: viewGdd,
      protocol: viewProtocol,
      about: viewAbout
    };

    const fn = views[state.route] || viewDashboard;
    const routeChanged = state._rendered !== state.route;
    const focusInView = $("#view").contains(document.activeElement);
    document.title = routeTitle();
    renderNav();
    $("#view").innerHTML = fn();

    /* Address and screen must agree. Now that a clicked profile has its own
       address, Back (or a nav link) can leave that address while the dialog is
       still up; close it so the visible screen matches the URL. */
    if (state.modalPest && !(state.route === "library" && state.param === state.modalPest)) {
      closeModal();
    }

    const active = $('.nav a[href="#/' + state.route + '"]');
    if (active) active.classList.add("active");

    if (routeChanged) { window.scrollTo(0, 0); state._rendered = state.route; }

    /* The diagnosis and key wizards replace their whole view on every answer.
       If the control that was just used disappeared, move focus to the new
       step heading so keyboard and screen-reader users do not fall back to the
       body. Other views re-render while focus sits in the top bar (the search
       field), so the guard keeps typing undisturbed. */
    if (focusInView && (state.route === "diagnose" || state.route === "key") &&
        document.activeElement === document.body) {
      const h = $("#view").querySelector("h2") || $("#view").querySelector("h1");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
    }

    if (state.route === "library" && state.param) {
      const crop = cropOf(state.param);
      const pest = pestById(state.param);
      const KIND_SET = ["insect", "mite", "disease", "weed", "disorder", "beneficial"];
      if (state.sub === "all") state.lib.kind = "all";
      else if (KIND_SET.indexOf(state.sub) !== -1) state.lib.kind = state.sub;
      if (pest) openModal(pestDetail(pest), pest);
      else if (crop) { state.lib.crop = crop.id; $("#view").innerHTML = viewLibrary(); }
    }

    if (state.route === "diagnose") saveDiag();
  }

  /* ============================================================
     VIEW: dashboard
     ============================================================ */

  function viewDashboard() {
    const counts = {
      insects: AGRO.pests.filter((p) => p.kind === "insect").length,
      mites: AGRO.pests.filter((p) => p.kind === "mite").length,
      diseases: AGRO.pests.filter((p) => p.kind === "disease").length,
      weeds: AGRO.pests.filter((p) => p.kind === "weed").length,
      disorders: AGRO.pests.filter((p) => p.kind === "disorder").length,
      beneficials: AGRO.pests.filter((p) => p.kind === "beneficial").length
    };

    const cropTiles = AGRO.crops.map((c) => {
      const n = AGRO.pests.filter((p) => p.crops && p.crops.includes(c.id) && p.kind !== "beneficial").length;
      return '<a class="crop-tile" href="#/crops/' + c.id + '">' +
        '<div class="ct-top"><span class="ct-name">' + esc(c.name) + "</span>" +
        '<span class="crop-glyph">' + esc(c.mono) + "</span></div>" +
        '<span class="ct-sci">' + esc(c.sci) + "</span>" +
        '<span class="ct-meta">' + plural(n, "reference entry", "reference entries") + " · agronomy guide</span>" +
        "</a>";
    }).join("");

    const recent = state.scout.slice(-3).reverse();

    return '' +
    '<section class="hero">' +
      '<div class="eyebrow" style="color:#8fdcb4">Agronomy · entomology · plant protection</div>' +
      "<h1>Diagnose the field, not the photograph.</h1>" +
      "<p>A working reference for crop problems: a dichotomous insect key, per-crop agronomy guides, a pest, disease and disorder library with biology and thresholds, " +
      "seasonal IPM programmes, resistance rotation, a scouting log and degree-day timing — built for Mediterranean and Saharan systems.</p>" +
      '<div class="hero-actions">' +
        '<a class="btn btn-light" href="#/diagnose">' + icon("diag") + "Start a diagnosis</a>" +
        '<a class="btn" href="#/key">' + icon("key") + "Open the identification key</a>" +
        '<a class="btn" href="#/crops">' + icon("leaf") + "Crop agronomy guides</a>" +
        '<a class="btn" href="#/library">' + icon("book") + "Browse the library</a>" +
      "</div>" +
      '<div class="hero-chips">' +
        '<span class="pill">' + plural(AGRO.pests.length, "reference entry", "reference entries") + "</span>" +
        '<span class="pill">' + plural(AGRO.pests.filter((p) => p.kind === "disorder").length, "abiotic disorder", "abiotic disorders") + "</span>" +
        '<span class="pill">' + plural(AGRO.crops.length, "crop guide", "crop guides") + "</span>" +
        '<span class="pill">IRAC · FRAC · HRAC rotation</span>' +
        '<span class="pill">Offline</span>' +
      "</div>" +
    "</section>" +

    '<div class="grid g4" style="margin-bottom:18px">' +
      stat("Arthropod pests", counts.insects + counts.mites, "insects and mites") +
      stat("Diseases, weeds &amp; disorders", counts.diseases + counts.weeds + counts.disorders, "pathogens, nematodes, abiotic causes") +
      stat("Natural enemies", counts.beneficials, "predators and parasitoids") +
      stat("Scouting records", state.scout.length, "stored on this device") +
    "</div>" +

    '<div class="grid g3" style="align-items:start">' +
      '<div class="card pad-lg" style="grid-column:span 2">' +
        '<div class="card-head"><h2>Start from the crop</h2><span class="spacer"></span>' +
          '<span class="tiny muted">Agronomy guide, reference list and programme</span></div>' +
        '<div class="grid g3">' + cropTiles + "</div>" +
      "</div>" +

      '<div class="stack">' +
        '<div class="card">' +
          '<div class="card-head"><h2>Method</h2></div>' +
          '<ol class="small" style="margin:0;padding-left:18px;color:var(--ink-700);line-height:1.75">' +
            "<li>Identify the organism, not the symptom.</li>" +
            "<li>Match the life stage to the susceptible window.</li>" +
            "<li>Compare against a threshold, not against fear.</li>" +
            "<li>Prevent first; intervene selectively.</li>" +
            "<li>Rotate the mode of action, always.</li>" +
          "</ol>" +
        "</div>" +
        '<div class="card">' +
          '<div class="card-head"><h2>Recent scouting</h2><span class="spacer"></span><a class="small" href="#/scout">All</a></div>' +
          (recent.length
            ? recent.map((s) =>
                '<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--line-2)">' +
                "<div style=\"flex:1;min-width:0\"><div class=\"small strong\" style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap\">" + esc(s.pest || "Untitled") + "</div>" +
                '<div class="tiny muted">' + esc(cropName(s.crop)) + " · " + esc(s.date) + "</div></div>" +
                '<div class="mono">' + esc(s.count) + "</div></div>").join("")
            : '<p class="small muted">No records yet. <a href="#/scout">Add the first observation</a>.</p>') +
        "</div>" +
        '<div class="callout"><strong>Reminder.</strong> Product names and doses are deliberately absent. ' +
          "The registered label — and the national authorisation — control every application.</div>" +
      "</div>" +
    "</div>";
  }

  function stat(k, v, s) {
    return '<div class="stat"><div class="k">' + k + '</div><div class="v">' + v + '</div><div class="s">' + s + "</div></div>";
  }

  /* ============================================================
     VIEW: diagnose
     ============================================================ */

  function diagSteps() {
    return ["Crop", "Organ", "Symptoms", "Pattern", "Assessment"];
  }

  function viewDiagnose() {
    const d = state.diag;
    const steps = diagSteps();

    const header =
      '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Differential diagnosis</div>' +
        "<h1>What is wrong with the crop?</h1>" +
        '<p class="lede">A structured path from crop and organ to a ranked list of candidates. ' +
        "This is a hypothesis generator, not a confirmation — the final step tells you what evidence would settle it.</p>" +
        (state._diagResumed ? '<p class="small muted" style="margin-top:8px">Resumed where you left off on this device. "Restart" clears it.</p>' : "") +
      "</div>" +
      '<div class="page-actions"><button class="btn btn-ghost" data-action="diag-reset">' + icon("rotate") + "Restart</button></div>" +
      "</div>";
    state._diagResumed = false;

    const stepper = '<div class="steps">' + steps.map((s, i) =>
      '<div class="step ' + (i === d.step ? "on" : i < d.step ? "done" : "") + '">' +
      '<span class="num">' + (i < d.step ? "✓" : i + 1) + "</span>" + s + "</div>").join("") + "</div>";

    let body = "";

    if (d.step === 0) {
      body = '<div class="card pad-lg">' +
        '<h2 style="margin-bottom:6px">Select the crop</h2>' +
        '<p class="small muted" style="margin-bottom:16px">The candidate list is restricted to organisms recorded on this crop.</p>' +
        '<div class="opt-grid">' + AGRO.crops.map((c) =>
          '<button class="opt ' + (d.crop === c.id ? "on" : "") + '" data-action="diag-crop" data-id="' + c.id + '">' +
          '<span class="o-t">' + esc(c.name) + "</span>" +
          '<span class="o-s">' + esc(c.sci) + "</span></button>").join("") + "</div></div>";
    }

    if (d.step === 1) {
      body = '<div class="card pad-lg">' +
        '<h2 style="margin-bottom:6px">Where is the problem?</h2>' +
        '<p class="small muted" style="margin-bottom:16px">Choose the organ carrying the most informative symptoms.</p>' +
        '<div class="opt-grid">' + AGRO.organs.map((o) =>
          '<button class="opt ' + (d.organ === o.id ? "on" : "") + '" data-action="diag-organ" data-id="' + o.id + '">' +
          '<span class="o-t">' + o.label + "</span>" +
          '<span class="o-s">' + o.hint + "</span></button>").join("") + "</div>" +
        '<div class="row" style="margin-top:18px"><button class="btn" data-action="diag-back">' + icon("back") + "Back</button></div></div>";
    }

    if (d.step === 2) {
      const list = d.allSyms ? AGRO.symptoms : AGRO.symptoms.filter((s) => s.group === d.organ);
      body = '<div class="card pad-lg">' +
        '<div class="row" style="margin-bottom:4px"><h2 style="margin:0">Select every symptom you can confirm</h2></div>' +
        '<p class="small muted" style="margin-bottom:12px">Two or more symptoms sharply improve the ranking. Deselect anything you are unsure about.</p>' +
        '<div class="row" style="margin-bottom:14px">' +
          '<button class="btn btn-sm" data-action="diag-all-syms">' +
            (d.allSyms ? "Show only this organ" : "Show symptoms from all organs") + "</button>" +
          '<span class="tiny muted">' + (d.allSyms ? "All symptom groups displayed" : "Filtered to: " + esc((AGRO.organs.find((o) => o.id === d.organ) || {}).short || "")) + "</span>" +
        "</div>" +
        '<div class="opt-grid">' + list.map((s) =>
          '<button class="opt ' + (d.symptoms.includes(s.id) ? "on" : "") + '" data-action="diag-symptom" data-id="' + s.id + '">' +
          '<span class="o-t">' + esc(s.label) + "</span>" +
          (d.allSyms ? '<span class="o-s">' + esc(s.group) + "</span>" : "") + "</button>").join("") + "</div>" +
        (list.length === 0 ? '<p class="small muted">No symptom set for this organ; go back and choose another.</p>' : "") +
        '<div class="row" style="margin-top:18px">' +
          '<button class="btn" data-action="diag-back">' + icon("back") + "Back</button>" +
          '<span class="spacer"></span>' +
          '<button class="btn btn-primary" data-action="diag-next" ' + (d.symptoms.length ? "" : "disabled") + ">Continue " + icon("arrow") + "</button>" +
        "</div></div>";
    }

    if (d.step === 3) {
      body = '<div class="card pad-lg">' +
        '<h2 style="margin-bottom:6px">Distribution in the field</h2>' +
        '<p class="small muted" style="margin-bottom:16px">Useful context, and shown alongside the result as an interpretive note.</p>' +
        '<div class="opt-grid">' + AGRO.patterns.map((p) =>
          '<button class="opt ' + (d.pattern === p.id ? "on" : "") + '" data-action="diag-pattern" data-id="' + p.id + '">' +
          '<span class="o-t">' + esc(p.label) + "</span>" +
          '<span class="o-s">' + esc(p.hint) + "</span></button>").join("") + "</div>" +
        '<div class="row" style="margin-top:18px">' +
          '<button class="btn" data-action="diag-back">' + icon("back") + "Back</button>" +
          '<span class="spacer"></span>' +
          '<button class="btn btn-primary" data-action="diag-run">' + icon("search") + "Rank candidates</button>" +
        "</div></div>";
    }

    if (d.step === 4) {
      const results = diagnose();
      const pattern = AGRO.patterns.find((p) => p.id === d.pattern);
      const top = results.slice(0, 6);
      const cropEntryCount = AGRO.pests.filter((p) =>
        p.kind !== "beneficial" && (p.crops || []).includes(d.crop)).length;
      const chosen = d.symptoms.map(symLabel);

      body = '<div class="row" style="margin-bottom:14px">' +
        '<div><div class="eyebrow" style="margin:0">Assessment</div>' +
        '<h2 style="margin:2px 0 0">' + esc(cropName(d.crop)) + " · " + esc((AGRO.organs.find((o) => o.id === d.organ) || {}).label || "") + "</h2></div>" +
        '<span class="spacer"></span>' +
        '<button class="btn" data-action="diag-link">' + icon("link") + "Copy link</button>" +
        '<button class="btn" data-action="diag-csv">' + icon("download") + "CSV</button>" +
        '<button class="btn" data-action="print">' + icon("print") + "Print</button>" +
        '<button class="btn btn-ghost" data-action="diag-back">' + icon("back") + "Refine</button>" +
        "</div>" +

        (pattern ? '<div class="callout green" style="margin-bottom:14px"><strong>Field pattern: ' + esc(pattern.label) + ".</strong> " + esc(pattern.hint) + ".</div>" : "") +

        '<div class="row-tight" style="margin-bottom:14px">' +
          (AGRO.cropGuides[d.crop] ? '<a class="btn btn-sm" href="#/crops/' + d.crop + '">' + icon("leaf") + "Agronomy guide</a>" : "") +
          '<a class="btn btn-sm" href="#/library/' + d.crop + '/all">' + icon("book") + "All entries for " + esc(cropName(d.crop)) + "</a>" +
        "</div>" +

        '<p class="small muted" role="status" style="margin:0 0 10px">' +
          (results.length === 0 ? "No candidate matched these symptoms." :
            results.length + " candidate" + (results.length === 1 ? "" : "s") +
            (results.length > top.length ? " matched; the " + top.length + " closest are shown below." : " matched, closest fit first.")) +
        "</p>" +

        (top.length ? top.map((r) => resultRow(r)).join("") :
          '<div class="empty">' +
            "<h2>No entry matches those symptoms</h2>" +
            '<p class="small">' + esc(cropName(d.crop)) + " has " + plural(cropEntryCount, "entry", "entries") + " in this library, but none of them lists " +
              esc(chosen.slice(0, 4).join("; ")) + (chosen.length > 4 ? " and the other symptoms you selected" : "") + ". " +
              "That means the combination is not recorded here — not that nothing causes it.</p>" +
            '<p class="small muted">Deselect the symptom you are least sure about, look at a different organ, or read the crop guide ' +
              "first: a symptom described one way in the field can be recorded under another description in the library.</p>" +
            '<div class="row" style="margin-top:12px"><button class="btn" data-action="diag-back">' + icon("back") + "Back to symptoms</button></div>" +
          "</div>") +

        '<div class="card" style="margin-top:18px">' +
          '<div class="card-head"><h2>How to confirm</h2></div>' +
          '<ul class="small" style="margin:0;padding-left:18px;color:var(--ink-700);line-height:1.8">' +
            "<li><strong>Insects and mites:</strong> rear larvae to adults, photograph wing venation and antennae, or use DNA barcoding (COI) when morphology is ambiguous.</li>" +
            "<li><strong>Diseases:</strong> laboratory isolation, ELISA or PCR. Foliar symptoms alone rarely justify a species-level diagnosis.</li>" +
            "<li><strong>Abiotic causes:</strong> soil and water analysis, plus a check of the spray and fertiliser record for the last 30 days.</li>" +
            "<li><strong>Anything quarantine-relevant:</strong> contact the national plant protection service before acting.</li>" +
          "</ul></div>" +

        '<div class="callout" style="margin-top:16px"><strong>Confidence is not certainty.</strong> ' +
          "Percentage scores express how well the observed characters fit each candidate, not the probability that the diagnosis is correct.</div>" +

        /* Printed only: a sheet taken to the field should carry its own
           provenance, so anyone reading it can reopen the exact answers. */
        '<div class="print-only" style="margin-top:18px;border-top:1px solid var(--line);padding-top:8px">' +
          '<div class="tiny">AgroScope — differential diagnosis assessment, printed ' + new Date().toISOString().slice(0, 10) +
            ". Scores express fit to the observed characters, not the probability that a diagnosis is correct. " +
            "Any pesticide application is governed by the national label.</div>" +
          '<div class="tiny" style="margin-top:4px">Answers: ' + esc(diagShareUrl()) + "</div>" +
        "</div>";
    }

    return header + stepper + body;
  }

  function resultRow(r) {
    const p = r.p;
    const lvl = r.pct >= 75 ? "high" : r.pct >= 55 ? "mid" : "low";
    const conf = r.pct >= 75 ? "High fit" : r.pct >= 55 ? "Moderate fit" : "Low fit";
    const why = r.why.slice(0, 4).map((w) => '<span class="pill">' + esc(w) + "</span>").join("");
    const cover = r.selN ? " · " + r.hits + "/" + r.selN + " symptoms" : "";
    return '<div class="result lvl-' + lvl + '" role="button" tabindex="0" data-action="open-pest" data-id="' + p.id + '">' +
      '<div class="bar"></div>' +
      "<div><h3>" + esc(p.name) + "</h3>" +
      '<div class="res-sub"><span class="sci">' + esc(p.sci) + "</span> · " + esc(KIND_LABEL[p.kind] || p.kind) + esc(cover) + "</div>" +
      '<div class="res-why">' + why + "</div></div>" +
      '<div class="res-score"><div class="n">' + r.pct + '%</div><div class="l">' + conf + "</div></div>" +
      "</div>";
  }

  function diagnose() {
    const d = state.diag;
    if (!d.crop) return [];
    const selected = new Set(d.symptoms);
    const selN = selected.size;
    const out = [];

    AGRO.pests.forEach((p) => {
      if (p.kind === "beneficial") return;
      if (!p.crops || !p.crops.includes(d.crop)) return;

      const hits = (p.symptoms || []).filter((s) => selected.has(s));
      if (selN && hits.length === 0) return; // no symptomatic evidence at all

      const symRatio = selN ? hits.length / selN : 0.5;
      const organs = p.organs || [];
      const organF = organs.includes(d.organ) ? 1 : organs.includes("whole") ? 0.6 : 0.3;

      // 70 % symptom fit, 20 % organ fit, 10 % host confirmation
      let pct = Math.round(100 * (0.7 * symRatio + 0.2 * organF + 0.1));

      // A single symptom cannot support high confidence
      if (selN < 2) pct = Math.min(pct, 74);

      const why = hits.map(symLabel);
      if (organF === 1) why.unshift("organ match");

      // Documented field-pattern nudge for abiotic / nutritional disorders.
      // A uniform, patchy-by-drainage or row-regular distribution is more
      // consistent with soil, water, climate or spray causes than with a
      // focal, contagious pest or pathogen. This is context, not proof.
      if (p.kind === "disorder" && d.pattern) {
        const fits = {
          whole:    ["uniform distribution", "abiotic / nutritional pattern"],
          lowspots: ["wet-zone pattern", "abiotic / nutritional pattern"],
          rows:     ["row / block pattern", "abiotic / nutritional pattern"],
          patchy:   ["soil-linked pattern"]
        }[d.pattern];
        if (fits) why.push.apply(why, fits);
      }

      out.push({ p: p, pct: pct, why: why, hits: hits.length, selN: selN });
    });

    out.sort((a, b) => b.pct - a.pct || b.p.severity - a.p.severity);
    return out;
  }

  /* ============================================================
     VIEW: crop agronomy guides  (section 6)
     ============================================================ */

  function guideP(txt) { return "<p>" + esc(txt) + "</p>"; }
  function guideList(arr) {
    return "<ul>" + (arr || []).map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  }
  function guideSec(title, bodyHtml) {
    return '<div class="sec"><h2>' + title + "</h2>" + bodyHtml + "</div>";
  }
  function guideRows(rows) {
    return '<div class="table-wrap"><table><tbody>' +
      rows.filter((r) => r[1]).map((r) =>
        "<tr><td style=\"width:150px\"><strong>" + esc(r[0]) + "</strong></td><td>" + esc(r[1]) + "</td></tr>").join("") +
      "</tbody></table></div>";
  }

  /* Rotation fit, computed only from the library: botanical family and the
     crop lists already recorded on each pest and disease entry. Nothing here
     is a validated rotation plan — the guide's rotation text governs. */
  function rotationFit(cropId) {
    const crop = cropOf(cropId);
    const others = AGRO.crops.filter((c) => c.id !== cropId && c.id !== "stored" && AGRO.cropGuides[c.id]);

    const family = crop && crop.family && crop.family !== "—" ? crop.family : null;
    const sameFamily = family ? others.filter((c) => c.family === family) : [];

    const overlap = others.map((c) => {
      const shared = AGRO.pests.filter((p) =>
        p.kind !== "beneficial" &&
        (p.crops || []).includes(cropId) && (p.crops || []).includes(c.id));
      return { crop: c, shared };
    }).filter((x) => x.shared.length)
      .sort((a, b) => b.shared.length - a.shared.length || a.crop.name.localeCompare(b.crop.name));

    let html = '<div class="card">' +
      '<div class="card-head"><h2>Rotation fit</h2><span class="spacer"></span>' +
        '<span class="tiny muted">from the library</span></div>';

    html += '<p class="small" style="color:var(--ink-700);margin:0 0 10px">' +
      "What to avoid before or after this crop, computed from botanical family and shared pest and disease associations.</p>";

    if (sameFamily.length) {
      html += '<div class="small strong" style="margin:0 0 6px;color:var(--warn-700)">Same family — do not follow ' +
        esc(crop.name) + " back-to-back</div>" +
        '<div class="row-tight" style="flex-wrap:wrap;gap:6px;margin-bottom:12px">' +
        sameFamily.map((c) => '<a class="pill" href="#/crops/' + c.id + '" style="text-decoration:none">' + esc(c.name) + "</a>").join("") +
        "</div>";
    } else {
      html += '<p class="small muted" style="margin:0 0 12px">No other guide shares this botanical family.</p>';
    }

    if (overlap.length) {
      html += '<div class="small strong" style="margin:0 0 6px">Shared pest and disease load</div>' +
        '<ul class="small" style="margin:0;padding-left:18px;color:var(--ink-700);line-height:1.7">' +
        overlap.slice(0, 6).map((x) => {
          const names = x.shared.slice(0, 3).map((p) => esc(p.name)).join(", ") +
            (x.shared.length > 3 ? ", …" : "");
          return "<li>following <a href=\"#/crops/" + x.crop.id + '">' + esc(x.crop.name) + "</a> shares " +
            x.shared.length + " entr" + (x.shared.length === 1 ? "y" : "ies") + ": " + names + "</li>";
        }).join("") + "</ul>";
    } else {
      html += '<p class="small muted" style="margin:0">No crop in the library shares a recorded pest or disease with this one.</p>';
    }

    html += '<div class="callout" style="margin-top:12px"><strong>Not a rotation plan.</strong> ' +
      "This is a library cross-check, not agronomic advice. Build the sequence around the guide's rotation note, soil, water and market — and confirm " +
      "soilborne risk with your advisory service.</div>" +
      '<a class="btn btn-sm" href="#/sequence" style="margin-top:10px">' + icon("cycle") + "Plan a cropping sequence</a></div>";

    return html;
  }

  function viewCrops() {
    const cropId = state.param && cropOf(state.param) && AGRO.cropGuides[state.param]
      ? state.param : (state.cropGuide && AGRO.cropGuides[state.cropGuide] ? state.cropGuide : "tomato");
    state.cropGuide = cropId;

    const guideCrops = AGRO.crops.filter((c) => AGRO.cropGuides[c.id]);
    const selector = '<div class="toolbar">' +
      '<select data-action="crops-crop" aria-label="Choose crop">' +
        guideCrops.map((c) =>
          '<option value="' + c.id + '"' + (c.id === cropId ? " selected" : "") + ">" + esc(c.name) + "</option>").join("") +
      "</select>" +
      '<span class="small muted">Climate, soil, varieties, planting, water, nutrition, harvest and storage</span></div>';

    const g = AGRO.cropGuides[cropId];
    const crop = cropOf(cropId);

    if (!g) {
      return '<div class="page-head"><div class="grow">' +
          '<div class="eyebrow">Crop agronomy</div><h1>Agronomy guides</h1></div></div>' +
        selector +
        '<div class="empty"><h2>No agronomy guide for this crop yet</h2>' +
        '<p class="small">Choose another crop from the selector.</p></div>';
    }

    const fieldCount = AGRO.pests.filter((p) => p.crops && p.crops.includes(cropId) && p.kind !== "beneficial").length;
    const disorderCount = AGRO.pests.filter((p) => p.crops && p.crops.includes(cropId) && p.kind === "disorder").length;
    const plant = g.planting || {};

    const head = '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Crop agronomy · section 6</div>' +
        "<h1>" + esc(crop ? crop.name : cropId) + (crop ? ' <span class="dh-sci" style="font-size:16px">' + esc(crop.sci) + "</span>" : "") + "</h1>" +
        '<p class="lede">The agronomic context that decides whether a crop problem is even possible: climate, soil, cultivar, planting date, ' +
        "water and nutrition. Manage these first; a diagnostic list without them is guesswork.</p>" +
      "</div>" +
      '<div class="page-actions"><button class="btn btn-ghost" data-action="print">' + icon("print") + "Print guide</button></div>" +
      "</div>";

    const indicatorCallout = '<div class="callout" style="margin-bottom:16px">' +
      "<strong>Figures are indicative.</strong> Planting windows, densities and thresholds below are starting points drawn from common practice for " +
      "Mediterranean and North African systems. They shift with region, altitude, cultivar, market and water availability — calibrate against your local " +
      "advisory service before planning a season. No pesticide, dose or registration appears here.</div>";

    const main = '<div class="card pad-lg">' +
        guideSec("Climate requirements", guideP(g.climate)) +
        guideSec("Soil and site", guideP(g.soil)) +
        guideSec("Variety and cultivar choice", guideList(g.varieties)) +
        guideSec("Planting", guideRows([
          ["Window", plant.window], ["Method", plant.method], ["Notes", plant.notes]
        ])) +
        guideSec("Plant density and spacing", guideP(g.density)) +
        guideSec("Irrigation", guideP(g.irrigation)) +
        guideSec("Nutrition", guideList(g.nutrition)) +
        guideSec("Harvest", guideP(g.harvest)) +
        guideSec("Storage and postharvest", guideP(g.storage)) +
        guideSec("Rotation and cropping sequence", guideP(g.rotation)) +
      "</div>";

    const KIND_ORDER = { insect: 0, mite: 1, disease: 2, weed: 3, disorder: 4, beneficial: 5 };
    const cropEntries = AGRO.pests
      .filter((p) => (p.crops || []).includes(cropId))
      .sort((a, b) => (KIND_ORDER[a.kind] - KIND_ORDER[b.kind]) ||
        (b.severity - a.severity) || a.name.localeCompare(b.name));

    const entriesCard = '<div class="card pad-lg" style="margin-top:16px">' +
        '<div class="card-head"><h2>Reference entries for this crop</h2><span class="spacer"></span>' +
          '<span class="tiny muted">' + plural(cropEntries.length, "profile", "profiles") + " · tap to open</span></div>" +
        (cropEntries.length
          ? '<div class="lib-grid">' + cropEntries.map(libCard).join("") + "</div>"
          : '<p class="small muted">No reference entries are recorded on this crop yet.</p>') +
      "</div>";

    const side = '<div class="stack">' +
        '<div class="card">' +
          '<div class="card-head"><h2>Key risks</h2></div>' +
          guideList(g.keyRisks) +
        "</div>" +
        '<div class="card">' +
          '<div class="card-head"><h2>Regional note</h2></div>' +
          '<p class="small" style="color:var(--ink-700)">' + esc(g.regionNote) + "</p>" +
        "</div>" +
        rotationFit(cropId) +
        '<div class="card">' +
          '<div class="card-head"><h2>Linked tools</h2></div>' +
          '<div class="stack" style="gap:8px">' +
            '<a class="btn btn-sm" href="#/library/' + cropId + '/all">' + icon("book") + "All " + plural(fieldCount, "reference entry", "reference entries") + "</a>" +
            (disorderCount ? '<a class="btn btn-sm" href="#/library/' + cropId + '/disorder">' + icon("leaf") + "Disorders for this crop (" + disorderCount + ")</a>" : "") +
            '<a class="btn btn-sm" href="#/ipm/' + cropId + '">' + icon("ipm") + "IPM programme</a>" +
            '<a class="btn btn-sm" href="#/diagnose">' + icon("diag") + "Diagnose a problem</a>" +
            '<a class="btn btn-sm" href="#/gdd">' + icon("gdd") + "Degree-day timing</a>" +
          "</div>" +
        "</div>" +
        '<div class="callout"><strong>Observation before interpretation.</strong> ' +
          "A symptom on a leaf is an observation; the cause behind it is an interpretation. Confirm with soil, water or plant analysis, or with a check of " +
          "the recent spray and fertiliser record, before changing the programme.</div>" +
      "</div>";

    return head + selector + indicatorCallout +
      '<div class="grid g3" style="align-items:start">' +
        '<div style="grid-column:span 2">' + main + entriesCard + "</div>" +
        side +
      "</div>";
  }

  /* ============================================================
     VIEW: crop rotation planner
     ============================================================ */

  function sharedRisk(a, b) {
    return AGRO.pests.filter((p) =>
      p.kind !== "beneficial" &&
      (p.crops || []).includes(a) && (p.crops || []).includes(b));
  }

  function familyOf(id) {
    const c = cropOf(id);
    return c && c.family && c.family !== "—" ? c.family : null;
  }

  function viewSequence() {
    const seq = state.seq;
    const options = AGRO.crops.filter((c) => AGRO.cropGuides[c.id]);

    const head = '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Crop rotation</div>' +
        "<h1>Plan a cropping sequence</h1>" +
        '<p class="lede">Line up the crops you intend to grow, in order, and the app flags the transitions the library can already see: ' +
        "back-to-back crops of the same botanical family, and pairs that share the most recorded pests and diseases.</p>" +
      "</div>" +
      (seq.length ? '<div class="page-actions">' +
        '<button class="btn" data-action="seq-export">' + icon("download") + "Export CSV</button>" +
        '<button class="btn btn-ghost" data-action="seq-clear">' + icon("trash") + "Clear</button></div>" : "") +
      "</div>";

    const builder = '<div class="toolbar">' +
        '<select id="seqCrop" aria-label="Choose a crop to add">' +
          options.map((c) => '<option value="' + c.id + '">' + esc(c.name) + "</option>").join("") +
        "</select>" +
        '<button class="btn btn-primary btn-sm" data-action="seq-add">' + icon("plus") + "Add season</button>" +
        '<span class="small muted">Add the crops in the order you intend to plant them.</span></div>';

    const disclaimer = '<div class="callout" style="margin-bottom:16px"><strong>A library cross-check, not a rotation plan.</strong> ' +
      "The flags below come only from the botanical family recorded for each crop and the crop lists already attached to each pest and disease entry. " +
      "They cannot see soil, water, market, break-crop value or local regulation — read them together with the rotation note in each crop's agronomy guide.</div>";

    if (!seq.length) {
      return head + builder + disclaimer +
        '<div class="empty"><h2>No sequence yet</h2>' +
        '<p class="small">Add a first crop above. Three to five seasons is usually enough to expose the main conflicts.</p></div>';
    }

    const chips = seq.map((id, i) =>
      '<div class="seq-chip">' +
        '<span class="seq-n">' + (i + 1) + "</span>" +
        '<span class="seq-name">' + esc(cropName(id)) +
          (familyOf(id) ? '<span class="tiny muted"> · ' + esc(familyOf(id)) + "</span>" : "") +
        "</span>" +
        '<span class="spacer"></span>' +
        '<button class="icon-btn" data-action="seq-up" data-index="' + i + '" aria-label="Move earlier"' + (i === 0 ? " disabled" : "") + ">" + icon("back") + "</button>" +
        '<button class="icon-btn" data-action="seq-down" data-index="' + i + '" aria-label="Move later"' + (i === seq.length - 1 ? " disabled" : "") + ">" + icon("arrow") + "</button>" +
        '<button class="icon-btn" data-action="seq-remove" data-index="' + i + '" aria-label="Remove this season">' + icon("trash") + "</button>" +
      "</div>").join("");

    const timeline = '<div class="card pad-lg">' +
        '<div class="card-head"><h2>Sequence</h2><span class="spacer"></span>' +
          '<span class="tiny muted">' + seq.length + " season" + (seq.length === 1 ? "" : "s") + "</span></div>" +
        '<div class="seq-list">' + chips + "</div>" +
      "</div>";

    let redCount = 0, amberCount = 0;
    const transitions = [];
    for (let i = 1; i < seq.length; i++) {
      const a = seq[i - 1], b = seq[i];
      const sameFam = !!(familyOf(a) && familyOf(a) === familyOf(b));
      const shared = sharedRisk(a, b);
      if (sameFam) redCount++; else if (shared.length) amberCount++;
      transitions.push({ a: a, b: b, sameFam: sameFam, shared: shared });
    }

    const transHtml = transitions.length ? transitions.map((t, i) => {
      const level = t.sameFam ? "red" : (t.shared.length ? "amber" : "green");
      let body;
      if (t.sameFam) {
        body = "<strong>Same botanical family</strong> (" + esc(familyOf(t.a)) + "). Do not follow " +
          esc(cropName(t.a)) + " with " + esc(cropName(t.b)) + " back-to-back; they host the same soilborne and foliar problems.";
      } else if (t.shared.length) {
        body = "Shares <strong>" + t.shared.length + " recorded entr" + (t.shared.length === 1 ? "y" : "ies") +
          "</strong> with the previous crop: " +
          t.shared.slice(0, 6).map((p) => esc(p.name)).join(", ") + (t.shared.length > 6 ? ", …" : "") + ".";
      } else {
        body = "No pest or disease in the library is recorded on both crops — a cleaner break, other factors aside.";
      }
      return '<div class="transition lvl-' + level + '">' +
          '<div class="tr-head">' +
            '<span class="pill ' + (level === "red" ? "pill-red" : level === "amber" ? "pill-amber" : "pill-green") + '">' +
              (i + 1) + " → " + (i + 2) + "</span>" +
            '<span class="small strong">' + esc(cropName(t.a)) + " → " + esc(cropName(t.b)) + "</span>" +
          "</div>" +
          '<p class="small" style="margin:6px 0 0;color:var(--ink-700)">' + body + "</p>" +
        "</div>";
    }).join("") : '<p class="small muted">Add at least two seasons to check the transitions.</p>';

    const checks = '<div class="card pad-lg" style="margin-top:16px">' +
        '<div class="card-head"><h2>Transition checks</h2><span class="spacer"></span>' +
          '<span class="pill ' + (redCount ? "pill-red" : amberCount ? "pill-amber" : "pill-green") + '">' +
          (redCount ? redCount + " same-family" : amberCount ? amberCount + " shared-load" : "all clear") + "</span></div>" +
        transHtml +
      "</div>";

    const counts = {};
    seq.forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
    const repeats = Object.keys(counts).filter((id) => counts[id] > 1);

    const other = '<div class="stack">' +
        '<div class="card"><div class="card-head"><h2>Summary</h2></div>' +
          '<ul class="small" style="margin:0;padding-left:18px;line-height:1.8;color:var(--ink-700)">' +
            "<li>" + seq.length + " season" + (seq.length === 1 ? "" : "s") + ", " +
              Object.keys(counts).length + " distinct crop" + (Object.keys(counts).length === 1 ? "" : "s") + ".</li>" +
            "<li>" + (redCount ? redCount + " same-family transition" + (redCount === 1 ? "" : "s") + " to resolve." : "No same-family transition.") + "</li>" +
            "<li>" + (repeats.length ? "Repeated crop: " + repeats.map((r) => esc(cropName(r))).join(", ") + "." : "No crop is repeated.") + "</li>" +
          "</ul>" +
        "</div>" +
        '<div class="card"><div class="card-head"><h2>Read the guides</h2></div>' +
          '<p class="small" style="color:var(--ink-700)">Each crop guide carries its own rotation note and rotation-fit panel.</p>' +
          '<div class="stack" style="gap:8px;margin-top:8px">' +
            seq.filter((id, i) => seq.indexOf(id) === i).map((id) =>
              '<a class="btn btn-sm" href="#/crops/' + id + '">' + icon("leaf") + esc(cropName(id)) + " guide</a>").join("") +
          "</div>" +
        "</div>" +
        '<div class="callout"><strong>Rotation is more than crop order.</strong> A good sequence manages soilborne inoculum, water and labour as much as it manages pests. ' +
          "Break crops, cover crops and fallow are not modelled here.</div>" +
      "</div>";

    return head + builder + disclaimer +
      '<div class="grid g3" style="align-items:start">' +
        '<div style="grid-column:span 2">' + timeline + checks + "</div>" +
        other +
      "</div>";
  }

  /* ============================================================
     VIEW: library
     ============================================================ */

  function viewLibrary() {
    const f = state.lib;
    const q = f.q.trim().toLowerCase();

    const items = AGRO.pests.filter((p) => {
      if (f.kind !== "all" && p.kind !== f.kind) return false;
      if (f.crop !== "all" && !(p.crops || []).includes(f.crop)) return false;
      if (q) {
        const hay = [p.name, p.sci, p.fr, p.family, p.order, p.tagline].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const kinds = [
      ["all", "All"], ["insect", "Insects"], ["mite", "Mites"],
      ["disease", "Diseases"], ["weed", "Weeds"], ["disorder", "Disorders"],
      ["beneficial", "Beneficials"]
    ];

    // A search for a crop name should reach the crop agronomy guide as well as
    // the pest and disease entries, otherwise "Search … or crop" is misleading.
    const guideHits = q ? AGRO.crops.filter((c) => AGRO.cropGuides[c.id] &&
      (c.name + " " + c.sci).toLowerCase().includes(q)) : [];
    const guideStrip = guideHits.length ?
      '<div style="margin-bottom:16px">' +
        '<div class="tiny strong" style="letter-spacing:.1em;text-transform:uppercase;color:var(--green-700);margin-bottom:8px">Crop agronomy guides</div>' +
        '<div class="grid g3">' + guideHits.map((c) =>
          '<a class="crop-tile" href="#/crops/' + c.id + '">' +
            '<div class="ct-top"><span class="ct-name">' + esc(c.name) + "</span>" +
            '<span class="crop-glyph">' + esc(c.mono) + "</span></div>" +
            '<span class="ct-sci">' + esc(c.sci) + "</span>" +
            '<span class="ct-meta">Open the agronomy guide</span></a>').join("") +
        "</div></div>" : "";

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Reference library</div>' +
        "<h1>Pest, disease, disorder and weed profiles</h1>" +
        '<p class="lede">Biology, damage, monitoring, thresholds, IPM and chemistry by mode of action. ' +
        "Abiotic and nutritional disorders are included, because a ranked list of pests alone is a misleading list. " +
        "Every entry states what is known, what is uncertain, and what would confirm the diagnosis.</p>" +
      "</div></div>" +

      '<div class="toolbar">' +
        '<div class="seg">' + kinds.map((k) =>
          '<button data-action="lib-kind" data-id="' + k[0] + '" class="' + (f.kind === k[0] ? "on" : "") + '">' + k[1] + "</button>").join("") + "</div>" +
        '<select data-action="lib-crop" aria-label="Filter by crop">' +
          '<option value="all">All crops</option>' +
          AGRO.crops.map((c) => '<option value="' + c.id + '"' + (f.crop === c.id ? " selected" : "") + ">" + esc(c.name) + "</option>").join("") +
        "</select>" +
        '<span class="spacer"></span>' +
        '<span class="small muted">' + items.length + " of " + AGRO.pests.length + " entries</span>" +
      "</div>" +

      guideStrip +

      (items.length ?
        '<div class="lib-grid">' + items.map(libCard).join("") + "</div>" :
        (guideHits.length
          ? '<p class="small muted">No pest, disease or weed entry matches this search — the crop guide above is the relevant result.</p>'
          : '<div class="empty"><h2>Nothing matches these filters</h2><p class="small">Clear the crop filter or search a different term.</p></div>'));
  }

  function libCard(p) {
    return '<article class="lib-card" role="button" tabindex="0" data-action="open-pest" data-id="' + p.id + '">' +
      '<div class="lc-top"><div style="flex:1;min-width:0">' +
        '<div class="lc-name">' + esc(p.name) + "</div>" +
        '<div class="lc-sci">' + esc(p.sci) + "</div>" +
      "</div>" + sevBar(p.severity) + "</div>" +
      '<div class="lc-tag">' + esc(p.tagline) + "</div>" +
      '<div class="lc-foot">' + kindPill(p) +
        (p.order ? '<span class="pill pill-ghost">' + esc(p.order) + "</span>" : "") +
        (p.quarantine ? '<span class="pill pill-red">Quarantine</span>' : "") +
      "</div></article>";
  }

  function pestDetail(p) {
    const ipm = p.ipm || {};
    const isDisorder = p.kind === "disorder";
    const list = (arr) => arr && arr.length ? "<ul>" + arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>" : '<p class="small muted">No specific measures recorded.</p>';

    const chem = (p.chem || []).length ?
      '<div class="table-wrap" style="border:0"><table class="chem-table"><thead><tr>' +
      (isDisorder ? '<th scope="col">Amendment / measure</th><th scope="col">Type</th><th scope="col">Note</th>' : '<th scope="col">Active ingredient</th><th scope="col">MoA</th><th scope="col">Note</th>') +
      "</tr></thead><tbody>" +
      p.chem.map((c) => "<tr><td><strong>" + esc(c.ai) + "</strong></td><td><span class=\"moa-code\">" + esc(c.moa) + "</span></td><td class=\"small\">" + esc(c.note) + "</td></tr>").join("") +
      "</tbody></table></div>"
      : '<p class="small muted">No corrective measure is presented for this entry.</p>';

    const chemNote = isDisorder ?
      '<div class="callout" style="margin-top:12px"><strong>Amendments are not pesticides, but they are still regulated.</strong> ' +
      "Rates, permitted sources and application restrictions vary by country and by product. Soil and water analysis should drive every amendment decision; " +
      "a symptom alone does not justify an application.</div>"
      :
      '<div class="callout red" style="margin-top:12px"><strong>Registration is national.</strong> ' +
      "Active ingredients and MoA groups are given for rotation planning. Approved crops, doses, preharvest intervals and re-entry intervals " +
      "must be read from the product label authorised in your country. Nothing here overrides that label.</div>";

    const look = (p.lookalikes || []).length ?
      '<div class="table-wrap"><table><thead><tr><th scope="col">' + (isDisorder ? "Confusable cause" : "Confusable species") + '</th><th scope="col">How to separate</th></tr></thead><tbody>' +
      p.lookalikes.map((l) => "<tr><td><strong>" + esc(l.n) + "</strong></td><td class=\"small\">" + esc(l.d) + "</td></tr>").join("") +
      "</tbody></table></div>" : "";

    const quad = isDisorder
      ? { a: "Corrective agronomy", b: "Soil health &amp; biostimulants", c: "Physical measures", d: "Diagnostics &amp; monitoring" }
      : { a: "Cultural", b: "Biological", c: "Mechanical / physical", d: "Biotechnical" };

    const share = /^https?:$/.test(location.protocol)
      ? '<button class="btn btn-sm" data-action="copy-pest-link" data-id="' + esc(p.id) + '">' +
        icon("link") + "Copy link</button>"
      : "";

    return '<div class="detail-head">' +
        '<div class="row-tight" style="margin-bottom:8px">' + kindPill(p) +
          (p.quarantine ? '<span class="pill pill-red">Quarantine / reportable</span>' : "") +
          '<span class="pill pill-ghost">Severity ' + p.severity + "/5</span></div>" +
        '<h2 id="modalTitle">' + esc(p.name) + "</h2>" +
        '<div class="dh-sci">' + esc(p.sci) + "</div>" +
        (p.fr ? '<div class="small muted" style="margin-top:4px">French: ' + esc(p.fr) + "</div>" : "") +
        '<div class="dh-meta">' +
          ((p.crops || []).map((c) => AGRO.cropGuides[c]
            ? '<a class="pill pill-green" data-action="open-crop" data-id="' + c + '" title="Open the crop agronomy guide">' + esc(cropName(c)) + "</a>"
            : '<span class="pill pill-green">' + esc(cropName(c)) + "</span>").join("")) +
        "</div>" +
      "</div>" +

      '<div class="facts">' +
        fact("Group", p.kind === "disease" ? (p.type || "Pathogen") : (KIND_LABEL[p.kind] || p.kind)) +
        (p.type && p.kind === "disorder" ? fact("Nature", p.type) : "") +
        (p.order ? fact("Order", p.order) : "") +
        (p.family ? fact("Family", p.family) : "") +
        (p.stage ? fact("Key stage", p.stage) : "") +
        fact("Severity", p.severity + " / 5") +
        (p.role ? fact("Ecological role", p.role) : "") +
      "</div>" +

      '<div class="sec"><h2>Summary</h2><p>' + esc(p.tagline) + "</p></div>" +
      '<div class="sec"><h2>' + (isDisorder ? "Mechanism and appearance" : "Biology and cycle") + '</h2><p>' + esc(p.bio) + "</p></div>" +
      '<div class="sec"><h2>' + (isDisorder ? "Yield and quality impact" : "Damage and economic importance") + '</h2><p>' + esc(p.damage) + "</p></div>" +
      (p.favours ? '<div class="sec"><h2>' + (isDisorder ? "Conditions that cause it" : "Conditions that favour it") + '</h2><p>' + esc(p.favours) + "</p></div>" : "") +
      '<div class="sec"><h2>' + (isDisorder ? "How to measure and confirm" : "Monitoring") + '</h2><p>' + esc(p.monitoring || "No specific protocol recorded.") + "</p></div>" +
      (p.threshold ? '<div class="callout green"><strong>' + (isDisorder ? "Interpretation." : "Action threshold.") + "</strong> " + esc(p.threshold) + "</div>" : "") +
      (p.dz ? '<div class="sec"><h2>Status in Algeria</h2><p>' + esc(p.dz) + "</p></div>" : "") +

      '<hr class="sep">' +
      '<div class="sec"><h2>' + (isDisorder ? "Corrective and preventive measures" : "Integrated management") + '</h2>' +
        '<div class="grid g2" style="gap:16px">' +
          "<div><div class=\"tiny strong\" style=\"margin-bottom:4px\">" + quad.a + "</div>" + list(ipm.cultural) + "</div>" +
          "<div><div class=\"tiny strong\" style=\"margin-bottom:4px\">" + quad.b + "</div>" + list(ipm.biological) + "</div>" +
          "<div><div class=\"tiny strong\" style=\"margin-bottom:4px\">" + quad.c + "</div>" + list(ipm.mechanical) + "</div>" +
          "<div><div class=\"tiny strong\" style=\"margin-bottom:4px\">" + quad.d + "</div>" + list(ipm.biotech) + "</div>" +
        "</div>" +
      "</div>" +

      '<div class="sec"><h2>' + (isDisorder ? "Amendment and correction options" : "Chemical options by mode of action") + '</h2>' + chem + chemNote + "</div>" +

      (p.resistance && !isDisorder ? '<div class="sec"><h2>Resistance management</h2><p>' + esc(p.resistance) + "</p></div>" : "") +
      (look ? '<div class="sec"><h2>Differential diagnosis</h2>' + look + "</div>" : "") +

      '<hr class="sep">' +
      '<div class="row"><span class="tiny muted">Reference entry ' + esc(p.id) + " · dataset " + AGRO.meta.revision + "</span>" +
        '<span class="spacer"></span>' +
        share +
        '<button class="btn btn-sm" data-action="print">' + icon("print") + "Print</button></div>";
  }

  function fact(k, v) {
    return '<div class="fact"><div class="fk">' + esc(k) + '</div><div class="fv">' + esc(v) + "</div></div>";
  }

  /* ============================================================
     VIEW: identification key
     ============================================================ */

  function viewKey() {
    const node = AGRO.keyNodes[state.keyNode];

    const trail = state.keyTrail.length ?
      '<div class="trail">' + state.keyTrail.map((t, i) =>
        '<span class="t">' + (i + 1) + ". <b>" + esc(t) + "</b></span>").join('<span class="t">›</span>') + "</div>" : "";

    if (!node) {
      const taxon = AGRO.taxa[state.keyNode];
      if (!taxon) return "<p>Key error.</p>";
      return keyResult(taxon);
    }

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Dichotomous key</div>' +
        "<h1>Identify the arthropod</h1>" +
        '<p class="lede">A field key to the orders and families that matter in agriculture. ' +
        "It is written for adults and common larval forms; where a character is ambiguous, the key tells you what to photograph instead of guessing.</p>" +
      "</div>" +
      '<div class="page-actions"><button class="btn btn-ghost" data-action="key-reset">' + icon("rotate") + "Start over</button></div></div>" +

      '<div class="key-wrap">' + trail +
      '<div class="key-card">' +
        '<div class="key-q"><span class="cn">Couplet ' + node.no + "</span>" + esc(node.q) + "</div>" +
        '<div class="key-opts">' + node.opts.map((o, i) =>
          '<button class="key-opt" data-action="key-opt" data-next="' + o.next + '" data-label="' + esc(o.label) + '">' +
            '<span class="k-let">' + String.fromCharCode(97 + i) + "</span>" +
            '<span class="k-txt">' + esc(o.label) + (o.hint ? "<em>" + esc(o.hint) + "</em>" : "") + "</span>" +
          "</button>").join("") + "</div>" +
        (node.note ? '<div class="callout" style="margin-top:16px">' + esc(node.note) + "</div>" : "") +
      "</div>" +
      (state.keyTrail.length ? '<div class="row" style="margin-top:14px"><button class="btn" data-action="key-back">' + icon("back") + "Previous couplet</button></div>" : "") +
      "</div>";
  }

  function keyResult(t) {
    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Identification outcome</div>' +
        "<h1>Identification outcome</h1>" +
      "</div></div>" +
      '<div class="key-wrap"><div class="key-card taxon-out">' +
        '<div class="taxon-rank">' + esc(t.rank) + "</div>" +
        '<h2 style="font-size:28px;margin:4px 0 2px">' + esc(t.name) + "</h2>" +
        '<div class="dh-sci" style="font-family:var(--serif);font-style:italic;color:var(--ink-500);margin-bottom:14px">' + esc(t.sci) + "</div>" +
        '<div class="chip-row" style="margin-bottom:16px">' +
          '<span class="pill pill-green">' + esc(t.role) + "</span>" +
          '<span class="pill pill-ghost">' + t.diag.length + " diagnostic characters</span></div>" +

        '<div class="sec"><h2>Diagnostic characters</h2><ul>' +
          t.diag.map((d) => "<li>" + esc(d) + "</li>").join("") + "</ul></div>" +

        (t.families && t.families.length ?
          '<div class="sec"><h2>Families to consider</h2><div class="table-wrap"><table><thead><tr><th scope="col">Family</th><th scope="col">Field note</th></tr></thead><tbody>' +
          t.families.map((f) => "<tr><td><strong>" + esc(f.n) + "</strong></td><td class=\"small\">" + esc(f.d) + "</td></tr>").join("") +
          "</tbody></table></div></div>" : "") +

        '<div class="callout"><strong>Before you act.</strong> ' + esc(t.caution) + "</div>" +

        '<div class="row" style="margin-top:20px">' +
          '<button class="btn" data-action="key-back">' + icon("back") + "Previous couplet</button>" +
          '<button class="btn btn-ghost" data-action="key-reset">' + icon("rotate") + "Start over</button>" +
          '<span class="spacer"></span>' +
          '<a class="btn btn-primary" href="#/library">' + icon("book") + "Open the library</a>" +
        "</div>" +
      "</div></div>";
  }

  /* ============================================================
     VIEW: IPM planner
     ============================================================ */

  function viewIpm() {
    const cropId = state.param && cropOf(state.param) ? state.param : (state.ipmCrop || "tomato");
    state.ipmCrop = cropId;
    const prog = AGRO.ipmPrograms[cropId];
    const crop = cropOf(cropId);

    const selector = '<div class="toolbar">' +
      '<select data-action="ipm-crop" aria-label="Choose crop">' +
      AGRO.crops.filter((c) => c.id !== "stored").map((c) =>
        '<option value="' + c.id + '"' + (c.id === cropId ? " selected" : "") + ">" + esc(c.name) + "</option>").join("") +
      "</select>" +
      '<span class="small muted">Programme adapts to the crop phenology</span>' +
      '<span class="spacer"></span>' +
      (AGRO.cropGuides[cropId] ? '<a class="btn btn-sm" href="#/crops/' + cropId + '">' + icon("leaf") + "Agronomy guide</a>" : "") +
      "</div>";

    const stages = prog ? prog.stages : AGRO.ipmGeneric;
    const note = prog ? prog.note : "No crop-specific programme is stored yet — the generic framework applies.";

    const timeline = '<div class="timeline">' + stages.map((s) =>
      '<div class="tl-item">' +
        '<div class="tl-stage">' + esc(s.stage) + "</div>" +
        '<div class="tl-actions">' + s.actions.map((a) =>
          '<div class="tl-act"><span class="tag tag-' + tagClass(a.type) + '">' + esc(a.type) + "</span>" +
          "<span>" + esc(a.text) + "</span></div>").join("") + "</div>" +
      "</div>").join("") + "</div>";

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Integrated pest management</div>' +
        "<h1>Seasonal programme" + (crop ? " · " + esc(crop.name) : "") + "</h1>" +
        '<p class="lede">A sequence, not a spray list: prevention, monitoring, biological and cultural measures first, chemistry only where a threshold justifies it.</p>' +
      "</div></div>" +
      selector +
      '<div class="callout green" style="margin-bottom:16px">' + esc(note) + "</div>" +
      '<div class="grid g3" style="align-items:start">' +
        '<div class="card pad-lg" style="grid-column:span 2">' + timeline + "</div>" +
        '<div class="card"><div class="card-head"><h2>Principles applied</h2></div>' +
          AGRO.ipmPrinciples.map((p) =>
            '<div style="display:flex;gap:9px;padding:8px 0;border-bottom:1px solid var(--line-2);align-items:flex-start">' +
              '<span class="moa-code" style="min-width:22px">' + p.n + "</span>" +
              '<div><div class="small strong">' + esc(p.t) + "</div>" +
              '<div class="tiny muted">' + esc(p.d) + "</div></div></div>").join("") +
        "</div>" +
      "</div>";
  }

  function tagClass(t) {
    const map = { prevent: "prevent", monitor: "monitor", biological: "bio", cultural: "cult", mechanical: "mech", chemical: "chem" };
    return map[t] || "monitor";
  }

  /* ============================================================
     VIEW: rotation
     ============================================================ */

  function viewRotation() {
    const groups = AGRO.moa;
    const schemes = ["IRAC", "FRAC", "HRAC"];
    const chosen = groups.filter((g) => state.rot.has(g.scheme + ":" + g.code));
    const highRisk = chosen.filter((g) => g.risk === "high").length;

    const sections = schemes.map((s) => {
      const list = groups.filter((g) => g.scheme === s);
      return '<div class="card" style="margin-bottom:14px">' +
        '<div class="card-head"><h2>' + s + " groups</h2><span class=\"spacer\"></span>" +
          '<span class="tiny muted">' + (s === "IRAC" ? "insecticides & acaricides" : s === "FRAC" ? "fungicides" : "herbicides") + "</span></div>" +
        list.map((g) => {
          const key = g.scheme + ":" + g.code;
          const track = "Track " + g.scheme + " group " + g.code + ": " + g.name;
          return '<div class="moa-row">' +
            '<span class="moa-code">' + esc(g.code) + "</span>" +
            '<div style="flex:1;min-width:0"><div class="small strong">' + esc(g.name) + "</div>" +
            '<div class="tiny muted">' + esc(g.examples) + "</div></div>" +
            '<span class="risk-badge risk-' + g.risk + '">' + g.risk + "</span>" +
            '<label class="switch"><input type="checkbox" aria-label="' + esc(track) + '" data-action="rot-toggle" data-key="' + key + '"' + (state.rot.has(key) ? " checked" : "") + "></label>" +
          "</div>";
        }).join("") + "</div>";
    }).join("");

    const advice = chosen.length ? chosen.map((g) => {
      const same = groups.filter((x) => x.scheme === g.scheme && x.code === g.code).length;
      return '<div style="padding:10px 0;border-bottom:1px solid var(--line-2)">' +
        '<div class="row-tight"><span class="moa-code">' + esc(g.scheme + " " + g.code) + "</span>" +
        '<span class="small strong">' + esc(g.name) + "</span>" +
        '<span class="spacer"></span><span class="risk-badge risk-' + g.risk + '">' + g.risk + " risk</span></div>" +
        '<div class="small" style="margin-top:4px;color:var(--ink-700)">' + esc(g.note) + "</div>" +
        '<div class="tiny muted" style="margin-top:4px">Typical actives: ' + esc(g.examples) + "</div>" +
      "</div>";
    }).join("") : '<p class="small muted">Select the groups you have applied this season to see the rotation logic.</p>';

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Resistance management</div>' +
        "<h1>Mode-of-action rotation</h1>" +
        '<p class="lede">Resistance is a numbers game: every application of a single-site mode of action selects survivors. ' +
        "Track the groups used, then force the programme to change group before the next generation.</p>" +
      "</div></div>" +

      '<div class="grid g3" style="align-items:start">' +
        '<div style="grid-column:span 2">' + sections + "</div>" +
        '<div class="card" style="position:sticky;top:70px">' +
          '<div class="card-head"><h2>Rotation rules</h2><span class="spacer"></span>' +
            '<span class="pill ' + (highRisk > 3 ? "pill-red" : highRisk ? "pill-amber" : "pill-green") + '">' + highRisk + " high-risk</span></div>" +
          '<ul class="small" style="margin:0 0 14px;padding-left:18px;color:var(--ink-700);line-height:1.8">' +
            "<li>Never apply the same group twice in succession to the same generation.</li>" +
            "<li>Limit single-site groups to 1–2 applications per season, 2–3 for fungicides.</li>" +
            "<li>Always pair a single-site fungicide with a multi-site partner (M03, M01).</li>" +
            "<li>Rotate within the target spectrum: do not rotate a caterpillar product with a mite product.</li>" +
            "<li>Record every application with date, group, rate and target.</li>" +
          "</ul>" +
          '<div class="small strong" style="margin-bottom:6px">Selected this season</div>' +
          advice +
          (chosen.length ? '<button class="btn btn-sm btn-ghost" data-action="rot-clear" style="margin-top:10px">' +
            icon("rotate") + "Clear selection</button>" : "") +
        "</div>" +
      "</div>" +
      '<div class="callout red" style="margin-top:16px"><strong>Legal control.</strong> ' +
        "Rotation advice does not authorise any product. Confirm the authorised crop, target, dose and interval on the national label before application.</div>";
  }

  /* ============================================================
     VIEW: scouting log
     ============================================================ */

  function viewScout() {
    const rows = state.scout.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

    /* Counts are only comparable inside one crop, observation and unit: 4
       larvae per plant and 4 adults per trap per week measure different
       things, and thresholds are crop-specific. One series per crop +
       observation + unit, most recently recorded first. */
    const series = new Map();
    state.scout.forEach((r) => {
      const k = (r.crop || "") + "|" + (r.pest || "Unnamed observation") + "|" + (r.unit || "");
      if (!series.has(k)) series.set(k, []);
      series.get(k).push(r);
    });
    series.forEach((list) => list.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0)));
    const lastDate = (k) => series.get(k)[series.get(k).length - 1].date;
    const keys = Array.from(series.keys()).sort((a, b) => (lastDate(a) < lastDate(b) ? 1 : lastDate(a) > lastDate(b) ? -1 : 0));
    const chosen = keys.indexOf(state.scoutSeries) >= 0 ? state.scoutSeries : keys[0];
    const list = chosen ? series.get(chosen) : [];
    const shown = list.slice(-14);
    const counts = shown.map((r) => Number(r.count) || 0);
    const maxC = Math.max.apply(null, counts.concat([1]));
    const labelOf = (l) => cropName(l[0].crop) + " - " + (l[0].pest || "Unnamed observation") +
      (l[0].unit ? " - " + l[0].unit : "");
    const label = list.length ? labelOf(list) : "";
    const unit = list.length ? (list[0].unit || "") : "";
    const mean = shown.length ? shown.reduce((s, r) => s + (Number(r.count) || 0), 0) / shown.length : 0;

    const picker = keys.length > 1 ?
      '<label class="field" style="margin:0 0 6px"><span>Series</span>' +
        '<select data-action="scout-series" aria-label="Crop, observation and unit to chart">' +
          keys.map((k) => {
            const l = series.get(k);
            return '<option value="' + esc(k) + '"' + (k === chosen ? " selected" : "") + ">" +
              esc(labelOf(l)) + " (" + l.length + ")</option>";
          }).join("") +
        "</select></label>" :
      '<div class="small strong">' + esc(label) + "</div>";

    const chart = counts.length ?
      picker +
      '<div class="bars" style="height:72px;margin-top:8px">' +
        counts.map((c, i) => '<div class="b" style="height:' + Math.max(4, Math.round((c / maxC) * 100)) +
          '%" title="' + esc(shown[i].date + ": " + c + (unit ? " " + unit : "")) + '"></div>').join("") +
      "</div>" +
      '<div class="small muted" style="margin-top:6px">' +
        (list.length > shown.length ? "Last " + shown.length + " of " + plural(list.length, "record", "records") : plural(shown.length, "record", "records")) +
        " &middot; " + esc(shown[0].date) + " to " + esc(shown[shown.length - 1].date) +
        " &middot; mean <strong>" + mean.toFixed(1) + "</strong>" + (unit ? " " + esc(unit) : "") + "</div>" +
      /* The bars are visual only; the same reading is available as a sentence. */
      '<p class="sr-only">' + esc(label) + ": " + plural(shown.length, "record", "records") +
        " from " + esc(shown[0].date) + " to " + esc(shown[shown.length - 1].date) +
        ", mean " + mean.toFixed(1) + ", latest " + counts[counts.length - 1] + ".</p>" : "";

    const table = rows.length ?
      '<div class="table-wrap"><table><thead><tr>' +
        '<th scope="col">Date</th><th scope="col">Crop</th><th scope="col">Observation</th><th scope="col">Unit</th><th scope="col" class="num">Count</th><th scope="col">Notes</th><th scope="col"><span class="sr-only">Actions</span></th>' +
      "</tr></thead><tbody>" +
      rows.map((r, i) =>
        "<tr><td class=\"nowrap\">" + esc(r.date) + "</td>" +
        "<td>" + esc(cropName(r.crop)) + "</td>" +
        "<td><strong>" + esc(r.pest || "—") + "</strong></td>" +
        "<td class=\"small muted\">" + esc(r.unit || "—") + "</td>" +
        '<td class="num mono">' + esc(r.count) + "</td>" +
        '<td class="small">' + esc(r.notes || "") + "</td>" +
        '<td><button class="btn btn-sm btn-danger" data-action="scout-del" data-id="' + esc(r.id) +
          '" aria-label="' + esc("Delete observation: " + (r.pest || "record") + ", " + r.date) + '">' +
          icon("trash") + "</button></td></tr>").join("") +
      "</tbody></table></div>" : "";

    const draft = state.scoutDraft || {};
    const crops = AGRO.crops.map((c) => '<option value="' + c.id + '"' +
      ((draft.crop || AGRO.crops[0].id) === c.id ? " selected" : "") + ">" + esc(c.name) + "</option>").join("");
    const units = AGRO.thresholdUnits.map((u) => "<option" +
      (draft.unit === u ? " selected" : "") + ">" + esc(u) + "</option>").join("");

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Field records</div>' +
        "<h1>Scouting log</h1>" +
        '<p class="lede">Observations are stored in this browser only. Export the CSV at the end of each week — it is your evidence base for thresholds and for what actually worked.</p>' +
      "</div>" +
      '<div class="page-actions">' +
        '<button class="btn" data-action="scout-export">' + icon("download") + "Export CSV</button>" +
        '<button class="btn btn-ghost" data-action="scout-clear">Clear all</button></div></div>' +

      '<div class="grid g3" style="align-items:start">' +
        '<div class="card pad-lg" style="grid-column:span 2">' +
          '<div class="card-head"><h2>New observation</h2></div>' +
          '<form id="scoutForm" autocomplete="off">' +
            '<div class="grid g3" style="gap:12px">' +
              '<label class="field"><span>Date</span><input type="date" name="date" required value="' +
                esc(draft.date || new Date().toISOString().slice(0, 10)) + '"></label>' +
              '<label class="field"><span>Crop</span><select name="crop">' + crops + "</select></label>" +
              '<label class="field"><span>Count</span><input type="number" name="count" min="0" step="0.1" required placeholder="0" value="' +
                esc(draft.count || "") + '"></label>' +
            "</div>" +
            '<div class="grid g2" style="gap:12px">' +
              '<label class="field"><span>Pest, disease or observation</span>' +
                '<input type="text" name="pest" list="pestNames" required placeholder="e.g. Tuta absoluta" value="' +
                  esc(draft.pest || "") + '">' +
                '<datalist id="pestNames">' + AGRO.pests.map((p) => '<option value="' + esc(p.name) + '">').join("") + "</datalist></label>" +
              '<label class="field"><span>Unit</span><select name="unit">' + units + "</select></label>" +
            "</div>" +
            '<label class="field"><span>Notes — block, cultivar, stage, action taken</span>' +
              '<textarea name="notes" rows="3" placeholder="Block B3, Marmande, first fruit set. 4 mines on 20 plants; beneficials present.">' +
                esc(draft.notes || "") + "</textarea></label>" +
            '<button class="btn btn-primary" type="submit">' + icon("plus") + "Save observation</button>" +
          "</form>" +
        "</div>" +

        '<div class="stack">' +
          '<div class="card"><div class="card-head"><h2>Trend by observation</h2></div>' +
            (chart || '<p class="small muted">No data yet.</p>') +
            '<hr class="sep" style="margin:14px 0">' +
            '<div class="small muted">Records: <strong>' + state.scout.length + "</strong>" +
              (keys.length > 1 ? "<br>Separate series: <strong>" + keys.length + "</strong>" : "") + "</div>" +
          "</div>" +
          '<div class="card"><div class="card-head"><h2>Backup &amp; restore</h2></div>' +
            '<p class="small" style="color:var(--ink-700)">Your records, the planned rotation and the marked mode-of-action groups live only in this browser. Keep a JSON backup to move them to another device or to survive a cleared cache.</p>' +
            '<div class="stack" style="gap:8px;margin-top:8px">' +
              '<button class="btn btn-sm" data-action="backup-all">' + icon("download") + "Back up all data</button>" +
              '<label class="btn btn-sm" style="cursor:pointer;justify-content:center">' + icon("plus") + "Restore from backup" +
                '<input id="importFile" data-action="import-file" type="file" accept="application/json,.json" class="hidden"></label>' +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +

      (rows.length ? '<div style="margin-top:18px">' + table + "</div>" : "");
  }

  /* ============================================================
     VIEW: degree days
     ============================================================ */

  function viewGdd() {
    const g = state.gdd;
    const presets = AGRO.gddPresets.map((p) =>
      '<option value="' + p.base + '"' + (g && Number(g.base) === Number(p.base) ? " selected" : "") + ">" +
      esc(p.name) + " (base " + p.base + " °C)</option>").join("");

    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Phenology model</div>' +
        "<h1>Degree-day accumulator</h1>" +
        '<p class="lede">Daily development is driven by temperature above a lower threshold. Enter daily minimum and maximum temperatures, ' +
        "and the model accumulates heat units to time inspection and intervention.</p>" +
      "</div></div>" +

      '<div class="grid g3" style="align-items:start">' +
        '<div class="card pad-lg">' +
          '<div class="card-head"><h2>Input</h2></div>' +
          '<label class="field"><span>Pest preset</span><select data-action="gdd-preset">' + presets + "</select></label>" +
          '<label class="field"><span>Lower development threshold (°C)</span><input type="number" id="gddBase" step="0.1" value="' + (g ? g.base : 10) + '"></label>' +
          '<label class="field"><span>Daily temperatures — one day per line</span>' +
            '<textarea id="gddData" rows="9" placeholder="2026-03-01, 7, 19&#10;2026-03-02, 8, 21&#10;2026-03-03, 9, 23">' + (g ? esc(g.raw) : "") + "</textarea></label>" +
          '<div class="row"><button class="btn btn-primary" data-action="gdd-run">' + icon("gdd") + "Calculate</button>" +
            '<button class="btn btn-ghost" data-action="gdd-sample">Load example</button></div>' +
          '<div class="callout" style="margin-top:14px"><strong>Method.</strong> Simple average: GDD = max(0, (Tmin + Tmax)/2 − base). ' +
            "Upper thresholds and non-linear models are more accurate in extreme heat; treat results as planning estimates.</div>" +
        "</div>" +

        '<div style="grid-column:span 2">' +
          (g ? gddResult(g) : '<div class="empty"><h2>No accumulation yet</h2><p class="small">Paste temperature data or load the example to see the cumulative curve.</p></div>') +
        "</div>" +
      "</div>";
  }

  /* "2, 5 and 9 (+3 more)" for a list of line numbers. */
  function lineRefs(nums) {
    const shown = nums.slice(0, 8);
    const list = shown.length === 1 ? String(shown[0]) :
      shown.slice(0, -1).join(", ") + " and " + shown[shown.length - 1];
    return list + (nums.length > shown.length ? " (+" + (nums.length - shown.length) + " more)" : "");
  }

  function gddResult(g) {
    const chart = lineChart(g.cum, g.days);
    const total = Math.round(g.total);
    const skipped = g.skipped || [], swapped = g.swapped || [];
    /* Silent omission is the problem: a reader who pastes thirty days and
       sees twenty-eight must be told which lines did not count. */
    const reading = skipped.length || swapped.length ?
      '<div class="callout" style="margin-bottom:14px">' +
        (skipped.length ? "<strong>" + (skipped.length === 1 ? "One line was ignored." : skipped.length + " lines were ignored.") + "</strong> " +
          (skipped.length === 1 ? "Line " : "Lines ") + lineRefs(skipped) +
          " did not contain a usable temperature pair, so the totals below exclude " +
          (skipped.length === 1 ? "it" : "them") + ". " : "") +
        (swapped.length ? "<strong>Tmin above Tmax on " + (swapped.length === 1 ? "line " : "lines ") + lineRefs(swapped) +
          ".</strong> " + (swapped.length === 1 ? "That pair was" : "Those pairs were") + " read as (min, max)." : "") +
      "</div>" : "";
    return reading + '<div class="grid g3" style="margin-bottom:14px">' +
        stat("Accumulated GDD", total, plural(g.days, "day", "days") + " · base " + g.base + " °C") +
        stat("Daily mean", (total / Math.max(1, g.days)).toFixed(1), "heat units per day") +
        stat("Peak day", g.peak.toFixed(1), "highest single-day accumulation") +
      "</div>" +
      '<div class="card">' +
        '<div class="card-head"><h2>Cumulative heat units</h2><span class="spacer"></span>' +
          '<span class="tiny muted">first to last date</span></div>' + chart +
        '<div class="table-wrap" style="margin-top:14px;max-height:260px;overflow-y:auto">' +
          "<table><thead><tr><th scope=\"col\">Date</th><th scope=\"col\" class=\"num\">Tmin</th><th scope=\"col\" class=\"num\">Tmax</th><th scope=\"col\" class=\"num\">Daily GDD</th><th scope=\"col\" class=\"num\">Cumulative</th></tr></thead><tbody>" +
          g.rows.map((r) =>
            "<tr><td class=\"nowrap small\">" + esc(r.date) + "</td><td class=\"num mono\">" + r.tmin + "</td>" +
            "<td class=\"num mono\">" + r.tmax + "</td><td class=\"num mono\">" + r.dd.toFixed(1) + "</td>" +
            "<td class=\"num mono\">" + r.cum.toFixed(0) + "</td></tr>").join("") +
          "</tbody></table></div></div>";
  }

  function lineChart(values, labels) {
    if (!values.length) return "";
    const w = 680, h = 170, padL = 38, padR = 12, padT = 12, padB = 22;
    const max = Math.max.apply(null, values) || 1;
    const nice = Math.ceil(max / 50) * 50 || max;
    const x = (i) => padL + (i * (w - padL - padR)) / Math.max(1, values.length - 1);
    const y = (v) => padT + (h - padT - padB) * (1 - v / nice);

    const pts = values.map((v, i) => x(i).toFixed(1) + "," + y(v).toFixed(1));
    const line = pts.join(" ");
    const area = padL + "," + y(0) + " " + line + " " + x(values.length - 1) + "," + y(0);

    let grid = "";
    for (let k = 0; k <= 4; k++) {
      const v = (nice / 4) * k;
      grid += '<line class="grid-line" x1="' + padL + '" x2="' + (w - padR) + '" y1="' + y(v).toFixed(1) + '" y2="' + y(v).toFixed(1) + '"/>';
      grid += '<text x="' + (padL - 6) + '" y="' + (y(v) + 3).toFixed(1) + '" text-anchor="end">' + Math.round(v) + "</text>";
    }

    return '<svg class="chart" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="Cumulative degree days">' +
      grid + '<polygon class="area" points="' + area + '"/>' +
      '<polyline class="line" points="' + line + '"/>' +
      (values.length <= 40 ? values.map((v, i) => '<circle class="pt" cx="' + x(i).toFixed(1) + '" cy="' + y(v).toFixed(1) + '" r="2.4"/>').join("") : "") +
      '<text x="' + padL + '" y="' + (h - 6) + '">' + esc(labels[0] || "") + "</text>" +
      '<text x="' + (w - padR) + '" y="' + (h - 6) + '" text-anchor="end">' + esc(labels[labels.length - 1] || "") + "</text>" +
      "</svg>";
  }

  /* ============================================================
     VIEW: photo protocol
     ============================================================ */

  function viewProtocol() {
    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Diagnostic quality</div>' +
        "<h1>Photo and sample protocol</h1>" +
        '<p class="lede">Most failed identifications are photography failures, not expert failures. ' +
        "A photograph confirms a species only when the diagnostic characters are visible — this protocol makes them visible.</p>" +
      "</div></div>" +

      '<div class="grid g2" style="align-items:start">' +
        '<div class="card pad-lg">' +
          '<div class="card-head"><h2>For an insect or mite</h2></div>' +
          '<ol class="small" style="padding-left:18px;line-height:1.9;color:var(--ink-700)">' +
            "<li><strong>Dorsal view</strong>, whole body, in focus, with a scale reference (ruler, coin or grid paper).</li>" +
            "<li><strong>Lateral view</strong> showing the legs, pronotum and abdomen.</li>" +
            "<li><strong>Head close-up</strong>: antennae insertion, segmentation and mouthparts.</li>" +
            "<li><strong>Wing close-up</strong>: venation, scales, halteres or elytra.</li>" +
            "<li><strong>Underside</strong> where relevant (aphids, scales, mites).</li>" +
            "<li>Record <strong>host plant, location on the plant, behaviour and size</strong> before collecting.</li>" +
            "<li>Preserve 5–10 specimens in 70% ethanol; never put soft-bodied larvae in alcohol without photographing them first.</li>" +
          "</ol>" +
          '<div class="callout"><strong>Lighting beats magnification.</strong> Diffuse daylight or a ring light on a plain background produces more usable detail than a flash on a shiny specimen.</div>' +
        "</div>" +

        '<div class="card pad-lg">' +
          '<div class="card-head"><h2>For a plant problem</h2></div>' +
          '<ol class="small" style="padding-left:18px;line-height:1.9;color:var(--ink-700)">' +
            "<li><strong>Whole plant</strong> in its context — row, bed, tunnel or field.</li>" +
            "<li><strong>Symptom close-up</strong> on the affected organ, both surfaces if leaves.</li>" +
            "<li><strong>Transition zone</strong> between healthy and affected tissue — the most diagnostic area.</li>" +
            "<li><strong>Distribution</strong>: photograph a transect or the field pattern from a raised position.</li>" +
            "<li><strong>Roots and collar</strong>: dig up one affected and one healthy plant; wash the roots.</li>" +
            "<li>Record <strong>crop, cultivar, growth stage, irrigation, last sprays and recent weather</strong>.</li>" +
          "</ol>" +
          '<div class="callout"><strong>Include the boring details.</strong> Fertiliser rate, irrigation timing and the last three sprays explain more ' +
          "abiotic and phytotoxicity cases than any laboratory test.</div>" +
        "</div>" +
      "</div>" +

      '<div class="card" style="margin-top:16px">' +
        '<div class="card-head"><h2>What a photograph cannot do</h2></div>' +
        '<div class="table-wrap"><table><thead><tr><th scope="col">Question</th><th scope="col">What is actually required</th></tr></thead><tbody>' +
          "<tr><td>Which cryptic species of <em>Bemisia tabaci</em>?</td><td>Molecular identification (COI, mtCOI) or isoenzyme analysis.</td></tr>" +
          "<tr><td><em>Tuta absoluta</em> vs <em>Phthorimaea operculella</em>?</td><td>Genitalia dissection or DNA barcoding.</td></tr>" +
          "<tr><td>Which <em>Liriomyza</em> species?</td><td>Adult male genitalia, or rearing plus molecular confirmation.</td></tr>" +
          "<tr><td>Fusarium vs Verticillium wilt?</td><td>Laboratory isolation and morphological or molecular identification.</td></tr>" +
          "<tr><td>Is this a virus?</td><td>ELISA or PCR on symptomatic tissue; symptom patterns are not sufficient.</td></tr>" +
          "<tr><td>Herbicide-resistant weed population?</td><td>Dose-response resistance testing, not field observation alone.</td></tr>" +
        "</tbody></table></div></div>";
  }

  /* ============================================================
     VIEW: about
     ============================================================ */

  function viewAbout() {
    return '<div class="page-head"><div class="grow">' +
        '<div class="eyebrow">Scope, method and limits</div>' +
        "<h1>About this workbench</h1>" +
      "</div></div>" +

      '<div class="grid g2" style="align-items:start">' +
        '<div class="card pad-lg">' +
          '<h2 class="h3" style="margin-bottom:10px">What it is</h2>' +
          "<p class=\"small\">A structured field reference for agronomy and plant protection, built around the logic of integrated pest management. " +
          "It organises identification characters, biology, thresholds and management options so that a decision can be justified and recorded — " +
          "not a substitute for a diagnostic laboratory or a licensed agronomist.</p>" +

          '<p class="small" style="margin-top:10px">It deliberately covers more than pests and pathogens. A ranked list that contains only organisms is a ' +
          "misleading list, because a large share of field problems are soil, water, climate or spray related. The library therefore carries " +
          "<strong>abiotic, nutritional and physiological disorders</strong> alongside the pest and disease entries, and a per-crop <strong>agronomy guide</strong> " +
          "sets out the climate, soil, cultivar, planting, water and nutrition context that has to be right before a crop problem can even be interpreted.</p>" +

          '<h2 class="h3" style="margin:18px 0 10px">Geographic emphasis</h2>' +
          "<p class=\"small\">The crop list, pest status notes and seasonal programmes are weighted towards Mediterranean, semi-arid and Saharan production, " +
          "with Algeria as the reference context: Mitidja and coastal horticulture, the high plains of the east, and the oases of the south.</p>" +

          '<h2 class="h3" style="margin:18px 0 10px">How the ranking works</h2>' +
          "<p class=\"small\">The diagnostic engine scores each library entry against the crop you selected, the organ affected and the symptoms you confirmed. " +
          "The percentage expresses <em>character fit</em>, not probability. A high score with one symptom is still a weak hypothesis, which is why " +
          "the engine caps confidence when fewer than two symptoms are selected.</p>" +

          '<p class="small" style="margin-top:10px">For the disorder entries, the field pattern you choose adds an interpretive note: a uniform, wet-zone or ' +
          "row-regular distribution is more consistent with a soil, water, climate or spray cause than with a focal, contagious organism. That is context for " +
          "reading the result, not proof — a patchy problem can still be abiotic, and a uniform one can still be infectious.</p>" +
        "</div>" +

        '<div class="stack">' +
          '<div class="card">' +
            '<div class="card-head"><h2>Standards followed</h2></div>' +
            '<ul class="small" style="padding-left:18px;line-height:1.8;color:var(--ink-700)">' +
              "<li>IRAC mode-of-action classification for insecticides and acaricides.</li>" +
              "<li>FRAC code list for fungicides, including multi-site partners.</li>" +
              "<li>HRAC global herbicide resistance classification.</li>" +
              "<li>EPPO diagnostic protocols and CABI datasheets for species biology.</li>" +
              "<li>FAO and national plant protection guidance for quarantine and locust emergencies.</li>" +
            "</ul>" +
          "</div>" +

          '<div class="card">' +
            '<div class="card-head"><h2>Sources worth consulting</h2></div>' +
            '<ul class="small" style="padding-left:18px;line-height:1.9;color:var(--ink-700)">' +
              '<li><a href="https://irac-online.org" target="_blank" rel="noopener">IRAC — Mode of Action classification</a></li>' +
              '<li><a href="https://www.frac.info" target="_blank" rel="noopener">FRAC — Fungicide Resistance Action Committee</a></li>' +
              '<li><a href="https://gd.eppo.int" target="_blank" rel="noopener">EPPO Global Database</a></li>' +
              '<li><a href="https://www.cabi.org/isc" target="_blank" rel="noopener">CABI Invasive Species Compendium</a></li>' +
              '<li><a href="https://www.fao.org/plant-health" target="_blank" rel="noopener">FAO Plant Health</a></li>' +
              "<li>National plant protection service (INPV, Algeria) for registration and quarantine status.</li>" +
            "</ul>" +
          "</div>" +

          '<div class="callout red"><strong>Limits of this tool.</strong> ' +
            "Identifications are provisional unless confirmed. Product registrations, doses and intervals change and are national. " +
            "No entry here constitutes a recommendation to apply a pesticide, and no dose is given. " +
            "Always read the authorised label, respect re-entry and preharvest intervals, and protect pollinators, water bodies and operators.</div>" +

          '<div class="card"><div class="small muted">Dataset revision ' + AGRO.meta.revision +
            " · " + AGRO.pests.length + " entries · " + AGRO.crops.length + " crops · " + AGRO.moa.length + " MoA groups. " +
            "Stored locally in your browser; no data leaves the device.</div></div>" +
        "</div>" +
      "</div>";
  }

  /* ============================================================
     EVENTS
     ============================================================ */

  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.getAttribute("data-action");
    const id = el.getAttribute("data-id");

    /* navigation-adjacent */
    if (action === "toast-undo") {
      const act = toastAction;
      toastAction = null;
      clearTimeout(toastTimer);
      $("#toast").hidden = true;
      if (act) act.run();
      return;
    }
    if (action === "new-scout") { location.hash = "#/scout"; setTimeout(() => { const f = $("#scoutForm"); if (f) f.querySelector("input[name=pest]").focus(); }, 60); return; }
    if (action === "close-modal") { closeModal(); return; }
    if (action === "print") { window.print(); return; }
    if (action === "help") { openModal(shortcutsModal()); return; }
    if (action === "theme") { setTheme(currentTheme() === "dark" ? "light" : "dark"); return; }
    if (action === "diag-link") { copyText(diagShareUrl(), "Diagnosis link copied."); return; }
    if (action === "diag-csv") { exportDiag(); return; }

    /* diagnosis */
    if (action === "diag-crop") { state.diag.crop = id; state.diag.step = 1; render(); return; }
    if (action === "diag-organ") { state.diag.organ = id; state.diag.step = 2; state.diag.symptoms = []; state.diag.allSyms = false; render(); return; }
    if (action === "diag-all-syms") { state.diag.allSyms = !state.diag.allSyms; render(); return; }
    if (action === "diag-symptom") {
      const i = state.diag.symptoms.indexOf(id);
      if (i >= 0) state.diag.symptoms.splice(i, 1); else state.diag.symptoms.push(id);
      render(); return;
    }
    if (action === "diag-pattern") { state.diag.pattern = id; render(); return; }
    if (action === "diag-next") { state.diag.step = 3; render(); return; }
    if (action === "diag-back") { state.diag.step = Math.max(0, state.diag.step - 1); render(); return; }
    if (action === "diag-run") { state.diag.step = 4; render(); return; }
    if (action === "diag-reset") { state.diag = freshDiag(); state._diagResumed = false; render(); return; }

    /* crop rotation planner */
    if (action === "seq-add") {
      const sel = $("#seqCrop");
      if (sel && sel.value) { state.seq.push(sel.value); saveSeq(); render(); }
      return;
    }
    if (action === "seq-remove") { const i = +id; if (i >= 0) { state.seq.splice(i, 1); saveSeq(); render(); } return; }
    if (action === "seq-up") { const i = +id; if (i > 0) { const t = state.seq[i - 1]; state.seq[i - 1] = state.seq[i]; state.seq[i] = t; saveSeq(); render(); } return; }
    if (action === "seq-down") { const i = +id; if (i < state.seq.length - 1) { const t = state.seq[i + 1]; state.seq[i + 1] = state.seq[i]; state.seq[i] = t; saveSeq(); render(); } return; }
    if (action === "seq-clear") { if (confirm("Clear the planned sequence?")) { state.seq = []; saveSeq(); render(); } return; }
    if (action === "seq-export") { exportSeq(); return; }

    /* library */
    if (action === "lib-kind") { state.lib.kind = id; render(); return; }
    if (action === "open-pest") {
      const p = pestById(id);
      if (!p) return;
      /* Put the profile in the address, exactly as a received link carries it,
         so any opened profile can be bookmarked, reloaded or sent on. */
      const target = "#/library/" + encodeURIComponent(p.id);
      if (location.hash === target) openModal(pestDetail(p), p);
      else location.hash = target;
      return;
    }
    if (action === "open-crop") { closeModal(); location.hash = "#/crops/" + id; return; }
    if (action === "copy-pest-link") {
      const base = /^https?:$/.test(location.protocol)
        ? location.origin + location.pathname
        : location.href.split("#")[0];
      copyText(base + "#/library/" + encodeURIComponent(id), "Profile link copied.");
      return;
    }
    if (action === "rot-clear") {
      if (confirm("Clear the tracked mode-of-action groups?")) {
        state.rot.clear(); saveRot(); render();
        /* The button that was pressed is gone; return focus to the view
           heading rather than to the body. */
        const h = $("#view").querySelector("h1");
        if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
      }
      return;
    }

    /* key */
    if (action === "key-opt") {
      const next = el.getAttribute("data-next");
      const label = el.getAttribute("data-label");
      state.keyTrail.push(label);
      state.keyPath.push(next);
      state.keyNode = next;
      render();
      return;
    }
    if (action === "key-back") {
      if (state.keyPath.length > 1) {
        state.keyPath.pop();
        state.keyTrail.pop();
        state.keyNode = state.keyPath[state.keyPath.length - 1];
      } else {
        state.keyNode = AGRO.keyStart;
        state.keyTrail = [];
        state.keyPath = [AGRO.keyStart];
      }
      render();
      return;
    }
    if (action === "key-reset") {
      state.keyTrail = [];
      state.keyPath = [AGRO.keyStart];
      state.keyNode = AGRO.keyStart;
      render();
      return;
    }

    /* scout */
    if (action === "scout-del") {
      /* Where the reader was, before the row disappears. */
      const buttons = Array.from(document.querySelectorAll('[data-action="scout-del"]'));
      const at = buttons.findIndex((b) => b.getAttribute("data-id") === id);
      const removed = state.scout.find((r) => r.id === id) || null;
      const removedAt = state.scout.findIndex((r) => r.id === id);
      state.scout = state.scout.filter((r) => r.id !== id);
      saveScout(); render();
      /* The row and its button are gone. Put focus on the button that took
         its place - or the last one - so a keyboard reader stays in the
         table; with no rows left, focus the heading. */
      const left = document.querySelectorAll('[data-action="scout-del"]');
      const next = at >= 0 && left.length ? left[Math.min(at, left.length - 1)] : null;
      if (next) next.focus();
      else {
        const h = $("#view").querySelector("h1");
        if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
      }
      if (removed) {
        toast("Observation deleted.", { label: "Undo", run: function () {
          /* Back in its own place, so the CSV and the stored order are exactly
             what they were before the click. */
          state.scout.splice(removedAt < 0 ? state.scout.length : removedAt, 0, removed);
          saveScout(); render();
          const back = Array.from(document.querySelectorAll('[data-action="scout-del"]'))
            .find((b) => b.getAttribute("data-id") === removed.id);
          if (back) back.focus();
          toast("Observation restored.");
        } });
      }
      return;
    }
    if (action === "scout-clear") {
      if (!state.scout.length) return;
      if (confirm("Delete all scouting records on this device?")) {
        state.scout = []; saveScout(); render();
        const h = $("#view").querySelector("h1");
        if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
      }
      return;
    }
    if (action === "scout-export") { exportScout(); return; }
    if (action === "backup-all") { exportAll(); return; }

    /* gdd */
    if (action === "gdd-run") { runGdd(); return; }
    if (action === "gdd-sample") { loadGddSample(); return; }
  });

  document.addEventListener("change", function (e) {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.getAttribute("data-action");

    if (action === "lib-crop") { state.lib.crop = el.value; render(); return; }
    if (action === "scout-series") {
      state.scoutSeries = el.value;
      render();
      /* render() rebuilds the select; keep focus on it so a keyboard reader
         can step through the series without tabbing back. */
      const again = document.querySelector('[data-action="scout-series"]');
      if (again) again.focus();
      return;
    }
    if (action === "import-file") {
      if (el.files && el.files[0]) { importAll(el.files[0]); el.value = ""; }
      return;
    }
    if (action === "crops-crop") { state.cropGuide = el.value; location.hash = "#/crops/" + el.value; return; }
    if (action === "ipm-crop") { location.hash = "#/ipm/" + el.value; return; }
    if (action === "rot-toggle") {
      const key = el.getAttribute("data-key");
      if (el.checked) state.rot.add(key); else state.rot.delete(key);
      saveRot();
      render();
      /* The list is rebuilt, so the switch that was just used no longer
         exists; put focus back on its replacement instead of dropping the
         keyboard reader at the top of the document. */
      const again = document.querySelector('input[data-action="rot-toggle"][data-key="' + key + '"]');
      if (again) again.focus();
      return;
    }
    if (action === "gdd-preset") {
      const base = el.value;
      const preset = AGRO.gddPresets.find((p) => String(p.base) === String(base));
      const input = $("#gddBase");
      if (input) input.value = base;
      toast(preset ? preset.name + " — " + preset.note : "Base temperature applied.");
      return;
    }
  });

  /* Keep whatever is typed in the observation form: switching the chart series
     or deleting a row re-renders the view, and a half-entered field note is
     work that must not disappear because of a click somewhere else. */
  document.addEventListener("input", function (e) {
    const f = e.target && e.target.closest ? e.target.closest("#scoutForm") : null;
    if (!f) return;
    const d = {};
    ["date", "crop", "count", "pest", "unit", "notes"].forEach((n) => {
      if (f.elements[n]) d[n] = f.elements[n].value;
    });
    state.scoutDraft = d;
  });

  document.addEventListener("submit", function (e) {
    if (e.target.id !== "scoutForm") return;
    e.preventDefault();
    const f = e.target;
    const rec = {
      id: "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      date: f.date.value,
      crop: f.crop.value,
      pest: f.pest.value.trim(),
      unit: f.unit.value,
      count: f.count.value,
      notes: f.notes.value.trim()
    };
    if (!rec.pest) { toast("Describe the observation first."); return; }
    state.scout.push(rec);
    saveScout();
    state.scoutDraft = null;
    render();
    toast("Observation saved.");
  });

  /* global search */
  const search = $("#globalSearch");
  search.addEventListener("input", function () {
    state.lib.q = search.value;
    if (state.route !== "library") location.hash = "#/library";
    else render();
  });

  /* keyboard */
  document.addEventListener("keydown", function (e) {
    // Keyboard activation for interactive cards/rows that are not native buttons.
    if ((e.key === "Enter" || e.key === " ") && document.activeElement &&
        document.activeElement.hasAttribute("data-action") &&
        !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      document.activeElement.click();
      return;
    }
    if (e.key === "Escape") { closeModal(); $("#sidebar").classList.remove("open"); syncMenu(); }
    if (e.key === "Tab" && !$("#modal").hidden) {
      const focusables = Array.prototype.slice.call(
        $("#modal").querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter(function (el) { return el.offsetParent !== null; });
      if (focusables.length) {
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    /* The search box is behind a dialog, so the shortcut must not pull focus
       out of an open profile. */
    if (e.key === "/" && $("#modal").hidden && document.activeElement !== search &&
        !/input|textarea|select/i.test(document.activeElement.tagName)) {
      e.preventDefault(); search.focus();
    }
    if (e.key === "?" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      if ($("#modal").hidden) openModal(shortcutsModal());
    }
  });

  /* menu */
  function syncMenu() {
    const open = $("#sidebar").classList.contains("open");
    $("#menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
  }
  $("#menuBtn").addEventListener("click", function () {
    $("#sidebar").classList.toggle("open");
    syncMenu();
  });
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 940 && !e.target.closest("#sidebar") && !e.target.closest("#menuBtn")) {
      $("#sidebar").classList.remove("open");
      syncMenu();
    }
  });

  /* ---------------- CSV export ---------------- */

  /* One CSV field, always quoted and with an embedded quote doubled. Every
     export goes through this: a single unescaped quote in an observation name
     ("Tuta \"absoluta\"") shifts every following column in a spreadsheet. */
  function csvCell(v) {
    return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"';
  }

  function exportScout() {
    if (!state.scout.length) { toast("Nothing to export yet."); return; }
    const head = ["date", "crop", "observation", "unit", "count", "notes"];
    const lines = [head.map(csvCell).join(",")].concat(state.scout.map((r) =>
      [r.date, cropName(r.crop), r.pest, r.unit, r.count, r.notes]
        .map(csvCell).join(",")));
    const blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "agroscope-scouting-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast("CSV exported.");
  }

  /* ---------------- backup & restore ---------------- */

  function downloadBlob(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* ---------------- share a diagnosis ---------------- */

  function diagShareUrl() {
    const d = state.diag;
    const q = new URLSearchParams();
    q.set("crop", d.crop);
    if (d.organ) q.set("organ", d.organ);
    if (d.symptoms.length) q.set("symptoms", d.symptoms.join(","));
    if (d.pattern) q.set("pattern", d.pattern);
    return location.href.split("#")[0] + "#/diagnose?" + q.toString();
  }

  /* The assessment as CSV, built only from the ranking the app already
     computed. Kept as a pure string builder so the exact output can be
     inspected without going through the download plumbing. */
  function diagCsvText() {
    const d = state.diag;
    const rows = diagnose().slice(0, 6);
    const cell = csvCell;
    const organ = (AGRO.organs.find((o) => o.id === d.organ) || {}).label || "";
    const pattern = (AGRO.patterns.find((p) => p.id === d.pattern) || {}).label || "";
    const head = ["rank", "candidate", "scientific_name", "kind", "fit_percent",
      "matched_symptoms", "organ_listed", "crop", "organ", "symptoms_assessed",
      "field_pattern", "fit_note", "answers_link"];
    const lines = [head.map(cell).join(",")].concat(rows.map((r, i) => {
      const matched = (r.p.symptoms || []).filter((s) => d.symptoms.includes(s)).map(symLabel);
      const sci = r.p.sci && r.p.sci !== "—" ? r.p.sci : "";
      return [i + 1, r.p.name, sci, KIND_LABEL[r.p.kind] || r.p.kind, r.pct,
        matched.join("; "),
        (r.p.organs || []).includes(d.organ) ? "yes" : "no",
        cropName(d.crop), organ, d.symptoms.map(symLabel).join("; "), pattern,
        "fit score, not probability", diagShareUrl()].map(cell).join(",");
    }));
    return "\ufeff" + lines.join("\r\n");
  }

  function exportDiag() {
    if (!diagnose().length) { toast("Nothing to export — no candidate matched."); return; }
    downloadBlob(new Blob([diagCsvText()], { type: "text/csv;charset=utf-8;" }),
      "agroscope-assessment-" + new Date().toISOString().slice(0, 10) + ".csv");
    toast("Assessment CSV exported.");
  }

  function copyText(text, okMsg) {
    const fail = function () {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:-1000px;left:-1000px";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove();
      toast(ok ? okMsg : "Copy failed — select the address bar and copy the link.");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fail);
    } else {
      fail();
    }
  }

  function exportAll() {
    const payload = {
      app: "AgroScope",
      schema: 1,
      exportedAt: new Date().toISOString(),
      scout: state.scout,
      sequence: state.seq,
      /* The resistance record is seasonal and cannot be re-derived from the
         other two, so it travels with the backup as plain "scheme:code" keys. */
      rotation: Array.from(state.rot)
    };
    downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }),
      "agroscope-backup-" + new Date().toISOString().slice(0, 10) + ".json");
    toast("Backup file saved.");
  }

  function exportSeq() {
    if (!state.seq.length) { toast("Nothing to export yet."); return; }
    const head = ["season", "crop", "family", "previous_crop", "same_family", "shared_entries"];
    const lines = [head.map(csvCell).join(",")];
    state.seq.forEach((id, i) => {
      const prev = i > 0 ? state.seq[i - 1] : null;
      const sameFam = prev ? String(!!(familyOf(prev) && familyOf(prev) === familyOf(id))) : "";
      const shared = prev ? sharedRisk(prev, id).length : "";
      lines.push([i + 1, cropName(id), familyOf(id) || "", prev ? cropName(prev) : "", sameFam, shared]
        .map(csvCell).join(","));
    });
    downloadBlob(new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" }),
      "agroscope-rotation-" + new Date().toISOString().slice(0, 10) + ".csv");
    toast("Rotation CSV exported.");
  }

  function importAll(file) {
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const d = JSON.parse(reader.result);
        if (!d || d.app !== "AgroScope") throw new Error("not an AgroScope backup");
        if (Array.isArray(d.scout)) state.scout = d.scout;
        if (Array.isArray(d.sequence)) state.seq = d.sequence.filter((id) => AGRO.cropGuides[id]);
        /* A backup written before the rotation tracker existed has no
           rotation field: leave the current selection alone rather than
           silently clearing a record the user is keeping. When the field is
           present, keep only groups that still exist in the dataset. */
        if (Array.isArray(d.rotation)) {
          const valid = new Set(AGRO.moa.map((g) => g.scheme + ":" + g.code));
          state.rot = new Set(d.rotation.filter((k) => valid.has(k)));
          saveRot();
        }
        saveScout();
        saveSeq();
        render();
        /* Say what actually came back: a file that only holds a sequence
           should not look like a full restore. */
        const parts = [];
        if (Array.isArray(d.scout)) parts.push(plural(state.scout.length, "record", "records"));
        if (Array.isArray(d.sequence)) parts.push(plural(state.seq.length, "crop", "crops") + " planned");
        if (Array.isArray(d.rotation)) parts.push(plural(state.rot.size, "group", "groups") + " tracked");
        toast(parts.length ? "Restored " + parts.join(", ") + "." : "Backup restored.");
      } catch (err) {
        toast("That file is not a valid AgroScope backup.");
      }
    };
    reader.onerror = function () { toast("Could not read the file."); };
    reader.readAsText(file);
  }

  /* ---------------- degree days ---------------- */
  function runGdd() {
    const base = parseFloat($("#gddBase").value);
    const raw = $("#gddData").value.trim();
    if (isNaN(base)) { toast("Enter a valid base temperature."); return; }
    if (!raw) { toast("Paste at least one line of temperature data."); return; }

    const rows = [];
    const skipped = [];
    const swapped = [];
    let cum = 0, peak = 0;

    /* A temperature in degrees Celsius outside this range is a typo or a date
       read as a number, not a reading; -80..80 covers every station record. */
    const plausible = (v) => v >= -80 && v <= 80;
    const dateLike = (s) => /^\d{4}-\d{1,2}-\d{1,2}$/.test(s) ||
      /^\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{2,4}$/.test(s) || /^[A-Za-z]{3,}/.test(s);

    raw.split(/\r?\n/).forEach((line, idx) => {
      const parts = line.split(/[,;\t]+/).map((s) => s.trim()).filter(Boolean);
      if (!parts.length) return;
      let date, tmin, tmax;
      if (parts.length >= 3) { date = parts[0]; tmin = parseFloat(parts[1]); tmax = parseFloat(parts[2]); }
      else if (parts.length === 2) {
        /* Two fields mean (tmin, tmax) only when the first is not a date.
           Otherwise a truncated "2026-10-03, 9" would be read as 2026 °C. */
        if (dateLike(parts[0])) { skipped.push(idx + 1); return; }
        date = "Day " + (idx + 1); tmin = parseFloat(parts[0]); tmax = parseFloat(parts[1]);
      }
      else { skipped.push(idx + 1); return; }
      if (isNaN(tmin) || isNaN(tmax) || !plausible(tmin) || !plausible(tmax)) { skipped.push(idx + 1); return; }
      if (tmin > tmax) { const t = tmin; tmin = tmax; tmax = t; swapped.push(idx + 1); }
      const dd = Math.max(0, (tmin + tmax) / 2 - base);
      cum += dd;
      if (dd > peak) peak = dd;
      rows.push({ date: date, tmin: tmin, tmax: tmax, dd: dd, cum: cum });
    });

    if (!rows.length) { toast("No valid lines. Use: date, tmin, tmax"); return; }
    state.gdd = {
      base: base, raw: raw, rows: rows, cum: rows.map((r) => r.cum),
      days: rows.length, total: cum, peak: peak,
      skipped: skipped, swapped: swapped
    };
    render();
    toast(plural(rows.length, "day accumulated.", "days accumulated.") +
      (skipped.length ? " " + plural(skipped.length, "line ignored.", "lines ignored.") : ""));
  }

  function loadGddSample() {
    const base = 8;
    const temps = [
      [7, 19], [8, 21], [9, 23], [10, 24], [9, 22], [8, 20], [7, 18],
      [8, 20], [10, 23], [11, 25], [12, 27], [11, 26], [10, 24], [9, 22],
      [9, 21], [10, 24], [12, 28], [13, 30], [12, 28], [11, 26]
    ];
    const start = new Date();
    start.setDate(start.getDate() - temps.length);
    const raw = temps.map((t, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d.toISOString().slice(0, 10) + ", " + t[0] + ", " + t[1];
    }).join("\n");
    $("#gddBase").value = base;
    $("#gddData").value = raw;
    runGdd();
  }

  /* ---------------- boot ---------------- */

  $("#dataStamp").textContent = "rev " + AGRO.meta.revision;
  syncThemeButton();

  /* Offline use of the hosted copy: cache the app shell so it keeps working
     without a network. No-op from a file:// URL, where a worker cannot run. */
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(function () {
        /* best-effort: the app already works offline from a local file */
      });
    });
  }

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/dashboard";
  render();

})();
