/* ==========================================================================
   DIAGRAMS_EY_FA2: Exam 3 round 3, Agent A: the glaucoma figures drawn to match Dr. Smith's slides
   (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)
   ==========================================================================
   Course file, loaded after diagram_fx.js, diagram_fx_fa.js, diagram_fx_fa2.js, diagrams_ey.js and
   diagrams_ey_fa.js. It re-assigns DIA[key] and DIA_NAMES[key] for ey-aqueous, ey-angle and ey-cai
   (keys, Purpose lines, figcaptions, facts and citations as in diagrams_ey.js and diagrams_ey_fa.js)
   and adds ey-targets to DIA, DIA_NAMES and to the Eye group of DIAGRAMS (after ey-aqueous).
     ey-aqueous  the eye as slide 15 draws it (new first step names every part the slide labels, with a
                 fixed colour key), then inflow, outflow, slide 16's ciliary-process zoom (receptors,
                 enzyme, M3 marks), and the three drug steps.
     ey-targets  new: where each drug class Smith teaches acts, on the slide-15 eye, class colours as in
                 the Guides (blue PG, green beta-blocker, amber alpha-2, purple CA inhibitor, red
                 cholinergic, magenta Rho kinase).
     ey-angle    the eye as slide 14 draws it (front-to-back section, an angle on each side), panels A-C.
     ey-cai      slide 16's ciliary epithelium and enzyme, then slide 27's kidney cell (unchanged).
   STEPPERS.md rules: the same thing carries the same data-k in every step it is in; data-k values are
   unique inside a step; opacity is an attribute; no shape carries a transform; colours are classes only;
   every coloured mark has a text label. At most three animated elements per step.
   Check: node diagrams_ey_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_EY_FA2 = (() => {
  if (typeof stepper !== 'function' || typeof Anat === 'undefined' || !Anat.fa2 || !Anat.fa) return null;
  const fa = Anat.fa, fa2 = Anat.fa2, T = fa.T, TL = fa.TL, C = fa2.cls, E0 = fa2.eye, FL = fa2.eye.flows, A = fa2.eye.A;
  const lead = (x1, y1, x2, y2, k) => Anat.lead(x1, y1, x2, y2, k);
  const pl = (cx, cy, r, k) => Anat.pulse(cx, cy, r, k);
  const HIDE = ['conj', 'pp', 'epi'];                              /* parts only the "name the parts" step shows */
  const E = (o = {}) => E0(Object.assign({}, o, {omit: HIDE.concat(o.omit || [])}));
  const EP = (o = {}) => E0(o);

  /* ---------------------------------------------------------------------
     1. ey-aqueous. Slides 14-16 (flow, the two routes, receptors and enzymes), 18, 22, 26 (inflow
     drugs), 32, 34, 37, 41 (outflow drugs); 11/13 T@25530-@33000, T@39934-@40600, T@43883-@53260;
     11/17 T@24556-@36600. The eye is slide 15's; step 4 is slide 16's zoom.
     --------------------------------------------------------------------- */
  const AQUEOUS = (() => {
    const BY = 334, K = fa2.key();
    const inFlow = o => fa.flow(FL.inflow, 'f-in', o);
    const outFlow = o => fa.flow(FL.out, 'f-out', o);
    const uvFlow = o => fa.flow(FL.uv, 'f-uv', Object.assign({drift: true}, o));
    const mainTag = T(4, 224, 'MAIN route', 'mainT', 'fa-k') + lead(66, 220, 133, 224, 'mainL');
    const uvTag = T(160, 318, 'Uveoscleral route', 'uvT', 'fa-tb') + T(160, 331, 'smaller route', 'minT', 'fa-k') + lead(158, 314, 144, 296, 'uvL');

    /* step 1: name the parts */
    const parts = T(6, BY, 'The flow, in the slide’s words:', 'ptT', 'fa-k') +
      fa.chip(6, 342, 104, ['Posterior', 'chamber'], 'p1') + fa.arrow('M111 359 L125 359', 'par1') +
      fa.chip(126, 342, 104, ['Anterior', 'chamber'], 'p2') + fa.arrow('M231 359 L245 359', 'par2') +
      fa.chip(246, 342, 108, ['Trabecular', 'meshwork'], 'p3');
    const s1 = EP({omit: ['vein'], label: ['cornea', 'ac', 'iris', 'lens', 'pc', 'proc', 'epi', 'musc', 'pp', 'sclera', 'conj', 'tm', 'sc', 'flow']}) +
      fa.flow(FL.inflow, 'f-in', {dim: true}) + K + parts;

    /* step 2: inflow */
    const chain = (() => {
      const cy = 362;
      return T(6, BY, 'INFLOW:', 'inT', 'fa-k') + T(62, BY, 'made all the time', 'alw', 'fa-t') +
        fa.chip(6, cy - 24, 112, ['Ciliary body', 'epithelium makes', 'aqueous humor'], 'i1') +
        fa.chip(138, cy - 17.5, 94, ['Posterior', 'chamber'], 'i2') + fa.chip(252, cy - 24, 102, ['Pupil, then', 'anterior', 'chamber'], 'i3') +
        fa.arrow(`M119 ${cy} L137 ${cy}`, 'ar1') + fa.arrow(`M233 ${cy} L251 ${cy}`, 'ar2');
    })();
    const s2 = E({hi: ['cbody'], omit: ['vein'], dim: ['sclera', 'tm', 'sc', 'vein', 'musc', 'muscl'], label: ['cbody', 'pc', 'ac', 'cornea', 'lens', 'pupil', 'sclera']}) +
      inFlow() + K + chain;

    /* step 3: outflow */
    const outCards = T(6, BY, 'OUTFLOW:', 'outT', 'fa-k') +
      fa.R(6, 339, 170, 58, 'oc1', 'fa-card') + T(13, 353, 'MAIN route', 'oc1h', 'fa-k') +
      TL(13, 366, ['Trabecular meshwork,', 'then Schlemm’s canal,', 'blood vessels'], 'oc1t') +
      fa.R(184, 339, 170, 58, 'oc2', 'fa-card') + T(191, 353, 'smaller route', 'oc2h', 'fa-k') +
      TL(191, 366, ['Uveoscleral: between the', 'uvea and the sclera,', 'spreads into the tissues'], 'oc2t');
    const s3 = E({dim: ['lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['tm', 'sc', 'vein', 'sclera']}) +
      inFlow() + outFlow() + uvFlow() + K + mainTag + uvTag + outCards;

    /* step 4: slide 16's zoom on a ciliary process */
    const TO = {x: -31.2, y: 66.4, s: 0.4};
    const cx = 240, cy = 222, R = 104;
    const Z = fa2.proc(cx, cy, R, {cls: {b: 2, a2: 3, ca: 4}});
    const P = Z.pts;
    const pr = E0.anchor('proc', TO), tmP = E0.anchor('tm', TO), irP = E0.anchor('irisEnd', TO);
    const mini = E({omit: ['sc', 'vein', 'sclera'], x: TO.x, y: TO.y, s: TO.s});
    const cone = `<path class="an-lead" data-k="zl1" d="M${pr[0]} ${pr[1]} L141 190"/><path class="an-lead" data-k="zl2" d="M${pr[0]} ${pr[1]} L222 120"/>`;
    const m3 = T(6, 112, 'M3', 'm3a', 'fa-m3') + lead(20, 115, tmP[0] - 1, tmP[1] - 1, 'm3al') +
      T(72, 108, 'M3', 'm3b', 'fa-m3') + lead(86, 111, irP[0] - 1, irP[1] - 3, 'm3bl');
    const zl = (k, c, x1, y1, x2, y2) => C.lead(x1, y1, x2, y2, k, c);
    const zoomLabels =
      TL(4, 214, ['β receptor'], 'zb', 'fa-t fa-halo') + T(4, 227, 'β-blockers', 'zbc', 'fa-tk2 fa-halo') + zl('zbl', 2, 64, 211, P.beta[0] - 7, P.beta[1] + 2) +
      T(4, 255, 'α1 receptor', 'za1', 'fa-t fa-halo') + Anat.lead(64, 252, P.a1[0] - 6, P.a1[1] + 1, 'za1l') +
      TL(4, 284, ['ciliary', 'blood supply'], 'zv', 'fa-t fa-halo') + Anat.lead(64, 286, 232, 268, 'zvl') +
      T(4, 316, 'ciliary body', 'zcb', 'fa-t fa-halo') + Anat.lead(60, 313, 218, 290, 'zcbl') +
      T(268, 131, 'α2 receptor', 'za2', 'fa-t fa-halo') + T(268, 144, 'α2 agonists', 'za2c', 'fa-tk3 fa-halo') + zl('za2l', 3, 266, 138, P.a2[0] + 6, P.a2[1] - 1) +
      TL(272, 190, ['carbonic', 'anhydrase'], 'zca', 'fa-t fa-halo') + T(272, 216, 'CA inhibitors', 'zcac', 'fa-tk4 fa-halo') + zl('zcal', 4, 280, 176, 280, 181);
    const zband = T(6, BY, 'Also marked on slide 16:', 'zbT', 'fa-k') +
      fa.card(6, 340, 170, 'M3', ['on the iris and on the', 'trabecular meshwork'], 'zm') +
      fa.card(184, 340, 170, 'β2', ['written beside the', 'β receptor label'], 'zq');
    const s4 = mini + cone + m3 + Z.svg + zoomLabels + K + zband;

    /* steps 5-7: the drug classes on the eye */
    const inDrugs = T(6, BY, '↓ INFLOW:', 'inD', 'fa-w') +
      C.chip(6, 340, 108, ['β-blockers', 'block β', 'receptors'], 'bb', 2) + C.chip(126, 340, 108, ['α2 agonists', 'act on α2', 'receptors'], 'a2', 3) +
      C.chip(246, 340, 108, ['CA inhibitors', 'block carbonic', 'anhydrase'], 'ca', 4);
    const tmDrugs = T(6, BY, '↑ OUTFLOW:', 'tmD', 'fa-w') +
      C.chip(6, 340, 170, ['M3 agonists,', 'echothiophate:', 'contract the meshwork'], 'm3', 5) + C.chip(184, 340, 170, ['netarsudil:', 'less stiff', 'meshwork'], 'rk', 6);
    const uvDrugs = T(6, BY, '↑ OUTFLOW:', 'uvD', 'fa-w') +
      C.chip(6, 340, 170, ['PG agonists:', 'relax the ciliary', 'muscle (PGF2α receptor)'], 'pg', 1) + C.chip(184, 340, 170, ['brimonidine:', 'some (extra)'], 'br', 3);

    const s5 = E({hi: ['cbody'], omit: ['vein'], dim: ['sclera', 'tm', 'sc', 'vein', 'musc', 'muscl'], label: ['cbody', 'pc']}) +
      inFlow() + outFlow({dim: true}) + uvFlow({dim: true}) + pl(222, 205, 22, 'pl1') + K + inDrugs;
    const s6 = E({hiS: ['tm', 'sc'], dim: ['cbody', 'musc', 'muscl', 'lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['tm', 'sc']}) +
      inFlow() + outFlow() + uvFlow({dim: true}) + pl(181, 151, 20, 'pl2') + K + tmDrugs;
    const s7 = E({hi: ['musc'], omit: ['vein'], dim: ['tm', 'sc', 'vein', 'lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['musc'], lab: {musc: {at: [4, 214], to: [166, 214], from: [80, 211]}}}) +
      inFlow({dim: true}) + outFlow({dim: true}) + uvFlow() + pl(182, 222, 28, 'pl3') + K + uvTag + uvDrugs;
    return fa.stepper('ey-aqueous', 'Aqueous humor: inflow and outflow', [
      ['The parts of the flow pathway, labelled as on slide 15; the colours in the key stay the same in every step (slides 14–15).', s1],
      ['Inflow: the ciliary body makes aqueous humor all the time; it flows through the pupil into the anterior chamber (slides 14–15; 11/13 T@25530).', s2],
      ['Outflow: most drains through the trabecular meshwork and Schlemm’s canal; some by the uveoscleral route (slides 14–16; 11/13 T@32688).', s3],
      ['Slide 16 zooms on a ciliary process: β-blockers act on the β receptor, α2 agonists on the α2 receptor, CA inhibitors on the enzyme (slides 16, 18, 22, 26).', s4],
      ['Drugs that decrease inflow act on the ciliary body: β-blockers, α2 agonists and carbonic anhydrase inhibitors (slides 16, 18, 22, 26; 11/13 T@39934).', s5],
      ['Trabecular outflow up: M3 agonists and echothiophate contract the sphincter and meshwork; netarsudil makes it less stiff (slides 32, 34, 41; 11/17 T@24556).', s6],
      ['Uveoscleral outflow rises: PG agonists relax the ciliary muscle (also some trabecular); brimonidine adds some (slides 22, 37; 11/17 T@31096).', s7],
    ], 458, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 14–16, 18, 22, 26, 32, 34, 37 and 41; lectures 11/13, ' +
      'T@19333 and T@28180 (inflow is production, outflow is drainage), T@43883–@60121, and 11/17, T@23400–@36600. The eye is redrawn from slide 15 (labels: cornea, ' +
      'trabecular meshwork, Schlemm’s canal, conjunctiva, anterior chamber, aqueous flow, iris, lens, sclera, pars plana, posterior chamber, ciliary processes, ciliary muscle, ' +
      'ciliary epithelium); step 4 from slide 16 (β receptor with a β2 mark, α2 receptor, α1 receptor, carbonic anhydrase, ciliary blood supply, M3 marks). β-blockers: “not much effect on ' +
      'outflow; MOA not fully understood” (slide 18). PG agonists “do not affect aqueous humor production” (slide 37). Netarsudil inhibits Rho kinase: less ' +
      'contractile tone and fewer fibrosis-related protein deposits in the meshwork, and a change in the permeability of the cells lining Schlemm’s canal (slide 41).');
  })();

  /* ---------------------------------------------------------------------
     2. ey-targets: where each drug class acts. Slide 18 (β-blockers: the β receptor on the ciliary
     body, circled), 22 (α2 agonists: the α2 receptor on the ciliary body, and the uvea and sclera;
     brimonidine: some increase in uveoscleral outflow), 26 (CA inhibitors: carbonic anhydrase,
     circled), 32 and 34 (M3 agonists and AChE inhibitors: the sphincter muscle and the trabecular
     meshwork, both circled as M3), 37 (PG agonists: the PGF2α receptor on the ciliary muscle),
     41 (Rho kinase inhibitor: the meshwork and the lining of Schlemm's canal);
     11/13 T@39934; 11/17 T@24556, T@31096.
     --------------------------------------------------------------------- */
  const TARGETS = (() => {
    const BY = 346;
    const eyeT = (o = {}) => E(o);
    const D = (x, y, k, c, r) => C.dot(x, y, k, c, r || 4.2);
    const ld = (x1, y1, x2, y2, k, c) => C.lead(x1, y1, x2, y2, k, c);
    /* inflow classes: three dots on the ciliary processes, three chips in a row under the eye */
    const pD = [A.p1, A.p2, A.p3];
    const inChip = (x, w, name, k, c, i) => C.chip(x, 308, w, [name], k, c) + ld(x + w / 2, 308, pD[i][0], pD[i][1], 'l' + k, c);
    const inflowMarks = D(pD[0][0], pD[0][1], 'd-b', 2) + D(pD[1][0], pD[1][1], 'd-a', 3) + D(pD[2][0], pD[2][1], 'd-c', 4) +
      inChip(62, 92, 'β-blockers', 'xb', 2, 0) + inChip(162, 92, 'α2 agonists', 'xa', 3, 1) + inChip(262, 94, 'CA inhibitors', 'xc', 4, 2);
    const inBand = T(6, BY, '↓ INFLOW:', 'ibT', 'fa-w') + T(70, BY, 'each lowers aqueous humor production', 'ibU', 'fa-t') +
      C.chip(6, 354, 108, ['β-blockers', 'block β', 'receptors'], 'bb', 2) + C.chip(126, 354, 108, ['α2 agonists', 'act on α2', 'receptors'], 'a2', 3) +
      C.chip(246, 354, 108, ['CA inhibitors', 'block carbonic', 'anhydrase'], 'ca', 4);
    /* trabecular classes: two chips in the anterior chamber, marks on the sphincter end of the iris, the meshwork and the canal */
    const tmMarks = D(181, 143, 'd-m3t', 5) + D(A.irisEnd[0], A.irisEnd[1], 'd-m3i', 5) + D(178, 161, 'd-rkt', 6) + D(A.sc[0], A.sc[1], 'd-rks', 6);
    const acChips = C.chip(212, 82, 130, ['Rho kinase', 'inhibitor'], 'rk', 6) + C.chip(212, 118, 130, ['M3 agonists,', 'echothiophate'], 'm3', 5) +
      ld(212, 96, A.sc[0] + 2, A.sc[1] - 3, 'lrks', 6) + ld(212, 104, 180, 160, 'lrkt', 6) +
      ld(212, 140, 184, 145, 'lm3t', 5) + ld(300, 152, A.irisEnd[0], A.irisEnd[1] - 4, 'lm3i', 5);
    const trBand = T(6, BY, '↑ OUTFLOW, trabecular route:', 'trT', 'fa-w') +
      C.chip(6, 354, 170, ['M3 agonists, echothiophate:', 'contract the sphincter muscle', 'and the meshwork'], 'xm3', 5) +
      C.chip(184, 354, 170, ['netarsudil: less stiff', 'meshwork; changes the', 'canal lining’s permeability'], 'xrk', 6);
    /* uveoscleral classes */
    const uvMarks = D(182, 224, 'd-pg', 1) + D(168, 262, 'd-uv', 3);
    const uvChips = C.chip(4, 196, 112, ['PG agonists', 'PGF2α receptor,', 'ciliary muscle'], 'pg', 1) + ld(116, 218, 178, 224, 'lpg', 1) +
      C.chip(4, 254, 112, ['α2 agonists', 'brimonidine: some', 'uveoscleral'], 'br', 3) + ld(116, 274, 165, 264, 'lbr', 3);
    const uvBand = T(6, BY, '↑ OUTFLOW, uveoscleral route:', 'uvT2', 'fa-w') +
      C.chip(6, 354, 170, ['PG agonists: relax the', 'ciliary muscle (PGF2α', 'receptor)'], 'xpg', 1) +
      C.chip(184, 354, 170, ['brimonidine (α2 agonist):', 'some increase in uveoscleral', 'outflow'], 'xbr', 3);
    const allBand = T(6, BY, '↓ INFLOW:', 'ab1h', 'fa-w') + T(74, BY, 'β-blockers, α2 agonists,', 'ab1a', 'fa-t') + T(74, BY + 13, 'CA inhibitors (ciliary body)', 'ab1b', 'fa-t') +
      T(6, BY + 30, '↑ OUTFLOW:', 'ab2h', 'fa-w') + T(90, BY + 30, 'trabecular route: M3 agonists,', 'ab2a', 'fa-t') + T(90, BY + 43, 'echothiophate, netarsudil', 'ab2b', 'fa-t') +
      T(90, BY + 60, 'uveoscleral route: PG agonists,', 'ab3a', 'fa-t') + T(90, BY + 73, 'brimonidine', 'ab3b', 'fa-t');

    const s1 = eyeT({hi: ['cbody'], omit: ['vein'], dim: ['sclera', 'tm', 'sc', 'musc', 'muscl'], label: ['cbody', 'cornea', 'lens']}) + inflowMarks + pl(220, 201, 20, 'pl1') + inBand;
    const s2 = eyeT({hiS: ['tm', 'sc'], omit: ['vein'], dim: ['cbody', 'musc', 'muscl', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['tm', 'sc', 'cornea', 'lens']}) + acChips + tmMarks + pl(181, 151, 18, 'pl2') + trBand;
    const s3 = eyeT({hi: ['musc'], omit: ['vein'], dim: ['tm', 'sc', 'lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['cornea', 'lens']}) +
      fa.flow(FL.uv, 'f-uv', {drift: true}) + uvMarks + uvChips + T(150, 324, 'Uveoscleral route', 'uvT', 'fa-tb') + lead(160, 318, 146, 298, 'uvL') + pl(182, 224, 26, 'pl3') + uvBand;
    const s4 = eyeT({omit: ['vein'], dim: [], label: ['tm', 'sc', 'cornea', 'lens']}) + inflowMarks + tmMarks + acChips + uvMarks + uvChips + allBand;
    return fa.stepper('ey-targets', 'Where each glaucoma drug class acts', [
      ['Inflow reducers act on the ciliary body: β-blockers on the β receptor, α2 agonists on the α2 receptor, CA inhibitors on the enzyme (slides 18, 22, 26).', s1],
      ['Trabecular route: M3 agonists and echothiophate act on the sphincter muscle and the meshwork; netarsudil on the meshwork and the canal (slides 32, 34, 41).', s2],
      ['Uveoscleral route: PG agonists act at the PGF2α receptor on the ciliary muscle; brimonidine adds some uveoscleral outflow (slides 22, 37; 11/17 T@31096).', s3],
      ['All the classes on one eye, one colour each: three lower inflow, three raise outflow by the routes shown (slides 18, 22, 26, 32, 34, 37, 41).', s4],
    ], 484, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 15, 18, 22, 26, 32, 34, 37 and 41: the eye of slide 15; sites as the drug slides mark them (slide 18 β receptor on the ciliary body; ' +
      'slide 22 α2 receptors on the ciliary body, “binds to the uveoscleral” and some uveoscleral increase with brimonidine; slide 26 carbonic anhydrase; slides 32 and 34 M3 on the ' +
      'sphincter muscle and the trabecular meshwork; slide 37 PGF2α receptor and the ciliary muscle; slide 41 Rho kinase: meshwork stiffness and the endothelial lining of Schlemm’s canal). ' +
      'Lectures 11/13, T@39934–@40600 (inflow and outflow drugs), and 11/17, T@24556 (meshwork) and T@31096 (PGF2α receptor, ciliary muscle, uveoscleral outflow). ' +
      'No site is drawn that the slides or lectures do not state; classes with no slide-marked site on the eye are not placed.');
  })();

  /* ---------------------------------------------------------------------
     3. ey-angle: open-angle vs angle-closure glaucoma. Slides 13-14 (panels A-C); 11/13 T@19603-@20900,
     T@23500-@26600, T@28606-@29351. The picture is slide 14: the eye cut front to back, an angle on
     each side; panel B (left angle) and panel C (right angle) as the slide draws them.
     --------------------------------------------------------------------- */
  const ANGLE = (() => {
    const F = fa2.domeFlows, p = fa2.dp, df = fa2.dflow;
    const ringL = fa.ring(...p(76, 156), 15, 'ringL'), ringR = fa.ring(...p(284, 156), 15, 'ringR');
    const tmL = p(76, 156), tmR = p(284, 156);
    const dimR = ['sclR', 'cbR', 'procR', 'procR2', 'irisR', 'tmR', 'scR'], dimL = ['sclL', 'cbL', 'procL', 'procL2', 'irisL', 'tmL', 'scL'];
    const flowsA = o => df(F.inL, 'f-inL', {dim: true}) + df(F.inR, 'f-inR', {dim: true}) + df(F.tmL, 'f-tmL', o) + df(F.tmR, 'f-tmR', o) +
      df(F.uvL, 'f-uvL', {dim: true}) + df(F.uvR, 'f-uvR', {dim: true});
    const labsA = TL(4, 92, ['Trabecular', 'meshwork'], 'lTM', 'fa-t') + lead(36, 106, tmL[0] + 1, tmL[1] - 2, 'lTMl') +
      TL(4, 176, ['Schlemm’s', 'canal'], 'lSC', 'fa-t') + lead(38, 171, tmL[0] - 8, tmL[1] + 2, 'lSCl') +
      T(30, 48, 'Cornea', 'lCo', 'fa-t') + lead(66, 45, 108, 63, 'lCol') +
      TL(180, 84, ['Anterior', 'chamber'], 'lAC', 'fa-t', 'middle') +
      T(236, 112, 'Iris', 'lIr', 'fa-t') + lead(241, 115, 241, 143, 'lIrl') +
      T(180, 122, 'Pupil', 'lPu', 'fa-t', 'middle') + lead(180, 126, 180, 146, 'lPul') +
      T(180, 186, 'Lens', 'lLe', 'fa-t', 'middle') + T(180, 230, 'Vitreous humor', 'lVi', 'fa-t', 'middle') +
      TL(302, 170, ['Ciliary', 'body'], 'lCb', 'fa-t') + lead(300, 176, 266, 176, 'lCbl') +
      T(304, 214, 'Sclera', 'lSl', 'fa-t') + lead(302, 211, 288, 211, 'lSll') +
      T(4, 258, 'Uveoscleral route', 'lUv', 'fa-tb') + lead(50, 249, 84, 214, 'lUvl');
    const cards = (head, rows, k) => {
      let s = T(6, 284, head, k + 'h', 'fa-tb');
      rows.forEach(([lab, txt], i) => { s += fa.card(6 + (i % 2) * 178, 292 + Math.floor(i / 2) * 52, 170, lab, txt, k + i); });
      return s;
    };
    const s1 = fa2.dome({}) + ringL + ringR + flowsA({}) + labsA +
      cards('Normal drainage', [['Made', ['by the ciliary body']], ['Flows', ['through the pupil into', 'the anterior chamber']],
        ['Drains', ['at the angle (circle),', 'through the meshwork']], ['Goal in glaucoma', ['lower the pressure (IOP)', 'to protect the optic nerve']]], 'n');
    const s2 = fa2.dome({tmL: 'bad', dim: dimR}) + ringL + df(F.inL, 'f-inL', {}) + df(F.inR, 'f-inR', {dim: true}) + df(F.tmL, 'f-tmL', {dim: true}) + df(F.tmR, 'f-tmR', {dim: true}) +
      df(F.uvL, 'f-uvL', {dim: true}) + df(F.uvR, 'f-uvR', {dim: true}) +
      fa.blk(...p(76, 140), ...p(92, 168), 'blkP') +
      TL(4, 72, ['Trabecular', 'meshwork', 'dysfunction', 'with open', 'angle'], 'badT', 'fa-w') + lead(36, 138, tmL[0] - 3, tmL[1] - 8, 'badL') +
      cards('Primary open-angle glaucoma (POAG)', [['Angle', ['open']], ['What fails', ['meshwork dysfunction:', 'drainage not effective']],
        ['Onset', ['gradual; no symptoms until', 'the visual field is lost']], ['How common', ['common in the', 'United States']]], 'o');
    const FR = 'M248 190 C232 178 218 170 200 162 C184 152 194 136 212 136 L236 134';
    const s3 = fa2.dome({irisR: 'bowed', dim: dimL}) + ringR + df(F.inL, 'f-inL', {dim: true}) + df(FR, 'f-inR', {}) + df(F.tmL, 'f-tmL', {dim: true}) + df(F.tmR, 'f-tmR', {dim: true}) +
      df(F.uvL, 'f-uvL', {dim: true}) + df(F.uvR, 'f-uvR', {dim: true}) +
      fa.blk(...p(268, 124), ...p(250, 150), 'blkC') +
      TL(298, 66, ['Forward', 'bowing of', 'iris blocks', 'trabecular', 'meshwork', 'drainage'], 'blkT', 'fa-w') + lead(322, 142, tmR[0] + 12, tmR[1] - 2, 'blkL') +
      /* step 3's cards sit higher and in two columns of their own, so the two lines the narration adds (sentences 3 and 5) fit above the caption */
      T(6, 264, 'Primary angle-closure glaucoma (PACG)', 'ch', 'fa-tb') +
      fa.card(6, 270, 170, 'Angle', ['closed: the iris bows', 'forward over the meshwork'], 'c0') +
      fa.card(184, 270, 170, 'Linked to', ['the shape of the eye and', 'how it sits in the socket', 'also: swelling after a blow', 'or chemical exposure'], 'c1') +
      fa.card(184, 348, 170, 'Onset, pain', ['pressure rises very quickly;', 'significant pain'], 'c2') +
      fa.card(6, 322, 170, 'Urgency', ['medical emergency: lower', 'the IOP quickly; a laser', 'opens the closed angle'], 'c3');
    return fa.stepper('ey-angle', 'Open-angle vs angle-closure glaucoma', [
      ['Normal: aqueous humor drains at the angle (circle), where the iris meets the cornea and sclera (slide 14 panel A; 11/13 T@26451).', s1],
      ['Open angle: the angle stays open but the trabecular meshwork drains poorly; gradual and silent (slides 13, 14 panel B; 11/13 T@29351).', s2],
      ['Angle closure: the iris bows forward and blocks the meshwork; the pressure rises fast and hurts (slides 13, 14 panel C; 11/13 T@28606).', s3],
    ], 456, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 13 and 14 (DiPiro’s Pharmacotherapy 13e, panels A–C; Dr. Smith): the eye cut front to back, ' +
      'cornea, anterior chamber, iris, lens, ciliary body, sclera, vitreous humor, trabecular meshwork, Schlemm’s canal and the uveoscleral route, as in panel A; lecture 11/13, ' +
      'T@19603–@20900 and T@23500–@29400. Both types: the goal of treatment is to decrease the IOP, delaying or preventing disease progression (slide 13). ' +
      'On 11/13 (T@23500, T@28606) she gave a blow to the eye or swelling as a cause of a closed angle and a laser opening as the treatment.');
  })();

  /* ---------------------------------------------------------------------
     4. ey-cai: carbonic anhydrase in the ciliary epithelium (slide 16's ciliary process, slide 15's
     eye), and why oral CAIs cause metabolic acidosis (slide 27's proximal tubule cell). Slides 26-29;
     11/13 T@53959-@60121; 11/17 T@4800-@22700 (kidney: T@7921-@20200).
     --------------------------------------------------------------------- */
  const CAI = (() => {
    const EO = {x: 6 - 0.55 * 88, y: 26 - 0.55 * 34, s: 0.55};
    const pr = E0.anchor('proc', EO);
    const zoomL = `<path class="an-lead" data-k="zl1" d="M${pr[0]} ${pr[1]} L6 196"/><path class="an-lead" data-k="zl2" d="M${pr[0]} ${pr[1]} L244 196"/>`;
    const mini = E(Object.assign({hiS: ['cbody'], omit: ['sc', 'tm', 'vein', 'sclera']}, EO));
    const cbL = TL(6, 36, ['Ciliary', 'body'], 'cbL', 'fa-t') + lead(40, 50, 58, 98, 'cbLl');
    const cell = fa.R(6, 196, 232, 130, 'ecell', 'fa-cellp', 10) + T(122, 212, 'Ciliary epithelium', 'ecT', 'fa-tb', 'middle');
    const cham = fa.R(246, 196, 108, 130, 'echam', 'fa-lumen', 10) + TL(300, 212, ['Posterior', 'chamber'], 'echT', 'fa-tb', 'middle');
    const enz = `<path class="fa-enz" data-k="enzy" d="${Anat.ell(70, 254, 7.5, 7.5)}"/>`;
    const chem = op => T(70, 240, 'CO₂ + H₂O', 'e1', 'fa-chem', 'middle') + enz + fa.arrow('M70 246 L70 262', 'ea1') +
      T(82, 264, 'carbonic anhydrase', 'eCA', 'fa-k', 'start') +
      T(70, 281, 'H₂CO₃', 'e2', 'fa-chem', 'middle', op) + fa.arrow('M70 287 L70 300', 'ea2', {op}) +
      T(70, 315, 'H⁺ + HCO₃⁻', 'e3', 'fa-chem', 'middle', op);
    const dimOp = dim => dim ? 0.35 : null;
    const flows = dim => fa.flow('M106 304 C170 296 214 280 262 270', 'es1', {dim}) + T(190, 281, 'HCO₃⁻', 'esT1', 'fa-chem', 'middle', dimOp(dim)) +
      fa.flow('M130 320 L262 320', 'es2', {dim}) + T(190, 313, 'Na⁺', 'esT2', 'fa-chem', 'middle', dimOp(dim)) +
      fa.flow('M196 238 L262 238', 'es3', {dim, drift: true}) + T(222, 231, 'water', 'esT3', 'fa-t', 'middle', dimOp(dim));
    const pcT = op => TL(300, 252, ['solutes out,', 'water follows'], 'esT4', 'fa-t', 'middle', 13).replace(/<text /g, op != null ? `<text opacity="${op}" ` : '<text ');
    const aqT = TL(300, 286, ['= aqueous', 'humor', '(INFLOW)'], 'esT5', 'fa-tb', 'middle', 13);
    const inCard = fa.R(156, 26, 200, 60, 'ink', 'fa-card') + T(164, 42, 'INFLOW', 'inkT', 'fa-k') +
      TL(164, 56, ['the ciliary epithelium makes', 'aqueous humor all the time'], 'inkL', 'fa-t');
    /* each formula's name in words, once (the narration's words) */
    const names = [['CO₂', 'carbon dioxide'], ['H₂CO₃', 'carbonic acid'], ['H⁺', 'hydrogen ion'], ['HCO₃⁻', 'bicarbonate'], ['Na⁺', 'sodium']]
      .map(([f, w], i) => T(226, 106 + i * 14, f, 'nmF' + i, 'fa-chem') + T(268, 106 + i * 14, w, 'nmW' + i, 'fa-t')).join('');
    const e1 = mini + cbL + zoomL + cell + cham + chem() + flows(false) + pcT() + aqT + inCard + names;
    const drugs = fa.R(156, 26, 200, 92, 'drg', 'fa-card') + T(164, 42, 'CA inhibitors', 'drgT', 'fa-k') +
      T(164, 58, 'eye drops', 'drgE', 'fa-ts') + fa.chip(160, 63, 96, ['dorzolamide'], 'dz', 22, true) + fa.chip(160, 89, 96, ['brinzolamide'], 'bz', 22, true) +
      T(262, 58, 'oral', 'drgO', 'fa-ts') + fa.chip(258, 63, 96, ['acetazolamide'], 'az', 22, true) + fa.chip(258, 89, 96, ['methazolamide'], 'mz', 22, true);
    const e2 = mini + cbL + zoomL + cell + cham + chem(0.35) + flows(true) + pcT(0.35) + fa.blk(64, 253, 80, 253, 'eblk') +
      T(10, 259, 'blocked', 'eBl', 'fa-w') + T(300, 296, '↓ INFLOW', 'eDown', 'fa-w', 'middle') + drugs;

    /* the kidney steps: a heading on top, so the boxes sit D lower than before; "lumen side" and "blood side" are written inside the cell */
    const KH = 210, D = 14;
    const kBase = T(6, 34, 'Why oral CA inhibitors can cause acidosis: the kidney', 'kwhy', 'fa-tb') +
      fa.R(6, 26 + D, 78, KH, 'lum', 'fa-lumen', 8) + fa.R(92, 26 + D, 172, KH, 'kcell', 'fa-cell', 8) + fa.R(272, 26 + D, 82, KH, 'bld', 'fa-blood', 8) +
      TL(45, 42 + D, ['Lumen', '(urine)'], 'lumT', 'fa-tb', 'middle') + T(178, 42 + D, 'Proximal tubule cell', 'kcT', 'fa-tb', 'middle') + T(313, 42 + D, 'Blood', 'bldT', 'fa-tb', 'middle') +
      T(96, 56 + D, '← lumen side', 'sideL', 'fa-ts') + T(260, 56 + D, 'blood side →', 'sideR', 'fa-ts', 'end');
    const kChem = op =>
      T(45, 152 + D, 'H⁺+HCO₃⁻', 'k1', 'fa-chem', 'middle') + fa.arrow(`M45 ${158 + D} L45 ${172 + D}`, 'ka1') + T(45, 186 + D, 'H₂CO₃', 'k2', 'fa-chem', 'middle') +
      fa.arrow(`M30 ${192 + D} L30 ${210 + D}`, 'ka2') + T(46, 206 + D, 'CA IV', 'kIV', 'fa-k', 'start') + T(45, 228 + D, 'CO₂+H₂O', 'k3', 'fa-chem', 'middle') +
      fa.arrow(`M80 ${224 + D} L128 ${224 + D}`, 'ka3') + TL(96, 200 + D, ['enter', 'the cell'], 'kpas', 'fa-ts', 'start', 12) +
      T(166, 226 + D, 'CO₂ + H₂O', 'k4', 'fa-chem', 'middle') + fa.arrow(`M166 ${214 + D} L166 ${194 + D}`, 'ka4') + T(182, 208 + D, 'CA II', 'kII', 'fa-k', 'start') +
      T(166, 186 + D, 'H₂CO₃', 'k5', 'fa-chem', 'middle', op) + fa.arrow(`M166 ${174 + D} L166 ${158 + D}`, 'ka5', {op}) +
      T(166, 150 + D, 'H⁺ + HCO₃⁻', 'k6', 'fa-chem', 'middle', op);
    const kTrans = dim => {
      const op = dim ? 0.35 : null, oa = op != null ? ` opacity="${op}"` : '';
      return `<path class="fa-tr" data-k="nhe" d="${Anat.ell(92, 104 + D, 15, 21)}"${oa}/>` + T(92, 74 + D, 'NHE3', 'nheT', 'fa-tb', 'middle', op) +
        fa.flow(`M20 ${94 + D} L150 ${94 + D}`, 'kna', {dim}) + T(36, 88 + D, 'Na⁺', 'knaT', 'fa-chem', 'middle', op) +
        fa.flow(`M136 ${140 + D} C112 ${128 + D} 80 ${118 + D} 28 ${114 + D}`, 'kh', {dim}) + T(56, 132 + D, 'H⁺', 'khT', 'fa-chem', 'middle', op) +
        `<path class="fa-tr" data-k="nbc" d="${Anat.ell(264, 146 + D, 15, 17)}"${oa}/>` + T(264, 124 + D, 'NBC1', 'nbcT', 'fa-tb', 'middle', op) +
        fa.flow(`M210 ${146 + D} L306 ${146 + D}`, 'kb', {dim}) + T(234, 178 + D, 'HCO₃⁻, Na⁺', 'kbT', 'fa-chem', 'middle', op);
    };
    const buf = op => TL(313, 176 + D, ['HCO₃⁻', 'buffers', 'blood pH'], 'buf', 'fa-t', 'middle', 13).replace(/<text /g, op != null ? `<text opacity="${op}" ` : '<text ');
    const t3 = T(6, 276, 'Normal: HCO₃⁻ returns to the blood', 'nrm', 'fa-tb') +
      TL(6, 290, ['Lumen: CA IV makes CO₂ + H₂O, which enters the cell', 'Cell: CA II makes H₂CO₃, then H⁺ + HCO₃⁻', 'NHE3: H⁺ leaves in exchange for Na⁺', 'NBC1: HCO₃⁻ goes to the blood (with Na⁺)'], 'nrl', 'fa-t');
    const k3 = kBase + kChem() + kTrans(false) + buf() + t3;
    const blocks = fa.blk(18, 200 + D, 42, 200 + D, 'kb4') + fa.blk(154, 202 + D, 178, 202 + D, 'kb2');
    /* the consequence is written in the drawing in red: Na⁺ stays in the lumen (step 4), no HCO₃⁻ returns to the blood (step 5) */
    const stay = T(49, 88 + D, 'stays', 'kstay', 'fa-w');
    const t4 = T(6, 276, 'Acetazolamide (oral) blocks CA IV and CA II (bars)', 'drg4', 'fa-w') +
      T(6, 290, 'Cell: no H₂CO₃, so no H⁺ to exchange for Na⁺', 'diu0', 'fa-t') +
      T(6, 304, 'Lumen: Na⁺ and water stay: more urine', 'diu1', 'fa-w') + T(6, 318, '(diuresis)', 'diu2', 'fa-w');
    const k4 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks + stay + t4;
    const k5 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks + stay +
      TL(313, 92, ['no HCO₃⁻', 'returns'], 'bno', 'fa-w', 'middle') + T(313, 118, 'pH falls', 'bph', 'fa-w', 'middle') +
      T(6, 276, 'Blood: no HCO₃⁻ goes back, so the pH falls:', 'aci', 'fa-t') +
      T(6, 290, 'METABOLIC ACIDOSIS', 'acw', 'fa-w') +
      T(6, 304, 'mainly with oral CA inhibitors; much less with eye drops', 'acq', 'fa-t');
    return fa.stepper('ey-cai', 'Carbonic anhydrase inhibitors: eye and kidney', [
      ['In the ciliary epithelium, carbonic anhydrase makes H₂CO₃; its HCO₃⁻ leaves with Na⁺ and water follows: aqueous humor (slide 26; 11/17 T@5420).', e1],
      ['A CA inhibitor stops the enzyme: less HCO₃⁻ and Na⁺ leave, less water follows, so inflow falls (slides 26, 28; 11/13 T@54881).', e2],
      ['Kidney: CA IV splits H₂CO₃ in the lumen; CA II makes H⁺ and HCO₃⁻ in the cell; HCO₃⁻ returns to the blood and buffers its pH (slide 27; 11/17 T@8731).', k3],
      ['Oral acetazolamide blocks CA IV and CA II: no H⁺ for NHE3, so Na⁺ and water stay in the lumen (diuresis) (slides 27, 29; 11/17 T@14835).', k4],
      ['No HCO₃⁻ returns to the blood, so the pH falls: metabolic acidosis, the side effect to watch with oral CA inhibitors (slide 29; 11/17 T@17682).', k5],
    ], 392, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 26–29 (slide 27: Golan, Principles of Pharmacology, Fig 20-6; Dr. Smith); ' +
      'the eye is slide 15’s and the ciliary epithelium with its carbonic anhydrase is slide 16’s zoom; ' +
      'lectures 11/13, T@53959–@60121, and 11/17, T@4800–@22700. The Na⁺/K⁺ ATPase and vH⁺ ATPase on slide 27 are left out; she said the transporter names ' +
      'are not needed for this lecture (11/17 T@9398). Acidosis mainly with oral use, “to a much lesser extent” with drops (11/17 T@6785). In the eye, she said, ' +
      'the movement of solutes “is not quite the same” as in the kidney (11/17 T@20105). ' +
      'The figure follows slide 27 and 11/17 (T@5420): carbonic acid separates into H⁺ + HCO₃⁻.');
  })();

  const PURPOSE = {
    'ey-aqueous': 'Shows where aqueous humor is made (inflow) and the two routes it drains by (outflow), on the eye as slide 15 draws it, with each glaucoma drug class placed on the part it changes, so you can sort a drug as an inflow reducer or an outflow enhancer and name its route.',
    'ey-targets': 'Shows the site on the eye where each glaucoma drug class acts, one colour for each class, so you can name the site of a class and sort it as an inflow reducer or an outflow enhancer.',
    'ey-angle': 'Compares open-angle and angle-closure glaucoma with normal drainage, on the eye as slide 14 draws it, so you can say what blocks the drainage in each, how each starts and why angle closure is an emergency.',
    'ey-cai': 'Shows what carbonic anhydrase does in the ciliary epithelium and in the kidney, so you can explain how a CA inhibitor lowers inflow and why an oral one can cause metabolic acidosis.',
  };
  return {
    figs: {'ey-aqueous': AQUEOUS, 'ey-targets': TARGETS, 'ey-angle': ANGLE, 'ey-cai': CAI},
    names: {'ey-aqueous': 'Glaucoma: inflow, outflow and where each drug acts',
      'ey-targets': 'Glaucoma drugs: where each class acts on the eye',
      'ey-angle': 'Open-angle vs angle-closure glaucoma',
      'ey-cai': 'Carbonic anhydrase inhibitors: eye and kidney (acidosis)'},
    purpose: PURPOSE,
  };
})();

if (DIAGRAMS_EY_FA2) {
  const OPEN_RX = /^<figure class="fig[^"]*">/;
  const pesc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_EY_FA2.figs).forEach(k => {
    const h = DIAGRAMS_EY_FA2.figs[k], m = typeof h === 'string' && h.match(OPEN_RX);
    DIA[k] = (m && h.indexOf('dnpurpose') < 0)
      ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + pesc(DIAGRAMS_EY_FA2.purpose[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_EY_FA2.names);
  /* ey-targets joins the Eye group, after ey-aqueous */
  if (typeof DIAGRAMS !== 'undefined') {
    const g = DIAGRAMS.find(x => x[0] === 'Eye: glaucoma, allergy and dry eye (Dr. Smith, Exam 3)');
    if (g && g[1].indexOf('ey-targets') < 0) g[1].splice(g[1].indexOf('ey-aqueous') + 1, 0, 'ey-targets');
  }
}
