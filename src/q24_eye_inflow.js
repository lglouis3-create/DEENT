/* q24_eye_inflow.js: Eye, glaucoma drugs that decrease inflow (Dr. Smith, Lectures 9-10, Exam 3). Written 2026-11-18.
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 16 (receptors and enzymes), 18-20 (beta receptor antagonists),
   22-24 (alpha 2 agonists), 26-29 (carbonic anhydrase inhibitors; 27 the proximal convoluted tubule figure), 45 (combinations);
   DEENT_Lecture_11.13_transcript.txt (beta blockers T@43883-48325, alpha 2 agonists T@48704-53260, carbonic anhydrase inhibitors
   T@53959-60121, her Exam 3 remarks T@61016) and DEENT_Lecture_11.17_transcript.txt (carbonic anhydrase inhibitors and the kidney
   T@5420-22639). Character offsets into those files.
   Conflicts between slide and lecture, stated in the explanations of the items they touch:
   (1) 11/13 T@54995: carbonic acid "disassociates into sodium and bicarbonate"; 11/17 T@5420 and slide 27: hydrogen ion and bicarbonate,
       with sodium leaving by a separate route. Slide 26 says the drug reduces "sodium and bicarbonate" for secretion. No item keys the
       dissociation products of carbonic acid; the solute items key sodium and bicarbonate (slide 26).
   (2) Slide 29 lists systemic acidosis under the oral drugs only; 11/17 T@16780 says it occurs with the oral drugs and, "to a much lesser
       extent", sometimes with the topical ones. Items key the oral route as the risk and do not make the topical route a wrong answer by itself.
   (3) Slide 24 lists "allergic reaction" under the systemic effects of apraclonidine; 11/13 T@51227 describes an allergic response in the eye.
       Items key apraclonidine for the allergic reaction and do not ask where it occurs.
   (4) Slide 19 shows levobunolol under the nonspecific blockers; the cataract surgery point is in the lecture (T@45822) and in Louis's
       note on the slide, so it is cited to the transcript. Metipranolol is named only in the lecture (T@45268, "we used to have another one");
       it is not on slide 19 and no item asks about it.
   (5) Slide 20 note and T@48238 say to use a more selective drug for a cardiac adverse event; beta 1 selectivity does not remove cardiac beta
       blockade, so no item asks which drug to choose for a cardiac patient. The selectivity items ask about asthma (beta 2, T@47078).
   (6) The transcript says the "NHE3" and "NBC1" names need not be learned (11/17 T@9848); the items describe the exchange without the names.
   Black box warnings: none of the inflow classes carries one in the deck or the transcript, so no item asks for one. */
(() => {
const D = 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)';
// opts: [text, why] with the keyed option first; k = 0..3 the position the key takes among the options.
// For select-all items (multi) opts are [text, why, correct] in the order shown.
function mk(id, skill, tier, sub, concept, tags, source, stem, k, opts, teach, cite, multi) {
  let options;
  if (multi) options = opts.map(o => ({t:o[0], correct:!!o[2], why:o[1]}));
  else {
    const rest = opts.slice(1).map(o => ({t:o[0], correct:false, why:o[1]}));
    options = rest.slice();
    options.splice(k, 0, {t:opts[0][0], correct:true, why:opts[0][1]});
  }
  const q = {id, skill, prof:'Smith', tier, topic:'ey-in', sub, concept, tags, source, stem, options, teach, cite: D + ' ' + cite};
  if (multi) q.multi = true;
  return q;
}
QUESTIONS.push(

// ---------- beta receptor antagonists ----------
mk('EI-001','mech','new','bb','ey-bb-mech',['inflow'],'both',
 'At which site and with what effect do timolol and the other beta receptor antagonists lower intraocular pressure?', 1, [
 ['They block beta receptors on the ciliary body epithelium and decrease aqueous humor production','Slide 18: "Blocks the beta-adrenergic receptor on the ciliary body ... Reduce aqueous production by the ciliary body". The lecture adds that the mechanism is not fully understood (T@43883 11/13).'],
 ['They block beta receptors on the ciliary body epithelium and increase uveoscleral outflow','Slide 18: "Not much effect on outflow". Increased uveoscleral outflow is the extra effect of brimonidine (slide 22).'],
 ['They block beta receptors in the trabecular meshwork and widen the outflow channel','Slide 18 puts the receptor on the ciliary body and says there is not much effect on outflow; the meshwork route is the target of the outflow drugs.'],
 ['They stimulate beta receptors on the ciliary body and decrease aqueous humor production','Stimulating these receptors gave more aqueous humor in the studies she described; blocking them lowered production (T@43883 11/13).']],
 'Slide 18: beta receptor antagonists block the beta-adrenergic receptor on the ciliary body, reduce aqueous humor production (inflow) and have little effect on outflow. The mechanism is not fully understood (T@43883).',
 'slide 18; T@43883 11/13'),

mk('EI-002','mech','new','bb','ey-bb-no-outflow',['inflow','outflow'],'both',
 'A topical beta receptor antagonist is added to the regimen of a patient with open angle glaucoma. What change in aqueous humor dynamics does it produce?', 2, [
 ['Production decreases and outflow is not changed much','Slide 18: "Reduce aqueous production ... Not much effect on outflow"; "They do not affect outflow" (T@44430 11/13).'],
 ['Production decreases and uveoscleral outflow increases','Production does fall, but the uveoscleral outflow increase is attributed to brimonidine (slide 22) and to the prostaglandin agonists, not to beta receptor antagonists.'],
 ['Production is unchanged and trabecular outflow increases','Slide 18 states the reverse: production falls and outflow is not much affected.'],
 ['Production and trabecular outflow both increase','Beta receptor antagonists decrease production (slide 18); outflow is not much affected.']],
 'Beta receptor antagonists are an inflow drug class: they decrease production of aqueous humor and do not affect outflow (slide 18; T@44430).',
 'slide 18; T@44430 11/13'),

mk('EI-003','tell','new','bb','ey-bb-asthma-choice',['case','two-facts'],'both',
 'A patient with glaucoma also has asthma and needs a topical beta receptor antagonist. Which drug and reason fit best?', 3, [
 ['Betaxolol, because it is relatively beta 1 selective','Slide 19: betaxolol is the "relatively beta 1-selective agent"; bronchospasm comes from blocking beta 2 receptors, so a beta 1 selective drug is the better fit (T@47078 11/13).'],
 ['Timolol, because its nonspecific blockade lowers pressure more than the others','Slide 19 lists timolol as nonspecific, and the transcript says effectiveness at lowering pressure is much the same across the class (T@45418 11/13); nonspecific blockade includes beta 2.'],
 ['Carteolol, because it is nonspecific and has intrinsic sympathomimetic activity','Slide 19: carteolol is a nonspecific blocker with intrinsic sympathomimetic activity; nonspecific means beta 2 receptors are blocked as well.'],
 ['Levobunolol, because it possesses some alpha adrenergic effects','Slide 19: levobunolol is nonspecific and has some alpha adrenergic effects; those effects are why it was noted after cataract surgery (T@45822 11/13), not a protection for the lungs.'],
 ],
 'Slide 20: bronchospasm in asthmatics. The lecture ties it to the drugs that antagonize beta 2 receptors (T@47078). Betaxolol is the relatively beta 1 selective drug (slide 19).',
 'slides 19, 20; T@47078 11/13'),

mk('EI-004','adverse','new','bb','ey-bb-gel-wheeze',['case','two-facts','reverse'],'both',
 'A patient with well-controlled asthma starts a once-daily glaucoma gel and develops wheezing within days. Which drug is the likely cause?', 0, [
 ['Timolol','The lecture: timolol comes in a gel that can be given once a day (T@46338 11/13), and a nonspecific beta receptor antagonist can cause bronchospasm in asthmatics (slide 20).'],
 ['Brimonidine','Slide 24 lists oral dryness, dizziness, fatigue, somnolence and reduced blood pressure and pulse for brimonidine; bronchospasm is not listed, and a once-daily gel is described only for timolol.'],
 ['Dorzolamide','Slide 29 lists burning or stinging, hypersensitivity, headache, taste changes, dry eye, foreign body sensation and blurred vision for the ophthalmic carbonic anhydrase inhibitors; bronchospasm is not listed.'],
 ['Apraclonidine','Slide 24 lists hypotension, oral dryness and allergic reaction among its systemic effects; bronchospasm is a beta receptor antagonist effect (slide 20).']],
 'Timolol is the beta receptor antagonist available as a gel dosed once a day; the others need drops several times a day (T@46338). Bronchospasm in asthmatics is the respiratory effect of beta receptor antagonists (slide 20).',
 'slide 20; T@46338 11/13'),

mk('EI-005','mech','new','bb','ey-bb-levo-cataract',['case'],'transcript',
 'After cataract surgery a surgeon wants a beta receptor antagonist that may work better than timolol or betaxolol. Which drug is chosen and why?', 1, [
 ['Levobunolol, because it possesses some alpha adrenergic effects','Slide 19: levobunolol "possesses some alpha-adrenergic effects"; the transcript says that may make it more effective than timolol and betaxolol after cataract surgery (T@45822 11/13).'],
 ['Carteolol, because it has intrinsic sympathomimetic activity','Slide 19 gives carteolol intrinsic sympathomimetic activity; the lecture ties the cataract surgery use to levobunolol, not carteolol.'],
 ['Betaxolol, because it is relatively beta 1 selective','Slide 19 and the lecture name betaxolol as relatively beta 1 selective, and the lecture groups it with timolol as the drugs levobunolol may outperform after cataract surgery.'],
 ['Timolol, because it can be given once a day as a gel','Once-daily gel dosing is a convenience of timolol (T@46338); the lecture compares levobunolol favorably with timolol after cataract surgery.']],
 'The lecture: levobunolol has some alpha adrenergic effects and may be more effective than timolol and betaxolol after cataract surgery (T@45822). Apraclonidine is the alpha 2 agonist used for the same purpose (slide 23).',
 'slide 19; T@45822 11/13'),

mk('EI-006','counsel','new','bb','ey-bb-compression',['counsel','case'],'transcript',
 'A glaucoma patient with heart disease instills a topical beta receptor antagonist. Pressing on the inner corner of the eye after the drop reduces the risk of bradycardia because it', 2, [
 ['limits drainage of the drop into the nose and so absorption into the bloodstream','The lecture: compression against the nose stops the drop from draining into the nose and then into the bloodstream, which lowers systemic effects (T@48325 11/13; repeated 11/17).'],
 ['keeps more drug in the posterior chamber so a smaller dose can be used','The point of the compression is to limit systemic absorption, not to change the dose reaching the ciliary body (T@48325 11/13).'],
 ['blocks beta receptors in the nasal mucosa that signal the heart','The lecture describes drainage and absorption into the blood; it does not describe nasal receptors.'],
 ['slows aqueous humor outflow so the drug stays in the eye longer','Outflow is not the mechanism given; the step limits flow of drug to the nose and the bloodstream (T@48325 11/13).']],
 'Bradycardia and hypotension are systemic effects of topical beta receptor antagonists (slide 20). The lecture counsels pressing on the eye against the nose after the drop to limit systemic absorption (T@48325).',
 'slide 20; T@48325 11/13'),

mk('EI-007','tell','new','bb','ey-bb-betaxolol-feature',['tell'],'both',
 'Which feature separates betaxolol from timolol, levobunolol and carteolol?', 0, [
 ['It is relatively beta 1 selective','Slide 19: betaxolol is "relatively beta 1-selective"; the other three are nonspecific blockers.'],
 ['It has intrinsic sympathomimetic activity','Slide 19 gives intrinsic sympathomimetic activity to carteolol.'],
 ['It possesses some alpha adrenergic effects','Slide 19 gives some alpha adrenergic effects to levobunolol.'],
 ['It is available as a gel given once a day','The lecture names timolol as the beta receptor antagonist with a once-daily gel (T@46338 11/13).']],
 'Slide 19: timolol and levobunolol nonspecific (levobunolol with some alpha adrenergic effects); betaxolol relatively beta 1 selective; carteolol nonspecific with intrinsic sympathomimetic activity.',
 'slide 19; T@44712 11/13'),

mk('EI-008','tell','new','bb','ey-bb-efficacy-choice',['two-facts'],'transcript',
 'How do timolol, levobunolol and betaxolol compare in lowering intraocular pressure, and what usually decides between them?', 3, [
 ['Pressure lowering is much the same, so side effects and insurance coverage decide','The lecture: no real difference in effectiveness across the group; reasons to choose one include side effects and whether insurance pays (T@45418, T@45647 11/13).'],
 ['Betaxolol lowers pressure the most because its beta 1 selectivity targets the ciliary body','The lecture finds no real difference in effectiveness in spite of the differences in selectivity (T@45418 11/13).'],
 ['Timolol lowers pressure the most because nonspecific blockade reaches both beta receptor types','The lecture finds no real difference in effectiveness among these drugs (T@45418 11/13).'],
 ['Levobunolol lowers pressure the most in chronic therapy because of its alpha adrenergic effects','The transcript says levobunolol may be more effective after cataract surgery (T@45822 11/13), not in chronic therapy.']],
 'The lecture: despite differences in selectivity, the beta receptor antagonists are about equal in lowering pressure; choice follows side effects or coverage, and levobunolol may be better after cataract surgery.',
 'slide 19; T@45418 11/13'),

mk('EI-009','adverse','new','bb','ey-bb-ocular-se',['list'],'slide',
 'Which are ocular side effects of topical beta receptor antagonists? Select all that apply.', 0, [
 ['Decreased corneal sensitivity','Slide 20 ocular list: "Sting and burning, decreased corneal sensitivity, diplopia, blurred or cloudy vision, decreased night vision, and ptosis".',true],
 ['Decreased night vision','Slide 20 ocular list includes decreased night vision.',true],
 ['Ptosis','Slide 20 ocular list includes ptosis.',true],
 ['Foreign body sensation','Slide 20 does not list foreign body sensation; slide 24 lists it for the alpha 2 agonists, with the lecture calling it a hallmark of brimonidine (T@53260 11/13), and slide 29 lists it for the carbonic anhydrase inhibitors.']],
 'Slide 20: ocular effects of beta receptor antagonists are sting and burning, decreased corneal sensitivity, diplopia, blurred or cloudy vision, decreased night vision and ptosis. The lecture names stinging and burning as probably the most common (T@46823).',
 'slide 20; T@46823 11/13', true),

mk('EI-010','adverse','new','bb','ey-bb-insomnia-reverse',['case','reverse'],'slide',
 'A man starts a topical glaucoma drug and reports insomnia, headache and impotence. Which drug class is the most likely cause?', 2, [
 ['Beta receptor antagonists','Slide 20, "Other": headache, insomnia, taste perversion, depression, impotence.'],
 ['Alpha 2 agonists','Slide 24 lists fatigue and somnolence, not insomnia, and no impotence, for the alpha 2 agonists.'],
 ['M3 agonists','The lecture lists diarrhea, salivation, sweating and rhinorrhea as their systemic effects (T@28776 11/17), not insomnia or impotence.'],
 ['Carbonic anhydrase inhibitors','Slide 29 lists altered taste and smell, dry mouth, thirst, increased urination, acidosis and depression for the oral drugs; insomnia and impotence are not listed.']],
 'Slide 20 lists headache, insomnia, taste perversion, depression and impotence among the other effects of beta receptor antagonists; the lecture attributes them to systemic absorption or the effect on vision (T@46823).',
 'slide 20; T@46823 11/13'),

mk('EI-011','counsel','new','bb','ey-bb-gel-once-daily',['counsel','case'],'transcript',
 'A patient with a beta receptor antagonist prescribed for several drops a day often forgets doses. Which beta receptor antagonist can be changed to a once-daily formulation?', 1, [
 ['Timolol as a gel','The lecture: timolol comes in a gel formulation that can be given once a day; the other beta receptor antagonists are drops given several times a day (T@46338 11/13).'],
 ['Betaxolol as a gel','The once-daily gel is described for timolol; the transcript says the others are drops given several times a day (T@46338 11/13).'],
 ['Carteolol as a gel','The once-daily gel is described for timolol (T@46338 11/13).'],
 ['Levobunolol as a gel','The once-daily gel is described for timolol (T@46338 11/13); levobunolol is noted for use after cataract surgery.']],
 'The lecture: timolol is available as a gel given once a day, which helps patients who forget drops (T@46338). The other beta receptor antagonists are given several times a day.',
 'slide 19; T@46338 11/13'),

mk('EI-012','mech','new','bb','ey-bb-bronchospasm-why',['mechanism','two-facts'],'both',
 'Why can a topical nonspecific beta receptor antagonist cause bronchospasm in a patient with asthma?', 3, [
 ['Drug that reaches the bloodstream blocks beta 2 receptors','Slide 20 lists bronchospasm in asthmatics; the lecture ties it to systemic absorption and to the drugs that antagonize beta 2 receptors (T@47078 11/13).'],
 ['Drug that reaches the bloodstream blocks beta 1 receptors in the bronchi','Slide 19: beta 1 is the receptor betaxolol selectively blocks, the drug to prefer in asthma; the lecture ties bronchospasm to beta 2 antagonism (T@47078 11/13).'],
 ['Drug that stays in the eye blocks beta 2 receptors on the ciliary body, which constricts the airway','Receptors on the ciliary body lower aqueous humor production (slide 18); airway effects come from absorbed drug (T@47078 11/13).'],
 ['Drug that reaches the bloodstream stimulates beta 2 receptors in the lungs','These drugs are antagonists; the effect follows from blocking beta 2 receptors (slide 20; T@47078 11/13).']],
 'Beta receptor antagonists are given topically but are absorbed; bradycardia and hypotension (cardiac) and bronchospasm in asthmatics (beta 2 antagonism) are the systemic effects on slide 20 (T@47078).',
 'slide 20; T@47078 11/13'),

mk('EI-013','mech','new','bb','ey-in-epithelium-targets',['mechanism','inflow'],'both',
 'Which receptors and enzyme on the epithelium of the ciliary body are the targets of the glaucoma drugs that decrease inflow?', 0, [
 ['Beta receptors, alpha 2 receptors and carbonic anhydrase','Slide 16 and the lecture: the epithelial cells carry beta 1 and beta 2 receptors, alpha 2 receptors and carbonic anhydrase, the targets of beta receptor antagonists, alpha 2 agonists and carbonic anhydrase inhibitors (T@39278 11/13).'],
 ['Beta receptors, alpha 1 receptors and acetylcholinesterase','The lecture places alpha 1 receptors on the blood vessels of the ciliary body, and acetylcholinesterase is the enzyme targeted by the outflow drug ecothiophate (T@39278 11/13; T@23579 11/17).'],
 ['M3 receptors, alpha 2 receptors and carbonic anhydrase','The lecture places M3 receptors in the trabecular meshwork and ciliary muscle; M3 agonists increase outflow (slide 16; T@39278 11/13).'],
 ['Beta 2 receptors, M3 receptors and carbonic anhydrase','M3 receptors are not an inflow target; the lecture lists beta, alpha 2 and carbonic anhydrase as the epithelial targets that decrease production (T@39278 11/13).']],
 'Slide 16: ciliary epithelium with beta and alpha 2 receptors and carbonic anhydrase; M3 receptors in the meshwork and muscle. Antagonizing beta, agonizing alpha 2 and inhibiting carbonic anhydrase all decrease aqueous humor production (T@39278).',
 'slide 16; T@39278 11/13'),

// ---------- alpha 2 agonists ----------
mk('EI-014','mech','new','a2','ey-a2-two-extras',['mechanism','outflow'],'both',
 'In addition to decreasing aqueous humor production, which two effects are attributed to brimonidine?', 2, [
 ['Increased uveoscleral outflow and neuroprotection of the optic nerve','Slide 22: "Some increase in uveoscleral outflow (brimonidine)" and "Neuroprotective (brimonidine)"; the lecture calls these the two bonus mechanisms (T@49014, T@49682 11/13).'],
 ['Increased trabecular meshwork outflow and neuroprotection of the optic nerve','Slide 22 and the lecture name the uveoscleral route, not the trabecular meshwork route (T@49014 11/13).'],
 ['Increased uveoscleral outflow and prevention of pressure spikes after eye surgery','The postoperative pressure use belongs to apraclonidine (slide 23); neuroprotection is the second effect of brimonidine (slide 22).'],
 ['Increased trabecular meshwork outflow and prevention of pressure spikes after eye surgery','Slide 22 names uveoscleral outflow and neuroprotection for brimonidine; the postoperative use is apraclonidine (slide 23).']],
 'Slide 22: alpha 2 agonists decrease production; brimonidine also increases uveoscleral outflow and is neuroprotective (seen in animals, assumed in humans, T@49682).',
 'slide 22; T@49014 11/13'),

mk('EI-015','tell','new','a2','ey-a2-long-term-choice',['tell','two-facts','case'],'both',
 'A patient needs an alpha 2 agonist for long-term glaucoma therapy. Which drug and reason are the best fit?', 1, [
 ['Brimonidine, because it lacks apraclonidine\'s allergic response and adds uveoscleral outflow','Slide 23: brimonidine is the better long-term choice; the transcript says it does not have the allergic response profile of apraclonidine and has two bonus mechanisms (T@51660 11/13).'],
 ['Apraclonidine, because it adds uveoscleral outflow and neuroprotection','Slide 22 attributes uveoscleral outflow and neuroprotection to brimonidine, and the lecture does not use apraclonidine long term because of its allergic response (T@51227 11/13).'],
 ['Apraclonidine, because it prevents pressure rises after surgery and so suits chronic use','Preventing pressure rises after eye surgery is the short-term use of apraclonidine (slide 23); its allergic response limits chronic use (T@51227 11/13).'],
 ['Brimonidine, because it has fewer systemic effects, with no hypotension or dry mouth','Slide 24 lists oral dryness, dizziness, fatigue, somnolence and reduced blood pressure and pulse for brimonidine.']],
 'Apraclonidine prevents pressure rises after eye surgery such as cataract surgery but is not used long term because of an allergic response; brimonidine is the better long-term alpha 2 agonist, with two bonus mechanisms (slide 23; T@51227, T@51660).',
 'slides 22, 23; T@51660 11/13'),

mk('EI-016','tell','new','a2','ey-a2-post-surgery',['tell','case'],'both',
 'Which alpha 2 agonist is used to prevent a rise in intraocular pressure after eye surgery such as cataract surgery, and why is it not used long term?', 0, [
 ['Apraclonidine, because it can cause an allergic response in the eye','Slide 23: apraclonidine prevents a rise in pressure after eye surgery; the lecture does not use it for long-term glaucoma treatment because of its allergic response (T@51227 11/13).'],
 ['Brimonidine, because it can cause an allergic response in the eye','Slide 23 and the lecture: brimonidine is the better long-term choice and does not have that allergic profile (T@51660 11/13).'],
 ['Apraclonidine, because it has no effect on aqueous humor production','Slide 22: alpha 2 agonists decrease the rate of aqueous humor production; the lecture calls apraclonidine really good at keeping pressure low (T@51227 11/13).'],
 ['Brimonidine, because its neuroprotective effect is seen in animal studies','The animal evidence concerns brimonidine\'s extra effect (T@49682 11/13); it is not why brimonidine is not chosen after surgery.']],
 'Apraclonidine is used to blunt pressure rises after eye surgery; the allergic response limits long-term use (T@51227). Brimonidine is the better chronic choice (slide 23).',
 'slide 23; T@51227 11/13'),

mk('EI-017','adverse','new','a2','ey-a2-foreign-body-reverse',['case','reverse','two-facts'],'both',
 'After weeks of a glaucoma eye drop a patient reports a feeling of something in the eye, itchy eyes, dry mouth and fatigue. Which drug is the most likely cause?', 3, [
 ['Brimonidine','Slide 24: ocular foreign body sensation and ocular pruritus; systemic oral dryness, dizziness, fatigue and somnolence. The lecture calls foreign body sensation a hallmark (T@53260 11/13).'],
 ['Timolol','Slide 20 lists sting and burning, decreased corneal sensitivity and vision changes for the beta receptor antagonists, with bradycardia and bronchospasm systemically.'],
 ['Betaxolol','As a beta receptor antagonist its effects are those of slide 20; foreign body sensation with fatigue and dry mouth is the brimonidine pattern (slide 24).'],
 ['Dorzolamide','Slide 29 lists foreign body sensation for the ophthalmic carbonic anhydrase inhibitors, but dry mouth, thirst and increased urination are listed under the oral drugs.']],
 'Slide 24: brimonidine ocular effects are foreign body sensation and pruritus; systemic effects are oral dryness, dizziness, fatigue, somnolence and reduced blood pressure and pulse. The lecture calls foreign body sensation and itchiness quite significant for brimonidine (T@53260).',
 'slide 24; T@53260 11/13'),

mk('EI-018','mech','new','a2','ey-a2-main-mech',['mechanism','inflow'],'both',
 'What is the main mechanism by which brimonidine and apraclonidine lower intraocular pressure?', 1, [
 ['They agonize alpha 2 receptors on the ciliary body and decrease aqueous humor production','Slide 22: binds alpha 2 receptors on the ciliary body; decreases the rate of aqueous humor production. The lecture stresses that this is the main mechanism of both drugs (T@53260 11/13).'],
 ['They agonize alpha 2 receptors in the trabecular meshwork and increase aqueous humor outflow','Slide 22 puts the main action on the ciliary body and on production; outflow is a smaller effect of brimonidine.'],
 ['They antagonize alpha 2 receptors on the ciliary body and decrease aqueous humor production','Slide 22 describes agonists of alpha 2 receptors; antagonizing them would not be the mechanism.'],
 ['They agonize alpha 1 receptors on the ciliary body vessels and decrease aqueous humor production','The lecture places alpha 1 receptors on the vessels of the ciliary body; the drug class acts on alpha 2 receptors on the epithelium (slide 16; T@39278 11/13).']],
 'Slide 22: alpha 2 agonists bind alpha 2 receptors on the ciliary body and decrease production of aqueous humor; the full mechanism is not known (T@48704).',
 'slide 22; T@48704 11/13'),

mk('EI-019','tell','new','a2','ey-a2-neuroprotection-drug',['tell'],'both',
 'Which glaucoma drug is thought to protect the optic nerve in addition to lowering intraocular pressure?', 2, [
 ['Brimonidine','Slide 22: "Neuroprotective (brimonidine)"; the transcript says this is seen in animal studies and assumed in humans (T@49682 11/13).'],
 ['Apraclonidine','Slide 22 attributes neuroprotection to brimonidine; apraclonidine is the postoperative drug (slide 23).'],
 ['Timolol','Slide 18 gives timolol a pressure-lowering action by decreased production; no neuroprotective effect is listed.'],
 ['Dorzolamide','Slide 26 gives the carbonic anhydrase inhibitors a decrease in aqueous humor secretion; no neuroprotective effect is listed.']],
 'Slide 22: brimonidine is neuroprotective; the transcript says the optic nerve stays healthier longer in animal studies and the same is assumed in humans (T@49682).',
 'slide 22; T@49682 11/13'),

mk('EI-020','patho','new','a2','ey-a2-uveoscleral-route',['outflow','two-facts'],'both',
 'Which outflow route is increased by brimonidine?', 0, [
 ['Flow between the sclera and the ciliary body','Slide 22 and the lecture: the uveoscleral route, the liquid squeezing between the sclera and the ciliary body (T@49014 11/13); it is a minor route compared with the trabecular meshwork.'],
 ['Flow through the trabecular meshwork into Schlemm\'s canal','This is the main outflow route; the transcript says brimonidine does not affect it and acts on the uveoscleral route (T@49014 11/13).'],
 ['Flow from the posterior chamber through the pupil to the anterior chamber','This is movement of aqueous humor inside the eye before outflow, not an outflow route.'],
 ['Flow from Schlemm\'s canal into the episcleral veins','This is the continuation of the trabecular route; brimonidine acts on the uveoscleral route (T@49014 11/13).']],
 'Slide 22: some increase in uveoscleral outflow (brimonidine), the flow between the sclera and the ciliary body. Most outflow passes through the trabecular meshwork and Schlemm\'s canal.',
 'slide 22; T@49014 11/13'),

mk('EI-021','adverse','new','a2','ey-a2-systemic-se',['list'],'slide',
 'Which are systemic side effects listed for brimonidine? Select all that apply.', 0, [
 ['Oral dryness','Slide 24 brimonidine systemic: oral dryness, dizziness, fatigue, somnolence, reduction in blood pressure and pulse.',true],
 ['Somnolence','Slide 24 brimonidine systemic list includes fatigue and somnolence.',true],
 ['Reduced blood pressure and pulse','Slide 24 brimonidine systemic list includes reduction in blood pressure and pulse; the transcript says its systemic effects are very similar to those of apraclonidine (T@53260 11/13).',true],
 ['Bronchospasm in asthmatics','Bronchospasm is a beta receptor antagonist effect (slide 20); it is not on the brimonidine list (slide 24).']],
 'Slide 24: brimonidine ocular effects are foreign body sensation and ocular pruritus; systemic effects are oral dryness, dizziness, fatigue, somnolence and reductions in blood pressure and pulse.',
 'slide 24; T@53260 11/13', true),

mk('EI-022','tell','new','a2','ey-a2-two-actions-drug',['tell','two-facts'],'both',
 'Which drug decreases aqueous humor production and also increases uveoscleral outflow?', 3, [
 ['Brimonidine','Slide 22: alpha 2 agonists decrease production, with some increase in uveoscleral outflow (brimonidine).'],
 ['Apraclonidine','Slide 22 attributes the uveoscleral outflow increase to brimonidine; apraclonidine is the drug for pressure rises after surgery (slide 23).'],
 ['Timolol','Slide 18: beta receptor antagonists reduce production and have not much effect on outflow.'],
 ['Dorzolamide','Slide 26: carbonic anhydrase inhibitors decrease aqueous humor secretion; no outflow effect is listed.']],
 'Of the inflow drugs, brimonidine is the one with an added outflow effect, the uveoscleral route (slide 22). Beta receptor antagonists and carbonic anhydrase inhibitors act on production alone.',
 'slide 22; T@49014 11/13'),

mk('EI-023','adverse','new','a2','ey-a2-allergy-case',['case','reverse'],'both',
 'A patient is given a drop to blunt a pressure rise after cataract surgery. Two weeks later the eye is red and itchy from an allergic reaction. Which drug is the likely cause?', 1, [
 ['Apraclonidine','Slide 24 lists an allergic reaction for apraclonidine; the transcript says it can cause an allergic response and is used after eye surgery (T@51227 11/13).'],
 ['Brimonidine','The transcript says brimonidine does not have apraclonidine\'s allergic response profile (T@51660 11/13); the postoperative drug is apraclonidine (slide 23).'],
 ['Levobunolol','The lecture names levobunolol as possibly more effective after cataract surgery (T@45822 11/13), but an allergic reaction is not among its listed effects (slide 20).'],
 ['Timolol','Slide 20 lists sting and burning, vision changes, bradycardia, bronchospasm and other effects for timolol; an allergic reaction is not listed.']],
 'Apraclonidine prevents pressure rises after eye surgery and can cause an allergic reaction (slides 23, 24; T@51227), which is why brimonidine is the long-term alpha 2 agonist.',
 'slides 23, 24; T@51227 11/13'),

mk('EI-024','tell','new','a2','ey-a2-asthma-alternative',['case','two-facts'],'both',
 'A patient with glaucoma and asthma cannot use a beta receptor antagonist. Why is an alpha 2 agonist a reasonable way to lower inflow?', 2, [
 ['It decreases aqueous humor production through alpha 2 receptors, and bronchospasm is not a listed effect','Slide 22: alpha 2 agonists decrease aqueous humor production; slide 24 lists no bronchospasm, which belongs to the beta receptor antagonists (slide 20).'],
 ['It blocks beta 2 receptors selectively, so the airways are spared','Alpha 2 agonists act on alpha 2 receptors (slide 22), not on beta receptors.'],
 ['It increases trabecular meshwork outflow instead of changing production','Slide 22 gives alpha 2 agonists a decrease in aqueous humor production as the main effect, with only some added uveoscleral outflow for brimonidine.'],
 ['It inhibits carbonic anhydrase, so the airways are spared','Alpha 2 agonists act on alpha 2 receptors (slide 22); carbonic anhydrase is the target of another class (slide 26).']],
 'Both classes decrease inflow but at different targets: beta receptors (bronchospasm risk, slide 20) and alpha 2 receptors (dry mouth, fatigue, reduced pulse, slide 24).',
 'slides 20, 22, 24; T@48704 11/13'),

// ---------- carbonic anhydrase inhibitors ----------
mk('EI-025','mech','new','cai','ey-cai-mech',['mechanism','inflow'],'both',
 'How do carbonic anhydrase inhibitors decrease aqueous humor production?', 3, [
 ['Less carbonic acid is formed in the ciliary body cells, so less bicarbonate is extruded and less water follows','Slide 26: inhibition prevents the conversion of CO2 and water to carbonic acid and reduces availability of sodium and bicarbonate for secretion; water follows the solutes (T@54759, T@55258 11/13; T@5923 11/17).'],
 ['Carbonic acid is formed but cannot dissociate, so bicarbonate is not extruded','The drug blocks the enzyme that forms carbonic acid (slide 26); the acid then dissociates on its own (T@5420 11/17).'],
 ['Carbon dioxide and water cannot enter the ciliary body cells, so no carbonic acid is made','The drug inhibits the enzyme that converts carbon dioxide and water to carbonic acid (slide 26); it does not block their entry.'],
 ['Sodium is blocked from leaving the ciliary body cells, so water does not follow','The drug acts at the enzyme step; the loss of sodium and bicarbonate for secretion follows from less carbonic acid (slide 26).']],
 'In the ciliary body carbonic anhydrase makes carbonic acid; sodium and bicarbonate leave the cells and water follows, which is aqueous humor production. Inhibiting the enzyme decreases that production (slide 26).',
 'slide 26; T@54759 11/13; T@5923 11/17'),

mk('EI-026','mech','new','cai','ey-cai-step-blocked',['mechanism'],'both',
 'In ciliary body cells, which step is blocked directly by acetazolamide?', 0, [
 ['Conversion of carbon dioxide and water to carbonic acid','Slide 26: inhibition of carbonic anhydrase prevents the conversion of CO2 and water to carbonic acid (T@54759 11/13).'],
 ['Dissociation of carbonic acid to bicarbonate','The transcript says carbonic acid dissociates on its own (T@5420 11/17); the enzyme acts one step earlier.'],
 ['Extrusion of bicarbonate into the posterior chamber','Extrusion follows from the availability of bicarbonate; the enzyme step comes before it (slide 26).'],
 ['Movement of water across the epithelium after solutes are extruded','Water follows the solutes passively (T@55258 11/13); the drug acts at the enzyme step.']],
 'The enzyme step is CO2 + H2O to carbonic acid; dissociation, solute extrusion and the water that follows all come after it (slide 26; T@54759, T@55258).',
 'slide 26; T@54759 11/13'),

mk('EI-027','mech','new','cai','ey-cai-solutes',['mechanism'],'slide',
 'Inhibiting carbonic anhydrase reduces the availability of which two solutes for secretion into the posterior chamber?', 2, [
 ['Sodium and bicarbonate','Slide 26: "Reduces availability of sodium and bicarbonate for secretion". The lecture said carbonic acid dissociates to sodium and bicarbonate (T@54995 11/13) and corrected it on 11/17 to hydrogen ion and bicarbonate, with sodium leaving by another route (T@19450 11/17); the solutes secreted are sodium and bicarbonate in both.'],
 ['Hydrogen ion and chloride','Slide 26 names sodium and bicarbonate as the solutes whose availability falls.'],
 ['Potassium and bicarbonate','Slide 26 names sodium and bicarbonate; potassium is not mentioned.'],
 ['Sodium and chloride','Slide 26 names sodium and bicarbonate; chloride is not mentioned.']],
 'Slide 26: carbonic anhydrase inhibitors reduce the sodium and bicarbonate available for secretion, so water does not follow and aqueous humor secretion decreases.',
 'slide 26; T@54995 11/13'),

mk('EI-028','mech','new','acid','ey-cai-low-bicarb',['case','mechanism'],'both',
 'A patient taking oral acetazolamide has a low serum bicarbonate and a falling blood pH. Which process explains this?', 3, [
 ['Carbonic acid is not formed in proximal tubule cells, so bicarbonate is not sent into the blood','Slide 27 and the lecture: without carbonic acid, bicarbonate is not formed and not reabsorbed into the blood, so blood pH falls (T@17156 11/17).'],
 ['Carbonic acid is not formed in the ciliary body, so bicarbonate is lost into the aqueous humor','In the ciliary body the drug reduces bicarbonate secretion (slide 26); the blood pH change comes from the kidney (T@6865 11/17).'],
 ['Acetazolamide blocks the sodium and bicarbonate cotransporter, so bicarbonate stays in the cell','The drug inhibits carbonic anhydrase; the lecture explains the fall in bicarbonate by the lack of carbonic acid (T@17156 11/17).'],
 ['More hydrogen ion is exchanged for sodium, so more acid enters the blood','With the enzyme inhibited, less hydrogen ion is available for the exchange for sodium (T@16149 11/17).']],
 'Slide 27: in proximal tubule cells carbonic anhydrase II makes carbonic acid, which gives hydrogen ion and bicarbonate. Inhibiting it means bicarbonate is not sent to the blood, so blood pH falls: metabolic acidosis (T@17156, T@17682).',
 'slide 27; T@17156 11/17'),

mk('EI-029','mech','new','acid','ey-cai-acidosis-sequence',['mechanism','two-facts'],'both',
 'Which sequence in a proximal tubule cell explains metabolic acidosis during carbonic anhydrase inhibitor therapy?', 1, [
 ['Less carbonic acid forms, less bicarbonate goes to the blood, blood pH falls','Slide 27; the lecture: no carbonic acid, so no bicarbonate going out to the blood to buffer it, and blood pH falls (T@17156, T@17682 11/17).'],
 ['Less carbonic acid forms, more bicarbonate goes to the blood, blood pH rises','Inhibition lowers bicarbonate entering the blood; blood pH falls, which is acidosis (T@17682 11/17).'],
 ['More carbonic acid forms, more hydrogen ion goes to the blood, blood pH falls','The drug stops the formation of carbonic acid (slide 27).'],
 ['Carbonic acid forms normally, but bicarbonate cannot cross into the blood, blood pH falls','The drug acts earlier, on the enzyme that forms carbonic acid (slide 27; T@17156 11/17).']],
 'The side effect arises in the kidney: enzyme inhibited, less carbonic acid, less bicarbonate sent to the blood, so the blood loses its buffer and the pH falls (T@17156–T@17682).',
 'slide 27; T@17156 11/17'),

mk('EI-030','mech','new','acid','ey-cai-diuresis',['mechanism'],'both',
 'Why does a carbonic anhydrase inhibitor increase urine output?', 0, [
 ['Less hydrogen ion is available to exchange for sodium, so sodium and water stay in the lumen','11/17: without carbonic acid there is no hydrogen ion for the exchange for sodium, sodium stays in the lumen, water stays with it and urine increases (T@16149).'],
 ['More hydrogen ion is exchanged for sodium, so more sodium is lost to the urine','The drug reduces the hydrogen ion available, so less sodium enters the cell in exchange (T@16149 11/17).'],
 ['Less bicarbonate in the cell stops the basolateral sodium exit, so sodium stays inside and water leaves','The lecture explains the diuresis by sodium staying in the lumen through the missing hydrogen ion exchange (T@16149 11/17).'],
 ['Bicarbonate is reabsorbed faster into the blood, so water is drawn into the urine','Bicarbonate is not reabsorbed well on the drug, which causes acidosis (T@17156 11/17).']],
 'Diuretic mechanism in the proximal tubule: carbonic anhydrase II inhibited, no hydrogen ion for the exchange for sodium, sodium and water stay in the lumen, more urine (T@16149).',
 'slide 27; T@16149 11/17'),

mk('EI-031','dose','new','acid','ey-cai-monitor',['case','adverse'],'both',
 'A patient with refractory glaucoma has oral methazolamide added to ophthalmic therapy. Which finding should the pharmacist monitor because of the drug\'s action in the kidney?', 2, [
 ['A falling blood pH from metabolic acidosis','11/17: patients on these drugs need their blood pH watched because bicarbonate is not reabsorbed (T@17682, T@17825 11/17).'],
 ['A rising blood pH from metabolic alkalosis','The effect is acidosis (slide 27; T@17682 11/17).'],
 ['A fall in heart rate from beta receptor blockade','Bradycardia is a beta receptor antagonist effect (slide 20); methazolamide acts on carbonic anhydrase (slide 28).'],
 ['A fall in urine output with fluid retention','Increased urination is listed for the oral drugs (slide 29), since sodium and water remain in the lumen (T@16149 11/17).']],
 'Oral carbonic anhydrase inhibitors can cause metabolic acidosis; the transcript says such patients must be watched for a falling blood pH (T@17825).',
 'slides 27, 29; T@17825 11/17'),

mk('EI-032','counsel','new','cai','ey-cai-when-oral',['case'],'transcript',
 'When is an oral carbonic anhydrase inhibitor added for a patient with glaucoma?', 1, [
 ['When pressure is not controlled by ophthalmic therapy and combination products','11/13: ophthalmic products first; if the patient is refractory to other therapies and combinations, an oral carbonic anhydrase inhibitor can be added later (T@59102 11/13).'],
 ['At diagnosis, because oral dosing reaches the ciliary body better than drops','The transcript says to treat topically when possible and not to use an oral drug if topical therapy works (T@59102 11/13).'],
 ['After cataract surgery, to prevent a rise in intraocular pressure','The lecture names apraclonidine for pressure rises after eye surgery (slide 23).'],
 ['When a patient develops an allergic reaction to an alpha 2 agonist','The lecture\'s trigger for an oral carbonic anhydrase inhibitor is pressure not controlled on other therapy (T@59102 11/13).']],
 'The lecture: carbonic anhydrase inhibitors are used orally only when a patient is refractory to other therapies; ophthalmic drugs and combinations come first (T@59102).',
 'slide 28; T@59102 11/13'),

mk('EI-033','adverse','new','cai','ey-cai-oral-reverse',['case','reverse','two-facts'],'both',
 'A glaucoma patient on a tablet reports dry mouth, excessive thirst, increased urination and altered taste and smell. Which drug is the likely cause?', 3, [
 ['Methazolamide','Slide 29 oral effects: altered taste and smell, dry mouth, excessive thirst, increased urination, systemic acidosis and depression; methazolamide is an oral carbonic anhydrase inhibitor (slide 28).'],
 ['Brimonidine','Slide 24 lists oral dryness for brimonidine, but it is an eye drop and is not listed with thirst or increased urination.'],
 ['Dorzolamide','Dorzolamide is an ophthalmic drug (slide 28); the oral effects of slide 29 apply to the tablets.'],
 ['Timolol','Slide 20 lists headache, insomnia, taste perversion and depression for timolol among other effects; it is a topical drug, and thirst and increased urination are not listed.']],
 'Oral carbonic anhydrase inhibitors are diuretics; the lecture suggests that dry mouth and thirst may mean the patient is over-diuresed (T@22348 11/17). Acidosis is the dangerous effect.',
 'slides 28, 29; T@22348 11/17'),

mk('EI-034','class','new','cai','ey-cai-ophthalmic-pair',['tell','route'],'slide',
 'Which pair of carbonic anhydrase inhibitors are eye drops?', 2, [
 ['Dorzolamide and brinzolamide','Slide 28: dorzolamide and brinzolamide are ophthalmic.'],
 ['Dorzolamide and methazolamide','Slide 28: methazolamide is oral.'],
 ['Acetazolamide and brinzolamide','Slide 28: acetazolamide is oral.'],
 ['Acetazolamide and methazolamide','Slide 28: acetazolamide and methazolamide are oral.']],
 'Slide 28: oral acetazolamide and methazolamide; ophthalmic dorzolamide and brinzolamide (T@58590 11/13).',
 'slide 28; T@58590 11/13'),

mk('EI-035','adverse','new','cai','ey-cai-oral-vs-drops',['tell','adverse'],'both',
 'Which side effect is more likely with an oral carbonic anhydrase inhibitor than with an ophthalmic one?', 0, [
 ['Increased urination','Slide 29 lists increased urination under the oral drugs; the lecture explains the diuretic action (T@22348 11/17).'],
 ['Burning or stinging in the eye','Slide 29 lists burning or stinging with the ocular effects of the ophthalmic drops.'],
 ['Foreign body sensation','Slide 29 lists foreign body sensation with the ocular effects of the drops.'],
 ['Blurred vision','Slide 29 lists blurred vision with the ocular effects of the drops.']],
 'Slide 29: ocular effects are burning or stinging, hypersensitivity, headache, taste changes, dry eye, foreign body sensation and blurred vision; oral effects are altered taste and smell, dry mouth, thirst, increased urination, systemic acidosis and depression.',
 'slide 29; T@22348 11/17'),

mk('EI-036','adverse','new','cai','ey-cai-oral-se-select',['list'],'slide',
 'Which are expected with oral acetazolamide? Select all that apply.', 0, [
 ['Increased urination','Slide 29 oral effects include increased urination.',true],
 ['Systemic acidosis','Slide 29 oral effects include systemic acidosis (T@17682 11/17).',true],
 ['Altered taste and smell','Slide 29 oral effects include altered taste and smell.',true],
 ['Bronchospasm in asthmatics','Bronchospasm is listed for the beta receptor antagonists (slide 20), not the carbonic anhydrase inhibitors.']],
 'Slide 29 lists altered taste and smell, dry mouth, excessive thirst, increased urination, systemic acidosis and depression as the oral effects of carbonic anhydrase inhibitors.',
 'slide 29; T@22348 11/17', true),

mk('EI-037','adverse','new','acid','ey-cai-monitor-patient',['case','two-facts'],'both',
 'Which glaucoma patient needs the closest monitoring of blood pH?', 3, [
 ['A patient taking methazolamide tablets for refractory glaucoma','11/17: metabolic acidosis is a significant side effect of these drugs given orally (T@16780, T@17682). Slide 29 lists systemic acidosis under the oral drugs; the lecture adds that it can occur to a much lesser extent with the topical ones (T@6785 11/17).'],
 ['A patient using dorzolamide drops with timolol','Topical use carries a much smaller risk (T@6785 11/17); the oral drugs are the main concern (slide 29).'],
 ['A patient using timolol gel once a day','Timolol is a beta receptor antagonist; acidosis is the effect of carbonic anhydrase inhibition (slide 27).'],
 ['A patient using brimonidine drops after surgery','Slide 24 lists hypotension and dryness for the alpha 2 agonists; acidosis is the effect of carbonic anhydrase inhibition (slide 27).']],
 'Acidosis follows from carbonic anhydrase inhibition in the kidney. The risk is mainly with the oral drugs (slide 29; T@16780) and occurs to a much lesser extent with topical ones (T@6785).',
 'slides 27, 29; T@16780 11/17'),

mk('EI-038','class','new','cai','ey-cai-enzyme-class',['tell'],'both',
 'Which class of drugs that decrease inflow acts on an enzyme rather than on a receptor?', 1, [
 ['Carbonic anhydrase inhibitors','Slide 26: inhibition of the enzyme carbonic anhydrase (T@53959 11/13).'],
 ['Beta receptor antagonists','Slide 18: they block the beta-adrenergic receptor on the ciliary body.'],
 ['Alpha 2 agonists','Slide 22: they bind alpha 2 receptors on the ciliary body.'],
 ['M3 agonists','Slide 16: M3 receptors are in the meshwork and ciliary muscle, and M3 agonists increase outflow rather than decreasing inflow (T@28776 11/17).']],
 'Three classes decrease inflow: beta receptor antagonists and alpha 2 agonists act on receptors, carbonic anhydrase inhibitors on an enzyme.',
 'slides 16, 26; T@39278 11/13'),

mk('EI-039','class','new','cai','ey-class-inflow-select',['classification','list'],'both',
 'Which glaucoma drug classes decrease inflow? Select all that apply.', 0, [
 ['Beta receptor antagonists','Slide 18: reduce aqueous humor production.',true],
 ['Alpha 2 agonists','Slide 22: decrease the rate of aqueous humor production.',true],
 ['Carbonic anhydrase inhibitors','Slide 26: decrease ciliary body aqueous humor secretion.',true],
 ['M3 agonists','11/17: they increase outflow by contracting the ciliary and meshwork muscle, with no effect on inflow (T@23157, T@26432 11/17).']],
 'Three classes decrease inflow (production of aqueous humor): beta receptor antagonists, alpha 2 agonists and carbonic anhydrase inhibitors (T@39278 11/13). The parasympathomimetics and prostaglandin agonists increase outflow.',
 'slides 18, 22, 26; T@39278 11/13', true),

mk('EI-040','class','new','cai','ey-class-inflow-pair',['classification','inflow'],'both',
 'Which pair of drugs both lower intraocular pressure by decreasing inflow?', 2, [
 ['Timolol and dorzolamide','Slides 18 and 26: a beta receptor antagonist and a carbonic anhydrase inhibitor both decrease aqueous humor production.'],
 ['Brimonidine and latanoprost','Brimonidine decreases inflow (slide 22), but latanoprost is a prostaglandin agonist that increases uveoscleral outflow without affecting inflow (T@30920 11/17).'],
 ['Dorzolamide and pilocarpine','Dorzolamide decreases inflow (slide 26); pilocarpine is an M3 agonist that increases outflow (T@23579 11/17).'],
 ['Betaxolol and carbachol','Betaxolol decreases inflow (slide 18); carbachol is an M3 agonist that increases outflow (T@23579 11/17).']],
 'Inflow drugs: beta receptor antagonists, alpha 2 agonists, carbonic anhydrase inhibitors. Outflow drugs: parasympathomimetics (M3 agonists, acetylcholinesterase inhibitor), prostaglandin agonists and the Rho kinase inhibitor.',
 'slides 18, 22, 26; T@39278 11/13; T@23157 11/17'),

mk('EI-041','class','new','cai','ey-class-no-outflow-drug',['classification','two-facts'],'both',
 'Which drug lowers intraocular pressure by decreasing aqueous humor production and has no effect on outflow?', 1, [
 ['Dorzolamide','Slide 26: a carbonic anhydrase inhibitor decreases ciliary body secretion; no outflow effect is listed.'],
 ['Brimonidine','Slide 22: some increase in uveoscleral outflow (brimonidine) in addition to decreased production.'],
 ['Latanoprost','A prostaglandin agonist; the transcript says it does not affect inflow and increases uveoscleral outflow (T@30920 11/17).'],
 ['Pilocarpine','An M3 agonist that increases outflow by contracting the meshwork (T@23157 11/17).']],
 'Beta receptor antagonists and carbonic anhydrase inhibitors act on production alone; brimonidine adds uveoscleral outflow; the parasympathomimetics and prostaglandin agonists act on outflow.',
 'slides 22, 26; T@30920 11/17'),

mk('EI-042','tell','new','cai','ey-class-prostaglandin-reverse',['classification','reverse'],'transcript',
 'A glaucoma drug has no effect on inflow and increases uveoscleral outflow. Which class is it?', 3, [
 ['Prostaglandin agonists','11/17: they do not affect inflow and help with uveoscleral outflow (T@30920 11/17).'],
 ['Alpha 2 agonists','Alpha 2 agonists decrease inflow as their main effect (slide 22); the uveoscleral effect is a bonus of brimonidine.'],
 ['Beta receptor antagonists','Slide 18: they reduce production and have not much effect on outflow.'],
 ['Carbonic anhydrase inhibitors','Slide 26: they decrease aqueous humor secretion; no outflow effect is listed.']],
 'The prostaglandin agonists relax the ciliary muscle and increase uveoscleral outflow without affecting inflow (T@30920). Brimonidine has both a main inflow effect and a minor uveoscleral effect.',
 'slide 22; T@30920 11/17'),

mk('EI-043','mech','new','bb','ey-bb-vs-cai-targets',['tell','mechanism'],'both',
 'Timolol and dorzolamide both decrease inflow. Which target does each act on?', 2, [
 ['Timolol blocks beta receptors; dorzolamide inhibits carbonic anhydrase','Slides 18 and 26: timolol blocks the beta-adrenergic receptor on the ciliary body; dorzolamide is a carbonic anhydrase inhibitor (slide 28).'],
 ['Timolol agonizes alpha 2 receptors; dorzolamide inhibits carbonic anhydrase','Alpha 2 receptors are the target of the alpha 2 agonists (slide 22); timolol is a beta receptor antagonist (slide 19).'],
 ['Timolol blocks beta receptors; dorzolamide agonizes alpha 2 receptors','Dorzolamide inhibits carbonic anhydrase (slides 26, 28); alpha 2 receptors are the target of brimonidine (slide 22).'],
 ['Timolol inhibits carbonic anhydrase; dorzolamide blocks beta receptors','The targets are the other way around (slides 18, 26).']],
 'Beta receptor antagonists such as timolol block beta receptors on the ciliary body; carbonic anhydrase inhibitors such as dorzolamide inhibit the enzyme. Both decrease inflow.',
 'slides 18, 26, 28; T@39278 11/13'),

mk('EI-044','mech','new','bb','ey-bb-agonist-evidence',['mechanism'],'transcript',
 'What did studies of aqueous humor production find about beta receptors that pointed to a drug class for glaucoma?', 3, [
 ['Agonizing the receptors increased aqueous humor and antagonizing them decreased production','The lecture: when the receptors were agonized there was more aqueous humor; when they were antagonized, production decreased (T@43883 11/13).'],
 ['Agonizing the receptors decreased aqueous humor and antagonizing them increased production','The transcript states the reverse: agonizing gave more aqueous humor (T@43883 11/13).'],
 ['Antagonizing the receptors increased uveoscleral outflow without changing production','Slide 18 says antagonists reduce production and have not much effect on outflow.'],
 ['Agonizing the receptors decreased trabecular outflow while production was unchanged','The lecture found an effect on production, not on trabecular outflow (T@43883 11/13).']],
 'Beta receptor antagonists work by decreasing production of aqueous humor; the exact mechanism is not fully understood (slide 18; T@43883).',
 'slide 18; T@43883 11/13'),

mk('EI-045','mech','new','acid','ey-acid-bicarb-exit',['mechanism','two-facts'],'both',
 'In a proximal tubule cell, across which membrane does bicarbonate leave toward the blood, and with which ion?', 0, [
 ['The basolateral membrane, with sodium','Slide 27 and 11/17: the sodium and bicarbonate cotransporter on the basolateral (blood) side moves sodium and bicarbonate out of the cell (T@9831 11/17).'],
 ['The apical membrane, with sodium','The apical membrane faces the lumen; bicarbonate leaves to the blood across the basolateral membrane (T@7672, T@9831 11/17).'],
 ['The basolateral membrane, in exchange for hydrogen ion','Hydrogen ion leaves across the apical membrane in exchange for sodium (T@9483 11/17); bicarbonate leaves with sodium on the basolateral side.'],
 ['The apical membrane, in exchange for hydrogen ion','Hydrogen ion is exchanged for sodium at the apical membrane (T@9483 11/17); bicarbonate goes to the blood on the basolateral side.']],
 'Slide 27: the basolateral membrane is the blood side. Bicarbonate leaves with sodium on that side; hydrogen ion leaves across the apical membrane in exchange for sodium. The names of the transporters are not required (T@9848 11/17).',
 'slide 27; T@9831 11/17'),

mk('EI-046','mech','new','acid','ey-acid-hplus-exchange',['mechanism'],'both',
 'Normally, hydrogen ion leaves a proximal tubule cell across the apical membrane in exchange for which ion entering the cell?', 1, [
 ['Sodium','11/17: hydrogen ion goes out in exchange for sodium coming in (T@9483 11/17); slide 27.'],
 ['Bicarbonate','Bicarbonate leaves the cell with sodium on the basolateral side (T@9831 11/17).'],
 ['Chloride','Slide 27 and the lecture describe an exchange of hydrogen ion for sodium (T@9483 11/17).'],
 ['Potassium','Potassium appears in the basolateral sodium-potassium pump on slide 27, not in the apical exchange for hydrogen ion.']],
 'Hydrogen ion leaves the cell for sodium entering; a carbonic anhydrase inhibitor removes the hydrogen ion supply, so sodium and water stay in the lumen (T@9483, T@16149).',
 'slide 27; T@9483 11/17'),

mk('EI-047','mech','new','acid','ey-acid-co2-reabsorb',['mechanism','two-facts'],'both',
 'In the proximal tubule, how does bicarbonate filtered into the lumen re-enter the cell?', 2, [
 ['As carbon dioxide and water, after carbonic anhydrase on the apical membrane splits carbonic acid','Slide 27 and 11/17: hydrogen ion and bicarbonate form carbonic acid in the lumen, the enzyme on the apical membrane converts it to CO2 and water, and these are passively reabsorbed into the cells (T@8659 11/17).'],
 ['As bicarbonate carried in by the basolateral sodium and bicarbonate cotransporter','That cotransporter moves bicarbonate out toward the blood (T@9831 11/17).'],
 ['As bicarbonate exchanged for hydrogen ion on the apical membrane','Hydrogen ion exchanges for sodium on the apical membrane (T@9483 11/17).'],
 ['As carbonic acid, after carbonic anhydrase in the cytosol makes it','The cytosolic enzyme forms carbonic acid inside the cell; the lumen is handled by the apical membrane enzyme (T@8659, T@8997 11/17).']],
 'Slide 27: lumen hydrogen ion and bicarbonate give carbonic acid; the apical enzyme converts it to CO2 and water, passively reabsorbed; the cytosolic enzyme (II) remakes carbonic acid. Acetazolamide inhibits both isoforms (T@17994).',
 'slide 27; T@8659 11/17'),

mk('EI-048','mech','new','acid','ey-cai-common-step',['mechanism','two-facts'],'both',
 'Carbonic anhydrase inhibition lowers aqueous humor production in the eye and lowers blood pH through the kidney. Which step is common to both effects?', 3, [
 ['Less carbonic acid is formed, so less bicarbonate is available to leave the cells','Slides 26 and 27: in the ciliary body less bicarbonate is secreted so water does not follow (T@19450 11/17); in the kidney less bicarbonate goes to the blood (T@17156 11/17).'],
 ['Less sodium enters the cell, so less water is secreted in both organs','The loss of hydrogen ion exchange for sodium explains diuresis in the kidney (T@16149 11/17); the common step is the lack of carbonic acid and bicarbonate.'],
 ['More carbonic acid accumulates, so the cells swell in both organs','The enzyme is inhibited, so carbonic acid is not formed (slide 26).'],
 ['Less hydrogen ion is secreted into the lumen of the eye and the kidney','Hydrogen ion exchange is part of the kidney explanation (T@9483 11/17); the ciliary body explanation concerns bicarbonate and sodium secretion (slide 26).']],
 'The same enzyme step explains both: no carbonic acid means less bicarbonate, so less water follows in the ciliary body (T@19450) and less buffer reaches the blood in the kidney (T@17156).',
 'slides 26, 27; T@19450 11/17'),

mk('EI-049','mech','new','acid','ey-bicarb-both-organs',['mechanism','two-facts'],'both',
 'Which solute is extruded from ciliary body cells along with sodium so that water follows, and is also the buffer returned to the blood by the proximal tubule?', 0, [
 ['Bicarbonate','Slide 26: sodium and bicarbonate are secreted into the posterior chamber; 11/17: bicarbonate reabsorbed into the blood is a major buffer that maintains blood pH (T@14654 11/17).'],
 ['Hydrogen ion','Hydrogen ion is exchanged for sodium in the kidney (T@9483 11/17); the buffer returned to the blood is bicarbonate.'],
 ['Carbonic acid','Carbonic acid is formed inside the cells and dissociates (slide 26); it is not the solute secreted or the buffer.'],
 ['Chloride','Chloride is not named for these processes on slides 26 and 27.']],
 'Bicarbonate links the two organs: its secretion with sodium drives aqueous humor production (slide 26) and its reabsorption into the blood buffers blood pH (T@14654).',
 'slides 26, 27; T@14654 11/17'),

mk('EI-050','adverse','new','cai','ey-cai-thirst-why',['case','mechanism'],'both',
 'A patient taking oral acetazolamide has dry mouth and excessive thirst. Which mechanism is the likely explanation?', 1, [
 ['Diuresis, because sodium and water stay in the proximal tubule lumen','11/17: dry mouth and thirst may mean the patient is being over-diuresed (T@22348); the diuretic mechanism is sodium and water staying in the lumen (T@16149).'],
 ['Decreased aqueous humor production in the ciliary body','That is the therapeutic effect on the eye (slide 26) and does not explain dry mouth and thirst.'],
 ['Alpha 2 receptor stimulation, as with brimonidine','Slide 24 lists oral dryness for the alpha 2 agonists; acetazolamide is a carbonic anhydrase inhibitor (slide 28).'],
 ['Metabolic acidosis directly drying the mouth','Metabolic acidosis is a separate effect (slide 29); the lecture ties dry mouth and thirst to over-diuresis (T@22348 11/17).']],
 'Increased urination, dry mouth and excessive thirst follow from the diuretic action of the oral carbonic anhydrase inhibitors (slide 29; T@22348).',
 'slides 27, 29; T@22348 11/17'),

mk('EI-051','mech','new','cai','ey-cai-best-understood',['mechanism'],'transcript',
 'For which inflow class is the way the target takes part in making aqueous humor fairly well described?', 2, [
 ['Carbonic anhydrase inhibitors','11/13: "We\'ve got a pretty good idea of how the enzyme carbonic anhydrase is involved in making aqueous humor" (T@36863 11/13; T@54759 11/13).'],
 ['Beta receptor antagonists','The transcript says the mechanism by which beta receptor antagonists reduce production is not fully understood (T@43883 11/13).'],
 ['Alpha 2 agonists','The transcript says they work and the mechanism of decreased production is not known (T@48704 11/13).'],
 ['Parasympathomimetics','They increase outflow by contracting the meshwork; they are not an inflow class (T@23157 11/17).']],
 'The receptor mechanisms are not fully understood but the drugs work; the enzyme step of carbonic anhydrase, with sodium and bicarbonate secretion and water following, is described in detail (slide 26).',
 'slides 18, 22, 26; T@54759 11/13'),

mk('EI-052','tell','new','a2','ey-combo-brinzolamide-brimonidine',['two-facts','combination'],'both',
 'A fixed combination of brinzolamide and brimonidine is prescribed. Which effect on outflow does it add beyond decreasing inflow?', 3, [
 ['Increased uveoscleral outflow, from brimonidine','Slide 45 lists brinzolamide and brimonidine as a combination; slide 22 gives brimonidine some increase in uveoscleral outflow.'],
 ['Increased trabecular outflow, from brinzolamide','Slide 26 gives brinzolamide a decrease in aqueous humor secretion; no outflow effect is listed.'],
 ['Neuroprotection and increased trabecular outflow, from brimonidine','Slide 22 gives brimonidine neuroprotection and uveoscleral outflow, not trabecular outflow.'],
 ['No change in outflow, since both drugs decrease inflow','Brimonidine has a minor uveoscleral outflow effect (slide 22), in addition to its main effect on inflow.']],
 'Slide 45 combination products include brinzolamide with brimonidine (both decrease inflow) and timolol with dorzolamide or with brimonidine; brimonidine adds uveoscleral outflow.',
 'slides 22, 45; T@49014 11/13'),

mk('EI-053','tell','new','bb','ey-combo-timolol-dorzolamide',['combination','inflow'],'both',
 'A patient is given a combination of timolol and dorzolamide. How do the two drugs lower intraocular pressure?', 0, [
 ['Both decrease aqueous humor production, at different targets','Slide 45 lists timolol and dorzolamide; slide 18: timolol blocks beta receptors to reduce production; slide 26: dorzolamide inhibits carbonic anhydrase to decrease secretion.'],
 ['One decreases production and the other increases trabecular outflow','Neither drug is an outflow drug: timolol has not much effect on outflow (slide 18), and dorzolamide decreases secretion (slide 26).'],
 ['Both increase uveoscleral outflow','Uveoscleral outflow is increased by brimonidine and prostaglandin agonists (slide 22; T@30920 11/17), not by these drugs.'],
 ['Both increase trabecular outflow by relaxing the meshwork','Relaxing the meshwork is the action of the outflow drugs; timolol and dorzolamide decrease inflow (slides 18, 26).']],
 'Slide 45 combinations of timolol with dorzolamide put two different inflow mechanisms in one product: beta receptor blockade and carbonic anhydrase inhibition.',
 'slides 18, 26, 45; T@39278 11/13'),

mk('EI-054','mech','new','bb','ey-bb-relatively-selective',['mechanism','case'],'both',
 'A patient with asthma takes betaxolol and still has mild wheezing. What explains this?', 1, [
 ['Betaxolol is relatively beta 1 selective, not fully selective, so some beta 2 blockade remains','Slide 19: "Relatively beta 1-selective agent"; bronchospasm comes from beta 2 antagonism (T@47078 11/13), and relative selectivity does not remove it.'],
 ['Betaxolol has intrinsic sympathomimetic activity that constricts the airway','Slide 19 gives intrinsic sympathomimetic activity to carteolol, and the lecture does not link it to airway constriction.'],
 ['Betaxolol is not absorbed, so a second drug in the regimen is the cause','The transcript says topical beta receptor antagonists are absorbed and can cause systemic effects (T@47078 11/13).'],
 ['Betaxolol possesses some alpha adrenergic effects that constrict the bronchi','Slide 19 gives some alpha adrenergic effects to levobunolol, not to betaxolol.']],
 'Selectivity is relative: betaxolol is relatively beta 1 selective (slide 19), which lowers but does not remove the risk of bronchospasm from absorbed drug (slide 20).',
 'slides 19, 20; T@47078 11/13'),

mk('EI-055','class','new','a2','ey-class-receptor-classes',['tell','classification'],'both',
 'Which two inflow drug classes act on receptors of the ciliary body epithelium?', 2, [
 ['Beta receptor antagonists and alpha 2 agonists','Slide 16 and slides 18 and 22: the epithelium carries beta and alpha 2 receptors, targets of these two classes (T@39278 11/13).'],
 ['Beta receptor antagonists and carbonic anhydrase inhibitors','Carbonic anhydrase inhibitors act on an enzyme, not a receptor (slide 26).'],
 ['Alpha 2 agonists and M3 agonists','M3 agonists increase outflow and act on M3 receptors in the meshwork and muscle (slide 16; T@23157 11/17).'],
 ['Carbonic anhydrase inhibitors and M3 agonists','Carbonic anhydrase inhibitors act on an enzyme, and M3 agonists increase outflow (slide 26; T@23157 11/17).']],
 'Beta receptor antagonists and alpha 2 agonists act on epithelial receptors; carbonic anhydrase inhibitors act on an enzyme; M3 agonists belong to the outflow classes.',
 'slides 16, 18, 22; T@39278 11/13'),

mk('EI-056','adverse','new','bb','ey-bb-brady-brimonidine-tell',['tell','adverse'],'slide',
 'Which systemic effect belongs to beta receptor antagonists but not to brimonidine?', 0, [
 ['Bronchospasm in asthmatics','Slide 20 lists bronchospasm in asthmatics; slide 24 does not list it for brimonidine.'],
 ['Hypotension','Slide 20 lists hypotension for beta receptor antagonists and slide 24 lists reduction in blood pressure for brimonidine.'],
 ['Reduction in pulse','Slide 20 lists bradycardia for beta receptor antagonists and slide 24 lists a reduction in pulse for brimonidine.'],
 ['Depression','Slide 20 lists depression for beta receptor antagonists; slide 24 lists dizziness, fatigue and somnolence for brimonidine, and depression is not on the brimonidine list.']],
 'Slide 20 respiratory effect: bronchospasm in asthmatics; cardiac: bradycardia and hypotension. Slide 24 brimonidine: reduction in blood pressure and pulse, fatigue, somnolence.',
 'slides 20, 24; T@47078 11/13')
);
})();
