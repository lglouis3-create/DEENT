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
  {t:"Drug drains down the nasolacrimal duct into the bloodstream", correct:false, why:"Drainage into the bloodstream is reduced by closing the lids after the drop. Resting the tip on the lid does not change drainage, so it is not the concern here."},
  {t:"The solution is not shaken, so each dose varies in strength", correct:false, why:"Shaking applies to suspensions. Latanoprost is a solution, and the habit in the stem concerns contact with the lid, not dose uniformity."},
  {t:"The next product is flushed away because it follows too soon", correct:false, why:"Washout of the previous drop is the reason for waiting 5 minutes between products. The stem describes one product and contact with the lid, not timing between drops."},
  {t:"Bacteria from the lid can get into the multiple-dose bottle", correct:true, why:"The lid carries bacteria, and the multiple-dose bottle is used again, so bacteria on the tip reach the bottle and later reach the eye. The tip should touch no eye, hand or surface."}],
 teach:"Skin and eyes carry many bacteria, so a tip that touches the lid, the hands or any surface can bring them into the bottle. The bottle is multiple-dose, so those bacteria reach the eye with every later drop. Counsel the patient to keep the tip off every surface, even when arthritis makes aim hard.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 71; T@86335, T@86388 11/19"},

{id:"LMC-002", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-copd-timolol",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Brandt, 66, has well-controlled COPD and is starting timolol 0.5% twice daily. Which instillation advice most directly lowers his chance of a systemic side effect?",
 options:[
  {t:"Keep the eyelids gently closed for 1 to 2 minutes after each drop", correct:true, why:"Closed lids decrease drainage, so less timolol is absorbed into the blood. That matters here because systemic beta-blocker effects such as bronchospasm are the risk in COPD."},
  {t:"Blink repeatedly for 1 to 2 minutes after each drop to spread it", correct:false, why:"Blinking is not the instruction. The lids are held closed so the drop stays in the eye and drainage is decreased."},
  {t:"Squeeze the eyelids tightly shut for 1 to 2 minutes after each drop", correct:false, why:"The lids are closed gently. Squeezing is not advised, and pressing should not cause pain."},
  {t:"Rub the closed eyelid gently for 1 to 2 minutes after each drop", correct:false, why:"Rubbing is not advised. The closed lids are held still for the 1 to 2 minutes so the drug stays in the eye."}],
 teach:"Closing the lids after a drop decreases nasolacrimal drainage, so less drug reaches the bloodstream and systemic side effects are milder. Timolol is a beta blocker whose systemic effects include bronchospasm, which matters in COPD. The lids are held gently closed for 1 to 2 minutes, without squeezing or rubbing.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 72-73; T@86627, T@87190 11/19"},

{id:"LMC-003", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-mechanism",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which change explains why keeping the eyelids closed after a drop lowers the severity of systemic side effects?",
 options:[
  {t:"Slower aqueous humor production, so less drug is carried away", correct:false, why:"Lower aqueous humor production is how beta blockers and carbonic anhydrase inhibitors lower eye pressure. It is a drug effect inside the eye and does not result from closing the lids."},
  {t:"Less bacteria on the bottle tip, so less drug is absorbed", correct:false, why:"Bacteria on the tip are a contamination problem for the bottle, prevented by keeping the tip off every surface. It does not explain absorption."},
  {t:"Less trapping under a contact lens, so less drug is absorbed", correct:false, why:"Lens trapping holds drug and preservative against the eye surface and is handled by removing lenses. It is not the reason for closing the lids."},
  {t:"Less nasolacrimal drainage, so less systemic absorption", correct:true, why:"Closed lids decrease nasolacrimal drainage, so less drug is absorbed into the bloodstream and systemic side effects are less severe."}],
 teach:"Part of each drop drains through the nasolacrimal duct into the bloodstream, and that absorbed drug causes systemic side effects. Holding the lids closed decreases the drainage, so the absorption and the severity of those effects fall. Bacteria on the tip and lens trapping are separate counseling points with different causes.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 72; T@86627 11/19"},

{id:"LMC-004", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-elc-pressing-pain",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Osei, 69, started dorzolamide. He presses hard on the corner of his eyelid for about 20 seconds after each drop, and it hurts. What should the pharmacist counsel?",
 options:[
  {t:"Press firmly for 5 minutes so that more of the drop stays in the eye", correct:false, why:"Firm pressure is not needed, and 5 minutes is longer than the 1 to 2 minutes advised. The hard pressing is what is causing his pain."},
  {t:"Press gently, without pain, and keep the lids closed for 1 to 2 minutes", correct:true, why:"Gentle pressure at the corner of the eyelid for 1 to 2 minutes is enough to keep the drug in the eye, and it should not cause pain."},
  {t:"Stop pressing and blink for about 10 seconds so the drop spreads over the whole eye surface", correct:false, why:"Blinking for seconds does not hold the drug in the eye. The advice is gentle pressure or closed lids for 1 to 2 minutes."},
  {t:"Press gently for 10 minutes so the drop is not absorbed systemically", correct:false, why:"Gentle pressure is correct, but the time is 1 to 2 minutes. Ten minutes is the wait before an ointment or gel-forming solution."}],
 teach:"Gentle pressure on the corner of the eyelid, or closed lids, for 1 to 2 minutes keeps the medicine in the eye. It does not need to be hard enough to cause pain. A patient who presses hard and hurts is corrected to gentle pressure for the same 1 to 2 minutes.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 72-73; T@87251, T@87190 11/19"},

{id:"LMC-005", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-instill-steps-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mrs. Dube, 70, is learning to instill her drops. Which steps belong to the correct technique? Select all that apply.",
 options:[
  {t:"Pull down the outer part of the lower eyelid to form a pocket", correct:true, why:"Pulling the lower lid down forms a pocket, and the single drop goes into that pocket."},
  {t:"Rub the closed eyelid to help the drop spread", correct:false, why:"Rubbing is not advised. The lids are held closed gently so the drug stays in the eye."},
  {t:"Wash the hands before the drop", correct:true, why:"Hands carry bacteria. Cleaning them first keeps bacteria from reaching the bottle and the eye."},
  {t:"Steady the dropper by resting its tip on the lower lid", correct:false, why:"Resting the tip on the lid brings bacteria into a multiple-dose bottle. The tip should touch no eye, hand or surface."},
  {t:"Squeeze the eyelids tightly shut right after the drop", correct:false, why:"Squeezing is not advised. The lids are closed gently, and pressure should not cause pain."},
  {t:"Keep the lids closed for 1 to 2 minutes after the drop", correct:true, why:"Closing the lids for 1 to 2 minutes decreases nasolacrimal drainage, so less drug is absorbed into the bloodstream."}],
 teach:"The technique protects the bottle and the dose. Clean hands come first because skin carries bacteria, pulling down the lower lid makes a pocket that receives one drop, and the closed lids are then held 1 to 2 minutes without squeezing or rubbing. The tip touches nothing.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 71-73; T@86951, T@86975, T@87119 11/19"},

{id:"LMC-006", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"tech", concept:"lmc-tip-and-blink-two-points",
 tags:["hard", "case"], source:'both',
 stem:"After each drop Mr. Fuentes touches the bottle tip to his lid to dab away extra liquid and then blinks several times. Which pair of changes should the pharmacist counsel?",
 options:[
  {t:"Dab the tip with a clean tissue after each drop, and blink to spread the drop", correct:false, why:"A tissue is still a surface, and the tip should touch nothing. Blinking also replaces the 1 to 2 minutes of lid closure that decreases absorption."},
  {t:"Hold the bottle closer to the eye for aim, and rub the closed lid for 2 minutes", correct:false, why:"Rubbing is not advised, and the lids are closed gently. The tip must stay off the eye, so moving it closer works against that."},
  {t:"Touch the tip to the lid for the first drop alone, and keep the lids closed for 15 minutes", correct:false, why:"The tip touches nothing for any drop, the first included. Closure is 1 to 2 minutes, while 15 minutes is the wait before contact lenses go back in."},
  {t:"Keep the tip from touching anything, and keep the lids closed instead of blinking", correct:true, why:"Keeping the tip off every surface prevents bacteria from entering the bottle, and closed lids for 1 to 2 minutes decrease drainage and systemic absorption."}],
 teach:"Two habits need correcting. A tip touched to the lid picks up bacteria that then sit in a multiple-dose bottle, so the tip touches nothing. Blinking is not the instruction either: closing the lids for 1 to 2 minutes decreases drainage and systemic absorption.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 71-73; T@86335, T@87190 11/19"},

{id:"LMC-007", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-four-solutions-washout",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Grant, 72, uses bimatoprost, timolol, brimonidine and dorzolamide solutions. He puts all four in within one minute each morning, and his eye pressure stays above goal although he takes each dose. What is the problem and the fix?",
 options:[
  {t:"Dose too low: the prescriber should raise each product to 2 drops per eye at each dose", correct:false, why:"One drop is the dose. A second drop adds volume the eye cannot hold, so it washes drug out instead of adding to it."},
  {t:"Incorrect administration: no 5 minute wait, so each drop flushes out the one before", correct:true, why:"The four solutions went in within one minute, so each drop washed out or diluted the one before. A 5 minute wait between solutions keeps each dose in the eye."},
  {t:"Indication: duplicate therapy, so one of the four solutions should be stopped", correct:false, why:"Duplicate therapy means two drugs of one class. These four are different classes, so nothing is repeated and none should be stopped."},
  {t:"Dosage form inappropriate: the four solutions should be changed to suspensions with longer retention", correct:false, why:"A suspension also needs a 5 minute wait after a solution, so the dosage form does not remove the washout. The fix is timing."}],
 teach:"The eye holds a limited volume, so a second drop given right after the first washes out or dilutes part of it. The dose delivered falls, and pressure stays above goal even though every dose was taken. Waiting 5 minutes between two solutions prevents this incorrect-administration problem.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74; T@87661, T@87898 11/19"},

{id:"LMC-008", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-order-two-solutions-suspension",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Park, 64, uses timolol 0.5% solution, brimonidine 0.1% solution and brinzolamide 1% suspension for her morning doses. Which sequence is correct?",
 options:[
  {t:"Shaken brinzolamide, wait 5 minutes, timolol, wait 5 minutes, then brimonidine", correct:false, why:"A suspension goes after the solutions because it stays in the tear film longer. Starting with it reverses the order."},
  {t:"Timolol, brimonidine and shaken brinzolamide, one right after the next", correct:false, why:"Drops given back to back wash each other out. Each product needs a 5 minute wait before the next."},
  {t:"Timolol, wait 5 minutes, brimonidine, wait 5 minutes, shaken brinzolamide", correct:true, why:"Both solutions go first, 5 minutes apart in either order, then the suspension after another 5 minutes, shaken well before use."},
  {t:"Timolol, wait 5 minutes, shaken brinzolamide, wait 5 minutes, then brimonidine", correct:false, why:"This puts the suspension between the two solutions. Every solution goes before the suspension, so brimonidine should not follow it."}],
 teach:"The solutions go first, in either order, and the suspension follows 5 minutes later because a suspension stays longer in the tear film. The suspension is shaken well before use. Putting the suspension earlier, or giving the drops back to back, gets the order or the timing wrong.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88090, T@87661 11/19"},

{id:"LMC-009", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-why-suspension-last",
 tags:["hard", "reasoning"], source:'both',
 stem:"A patient asks why the brinzolamide suspension goes in after her solution drops and not before. Which reason is correct?",
 options:[
  {t:"Its thick composition places it with the ointments and gels", correct:false, why:"Thickness is why a gel-forming solution is grouped with ointments, which go after suspensions. A suspension is placed by retention time instead."},
  {t:"It stays in the tear film longer than a solution", correct:true, why:"A suspension stays in the tear film for a longer time than a solution, so it is used after the solutions."},
  {t:"Its preservative expires sooner once the bottle is opened", correct:false, why:"Preservative life after opening matters for storage, as with netarsudil. It does not decide the order of application."},
  {t:"The wait after a suspension is 10 minutes, so it goes last", correct:false, why:"Solution to suspension is a 5 minute wait. The 10 minute wait applies before an ointment or gel-forming solution, which goes last."}],
 teach:"Retention time sets the order. A suspension stays in the tear film longer than a solution, so it goes after the solutions, with 5 minutes between a solution and a suspension. The suspension is shaken first. Gel-forming products go later still because of their thickness.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74 and handout; T@88090 11/19"},

{id:"LMC-010", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-betaxolol-suspension-shake-order",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Weiss, 67, uses latanoprost solution and betaxolol 0.25% suspension at bedtime. Which counseling is correct for the bedtime doses?",
 options:[
  {t:"Instill latanoprost, wait 5 minutes, then shake the betaxolol and instill it", correct:true, why:"Latanoprost, a solution, goes first, and the betaxolol suspension follows 5 minutes later after being shaken well."},
  {t:"Shake the latanoprost, then instill both bottles back to back", correct:false, why:"Shaking is for suspensions. Latanoprost is a solution, and the two products need 5 minutes between them."},
  {t:"Instill the betaxolol first, then latanoprost 5 minutes later", correct:false, why:"The suspension goes after the solution because it stays longer in the tear film. Giving it first reverses the order."},
  {t:"Instill latanoprost, wait 10 minutes, then instill the betaxolol without shaking it", correct:false, why:"The solution-to-suspension wait is 5 minutes, not 10, and a suspension is shaken well before use."}],
 teach:"Order of application is solution first, suspension second, 5 minutes apart. Betaxolol 0.25% (Betoptic-S) is the suspension in this pair, so it is shaken well before use. Latanoprost is a solution and is not shaken.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88090 11/19"},

{id:"LMC-011", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-wait-ten",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Okoye, 60, uses brimonidine 0.1% solution and timolol gel-forming solution once daily, both in the morning. How should the pharmacist counsel her?",
 options:[
  {t:"Brimonidine first, wait about 5 minutes, then the timolol gel-forming solution", correct:false, why:"Five minutes is the wait between two solutions or between a solution and a suspension. A gel-forming solution needs at least 10 minutes."},
  {t:"Timolol gel first, wait at least 10 minutes, then brimonidine solution", correct:false, why:"The gel-forming solution goes after the solution, not before it, so brimonidine goes first."},
  {t:"Timolol gel first, wait about 5 minutes, then the brimonidine solution", correct:false, why:"This puts the gel first, which reverses the order, and a 5 minute wait is also too short before a gel."},
  {t:"Brimonidine first, wait at least 10 minutes, then the timolol gel", correct:true, why:"The solution goes first, then at least 10 minutes before the gel, so the solution reaches the eye before the thicker gel."}],
 teach:"A gel-forming solution is thick and falls in the ointment group, so it goes last. The solution goes first and the gel follows at least 10 minutes later, so the solution's drop gets into the eye before the gel arrives. Brimonidine is the solution here, and timolol gel is the gel.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88233, T@88567 11/19"},

{id:"LMC-012", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-first-error",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Yilmaz, 68, puts in his timolol gel-forming solution at 8:00 and dorzolamide 2% solution at 8:02. His eye pressure stays above goal although he takes both. Which administration error most likely lowers the dorzolamide's effect?",
 options:[
  {t:"The dorzolamide should be shaken before it is instilled", correct:false, why:"Shaking is for suspensions. Dorzolamide 2% is a solution and is not shaken."},
  {t:"The two products should be 5 minutes apart, with the gel first", correct:false, why:"A 5 minute gap is the solution-to-solution wait, and putting the gel first is the reverse of the order."},
  {t:"The solution should go first, at least 10 minutes before the gel", correct:true, why:"Drops are used at least 10 minutes before the gel so the drops get into the eye first. Here the gel went in first."},
  {t:"The dorzolamide should wait 15 minutes after the gel before going in", correct:false, why:"Fifteen minutes is the wait before lenses are reinserted. The dorzolamide solution should go before the gel, not after it."}],
 teach:"A gel-forming solution is grouped with the ointments and goes last. The drops go in first, at least 10 minutes before the gel, so the drop gets into the eye and its efficacy is kept. Giving the gel first, as here, means the drops do not get in first.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@88233 11/19"},

{id:"LMC-013", skill:"tell", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-grouped-with-ointments",
 tags:["hard", "tell"], source:'both',
 stem:"Mrs. Nolan keeps four products by her bed. For order of application, which one belongs in the last group with ointments?",
 options:[
  {t:"Timolol 0.5% solution twice daily", correct:false, why:"Timolol 0.5% solution is a solution, so it goes in the first group, not with the ointments."},
  {t:"Dorzolamide 2% solution three times daily", correct:false, why:"Dorzolamide 2% is a solution, so it goes in the first group."},
  {t:"Brinzolamide 1% suspension three times daily", correct:false, why:"Brinzolamide is a suspension, so it goes in the middle group, after solutions and before ointments and gels."},
  {t:"Timolol gel-forming solution once daily", correct:true, why:"Timolol gel is a gel-forming solution. Its thickness and composition place it with the ointments, the last group."}],
 teach:"Order of application groups products by form: solutions, then suspensions, then ointments and gel-forming solutions. A gel-forming solution joins the ointments because of its thickness and composition. Timolol gel is the gel-forming product, so it belongs in the last group, while timolol 0.5% solution is a solution.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 75; T@88661 11/19"},

{id:"LMC-014", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-multi-product-rules-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which instillation steps are appropriate for a patient who uses two solutions, a suspension and a gel-forming solution? Select all that apply.",
 options:[
  {t:"Wait 5 minutes between two solutions", correct:true, why:"Two solutions are 5 minutes apart so the second drop does not flush out or dilute the first."},
  {t:"Instill a suspension before a solution so the solution is not diluted", correct:false, why:"The solution goes first and the suspension follows 5 minutes later, because the suspension stays in the tear film longer."},
  {t:"Shake a suspension well before use", correct:true, why:"Suspensions are shaken well before use."},
  {t:"Wait 10 minutes between two solutions", correct:false, why:"The wait between two solutions is 5 minutes. The 10 minute wait applies before an ointment or gel."},
  {t:"Use drops at least 10 minutes before a gel-forming solution", correct:true, why:"Drops go in at least 10 minutes before the gel so the solution reaches the eye first and keeps its efficacy."},
  {t:"Instill the suspension after the solution because it stays longer in the tear film", correct:true, why:"A suspension stays in the tear film for a longer time, so it is used after the solution."}],
 teach:"Each form has its own timing. Two solutions are 5 minutes apart. A solution and then a suspension are 5 minutes apart, with the suspension shaken. A solution and then a gel-forming solution are at least 10 minutes apart. The suspension goes after solutions because it stays longer in the tear film.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75; T@87661, T@88233 11/19"},

{id:"LMC-015", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-order-three-forms",
 tags:["hard", "case"], source:'both',
 stem:"A patient uses latanoprost solution, brinzolamide suspension and timolol gel-forming solution. In which order, first to last, should they be instilled?",
 options:[
  {t:"Latanoprost, shaken brinzolamide, timolol gel", correct:true, why:"Latanoprost is a solution, brinzolamide a suspension and timolol gel a gel-forming solution, which fits the order solution, suspension, gel."},
  {t:"Timolol gel, shaken brinzolamide, then latanoprost", correct:false, why:"This reverses the order. The gel-forming solution is grouped with the ointments and goes last."},
  {t:"Shaken brinzolamide, latanoprost, then timolol gel", correct:false, why:"Solutions go before suspensions, so latanoprost goes before brinzolamide."},
  {t:"Latanoprost, timolol gel, then shaken brinzolamide", correct:false, why:"The suspension goes before the gel. The gel-forming solution is grouped with ointments and given last."}],
 teach:"Order follows dosage form: solution, then suspension, then ointment or gel-forming solution. Latanoprost is the solution, brinzolamide is the suspension and timolol gel is the gel-forming product. The drug class does not set the order.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 75; T@88567, T@88661 11/19"},

{id:"LMC-016", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-wait-reason-washout",
 tags:["hard", "reasoning"], source:'both',
 stem:"Mr. Barzani asks why he cannot instill his two solutions back to back. Which answer gives both the wait and the reason?",
 options:[
  {t:"Wait 10 minutes, so the first drop can be absorbed before the second arrives", correct:false, why:"The reason is washout, and 10 minutes is the wait before an ointment or gel, not the gap between two solutions."},
  {t:"Wait 5 minutes, so the bottle tip is not contaminated by the first drop", correct:false, why:"Contamination is prevented by keeping the tip off every surface. The wait prevents the second drop from washing out the first."},
  {t:"Wait 5 minutes, so the second drop does not flush away or dilute the first", correct:true, why:"Two solutions need 5 minutes so the second drop does not flush away or dilute the first."},
  {t:"Wait 15 minutes, so the first drop is not rinsed out of the eye by tears", correct:false, why:"Fifteen minutes is the wait before contact lenses go back in. Tears are not the reason given for the 5 minute wait."}],
 teach:"The eye holds a limited volume, so a drop given right after another pushes part of the first out. A 5 minute gap between two solutions protects the first drop from being flushed away or diluted. The 10 minute wait belongs to ointments and gels, and 15 minutes belongs to contact lenses.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 74; T@87898, T@87940 11/19"},

{id:"LMC-017", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-four-solutions-total-time",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Hale, 70, uses four different solutions each morning, one drop in each eye. If he waits between solutions as advised, how long is it from his first drop to his last?",
 options:[
  {t:"10 minutes, from two waits of 5 minutes", correct:false, why:"Two gaps would cover just three solutions. Four solutions have three gaps."},
  {t:"15 minutes, from three waits of 5 minutes", correct:true, why:"Four solutions have three gaps of 5 minutes, which is 15 minutes."},
  {t:"30 minutes, from three waits of 10 minutes", correct:false, why:"Ten minutes is the wait before an ointment or gel. The gap between two solutions is 5 minutes."},
  {t:"5 minutes, from one wait", correct:false, why:"One 5 minute wait separates just two solutions. Four solutions need three waits."}],
 teach:"Count the gaps, not the bottles. Four solutions have three gaps, each 5 minutes, so 15 minutes pass from first drop to last. A long routine like this is why a patient with many bottles struggles to keep the waits, which is an adherence problem.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74, 76; T@87661, T@89231 11/19"},

{id:"LMC-019", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-combigan",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Ito, 73, uses bimatoprost 0.01% 1 drop OU in the evening, timolol 0.5% 1 drop OU BID and brimonidine 0.1% 1 drop OU BID. Her goal is fewer bottles with the same classes. Which complete regimen fits?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; brimonidine/timolol (Combigan) 1 drop OU once daily", correct:false, why:"Combigan is dosed BID. Once daily is the frequency of the prostaglandin analog, not of Combigan."},
  {t:"Bimatoprost 1 drop OU in the evening; dorzolamide/timolol (Cosopt) 1 drop OU BID", correct:false, why:"Cosopt is dorzolamide plus timolol. She takes brimonidine, not dorzolamide, so it brings in a class she does not use."},
  {t:"Bimatoprost 1 drop OU in the evening; Simbrinza (CAI/alpha-2 agonist) 1 drop OU TID", correct:false, why:"Simbrinza is a CAI plus an alpha-2 agonist given TID. It leaves out her beta blocker and adds a CAI."},
  {t:"Bimatoprost 1 drop OU in the evening; brimonidine/timolol (Combigan) 1 drop OU BID", correct:true, why:"Combigan contains brimonidine and timolol, the two drugs she takes BID, so one BID bottle replaces two."}],
 teach:"A combination product replaces two bottles when both drugs are already in the regimen. Combigan is brimonidine, an alpha-2 agonist, plus timolol, a beta blocker, dosed twice daily. Mrs. Ito takes both drugs BID, so Combigan cuts a bottle and keeps the frequency, and the prostaglandin analog stays an evening dose.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 69; T@85939, T@89739 11/19"},

{id:"LMC-021", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-four-bottles-full",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Reyes, 66, uses bimatoprost 0.01% 1 drop OU in the evening, timolol 0.5% 1 drop OU BID, brimonidine 0.1% 1 drop OU BID and dorzolamide 2% 1 drop OU TID. She cannot wait between four bottles. Which complete regimen cuts one bottle without repeating a drug and keeps each frequency correct?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; Cosopt 1 drop OU BID; Combigan 1 drop OU BID", correct:false, why:"Cosopt and Combigan both contain timolol, so this repeats the beta blocker, which is duplicate therapy."},
  {t:"Bimatoprost 1 drop OU BID; Cosopt 1 drop OU BID; brimonidine 0.1% 1 drop OU BID", correct:false, why:"A prostaglandin analog given more than once daily has decreased efficacy."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan 1 drop OU BID; dorzolamide 2% 1 drop OU TID", correct:true, why:"Combigan covers timolol and brimonidine BID, bimatoprost stays once daily in the evening and dorzolamide stays TID, so four bottles become three."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan 1 drop OU once daily; dorzolamide 2% 1 drop OU TID", correct:false, why:"Combigan is dosed BID. Once daily is the wrong frequency for it."}],
 teach:"Choose the combination that covers two drugs already in the regimen, then keep the other drugs at their own frequencies: prostaglandin analog once daily in the evening, Combigan BID, dorzolamide TID. Two combinations that share timolol would give the same beta blocker twice.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 76-82; T@89739, T@85939 11/19"},

{id:"LMC-022", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-duplicate-timolol",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Pruitt, 71, brings bimatoprost 1 drop OU in the evening, Combigan 1 drop OU BID, timolol 0.5% 1 drop OU BID from another prescriber, and dorzolamide 2% 1 drop OU TID. Which medication-related problem is most important?",
 options:[
  {t:"Indication: duplicate therapy, as Combigan already contains timolol", correct:true, why:"Combigan is brimonidine plus timolol, so the separate timolol repeats the same beta blocker. Duplicate therapy is listed under unnecessary drug therapy."},
  {t:"Effectiveness: frequency inappropriate, since Combigan should be given TID", correct:false, why:"Combigan is dosed BID, so its frequency is correct."},
  {t:"Effectiveness: dose too low, since dorzolamide should be given QID", correct:false, why:"Dorzolamide is dosed TID, so TID is the correct frequency."},
  {t:"Indication: need additional therapy, since pilocarpine is missing", correct:false, why:"Nothing is missing. The problem is two products with the same drug, and adding pilocarpine would not remove that overlap."}],
 teach:"A combination product can repeat a drug the patient already uses elsewhere. Combigan contains timolol, so a separate timolol repeats the beta blocker. Duplicate therapy is an indication problem, and the pharmacist contacts the prescriber. Check each combination's ingredients against the rest of the list.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 15, 32, 69, 78; T@85939 11/19"},

{id:"LMC-023", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-asthma-two-drugs",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Anders, 63, uses his rescue inhaler several times a day for asthma that is not controlled. His eye drops are bimatoprost, timolol, brimonidine and pilocarpine. Which two should the pharmacist flag to the prescriber?",
 options:[
  {t:"Bimatoprost and brimonidine", correct:false, why:"Neither carries an asthma precaution. Brimonidine's precautions are cardiovascular disease, kidney disease and a history of stroke."},
  {t:"Bimatoprost and timolol", correct:false, why:"Timolol is a precaution, but bimatoprost is not, so the pair is incomplete."},
  {t:"Timolol and pilocarpine", correct:true, why:"Timolol can cause bronchospasm if absorbed, and pilocarpine can too. Asthma is a listed precaution for both."},
  {t:"Brimonidine and pilocarpine", correct:false, why:"Pilocarpine is a precaution, but brimonidine is not listed with asthma, so the pair is incomplete."}],
 teach:"Beta blockers and pilocarpine can cause bronchospasm if enough drug reaches the bloodstream, so uncontrolled asthma is a precaution for both. A rescue inhaler used several times a day signals uncontrolled asthma. The pharmacist flags both drugs to the prescriber; the prostaglandin analog and brimonidine do not carry this precaution.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 33-34, 58-59; T@60994, T@81993 11/19"},

{id:"LMC-026", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-cost-single-use-pf",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Silvestri, 74, was changed to single-use preservative-free tafluprost vials. He has no reaction to preservatives, and the copay is high. Which action addresses the problem?",
 options:[
  {t:"Cost: ask the prescriber about a lower-cost generic prostaglandin analog", correct:true, why:"The problem is cost, and generic prostaglandin analogs are lower in cost while staying in the first-line class."},
  {t:"Effectiveness: ask the prescriber to double the dose of tafluprost to improve control", correct:false, why:"Dose is not the problem. A prostaglandin analog given more than once daily has decreased efficacy."},
  {t:"Safety: ask the prescriber to switch to a preservative-free beta blocker", correct:false, why:"He has no reaction to preservatives, so there is no intolerance to solve. Changing class is for intolerance or inadequate response, not cost."},
  {t:"Indication: stop tafluprost, because single-use vials have no indication here", correct:false, why:"Tafluprost is a prostaglandin analog, the first-line class, so it has an indication. The issue is its price."}],
 teach:"When the problem is cost, look for a more cost-effective drug rather than a change of dose or class. Single-use preservative-free vials cost a little more, and prostaglandin analogs have lower-cost generics. A generic prostaglandin analog keeps the first-line class at lower cost.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 20, 68, 79; T@54842, T@51810 11/19"},

{id:"LMC-029", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-select-changes", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mr. Kowalski, 72, uses bimatoprost 1 drop OU in the evening, timolol 0.5% solution BID, brimonidine 0.1% BID and dorzolamide 2% TID, and cannot manage four bottles. Which individual changes are reasonable? Select all that apply.",
 options:[
  {t:"Replace timolol and brimonidine with Combigan 1 drop OU BID", correct:true, why:"Combigan contains brimonidine and timolol, both in his regimen, dosed BID, so two bottles become one."},
  {t:"Increase bimatoprost to 1 drop OU BID", correct:false, why:"A prostaglandin analog given more than once daily has decreased efficacy, and it does not reduce the number of bottles."},
  {t:"Replace timolol and dorzolamide with Cosopt 1 drop OU BID", correct:true, why:"Cosopt is dorzolamide plus timolol, both in the regimen, dosed BID, so two bottles become one."},
  {t:"Replace timolol and dorzolamide with Cosopt 1 drop OU once daily", correct:false, why:"Cosopt is dosed BID. Once daily is the wrong frequency."},
  {t:"Replace timolol solution with timolol gel 1 drop OU once daily", correct:true, why:"Timolol gel is dosed once daily instead of BID, so it cuts doses each day and has fewer systemic effects than the solution."},
  {t:"Add Simbrinza 1 drop OU TID to the current regimen", correct:false, why:"Simbrinza is a CAI plus an alpha-2 agonist. He already uses both classes, so adding it repeats them."}],
 teach:"To cut bottles, combine drugs already in use or move to once daily dosing. Combigan replaces timolol plus brimonidine, Cosopt replaces timolol plus dorzolamide, and timolol gel replaces timolol solution once daily. Raising a prostaglandin analog to BID lowers efficacy, and a combination must not repeat a drug.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 32, 69, 76-82; T@90121 11/19"},

{id:"LMC-030", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-redesign-five-bottles-pilocarpine",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Abara, 70, uses bimatoprost 1 drop OU in the evening, timolol 0.5% BID, brimonidine 0.1% BID, dorzolamide 2% TID and pilocarpine 2% QID. She is overwhelmed by five bottles. Which complete regimen cuts one bottle and keeps correct dosing?",
 options:[
  {t:"Bimatoprost 1 drop OU in the evening; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU twice daily", correct:false, why:"Pilocarpine is dosed QID, so twice daily is a frequency error."},
  {t:"Bimatoprost 1 drop OU in the evening; Cosopt BID; Combigan BID; pilocarpine 1 drop OU QID", correct:false, why:"Cosopt and Combigan both contain timolol, so the beta blocker is repeated."},
  {t:"Bimatoprost 1 drop OU BID; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU QID", correct:false, why:"A prostaglandin analog is given once daily, and BID decreases its efficacy."},
  {t:"Bimatoprost 1 drop OU in the evening; Combigan BID; dorzolamide TID; pilocarpine 1 drop OU QID", correct:true, why:"Combigan replaces timolol and brimonidine, and the remaining drugs keep their frequencies: bimatoprost daily, dorzolamide TID, pilocarpine QID."}],
 teach:"With five bottles, cut one by combining two drugs already in use, and leave every other drug at its own frequency: prostaglandin analog once daily, Combigan BID, dorzolamide TID, pilocarpine QID. Pilocarpine is a four-times-daily drug and is not shortened to fit a combination.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 57, 69, 76-82; T@80784, T@89739 11/19"},

{id:"LMC-033", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-remove-wait-15",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Tanaka, 62, wears soft contact lenses all day and puts her morning timolol drop in with the lenses in. What should the pharmacist counsel?",
 options:[
  {t:"Remove the lenses first and reinsert them at least 15 minutes after the drop", correct:true, why:"Lenses trap drug and preservative against the eye, so they come out before the drop and go back after at least 15 minutes."},
  {t:"Remove the lenses first and reinsert them after 10 minutes, once the drop has settled", correct:false, why:"The lens wait is 15 minutes. Ten minutes is the wait before an ointment or gel-forming solution."},
  {t:"Keep the lenses in and keep the lids closed for 1 to 2 minutes after the drop", correct:false, why:"Lenses must come out before the drop because they trap drug and preservative. Closing the lids is a separate step for absorption."},
  {t:"Remove the lenses first and reinsert them after 5 minutes, as between two solutions", correct:false, why:"Five minutes is the wait between solutions. Lenses need at least 15 minutes after the drop."}],
 teach:"Contact lenses can trap the drug and the preservative against the eye surface. The lenses therefore come out before the drop, and the patient waits at least 15 minutes before putting them back. Wearing lenses does not exclude any product.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 83-84; T@91057 11/19"},

{id:"LMC-034", skill:"mech", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-why-trap",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which concern explains the advice to remove contact lenses before using eye drops?",
 options:[
  {t:"Lenses speed drainage of the drop down through the nasolacrimal duct", correct:false, why:"Drainage is addressed by eyelid closure, a separate counseling point from lens wear."},
  {t:"Lenses make the drop wash out the next solution", correct:false, why:"Washout is why two products are 5 minutes apart, a separate counseling point."},
  {t:"Lenses raise the chance of bacteria entering the bottle", correct:false, why:"Bacteria entering the bottle is prevented by keeping the tip off every surface, a separate counseling point."},
  {t:"Lenses trap the drug and preservative against the eye surface", correct:true, why:"Lenses can trap drug and preservative against the eye, which is damaging when the product contains BAK."}],
 teach:"Lenses can hold drug and preservative such as BAK against the eye surface, and BAK is damaging to the eye when used with contacts. That is why lenses come out before every drop. Washout, drainage and bacteria on the tip are separate counseling points.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91253 11/19"},

{id:"LMC-035", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-sequence-two-solutions",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Chavez, 58, wears lenses by day. Her morning drops are brimonidine 0.1% solution and timolol 0.5% solution, both multiple-dose bottles with benzalkonium chloride. Which morning sequence is correct?",
 options:[
  {t:"Remove lenses, brimonidine, timolol right away, wait 15 minutes, insert lenses", correct:false, why:"Two solutions need 5 minutes between them so the second does not wash out the first, even with the lenses out."},
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol, insert lenses right away", correct:false, why:"Lenses wait at least 15 minutes after the last drop. Reinserting right away traps drug and preservative against the eye."},
  {t:"Brimonidine, wait 5 minutes, timolol, then remove lenses, wait 15 minutes, insert lenses", correct:false, why:"Lenses come out before the first drop, not after the drops. Lenses left in trap drug and preservative."},
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol, wait 15 minutes, insert lenses", correct:true, why:"Lenses out, 5 minutes between solutions so no drop washes out another, and 15 minutes after the last drop before the lenses return."}],
 teach:"Combine the rules in time order: lenses out first, 5 minutes between the two solutions, then 15 minutes after the last drop before the lenses go back in. The 15 minutes starts at the last drop, not the first.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74, 83-84; T@92094 11/19"},

{id:"LMC-036", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-not-excluded",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Ndlovu, 60, wears contact lenses and has been told that lens wearers cannot use glaucoma drops. Which response is correct?",
 options:[
  {t:"He should ask the prescriber for oral therapy, since lenses rule out eye drops", correct:false, why:"Lens wear does not exclude any product, so oral therapy is not needed on that basis."},
  {t:"He can use them: remove lenses, instill, and wait 15 minutes before reinserting", correct:true, why:"Lens wear does not exclude any product. It changes the routine to remove lenses, instill and wait 15 minutes."},
  {t:"He can use them with the lenses in, if he waits 5 minutes between each pair of drops", correct:false, why:"Lenses are removed before the drop, not left in. Five minutes is the wait between products, not the lens wait."},
  {t:"He should remove the lenses just for products that contain BAK, and not for others", correct:false, why:"BAK makes removal especially important, but lenses come out before any product, with or without a preservative."}],
 teach:"Contact lens wear changes how drops are given, not which drops can be used. The patient removes the lenses, instills the drop and waits at least 15 minutes before reinserting them. Products with BAK make this routine especially important.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91731 11/19"},

{id:"LMC-037", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-statements-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which instructions apply when a patient who wears contact lenses uses glaucoma drops? Select all that apply.",
 options:[
  {t:"Remove the lenses before using the drops", correct:true, why:"Lenses trap drug and preservative against the eye, so they come out before the drop."},
  {t:"Lenses may stay in when the product is a suspension", correct:false, why:"Dosage form does not change this. Lenses come out before drops of any product."},
  {t:"Wait 15 minutes after the drop before reinserting the lenses", correct:true, why:"Lenses are reinserted at least 15 minutes after the drop so they do not trap the drug and preservative."},
  {t:"A 5 minute wait is enough when the product is a solution", correct:false, why:"Five minutes is the wait between solutions. The lens wait is 15 minutes."},
  {t:"Removal and waiting matter most when the product contains BAK", correct:true, why:"BAK is damaging to the eyes when used with contacts, so removal and the wait matter most then."},
  {t:"Lens wearers are excluded from products with preservatives", correct:false, why:"Lens wear does not exclude any product, preservative products included."}],
 teach:"Lenses trap drug and preservative against the eye, so they come out before the drop and go back at least 15 minutes after it. BAK makes this most important because it is damaging to the eye when used with contacts. Lens wear does not exclude any product.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 83; T@91057, T@91731 11/19"},

{id:"LMC-038", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"lens", concept:"lmc-lens-bak-irritation-two-points",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Cho, 55, wears lenses and uses a multiple-dose latanoprost bottle with benzalkonium chloride. His eyes are irritated. Which pair of points should the pharmacist make?",
 options:[
  {t:"Remove lenses and wait 5 minutes after the drop, and ask about a single-use preservative-free product", correct:false, why:"The lens wait is 15 minutes, not 5, so the preservative is not trapped against the eye."},
  {t:"Keep the lenses in and give the drop at bedtime, and ask the prescriber about a preservative-free product", correct:false, why:"Lenses come out before the drop at any time of day. Lenses left in trap drug and BAK against the eye."},
  {t:"Remove lenses and wait 15 minutes, and ask about a single-use preservative-free product", correct:true, why:"The lens routine limits BAK held against the eye, and preservative-free products are the option when preservatives cause intolerance."},
  {t:"Remove lenses and wait 15 minutes, and ask the prescriber to add a second prostaglandin analog for comfort", correct:false, why:"A second prostaglandin analog adds another drug and does not remove the BAK."}],
 teach:"BAK is the common preservative in multiple-dose bottles and is damaging to the eye when held against it by a contact lens, so the lenses come out and the patient waits 15 minutes. When a preservative causes intolerance, a preservative-free product is the option.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 21, 68, 83; T@91253, T@55285 11/19"},

{id:"LMC-039", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-netarsudil-6wk",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Rowe, 67, opened her netarsudil bottle 8 weeks ago, kept it at room temperature, and it still has liquid. What counseling is correct?",
 options:[
  {t:"Keep using it; once opened it stays at room temperature until the bottle is empty", correct:false, why:"Opened latanoprost, latanoprostene bunod and tafluprost stay at room temperature with no 6 week limit listed. Netarsudil has the limit."},
  {t:"Replace it: opened netarsudil lasts less than 6 weeks at room temperature", correct:true, why:"Once opened, netarsudil is kept at room temperature for less than 6 weeks, tied to how long its preservative lasts. Eight weeks is past that."},
  {t:"Move it to the refrigerator and keep using it until the bottle is empty", correct:false, why:"Refrigeration is for the unopened bottle. After opening, netarsudil stays at room temperature for less than 6 weeks."},
  {t:"Keep using it for another 6 weeks, then replace it with a new bottle", correct:false, why:"The limit counts from opening, and 8 weeks have passed, so it is already past the limit."}],
 teach:"Netarsudil is refrigerated until opened and then kept at room temperature for less than 6 weeks, a limit tied to how long its preservative stays good. At 8 weeks the bottle is past that limit and is replaced, even though liquid remains.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 85; T@92585 11/19"},

{id:"LMC-040", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-two-new-bottles",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Kane receives new, unopened bottles of latanoprost and netarsudil. Which storage counseling is correct?",
 options:[
  {t:"Refrigerate both until opened, then keep at room temperature, netarsudil within 6 weeks", correct:true, why:"Both are refrigerated until opened and then kept at room temperature, and netarsudil carries the limit of less than 6 weeks."},
  {t:"Refrigerate both before and after opening, using the netarsudil within 6 weeks of opening", correct:false, why:"After opening, both go to room temperature. Refrigeration is for the unopened bottles."},
  {t:"Keep both at room temperature from the start, using the netarsudil within 6 weeks of opening", correct:false, why:"Both are refrigerated before opening, so room temperature from the start is wrong."},
  {t:"Refrigerate both until opened; once opened keep both at room temperature for up to 6 weeks", correct:false, why:"The 6 week limit is listed for netarsudil, not for latanoprost."}],
 teach:"Both drugs are refrigerated before opening and kept at room temperature once opened. Netarsudil adds a limit of less than 6 weeks after opening, tied to how long its preservative lasts. Latanoprost is listed without that limit.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 85; T@92421, T@92585 11/19"},

{id:"LMC-042", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"store", concept:"lmc-store-and-order-transition",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Lund, 71, leaves the hospital with a new unopened latanoprost bottle and a new timolol gel-forming solution, both used at bedtime. Which counseling covers storage and order?",
 options:[
  {t:"Keep latanoprost at room temperature before opening; instill the gel, wait 10 minutes, then latanoprost", correct:false, why:"Unopened latanoprost is refrigerated, not kept at room temperature, and the gel goes after the solution, not before it."},
  {t:"Refrigerate latanoprost before and after opening; instill latanoprost, wait 5 minutes, then the gel", correct:false, why:"Opened latanoprost goes to room temperature, and the wait before the gel is 10 minutes, not 5."},
  {t:"Refrigerate unopened latanoprost and keep it at room temperature once opened; instill latanoprost, wait 10 minutes, then the gel", correct:true, why:"Storage: refrigerate until opened, then room temperature. Order: solution first, 10 minutes, then the gel-forming solution."},
  {t:"Refrigerate the unopened latanoprost and keep it at room temperature once opened; instill the gel, wait 5 minutes, then latanoprost", correct:false, why:"The storage is right, but the gel goes last after 10 minutes, not first after 5."}],
 teach:"Two counseling points apply. Unopened latanoprost is refrigerated and kept at room temperature once opened. For order, the solution goes first and the gel-forming solution last, with at least 10 minutes between so the solution reaches the eye before the gel.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75, 85; T@92421, T@88233 11/19"},

{id:"LMC-043", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-efficacy-iop-who",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Imani, 66, was just started on latanoprost and feels no different. Her daughter asks what shows whether the drug is working and who checks it. Which answer is correct?",
 options:[
  {t:"Intraocular pressure, measured by the pharmacist at each refill", correct:false, why:"Efficacy is IOP, but pharmacists do not measure it. The patient follows up with the eye doctor."},
  {t:"Her blood pressure, measured by the pharmacist at each refill", correct:false, why:"Blood pressure is not the efficacy measure for glaucoma therapy. Efficacy is IOP reduction."},
  {t:"Her symptoms, which she reports to the pharmacist at each refill", correct:false, why:"Open-angle glaucoma is asymptomatic until substantial visual field loss, so symptoms cannot show efficacy."},
  {t:"Intraocular pressure, measured by her eye doctor", correct:true, why:"Efficacy is the reduction in IOP, measured by the eye doctor at follow-up, not by the pharmacist."}],
 teach:"Open-angle glaucoma causes no symptoms until substantial visual field loss, so how she feels cannot show whether the drug works. Efficacy is judged by the fall in intraocular pressure, which the eye doctor measures. The pharmacist does not measure it, and the patient follows up with the eye doctor.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 12, 86; T@92967, T@46365 11/19"},

{id:"LMC-044", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-timeline-after-target",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Soto's eye pressure reached target at his 4-week visit. What follow-up schedule is appropriate for him?",
 options:[
  {t:"Eye doctor visit 3-4 months after starting, then visits at 2-4 week intervals while at target", correct:false, why:"These intervals are reversed. The first visit is early, and visits at target are spaced out."},
  {t:"Eye doctor visit 2-4 weeks after starting, then visits at 6 week intervals at target", correct:false, why:"Visits at target are every 3-4 months, not every 6 weeks."},
  {t:"Eye doctor visit 3-4 months after starting, then yearly visits once at target", correct:false, why:"The first visit is 2-4 weeks after starting, not 3-4 months, and yearly visits are not the schedule at target."},
  {t:"Eye doctor visit 2-4 weeks after starting, then visits at 3-4 month intervals at target", correct:true, why:"The first eye doctor visit is 2-4 weeks after starting, and visits are every 3-4 months once target IOP is achieved."}],
 teach:"Follow-up with the eye doctor is closer at the start and spreads out once the target is reached: 2-4 weeks after therapy starts, then every 3-4 months at target. Mr. Soto has reached target, so his next interval is the 3-4 month one.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 86; T@93065, T@93243 11/19"},

{id:"LMC-049", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-fu", sub:"mon", concept:"lmc-fu-plan-who-what",
 tags:["hard", "case"], source:'both',
 stem:"Ms. Ellis, 69, starts latanoprost in the evening and dorzolamide/timolol (Cosopt) BID. Which monitoring plan fits the pharmacist's role?",
 options:[
  {t:"IOP is checked at the pharmacy 2-4 weeks after starting, and side effects go to her primary care provider", correct:false, why:"Pharmacists do not measure IOP, and the eye doctor is the contact for follow-up."},
  {t:"Eye doctor checks IOP 3-4 months after starting; the pharmacist leaves side effects for that visit to be raised then", correct:false, why:"The first eye doctor visit is 2-4 weeks after starting, and the pharmacist explains side effects at the start instead of leaving them for later."},
  {t:"Eye doctor checks IOP 2-4 weeks after starting; pharmacist counsels on side effects and refers atypical ones", correct:true, why:"IOP is checked by the eye doctor. The pharmacist explains expected side effects and refers those that are not brief and typical."},
  {t:"Her vision is checked at each refill by the pharmacist; any side effect is handled by stopping the drug", correct:false, why:"Glaucoma causes no symptoms until substantial field loss, so a vision check does not show control, and side effects go to the eye doctor."}],
 teach:"Efficacy is intraocular pressure, checked by the eye doctor 2-4 weeks after starting and every 3-4 months at target. The pharmacist's main role is explaining the side effects to expect and sending the patient to the eye doctor when a side effect is not the short, typical kind.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 86-87; T@93275 11/19"},

{id:"LMC-050", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-drugs-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Mrs. Tran, 71, a Southeast Asian woman, takes albuterol, sertraline, ipratropium, atorvastatin and metformin. Which can raise her risk of primary angle-closure glaucoma? Select all that apply.",
 options:[
  {t:"Albuterol", correct:true, why:"Albuterol is a beta-2 agonist, a class listed among causes of pupillary dilation or ciliary body edema."},
  {t:"Atorvastatin", correct:false, why:"A statin is not among the classes listed as causes of pupillary dilation or ciliary body edema."},
  {t:"Sertraline", correct:true, why:"Sertraline is an SSRI, and antidepressants (SSRIs and TCAs) are on the list of causes."},
  {t:"Metformin", correct:false, why:"Metformin is not among the classes listed as causes of pupillary dilation or ciliary body edema."},
  {t:"Ipratropium", correct:true, why:"Ipratropium is an anticholinergic, a class that dilates the pupil. Atropine, promethazine and tiotropium are in the same group."}],
 teach:"Drugs that cause pupillary dilation or ciliary body edema raise the risk of angle closure: anticholinergics, antidepressants, alpha-1 agonists and beta-2 agonists. Screen a patient's list by class. Albuterol is a beta-2 agonist, sertraline an SSRI and ipratropium an anticholinergic.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 90; T@94538 11/19"},

{id:"LMC-051", skill:"epi", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-risk-profile",
 tags:["hard", "reasoning"], source:'both',
 stem:"Which patient has the risk factors for primary angle-closure glaucoma?",
 options:[
  {t:"A 72-year-old Southeast Asian woman whose mother had PACG", correct:true, why:"She matches female sex, older age, Southeast Asian ethnicity and a first-degree relative with PACG."},
  {t:"A 72-year-old non-Hispanic white man with type 2 diabetes and myopia", correct:false, why:"Non-Hispanic white ethnicity, type 2 diabetes and myopia are open-angle glaucoma risk factors."},
  {t:"A 35-year-old Southeast Asian man with no family history", correct:false, why:"He is Southeast Asian, but he is young, male and has no family history, so he matches one of the four."},
  {t:"A 70-year-old non-Hispanic white man with a thin central cornea and high eye pressure", correct:false, why:"Non-Hispanic white ethnicity, thin central cornea and high eye pressure are open-angle risk factors, and he is male."}],
 teach:"Angle-closure risk factors are female sex, older age, Asian (Southeast Asian) ethnicity and a first-degree relative with PACG. Open-angle risks differ: older age, family history, non-Hispanic white, high IOP, type 2 diabetes, myopia and thin cornea.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 7, 89; T@93901 11/19"},

{id:"LMC-052", skill:"case", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-acute-referral",
 tags:["hard", "case"], source:'both',
 stem:"A 69-year-old woman comes to the pharmacy with severe pain in one eye, headache, nausea, vomiting, blurred vision, colored halos around lights and a sudden loss of vision. What is the best action?",
 options:[
  {t:"Recommend over-the-counter brimonidine 0.025% to relieve the redness and pain", correct:false, why:"OTC brimonidine 0.025% is for redness, not glaucoma treatment, so it would not address an emergency."},
  {t:"Tell her these symptoms are typical of open-angle glaucoma and need no action", correct:false, why:"Open-angle glaucoma is asymptomatic until substantial field loss. Severe pain with sudden vision loss points to acute angle closure."},
  {t:"Tell her to see her eye doctor at her next visit in 2-4 weeks", correct:false, why:"Acute symptoms need immediate evaluation. A visit in 2-4 weeks is the follow-up for open-angle glaucoma therapy."},
  {t:"Send her for emergency evaluation by an eye care professional", correct:true, why:"These are acute angle-closure symptoms, an emergent issue, so she is referred to an eye care professional right away."}],
 teach:"Severe eye pain with headache, nausea, vomiting, blurred vision, colored halos and sudden vision loss is acute angle closure, an emergency unlike the silent course of open-angle glaucoma. She is sent for immediate eye evaluation, because treatment, often laser surgery, is done by eye care professionals.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 91-92; T@94946, T@94793 11/19"},

{id:"LMC-053", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-prodromal",
 tags:["hard", "tell"], source:'both',
 stem:"A 66-year-old Southeast Asian woman who uses no eye drops reports hazy vision, halos around lights, an occasional eye ache and a headache. Which is the best description?",
 options:[
  {t:"Typical open-angle glaucoma, which is silent until substantial field loss", correct:false, why:"Open-angle glaucoma is asymptomatic until substantial visual field loss. Halos and pain are not its early picture."},
  {t:"Prodromal symptoms of angle-closure glaucoma", correct:true, why:"Hazy vision, halos, eye ache and headache are prodromal symptoms of angle closure, and she is an older woman of Southeast Asian descent."},
  {t:"An expected effect of a prostaglandin analog such as blurred vision at night", correct:false, why:"She uses no eye drops, so no prostaglandin analog effect applies. The cluster matches the prodrome of angle closure."},
  {t:"An adverse effect of a carbonic anhydrase inhibitor", correct:false, why:"She uses no eye drops, so no carbonic anhydrase inhibitor effect applies. The cluster matches the prodrome of angle closure."}],
 teach:"Prodromal angle-closure symptoms are blurred or hazy vision, halos around lights, eye pain and headache. Severe pain, nausea, vomiting and sudden vision loss follow in the acute attack. Open-angle glaucoma has no symptoms until substantial field loss, so halos and pain point away from it.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 12, 91; T@46345 11/19"},

{id:"LMC-054", skill:"patho", prof:'Lam', lowYield:true, tier:'new', topic:"lm-pacg", sub:"pacg", concept:"lmc-pacg-phenylephrine",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Sato, 70, is at risk for primary angle-closure glaucoma and asks about an over-the-counter decongestant containing phenylephrine. What is the concern?",
 options:[
  {t:"It raises eye pressure by blocking trabecular outflow, as corticosteroids do", correct:false, why:"Outflow through the trabecular meshwork is the corticosteroid mechanism. Phenylephrine acts by dilating the pupil."},
  {t:"It constricts the pupil, which narrows the angle further", correct:false, why:"Alpha-1 agonists dilate the pupil rather than constrict it."},
  {t:"It can dilate the pupil and raise the risk of angle closure", correct:true, why:"Phenylephrine is an alpha-1 agonist that dilates the pupil, one of the causes of angle-closure risk."},
  {t:"It is an anticholinergic, which is why it raises the risk", correct:false, why:"Phenylephrine is an alpha-1 agonist, a separate class from the anticholinergics on the list. Both classes raise the risk."}],
 teach:"Alpha-1 agonists such as phenylephrine and ephedrine cause pupillary dilation, and dilation raises angle-closure risk. That is why an OTC decongestant matters to a patient with angle-closure risk factors. Corticosteroids raise pressure by a different mechanism, outflow through the trabecular meshwork.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 90; T@94538 11/19"},

{id:"LMC-056", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-wrong-eye",
 tags:["hard", "case"], source:'both',
 stem:"Mrs. Rahman, 70, is diagnosed with open-angle glaucoma in both eyes. Her prescription reads latanoprost 1 gtt OD QPM. What should the pharmacist do?",
 options:[
  {t:"Contact the prescriber: OD is the right eye, and both eyes need drops", correct:true, why:"OD means the right eye, but both eyes need treatment (OU). The evening once daily frequency is correct, so the eye is the error."},
  {t:"Dispense it as written, since OD stands for treatment of both eyes", correct:false, why:"OD is the right eye. OU is both eyes."},
  {t:"Contact the prescriber: the frequency should be BID rather than once daily", correct:false, why:"Latanoprost is dosed once daily, and BID decreases efficacy, so the frequency is not the error."},
  {t:"Dispense it as written, since QPM stands for twice daily dosing", correct:false, why:"QPM means in the evening, once daily, not twice daily."}],
 teach:"A sig has two parts to read: the eye abbreviation and the frequency. OD is the right eye, OS the left and OU both eyes, and QPM is the evening. Glaucoma in both eyes with OD on the prescription is a mismatch to clarify with the prescriber.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 4; T@57583 11/19"},

{id:"LMC-058", skill:"dose", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-correct-multi", multi:true,
 tags:["hard", "multi"], source:'both',
 stem:"Which prescriptions are written with the usual frequency? Select all that apply.",
 options:[
  {t:"Dorzolamide 2% 1 gtt OU TID", correct:true, why:"Dorzolamide 2% is dosed TID."},
  {t:"Simbrinza 1 gtt OU BID", correct:false, why:"Simbrinza, a CAI plus an alpha-2 agonist, is dosed TID. BID is the frequency of Combigan and Cosopt."},
  {t:"Combigan 1 gtt OU BID", correct:true, why:"Combigan is brimonidine plus timolol, dosed BID."},
  {t:"Timolol gel 1 gtt OU BID", correct:false, why:"Timoptic-XE gel is dosed once daily. BID is the frequency of timolol solution."},
  {t:"Pilocarpine 1 gtt OD QID", correct:true, why:"Pilocarpine is dosed QID, the frequency to recognize for this class."},
  {t:"Bimatoprost 1 gtt OU BID", correct:false, why:"A prostaglandin analog is given once daily, and more often decreases efficacy."}],
 teach:"Each product has a usual frequency: dorzolamide, brinzolamide and Simbrinza TID; Combigan and Cosopt BID; timolol solution BID and timolol gel once daily; pilocarpine QID; prostaglandin analogs once daily.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 20, 32, 51, 57, 69; T@80784, T@85939 11/19"},

{id:"LMC-059", skill:"case", prof:'Lam', tier:'new', topic:"lm-impl", sub:"regim", concept:"lmc-sig-combigan-tid-error",
 tags:["hard", "case"], source:'both',
 stem:"A new prescription reads Combigan 1 gtt OU TID. What is the problem?",
 options:[
  {t:"Frequency too low: Combigan should be dosed QID, so contact the prescriber", correct:false, why:"Combigan is BID, not QID, and TID is Simbrinza's frequency. The frequency is too high rather than too low."},
  {t:"Frequency too high: Combigan is BID, so contact the prescriber", correct:true, why:"Combigan is dosed BID, so TID is too frequent and the pharmacist clarifies it with the prescriber."},
  {t:"The eye is wrong: Combigan is used in a single eye, so contact the prescriber", correct:false, why:"OU means both eyes, which fits bilateral glaucoma, so the eye is not the problem."},
  {t:"There is no problem: the combination is dosed TID, so dispense it", correct:false, why:"TID is the Simbrinza frequency. Combigan is BID, so dispensing as written would be an error."}],
 teach:"Know the combination frequencies: Combigan and Cosopt are BID, and Simbrinza is TID. A TID sig on Combigan is a frequency error, so the pharmacist clarifies it with the prescriber, as with a BID sig for a prostaglandin analog.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slide 69; T@85939 11/19"},

{id:"LMC-062", skill:"counsel", prof:'Lam', tier:'new', topic:"lm-impl", sub:"order", concept:"lmc-gel-lens-sequence",
 tags:["hard", "case"], source:'both',
 stem:"Mr. Barnes, 63, wears contact lenses. His morning products are brimonidine 0.1% solution and timolol gel-forming solution. Which morning sequence is correct?",
 options:[
  {t:"Remove lenses, brimonidine, wait 5 minutes, timolol gel, wait 15 minutes, insert lenses", correct:false, why:"Five minutes is too short before a gel-forming solution, which needs 10 minutes."},
  {t:"Remove lenses, timolol gel, wait 10 minutes, brimonidine, then wait 15 minutes, insert lenses", correct:false, why:"The gel-forming solution goes after the solution, not before it."},
  {t:"Remove lenses, brimonidine, wait 10 minutes, timolol gel, wait 15 minutes, insert lenses", correct:true, why:"Lenses out, brimonidine first, 10 minutes before the gel, and 15 minutes after the last drop before the lenses go in."},
  {t:"Remove lenses, brimonidine, wait 10 minutes, timolol gel, insert lenses after another 10 minutes", correct:false, why:"The lens wait after the last drop is 15 minutes, not 10."}],
 teach:"Three rules combine in time order: lenses out first, the solution before the gel-forming solution with at least 10 minutes between, and 15 minutes after the last drop before the lenses go back in. The gel is the last group, so it is the last drop.",
 cite:"Lectures 12 (Lam_Glaucoma.pdf) slides 74-75, 83; T@88233, T@91057 11/19"}
);
