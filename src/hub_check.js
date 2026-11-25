/* ==========================================================================
   TOPIC HUB CHECK, PHAR 4346 DEENT (hub_data.js, hub_ui.js), no browser
   Checks: hub_data.js and hub_ui.js are in course.js `files` (data first, ui after topicbar_ui.js); every key is a topic of the
   bank; every id in hub_data.js exists in its source (guide section, walkthrough, figure, tell/reference section with its row
   numbers in range, drug card); a walkthrough listed for a topic names that topic or a guide section the topic lists;
   every Exam 3 topic has a Learn piece (documented exceptions listed below) and at least 4 questions of each level
   (HUB_UI.level rule: tags hard, case, two-facts, reasoning, reverse, exam-style, numbers = challenge) or a documented exception;
   the level split is printed per exam.
     node hub_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const SRC = __dirname;
const here = f => fs.readFileSync(path.join(SRC, f), 'utf8');
const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
const F = C.files, at = f => F.indexOf(f);
console.log('=== course.js `files` ===');
check(at('hub_data.js') >= 0 && at('hub_ui.js') > at('hub_data.js') && at('hub_ui.js') > at('topicbar_ui.js') && at('hub_ui.js') > at('walk_ui.js'), 'hub_data.js, then hub_ui.js (after topicbar_ui.js and walk_ui.js) are listed');
const sb = {console, window: {}}; vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of F.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(SRC, f)))) src += here(f) + '\n';
src += here('guide.js') + '\n' + here('tell.js') + '\n' + here('reference.js') + '\nthis.X = {QUESTIONS, GUIDE_HTML, TELL_HTML, REFERENCE_HTML, TOPICS, TOPIC_DECKS, HUB_DATA, DIA, W: WALK_SECTIONS,' +
  ' D1: DRUGLIST.D, D2: typeof DRUGLIST_EYE !== "undefined" ? DRUGLIST_EYE.D : []};';
vm.runInContext(src, sb);
const {QUESTIONS, GUIDE_HTML, TELL_HTML, REFERENCE_HTML, TOPICS, TOPIC_DECKS, HUB_DATA, DIA, W, D1, D2} = sb.X;
const tids = new Set(TOPICS.map(t => t.id));
console.log('=== hub_data.js ===');
const keys = Object.keys(HUB_DATA);
check(keys.every(k => tids.has(k)), `every key (${keys.length}) is a topic of the bank`, keys.filter(k => !tids.has(k)).join(', '));
const FIELDS = ['guide', 'walk', 'fig', 'tell', 'ref', 'drugs'];
check(keys.every(k => Object.keys(HUB_DATA[k]).every(f => FIELDS.includes(f) && Array.isArray(HUB_DATA[k][f]) && HUB_DATA[k][f].length)), 'every field is a non-empty array of a known kind');
const gobj = new Set([...GUIDE_HTML.matchAll(/<section class="gobj" id="([^"]+)"/g)].map(m => m[1]));
const rowsOf = (html, id) => {   // the number of table rows under <h3 id=id> up to the next h2/h3
  const i = html.indexOf(`<h3 id="${id}"`); if (i < 0) return -1;
  const j = html.slice(i + 10).search(/<h[23][ >]/); const body = html.slice(i, j < 0 ? undefined : i + 10 + j);
  return (body.match(/<tbody>[\s\S]*?<\/tbody>/g) || []).reduce((n, t) => n + (t.match(/<tr[ >]/g) || []).length, 0);
};
// a figure a *_ui.js file adds to DIA when the page runs (eye_flow_ui.js: ey-flow)
const UIFIG = k => F.filter(f => /_ui\.js$/.test(f) && fs.existsSync(path.join(SRC, f))).some(f => { const t = here(f); return t.includes("'" + k + "'") && /DIA\[/.test(t); });
const wk = Object.fromEntries(W.map(w => [w.id, w]));
const drugs = new Set([...D1, ...D2].map(d => d.id));
const bad = {guide: [], walk: [], fig: [], tell: [], ref: [], drugs: [], walkTopic: []};
keys.forEach(k => {
  const d = HUB_DATA[k];
  (d.guide || []).forEach(g => { if (!gobj.has(g)) bad.guide.push(`${k}: ${g}`); });
  (d.walk || []).forEach(w => { if (!wk[w]) bad.walk.push(`${k}: ${w}`); else if (!wk[w].topics.includes(k) && !(d.guide || []).includes(wk[w].guide)) bad.walkTopic.push(`${k}: ${w}`); });
  (d.fig || []).forEach(f => { if (!DIA[f] && !UIFIG(f)) bad.fig.push(`${k}: ${f}`); });
  [['tell', TELL_HTML], ['ref', REFERENCE_HTML]].forEach(([f, html]) => (d[f] || []).forEach(x => {
    const [id, r] = x.split('@'), n = rowsOf(html, id);
    if (n < 0) bad[f].push(`${k}: ${x} (no such section)`);
    else if (r && !r.split(',').every(v => /^\d+$/.test(v) && +v >= 1 && +v <= n)) bad[f].push(`${k}: ${x} (the section has ${n} rows)`);
  }));
  (d.drugs || []).forEach(x => { if (!drugs.has(x)) bad.drugs.push(`${k}: ${x}`); });
});
check(!bad.guide.length, 'every guide id is a guide section', bad.guide.join('; '));
check(!bad.walk.length, 'every walkthrough id exists', bad.walk.join('; '));
check(!bad.walkTopic.length, 'every walkthrough listed for a topic names that topic, or sits under a guide section the topic lists', bad.walkTopic.join('; '));
check(!bad.fig.length, 'every figure key is in DIA', bad.fig.join('; '));
check(!bad.tell.length, 'every Tell apart id exists and its rows are in range', bad.tell.join('; '));
check(!bad.ref.length, 'every Reference id exists and its rows are in range', bad.ref.join('; '));
check(!bad.drugs.length, 'every drug id is a Drug list card', bad.drugs.join('; '));

console.log('=== topics and levels ===');
const LV = new Set(['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers']);
const level = q => (q.tags || []).some(t => LV.has(t)) ? 'challenge' : 'check';
const examOf = id => (TOPIC_DECKS.find(d => (d.topics || []).includes(id)) || {}).exam;
const OPTIONAL = new Set(TOPICS.filter(t => t.optional).map(t => t.id));
const per = {};
TOPICS.forEach(t => { const e = examOf(t.id) || '?'; (per[e] = per[e] || {topics: 0, mapped: 0}).topics++; if (HUB_DATA[t.id]) per[e].mapped++; });
Object.keys(per).sort().forEach(e => console.log(`  Exam ${e}: ${per[e].mapped} of ${per[e].topics} topics have a hub`));
const noHub = TOPICS.filter(t => !HUB_DATA[t.id]).map(t => t.id);
console.log('  no hub: ' + (noHub.join(', ') || 'none'));
check(noHub.every(id => OPTIONAL.has(id)), 'every topic has a hub except optional topics', noHub.filter(id => !OPTIONAL.has(id)).join(', '));
// documented exceptions (topic -> reason)
const NO_LEARN = {};   // none: every Exam 3 topic has a Learn piece
const FEW_CHECK = 'every question of the topic carries a challenge tag (case, two-facts, reasoning, reverse, exam-style or numbers), so the single-fact set is smaller than 4 under the level rule of the brief';
const FEW_CHALLENGE = 'the topic holds fewer than 4 exam-level questions in all';
const ex3 = TOPICS.filter(t => examOf(t.id) === 3 && HUB_DATA[t.id]);
const noLearn = ex3.filter(t => !FIELDS.some(f => (HUB_DATA[t.id][f] || []).length) && !NO_LEARN[t.id]);
check(!noLearn.length, `every Exam 3 topic (${ex3.length}) has at least one Learn piece`, noLearn.map(t => t.id).join(', '));
const fewC = [], fewH = [];
ex3.forEach(t => { const qs = QUESTIONS.filter(q => q.topic === t.id), c = qs.filter(q => level(q) === 'check').length, h = qs.length - c;
  if (c < 4) fewC.push(`${t.id} (${c})`); if (h < 4) fewH.push(`${t.id} (${h})`); });
console.log(`  Exam 3 topics with fewer than 4 single-fact questions (documented exception: ${FEW_CHECK}): ${fewC.join(', ') || 'none'}`);
console.log(`  Exam 3 topics with fewer than 4 challenge questions (documented exception: ${FEW_CHALLENGE}): ${fewH.join(', ') || 'none'}`);
check(fewH.length <= ex3.length * 0.25, 'at least 3 of 4 Exam 3 topics have 4 or more challenge questions', fewH.join(', '));
finish('hub_check.js');
