/* ==========================================================================
   MECHANISM STEP-THROUGHS IN THE ANSWER EXPLANATIONS (Dr. Smith)
   ==========================================================================
   Loaded after the question files. Each question listed here shows the drawn
   step-through of moa_figs.js in "The concept behind this", through the core's
   own `svg` field of a question (drawn only after the question is answered, in
   the drill and in a finished paper's review). Nothing in the questions'
   wording, keys or options changes, and nothing is stored.
   ========================================================================== */
(() => {
  if (typeof QUESTIONS === 'undefined' || typeof DIA === 'undefined') return;
  const LINKS = {
    'fig-pde4-camp': ['L2-080', 'L2-081', 'L2-082', 'L2-115'],
    'fig-ribosome': ['L2-110', 'L2-111', 'L2-112', 'L2-113', 'L3-001', 'L3-011', 'L3-016', 'L3-019', 'L3-109'],
    'fig-folate-path': ['L3-020', 'L3-021', 'L3-022', 'L3-023'],
    'fig-folate-cycle': ['L3-045', 'L3-047', 'L3-048'],
    'fig-costim': ['L3-055', 'L3-056', 'L3-057', 'L3-058', 'L3-059', 'L3-060', 'L3-061', 'L3-062', 'L3-063'],
  };
  const byId = new Map(QUESTIONS.map(q => [q.id, q]));
  for (const [fig, ids] of Object.entries(LINKS)) {
    if (typeof DIA[fig] !== 'string') continue;
    for (const id of ids) { const q = byId.get(id); if (q && !q.svg) q.svg = DIA[fig]; }
  }
})();
