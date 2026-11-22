/* figsrc_ui.js: what a learner sees of a drawn figure's sources (course-level; Louis, 2026-11-22).
   1. Step captions inside the drawing: the transcript codes ("11/17 T@41462") are not shown; the caption keeps its
      slide numbers and says "lecture 11/17" ("Yes hide the T@ codes in the step caption only"). The figure's source
      text in DIA is unchanged, so the checks that read it still see the codes.
   2. The source note under a figure ("Drawn after ...") is closed by default ("let's hide the portion ... or if it can
      be presented more cleanly for a learner if they want to click and look at a particular slide"). Closed, it shows
      one button per slide the note cites ("Slide 15", "Slides 48–49"; the note's own slide links, each slide once) and a
      "Source note" button that opens the full note, with its transcript codes, for checking. Nothing is copied or
      removed: the note's words are hidden with CSS and its slide links are restyled, so slide_ui.js's links are the
      same elements. Open or closed is page memory only; nothing is stored. */
(function figsrcUi(){
  if (typeof document === 'undefined' || !document.body || typeof MutationObserver === 'undefined' || !document.head) return;
  const css = `
figure.fig figcaption.fsrc-closed{font-size:0;line-height:0;display:flex;flex-wrap:wrap;gap:8px;align-items:center}
figure.fig figcaption.fsrc-closed::before{content:'Slides for this figure';flex:1 0 100%;font-size:12.5px;line-height:1.4;font-weight:600;color:var(--text-dim,#5A6878)}
figure.fig figcaption.fsrc-none.fsrc-closed::before{content:none}
figure.fig figcaption.fsrc-closed .slk{font-size:0;display:inline-flex;align-items:center;min-height:36px;padding:0 12px;border:1px solid var(--accent,#2F5FA8);border-radius:18px;margin:0;text-decoration:none;background:var(--paper,#fff)}
figure.fig figcaption.fsrc-closed .slk::after{content:attr(data-fsrc-lab);font-size:13px;line-height:1.2;font-weight:600;color:var(--accent,#2F5FA8)}
figure.fig figcaption.fsrc-closed .slk.fsrc-dup{display:none}
figure.fig figcaption.fsrc-closed > *:not(.slk):not(.fsrc-t){display:none}
figure.fig figcaption .fsrc-t{font-size:12.5px;line-height:1.2;min-height:36px;padding:0 12px;border:1px solid var(--line,#D3DAE3);border-radius:18px;background:transparent;color:var(--text-dim,#5A6878);cursor:pointer}
figure.fig figcaption:not(.fsrc-closed) .fsrc-t{display:block;margin:8px 0 0}
figure.fig figcaption .fsrc-t:focus-visible{outline:3px solid var(--accent,#2F5FA8);outline-offset:2px}`;
  const st = document.createElement('style'); st.id = 'fsrccss'; st.textContent = css; document.head.appendChild(st);

  const CODE = /T@\d+(?:\s*[–-]\s*@?\d+)?/;
  function captions(root) {
    const groups = new Map();
    root.querySelectorAll('figure.fig svg text.capt:not([data-fsrc])').forEach(t => {
      t.setAttribute('data-fsrc', '1'); const g = t.parentNode; if (!groups.has(g)) groups.set(g, []); groups.get(g).push(t);
    });
    groups.forEach(list => {
      if (!list.some(t => CODE.test(t.textContent))) return;
      list.forEach((t, i) => {
        let s = t.textContent; if (!CODE.test(s)) return;
        s = s.replace(/(\d{1,2}\/\d{1,2}),?\s+T@\d+(?:\s*[–-]\s*@?\d+)?/g, 'lecture $1').replace(/;?\s*T@\d+(?:\s*[–-]\s*@?\d+)?/g, '');
        s = s.replace(/\s*\(\s*\)/g, '');                    // a bracket that held only the code
        const prev = list[i - 1], m = s.match(/^\s*([).,;]+)\s*(.*)$/);
        if (prev && m) {                                       // the code opened the line: its closing mark joins the line above
          const p = prev.textContent.replace(/[;,(]\s*$/, '').replace(/;\s*(\d{1,2}\/\d{1,2})\s*$/, '; lecture $1');
          prev.textContent = p.replace(/\s+$/, '') + (/\($/.test(prev.textContent.trim()) ? m[1].replace(/^\)/, '') : m[1]); s = m[2];
        }
        t.textContent = s;
      });
    });
  }
  const labelOf = a => {
    const raw = (a.textContent || '').replace(/\s+/g, ' ').trim(), num = raw.replace(/^(slides?|pages?|p\.)\s*/i, '');
    return (/[–-]/.test(num) ? 'Slides ' : 'Slide ') + num;
  };
  function notes(root) {
    root.querySelectorAll('figure.fig figcaption').forEach(fc => {
      if (!fc.hasAttribute('data-fsrc')) {
        fc.setAttribute('data-fsrc', '1'); fc.classList.add('fsrc-closed');
        const b = document.createElement('button'); b.type = 'button'; b.className = 'fsrc-t'; b.setAttribute('aria-expanded', 'false'); b.textContent = 'Source note';
        fc.appendChild(b);
      }
      const seen = new Set(); let any = false;
      fc.querySelectorAll('.slk').forEach(a => {
        any = true;
        const lab = labelOf(a); if (a.getAttribute('data-fsrc-lab') !== lab) a.setAttribute('data-fsrc-lab', lab);
        const key = (a.getAttribute('data-deck') || '') + ':' + lab, dup = seen.has(key); seen.add(key);
        if (a.classList.contains('fsrc-dup') !== dup) a.classList.toggle('fsrc-dup', dup);
      });
      if (fc.classList.contains('fsrc-none') === any) fc.classList.toggle('fsrc-none', !any);
    });
  }
  document.addEventListener('click', e => {
    const b = e.target && e.target.closest ? e.target.closest('.fsrc-t') : null; if (!b) return;
    const fc = b.closest('figcaption'); if (!fc) return;
    const open = fc.classList.toggle('fsrc-closed') === false;
    b.setAttribute('aria-expanded', open ? 'true' : 'false'); b.textContent = open ? 'Hide source note' : 'Source note';
  });
  let queued = false;
  const run = () => { queued = false; captions(document); notes(document); };
  new MutationObserver(() => { if (queued) return; queued = true; (window.requestAnimationFrame || setTimeout)(run); }).observe(document.body, {childList: true, subtree: true});
  run();
})();
