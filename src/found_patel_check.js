/* found_patel_check.js: checks the foundation items of q51_found_patel.js (ids FP-*).
   Each item: one keyed option, four options, tags 'foundation' and 'recall' plus one kind tag and none of the hard tags,
   a slide cite, a teach line, a why on every option, option lengths within 2:1, the key not the strictly longest option,
   a one-sentence stem of at most 130 characters, no absolute words in the wrong options, valid topic and sub.
   Run: node found_patel_check.js */
const fs = require('fs'), path = require('path');
global.window = global; global.TOPICS = []; global.TOPIC_DECKS = []; global.QUESTIONS = [];
const files = ['q7_L05.js','q12_L06.js','q13_L07.js','q14_L05_harder.js','q15_L08_outdoor.js','q16_L08_sun.js','q17_L08_wound.js','q18_L08_warts.js','q21_L08_gaps.js','q51_found_patel.js'];
for (const f of files) (0, eval)(fs.readFileSync(path.join(__dirname, f), 'utf8').replace(/^const /gm, 'var '));
const HARD = ['hard','case','two-facts','reasoning','reverse','exam-style','numbers'];
const KINDS = ['brand','directions','counsel','fact','dose','adverse','class','referral'];
const ABS = /\b(always|never|all of the above|none of the above|every|must|completely)\b/i;
const items = QUESTIONS.filter(q => /^FP-\d+$/.test(q.id));
let pass = 0, fail = 0;
const bad = (q, m) => { fail++; console.log('FAIL ' + q.id + ': ' + m); };
const ids = new Set(), concepts = new Set(), stems = new Set();
const subs = {}; TOPICS.forEach(t => { subs[t.id] = (t.subs || []).map(s => s.id); });
if (items.length < 1 || items.length > 100) { fail++; console.log('FAIL count ' + items.length); }
for (const q of items) {
  let ok = true; const f = m => { ok = false; bad(q, m); };
  if (ids.has(q.id)) f('duplicate id'); ids.add(q.id);
  if (concepts.has(q.concept)) f('duplicate concept'); concepts.add(q.concept);
  if (stems.has(q.stem)) f('duplicate stem'); stems.add(q.stem);
  if (q.prof !== 'Patel' || q.tier !== 'new') f('prof/tier');
  const tg = q.tags || [];
  if (!tg.includes('foundation') || !tg.includes('recall')) f('tags foundation/recall');
  if (tg.filter(t => KINDS.includes(t)).length !== 1) f('exactly one kind tag');
  if (tg.some(t => HARD.includes(t))) f('hard tag');
  if (!subs[q.topic]) f('unknown topic ' + q.topic); else if (!subs[q.topic].includes(q.sub)) f('unknown sub ' + q.topic + '.' + q.sub);
  const o = q.options || [];
  if (o.length !== 4) f('options ' + o.length);
  if (o.filter(x => x.correct).length !== 1) f('keyed options');
  if (o.some(x => !x.why || x.why.length < 15)) f('missing why');
  if (!q.teach) f('teach');
  if (!/slide[s]? \d/.test(q.cite || '') || !/\.pdf\)/.test(q.cite)) f('cite');
  if ((q.stem.match(/[.?!](\s|$)/g) || []).length > 1) f('stem is more than one sentence');
  if (q.stem.length > 130) f('stem length ' + q.stem.length);
  const lens = o.map(x => x.t.length);
  if (Math.max(...lens) > 2 * Math.min(...lens) && Math.max(...lens) > 18) f('option lengths ' + lens.join('/'));
  const key = o.find(x => x.correct);
  const wl = o.filter(x => !x.correct).map(x => x.t.length);
  if (key && key.t.length > 1.25 * Math.max(...wl) && key.t.length - Math.max(...wl) >= 4) f('key is clearly the longest option');
  if (o.filter(x => !x.correct).some(x => ABS.test(x.t))) f('absolute word in a wrong option');
  if (new Set(o.map(x => x.t.toLowerCase())).size !== 4) f('duplicate option text');
  if (ok) pass++;
}
console.log(`found_patel_check: ${items.length} items, ${pass} pass, ${fail} fail`);
process.exit(fail ? 1 : 0);
