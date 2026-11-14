/* refsep_ui.js: each section of Reference, Guides and Tell apart is set apart from the next
   (course-level, Louis 2026-11-13). Styles only: a rule and extra space above each section
   heading, and space between a section's table, note and figure. Nothing here reads or writes
   progress, history or any other stored data. */
(function refsepUi(){
  if (typeof document === 'undefined' || !document.createElement || !document.head) return;
  const CSS = `
#v-ref h3,#v-guide h3,#v-tell h3{margin:44px 0 14px;padding-top:20px;border-top:3px solid var(--line,#c9d1de)}
#v-ref .refnav-wrap+h3,#v-guide .refnav-wrap+h3,#v-tell .refnav-wrap+h3,
#v-ref .rfbody>h3:first-child,#v-guide .rfbody>h3:first-child,#v-tell .rfbody>h3:first-child{margin-top:18px}
#v-ref h3+*,#v-guide h3+*,#v-tell h3+*{margin-top:0}
#v-ref h4{margin:30px 0 6px;padding-left:10px;border-left:4px solid var(--accent,#2F5FA8);font-size:16px}
#v-ref figure,#v-ref .dn,#v-ref .stepper,#v-guide figure,#v-tell figure{margin-top:28px}
#v-ref table+p,#v-ref .tbox+p,#v-guide table+p,#v-tell table+p{margin-top:22px}`;
  try {
    if (!document.getElementById('refsepcss')) {
      const s = document.createElement('style'); s.id = 'refsepcss'; s.textContent = CSS; document.head.appendChild(s);
    }
  } catch (e) {}
})();
