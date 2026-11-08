/* ==========================================================================
   DRUG LIST CHECK (druglist_data.js, druglist_ui.js; DEENT course-level)
   ==========================================================================
   The Drug list tab is a temporary course-level presentation (to be replaced
   by the shared-kit Drug List feature). This check reads the course's own
   source files in node (no build needed) and checks:

   - every drug line of the chart (CHART_ROWS, pp. 1-7) is carried by a card
     or left out with a reason, and every card carries at least one chart line;
   - every card's target row exists in the Reference "Drug targets" table
     (reference.js ref-targets) with a target part, and every target and
     mechanism part names its lecturer and a citation;
   - every statement on a card (why, use, adverse effects, boxed warning,
     photosensitivity, notes) names its source: Dr. Smith's need a slide or
     transcript citation, Dr. Sikazwe's a DPAW page or transcript time, the
     chart's a chart page; "why it helps" is Dr. Smith's only;
   - spironolactone keeps Dr. Smith's and Dr. Sikazwe's statements apart;
   - classes, diseases and Atlas keys exist; every question pattern compiles,
     and the questions it links exist in the bank;
   - neither file writes to any storage (localStorage, sessionStorage,
     IndexedDB, cookies), comments aside;
   - druglist_ui.js does nothing in a stub DOM (the node checks' engine).

     node druglist_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NAME = 'druglist_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
const files = C.files.filter(f => f !== 'druglist_ui.js' && fs.existsSync(path.join(__dirname, f)));   // a narration data file not yet written is not in the page either
const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of files) src += here(f) + '\n';
src += here('reference.js') + '\nthis.X = {QUESTIONS, DRUGLIST, REFERENCE_HTML, ATLAS: typeof ATLAS !== "undefined" ? ATLAS : null};';
vm.runInContext(src, sb);
const {QUESTIONS, DRUGLIST: DL, REFERENCE_HTML, ATLAS} = sb.X;
const ids = new Set(DL.D.map(d => d.id));
const qids = new Set(QUESTIONS.map(q => q.id));

console.log('=== The chart, line by line ===');
const rows = DL.CHART_ROWS;
const pages = [...new Set(rows.map(r => r[0]))];
check(pages.join(',') === '1,2,3,4,5,6,7', `the chart rows cover pages 1-7 (${pages.join(', ')})`);
const unknown = rows.filter(([p, , id]) => id ? !ids.has(id) : !DL.EXCLUDED[p]);
check(!unknown.length, `every chart line (${rows.length}) goes to a card or to a stated exclusion`, unknown.map(r => r[1]).join('; '));
const carried = new Set(rows.map(r => r[2]).filter(Boolean));
const orphan = DL.D.filter(d => !carried.has(d.id));
check(!orphan.length, `every card (${DL.D.length}) carries at least one chart line`, orphan.map(d => d.id).join(', '));
const excl = rows.filter(r => !r[2]);
console.log(`  ${rows.length} chart lines: ${rows.length - excl.length} on ${DL.D.length} cards, ${excl.length} left out (` +
  Object.entries(DL.EXCLUDED).map(([p, why]) => `p. ${p}: ${why}`).join(' ') + ')');
check(new Set(DL.D.map(d => d.id)).size === DL.D.length, 'card ids are unique');

console.log('=== Targets and mechanisms (Reference, ref-targets) ===');
const T = DL.parseTargets(REFERENCE_HTML);
const CITE = {
  smith: /(PCol|Pathophys|Sun) \d|\b\d{2}\/\d{2} T \d|(^|; )T \d/,
  sikazwe: /DPAW \d|T@\d/,
  chart: /^Chart p\. [1-6]$|^Chart p\. [1-6]\b/,
};
const citeOk = s => !!(s && s.by && CITE[s.by] && s.cite && CITE[s.by].test(s.cite));
const noTgt = DL.D.filter(d => !T[d.tgt] || !T[d.tgt].parts.some(p => p.kind === 'tg'));
check(!noTgt.length, 'every card names a Reference target row that has a target part', noTgt.map(d => d.id + '→' + d.tgt).join(', '));
const parts = Object.entries(T).flatMap(([id, r]) => r.parts.map(p => Object.assign({row: id}, p)));
const badPart = parts.filter(p => !citeOk(p) || !p.t);
check(!badPart.length, `every target/mechanism part (${parts.length} in ${Object.keys(T).length} rows) names its lecturer or the chart and a matching citation`,
  badPart.map(p => `${p.row} ${p.kind} ${p.by} "${p.cite}"`).join('; '));
const unused = Object.keys(T).filter(id => !DL.D.some(d => d.tgt === id || d.tgt2 === id));
const noTgt2 = DL.D.filter(d => d.tgt2 && !T[d.tgt2]);
check(!noTgt2.length, 'every second target row exists', noTgt2.map(d => d.id).join(', '));
check(!unused.length, 'every Reference target row is used by a card', unused.join(', '));
const sp = T['tgt-spironolactone'] ? T['tgt-spironolactone'].parts : [];
check(sp.some(p => p.by === 'smith' && /Pathophys 37/.test(p.cite)) && sp.some(p => p.by === 'sikazwe' && /DPAW 53/.test(p.cite)) &&
      !sp.some(p => p.by === 'smith' && /biosynthesis/i.test(p.t)),
  'spironolactone: Dr. Smith (class only) and Dr. Sikazwe (biosynthesis) are separate, attributed statements');

console.log('=== Statements on the cards ===');
const stmts = [];
for (const d of DL.D) {
  for (const k of ['use', 'ae', 'notes']) (d[k] || []).forEach(s => stmts.push([d.id, k, s]));
  for (const k of ['why', 'boxed', 'photo']) if (d[k]) stmts.push([d.id, k, d[k]]);
}
const remarks = stmts.filter(([, , s]) => s.by === 'remark');
const badRemark = remarks.filter(([, k, s]) => k !== 'notes' || !s.t || s.cite);
check(!badRemark.length, `remarks about the sources (${remarks.length}) are notes only and carry no lecturer or chart citation`, badRemark.map(([id]) => id).join(', '));
const badS = stmts.filter(([, , s]) => s.by !== 'remark' && (!s.t || !citeOk(s)));
check(!badS.length, `every statement (${stmts.length}) names its source with a matching citation`, badS.map(([id, k, s]) => `${id}.${k} ${s.by} "${s.cite}"`).join('; '));
// Dr. Sikazwe's assigned pages for Exam 1 (his list of 11/06, as file pages of the DPAW deck)
const ASSIGNED = new Set([7, 8, 9, 12].concat([...Array(9)].map((_, i) => 15 + i), [...Array(10)].map((_, i) => 25 + i),
  [...Array(13)].map((_, i) => 43 + i), [...Array(6)].map((_, i) => 61 + i)));
const unassignedUnlabelled = stmts.filter(([, , s]) => s.by === 'sikazwe' && [...String(s.cite).matchAll(/DPAW (\d+)(?:[–-](\d+))?/g)]
  .some(m => { for (let p = +m[1]; p <= +(m[2] || m[1]); p++) if (!ASSIGNED.has(p)) return true; return false; }) &&
  !/outside his assigned pages/.test(s.t));
check(!unassignedUnlabelled.length, 'every Dr. Sikazwe statement citing a page outside his assigned pages says so',
  unassignedUnlabelled.map(([id, k, s]) => `${id}.${k} ${s.cite}`).join('; '));
const tac = DL.D.find(d => d.id === 'tacrolimus');
check(tac && !tac.boxed, 'topical tacrolimus carries no boxed-warning flag (the slide\'s warning is for oral calcineurin inhibitors)');
const notSmithWhy = DL.D.filter(d => d.why && d.why.by !== 'smith');
check(!notSmithWhy.length, '"Why it helps" lines are Dr. Smith\'s only', notSmithWhy.map(d => d.id).join(', '));
const smithNoSlide = stmts.filter(([, , s]) => s.by === 'smith' && !/(PCol|Pathophys|Sun) \d|T \d/.test(s.cite));
check(!smithNoSlide.length, 'no statement marked Dr. Smith lacks a slide or transcript citation', smithNoSlide.map(([id, k]) => id + '.' + k).join(', '));
const boxedN = DL.D.filter(d => d.boxed).length, photoN = DL.D.filter(d => d.photo && !d.photo.no).length;
console.log(`  boxed warning on ${boxedN} cards, photosensitizing on ${photoN}; statuses: ` +
  ['taught', 'class', 'chart'].map(s => `${s} ${DL.D.filter(d => d.status === s).length}`).join(', '));

console.log('=== Filters, Atlas keys, questions ===');
const badMeta = DL.D.filter(d => !DL.CLASSES[d.cls] || !d.dz.length || d.dz.some(z => !DL.DISEASES[z]) ||
  !['taught', 'class', 'chart'].includes(d.status) || !DL.PAGES[d.page] || !d.name || !Array.isArray(d.brands));
check(!badMeta.length, 'every card has a known class, disease, chart page and status', badMeta.map(d => d.id).join(', '));
const atlasKeys = new Set(ATLAS ? ATLAS.boards.flatMap(b => b.sections.flatMap(s => s.items.map(it => it.plain))) : []);
const badAtlas = DL.D.filter(d => d.atlas && !atlasKeys.has(d.atlas));
check(!badAtlas.length, `every Atlas key names an Atlas structure (${DL.D.filter(d => d.atlas).length} cards)`, badAtlas.map(d => d.id).join(', '));
let reErr = [], linked = 0, missing = [], none = [];
for (const d of DL.D) {
  let own = [];
  try { own = DL.questionsFor(d, QUESTIONS); DL.classQuestions(d.cls, QUESTIONS); } catch (e) { reErr.push(d.id); continue; }
  own.forEach(q => { linked++; if (!qids.has(q.id)) missing.push(q.id); });
  if (!own.length) none.push(d.id);
}
check(!reErr.length, 'every question pattern compiles', reErr.join(', '));
check(!missing.length && linked > 0, `the ${linked} linked question ids all exist in the bank`, missing.join(', '));
console.log(`  cards with no question naming the drug (${none.length}): ${none.join(', ')}`);
check(DL.D.every(d => !/\bbrand\b/i.test(d.q)), 'no question pattern is built on brand names');

const code = f => here(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"`])\/\/.*$/gm, '$1');
console.log('=== Quiz me (multiple choice) and Recall ===');
{
  const rngOf = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const RUNS = 60, kinds = Object.keys(DL.KINDS);
  const brandRe = new RegExp('\\b(' + [...new Set(DL.D.flatMap(d => d.brands || []))].map(b => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'i');
  const made = {}, bad = {shape: [], one: [], distinct: [], keyed: [], trueWrong: [], famWrong: [], sameClass: [], brand: [], src: [], unstable: []};
  for (const k of kinds) {
    made[k] = 0;
    for (const d of DL.D) {
      const truth = DL.trueValues(d, T, k).concat(DL.quizFacts(d, T, k).map(v => v.t));
      const tn = new Set(truth.map(DL.norm)), tf = new Set(truth.map(DL.family));
      const keyed = new Set(DL.quizFacts(d, T, k).map(v => v.t));
      const sameCls = new Set(DL.D.filter(o => o.id !== d.id && o.cls === d.cls && (d.cls !== 'abx' || o.chartClass === d.chartClass))
        .flatMap(o => DL.quizFacts(o, T, k).map(v => DL.norm(v.t))));
      let nulls = 0;
      for (let r = 0; r < RUNS; r++) {
        const q = DL.makeQuestion(d, T, k, r === RUNS - 1 ? Math.random : rngOf(r * 7919 + d.id.length));
        if (!q) { nulls++; continue; }
        const tag = `${d.id}:${k}`, o = q.options;
        if (o.length !== 4) bad.shape.push(tag);
        const right = o.filter(x => x.correct);
        if (right.length !== 1) bad.one.push(tag);
        if (new Set(o.map(x => DL.norm(x.t))).size !== 4 || new Set(o.map(x => DL.family(x.t))).size !== 4) bad.distinct.push(tag);
        if (right.length && !keyed.has(right[0].t)) bad.keyed.push(tag);
        for (const w of o.filter(x => !x.correct)) {
          if (tn.has(DL.norm(w.t))) bad.trueWrong.push(tag + ' ' + w.t);
          if (tf.has(DL.family(w.t))) bad.famWrong.push(tag + ' ' + w.t);
          if (sameCls.has(DL.norm(w.t))) bad.sameClass.push(tag + ' ' + w.t);
        }
        if (o.some(x => brandRe.test(x.t)) || brandRe.test(q.stem) || !q.stem.includes(d.name)) bad.brand.push(tag);
        if (!q.src.length || !q.src.every(citeOk)) bad.src.push(tag);
      }
      if (nulls && nulls !== RUNS) bad.unstable.push(`${d.id}:${k}`);
      if (!nulls) made[k]++;
    }
  }
  const u = a => [...new Set(a)].slice(0, 8).join('; ');
  const n = RUNS * kinds.length * DL.D.length;
  check(!bad.shape.length, `every quiz question has 4 options (${n} questions generated over ${RUNS} draws per drug and field)`, u(bad.shape));
  check(!bad.one.length, 'every quiz question has exactly one correct option', u(bad.one));
  check(!bad.distinct.length, 'the 4 options are distinct (normalized text) and no two say the same thing (one per family)', u(bad.distinct));
  check(!bad.keyed.length, "the correct option is one of the drug's own sourced values", u(bad.keyed));
  check(!bad.trueWrong.length && !bad.famWrong.length, 'no wrong option is also true for the drug (text or family)', u(bad.trueWrong.concat(bad.famWrong)));
  check(!bad.sameClass.length, "no wrong option is a value from a drug of the same class", u(bad.sameClass));
  check(!bad.brand.length, 'stems name the drug by generic name; no option or stem carries a brand name', u(bad.brand));
  check(!bad.src.length, 'every quiz answer shows a source with a matching citation', u(bad.src));
  check(!bad.unstable.length, 'a drug and field either always or never get a question', u(bad.unstable));
  check(made.cls === DL.D.length && made.target >= 45 && made.use >= 70,
    `questions for every field over all ${DL.D.length} drugs: target ${made.target}, class ${made.cls}, indication ${made.use}`);
  // the cases the exclusions are for
  const never = (id, k, re, why) => {
    const d = DL.D.find(x => x.id === id), hits = [];
    for (let r = 0; r < 200; r++) { const q = DL.makeQuestion(d, T, k, rngOf(r)); if (q) q.options.filter(o => !o.correct && re.test(o.t)).forEach(o => hits.push(o.t)); }
    check(!hits.length, why, u(hits));
  };
  never('tacrolimus', 'target', /calcineurin|cyclophilin/i, 'tacrolimus: calcineurin and cyclophilin are never wrong options for its target');
  never('cyclosporine', 'target', /calcineurin|fkbp/i, 'cyclosporine: calcineurin and FKBP are never wrong options for its target');
  never('methotrexate', 'target', /dihydrofolate/i, 'methotrexate: bacterial DHFR is never a wrong option for its target');
  never('tmpsmx', 'cls', /dihydrofolate/i, 'trimethoprim/sulfamethoxazole: "DHFR inhibitor" is never a wrong class');
  never('ustekinumab', 'cls', /^IL-23 inhibitors$/, 'ustekinumab: "IL-23 inhibitors" is never a wrong class');
  never('bpo', 'cls', /antibiotic/i, 'benzoyl peroxide: "antibiotics / antimicrobials" is never a wrong class');
  never('clobetasol', 'use', /atopic|psoriasis/i, 'a topical steroid: neither of its two uses is a wrong option');
  never('cyclosporine', 'use', /atopic/i, 'cyclosporine: atopic dermatitis is never a wrong indication');
  // uses kept out of the wrong options that a course source names: shown after answering, never as an option
  const OC = DL.OFF_CHART || {};
  const ocBad = Object.entries(OC).flatMap(([id, ns]) => ns.filter(n => !ids.has(id) || !(DL.NOT_WRONG[id] || []).includes(n.z) || !n.head ||
    !n.src.length || !n.src.every(s => s.t && citeOk(s) && /"[^"]+"/.test(s.t))).map(n => id + ':' + n.z));
  check(Object.keys(OC).length && !ocBad.length, `every off-chart note (${Object.values(OC).flat().length}) is a NOT_WRONG pair with a head and quoted, cited slide or transcript lines`, ocBad.join(', '));
  const ocQ = [];
  for (const [id, ns] of Object.entries(OC)) {
    const d = DL.D.find(x => x.id === id);
    for (let r = 0; r < 200; r++) for (const k of kinds) {
      const q = DL.makeQuestion(d, T, k, rngOf(r));
      if (!q) continue;
      if ((k === 'use') !== (q.offChart.length === ns.length && q.offChart.length > 0)) ocQ.push(`${id}:${k} note`);
      for (const n of ns) if (q.options.some(o => !o.correct && DL.norm(o.t) === DL.norm(DL.DISEASES[n.z]))) ocQ.push(`${id}:${k} wrong ${n.z}`);
    }
    never(id, 'use', new RegExp('^' + ns.map(n => DL.DISEASES[n.z]).join('|') + '$', 'i'), `${id}: the off-chart use (${ns.map(n => DL.DISEASES[n.z]).join(', ')}) is never a wrong option`);
  }
  check(!ocQ.length, 'off-chart notes ride on Indication questions only, and their use is never a wrong option', u(ocQ));
  const fbSrc = (code('druglist_ui.js').match(/const fb = !done \? '' :[\s\S]*?`;\n/) || [''])[0];
  const ocUses = (code('druglist_ui.js').match(/offChart\(/g) || []).length;
  check(/offChart\(q\.offChart/.test(fbSrc) && (code('druglist_ui.js').match(/offChart\(q\./g) || []).length === 1,
    'Quiz me shows the off-chart note only in the feedback written after an answer (empty before)');
  check(ocUses >= 3, `the off-chart note is also on the Browse card and the Recall indication answer (${ocUses - 1} call sites)`);
  never('ruxolitinib', 'target', /^JAK$|Janus/, 'ruxolitinib: another JAK wording is never a wrong option');
  // Recall: every drug has an answer to show for each field
  const noUse = DL.D.filter(d => !d.chartUse && !(d.use || []).length).map(d => d.id).sort().join(',');
  check(noUse === 'ketoconazole,petrolatum', `Recall: every card has an indication line except the two misaligned chart p. 5 rows (${noUse})`);
  check(DL.D.every(d => d.chartClass || d.cls === 'tnf'), 'Recall: every card has a sourced class line');
  const ui = code('druglist_ui.js');
  check(!/data-dl="(next|prev|flash)"|>\s*Next\s*</.test(ui), 'the Drug list has no Next button and no one-card-at-a-time mode');
}

console.log('=== Storage and stub DOM ===');
for (const f of ['druglist_data.js', 'druglist_ui.js']) {
  const hits = code(f).match(/localStorage|sessionStorage|indexedDB|\.setItem\(|document\.cookie|caches\.open/g);
  check(!hits, `${f} writes to no storage`, hits && hits.join(', '));
}
const stub = {console, document: {getElementById: () => ({}), querySelector: () => null}, DRUGLIST: DL};
vm.createContext(stub);
let out;
try { out = vm.runInContext(here('druglist_ui.js') + '\nDRUGLIST_UI;', stub); } catch (e) { out = e; }
check(out === null, 'druglist_ui.js does nothing (returns null, throws nothing) in a stub DOM', String(out));
finish(NAME);
