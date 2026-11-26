/* ==========================================================================
   "LIKELY ON THE EXAM" STARS, PHAR 4346 DEENT (Exam 1): presentation
   --------------------------------------------------------------------------
   Course-level and isolated, in the pattern of druglist_ui.js: a course data
   file (course.js `files`) that the build puts into the page before views.js.
   The kit core (64302e2) is not changed. At load it wraps two engine
   functions, the way druglist_ui.js wraps show():
     - renderQuiz(): after the engine draws a question card in the topic
       drills, a starred question gets a small "★ Likely on the exam" badge in
       the card header, before and after answering. No reason text is shown on
       the card (Louis, 2026-11-08): each star's reason and source stay in
       likely_data.js as the audit record only. Exam papers are left as they
       are (Q.examMode).
     - renderTopics(): a card under the straight passes, "Starred questions",
       opens exactly the starred ids (all, Dr. Smith's, Dr. Sikazwe's or, from
       Exam 2, Dr. Patel's; that row shows only when she has stars; and, from Exam 3, Dr. Smith's eye questions, in the order of likelihood) with
       the engine's own drillList().
   It says plainly that the stars are Claude's prediction from the professors'
   stated emphasis, not an official list.
   It runs only in a real browser page; in the node checks' stub DOM it does
   nothing and returns null. Storage: none.
   ========================================================================== */
const LIKELY_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('nav') &&
             typeof document.getElementById('nav').insertBefore === 'function' &&
             typeof renderQuiz === 'function' && typeof renderTopics === 'function';
  if (!ok) return null;
  const L = LIKELY, BY = {};
  L.items.forEach(x => { BY[x.id] = x; });
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const NOTE = "A prediction from the professors' stated emphasis, not an official list.";

  const css = `
.lkchips{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 10px}.lklab{font-size:13px;color:var(--muted,#5b6475);margin-top:6px}
.lkchip{border:1px solid var(--line,#d9deea);border-radius:999px;padding:5px 13px;background:transparent;color:inherit;font:inherit;cursor:pointer;min-height:36px}
.lkchip.on{background:var(--ink,#1c2230);color:var(--bg,#fff);border-color:var(--ink,#1c2230)}.lkchip:disabled{opacity:.45}

.lkbadge{display:inline-block;font-size:12px;font-weight:600;line-height:1.3;color:var(--accent);border:1px solid var(--accent);border-radius:999px;padding:1px 8px;white-space:nowrap;background:var(--accent-bg)}
`;
  const addCss = () => {
    if (document.getElementById('lkcss')) return;
    const s = document.createElement('style'); s.id = 'lkcss'; s.textContent = css; document.head.appendChild(s);
  };

  /* the starred questions that exist in this build, in bank order */
  const RANK = {}; L.items.forEach((x, i) => { RANK[x.id] = i; });
  const pool = by => {
    const r = QUESTIONS.filter(q => BY[q.id] && (!by || (by === 'eye' ? /Smith_Eye_/.test(q.cite) : (L.sources[BY[q.id].source] || {}).by === by)));
    return by === 'eye' ? r.sort((a, b) => RANK[a.id] - RANK[b.id]) : r;   // the eye stars are listed most likely first
  };

  /* ---------- the badge on the question card (no reason text: see the header) ---------- */
  function decorateQuiz(){
    if (typeof Q === 'undefined' || !Q || !Q.current || Q.examMode) return;
    if (!BY[Q.current.id]) return;
    const card = document.querySelector('#v-quiz .qcard'), head = card && card.querySelector('.qhead');
    if (!head || head.querySelector('.lkbadge')) return;
    const b = document.createElement('span');
    b.className = 'lkbadge';
    b.setAttribute('title', NOTE);
    b.textContent = '★ Likely on the exam';
    const sp = head.querySelector('.spacer');
    if (sp) head.insertBefore(b, sp); else head.appendChild(b);
  }

  /* ---------- the card on Topics: two rows of chips (exam, professor), one Start ----------
     Louis, 2026-11-18, option C. A star belongs to the exam of its lecture. The Exam 2 chip also
     takes the Exam 1 stars, because that paper draws on Exam 1 material, and each question's header
     already names its exam. Opens on the active exam. Chip choices are page memory only. */
  const EXAM_OF = {}; (COURSE.lectures || []).forEach(l => { EXAM_OF[l.id] = l.exam; });
  const examOf = q => { const l = (typeof lecOf === 'function' ? lecOf(q) : null) || q._lec; return EXAM_OF[l && l.id ? l.id : l]; };
  const PROFS = [['all', 'All'], ['smith', 'Smith'], ['sikazwe', 'Sikazwe'], ['patel', 'Patel'], ['lam', 'Lam']];
  const profOf = q => ((q.prof || '').toLowerCase().match(/smith|sikazwe|patel|lam/) || [''])[0];
  const select = (exam, prof) => {
    let r = pool().filter(q => {
      const e = examOf(q);
      return (exam === 'all' || e === +exam || (+exam === 2 && e === 1)) && (prof === 'all' || profOf(q) === prof);
    });
    return r;
  };

  function decorateTopics(){
    const v = document.getElementById('v-topics'); if (!v || v.querySelector('.lkcard')) return;
    const all = pool(); if (!all.length) return;
    const exams = [...new Set(all.map(examOf))].filter(Boolean).sort((a, b) => b - a);
    const act = String((COURSE.exams || []).findIndex(x => x.id === COURSE.activeExam) + 1);
    const st = {exam: exams.map(String).includes(act) ? act : 'all', prof: 'all'};
    const d = document.createElement('div');
    d.className = 'topic lkcard';
    const chip = (grp, val, label, n, on, off) => `<button type="button" class="lkchip${on ? ' on' : ''}" data-grp="${grp}" data-val="${val}"${off ? ' disabled' : ''} aria-pressed="${on}">${label}${n == null ? '' : ' · ' + n}</button>`;
    const draw = () => {
      const sel = select(st.exam, st.prof);
      const examChips = chip('exam', 'all', 'All', all.length, st.exam === 'all') + exams.map(e =>
        chip('exam', e, 'Exam ' + e, select(String(e), 'all').length, st.exam === String(e))).join('');
      const profChips = PROFS.map(([k, lab]) => chip('prof', k, lab, k === 'all' ? null : select(st.exam, k).length, st.prof === k)).join('');
      const what = (st.exam === 'all' ? 'All exams' : 'Exam ' + st.exam) + (st.prof === 'all' ? ', all professors' : ', Dr. ' + PROFS.find(x => x[0] === st.prof)[1]);
      const carry = +st.exam === 2 ? sel.filter(q => examOf(q) === 1).length : 0;
      d.innerHTML = `<div class="subs">
        <div class="subrow"><span class="sname"><b>★ Starred: likely on the exam</b><small>${esc(NOTE)}</small></span></div>
        <div class="lklab">Exam</div><div class="lkchips">${examChips}</div>
        <div class="lklab">Professor</div><div class="lkchips">${profChips}</div>
        <div class="subrow"><span class="sname">${esc(what)}<small>${sel.length ? sel.length + ' questions' + '' + (carry ? '; ' + carry + ' of them are Exam 1 material, labelled on the question' : '') : 'No questions starred for this choice yet'}</small></span>
          <button type="button" data-lk="go"${sel.length ? '' : ' disabled'}>Start${sel.length ? ' (' + sel.length + ')' : ''}</button></div>
      </div>`;
      d.querySelectorAll('button.lkchip').forEach(b => b.onclick = () => { st[b.dataset.grp] = b.dataset.val; draw(); });
      const go = d.querySelector('button[data-lk="go"]');
      if (go) go.onclick = () => drillList(sel, '★ Likely: ' + what);
    };
    draw();
    const sweep = v.querySelector('.sweepcard');
    if (sweep) sweep.insertAdjacentElement('afterend', d); else v.appendChild(d);
  }

  try {
    addCss();
    const oq = renderQuiz, ot = renderTopics;
    renderQuiz = function(){
      const r = oq.apply(this, arguments);
      try { decorateQuiz(); } catch (e) { console.error('The "likely" star could not be drawn; the question is unaffected.', e); }
      return r;
    };
    renderTopics = function(){
      const r = ot.apply(this, arguments);
      try { decorateTopics(); } catch (e) { console.error('The starred-questions card could not be drawn; Topics is unaffected.', e); }
      return r;
    };
  } catch (e) { console.error('The "likely on the exam" stars could not be added; the rest of the page is unaffected.', e); }
  return {pool, byId: BY};
})();
