/* ==========================================================================
   MODES CHECK (modes_ui.js; Learn and Exam mode)
   ==========================================================================
   Reads the course's own source files in node (no build needed) and checks:
   - modes_ui.js is in course.js `files`, before search_ui.js;
   - its challenge tags are exactly: hard, case, two-facts, reasoning, reverse, exam-style, numbers;
   - every question gets exactly one level (foundation or challenge) and the level counts add up;
   - the file keeps no dark-mode CSS, writes no storage but `<NS>:mode`, and shows no T@ code or file name to a student;
   - REPORT: per topic of Exam 3 how many foundation and challenge questions there are, and which topics have fewer
     than 4 foundation questions (in Learn mode such a topic's quiz starts with whatever foundation there is, or with
     all of its questions when it has none).

     node modes_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NAME = 'modes_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const src = here('modes_ui.js');

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
check(C.files.includes('modes_ui.js') && C.files.indexOf('modes_ui.js') < C.files.indexOf('search_ui.js'), 'course.js `files` lists modes_ui.js before search_ui.js');
const m = src.match(/const CHALLENGE = \[([^\]]*)\]/);
const tags = m ? m[1].split(',').map(s => s.trim().replace(/'/g, '')) : [];
check(JSON.stringify(tags) === JSON.stringify(['hard', 'case', 'two-facts', 'reasoning', 'reverse', 'exam-style', 'numbers']), 'the challenge tags are the seven named', tags.join());
check(!/prefers-color-scheme|data-theme/.test(src), 'no dark-mode CSS');
const sets = src.match(/localStorage\.setItem\([^)]*\)/g) || [];
check(sets.length === 1 && /KEY\(\)/.test(sets[0]) && /ns \+ ':mode'/.test(src), 'the only storage write is <NS>:mode', sets.join(' | '));
check(!/DB\.|record\(|markShaky|markGuessed|markSure|localStorage\.removeItem|sessionStorage/.test(src.replace(/\/\*[\s\S]*?\*\//, '')), 'no progress, history or scheduler call');
check(!/T@|\.pdf|\.js'/.test(src.split('\n').filter(l => /innerHTML|textContent|NOTES|insertAdjacentHTML/.test(l)).join('\n')), 'no T@ code or file name in the text a student sees');

const files = C.files.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(__dirname, f)));
const sb = {console, window: {}};
vm.createContext(sb);
let all = here('course.js') + '\n';
for (const f of files) all += here(f) + '\n';
all += '\nthis.X = {QUESTIONS, TOPICS};';
vm.runInContext(all, sb);
const {QUESTIONS, TOPICS} = sb.X;
const level = q => (q.tags || []).some(t => tags.includes(t)) ? 'challenge' : 'foundation';
const f = QUESTIONS.filter(q => level(q) === 'foundation').length, c = QUESTIONS.filter(q => level(q) === 'challenge').length;
check(f + c === QUESTIONS.length && QUESTIONS.length > 2000, `every question has one level: ${f} foundation + ${c} challenge = ${QUESTIONS.length}`);

const lecOf = q => (C.lectures || []).find(l => String(q.cite).includes(l.deck));
const rows = [];
TOPICS.forEach(t => {
  const qs = QUESTIONS.filter(q => q.topic === t.id && (lecOf(q) || {}).exam === 3);
  if (!qs.length) return;
  const fo = qs.filter(q => level(q) === 'foundation').length;
  rows.push({id: t.id, name: t.name, n: qs.length, f: fo, ch: qs.length - fo});
});
check(rows.length > 20, `Exam 3 has ${rows.length} topics with questions`);
console.log('--- Exam 3 topics: foundation / challenge ---');
rows.forEach(r => console.log(`  ${r.f >= 4 ? 'ok ' : 'LOW'}  ${r.id.padEnd(14)} ${String(r.f).padStart(3)} / ${String(r.ch).padStart(3)}  ${r.name.slice(0, 60)}`));
const low = rows.filter(r => r.f < 4);
console.log(`REPORT: ${rows.length - low.length} of ${rows.length} Exam 3 topics have 4 or more foundation questions; fewer than 4: ${low.map(r => r.id + '(' + r.f + ')').join(', ')}`);
finish(NAME);
