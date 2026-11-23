/* q44_eye_poll.js: Dr. Smith's glaucoma Poll Everywhere questions (PollEvforGlaucoma.pptx, given to the class and uploaded by Louis
   2026-11-23: "Examples of possible types of questions you might see on Exam 3."). Six polls, each kept with its own words and options
   once: four multiple choice (slides 2-5 of the file) and two free-text fill-in-the-blank (slides 6-7). The file marks no key; each key is
   the fact on her slides and in the 11/13 and 11/17 lectures.
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 18-20 (beta receptor antagonists and their side effects), 22 (alpha 2
   agonists), 41 (Rho kinase inhibitor); DEENT_Lecture_11.13_transcript.txt (beta receptor antagonists T@44737, side effects T@47083 and
   T@47241, brimonidine T@49014, the inflow summary T@52775) and DEENT_Lecture_11.17_transcript.txt (netarsudil, T@35051 as EB-011 cites it).
   Notes: (1) The beta-blocker free-text poll names no one drug; slide 19 lists timolol, levobunolol, betaxolol and carteolol, so the
   item accepts each of them. (2) The free-text netarsudil poll takes the same answer as EB-011 (Rho kinase). */
(() => {
const D = 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)';
function mc(id, skill, sub, concept, stem, k, opts, teach, cite) {
  const rest = opts.slice(1).map(o => ({t:o[0], correct:false, why:o[1]}));
  const options = rest.slice(); options.splice(k, 0, {t:opts[0][0], correct:true, why:opts[0][1]});
  return {id, skill, prof:'Smith', tier:'new', topic:'ey-in', sub, concept, tags:['poll','recall'], source:'both', stem, options, teach, cite: D + ' ' + cite};
}
function bl(id, skill, topic, sub, concept, dupOf, stem, accept, why, cite) {
  const q = {id, type:'blank', skill, prof:'Smith', tier:'new', topic, sub, concept, tags:['blank','poll'], source:'both'};
  if (dupOf) q.dupOf = dupOf;
  return Object.assign(q, {stem, accept, why, cite: D + ' ' + cite});
}
QUESTIONS.push(

mc('EP-001','adverse','bb','ey-poll-bb-sideeffect',
 'What side effect is a concern for beta blockers used for treating glaucoma?', 1, [
 ['Bronchospasm','Slide 20 lists "Respiratory - bronchospasm in asthmatics" among the systemic effects. In class: the ones antagonizing beta 2 "could cause bronchospasms in your asthmatics", so be careful which beta receptor antagonist an asthmatic glaucoma patient gets (T@47241 11/13).'],
 ['Nasal stuffiness','Slide 20 does not list it. The systemic effects it lists are bradycardia, hypotension, bronchospasm in asthmatics, headache, insomnia, taste perversion, depression and impotence.'],
 ['Hypertension','Slide 20 lists hypotension, not hypertension, as the cardiac effect (with bradycardia).'],
 ['Tachycardia','Slide 20 lists bradycardia, not tachycardia, as the cardiac effect.']],
 'Topical beta receptor antagonists are absorbed into the blood. Slide 20 lists bradycardia and hypotension (cardiac) and bronchospasm in asthmatics (respiratory) as the systemic effects; in class she asked what to do for cardiac patients (a more selective drug, or press on the inner corner of the eye to limit absorption).',
 'slide 20; T@47241 11/13'),

mc('EP-002','class','bb','ey-poll-inflow-drug',
 'Which medication decreases inflow in glaucoma?', 0, [
 ['Timolol','Slide 18: beta receptor antagonists reduce aqueous production by the ciliary body (inflow) and have not much effect on outflow.'],
 ['Pilocarpine','An M3 agonist: it increases trabecular outflow (slide 32), so it does not lower inflow.'],
 ['Latanoprost','A prostaglandin agonist: it increases uveoscleral outflow (slide 37) and leaves production unchanged.'],
 ['Netarsudil','A Rho kinase inhibitor: it lowers trabecular outflow resistance (slide 41), an outflow effect.']],
 'Three classes decrease inflow, all at the ciliary body: beta receptor antagonists, alpha 2 agonists and carbonic anhydrase inhibitors. M3 agonists, echothiophate, netarsudil and the prostaglandin agonists increase outflow.',
 'slides 18, 22, 26; T@52775 11/13'),

mc('EP-003','mech','a2','ey-poll-brimonidine-class',
 'What is the mechanism of action of Brimonidine in treating glaucoma?', 3, [
 ['alpha 2 agonist','Slide 22: it binds alpha 2 receptors on the ciliary body and decreases the rate of aqueous humor production; brimonidine also gives some increase in uveoscleral outflow and is neuroprotective (T@49014 11/13).'],
 ['beta blocker','This is the class of timolol, levobunolol, betaxolol and carteolol (slides 18-19), not brimonidine.'],
 ['carbonic anhydrase inhibitor','This class is dorzolamide and brinzolamide (eye drops) and acetazolamide and methazolamide (oral) (slide 28), not brimonidine.'],
 ['prostaglandin agonist','This class is latanoprost and the other prostaglandin analogs (slide 37); brimonidine only adds some uveoscleral outflow.']],
 'Brimonidine is the alpha 2 agonist for long-term use; apraclonidine is the other, used after eye surgery. Both lower inflow by agonizing alpha 2 receptors; brimonidine adds some uveoscleral outflow and neuroprotection.',
 'slide 22; T@49014 11/13'),

mc('EP-004','class','bb','ey-poll-bb-drug',
 'Which medication is a beta blocker used for treating glaucoma?', 0, [
 ['Timolol','Slide 19 lists timolol first among the nonspecific beta-blocking agents; in class it also comes as a once-a-day gel (T@44737 11/13).'],
 ['Brimonidine','An alpha 2 agonist (slide 22).'],
 ['Pilocarpine','An M3 agonist (slide 32).'],
 ['Netarsudil','A Rho kinase inhibitor (slide 41).']],
 'The beta receptor antagonists for glaucoma on slide 19 are timolol, levobunolol, betaxolol (relatively beta 1 selective) and carteolol (nonspecific, with intrinsic sympathomimetic activity).',
 'slide 19; T@44737 11/13'),

bl('EP-005','mech','ey-out','rock','b-ey-poll-netarsudil','EB-011',
 'Netarsudil targets ______ when used to treat glaucoma?',
 ['Rho kinase', 'RhoA kinase', 'Rho-kinase', 'ROCK', 'Rho kinase enzyme', 'RhoA', 'Rho'],
 'Slide 41: netarsudil "inhibits RhoA kinase activity"; inhibiting RhoA phosphorylation relaxes the trabecular meshwork, lowers fibrosis-related protein deposits and changes the permeability of the cells lining Schlemm\'s canal, so trabecular outflow resistance falls.',
 'slide 41; T@35051 11/17'),

bl('EP-006','class','ey-in','bb','b-ey-poll-bb-drug','EP-004',
 '_________ is a beta receptor antagonist used to treat glaucoma?',
 ['timolol', 'levobunolol', 'betaxolol', 'carteolol'],
 'Slide 19 lists four beta receptor antagonists for glaucoma: timolol and levobunolol (nonspecific; levobunolol with some alpha-adrenergic effects), betaxolol (relatively beta 1 selective) and carteolol (nonspecific, with intrinsic sympathomimetic activity); any of the four fits the blank (T@44737 11/13).',
 'slide 19; T@44737 11/13')
);
})();
