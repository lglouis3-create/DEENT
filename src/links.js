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
    gS2:     ['guide', 'gobj-p7-2', 'Guide: dandruff, seborrheic dermatitis or psoriasis (Scaly Dermatoses)'],
    gS5:     ['guide', 'gobj-p7-5', 'Guide: non-drug therapy (Scaly Dermatoses)'],
    gS6:     ['guide', 'gobj-p7-6', 'Guide: best treatment (Scaly Dermatoses)'],
    rSsh:    ['ref',   'ref-p7-shampoo', 'Reference: dandruff and seborrheic dermatitis (Dr. Patel)'],
    rSpso:   ['ref',   'ref-p7-pso', 'Reference: psoriasis severity, algorithms and topicals (Dr. Patel)'],
    rSsys:   ['ref',   'ref-p7-sys', 'Reference: psoriasis systemic agents and PUVA (Dr. Patel)'],
    rSbio:   ['ref',   'ref-p7-bio', 'Reference: psoriasis biologics (Dr. Patel)'],
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
          'p5-abcde p5-dd-case-nonpharm', 'gP5'),
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
      row('p7-cmp-inflammation p7-cmp-turnover p7-cmp-psoriasis-look p7-cmp-sd-location p7h-against-dandruff p7h-organisms', 'gS2'),
      row('p7-hc-not-dandruff p7-sulfur-not-psoriasis', 'rSsh', 'gS6'),
      row('p7-ftu-face-bid-7d p7-ftu-face-daily-7d', 'rPftu'),
      row('p7-pso-case-severity p7-pso-case-otc p7-pso-lifestyle p7-mild-mod-first p7-tcs-most-effective p7-tcs-regimen p7-topical-regimen-match p7-intertriginous p7h-mild-mod-after-tcs p7-mod-sev-first-systemic p7-systemic-keep-topical p7-biologic-place p7-pso-followup', 'rSpso', 'gS6'),
      row('p7h-bsa-9 p7h-case-nsaid-worsen p7-pso-epi p7-pso-precipitating-drug p7-pso-comorbidities p7-pso-plaque-signs p7-bsa-mild p7-bsa-severe p7-bsa-how p7-pso-goals', 'gS2'),
      row('p7-mtx-folic p7-mtx-monitor p7-mtx-cirrhosis p7-mtx-hepatotox-risk p7-onset-compare p7-csa-duration p7-csa-uncontrolled-htn p7-apremilast-class-dose p7-apremilast-counsel p7-acitretin-women p7-tofacitinib p7-puva-place p7-puva-moa-ae', 'rSsys', 'gS6'),
      row('p7-bio-key-points p7-bio-active-infection p7-bio-vaccine p7-bio-common-ae p7-tnf-chf p7h-chf-choose-biologic p7-tnf-ms-relative p7-tnf-safety p7-tnf-members p7-il17-crohns p7-brodalumab-rems p7-ustekinumab-warfarin p7-il-class-id p7-brand-generic-match', 'rSbio', 'gS6'),
    ],
    bySub: {},
    byLecture: {},
  };
})();
