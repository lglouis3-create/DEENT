/* q39_eye_gaps.js: Eye (Dr. Smith, Lectures 9-10, Exam 3), items for the points of her Exam 3 study hints that the 212 items of
   q23-q26 test too little. Written 2026-11-20; the gap analysis behind each item is in GAPS.md.
   Hints (emailed to the class, pasted by Louis 2026-11-20): objectives; the parts of the eye for glaucoma pathophysiology and tear
   production; no need to memorize slides 8 or 9; open angle pathology, histamine in allergic conjunctivitis symptoms, dry eye pathology;
   memorize the drugs in the drug table; every mechanism and the small details that differentiate drugs within a class; significant side
   effects; how metabolic acidosis occurs with carbonic anhydrase inhibitors.
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 19-20 (beta receptor antagonists), 28 (carbonic anhydrase inhibitor examples),
   32 (M3 agonists), 38 (prostaglandin agonists), 49 and 52 (histamine, symptoms), 53-54 (antihistamines), 57 (alpha 2 agonists), 62 and 64
   (dry eye), 73 (varenicline); the 11/13 and 11/17 transcripts (character offsets, found by script).
   Conflict and notes:
   (1) EG-004: slide 57 lists phenylephrine among the alpha 2 agonists and the course drug chart prints it in that class for allergic
       conjunctivitis; slide 8 (the autonomic chart, which she said need not be memorized) lists phenylephrine as an alpha 1 agonist.
       The item keys the slide 57 list and says so in the explanation.
   (2) EG-006: the lecture says the iris muscle may contribute but "the biggest place" for the parasympathomimetics is the meshwork
       (T@27651, T@27812); slide 32 names both structures, which is what the item keys.
   (3) EG-009: she describes inflammation "within the lacrimal system ... where those glands are that produce the tears, maybe along the
       ducts" (T@57994); the item keys that location and does not name a specific duct.
   (4) EG-011: slide 73 gives rare for night blindness, retinal vascular disorder, subcapsular cataract and transient blindness and
       infrequent for blurred vision and visual disturbance; in class blurred vision is mentioned in the same breath as the rare ones
       (T@68452) but she names only "regular old visual disturbances" as infrequent (T@68649), so the item does not use blurred vision as
       a wrong option.
   (5) EG-012: the lubricants on the drug chart (carboxymethylcellulose, hydroxypropyl cellulose, artificial tears) are not taught
       (T@55648: "I will not talk about those"); the item asks only for the place they take in treatment. */
(() => {
const D = 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)';
// opts: [text, why] with the keyed option first; k = 0..3 the position the key takes among the options.
// For select-all items (multi) opts are [text, why, correct] in the order shown.
function mk(id, skill, topic, sub, concept, tags, source, stem, k, opts, teach, cite, multi) {
  let options;
  if (multi) options = opts.map(o => ({t:o[0], correct:!!o[2], why:o[1]}));
  else {
    const rest = opts.slice(1).map(o => ({t:o[0], correct:false, why:o[1]}));
    options = rest.slice();
    options.splice(k, 0, {t:opts[0][0], correct:true, why:opts[0][1]});
  }
  const q = {id, skill, prof:'Smith', tier:'new', topic, sub, concept, tags, source, stem, options, teach, cite: D + ' ' + cite};
  if (multi) q.multi = true;
  return q;
}
QUESTIONS.push(

// ---------- drug table recall ----------
mk('EG-001','tell','ey-in','bb','ey-g-carteolol-isa',['tell','recall'],'both',
 'A glaucoma patient needs a nonspecific topical beta receptor antagonist that also has intrinsic sympathomimetic activity. Which drug fits?', 2, [
 ['Carteolol','Slide 19: "Nonspecific blocker with intrinsic sympathomimetic activity: Carteolol". In class it is the one on the drug list that is nonspecific "but it has some intrinsic sympathomimatic activity" (T@44986 11/13).'],
 ['Timolol','Slide 19 lists timolol among the nonspecific beta-blocking agents; the intrinsic sympathomimetic activity is given for carteolol.'],
 ['Betaxolol','Slide 19: betaxolol is the relatively beta 1-selective agent, so it is not described as nonspecific.'],
 ['Levobunolol','Slide 19: levobunolol is nonspecific and "possesses some alpha-adrenergic effects", a different added property.']],
 'Slide 19 separates the beta receptor antagonists by what else they do: timolol and levobunolol are nonspecific (levobunolol adds some alpha-adrenergic effects), betaxolol is relatively beta 1 selective, and carteolol is nonspecific with intrinsic sympathomimetic activity (T@44851, T@44986 11/13).',
 'slide 19; T@44986 11/13'),

mk('EG-002','class','ey-out','pg','ey-g-pg-members',['list','multi','drug-list'],'both',
 'Which of these drugs on the glaucoma drug table are prostaglandin agonists? Select all that apply.', 0, [
 ['Pilocarpine','Slide 31: a direct M3 agonist (parasympathomimetic), not a prostaglandin agonist.', false],
 ['Bimatoprost','Slide 38 lists bimatoprost first among the prostaglandin agonist examples; in class she named it with the class (T@32602 11/17).', true],
 ['Brinzolamide','Slide 28: an ophthalmic carbonic anhydrase inhibitor, which decreases inflow.', false],
 ['Tafluprost','Slide 38 lists tafluprost among the prostaglandin agonist examples (T@32602 11/17).', true],
 ['Latanoprostene bunod','Slide 38 lists it as a prostaglandin agonist that is also a donor of nitric oxide (T@32602, T@33195 11/17).', true]],
 'Slide 38 lists bimatoprost, latanoprost, latanoprostene bunod, travoprost and tafluprost as the prostaglandin agonists; in class she read them off as the ones "on our drug list as prostaglandin agonists" (T@32602 11/17).',
 'slides 31, 38; T@32602 11/17', true),

mk('EG-003','tell','ey-ac','h1','ey-g-mcs-members-2',['list','multi','tell-apart'],'both',
 'A patient with itchy eyes wants an ophthalmic antihistamine that also keeps mast cells from releasing histamine. Which drugs fit? Select all that apply.', 0, [
 ['Alcaftadine','Slide 53: H1 inverse agonist and mast cell stabilization (T@48586 11/17).', true],
 ['Cetirizine','Slide 53: an H1 inverse agonist only; in class it was the one without mast cell stabilizing activity (T@51788 11/17).', false],
 ['Bepotastine','Slide 53: "H1 inverse agonist and mast cell stabilizer"; in class that was the only thing to remember for it (T@50255 11/17).', true],
 ['Tetrahydrozoline','Slide 57: an alpha 2 agonist vasoconstrictor that reduces redness; it is not an antihistamine.', false],
 ['Azelastine','Slide 53: H1 inverse agonist and mast cell stabilization, also a nasal spray for allergic rhinitis.', true]],
 'Slides 53-54: alcaftadine, azelastine, bepotastine, epinastine, ketotifen and olopatadine combine H1 inverse agonism with mast cell stabilization; cetirizine has H1 inverse agonism alone. She asked the class to "pay special attention to which ones have mast cell stabilizing properties" (T@48586 11/17).',
 'slides 53, 54, 57; T@48586, T@50255 11/17', true),

mk('EG-004','class','ey-ac','a2','ey-g-a2-members-2',['list','multi','drug-list'],'both',
 'Which drugs on the allergic conjunctivitis table are alpha 2 agonist vasoconstrictors that reduce redness? Select all that apply.', 0, [
 ['Bepotastine','Slide 53: an H1 inverse agonist and mast cell stabilizer, not a vasoconstrictor.', false],
 ['Tetrahydrozoline','Slide 57 lists tetrahydrozoline among the alpha 2 agonists (T@53033 11/17).', true],
 ['Ketotifen','Slide 54: an H1 inverse agonist and mast cell stabilizer.', false],
 ['Phenylephrine','Slide 57 lists phenylephrine among the alpha 2 agonists (T@53033 11/17) and the course drug chart prints it in that class for allergic conjunctivitis; the autonomic chart on slide 8 shows it as an alpha 1 agonist.', true],
 ['Oxymetazoline','Slide 57 lists oxymetazoline among the alpha 2 agonists (T@53033 11/17).', true]],
 'Slide 57 lists naphazoline, oxymetazoline, tetrahydrozoline, brimonidine tartrate and phenylephrine; as eye drops for itchy eyes there is "not much difference between these drugs" (T@53033, T@53248 11/17).',
 'slides 53, 54, 57; T@53033 11/17', true),

mk('EG-005','class','ey-in','cai','ey-g-cai-oral-members',['list','multi','drug-list','route'],'both',
 'Which carbonic anhydrase inhibitors on the glaucoma drug table are taken by mouth? Select all that apply.', 0, [
 ['Dorzolamide','Slide 28: an ophthalmic product.', false],
 ['Acetazolamide','Slide 28: oral. In class: "We will use acetazolamide and methazolamide orally" (T@58639 11/13).', true],
 ['Brinzolamide','Slide 28: an ophthalmic product.', false],
 ['Methazolamide','Slide 28: oral (T@58639 11/13).', true],
 ['Brinzolamide with brimonidine','Slide 45: a combination eye drop of two inflow drugs.', false]],
 'Slide 28: acetazolamide and methazolamide are oral; dorzolamide and brinzolamide are ophthalmic. The oral route carries the systemic effects, including metabolic acidosis (slide 29; T@58639 11/13).',
 'slides 28, 29, 45; T@58639 11/13', true),

// ---------- eye parts ----------
mk('EG-006','mech','ey-out','m3','ey-g-m3-sphincter',['structure','mechanism'],'both',
 'An M3 receptor agonist increases aqueous humor outflow by contracting which pair of structures?', 1, [
 ['The iris sphincter muscle and the trabecular meshwork','Slide 32: "Contraction of the sphincter muscle and trabecular meshwork increase outflow". In class the muscarinic receptors are "also here on the muscle lining the iris", with the biggest effect at the meshwork (T@27651, T@27812 11/17).'],
 ['The iris dilator muscle and the trabecular meshwork','Slide 7: the dilator muscle responds to adrenergic stimulation of alpha 1 receptors, not to muscarinic stimulation.'],
 ['The iris sphincter muscle and the epithelium of the ciliary body','Slide 16: the ciliary epithelium carries beta, alpha 2 and carbonic anhydrase targets; the M3 drugs act on muscle and meshwork.'],
 ['The epithelium of the ciliary body and Schlemm\'s canal','Neither structure is the M3 target on slides 16 and 32; the receptor is on the meshwork and the sphincter muscle.']],
 'Slide 32 places the M3 receptor on the sphincter muscle and the trabecular meshwork; contraction of both increases outflow (slide 34 gives the same effect for the cholinesterase inhibitor). Slide 7: muscarinic stimulation constricts the pupil through the sphincter muscle.',
 'slides 7, 16, 32, 34; T@27651 11/17'),

// ---------- histamine and dry eye pathology ----------
mk('EG-007','patho','ey-ac','hist','ey-g-hist-symptoms',['list','multi','pathophysiology'],'both',
 'Which symptoms of allergic conjunctivitis follow histamine release from mast cells in the conjunctiva? Select all that apply.', 0, [
 ['Itching','Slide 49 and T@40838 11/17: histamine causes itchiness; for allergic conjunctivitis she was "most concerned about" the itchiness of the eyes (T@43162 11/17).', true],
 ['Elevated intraocular pressure','A feature of glaucoma (slide 13), not a result of histamine in the conjunctiva.', false],
 ['Redness from relaxed small vessels','Slide 49: histamine "markedly relaxes ... small blood vessels"; in class, "the redness in your eyes" (T@40919 11/17).', true],
 ['Reduced tear production','A feature of dry eye with inflammation (slides 62, 64), not of histamine release.', false],
 ['Swelling from edema','Slide 49: formation of edema; slide 52 lists edema among the symptoms the antihistamines reduce.', true]],
 'Slides 48-49 and 52: histamine released from IgE-bound mast cells causes itching, vasodilation (redness) and edema (swelling), which the ophthalmic antihistamines reduce. Slide 47 objective: list the symptoms of allergic conjunctivitis.',
 'slides 47, 49, 52; T@40838, T@43162 11/17', true),

mk('EG-008','adverse','ey-de','what','ey-g-de-antidepressants',['list','side-effect'],'both',
 'Antihistamines, decongestants and hormone replacement therapy may cause dry eye. Which other drug class is on her list of causes?', 3, [
 ['Antidepressants','Slide 62: "antihistamines, decongestants, antidepressants, and hormone replacement therapy". In class: "antidepressants and then HRT ... is also associated with dry eye" (T@57193 11/17).'],
 ['Corticosteroids','Slide 69: loteprednol, a corticosteroid, is a treatment for dry eye; slide 62 does not list corticosteroids as a cause.'],
 ['Calcineurin inhibitors','Slides 64-67: cyclosporine, a calcineurin inhibitor, is a treatment for dry eye.'],
 ['LFA-1 antagonists','Slide 71: lifitegrast, an LFA-1 antagonist, is a treatment for dry eye.']],
 'Slide 62: medications that may be causative include antihistamines, decongestants, antidepressants and hormone replacement therapy (T@57193 11/17). The same lecture covers antihistamines as allergy drugs that can leave the eyes dry.',
 'slides 62, 69, 71; T@57193 11/17'),

mk('EG-009','patho','ey-de','what','ey-g-de-lacrimal-inflammation',['definition','pathophysiology'],'both',
 'Keratoconjunctivitis sicca is another name for dry eye. Where is the inflammation that lowers tear production located?', 0, [
 ['In the lacrimal system, around the glands that make tears and their ducts','Slide 62 gives the name; in class: "inflammation within the lacrimal system. So inflammation where those glands are that produce the tears, maybe along the ducts" (T@57994 11/17).'],
 ['In the ciliary body, where the epithelium makes aqueous humor','Slides 14-15: the ciliary body makes aqueous humor, which is the fluid of glaucoma, not the tear film.'],
 ['In the trabecular meshwork, where resistance to aqueous humor outflow rises','Slides 15-16: the meshwork drains aqueous humor and is the target of the outflow drugs, not of the dry eye drugs.'],
 ['In the conjunctival mast cells, where IgE binds the antigen','Slide 48: IgE on mast cells starts allergic conjunctivitis, a histamine response rather than the dry eye inflammation.']],
 'Slides 62 and 64: dry eye is also called keratoconjunctivitis sicca; "with the inflammation, you get a reduction in tear production" (T@56135 11/17), and the inflammation sits in the lacrimal system where the tear glands and ducts are (T@57994 11/17). That is why the calcineurin inhibitor, corticosteroid and LFA-1 antagonist are used.',
 'slides 62, 64; T@56135, T@57994 11/17'),

// ---------- significant side effects ----------
mk('EG-010','adverse','ey-in','bb','ey-g-bb-systemic',['list','multi','side-effect'],'both',
 'Which effects can follow systemic absorption of a topical beta receptor antagonist? Select all that apply.', 0, [
 ['Bradycardia','Slide 20 lists cardiac bradycardia and hypotension; in class, "some of these can cause some bradycardia and hypotension" (T@47114 11/13).', true],
 ['Salivation with diarrhea','Slide 33: systemic effects of the M3 agonists (diarrhea, salivation, sweating, rhinorrhea).', false],
 ['Hypotension','Slide 20: cardiac effects are bradycardia and hypotension (T@47114 11/13).', true],
 ['Darkening of the iris','Slide 39: a pigment change of the prostaglandin agonists.', false],
 ['Bronchospasm in asthmatic patients','Slide 20: respiratory, bronchospasm in asthmatics; in class this follows beta 2 blockade (T@47114 11/13).', true]],
 'Slide 20 lists the systemic effects of topical beta receptor antagonists: cardiac bradycardia and hypotension, respiratory bronchospasm in asthmatics, and headache, insomnia, taste perversion, depression and impotence (T@47114, T@47705 11/13).',
 'slides 20, 33, 39; T@47114 11/13', true),

mk('EG-011','adverse','ey-de','var','ey-g-vareni-rare',['list','multi','side-effect'],'both',
 'Which of these are rare adverse effects of intranasal varenicline? Select all that apply.', 0, [
 ['Retinal vascular disorder','Slide 73: rare. In class she said this one is rare "but not a good condition" because it can cause vision loss (T@68452 11/17).', true],
 ['Visual disturbance','Slide 73: infrequent; in class, "regular old visual disturbances ... are not considered rare" (T@68649 11/17).', false],
 ['Subcapsular cataract','Slide 73: rare (T@68649 11/17).', true],
 ['Transient blindness','Slide 73: rare.', true],
 ['Application site irritation','Slide 71: a side effect listed for lifitegrast, not for varenicline.', false]],
 'Slide 73 lists acquired night blindness, retinal vascular disorder, subcapsular cataract and transient blindness as rare, and blurred vision and visual disturbance as infrequent (T@68302, T@68452, T@68649 11/17).',
 'slides 71, 73; T@68302, T@68649 11/17', true),

// ---------- dry eye treatment order ----------
mk('EG-012','counsel','ey-de','what','ey-g-de-lubricants-first',['case','counseling'],'transcript',
 'A patient has dry eyes and has tried no treatment. Which step usually comes before the prescription drugs discussed in class?', 1, [
 ['Over-the-counter lubricating drops, such as artificial tears','In class: patients first use "lubricating drops for the eye", and the prescription drugs "are usually not first line approaches" (T@55648, T@55923 11/17); she later moved "from the OTC lubricating products like the artificial tears" to the anti-inflammatory drugs (T@57545 11/17). The drug chart lists carboxymethylcellulose, hydroxypropyl cellulose and artificial tears as the lubricants.'],
 ['Ophthalmic cyclosporine to lower the inflammation in the tear glands','Slides 64-67: a prescription calcineurin inhibitor, used when tear production is suppressed by inflammation, after the lubricants.'],
 ['Ophthalmic loteprednol to lower inflammatory gene expression','Slide 69: a prescription corticosteroid used for its anti-inflammatory properties, after the lubricants.'],
 ['Intranasal varenicline to activate the nasal trigeminal pathway','Slide 73: a prescription nasal spray that activates the trigeminal parasympathetic pathway, after the lubricants.']],
 'In class: before the prescription drugs patients "go use like first lubricating drops for the eye" (T@55648 11/17); the prescription drugs "are usually not first line approaches to treating dry eye" (T@55923 11/17). She did not teach the lubricants themselves ("those are purely just a physical lubricating type of agent").',
 'slide 62; DrugChart_Ophthalmics.pdf p. 4; T@55648, T@55923 11/17')
);
})();
