/* ==========================================================================
   LIKELY-MAP CHECK (likely_map.js, likely_marks_ui.js; DEENT course-level)
   ==========================================================================
   The stars of the reading tabs (Guides, Reference, Tell apart, Diseases, Drug
   list, Glossary) come from LIKELY_MAP, written by likely_map.py from
   likely_map_source.json. Reads the built page's data in node and checks:
   - every id of LIKELY_MAP is in the page: guide section ids in GUIDE_HTML, a
     block as <section id>#<n> with n a block of that section, reference ids as
     h3 ids of REFERENCE_HTML, tell rows as <h3 id>#r<n> with n a body row of
     that section, glossary term ids, Diseases card, tell-set, pair (index) and
     drug ids, Drug list ids;
   - each entry has a level 1 to 3 and a non-empty reason (a quoted reason names
     the professor and the date and its quotation is a verbatim part of the
     source's evidence);
   - the counts per tab are the analysis's "chosen" counts (likely_map_source.json
     meta; the guide count includes the one manual override, gobj-pc-3);
   - each starred block and row is still the one the analysis starred: its h5
     title or first-cell text equals the one recorded (a mismatch is a failure);
   - no star lands on a topic Dr. Smith said she would not test (other kinds of
     dermatitis, the forms of psoriasis table, the retinoid structures, the
     kinds of T cells): no starred heading, row label or term is about one;
     mentions inside a starred block are listed and are not a failure;
   - likely_marks_ui.js does nothing in a stub DOM and writes to no storage.

     DRILL_PAGE=../preview/index.html node likely_map_check.js
   ========================================================================== */
const fs = require('fs'), path = require('path');
const {check, finish, engine} = require('./check_lib');
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const NAME = 'likely_map_check.js';

const X = engine('{LIKELY_MAP, GUIDE_HTML, REFERENCE_HTML, TELL_HTML, GLOSSARY_TERMS, DZ, DRUGLIST, LIKELY_MARKS_UI: typeof LIKELY_MARKS_UI === "undefined" ? "missing" : LIKELY_MARKS_UI}');
const M = X.LIKELY_MAP, SRC = JSON.parse(here('likely_map_source.json'));
const strip = h => String(h || '').replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&rsquo;|&lsquo;/g, "'").replace(/&ndash;|&mdash;/g, '-').replace(/&frac12;/g, '1/2').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

// ---- the page's own ids
const secs = {}, blocks = {};
{ const re = /<section class="gobj"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g; let m;
  while ((m = re.exec(X.GUIDE_HTML))) {
    secs[m[1]] = strip((/<h3[^>]*>([\s\S]*?)<\/h3>/.exec(m[2]) || [])[1] || '');
    m[2].split(/(?=<div class="gpt)/).slice(1).forEach((p, i) => { blocks[m[1] + '#' + (i + 1)] = strip((/<h5[^>]*>([\s\S]*?)<\/h5>/.exec(p) || [])[1] || ''); });
  } }
const refs = {}; X.REFERENCE_HTML.split(/(?=<h3[ >])/).slice(1).forEach(p => { const id = (/^<h3[^>]*id="([^"]+)"/.exec(p) || [])[1]; if (id) refs[id] = strip((/<h3[^>]*>([\s\S]*?)<\/h3>/.exec(p) || [])[1] || ''); });
const rows = {}; X.TELL_HTML.split(/(?=<h3[ >])/).slice(1).forEach(p => {
  const id = (/^<h3[^>]*id="([^"]+)"/.exec(p) || [])[1];
  [...p.matchAll(/<tr>(?!<th)([\s\S]*?)<\/tr>/g)].forEach((r, i) => { const c = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(x => strip(x[1])); rows[id + '#r' + (i + 1)] = c.join(' | '); });
});
const terms = {}; X.GLOSSARY_TERMS.forEach(t => { terms[t.id] = t; });
const pairs = {}; (X.DZ.pairs || []).forEach((p, i) => { pairs['pair-' + i] = p; });
const dzCards = {}; X.DZ.cards.forEach(c => { dzCards[c.id] = c; });
const dzTell = {}; X.DZ.tell.forEach(c => { dzTell[c.id] = c; });
const drugs = {}; X.DRUGLIST.D.forEach(d => { drugs[d.id] = d; });
const WHERE = {guide: secs, guideBlock: blocks, reference: refs, tell: rows, gloss: terms, dzCard: dzCards, dzTell, dzPair: pairs, dzDrug: X.DZ.drugs, drug: drugs};

console.log('=== The ids are in the page ===');
for (const tab of Object.keys(WHERE)) {
  const ids = Object.keys(M[tab] || {});
  const missing = ids.filter(id => !(id in WHERE[tab]));
  check(ids.length > 0 && missing.length === 0, `${tab}: ${ids.length} starred ids all exist in the page`, missing.join(', '));
}
check(Object.keys(M).sort().join() === Object.keys(WHERE).sort().join(), 'LIKELY_MAP has these ten tabs and no other', Object.keys(M).join());

console.log('=== Levels and reasons ===');
let bad = [];
for (const tab of Object.keys(M)) for (const [id, e] of Object.entries(M[tab])) {
  if (![1, 2, 3].includes(e.lv) || typeof e.why !== 'string' || e.why.trim().length < 10) bad.push(tab + ':' + id);
}
check(bad.length === 0, 'every entry has a level of 1 to 3 and a reason', bad.join(', '));
// a reason with a quotation: Professor date: "quote"; the quotation is part of the evidence in the source
bad = [];
const norm = s => String(s).replace(/…$/, '').replace(/\s+/g, ' ').trim();
for (const tab of Object.keys(M)) for (const [id, e] of Object.entries(M[tab])) {
  const m = /^(Patel|Sikazwe|Smith) ([0-9/]+|sun recording): “(.+)”$/.exec(e.why);
  if (!m) continue;
  const q = norm(m[3]), ev = (SRC.tabs[tab][id] || {}).quotes || [];
  if (!ev.some(x => x.indexOf(q) !== -1)) bad.push(tab + ':' + id);
}
check(bad.length === 0, 'every quoted reason is a verbatim part of the evidence', bad.join(', '));
const kinds = {quote: 0, other: 0};
Object.values(M).forEach(t => Object.values(t).forEach(e => { if (/“/.test(e.why)) kinds.quote++; else kinds.other++; }));
console.log(`  (${kinds.quote} reasons quote the lecture; ${kinds.other} name the practice questions that rest on the point)`);

console.log('=== The counts are the analysis\'s ===');
for (const tab of Object.keys(SRC.meta.chosen)) {
  const n = Object.keys(M[tab] || {}).length;
  check(n === SRC.meta.chosen[tab], `${tab}: ${n} stars = ${SRC.meta.chosen[tab]} chosen by the analysis${tab === 'guide' ? ' (14 + the manual gobj-pc-3)' : ''}`);
}
check(!!M.guide['gobj-pc-3'] && /human humanized/.test(M.guide['gobj-pc-3'].why), 'the guide section gobj-pc-3 keeps its star (Smith 11/03: "is it human humanized? Is it chimeric?")');

console.log('=== Each starred block and row is the one that was starred ===');
const mism = [];
for (const [id, e] of Object.entries(SRC.tabs.guideBlock)) if (id in blocks && e.h5 != null && blocks[id] !== e.h5) mism.push(`${id}: page "${blocks[id].slice(0, 40)}" / recorded "${String(e.h5).slice(0, 40)}"`);
check(mism.length === 0, 'the h5 title of each starred block is the recorded one', mism.join('; '));
const mism2 = [];
for (const [id, e] of Object.entries(SRC.tabs.tell)) if (id in rows && e.label != null && rows[id].split(' | ')[0] !== e.label) mism2.push(`${id}: page "${rows[id].split(' | ')[0].slice(0, 40)}" / recorded "${String(e.label).slice(0, 40)}"`);
check(mism2.length === 0, 'the first cell of each starred row is the recorded one', mism2.join('; '));
const mism3 = [];
for (const [id, e] of Object.entries(SRC.tabs.gloss)) if (terms[id] && e.term != null && terms[id].term !== e.term) mism3.push(id);
check(mism3.length === 0, 'the term of each starred glossary id is the recorded one', mism3.join(', '));

console.log('=== Nothing starred is about a topic she will not test ===');
const SKIP = /other (kinds|types) of dermatitis|(types|forms|kinds|subtypes) of psoriasis|psoriasis (types|subtypes|forms)|(guttate|erythrodermic|inverse|pustular) psoriasis|nail psoriasis|retinoid structures?|structures? of the retinoids|(kinds|subsets|subtypes) of T[- ]cells?|T[- ]cell (subtypes|subsets)|stasis dermatitis|nummular|dyshidrotic|\bTH1\b|\bTH17\b|\bCD8\b/i;
const hits = [];
for (const [id, e] of Object.entries(M.guide)) if (SKIP.test(secs[id])) hits.push('guide ' + id);
for (const id of Object.keys(M.guideBlock)) if (SKIP.test(blocks[id])) hits.push('block ' + id);
for (const id of Object.keys(M.reference)) if (SKIP.test(refs[id])) hits.push('reference ' + id);
for (const id of Object.keys(M.tell)) if (SKIP.test(rows[id].split(' | ')[0])) hits.push('tell ' + id);
for (const id of Object.keys(M.gloss)) if (SKIP.test(terms[id].term + ' ' + (terms[id].also || []).join(' '))) hits.push('term ' + id);
check(hits.length === 0, 'no starred heading, row label or term is about a topic she excluded', hits.join(', '));
const incidental = [];
for (const id of Object.keys(M.guideBlock)) { const t = (SRC.tabs.guideBlock[id] || {}).h5; }
{ const re = /<section class="gobj"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g; let m;
  while ((m = re.exec(X.GUIDE_HTML))) m[2].split(/(?=<div class="gpt)/).slice(1).forEach((p, i) => {
    const id = m[1] + '#' + (i + 1); if (M.guideBlock[id]) { const t = strip(p), k = t.match(SKIP); if (k) incidental.push(id + ' (' + k[0] + ')'); }
  }); }
console.log('  (mentions inside starred blocks, not a failure: ' + (incidental.join('; ') || 'none') + ')');

console.log('=== The file does nothing without a page ===');
check(X.LIKELY_MARKS_UI === null, 'likely_marks_ui.js returns null in the stub DOM (the node checks)', String(X.LIKELY_MARKS_UI));
const code = here('likely_marks_ui.js').replace(/\/\*[\s\S]*?\*\//g, '');
check(!/localStorage|sessionStorage|indexedDB|document\.cookie/.test(code), 'likely_marks_ui.js writes to no storage');

finish(NAME);
