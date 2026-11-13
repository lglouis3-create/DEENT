/* ==========================================================================
   GUIDES, TELL APART AND REFERENCE IN EXAM FOLDERS
   (course-level, Louis 2026-11-13: "don't forget to put the guide, tell
   apart, references into exam 1 and exam 2 folders please")
   ==========================================================================
   The Topics tab already groups its deck folders into one folder per exam
   (guide.js, groupByExam). This file does the same for the three reading tabs.
   After the core and the other course files have drawn a tab (it is listed
   after jump_ui.js in course.js `files`, so its wrappers of renderGuide,
   renderTell and renderRef run last), every top-level section is moved into
   the folder of its exam:

     Guides      a deck heading <h2 class="gdeck" id="gdeck-<deck>"> and all up
                 to the next one; the exam is the deck's in TOPIC_DECKS.
     Tell apart  an <h3 id> and all up to the next one; the exam is in
     Reference   SECTION_EXAM below, by id, never by the heading's words.

   A section with no entry goes with the section before it, so nothing is ever
   left outside a folder; examfold_test.js fails until it has an entry. A
   section goes with the exam whose lectures it was written from. Two sections
   serve both exams: ref-targets (Dr. Smith's drug chart, Exam 1 material that
   Exam 2 tests again) is with Exam 1; ref-p8-smithpatel (where Dr. Smith's
   Exam 1 sun lecture and Dr. Patel's differ) is with Exam 2, the exam that
   tests both.

   Tell apart has no Exam 2 table of its own. Its Exam 2 folder lists the
   comparisons of the Diseases tab (DZ.tell, DZ.pairs), each a button that
   opens that comparison there; the core's Back button returns. When tell.js
   gains an Exam 2 section, or the Diseases tab is absent, the list is not
   drawn.

   The folder is a <details>, not a button with a hidden box:
     - find-in-page opens a closed <details> around a match (Chrome 97,
       Firefox 139, Safari 26.2 and later); a hidden box is never searched;
     - the core keeps the reader's place across a reload by recording which
       <details> are open, and jump_ui.js opens every <details> around a jump
       target, so both already work with it;
     - a `toggle` event fires however a folder opens, which is where its
       tables are measured (the core's sideCue skips a table that is not on
       screen); keyboard and screen-reader behavior are the browser's.
   One thing follows from the first point. A browser that searches a closed
   <details> keeps its content laid out though not shown, and reports
   positions for it (Chromium 153: the lines of the closed Exam 1 folder lie
   over those of the open Exam 2 folder; checkVisibility() is false for
   them). The core's place-keeping takes the first line whose top edge is on
   screen, so its placeAnchor is wrapped here to leave closed folders out.
   The header looks like the Topics exam folders (same title, date, counts and
   Open/Close chevron); its styles are this file's own, under .rfold.

   Open and closed: the active exam's folder starts open and the others closed
   (a tab with no folder for the active exam opens the latest exam before it).
   The reader's own tap or key on a header is kept on this device under
   `<NS>:readExamOpen` ({tab: {exam number: true|false}}), never in progress
   or history. Nothing else is stored: a folder opened by a jump, a
   walkthrough, find-in-page or printing is not remembered.

   Everything that goes to a place inside a folder finds it open:
     - scrollToEl() (the core's jump(), the "Jump to a section" links,
       walk_ui.js, druglist_ui.js) opens the target's folder first;
     - jump(view, anchor) draws the tab with the target's folder open, so the
       landing and jump_ui.js's highlight measure the final layout (the
       "Listen" rows of narrated figures, dianarr_ui.js, are added while the
       tab is drawn for the same reason); a jump inside one tab keeps the
       folders that were open;
     - the Back button draws the tab it returns to with the folders as they
       were when the reader left it, so the kept scroll position is right;
     - the place kept across a reload: a record written before the folders
       existed names none of them, so they are put at their usual state and
       the folder around the saved line is opened (a line inside a folder's
       body; when the saved line is a closed folder's own header, the folder
       stays closed);
     - a walkthrough player that is open keeps its folder open, unless the
       reader has closed that folder by its header since;
     - printing opens every folder for the print and closes them after.
   When the reader closes a folder by its header, a walkthrough or a narrated
   figure that is being read aloud inside it is paused (its Pause button has
   just left the screen). That folder then stays closed when the tab is drawn
   again, until the reader, a jump or "Listen" opens it.
   A Tell apart row that opens a comparison in the Diseases tab sets that
   tab's sub-view and clears its search; the Back button puts both back as
   they were, when the reader has changed neither in between.
   The core keeps every table's scroll box in a set (views.js TABLE_BOXES) and
   drops one that has left the page only at a window resize; a kept box keeps
   the folder it was in. After each drawing of the three tabs the boxes that
   have left the page are dropped here.
   If the folders cannot be drawn, the tab is drawn again as the core and the
   other files draw it, flat, and one console line says so. */
const EXAMFOLD_UI = (function examFoldUi(){
  if (typeof document === 'undefined' || !document.createElement || !document.head || !document.addEventListener) return null;
  if (typeof show !== 'function') return null;

  /* ---------- which exam a top-level section belongs to ---------- */
  const deckExam = id => {
    const d = (typeof TOPIC_DECKS !== 'undefined' ? TOPIC_DECKS : []).find(x => 'gdeck-' + x.id === id);
    return d && d.exam != null ? d.exam : null;
  };
  const SECTION_EXAM = {
    tell: {'tell-l1-diseases': 1, 'tell-l1-drugs': 1, 'tell-l2': 1, 'tell-l3': 1, 'tell-smith-safety': 1, 'tell-sun': 1,
           'tell-s3': 1, 'tell-s4': 1},
    ref: {'ref-l1-classes': 1, 'ref-l1-acnemap': 1, 'ref-l1-nr': 1, 'ref-l1-steroids': 1, 'ref-l2': 1, 'ref-l3': 1,
          'ref-targets': 1, 'ref-sun': 1, 'ref-s3': 1, 'ref-s4': 1,
          'ref-p5-ftu': 2, 'ref-p5-tcs': 2, 'ref-p5-drugs': 2, 'ref-p5-diaper': 2,
          'ref-p6-alg': 2, 'ref-p6-agents': 2, 'ref-p6-ipledge': 2,
          'ref-p7-shampoo': 2, 'ref-p7-pso': 2, 'ref-p7-sys': 2, 'ref-p7-bio': 2,
          'ref-p8-otc': 2, 'ref-p8-plant': 2, 'ref-p8-bites': 2, 'ref-p8-vector': 2, 'ref-p8-lice': 2, 'ref-p8-venom': 2,
          'ref-p8-sun': 2, 'ref-p8-smithpatel': 2, 'ref-p8-wound': 2, 'ref-p8-wcc': 2},
  };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  const direct = (body, sel) => [...body.children].filter(k => k.matches && k.matches(sel)).length;

  /* Tell apart, Exam 2: the comparisons of the Diseases tab, one button each */
  const DZ_EXAM = 2;
  function dzList(){
    if (typeof DZ === 'undefined' || !DZ || !Array.isArray(DZ.tell) || !DZ.tell.length) return null;
    if (typeof DZ_UI === 'undefined' || !DZ_UI || !DZ_UI.state || !document.querySelector('#nav button[data-v="dz"]')) return null;
    const row = (to, kind, text) => `<li><button type="button" data-jump="${esc(to)}" data-rfdz="${kind}">${esc(text)}</button></li>`;
    const pairs = Array.isArray(DZ.pairs) ? DZ.pairs.length : 0;
    const el = document.createElement('div');
    el.className = 'rfdz'; el.id = 'tell-x2-dz';
    el.innerHTML = '<p class="rfdzlab">In the Diseases tab</p><ul role="list">' +
      DZ.tell.map(t => row('dz:dz-tell-' + t.id, 'tell', t.title)).join('') +
      (pairs ? row('dz:', 'pairs', 'Drugs that get confused: ' + plural(pairs, 'pair')) : '') + '</ul>';
    return el;
  }
  const TABS = {
    guide: {start: 'h2.gdeck[id]', exam: el => deckExam(el.id),
            count: b => plural(direct(b, 'h2.gdeck'), 'lecture deck') + ' · ' + plural(direct(b, 'section.gobj'), 'section')},
    tell:  {start: 'h3[id]', exam: el => SECTION_EXAM.tell[el.id] || null,
            extra: have => { if (have.includes(DZ_EXAM)) return []; const el = dzList(); return el ? [{exam: DZ_EXAM, el}] : []; },
            count: b => { const s = direct(b, 'h3'), d = b.querySelectorAll('.rfdz [data-rfdz="tell"]').length;
              return s || !d ? plural(s, 'section') : plural(d, 'comparison') + ' in the Diseases tab'; }},
    ref:   {start: 'h3[id]', exam: el => SECTION_EXAM.ref[el.id] || null, count: b => plural(direct(b, 'h3'), 'section')},
  };

  /* ---------- the reader's own open and close, this device only ---------- */
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = COURSE.ns; } return ns + ':readExamOpen'; };
  const readSt = () => { try { const v = JSON.parse(localStorage.getItem(KEY()) || '{}'); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch (e) { return {}; } };
  const saveSt = (view, n, on) => {
    try {
      const v = readSt();
      (v[view] = v[view] && typeof v[view] === 'object' ? v[view] : {})[n] = on;
      localStorage.setItem(KEY(), JSON.stringify(v));
    } catch (e) { /* this device only; the folder still opens and closes */ }
  };
  const activeN = () => { const m = String((typeof COURSE !== 'undefined' && COURSE.activeExam) || '').match(/(\d+)$/); return m ? +m[1] : null; };
  // a folder's usual state: the reader's own choice, else open for the active exam; a tab with no folder for the
  // active exam opens the latest exam before it (its last folder when there is none before)
  const usual = (view, n, nums) => {
    const s = readSt()[view];
    if (s && typeof s === 'object' && n in s) return !!s[n];
    const a = activeN();
    if (a == null || nums.includes(a)) return n === a || (a == null && n === nums[nums.length - 1]);
    const before = nums.filter(x => x < a);
    return n === (before.length ? before[before.length - 1] : nums[nums.length - 1]);
  };

  const CSS = `
.rfold{margin:16px 0 0}
.rfold>summary{display:block;list-style:none;cursor:pointer;border-radius:var(--r,10px)}
.rfold>summary::-webkit-details-marker{display:none}
.rfold>summary:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.rfold .rfbtn{display:flex;align-items:center;gap:12px;min-height:44px;box-sizing:border-box;text-align:left;
  background:var(--paper);color:var(--text);border:2px solid var(--line);border-radius:var(--r,10px);padding:10px 14px}
.rfold>summary:hover .rfbtn{border-color:var(--accent)}
.rfold .rftxt{flex:1;min-width:0}
.rfold .rfname{display:block;font-size:17px;font-weight:700;line-height:1.3}
.rfold .rfmeta{display:block;font-size:13px;color:var(--text-dim);margin-top:2px;overflow-wrap:anywhere}
.rfold .rfchev{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--accent);font-weight:500}
.rfold .rfchev::before{content:'Open'}
.rfold[open]>summary .rfchev::before{content:'Close'}
.rfold .rfchev i{font-style:normal;display:inline-block;font-size:18px;line-height:1;transition:transform .15s}
.rfold[open]>summary .rfchev i{transform:rotate(90deg)}
.rfold[open]>summary .rfbtn{border-color:var(--accent);background:var(--accent-bg)}
.rfold .rfbody{padding:2px 0 0;min-width:0}
@media (min-width:701px){.rfold .rfbody{padding-left:6px}}
.rfold .rfbody>h2:first-child{margin-top:16px}
.rfnavx{display:block;font-size:12.5px;line-height:1.3}
.rfnavx b{display:inline-block;font-weight:700;color:var(--text);background:var(--accent-bg);border-radius:6px;padding:3px 8px}
.refnav .rfnavx{flex:0 0 100%;margin:8px 0 0}
.refnav .rfnavx:first-child{margin-top:0}
.wkindex p.rfnavx{margin:12px 0 -2px;max-width:none}
.rfdz{margin:12px 0 20px;max-width:46rem}
.rfdz .rfdzlab{font-size:13px;font-weight:600;color:var(--text-dim);margin:0 0 6px}
.rfdz ul{list-style:none;margin:0;padding:0;border:1px solid var(--line);border-radius:var(--r,10px);background:var(--paper);overflow:hidden}
.rfold .rfdz li{margin:0}
#v-tell .rfdz li{max-width:none}
.rfdz li+li{border-top:1px solid var(--line-soft,var(--line))}
.rfdz button{display:flex;align-items:center;gap:10px;width:100%;min-height:44px;box-sizing:border-box;padding:10px 14px;
  background:none;border:0;color:var(--accent);font:inherit;font-size:14.5px;text-align:left;cursor:pointer}
.rfdz button::after{content:'›';margin-left:auto;font-size:18px;line-height:1;color:var(--text-dim)}
.rfdz button:hover{background:var(--accent-bg)}
.rfdz button:focus-visible{outline:3px solid var(--accent);outline-offset:-3px}
@media (prefers-reduced-motion: reduce){.rfold .rfchev i{transition:none}}
@media print{.rfold>summary .rfchev{display:none}}`;
  const addCss = () => {
    if (document.getElementById('rfoldcss')) return;
    const s = document.createElement('style'); s.id = 'rfoldcss'; s.textContent = CSS; document.head.appendChild(s);
  };

  /* ---------- open and close ---------- */
  const bodyOf = f => f.querySelector(':scope > .rfbody');
  const foldsOf = view => { const p = document.getElementById('v-' + view); return p && p.querySelectorAll ? [...p.querySelectorAll(':scope > .rfold')] : []; };
  // tables drawn while their folder was closed are measured once it is open (the core's sideCue skips a box that is not on screen)
  function measure(f){
    try { if (typeof sideCue === 'function') bodyOf(f).querySelectorAll('.tscroll').forEach(sideCue); } catch (e) { /* the tables still scroll */ }
  }
  // a folder the reader closed by its header and nothing has opened since (page memory, never stored): a walkthrough
  // player inside it does not bring it open again when the tab is next drawn
  const SHUT = {};
  const shutKey = f => f.dataset.view + ':' + f.dataset.exam;
  function setOpen(f, on, keep){
    if (f.open !== on) f.open = on;
    if (on) { delete SHUT[shutKey(f)]; measure(f); }   // measured now, not at the toggle event: a landing that follows measures the final layout
    if (keep) saveSt(f.dataset.view, f.dataset.exam, on);
  }
  // the reader closes a folder: a walkthrough or a narrated figure that is being read aloud inside it is paused
  // (its Pause button leaves the screen with the folder, and the voice would go on with nothing in view to stop it)
  function hush(f){
    const body = bodyOf(f); if (!body) return;
    try {
      const s = typeof WALK_UI !== 'undefined' && WALK_UI && typeof WALK_UI.state === 'function' ? WALK_UI.state() : null;
      const p = s && s.playing && typeof WALK_UI.panel === 'function' ? WALK_UI.panel(s.id) : null;
      if (p && body.contains(p) && typeof WALK_UI.pause === 'function') WALK_UI.pause();
    } catch (e) { /* it plays on, as before */ }
    try {
      // dianarr_ui.js marks the Listen button of the figure it is reading aria-pressed="true"; its narration is the one
      // NARR (walk_ui.js) holds with owner 'dianarr', paused through the handle that figure's own Pause button uses.
      // Between two steps there is no handle to pause: the narration is stopped, the figure stays on its step.
      const d = typeof DIA_NARR_UI !== 'undefined' && DIA_NARR_UI && typeof DIA_NARR_UI.playing === 'function' ? DIA_NARR_UI.playing() : null;
      if (d && !d.paused && body.querySelector('[data-dnplay][aria-pressed="true"]')) {
        const h = typeof NARR !== 'undefined' && NARR && typeof NARR.current === 'function' ? NARR.current() : null;
        if (h && h.owner === 'dianarr' && !h.done && typeof h.pause === 'function') h.pause();
        else if (typeof DIA_NARR_UI.stop === 'function') DIA_NARR_UI.stop();
      }
    } catch (e) { /* it plays on, as before */ }
  }
  // open the closed folder around an element (a jump target, a walkthrough, a line kept across a reload); never stored
  function reveal(el){
    let did = false;
    for (let f = el && el.closest && el.closest('.rfold'); f; f = f.parentElement && f.parentElement.closest('.rfold'))
      if (!f.open) { setOpen(f, true, false); did = true; }
    return did;
  }
  const snapshot = view => { const fs = TABS[view] ? foldsOf(view) : []; if (!fs.length) return null; const open = {}; fs.forEach(f => { open[f.dataset.exam] = f.open; }); return {view, open}; };

  /* ---------- drawing the folders of one tab ---------- */
  let WANT = null;      // the anchor a jump() in progress is going to
  let SAME = null;      // {view, open}: a jump inside one tab keeps the folders that were open
  let BACK = null;      // {view, open}: the Back button returns to the folders as they were
  const BROKEN = {}, UNASSIGNED = {};
  function fold(view){
    const pane = document.getElementById('v-' + view), T = TABS[view];
    if (!pane || !T || !pane.children || !pane.querySelector || pane.querySelector(':scope > .rfold')) return;
    const kids = [...pane.children];
    const starts = kids.filter(k => k.matches && k.matches(T.start));
    if (!starts.length) return;
    // the exam of each section; one with no entry goes with the section before it (the first: with the next that has one)
    const ex = starts.map(s => T.exam(s));
    UNASSIGNED[view] = starts.filter((s, i) => ex[i] == null).map(s => s.id);
    for (let i = 1; i < ex.length; i++) if (ex[i] == null) ex[i] = ex[i - 1];
    const first = ex.find(n => n != null);
    for (let i = 0; i < ex.length && ex[i] == null; i++) ex[i] = first != null ? first : (activeN() || 1);
    // a run: a section start and everything after it up to the next start
    const runs = starts.map((s, i) => {
      const a = kids.indexOf(s), b = i + 1 < starts.length ? kids.indexOf(starts[i + 1]) : kids.length;
      return {exam: ex[i], els: kids.slice(a, b)};
    });
    (T.extra ? T.extra(runs.map(r => r.exam)) : []).forEach(x => runs.push({exam: x.exam, els: [x.el]}));
    const nums = [...new Set(runs.map(r => r.exam))].sort((a, b) => a - b);
    addCss();
    const was = BACK && BACK.view === view ? BACK.open : SAME && SAME.view === view ? SAME.open : null;
    const want = WANT ? document.getElementById(WANT) : null;
    let at = null;
    nums.forEach(n => {
      const mine = runs.filter(r => r.exam === n);
      const exm = ((typeof COURSE !== 'undefined' && COURSE.exams) || []).find(x => x.id === 'exam' + n) || {};
      const lec = ((typeof COURSE !== 'undefined' && COURSE.lectures) || []).find(l => l.exam === n && l.module);
      const title = lec ? String(lec.module).replace(/^(Exam \d+): /, '$1 · ') : 'Exam ' + n;
      const f = document.createElement('details');
      f.className = 'rfold'; f.id = `rfold-${view}-${n}`; f.dataset.view = view; f.dataset.exam = String(n); f.dataset.title = title;
      // "Open" and "Close" are drawn by the stylesheet, so the header's own text is the same open or closed
      // (the core names a fold by its summary text when it keeps the place across a reload)
      f.innerHTML = `<summary class="rfhead"><span class="rfbtn"><span class="rftxt"><span class="rfname">${esc(title)}</span>` +
        `<span class="rfmeta"></span></span><span class="rfchev" aria-hidden="true"><i>›</i></span></span></summary><div class="rfbody"></div>`;
      if (at) at.after(f); else starts[0].before(f);
      at = f;
      const body = bodyOf(f);
      mine.forEach(r => r.els.forEach(el => body.appendChild(el)));
      f.querySelector('.rfmeta').textContent = (exm.date ? exm.date + ' · ' : '') + T.count(body);
      let open = was ? !!was[n] : usual(view, n, nums);
      // a jump's target is never left in a closed folder; nor is a walkthrough player that is open, unless the reader
      // has closed this folder by its header since (the walkthrough was paused then; a jump or "Listen" opens it again)
      if (!open && ((want && body.contains(want)) || (body.querySelector('.wkpanel') && !SHUT[view + ':' + n]))) open = true;
      f.open = open;
      if (open) delete SHUT[view + ':' + n];
      // only the reader's own tap or key on the header is remembered; closing pauses what is read aloud inside
      f.querySelector('summary').addEventListener('click', ev => {
        ev.preventDefault();
        const on = !f.open;
        if (!on) { hush(f); SHUT[shutKey(f)] = true; }
        setOpen(f, on, true);
      });
      // however else it opens (find-in-page, the core's place-keeping, jump_ui.js), its tables are measured
      f.addEventListener('toggle', () => { if (f.open) { delete SHUT[shutKey(f)]; measure(f); } });
    });
    // the "Listen" row of a narrated figure (dianarr_ui.js) is added now instead of at the next frame, so a landing or
    // the Back button's scroll position that follows this drawing is not moved by the rows above it
    try { if (typeof DIA_NARR_UI !== 'undefined' && DIA_NARR_UI && typeof DIA_NARR_UI.arm === 'function') DIA_NARR_UI.arm(pane); } catch (e) { /* it adds them itself a frame later */ }
    foldsOf(view).forEach(f => { if (f.open) measure(f); });
    try { labelLists(pane); } catch (e) { /* the lists stay as they were drawn */ }
  }
  // the "Jump to a section" list and the walkthrough index: the exam's name in front of its first entry
  function labelLists(pane){
    // a tag with its own background: the core draws the jump list on the tab strip's dark color and the index on paper
    const label = (tag, f) => { const s = document.createElement(tag), b = document.createElement('b'); s.className = 'rfnavx'; b.textContent = f.dataset.title; s.appendChild(b); return s; };
    const nav = pane.querySelector('.refnav');
    if (nav) {
      let last = null;
      [...nav.querySelectorAll('a[href^="#"]')].forEach(a => {
        const t = document.getElementById(a.getAttribute('href').slice(1)), f = t && pane.contains(t) ? t.closest('.rfold') : null;
        if (f && f.dataset.exam !== last) { a.before(label('span', f)); last = f.dataset.exam; }
      });
    }
    const idx = pane.querySelector('.wkindex');
    if (idx && typeof WALK_UI !== 'undefined' && WALK_UI && WALK_UI.BY) {
      let last = null;
      [...idx.children].filter(k => k.tagName === 'H3').forEach(h => {
        const b = h.nextElementSibling && h.nextElementSibling.querySelector('button[data-wid]');
        const w = b && WALK_UI.BY[b.dataset.wid], t = w && w.guide && document.getElementById(w.guide), f = t ? t.closest('.rfold') : null;
        if (f && f.dataset.exam !== last) { h.before(label('p', f)); last = f.dataset.exam; }
      });
    }
  }
  // The core keeps every table's scroll box in TABLE_BOXES (views.js boxTables) so a window resize can measure it
  // again, and drops a box that has left the page only then (sideCue). A drawing replaces the tab's boxes; each one
  // still in the set keeps what it was drawn in, here a whole folder. They are dropped after each drawing.
  function dropGone(){
    try {
      if (typeof TABLE_BOXES === 'undefined' || !TABLE_BOXES || typeof TABLE_BOXES.forEach !== 'function' || typeof TABLE_BOXES.delete !== 'function') return;
      TABLE_BOXES.forEach(b => { if (b && b.isConnected === false) TABLE_BOXES.delete(b); });
    } catch (e) { /* a core without the set: nothing to drop */ }
  }
  const after = (og, view) => function(){
    const r = og.apply(this, arguments);          // a throw from the tab's own drawing passes through as before
    if (BROKEN[view]) { dropGone(); return r; }
    try { fold(view); }
    catch (e) {
      BROKEN[view] = true;
      console.error('The exam folders could not be drawn; the tab is shown without them.', e);
      try { og.apply(this, arguments); } catch (e2) { /* as drawn */ }   // drawn again, flat
    }
    dropGone();
    return r;
  };
  if (typeof renderGuide === 'function') renderGuide = after(renderGuide, 'guide');
  if (typeof renderTell === 'function') renderTell = after(renderTell, 'tell');
  if (typeof renderRef === 'function') renderRef = after(renderRef, 'ref');

  /* ---------- everything that goes to a place inside a folder opens the folder first ---------- */
  // 1. scrollToEl(): the core's jump(), the "Jump to a section" links, walk_ui.js, druglist_ui.js.
  //    jump_ui.js has already replaced it with its landing below the pinned strip; this wraps that one.
  try { const land = scrollToEl; scrollToEl = function(el){ try { reveal(el); } catch (e) {} return land.apply(this, arguments); }; } catch (e) { /* an older core without it */ }
  // 2. jump(view, anchor): the tab is drawn with the target's folder open; the tab left behind keeps its folders for Back
  let DZWAS = null;     // {view, q, to}: the Diseases tab's sub-view and search before a Tell apart row set them (5 below)
  if (typeof jump === 'function') {
    const j0 = jump;
    jump = function(view, anchor){
      let left = null, n0 = 0;
      try { left = snapshot(VIEW); n0 = RET.length; } catch (e) {}
      const dzWas = DZWAS; DZWAS = null;
      WANT = anchor || null; SAME = left && left.view === view ? left : null;
      try { return j0.apply(this, arguments); }
      finally {
        WANT = null; SAME = null;
        try { if (left && RET.length > n0 && RET[n0] && RET[n0].view === left.view) RET[n0].rfold = left.open; } catch (e) {}
        // the Back entry this jump made also carries what the Diseases tab showed before the row was tapped
        try { if (dzWas && view === 'dz' && RET.length > n0 && RET[n0]) RET[n0].rfdz = dzWas; } catch (e) {}
      }
    };
  }
  // 3. the place kept across a reload (views.js placeRestore, placeScroll): the core has just set every <details>
  //    of the tab from its record. A record that names no exam folder was written before the folders existed (or
  //    with all of them closed): they go to their usual state. Then the folder around the saved line is opened.
  //    The saved line can be a folder itself: the core takes the first element with an id whose top edge is on
  //    screen, and a closed folder's header is one. That folder stays as the record and the usual state left it.
  function placeFolders(pl){
    if (!pl || pl.rfDone) return;
    const pane = document.getElementById('v-' + pl.v), fs = foldsOf(pl.v);
    if (!pane || !fs.length) return;
    pl.rfDone = true;
    const text = f => (f.querySelector('summary').textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    const keys = new Set(pl.open || []);
    if (!fs.some(f => keys.has(text(f) + '#1'))) {
      const nums = fs.map(f => +f.dataset.exam);
      fs.forEach(f => setOpen(f, usual(pl.v, +f.dataset.exam, nums), false));
    }
    const a = pl.a; let el = null;
    if (a && a.id) el = document.getElementById(a.id);
    else if (a && a.tag) el = [...pane.querySelectorAll(a.tag)].filter(x => (x.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80) === a.txt)[a.n] || null;
    if (el && pane.contains(el) && el.closest('.rfbody')) reveal(el);   // a line inside a folder's body, never the folder or its header
    fs.forEach(f => { if (f.open) measure(f); });
  }
  try { const ps = placeScroll; placeScroll = function(pl){ try { placeFolders(pl); } catch (e) {} return ps.apply(this, arguments); }; } catch (e) { /* an older core without it */ }
  //    The line the core saves (views.js placeAnchor: the first element whose top edge is on screen) must be one the
  //    reader can see. A browser that can search a closed <details> keeps its content laid out but not shown, and
  //    reports positions for it (measured in Chromium 153: the lines of the closed Exam 1 folder lie over those of
  //    the open Exam 2 folder). So while the core looks, the closed folders' boxes are taken out of the layout.
  try {
    const pa = placeAnchor;
    placeAnchor = function(pane){
      let shut = [];
      try { shut = pane && pane.querySelectorAll ? [...pane.querySelectorAll(':scope > details.rfold:not([open]) > .rfbody')] : []; shut.forEach(b => { b.style.display = 'none'; }); } catch (e) { shut = []; }
      try { return pa.apply(this, arguments); }
      finally { shut.forEach(b => { try { b.style.display = ''; } catch (e) {} }); }
    };
  } catch (e) { /* an older core without it */ }
  document.addEventListener('click', e => {
    try {
      const t = e.target; if (!t || !t.closest) return;
      // 4. the Back button: the tab it returns to is drawn with the folders as they were when the reader left it
      if (t.closest('#backbtn')) {
        const r = RET[RET.length - 1];
        BACK = r && r.rfold ? {view: r.view, open: r.rfold} : null;
        setTimeout(() => { BACK = null; }, 0);
        // and the Diseases tab gets back the sub-view and search it had before a Tell apart row opened it (5),
        // when it is still as that row set it: a sub-view or search the reader chose there since is kept
        const w = r && r.rfdz, s = w && typeof DZ_UI !== 'undefined' && DZ_UI ? DZ_UI.state : null;
        if (s && s.view === w.to && s.q === '') { s.view = w.view; s.q = w.q; }
        return;
      }
      // 5. a comparison of the Diseases tab: that tab is set to the view the button names before the core jumps to
      //    it. What it showed before goes with the jump (2), for the Back button.
      const dz = t.closest('[data-rfdz]');
      if (dz && typeof DZ_UI !== 'undefined' && DZ_UI && DZ_UI.state) {
        const s = DZ_UI.state;
        DZWAS = {view: s.view, q: typeof s.q === 'string' ? s.q : '', to: dz.dataset.rfdz};
        setTimeout(() => { DZWAS = null; }, 0);          // for the jump this click makes, and no other
        s.view = dz.dataset.rfdz; s.q = '';
      }
      // 6. a control inside a closed folder that code clicks (a reader cannot: it is not on screen), e.g. a walkthrough's bar
      if (t.closest('.rfold') && !t.closest('.rfhead')) reveal(t);
    } catch (err) { /* the click goes on as before */ }
  }, true);
  // 7. printing: every folder open for the print, then as it was
  let PRINT = null;
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('beforeprint', () => {
      // the folders the reader closed by their headers are noted first: opening for the print is not the reader opening them
      try { PRINT = {y: window.scrollY, marks: Object.assign({}, SHUT), shut: [...document.querySelectorAll('details.rfold:not([open])')]}; PRINT.shut.forEach(f => setOpen(f, true, false)); } catch (e) {}
    });
    window.addEventListener('afterprint', () => {
      try { const p = PRINT; PRINT = null; if (!p) return; p.shut.forEach(f => { if (f.isConnected) { setOpen(f, false, false); if (p.marks && p.marks[shutKey(f)]) SHUT[shutKey(f)] = true; } }); window.scrollTo(0, p.y); } catch (e) {}
    });
  }

  // for the checks (examfold_test.js) and nothing else
  return {fold, reveal, key: KEY, map: SECTION_EXAM, deckExam, tabs: Object.keys(TABS), unassigned: () => JSON.parse(JSON.stringify(UNASSIGNED))};
})();
