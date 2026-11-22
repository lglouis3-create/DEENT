/* topicbar_ui.js: what the Topics bars count (course-level; Louis, 2026-11-22).
   Louis: "the topics bar can just be if the user has looked at that section and answered all the questions or how many
   right/wrong"; "move that mastery bar to the weak spots portion".
   Before: the bar on a topic and on each of its sections showed mastered concepts (three right answers in a row for a
   concept; a miss or a guess sets it back to none), so a section answered once, all right, still showed an almost
   empty bar.
   Now, on Topics: one bar per topic and per section in three parts: right (the last answer to that question was right),
   wrong (the last answer was wrong, or right but marked a guess), and answered earlier with the result no longer in the
   answer history (the history keeps the last 4,000 answers); the rest of the bar is what has not been answered. Beside
   it: "answered 12 of 30 · 9 right · 3 wrong". A section's button reads Start (nothing answered), Continue, or Review
   (every question answered). On Weak spots: "Mastery by topic", the bar that was on Topics, with its rule stated.
   Reads DB.answers and DB.concepts; writes nothing; the scheduler and the saved progress are untouched. */
(function topicBarUi(){
  if (typeof document === 'undefined' || !document.head || typeof renderTopics !== 'function' || typeof poolFor !== 'function') return;
  const css = `
#v-topics .meter.tb{display:flex;width:96px;height:8px;border-radius:4px}
#v-topics .meter.tb i{flex:none;height:100%;border-radius:0}
#v-topics .meter.tb i.tb-r{background:var(--ok,#2e7d5b)}
#v-topics .meter.tb i.tb-w{background:#c0392b}
#v-topics .meter.tb i.tb-a{background:#8a97a8}
#v-topics .tb-line{display:block;font-size:12px;color:var(--text-dim);margin-top:2px}
#v-topics .tb-line b{font-weight:600}
#v-topics .tb-line .tb-rt{color:var(--ok,#2e7d5b)}#v-topics .tb-line .tb-wt{color:#c0392b}
#v-topics .counts.tb{min-width:74px}
#v-gaps .tbm{margin:0 0 16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:0 12px}
#v-gaps .tbm>summary{min-height:44px;display:flex;align-items:center;cursor:pointer;font-weight:600}
#v-gaps .tbm p{font-size:13px;color:var(--text-dim);margin:0 0 10px;max-width:none}
#v-gaps .tbm-row{display:flex;align-items:center;gap:10px;padding:6px 0;border-top:1px solid var(--line-soft)}
#v-gaps .tbm-row span:first-child{flex:1;min-width:0;font-size:14px}
#v-gaps .tbm-row .meter{width:96px;height:8px;border-radius:4px}
#v-gaps .tbm-row .counts{min-width:64px}`;
  const st = document.createElement('style'); st.id = 'tbcss'; st.textContent = css; document.head.appendChild(st);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

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
  const bar = t => { const p = x => (t.n ? 100 * x / t.n : 0).toFixed(2) + '%';
    return `<i class="tb-r" style="width:${p(t.r)}"></i><i class="tb-w" style="width:${p(t.w)}"></i><i class="tb-a" style="width:${p(t.a)}"></i>`; };
  const line = t => `answered <b>${t.done} of ${t.n}</b>` + (t.done ? ` · <span class="tb-rt">${t.r} right</span> · <span class="tb-wt">${t.w} wrong</span>` +
    (t.a ? ` · ${t.a} answered earlier` : '') : '');
  const label = t => `${t.done} of ${t.n} answered: ${t.r} right, ${t.w} wrong` + (t.a ? `, ${t.a} answered earlier` : '') + `, ${t.n - t.done} not yet answered`;

  function topics() {
    const root = document.getElementById('v-topics'); if (!root) return;
    const tally = tallies();
    root.querySelectorAll('details.topic').forEach(d => {
      const b0 = d.querySelector('.subrow button[data-t]'); if (!b0 || !b0.dataset.t) return;
      const tid = b0.dataset.t;
      const sum = d.querySelector(':scope > summary');
      if (sum) {
        const t = tally(poolFor(tid, null)), m = sum.querySelector('.meter'), c = sum.querySelector('.counts');
        if (m) { m.classList.add('tb'); m.innerHTML = bar(t); m.setAttribute('role', 'img'); m.setAttribute('aria-label', label(t)); m.title = label(t); }
        if (c) { c.classList.add('tb'); c.textContent = `${t.done}/${t.n} answered`; }
      }
      d.querySelectorAll('.subrow').forEach(row => {
        const b = row.querySelector('button[data-t]'); if (!b || b.dataset.t !== tid) return;
        const t = tally(poolFor(tid, b.dataset.s || null)), m = row.querySelector('.meter'), sn = row.querySelector('.sname');
        if (m) { m.classList.add('tb'); m.innerHTML = bar(t); m.setAttribute('role', 'img'); m.setAttribute('aria-label', label(t)); m.title = label(t); }
        if (sn && !sn.querySelector('.tb-line')) sn.insertAdjacentHTML('beforeend', `<span class="tb-line">${line(t)}</span>`);
        if (b.dataset.s) {                       // a section's own button (not "Everything in ...")
          const all = t.n > 0 && t.done === t.n;
          b.textContent = all ? 'Review' : t.done ? 'Continue' : 'Start'; b.classList.toggle('done', all);
        }
      });
    });
  }
  function mastery() {
    const root = document.getElementById('v-gaps'); if (!root || root.querySelector('.tbm') || typeof masteryOf !== 'function' || typeof TOPICS === 'undefined') return;
    const h2 = root.querySelector('h2'); if (!h2) return;
    const rows = TOPICS.map(t => { const pool = poolFor(t.id, null); if (!pool.length || t.optional) return '';
      const m = masteryOf(pool), pct = m.total ? Math.round(100 * m.mastered / m.total) : 0;
      return `<div class="tbm-row"><span>${esc(t.name)}</span><span class="meter" role="img" aria-label="${m.mastered} of ${m.total} concepts mastered"><i style="width:${pct}%"></i></span><span class="counts">${m.mastered}/${m.total}</span></div>`; }).join('');
    if (!rows) return;
    h2.insertAdjacentHTML('afterend', `<details class="tbm"><summary>Mastery by topic</summary>
      <p>A concept counts as mastered after three right answers in a row to its questions; a wrong answer, or a right answer marked as a guess, sets it back to none. The bars on Topics count answered questions instead.</p>${rows}</details>`);
  }
  const ot = renderTopics;
  renderTopics = function () { const r = ot.apply(this, arguments); try { topics(); } catch (e) { console.error('topicbar_ui: Topics bars', e); } return r; };
  if (typeof renderGaps === 'function') { const og = renderGaps;
    renderGaps = function () { const r = og.apply(this, arguments); try { mastery(); } catch (e) { console.error('topicbar_ui: mastery list', e); } return r; }; }
})();
