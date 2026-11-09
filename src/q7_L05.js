/* ==========================================================================
   Lecture 5 questions (Dr. Patel, Friday 11/06/2026, dermatitis therapeutics,
   3 h). First lecture of Exam 2 (Lectures 1-4 30%, Lectures 5-8 70%).
   Source: Patel_Dermatitis-Therapeutics-Student.pdf (71 slides; "slide N" =
   PDF page), her PollEv questions of 11/06 (PollEV_Dr_Patel.pdf, 2 pages) and
   the 11/06 lecture transcript (T@n = byte offset in
   "DEENT 11.06 Lecture Transcript.txt", the start of the passage quoted).
   Her format (PollEv, 11/06): case stems (CC, HPI, PMH, current meds, physical
   assessment), tube-size and dose calculations ("there will be a calculation
   on the exam", T@11799), product and regimen selection, counseling and
   referral timing; four options, once five with "None of the above".
   Louis, 2026-11-09, after Exam 1: harder items (finer slide details, two facts
   combined, closer answer choices) and more fill-in-the-blanks.
   Left out on purpose: pediatric fingertip units and pediatric tube amounts
   ("I don't necessarily want you guys to memorize the pediatric fingertip
   units", T@8797; "I don't want you to worry about pediatrics", T@10021);
   infant dupilumab dosing ("I want you to only know the adult and children
   dosing", T@50408); newborn and infant age definitions ("I'm not gonna test
   you on this", T@71019); SCORAD calculation (done by the physician, T@21052);
   skin anatomy beyond epidermis, dermis and subcutis (T@6438). Live vaccine
   examples are not on her slides (T@48048 says to review them): no item names
   one. Her graded Atopic Dermatitis Patient Case (due 11/10) is not used.
   Personal remarks in her introduction stay out.
   ========================================================================== */
const P5 = 'Lecture 5 (Patel_Dermatitis-Therapeutics-Student.pdf)';

TOPIC_DECKS.push(
  {id:'p5', name:'Dermatitis Therapeutics (Dr. Patel)', file:'Patel_Dermatitis-Therapeutics-Student.pdf', when:'taught 11/06 (Exam 2)',
   topics:['p5-qty', 'p5-ad', 'p5-care', 'p5-tcs', 'p5-tci', 'p5-sys', 'p5-alg', 'p5-dd']});

TOPICS.push(
 {id:'p5-qty', name:'Topical quantity: fingertip units and tube sizes', prof:'Patel',
  cite:'slides 10–13 · taught 11/06 (Lecture 5)', subs:[
   {id:'ftu',  name:'The adult fingertip unit chart', cite:'slides 10–11'},
   {id:'calc', name:'Grams needed and the tube to dispense', cite:'slides 10, 13'}]},
 {id:'p5-ad', name:'Atopic dermatitis: risk, triggers, presentation, severity and status', prof:'Patel',
  cite:'slides 15–26 · taught 11/06 (Lecture 5)', subs:[
   {id:'def',  name:'Definition, pathophysiology, risk factors', cite:'slides 17–19'},
   {id:'trig', name:'Triggers', cite:'slide 20'},
   {id:'pres', name:'Presentation by age; onset and persistence', cite:'slides 15–16, 21–22'},
   {id:'sev',  name:'Severity (SCORAD) and status (acute, subacute, chronic)', cite:'slides 23–24, 26'},
   {id:'comp', name:'Complications', cite:'slide 25'}]},
 {id:'p5-care', name:'Atopic dermatitis: goals, skin barrier, bathing, moisturizers, counseling', prof:'Patel',
  cite:'slides 27–33, 50–53 · taught 11/06 (Lecture 5)', subs:[
   {id:'goals', name:'Treatment goals and fixing the skin barrier', cite:'slides 27, 29'},
   {id:'bath',  name:'Non-drug care: bathing, wet wraps, compresses', cite:'slides 30–31, 51'},
   {id:'moist', name:'OTC moisturizers', cite:'slide 32'},
   {id:'couns', name:'Medication counseling and follow-up', cite:'slides 33, 50, 52'},
   {id:'access', name:'Medication access', cite:'slide 53'}]},
 {id:'p5-tcs', name:'Topical corticosteroids: OTC hydrocortisone, potency and vehicle', prof:'Patel',
  cite:'slides 35–37 · taught 11/06 (Lecture 5)', subs:[
   {id:'prof', name:'Adverse effects, contraindications, counseling, OTC use', cite:'slides 35–36'},
   {id:'pot',  name:'Potency classes and vehicles', cite:'slide 37'}]},
 {id:'p5-tci', name:'Topical calcineurin inhibitors and crisaborole', prof:'Patel',
  cite:'slides 38–42 · taught 11/06 (Lecture 5)', subs:[
   {id:'tci',  name:'Pimecrolimus and tacrolimus; boxed warning', cite:'slides 38–40'},
   {id:'cris', name:'Crisaborole 2%', cite:'slides 41–42'}]},
 {id:'p5-sys', name:'Dupilumab, tralokinumab and JAK inhibitors', prof:'Patel',
  cite:'slides 43–46 · taught 11/06 (Lecture 5)', subs:[
   {id:'dup',  name:'Dupilumab: use, counseling, dosing', cite:'slides 43–44'},
   {id:'tral', name:'Tralokinumab', cite:'slide 45'},
   {id:'jak',  name:'JAK inhibitors and their boxed warnings', cite:'slide 46'}]},
 {id:'p5-alg', name:'Atopic dermatitis: step-care algorithm and the adult case', prof:'Patel',
  cite:'slides 47–49, 54 · taught 11/06 (Lecture 5)', subs:[
   {id:'step', name:'Maintenance and acute treatment by severity', cite:'slides 47–48'},
   {id:'case', name:'The adult case (her PollEv questions)', cite:'slides 26, 49, 54'}]},
 {id:'p5-dd', name:'Diaper and incontinence-associated dermatitis', prof:'Patel',
  cite:'slides 55–69 · taught 11/06 (Lecture 5)', subs:[
   {id:'cause', name:'Etiology and prevention', cite:'slides 56–57, 59'},
   {id:'sx',    name:'Signs, severity and complications', cite:'slides 58, 60, 67'},
   {id:'tx',    name:'Goals, ABCDE and skin protectants', cite:'slides 61–64'},
   {id:'excl',  name:'Cautions, follow-up and exclusions for self-treatment', cite:'slides 65–66, 68'},
   {id:'case',  name:'The infant case (her PollEv questions)', cite:'slide 69'}]}
);

QUESTIONS.push(
/* ---- Fingertip units and tube sizes (slides 10-13) ------------------------ */
{id:'P5-001', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'ftu', concept:'p5-ftu-grams',
 tags:['numbers','recall'], source:'both',
 stem:'An adult fingertip unit (from the tip of the index finger to the first crease) holds about how much cream or ointment?',
 options:[
  {t:'0.5 g', correct:true, why:'Slide 10: fingertip unit (FTU) = 0.5 grams; (T@7221–7616) from the start of the index finger to the first line is one fingertip unit, equal to 0.5 g.'},
  {t:'0.25 g', correct:false, why:'Half the slide 10 value. Slide 10 and slide 12 both give 0.5 g for one adult fingertip unit.'},
  {t:'1 g', correct:false, why:'Twice the slide 10 value; 1 g would be two adult fingertip units.'},
  {t:'1.25 g', correct:false, why:'1.25 g is the face-and-neck dose (2.5 FTU × 0.5 g), not one fingertip unit (slide 13).'}],
 teach:'Every quantity calculation starts here: fingertip units for the area, times 0.5 g per unit (T@12169).',
 cite:P5+' slides 10, 12; T@7221–7616, T@12169'},

{id:'P5-002', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'ftu', concept:'p5-ftu-face-neck',
 tags:['numbers','recall'], source:'both',
 stem:'How many adult fingertip units cover the face and neck for one application?',
 options:[
  {t:'2.5', correct:true, why:'Slide 11: face and neck, 2.5 FTU; (T@8004) "the face and neck, which is including both, which is 2.5".'},
  {t:'3', correct:false, why:'3 FTU is the scalp (slide 11).'},
  {t:'2', correct:false, why:'2 FTU is one foot including toes (slide 11).'},
  {t:'1.25', correct:false, why:'1.25 is the grams for face and neck (2.5 FTU × 0.5 g), not the number of fingertip units (slide 13).'}],
 teach:'Adult chart (slide 11): scalp 3; face and neck 2.5; one hand front and back 1; one arm with the hand 4; elbows 1; both soles 1.5; one foot 2; one leg with the foot 8; buttocks 4; knees 1; trunk both sides 14 (7 each side). "You will need to know this chart" (T@7616).',
 cite:P5+' slide 11; T@8004'},

{id:'P5-003', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'ftu', concept:'p5-ftu-arm-leg',
 tags:['numbers','recall'], source:'both',
 stem:'One arm including the entire hand, and one leg including the foot, need how many adult fingertip units each?',
 options:[
  {t:'Arm 4; leg 8', correct:true, why:'Slide 11: one arm including entire hand 4; one leg including foot 8 (T@8004–8410: shoulder to fingertips 4; hip to toes 8).'},
  {t:'Arm 3; leg 7', correct:false, why:'3 is the scalp and 7 is one side of the trunk (slide 11).'},
  {t:'Arm 4; leg 6', correct:false, why:'The arm is right; slide 11 gives 8 FTU for one leg including the foot.'},
  {t:'Arm 2; leg 8', correct:false, why:'2 FTU is one foot including toes; one arm with the hand is 4 (slide 11).'}],
 teach:'One hand alone (front and back, with fingers) is 1 FTU; the whole arm with that hand is 4. One foot alone is 2; the whole leg with that foot is 8 (slide 11).',
 cite:P5+' slide 11; T@8004–8410'},

{id:'P5-004', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'ftu', concept:'p5-ftu-trunk',
 tags:['numbers','recall'], source:'both',
 stem:'How many adult fingertip units cover one side of the trunk (chest and abdomen, or the back)?',
 options:[
  {t:'7', correct:true, why:'Slide 11: trunk both sides 14 (7 FTU each side); slide 13: one side of trunk (chest + abdomen or thoracic + lumbar back) = 7 FTU.'},
  {t:'14', correct:false, why:'14 is both sides of the trunk, front and back together (slide 11).'},
  {t:'4', correct:false, why:'4 FTU is one arm with the hand, or the buttocks (slide 11).'},
  {t:'8', correct:false, why:'8 FTU is one leg including the foot (slide 11).'}],
 teach:'"When we say trunk, we\'re saying the entire frame of the body from the shoulder down to the hips ... both sides is 14. So 7 fingertip units is one side and the back is another 7" (T@8410–8797).',
 cite:P5+' slides 11, 13; T@8410–8797'},

{id:'P5-005', type:'match', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'ftu', concept:'p5-ftu-chart-match',
 tags:['numbers','match'], source:'slide',
 stem:'Match each adult body area to its number of fingertip units.', left:'Area', right:'Fingertip units',
 pairs:[
  {l:'Scalp', r:'3', why:'Slide 11.'},
  {l:'Face and neck', r:'2.5', why:'Slide 11.'},
  {l:'Both soles', r:'1.5', why:'Slide 11.'},
  {l:'One foot including toes', r:'2', why:'Slide 11.'},
  {l:'One leg including foot', r:'8', why:'Slide 11.'},
  {l:'Trunk, both sides', r:'14', why:'Slide 11: 7 FTU each side.'}],
 teach:'The 1-FTU areas on slide 11: one hand (front and back, with fingers), elbows, knees. The 4-FTU areas: one arm with the hand, the buttocks.',
 cite:P5+' slide 11'},

{id:'P5-006', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-round-up',
 tags:['numbers','reasoning'], source:'both',
 stem:'A course of treatment needs 35 g of ointment. The pharmacy stocks 15 g, 30 g, 45 g and 60 g tubes. Which should be dispensed?',
 options:[
  {t:'45 g', correct:true, why:'Slide 10: prescribed amounts are rounded up to available tube sizes; 45 g is the smallest tube that holds 35 g (slide 13: face and neck BID for 2 weeks, 35 g, prescribe 45 g).'},
  {t:'30 g', correct:false, why:'Rounding down: "We\'re not rounding down cause we would be shortening them with the amount" (T@7221).'},
  {t:'60 g', correct:false, why:'60 g holds the amount, but 45 g is the first available size above 35 g; round up to the next available tube.'},
  {t:'Two 15 g tubes', correct:false, why:'30 g in total is still short of 35 g, and the slide rule is to round up to one available tube size (slide 10).'}],
 teach:'"I will always tell you what\'s available in the exam question. So remember to always round up" (T@9636). Standard sizes on slide 10: 15, 30, 45, 60, 80, 100 g.',
 cite:P5+' slides 10, 13; T@7221, T@9636'},

{id:'P5-007', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-face-tid',
 tags:['poll','verbatim','calculation','case'], source:'both',
 stem:'Patient is an 18-year-old male applying a hydrocortisone ointment to his face and neck TID for 14 days. What is the most appropriate size tube to dispense?',
 options:[
  {t:'15 grams', correct:false, why:'Far short: 2.5 FTU × 0.5 g = 1.25 g per application × 3 a day × 14 days = 52.5 g.'},
  {t:'30 grams', correct:false, why:'30 g covers BID for 12 days at most (1.25 g × 2 × 12 = 30 g); TID for 14 days needs 52.5 g. 30% of the room chose it (T@11134).'},
  {t:'45 grams', correct:false, why:'45 g is the tube for BID (35 g, slide 13); TID for 14 days needs 52.5 g, so 45 g runs out.'},
  {t:'60 grams', correct:true, why:'Face and neck 2.5 FTU × 0.5 g = 1.25 g per application; × 3 per day × 14 days = 52.5 g; round up to the next tube offered, 60 g (her answer, T@11444–11799).'},
  {t:'None of the above', correct:false, why:'One of the tubes offered works: 60 g is the first size above 52.5 g. "I promise you there\'s an answer" (T@11134).'}],
 teach:'Her PollEv of 11/06 (five options). Steps: FTU for the area (slide 11) × 0.5 g × applications per day × days, then round up to the tube sizes the question offers.',
 cite:P5+' slides 10–11, 13; PollEv 11/06; T@10770–11799'},

{id:'P5-008', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-trunk-bid',
 tags:['calculation'], source:'both',
 stem:'An adult applies a cream twice daily for 2 weeks to one side of the trunk (chest and abdomen). How many grams are needed, and which tube is prescribed?',
 options:[
  {t:'98 g; 100 g tube', correct:true, why:'7 FTU × 0.5 g = 3.5 g per application; × 2 per day × 14 days = 98 g; round up to 100 g (slide 13; T@10376).'},
  {t:'49 g; 60 g tube', correct:false, why:'49 g is once daily (3.5 g × 14); the regimen is twice daily, so 98 g.'},
  {t:'98 g; 80 g tube', correct:false, why:'98 g is right, but 80 g is less than the amount; the tube is rounded up, to 100 g (slide 10).'},
  {t:'196 g; two 100 g tubes', correct:false, why:'196 g uses 14 FTU, both sides of the trunk; one side is 7 FTU (slide 11).'}],
 teach:'Slide 13: one side of trunk, 3.5 grams = 7 FTU; twice daily for two weeks, 98 grams; prescribe 100 grams for an adult.',
 cite:P5+' slides 11, 13; T@10021–10376'},

{id:'P5-009', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-scalp-week',
 tags:['calculation'], source:'slide',
 stem:'An adult applies a cream to the scalp twice daily for 7 days. Tubes of 15, 30, 45 and 60 g are available. Which is dispensed?',
 options:[
  {t:'30 g', correct:true, why:'Scalp 3 FTU × 0.5 g = 1.5 g per application; × 2 × 7 = 21 g; the first size above 21 g is 30 g (slides 10–11).'},
  {t:'15 g', correct:false, why:'15 g is 10 applications at 1.5 g; 14 applications need 21 g.'},
  {t:'45 g', correct:false, why:'45 g would cover 14 days; 7 days need 21 g, so 30 g is the round-up.'},
  {t:'60 g', correct:false, why:'More than twice the 21 g needed; the next tube up from 21 g is 30 g.'}],
 teach:'Check the arithmetic in this order: FTU (3) → grams per application (1.5) → applications (2 × 7 = 14) → total (21 g) → round up.',
 cite:P5+' slides 10–11'},

{id:'P5-010', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-arm',
 tags:['calculation'], source:'slide',
 stem:'An adult applies an ointment to one arm including the hand twice daily for 14 days. How many grams are needed?',
 options:[
  {t:'56 g', correct:true, why:'One arm with the entire hand 4 FTU × 0.5 g = 2 g per application; × 2 × 14 = 56 g (slide 11); a 60 g tube would be dispensed.'},
  {t:'28 g', correct:false, why:'28 g is once daily (2 g × 14); twice daily for 14 days doubles it to 56 g.'},
  {t:'112 g', correct:false, why:'112 g would be 8 FTU, the leg; one arm with the hand is 4 FTU (slide 11).'},
  {t:'14 g', correct:false, why:'14 g is one hand alone (1 FTU = 0.5 g) twice daily for 14 days; the whole arm is 4 FTU.'}],
 teach:'The arm figure already includes the hand: do not add the hand\'s 1 FTU again (slide 11).',
 cite:P5+' slide 11'},

{id:'P5-011', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-two-areas',
 tags:['calculation','two-facts'], source:'slide',
 stem:'An adult applies a cream to the face and neck and to both hands (front and back) three times daily for 7 days. Tubes of 30, 45, 60 and 80 g are offered. Which is dispensed?',
 options:[
  {t:'60 g', correct:true, why:'Face and neck 2.5 FTU + two hands 2 × 1 FTU = 4.5 FTU × 0.5 g = 2.25 g per application; × 3 × 7 = 47.25 g; round up to 60 g (slides 10–11).'},
  {t:'45 g', correct:false, why:'45 g is short of 47.25 g; the amount is rounded up, not to the nearest size (slide 10).'},
  {t:'30 g', correct:false, why:'30 g is not enough: the two areas TID for 7 days need 47.25 g.'},
  {t:'80 g', correct:false, why:'80 g holds the amount, but 60 g is the first size above 47.25 g.'}],
 teach:'Add the areas in fingertip units first, then convert once to grams.',
 cite:P5+' slides 10–11'},

{id:'P5-012', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-days-last',
 tags:['calculation','reasoning'], source:'slide',
 stem:'A 30 g tube of cream is applied twice daily to an adult\'s face and neck. About how many days will it last?',
 options:[
  {t:'12 days', correct:true, why:'2.5 FTU × 0.5 g = 1.25 g per application; 2 a day = 2.5 g per day; 30 g ÷ 2.5 g = 12 days (slides 10–11).'},
  {t:'24 days', correct:false, why:'24 days is once daily (30 ÷ 1.25); the regimen is twice daily.'},
  {t:'8 days', correct:false, why:'8 days is three times daily (30 ÷ 3.75); twice daily gives 12 days.'},
  {t:'14 days', correct:false, why:'14 days twice daily needs 35 g, which is why slide 13 prescribes 45 g for that course.'}],
 teach:'Working backward from the tube is the same arithmetic as slide 13, divided instead of multiplied.',
 cite:P5+' slides 10–11, 13'},

{id:'P5-013', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-leg-daily',
 tags:['calculation'], source:'slide',
 stem:'An adult applies an ointment once daily to one leg including the foot for 10 days. Tubes of 30, 45, 60 and 80 g are offered. Which is dispensed?',
 options:[
  {t:'45 g', correct:true, why:'One leg including foot 8 FTU × 0.5 g = 4 g per application; × 1 × 10 = 40 g; round up to 45 g (slides 10–11).'},
  {t:'80 g', correct:false, why:'80 g is twice daily for 10 days (4 g × 20); the regimen is once daily.'},
  {t:'30 g', correct:false, why:'30 g is less than the 40 g needed.'},
  {t:'60 g', correct:false, why:'60 g holds 40 g, but 45 g is the first size above it.'}],
 teach:'One leg with the foot is 8 FTU (4 g); one foot alone is 2 FTU (1 g) (slide 11).',
 cite:P5+' slides 10–11'},

{id:'P5-014', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-sizes',
 tags:['numbers','list'], source:'both', multi:true,
 stem:'Which are standard topical tube sizes that a calculated amount is rounded up to? Select all that apply.',
 options:[
  {t:'15 g', correct:true, why:'Slide 10 lists 15g, 30g, 45g, 60g, 80g, 100g.'},
  {t:'45 g', correct:true, why:'Slide 10; slide 13 prescribes 45 g for the face and neck BID for two weeks.'},
  {t:'80 g', correct:true, why:'Slide 10; (T@6829) "15 g 30 g, 45, 60, 80, and 100".'},
  {t:'100 g', correct:true, why:'Slide 10; slide 13 rounds 98 g up to 100 g.'},
  {t:'25 g', correct:false, why:'Not a tube size on slide 10.'},
  {t:'90 g', correct:false, why:'Not a size on slide 10; after 80 g the next is 100 g.'}],
 teach:'Topical medications are often most cost effective in the standard tube sizes (slide 10).',
 cite:P5+' slides 10, 13; T@6829, T@9636'},

{id:'P5-015', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'p5-tube-face-bid',
 tags:['calculation'], source:'both',
 stem:'An adult applies an ointment to the face and neck twice daily for two weeks. How many grams are needed, and which tube is prescribed?',
 options:[
  {t:'35 g; 45 g', correct:true, why:'1.25 g per application (2.5 FTU) × 2 × 14 = 35 g; prescribe 45 g (slide 13; T@9259–9636).'},
  {t:'35 g; 30 g', correct:false, why:'35 g is right, but 30 g is less than the amount; tubes are rounded up (slide 10).'},
  {t:'17.5 g; 30 g', correct:false, why:'17.5 g is once daily for 14 days; the regimen is twice daily.'},
  {t:'52.5 g; 60 g', correct:false, why:'That is three times daily (her PollEv); twice daily is 35 g.'}],
 teach:'Slide 13: face and neck, 1.25 grams = 2.5 FTU; twice daily for two weeks, 35 grams; adult prescription 45 grams.',
 cite:P5+' slide 13; T@9259–9636'},

/* ---- Atopic dermatitis: disease (slides 15-26) ---------------------------- */
{id:'P5-016', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-ad-other-name',
 tags:['poll','verbatim'], source:'both',
 stem:'What is another name for Atopic Dermatitis?',
 options:[
  {t:'Eczema', correct:true, why:'Slide 17: atopic dermatitis (AD), also known as eczema; her PollEv answer (T@24148).'},
  {t:'Psoriasis', correct:false, why:'Psoriasis is a different disease (Scaly Dermatoses and Psoriasis, Lecture 7 on the syllabus).'},
  {t:'Atopic Lesions', correct:false, why:'Not a name for the disease; the lesions of AD are described as papules and plaques (slide 24).'},
  {t:'Plaques', correct:false, why:'Plaques are a lesion type (thin or lichenified plaques, slide 24), not the disease.'}],
 teach:'Her PollEv of 11/06, as asked.',
 cite:P5+' slide 17; PollEv 11/06; T@23787–24148'},

{id:'P5-017', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-ad-features', multi:true,
 tags:['list'], source:'both',
 stem:'Which statements describe atopic dermatitis? Select all that apply.',
 options:[
  {t:'Chronic or relapsing inflammatory skin disorder', correct:true, why:'Slide 17: very common chronic or relapsing inflammatory skin disorder with typical morphology and age-specific patterns.'},
  {t:'Hallmark symptom is pruritus', correct:true, why:'Slide 17: hallmark symptom is pruritis (itching); T@13017–13378.'},
  {t:'Often develops in childhood', correct:true, why:'Slide 17: often develops in childhood; slide 21: most common onset at 3–6 months.'},
  {t:'Contagious through skin contact', correct:false, why:'Slide 17: not contagious.'},
  {t:'Cured once the barrier is restored', correct:false, why:'Slide 17: no cure. "There is not a cure, right? So it could be chronic and it could relapse" (T@13017).'}],
 teach:'Slide 17: also known as eczema; very common; chronic or relapsing; often develops in childhood; hallmark symptom pruritus; no cure; not contagious.',
 cite:P5+' slide 17; T@13017–13378'},

{id:'P5-018', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-ad-barrier-patho',
 tags:['mechanism'], source:'both',
 stem:'In the initiation of atopic dermatitis, what follows the disrupted skin barrier?',
 options:[
  {t:'Allergen and irritant influx, then an inflammatory T-cell response', correct:true, why:'Slide 18: 1. disrupted barrier (FLG mutation or dryness); 2. allergen and irritant influx; 3. inflammatory T cell responses initiated by keratinocytes and dendritic cells (T@13378–13944).'},
  {t:'Keratinocyte hyperproliferation, then plaques with silvery scale', correct:false, why:'Hyperproliferation is the pathology of psoriasis, not the AD sequence on slide 18.'},
  {t:'Excess sebum, then bacterial colonization of the follicle', correct:false, why:'That is the acne sequence; slide 18 starts AD with a broken barrier.'},
  {t:'An inflammatory T-cell response, then the barrier breaks', correct:false, why:'Reversed: on slide 18 the barrier breaks first, letting allergens and irritants in, and the T-cell response follows.'}],
 teach:'Prevention on the same slide: emollient therapy improves the skin barrier and blocks the inflammatory cascade (slide 18; T@14303).',
 cite:P5+' slide 18; T@13378–14303'},

{id:'P5-019', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-ad-emollient-prevent',
 tags:['mechanism'], source:'both',
 stem:'How does emollient therapy help prevent atopic dermatitis?',
 options:[
  {t:'It improves the skin barrier and blocks the inflammatory cascade', correct:true, why:'Slide 18, "Atopic dermatitis prevention": emollient therapy improves skin barrier and blocks inflammatory cascade (T@14303).'},
  {t:'It suppresses T-cell activation in the dermis', correct:false, why:'That is what the anti-inflammatory drugs do; slide 18 credits emollients with restoring the barrier.'},
  {t:'It kills S. aureus colonizing the lesions', correct:false, why:'Emollients are not antibacterial; the bleach bath on slide 31 is the measure aimed at recurrent bacterial infection.'},
  {t:'It replaces the missing filaggrin protein', correct:false, why:'Slide 18 names the FLG mutation as a cause of the barrier defect; it does not say emollients replace filaggrin.'}],
 teach:'"In terms of prevention, how can we prevent it? Well, that\'s how we go ahead and strengthen the skin barrier on the epidermis. So by applying emollient therapy" (T@13944–14303).',
 cite:P5+' slide 18; T@13944–14303'},

{id:'P5-020', skill:'epi', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-atopic-triad-vs-march',
 tags:['two-facts'], source:'both',
 stem:'Which condition is part of the atopic march on her slide but not part of the atopic triad?',
 options:[
  {t:'Food allergies', correct:true, why:'Slide 19: atopic triad = allergic rhinitis, asthma, atopic dermatitis; atopic march = allergic rhinitis, asthma, atopic dermatitis and food allergies.'},
  {t:'Asthma', correct:false, why:'Asthma is in both the triad and the march (slide 19).'},
  {t:'Allergic rhinitis', correct:false, why:'Allergic rhinitis (hay fever) is in both the triad and the march (slide 19).'},
  {t:'Atopic dermatitis', correct:false, why:'AD is in both lists (slide 19).'}],
 teach:'Atopic march: "the natural history or typical progression of allergic diseases that often begin early in life" (slide 19): dry skin at birth, then eczema, food allergies, rhinitis, asthma (T@14744–15212).',
 cite:P5+' slide 19; T@14744–15212'},

{id:'P5-021', skill:'epi', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-ad-risk-factors', multi:true,
 tags:['list'], source:'both',
 stem:'Which are risk factors for atopic dermatitis? Select all that apply.',
 options:[
  {t:'Loss-of-function mutation in the FLG gene', correct:true, why:'Slide 19: loss of function mutation in FLG gene; she named the FLG gene aloud (T@15212).'},
  {t:'Living in an urban environment', correct:true, why:'Slide 19: living in an urban environment can be a risk factor for the patient (T@15212).'},
  {t:'Smaller family size', correct:true, why:'Slide 19: "one finding that was common" (T@15726).'},
  {t:'Higher level of parental education', correct:true, why:'Slide 19; no reason was given in the data, only the association (T@15726).'},
  {t:'Larger family size', correct:false, why:'The reverse: slide 19 lists smaller family size.'},
  {t:'Living in a rural environment', correct:false, why:'The reverse: slide 19 lists living in an urban environment.'}],
 teach:'Also on slide 19: personal or family history of atopic disorders (the atopic triad and the atopic march).',
 cite:P5+' slide 19; T@14303–16145'},

{id:'P5-022', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'trig', concept:'p5-ad-trigger-category',
 tags:['fine-detail'], source:'slide',
 stem:'Wool and polyester clothing fall under which category of atopic dermatitis triggers?',
 options:[
  {t:'Allergens', correct:true, why:'Slide 20 places clothing (wool, polyester) under Allergens, with foods and aeroallergens.'},
  {t:'Irritants', correct:false, why:'Irritants on slide 20: airborne (tobacco smoke, air pollution), cosmetics, fragrances, astringents, irritating soaps, scrubs, detergents, dyes and preservatives.'},
  {t:'Environment', correct:false, why:'Environment on slide 20: extreme temperatures and low humidity.'},
  {t:'Personal factors', correct:false, why:'Personal factors on slide 20: stress, excessive skin washing and sanitizing.'}],
 teach:'Slide 20 columns: Irritants | Allergens (food: eggs, milk, peanut, soy, wheat, nuts, tomato; clothing: wool, polyester; aeroallergens: house dust mites, pollens, pet dander, molds) | Environment | Personal factors.',
 cite:P5+' slide 20; T@16990'},

{id:'P5-023', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'trig', concept:'p5-ad-trigger-personal',
 tags:['fine-detail','two-facts'], source:'both',
 stem:'Which pair are both personal-factor triggers of atopic dermatitis?',
 options:[
  {t:'Stress; excessive skin washing and sanitizing', correct:true, why:'Slide 20, Personal Factors: stress; excessive skin washing and sanitizing ("because you\'re drying out the barrier of the skin", T@17405).'},
  {t:'Stress; low humidity', correct:false, why:'Low humidity is an Environment trigger on slide 20.'},
  {t:'Excessive washing; dyes and preservatives', correct:false, why:'Dyes and preservatives are Irritants on slide 20.'},
  {t:'Extreme temperatures; stress', correct:false, why:'Extreme temperatures are an Environment trigger on slide 20.'}],
 teach:'"So think about Tide ... laundry detergent. Includes a dye in it" (T@16602): dyes are irritants, as are fragrances in lotions and body washes.',
 cite:P5+' slide 20; T@16145–17405'},

{id:'P5-024', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'pres', concept:'p5-ad-infant-pres',
 tags:['two-facts'], source:'both',
 stem:'Which presentation of atopic dermatitis is typical of infancy (0–2 years)?',
 options:[
  {t:'Erythematous papular rash that tends to ooze, on face, scalp, trunk, arms and legs', correct:true, why:'Slide 21, Infancy: erythematous, papular rash that tends to ooze; region face, scalp, trunk, arms and legs (T@17846).'},
  {t:'Dry, cracked skin with lichenification in the creases of neck, elbows and knees', correct:false, why:'That is the childhood column of slide 21 (2 to puberty).'},
  {t:'Diffuse dry scaly skin with lichenification, more on the hands than the face', correct:false, why:'That is the adulthood column of slide 21.'},
  {t:'Shiny, bright red, wet-looking patches in the diaper area', correct:false, why:'That is diaper dermatitis (slide 58), not atopic dermatitis.'}],
 teach:'Infancy timing (slide 21): most common onset between 3–6 months of age; majority have onset by age one. Childhood: up to 90% by age 5.',
 cite:P5+' slide 21; T@17846–18255'},

{id:'P5-025', skill:'epi', prof:'Patel', tier:'new', topic:'p5-ad', sub:'pres', concept:'p5-ad-onset-timing',
 tags:['numbers','two-facts'], source:'both',
 stem:'In infants with atopic dermatitis, when is onset most common, and by what age have up to 90% had onset?',
 options:[
  {t:'3–6 months; age 5', correct:true, why:'Slide 21: most common onset between 3–6 months of age (infancy); up to 90% by age 5 years old (childhood).'},
  {t:'0–3 months; age 2', correct:false, why:'Slide 21 gives 3–6 months for the most common onset; age 2 is the end of the infancy column.'},
  {t:'3–6 months; age 10', correct:false, why:'The onset is right; slide 21 gives age 5 for up to 90%.'},
  {t:'6–12 months; age 5', correct:false, why:'Slide 21: onset most common at 3–6 months; the majority have onset by age one.'}],
 teach:'"By the time they turn 1, you most likely will see a diagnosis if they will have eczema" (T@18255). Adulthood (slide 21): may have resolution by adulthood (70–90%).',
 cite:P5+' slide 21; T@18255, T@19027'},

{id:'P5-026', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'pres', concept:'p5-ad-adult-region',
 tags:['fine-detail'], source:'slide',
 stem:'Where is atopic dermatitis more common in adults than in infants?',
 options:[
  {t:'Hands, neck, inner elbows, back of knees and ankles', correct:true, why:'Slide 21, Adulthood: less common on the face and more common on the hands, neck, inner elbows, back of knees, and ankles.'},
  {t:'Face, scalp and trunk', correct:false, why:'Face and scalp are the infant regions on slide 21; in adults AD is less common on the face.'},
  {t:'Buttocks, upper thighs and genital region', correct:false, why:'That is where diaper dermatitis erythema appears (slide 58).'},
  {t:'Scalp, nails and lower back', correct:false, why:'Not the adult AD regions on slide 21.'}],
 teach:'The adult case on slide 15: a 21-year-old with itching, dryness and irritation on the back of the knees and inside of the elbows.',
 cite:P5+' slides 15, 21; T@19481'},

{id:'P5-027', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'pres', concept:'p5-ad-onset-persistence',
 tags:['reasoning'], source:'both',
 stem:'How does the age of onset of atopic dermatitis relate to how long the disease persists?',
 options:[
  {t:'Earlier onset, longer persistence', correct:true, why:'Slide 22: age of onset predicts persistence of AD; "the earlier the onset of the patient, the longer the persistence of the disease state" (T@20296).'},
  {t:'Later onset, longer persistence', correct:false, why:'The reverse of slide 22: persistence was lowest for late onset.'},
  {t:'Onset age does not predict persistence', correct:false, why:'Slide 22\'s title says it does.'},
  {t:'Infant onset nearly always resolves by age 5', correct:false, why:'Slide 22: infant (early) onset has the highest proportion with persistent disease.'}],
 teach:'Slide 22 plots early-, mid- and late-onset groups; the early-onset line stays highest.',
 cite:P5+' slide 22; T@19886–20296'},

{id:'P5-028', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-scorad-ranges',
 tags:['numbers'], source:'both',
 stem:'On the SCORAD scale, which ranges define mild, moderate and severe atopic dermatitis?',
 options:[
  {t:'Mild < 25; moderate 25–50; severe > 50', correct:true, why:'Slide 23, SCORAD scale: mild < 25, moderate 25–50, severe > 50 (T@20672).'},
  {t:'Mild < 20; moderate 20–40; severe > 40', correct:false, why:'Slide 23 uses 25 and 50 as the cut-offs.'},
  {t:'Mild < 25; moderate 25–40; severe > 40', correct:false, why:'A score of 40 is moderate (her case, slide 26); severe begins above 50.'},
  {t:'Mild < 10; moderate 10–25; severe > 25', correct:false, why:'Slide 23: below 25 is still mild.'}],
 teach:'SCORAD (SCORing Atopic Dermatitis) is a clinical tool for the extent and severity of AD; there are many tools and no gold standard (slide 23). The physician calculates it; the pharmacist needs to know mild, moderate and severe (T@21052).',
 cite:P5+' slide 23; T@20672–21052'},

{id:'P5-029', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-severity-sleep',
 tags:['fine-detail'], source:'both',
 stem:'A patient has widespread dry skin, incessant itching, thickening and oozing, and loses sleep every night. What severity is this?',
 options:[
  {t:'Severe', correct:true, why:'Slide 23, Severe: widespread dry skin, incessant itching, redness, thickening, bleeding, oozing, severe limitation to activities, and nightly loss of sleep ("biggest key here is nightly loss of sleep", T@21818).'},
  {t:'Moderate', correct:false, why:'Moderate on slide 23: mild characteristics with frequent itching and a moderate impact on everyday activities and sleep, not nightly loss of sleep.'},
  {t:'Mild', correct:false, why:'Mild on slide 23: areas of dry skin, infrequent itching, little impact on everyday activities, sleep and psychosocial wellbeing.'},
  {t:'Chronic', correct:false, why:'Chronic is a status (lichenified papules or plaques, slide 24), not a severity grade.'}],
 teach:'"I\'ve highlighted and underlined the certain characteristics that I want you to understand the difference between mild, moderate, and severe" (T@21818).',
 cite:P5+' slide 23; T@21052–21818'},

{id:'P5-030', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-severity-moderate-desc',
 tags:['fine-detail'], source:'both',
 stem:'Which description separates moderate from mild atopic dermatitis?',
 options:[
  {t:'Frequent itching with a moderate impact on activities and sleep', correct:true, why:'Slide 23, Moderate: mild characteristics with frequent itching, moderate impact on everyday activities, sleep (T@21419).'},
  {t:'Infrequent itching with small areas of redness', correct:false, why:'That is mild on slide 23.'},
  {t:'Nightly loss of sleep and severe limitation to activities', correct:false, why:'That is severe on slide 23.'},
  {t:'Lichenified plaques on the flexures', correct:false, why:'Lichenification marks the chronic status (slide 24), not a severity grade.'}],
 teach:'Severity (slide 23) and status (slide 24) are separate calls: her poll asked for both together.',
 cite:P5+' slide 23; T@21419'},

{id:'P5-031', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-status-defs',
 tags:['fine-detail','two-facts'], source:'both',
 stem:'Which feature separates subacute from acute lesions, and which separates chronic from subacute?',
 options:[
  {t:'Dryness; lichenification', correct:true, why:'Slide 24: subacute, dry inflamed papules, patches or plaques (dry highlighted); chronic, lichenified papules or plaques. "The difference between chronic and subacute" is lichenification; between subacute and acute, "that drying factor" (T@22539).'},
  {t:'Oozing; dryness', correct:false, why:'Oozing and crust belong to acute lesions (slide 24: acutely inflamed papules, vesicles, exudate, crusts); dryness marks subacute.'},
  {t:'Lichenification; dryness', correct:false, why:'Reversed: dryness marks subacute, lichenification marks chronic (slide 24).'},
  {t:'Itching; oozing', correct:false, why:'Pruritus is present in all three statuses (slide 24: pruritic papules); the dividing features are dryness and lichenification.'}],
 teach:'"So lichenification, chronic, dryness, subacute. In acute, we know is the standard presentation, which is inflammation, redness, the itching is there, but the dryness is not present" (T@26757). She defines lichenification as the silvery, scaly plaque (T@18613).',
 cite:P5+' slide 24; T@22171–22904, T@26757'},

{id:'P5-032', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-case-severity-status',
 tags:['poll','verbatim','case'], source:'both',
 stem:'A 21-year-old man has persistent pruritus on his knees and elbows, worse over 2–3 months. The skin is dry and inflamed; no infection and no lichenified plaques; SCORAD 40. How would you best describe the severity/status of this patient\'s clinical presentation?',
 options:[
  {t:'Mild, Acute', correct:false, why:'SCORAD 40 is not mild (< 25), and dry skin is not acute (slides 23–24).'},
  {t:'Moderate, Acute', correct:false, why:'Moderate is right (25–50), but the skin is dry, which makes it subacute; acute lesions are not dry (T@26353–26757). The second most common answer in class.'},
  {t:'Moderate, Subacute', correct:true, why:'SCORAD 40 falls in 25–50, moderate (slide 23); dry and inflamed with no lichenified plaques is subacute (slide 24). Her answer (T@25991–26757).'},
  {t:'Severe, Subacute', correct:false, why:'Severe needs SCORAD > 50 (slide 23).'}],
 teach:'Her PollEv of 11/06 for the case on slides 26, 49 and 54 (CC: "The itching won\'t stop, and I don\'t sleep well at night"). Read the score for severity, then the physical assessment for status.',
 cite:P5+' slides 23–24, 26; PollEv 11/06; T@24910–26757'},

{id:'P5-033', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'p5-case-severe-chronic',
 tags:['case','two-facts'], source:'slide',
 stem:'A 35-year-old has SCORAD 62, thick lichenified plaques on the hands and neck, and wakes every night from itching. Severity and status?',
 options:[
  {t:'Severe, chronic', correct:true, why:'SCORAD > 50 is severe (slide 23); lichenified plaques are the chronic status (slide 24).'},
  {t:'Severe, subacute', correct:false, why:'Severe is right; lichenification makes the status chronic, not subacute (slide 24).'},
  {t:'Moderate, chronic', correct:false, why:'Moderate ends at 50 on slide 23; 62 is severe.'},
  {t:'Moderate, acute', correct:false, why:'Neither: SCORAD 62 is severe and lichenified plaques are chronic (slides 23–24).'}],
 teach:'Nightly loss of sleep fits severe as well (slide 23).',
 cite:P5+' slides 23–24'},

{id:'P5-034', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'comp', concept:'p5-ad-complications', multi:true,
 tags:['list'], source:'both',
 stem:'Which are complications of atopic dermatitis? Select all that apply.',
 options:[
  {t:'Sleep disturbances', correct:true, why:'Slide 25: sleep disturbances, the first complication she named (T@22904).'},
  {t:'Depression', correct:true, why:'Slide 25: depression, severe impact on quality of life (T@23372).'},
  {t:'Skin infections with S. aureus', correct:true, why:'Slide 25: skin infections, S. aureus.'},
  {t:'Infection with herpes simplex virus', correct:true, why:'Slide 25: prone to infections with herpes simplex virus.'},
  {t:'Candida albicans infection of the diaper area', correct:false, why:'Candida albicans is a complication of diaper dermatitis (slide 67), not on the AD complications slide.'},
  {t:'Psoriatic arthritis', correct:false, why:'A comorbidity of psoriasis, not an AD complication on slide 25.'}],
 teach:'Slide 25 also lists the impact on quality of life of the patient and the family. Scratching leads to bleeding and oozing, which raises the risk of infection (T@23372).',
 cite:P5+' slide 25; T@22904–23787'},

{id:'P5-035', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'p5-skin-layers-three',
 tags:['recall'], source:'both',
 stem:'Which are the three layers of the skin, outer to inner?',
 options:[
  {t:'Epidermis, dermis, subcutis', correct:true, why:'Slide 9; (T@6049) "your first layer is your epidermis ... The middle layer is called the dermis, and the last layer is called the subcutis."'},
  {t:'Dermis, epidermis, subcutis', correct:false, why:'The epidermis is the outer layer (slide 9).'},
  {t:'Epidermis, subcutis, dermis', correct:false, why:'The subcutis is the innermost layer (slide 9).'},
  {t:'Stratum corneum, dermis, epidermis', correct:false, why:'The stratum corneum is part of the epidermis, not a separate third layer.'}],
 teach:'"I don\'t need you to need to know anything, you know, but that" (T@6438): the barrier she discusses in AD is the epidermis (T@28865).',
 cite:P5+' slide 9; T@6049–6438'},

/* ---- Goals, skin barrier, non-drug care, moisturizers, counseling --------- */
{id:'P5-036', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'goals', concept:'p5-ad-goals', multi:true,
 tags:['list'], source:'both',
 stem:'Which are treatment goals for atopic dermatitis? Select all that apply.',
 options:[
  {t:'Eliminate triggers', correct:true, why:'Slide 27: eliminate triggers, the first goal (T@27155).'},
  {t:'Prevent secondary infections', correct:true, why:'Slide 27: prevent secondary infections (T@27155).'},
  {t:'Reduce trans-epidermal water loss (TEWL)', correct:true, why:'Slide 27: reduce trans-epidermal water loss, by strengthening the barrier with emollients (T@27523).'},
  {t:'Minimize adverse drug reactions', correct:true, why:'Slide 27: do NOT use oral antibiotics or topical antibiotics over large areas of skin.'},
  {t:'Use topical antibiotics over the affected areas', correct:false, why:'The reverse: slide 27, under minimize ADRs, says not to use oral antibiotics or topical antibiotics over large areas of skin.'},
  {t:'Cure the disease within 2 weeks', correct:false, why:'AD has no cure (slide 17); the goals reduce symptoms and prevent flares.'}],
 teach:'Slide 27, six goals: eliminate triggers; reduce symptoms (pruritus, dermatitis); prevent future flare-ups; prevent secondary infections; minimize adverse drug reactions; reduce TEWL.',
 cite:P5+' slide 27; T@27155–27992'},

{id:'P5-037', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'goals', concept:'p5-fix-barrier-steps',
 tags:['two-facts'], source:'both',
 stem:'To "fix the skin barrier", which step goes with "Don\'t strip off the weakened epidermis"?',
 options:[
  {t:'Use gentle cleansers and limit bathing time', correct:true, why:'Slide 29: don\'t strip off the weakened epidermis, use gentle cleansers, limit bathing time (T@28865–29258).'},
  {t:'Moisturize with thick emollients and maintain hydration', correct:false, why:'That goes with "help re-establish the epidermis" (slide 29).'},
  {t:'Topical medications to reduce inflammation and scratching', correct:false, why:'That goes with "reduce inflammation" (slide 29).'},
  {t:'Exfoliate lesions gently with a body scrub', correct:false, why:'She advised against abrasive scrubs: "that\'s the area that we\'re avoiding the abrasion" (T@29916–30366).'}],
 teach:'Slide 29: three parts, each with its measures: don\'t strip (gentle cleansers, limit bathing time); help re-establish the epidermis (thick emollients, maintain hydration); reduce inflammation (topical medications).',
 cite:P5+' slide 29; T@28865–30366'},

{id:'P5-038', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-bleach-bath',
 tags:['numbers','two-facts'], source:'both',
 stem:'A bleach bath (0.005% sodium hypochlorite) is suggested for which patients, and how often?',
 options:[
  {t:'Moderate–severe AD; twice a week', correct:true, why:'Slide 31: may add bleach (0.005% Na hypochlorite = ½ cup bleach to a full tub of water) twice a week to prevent recurrent bacterial skin infections (moderate–severe). "We\'re not recommending this for mild" (T@31877).'},
  {t:'All severities; daily', correct:false, why:'Daily is the oatmeal or baking soda bath on slide 31; bleach is twice a week and for moderate–severe only.'},
  {t:'Mild AD; twice a week', correct:false, why:'Slide 31 limits it to moderate–severe; she said it is not for mild AD (T@31877).'},
  {t:'Moderate–severe AD; daily', correct:false, why:'The severity is right; slide 31 gives twice a week.'}],
 teach:'Slide 31 note: guidelines state this, but it can lead to irritation. "My recommendation is, this is very much so last line" (T@32279); soak about 10 minutes (T@31877).',
 cite:P5+' slide 31; T@31505–32279'},

{id:'P5-039', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-bleach-amount',
 tags:['numbers'], source:'slide',
 stem:'How much household bleach makes a 0.005% sodium hypochlorite bath?',
 options:[
  {t:'½ cup in a full tub of water', correct:true, why:'Slide 31: 0.005% Na hypochlorite = ½ cup bleach to full tub of water.'},
  {t:'1 cup in a full tub of water', correct:false, why:'Twice the slide 31 amount.'},
  {t:'¼ cup in a full tub of water', correct:false, why:'Half the slide 31 amount.'},
  {t:'½ cup in a gallon of water', correct:false, why:'Slide 31 says a full tub; ½ cup in a gallon would be far stronger.'}],
 teach:'"The guidelines do recommend adding a very small amount of bleach to that water, tub full of water. Um, twice a week to prevent skin infections" (T@31505).',
 cite:P5+' slide 31; T@31505'},

{id:'P5-040', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-bath-practice',
 tags:['two-facts'], source:'both',
 stem:'Which bathing instruction fits her slide for atopic dermatitis?',
 options:[
  {t:'10-minute lukewarm bath, gentle cleanser, pat dry', correct:true, why:'Slide 31: suggest 10-minute lukewarm bath, use gentle cleansers, gentle towel dry pat (T@30763–31131).'},
  {t:'20-minute warm bath, gentle cleanser, rub dry', correct:false, why:'Slide 31: 10 minutes; pat, do not rub: "We\'re patting it down. We\'re not scrubbing it" (T@31131).'},
  {t:'10-minute hot bath, antibacterial soap, pat dry', correct:false, why:'Lukewarm, "so not hot, not cold" (T@30763), with a gentle, dye-free, fragrance-free cleanser.'},
  {t:'5-minute cool shower, scrub, air dry', correct:false, why:'Not the slide 31 practice; abrasive scrubbing worsens a broken epidermis (T@30366).'}],
 teach:'Oatmeal or baking soda may be added to the bath water daily (slide 31). Then an occlusive moisturizer immediately after the bath to trap moisture (slide 31).',
 cite:P5+' slide 31; T@30763–31505'},

{id:'P5-041', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-wet-wrap-tci',
 tags:['two-facts','interaction'], source:'both',
 stem:'A patient using tacrolimus ointment asks about wet wraps for weeping lesions. Which advice fits her slides?',
 options:[
  {t:'Wet wraps are short-term and not used with a topical calcineurin inhibitor', correct:true, why:'Slide 30: wet wrap, short-term and not with topical calcineurin inhibitors (TCIs); slide 51: cool compresses "but not to TCI\'s"; "what medication are we not applying that with? ... TCIs" (T@62649).'},
  {t:'Wet wraps over tacrolimus increase its effect and are preferred', correct:false, why:'She ruled out wet wraps with TCIs (slide 30; T@30366, T@62649).'},
  {t:'Wet wraps may be used nightly for several months', correct:false, why:'Slide 30: wet wrap therapy is short-term.'},
  {t:'Wet wraps replace the need for a moisturizer', correct:false, why:'Not on her slides; moisturizer use continues as basic management (slide 48).'}],
 teach:'In the step-care algorithm, wet-wrap therapy appears as acute treatment to help gain control in severe AD (slide 48).',
 cite:P5+' slides 30, 48, 51; T@30366, T@62649–63034'},

{id:'P5-042', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-compress-weeping',
 tags:['numbers'], source:'both',
 stem:'To dry weeping lesions, how are cool tap water compresses applied?',
 options:[
  {t:'5–20 minutes, 4–6 times daily', correct:true, why:'Slide 51: to dry weeping lesions, apply cool tap water compresses for 5–20 minutes, 4–6 times daily (T@62649).'},
  {t:'20–30 minutes, 2–3 times daily', correct:false, why:'Slide 51 gives 5–20 minutes, 4–6 times daily.'},
  {t:'5–20 minutes, twice weekly', correct:false, why:'Twice weekly is the bleach bath (slide 31); compresses are 4–6 times daily.'},
  {t:'10 minutes, once daily after bathing', correct:false, why:'10 minutes is the bath length (slide 31), not the compress schedule.'}],
 teach:'Slide 51 note: compresses, but not with TCIs.',
 cite:P5+' slide 51; T@62649–63034'},

{id:'P5-043', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'p5-nonpharm-counsel', multi:true,
 tags:['list'], source:'both',
 stem:'Which non-drug counseling points fit atopic dermatitis? Select all that apply.',
 options:[
  {t:'Short showers or baths in tepid water with a non-soap cleanser', correct:true, why:'Slide 51: take short showers or baths, using warm (tepid) water and a non-soap cleanser (T@62240).'},
  {t:'Sponge baths with tepid water in place of full-body bathing', correct:true, why:'Slide 51: substitute sponge baths (with tepid water) for full-body bathing.'},
  {t:'Keep fingernails short; cotton gloves or socks on the hands at night', correct:true, why:'Slide 51: to prevent injury from scratching (T@63034).'},
  {t:'Pat dry after a bath or shower', correct:true, why:'Slide 51: pat dry after bath or shower; "We\'re patting it down. We\'re not scrubbing it" (T@31131).'},
  {t:'Wear snug clothing to hold moisturizer against the skin', correct:false, why:'Slide 51: do not wear tight clothing; slide 30: soft cotton clothing.'}],
 teach:'Slide 51 also: avoid factors that trigger allergic reactions; pat dry after bath or shower.',
 note:'Slide 51 advises remaining in areas with a moderate temperature and low humidity, while slide 20 lists low humidity as a trigger; no item keys the humidity advice (reviews/OPEN_QUESTIONS.md).',
 cite:P5+' slides 30, 51; T@62240–63496'},

{id:'P5-044', skill:'tell', prof:'Patel', tier:'new', topic:'p5-care', sub:'moist', concept:'p5-moist-most-effective',
 tags:['two-facts'], source:'both',
 stem:'Which type of OTC moisturizer is the most effective for atopic dermatitis, and what is its drawback?',
 options:[
  {t:'Petroleum-containing; can be greasy and uncomfortable', correct:true, why:'Slide 32: petroleum-containing, occlusive, can be greasy, uncomfortable; "the most effective on this chart is the petrolatum-containing moisturizers cause it\'s the thickest and it\'ll last the longest" (T@34639).'},
  {t:'Ceramide-containing; burning on broken skin', correct:false, why:'Ceramide creams provide a barrier (slide 32); burning and stinging on broken skin are the urea products\' side effects.'},
  {t:'Emollient lotion; must be applied 3 times a day or more', correct:false, why:'Lotions are the less effective type on slide 32; that application frequency is their drawback.'},
  {t:'Urea-containing; greasy texture', correct:false, why:'Urea products are humectants with burning and stinging on broken skin (slide 32); they are not the most effective.'}],
 teach:'Slide 32 rows: petroleum-containing (Aquaphor, Eucerin, Lubriderm); ceramide-containing creams (CeraVe, Aveeno eczema therapy); urea-containing (Carmol 10%, 20%; Lac-Hydrin 5%); emollient lotions (Cetaphil, Keri Original, Neutrogena), less effective.',
 cite:P5+' slide 32; T@32661–34639'},

{id:'P5-045', skill:'tell', prof:'Patel', tier:'new', topic:'p5-care', sub:'moist', concept:'p5-moist-urea',
 tags:['fine-detail'], source:'both',
 stem:'A moisturizer that is a humectant and can burn or sting on broken skin belongs to which group?',
 options:[
  {t:'Urea-containing (Carmol, Lac-Hydrin)', correct:true, why:'Slide 32: urea-containing, Carmol 10%, 20%, Lac-Hydrin 5%; humectant; side effects burning, stinging, irritation on broken skin (T@33793).'},
  {t:'Ceramide-containing (CeraVe)', correct:false, why:'Ceramide creams provide a barrier (slide 32); no burning is listed for them.'},
  {t:'Petroleum-containing (Aquaphor)', correct:false, why:'Petroleum products are occlusive and can be greasy (slide 32), not humectants.'},
  {t:'Emollient lotion (Cetaphil)', correct:false, why:'Lotions are less effective and need frequent application (slide 32); no burning listed.'}],
 teach:'She called urea products "very limited in use" and mostly humectants, not moisturizing as much as petrolatum or ceramide products (T@33793).',
 cite:P5+' slide 32; T@33793'},

{id:'P5-046', skill:'tell', prof:'Patel', tier:'new', topic:'p5-care', sub:'moist', concept:'p5-moist-aquaphor',
 tags:['fine-detail'], source:'both',
 stem:'Which petroleum-containing moisturizer lists petrolatum alone, without mineral oil?',
 options:[
  {t:'Aquaphor', correct:true, why:'Slide 32: Aquaphor, petrolatum; "Aquaphor is the only petrolatum" (T@33016).'},
  {t:'Eucerin', correct:false, why:'Slide 32: Eucerin, petrolatum and mineral oil.'},
  {t:'Lubriderm', correct:false, why:'Slide 32: Lubriderm, mineral oil, lanolin, petrolatum.'},
  {t:'CeraVe', correct:false, why:'CeraVe is a ceramide-containing cream (glycerin, petroleum, ceramides, hyaluronic acid; slide 32).'}],
 teach:'In her diaper case, Aquaphor was the wrong first-line choice: "Aquaphor is just a petrolatum moisturizer ... we\'re not treating the skin" (T@82081).',
 cite:P5+' slide 32; T@33016, T@82081'},

{id:'P5-047', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'moist', concept:'p5-lotion-frequency',
 tags:['numbers','fine-detail'], source:'both',
 stem:'A patient prefers Cetaphil lotion. How often should it be applied?',
 options:[
  {t:'3 times a day or more, after bathing or washing', correct:true, why:'Slide 32, emollients (Cetaphil lotion, Keri Original, Neutrogena lotion): less effective; apply 3 x/day or more, after bathing/washing.'},
  {t:'Once daily at bedtime', correct:false, why:'Lotions absorb quickly and need to be applied several times a day (slide 32; T@34267).'},
  {t:'Twice weekly', correct:false, why:'Twice weekly is the bleach bath (slide 31).'},
  {t:'Twice daily for 3–7 days', correct:false, why:'That is the OTC hydrocortisone regimen (slide 36).'}],
 teach:'"Remember that creams are thicker. Lotions have a lot more water containing properties in them ... You would have to apply a lotion multiple times in a day" (T@34267).',
 cite:P5+' slide 32; T@34267'},

{id:'P5-048', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'p5-emollient-3-min',
 tags:['numbers'], source:'both',
 stem:'When should an emollient be applied after bathing?',
 options:[
  {t:'Within 3 minutes, while the skin is still damp', correct:true, why:'Slide 52: apply an emollient within 3 minutes after bathing/showering while skin is still damp (T@63496).'},
  {t:'Within 30 minutes, once the skin is fully dry', correct:false, why:'Slide 52 gives 3 minutes, on damp skin, to trap the moisture (slide 31).'},
  {t:'Within 3 minutes, after the skin is fully dry', correct:false, why:'The time is right; the skin should still be damp (slide 52).'},
  {t:'Before bathing, to protect the skin', correct:false, why:'Slide 31: occlusive moisturizers decrease moisture release immediately after the bath.'}],
 teach:'"You can wait a few minutes between the emollient and then the medication" (T@63910).',
 cite:P5+' slides 31, 52; T@63496–63910'},

{id:'P5-049', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'p5-tcs-onset-24-48',
 tags:['numbers','two-facts'], source:'both',
 stem:'When can improvement be expected with a topical steroid, compared with a topical calcineurin inhibitor?',
 options:[
  {t:'24–48 hours; 1–8 weeks', correct:true, why:'Slide 52: improvement can be observed in 24–48 hours; slide 38 (TCIs): response in weeks, continue to apply (1–8 weeks). "Which one was the 1 to 8 weeks? TCIs" (T@64280).'},
  {t:'1–8 weeks; 24–48 hours', correct:false, why:'Reversed: the topical steroid is the fast one (slide 52); TCIs take 1–8 weeks (slide 38).'},
  {t:'3–7 days; 6 weeks', correct:false, why:'3–7 days is the steroid course length (slide 36); 6 weeks is when TCI treatment is reassessed (slide 40).'},
  {t:'24–48 hours; 3 months', correct:false, why:'The steroid figure is right; slide 38 gives 1–8 weeks for TCIs.'}],
 teach:'Slide 52 also: lesions could get worse, especially during the winter and summer months.',
 cite:P5+' slides 38, 52; T@42948, T@64280'},

{id:'P5-050', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'p5-counsel-thin-layer', multi:true,
 tags:['list','poll'], source:'both',
 stem:'A patient starts a topical corticosteroid for atopic dermatitis. Which counseling points fit her slides? Select all that apply.',
 options:[
  {t:'Wash hands before and after applying', correct:true, why:'Slide 52; part of the class answers to her PollEv (T@67682).'},
  {t:'Apply a thin layer and rub in until it vanishes', correct:true, why:'Slides 35, 52; "remember to kinda mention thin layer ... continue to rub the medication in until it disappears" (T@67283).'},
  {t:'Seek help if not better after 7 days', correct:true, why:'Slide 52: do not use longer than 7 days; her PollEv answer, 7 days (T@68450).'},
  {t:'Cover the area with plastic wrap to help it absorb', correct:false, why:'"We don\'t want to wrap the medication cause that\'ll increase the absorption" (T@40748).'},
  {t:'Store it in the bathroom cabinet', correct:false, why:'Slide 35: store in a cool, dry, room temperature location; "this is not gonna be in the bathroom" (T@37049).'}],
 teach:'Her PollEv: "What would you educate the patient on to optimize the use of the medication appropriately?" (open response; T@67283–68043).',
 cite:P5+' slides 35, 52; PollEv 11/06; T@37049, T@40748, T@67283–68450'},

{id:'P5-051', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'p5-otc-followup-steroid-atrophy',
 tags:['referral'], source:'slide',
 stem:'A patient using an OTC topical steroid develops skin atrophy at the site. What is advised?',
 options:[
  {t:'Discontinue the steroid and refer to a physician', correct:true, why:'Slide 33: if atrophy of the skin or infection occurs while using the topical steroid, discontinue and refer to a physician.'},
  {t:'Switch to a higher-potency steroid', correct:false, why:'Atrophy is an adverse effect of topical steroids (slide 35); slide 33 says discontinue and refer.'},
  {t:'Continue for the full 14 days, then stop', correct:false, why:'Slide 33: discontinue when atrophy occurs.'},
  {t:'Apply the steroid under occlusion', correct:false, why:'Occlusion raises absorption (T@40748); slide 33 says discontinue and refer.'}],
 teach:'Skin atrophy is on the topical corticosteroid adverse effect list (slide 35).',
 cite:P5+' slides 33, 35'},

{id:'P5-052', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'p5-pharmacist-role', multi:true,
 tags:['list'], source:'both',
 stem:'Which are pharmacist roles in managing atopic dermatitis? Select all that apply.',
 options:[
  {t:'Improve adherence through patient education', correct:true, why:'Slide 50: improve adherence through patient education (T@61404).'},
  {t:'Engage in therapy optimization and monitoring', correct:true, why:'Slide 50: engage in therapy optimization and monitoring of how the patient applies and responds (T@61404).'},
  {t:'Recommend appropriate moisturizers and OTC products', correct:true, why:'Slide 50: recommend appropriate moisturizers and OTC products (T@61784).'},
  {t:'Calculate the SCORAD score for the chart', correct:false, why:'"We do not need to calculate the score at scale score. That is on the physician to do so" (T@21052).'},
  {t:'Sign the prior authorization appeal statement', correct:false, why:'"We unfortunately are not signed providers at this point in the state of Texas, so the PCP would need to write a statement" (T@66410).'}],
 teach:'Slide 50 also: provide patient-friendly education on therapy plans; always provide accessible support.',
 cite:P5+' slide 50; T@21052, T@61404–62240, T@66410'},

{id:'P5-053', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'access', concept:'p5-pa-denied',
 tags:['reasoning'], source:'both',
 stem:'Prior authorization for dupilumab is denied. What is the next step on her slide?',
 options:[
  {t:'Appeal, with a peer-to-peer conversation', correct:true, why:'Slide 53: if prior authorizations are denied, appeals and peer-to-peer conversations can be completed as a next step to obtain coverage; "We\'re not accepting a denial" (T@65928).'},
  {t:'Switch to a JAK inhibitor without prior authorization', correct:false, why:'JAK inhibitors are specialty, last-line agents (slide 46); slide 53 gives an appeal as the next step.'},
  {t:'Accept the denial and restart topical therapy', correct:false, why:'Slide 53 and T@65928: send an appeal.'},
  {t:'Dispense it and bill the patient later', correct:false, why:'Not on slide 53; the options are appeals, peer-to-peer, and manufacturer assistance programs or grant foundations.'}],
 teach:'Slide 53: high out-of-pocket costs, limited formularies, prior authorization and step therapy are barriers; manufacturer patient assistance programs and grant foundations can provide access for patients with limited or no coverage.',
 cite:P5+' slide 53; T@65139–66862'},

/* ---- Topical corticosteroids (slides 35-37) ------------------------------- */
{id:'P5-054', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-tcs-adr', multi:true,
 tags:['list'], source:'both',
 stem:'Which are adverse effects of topical corticosteroids? Select all that apply.',
 options:[
  {t:'Skin atrophy', correct:true, why:'Slide 35 lists skin atrophy among the topical corticosteroid ADRs.'},
  {t:'Delayed wound healing', correct:true, why:'Slide 35: delayed wound healing; she named it among the topical side effects (T@35871).'},
  {t:'Acne', correct:true, why:'Slide 35; "a possible sign of some acne" (T@35871).'},
  {t:'Alopecia', correct:true, why:'Slide 35 lists alopecia among the topical corticosteroid ADRs.'},
  {t:'Coughing and flu-like symptoms', correct:false, why:'Those are on the TCI adverse effect list (slide 38).'},
  {t:'Ocular adverse events', correct:false, why:'A common adverse event of tralokinumab (slide 45).'}],
 teach:'Slide 35 ADR list: skin burning, tingling, cracking, pruritus, acne, alopecia, headache, skin atrophy, delayed wound healing. They are used anyway because the course is short and the steroid decreases inflammation (T@36268).',
 cite:P5+' slides 35, 38, 45; T@35871–36268'},

{id:'P5-055', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-tcs-contraindication',
 tags:['two-facts'], source:'slide',
 stem:'Which use is a contraindication to a topical corticosteroid?',
 options:[
  {t:'Treatment of diaper dermatitis', correct:true, why:'Slide 35 lists treatment of diaper dermatitis among the contraindications; slide 65: hydrocortisone or other topical corticosteroid, do not use as self-care for diaper dermatitis.'},
  {t:'Anal genital pruritus', correct:false, why:'An indication of topical corticosteroids on slide 35.'},
  {t:'Hemorrhoids', correct:false, why:'An indication of topical corticosteroids on slide 35.'},
  {t:'Corticosteroid-responsive dermatoses', correct:false, why:'The first indication on slide 35.'}],
 teach:'Slide 35 contraindications: hypersensitivity to steroids, systemic fungal infections, obstruction, abscess, peritonitis, treatment of diaper dermatitis. Indications: corticosteroid-responsive dermatoses, anal genital pruritus, hemorrhoids, ulcerative colitis.',
 cite:P5+' slides 35, 65'},

{id:'P5-056', skill:'pk', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-tcs-absorption',
 tags:['pk'], source:'both',
 stem:'Which factors change how much of a topical corticosteroid is absorbed?',
 options:[
  {t:'Age, skin integrity, skin thickness and anatomic location', correct:true, why:'Slide 35, pharmacokinetics: absorption varies depending on age, skin integrity, thickness of skin, and anatomic location (T@36649).'},
  {t:'Food intake, gastric pH and CYP3A4 activity', correct:false, why:'Those affect oral drugs; slide 35 lists skin and patient factors for topical absorption.'},
  {t:'Time of day and room temperature only', correct:false, why:'Not on slide 35; storage temperature is a counseling point, not an absorption factor.'},
  {t:'Kidney function and body weight', correct:false, why:'Not the factors on slide 35.'}],
 teach:'Occlusion raises absorption too: "we don\'t want to wrap the medication cause that\'ll increase the absorption" (T@40748).',
 cite:P5+' slide 35; T@36649, T@40748'},

{id:'P5-057', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-otc-hc-regimen',
 tags:['numbers','two-facts'], source:'both',
 stem:'What is the OTC hydrocortisone 1% regimen for an atopic dermatitis flare?',
 options:[
  {t:'Twice daily for up to 3–7 days, never past 2 weeks', correct:true, why:'Slide 36: applied twice daily for max 3–7 days, or until the flare-up is cleared; not resolved in 7 days, seek assistance; do not apply for longer than 2 weeks (T@37425–37900).'},
  {t:'Once daily for 7–14 days', correct:false, why:'Slide 36 gives twice daily for a maximum of 3–7 days; at 7 days without resolution the patient seeks assistance.'},
  {t:'Three times daily for 2 weeks', correct:false, why:'Slide 36: twice daily, max 3–7 days.'},
  {t:'Twice daily for 1–8 weeks', correct:false, why:'1–8 weeks is the TCI response time (slide 38).'}],
 teach:'"Within 7 days, I want you to also remember that that is also when we need to seek assistance if it still hasn\'t resolved ... we\'re also recommending that the patient not use it past 14 days" (T@37425–37900).',
 cite:P5+' slide 36; T@37425–37900'},

{id:'P5-058', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-hc-face-only',
 tags:['two-facts'], source:'both',
 stem:'Which topical corticosteroid and strength may be used on the face?',
 options:[
  {t:'Hydrocortisone 1%', correct:true, why:'Slide 36: hydrocortisone 1%, can use on body, always for face; "this is the only dose and strength that you can utilize on your face" (T@37425); slide 48: low potency including face.'},
  {t:'Mometasone furoate 0.1% cream', correct:false, why:'Medium potency (slide 37); slide 48 limits medium potency to "except face".'},
  {t:'Triamcinolone acetonide 0.1%', correct:false, why:'Medium potency (slide 37), used except on the face (slide 48).'},
  {t:'Clobetasol propionate 0.05%', correct:false, why:'Very high potency (slide 37).'}],
 teach:'"But what strength and what medication of a corticosteroid is only applied to the face? Good. Hydrocortisone 1%" (T@56931).',
 cite:P5+' slides 36–37, 48; T@37425, T@56931'},

{id:'P5-059', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-tcs-storage-duration',
 tags:['two-facts'], source:'both',
 stem:'Which pair of topical corticosteroid counseling points is on her slide?',
 options:[
  {t:'Store cool, dry, room temperature; do not apply longer than 2 weeks', correct:true, why:'Slide 35 counseling: store in a cool, dry, room temperature location; do not apply for longer than 2 weeks (T@37049).'},
  {t:'Refrigerate; do not apply longer than 2 weeks', correct:false, why:'Refrigeration is for dupilumab (slide 43); topical steroids are stored at room temperature.'},
  {t:'Store cool and dry; do not apply longer than 6 weeks', correct:false, why:'6 weeks is the TCI reassessment point (slide 40); topical steroids stop at 2 weeks.'},
  {t:'Store in the bathroom; apply a thick layer', correct:false, why:'Not the bathroom (T@37049), and a thin layer rubbed in gently (slide 35).'}],
 teach:'Slide 35 counseling: apply to a clean, dry area; a thin layer, rubbed in gently until the medication vanishes; store cool, dry, room temperature; not longer than 2 weeks.',
 cite:P5+' slide 35; T@36649–37049'},

{id:'P5-060', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-vehicle-order',
 tags:['fine-detail'], source:'both',
 stem:'Which order runs from the strongest to the weakest steroid vehicle?',
 options:[
  {t:'Ointment > cream > lotion > solution > gel > spray', correct:true, why:'Slide 37: highest–weakest: ointments > creams > lotions > solutions > gels > sprays (T@38869).'},
  {t:'Cream > ointment > lotion > gel > solution > spray', correct:false, why:'Ointment comes first: "an ointment is the thickest" (T@38869).'},
  {t:'Ointment > cream > gel > lotion > solution > spray', correct:false, why:'Gel comes after lotion and solution on slide 37.'},
  {t:'Ointment > lotion > cream > solution > gel > spray', correct:false, why:'Cream is second, then lotion (slide 37).'}],
 teach:'"Steroid vehicle influences the strength of the medication" (slide 37). The thicker the vehicle, the longer it lasts on the skin (T@38498–38869).',
 cite:P5+' slide 37; T@38498–38869'},

{id:'P5-061', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-mometasone-vehicle',
 tags:['two-facts','fine-detail'], source:'both',
 stem:'Mometasone furoate 0.1% ointment and mometasone furoate 0.1% cream fall in which potency classes?',
 options:[
  {t:'Ointment high; cream medium', correct:true, why:'Slide 37 (red arrow): mometasone furoate 0.1% ointment, class II high potency; 0.1% cream, class III–IV medium potency. "Highlight that, please, so you understand that there is a difference there" (T@39633).'},
  {t:'Both medium', correct:false, why:'Same strength, different vehicle: the ointment is high potency (slide 37).'},
  {t:'Ointment very high; cream high', correct:false, why:'Very high on slide 37 is clobetasol propionate 0.05%; the mometasone ointment is high and the cream medium.'},
  {t:'Ointment medium; cream high', correct:false, why:'Reversed: the ointment, the stronger vehicle, is the high-potency one (slide 37).'}],
 teach:'"So ointment, mometasone, 0.1%, high potency. Mometasone 0.1% cream, medium potency" (T@39633).',
 cite:P5+' slide 37; T@39633–40031'},

{id:'P5-062', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-clobetasol-very-high',
 tags:['two-facts'], source:'both',
 stem:'Clobetasol propionate 0.05% is in which potency class, and in which dosage forms?',
 options:[
  {t:'Very high; cream, foam, ointment', correct:true, why:'Slide 37: class I very high potency, clobetasol propionate 0.05%, cream, foam, ointment (T@40031).'},
  {t:'High; cream, foam, ointment, solution', correct:false, why:'That is betamethasone dipropionate 0.05% (high) on slide 37.'},
  {t:'Very high; ointment only', correct:false, why:'Ointment only is augmented betamethasone dipropionate 0.05% (very high) on slide 37, not an arrowed drug.'},
  {t:'High; cream, gel, ointment, solution', correct:false, why:'That is fluocinonide 0.05% (high) on slide 37.'}],
 teach:'The arrowed drugs on slide 37, the ones to concentrate on (T@37900): clobetasol propionate 0.05% (very high); betamethasone dipropionate 0.05%, fluocinonide 0.05%, mometasone furoate 0.1% ointment (high); mometasone furoate 0.1% cream, triamcinolone acetonide 0.1% (medium); hydrocortisone 0.25%, 0.5%, 1% (lowest, OTC).',
 cite:P5+' slide 37; T@37900, T@40031'},

{id:'P5-063', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-triamcinolone-medium',
 tags:['fine-detail'], source:'both',
 stem:'Which arrowed topical corticosteroid is medium potency and comes as a cream or an ointment?',
 options:[
  {t:'Triamcinolone acetonide 0.1%', correct:true, why:'Slide 37, class III–IV medium potency: triamcinolone acetonide 0.1%, cream, ointment (T@39277: "most commonly prescribed, mometasone and triamcinolone, 0.1% ... the triamcinolone comes in the ointment formulation").'},
  {t:'Fluocinonide 0.05%', correct:false, why:'High potency (class II) on slide 37.'},
  {t:'Betamethasone dipropionate 0.05%', correct:false, why:'High potency (class II) on slide 37.'},
  {t:'Hydrocortisone 1%', correct:false, why:'Lowest potency (class VII), OTC, on slide 37.'}],
 teach:'Mometasone furoate 0.1% is medium only as the cream; its ointment is high (slide 37).',
 cite:P5+' slide 37; T@39277'},

{id:'P5-064', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-high-potency-arrowed', multi:true,
 tags:['list','fine-detail'], source:'slide',
 stem:'Which arrowed products are high potency (class II)? Select all that apply.',
 options:[
  {t:'Betamethasone dipropionate 0.05%', correct:true, why:'Slide 37, class II high potency (cream, foam, ointment, solution).'},
  {t:'Fluocinonide 0.05%', correct:true, why:'Slide 37, class II high potency (cream, gel, ointment, solution).'},
  {t:'Mometasone furoate 0.1% ointment', correct:true, why:'Slide 37, class II high potency (red arrow on the ointment).'},
  {t:'Mometasone furoate 0.1% cream', correct:false, why:'Medium potency (class III–IV) on slide 37.'},
  {t:'Clobetasol propionate 0.05%', correct:false, why:'Very high potency (class I) on slide 37.'}],
 teach:'"So again, the arrows is what I want you to focus on" (T@40031).',
 cite:P5+' slide 37; T@39633–40417'},

{id:'P5-065', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-hc-lowest-class',
 tags:['two-facts'], source:'both',
 stem:'Hydrocortisone 0.25%, 0.5% and 1% fall in which potency class, and in which dosage forms?',
 options:[
  {t:'Lowest (class VII); cream, lotion, ointment, solution', correct:true, why:'Slide 37: class VII lowest potency, hydrocortisone 0.25%, 0.5%, 1% (OTC), cream, lotion, ointment, solution (T@39277).'},
  {t:'Low (class VI); cream, gel, foam, ointment', correct:false, why:'Class VI on slide 37 is desonide 0.05% (cream, gel, foam, ointment).'},
  {t:'Lower-medium (class V); cream, ointment, solution', correct:false, why:'Class V on slide 37 is hydrocortisone butyrate 0.1% and valerate 0.2%, not plain hydrocortisone.'},
  {t:'Lowest (class VII); cream only', correct:false, why:'Cream only is dexamethasone 0.1% in class VII; hydrocortisone comes in four forms.'}],
 teach:'Slide 36 calls OTC hydrocortisone 1% "low to medium potency product commonly used"; slide 37 classes it as the lowest potency. She called it low potency in the case (T@59799).',
 note:'Slide 36 says "low to medium potency" for OTC hydrocortisone 1%; the table on slide 37 puts it in class VII, lowest. She used "low potency" for it in the case (T@59799) and in the algorithm (T@56931). Items key the class to slide 37 and never offer "low to medium" against "lowest".',
 cite:P5+' slides 36–37; T@39277, T@59799'},

{id:'P5-066', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'pot', concept:'p5-tcs-combination',
 tags:['reasoning'], source:'transcript',
 stem:'For atopic dermatitis, which kind of topical corticosteroid product is recommended?',
 options:[
  {t:'A single-ingredient product', correct:true, why:'"In the case of atopic dermatitis, only single medication agents will be recommended" (T@41713).'},
  {t:'A combination of two steroids, to reach mid potency', correct:false, why:'"We\'re not gonna be recommending that partly because of the difference of the potencies" (T@41333).'},
  {t:'A steroid combined with an antifungal', correct:false, why:'Not recommended for AD; only single agents (T@41713).'},
  {t:'A steroid combined with a topical antibiotic', correct:false, why:'Slide 27: do not use topical antibiotics over large areas; and only single agents for AD (T@41713).'}],
 teach:'If a combination contains clobetasol, its potency follows the higher-potency ingredient (T@41333).',
 cite:P5+' slide 37; T@41333–41713'},

{id:'P5-067', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'p5-tcs-air-dry',
 tags:['numbers'], source:'transcript',
 stem:'A patient will dress over an area just treated with a topical steroid. What did she advise?',
 options:[
  {t:'Rub in until it vanishes, then let it air dry 3–5 minutes before clothing', correct:true, why:'"If it is going to be on a body part, that clothing will be on it, then we usually recommend at least 3 to 5 minutes of letting it air dry" (T@40748).'},
  {t:'Cover it with plastic wrap under the clothing', correct:false, why:'"We don\'t want to wrap the medication cause that\'ll increase the absorption" (T@40748).'},
  {t:'Wait 30–45 minutes before dressing', correct:false, why:'30–45 minutes is how long dupilumab sits out of the refrigerator before injection (slide 43).'},
  {t:'Apply a thick layer so the clothing does not wipe it off', correct:false, why:'Thin layer, rubbed in until it vanishes (slide 35).'}],
 teach:'A student\'s question in class (T@40682–41129).',
 cite:P5+' slide 35; T@40748–41129'},

/* ---- TCIs and crisaborole (slides 38-42) ----------------------------------- */
{id:'P5-068', skill:'class', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tci-line-indication',
 tags:['two-facts'], source:'both',
 stem:'Topical calcineurin inhibitors are used for which severity of atopic dermatitis, and at which line?',
 options:[
  {t:'Mild–moderate; second line after topical steroids', correct:true, why:'Slide 38: mild–moderate AD, second-line option if unresponsive to topical steroids; "Is it first line or second line? Second line" (T@44161).'},
  {t:'Mild–moderate; first line', correct:false, why:'Topical steroids are first line; TCIs are second (slide 38).'},
  {t:'Moderate–severe; third line', correct:false, why:'Third line is crisaborole (slide 41); TCIs are second line.'},
  {t:'Severe only; after dupilumab', correct:false, why:'Dupilumab is for moderate–severe AD after topicals fail (slides 43, 48); TCIs come earlier.'}],
 teach:'Within the class (slide 39): pimecrolimus is for mild-to-moderate eczema, tacrolimus for moderate-to-severe.',
 cite:P5+' slides 38–39; T@41713–42092, T@44161'},

{id:'P5-069', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-pime-vs-tacro',
 tags:['two-facts','fine-detail'], source:'both',
 stem:'Which statement separates pimecrolimus from tacrolimus?',
 options:[
  {t:'Pimecrolimus 1% cream, mild–moderate; tacrolimus ointment, moderate–severe', correct:true, why:'Slide 39: pimecrolimus (Elidel), mild-to-moderate eczema, cream 1%; tacrolimus (Protopic), moderate-to-severe eczema, ointment 0.1% or 0.03% (T@43342–43718).'},
  {t:'Pimecrolimus ointment, moderate–severe; tacrolimus 1% cream, mild–moderate', correct:false, why:'Reversed: pimecrolimus is the cream for mild–moderate (slide 39).'},
  {t:'Pimecrolimus once daily; tacrolimus twice daily', correct:false, why:'Both are applied twice daily to affected skin (slide 39).'},
  {t:'Pimecrolimus from 3 months; tacrolimus from 2 years', correct:false, why:'Both are for children over 2 years and adults (slide 39); 3 months is crisaborole (slide 41).'}],
 teach:'"The bolded areas, the age, what percentage of the medication, what dosage form ... our biggest things to understand with our TCIs" (T@43718). Both reduce the incidence of flares.',
 cite:P5+' slide 39; T@43342–44161'},

{id:'P5-070', skill:'dose', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tacro-strength-age',
 tags:['numbers','case'], source:'both',
 stem:'A 12-year-old with moderate-to-severe atopic dermatitis is prescribed tacrolimus ointment. Which strength fits her age, and how often is it applied?',
 options:[
  {t:'0.03%, twice daily', correct:true, why:'Slide 39: tacrolimus ointment 0.03% for > 2 years of age (2 to 15 years, T@43718); 0.1% for adults (> 16 years); apply twice daily.'},
  {t:'0.1%, twice daily', correct:false, why:'0.1% is for adults over 16 (slide 39).'},
  {t:'0.03%, once daily', correct:false, why:'The strength is right; slide 39 says twice daily.'},
  {t:'1%, twice daily', correct:false, why:'1% is pimecrolimus cream (slide 39), not a tacrolimus strength.'}],
 teach:'"Tacrolimus comes in 0.1%, OK? And that is for adults, which is greater than 16 years old. 0.03% is greater than 2 years of age until 15 years of age" (T@43718).',
 cite:P5+' slide 39; T@43718'},

{id:'P5-071', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tci-counsel-bathe',
 tags:['fine-detail'], source:'both',
 stem:'Which counseling point is on her TCI slide but not on her topical corticosteroid slide?',
 options:[
  {t:'Do not bathe, shower or swim right after applying', correct:true, why:'Slide 38 (TCIs): do not bathe, shower, or swim right after application, "cause we want the medication to absorb" (T@42526); slide 35 (steroids) does not list it.'},
  {t:'Apply a thin layer and rub in until it vanishes', correct:false, why:'On both slides 35 and 38.'},
  {t:'Store in a cool, dry, room temperature location', correct:false, why:'On both slides 35 and 38.'},
  {t:'Apply to a clean and dry area', correct:false, why:'On both slides 35 and 38.'}],
 teach:'Slide 38 adds, for TCIs: do not use in children < 2 years; response in weeks, continue to apply (1–8 weeks). Crisaborole (slide 41) shares the no bathe/shower/swim point.',
 cite:P5+' slides 35, 38, 41; T@42526'},

{id:'P5-072', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tci-bbw', multi:true,
 tags:['list','bbw'], source:'both',
 stem:'Which are part of the topical calcineurin inhibitor black box warning? Select all that apply.',
 options:[
  {t:'Rare cases of lymphoma and skin malignancy', correct:true, why:'Slide 40: rare cases of lymphoma and skin malignancy (T@44161).'},
  {t:'Reassess treatment after 6 weeks', correct:true, why:'Slide 40: reassess treatment after 6 weeks, because of the safety profile (T@44560).'},
  {t:'Use in children under 2 years is not recommended', correct:true, why:'Slide 40: the use in children < 2 years of age is not recommended (T@44928).'},
  {t:'Protect against UV and sun exposure; use sunscreen', correct:true, why:'Slide 40: protect against UV/sun exposure and use sunscreen (T@44928).'},
  {t:'Higher all-cause mortality, including sudden CV death', correct:false, why:'A JAK inhibitor boxed warning (slide 46).'},
  {t:'Do not use with live vaccines', correct:false, why:'A dupilumab contraindication (slides 43–44).'}],
 teach:'Slide 40 also: avoid use on malignant or premalignant skin conditions (cutaneous T-cell lymphoma); use the minimum amount, limited to involved areas; safety of intermittent use for > 1 year has not been established.',
 cite:P5+' slides 40, 43, 46; T@44161–45322'},

{id:'P5-073', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tci-reassess-6wk',
 tags:['numbers','bbw'], source:'both',
 stem:'Under the TCI black box warning, when is treatment reassessed, and for how long has intermittent-use safety not been established?',
 options:[
  {t:'After 6 weeks; beyond 1 year', correct:true, why:'Slide 40: reassess treatment after 6 weeks; safety of intermittent use for > 1 year has not been established (T@44560).'},
  {t:'After 8 weeks; beyond 1 year', correct:false, why:'8 weeks is the end of the 1–8 week response window (slide 38); reassessment is at 6 weeks.'},
  {t:'After 2 weeks; beyond 6 months', correct:false, why:'2 weeks is the topical steroid limit (slide 35); slide 40 gives 6 weeks and 1 year.'},
  {t:'After 6 weeks; beyond 2 years', correct:false, why:'Slide 40: more than 1 year.'}],
 teach:'"We reassess treatment after 6 weeks because of the safety profile. So we are utilizing this class very intermittently, minimum amount necessary" (T@44560).',
 cite:P5+' slides 38, 40; T@44560'},

{id:'P5-074', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'p5-tci-adr',
 tags:['two-facts'], source:'slide',
 stem:'Which adverse effects are on the TCI slide but not on the topical corticosteroid slide?',
 options:[
  {t:'Coughing and flu-like signs and symptoms', correct:true, why:'Slide 38 (TCIs): skin burning, tingling, cracking, pruritus, coughing, flu-like s/sxs. Slide 35 (steroids) has the first four but not these two.'},
  {t:'Skin burning and tingling', correct:false, why:'On both lists (slides 35 and 38): "Side effects very similar to topical corticosteroids" (T@42092).'},
  {t:'Skin atrophy and delayed wound healing', correct:false, why:'Those are on the steroid list (slide 35), not the TCI list.'},
  {t:'Acne and alopecia', correct:false, why:'Steroid adverse effects (slide 35).'}],
 teach:'Contraindication on slide 38: hypersensitivity to the medication class or any component.',
 cite:P5+' slides 35, 38; T@42092'},

{id:'P5-075', skill:'class', prof:'Patel', tier:'new', topic:'p5-tci', sub:'cris', concept:'p5-crisaborole-line',
 tags:['two-facts'], source:'both',
 stem:'Crisaborole is which line of therapy, and for which severity of atopic dermatitis?',
 options:[
  {t:'Third line; mild–moderate', correct:true, why:'Slide 41: mild–moderate AD, third-line option if all other options fail; "after the other two have been trialed" (T@45322).'},
  {t:'Second line; mild–moderate', correct:false, why:'Second line is the TCIs (slide 38).'},
  {t:'Third line; moderate–severe', correct:false, why:'The line is right; slide 41 says mild–moderate.'},
  {t:'First line; mild', correct:false, why:'First line is the topical steroid (slide 48; T@59410).'}],
 teach:'Order for a moderate patient\'s topical therapy (slide 48; T@57389): topical corticosteroid first, TCI second, crisaborole 2% third.',
 cite:P5+' slides 41, 48; T@45322, T@57389'},

{id:'P5-076', skill:'tell', prof:'Patel', tier:'new', topic:'p5-tci', sub:'cris', concept:'p5-age-limits-compare',
 tags:['numbers','two-facts'], source:'both',
 stem:'A 4-month-old has a mild atopic dermatitis flare where a steroid is not appropriate. Which agent\'s age limit allows it?',
 options:[
  {t:'Crisaborole 2% ointment', correct:true, why:'Slides 41–42: do not use in < 3 months; treats flares in infants and children > 3 months, when a steroid is not appropriate or as adjunct.'},
  {t:'Pimecrolimus 1% cream', correct:false, why:'Slides 38–40: not for children under 2 years.'},
  {t:'Tacrolimus 0.03% ointment', correct:false, why:'For > 2 years of age (slide 39).'},
  {t:'Dupilumab injection', correct:false, why:'Not under 6 months of age (slide 43), and it is for moderate–severe AD.'}],
 teach:'Lower age limits on her slides: crisaborole 3 months (slide 41); dupilumab 6 months (slide 43); TCIs 2 years (slide 40); JAK inhibitors over 12 years (slide 46).',
 cite:P5+' slides 39–43; T@45322–46076'},

{id:'P5-077', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tci', sub:'cris', concept:'p5-crisaborole-use',
 tags:['two-facts'], source:'both',
 stem:'How is crisaborole 2% ointment used?',
 options:[
  {t:'Thin layer twice daily to treat flares, when a steroid is not appropriate or as an adjunct', correct:true, why:'Slide 42: apply a thin layer twice daily for mild to moderate eczema; treat flares; only when a steroid is not appropriate or as an adjunct therapy (T@45675).'},
  {t:'Thin layer once daily every day of the year as maintenance', correct:false, why:'"We\'re treating the flares, right? We\'re not applying this every day of our life" (T@46076); slide 42 says twice daily.'},
  {t:'Thick layer three times daily with a wet wrap', correct:false, why:'Slide 42: thin layer, twice daily.'},
  {t:'Twice daily, always in place of a steroid as first-line', correct:false, why:'Slide 41: third-line option; slide 42: when a steroid is not appropriate or as adjunct.'}],
 teach:'Adverse effects (slide 41): skin burning and stinging. Counseling as for TCIs, including no bathing, showering or swimming right after application.',
 cite:P5+' slides 41–42; T@45675–46458'},

{id:'P5-078', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-tci', sub:'cris', concept:'p5-crisaborole-adr',
 tags:['fine-detail'], source:'both',
 stem:'Which adverse effect goes with crisaborole?',
 options:[
  {t:'Skin burning and stinging', correct:true, why:'Slide 41: ADR, skin burning and stinging ("most commonly seen", T@45322).'},
  {t:'Upper respiratory tract infection', correct:false, why:'A tralokinumab adverse event (slide 45).'},
  {t:'Skin atrophy', correct:false, why:'A topical corticosteroid adverse effect (slide 35).'},
  {t:'Ocular adverse events', correct:false, why:'A tralokinumab adverse event (slide 45).'}],
 teach:'Mechanism: refer to the medicinal chemistry and pharmacology slides (slide 41): a PDE-4 inhibitor.',
 cite:P5+' slide 41; T@45322'},

/* ---- Dupilumab, tralokinumab, JAK inhibitors (slides 43-46) -------------- */
{id:'P5-079', skill:'class', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-indications', multi:true,
 tags:['list'], source:'both',
 stem:'Besides moderate–severe atopic dermatitis, which are indications of dupilumab on her slide? Select all that apply.',
 options:[
  {t:'Asthma', correct:true, why:'Slide 43 lists asthma among the indications (T@46851).'},
  {t:'Eosinophilic esophagitis', correct:true, why:'Slide 43 lists eosinophilic esophagitis (T@46851).'},
  {t:'Prurigo nodularis', correct:true, why:'Slide 43 lists prurigo nodularis among the indications.'},
  {t:'Rhinosinusitis with polyposis', correct:true, why:'Slide 43 lists rhinosinusitis with polyposis among the indications.'},
  {t:'Plaque psoriasis', correct:false, why:'Not among the indications on slide 43.'},
  {t:'Diaper dermatitis', correct:false, why:'Not on slide 43; diaper dermatitis is treated with skin protectants (slide 63).'}],
 teach:'Dupilumab (Dupixent) is a monoclonal antibody IL-4 antagonist, a specialty medication that needs close monitoring and prior authorization (slide 43; T@47208).',
 cite:P5+' slide 43; T@46851–47208'},

{id:'P5-080', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-cyp-live',
 tags:['interaction','two-facts'], source:'both',
 stem:'A patient on warfarin is starting dupilumab. Which two cautions on her slide apply to dupilumab?',
 options:[
  {t:'May interact with CYP-450 (adjust warfarin or cyclosporine); no live vaccines', correct:true, why:'Slide 43: may interact with CYP-450 enzymes (may need to adjust warfarin or cyclosporine doses); do not use with live vaccines and < 6 months of age (T@47593–48048).'},
  {t:'Avoid sun exposure; reassess after 6 weeks', correct:false, why:'Those are TCI boxed-warning points (slide 40).'},
  {t:'Risk of thrombosis; higher all-cause mortality', correct:false, why:'Those are JAK inhibitor boxed warnings (slide 46).'},
  {t:'No use under 2 years; do not swim after use', correct:false, why:'TCI points (slide 38); dupilumab\'s age limit is 6 months.'}],
 teach:'"Definitely review your list of live vaccines, you guys. I may include it on a case and then you know to not recommend it" (T@48048).',
 cite:P5+' slide 43; T@47593–48467'},

{id:'P5-081', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-admin',
 tags:['two-facts','numbers'], source:'both',
 stem:'How is dupilumab injected and stored?',
 options:[
  {t:'90° into thigh or lower abdomen; refrigerate, then 30–45 min to room temperature', correct:true, why:'Slide 43: inject at a 90-degree angle into thigh or lower abdomen, may administer in upper arm; rotate sites; store in refrigerator, allow solution to reach room temperature for 30–45 min before administration (T@48832–49587).'},
  {t:'45° into the upper arm only; store at room temperature', correct:false, why:'Slide 43: 90 degrees, thigh or lower abdomen (upper arm allowed); stored in the refrigerator.'},
  {t:'90° into thigh or lower abdomen; inject straight from the refrigerator', correct:false, why:'Let it warm 30–45 minutes first: "It tends to sting less" (T@49587).'},
  {t:'Into the same site each time; refrigerate', correct:false, why:'Slide 43: rotate injection sites.'}],
 teach:'"The lower abdomen hurts the less" (T@48832). Clean and dry the site first; it comes as a pre-filled syringe with or without a needle shield (slides 43–44).',
 cite:P5+' slides 43–44; T@48467–49587'},

{id:'P5-082', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-adult-dose',
 tags:['numbers','two-facts'], source:'both',
 stem:'What is the adult dupilumab dose for atopic dermatitis?',
 options:[
  {t:'600 mg once (two 300 mg injections), then 300 mg every other week', correct:true, why:'Slide 44: adult, initial 600 mg SUBQ once (2 × 300 mg injections), followed by 300 mg every other week (T@49587).'},
  {t:'400 mg once (two 200 mg injections), then 200 mg every other week', correct:false, why:'That is children 6–17 years weighing 30–60 kg (slide 44).'},
  {t:'600 mg once (two 300 mg injections), then 300 mg every 4 weeks', correct:false, why:'Every 4 weeks is children 15–30 kg (slide 44); adults are every other week.'},
  {t:'600 mg once (four 150 mg injections), then 300 mg every other week', correct:false, why:'Four 150 mg injections is the tralokinumab loading dose (slide 45).'}],
 teach:'Slide 44 is marked "NTK" in class; "I want you to only know the adult and children dosing" (T@50408).',
 cite:P5+' slide 44; T@49587'},

{id:'P5-083', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-child-lb',
 tags:['calculation','case'], source:'both',
 stem:'A 13-year-old weighing 99 lb starts dupilumab for moderate-to-severe atopic dermatitis. Which regimen fits?',
 options:[
  {t:'400 mg once, then 200 mg every other week', correct:true, why:'99 lb ÷ 2.2 = 45 kg, in the 30–60 kg band (ages 6–17): initial 400 mg SUBQ once (2 × 200 mg), then 200 mg every other week (slide 44; T@49983).'},
  {t:'600 mg once, then 300 mg every other week', correct:false, why:'Adult dosing is for children over 60 kg (slide 44); 45 kg is not.'},
  {t:'600 mg once, then 300 mg every 4 weeks', correct:false, why:'That is the 15–30 kg band (slide 44).'},
  {t:'300 mg every 4 weeks, no loading dose', correct:false, why:'That is infant dosing, 15 to < 30 kg (slide 44), which she does not ask.'}],
 teach:'"How do we convert pounds to kilos? Good. Divide by 2.2" (T@49983). "I will provide you the weight of the patient" (T@49587).',
 cite:P5+' slide 44; T@49587–49983'},

{id:'P5-084', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-child-light',
 tags:['calculation','case'], source:'both',
 stem:'An 8-year-old weighing 22 kg starts dupilumab. What is the maintenance dose and interval?',
 options:[
  {t:'300 mg every 4 weeks', correct:true, why:'Slide 44, ages 6–17, 15–30 kg: initial 600 mg SUBQ once (2 × 300 mg), followed by 300 mg every 4 weeks (T@49983–50408).'},
  {t:'200 mg every other week', correct:false, why:'That is the 30–60 kg band (slide 44).'},
  {t:'300 mg every other week', correct:false, why:'That is adult dosing, or children over 60 kg (slide 44).'},
  {t:'200 mg every 4 weeks', correct:false, why:'That is infant dosing for 5 to < 15 kg (slide 44).'}],
 teach:'"The dose does increase slightly, but remember, the frequency is also increased ... just once a month" (T@49983–50408): the lightest children get the larger 300 mg dose, less often.',
 cite:P5+' slide 44; T@49983–50408'},

{id:'P5-085', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-child-heavy',
 tags:['calculation','case'], source:'both',
 stem:'A 16-year-old weighing 154 lb starts dupilumab. Which dosing applies?',
 options:[
  {t:'Adult dosing: 600 mg once, then 300 mg every other week', correct:true, why:'154 lb ÷ 2.2 = 70 kg; children 6–17 years over 60 kg use adult dosing (slide 44; T@49983).'},
  {t:'400 mg once, then 200 mg every other week', correct:false, why:'That is 30–60 kg; 70 kg is above 60 (slide 44).'},
  {t:'600 mg once, then 300 mg every 4 weeks', correct:false, why:'That is 15–30 kg (slide 44).'},
  {t:'Not allowed until age 18', correct:false, why:'Slide 44 gives dosing for ages 6–17; slide 43 sets the lower limit at 6 months.'}],
 teach:'Read the weight in pounds, convert once, then place it in the band.',
 cite:P5+' slide 44; T@49983'},

{id:'P5-086', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'p5-dupilumab-combo',
 tags:['two-facts'], source:'both',
 stem:'Dupilumab may be used together with which topical agents?',
 options:[
  {t:'Topical corticosteroids or topical calcineurin inhibitors', correct:true, why:'Slide 44: may be used concomitantly with topical corticosteroids or topical calcineurin inhibitors; "Only those two?" (T@51207).'},
  {t:'Crisaborole only', correct:false, why:'Slide 44 names topical steroids and TCIs.'},
  {t:'Topical JAK inhibitor (ruxolitinib) only', correct:false, why:'Topical ruxolitinib is not named with dupilumab on slide 44.'},
  {t:'None: it replaces all topical therapy', correct:false, why:'Slide 44 allows concomitant topical steroids or TCIs.'}],
 teach:'Dupilumab comes as single-dose boxes; the 600 mg start is two boxes (T@51787).',
 cite:P5+' slide 44; T@51207'},

{id:'P5-087', skill:'tell', prof:'Patel', tier:'new', topic:'p5-sys', sub:'tral', concept:'p5-tralokinumab-target',
 tags:['two-facts','target'], source:'slide',
 stem:'Which statement separates tralokinumab from dupilumab?',
 options:[
  {t:'Tralokinumab inhibits the IL-13 cytokine; dupilumab is an IL-4 antagonist', correct:true, why:'Slide 45: tralokinumab, mechanism of action, IL-13 cytokine inhibitor; slide 43: monoclonal antibody IL-4 antagonist, dupilumab.'},
  {t:'Tralokinumab is an IL-4 antagonist; dupilumab inhibits IL-13', correct:false, why:'Reversed (slides 43, 45).'},
  {t:'Tralokinumab is oral; dupilumab is injected', correct:false, why:'Both are subcutaneous injections (slides 43–45).'},
  {t:'Tralokinumab is a JAK inhibitor; dupilumab is a monoclonal antibody', correct:false, why:'JAK inhibitors are abrocitinib, upadacitinib and ruxolitinib (slide 46); tralokinumab inhibits IL-13.'}],
 teach:'Tralokinumab is an alternative option to dupilumab, for moderate to severe AD not controlled with, or unable to use, topical therapy (slide 45; T@52628).',
 cite:P5+' slides 43, 45; T@52628'},

{id:'P5-088', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'tral', concept:'p5-tralokinumab-dose',
 tags:['numbers','two-facts'], source:'both',
 stem:'How is tralokinumab started and maintained?',
 options:[
  {t:'600 mg as four 150 mg injections; then 300 mg as two 150 mg every other week', correct:true, why:'Slide 45: initial dose 600 mg = four 150 mg injections; maintenance 300 mg as two 150 mg injections every other week; "this medication only comes in that 150 mg dosage form" (T@53003).'},
  {t:'600 mg as two 300 mg injections; then 300 mg every other week', correct:false, why:'That is adult dupilumab (slide 44).'},
  {t:'600 mg as four 150 mg injections; then 300 mg every 4 weeks from the start', correct:false, why:'Every 4 weeks is allowed only for patients under 100 kg with clear skin after 16 weeks (slide 45).'},
  {t:'300 mg as two 150 mg injections; then 150 mg weekly', correct:false, why:'Slide 45: 600 mg to start, 300 mg every other week.'}],
 note:'In class she said "600 mg, which is 450 injections" (T@52628) and then "4 150 mg injections would be the initial dose"; the slide says FOUR 150 mg injections. Keyed to the slide and her correction.',
 teach:'"Not only did we increase frequency of the injections, we increased the number of injections. So not ideal of an option" (T@53419).',
 cite:P5+' slide 45; T@52628–53419'},

{id:'P5-089', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'tral', concept:'p5-tralokinumab-q4w',
 tags:['numbers','two-facts'], source:'both',
 stem:'When can tralokinumab be spaced to every 4 weeks?',
 options:[
  {t:'Body weight under 100 kg and clear skin after 16 weeks', correct:true, why:'Slide 45: in those with body weight < 100 kg who achieve clear skin after 16 wk, can decrease frequency to every 4 wk (T@53003).'},
  {t:'Body weight over 100 kg and clear skin after 12 weeks', correct:false, why:'Slide 45: under 100 kg, after 16 weeks.'},
  {t:'Any weight, once clear skin is reached', correct:false, why:'Slide 45 limits it to body weight under 100 kg, at 16 weeks.'},
  {t:'Under 60 kg, from the first maintenance dose', correct:false, why:'60 kg is the dupilumab child band (slide 44); slide 45 uses 100 kg and 16 weeks.'}],
 teach:'12 weeks belongs to abrocitinib: it may increase from 100 to 200 mg once daily after 12 weeks (slide 46).',
 cite:P5+' slides 45–46; T@53003'},

{id:'P5-090', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-sys', sub:'tral', concept:'p5-tralokinumab-ae',
 tags:['fine-detail'], source:'slide',
 stem:'Which set of common adverse events belongs to tralokinumab?',
 options:[
  {t:'Ocular events, upper respiratory tract infections, injection-site reactions', correct:true, why:'Slide 45: common adverse events, ocular adverse events, upper respiratory tract infections, injection-site reactions.'},
  {t:'Urticaria, angioedema, rash, erythema, injection-site reaction', correct:false, why:'That is the dupilumab ADR list (slide 43).'},
  {t:'Skin burning, tingling, coughing, flu-like symptoms', correct:false, why:'That is the TCI list (slide 38).'},
  {t:'Thrombosis, MACE, malignancy, serious infection', correct:false, why:'JAK inhibitor boxed warnings (slide 46).'}],
 teach:'She named URTI and injection-site reactions as the main ones (T@52628); the slide adds ocular adverse events.',
 cite:P5+' slides 38, 43, 45–46; T@52628'},

{id:'P5-091', skill:'class', prof:'Patel', tier:'new', topic:'p5-sys', sub:'jak', concept:'p5-jak-place',
 tags:['two-facts'], source:'both',
 stem:'For which patients are JAK inhibitors indicated in atopic dermatitis?',
 options:[
  {t:'Moderate–severe AD, over 12 years of age, refractory to other systemic and biologic therapy', correct:true, why:'Slide 46: indicated for moderate-severe AD in > 12 years of age; refractory option, whose disease is not adequately controlled with other systemic, biologic therapies (T@53419–53841).'},
  {t:'Mild–moderate AD, 2 years and older, after a topical steroid', correct:false, why:'That describes the TCIs (slides 38–39).'},
  {t:'Moderate–severe AD, 6 months and older, first systemic agent', correct:false, why:'6 months is dupilumab\'s lower age limit (slide 43); JAK inhibitors are a last-line refractory option.'},
  {t:'Mild–moderate AD, 3 months and older, third line', correct:false, why:'That is crisaborole (slide 41).'}],
 teach:'"This is why it\'s absolute last-line refractory option if we have nothing else to rely on" (T@54970). Patients are followed every 2 weeks (T@55363).',
 cite:P5+' slide 46; T@53419–55363'},

{id:'P5-092', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'jak', concept:'p5-jak-doses',
 tags:['numbers','two-facts'], source:'slide',
 stem:'Which JAK inhibitor regimen matches her slide?',
 options:[
  {t:'Abrocitinib 100 mg orally once daily, may increase to 200 mg after 12 weeks', correct:true, why:'Slide 46: abrocitinib (Cibinqo) 100 mg by mouth once daily, may increase to 200 mg once daily after 12 weeks.'},
  {t:'Upadacitinib 100 mg orally once daily, may increase to 200 mg', correct:false, why:'Slide 46: upadacitinib (Rinvoq) 15 mg once daily, may increase to 30 mg.'},
  {t:'Abrocitinib 15 mg orally once daily, may increase to 30 mg', correct:false, why:'15 to 30 mg is upadacitinib (slide 46).'},
  {t:'Ruxolitinib 15 mg orally once daily', correct:false, why:'Ruxolitinib (Opzelura) is topical: apply 60 g per week or 100 g per two weeks (slide 46).'}],
 teach:'Upadacitinib (Rinvoq) is the most commonly prescribed JAK inhibitor (T@53841).',
 cite:P5+' slide 46; T@53841'},

{id:'P5-093', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'jak', concept:'p5-ruxolitinib-topical',
 tags:['numbers','two-facts'], source:'slide',
 stem:'Which JAK inhibitor is topical, and what is its limit?',
 options:[
  {t:'Ruxolitinib; 60 g per week or 100 g per two weeks', correct:true, why:'Slide 46: ruxolitinib (Opzelura), apply 60 g per week or 100 g per two weeks.'},
  {t:'Ruxolitinib; 100 g per week or 60 g per two weeks', correct:false, why:'Reversed: slide 46 gives 60 g per week, 100 g per two weeks.'},
  {t:'Upadacitinib; 60 g per week', correct:false, why:'Upadacitinib is oral, 15 mg once daily (slide 46).'},
  {t:'Abrocitinib; 100 g per two weeks', correct:false, why:'Abrocitinib is oral, 100 mg once daily (slide 46).'}],
 teach:'The topical form carries its own infection warning: avoid in patients with active, serious infections (slide 46).',
 cite:P5+' slide 46'},

{id:'P5-094', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-sys', sub:'jak', concept:'p5-jak-bbw', multi:true,
 tags:['list','bbw'], source:'both',
 stem:'Which are JAK inhibitor black box warnings? Select all that apply.',
 options:[
  {t:'Serious infections, including active TB and invasive fungal infections', correct:true, why:'Slide 46: serious infections (oral therapy: active TB, invasive fungal infections, bacterial, viral and other opportunistic infections; may lead to hospitalization or death).'},
  {t:'Higher all-cause mortality, including sudden CV death', correct:true, why:'Slide 46: mortality.'},
  {t:'Lymphoma and other malignancies', correct:true, why:'Slide 46: malignancies.'},
  {t:'DVT, PE and arterial thrombosis', correct:true, why:'Slide 46: thrombosis (T@54970).'},
  {t:'Hypercalcemia', correct:false, why:'Hypercalcemia is not among the boxed warnings on slide 46.'},
  {t:'Use under 2 years not recommended', correct:false, why:'A TCI boxed warning point (slide 40); JAK inhibitors are for patients over 12 years of age.'}],
 teach:'Slide 46 also lists MACE: CV death, MI and stroke. "Many serious box warnings, right?" (T@54970).',
 cite:P5+' slide 46; T@54220–54970'},

{id:'P5-095', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-sys', sub:'jak', concept:'p5-jak-mace',
 tags:['fine-detail'], source:'both',
 stem:'In the JAK inhibitor black box warning, what does MACE cover?',
 options:[
  {t:'CV death, MI and stroke', correct:true, why:'Slide 46: MACE, CV death, MI, and stroke (T@54600).'},
  {t:'DVT, PE and arterial thrombosis', correct:false, why:'That is the separate thrombosis warning on slide 46.'},
  {t:'Lymphoma and other malignancies', correct:false, why:'That is the malignancy warning on slide 46.'},
  {t:'Active TB and invasive fungal infections', correct:false, why:'That is the serious infection warning on slide 46.'}],
 teach:'"When we say ... MACE, you\'re gonna see this quite often in studies and data that are comparing cardiovascular treatment options" (T@54600).',
 cite:P5+' slide 46; T@54600'},

/* ---- Step-care algorithm and the adult case (slides 47-49, 54) ----------- */
{id:'P5-096', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'p5-algo-mild-acute',
 tags:['two-facts','numbers'], source:'both',
 stem:'A patient with mild atopic dermatitis has an acute flare. What does the step-care algorithm recommend?',
 options:[
  {t:'Low-to-medium potency TCS twice daily for 3–7 days beyond clearance', correct:true, why:'Slide 47 (non-lesional and mild), acute treatment: apply TCS to inflamed skin, low-to-medium potency TCS 2x daily for 3–7 days beyond clearance [consider TCI, crisaborole]. "But always start with low" (T@56572).'},
  {t:'Medium-to-high potency TCS twice daily for 3–7 days beyond clearance', correct:false, why:'That is acute treatment for moderate and severe AD (slide 48).'},
  {t:'Low-potency TCS once or twice weekly as maintenance', correct:false, why:'Slide 48: weekly use is medium-potency maintenance in moderate AD, not acute treatment.'},
  {t:'Dupilumab and referral to an AD specialist', correct:false, why:'That is the severe column (slide 48).'}],
 teach:'All patients apply basic management every day: skin care, moisturizer, warm baths or showers with non-soap cleansers, trigger avoidance (slides 47–48; T@55775–56191).',
 cite:P5+' slide 47; T@56191–56572'},

{id:'P5-097', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'p5-algo-moderate-maint',
 tags:['two-facts','fine-detail'], source:'both',
 stem:'In moderate atopic dermatitis, how is maintenance topical corticosteroid used?',
 options:[
  {t:'Low potency 1–2 times daily, including the face; medium potency 1–2 times weekly, except the face', correct:true, why:'Slide 48, moderate, maintenance TCS: low potency 1x–2x daily (including face); medium potency 1x–2x weekly (except face) (T@56931).'},
  {t:'Medium potency 1–2 times daily, including the face; low potency weekly', correct:false, why:'Reversed: daily is low potency; medium potency is weekly and not on the face (slide 48).'},
  {t:'High potency twice daily for 3–7 days beyond clearance', correct:false, why:'Medium-to-high potency twice daily for 3–7 days is acute treatment for moderate–severe AD (slide 48).'},
  {t:'Low potency 2–3 times weekly, except the face', correct:false, why:'2x–3x weekly is the maintenance TCI option on slide 48.'}],
 teach:'"So they may have two different topical corticosteroids, and that\'s OK" (T@57389). Alternatives (slide 48): OR maintenance TCI (pimecrolimus, tacrolimus) 1x–2x daily or 2x–3x weekly; OR crisaborole 2% twice daily.',
 cite:P5+' slide 48; T@56931–57389'},

{id:'P5-098', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'p5-algo-severe',
 tags:['list'], source:'both', multi:true,
 stem:'Which are maintenance options for severe atopic dermatitis on the step-care algorithm? Select all that apply.',
 options:[
  {t:'Referral to an AD specialist', correct:true, why:'Slide 48, severe: basic management + referral to AD specialist (T@57389).'},
  {t:'Phototherapy', correct:true, why:'Slide 48, severe column: phototherapy (T@57389).'},
  {t:'Dupilumab', correct:true, why:'Slide 48, severe column: dupilumab, after topical agents have not worked (T@57774).'},
  {t:'Systemic immunosuppressants such as cyclosporine A or methotrexate', correct:true, why:'Slide 48 lists cyclosporine A, methotrexate, mycophenolate mofetil, azathioprine, corticosteroids.'},
  {t:'Long-term oral corticosteroids as maintenance', correct:false, why:'Slide 48 footnote e: corticosteroids are not recommended for long-term maintenance.'}],
 teach:'Slide 48, severe: consider acute treatment for some patients to help gain control: wet-wrap therapy, short-term hospitalization. Footnote d: cyclosporine A, methotrexate, mycophenolate mofetil and azathioprine are not FDA-approved for AD.',
 cite:P5+' slide 48; T@57389–58143'},

{id:'P5-099', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'p5-algo-not-resolved',
 tags:['list','reasoning'], source:'both',
 stem:'A moderate AD flare is not resolved after 7 days of medium-to-high potency topical steroid. Which cause does her algorithm say to consider?',
 options:[
  {t:'Misdiagnosis', correct:true, why:'Slide 48: if not resolved in 7 days, consider nonadherence, infection, misdiagnosis, contact allergy to medications, referral.'},
  {t:'Steroid tachyphylaxis', correct:false, why:'Not on the slide 48 list (nonadherence, infection, misdiagnosis, contact allergy to medications, referral).'},
  {t:'Too short a course', correct:false, why:'The acute course is 3–7 days beyond clearance (slide 48); slide 48 does not list course length as a cause.'},
  {t:'Cold weather', correct:false, why:'Lesions can worsen in winter and summer (slide 52), but weather is not on the slide 48 list.'}],
 teach:'"If not resolved in 7 days, then this is when we can consider other possible situations that may be occurring, and that would be a straight referral" (T@58538).',
 cite:P5+' slides 48, 52; T@58143–58538'},

{id:'P5-100', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'case', concept:'p5-case-first-line-maint',
 tags:['poll','verbatim','case'], source:'both',
 stem:'The same 21-year-old (moderate, subacute atopic dermatitis) returns. What would be the most appropriate first-line maintenance therapy option for this patient?',
 options:[
  {t:'Basic Management + Topical Corticosteroid', correct:true, why:'Slide 48, moderate: basic management + topical anti-inflammatory medication, with maintenance TCS first. "Basic management we know is applied to all patients, and topical corticosteroid is our first-line topical medication" (T@58910).'},
  {t:'Pimecrolimus', correct:false, why:'A TCI is the second-line option (slide 38), and alone it leaves out basic management.'},
  {t:'Crisaborole 2%', correct:false, why:'Third line (slide 41).'},
  {t:'Topical Corticosteroid', correct:false, why:'First-line drug, but without basic management, which every patient gets (slide 48). "What is the key word in that question? First-line ... maintenance" (T@58910).'}],
 teach:'Her PollEv of 11/06.',
 cite:P5+' slides 48–49; PollEv 11/06; T@58538–59410'},

{id:'P5-101', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'case', concept:'p5-case-rx-details',
 tags:['poll','verbatim','case'], source:'both',
 stem:'For the same patient, what would be the most appropriate prescription details for the recommendation made previously?',
 options:[
  {t:'Hydrocortisone 1%, apply thin layer BID for 3–7 days', correct:true, why:'No steroid now, so start at low potency (hydrocortisone 1%) and climb; twice daily for 3–7 days (slides 36, 47–48). Her answer (T@59799–60609).'},
  {t:'Mometasone furoate 0.1%, apply thin layer once daily for 3–7 days', correct:false, why:'Medium (cream) or high (ointment) potency (slide 37); a patient not on a steroid starts low (T@60158).'},
  {t:'Hydrocortisone 1%, apply thin layer once daily for 3 days', correct:false, why:'Right drug, but slide 36 gives twice daily for 3–7 days.'},
  {t:'Triamcinolone acetonide 0.1%, apply thick layer BID for 3–7 days', correct:false, why:'Medium potency (slide 37), and a thick layer: slide 35 says a thin layer.'}],
 teach:'"It states that a corticosteroid was utilized in the past and it has helped in the past, but ... the patient\'s currently not on one, right? So we would ... start again from low potency and climbing up the ladder slowly" (T@60609).',
 cite:P5+' slides 35–37, 47–48; PollEv 11/06; T@59410–60981'},

{id:'P5-102', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-alg', sub:'case', concept:'p5-case-return-7d',
 tags:['poll','case','numbers'], source:'both',
 stem:'For the same patient on hydrocortisone 1%, when should he seek help or return to his PCP if the medication is not helping?',
 options:[
  {t:'After 7 days', correct:true, why:'Her PollEv answer: "So you got 7 days" (T@68450); slide 36: not resolved in 7 days, consider seeking assistance; slide 52: do not use longer than 7 days.'},
  {t:'After 14 days', correct:false, why:'14 days (2 weeks) is the outer limit of use (slide 36), not the point to seek help: "that 7-day is the important number to remember" (T@63910).'},
  {t:'After 24–48 hours', correct:false, why:'24–48 hours is when improvement can first be seen (slide 52).'},
  {t:'After 6 weeks', correct:false, why:'6 weeks is the TCI reassessment point (slide 40).'}],
 teach:'Her PollEv of 11/06 (open response; options here are from her slides).',
 cite:P5+' slides 36, 52; PollEv 11/06; T@63910, T@68043–68450'},

{id:'P5-103', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'p5-algo-moderate-acute',
 tags:['case','two-facts'], source:'both',
 stem:'A patient with moderate AD on daily hydrocortisone 1% maintenance has an acute flare on the trunk. Which acute treatment fits the algorithm?',
 options:[
  {t:'Medium-to-high potency TCS twice daily for 3–7 days beyond clearance', correct:true, why:'Slide 48, moderate and severe, acute: medium-to-high potency TCS 2x daily for 3–7 days beyond clearance; "they probably have tried a low potency steroid. We\'re going up" (T@58143).'},
  {t:'Low-potency TCS once daily for 14 days', correct:false, why:'Low potency is maintenance here; slide 48 steps up to medium-to-high for an acute flare.'},
  {t:'Very high potency TCS twice daily for 4 weeks', correct:false, why:'Slide 48 gives 3–7 days beyond clearance; topical steroids stop at 2 weeks (slide 35).'},
  {t:'Start a JAK inhibitor', correct:false, why:'JAK inhibitors are a refractory option for moderate–severe AD after other systemic and biologic therapies (slide 46).'}],
 teach:'The trunk is not the face, so a medium or high potency steroid is allowed there (slide 48: medium potency except face).',
 cite:P5+' slide 48; T@58143–58538'},

/* ---- Diaper and incontinence-associated dermatitis (slides 55-69) -------- */
{id:'P5-104', skill:'patho', prof:'Patel', tier:'new', topic:'p5-dd', sub:'cause', concept:'p5-dd-etiology', multi:true,
 tags:['list','fine-detail'], source:'both',
 stem:'Which contribute to diaper dermatitis? Select all that apply.',
 options:[
  {t:'Occlusion from the diaper', correct:true, why:'Slide 56: occlusion from the diaper (T@68962).'},
  {t:'GI tract proteolytic enzymes and bile salts', correct:true, why:'Slide 56: GI tract proteolytic enzymes and bile salts (T@69369).'},
  {t:'Mechanical chafing and friction', correct:true, why:'Slide 56: mechanical chafing and friction of the diaper on the skin (T@69369).'},
  {t:'Alkaline skin pH', correct:true, why:'Slide 56; "when the skin pH is more alkaline, then that can also cause a dermatitis reaction" (T@69369).'},
  {t:'Acidic skin pH', correct:false, why:'The reverse: slide 56 lists alkaline skin pH.'},
  {t:'Loss-of-function FLG mutation', correct:false, why:'An AD risk factor (slide 19), not a diaper dermatitis cause on slide 56.'}],
 teach:'Slide 56, six causes: occlusion (from diaper), moisture, microbes, GI tract proteolytic enzymes and bile salts, mechanical chafing and friction, alkaline skin pH.',
 cite:P5+' slide 56; T@68962–69757'},

{id:'P5-105', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'cause', concept:'p5-dd-prevention-infant',
 tags:['two-facts'], source:'both',
 stem:'Which statement about preventing diaper rash in infants fits her slide?',
 options:[
  {t:'Disposable diapers and breastfeeding are linked to fewer episodes of rash', correct:true, why:'Slide 57: disposable diapers, less episodes of rash; breastfeeding, less episodes of rash due to pH maintenance (T@69757, T@71459).'},
  {t:'Cloth diapers and formula feeding are linked to fewer episodes of rash', correct:false, why:'Slide 57 favors disposable diapers and breastfeeding; cloth diapers carry more risk (T@69757).'},
  {t:'Alcohol-containing wipes clean better than water', correct:false, why:'Slide 57: no difference between cloth, water, mild soap, or alcohol-free wet wipe.'},
  {t:'Apply barrier cream to damp skin right after cleaning', correct:false, why:'Slide 57: dry before application of barrier cream.'}],
 teach:'Slide 57: change newborns every 2 hours and infants every 3 to 4 hours; clean with every change; dry before applying barrier cream.',
 cite:P5+' slide 57; T@69757–71811'},

{id:'P5-106', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'cause', concept:'p5-iad-prevention-adult', multi:true,
 tags:['list'], source:'both',
 stem:'Which are parts of incontinence-associated dermatitis prevention in adults? Select all that apply.',
 options:[
  {t:'Bath oil or pH-neutral cleansing foam, with a patting motion', correct:true, why:'Slide 59: cleansing routine, bath oil or pH neutral cleansing foam; use patting motion with soft cloth.'},
  {t:'Pressure sore prevention', correct:true, why:'Slide 59; adults in diapers are often bedridden (T@72967–73399).'},
  {t:'Good nutrition: protein and vitamin status', correct:true, why:'Slide 59; T@73399.'},
  {t:'Barrier cream application', correct:true, why:'Slide 59 lists barrier cream application.'},
  {t:'Alkaline soap to neutralize urine', correct:false, why:'Alkaline skin pH promotes dermatitis (slide 56); slide 59 says pH-neutral foam.'}],
 teach:'Slide 59 also: skin hydration.',
 cite:P5+' slide 59; T@72967–73399'},

{id:'P5-107', skill:'patho', prof:'Patel', tier:'new', topic:'p5-dd', sub:'sx', concept:'p5-dd-signs',
 tags:['two-facts'], source:'both',
 stem:'Which presentation is typical of diaper dermatitis?',
 options:[
  {t:'Red to bright red, shiny, wet-looking patches on buttocks, upper thighs, abdomen or genitals', correct:true, why:'Slide 58: erythema in patches (buttocks, upper thighs, abdomen, genital region); red to bright red, shiny, wet-looking patches and lesions (T@72543).'},
  {t:'Lichenified plaques with silvery scale in the skin folds', correct:false, why:'"You\'re not gonna see symptoms of atopic dermatitis here ... a rash that doesn\'t include lichenification" (T@72543).'},
  {t:'Dry, cracked skin on the hands and inner elbows', correct:false, why:'That is adult atopic dermatitis (slide 21).'},
  {t:'Oozing papules on the face and scalp', correct:false, why:'That is infant atopic dermatitis (slide 21).'}],
 teach:'Slide 58 grades severity A to E: slight, mild, moderate, moderate to severe, severe, by how far past the crease the redness spreads (T@71811–72172).',
 cite:P5+' slides 21, 58; T@71811–72543'},

{id:'P5-108', skill:'patho', prof:'Patel', tier:'new', topic:'p5-dd', sub:'sx', concept:'p5-globiad-category',
 tags:['fine-detail'], source:'both',
 stem:'An adult with incontinence-associated dermatitis has skin loss without clinical signs of infection. Which GLOBIAD category is this?',
 options:[
  {t:'2A', correct:true, why:'Slide 60 (GLOBIAD): category 2, skin loss; 2A, skin loss without clinical signs of infection (T@73805–74169).'},
  {t:'1A', correct:false, why:'1A is persistent redness without clinical signs of infection (slide 60).'},
  {t:'1B', correct:false, why:'1B is persistent redness with clinical signs of infection (slide 60).'},
  {t:'2B', correct:false, why:'2B is skin loss with clinical signs of infection (slide 60).'}],
 teach:'Category 1 is persistent redness; category 2 is skin loss; A without, B with clinical signs of infection (white scaling can be one, T@73805).',
 cite:P5+' slide 60; T@73805–74169'},

{id:'P5-109', skill:'patho', prof:'Patel', tier:'new', topic:'p5-dd', sub:'sx', concept:'p5-dd-complication-organisms',
 tags:['two-facts'], source:'both',
 stem:'Which organisms cause the most common complications of diaper dermatitis?',
 options:[
  {t:'Candida albicans and Staphylococcus aureus', correct:true, why:'Slide 67: fungal and bacterial infections are the most common complication: Candida albicans, Staphylococcus aureus (T@78960–79359).'},
  {t:'Herpes simplex virus and S. aureus', correct:false, why:'Herpes simplex is an AD complication (slide 25), not on the diaper slide.'},
  {t:'Candida albicans and herpes simplex virus', correct:false, why:'Slide 67 pairs Candida albicans with Staphylococcus aureus.'},
  {t:'Escherichia coli and Pseudomonas', correct:false, why:'Neither organism is named on slide 67.'}],
 teach:'Slide 67: cutaneous infections are secondary to an untreated or improperly treated rash.',
 cite:P5+' slides 25, 67; T@78960–79714'},

{id:'P5-110', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-abcde',
 tags:['list','fine-detail'], source:'both',
 stem:'In the ABCDE mnemonic for diaper dermatitis, what do B and D stand for?',
 options:[
  {t:'B: barrier protectant liberally each change; D: change the diaper every 2 hours and when soiled', correct:true, why:'Slide 62: B = Barrier, apply barrier skin protectant liberally with each diaper change; D = Diaper, change frequently (every 2 hours) and as soon as soiled, absorbent disposable diapers if affordable (T@74933–75778).'},
  {t:'B: bathe the area daily; D: dry the skin before the new diaper', correct:false, why:'Drying is A = Air; cleansing is C (slide 62).'},
  {t:'B: barrier protectant once daily; D: change every 4 hours', correct:false, why:'Slide 62: with each diaper change, and every 2 hours.'},
  {t:'B: baby wipe; D: diaper-free time', correct:false, why:'Wipes are under C (cleansing); diaper-free time is A (air) (slide 62).'}],
 teach:'Slide 62: A = Air (air dry, diaper-free time); B = Barrier; C = Cleansing (soft cloth and warm water, or a baby wipe when stool is present); D = Diaper; E = Education of parents and caregivers. "I want you guys to remember A B C D E" (T@74574).',
 cite:P5+' slide 62; T@74574–76171'},

{id:'P5-111', skill:'tell', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-zinc-oxide-range',
 tags:['numbers','two-facts'], source:'both',
 stem:'Which statement about the skin protectants zinc oxide and petrolatum matches her slide?',
 options:[
  {t:'Zinc oxide 1–40%, the active ingredient; petrolatum 30–100%, the ointment base', correct:true, why:'Slide 64: zinc oxide 1–40%, common and excellent protectant, usually thick and tacky; petrolatum 30–100%, ointment base (T@76969–77778).'},
  {t:'Zinc oxide 30–100%; petrolatum 1–40%', correct:false, why:'Reversed (slide 64).'},
  {t:'Zinc oxide 1–10%; petrolatum 30–100%', correct:false, why:'Slide 64 gives up to 40% zinc oxide: "40% being the highest dose" (T@76969).'},
  {t:'Zinc oxide 1–40%, the base; petrolatum, the active ingredient', correct:false, why:'"Zinc oxide, active ingredient, petrolatin is the base for the most effective diaper cream" (T@77778).'}],
 teach:'FDA approved 17 ingredients as skin protectants for infant diaper dermatitis (slide 63); zinc oxide is "the most recommended and effective ingredient" (T@76969).',
 note:'She first said "Zinc oxide 1%" and corrected herself to "1 to 40%" (T@76969); the slide says 1–40%.',
 cite:P5+' slides 63–64; T@76171–77778'},

{id:'P5-112', skill:'tell', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-protectant-no-zinc',
 tags:['fine-detail'], source:'slide',
 stem:'Which diaper product on her slide contains no zinc oxide?',
 options:[
  {t:'A & D Ointment', correct:true, why:'Slide 64: A & D Ointment (lanolin and petrolatum).'},
  {t:'Desitin', correct:false, why:'Slide 64: Desitin (zinc oxide, petrolatum, mineral oil).'},
  {t:'Boudreaux\'s Butt Paste', correct:false, why:'Slide 64: zinc oxide, Peruvian balsam, boric acid, castor oil, mineral oil, white wax, petrolatum.'},
  {t:'Burt\'s Bees Baby Diaper Rash Ointment', correct:false, why:'Slide 64: zinc oxide with sweet almond oil, beeswax, lanolin and other oils.'}],
 teach:'Dr Smith\'s ointment (slide 64) also contains zinc oxide.',
 cite:P5+' slide 64'},

{id:'P5-113', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-protectant-apply',
 tags:['two-facts'], source:'both',
 stem:'How is a skin protectant applied for diaper dermatitis?',
 options:[
  {t:'Liberally at every change, fully covering red areas, and continued after the rash heals', correct:true, why:'Slide 63: apply liberally to skin in diaper/perineal area every diaper change or incontinence care; remove old gently; completely cover erythematous areas; can continue after the rash heals to prevent recurrence (T@76607–76969).'},
  {t:'A thin layer twice daily, stopped once the rash heals', correct:false, why:'A thin layer twice daily is the topical steroid instruction (slides 35–36); protectants are applied liberally at every change and may continue after healing.'},
  {t:'Liberally once daily, over the old layer', correct:false, why:'Slide 63: every change, after gently removing the old product.'},
  {t:'Only when the skin is broken', correct:false, why:'Slide 62: to prevent and treat diaper dermatitis; broken skin is an exclusion for self-treatment (slide 68).'}],
 teach:'Protectants provide a physical barrier and lubrication to the skin (slide 63).',
 cite:P5+' slide 63; T@76607–76969'},

{id:'P5-114', skill:'adverse', prof:'Patel', tier:'new', topic:'p5-dd', sub:'excl', concept:'p5-dd-do-not-use', multi:true,
 tags:['list'], source:'both',
 stem:'Which should NOT be used as self-care products for diaper dermatitis? Select all that apply.',
 options:[
  {t:'Topical antifungals such as miconazole', correct:true, why:'Slide 65: do not use as self-care products, topical antifungals (e.g. miconazole).'},
  {t:'Topical anesthetics such as benzocaine or lidocaine', correct:true, why:'Slide 65: topical anesthetics (e.g. benzocaine, lidocaine) are not self-care products here.'},
  {t:'Hydrocortisone or other topical corticosteroid', correct:true, why:'Slide 65; "the biggest difference here between atopic dermatitis" (T@78569).'},
  {t:'Topical antibacterials', correct:true, why:'Slide 65: topical antibacterials are not self-care products here.'},
  {t:'Zinc oxide paste', correct:false, why:'Zinc oxide is the recommended first-line skin protectant (slide 64; T@81725).'},
  {t:'Petrolatum ointment', correct:false, why:'Petrolatum is a skin protectant and ointment base (slide 64).'}],
 teach:'Slide 65 cautions: the diaper area is a significant portion of a baby\'s total body surface area, and many topical products can lead to systemic side effects.',
 cite:P5+' slides 64–65; T@77778–78569'},

{id:'P5-115', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'excl', concept:'p5-dd-followup-7d',
 tags:['two-facts','referral'], source:'both',
 stem:'After 7 days of self-care, a diaper rash has improved but has not healed. What is advised?',
 options:[
  {t:'Continue treatment until healed', correct:true, why:'Slide 66: if improved, but not healed, after 7 days, continue treatment until healed (T@78569).'},
  {t:'Refer to a physician', correct:false, why:'Referral is for a rash that is not healed and not improved, or worsened, after 7 days (slide 66).'},
  {t:'Add hydrocortisone 1%', correct:false, why:'Hydrocortisone is not for self-care of diaper dermatitis (slide 65).'},
  {t:'Stop the protectant and let the skin air dry only', correct:false, why:'Slide 66 says continue treatment until healed.'}],
 teach:'"7 days apply here as well" (T@78569): improved but not healed, continue; not healed, not improved, or worse, refer (T@78960).',
 cite:P5+' slide 66; T@78569–78960'},

{id:'P5-116', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'excl', concept:'p5-dd-exclusions', multi:true,
 tags:['list','referral'], source:'both',
 stem:'Which findings exclude self-treatment of diaper dermatitis? Select all that apply.',
 options:[
  {t:'Rash spreading outside the diaper region', correct:true, why:'Slide 68: presence of diaper dermatitis outside diaper region.'},
  {t:'Fever, diarrhea and swollen inguinal lymph nodes', correct:true, why:'Slide 68: constitutional symptoms (fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, rash or lesions elsewhere).'},
  {t:'Lethargy or incessant crying with the rash', correct:true, why:'Slide 68: significant behavioral changes associated with the rash (T@80580).'},
  {t:'Blistering, peeling or oozing at the lesions', correct:true, why:'Slide 68: broken skin (ulceration, blistering, peeling); oozing, blood, vesicles or pus.'},
  {t:'Shiny, bright red patches on the buttocks for 2 days', correct:false, why:'The typical diaper dermatitis presentation (slide 58), present under 7 days: self-care with a skin protectant fits.'}],
 teach:'"So please know this list ... it is exclusions for self-treatment" (T@80993). Slide 68 also: lesions > 7 days; lack of improvement in 7 days; secondary infection; lesions part of or caused by another disease; possible UTI; onion-skin appearance or bullae; chronic or frequently recurrent lesions; comorbid conditions (HIV, transplant, immunosuppressive therapy, hepatitis with skin manifestations).',
 cite:P5+' slides 58, 68; T@79714–80993'},

{id:'P5-117', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'excl', concept:'p5-dd-exclusion-comorbid',
 tags:['case','referral'], source:'slide',
 stem:'A caregiver asks for a diaper cream for a 3-year-old on immunosuppressive therapy after a liver transplant, with a 3-day-old red rash in the diaper area. What is appropriate?',
 options:[
  {t:'Refer to the provider', correct:true, why:'Slide 68: comorbid conditions (HIV infection, organ transplantation, immunosuppressive therapy) exclude self-treatment (T@80580).'},
  {t:'Zinc oxide protectant at every change', correct:false, why:'Right for an otherwise healthy child (slide 64), but the comorbid condition excludes self-care (slide 68).'},
  {t:'Hydrocortisone 1% twice daily', correct:false, why:'Not for diaper dermatitis self-care (slide 65), and the child needs referral (slide 68).'},
  {t:'Miconazole cream twice daily', correct:false, why:'Topical antifungals are not self-care products for diaper dermatitis (slide 65).'}],
 teach:'"That is complete referral to the provider" (T@80580).',
 cite:P5+' slides 64–65, 68; T@80580'},

{id:'P5-118', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'case', concept:'p5-dd-case-first-line',
 tags:['poll','verbatim','case'], source:'both',
 stem:'Father of a five-month-old reports red, wet skin lesions in the diaper area, worse over the past week; only the usual body cream used; no PMH, no meds. What would be an appropriate first-line treatment option?',
 options:[
  {t:'Skin protectant containing hydrocortisone', correct:false, why:'"We do not want to utilize hydrocortisone" (T@81725); slide 65: not as self-care.'},
  {t:'Skin protectant containing miconazole', correct:false, why:'Topical antifungals are not self-care products for diaper dermatitis (slide 65).'},
  {t:'Skin protectant containing zinc oxide', correct:true, why:'Her answer (T@81725); slide 64: zinc oxide 1–40%, common and excellent protectant.'},
  {t:'Aquaphor Ointment', correct:false, why:'"Aquaphor is just a petrolatum moisturizer ... that\'s only gonna moisturize the skin, but we\'re not treating the skin" (T@82081).'}],
 teach:'Her PollEv of 11/06 for the case on slide 69 (CC: "My baby has been fussy and the diaper area is extremely red and irritated").',
 cite:P5+' slides 64–65, 69; PollEv 11/06; T@81360–82081'},

{id:'P5-119', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'case', concept:'p5-dd-case-followup',
 tags:['poll','verbatim','case','numbers'], source:'both',
 stem:'When should the father be educated to follow-up on the improvement of the skin lesions?',
 options:[
  {t:'5 days', correct:false, why:'Slide 66 and her answer use 7 days.'},
  {t:'2 days', correct:false, why:'2–3 days is the follow-up on her AD self-care slide (slide 33), not diaper dermatitis.'},
  {t:'7 days', correct:true, why:'Slide 66: follow-up at 7 days; her answer (T@82081–82496).'},
  {t:'14 days', correct:false, why:'14 days is the topical steroid limit in AD (slide 36); diaper dermatitis follow-up is 7 days.'}],
 teach:'Her PollEv of 11/06. "Regardless, 7 days" (T@82496).',
 cite:P5+' slides 33, 66; PollEv 11/06; T@82081–82496'},

{id:'P5-120', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'case', concept:'p5-dd-case-nonpharm',
 tags:['poll','case'], source:'both',
 stem:'For the same infant, which nonpharmacologic advice should the father receive?',
 options:[
  {t:'Follow ABCDE: air dry, barrier, gentle cleansing, change every 2 hours, education', correct:true, why:'Her PollEv answer: "A B C D E, every 2 hours" (T@82496); slide 62.'},
  {t:'Switch to cloth diapers and change only when soiled', correct:false, why:'Disposable diapers have fewer rash episodes (slide 57); ABCDE: change every 2 hours (slide 62).'},
  {t:'Bathe in a dilute bleach bath twice a week', correct:false, why:'The bleach bath is for moderate–severe atopic dermatitis (slide 31).'},
  {t:'Use alcohol wipes at each change to disinfect', correct:false, why:'Slide 57 names alcohol-free wipes; slide 62: soft cloth and warm water, or a baby wipe when stool is present.'}],
 teach:'Her PollEv of 11/06 (open response: "What are some appropriate nonpharmacologic methods the father should be educated on?").',
 cite:P5+' slides 57, 62; PollEv 11/06; T@82496–82849'},

{id:'P5-121', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-dd-goals',
 tags:['list'], source:'both',
 stem:'Which set lists the therapy goals for diaper and incontinence dermatitis?',
 options:[
  {t:'Relieve symptoms, get rid of the dermatitis, prevent secondary infection, prevent recurrences', correct:true, why:'Slide 61: 1. relieve the symptoms; 2. get rid of the dermatitis; 3. prevent secondary infection; 4. prevent recurrences (T@74169–74574).'},
  {t:'Eliminate triggers, reduce TEWL, prevent flares, minimize ADRs', correct:false, why:'Those are atopic dermatitis goals (slide 27).'},
  {t:'Relieve symptoms, sterilize the skin, prevent recurrences', correct:false, why:'Sterilizing the skin is not a goal on slide 61; antibacterials are not self-care products (slide 65).'},
  {t:'Get rid of the dermatitis, then stop all barrier products', correct:false, why:'Protectants can continue after the rash heals to prevent recurrence (slide 63).'}],
 teach:'Prevent recurrences: the caregiver follows the education given (T@74574).',
 cite:P5+' slide 61; T@74169–74574'}
);
