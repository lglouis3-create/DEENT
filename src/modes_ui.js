/* modes_ui.js: Learn mode and Exam mode for practising (course-level; classmates said the quiz is hard and makes them feel
   they do not know the material, 2026-11-25).
   The bank was made exam-hard on purpose and has no difficulty field (`tier` means new/old weighting). This file adds:
   - level(q): 'challenge' when q.tags holds any of hard, case, two-facts, reasoning, reverse, exam-style, numbers;
     otherwise 'foundation'. window.MODES_UI.level(q), window.MODES_UI.counts(exam) (per topic of an exam).
   - a switch "Learn | Exam" on Topics (above the topic list) and in the Quiz header. Kept in page memory and under
     `<NS>:mode` in localStorage (direct calls inside try/catch, as wide_ui.js keeps `<NS>:navAutoHide`); a first visit is
     Learn. Exam mode is today's behaviour: nothing below runs and the page adds only the switch.
   - Learn mode, for quizzes started from a topic or a section (startQuiz with a topic id) only:
       foundation questions of the set first (Q.pool is narrowed to them; the scheduler picks from it as before); "Add harder
       questions" in the Quiz header, or the end of the foundation set, widens Q.pool to the whole set;
       a Hint button before answering (two per question): cross out a wrong answer, never the key;
       after a miss: "You may be mixing this up with ..." naming the option picked (the core already prints that option's
       explanation in the list under the verdict, so it is pointed to, not repeated), the picked row marked, a button to the
       related card when HUB_UI exists;
       after two misses on one concept in this visit: a short "A way in" box;
       "Not quite" instead of "Not correct"; an end-of-set summary: the score and "Next best things to review".
   - Learn mode on Weak spots: the tab and the view's heading say "Review next" / "Next best things to review"; the
     counts and the logic are the core's.
   Exam sim, Weak spots drills, the passes, sweeps and the exam chips are not touched. Nothing here writes progress,
   history or the scheduler's state; the only stored value is `<NS>:mode`. */
(function modesUi(){
  if (typeof document === 'undefined' || !document.head || typeof renderQuiz !== 'function' || typeof startQuiz !== 'function' ||
      typeof renderTopics !== 'function' || typeof QUESTIONS === 'undefined') return;

  const CHALLENGE = ['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers'];
  const level = q => ((q && q.tags) || []).some(t => CHALLENGE.indexOf(t) >= 0) ? 'challenge' : 'foundation';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

  /* ---------- the mode, kept like wide_ui.js keeps navAutoHide ---------- */
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = (typeof COURSE !== 'undefined' && COURSE.ns) || 'drill'; } return ns + ':mode'; };
  let MODE = 'learn', read = false;
  const load = () => {
    if (read) return;
    try { void NS; } catch (e) { return; }              // this file runs before the line that declares NS
    read = true;
    try { const v = localStorage.getItem(KEY()); if (v === 'learn' || v === 'exam') MODE = v; } catch (e) {}
  };
  const learn = () => { load(); return MODE === 'learn'; };
  const save = () => { try { localStorage.setItem(KEY(), MODE); } catch (e) {} };

  /* ---------- counts per topic ---------- */
  function counts(exam) {
    const out = [];
    TOPICS.forEach(t => {
      let qs = QUESTIONS.filter(q => q.topic === t.id);
      if (exam) qs = qs.filter(q => q._lec && q._lec.exam === exam);
      if (!qs.length) return;
      const f = qs.filter(q => level(q) === 'foundation').length;
      out.push({id: t.id, name: t.name, n: qs.length, foundation: f, challenge: qs.length - f, enough: f >= 4});
    });
    return out;
  }

  /* ---------- styles: the page's own variables, one light theme ---------- */
  const st = document.createElement('style'); st.id = 'mdcss';
  st.textContent = `
.mdbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;margin:10px 0 14px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--paper)}
.mdbar .mdlab{font-weight:600;font-size:14px}
.mdbar .mdsw{display:inline-flex;border:1px solid var(--line);border-radius:8px;overflow:hidden}
.mdbar .mdbtn{min-height:44px;min-width:76px;padding:0 16px;border:0;background:transparent;color:inherit;font:inherit;cursor:pointer}
.mdbar .mdbtn+.mdbtn{border-left:1px solid var(--line)}
.mdbar .mdbtn[aria-pressed="true"]{background:var(--accent,#2f5d8a);color:#fff;font-weight:600}
.mdbar .mdnote{flex:1 1 100%;font-size:13px;color:var(--text-dim);margin:0}
.mdbar .mdadd{min-height:44px}
#v-quiz .mdbar{margin-top:0}
.mdhintrow{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0}
.mdhint{min-height:44px}
button.opt.mdx{opacity:.45;text-decoration:line-through;cursor:default}
.mdmix,.mdway,.mdsum{margin:10px 0;padding:10px 12px;border-radius:8px;border:1px solid var(--line);background:var(--paper);font-size:14.5px}
.mdmix p,.mdway p,.mdsum p{margin:0 0 6px;max-width:none}
.mdmix button{min-height:44px}
.mdsum b{font-weight:600}
.mdsum ul{margin:4px 0 0 18px;padding:0}
`;
  document.head.appendChild(st);

  /* ---------- the switch ---------- */
  const NOTES = {
    learn: 'Learn: a quiz started from a topic or section begins with foundation questions, then you can add the harder ones. Hints are on.',
    exam: 'Exam: every question as it is on the exam, no hints.'};
  function barHtml(inQuiz) {
    load();
    let extra = '';
    if (inQuiz && typeof Q !== 'undefined' && Q && Q.lm && MODE === 'learn') {
      const harder = Q.lm.full.length - Q.pool.length;
      extra = Q.lm.all || harder <= 0
        ? `<p class="mdnote mdstate">${Q.lm.noFoundation ? 'This set has no foundation-level questions, so all of its questions are in.' : 'All questions of this set are in.'}</p>`
        : `<p class="mdnote mdstate">Foundation questions first (${Q.pool.length} in this set). <button class="btn ghost mdadd" type="button">Add harder questions (${harder})</button></p>`;
    }
    return `<div class="mdbar" role="group" aria-label="Practice mode"><span class="mdlab">Practice mode</span>
      <span class="mdsw"><button class="mdbtn" type="button" data-md="learn" aria-pressed="${MODE === 'learn'}">Learn</button><button class="mdbtn" type="button" data-md="exam" aria-pressed="${MODE === 'exam'}">Exam</button></span>
      <p class="mdnote">${NOTES[MODE]}</p>${extra}</div>`;
  }
  function wireBar(root) {
    root.querySelectorAll('.mdbtn').forEach(b => { b.onclick = () => setMode(b.dataset.md); });
    const add = root.querySelector('.mdadd'); if (add) add.onclick = widen;
  }
  function setMode(m) {
    load(); if (m !== 'learn' && m !== 'exam') return;
    if (m === MODE) return;
    MODE = m; save();
    if (m === 'exam' && typeof Q !== 'undefined' && Q && Q.lm && !Q.lm.all) { Q.pool = Q.lm.full; Q.lm.all = true; }
    document.querySelectorAll('.mdbar .mdbtn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.md === MODE)));
    document.querySelectorAll('.mdbar .mdnote:not(.mdstate)').forEach(n => { n.textContent = NOTES[MODE]; });
    navLabel();
    try {
      if (typeof VIEW !== 'undefined' && VIEW === 'quiz') renderQuiz();
      else if (typeof VIEW !== 'undefined' && VIEW === 'gaps') renderGaps();
    } catch (e) { console.error('modes_ui: switch', e); }
  }
  function widen() {
    if (typeof Q === 'undefined' || !Q || !Q.lm || Q.lm.all) return;
    Q.pool = Q.lm.full; Q.lm.all = true; Q.current = null;
    nextQuestion();
  }
  function navLabel() {
    const b = document.querySelector('#nav button[data-v="gaps"]'); if (b) { const t = learn() ? 'Review next' : 'Weak spots', l = b.querySelector('.xm-l'); if (l) l.textContent = t; else b.textContent = t; }
  }

  /* ---------- Topics: the switch above the topic list ---------- */
  function topicsBar() {
    const root = document.getElementById('v-topics'); if (!root || root.querySelector('.mdbar')) return;
    let anchor = root.querySelector('details.topic') || root.querySelector('details');
    if (anchor) while (anchor.parentElement && anchor.parentElement !== root) anchor = anchor.parentElement;
    const tmp = document.createElement('div'); tmp.innerHTML = barHtml(false);
    const bar = tmp.firstElementChild;
    if (anchor) root.insertBefore(bar, anchor); else root.appendChild(bar);
    wireBar(bar);
  }
  const ot = renderTopics;
  renderTopics = function () { const r = ot.apply(this, arguments); try { topicsBar(); } catch (e) { console.error('modes_ui: Topics switch', e); } return r; };

  /* ---------- starting a quiz from a topic or a section ---------- */
  const os = startQuiz;
  startQuiz = function (topicId, subId) {
    if (!topicId || !learn()) return os.apply(this, arguments);
    const full = poolFor(topicId, subId);
    const r = os.apply(this, arguments);
    try {
      if (typeof Q !== 'undefined' && Q && full.length && Q.pool && Q.pool.length === full.length) {
        const f = full.filter(q => level(q) === 'foundation');
        Q.lm = {full, all: !f.length || f.length === full.length, noFoundation: !f.length, hint: {}, tally: [], counted: {}};
        if (!Q.lm.all) { Q.pool = f; nextQuestion(); }
        else renderQuiz();
      }
    } catch (e) { console.error('modes_ui: start', e); }
    return r;
  };

  /* ---------- what the quiz view adds ---------- */
  const wrongByConcept = {};                       // page memory only: concept -> misses this visit
  const LET = () => { try { return LETTERS; } catch (e) { return 'ABCDEFGH'; } };
  const subName = q => {
    const t = TOPICS.find(x => x.id === q.topic), s = t && t.subs && t.subs.find(x => x.id === q.sub);
    return (s && s.name) || (t && t.name) || '';
  };
  const isMc = q => (q.type || 'mc') === 'mc';
  const key = () => Q.current.id + ':' + Q.startedAt;

  function tally() {                               // each shown answer once: right or missed, and the concept missed
    if (!Q.revealed || !Q.current) return;
    const k = key(); if (Q.lm.counted[k]) return; Q.lm.counted[k] = 1;
    const q = Q.current, ok = !!Q.lastRight;
    Q.lm.tally.push({id: q.id, ok, concept: q.concept, name: subName(q)});
    if (!ok) wrongByConcept[q.concept] = (wrongByConcept[q.concept] || 0) + 1;
  }
  function nextBest(list) {
    const by = {};
    list.filter(x => !x.ok).forEach(x => { const k = x.name || x.concept; by[k] = by[k] || {n: 0, name: x.name}; by[k].n++; });
    return Object.values(by).filter(x => x.name).sort((a, b) => b.n - a.n).slice(0, 3).map(x => x.name);
  }
  function summaryHtml() {
    const t = Q.lm.tally, right = t.filter(x => x.ok).length, nb = nextBest(t);
    if (!t.length) return '';
    return `<div class="mdsum"><p><b>Your score on this set: ${right} of ${t.length} right.</b></p>` +
      (nb.length ? `<p>Next best thing${nb.length > 1 ? 's' : ''} to review:</p><ul>${nb.map(n => `<li>${esc(n)}</li>`).join('')}</ul>`
                 : `<p>Nothing to review from this set.</p>`) + `</div>`;
  }

  function post() {
    const root = document.getElementById('v-quiz'); if (!root || typeof Q === 'undefined' || !Q) return;
    root.querySelectorAll('.mdbar,.mdsum,.mdhintrow,.mdmix,.mdway').forEach(e => e.remove());
    const tmp = document.createElement('div'); tmp.innerHTML = barHtml(true);
    const bar = tmp.firstElementChild; root.insertBefore(bar, root.firstChild); wireBar(bar);
    if (!learn() || !Q.lm) return;
    if (!Q.current) { const e = root.querySelector('.empty'); if (e) e.insertAdjacentHTML('afterbegin', summaryHtml()); return; }
    const q = Q.current, mc = isMc(q);
    tally();
    if (!Q.revealed) {
      if (!mc) return;
      const h = Q.lm.hint[key()] = Q.lm.hint[key()] || {cross: []};
      h.cross.forEach(oi => {
        const b = root.querySelector(`button.opt[data-o="${oi}"]`);
        if (b) { b.disabled = true; b.classList.add('mdx'); b.setAttribute('aria-label', 'Crossed out: ' + q.options[oi].t); }
      });
      const foot = root.querySelector('.qfoot'); if (!foot) return;
      const picks = isMulti(q) ? (Q.picked || []) : [];
      const left = q.options.map((o, i) => i).filter(i => !q.options[i].correct && h.cross.indexOf(i) < 0 && picks.indexOf(i) < 0);
      const used = h.cross.length, row = document.createElement('div'); row.className = 'mdhintrow';
      if (used < 2 && left.length) {
        row.innerHTML = `<button class="btn ghost mdhint" type="button">Hint ${used + 1} of 2: cross out ${used ? 'another' : 'one'} wrong answer</button>`;
        row.firstChild.onclick = () => {
          const cand = q.options.map((o, i) => i).filter(i => !q.options[i].correct && h.cross.indexOf(i) < 0 && (Q.picked == null || [].concat(Q.picked).indexOf(i) < 0));
          if (!cand.length) return;
          h.cross.push(cand[Math.floor(Math.random() * cand.length)]);
          renderQuiz();
        };
      } else row.innerHTML = `<span class="meta">${used ? `Hints used: ${used} of 2.` : 'No hint is possible on this question.'}</span>`;
      foot.appendChild(row);
      return;
    }
    // revealed: friendlier wording, the picked row, the prompt, the way in
    const v = root.querySelector('.why .verdict.bad');
    if (v) v.textContent = v.textContent.replace(/^\s*✗\s*Not correct/, 'Not quite');
    if (!mc) { addWay(root, q); return; }
    const picks = isMulti(q) ? (Q.picked || []) : [Q.picked];
    const h = Q.lm.hint[key()], used = h ? h.cross.length : 0;
    if (!Q.lastRight) {
      const wrong = picks.filter(i => i != null && q.options[i] && !q.options[i].correct);
      if (wrong.length) {
        const oi = wrong[0], n = Q.order.indexOf(oi);
        const rows = root.querySelectorAll('.why .wrow');
        wrong.forEach(i => { const r = rows[Q.order.indexOf(i)]; if (r && !r.querySelector('.youpicked')) { const b = r.querySelector('.wtxt b'); if (b) b.insertAdjacentHTML('afterend', ' <i class="youpicked">you picked this</i>'); } });
        const hub = window.HUB_UI && typeof window.HUB_UI.open === 'function';
        const box = document.createElement('div'); box.className = 'mdmix';
        box.innerHTML = `<p>You may be mixing this up with “${esc(q.options[oi].t)}”. ${n >= 0 ? `Line ${LET()[n]} below says what it is.` : ''}</p>` +
          (hub ? `<button class="btn ghost" type="button">Open the related card</button>` : '');
        if (hub) box.querySelector('button').onclick = () => { try { window.HUB_UI.open(q.topic, 'learn'); } catch (e) { console.error('modes_ui: HUB_UI.open', e); } };
        const vv = root.querySelector('.why .verdict'); if (vv) vv.insertAdjacentElement('afterend', box);
      }
      addWay(root, q);
    }
    if (used) { const vv = root.querySelector('.why .verdict'); if (vv) vv.insertAdjacentHTML('beforeend', ` <span class="meta">(${used} hint${used > 1 ? 's' : ''} used)</span>`); }
  }
  function addWay(root, q) {
    if (Q.lastRight || (wrongByConcept[q.concept] || 0) < 2) return;
    const sk = typeof skillOf === 'function' ? skillOf(q) : q.skill;
    const t = sk === 'mech' || sk === 'class'
      ? 'Two questions to ask about any drug: what does it act on (receptor, enzyme, structure)? and what changes because of that?'
      : 'Read the explanation, then try the next one.';
    const box = document.createElement('div'); box.className = 'mdway';
    box.innerHTML = `<p><b>A way in</b></p><p>${esc(t)}</p>`;
    const anchor = root.querySelector('.why .mdmix') || root.querySelector('.why .verdict');
    if (anchor) anchor.insertAdjacentElement('afterend', box);
  }

  const orq = renderQuiz;
  renderQuiz = function () {
    if (typeof Q !== 'undefined' && Q && Q.lm && learn() && !Q.lm.all && !Q.current && !Q.sweep && Q.lm.full.length > Q.pool.length) {
      try { figClose(); } catch (e) {}
      const el = document.getElementById('v-quiz'), harder = Q.lm.full.length - Q.pool.length;
      el.innerHTML = `<div class="empty">${summaryHtml()}
        <p><b>You have worked through the foundation questions of this set.</b></p>
        <p style="margin:10px 0 16px">${harder} harder question${harder === 1 ? '' : 's'} on the same material ${harder === 1 ? 'is' : 'are'} next. They are written the way the exam asks.</p>
        <p style="display:flex;gap:9px;flex-wrap:wrap;justify-content:center"><button class="btn mdadd2" type="button">Add harder questions (${harder})</button>
        <button class="btn ghost" type="button" onclick="show('topics')">Back to topics</button></p></div>`;
      el.querySelector('.mdadd2').onclick = widen;
      try { post(); } catch (e) { console.error('modes_ui: quiz', e); }
      return;
    }
    const r = orq.apply(this, arguments);
    try { post(); } catch (e) { console.error('modes_ui: quiz', e); }
    return r;
  };

  /* ---------- Weak spots wording ---------- */
  if (typeof renderGaps === 'function') {
    const og = renderGaps;
    renderGaps = function () {
      const r = og.apply(this, arguments);
      try { if (learn()) { const h = document.querySelector('#v-gaps h2'); if (h && /^Weak spots$/.test(h.textContent.trim())) h.textContent = 'Next best things to review'; } } catch (e) { console.error('modes_ui: gaps', e); }
      return r;
    };
  }
  const init = () => { try { navLabel(); } catch (e) {} };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  setTimeout(init, 0);

  window.MODES_UI = {level, counts, get mode() { load(); return MODE; }, setMode, CHALLENGE: CHALLENGE.slice()};
})();
