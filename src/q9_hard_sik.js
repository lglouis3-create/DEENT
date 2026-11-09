/* ==========================================================================
   Harder practice for Exam 2: Dr. Sikazwe, Lectures 3–4 (11/03, 11/04),
   his assigned pages only (list of 11/06: printed slides 7-9, 12, 15-22,
   24-33, 42-54, 60-65 = file pp. 7-9, 12, 15-23, 25-34, 43-55, 61-66; "slide N"
   below is the PDF page, as in q4_L03b.js and q5_L04.js). Added 2026-11-09
   after Louis's Exam 1 feedback (see q8_hard_smith.js): finer details, two
   facts combined, closer distractors, and his own formats: same or different
   chemical class (11/03 T 732–733), which enzyme or organ (11/04 T@3530–3660),
   which drug carries a property.
   Sources: f26-DEENT-DPAW-mc.pdf, the 11/03 lecture-only transcript (T, line
   numbers, his part from line 590) and the 11/04 transcript (T@n = byte offset
   in DEENT_Lecture_11.04_transcript.txt), and the vitamin D take-home reading
   (Bikle, Endotext) for the pathway, as in q5_L04.js.
   Kept out: unassigned pages (file p. 24 and pp. 35-42, 56-60, 67-71), his
   stated exclusions (mechanisms of action for crisaborole and the JAK
   inhibitors, the JAK chemical class names, functional-group identification,
   hydrocortisone derivative structures, 11β-HSD types, antibiotic detail
   deferred to ID) and the held conflicts in reviews/OPEN_QUESTIONS.md (UV band
   limits, ozone share of UVC, 11β-HSD reversibility, the C15/C16 chlorine,
   potency read from the percentage alone, bemotrizinol absorption magnitude,
   the ketoconazole heading, Zn3+).
   ========================================================================== */
const HQ_S3 = 'Lecture 3 (f26-DEENT-DPAW-mc.pdf)';
const HQ_S4 = 'Lecture 4 (f26-DEENT-DPAW-mc.pdf)';

QUESTIONS.push(
/* ---- Crisaborole and the JAK inhibitors (pp. 7–9) ------------------------ */
{id:'S3H-001', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'h-cris-logp-t12',
 tags:['hard','numbers','tell'], source:'both',
 stem:'Which pairing of log P and half-life belongs to crisaborole?',
 options:[
  {t:'Log P about 3; half-life 12 h', correct:true, why:'Slide 7: LogP = 3 (dermis accumulation); t1/2 = 12 h (T 690, 696–698).'},
  {t:'Log P about 2; half-life about 3 h', correct:false, why:'Ruxolitinib: log P about 2 and t1/2 3 h (slide 8; T 737).'},
  {t:'Log P about 3; half-life 8–16 h', correct:false, why:'8–16 h is the half-life of upadacitinib (slide 8).'},
  {t:'Log P about 1.5; half-life 1–2 h', correct:false, why:'Those are the hydrocortisone values (slide 26).'}],
 teach:'Slide 7: crisaborole, log P 3, accumulates in the dermis; half-life 12 h; hydrolytic deboronation limits systemic exposure. Slide 8: ruxolitinib t1/2 3 h, upadacitinib 8–16 h, both log P about 2 and formulated to stay in the skin.',
 cite:HQ_S3+' slides 7–8, 26; T 690–698, 737'},

{id:'S3H-002', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'h-cris-metab-sequence',
 tags:['hard','reasoning'], source:'both', dupOf:'S3-016',
 stem:'Which sequence describes the metabolism of crisaborole?',
 options:[
  {t:'Non-enzymatic deboronation, then ADH and ALDH to the acid', correct:true, why:'Slide 7: hydrolytic deboronation (spontaneous, no enzyme; T 698–704), then two enzymes, alcohol and aldehyde dehydrogenase, give the carboxylic acid (T 704–711).'},
  {t:'CYP3A4 deboronation, then ADH and ALDH to the acid', correct:false, why:'The boron is lost by hydrolysis without an enzyme (T 698–704).'},
  {t:'Non-enzymatic deboronation, then CYP3A4 and CYP2D6 oxidation to the acid', correct:false, why:'The two enzymes are alcohol and aldehyde dehydrogenase (T 706–709); CYP3A4 and 2D6 are the upadacitinib isoforms (slide 8).'},
  {t:'UGT deboronation, then sulfotransferase oxidation to the acid', correct:false, why:'UGT and SULT are the phase 2 conjugating enzymes of the scheme (slide 9), not the deboronation or oxidation steps.'}],
 teach:'Crisaborole is a soft drug: its metabolism is predictable. Water removes the boron (no enzyme), giving the inactive benzyl alcohol; alcohol dehydrogenase and aldehyde dehydrogenase turn it into the carboxylic acid; phase 2 enzymes (SULT, UGT) conjugate the products (slides 7, 9).',
 cite:HQ_S3+' slides 7–9; T 664–711'},

{id:'S3H-003', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'poll', concept:'h-cris-phase2-steps',
 tags:['hard','reasoning'], source:'both', dupOf:'S3-021',
 stem:'In crisaborole\'s metabolic scheme, which enzymes do the phase 2 steps, and which steps are glucuronidations?',
 options:[
  {t:'Sulfotransferase and UGT; steps 3 and 4', correct:true, why:'Slide 9: the phase 2 enzymes are sulfotransferase (T 772) and UGT (T 773); steps 3 and 4 involve glucuronidation (Polleve-1; T 774–777).'},
  {t:'Sulfotransferase and UGT; steps 1 and 2', correct:false, why:'Polleve-1 answer is steps 3 and 4 (T 774–777).'},
  {t:'Alcohol and aldehyde dehydrogenase; steps 3 and 4', correct:false, why:'ADH and ALDH make the carboxylic acid (slide 7); they are not the conjugating enzymes.'},
  {t:'UGT only; steps 2 and 3', correct:false, why:'Sulfotransferase also acts, and the glucuronidations are steps 3 and 4 (slide 9).'}],
 teach:'Slide 9 (Polleve-1): after deboronation and oxidation, the products are conjugated by sulfotransferase (sulfate) and UGT (glucuronide). "Remember these things, folks" (T 774).',
 cite:HQ_S3+' slides 7, 9; T 758–777'},

{id:'S3H-004', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'cbda', concept:'h-cris-boron-metals',
 tags:['hard'], source:'both', dupOf:'S3-018',
 stem:'In the PDE4 active site, what does the boron of crisaborole do, and what happens when it is lost?',
 options:[
  {t:'It coordinates Zn²⁺ and Mg²⁺; losing it inactivates the drug', correct:true, why:'Slide 7: the boron binds the zinc and magnesium cations (T 712–719); the deboronated benzyl alcohol cannot, so it is inactive.'},
  {t:'It coordinates Zn²⁺ and Mg²⁺; losing it activates the drug', correct:false, why:'Deboronation inactivates crisaborole and limits its systemic exposure (slide 7).'},
  {t:'It coordinates Ca²⁺ and Mg²⁺; losing it inactivates the drug', correct:false, why:'The cations are zinc and magnesium ("Magnesium, and what? Zinc", T 714).'},
  {t:'It forms a covalent bond with DNA; losing it inactivates the drug', correct:false, why:'Covalent DNA binding is the action of 8-methoxypsoralen (slide 18).'}],
 teach:'The chemical basis of crisaborole\'s action is metal coordination: the boron atom binds Zn²⁺ and Mg²⁺ in the PDE4 site. Hydrolysis removes the boron in the skin, so the product no longer binds and systemic exposure stays low (slide 7).',
 cite:HQ_S3+' slides 7, 18; T 698–719'},

{id:'S3H-005', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'h-jak-adme-pair',
 tags:['hard','tell','numbers'], source:'both', dupOf:'S3-028',
 stem:'Which description of ruxolitinib\'s ADMET is correct?',
 options:[
  {t:'Half-life about 3 h; CYP3A4 substrate; active OH metabolites', correct:true, why:'Slide 8: ruxolitinib t1/2 3 h, 3A4/2C9 substrate, OH metabolites are active; (T 745–757).'},
  {t:'Half-life 8–16 h; CYP3A4 substrate; no active metabolites', correct:false, why:'That is upadacitinib (slide 8).'},
  {t:'Half-life about 3 h; CYP3A4 substrate; no active metabolites', correct:false, why:'Ruxolitinib is the one with active metabolites; upadacitinib has none (T 757).'},
  {t:'Half-life about 12 h; deboronated in the skin; inactive products', correct:false, why:'That is crisaborole (slide 7).'}],
 teach:'Slide 8: ruxolitinib (t1/2 3 h, 3A4/2C9, active OH metabolites) and upadacitinib (t1/2 8–16 h, 3A4/2D6, no active metabolites) are both CYP3A4 substrates, so 3A4 inhibitors and inducers change their exposure; both have log P about 2 and are formulated to stay in the skin.',
 cite:HQ_S3+' slides 7–8; T 737–757'},

/* ---- Emollients, tars, anthralin, psoralens (pp. 15–19) ------------------ */
{id:'S3H-006', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'h-emollient-pairs',
 tags:['hard','tell'], source:'both', dupOf:'S3-044',
 stem:'Which pairing of emollient and description is correct?',
 options:[
  {t:'Petrolatum: hydrocarbons of more than 25 carbons; the most effective', correct:true, why:'Slide 15: petrolatum (most effective, >25 carbons), hydrocarbons; (T 871–872).'},
  {t:'Lanolin: linear hydrocarbons of more than 25 carbons; the most effective', correct:false, why:'Lanolin is wool grease made of fatty acid esters (slide 15).'},
  {t:'Petrolatum: fatty acid esters from wool grease', correct:false, why:'That is lanolin (slide 15).'},
  {t:'Dimethicone: an odorous wool grease', correct:false, why:'Dimethicone is a silicone, hypoallergenic and non-comedogenic (slide 15).'}],
 teach:'Slide 15: emollients are mostly water emulsions that prevent water loss. Petrolatum, hydrocarbons over 25 carbons, the most effective; lanolin, fatty acid esters from wool grease, odorous; silicone-based (dimethicone, cyclomethicone), hypoallergenic and non-comedogenic.',
 cite:HQ_S3+' slide 15; T 866–885'},

{id:'S3H-007', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'h-nonphoto-tars', multi:true,
 tags:['hard','list','tell'], source:'both', dupOf:'S3-050',
 stem:'Which tars are non-photosensitizing? Select all that apply.',
 options:[
  {t:'Shale tar (ichthammol)', correct:true, why:'Slide 16: non-photosensitizer (T 905–908).'},
  {t:'Pine tar', correct:true, why:'Slide 16: wood tars (pine, birch, juniper) are non-photosensitizing (T 908–910).'},
  {t:'Birch tar', correct:true, why:'Slide 16: a wood tar, non-photosensitizing.'},
  {t:'Coal tar', correct:false, why:'Slide 16: coal tar is photosensitizing and may be used with UVB in phototherapy.'}],
 teach:'Slide 16: the tars\' mechanism is unknown but may be antiproliferative. Coal tar (phenols, PAHs and heterocycles) is photosensitizing and is used with UVB; shale tar (ichthammol) and the wood tars (pine, birch, juniper) are not photosensitizing. Dr. Smith said the same of shale tar (PCol slide 57).',
 cite:HQ_S3+' slide 16; T 892–912'},

{id:'S3H-008', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'cbda', concept:'h-anth-class-cbda',
 tags:['hard','tell'], source:'both',
 stem:'Which pairing of drug, chemical class and chemical basis of action is correct?',
 options:[
  {t:'Anthralin: hydroxyanthrone; radicals formed by autoxidation', correct:true, why:'Slide 17: a hydroxyanthrone; antiproliferative via cytotoxic radicals (anthranyl and superoxide anion) from spontaneous autoxidation (T 920–937).'},
  {t:'Anthralin: furanocoumarin; DNA crosslinks after UVA', correct:false, why:'The furanocoumarin that crosslinks DNA with UVA is 8-methoxypsoralen (slide 18).'},
  {t:'Methoxsalen: hydroxyanthrone; radicals formed by autoxidation', correct:false, why:'Methoxsalen is a furanocoumarin that binds DNA (slide 18); autoxidation is anthralin\'s (Polleve-2, slide 19).'},
  {t:'Anthralin: hydroxyanthrone; DNA crosslinks after UVA', correct:false, why:'Anthralin acts through radicals that disrupt keratinocyte mitochondria (slide 17; T 928–937).'}],
 teach:'Two topical psoriasis agents, two chemical classes and two bases of action: anthralin (hydroxyanthrone; autoxidizes to anthranyl and superoxide radicals that damage keratinocyte mitochondria; stains brown) and 8-MOP (furanocoumarin; with UVA it intercalates and crosslinks DNA; partially inhibits CYP3A4).',
 cite:HQ_S3+' slides 17–19; T 918–980'},

{id:'S3H-009', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'cbda', concept:'h-8mop-pyrimidines-3a4',
 tags:['hard'], source:'both', dupOf:'S3-064',
 stem:'Which statement about 8-methoxypsoralen (8-MOP) is correct?',
 options:[
  {t:'With UVA it covalently binds DNA pyrimidine bases; it partially inhibits CYP3A4', correct:true, why:'Slide 18: CBDA, covalently binds DNA pyrimidine bases and lowers DNA synthesis; ADMET, several CYPs and it partially inhibits 3A4 (T 962–967).'},
  {t:'With UVA it covalently binds DNA pyrimidine bases; it strongly induces CYP3A4', correct:false, why:'Slide 18: it partially inhibits 3A4 ("That\'s something to take home", T 962–963).'},
  {t:'With UVB it covalently binds DNA pyrimidine bases; it partially inhibits CYP3A4', correct:false, why:'PUVA is psoralen plus UVA (slides 12, 18).'},
  {t:'It autoxidizes to radicals without light; it partially inhibits CYP3A4', correct:false, why:'Autoxidation is anthralin\'s basis of action, not 8-MOP\'s (Polleve-2; T 977–980).'}],
 teach:'Slide 18: 8-MOP is a furanocoumarin; psoralen plus UVA (PUVA) activates its double bonds so it inserts between DNA base pairs and crosslinks them (intercalation), lowering DNA synthesis. It is handled by several CYPs and partially inhibits 3A4, so it can raise exposure to 3A4 substrates (T 954–971).',
 cite:HQ_S3+' slides 12, 18–19; T 954–980'},

/* ---- Glucocorticoids (pp. 20–23, 25–26) ---------------------------------- */
{id:'S3H-010', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'h-gc-sar-pair',
 tags:['hard'], source:'both', dupOf:'S3-077',
 stem:'Which pair of structural features both increase glucocorticoid anti-inflammatory activity?',
 options:[
  {t:'A 9α-halogen and a C1–C2 double bond', correct:true, why:'Slide 20: the SAR features are the C1–C2 double bond, 6-X, 9-X and 11-OH; the halogens must be alpha (T 1067–1070).'},
  {t:'A 9β-halogen and a C1–C2 double bond', correct:false, why:'The 9-halogen must be alpha ("alpha as well", T 1070).'},
  {t:'A 9α-halogen and a C4–C5 double bond', correct:false, why:'The added double bond in the SAR is C1–C2 (slide 20).'},
  {t:'An 11α-hydroxyl and a 6α-halogen', correct:false, why:'The 11-OH must be beta (T 1071–1072).'}],
 teach:'Slide 20, the four SAR features ("I\'m limiting you to 4 things", T 1020–1021): a C1–C2 double bond, a 6α-halogen, a 9α-halogen and an 11β-hydroxyl each raise anti-inflammatory activity.',
 cite:HQ_S3+' slide 20; T 1019–1075'},

{id:'S3H-011', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'gr', concept:'h-gc-hbond-count',
 tags:['hard','numbers'], source:'both', dupOf:'S3-083',
 stem:'What interaction holds a glucocorticoid in the glucocorticoid receptor, and how many such contacts are there?',
 options:[
  {t:'Hydrogen bonding; six', correct:true, why:'Slide 23: the CBDA is hydrogen bonding; he counted six (T 1131–1139).'},
  {t:'Hydrogen bonding; four', correct:false, why:'Four is the number of SAR features (slide 20), not the hydrogen bonds; he counted six (T 1134).'},
  {t:'Metal coordination; six', correct:false, why:'Metal coordination (Zn²⁺, Mg²⁺) is crisaborole\'s basis of action (slide 7).'},
  {t:'Covalent bonding; two', correct:false, why:'Covalent DNA binding is 8-MOP\'s (slide 18).'}],
 teach:'Slide 23: the chemical basis of glucocorticoid action is hydrogen bonding in the receptor, six hydrogen bonds involving groups such as the C3 carbonyl, the 11β-hydroxyl and the 17α-hydroxyl (T 1131–1139). His question model: "the question might be just counting the number of hydrogen bonds" (T 1137–1139).',
 cite:HQ_S3+' slides 7, 18, 20, 23; T 1131–1139'},

{id:'S3H-012', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'h-medium-potency-example',
 tags:['hard','tell'], source:'both', dupOf:'S3-092',
 stem:'Which topical glucocorticoid product is in the medium-potency class?',
 options:[
  {t:'Betamethasone valerate 0.1% cream', correct:true, why:'Slide 25: medium potency, betamethasone valerate 0.1% cream. Dr. Smith gives the same product as her medium-potency body example (PCol slide 11).'},
  {t:'Betamethasone dipropionate 0.05% cream', correct:false, why:'Slide 25 places it in the potent class.'},
  {t:'Clobetasol propionate 0.05% cream', correct:false, why:'Slide 25 places it in the super-potent class.'},
  {t:'Hydrocortisone acetate 1% cream', correct:false, why:'Slide 25 places it in the low-potency class.'}],
 teach:'Slide 25: super-potent, clobetasol propionate 0.05%; potent, betamethasone dipropionate 0.05%; medium, betamethasone valerate 0.1% cream; low, hydrocortisone acetate 0.5% and 1%. The ranking rests on structure, delivery vehicle and concentration together.',
 cite:HQ_S3+' slide 25; T 1154–1170'},

{id:'S3H-013', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'h-hc-t12-doa-reasons',
 tags:['hard','reasoning'], source:'both', dupOf:'S3-098',
 stem:'Hydrocortisone has a half-life of 1–2 h but a duration of action of 8–12 h. Which pairing of reasons is correct?',
 options:[
  {t:'Short half-life from metabolism; long duration from high protein binding', correct:true, why:'Slide 26; (T 1187–1189): "its duration of action is due to high protein binding".'},
  {t:'Short half-life from protein binding; long duration from metabolism', correct:false, why:'The two halves are reversed (slide 26).'},
  {t:'Short half-life from poor skin penetration; long duration from active metabolites', correct:false, why:'Poor penetration sets its skin bioavailability (<15%), not its half-life; cortisone is inactive (slide 26).'},
  {t:'Short half-life from metabolism; long duration from a dendrimer formulation', correct:false, why:'Dendrimer formulations are made for anthralin (slide 17).'}],
 teach:'Slide 26: hydrocortisone, log P about 1.5, under 15% bioavailable through normal skin versus 95% orally; t1/2 1–2 h because of metabolism; duration of action 8–12 h because of high protein binding; 11β-HSD converts it to cortisone; cortisone and urocortisol appear in the urine.',
 cite:HQ_S3+' slides 17, 26; T 1179–1196'},

/* ---- Vitamin D analogs and the take-home pathway (p. 27) ----------------- */
{id:'S4H-001', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'h-vitd-organ-enzyme-seq',
 tags:['hard','reasoning'], source:'both',
 stem:'Which sequence of organs and enzymes turns vitamin D3 into calcitriol?',
 options:[
  {t:'Liver, CYP2R1 (25-hydroxylation); then kidney, 1α-hydroxylase', correct:true, why:'Slide 27 and the reading: 25-hydroxylation in the liver, CYP2R1 the most important 25-hydroxylase; then 1α-hydroxylation in the kidney (T@3530–3900).'},
  {t:'Kidney, CYP2R1 (25-hydroxylation); then liver, 1α-hydroxylase', correct:false, why:'The organs are reversed: liver first, kidney second (slide 27).'},
  {t:'Liver, 1α-hydroxylase; then kidney, CYP2R1 (25-hydroxylation)', correct:false, why:'The enzymes are reversed: 25-hydroxylation comes first (slide 27).'},
  {t:'Skin, CYP2R1 (25-hydroxylation); then liver, 1α-hydroxylase', correct:false, why:'The skin makes vitamin D3 itself from 7-dehydrocholesterol with UVB; the hydroxylations are in liver then kidney.'}],
 teach:'His take-home (T@3530–3660): know the reaction, the organ and the enzyme. Skin: UVB opens the B ring of 7-dehydrocholesterol, and pre-vitamin D3 isomerizes to vitamin D3. Liver: CYP2R1 makes 25-hydroxyvitamin D3, the inactive circulating form. Kidney: 1α-hydroxylase (CYP27B1) makes calcitriol, the active form.',
 cite:HQ_S4+' slide 27; T@2758–4410; Bikle, Endotext (assigned reading)'},

{id:'S4H-002', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'h-vitd-skin-steps', multi:true,
 tags:['hard','list'], source:'both', dupOf:'S4-007',
 stem:'Which steps of vitamin D3 activation take place in the skin? Select all that apply.',
 options:[
  {t:'UVB opening the B ring of 7-dehydrocholesterol', correct:true, why:'Slide 27 and the reading: light opens the B ring in the skin (T@4330–4410).'},
  {t:'Isomerization of pre-vitamin D3 to vitamin D3', correct:true, why:'The reading: pre-vitamin D3 isomerizes to vitamin D3 in the skin.'},
  {t:'25-hydroxylation by CYP2R1', correct:false, why:'This happens in the liver (slide 27; T@3530–3813).'},
  {t:'1α-hydroxylation to calcitriol', correct:false, why:'This happens in the kidney (slide 27; T@3813–3900).'}],
 teach:'Skin: 7-dehydrocholesterol, opened by UVB, gives pre-vitamin D3, which isomerizes to vitamin D3. Liver: 25-hydroxylation (CYP2R1). Kidney: 1α-hydroxylation to calcitriol. "Light is going to be involved in that" (T@4371).',
 cite:HQ_S4+' slide 27; T@2989–4410; Bikle, Endotext (assigned reading)'},

{id:'S4H-003', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'h-calcipotriene-class-limit',
 tags:['hard','tell'], source:'both', dupOf:'S4-005',
 stem:'Which pairing of calcipotriene\'s chemical class and its limiting factor in psoriasis is correct?',
 options:[
  {t:'Secosteroid; hypercalcemia', correct:true, why:'Slide 27: calcitriol and calcipotriene are secosteroids (T@2989–3200); hypercalcemia becomes the limiting factor (T@1580–2000).'},
  {t:'Secosteroid; teratogenicity', correct:false, why:'Teratogenicity is the major limitation of the retinoids (slide 48).'},
  {t:'Steroid with an intact B ring; hypercalcemia', correct:false, why:'In a secosteroid the B ring is opened (slide 27; T@2989–3430).'},
  {t:'Pteridine; hypercalcemia', correct:false, why:'Methotrexate is the pteridine (slide 30).'}],
 teach:'Slide 27: vitamin D analogs serve bone health and act as antiproliferatives. The aim was a drug without the calcium effect; calcipotriene still has both properties, so hypercalcemia limits its use (T@1580–2758). Dr. Smith gives the 100 g/week limit (PCol slide 22).',
 cite:HQ_S4+' slides 27, 30, 48; T@1505–3430'},

/* ---- Limus drugs, retinoids, methotrexate, cyclosporine, apremilast ------- */
{id:'S4H-004', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'h-limus-same-diff',
 tags:['hard','tell'], source:'both', dupOf:'S4-015',
 stem:'Pimecrolimus and tacrolimus are alike in some properties and differ in one. Which pairing is correct?',
 options:[
  {t:'Alike in lipophilicity and mechanism; differ in skin permeation', correct:true, why:'Slide 28: "similar in lipophilicity, structure, mechanism, but differ in skin permeation" (T@5890–6070).'},
  {t:'Alike in skin permeation and structure; differ in mechanism', correct:false, why:'Both are calcineurin inhibitors; permeation is the difference (slide 28).'},
  {t:'Alike in mechanism and structure; differ in lipophilicity', correct:false, why:'Slide 28: they are similar in lipophilicity.'},
  {t:'Alike in skin protein binding and mechanism; differ in structure', correct:false, why:'Pimecrolimus has higher non-specific skin protein binding; tacrolimus low (slide 28).'}],
 teach:'Slide 28: pimecrolimus binds skin proteins non-specifically and strongly (fewer systemic adverse reactions); tacrolimus binds weakly and permeates more. Both are macrolide (lactone) immunosuppressants and calcineurin inhibitors, both very lipophilic.',
 cite:HQ_S4+' slide 28; T@4931–6070'},

{id:'S4H-005', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'h-tazarotene-profile',
 tags:['hard','tell'], source:'both', dupOf:'S4-023',
 stem:'Which description of tazarotene is correct?',
 options:[
  {t:'An alkyne-containing ester prodrug, used topically', correct:true, why:'Slide 29: an acetylenic retinoid (alkyne) and a prodrug, the topical agent; carboxylesterases activate it (T@6800–7125).'},
  {t:'An alkyne-containing, directly active acid, used orally', correct:false, why:'Tazarotene is the topical retinoid and needs ester hydrolysis to become active (slides 29, 51).'},
  {t:'A 13-cis retinoic acid, used topically', correct:false, why:'13-cis retinoic acid is isotretinoin, an oral agent (slide 49).'},
  {t:'A mono-aromatic ester prodrug, used orally', correct:false, why:'That describes etretinate, the 2nd-generation prodrug of acitretin (slide 50).'}],
 teach:'Slide 29: retinoids normalize keratinization and proliferation. Topical: tazarotene, an acetylenic retinoid and ester prodrug (activated by carboxylesterases). Oral: acitretin and isotretinoin. Slide 51 places tazarotene in the 3rd (poly-aromatic) generation.',
 cite:HQ_S4+' slides 29, 49–51; T@6640–7550'},

{id:'S4H-006', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g3', concept:'h-adapalene-first-synthetic',
 tags:['hard','tell'], source:'both',
 stem:'Which retinoid belongs to the 3rd (poly-aromatic) generation and is the first synthetic retinoid?',
 options:[
  {t:'Adapalene', correct:true, why:'Slide 51: adapalene, 1st synthetic retinoid, 3rd generation (T@30014–30300).'},
  {t:'Trifarotene', correct:false, why:'3rd generation as well, but slide 51 gives "1st synthetic retinoid" to adapalene.'},
  {t:'Tazarotene', correct:false, why:'3rd generation, but a prodrug (slide 51).'},
  {t:'Tretinoin', correct:false, why:'1st generation (non-aromatic) and the 1st retinoid for acne (slide 49).'}],
 teach:'Slides 49–51: 1st generation (non-aromatic), tretinoin (topical, all-trans; the first retinoid for acne) and isotretinoin (oral, 13-cis); 2nd (mono-aromatic), etretinate and acitretin; 3rd (poly-aromatic), adapalene (first synthetic), trifarotene and tazarotene (prodrug). All are lipophilic with low systemic absorption.',
 cite:HQ_S4+' slides 49–51; T@27705–30300'},

{id:'S4H-007', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g2', concept:'h-mono-aromatic-retinoid',
 tags:['hard','tell'], source:'both', dupOf:'S4-074',
 stem:'Which retinoid is a 2nd-generation (mono-aromatic) retinoid?',
 options:[
  {t:'Acitretin', correct:true, why:'Slide 50: the 2nd-generation mono-aromatics are etretinate and its active form acitretin (T@28898–29700).'},
  {t:'Isotretinoin', correct:false, why:'1st generation, non-aromatic (slide 49).'},
  {t:'Adapalene', correct:false, why:'3rd generation, poly-aromatic (slide 51).'},
  {t:'Tretinoin', correct:false, why:'1st generation, non-aromatic (slide 49).'}],
 teach:'The generations are set by the number of aromatic rings: none (tretinoin, isotretinoin), one (etretinate, acitretin), several (adapalene, trifarotene, tazarotene); slides 49–51.',
 cite:HQ_S4+' slides 49–51; T@27705–30300'},

{id:'S4H-008', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g1', concept:'h-tret-iso-route-isomer',
 tags:['hard','tell'], source:'both', dupOf:'S4-077',
 stem:'Which pairing of isomer and route is correct for tretinoin and isotretinoin?',
 options:[
  {t:'Tretinoin: all-trans, topical; isotretinoin: 13-cis, oral', correct:true, why:'Slide 49 (T@27705–28600).'},
  {t:'Tretinoin: 13-cis, topical; isotretinoin: all-trans, oral', correct:false, why:'The isomers are swapped (slide 49).'},
  {t:'Tretinoin: all-trans, oral; isotretinoin: 13-cis, topical', correct:false, why:'The routes are swapped (slide 49).'},
  {t:'Tretinoin: all-trans, topical; isotretinoin: 9-cis, oral', correct:false, why:'Isotretinoin is cis at carbon 13 (slide 49; T@28420–28470).'}],
 teach:'Slide 49: tretinoin, all-trans retinoic acid, topical, the first retinoid for acne; isotretinoin, 13-cis retinoic acid, a geometric isomer of tretinoin, taken orally.',
 cite:HQ_S4+' slide 49; T@27705–28720'},

{id:'S4H-009', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'gen', concept:'h-retinoid-origin-agonist',
 tags:['hard'], source:'both', dupOf:'S4-073',
 stem:'Retinoids derive from which vitamin, and how do they act at RAR and RXR?',
 options:[
  {t:'Vitamin A1 (retinol); as agonists', correct:true, why:'Slide 48: derivatives of vitamin A1 (retinol) and RAR/RXR agonists (T@26805–27100).'},
  {t:'Vitamin A1 (retinol); as antagonists', correct:false, why:'Slide 48: they are agonists.'},
  {t:'Vitamin D3; as agonists', correct:false, why:'Vitamin D3 gives calcitriol and calcipotriene, the secosteroids (slide 27).'},
  {t:'Vitamin D3; as antagonists', correct:false, why:'Wrong vitamin and wrong action (slides 27, 48).'}],
 teach:'Slide 48: tretinoin, isotretinoin, acitretin, adapalene, tazarotene and trifarotene derive from vitamin A1 (retinol) and are RAR and RXR agonists: anti-inflammatory, anti-proliferative, lowering sebum production and teratogenic.',
 cite:HQ_S4+' slides 27, 48; T@26805–27700'},

{id:'S4H-010', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'h-mtx-sar-losses', multi:true,
 tags:['hard','list'], source:'both', dupOf:'S4-034',
 stem:'Which changes to methotrexate would lower its activity? Select all that apply.',
 options:[
  {t:'Making the pteridine ring non-aromatic', correct:true, why:'Slide 31: the pteridine ring should remain aromatic (T@10402–10800).'},
  {t:'N-alkylating the aromatic amines', correct:true, why:'Slide 31: aromatic N-alkylation lowers activity (T@10583–10750).'},
  {t:'Removing the N-CH3 group', correct:true, why:'Slide 31: the N-CH3 is essential for activity.'},
  {t:'Keeping the glutamic acid portion', correct:false, why:'The glutamic acid portion is one of the three required parts (slide 31).'},
  {t:'Keeping the p-aminobenzoic acid portion', correct:false, why:'The p-aminobenzoic acid portion is one of the three required parts (slide 31).'}],
 teach:'Slide 31, MTX SAR: the pteridine ring, p-aminobenzoic acid and glutamic acid parts are needed; the pteridine ring must stay aromatic; N-alkylation of its aromatic amines lowers activity; the N-CH3 is essential.',
 cite:HQ_S4+' slide 31; T@10096–11050'},

{id:'S4H-011', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'h-mtx-class-competitive',
 tags:['hard','tell'], source:'both', dupOf:'S4-028',
 stem:'Which pairing of methotrexate\'s chemical class and its action at DHFR is correct?',
 options:[
  {t:'A pteridine; it competitively inhibits DHFR', correct:true, why:'Slide 30: a pteridine that competitively inhibits dihydrofolate reductase; it sits in the same enzyme cavity as folic acid (T@8238–9500).'},
  {t:'A pteridine; it binds an allosteric site on DHFR', correct:false, why:'Slide 30: the inhibition is competitive, in the same cavity.'},
  {t:'An isoindoline; it competitively inhibits DHFR', correct:false, why:'Apremilast is the isoindoline (slide 34).'},
  {t:'A pyrrolopyrimidine; it competitively inhibits DHFR', correct:false, why:'Ruxolitinib is a pyrrolopyrimidine (slide 8).'}],
 teach:'Slide 30: methotrexate is a pteridine and an antimetabolite (slide 12: a substrate mimic that inhibits cellular metabolism). It competes with folic acid for DHFR, with higher affinity (T@9220), blocking DNA and RNA synthesis; it is also immunosuppressant and anti-inflammatory.',
 cite:HQ_S4+' slides 8, 12, 30, 34; T@8238–9500'},

{id:'S4H-012', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'h-csa-peptide-cyclophilin',
 tags:['hard'], source:'both', dupOf:'S4-038',
 stem:'Which description of cyclosporine is correct?',
 options:[
  {t:'An 11 amino acid cyclic peptide, activated by complexing with cyclophilin', correct:true, why:'Slide 33 (T@12014–12700).'},
  {t:'An 11 amino acid cyclic peptide, activated by complexing with FKBP', correct:false, why:'FKBP is the binding protein of tacrolimus (PCol slide 26); cyclosporine pairs with cyclophilin (slide 33).'},
  {t:'An 11 amino acid linear peptide, activated by complexing with cyclophilin', correct:false, why:'Slide 33: a cyclic peptide, a lactam (T@12150–12254).'},
  {t:'A macrolide lactone, activated by complexing with cyclophilin', correct:false, why:'The macrolide lactones are pimecrolimus and tacrolimus (slides 28, 32).'}],
 teach:'Slide 33: cyclosporine is an 11 amino acid cyclic peptide (a lactam), activated by complexing with cyclophilin; it then inhibits calcineurin phosphatase and T-cell signaling. Oral bioavailability is very poor from CYP3A4 first-pass metabolism; grapefruit juice raises its blood levels.',
 cite:HQ_S4+' slides 28, 32–33; T@12014–13690'},

{id:'S4H-013', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'h-csa-grapefruit-why',
 tags:['hard','reasoning'], source:'both', dupOf:'S4-043',
 stem:'Why does grapefruit juice raise cyclosporine blood levels?',
 options:[
  {t:'It blocks CYP3A4 first-pass metabolism', correct:true, why:'Slide 33; (T@12824–13690): bioavailability is poor from first-pass metabolism, and blocking it raises blood levels.'},
  {t:'It speeds the complexing of cyclosporine with cyclophilin', correct:false, why:'Complexation activates the drug in the cell; it does not change blood levels (slide 33).'},
  {t:'It blocks carboxylesterases that hydrolyze cyclosporine', correct:false, why:'Carboxylesterases activate ester prodrugs such as tazarotene (slide 29).'},
  {t:'It chelates cyclosporine into an absorbable salt', correct:false, why:'Chelation is a tetracycline property (slide 55).'}],
 teach:'Slide 33 and T@13190–13550: "you can enhance what blood levels of this because you\'ve blocked out this first pass metabolism." Cyclosporine is a CYP3A4 substrate, as Dr. Smith also stressed (PCol slide 30).',
 cite:HQ_S4+' slides 29, 33, 55; T@12824–13690'},

{id:'S4H-014', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'h-apremilast-cyps',
 tags:['hard','numbers'], source:'both', dupOf:'S4-046',
 stem:'Which CYPs carry out the O-demethylation of apremilast?',
 options:[
  {t:'CYP3A4 major; CYP1A2 and CYP2A6 minor', correct:true, why:'Slide 34: extensively metabolized by O-demethylation, 3A4 major (1A2 and 2A6 minor), then O-glucuronidation (T@14076–14300).'},
  {t:'CYP3A4 major; CYP2C9 and CYP2D6 minor', correct:false, why:'2C9 and 2D6 are the second isoforms of ruxolitinib and upadacitinib (slide 8).'},
  {t:'CYP1A2 major; CYP3A4 and CYP2A6 minor', correct:false, why:'Slide 34: 3A4 is the major isoform.'},
  {t:'CYP2A6 major; CYP3A4 minor', correct:false, why:'Slide 34: 3A4 is the major isoform.'}],
 teach:'Slide 34: apremilast, an isoindoline PDE4 inhibitor (raises cAMP) for psoriatic arthritis and moderate to severe plaque psoriasis, is O-demethylated (3A4 major; 1A2 and 2A6 minor) and the product is glucuronidated by UGTs. Avoid 3A4 inhibitors and inducers (T@14076–14385).',
 cite:HQ_S4+' slides 8, 34; T@13698–14385'},

{id:'S4H-015', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'h-apr-cris-same-class',
 tags:['hard','tell'], source:'both',
 stem:'Apremilast and crisaborole both inhibit PDE4. Are they the same chemical class?',
 options:[
  {t:'No: apremilast is an isoindoline; crisaborole is a benzoxaborole', correct:true, why:'Slide 34 (isoindoline) and slide 7 (benzoxaborole); his format: "are these similar chemical, no, they are not" (11/03 T 732–733).'},
  {t:'Yes: both are benzoxaboroles', correct:false, why:'Only crisaborole carries boron (slide 7).'},
  {t:'No: apremilast is a pteridine, while crisaborole is a benzoxaborole', correct:false, why:'The pteridine is methotrexate (slide 30).'},
  {t:'Yes: both are isoindolines', correct:false, why:'Crisaborole is a benzoxaborole (slide 7).'}],
 teach:'One target, two chemical classes: crisaborole (benzoxaborole, topical soft drug, slide 7) and apremilast (isoindoline, oral, slide 34) both inhibit PDE4 and raise cAMP. The same question can be asked of ruxolitinib and upadacitinib (slide 8).',
 cite:HQ_S4+' slides 7, 30, 34; T@13698–13800; 11/03 T 683–689, 732–733'},

/* ---- Keratolytics (pp. 43–47) --------------------------------------------- */
{id:'S4H-016', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'h-ga-sa-type-lipo',
 tags:['hard','tell'], source:'both', dupOf:'S4-057',
 stem:'Which pairing describes glycolic acid and salicylic acid?',
 options:[
  {t:'Glycolic: alpha, hydrophilic; salicylic: beta, lipophilic', correct:true, why:'Slide 43: glycolic acid is an α-hydroxy acid and hydrophilic; salicylic acid is more lipophilic than glycolic acid; "this is a beta hydroxy acid" (T@22090–22200).'},
  {t:'Glycolic: beta, lipophilic; salicylic: alpha, hydrophilic', correct:false, why:'Both labels are reversed (slide 43).'},
  {t:'Glycolic: alpha, lipophilic; salicylic: beta, hydrophilic', correct:false, why:'Slide 43: glycolic acid is the hydrophilic one.'},
  {t:'Both alpha-hydroxy; salicylic is the more hydrophilic', correct:false, why:'Salicylic acid\'s OH is on the beta carbon, and it is the more lipophilic (slide 43).'}],
 teach:'Slide 43: glycolic acid, an α-hydroxy hydrophilic acid that acts near the surface, with higher concentrations for deeper peels; salicylic acid, a β-hydroxy acid, more lipophilic, raising hydration so lower layers swell, soften and desquamate. Both have a pKa near 3 (T@20564, T@21768–21960).',
 cite:HQ_S4+' slide 43; T@20199–22230'},

{id:'S4H-017', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'h-ga-sa-metab',
 tags:['hard','tell'], source:'both', dupOf:'S4-060',
 stem:'Which pairing of hydroxy acid and its metabolism once absorbed is correct?',
 options:[
  {t:'Glycolic acid: alcohol and aldehyde dehydrogenase; salicylic acid: glycine conjugation', correct:true, why:'Slide 43: two enzymes for glycolic acid, alcohol and aldehyde dehydrogenase (T@20780–21110); salicylic acid mostly as the glycine conjugate (T@22380–22600).'},
  {t:'Glycolic acid: glycine conjugation; salicylic acid: alcohol and aldehyde dehydrogenase', correct:false, why:'The two halves are swapped (slide 43).'},
  {t:'Glycolic acid: CYP3A4; salicylic acid: glycine conjugation', correct:false, why:'The two enzymes for glycolic acid are the dehydrogenases (T@20942–21110).'},
  {t:'Glycolic acid: UGT; salicylic acid: CYP3A4', correct:false, why:'Neither is the pathway on slide 43.'}],
 teach:'"Remember that tandem of enzymes, alcohol dehydrogenase and aldehyde dehydrogenase" (T@20942–21110), the same pair he asked for crisaborole\'s benzyl alcohol (slide 7). Salicylic acid is mostly conjugated with glycine (about 75%; slide 43).',
 cite:HQ_S4+' slides 7, 43; T@20780–22600'},

{id:'S4H-018', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'h-beta-hydroxy-pick',
 tags:['hard','reasoning'], source:'both', dupOf:'S4-063',
 stem:'Which compound is a beta-hydroxy acid, like salicylic acid, rather than an alpha-hydroxy acid?',
 options:[
  {t:'3-Hydroxybutanoic acid', correct:true, why:'Its OH is on C3, two carbons from the COOH: the beta carbon (T@22090–22200).'},
  {t:'2-Hydroxypropanoic acid', correct:false, why:'OH on C2, next to the COOH: an alpha-hydroxy acid (slide 44).'},
  {t:'Hydroxyacetic acid (glycolic acid)', correct:false, why:'Glycolic acid is an α-hydroxy acid (slide 43).'},
  {t:'2-Hydroxybutanedioic acid', correct:false, why:'Its OH on C2 is next to a COOH (C1), so it is an alpha-hydroxy acid (slide 44).'}],
 teach:'Slide 44, hydroxy acid SAR: COOH group(s) and, for most, an OH on the alpha carbon, the carbon next to the COOH; R is mostly alkyl. "This is the alpha carbon. This one is called the beta carbon. So this is a beta hydroxy acid" (T@22090–22200).',
 cite:HQ_S4+' slides 43–44; T@22090–23880'},

{id:'S4H-019', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'h-sulfur-thiolysis-size',
 tags:['hard'], source:'both', dupOf:'S4-067',
 stem:'Which pairing describes sulfur\'s chemical action as a keratolytic and the particle size that works?',
 options:[
  {t:'Thiolysis of cysteine disulfide bonds; small particles', correct:true, why:'Slide 46: sulfur reduces or breaks the disulfide bonds in keratin (cysteine, T@25488–25550); it needs to be small particle sulfur (T@24600–24760).'},
  {t:'Thiolysis of cysteine disulfide bonds; large particles', correct:false, why:'"Large particle sulfur, less effective" (T@24600–24760); large particles are better for zinc oxide (slide 61).'},
  {t:'Free radicals from a peroxide bond; small particles', correct:false, why:'Free radicals are the benzoyl peroxide action (slide 47).'},
  {t:'Lowering skin pH as a hydroxy acid; small particles', correct:false, why:'pH lowering belongs to the hydroxy acids and benzoyl peroxide (slides 43, 47).'}],
 teach:'Slide 46: sulfur, alone or mixed (with sodium sulfacetamide or zinc oxide), acts by thiolysis, breaking the cysteine disulfide bonds of keratin; it must be small-particle sulfur. Its drawbacks are allergies and smell (T@24170–24285).',
 cite:HQ_S4+' slides 43, 46–47, 61; T@24170–25550'},

{id:'S4H-020', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'h-particle-size-pair',
 tags:['hard','tell'], source:'both',
 stem:'For which agent are small particles more effective, and for which are large particles more effective?',
 options:[
  {t:'Sulfur: small; zinc oxide: large', correct:true, why:'Slide 46 and T@24600–24760 (small-particle sulfur); slide 61, "size matters", large ZnO particles more effective (T@38748–39200).'},
  {t:'Sulfur: large; zinc oxide: small', correct:false, why:'The two halves are swapped (slides 46, 61).'},
  {t:'Both: small', correct:false, why:'For zinc oxide the larger particles are more effective (slide 61).'},
  {t:'Both: large', correct:false, why:'Large-particle sulfur is less effective (T@24600–24760).'}],
 teach:'Particle size goes opposite ways: sulfur works by reacting with keratin, so small particles work better (slide 46); zinc oxide works by reflecting and scattering light, and the larger particles do it better, although micronized forms are available (slide 61).',
 cite:HQ_S4+' slides 46, 61; T@24600–24760, T@38748–39200'},

{id:'S4H-021', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'bpo', concept:'h-bpo-radical-urine',
 tags:['hard'], source:'both', dupOf:'S4-070',
 stem:'Which pairing of benzoyl peroxide product and its fate or role is correct?',
 options:[
  {t:'The benzoyl radical kills bacteria; benzoic acid is excreted in urine', correct:true, why:'Slide 47: free radicals from the broken peroxide bond act on bacteria (T@26000–26600); the absorbed drug forms benzoic acid, which is excreted in urine.'},
  {t:'Benzoic acid kills bacteria; the benzoyl radical is excreted in urine', correct:false, why:'The two halves are swapped (slide 47).'},
  {t:'The benzoyl radical kills bacteria; salicylic acid is excreted in urine', correct:false, why:'Salicylic acid comes from the salicylate sunscreen esters (slide 64), not from benzoyl peroxide.'},
  {t:'Hydrogen sulfide kills bacteria; benzoic acid is excreted in urine', correct:false, why:'Hydrogen sulfide is sulfur\'s product in Dr. Smith\'s lecture (PCol slide 38).'}],
 teach:'Slide 47: benzoyl peroxide belongs to the peroxide chemical class; its chemical basis of action is pH lowering and free radicals. It is absorbed by the skin and forms benzoic acid, which is excreted in urine.',
 cite:HQ_S4+' slides 47, 64; T@25608–26600'},

/* ---- Hormones and antibiotics (pp. 52–55) --------------------------------- */
{id:'S4H-022', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'oc', concept:'h-acne-steroids-set', multi:true,
 tags:['hard','list','tell'], source:'both', dupOf:'S4-085',
 stem:'Which of these acne hormonal agents are steroids? Select all that apply.',
 options:[
  {t:'Ethinyl estradiol', correct:true, why:'Slide 52: "these are all going to be what? Steroids" (T@31000–31300).'},
  {t:'Drospirenone', correct:true, why:'Slide 52: co-formulated with ethinyl estradiol; a steroid (T@31000–31300).'},
  {t:'Norgestimate', correct:true, why:'Slide 52: a steroid (T@31000–31300).'},
  {t:'Spironolactone', correct:true, why:'Slide 53: the steroidal antiandrogen (T@32075).'},
  {t:'Flutamide', correct:false, why:'Slide 53: a non-steroidal antiandrogen.'},
  {t:'Ketoconazole', correct:false, why:'An azole antifungal, not a steroid (T@32150–32300).'}],
 teach:'Slides 52–53: the oral contraceptive components (ethinyl estradiol with norgestimate or drospirenone) are steroids, as is spironolactone; flutamide and ketoconazole are not. Both groups regulate androgen levels and prevent excess sebum production.',
 cite:HQ_S4+' slides 52–53; T@30883–32300'},

{id:'S4H-023', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'h-keto-two-props',
 tags:['hard','tell'], source:'both', dupOf:'S4-088',
 stem:'Which antiandrogen used in acne lowers testosterone biosynthesis and is also a strong CYP3A4 inhibitor?',
 options:[
  {t:'Ketoconazole', correct:true, why:'Slide 53; (T@32150–32640): it diminishes testosterone biosynthesis, and the azole antifungals are strong 3A4 inhibitors.'},
  {t:'Spironolactone', correct:false, why:'It lowers testosterone biosynthesis (T@32150–32300), but the 3A4 inhibition is the azole\'s.'},
  {t:'Flutamide', correct:false, why:'It keeps testosterone from binding its receptor (T@32723–33140).'},
  {t:'Drospirenone', correct:false, why:'An oral contraceptive component (slide 52).'}],
 teach:'Slide 53: spironolactone (steroid) and ketoconazole lower testosterone biosynthesis; flutamide (non-steroid) blocks testosterone at its receptor. "Always when you see azole antifungals, have that enzyme inhibition at the front of your mind" (T@32560–32640).',
 cite:HQ_S4+' slides 52–53; T@32075–33140'},

{id:'S4H-024', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'h-tet-half-lives',
 tags:['hard','numbers'], source:'slide', dupOf:'S4-093',
 stem:'Which order of half-life, shortest to longest, is correct for the tetracyclines?',
 options:[
  {t:'Tetracycline (8.5 h) < doxycycline (11–13 h) < minocycline (14–22 h)', correct:true, why:'The half-lives in this order (slide 55).'},
  {t:'Doxycycline (8.5 h) < tetracycline (11–13 h) < minocycline (14–22 h)', correct:false, why:'Slide 55: tetracycline is 8.5 h and doxycycline 11–13 h.'},
  {t:'Tetracycline (8.5 h) < minocycline (11–13 h) < doxycycline (14–22 h)', correct:false, why:'Slide 55: doxycycline 11–13 h, minocycline 14–22 h.'},
  {t:'Minocycline (8.5 h) < doxycycline (11–13 h) < tetracycline (14–22 h)', correct:false, why:'Slide 55: minocycline is the longest acting.'}],
 teach:'Slide 55: tetracycline, broad spectrum, chelates metal ions, absorption affected by food such as dairy, t1/2 8.5 h. Doxycycline and minocycline: food does not affect absorption; lipophilic and longer acting (doxycycline 11–13 h, minocycline 14–22 h). Cross-reactivity follows their structural similarity.',
 cite:HQ_S4+' slide 55; T@35634–36800'},

{id:'S4H-025', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'h-tet-chelation-ions', multi:true,
 tags:['hard','list'], source:'both', dupOf:'S4-092',
 stem:'Which metal ions does tetracycline chelate? Select all that apply.',
 options:[
  {t:'Ca²⁺', correct:true, why:'Slide 55; in bone the calcium is chelated into insoluble salts (T@35634–36100).'},
  {t:'Mg²⁺', correct:true, why:'In the chelation list (slide 55).'},
  {t:'Fe³⁺', correct:true, why:'In the chelation list (slide 55).'},
  {t:'Al³⁺', correct:true, why:'In the chelation list (slide 55).'},
  {t:'Na⁺', correct:false, why:'Not in the chelation list on slide 55.'},
  {t:'K⁺', correct:false, why:'Not in the chelation list on slide 55.'}],
 teach:'Slide 55: tetracycline chelates Al³⁺, Ca²⁺, Mg²⁺, Fe³⁺, zinc and Bi³⁺. In bone and enamel the calcium chelates form insoluble salts that stain and weaken them; in the gut, food such as dairy cuts absorption.',
 cite:HQ_S4+' slide 55; T@35634–36400'},

/* ---- Sunblocks and sunscreens (pp. 61–66) --------------------------------- */
{id:'S4H-026', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'inorg', concept:'h-zno-two-props',
 tags:['hard'], source:'both', dupOf:'S4-097',
 stem:'Which description of zinc oxide and titanium dioxide as sunblocks is correct?',
 options:[
  {t:'They reflect or scatter UVA and UVB and do not irritate the skin', correct:true, why:'Slide 61: metal oxides that physically reflect or scatter light, broad spectrum (UVA/B), inert, do not irritate (T@38519–38748).'},
  {t:'They absorb UVA and UVB and release it as heat; they do not irritate', correct:false, why:'Absorbing UV and releasing heat is what the organic sunscreens do (slide 62).'},
  {t:'They reflect UVB only and irritate the skin', correct:false, why:'Slide 61: broad spectrum and inert.'},
  {t:'They reflect UVA and UVB and photodegrade within 2 hours', correct:false, why:'A photodegradation half-life of about 2 h is avobenzone\'s (slide 62).'}],
 teach:'Slide 61: zinc oxide and titanium dioxide are inorganic metal oxides that physically reflect or scatter light, cover UVA and UVB, are inert and do not irritate the skin, and come in micronized forms; larger particles are more effective.',
 cite:HQ_S4+' slides 61–62; T@38519–39200'},

{id:'S4H-027', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-avobenzone-class-band',
 tags:['hard','tell'], source:'both',
 stem:'Which pairing of avobenzone\'s chemical family and its UV coverage is correct?',
 options:[
  {t:'Dibenzoylmethane; the full UVA spectrum and some UVB', correct:true, why:'Slide 62: dibenzoylmethanes, avobenzone products, absorb the full spectrum of UVA and some UVB (T@40499–40950).'},
  {t:'Anthranilate; it absorbs the full UVA spectrum and some UVB', correct:false, why:'Meradimate is the anthranilate (slide 62).'},
  {t:'Dibenzoylmethane; UVB only', correct:false, why:'Slide 62: avobenzone is a UVA absorber.'},
  {t:'Benzophenone; full UVB and considerable UVA', correct:false, why:'That describes oxybenzone and the benzophenones (slide 65).'}],
 teach:'Slide 62: UVA filters. Avobenzone (dibenzoylmethane) absorbs all of UVA and some UVB, has low skin absorption and is rapidly degraded by UVA (photodegradation half-life about 2 h, so reapply about every 2 h). Meradimate (anthranilate) absorbs UVA and degrades even faster.',
 cite:HQ_S4+' slides 62, 65; T@39895–41549'},

{id:'S4H-028', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-octinoxate-vs-octocrylene',
 tags:['hard','tell'], source:'both', dupOf:'S4-103',
 stem:'Octinoxate and octocrylene are both cinnamates. What separates them?',
 options:[
  {t:'Octinoxate: UVB, degrades in 1–2 h; octocrylene: UVB and UVA, very photostable', correct:true, why:'Slide 63 (octinoxate, UVB, absorbed through skin, photodegradation 1–2 h; T@41549–41900) and slide 65 (octocrylene, full UVB plus UVA, very high photostability, about 90 h; T@43958–44100).'},
  {t:'Octinoxate: UVB and UVA, very photostable; octocrylene: UVB, degrades in 1–2 h', correct:false, why:'The two halves are swapped (slides 63, 65).'},
  {t:'Octinoxate: UVA, degrades in 1–2 h; octocrylene: UVB only, very photostable', correct:false, why:'Octinoxate is a UVB filter, and octocrylene covers UVB plus UVA (slides 63, 65).'},
  {t:'Both UVB only; octocrylene degrades faster', correct:false, why:'Octocrylene is the most photostable of these filters (T@43958–44100).'}],
 teach:'Cinnamates: octinoxate (and the rarely used cinoxate) absorb UVB, are absorbed through skin and photodegrade in 1–2 h (slide 63); octocrylene absorbs full UVB plus UVA, has a photodegradation half-life of about 90 h and is added to stabilize other filters (slide 65).',
 cite:HQ_S4+' slides 63, 65; T@41549–41900, T@43958–44800'},

{id:'S4H-029', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-oxybenzone-bp3-logp',
 tags:['hard','numbers'], source:'both', dupOf:'S4-107',
 stem:'Oxybenzone is which benzophenone, and what is its concern?',
 options:[
  {t:'Benzophenone-3; log P about 4, highly absorbed through skin', correct:true, why:'Slide 65: oxybenzone (benzophenone-3); log P about 4, highly absorbed (T@43589–43900).'},
  {t:'Benzophenone-4; log P about 4, highly absorbed through skin', correct:false, why:'Benzophenone-4 is sulisobenzone (slide 65).'},
  {t:'Benzophenone-8; log P about 4, highly absorbed through skin', correct:false, why:'Benzophenone-8 is dioxybenzone (slide 65).'},
  {t:'Benzophenone-3; high molecular weight, little skin absorption', correct:false, why:'High molecular weight limiting absorption describes bemotrizinol (slide 66).'}],
 teach:'Slide 65: benzophenones absorb full UVB and considerable UVA: oxybenzone (BP-3), sulisobenzone (BP-4), dioxybenzone (BP-8). With log P about 4 they are highly absorbed through skin, a drawback (T@43589–43900).',
 cite:HQ_S4+' slides 65–66; T@43589–43958'},

{id:'S4H-030', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-ester-sunscreen-fate',
 tags:['hard'], source:'both',
 stem:'What happens to ester sunscreens that reach the systemic circulation?',
 options:[
  {t:'They hydrolyze to inactive acids that are eliminated in urine', correct:true, why:'Slide 65 ADMET: esters hydrolyze to inactive acids eliminated in urine; "this one is an ester ... you get hydrolyzed" (T@44800–45160).'},
  {t:'They hydrolyze to active acids that are eliminated in the bile', correct:false, why:'Slide 65: the acids are inactive and go out in urine.'},
  {t:'CYP3A4 oxidizes them to active metabolites', correct:false, why:'Slide 65 gives ester hydrolysis, not CYP oxidation.'},
  {t:'They stay unchanged because of their high molecular weight', correct:false, why:'High MW limits skin absorption of bemotrizinol (slide 66); it is not the fate of absorbed esters.'}],
 teach:'Slide 65: many sunscreens are esters; whatever is absorbed is hydrolyzed to inactive acids that leave in the urine. The salicylate esters hydrolyze to salicylic acid in the skin, which gives some analgesia (slide 64).',
 cite:HQ_S4+' slides 64–66; T@42280–42720, T@44800–45160'},

{id:'S4H-031', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-bemt-class-reason',
 tags:['hard','tell'], source:'both', dupOf:'S4-110',
 stem:'Which description of bemotrizinol is correct?',
 options:[
  {t:'A triazine absorbing UVB and UVA; high molecular weight limits skin absorption', correct:true, why:'Slide 66: methoxybenzene and triazines absorb UVB and UVA; photostable, lipophilic, little skin absorption because of the high MW (627.81); (T@45151–45500).'},
  {t:'A benzophenone absorbing UVB and UVA; high log P limits skin absorption', correct:false, why:'The benzophenones are highly absorbed (log P about 4; slide 65).'},
  {t:'A triazine absorbing UVB only; high molecular weight limits skin absorption', correct:false, why:'Slide 66: it absorbs UVB and UVA.'},
  {t:'A triazine absorbing UVB and UVA; rapid photodegradation limits skin absorption', correct:false, why:'Slide 66: it is photostable (about 4–8 h; T@45151–45300).'}],
 teach:'Slide 66: bemotrizinol (BEMT), a methoxybenzene triazine from Europe, absorbs UVB and UVA and is photostable and lipophilic; its high molecular weight (627.81) keeps skin absorption low.',
 cite:HQ_S4+' slides 65–66; T@45151–45700'},

{id:'S4H-032', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'h-uvb-filter-class-pairs',
 tags:['hard','tell'], source:'both',
 stem:'Which pairing of UVB filter family and example is correct?',
 options:[
  {t:'Benzimidazole: ensulizole', correct:true, why:'Slide 64: benzimidazoles, ensulizole, water soluble (T@42720–43400).'},
  {t:'Benzimidazole: octisalate', correct:false, why:'Octisalate is a salicylate (slide 64).'},
  {t:'Salicylate: padimate O', correct:false, why:'Padimate O is a PABA derivative (slide 63).'},
  {t:'Cinnamate: homosalate', correct:false, why:'Homosalate is a salicylate (slide 64).'}],
 teach:'UVB filters by family: cinnamates (octinoxate, cinoxate; slide 63), PABAs (PABA, padimate O; slide 63; rarely used because some people are allergic to PABA), salicylates (homosalate, octisalate; slide 64), benzimidazoles (ensulizole; water soluble, so reapply after swimming; slide 64).',
 cite:HQ_S4+' slides 63–64; T@41549–43400'}
);
