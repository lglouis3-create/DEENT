/* ==========================================================================
   READING LINKS: the section that teaches each question
   ==========================================================================
   A question's "Explain more" row and the Weak spots plan ("What to review
   next") send the reader to the section named here. The plan groups questions
   by the label of their first link, so each label names one section.

   Each entry lists concept ids exactly as the questions carry them; a concept
   is matched whole, at the start of the key views.js builds (concept, fg, sub,
   tags), so "clinda-topical" does not catch "clinda-topical-absorb". Where two
   subtopics share a concept id, "concept@sub" picks one of them.

   A concept is listed only where the section's text states the fact the
   question keys (checked row by row against tell.js, reference.js and
   guide.js). Concepts with no such section stay unlisted and fall back to the
   question's own explanation. The core check (test.js) accepts the guide, tell
   and ref tabs only, so the Atlas boards and the drawn figures are not linked
   from here. links_check.js checks every target against the built page.
   ========================================================================== */
const READ_LINKS = (() => {
  const S = {
    // Lecture 1, Smith 10/29 (Pathophys and PCol 1-15)
    g1:      ['guide', 'gobj-l1-1', 'Guide: skin structure and sebum (Skin Pathophysiology)'],
    g2:      ['guide', 'gobj-l1-2', 'Guide: epidemiology of the three diseases (Skin Pathophysiology)'],
    g3:      ['guide', 'gobj-l1-3', 'Guide: etiologies and pathologies (Skin Pathophysiology)'],
    g4:      ['guide', 'gobj-l1-4', 'Guide: general mechanism of each class (Skin Pharmacology)'],
    t1d:     ['tell',  'tell-l1-diseases', 'Tell apart: the three diseases'],
    t1r:     ['tell',  'tell-l1-drugs', 'Tell apart: nuclear receptor binders'],
    rClass:  ['ref',   'ref-l1-classes', 'Reference: drug classes by disease'],
    rAcne:   ['ref',   'ref-l1-acnemap', 'Reference: acne pathology and drugs'],
    rNR:     ['ref',   'ref-l1-nr', 'Reference: nuclear receptors'],
    rCS:     ['ref',   'ref-l1-steroids', 'Reference: topical corticosteroids'],
    rTgt:    ['ref',   'ref-targets', 'Reference: drug targets, write it first'],
    // Smith 10/30 and 11/03 (PCol 16-76)
    t2:      ['tell',  'tell-l2', 'Tell apart: Skin Pharmacology slides 16–42 (Smith 10/30)'],
    r2:      ['ref',   'ref-l2', 'Reference: Skin Pharmacology slides 16–42 (Smith 10/30)'],
    t3:      ['tell',  'tell-l3', 'Tell apart: Skin Pharmacology slides 43–76 (Smith 11/03)'],
    r3:      ['ref',   'ref-l3', 'Reference: Skin Pharmacology slides 43–76 (Smith 11/03)'],
    // Sikazwe 11/03 and 11/04 (DPAW)
    ts3:     ['tell',  'tell-s3', 'Tell apart: Medicinal Chemistry DPAW pp. 1–26 (Sikazwe 11/03)'],
    rs3:     ['ref',   'ref-s3', 'Reference: Medicinal Chemistry DPAW pp. 1–26 (Sikazwe 11/03)'],
    ts4:     ['tell',  'tell-s4', 'Tell apart: Medicinal Chemistry DPAW pp. 27–71 (Sikazwe 11/04)'],
    rs4:     ['ref',   'ref-s4', 'Reference: Medicinal Chemistry DPAW pp. 27–71 (Sikazwe 11/04)'],
    // Sun exposure deck, Smith (added 2026-11-08 with the guide sections by objective)
    gS0:     ['guide', 'gobj-sun-pso', 'Guide: psoralens (Sun Exposure)'],
    gS1:     ['guide', 'gobj-sun-1', 'Guide: types of UV radiation (Sun Exposure)'],
    gS4:     ['guide', 'gobj-sun-4', 'Guide: MED, SPF, broad spectrum, substantivity (Sun Exposure)'],
    gS2:     ['guide', 'gobj-sun-2', 'Guide: sunblocks vs sunscreens (Sun Exposure)'],
    gSp:     ['guide', 'gobj-sun-photo', 'Guide: photosensitizing drugs (Sun Exposure)'],
    tS:      ['tell',  'tell-sun', 'Tell apart: sun protection (Smith)'],
    rSun:    ['ref',   'ref-sun', 'Reference: SPF, skin types, substantivity'],
    // Dr. Patel, Lecture 5 (Exam 2): guide sections by her objectives, and her tables
    gP2:     ['guide', 'gobj-p5-2', 'Guide: name the condition (Dermatitis Therapeutics)'],
    gP3:     ['guide', 'gobj-p5-3', 'Guide: self-care candidate and exclusions (Dermatitis Therapeutics)'],
    gP4:     ['guide', 'gobj-p5-4', 'Guide: treatment goals (Dermatitis Therapeutics)'],
    gP5:     ['guide', 'gobj-p5-5', 'Guide: non-drug therapy (Dermatitis Therapeutics)'],
    gP6:     ['guide', 'gobj-p5-6', 'Guide: best treatment and the step-care algorithm (Dermatitis Therapeutics)'],
    gP7:     ['guide', 'gobj-p5-7', 'Guide: follow-up (Dermatitis Therapeutics)'],
    rPftu:   ['ref',   'ref-p5-ftu', 'Reference: adult fingertip units and tube sizes (Dr. Patel)'],
    rPtcs:   ['ref',   'ref-p5-tcs', 'Reference: topical corticosteroid potency (Dr. Patel)'],
    rPdrug:  ['ref',   'ref-p5-drugs', 'Reference: atopic dermatitis drugs by line (Dr. Patel)'],
    rPdd:    ['ref',   'ref-p5-diaper', 'Reference: diaper dermatitis products and limits (Dr. Patel)'],
    gA1:     ['guide', 'gobj-p6-1', 'Guide: classify acne (Acne Therapeutics)'],
    gA2:     ['guide', 'gobj-p6-2', 'Guide: self-care candidate (Acne Therapeutics)'],
    gA4:     ['guide', 'gobj-p6-4', 'Guide: non-drug counseling (Acne Therapeutics)'],
    gA6:     ['guide', 'gobj-p6-6', 'Guide: algorithm and first-line agents (Acne Therapeutics)'],
    gA7:     ['guide', 'gobj-p6-7', 'Guide: topical products (Acne Therapeutics)'],
    gA8:     ['guide', 'gobj-p6-8', 'Guide: counseling on drug therapy (Acne Therapeutics)'],
    gA9:     ['guide', 'gobj-p6-9', 'Guide: expectations and monitoring (Acne Therapeutics)'],
    rAalg:   ['ref',   'ref-p6-alg', 'Reference: acne grades and treatment by severity (Dr. Patel)'],
    rAag:    ['ref',   'ref-p6-agents', 'Reference: acne agents (Dr. Patel)'],
    rAipl:   ['ref',   'ref-p6-ipledge', 'Reference: isotretinoin and iPledge (Dr. Patel)'],
    gSD2:    ['guide', 'gobj-p7-2', 'Guide: dandruff, seborrheic dermatitis or psoriasis (Scaly Dermatoses)'],
    gS5:     ['guide', 'gobj-p7-5', 'Guide: non-drug therapy (Scaly Dermatoses)'],
    gS6:     ['guide', 'gobj-p7-6', 'Guide: best treatment (Scaly Dermatoses)'],
    rSsh:    ['ref',   'ref-p7-shampoo', 'Reference: dandruff and seborrheic dermatitis (Dr. Patel)'],
    rSpso:   ['ref',   'ref-p7-pso', 'Reference: psoriasis severity, algorithms and topicals (Dr. Patel)'],
    rSsys:   ['ref',   'ref-p7-sys', 'Reference: psoriasis systemic agents and PUVA (Dr. Patel)'],
    rSbio:   ['ref',   'ref-p7-bio', 'Reference: psoriasis biologics (Dr. Patel)'],
    // Dr. Patel, Lecture 8 (11/12; Exam 2): Outdoor Exposures, Sun Exposure, Wound Care, Warts/Corns/Calluses
    g8o1:    ['guide', 'gobj-p8o-1', 'Guide: which exposure is it (Outdoor Exposures)'],
    g8o2:    ['guide', 'gobj-p8o-2', 'Guide: self-care candidate and referral (Outdoor Exposures)'],
    g8o4:    ['guide', 'gobj-p8o-4', 'Guide: non-drug therapy (Outdoor Exposures)'],
    g8o5:    ['guide', 'gobj-p8o-5', 'Guide: best treatment (Outdoor Exposures)'],
    g8o6:    ['guide', 'gobj-p8o-6', 'Guide: monitoring and follow-up (Outdoor Exposures)'],
    g8o7:    ['guide', 'gobj-p8o-7', 'Guide: actions after an outdoor exposure (Outdoor Exposures)'],
    r8otc:   ['ref',   'ref-p8-otc', 'Reference: topical OTC chart for outdoor exposures (Dr. Patel)'],
    r8pl:    ['ref',   'ref-p8-plant', 'Reference: plant contact dermatitis by symptom (Dr. Patel)'],
    r8bi:    ['ref',   'ref-p8-bites', 'Reference: insect bites and stings (Dr. Patel)'],
    r8ve:    ['ref',   'ref-p8-vector', 'Reference: antibiotic by flea-borne and tick-borne disease (Dr. Patel)'],
    r8li:    ['ref',   'ref-p8-lice', 'Reference: head lice products and scabies (Dr. Patel)'],
    r8vn:    ['ref',   'ref-p8-venom', 'Reference: spiders, snake bites, poison control and rabies (Dr. Patel)'],
    g8s1:    ['guide', 'gobj-p8s-1', 'Guide: history, risk and photosensitizing drugs (Sun Exposure, Dr. Patel)'],
    g8s2:    ['guide', 'gobj-p8s-2', 'Guide: name the condition (Sun Exposure, Dr. Patel)'],
    g8s3:    ['guide', 'gobj-p8s-3', 'Guide: self-care candidate (Sun Exposure, Dr. Patel)'],
    g8s4:    ['guide', 'gobj-p8s-4', 'Guide: treatment goals (Sun Exposure, Dr. Patel)'],
    g8s5:    ['guide', 'gobj-p8s-5', 'Guide: non-drug therapy (Sun Exposure, Dr. Patel)'],
    g8s6:    ['guide', 'gobj-p8s-6', 'Guide: best treatment (Sun Exposure, Dr. Patel)'],
    g8s7:    ['guide', 'gobj-p8s-7', 'Guide: follow-up (Sun Exposure, Dr. Patel)'],
    r8sun:   ['ref',   'ref-p8-sun', 'Reference: sunscreen, sunburn, ABCDE and photoaging (Dr. Patel)'],
    r8sp:    ['ref',   'ref-p8-smithpatel', 'Reference: sun exposure, Dr. Smith and Dr. Patel compared'],
    g8w1:    ['guide', 'gobj-p8w-1', 'Guide: wound type and severity (Wound Care)'],
    g8w2:    ['guide', 'gobj-p8w-2', 'Guide: assess and recommend treatment (Wound Care)'],
    g8w3:    ['guide', 'gobj-p8w-3', 'Guide: referral and follow-up (Wound Care)'],
    r8wo:    ['ref',   'ref-p8-wound', 'Reference: wound stages, self-care limits, burns and topical products (Dr. Patel)'],
    g8c2:    ['guide', 'gobj-p8c-2', 'Guide: wart, corn or callus (Warts, Corns and Calluses)'],
    g8c3:    ['guide', 'gobj-p8c-3', 'Guide: self-care candidate (Warts, Corns and Calluses)'],
    g8c5:    ['guide', 'gobj-p8c-5', 'Guide: non-drug therapy (Warts, Corns and Calluses)'],
    g8c6:    ['guide', 'gobj-p8c-6', 'Guide: best treatment (Warts, Corns and Calluses)'],
    g8c7:    ['guide', 'gobj-p8c-7', 'Guide: follow-up (Warts, Corns and Calluses)'],
    r8wcc:   ['ref',   'ref-p8-wcc', 'Reference: wart, corn or callus; salicylic acid and cryotherapy (Dr. Patel)'],
    // Dr. Smith, Lectures 9-10 (11/13, 11/17; Exam 3): Eye, glaucoma, allergic conjunctivitis, dry eye
    gE1:     ['guide', 'gobj-ey-1', 'Guide: eye anatomy (Eye slides 1–4)'],
    gE2:     ['guide', 'gobj-ey-2', 'Guide: tears and drainage (Eye slides 5–6)'],
    gE3:     ['guide', 'gobj-ey-3', 'Guide: autonomic control of the eye (Eye slides 7–8)'],
    gE4:     ['guide', 'gobj-ey-4', 'Guide: glaucoma frame and objectives (Eye slides 9–11)'],
    gE5:     ['guide', 'gobj-ey-5', 'Guide: glaucoma: pressure and the optic nerve (Eye slides 12–14)'],
    gE6:     ['guide', 'gobj-ey-6', 'Guide: aqueous humor routes and receptors (Eye slides 15–16)'],
    gE7:     ['guide', 'gobj-ey-7', 'Guide: beta blockers (Eye slides 17–20)'],
    gE8:     ['guide', 'gobj-ey-8', 'Guide: alpha-2 agonists (Eye slides 21–24)'],
    gE9:     ['guide', 'gobj-ey-9', 'Guide: carbonic anhydrase inhibitors (Eye slides 25–29)'],
    gE11:    ['guide', 'gobj-ey-11', 'Guide: outflow drugs: M3 agonists (Eye slides 30–33)'],
    gE12:    ['guide', 'gobj-ey-12', 'Guide: echothiophate (Eye slides 34–35)'],
    gE13:    ['guide', 'gobj-ey-13', 'Guide: prostaglandin agonists (Eye slides 36–37)'],
    gE14:    ['guide', 'gobj-ey-14', 'Guide: prostaglandin examples and effects (Eye slides 38–39)'],
    gE15:    ['guide', 'gobj-ey-15', 'Guide: netarsudil (Rho kinase) (Eye slides 40–43)'],
    gE16:    ['guide', 'gobj-ey-16', 'Guide: combination products (Eye slides 44–45)'],
    gE21:    ['guide', 'gobj-ey-21', 'Guide: allergic conjunctivitis pathophysiology (Eye slides 46–49)'],
    gE22:    ['guide', 'gobj-ey-22', 'Guide: ophthalmic antihistamines (Eye slides 50–52)'],
    gE23:    ['guide', 'gobj-ey-23', 'Guide: antihistamine drug list (Eye slides 53–54)'],
    gE24:    ['guide', 'gobj-ey-24', 'Guide: vasoconstrictors (Eye slides 55–57)'],
    gE25:    ['guide', 'gobj-ey-25', 'Guide: combination antihistamine product (Eye slides 58–59)'],
    gE26:    ['guide', 'gobj-ey-26', 'Guide: dry eye pathology (Eye slides 60–62)'],
    gE27:    ['guide', 'gobj-ey-27', 'Guide: calcineurin inhibitors (Eye slides 63–67)'],
    gE28:    ['guide', 'gobj-ey-28', 'Guide: corticosteroid and lifitegrast (Eye slides 68–71)'],
    gE29:    ['guide', 'gobj-ey-29', 'Guide: varenicline nasal spray (Eye slides 72–74)'],
    rEt:     ['ref',   'ref-ey-tears', 'Reference: eye structures and tears (Dr. Smith)'],
    rEf:     ['ref',   'ref-ey-flow', 'Reference: how aqueous humor is made and drained (Dr. Smith)'],
    rEg:     ['ref',   'ref-ey-gl', 'Reference: glaucoma drugs by inflow and outflow (Dr. Smith)'],
    rEa:     ['ref',   'ref-ey-ac', 'Reference: allergic conjunctivitis drugs (Dr. Smith)'],
    rEd:     ['ref',   'ref-ey-de', 'Reference: dry eye drugs (Dr. Smith)'],
    tEg:     ['tell',  'tell-ey-glaucoma', 'Tell apart: glaucoma pathophysiology (Dr. Smith)'],
    tEi:     ['tell',  'tell-ey-inflow', 'Tell apart: glaucoma drugs that decrease inflow (Dr. Smith)'],
    tEo:     ['tell',  'tell-ey-outflow', 'Tell apart: glaucoma drugs that increase outflow (Dr. Smith)'],
    tEa:     ['tell',  'tell-ey-allergy', 'Tell apart: allergic conjunctivitis drugs (Dr. Smith)'],
    tEd:     ['tell',  'tell-ey-dry', 'Tell apart: dry eye drugs (Dr. Smith)'],
    gO1:     ['guide', 'gobj-oo-1', 'Guide: Dr. Sikazwe, slides 1–3'],
    gO2:     ['guide', 'gobj-oo-2', 'Guide: Dr. Sikazwe, slides 4–6'],
    gO3:     ['guide', 'gobj-oo-3', 'Guide: Dr. Sikazwe, slides 7–9'],
    gO4:     ['guide', 'gobj-oo-4', 'Guide: Dr. Sikazwe, slides 10–13'],
    gO5:     ['guide', 'gobj-oo-5', 'Guide: Dr. Sikazwe, slides 14–16'],
    gO6:     ['guide', 'gobj-oo-6', 'Guide: Dr. Sikazwe, slides 17–19'],
    gO7:     ['guide', 'gobj-oo-7', 'Guide: Dr. Sikazwe, slides 20–22'],
    gO8:     ['guide', 'gobj-oo-8', 'Guide: Dr. Sikazwe, slides 23–25'],
    gO9:     ['guide', 'gobj-oo-9', 'Guide: Dr. Sikazwe, slides 26–28'],
    gO10:     ['guide', 'gobj-oo-10', 'Guide: Dr. Sikazwe, slides 29–30'],
    gO11:     ['guide', 'gobj-oo-11', 'Guide: Dr. Sikazwe, slides 31–32'],
    gO12:     ['guide', 'gobj-oo-12', 'Guide: Dr. Sikazwe, slides 33–34'],
    gO21:     ['guide', 'gobj-oo-21', 'Guide: Dr. Sikazwe, slides 35–39'],
    gO22:     ['guide', 'gobj-oo-22', 'Guide: Dr. Sikazwe, slides 40–43'],
    gO23:     ['guide', 'gobj-oo-23', 'Guide: Dr. Sikazwe, slides 44–46'],
    gO24:     ['guide', 'gobj-oo-24', 'Guide: Dr. Sikazwe, slides 47–48'],
    gO25:     ['guide', 'gobj-oo-25', 'Guide: Dr. Sikazwe, slides 49–51'],
    gO26:     ['guide', 'gobj-oo-26', 'Guide: Dr. Sikazwe, slides 52–54'],
    gO27:     ['guide', 'gobj-oo-27', 'Guide: Dr. Sikazwe, slides 55–57'],
    gO28:     ['guide', 'gobj-oo-28', 'Guide: Dr. Sikazwe, slides 58–61'],
    gO29:     ['guide', 'gobj-oo-29', 'Guide: Dr. Sikazwe, slides 62–65'],
    gO30:     ['guide', 'gobj-oo-30', 'Guide: Dr. Sikazwe, slides 66–68'],
    rOo:     ['ref',   'ref-oo-otic-oral', 'Reference: ear and mouth preparations (Dr. Sikazwe)'],
    rOr:     ['ref',   'ref-oo-oral', 'Reference: oral care ingredients (Dr. Sikazwe)'],
    rOc:     ['ref',   'ref-oo-classes', 'Reference: drawn groups and classes (Dr. Sikazwe)'],
    rOg:     ['ref',   'ref-oo-glaucoma', 'Reference: glaucoma drug chemistry (Dr. Sikazwe)'],
    rOd:     ['ref',   'ref-oo-dry-allergy', 'Reference: dry eye and allergy drug chemistry (Dr. Sikazwe)'],
    rOs:     ['ref',   'ref-oo-steroid', 'Reference: glucocorticoid structure (Dr. Sikazwe)'],
    gL1:     ['guide', 'gobj-lg-1', 'Guide: Collect, drug-induced glaucoma and how Dr. Lam writes the exam'],
    gL2:     ['guide', 'gobj-lg-2', 'Guide: Assess, the goal of therapy and the four checks (Dr. Lam)'],
    gL3:     ['guide', 'gobj-lg-3', 'Guide: Plan, the six classes, the sequence and solving problems (Dr. Lam)'],
    gL4:     ['guide', 'gobj-lg-4', 'Guide: Implement, administration and counseling (Dr. Lam)'],
    gL5:     ['guide', 'gobj-lg-5', 'Guide: Follow up and monitoring (Dr. Lam)'],
    rLc:     ['ref',   'ref-lg-classes', 'Reference: the six classes, drugs, dosing and precautions (Dr. Lam)'],
    rLp:     ['ref',   'ref-lg-problems', 'Reference: intolerance and inadequate response by class (Dr. Lam)'],
    rLo:     ['ref',   'ref-lg-combos', 'Reference: combination products and dosing (Dr. Lam)'],
    rLa:     ['ref',   'ref-lg-admin', 'Reference: administration, waits, order, lenses, storage (Dr. Lam)'],
    rLm:     ['ref',   'ref-lg-mrp', 'Reference: medication-related problems (Dr. Lam)'],
    tLg:     ['tell',  'tell-lg-glaucoma', 'Tell apart: glaucoma drugs and counseling (Dr. Lam)'],
  };
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const one = c => {
    const [concept, sub] = c.split('@');
    return sub ? `${esc(concept)} \\S* ?${esc(sub)}(?: |$)` : `${esc(concept)}(?: |$)`;
  };
  const row = (concepts, ...keys) =>
    [new RegExp('^(?:' + concepts.trim().split(/\s+/).map(one).join('|') + ')'), keys.map(k => S[k])];

  return {
    byKey: [
      /* ---- Drug targets across Dr. Smith's lectures (added 2026-11-07, her Exam 1 hints);
              listed first so these target questions open the targets list ---------- */
      row('crisaborole-target pimecrolimus-target cyclosporine-cyclophilin tacrolimus-fkbp calcipotriene-moa', 'rTgt', 'r2'),
      row('sarecycline-target risan-target tet-30s clinda-50s smx-paba tmp-dhfr dup-target secu-target brod-receptor ' +
          'uste-p40 rux-jak12 abat-mech mtx-mech tnf-class-mech', 'rTgt', 'r3'),
      row('retinoid-target', 'rTgt', 'g4'),
      row('tgt-ad tgt-acne-abx tgt-ker-cyto tgt-pso-small tgt-biologics sunblock-ingredient organic-ingredient sunscreen-families-match', 'rTgt'),
      row('tgt-tnf-make sarecycline-narrow tet-less-photo tet-anti-inflam doxy-mino-lipid tnf-why-pso tnf-bbw-young tofa-gi-perf', 'r3'),
      row('tgt-retinoids', 'r2'),
      row('bbw-which-drug', 'r2', 'r3'),
      row('oral-cni-boxed-content', 'r2'),
      row('ad-atopic-assoc ad-trend-sex pso-prevalence pso-prevalence-factors acne-adult-sex', 'g2'),
      row('pso-trigger ad-initial-trigger acne-trigger', 'g3'),
      /* ---- Lecture 1, pathophysiology (Smith 10/29) ---------------------- */
      row('stratum-corneum keratinocyte-migration sebum-composition sebum-function', 'g1'),
      row('ad-incidence hygiene-hypothesis ad-inheritance pso-epi acne-epi acne-genetics', 'g2'),
      row('sentinel-ad sentinel-pso th1-th2-balance pso-cell-cycle', 't1d', 'g3'),
      row('ad-vs-pso-keratinocytes th1-cytokines th2-consequences psoriatic-arthritis acne-exacerbating-types pso-core', 't1d'),
      row('ad-initial-reaction ad-ige-later flg-barrier flg-penetrance pso-cytokines pso-drug-triggers ' +
          'acne-four-factors pacnes-lipase pso-systemic@path', 'g3'),
      row('ad-drug-classes acne-drug-classes', 'rClass'),
      row('acne-drug-map salicylic-target', 'rAcne'),

      /* ---- Lecture 1, pharmacology (Smith 10/29, PCol 1-15) -------------- */
      row('nrb-common-mech', 'g4', 't1r'),
      row('nrb-direct nrb-indirect nrb-complex-count hsp90-cbg cs-local-ae cs-low-potency-systemic rar-vs-rxr rxr-apoptosis', 't1r', 'g4'),
      row('rare nrb-tfs nrb-three-classes vdr-rxr', 'rNR'),
      row('cs-face-potency cs-maintenance', 'rCS', 'g4'),
      row('cs-occlusion retinoid-acne-pd retinoid-comedone retinoid-aging', 'g4'),

      /* ---- Lecture 2, Smith 10/30 (PCol 16-42) --------------------------- */
      row('ret-worse-first ret-photosens-vs-sunburn ret-photosens-mech signal-1 signal-2 signal-3 signal-cascade-il2 ' +
          'cni-site-in-figure cyclosporine-cyclophilin tacrolimus-fkbp immunophilin-pair oral-cni-shared-ae ' +
          'ribosome-subunits tetracycline-30s macrolide-50s tetra-vs-macrolide sulfur-comedogenic bpo-moa', 't2'),
      row('tretinoin-absorption tretinoin-micro adapalene-sun-stable adapalene-bpo adapalene-vs-tretinoin ' +
          'tazarotene-uses tazarotene-vs-adapalene tazarotene-pregnancy isotretinoin-children ipledge ' +
          'acitretin-indication acitretin-liver acitretin-half-life acitretin-pregnancy acitretin-ethanol acitretin-blood iso-vs-aci ' +
          'pimecrolimus-skin topical-cni-age topical-cni-ad topical-cni-burning topical-cni-cancer ' +
          'cyclosporine-gingival tacrolimus-neuropathy cni-cyp3a4 ' +
          'crisaborole-use crisaborole-hypersens apremilast-vs-crisaborole apremilast-ae apremilast-depression apremilast-cyp3a4 ' +
          'bpo-benzoic bpo-sensitizer bpo-oxidant sulfur-bacteriostatic sulfur-h2s sulfur-ae ' +
          'salicylic-moa salicylic-3-6 salicylic-over-6 salicylic-40 salicylic-diabetes-pvd', 't2', 'r2'),
      row('ret-flare-window ret-optimal-8-12 isotretinoin-indication isotretinoin-common-ae ' +
          'calcipotriene-class calcipotriene-local-ae calcipotriene-steroid calcipotriene-systemic calcipotriene-100g calcipotriene-reversal ' +
          'topical-cni-systemic oral-cyclosporine-use cyclosporine-formulations crisaborole-ae-rates bpo-counsel salicylism-additive', 'r2'),

      /* ---- Lecture 3, Smith 11/03 (PCol 43-76) --------------------------- */
      row('pos-signal-2 neg-signal-2', 't3'),
      row('tet-30s clinda-50s ribosome-subunit-tell ribosome-classes smx-paba tmp-dhfr dapsone-leprosy-mech dapsone-acne-mech ' +
          'clinda-vehicle metro-vehicle shale-vs-coal coal-photo-carc coal-oozing anth-ae se-zn mtx-vs-tmp ' +
          'abat-structure abat-mech abat-costim dup-target dup-both secu-target ixe-vs-secu brod-receptor bind-cytokine human-list ' +
          'uste-p40 p19-vs-p40 gusel-vs-tildra risan inflix-chimeric inflix-ada inflix-infusion-why inflix-lupus adalim ' +
          'etan-structure certo-peg tnf-bbw jak-small rux-jak12 upa tofa-bbw bbw-classes tofa-oral', 't3', 'r3'),
      row('tet-colitis tet-young tet-photo tet-ae-list mino-oto tet-pregnancy clinda-oral-ae clinda-topical-absorb clinda-resistance ' +
          'macro-ddi macro-topical dapsone-uses metro-use metro-mech coal-mech coal-phenol anth-source anth-mech anth-intertrig ' +
          'mtx-mech mtx-analog mtx-folate-cycle mtx-pd mtx-liver mtx-blood mtx-pregnancy mtx-dispense ' +
          'dup-eye dup-common secu-ae il23-th17 uste-vaccine uste-allergy uste-common uste-pres risan-severe ' +
          'tnf-class-mech etan-ae inflix-premed tnf-human mtx-thf', 'r3'),

      /* ---- Sun exposure deck, Smith (Sun 2-25), added 2026-11-08 ------------ */
      row('psoralen-uva-range psoralen-effects psoralen-melanin psoralen-ae psoralen-cataract psoralen-why', 'gS0'),
      row('uvb-range uvb-vs-uva-glass uva-phototoxic uvb-sunburn-vitd uva-dermis-smith uva-uvb-shared tanning-timing', 'tS', 'gS1'),
      row('uv-peak-hours uv-index severe-burn-risk tan-not-protective sunburn-mediators sunburn-timing severe-sunburn', 'gS1'),
      row('med-def spf-def spf-uvb-only broad-spectrum cancer-claim spf15-block spf-vs-broad spf-by-skin-type spf-photosensitizing vehicle-substantivity', 'tS', 'gS4'),
      row('skin-type-i', 'rSun'),
      row('reapply-interval substantivity-def', 'gS4'),
      row('sunblock-use sunblock-ae benzophenones-facts aminobenzoates-facts anthranilates-facts dibenzoylmethane-facts ' +
          'salicylates-cinnamates sunscreen-reaction-risk', 'tS', 'gS2'),
      row('sunscreen-refer sunscreen-systemic', 'gS2'),
      row('photosens-drugs', 'gSp'),

      /* ---- Lecture 3, Sikazwe 11/03 (DPAW 1-26); Smith's psoralen slide -- */
      row('soft-drug hard-drug crisaborole-sult crisaborole-ugt eczema-components goals-ecz-vs-pso psoriasis-components ' +
          'puva alpha-beta-face numbering-vs-orientation hc-to-clobetasol-not-metab 11bhsd-oxidoreductase autox-anthralin-vs-psoralen', 'ts3'),
      row('crisaborole-logp deboronation two-enzymes-count two-enzymes-names jak-diff-class jak-sequestered jak-active-metab jak-thalf ' +
          'uvc-range uva-range uvb-lower ozone-uvb uva-deepest uva-penetration coal-tar-content tar-photosens coal-tar-uvb shale-tar-source ' +
          'petrolatum lanolin silicone-advantage dimethicone-vs-cyclo anthralin-autox anthralin-radicals anthralin-mito ' +
          'psoralen-dna psoralen-uva-role which-drug-intercalates psoralen-mech ' +
          'gc-sar-four sar-11-beta sar-9-alpha sar-c1c2 hc-thalf-metab hc-doa-protein 11bhsd-enzyme cortisone-inactive-why', 'ts3', 'rs3'),
      row('crisaborole-class crisaborole-boron crisaborole-thalf crisaborole-zn-mg crisaborole-boron-role jak-3a4 jak-minor-cyp ' +
          'emollient-role tar-moa anthralin-class anthralin-stain anthralin-systemic anthralin-dendrimer ' +
          'psoralen-class psoralen-3a4 psoralen-jak-interaction steroid-skeleton ring-d gr-hbond-type gr-hbond-count gr-hbond-groups ' +
          'hc-reference hc-dual-activity potency-bases clobetasol-superpotent potency-low-example hc-logp hc-bioavail hc-urine', 'rs3'),

      /* ---- Lecture 4, Sikazwe 11/04 (DPAW 27-71); Smith's sunblock slides */
      row('limus-structure mtx-affinity mtx-vs-folic aha-definition aha-identify aha-count', 'ts4'),
      row('limus-difference limus-skin-binding limus-moa limus-lactone lactone-vs-lactam calcipotriene-vs-calcitriol vitd-hypercalcemia secosteroid ' +
          'csa-activation csa-lactam apremilast-class apremilast-metab apremilast-3a4 tofacitinib-class tofacitinib-3a4 ' +
          'ga-vs-sa-logp ga-surface ga-metab ha-itch sa-glycine sa-bha sulfur-particle zno-size bpo-two-actions bpo-radical ' +
          'iso-geometric iso-c13 tret-iso-route etretinate-acitretin etretinate-removed tazarotene-prodrug retinoid-cooh gen3-members retinoid-gen-basis ' +
          'aa-steroid aa-biosynthesis flutamide-moa azole-3a4 tet-vs-steroid doxy-mino-food tet-cross-allergy ' +
          'zno-mech chromophore avobenzone meradimate-vs-avobenzone ensulizole octocrylene oxybenzone bemotrizinol ha-mw ' +
          'sunblock-vs-sunscreen organic-mech', 'ts4', 'rs4'),
      row('vitd-antiproliferative mtx-pteridine mtx-dhfr mtx-sar-parts mtx-sar-aromatic mtx-sar-alkylation mtx-sar-nme ' +
          'csa-structure csa-moa csa-bioavailability csa-grapefruit apremilast-moa ce-enzymes retinoid-nuclear tazarotene-alkyne ' +
          'ga-deeper-peel sulfur-thiolysis cysteine-disulfide sulfur-drawbacks bpo-class retinoid-teratogen oc-acne oc-steroid ' +
          'azelaic-diacid clinda-topical tet-chelation octinoxate paba-allergy salicylate-hydrolysis photostability-rank uva-uvb-coverage ' +
          'hq-moa hq-storage aha-wrinkle aha-sources ha-film ha-structure topical-ret-collagen sunblock-products', 'rs4'),

      // Exam 1 style items (2026-11-14)
      row('x-alkyne-picture x-geometric-isomer-picture x-aha-select-picture x-tetracycline-picture x-steroid-or-not-picture x-limus-conclude ' +
          'x-csa-azole-conclude x-avobenzone-conclude x-flutamide-receptor x-apremilast-dealkyl-picture x-apremilast-azole-assume', 'ts4', 'rs4'),
      row('x-nrb-select x-nrb-indirect-conclude', 't1r', 'g4'),
      row('x-rare-site', 'rNR'),
      row('x-pso-classes-select x-acne-classes-select x-ad-classes-select', 'rClass'),

      /* ---- Lecture 5, Patel 11/06 (Dermatitis Therapeutics; Exam 2) ------ */
      row('p5-ftu-grams p5-ftu-face-neck p5-ftu-arm-leg p5-ftu-trunk p5-tube-round-up p5-tube-face-tid p5-tube-trunk-bid ' +
          'p5-tube-scalp-week p5-tube-arm p5-tube-two-areas p5-tube-days-last p5-tube-leg-daily p5-tube-sizes p5-tube-face-bid', 'rPftu', 'gP6'),
      row('p5-ad-other-name p5-ad-features p5-ad-barrier-patho p5-ad-emollient-prevent p5-atopic-triad-vs-march p5-ad-risk-factors ' +
          'p5-ad-trigger-category p5-ad-trigger-personal p5-ad-infant-pres p5-ad-onset-timing p5-ad-adult-region p5-ad-onset-persistence ' +
          'p5-scorad-ranges p5-severity-sleep p5-severity-moderate-desc p5-status-defs p5-case-severity-status p5-case-severe-chronic ' +
          'p5-ad-complications p5-dd-etiology p5-dd-signs p5-globiad-category', 'gP2'),
      row('p5-ad-goals p5-dd-goals', 'gP4'),
      row('p5-ftu-chart-match', 'rPftu'),
      row('p5-emollient-3-min p5-counsel-thin-layer p5-tcs-absorption p5-tcs-storage-duration p5-tcs-air-dry', 'gP6'),
      row('p5-pharmacist-role p5-pa-denied', 'gP7'),
      row('p5-dupilumab-indications', 'rPdrug'),
      row('p5-fix-barrier-steps p5-bleach-bath p5-bleach-amount p5-bath-practice p5-wet-wrap-tci p5-compress-weeping p5-nonpharm-counsel ' +
          'p5-moist-most-effective p5-moist-urea p5-moist-aquaphor p5-lotion-frequency p5-dd-prevention-infant p5-iad-prevention-adult ' +
          'p5-abcde p5-dd-case-nonpharm p5-abcde-case-diaper p5-abcde-case-air', 'gP5'),
      row('p5-otc-followup-steroid-atrophy p5-dd-do-not-use p5-dd-exclusions p5-dd-exclusion-comorbid', 'gP3'),
      row('p5-case-return-7d p5-dd-followup-7d p5-dd-case-followup', 'gP7'),
      row('p5-vehicle-order p5-mometasone-vehicle p5-clobetasol-very-high p5-triamcinolone-medium p5-high-potency-arrowed p5-hc-lowest-class ' +
          'p5-tcs-combination p5-hc-face-only', 'rPtcs', 'gP6'),
      row('p5-tcs-adr p5-tcs-contraindication p5-otc-hc-regimen p5-tcs-onset-24-48 p5-tci-line-indication p5-pime-vs-tacro p5-tacro-strength-age ' +
          'p5-tci-counsel-bathe p5-tci-bbw p5-tci-reassess-6wk p5-tci-adr p5-crisaborole-line p5-age-limits-compare p5-crisaborole-use ' +
          'p5-crisaborole-adr p5-dupilumab-cyp-live p5-dupilumab-admin p5-dupilumab-adult-dose p5-dupilumab-child-lb p5-dupilumab-child-light ' +
          'p5-dupilumab-child-heavy p5-dupilumab-combo p5-tralokinumab-target p5-tralokinumab-dose p5-tralokinumab-q4w p5-tralokinumab-ae ' +
          'p5-jak-place p5-jak-doses p5-ruxolitinib-topical p5-jak-bbw p5-jak-mace', 'rPdrug', 'gP6'),
      row('p5-algo-mild-acute p5-algo-moderate-maint p5-algo-severe p5-algo-not-resolved p5-algo-moderate-acute p5-case-first-line-maint p5-case-rx-details', 'gP6'),
      row('p5-zinc-oxide-range p5-protectant-no-zinc p5-protectant-apply p5-dd-case-first-line p5-dd-complication-organisms', 'rPdd', 'gP6'),
      /* harder Lecture 5 items and new-patient versions (q14_L05_harder.js, 2026-11-12) */
      row('h5-tube-leg-bid-week h5-tube-hands-soles h5-tube-face-hc-choice h5-tube-buttocks-tid h5-tube-trunk-both-daily h5-tube-face-scalp-5d', 'rPftu', 'gP6'),
      row('h5-sev-moderate-acute h5-sev-mild-chronic h5-case-mild-subacute h5-eczema-not-contagious', 'gP2'),
      row('h5-algo-moderate-next-tci h5-flare-face-and-trunk h5-severe-after-topicals h5-first-line-asks-nonsteroid h5-rx-forearm-flare', 'gP6'),
      row('h5-hc-day8 h5-hc-day5-partial h5-steroid-day2-call h5-shower-sequence h5-mometasone-on-face', 'gP6'),
      row('h5-tacro-17yo h5-tci-2-weeks h5-dupilumab-60kg-boundary h5-dupilumab-live-vaccine-case', 'rPdrug', 'gP6'),
      row('h5-lotion-to-petrolatum h5-weeping-on-pimecrolimus h5-iad-nonpharm', 'gP5'),
      row('h5-dd-home-products', 'rPdd', 'gP6'),
      row('h5-dd-fever-refer h5-dd-day7-unchanged', 'gP3'),

      /* ---- Lectures 6-7, Patel 11/10-11/11 (Acne; Scaly Dermatoses; Exam 2) */
      row('p6-case1-severity p6-case1-first-line p6-case2-severity p6-case2-next-line p6-mild-after-bp p6-mild-combination p6-dapsone-place p6-mildly-clear-tx p6-moderate-first-line p6-moderate-add-oral p6-iso-place-moderate p6-severe-first-line p6-severe-second-line p6-coc-over-spiro p6h-moderate-triple-topical p6h-severe-wants-contraception p6h-coc-age-excluded p6h-smoker-spiro p6h-moderate-after-bp-wash', 'rAalg', 'gA6'),
      row('p6-coc-candidate p6-tetracycline-age p6-doxy-dose p6-sarecycline-dose p6-tmp-smx p6-oral-abx-facts p6-coc-criteria p6-coc-fda-three p6-coc-risk p6-antiandrogen-adr p6h-doxy-candidate', 'rAag', 'gA8'),
      row('p6-case2-iso-not p6-ipledge-tests p6-ipledge-window p6-ipledge-male p6-iso-tetracycline p6-iso-labs p6-iso-supply p6-iso-dose-lb p6-iso-dose-max p6-iso-adr p6h-fill-window-passed p6h-progestin-only p6h-second-test', 'rAipl', 'gA8'),
      row('p6-lesion-match p6-grade-mildly-clear p6-grade-moderate p6-severe-vs-moderate p6h-mild-few-papules', 'gA1', 'rAalg'),
      row('p6-causative-drug p6-self-care-exclusion p6-complication-scarring p6-endocrine-testing', 'gA2'),
      row('p6-makeup-cleanser p6-vehicle-oily p6-goals', 'gA4'),
      row('p6-bp-first-line-why p6-not-bactericidal p6-resorcinol-not-comedolytic p6-bp-bleach p6-bp-irritation p6-adapalene-timing p6-otc-retinoid-age p6-salicylic-vs-bp p6-salicylic-use p6-aha-use p6-tea-tree', 'rAag', 'gA7'),
      row('p6-topical-abx-mono p6-topical-abx-wait p6-dapsone-g6pd p6-azelaic-use', 'rAag', 'gA7'),
      row('p6-time-to-benefit p6-apply-topical p6-oral-counsel p6-shaving p6-lesion-count p6-no-response-vehicle p6-plan-principles p6h-three-weeks', 'gA9'),
      row('p7-dandruff-organism p7-dandruff-case-severity p7-dandruff-case-shampoo p7-dandruff-moderate-tx p7-dandruff-schedule p7-dandruff-secondary-inflam p7h-mild-dandruff-woman p7h-dandruff-week2', 'rSsh', 'gS6'),
      row('p7-sd-case-problem p7-sd-case-first-line p7-sd-risk p7-sd-adult-vs-infant p7-sd-epi p7-sd-schedule p7-sd-referral-7d p7-sd-resistant p7-sd-soften-scales p7h-sd-face-cream p7h-sd-step-down', 'rSsh', 'gS6'),
      row('p7-infant-case-problem p7-infant-case-tx p7-infant-severe p7-infant-care p7h-infant-face', 'rSsh', 'gS5'),
      row('p7-cmp-inflammation p7-cmp-turnover p7-cmp-psoriasis-look p7-cmp-sd-location p7h-against-dandruff p7h-organisms', 'gSD2'),
      row('p7-hc-not-dandruff p7-sulfur-not-psoriasis', 'rSsh', 'gS6'),
      row('p7-ftu-face-bid-7d p7-ftu-face-daily-7d', 'rPftu'),
      row('p7-pso-case-severity p7-pso-case-otc p7-pso-lifestyle p7-mild-mod-first p7-tcs-most-effective p7-tcs-regimen p7-topical-regimen-match p7-intertriginous p7h-mild-mod-after-tcs p7-mod-sev-first-systemic p7-systemic-keep-topical p7-biologic-place p7-pso-followup', 'rSpso', 'gS6'),
      row('p7h-bsa-9 p7h-case-nsaid-worsen p7-pso-epi p7-pso-precipitating-drug p7-pso-comorbidities p7-pso-plaque-signs p7-bsa-mild p7-bsa-severe p7-bsa-how p7-pso-goals', 'gSD2'),
      row('p7-mtx-folic p7-mtx-monitor p7-mtx-cirrhosis p7-mtx-hepatotox-risk p7-onset-compare p7-csa-duration p7-csa-uncontrolled-htn p7-apremilast-class-dose p7-apremilast-counsel p7-acitretin-women p7-tofacitinib p7-puva-place p7-puva-moa-ae', 'rSsys', 'gS6'),
      row('p7-bio-key-points p7-bio-active-infection p7-bio-vaccine p7-bio-common-ae p7-tnf-chf p7h-chf-choose-biologic p7-tnf-ms-relative p7-tnf-safety p7-tnf-members p7-il17-crohns p7-brodalumab-rems p7-ustekinumab-warfarin p7-il-class-id p7-brand-generic-match', 'rSbio', 'gS6'),

      /* ---- Lecture 8, Patel 11/12 (Outdoor Exposures; Sun Exposure; Wound Care; Warts, Corns and Calluses; Exam 2) */
      row('p8o-ftu-feet-bid-3d p8o-ftu-arm-bid-5d p8o-ftu-leg-bid-7d b-p8o-ftu-feet-grams b-p8o-ftu-hands-grams b-p8o-ftu-leg-grams', 'rPftu', 'g8o5'),
      row('p8o-topical-diphenhydramine-avoid p8o-caines-methemoglobinemia p8o-anesthetic-no-occlusion p8o-witch-hazel-astringent p8o-hc-not-on-infections p8o-anesthetic-frequency p8o-pramoxine-less-sensitizing', 'r8otc', 'g8o5'),
      row('p8o-ivy-case-itch p8o-ivy-weeping-astringent p8o-ivy-dry-topical-choice', 'r8pl', 'g8o5'),
      row('p8o-oatmeal-bath p8o-urushiol-removal', 'r8pl', 'g8o4'),
      row('p8o-ivy-rash-timing p8o-vesicle-fluid-not-antigenic', 'r8pl', 'g8o1'),
      row('p8o-ivy-referral-list', 'r8pl', 'g8o2'),
      row('p8o-stinging-insects', 'r8bi', 'g8o1'),
      row('p8o-tick-removal p8o-stinger-removal', 'r8bi', 'g8o4'),
      row('p8o-bedbug-case-itch p8o-bite-under-2-protectant p8o-sting-oral-analgesic', 'r8bi', 'g8o5'),
      row('p8o-bite-selfcare-7d p8o-bite-day8-refer', 'r8bi', 'g8o6'),
      row('p8o-bite-referral-signs p8o-sting-case-referral p8o-sting-emergency-list p8o-sting-history-emergency', 'r8bi', 'g8o2'),
      row('p8o-hunter-case-referral', 'r8ve', 'g8o2'),
      row('p8o-lyme-neuro-iv p8o-lyme-cardiac-oral', 'r8ve', 'g8o5'),
      row('p8o-scorpion-day7-refer p8o-scorpion-emergency', 'r8bi', 'g8o2'),
      row('p8s-snow-sand-reflect', 'g8s5'),
      row('p8o-typhus-doxycycline p8o-typhus-rash-pattern p8o-plague-antibiotic p8o-lyme-prophylaxis-72h p8o-lyme-em-doxy-10d p8o-lyme-second-line-azithro p8o-lyme-proph-child-max b-p8o-lyme-proph-child-mg b-p8o-lyme-amox-child-mg p8o-stari-no-antibiotic p8o-rickettsial-doxy', 'r8ve', 'g8o5'),
      row('p8o-lice-case-first-line p8o-lice-18mo-permethrin p8o-pyrethrin-chrysanthemum p8o-scabies-options', 'r8li', 'g8o5'),
      row('p8o-lice-types', 'r8li'),
      row('p8o-lice-6wk-refer p8o-lice-exclusion-list', 'r8li', 'g8o2'),
      row('p8o-lice-application-steps p8o-lice-nit-comb-repeat', 'r8li', 'g8o7'),
      row('p8o-lice-two-rounds-refer p8o-scabies-itch-4wk', 'r8li', 'g8o6'),
      row('p8o-black-widow-signs p8o-pitviper-moderate', 'r8vn', 'g8o1'),
      row('p8o-pitviper-severe-antivenin', 'r8vn'),
      row('p8o-spider-acetaminophen p8o-limb-position-spider-vs-snake p8o-snake-first-aid-list p8o-poison-control-number p8o-coral-no-antivenin p8o-rabies-first-steps p8o-rabies-pep-previously-vaccinated p8o-rabies-hrig-site', 'r8vn', 'g8o7'),
      row('p8s-burn-case-pain p8s-burn-anesthetic-not-routine p8s-burn-not-recommended-list p8s-protectant-24h p8s-analgesic-why p8s-analgesic-duration p8s-aloe-facts p8s-anesthetic-limits p8s-burn-dry-skin-protectant', 'r8sun', 'g8s6'),
      row('p8s-burn-initial-cool', 'r8sun', 'g8s5'),
      row('p8s-burn-goals p8s-everyone-sunscreen', 'g8s4'),
      row('p8s-burn-exclusion-case p8s-burn-exclusion-list p8s-burn-infection-signs p8s-case-4-month-old p8s-infant-5-months p8s-infant-8-months p8s-sunscreen-exclusion', 'r8sun', 'g8s3'),
      row('p8s-burn-time-course p8s-abcde-diameter p8s-abcde-refer p8s-glogau-type-ii', 'r8sun', 'g8s2'),
      row('p8s-abcde-case-asymmetry p8s-abcde-case-border p8s-abcde-case-color p8s-abcde-case-diameter p8s-abcde-case-evolving p8s-abcde-two-mnemonics', 'r8sun', 'g8s2'),
      row('p8s-photoaging-vs-chronologic', 'g8s2'),
      row('p8s-burn-followup p8s-photoaging-results-time', 'r8sun', 'g8s7'),
      row('p8s-case-daily-sunscreen p8s-spf-label-uvb p8s-spf-minimum-preferred p8s-activity-sweating p8s-sensitive-skin-choice p8s-grase-two p8s-combination-product p8s-apply-amount-timing p8s-reapply-towel p8s-sunburn-factors', 'r8sun', 'g8s6'),
      row('p8s-reapply-interval', 'r8sun', 'r8sp'),
      row('p8s-vitamin-d p8s-photoaging-counsel-list', 'r8sun'),
      row('p8s-doxycycline-counsel p8s-coc-photosensitizer p8s-photosensitizer-list p8s-highest-risk', 'r8sun', 'g8s1'),
      row('p8s-age-case-hyperpigmentation p8s-retinoid-counsel p8s-retinol-conversion p8s-retinoid-effects p8s-hydroquinone-duration p8s-hydroquinone-fda p8s-hydroquinone-ochronosis p8s-peel-self-applied', 'r8sun', 'g8s6'),
      row('p8w-stage-2 p8w-stage-4 p8w-phase-order p8w-stage-healing-time p8w-burn-minor-adult p8w-burn-moderate-child p8w-burn-major-adult p8w-burn-deep-2-10', 'r8wo', 'g8w1'),
      row('p8w-selfcare-ok p8w-excl-3-inches p8w-excl-location p8w-excl-bite p8w-excl-diabetes p8w-refer-7-days p8w-excl-list p8w-burn-poor-risk p8w-burn-hand p8w-burn-chemical p8w-burn-excl-list', 'r8wo', 'g8w3'),
      row('p8w-first-step-cleanse p8w-film-not-absorptive p8w-gauze-disadvantages p8w-abx-when-applied p8w-abx-directions p8w-neomycin-systemic p8w-anesthetic-directions p8w-benzocaine-methemoglobinemia p8w-antiseptic-where p8w-minor-burn-otc p8w-smoking-necrosis', 'r8wo', 'g8w2'),
      row('p8c-identify-corn p8c-identify-callus p8c-plantar-wart-vs-callus p8c-size p8c-wart-cause-layer p8c-hpv-1-feet', 'r8wcc', 'g8c2'),
      row('p8c-flat-wart-refer p8c-mosaic-wart p8c-self-treatable-types p8c-corn-diabetes p8c-corn-sa-exclusions', 'r8wcc', 'g8c3'),
      row('p8c-wart-nonpharm p8c-corn-nonpharm', 'r8wcc', 'g8c5'),
      row('p8c-cryo-warts-only p8c-wart-sa40-directions p8c-wart-sa17-directions p8c-wart-prep-soak p8c-wart-most-effective p8c-cryo-seconds p8c-cryo-repeat-2-weeks p8c-cryo-3-treatments p8c-cryo-counseling p8c-corn-sa40-directions p8c-corn-sa17-directions p8c-corn-7-applications p8c-corn-sa-healthy-skin', 'r8wcc', 'g8c6'),
      row('p8c-wart-12-weeks-refer p8c-corn-14-days-refer', 'r8wcc', 'g8c7'),

      /* ---- Lectures 9-10, Smith 11/13 and 11/17 (Eye: glaucoma, allergic conjunctivitis, dry eye; Exam 3) */
      row('ey-struct-ciliary-body ey-struct-choroid ey-struct-cornea-sclera ey-struct-vitreous ey-struct-retina-optic ey-struct-lens-ligament', 'rEt', 'gE1'),
      row('ey-lacr-path ey-lacr-systemic ey-lacr-compress ey-lacr-stuffy ey-tears-meibomian ey-tears-layer-source ey-tears-aqueous-98 ey-tears-goblet ' +
          'ey-tears-contents', 'rEt', 'gE2'),
      row('ey-auto-dilate ey-auto-cholinergic ey-auto-adrenergic-cb ey-auto-muscarinic-list ey-auto-accommodation', 'rEt', 'gE3'),
      row('ey-pacg-case ey-poag-asymptomatic ey-tonometry ey-type-cause-pair ey-open-meaning ey-goal-both ey-pacg-laser ey-pacg-vs-poag-pain ey-pacg-list', 'tEg', 'gE5'),
      row('ey-angle-def ey-aqueous-path ey-always-made ey-damage-path ey-main-route ey-uveoscleral ey-meshwork-blocked', 'tEg', 'rEf', 'gE5'),
      row('ey-posterior-chamber ey-meshwork-desc ey-recep-alpha1 ey-recep-epithelium-list ey-recep-m3 ey-target-outflow ey-target-inflow ey-enzyme-ca', 'tEg', 'rEf', 'gE6'),
      row('ey-inflow-vs-outflow', 'tEg', 'rEf', 'gE4'),
      row('ey-bb-mech ey-bb-no-outflow ey-bb-asthma-choice ey-bb-gel-wheeze ey-bb-levo-cataract ey-bb-compression ey-bb-betaxolol-feature ey-bb-efficacy-choice ' +
          'ey-bb-ocular-se ey-bb-insomnia-reverse ey-bb-gel-once-daily ey-bb-bronchospasm-why ey-a2-asthma-alternative ey-class-inflow-select ' +
          'ey-class-inflow-pair ey-bb-vs-cai-targets ey-bb-agonist-evidence ey-cai-best-understood ey-combo-timolol-dorzolamide ey-bb-relatively-selective ' +
          'ey-bb-brady-brimonidine-tell', 'tEi', 'rEg', 'gE7'),
      row('ey-in-epithelium-targets ey-cai-enzyme-class ey-class-receptor-classes', 'tEi', 'rEg', 'gE6'),
      row('ey-a2-two-extras ey-a2-long-term-choice ey-a2-post-surgery ey-a2-foreign-body-reverse ey-a2-main-mech ey-a2-neuroprotection-drug ' +
          'ey-a2-uveoscleral-route ey-a2-systemic-se ey-a2-two-actions-drug ey-a2-allergy-case ey-class-no-outflow-drug ey-class-prostaglandin-reverse ' +
          'ey-combo-brinzolamide-brimonidine', 'tEi', 'rEg', 'gE8'),
      row('ey-cai-mech ey-cai-step-blocked ey-cai-solutes ey-cai-low-bicarb ey-cai-acidosis-sequence ey-cai-diuresis ey-cai-monitor ey-cai-when-oral ' +
          'ey-cai-oral-reverse ey-cai-ophthalmic-pair ey-cai-oral-vs-drops ey-cai-oral-se-select ey-cai-monitor-patient ey-acid-hplus-exchange ey-cai-common-step ' +
          'ey-bicarb-both-organs ey-cai-thirst-why', 'tEi', 'rEg', 'gE9'),
      row('ey-m3-mech ey-ache-which-drug ey-m3-carb-vs-pilo ey-m3-allergy-switch ey-ache-when-used ey-m3-ciliary-spasm ey-m3-systemic-why ey-m3-compress ' +
          'ey-m3-effects-select ey-m3-vs-bb-inflow-outflow ey-orange-netting ey-out-class-names ey-m3-dim-light ey-case-sweating', 'tEo', 'rEg', 'gE11'),
      row('ey-ache-mech ey-ache-cataract-reverse ey-ache-why-limited ey-ache-vs-m3-agonist ey-ache-vs-m3-ae', 'tEo', 'rEg', 'gE12'),
      row('ey-pg-vs-m3-muscle ey-pg-receptor ey-pg-mech-chain ey-pg-route ey-pg-no-inflow ey-pg-eye-colour ey-route-two-drugs ey-brimonidine-vs-pg ey-pg-spaces ' +
          'ey-two-class-which-mech ey-ache-vs-pg-direction', 'tEo', 'rEg', 'gE13'),
      row('ey-pg-asthma-case ey-pg-iris-case ey-pg-lbn-no ey-pg-latisse ey-pg-profile ey-pg-drugs ey-m3-vs-pg-ciliary-effect ey-pg-hair-growth', 'tEo', 'rEg', 'gE14'),
      row('ey-rock-target ey-rock-rhoa-glaucoma ey-rock-mech ey-m3-vs-rock-meshwork ey-rock-hyperemia-why ey-rock-hemorrhage ey-rock-verticillata ' +
          'ey-rock-single-drug', 'tEo', 'rEg', 'gE15'),
      row('ey-combo-outflow-pair ey-combo-bb-cai ey-combo-why ey-combo-add-outflow ey-combo-ltn-routes ey-combo-ltn-ae ey-combo-brz-bri ey-combo-bb-bri', 'tEo', 'rEg', 'gE16'),
      row('ey-ac-ige-trigger ey-ac-histamine-effects ey-ac-h1-cns ey-ac-oppose-histamine-vessels ey-ac-sensitization', 'tEa', 'rEa', 'gE21'),
      row('ey-ac-inverse-agonism ey-ac-stabilization-def ey-ac-stabilization-unknown ey-ac-prophylaxis-drug ey-ac-two-mechanisms ey-ac-a2-vs-h1-action ' +
          'ey-ac-timing ey-ac-anti-inflam ey-ac-a2-no-itch', 'tEa', 'rEa', 'gE22'),
      row('ey-ac-no-stabilizer ey-ac-epinastine-eyelid ey-ac-h4-eosinophil ey-ac-alca-side-effects ey-ac-azelastine ey-ac-cetirizine-drowsy ey-ac-nasal-sprays ' +
          'ey-ac-cetirizine-prophylaxis ey-ac-stabilizer-members', 'tEa', 'rEa', 'gE23'),
      row('ey-ac-a2-redness ey-ac-a2-edema ey-ac-a2-members ey-ac-a2-nose-eye', 'tEa', 'rEa', 'gE24'),
      row('ey-ac-brimonidine-two-uses', 'tEa', 'rEa', 'gE8'),
      row('ey-ac-combo', 'tEa', 'rEa', 'gE25'),
      row('ey-de-prevalence ey-de-causative-drugs ey-de-med-induced ey-de-features', 'tEd', 'rEd', 'gE26'),
      row('ey-de-inflammation ey-de-cyclosporine-moa ey-de-cyclophilin ey-de-fkbp ey-de-signal-cascade ey-de-nfat-step ey-de-nfat-blocked ey-de-oral-risk ' +
          'ey-de-cyclosporine-se ey-de-cyclo-vs-lifi ey-de-cni-shared', 'tEd', 'rEd', 'gE27'),
      row('ey-de-loteprednol ey-de-cs-moa ey-de-lifitegrast-moa ey-de-lfa-cytokines ey-de-lifitegrast-dose ey-de-contacts ey-de-discolor ey-de-lifitegrast-se ' +
          'ey-de-surface-target', 'tEd', 'rEd', 'gE28'),
      row('ey-de-varenicline-moa ey-de-varenicline-route ey-de-varenicline-dose ey-de-varenicline-form ey-de-varenicline-rare ey-de-not-anti-inflammatory', 'tEd', 'rEd', 'gE29'),
      row('oo-fg-aryloxypropanolamine oo-fg-name-parts oo-fg-imidazoline oo-fg-sulfonamide oo-fg-sulfone oo-fg-carbamate oo-fg-carbamate-vs-ester oo-fg-prostaglandin-skeleton oo-fg-steroid-skeleton oo-fg-sulfur-groups oo-gl-why-pressure oo-gl-goals oo-gl-adrenergic-pair', 'rOc', 'gO9'),
      row('oo-adme-cornea-hydrophilic oo-adme-cornea-lipophilic oo-adme-cornea-sandwich oo-adme-conj-features oo-adme-prodrug-conj oo-adme-more-entry', 'rOc', 'gO10'),
      row('oo-fg-same-class-betaxolol oo-fg-same-class-clonidine oo-a2-class-brimonidine oo-a2-vs-bb-mech oo-a2-why-brimonidine oo-a2-clonidine-cns oo-a2-logp-order oo-a2-apraclonidine-change oo-a2-brimonidine-ring oo-a2-potency oo-a2-brands oo-a2-sar-nh-alpha2 oo-a2-sar-ch2 oo-a2-sar-min oo-ac-dec-linker oo-ac-dec-new-nh oo-ac-mcs-sar oo-ac-imidazoline-name', 'rOc', 'gO11'),
      row('oo-bb-class-timolol oo-bb-mech oo-bb-moleculeX oo-bb-potency oo-bb-stereo oo-bb-betaxolol-selectivity oo-bb-logp-highest oo-bb-logp-pair oo-bb-brands oo-bb-class-carteolol oo-ac-dec-moa oo-ac-cyclopentane-pg', 'rOc', 'gO12'),
      row('oo-de-lifitegrast-acid-vs-sulfonamide oo-ac-dual-sar oo-ac-cai-key-fg', 'rOg', 'gO21'),
      row('oo-ac-irrev-fg oo-ac-rank', 'rOg', 'gO22'),
      row('oo-ac-cromolyn-class', 'rOg', 'gO24'),
      row('oo-de-two-approaches oo-de-cyclosporine-class oo-de-lifitegrast-cbda oo-de-new-calcineurin oo-de-lifitegrast-class oo-de-logp-vs-targets oo-de-lifitegrast-elim oo-ac-dual-def', 'rOd', 'gO25'),
      row('oo-ac-pheniramine-gen oo-ac-livostin oo-ac-nitrile oo-ac-cetirizine-features oo-ac-acid-multi oo-ac-lodoxamide oo-ac-cromolyn-linker oo-ac-mcs-moa oo-ac-gc-moa', 'rOd', 'gO26'),
      row('oo-ac-dec-class oo-ac-dec-phenol oo-ac-dec-naphthalene oo-ac-dec-tetrahydro oo-ac-dec-oxy-xylo oo-ac-chromone-salt oo-ac-dual-cooh-multi oo-ac-dual-azelastine oo-ac-dual-sulfur oo-ac-dual-nh2 oo-ac-dual-dimethylamino', 'rOd', 'gO27'),
      row('oo-de-summary-group oo-ac-steroid-methyls oo-ac-ring-d oo-ac-side-chain oo-ac-highest-number oo-ac-alpha-beta oo-ac-sar-triple oo-ac-pred-vs-hc oo-ac-dex-vs-pred oo-ac-hc-none oo-ac-loteprednol oo-ac-9f-multi oo-ac-new-steroid', 'rOs', 'gO28'),
      row('oo-b-count-three-carbons oo-b-ciliary-first-line oo-b-duration-12-24 oo-b-mixed-s-isomer', 'rOc', 'gO12'),
      row('oo-b-bicarbonate-water-movement oo-b-first-vs-second-gen oo-b-second-gen-pair oo-b-deethylation-product oo-b-binding-counts', 'rOg', 'gO21'),
      row('oo-b-why-not-acetylcholine oo-b-four-group-rank oo-b-aging-antidote oo-b-irreversible-long-activity oo-b-intermediate-and-shortest oo-b-muscarinic-outflow', 'rOg', 'gO22'),
      row('oo-b-pg-lipophilic-potent oo-b-unstable-and-halogen oo-b-c15-ketone', 'rOg', 'gO23'),
      row('oo-b-ep2-vs-fp oo-b-ep2-selectivity oo-b-rock-isoforms-activation', 'rOg', 'gO24'),
      row('oo-b-ded-three-components oo-b-ded-target-component oo-b-ded-steroid-short-term oo-b-cyclosporine-chain oo-b-cyclosporine-penetrates-local oo-b-lifitegrast-fate', 'rOd', 'gO25'),
      row('oo-b-selfassess-cai-zinc', 'rOg', 'gO29'),
      row('oo-b-selfassess-imidazoline-class oo-b-selfassess-pg-core oo-b-selfassess-irreversible-rank', 'rOg', 'gO30'),
      row('oo-p-nf-how oo-p-nf-list oo-p-nf-remin-three oo-p-nf-rinse-only', 'rOr', 'gO7'),
      row('oo-p-fluoride-supported oo-p-fluoride-not-supported oo-p-fluorosis-look', 'rOr', 'gO6'),
      row('oo-p-fg-circled-ab oo-p-fg-draw-carbamate oo-p-fg-drug-class oo-p-fg-slide27-set', 'rOc', 'gO9'),
      row('oo-p-deethyl-active-role oo-p-deethyl-brinz-structure oo-p-deethyl-dorz-structure', 'rOg', 'gO21'),
      row('lm-collect-lopez-poll lm-collect-formulation-highest lm-collect-formulation-second lm-collect-nasal-chronic lm-collect-diphenhydramine-class lm-collect-which-list-drug lm-collect-atropine-select lm-collect-formulation-statements lm-collect-anticholinergic-effect lm-collect-reverse-ioprise lm-collect-asymptomatic-counsel lm-collect-risk-factor', 'gL1'),
      row('lm-assess-goal lm-assess-who-target lm-assess-initial-target lm-assess-compute-target lm-assess-goal-not-met lm-assess-goal-met lm-assess-four-categories lm-assess-forgets-evening lm-assess-cost-gap lm-assess-arthritis lm-assess-asthma-timolol lm-assess-duplicate lm-assess-need-additional lm-assess-more-effective lm-assess-bak-stinging lm-assess-which-indication lm-assess-adherence-select lm-assess-sig-eye', 'gL2', 'rLm'),
      row('lm-pga-lopez-frequency lm-pga-first-line lm-pga-profile lm-pga-reasons-select lm-pga-latanoprost-tid lm-pga-latisse lm-pga-which-prost lm-pga-prodrug lm-pga-asthma-first lm-pga-night lm-pga-foreign-body lm-pga-reverse-lashes lm-pga-effects-select lm-pga-contraindication lm-pga-bak lm-pga-pf-recognize lm-pga-pf-tradeoff lm-pga-intolerance-plan lm-pga-first-step-inadequate lm-pga-switch-bimatoprost lm-pga-bimatoprost-fail lm-pga-cost-generic lm-pga-select-counsel lm-pga-rocklatan', 'gL3', 'rLc', 'tLg'),
      row('lm-bb-timoptic-evening-dose-poll lm-bb-carteolol-tid-error lm-bb-levobunolol-sig lm-bb-timolol-most-dispensed lm-bb-betaxolol-why-rare lm-bb-betaxolol-stinging-suspension lm-bb-gel-brady-adherence lm-bb-systemic-vs-local lm-bb-pulse-48-cause lm-bb-asthma-uncontrolled lm-bb-oral-metoprolol lm-bb-precaution-set lm-bb-betaxolol-copd-lower-risk lm-bb-cosopt-pf-preservative lm-bb-increase-concentration lm-bb-sig-recognition lm-bb-gel-bid-error lm-bb-combigan-precaution lm-bb-iop-range', 'gL3', 'rLc', 'tLg'),
      row('lm-a2-otc-brimonidine-poll lm-a2-apraclonidine-qid-error lm-a2-alphagan-daily-low lm-a2-local-effects-set lm-a2-reverse-dry-mouth lm-a2-precaution-set lm-a2-stroke-bp lm-a2-tca-interaction lm-a2-apraclonidine-decrease-frequency lm-a2-brimonidine-intolerance-concentration lm-a2-inadequate-check-compliance lm-a2-rebound-otc lm-a2-apraclonidine-more-ae lm-a2-iop-and-surgery', 'gL3', 'rLc', 'tLg'),
      row('lm-cai-dorzolamide-bid-low lm-cai-drops-per-day lm-cai-stinging-duration lm-cai-blurred-vision-settle lm-cai-blur-day-vs-night lm-cai-why-late-in-sequence lm-cai-oral-short-term lm-cai-oral-why-last lm-cai-acidosis-symptoms lm-cai-precaution-set lm-cai-sulfa-allergy lm-cai-preservative-free-swap lm-cai-inadequate-to-oral lm-cai-frequency-recognition', 'gL3', 'rLc', 'tLg'),
      row('lm-chol-pilocarpine-bid-low lm-chol-why-rarely-used lm-chol-brow-ache-cause lm-chol-night-vision lm-chol-asthma-inhaler lm-chol-precaution-set lm-chol-systemic-set lm-chol-carbachol-surgery lm-chol-intolerance-reduce-concentration', 'gL3', 'rLc', 'tLg'),
      row('lm-rock-netarsudil-morning-error lm-rock-hemorrhage-counsel lm-rock-why-last lm-rock-position-sequence lm-rock-iop-like-timolol lm-rock-rocklatan lm-rock-local-set', 'gL3', 'rLc', 'tLg'),
      row('lm-seq-next-agent-poll lm-seq-add-alpha2 lm-seq-add-beta-blocker lm-seq-add-cholinergic lm-seq-add-rock-last lm-seq-no-class-after-rock lm-seq-brand-regimen lm-seq-combination-hidden-classes lm-seq-intolerance-skip-class lm-seq-fix-before-add lm-seq-keep-adding lm-seq-order-subset lm-seq-order-list lm-seq-frequency-by-class lm-seq-combo-frequency-list lm-seq-combo-class-pairs lm-seq-combo-conversion-cosopt lm-seq-combo-simbrinza-choice lm-seq-fewest-instillations lm-seq-adherence-reason', 'gL3', 'rLo', 'tLg'),
      row('lmc-tip-touch-bacteria lmc-elc-copd-timolol lmc-elc-mechanism lmc-elc-pressing-pain lmc-instill-steps-multi lmc-tip-and-blink-two-points lmc-four-solutions-washout lmc-order-two-solutions-suspension lmc-why-suspension-last lmc-betaxolol-suspension-shake-order lmc-gel-wait-ten lmc-gel-first-error lmc-gel-grouped-with-ointments lmc-multi-product-rules-multi lmc-order-three-forms lmc-wait-reason-washout lmc-four-solutions-total-time lmc-redesign-combigan lmc-redesign-four-bottles-full lmc-duplicate-timolol lmc-asthma-two-drugs lmc-cost-single-use-pf lmc-redesign-select-changes lmc-redesign-five-bottles-pilocarpine lmc-lens-remove-wait-15 lmc-lens-why-trap lmc-lens-sequence-two-solutions lmc-lens-not-excluded lmc-lens-statements-multi lmc-lens-bak-irritation-two-points lmc-store-netarsudil-6wk lmc-store-two-new-bottles lmc-store-and-order-transition lmc-sig-wrong-eye lmc-sig-correct-multi lmc-sig-combigan-tid-error lmc-gel-lens-sequence', 'gL4', 'rLa'),
      row('lmc-fu-efficacy-iop-who lmc-fu-timeline-after-target lmc-fu-plan-who-what', 'gL5'),
    ],
    bySub: {},
    byLecture: {},
  };
})();
