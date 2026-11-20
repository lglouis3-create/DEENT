/* q35_lam_c.js: Dr. Lam, glaucoma therapeutics (Lecture 12, taught 11/19), Exam 3. Implement (administration, order of application, regimen redesign,
   contact lenses, storage, sig reading), follow up (monitoring) and, as low priority, primary closed-angle glaucoma. Ids LMC-*.
   Sources: Lam_Glaucoma.pdf (slide N = PDF page) and her handout Lam_Glaucoma_doc.docx; DEENT_Lecture_11.19_transcript.txt (T@n = character offset into
   that file, cited "11/19"; her part starts at 35742).
   Source notes: eyelid closure is "2 minutes" in the handout and "1 or 2 minutes" in the lecture, so items use "1 to 2 minutes". The lecture says combination
   products are "never once daily", but the handout and slide 62 give netarsudil/latanoprost (Rocklatan) once daily in the evening; items key the three table
   products (Combigan BID, Cosopt BID, Simbrinza TID) and use Rocklatan only as a once-daily distractor for a TID question. Slide 84 names Combigan as
   brimonidine 0.2%/timolol 0.5%. Slide 51 prints Simbrinza as "dorzolamide + brimonidine" while slide 69 and the handout print brinzolamide/brimonidine, so
   items give Simbrinza only as a carbonic anhydrase inhibitor plus an alpha-2 agonist, 1 drop TID, and never ask which CAI. The wait between a suspension and a
   gel-forming solution is not stated, so no item keys it. The handout and lecture call the stinging with CAIs "1 to 2 minutes". Slide 62 prints netarsudil as QHS
   (handout: in the evening). Closed-angle items (lm-pacg) are lowYield: she said she would not test them except the drugs that raise the risk. Verified 2026-11-20:
   LMC-041, LMC-057 and LMC-060 were removed as repeats of LMC-039/040, LMC-032/058 and LMC-027 (ids are not renumbered).
   Preservative-free is given in stems or options (PF) as she said she would flag it. */
/* Cross-file duplicates removed 2026-11-20 (the same fact is asked once, in q33_lam_a.js or q34_lam_b.js): LMC-018, LMC-020, LMC-024, LMC-025, LMC-027, LMC-028, LMC-031, LMC-032, LMC-045, LMC-046, LMC-047, LMC-048, LMC-055, LMC-061. */
QUESTIONS.push(
{id:"LMC-001", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-tip-touch-bacteria",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Alvarez, 76, has arthritis in both hands. To steady her aim she rests the tip of her latanoprost bottle on her lower eyelid before each drop. What is the main concern with this habit?",
 options:[
  {t:"Drug drains down the nasolacrimal duct into the bloodstream", correct:false, why:"Drainage is reduced by closing the lids after the drop; resting the tip does not change it."},
  {t:"The solution is not shaken, so each dose varies in strength", correct:false, why:"Only suspensions are shaken, and latanoprost is a solution."},
  {t:"The next product is flushed away because it follows too soon", correct:false, why:"Washout is the reason for the 5 minute wait between products; it does not come from touching the tip."},
  {t:"Bacteria from the lid can get into the multiple-dose bottle", correct:true, why:"The tip must not touch the eye, the hands or any surface. Skin and eyes carry many bacteria, and the same bottle is used for later drops."}],
 teach:"Do not touch the dropper tip to the eye, hands or any surface: skin and eyes carry bacteria that would contaminate a multiple-dose bottle.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 71; T@86335, T@86388 11/19"},

{id:"LMC-002", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-copd-timolol",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Brandt, 66, has well-controlled COPD and is starting timolol 0.5% twice daily. Which instillation advice most directly lowers his chance of a systemic side effect?",
 options:[
  {t:"Keep the eyelids gently closed for 1 to 2 minutes after each drop", correct:true, why:"Eyelid closure lowers nasolacrimal drainage, so less drug is absorbed systemically and systemic side effects are less severe."},
  {t:"Blink repeatedly for 1 to 2 minutes after each drop to spread it", correct:false, why:"The lids are held closed; blinking is not the instruction."},
  {t:"Squeeze the eyelids tightly shut for 1 to 2 minutes after each drop", correct:false, why:"The lids are closed but not squeezed or rubbed, and pressing should not cause pain."},
  {t:"Rub the closed eyelid gently for 1 to 2 minutes after each drop", correct:false, why:"The lids are closed, not squeezed or rubbed."}],
 teach:"Eyelid closure (1 to 2 minutes, gentle, no squeezing or rubbing) decreases nasolacrimal drainage and so systemic absorption and the severity of systemic side effects.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 72-73; T@86627, T@87190 11/19"},

{id:"LMC-003", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-mechanism",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which change explains why keeping the eyelids closed after a drop lowers the severity of systemic side effects?",
 options:[
  {t:"Slower aqueous humor production, so less drug is carried away", correct:false, why:"Slowing aqueous humor production is an effect of the drug, not of closing the lids."},
  {t:"Less bacteria on the bottle tip, so less drug is absorbed", correct:false, why:"A clean tip keeps bacteria out of the bottle; it does not change absorption."},
  {t:"Less trapping under a contact lens, so less drug is absorbed", correct:false, why:"Trapping under lenses is handled by removing lenses before the drop; it does not explain systemic side effects."},
  {t:"Less nasolacrimal drainage, so less systemic absorption", correct:true, why:"Eyelid closure decreases nasolacrimal drainage, which decreases systemic absorption and the severity of systemic side effects."}],
 teach:"Eyelid closure: decreased nasolacrimal drainage leads to decreased systemic absorption and milder systemic side effects.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 72; T@86627 11/19"},

{id:"LMC-004", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-pressing-pain",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Osei, 69, started dorzolamide. He presses hard on the corner of his eyelid for about 20 seconds after each drop, and it hurts. What should the pharmacist counsel?",
 options:[
  {t:"Press firmly for 5 minutes so that more of the drop stays in the eye", correct:false, why:"The time is 1 to 2 minutes, and the pressure is gentle, not firm."},
  {t:"Press gently, without pain, and keep the lids closed for 1 to 2 minutes", correct:true, why:"Press on the corner of the eyelid for 1 or 2 minutes; the pressure should not cause pain, only hold the drug in the eye."},
  {t:"Stop pressing and blink for about 10 seconds so the drop spreads over the whole eye surface", correct:false, why:"The instruction is to press or close the lids for 1 to 2 minutes, not to blink for seconds."},
  {t:"Press gently for 10 minutes so the drop is not absorbed systemically", correct:false, why:"Gentle pressure is right, but the time is 1 to 2 minutes, not 10 minutes."}],
 teach:"Gentle eyelid closure or pressure at the corner of the eyelid for 1 to 2 minutes; it should not hurt.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 72-73; T@87251, T@87190 11/19"},

{id:"LMC-005", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-instill-steps-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mrs. Dube, 70, is learning to instill her drops. Which steps belong to the correct technique? Select all that apply.",
 options:[
  {t:"Pull down the outer part of the lower eyelid to form a pocket", correct:true, why:"Slide 73: the lower lid is pulled down to form a pocket for the drop."},
  {t:"Rub the closed eyelid to help the drop spread", correct:false, why:"The lids are closed, not squeezed or rubbed."},
  {t:"Wash the hands before the drop", correct:true, why:"Clean the hands first: skin carries bacteria that would reach the bottle and the eye."},
  {t:"Steady the dropper by resting its tip on the lower lid", correct:false, why:"The tip must not touch the eye, hands or any surface."},
  {t:"Squeeze the eyelids tightly shut right after the drop", correct:false, why:"The lids are closed without squeezing."},
  {t:"Keep the lids closed for 1 to 2 minutes after the drop", correct:true, why:"Closure for 1 to 2 minutes (the handout says about 2) lowers drainage and systemic absorption."}],
 teach:"Clean hands, pocket in the lower lid, one drop, lids closed (not squeezed or rubbed) for 1 to 2 minutes; the tip touches nothing.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 71-73; T@86951, T@86975, T@87119 11/19"},

{id:"LMC-006", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-tip-and-blink-two-points",
 tags:["hard", "case"], source:'both',
 stem:"After each drop Mr. Fuentes touches the bottle tip to his lid to dab away extra liquid and then blinks several times. Which pair of changes should the pharmacist counsel?",
 options:[
  {t:"Dab the tip with a clean tissue after each drop, and blink to spread the drop", correct:false, why:"The tip should touch no surface, a tissue included, and the lids are held closed rather than blinked."},
  {t:"Hold the bottle closer to the eye for aim, and rub the closed lid for 2 minutes", correct:false, why:"Closeness invites contact with the tip, and the lids are not rubbed."},
  {t:"Touch the tip to the lid for the first drop alone, and keep the lids closed for 15 minutes", correct:false, why:"The tip should touch nothing for any drop, and closure is 1 to 2 minutes; 15 minutes is the contact lens wait."},
  {t:"Keep the tip from touching anything, and keep the lids closed instead of blinking", correct:true, why:"Two points: the tip must not touch the eye, hands or any surface, and eyelid closure for 1 to 2 minutes lowers systemic absorption."}],
 teach:"Two basics at once: the tip touches nothing (bacteria), and the lids stay closed 1 to 2 minutes (systemic absorption).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 71-73; T@86335, T@87190 11/19"},

{id:"LMC-007", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-four-solutions-washout",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Grant, 72, uses bimatoprost, timolol, brimonidine and dorzolamide solutions. He puts all four in within one minute each morning, and his eye pressure stays above goal although he takes each dose. What is the problem and the fix?",
 options:[
  {t:"Dose too low: the prescriber should raise each product to 2 drops per eye at each dose", correct:false, why:"One drop is the dose, and the eye holds only a small volume, so extra drops are washed out too."},
  {t:"Incorrect administration: no 5 minute wait, so each drop flushes out the one before", correct:true, why:"Wait 5 minutes between two solutions so the first drop is not flushed away or diluted by the second."},
  {t:"Indication: duplicate therapy, so one of the four solutions should be stopped", correct:false, why:"The four solutions are four different classes, so none duplicates another; the missing wait is the problem."},
  {t:"Dosage form inappropriate: the four solutions should be changed to suspensions with longer retention", correct:false, why:"Suspensions also need a 5 minute wait after a solution, so changing the form does not address the timing."}],
 teach:"Two solutions: wait 5 minutes between them, so the first drop is not flushed away or diluted. Skipping the wait is an incorrect administration problem that lowers effectiveness.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74; T@87661, T@87898 11/19"},

{id:"LMC-008", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-order-two-solutions-suspension",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Park, 64, uses timolol 0.5% solution, brimonidine 0.1% solution and brinzolamide 1% suspension for her morning doses. Which sequence is correct?",
 options:[
  {t:"Shaken brinzolamide, wait 5 minutes, timolol, wait 5 minutes, then brimonidine", correct:false, why:"The suspension goes after the solutions, not before."},
  {t:"Timolol, brimonidine and shaken brinzolamide, one right after the next", correct:false, why:"Each product needs a 5 minute wait so it is not flushed out by the next."},
  {t:"Timolol, wait 5 minutes, brimonidine, wait 5 minutes, shaken brinzolamide", correct:true, why:"Slide 74-75: solutions first (any order, 5 minutes apart), the suspension after another 5 minutes, shaken well before use."},
  {t:"Timolol, wait 5 minutes, shaken brinzolamide, wait 5 minutes, then brimonidine", correct:false, why:"The suspension is last, after both solutions."}],
 teach:"Order of application: solution, then suspension (shake it well), each separated by 5 minutes; two solutions can go in either order.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88090, T@87661 11/19"},

{id:"LMC-009", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-why-suspension-last",
 tags:["hard", "reasoning"], source:'both',
 stem:"A patient asks why the brinzolamide suspension goes in after her solution drops and not before. Which reason is correct?",
 options:[
  {t:"Its thick composition places it with the ointments and gels", correct:false, why:"Gel-forming solutions go with ointments for their thickness and composition; a suspension goes before them."},
  {t:"It stays in the tear film longer than a solution", correct:true, why:"A suspension is used after the solution because of its prolonged retention time in the tear film (handout)."},
  {t:"Its preservative expires sooner once the bottle is opened", correct:false, why:"Time since opening is a storage point (netarsudil); it does not set the order of application."},
  {t:"The wait after a suspension is 10 minutes, so it goes last", correct:false, why:"The 10 minute wait is for an ointment or gel-forming solution; solution to suspension is 5 minutes."}],
 teach:"Suspension after solution because its retention time in the tear film is longer; shake suspensions well before use.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74 and handout; T@88090 11/19"},

{id:"LMC-010", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-betaxolol-suspension-shake-order",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Weiss, 67, uses latanoprost solution and betaxolol 0.25% suspension at bedtime. Which counseling is correct for the bedtime doses?",
 options:[
  {t:"Instill latanoprost, wait 5 minutes, then shake the betaxolol and instill it", correct:true, why:"Solution first, then the suspension 5 minutes later, shaking the suspension well before use (slide 74 and the handout)."},
  {t:"Shake the latanoprost, then instill both bottles back to back", correct:false, why:"Suspensions are shaken, not solutions, and the two products need 5 minutes between them."},
  {t:"Instill the betaxolol first, then latanoprost 5 minutes later", correct:false, why:"The suspension goes after the solution."},
  {t:"Instill latanoprost, wait 10 minutes, then instill the betaxolol without shaking it", correct:false, why:"Suspensions are shaken well before use, and the wait between a solution and a suspension is 5 minutes."}],
 teach:"Solution before suspension with a 5 minute wait, and shake the suspension (betaxolol 0.25%, Betoptic-S) before use.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88090 11/19"},

{id:"LMC-011", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-wait-ten",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Okoye, 60, uses brimonidine 0.1% solution and timolol gel-forming solution once daily, both in the morning. How should the pharmacist counsel her?",
 options:[
  {t:"Brimonidine first, wait about 5 minutes, then the timolol gel-forming solution", correct:false, why:"5 minutes is the wait between two solutions or between a solution and a suspension."},
  {t:"Timolol gel first, wait at least 10 minutes, then brimonidine solution", correct:false, why:"The gel-forming solution goes last."},
  {t:"Timolol gel first, wait about 5 minutes, then the brimonidine solution", correct:false, why:"The gel-forming solution goes last, and the wait before it is 10 minutes."},
  {t:"Brimonidine first, wait at least 10 minutes, then the timolol gel", correct:true, why:"Slide 74: wait 10 minutes between a solution and an ointment or gel-forming solution; the solution goes first."}],
 teach:"Solution first, then at least 10 minutes before an ointment or gel-forming solution (such as timolol gel).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88233, T@88567 11/19"},

{id:"LMC-012", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-first-error",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Yilmaz, 68, puts in his timolol gel-forming solution at 8:00 and dorzolamide 2% solution at 8:02. His eye pressure stays above goal although he takes both. Which administration error most likely lowers the dorzolamide's effect?",
 options:[
  {t:"The dorzolamide should be shaken before it is instilled", correct:false, why:"Shaking applies to suspensions; dorzolamide 2% is a solution."},
  {t:"The two products should be 5 minutes apart, with the gel first", correct:false, why:"The gel-forming solution goes last, with 10 minutes after the drops."},
  {t:"The solution should go first, at least 10 minutes before the gel", correct:true, why:"The handout: use drops at least 10 minutes before the ointment or gel to ensure the efficacy of the drops."},
  {t:"The dorzolamide should wait 15 minutes after the gel before going in", correct:false, why:"15 minutes is the wait before lenses go back in; the solution belongs before the gel, not after."}],
 teach:"Solution first, then 10 minutes, then the ointment or gel-forming solution, so the drop reaches the eye and its efficacy is kept.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88233 11/19"},

{id:"LMC-013", skill:"tell", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-grouped-with-ointments",
 tags:["hard", "tell"], source:'both',
 stem:"Mrs. Nolan keeps four products by her bed. For order of application, which one belongs in the last group with ointments?",
 options:[
  {t:"Timolol 0.5% solution twice daily", correct:false, why:"This is an ordinary solution and goes first."},
  {t:"Dorzolamide 2% solution three times daily", correct:false, why:"This is an ordinary solution and goes first."},
  {t:"Brinzolamide 1% suspension three times daily", correct:false, why:"A suspension goes after solutions but before ointments and gel-forming solutions."},
  {t:"Timolol gel-forming solution once daily", correct:true, why:"Slide 75 and the lecture: a gel-forming solution is grouped with the ointments because of its thickness and composition."}],
 teach:"Order: solution, suspension, then ointment or gel-forming solution; timolol gel is the gel-forming example.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 75; T@88661 11/19"},

{id:"LMC-014", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-multi-product-rules-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which instillation steps are appropriate for a patient who uses two solutions, a suspension and a gel-forming solution? Select all that apply.",
 options:[
  {t:"Wait 5 minutes between two solutions", correct:true, why:"Slide 74: 5 minutes so the second drop does not flush out or dilute the first."},
  {t:"Instill a suspension before a solution so the solution is not diluted", correct:false, why:"The solution goes first; the suspension follows 5 minutes later."},
  {t:"Shake a suspension well before use", correct:true, why:"The handout: shake suspensions well before use."},
  {t:"Wait 10 minutes between two solutions", correct:false, why:"Two solutions are 5 minutes apart; 10 minutes is the wait before an ointment or gel."},
  {t:"Use drops at least 10 minutes before a gel-forming solution", correct:true, why:"The handout: use drops at least 10 minutes before the ointment to ensure the efficacy of the drops."},
  {t:"Instill the suspension after the solution because it stays longer in the tear film", correct:true, why:"Slide 74: prolonged retention time in the tear film."}],
 teach:"Solution to solution 5 minutes; solution to suspension 5 minutes (shake it); solution to ointment or gel 10 minutes.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@87661, T@88233 11/19"},

{id:"LMC-015", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-order-three-forms",
 tags:["hard", "case"], source:'both',
 stem:"A patient uses latanoprost solution, brinzolamide suspension and timolol gel-forming solution. In which order, first to last, should they be instilled?",
 options:[
  {t:"Latanoprost, shaken brinzolamide, timolol gel", correct:true, why:"Order of application: solution, suspension, then ointment or gel-forming solution."},
  {t:"Timolol gel, shaken brinzolamide, then latanoprost", correct:false, why:"This reverses the order; the gel-forming solution is last."},
  {t:"Shaken brinzolamide, latanoprost, then timolol gel", correct:false, why:"The solution goes before the suspension."},
  {t:"Latanoprost, timolol gel, then shaken brinzolamide", correct:false, why:"The gel-forming solution is grouped with ointments and goes last."}],
 teach:"Solution, then suspension, then ointment or gel-forming solution.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 75; T@88567, T@88661 11/19"},

{id:"LMC-016", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-wait-reason-washout",
 tags:["hard", "reasoning"], source:'both',
 stem:"Mr. Barzani asks why he cannot instill his two solutions back to back. Which answer gives both the wait and the reason?",
 options:[
  {t:"Wait 10 minutes, so the first drop can be absorbed before the second arrives", correct:false, why:"10 minutes is the wait before an ointment or gel; two solutions are 5 minutes apart."},
  {t:"Wait 5 minutes, so the bottle tip is not contaminated by the first drop", correct:false, why:"Contamination is prevented by keeping the tip from touching anything; the wait prevents washout."},
  {t:"Wait 5 minutes, so the second drop does not flush away or dilute the first", correct:true, why:"Slide 74: 5 minutes between two solutions; the first drop can be flushed away or diluted by the second."},
  {t:"Wait 15 minutes, so the first drop is not rinsed out of the eye by tears", correct:false, why:"15 minutes is the wait before reinserting contact lenses."}],
 teach:"Between two solutions wait 5 minutes: one eye holds a small volume, and the second drop would flush away or dilute the first.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74; T@87898, T@87940 11/19"},

{id:"LMC-017", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-four-solutions-total-time",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Hale, 70, uses four different solutions each morning, one drop in each eye. If he waits between solutions as advised, how long is it from his first drop to his last?",
 options:[
  {t:"10 minutes, from two waits of 5 minutes", correct:false, why:"Four solutions have three gaps, not two."},
  {t:"15 minutes, from three waits of 5 minutes", correct:true, why:"Four solutions have three gaps of 5 minutes: 3 x 5 = 15 minutes."},
  {t:"30 minutes, from three waits of 10 minutes", correct:false, why:"The wait between two solutions is 5 minutes; 10 minutes is the wait before an ointment or gel."},
  {t:"5 minutes, from one wait", correct:false, why:"One wait of 5 minutes covers only two solutions; four solutions have three gaps."}],
 teach:"Wait 5 minutes between each pair of solutions; four solutions take 15 minutes from first to last drop, which is why too many bottles hurts adherence.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74, 76; T@87661, T@89231 11/19"},

{id:"LMC-019", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-combigan",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Ito, 73, uses bimatoprost 0.01% 1 drop OU in the evening, timolol 0.5% 1 drop OU BID and brimonidine 0.1% 1 drop OU BID. Her goal is fewer bottles with the same classes. Which complete regimen fits?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; brimonidine/timolol (Combigan) 1 drop OU once daily", correct:false, why:"Combigan is dosed BID, not once daily (slide 69)."},
  {t:"Bimatoprost 1 drop OU in the evening; dorzolamide/timolol (Cosopt) 1 drop OU BID", correct:false, why:"Cosopt swaps her alpha-2 agonist for a CAI she is not taking."},
  {t:"Bimatoprost 1 drop OU in the evening; Simbrinza (CAI/alpha-2 agonist) 1 drop OU TID", correct:false, why:"Simbrinza pairs a CAI with an alpha-2 agonist, so it drops her beta blocker and adds a CAI."},
  {t:"Bimatoprost 1 drop OU in the evening; brimonidine/timolol (Combigan) 1 drop OU BID", correct:true, why:"Combigan combines her alpha-2 agonist and beta blocker and is dosed BID (slide 69)."}],
 teach:"Match the combination to the classes in the regimen: Combigan = alpha-2 agonist + beta blocker, 1 drop BID.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 69; T@85939, T@89739 11/19"},

{id:"LMC-021", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-four-bottles-full",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Reyes, 66, uses bimatoprost 0.01% 1 drop OU in the evening, timolol 0.5% 1 drop OU BID, brimonidine 0.1% 1 drop OU BID and dorzolamide 2% 1 drop OU TID. She cannot wait between four bottles. Which complete regimen cuts one bottle without repeating a drug and keeps each frequency correct?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; Cosopt 1 drop OU BID; Combigan 1 drop OU BID", correct:false, why:"Both combinations contain timolol, which repeats the beta blocker."},
  {t:"Bimatoprost 1 drop OU BID; Cosopt 1 drop OU BID; brimonidine 0.1% 1 drop OU BID", correct:false, why:"A prostaglandin analog twice daily lowers its efficacy."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan 1 drop OU BID; dorzolamide 2% 1 drop OU TID", correct:true, why:"Combigan replaces timolol and brimonidine (BID); bimatoprost stays once daily and dorzolamide stays TID."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan 1 drop OU once daily; dorzolamide 2% 1 drop OU TID", correct:false, why:"Combigan is dosed BID, not once daily."}],
 teach:"Complete the modified regimen with drug, dose, frequency and route: PGA once daily in the evening; Combigan BID; dorzolamide TID.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 76-82; T@89739, T@85939 11/19"},

{id:"LMC-022", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-duplicate-timolol",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Pruitt, 71, brings bimatoprost 1 drop OU in the evening, Combigan 1 drop OU BID, timolol 0.5% 1 drop OU BID from another prescriber, and dorzolamide 2% 1 drop OU TID. Which medication-related problem is most important?",
 options:[
  {t:"Indication: duplicate therapy, as Combigan already contains timolol", correct:true, why:"Slide 78: unnecessary drug therapy includes duplicate therapy. Combigan is brimonidine/timolol (slide 69)."},
  {t:"Effectiveness: frequency inappropriate, since Combigan should be given TID", correct:false, why:"Combigan is dosed BID."},
  {t:"Effectiveness: dose too low, since dorzolamide should be given QID", correct:false, why:"Dorzolamide is dosed TID."},
  {t:"Indication: need additional therapy, since pilocarpine is missing", correct:false, why:"Cholinergics are used later in the sequence; nothing here calls for adding a drug, while two products overlap."}],
 teach:"Check combination products for ingredients that repeat a drug already listed: duplicate therapy is an indication problem.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 15, 32, 69, 78; T@85939 11/19"},

{id:"LMC-023", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-asthma-two-drugs",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Anders, 63, uses his rescue inhaler several times a day for asthma that is not controlled. His eye drops are bimatoprost, timolol, brimonidine and pilocarpine. Which two should the pharmacist flag to the prescriber?",
 options:[
  {t:"Bimatoprost and brimonidine", correct:false, why:"Asthma is not a precaution for these two; brimonidine's precautions are cardiovascular disease, kidney disease and stroke."},
  {t:"Bimatoprost and timolol", correct:false, why:"Timolol is a precaution, but the prostaglandin analog is not."},
  {t:"Timolol and pilocarpine", correct:true, why:"Slides 34 and 59: asthma is a precaution for both the beta blocker (bronchospasm) and the cholinergic agonist (bronchospasm)."},
  {t:"Brimonidine and pilocarpine", correct:false, why:"Pilocarpine is a precaution, but brimonidine is not an asthma precaution."}],
 teach:"Uncontrolled asthma or COPD: beta blockers and pilocarpine can cause bronchospasm if absorbed; flag them.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 33-34, 58-59; T@60994, T@81993 11/19"},

{id:"LMC-026", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-cost-single-use-pf",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Silvestri, 74, was changed to single-use preservative-free tafluprost vials. He has no reaction to preservatives, and the copay is high. Which action addresses the problem?",
 options:[
  {t:"Cost: ask the prescriber about a lower-cost generic prostaglandin analog", correct:true, why:"Slide 79: a more cost-effective medication available. Prostaglandin analogs have lower-cost generics, and single-use vials cost a little more."},
  {t:"Effectiveness: ask the prescriber to double the dose of tafluprost to improve control", correct:false, why:"Cost, not dose, is the problem, and a prostaglandin analog given more often loses efficacy."},
  {t:"Safety: ask the prescriber to switch to a preservative-free beta blocker", correct:false, why:"No reaction is described; switching class is for intolerance or an inadequate response, and cost is the problem here."},
  {t:"Indication: stop tafluprost, because single-use vials have no indication here", correct:false, why:"Tafluprost is a prostaglandin analog, first line; the problem is cost."}],
 teach:"Cost problems: look for a more cost-effective drug. Preservative-free single-use products are a little more expensive; generic prostaglandin analogs are low in cost.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 20, 68, 79; T@54842, T@51810 11/19"},

{id:"LMC-029", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-select-changes", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mr. Kowalski, 72, uses bimatoprost 1 drop OU in the evening, timolol 0.5% solution BID, brimonidine 0.1% BID and dorzolamide 2% TID, and cannot manage four bottles. Which individual changes are reasonable? Select all that apply.",
 options:[
  {t:"Replace timolol and brimonidine with Combigan 1 drop OU BID", correct:true, why:"Combigan is brimonidine/timolol, dosed BID (slide 69)."},
  {t:"Increase bimatoprost to 1 drop OU BID", correct:false, why:"More frequent prostaglandin analog dosing lowers efficacy."},
  {t:"Replace timolol and dorzolamide with Cosopt 1 drop OU BID", correct:true, why:"Cosopt is dorzolamide/timolol, dosed BID (slide 69)."},
  {t:"Replace timolol and dorzolamide with Cosopt 1 drop OU once daily", correct:false, why:"Cosopt is dosed BID, not once daily."},
  {t:"Replace timolol solution with timolol gel 1 drop OU once daily", correct:true, why:"The gel allows once daily dosing (slide 32; the lecture named the gel as one fix)."},
  {t:"Add Simbrinza 1 drop OU TID to the current regimen", correct:false, why:"Simbrinza repeats the CAI and the alpha-2 agonist already in the regimen."}],
 teach:"Fixes for too many drops: a combination product built from classes already in use, or a once daily gel in place of timolol solution.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 32, 69, 76-82; T@90121 11/19"},

{id:"LMC-030", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-five-bottles-pilocarpine",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Abara, 70, uses bimatoprost 1 drop OU in the evening, timolol 0.5% BID, brimonidine 0.1% BID, dorzolamide 2% TID and pilocarpine 2% QID. She is overwhelmed by five bottles. Which complete regimen cuts one bottle and keeps correct dosing?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU twice daily", correct:false, why:"Pilocarpine is dosed QID, not twice daily."},
  {t:"Bimatoprost 1 drop OU in the evening; Cosopt BID; Combigan BID; pilocarpine 1 drop OU QID", correct:false, why:"Both combinations contain timolol, so the beta blocker is duplicated."},
  {t:"Bimatoprost 1 drop OU BID; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU QID", correct:false, why:"A prostaglandin analog twice daily loses efficacy."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU QID", correct:true, why:"Combigan replaces timolol and brimonidine; the other drugs keep their usual frequencies (bimatoprost daily, dorzolamide TID, pilocarpine QID)."}],
 teach:"With five bottles keep each drug's usual frequency: PGA daily, Combigan or Cosopt BID, dorzolamide TID, pilocarpine QID.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 57, 69, 76-82; T@80784, T@89739 11/19"},

{id:"LMC-033", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-remove-wait-15",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Tanaka, 62, wears soft contact lenses all day and puts her morning timolol drop in with the lenses in. What should the pharmacist counsel?",
 options:[
  {t:"Remove the lenses first and reinsert them at least 15 minutes after the drop", correct:true, why:"Slide 83: remove lenses, then wait 15 minutes; lenses trap drugs and preservatives against the eye."},
  {t:"Remove the lenses first and reinsert them after 10 minutes, once the drop has settled", correct:false, why:"10 minutes is the wait before an ointment or gel; the lens wait is 15 minutes."},
  {t:"Keep the lenses in and keep the lids closed for 1 to 2 minutes after the drop", correct:false, why:"Lenses are removed before the drop; closure of the lids is a separate counseling point."},
  {t:"Remove the lenses first and reinsert them after 5 minutes, as between two solutions", correct:false, why:"5 minutes is the wait between solutions, not the lens wait."}],
 teach:"Contact lenses: remove before the drop, wait at least 15 minutes before reinserting.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 83-84; T@91057 11/19"},

{id:"LMC-034", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-why-trap",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which concern explains the advice to remove contact lenses before using eye drops?",
 options:[
  {t:"Lenses speed drainage of the drop down through the nasolacrimal duct", correct:false, why:"Drainage is reduced by eyelid closure; lenses are not linked to faster drainage."},
  {t:"Lenses make the drop wash out the next solution", correct:false, why:"Washout is the reason for the 5 minute wait between products; lenses are not involved."},
  {t:"Lenses raise the chance of bacteria entering the bottle", correct:false, why:"Contamination is prevented by keeping the tip from touching anything, not by removing lenses."},
  {t:"Lenses trap the drug and preservative against the eye surface", correct:true, why:"Slide 83: the concern is that lenses trap drugs and preservatives against the eye, which matters most with BAK."}],
 teach:"Lenses trap drugs and preservatives such as BAK against the eye, which can damage it.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91253 11/19"},

{id:"LMC-035", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-sequence-two-solutions",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Chavez, 58, wears lenses by day. Her morning drops are brimonidine 0.1% solution and timolol 0.5% solution, both multiple-dose bottles with benzalkonium chloride. Which morning sequence is correct?",
 options:[
  {t:"Remove lenses, brimonidine, timolol right away, wait 15 minutes, insert lenses", correct:false, why:"The two solutions need 5 minutes between them."},
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol, insert lenses right away", correct:false, why:"Lenses wait 15 minutes after the last drop."},
  {t:"Brimonidine, wait 5 minutes, timolol, then remove lenses, wait 15 minutes, insert lenses", correct:false, why:"The lenses come out before the first drop."},
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol, wait 15 minutes, insert lenses", correct:true, why:"Two solutions are 5 minutes apart, and lenses go back 15 minutes after the last drop."}],
 teach:"Combine rules: remove lenses first, 5 minutes between solutions, and 15 minutes after the last drop before lenses go back in.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74, 83-84; T@92094 11/19"},

{id:"LMC-036", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-not-excluded",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Ndlovu, 60, wears contact lenses and has been told that lens wearers cannot use glaucoma drops. Which response is correct?",
 options:[
  {t:"He should ask the prescriber for oral therapy, since lenses rule out eye drops", correct:false, why:"Lens wear does not rule out drops."},
  {t:"He can use them: remove lenses, instill, and wait 15 minutes before reinserting", correct:true, why:"The lecture: wearing lenses does not exclude a patient from any product; it changes how the drops are used."},
  {t:"He can use them with the lenses in, if he waits 5 minutes between each pair of drops", correct:false, why:"Lenses are removed before every drop; 5 minutes is the wait between products."},
  {t:"He should remove the lenses just for products that contain BAK, and not for others", correct:false, why:"BAK makes removal especially important, but lenses come out before any drop."}],
 teach:"Contact lens wear does not exclude any product; remove lenses, give the drops, wait 15 minutes.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91731 11/19"},

{id:"LMC-037", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-statements-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which instructions apply when a patient who wears contact lenses uses glaucoma drops? Select all that apply.",
 options:[
  {t:"Remove the lenses before using the drops", correct:true, why:"Slide 83."},
  {t:"Lenses may stay in when the product is a suspension", correct:false, why:"Lenses come out before the drop for any product."},
  {t:"Wait 15 minutes after the drop before reinserting the lenses", correct:true, why:"Slide 83: wait 15 minutes."},
  {t:"A 5 minute wait is enough when the product is a solution", correct:false, why:"The lens wait is 15 minutes; 5 minutes is the wait between solutions."},
  {t:"Removal and waiting matter most when the product contains BAK", correct:true, why:"Slide 83: especially important for products with BAK, which is damaging to the eyes when used with contacts."},
  {t:"Lens wearers are excluded from products with preservatives", correct:false, why:"Lens wear does not exclude any product."}],
 teach:"Lenses out, drop in, wait 15 minutes; BAK makes this most important; no product is excluded.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91057, T@91731 11/19"},

{id:"LMC-038", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-bak-irritation-two-points",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Cho, 55, wears lenses and uses a multiple-dose latanoprost bottle with benzalkonium chloride. His eyes are irritated. Which pair of points should the pharmacist make?",
 options:[
  {t:"Remove lenses and wait 5 minutes after the drop, and ask about a single-use preservative-free product", correct:false, why:"The lens wait is 15 minutes, not 5 minutes."},
  {t:"Keep the lenses in and give the drop at bedtime, and ask the prescriber about a preservative-free product", correct:false, why:"Lenses come out before the drop at any time of day."},
  {t:"Remove lenses and wait 15 minutes, and ask about a single-use preservative-free product", correct:true, why:"BAK is trapped by lenses and irritating; the lens routine is needed, and preservative-free products are the option for preservative intolerance."},
  {t:"Remove lenses and wait 15 minutes, and ask the prescriber to add a second prostaglandin analog for comfort", correct:false, why:"Another prostaglandin analog does not address the preservative."}],
 teach:"BAK plus lenses: remove lenses, wait 15 minutes, and consider a preservative-free product for preservative intolerance.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 21, 68, 83; T@91253, T@55285 11/19"},

{id:"LMC-039", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-netarsudil-6wk",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Rowe, 67, opened her netarsudil bottle 8 weeks ago, kept it at room temperature, and it still has liquid. What counseling is correct?",
 options:[
  {t:"Keep using it; once opened it stays at room temperature until the bottle is empty", correct:false, why:"That applies to latanoprost, latanoprostene bunod and tafluprost, which have no 6 week limit."},
  {t:"Replace it: opened netarsudil lasts less than 6 weeks at room temperature", correct:true, why:"Slide 85: netarsudil is refrigerated before opening and kept at room temperature for less than 6 weeks once opened."},
  {t:"Move it to the refrigerator and keep using it until the bottle is empty", correct:false, why:"Refrigeration is for the unopened bottle."},
  {t:"Keep using it for another 6 weeks, then replace it with a new bottle", correct:false, why:"The 6 week limit counts from opening, and 8 weeks have passed."}],
 teach:"Netarsudil: refrigerate before opening; room temperature for less than 6 weeks after opening (it relates to how long the preservative lasts).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 85; T@92585 11/19"},

{id:"LMC-040", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-two-new-bottles",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Kane receives new, unopened bottles of latanoprost and netarsudil. Which storage counseling is correct?",
 options:[
  {t:"Refrigerate both until opened, then keep at room temperature, netarsudil within 6 weeks", correct:true, why:"Slide 85: both are refrigerated before opening; after opening both are kept at room temperature, with netarsudil limited to less than 6 weeks."},
  {t:"Refrigerate both before and after opening, using the netarsudil within 6 weeks of opening", correct:false, why:"After opening, both are kept at room temperature."},
  {t:"Keep both at room temperature from the start, using the netarsudil within 6 weeks of opening", correct:false, why:"Both are refrigerated until opened."},
  {t:"Refrigerate both until opened; once opened keep both at room temperature for up to 6 weeks", correct:false, why:"Only netarsudil has the 6 week limit."}],
 teach:"Unopened: refrigerator. Opened: room temperature (netarsudil less than 6 weeks).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 85; T@92421, T@92585 11/19"},

{id:"LMC-042", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-and-order-transition",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Lund, 71, leaves the hospital with a new unopened latanoprost bottle and a new timolol gel-forming solution, both used at bedtime. Which counseling covers storage and order?",
 options:[
  {t:"Keep latanoprost at room temperature before opening; instill the gel, wait 10 minutes, then latanoprost", correct:false, why:"Latanoprost is refrigerated before opening, and the gel goes last."},
  {t:"Refrigerate latanoprost before and after opening; instill latanoprost, wait 5 minutes, then the gel", correct:false, why:"It goes to room temperature once opened, and the wait before the gel is 10 minutes."},
  {t:"Refrigerate unopened latanoprost and keep it at room temperature once opened; instill latanoprost, wait 10 minutes, then the gel", correct:true, why:"Slide 85 for storage; slides 74-75 for order and the 10 minute wait before the gel."},
  {t:"Refrigerate the unopened latanoprost and keep it at room temperature once opened; instill the gel, wait 5 minutes, then latanoprost", correct:false, why:"Storage is right, but the gel goes last after 10 minutes."}],
 teach:"Two counseling points together: storage (fridge until opened) and order (solution, 10 minutes, then gel).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75, 85; T@92421, T@88233 11/19"},

{id:"LMC-043", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-efficacy-iop-who",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Imani, 66, was just started on latanoprost and feels no different. Her daughter asks what shows whether the drug is working and who checks it. Which answer is correct?",
 options:[
  {t:"Intraocular pressure, measured by the pharmacist at each refill", correct:false, why:"Pharmacists do not measure IOP; the patient follows up with the eye doctor."},
  {t:"Her blood pressure, measured by the pharmacist at each refill", correct:false, why:"Blood pressure is a safety check for some drugs, not the efficacy measure."},
  {t:"Her symptoms, which she reports to the pharmacist at each refill", correct:false, why:"POAG is asymptomatic until substantial visual field loss, so symptoms do not show efficacy."},
  {t:"Intraocular pressure, measured by her eye doctor", correct:true, why:"Slide 86: efficacy is judged by the reduction in IOP, which the eye doctor measures; the pharmacist does not."}],
 teach:"Efficacy of glaucoma therapy is IOP reduction, checked by the eye doctor; open-angle glaucoma has no symptoms until substantial field loss.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 12, 86; T@92967, T@46365 11/19"},

{id:"LMC-044", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-timeline-after-target",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Soto's eye pressure reached target at his 4-week visit. What follow-up schedule is appropriate for him?",
 options:[
  {t:"Eye doctor visit 3-4 months after starting, then visits at 2-4 week intervals while at target", correct:false, why:"The intervals are reversed."},
  {t:"Eye doctor visit 2-4 weeks after starting, then visits at 6 week intervals at target", correct:false, why:"The interval at target is 3-4 months."},
  {t:"Eye doctor visit 3-4 months after starting, then yearly visits once at target", correct:false, why:"The first visit is 2-4 weeks after starting."},
  {t:"Eye doctor visit 2-4 weeks after starting, then visits at 3-4 month intervals at target", correct:true, why:"Slide 86: 2-4 weeks after therapy initiation and 3-4 months once the target IOP is achieved."}],
 teach:"Follow-up: 2-4 weeks after therapy starts; every 3-4 months once target IOP is achieved.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 86; T@93065, T@93243 11/19"},

{id:"LMC-049", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-plan-who-what",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Ellis, 69, starts latanoprost in the evening and dorzolamide/timolol (Cosopt) BID. Which monitoring plan fits the pharmacist's role?",
 options:[
  {t:"IOP is checked at the pharmacy 2-4 weeks after starting, and side effects go to her primary care provider", correct:false, why:"Pharmacists do not measure IOP, and the eye doctor is the contact."},
  {t:"Eye doctor checks IOP 3-4 months after starting; the pharmacist leaves side effects for that visit to be raised then", correct:false, why:"The first visit is 2-4 weeks after starting, and the pharmacist's role is to explain side effects up front."},
  {t:"Eye doctor checks IOP 2-4 weeks after starting; pharmacist counsels on side effects and refers atypical ones", correct:true, why:"Slide 86-87 and the lecture: efficacy is IOP by the eye doctor; the pharmacist's role is to explain side effects and refer those that are not brief."},
  {t:"Her vision is checked at each refill by the pharmacist; any side effect is handled by stopping the drug", correct:false, why:"Open-angle glaucoma is silent, and side effects are reported to the eye doctor."}],
 teach:"Monitoring plan: efficacy = IOP by the eye doctor (2-4 weeks, then 3-4 months at goal); safety = counsel on expected side effects and refer the atypical ones.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 86-87; T@93275 11/19"},

{id:"LMC-050", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-drugs-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mrs. Tran, 71, a Southeast Asian woman, takes albuterol, sertraline, ipratropium, atorvastatin and metformin. Which can raise her risk of primary angle-closure glaucoma? Select all that apply.",
 options:[
  {t:"Albuterol", correct:true, why:"Slide 90: beta-2 adrenergic agonists (for example albuterol) are listed."},
  {t:"Atorvastatin", correct:false, why:"It is not among the classes listed on slide 90."},
  {t:"Sertraline", correct:true, why:"Slide 90: antidepressants (SSRIs and TCAs) are listed."},
  {t:"Metformin", correct:false, why:"It is not among the classes listed on slide 90."},
  {t:"Ipratropium", correct:true, why:"Slide 90: topical and systemic anticholinergics (atropine, promethazine, ipratropium, tiotropium)."}],
 teach:"Drugs that raise angle-closure risk: anticholinergics, antidepressants, alpha-1 agonists (phenylephrine, ephedrine), beta-2 agonists (albuterol).",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 90; T@94538 11/19"},

{id:"LMC-051", skill:"epi", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-risk-profile",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which patient has the risk factors for primary angle-closure glaucoma?",
 options:[
  {t:"A 72-year-old Southeast Asian woman whose mother had PACG", correct:true, why:"Slide 89: female sex, older age, Southeast Asian ethnicity and first-degree relatives with PACG."},
  {t:"A 72-year-old non-Hispanic white man with type 2 diabetes and myopia", correct:false, why:"These fit risk factors for open-angle glaucoma, not angle-closure (slides 7 and 89)."},
  {t:"A 35-year-old Southeast Asian man with no family history", correct:false, why:"He has one factor; the profile combines female sex, older age, ethnicity and family history."},
  {t:"A 70-year-old non-Hispanic white man with a thin central cornea and high eye pressure", correct:false, why:"Thin central corneal thickness and high IOP are open-angle glaucoma risk factors."}],
 teach:"PACG risk factors: female sex, older age, Asian (Southeast Asian) ethnicity, first-degree relatives with PACG.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 7, 89; T@93901 11/19"},

{id:"LMC-052", skill:"case", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-acute-referral",
 tags:["hard", "case"], source:'both',
 stem:"A 69-year-old woman comes to the pharmacy with severe pain in one eye, headache, nausea, vomiting, blurred vision, colored halos around lights and a sudden loss of vision. What is the best action?",
 options:[
  {t:"Recommend over-the-counter brimonidine 0.025% to relieve the redness and pain", correct:false, why:"The OTC product treats redness and is not a glaucoma treatment."},
  {t:"Tell her these symptoms are typical of open-angle glaucoma and need no action", correct:false, why:"Open-angle glaucoma is asymptomatic until substantial field loss; severe pain with sudden vision loss is acute angle closure."},
  {t:"Tell her to see her eye doctor at her next visit in 2-4 weeks", correct:false, why:"Acute symptoms need immediate evaluation, not a scheduled follow-up."},
  {t:"Send her for emergency evaluation by an eye care professional", correct:true, why:"Slide 91-92: these are acute angle-closure symptoms; the plan is referral to an ophthalmologist or optometrist, and the lecture called it an emergent issue."}],
 teach:"Acute angle closure: severe eye pain, headache, nausea or vomiting, blurred vision, halos, sudden vision loss; refer at once to an eye care professional.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 91-92; T@94946, T@94793 11/19"},

{id:"LMC-053", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-prodromal",
 tags:["hard", "tell"], source:'both',
 stem:"A 66-year-old Southeast Asian woman who uses no eye drops reports hazy vision, halos around lights, an occasional eye ache and a headache. Which is the best description?",
 options:[
  {t:"Typical open-angle glaucoma, which is silent until substantial field loss", correct:false, why:"Open-angle glaucoma is asymptomatic until substantial visual field loss (slide 12)."},
  {t:"Prodromal symptoms of angle-closure glaucoma", correct:true, why:"Slide 91: prodromal symptoms are blurred or hazy vision, halos around lights, eye pain and headache."},
  {t:"An expected effect of a prostaglandin analog such as blurred vision at night", correct:false, why:"She uses no eye drops, and the pattern is the prodrome of angle closure."},
  {t:"An adverse effect of a carbonic anhydrase inhibitor", correct:false, why:"She uses no eye drops, and the set matches the prodrome of angle closure."}],
 teach:"PACG presents with prodromal blurred or hazy vision, halos, eye pain and headache, and then acute severe symptoms; POAG is asymptomatic.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 12, 91; T@46345 11/19"},

{id:"LMC-054", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-phenylephrine",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Sato, 70, is at risk for primary angle-closure glaucoma and asks about an over-the-counter decongestant containing phenylephrine. What is the concern?",
 options:[
  {t:"It raises eye pressure by blocking trabecular outflow, as corticosteroids do", correct:false, why:"Altered trabecular outflow is the corticosteroid mechanism, not the reason phenylephrine matters for angle closure."},
  {t:"It constricts the pupil, which narrows the angle further", correct:false, why:"Alpha-1 agonists cause pupillary dilation."},
  {t:"It can dilate the pupil and raise the risk of angle closure", correct:true, why:"Alpha-1 agonists (phenylephrine, ephedrine) cause pupillary dilation and are among the drugs that worsen angle closure (slide 90 and handout)."},
  {t:"It is an anticholinergic, which is why it raises the risk", correct:false, why:"Phenylephrine is an alpha-1 agonist, a separate class on the list."}],
 teach:"Causes of pupillary dilation or ciliary body edema that raise angle-closure risk include anticholinergics, antidepressants, alpha-1 agonists and beta-2 agonists.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 90; T@94538 11/19"},

{id:"LMC-056", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-wrong-eye",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Rahman, 70, is diagnosed with open-angle glaucoma in both eyes. Her prescription reads latanoprost 1 gtt OD QPM. What should the pharmacist do?",
 options:[
  {t:"Contact the prescriber: OD is the right eye, and both eyes need drops", correct:true, why:"OD is the right eye and OU is both; the evening once daily frequency is correct."},
  {t:"Dispense it as written, since OD stands for treatment of both eyes", correct:false, why:"OU is both eyes; OD is the right eye."},
  {t:"Contact the prescriber: the frequency should be BID rather than once daily", correct:false, why:"Latanoprost is dosed once daily; BID would lower efficacy."},
  {t:"Dispense it as written, since QPM stands for twice daily dosing", correct:false, why:"QPM means in the evening, once daily."}],
 teach:"Read eye and frequency separately: OD right, OS left, OU both; QPM is evening.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 4; T@57583 11/19"},

{id:"LMC-058", skill:"dose", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-correct-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which prescriptions are written with the usual frequency? Select all that apply.",
 options:[
  {t:"Dorzolamide 2% 1 gtt OU TID", correct:true, why:"Slide 51: TID."},
  {t:"Simbrinza 1 gtt OU BID", correct:false, why:"Simbrinza is dosed TID."},
  {t:"Combigan 1 gtt OU BID", correct:true, why:"Slide 69: Combigan is BID."},
  {t:"Timolol gel 1 gtt OU BID", correct:false, why:"Timoptic-XE gel is once daily; the solution is BID."},
  {t:"Pilocarpine 1 gtt OD QID", correct:true, why:"Slide 57: QID."},
  {t:"Bimatoprost 1 gtt OU BID", correct:false, why:"A prostaglandin analog is once daily; more often lowers efficacy."}],
 teach:"Know each agent's frequency and which combination products are BID or TID.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 20, 32, 51, 57, 69; T@80784, T@85939 11/19"},

{id:"LMC-059", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-combigan-tid-error",
 tags:["hard", "case"], source:'both',
 stem:"A new prescription reads Combigan 1 gtt OU TID. What is the problem?",
 options:[
  {t:"Frequency too low: Combigan should be dosed QID, so contact the prescriber", correct:false, why:"Combigan is BID; TID is the Simbrinza frequency."},
  {t:"Frequency too high: Combigan is BID, so contact the prescriber", correct:true, why:"Slide 69: Combigan is 1 drop BID; a higher frequency is an effectiveness or safety problem."},
  {t:"The eye is wrong: Combigan is used in a single eye, so contact the prescriber", correct:false, why:"The sig reads OU, both eyes, which is acceptable."},
  {t:"There is no problem: the combination is dosed TID, so dispense it", correct:false, why:"Only Simbrinza is dosed TID."}],
 teach:"Combigan BID; Cosopt BID; Simbrinza TID. An out-of-range frequency is a medication-related problem to clarify with the prescriber.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 69; T@85939 11/19"},

{id:"LMC-062", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-lens-sequence",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Barnes, 63, wears contact lenses. His morning products are brimonidine 0.1% solution and timolol gel-forming solution. Which morning sequence is correct?",
 options:[
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol gel, wait 15 minutes, insert lenses", correct:false, why:"The wait before a gel-forming solution is 10 minutes."},
  {t:"Remove lenses, timolol gel, wait 10 minutes, brimonidine, then wait 15 minutes, insert lenses", correct:false, why:"The gel goes last."},
  {t:"Remove lenses, brimonidine, wait 10 minutes, timolol gel, wait 15 minutes, insert lenses", correct:true, why:"Solution before gel-forming solution with a 10 minute wait; lenses go in 15 minutes after the last drop."},
  {t:"Remove lenses, brimonidine, wait 10 minutes, timolol gel, insert lenses after another 10 minutes", correct:false, why:"Lenses wait 15 minutes after the last drop."}],
 teach:"Three rules in one sequence: lenses out first, solution then gel with 10 minutes between, and 15 minutes before lenses go back in.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75, 83; T@88233, T@91057 11/19"}
);
