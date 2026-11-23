/* figwide_ui.js: step-through figures in the Diagrams tab get the room they need (course-level; Louis, 2026-11-23:
   "why [is] each diagram confined in that small squared space ... make their space wider ... I would like the user to see
   the transcript narration as well as things are being explained").
   1. A step-through figure (one with step buttons) takes a whole row of the Diagrams grid instead of one 360 px square.
   2. From 760 px wide the drawing is on the left (up to 560 px) and the words being read, the step buttons and the
      slide buttons are in a column on its right, so the narration is in view beside the drawing while it plays.
   3. On a phone the narration panel stays at the bottom of the screen while the figure is on screen, so the words
      stay in view while the drawing changes.
   CSS only: no markup is moved, so the figures' own scripts and checks see the same elements. Nothing is stored. */
(function figwideUi(){
  if (typeof document === 'undefined' || !document.head || document.getElementById('figwidecss')) return;
  const s = document.createElement('style'); s.id = 'figwidecss';
  s.textContent = `
#v-diagrams .diagrid>div:has(figure.fig>[data-anim]){grid-column:1/-1}
#v-diagrams figure.fig:has(>[data-anim]) .dnsay:not([hidden]){position:sticky;bottom:8px;z-index:4;max-height:38vh;overflow-y:auto;box-shadow:0 4px 14px rgba(0,0,0,.18)}
#v-diagrams figure.fig:has(>[data-anim]) .dnsay-t{font-size:15.5px;line-height:1.55}
@media (min-width:760px){
  #v-diagrams figure.fig:has(>[data-anim]){display:grid;grid-template-columns:minmax(0,500px) minmax(280px,1fr);column-gap:22px;align-items:start;max-width:none}
  #v-diagrams figure.fig:has(>[data-anim])>.dnpurpose{grid-column:1/-1;grid-row:1}
  #v-diagrams figure.fig:has(>[data-anim])>svg{grid-column:1;grid-row:2/span 4;width:100%;height:auto}
  #v-diagrams figure.fig:has(>[data-anim])>[data-anim]{grid-column:2;grid-row:2}
  #v-diagrams figure.fig:has(>[data-anim])>.dnsay{grid-column:2;grid-row:3;margin:8px 0 0}
  #v-diagrams figure.fig:has(>[data-anim])>.dnsay:not([hidden]){top:76px;bottom:auto;max-height:calc(100vh - 100px);box-shadow:none}
  #v-diagrams figure.fig:has(>[data-anim])>.dnsay .dnsay-t{font-size:17px}
  #v-diagrams figure.fig:has(>[data-anim])>figcaption{grid-column:2;grid-row:4}
}`;
  document.head.appendChild(s);
  /* the sentence being read stays inside the narration panel's view when the panel scrolls */
  if (typeof MutationObserver === 'function') new MutationObserver(ms => {
    for (const m of ms) { const t = m.target;
      if (t.classList && t.classList.contains('dnon') && t.closest) { const box = t.closest('.dnsay'); if (box && box.scrollHeight > box.clientHeight + 2) box.scrollTop = Math.max(0, t.offsetTop - box.clientHeight / 3); } }
  }).observe(document.body, {subtree: true, attributes: true, attributeFilter: ['class']});
})();
