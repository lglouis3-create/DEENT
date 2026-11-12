/* ==========================================================================
   Harder Lecture 5 practice for Exam 2 (Dr. Patel, 11/06; added 2026-11-12).
   Louis, 2026-11-12: the questions build on her polls and class examples and
   raise the difficulty, so that a right answer shows the student knows the
   concept rather than the remembered item; "prepared and write new patient
   version cases that are reflective of what will appear on the exam"; and the
   right answer must not stand out ("it shouldn't be the obvious for the
   student bc it defeats the purpose in actually knowing the material").
   Two groups:
   - P5H-*: application items (a new patient, the next step after a failed
     therapy, a contraindication that changes the choice, a calculation with
     new numbers, two facts combined), reviewed 2026-11-12; P5H-010 and
     P5H-015 were dropped in that review (they repeated P5-115/P5-116 and
     P5-061/P5-063) and are not here.
   - P5N-*: one new-patient version of each item that a student could answer
     from memory of her PollEv or her class example (P5-007, 008, 015, 016,
     032, 041, 049, 058, 100, 101, 102, 118, 119, 120). Each keeps the concept
     and changes the patient (age, sex, history, prior therapy, severity words
     from her slides 23-24, body areas and numbers), written as her case stems
     are (CC, HPI, PMH, current meds, physical assessment), asking what her
     PollEv asked: severity/status, first-line therapy, prescription details,
     counseling, follow-up.
   Every calculation is worked in the key's why. Four options; the key is not
   the longest option and shares its wording pattern with the wrong options.
   Sources: Patel_Dermatitis-Therapeutics-Student.pdf (slide N = PDF page),
   her PollEv of 11/06 and the 11/06 transcript (T@n = byte offset, start of
   the passage). Held points in reviews/OPEN_QUESTIONS.md "Lecture 5" are not
   keyed: no item names a live vaccine, sets hydrocortisone 1% "low to medium"
   (slide 36) against class VII (slide 37), keys the 2-3 day AD self-care
   follow-up, or keys the 3-4 hour infant diaper interval. Left out as in
   q7_L05.js: pediatric fingertip units, infant dupilumab doses, newborn and
   infant ages, the SCORAD calculation.
   ========================================================================== */
const P5X = 'Lecture 5 (Patel_Dermatitis-Therapeutics-Student.pdf)';

QUESTIONS.push(
{id:'P5H-001', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-leg-bid-week',
 tags:['hard','calculation','case'], source:'both',
 stem:'A 28-year-old woman with moderate atopic dermatitis has an acute flare covering one entire leg, including the foot. Her prescriber orders triamcinolone acetonide 0.1% cream twice daily for 7 days. Tubes of 45 g, 60 g, 80 g and 100 g are available. Which tube is the most appropriate to dispense?',
 options:[
  {t:'45 g', correct:false, why:'45 g is short: the course needs 56 g (one leg 8 FTU × 0.5 g = 4 g × 2 × 7). Amounts are rounded up, never down (slide 10; T@7221).'},
  {t:'60 g', correct:true, why:'One leg including foot 8 FTU × 0.5 g = 4 g per application; × 2 a day × 7 days = 56 g; the first tube above 56 g is 60 g (slides 10–11; "remember to always round up", T@9580).'},
  {t:'80 g', correct:false, why:'80 g holds 56 g, but 60 g is the first size above it; 80 g would fit 10 days of twice-daily use (4 g × 2 × 10).'},
  {t:'100 g', correct:false, why:'100 g is the class example for one side of the trunk (98 g, slide 13); one leg twice daily for 7 days needs 56 g.'}],
 teach:'FTU for the area (slide 11) × 0.5 g × applications per day × days, then the first tube size at or above the total. Triamcinolone 0.1% is medium potency (slide 37), within the medium-to-high range for a moderate flare (slide 48).',
 cite:P5X+' slides 10–11, 13, 37, 48; T@7221, T@9580'},

{id:'P5H-002', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-hands-soles',
 tags:['hard','calculation','two-facts'], source:'slide',
 stem:'A 35-year-old man is to apply an ointment twice daily for 7 days to both hands (front and back, including fingers) and to both soles. Tubes of 15 g, 30 g, 45 g and 60 g are available. Which tube is the most appropriate to dispense?',
 options:[
  {t:'15 g', correct:false, why:'15 g is what once daily would need (1.75 g × 7 = 12.25 g); the order is twice daily, 24.5 g.'},
  {t:'30 g', correct:true, why:'Two hands 2 × 1 FTU + both soles 1.5 FTU = 3.5 FTU × 0.5 g = 1.75 g per application; × 2 × 7 = 24.5 g; round up to 30 g (slides 10–11).'},
  {t:'45 g', correct:false, why:'45 g fits a count of each sole as 1.5 FTU (2 + 3 = 5 FTU = 2.5 g × 14 = 35 g); slide 11 gives 1.5 FTU for both soles together.'},
  {t:'60 g', correct:false, why:'60 g is more than twice the 24.5 g needed; 30 g is the first size above it.'}],
 teach:'Slide 11: one hand (front and back) including fingers is 1 FTU; both soles together are 1.5 FTU. Add the areas in fingertip units, then convert once.',
 cite:P5X+' slides 10–11; T@7641, T@8004'},

{id:'P5H-003', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-face-hc-choice',
 tags:['hard','calculation','two-facts','case'], source:'both',
 stem:'A 23-year-old woman has a mild atopic dermatitis flare on her face and neck. She has used no steroid before. She will apply a topical corticosteroid twice daily for 7 days. Tubes of 15 g, 30 g, 45 g and 60 g are available. Which product and tube size are most appropriate?',
 options:[
  {t:'Hydrocortisone 1% ointment, 30 g tube', correct:true, why:'The face takes hydrocortisone 1% ("this is the only dose and strength that you can utilize on your face", T@37425; slide 36). 2.5 FTU × 0.5 g = 1.25 g × 2 × 7 = 17.5 g; round up to 30 g (slides 10–11).'},
  {t:'Hydrocortisone 1% ointment, 15 g tube', correct:false, why:'Right product, but 15 g is less than the 17.5 g needed (1.25 g × 2 × 7); the amount is rounded up (slide 10).'},
  {t:'Triamcinolone 0.1% cream, 30 g tube', correct:false, why:'Right tube, but triamcinolone 0.1% is medium potency (slide 37), used except on the face (slide 48).'},
  {t:'Triamcinolone 0.1% cream, 15 g tube', correct:false, why:'Medium potency is not for the face (slides 37, 48), and 15 g is short of the 17.5 g needed.'}],
 teach:'Two decisions in one: the site picks the drug (face: hydrocortisone 1%), and the chart picks the amount (face and neck 2.5 FTU). Mild AD starts low: "always start with low" (T@56572).',
 cite:P5X+' slides 10–11, 36–37, 48; T@37425, T@56572'},

{id:'P5H-004', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'h5-sev-moderate-acute',
 tags:['hard','case'], source:'both',
 stem:'A 28-year-old woman has frequent itching on her inner elbows that wakes her on some nights and limits her workouts. Exam: red, inflamed papules; the skin is not dry; no lichenification; no infection. SCORAD 47. How would you best describe the severity and status of her presentation?',
 options:[
  {t:'Moderate, acute', correct:true, why:'SCORAD 25–50 is moderate, and frequent itching with a moderate impact on activities and sleep fits it (slide 23). Inflamed papules without dryness or lichenification are acute: "the dryness is not present" (T@26800).'},
  {t:'Moderate, subacute', correct:false, why:'The severity is right; subacute needs dryness ("lichenification, chronic, dryness, subacute", T@26800), and her skin is not dry.'},
  {t:'Severe, acute', correct:false, why:'Severe needs SCORAD > 50 and nightly loss of sleep ("biggest key here is nightly loss of sleep", T@21800); 47 is moderate.'},
  {t:'Severe, subacute', correct:false, why:'SCORAD 47 is below 50 (slide 23), and without dryness the status is not subacute (T@26800).'}],
 teach:'Read severity from the SCORAD score and the impact words (slide 23); read status from the lesions (slide 24): no dryness acute, dryness subacute, lichenification chronic.',
 cite:P5X+' slides 23–24; T@21800, T@22645, T@26800'},

{id:'P5H-005', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'h5-sev-mild-chronic',
 tags:['hard','case'], source:'both',
 stem:'A 40-year-old man has small areas of dry skin with infrequent itching on his wrists. It has little effect on his sleep or work. Exam: thickened, lichenified plaques on both wrists; no infection. SCORAD 21. How would you best describe the severity and status of his presentation?',
 options:[
  {t:'Mild, chronic', correct:true, why:'SCORAD < 25 with infrequent itching and little impact is mild (slide 23); lichenified plaques make the status chronic: "chronic is lichenification" (T@22645).'},
  {t:'Mild, subacute', correct:false, why:'The severity is right; the dryness suggests subacute, but lichenification decides chronic (T@22645).'},
  {t:'Severe, chronic', correct:false, why:'Thick plaques are a status finding; severity comes from the score and impact (slide 23), and 21 is below 25.'},
  {t:'Severe, subacute', correct:false, why:'SCORAD 21 is mild (< 25), and lichenified plaques make the status chronic (slides 23–24).'}],
 teach:'"That\'s the terms and details that I\'ll also provide on the exam so you guys understand if the patient has lichenification or not" (T@18660).',
 cite:P5X+' slides 23–24; T@18660, T@21289, T@22645'},

{id:'P5H-006', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'h5-algo-moderate-next-tci',
 tags:['hard','case','reasoning'], source:'both',
 stem:'A 26-year-old man with moderate atopic dermatitis has followed basic management for 3 months. On that, he has used hydrocortisone 1% daily, including the face, and a medium-potency steroid twice weekly on the trunk. His skin is still not controlled, and he has used no other prescription product. On her step-care algorithm, which maintenance option comes next?',
 options:[
  {t:'A topical calcineurin inhibitor twice daily to affected skin', correct:true, why:'In moderate AD the TCI is the second-line option after topical steroids (slide 38; slide 48 maintenance TCI); "basic management and topical 1st line, 2nd line, 3rd line" (T@57570).'},
  {t:'A topical PDE-4 inhibitor ointment twice daily to affected skin', correct:false, why:'Crisaborole (the PDE-4 inhibitor) is the third-line option, after a TCI (slide 41); he has not tried a TCI yet.'},
  {t:'A very high potency topical steroid twice daily as maintenance', correct:false, why:'Very high potency is not a maintenance option; slide 48 maintenance is low potency daily and medium potency weekly, and corticosteroids are not for long-term maintenance (slide 48 footnote e).'},
  {t:'An IL-4 antagonist injection under the skin every other week', correct:false, why:'Dupilumab is for moderate-to-severe AD not controlled with topical prescription therapies (slide 48 footnote c; slide 43); a TCI comes first.'}],
 teach:'Slide 48 lists "maintenance TCI OR crisaborole" side by side; the order comes from slide 38 (TCI second line) and slide 41 (crisaborole third line).',
 cite:P5X+' slides 38, 41, 43, 48; T@57570'},

{id:'P5H-007', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'h5-flare-face-and-trunk', dupOf:'P5-103',
 tags:['hard','case','two-facts'], source:'both',
 stem:'A 30-year-old woman with moderate atopic dermatitis, on maintenance hydrocortisone 1%, has an acute flare on her cheeks and on her trunk. Which acute regimen is most appropriate?',
 options:[
  {t:'Cheeks: hydrocortisone 1%; trunk: triamcinolone 0.1% cream; both BID for 3–7 days', correct:true, why:'The face takes hydrocortisone 1% only (slide 36; T@37425); the trunk flare in moderate AD takes medium-to-high potency twice daily for 3–7 days beyond clearance (slide 48), and triamcinolone 0.1% is medium (slide 37).'},
  {t:'Cheeks: hydrocortisone 1%; trunk: clobetasol 0.05% ointment; both BID for 3–7 days', correct:false, why:'The cheeks are right; clobetasol 0.05% is very high potency (slide 37), above the medium-to-high range for the flare (slide 48).'},
  {t:'Cheeks: triamcinolone 0.1% cream; trunk: triamcinolone 0.1% cream; both BID for 3–7 days', correct:false, why:'The trunk is right; medium potency is used except on the face (slide 48).'},
  {t:'Cheeks: triamcinolone 0.1% cream; trunk: clobetasol 0.05% ointment; both BID for 3–7 days', correct:false, why:'Both sites are wrong: medium potency is not for the face (slide 48), and clobetasol is very high potency (slide 37).'}],
 teach:'"We\'re going up" for the flare (T@58143), but the face rule does not change: hydrocortisone 1% is the face steroid even during a flare.',
 cite:P5X+' slides 36–37, 48; T@37425, T@58143'},

{id:'P5H-008', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'h5-hc-day8',
 tags:['hard','case','referral'], source:'both',
 stem:'A 22-year-old man has applied OTC hydrocortisone 1% twice daily to an eczema patch on his neck for 8 days. It is a little better but not resolved. He asks whether he can keep going, since he heard the limit is 2 weeks. What is the most appropriate advice?',
 options:[
  {t:'Stop self-care and see his provider, since 7 days have passed unresolved', correct:true, why:'Slide 36: not resolved in 7 days, consider seeking assistance; "if we\'ve passed that 7-day period and the patient is still experiencing symptoms, that is straight referral" (T@37425–37900).'},
  {t:'Continue twice daily until day 14, then see his provider if it persists', correct:false, why:'14 days is the outer limit of use (slide 36), not the point to seek help: "that 7-day is the important number to remember" (T@63910).'},
  {t:'Change to once daily and continue for 7 more days before seeing a provider', correct:false, why:'Lowering the frequency does not reset the 7-day point; at 7 days unresolved he seeks assistance (slide 36).'},
  {t:'Add a petrolatum moisturizer and continue the steroid until the patch clears', correct:false, why:'A moisturizer is basic management for everyone (slide 48), but the steroid is not continued past 7 days unresolved (slides 36, 52).'}],
 teach:'7 days is when to seek help; 14 days is the most the product is ever used (slide 36).',
 cite:P5X+' slides 36, 52; T@37425–37900, T@63910'},

{id:'P5H-009', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'h5-dd-home-products',
 tags:['hard','case'], source:'both',
 stem:'A mother brings her 7-month-old with a red, shiny diaper rash of 2 days. There is no fever and no broken skin, and the rash stays inside the diaper area. At home she has hydrocortisone 1% cream, miconazole cream, zinc oxide paste and lidocaine ointment. Which should she use?',
 options:[
  {t:'The zinc oxide paste, applied liberally at every diaper change', correct:true, why:'A skin protectant applied liberally at every change (slide 63); zinc oxide is "the most recommended and effective ingredient" (T@77204; slide 64). No exclusion applies (slide 68).'},
  {t:'The hydrocortisone 1% cream, applied thinly twice a day for 7 days', correct:false, why:'Right for atopic dermatitis (slide 36), but hydrocortisone and other topical steroids are not self-care products for diaper dermatitis (slide 65; T@78403).'},
  {t:'The miconazole cream, applied thinly twice a day until it clears', correct:false, why:'Topical antifungals are not self-care products for diaper dermatitis (slide 65; T@78403).'},
  {t:'The lidocaine ointment, applied liberally at every diaper change', correct:false, why:'Topical anesthetics (benzocaine, lidocaine) are on the do-not-use list (slide 65); the directions are the protectant\'s.'}],
 teach:'Slide 65: the diaper area is a large share of a baby\'s body surface, and many topical products can lead to systemic side effects.',
 cite:P5X+' slides 63–65, 68; T@77204, T@78403'},

{id:'P5H-011', skill:'dose', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'h5-dupilumab-60kg-boundary',
 tags:['hard','calculation','case'], source:'both',
 stem:'A 17-year-old weighing 132 lb has moderate-to-severe atopic dermatitis not controlled on topical therapy. Dupilumab is started. Which regimen is appropriate?',
 options:[
  {t:'400 mg SC once (two 200 mg injections), then 200 mg every other week', correct:true, why:'132 lb ÷ 2.2 = 60 kg. Adult dosing is for > 60 kg; 30–60 kg takes 400 mg SUBQ once (2 × 200 mg), then 200 mg every other week (slide 44; T@49935).'},
  {t:'600 mg SC once (two 300 mg injections), then 300 mg every other week', correct:false, why:'That is adult dosing, for children over 60 kg (slide 44); 60 kg is not over 60.'},
  {t:'600 mg SC once (two 300 mg injections), then 300 mg every 4 weeks', correct:false, why:'That is the 15–30 kg band (slide 44).'},
  {t:'400 mg SC once (two 200 mg injections), then 200 mg every 4 weeks', correct:false, why:'The loading dose is right for 30–60 kg, but slide 44 continues 200 mg every other week.'}],
 teach:'"I will provide you the weight of the patient ... Divide by 2.2 ... greater than 60 kg, we\'re using adult dosing" (T@49935). Exactly 60 kg stays in the 30–60 kg band.',
 cite:P5X+' slide 44; T@49935, T@50408'},

{id:'P5H-012', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-sys', sub:'dup', concept:'h5-dupilumab-live-vaccine-case',
 tags:['hard','case','interaction'], source:'both',
 stem:'A 29-year-old woman with severe atopic dermatitis is starting dupilumab. She uses triamcinolone 0.1% cream for flares and is due for a live vaccine next month. Which counseling point is correct?',
 options:[
  {t:'Avoid the live vaccine while she is using dupilumab', correct:true, why:'Slides 43–44: do not use with live vaccines; "I may include it on a case and then you know to not recommend it" (T@48108).'},
  {t:'Stop the triamcinolone cream once dupilumab is started', correct:false, why:'Slide 44: dupilumab may be used concomitantly with topical corticosteroids or TCIs (T@51208).'},
  {t:'Inject each dose straight from the refrigerator to limit pain', correct:false, why:'Slide 43: let it reach room temperature for 30–45 minutes first; "it tends to sting less" (T@49587).'},
  {t:'Inject each dose at a 45-degree angle into the upper arm', correct:false, why:'Slide 43: a 90-degree angle into the thigh or lower abdomen; the upper arm is allowed, but not at 45 degrees (T@49260).'}],
 teach:'Dupilumab counseling on slide 43: clean and dry site; 90 degrees; rotate sites; refrigerate, then 30–45 minutes to room temperature.',
 cite:P5X+' slides 43–44; T@48108, T@49260, T@49587, T@51208'},

{id:'P5H-013', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'h5-severe-after-topicals',
 tags:['hard','case','reasoning'], source:'both',
 stem:'A 34-year-old man with severe atopic dermatitis (SCORAD 68, nightly loss of sleep) has not responded to basic management, low-, medium- and high-potency topical steroids, and tacrolimus ointment. He takes no other medicines and has no infections. Which is the most appropriate next step on her algorithm?',
 options:[
  {t:'Dupilumab 600 mg SC once, then 300 mg every other week', correct:true, why:'Severe AD after the topicals have failed: "this is when you look into Dupixent" (T@57774; slide 48); adult dosing 600 mg once (2 × 300 mg), then 300 mg every other week (slide 44).'},
  {t:'Abrocitinib 100 mg by mouth once daily, up to 200 mg later', correct:false, why:'JAK inhibitors are the refractory option after other systemic and biologic therapy (slide 46): "absolute last-line refractory option" (T@54970).'},
  {t:'Crisaborole 2% ointment twice daily to the affected areas', correct:false, why:'Crisaborole is for mild-to-moderate AD (slides 41–42); this patient is severe.'},
  {t:'Clobetasol 0.05% ointment twice daily as daily maintenance', correct:false, why:'Very high potency is not a maintenance regimen, and corticosteroids are not for long-term maintenance (slide 48 footnote e).'}],
 teach:'Severe column of slide 48: basic management, referral to an AD specialist, phototherapy, dupilumab, systemic immunosuppressants; JAK inhibitors come after those (slide 46).',
 cite:P5X+' slides 41, 44, 46, 48; T@54970, T@57774'},

{id:'P5H-014', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'h5-shower-sequence',
 tags:['hard','counsel','list'], source:'both',
 stem:'A patient with atopic dermatitis showers each evening, then uses a moisturizer and triamcinolone 0.1% cream on the lesions. Which order of steps matches her counseling?',
 options:[
  {t:'Wash hands; emollient within 3 min on damp skin; wait a few min; thin layer on lesions', correct:true, why:'Slide 52: wash hands before and after; emollient within 3 minutes after bathing while skin is still damp; thin layer; "you can wait a few minutes between the emollient and then the medication" (T@63718–63910).'},
  {t:'Wash hands; thin layer on lesions on damp skin; emollient on top; cover with plastic wrap', correct:false, why:'The emollient goes on first (slide 52), and "we don\'t want to wrap the medication cause that\'ll increase the absorption" (T@40748).'},
  {t:'Wash hands; wait until skin is fully dry; thin layer on lesions; emollient within 3 min', correct:false, why:'The 3 minutes count from the shower, while the skin is still damp (slide 52); waiting until it is dry misses it.'},
  {t:'Wash hands; emollient within 3 min on damp skin; thick layer on lesions; dress at once', correct:false, why:'A thin layer, rubbed in until it vanishes (slide 35), then 3–5 minutes to air dry before clothing (T@40949).'}],
 teach:'"What are the steps from beginning to end? Make sure to review that" (her PollEv on counseling, T@67283–68043).',
 cite:P5X+' slides 35, 52; T@40748, T@40949, T@63718–63910, T@67283–68043'},

{id:'P5H-016', skill:'class', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'h5-tacro-17yo',
 tags:['hard','case','numbers'], source:'both',
 stem:'A 17-year-old with moderate-to-severe atopic dermatitis has not responded to topical corticosteroids. Which topical regimen is the most appropriate next step?',
 options:[
  {t:'Tacrolimus 0.1% ointment twice daily', correct:true, why:'Slide 39: tacrolimus for moderate-to-severe eczema; 0.1% = adults (> 16 years); apply twice daily. At 17 he takes 0.1%.'},
  {t:'Tacrolimus 0.03% ointment twice daily', correct:false, why:'Slide 39: 0.03% is for 2–15 years; at 17 he is over 16 and takes 0.1%.'},
  {t:'Pimecrolimus 1% cream twice daily', correct:false, why:'Pimecrolimus is for mild-to-moderate eczema (slide 39); this is moderate-to-severe.'},
  {t:'Crisaborole 2% ointment twice daily', correct:false, why:'Crisaborole is the third-line option, after a TCI (slide 41).'}],
 teach:'"The bolded areas, the age, what percentage of the medication, what dosage form ... our biggest things to understand" (T@43528).',
 cite:P5X+' slides 39, 41; T@42877, T@43528'},

{id:'P5H-017', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tci', sub:'tci', concept:'h5-tci-2-weeks',
 tags:['hard','case','numbers'], source:'both',
 stem:'A 20-year-old started pimecrolimus 1% cream twice daily 2 weeks ago for mild-to-moderate atopic dermatitis, after a topical steroid did not help. He says it is not working yet and asks to stop. What is the most appropriate advice?',
 options:[
  {t:'Keep applying it, since a TCI response is expected within 1–8 weeks', correct:true, why:'Slide 38: response in weeks, continue to apply (1–8 weeks); "Which one was the 1 to 8 weeks? TCIs" (T@64477).'},
  {t:'Stop it, since a TCI that has not helped within 48 hours has failed', correct:false, why:'24–48 hours is when a topical steroid shows improvement (slide 52); a TCI takes 1–8 weeks (slide 38).'},
  {t:'Switch to crisaborole 2%, since TCIs are reassessed after 2 weeks', correct:false, why:'Slide 40: reassess TCI treatment after 6 weeks, not 2.'},
  {t:'Keep applying it, and add a wet wrap over the cream at night', correct:false, why:'Continuing is right, but wet wraps are not used with TCIs (slide 30; T@62700).'}],
 teach:'Steroid: improvement in 24–48 hours (slide 52). TCI: 1–8 weeks, reassessed at 6 weeks (slides 38, 40).',
 cite:P5X+' slides 30, 38, 40, 52; T@42877, T@62700, T@64477'},

{id:'P5H-018', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'moist', concept:'h5-lotion-to-petrolatum',
 tags:['hard','case'], source:'both',
 stem:'A 19-year-old woman with mild atopic dermatitis applies a drugstore lotion once a day, and her skin stays dry. Which change is most likely to strengthen her skin barrier?',
 options:[
  {t:'Aquaphor (petrolatum) right after bathing', correct:true, why:'Slide 32: petroleum-containing products are the most effective, occlusive; "the most effective on this chart is the petrolatum-containing moisturizers cause it\'s the thickest and it\'ll last the longest" (T@34640); emollient within 3 minutes after bathing (slide 52).'},
  {t:'Cetaphil lotion once daily at bedtime', correct:false, why:'A lotion is the less effective group and needs 3 x/day or more (slide 32); once daily is what she does now.'},
  {t:'Carmol 20% urea cream on the cracked areas', correct:false, why:'Urea is a humectant that burns or stings on broken skin (slide 32; T@33952).'},
  {t:'Keri Original lotion right after bathing', correct:false, why:'The timing is right, but Keri Original is an emollient lotion, the less effective group (slide 32).'}],
 teach:'Slide 32 from most to least effective: petroleum-containing, ceramide-containing, urea-containing (humectant), emollient lotions.',
 cite:P5X+' slides 32, 52; T@33952, T@34640'},

{id:'P5N-001', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-buttocks-tid',
 tags:['hard','calculation','case'], source:'both',
 stem:'A 52-year-old man is to apply a prescribed ointment to the buttocks three times daily for 10 days. Tubes of 30 g, 45 g, 60 g and 80 g are available. What is the most appropriate size tube to dispense?',
 options:[
  {t:'30 g', correct:false, why:'30 g is once daily (2 g × 10 = 20 g, rounded up); three times daily needs 60 g.'},
  {t:'45 g', correct:false, why:'45 g is twice daily (2 g × 2 × 10 = 40 g, rounded up); the order is three times daily, 60 g.'},
  {t:'60 g', correct:true, why:'Buttocks 4 FTU × 0.5 g = 2 g per application; × 3 a day × 10 days = 60 g, which a 60 g tube holds exactly (slides 10–11).'},
  {t:'80 g', correct:false, why:'Rounding up is needed only when the amount falls between sizes; 60 g needed fits the 60 g tube.'}],
 teach:'Her poll used the same steps (face and neck TID 14 days: 52.5 g, 60 g). Here the total lands on a tube size, so no rounding is needed.',
 cite:P5X+' slides 10–11; PollEv 11/06; T@9580, T@11799'},

{id:'P5N-002', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-trunk-both-daily',
 tags:['hard','calculation'], source:'both',
 stem:'A 44-year-old woman is to apply a cream once daily for 7 days to her whole trunk, chest and abdomen as well as her back. Tubes of 45 g, 60 g, 80 g and 100 g are available. Which tube is the most appropriate to dispense?',
 options:[
  {t:'45 g', correct:false, why:'45 g is short of the 49 g needed (14 FTU × 0.5 g × 7); amounts are rounded up (slide 10).'},
  {t:'60 g', correct:true, why:'Trunk both sides 14 FTU × 0.5 g = 7 g per application; × 1 a day × 7 days = 49 g; round up to 60 g (slides 10–11).'},
  {t:'80 g', correct:false, why:'80 g holds 49 g, but 60 g is the first size above it.'},
  {t:'100 g', correct:false, why:'100 g is the class example: one side of the trunk twice daily for 2 weeks, 98 g (slide 13). Both sides once daily for 7 days is 49 g.'}],
 teach:'Slide 11: trunk both sides 14 FTU (7 each side). Same grams per day as one side twice daily (7 g), but half the days.',
 cite:P5X+' slides 10–11, 13; T@8410–8797, T@10021–10376'},

{id:'P5N-003', skill:'dose', prof:'Patel', tier:'new', topic:'p5-qty', sub:'calc', concept:'h5-tube-face-scalp-5d',
 tags:['hard','calculation','two-facts'], source:'both',
 stem:'A 31-year-old woman is to apply hydrocortisone 1% cream to her face and neck and to her scalp twice daily for 5 days. Tubes of 15 g, 30 g, 45 g and 60 g are available. How many grams are needed, and which tube is dispensed?',
 options:[
  {t:'27.5 g; 30 g tube', correct:true, why:'Face and neck 2.5 FTU + scalp 3 FTU = 5.5 FTU × 0.5 g = 2.75 g per application; × 2 × 5 = 27.5 g; round up to 30 g (slides 10–11).'},
  {t:'12.5 g; 15 g tube', correct:false, why:'12.5 g is the face and neck alone (1.25 g × 2 × 5); the scalp adds 3 FTU.'},
  {t:'35 g; 45 g tube', correct:false, why:'35 g and 45 g are the class example: face and neck twice daily for 2 weeks (slide 13). This course is 5 days and adds the scalp.'},
  {t:'55 g; 60 g tube', correct:false, why:'55 g uses 1 g per FTU; one adult FTU is 0.5 g (slide 10), so the total is 27.5 g.'}],
 teach:'Two areas: add the fingertip units first (2.5 + 3 = 5.5), convert once (× 0.5 g), then multiply by applications.',
 cite:P5X+' slides 10–11, 13; T@9259–9636'},

{id:'P5N-004', skill:'patho', prof:'Patel', tier:'new', topic:'p5-ad', sub:'def', concept:'h5-eczema-not-contagious',
 tags:['hard','case'], source:'both',
 stem:'A 19-year-old college student says her doctor called the itchy, dry patches behind her knees "eczema." Her roommate asks whether she can catch it. What is the correct answer?',
 options:[
  {t:'No; eczema is atopic dermatitis, which is not contagious', correct:true, why:'Slide 17: atopic dermatitis, also known as eczema; no cure; not contagious ("there is no cure sadly, as well as it is not contagious", T@13300).'},
  {t:'Yes; eczema is a fungal skin infection spread by contact', correct:false, why:'Eczema is atopic dermatitis, a chronic or relapsing inflammatory skin disorder, not an infection (slide 17).'},
  {t:'No; eczema is psoriasis, which is an inherited disease', correct:false, why:'Eczema is another name for atopic dermatitis (slide 17; her PollEv), not psoriasis.'},
  {t:'Yes; eczema spreads through S. aureus on the skin', correct:false, why:'S. aureus skin infection is a complication of AD (slide 25); the disease itself is not contagious (slide 17).'}],
 teach:'Slide 17: also known as eczema; chronic or relapsing; often develops in childhood; hallmark symptom pruritus (itching); no cure; not contagious.',
 cite:P5X+' slides 17, 25; PollEv 11/06; T@13300, T@24148'},

{id:'P5N-005', skill:'case', prof:'Patel', tier:'new', topic:'p5-ad', sub:'sev', concept:'h5-case-mild-subacute',
 tags:['hard','case'], source:'both',
 stem:'CC: "My hands feel tight and rough." HPI: 46-year-old woman, a hairdresser, with dry patches on the backs of both hands for 3 weeks; she itches now and then and sleeps well. PMH: atopic dermatitis since childhood. Current meds: none. Other: washes her hands many times a day. Physical assessment: small areas of dry skin with slight redness; no lichenified plaques; no infection. SCORAD 19. How would you best describe the severity/status of this patient\'s clinical presentation?',
 options:[
  {t:'Mild, subacute', correct:true, why:'SCORAD < 25 with infrequent itching and little impact on sleep is mild (slide 23); dry skin without lichenification is subacute ("lichenification, chronic, dryness, subacute", T@26800).'},
  {t:'Mild, acute', correct:false, why:'The severity is right; acute lesions have no dryness (T@26800), and her skin is dry.'},
  {t:'Moderate, subacute', correct:false, why:'The status is right; moderate needs SCORAD 25–50 with frequent itching (slide 23), and 19 is below 25.'},
  {t:'Mild, chronic', correct:false, why:'Chronic is lichenification (T@22645); there are no lichenified plaques.'}],
 teach:'Same two readings as her poll (moderate, subacute for SCORAD 40): the score and impact give severity, the lesions give status. Excessive skin washing is a personal-factor trigger (slide 20).',
 cite:P5X+' slides 20, 23–24; PollEv 11/06; T@22645, T@26800'},

{id:'P5N-006', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'bath', concept:'h5-weeping-on-pimecrolimus',
 tags:['hard','case','interaction'], source:'both',
 stem:'A mother says her 8-year-old, who applies pimecrolimus 1% cream twice daily, has weeping, oozing patches on his arms at night. She asks how to dry them. Which advice fits Dr. Patel\'s counseling?',
 options:[
  {t:'No cool wet wrap or compress over the pimecrolimus, since neither is used with a TCI', correct:true, why:'Slide 30: wet wrap short-term and not with TCIs; slide 51: cool compresses for weeping lesions, "but not to TCI\'s"; "what medication are we not applying that with? ... TCIs" (T@62700).'},
  {t:'A cool wet wrap over the pimecrolimus each night until the oozing stops', correct:false, why:'Wet wraps are not applied with TCIs (slide 30; T@62700).'},
  {t:'Cool tap-water compresses 5–20 minutes, 4–6 times daily, over the pimecrolimus', correct:false, why:'That is the slide 51 compress, but slide 51 adds "but not to TCI\'s".'},
  {t:'A dilute bleach bath every day to dry the patches before the pimecrolimus', correct:false, why:'Bleach baths are twice a week for moderate–severe AD to prevent recurrent infection (slide 31), not a daily drying measure.'}],
 teach:'Other slide 51 measures still fit: short fingernails, cotton gloves or socks on the hands at night, tepid short baths with a non-soap cleanser.',
 cite:P5X+' slides 30–31, 51; T@62700'},

{id:'P5N-007', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'h5-steroid-day2-call',
 tags:['hard','case','numbers'], source:'both',
 stem:'A 33-year-old woman started OTC hydrocortisone 1% cream twice daily on an eczema patch on her neck yesterday morning. She calls about 30 hours later: the itch is a little less, the patch is still red, and she asks whether it is working. What is the most appropriate response?',
 options:[
  {t:'Continue it; steroid improvement shows in 24–48 hours, and she seeks help at 7 days', correct:true, why:'Slide 52: improvement can be observed in 24–48 hours; slide 36: not resolved in 7 days, consider seeking assistance (T@64280, T@63910).'},
  {t:'Stop it; a steroid that has not cleared the patch in 24 hours has failed', correct:false, why:'24–48 hours is when improvement starts to show (slide 52), not when the patch should be clear; the seek-help point is 7 days (slide 36).'},
  {t:'Continue it; steroid improvement takes 1–8 weeks, so she rechecks in 6 weeks', correct:false, why:'1–8 weeks and the 6-week reassessment belong to the TCIs (slides 38, 40); a steroid works in 24–48 hours.'},
  {t:'Switch it; a TCI works faster on the neck than hydrocortisone 1% does', correct:false, why:'A TCI takes 1–8 weeks (slide 38) and is second line after topical steroids (slide 38).'}],
 teach:'Steroid: 24–48 hours to see improvement (slide 52), 3–7 days of use, seek help at 7 days, never past 2 weeks (slide 36). TCI: 1–8 weeks (slide 38).',
 cite:P5X+' slides 36, 38, 40, 52; T@63910, T@64280, T@64477'},

{id:'P5N-008', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-tcs', sub:'prof', concept:'h5-mometasone-on-face',
 tags:['hard','case'], source:'both',
 stem:'A 58-year-old woman with moderate atopic dermatitis has a new mild flare on her cheeks. She still has mometasone furoate 0.1% cream from a flare on her trunk last year and asks whether she can use it on her face. What is the most appropriate answer?',
 options:[
  {t:'No; on the face she uses hydrocortisone 1%, twice daily for 3–7 days', correct:true, why:'Slide 36: hydrocortisone 1%, can use on body, always for face; "this is the only dose and strength that you can utilize on your face" (T@37425); twice daily for max 3–7 days.'},
  {t:'Yes; she applies the mometasone once daily on the face for 3–7 days', correct:false, why:'Mometasone 0.1% cream is medium potency (slide 37), used except on the face (slide 48); a lower frequency does not change that.'},
  {t:'Yes; she applies the mometasone on the face for no more than 2 weeks', correct:false, why:'The 2-week limit applies to every topical steroid (slide 35); on the face only hydrocortisone 1% is used (slide 36).'},
  {t:'No; on the face she uses clobetasol 0.05%, twice daily for 3–7 days', correct:false, why:'Clobetasol 0.05% is very high potency (slide 37); the face takes hydrocortisone 1%.'}],
 teach:'"But what strength and what medication of a corticosteroid is only applied to the face? Good. Hydrocortisone 1%" (T@56931).',
 cite:P5X+' slides 35–37, 48; T@37425, T@56931'},

{id:'P5N-009', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'step', concept:'h5-first-line-asks-nonsteroid',
 tags:['hard','case'], source:'both',
 stem:'CC: "Her elbows and knees itch all the time." HPI: a mother brings her 15-year-old daughter, whose dry, inflamed patches have flared on and off for a year. PMH: atopic dermatitis; asthma. Current meds: albuterol inhaler as needed. Other: the mother asks for "a non-steroid cream" she saw advertised. Physical assessment: dry, inflamed skin; no lichenification; no infection; SCORAD 36. She has used no prescription product. What would be the most appropriate first-line maintenance therapy option for this patient?',
 options:[
  {t:'Basic management plus a low-potency topical corticosteroid', correct:true, why:'Moderate AD (SCORAD 25–50, slide 23): basic management for all, and a topical corticosteroid is the first-line topical medication (slide 48; T@58910). Starting low: "always start with low" (T@56572).'},
  {t:'Basic management plus tacrolimus 0.03% ointment twice daily', correct:false, why:'A TCI is the second-line option if the patient is unresponsive to topical steroids (slide 38); she has used none. (At 15, 0.03% would be the strength, slide 39.)'},
  {t:'Basic management plus crisaborole 2% ointment twice daily', correct:false, why:'Crisaborole is the third-line option if all other options fail (slide 41).'},
  {t:'Basic management plus dupilumab injections every other week', correct:false, why:'Dupilumab is for moderate-to-severe AD not controlled with topical prescription therapies (slides 43, 48).'}],
 teach:'Her poll\'s key words: "First-line ... maintenance" (T@58910). Every option here includes basic management; the line of therapy decides.',
 cite:P5X+' slides 23, 38–39, 41, 43, 48; PollEv 11/06; T@56572, T@58910'},

{id:'P5N-010', skill:'case', prof:'Patel', tier:'new', topic:'p5-alg', sub:'case', concept:'h5-rx-forearm-flare', dupOf:'P5-103',
 tags:['hard','case','two-facts'], source:'both',
 stem:'CC: "My arms are on fire again." HPI: 27-year-old woman with moderate atopic dermatitis has had an acute flare on both forearms for 4 days. PMH: atopic dermatitis since age 6. Current meds: hydrocortisone 1% cream daily as maintenance, including the face. Physical assessment: red, inflamed papules on both forearms; no infection. What would be the most appropriate prescription details for this flare?',
 options:[
  {t:'Triamcinolone 0.1% cream, apply thin layer BID for 3–7 days', correct:true, why:'She is already on low potency, so the flare steps up: medium-to-high potency twice daily for 3–7 days beyond clearance (slide 48; "We\'re going up", T@58143); triamcinolone 0.1% is medium (slide 37); thin layer (slide 35).'},
  {t:'Hydrocortisone 1%, apply thin layer BID for 3–7 days', correct:false, why:'Her poll answer for a patient on no steroid (start low, T@60609); this patient is already on hydrocortisone 1%, so the flare steps up (slide 48).'},
  {t:'Clobetasol 0.05% ointment, apply thin layer BID for 3–7 days', correct:false, why:'Clobetasol is very high potency (slide 37), above the medium-to-high range for a moderate flare (slide 48).'},
  {t:'Triamcinolone 0.1% cream, apply thick layer BID for 14 days', correct:false, why:'Thin layer (slide 35), and the flare course is 3–7 days beyond clearance (slide 48); 14 days is the outer limit, not the course.'}],
 teach:'"They probably have tried a low potency steroid. We\'re going up" (T@58143). The forearms are not the face, so medium potency is allowed (slide 48).',
 cite:P5X+' slides 35, 37, 48; PollEv 11/06; T@58143, T@60609'},

{id:'P5N-011', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-care', sub:'couns', concept:'h5-hc-day5-partial',
 tags:['hard','case','numbers'], source:'both',
 stem:'A 45-year-old man started OTC hydrocortisone 1% cream twice daily on a patch on his forearm 5 days ago. It is better but not gone. When should he seek help or see his PCP if the medication is not helping?',
 options:[
  {t:'Keep going twice daily; seek help if not resolved by day 7', correct:true, why:'Slide 36: twice daily for max 3–7 days; not resolved in 7 days, consider seeking assistance; her PollEv answer, 7 days (T@68450).'},
  {t:'Keep going twice daily; seek help if not resolved by day 14', correct:false, why:'14 days is the outer limit of use (slide 36), not the point to seek help: "that 7-day is the important number to remember" (T@63910).'},
  {t:'Stop now; seek help, since it should have cleared by 48 hours', correct:false, why:'24–48 hours is when improvement can first be seen (slide 52), and he is improving; the seek-help point is 7 days (slide 36).'},
  {t:'Keep going twice daily; seek help if not resolved by week 6', correct:false, why:'6 weeks is the TCI reassessment point (slide 40).'}],
 teach:'Day 5 and improving: within the 3–7 day course (slide 36). Day 8 and unresolved: seek help (P5H-008).',
 cite:P5X+' slides 36, 40, 52; PollEv 11/06; T@63910, T@68450'},

{id:'P5N-012', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'case', concept:'h5-dd-fever-refer',
 tags:['hard','case','referral'], source:'both',
 stem:'CC: "His bottom is bright red." HPI: mother of an 11-month-old boy reports red, shiny patches in the diaper area for 3 days; since yesterday he has had a fever and diarrhea. PMH: none. Current meds: none. Other: has used only his usual body lotion. What would be the most appropriate recommendation?',
 options:[
  {t:'Refer to his provider now, before any self-care product', correct:true, why:'Fever and diarrhea are constitutional symptoms, an exclusion for self-treatment (slide 68): "That is complete referral" (T@80580).'},
  {t:'Zinc oxide paste at every change, follow up in 7 days', correct:false, why:'Right for an otherwise well infant (slides 63–64, 66), but constitutional symptoms exclude self-care (slide 68).'},
  {t:'Zinc oxide paste plus hydrocortisone 1%, follow up in 7 days', correct:false, why:'Hydrocortisone is not a self-care product for diaper dermatitis (slide 65), and the fever excludes self-care (slide 68).'},
  {t:'Miconazole cream twice daily, follow up in 7 days', correct:false, why:'Topical antifungals are not self-care products for diaper dermatitis (slide 65), and the fever excludes self-care (slide 68).'}],
 teach:'Her poll case (5-month-old, no exclusions) took zinc oxide (T@81993). Check slide 68 first: fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, rash elsewhere, rash outside the diaper area, broken skin, behavioral changes, comorbid conditions.',
 cite:P5X+' slides 63–66, 68; PollEv 11/06; T@80580, T@81993'},

{id:'P5N-013', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'excl', concept:'h5-dd-day7-unchanged',
 tags:['hard','case','referral'], source:'both',
 stem:'A father has applied zinc oxide paste at every diaper change for 7 days to his 9-month-old daughter\'s diaper rash. Today the rash looks the same as when it began; she has no fever and the rash has not spread. What is the most appropriate next step?',
 options:[
  {t:'Refer to a physician, since it has not improved after 7 days', correct:true, why:'Slide 66: if not healed, not improved, or worsened after 7 days, refer to a physician (T@78569).'},
  {t:'Continue the zinc oxide until healed, since 7 days have passed', correct:false, why:'Continue until healed is for a rash that has improved but not healed at 7 days (slide 66); this one has not improved.'},
  {t:'Continue the zinc oxide for 7 more days, then refer if unchanged', correct:false, why:'Slide 66 sets the decision at 7 days; an unchanged rash at that point is referred.'},
  {t:'Add hydrocortisone 1% for 7 days, then refer if unchanged', correct:false, why:'Hydrocortisone is not a self-care product for diaper dermatitis (slide 65), and the rash is due for referral now (slide 66).'}],
 teach:'Day 7 has two branches on slide 66: improved but not healed, continue until healed; not healed and not improved, or worse, refer. "Regardless, 7 days" (T@82081–82496).',
 cite:P5X+' slides 65–66; PollEv 11/06; T@78569, T@82081–82496'},

{id:'P5N-014', skill:'counsel', prof:'Patel', tier:'new', topic:'p5-dd', sub:'cause', concept:'h5-iad-nonpharm',
 tags:['hard','case'], source:'both',
 stem:'The daughter of an 81-year-old bedridden man with urinary incontinence asks how to prevent his incontinence-associated dermatitis from coming back. Which set of measures matches Dr. Patel\'s prevention advice for adults?',
 options:[
  {t:'pH-neutral cleansing foam, pat with a soft cloth, barrier cream, protein and vitamins', correct:true, why:'Slide 59 (adults): cleansing routine (bath oil or pH-neutral cleansing foam, patting motion with a soft cloth), skin hydration, barrier cream application, pressure sore prevention, good nutrition (protein, vitamin status) (T@72900).'},
  {t:'Alkaline soap, rub dry with a towel, barrier cream, protein and vitamins', correct:false, why:'Alkaline skin pH is one of the causes on slide 56, and slide 59 uses a patting motion, not rubbing.'},
  {t:'pH-neutral cleansing foam, pat with a soft cloth, hydrocortisone 1%, fluid limits', correct:false, why:'Hydrocortisone is not a self-care product here (slide 65), and fluid limits are not on slide 59; good nutrition is.'},
  {t:'Daily oatmeal bath, pat dry, cool wet wraps at night, cotton gloves on the hands', correct:false, why:'Those are atopic dermatitis measures (slides 30–31, 51), not the slide 59 prevention list.'}],
 teach:'"Adults can also be prone to diaper dermatitis ... the cleansing routine also applies here too ... Is the skin hydrated? Is the barrier cream applied? ... Pressure sore prevention" (T@72900). For infants, ABCDE (slide 62).',
 cite:P5X+' slides 56, 59, 62, 65; T@72900'}
);
