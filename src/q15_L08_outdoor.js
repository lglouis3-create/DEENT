/* ==========================================================================
   Lecture 8 questions, outdoor exposures (Dr. Patel): plant contact
   dermatitis, insect bites and vector-borne disease, stings, lice, scabies,
   venomous spiders and snakes, rabies. Taught Thursday 11/12/2026. Exam 2.
   DRAFT for Louis (not in the bank, not published).
   Source: Patel_Outdoor-Exposures-Student.pdf (67 slides; "slide N" = PDF
   page; only printed slide text is cited, not handwriting) and the transcript
   (T@n 11/12 = character offset in DEENT_Lecture_11.12_transcript.txt, the
   start of the passage quoted; the outdoor part runs T@0 to T@46072, her
   Exam 2 statements from about T@95400, "Focus on treatment algorithms" at T@95722).
   Polls: PollEV_Dr_Patel.pdf has no 11/12 pages and the slides print the case
   stems only. Each poll item keeps her case and her question as she read them
   aloud; the option lists are her own, from PollEV_Dr_Patel_11.12.pdf
   pages 6-7 (Louis's upload of 2026-11-12, after the first draft, whose
   option lists had been rebuilt from her discussion). Two rebuilt keys were
   wrong and are corrected: P8O-019 (bedbug itch) is oral diphenhydramine and
   P8O-041 (lice first line) is permethrin. On "maximum treatment duration for
   self-care" his copy highlights Three Days; she said "Good, 7 days" and
   slides 31 and 39 give 7 days, so 7 days is keyed.
   Not keyed (see outdoor_prediction.md, conflicts): the class of benzyl
   alcohol (counterirritant on slide 13, local anesthetic on slide 39) and of
   calamine (counterirritant on slide 13, skin protectant on slides 25, 39);
   pyrethrins at exactly 2 years and permethrin at exactly 2 months (slide 44
   "< 2", slide 45 "> 2"); repeat lice treatment "7 days" (slide 42) against
   "7 to 10 days" (slide 47): items key 7 to 10 days for the counseling step
   and no option offers 7 days against it; a third round of the same lice
   product (slide 45 "2-3 times" against slide 47 referral after 2 rounds);
   capture of a spider (slide 53) against her "take a picture" (T@37597);
   topical steroids after scabies treatment (slide 51) against slide 40;
   doxycycline "at least 3 days after the fever subsides" (slide 30) against
   her travel reading (T@18488); the rabies stage durations (slide 61; her
   account at T@42731 does not match it); repellent ingredients ("I'm not
   going to ask you certain ingredients that are in repellents", T@11557);
   mosquito types (T@13776); plague and typhus doses (T@15070); the CroFab
   protocol (slide 59, "just for reference", T@42049).
   Select-all items: multi:true, as in q13_L07.js.
   ========================================================================== */
const P8OQ = 'Lecture 8 (Patel_Outdoor-Exposures-Student.pdf)';

TOPIC_DECKS.push(
  {id:'p8o', exam:2, name:'Outdoor Exposure Therapeutics (Dr. Patel)', file:'Patel_Outdoor-Exposures-Student.pdf', when:'taught 11/12 (Exam 2)',
   topics:['p8o-qty', 'p8o-otc', 'p8o-plant', 'p8o-bite', 'p8o-vector', 'p8o-sting', 'p8o-lice', 'p8o-scab', 'p8o-venom', 'p8o-rabies']});

TOPICS.push(
 {id:'p8o-qty', name:'Fingertip units and weight-based doses for outdoor exposures', prof:'Patel',
  cite:'slides 5, 29, 63 · taught 11/12 (Lecture 8)', subs:[
   {id:'calc', name:'Grams and tube size', cite:'slide 5'},
   {id:'wt',   name:'mg/kg doses', cite:'slide 29'}]},
 {id:'p8o-otc', name:'Topical OTC chart: class, condition, comment', prof:'Patel',
  cite:'slides 12–13, 40 · taught 11/12 (Lecture 8)', subs:[
   {id:'chart', name:'The two chart slides', cite:'slides 12–13'}]},
 {id:'p8o-plant', name:'Plant contact dermatitis (poison ivy, oak, sumac)', prof:'Patel',
  cite:'slides 7–16, 18 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her poison ivy case (PollEv)', cite:'slide 18'},
   {id:'path', name:'Urushiol, timing, transfer', cite:'slides 7–10'},
   {id:'tx',   name:'Treatment by wet or dry lesion', cite:'slides 11–15'},
   {id:'fu',   name:'Referral', cite:'slide 16'}]},
 {id:'p8o-bite', name:'Insect bites: non-drug care, OTC choice, counseling, referral', prof:'Patel',
  cite:'slides 20–25, 31–32, 39–40 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her bedbug case (PollEv)', cite:'slide 32'},
   {id:'type', name:'Bites and stings told apart', cite:'slide 20'},
   {id:'np',   name:'Non-drug measures and tick removal', cite:'slide 24'},
   {id:'tx',   name:'OTC treatment and age limits', cite:'slides 25, 39'},
   {id:'fu',   name:'Referral', cite:'slide 31'}]},
 {id:'p8o-vector', name:'Flea-borne and tick-borne disease', prof:'Patel',
  cite:'slides 27–30, 33 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her hunter case (PollEv)', cite:'slide 33'},
   {id:'flea', name:'Murine typhus and plague', cite:'slide 27'},
   {id:'lyme', name:'Lyme disease', cite:'slide 29'},
   {id:'rick', name:'STARI and rickettsial spotted fevers', cite:'slide 30'}]},
 {id:'p8o-sting', name:'Insect stings', prof:'Patel',
  cite:'slides 35–38 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her sting case (PollEv)', cite:'slide 37'},
   {id:'aid',  name:'First aid and treatment', cite:'slides 35, 38'},
   {id:'fu',   name:'Emergency care and referral', cite:'slide 36'}]},
 {id:'p8o-lice', name:'Pediculosis (lice)', prof:'Patel',
  cite:'slides 42–48 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her pediculosis case (PollEv)', cite:'slide 48'},
   {id:'excl', name:'Exclusions for self-treatment', cite:'slide 44'},
   {id:'prod', name:'Pediculicides and age limits', cite:'slide 45'},
   {id:'use',  name:'Counseling and follow-up', cite:'slides 45, 47'}]},
 {id:'p8o-scab', name:'Scabies', prof:'Patel',
  cite:'slides 50–51 · taught 11/12 (Lecture 8)', subs:[
   {id:'tx', name:'Treatment options and itch after treatment', cite:'slides 50–51'}]},
 {id:'p8o-venom', name:'Venomous spiders and snakes', prof:'Patel',
  cite:'slides 52–58, 65 · taught 11/12 (Lecture 8)', subs:[
   {id:'spider', name:'Brown recluse and black widow', cite:'slides 52–53'},
   {id:'snake',  name:'Snake bite first aid and medical care', cite:'slides 54, 56–57, 65'},
   {id:'sev',    name:'Pit viper envenomation severity', cite:'slide 58'}]},
 {id:'p8o-rabies', name:'Rabies exposure', prof:'Patel',
  cite:'slides 62–63 · taught 11/12 (Lecture 8)', subs:[
   {id:'pep', name:'First steps and postexposure prophylaxis', cite:'slides 62–63'}]}
);

QUESTIONS.push(
/* ---- Fingertip units (slide 5) -------------------------------------------- */
{id:'P8O-001', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'p8o-ftu-feet-bid-3d',
 tags:['poll','verbatim','calc'], source:'both',
 quote:'11/12 (T@1904): "An adult female has been prescribed hydrocortisone 1% cream twice a day for 3 days to treat ant bites on both feet ... What would be the most appropriate tube size to dispense?"',
 stem:"An adult female has been prescribed hydrocortisone 1% cream twice daily x 3 days to treat ant bites on both feet. What would be the most appropriate tube size to dispense?",
 options:[
  {t:"15 grams", correct:true, why:"Slide 5: one foot including toes 2 FTU, so 4 FTU; 4 × 0.5 g = 2 g; × 2 a day × 3 days = 12 g; round up to 15 g (T@2209–2436 11/12)."},
  {t:"30 grams", correct:false, why:"30 g fits 1 g per FTU (24 g); one FTU is about 0.5 g (slide 5)."},
  {t:"60 grams", correct:false, why:"60 g fits one leg including the foot (8 FTU) used for a week, not two feet for 3 days."},
  {t:"90 grams", correct:false, why:"12 g is needed (slide 5); 90 g is more than seven times that."}],
 teach:'Grams = FTU × 0.5 × applications a day × days. "It’s come back 3 times now, so make sure you practice calculations" (T@1737 11/12).',
 cite:P8OQ+' slide 5; T@1737, T@1904–2436 11/12'},

{id:'P8O-002', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'p8o-ftu-arm-bid-5d',
 tags:['calc','new-patient'], source:'both',
 stem:'An adult man is to apply hydrocortisone 1% cream twice a day for 5 days to mosquito bites over one arm, including the entire hand. Tubes come in 15 g, 30 g, 45 g and 60 g. Which is the most appropriate size?',
 options:[
  {t:'15 g', correct:false, why:'15 g fits once-daily use (10 g). Twice a day doubles it.'},
  {t:'30 g', correct:true, why:'Slide 5: one arm including entire hand 4 FTU; 4 × 0.5 g = 2 g; × 2 × 5 = 20 g; round up to 30 g.'},
  {t:'45 g', correct:false, why:'45 g fits 1 g per FTU (40 g); one FTU is about 0.5 g (slide 5).'},
  {t:'60 g', correct:false, why:'60 g fits one leg including the foot (8 FTU) for a week.'}],
 teach:'One arm including the hand is 4 FTU; one hand alone is 1 FTU (slide 5).',
 cite:P8OQ+' slide 5; T@2209 11/12'},

{id:'P8O-003', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'p8o-ftu-leg-bid-7d',
 tags:['calc','new-patient'], source:'both',
 stem:'An adult woman has dry poison ivy dermatitis over one leg, including the foot. She will apply hydrocortisone 1% cream twice a day for 7 days. Tubes come in 15 g, 30 g, 45 g and 60 g. Which is the most appropriate size?',
 options:[
  {t:'15 g', correct:false, why:'15 g fits one foot (2 FTU) twice a day for 7 days (14 g).'},
  {t:'30 g', correct:false, why:'30 g fits once-daily use (28 g).'},
  {t:'45 g', correct:false, why:'56 g is needed; 45 g runs out before day 7.'},
  {t:'60 g', correct:true, why:'Slide 5: one leg including foot 8 FTU; 8 × 0.5 g = 4 g; × 2 × 7 = 56 g; round up to 60 g.'}],
 teach:'One leg including the foot is 8 FTU; one foot including toes is 2 FTU (slide 5).',
 cite:P8OQ+' slide 5; T@2209 11/12'},

/* ---- Topical OTC chart (slides 12-13) ------------------------------------- */
{id:'P8O-004', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-otc', sub:'chart', concept:'p8o-topical-diphenhydramine-avoid', multi:true,
 tags:['list'], source:'both',
 stem:'Topical diphenhydramine should be avoided in which of these? Select all that apply.',
 options:[
  {t:'Chicken pox', correct:true, why:'Slide 12, avoid use: chicken pox (T@5763 11/12).'},
  {t:'Plant dermatitis', correct:true, why:'Slide 12, avoid use: plant dermatitis; slide 14: "Do NOT use topical antihistamines" (T@7173 11/12).'},
  {t:'Sunburn', correct:true, why:'Slide 12, avoid use: sunburn.'},
  {t:'A mosquito bite on intact skin', correct:false, why:'Slide 12: insect bites and stings are its listed condition.'},
  {t:'A bee sting on intact skin', correct:false, why:'Slide 12: insect bites and stings are its listed condition.'}],
 teach:'Topical diphenhydramine 0.5 to 2%: insect bites and stings. Avoid in chicken pox, plant dermatitis, sunburn and broken, oozing skin (slide 12).',
 cite:P8OQ+' slides 12, 14; T@5763, T@7173 11/12'},

{id:'P8O-005', skill:'adverse', prof:'Patel', tier:'new', topic:'p8o-otc', sub:'chart', concept:'p8o-caines-methemoglobinemia',
 tags:['tell'], source:'slide',
 stem:'A father uses benzocaine spray many times a day on his daughter’s insect stings. Which adverse effect is a concern with the "caine" anesthetics?',
 options:[
  {t:'Masking of a fungal infection', correct:false, why:'That is hydrocortisone: steroids can mask or worsen scabies, bacterial and fungal infections (slide 40).'},
  {t:'Nephrotoxicity', correct:false, why:'Nephrotoxicity is cyclosporine (Lecture 7), not a topical anesthetic.'},
  {t:'Methemoglobinemia', correct:true, why:'Slide 12: ADE (the "caines"): methemoglobinemia.'},
  {t:'Tissue necrosis', correct:false, why:'Tissue necrosis is the brown recluse bite (slide 52).'}],
 teach:'Topical anesthetics (pramoxine, benzocaine, dibucaine, lidocaine): not under an occlusive dressing, not on broken skin (slide 12).',
 cite:P8OQ+' slide 12'},

{id:'P8O-006', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-otc', sub:'chart', concept:'p8o-anesthetic-no-occlusion',
 tags:['counsel'], source:'both',
 stem:'A woman buys lidocaine cream for wasp stings on her forearm. Which counseling point belongs to this product class?',
 options:[
  {t:'Use it as a soak or wet dressing', correct:false, why:'That is the astringents, aluminum acetate (slide 15).'},
  {t:'It can be used in children under 2 years', correct:false, why:'That is the skin protectants (slide 39). Local anesthetics: not under 2 years.'},
  {t:'Avoid it in chicken pox and sunburn', correct:false, why:'That is topical diphenhydramine (slide 12). Sunburn is a listed use of topical anesthetics.'},
  {t:'Do not cover it with an occlusive dressing', correct:true, why:'Slide 12: "Do not use under occlusive dressing or on broken skin" (T@5679 11/12).'}],
 teach:'"Pay attention to the derm condition ... and the comments that are provided for you" (T@5531, T@6855 11/12).',
 cite:P8OQ+' slides 12, 15, 39; T@5679 11/12'},

{id:'P8O-007', skill:'class', prof:'Patel', tier:'new', topic:'p8o-otc', sub:'chart', concept:'p8o-witch-hazel-astringent',
 tags:['tell'], source:'both',
 stem:'Witch hazel belongs to which class of topical OTC products, and what is that class used for?',
 options:[
  {t:'Astringent; wet or weeping dermatitis', correct:true, why:'Slide 13: astringents (aluminum acetate, witch hazel): wet or weeping plant or atopic dermatitis; vasoconstriction, cooling and drying, retard oozing (T@6271 11/12).'},
  {t:'Counterirritant; dry plant dermatitis', correct:false, why:'The counterirritant row lists phenol, camphor, menthol (slide 13).'},
  {t:'Astringent; dry plant dermatitis', correct:false, why:'Right class, wrong lesion: astringents are for wet or weeping lesions (slide 13).'},
  {t:'Skin protectant; children under 2 years', correct:false, why:'Skin protectants are zinc oxide, calamine, petrolatum (slides 25, 39).'}],
 teach:'"Go back to that chart to really understand what witch hazel’s benefits are" (T@19887 11/12).',
 cite:P8OQ+' slide 13; T@6271, T@19887 11/12'},

{id:'P8O-008', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-otc', sub:'chart', concept:'p8o-hc-not-on-infections',
 tags:['counsel'], source:'both',
 stem:'On which of these should OTC hydrocortisone NOT be used?',
 options:[
  {t:'Wet poison ivy dermatitis', correct:false, why:'Slide 12: plant dermatitis, wet or dry, is a listed use.'},
  {t:'An itchy rash from untreated scabies', correct:true, why:'Slide 40: "Do not use Hydrocortisone on scabies, bacterial infections, or fungal infections"; steroids can mask or worsen them (T@25700 11/12).'},
  {t:'Very mild psoriasis', correct:false, why:'Slide 12: very mild psoriasis is a listed use.'},
  {t:'A wasp sting in a 7-year-old', correct:false, why:'Slide 12: insect bites and stings; the age limit is under 2 years.'}],
 teach:'Hydrocortisone: not under 2 years; not on scabies, bacterial or fungal infections (slides 12, 40).',
 cite:P8OQ+' slides 12, 40; T@25700 11/12'},

/* ---- Plant contact dermatitis (slides 7-18) -------------------------------- */
{id:'P8O-009', skill:'case', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'case', concept:'p8o-ivy-case-itch',
 tags:['poll','verbatim','case'], source:'both',
 quote:'11/12 (T@8352): "So which of the following medications would be the most appropriate treatment option for this patient?"',
 stem:'CC: "The itching won’t stop!" HPI: Patient reports she went hiking 2 days ago, has vesicles and papules on erythematous skin on her legs and ankles. She thinks she hiked through poison ivy. Physical Exam: Vesicles and papules on red skin. Vesicles are not open and there is no weeping. PMH: Hypertension. Medications: Lisinopril 10 mg q HS daily. Which of the following medications would be the most appropriate treatment option for this patient?',
 options:[
  {t:"Diphenhydramine 25 mg PO Q6H PRN Itching", correct:true, why:"Slide 14: an oral antihistamine reduces itching. \"What are we treating with this patient? Itching ... An oral antihistamine\" (T@9025 11/12). \"Any oral antihistamine is appropriate\" (T@9933)."},
  {t:"Aluminum Acetate Compress", correct:false, why:"\"B would treat weeping ... it was noted that there was no weeping\" (T@9159 11/12; slides 13, 15)."},
  {t:"Diphenhydramine 2% cream applied as directed PRN Itching", correct:false, why:"\"We are not going to use a topical antihistamine\" (T@9025 11/12); slide 14."},
  {t:"Patient is not a self care candidate, refer to PCP", correct:false, why:"None of the slide 16 referral reasons is present: 2 days in, legs and ankles, no sign of infection."}],
 teach:'Read the exam finding: no weeping means no astringent; the complaint is itch (slide 14).',
 cite:P8OQ+' slides 14, 18; T@8352–9159, T@9933 11/12'},

{id:'P8O-010', skill:'case', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'case', concept:'p8o-ivy-weeping-astringent',
 tags:['poll','verbatim','case'], source:'both',
 quote:'11/12 (T@9338): "to reduce weeping from a rash due to poison ivy, what would be the best option here?"',
 stem:"What would be the best product to reduce weeping from a rash due to poison ivy exposure?",
 options:[
  {t:"Aluminum Acetate", correct:true, why:"Slides 13, 15: astringent; reduces weeping and decreases itch; used as a soak or wet dressing. \"Aluminum acetate would be the most beneficial to treat weeping\" (T@9484 11/12)."},
  {t:"Bentoquatum", correct:false, why:"Not among the plant dermatitis treatments on slides 11–15."},
  {t:"Hydrocortisone", correct:false, why:"Treats pruritus and inflammation in wet or dry plant dermatitis (slide 12); the astringent is what reduces weeping (slide 13)."},
  {t:"Urushiol", correct:false, why:"Urushiol is the plant's oily irritant, the cause of the rash (slide 8)."}],
 teach:'Wet or weeping: astringent (aluminum acetate, Burow’s solution; aluminum sulfate/calcium acetate) as a soak or wet dressing (slide 15).',
 cite:P8OQ+' slides 13, 15; T@9338–9484 11/12'},

{id:'P8O-011', skill:'case', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'tx', concept:'p8o-ivy-dry-topical-choice',
 tags:['case','new-patient'], source:'both',
 stem:'A 30-year-old gardener has an itchy poison ivy rash on one forearm for 2 days. The vesicles are closed and dry. He already takes an oral antihistamine and asks for a product to put on the rash. Which is appropriate?',
 options:[
  {t:'Diphenhydramine 2% cream', correct:false, why:'Slide 12: avoid topical diphenhydramine in plant dermatitis; slide 14.'},
  {t:'Bacitracin ointment', correct:false, why:'Slide 14: no topical antibiotics for plant dermatitis; slide 13: minor burns and cuts.'},
  {t:'Pramoxine cream', correct:true, why:'Slide 12: topical anesthetics are listed for plant dermatitis (dry); the skin is intact.'},
  {t:'Aluminum acetate wet dressing', correct:false, why:'Astringents are for wet or weeping lesions (slides 13, 15); his are dry.'}],
 teach:'Dry plant dermatitis: hydrocortisone, a topical anesthetic or a counterirritant. Wet: hydrocortisone or an astringent (slides 12–13).',
 cite:P8OQ+' slides 12–15; T@5531–6271 11/12'},

{id:'P8O-012', skill:'patho', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'path', concept:'p8o-ivy-rash-timing',
 tags:['two-facts'], source:'both',
 stem:'A camper asks when a poison ivy rash appears after exposure and how long it continues. Which answer is correct?',
 options:[
  {t:'Within 10 minutes; continues 1–3 weeks', correct:false, why:'10 minutes is how fast urushiol enters the skin (slide 8), not when the rash appears.'},
  {t:'2–48 hours; continues up to 7 days', correct:false, why:'Referral follows 7 days without improvement (slide 16); the rash continues 1–3 weeks.'},
  {t:'2–14 days; continues 1–3 weeks', correct:false, why:'2 to 14 days is when tick-borne symptoms occur (slide 28).'},
  {t:'2–48 hours; continues 1–3 weeks', correct:true, why:'Slide 8: "Rash may appear 2 – 48 hours after exposure; Rash continues for 1 – 3 weeks" (T@3128 11/12).'}],
 teach:'Urushiol enters skin within 10 minutes; rash in 2–48 hours; lasts 1–3 weeks with or without treatment (slides 8, 11).',
 cite:P8OQ+' slides 8, 11, 16; T@3049–3128 11/12'},

{id:'P8O-013', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'path', concept:'p8o-urushiol-removal',
 tags:['counsel','next-step'], source:'both',
 stem:'A hiker says her bare arm brushed poison ivy about 5 minutes ago. No rash yet. What should she do first?',
 options:[
  {t:'Apply hydrocortisone 1% before a rash forms', correct:false, why:'Hydrocortisone treats pruritus and inflammation (slide 12); the first step is removing urushiol (slide 9).'},
  {t:'Rinse with water, then wash with soap', correct:true, why:'Slide 9: "If exposed, remove urushiol as soon as possible": rinse with large volumes of water; wash with soap and water, remember under nails (T@3815 11/12).'},
  {t:'Take an oral antihistamine and wash tonight', correct:false, why:'Urushiol enters skin within 10 minutes (slide 8); washing cannot wait.'},
  {t:'Apply an aluminum acetate wet dressing', correct:false, why:'Astringents reduce weeping from lesions (slide 15); there are none yet.'}],
 teach:'Urushiol enters the skin within 10 minutes (slide 8). Other agents named: Tecnu, Zanfel, Dial Ultra dishwashing soap (slide 9).',
 cite:P8OQ+' slides 8–9; T@3049, T@3815 11/12'},

{id:'P8O-014', skill:'patho', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'path', concept:'p8o-vesicle-fluid-not-antigenic',
 tags:['counsel'], source:'slide',
 stem:'A mother asks whether fluid from her son’s poison ivy vesicles can give the rash to his sister. What is the answer?',
 options:[
  {t:'Yes; vesicle fluid carries urushiol for 48 hours', correct:false, why:'48 hours is the outer limit for the rash to appear (slide 8). The vesicles do not contain antigenic material (slide 10).'},
  {t:'No; urushiol is inactive once it dries', correct:false, why:'Slide 9: urushiol remains active on dead, dried plants or contaminated objects for several years.'},
  {t:'No; vesicles do not contain antigenic material', correct:true, why:'Slide 10: vesicles, papules "*Do not contain antigenic material".'},
  {t:'Yes; vesicle fluid spreads it for 1–3 weeks', correct:false, why:'1–3 weeks is how long the rash continues (slide 8), not a period of spread from vesicle fluid (slide 10).'}],
 teach:'Urushiol transfers from the plant, hands, pets or objects (slide 9), not from vesicle fluid (slide 10).',
 cite:P8OQ+' slides 8–10'},

{id:'P8O-015', skill:'case', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'fu', concept:'p8o-ivy-referral-list', multi:true,
 tags:['list','referral'], source:'both',
 stem:'Which findings in a patient with poison ivy dermatitis call for referral to a physician? Select all that apply.',
 options:[
  {t:'No improvement after 7 days of treatment', correct:true, why:'Slide 16 (T@7658 11/12).'},
  {t:'Swelling of the eyelids', correct:true, why:'Slide 16: rash covers large area of face or swelling of eyelids (T@7821 11/12).'},
  {t:'Rash that involves the genitalia', correct:true, why:'Slide 16.'},
  {t:'Closed vesicles in a line on one forearm', correct:false, why:'The usual presentation (slide 10); self-care candidate.'},
  {t:'Rash that is improving at day 10', correct:false, why:'Symptoms can last up to 3 weeks (slide 16); improvement is expected.'}],
 teach:'Refer: no improvement after 7 days, symptoms worse, large area of face or swollen eyelids, genitalia, secondary infection (slide 16).',
 cite:P8OQ+' slides 10, 16; T@7658–8154 11/12'},

{id:'P8O-016', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-plant', sub:'tx', concept:'p8o-oatmeal-bath',
 tags:['counsel'], source:'slide',
 stem:'How is a colloidal oatmeal bath used for the itch of plant contact dermatitis?',
 options:[
  {t:'Soak 10 minutes once daily, then rub dry', correct:false, why:'10 minutes is the lice product time (slide 45). Slide 14: 15–20 minutes BID, pat dry.'},
  {t:'Soak 15–20 minutes twice daily, then pat dry', correct:true, why:'Slide 14: sprinkle into fast-running bath water; soak 15–20 minutes BID; pat skin dry rather than wiping; very slippery.'},
  {t:'Soak 15–20 minutes 3–4 times daily, then pat dry', correct:false, why:'3–4 times daily is how local anesthetics and counterirritants are applied (slide 39).'},
  {t:'Apply as a wet dressing twice daily', correct:false, why:'A soak or wet dressing is how the astringents are used (slide 15).'}],
 teach:'Colloidal oatmeal: 15–20 minutes BID, pat dry, the tub is very slippery (slide 14).',
 cite:P8OQ+' slides 14–15, 39'},

/* ---- Insect bites (slides 20-25, 31-32, 39-40) ------------------------------ */
{id:'P8O-017', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'type', concept:'p8o-stinging-insects', multi:true,
 tags:['list','tell'], source:'both',
 stem:'Which of these sting (venomous) rather than bite (nonvenomous)? Select all that apply.',
 options:[
  {t:'Fire ants', correct:true, why:'Slide 20: stings: bees, wasps, yellow jackets, hornets, fire ants.'},
  {t:'Yellow jackets', correct:true, why:'Slide 20.'},
  {t:'Hornets', correct:true, why:'Slide 20.'},
  {t:'Chiggers', correct:false, why:'Slide 20: bites (nonvenomous): mosquitoes, fleas, bedbugs, ticks, chiggers, most spiders.'},
  {t:'Bedbugs', correct:false, why:'Slide 20: bites (nonvenomous).'}],
 teach:'"Pay attention to what insects fall under the bites versus the stings" (T@10123 11/12). Disease vectors: mosquitoes, fleas, ticks (slide 20).',
 cite:P8OQ+' slide 20; T@10123 11/12'},

{id:'P8O-018', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'np', concept:'p8o-tick-removal',
 tags:['counsel','next-step'], source:'both',
 stem:'A man finds a tick attached to his calf and asks how to remove it. Which instruction is correct?',
 options:[
  {t:'Grasp the head with tweezers and pull gently; keep the tick', correct:true, why:'Slide 24: remove ticks with tweezers by grasping the tick’s head and gently pulling; remove the head; clean with rubbing alcohol; keep tick in plastic bag (T@12403 11/12).'},
  {t:'Scrape it off with a card edge; discard the tick', correct:false, why:'Slide 24 says tweezers and to keep the tick in a plastic bag, "so that way we can address if it is a certain tick" (T@12403).'},
  {t:'Apply rubbing alcohol first so the tick detaches', correct:false, why:'Rubbing alcohol disinfects the skin after removal (slide 24).'},
  {t:'Apply ice for 10 minutes, then pull it off by hand', correct:false, why:'Ice reduces swelling, itching and pain (slide 24); the tick comes off with tweezers.'}],
 teach:'Tweezers at the head, gentle pull, remove the head, rubbing alcohol on the skin, tick in a plastic bag (slide 24).',
 cite:P8OQ+' slide 24; T@12403–12646 11/12'},

{id:'P8O-019', skill:'case', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'case', concept:'p8o-bedbug-case-itch',
 tags:['poll','case','verbatim'], source:'both',
 quote:'11/12 (T@19589): "So which of the following would be the most appropriate and effective to treat the prurritis caused by bedbugs?" Her named wrong options: witch hazel; a neomycin product (T@19887). She did not say the right option aloud.',
 stem:'CC: "The itching won’t stop!" HPI: A 23 y/o male presents with bedbug bites from a cheap hotel in Las Vegas. States bites are very itchy, and he would like a recommendation for an OTC product. He has showered multiple times and got rid of the suitcase that he used. Physical Exam: Located on lower legs and torso. PMH: None. Medications: None. Allergies: Neomycin (worsened rash). Which of the following would be the most appropriate and effective to treat pruritus caused by bug bites?',
 options:[
  {t:"Oral Diphenhydramine", correct:true, why:"Slide 25 lists oral antihistamines for insect bites; the itch is on the legs and torso. Marked as the answer on the 11/12 PollEv."},
  {t:"Witch Hazel", correct:false, why:"An astringent for wet or weeping dermatitis (slide 13). \"It’s more so for that inflammation\" (T@19887 11/12)."},
  {t:"Neosporin", correct:false, why:"He is allergic to neomycin, which Neosporin contains (T@19887 11/12); topical antibiotics are for minor burns and cuts (slide 13)."},
  {t:"None of the above, refer to PCP", correct:false, why:"Itchy bites with no systemic symptoms are self-treatable for up to 7 days (slide 31)."}],
 teach:'Check the allergy line before choosing. Insect bite options: skin protectants, hydrocortisone, topical anesthetics, counterirritants, oral antihistamines (slide 25).',
 cite:P8OQ+' slides 12–13, 25, 32; T@19218–19887 11/12'},

{id:'P8O-020', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'case', concept:'p8o-bite-selfcare-7d',
 tags:['poll','verbatim','case'], source:'both',
 quote:'11/12 (T@20142): "So what is the maximum amount of treatment duration used for self-care? Good, 7 days."',
 stem:"Same patient (23-year-old man with itchy bedbug bites). What is the maximum amount of treatment duration used for self-care?",
 options:[
  {t:"Three Days", correct:false, why:"3 days is the ant-bite calculation case (T@1904 11/12), not the self-care limit."},
  {t:"Seven Days", correct:true, why:"Slides 31, 39: refer if symptoms persist after 7 days; do not use longer than 7 days. \"Good, 7 days\" (T@20142 11/12)."},
  {t:"Ten Days", correct:false, why:"10 days is doxycycline for erythema migrans (slide 29)."},
  {t:"Fourteen Days", correct:false, why:"14 days is the topical corticosteroid limit from Lecture 5 and amoxicillin for Lyme (slide 29)."}],
 teach:'"What other lecture did we talk about 7 days referral? Quite a few of them ... make note of the certain duration of time" (T@20142–20438 11/12).',
 cite:P8OQ+' slides 31, 39; T@20142–20438 11/12'},

{id:'P8O-021', skill:'case', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'fu', concept:'p8o-bite-day8-refer',
 tags:['case','new-patient','next-step','what-was-tried'], source:'both',
 stem:'A 40-year-old woman has used hydrocortisone 1% cream on chigger bites around both ankles for 8 days. The itch and papules are unchanged. No fever. She asks what to try next. What is the best response?',
 options:[
  {t:'Change to pramoxine for another 7 days', correct:false, why:'Slide 31: symptoms that persist after 7 days of treatment are referred, whatever the product.'},
  {t:'Continue hydrocortisone to day 14', correct:false, why:'Slide 39 and slide 31 use 7 days; 14 days is the Lecture 5 corticosteroid limit.'},
  {t:'Refer her to a physician', correct:true, why:'Slide 31: refer if symptoms persist after 7 days of treatment (T@18829 11/12).'},
  {t:'Add an oral antihistamine and recheck in a week', correct:false, why:'An oral antihistamine is a treatment option (slide 25), but after 7 days without improvement she is referred (slide 31).'}],
 teach:'Insect bite referral: persist after 7 days, worsen during treatment, or secondary infection signs (slide 31).',
 cite:P8OQ+' slides 25, 31, 39; T@18829 11/12'},

{id:'P8O-022', skill:'case', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'fu', concept:'p8o-bite-referral-signs', multi:true,
 tags:['list','referral'], source:'both',
 stem:'A patient is self-treating insect bites. Which developments call for referral to a physician? Select all that apply.',
 options:[
  {t:'Fever', correct:true, why:'Slide 31: secondary infection signs: fever, joint pain, lymph node enlargement, neurologic symptoms (T@19024 11/12).'},
  {t:'Joint pain', correct:true, why:'Slide 31.'},
  {t:'Lymph node enlargement', correct:true, why:'Slide 31.'},
  {t:'Mild pruritus at the bite on day 2', correct:false, why:'Slide 20: mild pruritus, erythema and papules are the local effects of a bite.'},
  {t:'A red papule at the bite on day 1', correct:false, why:'Slide 20: the expected local effect.'}],
 teach:'Refer: symptoms persist after 7 days, worsen during treatment, or fever, joint pain, lymph nodes, neurologic symptoms (slide 31).',
 cite:P8OQ+' slides 20, 31; T@18829–19024 11/12'},

{id:'P8O-023', skill:'case', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'tx', concept:'p8o-bite-under-2-protectant',
 tags:['case','new-patient','age'], source:'both',
 stem:'A mother asks for an OTC product for mosquito bites on the legs of her 18-month-old son. The skin is intact and he is otherwise well. Which is appropriate?',
 options:[
  {t:'Hydrocortisone 1% cream', correct:false, why:'Slide 12: do not use on a child under 2 years old. "We’re not gonna recommend corticosteroids in that age group" (T@12830 11/12).'},
  {t:'Pramoxine cream', correct:false, why:'Slide 39: local anesthetics, do not use on children younger than 2 years.'},
  {t:'Camphor and menthol lotion', correct:false, why:'Slide 39: counterirritants, do not use on children younger than 2 years.'},
  {t:'Zinc oxide skin protectant', correct:true, why:'Slides 25, 39: skin protectants can be used in children younger than 2 years (T@12830, T@25472 11/12).'}],
 teach:'Under 2 years: skin protectant only (petrolatum, calamine, zinc oxide), as needed up to 4 times daily (slides 25, 39).',
 cite:P8OQ+' slides 12, 25, 39; T@12830, T@25472 11/12'},

{id:'P8O-024', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'tx', concept:'p8o-anesthetic-frequency',
 tags:['counsel','two-facts'], source:'both',
 stem:'A 9-year-old has several itchy mosquito bites and his father chooses a pramoxine product. How should it be used?',
 options:[
  {t:'3–4 times daily, for no longer than 7 days', correct:true, why:'Slide 39: local anesthetics, counterirritants: apply to the bite area 3–4 times daily; do not use longer than 7 days (T@24838 11/12).'},
  {t:'Twice daily, for no longer than 7 days', correct:false, why:'Twice daily is the oatmeal soak (slide 14). Slide 39: 3–4 times daily.'},
  {t:'3–4 times daily, for no longer than 14 days', correct:false, why:'Slide 39: not longer than 7 days.'},
  {t:'Once daily under a dressing, for 7 days', correct:false, why:'Slide 12: not under an occlusive dressing; slide 39: 3–4 times daily.'}],
 teach:'Local anesthetics and counterirritants: 3–4 times daily, not under 2 years, not longer than 7 days (slide 39).',
 cite:P8OQ+' slides 12, 39; T@24838 11/12'},

{id:'P8O-025', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-bite', sub:'tx', concept:'p8o-pramoxine-less-sensitizing',
 tags:['tell'], source:'both',
 stem:'A patient has reacted to a topical anesthetic before and asks which one is less likely to cause sensitization. Which is it?',
 options:[
  {t:'Benzocaine', correct:false, why:'On the anesthetic list (slide 12), but slide 39 names pramoxine as less likely to sensitize.'},
  {t:'Dibucaine', correct:false, why:'On the anesthetic list (slide 12); not the one slide 39 names.'},
  {t:'Lidocaine', correct:false, why:'On the anesthetic list (slide 12); not the one slide 39 names.'},
  {t:'Pramoxine', correct:true, why:'Slide 39: "Local anesthetics - Pramoxine or Benzyl Alcohol: Less likely to cause sensitization or adverse effects" (aloud she named benzyl alcohol, T@25017 11/12).'}],
 teach:'Pramoxine: less likely to cause sensitization or adverse effects (slide 39).',
 cite:P8OQ+' slides 12, 39; T@25017 11/12'},

/* ---- Flea-borne and tick-borne disease (slides 27-30, 33) -------------------- */
{id:'P8O-026', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'case', concept:'p8o-hunter-case-referral',
 tags:['poll','verbatim','case'], source:'both',
 quote:'11/12 (T@20489): "So in terms of what is the most appropriate treatment option at this time. What would we recommend?" ... "So B would be the correct answer here, so immediate medical referral." (T@21518)',
 stem:'HPI: A 24-year-old man comes into the pharmacy asking for recommendations regarding his flu-like symptoms. He says that he has been feeling ill and has had muscle aches for a couple of days. The pharmacist asks about other symptoms; the patient says that he has a skin rash on his leg, and the rash started several days after he returned from a hunting trip to Minnesota about 10 days ago. He has taken off work for 2 days to rest and drink fluids, however, the symptoms persist. What is the most appropriate treatment option at this time?',
 options:[
  {t:"Cold and Flu OTC medication", correct:false, why:"Flu-like symptoms with a rash after a trip to a tick area point to a vector-borne disease: refer (slides 28, 40)."},
  {t:"Immediate Medical Referral", correct:true, why:"\"That duration ... as well as feeling ill ... it’s been about 10 days ... So B would be the correct answer here, so immediate medical referral\" (T@21518 11/12). Slides 28, 31, 40."},
  {t:"Monitor symptoms for 3-5 days, then if no relief seek medical advice", correct:false, why:"He has already rested for 2 days and the symptoms persist; systemic symptoms and a rash need referral now (slides 28, 31)."},
  {t:"Take No Action", correct:false, why:"Tick-borne symptoms occur 2 to 14 days after the bite (slide 28); they need treatment."}],
 teach:'Tick-borne symptoms occur 2 to 14 days after the bite: fever, headache, myalgias, rash (slide 28).',
 cite:P8OQ+' slides 28, 31, 33, 40; T@20489–21518 11/12'},

{id:'P8O-027', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'flea', concept:'p8o-typhus-doxycycline',
 tags:['case','new-patient'], source:'both',
 stem:'A Texas man who feeds stray cats has had headache, fever, nausea and body aches for a week. Yesterday a rash began on his trunk and it is spreading to his arms and legs. His physician diagnoses murine typhus. Which antibiotic treats it?',
 options:[
  {t:'Streptomycin', correct:false, why:'On the bubonic plague list (slide 27).'},
  {t:'Amoxicillin', correct:false, why:'A Lyme erythema migrans option (slide 29).'},
  {t:'Ciprofloxacin', correct:false, why:'On the bubonic plague list (slide 27).'},
  {t:'Doxycycline', correct:true, why:'Slide 27: murine typhus (Rickettsia typhi), Rx: doxycycline. "Doxycycline for our ... typhi flea-borne disease" (T@14578 11/12).'}],
 teach:'"I don’t need you to know dosing, but just understand which antibiotic would treat which flea-borne disease ... it’s bolded for a reason" (T@15070 11/12).',
 cite:P8OQ+' slide 27; T@14578, T@15070 11/12'},

{id:'P8O-028', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'flea', concept:'p8o-typhus-rash-pattern',
 tags:['tell','two-facts'], source:'both',
 stem:'How does the rash of murine typhus behave?',
 options:[
  {t:'Starts on the trunk 5–6 days after first symptoms, then spreads to the limbs', correct:true, why:'Slide 27: "Five or six days after the initial symptoms - a rash that starts on the trunk of the body and spreads to arms and legs" (T@14232 11/12).'},
  {t:'Starts on the limbs 5–6 days after first symptoms, then spreads to the trunk', correct:false, why:'Direction reversed: trunk first, then arms and legs (slide 27).'},
  {t:'Starts at the bite 2–48 hours after exposure, then forms a line of vesicles', correct:false, why:'2–48 hours and a line of vesicles describe poison ivy (slides 8, 10).'},
  {t:'Starts on the trunk 6–14 days after first symptoms, then stays on the trunk', correct:false, why:'6 to 14 days is the incubation period (slide 27); the rash spreads to arms and legs.'}],
 teach:'Murine typhus in Texas: carriers cats, rodents, opossums; incubation 6–14 days; untreated, may last several months (slide 27).',
 cite:P8OQ+' slides 8, 10, 27; T@14232 11/12'},

{id:'P8O-029', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'flea', concept:'p8o-plague-antibiotic',
 tags:['tell'], source:'both',
 stem:'A rancher in the Southwest U.S. is diagnosed with bubonic plague (Yersinia pestis). Which of these treats plague?',
 options:[
  {t:'Cefuroxime axetil', correct:false, why:'A Lyme erythema migrans option (slide 29).'},
  {t:'Levofloxacin', correct:true, why:'Slide 27: streptomycin, ciprofloxacin, levofloxacin, moxifloxacin, doxycycline, aminoglycosides (T@14952 11/12).'},
  {t:'Azithromycin', correct:false, why:'The second-line Lyme agent (slide 29).'},
  {t:'Amoxicillin', correct:false, why:'A Lyme erythema migrans option (slide 29).'}],
 teach:'Plague: flea carriers are rodents and pet cats and dogs; doxycycline is on both flea-borne lists (slide 27).',
 cite:P8OQ+' slides 27, 29; T@14952 11/12'},

{id:'P8O-030', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'lyme', concept:'p8o-lyme-prophylaxis-72h',
 tags:['case','new-patient'], source:'both',
 stem:'A 35-year-old woman removed a black-legged (Ixodes) tick yesterday after a weekend in a high-endemic area; it had been attached for about 2 days. She has no rash and no symptoms. Which prophylaxis regimen is appropriate?',
 options:[
  {t:'Doxycycline 100 mg twice daily for 10 days', correct:false, why:'That is treatment of the acute skin lesion, erythema migrans (slide 29).'},
  {t:'Amoxicillin 500 mg three times daily for 14 days', correct:false, why:'An erythema migrans treatment regimen (slide 29).'},
  {t:'Doxycycline 200 mg by mouth once', correct:true, why:'Slide 29: prophylaxis within 72 hours of detaching the tick: doxycycline, adults 200 mg PO once. "Pay attention to the hour" (T@15815–16022 11/12).'},
  {t:'Azithromycin 500 mg daily for 7 days', correct:false, why:'The second-line erythema migrans agent (slide 29).'}],
 teach:'High risk: Ixodes tick, high endemic area, attached > 36 hours. Prophylaxis within 72 hours of detaching the tick (slide 29).',
 cite:P8OQ+' slide 29; T@15815–16022 11/12'},

{id:'P8O-031', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'lyme', concept:'p8o-lyme-em-doxy-10d',
 tags:['case','new-patient','timing-changes-answer'], source:'both',
 stem:'A 35-year-old man removed an Ixodes tick 6 days ago. He now has an erythema migrans lesion on his thigh and no neurologic or cardiac symptoms. He has no drug allergies. Which regimen is appropriate?',
 options:[
  {t:'Doxycycline 200 mg once', correct:false, why:'Prophylaxis, within 72 hours of detaching the tick (slide 29); he is at 6 days with a lesion.'},
  {t:'Doxycycline 100 mg twice daily for 7 days', correct:false, why:'7 days is the rickettsial spotted fever course (slide 30).'},
  {t:'Doxycycline 100 mg twice daily for 14 days', correct:false, why:'14 days belongs to amoxicillin and cefuroxime axetil (slide 29).'},
  {t:'Doxycycline 100 mg twice daily for 10 days', correct:true, why:'Slide 29: acute skin lesion (erythema migrans): doxycycline, adults 100 mg BID × 10 days (T@16458, T@17190 11/12).'}],
 teach:'Erythema migrans: doxycycline 10 days; amoxicillin 14 days; cefuroxime axetil 14 days; azithromycin (second line) 7 days (slide 29).',
 cite:P8OQ+' slides 29–30; T@16458, T@17190 11/12'},

{id:'P8O-032', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'lyme', concept:'p8o-lyme-second-line-azithro',
 tags:['case','new-patient','what-was-tried'], source:'both',
 stem:'An adult with erythema migrans cannot take doxycycline, amoxicillin or cefuroxime axetil. Which second-line agent and duration are used?',
 options:[
  {t:'Azithromycin for 14 days', correct:false, why:'Right drug; 14 days belongs to amoxicillin and cefuroxime axetil (slide 29).'},
  {t:'Azithromycin for 7 days', correct:true, why:'Slide 29: second-line agent: azithromycin, adults 500 mg daily × 7 days. "Azithromycin is the shortest time frame, 7 days" (T@16970–17190 11/12).'},
  {t:'Ciprofloxacin for 7 days', correct:false, why:'Ciprofloxacin is on the plague list (slide 27).'},
  {t:'Streptomycin for 10 days', correct:false, why:'Streptomycin is on the plague list (slide 27); 10 days is doxycycline for erythema migrans.'}],
 teach:'"If none of those three can be an appropriate option for the patient due to allergies or ... resistance, then we have azithromycin" (T@16970 11/12).',
 cite:P8OQ+' slides 27, 29; T@16970–17190 11/12'},

{id:'P8O-033', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'wt', concept:'p8o-lyme-proph-child-max',
 tags:['calc','new-patient','max-dose'], source:'both',
 stem:'A 50-kg adolescent qualifies for Lyme disease prophylaxis within 72 hours of removing the tick. At the pediatric dose of doxycycline, what single dose is given?',
 options:[
  {t:'100 mg', correct:false, why:'100 mg is the per-dose maximum for erythema migrans treatment (slide 29), not the prophylaxis dose.'},
  {t:'110 mg', correct:false, why:'That is 2.2 mg/kg, the rickettsial daily dose (slide 30). Prophylaxis is 4.4 mg/kg.'},
  {t:'200 mg', correct:true, why:'Slide 29: children 4.4 mg/kg up to 200 mg × once; 4.4 × 50 = 220 mg, so the 200 mg maximum applies (T@15815 11/12).'},
  {t:'220 mg', correct:false, why:'4.4 × 50 = 220 mg, but the dose is "up to 200 mg" (slide 29).'}],
 teach:'Lyme prophylaxis: adults 200 mg once; children 4.4 mg/kg up to 200 mg once (slide 29).',
 cite:P8OQ+' slides 29–30; T@15815 11/12'},

{id:'P8O-034', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'rick', concept:'p8o-stari-no-antibiotic',
 tags:['tell'], source:'both',
 stem:'A patient develops a rash illness after a Lone Star tick bite and is diagnosed with Southern Tick-Associated Rash Illness (STARI). What antibiotic therapy is recommended?',
 options:[
  {t:'Doxycycline 200 mg once within 72 hours', correct:false, why:'Lyme prophylaxis after an Ixodes bite (slide 29).'},
  {t:'Doxycycline 100 mg twice daily for 7 days', correct:false, why:'The rickettsial spotted fever regimen (slide 30).'},
  {t:'No antibiotic recommendation from IDSA', correct:true, why:'Slide 30: STARI, Lone Star tick (Amblyomma americanum): IDSA, NO antibiotic recommendation (T@17813 11/12).'},
  {t:'Amoxicillin 500 mg three times daily for 14 days', correct:false, why:'A Lyme erythema migrans regimen (slide 29).'}],
 teach:'STARI: no antibiotic recommendation. Rickettsial spotted fevers: doxycycline for all suspected infections (slide 30).',
 cite:P8OQ+' slides 29–30; T@17813 11/12'},

{id:'P8O-035', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'rick', concept:'p8o-rickettsial-doxy',
 tags:['case','new-patient'], source:'both',
 stem:'A 6-year-old is suspected to have Rocky Mountain spotted fever after a tick bite. Which antibiotic is recommended for suspected rickettsial infections?',
 options:[
  {t:'Doxycycline', correct:true, why:'Slide 30: doxycycline is the recommended treatment for all suspected rickettsial infections (Rocky Mountain, Gulf coast, Pacific coast, rickettsialpox); children 2.2 mg/kg daily in two divided doses × 7 days (T@17901 11/12).'},
  {t:'Amoxicillin', correct:false, why:'A Lyme erythema migrans option (slide 29), not a rickettsial treatment.'},
  {t:'Cefuroxime axetil', correct:false, why:'A Lyme erythema migrans option (slide 29).'},
  {t:'Azithromycin', correct:false, why:'The second-line Lyme agent (slide 29).'}],
 teach:'"Just remember doxycycline is our recommended treatment in terms of [rickettsial] spotted fever" (T@17901 11/12).',
 cite:P8OQ+' slides 29–30; T@17901 11/12'},

/* ---- Insect stings (slides 35-38) ------------------------------------------- */
{id:'P8O-036', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'case', concept:'p8o-sting-case-referral',
 tags:['poll','verbatim','case'], source:'both',
 quote:'11/12 (T@23151): "So what is the best therapeutic option after a wasp or bee sting, especially when a patient’s experiencing hives and swelling?" ... "D, immediate referral" (T@23898)',
 stem:'HPI: A mother brings her 7-year-old son to the pharmacy stating that he was playing near the neighborhood creek when he ran to her screaming that something had stung him. He saw flying yellow and black bugs there. The boy complains that his thigh really hurts and itches. He has a swollen, bright red patch on his right thigh. The mother says that she used her credit card to "remove the stinger" and then applied an ice pack to his thigh. This helped initially, but she thinks that his thigh looks like it continues to swell. PMH: Asthma and seasonal allergic rhinitis. Physical Exam: Development of hives distal to the bite site is noted. Medication Allergy: Amoxicillin (rash). Medications: Loratadine 10 mg po daily and montelukast 5 mg po once daily. What is the best therapeutic option after a wasp or bee sting, especially when a patient is experiencing hives and swelling?',
 options:[
  {t:"Apply local topical anesthetic to the area", correct:false, why:"A sting treatment for local pain and itch (slides 25, 35); hives away from the site need emergency care (slide 36)."},
  {t:"Apply a topical antihistamine cream", correct:false, why:"Treats local itch from bites and stings (slide 12); hives need emergency care (slide 36)."},
  {t:"Recommend soaking the area in epsom salt bath", correct:false, why:"Not among the sting treatments on slides 35–39; hives need emergency care (slide 36)."},
  {t:"Immediate medical referral to the emergency room", correct:true, why:"Slide 36: emergency care immediately: at any time after the sting, hives, dizziness, N/V, difficulty breathing. \"Keyword here, hives and swelling ... D, immediate referral\" (T@23898 11/12)."}],
 teach:'Hives distal to the sting site are a systemic sign: emergency care (slide 36).',
 cite:P8OQ+' slides 36–37; T@23151–23898 11/12'},

{id:'P8O-037', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'aid', concept:'p8o-stinger-removal',
 tags:['counsel','next-step'], source:'both',
 stem:'A 28-year-old was stung on the hand by a honeybee 2 minutes ago. The stinger is still in the skin. She has local pain only and no history of sting reactions. What is the first step?',
 options:[
  {t:'Apply ice for 10 minutes, then remove the stinger', correct:false, why:'Slide 38: remove the stinger and venom sac before all venom is injected; ice follows.'},
  {t:'Squeeze the stinger out between two fingers', correct:false, why:'Slide 35: "Remove bee stinger (don’t squeeze it)".'},
  {t:'Remove the stinger without squeezing it', correct:true, why:'Slides 35, 38: remove the bee stinger (don’t squeeze it), before all venom is injected; then wash with soap and water and apply ice (T@21780 11/12).'},
  {t:'Apply hydrocortisone 1% cream over the stinger', correct:false, why:'Drug treatment is the same as for bites (slide 35) but comes after stinger removal and washing.'}],
 teach:'Order: remove the stinger, wash with soap and water, ice or a cold pack, then the same drug treatment as insect bites (slide 35).',
 cite:P8OQ+' slides 35, 38; T@21780 11/12'},

{id:'P8O-038', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'fu', concept:'p8o-sting-emergency-list', multi:true,
 tags:['list','referral'], source:'both',
 stem:'After a wasp sting, which of these call for emergency care immediately? Select all that apply.',
 options:[
  {t:'A history of a severe reaction to stings', correct:true, why:'Slide 36: severe reaction history.'},
  {t:'Hives', correct:true, why:'Slide 36: at any time after the sting, hives, dizziness, N/V, difficulty breathing (T@22511 11/12).'},
  {t:'Dizziness', correct:true, why:'Slide 36.'},
  {t:'Pain and itching at the sting site', correct:false, why:'Slide 20: pain, pruritus and irritation are the local effects of a sting.'},
  {t:'Redness at the site that eased with ice', correct:false, why:'A local effect that responded to first aid (slides 35, 38).'}],
 teach:'No emergency signs: triage to a provider if symptoms worsen or do not improve after 7 days of topical treatment (slide 36).',
 cite:P8OQ+' slides 20, 36; T@22511–22911 11/12'},

{id:'P8O-039', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'aid', concept:'p8o-sting-oral-analgesic',
 tags:['case','new-patient','what-was-tried'], source:'both',
 stem:'A 45-year-old man was stung on the forearm by a wasp yesterday. He washed it, used ice and has applied a pramoxine cream. The itch is better but it still hurts. No hives, dizziness, nausea or breathing trouble. What is the next step?',
 options:[
  {t:'Send him for emergency care', correct:false, why:'He has none of the slide 36 emergency signs.'},
  {t:'Add an oral analgesic', correct:true, why:'Slide 35: "If pain not relieved by topical, consider oral analgesic" (T@22130 11/12).'},
  {t:'Cover the pramoxine with an occlusive dressing', correct:false, why:'Slide 12: do not use topical anesthetics under an occlusive dressing.'},
  {t:'Change to a topical antibiotic', correct:false, why:'Topical antibiotics are for minor burns and cuts (slide 13); they do not treat pain.'}],
 teach:'Stings use the same drug treatment as bites; pain not relieved by a topical: oral analgesic (slide 35).',
 cite:P8OQ+' slides 12–13, 35–36; T@22130 11/12'},

{id:'P8O-040', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'fu', concept:'p8o-sting-history-emergency',
 tags:['case','new-patient','history-changes-answer'], source:'both',
 stem:'A 50-year-old man was stung by a yellow jacket 10 minutes ago. The site is red and painful and he feels well. He mentions that his last sting "put me in the hospital with a severe reaction." What should the pharmacist do?',
 options:[
  {t:'Recommend ice and hydrocortisone 1%', correct:false, why:'Right for a local reaction (slide 35), but a severe reaction history is an emergency-care trigger (slide 36).'},
  {t:'Recommend an oral antihistamine and watch him', correct:false, why:'Slide 36 sends a severe reaction history to emergency care immediately.'},
  {t:'Send him for emergency care now', correct:true, why:'Slide 36: emergency care immediately: severe reaction history. "It can occur very quickly" (T@22511 11/12).'},
  {t:'Triage to his provider if no better in 7 days', correct:false, why:'The 7-day triage applies when there are no emergency criteria (slide 36).'}],
 teach:'Two emergency triggers: a severe reaction history, or hives, dizziness, N/V, difficulty breathing at any time after the sting (slide 36).',
 cite:P8OQ+' slides 35–36; T@22511 11/12'},

/* ---- Lice (slides 42-48) ------------------------------------------------------ */
{id:'P8O-041', skill:'case', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'case', concept:'p8o-lice-case-first-line',
 tags:['poll','case','verbatim'], source:'both',
 quote:'11/12 (T@32747): "A mother brings her son in, 10 year old ... Which of the following is the most appropriate first line agent for this patient? ... A should be the right answer here cause it’s a first-line agent, right? Age-wise, appropriate to utilize" (T@33250). She did not name the product in option A.',
 stem:'A mother brings her 10-year-old son, Bobby, to the pharmacy and shows you the top of his head. She would like an OTC product. Child has itching with scratch marks on scalp, no signs of bacterial infection. He shared a helmet at T-ball with another little boy several days ago. Noticed the child scratching his head yesterday, she saw moving grey-white bugs today. No resistance is reported in community to pyrethrins or permethrin. Which of the following is the most appropriate first-line agent for this patient?',
 options:[
  {t:"Permethrin", correct:true, why:"Slide 45: permethrin (Nix), OTC, 10 minutes on the hair; slide 44 excludes it only under 2 months. \"A ... first-line agent ... age-wise, appropriate\" (T@33250 11/12)."},
  {t:"Malathion", correct:false, why:"Slide 45: prescription, 8–12 hours on the hair; the mother asked for an OTC product."},
  {t:"Lindane", correct:false, why:"Lindane lotion 1% is on the scabies list (slide 51), not the head lice table."},
  {t:"He is not a candidate for self-care, refer to PCP", correct:false, why:"No slide 44 exclusion applies: live lice were seen, he is 10 years old, and there is no skin infection."}],
 teach:'Live lice seen, no exclusion, no resistance: an OTC pediculicide that fits his age (slides 44–45).',
 cite:P8OQ+' slides 44–45, 47–48, 51; T@32747–33447 11/12'},

{id:'P8O-042', skill:'case', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'prod', concept:'p8o-lice-18mo-permethrin',
 tags:['case','new-patient','age'], source:'both',
 stem:'A father shows you live lice on the scalp of his 18-month-old daughter. No skin infection, no allergies. He wants an OTC product today. Which fits her age?',
 options:[
  {t:'Pyrethrins with piperonyl butoxide (RID)', correct:false, why:'Slides 44–45: under 2 years is excluded for pyrethrins. "Pay attention to the age category" (T@33447 11/12).'},
  {t:'Permethrin (Nix Cream Rinse)', correct:true, why:'Slide 45: permethrin, OTC, over 2 months (T@29881 11/12).'},
  {t:'Malathion 0.5% lotion (Ovide)', correct:false, why:'Slide 45: prescription and over 2 years.'},
  {t:'Benzyl alcohol 5% lotion (Ulesfia)', correct:false, why:'Slide 45: over 6 months, but prescription; he asked for OTC.'}],
 teach:'OTC age limits: pyrethrins over 2 years; permethrin and dimethicone over 2 months; ivermectin lotion over 6 months (slide 45).',
 cite:P8OQ+' slides 44–45; T@28972–29881, T@30350, T@33447 11/12'},

{id:'P8O-043', skill:'case', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'excl', concept:'p8o-lice-6wk-refer',
 tags:['case','new-patient','age','referral'], source:'both',
 stem:'A mother finds live lice on her 6-week-old infant after an older sibling was treated. She asks which OTC product to use on the baby. What is the best response?',
 options:[
  {t:'Permethrin cream rinse for 10 minutes', correct:false, why:'Slides 44–45: under 2 months is excluded for permethrin.'},
  {t:'Dimethicone 100% for 10 minutes', correct:false, why:'Slide 45: dimethicone (LiceMD) is for over 2 months.'},
  {t:'Pyrethrins with piperonyl butoxide for 10 minutes', correct:false, why:'Slides 44–45: pyrethrins are for over 2 years.'},
  {t:'Refer the infant to the pediatrician', correct:true, why:'Slides 44–45: at 6 weeks the infant is below the age limit of each OTC product (2 months, 2 months, 6 months, 2 years).'}],
 teach:'"Highlight the age restriction for each of these products" (T@30350 11/12).',
 cite:P8OQ+' slides 44–45; T@29071, T@30350 11/12'},

{id:'P8O-044', skill:'case', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'excl', concept:'p8o-lice-exclusion-list', multi:true,
 tags:['list','exclusion'], source:'both',
 stem:'Which of these exclude a patient from self-treatment of lice? Select all that apply.',
 options:[
  {t:'No live lice seen', correct:true, why:'Slide 44 (T@28825 11/12).'},
  {t:'Pregnancy or breast-feeding', correct:true, why:'Slide 44.'},
  {t:'Lice infestation of the eyelids or eyebrows', correct:true, why:'Slide 44.'},
  {t:'Age 5 years with live lice on the scalp', correct:false, why:'Above the age limits of the OTC products (slide 45).'},
  {t:'Sharing a helmet with an infested teammate', correct:false, why:'A route of transmission (slides 42, 48), not an exclusion.'}],
 teach:'Also excluded: hypersensitivity to chrysanthemums, ragweed or pediculicide ingredients; secondary skin infection; active tumors; under the product’s age limit (slide 44).',
 cite:P8OQ+' slides 42, 44–45, 48; T@28825 11/12'},

{id:'P8O-045', skill:'adverse', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'prod', concept:'p8o-pyrethrin-chrysanthemum',
 tags:['tell'], source:'slide',
 stem:'Which pediculicide carries a caution about allergy to chrysanthemums?',
 options:[
  {t:'Permethrin (Nix Cream Rinse)', correct:false, why:'Slide 45 lists only the age limit (over 2 months) for permethrin.'},
  {t:'Dimethicone 100% (LiceMD)', correct:false, why:'Slide 45 lists only the age limit (over 2 months).'},
  {t:'Ivermectin 0.5% lotion (Sklice)', correct:false, why:'Slide 45 lists only the age limit (over 6 months).'},
  {t:'Pyrethrins + piperonyl butoxide (RID)', correct:true, why:'Slide 45: "> 2 years; allergy to chrysanthemums". Slide 44 excludes hypersensitivity to chrysanthemums or ragweed from self-treatment.'}],
 teach:'Pyrethrins + piperonyl butoxide (RID, A-200, Pronto): over 2 years; chrysanthemum allergy (slides 44–45).',
 cite:P8OQ+' slides 44–45'},

{id:'P8O-046', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'use', concept:'p8o-lice-application-steps',
 tags:['counsel'], source:'both',
 stem:'A mother has bought a pyrethrin/piperonyl butoxide shampoo for her 8-year-old. Which instruction is correct?',
 options:[
  {t:'Apply to dry hair; leave on 8–12 hours; rinse', correct:false, why:'8–12 hours is malathion lotion (slide 45).'},
  {t:'Apply after conditioner; leave on 10 minutes; rinse', correct:false, why:'Slide 45 warning: no conditioner or combination shampoo/conditioner before the lice medicine.'},
  {t:'Apply to dry hair; leave on 10 minutes; rinse', correct:true, why:'Slide 47: apply enough to wet the dry hair and scalp; leave on a full 10 minutes; rinse with water (T@34314 11/12).'},
  {t:'Apply to dry hair; leave on 10 minutes; shampoo that night', correct:false, why:'Slide 45 warning: do not re-wash the hair for 1–2 days after the lice medicine is removed.'}],
 teach:'After rinsing: nit comb, hair parted into segments; repeat in 7 to 10 days if lice or nits are seen (slide 47).',
 cite:P8OQ+' slides 45, 47; T@31411, T@34314 11/12'},

{id:'P8O-047', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'use', concept:'p8o-lice-nit-comb-repeat',
 tags:['counsel','two-facts'], source:'both',
 stem:'After the lice shampoo is rinsed out, what should the caregiver do next, and when is the process repeated?',
 options:[
  {t:'Comb in sections with a nit comb; repeat in 7 to 10 days if lice or nits are seen', correct:true, why:'Slide 47: nit comb, part the hair into segments; repeat in 7 to 10 days if lice or nits are seen (T@31634–31718 11/12).'},
  {t:'Comb in sections with a nit comb; repeat in 1 to 2 days if lice or nits are seen', correct:false, why:'1–2 days is how long not to re-wash the hair (slide 45).'},
  {t:'Dry with a hair dryer; repeat in 7 to 10 days whether or not lice are seen', correct:false, why:'The hair dryer belongs to the Cetaphil (Nuvo) method (slide 46); the repeat is "if lice or nits are seen" (slide 47).'},
  {t:'Apply conditioner and comb; repeat in 4 weeks if lice or nits are seen', correct:false, why:'No conditioner around the lice medicine (slide 45); 4 weeks is how long itch can last after scabies treatment (slide 51).'}],
 teach:'Her counseling list: apply, full 10 minutes, rinse, comb in sections, repeat in 7 to 10 days (T@34314 11/12).',
 cite:P8OQ+' slides 45–47, 51; T@31634–31718, T@34314 11/12'},

{id:'P8O-048', skill:'case', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'use', concept:'p8o-lice-two-rounds-refer',
 tags:['case','new-patient','what-was-tried','referral'], source:'both',
 stem:'A mother treated her 7-year-old with permethrin cream rinse, combed with a nit comb, and repeated the treatment one week later. Three days after the second round she still finds live lice. What is the best recommendation?',
 options:[
  {t:'Leave the next permethrin application on for 8–12 hours', correct:false, why:'8–12 hours is malathion (slide 45); permethrin is a 10-minute product.'},
  {t:'Use a Natrum muriaticum homeopathic product', correct:false, why:'Slide 46: homeopathic (Vamousse, Licefree); "Pharmacist’s Letter says to avoid".'},
  {t:'Use conditioner before the next application', correct:false, why:'Slide 45 warning: no conditioner before the lice medicine.'},
  {t:'Refer to the PCP for a prescription product', correct:true, why:'Slide 47: live head lice after 2 treatment rounds one week apart: refer to PCP for a prescription product (T@32280 11/12).'}],
 teach:'"It most likely will not be cured in one treatment round" (T@32280 11/12); after two rounds a week apart with live lice, refer (slide 47).',
 cite:P8OQ+' slides 45–47; T@32280 11/12'},

{id:'P8O-049', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-lice', sub:'prod', concept:'p8o-lice-types',
 tags:['tell'], source:'both',
 stem:'Which louse lives in the seams of clothing and can transmit typhus and trench fever?',
 options:[
  {t:'Pediculus humanus capitis', correct:false, why:'Head lice: within 4 mm of the scalp; head-to-head contact or shared personal items (slide 42).'},
  {t:'Phthirus pubis', correct:false, why:'Pubic area; sexual contact, shared bedding or clothing (slide 42).'},
  {t:'Pediculus humanus corporis', correct:true, why:'Slide 42: body lice, in seams of clothing, can transmit infections (typhus, trench fever) (T@26653 11/12).'},
  {t:'Sarcoptes scabiei', correct:false, why:'The scabies mite, an arachnid (slide 50), not a louse.'}],
 teach:'Head lice are the most common; highest population is children in school (slide 42).',
 cite:P8OQ+' slides 42, 50; T@26291–26653 11/12'},

/* ---- Scabies (slides 50-51) ---------------------------------------------------- */
{id:'P8O-050', skill:'class', prof:'Patel', tier:'new', topic:'p8o-scab', sub:'tx', concept:'p8o-scabies-options',
 tags:['tell'], source:'both',
 stem:'Which of these is a scabies treatment?',
 options:[
  {t:'Dimethicone 100%', correct:false, why:'A head lice product (LiceMD; slide 45).'},
  {t:'Crotamiton 10% lotion or cream', correct:true, why:'Slide 51: permethrin 5% cream (Elimite); crotamiton lotion or cream 10%; sulfur 5–10% ointment; lindane lotion 1%; oral ivermectin 200 mcg/kg/dose × 2 one week apart (T@35370 11/12).'},
  {t:'Malathion 0.5% lotion', correct:false, why:'A prescription head lice product (Ovide; slide 45).'},
  {t:'Spinosad 0.9% suspension', correct:false, why:'A prescription head lice product (Natroba; slide 45).'}],
 teach:'"There isn’t first line, second line, or third line. It just depends on what would be the most appropriate for the patient" (T@35653 11/12).',
 cite:P8OQ+' slides 45, 51; T@35370–35653 11/12'},

{id:'P8O-051', skill:'case', prof:'Patel', tier:'new', topic:'p8o-scab', sub:'tx', concept:'p8o-scabies-itch-4wk',
 tags:['case','new-patient','what-was-tried'], source:'both',
 stem:'A nursing home resident finished scabies treatment with permethrin 5% cream 2 weeks ago. She still itches; there are no new lesions and no signs of infection. What explains the itch, and which treatment is the usual choice for it?',
 options:[
  {t:'Surviving mites; repeat permethrin 5% now', correct:false, why:'Slide 51: pruritus can last 4 weeks after treatment from hypersensitivity; itch alone at 2 weeks is not treatment failure.'},
  {t:'Hypersensitivity, up to 4 weeks; oral antihistamine', correct:true, why:'Slide 51: pruritus can last 4 weeks after scabies treatment due to hypersensitivity reactions; oral antihistamines. "Most likely we’re leaning on that oral antihistamine" (T@35859–36103 11/12).'},
  {t:'Hypersensitivity, up to 7 days; refer now', correct:false, why:'7 days is the bite and plant dermatitis referral rule (slides 16, 31); the scabies slide gives 4 weeks.'},
  {t:'Secondary infection; topical bacitracin', correct:false, why:'She has no signs of infection; topical antibiotics are for minor burns and cuts (slide 13).'}],
 teach:'S. scabiei lives up to 72 hours in clothing or bedding; transfer needs prolonged physical contact (slide 50).',
 cite:P8OQ+' slides 50–51; T@35859–36103 11/12'},

/* ---- Venomous spiders and snakes (slides 52-58, 65) ------------------------------ */
{id:'P8O-052', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'spider', concept:'p8o-black-widow-signs',
 tags:['case','tell'], source:'both',
 stem:'A man was bitten while moving boxes in a Texas garage. He now has abdominal pain that feels like appendicitis, muscle pain, profuse sweating and swollen eyelids. Which bite fits?',
 options:[
  {t:'Brown recluse spider', correct:false, why:'Slide 52: fever, blood in urine, rash, joint pain within 48 hours; tissue necrosis.'},
  {t:'Black widow spider', correct:true, why:'Slide 52: abdominal pain that feels like appendicitis; pain in muscles or soles of the feet; alternating salivation and dry mouth; paralysis of the diaphragm; seizures; profuse sweating; swollen eyelids (T@36739 11/12).'},
  {t:'Coral snake', correct:false, why:'Slide 54: about 60% are dry bites and fang marks are hard to find; this symptom list is the black widow’s.'},
  {t:'Lone Star tick', correct:false, why:'Slide 30: STARI, a rash illness.'}],
 teach:'Brown recluse: tissue necrosis, may need surgical intervention. Black widow: abdominal and muscle signs; antivenom for severe bites (slides 52–53).',
 cite:P8OQ+' slides 30, 52–54; T@36556–36739 11/12'},

{id:'P8O-053', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'spider', concept:'p8o-spider-acetaminophen',
 tags:['counsel'], source:'both',
 stem:'On the way to the emergency room after a venomous spider bite, which agent may be given for pain?',
 options:[
  {t:'Ibuprofen', correct:false, why:'"Tylenol over ibuprofen" (T@37545 11/12); slide 53 names acetaminophen.'},
  {t:'Topical lidocaine on the bite', correct:false, why:'A topical anesthetic for insect bites and stings (slide 12); slide 53 names acetaminophen.'},
  {t:'Hydrocortisone 1% cream', correct:false, why:'Treats pruritus and inflammation (slide 12), not the pain of a venomous bite.'},
  {t:'Acetaminophen', correct:true, why:'Slide 53: "May give acetaminophen for pain" (T@37545 11/12).'}],
 teach:'Spider bite first aid: soap and water, cold pack, elevate the limb, acetaminophen, emergency room (slide 53).',
 cite:P8OQ+' slides 12, 53; T@37396–37545 11/12'},

{id:'P8O-054', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'snake', concept:'p8o-limb-position-spider-vs-snake',
 tags:['tell','two-facts'], source:'slide',
 stem:'In first aid, how is the bitten limb positioned after a venomous spider bite and after a snake bite?',
 options:[
  {t:'Spider: elevate. Snake: elevate above the heart.', correct:false, why:'Slide 56: snake bite, immobilize and keep even with or slightly lower than the heart.'},
  {t:'Spider: keep lower than the heart. Snake: elevate.', correct:false, why:'Both reversed (slides 53, 56).'},
  {t:'Spider: elevate. Snake: even with or slightly lower than the heart.', correct:true, why:'Slide 53: elevate limb to reduce swelling. Slide 56: immobilize the bitten area and keep it even with or slightly lower than the heart ("keep it lower ... than the heart", T@39427 11/12).'},
  {t:'Spider: keep lower than the heart. Snake: even with or slightly lower than the heart.', correct:false, why:'Slide 53: the spider-bitten limb is elevated.'}],
 teach:'Snake bite: keep the patient calm and still, immobilize, no walking on the limb (slide 56; T@38894 11/12).',
 cite:P8OQ+' slides 53, 56; T@37396, T@39310–39427 11/12'},

{id:'P8O-055', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'snake', concept:'p8o-snake-first-aid-list', multi:true,
 tags:['list','counsel'], source:'both',
 stem:'A hiker’s friend has just been bitten on the ankle by a snake. Which first-aid steps are appropriate? Select all that apply.',
 options:[
  {t:'Keep the patient calm and still', correct:true, why:'Slide 56 (T@38894 11/12).'},
  {t:'Remove jewelry and tight clothing from the limb', correct:true, why:'Slide 56: remove any constrictions from the limb (T@39141 11/12).'},
  {t:'Wash the bite with soap and water', correct:true, why:'Slide 56.'},
  {t:'Capture the snake for identification', correct:false, why:'Slide 56: "Take a photo, do not try to capture" (T@39107 11/12).'},
  {t:'Have the patient walk to the car quickly', correct:false, why:'Slide 56: calm and still; immobilize. "We’re not walking anymore on that leg" (T@39571 11/12).'}],
 teach:'Then call the poison control center (1-800-222-1222) and transport to a medical facility (slide 56).',
 cite:P8OQ+' slide 56; T@38894–39823 11/12'},

{id:'P8O-056', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'snake', concept:'p8o-poison-control-number',
 tags:['counsel'], source:'both',
 stem:'Which statement about the poison control hotline is correct?',
 options:[
  {t:'1-800-222-1222; 24/7; envenomations and overdoses', correct:true, why:'Slides 56, 65: 1-800-222-1222; 24/7 hotline; envenomations to regular overdose support. "Remember this phone number" (T@45793 11/12); nationwide (T@39823).'},
  {t:'1-800-222-1222; Texas callers; snake bites', correct:false, why:'"This is a nationwide number, so it’s not state-specific ... not a number just for snake bites" (T@39823 11/12).'},
  {t:'1-800-222-2222; 24/7; envenomations and overdoses', correct:false, why:'The number ends 1222 (slides 56, 65).'},
  {t:'1-800-222-1222; business hours; envenomations', correct:false, why:'Slide 65: 24/7; envenomations to regular overdose support.'}],
 teach:'"What is the first step, what’s important for the patient to do, what number are we calling" (T@40792 11/12).',
 cite:P8OQ+' slides 56, 65; T@39823, T@40792, T@45793 11/12'},

{id:'P8O-057', skill:'tell', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'snake', concept:'p8o-coral-no-antivenin',
 tags:['tell'], source:'slide',
 stem:'In Dr. Patel’s snake bite medical care, how is antivenin handled for a coral snake bite compared with a pit viper bite?',
 options:[
  {t:'Coral: antivenin if available. Pit viper: no antivenin, supportive care.', correct:false, why:'Reversed: the coral snake bite gets no antivenin; the pit viper bite is scored (slide 57).'},
  {t:'Coral: scored to decide. Pit viper: no antivenin, supportive care.', correct:false, why:'Slide 57: the pit viper bite is the one scored, and severe envenomation gets antivenin if available; the coral snake bite gets no antivenin.'},
  {t:'Coral: equine antivenom if severe. Pit viper: scored to decide.', correct:false, why:'Equine antivenom for severe bites is the black widow line (slide 53).'},
  {t:'Coral: no antivenin, supportive care. Pit viper: scored to decide.', correct:true, why:'Slide 57: "Coral snake bite – NO antivenin; supportive care only. Pit viper bite (Rattlesnake, etc.) should be scored to assess need for antivenin".'}],
 teach:'Snake bite medical care: tetanus injection; consider antibiotics to cover gram-negative organisms (slide 57; T@40182 11/12).',
 cite:P8OQ+' slides 53, 57; T@40182 11/12'},

{id:'P8O-058', skill:'case', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'sev', concept:'p8o-pitviper-moderate',
 tags:['case','severity'], source:'both',
 stem:'Two hours after a rattlesnake bite on the hand, swelling and ecchymosis have progressed past the bite site to the forearm. The patient has nausea, vomiting and perioral paresthesias. Blood pressure is mildly low. Coagulation tests are mildly abnormal with no significant bleeding. How severe is the envenomation?',
 options:[
  {t:'Minimal', correct:false, why:'Slide 58, minimal: confined to the bite site, no systemic signs, no coagulation abnormalities.'},
  {t:'Moderate', correct:true, why:'Slide 58, moderate: progression beyond the bite site; non-life-threatening signs (nausea/vomiting, mild hypotension, perioral paresthesias, myokymia); mild abnormal coagulation without significant bleeding (T@41304 11/12).'},
  {t:'Severe', correct:false, why:'Slide 58, severe: entire body part; systolic < 80 mm Hg, altered sensorium, respiratory distress; abnormal coagulation with bleeding.'},
  {t:'Dry bite', correct:false, why:'A dry bite delivers no venom (slide 54); he has local, systemic and coagulation findings.'}],
 teach:'Read three rows: local, systemic, coagulation (slide 58). Mild or moderate: supportive therapy (slide 57).',
 cite:P8OQ+' slides 54, 57–58; T@41304 11/12'},

{id:'P8O-059', skill:'case', prof:'Patel', tier:'new', topic:'p8o-venom', sub:'sev', concept:'p8o-pitviper-severe-antivenin',
 tags:['case','severity','next-step'], source:'both',
 stem:'After a copperhead bite on the calf, the whole leg has swollen rapidly. Systolic blood pressure is 76 mm Hg, the patient is confused and tachypneic, and he is bleeding with a platelet count under 20,000/µL. Which grade and plan fit?',
 options:[
  {t:'Moderate; supportive therapy', correct:false, why:'Moderate is non-life-threatening signs and no significant bleeding (slide 58).'},
  {t:'Moderate; give antivenin if available', correct:false, why:'These findings are the severe column (slide 58); mild or moderate gets supportive therapy (slide 57).'},
  {t:'Severe; supportive therapy alone', correct:false, why:'Slide 57, severe: give antivenin, if available, plus supportive therapy.'},
  {t:'Severe; give antivenin if available', correct:true, why:'Slide 58, severe: entire body part; systolic < 80 mm Hg, altered sensorium, tachypnea; abnormal coagulation with bleeding, platelets < 20,000/µL. Slide 57: give antivenin if available; supportive therapy; watch for compartment syndrome.'}],
 teach:'Severe envenomation: antivenin if available, supportive therapy, watch for compartment syndrome and call surgery (slide 57).',
 cite:P8OQ+' slides 57–58; T@41304 11/12'},

/* ---- Rabies (slides 62-63) --------------------------------------------------------- */
{id:'P8O-060', skill:'case', prof:'Patel', tier:'new', topic:'p8o-rabies', sub:'pep', concept:'p8o-rabies-first-steps',
 tags:['case','next-step','referral'], source:'both',
 stem:'A man was bitten on the hand by a raccoon an hour ago and comes to the pharmacy for a bandage. He has not been vaccinated against rabies. What should the pharmacist advise?',
 options:[
  {t:'Wash with soap and water; watch for fever for 2–10 days', correct:false, why:'2–10 days is the prodrome length (slide 61); slide 62: refer as soon after exposure as possible.'},
  {t:'Apply a topical antibiotic; return if no better in 7 days', correct:false, why:'The 7-day rule is for minor burns and cuts (slide 13); a rabies exposure is referred for PEP (slide 62).'},
  {t:'Wash with soap and water; refer promptly for PEP', correct:true, why:'Slide 62: first wash wound with soap and water, or povidone-iodine if available; refer as soon after exposure as possible for PEP; medical urgency, not emergency (T@43592–43828 11/12).'},
  {t:'Call 911; a rabies exposure is a medical emergency', correct:false, why:'Slide 62: "Medical urgency; not emergency". "It’s urgency, not emergency" (T@44130 11/12).'}],
 teach:'Bites are the most common route: raccoons, bats, foxes, skunks, cats and dogs. Untreated rabies is fatal (slide 62).',
 cite:P8OQ+' slides 13, 61–62; T@43592–44130 11/12'},

{id:'P8O-061', skill:'case', prof:'Patel', tier:'new', topic:'p8o-rabies', sub:'pep', concept:'p8o-rabies-pep-previously-vaccinated',
 tags:['case','new-patient','history-changes-answer'], source:'both',
 stem:'A veterinary technician who completed pre-exposure rabies vaccination is bitten by a bat. After wound cleansing, which postexposure regimen is given?',
 options:[
  {t:'Vaccine on days 0 and 3; no HRIG', correct:true, why:'Slide 63, previously vaccinated: HRIG do not administer; vaccine 1 mL in the deltoid on days 0 and 3. "Notice in terms of duration, differs" (T@44752–44919 11/12).'},
  {t:'Vaccine on days 0, 3, 7 and 14; no HRIG', correct:false, why:'Days 0, 3, 7 and 14 are for the not previously vaccinated (slide 63).'},
  {t:'HRIG 20 IU/kg; vaccine on days 0 and 3', correct:false, why:'Slide 62: RHIG should not be given in previously immunized patients.'},
  {t:'HRIG 20 IU/kg; vaccine on days 0, 3, 7 and 14', correct:false, why:'The regimen for a person not previously vaccinated (slide 63).'}],
 teach:'Not previously vaccinated: wound cleansing, HRIG 20 IU/kg, vaccine on days 0, 3, 7, 14. Previously vaccinated: wound cleansing, vaccine on days 0 and 3 (slide 63).',
 cite:P8OQ+' slides 62–63; T@44433–44919 11/12'},

{id:'P8O-062', skill:'counsel', prof:'Patel', tier:'new', topic:'p8o-rabies', sub:'pep', concept:'p8o-rabies-hrig-site',
 tags:['tell'], source:'slide',
 stem:'In a person not previously vaccinated, where are HRIG and the rabies vaccine given?',
 options:[
  {t:'Both in one syringe, in the deltoid', correct:false, why:'Slide 62: vaccine and RHIG are not given at the same site or in the same syringe.'},
  {t:'HRIG in the deltoid; vaccine around the wound', correct:false, why:'Reversed (slide 63).'},
  {t:'Both infiltrated around and into the wound', correct:false, why:'Slide 62: not the same site; the vaccine goes in the unaffected deltoid (slide 63).'},
  {t:'HRIG around the wound; vaccine in the unaffected deltoid', correct:true, why:'Slide 63: HRIG 20 IU/kg, infiltrate around and into the wounds, remainder IM away from the vaccine site; vaccine 1 mL IM in the unaffected deltoid area.'}],
 teach:'Rabies vaccine and RHIG: separate sites, separate syringes (slide 62).',
 cite:P8OQ+' slides 62–63; T@43998 11/12'},

/* ---- Fill in the blank: calculations ("Fill in the blank is calculations", T@96227 11/12) ---- */
{id:'BP8O-001', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'b-p8o-ftu-feet-grams',
 tags:['blank','calc'], source:'both', dupOf:'P8O-001',
 stem:'An adult applies hydrocortisone 1% cream twice a day for 3 days to ant bites on both feet. Total cream needed: ___ g.',
 accept:['12', '12 g', '12 grams', 'twelve'],
 why:'Slide 5: one foot including toes 2 FTU; 4 FTU × 0.5 g = 2 g; × 2 × 3 = 12 g (round up to a 15 g tube) (T@2209–2436 11/12).',
 cite:P8OQ+' slide 5; T@2209–2436 11/12'},

{id:'BP8O-002', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'b-p8o-ftu-hands-grams',
 tags:['blank','calc'], source:'slide',
 stem:'An adult applies hydrocortisone 1% cream three times a day for 7 days to chigger bites on both hands (front and back, including fingers). Total cream needed: ___ g.',
 accept:['21', '21 g', '21 grams', 'twenty-one'],
 why:'Slide 5: one hand (front and back) including fingers 1 FTU; 2 FTU × 0.5 g = 1 g; × 3 × 7 = 21 g (a 30 g tube).',
 cite:P8OQ+' slide 5'},

{id:'BP8O-003', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'calc', concept:'b-p8o-ftu-leg-grams',
 tags:['blank','calc'], source:'slide', dupOf:'P8O-003',
 stem:'An adult applies hydrocortisone 1% cream twice a day for 7 days to poison ivy dermatitis on one leg, including the foot. Total cream needed: ___ g.',
 accept:['56', '56 g', '56 grams', 'fifty-six'],
 why:'Slide 5: one leg including foot 8 FTU; 8 × 0.5 g = 4 g; × 2 × 7 = 56 g (a 60 g tube).',
 cite:P8OQ+' slide 5'},

{id:'BP8O-004', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'wt', concept:'b-p8o-lyme-proph-child-mg',
 tags:['blank','calc'], source:'both',
 stem:'A 20-kg child qualifies for Lyme disease prophylaxis within 72 hours of removing the tick. Doxycycline single dose: ___ mg.',
 accept:['88', '88 mg', 'eighty-eight'],
 why:'Slide 29: children 4.4 mg/kg up to 200 mg × once; 4.4 × 20 = 88 mg (T@15815 11/12).',
 cite:P8OQ+' slide 29; T@15815 11/12'},

{id:'BP8O-005', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p8o-qty', sub:'wt', concept:'b-p8o-lyme-amox-child-mg',
 tags:['blank','calc'], source:'both',
 stem:'A 24-kg child with erythema migrans is given amoxicillin at the pediatric dose, in three divided doses a day. Each dose: ___ mg.',
 accept:['400', '400 mg', 'four hundred'],
 why:'Slide 29: children 50 mg/kg daily in three divided doses (max 500 mg/dose) × 14 days; 50 × 24 = 1,200 mg a day ÷ 3 = 400 mg (T@16579 11/12).',
 cite:P8OQ+' slide 29; T@16579 11/12'}
);
