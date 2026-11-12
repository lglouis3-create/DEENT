/* ==========================================================================
   Lecture 6 questions (Dr. Patel, Tuesday 11/10/2026, acne therapeutics).
   Exam 2 (Lectures 1-4 30%, Lectures 5-8 70%).
   Source: Patel_Acne-Therapeutics-Student.pdf (51 slides; "slide N" = PDF
   page; the copy is annotated, only the printed slide text is cited), her
   PollEv questions of 11/10 (PollEV_Dr_Patel.pdf p. 3) and the 11/10 lecture
   transcript (T@n 11/10 = byte offset in DEENT_Lecture_11.10_transcript.txt,
   the start of the passage quoted).
   Her format (11/10): "all questions are fair game in terms of multiple
   choice, select all possible, fill in the blank ... calculations ...
   matching" (T@2398); "I do create questions based on the objectives that I
   start off with" (T@2398); "I give you guys pull everywhere questions because
   I want you guys to know how I'm gonna be asking you questions on the exam"
   (T@3077); severity words one / some / many: "those are the terms that I
   will also use on my cases on the exam" (T@13918).
   Drafts: scratchpad exam2/patel_L6_L7_drafts.md (P6-*, BP6-*; P6-033 left
   out, the adapalene prescription strength being spoken both ways at
   T@36299) and patel_harder_drafts.md Part C (P6H-*), reviewed 2026-11-11/12.
   Not keyed (slide and speech disagree, or not traceable): acne prevalence
   figures (slide 3); the fourth COC on the student slide (she said to follow
   her list of three, T@44650); topical dapsone by sex (slide 25 vs T@55262);
   spironolactone/flutamide dose; OTC retinoid age boundary at exactly 12;
   retinoids in pregnancy (slide 27 vs T@31182); "efficacy as soon as 5 days";
   isotretinoin as severe first line (slide 40 lists it, she said last line,
   T@59663, T@60314); St. John's wort with isotretinoin (spoken, cut off on the
   slide); tretinoin and pyrithione strengths; hydration volume.
   ========================================================================== */
const P6Q = 'Lecture 6 (Patel_Acne-Therapeutics-Student.pdf)';

TOPIC_DECKS.push(
  {id:'p6', exam:2, name:'Acne Therapeutics (Dr. Patel)', file:'Patel_Acne-Therapeutics-Student.pdf', when:'taught 11/10 (Exam 2)',
   topics:['p6-cls', 'p6-risk', 'p6-np', 'p6-otc', 'p6-rxt', 'p6-oral', 'p6-iso', 'p6-alg', 'p6-couns']});

TOPICS.push(
 {id:'p6-cls', name:'Acne lesions and severity grades', prof:'Patel',
  cite:'slides 5–8 · taught 11/10 (Lecture 6)', subs:[
   {id:'stage', name:'Lesion stages: non-inflammatory and inflammatory', cite:'slides 5–6'},
   {id:'grade', name:'Mildly clear, mild, moderate, severe (one / some / many)', cite:'slides 7–8'}]},
 {id:'p6-risk', name:'Risk factors, causative drugs, complications, exclusions', prof:'Patel',
  cite:'slides 9–11, 17–18 · taught 11/10 (Lecture 6)', subs:[
   {id:'drug', name:'Drugs that cause or worsen acne', cite:'slide 10'},
   {id:'comp', name:'Complications', cite:'slide 11'},
   {id:'eval', name:'Evaluation and testing', cite:'slide 17'},
   {id:'excl', name:'Exclusions for self-care', cite:'slide 18'}]},
 {id:'p6-np', name:'Treatment goals, cleansing and vehicles', prof:'Patel',
  cite:'slides 13, 19, 24 · taught 11/10 (Lecture 6)', subs:[
   {id:'goals', name:'Treatment goals', cite:'slide 13'},
   {id:'clean', name:'Cleansing and makeup', cite:'slide 19'},
   {id:'form', name:'Vehicle by skin type', cite:'slide 24'}]},
 {id:'p6-otc', name:'OTC topicals: benzoyl peroxide, retinoid, hydroxy acids, others', prof:'Patel',
  cite:'slides 22–30 · taught 11/10 (Lecture 6)', subs:[
   {id:'props', name:'Bactericidal, keratolytic, comedolytic chart', cite:'slide 23'},
   {id:'bp',    name:'Benzoyl peroxide', cite:'slides 23, 25–26'},
   {id:'ret',   name:'OTC adapalene (Differin)', cite:'slide 27'},
   {id:'aha',   name:'Alpha hydroxy acids', cite:'slide 28'},
   {id:'bha',   name:'Salicylic acid', cite:'slide 29'},
   {id:'comp',  name:'Complementary agents', cite:'slide 30'}]},
 {id:'p6-rxt', name:'Prescription topicals', prof:'Patel',
  cite:'slides 25, 31 · taught 11/10 (Lecture 6)', subs:[
   {id:'abx',     name:'Topical antibiotics', cite:'slides 25, 31'},
   {id:'dapsone', name:'Dapsone', cite:'slide 31'},
   {id:'aza',     name:'Azelaic acid', cite:'slides 25, 31'}]},
 {id:'p6-oral', name:'Oral antibiotics and hormonal agents', prof:'Patel',
  cite:'slides 32–36 · taught 11/10 (Lecture 6)', subs:[
   {id:'abx',   name:'Tetracyclines, sarecycline, TMP/SMX, macrolides', cite:'slides 32–33'},
   {id:'coc',   name:'Combined oral contraceptives', cite:'slides 34–36'},
   {id:'spiro', name:'Spironolactone and flutamide', cite:'slide 34'}]},
 {id:'p6-iso', name:'Isotretinoin and iPledge', prof:'Patel',
  cite:'slides 37–38 · taught 11/10 (Lecture 6)', subs:[
   {id:'ipledge', name:'iPledge: tests, contraception, fill windows', cite:'slide 38'},
   {id:'inter',   name:'Drugs not used with isotretinoin', cite:'slide 38'},
   {id:'mon',     name:'Labs', cite:'slide 37'},
   {id:'rx',      name:'Supply, refills, course length', cite:'slide 37'},
   {id:'dose',    name:'Dose by weight', cite:'slide 37'},
   {id:'couns',   name:'Adverse effects and counseling', cite:'slides 37–38'}]},
 {id:'p6-alg', name:'Treatment algorithm by severity and her two cases', prof:'Patel',
  cite:'slides 12, 20, 40, 45–46 · taught 11/10 (Lecture 6)', subs:[
   {id:'case',  name:'Her PollEv cases', cite:'slides 12, 46'},
   {id:'clear', name:'Mildly clear', cite:'slide 40'},
   {id:'mild',  name:'Mild', cite:'slides 20, 40'},
   {id:'mod',   name:'Moderate', cite:'slides 20, 40'},
   {id:'sev',   name:'Severe', cite:'slides 20, 40'}]},
 {id:'p6-couns', name:'Counseling, expectations, monitoring, no response', prof:'Patel',
  cite:'slides 41–48 · taught 11/10 (Lecture 6)', subs:[
   {id:'time',  name:'Time to benefit', cite:'slides 41, 47'},
   {id:'top',   name:'Applying topicals', cite:'slide 42'},
   {id:'oral',  name:'Taking oral agents', cite:'slide 42'},
   {id:'shave', name:'Shaving', cite:'slide 43'},
   {id:'mon',   name:'Monitoring the lesion count', cite:'slide 44'},
   {id:'nr',    name:'No response', cite:'slide 48'},
   {id:'plan',  name:'Building the plan', cite:'slide 47'}]}
);

QUESTIONS.push(
/* ---- Her PollEv cases (slides 12, 46) ------------------------------------- */
{id:'P6-001', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'case', concept:'p6-case1-severity',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10 (Case 1): "How would you best classify this patient’s primary problem?"',
 stem:'CC: Patient states she has a school dance in a couple of months and wants to cure her acne before then. HPI: A 16-year-old teen girl comes to the pharmacy to ask about acne medication. She denies taking any medications, other than Motrin for headaches every once in a while. Upon questioning, she reveals that her acne is located only on her face. Physical assessment: no inflammation noted; only some open and closed comedones on her cheeks and chin. She is also wearing heavy covering makeup. How would you best classify this patient’s primary problem?',
 options:[
  {t:'Mild Acne', correct:true, why:'Slide 7, Type 2 mild: "Some noninflammatory lesions". No inflammation and only some open and closed comedones is mild; her answer (T@12560–14612 11/10).'},
  {t:'Moderate Acne', correct:false, why:'Moderate needs many non-inflammatory lesions and some inflammatory lesions (slide 8). She has some comedones and no inflammation.'},
  {t:'Severe Acne', correct:false, why:'Severe has many inflammatory and non-inflammatory lesions with nodules and scarring (slide 8); none are present.'},
  {t:'Eczema', correct:false, why:'Eczema is atopic dermatitis (Lecture 5). Open and closed comedones are acne lesions (slide 5).'}],
 teach:'Her severity words: "one", "some", "many": "those are the terms that I will also use on my cases on the exam ... I’m not gonna tell you like 10 and you got to figure out if it’s some or many" (T@13918 11/10).',
 cite:P6Q+' slides 7, 12; PollEv 11/10; T@12560–14612 11/10'},

{id:'P6-002', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'case', concept:'p6-case1-first-line',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10 (Case 1): "What is the most appropriate first-line agent therapy for this patient?"',
 stem:'Same patient (16-year-old girl, mild acne: some open and closed comedones, no inflammation). What is the most appropriate first-line agent therapy for this patient?',
 options:[
  {t:'Benzoyl peroxide BID to affected areas', correct:true, why:'Slides 20 and 40: mild acne, first line is topical single therapy, BP or a topical retinoid; slide 25: "Benzoyl peroxide is a preferred initial OTC topical agent". Her answer: "keyword in this question? First line ... Follow the mild algorithm" (T@66568 11/10).'},
  {t:'Doxycycline PO Daily', correct:false, why:'Oral antibiotics enter at moderate acne, added to a topical combination (slide 40); they are not first line for mild acne.'},
  {t:'Frequent face washing with salicylic acid containing cleanser', correct:false, why:'Slide 19: avoid excessive cleansing; cleanse twice a day. Salicylic acid has limited efficacy data (slide 29).'},
  {t:'Oral contraceptives', correct:false, why:'A COC is a severe-acne second-line option for females (slide 40), not first line for mild acne.'}],
 teach:'"First line" is the key word: the mild column of the algorithm starts with one topical agent, BP or a topical retinoid (slides 20, 40).',
 cite:P6Q+' slides 20, 25, 40; PollEv 11/10; T@66568 11/10'},

{id:'P6-003', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'coc', concept:'p6-coc-candidate',
 tags:['poll','verbatim'], source:'both',
 quote:'PollEv 11/10: "Who would be the best candidate for COC treatment for acne?"',
 stem:'Who would be the best candidate for COC treatment for acne?',
 options:[
  {t:'25-year-old woman with PMH of DVT', correct:false, why:'Slide 36: COCs raise the risk of venous thrombotic events; a past DVT excludes her (T@45257 11/10).'},
  {t:'35-year-old woman who smokes 1/2 PPD', correct:false, why:'Slide 34: "non-smoker < 35"; she smokes and is 35 (T@45257 11/10: "a patient who is also a smoker is only increasing the risk even more").'},
  {t:'22-year-old woman who does not want to be pregnant', correct:true, why:'Slide 34: for women who also want contraception; older than 14 or more than 2 years since menarche; non-smoker under 35. She meets each criterion (her answer, T@45949 11/10).'},
  {t:'12-year-old girl in good health', correct:false, why:'Slide 34: "> 14 years of age; or over 2 years since menarche". "12 years of age, so I remember greater than" (T@45949 11/10).'}],
 teach:'Each wrong option fails one COC criterion: VTE history, smoking at 35, age.',
 cite:P6Q+' slides 34, 36; PollEv 11/10; T@45257–46636 11/10'},

{id:'P6-004', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'case', concept:'p6-case2-severity',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10 (Case 2): "What best classifies this patient’s acne?"',
 stem:'CC: Patient complaining of acne despite being prescribed oral doxycycline, topical retinoid, and benzoyl peroxide for 8 months. HPI: A 16-year-old teen girl comes to the pharmacy to ask about acne medication. She reveals that her acne is located only on her face. She is also complaining of irregular periods. She is not sexually active nor planning a pregnancy. Physical assessment: comedones on her forehead, nose and chin; papules and cysts on her cheek; she also has some cystic lesions on her upper back and shoulders. Medications: Motrin PRN for headaches, loratadine 10 mg daily, doxycycline 50 mg daily, topical retinoid (OTC), topical benzoyl peroxide (OTC). What best classifies this patient’s acne?',
 options:[
  {t:'Mild', correct:false, why:'Mild has no nodules (slide 7); she has cysts on the cheek, back and shoulders.'},
  {t:'Moderate', correct:false, why:'Moderate allows "no more than one nodule" (slide 8); she has several cystic lesions.'},
  {t:'Severe', correct:true, why:'Slide 8, severe: "No more than a few nodular lesions"; more than one cyst is severe. "Is it no more than one cystic lesion or is it more than one? ... definitely more than one" (T@68494–69094 11/10).'},
  {t:'Mildly Clear', correct:false, why:'Mildly clear is rare non-inflammatory lesions with no more than one small lesion (slide 7).'}],
 teach:'One nodule or cyst at most: moderate. More than one: severe (slide 8).',
 cite:P6Q+' slides 8, 46; PollEv 11/10; T@68494–69094 11/10'},

{id:'P6-005', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'case', concept:'p6-case2-next-line',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10 (Case 2): "Which of the following is the most appropriate next line therapy for this patient?"',
 stem:'Same patient (16-year-old girl, severe acne after 8 months of oral doxycycline, a topical retinoid and benzoyl peroxide; irregular periods; not sexually active). Which of the following is the most appropriate next line therapy for this patient?',
 options:[
  {t:'Spironolactone', correct:false, why:'Spironolactone is on the same severe second line (slide 40), but her irregular periods favour the COC: "Irregular periods ... that could be a reason to why COC over spironolactone" (T@69094–69647 11/10).'},
  {t:'Increase facial cleansing', correct:false, why:'Slide 19: avoid excessive cleansing; it does not treat severe acne.'},
  {t:'Oral corticosteroids', correct:false, why:'Corticosteroids are on her list of drugs that cause acne (slide 10).'},
  {t:'Oral combined contraceptives', correct:true, why:'Slide 40, severe second line: "Add Combined Oral contraceptive or oral spironolactone (females only)"; slide 34: COCs "might be beneficial for irregular menses" (T@69647 11/10).'}],
 teach:'The case detail decides between two options on the same line: irregular periods point to the COC.',
 cite:P6Q+' slides 10, 34, 40, 46; PollEv 11/10; T@69094–69647 11/10'},

{id:'P6-006', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'couns', concept:'p6-case2-iso-not',
 tags:['poll','verbatim','case'], source:'both',
 quote:'PollEv 11/10 (Case 2): "Which of the following is NOT an important counseling point for this medication?"',
 stem:'Same patient. Despite her current treatment, her acne does not improve in six months and she is interested in trying oral isotretinoin. Which of the following is NOT an important counseling point for this medication?',
 options:[
  {t:'Teratogenic potential', correct:false, why:'Slide 37: boxed warning, birth defects. "Biggest thing here, black box warning of birth defects" (T@47635 11/10).'},
  {t:'Mood disorders/suicidal ideations', correct:false, why:'Slide 37 adverse effects: mood disorders, depression, suicidal ideation.'},
  {t:'Enrolling in I-Pledge Program', correct:false, why:'Slide 38: every patient registers with iPledge.'},
  {t:'Do not take medication with dairy products', correct:true, why:'Not an isotretinoin counseling point on slides 37–38. "D would not necessarily be an important counseling point" (T@69647–70327 11/10).'}],
 teach:'Isotretinoin counseling: birth defects, mood effects, iPledge registration (slides 37–38).',
 cite:P6Q+' slides 37–38; PollEv 11/10; T@69647–70327 11/10'},

/* ---- Lesions and grades (slides 5-8) -------------------------------------- */
{id:'P6-007', type:'match', skill:'patho', prof:'Patel', tier:'new', topic:'p6-cls', sub:'stage', concept:'p6-lesion-match',
 tags:['match'], source:'both',
 stem:'Match each acne lesion to its description.', left:'Lesion', right:'Description',
 pairs:[
  {l:'Open comedone', r:'Blackhead; pore clogged, non-inflammatory', why:'Slide 5 (T@6156 11/10).'},
  {l:'Closed comedone', r:'Whitehead; under the skin, non-inflammatory', why:'Slide 5.'},
  {l:'Papule', r:'Raised and red; inflamed, no pus', why:'Slide 6.'},
  {l:'Pustule', r:'Raised and inflamed, with visible white pus', why:'Slide 6.'},
  {l:'Nodule or cyst', r:'Large, raised, inflamed, under the skin; worst stage', why:'Slide 6.'}],
 teach:'"Understand the difference between when it’s non-inflammatory as well as inflammatory" (T@7508 11/10).',
 cite:P6Q+' slides 5–6; T@6156–7508 11/10'},

{id:'P6-008', skill:'case', prof:'Patel', tier:'new', topic:'p6-cls', sub:'grade', concept:'p6-grade-mildly-clear',
 tags:['case'], source:'both',
 stem:'A 19-year-old man asks for an acne product. Physical assessment: no inflammation; rare non-inflammatory lesions, no more than one small closed comedone on his forehead. How would you best classify his acne?',
 options:[
  {t:'Mildly clear', correct:true, why:'Slide 7, Type 1 mildly clear: "Rare noninflammatory lesions with no more than 1 small lesion" (T@8120, T@13918 11/10).'},
  {t:'Mild', correct:false, why:'Mild is "some" non-inflammatory lesions (slide 7); he has one.'},
  {t:'Moderate', correct:false, why:'Moderate is many non-inflammatory and some inflammatory lesions (slide 8).'},
  {t:'Severe', correct:false, why:'Severe has nodules and scarring (slide 8).'}],
 teach:'One / some / many: mildly clear, mild, moderate (slides 7–8).',
 cite:P6Q+' slide 7; T@8120, T@13918 11/10'},

{id:'P6-009', skill:'case', prof:'Patel', tier:'new', topic:'p6-cls', sub:'grade', concept:'p6-grade-moderate',
 tags:['case'], source:'both',
 stem:'A 17-year-old boy has many open and closed comedones, some papules and pustules on his cheeks, and one nodule on his jaw. Mild scarring is noted. How would you best classify his acne?',
 options:[
  {t:'Mild', correct:false, why:'Mild has no nodules and only some non-inflammatory lesions (slide 7).'},
  {t:'Moderate', correct:true, why:'Slide 8, Type 3 moderate: many non-inflammatory, some inflammatory, no more than one nodule, mild scarring possible (T@8777–9470 11/10).'},
  {t:'Severe', correct:false, why:'Severe needs more than one nodule ("a few") and moderate to extensive scarring (slide 8).'},
  {t:'Mildly clear', correct:false, why:'Mildly clear is rare non-inflammatory lesions (slide 7).'}],
 teach:'One nodule still fits moderate; a few nodules is severe (slide 8).',
 cite:P6Q+' slide 8; T@8777–9470 11/10'},

{id:'P6-010', skill:'tell', prof:'Patel', tier:'new', topic:'p6-cls', sub:'grade', concept:'p6-severe-vs-moderate',
 tags:['two-facts'], source:'both',
 stem:'Which finding separates severe acne from moderate acne?',
 options:[
  {t:'Many non-inflammatory lesions are present on the face and back', correct:false, why:'Many non-inflammatory lesions fit both moderate and severe (slide 8).'},
  {t:'Papules and pustules are present along with comedones', correct:false, why:'Inflammatory papules and pustules appear from mild on (slide 7).'},
  {t:'More than one nodule, with moderate to extensive scarring', correct:true, why:'Slide 8: moderate allows no more than one nodule; severe has a few nodular lesions with moderate to extensive scarring (T@8777, T@69094 11/10).'},
  {t:'Minimal scarring with no nodules or cysts present', correct:false, why:'That describes mild acne (slide 7).'}],
 teach:'Count the nodules: none (mild), one (moderate), more than one (severe).',
 cite:P6Q+' slides 7–8; T@8777, T@69094 11/10'},

/* ---- Risk factors, drugs, complications, exclusions (slides 9-11, 17-18) - */
{id:'P6-011', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-risk', sub:'drug', concept:'p6-causative-drug',
 tags:['list'], source:'both',
 stem:'Which medication can cause or worsen acne?',
 options:[
  {t:'Ibuprofen', correct:false, why:'Ibuprofen (Motrin) is a case medication (slides 12, 46), not on her causative list (slide 10).'},
  {t:'Lithium', correct:true, why:'Slide 10, neuropsychotherapeutic drugs: TCAs, lithium, antiepileptics, aripiprazole, SSRIs (T@10586–11250 11/10).'},
  {t:'Loratadine', correct:false, why:'Loratadine is a Case 2 medication (slide 46), not on slide 10.'},
  {t:'Benzoyl peroxide', correct:false, why:'Benzoyl peroxide treats acne; it is the preferred initial OTC agent (slide 25).'}],
 teach:'Slide 10 also lists corticosteroids, androgens, progesterone contraceptives, vitamins B1, B6, B12, cyclosporine, sirolimus, isoniazid, rifampin, iodine, bromine, chlorine.',
 cite:P6Q+' slide 10; T@10586–11250 11/10'},

{id:'P6-012', skill:'case', prof:'Patel', tier:'new', topic:'p6-risk', sub:'excl', concept:'p6-self-care-exclusion',
 tags:['case','referral'], source:'both',
 stem:'Which patient is NOT an appropriate self-care candidate for acne?',
 options:[
  {t:'A 16-year-old girl with some comedones and no inflammation', correct:false, why:'Mild acne: a self-care candidate (slides 7, 18).'},
  {t:'A 20-year-old woman with rare comedones, no more than one small lesion', correct:false, why:'Mildly clear: a self-care candidate (slides 7, 18).'},
  {t:'A 17-year-old boy whose acne worsened after he started lithium', correct:true, why:'Slide 18 excludes acne from exacerbating factors or comedogenic drugs; lithium is on slide 10. "At that point, it would be a straight referral to dermatology" (T@19247–19941 11/10).'},
  {t:'A 15-year-old boy with some comedones and a few papules', correct:false, why:'A few papules still fit mild acne (slide 7); a self-care candidate.'}],
 teach:'Exclusions (slide 18): severe acne, possible rosacea, exacerbating factors, comedogenic drugs.',
 cite:P6Q+' slides 7, 10, 18; T@19247–19941 11/10'},

{id:'P6-013', skill:'patho', prof:'Patel', tier:'new', topic:'p6-risk', sub:'comp', concept:'p6-complication-scarring',
 tags:['recall'], source:'both',
 stem:'Which is the most common complication of acne vulgaris?',
 options:[
  {t:'Anxiety', correct:false, why:'Anxiety is on slide 11, but she named scarring the most common (T@11250 11/10).'},
  {t:'Depression', correct:false, why:'Depression is on slide 11, but not the most common complication.'},
  {t:'Scarring', correct:true, why:'Slide 11: anxiety, depression, scarring; "the scarring is the most common complication" (T@11250 11/10).'},
  {t:'Rosacea', correct:false, why:'Possible rosacea is a self-care exclusion (slide 18), not a complication.'}],
 teach:'Preventing long-term scarring is a treatment goal (slide 13).',
 cite:P6Q+' slides 11, 13; T@11250 11/10'},

{id:'P6-014', skill:'case', prof:'Patel', tier:'new', topic:'p6-risk', sub:'eval', concept:'p6-endocrine-testing',
 tags:['fine-detail'], source:'both',
 stem:'When is endocrine testing recommended in a patient with acne?',
 options:[
  {t:'When acne persists into adulthood beyond the teenage years', correct:false, why:'Slide 17: no routine endocrine testing; age alone is not the exception.'},
  {t:'When there is high suspicion of PCOS or another hormonal disorder', correct:true, why:'Slide 17: "No routine endocrine or microbiologic testing recommended; Exception: high suspicion of PCOS or other hormonal disorder" (T@18689 11/10).'},
  {t:'In each patient before a topical retinoid or an antibiotic is started', correct:false, why:'No routine testing is recommended (slide 17).'},
  {t:'When the patient has many comedones but no inflammatory lesions', correct:false, why:'Lesion counts grade severity (slides 7–8); they do not call for endocrine tests.'}],
 teach:'Testing is the exception, not the routine (slide 17).',
 cite:P6Q+' slide 17; T@18689 11/10'},

/* ---- Goals, cleansing, vehicles (slides 13, 19, 24) ----------------------- */
{id:'P6-015', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-np', sub:'clean', concept:'p6-makeup-cleanser',
 tags:['case','counseling'], source:'both',
 stem:'A 16-year-old with mild acne wears heavy covering makeup. Which cleansing advice is appropriate?',
 options:[
  {t:'Scrub with an abrasive cleanser several times a day to clear the pores', correct:false, why:'Slide 19: avoid abrasive products, devices and excessive cleansing.'},
  {t:'Remove makeup with an oil-based cleanser, then use a water-based cleanser', correct:true, why:'Slide 19: "Remove dirt and makeup with oil-based cleanser before using water-based cleanser" (T@20370, T@28136 11/10).'},
  {t:'Wash with a bar soap twice a day, then apply an oil-based moisturizer', correct:false, why:'Slide 24: bars are not usually recommended.'},
  {t:'Remove makeup with a water-based cleanser, since oil-based products worsen acne', correct:false, why:'The order is reversed: the oil-based cleanser removes the makeup first (slide 19).'}],
 teach:'Cleanse twice a day with a mild soap or non-soap cleanser; no abrasives (slide 19).',
 cite:P6Q+' slides 19, 24; T@20370, T@27444, T@28136 11/10'},

{id:'P6-016', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-np', sub:'form', concept:'p6-vehicle-oily',
 tags:['recall'], source:'both',
 stem:'A patient with oily skin asks which topical vehicles suit her best.',
 options:[
  {t:'Gels, solutions, and lotions', correct:true, why:'Slide 24: oily to normal skin, gels, solutions, lotions (T@26776–27444 11/10).'},
  {t:'Creams, ointments, and lotions', correct:false, why:'Creams suit normal to dry skin; ointments are not usually recommended (slide 24).'},
  {t:'Ointments and bars', correct:false, why:'Slide 24: ointments and bars are not usually recommended.'},
  {t:'Lotions and creams', correct:false, why:'Lotions and creams are for normal to dry skin (slide 24).'}],
 teach:'Oily: gels, solutions, lotions. Dry: lotions, creams. No ointments or bars (slide 24).',
 cite:P6Q+' slide 24; T@26776–27444 11/10'},

{id:'P6-017', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-np', sub:'goals', concept:'p6-goals', multi:true,
 tags:['list'], source:'both',
 stem:'Which are treatment goals for acne? Select all that apply.',
 options:[
  {t:'Reduce the number and severity of lesions', correct:true, why:'Slide 13.'},
  {t:'Slow progression and limit duration and recurrence', correct:true, why:'Slide 13.'},
  {t:'Prevent long-term scarring and hyperpigmentation', correct:true, why:'Slide 13 (T@14612–15643 11/10).'},
  {t:'Cure the acne before a set date', correct:false, why:'Slide 3: no cure. "Can we cure it? ... we’ll do our best" (T@11895 11/10).'},
  {t:'Sterilize the bacteria on the skin’s surface', correct:false, why:'Not a goal on slide 13.'}],
 teach:'Case 1 wanted to cure her acne before a dance; acne has no cure (slide 3).',
 cite:P6Q+' slides 3, 13; T@11895, T@14612–15643 11/10'},

/* ---- OTC topicals (slides 22-30) ------------------------------------------ */
{id:'P6-018', skill:'class', prof:'Patel', tier:'new', topic:'p6-otc', sub:'props', concept:'p6-bp-first-line-why',
 tags:['two-facts'], source:'both',
 stem:'Why is benzoyl peroxide the first-line OTC agent for acne?',
 options:[
  {t:'It is the most strongly keratolytic agent on the chart', correct:false, why:'Slide 23 rates keratolytic yes or no; it does not rank BP as most keratolytic.'},
  {t:'It is bactericidal, keratolytic, and comedolytic', correct:true, why:'Slide 23: BP is yes in all three rows. "Benzoyl peroxide targets all three ... So that means that benzoyl peroxide will be our first-line agent" (T@24800 11/10).'},
  {t:'It causes no photosensitivity', correct:false, why:'Slide 23 lists photosensitivity among BP adverse effects.'},
  {t:'It was added to the OTC category by the FDA in 2016', correct:false, why:'That was the topical retinoid (slide 27).'}],
 teach:'The chart (slide 23): BP yes, yes, yes; retinoid no bactericidal; resorcinol not comedolytic.',
 cite:P6Q+' slides 23, 25, 27; T@24800 11/10'},

{id:'P6-019', skill:'class', prof:'Patel', tier:'new', topic:'p6-otc', sub:'props', concept:'p6-not-bactericidal', multi:true,
 tags:['list'], source:'both',
 stem:'Which OTC acne ingredients are NOT bactericidal? Select all that apply.',
 options:[
  {t:'Topical retinoid', correct:true, why:'Slide 23: bactericidal "no".'},
  {t:'Alpha and beta hydroxy acids', correct:true, why:'Slide 23: bactericidal "no".'},
  {t:'Sulfur', correct:true, why:'Slide 23: bactericidal "no".'},
  {t:'Benzoyl peroxide', correct:false, why:'Slide 23: bactericidal "yes".'},
  {t:'Resorcinol', correct:false, why:'Slide 23: bactericidal "yes", and antifungal.'}],
 teach:'Only BP and resorcinol are bactericidal on slide 23 (T@24800 11/10).',
 cite:P6Q+' slide 23; T@24800 11/10'},

{id:'P6-020', skill:'class', prof:'Patel', tier:'new', topic:'p6-otc', sub:'props', concept:'p6-resorcinol-not-comedolytic',
 tags:['fine-detail'], source:'both',
 stem:'Which OTC ingredient is keratolytic but NOT comedolytic?',
 options:[
  {t:'Sulfur', correct:false, why:'Slide 23: sulfur is comedolytic.'},
  {t:'Adapalene', correct:false, why:'Slide 23: the topical retinoid is comedolytic.'},
  {t:'Resorcinol', correct:true, why:'Slide 23: resorcinol comedolytic "No". "Resorcinol, we will not be targeting the comedones" (T@24800 11/10).'},
  {t:'Salicylic acid', correct:false, why:'Slide 23: beta hydroxy acids are comedolytic.'}],
 teach:'Resorcinol: bactericidal and keratolytic, not comedolytic (slide 23).',
 cite:P6Q+' slide 23; T@24800 11/10'},

{id:'P6-021', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-otc', sub:'bp', concept:'p6-bp-bleach',
 tags:['case','counseling'], source:'both',
 stem:'A 15-year-old starts a benzoyl peroxide 5% wash. Which counseling point applies to this ingredient?',
 options:[
  {t:'It can bleach hair and clothing', correct:true, why:'Slide 23, BP adverse effects: bleaches hair and clothing, drying, photosensitivity, contact allergy (T@25492 11/10).'},
  {t:'It is malodorous and changes skin color', correct:false, why:'Those are sulfur’s drawbacks (slide 23).'},
  {t:'It lowers sensitivity to the sun', correct:false, why:'BP causes photosensitivity (slide 23).'},
  {t:'It is applied three to four times daily', correct:false, why:'Slide 23: BP 1–2 times daily.'}],
 teach:'BP: 2.5–10% OTC; 1–2 times daily; drying, photosensitivity, bleaching (slides 23, 26).',
 cite:P6Q+' slides 23, 26; T@25492 11/10'},

{id:'P6-022', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-otc', sub:'bp', concept:'p6-bp-irritation',
 tags:['case','two-facts'], source:'both',
 stem:'Four days after starting benzoyl peroxide 5% gel, a patient has mild dryness and irritation. What is appropriate?',
 options:[
  {t:'Switch to 10% so the lesions clear faster and the irritation passes', correct:false, why:'Slide 26: irritation is more likely in higher strengths.'},
  {t:'Stop for good, since irritation means an allergy to benzoyl peroxide', correct:false, why:'Irritation is the most common effect and stabilizes in 1–2 weeks (slide 26); it is not an allergy.'},
  {t:'Irritation usually settles in 1–2 weeks; if it persists, use it less often', correct:true, why:'Slide 26: "Side effects will stabilize within 1-2 weeks"; slide 42: if stinging or irritation develop, temporarily discontinue or decrease frequency (T@61698 11/10).'},
  {t:'Add a salicylic acid scrub twice daily to lift off the dry and flaking skin', correct:false, why:'Slide 19: avoid abrasive products.'}],
 teach:'Most common BP effect: skin irritation, more likely in higher strengths (slide 26).',
 cite:P6Q+' slides 19, 26, 42; T@61698 11/10'},

{id:'P6-023', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-otc', sub:'ret', concept:'p6-adapalene-timing',
 tags:['case','counseling'], source:'both',
 stem:'A 15-year-old starts OTC adapalene (Differin) gel 0.1%. She already uses a benzoyl peroxide wash and a vitamin C serum. Which plan is appropriate?',
 options:[
  {t:'Apply adapalene and benzoyl peroxide together each morning, then sunscreen', correct:false, why:'Slide 27: separate from BP (am vs pm); the retinoid goes on at night.'},
  {t:'Apply adapalene in the morning under sunscreen and benzoyl peroxide at night', correct:false, why:'Reversed: the retinoid is applied at night (slide 27).'},
  {t:'Adapalene at night, benzoyl peroxide in the morning, vitamin C apart', correct:true, why:'Slide 27: "Apply at night"; "Separate use from Benzoyl peroxide products (am vs. pm)"; do not use with sulfur, resorcinol, salicylic acid or vitamin C products (T@30492–31851 11/10).'},
  {t:'Apply vitamin C right before adapalene each night to improve its absorption', correct:false, why:'"You may, but separate it ... the efficacy of the vitamin C will decrease" (T@31851 11/10).'}],
 teach:'The retinoid needs a moisturizer and sunscreen (slide 27).',
 cite:P6Q+' slide 27; T@30492–31851 11/10'},

{id:'P6-024', skill:'case', prof:'Patel', tier:'new', topic:'p6-otc', sub:'ret', concept:'p6-otc-retinoid-age',
 tags:['case'], source:'both',
 stem:'A mother asks about Differin gel 0.1% for her 10-year-old son’s comedones. What is appropriate?',
 options:[
  {t:'Appropriate; apply a thin layer each morning after washing his face', correct:false, why:'He is under the FDA age limit, and the retinoid is applied at night (slide 27).'},
  {t:'Not recommended; the FDA limits OTC retinoids to persons over 12', correct:true, why:'Slide 27: "FDA limits to persons over 12 years of age"; "anything younger than that, we’re not gonna be recommending a retinoid" (T@31182 11/10).'},
  {t:'Appropriate if it is combined with a topical antibiotic to reduce resistance', correct:false, why:'Combining does not lift the age limit; BP, not the retinoid, reduces resistance (slide 26).'},
  {t:'Not recommended; OTC retinoids are limited to adults 18 years and older', correct:false, why:'The limit is over 12 years, not 18 (slide 27).'}],
 teach:'OTC adapalene 0.1%, added to OTC in 2016; over 12 years (slide 27).',
 cite:P6Q+' slide 27; T@31182 11/10'},

{id:'P6-025', skill:'tell', prof:'Patel', tier:'new', topic:'p6-otc', sub:'bha', concept:'p6-salicylic-vs-bp',
 tags:['two-facts'], source:'both',
 stem:'A parent says salicylic acid is the best acne ingredient. Which reply is accurate?',
 options:[
  {t:'Salicylic acid is bactericidal, while benzoyl peroxide is not bactericidal', correct:false, why:'Slide 23: hydroxy acids are not bactericidal; BP is.'},
  {t:'Its efficacy data are limited; benzoyl peroxide proved more effective', correct:true, why:'Slide 29: "Limited efficacy data"; "salicylic acid was actually first line ... benzoyl peroxide ... much more effective" (T@34403 11/10).'},
  {t:'Salicylic acid is the first-line agent in the AAD acne guideline', correct:false, why:'BP is the preferred initial OTC agent (slide 25).'},
  {t:'Salicylic acid does not increase photosensitivity, so no sunscreen is needed', correct:false, why:'Slide 29 lists photosensitivity.'}],
 teach:'Salicylic acid was once first line; BP replaced it (T@34403 11/10).',
 cite:P6Q+' slides 23, 25, 29; T@34403 11/10'},

{id:'P6-026', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-otc', sub:'bha', concept:'p6-salicylic-use',
 tags:['fine-detail'], source:'slide',
 stem:'How is OTC salicylic acid used for acne, and over what period is it most effective?',
 options:[
  {t:'Once or twice daily as a cleanser or gel; maximum effect over 4–6 weeks', correct:true, why:'Slide 29: "Apply once or twice daily as a cleanser or a topical gel"; "Maximum effectiveness and duration of use for 4-6 week".'},
  {t:'Twice daily as a gel over the whole face; maximum effect over 8–12 weeks', correct:false, why:'Slide 29: gels go on the affected area only; 4–6 weeks.'},
  {t:'As a chemical peel; wait 2–4 weeks between peels', correct:false, why:'Peels 2–4 weeks apart are the alpha hydroxy acids (slide 28).'},
  {t:'At night, separated from benzoyl peroxide; maximum effect within 1 week', correct:false, why:'Night use separated from BP is the retinoid (slide 27).'}],
 teach:'Salicylic acid gel: affected area only (slide 29).',
 cite:P6Q+' slides 27–29'},

{id:'P6-027', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-otc', sub:'aha', concept:'p6-aha-use',
 tags:['fine-detail'], source:'both',
 stem:'A patient wants to try a glycolic acid (AHA) product. What is appropriate?',
 options:[
  {t:'Apply it to the whole face first to judge how the skin reacts to it', correct:false, why:'Slide 28: start with a trial form on a small area.'},
  {t:'Trial it on a small area; wait 2–4 weeks between peels; use sunscreen', correct:true, why:'Slide 28: glycolic, lactic, citric acid; trial form; "Wait 2-4 weeks between peels"; sunscreen (T@33088–33733 11/10).'},
  {t:'Use it on inflammatory lesions; wait 2–4 weeks between peels', correct:false, why:'Slide 28: AHAs exfoliate non-inflammatory lesions.'},
  {t:'Use it twice daily and repeat the peel each week until the skin clears', correct:false, why:'Peels are 2–4 weeks apart (slide 28).'}],
 teach:'AHAs: glycolic, lactic, citric acid; exfoliate non-inflammatory lesions (slide 28).',
 cite:P6Q+' slide 28; T@33088–33733 11/10'},

{id:'P6-028', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-otc', sub:'comp', concept:'p6-tea-tree',
 tags:['counseling'], source:'both',
 stem:'A patient with sensitive skin asks about tea tree oil. What is appropriate?',
 options:[
  {t:'Apply the undiluted oil directly to each lesion twice a day for best effect', correct:false, why:'Slide 30: "May be irritating if applied directly".'},
  {t:'Add it to a moisturizing lotion or gel; applied directly it may irritate', correct:true, why:'Slide 30: "Add to a moisturizing lotion or gel vehicle" (T@35053–35664 11/10).'},
  {t:'It can replace benzoyl peroxide as the first-line agent for mild acne', correct:false, why:'BP or a topical retinoid is mild first line (slide 40); essential oils appear only for mildly clear acne.'},
  {t:'Mix it into an ointment base, the vehicle best suited to acne', correct:false, why:'Ointments are not usually recommended (slide 24).'}],
 teach:'Complementary agents are mixed into a lotion or gel vehicle (slide 30).',
 cite:P6Q+' slides 24, 30, 40; T@35053–35664 11/10'},

/* ---- Prescription topicals (slides 25, 31) -------------------------------- */
{id:'P6-029', skill:'case', prof:'Patel', tier:'new', topic:'p6-rxt', sub:'abx', concept:'p6-topical-abx-mono',
 tags:['case','two-facts'], source:'both',
 stem:'A 17-year-old with moderate acne was prescribed clindamycin 1% gel alone. What should the pharmacist recommend?',
 options:[
  {t:'Continue it alone; topical antibiotics work as monotherapy in moderate acne', correct:false, why:'Slide 25: topical antibiotics are not recommended as monotherapy.'},
  {t:'Switch to erythromycin 2% gel alone', correct:false, why:'Still a topical antibiotic alone (slide 31).'},
  {t:'Add benzoyl peroxide to the clindamycin to reduce resistance', correct:true, why:'Slide 31: "Do NOT use as monotherapy. Should add to Benzoyl peroxide to reduce resistance"; slide 26: BP prevents P. acnes resistance (T@28783, T@36940 11/10).'},
  {t:'Add a second topical antibiotic', correct:false, why:'A second antibiotic does not prevent resistance; BP does (slide 26).'}],
 teach:'She said it twice: topical antibiotics go with BP (T@28783, T@36940 11/10).',
 cite:P6Q+' slides 25–26, 31; T@28783, T@36940 11/10'},

{id:'P6-030', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-rxt', sub:'abx', concept:'p6-topical-abx-wait',
 tags:['fine-detail','numbers'], source:'slide',
 stem:'After applying a topical antibiotic for acne, how long should a patient wait to shave or apply cosmetics?',
 options:[
  {t:'Until the skin is dry', correct:false, why:'"Wait until dry to apply cosmetics" is azelaic acid (slide 31).'},
  {t:'30 minutes', correct:true, why:'Slide 31, topical antibiotics: "Wait 30 minutes to shave or apply cosmetics".'},
  {t:'2 hours', correct:false, why:'Not a figure for topical antibiotics on slide 31.'},
  {t:'Until the next morning', correct:false, why:'Not on slide 31.'}],
 teach:'Topical antibiotics on slide 31: clindamycin 1%, erythromycin 2%, minocycline foam 4%.',
 cite:P6Q+' slide 31'},

{id:'P6-031', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-rxt', sub:'dapsone', concept:'p6-dapsone-g6pd',
 tags:['fine-detail'], source:'slide',
 stem:'A patient is prescribed dapsone (Aczone) gel. Which concern and monitoring apply?',
 options:[
  {t:'G6PD concern; monitor CBC and reticulocyte counts', correct:true, why:'Slide 31, dapsone 5–7.5%: "G6PD concern. Monitor CBC and reticulocyte counts".'},
  {t:'Teratogen; monitor triglycerides, cholesterol, and LFTs', correct:false, why:'Those are isotretinoin’s (slide 37).'},
  {t:'Hyperkalemia; monitor potassium', correct:false, why:'Hyperkalemia is an anti-androgen effect (spironolactone, slide 34).'},
  {t:'Tooth discoloration; avoid under 12 years', correct:false, why:'That is the tetracyclines (slide 33).'}],
 teach:'Dapsone: second line for mild acne; low efficacy (slide 40; T@55262 11/10).',
 cite:P6Q+' slides 31, 33–34, 37'},

{id:'P6-032', skill:'class', prof:'Patel', tier:'new', topic:'p6-rxt', sub:'aza', concept:'p6-azelaic-use',
 tags:['recall'], source:'both',
 stem:'For which use is azelaic acid most useful in acne?',
 options:[
  {t:'First-line monotherapy for open and closed comedones', correct:false, why:'BP or a topical retinoid is first line (slide 40).'},
  {t:'Adjunct for post-inflammatory dyspigmentation', correct:true, why:'Slide 25: "Azelaic acid is useful as adjunctive treatment of post inflammatory dyspigmentation"; "more beneficial with the pigmentation of the skin" (T@32497 11/10).'},
  {t:'Nodular acne in place of isotretinoin', correct:false, why:'Nodular refractory acne is isotretinoin’s place (slide 37).'},
  {t:'Monotherapy instead of benzoyl peroxide', correct:false, why:'Slide 25 calls it adjunctive.'}],
 teach:'Azelaic acid: Azelex 20%, Finacea 15% (slide 31).',
 cite:P6Q+' slides 25, 31; T@32497 11/10'},

/* ---- Oral antibiotics (slides 32-33) -------------------------------------- */
{id:'P6-034', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6-tetracycline-age',
 tags:['case','two-facts'], source:'both',
 stem:'An 11-year-old boy has moderate acne despite topical combination therapy. The prescriber asks about doxycycline. What is appropriate?',
 options:[
  {t:'Appropriate at 50–100 mg twice daily, dosed by weight for his age', correct:false, why:'He is under the tetracycline age limit (slide 33).'},
  {t:'Not appropriate; tetracyclines are for patients over 12 (tooth discoloration)', correct:true, why:'Slide 33: minocycline and doxycycline, "> 12 years old"; "may cause permanent discoloration to teeth if used < 12 years old" (T@39396–39928 11/10).'},
  {t:'Appropriate if he takes it with a full glass of water and sunscreen', correct:false, why:'Counseling does not remove the age limit (slide 33).'},
  {t:'Use minocycline instead, since it is not a tetracycline and does not stain teeth', correct:false, why:'Minocycline is a tetracycline (slide 33).'}],
 teach:'"Notice that there is no 12 years and equal to ... So greater than 12" (T@39928 11/10).',
 cite:P6Q+' slide 33; T@39396–39928 11/10'},

{id:'P6-035', skill:'dose', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6-doxy-dose',
 tags:['numbers'], source:'both',
 stem:'What is the usual adult doxycycline or minocycline dose for acne?',
 options:[
  {t:'50–100 mg twice daily, or 100 mg once daily', correct:true, why:'Slide 33: "50-100 mg BID or 100 mg Daily Capsule or Tablet" (T@39396 11/10).'},
  {t:'25–50 mg/day in 1 to 2 divided doses', correct:false, why:'That is the spironolactone/flutamide range (slide 34).'},
  {t:'100 mg three times daily for 2 weeks, then stop', correct:false, why:'Not on slide 33; oral antibiotics are re-evaluated at 3–4 months.'},
  {t:'0.5–1 mg/kg/day in 2 divided doses', correct:false, why:'That is isotretinoin (slide 37).'}],
 teach:'Doxycycline and minocycline are the most commonly prescribed oral antibiotics (slide 32).',
 cite:P6Q+' slides 32–34, 37; T@39396 11/10'},

{id:'P6-036', skill:'dose', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6-sarecycline-dose',
 tags:['calculation'], source:'slide',
 stem:'A 17-year-old weighing 70 kg is prescribed sarecycline for non-nodular moderate to severe acne. Which dose is appropriate?',
 options:[
  {t:'60 mg daily', correct:false, why:'60 mg is for 33–54 kg (slide 33).'},
  {t:'100 mg daily', correct:true, why:'Slide 33: sarecycline 60 mg (33–54 kg), 100 mg (55–84 kg), 150 mg (85–136 kg) daily; 70 kg falls in 55–84 kg.'},
  {t:'150 mg daily', correct:false, why:'150 mg is for 85–136 kg (slide 33).'},
  {t:'50–100 mg twice daily', correct:false, why:'That is doxycycline or minocycline (slide 33).'}],
 teach:'"The dosing is listed there for you" (T@39928 11/10); she did not stress sarecycline.',
 cite:P6Q+' slide 33; T@39928 11/10'},

{id:'P6-037', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6-tmp-smx',
 tags:['two-facts'], source:'both',
 stem:'When is trimethoprim/sulfamethoxazole used for acne, and in whom is it avoided?',
 options:[
  {t:'First line for moderate acne; avoided in patients with a macrolide allergy', correct:false, why:'TMP/SMX is limited to patients allergic to macrolides and tetracyclines (slide 33).'},
  {t:'Limited to macrolide and tetracycline allergy; avoided in sulfur allergy', correct:true, why:'Slide 33: "Limit to patients with allergies to macrolides and tetracyclines"; "Do not use in patients allergic to sulfur" (T@40623 11/10).'},
  {t:'Preferred over doxycycline in pregnancy; avoided in children under 12', correct:false, why:'Not on slide 33; the under-12 limit is the tetracyclines.'},
  {t:'Used after a tetracycline fails; safe in a sulfur allergy', correct:false, why:'It is avoided in sulfur allergy (slide 33).'}],
 teach:'TMP/SMX is a back-up for allergy, not for failure.',
 cite:P6Q+' slide 33; T@40623 11/10'},

{id:'P6-038', skill:'class', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6-oral-abx-facts', multi:true,
 tags:['list'], source:'both',
 stem:'Which statements about oral antibiotics for acne are accurate? Select all that apply.',
 options:[
  {t:'Doxycycline and minocycline are the most commonly prescribed', correct:true, why:'Slide 32 (T@38197 11/10).'},
  {t:'Photosensitivity is common with the tetracyclines', correct:true, why:'Slide 33.'},
  {t:'Use for the shortest possible duration; re-evaluate at 3–4 months', correct:true, why:'Slide 33 (T@41321 11/10).'},
  {t:'Erythromycin and azithromycin are preferred because of low resistance', correct:false, why:'Slide 33: macrolides are less commonly used due to resistance.'},
  {t:'An oral antibiotic is given without topical agents', correct:false, why:'Slide 40: oral antibiotic plus topical combination; "Oral antibiotic is in combination with the topicals" (T@57819 11/10).'}],
 teach:'Oral antibiotics are always paired with topical therapy (slide 40).',
 cite:P6Q+' slides 32–33, 40; T@38197–41321, T@57819 11/10'},

/* ---- Hormonal agents (slides 34-36) --------------------------------------- */
{id:'P6-039', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'coc', concept:'p6-coc-criteria', multi:true,
 tags:['list'], source:'both',
 stem:'Which criteria apply before a combined oral contraceptive is used for acne? Select all that apply.',
 options:[
  {t:'Female patient who also wants contraception', correct:true, why:'Slide 34.'},
  {t:'Older than 14 years, or more than 2 years since menarche', correct:true, why:'Slide 34 (T@41984 11/10).'},
  {t:'Non-smoker younger than 35 years', correct:true, why:'Slide 34 (T@45949 11/10).'},
  {t:'At least 12 years old, whatever the time since menarche', correct:false, why:'The limit is over 14, or over 2 years since menarche (slide 34).'},
  {t:'A past DVT is acceptable if treated', correct:false, why:'COCs raise VTE risk (slide 36); a DVT history excluded the poll patient (T@45257 11/10).'}],
 teach:'Her poll asked the same criteria through four patients (P6-003).',
 cite:P6Q+' slides 34, 36; T@41984, T@45257, T@45949 11/10'},

{id:'P6-040', skill:'class', prof:'Patel', tier:'new', topic:'p6-oral', sub:'coc', concept:'p6-coc-fda-three', multi:true,
 tags:['list'], source:'both',
 stem:'Which are FDA-approved combined oral contraceptives for acne? Select all that apply.',
 options:[
  {t:'Ethinyl estradiol/norgestimate', correct:true, why:'Slide 34; one of her three (T@42635 11/10).'},
  {t:'Ethinyl estradiol/norethindrone acetate', correct:true, why:'Slide 34; one of her three.'},
  {t:'Ethinyl estradiol/drospirenone', correct:true, why:'Slide 34; one of her three: "please go based on my list ... these are the three that are FDA approved" (T@44650 11/10).'},
  {t:'Norethindrone alone (progestin-only pill)', correct:false, why:'Progestin-only: progesterone contraceptives are on the causative list (slide 10).'},
  {t:'Ethinyl estradiol/levonorgestrel', correct:false, why:'Not among the three she named (T@42635, T@44650 11/10).'}],
 teach:'Her three combinations; the fourth line on the student slide is not used (T@44650 11/10).',
 cite:P6Q+' slides 10, 34; T@42635, T@44650 11/10'},

{id:'P6-041', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-oral', sub:'coc', concept:'p6-coc-risk',
 tags:['recall'], source:'both',
 stem:'Which is an increased risk of combined oral contraceptives?',
 options:[
  {t:'Ovarian and endometrial cancer', correct:false, why:'Slide 35: decreased ovarian and endometrial cancers is a benefit.'},
  {t:'Colorectal cancer', correct:false, why:'Slide 35: decreased colorectal cancer is a benefit.'},
  {t:'Venous thrombotic events', correct:true, why:'Slide 36: VTE, MI, breast or cervical cancer, osteoporosis or decreased bone mass (T@43963–45257 11/10).'},
  {t:'Hyperandrogen symptoms', correct:false, why:'Slide 35: decreased hyperandrogen symptoms is a benefit.'}],
 teach:'Benefits (slide 35) and risks (slide 36) are paired lists.',
 cite:P6Q+' slides 35–36; T@43963–45257 11/10'},

{id:'P6-042', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-oral', sub:'spiro', concept:'p6-antiandrogen-adr',
 tags:['recall'], source:'both',
 stem:'A patient asks about the oral anti-androgenic agents for acne (spironolactone, flutamide). Which adverse effects apply to these agents?',
 options:[
  {t:'Gynecomastia and hyperkalemia', correct:true, why:'Slide 34: "Other oral anti-androgenic agents Spironolactone and Flutamide ... ADR: Gynecomastia, Hyperkalemia" (T@43324–43963 11/10: "What is hyperkalemia? High potassium").'},
  {t:'Photosensitivity and tooth discoloration', correct:false, why:'Those are the tetracyclines (slide 33).'},
  {t:'Hepatotoxicity and sulfonamide reaction', correct:false, why:'Not the ADR line of slide 34.'},
  {t:'Bleaching of hair and clothing', correct:false, why:'That is benzoyl peroxide (slide 23).'}],
 teach:'Spironolactone is a severe-acne second-line option for females only (slide 40).',
 cite:P6Q+' slides 23, 33–34, 40; T@43324–43963 11/10'},

/* ---- Isotretinoin and iPledge (slides 37-38) ------------------------------ */
{id:'P6-043', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'p6-ipledge-tests',
 tags:['two-facts','numbers'], source:'both',
 stem:'A 19-year-old woman of reproductive potential starts isotretinoin. How many negative pregnancy tests does iPledge require before she starts, and how often during treatment?',
 options:[
  {t:'One before starting; then monthly', correct:false, why:'Slide 38: tests initially × 2.'},
  {t:'Two before starting; then monthly', correct:true, why:'Slide 38: "Pregnancy test required initially x 2 and monthly during treatment". "I said it twice because hint, it’s a question" (T@49632 11/10).'},
  {t:'Two before starting; then every 3 months', correct:false, why:'Tests continue monthly (slide 38).'},
  {t:'One before starting; then at the end of treatment', correct:false, why:'Two before, then monthly (slide 38).'}],
 teach:'No set interval was given between the two initial tests (T@51383 11/10).',
 cite:P6Q+' slide 38; T@49632, T@51383 11/10'},

{id:'P6-044', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'p6-ipledge-window',
 tags:['two-facts','numbers'], source:'both',
 stem:'Under iPledge, how long is the window to fill an isotretinoin prescription for a female patient of reproductive potential, and for a male patient?',
 options:[
  {t:'7 days for her; 30 days for him', correct:true, why:'Slide 38: female of reproductive potential, 7-day window; males and females who cannot get pregnant, 30-day window (T@50235–50755 11/10).'},
  {t:'30 days for her; 7 days for him', correct:false, why:'Reversed (slide 38).'},
  {t:'7 days for both', correct:false, why:'The 7-day window is only for females of reproductive potential (slide 38).'},
  {t:'30 days for both', correct:false, why:'The 30-day window is for males and females who cannot get pregnant (slide 38).'}],
 teach:'Past the 7-day window "that prescription is voided" (T@50235 11/10).',
 cite:P6Q+' slide 38; T@50235–50755 11/10'},

{id:'P6-045', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'p6-ipledge-male', multi:true,
 tags:['case','list'], source:'both',
 stem:'A 19-year-old man starts isotretinoin. Which iPledge requirements apply to him? Select all that apply.',
 options:[
  {t:'Register with the iPledge program', correct:true, why:'Slide 38: all patients register.'},
  {t:'Do not donate blood during treatment and for one month after', correct:true, why:'Slide 38: all patients.'},
  {t:'Swallow the capsule whole', correct:true, why:'Slide 38: all patients.'},
  {t:'A 7-day window to fill each prescription', correct:false, why:'He has a 30-day window (slide 38).'},
  {t:'Two forms of birth control 1 month before, during, and 1 month after', correct:false, why:'That applies to females of reproductive potential (slide 38).'}],
 teach:'Slide 38 has three groups: all patients; females of reproductive potential; males and females who cannot get pregnant.',
 cite:P6Q+' slide 38; T@49632–50755 11/10'},

{id:'P6-046', skill:'pk', prof:'Patel', tier:'new', topic:'p6-iso', sub:'inter', concept:'p6-iso-tetracycline',
 tags:['case','interaction'], source:'both',
 stem:'A 16-year-old girl taking doxycycline 50 mg daily, loratadine 10 mg daily, Motrin PRN and OTC benzoyl peroxide is starting isotretinoin. Which of her medicines is not to be used with it?',
 options:[
  {t:'Doxycycline', correct:true, why:'Slide 38: "Do not use with vitamin A supplements, tetracyclines, steroids, progestin-only ..." (T@50755 11/10). Doxycycline is a tetracycline (slide 33).'},
  {t:'Loratadine', correct:false, why:'Not on the slide 38 list.'},
  {t:'Motrin (ibuprofen)', correct:false, why:'Not on the slide 38 list.'},
  {t:'Benzoyl peroxide', correct:false, why:'Not on the slide 38 list.'}],
 teach:'Her Case 2 medication list (slide 46) meets the slide 38 list.',
 cite:P6Q+' slides 33, 38, 46; T@50755 11/10'},

{id:'P6-047', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-iso', sub:'mon', concept:'p6-iso-labs',
 tags:['recall'], source:'both',
 stem:'Which laboratory monitoring applies to isotretinoin?',
 options:[
  {t:'Serum potassium and renal function each month', correct:false, why:'Potassium goes with the anti-androgens (hyperkalemia, slide 34).'},
  {t:'CBC and reticulocyte counts at each fill', correct:false, why:'That is dapsone (slide 31).'},
  {t:'Triglycerides, cholesterol, LFTs, and CBC', correct:true, why:'Slide 37: "Lab monitoring: Triglycerides, Cholesterol, LFTs, and CBC" (T@47635 11/10).'},
  {t:'G6PD level before each monthly fill', correct:false, why:'G6PD is the dapsone concern (slide 31).'}],
 teach:'Isotretinoin labs: lipids, LFTs, CBC (slide 37).',
 cite:P6Q+' slides 31, 34, 37; T@47635 11/10'},

{id:'P6-048', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'rx', concept:'p6-iso-supply',
 tags:['two-facts'], source:'both',
 stem:'Which dispensing rule and course length fit isotretinoin?',
 options:[
  {t:'90-day supply with no refills; course usually 8 weeks', correct:false, why:'Slide 37: 30-day supply; 15–20 weeks.'},
  {t:'30-day supply with no refills; course usually 15–20 weeks', correct:true, why:'Slide 37: "15-20 weeks treatment duration"; "30-day supply only with no refills". "Why are there no refills? ... double-check that the patient has no risk of being pregnant" (T@48318 11/10).'},
  {t:'30-day supply with 2 refills; course usually 15–20 weeks', correct:false, why:'No refills (slide 37).'},
  {t:'30-day supply with no refills; re-evaluate the drug at 3–4 months', correct:false, why:'Re-evaluation at 3–4 months is the oral antibiotics (slide 33).'}],
 teach:'No refills, so pregnancy status is checked before each fill (T@48318 11/10).',
 cite:P6Q+' slides 33, 37; T@48318 11/10'},

{id:'P6-049', skill:'dose', prof:'Patel', tier:'new', topic:'p6-iso', sub:'dose', concept:'p6-iso-dose-lb',
 tags:['calculation'], source:'both',
 stem:'A 16-year-old girl weighing 132 lb starts isotretinoin at the low end of the dose range. Which regimen is appropriate?',
 options:[
  {t:'15 mg twice daily', correct:true, why:'132 lb ÷ 2.2 = 60 kg; 0.5 mg/kg/day × 60 kg = 30 mg/day in 2 divided doses = 15 mg twice daily (slide 37; "Oftentimes, we’re gonna start with 0.5", T@48318–48979 11/10).'},
  {t:'30 mg twice daily', correct:false, why:'1 mg/kg/day (the top of the range) split twice daily; the low end is 0.5 mg/kg/day.'},
  {t:'33 mg twice daily', correct:false, why:'Pounds were not converted: 0.5 × 132 = 66 mg/day.'},
  {t:'30 mg once daily', correct:false, why:'The daily total is right, but slide 37 gives 2 divided doses.'}],
 teach:'Isotretinoin 0.5–1 mg/kg/day in 2 divided doses (slide 37). Pounds to kilograms: divide by 2.2 (Lecture 5).',
 cite:P6Q+' slide 37; T@48318–48979 11/10'},

{id:'P6-050', skill:'dose', prof:'Patel', tier:'new', topic:'p6-iso', sub:'dose', concept:'p6-iso-dose-max',
 tags:['calculation'], source:'slide',
 stem:'A man weighing 80 kg is titrated to the top of the isotretinoin dose range. Which regimen fits?',
 options:[
  {t:'80 mg twice daily', correct:false, why:'80 mg is the daily total; twice daily it is 40 mg each dose.'},
  {t:'40 mg twice daily', correct:true, why:'1 mg/kg/day × 80 kg = 80 mg/day in 2 divided doses = 40 mg twice daily (slide 37).'},
  {t:'20 mg twice daily', correct:false, why:'That is the low end, 0.5 mg/kg/day.'},
  {t:'40 mg once daily', correct:false, why:'Half the daily total, given once.'}],
 teach:'0.5–1 mg/kg/day, 2 divided doses (slide 37).',
 cite:P6Q+' slide 37'},

{id:'P6-051', skill:'adverse', prof:'Patel', tier:'new', topic:'p6-iso', sub:'couns', concept:'p6-iso-adr', multi:true,
 tags:['case','list'], source:'both',
 stem:'Which adverse effects should a patient starting isotretinoin be counseled on? Select all that apply.',
 options:[
  {t:'Dry nose, eyes, and mouth; inflammation of the lips', correct:true, why:'Slide 37 adverse effects.'},
  {t:'Mood disorders, depression, suicidal ideation', correct:true, why:'Slide 37.'},
  {t:'Birth defects', correct:true, why:'Slide 37: boxed warning (T@47635 11/10).'},
  {t:'Bleaching of hair and clothing', correct:false, why:'That is benzoyl peroxide (slide 23).'},
  {t:'Hyperkalemia', correct:false, why:'That is spironolactone or flutamide (slide 34).'}],
 teach:'"Biggest thing here, black box warning of birth defects" (T@47635 11/10).',
 cite:P6Q+' slides 23, 34, 37; T@47076–47635 11/10'},

/* ---- Treatment algorithm (slides 20, 40) ---------------------------------- */
{id:'P6-052', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mild', concept:'p6-mild-after-bp',
 tags:['case'], source:'both',
 stem:'A 16-year-old with mild acne (some comedones, no inflammatory lesions) has used benzoyl peroxide twice daily for 2 months with no benefit. Which next step is appropriate?',
 options:[
  {t:'Switch to a topical retinoid as single topical therapy', correct:true, why:'Slide 40, mild first line: topical single therapy, BP or topical retinoid. "If they’ve tried benzoyl peroxide, they haven’t seen benefit, that’s when a topical retinoid may be utilized" (T@54022 11/10).'},
  {t:'Add oral doxycycline 100 mg daily to the benzoyl peroxide', correct:false, why:'Oral antibiotics enter at moderate acne (slide 40).'},
  {t:'Start oral isotretinoin', correct:false, why:'Isotretinoin is for severe refractory acne, absolute last line (slide 37; T@46636 11/10).'},
  {t:'Use topical clindamycin gel as single topical therapy', correct:false, why:'Topical antibiotics are not used as monotherapy (slide 25).'}],
 teach:'One agent, then the other single agent, then a combination: "It’s a step by step process" (T@54687 11/10).',
 cite:P6Q+' slides 25, 37, 40; T@54022, T@54687 11/10'},

{id:'P6-053', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mild', concept:'p6-mild-combination',
 tags:['case'], source:'both', dupOf:'P6-052',
 stem:'A 16-year-old with mild acne (some comedones, no inflammatory lesions) had no benefit from benzoyl peroxide alone and then from a topical retinoid alone, each used for the full duration. Which step comes next?',
 options:[
  {t:'Oral antibiotic plus benzoyl peroxide and a topical retinoid', correct:false, why:'Oral antibiotics belong to the moderate and severe columns (slide 40).'},
  {t:'A topical combination, such as BP plus a topical retinoid', correct:true, why:'Slide 40, mild first line: "or Top Combination Tx: [BP + Top Abx] or (BP + Top Retinoid) or (BP + Top Retinoid + Top Abx)" (T@54687 11/10).'},
  {t:'Oral spironolactone added to benzoyl peroxide', correct:false, why:'Spironolactone is a severe-acne second-line option for females (slide 40).'},
  {t:'Oral isotretinoin for 15–20 weeks', correct:false, why:'Isotretinoin is last line (T@59132 11/10).'}],
 teach:'"We’re never going to just jump to the combination of three ... It’s a step by step process" (T@54687 11/10).',
 cite:P6Q+' slide 40; T@54687, T@59132 11/10'},

{id:'P6-054', skill:'class', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mild', concept:'p6-dapsone-place',
 tags:['recall'], source:'both',
 stem:'Where does topical dapsone sit in the acne treatment algorithm?',
 options:[
  {t:'First line for moderate acne, combined with benzoyl peroxide', correct:false, why:'Moderate first line is topical combinations (slide 40).'},
  {t:'Second line for mild acne, after the other topical options', correct:true, why:'Slide 40, mild second line: "May add (if not on) Topical Retinoid or BP or Consider alternate retinoid or Consider topical Dapsone"; "absolute last line ... the efficacy is very low" (T@55262–55842 11/10).'},
  {t:'First-line single topical therapy for mild acne', correct:false, why:'Mild first line is BP or a topical retinoid (slide 40).'},
  {t:'Added to oral isotretinoin in severe acne', correct:false, why:'Not on slide 40.'}],
 teach:'Dapsone: low efficacy, G6PD concern (slides 31, 40).',
 cite:P6Q+' slides 31, 40; T@55262–55842 11/10'},

{id:'P6-055', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'clear', concept:'p6-mildly-clear-tx',
 tags:['recall'], source:'both',
 stem:'What is first-line treatment for mildly clear acne?',
 options:[
  {t:'With or without benzoyl peroxide alone, or essential oils', correct:true, why:'Slide 40, mildly clear: "+/- BP alone or Essential Oils" (T@54022 11/10).'},
  {t:'Topical retinoid plus a topical antibiotic, applied at night', correct:false, why:'A combination is a later mild-column step (slide 40); antibiotics go with BP.'},
  {t:'An oral antibiotic for 3–4 months', correct:false, why:'Oral antibiotics are moderate and severe options (slide 40).'},
  {t:'A combined oral contraceptive', correct:false, why:'A COC is a severe second-line option (slide 40).'}],
 teach:'Mildly clear: BP alone or nothing; essential oils (slide 40).',
 cite:P6Q+' slide 40; T@54022 11/10'},

{id:'P6-056', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mod', concept:'p6-moderate-first-line',
 tags:['case'], source:'both',
 stem:'A 17-year-old boy has many open and closed comedones and some papules and pustules; no nodules. He has never used any acne product. What is the most appropriate first-line therapy?',
 options:[
  {t:'Benzoyl peroxide alone', correct:false, why:'A single agent is the mild-acne start (slide 40).'},
  {t:'Benzoyl peroxide plus a topical retinoid', correct:true, why:'Slide 40, moderate first line: topical combination therapy, (BP + topical retinoid) or (BP + topical antibiotic) or all three; "topical combination first before you add an oral antibiotic to a moderate patient" (T@56493, T@57819 11/10).'},
  {t:'Oral doxycycline plus benzoyl peroxide and a topical retinoid', correct:false, why:'The oral antibiotic is added after the topical combinations have been tried (T@57819 11/10).'},
  {t:'Oral isotretinoin', correct:false, why:'"Isotretinoin is absolute last line for moderate patients" (T@59132 11/10).'}],
 teach:'Many comedones with some inflammatory lesions is moderate acne (slide 8); start with a topical combination.',
 cite:P6Q+' slides 8, 40; T@56493, T@57819, T@59132 11/10'},

{id:'P6-057', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mod', concept:'p6-moderate-add-oral',
 tags:['case'], source:'both', dupOf:'P6-056',
 stem:'A 17-year-old boy with moderate acne (many comedones, some papules and pustules, no nodules) has used each topical combination (BP + topical retinoid, BP + topical antibiotic, then BP + topical retinoid + topical antibiotic) for the full durations, with little change. What is the next step?',
 options:[
  {t:'Switch to topical dapsone as the next topical agent', correct:false, why:'Dapsone is the mild-column second line (slide 40).'},
  {t:'Add an oral antibiotic to the topical combination', correct:true, why:'Slide 40, moderate: (Oral Abx + Top Retinoid + BP) or (Oral Abx + Top Retinoid + BP + Top Abx). "Patient has tried all topical agents, that’s when you add an oral antibiotic" (T@57819–58460 11/10).'},
  {t:'Oral isotretinoin', correct:false, why:'Isotretinoin is last line, after oral antibiotic combinations (T@59132 11/10).'},
  {t:'Topical antibiotic alone', correct:false, why:'Topical antibiotics are not used as monotherapy (slide 25).'}],
 teach:'Topical first, then oral plus topical, then isotretinoin (slide 40; T@57819, T@59132 11/10).',
 cite:P6Q+' slides 25, 40; T@57819–58460, T@59132 11/10'},

{id:'P6-058', skill:'class', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mod', concept:'p6-iso-place-moderate',
 tags:['two-facts'], source:'both',
 stem:'In moderate acne, where does oral isotretinoin sit?',
 options:[
  {t:'First line, together with benzoyl peroxide, when comedones are many', correct:false, why:'Moderate first line is topical combinations (slide 40).'},
  {t:'Second line, before any oral antibiotic is tried for the patient', correct:false, why:'Oral antibiotics come before isotretinoin (T@59132 11/10).'},
  {t:'Last line, after topical and oral antibiotic combinations fail', correct:true, why:'Slide 40, moderate second line ends "or Consider Oral Isotretinoin"; "isotretinoin is absolute last line for moderate patients, but keep in mind that we have tried all of these agents" (T@59132 11/10).'},
  {t:'First line, as a single agent for some papules and pustules', correct:false, why:'Not on slide 40.'}],
 teach:'Isotretinoin: severe refractory nodular acne, last line (slide 37).',
 cite:P6Q+' slides 37, 40; T@59132 11/10'},

{id:'P6-059', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6-severe-first-line',
 tags:['case'], source:'both',
 stem:'An 18-year-old man has many inflammatory and non-inflammatory lesions, several nodules on his cheeks and back, and moderate scarring. He has used no acne products. What is first-line therapy?',
 options:[
  {t:'Benzoyl peroxide alone, stepping up after 8 weeks if needed', correct:false, why:'A single topical agent is the mild-acne start (slide 40).'},
  {t:'A topical combination of BP and a topical retinoid, with no oral agent', correct:false, why:'A topical combination alone is moderate first line (slide 40).'},
  {t:'Oral spironolactone with a benzoyl peroxide wash', correct:false, why:'Spironolactone is severe second line and for females only (slide 40).'},
  {t:'An oral antibiotic plus a topical combination (BP + topical retinoid)', correct:true, why:'Slide 40, severe first line: "Oral Abx + Topical Combination Tx"; "Severe. Take the oral antibiotic and topical combination first" (T@59132–59663 11/10).'}],
 teach:'Several nodules with moderate scarring is severe acne (slide 8).',
 cite:P6Q+' slides 8, 40; T@59132–59663 11/10'},

{id:'P6-060', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6-severe-second-line', multi:true,
 tags:['list'], source:'both',
 stem:'A woman with severe acne has not responded to an oral antibiotic with topical combinations. Which are second-line options? Select all that apply.',
 options:[
  {t:'Change the oral antibiotic', correct:true, why:'Slide 40, severe second line: "Consider change in oral abx".'},
  {t:'Add a combined oral contraceptive', correct:true, why:'Slide 40 (T@59663 11/10).'},
  {t:'Oral spironolactone', correct:true, why:'Slide 40: "oral spironolactone (females only)".'},
  {t:'Topical dapsone', correct:false, why:'Dapsone is in the mild column (slide 40).'},
  {t:'A topical antibiotic alone', correct:false, why:'Not used as monotherapy (slide 25).'}],
 teach:'Severe second line: change the antibiotic, COC, spironolactone (females), consider isotretinoin (slide 40).',
 cite:P6Q+' slides 25, 40; T@59663–60314 11/10'},

{id:'P6-061', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6-coc-over-spiro',
 tags:['case','two-facts'], source:'both', dupOf:'P6-005',
 stem:'A 16-year-old girl with severe acne has used oral doxycycline, a topical retinoid and benzoyl peroxide for 8 months. She has irregular periods and is not sexually active. Why is a combined oral contraceptive chosen over spironolactone as the next line?',
 options:[
  {t:'She has already tried and failed a combined oral contraceptive', correct:false, why:'She has not used a COC.'},
  {t:'Her irregular periods are a compelling reason for a COC', correct:true, why:'Slide 34: COCs "might be beneficial for irregular menses"; T@69647 11/10.'},
  {t:'A COC is first line for severe acne', correct:false, why:'Severe first line is an oral antibiotic plus topical combination (slide 40).'},
  {t:'Spironolactone is reserved for mild acne', correct:false, why:'Spironolactone is severe second line (slide 40).'}],
 teach:'Both are severe second line for females (slide 40); the case detail decides.',
 cite:P6Q+' slides 34, 40, 46; T@59132, T@69647 11/10'},

/* ---- Counseling, monitoring, no response (slides 41-48) ------------------- */
{id:'P6-062', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'time', concept:'p6-time-to-benefit',
 tags:['numbers'], source:'both',
 stem:'How long should a patient be told it takes to see visible benefits of acne treatment?',
 options:[
  {t:'1–2 weeks', correct:false, why:'1–2 weeks is when BP side effects stabilize (slide 26).'},
  {t:'3 days', correct:false, why:'Not a figure for visible benefit (slide 41).'},
  {t:'8 weeks or more', correct:true, why:'Slide 41: "Patience is key: 8 weeks or more to see visible benefits"; slide 47 (T@61011 11/10).'},
  {t:'6 months or more', correct:false, why:'Slide 41 gives 8 weeks or more.'}],
 teach:'Response is judged at 8 weeks or more (slides 41, 47).',
 cite:P6Q+' slides 26, 41, 47; T@61011 11/10'},

{id:'P6-063', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'top', concept:'p6-apply-topical',
 tags:['fine-detail'], source:'both',
 stem:'How should a topical acne medicine be applied?',
 options:[
  {t:'Right after washing, while the skin is still damp, each morning before school', correct:false, why:'Slide 42: pat dry and wait 20–30 minutes; apply in the evening.'},
  {t:'Wash, pat dry, wait 20–30 minutes; apply a thin layer in the evening', correct:true, why:'Slide 42: "gently wash face with a mild soap; pat dry and wait 20-30 minutes"; "Apply thin layer to affected area in the evening or before bedtime, avoiding the eyes, ears, nostrils, and mouth" (T@61698 11/10).'},
  {t:'Wash, wait 5 minutes; apply a thick layer at bedtime', correct:false, why:'A thin layer after 20–30 minutes (slide 42).'},
  {t:'Apply a thin layer twice daily over the eyes and lips as well', correct:false, why:'Avoid the eyes, ears, nostrils and mouth (slide 42).'}],
 teach:'Waiting 20–30 minutes after washing lowers irritation (slide 42).',
 cite:P6Q+' slide 42; T@61698 11/10'},

{id:'P6-064', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'oral', concept:'p6-oral-counsel',
 tags:['counseling'], source:'both',
 stem:'Which counseling point applies to oral acne medicines?',
 options:[
  {t:'Open the capsule and sprinkle it on food', correct:false, why:'Slide 42: swallow whole.'},
  {t:'Swallow whole with a full glass of water; may take after eating', correct:true, why:'Slide 42, oral: swallow whole, full glass of water, option to take after eating; caution driving at night; sunscreen (T@62393 11/10).'},
  {t:'Take it on an empty stomach each morning, before driving to work', correct:false, why:'Slide 42: may take after eating; caution driving at night.'},
  {t:'Skip sunscreen while on oral therapy', correct:false, why:'Slide 42 includes sunscreen.'}],
 teach:'Isotretinoin capsules are also swallowed whole (slide 38).',
 cite:P6Q+' slides 38, 42; T@62393 11/10'},

{id:'P6-065', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'shave', concept:'p6-shaving',
 tags:['counseling'], source:'both',
 stem:'Which shaving advice is appropriate for a man with acne?',
 options:[
  {t:'Shave twice daily, against the direction of hair growth, for a close shave', correct:false, why:'Slide 43: shave lightly and infrequently, in the direction of hair growth.'},
  {t:'Shave lightly, infrequently, with hair growth, each area once', correct:true, why:'Slide 43: try electric and safety razors; soften the beard; shave lightly and infrequently; sharp blade; direction of hair growth; each area only once (T@63739–64355 11/10).'},
  {t:'Use an older, duller blade to avoid nicking the lesions', correct:false, why:'Slide 43: a sharp blade.'},
  {t:'Shave dry so the beard is not softened before shaving', correct:false, why:'Slide 43: soften the beard first.'}],
 teach:'Slide 43 is used where she misspoke about electric razors (T@63054 11/10).',
 cite:P6Q+' slide 43; T@63739–64355 11/10'},

{id:'P6-066', skill:'case', prof:'Patel', tier:'new', topic:'p6-couns', sub:'mon', concept:'p6-lesion-count',
 tags:['case','reasoning'], source:'both',
 stem:'At a 6-week follow-up, a patient’s lesion count is down about 20%. Which assessment and plan are appropriate?',
 options:[
  {t:'On track (10–25% in 4–8 weeks); continue and recheck in 4–8 weeks', correct:true, why:'Slide 44: lesion count decrease 10–25% within 4–8 weeks, >50% within 2–4 months; pharmacist every 4–8 weeks (T@64355–65933 11/10).'},
  {t:'Below the >50% target, so therapy should be escalated at this visit', correct:false, why:'>50% is the 2–4 month target (slide 44), not 6 weeks.'},
  {t:'The comedones should have resolved by now; refer', correct:false, why:'Comedones resolve by 3–4 months (slide 44).'},
  {t:'Switch to oral isotretinoin', correct:false, why:'Response is on track; isotretinoin is last line.'}],
 teach:'Patient monitors daily; pharmacist every 4–8 weeks (slide 44).',
 cite:P6Q+' slide 44; T@64355–65933 11/10'},

{id:'P6-067', skill:'case', prof:'Patel', tier:'new', topic:'p6-couns', sub:'nr', concept:'p6-no-response-vehicle',
 tags:['case','reasoning'], source:'both',
 stem:'A woman with oily skin applies a prescribed cream-based retinoid exactly as directed. After 8 weeks there is no response. Which action fits first?',
 options:[
  {t:'Increase cleansing to four times daily to remove the oil', correct:false, why:'Slide 48: avoid overuse of cleansers; slide 19: no excessive cleansing.'},
  {t:'Add a second topical antibiotic to the retinoid cream', correct:false, why:'Antibiotics are paired with BP, not with each other (slide 31).'},
  {t:'Change the vehicle to one for oily skin, such as a gel', correct:true, why:'Slide 48, drug related: "Change vehicle to adapt to skin type and environment"; slide 24: oily skin suits gels, solutions, lotions (T@72538 11/10).'},
  {t:'Stop her acne medicines abruptly and reassess in a month', correct:false, why:'Slide 47: regimens are tapered, not stopped abruptly.'}],
 teach:'Adherent patient, wrong vehicle for her skin: change the vehicle (slides 24, 48).',
 cite:P6Q+' slides 19, 24, 31, 47–48; T@72538 11/10'},

{id:'P6-068', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'plan', concept:'p6-plan-principles',
 tags:['two-facts'], source:'both',
 stem:'Which principle guides building an acne treatment plan?',
 options:[
  {t:'Start three agents at full strength, then remove one at a time', correct:false, why:'Step by step, one agent first (T@54687 11/10).'},
  {t:'Fewest agents at the lowest doses; topical before oral', correct:true, why:'Slide 47: "Combine the smallest number of agents at the lowest possible dosages"; "Topical before Oral"; taper over time (T@71021–71629 11/10).'},
  {t:'Oral before topical in teenagers', correct:false, why:'Topical before oral (slide 47).'},
  {t:'Stop treatment abruptly once lesions clear', correct:false, why:'"We are never going to abruptly stop a medication ... to prevent any rebound acne" (T@71629 11/10).'}],
 teach:'Regimens are tapered over time (slide 47).',
 cite:P6Q+' slide 47; T@54687, T@71021–71629 11/10'},

/* ---- Harder application items (patel_harder_drafts.md Part C) ------------- */
{id:'P6H-001', skill:'case', prof:'Patel', tier:'new', topic:'p6-cls', sub:'grade', concept:'p6h-mild-few-papules',
 tags:['hard','case'], source:'both',
 stem:'A 15-year-old boy has some open and closed comedones on his forehead and two small papules on his chin. There are no nodules or cysts, and scarring is minimal. How would you best classify his acne?',
 options:[
  {t:'Mild', correct:true, why:'Slide 7, Type 2 mild: "Some noninflammatory lesions; No more than a few inflammatory lesions (papules and pustules only, no nodules); Minimal scarring" (T@8517, T@13918 11/10).'},
  {t:'Moderate', correct:false, why:'Moderate needs many non-inflammatory lesions and some inflammatory lesions (slide 8).'},
  {t:'Mildly clear', correct:false, why:'Mildly clear allows no more than one small lesion (slide 7).'},
  {t:'Severe', correct:false, why:'Severe has a few nodules and moderate to extensive scarring (slide 8).'}],
 teach:'A few papules still fit mild acne; "some" comedones is not "many".',
 cite:P6Q+' slides 7–8; T@8517, T@9210, T@13918 11/10'},

{id:'P6H-002', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mod', concept:'p6h-moderate-triple-topical',
 tags:['hard','case'], source:'both',
 stem:'A 17-year-old girl with moderate acne (many comedones, some papules and pustules, no nodules) has used benzoyl peroxide with a topical retinoid for 10 weeks with little change. She has used no other acne product. Which next step is appropriate?',
 options:[
  {t:'Add a topical antibiotic to the benzoyl peroxide and retinoid', correct:true, why:'Slides 20, 40: moderate first line includes BP + topical retinoid + topical antibiotic. "Topical combination first before you add an oral antibiotic to a moderate patient. Patient has tried all topical agents, that’s when you add an oral antibiotic" (T@56493, T@57819 11/10).'},
  {t:'Add oral doxycycline to the topical benzoyl peroxide and retinoid', correct:false, why:'She has not tried the topical antibiotic combination yet; the oral antibiotic comes after the topical combinations (T@57819 11/10).'},
  {t:'Replace both with clindamycin 1% gel used as the single agent', correct:false, why:'Topical antibiotics are not used as monotherapy (slides 25, 31).'},
  {t:'Start oral isotretinoin and stop both of the topical products', correct:false, why:'Isotretinoin is absolute last line (T@59132 11/10).'}],
 teach:'Know what the patient has tried and what is left to try (T@60314 11/10).',
 cite:P6Q+' slides 20, 25, 31, 40; T@56493, T@57819, T@59132 11/10'},

{id:'P6H-003', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6h-severe-wants-contraception',
 tags:['hard','case'], source:'both',
 stem:'A 20-year-old woman has many inflammatory and non-inflammatory lesions, several nodules on her cheeks and moderate scarring. She has never used an acne product, does not smoke and wants contraception. What is the most appropriate first-line therapy?',
 options:[
  {t:'An oral antibiotic with benzoyl peroxide and a topical retinoid', correct:true, why:'Slide 8: severe. Slides 20, 40: severe first line, oral antibiotic + topical combination (T@59132, T@59663 11/10).'},
  {t:'A combined oral contraceptive with benzoyl peroxide used on its own', correct:false, why:'The COC is on the severe second line (slide 40); wanting contraception makes her a candidate later.'},
  {t:'Oral spironolactone with benzoyl peroxide and a topical retinoid', correct:false, why:'Spironolactone is severe second line (slide 40).'},
  {t:'Benzoyl peroxide with a topical retinoid, with no oral agent', correct:false, why:'A topical combination alone is moderate first line (slide 40).'}],
 teach:'"What is first line for that severity?" (T@60314 11/10).',
 cite:P6Q+' slides 8, 20, 40; T@59132, T@59663, T@60314 11/10'},

{id:'P6H-004', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6h-coc-age-excluded',
 tags:['hard','case'], source:'both',
 stem:'A 13-year-old girl whose periods started 1 year ago has severe acne that has not improved on doxycycline with benzoyl peroxide and a topical retinoid. Her periods are irregular. Which severe second-line option is excluded for her?',
 options:[
  {t:'A combined oral contraceptive', correct:true, why:'Slide 34: COC "Should be > 14 years of age; or over 2 years since menarche"; she is 13 and 1 year past menarche (T@41984, T@45949 11/10).'},
  {t:'A change in the oral antibiotic', correct:false, why:'On the severe second line (slide 40), with no age limit on her slides; she is over 12 for tetracyclines (slide 33).'},
  {t:'Oral spironolactone', correct:false, why:'On the severe second line for females (slide 40); no age limit is given for it.'},
  {t:'Oral isotretinoin', correct:false, why:'"Consider oral isotretinoin" is on the severe second line (slide 40); no age limit excludes her.'}],
 teach:'Irregular periods favour a COC (Case 2), but only after age 14 or 2 years past menarche.',
 cite:P6Q+' slides 33–34, 40; T@41984, T@45949 11/10'},

{id:'P6H-005', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'sev', concept:'p6h-smoker-spiro',
 tags:['hard','case'], source:'both',
 stem:'A 17-year-old girl has severe acne despite 6 months of minocycline, benzoyl peroxide and a topical retinoid. She has irregular periods and smokes half a pack a day. She has not tried a hormonal agent. Which next-line option is most appropriate?',
 options:[
  {t:'Oral spironolactone', correct:true, why:'Slide 40: severe second line, COC or oral spironolactone (females only). Smoking excludes the COC (slide 34, non-smoker; T@45257 11/10), so spironolactone is the hormonal option left.'},
  {t:'A combined oral contraceptive', correct:false, why:'Slide 34: non-smoker under 35; "a patient who is also a smoker is only increasing the risk even more" (T@45257 11/10).'},
  {t:'Topical dapsone 5% gel', correct:false, why:'Dapsone is the mild-column second line (slide 40).'},
  {t:'A short course of oral corticosteroids', correct:false, why:'Corticosteroids are on her list of drugs that cause acne (slide 10).'}],
 teach:'In her Case 2, irregular periods made the COC next line; here smoking excludes it.',
 cite:P6Q+' slides 10, 34, 40; T@41984, T@45257, T@69647 11/10'},

{id:'P6H-006', skill:'case', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'p6h-fill-window-passed',
 tags:['hard','case'], source:'both',
 stem:'A 20-year-old woman of reproductive potential brings an isotretinoin prescription written 9 days ago. She is registered in iPledge and has met its pregnancy-test requirements. What should the pharmacist do?',
 options:[
  {t:'Decline to fill it, since her 7-day window has passed', correct:true, why:'Slide 38: female of reproductive potential, 7-day window to fill. "There is only a 7 day window ... that prescription is voided" (T@50235 11/10).'},
  {t:'Fill it, since she is still inside the 30-day fill window', correct:false, why:'The 30-day window is for males and females who cannot get pregnant (slide 38).'},
  {t:'Fill a 15-day supply now and the rest after a new test', correct:false, why:'Not an option on slides 37–38; the prescription is voided.'},
  {t:'Fill a 30-day supply with one refill to avoid a gap', correct:false, why:'Slide 37: 30-day supply only, no refills.'}],
 teach:'7 days for her; 30 days for males and females who cannot get pregnant (slide 38).',
 cite:P6Q+' slides 37–38; T@48318, T@50235, T@50755 11/10'},

{id:'P6H-007', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'inter', concept:'p6h-progestin-only',
 tags:['hard','case'], source:'both',
 stem:'A 19-year-old woman will start isotretinoin next month. For contraception she takes a progestin-only pill, and her partner uses condoms. Which statement about her plan is correct?',
 options:[
  {t:'Her pill is on the do-not-use list with isotretinoin; she needs another method', correct:true, why:'Slide 38: "Do not use with vitamin A supplements, tetracyclines, steroids, progestin-only ..."; two forms of birth control are needed (T@50755 11/10).'},
  {t:'Her plan works: the pill and condoms are two forms, begun on the first dose day', correct:false, why:'The pill is on the do-not-use list, and the two forms start 1 month before treatment (slide 38).'},
  {t:'Her plan works: the pill and condoms during treatment, stopped on the last day', correct:false, why:'Two forms continue 1 month after treatment, and the pill is excluded (slide 38).'},
  {t:'The pill alone is enough once both pregnancy tests before treatment are negative', correct:false, why:'Negative tests do not replace two forms of birth control (slide 38).'}],
 teach:'Two forms of birth control from 1 month before, during, until 1 month after (slide 38).',
 cite:P6Q+' slide 38; T@50235, T@50755 11/10'},

{id:'P6H-008', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'p6h-second-test',
 tags:['hard','case'], source:'both',
 stem:'A 24-year-old woman of reproductive potential has had one negative pregnancy test and wants to start isotretinoin this week. She has used two forms of birth control for the past 2 months. What does iPledge require before she starts?',
 options:[
  {t:'A second negative pregnancy test, then one each month of treatment', correct:true, why:'Slide 38: "Pregnancy test required initially x 2 and monthly during treatment" (T@49632 11/10: "I said it twice because hint, it’s a question").'},
  {t:'No further test now, then one at the end of the 15–20 week course', correct:false, why:'Two tests before starting, then monthly (slide 38).'},
  {t:'A second negative pregnancy test, then another if she misses a period', correct:false, why:'Tests are monthly during treatment (slide 38).'},
  {t:'No further test, since she has used two forms for more than a month', correct:false, why:'Contraception does not replace the tests (slide 38).'}],
 teach:'No set interval between the two initial tests was given (T@51383 11/10).',
 cite:P6Q+' slide 38; T@49632, T@51383 11/10'},

{id:'P6H-009', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'p6h-doxy-candidate',
 tags:['hard','case'], source:'both',
 stem:'Which patient with moderate acne is an appropriate candidate for oral doxycycline added to topical combination therapy?',
 options:[
  {t:'A 13-year-old boy with no other medical problems', correct:true, why:'Slide 33: tetracyclines "> 12 years old"; 13 qualifies.'},
  {t:'A 12-year-old girl with no other medical problems', correct:false, why:'"Notice that there is no 12 years and equal to ... So greater than 12" (T@39928 11/10).'},
  {t:'A 23-year-old woman who is 10 weeks pregnant', correct:false, why:'Slide 33: fetal harm, avoid during pregnancy.'},
  {t:'A 17-year-old boy who has just started isotretinoin', correct:false, why:'Slide 38: isotretinoin is not used with tetracyclines (T@50755 11/10).'}],
 teach:'Three limits on tetracyclines: over 12, not in pregnancy, not with isotretinoin.',
 cite:P6Q+' slides 33, 38; T@39928, T@50755 11/10'},

{id:'P6H-010', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-couns', sub:'time', concept:'p6h-three-weeks',
 tags:['hard','case'], source:'both',
 stem:'A 16-year-old started benzoyl peroxide in the morning and a topical retinoid at night 3 weeks ago for mild acne. Her lesion count has not changed, and she wants to stop both today. What is the most appropriate advice?',
 options:[
  {t:'Continue both, because visible benefit takes 8 weeks or more of use', correct:true, why:'Slide 41: "Patience is key: 8 weeks or more to see visible benefits"; slide 44: 10–25% decrease within 4–8 weeks (T@61011, T@64891 11/10).'},
  {t:'Stop both today, because no change by 3 weeks means the plan failed', correct:false, why:'3 weeks is too early; and "we are never going to abruptly stop a medication" (T@71629 11/10).'},
  {t:'Stop the retinoid today and keep the benzoyl peroxide each morning', correct:false, why:'Too early to judge either agent (slide 41).'},
  {t:'Add an oral antibiotic now, because the topical therapy failed early', correct:false, why:'Oral antibiotics are not in the mild column (slide 40), and 3 weeks is too early.'}],
 teach:'Monitor response over 8 weeks or more (slide 47).',
 cite:P6Q+' slides 40–41, 44, 47; T@61011, T@64891, T@71629 11/10'},

{id:'P6H-011', skill:'case', prof:'Patel', tier:'new', topic:'p6-alg', sub:'mod', concept:'p6h-moderate-after-bp-wash',
 tags:['hard','case'], source:'both',
 stem:'A 15-year-old girl has many open and closed comedones and some papules and pustules on her cheeks, with no nodules. For 3 months she has used only an OTC benzoyl peroxide wash. What is the most appropriate next step?',
 options:[
  {t:'Benzoyl peroxide plus a topical retinoid, as combination therapy', correct:true, why:'Slide 8: moderate. Slides 20, 40: moderate first line is topical combination therapy (T@56493 11/10: "combined topical treatment would be first line").'},
  {t:'A topical retinoid alone, used in place of the benzoyl peroxide', correct:false, why:'A single topical agent is the mild-acne approach; she has moderate acne (slide 40).'},
  {t:'Benzoyl peroxide plus oral doxycycline, with no other topical', correct:false, why:'The oral antibiotic comes after the topical combinations, and then with a retinoid and BP (slide 40; T@57819 11/10).'},
  {t:'Clindamycin 1% gel by itself, used in place of the benzoyl peroxide', correct:false, why:'Topical antibiotics are not used as monotherapy (slides 25, 31; T@36940 11/10).'}],
 teach:'"Many" comedones with "some" inflammatory lesions is moderate acne (slide 8).',
 cite:P6Q+' slides 8, 20, 25, 31, 40; T@36940, T@56493, T@57819 11/10'},

/* ---- Fill in the blank (kit type 'blank'; strict spelling) ---------------- */
{id:'BP6-001', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'b-p6-window-female',
 tags:['blank'], source:'both', dupOf:'P6-044',
 stem:'Under iPledge, a female patient of reproductive potential has a ___-day window to fill an isotretinoin prescription.',
 accept:['7', 'seven', '7 days', 'seven days', '7 day', 'seven day'],
 why:'Slide 38: female of reproductive potential, 7-day window; past it "that prescription is voided" (T@50235 11/10).',
 cite:P6Q+' slide 38; T@50235 11/10'},

{id:'BP6-002', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'b-p6-window-male',
 tags:['blank'], source:'both', dupOf:'P6-044',
 stem:'Male patients, and female patients who cannot get pregnant, have a ___-day window to fill an isotretinoin prescription.',
 accept:['30', 'thirty', '30 days', 'thirty days', '30 day', 'thirty day'],
 why:'Slide 38: males and females who cannot get pregnant, 30-day window (T@50755 11/10).',
 cite:P6Q+' slide 38; T@50755 11/10'},

{id:'BP6-003', type:'blank', skill:'counsel', prof:'Patel', tier:'new', topic:'p6-iso', sub:'ipledge', concept:'b-p6-two-tests',
 tags:['blank'], source:'both', dupOf:'P6-043',
 stem:'Before starting isotretinoin, a female patient of reproductive potential needs ___ negative pregnancy tests, then one monthly during treatment.',
 accept:['2', 'two'],
 why:'Slide 38: "Pregnancy test required initially x 2 and monthly during treatment"; "I said it twice because hint, it’s a question" (T@49632 11/10).',
 cite:P6Q+' slide 38; T@49632 11/10'},

{id:'BP6-004', type:'blank', skill:'case', prof:'Patel', tier:'new', topic:'p6-oral', sub:'abx', concept:'b-p6-tetracycline-age',
 tags:['blank'], source:'both', dupOf:'P6-034',
 stem:'Doxycycline and minocycline are used for acne only in patients older than ___ years.',
 accept:['12', 'twelve', '12 years', 'twelve years'],
 why:'Slide 33: "> 12 years old"; teeth discoloration under 12. "So greater than 12" (T@39928 11/10).',
 cite:P6Q+' slide 33; T@39928 11/10'},

{id:'BP6-005', type:'blank', skill:'dose', prof:'Patel', tier:'new', topic:'p6-iso', sub:'dose', concept:'b-p6-iso-divided',
 tags:['blank'], source:'both', dupOf:'P6-049',
 stem:'Isotretinoin is dosed 0.5–1 mg/kg/day in ___ divided doses.',
 accept:['2', 'two'],
 why:'Slide 37: "0.5-1 mg/kg/day in 2 divided doses"; she starts at 0.5 (T@48318 11/10).',
 cite:P6Q+' slide 37; T@48318 11/10'},

{id:'BP6-006', type:'blank', skill:'class', prof:'Patel', tier:'new', topic:'p6-otc', sub:'bp', concept:'b-p6-bp-max-otc',
 tags:['blank'], source:'both',
 stem:'OTC benzoyl peroxide comes in concentrations from 2.5% to ___%.',
 accept:['10', '10%', '10 %', 'ten', '10 percent', 'ten percent'],
 why:'Slides 23, 26: OTC formulations 2.5% to 10%; prescription up to 20% (T@24800 11/10).',
 cite:P6Q+' slides 23, 26; T@24800 11/10'}
);
