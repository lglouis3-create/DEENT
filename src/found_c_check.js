/* found_c_check.js: structure checks for the foundation items FC-* in q47_lam_found_c.js. */
const fs = require('fs'), path = require('path');
const QUESTIONS = [];
new Function('QUESTIONS', fs.readFileSync(path.join(__dirname, 'q47_lam_found_c.js'), 'utf8'))(QUESTIONS);
let fail = 0, n = 0;
const bad = (id, m) => { fail++; console.log('FAIL ' + id + ': ' + m); };
const ids = new Set();
for (const q of QUESTIONS) {
  n++;
  if (!/^FC-\d{3}$/.test(q.id)) bad(q.id, 'id format');
  if (ids.has(q.id)) bad(q.id, 'duplicate id'); ids.add(q.id);
  if (q.prof !== 'Lam') bad(q.id, 'prof');
  const tags = q.tags || [];
  if (!tags.includes('foundation')) bad(q.id, 'foundation tag missing');
  if (!tags.includes('recall')) bad(q.id, 'recall tag missing');
  for (const t of ['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers'])
    if (tags.includes(t)) bad(q.id, 'forbidden tag ' + t);
  if (!Array.isArray(q.options) || q.options.length !== 4) { bad(q.id, 'needs 4 options'); continue; }
  const keyed = q.options.filter(o => o.correct).length;
  if (keyed !== 1) bad(q.id, keyed + ' keyed options');
  if (q.multi) bad(q.id, 'multi not allowed');
  const lens = q.options.map(o => o.t.length);
  if (Math.max(...lens) > 2 * Math.min(...lens)) bad(q.id, 'option lengths beyond 2:1 ' + lens.join('/'));
  for (const o of q.options) {
    if (!o.why) bad(q.id, 'option without why');
    if (/\b(all|none) of the above\b/i.test(o.t)) bad(q.id, 'all/none of the above');
    if (!o.correct && /\b(always|never|only|all|none)\b/i.test(o.t)) bad(q.id, 'absolute word in a wrong option: ' + o.t);
  }
  if (!/slides? \d+/.test(q.cite || '') ) bad(q.id, 'cite without a slide');
  if (!/Lam_OticDisorders_slides\.pdf/.test(q.cite || '')) bad(q.id, 'cite without the deck file');
  if (!q.teach) bad(q.id, 'teach missing');
  if (q.stem.length > 120) bad(q.id, 'stem over 120 characters (' + q.stem.length + ')');
  if (q.lowYield && !q.note) bad(q.id, 'lowYield without note');
}
console.log(fail ? fail + ' FAIL of ' + n + ' items' : 'PASS: ' + n + ' foundation items checked');
process.exit(fail ? 1 : 0);
