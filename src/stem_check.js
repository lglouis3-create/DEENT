/* stem_check.js: a stem asks the subject, never the slide (src/CLAUDE.md; Louis, 2026-11-14, on "Which statement about the
   skin protectants zinc oxide and petrolatum matches her slide?": "i don't think a question would be phrased or written
   like this"). Fails when a question's stem or an option's text names a slide, a deck, a lecture or the professor, or is an
   unfocused "Which statement / pairing / description ... is correct?" (it cannot be answered before the options are read).
   node stem_check.js   (reads the question files listed in course.js) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const sb = {console, window: {}}; vm.createContext(sb);
const course = fs.readFileSync(path.join(__dirname, 'course.js'), 'utf8');
const files = [...course.matchAll(/'(q\d+[A-Za-z0-9_]*\.js)'/g)].map(m => m[1]).filter((f, i, a) => a.indexOf(f) === i);
for (const f of files) { let c = fs.readFileSync(path.join(__dirname, f), 'utf8'); try { vm.runInContext(c, sb, {filename: f}); } catch (e) { console.log('FAIL: stem_check.js: ' + f + ': ' + e.message); process.exit(1); } }
const Q = vm.runInContext('QUESTIONS', sb);
const SRC = /\b(her|his|the|this) (slides?|deck|lecture|recording|handout)\b|\bon (her|his) \w+ slide\b|\bDr\.? ?(Patel|Smith|Sikazwe)|\bDoctor (Patel|Smith|Sikazwe)|\b(she|he) (said|advised|taught)\b|\bin class\b/i;
const UNF = /\bWhich (statement|pairing|description)s?\b[^?]*\b(is|are) (correct|true|accurate)\b|\bmatches (her|his|the)\b|\bfits (her|his) slides?\b/i;
const bad = [];
for (const q of Q) {
  const texts = [['stem', q.stem || '']].concat((q.options || []).map((o, i) => ['option ' + (i + 1), o.t || '']));
  for (const [where, t] of texts) {
    if (SRC.test(t)) bad.push(`${q.id} ${where}: names the source: "${t.slice(0, 110)}"`);
    else if (where === 'stem' && UNF.test(t)) bad.push(`${q.id} stem: unfocused: "${t.slice(0, 110)}"`);
  }
}
bad.forEach(b => console.log('  ' + b));
console.log((bad.length ? 'FAIL' : 'PASS') + ': stem_check.js: ' + Q.length + ' questions; ' + (bad.length ? bad.length + ' stems or options to rewrite' : 'no stem or option names a slide or the professor, none is an unfocused "which statement is correct"'));
process.exit(bad.length ? 1 : 0);
