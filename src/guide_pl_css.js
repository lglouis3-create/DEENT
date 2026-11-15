/* guide_pl_css.js: styles for Dr. Patel's slide-by-slide Guides sections (course-level, Louis 2026-11-15):
   the status line under each slide heading, the "transcript only" mark, and the closed group that holds
   one deck's slides. Styles only; the markup is in guide.js. Nothing here reads or writes progress,
   history or any other stored data. */
(function guidePlCss(){
  if (typeof document === 'undefined' || !document.createElement || !document.head) return;
  const CSS = `
.gobj .g2-status{margin:-4px 0 10px;font-size:12.5px;line-height:1.4;font-weight:400;color:var(--text-dim,#5A6878);max-width:none}
.gobj .g2-status b{font-weight:700;color:var(--text-dim,#5A6878);letter-spacing:.02em;margin-right:6px}
.gobj .g2-block>h5+.g2-status:last-child{margin:-6px 0 0;font-size:12px;opacity:.85}
.gobj .g2-block>h5+.g2-status:last-child b{font-weight:600}
.gobj .g2-tonly{display:inline;font-size:12px;font-weight:400;font-style:normal;color:var(--text-dim,#5A6878);text-decoration:underline dotted;text-underline-offset:3px;cursor:help}
.gdetails{margin:20px 0 28px;border:1px solid var(--line,#D3DAE3);border-radius:var(--r,10px);background:var(--paper,#fff)}
.gdetails>summary{display:flex;align-items:center;gap:10px;min-height:44px;box-sizing:border-box;padding:10px 14px;cursor:pointer;list-style:none;font-weight:700;font-size:15.5px;line-height:1.35;color:var(--text)}
.gdetails>summary::-webkit-details-marker{display:none}
.gdetails>summary::after{content:'';flex:none;margin-left:auto;width:8px;height:8px;border-right:2px solid var(--accent,#2F5FA8);border-bottom:2px solid var(--accent,#2F5FA8);transform:rotate(45deg);transition:transform .15s}
.gdetails[open]>summary::after{transform:rotate(-135deg)}
.gdetails>summary:focus-visible{outline:3px solid var(--accent,#2F5FA8);outline-offset:2px}
.gdetails[open]>summary{border-bottom:1px solid var(--line,#D3DAE3)}
.gdetails>section.gobj{margin-left:0;margin-right:0;padding-left:14px;padding-right:14px;min-width:0}
@media (prefers-reduced-motion: reduce){.gdetails>summary::after{transition:none}}`;
  if (document.getElementById('guideplcss')) return;
  const s = document.createElement('style'); s.id = 'guideplcss'; s.textContent = CSS; document.head.appendChild(s);
})();
