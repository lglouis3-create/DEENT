/* qualifier_check.js: shortened rows keep the qualifiers their slide prints (Louis, 2026-11-15).
   Each rule: a file, a text that must be present, and the slide or lecture it comes from.
   node qualifier_check.js */
const fs = require('fs');
const R = [
 ['guide.js', 'dryness from cleansing or the environment', 'Patel Dermatitis slide 18: the dryness has a cause'],
 ['guide.js', 'keratinocytes (e.g. TSLP) and dendritic cells', 'Patel Dermatitis slide 18: who starts the T-cell response'],
 ['dz_parts/part_A.json', 'dryness from cleansing or the environment', 'slide 18, Diseases card'],
 ['dz_parts/part_A.json', 'keratinocytes (e.g. TSLP)', 'slide 18, Diseases card'],
 ['guide.js', 'tomato', 'Patel Dermatitis slide 20: the food list'],
 ['guide.js', 'may solubilize', 'PCol slide 39: salicylic acid mechanism is hedged'],
 ['guide.js', 'postulated mechanism', 'PCol slide 36: benzoyl peroxide mechanism is hedged'],
 ['guide.js', 'mechanism not fully known', 'PCol slides 53-57: coal tar'],
 ['guide.js', 'incompletely understood mechanisms', 'PCol slide 78: psoralens'],
 ['guide.js', 'recalcitrant to standard therapies', 'PCol slide 19: isotretinoin'],
 ['guide.js', 'mild to moderately severe facial acne', 'PCol slides 17-18: tazarotene'],
 ['guide.js', 'fair-skinned people', 'PCol slides 43-45: tetracycline photosensitivity'],
 ['reference.js', 'may solubilize', 'PCol slide 39, Reference'],
 ['reference.js', 'mechanism not fully known', 'PCol slides 53-57, Reference'],
];
let fail = 0;
for (const [f, t, why] of R) {
  const s = fs.readFileSync(f, 'utf8');
  const ok = s.toLowerCase().includes(t.toLowerCase());
  if (!ok) fail++;
  console.log((ok ? '  ok    ' : '  FAIL  ') + f + ' keeps "' + t + '"' + (ok ? '' : '  (' + why + ')'));
}
console.log((fail ? 'FAIL' : 'PASS') + ': qualifier_check.js: ' + (fail ? fail + ' of ' + R.length + ' rules failed' : R.length + ' rules hold'));
process.exit(fail ? 1 : 0);
