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
   - druglist_ui.js does nothing in a stub DOM (the node checks' engine);
   - every chart column (Louis, 2026-11-08): the kinds class → drug,
     indication → drug, chemical class, Rx/OTC, potency class and brand names
     (practice) are generated 60 times per drug and kind: 4 options (Rx/OTC:
     its three), exactly one correct, the key the drug's own chart value, no
     wrong option true for the drug (own brand, chemical family, other potency
     line, a drug with the use or class asked), a brand only in brand
     questions, a cited source on every answer; no chemical-class key from a
     blank, conflicting or one-row-off cell; the per-kind coverage is printed
     and must match the About line;
   - the original chart pages (chart_boxes.js, from render_chart.py): every
     page image exists in chart/ at its recorded size; every in-scope chart
     line has a box on its card's page(s) and every p. 7 line one in `other`;
     each box lies inside its image, holds the line's generic name as the
     chart prints it (CHART_TYPOS: the chart's own misspellings, disclosed on
     the cards), and two lines share a row only where the chart prints them
     in one cell; the Chart view's page 7 line quotes Dr. Smith.

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
src += here('reference.js') + '\nthis.X = {QUESTIONS, DRUGLIST, REFERENCE_HTML, ATLAS: typeof ATLAS !== "undefined" ? ATLAS : null, DRUGFACTS: typeof DRUGFACTS !== "undefined" ? DRUGFACTS : null};';
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
  !/outside (his|Dr\. Sikazwe's) assigned/.test(s.t));
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
  const RUNS = 60, kinds = ['target', 'cls', 'use'], ALLK = Object.keys(DL.KINDS);
  // indication questions with only two sound wrong options: the steroids ("numerous others") and zinc oxide (sun protection; psoriasis and atopic dermatitis never wrong)
  const THREE = new Set(DL.D.filter(d => d.cls === 'steroid').map(d => d.id));
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
        if (o.length !== (k === 'use' && THREE.has(d.id) ? 3 : 4)) bad.shape.push(tag);
        const right = o.filter(x => x.correct);
        if (right.length !== 1) bad.one.push(tag);
        if (new Set(o.map(x => DL.norm(x.t))).size !== o.length || new Set(o.map(x => DL.family(x.t))).size !== o.length) bad.distinct.push(tag);
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
  check(!bad.shape.length, `every quiz question has 4 options; an indication with only two sound wrong options has 3 (the 13 steroids) (${n} questions generated over ${RUNS} draws per drug and field)`, u(bad.shape));
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
  never('bpo', 'cls', /antibiotic/i, 'benzoyl peroxide: "Antibiotics" is never a wrong class');
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
    for (let r = 0; r < 200; r++) for (const k of ALLK) {
      const q = DL.makeQuestion(d, T, k, rngOf(r));
      if (!q) continue;
      if ((k === 'use') !== (q.offChart.length === ns.length && q.offChart.length > 0)) ocQ.push(`${id}:${k} note`);
      for (const n of ns) if (q.options.some(o => !o.correct && DL.norm(o.t) === DL.norm(DL.DISEASES[n.z]))) ocQ.push(`${id}:${k} wrong ${n.z}`);
    }
    never(id, 'use', new RegExp('^' + ns.map(n => DL.DISEASES[n.z]).join('|') + '$', 'i'), `${id}: the off-chart use (${ns.map(n => DL.DISEASES[n.z]).join(', ')}) is never a wrong option`);
  }
  check(!ocQ.length, 'off-chart notes ride on Indication questions only, and their use is never a wrong option', u(ocQ));
  // Louis, 2026-11-08: no atopic-dermatitis note on cyclosporine (the class statement is in the Guide);
  // zinc oxide's note limited to protecting the skin around plaques in anthralin treatment
  const cyQ = [];
  for (let r = 0; r < 50; r++) { const q = DL.makeQuestion(DL.D.find(x => x.id === 'cyclosporine'), T, 'use', rngOf(r)); if (q && q.offChart.length) cyQ.push(r); }
  check(!OC.cyclosporine && !cyQ.length && (DL.NOT_WRONG.cyclosporine || []).includes('ad'),
    'cyclosporine has no off-chart note (Browse, Quiz me, Recall) and atopic dermatitis stays out of its wrong options');
  const ZN = 'Psoriasis: the chart lists zinc oxide on its psoriasis page (p. 5); in the lectures its role there is to protect the healthy skin around the plaques during anthralin treatment. It is not a psoriasis drug.';
  check((OC.zincoxide || []).length === 1 && OC.zincoxide[0].head === ZN && OC.zincoxide[0].src.length === 2 &&
    DL.CHART_ROWS.some(r => r[0] === 5 && r[2] === 'zincoxide') && DL.PAGES[5] === 'Psoriasis',
    'zinc oxide: one note, limited to the skin around plaques in anthralin treatment, two sources; the chart lists it on p. 5 (psoriasis)');
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

  console.log('=== Topical steroids: indication options (Louis, 2026-11-08) ===');
  {
    // Possibly valid for a topical steroid, so never a wrong option: the chart's p. 6 cell is
    // "Psoriasis, Atopic dermatitis, numerous others"; a low-potency steroid (hydrocortisone OTC,
    // class 7) relieves the itch of sunburn and insect bites (the chart's p. 1 sunburn line);
    // triamcinolone acetonide (Kenalog) is also injected into acne cysts in practice.
    const MAYBE = {all: ['Sunburn relief'], triamcinolone: ['Acne']};
    // false for a topical steroid by the course sources: acne is its local adverse effect (PCol 12);
    // sun protection is the sunscreens' purpose (Sun 20, 22)
    const FALSE = {Acne: /PCol 12/, 'Sun protection': /Sun 20, 22/};
    const ster = DL.D.filter(d => d.cls === 'steroid'), sBad = [], sMade = [], sNone = [];
    for (const d of ster) {
      let got = 0;
      for (let r = 0; r < 80; r++) {
        const q = DL.makeQuestion(d, T, 'use', rngOf(r * 13 + 5));
        if (!q) continue; got++;
        for (const w of q.options.filter(x => !x.correct)) {
          if (MAYBE.all.concat(MAYBE[d.id] || []).includes(w.t)) sBad.push(`${d.id}: ${w.t} (possibly valid)`);
          if (!FALSE[w.t]) sBad.push(`${d.id}: ${w.t} (not in the false-by-source set)`);
          const why = (q.wrongWhy || []).find(x => x.opt === w.t);
          if (!why || !citeOk(why) || !FALSE[w.t].test(why.cite)) sBad.push(`${d.id}: ${w.t} (no cited reason)`);
        }
        if (q.options.length !== 3) sBad.push(`${d.id}: ${q.options.length} options`);
      }
      if (got) sMade.push(d.id); else sNone.push(d.id);
    }
    check(!sBad.length, `steroid indication questions offer only options false by the sources (Acne: PCol 12; Sun protection: Sun 20, 22), each with its cited reason; never Sunburn relief (${ster.length} steroids, 80 draws each)`, u(sBad));
    check(sNone.join(',') === 'triamcinolone' && sMade.length === ster.length - 1,
      `steroid indication: ${sMade.length} of ${ster.length} kept (3 options); withheld: ${sNone.join(', ')} (acne not safely false), with its reason in the coverage line`);
    const covU = DL.coverage(T).use;
    check(Object.entries(covU.none).some(([r, ns]) => ns.includes('Triamcinolone acetonide') && /acne/.test(r)), 'the About coverage line gives triamcinolone\'s reason');
    // Indication → drug: no steroid is offered as a drug NOT used for something; when a steroid is the answer,
    // no wrong option is a drug with that use (or petrolatum for atopic dermatitis)
    const rBad = [];
    for (const d of DL.D) for (let r = 0; r < 40; r++) {
      const q = DL.makeQuestion(d, T, 'useRev', rngOf(r * 17 + 3));
      if (!q) continue;
      for (const w of q.options.filter(x => !x.correct)) {
        const o2 = DL.D.find(x => x.name === w.t);
        if (o2.cls === 'steroid') rBad.push(`${d.id}: ${w.t}`);
        if (q.z === 'ad' && o2.id === 'petrolatum') rBad.push(`${d.id}: petrolatum for AD`);
      }
    }
    check(!rBad.length, 'Indication → drug: a steroid is never a wrong option ("numerous others"); petrolatum never a wrong option for atopic dermatitis', u(rBad));
  }

  console.log('=== Methoxsalen indication: Exam 1 (Dr. Smith, Sun 3 and audio) ===');
  {
    const mx = DL.D.find(d => d.id === 'methoxsalen');
    const qs = [0, 1, 2, 3].map(r => DL.makeQuestion(mx, T, 'use', rngOf(r)));
    check(qs.every(q => q && q.options.find(o => o.correct).t === 'Psoriasis' && q.src.some(s => s.by === 'smith' && /Sun 3; audio 00:59–01:10/.test(s.cite) && /methoxsalen/.test(s.t))),
      'methoxsalen: its psoriasis question is in the default set, keyed by Dr. Smith (Sun 3; audio 00:59–01:10)');
    check(mx.use.some(s => s.by === 'sikazwe' && /DPAW 14/.test(s.cite) && /^Also on/.test(s.t) && /outside his assigned pages/.test(s.t)),
      'DPAW 14 stays as an additional source line, labelled outside Dr. Sikazwe\'s assigned pages');
    const covU = DL.coverage(T).use, covR = DL.coverage(T).useRev;
    check(covU.n === 75 && covR.n === 77 && !Object.values(covU.none).flat().includes('Methoxsalen'),
      `methoxsalen counts in the Exam 1 coverage (Indication ${covU.n}, Indication → drug ${covR.n})`);
    check(!/data-dl="outside"|OPTS\(|\.outside/.test(ui) && !DL.D.some(d => (d.use || []).some(u => u.outside)), 'no optional chip remains (nothing uses it)');
    // no default question anywhere rests only on a statement outside the assigned pages
    const leak = [];
    for (const d of DL.D) for (const k of ALLK) for (let r = 0; r < 4; r++) {
      const q = DL.makeQuestion(d, T, k, rngOf(r));
      if (q && q.src.every(s => s.by === 'sikazwe' && [...String(s.cite).matchAll(/DPAW (\d+)/g)].every(m => !ASSIGNED.has(+m[1])))) leak.push(`${d.id}:${k}`);
    }
    check(!leak.length, 'no question in any kind is keyed only by Dr. Sikazwe pages outside his assigned list', u(leak));
    // atopic dermatitis is never offered as wrong for zinc oxide (skin protectant) or methoxsalen (PUVA), both directions
    const adBad = [];
    for (let r = 0; r < 200; r++) {
      for (const id of ['zincoxide', 'methoxsalen']) { const q = DL.makeQuestion(DL.D.find(d => d.id === id), T, 'use', rngOf(r));
        if (q && q.options.some(o => !o.correct && o.t === 'Atopic dermatitis')) adBad.push(id + ':use'); }
      for (const d of DL.D) { const q = DL.makeQuestion(d, T, 'useRev', rngOf(r * 7 + 1));
        if (q && q.z === 'ad' && q.options.some(o => !o.correct && /^(Zinc oxide|Methoxsalen)$/.test(o.t))) adBad.push(d.id + ':useRev ' + q.options.map(o => o.t).join('/')); }
    }
    const zq = DL.makeQuestion(DL.D.find(d => d.id === 'zincoxide'), T, 'use', rngOf(1));
    check(!zq && /DPAW 46/.test(DL.whyNone(DL.D.find(d => d.id === 'zincoxide'), T, 'use')),
      'zinc oxide: no indication question (atopic dermatitis, sunburn and acne are not safely false: skin protectant; sulfur + zinc oxide acne mixtures, DPAW 46), with the reason in About');
    check(!adBad.length, 'zinc oxide and methoxsalen: atopic dermatitis is never a wrong option for them, and they are never wrong options for it', u(adBad));
  }
  {
    // the Drug list never feeds the bank, Exam sim or progress
    const others = C.files.concat(['reference.js']).filter(f => !/^druglist_|^chart_boxes/.test(f) && fs.existsSync(path.join(__dirname, f)))
      .filter(f => /DRUGLIST|makeQuestion/.test(code(f)));
    const writesQ = ['druglist_data.js', 'druglist_ui.js'].filter(f => /QUESTIONS\s*(\.push|\.splice|\.unshift|=[^=])|EXAMS?\s*(\.push|=[^=])/.test(code(f)));
    check(!others.length && !writesQ.length, 'no other course file uses the Drug list questions, and the Drug list adds nothing to the bank or the exams (Exam sim draws only from the bank)',
      others.concat(writesQ).join(', '));
  }

  console.log('=== Antibiotics vs antifungal activity; brands that fit several drugs ===');
  {
    check(DL.CLASSES.abx === 'Antibiotics', 'the antibiotic class reads "Antibiotics" (the chart\'s p. 3 label)');
    // ketoconazole (azole); selenium sulfide and zinc pyrithione: "Both have cytostatic and antifungal activity" (PCol)
    const AF = ['ketoconazole', 'selenium', 'zpt'], afBad = [];
    for (const d of DL.D) for (let r = 0; r < 60; r++) {
      const c = DL.makeQuestion(d, T, 'cls', rngOf(r)), cr = DL.makeQuestion(d, T, 'clsRev', rngOf(r + 999));
      if (c && AF.includes(d.id) && c.options.some(o => !o.correct && o.t === 'Antibiotics')) afBad.push(d.id + ': Antibiotics offered');
      if (c && d.cls === 'abx' && c.options.some(o => !o.correct && /antifungal|cytotoxic/i.test(o.t))) afBad.push(d.id + ': ' + c.options.map(o => o.t).join('/'));
      if (cr && d.cls === 'abx' && cr.options.some(o => !o.correct && AF.map(id => DL.D.find(x => x.id === id).name).includes(o.t))) afBad.push(d.id + ':clsRev antifungal drug offered');
      if (cr && AF.includes(d.id) && cr.options.some(o => !o.correct && DL.D.find(x => x.name === o.t).cls === 'abx')) afBad.push(d.id + ':clsRev antibiotic offered');
    }
    check(!afBad.length, 'no antifungal-active drug (ketoconazole, selenium sulfide, zinc pyrithione) is offered against the antibiotic class, or the class against it', u(afBad));
    // brands: explicit cross-product lines and brand families (first word), read independently here
    const ALSO = {Clearasil: ['salicylic', 'sulfur'], Fostex: ['salicylic', 'sulfur'], Solarcaine: ['lidocaine']};
    const fam = b => DL.norm(b).split(' ')[0];
    const fits = (b, o) => o.brands.some(x => fam(x) === fam(b)) || (ALSO[b] || []).includes(o.id);
    const brBad = [];
    for (const d of DL.D) for (let r = 0; r < 120; r++) {
      const q = DL.makeQuestion(d, T, 'brand', rngOf(r * 3 + d.id.length));
      if (!q) continue;
      if (q.dir === 'rev') {
        if (q.stem !== `Which drug does the chart list under the brand name ${q.brand}?`) brBad.push(d.id + ': stem');
        for (const w of q.options.filter(o => !o.correct)) if (fits(q.brand, DL.D.find(x => x.name === w.t))) brBad.push(`${q.brand} -> ${w.t}`);
      } else for (const w of q.options.filter(o => !o.correct)) if (fits(w.t, d)) brBad.push(`${d.id} <- ${w.t}`);
    }
    check(!brBad.length, 'brand questions: no wrong option fits (Clearasil/Fostex never against salicylic acid or sulfur, Solarcaine never against lidocaine, no shared brand family such as Oxy); reverse stem "Which drug does the chart list under the brand name X?"', u(brBad));
  }

  console.log('=== Every chart column (Louis, 2026-11-08): the new kinds ===');
  const NEW = ['clsRev', 'useRev', 'chem', 'rx', 'potency', 'brand'];
  check(NEW.every(k => DL.KINDS[k] && DL.KIND_HEAD[k]) && /Dr\. Smith's exam questions use generic names/.test(DL.KINDS.brand),
    'Ask about lists class → drug, indication → drug, chemical class, Rx/OTC, potency class and brand names (labelled practice)');
  check(/k === 'target' \|\| k === 'cls'/.test(ui), 'Ask about: Target and Class on by default, every other kind off');
  check(/RFIELDS = \{[^}]*chem:[^}]*rx:[^}]*potency:[^}]*brand:/.test(ui), 'Recall offers chemical class, Rx/OTC, potency class and brand');
  check(!/target of tacrolimus/.test(ui) && /function recallExample/.test(ui), 'the Recall example is chosen outside the current list (no fixed tacrolimus example)');
  const bq = DL.BRAND_QUOTE;
  check(bq.by === 'smith' && bq.cite === '10/29 T 618–621' && /You will, you will need to know brand name\. I only ask questions using the generic name/.test(bq.t),
    'the brand kind cites Dr. Smith, 10/29 T 618–621 ("You will need to know brand name"; she asks by generic name)');
  const nm = DL.norm, byName = {}; DL.D.forEach(d => { byName[nm(d.name)] = d; });
  const brandOwner = {}; DL.D.forEach(d => d.brands.forEach(b => (brandOwner[nm(b)] = brandOwner[nm(b)] || []).push(d.id)));
  // an independent reading of "the same chemical family" (not the data file's own CHEM_FAM)
  const CHEM_GROUPS = [['steroid', 'vitamin d'], ['oxide', 'zn'], ['peptide', 'protein'], ['sulfon', 'pteridine', 'aminobenzoic', 'pyrimidine'], ['macrol', 'lactone', 'lactam'], ['retinoid'], ['salicyl']];
  const sameChem = (a, b) => { a = nm(a).replace(/s\b/g, ''); b = nm(b).replace(/s\b/g, ''); return a === b || CHEM_GROUPS.some(g => g.some(x => a.includes(x)) && g.some(x => b.includes(x))); };
  const bad2 = {shape: [], one: [], distinct: [], key: [], wrong: [], brand: [], name: [], src: [], unstable: []};
  const made2 = {}, N2 = RUNS * NEW.length * DL.D.length;
  for (const k of NEW) {
    made2[k] = 0;
    for (const d of DL.D) {
      let nulls = 0;
      for (let r = 0; r < RUNS; r++) {
        const q = DL.makeQuestion(d, T, k, r === RUNS - 1 ? Math.random : rngOf(r * 104729 + d.id.length * 31 + k.length));
        if (!q) { nulls++; continue; }
        const tag = `${d.id}:${k}`, o = q.options, right = o.filter(x => x.correct), wrong = o.filter(x => !x.correct), key = right[0] && right[0].t;
        if (k === 'rx' ? o.length !== 3 || o.map(x => x.t).join('|') !== DL.RX_OPTS.join('|') : o.length !== 4) bad2.shape.push(tag);
        if (right.length !== 1) bad2.one.push(tag);
        if (new Set(o.map(x => nm(x.t))).size !== o.length) bad2.distinct.push(tag);
        const W = (why, t) => bad2.wrong.push(`${tag} ${t} (${why})`);
        if (k === 'brand' && q.dir === 'fwd') {
          if (!d.brands.includes(key) || !q.stem.includes(d.name)) bad2.key.push(tag);
          for (const w of wrong) { const own = brandOwner[nm(w.t)] || [];
            if (d.brands.some(b => nm(b) === nm(w.t))) W('own brand', w.t);
            if (!own.length || own.some(id => DL.brandBlocked(id, d.id))) W('not another drug\'s brand', w.t); }
        } else if (k === 'brand') {
          if (key !== d.name || !d.brands.includes(q.brand) || !q.stem.includes(q.brand) || q.stem.includes(d.name)) bad2.key.push(tag);
          for (const w of wrong) { const o2 = byName[nm(w.t)];
            if (!o2 || o2.brands.some(b => nm(b) === nm(q.brand)) || DL.brandBlocked(o2.id, d.id)) W('has this brand', w.t); }
        } else if (k === 'rx') {
          const ls = DL.rxLines(d), m = q.stem.match(/potency class (\d) line/);
          const want = m ? ls.find(l => l.pot === m[1]).rx : ls[0].rx;
          if (key !== want || (!m && new Set(ls.map(l => l.rx)).size > 1)) bad2.key.push(tag);
        } else if (k === 'chem') {
          const c = DL.CHEM[d.id];
          if (!c || c.no || key !== c.t) bad2.key.push(tag);
          for (const w of wrong) {
            if (DL.chemFam(w.t) === DL.chemFam(c.t) || sameChem(w.t, c.t)) W('same chemical family', w.t);
            if (!DL.D.some(x => DL.CHEM[x.id] && !DL.CHEM[x.id].no && DL.CHEM[x.id].t === w.t)) W('not a keyed chart value', w.t);
          }
        } else if (k === 'potency') {
          if (!d.potency || !d.potency.map(p => DL.POTENCY[p]).includes(key)) bad2.key.push(tag);
          for (const w of wrong) if (d.potency.map(p => DL.POTENCY[p]).includes(w.t) || !Object.values(DL.POTENCY).includes(w.t)) W('true or unknown class', w.t);
        } else if (k === 'useRev') {
          if (key !== d.name || !DL.hasUse(d, T, q.z) || !DL.quizFacts(d, T, 'use').some(v => v.z === q.z)) bad2.key.push(tag);
          for (const w of wrong) { const o2 = byName[nm(w.t)];
            if (!o2 || DL.hasUse(o2, T, q.z) || DL.D.some(x => x.cls === o2.cls && DL.hasUse(x, T, q.z)) || DL.OPEN_USE.has(o2.cls)) W('has this use (itself or its class)', w.t); }
        } else if (k === 'clsRev') {
          if (key !== d.name || !q.stem.includes(DL.CLASSES[d.cls])) bad2.key.push(tag);
          for (const w of wrong) { const o2 = byName[nm(w.t)];
            if (!o2 || o2.cls === d.cls || DL.conflicts(o2.cls, d.cls)) W('in this class or an overlapping one', w.t); }
        }
        // generic names everywhere except the brand kind; a brand only in brand questions
        if (k !== 'brand' && (brandRe.test(q.stem) || o.some(x => brandRe.test(x.t)))) bad2.brand.push(tag);
        if (['chem', 'rx', 'potency'].includes(k) && !q.stem.includes(d.name)) bad2.name.push(tag);
        if (['useRev', 'clsRev'].includes(k) && q.stem.includes(d.name)) bad2.name.push(tag);
        if (!q.src.length || !q.src.every(citeOk) || (k !== 'brand' && k !== 'useRev' && k !== 'clsRev' && !q.src.some(s => s.by === 'chart')) ||
            (k === 'brand' && !(q.src.some(s => s.by === 'chart') && q.src.includes(bq)))) bad2.src.push(tag);
      }
      if (nulls && nulls !== RUNS) bad2.unstable.push(`${d.id}:${k}`);
      if (!nulls) made2[k]++;
    }
  }
  check(!bad2.shape.length, `every new question has 4 options (Rx/OTC: the column's three, Rx / OTC / Rx and OTC) (${N2} questions over ${RUNS} draws per drug and kind)`, u(bad2.shape));
  check(!bad2.one.length, 'every new question has exactly one correct option', u(bad2.one));
  check(!bad2.distinct.length, 'the options of every new question are distinct (normalized text)', u(bad2.distinct));
  check(!bad2.key.length, 'the correct option is the drug\'s own chart value (or the drug, in the reverse kinds)', u(bad2.key));
  check(!bad2.wrong.length, 'no wrong option is true for the drug: not its own brand or a brand of hydrocortisone/its valerate; not its chemical family; not its other potency line; no drug with the use or class asked, or in an overlapping class', u(bad2.wrong));
  check(!bad2.brand.length, 'a brand name appears only in brand questions', u(bad2.brand));
  check(!bad2.name.length, 'chemical class, Rx/OTC and potency stems name the generic; reverse stems do not name the answer', u(bad2.name));
  check(!bad2.src.length, 'every new answer shows a cited source (the chart page for chart columns; brand: the chart and Dr. Smith\'s 10/29 words)', u(bad2.src));
  check(!bad2.unstable.length, 'a drug and kind either always or never get a question', u(bad2.unstable));
  // keys from conflicts, misaligned or blank cells
  const DECL = {blank: 'acitretin,benzocaine,bpo,lidocaine,salicylic,sulfur,tetracaine', group: 'dibucaine',
    conflict: 'pimecrolimus,ruxolitinib,tacrolimus,tofacitinib,upadacitinib', offset: 'apremilast,cyclosporine,ketoconazole,petrolatum'};
  const declOk = Object.entries(DECL).every(([c, ids]) => DL.D.filter(d => DL.CHEM[d.id] && DL.CHEM[d.id].no === c).map(d => d.id).sort().join(',') === ids);
  check(declOk && DL.D.every(d => DL.CHEM[d.id]), 'chemical class: every card has a keyed cell or a recorded reason (blank 7, therapeutic group 1, conflict 5, p. 5 offset 4)');
  const declQ = DL.D.filter(d => DL.CHEM[d.id].no && [0, 1, 2].some(r => DL.makeQuestion(d, T, 'chem', rngOf(r))));
  check(!declQ.length, 'no chemical-class question is built from a blank, conflicting or one-row-off cell', declQ.map(d => d.id).join(', '));
  const declShown = DL.D.filter(d => DL.CHEM[d.id].no && (!DL.CHEM[d.id].why || (DL.CHEM[d.id].no !== 'blank' && !DL.CHEM[d.id].shown.length) || !DL.CHEM[d.id].shown.every(citeOk)));
  check(!declShown.length, 'each chemical class not asked shows its reason, and the cells and slides behind it with sources', declShown.map(d => d.id).join(', '));
  const conflictBoth = ['pimecrolimus', 'tacrolimus', 'ruxolitinib', 'upadacitinib', 'tofacitinib'].filter(id => {
    const sh = DL.CHEM[id].shown; return !(sh.some(s => s.by === 'chart' && /Peptides/.test(s.t)) && sh.some(s => s.by !== 'chart')); });
  check(!conflictBoth.length, 'the "Peptides" conflicts show both the chart cell and the lecture source', conflictBoth.join(', '));
  const p5 = ['methoxsalen', 'zincoxide'].filter(id => { const c = DL.CHEM[id]; return id === 'methoxsalen' ? !c.src.some(s => s.by === 'sikazwe' && /DPAW 18/.test(s.cite)) : !/^Chart p\. 1$/.test(c.src[0].cite); });
  check(!p5.length, 'p. 5 offset rows keyed only with a slide (methoxsalen: furanocoumarin, DPAW 18); zinc oxide keyed from its aligned p. 1 cell', p5.join(', '));
  const ab = ['guselkumab', 'tildrakizumab', 'risankizumab', 'secukinumab', 'brodalumab', 'ixekizumab'].filter(id => !DL.CHEM[id].src.some(s => s.by === 'smith' && /antibod/i.test(s.t)));
  check(!ab.length, 'the six p. 5 antibodies ("Peptides (Proteins)" read across the page break) each carry the slide that says antibody', ab.join(', '));
  // brands
  const noBrand = DL.D.filter(d => !d.brands.length).map(d => d.id).sort().join(',');
  check(noBrand === 'avobenzone,azithromycin,bemotrizinol,dioxybenzone,erythromycin,homosalate,meradimate,octinoxate,octisalate,oxybenzone,padimate,spironolactone,tio2,zpt' && made2.brand === 65,
    `brand: 65 drugs get a question; the 14 with no brand on the chart get none (${made2.brand})`);
  const typo = [['secukinumab', 'Cosentyx', 'Consentyx'], ['petrolatum', 'Vaseline', 'Vasoline'], ['selenium', 'Selsun Blue', 'Selsum Blue'], ['desonide', 'Desonate', 'Desonate (Desonide)']]
    .filter(([id, good, printed]) => { const d = DL.D.find(x => x.id === id); return !d.brands.includes(good) || d.brands.includes(printed) || !DL.brandSrc(d).some(s => s.t.includes(`the chart prints "${printed}"`)); });
  check(!typo.length, 'brand typos: the key is the correct spelling and the source line shows the chart\'s print (Consentyx, Vasoline, Selsum Blue, Desonate (Desonide))', typo.map(t => t[0]).join(', '));
  // Rx/OTC
  const rxv = id => DL.rxLines(DL.D.find(x => x.id === id)).map(l => l.rx).join('|');
  check(rxv('lidocaine') === 'Rx and OTC' && rxv('adapalene') === 'Rx and OTC' && rxv('hydrocortisone') === 'Rx|OTC' && rxv('zincoxide') === 'OTC|OTC' && rxv('padimate') === 'OTC' && rxv('tacrolimus') === 'Rx',
    'Rx/OTC: lidocaine and adapalene "Rx and OTC"; hydrocortisone Rx on its class 5 line and OTC on its class 7 line (the stem names the line); zinc oxide OTC on both pages');
  check(made2.rx === DL.D.length, `Rx/OTC: every drug gets a question (${made2.rx})`);
  // potency
  const st = DL.D.filter(d => d.cls === 'steroid');
  const twice = st.filter(d => d.potency.length > 1).map(d => d.id).sort().join(',');
  check(made2.potency === st.length && st.every(d => d.lines.length === d.potency.length) && twice === 'betameth,desonide,fluocinolone,hydrocortisone',
    `potency: every topical steroid (${st.length}) gets a question; the four listed twice (${twice}) are asked "one of them", with the other line's class never offered`);
  check(made2.clsRev === DL.D.length && made2.useRev === 77 && made.use === 75 && made2.chem === 62,
    `reverse and chemical-class coverage: class → drug ${made2.clsRev}, indication → drug ${made2.useRev}, chemical class ${made2.chem}`);
  const cov = DL.coverage(T);
  check(Object.keys(DL.KINDS).filter(k => made[k] !== undefined || made2[k] !== undefined).every(k => cov[k].n === (made[k] !== undefined ? made[k] : made2[k])) &&
    Object.keys(DL.KINDS).every(k => cov[k].n + Object.values(cov[k].none).flat().length === DL.D.length),
    'the About coverage line agrees with the generated questions and accounts for every drug');
  console.log('  coverage per kind (drugs with a question / 79; reasons for the rest):');
  for (const [k, o] of Object.entries(cov)) console.log(`    ${DL.KIND_HEAD[k]}: ${o.n}` + Object.entries(o.none).map(([r, ns]) => `\n      ${ns.length}: ${r}${ns.length <= 12 ? ' (' + ns.join(', ') + ')' : ''}`).join(''));
}

console.log('=== Phase 1 (plan 2026-11-08): new kinds, labels, scope ===');
{
  const ui = code('druglist_ui.js');
  const rngOf = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const byName = n => DL.D.find(d => d.name === n);
  const u = a => [...new Set(a)].slice(0, 8).join('; ');
  // labels: "Target" exactly where a target question exists
  const tq = DL.D.filter(d => DL.makeQuestion(d, T, 'target', rngOf(1)));
  const ht = DL.D.filter(DL.hasTarget);
  check(ht.length === 50 && tq.length === 50 && ht.every(d => tq.includes(d)),
    `"Target" on the ${ht.length} drugs with a molecular target (each has a Target question); the other ${DL.D.length - ht.length} read "How it acts"`);
  check(/No single receptor or enzyme target named in the lecture/.test(DL.NO_TARGET_WHY) && /How does it act\?/.test(ui) && /'How it acts'/.test(ui),
    'the "How it acts" label gives its reason, and Recall asks "How does it act?" for those drugs');
  check(!/ a indication/.test(ui) && !/ a indication/.test(code('druglist_data.js')), 'no "a indication" anywhere in the Drug list');
  // independent lists for the strict wrong options (drugs with a boxed warning on their US label or a known
  // photosensitizing effect, from common knowledge; never offered as wrong)
  const BOXED_REAL = ['methotrexate', 'isotretinoin', 'acitretin', 'tacrolimus', 'pimecrolimus', 'ruxolitinib', 'upadacitinib', 'tofacitinib', 'brodalumab',
    'methoxsalen', 'clindamycin', 'metronidazole', 'ketoconazole', 'tretinoin', 'spironolactone', 'cyclosporine', 'etanercept', 'adalimumab', 'infliximab', 'golimumab', 'certolizumab'];
  const PHOTO_REAL = ['padimate', 'oxybenzone', 'dioxybenzone', 'octinoxate', 'octisalate', 'homosalate', 'meradimate', 'avobenzone', 'bemotrizinol', 'adapalene', 'coaltar',
    'tmpsmx', 'methotrexate', 'tacrolimus', 'pimecrolimus', 'tretinoin', 'isotretinoin', 'acitretin', 'tazarotene', 'ketoconazole', 'dapsone', 'doxycycline', 'minocycline',
    'sarecycline', 'selenium', 'zpt', 'anthralin', 'spironolactone', 'methoxsalen', 'calcipotriene', 'bpo', 'salicylic', 'sulfur', 'metronidazole'];
  const bad = {shape: [], key: [], wrong: [], why: [], src: [], name: []}, made3 = {aeUniq: 0, boxed: 0, photo: 0};
  const RUNS3 = 200;
  for (const k of Object.keys(made3)) for (const d of DL.D) {
    let got = 0;
    for (let r = 0; r < RUNS3; r++) {
      const q = DL.makeQuestion(d, T, k, rngOf(r * 31 + d.id.length + k.length));
      if (!q) continue; got++;
      const tag = d.id + ':' + k, o = q.options, right = o.filter(x => x.correct), wrong = o.filter(x => !x.correct);
      const want = k === 'aeUniq' ? DL.AE_UNIQ[d.id].opts.length + 1 : 4;
      if (o.length !== want || right.length !== 1 || new Set(o.map(x => x.t)).size !== o.length) bad.shape.push(tag);
      if (!right[0] || right[0].t !== d.name) bad.key.push(tag);
      if (q.stem.includes(d.name)) bad.name.push(tag);
      for (const w of wrong) {
        const o2 = byName(w.t);
        if (!o2) { bad.wrong.push(tag + ' ' + w.t); continue; }
        if (k === 'boxed' && (o2.boxed || BOXED_REAL.includes(o2.id) || (o2.notes || []).some(n => /boxed/i.test(n.t)) || !DL.BOX_NONE.includes(o2.id))) bad.wrong.push(tag + ' ' + w.t);
        if (k === 'photo' && ((o2.photo && !o2.photo.no) || PHOTO_REAL.includes(o2.id) || !(o2.id in DL.PHOTO_NOT))) bad.wrong.push(tag + ' ' + w.t);
        if (k === 'aeUniq' && (o2.cls !== d.cls || !DL.AE_UNIQ[d.id].opts.includes(o2.id))) bad.wrong.push(tag + ' ' + w.t);
        const why = (q.wrongWhy || []).find(x => x.opt === w.t);
        if (!why || !why.t || (why.by !== 'remark' && !citeOk(why)) || (k !== 'photo' && why.by === 'remark')) bad.why.push(tag + ' ' + w.t);
      }
      if (!q.src.length || !q.src.every(citeOk)) bad.src.push(tag);
      if (k === 'boxed' && q.src[0] !== d.boxed) bad.src.push(tag + ' not its boxed line');
      if (k === 'photo' && q.src[0] !== d.photo) bad.src.push(tag + ' not its photo line');
      if (k === 'aeUniq' && !(d.ae || []).some(a => a.t.toLowerCase().includes(DL.AE_UNIQ[d.id].effect.split(' ')[0]))) bad.src.push(tag + ' effect not on its card');
    }
    if (got && got !== RUNS3) bad.shape.push(d.id + ':' + k + ' unstable');
    if (got) made3[k]++;
  }
  const n3 = Object.values(made3).reduce((a, b) => a + b, 0) * RUNS3;
  check(!bad.shape.length, `adverse effect → drug, boxed warning, photosensitizing: options distinct, exactly one correct, 4 (adverse effect: the class's drugs on the slide) (${n3} questions over ${RUNS3} draws)`, u(bad.shape));
  check(!bad.key.length && !bad.name.length, 'the key is the drug itself and the stem does not name it', u(bad.key.concat(bad.name)));
  check(!bad.wrong.length, 'every wrong option is false by source: boxed — none on her slides and none known on its label; photosensitizing — a source says not, a physical sunblock, or no known link; adverse effect — the other drug(s) of the class on the slide', u(bad.wrong));
  check(!bad.why.length, 'every wrong option shows its reason (cited, or "no course source links it" for photosensitizing only)', u(bad.why));
  check(!bad.src.length, 'every answer cites the drug\'s own boxed / photosensitizing / adverse-effect line', u(bad.src));
  check(made3.aeUniq === 3 && made3.boxed === 7 && made3.photo === 8, `coverage: adverse effect → drug ${made3.aeUniq} (cyclosporine, tacrolimus, minocycline), boxed warning ${made3.boxed}, photosensitizing ${made3.photo}`);
  const ad = DL.D.find(d => d.id === 'adapalene');
  check(ad.photo && ad.photo.no && /PCol 18/.test(ad.photo.cite), 'adapalene is "sun stable", not photosensitizing (PCol 18), as the bank keys it (L2-017, L3C-044)');
  check(/aeUniq: 'Adverse effect → drug', boxed: 'Boxed warning', photo: 'Photosensitizing'/.test(code('druglist_data.js')) && /k === 'target' \|\| k === 'cls'/.test(ui),
    'the three new kinds are in Ask about, off by default (Target and Class stay the default)');
  check(/why: 'Why it helps'/.test(ui) && /ae: 'Adverse effects'/.test(ui), 'Recall offers Why it helps and Adverse effects');
  // scope
  const sc = {}; DL.D.forEach(d => { const k = DL.scopeOf(d); sc[k] = (sc[k] || 0) + 1; });
  check(sc.taught === 64 && sc.chartonly === 4 && sc.optional === 11 && DL.D.filter(d => DL.scopeOf(d) === 'chartonly').every(d => d.cls === 'anesth') &&
    DL.D.filter(d => DL.scopeOf(d) === 'optional').every(d => d.cls === 'steroid') && /T 590–593/.test(DL.SCOPE_WHY.excluded) && /T 606–618/.test(DL.SCOPE_WHY.chartonly),
    `scope tags: Exam 1 · taught ${sc.taught}, Exam 1 · chart only ${sc.chartonly} (sunburn anesthetics), optional ${sc.optional} (steroid products off Dr. Sikazwe's pages); p. 7 excluded`);
  // the UI: the retry freezes, a rating counts only on a click
  check(/!quiz\.frozen && quiz\.sig !== qsig\(\)/.test(ui) && /function retrySet/.test(ui) && /quiz\.ans\[q\.id\] === undefined \|\|/.test(ui) && /options: shuffle\(q\.options\)/.test(ui) &&
    /Back to the filtered list/.test(ui) && /they apply after this set/.test(ui),
    'Retry the missed: a frozen set (never rebuilt from the filters), with the unanswered questions, the same options reshuffled, Back to the filtered list, and a line when the filters change');
  const noteCalls = (ui.match(/\bnote\(/g) || []).length;
  const checkH = (ui.match(/else if \(a === 'check' && d\) \{[\s\S]*?\n    \}/) || [''])[0] + (ui.match(/else if \(a === 'revealall'\)[^\n]*/) || [''])[0];
  check(noteCalls === 4 && !/note\(/.test(checkH) && /Not counted until you choose one/.test(ui),
    'a rating is counted only by a click on Forgot / Partly / Knew (or a Quiz me answer); Check and Check all count nothing');
}

console.log('=== Fact map (drugfacts.js) and status words ===');
{
  const ui = code('druglist_ui.js');
  const DF = sb.X.DRUGFACTS || vm.runInContext('typeof DRUGFACTS !== "undefined" ? DRUGFACTS : null', sb);
  check(!!DF && C.files.indexOf('drugfacts.js') > C.files.indexOf('druglist_data.js') && C.files.indexOf('drugfacts.js') < C.files.indexOf('druglist_ui.js'),
    'drugfacts.js is in course.js files, after the data and before the tab');
  if (DF) {
    const qb = {}; QUESTIONS.forEach(q => { qb[q.id] = q; });
    const corr = q => (q.options || []).filter(o => o.correct).map(o => o.t).join(' ');
    const badM = [], links = Object.entries(DF.MAP).flatMap(([qid, fs]) => fs.map(f => [qid, ...f.split(':')]));
    for (const [qid, id, f] of links) {
      const q = qb[qid], d = DL.D.find(x => x.id === id);
      if (!q) { badM.push(qid + ' not in bank'); continue; }
      if (!d) { badM.push(qid + ' ' + id + ' no card'); continue; }
      if (!DF.FIELDS[f]) badM.push(qid + ' ' + f + ' no field');
      if (q.lowYield) badM.push(qid + ' lowYield');
      if (!new RegExp(d.q, 'i').test(q.stem + ' • ' + corr(q))) badM.push(`${qid} does not name ${id}`);
    }
    check(!badM.length, `every mapping (${links.length} on ${Object.keys(DF.MAP).length} questions) names a bank question that is in scored practice and names its drug in the stem or keyed answer`, badM.slice(0, 8).join('; '));
    const dup = links.map(l => l.join(':')).filter((x, i, a) => a.indexOf(x) !== i);
    check(!dup.length, 'no mapping is listed twice', dup.join(', '));
    const leak = links.filter(([qid, id]) => id === 'padimate' && /sulfamethoxazole|dapsone/i.test(qb[qid].stem));
    check(!leak.length && !links.some(([, id, f]) => id === 'metronidazole' && f === 'use'),
      'no mapping from another drug\'s text (PABA in the sulfonamide and dapsone questions); none on the held metronidazole indication conflict');
    check(links.some(l => l.join(':') === 'L2-060:tacrolimus:target') && links.some(l => l.join(':') === 'L2-076:cyclosporine:ae') && links.some(l => l.join(':') === 'L3-118:cyclosporine:boxed'),
      'spot checks: L2-060 tacrolimus target (FKBP), L2-076 cyclosporine adverse effect, L3-118 cyclosporine boxed warning');
    const cnt = {}; links.forEach(([, , f]) => { cnt[f] = (cnt[f] || 0) + 1; });
    console.log(`  ${links.length} mappings, ${Object.keys(DF.BY).length} drugs: ` + Object.entries(cnt).map(([f, n]) => `${f} ${n}`).join(', '));
    // status words (plan §4.1)
    const day = 86400000, t0 = Date.UTC(2026, 10, 2, 15), A = (qid, result, at, conf) => Object.assign({qid, result, at}, conf ? {conf} : {});
    const S = (ans, q) => DF.status(ans, q || ['Q1']).label;
    check(S([]) === 'Not practised' && DF.status([], ['Q1']).weak === false, 'untested: "Not practised", never weak');
    check(S([A('Q2', 'wrong', t0)]) === 'Not practised', 'answers to other questions do not count');
    check(S([A('Q1', 'correct', t0)]) === 'Remembered', 'one right answer: Remembered');
    check(S([A('Q1', 'correct', t0), A('Q1', 'correct', t0 + 3600000)]) === 'Remembered', 'two right answers the same day: Remembered, never Kept');
    check(S([A('Q1', 'correct', t0), A('Q1', 'correct', t0 + day)]) === 'Kept on a later day', 'right again on a later day: Kept on a later day');
    check(S([A('Q1', 'correct', t0), A('Q1', 'wrong', t0 + day), A('Q1', 'correct', t0 + 2 * day)]) === 'Remembered', 'a miss in between: Remembered, not Kept');
    check(S([A('Q1', 'correct', t0), A('Q1', 'wrong', t0 + day)]) === 'Forgot' && DF.status([A('Q1', 'wrong', t0)], ['Q1']).weak, 'last answer wrong: Forgot (weak)');
    check(S([A('Q1', 'correct', t0, 'shaky')]) === 'Right, but unsure' && S([A('Q1', 'guessed', t0)]) === 'Right, but unsure', '"Not sure" or "I guessed": Right, but unsure');
    check(S([A('Q1', 'correct', t0, 'shaky'), A('Q1', 'correct', t0 + day)]) === 'Remembered', 'unsure, then right next day: Remembered (the unsure answer does not start a Kept run)');
    const st = DF.status([A('Q1', 'correct', t0 + day), A('Q2', 'wrong', t0)], ['Q1', 'Q2']);
    check(st.label === 'Remembered' && st.n === 2 && st.right === 1, 'answers in any order: the latest decides; counts of answers and right answers kept apart');
    // the Drug list never writes the core's progress
    check(!/\bDB\s*(\.[\w$]+|\[[^\]]+\])*\s*(=[^=]|\+\+|--|\.push\(|\.splice\()|\b(record|save|markShaky|markGuessed|markSure|st)\(/.test(ui.replace(/\.st\(|state: st/g, '')) &&
      !/\bDB\b/.test(code('drugfacts.js')), 'the Drug list reads the core\'s progress (DB) only: no assignment, record() or save()');
  }
}

console.log('=== The original chart pages (chart/, chart_boxes.js) ===');
{
  const CB = sb.CHART_BOXES || vm.runInContext('typeof CHART_BOXES !== "undefined" ? CHART_BOXES : null', sb);
  check(!!CB, 'chart_boxes.js is in course.js files and defines CHART_BOXES');
  if (CB) {
    const jpgSize = f => { const b = fs.readFileSync(f); let i = 2;
      while (i < b.length) { if (b[i] !== 0xFF) return null; const m = b[i + 1], len = b.readUInt16BE(i + 2);
        if (m >= 0xC0 && m <= 0xC3) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; i += 2 + len; } return null; };
    const imgBad = [];
    for (let p = 1; p <= 7; p++) {
      const pg = CB.pages[p], f = pg && path.join(__dirname, '..', 'chart', pg.file);
      if (!pg || !fs.existsSync(f)) { imgBad.push(`p. ${p} missing`); continue; }
      const sz = jpgSize(f);
      if (!sz || sz[0] !== pg.w || sz[1] !== pg.h) imgBad.push(`p. ${p} size ${sz} vs ${pg.w}x${pg.h}`);
      if (fs.statSync(f).size > 400000) imgBad.push(`p. ${p} over 400 kB`);
    }
    check(!imgBad.length, 'all 7 page images exist in chart/ at their recorded size (each under 400 kB)', imgBad.join('; '));
    const TYPOS = {trimethoprim: 'trimetoprim', ethylhexyl: 'ethyhexyl'};
    const gen = l => { let g = DL.norm(l.split(/[,(]/)[0]); for (const [k, v] of Object.entries(TYPOS)) g = g.replace(k, v); return g; };
    const flat = Object.entries(CB.drugs).flatMap(([id, bs]) => bs.map(b => Object.assign({id}, b))).concat(CB.other.map(b => Object.assign({id: null}, b)));
    const inScope = rows.map((r, i) => [r, i]).filter(([r]) => r[2]);
    const missing = inScope.filter(([r, i]) => !flat.some(b => b.line === i && b.id === r[2] && b.page === r[0]));
    check(!missing.length, `every in-scope chart line (${inScope.length}) has a box on its page under its card`, missing.map(([r]) => r[1]).join('; '));
    const noBox = DL.D.filter(d => !(CB.drugs[d.id] || []).length || !(d.pages || [d.page]).every(p => CB.drugs[d.id].some(b => b.page === p)));
    check(!noBox.length, `every card (${DL.D.length}) has a box on each of its chart pages`, noBox.map(d => d.id).join(', '));
    const p7 = rows.map((r, i) => [r, i]).filter(([r]) => !r[2]);
    check(p7.every(([r, i]) => CB.other.some(b => b.line === i && b.page === r[0])) && CB.other.length === p7.length,
      `the ${p7.length} lines with no card (p. 7) have their own boxes`);
    const geoBad = flat.filter(b => !(b.x0 >= 0 && b.y0 >= 0 && b.x1 <= 1 && b.y1 <= 1 && b.x1 - b.x0 > 0.8 && b.y1 > b.y0 && b.y1 - b.y0 < 0.25 && b.row >= 1));
    check(!geoBad.length, `every box (${flat.length}) lies inside its page image and spans the table's width, one row high`, geoBad.map(b => rows[b.line][1]).join('; '));
    const nameBad = flat.filter(b => !DL.norm(b.text).includes(gen(rows[b.line][1])));
    check(!nameBad.length, 'every box holds the line\'s generic name as the chart prints it', nameBad.map(b => `${rows[b.line][1]} → "${b.text}"`).join('; '));
    const key = b => b.page + ':' + b.row, byRow = {};
    flat.forEach(b => (byRow[key(b)] = byRow[key(b)] || []).push(b));
    const shared = Object.values(byRow).filter(v => v.length > 1).map(v => v.map(b => b.id).sort().join('+')).sort();
    check(shared.join(',') === 'dioxybenzone+oxybenzone,homosalate+octisalate',
      `two lines share a row only where the chart prints them in one cell (${shared.join(', ')})`);
    const dup = DL.D.filter(d => (CB.drugs[d.id] || []).length > 1).map(d => d.id).sort().join(',');
    check(dup === 'betameth,desonide,fluocinolone,hydrocortisone,zincoxide', `the drugs listed twice have both rows (${dup})`);
    const tac = (CB.drugs.tacrolimus || [])[0];
    check(tac && tac.page === 2 && tac.row === 3 && /Tacrolimus \(Protopic\)/.test(tac.text), 'tacrolimus: row 3 on page 2, "Tacrolimus (Protopic)"');
    const ui = code('druglist_ui.js');
    check(ui.includes("Dr. Smith, 10/29: \"I don\\'t cover these medications.\"") && /10\/29 T 590–593/.test(ui),
      'the Chart view marks page 7 with Dr. Smith\'s words, cited (10/29 T 590–593)');
    check(/BUILD\.preview \? '\.\.\/' : ''/.test(ui) && /'chart\/'/.test(ui), 'the chart images load from chart/ beside the page (../chart/ in /preview/), as slides/ do');
    const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
    check(!/chart\//.test(sw), 'the service worker does not precache the chart images');
  }
}

console.log('=== Storage and stub DOM ===');
for (const f of ['druglist_data.js', 'druglist_ui.js', 'drugfacts.js']) {
  const hits = code(f).match(/localStorage|sessionStorage|indexedDB|\.setItem\(|document\.cookie|caches\.open/g);
  check(!hits, `${f} writes to no storage`, hits && hits.join(', '));
}
const stub = {console, document: {getElementById: () => ({}), querySelector: () => null}, DRUGLIST: DL};
vm.createContext(stub);
let out;
try { out = vm.runInContext(here('druglist_ui.js') + '\nDRUGLIST_UI;', stub); } catch (e) { out = e; }
check(out === null, 'druglist_ui.js does nothing (returns null, throws nothing) in a stub DOM', String(out));
finish(NAME);
