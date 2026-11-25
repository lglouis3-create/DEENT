/* found_a_check.js: structure checks for the foundation items of q45_lam_found_a.js (FA-*): one keyed option of four, the 'foundation' and 'recall' tags,
   a cite that names a slide, no banned tags, no absolute-word or all/none options, option lengths within 2:1. Run from src/: node found_a_check.js */
const fs = require('fs'), vm = require('vm');
const sb = {QUESTIONS: []}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(__dirname + '/q45_lam_found_a.js', 'utf8'), sb);
const Q = sb.QUESTIONS; let bad = 0, ids = new Set();
const fail = (q, m) => { console.log('FAIL ' + q.id + ': ' + m); bad++; };
const BANNED = ['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers'];
const KINDS = ['brand', 'directions', 'counsel', 'fact', 'dose', 'adverse', 'class'];
for (const q of Q) {
  if (ids.has(q.id)) fail(q, 'duplicate id'); ids.add(q.id);
  if (!/^FA-\d{3}$/.test(q.id)) fail(q, 'id format');
  if (q.prof !== 'Lam' || q.tier !== 'new') fail(q, 'prof/tier');
  const o = q.options || [];
  if (o.length !== 4) fail(q, 'options ' + o.length);
  if (o.filter(x => x.correct).length !== 1) fail(q, 'keyed options ' + o.filter(x => x.correct).length);
  if (new Set(o.map(x => x.t)).size !== o.length) fail(q, 'duplicate option text');
  if (o.some(x => !x.why || x.why.length < 8)) fail(q, 'missing why');
  if (!q.teach || !q.stem) fail(q, 'missing stem/teach');
  const t = q.tags || [];
  if (!t.includes('foundation') || !t.includes('recall')) fail(q, 'tags foundation+recall');
  if (t.filter(x => KINDS.includes(x)).length !== 1) fail(q, 'needs exactly one kind tag');
  if (t.some(x => BANNED.includes(x))) fail(q, 'banned tag');
  if (!/slides? \d+/.test(q.cite || '')) fail(q, 'cite names no slide');
  if (/\b(all|none) of the above\b/i.test(o.map(x => x.t).join(' '))) fail(q, 'all/none of the above');
  if (q.stem.length > 140) fail(q, 'stem length ' + q.stem.length);
  const L = o.map(x => x.t.length), mx = Math.max(...L), mn = Math.min(...L);
  // option lengths within 2:1 (a set of short single words, all at most 14 characters, is exempt: "Gout" against "Psoriasis")
  if (mx / mn > 2 && mx > 14) fail(q, 'option length ratio ' + (mx / mn).toFixed(2) + ' (' + o.map(x => x.t).join(' | ') + ')');
  // the key must not be the longest option by a clear margin
  const key = o.find(x => x.correct), other = Math.max(...o.filter(x => !x.correct).map(x => x.t.length));
  if (key && key.t.length > 1.4 * other && key.t.length > 14) fail(q, 'key is much longer than every distractor (' + key.t + ')');
  if (q.lowYield && !q.note) fail(q, 'lowYield without note');
}
console.log(Q.length + ' items, ' + bad + ' failures');
process.exit(bad ? 1 : 0);
