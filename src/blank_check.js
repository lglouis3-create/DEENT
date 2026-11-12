/* ==========================================================================
   blank_check.js: the fill-in-the-blank items (q10_blank.js) against the
   core's own grading (views.js gradeBlank and blankNorm, strict: COURSE.blank
   unset). Every accept entry, and the shown answer in capitals, with a final
   period and with spaces, must be graded right; three plausible wrong typings
   per item (a confusable term, a neighbouring number, a one-letter slip) must
   be graded wrong. Written 2026-11-09 with the items; add a row to W for each
   new blank item. Run: node src/blank_check.js
   ========================================================================== */
// (see the header)
// Grade every accept variant and 3 plausible wrong typings per blank item with the core's own
// gradeBlank/blankNorm (extracted from views.js), strict mode (COURSE.blank unset).
const fs = require('fs'), vm = require('vm'), path = require('path');
const src = process.argv[2] || __dirname;
const v = fs.readFileSync(path.join(src, 'views.js'), 'utf8');
const a = v.indexOf('const BLANK_GREEK'), b = v.indexOf('/* the verdict, the answer');
const ctx = {COURSE: {}}; vm.createContext(ctx);
vm.runInContext(v.slice(a, b) + ';this.gradeBlank=gradeBlank;this.blankNorm=blankNorm;', ctx);
function loadBank(src){
  const ctx={console,require,module:{},window:{}};vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(src,'course.js'),'utf8')+';this.COURSE=COURSE;',ctx);
  const C=ctx.COURSE;
  const code=C.files.filter(f=>/^q\d+_/.test(f)).map(f=>fs.readFileSync(path.join(src,f),'utf8')).join('\n;\n');
  vm.runInContext(code+';this.Q=QUESTIONS;this.T=TOPICS;',ctx);
  return {C,Q:ctx.Q,T:ctx.T};
}
const L = loadBank(src);
ctx.QUESTIONS = L.Q;  // since kit #101 gradeBlank reads the bank (another item's accepted answer is plain wrong)
const B = L.Q.filter(q => q.type === 'blank');
const W = {
 'BL1-001': ['GRE', 'retinoid response element', 'TRE'],
 'BL1-002': ['RARE', 'glucocorticoid responsive element', 'TRE'],
 'BL2-001': ['vitamin A', 'retinoic acid', 'vitamin E'],
 'BL2-002': ['RAR', 'RXR-beta', 'VDR'],
 'BL2-003': ['6', '60', '4'],
 'BL2-004': ['cyclophilin', 'calcineurin', 'FKPB'],
 'BL2-005': ['FKBP', 'calmodulin', 'cyclophillin'],
 'BL2-006': ['methyl', 'phosphorus', 'calcium'],
 'BL2-007': ['phosphodiesterase 3', 'PDE5', 'phosphodiesterase'],
 'BL2-008': ['cGMP', 'ATP', '5\'-AMP'],
 'BL2-009': ['10', '50', '1000'],
 'BL2-010': ['2', '1', '5'],
 'BL2-011': ['50S', '70S', '3OS'],
 'BL2-012': ['30S', '70S', '5OS'],
 'BL3-001': ['dihydropteroate synthase', 'thymidylate synthase', 'dihydrofolate reductose'],
 'BL3-002': ['folic acid', 'dihydrofolic acid', 'PAB'],
 'BL3-003': ['thymidylate synthase', 'dihydropteroate synthase', 'DHF'],
 'BL3-004': ['CD28', 'CTLA-4', 'CD40'],
 'BL3-005': ['CD28', 'PD-1', 'CTLA-3'],
 'BL3-006': ['IL-13 receptor alpha', 'IL-4', 'IL-2 receptor alpha'],
 'BL3-007': ['IL-17RA', 'IL-23', 'IL-17F'],
 'BL3-008': ['IL-17A', 'IL-23 receptor', 'IL-17RB'],
 'BL3-009': ['p19', 'p35', 'p4O'],
 'BL3-010': ['p40', 'p35', 'p9'],
 'BL3-011': ['IL-17A', 'TNF-beta', 'TNF receptor'],
 'BL3-012': ['tyrosine kinase', 'calcineurin', 'Janis kinase'],
 'BL3-013': ['JAK3', 'TYK2', 'JAK1'],
 'BL3C-001': ['400', '320', '360'],
 'BS3-001': ['calcium', 'iron', 'zink'],
 'BS3-002': ['alcohol dehydrogenase', 'CYP3A4', 'aldehyde oxidase'],
 'BS3-003': ['2D6', '1A2', '3A5'],
 'BS3-004': ['5', '4', 'seven'],
 'BS3-005': ['11β-hydroxylase', '17β-HSD', '11α-HSD'],
 'BS4-001': ['pyrimidine', 'purine', 'pteridne'],
 'BS4-002': ['FKBP', 'calcineurin', 'cyclophillin'],
 'BS4-003': ['lactam', 'macrolide', 'lacton'],
 'BS4-004': ['esterase', 'CYP3A4', 'carboxylesterace'],
 'BS4-005': ['methionine', 'cystine', 'serine'],
 'BS4-006': ['iron', 'magnesium', 'calcuim'],
 'BP5-001': ['1', '0.25', '5'],
 'BP5-002': ['2', '3', '1.5'],
 'BP5-003': ['2.5', '4', '1'],
 'BP5-004': ['1', '8', '2'],
 'BP5-005': ['4', '2', '7'],
 'BP5-006': ['14', '3.5', '4'],
 'BP5-007': ['2', '1', '3'],
 'BP5-008': ['60', '35', '52'],
 'BP5-009': ['35', '30', '60'],
 'BP5-010': ['100', '49', '196'],
 'BP5-011': ['28', '60', '112'],
 'BP5-012': ['less than 25', '25-75', 'over 50'],
 'BP5-013': ['subacute', 'acute', 'cronic'],
 'BP5-014': ['acute', 'chronic', 'subacut'],
 'BP5-015': ['redness', 'dryness', 'pruritas'],
 'BP5-016': ['eczema', 'urticaria', 'food allergie'],
 'BP5-017': ['IL-4', 'FLT', 'filagrin'],
 'BP5-018': ['0.05', '0.5', '5'],
 'BP5-019': ['30', '10', '5'],
 'BP5-020': ['occlusive', 'emollient', 'humectent'],
 'BP5-021': ['2-3', '7', '14'],
 'BP5-022': ['3', '14', '2'],
 'BP5-023': ['1', '4', '6'],
 'BP5-024': ['clobetasol', 'triamcinolone', 'hydrocortisne'],
 'BP5-025': ['medium', 'very high', 'class III'],
 'BP5-026': ['high', 'class II', 'medium'],
 'BP5-027': ['cream', 'gel', 'ointmnt'],
 'BP5-028': ['pimecrolimus', 'crisaborole', 'tacrolimis'],
 'BP5-029': ['tacrolimus', 'crisaborole', 'pimecrolimis'],
 'BP5-030': ['0.1', '0.3', '1'],
 'BP5-031': ['2', '12', '8'],
 'BP5-032': ['24-48', '2-4', '1-2'],
 'BP5-033': ['second', 'first', 'thrid'],
 'BP5-034': ['6', '2', '24'],
 'BP5-035': ['IL-4', 'IL-17', 'IL-31'],
 'BP5-036': ['inactivated', 'flu', 'attenuated'],
 'BP5-037': ['200', '600', '150'],
 'BP5-038': ['2.5', '2', '1000'],
 'BP5-039': ['15', '60', '5-10'],
 'BP5-040': ['300', '200', '100'],
 'BP5-041': ['tofacitinib', 'abrocitinib', 'ruxolitnib'],
 'BP5-042': ['16', '8', '4'],
 'BP5-043': ['bath', 'baby powder', 'barier'],
 'BP5-044': ['3', '4', '6'],
 'BP5-045': ['30-100', '1-10', '10-40'],
 'BP5-046': ['acidic', 'neutral', 'alkalin'],
 'BP5-047': ['Staphylococcus aureus', 'Malassezia', 'Candida albican'],
 'BP5-048': ['3', '14', '2'],
 'BSX-001': ['6', '10', '400'],
 'BSX-002': ['40', '5', '3'],
 'BKX-001': ['steroid', 'sterol', 'secosterod'],
 'BKX-002': ['25-hydroxylase', 'CYP2R1', '1-beta-hydroxylase'],
 'BP6-001': ['30', '14', '3'],
 'BP6-002': ['7', '60', '90'],
 'BP6-003': ['1', '3', 'one'],
 'BP6-004': ['8', '14', '18'],
 'BP6-005': ['1', '3', '4'],
 'BP6-006': ['20', '5', '2.5'],
 'BP7-001': ['14', '3', '5'],
 'BP7-002': ['10', '2', '3'],
 'BP7-003': ['20', '8', '5'],
 'BP7-004': ['3', '8', '10'],
 'BP7-005': ['6', '3', '12'],
 'BP7-006': ['2', '6', '8'],
 'BP7-007': ['folinic acid', 'leucovorin', 'folic acd'],
 'BP8O-001': ['15', '2', '24'],
 'BP8O-002': ['30', '3', '42'],
 'BP8O-003': ['60', '8', '112'],
 'BP8O-004': ['200', '44', '4.4'],
 'BP8O-005': ['500', '1200', '50'],
};
let fail = 0, nearCount = 0, n = 0;
const rows = [];
for (const q of B) {
  for (const x of q.accept) { n++; const g = ctx.gradeBlank(q, x); if (!g.ok) { fail++; console.log('ACCEPT GRADED WRONG', q.id, x); } }
  // the shown answer typed in other case and with a final period
  for (const x of [q.accept[0].toUpperCase(), q.accept[0] + '.', ' ' + q.accept[0] + ' ']) { n++; if (!ctx.gradeBlank(q, x).ok) { fail++; console.log('VARIANT GRADED WRONG', q.id, JSON.stringify(x)); } }
  const w = W[q.id];
  if (!w || w.length !== 3) { fail++; console.log('NO WRONG TYPINGS', q.id); continue; }
  for (const x of w) { n++; const g = ctx.gradeBlank(q, x); if (g.ok) { fail++; console.log('WRONG GRADED RIGHT', q.id, x); } if (g.near) nearCount++; rows.push(`${q.id}\t${x}\t${g.ok ? 'RIGHT' : 'wrong'}${g.near ? ' (near: close to an accepted answer)' : ''}`); }
}
const missing = Object.keys(W).filter(id => !B.some(q => q.id === id));
if (missing.length) { fail++; console.log('wrong typings for ids not in bank:', missing.join(' ')); }
if (process.env.BLANK_TSV) fs.writeFileSync(process.env.BLANK_TSV, rows.join('\n') + '\n');
console.log(`${fail ? 'FAIL' : 'PASS'}: blank_check.js: ${B.length} blank items; ${n} gradings; ${nearCount} wrong typings flagged "Close"; ${fail ? fail + ' problem(s)' : 'all as expected'}`);
process.exit(fail ? 1 : 0);
