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
   6. The full view (2026-11-22, diagram_fx_full.js): ey-aqueous, ey-targets and ey-angle are drawn
      on the two-sided section of the front of the eye. Checked per step: both sides of every paired
      part are drawn; the iris pair leaves the pupil gap on the axis and the lens lies behind it;
      Iris and Pupil are labelled and their leaders end on the iris and in the gap; every live flow
      runs on both sides (two subpaths, a head each); the narration's cues are in the markup (the
      dashed trabecular arrow and the dotted uveoscleral arrow, green β, amber α2 and purple CA
      icons in the zoom, two M3 marks, class-coloured marks in ey-targets, the red slash and the
      slowed flow of open angle, the bowed iris and the stopped flow of angle closure); and the
      sentence maps in dianarr_sync_ey.js fit the markup (n, indexes, badges inside the panel).
      Round 2 the same day: the outflow steps carry an enlarged view of one angle (Anat.full.zoom)
      with the dashed and the dotted arrow, the drug marks on the structure they act on, the red
      bar and the bowed iris; no colour key; Cornea, Iris, Pupil and Lens labelled in every
      full-eye step; no leader crosses a leader or a label; chips and cards have 8 units of padding
      and 10 units between them; no badge covers a label.
   Prints FAIL lines and one PASS or FAIL summary; exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail ? ' (' + detail + ')' : '')); }
};

const PLAN = {
  'ey-autonomic': {steps: 3, h: 632},
  'ey-aqueous': {steps: 7, h: 812},
  'ey-targets': {steps: 4, h: 756},
  'ey-angle':   {steps: 3, h: 652},
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
  const di = F.indexOf('diagrams.js'), fi = F.indexOf('figs2.js'), ei = F.indexOf('diagrams_ey.js'), xi = F.indexOf('diagram_fx.js'), xa = F.indexOf('diagram_fx_fa.js'), ef = F.indexOf('diagrams_ey_fa.js'),
    xb = F.indexOf('diagram_fx_fa2.js'), eg = F.indexOf('diagrams_ey_fa2.js'), xf = F.indexOf('diagram_fx_full.js');
  check(xf > xb && xf < ei && xf < eg, 'course.js lists diagram_fx_full.js after diagram_fx_fa2.js and before diagrams_ey.js and diagrams_ey_fa2.js', JSON.stringify([xb, xf, ei, eg]));
  check(xb > xa && xb < ei && eg > ef && eg > ei, 'course.js lists diagram_fx_fa2.js after diagram_fx_fa.js and before diagrams_ey.js, and diagrams_ey_fa2.js after diagrams_ey_fa.js', JSON.stringify([xa, xb, ei, ef, eg]));
  check(xi > fi && xi < ei && xa > xi && xa < ei && ef > ei, 'course.js lists diagram_fx.js, diagram_fx_fa.js before diagrams_ey.js and diagrams_ey_fa.js after it', JSON.stringify([xi, xa, ei, ef]));
  if (ei < 0) console.log('NOTE: course.js files does not list diagrams_ey.js yet');
  else check(ei > di && ei > fi, 'course.js lists diagrams_ey.js after diagrams.js and figs2.js', JSON.stringify([di, fi, ei]));
} catch (e) { console.log('NOTE: course.js not read (' + e.message + ')'); }

const sb = {console};
vm.createContext(sb);
vm.runInContext(rd('diagrams.js') + '\n' + rd('diagram_fx.js') + '\n' + rd('diagram_fx_fa.js') + '\n' + rd('diagram_fx_fa2.js') + '\n' + rd('diagram_fx_full.js') + '\n' + rd('diagrams_ey.js') + '\n' + rd('diagrams_ey_fa.js') + '\n' + rd('diagrams_ey_fa2.js') +
  '\nthis.X = {DIA, DIA_NAMES, DIAGRAMS, wrapLines, P: Object.assign({}, DIAGRAMS_EY_PURPOSE, DIAGRAMS_EY_FA2.purpose)};', sb);
const {DIA, DIA_NAMES, DIAGRAMS, wrapLines, P} = sb.X;
const grp = DIAGRAMS.filter(([n]) => n === GROUP);
check(grp.length === 1, 'one DIAGRAMS group named "' + GROUP + '"', grp.length);
check(grp[0] && JSON.stringify(grp[0][1]) === JSON.stringify(Object.keys(PLAN)), 'the group lists the seven figures in order (ey-autonomic, slide 7, first)', grp[0] && grp[0][1].join(','));
for (const k of Object.keys(PLAN)) {
  check(typeof DIA[k] === 'string', k + ' is in DIA');
  check(!!DIA_NAMES[k], k + ' has a name in DIA_NAMES');
}

// 2-4. each figure
const SHAPE = /<(text|line|path|rect|circle|ellipse|polygon|polyline)\b([^>]*)>([^<]*)/g;
const attr = (s, a) => { const m = s.match(new RegExp('\\b' + a + '="([^"]*)"')); return m ? m[1] : null; };
/* font sizes of the classes used for text (diagrams_ey.js css and the shell's .lbl rules) */
const css = (vm.runInContext('DIAGRAMS_EY.css', sb) || '') + (vm.runInContext('DIAGRAM_FX_FA_CSS', sb) || '') + (vm.runInContext('DIAGRAM_FX_FA2_CSS', sb) || '') + (vm.runInContext('DIAGRAM_FX_FULL_CSS', sb) || '');
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
  if (k !== 'ey-autonomic') check(/11\/1[37], T@\d/.test(cap), k + ': figcaption names a dated transcript place');   /* ey-autonomic is drawn from slide 7 alone */
  // purpose line
  const pm = html.match(/^<figure class="fig[^"]*"><p class="dnpurpose"><b>Purpose\.<\/b> ([^<]*)<\/p>/);
  check(!!pm, k + ': opens with its Purpose line');
  check((html.match(/dnpurpose/g) || []).length === 1, k + ': one Purpose line');
  check(P[k] && /^(Shows|Compares|Builds|Sets) /.test(P[k]) && /, so you can /.test(P[k]) && /\.$/.test(P[k]) &&
    (P[k].match(/\. /g) || []).length === 0, k + ': Purpose is one sentence in the purpose_ui.js form', P[k]);

  const svgOnly = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
  check(!/(fill|stroke|stop-color)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(svgOnly), k + ': no colour written into the markup');
  steps.forEach((s, i) => {
    const FA3 = ['ey-autonomic', 'ey-aqueous', 'ey-targets', 'ey-angle', 'ey-cai'].includes(k);          // redrawn: 11.5-unit caption, three lines
    const capLines = [...s.matchAll(/<text class="lbl xs capt( fa-cap)?"[^>]*>([^<]*)<\/text>/g)].map(m => m[2]);
    const capText = capLines.join(' ');
    check(capLines.length >= 1 && capLines.length <= (FA3 ? 3 : 2) && !/…$/.test(capText), `${k} step ${i + 1}: caption fits in ${FA3 ? 'three' : 'two'} lines`, capLines.length);
    if (FA3) {
      check(/class="lbl xs capt fa-cap"/.test(s), `${k} step ${i + 1}: caption drawn at 11.5 units (fa-cap)`);
      const anim = (s.match(/class="[^"]*\b(fx-flow|fx-drift|fx-pulse|fx-breathe)\b/g) || []).length;
      check(anim <= 3, `${k} step ${i + 1}: at most 3 animated elements`, anim);
    }
    check(/\([^)]*slides? \d[^)]*\)\.?$/.test(capText), `${k} step ${i + 1}: caption ends with its source in parentheses`, capText.slice(-60));
    const bandTop = (['ey-autonomic', 'ey-aqueous', 'ey-targets', 'ey-angle', 'ey-cai'].includes(k) ? plan.h - 5 - capLines.length * 13 - 11 : plan.h - 12 - capLines.length * 10 - 9);   // top of the "Step n of m" line
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
/* round 4 (2026-11-23): every drug-target mark on the eye has its own label (receptor or enzyme, then the class: fu-g*-t0/t1) and the process inset has
   its own labels (pz*); those name each class in every step, so the "class not under the wrong header" text checks below read the step without them */
const noTgG = h => h.replace(/<text\b[^>]*data-k="fu-g[a-z0-9]+-t\d"[^>]*>[^<]*<\/text>/g, '');   /* only the labels on the eye */
const noTg = h => h.replace(/<text\b[^>]*data-k="(?:fu-g[a-z0-9]+-t\d|pz[a-z0-9]*)"[^>]*>[^<]*<\/text>/g, '');
const drawn = k => unescape((DIA[k] || '').replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '')
  .replace(/<p class="dnpurpose">[\s\S]*?<\/p>/, '').replace(/<[^>]+>/g, ' '));
const stepTextK = (k, n) => { const sp = (DIA[k] || '').split(/<g class="st[ "]/).slice(1); const g = noTg(sp[n - 1] || ''); return unescape(g.slice(0, g.lastIndexOf('</g>') < 0 ? g.length : g.lastIndexOf('</g>')).replace(/<[^>]+>/g, ' ')); };
const lastStep = k => { const s = (DIA[k] || '').split(/<g class="st[ "]/); return unescape(s[s.length - 1].replace(/<[^>]+>/g, ' ')); };
{
  const stepText = (k, n) => { const sp = (DIA[k] || '').split(/<g class="st[ "]/).slice(1); const g = noTg(sp[n - 1] || ''); return unescape(g.slice(0, g.lastIndexOf('</g>') < 0 ? g.length : g.lastIndexOf('</g>')).replace(/<[^>]+>/g, ' ')); };
  /* ey-aqueous now has 7 steps: 1 parts (slide 15), 2 inflow, 3 outflow, 4 slide-16 zoom, 5 inflow drugs, 6 trabecular drugs, 7 uveoscleral drugs */
  const s1 = stepText('ey-aqueous', 1), s2 = stepText('ey-aqueous', 3), s4 = stepText('ey-aqueous', 6), s5 = stepText('ey-aqueous', 7), s3 = stepText('ey-aqueous', 5), z = stepText('ey-aqueous', 4);
  const s1n = s1.replace(/\s+/g, ' ');
  /* round 2: the parts the narration names (slide 15's conjunctiva and pars plana are not drawn) */
  for (const w of ['Cornea', 'Trabecular meshwork', 'Schlemm’s canal', 'Anterior chamber', 'Iris', 'Pupil', 'Lens', 'Sclera', 'Posterior chamber', 'Ciliary body', 'Ciliary processes', 'Ciliary muscle', 'Ciliary epithelium', 'The angle, zoomed'])
    check(s1n.includes(w), 'ey-aqueous step 1 names the part ' + w + ' as slide 15 labels it');
  check(!/data-k="key-[st]\d/.test(DIA['ey-aqueous']), 'ey-aqueous: no colour key block (round 2: the structures carry their own labels)');
  /* step 4 writes "CA" and "inhibitors" on two lines inside the zoom circle, so the text is compared with runs of spaces collapsed */
  const zz = unescape(noTgG(((DIA['ey-aqueous'] || '').split(/<g class="st[ "]/).slice(1)[3] || '')).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
  for (const w of ['β receptor', 'α2 receptor', 'α1 receptor', 'carbonic', 'anhydrase', 'ciliary blood supply'.split(' ')[0], 'blood supply', 'M3', 'β-blockers', 'α2 agonists', 'CA inhibitors']) check(zz.includes(w), 'ey-aqueous step 4 (slide 16): ' + w + ' drawn');
  check(!/M3 agonists|netarsudil|PG agonists/.test(z), 'ey-aqueous step 4: only what slide 16 labels (no outflow drug names)');
  check(s3.includes('↓ INFLOW'), 'ey-aqueous step 5: the inflow header');
  for (const d of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(s3.includes(d), 'ey-aqueous: ' + d + ' drawn under ↓ INFLOW (step 5)');
  check(s4.includes('↑ OUTFLOW') && s5.includes('↑ OUTFLOW'), 'ey-aqueous steps 6 and 7: the outflow header');
  for (const d of ['M3 agonists', 'echothiophate', 'netarsudil']) check(s4.includes(d), 'ey-aqueous: ' + d + ' drawn under ↑ OUTFLOW (step 6)');
  for (const d of ['PG agonists', 'brimonidine']) check(s5.includes(d), 'ey-aqueous: ' + d + ' drawn under ↑ OUTFLOW (step 7)');
  for (const d of ['M3 agonists', 'echothiophate', 'netarsudil', 'PG agonists']) check(!s3.includes(d), 'ey-aqueous: ' + d + ' not under inflow');
  /* step 7 ends with a three-line summary of all classes: its "↓ INFLOW:" line is where the inflow classes belong; nowhere else in steps 6 and 7 */
  const s5sum = (s5.match(/↓ INFLOW:[^↑]*/) || [''])[0], s5rest = s5.replace(/↓ INFLOW:[^↑]*/, '');
  check((s5.match(/↓ INFLOW:/g) || []).length === 1 && s5.indexOf('↓ INFLOW:') > s5.indexOf('brimonidine'), 'ey-aqueous step 7: one summary line "↓ INFLOW:", after the outflow chips');
  for (const d of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(s5sum.includes(d), 'ey-aqueous step 7 summary: ' + d + ' on the ↓ INFLOW line');
  for (const d of ['M3 agonists', 'echothiophate', 'netarsudil', 'PG agonists']) check(!s5sum.includes(d) && s5rest.slice(s5rest.lastIndexOf('↑ OUTFLOW:')).includes(d), 'ey-aqueous step 7 summary: ' + d + ' on the ↑ OUTFLOW lines, not on the inflow line');
  for (const d of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(!s4.includes(d) && !s5rest.includes(d), 'ey-aqueous: ' + d + ' not under outflow');
  check(s4.includes('sphincter muscle') && s4.includes('Sphincter muscle') && s4.includes('(iris)'), 'ey-aqueous step 6: the sphincter muscle is named in the chip and labelled on the iris');
  const a = [s2, s5].join(' ');
  check(s2.includes('Trabecular') && s2.includes('Schlemm’s') && s2.includes('Uveoscleral') && s2.includes('into blood'), 'ey-aqueous step 3: both routes named');
for (const w of ['MAIN route', 'smaller route', 'PGF2α']) check(a.includes(w), 'ey-aqueous: ' + w + ' drawn');
}
{
  const t = k => stepTextK('ey-targets', k).replace(/\s+/g, ' ');
  const t1 = t(1), t2 = t(2), t3 = t(3), t4 = t(4);
  for (const w of ['β-blockers', 'α2 agonists', 'CA inhibitors']) check(t1.includes(w) && t4.includes(w), 'ey-targets: ' + w + ' in the inflow step and in the all-classes step');
  for (const w of ['Rho kinase', 'M3 agonists', 'echothiophate', 'netarsudil']) check(t2.includes(w) && t4.includes(w.replace('netarsudil', 'Rho kinase')), 'ey-targets: ' + w + ' in the trabecular step');
  for (const w of ['PG agonists', 'PGF2α', 'ciliary muscle', 'brimonidine', 'Uveoscleral route']) check(t3.includes(w), 'ey-targets: ' + w + ' in the uveoscleral step');
  for (const w of ['PG agonists', 'brimonidine', 'M3 agonists']) check(t4.includes(w), 'ey-targets step 4: ' + w);
  check(t2.includes('Sphincter muscle') && t2.includes('(iris)') && t4.includes('Sphincter muscle'), 'ey-targets steps 2 and 4: the sphincter muscle labelled on the iris');
  check(!/M3 agonists|netarsudil|PG agonists/.test(t1), 'ey-targets step 1: no outflow class under inflow');
  check(!/β-blockers|CA inhibitors/.test(t2 + t3), 'ey-targets steps 2-3: no inflow class under outflow');
  const h = DIA['ey-targets'];
  for (const c of ['fa-chk1', 'fa-chk2', 'fa-chk3', 'fa-chk4', 'fa-chk5', 'fa-chk6']) check(h.includes(c), 'ey-targets: class colour ' + c + ' used (PG blue, β green, α2 amber, CAI purple, cholinergic red, Rho magenta)');
  check(/deck_|Smith_Eye_Glaucoma/.test(h) && /T@31096/.test(h), 'ey-targets: figcaption cites slides and a transcript place');
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
  const g = drawn('ey-angle').replace(/\s+/g, ' ');   /* 'Uveoscleral route' is drawn on two lines */
  for (const w of ['open', 'closed', 'gradual', 'significant pain', 'medical emergency', 'meshwork dysfunction']) check(g.includes(w), 'ey-angle: ' + w + ' drawn');
  /* slide 14's own words and parts */
  for (const w of ['Cornea', 'Anterior', 'Iris', 'Lens', 'Ciliary body', 'Sclera', 'Trabecular', 'Schlemm’s', 'Uveoscleral route', 'Normal drainage', 'dysfunction', 'Forward', 'bowing'])
    check(g.includes(w), 'ey-angle: slide 14 word ' + w + ' drawn');
  const hh = DIA['ey-angle'];
  check(/data-k="fu-irisL"/.test(hh) && /data-k="fu-iris-bL"/.test(hh) && /data-k="fu-tmL"/.test(hh) && /data-k="fu-tm-bL"/.test(hh), 'ey-angle: the iris and the meshwork each have a data-k per state (cross-fade)');
  for (const w of ['Pupil', 'Uveoscleral', 'IOP']) check(g.includes(w), 'ey-angle: ' + w + ' drawn');
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
// 6. the full, two-sided view, the angle zoom and the layout rules of round 2
{
  const FULL = {'ey-autonomic': [1, 2, 3], 'ey-aqueous': [1, 2, 3, 4, 5, 6, 7], 'ey-targets': [1, 2, 3, 4], 'ey-angle': [1, 2, 3]};   /* round 4: aq step 4 is on the whole eye too */
  const ZSTEPS = {'ey-aqueous': [1, 3, 6, 7], 'ey-targets': [2, 3, 4], 'ey-angle': [1, 2, 3]};
  const stepsOf = k => (DIA[k] || '').split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  const els = g => [...g.matchAll(/<(path|text|rect|polygon)\b([^>]*)>([^<]*)/g)].map(m => ({tag: m[1], a: m[2], k: attr(m[2], 'data-k'), cls: attr(m[2], 'class') || '', txt: m[3]}));
  const box = e => {
    if (e.tag === 'rect') { const x = +attr(e.a, 'x'), y = +attr(e.a, 'y'); return {x0: x, y0: y, x1: x + +attr(e.a, 'width'), y1: y + +attr(e.a, 'height'), n: []}; }
    const n = ((attr(e.a, 'd') || attr(e.a, 'points') || '').match(/-?[\d.]+/g) || []).map(Number), xs = n.filter((v, i) => i % 2 === 0), ys = n.filter((v, i) => i % 2 === 1);
    return {x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys), n}; };
  const tbox = e => { const cl = e.cls.split(' ').find(c => FS[c]) || '', size = FS[cl] || 11, x = +attr(e.a, 'x'), y = +attr(e.a, 'y'), w = textW(e.txt, size, /tb|tk|fa-k|fa-w|chem|m3/.test(cl)), an = attr(e.a, 'text-anchor') || 'start';
    const x0 = an === 'middle' ? x - w / 2 : an === 'end' ? x - w : x; return {x0, x1: x0 + w, y0: y - size * 0.72, y1: y + size * 0.12}; };
  const inBox = (b, B, m = 0) => b.x0 >= B.x0 - m && b.x1 <= B.x1 + m && b.y0 >= B.y0 - m && b.y1 <= B.y1 + m;
  const meet = (a, b) => Math.min(a.x1, b.x1) > Math.max(a.x0, b.x0) && Math.min(a.y1, b.y1) > Math.max(a.y0, b.y0);
  const ctr = b => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
  const endOf = e => { const n = box(e).n; return [n[n.length - 2], n[n.length - 1]]; };
  /* straight pieces of a leader (M x y L x y L ...) */
  const segs = e => { const n = box(e).n, out = []; for (let i = 0; i + 3 < n.length; i += 2) out.push([n[i], n[i + 1], n[i + 2], n[i + 3]]); return out; };
  const cross = (p, q) => { const d = (ax, ay, bx, by, cx, cy) => (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    const d1 = d(q[0], q[1], q[2], q[3], p[0], p[1]), d2 = d(q[0], q[1], q[2], q[3], p[2], p[3]), d3 = d(p[0], p[1], p[2], p[3], q[0], q[1]), d4 = d(p[0], p[1], p[2], p[3], q[2], q[3]);
    return d1 * d2 < 0 && d3 * d4 < 0; };
  const segBox = (s, b) => { /* does the segment pass through the box? sampled every half unit */
    const L = Math.hypot(s[2] - s[0], s[3] - s[1]), n = Math.max(2, Math.ceil(L * 2));
    for (let i = 0; i <= n; i++) { const x = s[0] + (s[2] - s[0]) * i / n, y = s[1] + (s[3] - s[1]) * i / n; if (x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1) return true; }
    return false; };
  for (const [k, list] of Object.entries(FULL)) {
    const st = stepsOf(k);
    check(!/data-k="key-[st]\d/.test(DIA[k]) || k === 'ey-cai', `${k}: no colour key block`);
    list.forEach(n => {
      const E = els(st[n - 1] || ''), by = key => E.find(e => e.k === key), w = `${k} step ${n}`;
      for (const id of ['sclera', 'cbody', 'musc', 'proc1', 'proc2', 'proc3', 'sc'])
        check(!!by('fu-' + id + 'L') && !!by('fu-' + id + 'R'), `${w}: ${id} drawn on both sides`);
      const iL = by('fu-irisL') || by('fu-iris-bL') || by('fu-iris-wL') || by('fu-iris-nL'), iR = by('fu-irisR') || by('fu-iris-bR') || by('fu-iris-wR') || by('fu-iris-nR'), tL = by('fu-tmL') || by('fu-tm-bL'), tR = by('fu-tmR') || by('fu-tm-bR');
      check(!!iL && !!iR && !!tL && !!tR && !!by('fu-cornea') && !!by('fu-lens') && !!by('fu-fl'), `${w}: cornea, fluid, lens, an iris and a meshwork on each side`);
      if (!iL || !iR) return;
      const bl = box(iL), br = box(iR), lens = box(by('fu-lens')), cor = box(by('fu-cornea')), CX = (lens.x0 + lens.x1) / 2, sc = (lens.x1 - lens.x0) / 120;
      check(cor.x1 - cor.x0 > 200, `${w}: the eye is drawn large (width ${Math.round(cor.x1 - cor.x0)})`);
      if (k !== 'ey-autonomic') { const c0 = box(els(st[0]).find(e => e.k === 'fu-cornea')); check(Math.abs(c0.x0 - cor.x0) < 0.2 && Math.abs(c0.y0 - cor.y0) < 0.2 && Math.abs(c0.x1 - cor.x1) < 0.2, `${w}: the eye is in the same place and size as in step 1`); }
      check(bl.x1 < CX - (k === 'ey-autonomic' ? 4 : 12) * sc && br.x0 > CX + (k === 'ey-autonomic' ? 4 : 12) * sc && Math.abs((CX - bl.x1) - (br.x0 - CX)) < 0.6, `${w}: the pupil is the gap between the two irises, centred on the axis`, [bl.x1, br.x0].join(','));
      check(lens.x0 < bl.x1 && lens.x1 > br.x0 && lens.y0 > Math.max(bl.y1, br.y1) && cor.y0 < bl.y0, `${w}: the lens lies behind the pupil and the irises, the cornea in front`);
      check(box(tL).x1 <= bl.x0 + 12 * sc && box(by('fu-scL')).x1 < box(tL).x1 && box(by('fu-cbodyL')).y0 >= bl.y0 - 6 * sc, `${w}: meshwork and canal at the angle outside the iris root, the ciliary body behind it`);
      /* the four constant orientation labels; the pupil leader ends in the gap, the iris label on or beside the iris */
      const pt = by('fu-pupil-t0'), plead = by('fu-pupil-l'), it = by('fu-iris-t0'), ilead = by('fu-iris-l');
      check(!!pt && /Pupil/.test(pt.txt) && !!it && /Iris/.test(it.txt) && !!by('fu-cornea-t0') && !!by('fu-lens-t0'), `${w}: Cornea, Iris, Pupil and Lens are labelled`);
      if (plead) { const [ex, ey] = endOf(plead); check(ex > bl.x1 && ex < br.x0 && ey >= bl.y0 - 2 && ey <= lens.y0, `${w}: the Pupil leader ends in the gap`, ex + ',' + ey); }
      else check(false, `${w}: the Pupil label has a leader`);
      if (ilead) { const [ex, ey] = endOf(ilead); check(ex > bl.x0 && ex < bl.x1 && ey >= bl.y0 && ey <= bl.y1, `${w}: the Iris leader ends on the iris`, ex + ',' + ey); }
      else if (it) { const x = +attr(it.a, 'x'), y = +attr(it.a, 'y'); check(x > bl.x0 && x < bl.x1 && y > bl.y0 && y < bl.y1, `${w}: the Iris label sits on the iris`, x + ',' + y); }
      const lt = by('fu-lens-t0'); if (lt) { const b = tbox(lt); check(inBox(b, lens), `${w}: the Lens label sits on the lens`); }
      /* every live flow on the eye runs on both sides: two subpaths and a head on each side */
      E.filter(e => /\bfx-(flow|drift)\b/.test(e.cls) && /^f-/.test(e.k)).forEach(e => {
        const d = attr(e.a, 'd') || '', b = box(e);
        check((d.match(/M/g) || []).length === 2 && b.x0 < CX && b.x1 > CX && !!by(e.k + '^L') && !!by(e.k + '^R') && !!by(e.k + '~'), `${w}: flow ${e.k} runs on both sides with a lane and two heads`);
      });
    });
    /* layout rules, every step of the figure */
    st.forEach((g, i) => {
      const E = els(g), w = `${k} step ${i + 1}`;
      /* no leader crosses another leader or runs through a label */
      const leads = E.filter(e => e.tag === 'path' && /\b(an-lead|fa-ld\d)\b/.test(e.cls)), texts = E.filter(e => e.tag === 'text' && e.txt && !/capt/.test(e.cls));
      const x = [], thr = [];
      for (let a = 0; a < leads.length; a++) for (let b = a + 1; b < leads.length; b++)
        if (segs(leads[a]).some(p => segs(leads[b]).some(q => cross(p, q)))) x.push(leads[a].k + ' x ' + leads[b].k);
      leads.forEach(l => texts.forEach(t => { const b = tbox(t); if (segs(l).some(sg => segBox(sg, {x0: b.x0 + 1, x1: b.x1 - 1, y0: b.y0 + 1.5, y1: b.y1 - 0.5}))) thr.push(l.k + ' through ' + t.k); }));
      check(!x.length, `${w}: no leader crosses another leader`, x.join(', '));
      check(!thr.length, `${w}: no leader runs through a label`, thr.join(', '));
      /* chips and cards: 8 units of padding, at least 10 units between blocks */
      const blocks = E.filter(e => e.tag === 'rect' && /\bfa-(chip|card|chk\d)\b/.test(e.cls)).map(e => Object.assign(box(e), {k: e.k}));
      const pad = [], gap = [];
      texts.forEach(t => { const x0 = +attr(t.a, 'x'), y = +attr(t.a, 'y'), an = attr(t.a, 'text-anchor') || 'start';
        const B = blocks.find(b => x0 >= b.x0 && x0 <= b.x1 && y >= b.y0 && y <= b.y1);
        if (B && an === 'start' && x0 - B.x0 < 8 - 0.01) pad.push(t.k);
        if (B && tbox(t).x1 > B.x1 - 1) pad.push(t.k + ' (right)'); });
      for (let a = 0; a < blocks.length; a++) for (let b = a + 1; b < blocks.length; b++) {
        const A = blocks[a], B = blocks[b], dx = Math.max(A.x0, B.x0) - Math.min(A.x1, B.x1), dy = Math.max(A.y0, B.y0) - Math.min(A.y1, B.y1);
        if (Math.max(dx, dy) < 10 - 0.01) gap.push(A.k + '/' + B.k + ' ' + Math.round(Math.max(dx, dy)));
      }
      check(!pad.length, `${w}: text in chips and cards has 8 units of padding`, pad.join(', '));
      check(!gap.length, `${w}: at least 10 units between chips and cards`, gap.join(', '));
    });
  }
  /* the angle zoom */
  for (const [k, list] of Object.entries(ZSTEPS)) {
    const st = stepsOf(k);
    st.forEach((g, i) => { if (!list.includes(i + 1)) check(!/data-k="az-bg"/.test(g), `${k} step ${i + 1}: no angle zoom (not an outflow step)`); });
    list.forEach(n => {
      const E = els(st[n - 1] || ''), by = key => E.find(e => e.k === key), w = `${k} step ${n}`;
      const bg = by('az-bg'), frm = by('az-frm');
      check(!!bg && !!frm && !!by('az-ttl') && !!by('az-ring') && !!by('az-link'), `${w}: the angle zoom panel with its title, the ring on the eye and the link`);
      if (!bg) return;
      const P = box(bg), tm = by('az-tm') || by('az-tm-b'), ir = by('az-iris') || by('az-iris-b');
      for (const id of ['cornea', 'sclera', 'cbody', 'musc', 'sc', 'vein']) check(!!by('az-' + id) && inBox(box(by('az-' + id)), P, 0.5), `${w}: zoom draws ${id} inside the panel`);
      check(!!tm && !!ir && inBox(box(tm), P) && inBox(box(ir), P, 0.5), `${w}: zoom draws the meshwork and the iris root`);
      check(P.x1 - P.x0 >= 340 && P.y1 - P.y0 >= 160, `${w}: the zoom is large (${P.x1 - P.x0} x ${P.y1 - P.y0})`);
      /* the ring is on the left angle of the eye and the link runs from it to the panel */
      const ring = box(by('az-ring')), ltm = box(by('fu-tmL') || by('fu-tm-bL')), lk = box(by('az-link'));
      check(meet(ring, ltm) && Math.abs(lk.n[0] - ring.x0) < 8 && lk.n[1] > ring.y0 && lk.n[1] < ring.y1 + 4 && Math.abs(lk.n[3] - P.y0) < 1, `${w}: the ring sits on the eye's left angle and the leader runs from it to the zoom`);
      /* geometry of the angle: canal in the wall outside the meshwork, vein outside the sclera, muscle against the sclera below the angle */
      const T = box(tm), S = box(by('az-sc')), V = box(by('az-vein')), M = box(by('az-musc')), SL = box(by('az-sclera'));
      check(S.x1 < ctr(T)[0] && S.x0 < T.x0 && V.x0 < SL.x0 + 4 && V.y0 > S.y1 && M.y0 > T.y0 && M.x0 <= SL.x1 + 2, `${w}: canal beside the meshwork, vein on the outside of the sclera, ciliary muscle against the sclera`);
      /* everything placed in the panel stays in it */
      E.filter(e => /^(z-|zblk)/.test(e.k || '')).forEach(e => check(inBox(box(e), P, 5), `${w}: ${e.k} lies inside the zoom`));
      const tmF = by('z-tm'), uvF = by('z-uv');
      if (tmF && /fu-slow/.test(tmF.cls) === false) { const [ex, ey] = endOf(tmF); const b = box(tmF);
        check(/fx-flow/.test(tmF.cls) && b.x1 - b.x0 > 150 && meet(b, T) && ex >= V.x0 - 3 && ex <= V.x1 + 3 && ey >= V.y0 - 14 && ey <= V.y1, `${w}: the dashed arrow is long, passes the meshwork and the canal and ends at the vein`, [ex, ey].join(',')); }
      if (uvF) { const [ex, ey] = endOf(uvF), b = box(uvF);
        check(/fx-drift/.test(uvF.cls) && b.y1 - b.y0 > 55 && ex > SL.x0 && ex < M.x1 && ey > T.y1 + 40 && ex < ctr(M)[0], `${w}: the dotted arrow is long and ends between the ciliary muscle and the sclera`, [ex, ey].join(',')); }
    });
  }
  /* the cues the recorded narration names */
  const aq = stepsOf('ey-aqueous').map(els), tg = stepsOf('ey-targets').map(els), an = stepsOf('ey-angle').map(els);
  const has = (E, k, c) => E.some(e => e.k === k && (!c || e.cls.split(' ').includes(c)));
  const bx = (E, k) => box(E.find(e => e.k === k));
  check(has(aq[1], 'f-in', 'fx-flow') && !aq[1].some(e => /fx-drift/.test(e.cls)), 'ey-aqueous step 2: the inflow is the one moving flow');
  check(has(aq[2], 'z-tm', 'fx-flow') && has(aq[2], 'z-uv', 'fx-drift') && !has(aq[2], 'f-in'), 'ey-aqueous step 3: the trabecular route is the dashed arrow, the uveoscleral route the dotted arrow (both in the zoom), the inflow is still');
  check(has(aq[3], 'pz-beta', 'fa-rc2') && has(aq[3], 'pz-a2', 'fa-rc3') && has(aq[3], 'pz-ca', 'fa-rc4'), 'ey-aqueous step 4: β receptor green, α2 receptor amber, carbonic anhydrase purple');
  /* round 4: step 4 is drawn on the same whole eye as steps 5-7 (no small copy): a ring round the process on the eye, the process inset, and the two M3 marks (meshwork and sphincter, red, with their labels) */
  check(has(aq[3], 'pz-ring') && has(aq[3], 'pz-c') && has(aq[3], 'd-m3tL', 'fa-dk5') && has(aq[3], 'd-m3tR', 'fa-dk5') && has(aq[3], 'd-m3iL', 'fa-dk5') && has(aq[3], 'd-m3iR', 'fa-dk5') && has(aq[3], 'fu-gm3-t0') && has(aq[3], 'fu-sph-t0'), 'ey-aqueous step 4: a ring on the eye round the process, the process inset, and the two M3 marks (meshwork, iris) on both sides with labels');
  check(has(aq[4], 'f-in', 'fu-slow'), 'ey-aqueous step 5: the inflow marches slowly (production decreased)');
  check(has(aq[5], 'z-tm', 'fx-flow') && !has(aq[5], 'f-in') && !has(aq[5], 'z-uv') && has(aq[5], 'fu-sphL') && has(aq[5], 'fu-sphR') && has(aq[5], 'fu-sph-t0'), 'ey-aqueous step 6: only the trabecular flow moves; the sphincter is marked on both irises and labelled');
  check(has(aq[6], 'z-uv', 'fx-drift') && has(aq[6], 'az-musc-hl') && !has(aq[6], 'f-in') && !has(aq[6], 'z-tm'), 'ey-aqueous step 7: only the uveoscleral flow moves; the ciliary muscle is highlighted');
  for (const [k, c] of [['d-b', 2], ['d-a', 3], ['d-c', 4]])
    check(has(tg[0], k + 'L', 'fa-dk' + c) && has(tg[0], k + 'R', 'fa-dk' + c) && has(tg[3], k + 'L', 'fa-dk' + c), `ey-targets: mark ${k} in class colour ${c} on both sides (step 1 and step 4)`);
  { /* a mark sits on the process it names */
    ['d-b', 'd-a', 'd-c'].forEach((k, j) => { const d = ctr(bx(tg[0], k + 'L')), p = bx(tg[0], 'fu-proc' + (j + 1) + 'L'); check(d[0] > p.x0 && d[0] < p.x1 && d[1] > p.y0 && d[1] < p.y1, `ey-targets step 1: ${k} sits on a ciliary process`); });
    const on = (E, k, part, why, m = 0) => { const d = ctr(bx(E, k)), p = bx(E, part); check(d[0] > p.x0 - m && d[0] < p.x1 + m && d[1] > p.y0 - m && d[1] < p.y1 + m, why); };
    for (const i of [1, 3]) {
      check(has(tg[i], 'z-m3', 'fa-dk5') && has(tg[i], 'z-rkt', 'fa-dk6') && has(tg[i], 'z-rks', 'fa-dk6') && has(tg[i], 'd-m3iL', 'fa-dk5') && has(tg[i], 'd-m3iR', 'fa-dk5'), `ey-targets step ${i + 1}: M3 red and Rho kinase magenta marks`);
      on(tg[i], 'z-m3', 'az-tm', `ey-targets step ${i + 1}: the M3 mark sits on the meshwork (zoom)`);
      on(tg[i], 'z-rkt', 'az-tm', `ey-targets step ${i + 1}: a Rho kinase mark sits on the meshwork (zoom)`);
      on(tg[i], 'z-rks', 'az-sc', `ey-targets step ${i + 1}: a Rho kinase mark sits on Schlemm's canal (zoom)`);
      on(tg[i], 'd-m3iL', 'fu-irisL', `ey-targets step ${i + 1}: the M3 mark of the sphincter sits at the pupil edge of the iris`);
      const d = ctr(bx(tg[i], 'd-m3iL')), ir = bx(tg[i], 'fu-irisL'); check(ir.x1 - d[0] < 8, `ey-targets step ${i + 1}: that mark is at the pupil end`);
    }
    for (const i of [2, 3]) {
      check(has(tg[i], 'z-pg', 'fa-dk1') && has(tg[i], 'z-uv-d', 'fa-dk3'), `ey-targets step ${i + 1}: PG blue and the second amber mark`);
      on(tg[i], 'z-pg', 'az-musc', `ey-targets step ${i + 1}: the PG mark sits on the ciliary muscle (zoom)`);
      const d = ctr(bx(tg[i], 'z-uv-d')), sl = bx(tg[i], 'az-sclera'), pg = ctr(bx(tg[i], 'z-pg'));
      check(d[0] > sl.x0 && d[0] < pg[0] && d[0] - sl.x1 < 14, `ey-targets step ${i + 1}: the brimonidine mark sits between the ciliary muscle and the sclera (zoom)`);
    }
  }
  /* round 4: the eye carries every mark in every step, the marks of other steps faded (opacity .5); step 3's own amber mark is the one in the zoom */
  check(tg[2].filter(e => /^d-a[LR]$/.test(e.k || '')).length === 2 && tg[2].filter(e => /^d-a[LR]$/.test(e.k || '')).every(e => /opacity="0.5"/.test(e.a)) && has(tg[2], 'z-uv-d', 'fa-dk3') && tg[3].filter(e => /fa-dk3/.test(e.cls)).length === 3, 'ey-targets: step 3 shows the uveoscleral amber mark at full strength (the α2 marks on the ciliary processes faded); step 4 both kinds of amber mark');
  check(has(an[0], 'ringR') && has(an[0], 'az-ring') && has(an[0], 'f-in', 'fx-flow') && has(an[0], 'z-tm', 'fx-flow') && has(an[0], 'z-uv', 'fx-drift'), 'ey-angle step 1: both angles circled; inflow on the eye, trabecular and uveoscleral flows in the zoom');
  check(has(an[1], 'fu-tm-bL', 'fa-tmbad') && has(an[1], 'fu-tm-bR', 'fa-tmbad') && has(an[1], 'az-tm-b', 'fa-tmbad') && has(an[1], 'blkPL', 'fa-blk') && has(an[1], 'blkPR', 'fa-blk') && has(an[1], 'zblkP', 'fa-blk') &&
    has(an[1], 'f-in', 'fu-slow') && has(an[1], 'z-tm', 'fu-slow') && !has(an[1], 'z-out') && !has(an[1], 'z-uv') && has(an[1], 'fu-irisL') && has(an[1], 'az-iris'),
    'ey-angle step 2: open angle (flat iris), the meshworks marked with the red slash, the flow slowed and nothing moving beyond the meshwork');
  { const bar = bx(an[1], 'zblkP'), tm = bx(an[1], 'az-tm-b'), fl = an[1].find(e => e.k === 'z-tm'), end = endOf(fl);
    check(meet(bar, tm) && bar.y1 - bar.y0 > 25 && end[0] > tm.x1 - 1 && end[0] - tm.x1 < 16, 'ey-angle step 2: the red bar lies across the meshwork in the zoom and the slowed flow ends at it', end.join(',')); }
  check(has(an[2], 'fu-iris-bL') && has(an[2], 'fu-iris-bR') && has(an[2], 'az-iris-b') && has(an[2], 'blkCL', 'fa-blk') && has(an[2], 'blkCR', 'fa-blk') && has(an[2], 'zblkC', 'fa-blk') &&
    has(an[2], 'f-stop', 'fx-flow') && has(an[2], 'z-stop', 'fx-flow') && !has(an[2], 'z-tm') && !has(an[2], 'f-in'),
    'ey-angle step 3: the iris bowed forward on both sides and in the zoom, the flow stopped before the meshwork');
  { /* the bowed iris reaches forward of the meshwork and is drawn after it (it lies on the meshwork), on the eye and in the zoom */
    const ks = an[2].map(e => e.k), ib = bx(an[2], 'fu-iris-bL'), tm = bx(an[2], 'fu-tmL');
    check(ks.indexOf('fu-iris-bL') > ks.indexOf('fu-tmL') && ib.y0 < tm.y0 && ib.x0 < tm.x1, 'ey-angle step 3: the bowed iris covers the meshwork on the eye');
    const zi = bx(an[2], 'az-iris-b'), zt = bx(an[2], 'az-tm'), flat = bx(an[1], 'az-iris');
    check(ks.indexOf('az-iris-b') > ks.indexOf('az-tm') && meet(zi, zt) && zi.x0 < zt.x1 - 8 && zi.y0 < flat.y0 - 30, 'ey-angle step 3: in the zoom the bowed iris lies on the meshwork, well forward of the flat iris');
    const stop = bx(an[2], 'f-stop'), bar = bx(an[2], 'blkCL');
    check(stop.x0 > bar.x1 - 1 && stop.x0 - bar.x1 < 12, 'ey-angle step 3: the flow ends at the red bar', stop.x0 + ' vs ' + bar.x1);
    const zs = endOf(an[2].find(e => e.k === 'z-stop')), zb = bx(an[2], 'zblkC');
    check(zs[0] > zb.x1 - 1 && zs[0] - zb.x1 < 16 && zs[0] > zt.x1, 'ey-angle step 3: in the zoom the flow ends at the red bar, short of the meshwork', zs.join(','));
  }
  { /* ey-autonomic: slide 7 only */
    const au = stepsOf('ey-autonomic').map(els), txt = n => stepTextK('ey-autonomic', n).replace(/\s+/g, ' ');
    const gap = E => { const l = E.find(e => /^fu-iris(-[wn])?L$/.test(e.k)), r = E.find(e => /^fu-iris(-[wn])?R$/.test(e.k)); return box(r).x0 - box(l).x1; };
    for (const w of ['Dilator muscle', 'Pupillary sphincter', 'Ciliary body']) check(txt(1).includes(w), 'ey-autonomic step 1: ' + w + ' labelled (slide 7)');
    for (const i of [0, 1, 2]) check(au[i].some(e => /^fu-sph(-[wn])?L$/.test(e.k)) && au[i].some(e => /^fu-dil(-[wn])?0L$/.test(e.k)) && au[i].some(e => /^fu-dil(-[wn])?0R$/.test(e.k)), `ey-autonomic step ${i + 1}: sphincter and dilator drawn in the iris`);
    { const sp = bx(au[0], 'fu-sphL'), ir = bx(au[0], 'fu-irisL'), dl = bx(au[0], 'fu-dil0L');
      check(ir.x1 - sp.x1 < 8 && inBox(dl, ir, 1) && dl.x1 - dl.x0 > 0.5 * (ir.x1 - ir.x0) && dl.x1 < sp.x0 + 4, 'ey-autonomic: the sphincter at the pupil edge, the dilator along the iris'); }
    check(gap(au[1]) > gap(au[0]) * 1.3 && gap(au[2]) < gap(au[0]) * 0.7, 'ey-autonomic: the pupil is drawn wider in step 2 and narrower in step 3', [gap(au[0]), gap(au[1]), gap(au[2])].map(Math.round).join(','));
    check(has(au[1], 'fu-iris-wL') && has(au[2], 'fu-iris-nL') && has(au[0], 'fu-irisL'), 'ey-autonomic: the iris has a data-k per state (cross-fade)');
    check(has(au[1], 'd-a1L', 'fa-dk3') && has(au[1], 'd-a1R', 'fa-dk3') && !au[1].some(e => /fa-(dk|tk)5\b/.test(e.cls) && !/^at/.test(e.k)), 'ey-autonomic step 2: α1 marks in the adrenergic colour only');
    { const d = ctr(bx(au[1], 'd-a1L')), dl = bx(au[1], 'fu-dil-w0L'); check(d[0] > dl.x0 && d[0] < dl.x1 && Math.abs(d[1] - ctr(dl)[1]) < 3, 'ey-autonomic step 2: the α1 mark sits on the dilator muscle'); }
    check(has(au[1], 'f-aq', 'fx-flow') && has(au[1], 'fu-musc-hl') && /α1 receptors/.test(txt(2)) && /dilates/.test(txt(2)) && /relaxes: far vision/.test(txt(2)) && /produces aqueous humor/.test(txt(2)), 'ey-autonomic step 2: dilates, relaxes (far vision), produces aqueous humor, with flow marks at the ciliary processes');
    { const f = bx(au[1], 'f-aq'), p = bx(au[1], 'fu-proc2L'); check(Math.abs(f.x0 - p.x1) < 12 && f.y1 > p.y0 - 4, 'ey-autonomic step 2: the flow marks leave the ciliary processes'); }
    check(['d-mL', 'd-mR', 'd-mcL', 'd-mcR'].every(k => has(au[2], k, 'fa-dk5')) && !au[2].some(e => /fa-(dk|tk)3\b/.test(e.cls) && !/^at/.test(e.k)) && !au[2].some(e => /fx-(flow|drift)/.test(e.cls)),
      'ey-autonomic step 3: muscarinic marks in the cholinergic colour only; no aqueous flow drawn');
    { const d = ctr(bx(au[2], 'd-mL')), sp = bx(au[2], 'fu-sph-nL'), m = ctr(bx(au[2], 'd-mcL')), mu = bx(au[2], 'fu-muscL');
      check(d[0] > sp.x0 - 1 && d[0] < sp.x1 + 1 && m[0] > mu.x0 && m[0] < mu.x1 && m[1] > mu.y0 && m[1] < mu.y1, 'ey-autonomic step 3: marks on the sphincter and on the ciliary body'); }
    check(/muscarinic receptors/.test(txt(3)) && /constricts/.test(txt(3)) && /contracts/.test(txt(3)) && /accommodation \(focus for near vision\)/.test(txt(3)), 'ey-autonomic step 3: constricts, contracts, increased accommodation (glossed)');
    for (const i of [2, 3]) check(/Adrenergic/.test(txt(i)) && /Cholinergic/.test(txt(i)) && /not on slide 7/.test(txt(i)) && /Pupil/.test(txt(i)) && /Ciliary muscle/.test(txt(i)) && /Aqueous humor/.test(txt(i)), `ey-autonomic step ${i}: the two-column card with its three rows; the empty cell reads "not on slide 7"`);
    check(!/Adrenergic/.test(txt(1)) && !has(au[0], 'atc'), 'ey-autonomic step 1: no card yet');
    { const row = au[2].filter(e => /^atr2c/.test(e.k)).map(e => e.txt).join(' '); check(row === 'not on slide 7', 'ey-autonomic: nothing is said about aqueous humor under cholinergic stimulation', row); }
    check(!/pilocarpine|carbachol|timolol|brimonidine|phenylephrine|atropine|mydriasis|miosis|M3|β/.test(drawn('ey-autonomic')), 'ey-autonomic: no drug names or terms slide 7 does not use');
    check(/slide 7/.test((DIA['ey-autonomic'].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || ''), 'ey-autonomic: figcaption cites slide 7');
  }
  /* the sentence maps fit the markup */
  const sbS = {}; vm.createContext(sbS); vm.runInContext(rd('dianarr_sync_ey.js') + '\nthis.S = DIA_SYNC;', sbS);
  const sbN = {}; vm.createContext(sbN); vm.runInContext(rd('dianarr_ey.js') + '\nthis.N = DIA_NARR;', sbN);
  check(!sbS.S['ey-autonomic'] && sbN.N['ey-autonomic'] && sbN.N['ey-autonomic'].steps.length === 3, 'ey-autonomic: three narrated steps, no sentence map (the steps play whole)');
  for (const k of Object.keys(FULL).filter(k => k !== 'ey-autonomic')) {
    const sy = sbS.S[k], st = stepsOf(k), h = PLAN[k].h;
    check(Array.isArray(sy) && sy.length === st.length, `${k}: one sentence map per step`, sy && sy.length);
    (sy || []).forEach((m, i) => {
      if (!m) return;
      const n = (st[i].match(/<(path|text|rect|polygon|circle|ellipse|line)\b/g) || []).length;
      const sents = (sbN.N[k].steps[i].text.match(/[^.!?]+[.!?]+(\s|$)/g) || []).length;
      const idx = [].concat(...Object.values(m.seq));
      check(m.n === n, `${k} step ${i + 1}: the map's n is the number of drawn children`, m.n + ' vs ' + n);
      check(idx.every(j => j >= 0 && j < n) && new Set(idx).size === idx.length, `${k} step ${i + 1}: map indexes are inside the step and used once`);
      check(Object.keys(m.seq).every(s => m.at[s] && +s >= 1 && +s <= sents), `${k} step ${i + 1}: every mapped sentence exists and has a badge place`, Object.keys(m.seq).join(',') + ' of ' + sents);
      check(Object.values(m.at).every(([x, y]) => x >= 8 && x <= 352 && y >= 8 && y <= h - 8), `${k} step ${i + 1}: badges inside the panel`);
      /* a badge (15-unit circle) covers no label */
      const E = els(st[i]).filter(e => e.tag === 'text' && e.txt && !/capt/.test(e.cls)), hit = [];
      Object.entries(m.at).forEach(([s, [x, y]]) => E.forEach(t => { const b = tbox(t); if (x + 6.5 > b.x0 && x - 6.5 < b.x1 && y + 6.5 > b.y0 && y - 6.5 < b.y1) hit.push(s + ' on ' + t.k); }));
      check(!hit.length, `${k} step ${i + 1}: no badge covers a label (estimate)`, hit.join(', '));
    });
  }
}

// 7. round 4 (2026-11-23): the targets stay on the whole eye in every drug step, with the process inset
{
  const stepsOf = k => (DIA[k] || '').split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  const els = g => [...g.matchAll(/<(path|text|rect|polygon)\b([^>]*)>([^<]*)/g)].map(m => ({tag: m[1], a: m[2], k: attr(m[2], 'data-k'), cls: attr(m[2], 'class') || '', txt: m[3]}));
  const GROUP = {b: ['d-b'], a: ['d-a'], c: ['d-c'], m3: ['d-m3t', 'd-m3i'], rk: ['d-rk'], pg: ['d-pg']};
  const faded = e => /opacity="0.5"/.test(e.a);
  /* step list: [figure, step number (1-based), groups at full strength, groups drawn] */
  const PLANS = [['ey-aqueous', 4, ['b', 'a', 'c', 'm3'], ['b', 'a', 'c', 'm3']], ['ey-aqueous', 5, ['b', 'a', 'c'], null], ['ey-aqueous', 6, ['m3', 'rk'], null], ['ey-aqueous', 7, ['pg'], null],
    ['ey-targets', 1, ['b', 'a', 'c'], null], ['ey-targets', 2, ['m3', 'rk'], null], ['ey-targets', 3, ['pg'], null], ['ey-targets', 4, ['b', 'a', 'c', 'm3', 'rk', 'pg'], null]];
  const LBL = {b: 'fu-gb', a: 'fu-ga', c: 'fu-gc', m3: 'fu-gm3', rk: 'fu-grk', pg: 'fu-gpg'};
  for (const [k, n, on, only] of PLANS) {
    const E = els(stepsOf(k)[n - 1]), tag = `${k} step ${n}`;
    const gs = only || Object.keys(GROUP);
    for (const g of gs) {
      const ok = GROUP[g].every(m => ['L', 'R'].every(sd => { const d = E.filter(e => e.k === m + sd); return d.length === 1 && (on.includes(g) ? !faded(d[0]) : faded(d[0])); }));
      check(ok, `${tag}: the ${g} mark is on both sides of the eye, ${on.includes(g) ? 'at full strength' : 'faded (still drawn)'}`);
      const lab = E.filter(e => e.tag === 'text' && (e.k === LBL[g] + '-t0' || e.k === LBL[g] + '-t1'));
      check(lab.length === 2 && lab.every(e => on.includes(g) ? !faded(e) : faded(e)), `${tag}: the ${g} mark has its two-line label (receptor or enzyme, then the class), ${on.includes(g) ? 'full' : 'faded'}`);
    }
    check(E.some(e => e.k === 'fu-sph-t0') && E.some(e => e.k === 'pz-c'), `${tag}: the iris mark is labelled and the process inset is drawn`);
    const cb = E.find(e => e.k === 'fu-cbodyL' || e.k === 'fu-cbody-bL');
    check(cb && !/opacity=/.test(cb.a) && ['fu-cbodyR', 'fu-proc1L', 'fu-proc1R'].every(kk => E.some(e => e.k === kk && !/opacity=/.test(e.a))), `${tag}: both ciliary bodies and their processes are drawn at full strength`);
    const insetOn = (n <= 5 && k === 'ey-aqueous') || (k === 'ey-targets' && n === 1);
    const pc = E.find(e => e.k === 'pz-c'), pt = E.find(e => e.k === 'pzbc');
    check(insetOn ? !/opacity=/.test(pc.a) && !/opacity=/.test(pt.a) : /opacity="0.4"/.test(pc.a) && /opacity="0.4"/.test(pt.a), `${tag}: the process inset is ${insetOn ? 'at full strength (the step is about inflow)' : 'dimmed (the step is about outflow)'}`);
  }
  /* the outflow steps keep the angle zoom beside (under) the inset; heights stay under 900 */
  for (const [k, n] of [['ey-aqueous', 6], ['ey-aqueous', 7], ['ey-targets', 2], ['ey-targets', 3], ['ey-targets', 4]]) {
    const E = els(stepsOf(k)[n - 1]);
    const ztop = E.find(e => e.k === 'az-frm'), pzT = E.find(e => e.k === 'pzT');
    check(ztop && pzT && +attr(pzT.a, 'y') > +attr(ztop.a, 'y') + +attr(ztop.a, 'height'), `${k} step ${n}: the process inset sits below the angle zoom, not over it`);
  }
  for (const k of ['ey-aqueous', 'ey-targets', 'ey-angle']) check(PLAN[k].h < 900, `${k}: taller than before but under 900 units`);
}
const FIGURATIVE = /\b(netting|fence|sponge|pop|orange)\b/i;
for (const k of Object.keys(PLAN)) {
  check(!FIGURATIVE.test(drawn(k)), k + ': no figurative labels drawn', (drawn(k).match(FIGURATIVE) || [])[0]);
  check(!/(double|triple) bond/i.test(DIA[k]), k + ': no double/triple bond wording');
}

console.log((fails ? 'FAIL' : 'PASS') + ': diagrams_ey_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  Object.keys(PLAN).length + ' figures, ' + Object.values(PLAN).reduce((a, p) => a + p.steps, 0) + ' steps)');
process.exit(fails ? 1 : 0);
