/* ==========================================================================
   DIAGRAMS_EY_FA: Exam 3 round 2, Agent A: ey-aqueous, ey-angle and ey-cai redrawn on the anatomy
   of Dr. Smith's slides (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)
   ==========================================================================
   Course file, loaded after diagram_fx.js, diagram_fx_fa.js and diagrams_ey.js (and after
   diagrams_lg.js). It re-assigns DIA[key] and DIA_NAMES[key] for the three keys diagrams_ey.js
   draws first, so the redrawn figures replace them. Keys, names, Purpose lines, captions, figcaptions
   and every fact and citation are those of diagrams_ey.js; only the drawing changes: the picture is
   the anatomy of slides 14-16 (ey-aqueous, ey-angle) and of slide 16's zoom on the ciliary body
   (ey-cai), with labels in Dr. Smith's words.

   STEPPERS.md rules: the same thing carries the same data-k in every step it is in; data-k values
   are unique inside a step; opacity is an attribute; no shape carries a transform; colours are
   classes only; every coloured mark has a text label.
   At most three animated elements per step (flow dashes, a pulse, a breathing halo); a flow that is
   only context is drawn dim and still.
   Check: node diagrams_ey_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_EY_FA = (() => {
  if (typeof stepper !== 'function' || typeof Anat === 'undefined' || !Anat.fa) return null;
  const fa = Anat.fa, T = fa.T, TL = fa.TL, E = Anat.eyeA, FL = Anat.eyeA.flows;
  const lead = (x1, y1, x2, y2, k) => Anat.lead(x1, y1, x2, y2, k);
  const pl = (cx, cy, r, k) => Anat.pulse(cx, cy, r, k);

  /* ---------------------------------------------------------------------
     1. ey-aqueous: inflow and outflow, and where each drug class acts. Slides 14-16 (flow, the two
     routes, receptors and enzymes), 18, 22, 26 (inflow drugs), 32, 34, 37, 41 (outflow drugs);
     11/13 T@25530-@33000, T@39934-@40600, T@43883-@53260; 11/17 T@24556-@36600.
     The eye is slide 15 (labels: cornea, trabecular meshwork, Schlemm's canal, sclera, ciliary body,
     ciliary muscle, posterior chamber, anterior chamber, iris, lens, aqueous flow) with slide 16's
     routes (trabecular meshwork, canal of Schlemm, episcleral vein, uveoscleral outflow).
     --------------------------------------------------------------------- */
  const AQUEOUS = (() => {
    const BY = 334;                                   /* the band under the picture: header baseline */
    const inFlow = o => fa.flow(FL.inflow, 'f-in', o);
    const outFlow = o => fa.flow(FL.out, 'f-out', o);
    const uvFlow = o => fa.flow(FL.uv, 'f-uv', Object.assign({drift: true}, o));
    const pupilL = T(290, 158, 'pupil', 'pupT') + lead(318, 160, 330, 177, 'pupL');
    const mainTag = T(4, 224, 'MAIN route', 'mainT', 'fa-k') + lead(66, 220, 133, 224, 'mainL');
    const uvTag = T(160, 318, 'Uveoscleral route', 'uvT', 'fa-tb') + T(160, 331, 'smaller route', 'minT', 'fa-k') + lead(158, 314, 144, 296, 'uvL');
    const chain = (() => {
      const cy = 362;
      const c1 = fa.chip(6, cy - 24, 112, ['Ciliary body', 'epithelium makes', 'aqueous humor'], 'i1');
      const c2 = fa.chip(138, cy - 17.5, 94, ['Posterior', 'chamber'], 'i2');
      const c3 = fa.chip(252, cy - 24, 102, ['Pupil, then', 'anterior', 'chamber'], 'i3');
      return T(6, BY, 'INFLOW:', 'inT', 'fa-k') + T(62, BY, 'made all the time', 'alw', 'fa-t') + c1 + c2 + c3 +
        fa.arrow(`M119 ${cy} L137 ${cy}`, 'ar1') + fa.arrow(`M233 ${cy} L251 ${cy}`, 'ar2');
    })();
    const outCards = T(6, BY, 'OUTFLOW:', 'outT', 'fa-k') +
      fa.R(6, 339, 170, 58, 'oc1', 'fa-card') + T(13, 353, 'MAIN route', 'oc1h', 'fa-k') +
      TL(13, 366, ['Trabecular meshwork,', 'then Schlemm’s canal,', 'blood vessels'], 'oc1t') +
      fa.R(184, 339, 170, 58, 'oc2', 'fa-card') + T(191, 353, 'smaller route', 'oc2h', 'fa-k') +
      TL(191, 366, ['Uveoscleral: between the', 'uvea and the sclera,', 'spreads into the tissues'], 'oc2t');
    const inDrugs = T(6, BY, '↓ INFLOW:', 'inD', 'fa-w') +
      fa.chip(6, 340, 108, ['β-blockers', 'block β', 'receptors'], 'bb') +
      fa.chip(126, 340, 108, ['α2 agonists', 'act on α2', 'receptors'], 'a2') +
      fa.chip(246, 340, 108, ['CA inhibitors', 'block carbonic', 'anhydrase'], 'ca');
    const tmDrugs = T(6, BY, '↑ OUTFLOW:', 'tmD', 'fa-w') +
      fa.chip(6, 340, 170, ['M3 agonists,', 'echothiophate:', 'contract the meshwork'], 'm3') +
      fa.chip(184, 340, 170, ['netarsudil:', 'less stiff', 'meshwork'], 'rk');
    const uvDrugs = T(6, BY, '↑ OUTFLOW:', 'uvD', 'fa-w') +
      fa.chip(6, 340, 170, ['PG agonists:', 'relax the ciliary', 'muscle (PGF2α receptor)'], 'pg') +
      fa.chip(184, 340, 170, ['brimonidine:', 'some (extra)'], 'br');

    const s1 = E({hi: ['cbody'], omit: ['vein'], dim: ['sclera', 'tm', 'sc', 'vein', 'musc', 'muscl'], label: ['cbody', 'pc', 'ac', 'cornea', 'lens', 'iris', 'sclera']}) +
      inFlow() + pupilL + chain;
    const s2 = E({dim: ['lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['tm', 'sc', 'vein', 'sclera']}) +
      inFlow() + outFlow() + uvFlow() + mainTag + uvTag + outCards;
    const s3 = E({hi: ['cbody'], omit: ['vein'], dim: ['sclera', 'tm', 'sc', 'vein', 'musc', 'muscl'], label: ['cbody', 'pc']}) +
      inFlow() + outFlow({dim: true}) + uvFlow({dim: true}) + pl(222, 205, 22, 'pl1') + inDrugs;
    const s4 = E({hiS: ['tm', 'sc'], dim: ['cbody', 'musc', 'muscl', 'lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['tm', 'sc']}) +
      inFlow() + outFlow() + uvFlow({dim: true}) + pl(181, 151, 20, 'pl2') + tmDrugs;
    const s5 = E({hi: ['musc'], omit: ['vein'], dim: ['tm', 'sc', 'vein', 'lens', 'iris', 'proc1', 'proc2', 'proc3', 'proc4', 'zon'], label: ['musc'], lab: {musc: {at: [4, 214], to: [166, 214], from: [80, 211]}}}) +
      inFlow({dim: true}) + outFlow({dim: true}) + uvFlow() + pl(182, 222, 28, 'pl3') + uvTag + uvDrugs;
    return fa.stepper('ey-aqueous', 'Aqueous humor: inflow and outflow', [
      ['Inflow: the ciliary body makes aqueous humor all the time; it flows through the pupil into the anterior chamber (slides 14–15; 11/13 T@25530).', s1],
      ['Outflow: most drains through the trabecular meshwork and Schlemm’s canal; some by the uveoscleral route (slides 14–16; 11/13 T@32688).', s2],
      ['Drugs that decrease inflow act on the ciliary body: β-blockers, α2 agonists and carbonic anhydrase inhibitors (slides 16, 18, 22, 26; 11/13 T@39934).', s3],
      ['Trabecular outflow up: M3 agonists and echothiophate contract the meshwork; netarsudil makes it less stiff (slides 32, 34, 41; 11/17 T@24556).', s4],
      ['Uveoscleral outflow rises: PG agonists relax the ciliary muscle (also some trabecular); brimonidine adds some (slides 22, 37; 11/17 T@31096).', s5],
    ], 458, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 14–16, 18, 22, 26, 32, 34, 37 and 41; lectures 11/13, ' +
      'T@19333 and T@28180 (inflow is production, outflow is drainage), T@43883–@60121, and 11/17, T@23400–@36600. β-blockers: “not much effect on ' +
      'outflow; MOA not fully understood” (slide 18). PG agonists “do not affect aqueous humor production” (slide 37). Netarsudil inhibits Rho kinase: less ' +
      'contractile tone and fewer fibrosis-related protein deposits in the meshwork, and a change in the permeability of the cells lining Schlemm’s canal (slide 41).');
  })();

  /* ---------------------------------------------------------------------
     2. ey-angle: open-angle vs angle-closure glaucoma. Slides 13-14 (panels A-C), 15-16; 11/13
     T@19603-@20900, T@23500-@26600, T@28606-@29351.
     The picture is the drainage angle of slide 14, zoomed: cornea, sclera, iris, lens, ciliary body,
     trabecular meshwork and Schlemm's canal. The iris in the closed position has its own key, so the
     engine cross-fades it from the flat one.
     --------------------------------------------------------------------- */
  const ANGLE = (() => {
    const AF = Anat.angleA.flows;
    const ring = fa.ring(112, 138, 30, 'ring');
    const labs = ['cornea', 'sclera', 'cbody', 'sc', 'tm', 'iris', 'lens', 'ac'];
    const cards = (head, rows, k) => {
      let s = T(6, 284, head, k + 'h', 'fa-tb');
      rows.forEach(([lab, txt], i) => {
        const x = 6 + (i % 2) * 178, y = 292 + Math.floor(i / 2) * 52;
        s += fa.card(x, y, 170, lab, txt, k + i);
      });
      return s;
    };
    const s1 = Anat.angleA({hi: ['tm'], label: labs}) + ring + fa.flow(AF.open, 'f-open') +
      cards('Normal drainage', [['Made', ['by the ciliary body']], ['Flows', ['through the pupil into', 'the anterior chamber']],
        ['Drains', ['at the angle (circle),', 'through the meshwork']], ['Goal in glaucoma', ['lower the pressure (IOP)', 'to protect the optic nerve']]], 'n');
    const s2 = Anat.angleA({bad: true, hi: ['tm'], label: labs}) + ring + fa.flow(AF.open, 'f-poag', {dim: true}) +
      fa.blk(110, 128, 126, 150, 'blkP') + TL(4, 28, ['meshwork drains', 'poorly (circle)'], 'badT', 'fa-w') +
      cards('Primary open-angle glaucoma (POAG)', [['Angle', ['open']], ['What fails', ['meshwork dysfunction:', 'drainage not effective']],
        ['Onset', ['gradual; no symptoms until', 'the visual field is lost']], ['How common', ['common in the', 'United States']]], 'o');
    const s3 = Anat.angleA({state: 'closed', hi: ['iris'], label: labs}) + ring + fa.flow(AF.closed, 'f-closed') +
      fa.blk(148, 112, 158, 132, 'blkC') + TL(4, 28, ['iris blocks the', 'angle (circle)'], 'blkT', 'fa-w') +
      cards('Primary angle-closure glaucoma (PACG)', [['Angle', ['closed: the iris bows', 'forward over the meshwork']],
        ['Linked to', ['the shape of the eye and', 'how it sits in the socket']],
        ['Onset, pain', ['pressure rises very quickly;', 'significant pain']], ['Urgency', ['medical emergency: lower', 'the IOP quickly']]], 'c');
    return fa.stepper('ey-angle', 'Open-angle vs angle-closure glaucoma', [
      ['Normal: aqueous humor drains at the angle (circle), where the iris meets the cornea and sclera (slide 14 panel A; 11/13 T@26451).', s1],
      ['Open angle: the angle stays open but the trabecular meshwork drains poorly; gradual and silent (slides 13, 14 panel B; 11/13 T@29351).', s2],
      ['Angle closure: the iris bows forward and blocks the meshwork; the pressure rises fast and hurts (slides 13, 14 panel C; 11/13 T@28606).', s3],
    ], 456, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 13 and 14 (DiPiro’s Pharmacotherapy 13e, panels A–C; Dr. Smith); lecture 11/13, ' +
      'T@19603–@20900 and T@23500–@29400. Both types: the goal of treatment is to decrease the IOP, delaying or preventing disease progression (slide 13). ' +
      'On 11/13 (T@23500, T@28606) she gave a blow to the eye or swelling as a cause of a closed angle and a laser opening as the treatment.');
  })();


  /* ---------------------------------------------------------------------
     3. ey-cai: carbonic anhydrase in the ciliary epithelium, and why oral CAIs cause metabolic
     acidosis. Slides 26-29; 11/13 T@53959-@60121; 11/17 T@4800-@22700 (kidney: T@7921-@20200).
     Steps 1-2: the front of the eye (slide 15's anatomy, small) with the ciliary epithelium zoomed
     under it, as slide 16 zooms a ciliary process. Steps 3-5: the proximal tubule cell of slide 27.
     --------------------------------------------------------------------- */
  const CAI = (() => {
    const EO = {x: 6 - 0.55 * 88, y: 26 - 0.55 * 34, s: 0.55};            /* the small eye: x 6-149, y 26-181 */
    const pr = Anat.eyeA.anchor('proc', EO);
    const zoomL = `<path class="an-lead" data-k="zl1" d="M${pr[0]} ${pr[1]} L6 196"/><path class="an-lead" data-k="zl2" d="M${pr[0]} ${pr[1]} L244 196"/>`;
    const mini = E(Object.assign({hiS: ['cbody'], omit: ['sc', 'tm', 'vein', 'sclera']}, EO));
    const cbL = TL(6, 36, ['Ciliary', 'body'], 'cbL', 'fa-t') + lead(40, 50, 58, 98, 'cbLl');
    /* the zoom: one epithelial cell and the posterior chamber */
    const cell = fa.R(6, 196, 232, 130, 'ecell', 'fa-cell', 10) + T(122, 212, 'Ciliary epithelial cell', 'ecT', 'fa-tb', 'middle');
    const cham = fa.R(246, 196, 108, 130, 'echam', 'fa-lumen', 10) + TL(300, 212, ['Posterior', 'chamber'], 'echT', 'fa-tb', 'middle');
    const chem = op => T(70, 240, 'CO₂ + H₂O', 'e1', 'fa-chem', 'middle') + fa.arrow('M70 246 L70 262', 'ea1') +
      T(80, 262, 'carbonic anhydrase', 'eCA', 'fa-k', 'start') +
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
    const e1 = mini + cbL + zoomL + cell + cham + chem() + flows(false) + pcT() + aqT + inCard;
    const drugs = fa.R(156, 26, 200, 92, 'drg', 'fa-card') + T(164, 42, 'CA inhibitors', 'drgT', 'fa-k') +
      T(164, 58, 'eye drops', 'drgE', 'fa-ts') + fa.chip(160, 63, 96, ['dorzolamide'], 'dz', 22, true) + fa.chip(160, 89, 96, ['brinzolamide'], 'bz', 22, true) +
      T(262, 58, 'oral', 'drgO', 'fa-ts') + fa.chip(258, 63, 96, ['acetazolamide'], 'az', 22, true) + fa.chip(258, 89, 96, ['methazolamide'], 'mz', 22, true);
    const e2 = mini + cbL + zoomL + cell + cham + chem(0.35) + flows(true) + pcT(0.35) + fa.blk(64, 253, 80, 253, 'eblk') +
      T(10, 259, 'blocked', 'eBl', 'fa-w') + T(300, 296, '↓ INFLOW', 'eDown', 'fa-w', 'middle') + drugs;

    /* the kidney: a proximal convoluted tubule cell between the lumen and the blood (slide 27) */
    const KH = 210;                                                         /* box height: y 26-236 */
    const kBase = fa.R(6, 26, 78, KH, 'lum', 'fa-lumen', 8) + fa.R(92, 26, 172, KH, 'kcell', 'fa-cell', 8) + fa.R(272, 26, 82, KH, 'bld', 'fa-blood', 8) +
      TL(45, 42, ['Lumen', '(urine)'], 'lumT', 'fa-tb', 'middle') + TL(178, 42, ['Proximal tubule', 'cell'], 'kcT', 'fa-tb', 'middle') + T(313, 42, 'Blood', 'bldT', 'fa-tb', 'middle') +
      T(178, 254, 'apical side: lumen · basolateral side: blood', 'sides', 'fa-ts', 'middle');
    const kChem = op =>
      T(45, 152, 'H⁺+HCO₃⁻', 'k1', 'fa-chem', 'middle') + fa.arrow('M45 158 L45 172', 'ka1') + T(45, 186, 'H₂CO₃', 'k2', 'fa-chem', 'middle') +
      fa.arrow('M30 192 L30 210', 'ka2') + T(46, 206, 'CA IV', 'kIV', 'fa-k', 'start') + T(45, 228, 'CO₂+H₂O', 'k3', 'fa-chem', 'middle') +
      fa.arrow('M80 224 L128 224', 'ka3') + T(104, 218, 'passive', 'kpas', 'fa-ts', 'middle') +
      T(166, 226, 'CO₂ + H₂O', 'k4', 'fa-chem', 'middle') + fa.arrow('M166 214 L166 194', 'ka4') + T(182, 208, 'CA II', 'kII', 'fa-k', 'start') +
      T(166, 186, 'H₂CO₃', 'k5', 'fa-chem', 'middle', op) + fa.arrow('M166 174 L166 158', 'ka5', {op}) +
      T(166, 150, 'H⁺ + HCO₃⁻', 'k6', 'fa-chem', 'middle', op);
    const kTrans = dim => {
      const op = dim ? 0.35 : null, oa = op != null ? ` opacity="${op}"` : '';
      /* the transporters are channels in the membranes; the arrows pass through them and their names sit above */
      return `<path class="fa-tr" data-k="nhe" d="${Anat.ell(92, 104, 15, 21)}"${oa}/>` + T(92, 76, 'NHE3', 'nheT', 'fa-tb', 'middle', op) +
        fa.flow('M20 94 L150 94', 'kna', {dim}) + T(36, 88, 'Na⁺', 'knaT', 'fa-chem', 'middle', op) +
        fa.flow('M136 140 C112 128 80 118 28 114', 'kh', {dim}) + T(56, 132, 'H⁺', 'khT', 'fa-chem', 'middle', op) +
        `<path class="fa-tr" data-k="nbc" d="${Anat.ell(264, 146, 15, 17)}"${oa}/>` + T(264, 124, 'NBC1', 'nbcT', 'fa-tb', 'middle', op) +
        fa.flow('M210 146 L306 146', 'kb', {dim}) + T(234, 178, 'HCO₃⁻, Na⁺', 'kbT', 'fa-chem', 'middle', op);
    };
    const buf = op => TL(313, 176, ['HCO₃⁻', 'buffers', 'blood pH'], 'buf', 'fa-t', 'middle', 13).replace(/<text /g, op != null ? `<text opacity="${op}" ` : '<text ');
    const t3 = T(6, 276, 'Normal: HCO₃⁻ returns to the blood', 'nrm', 'fa-tb') +
      TL(6, 290, ['Lumen: CA IV makes CO₂ + H₂O, which enters the cell', 'Cell: CA II makes H₂CO₃, then H⁺ + HCO₃⁻', 'NHE3: H⁺ out, Na⁺ in · NBC1: HCO₃⁻ and Na⁺ out'], 'nrl', 'fa-t');
    const k3 = kBase + kChem() + kTrans(false) + buf() + t3;
    const blocks = fa.blk(18, 200, 42, 200, 'kb4') + fa.blk(154, 202, 178, 202, 'kb2');
    const t4 = T(6, 276, 'Acetazolamide (oral) blocks CA IV and CA II (bars)', 'drg4', 'fa-w') +
      TL(6, 290, ['Lumen: no H⁺ to trade, so Na⁺ stays in the lumen', 'and water stays with it: more urine'], 'diu', 'fa-t');
    const k4 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks + t4;
    const k5 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks +
      T(6, 276, 'Blood: no HCO₃⁻ goes back, so the pH falls:', 'aci', 'fa-t') +
      T(6, 290, 'METABOLIC ACIDOSIS', 'acw', 'fa-w') +
      T(6, 304, 'mainly with oral CAIs; much less with eye drops', 'acq', 'fa-t');
    return fa.stepper('ey-cai', 'Carbonic anhydrase inhibitors: eye and kidney', [
      ['In the ciliary epithelium, carbonic anhydrase makes H₂CO₃; its HCO₃⁻ leaves with Na⁺ and water follows: aqueous humor (slide 26; 11/17 T@5420).', e1],
      ['A CA inhibitor stops the enzyme: less HCO₃⁻ and Na⁺ leave, less water follows, so inflow falls (slides 26, 28; 11/13 T@54881).', e2],
      ['Kidney: CA IV in the lumen and CA II in the cell make HCO₃⁻, which returns to the blood and buffers its pH (slide 27; 11/17 T@8731).', k3],
      ['Oral acetazolamide blocks CA IV and CA II: no H⁺ for NHE3, so Na⁺ and water stay in the lumen (diuresis) (slides 27, 29; 11/17 T@14835).', k4],
      ['No HCO₃⁻ returns to the blood, so the pH falls: metabolic acidosis, the side effect to watch with oral CAIs (slide 29; 11/17 T@17682).', k5],
    ], 392, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 26–29 (slide 27: Golan, Principles of Pharmacology, Fig 20-6; Dr. Smith); ' +
      'lectures 11/13, T@53959–@60121, and 11/17, T@4800–@22700. The Na⁺/K⁺ ATPase and vH⁺ ATPase on slide 27 are left out; she said the transporter names ' +
      'are not needed for this lecture (11/17 T@9398). Acidosis mainly with oral use, “to a much lesser extent” with drops (11/17 T@6785). In the eye, she said, ' +
      'the movement of solutes “is not quite the same” as in the kidney (11/17 T@20105). On 11/13 (T@54881) she said carbonic acid dissociates “into sodium and ' +
      'bicarbonate”; the figure follows slide 27 and 11/17 (T@5420): H⁺ + HCO₃⁻.');
  })();

  const PURPOSE = {
    'ey-aqueous': 'Shows where aqueous humor is made (inflow) and the two routes it drains by (outflow), with each glaucoma drug class placed on the part it changes, so you can sort a drug as an inflow reducer or an outflow enhancer and name its route.',
    'ey-angle': 'Compares open-angle and angle-closure glaucoma with normal drainage, so you can say what blocks the drainage in each, how each starts and why angle closure is an emergency.',
    'ey-cai': 'Shows what carbonic anhydrase does in the ciliary epithelium and in the kidney, so you can explain how a CA inhibitor lowers inflow and why an oral one can cause metabolic acidosis.',
  };
  return {
    figs: {'ey-aqueous': AQUEOUS, 'ey-angle': ANGLE, 'ey-cai': CAI},
    names: {'ey-aqueous': 'Glaucoma: inflow, outflow and where each drug acts',
      'ey-angle': 'Open-angle vs angle-closure glaucoma',
      'ey-cai': 'Carbonic anhydrase inhibitors: eye and kidney (acidosis)'},
    purpose: PURPOSE,
  };
})();

if (DIAGRAMS_EY_FA) {
  /* the Purpose line, written into each figure's own markup as diagrams_ey.js does (the same <p class="dnpurpose">) */
  const OPEN_RX = /^<figure class="fig[^"]*">/;
  const pesc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_EY_FA.figs).forEach(k => {
    const h = DIAGRAMS_EY_FA.figs[k], m = typeof h === 'string' && h.match(OPEN_RX);
    DIA[k] = (m && h.indexOf('dnpurpose') < 0)
      ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + pesc(DIAGRAMS_EY_FA.purpose[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_EY_FA.names);
}
