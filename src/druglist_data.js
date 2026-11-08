/* ==========================================================================
   DRUG LIST DATA, PHAR 4346 DEENT (Exam 1)
   --------------------------------------------------------------------------
   TEMPORARY course-level presentation: this file and druglist_ui.js add a
   "Drug list" tab on top of the kit core (25c643d) without changing it. Both
   are to be replaced by the shared-kit Drug List feature when the kit has one.

   Source of the drug list: the course dermatology drug chart
   ("2026 Drug Chart - Dermatology", 7 pages; Drive 1wJ2LzXY8V_BjqtghJGI5waVEQ2t-YUib,
   367,545 bytes, the same file as Louis's upload of 2026-11-08). The chart is
   a guide; each professor's slides and recording decide what is examinable
   for that professor's material (Dr. Smith's Exam 1 hints for hers, Dr.
   Sikazwe's assigned pages of 11/06 for his).

   Where each field comes from:
     target / mechanism   NOT here: read at run time from the Reference tab's
                          "Drug targets: write it first, then check" table
                          (reference.js, section ref-targets), the single
                          source of targets. `tgt` names its row id. Each part
                          carries its lecturer (data-by, default smith) and
                          citation (data-cite, default the row's Source cell).
     why                  only where Dr. Smith's own slide or recording says
                          why the drug helps the condition; always `cite`d.
     use, ae, boxed,      each statement is {t, by, cite}; by is 'smith',
     photo, notes         'sikazwe' or 'chart'. Statements from different
                          lecturers or from the chart are never merged. A note
                          {t, by: 'remark'} is a remark about the sources
                          (shown as "Note", with no source chip).
     chartClass, chartUse the chart's pharmacological class and indication,
                          shown labelled "chart". chartUse is null where the
                          chart's columns are misaligned (p. 5, see CHART_NOTES).
   Abbreviations in cites: PCol = Skin-PCol-Students-2026.pdf slide,
   Pathophys = Skin-Pathophys-Students-2026.pdf slide, Sun =
   DEENT_Sun_Exposure_2026.pdf slide, DPAW = f26-DEENT-DPAW-mc.pdf file page,
   T = lecture-only transcript line (10/29, 10/30, 11/03) or 11/04 T@ time.

   status   'taught'  the drug is named on an Exam 1 slide (Smith, or one of
                      Dr. Sikazwe's assigned pages);
            'class'   its class is taught for Exam 1 but the drug itself is
                      named only on the chart (or only on a page outside
                      Dr. Sikazwe's assigned pages): optional;
            'chart'   chart only: optional, not in the Exam 1 lectures.
   q        a regular expression (source text, case-insensitive) run over each
            question's stem, correct answer and concept, to list the questions
            on the drug. Nothing here changes a question.
   No storage of any kind is used by the Drug list.
   ========================================================================== */
const DRUGLIST = (() => {
  const S = (t, cite) => ({t, by: 'smith', cite});
  const K = (t, cite) => ({t, by: 'sikazwe', cite});
  const C = (t, page) => ({t, by: 'chart', cite: 'Chart p. ' + page});
  // a maintainer's remark about the sources (no lecturer or chart chip)
  const R = t => ({t, by: 'remark'});

  const CLASSES = {
    sunscreen: 'Chemical (organic) sunscreens',
    sunblock:  'Physical sunscreens (sunblocks)',
    anesth:    'Topical anesthetics (Na channel blockers)',
    pde4:      'PDE-4 inhibitors',
    cni:       'Calcineurin inhibitors',
    il4r:      'IL-4R / IL-13 receptor antagonist',
    jak:       'JAK inhibitors',
    kerat:     'Keratolytics',
    abx:       'Antibiotics / antimicrobials',
    nrb:       'Nuclear receptor binders (retinoids, vitamin D analog)',
    antiandr:  'Antiandrogen',
    cytotox:   'Cytotoxic agents',
    dhfr:      'Dihydrofolate reductase inhibitor',
    costim:    'Inhibitor of co-stimulation',
    tnf:       'TNF-α inhibitors',
    il1223:    'IL-12 & IL-23 inhibitor',
    il23:      'IL-23 inhibitors',
    il17:      'IL-17 inhibitors',
    psoralen:  'Psoralen',
    emollient: 'Emollient',
    azole:     'Azole antifungal',
    steroid:   'Topical corticosteroids',
  };
  // questions on a class as a whole (shown beside a drug's own questions)
  const CLASS_Q = {steroid: 'corticosteroid|glucocorticoid', sunscreen: 'sunscreen|organic sunscreen', sunblock: 'sunblock|physical sunscreen',
    pde4: 'PDE-?4', cni: 'calcineurin', jak: '\\bJAK', kerat: 'keratolytic', abx: 'antibiotic|antimicrobial|tetracycline|macrolide',
    nrb: 'retinoid|nuclear receptor|vitamin D', cytotox: 'cytotoxic|\\btars?\\b', tnf: 'TNF', il23: 'IL-23', il17: 'IL-17'};
  const DISEASES = {ad: 'Atopic dermatitis', pso: 'Psoriasis', acne: 'Acne',
                    sun: 'Sun protection', burn: 'Sunburn relief'};
  const PAGES = {1: 'Sun protection and sunburn relief', 2: 'Atopic dermatitis', 3: 'Acne',
                 4: 'Psoriasis', 5: 'Psoriasis', 6: 'Topical steroids'};

  // shared statements, so a class's line is written once
  const WHY = {
    pde4: S('PDE-4 is the main PDE isoform in inflammatory cells (mast cells, eosinophils, neutrophils, T cells); more cAMP inhibits those cells', 'PCol 32'),
    cniTop: S('Inhibits activation of the T cells and mast cells involved in AD, blocking proinflammatory cytokines and mediators; relieves itching after the first few days', 'PCol 27'),
    jak: S('Inhibits the production of inflammatory cytokines', 'PCol 75–76'),
    tetra: S('Efficacy in acne may depend more on anti-inflammatory activity than on killing bacteria', 'PCol 45'),
    abx: S('In acne a bacterium contributes to the disease, so antibiotics are used there', '10/30 T 574–576'),
    retAcne: S('Less cohesion between epidermal cells and faster cell turnover: open comedones are expelled and closed ones open', 'PCol 15'),
    retPso: S('For psoriasis the precise mechanism is unknown; it may relate to anti-inflammatory and antiproliferative actions', 'PCol 15'),
    cyto: S('Cytotoxic agents decrease the rate of epidermal cell turnover', 'PCol 53'),
    tnf: S('TNF-α is an inflammatory cytokine; blocking it reduces the number and size of plaques', 'PCol 70'),
    il23: S('Inhibits the release of proinflammatory cytokines and chemokines', 'PCol 68–69'),
    il17: S('Keratinocytes are the main target of IL-17 in psoriasis, where it drives epidermal hyperproliferation and barrier dysfunction; blocking it reduces the number and size of plaques', 'PCol 65–66'),
    steroid: S('Used for psoriasis and atopic dermatitis because they are immunosuppressive', 'PCol 11'),
    sunscreen: S('Absorbs UV radiation (UVB and/or UVA) and converts it to heat', 'Sun 22'),
    sunblock: S('Inorganic particles scatter or reflect UV, visible and infrared radiation; for exposed areas such as nose and ears', 'Sun 20'),
  };
  const AE = {
    cniTop: S('Burning at the application site; potential local skin carcinogenesis (recommend sun protection); infections if high blood levels are reached', 'PCol 28'),
    cniOral: S('Oral: nephrotoxicity, hypertension, upper respiratory infections (most common), cough, headache; many CYP3A4 interactions', 'PCol 30'),
    tetra: S('Pseudomembranous colitis; bones and teeth discolored and growth impaired in the young; photosensitivity; superinfection; not in pregnancy or under 8 years', 'PCol 44–45'),
    macro: S('Oral: N/V/D, epigastric pain, many drug interactions. Topical: burning and drying, especially with benzoyl peroxide; resistance', 'PCol 47'),
    topRet: S('Erythema and dryness early on; may increase the tumorigenic potential of UV (counsel sun avoidance and sunscreen); photosensitivity; comedones may flare in weeks 4–6', 'PCol 16'),
    tnfBox: S('Serious infections that may lead to hospitalization or death; lymphoma and other malignancies, some fatal, reported in children and adolescents', 'PCol 70; 11/03 T 498–500'),
    il17: S('Infection risk: evaluate for tuberculosis before starting; nasopharyngitis about 12%', 'PCol 66'),
    steroid: S('Local: striae and atrophy, perioral dermatitis, acne, rosacea, telangiectasia, purpura; systemic (with potency, site, occlusion, area, duration): HPA suppression, infection, hyperglycemia, cataracts, glaucoma, growth retardation', 'PCol 12'),
    sunblock: S('May occlude pores (miliaria, folliculitis); may stain clothing; protection falls after 2 hours of direct sun', 'Sun 21'),
  };
  const PHOTO_RET = S('Topical retinoids may cause photosensitivity', 'PCol 16');
  const SIK_UNASSIGNED = 'Dr. Sikazwe\'s slide for this drug is outside his assigned pages for Exam 1 (list of 11/06).';
  const STEROID_CLASS_NOTE = S('Dr. Smith teaches the class and its mechanism; specific steroid products are Dr. Sikazwe\'s material ("a lot of med chem")', '10/29 T 585–586');

  const D = [
    /* ---------- p. 1: sun protection and sunburn relief ---------- */
    {id: 'padimate', name: 'Padimate O', alt: ['octyl dimethyl PABA'], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Para-aminobenzoic acid (PABA)', chartUse: 'Sun protection',
     tgt: 'tgt-padimate', why: WHY.sunscreen,
     ae: [S('Aminobenzoates: the most effective at absorbing UVB; may stain clothing', 'Sun 24')],
     notes: [K('PABAs: UVB; PABA allergy (photosensitivity)', 'DPAW 63')], atlas: 'padimate o', q: 'padimate|aminobenzoate|\\bPABA'},
    {id: 'octinoxate', name: 'Octyl methoxycinnamate', alt: ['ethylhexyl p-methoxycinnamate', 'octinoxate'], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Cinnamates', chartUse: 'Sun protection',
     tgt: 'tgt-octinoxate', why: WHY.sunscreen,
     ae: [S('Cinnamates do not adhere to skin well and depend on the vehicle for substantivity', 'Sun 24')],
     notes: [K('Octinoxate: cinnamate, UVB; absorbed through skin', 'DPAW 63'), C('The chart prints "Ethyhexyl p-methoxycinnamate"', 1)], atlas: 'octinoxate', q: 'octinoxate|methoxycinnamate|cinnamate'},
    {id: 'octisalate', name: '2-Ethylhexyl salicylate', alt: ['octisalate'], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Salicylates', chartUse: 'Sun protection',
     tgt: 'tgt-salicylates', why: WHY.sunscreen,
     ae: [S('Salicylates do not adhere to skin well and are easily removed by water or perspiration', 'Sun 24')],
     notes: [K('Octisalate: salicylate, UVB', 'DPAW 64'), C('The chart prints "2-ethyhexyl salicylate"', 1)], atlas: 'octisalate', q: 'octisalate|ethylhexyl salicylate'},
    {id: 'homosalate', name: 'Homosalate', alt: [], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Salicylates', chartUse: 'Sun protection',
     tgt: 'tgt-salicylates', why: WHY.sunscreen,
     ae: [S('Salicylates do not adhere to skin well and are easily removed by water or perspiration', 'Sun 24')],
     notes: [K('Homosalate: salicylate, UVB', 'DPAW 64')], atlas: 'homosalate', q: 'homosalate'},
    {id: 'oxybenzone', name: 'Oxybenzone', alt: [], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Benzophenones', chartUse: 'Sun protection',
     tgt: 'tgt-benzophenones', why: WHY.sunscreen,
     ae: [S('Benzophenones: poor substantivity; can cause sensitization', 'Sun 24')],
     notes: [K('Benzophenones: UVB/UVA; highly absorbed through skin', 'DPAW 65')], atlas: 'oxybenzone', q: 'oxybenzone|benzophenone'},
    {id: 'dioxybenzone', name: 'Dioxybenzone', alt: [], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Benzophenones', chartUse: 'Sun protection',
     tgt: 'tgt-benzophenones', why: WHY.sunscreen,
     ae: [S('Benzophenones: poor substantivity; can cause sensitization', 'Sun 24')],
     notes: [K('Benzophenones: UVB/UVA', 'DPAW 65')], q: 'dioxybenzone'},
    {id: 'meradimate', name: 'Menthyl anthranilate', alt: ['meradimate'], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Anthranilates', chartUse: 'Sun protection',
     tgt: 'tgt-anthranilate', why: WHY.sunscreen,
     ae: [S('Anthranilates are used only in combination products to give broad UV coverage', 'Sun 24')],
     notes: [K('Meradimate: anthranilate, UVA; degrades faster than avobenzone', 'DPAW 62')], atlas: 'meradimate', q: 'anthranilate|meradimate'},
    {id: 'avobenzone', name: 'Avobenzone', alt: [], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Chemical sunscreen', chartChem: 'Dibenzoylmethane', chartUse: 'Sun protection',
     tgt: 'tgt-avobenzone', why: WHY.sunscreen,
     ae: [S('Dibenzoylmethanes: activity starts to decrease after 15 minutes of use', 'Sun 24')],
     notes: [K('Avobenzone: UVA; photodegrades (half-life about 2 h), reapply every 2 h', 'DPAW 62')], atlas: 'avobenzone', q: 'avobenzone|dibenzoylmethane'},
    {id: 'zincoxide', name: 'Zinc oxide', alt: [], brands: ['Zinca', 'Desitin'], page: 1, pages: [1, 5], cls: 'sunblock', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Physical sunscreen', chartChem: 'Oxides', chartUse: 'Sun protection (p. 1); topical skin protectant (p. 5)',
     tgt: 'tgt-sunblocks', tgt2: 'tgt-zincprot', why: WHY.sunblock, ae: [AE.sunblock],
     notes: [C('Listed twice: sun protection (p. 1, Zinca) and on the psoriasis page as a skin protectant (p. 5, Desitin); its second target row is the Reference row "Zinc oxide (skin protectant)"', 1),
             K('Metal oxides reflect and scatter UVA and UVB; inert', 'DPAW 61')], atlas: 'zinc oxide', q: 'zinc oxide'},
    {id: 'tio2', name: 'Titanium dioxide', alt: ['titanium oxide'], brands: [], page: 1, cls: 'sunblock', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Physical sunscreen', chartChem: 'Oxides', chartUse: 'Sun protection',
     tgt: 'tgt-sunblocks', why: WHY.sunblock, ae: [AE.sunblock],
     notes: [C('The chart prints "Titanium oxide"; the slides say titanium dioxide', 1), K('Metal oxides reflect and scatter UVA and UVB; inert', 'DPAW 61')],
     atlas: 'titanium dioxide', q: 'titanium'},
    {id: 'benzocaine', name: 'Benzocaine', alt: [], brands: ['Americaine', 'Solarcaine', 'Lanacane'], page: 1, cls: 'anesth', dz: ['burn'], rx: 'OTC',
     status: 'chart', chartClass: 'Na channel blockers (topical anesthetics)', chartUse: 'Sunburn relief; pain and itching of stings and insect bites',
     tgt: 'tgt-anesthetics', q: 'benzocaine'},
    {id: 'dibucaine', name: 'Dibucaine', alt: [], brands: ['Nupercainal'], page: 1, cls: 'anesth', dz: ['burn'], rx: 'OTC',
     status: 'chart', chartClass: 'Na channel blockers (topical anesthetics)', chartUse: 'Sunburn relief; pain and itching of stings and insect bites',
     tgt: 'tgt-anesthetics', q: 'dibucaine'},
    {id: 'tetracaine', name: 'Tetracaine', alt: [], brands: ['Dermocaine'], page: 1, cls: 'anesth', dz: ['burn'], rx: 'OTC',
     status: 'chart', chartClass: 'Na channel blockers (topical anesthetics)', chartUse: 'Sunburn relief; pain and itching of stings and insect bites',
     tgt: 'tgt-anesthetics', q: 'tetracaine'},
    {id: 'lidocaine', name: 'Lidocaine', alt: [], brands: ['Xylocaine'], page: 1, cls: 'anesth', dz: ['burn'], rx: 'Rx/OTC',
     status: 'chart', chartClass: 'Na channel blockers (topical anesthetics)', chartUse: 'Sunburn relief; pain and itching of stings and insect bites',
     tgt: 'tgt-anesthetics', q: 'lidocaine'},
    {id: 'bemotrizinol', name: 'Bemotrizinol', alt: ['BEMT'], brands: [], page: 1, cls: 'sunscreen', dz: ['sun'], rx: 'OTC',
     status: 'taught', chartClass: 'Organic chemical sunscreen', chartChem: 'Triazine and methoxybenzene', chartUse: 'Sun protection',
     tgt: 'tgt-bemotrizinol', notes: [K('Methoxybenzene and triazine, UVB/UVA; photostable', 'DPAW 66'),
       R('Not named on Dr. Smith\'s sun slides; her list of sunscreen families (Sun 24) has no triazine.')],
     atlas: 'bemotrizinol', q: 'bemotrizinol|\\bBEMT'},

    /* ---------- p. 2: atopic dermatitis ---------- */
    {id: 'crisaborole', name: 'Crisaborole', alt: [], brands: ['Eucrisa'], page: 2, cls: 'pde4', dz: ['ad'], rx: 'Rx',
     status: 'taught', chartClass: 'Phosphodiesterase 4 (PDE-4) inhibitor', chartUse: 'Topical: mild to moderate atopic dermatitis',
     use: [S('Mild-to-moderate atopic dermatitis, age 2 years and older', 'PCol 33')],
     tgt: 'tgt-crisaborole', why: WHY.pde4,
     ae: [S('Application site pain (4%); hypersensitivity (under 1%): discontinue immediately; long-term safety unknown', 'PCol 33')],
     atlas: 'crisaborole', q: 'crisaborole'},
    {id: 'pimecrolimus', name: 'Pimecrolimus', alt: [], brands: ['Elidel'], page: 2, cls: 'cni', dz: ['ad', 'pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Calcineurin inhibitor', chartUse: 'Topical: atopic dermatitis; psoriasis (unlabeled)',
     use: [S('Topical, atopic dermatitis in adults and children over 2; psoriasis off label', 'PCol 27')],
     tgt: 'tgt-pimecrolimus', why: WHY.cniTop, ae: [AE.cniTop],
     notes: [S('May preferentially distribute to the skin rather than the systemic circulation', 'PCol 27')], atlas: 'pimecrolimus', q: 'pimecrolimus'},
    {id: 'tacrolimus', name: 'Tacrolimus', alt: [], brands: ['Protopic'], page: 2, cls: 'cni', dz: ['ad', 'pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Calcineurin inhibitor', chartUse: 'Topical: atopic dermatitis; psoriasis (unlabeled)',
     use: [S('Topical, atopic dermatitis in adults and children over 2; psoriasis off label', 'PCol 27')],
     tgt: 'tgt-tacrolimus', why: WHY.cniTop, ae: [AE.cniTop, AE.cniOral, S('Tacrolimus only (oral): neuropathies', 'PCol 30')],
     notes: [S('Boxed warning stated for oral calcineurin inhibitors: lymphoma and other malignancies, particularly of the skin; bacterial, viral, fungal and protozoal infections', 'PCol 30'),
             R('The chart lists topical tacrolimus, so this card is not marked as carrying a boxed warning.')],
     atlas: 'tacrolimus', q: 'tacrolimus'},
    {id: 'dupilumab', name: 'Dupilumab', alt: [], brands: ['Dupixent'], page: 2, cls: 'il4r', dz: ['ad'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-4R and IL-13 receptor antagonist', chartUse: 'Injection: moderate to severe atopic dermatitis',
     use: [S('Adults with moderate-to-severe AD not controlled with topical therapy; given SQ', 'PCol 64')],
     tgt: 'tgt-dupilumab',
     why: S('IL-4 and IL-13 promote IgE synthesis; blocking IL-4Rα lowers release of proinflammatory cytokines, chemokines and IgE', 'PCol 64'),
     ae: [S('Generally mild: nasopharyngitis and headache most frequent; injection site reactions, conjunctivitis, blepharitis, oral herpes, keratitis, eye pruritus, dry eye', 'PCol 64')],
     q: 'dupilumab'},
    {id: 'ruxolitinib', name: 'Ruxolitinib', alt: [], brands: ['Opzelura'], page: 2, cls: 'jak', dz: ['ad'], rx: 'Rx',
     status: 'taught', chartClass: 'Janus kinase (JAK) inhibitor', chartUse: 'Topical: mild to moderate atopic dermatitis',
     use: [S('Used topically and orally (slide 76)', 'PCol 76')],
     tgt: 'tgt-ruxolitinib', why: WHY.jak, atlas: 'ruxolitinib', q: 'ruxolitinib'},
    {id: 'upadacitinib', name: 'Upadacitinib', alt: [], brands: ['Rinvoq'], page: 2, cls: 'jak', dz: ['ad'], rx: 'Rx',
     status: 'taught', chartClass: 'Janus kinase (JAK) inhibitor', chartUse: 'Oral: mild to moderate atopic dermatitis',
     tgt: 'tgt-upadacitinib', why: WHY.jak, atlas: 'upadacitinib', q: 'upadacitinib'},

    /* ---------- p. 3: acne ---------- */
    {id: 'bpo', name: 'Benzoyl peroxide', alt: ['BPO'], brands: ['Clearasil', 'Fostex', 'Oxy-10', 'Benzac AC', 'Benzagel Wash'], page: 3, cls: 'kerat', dz: ['acne'], rx: 'OTC',
     status: 'taught', chartClass: 'Keratolytic', chartUse: 'Acne',
     tgt: 'tgt-bpo', why: S('Loosens keratinocytes so they slough off, increases their turnover, prevents closure of follicles and acts against P. acnes', 'PCol 36'),
     ae: [S('Irritation (drying, peeling, burning, blistering, scaling, edema); potent contact sensitizer; avoid eyes and mucous membranes; an oxidant that can bleach hair and colored fabric', 'PCol 37')],
     atlas: 'benzoyl peroxide', q: 'benzoyl peroxide|\\bBPO\\b'},
    {id: 'sulfur', name: 'Sulfur', alt: [], brands: ['Fostril'], page: 3, cls: 'kerat', dz: ['acne', 'pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Keratolytic', chartUse: 'Acne, psoriasis',
     tgt: 'tgt-sulfur', why: S('Hydrogen sulfide formed in keratinocytes causes inflammation that promotes peeling and unblocking of plugs', 'PCol 38'),
     ae: [S('Redness, skin irritation, peeling; comedogenic', 'PCol 38')], q: '\\bsulfur\\b(?! ?mustard)'},
    {id: 'salicylic', name: 'Salicylic acid', alt: [], brands: ['Oxy Face Scrub', 'Stri-Dex', 'Wart-Off Treatment', 'Compound W'], page: 3, cls: 'kerat', dz: ['acne', 'pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Keratolytic', chartUse: 'Acne, psoriasis, wart remover',
     use: [S('3–6% for dandruff, acne and psoriasis; over 6% may damage skin; up to 40% for warts and corns', 'PCol 40')],
     tgt: 'tgt-salicylic', why: S('Promotes shedding of the stratum corneum: desquamation of keratotic debris', 'PCol 39'),
     ae: [S('Irritation, ulceration at high concentrations, allergy; salicylism; caution on the extremities of patients with diabetes or peripheral vascular disease', 'PCol 40')],
     atlas: 'salicylic acid', q: 'salicylic acid|salicylism'},
    {id: 'sarecycline', name: 'Sarecycline', alt: [], brands: ['Seysara'], page: 3, cls: 'abx', sub: 'Tetracyclines', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (tetracycline)', chartUse: 'Acne',
     tgt: 'tgt-tetracyclines', why: WHY.tetra, ae: [AE.tetra],
     notes: [S('Narrower spectrum than the other tetracyclines (less GI and vulvovaginal disruption); with minocycline, may be less photosensitizing', 'PCol 45')],
     photo: S('Tetracyclines: photosensitivity in fair-skinned people; sarecycline and minocycline may be less photosensitizing', 'PCol 44–45'), q: 'sarecycline'},
    {id: 'minocycline', name: 'Minocycline', alt: [], brands: ['Minocin'], page: 3, cls: 'abx', sub: 'Tetracyclines', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (tetracycline)', chartUse: 'Acne',
     tgt: 'tgt-tetracyclines', why: WHY.tetra, ae: [AE.tetra, S('Minocycline can cause ototoxicity', 'PCol 45')],
     notes: [S('More lipid soluble than tetracycline, entering the pilosebaceous follicle better', 'PCol 45')],
     photo: S('Tetracyclines: photosensitivity in fair-skinned people; minocycline and sarecycline may be less photosensitizing', 'PCol 44–45'), atlas: 'minocycline', q: 'minocycline'},
    {id: 'doxycycline', name: 'Doxycycline', alt: [], brands: ['Vibramycin'], page: 3, cls: 'abx', sub: 'Tetracyclines', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (tetracycline)', chartUse: 'Acne',
     tgt: 'tgt-tetracyclines', why: WHY.tetra, ae: [AE.tetra],
     notes: [S('More lipid soluble than tetracycline, entering the pilosebaceous follicle better', 'PCol 45')],
     photo: S('Tetracyclines: photosensitivity in fair-skinned people', 'PCol 44'), atlas: 'doxycycline', q: 'doxycycline'},
    {id: 'clindamycin', name: 'Clindamycin', alt: [], brands: ['Cleocin', 'Cleocin T', 'C/T/S'], page: 3, cls: 'abx', sub: 'Lincosamide', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (lincosamide)', chartUse: 'Acne',
     tgt: 'tgt-clindamycin', why: WHY.abx,
     ae: [S('Oral: pseudomembranous colitis, impaired liver function, rare neutropenia. Topical: about 10% absorbed, so a rare colitis risk; resistance a problem', 'PCol 46')], q: 'clindamycin'},
    {id: 'erythromycin', name: 'Erythromycin', alt: [], brands: [], page: 3, cls: 'abx', sub: 'Macrolides', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (macrolide)', chartUse: 'Acne',
     tgt: 'tgt-macrolides', why: WHY.abx, ae: [AE.macro], q: 'erythromycin'},
    {id: 'azithromycin', name: 'Azithromycin', alt: [], brands: [], page: 3, cls: 'abx', sub: 'Macrolides', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (macrolide)', chartUse: 'Acne',
     tgt: 'tgt-macrolides', why: WHY.abx, ae: [AE.macro], q: 'azithromycin'},
    {id: 'tmpsmx', name: 'Trimethoprim/sulfamethoxazole', alt: ['TMP/SMX'], brands: ['Bactrim DS'], page: 3, cls: 'abx', sub: 'Folate pathway', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (sulfonamide/pyrimidine)', chartUse: 'Acne',
     tgt: 'tgt-tmpsmx', why: WHY.abx, notes: [C('The chart prints "Trimetoprim"', 3)], q: 'trimethoprim|sulfamethoxazole'},
    {id: 'dapsone', name: 'Dapsone', alt: [], brands: ['Aczone'], page: 3, cls: 'abx', sub: 'Folate pathway', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (sulfone)', chartUse: 'Acne',
     use: [S('Leprosy; topically (gel) for acne', 'PCol 50')],
     tgt: 'tgt-dapsone', why: S('Its anti-inflammatory activity, apparently not its antibacterial action, is what helps in acne', 'PCol 50'), q: 'dapsone'},
    {id: 'metronidazole', name: 'Metronidazole', alt: [], brands: ['Flagyl', 'Metrogel'], page: 3, cls: 'abx', sub: 'Nitroimidazole', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antibiotic (nitroimidazole)', chartUse: 'Acne',
     tgt: 'tgt-metronidazole',
     ae: [S('Water-based gel: dry skin, redness, watering eyes; cream and lotion may be better tolerated', 'PCol 51')], q: 'metronidazole'},
    {id: 'tretinoin', name: 'Tretinoin', alt: ['all-trans retinoic acid', 'ATRA'], brands: ['Retin-A', 'Renova', 'Avita', 'Retin-A Micro'], page: 3, cls: 'nrb', sub: 'Retinoids', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (retinoid)', chartUse: 'Acne',
     tgt: 'tgt-topretinoids', why: WHY.retAcne,
     ae: [AE.topRet, S('Under 10% absorbed; best results in 8–12 weeks; microsphere form (Retin-A Micro) may be less irritating', 'PCol 17')],
     photo: PHOTO_RET, atlas: 'tretinoin', q: '\\btretinoin|\\bATRA\\b'},
    {id: 'adapalene', name: 'Adapalene', alt: [], brands: ['Differin'], page: 3, cls: 'nrb', sub: 'Retinoids', dz: ['acne'], rx: 'OTC/Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (retinoid)', chartUse: 'Acne',
     use: [S('Mild to moderate acne', 'PCol 18')],
     tgt: 'tgt-topretinoids', why: WHY.retAcne,
     ae: [S('Less irritating than tretinoin; "sun stable" (photochemically stable), so it can be combined with benzoyl peroxide', 'PCol 18')],
     photo: S('Sun stable, yet the sunburn risk remains because outer skin layers are peeled off', '10/30 T 116–130'), atlas: 'adapalene', q: 'adapalene'},
    {id: 'isotretinoin', name: 'Isotretinoin', alt: [], brands: ['Accutane'], page: 3, cls: 'nrb', sub: 'Retinoids', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (retinoid)', chartUse: 'Acne',
     use: [S('Severe cystic acne recalcitrant to standard therapy (oral)', 'PCol 19')],
     tgt: 'tgt-isotretinoin', why: S('Appears to inhibit sebaceous gland size and function', 'PCol 19'),
     ae: [S('Dry, itchy skin and mucous membranes; lipid abnormalities; skeletal hyperostosis in children; teratogenic: iPLEDGE registration, men included because sperm is affected', 'PCol 19; 10/30 T 130–132')],
     atlas: 'isotretinoin', q: 'isotretinoin|iPLEDGE'},
    {id: 'spironolactone', name: 'Spironolactone', alt: [], brands: [], page: 3, cls: 'antiandr', dz: ['acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Antiandrogen', chartUse: 'Acne',
     use: [S('Antiandrogens are one of the four acne drug classes on her slide; the slide does not name spironolactone', 'Pathophys 37')],
     tgt: 'tgt-spironolactone',
     notes: [K('Steroidal antiandrogen; with ketoconazole, lowers testosterone biosynthesis; flutamide instead blocks testosterone at its receptor', 'DPAW 53; 11/04 T@32150–32980')],
     atlas: 'spironolactone', q: 'spironolactone'},

    /* ---------- pp. 4–5: psoriasis ---------- */
    {id: 'coaltar', name: 'Coal tar', alt: [], brands: ['Denorex', 'DHS Tar', 'Neutrogena-T/Gel', 'Tegrin'], page: 4, cls: 'cytotox', dz: ['pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Cytotoxic agent', chartUse: 'Psoriasis',
     tgt: 'tgt-coaltar', why: WHY.cyto,
     ae: [S('Irritation, folliculitis, contact dermatitis; photosensitizing; carcinogenic; stains light skin and hair; odor; no systemic effects', 'PCol 54')],
     photo: S('Photosensitizing', 'PCol 54'), q: 'coal tar'},
    {id: 'shaletar', name: 'Shale tar (ichthammol)', alt: ['ichthammol'], brands: ['Boyol Salve', 'Drawing Out Salve', 'Black Salve'], page: 4, cls: 'cytotox', dz: ['pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Cytotoxic agent', chartUse: 'Psoriasis',
     use: [S('Symptomatic relief, no clinical studies of effectiveness; also eczema, rosacea and acute otitis', 'PCol 57')],
     tgt: 'tgt-shaletar', why: WHY.cyto,
     ae: [S('Less irritating than coal tar', 'PCol 57')],
     photo: Object.assign(S('Not photosensitizing, unlike coal tar', 'PCol 57'), {no: true}), q: 'shale tar|ichthammol'},
    {id: 'selenium', name: 'Selenium sulfide', alt: [], brands: ['Selsun Blue', 'Selseb'], page: 4, cls: 'cytotox', dz: ['pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Cytotoxic agent', chartUse: 'Psoriasis',
     tgt: 'tgt-selzinc', why: WHY.cyto, notes: [C('The chart prints the brand as "Selsum Blue"', 4)], q: 'selenium'},
    {id: 'zpt', name: 'Zinc pyrithione', alt: [], brands: [], page: 4, cls: 'cytotox', dz: ['pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Cytotoxic agent', chartUse: 'Psoriasis',
     tgt: 'tgt-selzinc', why: WHY.cyto, q: 'pyrithione'},
    {id: 'anthralin', name: 'Anthralin', alt: ['dithranol'], brands: ['Antra-Derm', 'Dithrocreme'], page: 4, cls: 'cytotox', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Cytotoxic agent', chartUse: 'Psoriasis',
     tgt: 'tgt-anthralin', why: S('Suppresses hyperplastic keratinocytes', 'PCol 55'),
     ae: [S('Local irritation, folliculitis, allergic contact dermatitis; severe conjunctivitis on eye contact; stains skin, hair and clothes; no systemic effects; caution on face and intertriginous areas; short-contact therapy (SCAT)', 'PCol 56')],
     atlas: 'anthralin', q: 'anthralin|dithranol|\\bSCAT\\b'},
    {id: 'methotrexate', name: 'Methotrexate', alt: ['MTX'], brands: ['Rheumatrex'], page: 4, cls: 'dhfr', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Dihydrofolate reductase inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-methotrexate', why: S('Reduces keratinocyte hyperproliferation and the number of T cells', 'PCol 59'),
     ae: [S('Cumulative liver toxicity is the most significant; nausea, pulmonary toxicity, rare pancytopenia and myelosuppression, megaloblastic anemia, lymphoma; abortifacient and teratogenic', 'PCol 61')],
     atlas: 'methotrexate', q: 'methotrexate|\\bMTX\\b'},
    {id: 'abatacept', name: 'Abatacept', alt: [], brands: ['Orencia'], page: 4, cls: 'costim', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Inhibitor of co-stimulation', chartUse: 'Psoriasis',
     tgt: 'tgt-abatacept', why: S('Blocks the second signal needed for T-cell activation', 'PCol 63'),
     notes: [S('Fusion protein: extracellular domain of CTLA-4 fused to human IgG Fc', 'PCol 63')], q: 'abatacept|CTLA-4'},
    {id: 'etanercept', name: 'Etanercept', alt: [], brands: ['Enbrel'], page: 4, cls: 'tnf', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'TNF-α inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-tnf', why: WHY.tnf, boxed: AE.tnfBox,
     ae: [S('Usually rare: injection-site reactions; case reports of pancytopenia and demyelinating syndromes', 'PCol 71')],
     notes: [S('Fusion protein: two p75 soluble TNF receptors on a human IgG1 Fc; SQ', 'PCol 71')], q: 'etanercept'},
    {id: 'adalimumab', name: 'Adalimumab', alt: [], brands: ['Humira'], page: 4, cls: 'tnf', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: null, chartUse: 'Psoriasis',
     tgt: 'tgt-tnf', why: WHY.tnf, boxed: AE.tnfBox,
     ae: [S('Injection-site reactions most common; infections; less antigenic than infliximab', 'PCol 73')],
     notes: [S('Human IgG1 antibody to TNF; SQ', 'PCol 73')], q: 'adalimumab'},
    {id: 'infliximab', name: 'Infliximab', alt: [], brands: ['Remicade'], page: 4, cls: 'tnf', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: null, chartUse: 'Psoriasis',
     tgt: 'tgt-tnf', why: WHY.tnf, boxed: AE.tnfBox,
     ae: [S('Anti-drug antibodies in 14–40%, with acute and delayed infusion reactions (premedicate) and lower efficacy; infection; lupus-like syndrome', 'PCol 72')],
     notes: [S('Chimeric mouse/human IgG1; IV infusion', 'PCol 72')], q: 'infliximab'},
    {id: 'golimumab', name: 'Golimumab', alt: [], brands: ['Simponi'], page: 4, cls: 'tnf', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: null, chartUse: 'Psoriasis',
     tgt: 'tgt-tnf', why: WHY.tnf, boxed: AE.tnfBox, notes: [S('Human antibody to TNF-α', 'PCol 74')], q: 'golimumab'},
    {id: 'certolizumab', name: 'Certolizumab pegol', alt: [], brands: ['Cimzia'], page: 4, cls: 'tnf', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: null, chartUse: 'Psoriasis',
     tgt: 'tgt-tnf', why: WHY.tnf, boxed: AE.tnfBox,
     ae: [S('Upper respiratory infections, rash, urinary tract infections', 'PCol 74')],
     notes: [S('PEG-attached Fab fragment of a humanized anti-TNF antibody; SQ every other week, may extend to every 4 weeks after the first three doses', 'PCol 74')], q: 'certolizumab'},
    {id: 'tofacitinib', name: 'Tofacitinib', alt: [], brands: ['Xeljanz'], page: 4, cls: 'jak', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Janus kinase (JAK) inhibitor', chartUse: 'Psoriasis',
     use: [S('Oral small molecule that gets inside the cell', 'PCol 76')],
     tgt: 'tgt-tofacitinib', why: WHY.jak,
     boxed: S('Severe infection, lymphoma and other malignancies', 'PCol 76; 11/03 T 579'),
     ae: [S('Caution in patients at high risk of GI perforation', 'PCol 76')],
     notes: [K(SIK_UNASSIGNED + ' (DPAW 35)', 'DPAW 35')], atlas: 'tofacitinib', q: 'tofacitinib'},
    {id: 'ustekinumab', name: 'Ustekinumab', alt: [], brands: ['Stelara'], page: 4, cls: 'il1223', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-12 & IL-23 cytokine inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-ustekinumab', why: S('Keeps IL-12 and IL-23 off their receptor on CD4 T cells and NK cells, suppressing proinflammatory Th1 and Th17 cells; fewer and smaller plaques', 'PCol 67'),
     ae: [S('Upper respiratory infection most common; serious allergy; serious (mycobacterial) infection, evaluate for TB; no live vaccines (stop 15 weeks before, resume 2 weeks after); malignancy (rare); one case of reversible posterior leukoencephalopathy', 'PCol 67')],
     q: 'ustekinumab'},
    {id: 'guselkumab', name: 'Guselkumab', alt: [], brands: ['Tremfya'], page: 5, cls: 'il23', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-23 cytokine inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-il23', why: WHY.il23, notes: [S('Human IgG1 lambda monoclonal antibody', 'PCol 68')], q: 'guselkumab'},
    {id: 'tildrakizumab', name: 'Tildrakizumab-asmn', alt: ['tildrakizumab'], brands: ['Ilumya'], page: 5, cls: 'il23', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-23 cytokine inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-il23', why: WHY.il23, notes: [S('Humanized IgG1/κ monoclonal antibody', 'PCol 68')], q: 'tildrakizumab'},
    {id: 'risankizumab', name: 'Risankizumab', alt: [], brands: ['Skyrizi'], page: 5, cls: 'il23', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-23 cytokine inhibitor', chartUse: 'Psoriasis',
     use: [S('Moderate to severe plaque psoriasis; SQ and IV', 'PCol 69')],
     tgt: 'tgt-il23', why: WHY.il23,
     ae: [S('Common: fatigue, arthralgia, nasopharyngitis, headache, rashes, injection reactions. Less common: severe infections, TB reactivation, skin cancer', 'PCol 69')], q: 'risankizumab'},
    {id: 'secukinumab', name: 'Secukinumab', alt: [], brands: ['Cosentyx'], page: 5, cls: 'il17', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-17A inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-il17a', why: WHY.il17, ae: [AE.il17],
     notes: [S('Human IgG1 monoclonal antibody; SQ', 'PCol 66'), C('The chart prints the brand as "Consentyx"', 5)], q: 'secukinumab'},
    {id: 'brodalumab', name: 'Brodalumab', alt: [], brands: ['Siliq'], page: 5, cls: 'il17', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-17A inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-brodalumab', why: WHY.il17,
     notes: [S('Human IgG2 antibody to the IL-17 receptor A: blocks IL-17A, IL-17F, IL-17C, IL-17A/F and IL-25', 'PCol 66')], q: 'brodalumab'},
    {id: 'ixekizumab', name: 'Ixekizumab', alt: [], brands: ['Taltz'], page: 5, cls: 'il17', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'IL-17A inhibitor', chartUse: 'Psoriasis',
     tgt: 'tgt-il17a', why: WHY.il17, notes: [S('Humanized IgG4 monoclonal antibody against IL-17A', 'PCol 66')], q: 'ixekizumab'},
    {id: 'acitretin', name: 'Acitretin', alt: [], brands: ['Soriatane'], page: 5, cls: 'nrb', sub: 'Retinoids', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (retinoid)', chartUse: 'Psoriasis',
     use: [S('Psoriasis, especially pustular forms (oral)', 'PCol 20')],
     tgt: 'tgt-acitazar', why: WHY.retPso,
     ae: [S('As isotretinoin, plus hepatotoxicity (fatal hepatitis reported); teratogenic: no pregnancy during and for 3 years after; no ethanol during and for 2 months after; no blood donation for 3 years', 'PCol 20')],
     notes: [S('Metabolite of the aromatic retinoid etretinate', 'PCol 20')], atlas: 'acitretin', q: 'acitretin|etretinate'},
    {id: 'tazarotene', name: 'Tazarotene', alt: [], brands: ['Tazorac'], page: 5, cls: 'nrb', sub: 'Retinoids', dz: ['pso', 'acne'], rx: 'Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (retinoid)', chartUse: 'Psoriasis; acne/wrinkles',
     use: [S('Psoriasis, mild to moderately severe facial acne, wrinkles', 'PCol 18')],
     tgt: 'tgt-acitazar', why: WHY.retPso,
     ae: [S('Women of childbearing age only after contraceptive counseling; not in pregnancy', 'PCol 18')],
     photo: S('Causes photosensitivity', 'PCol 18'), atlas: 'tazarotene', q: 'tazarotene'},
    {id: 'calcipotriene', name: 'Calcipotriene', alt: [], brands: ['Dovonex'], page: 5, cls: 'nrb', sub: 'Vitamin D analog', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Nuclear receptor binder (vitamin D derivative)', chartUse: null,
     use: [S('Psoriasis, topical', 'PCol 21')],
     tgt: 'tgt-calcipotriene', why: S('Inhibits proliferation and promotes keratinocyte differentiation; decreases inflammatory cytokine release', 'PCol 21'),
     ae: [S('Burning, itching, erythema, dry skin, atrophy, hyperpigmentation, folliculitis; a topical steroid reduces the irritation; hypercalcemia and hypercalciuria above 100 g/week, resolving within days of stopping', 'PCol 22')],
     photo: S('Mild photosensitivity', 'PCol 22'), atlas: 'calcipotriene', q: 'calcipotriene'},
    {id: 'methoxsalen', name: 'Methoxsalen', alt: ['8-MOP', '8-methoxypsoralen'], brands: ['Oxsoralen-Ultra', 'Uvadex'], page: 5, cls: 'psoralen', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Psoralen', chartUse: null,
     use: [S('PUVA: a psoralen combined with UVA light', 'Sun 3')],
     tgt: 'tgt-methoxsalen', why: S('The phototoxic reaction is antiproliferative, immunosuppressive and anti-inflammatory: normalizes keratinocytes, reorganizes cutaneous blood vessels, is cytotoxic to T cells', 'Sun 3'),
     ae: [S('Pruritus, nausea, erythema and blistering, hyperpigmentation, skin aging, skin cancer, cataracts', 'Sun 4')],
     photo: S('A photosensitizing compound by design (PUVA)', 'Sun 3'), atlas: 'methoxsalen', q: 'methoxsalen|psoralen|PUVA|8-MOP'},
    {id: 'cyclosporine', name: 'Cyclosporine', alt: [], brands: ['Neoral', 'Sandimmune'], page: 5, cls: 'cni', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Calcineurin inhibitor', chartUse: null,
     use: [S('Psoriasis, oral; Neoral and Sandimmune are not bioequivalent and not interchangeable', 'PCol 29')],
     tgt: 'tgt-cyclosporine', why: S('Inhibits activation of T cells and mast cells, blocking proinflammatory cytokines and mediators: an immunosuppressant', 'PCol 24'),
     boxed: S('Lymphoma and other malignancies, particularly of the skin; bacterial, viral, fungal and protozoal infections including opportunistic ones', 'PCol 30; 10/30 T 397'),
     ae: [AE.cniOral, S('Cyclosporine only: gingival hyperplasia', 'PCol 30')], atlas: 'cyclosporine', q: 'cyclosporin'},
    {id: 'petrolatum', name: 'Petrolatum', alt: [], brands: ['Vaseline'], page: 5, cls: 'emollient', dz: ['pso'], rx: 'OTC',
     status: 'taught', chartClass: 'Emollient', chartUse: null,
     tgt: 'tgt-petrolatum',
     notes: [K('Most effective emollient (hydrocarbons, over 25 carbons)', 'DPAW 15'), C('The chart prints the brand as "Vasoline"', 5)],
     q: 'petrolatum'},
    {id: 'ketoconazole', name: 'Ketoconazole', alt: [], brands: ['Nizoral'], page: 5, cls: 'azole', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'Azole antifungal', chartUse: null,
     tgt: 'tgt-ketoconazole',
     notes: [K('Slide 53 lists it under "Non-steroidal AA" with flutamide; in class he grouped it with spironolactone by mechanism (biosynthesis)', 'DPAW 53; 11/04 T@32075–32300'),
             R('Not on Dr. Smith\'s slides; the chart lists it on the psoriasis page as an azole antifungal.')], atlas: 'ketoconazole', q: 'ketoconazole'},
    {id: 'apremilast', name: 'Apremilast', alt: [], brands: ['Otezla'], page: 5, cls: 'pde4', dz: ['pso'], rx: 'Rx',
     status: 'taught', chartClass: 'PDE-4 inhibitor', chartUse: null,
     use: [S('Psoriasis (oral)', 'PCol 34')],
     tgt: 'tgt-apremilast', why: WHY.pde4,
     ae: [S('Diarrhea, nausea, headache, weight loss; use cautiously in depression; avoid strong CYP3A4 inducers', 'PCol 34')], atlas: 'apremilast', q: 'apremilast'},
  ];

  // p. 5 rows whose indication cell is blank: the p. 4 "Psoriasis" cell runs across the page break
  for (const id of ['guselkumab', 'tildrakizumab', 'risankizumab', 'secukinumab', 'brodalumab', 'ixekizumab', 'acitretin']) {
    const d = D.find(x => x.id === id);
    (d.notes = d.notes || []).push(C('Indication "Psoriasis" is read from the p. 4 indication cell, which runs across the page break; this row\'s own cell on p. 5 is blank', 5));
  }

  /* ---------- p. 6: topical steroids (chart potency classes) ---------- */
  const STEROIDS = [
    // [id, name, brands, potency classes on the chart, status, Sikazwe note, atlas key, question regex]
    ['clobetasol', 'Clobetasol propionate', ['Temovate', 'Clobex'], ['1'], 'taught', K('Super-potent example: clobetasol propionate 0.05% cream and ointment', 'DPAW 25'), 'clobetasol propionate', 'clobetasol'],
    ['betameth', 'Betamethasone dipropionate', ['Diprolene', 'Diprolene Cream AF'], ['1', '2'], 'taught', K('Potent example: betamethasone dipropionate 0.05% cream and ointment', 'DPAW 25'), null, 'betamethasone dipropionate'],
    ['halobetasol', 'Halobetasol propionate', ['Ultravate'], ['1'], 'class', null, null, 'halobetasol'],
    ['mometasone', 'Mometasone furoate', ['Elocon'], ['2'], 'class', null, null, 'mometasone'],
    ['fluocinonide', 'Fluocinonide', ['Lidex'], ['2'], 'class', null, null, 'fluocinonide'],
    ['desoximetasone', 'Desoximetasone', ['Topicort'], ['2'], 'class', null, null, 'desoximetasone'],
    ['fluticasone', 'Fluticasone propionate', ['Cutivate'], ['3'], 'class', K(SIK_UNASSIGNED + ' Drawn on DPAW 24; DPAW 20 uses it for the glucocorticoid SAR features', 'DPAW 20, 24'), null, 'fluticasone'],
    ['fluocinolone', 'Fluocinolone acetonide', ['Synalar', 'Derma-Smoothe'], ['4', '6'], 'class', null, null, 'fluocinolone'],
    ['hcvalerate', 'Hydrocortisone valerate', ['Westcort'], ['4'], 'class', null, null, 'hydrocortisone valerate'],
    ['triamcinolone', 'Triamcinolone acetonide', ['Kenalog'], ['4'], 'class', K(SIK_UNASSIGNED + ' Drawn on DPAW 24', 'DPAW 24'), null, 'triamcinolone'],
    ['desonide', 'Desonide', ['DesOwen', 'Desonate'], ['5', '6'], 'class', K(SIK_UNASSIGNED + ' Drawn on DPAW 24', 'DPAW 24'), null, 'desonide'],
    ['hydrocortisone', 'Hydrocortisone', ['Locoid', 'Cortaid', 'Hytone', 'Synacort'], ['5', '7'], 'taught', K('Low-potency example: hydrocortisone acetate 0.5% and 1% creams and ointments', 'DPAW 25'), 'hydrocortisone', 'hydrocortisone(?! valerate)|cortisol'],
    ['prednicarbate', 'Prednicarbate', ['Dermatop'], ['5'], 'class', null, null, 'prednicarbate'],
    ['alclometasone', 'Alclometasone', ['Aclovate'], ['6'], 'class', null, null, 'alclometasone'],
  ];
  const POTENCY = {1: 'Class 1, very high potency', 2: 'Class 2, high potency', 3: 'Class 3, upper mid-strength', 4: 'Class 4, mid-strength',
                   5: 'Class 5, lower mid-strength', 6: 'Class 6, mild', 7: 'Class 7, least potent'};
  for (const [id, name, brands, pot, status, sik, atlas, q] of STEROIDS) {
    const notes = [C(pot.map(p => POTENCY[p]).join('; ') + (pot.length > 1 ? ' (listed twice on the chart, once per product)' : ''), 6), STEROID_CLASS_NOTE];
    if (sik) notes.push(sik);
    if (id === 'hydrocortisone') notes.push(K(SIK_UNASSIGNED + ' DPAW 24 shows hydrocortisone (natural cortisol) as the reference (parent) glucocorticoid', 'DPAW 24'));
    if (id === 'hydrocortisone') notes.push(S('Low potency (hydrocortisone 1%) for the face and for long-term maintenance', 'PCol 11'));
    if (id === 'desonide') notes.push(C('The chart prints "Desonate (Desonide)", brand first, on the class 6 line', 6));
    const d = {id, name, alt: [], brands, page: 6, cls: 'steroid', dz: ['pso', 'ad'], rx: id === 'hydrocortisone' ? 'Rx (class 5); OTC (class 7)' : 'Rx',
      status, chartClass: 'Corticosteroid; potency ' + pot.map(p => 'class ' + p).join(' and '), chartUse: 'Psoriasis, atopic dermatitis, numerous others',
      use: [S('Psoriasis and atopic dermatitis; match potency to severity and site', 'PCol 11')],
      tgt: 'tgt-steroids', why: WHY.steroid, ae: [AE.steroid], notes, q};
    if (atlas) d.atlas = atlas;
    D.push(d);
  }

  /* Every drug line of the chart, page by page, and the card that carries it
     (or why it is left out). druglist_check.js reads this against the cards. */
  const CHART_ROWS = [
    [1, 'Octyl dimethyl PABA, Padimate O', 'padimate'], [1, 'Octyl Methoxycinnamate, Ethylhexyl p-methoxycinnamate', 'octinoxate'],
    [1, '2-ethylhexyl salicylate', 'octisalate'], [1, 'Homosalate', 'homosalate'], [1, 'Oxybenzone', 'oxybenzone'], [1, 'Dioxybenzone', 'dioxybenzone'],
    [1, 'Menthyl anthranilate', 'meradimate'], [1, 'Avobenzone', 'avobenzone'], [1, 'Zinc oxide (Zinca)', 'zincoxide'], [1, 'Titanium oxide', 'tio2'],
    [1, 'Benzocaine (Americaine, Solarcaine, Lanacane)', 'benzocaine'], [1, 'Dibucaine (Nupercainal)', 'dibucaine'], [1, 'Tetracaine (Dermocaine)', 'tetracaine'],
    [1, 'Lidocaine (Xylocaine)', 'lidocaine'], [1, 'Bemotrizinol (BEMT)', 'bemotrizinol'],
    [2, 'Crisaborole (Eucrisa)', 'crisaborole'], [2, 'Pimecrolimus (Elidel)', 'pimecrolimus'], [2, 'Tacrolimus (Protopic)', 'tacrolimus'],
    [2, 'Dupilumab (Dupixent)', 'dupilumab'], [2, 'Ruxolitinib (Opzelura)', 'ruxolitinib'], [2, 'Upadacitinib (Rinvoq)', 'upadacitinib'],
    [3, 'Benzoyl peroxide', 'bpo'], [3, 'Sulfur (Fostril)', 'sulfur'], [3, 'Salicylic Acid', 'salicylic'], [3, 'Sarecycline (Seysara)', 'sarecycline'],
    [3, 'Minocycline (Minocin)', 'minocycline'], [3, 'Doxycycline (Vibramycin)', 'doxycycline'], [3, 'Clindamycin (Cleocin, Cleocin T, C/T/S)', 'clindamycin'],
    [3, 'Erythromycin', 'erythromycin'], [3, 'Azithromycin', 'azithromycin'], [3, 'Trimethoprim/sulfamethoxazole (Bactrim DS)', 'tmpsmx'],
    [3, 'Dapsone (Aczone)', 'dapsone'], [3, 'Metronidazole (Flagyl, Metrogel)', 'metronidazole'], [3, 'Tretinoin (Retin-A, Renova, Avita, Retin-A Micro)', 'tretinoin'],
    [3, 'Adapalene (Differin)', 'adapalene'], [3, 'Isotretinoin (Accutane)', 'isotretinoin'], [3, 'Spironolactone', 'spironolactone'],
    [4, 'Coal tar', 'coaltar'], [4, 'Shale tar, Ichthammol', 'shaletar'], [4, 'Selenium sulfide', 'selenium'], [4, 'Zinc Pyrithione', 'zpt'],
    [4, 'Anthralin', 'anthralin'], [4, 'Methotrexate', 'methotrexate'], [4, 'Abatacept (Orencia)', 'abatacept'], [4, 'Etanercept (Enbrel)', 'etanercept'],
    [4, 'Adalimumab (Humira)', 'adalimumab'], [4, 'Infliximab (Remicade)', 'infliximab'], [4, 'Golimumab (Simponi)', 'golimumab'],
    [4, 'Certolizumab pegol (Cimzia)', 'certolizumab'], [4, 'Tofacitinib (Xeljanz)', 'tofacitinib'], [4, 'Ustekinumab (Stelara)', 'ustekinumab'],
    [5, 'Guselkumab (Tremfya)', 'guselkumab'], [5, 'Tildrakizumab-asmn (Ilumya)', 'tildrakizumab'], [5, 'Risankizumab (Skyrizi)', 'risankizumab'],
    [5, 'Secukinumab (Consentyx)', 'secukinumab'], [5, 'Brodalumab (Siliq)', 'brodalumab'], [5, 'Ixekizumab (Taltz)', 'ixekizumab'],
    [5, 'Acitretin (Soriatane)', 'acitretin'], [5, 'Tazarotene (Tazorac)', 'tazarotene'], [5, 'Calcipotriene (Dovonex)', 'calcipotriene'],
    [5, 'Methoxsalen (Oxsoralen-Ultra, Uvadex)', 'methoxsalen'], [5, 'Cyclosporine (Neoral, Sandimmune)', 'cyclosporine'],
    [5, 'Petrolatum (Vasoline)', 'petrolatum'], [5, 'Zinc Oxide (Desitin)', 'zincoxide'], [5, 'Ketoconazole (Nizoral)', 'ketoconazole'], [5, 'Apremilast (Otezla)', 'apremilast'],
    [6, 'Clobetasol propionate (Temovate, Clobex)', 'clobetasol'], [6, 'Betamethasone dipropionate (Diprolene)', 'betameth'], [6, 'Halobetasol propionate (Ultravate)', 'halobetasol'],
    [6, 'Betamethasone dipropionate (Diprolene Cream AF)', 'betameth'], [6, 'Mometasone furoate (Elocon)', 'mometasone'], [6, 'Fluocinonide (Lidex)', 'fluocinonide'],
    [6, 'Desoximetasone (Topicort)', 'desoximetasone'], [6, 'Fluticasone propionate (Cutivate)', 'fluticasone'], [6, 'Fluocinolone acetonide (Synalar)', 'fluocinolone'],
    [6, 'Hydrocortisone valerate (Westcort)', 'hcvalerate'], [6, 'Triamcinolone acetonide (Kenalog)', 'triamcinolone'], [6, 'Desonide (DesOwen)', 'desonide'],
    [6, 'Hydrocortisone (Locoid)', 'hydrocortisone'], [6, 'Prednicarbate (Dermatop)', 'prednicarbate'], [6, 'Alclometasone (Aclovate)', 'alclometasone'],
    [6, 'Desonate (Desonide)', 'desonide'], [6, 'Fluocinolone acetonide (Derma-Smoothe)', 'fluocinolone'], [6, 'Hydrocortisone (Cortaid, Hytone, Synacort)', 'hydrocortisone'],
    [7, 'Permethrin 1% lotion (Nix)', null], [7, 'Pyrethrins + piperonyl butoxide (Rid)', null], [7, 'Malathion 0.5% (Ovide)', null],
    [7, 'Benzyl alcohol 5% (Ulesfia)', null], [7, 'Spinosad 0.9% (Natroba)', null], [7, 'Ivermectin (Sklice, Stromectol)', null],
  ];
  const EXCLUDED = {7: 'Lice and scabies (chart p. 7) are not in the Exam 1 lectures (syllabus pp. 9–15); left out of the Exam 1 drug list, as in the Reference target table.'};
  const CHART_NOTES = [
    'Chart p. 5: the chemical-class column is aligned through calcipotriene and one row off from methoxsalen down (cyclosporine is printed as a furanocoumarin); the indication column is one row off from petrolatum down (apremilast against "Seborrhea, dandruff"), and calcipotriene shares an indication cell with tazarotene. The chart indication is therefore not shown from calcipotriene down; the pharmacological class column is aligned.',
    'Chart p. 4: the TNF-α inhibitor class cell is printed beside etanercept only; adalimumab, infliximab, golimumab and certolizumab pegol are TNF-α inhibitors on Dr. Smith\'s slides (PCol 70–74).',
    'The chart\'s chemical-class column is shown only for the sunscreens, where it names the family; chemical classes elsewhere are Dr. Sikazwe\'s material (Atlas tab).',
  ];
  /* The questions on a drug: its `q` pattern against the stem, the keyed
     answer(s), the concept and (matching items) the left-hand column. */
  const qText = q => [q.stem, q.concept, (q.options || []).filter(o => o.correct).map(o => o.t).join(' '),
    (q.pairs || []).map(p => p.l).join(' ')].join(' • ');
  const questionsFor = (d, qs) => { const re = new RegExp(d.q, 'i'); return qs.filter(q => re.test(qText(q))); };
  const classQuestions = (cls, qs) => { if(!CLASS_Q[cls]) return []; const re = new RegExp(CLASS_Q[cls], 'i'); return qs.filter(q => re.test(qText(q))); };
  /* The Reference target rows (reference.js, ref-targets), read from its HTML:
     {rowId: {cite, parts: [{kind: 'tg'|'mo', t, by, cite}]}}. A part's lecturer
     is its data-by, else the row's, else 'smith'; its citation its data-cite,
     else the row's Source cell. Used by the page and by druglist_check.js. */
  function parseTargets(html){
    const strip = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
    const attr = (a, n) => { const m = String(a || '').match(new RegExp('data-' + n + '="([^"]*)"')); return m ? m[1] : null; };
    const out = {};
    for (const m of String(html).matchAll(/<tr id="(tgt-[^"]+)"([^>]*)>([\s\S]*?)<\/tr>/g)) {
      const [, id, trAttr, body] = m;
      const cells = [...body.matchAll(/<td>([\s\S]*?)<\/td>/g)].map(c => c[1]);
      const cite = strip(cells[1] || '');
      const parts = [...(cells[0] || '').matchAll(/<span class="(tg|mo)"([^>]*)>([\s\S]*?)<\/span>/g)].map(s => ({
        kind: s[1], t: strip(s[3]).replace(/[.;:,]\s*$/, ''), by: attr(s[2], 'by') || attr(trAttr, 'by') || 'smith', cite: attr(s[2], 'cite') || cite}));
      const sum = (cells[0] || '').match(/<summary>([\s\S]*?)<\/summary>/);
      out[id] = {cite, parts, label: sum ? strip(sum[1]) : id};
    }
    return out;
  }
  /* ---------- Multiple-choice practice on the list (Drug list, "Quiz me") ----------
     Built only from the statements above and the Reference target rows; no new
     facts. One question asks one field of one drug, by generic name: its
     target, its class or its indication. The keyed answer is one of the drug's
     own values (with its source); the three distractors are values of the same
     field on other cards, and never one that is also true for this drug:
       - a distractor's normalized text may equal none of the drug's values;
       - it may not come from a drug of the same class (antibiotics: the same
         chart class), nor share a "family" with any of the drug's values
         (FAMILY below: e.g. calcineurin, FKBP and cyclophilin are one family,
         so calcineurin is never offered as a wrong target for tacrolimus);
       - classes that overlap (CLASS_CONFLICT) are never offered for each
         other (ustekinumab is both an IL-12 and an IL-23 inhibitor);
       - an indication is offered as wrong only if no indication text of the
         drug (chart or lecture) names it, no drug of its class has it, and
         it is not in NOT_WRONG.
     At most one distractor per family, so no two options say the same thing.
     A drug-field pair with no clean answer (sunscreens' "target", a mechanism
     the slide calls unknown) or fewer than three safe distractors gets no
     question. Mechanism lines are fragments of the target sentence on the
     Reference table, so they are practised in Recall, not as options. */
  const norm = t => String(t).toLowerCase().replace(/α/g, 'alpha').replace(/[^a-z0-9]+/g, ' ').trim();
  const FAMILY = [[/calcineurin|fkbp|cyclophilin/, 'calcineurin'], [/dihydrofolate|dhfr/, 'dhfr'], [/\bjak|janus/, 'jak'],
    [/il 17/, 'il17'], [/retino|\brar\b|\brxr\b|vitamin d|\bvdr\b/, 'nuclear'], [/tnf/, 'tnf'], [/pde 4|phosphodiesterase/, 'pde4'],
    [/30s|50s|ribosom/, null], [/glucocorticoid/, 'gr']];
  const family = t => { const n = norm(t); for (const [re, f] of FAMILY) if (re.test(n)) return f || n; return n; };
  // classes whose drugs can truly be described by the other's name
  const CLASS_CONFLICT = [['il23', 'il1223'], ['kerat', 'abx'], ['dhfr', 'abx'], ['dhfr', 'cytotox'], ['cytotox', 'azole'], ['emollient', 'sunblock'],
    ['sunscreen', 'sunblock']];
  // drug classes whose Reference "target" is not a molecular target (a sunscreen
  // family, a chart class, "no drug target", a mechanism the slide calls unknown)
  const NO_TARGET_Q = new Set(['sunscreen', 'sunblock', 'anesth', 'emollient', 'azole', 'antiandr', 'cytotox', 'kerat']);
  const NO_TARGET_ID = new Set(['dapsone', 'metronidazole']);
  // uses outside the chart and the slides that are common enough that a wrong
  // option naming them would mislead (only ever kept OUT of the wrong options;
  // never shown as an answer): systemic cyclosporine and methotrexate and coal
  // tar in atopic dermatitis/eczema, upadacitinib in psoriatic disease, and zinc
  // oxide, which the chart also lists on its psoriasis page (p. 5)
  const NOT_WRONG = {cyclosporine: ['ad'], methotrexate: ['ad'], coaltar: ['ad'], upadacitinib: ['pso'], zincoxide: ['pso']};
  const DZ_RE = {ad: /atopic|eczema|\bad\b/, pso: /psoria/, acne: /acne/, sun: /sun protection|sunscreen/, burn: /sunburn/};
  const KINDS = {target: 'Target', cls: 'Class', use: 'Indication'};
  const groupOf = d => d.cls === 'abx' ? 'abx:' + norm(d.chartClass || '') : d.cls;
  /* The keyed values of one field of one drug: [{t, src: [{t, by, cite}]}]. */
  function quizFacts(d, T, kind){
    if (kind === 'target') {
      if (NO_TARGET_Q.has(d.cls) || NO_TARGET_ID.has(d.id)) return [];
      const parts = [d.tgt, d.tgt2].filter(Boolean).flatMap(id => (T[id] || {parts: []}).parts)
        .filter(p => p.kind === 'tg' && (p.by === 'smith' || p.by === 'sikazwe'));
      // option text: a leading component name ("Trimethoprim: ...") is dropped, so a
      // wrong option never names another drug; the source line keeps the full text
      const opt = t => { t = t.replace(/^[A-Z][a-z]+: /, ''); return /^[a-z]{2}/.test(t) ? t.charAt(0).toUpperCase() + t.slice(1) : t; };
      return parts.map(p => ({t: opt(p.t), src: [p]}));
    }
    if (kind === 'cls') {
      const src = d.chartClass ? {t: d.chartClass, by: 'chart', cite: 'Chart p. ' + d.page}
        : d.cls === 'tnf' ? {t: 'TNF-α inhibitor', by: 'smith', cite: 'PCol 70–74'} : null;
      return src ? [{t: CLASSES[d.cls], src: [src]}] : [];
    }
    if (kind === 'use') {
      const texts = [];
      if (d.chartUse) texts.push({t: d.chartUse, by: 'chart', cite: 'Chart p. ' + (d.pages ? d.pages.join(', ') : d.page)});
      (d.use || []).forEach(u => texts.push(u));
      return Object.keys(DISEASES).filter(z => d.dz.includes(z)).map(z => ({t: DISEASES[z], z,
        src: texts.filter(s => DZ_RE[z].test(norm(s.t)))})).filter(v => v.src.length);
    }
    return [];
  }
  /* Every value a drug could truly be said to have in a field (for exclusion). */
  function trueValues(d, T, kind){
    if (kind === 'use') {
      const txt = norm([d.chartUse || ''].concat((d.use || []).map(u => u.t)).join(' '));
      return Object.keys(DISEASES).filter(z => d.dz.includes(z) || DZ_RE[z].test(txt) || (NOT_WRONG[d.id] || []).includes(z)).map(z => DISEASES[z]);
    }
    if (kind === 'target') return [d.tgt, d.tgt2].filter(Boolean).flatMap(id => (T[id] || {parts: []}).parts).map(p => p.t);
    return [CLASSES[d.cls]];
  }
  const conflicts = (a, b) => CLASS_CONFLICT.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  /* One question, or null. rng: () => [0, 1). */
  function makeQuestion(d, T, kind, rng){
    rng = rng || Math.random;
    const keys = quizFacts(d, T, kind);
    if (!keys.length) return null;
    const truth = trueValues(d, T, kind).concat(keys.map(k => k.t));
    // an indication that a drug of the same class has is not offered as wrong
    // either (crisaborole is never "wrong" for psoriasis, where apremilast is used)
    if (kind === 'use') D.filter(o => o.cls === d.cls && o.id !== d.id).forEach(o => quizFacts(o, T, kind).forEach(v => truth.push(v.t)));
    const bad = new Set(truth.map(norm)), badFam = new Set(truth.map(family));
    const pool = [], seenFam = new Set();
    for (const o of D) {
      if (o.id === d.id || groupOf(o) === groupOf(d) || (kind === 'cls' && conflicts(o.cls, d.cls))) continue;
      for (const v of quizFacts(o, T, kind)) {
        const n = norm(v.t), f = family(v.t);
        if (!n || bad.has(n) || badFam.has(f)) continue;
        pool.push({t: v.t, f});
      }
    }
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    const wrong = [];
    for (const p of pool) { if (seenFam.has(p.f)) continue; seenFam.add(p.f); wrong.push(p.t); if (wrong.length === 3) break; }
    if (wrong.length < 3) return null;
    const key = keys[Math.floor(rng() * keys.length)];
    const options = wrong.map(t => ({t, correct: false})).concat([{t: key.t, correct: true}]);
    for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
    const stem = kind === 'target' ? `What is the target of ${d.name}?`
      : kind === 'cls' ? `Which class is ${d.name} in?` : `Which condition is ${d.name} used for?`;
    return {id: d.id + ':' + kind, drug: d.id, name: d.name, kind, stem, options, src: key.src, also: keys.filter(k => k !== key).map(k => k.t)};
  }
  return {parseTargets, D, CLASS_Q, CLASSES, DISEASES, PAGES, CHART_ROWS, EXCLUDED, CHART_NOTES, questionsFor, classQuestions,
          KINDS, quizFacts, trueValues, makeQuestion, norm, family, NOT_WRONG};
})();
