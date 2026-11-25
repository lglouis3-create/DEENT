/* Checks q49_found_smith_eye.js: every item has one keyed option among four, the 'foundation' and 'recall' tags and none of the hard tags,
   a one-sentence stem, a slide citation to the Smith eye deck, option lengths within 2:1, a why on each option, no "all/none of the above"
   and no absolute words in the wrong options, and ids and concepts that no other eye file uses. Run: node found_smith_eye_check.js */
const fs = require('fs'), vm = require('vm'), path = require('path');
process.chdir(__dirname);
function load(f) { const Q = []; vm.runInNewContext(fs.readFileSync(f, 'utf8'), {QUESTIONS: Q, TOPICS: [], TOPIC_DECKS: [], console}); return Q; }
const mine = load('q49_found_smith_eye.js');
const others = [];
for (const f of fs.readdirSync('.').filter(f => /^q\d+_.*\.js$/.test(f) && f !== 'q49_found_smith_eye.js')) {
  try { others.push(...load(f).map(q => ({id: q.id, concept: q.concept, f}))); } catch (e) { /* files that need more globals are skipped */ }
}
const ids = new Set(others.map(q => q.id)), concepts = new Set(others.map(q => q.concept));
const HARD = ['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers'];
const KIND = ['brand', 'fact', 'adverse', 'class', 'mechanism', 'anatomy'];
const ABS = /\b(always|never|only|all|none|every|any|must|cannot|entirely|completely)\b/i;
let fail = 0, n = 0;
const bad = (q, m) => { fail++; console.log('FAIL ' + q.id + ': ' + m); };
const seen = new Set(), pos = [0, 0, 0, 0];
for (const q of mine) {
  n++;
  if (seen.has(q.id)) bad(q, 'duplicate id'); seen.add(q.id);
  if (ids.has(q.id)) bad(q, 'id used in another file');
  if (concepts.has(q.concept)) bad(q, 'concept used in another file');
  if (!/^FE-\d{3}$/.test(q.id)) bad(q, 'id format');
  if (q.prof !== 'Smith') bad(q, 'prof');
  const t = q.tags || [];
  if (!t.includes('foundation') || !t.includes('recall')) bad(q, 'needs foundation and recall tags');
  if (t.filter(x => KIND.includes(x)).length !== 1) bad(q, 'needs exactly one of ' + KIND.join(','));
  if (t.some(x => HARD.includes(x))) bad(q, 'hard tag present: ' + t);
  if (q.options.length !== 4) bad(q, 'needs 4 options');
  const keys = q.options.filter(o => o.correct);
  if (keys.length !== 1) bad(q, 'needs one keyed option');
  else pos[q.options.indexOf(keys[0])]++;
  if (q.multi) bad(q, 'multi not allowed');
  if (!/\?$/.test(q.stem) || (q.stem.match(/[.?!](\s|$)/g) || []).length !== 1) bad(q, 'stem must be one sentence ending in ?');
  if (q.stem.length > 130) bad(q, 'stem over 130 characters (' + q.stem.length + ')');
  if (/patient|a \d+-year/i.test(q.stem)) bad(q, 'stem looks like a case');
  const lens = q.options.map(o => o.t.length);
  if (Math.max(...lens) > 2 * Math.min(...lens)) bad(q, 'option lengths beyond 2:1 ' + lens);
  if (Math.max(...lens) === keys[0]?.t.length && lens.filter(l => l === Math.max(...lens)).length === 1 && Math.max(...lens) - Math.min(...lens) > 8) bad(q, 'key is the single longest option by more than 8 characters');
  if (new Set(q.options.map(o => o.t)).size !== 4) bad(q, 'duplicate option text');
  for (const o of q.options) {
    if (!o.why || o.why.length < 15) bad(q, 'missing why on ' + o.t);
    if (/(all|none) of the above/i.test(o.t)) bad(q, 'all/none of the above');
    if (!o.correct && ABS.test(o.t)) bad(q, 'absolute word in wrong option: ' + o.t);
    if (o.t.split(/\s+/).length > 6) bad(q, 'option longer than a short phrase: ' + o.t);
  }
  if (!q.teach || !/\.$/.test(q.teach)) bad(q, 'teach must be one sentence');
  if (!/Smith_Eye_Glaucoma_AllergicConj_DryEye\.pdf\)? slide[s]? \d+/.test(q.cite)) bad(q, 'cite needs the deck and a slide number');
  if (!/^ey-(anat|glpath|in|out|ac|de)$/.test(q.topic)) bad(q, 'topic');
  if (!q.sub || !q.concept) bad(q, 'sub and concept');
}
if (mine.length > 90) { fail++; console.log('FAIL more than 90 items'); }
console.log(`found_smith_eye_check: ${n} items, key positions A-D ${pos.join('/')}, ${fail ? fail + ' FAIL' : 'all pass'}`);
process.exit(fail ? 1 : 0);
