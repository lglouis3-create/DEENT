/* ==========================================================================
   TOPIC HUB: one page to study one topic from start to end (course-level, 2026-11-25)
   --------------------------------------------------------------------------
   Why: a student who wants to learn one topic had to open Topics (questions), Guides (explanations), Tell apart,
   Reference, Diagrams and the Drug list, and find the right section in each. The hub shows the existing pieces of one
   topic in place, in this order: 1 Learn (the Guide section, the narrated walkthrough, the drawn figure, the Tell apart
   rows, the Reference tables, the drugs), 2 Check yourself (single-fact questions of the topic), 3 Challenge
   (exam-level questions of the topic). Nothing is rewritten: the pieces are copied from GUIDE_HTML, TELL_HTML,
   REFERENCE_HTML, DIA, WALK_SECTIONS and the drug lists. hub_data.js says which pieces belong to which topic.

   Where it lives: inside the Topics tab. "Study this topic" on a topic card replaces the list with the hub and a
   "All topics" button; the core's floating Back button brings the hub back after a quiz started from it, and after a
   jump to another tab made from it. show('topics') from the tab bar still draws the list. The site has no browser
   history entries, so Back is the visible button.
   The Exam chips and folders of Topics do not gate the hub: it reads QUESTIONS directly, not poolFor().

   Public API (window.HUB_UI):
     open(topicId, focus)  show the hub for a topic; focus is 'learn' | 'check' | 'challenge' or a piece key
                           ('guide', 'walk', 'fig', 'tell', 'ref', 'drugs'); returns false when the topic has no hub or an exam is running
     has(topicId)          true when the topic has a hub
     cardFor(topicId)      a small element (topic name, counts, a "Study this topic" button) or null; the button opens the hub
     level(q)              'challenge' or 'check' for a question (see LEVEL_TAGS)
     questions(topicId, level)  the topic's questions of one level ('check' or 'challenge'), or all when level is omitted
   Any element with data-hub-open="<topic id>" (and optionally data-hub-focus) opens the hub when pressed.

   Level rule (until an official one exists): a question is 'challenge' when its tags hold any of hard, case, two-facts,
   reasoning, reverse, exam-style, numbers; every other question is 'check'.
   Copies in the hub: the ids of the copied markup get the prefix "hub-" (so the Guides and Reference tabs keep unique ids);
   the slide links, table cards, figure controls and the walkthrough player work as in their own tabs.
   Storage: none. Reads QUESTIONS, TOPICS, DB.answers. Does nothing in the node checks' stub DOM.
   ========================================================================== */
const HUB_UI = (() => {
  if (typeof document === 'undefined' || !document.head || typeof renderTopics !== 'function' || typeof HUB_DATA === 'undefined' ||
      typeof drillList !== 'function' || typeof QUESTIONS === 'undefined' || typeof TOPICS === 'undefined') return null;

  const LEVEL_TAGS = ['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers'];
  const level = q => ((q && q.tags) || []).some(t => LEVEL_TAGS.includes(t)) ? 'challenge' : 'check';
  const esc2 = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const topicOf = id => TOPICS.find(t => t.id === id);
  const deckOf = id => (typeof TOPIC_DECKS !== 'undefined' ? TOPIC_DECKS : []).find(d => (d.topics || []).includes(id));
  const qsOf = (id, lv) => QUESTIONS.filter(q => q.topic === id && (!lv || level(q) === lv));
  const PROF = {Smith: 'Dr. Smith', Sikazwe: 'Dr. Sikazwe', Patel: 'Dr. Patel', Lam: 'Dr. Lam'};
  const examRunning = () => {
    try { if (typeof Q !== 'undefined' && Q && Q.examMode) return true; } catch (e) {}
    try { if (typeof EX !== 'undefined' && EX && EX.running && !EX.done) return true; } catch (e) {}
    return false;
  };
  const has = id => !!(HUB_DATA[id] && topicOf(id) && qsOf(id).length &&
    ['guide', 'walk', 'fig', 'tell', 'ref', 'drugs'].some(k => (HUB_DATA[id][k] || []).length));

  /* ---------------- the sources, parsed once ---------------- */
  let SRC = null;
  function sources() {
    if (SRC) return SRC;
    const mk = html => { const t = document.createElement('template'); t.innerHTML = html; return t.content; };
    const sect = frag => {
      const out = {};
      const kids = [...frag.children];
      kids.forEach((el, i) => {
        if (el.tagName !== 'H3' || !el.id) return;
        let html = '';
        for (let j = i + 1; j < kids.length && !/^H[23]$/.test(kids[j].tagName); j++) html += kids[j].outerHTML;
        out[el.id] = {title: el.textContent.trim(), html};
      });
      return out;
    };
    const g = {};
    if (typeof GUIDE_HTML !== 'undefined') mk(GUIDE_HTML).querySelectorAll('section.gobj[id]').forEach(s => { g[s.id] = s; });
    SRC = {guide: g, tell: typeof TELL_HTML !== 'undefined' ? sect(mk(TELL_HTML)) : {}, ref: typeof REFERENCE_HTML !== 'undefined' ? sect(mk(REFERENCE_HTML)) : {}};
    return SRC;
  }
  /* "tell-s3@1,4" = the section tell-s3, rows 1 and 4 (counted over all the section's table rows) */
  const spec = k => { const [id, r] = String(k).split('@'); return {id, rows: r ? r.split(',').map(Number) : null}; };
  function rowsOnly(html, rows) {
    if (!rows) return html;
    const t = document.createElement('template'); t.innerHTML = html;
    let i = 0;
    t.content.querySelectorAll('tbody tr').forEach(tr => { i++; if (!rows.includes(i)) tr.remove(); });
    t.content.querySelectorAll('table').forEach(tb => { if (!tb.querySelector('tbody tr')) tb.remove(); });
    return t.innerHTML;
  }
  const figs = html => (typeof refFigures === 'function' ? refFigures(html) : html);
  const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/\s+/g, ' ').trim();
  const dlOf = id => {
    for (const L of [typeof DRUGLIST !== 'undefined' ? DRUGLIST : null, typeof DRUGLIST_EYE !== 'undefined' ? DRUGLIST_EYE : null]) {
      const d = L && L.D && L.D.find(x => x.id === id); if (d) return d;
    }
    return null;
  };

  /* ---------------- one piece = one <details> ---------------- */
  const piece = (key, title, sub, body, open, secid) =>
    `<details class="hub-piece" data-piece="${key}"${open ? ' open' : ''}><summary><span class="hub-pt">${esc2(title)}</span>${sub ? `<small>${esc2(sub)}</small>` : ''}</summary><div class="hub-pb"${secid ? ` data-secid="${esc2(secid)}"` : ''}>${body}</div></details>`;

  function learnHTML(id) {
    const d = HUB_DATA[id], S = sources(); let first = true;
    const take = () => { const o = first; first = false; return o; };
    let h = '';
    (d.guide || []).forEach(gid => {
      const s = S.guide[gid]; if (!s) return;
      const head = s.querySelector(':scope > h3');
      const clone = s.cloneNode(true);
      const h3 = clone.querySelector(':scope > h3'); if (h3) h3.remove();
      // the guide section's own walkthrough bar, practice buttons and "On this page" row are drawn by their tabs, not copied
      clone.querySelectorAll('.wkbars,.g2nav').forEach(x => x.remove());
      h += piece('guide', 'Read: ' + (head ? plain(head.innerHTML) : gid), 'from the Guides', `<div class="hub-gobj">${figs(clone.outerHTML)}</div>`, take(), gid);
    });
    const ws = (d.walk || []).map(w => (typeof WALK_UI !== 'undefined' && WALK_UI && WALK_UI.BY) ? WALK_UI.BY[w] : null).filter(Boolean);
    if (ws.length) {
      h += `<div class="hub-walk" data-piece="walk"><div class="hub-wt">Listen to the walkthrough</div><div class="wkbars">${ws.map(w => {
        const at = WALK_UI.pos(w.id), min = Math.max(1, Math.round(w.parts.reduce((n, p) => n + p.text.split(/\s+/).filter(Boolean).length, 0) / 150));
        return `<div class="wkbar" data-wk="${esc2(w.id)}"><button type="button" class="btn ghost" data-wkopen="${esc2(w.id)}" aria-expanded="false">${at ? 'Resume walkthrough at part ' + (at + 1) : 'Listen: walkthrough'}</button>` +
          `<span class="wkmeta"><b>${esc2(w.title || '')}</b> · ${w.parts.length} parts · about ${min} min</span></div>`;
      }).join('')}</div></div>`;
      first = false;
    }
    (d.fig || []).forEach(k => {
      if (typeof DIA === 'undefined' || !DIA[k]) return;
      const nm = (typeof DIA_NAMES !== 'undefined' && DIA_NAMES[k]) || (DIA[k].match(/<text class="title"[^>]*>([^<]*)</) || [])[1] || k;
      h += piece('fig', 'Diagram: ' + nm, /data-anim/.test(DIA[k]) ? 'step through it' : '', `<div class="hub-fig">${DIA[k]}</div>`, take());
    });
    (d.tell || []).forEach(k => {
      const {id: sid, rows} = spec(k), s = S.tell[sid]; if (!s) return;
      h += piece('tell', 'Tell apart: ' + plain(s.title), rows ? 'the rows of this topic, from Tell apart' : 'from Tell apart', `<div class="hub-doc">${figs(rowsOnly(s.html, rows))}</div>`, take(), sid);
    });
    (d.ref || []).forEach(k => {
      const {id: sid, rows} = spec(k), s = S.ref[sid]; if (!s) return;
      h += piece('ref', 'Reference: ' + plain(s.title), rows ? 'the rows of this topic, from Reference' : 'from Reference', `<div class="hub-doc">${figs(rowsOnly(s.html, rows))}</div>`, take(), sid);
    });
    const dr = (d.drugs || []).map(dlOf).filter(Boolean);
    if (dr.length) {
      h += piece('drugs', 'Drugs of this topic (' + dr.length + ')', 'tap one to open it in the Drug list',
        `<div class="hub-drugs">${dr.map(x => `<button type="button" class="hub-drug" data-hub-drug="${esc2(x.id)}"><b>${esc2(x.name)}</b><small>${esc2([x.chartClass || x.cls, x.rx].filter(Boolean).join(' · '))}</small></button>`).join('')}</div>`, take());
    }
    return h || '<p class="hub-none">No reading is linked to this topic yet.</p>';
  }

  /* ---------------- the questions: counts and the last answer of each ---------------- */
  function tally(qs) {
    const last = new Map();
    try { (DB.answers || []).forEach(a => { if (a && a.qid) last.set(a.qid, a.result === 'correct'); }); } catch (e) {}
    let r = 0, w = 0;
    qs.forEach(q => { if (last.has(q.id)) { if (last.get(q.id)) r++; else w++; } });
    return {n: qs.length, r, w, done: r + w};
  }
  function qBlock(id, lv, title, text, btn) {
    const qs = qsOf(id, lv), t = tally(qs);
    return `<section class="hub-step" id="hub-${lv}" data-step="${lv}"><h3>${esc2(title)}</h3><p class="hub-lead">${esc2(text)}</p>` +
      (qs.length
        ? `<p class="hub-count"><b>${qs.length}</b> question${qs.length === 1 ? '' : 's'}` + (t.done ? ` · answered ${t.done} · <span class="hub-rt">${t.r} right</span> · <span class="hub-wt">${t.w} wrong</span>` : ' · not answered yet') + '</p>' +
          `<button type="button" class="btn" data-hub-start="${lv}">${esc2(btn)}</button>`
        : `<p class="hub-count">No ${lv === 'check' ? 'single-fact' : 'exam-level'} questions are marked for this topic yet.` +
          (lv === 'check' && qsOf(id, 'challenge').length ? ' Every question of this topic is exam-level: use the challenge set below.' : '') + '</p>') + '</section>';
  }

  /* ---------------- the page ---------------- */
  let CUR = null;          // the topic whose hub is drawn in Topics
  let TARGET = null;       // {id, focus}: draw this hub the next time Topics is drawn
  let PARKED = null;       // {entry, id}: a RET entry that returns to the hub
  const MEMO = {};         // open pieces per topic (page memory)

  function hubHTML(id) {
    const t = topicOf(id), dk = deckOf(id), n = qsOf(id).length;
    const prof = PROF[t.prof] || t.prof || '';
    return `<div class="hub" data-hub="${esc2(id)}">
      <button type="button" class="btn ghost hub-back" data-hub-back>← All topics</button>
      <h2 class="hub-title">${esc2(t.name)}</h2>
      <p class="hub-meta">${prof ? `<span>${esc2(prof)}</span>` : ''}${t.cite ? `<span>${esc2(t.cite)}</span>` : ''}${dk && dk.exam ? `<span class="hub-exam">Exam ${dk.exam}</span>` : ''}<span>${n} question${n === 1 ? '' : 's'}</span></p>
      <div class="hub-steps" role="group" aria-label="Steps of this topic">
        <button type="button" data-hub-go="learn"><b>1</b> Learn</button>
        <button type="button" data-hub-go="check"><b>2</b> Check yourself</button>
        <button type="button" data-hub-go="challenge"><b>3</b> Challenge</button>
      </div>
      <section class="hub-step" id="hub-learn" data-step="learn"><h3>1. Learn</h3>${learnHTML(id)}</section>
      ${qBlock(id, 'check', '2. Check yourself', 'Single-fact questions: one idea each. Answer them to see what you remember from step 1.', 'Start easy questions')}
      ${qBlock(id, 'challenge', '3. Challenge', 'Exam-level questions: cases, two facts together, reasons and numbers.', 'Start challenge questions')}
    </div>`;
  }

  /* ids of the copied markup: prefix "hub-" (markers keep theirs: svgid_ui.js gives each figure its own) */
  function prefixIds(root) {
    const els = [...root.querySelectorAll('.hub-pb [id]')].filter(e => !/^marker$/i.test(e.tagName));
    if (!els.length) return;
    const map = new Map(els.map(e => [e.id, 'hub-' + e.id]));
    els.forEach(e => { e.id = map.get(e.id); });
    const fix = v => v.replace(/url\(#([^)]+)\)/g, (m, i) => map.has(i) ? `url(#${map.get(i)})` : m).replace(/^#(.+)$/, (m, i) => map.has(i) ? '#' + map.get(i) : m);
    root.querySelectorAll('.hub-pb *').forEach(e => {
      [...e.attributes].forEach(a => {
        if (/^(href|xlink:href|for|aria-controls|aria-labelledby|aria-describedby|clip-path|mask|filter|fill|stroke)$/.test(a.name)) {
          const v = a.name === 'for' || /^aria-/.test(a.name) ? a.value.split(/\s+/).map(x => map.get(x) || x).join(' ') : fix(a.value);
          if (v !== a.value) e.setAttribute(a.name, v);
        }
      });
    });
  }

  function after(root) {
    prefixIds(root);
    try { if (typeof boxTables === 'function') boxTables(root); } catch (e) {}
    try { root.querySelectorAll('.hub-doc').forEach(d => window.TABLES_UI && window.TABLES_UI.cards(d)); } catch (e) {}
    try { if (typeof armFigs === 'function') armFigs(root); } catch (e) {}
    try { if (window.CLEAN && window.CLEAN.run) window.CLEAN.run(root); } catch (e) {}
    try { if (typeof SLIDE_UI !== 'undefined' && SLIDE_UI && SLIDE_UI.relink) SLIDE_UI.relink(); } catch (e) {}
    try { if (typeof WALK_UI !== 'undefined' && WALK_UI) (HUB_DATA[CUR].walk || []).forEach(w => { for (let i = 0; i < 3 && document.querySelector(`.wkpanel[data-wkp="${w}"]`); i++) WALK_UI.close(w); }); } catch (e) {}
  }

  function draw(id, focus) {
    const el = document.getElementById('v-topics'); if (!el) return;
    CUR = id;
    el.innerHTML = hubHTML(id);
    const root = el.querySelector('.hub');
    after(root);
    const m = MEMO[id];
    if (m) root.querySelectorAll('details.hub-piece').forEach((d, i) => { if (m[i] !== undefined) d.open = m[i]; });
    root.querySelectorAll('details.hub-piece').forEach((d, i) => d.addEventListener('toggle', () => {
      (MEMO[id] = MEMO[id] || {})[i] = d.open;
      try { window.dispatchEvent(new Event('resize')); } catch (e) {}
    }));
    if (focus) land(focus);
  }
  function land(focus) {
    const root = document.querySelector('#v-topics .hub'); if (!root) return;
    let t = null;
    if (focus === 'learn' || focus === 'check' || focus === 'challenge') t = root.querySelector('#hub-' + focus);
    else { t = root.querySelector(`[data-piece="${focus}"]`); if (t && t.tagName === 'DETAILS') t.open = true; }
    if (t && typeof scrollToEl === 'function') scrollToEl(t);
  }

  function open(id, focus) {
    if (!has(id) || examRunning()) return false;
    if (VIEW !== 'topics') RET.push({view: VIEW, y: window.scrollY});
    TARGET = {id, focus: focus || null}; PARKED = null;
    show('topics');
    if (typeof backBtn === 'function') backBtn();
    return true;
  }
  function toList() {
    const id = CUR; CUR = null; TARGET = null; PARKED = null;
    try { if (typeof WALK_UI !== 'undefined' && WALK_UI) WALK_UI.stop(); } catch (e) {}
    show('topics');
    const b = id && document.querySelector(`#v-topics .subrow button[data-t="${id}"]`);
    const card = b && b.closest('details.topic');
    if (card) { let p = card.parentElement; while (p && p.id !== 'v-topics') { if (p.tagName === 'DETAILS') p.open = true; p = p.parentElement; } card.open = true; if (typeof scrollToEl === 'function') scrollToEl(card); }
  }
  function startSet(id, lv) {
    if (examRunning()) return;
    const qs = qsOf(id, lv); if (!qs.length) return;
    const entry = {view: 'topics', y: window.scrollY};
    RET.push(entry); PARKED = {entry, id};
    const t = topicOf(id);
    drillList(qs, t.name + (lv === 'check' ? ': easy questions' : ': challenge questions'));
    if (typeof backBtn === 'function') backBtn();
  }
  function leaveFor(fn) {       // an action of the hub that moves to another tab: Back returns to the hub
    const n = RET.length, id = CUR;
    fn();
    if (RET.length > n && id) PARKED = {entry: RET[RET.length - 1], id};
  }

  /* ---------------- Topics: wrap renderTopics ---------------- */
  const CSS = `
.hub{max-width:900px}
.hub-back{margin:0 0 8px;min-height:44px}
.hub-title{margin:4px 0 6px;font-size:22px;line-height:1.25;overflow-wrap:anywhere}
.hub-meta{display:flex;flex-wrap:wrap;gap:4px 8px;margin:0 0 12px;font-size:13.5px;color:var(--text-dim)}
.hub-meta span:not(:last-child)::after{content:' \\00b7';margin-left:8px}
.hub-meta .hub-exam{font-weight:600;color:var(--accent)}
.hub-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0 0 16px}
.hub-steps button{min-height:48px;padding:6px 8px;font:inherit;font-size:14.5px;color:var(--text);background:var(--paper);border:1px solid var(--line);border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px;text-align:center}
.hub-steps button b{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;flex:none;border-radius:50%;background:var(--accent);color:#fff;font-size:13px}
.hub-steps button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.hub-step{margin:0 0 22px;scroll-margin-top:110px}
.hub-step>h3{margin:0 0 8px;font-size:18px}
.hub-lead{margin:0 0 8px;color:var(--text-dim);font-size:14.5px}
.hub-count{margin:0 0 10px;font-size:14.5px}
.hub-rt{color:var(--ok,#2e7d5b)}.hub-wt{color:#c0392b}
.hub-none{color:var(--text-dim)}
details.hub-piece{border:1px solid var(--line);border-radius:10px;background:var(--paper);margin:0 0 10px;min-width:0}
details.hub-piece>summary{cursor:pointer;min-height:48px;padding:8px 12px;display:flex;flex-wrap:wrap;align-items:center;gap:2px 10px;list-style:none;font-weight:600;font-size:15px}
details.hub-piece>summary::-webkit-details-marker{display:none}
details.hub-piece>summary::before{content:'\\25B8';color:var(--text-dim);font-size:13px;transition:transform .15s}
details.hub-piece[open]>summary::before{transform:rotate(90deg)}
details.hub-piece>summary .hub-pt{flex:1 1 12em;min-width:0;overflow-wrap:anywhere}
details.hub-piece>summary small{flex:1 1 100%;margin-left:23px;font-weight:400;color:var(--text-dim);font-size:12.5px}
.hub-pb{padding:2px 12px 12px;min-width:0;overflow-wrap:anywhere}
.hub-pb .gobj{margin:0;padding:0;border:0}
.hub-pb figure{max-width:100%}
.hub-pb img,.hub-pb svg{max-width:100%;height:auto}
.hub-walk{border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:8px 12px 4px;margin:0 0 10px}
.hub-walk .hub-wt{font-weight:600;font-size:15px;margin:0 0 4px}
.hub-walk .wkbars{margin:0 0 6px}
.hub-drugs{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}
.hub-drug{display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:48px;padding:8px 10px;font:inherit;text-align:left;color:var(--text);background:var(--surface,#fff);border:1px solid var(--line);border-radius:8px;cursor:pointer}
.hub-drug small{color:var(--text-dim);font-size:12.5px}
.hub-go{flex:1 1 100%;order:9;display:flex;margin:6px 0 0 23px}
.hub-go button{min-height:44px;padding:6px 16px;font:inherit;font-size:14.5px;font-weight:600;color:#fff;background:var(--accent);border:0;border-radius:8px;cursor:pointer}
.hub-card{border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:10px 12px;display:flex;flex-direction:column;gap:6px;min-width:0}
.hub-card b{overflow-wrap:anywhere}.hub-card small{color:var(--text-dim)}
.hub-card button{align-self:flex-start;min-height:44px;padding:6px 16px;font:inherit;font-weight:600;color:#fff;background:var(--accent);border:0;border-radius:8px;cursor:pointer}
@media (max-width:420px){.hub-steps button{flex-direction:column;gap:2px;font-size:13px}}`;
  const st = document.createElement('style'); st.id = 'hubuicss'; st.textContent = CSS; document.head.appendChild(st);

  function inject() {
    const root = document.getElementById('v-topics'); if (!root) return;
    root.querySelectorAll('details.topic').forEach(d => {
      const b0 = d.querySelector('.subrow button[data-t]'); if (!b0 || !b0.dataset.t) return;
      const sum = d.querySelector(':scope > summary');
      if (!sum || sum.querySelector('.hub-go') || !has(b0.dataset.t)) return;
      sum.insertAdjacentHTML('beforeend', `<span class="hub-go"><button type="button" data-hub-open="${esc2(b0.dataset.t)}">Study this topic</button></span>`);
    });
  }
  const ot = renderTopics;
  renderTopics = function () {
    const r = ot.apply(this, arguments);
    try {
      let want = TARGET; TARGET = null;
      if (!want && PARKED && !RET.includes(PARKED.entry)) { want = {id: PARKED.id, focus: null}; PARKED = null; }
      if (want && has(want.id)) draw(want.id, want.focus);
      else { CUR = null; inject(); }
    } catch (e) { console.error('hub_ui: the hub could not be drawn; the topic list is unaffected.', e); }
    return r;
  };

  document.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target : null; if (!t) return;
    const o = t.closest('[data-hub-open]');
    if (o) { e.preventDefault(); e.stopPropagation(); open(o.dataset.hubOpen, o.dataset.hubFocus || null); return; }
    const hub = t.closest('.hub'); if (!hub) return;
    const g = t.closest('[data-hub-go]'); if (g) { land(g.dataset.hubGo); return; }
    if (t.closest('[data-hub-back]')) { toList(); return; }
    const s = t.closest('[data-hub-start]'); if (s) { startSet(hub.dataset.hub, s.dataset.hubStart); return; }
    const dr = t.closest('[data-hub-drug]');
    if (dr) { leaveFor(() => { try { if (typeof DRUGLIST_UI !== 'undefined' && DRUGLIST_UI && DRUGLIST_UI.openDrug) { RET.push({view: 'topics', y: window.scrollY}); show('drugs'); DRUGLIST_UI.openDrug(dr.dataset.hubDrug); if (typeof backBtn === 'function') backBtn(); } } catch (err) { console.error('hub_ui: the drug could not be opened', err); } }); return; }
    // a "Practice these" button copied from a guide section starts its drill and returns to the hub
    const qb = t.closest('[data-qids]');
    if (qb) {
      e.stopPropagation(); e.preventDefault();
      if (examRunning() || typeof GUIDE_DRILL_UI === 'undefined' || !GUIDE_DRILL_UI) return;
      const qs = GUIDE_DRILL_UI.pool((qb.getAttribute('data-qids') || '').split(/\s+/).filter(Boolean)); if (!qs.length) return;
      const entry = {view: 'topics', y: window.scrollY}; RET.push(entry); PARKED = {entry, id: hub.dataset.hub};
      drillList(qs, (qb.getAttribute('data-qwho') || 'Dr. Sikazwe') + ': ' + (qb.getAttribute('data-qlabel') || ''));
      if (typeof backBtn === 'function') backBtn();
    }
  }, true);

  function cardFor(id) {
    if (!has(id)) return null;
    const t = topicOf(id), n = qsOf(id).length, c = document.createElement('div');
    c.className = 'hub-card'; c.dataset.hubCard = id;
    c.innerHTML = `<b>${esc2(t.name)}</b><small>${esc2([PROF[t.prof] || t.prof, n + ' questions'].filter(Boolean).join(' · '))}</small><button type="button" data-hub-open="${esc2(id)}">Study this topic</button>`;
    return c;
  }
  const api = {open, has, cardFor, level, questions: (id, lv) => qsOf(id, lv), LEVEL_TAGS};
  window.HUB_UI = api;
  return api;
})();
