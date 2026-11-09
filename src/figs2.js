/* ==========================================================================
   FIGURES 2: drawn step-throughs for the visuals evaluation, items 3-7
   ==========================================================================
   Loaded after diagrams.js and reactions.js. Uses `stepper` from diagrams.js
   and adds five figures to DIA, their names to DIA_NAMES and their groups to
   DIAGRAMS, the way reactions.js does, so each appears on the Diagrams tab and
   can be placed in a reading tab with <!--DIA:key--> or named by a walkthrough
   part as {id, step}.

     fig-steroid         Dr. Sikazwe, DPAW slides 20, 21, 23 (11/03)
     fig-il-axis         Dr. Smith, Skin-PCol slides 64-69 (11/03)
     fig-cni-nfat        Dr. Smith, Skin-PCol slides 24-26 (10/30); Dr. Sikazwe, DPAW 28, 33
     fig-spf             Dr. Smith, DEENT_Sun_Exposure_2026.pdf slides 8, 12-15 and recording
     fig-block-vs-screen both: Sun 8, 20, 22 (Dr. Smith); DPAW 61-64 (Dr. Sikazwe)

   Every label and number is taken from the slide or the recording named in the
   figure's caption. Each professor's UV band limits stay in that professor's own
   line. Held items in reviews/OPEN_QUESTIONS.md are not drawn as settled: the
   chlorine C-15/C-16 exercise, MHC class in the 11/03 figure, dupilumab in
   psoriasis, the UVB upper limit he gave as "315 or 320".

   STEPPERS.md rules: the same thing carries the same data-k in every step it is
   in; data-k values are unique inside a step; opacity is set as an attribute;
   no shape carries its own transform. Colours are course CSS variables or
   currentColor, and every coloured mark also has a text label.
   Check: node figs2_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const FIGS2 = (() => {
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  /* text: x, y, words, key, class, anchor */
  const T = (x, y, s, k, c = 'lbl sm', a = 'middle') =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}">${esc(s)}</text>`;
  const L = (p, q, k, c = 'f2-b') =>
    `<line class="${c}" data-k="${k}" x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(q[0])}" y2="${r1(q[1])}"/>`;
  const P = (d, k, c = 'arrow') => `<path class="${c}" data-k="${k}" d="${d}"/>`;
  const R = (x, y, w, h, k, c = 'box', rx = 5) =>
    `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"/>`;
  const C = (x, y, r, k, c = 'f2-cy') => `<circle class="${c}" data-k="${k}" cx="${r1(x)}" cy="${r1(y)}" r="${r}"/>`;
  const lines = (x, y, arr, k, c = 'lbl xs', a = 'start', dy = 10) =>
    arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a)).join('');

  /* ---------------------------------------------------------------------
     fig-steroid: steroid skeleton, faces, numbering, SAR, receptor H-bonds
     DPAW slide 20 (structure, stereochemistry, numbering, SAR), slide 21
     (skeleton to number), slide 23 (printed 22: the six H-bonds); 11/03
     T 984-1139. Drawn skeleton: rings as regular hexagons and a regular
     pentagon at one bond length, bonds in currentColor and O in --at-o,
     as gen_atlas.py draws structures.
     --------------------------------------------------------------------- */
  const STEROID = (() => {
    const b = 30, w = b * Math.cos(Math.PI / 6);
    const x0 = 150, y0 = 205;
    const cA = [x0, y0], cB = [x0 + 2 * w, y0], cC = [x0 + 3 * w, y0 - 1.5 * b];
    const hex = c => ({top: [c[0], c[1] - b], ur: [c[0] + w, c[1] - b / 2], lr: [c[0] + w, c[1] + b / 2],
      bot: [c[0], c[1] + b], ll: [c[0] - w, c[1] + b / 2], ul: [c[0] - w, c[1] - b / 2]});
    const A = hex(cA), B = hex(cB), Cc = hex(cC);
    const at = {1: A.top, 2: A.ul, 3: A.ll, 4: A.bot, 5: A.lr, 10: A.ur, 6: B.bot, 7: B.lr, 8: B.ur, 9: B.top,
      11: Cc.ul, 12: Cc.top, 13: Cc.ur, 14: Cc.lr};
    const ap = b / (2 * Math.tan(Math.PI / 5)), Rp = b / (2 * Math.sin(Math.PI / 5));
    const cD = [at[13][0] + ap, (at[13][1] + at[14][1]) / 2];
    const pent = deg => [cD[0] + Rp * Math.cos(deg * Math.PI / 180), cD[1] - Rp * Math.sin(deg * Math.PI / 180)];
    at[17] = pent(72); at[16] = pent(0); at[15] = pent(-72);
    at[18] = [at[13][0], at[13][1] - b];                    // methyl on C13
    at[19] = [at[10][0], at[10][1] - b];                    // methyl on C10
    at[20] = [at[17][0], at[17][1] - b];                    // side chain on C17
    at[21] = [at[20][0] - w, at[20][1] - b / 2];
    const centre = {1: cA, 2: cA, 3: cA, 4: cA, 5: cA, 10: cA, 6: cB, 7: cB, 8: cB, 9: cB,
      11: cC, 12: cC, 13: cC, 14: cC, 15: cD, 16: cD, 17: cD};
    const ring = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 10], [10, 1], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
      [9, 11], [11, 12], [12, 13], [13, 14], [14, 8], [13, 17], [17, 16], [16, 15], [15, 14]];
    const skel = ring.map(([p, q]) => L(at[p], at[q], 'bd' + p + '-' + q)).join('');
    const letters = [['A', cA, 0], ['B', cB, 9], ['C', cC, 0], ['D', cD, 0]].map(([s, c, d]) => T(c[0], c[1] + 4 + d, s, 'rg' + s, 'f2-ring')).join('');
    /* a wedge (beta, toward the viewer) and a hashed bond (alpha, away from the viewer) */
    const wedge = (p, q, k) => {
      const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy), ux = -dy / n * 3.2, uy = dx / n * 3.2;
      return `<polygon class="f2-wedge" data-k="${k}" points="${r1(p[0])},${r1(p[1])} ${r1(q[0] + ux)},${r1(q[1] + uy)} ${r1(q[0] - ux)},${r1(q[1] - uy)}"/>`;
    };
    const hash = (p, q, k) => {
      const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy), nx = -dy / n, ny = dx / n;
      let d = '';
      for (let i = 1; i <= 6; i++) {
        const f = i / 6, cx = p[0] + dx * f, cy = p[1] + dy * f, h = 0.6 + 2.8 * f;
        d += `M${r1(cx + nx * h)} ${r1(cy + ny * h)}L${r1(cx - nx * h)} ${r1(cy - ny * h)}`;
      }
      return `<path class="f2-hash" data-k="${k}" d="${d}"/>`;
    };
    /* numbers sit inside the ring an atom belongs to, a little toward its centre */
    const nudge = {9: [8, -19], 10: [-1, 5], 5: [-1, -3], 8: [-3, -1], 13: [-2, 3], 14: [-1, -2], 17: [-4, 4]};
    const numAt = n => {
      if (centre[n]) {
        const c = centre[n], p = at[n], d = nudge[n] || [0, 0];
        return [p[0] + (c[0] - p[0]) * 0.36 + d[0], p[1] + (c[1] - p[1]) * 0.36 + 3.5 + d[1]];
      }
      return {18: [at[18][0] - 9, at[18][1] + 4], 19: [at[19][0] - 9, at[19][1] + 6],
        20: [at[20][0] + 9, at[20][1] + 7], 21: [at[21][0] - 4, at[21][1] - 5]}[n];
    };
    const num = n => { const p = numAt(n); return T(p[0], p[1], String(n), 'n' + n, 'f2-num'); };
    const nums = list => list.map(num).join('');

    const side = L(at[17], at[20], 'bd17-20') + L(at[20], at[21], 'bd20-21');
    const me18 = L(at[13], at[18], 'bd13-18');
    const me19 = wedge(at[10], at[19], 'w19');                      // C19: a beta (wedge) methyl
    const h9 = (end) => hash(at[9], end, 'h9');
    const h9end = [at[9][0], at[9][1] + b * 0.6];

    // left column: one short list per step
    const col = (arr, k, c = 'lbl xs') => lines(8, 34, arr, k, c, 'start', 11);

    const s1 = skel + letters +
      col(['Four rings fused together:', 'A, B, C six-membered,', 'D five-membered', '(tetracyclic)'], 'c1');

    const legend = `<path class="f2-hash" data-k="lgh" d="M14 102L14 104M18 101L18 105M22 100L22 106M26 99L26 107"/>` +
      `<polygon class="f2-wedge" data-k="lgw" points="12,124 28,120 28,128"/>` +
      T(34, 105, 'hashed: points away from you', 'lgt1', 'lbl xs', 'start') + T(34, 115, '= α (alpha) face', 'lgt2', 'lbl sm', 'start') +
      T(34, 127, 'wedge: points toward you', 'lgt3', 'lbl xs', 'start') + T(34, 137, '= β (beta) face', 'lgt4', 'lbl sm', 'start');
    const s2 = skel + letters + me19 + h9(h9end) + legend +
      T(at[19][0] + 6, at[19][1] + 2, 'β', 'fb', 'f2-face', 'start') + T(h9end[0] + 7, h9end[1] - 2, 'α', 'fa', 'f2-face', 'start') +
      col(['Each atom can carry a group', 'on one face or the other:'], 'c2');

    const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const s3 = skel + letters + me19 + me18 + side + h9(h9end) + legend + nums(all) +
      col(['C1–C10: around rings A and B', 'C11–C17: through rings C and D', 'C18 on C13, C19 on C10',
        'C20, C21: side chain on C17', 'A number gives the position;', 'α or β is separate from it'], 'c3');

    /* SAR (slide 20): C1=C2 double bond, 6α-X, 9α-X, 11β-OH */
    const inner = (p, q, c, k) => {
      const m = t => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
      const s = m(0.18), e = m(0.82), f = 0.2;
      return L([s[0] + (c[0] - s[0]) * f, s[1] + (c[1] - s[1]) * f], [e[0] + (c[0] - e[0]) * f, e[1] + (c[1] - e[1]) * f], k, 'f2-b f2-db');
    };
    const h6end = [at[6][0], at[6][1] + b * 0.8];
    const o11 = [at[11][0], at[11][1] - b];
    const sarMarks = inner(at[1], at[2], cA, 'db12') +
      hash(at[6], h6end, 'h6') + T(h6end[0], h6end[1] + 11, 'X', 'x6', 'f2-x') +
      T(h9end[0] + 6, h9end[1] + 3, 'X', 'x9', 'f2-x', 'start') +
      wedge(at[11], o11, 'w11') + T(o11[0], o11[1] - 4, 'OH', 'oh11', 'f2-o');
    const tags = T(at[1][0] - 22, at[1][1] - 6, '①', 'q1', 'f2-tag') + T(h6end[0] + 14, h6end[1] + 8, '②', 'q2', 'f2-tag') +
      T(h9end[0] - 12, h9end[1] + 5, '③', 'q3', 'f2-tag') + T(o11[0] - 16, o11[1] - 4, '④', 'q4', 'f2-tag');
    const s4 = skel + letters + me19 + h9(h9end) + sarMarks + tags + nums([1, 2, 6, 9, 11]) +
      col(['Anti-inflammatory activity', 'is increased by:'], 'c4a', 'lbl sm') +
      lines(8, 62, ['① C1–C2 double bond', '② 6α-X', '③ 9α-X', '④ 11β-OH', '', 'X = a halogen'], 'c4b', 'lbl sm', 'start', 12);

    /* receptor contacts (slide 23, printed 22; the ligand as that slide draws it:
       3-keto with the C4=C5 double bond, 11β-OH, 17α-OH, C20=O, C21-OH) */
    const o3 = [at[3][0] - w, at[3][1] + b / 2];
    const o20 = [at[20][0] + w, at[20][1] - b / 2];
    const o21 = [at[21][0], at[21][1] - b];
    const o17 = [at[17][0] + b * 0.92, at[17][1] + 4];
    const dbl = (p, q, k) => {                                   // C=O drawn as two lines
      const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy), ox = -dy / n * 2.2, oy = dx / n * 2.2;
      return L([p[0] + ox, p[1] + oy], [q[0] + ox, q[1] + oy], k + 'a') + L([p[0] - ox, p[1] - oy], [q[0] - ox, q[1] - oy], k + 'b');
    };
    const shorten = (p, q, s) => { const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy); return [q[0] - dx / n * s, q[1] - dy / n * s]; };
    const lig = inner(at[4], at[5], cA, 'db45') + dbl(at[3], shorten(at[3], o3, 5), 'co3') + T(o3[0] - 3, o3[1] + 4, 'O', 'o3', 'f2-o') +
      wedge(at[11], o11, 'w11') + T(o11[0], o11[1] - 4, 'OH', 'oh11', 'f2-o') +
      dbl(at[20], shorten(at[20], o20, 5), 'co20') + T(o20[0] + 3, o20[1] - 1, 'O', 'o20', 'f2-o') +
      L(at[21], shorten(at[21], o21, 6), 'bd21-o') + T(o21[0], o21[1] - 2, 'OH', 'oh21', 'f2-o') +
      hash(at[17], shorten(at[17], o17, 7), 'h17') + T(o17[0] + 5, o17[1] + 4, 'OH', 'oh17', 'f2-o');
    const res = (x, y, s, k, a = 'middle') => T(x, y, s, k, 'f2-res', a);
    const hb = (p, q, k, n, nx = 0, ny = 0) => L(p, q, k, 'f2-hb') +
      T((p[0] + q[0]) / 2 + nx, (p[1] + q[1]) / 2 + ny, String(n), k + 'n', 'f2-hbn');
    const asn = [228, 40];
    const contacts = res(38, 222, 'Arg611', 'rArg') + hb([o3[0] - 8, o3[1] - 3], [60, 219], 'hb1', 1, 0, -4) +
      res(60, 272, 'Gln570', 'rGln570') + hb([o3[0] - 4, o3[1] + 7], [64, 262], 'hb2', 2, -6, 2) +
      res(asn[0], asn[1], 'Asn564', 'rAsn') + hb([o11[0] + 2, o11[1] - 15], [asn[0] - 8, asn[1] + 4], 'hb3', 3, -6, 0) +
      hb([o21[0] - 6, o21[1] - 12], [asn[0] + 10, asn[1] + 4], 'hb4', 4, 6, 0) +
      res(338, 52, 'Thr739', 'rThr') + hb([o20[0] + 8, o20[1] - 8], [330, 56], 'hb5', 5, 4, 6) +
      res(334, 178, 'Gln642', 'rGln642') + hb([o17[0] + 10, o17[1] + 6], [330, 168], 'hb6', 6, 6, 0);
    const s5 = skel + letters + me19 + me18 + side + lig + contacts + nums([3, 11, 17, 20, 21]) +
      lines(8, 34, ['Six hydrogen bonds hold it', 'in the glucocorticoid receptor:', 'C3=O (two), 11β-OH, 17α-OH,', 'C20=O, C21-OH'], 'c5', 'lbl xs', 'start', 11);

    const s6 = skel + letters + me19 + me18 + side + nums([1, 11, 17]) +
      col(['Practice: number the rest', 'from the three starting points', 'C1, C11 and C17'], 'c6');

    return stepper('fig-steroid', 'Glucocorticoids: steroid skeleton', [
      ['Structure: four fused rings, A, B and C six-membered and D five-membered; this skeleton marks a steroid (slide 20; T 990–996).', s1],
      ['Stereochemistry: a hashed bond points away from you (α face), a wedge points toward you (β face) (slide 20; T 997–1001).', s2],
      ['Numbering: C1 to C10 around A and B, C11 to C17 through C and D, C18 and C19 the methyls, C20 and C21 the side chain (slides 20–21; T 1002–1017, 1084–1093).', s3],
      ['SAR: anti-inflammatory activity is increased by a C1–C2 double bond, 6α-X, 9α-X and 11β-OH (slide 20; T 1019–1072).', s4],
      ['In the glucocorticoid receptor: six hydrogen bonds to the residues printed on slide 23 (T 1126–1139).', s5],
      ['If you know where C1, C11 and C17 are, you can number the rest (T 1097–1099).', s6, 'self-test'],
    ], 320, 'Drawn after DPAW (f26-DEENT-DPAW-mc.pdf) slides 20, 21 and 23 (printed 20, 21, 22); Dr. Sikazwe, lecture 11/03, T 984–1139. ' +
      'Numbering 1–21 as slides 20 and 23 use it (slide 20 numbers a longer side chain on to C27). ' +
      'Left out: the chlorine-numbering exercise on slide 21 (T 1074–1084), held in reviews/OPEN_QUESTIONS.md.');
  })();

  /* ---------------------------------------------------------------------
     fig-il-axis: where each biologic binds (Skin-PCol slides 64-69; 11/03
     T 365-486). An antibody is drawn as a Y with its two arms on the target.
     --------------------------------------------------------------------- */
  const IL_AXIS = (() => {
    const Ydown = (x, y, k) =>                   // arms reach down to a target at y
      `<path class="f2-ab" data-k="${k}" d="M${x} ${y - 15}L${x} ${y - 7}M${x} ${y - 7}L${x - 5} ${y}M${x} ${y - 7}L${x + 5} ${y}"/>`;
    const Yup = (x, y, k) =>                     // arms reach up to a target at y
      `<path class="f2-ab" data-k="${k}" d="M${x} ${y + 15}L${x} ${y + 7}M${x} ${y + 7}L${x - 5} ${y}M${x} ${y + 7}L${x + 5} ${y}"/>`;
    const Yleft = (x, y, k) =>                   // arms reach left to a target at x
      `<path class="f2-ab" data-k="${k}" d="M${x + 15} ${y}L${x + 7} ${y}M${x + 7} ${y}L${x} ${y - 5}M${x + 7} ${y}L${x} ${y + 5}"/>`;
    const ch = (x, y, h, k) => R(x, y, 13, h, k, 'f2-ch', 4);
    const lead = (d, k) => `<path class="f2-lead" data-k="${k}" d="${d}"/>`;

    /* row 1: IL-4 and IL-13 receptor complexes, IL-4Rα shared (slide 64) */
    const row1 = T(8, 24, 'IL-4 and IL-13 receptors', 'h1', 'f2-key', 'start') +
      L([10, 92], [190, 92], 'mem1', 'f2-mem') +
      ch(44, 64, 40, 'r1a') + ch(59, 68, 36, 'r1b') + ch(124, 64, 40, 'r2a') + ch(139, 68, 36, 'r2b') +
      T(50, 116, 'IL-4Rα', 'r1al', 'f2-res') + T(130, 116, 'IL-4Rα', 'r2al', 'f2-res') +
      T(58, 127, 'type I', 'r1t', 'lbl xs') + T(138, 127, 'type II', 'r2t', 'lbl xs') +
      C(72, 40, 8, 'il4a') + T(72, 43, 'IL-4', 'il4at', 'f2-cyt') +
      C(140, 40, 8, 'il4b') + T(140, 43, 'IL-4', 'il4bt', 'f2-cyt') + C(163, 40, 9, 'il13') + T(163, 43, 'IL-13', 'il13t', 'f2-cyt');
    const dup = Ydown(50, 64, 'ab1') + Ydown(130, 64, 'ab2') +
      lines(200, 42, ['dupilumab (human IgG4) binds', 'IL-4Rα, the subunit shared', 'by both receptor complexes:', 'IL-4 signaling (type I) and', 'IL-4 and IL-13 signaling', '(type II) are blocked'], 'dupt', 'lbl xs', 'start', 10) +
      lead('M198 52 L136 52', 'dupl');
    const s1 = row1 + dup;

    /* row 2: IL-12 and IL-23 share p40; p19 is on IL-23 only (slides 67-69) */
    const sub = (x, y, s, k) => C(x, y, 10, k) + (s ? T(x, y + 3, s, k + 't', 'f2-cyt') : '');
    const row2 = T(8, 152, 'IL-12 and IL-23', 'h2', 'f2-key', 'start') +
      T(52, 168, 'IL-12', 'il12t', 'lbl sm') + sub(42, 184, 'p40', 'p40a') + sub(62, 184, '', 'sub12') +
      T(128, 168, 'IL-23', 'il23t', 'lbl sm') + sub(118, 184, 'p40', 'p40b') + sub(138, 184, 'p19', 'p19');
    const ust = Yup(42, 194, 'ab3') + Yup(118, 194, 'ab4') +
      lines(178, 172, ['ustekinumab (human) binds p40:', 'IL-12 and IL-23 both blocked'], 'ustt', 'lbl xs', 'start', 10) +
      lead('M176 175 L124 200', 'ustl');
    const p19 = Yleft(148, 184, 'ab5') +
      lines(178, 196, ['guselkumab (human), tildrakizumab', 'and risankizumab (humanized)', 'bind p19: IL-23 only'], 'p19t', 'lbl xs', 'start', 10) +
      lead('M176 199 L164 186', 'p19l');
    const tcell = P('M62 194 L62 224', 'a12') + P('M138 194 L138 224', 'a23') +
      R(20, 226, 170, 30, 'tc', 'box', 7) +
      T(105, 238, 'IL-12 receptor β1 on CD4 T cells, NK cells:', 'tct0', 'lbl xs') +
      T(105, 250, 'formation of Th1 and Th17 cells', 'tct1', 'lbl sm');
    const s2 = s1 + row2 + ust;
    const s3 = s2 + p19;
    const s4 = s3 + tcell;

    /* row 3: IL-17A and IL-17RA on the keratinocyte (slides 65-66) */
    const row3 = T(8, 280, 'IL-17A on the keratinocyte', 'h3', 'f2-key', 'start') +
      T(106, 294, 'IL-17A', 'il17l', 'lbl xs') + C(106, 307, 9, 'il17') + T(106, 310, '17A', 'il17t', 'f2-cyt') +
      ch(100, 318, 26, 'rA') + T(94, 332, 'IL-17RA', 'rAt', 'f2-res', 'end') +
      R(10, 344, 190, 22, 'kc', 'box', 6) + T(105, 359, 'keratinocyte', 'kct', 'lbl sm') +
      Yleft(115, 307, 'ab6') + Yleft(113, 331, 'ab7') +
      lines(134, 296, ['secukinumab (human),', 'ixekizumab (humanized):', 'bind the cytokine IL-17A'], 'skt', 'lbl xs', 'start', 10) +
      lines(134, 326, ['brodalumab (human):', 'binds the receptor IL-17RA'], 'brt', 'lbl xs', 'start', 10) +
      lines(246, 290, ['keratinocytes: the', 'major IL-17 target;', 'more inflammatory', 'cytokines, epidermal', 'hyperproliferation,', 'barrier dysfunction'], 'eff', 'lbl xs', 'start', 10);
    const s5 = s4 + row3;

    return stepper('fig-il-axis', 'Cytokine biologics: what each one binds', [
      ['Dupilumab binds IL-4Rα, shared by the IL-4 and IL-13 receptor complexes, so IL-4 and IL-13 signaling stop (PCol 64; T 365–374).', s1],
      ['IL-12 and IL-23 both carry the p40 subunit; ustekinumab binds p40 and blocks both (PCol 67; T 443–448).', s2],
      ['Guselkumab, tildrakizumab and risankizumab bind p19, which only IL-23 carries (PCol 68–69; T 469–482).', s3],
      ['IL-12 and IL-23 bind IL-12 receptor β1 on CD4 T cells and NK cells; blocking them suppresses Th1 and Th17 cell formation (PCol 67; T 448–451, 478–480).', s4],
      ['Keratinocytes are the major IL-17 target. Secukinumab and ixekizumab bind the cytokine IL-17A; brodalumab binds its receptor, IL-17RA (PCol 65–66; T 399–428).', s5],
    ], 424, 'Drawn after Skin-PCol-Students-2026.pdf slides 64–69; Dr. Smith, lecture 11/03, T 365–486. The second chain of each IL-4 receptor complex and the second ' +
      'subunit of IL-12 are left unnamed, as the slides do not name them. Not drawn: dupilumab in psoriasis (held in reviews/OPEN_QUESTIONS.md; slide 64 gives AD only).');
  })();

  /* ---------------------------------------------------------------------
     fig-cni-nfat: signals 1-3, calcineurin, NFAT and IL-2, and the two
     immunophilins (Skin-PCol slides 24-26, 10/30 T 211-357; DPAW 28, 33)
     --------------------------------------------------------------------- */
  const CNI = (() => {
    const apc = R(14, 18, 182, 28, 'apc', 'box', 6) + T(22, 36, 'APC', 'apct', 'lbl sm', 'start');
    const tc = R(10, 70, 340, 262, 'tc', 'f2-cell', 18) + T(18, 324, 'CD4+ T cell', 'tct', 'lbl sm', 'start');
    const sig1 = R(48, 46, 34, 11, 'mhc', 'f2-ch', 2) + T(65, 54.5, 'MHC II', 'mhct', 'f2-in') +
      C(65, 58, 2.5, 'ag', 'f2-dot') + T(44, 61, 'antigen', 'agt', 'lbl xs', 'end') +
      R(48, 59, 34, 11, 'tcr', 'f2-ch', 2) + T(65, 67.5, 'TCR', 'tcrt', 'f2-in') + T(65, 83, 'signal 1', 's1t', 'f2-sig');
    const sig2 = R(112, 46, 40, 11, 'cd80', 'f2-ch', 2) + T(132, 54.5, 'CD80/86', 'cd80t', 'f2-in') +
      R(112, 59, 40, 11, 'cd28', 'f2-ch', 2) + T(132, 67.5, 'CD28', 'cd28t', 'f2-in') + T(132, 83, 'signal 2', 's2t', 'f2-sig') + T(154, 83, '(confirmatory)', 's2c', 'f2-sig', 'start') +
      P('M110 88 C 100 96, 84 100, 74 106', 'casc') + T(112, 100, 'signal cascade', 'casct', 'lbl xs', 'start');
    const cn = state => R(22, 110, 96, 22, 'cn', 'f2-enz', 6) + T(70, 124, 'calcineurin ' + state, 'cnt', 'lbl xs');
    const camod = C(32, 148, 8, 'ca', 'f2-dot2') + T(32, 150.5, 'Ca²⁺', 'cat', 'f2-in') +
      R(44, 141, 56, 14, 'cam', 'f2-ch', 4) + T(72, 150.5, 'calmodulin', 'camt', 'f2-in') + P('M72 140 L72 135', 'caa');
    const nfat = R(18, 190, 64, 20, 'nfp', 'f2-tf', 5) + T(50, 203, 'NFAT–P', 'nfpt', 'lbl xs') + T(50, 222, 'inactive', 'nfpl', 'lbl xs') +
      P('M84 200 L148 200', 'dep') + T(116, 216, 'removes the phosphate', 'dept', 'lbl xs') +
      P('M112 133 C 126 150, 126 170, 117 196', 'cn2') +
      R(150, 190, 56, 20, 'nfa', 'f2-tf', 5) + T(178, 203, 'NFAT', 'nfat', 'lbl xs') + T(178, 222, 'active', 'nfal', 'lbl xs');
    const nuc = R(120, 234, 222, 80, 'nuc', 'f2-nuc', 10) + T(128, 247, 'nucleus', 'nuct', 'lbl xs', 'start') +
      P('M178 226 L178 258', 'in') + R(148, 260, 62, 18, 'gene', 'box', 3) + T(179, 272, 'IL-2 gene', 'genet', 'lbl xs') +
      P('M212 269 L244 269', 'tx') + T(278, 272, 'IL-2 mRNA', 'mrna', 'lbl xs');
    const il2 = P('M304 260 C 334 244, 338 150, 333 82', 'exit') +
      R(318, 62, 24, 13, 'cd25', 'f2-ch', 3) + T(330, 71.5, 'CD25', 'cd25t', 'f2-in') +
      C(330, 50, 7, 'il2', 'f2-cy') + T(330, 36, 'IL-2', 'il2t', 'lbl xs') +
      lines(206, 26, ['signal 3: IL-2 binds', 'CD25 (IL-2 receptor):', 'T-cell proliferation'], 's3t', 'f2-sig', 'start', 10);
    const drugs = R(150, 106, 150, 16, 'cs', 'f2-drug', 5) + T(225, 117, 'cyclosporine + cyclophilin', 'cst', 'lbl xs') +
      R(150, 126, 150, 16, 'tac', 'f2-drug', 5) + T(225, 137, 'tacrolimus + FKBP', 'tact', 'lbl xs') +
      P('M148 114 L121 119', 'csa') + P('M148 134 L121 127', 'taca') +
      T(150, 155, 'each complex binds calcineurin', 'cxt', 'lbl xs', 'start') +
      T(150, 167, 'pimecrolimus: “similar in … mechanism”', 'pim1', 'lbl xs', 'start') +
      T(150, 177, 'to tacrolimus (DPAW 28)', 'pim2', 'lbl xs', 'start');
    const stop = `<path class="f2-blk" data-k="x1" d="M109 193L123 207M123 193L109 207"/>` +
      lines(18, 252, ['NFAT stays', 'phosphorylated:', 'less IL-2 made,', 'less T-cell', 'proliferation'], 'nost', 'f2-warn', 'start', 11);

    const s1 = apc + tc + sig1;
    const s2 = s1 + sig2;
    const s3 = s2 + cn('(active)') + camod;
    const s4 = s3 + nfat + nuc;
    const s5 = s4 + il2;
    const s6 = s2 + cn('(inactive)') + camod + nfat + nuc + il2 + drugs + stop;

    return stepper('fig-cni-nfat', 'Calcineurin inhibitors: where they act', [
      ['Signal 1: the APC’s MHC II, holding an antigen, binds the T-cell receptor (PCol 25; 10/30 T 220–233).', s1],
      ['Signal 2, the confirmatory signal: CD80/86 on the APC binds CD28 on the T cell; a signal cascade follows (PCol 25; T 233–247).', s2],
      ['In that cascade, calcium and calmodulin activate calcineurin (PCol 26; T 318–321).', s3],
      ['Calcineurin removes the phosphate from NFAT; active NFAT enters the nucleus and the IL-2 gene is expressed (PCol 26; T 321–330).', s4],
      ['Signal 3: IL-2 leaves the cell and binds CD25 of the IL-2 receptor; the T cell proliferates (PCol 25; T 248–269).', s5],
      ['Cyclosporine binds cyclophilin, tacrolimus binds FKBP; each complex inactivates calcineurin: less IL-2, less T-cell proliferation (PCol 26; T 292–299, 331–355).', s6, 'drugs'],
    ], 392, 'Drawn after Skin-PCol-Students-2026.pdf slides 24–26 (slide 26: Golan Fig 44-5); Dr. Smith, lecture 10/30, T 211–357. ' +
      'Signal 1 is MHC II as slide 25 prints it and she said on 10/30 (T 222). Cyclosporine and tacrolimus are not given together: “It’d be too much” (T 356–357). ' +
      'Dr. Sikazwe: cyclosporine is “activated by complexation with cyclophilin” and “inhibits calcineurin phosphatase” (DPAW slide 33, printed 32); ' +
      'pimecrolimus and tacrolimus are “similar in lipophilicity, structure, mechanism” (DPAW slide 28, printed 27).');
  })();

  /* ---------------------------------------------------------------------
     fig-spf: MED, SPF, UVB blocked by SPF, critical wavelength (Dr. Smith,
     DEENT_Sun_Exposure_2026.pdf slides 8, 12-15; recording 00:09:35-00:15:14)
     --------------------------------------------------------------------- */
  const SPF = (() => {
    /* step 1: skin sites, each given a larger single dose; the first with
       clearly marginated (outlined) erythema marks 1 MED */
    const site = (i, red) => {
      const x = 14 + i * 38;
      return R(x, 40, 30, 22, 'site' + i, 'f2-skin', 4) +
        (red ? `<rect class="f2-red" data-k="er${i}" x="${x + 5}" y="45" width="20" height="12" rx="3" opacity="${red}"/>` +
          `<rect class="f2-outl" data-k="ol${i}" x="${x + 4}" y="44" width="22" height="14" rx="3"/>` : '');
    };
    const med = T(8, 26, 'MED', 'h1', 'f2-key', 'start') +
      site(0, 0) + site(1, 0) + site(2, 0) + site(3, 0.55) + site(4, 0.75) +
      P('M14 72 L196 72', 'dose') + T(105, 83, 'larger single UV dose →', 'doset', 'lbl xs') +
      T(143, 35, '1 MED', 'medt', 'f2-key') +
      lines(206, 38, ['the minimum single dose', 'of UV radiation that', 'produces clearly marginated', 'erythema in the irradiated', 'site (Sun 12)'], 'meddef', 'lbl xs', 'start', 9.5);
    /* step 2: the SPF ratio */
    const spf = T(8, 106, 'SPF', 'h2', 'f2-key', 'start') +
      T(8, 122, 'without sunscreen', 'nost', 'lbl xs', 'start') + R(96, 115, 40, 9, 'barno', 'f2-bar', 2) +
      T(140, 123, '1 MED', 'barnot', 'lbl xs', 'start') +
      T(8, 138, 'with sunscreen', 'withs', 'lbl xs', 'start') + R(96, 131, 160, 9, 'barwith', 'f2-bar', 2) +
      T(260, 139, '1 MED', 'barwitht', 'lbl xs', 'start') +
      T(96, 152, 'UV dose that gives 1 MED →', 'barax', 'lbl xs', 'start') +
      T(180, 168, 'SPF = MED with sunscreen ÷ MED without sunscreen', 'ratio', 'f2-key') +
      T(180, 180, 'a measure of UVB protection; says nothing about UVA (Sun 13)', 'uvbonly', 'lbl xs');
    /* step 3: UVB blocked (Sun 15) */
    const bx = 64, bw = 210;
    const bar = (i, s, pct) => {
      const y = 214 + i * 16;
      return T(bx - 6, y + 8.5, 'SPF ' + s, 'bl' + i, 'lbl sm', 'end') +
        R(bx, y, bw * pct / 100, 11, 'bb' + i, 'f2-bar', 2) + T(bx + bw * pct / 100 + 4, y + 9, 'about ' + pct + '%', 'bp' + i, 'lbl sm', 'start');
    };
    const blocked = T(8, 202, 'UVB blocked (Sun 15)', 'h3', 'f2-key', 'start') +
      bar(0, 15, 93) + bar(1, 30, 97) + bar(2, 50, 98) +
      L([bx, 210], [bx, 262], 'b0', 'f2-axis') + T(bx, 272, '0%', 'b0t', 'lbl xs') +
      L([bx + bw, 210], [bx + bw, 262], 'b100', 'f2-axis') + T(bx + bw, 272, '100% of incoming UVB', 'b100t', 'lbl xs');
    /* step 4: critical wavelength on her band limits (Sun 8: UVB 290-320, UVA 320-400 nm) */
    const nm = v => 34 + (v - 290) * 2.6;                 // 290 .. 400 nm -> x 34 .. 320
    const cw = T(8, 296, 'Broad spectrum (Sun 14)', 'h4', 'f2-key', 'start') +
      R(nm(290), 316, nm(320) - nm(290), 8, 'uvb', 'f2-band', 2) + T((nm(290) + nm(320)) / 2, 312, 'UVB', 'uvbt', 'lbl xs') +
      R(nm(320), 316, nm(400) - nm(320), 8, 'uva', 'f2-band2', 2) + T((nm(320) + nm(345)) / 2, 312, 'UVA', 'uvat', 'lbl xs') +
      [290, 320, 370, 400].map(v => T(nm(v), 335, String(v), 'tk' + v, 'lbl xs')).join('') + T(nm(345), 335, 'nm', 'tknm', 'lbl xs') +
      L([nm(370), 304], [nm(370), 328], 'cwl', 'f2-cw') + T(nm(370) - 4, 302, 'CW of 370 nm or more', 'cwt', 'f2-key', 'end') +
      lines(8, 350, ['Critical wavelength (CW): the wavelength by which 90% of the light the', 'product absorbs has been absorbed (recording 00:12:44; her example 380 nm).',
        'Broad spectrum with SPF 15 or more may claim it “decreases risk of skin', 'cancer and early aging caused by the sun” (Sun 14).'], 'cwd', 'lbl xs', 'start', 9.5);

    const s1 = med, s2 = med + spf, s3 = s2 + blocked, s4 = s3 + cw;
    return stepper('fig-spf', 'Sun protection: MED, SPF and broad spectrum', [
      ['MED: the smallest single UV dose that gives clearly marginated erythema in the irradiated site (Sun 12; recording 00:09:35–00:10:28).', s1],
      ['SPF: the dose that burns skin with the sunscreen over the dose that burns it without; a measure of UVB protection (Sun 13; 00:10:28–00:11:33).', s2],
      ['SPF 15 blocks about 93% of incoming UVB, SPF 30 about 97%, SPF 50 about 98% (Sun 15; recording 00:14:25–00:14:47).', s3],
      ['UVA protection is measured by the critical wavelength method; a CW of 370 nm or more may be labeled “broad spectrum” (Sun 14; 00:12:10–00:13:37).', s4],
    ], 430, 'Drawn after DEENT_Sun_Exposure_2026.pdf slides 8 and 12–15; Dr. Smith’s recorded sun-exposure lecture (recording 00:09:35–00:15:14). ' +
      'The skin sites in step 1 and the bar lengths in step 2 show the definitions, not measured values. The band limits are hers (Sun 8: UVB 290–320 nm, UVA 320–400 nm).');
  })();

  /* ---------------------------------------------------------------------
     fig-block-vs-screen: sunblocks reflect or scatter, sunscreens absorb and
     give off heat (Sun 8, 20, 22, Dr. Smith; DPAW 61-64, Dr. Sikazwe)
     --------------------------------------------------------------------- */
  const BLOCK = (() => {
    const head = T(8, 25, 'Dr. Smith (Sun 8):', 'h1', 'lbl xs', 'start') + T(128, 25, 'UVB 290–320 nm, UVA 320–400 nm', 'h1n', 'lbl sm', 'start') +
      T(8, 38, 'Dr. Sikazwe (DPAW 62–64):', 'h2', 'lbl xs', 'start') + T(128, 38, 'UVB 280–315 nm, UVA 315–400 nm', 'h2n', 'lbl sm', 'start');
    const divider = L([180, 48], [180, 336], 'div', 'f2-axis');
    const tL = T(92, 60, 'Sunblock (physical)', 'tL', 'lbl sm') + T(268, 60, 'Sunscreen (organic)', 'tR', 'lbl sm');
    const skin = R(10, 198, 164, 24, 'skL', 'f2-skin', 4) + T(92, 214, 'skin', 'skLt', 'lbl xs') +
      R(186, 198, 164, 24, 'skR', 'f2-skin', 4) + T(268, 214, 'skin', 'skRt', 'lbl xs');
    const uv = (x, k, end) => `<path class="f2-uv" data-k="${k}" d="M${x} 72 L${x} ${end}"/>`;
    const inL = end => uv(50, 'uL1', end) + uv(92, 'uL2', end) + uv(134, 'uL3', end) + T(92, 70, 'UV', 'uvL', 'lbl xs');
    const inR = end => uv(226, 'uR1', end) + uv(268, 'uR2', end) + uv(310, 'uR3', end) + T(268, 70, 'UV', 'uvR', 'lbl xs');
    const reachL = T(92, 130, 'UV reaches the skin', 'reachL', 'f2-key'), reachR = T(268, 130, 'UV reaches the skin', 'reachR', 'f2-key');
    const base = head + divider + tL + skin;
    const s1 = base + inL(194) + inR(194) + reachL + reachR;

    /* sunblock: zinc oxide / titanium dioxide particles; the light goes back out */
    const parts = [22, 40, 58, 76, 94, 112, 130, 148, 164].map((x, i) => C(x, 189 - (i % 2) * 4, 5.5, 'pt' + i, 'f2-part')).join('');
    const back = `<path class="f2-uv" data-k="bL1" d="M50 176 L28 112"/>` + `<path class="f2-uv" data-k="bL2" d="M92 176 L116 112"/>` +
      `<path class="f2-uv" data-k="bL3" d="M134 176 L162 124"/>`;
    const blockTxt = lines(12, 238, ['zinc oxide, titanium dioxide:', 'scatter or reflect visible, UV', 'and infrared radiation (Smith,', 'Sun 20); “reflect or scatter”', 'light, UVA/B (Sikazwe, DPAW 61)'], 'bt', 'lbl xs', 'start', 10) +
      lines(12, 292, ['Size (Sikazwe, DPAW 61; 11/04', 'T@38200–@38720): large particles', 'work better; nanosized ones are', 'clear and reflect less'], 'pz', 'lbl xs', 'start', 10);
    const left2 = parts + inL(176) + back + blockTxt;

    /* sunscreen: chromophores absorb the light and give it off as heat */
    const mol = (x, i, deg) => {
      const pts = [0, 60, 120, 180, 240, 300].map(a => `${r1(x + 7 * Math.cos(a * Math.PI / 180))},${r1(187 + 7 * Math.sin(a * Math.PI / 180))}`).join(' ');
      return deg && i % 2 ? `<polygon class="f2-mol f2-deg" data-k="m${i}" points="${pts}" opacity="0.45"/>`
        : `<polygon class="f2-mol" data-k="m${i}" points="${pts}"/>`;
    };
    const mols = deg => [196, 218, 240, 262, 284, 306, 328].map((x, i) => mol(x, i, deg)).join('');
    const heat = (x, k) => `<path class="f2-heat" data-k="${k}" d="M${x} 172 q 4 -5 0 -10 q -4 -5 0 -10 q 4 -5 0 -10 q -4 -5 0 -10"/>`;
    const heats = heat(247, 'hR1') + heat(289, 'hR2') + heat(331, 'hR3') + T(289, 124, 'heat', 'heatt', 'f2-warn');
    const screenTxt = lines(188, 238, ['organic compounds absorb UVB', 'and/or UVA and convert it to', 'heat energy (Smith, Sun 22);', 'chromophores absorb UVA/B and', 'convert it into “harmless heat”', '(Sikazwe, DPAW 62)'], 'st', 'lbl xs', 'start', 10);
    const degTxt = lines(188, 302, ['The same light degrades them', '(dashed): photodegradation;', 'avobenzone t½ about 2 h', '(Sikazwe, 11/04 T@39860–@40700)'], 'dg', 'f2-warn', 'start', 10);

    const s2 = base + left2 + inR(194) + reachR;
    const s3 = base + left2 + mols(false) + inR(176) + heats + screenTxt;
    const s4 = base + left2 + mols(true) + inR(176) + heats + screenTxt + degTxt;

    return stepper('fig-block-vs-screen', 'Sunblocks and sunscreens', [
      ['Without a product, UVA and UVB reach the skin; each professor’s band limits are on their own line (Sun 8; DPAW 62–64).', s1],
      ['Sunblock: inorganic particles (zinc oxide, titanium dioxide) scatter or reflect the light (Sun 20; DPAW 61).', s2],
      ['Sunscreen: organic chromophores absorb UV and convert it to heat (Sun 22; DPAW 62).', s3],
      ['The light a sunscreen absorbs also degrades it (photodegradation), so it has to be reapplied (DPAW 62; 11/04 T@39860–@40700).', s4],
    ], 380, 'Drawn after DEENT_Sun_Exposure_2026.pdf slides 8, 20 and 22 (Dr. Smith; recording 00:18:55–00:21:27) and DPAW slides 61–64 (printed 60–63; Dr. Sikazwe, ' +
      'lecture 11/04, T@37900–@40700). Band limits stay each professor’s own: his slides 62–64 print 315 nm, and on 11/03 he said “315 or 320” (T 817–819), held in reviews/OPEN_QUESTIONS.md.');
  })();

  return {
    figs: {'fig-steroid': STEROID, 'fig-il-axis': IL_AXIS, 'fig-cni-nfat': CNI, 'fig-spf': SPF, 'fig-block-vs-screen': BLOCK},
    names: {'fig-steroid': 'Steroid skeleton: rings, faces, numbers, SAR, receptor',
      'fig-il-axis': 'Cytokine biologics: what each one binds',
      'fig-cni-nfat': 'Calcineurin inhibitors: signals, NFAT, IL-2',
      'fig-spf': 'MED, SPF and broad spectrum',
      'fig-block-vs-screen': 'Sunblocks vs sunscreens'},
    css: '.fig .f2-b{stroke:currentColor;stroke-width:1.6;fill:none;stroke-linecap:round}' +
      '.fig .f2-hash{stroke:currentColor;stroke-width:1.2;fill:none}.fig .f2-wedge{fill:currentColor}' +
      '.fig .f2-ring{fill:var(--text-dim);font-size:12px;font-weight:700}' +
      '.fig .f2-num{fill:var(--accent);font-size:8.5px;font-weight:700}' +
      '.fig .f2-face{fill:var(--accent);font-size:11px;font-weight:700}' +
      '.fig .f2-o{fill:var(--at-o);font-size:10px;font-weight:600}.fig .f2-x{fill:var(--at-x);font-size:10px;font-weight:700}' +
      '.fig .f2-tag{fill:var(--accent);font-size:10px;font-weight:700}' +
      '.fig .f2-res{fill:var(--text);font-size:9px;font-weight:700}' +
      '.fig .f2-hb{stroke:var(--accent);stroke-width:1.3;stroke-dasharray:3 2;fill:none}' +
      '.fig .f2-hbn{fill:var(--accent);font-size:8px;font-weight:700}' +
      '.fig .f2-mem{stroke:var(--text-dim);stroke-width:2.2;fill:none}' +
      '.fig .f2-ch{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.1}' +
      '.fig .f2-cy{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.1}' +
      '.fig .f2-cyt{fill:var(--text);font-size:7.5px;font-weight:700}' +
      '.fig .f2-in{fill:var(--text);font-size:7.5px;font-weight:600;text-anchor:middle}' +
      '.fig .f2-ab{stroke:var(--ok);stroke-width:2.2;fill:none;stroke-linecap:round}' +
      '.fig .f2-lead{stroke:var(--text-dim);stroke-width:0.8;fill:none;stroke-dasharray:2 2}' +
      '.fig .f2-cell{fill:none;stroke:var(--text-dim);stroke-width:1.6}' +
      '.fig .f2-nuc{fill:var(--surface);stroke:var(--line);stroke-width:1.4}' +
      '.fig .f2-enz{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.3}' +
      '.fig .f2-tf{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.2}' +
      '.fig .f2-drug{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.2}' +
      '.fig .f2-dot{fill:var(--warn)}.fig .f2-dot2{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1}' +
      '.fig .f2-sig{fill:var(--bad);font-size:8.5px;font-weight:700}' +
      '.fig .f2-blk{stroke:var(--bad);stroke-width:2.4;fill:none;stroke-linecap:round}' +
      '.fig .f2-warn{fill:var(--bad);font-size:8.5px;font-weight:700}' +
      '.fig .f2-key{fill:var(--text);font-size:9.5px;font-weight:700}' +
      '.fig .f2-skin{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1}' +
      '.fig .f2-red{fill:var(--bad)}.fig .f2-outl{fill:none;stroke:var(--bad);stroke-width:1.4}' +
      '.fig .f2-bar{fill:var(--accent)}.fig .f2-axis{stroke:var(--line);stroke-width:1.2;fill:none}' +
      '.fig .f2-band{fill:var(--at-p)}.fig .f2-band2{fill:var(--accent)}' +
      '.fig .f2-cw{stroke:var(--bad);stroke-width:2;fill:none}' +
      '.fig .f2-uv{stroke:var(--at-p);stroke-width:1.6;fill:none;marker-end:url(#arw)}' +
      '.fig .f2-part{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.2}' +
      '.fig .f2-mol{fill:none;stroke:var(--text);stroke-width:1.3}' +
      '.fig .f2-heat{stroke:var(--bad);stroke-width:1.5;fill:none}.fig .f2-deg{stroke-dasharray:2 2}' +
      '.fig .f2-db{stroke-width:1.4}',
  };
})();

Object.assign(DIA, FIGS2.figs);
if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, FIGS2.names);
if (typeof DIAGRAMS !== 'undefined') {
  DIAGRAMS.push(['Mechanisms drawn from Dr. Smith’s slides', ['fig-cni-nfat', 'fig-il-axis', 'fig-spf']]);
  DIAGRAMS.push(['Structures drawn from Dr. Sikazwe’s slides', ['fig-steroid']]);
  DIAGRAMS.push(['Sunblocks and sunscreens (both professors)', ['fig-block-vs-screen']]);
}
if (typeof document !== 'undefined' && document.head && !document.getElementById('figs2css')) {
  const s = document.createElement('style'); s.id = 'figs2css'; s.textContent = FIGS2.css; document.head.appendChild(s);
}
