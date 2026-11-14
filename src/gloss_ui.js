/* ==========================================================================
   GLOSSARY: A TERM THAT IS ITS CAPITALS ONLY, PHAR 4346 DEENT
   (course-level, 2026-11-13; temporary until the kit's glossify() can match
   an entry with its case kept)
   ==========================================================================
   The core's glossify() (views.js) adds each glossary.js definition at the
   term's first use in a question's explanation, and looks for every term
   without regard to case. The gloss of RARE (retinoic acid response element)
   was therefore added to the ordinary word "rare" ("rare cases of lymphoma",
   "Rare non-inflammatory lesions") in 16 questions (review finding B-F10).

   An entry of glossary.js marked `cs: true` is glossed only where the text has
   it in the entry's own case. glossify() is wrapped, the way jump_ui.js wraps
   jump(): for each such entry not yet glossed in the question, when the first
   place the core would take in this text is not in the entry's own case, the
   entry is held back for this one call (the core passes over an entry whose
   key is in `seen`) and released after it. A later text of the same question
   that has the capitals still gets the gloss, once. A text that has the word
   in another case before the capitals gets no gloss for that entry (no such
   text in the bank on 2026-11-13; walk_test.js lists any).

   The page's one script declares glossify() further down (views.js); the
   declaration is in force from the script's start, and the core calls it only
   while drawing an answered question, so the wrapper is in place before the
   first call. No RegExp inline modifier is used (older Safari stops on them).
   Reads GLOSS; changes no text of its own and stores nothing. In the node
   checks' sandbox it does the same and needs no page. */
const GLOSS_UI = (() => {
  if (typeof glossify !== 'function') return null;
  const core = glossify;
  // the keys of the case-kept entries whose first match in this text is in another case
  const heldFor = (txt, seen, self) => {
    const out = [], s = String(txt);
    for (const g of GLOSS) {
      if (!g || !g.cs || seen.has(g.k) || g.skip.test(self)) continue;   // glossed already, or defined in the question's own words
      const any = s.match(new RegExp('\\b(' + g.p + ')', 'i'));          // the place the core takes
      if (!any) continue;
      const own = s.match(new RegExp('\\b(' + g.p + ')'));               // the same pattern with its case kept
      if (!own || own.index !== any.index || own[0] !== any[0]) out.push(g.k);
    }
    return out;
  };
  const wrapped = function (txt, seen, self) {
    let held = [];
    try { if (seen && typeof seen.has === 'function') held = heldFor(txt, seen, self); } catch (e) { held = []; }
    held.forEach(k => seen.add(k));
    try { return core.apply(this, arguments); }
    finally { held.forEach(k => seen.delete(k)); }
  };
  try { glossify = wrapped; } catch (e) { return null; }
  // for the checks (walk_test.js): the core's own function, to compare what each gives
  return {core: (txt, seen, self) => core(txt, seen, self)};
})();
