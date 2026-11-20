#!/usr/bin/env node
/* diagrams_ey_check.js: the drawn step-throughs of Dr. Smith's eye lectures (Exam 3) in
   diagrams_ey.js.

     node diagrams_ey_check.js

   1. diagrams_ey.js adds each figure to DIA and DIA_NAMES and lists all five in one DIAGRAMS
      group named for Dr. Smith and Exam 3; if course.js lists the file, it comes after
      diagrams.js and figs2.js (a NOTE, not a failure, while it is not listed yet).
   2. Each figure is a step-through with the planned number of steps, one dot per step and the
      planned panel height; each step's drawn caption fits in two lines (stepper() clips a third)
      and carries its source in parentheses (a slide and, where the point is spoken, T@ in a
      dated lecture); the figcaption names the deck, slides and a transcript place.
   3. STEPPERS.md rules a script can see: every drawn shape has a data-k, data-k values are
      unique inside a step, no shape carries its own transform, opacity is set as an attribute
      only, and no colour is written into the markup. Every shape, and every text line by an
      estimate of its width, sits inside the 360-wide panel and above the caption band, and no
      two text lines overlap (the same estimate).
   4. The figure opens with its Purpose line (the purpose_ui.js format: "Shows/Compares …, so
      you can …"), once.
   5. Content rules: the inflow/outflow sort as slides 16-41 and 11/13 give it; the CAI figure
      draws H+ + HCO3- (slide 27; her 11/13 slip "sodium and bicarbonate" not drawn), the
      kidney isoforms CA IV and CA II, and metabolic acidosis; the allergy figure keeps the
      slide's "α2 agonists" and cetirizine as the one without mast cell stabilization; the dry
      eye figure names cyclophilin, calcineurin, LFA-1, ICAM-1 and the trigeminal pathway; no
      figurative labels (her construction-netting and sponge pictures) and no "double/triple
      bond" wording.
   Prints FAIL lines and one PASS or FAIL summary; exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail ? ' (' + detail + ')' : '')); }
};

const PLAN = {
  'ey-aqueous': {steps: 5, h: 458},
  'ey-angle':   {steps: 3, h: 456},
  'ey-cai':     {steps: 5, h: 392},
  'ey-allergy': {steps: 4, h: 368},
  'ey-dryeye':  {steps: 4, h: 430},
};
const GROUP = 'Eye: glaucoma, allergy and dry eye (Dr. Smith, Exam 3)';

// 1. registration
try {
  const sbC = {module: {}, require};
  vm.createContext(sbC);
  vm.runInContext(rd('course.js') + '\nthis.F = (typeof COURSE !== "undefined" ? COURSE : module.exports).files;', sbC);
  const F = sbC.F || [];
  const di = F.indexOf('diagrams.js'), fi = F.indexOf('figs2.js'), ei = F.indexOf('diagrams_ey.js'), xi = F.indexOf('diagram_fx.js'), xa = F.indexOf('diagram_fx_fa.js'), ef = F.indexOf('diagrams_ey_fa.js');
  check(xi > fi && xi < ei && xa > xi && xa < ei && ef > ei, 'course.js lists diagram_fx.js, diagram_fx_fa.js before diagrams_ey.js and diagrams_ey_fa.js after it', JSON.stringify([xi, xa, ei, ef]));
  if (ei < 0) console.log('NOTE: course.js files does not list diagrams_ey.js yet');
  else check(ei > di && ei > fi, 'course.js lists diagrams_ey.js after diagrams.js and figs2.js', JSON.stringify([di, fi, ei]));
} catch (e) { console.log('NOTE: course.js not read (' + e.message + ')'); }

const sb = {console};
vm.createContext(sb);
vm.runInContext(rd('diagrams.js') + '\n' + rd('diagram_fx.js') + '\n' + rd('diagram_fx_fa.js') + '\n' + rd('diagrams_ey.js') + '\n' + rd('diagrams_ey_fa.js') +
  '\nthis.X = {DIA, DIA_NAMES, DIAGRAMS, wrapLines, P: DIAGRAMS_EY_PURPOSE};', sb);
const {DIA, DIA_NAMES, DIAGRAMS, wrapLines, P} = sb.X;
const grp = DIAGRAMS.filter(([n]) => n === GROUP);
check(grp.length === 1, 'one DIAGRAMS group named "' + GROUP + '"', grp.length);
check(grp[0] && JSON.stringify(grp[0][1]) === JSON.stringify(Object.keys(PLAN)), 'the group lists the five figures in order', grp[0] && grp[0][1].join(','));
for (const k of Object.keys(PLAN)) {
  check(typeof DIA[k] === 'string', k + ' is in DIA');
  check(!!DIA_NAMES[k], k + ' has a name in DIA_NAMES');
}

// 2-4. each figure
const SHAPE = /<(text|line|path|rect|circle|ellipse|polygon|polyline)\b([^>]*)>([^<]*)/g;
const attr = (s, a) => { const m = s.match(new RegExp('\\b' + a + '="([^"]*)"')); return m ? m[1] : null; };
/* font sizes of the classes used for text (diagrams_ey.js css and the shell's .lbl rules) */
const css = (vm.runInContext('DIAGRAMS_EY.css', sb) || '') + (vm.runInContext('DIAGRAM_FX_FA_CSS', sb) || '');
const FS = {};
for (const m of css.matchAll(/\.fig \.([a-z0-9-]+)\{[^}]*font-size:([\d.]+)px/g)) FS[m[1]] = +m[2];
const unescape = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const textW = (s, size, bold) => [...unescape(s)].reduce((w, ch) =>
  w + (/[ilI.,:;'’()|!·]/.test(ch) ? 0.3 : /[mwMW]/.test(ch) ? 0.85 : /[A-Z0-9]/.test(ch) ? 0.66 : /[⁺⁻₂₃]/.test(ch) ? 0.4 : 0.54), 0) *
  size * (bold ? 1.06 : 1);

for (const [k, plan] of Object.entries(PLAN)) {
  const html = DIA[k];
  if (typeof html !== 'string') continue;
  const steps = html.split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  const nDots = (html.match(/class="sdot[ "]/g) || []).length;
  check(steps.length === plan.steps, k + ': ' + plan.steps + ' steps', steps.length);
  check(nDots === steps.length, k + ': one dot per step', nDots);
  const vb = html.match(/viewBox="0 0 (\d+) (\d+)"/);
  check(vb && +vb[1] === 360 && +vb[2] === plan.h, k + ': panel 360 x ' + plan.h, vb && vb.slice(1).join('x'));
  const cap = (html.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || '';
  check(/Smith_Eye_Glaucoma_AllergicConj_DryEye\.pdf slides? \d/.test(cap), k + ': figcaption names the deck and its slides');
  check(/11\/1[37], T@\d/.test(cap), k + ': figcaption names a dated transcript place');
  // purpose line
  const pm = html.match(/^<figure class="fig[^"]*"><p class="dnpurpose"><b>Purpose\.<\/b> ([^<]*)<\/p>/);
  check(!!pm, k + ': opens with its Purpose line');
  check((html.match(/dnpurpose/g) || []).length === 1, k + ': one Purpose line');
  check(P[k] && /^(Shows|Compares|Builds|Sets) /.test(P[k]) && /, so you can /.test(P[k]) && /\.$/.test(P[k]) &&
    (P[k].match(/\. /g) || []).length === 0, k + ': Purpose is one sentence in the purpose_ui.js form', P[k]);

  const svgOnly = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
  check(!/(fill|stroke|stop-color)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(svgOnly), k + ': no colour written into the markup');
  steps.forEach((s, i) => {
    const FA3 = ['ey-aqueous', 'ey-angle', 'ey-cai'].includes(k);          // redrawn: 11.5-unit caption, three lines
    const capLines = [...s.matchAll(/<text class="lbl xs capt( fa-cap)?"[^>]*>([^<]*)<\/text>/g)].map(m => m[2]);
    const capText = capLines.join(' ');
    check(capLines.length >= 1 && capLines.length <= (FA3 ? 3 : 2) && !/…$/.test(capText), `${k} step ${i + 1}: caption fits in ${FA3 ? 'three' : 'two'} lines`, capLines.length);
    if (FA3) {
      check(/class="lbl xs capt fa-cap"/.test(s), `${k} step ${i + 1}: caption drawn at 11.5 units (fa-cap)`);
      const anim = (s.match(/class="[^"]*\b(fx-flow|fx-drift|fx-pulse|fx-breathe)\b/g) || []).length;
      check(anim <= 3, `${k} step ${i + 1}: at most 3 animated elements`, anim);
    }
    check(/\([^)]*slides? \d[^)]*\)\.?$/.test(capText), `${k} step ${i + 1}: caption ends with its source in parentheses`, capText.slice(-60));
    const bandTop = (['ey-aqueous', 'ey-angle', 'ey-cai'].includes(k) ? plan.h - 5 - capLines.length * 13 - 11 : plan.h - 12 - capLines.length * 10 - 9);   // top of the "Step n of m" line
    const keys = [], noKey = [], tf = [], out = [], styleOp = [], wide = [], tb = [];
    for (const m of s.matchAll(SHAPE)) {
      const a = m[2], cls = attr(a, 'class') || '';
      if (/\bcapt\b/.test(cls)) continue;
      const dk = attr(a, 'data-k');
      if (dk == null) noKey.push(m[1] + ' ' + a.slice(0, 40)); else keys.push(dk);
      if (/\btransform=/.test(a)) tf.push(dk);
      if (/style="[^"]*opacity/.test(a)) styleOp.push(dk);
      let xs = ['x', 'x1', 'x2', 'cx'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      let ys = ['y', 'y1', 'y2', 'cy'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      if (m[1] === 'rect') { xs.push(+attr(a, 'x') + +attr(a, 'width')); ys.push(+attr(a, 'y') + +attr(a, 'height')); }
      if (m[1] === 'path' || m[1] === 'polygon') {
        const nums = (attr(a, 'd') || attr(a, 'points') || '').match(/-?[\d.]+/g) || [];
        for (let j = 0; j + 1 < nums.length; j += 2) { xs.push(+nums[j]); ys.push(+nums[j + 1]); }
      }
      if (xs.some(v => v < 0 || v > 360) || ys.some(v => v < 0 || v > bandTop)) out.push(dk);
      if (m[1] === 'text' && m[3]) {
        const cl = cls.split(' ').find(c => FS[c]) || '', size = FS[cl] || 11, x = +attr(a, 'x');
        const w = textW(m[3], size, /tb|tag|warn|chem/.test(cl)), an = attr(a, 'text-anchor') || 'start';
        const x0 = an === 'middle' ? x - w / 2 : an === 'end' ? x - w : x, x1 = x0 + w;
        if (x0 < 1 || x1 > 359) wide.push(dk + ' [' + Math.round(x0) + ',' + Math.round(x1) + ']');
        const y = +attr(a, 'y');
        tb.push([x0, x1, y - size * 0.72, y + size * 0.12, dk]);
      }
    }
    const ov = [];
    for (let p = 0; p < tb.length; p++) for (let q = p + 1; q < tb.length; q++) {
      const A = tb[p], B = tb[q];
      if (Math.min(A[1], B[1]) - Math.max(A[0], B[0]) > 1 && Math.min(A[3], B[3]) - Math.max(A[2], B[2]) > 1) ov.push(A[4] + '/' + B[4]);
    }
    check(!ov.length, `${k} step ${i + 1}: no two text lines overlap (estimate)`, ov.join(', '));
    const dup = keys.filter((x, j) => keys.indexOf(x) !== j);
    check(!noKey.length, `${k} step ${i + 1}: every shape has a data-k`, noKey.slice(0, 3).join('; '));
    check(!dup.length, `${k} step ${i + 1}: data-k values unique`, [...new Set(dup)].join(', '));
    check(!tf.length, `${k} step ${i + 1}: no shape carries its own transform`, tf.join(', '));
    check(!styleOp.length, `${k} step ${i + 1}: opacity set as an attribute, not a style`, styleOp.join(', '));
    check(!out.length, `${k} step ${i + 1}: every shape inside the panel, above the caption band`, out.join(', '));
    check(!wide.length, `${k} step ${i + 1}: every text line fits across the panel (estimate)`, wide.join(', '));
  });
}

// 5. content rules (drawn text only)
const drawn = k => unescape((DIA[k] || '').replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '')
  .replace(/<p class="dnpurpose">[\s\S]*?<\/p>/, '').replace(/<[^>]+>/g, ' '));
const lastStep = k => { const s = (DIA[k] || '').split(/<g class="st[ "]/); return unescape(s[s.length - 1].replace(/<[^>]+>/g, ' ')); };
{
  const stepText = (k, n) => { const sp = (DIA[k] || '').split(/<g class="st[ "]/).slice(1); const g = sp[n - 1] || ''; return unescape(g.slice(0, g.lastIndexOf('</g>') < 0 ? g.length : g.lastIndexOf('</g>')).replace(/<[^>]+>/g, ' ')); };
  const s3 = stepText('ey-aqueous', 3), s4 = stepText('ey-aqueous', 4), s5 = stepText('ey-aqueous', 5), s2 = stepText('ey-aqueous', 2);
  check(s3.includes('↓ INFLOW'), 'ey-aqueous step 3: the inflow header');
  for (const d of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(s3.includes(d), 'ey-aqueous: ' + d + ' drawn under ↓ INFLOW (step 3)');
  check(s4.includes('↑ OUTFLOW') && s5.includes('↑ OUTFLOW'), 'ey-aqueous steps 4 and 5: the outflow header');
  for (const d of ['M3 agonists', 'echothiophate', 'netarsudil']) check(s4.includes(d), 'ey-aqueous: ' + d + ' drawn under ↑ OUTFLOW (step 4)');
  for (const d of ['PG agonists', 'brimonidine']) check(s5.includes(d), 'ey-aqueous: ' + d + ' drawn under ↑ OUTFLOW (step 5)');
  for (const d of ['M3 agonists', 'echothiophate', 'netarsudil', 'PG agonists']) check(!s3.includes(d), 'ey-aqueous: ' + d + ' not under inflow');
  for (const d of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(!s4.includes(d) && !s5.includes(d), 'ey-aqueous: ' + d + ' not under outflow');
  const a = [s2, s5].join(' ');
  check(s2.includes('Trabecular') && s2.includes('Schlemm’s') && s2.includes('Uveoscleral'), 'ey-aqueous step 2: both routes named');
for (const w of ['MAIN route', 'smaller route', 'PGF2α']) check(a.includes(w), 'ey-aqueous: ' + w + ' drawn');
}
{
  const c = drawn('ey-cai');
  check(/H⁺ \+ HCO₃⁻|H⁺\+HCO₃⁻/.test(c), 'ey-cai: carbonic acid drawn as H+ + HCO3- (slide 27)');
  check(!/into sodium and bicarbonate/i.test(c), 'ey-cai: the 11/13 slip is not drawn');
  for (const w of ['CA IV', 'CA II', 'METABOLIC ACIDOSIS', 'acetazolamide', 'dorzolamide', 'brinzolamide', 'NHE3', 'NBC1', 'buffers'])
    check(c.includes(w), 'ey-cai: ' + w + ' drawn');
  check(/mainly with oral/.test(c), 'ey-cai: the oral vs eye-drop qualifier is kept (11/17)');
}
{
  const g = drawn('ey-angle');
  for (const w of ['open', 'closed', 'gradual', 'significant pain', 'medical emergency', 'meshwork dysfunction']) check(g.includes(w), 'ey-angle: ' + w + ' drawn');
}
{
  const l = drawn('ey-allergy');
  for (const w of ['IgE', 'H1 inverse agonist', 'Mast cell stabilizer', 'cetirizine', 'α2 agonist', 'naphazoline/pheniramine', 'H4', 'H2'])
    check(l.includes(w), 'ey-allergy: ' + w + ' drawn');
  check(!/alpha-1|α1 agonist/.test(l), 'ey-allergy: the class is drawn as the slide names it (α2 agonists)');
}
{
  const d = drawn('ey-dryeye');
  for (const w of ['cyclophilin', 'calcineurin', 'LFA-1', 'ICAM-1', 'trigeminal', 'Loteprednol', 'Varenicline', 'Lifitegrast', 'IL-2'])
    check(d.includes(w), 'ey-dryeye: ' + w + ' drawn');
}
const FIGURATIVE = /\b(netting|fence|sponge|pop|orange)\b/i;
for (const k of Object.keys(PLAN)) {
  check(!FIGURATIVE.test(drawn(k)), k + ': no figurative labels drawn', (drawn(k).match(FIGURATIVE) || [])[0]);
  check(!/(double|triple) bond/i.test(DIA[k]), k + ': no double/triple bond wording');
}

console.log((fails ? 'FAIL' : 'PASS') + ': diagrams_ey_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  Object.keys(PLAN).length + ' figures, ' + Object.values(PLAN).reduce((a, p) => a + p.steps, 0) + ' steps)');
process.exit(fails ? 1 : 0);
