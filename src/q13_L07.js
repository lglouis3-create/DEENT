/* ==========================================================================
   Lecture 7 questions (Dr. Patel, scaly dermatoses therapeutics): dandruff and
   seborrheic dermatitis taught Tuesday 11/10/2026, psoriasis taught Wednesday
   11/11/2026. Exam 2.
   Source: Patel_Scaly-Dermatoses-Therapeutics-Student.pdf (52 slides, the
   version updated for 11/11; "slide N" = PDF page; only printed slide text is
   cited, not handwriting), her PollEv questions (PollEV_Dr_Patel.pdf pp. 4-5:
   11/10 and 11/11), and the transcripts (T@n 11/10 = byte offset in
   DEENT_Lecture_11.10_transcript.txt; T@n 11/11 = in
   DEENT_Lecture_11.11_transcript.txt; the start of the passage quoted).
   Drafts: scratchpad exam2/patel_L6_L7_drafts.md (P7-001..027, BP7-001..002)
   and patel_harder_drafts.md Part C (P7H-001..007). Psoriasis items
   (P7-028 on, P7H-008 on, BP7-003 on) written 2026-11-12 from slides 21-51
   and the 11/11 transcript.
   Psoriasis severity: slide 31 "Mild: BSA <= 5%; Moderate: BSA >= 8%; Severe:
   BSA >= 10%, PASI >= 10%, or DLQI >= 10%"; slide 26 the same (rule of tens;
   ">= 20% in some phototherapy trials"). On 11/11 she first said severe ">= 20%"
   (T@7390), then: "it has been corrected to 10%, but prior guidelines had said
   greater than or equal to 20%, but I want you to follow this slide" (T@10484);
   "I only want you to know the BSA" (T@10671). Items key 10%. In her poll
   case, BSA 7% is "in between" mild and moderate, so "mild to moderate"; 9%
   "in between that moderate as well as severe" (T@34939-35074). No item uses
   exactly 8% (it sits in both of her algorithms).
   Not keyed: exact epidermal turnover multiples ("I'm not gonna be asking you,
   is it 8 or 5", T@83726 11/10); biologic and cyclosporine doses ("I don't want
   you to know dosing", T@17897 11/11, for cyclosporine; biologic doses were not
   stressed); PASI, PGA, PSI, DLQI tools; the phototherapy step of the slide 35
   mild-to-moderate algorithm (not spoken; she called photochemotherapy
   "absolute last line", T@28274 11/11); integrative medicine and cost slides
   (46-47); the slide 51 "a week after self-treatment" against slide 48 and her
   "1 to 2 weeks" (T@36225 11/11): items key 1-2 weeks; seborrheic dermatitis
   washing frequency (slide 15 vs T@88339 11/10).
   ========================================================================== */
const P7Q = 'Lecture 7 (Patel_Scaly-Dermatoses-Therapeutics-Student.pdf)';

TOPIC_DECKS.push(
  {id:'p7', exam:2, name:'Scaly Dermatoses Therapeutics (Dr. Patel)', file:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf', when:'taught 11/10–11/11 (Exam 2)',
   topics:['p7-cmp', 'p7-otc', 'p7-dand', 'p7-sd', 'p7-inf', 'p7-qty', 'p7-pso', 'p7-psotx', 'p7-psosys', 'p7-bio']});

TOPICS.push(
 {id:'p7-cmp', name:'Dandruff, seborrheic dermatitis and psoriasis compared', prof:'Patel',
  cite:'slides 6, 8, 11 · taught 11/10 (Lecture 7)', subs:[
   {id:'cmp', name:'Location, appearance, inflammation, turnover; organisms', cite:'slides 6, 8, 11'}]},
 {id:'p7-otc', name:'FDA-approved OTC ingredients by condition', prof:'Patel',
  cite:'slide 7 · taught 11/10 (Lecture 7)', subs:[
   {id:'chart', name:'The ingredient chart', cite:'slide 7'}]},
 {id:'p7-dand', name:'Dandruff', prof:'Patel',
  cite:'slides 8–10 · taught 11/10 (Lecture 7)', subs:[
   {id:'case', name:'Her dandruff case (PollEv)', cite:'slide 10'},
   {id:'path', name:'What dandruff is', cite:'slide 8'},
   {id:'tx',   name:'Severity and shampoo schedule', cite:'slide 9'}]},
 {id:'p7-sd', name:'Seborrheic dermatitis in adolescents and adults', prof:'Patel',
  cite:'slides 11–17, 19 · taught 11/10 (Lecture 7)', subs:[
   {id:'case', name:'Her adult case (PollEv)', cite:'slide 19'},
   {id:'epi',  name:'Who gets it', cite:'slide 11'},
   {id:'pres', name:'Presentation', cite:'slide 12'},
   {id:'risk', name:'Risk factors and triggers', cite:'slide 13'},
   {id:'tx',   name:'Treatment, schedule, referral', cite:'slides 14–17'}]},
 {id:'p7-inf', name:'Seborrheic dermatitis in infants (cradle cap)', prof:'Patel',
  cite:'slides 12, 18, 20 · taught 11/10 (Lecture 7)', subs:[
   {id:'case', name:'Her infant case (PollEv)', cite:'slide 20'},
   {id:'tx',   name:'Infant care', cite:'slide 18'}]},
 {id:'p7-qty', name:'Fingertip units for scaly dermatoses', prof:'Patel',
  cite:'slide 4 · taught 11/10 (Lecture 7)', subs:[
   {id:'calc', name:'Grams and tube size', cite:'slide 4'}]},
 {id:'p7-pso', name:'Psoriasis: who, triggers, comorbidities, signs and BSA severity', prof:'Patel',
  cite:'slides 21–32 · taught 11/11 (Lecture 7)', subs:[
   {id:'epi',    name:'Epidemiology and type', cite:'slide 21'},
   {id:'risk',   name:'Predisposing and precipitating factors', cite:'slide 24'},
   {id:'comorb', name:'Comorbidities', cite:'slide 25'},
   {id:'pres',   name:'Signs and symptoms of plaque psoriasis', cite:'slides 26–27'},
   {id:'sev',    name:'Severity by body surface area', cite:'slides 26, 31–32'},
   {id:'goals',  name:'Goals and factors in choosing therapy', cite:'slides 28, 30'}]},
 {id:'p7-psotx', name:'Psoriasis: non-drug care, topicals, the two algorithms, her case', prof:'Patel',
  cite:'slides 33–37, 48–51 · taught 11/11 (Lecture 7)', subs:[
   {id:'case',     name:'Her psoriasis case (PollEv)', cite:'slide 50'},
   {id:'nonpharm', name:'Healthy lifestyle and non-drug treatment', cite:'slides 33–34'},
   {id:'alg',      name:'Mild-to-moderate and moderate-to-severe algorithms', cite:'slides 35, 37'},
   {id:'topical',  name:'Topical options and how each is applied', cite:'slide 36'},
   {id:'fu',       name:'Monitoring and follow-up', cite:'slides 48, 51'}]},
 {id:'p7-psosys', name:'Psoriasis: systemic agents and photochemotherapy', prof:'Patel',
  cite:'slides 38–39, 44–45 · taught 11/11 (Lecture 7)', subs:[
   {id:'mtx',  name:'Methotrexate', cite:'slide 39'},
   {id:'csa',  name:'Cyclosporine', cite:'slide 39'},
   {id:'apr',  name:'Apremilast', cite:'slide 38'},
   {id:'oth',  name:'Tofacitinib, acitretin, abatacept', cite:'slides 38–39'},
   {id:'puva', name:'PUVA photochemotherapy', cite:'slides 44–45'}]},
 {id:'p7-bio', name:'Psoriasis: biologics by class, brand and generic, cautions', prof:'Patel',
  cite:'slides 40–43 · taught 11/11 (Lecture 7)', subs:[
   {id:'key', name:'Key points for every biologic', cite:'slides 40, 43'},
   {id:'tnf', name:'TNF-α inhibitors', cite:'slides 41, 43'},
   {id:'il',  name:'IL-12/23, IL-23 and IL-17A inhibitors', cite:'slides 42–43'}]}
);

QUESTIONS.push(
/* ---- Dandruff case (her PollEv, slide 10) --------------------------------- */
{id:'P7-001', skill:'patho', prof:'Patel', tier:'new', topic:'p7-dand', sub:'case', concept:'p7-dandruff-organism',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What organism is associated with causing dandruff?"',
 stem:'CC: A young man comes to the pharmacy counter with complaint of intermittent white flakes appearing on his clothing. He wants a recommendation for a shampoo. HPI: States scalp is not itchy, but small white dry flakes are apparent on any dark clothing. He uses multiple styling products, some contain silicone. He does not have oily skin or hair. The visible scalp does not appear inflamed. Medications: None. What organism is associated with causing dandruff?',
 options:[
  {t:'Staphylococcus', correct:false, why:'S. aureus goes with atopic dermatitis infections (Lecture 5). "When did we talk about a staph? ... Dermatitis" (T@81752 11/10).'},
  {t:'Streptococcus', correct:false, why:'Not linked to dandruff (slide 8). A streptococcal skin infection can precipitate psoriasis (slide 24).'},
  {t:'Malassezia', correct:true, why:'Slide 8: "Presence of Malassezia fungi" (her answer, T@81752 11/10).'},
  {t:'P. acnes', correct:false, why:'P. acnes is the acne bacterium (Lecture 6).'}],
 teach:'Malassezia is behind both dandruff and seborrheic dermatitis (slides 8, 11).',
 cite:P7Q+' slides 8, 10, 11; PollEv 11/10; T@81752 11/10'},

{id:'P7-002', skill:'case', prof:'Patel', tier:'new', topic:'p7-dand', sub:'case', concept:'p7-dandruff-case-severity',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What best classifies the severity this patient is presenting with?"',
 stem:'Same patient (intermittent white flakes on dark clothing, scalp not itchy and not inflamed). What best classifies the severity this patient is presenting with?',
 options:[
  {t:'Mild presentation', correct:true, why:'Slide 9: "Mild presentation: Intermittent dandruff, mild inflammation". "Intermittent white flakes, right? Not daily" (T@82442 11/10).'},
  {t:'Moderate presentation', correct:false, why:'Slide 9: moderate to severe is daily dandruff with moderate–severe inflammation.'},
  {t:'Severe presentation', correct:false, why:'Daily dandruff with moderate–severe inflammation (slide 9); his is intermittent with no inflammation.'},
  {t:'Mild-Moderate presentation', correct:false, why:'Slide 9 has two groups only: mild, and moderate to severe.'}],
 teach:'"I’ll make it clear on the exam, so that way you understand what the right answer is" (T@82442 11/10).',
 cite:P7Q+' slides 9–10; PollEv 11/10; T@82442 11/10'},

{id:'P7-003', skill:'case', prof:'Patel', tier:'new', topic:'p7-dand', sub:'case', concept:'p7-dandruff-case-shampoo',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "Based on this patient’s severity what shampoo would be best to recommend?"',
 stem:'Same patient (mild dandruff). Based on this patient’s severity what shampoo would be best to recommend?',
 options:[
  {t:'Non-Medicated Shampoo', correct:true, why:'Slide 9, mild: "Non-Medicated shampoo, Daily or every other day" (T@82442 11/10).'},
  {t:'Medicated Shampoo containing Coal Tar', correct:false, why:'Coal tar is an OTC medicated shampoo for moderate to severe dandruff (slide 9).'},
  {t:'Medicated Shampoo containing Sulfur', correct:false, why:'A medicated product; mild dandruff takes a non-medicated shampoo (slide 9).'},
  {t:'Shampoo containing sulfates', correct:false, why:'Not a dandruff treatment on slides 7 or 9.'}],
 teach:'Mild: non-medicated, daily or every other day. Moderate to severe: medicated (slide 9).',
 cite:P7Q+' slides 7, 9; PollEv 11/10; T@82442 11/10'},

/* ---- Seborrheic dermatitis cases (her PollEv, slides 19-20) --------------- */
{id:'P7-004', skill:'case', prof:'Patel', tier:'new', topic:'p7-sd', sub:'case', concept:'p7-sd-case-problem',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What is this patient’s primary problem?"',
 stem:'CC: "I have tried a lot of different products. Nothing helps my dermatitis issue." HPI: A 35-year-old man reports itching, redness, and scaling in his scalp, eyebrows and external auditory canal. He has tried several over-the-counter dandruff shampoos, with only temporary relief, and he is increasingly embarrassed by this problem. On exam, greasy scaling on the scalp and erythema with yellowish scales in the nasolabial creases. What is this patient’s primary problem?',
 options:[
  {t:'Dandruff', correct:false, why:'Dandruff is thin white or grey flakes on the scalp with no inflammation (slide 6); he has erythema and yellow greasy scales beyond the scalp.'},
  {t:'Psoriasis', correct:false, why:'Psoriasis: red plaques with sharp borders and silvery white scales on scalp, elbows, knees (slide 6).'},
  {t:'Atopic Dermatitis', correct:false, why:'Atopic dermatitis is Lecture 5; yellow greasy scales in the nasolabial creases point to seborrheic dermatitis (slide 12).'},
  {t:'Seborrhea Dermatitis', correct:true, why:'Slides 6, 12: yellow, greasy scales on red skin; head, ears and face. "Key terms there, greasy, scaling, yellowish scales ... as well as the location" (T@94640 11/10).'},
  {t:'None of the above', correct:false, why:'Seborrheic dermatitis fits (slide 12).'}],
 teach:'Read the key words: greasy, yellowish scales, and the location (T@94640 11/10).',
 cite:P7Q+' slides 6, 12, 19; PollEv 11/10; T@93319, T@94640 11/10'},

{id:'P7-005', skill:'case', prof:'Patel', tier:'new', topic:'p7-sd', sub:'case', concept:'p7-sd-case-first-line',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What would be the most appropriate first-line treatment choice at this time?"',
 stem:'Same patient (35-year-old man with seborrheic dermatitis of the scalp, eyebrows, ear canal and nasolabial creases). What would be the most appropriate first-line treatment choice at this time?',
 options:[
  {t:'Metronidazole Gel', correct:false, why:'Not a seborrheic dermatitis treatment on slides 14–17.'},
  {t:'Ketoconazole Shampoo', correct:true, why:'Slide 16: ketoconazole shampoo first line; selenium sulfide, pyrithione zinc, ciclopirox, coal tar second line. "First line is your key term here. Adult patient, seborrheic dermatitis, ketoconazole shampoo" (T@94640–95306 11/10).'},
  {t:'Selenium Sulfide Shampoo', correct:false, why:'Second line for seborrheic dermatitis (slide 16).'},
  {t:'Brimonidine Gel', correct:false, why:'Not a seborrheic dermatitis treatment on slides 14–17.'},
  {t:'None of the above', correct:false, why:'Ketoconazole shampoo is first line (slide 16).'}],
 teach:'"First line" is the key word: ketoconazole shampoo for adults (slide 16).',
 cite:P7Q+' slide 16; PollEv 11/10; T@94640–95306 11/10'},

{id:'P7-006', skill:'case', prof:'Patel', tier:'new', topic:'p7-inf', sub:'case', concept:'p7-infant-case-problem',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What is the patient’s primary problem?"',
 stem:'CC: "I am concerned about my baby’s scalp." HPI: A new mom comes to the pharmacy with an infant that looks to be a couple of weeks old. She asks about the scaly appearance of the infant’s scalp and what she should do. What is the patient’s primary problem?',
 options:[
  {t:'Acne Vulgaris', correct:false, why:'Acne is comedones and inflammatory lesions (Lecture 6), not a scaly infant scalp.'},
  {t:'Dandruff', correct:false, why:'Dandruff begins at puberty (slide 8).'},
  {t:'Atopic Dermatitis', correct:false, why:'Infant AD is an oozing papular rash of face, scalp, trunk and limbs (Lecture 5); scaling of the scalp alone is cradle cap.'},
  {t:'Seborrhea Dermatitis', correct:true, why:'Slides 11–12: infants, greasy or dry scaling of the scalp, "cradle cap". "This is an example of cradle cap" (T@95306 11/10).'},
  {t:'None of the above', correct:false, why:'Seborrheic dermatitis (cradle cap) fits (slide 12).'}],
 teach:'In infants seborrheic dermatitis is scalp scaling only (T@90224 11/10).',
 cite:P7Q+' slides 8, 11–12, 20; PollEv 11/10; T@95306 11/10'},

{id:'P7-007', skill:'case', prof:'Patel', tier:'new', topic:'p7-inf', sub:'case', concept:'p7-infant-case-tx',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10: "What is the most appropriate treatment option to use on the infant’s scalp?"',
 stem:'Same infant (a couple of weeks old, cradle cap). What is the most appropriate treatment option to use on the infant’s scalp?',
 options:[
  {t:'Massage scalp with baby oil', correct:true, why:'Slide 18: "Massage scalp with baby oil or vegetable oil; Then, shampoo with non-medicated shampoo; Use soft bristle brush" (T@95994 11/10).'},
  {t:'Ketoconazole Shampoo', correct:false, why:'"Ketoconazole shampoo is not recommended in infants" (T@95994 11/10).'},
  {t:'Hydrocortisone Cream', correct:false, why:'Slide 18: "DO NOT suggest corticosteroids"; "Hydrocortisone, absolutely not" (T@95994 11/10).'},
  {t:'Nystatin Ointment', correct:false, why:'"Nystatin ointment, never talked about it, but would not be beneficial" (T@95994 11/10).'}],
 teach:'Infants: oil, non-medicated shampoo, soft brush; no ketoconazole, no corticosteroids (slide 18).',
 cite:P7Q+' slide 18; PollEv 11/10; T@95994 11/10'},

/* ---- Comparing the three (slides 5-8) ------------------------------------- */
{id:'P7-008', skill:'tell', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7-cmp-inflammation',
 tags:['two-facts','tell'], source:'both',
 stem:'Which features are absent in dandruff but present in seborrheic dermatitis and psoriasis?',
 options:[
  {t:'Malassezia yeast and flaking of the scalp skin', correct:false, why:'Dandruff has Malassezia and flaking (slide 8).'},
  {t:'Scalp involvement and itching', correct:false, why:'All three involve the scalp (slide 6), and dandruff causes pruritus (slide 8).'},
  {t:'Inflammation and epidermal hyperplasia', correct:true, why:'Slide 6: inflammation absent / present / present; epidermal hyperplasia absent / present / present (T@77761–78433 11/10).'},
  {t:'Puberty onset and peak in adulthood', correct:false, why:'Those describe dandruff (slide 8).'}],
 teach:'Dandruff is the non-inflammatory one (slides 6, 8).',
 cite:P7Q+' slides 6, 8; T@77761–78433 11/10'},

{id:'P7-009', skill:'tell', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7-cmp-turnover',
 tags:['tell'], source:'both',
 stem:'Rank the epidermal turnover (epidermal kinetics) of the three scaly dermatoses from fastest to slowest.',
 options:[
  {t:'Psoriasis, seborrheic dermatitis, dandruff', correct:true, why:'"Psoriasis is the fastest ... dandruff is the slowest" (T@83726 11/10); seborrheic dermatitis "the 2nd fastest" (T@85030 11/10); slide 6 row.'},
  {t:'Seborrheic dermatitis, psoriasis, dandruff', correct:false, why:'Psoriasis is the fastest (T@83726 11/10).'},
  {t:'Dandruff, seborrheic dermatitis, psoriasis', correct:false, why:'Reversed: dandruff is the slowest.'},
  {t:'Psoriasis, dandruff, seborrheic dermatitis', correct:false, why:'Seborrheic dermatitis is second fastest; dandruff slowest (T@85030 11/10).'}],
 teach:'Only the order is asked: "I’m not gonna be asking you, is it 8 or 5" (T@83726 11/10).',
 cite:P7Q+' slide 6; T@78433, T@83726, T@85030 11/10'},

{id:'P7-010', skill:'tell', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7-cmp-psoriasis-look',
 tags:['case','tell'], source:'both',
 stem:'A patient has discrete, symmetrical red plaques with sharp borders and silvery white scales on the elbows and knees. Which condition fits?',
 options:[
  {t:'Dandruff', correct:false, why:'Thin white or grey flakes on the scalp (slide 6).'},
  {t:'Seborrheic dermatitis', correct:false, why:'Yellow, oily scales on red skin of scalp, face and trunk (slide 6).'},
  {t:'Psoriasis', correct:true, why:'Slide 6, psoriasis: scalp, elbows, knees, trunk, lower extremities; discrete symmetrical red plaques with sharp borders; silvery white scales, bleeding points (T@77144–77761 11/10).'},
  {t:'Atopic dermatitis', correct:false, why:'AD is dry, inflamed or lichenified papules and plaques (Lecture 5).'}],
 teach:'Silvery scales on sharp-bordered plaques at elbows and knees: psoriasis (slide 6).',
 cite:P7Q+' slide 6; T@77144–77761 11/10'},

{id:'P7-011', skill:'tell', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7-cmp-sd-location',
 tags:['tell'], source:'both',
 stem:'Which location pattern fits seborrheic dermatitis?',
 options:[
  {t:'Scalp', correct:false, why:'Scalp alone is dandruff (slide 6).'},
  {t:'Scalp, face, and trunk', correct:true, why:'Slide 6: seborrheic dermatitis, scalp, face and trunk (T@76480 11/10).'},
  {t:'Elbows, knees, and lower extremities', correct:false, why:'Psoriasis (slide 6).'},
  {t:'Hands and feet', correct:false, why:'Not a pattern on slide 6.'}],
 teach:'Sebaceous areas: scalp, face, chest (slide 11).',
 cite:P7Q+' slides 6, 11; T@76480 11/10'},

{id:'P7-012', skill:'class', prof:'Patel', tier:'new', topic:'p7-otc', sub:'chart', concept:'p7-hc-not-dandruff',
 tags:['tell'], source:'both',
 stem:'Which OTC ingredient is NOT effective for dandruff?',
 options:[
  {t:'Coal tar', correct:false, why:'Slide 7: coal tar 0.5–5% for dandruff.'},
  {t:'Selenium sulfide', correct:false, why:'Slide 7: selenium sulfide 1% for dandruff.'},
  {t:'Pyrithione zinc (rinse-off)', correct:false, why:'Slide 7: pyrithione zinc rinse-off for dandruff.'},
  {t:'Hydrocortisone 1%', correct:true, why:'Slide 7: hydrocortisone, dandruff "no"; 0.5–1% for seborrheic dermatitis and psoriasis. "Hydrocortisone 1%, not effective in dandruff" (T@83062 11/10).'}],
 teach:'"The drug charts are a guide ... you’re referring to our therapeutic lecture" (T@83062 11/10).',
 cite:P7Q+' slide 7; T@79131, T@83062 11/10'},

{id:'P7-013', skill:'class', prof:'Patel', tier:'new', topic:'p7-otc', sub:'chart', concept:'p7-sulfur-not-psoriasis',
 tags:['tell'], source:'both',
 stem:'Which OTC ingredient is NOT effective for psoriasis, though it is used for dandruff and seborrheic dermatitis?',
 options:[
  {t:'Coal tar', correct:false, why:'Slide 7: coal tar 0.5–5% in all three.'},
  {t:'Salicylic acid', correct:false, why:'Slide 7: salicylic acid 1.8–3% in all three.'},
  {t:'Sulfur', correct:true, why:'Slide 7: sulfur 2–5% / 2–5% / no. "Sulfur, not effective in psoriasis" (T@83062 11/10).'},
  {t:'Hydrocortisone 1%', correct:false, why:'Slide 7: hydrocortisone is used for psoriasis (0.5–1%); it is the dandruff "no".'}],
 teach:'Two "no" cells on slide 7: hydrocortisone for dandruff, sulfur for psoriasis.',
 cite:P7Q+' slide 7; T@79131, T@83062 11/10'},

/* ---- Dandruff (slides 8-9) ------------------------------------------------ */
{id:'P7-014', skill:'case', prof:'Patel', tier:'new', topic:'p7-dand', sub:'tx', concept:'p7-dandruff-moderate-tx',
 tags:['case'], source:'both',
 stem:'A 30-year-old man has dandruff every day, with an itchy, moderately inflamed scalp. Which product is appropriate?',
 options:[
  {t:'A non-medicated shampoo daily or every other day', correct:false, why:'That is for mild, intermittent dandruff (slide 9).'},
  {t:'Hydrocortisone 1% lotion to the scalp', correct:false, why:'Hydrocortisone is not effective for dandruff (slide 7).'},
  {t:'A medicated shampoo such as pyrithione zinc', correct:true, why:'Slide 9: moderate to severe (daily dandruff, moderate–severe inflammation): OTC medicated shampoos, pyrithione zinc, selenium sulfide, coal tar (T@80418–81060 11/10).'},
  {t:'Massage with baby oil, then a soft brush', correct:false, why:'That is infant cradle-cap care (slide 18).'}],
 teach:'Daily dandruff with moderate to severe inflammation: medicated shampoo (slide 9).',
 cite:P7Q+' slides 7, 9, 18; T@80418–81060 11/10'},

{id:'P7-015', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-dand', sub:'tx', concept:'p7-dandruff-schedule',
 tags:['counseling','two-facts'], source:'both',
 stem:'How is a medicated dandruff shampoo used for moderate to severe dandruff?',
 options:[
  {t:'Leave on 3–5 minutes; daily for 1 week, then 2–3 times weekly for 2–3 weeks, then weekly', correct:true, why:'Slide 9: leave on 3 to 5 minutes, rinse well; "Daily x 1 week, then, 2-3 times weekly for 2 to 3 weeks, then once weekly for control" (T@81060 11/10).'},
  {t:'Leave on 3–5 minutes; daily for 1–2 weeks, then 2–3 times weekly for 4 weeks, then weekly', correct:false, why:'That is the seborrheic dermatitis schedule (slide 16).'},
  {t:'Rinse off at once; daily for 4 weeks, then stop', correct:false, why:'It stays on 3–5 minutes, then a weekly maintenance (slide 9).'},
  {t:'Leave on overnight; twice weekly for 8 weeks', correct:false, why:'Not on slide 9.'}],
 teach:'Dandruff: 1 week daily, then 2–3 weeks at 2–3 times weekly. Seborrheic dermatitis: 1–2 weeks daily, then 4 weeks (slides 9, 16).',
 cite:P7Q+' slides 9, 16; T@81060 11/10'},

{id:'P7-016', skill:'patho', prof:'Patel', tier:'new', topic:'p7-dand', sub:'path', concept:'p7-dandruff-secondary-inflam',
 tags:['fine-detail'], source:'both',
 stem:'Dandruff is a non-inflammatory condition, yet the scalp can look mildly inflamed. Why?',
 options:[
  {t:'Malassezia invades the dermis from the start of the disease', correct:false, why:'Inflammation is not present from the start (T@84375 11/10).'},
  {t:'The inflammation is secondary, from scratching the itch', correct:true, why:'Slide 8: non-inflammatory; causes mild inflammation, flaking and pruritus. "Inflammation’s caused by the itching ... it’s not gonna be from the start of that condition ... Yeah, secondary" (T@84375 11/10).'},
  {t:'The faster epidermal turnover itself inflames the scalp', correct:false, why:'Accelerated turnover is a dandruff feature (slide 8); she tied the inflammation to scratching.'},
  {t:'Silicone styling products inflame the scalp', correct:false, why:'Not a cause on slide 8.'}],
 teach:'In seborrheic dermatitis and psoriasis, inflammation is present from the beginning (T@84375 11/10).',
 cite:P7Q+' slide 8; T@84375 11/10'},

/* ---- Seborrheic dermatitis, adults (slides 11-17) ------------------------- */
{id:'P7-017', skill:'epi', prof:'Patel', tier:'new', topic:'p7-sd', sub:'risk', concept:'p7-sd-risk', multi:true,
 tags:['list'], source:'both',
 stem:'Which are risk factors or triggers for seborrheic dermatitis? Select all that apply.',
 options:[
  {t:'Parkinson disease', correct:true, why:'Slide 13.'},
  {t:'Zinc deficiency', correct:true, why:'Slide 13.'},
  {t:'HIV infection', correct:true, why:'Slide 13: HIV/AIDS (T@86334–86988 11/10).'},
  {t:'Warm, humid weather', correct:false, why:'Slide 13: worsens in cold weather.'},
  {t:'Excess vitamin B12', correct:false, why:'Vitamin B12 is on the acne causative list (Lecture 6), not slide 13.'}],
 teach:'Slide 13: Malassezia; physical stress, fatigue, travel; zinc deficiency; change of season, cold weather; HIV/AIDS; Parkinson disease.',
 cite:P7Q+' slide 13; T@86334–86988 11/10'},

{id:'P7-018', skill:'tell', prof:'Patel', tier:'new', topic:'p7-sd', sub:'pres', concept:'p7-sd-adult-vs-infant',
 tags:['two-facts','tell'], source:'both',
 stem:'How does seborrheic dermatitis in adults differ from cradle cap in infants?',
 options:[
  {t:'Adults have dry white flakes on the scalp; infants have red plaques with silvery white scales', correct:false, why:'Dry white flakes are dandruff; silvery plaques are psoriasis (slide 6).'},
  {t:'Adults: yellow, greasy scales on red skin, beyond the scalp; infants: scalp scaling', correct:true, why:'Slide 12: infants, greasy or dry scaling of the scalp; adults, yellow greasy scales on red inflamed skin of head, ears and face (T@86334, T@90224 11/10: "infants, it’s only on the scalp").'},
  {t:'Adults have it on the scalp, while infants have it on the face, chest and trunk', correct:false, why:'Reversed (slide 12).'},
  {t:'Adults have no itching; infants have stinging and itching of the scalp and face', correct:false, why:'Slide 12: adults often have itching and stinging.'}],
 teach:'Infants: scalp only. Adults: head, ears, face (slide 12).',
 cite:P7Q+' slides 6, 12; T@86334, T@90224 11/10'},

{id:'P7-019', skill:'epi', prof:'Patel', tier:'new', topic:'p7-sd', sub:'epi', concept:'p7-sd-epi',
 tags:['fine-detail'], source:'both',
 stem:'Which statement about who gets seborrheic dermatitis is accurate?',
 options:[
  {t:'It can persist in infants up to 30 months; in adults, men > women', correct:true, why:'Slide 11: "Affects infants, may persist up to 30 months of age"; adolescents and adults 1–3%; men > women (T@85719 11/10).'},
  {t:'It affects about 10% of adults, and women more often than men', correct:false, why:'Slide 11: 1–3%, men > women.'},
  {t:'It is contagious in infants up to 30 months, so keep the infant home', correct:false, why:'Slide 11: neither harmful nor contagious.'},
  {t:'It has no link to Malassezia and is caused by bacteria', correct:false, why:'Slide 11: involves Malassezia species.'}],
 teach:'Chronic, no specific cure, not contagious (slide 11).',
 cite:P7Q+' slide 11; T@85719 11/10'},

{id:'P7-020', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7-sd-schedule',
 tags:['counseling','two-facts'], source:'both',
 stem:'An adult starts ketoconazole shampoo for seborrheic dermatitis of the scalp. Which regimen is appropriate?',
 options:[
  {t:'3–5 minutes; daily for 1 week, then 2–3 times weekly for 2–3 weeks, then once weekly for control', correct:false, why:'That is the dandruff schedule (slide 9).'},
  {t:'3–5 minutes; daily for 1–2 weeks, then 2–3 times weekly for 4 weeks; weekly once improved', correct:true, why:'Slide 16: leave on 3 to 5 minutes, rinse; daily for 1–2 weeks; 2–3 times a week for 4 weeks; if improved after 4 weeks, reduce to once weekly (T@88961–89612 11/10).'},
  {t:'Rinse off at once; twice daily for 4 weeks, then stop when the flakes are gone', correct:false, why:'It stays on 3–5 minutes (slide 16); the condition is chronic.'},
  {t:'Leave on overnight; once weekly from the start, increasing to daily if needed', correct:false, why:'Daily first, weekly once improved (slide 16).'}],
 teach:'Seborrheic dermatitis taper: 1–2 weeks daily, 4 weeks at 2–3 times weekly, then weekly (slide 16).',
 cite:P7Q+' slides 9, 16; T@88961–89612 11/10'},

{id:'P7-021', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7-sd-referral-7d',
 tags:['referral'], source:'both',
 stem:'An adult using ketoconazole shampoo for seborrheic dermatitis of the scalp asks when to see a provider. What is appropriate?',
 options:[
  {t:'If it is not fully cleared after 14 days of daily shampoo use', correct:false, why:'Slide 16 gives 7 days.'},
  {t:'If it worsens or symptoms persist longer than 7 days', correct:true, why:'Slide 16: "If disorder worsens or symptoms persist longer than 7 days, a health care provider should be consulted" (T@89612 11/10).'},
  {t:'If it is not cleared after 4 weeks of shampooing', correct:false, why:'At 4 weeks of improvement the frequency is reduced to weekly (slide 16); referral is at 7 days.'},
  {t:'When the lesions spread from the scalp to the face', correct:false, why:'Face lesions are treated with antifungal creams (slide 16).'}],
 teach:'"Again, the 7-day period comes into play, referral straight to healthcare provider" (T@89612 11/10).',
 cite:P7Q+' slide 16; T@89612 11/10'},

{id:'P7-022', skill:'case', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7-sd-resistant',
 tags:['fine-detail'], source:'both',
 stem:'An adult’s scalp seborrheic dermatitis has resisted ketoconazole shampoo alone. Which combination is used next?',
 options:[
  {t:'Ketoconazole shampoo plus a corticosteroid cream on the scalp', correct:false, why:'Slide 17: creams are for other parts of the body; lotion for the scalp.'},
  {t:'Ketoconazole shampoo plus a corticosteroid lotion', correct:true, why:'Slide 17: "Corticosteroid lotion for the scalp"; "Ketoconazole shampoo and corticosteroid lotion must often be combined in therapy-resistant cases" (T@91542–92113 11/10).'},
  {t:'Coal tar shampoo plus sulfur cream', correct:false, why:'Not the therapy-resistant combination on slide 17.'},
  {t:'Selenium sulfide shampoo plus dishwashing liquid', correct:false, why:'Dishwashing liquid is for tough scale (slide 15), not a resistant-case combination.'}],
 teach:'Scalp: lotion. Body: cream (slide 17).',
 cite:P7Q+' slides 15, 17; T@91542–92113 11/10'},

{id:'P7-023', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7-sd-soften-scales',
 tags:['recall'], source:'both',
 stem:'How are thick scales and crusts of seborrheic dermatitis softened before removal?',
 options:[
  {t:'With hydrocortisone 1% lotion applied to the scales twice daily', correct:false, why:'Not a softening method on slide 15.'},
  {t:'By brushing the dry scalp firmly before any washing', correct:false, why:'Not on slide 15.'},
  {t:'Mineral or olive oil, or a cream with salicylic acid or sulfur', correct:true, why:'Slide 15: "The scales can be softened with a: Mineral Oil or Olive Oil; Cream containing Salicylic Acid or Sulfur" (T@87666 11/10).'},
  {t:'With an alcohol-based astringent applied after shampooing', correct:false, why:'Not on slide 15.'}],
 teach:'Slide 15 also allows dishwashing liquid on tough scale.',
 cite:P7Q+' slide 15; T@87666 11/10'},

{id:'P7-024', skill:'dose', prof:'Patel', tier:'new', topic:'p7-qty', sub:'calc', concept:'p7-ftu-face-bid-7d',
 tags:['calculation','case'], source:'both',
 stem:'An adult with seborrheic dermatitis of the face and neck is to apply an antifungal cream twice daily for 7 days. Tubes of 15, 30, 45 and 60 g are available. Which is the most appropriate size to dispense?',
 options:[
  {t:'15 g', correct:false, why:'15 g covers once daily for 7 days (8.75 g), not twice daily.'},
  {t:'30 g', correct:true, why:'Slide 4: face and neck 2.5 FTU, FTU ≈ 0.5 g: 1.25 g × 2 × 7 = 17.5 g; round up to 30 g.'},
  {t:'45 g', correct:false, why:'45 g fits 14 days twice daily (35 g), or 1 g per FTU.'},
  {t:'60 g', correct:false, why:'More than the next tube up from 17.5 g.'}],
 teach:'"Hint, please know this chart, OK? So adult only" (T@76480 11/10). Round up to the tube offered (Lecture 5).',
 cite:P7Q+' slides 4, 16; T@76480 11/10'},

{id:'P7-025', skill:'dose', prof:'Patel', tier:'new', topic:'p7-qty', sub:'calc', concept:'p7-ftu-face-daily-7d',
 tags:['calculation'], source:'slide', dupOf:'P7-024',
 stem:'An adult applies an antifungal cream to seborrheic dermatitis of the face and neck once daily for 7 days. Tubes of 15, 30, 45 and 60 g are available. Which tube is dispensed?',
 options:[
  {t:'15 g', correct:true, why:'Slide 4: 2.5 FTU × 0.5 g = 1.25 g × 1 × 7 = 8.75 g; round up to 15 g.'},
  {t:'30 g', correct:false, why:'30 g fits twice daily (17.5 g).'},
  {t:'45 g', correct:false, why:'45 g fits twice daily for 14 days (35 g).'},
  {t:'60 g', correct:false, why:'Far above 8.75 g.'}],
 teach:'Grams = FTU × 0.5 × applications a day × days.',
 cite:P7Q+' slide 4'},

/* ---- Infants (slide 18) --------------------------------------------------- */
{id:'P7-026', skill:'case', prof:'Patel', tier:'new', topic:'p7-inf', sub:'tx', concept:'p7-infant-severe',
 tags:['case'], source:'both',
 stem:'A 6-month-old’s thick cradle cap has not cleared with daily baby-oil massage, a non-medicated shampoo and a soft brush. Which option is appropriate for severe cases?',
 options:[
  {t:'Ketoconazole 1% shampoo, left on for 3–5 minutes', correct:false, why:'Ketoconazole is not recommended for infants (T@90863 11/10).'},
  {t:'Hydrocortisone 1% cream twice daily for 7 days', correct:false, why:'Slide 18: do not suggest corticosteroids.'},
  {t:'Selenium sulfide 1% shampoo used two to three times weekly', correct:false, why:'Not an infant option on slide 18.'},
  {t:'Salicylic acid 3–5% in olive oil or a water-soluble base', correct:true, why:'Slide 18: "For severe cases: Salicylic Acid 3–5% in olive oil or water-soluble base" (T@92719–93319 11/10).'}],
 teach:'Infants: no ketoconazole, no corticosteroids (slide 18; T@95994 11/10).',
 cite:P7Q+' slide 18; T@90863, T@92719–93319, T@95994 11/10'},

{id:'P7-027', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-inf', sub:'tx', concept:'p7-infant-care', multi:true,
 tags:['list'], source:'both',
 stem:'For seborrheic dermatitis in an infant, which are appropriate? Select all that apply.',
 options:[
  {t:'Massage the scalp daily with baby oil or vegetable oil', correct:true, why:'Slide 18.'},
  {t:'Then shampoo with a non-medicated shampoo', correct:true, why:'Slide 18.'},
  {t:'Use a soft bristle brush', correct:true, why:'Slide 18 (T@92719 11/10).'},
  {t:'Hydrocortisone 1% cream for facial lesions', correct:false, why:'Slide 18: on the face, mild soap and a facial emollient; do not suggest corticosteroids.'},
  {t:'Ketoconazole shampoo', correct:false, why:'Not recommended in infants (T@95994 11/10).'}],
 teach:'Face: wash with mild soap or cleanser, apply a facial emollient (slide 18).',
 cite:P7Q+' slide 18; T@92719–93319, T@95994 11/10'},

/* ---- Harder dandruff and seborrheic dermatitis items (Part C) ------------- */
{id:'P7H-001', skill:'case', prof:'Patel', tier:'new', topic:'p7-dand', sub:'tx', concept:'p7h-mild-dandruff-woman',
 tags:['hard','case'], source:'both',
 stem:'A 45-year-old woman notices white flakes on her scalp a few times a month. The scalp is mildly itchy and only slightly inflamed. Her skin and hair are not oily, and there are no yellow scales. Which recommendation is most appropriate?',
 options:[
  {t:'A non-medicated shampoo, used daily or every other day', correct:true, why:'Slide 9: intermittent dandruff with mild inflammation is mild; non-medicated shampoo daily or every other day (T@80418, T@82442 11/10).'},
  {t:'Ketoconazole 1% shampoo, used daily for 1 to 2 weeks', correct:false, why:'Ketoconazole first line is for seborrheic dermatitis (slide 16).'},
  {t:'Pyrithione zinc shampoo, left on 3–5 minutes, used daily', correct:false, why:'Medicated shampoos are for daily dandruff with moderate–severe inflammation (slide 9).'},
  {t:'Hydrocortisone 1% lotion on the scalp twice a day', correct:false, why:'Hydrocortisone is not effective for dandruff (slide 7; T@83062 11/10).'}],
 teach:'Intermittent plus mild inflammation: mild dandruff (slide 9).',
 cite:P7Q+' slides 7, 9, 16; T@80418, T@82442, T@83062 11/10'},

{id:'P7H-002', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-dand', sub:'tx', concept:'p7h-dandruff-week2',
 tags:['hard','case'], source:'both',
 stem:'A 30-year-old man with daily dandruff and a moderately inflamed scalp has used a selenium sulfide shampoo daily for 1 week, left on 3–5 minutes each time, and is improving. How should he use it now?',
 options:[
  {t:'2–3 times weekly for 2–3 weeks, then once weekly for control', correct:true, why:'Slide 9: "Daily x 1 week, then, 2-3 times weekly for 2 to 3 weeks, then once weekly for control" (T@81060 11/10).'},
  {t:'Once weekly from now on, since he improved during the first week', correct:false, why:'The 2–3 times weekly step comes first (slide 9).'},
  {t:'Daily for 3 more weeks, then stop once the flakes have gone away', correct:false, why:'Daily is for 1 week only, then a taper to weekly control (slide 9).'},
  {t:'2–3 times weekly for 4 weeks, then switch it to ketoconazole 1%', correct:false, why:'"2–3 times a week for 4 weeks" is the seborrheic dermatitis schedule (slide 16).'}],
 teach:'Dandruff taper after week 1: 2–3 times weekly for 2–3 weeks, then weekly (slide 9).',
 cite:P7Q+' slides 9, 16; T@81060 11/10'},

{id:'P7H-003', skill:'case', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7h-sd-face-cream',
 tags:['hard','case'], source:'both',
 stem:'A 38-year-old man has yellow, greasy scales on red skin in his eyebrows and nasolabial folds, and his scalp is clear. To decrease the fungal growth at these sites, which product is most appropriate?',
 options:[
  {t:'An antifungal cream applied to the face', correct:true, why:'Slide 16: "Face and Body: Topical treatment with antifungal creams". "When it comes to the face and body ... anti-fungal creams" (T@89612 11/10).'},
  {t:'Ketoconazole 1% shampoo applied to the scalp', correct:false, why:'The shampoo treats the scalp (slide 16); his scalp is clear.'},
  {t:'Mineral oil on the face, then a soft brush', correct:false, why:'Oil and a soft brush are scale softening and infant scalp care (slides 15, 18).'},
  {t:'Salicylic acid 3–5% in olive oil on the face', correct:false, why:'Salicylic acid 3–5% in oil is for severe infant scalp cases (slide 18).'}],
 teach:'Adults: shampoo for the scalp, antifungal cream for the face and body (slide 16).',
 cite:P7Q+' slides 12, 15–16, 18; T@89612, T@92719 11/10'},

{id:'P7H-004', skill:'case', prof:'Patel', tier:'new', topic:'p7-inf', sub:'tx', concept:'p7h-infant-face',
 tags:['hard','case'], source:'both',
 stem:'A 3-week-old has cradle cap and some scaling on the cheeks. The mother asks whether she can use the hydrocortisone 1% cream she bought for herself on the baby’s face. What should the pharmacist recommend for the face?',
 options:[
  {t:'Wash with a mild soap or cleanser, then apply a facial emollient', correct:true, why:'Slide 18: "On face wash with mild soap or cleanser, apply facial emollient DO NOT suggest corticosteroids" (T@92719 11/10).'},
  {t:'Apply the hydrocortisone 1% cream thinly twice a day for 3–7 days', correct:false, why:'"We’re still not recommending corticosteroids cause remember the age parameter" (T@92719 11/10).'},
  {t:'Apply ketoconazole 1% shampoo to the face and rinse after 3–5 min', correct:false, why:'Ketoconazole is not used in infants (T@90863 11/10).'},
  {t:'Apply salicylic acid 3–5% in olive oil to the cheeks once a day', correct:false, why:'Salicylic acid 3–5% is for severe scalp cases (slide 18).'}],
 teach:'Infant face: mild cleanser and emollient (slide 18).',
 cite:P7Q+' slide 18; T@90863, T@92719, T@95994 11/10'},

{id:'P7H-005', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'p7h-sd-step-down',
 tags:['hard','case'], source:'both',
 stem:'An adult with scalp seborrheic dermatitis used ketoconazole shampoo daily for 2 weeks, then 2–3 times a week for 4 weeks, and is now much improved. What is the most appropriate change?',
 options:[
  {t:'Reduce to once weekly', correct:true, why:'Slide 16: "If see improvement after 4 weeks, may reduce the frequency to once weekly" (T@89612 11/10).'},
  {t:'Stop the shampoo now', correct:false, why:'A chronic condition with no specific cure (slide 11); the frequency is reduced, not stopped.'},
  {t:'Return to daily use', correct:false, why:'He improved; the frequency goes down (slide 16).'},
  {t:'Switch to coal tar shampoo', correct:false, why:'Coal tar is second line (slide 16); the first-line agent is working.'}],
 teach:'"When you see that improvement after 4 weeks, that’s when you can decrease the frequency over time" (T@89612 11/10).',
 cite:P7Q+' slides 11, 16; T@88961, T@89612 11/10'},

{id:'P7H-006', skill:'tell', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7h-against-dandruff',
 tags:['hard','tell'], source:'both',
 stem:'A patient asks for a dandruff shampoo. Which finding argues against dandruff and points to seborrheic dermatitis or psoriasis?',
 options:[
  {t:'Inflamed skin under the scales from the start', correct:true, why:'Slide 6: inflammation absent in dandruff, present in the other two; "versus the other two, you’re going to see inflammation from the beginning" (T@84375 11/10).'},
  {t:'Thin white or grey flakes seen across the scalp', correct:false, why:'Dandruff appearance (slide 6).'},
  {t:'Flakes that get worse in cold, dry weather', correct:false, why:'Dandruff: increases in dry climate, cold temperature or stress (slide 6).'},
  {t:'Scaling that stays limited to the scalp', correct:false, why:'Dandruff location (slide 6).'}],
 teach:'Inflammation from the onset, not secondary to scratching, separates the other two from dandruff.',
 cite:P7Q+' slide 6; T@77144, T@77761, T@84375 11/10'},

{id:'P7H-007', skill:'patho', prof:'Patel', tier:'new', topic:'p7-cmp', sub:'cmp', concept:'p7h-organisms',
 tags:['hard','tell'], source:'both',
 stem:'Which pairing of a condition with its associated organism is correct?',
 options:[
  {t:'Seborrheic dermatitis: Malassezia', correct:true, why:'Slides 11, 13: Malassezia species (T@81752 11/10).'},
  {t:'Acne vulgaris: Candida albicans', correct:false, why:'Acne goes with P. acnes (Lecture 6); Candida albicans is a diaper dermatitis complication (Lecture 5).'},
  {t:'Dandruff: Staphylococcus aureus', correct:false, why:'Dandruff goes with Malassezia (slide 8); S. aureus with atopic dermatitis infections (Lecture 5).'},
  {t:'Atopic dermatitis: Propionibacterium acnes', correct:false, why:'P. acnes goes with acne (Lecture 6).'}],
 teach:'"When did we talk about a staph? What lecture? Dermatitis ... P acnes, bacteria?" (T@81752 11/10).',
 cite:P7Q+' slides 8, 11, 13; T@81752 11/10'},

/* ---- Psoriasis: her PollEv case (slide 50, 11/11) ------------------------- */
{id:'P7-028', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'case', concept:'p7-pso-case-severity',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/11: "What would best describe this patient’s clinical presentation?"',
 stem:'HPI: A 52-year-old female comes into the clinic; she shows you two approximately 2 cm plaques on the ulnar surface of each elbow, covered with whitish silvery scales. Patient states that these are new and appeared over the past week. Current meds: Enalapril / HCTZ. Past medications: coal tar and steroid creams for a couple of months, seen good results (15 yrs ago). NKDA. BSA score: 7%. What would best describe this patient’s clinical presentation?',
 options:[
  {t:'Mild to Moderate Psoriasis', correct:true, why:'Slide 31: mild BSA ≤ 5%, moderate ≥ 8%. "7% is in between that mild BSA score as well as that moderate BSA score" (her answer, T@34825–34939 11/11).'},
  {t:'Moderate to Severe Psoriasis', correct:false, why:'"What would make it moderate to severe? ... like a 9%, right? So in between that moderate as well as severe" (T@35074 11/11).'},
  {t:'Psoriatic Arthritis', correct:false, why:'A comorbidity affecting the joints (slide 25); she has plaques with no joint findings.'},
  {t:'Atopic Dermatitis', correct:false, why:'Silvery-scaled, sharply bordered plaques on the elbows are psoriasis (slides 6, 26).'}],
 teach:'Her poll of 11/11. BSA between two cut-offs takes both names: 7% mild to moderate, 9% moderate to severe.',
 cite:P7Q+' slides 26, 31, 50; PollEv 11/11; T@34010, T@34825–35074 11/11'},

{id:'P7-029', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'case', concept:'p7-pso-case-otc',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/11: "What would be the most appropriate OTC treatment agent to recommend?"',
 stem:'Same patient (52-year-old woman, mild to moderate plaque psoriasis on both elbows, BSA 7%; good results with coal tar and steroid creams 15 years ago). What would be the most appropriate OTC treatment agent to recommend?',
 options:[
  {t:'Topical corticosteroids', correct:true, why:'"Topical corticosteroids. So remember, mild to moderate psoriasis patients, topical agents first" (T@35288 11/11); slides 35–36; slide 7: hydrocortisone 0.5–1% for psoriasis.'},
  {t:'NSAIDs', correct:false, why:'NSAIDs are on her list of medications that can precipitate psoriasis (slide 24).'},
  {t:'Isotretinoin', correct:false, why:'A prescription oral retinoid for severe refractory acne (Lecture 6), not OTC and not a psoriasis option.'},
  {t:'Accutane', correct:false, why:'Accutane is the brand of isotretinoin (Lecture 6).'}],
 teach:'Mild to moderate: topical agents first; systemic last line (slide 35; T@13117 11/11).',
 cite:P7Q+' slides 7, 24, 35–36, 50; PollEv 11/11; T@35160–35288 11/11'},

{id:'P7H-008', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'p7h-bsa-9',
 tags:['hard','case'], source:'both',
 stem:'A 34-year-old man has scattered plaques with silvery scale on his trunk and legs. The provider calculates a BSA of 9%. He has no joint symptoms. What best describes his clinical presentation?',
 options:[
  {t:'Mild to moderate psoriasis', correct:false, why:'Mild to moderate is between ≤ 5% and ≥ 8% (her 7% case, T@34939 11/11).'},
  {t:'Moderate to severe psoriasis', correct:true, why:'Slide 31: moderate ≥ 8%, severe ≥ 10%. "Like a 9%, right? So in between that moderate as well as severe" (T@35074 11/11).'},
  {t:'Severe psoriasis', correct:false, why:'Severe is BSA ≥ 10% (slide 31; T@10484 11/11).'},
  {t:'Psoriatic arthritis with plaques', correct:false, why:'No joint symptoms; PsA is a comorbidity of the joints (slide 25).'}],
 teach:'BSA cut-offs (slide 31): ≤ 5% mild, ≥ 8% moderate, ≥ 10% severe.',
 cite:P7Q+' slides 25, 31; T@10231–10484, T@35074 11/11'},

{id:'P7H-009', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-pso', sub:'risk', concept:'p7h-case-nsaid-worsen',
 tags:['hard','case'], source:'both',
 stem:'A 52-year-old woman with new plaques of psoriasis on both elbows asks which OTC product to avoid while she treats them. Which one can worsen psoriasis?',
 options:[
  {t:'Ibuprofen tablets for aches', correct:true, why:'Slide 24: medications that may worsen psoriasis include NSAIDs (T@5483 11/11).'},
  {t:'A thick fragrance-free emollient', correct:false, why:'Moisturizers and emollients are recommended (slide 34).'},
  {t:'A colloidal oatmeal bath product', correct:false, why:'Oatmeal baths are on her non-drug list (slide 34).'},
  {t:'A broad-spectrum SPF 30 sunscreen', correct:false, why:'Sunscreen SPF 30+ with UVA protection is recommended (slide 34).'}],
 teach:'Her poll offered NSAIDs as a wrong OTC choice; they are on the slide 24 list.',
 cite:P7Q+' slides 24, 34; T@5483, T@12466 11/11'},

/* ---- Psoriasis: who, triggers, comorbidities, signs (slides 21-27) -------- */
{id:'P7-030', skill:'epi', prof:'Patel', tier:'new', topic:'p7-pso', sub:'epi', concept:'p7-pso-epi',
 tags:['fine-detail'], source:'both',
 stem:'Which statement about who gets psoriasis is accurate?',
 options:[
  {t:'Peak onset at 20–30 and at 50–60 years; plaque type in more than 80%', correct:true, why:'Slide 21: affects 3% of the US population; peak onset 20–30 and 50–60 years; children infrequent (< 0.2%); no gender preference; plaque type > 80% (T@3146–4077 11/11).'},
  {t:'Peak onset in infancy; it persists up to 30 months of age', correct:false, why:'That is seborrheic dermatitis in infants (slide 11). Children are infrequent in psoriasis (slide 21).'},
  {t:'Single peak onset at 20–30 years; women affected more often than men', correct:false, why:'Slide 21: no gender preference, and a second peak at 50–60.'},
  {t:'Puberty onset with a peak in adulthood; 1–3% of people', correct:false, why:'That is dandruff (slide 8).'}],
 teach:'Two peaks of onset; plaque type is the most common (slide 21).',
 cite:P7Q+' slides 8, 11, 21; T@3146–4077 11/11'},

{id:'P7-031', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-pso', sub:'risk', concept:'p7-pso-precipitating-drug',
 tags:['case'], source:'both',
 stem:'A 58-year-old man has a new flare of plaque psoriasis. His medicines are metformin, omeprazole, levothyroxine and propranolol. Which of them can precipitate psoriasis?',
 options:[
  {t:'Metformin', correct:false, why:'Not on the slide 24 list.'},
  {t:'Omeprazole', correct:false, why:'Not on the slide 24 list.'},
  {t:'Levothyroxine', correct:false, why:'Not on the slide 24 list.'},
  {t:'Propranolol', correct:true, why:'Slide 24 medications: lithium, NSAIDs, antimalarials such as chloroquine, β-adrenergic blockers, fluoxetine, withdrawal of corticosteroids (T@5483 11/11). Propranolol is a β-blocker.'}],
 teach:'Slide 24 also lists skin injury, viral or streptococcal infection, alcohol, smoking, obesity and stress.',
 cite:P7Q+' slide 24; T@5207–5483 11/11'},

{id:'P7-032', skill:'epi', prof:'Patel', tier:'new', topic:'p7-pso', sub:'comorb', concept:'p7-pso-comorbidities', multi:true,
 tags:['list'], source:'both',
 stem:'Which are possible comorbidities of psoriasis? Select all that apply.',
 options:[
  {t:'Psoriatic arthritis', correct:true, why:'Slide 25: "a common condition that occurs over time" (T@5787 11/11).'},
  {t:'Myocardial infarction and stroke', correct:true, why:'Slide 25: cardiovascular diseases (T@5971 11/11).'},
  {t:'Crohn’s disease and ulcerative colitis', correct:true, why:'Slide 25: inflammatory bowel diseases (T@6333 11/11).'},
  {t:'T-cell lymphoma', correct:true, why:'Slide 25: malignancy (T@6231 11/11).'},
  {t:'Asthma and allergic rhinitis', correct:false, why:'Those are the atopic triad with atopic dermatitis (Lecture 5), not on slide 25.'},
  {t:'Hypothyroidism', correct:false, why:'Not on slide 25.'}],
 teach:'Slide 25 also lists peripheral vascular disease, metabolic syndrome, anxiety, depression and renal disease.',
 cite:P7Q+' slide 25; T@5787–6333 11/11'},

{id:'P7-033', skill:'patho', prof:'Patel', tier:'new', topic:'p7-pso', sub:'pres', concept:'p7-pso-plaque-signs',
 tags:['recall'], source:'both',
 stem:'Which description fits the lesions of plaque psoriasis?',
 options:[
  {t:'Red-violet, well demarcated, at least 0.5 cm, with silver flaking scale', correct:true, why:'Slide 26: erythematous; red-violet; at least 0.5 cm in diameter; well demarcated; typically covered by silver, flaking scales (T@6626 11/11).'},
  {t:'Yellow, greasy scales in patches with exudates and crusting on red skin', correct:false, why:'Adult seborrheic dermatitis (slide 12).'},
  {t:'Thin, white or grey flakes on a scalp with no inflammation', correct:false, why:'Dandruff (slide 6).'},
  {t:'Dry, inflamed papules and thin plaques without sharp borders or scales', correct:false, why:'Subacute atopic dermatitis (Lecture 5); psoriasis plaques are sharply bordered.'}],
 teach:'Pruritus in more than 50% of patients; psoriasis has the biggest impact on mental, physical and social health of the conditions taught (slide 27; T@7708, T@8160 11/11).',
 cite:P7Q+' slides 6, 12, 26–27; T@6626, T@7708, T@8160 11/11'},

/* ---- Psoriasis severity by BSA (slides 26, 31-32) ------------------------- */
{id:'P7-034', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'p7-bsa-mild',
 tags:['case','numbers'], source:'both',
 stem:'A 41-year-old woman has a few psoriasis plaques on her knees. The provider calculates a BSA of 3%. How is her psoriasis classified?',
 options:[
  {t:'Mild', correct:true, why:'Slide 31: "Mild: BSA ≤ 5%" (T@10231 11/11).'},
  {t:'Mild to moderate', correct:false, why:'That is a BSA between 5% and 8%, as in her 7% poll case (T@34939 11/11).'},
  {t:'Moderate', correct:false, why:'Moderate: BSA ≥ 8% (slide 31).'},
  {t:'Moderate to severe', correct:false, why:'Between 8% and 10% (T@35074 11/11).'}],
 teach:'Mild ≤ 5%; moderate ≥ 8%; severe ≥ 10% (slide 31). "I only want you to know the BSA" (T@10671 11/11).',
 cite:P7Q+' slide 31; T@10231, T@10671, T@34939 11/11'},

{id:'P7-035', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'p7-bsa-severe',
 tags:['case','numbers'], source:'both',
 stem:'A 47-year-old man has plaques over his back, chest and both legs. The provider calculates a BSA of 12%. How is his psoriasis classified?',
 options:[
  {t:'Moderate', correct:false, why:'Moderate starts at 8% (slide 31); 12% passes the severe cut-off.'},
  {t:'Moderate to severe', correct:false, why:'Between moderate and severe is 8–10%, "like a 9%" (T@35074 11/11).'},
  {t:'Severe', correct:true, why:'Slide 31: "Severe: BSA ≥ 10%". "It has been corrected to 10% ... I want you to follow this slide" (T@10484 11/11).'},
  {t:'Mild to moderate', correct:false, why:'Between 5% and 8% (T@34939 11/11).'}],
 teach:'She first said 20% (T@7390 11/11), then corrected it: follow the slide, 10% (T@10484 11/11).',
 cite:P7Q+' slides 26, 31; T@7390, T@10484, T@35074 11/11'},

{id:'P7-036', skill:'patho', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'p7-bsa-how',
 tags:['recall'], source:'both',
 stem:'How is the body surface area (BSA) of psoriasis found?',
 options:[
  {t:'The provider takes the plaque-covered area as a share of the whole body', correct:true, why:'"They usually take the body surface area that is involved ... and they calculate a proportion to the entire body" (T@10671 11/11); slide 32.'},
  {t:'The pharmacist counts the plaques and multiplies by 0.5 cm', correct:false, why:'0.5 cm is the minimum plaque diameter (slide 26), not a BSA method.'},
  {t:'The patient rates the itch on a numeric scale from 0 to 10', correct:false, why:'A rating scale measures itch severity (slide 31), not BSA.'},
  {t:'It is the number of fingertip units needed for one application, times 10', correct:false, why:'Fingertip units measure cream quantity (slide 4), not BSA.'}],
 teach:'BSA is the most common measure; providers calculate it (slide 31; T@10671 11/11).',
 cite:P7Q+' slides 4, 26, 31–32; T@10671 11/11'},

/* ---- Psoriasis: goals, non-drug care, topicals, algorithms (slides 28-37) - */
{id:'P7-037', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'nonpharm', concept:'p7-pso-lifestyle', multi:true,
 tags:['list'], source:'both',
 stem:'Which healthy-lifestyle and non-drug measures are recommended for every psoriasis patient? Select all that apply.',
 options:[
  {t:'Smoking cessation and moderation of alcohol', correct:true, why:'Slide 33 (T@11707 11/11).'},
  {t:'Weight management, aiming for a BMI of 18.5–24.9', correct:true, why:'Slide 33.'},
  {t:'Sunscreen SPF 30+ with UVA protection', correct:true, why:'Slide 34 (T@12577 11/11).'},
  {t:'Oatmeal baths and moisturizers', correct:true, why:'Slide 34 (T@12466 11/11).'},
  {t:'Wet wraps with a calcineurin inhibitor each night', correct:false, why:'Not on slides 33–34; wet wraps are not used with TCIs (Lecture 5).'},
  {t:'Abrasive scrubs to lift off the scale', correct:false, why:'Not on slides 33–34.'}],
 teach:'"I can’t stress this enough ... without applying non-pharm lifestyle modifications, patients do not necessarily see much of an improvement" (T@12024 11/11).',
 cite:P7Q+' slides 33–34; T@11707–12577 11/11'},

{id:'P7-038', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'alg', concept:'p7-mild-mod-first',
 tags:['case'], source:'both',
 stem:'A 29-year-old man has mild plaque psoriasis (BSA 4%) on his elbows and knees. He has not been treated before. What is the first drug treatment?',
 options:[
  {t:'A topical agent, with non-drug measures', correct:true, why:'Slide 35, mild-to-moderate: topical agents first; "topical agents will always be utilized first. Systemic will be last line, but we will always recommend that non-pharm therapy" (T@12746–13117 11/11).'},
  {t:'Methotrexate with folic acid, with non-drug measures', correct:false, why:'A systemic agent is the last step for mild to moderate psoriasis (slide 35; T@13117 11/11).'},
  {t:'A biologic such as adalimumab, with non-drug measures', correct:false, why:'Biologics are last line after topical and systemic agents (T@15451 11/11).'},
  {t:'PUVA photochemotherapy, with non-drug measures', correct:false, why:'PUVA is absolute last line, for severe refractory psoriasis (slide 45; T@28274 11/11).'}],
 teach:'Mild to moderate: topical first; systemic last line (slide 35).',
 cite:P7Q+' slides 35, 45; T@12746–13117, T@15451, T@28274 11/11'},

{id:'P7-039', skill:'class', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'topical', concept:'p7-tcs-most-effective',
 tags:['two-facts'], source:'both',
 stem:'Which topical class for psoriasis has been shown to be the most effective, and how often is it applied?',
 options:[
  {t:'Calcipotriene; once or twice daily as an ointment', correct:false, why:'Calcipotriene’s regimen (slide 36); corticosteroids are the most effective (T@13916 11/11).'},
  {t:'Corticosteroids; 2 to 4 times daily', correct:true, why:'"In general, corticosteroids has been shown to be the most effective" (T@13916 11/11); slide 36: apply 2 to 4 times daily (T@13549 11/11).'},
  {t:'Tazarotene; once daily at bedtime', correct:false, why:'The topical retinoid regimen (slide 36).'},
  {t:'Coal tar; in the evening, washed off in the morning', correct:false, why:'Coal tar’s regimen (slide 36).'}],
 teach:'"There’s not one better than the other", but corticosteroids are the most effective (T@13916 11/11).',
 cite:P7Q+' slide 36; T@13549–13916 11/11'},

{id:'P7-040', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'topical', concept:'p7-tcs-regimen',
 tags:['counseling','fine-detail'], source:'both',
 stem:'An adult starts a topical corticosteroid for plaque psoriasis on the legs. Which regimen is appropriate?',
 options:[
  {t:'Cream or lotion by day, ointment at night; limit to 4 weeks or less', correct:true, why:'Slide 36: apply 2 to 4 times daily: cream or lotion daytime, ointment night; low potency for face and skin folds; limit duration (≤ 4 weeks) and surface area.'},
  {t:'Ointment in the day, cream at night; limit to 14 days or less', correct:false, why:'Reversed vehicles; 14 days is the OTC hydrocortisone limit in atopic dermatitis (Lecture 5).'},
  {t:'Cream or lotion in the day, ointment at night; continue for 3–6 months', correct:false, why:'Slide 36 limits duration to ≤ 4 weeks.'},
  {t:'Ointment twice daily; limit to 3–7 days, then refer at 7 days', correct:false, why:'3–7 days with referral at 7 days is OTC hydrocortisone in atopic dermatitis (Lecture 5).'}],
 teach:'She waits "about a month or so" on a steroid, stepping up potency, before other options (T@14093 11/11).',
 cite:P7Q+' slide 36; T@13549, T@14093 11/11'},

{id:'P7-041', type:'match', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'topical', concept:'p7-topical-regimen-match',
 tags:['match'], source:'slide',
 stem:'Match each topical psoriasis option to how it is applied.', left:'Topical', right:'Regimen',
 pairs:[
  {l:'Calcipotriene (vitamin D3 analogue)', r:'Once or twice daily (ointment); twice daily (cream or foam)', why:'Slide 36.'},
  {l:'Tazarotene, adapalene (retinoids)', r:'Once daily at bedtime', why:'Slide 36.'},
  {l:'Anthralin', r:'Thick plaques only, 2 hours or less, then wiped off', why:'Slide 36: zinc oxide around the edges protects normal skin.'},
  {l:'Coal tar', r:'In the evening; washed off in the morning', why:'Slide 36.'},
  {l:'Salicylic acid', r:'Shampoo for scalp lesions', why:'Slide 36.'},
  {l:'Pimecrolimus', r:'Applied to intertriginous areas', why:'Slide 36.'}],
 teach:'"When it comes to choosing which topical therapy, it really depends on what they’ve tried in the past and what they’re currently on" (T@13398 11/11).',
 cite:P7Q+' slide 36; T@13398 11/11'},

{id:'P7-042', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'topical', concept:'p7-intertriginous',
 tags:['case'], source:'slide',
 stem:'A 36-year-old woman has psoriasis plaques in the axillae and under the breasts (intertriginous areas). Which topical option fits these sites?',
 options:[
  {t:'Pimecrolimus cream', correct:true, why:'Slide 36: calcineurin inhibitors, pimecrolimus, apply to intertriginous areas; corticosteroids: low potency for skin folds.'},
  {t:'Clobetasol 0.05% ointment', correct:false, why:'Very high potency (Lecture 5); slide 36 keeps skin folds to low potency.'},
  {t:'Anthralin for 2 hours', correct:false, why:'Anthralin is for thick plaque lesions, with zinc oxide protecting the skin around them (slide 36).'},
  {t:'Salicylic acid shampoo', correct:false, why:'Shampoo is for scalp lesions (slide 36).'}],
 teach:'Skin folds: pimecrolimus or a low-potency corticosteroid (slide 36).',
 cite:P7Q+' slide 36'},

{id:'P7H-010', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'alg', concept:'p7h-mild-mod-after-tcs',
 tags:['hard','case'], source:'both',
 stem:'The 52-year-old woman with elbow plaques (BSA 7%) used a low-potency topical steroid, then a higher potency, for about a month, with little change. Her BSA is unchanged. What is the most appropriate next step?',
 options:[
  {t:'Try another topical, such as calcipotriene', correct:true, why:'Mild to moderate: topical agents first (slide 35). "If corticosteroids has been tried, they’ve tried the low potency, they’ve increased the potency over time, they’ve waited about a month or so, then that’s when we go ahead and see if other options are available" (T@14093 11/11); calcipotriene is a topical option (slide 36).'},
  {t:'Start methotrexate with folic acid 1–5 mg daily', correct:false, why:'A systemic agent is the last line for mild to moderate psoriasis (T@13117 11/11); other topicals remain.'},
  {t:'Start adalimumab after a PPD test', correct:false, why:'Biologics come after topical and systemic agents (T@15451 11/11).'},
  {t:'Refer for PUVA photochemotherapy', correct:false, why:'PUVA is absolute last line, for severe refractory psoriasis (slide 45; T@28274 11/11).'}],
 teach:'Mild to moderate, step by step: other topical options before systemic therapy.',
 cite:P7Q+' slides 35–36, 45; T@13117, T@14093, T@15451, T@28274 11/11'},

{id:'P7-043', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'alg', concept:'p7-mod-sev-first-systemic',
 tags:['case'], source:'both',
 stem:'A 45-year-old man has psoriasis with a BSA of 14%. He has used topical corticosteroids, calcipotriene and coal tar without control. He has no other medical conditions. Which next step is most appropriate?',
 options:[
  {t:'Start methotrexate with folic acid; continue a topical agent', correct:true, why:'Slide 37, moderate-to-severe: systemic agent (eg, MTX) ± topical agent. "Most likely methotrexate" (T@14941 11/11); "methotrexate tends to be first line, most affordable" (T@17093 11/11); "that topical medication’s always going to be continued" (T@14941 11/11).'},
  {t:'Start ixekizumab after a negative PPD; stop the topical agents', correct:false, why:'Biologics are last line after a systemic agent (T@15451 11/11); with no comorbidity such as PsA, slide 37 starts with a systemic agent.'},
  {t:'Refer for PUVA photochemotherapy and stop the topical agents', correct:false, why:'PUVA is absolute last line (T@28274 11/11).'},
  {t:'Stay on the same topical agents alone for 6 more months', correct:false, why:'He has tried the topical agents and is severe; a systemic agent is added (slide 37; T@14535–14644 11/11).'}],
 teach:'Moderate to severe: systemic agent (MTX) ± topical; then a more potent systemic or a biologic; then a biologic (slide 37).',
 cite:P7Q+' slide 37; T@14535–15451, T@17093, T@28274 11/11'},

{id:'P7-044', skill:'case', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'alg', concept:'p7-systemic-keep-topical',
 tags:['two-facts'], source:'both',
 stem:'A patient with psoriasis starts a systemic agent after topical options were not enough. How is the topical therapy handled?',
 options:[
  {t:'It is stopped, since the systemic agent replaces it', correct:false, why:'"You’re always going to apply that topical agent ... continued" (T@14941 11/11).'},
  {t:'It is continued alongside the systemic agent', correct:true, why:'Slides 35, 37: topical agents + systemic agent; "The plus or minus, you’re always going to apply that topical agent. So that topical medication’s always going to be continued, but now you’re adding on an oral medication" (T@14941 11/11).'},
  {t:'It is stopped for 4 weeks, then restarted', correct:false, why:'Not on slides 35 or 37.'},
  {t:'It is continued on the face and skin folds, not the body', correct:false, why:'Not a restriction on slides 35 or 37.'}],
 teach:'Both algorithms keep moisturizers ad lib and step down to the lowest doses that maintain control (slides 35, 37).',
 cite:P7Q+' slides 35, 37; T@14941 11/11'},

{id:'P7-045', skill:'class', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'alg', concept:'p7-biologic-place',
 tags:['recall'], source:'both',
 stem:'In psoriasis, when is a biologic agent used?',
 options:[
  {t:'First, for mild plaques on the face and in skin folds', correct:false, why:'Face and skin folds take low-potency steroid or pimecrolimus (slide 36).'},
  {t:'After topical and oral systemic agents have been tried', correct:true, why:'"If you’ve tried topicals, you’ve tried an oral medication, last line for these patients is a biologic agent" (T@15451 11/11); slide 37. Slide 37 also has it considered earlier when comorbidities such as psoriatic arthritis exist.'},
  {t:'Before any topical agent, in moderate psoriasis of the trunk', correct:false, why:'Topical agents come first (slide 35).'},
  {t:'Together with PUVA photochemotherapy, from the start', correct:false, why:'Not on slides 37 or 44–45.'}],
 teach:'Topical, then systemic, then biologic (T@15451, T@35288 11/11).',
 cite:P7Q+' slides 35–37; T@15451, T@35288 11/11'},

{id:'P7-046', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psotx', sub:'fu', concept:'p7-pso-followup',
 tags:['numbers'], source:'both',
 stem:'When should a psoriasis patient be followed up after starting a new treatment?',
 options:[
  {t:'In 1–2 weeks', correct:true, why:'Slide 48: contact the patient or caregiver in 1–2 weeks to follow up; "So that 1 to 2 weeks after that self-treatment begins" (T@31466, T@36225 11/11).'},
  {t:'In 3–6 weeks', correct:false, why:'3–6 weeks is methotrexate’s onset of action (slide 39).'},
  {t:'At week 4', correct:false, why:'Week 4 is when apremilast should show a response (slide 38).'},
  {t:'In 3–6 months', correct:false, why:'3–6 months is acitretin’s maximum response (slide 38).'}],
 teach:'Slide 51 says "a week after self-treatment begins"; she said 1 to 2 weeks (T@36225 11/11).',
 cite:P7Q+' slides 38–39, 48, 51; T@31466, T@36225 11/11'},

{id:'P7-047', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'goals', concept:'p7-pso-goals', multi:true,
 tags:['list'], source:'both',
 stem:'Which are goals of psoriasis treatment? Select all that apply.',
 options:[
  {t:'Minimize or eliminate plaques and scales', correct:true, why:'Slide 28.'},
  {t:'Reduce the frequency of flare-ups', correct:true, why:'Slide 28 (T@8262 11/11).'},
  {t:'Treat associated conditions such as hypertension and depression', correct:true, why:'Slide 28: hypertension, dyslipidemia, diabetes, clinical depression.'},
  {t:'Cure the psoriasis within 4 weeks', correct:false, why:'Psoriasis is chronic; flares come back (slide 21; T@8262 11/11).'},
  {t:'Stop all therapy once the plaques clear', correct:false, why:'Slides 35, 37: continue if controlled, stepping down to the lowest doses that keep control.'}],
 teach:'Slide 28 also: alleviate pruritus, screen lifestyle factors, cost-effective therapy, avoid adverse effects, quality of life.',
 cite:P7Q+' slides 21, 28, 35, 37; T@8262 11/11'},

/* ---- Systemic agents (slides 38-39) --------------------------------------- */
{id:'P7-048', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'mtx', concept:'p7-mtx-folic',
 tags:['two-facts'], source:'both',
 stem:'Why is folic acid 1–5 mg daily given with methotrexate for psoriasis?',
 options:[
  {t:'To decrease nausea, bone marrow suppression and hepatic toxicity', correct:true, why:'Slide 39: "Administer with folic acid 1-5mg daily to decrease nausea, bone marrow suppression, hepatic toxicity" (T@17243 11/11).'},
  {t:'To decrease nephrotoxicity and hypertension, mostly in older patients', correct:false, why:'Nephrotoxicity and hypertension are cyclosporine concerns (slide 39).'},
  {t:'To speed the onset of action from 3–6 months to 3–6 weeks', correct:false, why:'Methotrexate’s onset is 3–6 weeks (slide 39); folic acid is for toxicity.'},
  {t:'To prevent depression, weight loss and diarrhea', correct:false, why:'Those are apremilast adverse effects (slide 38).'}],
 teach:'"It is very important that we administer folic acid with methotrexate" (T@17243 11/11).',
 cite:P7Q+' slides 38–39; T@17243 11/11'},

{id:'P7-049', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'mtx', concept:'p7-mtx-monitor',
 tags:['recall'], source:'both',
 stem:'Which screening applies to methotrexate for psoriasis?',
 options:[
  {t:'CBC and LFTs', correct:true, why:'Slide 39: "Screening: CBC, LFTs"; "we’re still monitoring CBCs, LFTs ... hepatotoxicity tends to be the most common" (T@17408 11/11).'},
  {t:'Blood pressure and renal function', correct:false, why:'Cyclosporine concerns: nephrotoxicity, hypertension (slide 39).'},
  {t:'Lymphocytes, neutrophils, hemoglobin and lipids', correct:false, why:'Tofacitinib’s monitoring (slide 38).'},
  {t:'A depression scale and body weight', correct:false, why:'Apremilast effects (slide 38).'}],
 teach:'Methotrexate: psoriasis and psoriatic arthritis; onset 3–6 weeks (slide 39).',
 cite:P7Q+' slides 38–39; T@17408 11/11'},

{id:'P7-050', skill:'case', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'mtx', concept:'p7-mtx-cirrhosis',
 tags:['case'], source:'both',
 stem:'A 55-year-old man with moderate-to-severe psoriasis also has cirrhosis. Which systemic agent should be avoided?',
 options:[
  {t:'Apremilast (Otezla)', correct:false, why:'Slide 38 lists renal impairment (once-daily dosing), not cirrhosis, for apremilast.'},
  {t:'Methotrexate', correct:true, why:'Slide 39: contraindications pregnancy, cirrhosis, blood dyscrasias. "If a patient is diagnosed with cirrhosis ... we would look for a medication that doesn’t ... have a risk for worsening hepatotoxicity" (T@18926 11/11).'},
  {t:'Ustekinumab (Stelara)', correct:false, why:'Slide 42 cautions: active TB, live vaccines; no liver contraindication.'},
  {t:'Secukinumab (Cosentyx)', correct:false, why:'Slide 42: avoid in Crohn’s disease; no liver contraindication.'}],
 teach:'Choose by safety profile and age (T@18926 11/11).',
 cite:P7Q+' slides 38–39, 42; T@18926 11/11'},

{id:'P7-051', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'mtx', concept:'p7-mtx-hepatotox-risk', multi:true,
 tags:['list'], source:'both',
 stem:'Which raise the risk of hepatotoxicity with methotrexate? Select all that apply.',
 options:[
  {t:'Diabetes', correct:true, why:'Slide 39.'},
  {t:'Obesity', correct:true, why:'Slide 39.'},
  {t:'Alcoholism', correct:true, why:'Slide 39; "especially if a patient is drinking alcohol" (T@17408 11/11).'},
  {t:'A total cumulative dose above 4 g', correct:true, why:'Slide 39: "> 4 Gm total cumulative dose".'},
  {t:'Taking folic acid 1–5 mg daily', correct:false, why:'Folic acid decreases hepatic toxicity (slide 39).'}],
 teach:'Hepatotoxicity is the most common concern with methotrexate (T@17408 11/11).',
 cite:P7Q+' slide 39; T@17408 11/11'},

{id:'P7-052', skill:'tell', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'oth', concept:'p7-onset-compare',
 tags:['two-facts','tell'], source:'both',
 stem:'Which systemic psoriasis agent takes 3 to 6 months to reach its maximum response?',
 options:[
  {t:'Methotrexate', correct:false, why:'Onset of action 3–6 weeks (slide 39).'},
  {t:'Apremilast', correct:false, why:'Response should be seen by week 4 (slide 38).'},
  {t:'Acitretin', correct:true, why:'Slide 38: acitretin, maximum response 3 to 6 months; "a little bit longer than our PDE-4" (T@16471 11/11).'},
  {t:'Cyclosporine', correct:false, why:'Cyclosporine is limited to less than 4 months of use (slide 39).'}],
 teach:'Weeks: methotrexate 3–6, apremilast by 4. Months: acitretin 3–6; cyclosporine < 4 months of use.',
 cite:P7Q+' slides 38–39; T@15754, T@16471, T@17093 11/11'},

{id:'P7-053', skill:'case', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'csa', concept:'p7-csa-duration',
 tags:['case'], source:'both',
 stem:'A 50-year-old man has had good control of severe psoriasis on cyclosporine for 5 months. What is the main concern?',
 options:[
  {t:'Nephrotoxicity; it is not for use beyond 4 months', correct:true, why:'Slide 39: "Not recommended for prolonged use (< 4 months)"; nephrotoxic. "Less than 4 months is what’s recommended. And that’s because of the nephrotoxicity" (T@17744 11/11).'},
  {t:'Hepatotoxicity; it needs folic acid after 4 months', correct:false, why:'Folic acid and hepatotoxicity go with methotrexate (slide 39).'},
  {t:'Depression and weight loss after 4 months', correct:false, why:'Apremilast adverse effects (slide 38).'},
  {t:'Birth defects for 3 years after it is stopped', correct:false, why:'That is acitretin in women of reproductive age (slide 38).'}],
 teach:'Cyclosporine: many interactions (CYP3A4 and 2C9 inhibitor, major 3A4 substrate); dosed on actual body weight (slide 39).',
 cite:P7Q+' slides 38–39; T@17592–17897 11/11'},

{id:'P7-054', skill:'case', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'csa', concept:'p7-csa-uncontrolled-htn',
 tags:['case'], source:'both',
 stem:'A 68-year-old woman with severe psoriasis has untreated hypertension (blood pressure 172/104). Which systemic agent is contraindicated for her?',
 options:[
  {t:'Methotrexate', correct:false, why:'Methotrexate contraindications: pregnancy, cirrhosis, blood dyscrasias (slide 39).'},
  {t:'Cyclosporine', correct:true, why:'Slide 39: contraindications systemic malignancy, untreated HTN or infections; increased risk for elderly, hypertension (T@18135 11/11).'},
  {t:'Apremilast', correct:false, why:'Slide 38 lists GI effects, depression and weight loss, not hypertension.'},
  {t:'Abatacept', correct:false, why:'Slide 39: TB screening; live vaccines; COPD.'}],
 teach:'"We tend to stay away from this medication, but again, it is an option" (T@18135 11/11).',
 cite:P7Q+' slides 38–39; T@18135 11/11'},

{id:'P7-055', skill:'class', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'apr', concept:'p7-apremilast-class-dose',
 tags:['two-facts','numbers'], source:'both',
 stem:'Which describes apremilast (Otezla) for psoriasis?',
 options:[
  {t:'PDE-4 blocker; titrated to 30 mg twice daily over the first week', correct:true, why:'Slide 38: apremilast (Otezla), PDE-4 blocker; dose titration to max 30 mg BID over first week; renal impairment once daily (T@15679 11/11).'},
  {t:'JAK inhibitor; used after methotrexate fails in psoriatic arthritis', correct:false, why:'That is tofacitinib (Xeljanz), slide 38.'},
  {t:'Oral retinoid; maximum response in 3 to 6 months', correct:false, why:'That is acitretin (slide 38).'},
  {t:'Blocks T-cell activation; given as a subQ injection', correct:false, why:'That is abatacept (Orencia), slide 39.'}],
 teach:'Response should be seen by week 4 (slide 38).',
 cite:P7Q+' slides 38–39; T@15679–15754 11/11'},

{id:'P7-056', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'apr', concept:'p7-apremilast-counsel',
 tags:['case','counseling'], source:'both',
 stem:'A 39-year-old woman starts apremilast for psoriasis. Which counseling is appropriate?',
 options:[
  {t:'Response by week 4; report nausea, diarrhea, low mood or weight loss', correct:true, why:'Slide 38: should see response by week 4; ADRs N/V/D, depression, weight loss (T@15754 11/11).'},
  {t:'Response in 3–6 weeks; take folic acid 1–5 mg daily with it', correct:false, why:'That is methotrexate (slide 39).'},
  {t:'Response in 3–6 months; avoid alcohol, and avoid pregnancy for 3 years', correct:false, why:'That is acitretin (slide 38).'},
  {t:'Response by week 4; have a PPD test for TB, repeated yearly', correct:false, why:'Annual PPD goes with biologics (slides 40–41).'}],
 teach:'Apremilast ADRs: nausea, vomiting, diarrhea; depression; weight loss (slide 38).',
 cite:P7Q+' slides 38–41; T@15754 11/11'},

{id:'P7-057', skill:'case', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'oth', concept:'p7-acitretin-women',
 tags:['case'], source:'both',
 stem:'A 27-year-old woman with moderate-to-severe psoriasis plans to become pregnant in about 2 years. Which systemic agent is not an option for her?',
 options:[
  {t:'Acitretin', correct:true, why:'Slide 38: reproductive-aged women should not be pregnant or plan to become pregnant within 3 years after stopping acitretin. "Reproductive aged woman, not an option" (T@16375 11/11).'},
  {t:'Apremilast', correct:false, why:'Slide 38 gives no pregnancy limit for apremilast.'},
  {t:'Ustekinumab', correct:false, why:'Slide 42 gives no pregnancy limit for ustekinumab.'},
  {t:'Guselkumab', correct:false, why:'Slide 42 gives no pregnancy limit for guselkumab.'}],
 teach:'Acitretin: oral retinoid, not immunosuppressive; no alcohol (slide 38).',
 cite:P7Q+' slides 38, 42; T@16246–16471 11/11'},

{id:'P7-058', skill:'class', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'oth', concept:'p7-tofacitinib',
 tags:['fine-detail'], source:'both',
 stem:'Which describes tofacitinib (Xeljanz) in psoriatic disease?',
 options:[
  {t:'JAK inhibitor for psoriatic arthritis after failure on methotrexate', correct:true, why:'Slide 38: tofacitinib (Xeljanz), Janus kinase inhibitor; psoriatic arthritis after fail on methotrexate; no live vaccines; boxed warning (serious cardiac events, cancer, blood clots, death) (T@16004 11/11).'},
  {t:'PDE-4 blocker for plaque psoriasis, used before methotrexate is tried', correct:false, why:'PDE-4 blocker is apremilast (slide 38).'},
  {t:'IL-17A inhibitor for plaque psoriasis that requires a REMS program', correct:false, why:'That is brodalumab (Siliq), slide 42.'},
  {t:'Oral retinoid for psoriasis that is not immunosuppressive', correct:false, why:'That is acitretin (slide 38).'}],
 teach:'Tofacitinib: immunosuppressive; serious infections; monitor lymphocytes, neutrophils, hemoglobin, liver enzymes, lipids (slide 38).',
 cite:P7Q+' slide 38; T@15912–16004 11/11'},

/* ---- PUVA (slides 44-45) -------------------------------------------------- */
{id:'P7-059', skill:'case', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'puva', concept:'p7-puva-place',
 tags:['two-facts'], source:'both',
 stem:'Which describes PUVA photochemotherapy for psoriasis?',
 options:[
  {t:'Absolute last line for severe refractory disease; about 90% respond', correct:true, why:'Slides 44–45: efficacy 90% with oral psoralens + UVA; reserved for severe, refractory psoriasis. "It is absolute last line ... 90% do respond well" (T@28274–28462 11/11).'},
  {t:'First line for mild disease of the elbows; about 50% respond', correct:false, why:'Topical agents are first for mild disease (slide 35).'},
  {t:'Second line after topical steroids in mild to moderate disease; no burns', correct:false, why:'Serious burns are a side effect (slide 44); she called PUVA absolute last line.'},
  {t:'Used in place of a biologic for psoriatic arthritis; about 90% respond', correct:false, why:'Not on slides 44–45.'}],
 teach:'A skin biopsy confirms the diagnosis first (slide 44).',
 cite:P7Q+' slides 35, 44–45; T@28274–29194 11/11'},

{id:'P7-060', skill:'mech', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'puva', concept:'p7-puva-moa-ae',
 tags:['two-facts'], source:'both',
 stem:'How does PUVA work, and which adverse effect is serious?',
 options:[
  {t:'Psoralen cross-links DNA under UVA light; serious burns', correct:true, why:'Slide 45: psoralen cross-links with DNA in presence of UVA light; slide 44: serious burns, blistering, peeling, itching, nausea, possible basal or melanoma cancer, photoaging (T@28554–28847 11/11).'},
  {t:'Psoralen blocks PDE-4 under UVB light; serious burns', correct:false, why:'PDE-4 is apremilast (slide 38); PUVA is UVA.'},
  {t:'Psoralen cross-links DNA under UVA light; nephrotoxicity', correct:false, why:'Nephrotoxicity is cyclosporine (slide 39).'},
  {t:'UVA light alone thins the epidermis; hepatotoxicity', correct:false, why:'PUVA needs the psoralen (slide 45); hepatotoxicity is methotrexate.'}],
 teach:'"This goes beyond the epidermis, and that is why the side effects are quite severe" (T@28847 11/11).',
 cite:P7Q+' slides 38–39, 44–45; T@28554–29194 11/11'},

/* ---- Biologics (slides 40-43) --------------------------------------------- */
{id:'P7-061', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-bio', sub:'key', concept:'p7-bio-key-points', multi:true,
 tags:['list'], source:'both',
 stem:'Which apply to every biologic used for psoriasis? Select all that apply.',
 options:[
  {t:'No live vaccines', correct:true, why:'Slide 40 (T@19631 11/11).'},
  {t:'Screen for TB before and during therapy; PPD annually', correct:true, why:'Slide 40 (T@19762 11/11).'},
  {t:'Stop therapy during an active infection', correct:true, why:'Slide 40: discontinue during active infection, "including flu, cold, COVID" (T@20054 11/11).'},
  {t:'Contraindicated in congestive heart failure', correct:false, why:'Heart failure is the TNF-α inhibitor caution (slides 40–41), not every biologic.'},
  {t:'Complete a REMS program before the first dose', correct:false, why:'REMS is brodalumab (Siliq), slide 42.'}],
 teach:'Slide 43, all biologics: serious infections including TB; malignancies and lymphomas; anaphylaxis.',
 cite:P7Q+' slides 40–43; T@19472–20054 11/11'},

{id:'P7-062', skill:'case', prof:'Patel', tier:'new', topic:'p7-bio', sub:'key', concept:'p7-bio-active-infection',
 tags:['case'], source:'both',
 stem:'A 44-year-old man on etanercept for psoriasis calls with influenza: fever, cough and body aches since yesterday. What is appropriate?',
 options:[
  {t:'Hold the etanercept until the infection has resolved', correct:true, why:'Slide 40: discontinue therapy during active infection; "We will also discontinue therapy right away if there is an active infection. So that’s including flu, cold, COVID" (T@20054 11/11).'},
  {t:'Continue it and add a live intranasal flu vaccine', correct:false, why:'No live vaccines with biologics (slide 40).'},
  {t:'Double the next dose to keep the plaques controlled', correct:false, why:'Not on slides 40–41; active infection is a reason to stop.'},
  {t:'Continue it, since TB is the infection of concern with biologics', correct:false, why:'Slide 40: increased risk of infections; contraindicated in active infections or sepsis.'}],
 teach:'Lowering inflammation also lowers the body’s immune response, so infections rise (T@20273 11/11).',
 cite:P7Q+' slide 40; T@20054–20273 11/11'},

{id:'P7-063', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-bio', sub:'key', concept:'p7-bio-vaccine',
 tags:['case','counseling'], source:'both',
 stem:'A patient on ustekinumab asks whether she can be vaccinated during therapy. What is appropriate?',
 options:[
  {t:'Yes, with vaccines that are not live', correct:true, why:'"They can be vaccinated, but just not a live vaccine" (T@25389 11/11); slides 40, 42–43: no live vaccines.'},
  {t:'No vaccines of any kind during therapy', correct:false, why:'Only live vaccines are avoided (T@25389 11/11).'},
  {t:'Yes, any vaccine, after a negative PPD', correct:false, why:'A PPD screens for TB; live vaccines stay off (slide 42).'},
  {t:'Yes, live vaccines in particular, as they need no booster', correct:false, why:'Live vaccines are the ones avoided (slides 40, 42).'}],
 teach:'All biologics: avoid live vaccines (slide 43).',
 cite:P7Q+' slides 40, 42–43; T@25389 11/11'},

{id:'P7-064', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-bio', sub:'key', concept:'p7-bio-common-ae',
 tags:['recall'], source:'both',
 stem:'Which are common adverse effects of the injectable biologics for psoriasis?',
 options:[
  {t:'Injection site reaction, headache, rhinitis, upper respiratory infection', correct:true, why:'Slide 40, common: injection site reaction, headache, rhinitis, upper respiratory infection (T@20273 11/11).'},
  {t:'Nausea, vomiting, diarrhea, depression and weight loss in the first weeks', correct:false, why:'Apremilast (slide 38).'},
  {t:'Serious burns, blistering, peeling, itching and photoaging of the skin', correct:false, why:'PUVA (slide 44).'},
  {t:'Nephrotoxicity, hypertension and many drug interactions over months', correct:false, why:'Cyclosporine (slide 39).'}],
 teach:'Serious: infections, hypersensitivity, lymphoma and other malignancy, heart failure with TNF-α inhibitors (slide 40).',
 cite:P7Q+' slides 38–40, 44; T@20273 11/11'},

{id:'P7-065', skill:'case', prof:'Patel', tier:'new', topic:'p7-bio', sub:'tnf', concept:'p7-tnf-chf',
 tags:['case'], source:'both',
 stem:'A 63-year-old man with severe psoriasis and congestive heart failure is to start a biologic. Which agent is contraindicated for him?',
 options:[
  {t:'Guselkumab (Tremfya)', correct:false, why:'IL-23 inhibitor (slide 42); heart failure is the TNF-α caution.'},
  {t:'Secukinumab (Cosentyx)', correct:false, why:'IL-17A inhibitor (slide 42); its caution is Crohn’s disease.'},
  {t:'Infliximab (Remicade)', correct:true, why:'Slide 41: TNF-α inhibitors, do not use in congestive heart failure patients. "Once again, I’m saying this twice for a reason, congestive heart failure patients completely contraindicated in TNF alpha" (T@22212 11/11).'},
  {t:'Ustekinumab (Stelara)', correct:false, why:'IL-12/23 inhibitor (slide 42); heart failure is the TNF-α caution.'}],
 teach:'TNF-α inhibitors: adalimumab (Humira), etanercept (Enbrel), infliximab (Remicade), golimumab (Simponi), certolizumab (Cimzia) (slide 41).',
 cite:P7Q+' slides 40–43; T@21352, T@21834, T@22212 11/11'},

{id:'P7H-011', skill:'case', prof:'Patel', tier:'new', topic:'p7-bio', sub:'tnf', concept:'p7h-chf-choose-biologic',
 tags:['hard','case'], source:'both',
 stem:'A 66-year-old woman with severe psoriasis, psoriatic arthritis and heart failure has not responded to methotrexate. Which biologic is the most appropriate choice for her?',
 options:[
  {t:'Golimumab', correct:false, why:'TNF-α inhibitor (Simponi), contraindicated in congestive heart failure (slide 41; T@22212 11/11).'},
  {t:'Certolizumab', correct:false, why:'TNF-α inhibitor (Cimzia), contraindicated in congestive heart failure (slide 41).'},
  {t:'Guselkumab', correct:true, why:'IL-23 inhibitor (Tremfya), slide 42: cautions active TB and live vaccines; heart failure is the TNF-α caution (slides 41, 43).'},
  {t:'Adalimumab', correct:false, why:'TNF-α inhibitor (Humira), contraindicated in congestive heart failure (slide 41).'}],
 teach:'"Know the generic names, know the brand names, understand what class to follow through" (T@22212 11/11).',
 cite:P7Q+' slides 37, 41–43; T@22212 11/11'},

{id:'P7-066', skill:'case', prof:'Patel', tier:'new', topic:'p7-bio', sub:'tnf', concept:'p7-tnf-ms-relative',
 tags:['case'], source:'both',
 stem:'A 33-year-old woman with severe psoriasis is to start a biologic. Her mother has multiple sclerosis. Which agent should not be used?',
 options:[
  {t:'Adalimumab (Humira)', correct:true, why:'Slide 41, TNF-α inhibitors, do not use: patients with or with first-degree relatives with a demyelinating disease or multiple sclerosis (T@22088 11/11).'},
  {t:'Ixekizumab (Taltz)', correct:false, why:'IL-17A inhibitor (slide 42); the demyelinating caution is for TNF-α inhibitors.'},
  {t:'Risankizumab (Skyriza)', correct:false, why:'IL-23 inhibitor (slide 42).'},
  {t:'Ustekinumab (Stelara)', correct:false, why:'IL-12/23 inhibitor (slide 42).'}],
 teach:'Slide 43, anti-TNFs: heart failure worsening, demyelinating disease, hepatitis B reactivation, cytopenias, lupus-like syndrome.',
 cite:P7Q+' slides 41–43; T@22088 11/11'},

{id:'P7-067', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-bio', sub:'tnf', concept:'p7-tnf-safety',
 tags:['tell'], source:'both',
 stem:'Hepatitis B reactivation, cytopenias and a lupus-like syndrome are safety concerns of which group?',
 options:[
  {t:'Anti-IL biologics', correct:false, why:'Slide 43, anti-ILs: inflammatory bowel disease, depression worsening.'},
  {t:'Anti-TNF biologics', correct:true, why:'Slide 43, anti-TNFs: heart failure worsening, demyelinating disease, hepatitis B reactivation, cytopenias, lupus-like syndrome (T@24770 11/11). Slide 41: hepatitis B screening; monitor CBC and LFTs.'},
  {t:'PDE-4 inhibitors', correct:false, why:'Apremilast: GI effects, depression, weight loss (slide 38).'},
  {t:'Oral retinoids (acitretin)', correct:false, why:'Acitretin: pregnancy, alcohol (slide 38).'}],
 teach:'All biologics (slide 43): serious infections including TB, malignancies and lymphomas, anaphylaxis.',
 cite:P7Q+' slides 38, 41, 43; T@24121–24848 11/11'},

{id:'P7-068', skill:'class', prof:'Patel', tier:'new', topic:'p7-bio', sub:'tnf', concept:'p7-tnf-members', multi:true,
 tags:['list'], source:'both',
 stem:'Which are TNF-α inhibitors? Select all that apply.',
 options:[
  {t:'Adalimumab', correct:true, why:'Humira (slide 41).'},
  {t:'Etanercept', correct:true, why:'Enbrel (slide 41).'},
  {t:'Golimumab', correct:true, why:'Simponi (slide 41).'},
  {t:'Certolizumab', correct:true, why:'Cimzia (slide 41).'},
  {t:'Ixekizumab', correct:false, why:'Taltz, IL-17A (slide 42).'},
  {t:'Tildrakizumab', correct:false, why:'Ilumya, IL-23 (slide 42).'}],
 teach:'Infliximab (Remicade) completes the slide 41 list. "Humira, Enbrel, Remicade tends to be the most commonly prescribed" (T@21588 11/11).',
 cite:P7Q+' slides 41–42; T@21588 11/11'},

{id:'P7-069', skill:'case', prof:'Patel', tier:'new', topic:'p7-bio', sub:'il', concept:'p7-il17-crohns',
 tags:['case'], source:'both',
 stem:'A 31-year-old man with severe psoriasis also has Crohn’s disease. Which biologic should be avoided?',
 options:[
  {t:'Etanercept (Enbrel)', correct:false, why:'TNF-α inhibitor (slide 41); its cautions are heart failure, demyelinating disease, hepatitis B.'},
  {t:'Secukinumab (Cosentyx)', correct:true, why:'Slide 42: secukinumab, IL-17A, avoid in Crohn’s disease. "Crohn’s disease, we’re avoiding any patients with Crohn’s disease on Cosentyx" (T@23613 11/11); slide 43, anti-ILs: inflammatory bowel disease.'},
  {t:'Adalimumab (Humira)', correct:false, why:'TNF-α inhibitor (slide 41); IBD is the anti-IL caution (slide 43).'},
  {t:'Certolizumab (Cimzia)', correct:false, why:'TNF-α inhibitor (slide 41); IBD is the anti-IL caution (slide 43).'}],
 teach:'Anti-ILs: inflammatory bowel disease and depression worsening (slide 43).',
 cite:P7Q+' slides 41–43; T@23613, T@24848 11/11'},

{id:'P7-070', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-bio', sub:'il', concept:'p7-brodalumab-rems',
 tags:['bbw'], source:'both',
 stem:'Which biologic carries a boxed warning for increased suicide risk and requires completion of a REMS program?',
 options:[
  {t:'Ixekizumab (Taltz)', correct:false, why:'IL-17A, 80 mg every 4 weeks (slide 42); no REMS listed.'},
  {t:'Brodalumab (Siliq)', correct:true, why:'Slide 42: brodalumab (Siliq), IL-17A; boxed warning, increased suicide risk; must complete REMS (T@23480 11/11).'},
  {t:'Secukinumab (Cosentyx)', correct:false, why:'IL-17A; its caution is Crohn’s disease (slide 42).'},
  {t:'Ustekinumab (Stelara)', correct:false, why:'IL-12/23; cautions active TB, live vaccines (slide 42).'}],
 teach:'Same class, different cautions: "each brand name has a different safety profile" (T@27655 11/11).',
 cite:P7Q+' slide 42; T@23480, T@27655 11/11'},

{id:'P7-071', skill:'pk', prof:'Patel', tier:'new', topic:'p7-bio', sub:'il', concept:'p7-ustekinumab-warfarin',
 tags:['case','interaction'], source:'both',
 stem:'A 60-year-old man on warfarin for atrial fibrillation starts ustekinumab (Stelara) for psoriasis. What should be monitored for an interaction?',
 options:[
  {t:'Warfarin levels', correct:true, why:'Slide 42, ustekinumab monitoring: PPD; CBC; signs and symptoms of infection; levels of cyclosporine and warfarin; Crohn’s symptoms. "This medication interacts with cyclosporine. And warfarin" (T@22800 11/11).'},
  {t:'Serum potassium', correct:false, why:'Potassium goes with spironolactone (Lecture 6).'},
  {t:'Lithium levels', correct:false, why:'Lithium is on the slide 24 list of drugs that worsen psoriasis, not a ustekinumab interaction.'},
  {t:'Triglycerides', correct:false, why:'Triglycerides are isotretinoin or tofacitinib monitoring (Lecture 6; slide 38).'}],
 teach:'Ustekinumab (Stelara): IL-12 and IL-23 (slide 42).',
 cite:P7Q+' slides 24, 38, 42; T@22521–22800 11/11'},

{id:'P7-072', skill:'class', prof:'Patel', tier:'new', topic:'p7-bio', sub:'il', concept:'p7-il-class-id',
 tags:['recall'], source:'both',
 stem:'Risankizumab (Skyriza) blocks which target?',
 options:[
  {t:'Interleukin-17A', correct:false, why:'Secukinumab, ixekizumab, brodalumab (slide 42).'},
  {t:'Interleukin-12 and IL-23', correct:false, why:'Ustekinumab (Stelara), slide 42.'},
  {t:'Interleukin-23', correct:true, why:'Slide 42: tildrakizumab (Ilumya) and risankizumab (Skyriza), interleukin-23; "Skyriza tends to be the most commonly prescribed" (T@22983 11/11).'},
  {t:'TNF-α', correct:false, why:'Adalimumab, etanercept, infliximab, golimumab, certolizumab (slide 41).'}],
 teach:'IL-23: tildrakizumab, risankizumab, guselkumab (slide 42).',
 cite:P7Q+' slides 41–42; T@22983 11/11'},

{id:'P7-073', type:'match', skill:'class', prof:'Patel', tier:'new', topic:'p7-bio', sub:'il', concept:'p7-brand-generic-match',
 tags:['match'], source:'both',
 stem:'Match each biologic’s generic name to its brand name.', left:'Generic', right:'Brand',
 pairs:[
  {l:'Adalimumab', r:'Humira', why:'Slide 41.'},
  {l:'Etanercept', r:'Enbrel', why:'Slide 41.'},
  {l:'Infliximab', r:'Remicade', why:'Slide 41.'},
  {l:'Ustekinumab', r:'Stelara', why:'Slide 42.'},
  {l:'Guselkumab', r:'Tremfya', why:'Slide 42.'},
  {l:'Secukinumab', r:'Cosentyx', why:'Slide 42.'},
  {l:'Brodalumab', r:'Siliq', why:'Slide 42.'}],
 teach:'"So know the generic name, know the brand name, and know what class they fall in" (T@23699 11/11).',
 cite:P7Q+' slides 41–42; T@21659, T@23699 11/11'},

/* ---- Fill in the blank (kit type 'blank'; strict spelling) ---------------- */
{id:'BP7-001', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-sd', sub:'tx', concept:'b-p7-sd-refer-7d',
 tags:['blank'], source:'both', dupOf:'P7-021',
 stem:'For seborrheic dermatitis, a health care provider should be consulted if the disorder worsens or symptoms persist longer than ___ days.',
 accept:['7', 'seven', '7 days', 'seven days'],
 why:'Slide 16; "again, the 7-day period comes into play" (T@89612 11/10).',
 cite:P7Q+' slide 16; T@89612 11/10'},

{id:'BP7-002', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-dand', sub:'tx', concept:'b-p7-shampoo-minutes',
 tags:['blank'], source:'both', dupOf:'P7-015',
 stem:'A medicated dandruff or seborrheic dermatitis shampoo is left on the scalp for 3 to ___ minutes, then rinsed well.',
 accept:['5', 'five', '5 minutes', 'five minutes'],
 why:'Slides 9, 16: leave on 3 to 5 minutes (T@81060, T@88961 11/10).',
 cite:P7Q+' slides 9, 16; T@81060, T@88961 11/10'},

{id:'BP7-003', type:'blank', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'b-p7-bsa-severe',
 tags:['blank'], source:'both', dupOf:'P7-035',
 stem:'Severe psoriasis: BSA of ___% or more.',
 accept:['10', '10%', '10 %', 'ten', '10 percent', 'ten percent'],
 why:'Slide 31: severe BSA ≥ 10%. "It has been corrected to 10% ... I want you to follow this slide" (T@10484 11/11).',
 cite:P7Q+' slide 31; T@10484 11/11'},

{id:'BP7-004', type:'blank', skill:'case', prof:'Patel', tier:'new', topic:'p7-pso', sub:'sev', concept:'b-p7-bsa-mild',
 tags:['blank'], source:'both', dupOf:'P7-034',
 stem:'Mild psoriasis: BSA of ___% or less.',
 accept:['5', '5%', '5 %', 'five', '5 percent', 'five percent'],
 why:'Slide 31: mild BSA ≤ 5% (T@10231 11/11).',
 cite:P7Q+' slide 31; T@10231 11/11'},

{id:'BP7-005', type:'blank', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'csa', concept:'b-p7-csa-months',
 tags:['blank'], source:'both', dupOf:'P7-053',
 stem:'Because of nephrotoxicity, cyclosporine for psoriasis is used for less than ___ months.',
 accept:['4', 'four', '4 months', 'four months'],
 why:'Slide 39: not recommended for prolonged use (< 4 months); nephrotoxic (T@17744 11/11).',
 cite:P7Q+' slide 39; T@17744 11/11'},

{id:'BP7-006', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'apr', concept:'b-p7-apremilast-week',
 tags:['blank'], source:'both', dupOf:'P7-056',
 stem:'A response to apremilast should be seen by week ___.',
 accept:['4', 'four', 'week 4'],
 why:'Slide 38: should see response by week 4 (T@15754 11/11).',
 cite:P7Q+' slide 38; T@15754 11/11'},

{id:'BP7-007', type:'blank', skill:'adverse', prof:'Patel', tier:'new', topic:'p7-psosys', sub:'mtx', concept:'b-p7-mtx-folic',
 tags:['blank'], source:'both', dupOf:'P7-048',
 stem:'Methotrexate for psoriasis is given with ___ 1–5 mg daily to decrease nausea, bone marrow suppression and hepatic toxicity.',
 accept:['folic acid', 'folate'],
 why:'Slide 39: "Administer with folic acid 1-5mg daily" (T@17243 11/11).',
 cite:P7Q+' slide 39; T@17243 11/11'}
);
