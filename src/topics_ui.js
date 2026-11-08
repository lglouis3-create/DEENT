/* ==========================================================================
   TOPICS TAB: EXAM FACTS CARD
   (course-level, Louis 2026-11-08; temporary until the kit has these)
   ==========================================================================
   1. The core opens Topics with one paragraph: "<exam>: <n> questions, <m>
      minutes, <date>. <blurb>. Question bank: ... <countdown>". This shows the
      same facts as label / value rows, the way the Intro to Pharmacology drill
      does (its examCard: a "facts" table, with the less central rows folded
      under "More about this exam"). The rows' text is course.js's exam
      `facts` ([label, sentence] pairs); they are used only when their sentences
      joined with spaces are exactly the exam's `blurb` plus its full stop, so
      the card can never say something the blurb does not. Otherwise the blurb
      is one "About" row. The paper, date, countdown and bank counts are the
      core's own values (EXAM, examCountdown, conceptsIn, requiredQs). The card
      stays a <p class="sub"> (the element the core and nullexam.js read for the
      exam line), with its rows as spans; an exam field that is not set is left
      out, as nullexam.js does.
   The tab bar is left sticky, as the core has it: Louis asked (2026-11-08)
   for it to scroll away with the page, but the core's ux_test.js requires it
   to stay in view below the header when the page is scrolled ("scrolled down
   under a wrapped title, the tab bar shows below the header"), so that change
   waits for his decision on the core check.
   Nothing here reads or writes progress or any other storage. */
(function topicsUi(){
  if (typeof document === 'undefined' || typeof renderTopics !== 'function' || !document.createElement) return;

  const CSS = `
#v-topics p.sub.xcard{display:block;background:var(--paper);border:1px solid var(--line);border-radius:var(--r,10px);
  padding:2px 14px;margin:6px 0 6px;color:var(--text);font-size:14px;line-height:1.45}
#v-topics .xcard .xrow{display:grid;grid-template-columns:7.5em minmax(0,1fr);gap:10px;padding:7px 0}
#v-topics .xcard .xrow+.xrow{border-top:1px solid var(--line-soft,var(--line))}
#v-topics .xcard .xk{font-weight:600;color:var(--text-dim)}
#v-topics .xcard .xv{min-width:0;overflow-wrap:anywhere}
#v-topics details.xmore{margin:0 0 16px}
#v-topics details.xmore>summary{cursor:pointer;color:var(--accent);font-size:14px;min-height:44px;display:flex;align-items:center;
  list-style:none;user-select:none}
#v-topics details.xmore>summary::-webkit-details-marker{display:none}
#v-topics details.xmore>summary::after{content:' \\25B8';display:inline-block;margin-left:5px;transition:transform .15s}
#v-topics details.xmore[open]>summary::after{transform:rotate(90deg)}
#v-topics details.xmore p.sub.xcard{margin-top:0}
@media (max-width:420px){#v-topics .xcard .xrow{grid-template-columns:5.4em minmax(0,1fr);gap:8px}}`;
  const addCss = () => {
    if (document.getElementById('topicsuicss')) return;
    const s = document.createElement('style'); s.id = 'topicsuicss'; s.textContent = CSS; document.head.appendChild(s);
  };

  const e = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'})[c]);
  const set = v => v !== null && v !== undefined;

  /* the exam's facts as [label, html] rows: [main rows, folded rows] */
  function rows(){
    const main = [], more = [];
    const paper = [set(EXAM.questions) && `${EXAM.questions} questions`, set(EXAM.minutes) && `${EXAM.minutes} minutes`].filter(Boolean);
    main.push(['Exam', e(EXAM.name) + (paper.length ? ': ' + paper.join(', ') : '')]);
    const cd = typeof examCountdown === 'function' ? examCountdown() : '';
    if (EXAM.date || cd) main.push(['When', [EXAM.date ? e(EXAM.date) : '', cd ? `<b>${e(cd)}</b>` : ''].filter(Boolean).join('. ')]);
    const facts = Array.isArray(EXAM.facts) ? EXAM.facts : [];
    const exact = facts.length && EXAM.blurb && facts.every(f => Array.isArray(f) && f.length >= 2)
      && facts.map(f => f[1]).join(' ') === EXAM.blurb + '.';
    if (exact) {
      const top = Array.isArray(EXAM.factsMain) ? EXAM.factsMain : null;
      facts.forEach(f => (top && !top.includes(f[0]) ? more : main).push([f[0], e(f[1])]));
    } else if (EXAM.blurb) main.push(['About', e(EXAM.blurb) + '.']);
    const req = typeof requiredQs === 'function' ? requiredQs().length : QUESTIONS.length;
    main.push(['Bank', `${QUESTIONS.length} questions across ${conceptsIn(QUESTIONS).length} concepts${
      req < QUESTIONS.length ? `, ${QUESTIONS.length - req} of them in optional topics outside ${e(EXAM.name)}` : ''}`]);
    return [main, more];
  }
  const block = list => list.map(([k, v]) => `<span class="xrow"><span class="xk">${e(k)}</span><span class="xv">${v}</span></span>`).join('');

  function examCard(){
    const el = document.getElementById('v-topics');
    if (!el || !el.querySelector) return;
    const h2 = el.querySelector('h2'), p = h2 && h2.nextElementSibling;
    if (!p || p.tagName !== 'P' || !p.classList.contains('sub') || p.classList.contains('xcard')) return;
    const [main, more] = rows();
    const keepOpen = (() => { const d = el.querySelector('details.xmore'); return !!(d && d.open); })();
    p.classList.add('xcard'); p.id = 'examFacts';
    p.innerHTML = block(main);
    if (more.length) {
      const d = document.createElement('details');
      d.className = 'xmore'; if (keepOpen) d.open = true;
      d.innerHTML = `<summary>More about this exam (${more.length})</summary><p class="sub xcard">${block(more)}</p>`;
      p.after(d);
    }
  }

  try {
    addCss();
    const base = renderTopics;
    renderTopics = function(){
      const r = base.apply(this, arguments);
      try { examCard(); } catch (err) { console.error('The exam facts card could not be drawn; the paragraph stays as it was.', err); }
      return r;
    };
  } catch (err) { console.error('The Topics additions could not be added; the rest of the page is unaffected.', err); }
})();
