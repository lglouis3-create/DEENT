/* ==========================================================================
   Lecture 8 questions, part "Sun Exposure Therapeutics" (Dr. Patel), taught
   Thursday 11/12/2026. Exam 2. DRAFT for Louis's review (not in course.js).
   Source: Patel_Sun-Exposure-Student.pdf (57 slides; "slide N" = PDF page; only
   printed slide text is cited, not handwriting) and the transcript
   DEENT_Lecture_11.12_transcript.txt (T@n 11/12 = character offset of the start
   of the passage quoted; the sun part runs T@46066 to T@77409; her Exam 2
   statements T@95475 to T@96300).
   Her polls of 11/12 are not in PollEV_Dr_Patel.pdf (it ends at 11/11) and the
   option texts are not printed on slides 35 or 52. The four poll items
   (P8S-001..004) keep her stems as she read them and her keyed letter; their
   options are RECONSTRUCTED from her spoken explanation and slides 31-33, 13,
   15, 36, 43, 47 (each carries a `note`). source:'both' on those four as the
   brief asked; q13_L07.js marks polls source:'both' with tags ['poll'].
   Which professor: "for her questions, pay attention to what she's focused on.
   For my questions, recommendation in terms of treatment ... SPF greater than
   or equal to 15 ... Broad spectrum ... But if I ask you a question that's
   specific to an age, like I'll make it obvious" (T@56238 11/12); "for exam
   purposes, broad spectrum SPF greater than or equal to 15" (T@53466 11/12).
   So: no item makes SPF 15 against SPF 30 the deciding difference; wrong
   sunscreen options fail on broad spectrum, water resistance, SPF below 15,
   PABA, or age. No item uses Dr. Smith's numbers (reapply 90-120 minutes,
   SPF > 30/40/45 by group, UVB 290-320 nm) as a key or as a wrong option.
   Not keyed:
   - an infant of exactly 6 months (slide 13 excludes "< 6 months"; slide 19
     "children > 6 months"; "Remember, 6 months of age, OK, so not 7, not 8",
     T@66269): items use 4, 5 and 8 months;
   - ibuprofen against acetaminophen for sunburn (slide 31 "Prefer one with
     anti-inflammatory properties (NSAIDs, APAP)"; "it could be Tylenol, it
     could be ibuprofen", T@61876): no item offers both;
   - "allergy to all" (slide 13) against "allergic to any" (T@52029);
   - UVA/UVB detail ("refer to Doctor Smith and Doctor Sicasway's slides in
     terms of the difference", T@47346), the long photosensitizing list beyond
     the drugs she named (T@50187), the GRASE table's third column, cancer
     statistics, sunglasses percentages, skin anti-aging approaches table
     ("just a reference slide", T@70385), plant extracts ("for your reference",
     T@75069), chemical peel percentages;
   - her graded Case Assignment #2 (Sun Exposure) is not used.
   Transcript mis-hearings resolved against the slide: sunburn "may last within
   10, 5 days" (T@59161) = slide 24 "up to 5 days"; "Fitzpatrick 1 and 11"
   (T@49012; slide 9 prints "1, 11") = types I and II (slide 8);
   "waterproof" (T@52666) = "water resistant" (slides 36, 55; T@65673).
   ========================================================================== */
const P8SQ = 'Lecture 8 (Patel_Sun-Exposure-Student.pdf)';

TOPIC_DECKS.push(
  {id:'p8s', exam:2, name:'Sun Exposure Therapeutics (Dr. Patel)', file:'Patel_Sun-Exposure-Student.pdf', when:'taught 11/12 (Exam 2)',
   topics:['p8s-burn', 'p8s-prot', 'p8s-risk', 'p8s-skin', 'p8s-age']});

TOPICS.push(
 {id:'p8s-burn', name:'Sunburn: time course, self-care exclusions, treatment, follow-up', prof:'Patel',
  cite:'slides 24, 29–35 · taught 11/12 (Lecture 8)', subs:[
   {id:'case', name:'Her sunburn case (PollEv)', cite:'slide 35'},
   {id:'path', name:'Time course', cite:'slide 24'},
   {id:'excl', name:'Exclusions for self-treatment', cite:'slide 30'},
   {id:'tx',   name:'Goals, recommended, alternative, not recommended', cite:'slides 29, 31–33'},
   {id:'fu',   name:'Follow-up', cite:'slide 34'}]},
 {id:'p8s-prot', name:'Sun protection: who, which sunscreen, how to apply', prof:'Patel',
  cite:'slides 12–23, 36–37 · taught 11/12 (Lecture 8)', subs:[
   {id:'case',  name:'Her sunscreen questions (PollEv)', cite:'slide 35'},
   {id:'who',   name:'Sun safety and who is excluded from sunscreen', cite:'slides 12–13'},
   {id:'sel',   name:'Broad spectrum, SPF, activity', cite:'slides 14–15, 19'},
   {id:'ingr',  name:'Physical, chemical, GRASE, sensitive skin', cite:'slides 16–18, 20'},
   {id:'apply', name:'Amount, timing, reapplication', cite:'slides 21–22, 36'},
   {id:'couns', name:'Counseling points', cite:'slides 23, 36–37'}]},
 {id:'p8s-risk', name:'Who is at risk: Fitzpatrick type and photosensitizing drugs', prof:'Patel',
  cite:'slides 8–11 · taught 11/12 (Lecture 8)', subs:[
   {id:'risk',  name:'Highest-risk patients', cite:'slides 8–9'},
   {id:'drugs', name:'Photosensitizing medications', cite:'slides 10–11, 37'}]},
 {id:'p8s-skin', name:'Skin cancer: the ABCDE rule', prof:'Patel',
  cite:'slides 27–28, 37 · taught 11/12 (Lecture 8)', subs:[
   {id:'abcde', name:'ABCDE and when to refer', cite:'slides 28, 37'}]},
 {id:'p8s-age', name:'Photoaging: recognition, treatments, counseling', prof:'Patel',
  cite:'slides 38–54 · taught 11/12 (Lecture 8)', subs:[
   {id:'case',  name:'Her photoaging case (PollEv)', cite:'slide 52'},
   {id:'recog', name:'Glogau types; aging against photoaging', cite:'slides 39–40'},
   {id:'ret',   name:'Retinoids', cite:'slides 43–44, 54'},
   {id:'hq',    name:'Hydroquinone', cite:'slides 47–48'},
   {id:'oth',   name:'Hydroxy acids, peels, antioxidants', cite:'slides 43, 45–46, 49, 54'},
   {id:'couns', name:'Counseling points', cite:'slides 53–54'}]}
);

QUESTIONS.push(
/* ---- Her sunburn case (PollEv 11/12, slide 35) ---------------------------- */
{id:'P8S-001', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'case', concept:'p8s-burn-case-pain',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/12: "What would be the most appropriate recommendation to treat the pain and tenderness?"',
 stem:'CC: "My sunburn hurts, and nothing is helping!" HPI: A 21 y/o woman has a painful sunburn after visiting South Padre. Visited S. Padre Island over weekend with no sunscreen used. Reports pain and redness increasing for one day on face, shoulders and upper chest area; no vesicles or peeling; cold showers helped. Medications: Yazmin; NKDA. Physical Assessment: Fitzpatrick 2. SH: college student; regular diet; sleeps usually 5–7 hours a night; drinks alcohol on social occasions; never smoked or vaped. What would be the most appropriate recommendation to treat the pain and tenderness?',
 options:[
  {t:"Oral Ibuprofen", correct:true, why:"Slide 31: systemic analgesics are recommended; they decrease pain, erythema and edema; use for the first 1–2 days. \"A would be the most appropriate answer here cause we’re treating the pain and the tenderness\" (T@65246–65406 11/12)."},
  {t:"Topical Bacitracin", correct:false, why:"A topical antibiotic prevents infection in minor burns and cuts (Outdoor Exposures slide 13); she has no vesicles or peeling, and it does not treat pain."},
  {t:"Topical Hydrocortisone", correct:false, why:"Not among the sunburn recommendations on slides 31–32 (systemic analgesics, skin protectants, aloe)."},
  {t:"Topical Benzocaine", correct:false, why:"Slide 33: topical anesthetics are not recommended for routine use on sunburn."},
  {t:"None of the above", correct:false, why:"A systemic analgesic is recommended (slide 31)."}],
 teach:'Read the key words in her stems: here, pain and tenderness (T@65246 11/12). Systemic analgesic, first 1–2 days (slide 31).',
 cite:P8SQ+' slides 31–33, 35; PollEv 11/12; T@64876, T@65246–65406 11/12'},

{id:'P8S-002', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'case', concept:'p8s-case-daily-sunscreen',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/12: "Which of the following would be the best recommendation for this patient to use daily to prevent skin cancer?"',
 stem:'Same patient (21-year-old woman, Fitzpatrick 2, sunburned at South Padre Island with no sunscreen used). Which of the following would be the best recommendation for this patient to use daily to prevent skin cancer?',
 options:[
  {t:"Water resistant broad spectrum sunscreen with SPF 10", correct:false, why:"\"Not appropriate SPF\" (T@65673 11/12); slide 36: SPF ≥ 15."},
  {t:"No SPF usage only protect skin with clothing and hats", correct:false, why:"That is the plan for an infant under 6 months (slide 13); she is 21 and needs sunscreen."},
  {t:"Water resistant sunscreen with SPF 30", correct:false, why:"It \"wasn’t broad-spectrum\" (T@65673 11/12); slide 15: SPF indicates UVB protection only."},
  {t:"Water resistant broad spectrum sunscreen with SPF 50", correct:true, why:"\"D as in dog, water resistant, broad-spectrum sunscreen with SPF 50 ... as well as broad spectrum greater than SPF 15\" (T@65673 11/12); slides 14, 36."}],
 teach:'Three checks: broad spectrum, SPF ≥ 15, and fit to the activity (water resistant for the beach) (slides 14, 36).',
 cite:P8SQ+' slides 14–15, 35–36; PollEv 11/12; T@65588–65673 11/12'},

{id:'P8S-003', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'case', concept:'p8s-case-4-month-old',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/12: "What would be the most appropriate response to the patient asking if she can use the product recommended for her 4 month old?"',
 stem:"Same patient. What would be the most appropriate response to the patient asking if she can use the product recommended for her four month old?",
 options:[
  {t:"Infant should wear protective clothing and restrict sunlight exposure", correct:true, why:"\"A, wear protective clothing, restrict sunlight exposure. Remember, 6 months of age\" (T@66129–66269 11/12). Slide 13: exclusion criteria, < 6 months of age."},
  {t:"Apply BID before exposure", correct:false, why:"Slide 13: sunscreen use is excluded under 6 months of age."},
  {t:"Would not recommend till >7 months of age", correct:false, why:"The limit is 6 months: \"so not 7, not 8\" (T@66269 11/12)."},
  {t:"Would not recommend till > 8 months of age", correct:false, why:"The limit is 6 months: \"so not 7, not 8\" (T@66269 11/12)."},
  {t:"None of the above", correct:false, why:"Clothing and restricted sun exposure are the recommendation under 6 months (slide 13)."}],
 teach:'Under 6 months: clothing, hats, shade, not sunscreen (slide 13; T@51824 11/12).',
 cite:P8SQ+' slides 13, 35; PollEv 11/12; T@51824, T@66129–66269 11/12'},

/* ---- Her photoaging case (PollEv 11/12, slide 52) ------------------------- */
{id:'P8S-004', skill:'case', prof:'Patel', tier:'new', topic:'p8s-age', sub:'case', concept:'p8s-age-case-hyperpigmentation',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/12: "Which of the following treatment options would help improve hyperpigmentation of the skin?"',
 stem:'CC: Complains of wrinkles, dry skin, crow’s feet around her eyes, and dark skin pigmentation on face and hands. HPI: A 65-year-old woman who has enjoyed many outdoor activities over the years. She lives in a moderate climate, with hot, sunny summers and cold winters. She feels that she appears older than other women her age because of wrinkling and color changes of her skin. Physical Assessment: Her facial color is somewhat yellowish in appearance, and the fine wrinkles at the corners of her eyes and mouth have become deeper. She has noticed the formation of small brown spots mottling parts of her face, hands, and forearms. Fitzpatrick IV classification, a clear complexion, and skin that is sensitive to soaps, heavy cosmetics, and perfumes. SH: No alcohol, quit smoking 15 years ago, normal sleep pattern, eats out often at fast food restaurants. Medications/OTC: MVI; Calcium 600 mg + vitamin D 400 IU every morning. Allergies: NKDA. Which of the following treatment options would help improve hyperpigmentation of the skin?',
 options:[
  {t:"Benzoyl Peroxide", correct:false, why:"An acne agent (Lecture 6); not among the photoaging treatments on slide 43."},
  {t:"Sodium Hyaluronate", correct:false, why:"Hyaluronic acid is among the product ingredients she pointed out (T 11/12), but the depigmenting agent is hydroquinone (slide 43)."},
  {t:"Hydroquinone", correct:true, why:"\"Keyword here, hyperpigmentation. So what helps brighten the skin? ... answer C, hydroquinone\" (T@76234–76364 11/12). Slide 47: reduces hyperpigmentation associated with sun exposure; slide 43: depigmenting agents."},
  {t:"Lactic Acid", correct:false, why:"An alpha hydroxy acid. She also credited AHAs with reducing hyperpigmentation (slide 45), but her keyed answer was hydroquinone, the depigmenting agent (slides 43, 47)."}],
 teach:'Hyperpigmentation is the key word: hydroquinone is the depigmenting agent (slides 43, 47).',
 cite:P8SQ+' slides 43, 47, 52; PollEv 11/12; T@75655, T@76234–76364 11/12'},

/* ---- Sunburn treatment (slides 29-34) ------------------------------------- */
{id:'P8S-005', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-burn-anesthetic-not-routine',
 tags:['case','tell'], source:'both',
 stem:'A 19-year-old man was sunburned across his back while tubing on the river yesterday; the skin is intact, with no blisters. He asks what he can buy for the pain. Which of these should the pharmacist NOT recommend?',
 options:[
  {t:'Ibuprofen by mouth for the first 1–2 days', correct:false, why:'Slide 31: systemic analgesics are recommended; use for the first 1–2 days.'},
  {t:'Pure aloe vera gel on the intact skin', correct:false, why:'Slide 32: an alternative treatment, used topically on intact skin.'},
  {t:'A topical anesthetic over the burned back', correct:true, why:'Slide 33: topical anesthetics are "Not recommended for routine use by AAD, NCEMI, and Pharmacist’s letter"; if used, small areas (1–2% BSA) only. "Be careful that you’re not recommending these products" (T@64451 11/12).'},
  {t:'Petrolatum, started after 24 hours', correct:false, why:'Slide 31: skin protectants are recommended; wait until after 24 hours.'}],
 teach:'Not recommended: first aid antiseptics and topical anesthetics (slide 33).',
 cite:P8SQ+' slides 31–33; T@64451 11/12'},

{id:'P8S-006', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-burn-not-recommended-list', multi:true,
 tags:['list'], source:'both',
 stem:'Which are NOT recommended for treating a sunburn? Select all that apply.',
 options:[
  {t:'First aid antiseptics', correct:true, why:'Slide 33; they "can irritate and burn the skin even more" (T@64451 11/12).'},
  {t:'Routine use of topical anesthetics', correct:true, why:'Slide 33: not recommended for routine use; may cause hypersensitivity reaction and systemic symptoms.'},
  {t:'Aloe vera taken internally', correct:true, why:'Slide 32: avoid internal use; multiple drug interactions and adverse effects.'},
  {t:'Petrolatum started after 24 hours', correct:false, why:'Slide 31: a recommended skin protectant.'},
  {t:'An oral NSAID for the first 1–2 days', correct:false, why:'Slide 31: a recommended systemic analgesic.'}],
 teach:'"Only recommend the products that we just covered" (T@64451 11/12): systemic analgesics, skin protectants, topical aloe vera.',
 cite:P8SQ+' slides 31–33; T@64451 11/12'},

{id:'P8S-007', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-protectant-24h',
 tags:['counseling','two-facts'], source:'both',
 stem:'A woman sunburned her shoulders 6 hours ago; the skin is intact. She asks when she can start cocoa butter on the burn. What is appropriate?',
 options:[
  {t:'Now, then every 40–80 minutes', correct:false, why:'40–80 minutes is the sunscreen reapplication interval (slide 21).'},
  {t:'After 24 hours, then as often as needed', correct:true, why:'Slide 31, skin protectants (cocoa butter, petrolatum): "Apply as often as needed; Wait until after 24 hours to start using". "The skin is very sensitive right when it does occur" (T@62506 11/12).'},
  {t:'After 24 hours, for the first 1–2 days', correct:false, why:'The first 1–2 days is the systemic analgesic rule (slide 31).'},
  {t:'Within 20 minutes, then once a day', correct:false, why:'A burn in the past 20 minutes gets cool water or cool wet cloths (slide 29).'}],
 teach:'Skin protectants: wait 24 hours, then as often as needed (slide 31).',
 cite:P8SQ+' slides 29, 31; T@62506 11/12'},

{id:'P8S-008', skill:'class', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-analgesic-why',
 tags:['two-facts'], source:'both',
 stem:'For sunburn, what does a systemic analgesic offer that a topical anesthetic does not?',
 options:[
  {t:'Rehydration of the skin, applied as often as needed', correct:false, why:'That describes skin protectants (slide 31).'},
  {t:'Inhibition of bradykinin, with FDA approval for burns', correct:false, why:'Aloe vera may inhibit bradykinin and is not FDA-approved for burn treatment (slide 32).'},
  {t:'Safe use over 1–2% BSA of blistered skin', correct:false, why:'1–2% BSA of intact skin is the limit for a topical anesthetic, if used (slide 33).'},
  {t:'Longer action, with less pain, erythema and edema', correct:true, why:'Slide 31: "Decrease pain, erythema, and edema; Longer duration of action than topical anesthetics" (T@61876 11/12).'}],
 teach:'Systemic analgesics: pain, erythema, edema; longer acting than topical anesthetics (slide 31).',
 cite:P8SQ+' slides 31–33; T@61876 11/12'},

{id:'P8S-009', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-analgesic-duration',
 tags:['numbers'], source:'both',
 stem:'How long is a systemic analgesic used for a sunburn?',
 options:[
  {t:'The first 1–2 days', correct:true, why:'Slide 31: "Use for first 1-2 days" (T@62160 11/12).'},
  {t:'The first 20 minutes', correct:false, why:'20 minutes is the window for cool water immersion (slide 29).'},
  {t:'Up to 5 days', correct:false, why:'A sunburn may last for up to 5 days (slide 24); the analgesic is for the first 1–2 days.'},
  {t:'Up to 7 days', correct:false, why:'7 days is the referral point if not healed (slide 34).'}],
 teach:'Her objectives ask for the max days of use of the ingredients highlighted in lecture (slide 4).',
 cite:P8SQ+' slides 24, 29, 31, 34; T@62160 11/12'},

{id:'P8S-010', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-burn-initial-cool',
 tags:['case'], source:'both',
 stem:'A lifeguard notices a sunburn on her forearms that occurred within the past 20 minutes. What is the initial treatment?',
 options:[
  {t:'Petrolatum applied as often as needed', correct:false, why:'Skin protectants wait until after 24 hours (slide 31).'},
  {t:'A first aid antiseptic on the forearms', correct:false, why:'Not recommended (slide 33).'},
  {t:'Cool water immersion or cool wet cloths', correct:true, why:'Slide 29: "Initial treatment is non-drug; If burn occurred in past 20 minutes immerse in cool water or use cool wet cloths" (T@61307 11/12).'},
  {t:'A topical anesthetic 3 to 4 times a day', correct:false, why:'Not recommended for routine use (slide 33).'}],
 teach:'Non-drug first; then any combination of indicated OTC products by symptoms and preference (slide 29).',
 cite:P8SQ+' slides 29, 31, 33; T@61307 11/12'},

{id:'P8S-011', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'excl', concept:'p8s-burn-exclusion-case',
 tags:['case','referral'], source:'both',
 stem:'A 24-year-old man spent the day fishing without sunscreen. His back and shoulders are red and painful, and since the afternoon he has had a headache and confusion. There are no blisters. What is the most appropriate action?',
 options:[
  {t:'Ibuprofen for 1–2 days and cool wet cloths', correct:false, why:'Self-care steps (slides 29, 31); headache or confusion excludes him (slide 30).'},
  {t:'Referral for medical evaluation', correct:true, why:'Slide 30, exclusions for self-treatment: "Headache or confusion" (T@61656 11/12).'},
  {t:'Pure aloe vera gel on the intact skin', correct:false, why:'An alternative self-care treatment (slide 32); he is excluded from self-care (slide 30).'},
  {t:'Petrolatum after 24 hours, as often as needed', correct:false, why:'A self-care skin protectant (slide 31); he is excluded (slide 30).'}],
 teach:'Objective 3: decide first whether the patient is a self-care candidate (slides 3, 30).',
 cite:P8SQ+' slides 29–32; T@61656 11/12'},

{id:'P8S-012', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'excl', concept:'p8s-burn-exclusion-list', multi:true,
 tags:['list','referral'], source:'both',
 stem:'Which findings exclude a sunburned patient from self-treatment? Select all that apply.',
 options:[
  {t:'Large areas of blistering', correct:true, why:'Slide 30.'},
  {t:'Fever', correct:true, why:'Slide 30.'},
  {t:'Lightheadedness or vision changes', correct:true, why:'Slide 30.'},
  {t:'Erythema that peaks at around 24 hours', correct:false, why:'The expected course (slide 24).'},
  {t:'Redness of the face and shoulders with no vesicles', correct:false, why:'Her self-care case: "no vesicles or peeling" (slide 35).'}],
 teach:'Slide 30: large areas of blistering, fever, extreme pain, headache or confusion, lightheadedness or vision changes, severe swelling, signs of infection.',
 cite:P8SQ+' slides 24, 30, 35; T@61656 11/12'},

{id:'P8S-013', skill:'tell', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'excl', concept:'p8s-burn-infection-signs',
 tags:['tell','fine-detail'], source:'slide',
 stem:'Each of these findings excludes a sunburned patient from self-treatment. Which one is a sign of infection?',
 options:[
  {t:'Large areas of blistering without drainage', correct:false, why:'Slide 30: an exclusion of its own; the infection signs are streaking or pus from open blisters.'},
  {t:'Lightheadedness with changes in vision', correct:false, why:'Slide 30: an exclusion of its own, not listed under signs of infection.'},
  {t:'Headache with confusion since the afternoon', correct:false, why:'Slide 30: an exclusion of its own, not listed under signs of infection.'},
  {t:'Red streaking that moves away from open blisters', correct:true, why:'Slide 30, signs of infection: "Red areas or streaking that move away from open blisters; Pus drainage from open blisters".'}],
 teach:'Signs of infection are an exclusion for self-treatment (slide 30).',
 cite:P8SQ+' slide 30'},

{id:'P8S-014', skill:'patho', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'path', concept:'p8s-burn-time-course',
 tags:['numbers','two-facts'], source:'both',
 stem:'A patient noticed redness a few hours after a morning at the beach. In Dr. Patel’s therapeutics lecture, when does the erythema of a sunburn peak, and how long may the burn last?',
 options:[
  {t:'Around 24 hours; up to 5 days', correct:true, why:'Slide 24: symptoms start about 4 hours after exposure; erythema peaks at around 24 hours; may last for up to 5 days (T@58911–59161 11/12).'},
  {t:'About 4 hours; up to 24 hours', correct:false, why:'4 hours is when symptoms start; 24 hours is the peak (slide 24).'},
  {t:'Around 24 hours; up to 7 days', correct:false, why:'7 days is the referral point if not healed (slide 34).'},
  {t:'About 48 hours; up to 5 days', correct:false, why:'The peak is at around 24 hours (slide 24); 24–48 hours is the worsening window for referral (slide 34).'}],
 teach:'Start about 4 hours, peak around 24 hours, up to 5 days (slide 24).',
 cite:P8SQ+' slides 24, 34; T@58911–59161 11/12'},

{id:'P8S-015', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'fu', concept:'p8s-burn-followup',
 tags:['referral','numbers'], source:'both',
 stem:'When is a patient who is self-treating a sunburn referred to a physician?',
 options:[
  {t:'Worse after 4 hours, or not healed in 5 days', correct:false, why:'4 hours and 5 days are the onset and duration figures (slide 24).'},
  {t:'Worse after 24–48 hours, or not healed in 5 days', correct:false, why:'A burn may last up to 5 days (slide 24); referral is at 7 days (slide 34).'},
  {t:'Worse after 24–48 hours, or not healed in 7 days', correct:true, why:'Slide 34: "Burn has progressed or worsened after 24 – 48 hours; If not healed in 7 days". "7-day policy applies here as well" (T@64695 11/12).'},
  {t:'Worse after 7 days, or not healed in 14 days', correct:false, why:'Slide 34 gives 24–48 hours and 7 days.'}],
 teach:'Objective 7: follow-up. 24–48 hours worse, or 7 days not healed (slide 34).',
 cite:P8SQ+' slides 24, 34; T@64695 11/12'},

{id:'P8S-016', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-aloe-facts',
 tags:['two-facts'], source:'both',
 stem:'Which statement about aloe vera for sunburn is accurate?',
 options:[
  {t:'Topical or oral use; FDA-approved for burn treatment', correct:false, why:'Slide 32: avoid internal use; not approved by the FDA for burn treatment.'},
  {t:'Topical, on intact skin; not FDA-approved for burns', correct:true, why:'Slide 32: "Use topically on intact skin ... Not been approved by the FDA for burn treatment". "It has shown data to be very effective" (T@64222 11/12).'},
  {t:'Topical, on open blisters; inhibits bradykinin', correct:false, why:'Slide 32: intact skin; it may decrease pain by inhibiting bradykinin.'},
  {t:'Oral use; few drug interactions or adverse effects', correct:false, why:'Slide 32: avoid internal use; multiple drug interactions and adverse effects.'}],
 teach:'On a label, look for pure aloe vera juice or gel (T@64175 11/12).',
 cite:P8SQ+' slide 32; T@62622, T@64175–64222 11/12'},

{id:'P8S-017', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-anesthetic-limits',
 tags:['fine-detail','numbers'], source:'slide',
 stem:'If a topical anesthetic is used on a sunburn, what limits apply?',
 options:[
  {t:'1–2% BSA of intact skin, up to 3–4 times a day', correct:true, why:'Slide 33: "If used, only apply to small areas (1-2% BSA) of intact skin, no more than 3 to 4 times a day".'},
  {t:'1–2% BSA of blistered skin, up to 3–4 times a day', correct:false, why:'Slide 33: intact skin.'},
  {t:'Up to 10% BSA of intact skin, 3–4 times a day', correct:false, why:'Slide 33: small areas, 1–2% BSA.'},
  {t:'1–2% BSA of intact skin, as often as needed', correct:false, why:'"As often as needed" is the skin protectant rule (slide 31); the anesthetic limit is 3 to 4 times a day (slide 33).'}],
 teach:'Topical anesthetics may cause hypersensitivity reaction and systemic symptoms (slide 33).',
 cite:P8SQ+' slides 31, 33'},

{id:'P8S-018', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-burn-goals', multi:true,
 tags:['list'], source:'both',
 stem:'Which are treatment goals for sunburn? Select all that apply.',
 options:[
  {t:'Hydration', correct:true, why:'Slide 29 (T@61051 11/12).'},
  {t:'Relieve pain', correct:true, why:'Slide 29.'},
  {t:'Reduce chances of infection or scarring', correct:true, why:'Slide 29.'},
  {t:'Increase exfoliation', correct:false, why:'An effect of alpha hydroxy acids in photoaging (slide 45).'},
  {t:'Reduce melanin production', correct:false, why:'A retinoid effect in photoaging (slide 44).'}],
 teach:'Slide 29: hydration, relieve pain, provide physical protection, reduce chances of infection or scarring, minimize medication ADEs.',
 cite:P8SQ+' slides 29, 44–45; T@61051 11/12'},

{id:'P8S-019', skill:'case', prof:'Patel', tier:'new', topic:'p8s-burn', sub:'tx', concept:'p8s-burn-dry-skin-protectant',
 tags:['case'], source:'both',
 stem:'A 30-year-old woman was sunburned on her shoulders 2 days ago. The pain has settled; the intact skin now feels dry and irritated. Which product fits her symptoms?',
 options:[
  {t:'A topical anesthetic 3 to 4 times a day', correct:false, why:'Not recommended for routine use (slide 33); her pain has settled.'},
  {t:'A first aid antiseptic on the shoulders', correct:false, why:'Not recommended (slide 33).'},
  {t:'An alpha hydroxy acid lotion twice a day', correct:false, why:'A photoaging keratolytic that may cause skin irritation (slide 43) and is on the sun-sensitivity list (slide 10).'},
  {t:'A skin protectant such as petrolatum', correct:true, why:'Slide 31: skin protectants "Help with rehydration and skin irritation"; examples cocoa butter, petrolatum; started after 24 hours (T@62506 11/12).'}],
 teach:'OTC products are chosen by symptom and patient preference (slide 29).',
 cite:P8SQ+' slides 10, 29, 31, 33, 43; T@62506 11/12'},

/* ---- Sun protection (slides 12-23, 36-37) --------------------------------- */
{id:'P8S-020', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'who', concept:'p8s-infant-5-months',
 tags:['case'], source:'both',
 stem:'A family is going to the lake with their 5-month-old. What does the pharmacist recommend for the infant?',
 options:[
  {t:'Broad-spectrum zinc oxide SPF 30, 1 ounce', correct:false, why:'Under 6 months sunscreen is excluded (slide 13); 1 ounce is the adult amount (slide 21).'},
  {t:'A broad-spectrum SPF ≥ 15, 15 minutes before', correct:false, why:'The rule for patients who can use sunscreen (slide 36); under 6 months is excluded (slide 13).'},
  {t:'Protective clothing, a hat and shade', correct:true, why:'Slide 13: exclusion criteria, < 6 months of age. "Our infants, we would not recommend to wear sunscreen. Instead, we’re protecting their skin with all the other non-farm measures, clothing, hats, shade" (T@51824 11/12).'},
  {t:'Water-resistant SPF 50 every 40–80 minutes', correct:false, why:'Under 6 months sunscreen is excluded (slide 13).'}],
 teach:'"If I ask you a question that’s specific to an age, like I’ll make it obvious" (T@56572 11/12).',
 cite:P8SQ+' slides 13, 21, 36; T@51824, T@56572 11/12'},

{id:'P8S-021', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'who', concept:'p8s-infant-8-months',
 tags:['case','two-facts'], source:'both',
 stem:'A mother asks whether her 8-month-old, who has sensitive skin, can wear sunscreen at the park. What is appropriate?',
 options:[
  {t:'No; under 12 months, use clothing and shade', correct:false, why:'The exclusion is under 6 months (slide 13); "6 months of age, OK, so not 7, not 8" (T@66269 11/12).'},
  {t:'Yes; a PABA sunscreen with SPF 30', correct:false, why:'Slide 17: with sensitive skin, avoid PABA.'},
  {t:'Yes; an oxybenzone product with SPF 10', correct:false, why:'Below SPF 15 (slide 15); a chemical ingredient, and chemical ingredients tend to irritate the skin (T@53859 11/12).'},
  {t:'Yes; a broad-spectrum zinc oxide SPF 30', correct:true, why:'Slide 13: excluded only under 6 months; slide 19: children > 6 months; slide 17: sensitive skin, consider GRASE zinc oxide or titanium dioxide; slide 15: SPF ≥ 15, prefer 30+.'}],
 teach:'Past 6 months: broad spectrum, SPF ≥ 15, physical ingredients preferred (T@55753 11/12).',
 cite:P8SQ+' slides 13, 15, 17, 19; T@53859, T@55753, T@66269 11/12'},

{id:'P8S-022', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'who', concept:'p8s-sunscreen-exclusion',
 tags:['fine-detail'], source:'both',
 stem:'Besides a patient with an allergy to sunscreen ingredients, who is excluded from sunscreen use?',
 options:[
  {t:'A child under 2 years of age', correct:false, why:'Slide 13: < 6 months of age.'},
  {t:'An infant under 6 months of age', correct:true, why:'Slide 13, exclusion criteria: "Allergy to all sunscreen ingredients; < 6 months of age" (T@51824 11/12).'},
  {t:'A patient with Fitzpatrick type VI skin', correct:false, why:'"Everyone should wear sunscreen!" (slide 13; T@51587 11/12).'},
  {t:'A patient taking a photosensitizing drug', correct:false, why:'They use sunscreen and protective clothing every day (slide 37).'}],
 teach:'Two exclusions: allergy to the ingredients, and age under 6 months (slide 13).',
 cite:P8SQ+' slides 13, 37; T@51587, T@51824 11/12'},

{id:'P8S-023', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'sel', concept:'p8s-spf-label-uvb',
 tags:['two-facts'], source:'both',
 stem:'A sunscreen label reads "SPF 50" and makes no broad-spectrum claim. What does the SPF number indicate?',
 options:[
  {t:'UVB protection; UVA coverage is not indicated', correct:true, why:'Slide 15: "Sun Protection Factor (SPF) only indicates UVB protection". "That’s why we’re picking a broad-spectrum sunscreen" (T@52976 11/12).'},
  {t:'UVA protection; UVB coverage is not indicated', correct:false, why:'Reversed (slide 15).'},
  {t:'UVA and UVB protection, blocking 50% of each', correct:false, why:'Slide 15: SPF 50 blocks 98% of UVB rays, and SPF says nothing of UVA.'},
  {t:'UVA and UVB protection, lasting 50 minutes', correct:false, why:'SPF is not a time; reapplication is every 40–80 minutes (slide 21).'}],
 teach:'SPF 15, 30, 50, 100 block 93%, 97%, 98%, 99% of UVB rays (slide 15).',
 cite:P8SQ+' slides 15, 21; T@52976, T@53246 11/12'},

{id:'P8S-024', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'sel', concept:'p8s-spf-minimum-preferred',
 tags:['numbers'], source:'both',
 stem:'In Dr. Patel’s therapeutics lecture, which sunscreen is advised at a minimum, and what is preferred?',
 options:[
  {t:'Broad-spectrum SPF ≥ 30; SPF 50+ preferred', correct:false, why:'Slide 15: at least SPF ≥ 15; prefer SPF 30+.'},
  {t:'A UVB sunscreen SPF ≥ 15; broad spectrum preferred', correct:false, why:'Broad spectrum is part of the minimum (slides 15, 36).'},
  {t:'Broad-spectrum SPF ≥ 15; SPF 30+ preferred', correct:true, why:'Slide 15: "Advise for at least SPF ≥ 15; prefer SPF 30+". "For exam purposes, broad spectrum SPF greater than or equal to 15" (T@53466 11/12); "So hint, broad-spectrum SPF greater than or equal to 15" (T@66751 11/12).'},
  {t:'Broad-spectrum SPF ≥ 10; SPF 15+ preferred', correct:false, why:'Slide 15: at least SPF ≥ 15.'}],
 teach:'She gave this as a hint twice (T@53466, T@66751 11/12).',
 cite:P8SQ+' slides 15, 36; T@53069, T@53466, T@66751 11/12'},

{id:'P8S-025', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'ingr', concept:'p8s-sensitive-skin-choice',
 tags:['case','two-facts'], source:'both',
 stem:'A patient with sensitive skin had an allergic reaction to a sunscreen last summer. Which choice fits?',
 options:[
  {t:'Zinc oxide or titanium dioxide; avoid PABA', correct:true, why:'Slide 17: sensitive skin or previous allergic reactions: "Avoid Ortho-aminobenzoic acid (PABA); Consider GRASE sunscreen ... Zinc oxide, Titanium dioxide" (T@54344 11/12).'},
  {t:'Oxybenzone or homosalate; avoid zinc oxide', correct:false, why:'Zinc oxide is the GRASE choice (slide 17); oxybenzone had the highest blood level in FDA testing (slide 20).'},
  {t:'PABA or padimate O; avoid titanium dioxide', correct:false, why:'Slide 17: avoid PABA; titanium dioxide is GRASE.'},
  {t:'Trolamine salicylate; avoid titanium dioxide', correct:false, why:'Slide 18: trolamine salicylate is not GRASE because of safety concerns.'}],
 teach:'"Physical ingredients, zinc oxide, titanium dioxide is most preferred" (T@55753 11/12).',
 cite:P8SQ+' slides 17–18, 20; T@54344, T@55753 11/12'},

{id:'P8S-026', skill:'class', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'ingr', concept:'p8s-grase-two',
 tags:['recall'], source:'both',
 stem:'Which two sunscreen ingredients are GRASE (generally recognized as safe and effective)?',
 options:[
  {t:'Zinc oxide and avobenzone', correct:false, why:'Slide 18: avobenzone is in the "additional data needed" group.'},
  {t:'Titanium dioxide and oxybenzone', correct:false, why:'Slide 18: oxybenzone is in the "additional data needed" group.'},
  {t:'PABA and trolamine salicylate', correct:false, why:'Slide 18: not GRASE because of safety concerns.'},
  {t:'Zinc oxide and titanium dioxide', correct:true, why:'Slides 17–18. "I want you to understand what two ingredients are most effective, OK? Zinc oxide, titanium dioxide" (T@55166 11/12).'}],
 teach:'Both are the physical sunscreens (slide 16).',
 cite:P8SQ+' slides 16–18; T@54344, T@55166 11/12'},

{id:'P8S-027', skill:'class', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'ingr', concept:'p8s-combination-product',
 tags:['tell'], source:'both',
 stem:'A sunscreen lists octocrylene and titanium dioxide as its active ingredients. How is it classified?',
 options:[
  {t:'Physical; both reflect and scatter UVR', correct:false, why:'Slide 16: octocrylene is a chemical sunscreen.'},
  {t:'A combination of chemical and physical', correct:true, why:'Slide 16: octocrylene chemical, titanium dioxide physical, with "combination" where the two overlap. "Just understand that it’s a mixture of chemical and physical" (T@54973 11/12).'},
  {t:'Chemical; both absorb and block UVR', correct:false, why:'Slide 16: titanium dioxide is a physical sunscreen.'},
  {t:'GRASE; both are safe and effective', correct:false, why:'Slide 18: octocrylene is in the "additional data needed" group.'}],
 teach:'Physical: opaque, reflect and scatter. Chemical: absorb and thus block transmission to the epidermis (slide 16).',
 cite:P8SQ+' slides 16–18; T@53716, T@54973 11/12'},

{id:'P8S-028', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'apply', concept:'p8s-apply-amount-timing',
 tags:['counseling','two-facts','numbers'], source:'both',
 stem:'How does an adult apply sunscreen before going outside?',
 options:[
  {t:'1 ounce over exposed skin, at the time of exposure', correct:false, why:'Slide 21: 15 minutes prior to UV exposure.'},
  {t:'0.5 g per fingertip unit, 15 minutes before', correct:false, why:'0.5 g per fingertip unit is her topical quantity rule (Lecture 5); sunscreen is 1 ounce (slide 21).'},
  {t:'1 ounce over exposed skin, 15 minutes before', correct:true, why:'Slide 21: "Apply approximately 1 ounce of sunscreen over all exposed skin area 15 minutes prior to UV exposure" (T@57500 11/12). "Know how much to apply" (T@66751 11/12).'},
  {t:'1 ounce over exposed skin, 40–80 minutes before', correct:false, why:'40–80 minutes is the reapplication interval (slide 21).'}],
 teach:'1 ounce, 15 minutes before, avoiding eyes and mucus membranes (slides 21, 36).',
 cite:P8SQ+' slides 21, 36; T@57500, T@66751 11/12'},

{id:'P8S-029', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'apply', concept:'p8s-reapply-towel',
 tags:['case','counseling'], source:'both',
 stem:'A swimmer applied a water-resistant, broad-spectrum SPF 30 sunscreen, swam for 20 minutes, and has just dried off with a towel. What is the advice?',
 options:[
  {t:'Reapply now, after towel drying', correct:true, why:'Slide 21: "Reapply after exposure to moisture or towel drying". "We went in the pool, we went in the ocean, towel dry, reapply" (T@57714 11/12).'},
  {t:'Wait until 80 minutes have passed', correct:false, why:'40–80 minutes is the interval between reapplications (slide 21); towel drying calls for reapplying.'},
  {t:'Reapply once the skin starts to redden', correct:false, why:'Sunburn symptoms start about 4 hours after exposure (slide 24), too late to guide reapplication.'},
  {t:'Skip it; the product is water resistant', correct:false, why:'Slide 36: reapply more often if swimming or sweating.'}],
 teach:'After moisture or towel drying, and at least every 40–80 minutes as labelled (slides 21, 36).',
 cite:P8SQ+' slides 21, 24, 36; T@57714 11/12'},

{id:'P8S-030', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'apply', concept:'p8s-reapply-interval',
 tags:['numbers'], source:'both',
 stem:'In Dr. Patel’s therapeutics lecture, how often is sunscreen reapplied?',
 options:[
  {t:'Every 15 minutes', correct:false, why:'15 minutes is the lead time before exposure (slide 21).'},
  {t:'Every 40–80 minutes', correct:true, why:'Slide 21: "Reapply every 40-80 min increments"; slide 36: "at least every 40 - 80 minutes (as labelled)" (T@57714 11/12). "How frequent are we applying it?" (T@66751 11/12).'},
  {t:'Every 4 hours', correct:false, why:'4 hours is when sunburn symptoms start (slide 24).'},
  {t:'Every 24 hours', correct:false, why:'24 hours is the erythema peak (slide 24).'}],
 teach:'More often if swimming, sweating or using a non-water-resistant product (slide 36).',
 note:'Dr. Smith’s Exam 1 lecture gives 90–120 minutes (DEENT_Sun_Exposure_2026.pdf slide 17). This item asks for Dr. Patel’s figure.',
 cite:P8SQ+' slides 21, 24, 36; T@57714, T@66751 11/12'},

{id:'P8S-031', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'apply', concept:'p8s-sunburn-factors', multi:true,
 tags:['list'], source:'both',
 stem:'A patient says, "I use sunscreen, but I still burned." Which are the biggest factors leading to sunburn in sunscreen users? Select all that apply.',
 options:[
  {t:'Not applying enough', correct:true, why:'Slide 21 (T@57808 11/12).'},
  {t:'Not applying often enough', correct:true, why:'Slide 21.'},
  {t:'Not applying evenly', correct:true, why:'Slide 21; slide 22: the back and the feet are missed (T@58161 11/12).'},
  {t:'Choosing a physical sunscreen', correct:false, why:'Zinc oxide and titanium dioxide are the GRASE, preferred ingredients (slide 17).'},
  {t:'Applying 15 minutes before exposure', correct:false, why:'That is the correct timing (slide 21).'}],
 teach:'Enough (1 ounce), often enough (40–80 minutes), evenly (slides 21–22).',
 cite:P8SQ+' slides 17, 21–22; T@57808, T@58161 11/12'},

{id:'P8S-032', skill:'case', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'sel', concept:'p8s-activity-sweating',
 tags:['case'], source:'both',
 stem:'A 28-year-old with Fitzpatrick type III skin is training for a marathon and sweats heavily on long outdoor runs. Which sunscreen fits the planned activity?',
 options:[
  {t:'Broad-spectrum SPF 30, not water resistant', correct:false, why:'Slide 36: with sweating, a non-water-resistant product needs more frequent reapplication; slide 14: select for the planned activity.'},
  {t:'Water-resistant, broad-spectrum SPF 30', correct:true, why:'Slide 14: "Select product for the intended use / planned activity"; pick UVA and UVB coverage. "If they’re going to be sweating quite a bit, then the waterproof sunscreen" (T@52666 11/12).'},
  {t:'Water-resistant SPF 30 with UVB coverage', correct:false, why:'Not broad spectrum (slides 14–15).'},
  {t:'Water-resistant, broad-spectrum SPF 10', correct:false, why:'Below SPF 15 (slide 15).'}],
 teach:'Her poll answer used the same three checks: SPF, broad spectrum, water resistance (T@65673 11/12).',
 cite:P8SQ+' slides 14–15, 36; T@52666, T@65673 11/12'},

{id:'P8S-033', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'who', concept:'p8s-everyone-sunscreen',
 tags:['case'], source:'both',
 stem:'A man with Fitzpatrick type VI skin says his skin does not burn and asks whether he needs sunscreen. What is the best response?',
 options:[
  {t:'No; type VI skin does not burn', correct:false, why:'"Even anybody that thinks that they’re not gonna burn or tan. You still can" (T@51587 11/12).'},
  {t:'No; unless the UV index is high', correct:false, why:'Checking the UV index is a sun-safety step (slide 12), not a reason to skip sunscreen (slide 13).'},
  {t:'Yes; broad-spectrum SPF ≥ 15', correct:true, why:'Slide 13: "Everyone should wear sunscreen!"; UVR causes premature skin aging and skin cancers. "Fitzpatrick one all the way down, everyone should wear sunscreen" (T@51587 11/12).'},
  {t:'Yes; a UVB sunscreen SPF 15', correct:false, why:'Pick both UVA and UVB coverage (slide 14).'}],
 teach:'Slide 8: type VI is dark brown, "never burns, always tans"; slide 13 still says everyone.',
 cite:P8SQ+' slides 8, 12–14; T@51587 11/12'},

{id:'P8S-034', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'couns', concept:'p8s-vitamin-d',
 tags:['counseling'], source:'both',
 stem:'A healthy 40-year-old says she skips sunscreen to keep her vitamin D up. What is accurate?',
 options:[
  {t:'Daily sunscreen lowers vitamin D in healthy people', correct:false, why:'Slide 23: it will not compromise vitamin D status in healthy people.'},
  {t:'A physical sunscreen is needed to keep vitamin D', correct:false, why:'Slide 23 speaks of daily broad-spectrum sunscreens with high UVA protection, not physical products alone.'},
  {t:'Screening is advised for Fitzpatrick types I–II', correct:false, why:'Slide 23: screening and supplementation for photosensitivity disorders, the elderly and Fitzpatrick IV–VI.'},
  {t:'Daily broad-spectrum sunscreen will not lower it', correct:true, why:'Slide 23: "Daily broad-spectrum sunscreens with high ultraviolet (UVA) protection will not compromise vitamin D status in healthy people" (T@58431 11/12).'}],
 teach:'Vitamin D screening and supplementation: photosensitivity disorders, elderly, Fitzpatrick IV–VI (slide 23).',
 cite:P8SQ+' slide 23; T@58431 11/12'},

/* ---- Risk and photosensitizing drugs (slides 8-11, 37) --------------------- */
{id:'P8S-035', skill:'case', prof:'Patel', tier:'new', topic:'p8s-risk', sub:'drugs', concept:'p8s-doxycycline-counsel',
 tags:['case','counseling'], source:'both',
 stem:'A 17-year-old takes doxycycline for acne and will play in an outdoor volleyball tournament next month. Which counseling fits?',
 options:[
  {t:'Sunscreen on tournament days when the UV index is high', correct:false, why:'Slide 37: every day while on a photosensitizing drug.'},
  {t:'Sunscreen and protective clothing every day', correct:true, why:'Slide 37: "If taking a photosensitizing drug – use sunscreen and protective clothing every day and reapply as instructed". Doxycycline "is the most common photosensitizing antibiotic" (T@49890 11/12); slide 17: reduce sun exposure as much as possible.'},
  {t:'Sunscreen can be skipped on cloudy days', correct:false, why:'Slide 12: a cloudy or overcast day is not protective.'},
  {t:'An SPF 10 product reapplied every 40–80 minutes', correct:false, why:'Below SPF 15 (slide 15); slide 19 gives broad-spectrum SPF 30+ with a photosensitizing agent.'}],
 teach:'"What are they currently on?" (T@95722 11/12): check the medication list for a photosensitizer.',
 cite:P8SQ+' slides 10, 12, 15, 17, 19, 37; T@49890, T@95722 11/12'},

{id:'P8S-036', skill:'adverse', prof:'Patel', tier:'new', topic:'p8s-risk', sub:'drugs', concept:'p8s-coc-photosensitizer',
 tags:['case','interaction'], source:'both',
 stem:'A 21-year-old woman’s medication list reads: Yazmin (a combined oral contraceptive), acetaminophen as needed, a multivitamin, and calcium with vitamin D. Which is associated with increased sun sensitivity?',
 options:[
  {t:'Yazmin', correct:true, why:'Slide 10: "Combined oral contraceptives and estrogens (ethinylestradiol, drospirenone)"; slide 11: oral contraceptives. "COCs to a certain extent" (T@50187 11/12). Her case patient takes Yazmin (slide 35).'},
  {t:'Acetaminophen', correct:false, why:'Slide 10 lists NSAIDs (ibuprofen, naproxen, celecoxib, piroxicam, ketoprofen), not acetaminophen.'},
  {t:'The multivitamin', correct:false, why:'Not on slides 10–11.'},
  {t:'Calcium with vitamin D', correct:false, why:'Not on slides 10–11.'}],
 teach:'She asked the class to mark the listed drugs that treat the conditions already covered: doxycycline, ibuprofen, COCs, retinoids (T@50187 11/12).',
 cite:P8SQ+' slides 10–11, 35; T@50187 11/12'},

{id:'P8S-037', skill:'adverse', prof:'Patel', tier:'new', topic:'p8s-risk', sub:'drugs', concept:'p8s-photosensitizer-list', multi:true,
 tags:['list'], source:'both',
 stem:'Which medications are associated with increased sun sensitivity? Select all that apply.',
 options:[
  {t:'Doxycycline', correct:true, why:'Slide 10, antibiotics; "the most common photosensitizing antibiotic" (T@49890 11/12).'},
  {t:'Isotretinoin', correct:true, why:'Slide 10: retinoids (acitretin, isotretinoin).'},
  {t:'Ibuprofen', correct:true, why:'Slide 10: NSAIDs (T@50187 11/12).'},
  {t:'Hydrochlorothiazide', correct:true, why:'Slide 10: thiazide diuretics.'},
  {t:'Acetaminophen', correct:false, why:'Not on slides 10–11.'}],
 teach:'"Highlight the ones that we’ve talked about to treat our derm conditions" (T@50187 11/12).',
 cite:P8SQ+' slides 10–11; T@49890, T@50187 11/12'},

{id:'P8S-038', skill:'epi', prof:'Patel', tier:'new', topic:'p8s-risk', sub:'risk', concept:'p8s-highest-risk', multi:true,
 tags:['list'], source:'both',
 stem:'Which patients are at highest risk of UVR-induced problems? Select all that apply.',
 options:[
  {t:'Fitzpatrick type I or II skin', correct:true, why:'Slide 9: fair skin (T@49012 11/12).'},
  {t:'A history of a blistering sunburn', correct:true, why:'Slide 9: one or more serious or blistering sunburns.'},
  {t:'Use of tanning beds', correct:true, why:'Slide 9: increased UVR exposure (tanning beds / booths).'},
  {t:'Fitzpatrick type V skin', correct:false, why:'Slide 8: brown, rarely burns, tans easily; slide 9 names fair skin.'},
  {t:'Dark brown hair', correct:false, why:'Slide 9: blonde, red, or light brown hair.'}],
 teach:'Slide 9 also lists freckles, a previous UVR growth, a UV-induced skin disorder, a family member with melanoma, photosensitizing or immunosuppressive medications, autoimmune disease.',
 cite:P8SQ+' slides 8–9; T@49012 11/12'},

/* ---- Skin cancer (slides 27-28, 37) ---------------------------------------- */
{id:'P8S-039', skill:'tell', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-diameter',
 tags:['numbers'], source:'both',
 stem:'Under the ABCDE rule for skin cancer, most melanomas are larger than what diameter?',
 options:[
  {t:'2 millimeters', correct:false, why:'Slide 28: 6 millimeters.'},
  {t:'4 millimeters', correct:false, why:'Slide 28: 6 millimeters.'},
  {t:'6 millimeters', correct:true, why:'Slide 28: "Melanomas can be tiny, but most are larger than 6 millimeters wide (about 1/4 inch wide)" (T@60867 11/12).'},
  {t:'10 millimeters', correct:false, why:'Slide 28: 6 millimeters.'}],
 teach:'Asymmetry, Border irregular, Color uneven, Diameter, Evolving (slide 28). "Remember the pneumonic" (T@77336 11/12).',
 cite:P8SQ+' slide 28; T@60584, T@60867, T@77336 11/12'},

{id:'P8S-040', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-refer',
 tags:['case','referral'], source:'both',
 stem:'A 52-year-old man points to a mole on his shoulder: one half does not match the other, the edges are ragged, it has shades of black, brown and blue, it is 8 millimeters wide, and it has grown over the past few months. What does the pharmacist advise?',
 options:[
  {t:'Have a health care provider look at it', correct:true, why:'Slide 37: "Suspicious skin lesion, have a health care provider look at it to determine if concern for skin cancer". It meets A, B, C, D and E (slide 28). "Catch it early. That is the biggest key" (T@68094 11/12).'},
  {t:'Hydroquinone 4% for up to three months', correct:false, why:'Hydroquinone is for melasma and lentigines (slide 47), not a lesion meeting the ABCDE rule.'},
  {t:'A retinoid at bedtime with SPF 30+ by day', correct:false, why:'Photoaging treatment (slides 44, 54).'},
  {t:'Broad-spectrum SPF ≥ 15 and recheck in 7 days', correct:false, why:'Sunscreen is prevention (slide 36); the lesion needs evaluation now (slide 37).'}],
 teach:'"What does that lesion look like? So remember the pneumonic" (T@77076–77336 11/12).',
 cite:P8SQ+' slides 28, 36–37, 44, 47; T@68094, T@77336 11/12'},

/* ---- Photoaging (slides 38-54) --------------------------------------------- */
{id:'P8S-041', skill:'tell', prof:'Patel', tier:'new', topic:'p8s-age', sub:'recog', concept:'p8s-photoaging-vs-chronologic',
 tags:['tell'], source:'both',
 stem:'Which set of findings points to photoaging rather than chronologic aging?',
 options:[
  {t:'Thin skin, fine wrinkles, xerosis', correct:false, why:'Slide 40: chronologic aging.'},
  {t:'Coarse wrinkles, leathery skin, lentigines', correct:true, why:'Slide 40, photoaging: atrophic skin, coarse wrinkles, leathery skin, lentigines, bronzed appearance, yellow cobblestone appearance, telangiectasis, bruising, sun-induced dermatitis (T@69688 11/12).'},
  {t:'Laxity, seborrheic keratoses, senile angiomas', correct:false, why:'Slide 40: chronologic aging.'},
  {t:'Fine wrinkles, laxity, telangiectasis', correct:false, why:'Fine wrinkles and laxity are chronologic; telangiectasis alone is the photoaging sign (slide 40).'}],
 teach:'Chronologic: thin skin, fine wrinkles, xerosis, laxity. Photoaging: coarse wrinkles, leathery, pigment changes (slide 40).',
 cite:P8SQ+' slide 40; T@69688 11/12'},

{id:'P8S-042', skill:'case', prof:'Patel', tier:'new', topic:'p8s-age', sub:'recog', concept:'p8s-glogau-type-ii',
 tags:['case'], source:'both',
 stem:'A 35-year-old woman has wrinkles that appear when she smiles (wrinkles in motion) and palpable keratoses. Which Glogau type of photoaging fits?',
 options:[
  {t:'Type I (mild)', correct:false, why:'Slide 39: no wrinkles, early photoaging, mild pigment changes; 20–30 years.'},
  {t:'Type II (moderate)', correct:true, why:'Slide 39: "Wrinkles in motion, early–moderate photoaging, keratoses palpable; 30–40 years of age" (T@69124 11/12).'},
  {t:'Type III (advanced)', correct:false, why:'Slide 39: wrinkles at rest, obvious dyschromia and keratoses; ≥ 50 years.'},
  {t:'Type IV (severe)', correct:false, why:'Slide 39: only wrinkles, yellow-gray skin; ≥ 60 years.'}],
 teach:'I: no wrinkles, 20–30. II: in motion, 30–40. III: at rest, ≥ 50. IV: only wrinkles, ≥ 60 (slide 39; "know that type 1 mild photoaging is 20 to 30", T@68961 11/12).',
 cite:P8SQ+' slide 39; T@68961, T@69124 11/12'},

{id:'P8S-043', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-age', sub:'ret', concept:'p8s-retinoid-counsel',
 tags:['counseling','two-facts'], source:'both',
 stem:'A 45-year-old starts an OTC retinol product for photoaging. How is it used?',
 options:[
  {t:'Each morning to dry skin; a moisturizer at night', correct:false, why:'Slide 54: once at bedtime; the SPF product goes on during the day.'},
  {t:'Within 15 minutes of cleansing, twice a day', correct:false, why:'"Within 15 minutes of cleansing" is the hydroxy acid rule (slide 54).'},
  {t:'Once at bedtime to damp skin; SPF 30+ by day', correct:false, why:'Slide 54: to dry skin after cleansing.'},
  {t:'Once at bedtime to dry skin; SPF 30+ by day', correct:true, why:'Slide 54: "Apply once HS daily to dry skin after cleansing; Add moisturizer / foundation product with SPF 30+ during day". "Should be at night ... don’t skip out on that SPF the next day" (T@76826–76959 11/12).'}],
 teach:'Retinoid side effects: dryness, scaling, phototoxicity; reduce with an SPF 30+ moisturizer by day and the retinoid at night or on alternate days (slide 44).',
 cite:P8SQ+' slides 44, 54; T@76826–76959 11/12'},

{id:'P8S-044', skill:'class', prof:'Patel', tier:'new', topic:'p8s-age', sub:'ret', concept:'p8s-retinol-conversion',
 tags:['fine-detail'], source:'slide',
 stem:'Why is OTC retinol less effective for photoaging than prescription tretinoin?',
 options:[
  {t:'It is difficult to deliver to the skin', correct:false, why:'That is the limit of topical antioxidants (slide 49).'},
  {t:'Its use is limited to three months', correct:false, why:'That is hydroquinone (slide 47).'},
  {t:'The skin must convert it to retinoic acid', correct:true, why:'Slide 43: OTC retinol, retinyl palmitate "Must be converted to retinoic acid by the skin—this limits efficacy".'},
  {t:'It is not FDA-approved for OTC sale', correct:false, why:'That is hydroquinone (slide 48).'}],
 teach:'Prescription retinoic acid and tazarotene can reduce wrinkles and improve color and texture over 6–12 months (slide 43).',
 cite:P8SQ+' slides 43, 47–49'},

{id:'P8S-045', skill:'mech', prof:'Patel', tier:'new', topic:'p8s-age', sub:'ret', concept:'p8s-retinoid-effects', multi:true,
 tags:['list'], source:'both',
 stem:'How do retinoids improve photoaged skin? Select all that apply.',
 options:[
  {t:'Increase keratinocyte cell division', correct:true, why:'Slide 44 (T@71188 11/12).'},
  {t:'Enhance new collagen and elastic fibers in the dermis', correct:true, why:'Slide 44.'},
  {t:'Reduce melanin production', correct:true, why:'Slide 44 (T@71479 11/12).'},
  {t:'Inhibit bradykinin', correct:false, why:'Aloe vera (slide 32).'},
  {t:'Reflect and scatter UVR', correct:false, why:'Physical sunscreens (slide 16).'}],
 teach:'Benefit needs long-term daily use and may take months (slide 44; T@71622 11/12).',
 cite:P8SQ+' slides 16, 32, 44; T@71188, T@71479, T@71622 11/12'},

{id:'P8S-046', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-age', sub:'hq', concept:'p8s-hydroquinone-duration',
 tags:['numbers'], source:'both',
 stem:'A hydroquinone 4% combination product is used for melasma or lentigines. To what length of time is its use limited?',
 options:[
  {t:'7 days', correct:false, why:'7 days is the sunburn referral point (slide 34).'},
  {t:'Four weeks', correct:false, why:'Four weeks is the minimum time for photoaging results (slide 53).'},
  {t:'Three months', correct:true, why:'Slide 47: "Combination products containing hydroquinone (4%); Limit use to three months; Wear sunscreen" (T@72878 11/12).'},
  {t:'6–12 months', correct:false, why:'6–12 months is the time course of prescription retinoids (slide 43).'}],
 teach:'Hydroquinone: melasma and lentigines, 4%, three months, with sunscreen (slide 47).',
 cite:P8SQ+' slides 34, 43, 47, 53; T@72878 11/12'},

{id:'P8S-047', skill:'case', prof:'Patel', tier:'new', topic:'p8s-age', sub:'hq', concept:'p8s-hydroquinone-fda',
 tags:['case'], source:'both',
 stem:'A patient brings a nonprescription skin-lightening cream to the counter; hydroquinone is on the label. What is accurate?',
 options:[
  {t:'Hydroquinone is not FDA-approved for OTC sale', correct:true, why:'Slide 48: "Skin lightening products with hydroquinone are NOT FDA-approved for over-the-counter sale in the U.S."; use when prescribed by a licensed health care provider. "It is not FDA approved for OTC sale in the US" (T@73089 11/12).'},
  {t:'Hydroquinone 4% is FDA-approved for OTC sale', correct:false, why:'Slide 48: not FDA-approved for OTC sale; 4% is the strength in combination products (slide 47).'},
  {t:'Hydroquinone is GRASE, as zinc oxide is', correct:false, why:'GRASE refers to the sunscreens zinc oxide and titanium dioxide (slide 18).'},
  {t:'Hydroquinone is approved OTC with a retinoid', correct:false, why:'Slide 48: not FDA-approved for OTC sale.'}],
 teach:'"There are still products available over the counter that have it. But it’s just not FDA regulated" (T@73089 11/12); the pharmacist educates on safe use.',
 cite:P8SQ+' slides 18, 47–48; T@73089 11/12'},

{id:'P8S-048', skill:'adverse', prof:'Patel', tier:'new', topic:'p8s-age', sub:'hq', concept:'p8s-hydroquinone-ochronosis',
 tags:['fine-detail'], source:'slide',
 stem:'Which serious side effect has been reported with skin-lightening products that contain hydroquinone?',
 options:[
  {t:'Phototoxicity with dryness and scaling', correct:false, why:'Retinoid side effects (slide 44).'},
  {t:'Arrhythmia from systemic absorption', correct:false, why:'Phenol in deep chemical peels (slide 46).'},
  {t:'Reactivation of HSV with scarring', correct:false, why:'Medium and deep chemical peels (slide 46).'},
  {t:'Ochronosis that may be permanent', correct:true, why:'Slide 48: "Skin discoloration (ochronosis) that may be permanent; Rashes; Facial swelling".'}],
 teach:'Slide 48: use hydroquinone products when prescribed by a licensed health care provider.',
 cite:P8SQ+' slides 44, 46, 48'},

{id:'P8S-049', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-age', sub:'oth', concept:'p8s-peel-self-applied',
 tags:['case'], source:'both',
 stem:'A patient asks about buying a chemical peel kit to use on her own face at home for photoaging. Which response matches Dr. Patel’s advice?',
 options:[
  {t:'Not recommended as a self-applied OTC product', correct:true, why:'"I would not recommend chemical peels that are over the counter and something that you can do to your own skin ... because of the side effects and the risk factors" (T@72287 11/12); usually done by medical spas and aestheticians. Slide 46 lists the side effects by depth.'},
  {t:'Not recommended as a deep peel; superficial kits suit home use', correct:false, why:'She did not recommend any self-applied OTC peel (T@72287 11/12); superficial peels still carry pigmentary change, erythema and burning (slide 46).'},
  {t:'Not recommended with a retinoid; otherwise suited to home use', correct:false, why:'She gave no such exception; her reason was the side effects and risk factors of the peels themselves (T@72287 11/12; slide 46).'},
  {t:'Recommended at home, limited to three months of use', correct:false, why:'Three months is the hydroquinone limit (slide 47); she did not recommend self-applied peels (T@72287 11/12).'}],
 teach:'Deep peels are "only professional medical use" (T@72657 11/12).',
 cite:P8SQ+' slides 46–47; T@72287, T@72657 11/12'},

{id:'P8S-050', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-age', sub:'couns', concept:'p8s-photoaging-results-time',
 tags:['numbers','counseling'], source:'both',
 stem:'A patient starting a photoaging skincare regimen asks how long to use it before judging the results. What is the counseling point?',
 options:[
  {t:'At least 5 days', correct:false, why:'5 days is how long a sunburn may last (slide 24); slide 53: at least four weeks.'},
  {t:'At least 7 days', correct:false, why:'7 days is her referral point in other conditions (slide 34); slide 53: at least four weeks.'},
  {t:'At least 14 days', correct:false, why:'Slide 53: at least four weeks; she said "at least more than a month" (T@74891 11/12).'},
  {t:'At least four weeks', correct:true, why:'Slide 53: "Results take time (at least four weeks)". "I would give it at least more than a month to really see some efficacy" with daily use (T@74891 11/12).'}],
 teach:'Consistent daily use; retinoid benefit may take months (slides 44, 53).',
 cite:P8SQ+' slides 24, 34, 44, 53; T@74891 11/12'},

{id:'P8S-051', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-age', sub:'couns', concept:'p8s-photoaging-counsel-list', multi:true,
 tags:['list','counseling'], source:'slide',
 stem:'Which are counseling points for a patient with photoaging? Select all that apply.',
 options:[
  {t:'Clean the face twice daily with a mild soap or cleanser', correct:true, why:'Slide 53.'},
  {t:'Use moisturizers twice daily or more often, lips included', correct:true, why:'Slide 53.'},
  {t:'Use broad-spectrum SPF ≥ 15 daily and reapply often', correct:true, why:'Slide 53.'},
  {t:'Apply products close to the eyes for crow’s feet', correct:false, why:'Slide 53: do not apply products near eyes or mucus membranes.'},
  {t:'Expect results within 7 days', correct:false, why:'Slide 53: at least four weeks.'}],
 teach:'Photoaging is preventable and cumulative; healthy lifestyle, stop smoking (slide 53). "Please do review the slide thoroughly" (T@76557 11/12).',
 cite:P8SQ+' slide 53; T@76557 11/12'}
);
