/* ==========================================================================
   DIAGRAMS for Dr. Smith's eye lectures (Exam 3): glaucoma, allergic
   conjunctivitis and dry eye
   ==========================================================================
   Loaded after diagrams.js (and figs2.js). Uses `stepper` and `figure` from
   diagrams.js and adds five figures to DIA, their names to DIA_NAMES and one
   group to DIAGRAMS, as figs2.js does.

     ey-aqueous   inflow and outflow, and where each glaucoma class acts
     ey-angle     open-angle vs angle-closure glaucoma
     ey-cai       carbonic anhydrase in the ciliary epithelium; why oral CAIs
                  cause metabolic acidosis (kidney, bicarbonate)
     ey-allergy   allergic conjunctivitis: IgE, mast cell, histamine, and where
                  H1 inverse agonists, mast cell stabilizers and α2 agonists act
     ey-dryeye    dry eye: inflammation lowers tear production; where
                  lifitegrast, cyclosporine, loteprednol and varenicline act

   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf (slide = PDF page) and
   her lectures of 11/13 and 11/17 (src/decks/DEENT_Lecture_11.13_transcript.txt,
   DEENT_Lecture_11.17_transcript.txt; T@n is the character offset in that
   file). Her exam focus, 11/13 T@61120: "focus on pathophys and then focus on
   mechanisms"; her organizing idea, 11/13 T@19333 and T@28180: does a drug
   affect inflow (production of aqueous humor) or outflow (its drainage).

   One verbal slip resolved against the slides: on 11/13 (T@54881) she said
   carbonic acid dissociates "into sodium and bicarbonate"; on 11/17 (T@5420)
   she said "a hydrogen ion and bicarb", as slide 27 prints (H+ + HCO3−), and
   slide 26 says the enzyme makes "sodium and bicarbonate" available for
   secretion. The figure draws H+ + HCO3− and the secretion of HCO3− with Na+.

   STEPPERS.md rules: the same thing carries the same data-k in every step it
   is in; data-k values are unique inside a step; opacity is set as an
   attribute; no shape carries its own transform. Colours are course CSS
   variables or currentColor, and every coloured mark also has a text label.
   Check: node diagrams_ey_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_EY = (() => {
  if (typeof stepper !== 'function') return null;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const opa = op => op != null ? ` opacity="${op}"` : '';
  /* text: x, y, words, key, class, anchor, opacity */
  const T = (x, y, s, k, c = 'ey-t', a = 'middle', op) =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}"${opa(op)}>${esc(s)}</text>`;
  /* several lines of text, LH apart unless dy says otherwise */
  const LH = 13;
  const TL = (x, y, arr, k, c = 'ey-t', a = 'middle', dy = LH, op) =>
    arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a, op)).join('');
  const R = (x, y, w, h, k, c = 'box', rx = 6, op) =>
    `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"${opa(op)}/>`;
  /* an arrow: the line, and its head drawn as a small triangle at the end of the path (not an SVG
     marker: every figure's marker shares one id, and a marker inside a hidden copy of a figure is
     not drawn) */
  const HEAD = {'ey-arr': 'ey-hd2', 'ey-flow': 'ey-hd', 'ey-water': 'ey-hd'};
  const P = (d, k, c = 'ey-arr', op) => {
    let out = `<path class="${c}" data-k="${k}" d="${d}"${opa(op)}/>`;
    if (HEAD[c]) {
      const n = d.match(/-?[\d.]+/g).map(Number), ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
      const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, s = 7, w = 3.6;
      const bx = ex - ux * s, by = ey - uy * s;
      out += `<polygon class="${HEAD[c]}" data-k="${k}^" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}"${opa(op)}/>`;
    }
    return out;
  };
  const C = (x, y, r, k, c, op) => `<circle class="${c}" data-k="${k}" cx="${r1(x)}" cy="${r1(y)}" r="${r}"${opa(op)}/>`;
  /* a block mark: a short thick bar across a path, drawn in --bad and always named by a label */
  const BLK = (x1, y1, x2, y2, k) => `<line class="ey-blk" data-k="${k}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  /* a labelled box: bold first line, then plain lines, centred */
  const NB = (x, y, w, h, k, lines, c = 'box', first = 'ey-tb', rest = 'ey-t', op) => {
    const n = lines.length, top = y + h / 2 - (n - 1) * LH / 2 + 4;
    return R(x, y, w, h, 'b' + k, c, 6, op) + lines.map((s, i) => T(x + w / 2, top + i * LH, s, 't' + k + i, i ? rest : first, 'middle', op)).join('');
  };
  /* a drug box: lines left-aligned, the first bold */
  const D = (x, y, w, lines, k) => R(x, y, w, lines.length * LH + 7, 'd' + k, 'ey-drug', 4) +
    lines.map((s, i) => T(x + 5, y + 14 + i * LH, s, 'd' + k + i, i ? 'ey-t' : 'ey-tb', 'start')).join('');
  /* a text block in a drug box across the panel */
  const DW = (y, lines, k) => R(6, y, 348, lines.length * LH + 7, k, 'ey-drug', 4) + TL(12, y + 14, lines, k + 't', 'ey-t', 'start');

  /* ---------------------------------------------------------------------
     1. ey-aqueous: inflow and outflow, and where each drug class acts.
     Slides 14-16 (flow, the two routes, receptors and enzymes), 18, 22, 26
     (inflow drugs), 32, 34, 37, 41 (outflow drugs); 11/13 T@25530-@33000,
     T@39934-@40600 (the two buckets), T@43883-@53260; 11/17 T@24556-@36600.
     --------------------------------------------------------------------- */
  const AQUEOUS = (() => {
    const cb = NB(6, 26, 110, 56, 'cb', ['Ciliary body', 'epithelium makes', 'aqueous humor']);
    const pc = NB(134, 30, 86, 46, 'pc', ['Posterior', 'chamber']);
    const ac = NB(256, 30, 98, 46, 'ac', ['Anterior', 'chamber']);
    const flow1 = P('M116 53 L132 53', 'f1', 'ey-flow') + P('M220 53 L254 53', 'f2', 'ey-flow') + T(237, 45, 'pupil', 'pup', 'ey-ts');
    const inflowTag = T(61, 98, 'INFLOW:', 'inT', 'ey-tag') + T(61, 111, 'made all the time', 'alw', 'ey-ts');

    const tm = NB(254, 104, 100, 36, 'tm', ['Trabecular', 'meshwork'], 'ey-route');
    const sc = NB(254, 156, 100, 36, 'sc', ['Schlemm’s', 'canal'], 'ey-route');
    const uv = NB(134, 104, 110, 62, 'uv', ['Uveoscleral', 'route: between', 'the uvea and', 'the sclera'], 'ey-route');
    const out1 = P('M304 76 L304 102', 'o1', 'ey-flow') + P('M304 140 L304 154', 'o2', 'ey-flow') + P('M304 192 L304 206', 'o3', 'ey-flow') +
      T(304, 219, 'into blood vessels', 'o3t', 'ey-ts') + T(304, 233, 'MAIN route', 'mainT', 'ey-tag');
    const out2 = P('M262 76 Q 230 88 214 102', 'o4', 'ey-flow') + P('M189 166 L189 180', 'o5', 'ey-flow') +
      T(189, 193, 'spreads into', 'o5t', 'ey-ts') + T(189, 206, 'the tissues', 'o5u', 'ey-ts') + T(189, 220, 'smaller route', 'minT', 'ey-tag');
    const outflowTag = T(298, 92, 'OUTFLOW', 'outT', 'ey-tag', 'end');

    const inDrugs = T(6, 132, '↓ INFLOW:', 'inD', 'ey-warn', 'start') +
      D(6, 138, 120, ['β-blockers', 'block β receptors'], 'bb') +
      D(6, 176, 120, ['α2 agonists', 'act on α2 receptors'], 'a2') +
      D(6, 214, 120, ['CA inhibitors', 'block carbonic', 'anhydrase'], 'ca');
    const tmDrugs = T(254, 250, '↑ OUTFLOW:', 'tmD', 'ey-warn', 'start') +
      D(254, 256, 100, ['M3 agonists,', 'echothiophate:', 'contract the', 'meshwork'], 'm3') +
      D(254, 318, 100, ['netarsudil:', 'less stiff', 'meshwork'], 'rk');
    const uvDrugs = T(134, 250, '↑ OUTFLOW:', 'uvD', 'ey-warn', 'start') +
      D(134, 256, 110, ['PG agonists:', 'relax the ciliary', 'muscle (PGF2α', 'receptor)'], 'pg') +
      D(134, 318, 110, ['brimonidine:', 'some (extra)'], 'br');

    const base = cb + pc + ac + flow1 + inflowTag;
    const s2 = base + tm + sc + uv + out1 + out2 + outflowTag;
    const s3 = s2 + inDrugs;
    const s4 = s3 + tmDrugs;
    const s5 = s4 + uvDrugs;
    return stepper('ey-aqueous', 'Aqueous humor: inflow and outflow', [
      ['Inflow: the ciliary body makes aqueous humor all the time; it flows through the pupil into the anterior chamber (slides 14–15; 11/13 T@25530).', base],
      ['Outflow: most drains through the trabecular meshwork and Schlemm’s canal; some by the uveoscleral route (slides 14–16; 11/13 T@32688).', s2],
      ['Drugs that decrease inflow act on the ciliary body: β-blockers, α2 agonists and carbonic anhydrase inhibitors (slides 16, 18, 22, 26; 11/13 T@39934).', s3],
      ['Trabecular outflow up: M3 agonists and echothiophate contract the meshwork; netarsudil makes it less stiff (slides 32, 34, 41; 11/17 T@24556).', s4],
      ['Uveoscleral outflow rises: PG agonists relax the ciliary muscle (also some trabecular); brimonidine adds some (slides 22, 37; 11/17 T@31096).', s5],
    ], 414, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 14–16, 18, 22, 26, 32, 34, 37 and 41; lectures 11/13, ' +
      'T@19333 and T@28180 (inflow is production, outflow is drainage), T@43883–@60121, and 11/17, T@23400–@36600. β-blockers: “not much effect on ' +
      'outflow; MOA not fully understood” (slide 18). PG agonists “do not affect aqueous humor production” (slide 37). Netarsudil inhibits Rho kinase: less ' +
      'contractile tone and fewer fibrosis-related protein deposits in the meshwork, and a change in the permeability of the cells lining Schlemm’s canal (slide 41).');
  })();

  /* ---------------------------------------------------------------------
     2. ey-angle: open-angle vs angle-closure glaucoma. Slides 13-14 (panels
     A-C); 11/13 T@19603-@20900, T@23500-@26600, T@28606-@29351.
     A half eye is drawn: the visual axis at the left edge, the angle at the
     right where the iris meets the cornea and sclera.
     --------------------------------------------------------------------- */
  const ANGLE = (() => {
    const cornea = P('M6 44 Q 118 40 168 108', 'cor', 'ey-tis') + T(64, 36, 'cornea', 'corT', 'ey-ts');
    const sclera = P('M168 108 Q 180 140 184 204', 'scl', 'ey-tis') + T(176, 216, 'sclera', 'sclT', 'ey-ts', 'end');
    const lens = P('M6 128 Q 88 128 94 156 Q 88 186 6 186', 'lens', 'ey-lens') + T(40, 162, 'lens', 'lensT', 'ey-ts');
    const cbody = R(156, 128, 18, 42, 'cbd', 'ey-cb', 4) + T(150, 186, 'ciliary body', 'cbT', 'ey-ts', 'end');
    const tmBox = bad => R(166, 100, 9, 16, 'tmb', bad ? 'ey-tmbad' : 'ey-tm', 2) + TL(140, 62, ['trabecular', 'meshwork'], 'tmT', 'ey-ts') +
      `<path class="ey-lead" data-k="tmL" d="M152 78 L167 100"/>`;
    const acT = T(56, 68, 'anterior chamber', 'acT', 'ey-ts');
    const irisFlat = P('M162 122 L 40 116', 'iris', 'ey-iris');
    const irisBow = P('M162 122 Q 170 96 40 108', 'iris', 'ey-iris');
    const irisT = T(124, 154, 'iris', 'irisT', 'ey-ts') + `<path class="ey-lead" data-k="irL" d="M124 144 L124 124"/>`;
    const ring = C(167, 110, 12, 'ring', 'ey-ring');
    /* aqueous humor: from the ciliary body, under the iris, out of the pupil, across to the angle */
    const aqIn = P('M156 140 Q 110 132 54 124 Q 30 120 30 106', 'aq1', 'ey-flow');
    const aqOut = (end, op) => P(`M34 96 Q 90 84 ${end}`, 'aq2', 'ey-flow', op);
    const eye = (iris, bad, outEnd, outOp) => cornea + sclera + lens + cbody + tmBox(bad) + acT + iris + irisT + ring + aqIn + aqOut(outEnd, outOp);

    /* the right column: a heading of one or two lines, then label and lines per row */
    const col = (head, rows, k) => {
      let y = 34, s = TL(198, y, head, k + 'h', 'ey-tb', 'start');
      y += head.length * LH + 6;
      rows.forEach(([lab, txt], i) => {
        s += T(198, y, lab, k + 'l' + i, 'ey-tag', 'start') + TL(198, y + LH, txt, k + 'r' + i + '_', 'ey-t', 'start');
        y += (txt.length + 1) * LH + 4;
      });
      return s;
    };
    const s1 = eye(irisFlat, false, '160 104') +
      col(['Normal drainage'], [['Made', ['by the ciliary body']], ['Flows', ['through the pupil into', 'the anterior chamber']],
        ['Drains', ['at the angle (circle),', 'through the meshwork']], ['Goal in glaucoma', ['lower the pressure (IOP)', 'to protect the optic nerve']]], 'n');
    const s2 = eye(irisFlat, true, '150 100', 0.45) + T(6, 234, 'meshwork drains poorly (circle)', 'badT', 'ey-warn', 'start') +
      col(['Primary open-angle', 'glaucoma (POAG)'], [['Angle', ['open']], ['What fails', ['meshwork dysfunction:', 'drainage not effective']],
        ['Onset', ['gradual; no symptoms until', 'the visual field is lost']], ['How common', ['common in the', 'United States']]], 'o');
    const s3 = eye(irisBow, false, '120 88', 0.45) + T(6, 234, 'iris blocks the angle (circle)', 'blkT', 'ey-warn', 'start') +
      col(['Primary angle-closure', 'glaucoma (PACG)'], [['Angle', ['closed: the iris bows', 'forward over the meshwork']],
        ['Linked to', ['the shape of the eye and', 'how it sits in the socket']],
        ['Onset, pain', ['pressure rises very quickly;', 'significant pain']], ['Urgency', ['medical emergency: lower', 'the IOP quickly']]], 'c');
    return stepper('ey-angle', 'Open-angle vs angle-closure glaucoma', [
      ['Normal: aqueous humor drains at the angle (circle), where the iris meets the cornea and sclera (slide 14 panel A; 11/13 T@26451).', s1],
      ['Open angle: the angle stays open but the trabecular meshwork drains poorly; gradual and silent (slides 13, 14 panel B; 11/13 T@29351).', s2],
      ['Angle closure: the iris bows forward and blocks the meshwork; the pressure rises fast and hurts (slides 13, 14 panel C; 11/13 T@28606).', s3],
    ], 312, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 13 and 14 (DiPiro’s Pharmacotherapy 13e, panels A–C; Dr. Smith); lecture 11/13, ' +
      'T@19603–@20900 and T@23500–@29400. Both types: the goal of treatment is to decrease the IOP, delaying or preventing disease progression (slide 13). ' +
      'On 11/13 (T@23500, T@28606) she gave a blow to the eye or swelling as a cause of a closed angle and a laser opening as the treatment.');
  })();

  /* ---------------------------------------------------------------------
     3. ey-cai: carbonic anhydrase in the ciliary epithelium, and why oral
     CAIs cause metabolic acidosis. Slides 26-29; 11/13 T@53959-@60121;
     11/17 T@4800-@22700 (kidney: T@7921-@20200).
     --------------------------------------------------------------------- */
  const CAI = (() => {
    /* the eye: one ciliary epithelial cell and the posterior chamber */
    const cell = R(6, 30, 236, 176, 'ecell', 'ey-cell', 10) + T(124, 46, 'Ciliary epithelial cell', 'ecT', 'ey-tb');
    const cham = R(250, 30, 104, 176, 'echam', 'ey-fluid', 10) + TL(302, 46, ['Posterior', 'chamber'], 'echT', 'ey-tb');
    const eyeChem = op => T(70, 76, 'CO₂ + H₂O', 'e1', 'ey-chem') + P('M70 82 L70 104', 'ea1', 'ey-arr') +
      T(88, 96, 'carbonic anhydrase', 'eCA', 'ey-tag', 'start') +
      T(70, 122, 'H₂CO₃', 'e2', 'ey-chem', 'middle', op) + P('M70 128 L70 144', 'ea2', 'ey-arr', op) +
      T(70, 160, 'H⁺ + HCO₃⁻', 'e3', 'ey-chem', 'middle', op);
    const secrete = op => P('M106 152 Q 180 140 266 120', 'es1', 'ey-flow', op) + T(190, 132, 'HCO₃⁻', 'esT1', 'ey-chem', 'middle', op) +
      P('M130 188 L266 188', 'es2', 'ey-flow', op) + T(160, 182, 'Na⁺', 'esT2', 'ey-chem', 'middle', op) +
      P('M196 70 L266 70', 'es3', 'ey-water', op) + T(222, 64, 'water', 'esT3', 'ey-t', 'middle', op) +
      TL(302, 96, ['solutes out,', 'water follows'], 'esT4', 'ey-t', 'middle', LH, op) +
      TL(302, 144, ['= aqueous', 'humor', '(INFLOW)'], 'esT5', 'ey-tb', 'middle', LH, op);
    const e1 = cell + cham + eyeChem() + secrete();
    const e2 = cell + cham + eyeChem(0.35) + secrete(0.35) + BLK(57, 92, 83, 92, 'eblk') +
      T(88, 109, 'blocked by a CA inhibitor', 'eBl', 'ey-warn', 'start') + T(302, 198, '↓ INFLOW', 'eDown', 'ey-warn') +
      DW(214, ['CA inhibitors: dorzolamide, brinzolamide (eye drops);', 'acetazolamide, methazolamide (oral)'], 'edrug');

    /* the kidney: a proximal convoluted tubule cell between the lumen and the blood (slide 27) */
    const kBase = R(6, 26, 78, 186, 'lum', 'ey-fluid', 8) + R(92, 26, 172, 186, 'kcell', 'ey-cell', 8) + R(272, 26, 82, 186, 'bld', 'ey-blood', 8) +
      TL(45, 42, ['Lumen', '(urine)'], 'lumT', 'ey-tb') + TL(178, 42, ['Proximal tubule', 'cell'], 'kcT', 'ey-tb') + T(313, 42, 'Blood', 'bldT', 'ey-tb') +
      T(178, 226, 'apical side: lumen · basolateral side: blood', 'sides', 'ey-ts');
    const kChem = op =>
      /* lumen: H+ + HCO3- -> H2CO3 -> (CA IV) CO2 + H2O, which enters the cell passively */
      T(45, 102, 'H⁺+HCO₃⁻', 'k1', 'ey-chem') + P('M45 108 L45 122', 'ka1', 'ey-arr') + T(45, 136, 'H₂CO₃', 'k2', 'ey-chem') +
      P('M30 142 L30 162', 'ka2', 'ey-arr') + T(46, 156, 'CA IV', 'kIV', 'ey-tag', 'start') + T(45, 176, 'CO₂+H₂O', 'k3', 'ey-chem') +
      P('M62 182 Q 96 206 128 198', 'ka3', 'ey-arr') + T(36, 200, 'passive', 'kpas', 'ey-ts') +
      /* cell: CO2 + H2O -> (CA II) H2CO3 -> H+ + HCO3- */
      T(166, 202, 'CO₂ + H₂O', 'k4', 'ey-chem') + P('M166 190 L166 170', 'ka4', 'ey-arr') + T(182, 184, 'CA II', 'kII', 'ey-tag', 'start') +
      T(166, 162, 'H₂CO₃', 'k5', 'ey-chem', 'middle', op) + P('M166 150 L166 134', 'ka5', 'ey-arr', op) +
      T(166, 126, 'H⁺ + HCO₃⁻', 'k6', 'ey-chem', 'middle', op);
    const kTrans = op =>
      /* H+ out to the lumen through NHE3, Na+ in; HCO3- out to the blood with Na+ through NBC1 */
      `<ellipse class="ey-tr" data-k="nhe" cx="92" cy="72" rx="21" ry="10"${opa(op)}/>` + T(92, 76, 'NHE3', 'nheT', 'ey-tr-t', 'middle', op) +
      P('M146 116 Q 112 98 60 92', 'kh', 'ey-arr', op) + T(124, 98, 'H⁺', 'khT', 'ey-chem', 'middle', op) +
      P('M30 68 Q 90 56 140 70', 'kna', 'ey-arr', op) + T(20, 72, 'Na⁺', 'knaT', 'ey-chem', 'middle', op) +
      `<ellipse class="ey-tr" data-k="nbc" cx="264" cy="104" rx="21" ry="10"${opa(op)}/>` + T(264, 108, 'NBC1', 'nbcT', 'ey-tr-t', 'middle', op) +
      P('M200 118 Q 230 104 304 104', 'kb', 'ey-arr', op) + T(226, 140, 'HCO₃⁻, Na⁺', 'kbT', 'ey-chem', 'middle', op);
    const buf = op => TL(313, 134, ['HCO₃⁻', 'buffers', 'blood pH'], 'buf', 'ey-t', 'middle', LH, op);
    const k3 = kBase + kChem() + kTrans() + buf();
    const blocks = BLK(18, 152, 42, 152, 'kb4') + BLK(154, 180, 178, 180, 'kb2');
    const k4 = kBase + kChem(0.35) + kTrans(0.35) + buf(0.35) + blocks +
      T(6, 244, 'Acetazolamide (oral) blocks CA IV and CA II (bars)', 'drg', 'ey-warn', 'start') +
      TL(6, 258, ['Lumen: no H⁺ to trade, so Na⁺ stays in the lumen', 'and water stays with it: more urine'], 'diu', 'ey-t', 'start');
    const k5 = k4 + TL(6, 288, ['Blood: no HCO₃⁻ goes back, so the pH falls:'], 'aci', 'ey-t', 'start') +
      T(6, 301, 'METABOLIC ACIDOSIS', 'acw', 'ey-warn', 'start') +
      T(6, 314, 'mainly with oral CAIs; much less with eye drops', 'acq', 'ey-t', 'start');
    return stepper('ey-cai', 'Carbonic anhydrase inhibitors: eye and kidney', [
      ['In the ciliary epithelium, carbonic anhydrase makes H₂CO₃; its HCO₃⁻ leaves with Na⁺ and water follows: aqueous humor (slide 26; 11/17 T@5420).', e1],
      ['A CA inhibitor stops the enzyme: less HCO₃⁻ and Na⁺ leave, less water follows, so inflow falls (slides 26, 28; 11/13 T@54881).', e2],
      ['Kidney: CA IV in the lumen and CA II in the cell make HCO₃⁻, which returns to the blood and buffers its pH (slide 27; 11/17 T@8731).', k3],
      ['Oral acetazolamide blocks CA IV and CA II: no H⁺ for NHE3, so Na⁺ and water stay in the lumen (diuresis) (slides 27, 29; 11/17 T@14835).', k4],
      ['No HCO₃⁻ returns to the blood, so the pH falls: metabolic acidosis, the side effect to watch with oral CAIs (slide 29; 11/17 T@17682).', k5],
    ], 360, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 26–29 (slide 27: Golan, Principles of Pharmacology, Fig 20-6; Dr. Smith); ' +
      'lectures 11/13, T@53959–@60121, and 11/17, T@4800–@22700. The Na⁺/K⁺ ATPase and vH⁺ ATPase on slide 27 are left out; she said the transporter names ' +
      'are not needed for this lecture (11/17 T@9398). Acidosis mainly with oral use, “to a much lesser extent” with drops (11/17 T@6785). In the eye, she said, ' +
      'the movement of solutes “is not quite the same” as in the kidney (11/17 T@20105). On 11/13 (T@54881) she said carbonic acid dissociates “into sodium and ' +
      'bicarbonate”; the figure follows slide 27 and 11/17 (T@5420): H⁺ + HCO₃⁻.');
  })();

  /* ---------------------------------------------------------------------
     4. ey-allergy: allergic conjunctivitis. Slides 48-49, 51-54, 56-57, 59;
     11/17 T@40500-@54200.
     --------------------------------------------------------------------- */
  const ALLERGY = (() => {
    const mast = C(70, 122, 50, 'mast', 'ey-cellc') + T(70, 192, 'Mast cell', 'mastT', 'ey-tb');
    const Y = (x, y, k) => `<path class="ey-ige" data-k="${k}" d="M${x} ${y + 12}L${x} ${y + 5}M${x} ${y + 5}L${x - 5} ${y}M${x} ${y + 5}L${x + 5} ${y}"/>`;
    const ige = Y(48, 62, 'y1') + Y(70, 57, 'y2') + Y(92, 62, 'y3') + T(6, 70, 'IgE', 'igeT', 'ey-tag', 'start');
    const ag = (x, y, k) => `<polygon class="ey-ag" data-k="${k}" points="${x},${y - 4} ${x + 4},${y} ${x},${y + 4} ${x - 4},${y}"/>`;
    const allergen = ag(48, 56, 'ag1') + ag(70, 51, 'ag2') + ag(92, 56, 'ag3') + T(6, 40, 'allergen (antigen)', 'agT', 'ey-tag', 'start');
    /* histamine granules: inside the cell, or released toward the H1 receptors */
    const IN = [[52, 96], [74, 90], [96, 104], [50, 120], [74, 116], [96, 128]];
    const OUT = [[214, 74], [226, 86], [214, 98], [226, 110], [214, 122], [226, 134]];
    const PART = [IN[0], IN[1], IN[2], IN[3], OUT[2], OUT[3]];
    const gran = pos => pos.map(([x, y], i) => C(x, y, 5, 'g' + i, 'ey-gran')).join('');
    const granT = TL(70, 150, ['granules:', 'histamine'], 'granT', 'ey-ts');
    /* the eye's tissue with H1 receptors on its edge, and a small blood vessel */
    const tissue = R(248, 56, 106, 92, 'tis', 'ey-cell', 6) + TL(301, 96, ['eye tissue', '(conjunctiva)'], 'tisT', 'ey-tb') +
      [70, 92, 114, 136].map((y, i) => `<path class="ey-rec" data-k="h1r${i}" d="M248 ${y - 6} Q 238 ${y} 248 ${y + 6}"/>`).join('') +
      T(244, 50, 'H1 receptors', 'h1T', 'ey-tag', 'end');
    const vessel = h => R(150, 190 - h / 2, 204, h, 'ves', 'ey-blood', h / 2) + T(252, 194, 'small blood vessel', 'vesT', 'ey-t');
    const cellPart = mast + ige + allergen + granT + tissue;
    const s1 = cellPart + gran(IN) + vessel(26);
    const released = P('M122 112 L200 100', 'rel', 'ey-flow') + T(156, 94, 'release', 'relT', 'ey-ts');
    const s2 = cellPart + gran(OUT) + released + vessel(34) +
      TL(6, 234, ['Histamine at H1: itching, swelling (edema), redness,', 'watery eyes; small blood vessels relax'], 'sx', 'ey-t', 'start');
    /* H1 inverse agonists sit on the receptors; most also stabilize the mast cell */
    const h1d = [70, 92, 114, 136].map((y, i) => R(232, y - 6, 9, 12, 'h1d' + i, 'ey-drugm', 2)).join('') +
      T(204, 164, 'H1 inverse agonist', 'h1lab', 'ey-tag');
    const stab = `<circle class="ey-stab" data-k="stab" cx="70" cy="122" r="57"/>`;
    const s3 = cellPart + gran(PART) + vessel(26) + h1d + stab +
      TL(6, 234, ['H1 inverse agonist (“antihistamine”): competes', 'with histamine, lowers constitutive activity'], 'h1a', 'ey-t', 'start') +
      TL(6, 264, ['Mast cell stabilizer (dashed ring): less histamine', 'released; all but cetirizine; how it works is', 'unclear; used before the allergen arrives'], 'msa', 'ey-t', 'start') +
      TL(6, 307, ['Extras: alcaftadine also H4 (eosinophils);', 'epinastine also H2 (eyelid edema)'], 'ext', 'ey-t', 'start');
    const s4 = cellPart + gran(PART) + vessel(12) + h1d + stab +
      R(150, 204, 204, 18, 'a2d', 'ey-drug', 4) + T(252, 217, 'α2 agonist: vasoconstriction', 'a2T', 'ey-tb') +
      TL(6, 240, ['α2 agonists (naphazoline, oxymetazoline,', 'tetrahydrozoline, brimonidine) and phenylephrine', '(α1) constrict the vessels: less redness,',
        'less fluid leaks out (less edema)'], 'a2x', 'ey-t', 'start') +
      TL(6, 296, ['Combination: naphazoline/pheniramine', '(α2 agonist + antihistamine)'], 'cmb', 'ey-t', 'start');
    return stepper('ey-allergy', 'Allergic conjunctivitis: histamine and the drugs', [
      ['A sensitized mast cell carries IgE on its surface; the allergen (antigen) binds that IgE (slide 48; 11/17 T@41462).', s1],
      ['The mast cell releases histamine; at H1 receptors it causes itch, edema, redness and watery eyes (slides 48–49, 52; 11/17 T@41705).', s2],
      ['H1 inverse agonists block the receptor; most are also mast cell stabilizers, so less histamine is released (slides 51, 53–54; 11/17 T@44333).', s3],
      ['Vasoconstrictors (α2 agonists; phenylephrine is α1) act on the vessels: less redness and less leak behind the edema (slides 56–57, 59; 11/17 T@52404).', s4],
    ], 368, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 48–49, 51–54, 56–57 and 59 (Dr. Smith); lecture 11/17, T@40500–@54200. ' +
      'Slide 51: mast cell stabilization is “both H1 receptor dependent and independent; mechanisms still unclear”, and drugs with it “may be more effective” topically. ' +
      'Cetirizine is the one without mast cell stabilization (slide 53; 11/17 T@51757); use before the allergen season is from the lecture (11/17 T@46857).');
  })();

  /* ---------------------------------------------------------------------
     5. ey-dryeye: dry eye (keratoconjunctivitis sicca). Slides 62, 64-67,
     69, 71, 73; 11/17 T@57000-@68300.
     --------------------------------------------------------------------- */
  const DRYEYE = (() => {
    const gland = NB(206, 108, 148, 44, 'gl', ['Lacrimal glands', 'and ducts']);
    const tears = low => NB(206, 176, 148, 40, 'te', low ? ['Tear production', 'falls: DRY EYE'] : ['Tears', '(basal tear film)'], low ? 'ey-route' : 'box');
    const g2t = P('M280 152 L280 174', 'g2t', 'ey-flow');
    const infl = NB(6, 108, 170, 44, 'in', ['Inflammation', 'T cells, cytokines']);
    const i2g = P('M176 130 L204 130', 'i2g', 'ey-arr');
    const tcell = NB(6, 28, 170, 56, 'tc', ['T cell (leukocyte)', 'LFA-1 binds ICAM-1:', 'adhesion, cytokines']);
    const t2i = P('M91 84 L91 106', 't2i', 'ey-arr');
    const act = NB(6, 176, 170, 40, 'ac', ['Calcineurin → NFAT', '→ IL-2: T cells multiply']);
    const a2i = P('M91 176 L91 154', 'a2i', 'ey-arr');
    const s1 = infl + i2g + gland + g2t + tears(true) +
      TL(6, 244, ['Inflammation in the lacrimal system lowers tear', 'production. Risks: older age, female; drugs:',
        'antihistamines, decongestants, antidepressants,', 'hormone replacement therapy'], 'why', 'ey-t', 'start');
    const lifi = BLK(64, 88, 118, 102, 'lblk') + T(122, 99, 'lifitegrast', 'lbl1', 'ey-warn', 'start') +
      DW(236, ['Lifitegrast (drops): binds LFA-1, blocks its', 'interaction with ICAM-1: T cells adhere less and', 'secrete fewer inflammatory cytokines'], 'ld');
    const s2 = infl + i2g + gland + g2t + tears(true) + tcell + t2i + lifi;
    const cyc = BLK(64, 160, 118, 170, 'cblk') + T(122, 168, 'cyclosporine', 'lbl2', 'ey-warn', 'start') +
      DW(286, ['Cyclosporine (drops): binds cyclophilin; the complex', 'inhibits calcineurin: less IL-2, less inflammation.', 'Loteprednol (corticosteroid drops): anti-inflammatory'], 'cd');
    const s3 = infl + i2g + gland + g2t + tears(true) + tcell + t2i + lifi + act + a2i + cyc;
    const nose = NB(206, 28, 148, 56, 'ns', ['Nasal cavity', 'nicotinic ACh receptor', '→ trigeminal nerve']);
    const n2g = P('M280 84 L280 106', 'n2g', 'ey-flow') + T(274, 99, 'parasympathetic', 'n2gT', 'ey-ts', 'end');
    const vare = DW(336, ['Varenicline (nasal spray): nicotinic agonist in the', 'nose; the trigeminal parasympathetic pathway', 'makes more basal tear film'], 'vd');
    const s4 = infl + i2g + gland + g2t + tears(false) + tcell + t2i + lifi + act + a2i + cyc + nose + n2g + vare;
    return stepper('ey-dryeye', 'Dry eye: where each drug acts', [
      ['Dry eye (keratoconjunctivitis sicca): inflammation in the lacrimal system lowers tear production (slides 62, 64; 11/17 T@57918).', s1],
      ['Lifitegrast: LFA-1 on leukocytes binds ICAM-1; blocking it may inhibit T-cell adhesion and cytokine secretion (slide 71; 11/17 T@64155).', s2],
      ['Cyclosporine binds cyclophilin; the complex inhibits calcineurin, so less IL-2; loteprednol is a corticosteroid (slides 65–67, 69; 11/17 T@60561).', s3],
      ['Varenicline: nasal nicotinic receptors activate the trigeminal parasympathetic pathway: more basal tear film (slide 73; 11/17 T@67641).', s4],
    ], 430, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 62, 64–67, 69, 71 and 73 (Dr. Smith); lecture 11/17, T@57000–@68300. ' +
      'Slide 65: calcineurin inhibitors act in the signal cascade after signals 1 and 2, leading to IL-2 transcription; slide 66 (Golan Fig 44-5): cyclosporine binds ' +
      'cyclophilin, tacrolimus binds FKBP, and active calcineurin activates NFAT for the IL-2 gene. Oral cyclosporine is not used for dry eye: it is a significant ' +
      'immunosuppressant (slide 67; 11/17 T@62500). Lifitegrast: remove contact lenses, reinsert 15 minutes after the dose (slide 71).');
  })();

  const PURPOSE = {
    'ey-aqueous': 'Shows where aqueous humor is made (inflow) and the two routes it drains by (outflow), with each glaucoma drug class placed on the part it changes, so you can sort a drug as an inflow reducer or an outflow enhancer and name its route.',
    'ey-angle': 'Compares open-angle and angle-closure glaucoma with normal drainage, so you can say what blocks the drainage in each, how each starts and why angle closure is an emergency.',
    'ey-cai': 'Shows what carbonic anhydrase does in the ciliary epithelium and in the kidney, so you can explain how a CA inhibitor lowers inflow and why an oral one can cause metabolic acidosis.',
    'ey-allergy': 'Shows how an allergen on IgE makes a mast cell release histamine and where H1 inverse agonists, mast cell stabilizers and α2 agonists act, so you can match each class to the symptom it treats.',
    'ey-dryeye': 'Shows how inflammation lowers tear production in dry eye and where lifitegrast, cyclosporine, loteprednol and varenicline act, so you can name each drug’s target and route.',
  };

  return {
    figs: {'ey-aqueous': AQUEOUS, 'ey-angle': ANGLE, 'ey-cai': CAI, 'ey-allergy': ALLERGY, 'ey-dryeye': DRYEYE},
    names: {'ey-aqueous': 'Glaucoma: inflow, outflow and where each drug acts',
      'ey-angle': 'Open-angle vs angle-closure glaucoma',
      'ey-cai': 'Carbonic anhydrase inhibitors: eye and kidney (acidosis)',
      'ey-allergy': 'Allergic conjunctivitis: histamine and the drugs',
      'ey-dryeye': 'Dry eye: inflammation and where each drug acts'},
    purpose: PURPOSE,
    css: '.fig .ey-t{fill:var(--text);font-size:11px}' +
      '.fig .ey-tb{fill:var(--text);font-size:11px;font-weight:700}' +
      '.fig .ey-ts{fill:var(--text);font-size:11px}' +
      '.fig .ey-tag{fill:var(--accent);font-size:11px;font-weight:700}' +
      '.fig .ey-warn{fill:var(--bad);font-size:11px;font-weight:700}' +
      '.fig .ey-chem{fill:var(--text);font-size:11px;font-weight:600}' +
      '.fig .ey-arr{stroke:var(--text-dim);stroke-width:1.4;fill:none}.fig .ey-hd2{fill:var(--text-dim)}' +
      '.fig .ey-flow{stroke:var(--accent);stroke-width:1.8;fill:none}.fig .ey-hd{fill:var(--accent)}' +
      '.fig .ey-water{stroke:var(--accent);stroke-width:1.4;fill:none;stroke-dasharray:4 3}' +
      '.fig .ey-lead{stroke:var(--text-dim);stroke-width:0.8;fill:none;stroke-dasharray:2 2}' +
      '.fig .ey-route{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.2}' +
      '.fig .ey-drug{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.2}' +
      '.fig .ey-drugm{fill:var(--ok);stroke:var(--ok);stroke-width:1}' +
      '.fig .ey-blk{stroke:var(--bad);stroke-width:3;fill:none;stroke-linecap:round}' +
      '.fig .ey-cell{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.3}' +
      '.fig .ey-cellc{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.6}' +
      '.fig .ey-fluid{fill:var(--accent-bg);stroke:var(--line);stroke-width:1}' +
      '.fig .ey-blood{fill:var(--bad-bg);stroke:var(--bad);stroke-width:1}' +
      '.fig .ey-tr{fill:var(--paper);stroke:var(--accent);stroke-width:1.3}' +
      '.fig .ey-tr-t{fill:var(--text);font-size:11px;font-weight:700}' +
      '.fig .ey-tis{stroke:var(--text-dim);stroke-width:2;fill:none}' +
      '.fig .ey-lens{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.4}' +
      '.fig .ey-cb{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.2}' +
      '.fig .ey-iris{stroke:var(--text);stroke-width:4;fill:none;stroke-linecap:round}' +
      '.fig .ey-tm{fill:var(--accent);stroke:var(--accent);stroke-width:1}' +
      '.fig .ey-tmbad{fill:var(--paper);stroke:var(--bad);stroke-width:1.6;stroke-dasharray:2 2}' +
      '.fig .ey-ring{fill:none;stroke:var(--text-dim);stroke-width:1;stroke-dasharray:3 2}' +
      '.fig .ey-ige{stroke:var(--accent);stroke-width:2;fill:none;stroke-linecap:round}' +
      '.fig .ey-ag{fill:var(--warn);stroke:var(--warn)}' +
      '.fig .ey-gran{fill:var(--bad-bg);stroke:var(--bad);stroke-width:1.2}' +
      '.fig .ey-rec{stroke:var(--accent);stroke-width:2.2;fill:none}' +
      '.fig .ey-stab{fill:none;stroke:var(--ok);stroke-width:2;stroke-dasharray:5 3}',
  };
})();

if (DIAGRAMS_EY) {
  Object.assign(DIA, DIAGRAMS_EY.figs);
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_EY.names);
  if (typeof DIAGRAMS !== 'undefined') {
    DIAGRAMS.push(['Eye: glaucoma, allergy and dry eye (Dr. Smith, Exam 3)', ['ey-aqueous', 'ey-angle', 'ey-cai', 'ey-allergy', 'ey-dryeye']]);
  }
  /* The Purpose line, written into each figure's own markup as purpose_ui.js does (the same
     <p class="dnpurpose"> line, styled by purpose_ui.js), so it is in place wherever the
     figure is drawn. */
  const OPEN_RX = /^<figure class="fig[^"]*">/;
  const pesc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_EY.purpose).forEach(k => {
    const h = DIA[k], m = typeof h === 'string' && h.match(OPEN_RX);
    if (!m || h.indexOf('dnpurpose') >= 0) return;
    DIA[k] = m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + pesc(DIAGRAMS_EY.purpose[k]) + '</p>' + h.slice(m[0].length);
  });
}
const DIAGRAMS_EY_PURPOSE = DIAGRAMS_EY ? DIAGRAMS_EY.purpose : {};
if (DIAGRAMS_EY && typeof document !== 'undefined' && document.head && !document.getElementById('diagramsEyCss')) {
  const s = document.createElement('style'); s.id = 'diagramsEyCss'; s.textContent = DIAGRAMS_EY.css; document.head.appendChild(s);
}
