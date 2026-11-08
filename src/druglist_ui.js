/* ==========================================================================
   DRUG LIST TAB, PHAR 4346 DEENT (Exam 1)
   --------------------------------------------------------------------------
   TEMPORARY course-level presentation, to be replaced by the shared-kit Drug
   List feature. The kit core is not changed: this file is a course data file
   (course.js `files`), so the build puts it into the page before views.js.
   At load it adds a "Drug list" nav button and its pane #v-drugs, and wraps
   the engine's show() the way the core's feature-module hook (features.js,
   X.tab) does, which this course does not switch on. It runs only in a real
   browser page (MutationObserver and the nav present); in the node checks'
   stub DOM it does nothing, so they see the core page.

   Three ways to study the list (Louis, 2026-11-08: everything that matches
   the filters at once, no Next button; multiple choice; a recall mode that
   says what to type):
     Browse    every matching drug as a full card, all at once.
     Quiz me   multiple choice, every question for the matching drugs listed
               at once and answered in place (target, class, indication);
               questions come from DRUGLIST.makeQuestion (druglist_data.js),
               which builds them from the cards' own sourced statements.
     Recall    the drug name only, a box to type the target, mechanism, class
               or indication, and Check to compare with the answer and source.
   Generic names only in Quiz me and Recall (brands are on Browse cards, as
   reference). A score in Quiz me counts this page view only.

   Data: druglist_data.js (DRUGLIST). Targets and mechanisms are read from the
   Reference tab's "Drug targets" table (REFERENCE_HTML, rows tgt-*), the one
   source of targets. Links use the engine's own drillList(), jump(),
   linksFor() and the RET/backBtn return stack.

   Storage: none. Nothing is written to localStorage, sessionStorage or
   IndexedDB, and nothing goes into the core's progress or history: quiz
   answers, the score and typed recall text live in this page's memory only
   and are gone on reload. (The engine's own place-keeping may remember that
   this tab was open, as it does for every tab.)
   ========================================================================== */
const DRUGLIST_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('nav') &&
             typeof document.getElementById('nav').insertBefore === 'function';
  if (!ok) return null;
  const DL = DRUGLIST, ID = 'drugs';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const NOFILTER = {q: '', dz: '', cls: '', page: '', status: '', boxed: false, photo: false, hasq: false};
  const st = Object.assign({mode: 'browse', kinds: {target: true, cls: true, use: false}, rfield: 'target'}, NOFILTER);
  // memory only, never stored
  const typed = {}, checked = new Set();
  let quiz = null;                        // {sig, list: [question], ans: {qid: option index}, skipped: {kind: n}}
  let TGT = null, QCACHE = null, pane = null;

  const MODES = [
    ['browse', 'Browse', 'Every drug that matches the filters, shown in full: class, use, target, mechanism, cautions, each line with its source.'],
    ['quiz', 'Quiz me', 'Multiple choice on the drugs that match the filters, all on this page. Tap an answer to see if it is right, the correct answer and its source. Nothing is saved.'],
    ['recall', 'Recall', 'Each drug by name only. Type what you remember, press Check, and compare it yourself with the answer and its source. Not graded, not saved.'],
  ];
  const RFIELDS = {target: 'Target', mech: 'Mechanism', cls: 'Class', use: 'Indication'};

  const css = `
#v-drugs .dlmodes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin:4px 0 6px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper);max-width:520px}
#v-drugs .dlmodes button{min-height:44px;font:inherit;font-size:15px;font-weight:500;border:0;border-left:1px solid var(--line);background:transparent;color:var(--text);padding:8px 6px;cursor:pointer}
#v-drugs .dlmodes button:first-child{border-left:0}
#v-drugs .dlmodes button[aria-checked="true"]{background:var(--ink);color:#fff}
#v-drugs .dlmodes button:focus-visible{outline:3px solid #6FA0E8;outline-offset:-3px}
#v-drugs .dlhow{font-size:14px;color:var(--text);margin:0 0 12px;line-height:1.45}
#v-drugs .dlnote{font-size:13px;color:var(--text-dim);margin:0 0 12px;line-height:1.45}
#v-drugs .dlnote summary{cursor:pointer;color:var(--text);min-height:44px;display:flex;align-items:center}
#v-drugs .dlnote p,#v-drugs .dlnote ul{margin:6px 0}
#v-drugs .dlfilters{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:10px 12px 12px;margin:0 0 12px}
#v-drugs .dlfhead{display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;margin:0 0 6px}
#v-drugs .dlfhead h3{margin:0;font-size:15px}
#v-drugs .dlfhead .n{font-size:13px;color:var(--text-dim)}
#v-drugs .dllink{background:none;border:0;padding:0 4px;font:inherit;font-size:14px;color:var(--accent);text-decoration:underline;min-height:44px;cursor:pointer;margin-left:auto}
#v-drugs .dllink:disabled{color:var(--text-dim);text-decoration:none;cursor:default}
#v-drugs .dlfgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr));gap:8px}
#v-drugs .dlfgrid .wide{grid-column:1/-1}
#v-drugs .dlfld label{display:block;font-size:12px;color:var(--text-dim);margin:0 0 2px}
#v-drugs .dlfld input,#v-drugs .dlfld select{width:100%;min-width:0;min-height:44px;font:inherit;font-size:15px;padding:6px 9px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text)}
#v-drugs .dlchips{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 0;align-items:center}
#v-drugs .dlchips .lab{font-size:13px;color:var(--text-dim);margin-right:2px}
#v-drugs .chip{font-size:14px;min-height:44px;padding:6px 14px}
#v-drugs .btn.sm{padding:8px 14px;font-size:14px;min-height:44px}
#v-drugs .btn.ghost{background:var(--paper);color:var(--text);border:1px solid var(--line)}
#v-drugs .dlmodebar{background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin:0 0 12px}
#v-drugs .dlmodebar p{margin:6px 0 0;font-size:14px;line-height:1.45}
#v-drugs .dlmodebar .ex{font-size:13.5px;color:var(--text-dim)}
#v-drugs .dlcount{font-size:14px;color:var(--text-dim);margin:4px 0 10px}
#v-drugs .dlscore{font-size:15px;font-weight:600;margin:8px 0 0}
#v-drugs .dlgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,330px),1fr));gap:12px}
#v-drugs .dlqlist{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr));gap:12px}
#v-drugs .dlcard{background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:8px;min-width:0;overflow-wrap:anywhere}
#v-drugs .dlcard.dlopt{border-style:dashed}
#v-drugs .dlcard h3{margin:0;font-size:17px}
#v-drugs .dlbrand{font-size:12.5px;color:var(--text-dim);margin:-4px 0 0}
#v-drugs .dlmeta{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:0}
#v-drugs .dlbadge{display:inline-block;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;border-radius:4px;padding:1px 6px;border:1px solid var(--line);color:var(--text-dim)}
#v-drugs .dlbadge.taught{border-color:var(--accent);color:var(--accent)}
#v-drugs .dlbadge.class,#v-drugs .dlbadge.chart{border-style:dashed}
#v-drugs .dlbadge.box{border-color:var(--bad);color:var(--bad);background:var(--bad-bg)}
#v-drugs .dlbadge.ph{border-color:var(--at-s);color:var(--at-s)}
#v-drugs .dlf{border-left:4px solid var(--line);padding:2px 0 2px 9px;margin:0}
#v-drugs .dlf > b{display:block;font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;margin-bottom:1px}
#v-drugs .dlf ul{margin:0;padding-left:16px}
#v-drugs .dlf li{font-size:14px;line-height:1.45;margin:1px 0}
#v-drugs .f-class{border-color:var(--ink)} #v-drugs .f-class>b{color:var(--ink)}
#v-drugs .f-use{border-color:var(--text-dim)} #v-drugs .f-use>b{color:var(--text-dim)}
#v-drugs .f-tg{border-color:var(--at-x)} #v-drugs .f-tg>b{color:var(--at-x)}
#v-drugs .f-mo{border-color:var(--at-n)} #v-drugs .f-mo>b{color:var(--at-n)}
#v-drugs .f-why{border-color:var(--yen)} #v-drugs .f-why>b{color:var(--yen)}
#v-drugs .f-ae{border-color:var(--warn)} #v-drugs .f-ae>b{color:var(--warn)}
#v-drugs .f-box{border-color:var(--bad);background:var(--bad-bg);border-radius:0 6px 6px 0} #v-drugs .f-box>b{color:var(--bad)}
#v-drugs .f-ph{border-color:var(--at-s)} #v-drugs .f-ph>b{color:var(--at-s)}
#v-drugs .f-note{border-color:var(--line)} #v-drugs .f-note>b{color:var(--text-dim)}
#v-drugs .dlsrc{display:inline-block;font-size:11px;color:var(--text-dim);border:1px solid var(--line);border-radius:4px;padding:0 5px;margin-left:4px;white-space:normal}
#v-drugs .dlsrc.smith{border-color:var(--accent)} #v-drugs .dlsrc.sikazwe{border-style:dotted;border-color:var(--sik)} #v-drugs .dlsrc.chart{border-style:dashed}
#v-drugs .dlrow{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
#v-drugs .dlrow .meta{font-size:12px;color:var(--text-dim)}
#v-drugs .dlrecall label{display:block;font-size:13px;color:var(--text-dim);margin:0 0 3px}
#v-drugs .dlrecall .dlrow{flex-wrap:nowrap}
#v-drugs .dlrecall input{flex:1 1 auto;min-width:0;min-height:44px;font:inherit;font-size:16px;padding:6px 9px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text)}
#v-drugs .dlrecall .btn{flex:none}
#v-drugs .dlwhole summary{cursor:pointer;font-size:13px;color:var(--accent);min-height:44px;display:flex;align-items:center}
#v-drugs .dlwhole[open]{display:flex;flex-direction:column;gap:8px}
#v-drugs .dlq{background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:12px;min-width:0;overflow-wrap:anywhere}
#v-drugs .dlq .dlqh{font-size:12px;color:var(--text-dim);margin:0 0 4px;text-transform:uppercase;letter-spacing:.05em}
#v-drugs .dlq .stem{font-size:16px;margin:0 0 10px}
#v-drugs .dlq .opt{min-height:44px;cursor:pointer}
#v-drugs .dlq .opt[aria-disabled="true"]{cursor:default}
#v-drugs .dlq .opt[aria-disabled="true"]:not(.pick-ok):not(.pick-bad):not(.reveal-ok){opacity:.75}
#v-drugs .dlfb{font-size:14px;line-height:1.45;margin:2px 0 0}
#v-drugs .dlfb .r{font-weight:600;color:var(--ok)} #v-drugs .dlfb .w{font-weight:600;color:var(--bad)}
#v-drugs .dlempty{font-size:14px;color:var(--text);margin:10px 0}
#v-atlas .attile.dlhit{outline:3px solid var(--accent);outline-offset:2px}
`;

  /* ---------- data helpers ---------- */
  const targets = () => TGT || (TGT = DL.parseTargets(typeof REFERENCE_HTML !== 'undefined' ? REFERENCE_HTML : ''));
  const qs = d => {
    if (!QCACHE) QCACHE = {};
    if (!QCACHE[d.id]) {
      const own = DL.questionsFor(d, QUESTIONS);
      const ids = new Set(own.map(q => q.id));
      QCACHE[d.id] = {own, cls: DL.classQuestions(d.cls, QUESTIONS).filter(q => !ids.has(q.id))};
    }
    return QCACHE[d.id];
  };
  const byName = {smith: 'Dr. Smith', sikazwe: 'Dr. Sikazwe', chart: 'Drug chart'};
  const src = s => `<span class="dlsrc ${esc(s.by)}">${esc(byName[s.by] || s.by)} · ${esc(s.cite)}</span>`;
  const cap = t => String(t).charAt(0).toUpperCase() + String(t).slice(1);
  const li = s => `<li>${esc(cap(s.t))}${src(s)}</li>`;
  const field = (cls, label, items) => items && items.length ? `<div class="dlf ${cls}"><b>${esc(label)}</b><ul>${items.map(li).join('')}</ul></div>` : '';
  // uses kept out of the wrong options that a slide or transcript names (DL.OFF_CHART)
  const offChart = notes => notes.map(n => `<div class="dlf f-note dloff"><b>${esc(n.head)}</b><ul>${n.src.map(li).join('')}</ul></div>`).join('');
  const STATUS = {taught: ['taught', 'Exam 1 · taught'], class: ['class', 'Optional · class taught, drug on chart only'],
                  chart: ['chart', 'Optional · chart only, not in the Exam 1 lectures']};
  const findText = d => [d.name].concat(d.alt || [], d.brands || [], [DL.CLASSES[d.cls] || '', d.sub || '']).join(' ').toLowerCase();

  function filtered(){
    const v = st.q.trim().toLowerCase();
    return DL.D.filter(d => (!v || findText(d).indexOf(v) !== -1) &&
      (!st.dz || d.dz.includes(st.dz)) && (!st.cls || d.cls === st.cls) &&
      (!st.page || String(d.page) === st.page || (d.pages || []).map(String).includes(st.page)) &&
      (!st.status || (st.status === 'taught' ? d.status === 'taught' : d.status !== 'taught')) &&
      (!st.boxed || d.boxed) && (!st.photo || (d.photo && !d.photo.no)) && (!st.hasq || qs(d).own.length));
  }
  const activeFilters = () => Object.keys(NOFILTER).filter(k => k === 'q' ? st.q.trim() : st[k]).length;

  /* the sourced lines of one field of a card */
  function lines(d){
    const rows = [d.tgt, d.tgt2].filter(Boolean).map(id => targets()[id] || {parts: []});
    const all = [].concat(...rows.map(r => r.parts));
    const cls = [];
    if (d.chartClass) cls.push({t: d.chartClass, by: 'chart', cite: 'Chart p. ' + d.page});
    if (!d.chartClass && d.cls === 'tnf') cls.push({t: 'TNF-α inhibitor', by: 'smith', cite: 'PCol 70–74'});
    const use = [];
    if (d.chartUse) use.push({t: d.chartUse, by: 'chart', cite: 'Chart p. ' + (d.pages ? d.pages.join(', ') : d.page)});
    (d.use || []).forEach(u => use.push(u));
    return {tg: all.filter(p => p.kind === 'tg'), mo: all.filter(p => p.kind === 'mo'), cls, use};
  }

  /* ---------- Browse: one full card ---------- */
  function answer(d){
    const L = lines(d);
    const notes = (d.notes || []).filter(n => n.by !== 'remark'), remarks = (d.notes || []).filter(n => n.by === 'remark');
    const Q = qs(d), links = readLinks(d);
    const members = DL.D.filter(x => x.cls === d.cls && x.id !== d.id);
    return field('f-class', 'Class', L.cls) + field('f-use', 'Indication', L.use) +
      field('f-tg', 'Target', L.tg) + field('f-mo', 'Mechanism', L.mo) +
      field('f-why', 'Why it helps (Dr. Smith)', d.why ? [d.why] : []) +
      field('f-box', 'Boxed warning', d.boxed ? [d.boxed] : []) +
      field('f-ae', 'Key adverse effects and cautions', d.ae || []) +
      field('f-ph', d.photo && d.photo.no ? 'Photosensitivity: not photosensitizing' : 'Photosensitizing', d.photo ? [d.photo] : []) +
      field('f-note', 'Also', notes) + offChart(DL.OFF_CHART[d.id] || []) +
      (remarks.length ? `<div class="dlf f-note"><b>Note</b><ul>${remarks.map(r => `<li>${esc(cap(r.t))}</li>`).join('')}</ul></div>` : '') +
      (members.length ? `<div class="dlrow"><span class="meta">Compare in class (${esc(DL.CLASSES[d.cls])}):</span>
        <button type="button" class="chip" data-dl="cls" data-cls="${esc(d.cls)}">Show all ${members.length + 1}</button>
        ${members.slice(0, 8).map(m => `<button type="button" class="chip" data-dl="only" data-id="${esc(m.id)}">${esc(m.name)}</button>`).join('')}</div>` : '') +
      `<div class="dlrow"><span class="meta">Practice:</span>
        ${Q.own.length ? `<button type="button" class="chip" data-dl="drill" data-id="${esc(d.id)}">${Q.own.length} question${Q.own.length > 1 ? 's' : ''} on ${esc(d.name)}</button>` : '<span class="meta">no question in the bank names this drug</span>'}
        ${Q.cls.length ? `<button type="button" class="chip" data-dl="cdrill" data-id="${esc(d.id)}">${Q.cls.length} on the class</button>` : ''}</div>
      <div class="dlrow"><span class="meta">Read:</span>
        <button type="button" class="chip" data-dl="ref" data-a="${esc(d.tgt)}">Reference: target table</button>
        ${links.map(([v, a, t]) => `<button type="button" class="chip" data-jump="${esc(v)}:${esc(a)}">${esc(t)}</button>`).join('')}
        ${atlasKey(d) ? `<button type="button" class="chip" data-dl="atlas" data-key="${esc(atlasKey(d))}">Atlas: structure</button>` : ''}</div>`;
  }
  function readLinks(d){
    if (typeof linksFor !== 'function') return [];
    const n = {}, keep = {};
    for (const q of qs(d).own) for (const l of linksFor(q)) {
      if (l[1] === 'ref-targets') continue;
      const k = l[0] + ':' + l[1]; n[k] = (n[k] || 0) + 1; keep[k] = l;
    }
    return Object.keys(n).sort((a, b) => n[b] - n[a]).slice(0, 3).map(k => keep[k]);
  }
  function atlasKey(d){
    if (!d.atlas || typeof ATLAS === 'undefined' || !ATLAS.boards) return null;
    for (const b of ATLAS.boards) for (const s of b.sections) for (const it of s.items)
      if (it.plain === d.atlas && (!it.meta || !it.meta.priority || it.meta.priority === 'core')) return d.atlas;
    return null;
  }
  const head = (d, withBrands) => {
    const [sc, sl] = STATUS[d.status];
    const brands = withBrands && (d.brands || []).length ? `<p class="dlbrand">Brand${d.brands.length > 1 ? 's' : ''} (chart, reference only): ${esc(d.brands.join(', '))}</p>` : '';
    const alt = (d.alt || []).length ? `<p class="dlbrand">Also: ${esc(d.alt.join(', '))}</p>` : '';
    return `<h3>${esc(d.name)}</h3>${alt}${brands}
      <p class="dlmeta"><span class="dlbadge ${sc}">${esc(sl)}</span><span class="dlbadge">Chart p. ${esc(d.pages ? d.pages.join(', ') : d.page)} · ${esc(d.rx)}</span>`;
  };
  function card(d){
    const flags = (d.boxed ? '<span class="dlbadge box">Boxed warning</span>' : '') +
                  (d.photo && !d.photo.no ? '<span class="dlbadge ph">Photosensitizing</span>' : '');
    return `<article class="dlcard${d.status === 'taught' ? '' : ' dlopt'}" data-id="${esc(d.id)}">${head(d, true)}${flags}</p>${answer(d)}</article>`;
  }

  /* ---------- Recall: name, box, Check ---------- */
  const RLABEL = {target: 'its target', mech: 'its mechanism', cls: 'its class', use: 'what it is used for'};
  function recallAnswer(d){
    const L = lines(d), f = st.rfield;
    if (f === 'target') return field('f-tg', 'Target', L.tg);
    // the mechanism line continues the target sentence on the Reference table, so the target comes first
    if (f === 'mech') return L.mo.length ? field('f-tg', 'Target', L.tg) + field('f-mo', 'Mechanism', L.mo)
      : `<div class="dlf f-mo"><b>Mechanism</b><ul><li>No separate mechanism line on the Reference table; the target line is the answer.</li></ul></div>` + field('f-tg', 'Target', L.tg);
    if (f === 'cls') return field('f-class', 'Class', L.cls.length ? L.cls : [{t: DL.CLASSES[d.cls], by: 'chart', cite: 'Chart p. ' + d.page}]);
    if (L.use.length) return field('f-use', 'Indication', L.use) + offChart(DL.OFF_CHART[d.id] || []);
    return `<div class="dlf f-use"><b>Indication</b><ul><li>No indication on the chart line (chart p. 5 columns are misaligned; see About this list)${d.dz.length ? ': listed on the ' + esc(DL.PAGES[d.page]) + ' page' : ''}.</li></ul></div>` + offChart(DL.OFF_CHART[d.id] || []);
  }
  function rcard(d){
    const k = d.id + ':' + st.rfield, open = checked.has(k), inp = 'dlt-' + d.id;
    return `<article class="dlcard${d.status === 'taught' ? '' : ' dlopt'}" data-id="${esc(d.id)}">${head(d, false)}</p>
      <div class="dlrecall"><label for="${inp}">${esc(cap(RLABEL[st.rfield]))} (type, then Check)</label>
        <div class="dlrow"><input type="text" id="${inp}" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"
          data-dl="typed" data-id="${esc(d.id)}" value="${esc(typed[k] || '')}">
        <button type="button" class="btn sm${open ? ' ghost' : ''}" data-dl="check" data-id="${esc(d.id)}" aria-expanded="${open}" aria-controls="dla-${esc(d.id)}">${open ? 'Hide' : 'Check'}</button></div></div>
      <div id="dla-${esc(d.id)}" class="dlans">${open ? recallAnswer(d) +
        `<details class="dlwhole"><summary>Whole card</summary>${answer(d)}</details>` : ''}</div></article>`;
  }

  /* ---------- Quiz me: multiple choice, all at once ---------- */
  const qsig = () => JSON.stringify([filtered().map(d => d.id), st.kinds]);
  function buildQuiz(only){
    const T = targets(), list = [], skipped = {};
    const kinds = Object.keys(DL.KINDS).filter(k => st.kinds[k]);
    if (only) for (const q of only) { const n = DL.makeQuestion(DL.D.find(d => d.id === q.drug), T, q.kind); if (n) list.push(n); }
    else for (const d of filtered()) for (const k of kinds) {
      const q = DL.makeQuestion(d, T, k);
      if (q) list.push(q); else skipped[k] = (skipped[k] || 0) + 1;
    }
    quiz = {sig: qsig(), list, ans: {}, skipped, retry: !!only};
  }
  const score = () => {
    const a = Object.keys(quiz.ans), right = a.filter(id => quiz.list.find(q => q.id === id).options[quiz.ans[id]].correct).length;
    return {done: a.length, right, total: quiz.list.length};
  };
  const LET = 'ABCD';
  function qblock(q){
    const pick = quiz.ans[q.id], done = pick !== undefined;
    const opts = q.options.map((o, i) => {
      const c = !done ? '' : i === pick ? (o.correct ? ' pick-ok' : ' pick-bad') : o.correct ? ' reveal-ok' : '';
      return `<button type="button" class="opt${c}" data-dl="pick" data-qid="${esc(q.id)}" data-i="${i}"${done ? ' aria-disabled="true"' : ''}>
        <span class="k" aria-hidden="true">${LET[i]}</span><span>${esc(o.t)}</span></button>`;
    }).join('');
    const right = done && q.options[pick].correct, key = q.options.find(o => o.correct);
    const fb = !done ? '' : `<p class="dlfb">${right ? '<span class="r">Right.</span>' : `<span class="w">Not this one.</span> The answer: <b>${esc(key.t)}</b>.`}</p>
      <div class="dlf ${q.kind === 'target' ? 'f-tg' : q.kind === 'cls' ? 'f-class' : 'f-use'}"><b>Source</b><ul>${q.src.map(li).join('')}</ul></div>
      ${q.also.length ? `<p class="dlfb">Also true for ${esc(q.name)}: ${esc(q.also.join('; '))}.</p>` : ''}
      ${offChart(q.offChart || [])}`;
    return `<div class="dlq" data-qid="${esc(q.id)}"><p class="dlqh">${esc(q.name)} · ${esc(DL.KINDS[q.kind])}</p>
      <p class="stem" id="dlqs-${esc(q.id)}">${esc(q.stem)}</p>
      <div role="group" aria-labelledby="dlqs-${esc(q.id)}">${opts}</div><div aria-live="polite">${fb}</div></div>`;
  }
  function scoreLine(){
    const s = score();
    return s.total ? `${s.right} of ${s.done} right` + (s.done < s.total ? ` · ${s.total - s.done} still to answer` : ' · all answered') : '';
  }

  /* ---------- the pane ---------- */
  const opt = (v, label, cur) => `<option value="${esc(v)}"${String(cur) === String(v) ? ' selected' : ''}>${esc(label)}</option>`;
  const sel = (id, label, html) => `<div class="dlfld"><label for="${id}">${esc(label)}</label><select id="${id}">${html}</select></div>`;
  function controls(){
    const n = activeFilters(), mode = MODES.find(m => m[0] === st.mode);
    let modebar = '';
    if (st.mode === 'quiz') {
      const anyMissed = quiz && quiz.list.some(q => quiz.ans[q.id] !== undefined && !q.options[quiz.ans[q.id]].correct);
      modebar = `<div class="dlmodebar"><div class="dlchips" role="group" aria-label="Ask about"><span class="lab">Ask about:</span>
        ${Object.entries(DL.KINDS).map(([k, v]) => `<button type="button" class="chip" data-dl="kind" data-k="${k}" aria-pressed="${!!st.kinds[k]}">${esc(v)}</button>`).join('')}</div>
        <p class="dlscore" id="dlscore" aria-live="polite">${quiz ? scoreLine() : ''}</p>
        <div class="dlchips"><button type="button" class="btn sm" data-dl="newq">New questions</button>
        <button type="button" class="btn sm ghost" data-dl="retry"${anyMissed ? '' : ' disabled'}>Retry the missed</button></div></div>`;
    } else if (st.mode === 'recall') {
      modebar = `<div class="dlmodebar"><div class="dlchips" role="radiogroup" aria-label="What to recall"><span class="lab">Recall:</span>
        ${Object.entries(RFIELDS).map(([k, v]) => `<button type="button" class="chip" role="radio" data-dl="rfield" data-k="${k}" aria-checked="${st.rfield === k}" aria-pressed="${st.rfield === k}" tabindex="${st.rfield === k ? 0 : -1}">${esc(v)}</button>`).join('')}</div>
        <p>Type what you remember in the box under each drug, then press Check (or Enter). For example, target of tacrolimus: <i>calcineurin (via FKBP)</i>. Spelling and wording don't matter: compare your words with the answer yourself.</p>
        <div class="dlchips"><button type="button" class="btn sm ghost" data-dl="revealall">Check all</button>
        <button type="button" class="btn sm ghost" data-dl="hideall">Hide all answers</button>
        <button type="button" class="btn sm ghost" data-dl="clearbox">Empty the boxes</button></div></div>`;
    }
    return `<h2>Drug list</h2>
    <p class="sub">Every drug on the dermatology drug chart, pp. 1–6 (${DL.D.length} drugs), with each line's source.</p>
    <div class="dlmodes" role="radiogroup" aria-label="How to study the list">
      ${MODES.map(([k, l]) => `<button type="button" role="radio" data-dl="mode" data-k="${k}" aria-checked="${st.mode === k}" tabindex="${st.mode === k ? 0 : -1}">${esc(l)}</button>`).join('')}</div>
    <p class="dlhow" id="dlhow">${esc(mode[2])}</p>
    ${modebar}
    <section class="dlfilters" aria-labelledby="dlfh">
      <div class="dlfhead"><h3 id="dlfh">Filters</h3><span class="n" id="dlfn">${n ? n + ' active' : 'none active'}</span>
        <button type="button" class="dllink" data-dl="clear"${n ? '' : ' disabled'}>Clear filters</button></div>
      <div class="dlfgrid">
        <div class="dlfld wide"><label for="dlq">Search</label><input type="search" id="dlq" placeholder="Generic or brand name, or class" value="${esc(st.q)}" autocomplete="off"></div>
        ${sel('dldz', 'Disease', opt('', 'All diseases', st.dz) + Object.entries(DL.DISEASES).map(([k, v]) => opt(k, v, st.dz)).join(''))}
        ${sel('dlcls', 'Class', opt('', 'All classes', st.cls) + Object.entries(DL.CLASSES).map(([k, v]) => opt(k, v, st.cls)).join(''))}
        ${sel('dlpage', 'Chart page', opt('', 'All chart pages', st.page) + Object.entries(DL.PAGES).map(([k, v]) => opt(k, 'p. ' + k + ': ' + v, st.page)).join(''))}
        ${sel('dlstatus', 'Exam 1', opt('', 'Taught + optional', st.status) + opt('taught', 'Exam 1 taught', st.status) + opt('optional', 'Optional: chart only', st.status))}
      </div>
      <div class="dlchips">
        <button type="button" class="chip" data-dl="flag" data-f="boxed" aria-pressed="${st.boxed}">Has a boxed warning</button>
        <button type="button" class="chip" data-dl="flag" data-f="photo" aria-pressed="${st.photo}">Photosensitizing</button>
        <button type="button" class="chip" data-dl="flag" data-f="hasq" aria-pressed="${st.hasq}">Has bank questions</button>
      </div>
    </section>
    <details class="dlnote"><summary>About this list and the chart</summary>
      <p>Each professor's slides and recording decide what is examinable for that professor's material (Dr. Smith's lectures; Dr. Sikazwe's assigned pages); the chart is a guide. Each line names its source: <span class="dlsrc smith">Dr. Smith · slide</span> <span class="dlsrc sikazwe">Dr. Sikazwe · DPAW page</span> <span class="dlsrc chart">Drug chart · page</span></p>
      <p>Targets and mechanisms come from Reference, "Drug targets: write it first, then check". Not here: the lice and scabies page (chart p. 7), which is not in the Exam 1 lectures. Brand names are reference information from the chart; Dr. Smith asks by generic name, so Quiz me and Recall show generic names only.</p>
      <p>Quiz me asks only what the cards state: a wrong option is another drug's value that is not also true for this drug. Drugs whose chart line names no molecular target (sunscreens, sunburn anesthetics, keratolytics, tars, petrolatum, ketoconazole, spironolactone, dapsone, metronidazole) get no target question; practise those in Recall.</p>
      <ul>${DL.CHART_NOTES.map(n => `<li>${esc(n)}</li>`).join('')}</ul></details>
    <p class="dlcount" id="dlcount" aria-live="polite"></p>
    <div id="dllist"></div>`;
  }
  function drawList(){
    const list = filtered(), out = pane.querySelector('#dllist'), cnt = pane.querySelector('#dlcount');
    const n = activeFilters(), fn = pane.querySelector('#dlfn'), cl = pane.querySelector('[data-dl="clear"]');
    if (fn) fn.textContent = n ? n + ' active' : 'none active';
    if (cl) cl.disabled = !n;
    const drugs = list.length === DL.D.length ? `${list.length} drugs` : `${list.length} of ${DL.D.length} drugs`;
    if (!list.length) { cnt.textContent = drugs; out.innerHTML = '<p class="dlempty">No drug matches this search and these filters. Clear filters to see the whole list.</p>'; return; }
    if (st.mode === 'quiz') {
      if (!quiz || (!quiz.retry && quiz.sig !== qsig())) buildQuiz();
      const sk = Object.entries(quiz.skipped).map(([k, v]) => `${v} without a ${DL.KINDS[k].toLowerCase()} question`);
      cnt.textContent = quiz.retry ? `Retrying ${quiz.list.length} missed question${quiz.list.length === 1 ? '' : 's'} · New questions starts over on ${drugs}`
        : `${drugs} · ${quiz.list.length} question${quiz.list.length === 1 ? '' : 's'}` + (sk.length ? ` (${sk.join(', ')}; see About this list)` : '');
      out.innerHTML = quiz.list.length ? `<div class="dlqlist">${quiz.list.map(qblock).join('')}</div>`
        : '<p class="dlempty">Choose at least one of Target, Class or Indication above, or widen the filters.</p>';
      const sc = pane.querySelector('#dlscore'); if (sc) sc.textContent = scoreLine();
    } else if (st.mode === 'recall') {
      cnt.textContent = drugs;
      out.innerHTML = `<div class="dlgrid">${list.map(rcard).join('')}</div>`;
    } else {
      cnt.textContent = drugs;
      out.innerHTML = `<div class="dlgrid">${list.map(card).join('')}</div>`;
    }
  }
  function render(p){
    pane = p;
    if (!document.getElementById('dlcss')) { const s = document.createElement('style'); s.id = 'dlcss'; s.textContent = css; document.head.appendChild(s); }
    p.innerHTML = controls();
    drawList();
    if (p.dataset.dlWired) return;
    p.dataset.dlWired = '1';
    p.addEventListener('input', e => {
      const t = e.target;
      if (t.id === 'dlq') { st.q = t.value; drawList(); }
      else if (t.dataset && t.dataset.dl === 'typed') typed[t.dataset.id + ':' + st.rfield] = t.value;
    });
    p.addEventListener('change', e => {
      const t = e.target, k = {dldz: 'dz', dlcls: 'cls', dlpage: 'page', dlstatus: 'status'}[t.id];
      if (k) { st[k] = t.value; drawList(); }
    });
    p.addEventListener('keydown', e => {
      const t = e.target;
      if (e.key === 'Enter' && t.dataset && t.dataset.dl === 'typed') {
        e.preventDefault();
        const b = t.closest('.dlcard').querySelector('[data-dl="check"]');
        if (b && !checked.has(t.dataset.id + ':' + st.rfield)) b.click();
        return;
      }
      // arrow keys move within a radio group (mode switch, recall field)
      const g = t.closest && t.closest('[role="radiogroup"]');
      if (!g || t.getAttribute('role') !== 'radio' || !/^Arrow(Left|Right|Up|Down)$|^Home$|^End$/.test(e.key)) return;
      const rs = [...g.querySelectorAll('[role="radio"]')], i = rs.indexOf(t);
      const j = e.key === 'Home' ? 0 : e.key === 'End' ? rs.length - 1 : (i + (/Right|Down/.test(e.key) ? 1 : -1) + rs.length) % rs.length;
      e.preventDefault();
      rs[j].click();
    });
    p.addEventListener('click', onClick);
  }
  function rerender(focusSel){
    const y = window.scrollY; render(pane); window.scrollTo(0, y);
    if (focusSel) { const f = pane.querySelector(focusSel); if (f) f.focus(); }
  }
  function onClick(e){
    const b = e.target.closest('[data-dl]'); if (!b || b.tagName === 'INPUT' || b.disabled) return;
    const a = b.dataset.dl, id = b.dataset.id, d = id && DL.D.find(x => x.id === id);
    if (a === 'mode') { if (st.mode !== b.dataset.k) { st.mode = b.dataset.k; rerender(`[data-dl="mode"][data-k="${st.mode}"]`); } }
    else if (a === 'rfield') { if (st.rfield !== b.dataset.k) { st.rfield = b.dataset.k; rerender(`[data-dl="rfield"][data-k="${st.rfield}"]`); } }
    else if (a === 'kind') { st.kinds[b.dataset.k] = !st.kinds[b.dataset.k]; quiz = null; rerender(`[data-dl="kind"][data-k="${b.dataset.k}"]`); }
    else if (a === 'newq') { quiz = null; rerender('[data-dl="newq"]'); }
    else if (a === 'retry') {
      const missed = quiz.list.filter(q => quiz.ans[q.id] !== undefined && !q.options[quiz.ans[q.id]].correct);
      if (missed.length) { buildQuiz(missed); rerender(); const f = pane.querySelector('.dlq .opt'); if (f) f.focus(); }
    }
    else if (a === 'pick') {
      const q = quiz && quiz.list.find(x => x.id === b.dataset.qid);
      if (!q || quiz.ans[q.id] !== undefined) return;
      quiz.ans[q.id] = +b.dataset.i;
      const blk = b.closest('.dlq'), tmp = document.createElement('div'); tmp.innerHTML = qblock(q);
      blk.replaceWith(tmp.firstElementChild);
      const nb = pane.querySelector(`.dlq[data-qid="${CSS.escape(q.id)}"] [data-i="${b.dataset.i}"]`); if (nb) nb.focus();
      const sc = pane.querySelector('#dlscore'); if (sc) sc.textContent = scoreLine();
      const rb = pane.querySelector('[data-dl="retry"]');
      if (rb) rb.disabled = !quiz.list.some(x => quiz.ans[x.id] !== undefined && !x.options[quiz.ans[x.id]].correct);
    }
    else if (a === 'check' && d) {
      const k = id + ':' + st.rfield;
      if (checked.has(k)) checked.delete(k); else checked.add(k);
      const c = b.closest('.dlcard'), tmp = document.createElement('div'); tmp.innerHTML = rcard(d);
      c.replaceWith(tmp.firstElementChild);
      const nb = pane.querySelector(`.dlcard[data-id="${CSS.escape(id)}"] [data-dl="check"]`); if (nb) nb.focus();
    }
    else if (a === 'revealall') { filtered().forEach(x => checked.add(x.id + ':' + st.rfield)); drawList(); }
    else if (a === 'hideall') { checked.clear(); drawList(); }
    else if (a === 'clearbox') { Object.keys(typed).forEach(k => delete typed[k]); drawList(); }
    else if (a === 'flag') { st[b.dataset.f] = !st[b.dataset.f]; b.setAttribute('aria-pressed', st[b.dataset.f]); drawList(); }
    else if (a === 'clear') { Object.assign(st, NOFILTER); rerender('#dlq'); }
    else if (a === 'cls') { Object.assign(st, NOFILTER, {cls: b.dataset.cls}); rerender(); window.scrollTo(0, 0); }
    else if (a === 'only' && d) { Object.assign(st, NOFILTER, {q: d.name}); rerender(); window.scrollTo(0, 0); }
    else if ((a === 'drill' || a === 'cdrill') && d) {
      const pool = a === 'drill' ? qs(d).own : qs(d).cls;
      if (!pool.length) return;
      RET.push({view: ID, y: window.scrollY});
      drillList(pool, a === 'drill' ? 'Drug list: ' + d.name : 'Drug list: ' + DL.CLASSES[d.cls]);
      backBtn();
    }
    else if (a === 'ref') { jump('ref', b.dataset.a); }
    else if (a === 'atlas') {
      RET.push({view: ID, y: window.scrollY});
      show('atlas'); backBtn();
      const view = document.getElementById('v-atlas'), q = view && view.querySelector('#atq');
      if (q && q.value) { q.value = ''; q.dispatchEvent(new Event('input', {bubbles: true})); }
      // the Atlas controls (atlas_ui.js) key the tiles just after the Atlas is first drawn
      const key = b.dataset.key;
      const go = n => {
        const t = view && view.querySelector(`.attile[data-key="${CSS.escape(key)}"]`);
        if (!t) { if (n < 10) setTimeout(() => go(n + 1), 60); return; }
        t.hidden = false; t.classList.add('dlhit'); setTimeout(() => t.classList.remove('dlhit'), 2600);
        if (typeof scrollToEl === 'function') scrollToEl(t); else t.scrollIntoView();
      };
      go(0);
    }
  }

/* ---------- the tab: nav button, pane, and show() ---------- */
  try {
    const nav = document.getElementById('nav'), main = document.querySelector('main');
    const sec = document.createElement('section'); sec.id = 'v-' + ID; sec.className = 'hide';
    const atSec = document.getElementById('v-atlas');
    if (atSec) main.insertBefore(sec, atSec); else main.appendChild(sec);
    const btn = document.createElement('button'); btn.setAttribute('data-v', ID); btn.textContent = 'Drug list';
    btn.onclick = () => show(ID);
    const atBtn = nav.querySelector('button[data-v="atlas"]');
    if (atBtn) nav.insertBefore(btn, atBtn); else nav.appendChild(btn);
    const orig = show;
    show = function(v){
      const p = document.getElementById('v-' + ID);
      if (v !== ID) { if (p) p.classList.add('hide'); return orig.apply(this, arguments); }
      try {
        // newer cores' show() also closes an open figure, scrolls the tab into view on a
        // narrow nav bar and arms figures; do the same where those functions exist
        if (typeof figClose === 'function') figClose();
        if (typeof VIEW_NAME !== 'undefined' && !VIEW_NAME[ID]) VIEW_NAME[ID] = 'the drug list';
        VIEW = v;
        document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
        VIEWS.forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        p.classList.remove('hide');
        window.scrollTo(0, 0);
        render(p);
        if (typeof navReveal === 'function') navReveal(v);
        else {                               // older core: bring the tab into the scrolled tab bar here
          const nav = document.getElementById('nav'), b = nav && nav.querySelector('button[data-v="' + ID + '"]');
          if (b) { const n = nav.getBoundingClientRect(), r = b.getBoundingClientRect();
                   if (r.left < n.left) nav.scrollLeft -= n.left - r.left + 16; else if (r.right > n.right) nav.scrollLeft += r.right - n.right + 16; }
        }
        if (typeof armFigs === 'function') armFigs(p);
      } catch (e) {
        console.error('The drug list could not be drawn; showing Topics.', e);
        if (p) p.classList.add('hide');
        return orig.call(this, 'topics');
      }
    };
  } catch (e) { console.error('The Drug list tab could not be added; the rest of the page is unaffected.', e); }
  return {render, state: st};
})();
