#!/usr/bin/env node
/* figs2_check.js: the drawn step-throughs in figs2.js (visuals evaluation items 3-7).

     node figs2_check.js

   1. figs2.js is listed in course.js files after reactions.js, and adds each figure to
      DIA, DIA_NAMES and one DIAGRAMS group.
   2. Each figure is a step-through with the planned number of steps and one dot per step;
      each step's drawn caption carries a source in parentheses (a slide and a transcript
      or recording place, or a slide alone where the figure caption gives the place); the
      figcaption names the deck and a transcript or recording place.
   3. STEPPERS.md rules that a script can see: every drawn shape carries a data-k, data-k
      values are unique inside a step, no shape has its own transform, opacity is set as
      an attribute only, and no colour is written into the markup (colours come from the
      course CSS variables or currentColor). Every shape sits inside the viewBox.
   4. Source rules: each professor's UV band limits stay in that professor's line or
      figure; held items in reviews/OPEN_QUESTIONS.md are not drawn as settled (the
      chlorine C-15/C-16 exercise, MHC I in signal 1, dupilumab in psoriasis, a UVB limit
      of 320 for Dr. Sikazwe); the professors' figurative labels are not used.
   5. The Guide places each figure once, inside <div class="f2fig" id="KEY">, in its
      section, and any walkthrough part that names one of these figures names a step that
      exists.
   Prints PASS or FAIL lines and exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail ? ' (' + detail + ')' : '')); }
};

const PLAN = {
  'fig-steroid':         {steps: 6, guide: 'gobj-mc-psotop', h: 320},
  'fig-il-axis':         {steps: 5, guide: 'gobj-l1-4',      h: 424},
  'fig-cni-nfat':        {steps: 6, guide: 'gobj-l1-4',      h: 392},
  'fig-spf':             {steps: 4, guide: 'gobj-sun-4',     h: 430},
  'fig-block-vs-screen': {steps: 4, guide: 'gobj-sun-2',     h: 380},
};

// 1. course.js order and registration
const sbC = {module: {}, require};
vm.createContext(sbC);
vm.runInContext(rd('course.js') + '\nthis.F = (typeof COURSE !== "undefined" ? COURSE : module.exports).files;', sbC);
const F = sbC.F || [];
const ri = F.indexOf('reactions.js'), fi = F.indexOf('figs2.js');
check(fi > ri && ri >= 0, 'course.js files lists figs2.js after reactions.js', JSON.stringify([ri, fi]));

const sb = {console};
vm.createContext(sb);
vm.runInContext(rd('diagrams.js') + '\n' + rd('reactions.js') + '\n' + rd('figs2.js') +
  '\nthis.X = {DIA, DIA_NAMES, DIAGRAMS};', sb);
const {DIA, DIA_NAMES, DIAGRAMS} = sb.X;
const grouped = DIAGRAMS.flatMap(([, keys]) => keys);
for (const k of Object.keys(PLAN)) {
  check(typeof DIA[k] === 'string', k + ' is in DIA');
  check(!!DIA_NAMES[k], k + ' has a name in DIA_NAMES');
  check(grouped.filter(x => x === k).length === 1, k + ' is listed once in DIAGRAMS', grouped.filter(x => x === k).length);
}

// 2-4. each figure
const SHAPE = /<(text|line|path|rect|circle|ellipse|polygon|polyline)\b([^>]*)>/g;
const attr = (s, a) => { const m = s.match(new RegExp('\\b' + a + '="([^"]*)"')); return m ? m[1] : null; };
const FIGURATIVE = /\b(loop|snake|snakes|hopscotch|journey|turkey|ping ?pong|nightmare|buddy|buddies)\b/i;
for (const [k, plan] of Object.entries(PLAN)) {
  const html = DIA[k];
  if (typeof html !== 'string') continue;
  const steps = html.split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  const nDots = (html.match(/class="sdot[ "]/g) || []).length;
  check(steps.length === plan.steps, k + ': ' + plan.steps + ' steps', steps.length);
  check(nDots === steps.length, k + ': one dot per step', nDots);
  check(/data-anim="/.test(html), k + ': carries step controls');
  const vb = html.match(/viewBox="0 0 (\d+) (\d+)"/);
  check(vb && +vb[2] === plan.h, k + ': panel height ' + plan.h, vb && vb[2]);
  const cap = (html.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || '';
  check(/(DPAW|Skin-PCol-Students-2026\.pdf|DEENT_Sun_Exposure_2026\.pdf)/.test(cap), k + ': figcaption names the deck');
  check(/(\bT \d|T@\d|recording \d\d:)/.test(cap), k + ': figcaption names a transcript or recording place');
  const svgOnly = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
  check(!FIGURATIVE.test(svgOnly), k + ': no figurative labels drawn', (svgOnly.match(FIGURATIVE) || [])[0]);
  check(!/(fill|stroke|stop-color)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(svgOnly), k + ': no colour written into the markup');
  steps.forEach((s, i) => {
    const capLines = [...s.matchAll(/<text class="lbl xs capt"[^>]*>([^<]*)<\/text>/g)].map(m => m[1]).join(' ');
    check(/\([^)]*(slide|PCol|Sun \d|DPAW|T \d|T@|\d\d:\d\d)[^)]*\)/.test(capLines), `${k} step ${i + 1}: drawn caption gives its source`, capLines.slice(0, 80));
    const keys = [], noKey = [], tf = [], out = [], styleOp = [];
    for (const m of s.matchAll(SHAPE)) {
      const a = m[2];
      if (/\bcapt\b/.test(attr(a, 'class') || '')) continue;      // the step caption, built by stepper()
      const dk = attr(a, 'data-k');
      if (dk == null) noKey.push(m[1] + ' ' + a.slice(0, 40)); else keys.push(dk);
      if (/\btransform=/.test(a)) tf.push(dk);
      if (/style="[^"]*opacity/.test(a)) styleOp.push(dk);
      const xs = ['x', 'x1', 'x2', 'cx'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      const ys = ['y', 'y1', 'y2', 'cy'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      if (xs.some(v => v < 0 || v > 360) || ys.some(v => v < 0 || v > plan.h)) out.push(dk);
    }
    const dup = keys.filter((x, j) => keys.indexOf(x) !== j);
    check(!noKey.length, `${k} step ${i + 1}: every shape has a data-k`, noKey.slice(0, 3).join('; '));
    check(!dup.length, `${k} step ${i + 1}: data-k values unique`, [...new Set(dup)].join(', '));
    check(!tf.length, `${k} step ${i + 1}: no shape carries its own transform`, tf.join(', '));
    check(!styleOp.length, `${k} step ${i + 1}: opacity set as an attribute, not a style`, styleOp.join(', '));
    check(!out.length, `${k} step ${i + 1}: every shape inside the ${360}x${plan.h} panel`, out.join(', '));
  });
}

// 4. source rules (drawn text only; the figcaption may name a held item to say it is left out)
const drawn = k => (DIA[k] || '').replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
check(!/C-?1[56]\b|\bCl\b/.test(drawn('fig-steroid')), 'fig-steroid: the chlorine C-15/C-16 exercise is not drawn');
check(/1–21|C27/.test(DIA['fig-steroid']) && !/C2[2-7]\b/.test(drawn('fig-steroid')), 'fig-steroid: numbering drawn 1-21 only');
for (const s of ['C1–C2 double bond', '6α-X', '9α-X', '11β-OH']) check(drawn('fig-steroid').includes(s), 'fig-steroid: SAR feature as slide 20 prints it: ' + s);
for (const s of ['Arg611', 'Gln570', 'Asn564', 'Thr739', 'Gln642']) check(drawn('fig-steroid').includes(s), 'fig-steroid: receptor residue as slide 23 prints it: ' + s);
check((drawn('fig-steroid').match(/class="f2-hb"/g) || []).length === 6, 'fig-steroid: six hydrogen bonds drawn');
check(!/MHC I(?!I)|MHC ?1\b/.test(drawn('fig-cni-nfat')), 'fig-cni-nfat: signal 1 drawn as MHC II only');
check(/dephosph|removes the phosphate/.test(drawn('fig-cni-nfat')) && !/calcineurin phosphorylates/i.test(drawn('fig-cni-nfat')), 'fig-cni-nfat: calcineurin removes the phosphate (slip resolved)');
check(!/psoriasis/i.test(drawn('fig-il-axis')), 'fig-il-axis: dupilumab in psoriasis is not drawn');
check(!/p35|IL-12 *& *IL-13/i.test(drawn('fig-il-axis')), 'fig-il-axis: no untaught subunit name, no held IL-12 & IL-13 label');
for (const d of ['dupilumab', 'ustekinumab', 'guselkumab', 'tildrakizumab', 'risankizumab', 'secukinumab', 'ixekizumab', 'brodalumab'])
  check(drawn('fig-il-axis').includes(d), 'fig-il-axis: ' + d + ' drawn');
check(!/\b(280|315)\b/.test(drawn('fig-spf')), 'fig-spf: only Dr. Smith\'s band limits');
for (const s of ['93%', '97%', '98%', '370', 'UVB']) check(drawn('fig-spf').includes(s), 'fig-spf: her number or term ' + s);
{
  const b = drawn('fig-block-vs-screen');
  const lineAfter = who => { const i = b.indexOf(who); return i < 0 ? '' : b.slice(i, b.indexOf('</text>', b.indexOf('</text>', i) + 7)); };
  const sm = lineAfter('Dr. Smith (Sun 8):'), sk = lineAfter('Dr. Sikazwe (DPAW 62–64):');
  check(/UVB 290–320 nm, UVA 320–400 nm/.test(sm) && !/280|315/.test(sm), 'fig-block-vs-screen: Dr. Smith\'s line has her limits only');
  check(/UVB 280–315 nm, UVA 315–400 nm/.test(sk) && !/290|320/.test(sk), 'fig-block-vs-screen: Dr. Sikazwe\'s line has his printed limits only');
  check(/315 or 320/.test(DIA['fig-block-vs-screen']) && /OPEN_QUESTIONS/.test(DIA['fig-block-vs-screen']), 'fig-block-vs-screen: his "315 or 320" is named as held');
}

// 5. Guide places and walkthrough references
const guide = rd('guide.js');
for (const [k, plan] of Object.entries(PLAN)) {
  const re = new RegExp('<div class="f2fig" id="' + k + '">\\s*<!--DIA:' + k + '-->\\s*</div>', 'g');
  const hits = guide.match(re) || [];
  check(hits.length === 1, 'Guide places ' + k + ' once in its anchor', hits.length);
  check((guide.match(new RegExp('<!--DIA:' + k + '-->', 'g')) || []).length === 1, 'Guide embeds ' + k + ' only once');
  const at = guide.search(new RegExp('<div class="f2fig" id="' + k + '">'));
  const sec = guide.lastIndexOf('<section class="gobj" id="', at);
  const id = sec >= 0 ? guide.slice(sec + 26, guide.indexOf('"', sec + 26)) : '';
  check(id === plan.guide, 'Guide puts ' + k + ' in section ' + plan.guide, id);
}
let walkRefs = 0;
for (const f of ['walk_pp.js', 'walk_pc.js', 'walk_sun.js', 'walk_mc.js'].filter(f => fs.existsSync(path.join(H, f)))) {
  const src = rd(f);
  for (const m of src.matchAll(/fig\s*:\s*\{\s*id\s*:\s*'(fig-[a-z-]+)'\s*,\s*step\s*:\s*(\d+)/g)) {
    if (!PLAN[m[1]]) continue;
    walkRefs++;
    check(+m[2] >= 1 && +m[2] <= PLAN[m[1]].steps, `${f}: ${m[1]} step ${m[2]} exists`);
  }
}

console.log((fails ? 'FAIL' : 'PASS') + ': figs2_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  Object.keys(PLAN).length + ' figures, ' + Object.values(PLAN).reduce((a, p) => a + p.steps, 0) + ' steps; ' +
  walkRefs + ' walkthrough references)');
process.exit(fails ? 1 : 0);
