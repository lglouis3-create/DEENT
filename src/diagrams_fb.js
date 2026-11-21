/* ==========================================================================
   DIAGRAMS_FB: three Exam 3 step-throughs redrawn on the anatomy builders (round 2, Agent B)
   ==========================================================================
   Course file, loaded after diagrams_ey.js, diagrams_lg.js and diagrams_oo.js and after
   diagram_fx.js / diagram_fx_fb.js (course.js `files`). Each figure RE-ASSIGNS its own key in DIA and
   DIA_NAMES and writes its Purpose line, so it replaces the figure of the same key that the earlier
   file drew; nothing is added to DIAGRAMS (the groups already list the keys).

     ey-dryeye     Dry eye: where each drug acts              Smith slides 5, 6, 62, 64-67, 69, 71, 73; 11/17 T@57000-@68300
     lg-eyelid     Eyelid closure: steps and purpose          Lam slides 71-73; her handout; 11/19 T@86335-@87300
     oo-eye-entry  How an eye drop gets into the eye          Sikazwe slides 29-30; 11/18 T@43104-@45400

   Every fact, number and citation is the one of the figure it replaces (diagrams_ey.js DRYEYE,
   diagrams_lg.js LID, diagrams_oo.js ENTRY): the captions and figcaptions are copied word for word. The
   picture is the anatomy of the slides (Smith slide 5 and Lam slide 72 for the lacrimal system; Smith
   slide 6 and Sikazwe slide 29 for the layers; Sikazwe slides 29-30 for the routes), redrawn as vector.
   Rules as STEPPERS.md: the same thing keeps the same data-k in every step it is in; data-k values are
   unique in a step; opacity only as an attribute; no shape has its own transform; colours only as
   classes and every colour has a text label.
   Check: node diagrams_fb_check.js, and stepper_test.js for the motion.
   ========================================================================== */
const DIAGRAMS_FB = (() => {
  if (typeof Anat === 'undefined' || !Anat.fbStepper || typeof DIA === 'undefined') return null;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const T = (x, y, s, k, c = 'fb-t', a = 'start', op) => `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}"${op != null ? ` opacity="${op}"` : ''}>${esc(s)}</text>`;
  const Ls = (x, y, arr, k, c = 'fb-t', a = 'start', dy = 13) => arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a)).join('');
  const R = (x, y, w, h, k, c = 'box', rx = 6, op) => `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"${op != null ? ` opacity="${op}"` : ''}/>`;
  const P = (d, k, c = 'fb-arr', op) => `<path class="${c}" data-k="${k}" d="${d}"${op != null ? ` opacity="${op}"` : ''}/>`;
  const E = (cx, cy, rx, ry, k, c = 'fb-cell') => `<ellipse class="${c}" data-k="${k}" cx="${r1(cx)}" cy="${r1(cy)}" rx="${rx}" ry="${ry}"/>`;
  /* a plain arrow: the line and a small triangle head at its end (no SVG marker, which a hidden step would not draw) */
  const AR = (d, k, c = 'fb-arr') => {
    const n = d.match(/-?[\d.]+/g).map(Number), ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
    const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, s = 7, w = 3.6, bx = ex - ux * s, by = ey - uy * s;
    return P(d, k, c) + `<polygon class="fb-arrh" data-k="${k}^" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}"/>`;
  };
  const LD = (x1, y1, x2, y2, k) => Anat.lead(x1, y1, x2, y2, k, {});
  const LAC_ALL = ['nose', 'gland', 'ducts', 'eyew', 'iris', 'pupil', 'lidU', 'lidL', 'lidLp', 'lidC', 'lash', 'pocket', 'can1', 'can2', 'pup1', 'pup2', 'sac', 'nld'];
  const dimExcept = (keep = []) => LAC_ALL.filter(p => keep.indexOf(p) < 0);
  const L = Anat.lacrimal;
  const lfl = (k, key, o) => Anat.flow(L.flows[k], key, Object.assign({y: 14}, o));
  const lpl = (cx, cy, r, k, ry) => Anat.pulse(cx, cy, r, k, {y: 14, ry});

  /* ---------------------------------------------------------------------
     1. ey-dryeye: dry eye (keratoconjunctivitis sicca). Slide 5 (lacrimal system), slide 6 (three layers
     of the tears), slides 62, 64-67, 69, 71, 73; 11/17 T@57000-@68300. Steps and facts of diagrams_ey.js DRYEYE.
     --------------------------------------------------------------------- */
  const DRYEYE = (() => {
    const h = 376;
    const glandLab = {gland: {lines: ['Lacrimal glands and ducts'], at: [6, 12], to: [38, 24], from: [30, 16]}};
    const tf = (thin) => Anat.tearFilm({x: 6, y: 240, thin, label: ['lipid', thin ? 'wthin' : 'wthick', 'mucin', 'cornea']});
    const zoomBox = R(242, 52, 114, 148, 'zb', 'an-tissue', 8);
    const zlead = LD(92, 48, 242, 60, 'zlead');
    /* a drug tag in the band: the name (bold) and what it does, as short lines */
    const drugBox = (x, w, lines, k, nameLines, wide) => {
      const rows = wide ? Math.max(lines.length, nameLines.length) : lines.length + nameLines.length;
      return R(x, 254, w, 14 + rows * 12.5, 'db' + k, 'fb-drug', 5) + Ls(x + 8, 269, nameLines, 'dn' + k, 'fb-tb', 'start', 12.5) +
        Ls(x + 8 + (wide ? 92 : 0), 269 + (wide ? 0 : nameLines.length * 12.5), lines, 'dl' + k, 'fb-t', 'start', 12.5);
    };

    /* step 1: inflammation in the lacrimal system lowers tear production */
    const s1 = L({hi: ['gland'], dim: ['nose', 'ducts', 'can1', 'can2', 'pup1', 'pup2', 'sac', 'nld'], label: ['gland'], lab: glandLab}) + lfl('tear', 'f-tear', {drift: true, lane: false, head: false}) +
      T(104, 52, 'Inflammation', 'inf0', 'fb-tb') + T(104, 65, 'T cells, cytokines', 'inf1', 'fb-t') +
      T(40, 198, 'Tears (basal tear film)', 'tearT', 'fb-t') + LD(112, 186, 112, 164, 'tearL') +
      Ls(246, 62, ['Risks:', 'older age, female', 'Medications may', 'cause it:', 'antihistamines,', 'decongestants,', 'antidepressants,', 'hormone', 'replacement', 'therapy'], 'rk', 'fb-t', 'start', 13) +
      tf(true) + Ls(196, 276, ['Tear production', 'falls: DRY EYE'], 'dry', 'fb-w', 'start', 13);

    /* step 2: lifitegrast blocks LFA-1 binding ICAM-1 on the T cell */
    const base2 = L({dim: dimExcept(['gland']), hi: ['gland'], label: ['gland'], lab: glandLab});
    const tc = E(299, 82, 44, 20, 'tc') + T(299, 80, 'T cell', 'tc0', 'fb-tb', 'middle') + T(299, 93, '(leukocyte)', 'tc1', 'fb-t', 'middle');
    const lfa = P('M299 102 L299 144', 'lfa', 'fb-rec') + T(286, 118, 'LFA-1', 'lfaT', 'fb-t', 'end');
    const icam = R(258, 146, 82, 18, 'icam', 'fb-cell', 4) + T(299, 159, 'ICAM-1', 'icamT', 'fb-tb', 'middle');
    const blk = P('M283 130 L305 130', 'blk', 'fb-blk') + T(309, 134, 'blocked', 'blkT', 'fb-w');
    const s2 = base2 + zlead + zoomBox + tc + lfa + icam + blk + lpl(294, 116, 13, 'pl2', 13) +
      T(299, 182, 'LFA-1 binds ICAM-1:', 'adh0', 'fb-t', 'middle') + T(299, 195, 'adhesion, cytokines', 'adh1', 'fb-t', 'middle') +
      drugBox(6, 348, ['binds LFA-1, blocks its interaction', 'with ICAM-1: T cells adhere less and', 'secrete fewer inflammatory cytokines'], 'l', ['Lifitegrast', '(drops)'], true);

    /* step 3: cyclosporine binds cyclophilin, the complex inhibits calcineurin; loteprednol is a corticosteroid */
    const pill = (y, t, k, c, op) => R(256, y, 100, 16, 'p' + k, c, 5, op) + T(306, y + 12, t, 'pt' + k, 'fb-t', 'middle', op);
    const chain = pill(58, 'cyclosporine', 'a', 'fb-drug') + AR('M306 75 L306 84', 'ca1') +
      pill(86, 'cyclophilin', 'b', 'fb-enz') + AR('M306 103 L306 122', 'ca2') + P('M294 112 L318 112', 'blk3', 'fb-blk') + T(290, 116, 'inhibits', 'inh', 'fb-w', 'end') +
      pill(124, 'calcineurin', 'c', 'fb-enz') + AR('M306 141 L306 150', 'ca3') +
      pill(152, 'NFAT', 'd', 'fb-enz', 0.5) + AR('M306 169 L306 178', 'ca4') + R(256, 180, 100, 16, 'pe', 'fb-cell', 5, 0.5) + T(306, 192, 'IL-2: T cells', 'pte', 'fb-t', 'middle', 0.5);
    const s3 = L({dim: dimExcept(['gland']), hi: ['gland'], label: ['gland'], lab: glandLab}) + zlead + zoomBox + chain + lpl(306, 112, 15, 'pl3', 12) +
      drugBox(6, 204, ['binds cyclophilin; the complex', 'inhibits calcineurin: less IL-2,', 'less inflammation'], 'c', ['Cyclosporine (drops)'], false) +
      drugBox(216, 138, ['(corticosteroid', 'drops):', 'anti-inflammatory'], 'p', ['Loteprednol'], false);

    /* step 4: varenicline in the nose, the trigeminal parasympathetic pathway, more basal tear film */
    const nerve = Anat.flow('M290 208 C330 196 348 150 348 100 L348 46 L100 46', 'f-nerve', {hs: 1});
    const s4 = L({label: ['nose', 'gland'], lab: glandLab, dim: dimExcept(['nose', 'gland'])}) + nerve + lfl('tear', 'f-tear', {lane: false}) +
      Anat.pulse(248, 224, 56, 'pl4', {ry: 26}) + T(190, 40, 'parasympathetic', 'para', 'fb-t', 'middle') +
      Ls(230, 156, ['nicotinic ACh', 'receptor →', 'trigeminal nerve'], 'nic', 'fb-t', 'start', 13) +
      tf(false) + drugBox(196, 158, ['(nasal spray)', 'nicotinic agonist', 'in the nose'], 'v', ['Varenicline'], false);

    return Anat.fbStepper('ey-dryeye', 'Dry eye: where each drug acts', [
      ['Dry eye (keratoconjunctivitis sicca): inflammation in the lacrimal system lowers tear production (slides 62, 64; 11/17 T@57918).', s1],
      ['Lifitegrast: LFA-1 on leukocytes binds ICAM-1; blocking it may inhibit T-cell adhesion and cytokine secretion (slide 71; 11/17 T@64155).', s2],
      ['Cyclosporine binds cyclophilin; the complex inhibits calcineurin, so less IL-2; loteprednol is a corticosteroid (slides 65–67, 69; 11/17 T@60561).', s3],
      ['Varenicline: nasal nicotinic receptors activate the trigeminal parasympathetic pathway: more basal tear film (slide 73; 11/17 T@67641).', s4],
    ], h, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 62, 64–67, 69, 71 and 73 (Dr. Smith); lecture 11/17, T@57000–@68300. ' +
      'Slide 65: calcineurin inhibitors act in the signal cascade after signals 1 and 2, leading to IL-2 transcription; slide 66 (Golan Fig 44-5): cyclosporine binds ' +
      'cyclophilin, tacrolimus binds FKBP, and active calcineurin activates NFAT for the IL-2 gene. Oral cyclosporine is not used for dry eye: it is a significant ' +
      'immunosuppressant (slide 67; 11/17 T@62500). Lifitegrast: remove contact lenses, reinsert 15 minutes after the dose (slide 71). ' +
      'The anatomy is redrawn after slide 5 (lacrimal system) and slide 6 (the tears have three layers: lipids, aqueous, mucins).');
  })();

  /* ---------------------------------------------------------------------
     2. lg-eyelid: eyelid closure, and why. Lam slides 71-73 and her handout; 11/19 T@86335-@87300.
     The lacrimal system is drawn after slide 72 (and Smith slide 5); the pouch after slide 73.
     --------------------------------------------------------------------- */
  const LID = (() => {
    const h = 366;
    const bottle = (x, y) => R(x, y, 34, 28, 'bt', 'fb-bot', 5) + P(`M${x + 10} ${y + 28} L${x + 24} ${y + 28} L${x + 21} ${y + 42} L${x + 13} ${y + 42} Z`, 'bn', 'fb-bot') +
      P(`M${x + 14} ${y + 42} L${x + 20} ${y + 42} L${x + 17} ${y + 52} Z`, 'tip', 'fb-bot');
    const band = (lines, k) => Ls(6, 270, lines, k, 'fb-t');
    const all = dimExcept([]);
    /* 1: wash hands, the tip touches nothing */
    const s1 = L({dim: all}) + bottle(262, 28) + T(246, 98, 'dropper', 'btl', 'fb-tb') + T(246, 111, 'tip touches nothing', 'btl2', 'fb-w') +
      band(['Wash your hands; remove contacts, if applicable.', 'The bottle tip touches nothing: not the eye,', 'the hands or any surface.'], 'a');
    /* 2: pull the lower lid out into a pocket */
    const s2 = L({pocket: true, dim: all.filter(p => p !== 'pocket' && p !== 'lidLp'), label: ['pocket']}) + bottle(262, 28) + T(246, 98, 'dropper', 'btl', 'fb-tb') +
      AR('M72 168 L72 196', 'pa') + T(62, 188, 'pull down', 'pd', 'fb-k', 'end') +
      band(['Tilt the head back. Pull the lower lid out', 'and down to form a pocket.'], 'b');
    /* 3: look at the dropper, one drop in the pocket */
    const s3 = L({pocket: true, dim: all.filter(p => p !== 'pocket' && p !== 'lidLp'), label: ['pocket'], lab: {pocket: {lines: ['one drop in the pocket'], at: [116, 184], anchor: 'middle'}}}) +
      bottle(100, 22) + T(142, 44, 'dropper', 'btl', 'fb-tb') + T(142, 57, 'look at the tip', 'lk', 'fb-t') +
      P('M116 164 C111 171 111 178 116 178 C121 178 121 171 116 164 Z', 'drop', 'fb-drop') +
      band(['Look at the dropper and place one drop in the', 'pocket. Release the lid slowly.'], 'c');
    /* 4: close the eyes, press the inner corner, do not squeeze or rub */
    const pr = `<path class="fb-press" data-k="prs" d="${Anat.frame({x: 186, y: 130}).d(Anat.ell(0, 0, 10, 10))}"/>`;
    const s4 = L({closed: true, dim: all.filter(p => p !== 'lidC' && p !== 'lash')}) + pr + T(128, 176, 'press gently', 'pr1', 'fb-k') + T(128, 189, '1–2 minutes', 'pr2', 'fb-k') + LD(164, 166, 180, 142, 'prl') +
      T(24, 214, 'do not squeeze or rub', 'nq', 'fb-w') +
      band(['Close the eyes and lightly press the inner corner', 'for 1 to 2 minutes. Blot excess solution.'], 'd');
    /* 5: why: lower nasolacrimal drainage, systemic absorption, severity of systemic side effects */
    const blk = P('M203 103 L203 119', 'blk1', 'fb-blk') + P('M205 139 L205 155', 'blk2', 'fb-blk');
    const s5 = L({closed: true, hi: ['sac', 'nld'], label: ['gland', 'can1', 'sac', 'nld', 'nose']}) + pr + lfl('stub', 'f-stub', {lane: false, head: false}) + blk +
      T(20, 214, '↓ nasolacrimal drainage', 'drl', 'fb-w') + LD(140, 206, 200, 158, 'drL') +
      R(6, 258, 348, 46, 'chn', 'fb-bag') +
      Ls(14, 273, ['pressed corner → ↓ nasolacrimal drainage', '→ ↓ systemic absorption', '→ ↓ severity of systemic side effects'], 'e', 'fb-tb');
    return Anat.fbStepper('lg-eyelid', 'Eyelid closure: steps and purpose', [
      ['Wash your hands first; the bottle tip must touch no eye, hand or surface, so the solution stays clean (slides 71, 73; T@86335).', s1],
      ['Tilt the head back and pull the lower lid down and out to form a pocket (slide 73; T@86951).', s2],
      ['Look at the dropper, place one drop in the pocket, then release the lid slowly (slide 73; T@86951).', s3],
      ['Close the eyes, do not squeeze or rub, and press the inner corner gently for 1–2 minutes (slides 72–73; T@87190).', s4],
      ['Why: pressing the inner corner lowers nasolacrimal drainage, so systemic absorption falls and systemic side effects are milder (slide 72).', s5],
    ], h, 'Schematic of the front of one eye, drawn after Lam_Glaucoma.pdf slide 71 (do not touch the dropper bottle tip), slide 72 (eyelid closure lowers ' +
      'nasolacrimal drainage, systemic absorption and the severity of systemic side effects; the lacrimal system is redrawn from that slide’s picture) and slide 73 (wash hands and remove contacts; tilt back, ' +
      'pull out a pouch of the lower lid; place the drop looking at the dropper, release the lid slowly; close the eyes and lightly press the inside ' +
      'corners; blot). The handout says the lids stay closed for 2 minutes without squeezing or rubbing; Dr. Lam, lecture 11/19, T@86335 (the tip: ' +
      'bacteria), T@86951–@87300 (clean hands, pouch, press the corner for 1 or 2 minutes, not hard enough to cause pain).');
  })();

  /* ---------------------------------------------------------------------
     3. oo-eye-entry: how a drop gets into the eye. Slide 29 (cornea: lipid/water/lipid sandwich, less
     drug entry; conjunctiva: influx and efflux transporters, esterase/CYP enzymes, more drug entry),
     slide 30 (topical drug in tear; ocular absorption under 10% of the dose; corneal route primary,
     small lipophilic drugs; conjunctival and scleral route, large hydrophilic drugs; aqueous humor;
     ocular bioavailability; systemic absorption over 50%, major routes conjunctiva of eyes and nose);
     11/18 T@43104-@45400.
     --------------------------------------------------------------------- */
  const ENTRY = (() => {
    const h = 350;
    const EO = {x: 6, y: 24};
    const eye = o => Anat.eyeFront(Object.assign({}, EO, o));
    const tear = E(110, 38, 94, 15, 'tear', 'box') + T(110, 42, 'Topical drug in tear', 'teart', 'fb-tb', 'middle');
    const oc = T(84, 62, 'Ocular absorption', 'oc1', 'fb-t') + T(84, 75, 'under 10% of the dose', 'oc2', 'fb-w');
    const bio = R(40, 246, 170, 24, 'bio', 'fb-bag') + T(125, 262, 'Ocular bioavailability', 'bioT', 'fb-tb', 'middle');
    const corF = () => Anat.flow('M68 52 L68 244', 'f-cor', {});
    const conF = () => Anat.flow('M28 50 L40 120', 'f-con', {}) + Anat.flow('M10 222 L40 244', 'f-con2', {});
    const lab = {ah: {lines: ['Aqueous', 'humor'], at: [112, 116], anchor: 'middle'}};
    /* step 1: the whole drop */
    const s1 = eye({label: ['cornea', 'conj', 'sclera']}) + tear + oc + AR('M68 54 L68 106', 'a0') +
      bio + AR('M186 160 L212 160', 'sya') + Ls(216, 142, ['Systemic absorption', 'over 50% of the dose'], 'sy', 'fb-tb', 'start', 13) + T(216, 180, 'mainly conjunctiva,', 'sy2', 'fb-t') + T(216, 193, 'nose', 'sy3', 'fb-t');
    /* step 2: the cornea */
    const cb = Anat.cornea({x: 216, y: 98, hi: ['w'], label: ['l1', 'w', 'l2', 'top']});
    const s2 = bio + eye({hi: ['cornea'], label: ['ah'], lab}) + tear + oc + corF() + LD(134, 112, 216, 116, 'zl1') + LD(150, 128, 216, 178, 'zl2') + cb +
      Ls(216, 198, ['lipid / water / lipid', 'less drug entry', 'small, lipophilic drugs'], 'cn', 'fb-t', 'start', 13);
    /* step 3: the conjunctiva */
    const chan = R(228, 112, 12, 64, 'ch1', 'fb-cell', 3) + R(262, 112, 12, 64, 'ch2', 'fb-cell', 3) + AR('M234 120 L234 168', 'in1', 'fb-rec') + AR('M268 168 L268 120', 'out1', 'fb-rec') +
      E(298, 136, 7, 7, 'en1', 'fb-enz') + E(316, 158, 7, 7, 'en2', 'fb-enz') + E(334, 132, 7, 7, 'en3', 'fb-enz');
    const s3 = bio + eye({hi: ['conj'], label: ['ah'], lab}) + tear + oc + conF() + LD(180, 140, 216, 112, 'zl3') + LD(186, 186, 216, 178, 'zl4') +
      R(216, 110, 130, 68, 'cb', 'an-tissue', 4) + T(281, 104, 'Conjunctiva', 'cbT', 'fb-tb', 'middle') + chan +
      Ls(216, 196, ['influx and efflux', 'transporters;'], 'cj', 'fb-t', 'start', 13) + E(220, 218, 4.5, 4.5, 'lg1', 'fb-enz') + T(227, 222, 'esterase, CYP enzymes', 'cj2', 'fb-t') +
      T(216, 235, 'more drug entry', 'cj3', 'fb-ok') + T(216, 248, 'large, hydrophilic drugs', 'cj4', 'fb-tb');
    /* step 4: both routes lead to ocular bioavailability */
    const s4 = bio + eye({label: ['ah'], lab}) + tear + oc + corF() + conF() +
      Ls(216, 116, ['Cornea:', 'primary route;', 'small, lipophilic', 'drugs'], 'r1', 'fb-t', 'start', 13) + Ls(216, 190, ['Conjunctiva:', 'large, hydrophilic', 'drugs; its enzymes', 'can activate a prodrug'], 'r2', 'fb-t', 'start', 13);
    return Anat.fbStepper('oo-eye-entry', 'How an eye drop gets into the eye', [
      ['Of a drop in the tear film, under 10% of the dose is absorbed into the eye and over 50% systemically (slide 30).', s1],
      ['The cornea is a lipid / water / lipid sandwich: less drug gets in, and it is the route for small, lipophilic drugs (slides 29–30; T@43104).', s2],
      ['The conjunctiva has transporters and enzymes; more drug gets in, by the route for large, hydrophilic drugs (slides 29–30; T@44206).', s3],
      ['Both routes lead to the drug’s ocular bioavailability; the conjunctiva’s enzymes can activate a prodrug (slide 30; T@44422, T@45075).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 29 (cornea and conjunctiva) and slide 30 (eye drug ADME flow: under 10% ocular, over 50% systemic; ' +
      'corneal route primary for small, lipophilic drugs; conjunctival and scleral route for large, hydrophilic drugs); Dr. Sikazwe, lecture 11/18, ' +
      'T@43104–@45400 (tightly packed cells; a larger surface; conjunctival enzymes and prodrugs).');
  })();

  const PURPOSE = {
    'ey-dryeye': 'Shows how inflammation lowers tear production in dry eye and where lifitegrast, cyclosporine, loteprednol and varenicline act, so you can name each drug’s target and route.',
    'lg-eyelid': 'Shows the steps of eyelid closure and what the closure does, so you can counsel a patient on technique and say why it lowers systemic side effects.',
    'oo-eye-entry': 'Shows the two routes an eye drop takes into the eye, the cornea and the conjunctiva, so you can predict the route from a drug’s lipophilicity and size.',
  };
  const NAMES = {
    'ey-dryeye': 'Dry eye: inflammation and where each drug acts',
    'lg-eyelid': 'Eyelid closure: steps and why',
    'oo-eye-entry': 'Eye drops: cornea and conjunctiva routes',
  };
  return {figs: {'ey-dryeye': DRYEYE, 'lg-eyelid': LID, 'oo-eye-entry': ENTRY}, purpose: PURPOSE, names: NAMES};
})();

if (DIAGRAMS_FB) {
  const OPEN_RX = /^<figure class="fig[^"]*">/;
  const pesc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_FB.figs).forEach(k => {
    const h = DIAGRAMS_FB.figs[k], m = h.match(OPEN_RX);
    DIA[k] = (m && h.indexOf('dnpurpose') < 0) ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + pesc(DIAGRAMS_FB.purpose[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_FB.names);
}
