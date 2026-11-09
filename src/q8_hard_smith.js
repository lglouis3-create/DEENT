/* ==========================================================================
   Harder practice for Exam 2: Dr. Smith, Lectures 1–3 and her recorded
   sun-exposure lecture (added 2026-11-09).
   Louis, after Exam 1 (11/09): "Drill questions were not reflective of the
   exam, the questions were harder and need more fill in blanks"; what made it
   harder: finer slide details, two facts combined, closer answer choices. His
   decision: "Yes do 1-3 and you can publish only need my input if a problem
   comes up".
   These items use the same topics as q1_topics.js, q2_L02.js, q3_L03a.js and
   q6_L03c.js and carry tags:['hard']. Each one either asks a finer slide
   detail than the bank already asks, or combines a fact the bank already asks
   with a second one (drug + target + adverse effect; drug + class +
   counseling point; disease + figure), with distractors taken from the same
   class or the neighbouring number. Where an item could give away the key of
   an existing item on the same paper, it names that item in `dupOf`.
   Sources: the decks (PDF page = slide number), the lecture-only transcripts
   (T, line numbers: 10/29 for Pathophys and PCol 1–15, 10/30 for PCol 16–42,
   11/03 for PCol 43–76) and the sun-exposure recording (audio mm:ss).
   Kept out, as in the earlier files: the held conflicts in
   reviews/OPEN_QUESTIONS.md (no item keys one), the types of dermatitis and of
   psoriasis (Pathophys 9, 25), estrogen (Pathophys 36), oral corticosteroid
   adverse effects (PCol 13), the RAR/RXR selectivity table, retinoid
   structures, T-cell subtypes, the cAMP figure detail and brand names in
   stems or options.
   ========================================================================== */
const HQ_PP  = 'Lecture 1 (Skin-Pathophys-Students-2026.pdf)';
const HQ_PC1 = 'Lecture 1 (Skin-PCol-Students-2026.pdf)';
const HQ_PC2 = 'Lecture 2 (Skin-PCol-Students-2026.pdf)';
const HQ_PC3 = 'Lecture 3 (Skin-PCol-Students-2026.pdf)';
const HQ_SUN = 'Sun exposure lecture (DEENT_Sun_Exposure_2026.pdf)';

QUESTIONS.push(
/* ======================= Pathophysiology deck (10/29) ===================== */
{id:'L1H-001', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'h-ad-risk-one-vs-both',
 tags:['hard','numbers'], source:'both', dupOf:'L1-013',
 stem:'How does the risk of atopic dermatitis in a child with one atopic parent compare with that in a child whose parents are both atopic?',
 options:[
  {t:'Two- to threefold; three- to fivefold', correct:true, why:'Slide 10: two- to threefold higher with one atopic parent, three- to fivefold if both are atopic; (T 127–129).'},
  {t:'Three- to fivefold; five- to sevenfold', correct:false, why:'Three- to fivefold is the figure for two atopic parents (slide 10); no five- to sevenfold figure is given.'},
  {t:'Twofold; 81% likelihood', correct:false, why:'81% is the chance of acne when both parents had acne (slide 35), not an AD figure.'},
  {t:'Two- to threefold; sevenfold', correct:false, why:'Sevenfold is the speed-up of the psoriatic keratinocyte cycle (slide 23), not an AD risk.'}],
 teach:'The inheritance pattern of AD (slide 10): risk two- to threefold higher with one atopic parent, three- to fivefold higher if both parents are atopic. AD goes with asthma and rhinitis, the other atopic conditions.',
 cite:HQ_PP+' slides 10, 23, 35; T 125–130'},

{id:'L1H-002', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'h-th2-cytokines-released', multi:true,
 tags:['hard','list'], source:'slide',
 stem:'In atopic dermatitis, increased TH2 activity releases which cytokines? Select all that apply.',
 options:[
  {t:'IL-4', correct:true, why:'Slide 16: TH2 activity releases IL-3, IL-4, IL-5, IL-10 and IL-13.'},
  {t:'IL-5', correct:true, why:'Slide 16: IL-5 is among the TH2 cytokines that raise IgE production.'},
  {t:'IL-13', correct:true, why:'Slide 16: IL-13 is among the TH2 cytokines that raise IgE production.'},
  {t:'IL-10', correct:true, why:'Slide 16: IL-10 is in the list of cytokines released with increased TH2 activity.'},
  {t:'IL-12', correct:false, why:'Slide 16: IL-12, with interferon-gamma, comes from TH1 cells and suppresses IgE production.'},
  {t:'Interferon-gamma', correct:false, why:'Slide 16: a TH1 cytokine that suppresses IgE production.'}],
 teach:'Slide 16: TH1 cells make interferon-gamma and IL-12, which suppress IgE; TH2 cells make cytokines that raise IgE. AD patients have more TH2 than TH1 cells, and the TH2 cytokines IL-3, IL-4, IL-5, IL-10 and IL-13 bring blood eosinophilia, more total serum IgE and more mast cell growth. Some AD drugs antagonize these cytokines (dupilumab, IL-4 and IL-13; PCol slide 64).',
 cite:HQ_PP+' slide 16'},

{id:'L1H-003', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'h-flg-variant-course',
 tags:['hard'], source:'both',
 stem:'Compared with other atopic dermatitis patients, how does the disease run in patients who carry FLG variants?',
 options:[
  {t:'More persistent, more prone to multiple allergies', correct:true, why:'Slide 15; (T 222–223) "more persistent disease and a greater risk for having multiple triggers".'},
  {t:'Milder, and usually gone by adulthood', correct:false, why:'Slide 15 says the opposite: more persistent disease.'},
  {t:'More persistent, with a shift from TH2 toward TH1 cells', correct:false, why:'AD shows more TH2 than TH1 cells (slide 16); FLG variants act on the barrier, not the T-helper balance.'},
  {t:'Shorter flares, with less IgE production', correct:false, why:'Not on slide 15; FLG variants bring more persistent disease and more allergies.'}],
 teach:'FLG encodes profilaggrin; variants give reduced or no profilaggrin, so the skin barrier lets allergens in. Patients with FLG variants have more persistent disease and a greater risk of multiple allergies (slide 15; she said "multiple triggers", T 223). About 40% of people lacking FLG do not develop AD, so more genes are involved.',
 cite:HQ_PP+' slide 15; T 218–226'},

{id:'L1H-004', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'h-flg-chain',
 tags:['hard','reasoning'], source:'both', dupOf:'L1-026',
 stem:'Which sequence, from gene to product, describes the filaggrin pathway in normal skin?',
 options:[
  {t:'FLG makes profilaggrin; it degrades to filaggrins; their breakdown products moisturize', correct:true, why:'Slide 15: FLG encodes profilaggrin, which degrades to filaggrins; filaggrin breakdown products are natural moisturizers (T 212).'},
  {t:'FLG makes filaggrin; it condenses to profilaggrin; its breakdown products moisturize', correct:false, why:'Reversed: profilaggrin is the precursor and degrades to filaggrins (slide 15).'},
  {t:'FLG makes profilaggrin; it degrades to filaggrins; their breakdown products are free fatty acids', correct:false, why:'Free fatty acids come from sebum glycerides broken down by P. acnes lipase in acne (slide 33).'},
  {t:'FLG makes profilaggrin; it degrades to keratin; its breakdown products seal the follicle', correct:false, why:'Slide 15 names filaggrins as the products of profilaggrin, with a role in epidermal differentiation and the skin barrier.'}],
 teach:'Slide 15: filaggrins help the epidermis differentiate and form the barrier, and their breakdown products are natural moisturizers. With too little profilaggrin, keratinocytes do not lie down flat, and the barrier lets allergens in (T 218–222).',
 cite:HQ_PP+' slides 15, 33; T 205–222'},

{id:'L1H-005', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'h-ad-patho-features', multi:true,
 tags:['hard','list'], source:'slide',
 stem:'Which are features of the pathophysiology of atopic dermatitis? Select all that apply.',
 options:[
  {t:'Skin barrier dysfunction', correct:true, why:'Slide 13, the first listed feature.'},
  {t:'Immune deviation toward TH2', correct:true, why:'Slide 13; slide 16: AD patients have more TH2 than TH1 cells.'},
  {t:'A subsequent increase in IgE', correct:true, why:'Slide 13: "subsequent increased IgE".'},
  {t:'Colonization with pathologic organisms', correct:true, why:'Slide 13: the disease is complicated by colonization with pathologic organisms.'},
  {t:'Immune deviation toward TH1', correct:false, why:'The deviation is toward TH2 (slides 13, 16).'},
  {t:'Hyperproliferation with incomplete differentiation', correct:false, why:'That is the keratinocyte problem in psoriasis (slide 19).'}],
 teach:'Slide 13: the first trigger of AD inflammation is unknown; the features are skin barrier dysfunction, immune deviation toward TH2 and then increased IgE, complicated by colonization with pathologic organisms.',
 cite:HQ_PP+' slides 13, 16, 19'},

{id:'L1H-006', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'path', concept:'h-pso-cycle-fold',
 tags:['hard','numbers'], source:'both', dupOf:'L1-034',
 stem:'In normal epidermis, how long do keratinocytes take to divide and to mature, and how much faster is the cycle in psoriasis?',
 options:[
  {t:'13 days and 26 days; about 7-fold faster', correct:true, why:'Slide 23: normal 13 days to divide and 26 days to mature; psoriatic 1.5 and 4 days, "increase of 7-fold" (T 349–350).'},
  {t:'26 days and 13 days; about 7-fold faster', correct:false, why:'Reversed: 13 days to divide, 26 days to mature and shed (slide 23).'},
  {t:'13 days and 26 days; about 3-fold faster', correct:false, why:'Slide 23 gives a 7-fold increase.'},
  {t:'1.5 days and 4 days; about 7-fold faster', correct:false, why:'1.5 and 4 days are the psoriatic times (slide 23), not the normal ones.'}],
 teach:'Slide 23: normal keratinocytes take 13 days to divide and 26 days to mature, migrate to the stratum corneum and shed; in psoriasis 1.5 days to divide and 4 days to mature and shed, a 7-fold increase. T cells drive the hyperproliferation, and maturation is altered.',
 cite:HQ_PP+' slide 23; T 347–352'},

{id:'L1H-007', skill:'epi', prof:'Smith', tier:'new', topic:'cmp', sub:'diff', concept:'h-epi-figures-pso-acne',
 tags:['hard','numbers','tell'], source:'both',
 stem:'Which pairing of disease and epidemiologic figure is correct?',
 options:[
  {t:'Psoriasis: about 3% of the US; acne: lifetime prevalence near 90%', correct:true, why:'Pathophys slide 20 (about 3% of the US population) and slide 31 (lifetime prevalence approaches 90%); (T 412–413).'},
  {t:'Psoriasis: about 30% of the US; acne: lifetime prevalence near 90%', correct:false, why:'30% is the share of psoriasis patients with a first-degree relative who has it (slide 20; T 310).'},
  {t:'Psoriasis: about 3% of the US; acne: lifetime prevalence near 81%', correct:false, why:'81% is the likelihood of acne when both parents had acne (slide 35; T 488–489).'},
  {t:'Psoriasis: 2–10% of adults; acne: about 12% of adults', correct:false, why:'2–10% of adults is the AD figure (slide 10); 12% is acne in women aged 25–58 (slide 31).'}],
 teach:'Figures that look alike: AD 15–30% of children and 2–10% of adults (slide 10); psoriasis about 3% of the US, with 30% of patients having an affected first-degree relative (slide 20); acne lifetime prevalence near 90%, 12% of women and 3% of men aged 25–58, and 81% if both parents had acne (slides 31, 35).',
 cite:HQ_PP+' slides 10, 20, 31, 35; T 304–310, 412–419, 488–489'},

{id:'L1H-008', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'h-koebner-causes', multi:true,
 tags:['hard','list'], source:'slide',
 stem:'Which are traumatic causes of the Koebner response in psoriasis? Select all that apply.',
 options:[
  {t:'Friction', correct:true, why:'Slide 24: friction, venipuncture, bites, surgery or pressure.'},
  {t:'Venipuncture', correct:true, why:'A Koebner trauma (slide 24).'},
  {t:'Surgery', correct:true, why:'A Koebner trauma (slide 24).'},
  {t:'Bites', correct:true, why:'Slide 24; slide 21 also gives a bug bite as a possible first trigger.'},
  {t:'Long, hot showers', correct:false, why:'An exacerbating factor of atopic dermatitis (slide 12), not a Koebner trauma.'},
  {t:'Lithium therapy', correct:false, why:'Lithium is a medication that contributes to psoriasis (slide 24), not a trauma that causes Koebner lesions.'}],
 teach:'Slide 24: in the Koebner response, lesions begin at previously clear skin as a result of trauma such as friction, venipuncture, bites, surgery or pressure. The other contributing factors are climate, stress, infections and medications, most commonly lithium and beta blockers.',
 cite:HQ_PP+' slides 12, 21, 24; T 361–369'},

{id:'L1H-009', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'h-psa-features', multi:true,
 tags:['hard','list','tell'], source:'slide', dupOf:'L1-037',
 stem:'Which features fit psoriatic arthritis? Select all that apply.',
 options:[
  {t:'Asymmetric involvement of hands, feet and knees', correct:true, why:'A feature of psoriatic arthritis (slide 26).'},
  {t:'Skin lesions usually come before joint involvement', correct:true, why:'A feature of psoriatic arthritis (slide 26).'},
  {t:'No raised rheumatoid factor or autoantibodies', correct:true, why:'Slide 26: it lacks the elevated rheumatoid factor and autoantibodies seen in rheumatoid arthritis.'},
  {t:'Symmetric involvement of the small joints', correct:false, why:'Slide 26: the involvement is asymmetric.'},
  {t:'Pitting and onycholysis of the joint capsule', correct:false, why:'Pitting, ridging, discoloration and onycholysis are the nail findings of nail psoriasis (slide 26), not joint features.'}],
 teach:'Slide 26, two additional forms: nail psoriasis (pitting, ridging, discoloration, onycholysis) and psoriatic arthritis (asymmetric hands, feet and knees; skin lesions usually first; no rheumatoid factor or autoantibodies).',
 cite:HQ_PP+' slide 26'},

{id:'L1H-010', skill:'adverse', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'h-lithium-both',
 tags:['hard','tell'], source:'both',
 stem:'Which drug is a contributing factor in psoriasis and also a cause of drug-induced acne?',
 options:[
  {t:'Lithium', correct:true, why:'Pathophys slide 24 (with beta blockers, the most common drugs that worsen psoriasis; T 369) and slide 35 (acne medicamentosa).'},
  {t:'Beta blockers', correct:false, why:'They worsen psoriasis (slide 24) but are not among the acne-inducing drugs on slide 35.'},
  {t:'Phenytoin', correct:false, why:'It induces acne (slide 35) but is not a psoriasis trigger on slide 24.'},
  {t:'Isoniazid', correct:false, why:'It induces acne (slide 35) but is not a psoriasis trigger on slide 24.'}],
 teach:'Slide 24: the medications that most commonly contribute to psoriasis are lithium and beta blockers. Slide 35, acne medicamentosa: phenytoin, isoniazid, moisturizers, phenobarbital, lithium, steroids, azathioprine, quinine and rifampin. Lithium is on both lists.',
 cite:HQ_PP+' slides 24, 35; T 368–369, 486–488'},

{id:'L1H-011', skill:'adverse', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'h-acne-medicamentosa', multi:true,
 tags:['hard','list'], source:'slide',
 stem:'Which drugs can induce acne (acne medicamentosa)? Select all that apply.',
 options:[
  {t:'Phenytoin', correct:true, why:'An acne-inducing drug (slide 35).'},
  {t:'Isoniazid', correct:true, why:'An acne-inducing drug (slide 35).'},
  {t:'Rifampin', correct:true, why:'An acne-inducing drug (slide 35).'},
  {t:'Azathioprine', correct:true, why:'An acne-inducing drug (slide 35).'},
  {t:'Beta blockers', correct:false, why:'They contribute to psoriasis (slide 24), not to acne on slide 35.'},
  {t:'Doxycycline', correct:false, why:'A tetracycline used to treat acne (PCol slide 43), not a cause of it.'}],
 teach:'Slide 35, acne medicamentosa: phenytoin, isoniazid, moisturizers, phenobarbital, lithium, steroids, azathioprine, quinine and rifampin. Lithium also contributes to psoriasis (slide 24).',
 cite:HQ_PP+' slides 24, 35; T 486–488; Skin-PCol-Students-2026.pdf slide 43'},

{id:'L1H-012', skill:'tell', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'h-occupational-acne',
 tags:['hard','tell'], source:'both',
 stem:'A short-order cook has acne that worsens with the vaporized cooking oil in the kitchen air. Which type of acne is this?',
 options:[
  {t:'Occupational acne', correct:true, why:'Slide 35: occupational acne comes from excessive dirt, vaporized cooking oil or some industrial chemicals; (T 479–482).'},
  {t:'Acne cosmetica', correct:false, why:'Slide 35: a mild acne from comedogenic oils in cosmetics put on the skin.'},
  {t:'Acne mechanica', correct:false, why:'Slide 35: from anything that occludes or irritates the skin, such as a helmet.'},
  {t:'Acne medicamentosa', correct:false, why:'Slide 35: acne induced by drugs such as phenytoin or lithium.'}],
 teach:'Slide 35 separates the acne types by cause: mechanica (occlusion or irritation), occupational (dirt, vaporized cooking oil, industrial chemicals), cosmetica (comedogenic oils in cosmetics) and medicamentosa (drugs).',
 cite:HQ_PP+' slide 35; T 474–488'},

{id:'L1H-013', skill:'epi', prof:'Smith', tier:'new', topic:'acne', sub:'clin', concept:'h-acne-sex-severity',
 tags:['hard','tell'], source:'both', dupOf:'L1-041',
 stem:'In which group is acne often more severe, during puberty and during adulthood?',
 options:[
  {t:'Puberty: boys; adulthood: women', correct:true, why:'Slide 31: in puberty often more severe in boys; women often have more severe forms in adulthood than men (T 419–421).'},
  {t:'Puberty: girls; adulthood: men', correct:false, why:'The two halves are reversed (slide 31).'},
  {t:'Puberty: boys; adulthood: men', correct:false, why:'In adulthood women often have the more severe forms (slide 31).'},
  {t:'Puberty: girls; adulthood: women', correct:false, why:'In puberty it is often more severe in boys (slide 31).'}],
 teach:'Slide 31: acne is triggered by the start of androgen production, with onset during puberty and symptoms into the mid-twenties for most. It is often more severe in boys during puberty; in adulthood 12% of women and 3% of men aged 25–58 have it, and women often have the more severe forms, with premenstrual flares until menopause.',
 cite:HQ_PP+' slide 31; T 412–421'},

{id:'L1H-014', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'path', concept:'h-lipase-substrate',
 tags:['hard'], source:'slide', dupOf:'L1-043',
 stem:'Propionibacterium acnes lipase acts on which sebum component, and what does it make?',
 options:[
  {t:'Glycerides; free fatty acids', correct:true, why:'Slide 33: P. acnes lipase breaks down glyceride from sebum into free fatty acids, which irritate the follicular walls.'},
  {t:'Wax esters; cholesterol', correct:false, why:'Wax esters and cholesterol are sebum components (slide 6); slide 33 names glycerides as the lipase substrate.'},
  {t:'Free fatty acids; glycerides', correct:false, why:'Reversed: the free fatty acids are the product (slide 33).'},
  {t:'Cholesterol; free fatty acids', correct:false, why:'Slide 33 names glyceride as the substrate.'}],
 teach:'Sebum is glycerides, wax esters and cholesterol (slide 6). In the plugged follicle, P. acnes lipase turns the glycerides into free fatty acids that irritate the follicular walls and have an antigenic effect (slide 33).',
 cite:HQ_PP+' slides 6, 33'},

{id:'L1H-015', skill:'tell', prof:'Smith', tier:'new', topic:'cmp', sub:'diff', concept:'h-ad-vs-pso-cytokines',
 tags:['hard','tell'], source:'slide',
 stem:'Which pairing of disease and the cytokines that drive it is correct?',
 options:[
  {t:'Atopic dermatitis: IL-4 and IL-13; psoriasis: IL-23 and IL-17', correct:true, why:'Pathophys slide 16 (TH2 cytokines including IL-4 and IL-13 in AD) and slides 21–22 (TNF-alpha, IL-23 and IL-17 in psoriasis).'},
  {t:'Atopic dermatitis: IL-23 and IL-17; psoriasis: IL-4 and IL-13', correct:false, why:'Reversed (slides 16, 21–22).'},
  {t:'Atopic dermatitis: IL-12 and interferon-gamma; psoriasis: IL-17', correct:false, why:'IL-12 and interferon-gamma are TH1 cytokines that suppress IgE (slide 16); AD leans toward TH2.'},
  {t:'Atopic dermatitis: IL-4 and IL-13; psoriasis: IL-5 and IL-10', correct:false, why:'IL-5 and IL-10 are TH2 cytokines of AD (slide 16), not the psoriasis cytokines of slides 21–22.'}],
 teach:'AD: more TH2 than TH1 cells, releasing IL-3, IL-4, IL-5, IL-10 and IL-13 (slide 16); dupilumab blocks IL-4 and IL-13 signaling (PCol 64). Psoriasis: APCs, T cells and keratinocytes release TNF-alpha, IL-23 and IL-17 (slides 21–22); ustekinumab, the IL-23 inhibitors and the IL-17 inhibitors target them (PCol 66–69).',
 cite:HQ_PP+' slides 16, 21–22; Skin-PCol-Students-2026.pdf slides 64, 66–69'},

{id:'L1H-016', skill:'class', prof:'Smith', tier:'new', topic:'ad', sub:'drugs', concept:'h-classes-ad-and-pso', multi:true,
 tags:['hard','list','tell'], source:'slide',
 stem:'Which drug classes are used for both atopic dermatitis and psoriasis, but not for acne? Select all that apply.',
 options:[
  {t:'Corticosteroids', correct:true, why:'Slides 17 and 28 (AD and psoriasis); not among the acne classes on slide 37.'},
  {t:'Calcineurin inhibitors', correct:true, why:'Slides 17 and 28; not on slide 37.'},
  {t:'JAK inhibitors', correct:true, why:'Slides 17 and 28; not on slide 37.'},
  {t:'Keratolytics', correct:false, why:'An acne class (slide 37), not on slides 17 or 28.'},
  {t:'IL-17A inhibitors', correct:false, why:'A psoriasis class only (slide 28).'},
  {t:'Antiandrogens', correct:false, why:'An acne class only (slide 37).'}],
 teach:'Slide 17 (AD): corticosteroids, calcineurin inhibitors, PDE-4 inhibitor, IL-4Rα/IL-13 receptor antagonists, JAK inhibitor. Slide 28 (psoriasis) adds DNA synthesis inhibitors, the DHFR inhibitor, T-cell inhibitors, TNF-α, IL-23 and IL-17A inhibitors, nuclear receptor binders, psoralens and cytotoxic agents. Slide 37 (acne): keratolytics, antibiotics, nuclear receptor binders, antiandrogens.',
 cite:HQ_PP+' slides 17, 28, 37'},

/* ================== Pharmacology deck slides 5-15 (10/29) ================= */
{id:'L1H-017', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'h-nrb-indirect-count',
 tags:['hard','reasoning'], source:'both', dupOf:'L1-073',
 stem:'A glucocorticoid–receptor complex lowers inflammatory protein synthesis by binding NF-κB so that it cannot reach the DNA. Which mechanism is this, and how many drug–receptor complexes does it need?',
 options:[
  {t:'Indirect; one complex', correct:true, why:'PCol slide 5: in the indirect action one drug–receptor complex binds a transcription factor (NF-κB or AP-1, slide 7) and keeps it off the DNA.'},
  {t:'Direct; two complexes', correct:false, why:'The direct action needs two complexes bound to a response element on DNA (slide 5); here the complex binds a transcription factor.'},
  {t:'Indirect; two complexes', correct:false, why:'Slide 5: the indirect mechanism requires only one complex.'},
  {t:'Direct; one complex', correct:false, why:'Binding a transcription factor is the indirect action, and the direct one needs two complexes (slide 5).'}],
 teach:'Slide 5: nuclear receptors change protein synthesis directly (two drug–receptor complexes bind a response element such as the GRE) or indirectly (one complex binds a transcription factor such as NF-κB or AP-1 and keeps it from binding DNA). Slide 6 draws both.',
 cite:HQ_PC1+' slides 5–7; T 650–683'},

{id:'L1H-018', skill:'counsel', prof:'Smith', tier:'new', topic:'cs', sub:'top', concept:'h-cs-examples-site',
 tags:['hard','counseling'], source:'both', dupOf:'L1-084',
 stem:'Which pairing of topical corticosteroid example and site of use is correct?',
 options:[
  {t:'Hydrocortisone 1% on the face; betamethasone valerate 0.1% on the body', correct:true, why:'PCol slide 11: low potency (hydrocortisone 1%) for the face, medium potency (betamethasone valerate 0.1%) for the body; (T 818–821).'},
  {t:'Betamethasone valerate 0.1% on the face; hydrocortisone 1% on the body', correct:false, why:'Reversed: nothing more potent than low potency goes on the face (T 818–819).'},
  {t:'Hydrocortisone 0.1% on the face; betamethasone valerate 1% on the body', correct:false, why:'The strengths are swapped: hydrocortisone 1% and betamethasone valerate 0.1% (slide 11).'},
  {t:'Hydrocortisone 1% on the face; clobetasol propionate 0.05% on the body', correct:false, why:'Clobetasol propionate is Dr. Sikazwe\'s super-potent example (DPAW slide 25); her medium-potency body example is betamethasone valerate 0.1%.'}],
 teach:'Slide 11: match potency to severity and site. Low potency (hydrocortisone 1%) for the face and for long-duration maintenance; medium potency (betamethasone valerate 0.1%) for the body; mid and high potency for short-term management of exacerbations.',
 cite:HQ_PC1+' slide 11; T 815–823'},

{id:'L1H-019', skill:'counsel', prof:'Smith', tier:'new', topic:'cs', sub:'top', concept:'h-cs-flare-then-maint',
 tags:['hard','counseling'], source:'both', dupOf:'L1-085',
 stem:'A patient with psoriasis is treated for a flare and then needs long-term control. Which potency plan fits?',
 options:[
  {t:'Mid or high potency short term, then low potency for maintenance', correct:true, why:'Slide 11: mid-strength and high potency for short-term management of exacerbations; low potency for long-duration maintenance (T 821–823).'},
  {t:'Low potency for the short term, then high potency for maintenance', correct:false, why:'The two halves are reversed (slide 11).'},
  {t:'High potency for the flare and for maintenance', correct:false, why:'Slide 11: only low potency is used for long-duration maintenance.'},
  {t:'Medium potency throughout, under occlusion', correct:false, why:'Occlusion changes absorption (slide 11) and too much can reach the circulation; maintenance is low potency.'}],
 teach:'Slide 11: low-potency products are the ones for long-duration maintenance; mid and high potency are for short-term management of exacerbations. The reason is the adverse effects on slide 12, which grow with potency and duration.',
 cite:HQ_PC1+' slides 11–12; T 821–826'},

{id:'L1H-020', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'h-cs-systemic-ae', multi:true,
 tags:['hard','list','tell'], source:'both',
 stem:'Which are systemic adverse effects of topical corticosteroids? Select all that apply.',
 options:[
  {t:'Hypothalamic-pituitary-adrenal axis suppression', correct:true, why:'A systemic adverse effect (slide 12; T 850–852).'},
  {t:'Hyperglycemia', correct:true, why:'A systemic adverse effect (slide 12; T 855–856).'},
  {t:'Glaucoma', correct:true, why:'A systemic adverse effect (slide 12; T 856).'},
  {t:'Growth retardation in children', correct:true, why:'A systemic adverse effect (slide 12; T 857).'},
  {t:'Perioral dermatitis', correct:false, why:'A local adverse effect (slide 12).'},
  {t:'Focal hypertrichosis', correct:false, why:'A local adverse effect (slide 12).'}],
 teach:'Slide 12: local effects are striae and atrophy, perioral dermatitis, acne, rosacea, telangiectasias, purpura, focal hypertrichosis and allergic contact dermatitis (often the vehicle). Systemic effects (HPA axis suppression, infections, hyperglycemia, cataracts, glaucoma, growth retardation in children) depend on potency, site, occlusion, body surface area and duration, and can occur with low-potency products.',
 cite:HQ_PC1+' slide 12; T 846–862'},

{id:'L1H-021', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'h-cs-systemic-factors', multi:true,
 tags:['hard','list'], source:'both', dupOf:'L1-088',
 stem:'The risk of systemic adverse effects from a topical corticosteroid depends on which factors? Select all that apply.',
 options:[
  {t:'Potency', correct:true, why:'A factor in the systemic risk (slide 12; T 848).'},
  {t:'Occlusiveness of the preparation', correct:true, why:'A factor in the systemic risk (slide 12).'},
  {t:'Percentage of body surface area covered', correct:true, why:'A factor in the systemic risk (slide 12; T 849).'},
  {t:'Duration of use', correct:true, why:'A factor in the systemic risk (slide 12; T 849–850).'},
  {t:'The patient\'s sex', correct:false, why:'Not among the factors on slide 12.'},
  {t:'Time of day it is applied', correct:false, why:'Not among the factors on slide 12.'}],
 teach:'Slide 12: systemic effects relate to potency, site of application, occlusiveness, percentage of body surface area covered and duration of use, and can occur even with low-potency products (T 859–862).',
 cite:HQ_PC1+' slide 12; T 846–862'},

{id:'L1H-022', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'h-cs-acd-vehicle',
 tags:['hard'], source:'both',
 stem:'A patient develops allergic contact dermatitis from a topical corticosteroid product. What is the reaction often related to?',
 options:[
  {t:'The vehicle of the product', correct:true, why:'Slide 12: allergic contact dermatitis, often related to the vehicle; (T 844).'},
  {t:'The potency of the steroid', correct:false, why:'Potency drives the systemic effects (slide 12), not the allergic contact dermatitis.'},
  {t:'The percentage of body surface area', correct:false, why:'A factor for systemic effects (slide 12).'},
  {t:'HPA axis suppression', correct:false, why:'A systemic effect (slide 12), not a cause of contact dermatitis.'}],
 teach:'Slide 11 also notes that changing the vehicle can alter absorption and effectiveness; slide 12 lists allergic contact dermatitis, often related to the vehicle, among the local adverse effects.',
 cite:HQ_PC1+' slides 11–12; T 828, 844'},

{id:'L1H-023', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'h-rar-rxr-heterodimer-rare',
 tags:['hard','target'], source:'slide',
 stem:'When a retinoid binds its receptors, which complex forms and where on DNA does it bind?',
 options:[
  {t:'An RAR–RXR heterodimer, on the retinoic acid response element', correct:true, why:'PCol slide 14: bound RARs and RXRs form RAR-RXR heterodimers that move into the nucleus and bind the RARE.'},
  {t:'An RAR–RAR homodimer, on the retinoic acid response element', correct:false, why:'Slide 14: the retinoid-bound receptors form heterodimers (RAR-RXR).'},
  {t:'An RAR–RXR heterodimer, on the glucocorticoid response element', correct:false, why:'The GRE is the glucocorticoid receptor\'s site (slide 7).'},
  {t:'An RAR–glucocorticoid receptor dimer, on the RARE', correct:false, why:'Slide 14 pairs RAR with RXR.'}],
 teach:'Slide 14: retinoids have vitamin A-like activity and bind two receptor families, RARs and RXRs; bound, they form RAR-RXR heterodimers that bind the RARE and change transcription. Retinoids that target RARs act on differentiation and proliferation (acne, psoriasis, photoaging); those that target RXRs mainly induce apoptosis.',
 cite:HQ_PC1+' slides 7, 14'},

{id:'L1H-024', skill:'tell', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'h-rxr-kaposi',
 tags:['hard','tell'], source:'both', dupOf:'L1-091',
 stem:'Which pairing of retinoid receptor target, main effect and use is correct?',
 options:[
  {t:'RXR: apoptosis; cancers such as Kaposi sarcoma', correct:true, why:'Slide 14: retinoids that target RXRs predominantly induce apoptosis and are used in cancers like Kaposi sarcoma; (T 893–900).'},
  {t:'RAR: apoptosis; cancers such as Kaposi sarcoma', correct:false, why:'RAR-targeting retinoids act on differentiation and proliferation (slide 14).'},
  {t:'RXR: differentiation; acne and photoaging', correct:false, why:'Acne and photoaging go with RAR targeting (slide 14).'},
  {t:'RAR: apoptosis; acne and psoriasis', correct:false, why:'Acne and psoriasis are treated through RAR effects on differentiation and proliferation (slide 14).'}],
 teach:'Slide 14: RAR-targeting retinoids mainly affect differentiation and proliferation and treat acne, psoriasis and photoaging; RXR-targeting retinoids mainly induce apoptosis and are used in cancers such as Kaposi sarcoma.',
 cite:HQ_PC1+' slide 14; T 880–904'},

/* ================== Pharmacology deck slides 16-42 (10/30) ================ */
{id:'L2H-001', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'h-ret-timeline',
 tags:['hard','counseling','numbers'], source:'both', dupOf:'L2-002',
 stem:'A patient starting topical tretinoin for acne asks when the acne may look worse and when the best result can be expected. Which answer fits?',
 options:[
  {t:'More comedones in the first 4–6 weeks; best results in 8–12 weeks', correct:true, why:'Both figures (slides 16–17; T 20–30).'},
  {t:'More comedones in the first 8–12 weeks; best results in 4–6 weeks', correct:false, why:'The two halves are reversed (slides 16–17).'},
  {t:'More comedones in the first 2 weeks; best results in 4–6 weeks', correct:false, why:'Slides 16–17: the flare runs through the first 4–6 weeks and the optimal improvement comes at 8–12 weeks.'},
  {t:'More comedones in the first 4–6 weeks; best results in 6 months', correct:false, why:'Slides 16–17 give 8–12 weeks for optimal improvement.'}],
 teach:'Slides 16–17: more comedones may appear in the first 4–6 weeks as peeling brings them to the surface, then the skin improves, with optimal improvement in 8–12 weeks (T 20–30).',
 cite:HQ_PC2+' slides 16–17; T 20–30'},

{id:'L2H-002', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'h-tretinoin-identity',
 tags:['hard','tell'], source:'both',
 stem:'Which description fits topical tretinoin?',
 options:[
  {t:'All-trans retinoic acid; under 10% absorbed systemically', correct:true, why:'Slide 17: the acid form of vitamin A, all-trans retinoic acid (ATRA), with less than 10% absorption; (T 61).'},
  {t:'13-cis retinoic acid; under 10% absorbed systemically', correct:false, why:'13-cis retinoic acid is isotretinoin (DPAW slide 49), the oral retinoid.'},
  {t:'All-trans retinoic acid; about half absorbed systemically', correct:false, why:'Slide 17: less than 10% is absorbed.'},
  {t:'Sun stable; may be combined with benzoyl peroxide', correct:false, why:'That describes adapalene (slide 18).'}],
 teach:'Slide 17: tretinoin is ATRA, under 10% absorbed, with the same 4–6 week flare and 8–12 week optimum; Retin-A Micro is a timed-release microsphere form that may be less irritating. Slide 18: adapalene is sun stable and can be combined with benzoyl peroxide.',
 cite:HQ_PC2+' slides 17–18; T 58–64'},

{id:'L2H-003', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'h-retinoid-pregnancy-rules',
 tags:['hard','tell','counseling'], source:'both',
 stem:'Which pairing of retinoid and its pregnancy precaution is correct?',
 options:[
  {t:'Tazarotene: contraceptive counseling first; not used in pregnancy', correct:true, why:'Slide 18: women of childbearing age use it only after contraceptive counseling, and pregnant women should not use it; (T 78–81).'},
  {t:'Tazarotene: iPLEDGE registration and follow-up before the first dose', correct:false, why:'iPLEDGE is the program for isotretinoin (slide 19).'},
  {t:'Isotretinoin: avoid pregnancy for 3 years after stopping', correct:false, why:'The 3-year wait is for acitretin (slide 20); isotretinoin uses iPLEDGE (slide 19).'},
  {t:'Acitretin: avoid pregnancy for 2 months after stopping', correct:false, why:'Two months is the ethanol rule; pregnancy is avoided for at least 3 years (slide 20).'}],
 teach:'Slides 18–20: tazarotene, contraceptive counseling first and not in pregnancy; isotretinoin, iPLEDGE registration and follow-up (men too, T 130–132); acitretin, no pregnancy during treatment or for at least 3 years after, the Do Your P.A.R.T. program, no ethanol for 2 months and no blood donation for 3 years after.',
 cite:HQ_PC2+' slides 18–20; T 78–81, 98–116'},

{id:'L2H-004', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'h-acitretin-wine-blood',
 tags:['hard','counseling','numbers'], source:'both', dupOf:'L2-035',
 stem:'A patient stopped acitretin one month ago. She asks whether she may drink wine at a party now and whether she may donate blood two years from now. What applies?',
 options:[
  {t:'Neither is allowed yet', correct:true, why:'Slide 20: no ethanol for 2 months after stopping and no blood donation for 3 years after; (T 109–116).'},
  {t:'Both are allowed', correct:false, why:'One month is inside the 2-month ethanol window, and two years is inside the 3-year donation window (slide 20).'},
  {t:'Wine yes; blood donation no', correct:false, why:'Ethanol must be avoided for 2 months after stopping (slide 20).'},
  {t:'Wine no; blood donation yes', correct:false, why:'Blood donation waits 3 years after stopping (slide 20).'}],
 teach:'Slide 20 gives acitretin three numbers: ethanol avoided during and for 2 months after therapy; no blood donation during and for 3 years after; no pregnancy for at least 3 years after. The long waits follow its half-life of months (T 107–116).',
 cite:HQ_PC2+' slide 20; T 107–116'},

{id:'L2H-005', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'h-iso-less-common-reversible',
 tags:['hard'], source:'slide', dupOf:'L2-027',
 stem:'A patient on oral isotretinoin develops headache and corneal opacities. What is expected of these less common side effects?',
 options:[
  {t:'They are reversible when the drug is stopped', correct:true, why:'Slide 19: the less common side effects are reversible with drug discontinuation.'},
  {t:'They persist for 3 years after stopping', correct:false, why:'Three years is the acitretin blood-donation and pregnancy wait (slide 20).'},
  {t:'They resolve within days of stopping, like hypercalcemia', correct:false, why:'Resolution within days is said of calcipotriene hypercalcemia (slide 22).'},
  {t:'They are expected and need no change in therapy', correct:false, why:'She said patients probably need to stop the drug if these occur (T 94–96).'}],
 teach:'Slide 19: common effects of isotretinoin are dryness and itching of skin and mucous membranes and lipid changes; less common ones (headache, corneal opacities, pseudotumor cerebri, IBD, anorexia, alopecia, muscle and joint pain) are reversible when it is stopped. Skeletal hyperostosis is possible in children.',
 cite:HQ_PC2+' slides 19–22; T 93–98'},

{id:'L2H-006', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'h-calcipotriene-vdr-rxr',
 tags:['hard','target'], source:'both', dupOf:'L2-040',
 stem:'Through which receptor does calcipotriene act, and with which receptor does that drug–receptor complex pair?',
 options:[
  {t:'Vitamin D receptor; RXR-α', correct:true, why:'Slide 21: calcipotriene acts through the VDR, and the VDR–drug complex heterodimerizes with RXR-α; (T 135–138).'},
  {t:'Retinoic acid receptor; RXR-α', correct:false, why:'RAR is the retinoid receptor (slide 14); calcipotriene is a vitamin D analog.'},
  {t:'Vitamin D receptor; glucocorticoid receptor', correct:false, why:'Slide 21 names RXR-α as the partner.'},
  {t:'Glucocorticoid receptor; RXR-α', correct:false, why:'Calcipotriene acts through the VDR (slide 21).'}],
 teach:'Slide 21: the VDR–calcipotriene complex heterodimerizes with RXR-α and raises expression of genes that modulate epidermal differentiation and inflammation: it inhibits keratinocyte proliferation, promotes differentiation and decreases inflammatory cytokine release.',
 cite:HQ_PC2+' slides 14, 21; T 132–146'},

{id:'L2H-007', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'h-calcipotriene-150g',
 tags:['hard','numbers'], source:'both', dupOf:'L2-046',
 stem:'A patient has applied 150 g of calcipotriene a week for a month and now has a high serum calcium. Which statement applies?',
 options:[
  {t:'The 100 g/week limit was exceeded; it resolves within days of stopping', correct:true, why:'Slide 22: hypercalcemia and hypercalciuria may develop above the 100 g/week limit and resolve within days of discontinuation; (T 191–196).'},
  {t:'The 100 g/week limit was exceeded; it persists for about 3 years', correct:false, why:'Three years is the acitretin wait (slide 20); calcipotriene hypercalcemia resolves within days.'},
  {t:'The 50 g/week limit was exceeded; it resolves within a few days of stopping', correct:false, why:'Slide 22 gives 100 g a week.'},
  {t:'The dose is within limits; the calcium rise is from another cause', correct:false, why:'150 g a week exceeds the 100 g/week limit (slide 22).'}],
 teach:'Slide 22: hypercalcemia and hypercalciuria develop when the cumulative weekly dose of calcipotriene exceeds the recommended 100 g/week, and resolve within days of stopping. She explained the rise as the drug acting like vitamin D on genes for calcium transport (T 169–191).',
 cite:HQ_PC2+' slide 22; T 167–196'},

{id:'L2H-008', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'h-signal-tcell-molecules',
 tags:['hard','tell','target'], source:'both',
 stem:'Which pairing of T-cell activation signal and the T-cell molecule that receives it is correct?',
 options:[
  {t:'Signal 2: CD28; signal 3: CD25', correct:true, why:'Slide 25: signal 2 is CD80/86 on the APC binding T-cell CD28; signal 3 is IL-2 binding T-cell CD25, the IL-2 receptor (T 233–269).'},
  {t:'Signal 2: CD25; signal 3: CD28', correct:false, why:'The two halves are reversed (slide 25).'},
  {t:'Signal 1: CD28; signal 3: CD25', correct:false, why:'Signal 1 is antigen on MHC II binding the T-cell receptor (slide 25).'},
  {t:'Signal 2: CD80/86; signal 3: CD25', correct:false, why:'CD80/86 sits on the antigen-presenting cell; the T-cell molecule for signal 2 is CD28 (slide 25).'}],
 teach:'Slide 25: signal 1, antigen on MHC II binds the T-cell receptor; signal 2, CD80/86 on the APC binds CD28 (co-signal), which starts activation and IL-2 transcription; signal 3, IL-2 binds CD25 and starts T-cell proliferation. Calcineurin inhibitors act in the cascade after signals 1 and 2.',
 cite:HQ_PC2+' slide 25; T 220–269'},

{id:'L2H-009', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'h-calcineurin-sequence',
 tags:['hard','reasoning'], source:'both',
 stem:'Which sequence describes how IL-2 is normally expressed after T-cell signaling?',
 options:[
  {t:'Calcium–calmodulin activates calcineurin, which dephosphorylates NFAT', correct:true, why:'Slide 26; (T 319–331): calcineurin, activated by calcium and calmodulin, removes the phosphate from NFAT, which enters the nucleus and gets IL-2 expressed.'},
  {t:'Calcineurin activates calcium–calmodulin, which dephosphorylates NFAT', correct:false, why:'Calmodulin with calcium activates calcineurin, not the reverse (T 320–321).'},
  {t:'Calcium–calmodulin activates calcineurin, which phosphorylates NFAT', correct:false, why:'NFAT is inactive when phosphorylated; calcineurin removes the phosphate (T 323–324).'},
  {t:'NFAT activates calcineurin, which dephosphorylates calmodulin', correct:false, why:'NFAT is the transcription factor that calcineurin acts on (slide 26).'}],
 teach:'Slide 26 and T 319–331: calcineurin, a phosphatase, is activated by calcium and calmodulin; it dephosphorylates NFAT, and active NFAT moves into the nucleus to drive IL-2 expression. Cyclosporine–cyclophilin and tacrolimus–FKBP complexes bind calcineurin and stop this step.',
 cite:HQ_PC2+' slide 26; T 316–331'},

{id:'L2H-010', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'h-tacrolimus-fkbp-target',
 tags:['hard','target'], source:'both', dupOf:'L2-060',
 stem:'Tacrolimus (FK506) must first bind which protein, and what does that complex then inhibit?',
 options:[
  {t:'FKBP; calcineurin', correct:true, why:'Slide 26; (T 346–352): tacrolimus binds FKBP, and the complex inactivates calcineurin.'},
  {t:'Cyclophilin; calcineurin', correct:false, why:'Cyclophilin is the binding protein of cyclosporine (slide 26).'},
  {t:'FKBP; NFAT', correct:false, why:'The complex inhibits calcineurin, so NFAT is not dephosphorylated (slide 26).'},
  {t:'Calmodulin; calcineurin', correct:false, why:'Calmodulin with calcium activates calcineurin (T 320–321); it is not the drug\'s binding protein.'}],
 teach:'Both calcineurin inhibitors work through a binding protein: cyclosporine with cyclophilin, tacrolimus with FKBP. The complex inhibits calcineurin, so NFAT stays phosphorylated, IL-2 is not made and T cells do not proliferate (slide 26; T 333–352).',
 cite:HQ_PC2+' slide 26; T 333–355'},

{id:'L2H-011', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'h-tci-age-itch',
 tags:['hard','numbers'], source:'both',
 stem:'Which statement fits both topical pimecrolimus and topical tacrolimus in atopic dermatitis?',
 options:[
  {t:'Approved over age 2; itch relief within days', correct:true, why:'Slide 27: both relieve pruritus after the first few days and are approved for AD in adults and children older than 2 years (T 366, 374).'},
  {t:'Approved over age 2; itch relief after 8–12 weeks', correct:false, why:'8–12 weeks is the retinoid timeline (slide 16); these relieve itch within days (slide 27).'},
  {t:'Approved from birth; itch relief within days', correct:false, why:'Use under 2 years is not FDA approved (slide 27).'},
  {t:'Approved over age 12; itch relief within hours', correct:false, why:'The approval is for children older than 2 (slide 27).'}],
 teach:'Slide 27: topical pimecrolimus and tacrolimus inhibit T-cell and mast cell activation; both relieve pruritus within the first few days and are approved in adults and children older than 2. Pimecrolimus may stay in the skin more than in the circulation. Crisaborole has the same age cutoff: 2 years and older (slide 33).',
 cite:HQ_PC2+' slides 16, 27, 33; T 362–377'},

{id:'L2H-012', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'h-csa-bbw-skin',
 tags:['hard'], source:'slide', dupOf:'L2-117',
 stem:'The black box warning of oral cyclosporine names an increased risk of lymphoma and other malignancies, particularly of which organ?',
 options:[
  {t:'The skin', correct:true, why:'Slide 30: "Increased risk of lymphoma and other malignancies, particularly of the skin".'},
  {t:'The liver', correct:false, why:'Liver toxicity belongs to methotrexate (slide 61) and acitretin (slide 20), not the cyclosporine warning.'},
  {t:'The kidney', correct:false, why:'Nephrotoxicity is a side effect of cyclosporine and tacrolimus (slide 30), not the named malignancy.'},
  {t:'The colon', correct:false, why:'Not among the malignancies named on slide 30.'}],
 teach:'Slide 30, black box warning for oral cyclosporine: lymphoma and other malignancies, particularly of the skin, and more bacterial, viral, fungal and protozoal infections, including opportunistic ones. The cause is immune suppression, which lowers the body\'s defense against cancer (T 396–402).',
 cite:HQ_PC2+' slides 20, 30, 61; T 396–403'},

{id:'L2H-013', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'h-tac-neuro-nephro',
 tags:['hard','tell'], source:'both',
 stem:'A transplant patient on oral tacrolimus has tingling in the feet and a rising serum creatinine. How do these effects compare with cyclosporine?',
 options:[
  {t:'Neuropathy is specific to tacrolimus; nephrotoxicity is shared', correct:true, why:'Slide 30: neuropathies with tacrolimus only; nephrotoxicity with both (T 403–412).'},
  {t:'Neuropathy is shared; nephrotoxicity is specific to tacrolimus', correct:false, why:'The two halves are reversed (slide 30).'},
  {t:'Neuropathy is specific to cyclosporine; nephrotoxicity is shared', correct:false, why:'Cyclosporine\'s own effect is gingival hyperplasia (slide 30).'},
  {t:'Both are specific to tacrolimus', correct:false, why:'Nephrotoxicity is significant in both drugs (slide 30; T 404–408).'}],
 teach:'Slide 30: both oral CNIs cause nephrotoxicity, hypertension, URTIs, cough and headache; cyclosporine alone causes gingival hyperplasia; tacrolimus alone causes neuropathies. Both are CYP3A4 substrates with many interactions.',
 cite:HQ_PC2+' slide 30; T 403–421'},

{id:'L2H-014', skill:'mech', prof:'Smith', tier:'new', topic:'l2-pde', sub:'mech', concept:'h-camp-two-effects',
 tags:['hard'], source:'both', dupOf:'L2-081',
 stem:'A PDE-4 inhibitor raises cellular cAMP. Which two effects follow?',
 options:[
  {t:'Smooth muscle relaxes and inflammatory cells are inhibited', correct:true, why:'Slide 32: increased cAMP gives relaxation of smooth muscle and inhibition of inflammatory cells (T 441).'},
  {t:'Smooth muscle contracts and inflammatory cells are inhibited', correct:false, why:'Slide 32: smooth muscle relaxes.'},
  {t:'Smooth muscle relaxes and inflammatory cells are activated', correct:false, why:'Slide 32: inflammatory cells are inhibited.'},
  {t:'NFAT is dephosphorylated and IL-2 rises', correct:false, why:'That is the calcineurin step (slide 26), which calcineurin inhibitors block.'}],
 teach:'Slide 32: phosphodiesterase breaks cAMP down; blocking PDE4 keeps cAMP high, relaxing smooth muscle and inhibiting inflammatory cells. PDE4 is the predominant isoform in mast cells, eosinophils, neutrophils, T lymphocytes and macrophages.',
 cite:HQ_PC2+' slides 26, 32; T 433–448'},

{id:'L2H-015', skill:'tell', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'h-pde4-pair-route',
 tags:['hard','tell'], source:'both', dupOf:'L2-086',
 stem:'Which pairing of PDE-4 inhibitor, form and condition is correct?',
 options:[
  {t:'Apremilast: oral, psoriasis; crisaborole: 2% ointment, AD from age 2', correct:true, why:'Slides 33–34: crisaborole 2% ointment for mild-to-moderate AD in patients 2 years and older; apremilast oral for psoriasis (T 448–467).'},
  {t:'Apremilast: oral, AD; crisaborole: 2% ointment, psoriasis', correct:false, why:'The conditions are swapped (slides 33–34).'},
  {t:'Apremilast: 2% ointment, psoriasis; crisaborole: oral, AD', correct:false, why:'The forms are swapped (slides 33–34).'},
  {t:'Apremilast: oral, psoriasis; crisaborole: 2% ointment, AD under age 2', correct:false, why:'Crisaborole is approved from 2 years of age (slide 33).'}],
 teach:'Slide 33: crisaborole 2% ointment, mild-to-moderate AD, age 2 and older; application-site pain in 4%, hypersensitivity in under 1% (stop at once). Slide 34: apremilast, oral, psoriasis; diarrhea, nausea, headache, weight loss; caution in depression; CYP3A4 inducers lower its effect.',
 cite:HQ_PC2+' slides 33–34; T 448–472'},

{id:'L2H-016', skill:'tell', prof:'Smith', tier:'new', topic:'l2-pde', sub:'cris', concept:'h-cris-vs-pime-target',
 tags:['hard','tell','target'], source:'both',
 stem:'Crisaborole and pimecrolimus are both topical agents for atopic dermatitis. What separates their mechanisms?',
 options:[
  {t:'Crisaborole: PDE4, raising cAMP; pimecrolimus: calcineurin', correct:true, why:'Slides 32–33 (PDE4 inhibition raises cAMP) and slides 24–27 (calcineurin inhibition stops IL-2 expression).'},
  {t:'Crisaborole: calcineurin; pimecrolimus: PDE4, raising cAMP', correct:false, why:'The two halves are swapped (slides 27, 33).'},
  {t:'Both raise cAMP, at different PDE isoforms', correct:false, why:'Pimecrolimus is a calcineurin inhibitor (slide 27).'},
  {t:'Crisaborole lowers cAMP; pimecrolimus raises NFAT activity', correct:false, why:'PDE4 inhibition raises cAMP (slide 32), and calcineurin inhibitors keep NFAT inactive (slide 26).'}],
 teach:'Two topical non-steroid mechanisms for AD: crisaborole inhibits PDE4, so cAMP rises and inflammatory cells are inhibited (slides 32–33); pimecrolimus and tacrolimus inhibit calcineurin, so NFAT is not activated and IL-2 is not expressed (slides 24–27).',
 cite:HQ_PC2+' slides 24–27, 32–33; T 319–331, 430–450'},

{id:'L2H-017', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'h-bpo-metab-bleach',
 tags:['hard'], source:'both',
 stem:'Which pairing describes benzoyl peroxide\'s probable active metabolite and the reason it bleaches fabrics?',
 options:[
  {t:'Benzoic acid; it is an oxidant', correct:true, why:'Slide 36: it is metabolized to benzoic acid, probably the active form (T 499); slide 37: an oxidant, so it can bleach hair and fabrics (T 510–511).'},
  {t:'Benzoic acid; it is a strong acid', correct:false, why:'Slide 37 gives the oxidant property as the reason for bleaching.'},
  {t:'Hydrogen sulfide; it is an oxidant', correct:false, why:'Hydrogen sulfide is the product of sulfur in keratinocytes (slide 38).'},
  {t:'Salicylic acid; it is an oxidant', correct:false, why:'Salicylic acid is a separate keratolytic (slides 39–40), not a benzoyl peroxide metabolite.'}],
 teach:'Slides 36–37: benzoyl peroxide penetrates the stratum corneum and follicular openings and is metabolized to benzoic acid. It is antimicrobial against P. acnes and comedolytic. Cautions: a potent contact sensitizer; keep off eyes and mucous membranes; an oxidant that bleaches hair and colored fabrics.',
 cite:HQ_PC2+' slides 36–38; T 497–515'},

{id:'L2H-018', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'h-sulfur-two-actions',
 tags:['hard'], source:'both', dupOf:'L2-097',
 stem:'Which pairing describes sulfur\'s antibacterial effect and how it promotes peeling in acne?',
 options:[
  {t:'Bacteriostatic; hydrogen sulfide formed in keratinocytes inflames them', correct:true, why:'Slide 38: bacteriostatic properties; sulfur is reduced to hydrogen sulfide inside keratinocytes, causing inflammation that promotes peeling (T 517–522).'},
  {t:'Bactericidal; hydrogen sulfide formed in keratinocytes inflames them', correct:false, why:'Sulfur does not kill the bacteria but prevents their growth (T 517–518).'},
  {t:'Bacteriostatic; benzoic acid formed in the follicle loosens keratinocytes', correct:false, why:'Benzoic acid is the benzoyl peroxide metabolite (slide 36).'},
  {t:'Bacteriostatic; it solubilizes stratum corneum surface proteins', correct:false, why:'That is the proposed mechanism of salicylic acid (slide 39).'}],
 teach:'Slide 38: sulfur is a mild keratolytic with bacteriostatic properties; reduced to hydrogen sulfide inside keratinocytes, it causes inflammation that promotes peeling and unblocking of plugs. Side effects: redness, irritation, peeling, a comedogenic flare as comedones are uncovered, and the sulfur odor.',
 cite:HQ_PC2+' slides 36, 38–39; T 515–534'},

{id:'L2H-019', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'h-sa-conc-uses',
 tags:['hard','numbers','counseling'], source:'both', dupOf:'L2-103',
 stem:'Which pairing of salicylic acid concentration and use is correct?',
 options:[
  {t:'3–6% for acne and dandruff; up to 40% for warts and corns', correct:true, why:'Both concentrations (slide 40; T 545–549).'},
  {t:'3–6% for warts and corns; up to 40% for acne', correct:false, why:'Swapped: the 40% products go only on the wart or corn (T 549–552).'},
  {t:'0.5–2% for acne and dandruff; up to 20% for warts', correct:false, why:'Slide 40 gives 3–6% and up to 40%.'},
  {t:'3–6% for acne and dandruff; up to 60% for warts and corns', correct:false, why:'Slide 40 gives up to 40%.'}],
 teach:'Slide 40: 3 to 6% treats dandruff, acne and psoriasis; above 6% may damage the skin by peeling too deeply; up to 40% is for wart and corn removal, applied only to the wart or corn and not to the healthy skin beside it (T 545–552).',
 cite:HQ_PC2+' slide 40; T 545–552'},

{id:'L2H-020', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'h-sa-ae-set', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Which adverse effects are associated with topical salicylic acid? Select all that apply.',
 options:[
  {t:'Irritation and inflammation of normal skin', correct:true, why:'A salicylic acid adverse effect (slide 40).'},
  {t:'Ulceration with high concentrations', correct:true, why:'A salicylic acid adverse effect (slide 40; T 553–554).'},
  {t:'Urticaria or anaphylaxis in an allergic reaction', correct:true, why:'Slide 40: urticaria, anaphylaxis and erythema during an allergic reaction.'},
  {t:'Salicylism', correct:true, why:'Slide 40: the term for a salicylate overdose (T 555–557).'},
  {t:'Bleaching of hair and colored fabrics', correct:false, why:'A benzoyl peroxide caution (slide 37).'},
  {t:'A sulfur odor', correct:false, why:'A side effect of sulfur (slide 38).'}],
 teach:'Slide 40: irritation and inflammation of normal skin, ulceration at high concentrations, urticaria, anaphylaxis and erythema in allergy, and salicylism. Caution on the extremities of patients with diabetes or peripheral vascular disease.',
 cite:HQ_PC2+' slides 37–38, 40; T 552–566'},

{id:'L2H-021', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'h-ribo-70s-steps',
 tags:['hard'], source:'slide', dupOf:'L2-111',
 stem:'On the 70S bacterial ribosome, which pairing of antibiotic, subunit and blocked step is correct?',
 options:[
  {t:'Tetracyclines: 30S; binding of the incoming charged tRNA', correct:true, why:'Slide 42 caption: tetracyclines bind the 30S subunit and prevent binding of the incoming charged tRNA (step 1).'},
  {t:'Tetracyclines: 50S; peptide bond formation', correct:false, why:'Chloramphenicol binds 50S and blocks peptide bond formation (slide 42).'},
  {t:'Chloramphenicol: 30S; binding of the incoming charged tRNA', correct:false, why:'Chloramphenicol binds the 50S subunit (slide 42).'},
  {t:'Tetracyclines: 30S; release of the uncharged tRNA', correct:false, why:'Slide 42: they block step 1, the binding of the charged tRNA at the acceptor site.'}],
 teach:'Slide 42: the 70S ribosome has 50S and 30S subunits. Step 1, the charged tRNA binds the acceptor site (blocked by tetracyclines on 30S); step 2, peptide bond formation (blocked by chloramphenicol on 50S); step 3, release of the uncharged tRNA; step 4, translocation.',
 cite:HQ_PC2+' slide 42; T 586–607'},

/* ================== Pharmacology deck slides 43-76 (11/03) ================ */
{id:'L3H-001', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'h-tet-irreversible-static',
 tags:['hard'], source:'both', dupOf:'L3-002',
 stem:'Which description of the tetracycline mechanism and effect is correct?',
 options:[
  {t:'Irreversible binding to 30S; bacteriostatic', correct:true, why:'Slide 43: irreversible binding to the 30S subunit, blocking aminoacyl-tRNA binding; broad-spectrum bacteriostatic (T 29–36).'},
  {t:'Reversible binding to 30S; bactericidal', correct:false, why:'Slide 43: the binding is irreversible and the effect bacteriostatic.'},
  {t:'Irreversible binding to 50S; bacteriostatic', correct:false, why:'50S is the clindamycin and macrolide subunit (slides 46–47).'},
  {t:'Irreversible binding to 30S; bactericidal', correct:false, why:'They prevent multiplying rather than killing (T 35–36).'}],
 teach:'Slide 43: tetracyclines (sarecycline, minocycline, doxycycline) bind the 30S subunit irreversibly and block aminoacyl-tRNA binding at the acceptor site; they enter by passive diffusion and active transport and concentrate in susceptible organisms; they are broad-spectrum and bacteriostatic. Trimethoprim, by contrast, inhibits DHFR reversibly (slide 48).',
 cite:HQ_PC3+' slides 43, 46–48; T 26–36'},

{id:'L3H-002', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'h-mino-oto-photo',
 tags:['hard','tell'], source:'both',
 stem:'Which tetracycline can cause ototoxicity and may also be less photosensitizing than doxycycline?',
 options:[
  {t:'Minocycline', correct:true, why:'Slide 45: minocycline can cause ototoxicity (T 50); minocycline and sarecycline may be less photosensitizing than tetracycline or doxycycline.'},
  {t:'Sarecycline', correct:false, why:'Less photosensitizing (slide 45), but ototoxicity is named for minocycline only.'},
  {t:'Doxycycline', correct:false, why:'Slide 45 compares the others against doxycycline\'s photosensitivity; ototoxicity is minocycline\'s.'},
  {t:'Tetracycline', correct:false, why:'Slide 45 names tetracycline itself among the more photosensitizing ones.'}],
 teach:'Slide 45 sets the tetracyclines apart: the analogs (minocycline, doxycycline, sarecycline) have better GI absorption; doxycycline and minocycline are more lipid soluble; minocycline can cause ototoxicity; minocycline and sarecycline may be less photosensitizing; sarecycline has a narrower spectrum.',
 cite:HQ_PC3+' slide 45; T 46–51'},

{id:'L3H-003', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'h-sarecycline-microbiome',
 tags:['hard','tell'], source:'slide', dupOf:'L3-110',
 stem:'A woman with recurrent vaginal yeast infections after antibiotics needs a tetracycline for acne. Which property of sarecycline is relevant?',
 options:[
  {t:'A narrower spectrum, sparing the vulvovaginal microbiome', correct:true, why:'Slide 45: sarecycline\'s narrower spectrum may lead to less disruption of the vulvovaginal and GI microbiome.'},
  {t:'More lipid solubility, so it penetrates the follicle better', correct:false, why:'Slide 45 says that of doxycycline and minocycline.'},
  {t:'Ototoxicity, so hearing must be checked', correct:false, why:'Ototoxicity is named for minocycline (slide 45).'},
  {t:'Safe use in children under 8', correct:false, why:'The class is not used under 8 years (slide 45).'}],
 teach:'Slide 45: sarecycline has a narrower antimicrobial spectrum than the other tetracyclines, which may lead to less disruption of the vulvovaginal and GI microbiome. With minocycline it may be less photosensitizing.',
 cite:HQ_PC3+' slide 45'},

{id:'L3H-004', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'h-tet-age-reason',
 tags:['hard','numbers'], source:'both', dupOf:'L3-005',
 stem:'Under which age are tetracyclines not used, and why?',
 options:[
  {t:'8 years; teeth and bones are discolored and growth is impaired', correct:true, why:'Slide 45 (not in patients younger than 8) and slide 44 (bones and teeth discolored and growth impaired in the young); (T 41–42).'},
  {t:'12 years; teeth and bones are discolored and growth is impaired', correct:false, why:'Slide 45 gives younger than 8 years.'},
  {t:'8 years; ototoxicity in the developing ear', correct:false, why:'Ototoxicity is a minocycline effect (slide 45), not the reason for the age limit.'},
  {t:'2 years; pseudomembranous colitis', correct:false, why:'Slide 45 gives 8 years; colitis is a GI effect at any age (slide 44).'}],
 teach:'Slides 44–45: tetracyclines discolor bones and teeth and impair growth in the young, so they are not used in pregnancy or under 8 years. Other effects: GI upset, pseudomembranous colitis (stop for blood in the stool, T 39–40), photosensitivity in fair skin, superinfections.',
 cite:HQ_PC3+' slides 44–45; T 36–46'},

{id:'L3H-005', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'h-clinda-oral-ae', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Which are oral side effects of clindamycin? Select all that apply.',
 options:[
  {t:'Pseudomembranous colitis', correct:true, why:'An oral clindamycin side effect (slide 46; T 56–57).'},
  {t:'Impaired liver function', correct:true, why:'An oral clindamycin side effect (slide 46; T 57–58).'},
  {t:'Neutropenia (rare)', correct:true, why:'An oral clindamycin side effect (slide 46).'},
  {t:'Nausea, vomiting and diarrhea', correct:true, why:'An oral clindamycin side effect (slide 46).'},
  {t:'Ototoxicity', correct:false, why:'Named for minocycline (slide 45).'},
  {t:'Discoloration of teeth', correct:false, why:'A tetracycline effect in the young (slide 44).'}],
 teach:'Slide 46: clindamycin binds 50S and prevents translocation; bacteriostatic. Orally: pseudomembranous colitis, N/V/D, impaired liver function, rare neutropenia. Topically about 10% is absorbed, so colitis is still a (rare) risk; hydroalcoholic and foam forms dry and irritate, water-based gel and lotion are better tolerated; resistance limits its use.',
 cite:HQ_PC3+' slides 44–46; T 52–66'},

{id:'L3H-006', skill:'class', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'h-50s-drugs', multi:true,
 tags:['hard','list','target'], source:'both',
 stem:'Which acne antibiotics bind the 50S ribosomal subunit? Select all that apply.',
 options:[
  {t:'Clindamycin', correct:true, why:'A 50S binder (slide 46; T 53–54).'},
  {t:'Erythromycin', correct:true, why:'A 50S binder (slide 47; T 67–68).'},
  {t:'Azithromycin', correct:true, why:'A 50S binder (slide 47; T 67–68).'},
  {t:'Doxycycline', correct:false, why:'A tetracycline: 30S subunit (slide 43).'},
  {t:'Sarecycline', correct:false, why:'A tetracycline: 30S subunit (slide 43).'}],
 teach:'30S: the tetracyclines (sarecycline, minocycline, doxycycline; slide 43). 50S: clindamycin (slide 46) and the macrolides erythromycin and azithromycin (slide 47). TMP/SMX acts on folate synthesis instead (slide 48).',
 cite:HQ_PC3+' slides 43, 46–48; T 26–31, 52–68'},

{id:'L3H-007', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'tmpsmx', concept:'h-tmp-later-step',
 tags:['hard','tell','target'], source:'both',
 stem:'In trimethoprim/sulfamethoxazole, which component blocks the later step of bacterial folate synthesis, and how?',
 options:[
  {t:'Trimethoprim; reversible inhibition of dihydrofolate reductase', correct:true, why:'Slide 48: trimethoprim inhibits production of tetrahydrofolic acid from dihydrofolic acid by reversibly inhibiting DHFR.'},
  {t:'Sulfamethoxazole; competition with PABA', correct:false, why:'This blocks the earlier step, the synthesis of dihydrofolic acid (slide 48).'},
  {t:'Trimethoprim; irreversible inhibition of dihydrofolate reductase', correct:false, why:'Slide 48: the inhibition is reversible.'},
  {t:'Sulfamethoxazole; inhibition of dihydrofolate reductase', correct:false, why:'Sulfamethoxazole competes with PABA (slide 48).'}],
 teach:'Slides 48–49: two sequential blocks in folate synthesis. Sulfamethoxazole competes with PABA and stops dihydrofolic acid synthesis; trimethoprim reversibly inhibits DHFR and stops tetrahydrofolic acid production. Without folate the microbe cannot make purines and cannot divide (T 85–87).',
 cite:HQ_PC3+' slides 48–49; T 76–90'},

{id:'L3H-008', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'dap', concept:'h-dapsone-two-uses',
 tags:['hard','tell'], source:'slide', dupOf:'L3-023',
 stem:'Which pairing describes how dapsone works in leprosy and in acne?',
 options:[
  {t:'Leprosy: PABA antagonist; acne: anti-inflammatory, possibly via neutrophils', correct:true, why:'Slide 50: in leprosy it competitively antagonizes PABA like the sulfonamides; its anti-inflammatory activity helps acne, with neutrophils a possible site of action.'},
  {t:'Leprosy: a DHFR inhibitor; acne: anti-inflammatory, possibly via neutrophils', correct:false, why:'Slide 50 likens its leprosy mechanism to the sulfonamides (PABA antagonism), not to trimethoprim.'},
  {t:'Leprosy: anti-inflammatory; acne: PABA antagonist', correct:false, why:'The two halves are swapped (slide 50).'},
  {t:'Leprosy: PABA antagonist; acne: binding the 30S subunit', correct:false, why:'30S binding is the tetracyclines (slide 43); dapsone gel acts as an anti-inflammatory (slide 50).'}],
 teach:'Slide 50: dapsone treats leprosy, and topically acne. For leprosy it competitively antagonizes PABA and prevents bacterial folic acid synthesis. For acne its anti-inflammatory activity is what helps; neutrophils and their products may be a site of action. It is used as a topical gel.',
 cite:HQ_PC3+' slides 43, 48, 50'},

{id:'L3H-009', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'h-coal-tar-ae-set', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Which are adverse effects of coal tar? Select all that apply.',
 options:[
  {t:'Folliculitis, particularly of the axilla and groin', correct:true, why:'A coal tar adverse effect (slide 54).'},
  {t:'Photosensitization', correct:true, why:'A coal tar adverse effect (slide 54; T 145–148).'},
  {t:'Staining of light skin and hair', correct:true, why:'A coal tar adverse effect (slide 54).'},
  {t:'Carcinogenicity', correct:true, why:'A coal tar adverse effect (slide 54; T 145–148).'},
  {t:'Severe conjunctivitis with eye contact', correct:false, why:'An anthralin effect (slide 56).'},
  {t:'Ototoxicity', correct:false, why:'A minocycline effect (slide 45).'}],
 teach:'Slide 54, coal tar: irritation, stinging and burning; folliculitis, particularly of the axilla and groin; contact dermatitis; photosensitizing and carcinogenic; staining of light skin and hair; unpleasant odor; no systemic side effects. Safety in pregnancy, lactation and children is not established.',
 cite:HQ_PC3+' slides 45, 54, 56; T 140–153'},

{id:'L3H-010', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'h-anthralin-vs-coaltar',
 tags:['hard','tell'], source:'both',
 stem:'Anthralin and coal tar are both antipsoriatic cytotoxic agents. What separates them?',
 options:[
  {t:'Anthralin stains clothes dark brown or black; coal tar is photosensitizing', correct:true, why:'Slide 56 (anthralin stains skin, hair and clothes dark brown or black) and slide 54 (coal tar is photosensitizing and carcinogenic).'},
  {t:'Anthralin is photosensitizing; coal tar stains clothes dark brown or black', correct:false, why:'The two halves are swapped (slides 54, 56).'},
  {t:'Anthralin has systemic side effects; coal tar does not', correct:false, why:'Slides 54 and 56: systemic side effects do not occur with either.'},
  {t:'Anthralin is a petroleum mixture; coal tar comes from araroba bark', correct:false, why:'Anthralin is a synthetic version of chrysarobin from araroba bark (slide 55); coal tar is the mixture (slide 53).'}],
 teach:'Coal tar (slides 53–54): antiproliferative and anti-inflammatory, crosslinks DNA; photosensitizing and carcinogenic; stains light skin and hair. Anthralin (slides 55–56): synthetic chrysarobin from araroba bark; acts on keratinocyte mitochondria and T-cell activation; stains skin, hair and clothes dark brown or black; SCAT on thick plaques for 2 hours or less.',
 cite:HQ_PC3+' slides 53–56; T 130–190'},

{id:'L3H-011', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'h-scat-time-zinc',
 tags:['hard','counseling','numbers'], source:'both', dupOf:'L3-038',
 stem:'In short-contact anthralin therapy (SCAT), how long does the ointment stay on, and what protects the surrounding skin?',
 options:[
  {t:'2 hours or less; zinc oxide ointment or a stiff paste', correct:true, why:'Slide 56: anthralin is applied only to thick plaques for 2 hours or less and wiped off; zinc oxide ointment or a nonmedicated stiff paste goes on the surrounding normal skin (T 181–182).'},
  {t:'About 8 hours; zinc oxide ointment or a nonmedicated paste', correct:false, why:'Slide 56 gives 2 hours or less.'},
  {t:'2 hours or less; a coal tar gel', correct:false, why:'Slide 56: zinc oxide ointment or a nonmedicated stiff paste.'},
  {t:'Overnight; a topical corticosteroid', correct:false, why:'SCAT is short contact, 2 hours or less (slide 56).'}],
 teach:'Slide 56: SCAT puts anthralin on thick plaques only, for 2 hours or less, then wipes it off; zinc oxide ointment or a stiff paste protects the normal skin around them. Use it with caution, if at all, on the face and intertriginous areas.',
 cite:HQ_PC3+' slide 56; T 175–191'},

{id:'L3H-012', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'h-mtx-ae-set', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Besides cumulative liver toxicity, which are side effects of methotrexate? Select all that apply.',
 options:[
  {t:'Pulmonary toxicity', correct:true, why:'A methotrexate side effect (slide 61).'},
  {t:'Megaloblastic anemia', correct:true, why:'A methotrexate side effect (slide 61).'},
  {t:'Acute myelosuppression', correct:true, why:'A methotrexate side effect (slide 61).'},
  {t:'An increase in lymphoma', correct:true, why:'A methotrexate side effect (slide 61).'},
  {t:'Gingival hyperplasia', correct:false, why:'A cyclosporine effect (PCol slide 30).'},
  {t:'Ototoxicity', correct:false, why:'A minocycline effect (slide 45).'}],
 teach:'Slide 61: cumulative liver toxicity is the most significant adverse effect of methotrexate (T 237–238); others are nausea, pulmonary toxicity, pancytopenia, acute myelosuppression, megaloblastic anemia and more lymphoma; these are rare but screened for. It is an abortifacient and teratogenic.',
 cite:HQ_PC3+' slides 30, 45, 61; T 230–250'},

{id:'L3H-013', skill:'class', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'h-folate-drugs', multi:true,
 tags:['hard','list','target'], source:'slide',
 stem:'Which drugs act on folate synthesis or use? Select all that apply.',
 options:[
  {t:'Methotrexate', correct:true, why:'Slide 59: inhibits DHFR, stopping tetrahydrofolate synthesis.'},
  {t:'Trimethoprim', correct:true, why:'Slide 48: reversibly inhibits bacterial DHFR.'},
  {t:'Sulfamethoxazole', correct:true, why:'Slide 48: competes with PABA in dihydrofolic acid synthesis.'},
  {t:'Dapsone, in leprosy', correct:true, why:'Slide 50: like the sulfonamides, a competitive PABA antagonist.'},
  {t:'Clindamycin', correct:false, why:'Binds the 50S subunit (slide 46).'},
  {t:'Doxycycline', correct:false, why:'Binds the 30S subunit (slide 43).'}],
 teach:'Folate pathway drugs on her slides: sulfamethoxazole and dapsone (PABA antagonism), trimethoprim (bacterial DHFR, reversible) and methotrexate (DHFR, a folic acid analog; slide 59). Tetrahydrofolate is needed for purine synthesis, so blocking it stops cell division.',
 cite:HQ_PC3+' slides 43, 46, 48–50, 59'},

{id:'L3H-014', skill:'class', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'h-abatacept-struct-target',
 tags:['hard','target'], source:'both', dupOf:'L3-058',
 stem:'Which pairing of abatacept\'s structure and what it binds is correct?',
 options:[
  {t:'CTLA-4 extracellular domain fused to IgG Fc; binds CD80/86', correct:true, why:'Slide 63: a fusion protein of the CTLA-4 extracellular domain and human IgG Fc that binds CD80/CD86 on APCs (T 316–323).'},
  {t:'CD28 extracellular domain fused to IgG Fc; binds CD80/86', correct:false, why:'The drug was made to look like CTLA-4, which likely binds CD80/86 more tightly than CD28 (T 322–323).'},
  {t:'CTLA-4 extracellular domain fused to IgG Fc; binds CD28', correct:false, why:'It binds CD80/86 on the APC, so CD28 on the T cell cannot bind (slide 63).'},
  {t:'Two p75 soluble TNF receptors fused to IgG1 Fc; binds CD80/86', correct:false, why:'That is the structure of etanercept, which binds TNF (slide 71).'}],
 teach:'Slide 63: abatacept, an inhibitor of co-stimulation, is CTLA-4\'s extracellular domain fused to human IgG Fc. It binds CD80/86 on antigen-presenting cells, so T-cell CD28 cannot bind and the positive signal 2 is lost.',
 cite:HQ_PC3+' slides 63, 71; T 310–356'},

{id:'L3H-015', skill:'class', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'make', concept:'h-fusion-proteins', multi:true,
 tags:['hard','list','tell'], source:'slide',
 stem:'Which of these drugs are fusion proteins with an IgG Fc portion? Select all that apply.',
 options:[
  {t:'Abatacept', correct:true, why:'Slide 63: CTLA-4 extracellular domain fused to human IgG Fc.'},
  {t:'Etanercept', correct:true, why:'Slide 71: two p75 soluble TNF receptors linked to an Fc fragment of human IgG1.'},
  {t:'Infliximab', correct:false, why:'A chimeric mouse–human antibody (slide 72).'},
  {t:'Certolizumab pegol', correct:false, why:'A pegylated Fab fragment of an antibody (slide 74).'},
  {t:'Adalimumab', correct:false, why:'A human IgG1 antibody (slide 73).'}],
 teach:'Structures in the biologics section: fusion proteins (abatacept, etanercept), whole antibodies that are human (adalimumab, golimumab, secukinumab, brodalumab, ustekinumab, guselkumab), humanized (ixekizumab, tildrakizumab, risankizumab) or chimeric (infliximab), and a pegylated Fab fragment (certolizumab pegol).',
 cite:HQ_PC3+' slides 63–74'},

{id:'L3H-016', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'h-dupilumab-type-i-ii',
 tags:['hard','target'], source:'slide', dupOf:'L3-065',
 stem:'By binding IL-4Rα, dupilumab blocks which signaling through the type I and type II receptors?',
 options:[
  {t:'Type I: IL-4; type II: IL-4 and IL-13', correct:true, why:'Slide 64: dupilumab inhibits IL-4 signaling via the type I receptor and both IL-4 and IL-13 signaling through the type II receptor.'},
  {t:'Type I: IL-4 and IL-13; type II: IL-4', correct:false, why:'The two halves are reversed (slide 64).'},
  {t:'Type I: IL-13; type II: IL-4', correct:false, why:'Slide 64: type I carries IL-4; type II carries both.'},
  {t:'Type I: IL-4; type II: IL-13 but not IL-4', correct:false, why:'Slide 64: type II carries both IL-4 and IL-13.'}],
 teach:'Slide 64: dupilumab is a human monoclonal IgG4 antibody against the IL-4Rα subunit shared by the IL-4 and IL-13 receptor complexes. It blocks IL-4 through the type I receptor and IL-4 and IL-13 through the type II receptor, lowering proinflammatory cytokines, chemokines and IgE (T 366–381).',
 cite:HQ_PC3+' slide 64; T 366–381'},

{id:'L3H-017', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'h-dupilumab-eye-ae', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Which adverse effects are reported with dupilumab? Select all that apply.',
 options:[
  {t:'Conjunctivitis', correct:true, why:'Slide 64; eye effects can be dose limiting (T 386–389).'},
  {t:'Blepharitis', correct:true, why:'A dupilumab adverse effect (slide 64).'},
  {t:'Oral herpes', correct:true, why:'A dupilumab adverse effect (slide 64).'},
  {t:'Keratitis', correct:true, why:'A dupilumab adverse effect (slide 64).'},
  {t:'A lupus-like syndrome', correct:false, why:'Reported with infliximab (slide 72).'},
  {t:'Gingival hyperplasia', correct:false, why:'A cyclosporine effect (PCol slide 30).'}],
 teach:'Slide 64: dupilumab side effects are generally mild; most frequent are nasopharyngitis and headache; others include injection site reactions, conjunctivitis, blepharitis, oral herpes, keratitis, eye pruritus and dry eye. The eye effects can be dose limiting (T 384–389).',
 cite:HQ_PC3+' slides 30, 64, 72; T 383–389'},

{id:'L3H-018', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'h-brodalumab-two-attrs',
 tags:['hard','tell','target'], source:'both',
 stem:'Which IL-17 or IL-23 inhibitor is a human antibody that binds a receptor rather than a cytokine?',
 options:[
  {t:'Brodalumab', correct:true, why:'Slide 66: a human IgG2 antibody that binds IL-17 receptor A (T 422–423).'},
  {t:'Secukinumab', correct:false, why:'Human, but it binds the IL-17A cytokine (slide 66).'},
  {t:'Ixekizumab', correct:false, why:'Binds the IL-17A cytokine and is humanized (slide 66; T 417–420).'},
  {t:'Guselkumab', correct:false, why:'Human, but it binds the p19 subunit of the IL-23 cytokine (slide 68).'}],
 teach:'Her two questions for every biologic (T 429–432): does it bind the cytokine or the receptor, and is it human, humanized or chimeric? Secukinumab: human, IL-17A cytokine. Ixekizumab: humanized, IL-17A cytokine. Brodalumab: human, IL-17RA receptor. Guselkumab: human, IL-23 p19.',
 cite:HQ_PC3+' slides 66, 68; T 405–433'},

{id:'L3H-019', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'h-brodalumab-cytokines', multi:true,
 tags:['hard','list','target'], source:'slide',
 stem:'By binding IL-17RA, brodalumab blocks its interactions with which cytokines? Select all that apply.',
 options:[
  {t:'IL-17A', correct:true, why:'An IL-17RA ligand blocked (slide 66).'},
  {t:'IL-17F', correct:true, why:'An IL-17RA ligand blocked (slide 66).'},
  {t:'IL-17C', correct:true, why:'An IL-17RA ligand blocked (slide 66).'},
  {t:'IL-25', correct:true, why:'Slide 66: IL-17A, IL-17F, IL-17C, the IL-17A/F heterodimer and IL-25.'},
  {t:'IL-23', correct:false, why:'IL-23 is the target of ustekinumab (p40) and the IL-23 inhibitors (p19), slides 67–69.'},
  {t:'IL-13', correct:false, why:'IL-13 signals through IL-4Rα, blocked by dupilumab (slide 64).'}],
 teach:'Slide 66: brodalumab, a human IgG2 antibody, binds human IL-17RA and inhibits its interactions with IL-17A, IL-17F, IL-17C, the IL-17A/F heterodimer and IL-25, blocking the release of proinflammatory cytokines and chemokines. Secukinumab and ixekizumab bind the IL-17A cytokine instead.',
 cite:HQ_PC3+' slides 64, 66–69'},

{id:'L3H-020', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'h-ustek-receptor-cells',
 tags:['hard','target'], source:'slide', dupOf:'L3-078',
 stem:'Ustekinumab prevents IL-12 and IL-23 from binding which receptor, on which cells?',
 options:[
  {t:'IL-12 receptor β1, on CD4 T cells and NK cells', correct:true, why:'Slide 67: it prevents binding of IL-12 and IL-23 to the IL-12 receptor β1 on the surface of CD4 T cells and NK cells.'},
  {t:'IL-12 receptor β1, on keratinocytes and mast cells', correct:false, why:'Slide 67 names CD4 T cells and NK cells.'},
  {t:'IL-17 receptor A, on CD4 T cells', correct:false, why:'IL-17RA is the brodalumab target (slide 66).'},
  {t:'IL-4 receptor α, on CD4 T cells and NK cells', correct:false, why:'IL-4Rα is the dupilumab target (slide 64).'}],
 teach:'Slide 67: ustekinumab is a fully human IgG antibody to the p40 subunit of IL-12 and IL-23; it keeps both from binding IL-12 receptor β1 on CD4 T cells and NK cells and suppresses formation of proinflammatory TH1 and TH17 cells (T 444–451).',
 cite:HQ_PC3+' slides 64, 66–67; T 444–451'},

{id:'L3H-021', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'h-ustek-allergy-immunotherapy',
 tags:['hard','counseling'], source:'slide',
 stem:'Because of its serious allergic reactions, ustekinumab calls for caution in which patient?',
 options:[
  {t:'One receiving allergy immunotherapy', correct:true, why:'Slide 67: serious allergic reactions, including angioedema and anaphylaxis; caution in patients receiving allergy immunotherapy.'},
  {t:'One with a history of depression', correct:false, why:'Depression is the caution for apremilast (slide 34).'},
  {t:'One with peripheral vascular disease', correct:false, why:'That caution is for salicylic acid on the extremities (slide 40).'},
  {t:'One at high risk of GI perforation', correct:false, why:'That caution is for tofacitinib (slide 76).'}],
 teach:'Slide 67, ustekinumab: URTI is most common; serious allergic reactions (angioedema, anaphylaxis) with caution in allergy immunotherapy; serious infections, especially mycobacterial, so TB screening; no live vaccines (stop 15 weeks before, restart 2 weeks after); rare malignancy and one reported case of reversible posterior leukoencephalopathy syndrome.',
 cite:HQ_PC3+' slides 34, 40, 67, 76; T 452–466'},

{id:'L3H-022', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'h-p19-human-humanized',
 tags:['hard','tell'], source:'slide', dupOf:'L3-085',
 stem:'Guselkumab and risankizumab both bind the p19 subunit of IL-23. Which pairing of origin is correct?',
 options:[
  {t:'Guselkumab: human; risankizumab: humanized', correct:true, why:'Slide 68 (guselkumab, a human monoclonal IgG1 lambda antibody) and slide 69 (risankizumab, a humanized IgG1 antibody).'},
  {t:'Guselkumab: humanized; risankizumab: human', correct:false, why:'The two halves are swapped (slides 68–69).'},
  {t:'Guselkumab: human; risankizumab: chimeric', correct:false, why:'Infliximab is the chimeric antibody in this lecture (slide 72).'},
  {t:'Both are humanized', correct:false, why:'Guselkumab is human (slide 68); tildrakizumab and risankizumab are humanized (slides 68–69).'}],
 teach:'Slides 68–69: the three p19 binders. Guselkumab, human IgG1 lambda; tildrakizumab-asmn, humanized IgG1/κ; risankizumab, humanized IgG1, given SQ and IV for moderate to severe plaque psoriasis.',
 cite:HQ_PC3+' slides 68–69, 72'},

{id:'L3H-023', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'h-inflix-delayed-reaction',
 tags:['hard','numbers'], source:'slide',
 stem:'A patient develops fever, chills and rash five days after an infliximab infusion. How is the reaction classified?',
 options:[
  {t:'Delayed, which spans 24 hours to 14 days', correct:true, why:'Slide 72: acute reactions occur within 24 hours of infusion; delayed reactions from 24 hours to 14 days.'},
  {t:'Acute, which spans the first 7 days', correct:false, why:'Slide 72: acute reactions are within 24 hours.'},
  {t:'Delayed, which spans 2 to 6 weeks', correct:false, why:'Slide 72: delayed reactions run from 24 hours to 14 days.'},
  {t:'Not an infusion reaction, since those occur within 24 hours', correct:false, why:'Slide 72 also describes delayed reactions, up to 14 days.'}],
 teach:'Slide 72: infliximab is chimeric (mouse and human IgG1), given IV. Antibodies against it bring infusion reactions, acute (within 24 hours) or delayed (24 hours to 14 days), with fever, chills, pruritus and rash; patients are premedicated. The antibodies may also reduce efficacy; infection risk and a lupus-like syndrome are reported.',
 cite:HQ_PC3+' slide 72; T 515–542'},

{id:'L3H-024', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'h-certolizumab-ae',
 tags:['hard','tell'], source:'slide',
 stem:'Which are the most common adverse reactions of certolizumab pegol?',
 options:[
  {t:'Upper respiratory infections, rash and UTIs', correct:true, why:'Its most common reactions (slide 74).'},
  {t:'Injection site reactions, pancytopenia and demyelination', correct:false, why:'Etanercept\'s effects (slide 71).'},
  {t:'Infusion reactions and a lupus-like syndrome', correct:false, why:'Infliximab\'s effects (slide 72).'},
  {t:'Nasopharyngitis, headache and conjunctivitis', correct:false, why:'Dupilumab\'s effects (slide 64).'}],
 teach:'Slide 74: certolizumab pegol is a recombinant Fab fragment of an anti-TNF antibody attached to polyethylene glycol, given SQ every other week, extendable to every 4 weeks after the first three doses; its most common adverse reactions are upper respiratory infections, rash and urinary tract infections.',
 cite:HQ_PC3+' slides 64, 71–72, 74'},

{id:'L3H-025', skill:'patho', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'h-tnf-source-cells',
 tags:['hard'], source:'both',
 stem:'Which cells produce TNF-α during acute inflammation?',
 options:[
  {t:'Macrophages and monocytes', correct:true, why:'The source of TNF-α (slide 70; T 490).'},
  {t:'CD4 T cells and NK cells', correct:false, why:'These carry the IL-12 receptor β1 that ustekinumab protects (slide 67).'},
  {t:'Keratinocytes and melanocytes', correct:false, why:'Keratinocytes are the major IL-17 target in psoriasis (slide 65); slide 70 names macrophages and monocytes for TNF-α.'},
  {t:'Mast cells and eosinophils', correct:false, why:'Cells in which PDE4 predominates (slide 32), not the TNF-α source on slide 70.'}],
 teach:'Slide 70: TNF-α is an inflammatory cytokine produced by macrophages and monocytes in acute inflammation; it has a role in necrosis and apoptosis and in resistance to infection and cancer, which is why the TNF-α inhibitors carry warnings for serious infection and malignancy.',
 cite:HQ_PC3+' slides 32, 65, 67, 70; T 488–500'},

{id:'L3H-026', skill:'tell', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'h-tnf-route-pairs',
 tags:['hard','tell'], source:'slide',
 stem:'Which pairing of TNF-α inhibitor and how it is given is correct?',
 options:[
  {t:'Infliximab by IV infusion; certolizumab pegol SQ every other week', correct:true, why:'Slide 72 (IV infusion) and slide 74 (subcutaneously every other week).'},
  {t:'Infliximab SQ every other week; certolizumab pegol by IV infusion', correct:false, why:'The two halves are swapped (slides 72, 74).'},
  {t:'Etanercept by IV infusion; adalimumab SQ', correct:false, why:'Etanercept is given by subcutaneous injection (slide 71).'},
  {t:'Infliximab by IV infusion; adalimumab by IV infusion', correct:false, why:'Adalimumab is subcutaneous (slide 73).'}],
 teach:'Slides 71–74: etanercept SQ; infliximab IV infusion; adalimumab SQ; certolizumab pegol SQ every other week, extendable to every 4 weeks after three doses. Of the IL-23 inhibitors, risankizumab is given SQ and IV (slide 69).',
 cite:HQ_PC3+' slides 69, 71–74'},

/* ======================= Sun exposure deck (recording) ==================== */
{id:'L3CH-001', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'h-puva-band-action',
 tags:['hard','numbers'], source:'both', dupOf:'L3C-002',
 stem:'In PUVA, which light and wavelength range make methoxsalen act, and what does it do to DNA?',
 options:[
  {t:'UVA at 320–340 nm; it intercalates into the DNA strand', correct:true, why:'Slide 3: PUVA combines UVA with psoralens; with UV light at 320 to 340 nm, psoralens intercalate into the DNA strand (audio 00:29).'},
  {t:'UVB at 290–320 nm; it intercalates into the DNA strand', correct:false, why:'290–320 nm is UVB (slide 8); PUVA uses UVA.'},
  {t:'UVA at 370–400 nm; it intercalates into the DNA strand', correct:false, why:'370 nm is the broad-spectrum critical wavelength cutoff (slide 14), not the PUVA range.'},
  {t:'UVA at 320–340 nm; it inhibits dihydrofolate reductase', correct:false, why:'DHFR inhibition is methotrexate\'s mechanism (PCol slide 59).'}],
 teach:'Slide 3: methoxsalen with UVA at 320–340 nm intercalates into DNA; the phototoxic reactions stimulate melanocytes and are antiproliferative, immunosuppressive and anti-inflammatory. Effects: normalized keratinocytes, reorganized cutaneous vessels, cytotoxicity to T cells, more melanin.',
 cite:HQ_SUN+' slides 3, 8, 14; audio 00:00–01:30'},

{id:'L3CH-002', skill:'epi', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'risk', concept:'h-uv-index-factors', multi:true,
 tags:['hard','list'], source:'both',
 stem:'Which factors affect the UV index? Select all that apply.',
 options:[
  {t:'Time of day', correct:true, why:'A UV index factor (slide 7; audio 03:28).'},
  {t:'Season', correct:true, why:'A UV index factor (slide 7; audio 03:28).'},
  {t:'Altitude and latitude', correct:true, why:'A UV index factor (slide 7).'},
  {t:'Integrity of the ozone layer', correct:true, why:'A UV index factor (slide 7).'},
  {t:'The melanin in a person\'s skin', correct:false, why:'A separate risk factor for sun damage on slide 7, not a factor in the UV index, which rates the UV reaching the earth.'},
  {t:'The SPF of the product used', correct:false, why:'A separate risk factor on slide 7; it does not change the UV reaching the earth.'}],
 teach:'Slide 7: the UV index rates the UV reaching the earth\'s surface at a given time and place; it depends on time of day, season, altitude and latitude, ozone layer integrity and land cover (shade from trees or buildings). The other risk factors for sun damage are the person\'s melanin, the SPF used, cumulative exposure and one severe sunburn before 18, which doubles the lifetime skin cancer risk.',
 cite:HQ_SUN+' slide 7; audio 03:28'},

{id:'L3CH-003', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'h-uva-glass-phototoxic',
 tags:['hard','tell','reasoning'], source:'both',
 stem:'A patient on doxycycline drives for hours with the window closed and develops a phototoxic rash on the arm by the window. Which light explains this?',
 options:[
  {t:'UVA, which passes glass and causes most phototoxic drug reactions', correct:true, why:'Slide 8: UVA penetrates glass and is responsible for most phototoxic reactions with drugs; (audio 05:00, 05:54).'},
  {t:'UVB, which passes glass and causes most phototoxic drug reactions', correct:false, why:'UVB does not penetrate glass (slide 8).'},
  {t:'UVA, which is about 90% filtered by ozone', correct:false, why:'UVA is minimally filtered by ozone; UVB is about 90% filtered (slide 8).'},
  {t:'UVB, which causes sunburn and makes vitamin D3', correct:false, why:'True of UVB (slide 8), but UVB does not pass glass.'}],
 teach:'Slide 8: UVB (290–320 nm) is about 90% filtered by ozone, does not pass glass, causes sunburn and makes vitamin D3. UVA (320–400 nm) is minimally filtered, passes glass, penetrates deeper into the dermis and causes most phototoxic drug reactions. Doxycycline is photosensitizing (PCol slide 44).',
 cite:HQ_SUN+' slide 8; audio 04:37–06:19'},

{id:'L3CH-004', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'h-immediate-pigmentation',
 tags:['hard','numbers'], source:'slide', dupOf:'L3C-018',
 stem:'After UVA exposure, when does immediate pigmentation start and how long does it last?',
 options:[
  {t:'Starts 5–10 minutes after; lasts 24–48 hours', correct:true, why:'Slide 10: immediate pigment darkening starts 5–10 minutes after exposure and lasts 24–48 hours.'},
  {t:'Starts 48–72 hours after; lasts 24–48 hours', correct:false, why:'48–72 hours is when delayed pigmentation develops (slide 10).'},
  {t:'Starts 5–10 minutes after; lasts weeks to months', correct:false, why:'Weeks to months is the delayed pigmentation (slide 10).'},
  {t:'Starts 12–24 hours after; lasts 7–10 days', correct:false, why:'12–24 hours is the sunburn redness peak (slide 11); 7–10 days is the delayed pigmentation peak (slide 10).'}],
 teach:'Slide 10, UVA tanning: immediate pigmentation starts 5–10 minutes after exposure and lasts 24–48 hours; delayed pigmentation develops in 48–72 hours, peaks at 7–10 days and lasts weeks to months. A deep tan does not protect from sun damage (audio 07:09).',
 cite:HQ_SUN+' slides 10–11; audio 07:09–07:55'},

{id:'L3CH-005', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'h-sunburn-redness-tan',
 tags:['hard','numbers'], source:'both', dupOf:'L3C-021',
 stem:'After a sunburn, when does the reddening peak, and when does a tan follow?',
 options:[
  {t:'Reddening peaks at 12–24 hours; melanogenesis over the next 2–3 days', correct:true, why:'Both times (slide 11; audio 08:21).'},
  {t:'Reddening peaks at 2–3 days; melanogenesis within 12–24 hours', correct:false, why:'The two halves are swapped (slide 11).'},
  {t:'Reddening peaks at 5–10 minutes; melanogenesis over the next 2–3 days', correct:false, why:'5–10 minutes is when immediate pigmentation starts (slide 10).'},
  {t:'Reddening peaks at 24–48 hours; melanogenesis over the next 2–3 weeks', correct:false, why:'Slide 11 gives 12–24 hours and then 2–3 days.'}],
 teach:'Slide 11: sunburn is an inflammatory response with swelling of the endothelium and leakage of red cells from capillaries; histamine, cytokines and prostaglandins are released. Reddening peaks at 12–24 hours, then melanogenesis over 2–3 days gives a tan. Blistering means a second-degree burn.',
 cite:HQ_SUN+' slides 10–11; audio 07:55–09:08'},

{id:'L3CH-006', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'h-spf30-50',
 tags:['hard','numbers'], source:'both', dupOf:'L3C-035',
 stem:'About what share of incoming UVB rays do SPF 30 and SPF 50 block?',
 options:[
  {t:'97% and 98%', correct:true, why:'Slide 15; (audio 14:25–14:47).'},
  {t:'93% and 97%', correct:false, why:'93% is SPF 15; 97% is SPF 30 (slide 15).'},
  {t:'97% and 99%', correct:false, why:'Slide 15: SPF 50 blocks 98%.'},
  {t:'95% and 98%', correct:false, why:'Slide 15: SPF 30 blocks 97%.'}],
 teach:'Slide 15: SPF 15 blocks about 93% of UVB, SPF 30 97%, SPF 50 98%. Past SPF 20–30 the added blocking is small, so for a patient on a budget SPF 15 is a reasonable choice (audio 14:47–15:43).',
 cite:HQ_SUN+' slide 15; audio 14:25–15:43'},

{id:'L3CH-007', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'h-spf-lupus-vs-drug',
 tags:['hard','numbers','counseling'], source:'slide', dupOf:'L3C-039',
 stem:'Which SPF is recommended for a patient with lupus, and which for a patient on a photosensitizing drug?',
 options:[
  {t:'Lupus: SPF > 40; photosensitizing drug: SPF > 45', correct:true, why:'Both cutoffs are on slide 17.'},
  {t:'Lupus: SPF > 45; photosensitizing drug: SPF > 40', correct:false, why:'The two halves are swapped (slide 17).'},
  {t:'Lupus: SPF > 30; photosensitizing drug: SPF > 45', correct:false, why:'SPF > 30 is for skin types I and II with increased cancer risk (slide 17).'},
  {t:'Lupus: SPF 15–24; photosensitizing drug: SPF > 30', correct:false, why:'SPF 15–24 is for skin types III to V (slide 17).'}],
 teach:'Slide 17: skin types I and II with increased skin cancer risk, SPF > 30; lupus, SPF > 40; photosensitizing drugs, SPF > 45; skin types III to V, SPF 15–24. Start high and go low, apply the right amount at the right time, and reapply every 90–120 minutes.',
 cite:HQ_SUN+' slide 17; audio 16:32–17:12'},

{id:'L3CH-008', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'h-skin-type-iv-spf',
 tags:['hard','counseling'], source:'slide',
 stem:'A patient says he burns minimally and tans well every time. Which skin type is this, and which SPF range fits?',
 options:[
  {t:'Type IV; SPF 15–24', correct:true, why:'Slide 16: type IV burns minimally and tans well; slide 17: types III to V use SPF 15 to 24.'},
  {t:'Type IV; SPF > 30', correct:false, why:'SPF > 30 is for types I and II with increased risk (slide 17).'},
  {t:'Type III; SPF > 30', correct:false, why:'Type III sometimes burns and tans gradually (slide 16).'},
  {t:'Type II; SPF 15–24', correct:false, why:'Type II burns easily and tans minimally (slide 16).'}],
 teach:'Slide 16: I, burns easily and does not tan; II, burns easily and tans minimally; III, sometimes burns and tans gradually; IV, burns minimally and tans well; V, rarely burns and tans profusely; VI, deeply pigmented and does not burn. Slide 17 pairs types I–II (increased risk) with SPF > 30 and types III–V with SPF 15–24.',
 cite:HQ_SUN+' slides 16–17'},

{id:'L3CH-009', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'h-cw365-label',
 tags:['hard','reasoning','numbers'], source:'both', dupOf:'L3C-034',
 stem:'A sunscreen has SPF 30 and a critical wavelength of 365 nm. Which labeling applies?',
 options:[
  {t:'Not "broad spectrum", and no skin cancer claim', correct:true, why:'Slide 14: broad spectrum needs a critical wavelength of 370 nm or greater, and the skin cancer and early aging claim needs a broad-spectrum product with SPF 15 or greater (audio 13:10–13:37).'},
  {t:'"Broad spectrum", with the skin cancer claim', correct:false, why:'365 nm is below the 370 nm cutoff (slide 14).'},
  {t:'"Broad spectrum", without the skin cancer claim', correct:false, why:'365 nm does not qualify as broad spectrum (slide 14).'},
  {t:'Not "broad spectrum", but the skin cancer claim, since SPF ≥ 15', correct:false, why:'The claim needs both broad spectrum and SPF 15 or greater (slide 14).'}],
 teach:'Slide 14: UVA protection is judged by the critical wavelength, where 90% of the product\'s absorption has occurred. With 370 nm or more a product may say "broad spectrum"; a broad-spectrum product with SPF 15 or more may say it decreases the risk of skin cancer and early aging caused by the sun. SPF itself measures UVB protection (slide 13).',
 cite:HQ_SUN+' slides 13–14; audio 11:33–14:00'},

{id:'L3CH-010', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'h-cinnamate-vehicle',
 tags:['hard','tell'], source:'slide',
 stem:'Which sunscreen family adheres poorly to the skin and depends on its vehicle for substantivity?',
 options:[
  {t:'Cinnamates', correct:true, why:'Slide 24: cinnamates do not adhere to skin well and depend on the vehicle for substantivity.'},
  {t:'Salicylates', correct:false, why:'Also poorly adherent, but slide 24 describes them as easily removed by water or perspiration.'},
  {t:'Benzophenones', correct:false, why:'Slide 24: poor substantivity and can cause sensitization.'},
  {t:'Dibenzoylmethanes', correct:false, why:'Slide 24: activity starts to decrease after 15 minutes of use.'}],
 teach:'Slide 24: benzophenones, poor substantivity and sensitization; anthranilates, only in combination products for broad coverage; dibenzoylmethanes, activity falls after 15 minutes; aminobenzoates, the most effective UVB absorbers, may stain clothing; cinnamates, poor adherence, depend on the vehicle; salicylates, poor adherence, easily removed by water or sweat.',
 cite:HQ_SUN+' slide 24; audio 22:09'},

{id:'L3CH-011', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'h-aminobenzoate-stain',
 tags:['hard','tell'], source:'slide', dupOf:'L3C-058',
 stem:'Which sunscreen family is the most effective at absorbing UVB and may stain clothing?',
 options:[
  {t:'Aminobenzoates', correct:true, why:'Both properties of aminobenzoates (slide 24).'},
  {t:'Cinnamates', correct:false, why:'Slide 24: they adhere poorly and depend on the vehicle.'},
  {t:'Anthranilates', correct:false, why:'Slide 24: used only in combination products for broad UV coverage.'},
  {t:'Dibenzoylmethanes', correct:false, why:'Slide 24: their activity starts to decrease after 15 minutes of use.'}],
 teach:'Slide 24: aminobenzoates (PABA and its esters) are the most effective UVB absorbers and may stain clothing. Physical sunblocks may stain clothing too (slide 21). PABA carries a higher risk of dermatologic reactions (slide 25).',
 cite:HQ_SUN+' slides 21, 24–25'},

{id:'L3CH-012', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'h-sunblock-water-heat',
 tags:['hard','counseling'], source:'both',
 stem:'Which statement about physical sunblocks such as zinc oxide is correct?',
 options:[
  {t:'Not easily removed by water, but they melt in hot sun', correct:true, why:'Slide 21; protection decreases after 2 hours of direct sun, so reapply in about 2 hours (audio 20:39–21:04).'},
  {t:'Easily removed by water, but stable in the hot sun', correct:false, why:'Slide 21: not easily removed with water, but they melt in hot sun.'},
  {t:'They absorb UV and convert it to heat', correct:false, why:'That is the action of organic sunscreens (slide 22); sunblocks scatter or reflect (slide 20).'},
  {t:'Their nanosize forms are more opaque than the large ones', correct:false, why:'Slide 20: microsize and nanosize forms are less opaque and more cosmetically appealing.'}],
 teach:'Slides 20–21: sunblocks are inorganic particulates (zinc oxide, titanium dioxide) that scatter or reflect visible, UV and infrared radiation; used on exposed areas such as the nose and ears. They may occlude pores (miliaria, folliculitis, acne) and stain clothing; they are not easily removed with water but melt in hot sun; protection falls after 2 hours of direct sun.',
 cite:HQ_SUN+' slides 20–22; audio 20:39–21:04'},

{id:'L3CH-013', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'sub', concept:'h-best-substantivity',
 tags:['hard','tell'], source:'both', dupOf:'L3C-051',
 stem:'Which vehicle gives a sunscreen the best substantivity, though it is not a pleasant dosage form?',
 options:[
  {t:'Oil', correct:true, why:'Slide 19: oils have the best substantivity but are not pleasant dosage forms (audio 18:10, 18:35).'},
  {t:'Polyacrylamide', correct:false, why:'Slide 19: good substantivity because it is not easily washed off, but oils are best.'},
  {t:'Cream', correct:false, why:'Slide 19: better than alcohol-based vehicles, but oils are best.'},
  {t:'Alcohol', correct:false, why:'Slide 19: alcohols have the worst substantivity.'}],
 teach:'Slide 19: substantivity is how well a sunscreen stays on through water and sweat. Alcohols are worst; creams are better than alcohol-based vehicles; polyacrylamide bases are good; oils are best but unpleasant. Choose waterproof, water-resistant or sweat-resistant products.',
 cite:HQ_SUN+' slide 19; audio 17:48–18:55'}
);
