/* ==========================================================================
   START SCREEN AND SHORTER TAB STRIP
   (course-level; the request: a new student does not know where to go among 14 tabs and
   switches between tabs to study one topic)
   ==========================================================================
   1. Start screen, at the top of the Topics tab, above the topic list (which stays as it was):
        - "Where do you want to start?": one card per professor of the active exam (name and
          subject taken from TOPICS and TOPIC_DECKS), and one small button for each professor of an
          earlier exam;
        - a tap on a professor lists that professor's topics (every exam, each with an exam tag,
          grouped by lecture deck, the topics of the active exam first and marked), each with the
          number of questions and a bar of what has been answered, right and wrong;
        - a tap on a topic calls HUB_UI.open(topicId) when a topic hub exists, otherwise the core's
          startQuiz(topicId, null);
        - "Next best thing to review": the topic where the most answered questions are not yet solid
          (the core's rule, views.js renderGaps: the last three answers are not all solid).
      The Start screen does not read the Professor chips of the topic list (FILTER): its counts and its
      topic lists cover the whole bank, and a topic is opened with those chips set aside for the call,
      then put back. Nothing on the Topics tab is removed or hidden. The professor chosen is kept for
      this visit only. Nothing is written to storage and no progress is read or changed beyond reading.
   2. Tab strip: the strip shows Start (the Topics tab), Quiz, Exam sim, Drug list, Guides and More. The
      other tabs sit in the More menu in two groups ("Study material", "Tools"), each with a line saying
      what it holds. The buttons are the same elements as before (same data-v, same handlers); they are
      moved into the menu, so show('<view>') and every link that calls it work as before. The tab of the
      view shown is marked: More is highlighted and names the view. wide_ui.js pins and hides the strip as
      before (the menu closes when the strip hides or the page scrolls). A tab this file does not know
      stays in the strip. */
(function startUi(){
  'use strict';
  if (typeof document === 'undefined' || !document.createElement || typeof show !== 'function' || typeof renderTopics !== 'function') return;
  const nav = document.getElementById('nav');
  if (!nav || !nav.querySelector) return;

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

  const CSS = `
/* ---- tab strip and More menu ---- */
#nav #xmore{display:inline-flex;align-items:center;gap:6px;min-height:44px;flex:0 0 auto}
#nav #xmore .xm-cur{font-size:12px;color:#c9d6e6;max-width:8.5em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#nav #xmore[aria-selected="true"] .xm-cur{color:#fff}
#nav #xmore .xm-car{font-size:11px;transition:transform .15s}
#nav #xmore[aria-expanded="true"] .xm-car{transform:rotate(180deg)}
@media (max-width:480px){#nav button{padding-left:8px;padding-right:8px;font-size:13.5px}#nav #xmore .xm-cur{max-width:5.5em}}
#xmenu{display:none;position:fixed;z-index:60;background:var(--paper,#fff);color:var(--text,#1c2733);border:1px solid var(--line,#d5dde6);
  border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.22);padding:6px 6px 8px;overflow-y:auto;overscroll-behavior:contain;box-sizing:border-box}
#xmenu.open{display:block}
#xmenu .xm-h{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim,#5a6877);padding:10px 10px 4px}
#nav #xmenu button{display:flex;flex-direction:column;align-items:flex-start;gap:1px;width:100%;min-height:48px;text-align:left;white-space:normal;
  background:none;border:0;border-radius:8px;padding:7px 10px;color:var(--text,#1c2733);font-size:15px;border-bottom:0}
#nav #xmenu button:hover{background:var(--line-soft,#eef2f6)}
#nav #xmenu button .xm-l{font-weight:600}
#nav #xmenu button .xm-d{font-size:13px;color:var(--text-dim,#5a6877);font-weight:400;line-height:1.3}
#nav #xmenu button[aria-selected="true"]{background:var(--accent-soft,#e4edf9);color:var(--text,#1c2733);box-shadow:inset 3px 0 0 var(--accent,#245aa8)}
#nav #xmenu button:focus-visible,#nav #xmore:focus-visible{outline:3px solid #6FA0E8;outline-offset:-3px}
/* ---- Start screen ---- */
#v-topics #startflow{margin:10px 0 18px}
#v-topics #startflow h3{margin:0 0 8px;font-size:19px}
#v-topics .sf-profs{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}
#v-topics .sf-prof{display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;min-height:44px;font:inherit;color:var(--text);
  background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:12px 14px;cursor:pointer}
#v-topics .sf-prof:hover{border-color:var(--ink)}
#v-topics .sf-prof[aria-pressed="true"]{border-color:var(--accent,#245aa8);box-shadow:0 0 0 2px var(--accent,#245aa8) inset;background:var(--accent-soft,#eef4fb)}
#v-topics .sf-prof b{font-size:17px}
#v-topics .sf-prof .sf-subj{font-size:13.5px;color:var(--text-dim);line-height:1.35}
#v-topics .sf-prof .sf-meta{font-size:12.5px;color:var(--text-dim)}
#v-topics .sf-earlier{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:10px 0 0;font-size:13.5px;color:var(--text-dim)}
#v-topics .sf-earlier button{min-height:44px;padding:0 14px;font:inherit;font-size:14px;color:var(--text);background:var(--paper);border:1px solid var(--line);border-radius:99px;cursor:pointer}
#v-topics .sf-earlier button[aria-pressed="true"]{border-color:var(--accent,#245aa8);background:var(--accent-soft,#eef4fb);font-weight:600}
#v-topics .sf-steps{margin:4px 0 10px;font-size:14px;color:var(--text-dim)}
#v-topics .sf-exams{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 10px;font-size:13.5px;color:var(--text-dim)}
#v-topics .sf-exams button{min-height:44px;padding:0 14px;font:inherit;font-size:14px;color:var(--text);background:var(--paper);border:1px solid var(--line);border-radius:99px;cursor:pointer}
#v-topics .sf-exams button[aria-pressed="true"]{border-color:var(--accent,#245aa8);background:var(--accent-soft,#eef4fb);font-weight:600}
#startflow.sf-sel .sf-prof .sf-subj,#startflow.sf-sel .sf-prof .sf-meta{display:none}
#startflow.sf-sel .sf-profs{grid-template-columns:repeat(auto-fit,minmax(104px,1fr))}
#v-topics .sf-hint{margin:10px 0 0;font-size:14px;color:var(--text-dim)}
#v-topics .sf-steps b{color:var(--text)}
#v-topics .sf-list{margin:14px 0 0}
#v-topics .sf-list h4{margin:0 0 4px;font-size:16px}
#v-topics .sf-deck{margin:14px 0 6px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--text-dim)}
#v-topics .sf-topic{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 10px;align-items:center;width:100%;min-height:52px;text-align:left;font:inherit;
  color:var(--text);background:var(--paper);border:1px solid var(--line);border-left-width:4px;border-radius:10px;padding:8px 12px;margin:0 0 6px;cursor:pointer}
#v-topics .sf-topic:hover{border-color:var(--ink)}
#v-topics .sf-topic.sf-act{border-left-color:var(--accent,#245aa8)}
#v-topics .sf-topic .sf-tn{font-weight:600;font-size:15px;min-width:0;overflow-wrap:anywhere}
#v-topics .sf-topic .sf-tag{font-size:11.5px;font-weight:700;padding:1px 8px;border-radius:99px;border:1px solid var(--line);color:var(--text-dim);white-space:nowrap}
#v-topics .sf-topic.sf-act .sf-tag{background:var(--accent,#245aa8);border-color:var(--accent,#245aa8);color:#fff}
#v-topics .sf-topic .sf-tl{grid-column:1 / -1;display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--text-dim)}
#v-topics .sf-bar{display:flex;flex:0 0 84px;height:7px;border-radius:4px;background:var(--line-soft,#e6ebf1);overflow:hidden}
#v-topics .sf-bar i{display:block;height:100%}
#v-topics .sf-bar .r{background:var(--ok,#2e7d5b)}#v-topics .sf-bar .w{background:#c0392b}#v-topics .sf-bar .a{background:#8a97a8}
#v-topics .sf-next{margin:0 0 14px;background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:12px 14px}
#v-topics .sf-next h4{margin:0 0 4px;font-size:15px}
#v-topics .sf-next p{margin:0 0 8px;font-size:14px}
#v-topics .sf-next button{min-height:44px;padding:0 16px;font:inherit;font-weight:600;border-radius:10px;border:1px solid var(--ink);background:var(--ink);color:#fff;cursor:pointer}
#v-topics .sf-next .sf-empty{color:var(--text-dim);margin:0}`;
  const addCss = () => {
    if (document.getElementById('startcss')) return;
    const s = document.createElement('style'); s.id = 'startcss'; s.textContent = CSS; document.head.appendChild(s);
  };
  addCss();

  /* =============================== 1. the Start screen =============================== */
  const decks = () => (typeof TOPIC_DECKS !== 'undefined' && Array.isArray(TOPIC_DECKS)) ? TOPIC_DECKS : [];
  const deckOf = t => decks().find(d => d.id === t.deck) || null;
  const examNo = t => { const d = deckOf(t); return d && d.exam != null ? d.exam : null; };
  const activeNo = () => {
    // a chip that sets FILTER.exam, if one is ever added, wins; otherwise the exam the course is set to
    try { if (typeof FILTER === 'object' && FILTER && FILTER.exam && FILTER.exam !== 'all') { const n = parseInt(String(FILTER.exam).replace(/\D/g, ''), 10); if (n) return n; } } catch (e) {}
    try { const n = parseInt(String(EXAM.id).replace(/\D/g, ''), 10); if (n) return n; } catch (e) {}
    return null;
  };
  const dr = p => 'Dr. ' + p;
  const deckName = d => String(d.name).replace(/\s*\((?:Dr\.[^)]*)\)\s*$/, '').replace(/\s*\(Dr\. [^)]*\)/, '');

  // questions per topic, whole bank (the Professor chips of the topic list are not read)
  function byTopic() {
    const m = {};
    QUESTIONS.forEach(q => { (m[q.topic] = m[q.topic] || []).push(q); });
    return m;
  }
  function tallies() {
    const last = new Map(), asked = new Set();
    try { (DB.answers || []).forEach(a => { if (a && a.qid) last.set(a.qid, a.result === 'correct'); }); } catch (e) {}
    try { Object.values(DB.concepts || {}).forEach(s => { (s && s.asked || []).forEach(id => asked.add(id)); }); } catch (e) {}
    return pool => {
      let r = 0, w = 0, a = 0;
      pool.forEach(q => { if (last.has(q.id)) { if (last.get(q.id)) r++; else w++; } else if (asked.has(q.id)) a++; });
      return {n: pool.length, r, w, a, done: r + w + a};
    };
  }
  const barHtml = t => { const p = x => (t.n ? 100 * x / t.n : 0).toFixed(2) + '%';
    return `<span class="sf-bar" role="img" aria-label="${t.done} of ${t.n} answered: ${t.r} right, ${t.w} wrong"><i class="r" style="width:${p(t.r)}"></i><i class="w" style="width:${p(t.w)}"></i><i class="a" style="width:${p(t.a)}"></i></span>`; };

  // professors with topics, in the course's order; the subject line from the decks of the active exam (or all)
  function professors(bt) {
    const act = curExam();
    const order = (COURSE.professors || []).slice();
    TOPICS.forEach(t => { if (t.prof && !order.includes(t.prof)) order.push(t.prof); });
    return order.map(p => {
      const ts = TOPICS.filter(t => t.prof === p && (bt[t.id] || []).length);
      if (!ts.length) return null;
      const core = ts.filter(t => !t.optional);
      const onExam = act == null ? core.length > 0 : core.some(t => examNo(t) === act);
      const dk = [], seen = new Set();
      (onExam && act != null ? core.filter(t => examNo(t) === act) : core).forEach(t => { const d = deckOf(t); if (d && !seen.has(d.id)) { seen.add(d.id); dk.push(d); } });
      let subject = '';
      if (dk.length === 1) subject = deckName(dk[0]);
      else if (dk.length > 1) subject = dk.map(d => deckName(d).split(':')[0]).join(', ');
      const exams = [...new Set(core.map(examNo).filter(n => n != null))].sort((a, b) => a - b);
      return {name: p, ts, onExam, subject, exams, nq: core.reduce((s, t) => s + bt[t.id].length, 0), core};
    }).filter(Boolean);
  }

  let SEL = null;                       // the professor whose topics are listed (this visit only)
  let EXN;                              // the exam chosen with the "Study for" chips (this visit only): undefined = the active exam, 0 = all exams
  const curExam = () => (EXN === undefined ? activeNo() : (EXN === 0 ? null : EXN));
  function examList(bt) {
    const set = new Set();
    TOPICS.forEach(t => { if (!t.optional && (bt[t.id] || []).length) { const n = examNo(t); if (n != null) set.add(n); } });
    return [...set].sort((a, b) => b - a);
  }

  function topicList(pf, bt, tally) {
    const act = curExam(), ref = act == null ? activeNo() : act;      // with all exams listed, the active exam's topics still come first
    const rank = t => (t.optional ? 2 : examNo(t) === ref ? 0 : 1);
    const groups = [];
    pf.ts.filter(t => act == null || (!t.optional && examNo(t) === act)).forEach(t => {
      const key = t.optional ? '~optional' : (t.deck || '~');
      let g = groups.find(x => x.key === key);
      if (!g) { const d = deckOf(t); g = {key, d, rank: rank(t), ts: []}; groups.push(g); }
      g.ts.push(t);
    });
    groups.sort((a, b) => a.rank - b.rank);        // stable: deck order inside a rank
    const row = t => {
      const tl = tally(bt[t.id]), isAct = !t.optional && examNo(t) === ref;
      const en = examNo(t);
      const tag = t.optional ? 'Optional' : (en != null ? 'Exam ' + en : '');
      return `<button type="button" class="sf-topic${isAct ? ' sf-act' : ''}" data-sf-topic="${esc(t.id)}">
        <span class="sf-tn">${esc(t.name)}</span>${tag ? `<span class="sf-tag">${esc(tag)}</span>` : '<span></span>'}
        <span class="sf-tl">${barHtml(tl)}<span>${bt[t.id].length} questions${tl.done ? ` · ${tl.done} answered, ${tl.r} right, ${tl.w} wrong` : ' · not started'}</span></span></button>`;
    };
    return `<div class="sf-list" id="sflist"><h4>${esc(dr(pf.name))}: pick a topic</h4>${groups.map(g =>
      `<p class="sf-deck">${g.key === '~optional' ? 'Optional practice, outside the exams' : esc(g.d ? deckName(g.d) : 'Other topics')}</p>${g.ts.map(row).join('')}`).join('')}</div>`;
  }

  // the topic with the most answered questions that are not yet solid (the rule of Weak spots)
  function nextBest(bt) {
    let ans = [];
    try { ans = DB.answers || []; } catch (e) {}
    if (!ans.length) return null;
    const recent = {};
    ans.forEach(e => (recent[e.qid] = recent[e.qid] || []).push(e));
    const solid = typeof solidEntry === 'function' ? solidEntry : (e => e.result === 'correct' && e.conf !== 'shaky');
    let req = QUESTIONS; try { req = requiredQs(); } catch (e) {}
    const per = {};
    req.forEach(q => {
      const r = (recent[q.id] || []).slice(-3); if (!r.length) return;
      const s = r.filter(solid).length / r.length; if (s >= 1) return;
      const A = per[q.topic] = per[q.topic] || {qs: [], gap: 0, concepts: new Set()};
      A.qs.push(q); A.gap += 1 - s; A.concepts.add(q.concept);
    });
    const best = Object.entries(per).sort((a, b) => b[1].gap - a[1].gap)[0];
    if (!best) return {none: true};
    const t = TOPICS.find(x => x.id === best[0]);
    return {topic: t, name: t ? t.name : best[0], qs: best[1].qs, concepts: best[1].concepts.size};
  }

  function openTopic(id) {
    const hub = (typeof window !== 'undefined' && window.HUB_UI !== undefined) ? window.HUB_UI : (typeof HUB_UI !== 'undefined' ? HUB_UI : null);
    if (hub && typeof hub.open === 'function') return hub.open(id);
    // the professor and format chips of the topic list stay as the student left them; they are set aside for this call
    const saved = {}; let f = null;
    try { f = FILTER; ['prof', 'tier', 'tag'].forEach(k => { saved[k] = f[k]; f[k] = 'all'; }); } catch (e) { f = null; }
    try { startQuiz(id, null); }
    finally { if (f) Object.keys(saved).forEach(k => { f[k] = saved[k]; }); }
  }

  function html() {
    const bt = byTopic(), tally = tallies(), profs = professors(bt);
    if (!profs.length) return '';
    const primary = profs.filter(p => p.onExam);
    if (SEL && !primary.some(p => p.name === SEL)) SEL = null;
    const card = p => {
      const tl = tally([].concat(...p.core.map(t => bt[t.id])));
      return `<button type="button" class="sf-prof" data-sf-prof="${esc(p.name)}" aria-pressed="${SEL === p.name}">
        <b>${esc(dr(p.name))}</b><span class="sf-subj">${esc(p.subject)}</span>
        <span class="sf-meta">${p.core.length} topics · ${p.nq} questions${tl.done ? ` · ${tl.done} answered` : ''}</span></button>`;
    };
    const cur = SEL && primary.find(p => p.name === SEL);
    const nb = nextBest(bt);
    const nbHtml = !nb || nb.none ? '' : `<div class="sf-next" id="sfnext"><h4>Next best thing to review</h4>
        <p><b>${esc(nb.name)}</b><br>${nb.qs.length} question${nb.qs.length === 1 ? '' : 's'} on ${nb.concepts} concept${nb.concepts === 1 ? '' : 's'} you missed or were unsure about.</p>
        <button type="button" data-sf-review="1">Review these ${nb.qs.length}</button></div>`;
    const exams = examList(bt), ce = curExam();
    const chips = exams.length > 1 ? `<div class="sf-exams" role="group" aria-label="Study for">
        <span>Study for</span>${exams.map(n => `<button type="button" data-sf-exam="${n}" aria-pressed="${ce === n}">Exam ${n}</button>`).join('')}
        <button type="button" data-sf-exam="0" aria-pressed="${ce == null}">All exams</button></div>` : '';
    return `<section id="startflow" class="${cur ? 'sf-sel' : ''}" aria-label="Where to start">
      ${nbHtml}
      <h3>Where do you want to start?</h3>
      <p class="sf-steps">Pick a professor, then a topic. Each topic has three steps: <b>learn</b> it, <b>check yourself</b>, then <b>challenge</b> yourself.</p>
      ${chips}
      <div class="sf-profs">${primary.map(card).join('')}</div>
      ${cur ? topicList(cur, bt, tally) : (primary.length ? `<p class="sf-hint">Tap a professor to see the topics.</p>` : '')}
    </section>`;
  }

  let LAST_NB = null;
  function paint() {
    const root = document.getElementById('v-topics'); if (!root) return;
    const old = root.querySelector('#startflow'); if (old) old.remove();
    const h = html(); if (!h) return;
    const bt = byTopic(); LAST_NB = nextBest(bt);
    const h2 = root.querySelector(':scope > h2');
    const tmp = document.createElement('div'); tmp.innerHTML = h;
    const el = tmp.firstElementChild;
    if (h2) h2.insertAdjacentElement('afterend', el); else root.insertBefore(el, root.firstChild);
    // the four quick routes of the core sit right under this block as the second choice, not as a second "Start here"
    const sh = root.querySelector('#startHere');
    if (sh) { el.insertAdjacentElement('afterend', sh); const hd = sh.querySelector('.starthead'); if (hd) hd.textContent = 'Or go straight to'; }
  }
  document.addEventListener('click', ev => {
    const t = ev.target && ev.target.closest ? ev.target.closest('#startflow') : null; if (!t) return;
    const eb = ev.target.closest('[data-sf-exam]');
    if (eb) { EXN = +eb.dataset.sfExam; paint(); const k = document.querySelector(`#startflow [data-sf-exam="${eb.dataset.sfExam}"]`); if (k && k.focus) k.focus({preventScroll: true}); return; }
    const pb = ev.target.closest('[data-sf-prof]');
    if (pb) { SEL = SEL === pb.dataset.sfProf ? null : pb.dataset.sfProf; paint(); const l = document.getElementById('sflist');
      const keep = document.querySelector(`#startflow [data-sf-prof="${CSS_ESC(SEL || pb.dataset.sfProf)}"]`); if (keep && keep.focus) keep.focus({preventScroll: true});
      if (l && l.scrollIntoView && SEL) { try { l.scrollIntoView({block: 'nearest'}); } catch (e) {} } return; }
    const tb = ev.target.closest('[data-sf-topic]');
    if (tb) { openTopic(tb.dataset.sfTopic); return; }
    if (ev.target.closest('[data-sf-review]') && LAST_NB && LAST_NB.qs && typeof drillList === 'function') drillList(LAST_NB.qs, LAST_NB.name);
  });
  const CSS_ESC = s => (window.CSS && window.CSS.escape) ? window.CSS.escape(s) : String(s).replace(/["\\]/g, '\\$&');

  const ort = renderTopics;
  renderTopics = function () {
    const r = ort.apply(this, arguments);
    try { paint(); } catch (e) { console.error('start_ui: Start screen', e); }
    return r;
  };

  /* =============================== 2. the tab strip =============================== */
  const GROUPS = [
    ['Study material', [
      ['dz', 'Diseases', 'Condition cards: steps, drugs and what to tell the patient'],
      ['atlas', null, 'Drug structures, board by board'],
      ['diagrams', null, 'Step-through drawings of how things work'],
      ['tell', null, 'Pairs of drugs or diseases that get mixed up'],
      ['ref', null, 'Tables and facts to look up'],
      ['gloss', null, 'Plain-language meanings of the terms']]],
    ['Tools', [
      ['gaps', null, 'What you missed and what to read next'],
      ['ftu', null, 'Practice fingertip-unit amounts for creams'],
      ['settings', null, 'Display options, your history and your backup']]],
  ];
  let more = null, menu = null, OPENED = 0;
  const btnOf = v => nav.querySelector(`button[data-v="${v}"]`);

  function build() {
    if (more) return;
    const inMenu = [];
    GROUPS.forEach(([, items]) => items.forEach(([v]) => { if (btnOf(v)) inMenu.push(v); }));
    if (!inMenu.length) return;
    const tb = btnOf('topics'); if (tb && tb.textContent.trim() === 'Topics') tb.textContent = 'Start';
    more = document.createElement('button'); more.type = 'button'; more.id = 'xmore';
    more.setAttribute('aria-haspopup', 'true'); more.setAttribute('aria-expanded', 'false'); more.setAttribute('aria-controls', 'xmenu');
    more.setAttribute('aria-selected', 'false');
    more.innerHTML = '<span class="xm-n">More</span><span class="xm-cur" hidden></span><span class="xm-car" aria-hidden="true">\u25BE</span>';
    menu = document.createElement('div'); menu.id = 'xmenu'; menu.setAttribute('aria-label', 'More tabs');
    GROUPS.forEach(([title, items], gi) => {
      const here = items.filter(([v]) => btnOf(v)); if (!here.length) return;
      const g = document.createElement('div'); g.setAttribute('role', 'group'); g.setAttribute('aria-labelledby', 'xmh' + gi);
      g.innerHTML = `<div class="xm-h" id="xmh${gi}">${esc(title)}</div>`;
      here.forEach(([v, label, desc]) => {
        const b = btnOf(v), l = label || b.textContent.trim();
        b.innerHTML = `<span class="xm-l">${esc(l)}</span><span class="xm-d">${esc(desc)}</span>`;
        b.dataset.xlabel = l;
        g.appendChild(b);
      });
      menu.appendChild(g);
    });
    // the More button goes after the last tab left in the strip, the menu at the end of the strip
    const rest = [...nav.children].filter(c => c.tagName === 'BUTTON' && c !== more);
    (rest.length ? rest[rest.length - 1] : nav).insertAdjacentElement(rest.length ? 'afterend' : 'beforeend', more);
    nav.appendChild(menu);
    more.addEventListener('click', () => (menu.classList.contains('open') ? close(true) : open()));
    menu.addEventListener('click', ev => { if (ev.target.closest && ev.target.closest('button[data-v]')) close(false); });
    menu.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') { ev.stopPropagation(); close(true); }
      else if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        const bs = [...menu.querySelectorAll('button')], i = bs.indexOf(document.activeElement);
        if (i >= 0) { ev.preventDefault(); bs[(i + (ev.key === 'ArrowDown' ? 1 : bs.length - 1)) % bs.length].focus(); }
      }
    });
    more.addEventListener('keydown', ev => { if (ev.key === 'Escape') close(true); });
    document.addEventListener('click', ev => { if (menu.classList.contains('open') && !nav.contains(ev.target)) close(false); }, true);
    nav.addEventListener('focusout', () => setTimeout(() => { if (menu.classList.contains('open') && !nav.contains(document.activeElement)) close(false); }, 0));
    window.addEventListener('scroll', () => { if (Date.now() - OPENED > 400) close(false); }, {passive: true});
    window.addEventListener('resize', () => close(false), {passive: true});
    try { new MutationObserver(() => { if (nav.classList.contains('xhid')) close(false); }).observe(nav, {attributes: true, attributeFilter: ['class']}); } catch (e) {}
    sync();
  }
  function place() {
    const nr = nav.getBoundingClientRect(), mr = more.getBoundingClientRect(), vw = document.documentElement.clientWidth || window.innerWidth;
    const w = Math.min(360, vw - 16);
    let left = mr.right - w; left = Math.max(8, Math.min(left, vw - w - 8));
    menu.style.top = Math.round(nr.bottom + 2) + 'px'; menu.style.left = Math.round(left) + 'px'; menu.style.width = w + 'px';
    menu.style.maxHeight = Math.max(160, (window.innerHeight || 700) - nr.bottom - 14) + 'px';
  }
  function open() {
    if (!menu) return;
    try { const nr = nav.getBoundingClientRect(), r = more.getBoundingClientRect(); if (r.right > nr.right - 4) nav.scrollLeft += r.right - nr.right + 12; } catch (e) {}
    OPENED = Date.now();
    menu.classList.add('open'); more.setAttribute('aria-expanded', 'true'); place();
    const first = menu.querySelector('button[aria-selected="true"]') || menu.querySelector('button');
    if (first) first.focus({preventScroll: true});
  }
  function close(refocus) {
    if (!menu || !menu.classList.contains('open')) return;
    menu.classList.remove('open'); more.setAttribute('aria-expanded', 'false');
    if (refocus) more.focus({preventScroll: true});
  }
  // More is marked when the view shown is one of its tabs, and says which
  function sync() {
    if (!more) return;
    let cur = null; try { cur = typeof VIEW === 'string' ? VIEW : null; } catch (e) { cur = null; }   // VIEW is declared after the course files run
    const b = cur && menu.querySelector(`button[data-v="${cur}"]`);
    more.setAttribute('aria-selected', b ? 'true' : 'false');
    const c = more.querySelector('.xm-cur');
    c.hidden = !b; c.textContent = b ? (b.dataset.xlabel || '') : '';
    more.setAttribute('aria-label', b ? `More: ${b.dataset.xlabel} is open` : 'More');
    menu.querySelectorAll('button[data-v]').forEach(x => x.removeAttribute('aria-current'));
    if (b) b.setAttribute('aria-current', 'page');
    // when the strip scrolls sideways (a phone), keep More in view for a tab that lives in the menu
    if (b) { try { const nr = nav.getBoundingClientRect(), r = more.getBoundingClientRect();
      if (r.right > nr.right - 4) nav.scrollLeft += r.right - nr.right + 12; } catch (e) {} }
  }

  const oshow = show;
  show = function (v) {
    // the core wires every '#nav button' to show(its data-v) after the course files ran; the More button has no view
    if (v === undefined) return;
    const r = oshow.apply(this, arguments);
    try { close(false); sync(); } catch (e) { console.error('start_ui: tab strip', e); }
    return r;
  };
  // a view in the menu has no tab in the strip to scroll to; the core's reveal would scroll the strip to its start
  if (typeof navReveal === 'function') {
    const onr = navReveal;
    navReveal = function (v) {
      const inside = menu && menu.querySelector(`button[data-v="${v}"]`);
      if (!inside) return onr.apply(this, arguments);
      return typeof navCue === 'function' ? navCue() : undefined;
    };
  }
  // a tab another file adds later is left in the strip; one of the known tabs added later goes into the menu
  try {
    build();
    if (typeof MutationObserver === "function") new MutationObserver(() => { if (!more) build(); else late(); }).observe(nav, {childList: true});
  } catch (e) { console.error('start_ui: the tab strip was left as it was', e); }
  function late() {
    GROUPS.forEach(([, items], gi) => items.forEach(([v, label, desc]) => {
      const b = btnOf(v); if (!b || menu.contains(b)) return;
      const g = menu.querySelectorAll('[role="group"]')[Math.min(gi, menu.querySelectorAll('[role="group"]').length - 1)] || menu;
      const l = label || b.textContent.trim();
      b.innerHTML = `<span class="xm-l">${esc(l)}</span><span class="xm-d">${esc(desc)}</span>`; b.dataset.xlabel = l; g.appendChild(b);
    }));
    if (more.nextSibling !== menu && menu.parentNode === nav) nav.appendChild(menu);
  }
  window.START_UI = {open, close, repaint: paint, select: p => { SEL = p; paint(); }};
  if (document.getElementById('v-topics') && document.getElementById('v-topics').innerHTML) { try { paint(); } catch (e) {} }
})();
