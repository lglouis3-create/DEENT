/* found_smith_skin_check.js: structure checks for q48_found_smith_skin.js (the foundation items for Dr. Smith's skin lectures).
   Each item: ids FS-001 onward, prof Smith, tier new, tags 'foundation' and 'recall' plus one category tag and none of the hard tags,
   a stem of one sentence (about 125 characters or fewer), four options with exactly one key, each with a why, option lengths within 2:1,
   no absolute word in a wrong option, a teach sentence, and a cite that names a slide. Also: course.js lists the file. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = __dirname;
const sb = {QUESTIONS: [], TOPICS: [], console}; sb.globalThis = sb; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(dir, 'q48_found_smith_skin.js'), 'utf8'), sb, {filename: 'q48_found_smith_skin.js'});
const Q = sb.QUESTIONS;
const BAD_TAGS = new Set(['hard','case','two-facts','reasoning','reverse','exam-style','numbers']);
const CATS = new Set(['brand','directions','counsel','fact','dose','adverse','class','mechanism']);
const ABS = /\b(all|none|always|never|only|every|entirely|completely|any|no one)\b/i;
let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log('  FAIL ' + msg); } };
const seen = new Set(); let longest = 0;
Q.forEach((q, i) => {
  const w = q.id;
  ok(q.id === 'FS-' + String(i + 1).padStart(3, '0'), `${w}: id out of sequence`);
  ok(!seen.has(q.id), `${w}: duplicate id`); seen.add(q.id);
  ok(q.prof === 'Smith' && q.tier === 'new', `${w}: prof/tier`);
  ok(q.tags.includes('foundation') && q.tags.includes('recall'), `${w}: needs foundation and recall tags`);
  ok(q.tags.filter(t => CATS.has(t)).length === 1, `${w}: exactly one category tag`);
  ok(!q.tags.some(t => BAD_TAGS.has(t)), `${w}: has a hard-level tag`);
  ok(q.stem.length <= 125, `${w}: stem is ${q.stem.length} characters`);
  ok((q.stem.match(/[.?!](\s|$)/g) || []).length === 1 && /[?.]$/.test(q.stem), `${w}: stem is not one sentence`);
  ok(q.options.length === 4, `${w}: ${q.options.length} options`);
  ok(q.options.filter(o => o.correct).length === 1, `${w}: needs exactly one key`);
  ok(q.options.every(o => o.why && o.why.length > 10), `${w}: an option has no why`);
  const L = q.options.map(o => o.t.length);
  ok(Math.max(...L) <= 2 * Math.min(...L), `${w}: option lengths ${L.join('/')} beyond 2:1`);
  const key = q.options.find(o => o.correct);
  const others = Math.max(...q.options.filter(o => !o.correct).map(o => o.t.length));
  if (key.t.length > others) longest++;
  ok(key.t.length <= 1.25 * others, `${w}: the key (${key.t.length}) is more than 25% longer than the longest wrong option (${others})`);
  ok(q.options.every(o => !o.correct ? !ABS.test(o.t) : true), `${w}: absolute word in a wrong option`);
  ok(q.options.every(o => !/all of the above|none of the above/i.test(o.t)), `${w}: all/none of the above`);
  ok(q.options.every(o => o.t.split(/\s+/).length <= 8), `${w}: an option is longer than a short phrase`);
  ok(q.teach && /[.]$/.test(q.teach.trim()), `${w}: teach`);
  ok(/\.pdf\)/.test(q.cite) && /slide \d+/.test(q.cite), `${w}: cite must name the deck file and a slide`);
  ok(!/\b(Retin-A|Compound W|Duofilm|Freezone|Neoral|Sandimmune|Evoclin)\b/.test(q.stem + q.options.map(o => o.t).join(' ')) || q.tags.includes('brand'), `${w}: a brand name outside a brand item`);
});
ok(longest <= 0.4 * Q.length, `the key is the longest option in ${longest} of ${Q.length} items`);
ok(!/\b(Retin-A|Compound W|Neoral|Evoclin)\b/.test(Q.filter(q => !q.tags.includes('brand')).map(q => q.stem + q.options.map(o => o.t).join(' ')).join(' ')), 'brand name in a non-brand item');
const course = fs.readFileSync(path.join(dir, 'course.js'), 'utf8');
ok(/'q48_found_smith_skin\.js'/.test(course), 'course.js does not list q48_found_smith_skin.js');
console.log(`found_smith_skin_check: ${Q.length} items, ${pass} checks passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
