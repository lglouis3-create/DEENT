/* ==========================================================================
   EXAM SIMULATION: ALL THE QUESTIONS ON ONE PAGE
   (course-level, Louis 2026-11-16: "The exam sim should have the option of seeing all the questions by scrolling";
   temporary until the kit has it)
   ==========================================================================
   The Exam tab shows a running paper one question at a time. Above it there is now a choice, "One at a time" or
   "All on one page" (kept on this device under `<NS>:examLayout`, "one" by default). On one page every question of the
   paper is drawn in order, each with its options; a tap on an option picks it (a second tap on a select-all
   option takes it off), exactly as on the single question. The picks are the core's own (EX.picks), saved by the
   core's saveExam after every tap, so the clock, the saved paper, a reload, "Submit what I have answered" and the grading are
   the core's. Nothing is graded or explained before the paper is submitted; the page shows no answer. A tap redraws
   only its own question, so the page does not jump. EX.i follows the question last touched, so switching back to
   one at a time opens there. This file stores the layout choice only; it does not touch progress or history. */
(function () {
  'use strict';
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = (typeof COURSE !== 'undefined' && COURSE.ns) || 'drill'; } return ns + ':examLayout'; };
  let MODE = null;
  const layout = () => {
    if (MODE) return MODE;
    let v = null; try { v = localStorage.getItem(KEY()); } catch (e) { /* this visit only */ }
    return (MODE = v === 'all' ? 'all' : 'one');
  };
  const setLayout = k => { MODE = k === 'all' ? 'all' : 'one'; try { localStorage.setItem(KEY(), MODE); } catch (e) { /* this visit only */ } };

  const css = `
#v-exam .exlay{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin:0 0 10px}
#v-exam .exlay .meta{margin:0}
#v-exam .exlay .chip{min-height:44px;padding:0 14px}
#v-exam .exall .exqc{margin:0 0 18px}
#v-exam .exall .exqn{margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--text-dim)}
#v-exam .exall .exqn .exdone{margin-left:8px;font-weight:600;letter-spacing:0;text-transform:none;color:var(--good,#2e7d32)}
#v-exam .exall .qcard,#v-exam .exall .qbody{min-width:0}
#v-exam .exall .opt{max-width:100%;overflow-wrap:anywhere}
#v-exam .exallfoot{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:6px 0 24px}
#v-exam .exalljump{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}
#v-exam .exalljump button{min-width:44px;min-height:44px;padding:0 6px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);font:inherit;font-size:14px;cursor:pointer}
#v-exam .exalljump button.done{border-color:var(--good,#2e7d32);color:var(--good,#2e7d32);font-weight:600}`;
  const addCss = () => {
    if (document.getElementById('excss')) return;
    const s = document.createElement('style'); s.id = 'excss'; s.textContent = css; document.head.appendChild(s);
  };
  const toggle = () => `<div class="exlay" role="group" aria-label="How the questions are shown"><span class="meta">Show:</span>${
    [['one', 'One at a time'], ['all', 'All on one page']].map(([k, l]) =>
      `<button type="button" class="chip" data-exlay="${k}" aria-pressed="${layout() === k}">${l}</button>`).join('')}</div>`;

  const isDone = i => !examBlank(EX.qs[i], EX.picks[i]);
  const optHtml = (q, i) => {
    const multi = isMulti(q), order = EX.orders[i];
    return order.map((oi, n) => {
      const sel = multi ? EX.picks[i].includes(oi) : EX.picks[i] === oi;
      return `<button type="button" class="opt${multi ? ' multi' : ''}${sel ? (multi ? ' on' : ' exsel') : ''}" data-o="${oi}" aria-pressed="${sel}">
      <span class="k">${multi ? (sel ? '☑' : '☐') : LETTERS[n]}</span><span>${esc(q.options[oi].t)}</span></button>`;
    }).join('');
  };
  const cardHtml = (q, i) => {
    const multi = isMulti(q);
    let h = `<section class="exqc" id="exq${i}" data-i="${i}" aria-label="Question ${i + 1} of ${EX.qs.length}">
      <p class="exqn">Question ${i + 1} of ${EX.qs.length}<span class="exdone" ${isDone(i) ? '' : 'hidden'}>answered</span></p>
      <div class="qcard"><div class="qhead">${profTag(q.prof)}${multi ? '<span class="tag sata">select all that apply</span>' : ''}</div>
      <div class="qbody"><p class="stem">${esc(q.stem)}</p>`;
    if (q.img && IMAGES[q.img]) h += `<img class="qimg" src="${IMAGES[q.img]}" alt="Reaction scheme">`;
    if (q.fg) h += fgShow(q.fg);
    h += `<div class="exopts">${optHtml(q, i)}</div></div></div></section>`;
    return h;
  };
  const progText = () => `All questions · ${examAnsweredN()} of ${EX.qs.length} answered`;
  const refreshTop = () => {
    const p = document.getElementById('exAllProg'); if (p) p.textContent = progText();
    const s = document.getElementById('exAllSubmit'); if (s) s.textContent = submitLabel();
    document.querySelectorAll('#v-exam .exalljump button').forEach(b => b.classList.toggle('done', isDone(+b.dataset.j)));
  };
  function renderAll() {
    EX.review = false;
    const el = document.getElementById('v-exam'), n = EX.qs.length;
    let h = toggle() + `<div class="examhead">
      <span class="clock" id="exClock"${untimedPaper() ? ' title="Time taken so far: this paper is untimed"' : ''}>${untimedPaper() ? tookText() : fmt(EX.ends - Date.now())}</span>
      <span class="prog" id="exAllProg">${progText()}</span></div>
      <p class="sub">Nothing is graded or explained until you submit. Tap an option to pick it; choose it again to take a select-all option off.</p>
      <div class="exalljump" role="group" aria-label="Go to a question">${EX.qs.map((q, i) => `<button type="button" data-j="${i}" class="${isDone(i) ? 'done' : ''}" aria-label="Question ${i + 1}, ${isDone(i) ? 'answered' : 'not answered'}">${i + 1}</button>`).join('')}</div>
      <div class="exall">${EX.qs.map(cardHtml).join('')}</div>
      <div class="exallfoot"><button class="btn" id="exAllSubmit">${submitLabel()}</button></div>`;
    el.innerHTML = h;
    el.querySelectorAll('.exall .exqc').forEach(card => {
      const i = +card.dataset.i, q = EX.qs[i], multi = isMulti(q);
      card.querySelector('.exopts').addEventListener('click', e => {
        const b = e.target.closest('button.opt[data-o]'); if (!b || !EX || !EX.running || !examOwned()) return;
        const oi = +b.dataset.o;
        if (multi) { const p = EX.picks[i]; EX.picks[i] = p.includes(oi) ? p.filter(x => x !== oi) : [...p, oi]; } else EX.picks[i] = oi;
        EX.i = i; saveExam();
        card.querySelector('.exopts').innerHTML = optHtml(q, i);
        const d = card.querySelector('.exdone'); if (d) d.hidden = !isDone(i);
        refreshTop();
      });
    });
    el.querySelectorAll('.exalljump button').forEach(b => b.onclick = () => {
      const c = document.getElementById('exq' + b.dataset.j); if (!c) return;
      EX.i = +b.dataset.j;
      try { c.scrollIntoView({block: 'start'}); const t = c.querySelector('.stem'); if (t) { t.setAttribute('tabindex', '-1'); t.focus({preventScroll: true}); } } catch (err) { /* the page stays where it is */ }
    });
    document.getElementById('exAllSubmit').onclick = askSubmitExam;
    wireToggle(el);
  }
  function wireToggle(el) {
    el.querySelectorAll('.exlay [data-exlay]').forEach(b => b.onclick = () => {
      if (!EX || !EX.running) return;
      if (layout() === b.dataset.exlay) return;
      setLayout(b.dataset.exlay); renderExamQ();
    });
  }
  try {
    addCss();
    const base = renderExamQ;
    renderExamQ = function () {
      if (typeof EX !== 'undefined' && EX && EX.running && layout() === 'all') {
        try { return renderAll(); } catch (e) { console.error('The all-on-one-page paper could not be drawn; the paper is shown one question at a time.', e); }
      }
      const r = base.apply(this, arguments);
      try {
        if (typeof EX !== 'undefined' && EX && EX.running) {
          const el = document.getElementById('v-exam');
          if (!el.querySelector(':scope > .exlay')) { const t = document.createElement('div'); t.innerHTML = toggle(); el.insertBefore(t.firstElementChild, el.firstChild); wireToggle(el); }
        }
      } catch (e) { console.error('The layout choice could not be drawn; the question is unaffected.', e); }
      return r;
    };
    // the overview of the one-at-a-time paper is still reached from the last question's "Review answers"
  } catch (e) { console.error('The all-on-one-page paper could not be added; the exam is unaffected.', e); }
  if (typeof window !== 'undefined') window.EXAM_ALL_UI = {layout, setLayout, renderAll};
})();
