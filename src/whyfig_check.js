/* ==========================================================================
   REACTION-FIGURE MAP CHECK, PHAR 4346 DEENT (why_figs.js, read by why_ui.js)
   --------------------------------------------------------------------------
   Checks, with no browser:
   - course.js `files` lists reactions.js and why_figs.js before why_ui.js;
   - every mapped id is a question in the bank, Dr. Sikazwe's (the figures are
     drawn from his slides), in an Exam 1 pool: not lowYield, not unassigned,
     not in an optional topic, not one of the items held out of scored
     practice (reviews/OPEN_QUESTIONS.md);
   - every figure id is a reaction figure in DIA (reactions.js) with a Guide
     anchor (guide.js, the target of "Open in Guide");
   - a step-through figure has a step in 1..its step count; a one-picture
     figure has no step;
   - every entry gives its reason (`why`);
   - why_figs.js touches no storage and why_ui.js still does nothing in a stub
     DOM (it shows the figure only after the answer: whyfig_test in the
     browser test covers that).

     node whyfig_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NAME = 'whyfig_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const HELD = ['L1-062', 'L2-015', 'L3-026', 'S3-081'];

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
const F = C.files, at = f => F.indexOf(f);
console.log('=== course.js `files` ===');
check(at('why_figs.js') >= 0 && at('reactions.js') >= 0 && at('reactions.js') < at('why_figs.js') && at('why_figs.js') < at('why_ui.js'),
  'reactions.js, then why_figs.js, then why_ui.js');

const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of F.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(__dirname, f)))) src += here(f) + '\n';
src += '\nthis.X = {QUESTIONS, TOPICS, DIA, WHY_FIGS, RX: typeof RX_FIGS === "undefined" ? {} : RX_FIGS};';
vm.runInContext(src, sb);
const {QUESTIONS, TOPICS, DIA, WHY_FIGS: M, RX} = sb.X;
const QB = {}; QUESTIONS.forEach(q => { QB[q.id] = q; });
const optional = new Set(TOPICS.filter(t => t.optional).map(t => t.id));
const ids = Object.keys(M);

console.log('=== Questions ===');
check(ids.length > 0, `${ids.length} questions mapped`);
const missing = ids.filter(i => !QB[i]);
check(!missing.length, 'every mapped id is a question in the bank', missing.join(', '));
const notSik = ids.filter(i => QB[i] && QB[i].prof !== 'Sikazwe');
check(!notSik.length, "every mapped question is Dr. Sikazwe's (the figures are from his slides)", notSik.join(', '));
const inel = ids.filter(i => QB[i] && (QB[i].lowYield || QB[i].unassigned || optional.has(QB[i].topic) || HELD.includes(i)));
check(!inel.length, 'no mapped question is lowYield, unassigned, in an optional topic or held out', inel.join(', '));
const noWhy = ids.filter(i => !M[i].why || String(M[i].why).trim().length < 6);
check(!noWhy.length, 'every entry gives its reason', noWhy.join(', '));

console.log('=== Figures and steps ===');
const guide = here('guide.js');
const badFig = ids.filter(i => !RX[M[i].fig] || typeof DIA[M[i].fig] !== 'string');
check(!badFig.length, 'every figure id is a reaction figure in DIA', badFig.map(i => i + '→' + M[i].fig).join(', '));
const figs = [...new Set(ids.map(i => M[i].fig))];
const noAnchor = figs.filter(k => !guide.includes(`id="${k}"`));
check(!noAnchor.length, `every figure (${figs.length}) has its Guide anchor for "Open in Guide"`, noAnchor.join(', '));
const nSteps = k => ((DIA[k] || '').match(/<g class="st[ "]/g) || []).length;
const badStep = ids.filter(i => {
  const n = nSteps(M[i].fig), s = M[i].step;
  return n ? !(Number.isInteger(s) && s >= 1 && s <= n) : s !== undefined;
});
check(!badStep.length, 'a step-through has a step in range; a one-picture figure has none',
  badStep.map(i => `${i}→${M[i].fig} step ${M[i].step} of ${nSteps(M[i].fig)}`).join(', '));
console.log('  ' + figs.map(k => `${k} ${ids.filter(i => M[i].fig === k).length}`).join(', '));

console.log('=== Storage and the stub DOM ===');
const code = f => here(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
check(!/localStorage|sessionStorage|indexedDB|document\.cookie|caches\./.test(code('why_figs.js') + code('why_ui.js')),
  'why_figs.js and why_ui.js touch no storage');
const ub = {console, window: {}}; vm.createContext(ub);
vm.runInContext(here('why_figs.js') + '\n' + here('walk_ui.js') + '\n' + here('why_ui.js') + '\nthis.U = {WHY_UI};', ub);
check(ub.U.WHY_UI === null, 'why_ui.js does nothing in a stub DOM');

finish(NAME);
