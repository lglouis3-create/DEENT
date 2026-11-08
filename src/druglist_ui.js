/* ==========================================================================
   DRUG LIST TAB, PHAR 4346 DEENT (Exam 1)
   --------------------------------------------------------------------------
   TEMPORARY course-level presentation, to be replaced by the shared-kit Drug
   List feature. The kit core (25c643d) is not changed: this file is a course
   data file (course.js `files`), so the build puts it into the page before
   views.js. At load it adds a "Drug list" nav button and its pane #v-drugs,
   and wraps the engine's show() the way the core's feature-module hook
   (features.js, X.tab) does, which this course does not switch on. It runs
   only in a real browser page (MutationObserver and the nav present); in the
   node checks' stub DOM it does nothing, so they see the core page.

   Data: druglist_data.js (DRUGLIST). Targets and mechanisms are read from the
   Reference tab's "Drug targets" table (REFERENCE_HTML, rows tgt-*), the one
   source of targets. Links use the engine's own drillList(), jump(),
   linksFor() and the RET/backBtn return stack.

   Storage: none. Nothing is written to localStorage, sessionStorage or
   IndexedDB; typed recall text lives in this page's memory only and is gone
   on reload. (The engine's own place-keeping may remember that this tab was
   open, as it does for every tab.)
   ========================================================================== */
const DRUGLIST_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('nav') &&
             typeof document.getElementById('nav').insertBefore === 'function';
  if (!ok) return null;
  const DL = DRUGLIST, ID = 'drugs';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const st = {q: '', dz: '', cls: '', page: '', status: '', boxed: false, photo: false, hasq: false,
              recall: true, showCls: false, flash: false, fi: 0};
  const revealed = new Set(), typed = {};       // memory only, never stored
  let TGT = null, QCACHE = null, pane = null;

  const css = `
#v-drugs .dlbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 10px}
#v-drugs .dlbar input[type=search]{flex:1 1 220px;min-width:0;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text)}
#v-drugs .dlbar select{font:inherit;font-size:14px;padding:6px 8px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);max-width:100%;min-width:0;flex:1 1 150px}
#v-drugs .dlnote{font-size:13px;color:var(--text-dim);margin:0 0 10px;line-height:1.45}
#v-drugs .dlnote summary{cursor:pointer;color:var(--text)}
#v-drugs .dlnote p,#v-drugs .dlnote ul{margin:6px 0}
#v-drugs .dlself{font-size:13px;background:var(--accent-bg);border:1px solid var(--line);border-radius:8px;padding:8px 10px;margin:0 0 12px}
#v-drugs .dlcount{font-size:13px;color:var(--text-dim);margin:4px 0 10px}
#v-drugs .dlgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,330px),1fr));gap:12px}
#v-drugs .dlcard{background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:8px;min-width:0;overflow-wrap:anywhere}
#v-drugs .dlcard.opt{border-style:dashed}
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
#v-drugs .dlrecall textarea{width:100%;min-height:58px;font:inherit;font-size:14px;padding:7px 9px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text);resize:vertical}
#v-drugs .dlrecall label{display:block;font-size:12.5px;color:var(--text-dim);margin-bottom:3px}
#v-drugs .dlrow{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
#v-drugs .dlrow .meta{font-size:12px;color:var(--text-dim)}
#v-drugs .chip{font-size:13px}
#v-drugs .btn.sm{padding:6px 12px;font-size:14px}
#v-drugs .dlflash{display:flex;flex-direction:column;gap:10px;max-width:560px;margin:0 auto}
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

  /* ---------- one card ---------- */
  function answer(d){
    const rows = [d.tgt, d.tgt2].filter(Boolean).map(id => targets()[id] || {parts: []});
    const all = [].concat(...rows.map(r => r.parts));
    const tg = all.filter(p => p.kind === 'tg'), mo = all.filter(p => p.kind === 'mo');
    const cls = [];
    if (d.chartClass) cls.push({t: d.chartClass, by: 'chart', cite: 'Chart p. ' + d.page});
    if (!d.chartClass && d.cls === 'tnf') cls.push({t: 'TNF-α inhibitor', by: 'smith', cite: 'PCol 70–74'});
    const use = [];
    if (d.chartUse) use.push({t: d.chartUse, by: 'chart', cite: 'Chart p. ' + (d.pages ? d.pages.join(', ') : d.page)});
    (d.use || []).forEach(u => use.push(u));
    const notes = (d.notes || []);
    const Q = qs(d), links = readLinks(d);
    const members = DL.D.filter(x => x.cls === d.cls && x.id !== d.id);
    return field('f-class', 'Class', cls) + field('f-use', 'Indication', use) +
      field('f-tg', 'Target', tg) + field('f-mo', 'Mechanism', mo) +
      field('f-why', 'Why it helps (Dr. Smith)', d.why ? [d.why] : []) +
      field('f-box', 'Boxed warning', d.boxed ? [d.boxed] : []) +
      field('f-ae', 'Key adverse effects and cautions', d.ae || []) +
      field('f-ph', d.photo && d.photo.no ? 'Photosensitivity: not photosensitizing' : 'Photosensitizing', d.photo ? [d.photo] : []) +
      field('f-note', 'Also', notes) +
      (members.length ? `<div class="dlrow"><span class="meta">Compare in class (${esc(DL.CLASSES[d.cls])}):</span>
        <button type="button" class="chip" data-dl="cls" data-cls="${esc(d.cls)}">Show all ${members.length + 1}</button>
        ${members.slice(0, 8).map(m => `<button type="button" class="chip" data-dl="only" data-id="${esc(m.id)}">${esc(m.name)}</button>`).join('')}</div>` : '') +
      `<div class="dlrow"><span class="meta">Practice:</span>
        ${Q.own.length ? `<button type="button" class="chip" data-dl="quiz" data-id="${esc(d.id)}">${Q.own.length} question${Q.own.length > 1 ? 's' : ''} on ${esc(d.name)}</button>` : '<span class="meta">no question names this drug</span>'}
        ${Q.cls.length ? `<button type="button" class="chip" data-dl="cquiz" data-id="${esc(d.id)}">${Q.cls.length} on the class</button>` : ''}</div>
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
  function card(d){
    const [sc, sl] = STATUS[d.status];
    const open = !st.recall || revealed.has(d.id);
    const brands = (d.brands || []).length ? `<p class="dlbrand">Brand${d.brands.length > 1 ? 's' : ''} (chart, reference only): ${esc(d.brands.join(', '))}</p>` : '';
    const alt = (d.alt || []).length ? `<p class="dlbrand">Also: ${esc(d.alt.join(', '))}</p>` : '';
    const flags = open ? (d.boxed ? '<span class="dlbadge box">Boxed warning</span>' : '') +
                         (d.photo && !d.photo.no ? '<span class="dlbadge ph">Photosensitizing</span>' : '') : '';
    let h = `<article class="dlcard${d.status === 'taught' ? '' : ' opt'}" data-id="${esc(d.id)}">
      <h3>${esc(d.name)}</h3>${alt}${brands}
      <p class="dlmeta"><span class="dlbadge ${sc}">${esc(sl)}</span><span class="dlbadge">Chart p. ${esc(d.pages ? d.pages.join(', ') : d.page)} · ${esc(d.rx)}</span>${flags}</p>`;
    if (st.recall) {
      if (st.showCls) h += `<div class="dlf f-class"><b>Class</b><ul><li>${esc(DL.CLASSES[d.cls])}${d.sub ? ' · ' + esc(d.sub) : ''}</li></ul></div>`;
      h += `<div class="dlrecall"><label for="dlt-${esc(d.id)}">Write the target or mechanism first (self-check: not graded, not saved)</label>
        <textarea id="dlt-${esc(d.id)}" autocomplete="off" autocapitalize="off" data-dl="typed" data-id="${esc(d.id)}">${esc(typed[d.id] || '')}</textarea></div>
        <div class="dlrow"><button type="button" class="btn sm${open ? ' ghost' : ''}" data-dl="reveal" data-id="${esc(d.id)}" aria-expanded="${open}" aria-controls="dla-${esc(d.id)}">${open ? 'Hide again' : 'Reveal'}</button></div>`;
    }
    h += `<div id="dla-${esc(d.id)}" class="dlans">${open ? answer(d) : ''}</div></article>`;
    return h;
  }

  /* ---------- the pane ---------- */
  const opt = (v, label, cur) => `<option value="${esc(v)}"${String(cur) === String(v) ? ' selected' : ''}>${esc(label)}</option>`;
  function controls(){
    const nShown = DL.D.length;
    return `<h2>Drug list</h2>
    <p class="sub">Every drug on the dermatology drug chart, pp. 1–6 (${nShown} drugs). Dr. Smith's slides and recordings decide what is examinable; the chart is a guide. Each line names its source: <span class="dlsrc smith">Dr. Smith · slide</span> <span class="dlsrc sikazwe">Dr. Sikazwe · DPAW page</span> <span class="dlsrc chart">Drug chart · page</span></p>
    <details class="dlnote"><summary>About this list and the chart</summary>
      <p>Targets and mechanisms come from Reference, "Drug targets: write it first, then check". Not here: the lice and scabies page (chart p. 7), which is not in the Exam 1 lectures. Brand names are reference information from the chart; Dr. Smith asks by generic name.</p>
      <ul>${DL.CHART_NOTES.map(n => `<li>${esc(n)}</li>`).join('')}</ul></details>
    <div class="dlbar">
      <input type="search" id="dlq" placeholder="Search generic or brand name, or class" aria-label="Search drugs by generic or brand name or class" value="${esc(st.q)}" autocomplete="off">
    </div>
    <div class="dlbar">
      <select id="dldz" aria-label="Filter by disease">${opt('', 'All diseases', st.dz)}${Object.entries(DL.DISEASES).map(([k, v]) => opt(k, v, st.dz)).join('')}</select>
      <select id="dlcls" aria-label="Filter by drug class">${opt('', 'All classes', st.cls)}${Object.entries(DL.CLASSES).map(([k, v]) => opt(k, v, st.cls)).join('')}</select>
      <select id="dlpage" aria-label="Filter by chart page">${opt('', 'All chart pages', st.page)}${Object.entries(DL.PAGES).map(([k, v]) => opt(k, 'p. ' + k + ': ' + v, st.page)).join('')}</select>
      <select id="dlstatus" aria-label="Filter by Exam 1 status">${opt('', 'Taught and optional', st.status)}${opt('taught', 'Exam 1 taught', st.status)}${opt('optional', 'Optional: chart only', st.status)}</select>
    </div>
    <div class="dlbar">
      <button type="button" class="chip" data-dl="flag" data-f="boxed" aria-pressed="${st.boxed}">Has a boxed warning</button>
      <button type="button" class="chip" data-dl="flag" data-f="photo" aria-pressed="${st.photo}">Photosensitizing</button>
      <button type="button" class="chip" data-dl="flag" data-f="hasq" aria-pressed="${st.hasq}">Has questions</button>
      <button type="button" class="chip" data-dl="clear">Clear filters</button>
    </div>
    <div class="dlbar">
      <button type="button" class="chip" data-dl="recall" aria-pressed="${st.recall}">Recall mode</button>
      ${st.recall ? `<button type="button" class="chip" data-dl="showcls" aria-pressed="${st.showCls}">Show class</button>
        <button type="button" class="chip" data-dl="revealall">Reveal all shown</button>
        <button type="button" class="chip" data-dl="hideall">Hide all</button>` : ''}
      <button type="button" class="chip" data-dl="flash" aria-pressed="${st.flash}">Flashcards</button>
    </div>
    ${st.recall ? '<p class="dlself">Recall mode: each card shows the drug only. Write its target or mechanism, then Reveal and compare. This is a self-check: what you type is not graded and not saved, and it is gone when the page reloads.</p>' : ''}
    <p class="dlcount" id="dlcount" aria-live="polite"></p>
    <div id="dllist"></div>`;
  }
  function drawList(){
    const list = filtered(), out = pane.querySelector('#dllist'), cnt = pane.querySelector('#dlcount');
    cnt.textContent = (list.length === DL.D.length ? `${list.length} drugs` : `${list.length} of ${DL.D.length} drugs`) +
      (st.flash && list.length ? ` · card ${Math.min(st.fi, list.length - 1) + 1} of ${list.length}` : '');
    if (!list.length) { out.innerHTML = '<p class="dlempty">No drug matches this search and these filters. Clear filters to see the whole list.</p>'; return; }
    if (st.flash) {
      st.fi = Math.max(0, Math.min(st.fi, list.length - 1));
      out.innerHTML = `<div class="dlflash">${card(list[st.fi])}
        <div class="dlrow"><button type="button" class="btn ghost sm" data-dl="prev"${st.fi ? '' : ' disabled'}>Previous</button>
        <button type="button" class="btn ghost sm" data-dl="next"${st.fi < list.length - 1 ? '' : ' disabled'}>Next</button>
        <span class="meta">Flashcards: one card at a time through the filtered list; no score, nothing saved.</span></div></div>`;
    } else out.innerHTML = `<div class="dlgrid">${list.map(card).join('')}</div>`;
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
      if (t.id === 'dlq') { st.q = t.value; st.fi = 0; drawList(); }
      else if (t.dataset && t.dataset.dl === 'typed') typed[t.dataset.id] = t.value;
    });
    p.addEventListener('change', e => {
      const t = e.target, k = {dldz: 'dz', dlcls: 'cls', dlpage: 'page', dlstatus: 'status'}[t.id];
      if (k) { st[k] = t.value; st.fi = 0; drawList(); }
    });
    p.addEventListener('click', onClick);
  }
  function rerender(keepScroll){ const y = window.scrollY; render(pane); if (keepScroll) window.scrollTo(0, y); }
  function onClick(e){
    const b = e.target.closest('[data-dl]'); if (!b || b.tagName === 'TEXTAREA') return;
    const a = b.dataset.dl, id = b.dataset.id, d = id && DL.D.find(x => x.id === id);
    if (a === 'reveal' && d) {
      if (revealed.has(id)) revealed.delete(id); else revealed.add(id);
      const c = b.closest('.dlcard'), tmp = document.createElement('div'); tmp.innerHTML = card(d);
      c.replaceWith(tmp.firstElementChild);
      const nb = pane.querySelector(`.dlcard[data-id="${id}"] [data-dl="reveal"]`); if (nb) nb.focus();
    }
    else if (a === 'flag') { st[b.dataset.f] = !st[b.dataset.f]; st.fi = 0; rerender(true); }
    else if (a === 'clear') { Object.assign(st, {q: '', dz: '', cls: '', page: '', status: '', boxed: false, photo: false, hasq: false, fi: 0}); rerender(true); }
    else if (a === 'recall') { st.recall = !st.recall; rerender(true); }
    else if (a === 'showcls') { st.showCls = !st.showCls; rerender(true); }
    else if (a === 'revealall') { filtered().forEach(x => revealed.add(x.id)); drawList(); }
    else if (a === 'hideall') { revealed.clear(); drawList(); }
    else if (a === 'flash') { st.flash = !st.flash; st.fi = 0; if (st.flash) st.recall = true; rerender(true); }
    else if (a === 'prev' || a === 'next') { st.fi += a === 'next' ? 1 : -1; drawList(); }
    else if (a === 'cls') { Object.assign(st, {q: '', dz: '', page: '', status: '', boxed: false, photo: false, hasq: false, fi: 0, cls: b.dataset.cls}); rerender(); window.scrollTo(0, 0); }
    else if (a === 'only' && d) { Object.assign(st, {q: d.name, dz: '', cls: '', page: '', status: '', boxed: false, photo: false, hasq: false, fi: 0}); rerender(); window.scrollTo(0, 0); }
    else if ((a === 'quiz' || a === 'cquiz') && d) {
      const pool = a === 'quiz' ? qs(d).own : qs(d).cls;
      if (!pool.length) return;
      RET.push({view: ID, y: window.scrollY});
      drillList(pool, a === 'quiz' ? 'Drug list: ' + d.name : 'Drug list: ' + DL.CLASSES[d.cls]);
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
        if (typeof VIEW_NAME !== 'undefined' && !VIEW_NAME[ID]) VIEW_NAME[ID] = 'the drug list';
        VIEW = v;
        document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
        VIEWS.forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        p.classList.remove('hide');
        window.scrollTo(0, 0);
        render(p);
      } catch (e) {
        console.error('The drug list could not be drawn; showing Topics.', e);
        if (p) p.classList.add('hide');
        return orig.call(this, 'topics');
      }
    };
  } catch (e) { console.error('The Drug list tab could not be added; the rest of the page is unaffected.', e); }
  return {render, state: st};
})();
