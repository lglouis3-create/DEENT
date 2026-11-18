/* q25_eye_outflow.js: Exam 3 (Dr. Smith, Lecture 10), glaucoma drugs that increase outflow.
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 30-35 (parasympathomimetics), 36-39 (prostaglandin
   agonists), 40-43 (Rho kinase inhibitor), 44-45 (combination products); slides 18-21 and 26 for the inflow drugs used as
   contrast; DEENT_Lecture_11.17_transcript.txt T@23579 to T@38400 (from "next big bucket of drugs" to the combination
   products); DrugChart_Ophthalmics.pdf p. 1-2 (names). Dr. Smith on Exam 3 (11/13): five cumulative questions; "focus on
   pathophys and then focus on mechanisms"; "scary side effects like black box warnings".
   Slide-vs-lecture differences, stated in the explanations:
   (1) Slide 32 names the "sphincter muscle and trabecular meshwork" as the muscles that contract with M3 agonists; the lecture
       (T@24390) speaks of the smooth muscle of the ciliary body and the trabecular meshwork. Items key the trabecular
       meshwork, which both give.
   (2) Slide 37 says prostaglandin agonists raise uveoscleral outflow "and (to a lesser extent) trabecular outflow"; the lecture
       (T@31289) says uveoscleral "and not so much the trabecular outflow". Items key uveoscleral as the main route and never
       ask for the lesser route.
   (3) Slide 41 says RhoA inhibition relaxes trabecular meshwork tone; the lecture (T@35676) says "not a muscular relaxation": the
       meshwork is less stiff because fibrosis-related proteins form less. Items use the shared wording (less stiff, lower resistance).
   (4) Slide 33 says "supraoptic headache"; the transcript says supraorbital pain around the eye (T@28186). Items say pain around the eye.
   (5) Slide 35 (AChE inhibitor) lists no floaters; slide 33 (M3 agonists) does. No item keys floaters for the AChE inhibitor.
   (6) Slide 38 prints "Travaprost"; the drug chart prints travoprost, used here.
   Left out: which prostaglandin agonist is Latisse (neither slide nor lecture names the drug; T@34104 says the class is sold as
   Latisse); why dim-light vision is poor with M3 agonists (no source gives a reason). */
(() => {
const CITE = (s, t) => 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf) slide ' + s + '; T@' + t + ' 11/17';
QUESTIONS.push(
{id:'EO-001', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-mech',
 tags:['mechanism','outflow'], source:'both',
 stem:'How does pilocarpine lower intraocular pressure?',
 options:[
  {t:'It stimulates M3 receptors, contracting the trabecular meshwork to widen its openings', correct:true, why:'Slide 32: agonist at M3 receptors; contraction of the meshwork increases outflow. T@24390: "If you contract it, you\'re opening up the spaces in the meshwork." Slide 32 also names the sphincter muscle; the lecture speaks of the ciliary body smooth muscle and the meshwork, and both give the meshwork.'},
  {t:'It stimulates M3 receptors on the ciliary epithelium to reduce aqueous humor secretion', correct:false, why:'Slide 32 and T@24390: M3 stimulation acts on the muscle and meshwork to increase outflow; secretion by the ciliary body is reduced by beta receptor antagonists, alpha 2 agonists and carbonic anhydrase inhibitors (slides 18, 22, 26).'},
  {t:'It blocks M3 receptors, relaxing the ciliary muscle so uveoscleral outflow rises', correct:false, why:'Slide 32: pilocarpine is an agonist, not a blocker. Relaxation of the ciliary muscle is the effect of prostaglandin agonists (slide 37).'},
  {t:'It inhibits acetylcholinesterase, so acetylcholine builds up at M3 receptors', correct:false, why:'Slide 34: this is the mechanism of echothiophate. Pilocarpine acts as acetylcholine at the receptor (T@23726).'}],
 teach:'Slides 30–32: carbachol and pilocarpine are direct M3 agonists. Contraction of the muscle and trabecular meshwork opens the spaces, so aqueous humor drains more easily (the construction-netting comparison, T@24723).',
 cite:CITE('32','23726')},

{id:'EO-002', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-which-drug',
 tags:['tell-apart','outflow'], source:'both',
 stem:'Which drug raises acetylcholine in the eye by stopping its breakdown rather than by acting as an agonist at M3?',
 options:[
  {t:'Echothiophate', correct:true, why:'Slide 34: irreversible acetylcholinesterase inhibitor, which increases acetylcholine; T@23726: acetylcholinesterase inhibitors "are increasing acetylcholine in the body, cuz they\'re inhibiting the enzyme that breaks it down".'},
  {t:'Carbachol', correct:false, why:'Slides 31–32: carbachol is a direct-acting M3 agonist and acts like acetylcholine itself.'},
  {t:'Netarsudil', correct:false, why:'Slide 41: netarsudil inhibits RhoA kinase; it does not change acetylcholine.'},
  {t:'Pilocarpine', correct:false, why:'Slides 31–32: pilocarpine is a direct-acting M3 agonist.'}],
 teach:'Slide 31: M3 agonists (carbachol, pilocarpine) are direct acting; the acetylcholinesterase inhibitor (echothiophate) is indirect acting.',
 cite:CITE('31','23726')},

{id:'EO-003', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-carb-vs-pilo',
 tags:['tell-apart','two-facts'], source:'both',
 stem:'Carbachol and pilocarpine are both M3 agonists used for glaucoma. How does carbachol differ from pilocarpine?',
 options:[
  {t:'It is more potent but has a shorter duration of action and is less allergenic', correct:false, why:'T@26432: carbachol has a longer, not shorter, duration of action than pilocarpine.'},
  {t:'It is less potent but has a longer duration of action and is less allergenic', correct:false, why:'T@26432: carbachol is very potent, not less potent than pilocarpine.'},
  {t:'It is more potent, has a longer duration of action and is less allergenic', correct:true, why:'T@26432: "very potent, its duration of action is longer than pilocarpine ... a little bit longer acting, less allergenic than pilocarpine", the reason carbachol is used more.'},
  {t:'It is more potent and longer acting but causes more allergic reactions', correct:false, why:'T@26432: pilocarpine, not carbachol, carries the potential for an allergic reaction in the eye.'}],
 teach:'T@26432: carbachol is very potent, longer acting and less allergenic than pilocarpine, so it is used more often.',
 cite:CITE('31','26432')},

{id:'EO-004', skill:'case', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-allergy-switch',
 tags:['case','two-facts'], source:'transcript',
 stem:'A patient with glaucoma develops an allergic reaction in the eye with pilocarpine. The prescriber wants to stay with a direct M3 agonist. Which drug fits, and why?',
 options:[
  {t:'Echothiophate, because it is a direct M3 agonist that is less allergenic', correct:false, why:'Slide 31 and T@26954: echothiophate is an indirect-acting acetylcholinesterase inhibitor and is more allergenic than pilocarpine.'},
  {t:'Netarsudil, because it is an M3 agonist with a lower risk of irritation', correct:false, why:'Slide 41: netarsudil is a Rho kinase inhibitor, not an M3 agonist.'},
  {t:'Pilocarpine at a lower frequency, because the reaction is dose related', correct:false, why:'T@26432: the allergic potential belongs to pilocarpine as a drug; no source gives a dosing change for it.'},
  {t:'Carbachol, because it is a direct M3 agonist that is less allergenic', correct:true, why:'T@26432: carbachol is the one used more because it is longer acting and less allergenic than pilocarpine.'}],
 teach:'Direct M3 agonists: carbachol (less allergenic, longer acting) and pilocarpine (allergic potential in the eye). Echothiophate is the most irritating of the three (T@26954).',
 cite:CITE('31','26432')},

{id:'EO-005', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-when-used',
 tags:['class','case'], source:'transcript',
 stem:'A patient\'s intraocular pressure stays high on several glaucoma drugs. Which parasympathomimetic is tried when the patient is refractory to other medications?',
 options:[
  {t:'Pilocarpine', correct:false, why:'T@26954: pilocarpine is an ordinary M3 agonist option; the refractory case is echothiophate.'},
  {t:'Carbachol', correct:false, why:'T@26432: carbachol is the M3 agonist used most often, not the last-line choice.'},
  {t:'Latanoprost', correct:false, why:'Slide 37: latanoprost is a prostaglandin agonist, not a parasympathomimetic.'},
  {t:'Echothiophate', correct:true, why:'T@26954: "we often only use that when people are really refractory to other glaucoma meds"; also "usually only when somebody has an inability to control those ocular pressures".'}],
 teach:'Echothiophate is the acetylcholinesterase inhibitor reserved for patients whose pressure is hard to control; it irritates the eye more than pilocarpine.',
 cite:CITE('31','26954')},

{id:'EO-006', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-mech',
 tags:['mechanism','outflow'], source:'both',
 stem:'What is the mechanism by which echothiophate increases aqueous humor outflow?',
 options:[
  {t:'It reversibly inhibits acetylcholinesterase, so the trabecular meshwork relaxes', correct:false, why:'Slide 34: the inhibition is irreversible, and the result is contraction, not relaxation, of the meshwork.'},
  {t:'It irreversibly inhibits acetylcholinesterase, so acetylcholine acts on M3 and the meshwork contracts', correct:true, why:'Slide 34 and T@29179: "irreversible inhibitors of the enzyme ... more acetylcholine agonizing the M3 receptors, causing the contraction of that trabecular meshwork increasing outflow".'},
  {t:'It irreversibly inhibits RhoA kinase, so the meshwork is less stiff', correct:false, why:'Slide 41: RhoA kinase is the target of netarsudil.'},
  {t:'It stimulates PGF2 alpha receptors, so the ciliary muscle relaxes', correct:false, why:'Slide 37: PGF2 alpha receptors are the target of prostaglandin agonists.'}],
 teach:'Slide 34: irreversible acetylcholinesterase inhibitor; more acetylcholine; contraction of the muscle and trabecular meshwork; more outflow.',
 cite:CITE('34','29179')},

{id:'EO-007', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-cataract-reverse',
 tags:['side-effect','reverse'], source:'both',
 stem:'A patient on a glaucoma eye drop reports a headache above the eyes, twitching eyelids and, on examination, develops cataracts. Which drug is most likely responsible?',
 options:[
  {t:'Pilocarpine', correct:false, why:'Slide 33: pilocarpine and carbachol cause ciliary spasm and headache, but cataracts are listed for the acetylcholinesterase inhibitor (slide 35).'},
  {t:'Latanoprost', correct:false, why:'Slide 39: latanoprost causes pigmentation of the iris and eyelids and lash changes, not cataracts or eyelid twitching.'},
  {t:'Netarsudil', correct:false, why:'Slide 43: netarsudil causes conjunctival hyperemia, corneal verticillata and hemorrhage.'},
  {t:'Echothiophate', correct:true, why:'Slide 35 lists headache, brow-ache, twitching of eyelids and cataracts. T@29697: "this medication can cause cataracts."'}],
 teach:'Slide 35: ophthalmic burning, blurred vision, eye pain, lacrimation, headache, brow-ache, eyelid twitching and cataracts; systemic diarrhea, salivation, sweating and rhinorrhea.',
 cite:CITE('35','29697')},

{id:'EO-008', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-why-limited',
 tags:['two-facts','side-effect'], source:'transcript',
 stem:'Why is echothiophate chosen less often than the M3 agonists in a patient who already has glaucoma?',
 options:[
  {t:'It causes metabolic acidosis through renal bicarbonate loss', correct:false, why:'Slide 29: systemic acidosis is the side effect of carbonic anhydrase inhibitors.'},
  {t:'It darkens the iris, which makes later pressure readings less reliable', correct:false, why:'Slide 39: iris darkening is a prostaglandin agonist effect, and no source ties it to pressure readings.'},
  {t:'It reverses only partly, so its effect fades within hours', correct:false, why:'Slide 34: echothiophate is an irreversible inhibitor; no source describes a short effect.'},
  {t:'It can cause cataracts and is more irritating to the eye than pilocarpine', correct:true, why:'T@29697: "you don\'t want to be causing cataracts in your patients that already have glaucoma"; T@29919: the allergic-type reaction with burning and stinging is greater than with pilocarpine.'}],
 teach:'Echothiophate is the last-line parasympathomimetic because of cataracts and a stronger allergic-type reaction (T@29697 and T@29919).',
 cite:CITE('35','29697')},

{id:'EO-009', skill:'patho', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-ciliary-spasm',
 tags:['mechanism','side-effect','two-facts'], source:'both',
 stem:'A patient starting carbachol drops complains of pain around the eyes that feels like a headache. What explains it?',
 options:[
  {t:'Stimulated M3 receptors cause painful spasm of the ciliary muscle that radiates around the eye', correct:true, why:'Slide 33: painful ciliary muscle spasm that can cause temporal or supraoptic headache. T@28186: the pain comes from contraction of muscles in the eye radiating pain, not from muscles in the brow (the transcript says pain around the eye).'},
  {t:'Stimulated M3 receptors contract the brow muscles above the eye', correct:false, why:'T@28186: "It\'s not that you\'re contracting muscles up here, it\'s the contraction of the muscles in the eye."'},
  {t:'Blocked beta receptors constrict the vessels of the ciliary body', correct:false, why:'Slide 18: beta receptor antagonists reduce aqueous production; slide 20 lists their effects, and headache from vasoconstriction is not among the reasons given for carbachol.'},
  {t:'Relaxation of the ciliary muscle pulls it away from the sclera and strains the eye', correct:false, why:'T@31289: relaxation of the ciliary muscle is the action of prostaglandin agonists and is not given as a cause of pain.'}],
 teach:'Contraction is the desired action of M3 agonists and the source of their painful ciliary spasm, supraorbital-area headache, blurred vision and floaters (slide 33).',
 cite:CITE('33','28186')},

{id:'EO-010', skill:'patho', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-systemic-why',
 tags:['two-facts','side-effect'], source:'both',
 stem:'A patient using pilocarpine eye drops develops diarrhea, salivation, sweating and a runny nose. What is the most likely explanation?',
 options:[
  {t:'Systemic absorption of the drops, which then stimulate muscarinic receptors in the body', correct:true, why:'Slide 33 lists these as systemic effects; T@28697: "you can get that systemic absorption of these eye drops, resulting in systemic side effects."'},
  {t:'Blockade of acetylcholinesterase in the ciliary body only', correct:false, why:'Slide 34 describes enzyme inhibition for echothiophate; pilocarpine acts as an agonist, and the symptoms come from drug reaching the body (T@28697).'},
  {t:'Excess aqueous humor entering the nasal passages through the lacrimal system', correct:false, why:'T@30444: drops that drain into the nose can enter the bloodstream; the aqueous humor itself is not the cause.'},
  {t:'Contraction of the trabecular meshwork squeezing nearby secretory glands', correct:false, why:'Slide 32: contraction of the meshwork opens its spaces; no source links it to glandular secretion.'}],
 teach:'Parasympathomimetic eye drops can be absorbed systemically, causing diarrhea, salivation, sweating and rhinorrhea (slides 33 and 35).',
 cite:CITE('33','28697')},

{id:'EO-011', skill:'counsel', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-compress',
 tags:['counseling','case'], source:'transcript',
 stem:'A patient with glaucoma has started carbachol eye drops. Which instruction reduces the systemic absorption that causes diarrhea and sweating?',
 options:[
  {t:'Close the eyes tightly for a few seconds without touching the eye', correct:false, why:'T@30444: the recalled technique is to hold the eye (compress) for a few minutes after the drops, to stop drug draining to the nose and bloodstream.'},
  {t:'Press at the corner of the eye for a few minutes after instilling the drops', correct:true, why:'T@30444: "have them put the drops in and hold their eye here for a few minutes to try to stop that flow of these drugs ... draining into the nose and ... then into the bloodstream."'},
  {t:'Instill the drops after meals so they are absorbed more slowly', correct:false, why:'No source links timing with meals to absorption; the transcript gives compression of the eye.'},
  {t:'Tilt the head forward for several minutes so the drops stay on the cornea', correct:false, why:'T@30444: the lecture technique is pressure on the eye after instillation, not head position.'}],
 teach:'Compression at the lacrimal drainage point after instillation reduces drainage into the nose and so systemic side effects (T@30444).',
 cite:CITE('33','30444')},

{id:'EO-012', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-effects-select', multi:true,
 tags:['side-effect','select-all'], source:'slide',
 stem:'Select the adverse effects listed for the direct M3 agonists carbachol and pilocarpine.',
 options:[
  {t:'Painful ciliary muscle spasm', correct:true, why:'Slide 33: painful ciliary muscle spasm, which can cause headache.'},
  {t:'Diarrhea and salivation', correct:true, why:'Slide 33 (systemic): diarrhea, salivation, sweating and rhinorrhea.'},
  {t:'Conjunctival hemorrhage', correct:false, why:'Slide 43: conjunctival hemorrhage is listed for netarsudil.'},
  {t:'Increased brown pigmentation of the iris', correct:false, why:'Slide 39: iris pigmentation is listed for prostaglandin agonists.'}],
 teach:'Slide 33. Ocular: burning and stinging, painful ciliary spasm, blurred vision, myopia, poor vision in dim light, floaters, lacrimation. Systemic: diarrhea, salivation, sweating, rhinorrhea.',
 cite:CITE('33','28186')},

{id:'EO-013', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-vs-bb-inflow-outflow',
 tags:['two-classes','inflow','outflow'], source:'both',
 stem:'Pilocarpine and timolol both lower intraocular pressure. How does the mechanism of each compare?',
 options:[
  {t:'Pilocarpine reduces aqueous humor production; timolol increases outflow', correct:false, why:'Reversed. Slide 32 (pilocarpine: increased outflow) and slide 18 (timolol: reduced aqueous production, not much effect on outflow).'},
  {t:'Both reduce aqueous humor production through different receptors', correct:false, why:'Slide 32: pilocarpine does not act on production; it increases outflow.'},
  {t:'Pilocarpine increases outflow through the meshwork; timolol reduces aqueous humor production', correct:true, why:'Slide 32 (contraction of the meshwork increases outflow) and slide 18 (blocks beta receptors on the ciliary body, reducing aqueous production, not much effect on outflow).'},
  {t:'Both increase outflow, one by contraction and one by relaxation of the ciliary muscle', correct:false, why:'Slide 18: timolol has not much effect on outflow. Relaxation of the ciliary muscle is the action of prostaglandin agonists (slide 37).'}],
 teach:'Beta receptor antagonists decrease inflow (aqueous production). Parasympathomimetics increase outflow.',
 cite:CITE('32','23726')},

{id:'EO-014', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-vs-m3-muscle',
 tags:['two-classes','two-facts','outflow'], source:'both',
 stem:'Pilocarpine and latanoprost both increase aqueous humor outflow. What does each do to the ciliary muscle?',
 options:[
  {t:'Pilocarpine relaxes it; latanoprost contracts it', correct:false, why:'Reversed. Slide 32: M3 agonists contract; slide 37: PGF2 alpha agonists relax.'},
  {t:'Both contract it, opening the trabecular meshwork', correct:false, why:'Slide 37: latanoprost relaxes the ciliary muscle (T@31096).'},
  {t:'Both relax it, pulling it away from the sclera', correct:false, why:'Slide 32: pilocarpine contracts the muscle.'},
  {t:'Pilocarpine contracts it; latanoprost relaxes it', correct:true, why:'Slide 32: contraction of the muscle and meshwork by M3 stimulation; slide 37 and T@31096: PGF2 alpha receptor agonism gives "relaxation of the ciliary muscle".'}],
 teach:'Opposite effects on the same muscle both raise outflow: contraction opens the meshwork (M3 agonists); relaxation opens the uveoscleral space (prostaglandin agonists).',
 cite:CITE('37','31096')},

{id:'EO-015', skill:'case', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-asthma-case',
 tags:['case','two-facts'], source:'both',
 stem:'A patient with asthma has high intraocular pressure. A beta receptor antagonist is avoided. Which choice lowers pressure by increasing outflow and has few systemic side effects?',
 options:[
  {t:'Echothiophate, because it has few systemic effects at low dose', correct:false, why:'Slide 35: echothiophate causes diarrhea, salivation, sweating and rhinorrhea, and cataracts; no source gives it few systemic effects.'},
  {t:'Pilocarpine, because it is a direct M3 agonist', correct:false, why:'Slide 33 lists systemic effects (diarrhea, salivation, sweating, rhinorrhea) for the M3 agonists.'},
  {t:'Carteolol, because it has intrinsic sympathomimetic activity', correct:false, why:'Slide 19: carteolol is a beta receptor antagonist; slide 20: bronchospasm in asthmatics is a systemic effect of the class.'},
  {t:'Travoprost, because it increases uveoscleral outflow', correct:true, why:'Slide 20 (bronchospasm in asthmatics with beta antagonists), slide 37 (increased uveoscleral outflow) and slide 39 (few systemic side effects). T@34161: "you don\'t have many other systemic side effects."'}],
 teach:'Beta receptor antagonists cause bronchospasm in asthmatics (slide 20). Prostaglandin agonists add outflow with few systemic side effects (slide 39).',
 cite:CITE('39','34161')},

{id:'EO-016', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-receptor',
 tags:['mechanism','target'], source:'both',
 stem:'At which receptor do the prostaglandin agonists act?',
 options:[
  {t:'The M3 receptor on the trabecular meshwork', correct:false, why:'Slide 32: M3 receptors are the target of carbachol and pilocarpine.'},
  {t:'The alpha 2 receptor on the ciliary body', correct:false, why:'Slide 22: alpha 2 receptors are the target of brimonidine and apraclonidine.'},
  {t:'The beta receptor on the ciliary epithelium', correct:false, why:'Slide 18: the beta receptor is the target of timolol and the other beta receptor antagonists.'},
  {t:'The PGF2 alpha receptor on the ciliary muscle', correct:true, why:'Slide 37 and T@31096: "agonize a specific kind of receptor that\'s in the ciliary body. It\'s called the PGF2 alpha receptor."'}],
 teach:'Slide 37: agonist at the PGF2 alpha receptor, causing relaxation of the ciliary muscle.',
 cite:CITE('37','31096')},

{id:'EO-017', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-mech-chain',
 tags:['mechanism','two-facts','outflow'], source:'both',
 stem:'How does latanoprost increase outflow of aqueous humor?',
 options:[
  {t:'It contracts the ciliary muscle, which opens the trabecular meshwork', correct:false, why:'Slide 32: contraction of the muscle and meshwork is the M3 agonist mechanism.'},
  {t:'It relaxes the ciliary muscle, which moves away from the sclera and opens uveoscleral outflow', correct:true, why:'T@31289: relaxation is "relaxing this muscle enough to kind of pull it away from the sclera, so you get more of that uveoscleral outflow"; slide 37.'},
  {t:'It relaxes the trabecular meshwork by reducing fibrosis-related proteins', correct:false, why:'Slide 41 and T@35676: this is the proposed mechanism of netarsudil.'},
  {t:'It relaxes the ciliary muscle, which narrows the angle and reduces aqueous production', correct:false, why:'Slide 37: prostaglandin agonists do not affect aqueous humor production.'}],
 teach:'PGF2 alpha receptor agonism relaxes the ciliary muscle; more uveoscleral outflow; no effect on aqueous humor production.',
 cite:CITE('37','31289')},

{id:'EO-018', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-route',
 tags:['outflow','route'], source:'both',
 stem:'Which outflow route do prostaglandin agonists mainly increase?',
 options:[
  {t:'The trabecular meshwork route into Schlemm\'s canal', correct:false, why:'Slide 37 and T@31289: the main effect is uveoscleral; the transcript says "not so much the trabecular outflow", the slide "to a lesser extent". The trabecular route is the main target of M3 agonists and netarsudil.'},
  {t:'The uveoscleral route', correct:true, why:'Slide 37: "increasing uveoscleral and (to a lesser extent) trabecular outflow"; T@34527: asked which route, the answer is uveoscleral.'},
  {t:'The lacrimal drainage route into the nose', correct:false, why:'Slide 5 (lacrimal system) describes tear drainage, not aqueous humor outflow.'},
  {t:'The posterior chamber route into the vitreous', correct:false, why:'No source describes this route; aqueous humor leaves by the meshwork and uveoscleral routes (slides 14–15).'}],
 teach:'Prostaglandin agonists work mainly on uveoscleral outflow; the meshwork is the main route for M3 agonists and the Rho kinase inhibitor.',
 cite:CITE('37','34527')},

{id:'EO-019', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-no-inflow',
 tags:['inflow','outflow'], source:'both',
 stem:'Which drug class lowers intraocular pressure without changing aqueous humor production?',
 options:[
  {t:'Carbonic anhydrase inhibitors', correct:false, why:'Slide 26: they decrease ciliary body aqueous humor secretion.'},
  {t:'Alpha 2 agonists', correct:false, why:'Slide 22: they decrease the rate of aqueous humor production.'},
  {t:'Beta receptor antagonists', correct:false, why:'Slide 18: they reduce aqueous production by the ciliary body.'},
  {t:'Prostaglandin agonists', correct:true, why:'Slide 37: "Does not affect aqueous humor production." T@31991: "they don\'t affect inflow ... they\'re helping with outflow."'}],
 teach:'Slide 37: prostaglandin agonists act on outflow and do not touch production; the three inflow classes lower production.',
 cite:CITE('37','31991')},

{id:'EO-020', skill:'case', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-iris-case',
 tags:['case','side-effect','reverse'], source:'both',
 stem:'A woman with hazel eyes has used a glaucoma drop for several months. Her iris and eyelids are now a darker brown. Which drug class is the likely cause?',
 options:[
  {t:'Rho kinase inhibitors', correct:false, why:'Slide 43: netarsudil causes conjunctival hyperemia, corneal verticillata, pain and hemorrhage, not pigmentation.'},
  {t:'Parasympathomimetics', correct:false, why:'Slides 33 and 35: ciliary spasm, headache, cataracts and systemic effects, not pigmentation.'},
  {t:'Prostaglandin agonists', correct:true, why:'Slide 39: increased brown pigmentation of the iris and eyelids. T@33811: "it makes your brown eyes browner, but it also will darken your eyelids."'},
  {t:'Alpha 2 agonists', correct:false, why:'Slide 24: ocular effects are foreign body sensation and pruritus (apraclonidine adds burning and blurred vision); no pigmentation.'}],
 teach:'Slide 39: brown pigmentation of the iris and eyelids; hypertrichosis and hyperpigmentation of lashes; hair growth in other areas.',
 cite:CITE('39','33811')},

{id:'EO-021', skill:'epi', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-eye-colour',
 tags:['clinical-observation'], source:'both',
 stem:'Prostaglandin agonists tend to lower intraocular pressure more in which patients?',
 options:[
  {t:'Patients with blue or green eyes', correct:false, why:'Slide 37 and T@32283: the response seen clinically is better in darker eyes.'},
  {t:'Patients with closed angle glaucoma only', correct:false, why:'Slide 37 gives no angle-type difference; the observation concerns eye color.'},
  {t:'Patients with hazel or brown eyes', correct:true, why:'Slide 37: "May be more effective in hazel/brown colored eyes than blue/green." T@32283: seen clinically, the reason is not known.'},
  {t:'Patients with a history of cataract surgery', correct:false, why:'No source links prostaglandin response to cataract surgery.'}],
 teach:'Clinical observation, mechanism not known (T@32283).',
 cite:CITE('37','32283')},

{id:'EO-022', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-lbn-no',
 tags:['two-facts','mechanism'], source:'both',
 stem:'Which prostaglandin agonist is also metabolized to a nitric oxide donor, and what does the nitric oxide add?',
 options:[
  {t:'Tafluprost; nitric oxide relaxes the meshwork by reducing fibrosis-related proteins', correct:false, why:'Slide 38 and T@33164: the nitric oxide donor is latanoprostene bunod. Reduction of fibrosis-related proteins is the netarsudil mechanism (slide 41).'},
  {t:'Bimatoprost; nitric oxide contracts the ciliary muscle', correct:false, why:'Slide 38: latanoprostene bunod is the nitric oxide donor; nitric oxide causes vasodilation, not muscle contraction (T@33164).'},
  {t:'Travoprost; nitric oxide lowers aqueous humor production', correct:false, why:'Slide 38: not travoprost; slide 37: prostaglandin agonists do not affect production.'},
  {t:'Latanoprostene bunod; nitric oxide adds a vasodilation effect', correct:true, why:'Slide 38: donator of nitric oxide, which adds to a vasodilation pharmacodynamic effect. T@33164: "NO causes vasodilation ... somehow adds to its mechanism of action."'}],
 teach:'Slide 38: latanoprostene bunod is metabolized to a nitric oxide donor; nitric oxide causes vasodilation.',
 cite:CITE('38','33164')},

{id:'EO-023', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-latisse',
 tags:['cosmetic','side-effect'], source:'both',
 stem:'A product sold as Latisse is used to thicken eyelashes. Which drug class does it belong to, and which effect is used?',
 options:[
  {t:'Rho kinase inhibitors; vasodilation of the lid margin', correct:false, why:'Slide 43: conjunctival hyperemia is the Rho kinase inhibitor effect; lash growth is not listed for it.'},
  {t:'Alpha 2 agonists; vasoconstriction of the lid margin', correct:false, why:'Slide 56 lists alpha 2 agonists as ocular vasoconstrictors for allergic conjunctivitis, not for lashes.'},
  {t:'Prostaglandin agonists; hypertrichosis and hyperpigmentation of lashes', correct:true, why:'Slide 39: "Hypertrichosis and hyperpigmentation of lashes (Latisse)". T@34104: sold as Latisse to help with eyelash thickening.'},
  {t:'Parasympathomimetics; twitching and growth of the eyelid margin', correct:false, why:'Slide 35: eyelid twitching occurs with echothiophate; it is not lash growth.'}],
 teach:'A side effect of the prostaglandin agonists is marketed as a cosmetic use. Hair growth in other areas is also listed (slide 39).',
 cite:CITE('39','34104')},

{id:'EO-024', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-profile',
 tags:['side-effect','tell-apart'], source:'slide',
 stem:'A patient starts travoprost. Which adverse effects are expected with this class?',
 options:[
  {t:'Painful ciliary spasm, floaters and diarrhea', correct:false, why:'Slide 33: the profile of the M3 agonists.'},
  {t:'Conjunctival hyperemia in more than half of patients and corneal verticillata', correct:false, why:'Slide 43: the profile of netarsudil (hyperemia 53%).'},
  {t:'Brown iris and eyelid pigmentation, lash changes and few systemic effects', correct:true, why:'Slide 39: increased brown pigmentation of iris and eyelids; hypertrichosis and hyperpigmentation of lashes; few systemic side effects.'},
  {t:'Brow ache, cataracts and eyelid twitching', correct:false, why:'Slide 35: the profile of echothiophate.'}],
 teach:'Slide 39 (prostaglandin agonists), 33 (M3 agonists), 35 (echothiophate), 43 (netarsudil): each class has its own recognizable adverse effects.',
 cite:CITE('39','33811')},

{id:'EO-025', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-drugs',
 tags:['class','drug-list'], source:'slide',
 stem:'Which pair of drugs are both prostaglandin agonists?',
 options:[
  {t:'Latanoprost and netarsudil', correct:false, why:'Slides 38 and 42: latanoprost is a prostaglandin agonist; netarsudil is a Rho kinase inhibitor (the two are combined in a product, slide 45).'},
  {t:'Bimatoprost and brinzolamide', correct:false, why:'Slide 38: bimatoprost is a prostaglandin agonist; slide 28: brinzolamide is a carbonic anhydrase inhibitor.'},
  {t:'Timolol and travoprost', correct:false, why:'Slide 19: timolol is a beta receptor antagonist; travoprost is a prostaglandin agonist (slide 38).'},
  {t:'Tafluprost and travoprost', correct:true, why:'Slide 38 lists bimatoprost, latanoprost, latanoprostene bunod, travoprost and tafluprost as prostaglandin agonists.'}],
 teach:'Slide 38: bimatoprost, latanoprost, latanoprostene bunod, travoprost, tafluprost.',
 cite:CITE('38','32764')},

{id:'EO-026', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-route-two-drugs',
 tags:['two-classes','route','outflow'], source:'both',
 stem:'Through which outflow route does each of these drugs mainly act: pilocarpine and latanoprost?',
 options:[
  {t:'Pilocarpine: uveoscleral route; latanoprost: trabecular meshwork', correct:false, why:'Reversed. Pilocarpine acts on the meshwork (slide 32); latanoprost mainly on the uveoscleral route (slide 37).'},
  {t:'Echothiophate: uveoscleral route; netarsudil: trabecular meshwork', correct:false, why:'Slide 34: echothiophate contracts the meshwork, so its route is trabecular.'},
  {t:'Pilocarpine: trabecular meshwork; latanoprost: uveoscleral route', correct:true, why:'Slide 32 and T@24390 (meshwork) and slide 37 and T@31289 (uveoscleral).'},
  {t:'Netarsudil: uveoscleral route; latanoprost: uveoscleral route', correct:false, why:'Slide 41: netarsudil lowers trabecular outflow resistance and acts on Schlemm\'s canal permeability.'}],
 teach:'Meshwork route: M3 agonists, echothiophate, netarsudil. Uveoscleral route: prostaglandin agonists (and some effect of brimonidine, slide 22).',
 cite:CITE('37','31289')},

{id:'EO-027', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-brimonidine-vs-pg',
 tags:['two-classes','inflow','outflow','tell-apart'], source:'both',
 stem:'Brimonidine and latanoprost both increase uveoscleral outflow to some degree. What separates their effects on aqueous humor production?',
 options:[
  {t:'Neither changes production', correct:false, why:'Slide 22: brimonidine decreases the rate of aqueous humor production.'},
  {t:'Latanoprost decreases production; brimonidine does not', correct:false, why:'Slide 37: latanoprost does not affect aqueous humor production.'},
  {t:'Brimonidine decreases production; latanoprost does not', correct:true, why:'Slide 22: alpha 2 agonists decrease aqueous production with some increase in uveoscleral outflow (brimonidine); slide 37: prostaglandin agonists do not affect production.'},
  {t:'Both decrease production through the same receptor', correct:false, why:'Slide 37: latanoprost acts at the PGF2 alpha receptor and does not change production; slide 22: brimonidine acts at alpha 2 receptors.'}],
 teach:'Brimonidine is an inflow drug with a secondary outflow effect; prostaglandin agonists are outflow drugs only.',
 cite:CITE('37','31991')},

{id:'EO-028', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-target',
 tags:['mechanism','target'], source:'both',
 stem:'What does netarsudil inhibit?',
 options:[
  {t:'Carbonic anhydrase in the ciliary body', correct:false, why:'Slide 26: carbonic anhydrase is the target of dorzolamide, brinzolamide, acetazolamide and methazolamide.'},
  {t:'Acetylcholinesterase in the ciliary body', correct:false, why:'Slide 34: acetylcholinesterase is the target of echothiophate.'},
  {t:'The PGF2 alpha receptor on the ciliary muscle', correct:false, why:'Slide 37: that receptor is stimulated, not inhibited, by prostaglandin agonists.'},
  {t:'RhoA kinase activity', correct:true, why:'Slide 41: inhibits RhoA kinase activity; T@35104: RhoA is a GTP-binding protein with kinase activity.'}],
 teach:'Netarsudil is the Rho kinase inhibitor on the drug list; RhoA is a GTP-binding protein that regulates cell shape, motility, proliferation and apoptosis.',
 cite:CITE('41','35104')},

{id:'EO-029', skill:'patho', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-rhoa-glaucoma',
 tags:['pathophysiology','two-facts'], source:'both',
 stem:'In glaucoma, what is the proposed role of RhoA kinase activity in the trabecular meshwork?',
 options:[
  {t:'It increases contractile tone and fibrosis-related proteins, making the meshwork stiffer', correct:true, why:'Slide 41: RhoA may increase contractile tone, causing trabecular meshwork stiffness, and fibrosis-related protein deposits. T@35104: its kinasing "making that meshwork stiffer".'},
  {t:'It relaxes the meshwork, which closes the openings and slows drainage', correct:false, why:'Slide 41: RhoA activity increases tone and stiffness; relaxation of the meshwork is what its inhibition produces.'},
  {t:'It increases production of aqueous humor by the ciliary epithelium', correct:false, why:'Slide 41 concerns the outflow resistance of the meshwork, not production.'},
  {t:'It lowers permeability of the cornea to aqueous humor', correct:false, why:'Slide 41 mentions the permeability of the cells lining Schlemm\'s canal, not the cornea.'}],
 teach:'RhoA activity raises meshwork stiffness; inhibiting it lowers outflow resistance.',
 cite:CITE('41','35104')},

{id:'EO-030', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-mech',
 tags:['mechanism','outflow'], source:'both',
 stem:'How does inhibiting RhoA kinase lower intraocular pressure?',
 options:[
  {t:'It lowers trabecular outflow resistance by relaxing tone and reducing fibrosis-related protein deposits', correct:true, why:'Slide 41: lower trabecular outflow resistance by relaxing tone, decreasing fibrosis-related protein deposits and changing the permeability of cells lining Schlemm\'s canal. T@35676.'},
  {t:'It raises trabecular outflow resistance so the ciliary muscle must relax', correct:false, why:'Slide 41: outflow resistance is lowered, not raised.'},
  {t:'It reduces production of sodium and bicarbonate in the ciliary body', correct:false, why:'Slide 26: this is the effect of carbonic anhydrase inhibitors.'},
  {t:'It relaxes the ciliary muscle so uveoscleral outflow increases', correct:false, why:'Slide 37: this is the prostaglandin agonist effect; netarsudil acts on the meshwork and Schlemm\'s canal (slide 41).'}],
 teach:'Netarsudil: less stiff meshwork, lower outflow resistance. The lecture adds that this is not a muscular relaxation but fewer fibrotic-type proteins (T@35676).',
 cite:CITE('41','35676')},

{id:'EO-031', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-m3-vs-rock-meshwork',
 tags:['two-classes','two-facts','outflow'], source:'both',
 stem:'Pilocarpine and netarsudil both increase outflow through the trabecular meshwork. How do they differ?',
 options:[
  {t:'Pilocarpine reduces stiffness from fibrosis-related proteins; netarsudil contracts the meshwork through M3', correct:false, why:'Reversed. Pilocarpine acts at M3 (slide 32); netarsudil reduces fibrosis-related protein deposits (slide 41).'},
  {t:'Pilocarpine contracts the meshwork through M3; netarsudil makes it less stiff by inhibiting RhoA kinase', correct:true, why:'Slide 32 (M3 agonist; contraction opens the meshwork) and slide 41 (RhoA kinase inhibition lowers stiffness and outflow resistance).'},
  {t:'Pilocarpine acts on the uveoscleral route; netarsudil acts on the meshwork', correct:false, why:'Slide 32: pilocarpine acts on the meshwork.'},
  {t:'Pilocarpine increases production; netarsudil increases outflow', correct:false, why:'Slide 32: pilocarpine increases outflow; neither drug is described as raising production.'}],
 teach:'Same route, different mechanism: receptor-mediated contraction (M3 agonist) versus lower tone and fibrosis-related proteins (RhoA kinase inhibitor).',
 cite:CITE('41','35676')},

{id:'EO-032', skill:'patho', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-hyperemia-why',
 tags:['side-effect','mechanism','two-facts'], source:'both',
 stem:'A patient starting netarsudil develops red eyes. What explains this effect?',
 options:[
  {t:'Relaxation of vascular smooth muscle causes vasodilation, an extension of the drug\'s action', correct:true, why:'Slide 43: conjunctival hyperemia (53%), "an extension of the pharmacologic action, which causes vasodilation by relaxing vascular smooth muscle". T@36984.'},
  {t:'Contraction of vascular smooth muscle causes ischemia of the conjunctiva', correct:false, why:'Slide 43: the cause given is relaxation and vasodilation.'},
  {t:'An allergic-type reaction from the drug acting as an acetylcholinesterase inhibitor', correct:false, why:'Slide 41: netarsudil inhibits RhoA kinase; the allergic-type reaction belongs to echothiophate (T@29919).'},
  {t:'Increased nitric oxide release from a metabolite of the drug', correct:false, why:'Slide 38: the nitric oxide donor is latanoprostene bunod, not netarsudil.'}],
 teach:'The most common effect of netarsudil is conjunctival hyperemia (53%).',
 cite:CITE('43','36984')},

{id:'EO-033', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-hemorrhage',
 tags:['side-effect','reverse'], source:'both',
 stem:'A patient with glaucoma develops bloodshot eyes from conjunctival hemorrhage. Which drug is associated with this effect?',
 options:[
  {t:'Netarsudil', correct:true, why:'Slide 43 lists conjunctival hemorrhage among the other side effects (about 20%). T@37156: conjunctival hemorrhage is "always a little scary when you look in the mirror".'},
  {t:'Echothiophate', correct:false, why:'Slide 35: its effects are irritation, brow-ache, eyelid twitching and cataracts.'},
  {t:'Brinzolamide', correct:false, why:'Slides 28 and 29: brinzolamide is a carbonic anhydrase inhibitor; its notable effect is metabolic acidosis.'},
  {t:'Latanoprost', correct:false, why:'Slide 39: its effects are pigmentation, lash changes, hyperemia and few systemic effects, not conjunctival hemorrhage.'}],
 teach:'Slide 43, other side effects of netarsudil (about 20%): corneal verticillata, instillation site pain, conjunctival hemorrhage.',
 cite:CITE('43','37156')},

{id:'EO-034', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-verticillata',
 tags:['side-effect','reverse'], source:'slide',
 stem:'Corneal verticillata that did not change vision and resolved in most cases after the drug was stopped is seen with which class?',
 options:[
  {t:'Prostaglandin agonists', correct:false, why:'Slide 39: iris and eyelid pigmentation, lash changes and hyperemia; corneal verticillata is not listed.'},
  {t:'Alpha 2 agonists', correct:false, why:'Slide 24: foreign body sensation and pruritus; corneal verticillata is not listed.'},
  {t:'Rho kinase inhibitors', correct:true, why:'Slide 43: corneal verticillata; did not change vision; in most cases resolved upon drug discontinuation.'},
  {t:'Parasympathomimetics', correct:false, why:'Slides 33 and 35: ciliary spasm, blurred vision and, with echothiophate, cataracts; corneal verticillata is not listed.'}],
 teach:'Slide 43.',
 cite:CITE('43','37156')},

{id:'EO-035', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'rock', concept:'ey-rock-single-drug',
 tags:['class','outflow'], source:'both',
 stem:'A drug inhibits a GTP-binding protein that regulates cell shape, motility, proliferation and apoptosis, thereby lowering outflow resistance. Which drug is it?',
 options:[
  {t:'Brimonidine', correct:false, why:'Slide 22: an alpha 2 agonist that decreases aqueous humor production.'},
  {t:'Tafluprost', correct:false, why:'Slide 37: a prostaglandin agonist acting at the PGF2 alpha receptor.'},
  {t:'Carbachol', correct:false, why:'Slide 31: a direct-acting M3 agonist.'},
  {t:'Netarsudil', correct:true, why:'Slides 41–42: RhoA is a GTP-binding protein that regulates cell shape, motility, proliferation and apoptosis; netarsudil is the Rho kinase inhibitor. T@36700: "Our only real kinase inhibitor on our drug list."'}],
 teach:'Netarsudil is the one Rho kinase inhibitor on the drug list (T@36700).',
 cite:CITE('42','36700')},

{id:'EO-036', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-orange-netting',
 tags:['mechanism','reasoning','outflow'], source:'both',
 stem:'Why does contraction of the trabecular meshwork increase aqueous humor outflow?',
 options:[
  {t:'It thins the strands of the meshwork, which widens the openings between them', correct:true, why:'T@24723 and T@25250: the netting thickness shrinks, "opening up the spaces, allowing more aqueous humor to flow out"; slide 32.'},
  {t:'It squeezes the ciliary body away from the sclera, opening the uveoscleral space', correct:false, why:'T@31289: movement away from the sclera follows relaxation of the ciliary muscle (prostaglandin agonists).'},
  {t:'It closes the angle so aqueous humor is pushed into Schlemm\'s canal', correct:false, why:'Slide 13: closure of the angle is the mechanism of angle-closure glaucoma, which raises pressure.'},
  {t:'It reduces production so less aqueous humor must leave', correct:false, why:'Slide 32: the effect is increased outflow; production is the target of inflow drugs.'}],
 teach:'The meshwork is described as a net: when the strands thicken the openings are small; contraction thins them and widens the openings.',
 cite:CITE('32','24723')},

{id:'EO-037', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-outflow-pair',
 tags:['two-facts','combination','outflow'], source:'slide',
 stem:'Which combination product contains two drugs that both increase aqueous humor outflow?',
 options:[
  {t:'Timolol and brimonidine', correct:false, why:'Slides 18 and 22: timolol reduces production; brimonidine mainly decreases production with some uveoscleral outflow.'},
  {t:'Brinzolamide and brimonidine', correct:false, why:'Slides 26 and 22: brinzolamide decreases ciliary body secretion; brimonidine mainly decreases production.'},
  {t:'Latanoprost and netarsudil', correct:true, why:'Slides 37 and 41: latanoprost increases uveoscleral outflow and netarsudil lowers trabecular outflow resistance. Slide 45 lists the product.'},
  {t:'Timolol and dorzolamide', correct:false, why:'Slides 18 and 26: both decrease aqueous humor production.'}],
 teach:'Slide 45 lists timolol/dorzolamide, timolol/brimonidine, brinzolamide/brimonidine and latanoprost/netarsudil.',
 cite:CITE('45','37847')},

{id:'EO-038', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-bb-cai',
 tags:['combination','inflow'], source:'both',
 stem:'A combination eye drop contains timolol and dorzolamide. How does each component lower pressure?',
 options:[
  {t:'Timolol blocks beta receptors and dorzolamide inhibits carbonic anhydrase, both reducing aqueous production', correct:true, why:'Slide 18 (beta receptor blockade reduces aqueous production) and slide 26 (carbonic anhydrase inhibition decreases ciliary body secretion). Slide 45.'},
  {t:'Timolol blocks beta receptors to reduce production and dorzolamide relaxes the meshwork to increase outflow', correct:false, why:'Slide 26: dorzolamide acts on carbonic anhydrase to decrease secretion, not on the meshwork.'},
  {t:'Timolol stimulates M3 receptors and dorzolamide stimulates PGF2 alpha receptors', correct:false, why:'Slides 18 and 26: neither drug is an agonist; both act by blocking or inhibiting.'},
  {t:'Timolol increases uveoscleral outflow and dorzolamide reduces production', correct:false, why:'Slide 18: timolol has not much effect on outflow.'}],
 teach:'This combination adds two inflow mechanisms.',
 cite:CITE('45','37847')},

{id:'EO-039', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-why',
 tags:['combination','counseling'], source:'transcript',
 stem:'Why might a patient with progressing glaucoma be moved from two separate drops to a combination product?',
 options:[
  {t:'The combination avoids the need for a second pressure measurement', correct:false, why:'T@38391: the reason given is dosing convenience; no source mentions fewer measurements.'},
  {t:'The combination has a longer duration than either drug on its own', correct:false, why:'T@38391: duration is not the reason; the benefit is one product at 3 or 4 doses a day.'},
  {t:'One product with the chosen mechanisms is easier to dose than two products', correct:true, why:'T@38391: patients who must give both drugs 3 or 4 times a day find it easier to use one product with the mechanisms wanted; some have trouble getting drops in or remembering.'},
  {t:'The combination removes the systemic effects of each drug', correct:false, why:'No source says combination products remove systemic effects.'}],
 teach:'Glaucoma is usually started on one drug; if it progresses, mechanisms are added, and a combination makes dosing easier (T@38391).',
 cite:CITE('45','38391')},

{id:'EO-040', skill:'case', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-add-outflow',
 tags:['case','inflow','outflow'], source:'both',
 stem:'Pressure remains high on a timolol and dorzolamide product. The prescriber wants to add a drug that works by a different route, increasing outflow. Which choice does that?',
 options:[
  {t:'Brinzolamide', correct:false, why:'Slide 28: brinzolamide is a carbonic anhydrase inhibitor and decreases production, as dorzolamide does.'},
  {t:'Carteolol', correct:false, why:'Slide 19: carteolol is a beta receptor antagonist and decreases production, as timolol does.'},
  {t:'Acetazolamide', correct:false, why:'Slide 28: an oral carbonic anhydrase inhibitor that decreases production.'},
  {t:'Latanoprost', correct:true, why:'Slides 37–38: increases uveoscleral outflow and does not affect production, so it adds a different mechanism.'}],
 teach:'Timolol and dorzolamide both decrease production; latanoprost adds outflow.',
 cite:CITE('45','38391')},

{id:'EO-041', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-ltn-routes',
 tags:['combination','route','two-facts'], source:'both',
 stem:'Which routes of aqueous humor outflow does the combination of latanoprost and netarsudil address?',
 options:[
  {t:'The uveoscleral route and the trabecular meshwork route', correct:true, why:'Slide 37 and T@31289 (latanoprost: uveoscleral) and slide 41 (netarsudil: trabecular outflow resistance). Slide 45.'},
  {t:'The trabecular meshwork route twice, by contraction and by relaxation', correct:false, why:'Latanoprost acts mainly on the uveoscleral route (slide 37; the slide adds a lesser trabecular effect, the transcript says not so much).'},
  {t:'The uveoscleral route and a reduction of aqueous production', correct:false, why:'Slide 41: netarsudil acts on outflow, not production.'},
  {t:'The lacrimal route and the trabecular meshwork route', correct:false, why:'Slide 5: the lacrimal route drains tears.'}],
 teach:'One drug in the combination opens the uveoscleral route and the other lowers resistance in the meshwork.',
 cite:CITE('45','31289')},

{id:'EO-042', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-ltn-ae',
 tags:['combination','side-effect','two-facts'], source:'slide',
 stem:'Which pair of adverse effects is expected from the combination of latanoprost and netarsudil?',
 options:[
  {t:'Salivation and painful ciliary spasm', correct:false, why:'Slide 33: effects of the M3 agonists.'},
  {t:'Metabolic acidosis and brow ache', correct:false, why:'Slide 29 (acidosis: carbonic anhydrase inhibitors) and slide 35 (brow-ache: echothiophate).'},
  {t:'Oral dryness and fatigue', correct:false, why:'Slide 24: systemic effects of brimonidine.'},
  {t:'Brown pigmentation of the iris and conjunctival hyperemia', correct:true, why:'Slide 39 (latanoprost: increased brown pigmentation of iris and eyelids) and slide 43 (netarsudil: conjunctival hyperemia 53%).'}],
 teach:'A combination carries the adverse effects of each component.',
 cite:CITE('45','36856')},

{id:'EO-043', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-brz-bri',
 tags:['combination','inflow'], source:'both',
 stem:'Which effect do the components of the brinzolamide and brimonidine combination share?',
 options:[
  {t:'Contraction of the trabecular meshwork', correct:false, why:'Slide 32: contraction of the meshwork is the M3 agonist effect.'},
  {t:'Relaxation of the ciliary muscle', correct:false, why:'Slide 37: relaxation of the ciliary muscle is the prostaglandin agonist effect.'},
  {t:'Reduced fibrosis-related proteins in the meshwork', correct:false, why:'Slide 41: netarsudil.'},
  {t:'Decreased aqueous humor production by the ciliary body', correct:true, why:'Slide 26 (brinzolamide, a carbonic anhydrase inhibitor: decreased secretion) and slide 22 (brimonidine: decreased production, plus some uveoscleral outflow).'}],
 teach:'Slide 45 lists brinzolamide/brimonidine; both components lower production.',
 cite:CITE('45','37847')},

{id:'EO-044', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'combo', concept:'ey-combo-bb-bri',
 tags:['combination','class'], source:'slide',
 stem:'Which combination product pairs a beta receptor antagonist with an alpha 2 agonist?',
 options:[
  {t:'Timolol and brimonidine', correct:true, why:'Slide 45; timolol is a beta receptor antagonist (slide 19) and brimonidine an alpha 2 agonist (slide 23).'},
  {t:'Timolol and dorzolamide', correct:false, why:'Slide 45: timolol with a carbonic anhydrase inhibitor.'},
  {t:'Brinzolamide and brimonidine', correct:false, why:'Slide 45: a carbonic anhydrase inhibitor with an alpha 2 agonist.'},
  {t:'Latanoprost and netarsudil', correct:false, why:'Slide 45: a prostaglandin agonist with a Rho kinase inhibitor.'}],
 teach:'Slide 45: timolol/dorzolamide, timolol/brimonidine, brinzolamide/brimonidine, latanoprost/netarsudil.',
 cite:CITE('45','37847')},

{id:'EO-045', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-vs-pg-ciliary-effect',
 tags:['two-classes','outflow','side-effect'], source:'both',
 stem:'A patient on one outflow drug has painful ciliary spasm, and a patient on another has darkening of the iris. Which pair of drugs fits, in that order?',
 options:[
  {t:'Latanoprost, then carbachol', correct:false, why:'Reversed: ciliary spasm is the M3 agonist effect (slide 33), iris darkening the prostaglandin agonist effect (slide 39).'},
  {t:'Carbachol, then latanoprost', correct:true, why:'Slide 33 (painful ciliary muscle spasm with M3 agonists) and slide 39 (increased brown pigmentation of the iris with prostaglandin agonists).'},
  {t:'Netarsudil, then pilocarpine', correct:false, why:'Slide 43 and slide 33: netarsudil causes hyperemia, not ciliary spasm, and pilocarpine does not darken the iris.'},
  {t:'Echothiophate, then netarsudil', correct:false, why:'Slide 35: echothiophate can cause brow-ache; slide 43: netarsudil does not darken the iris.'}],
 teach:'Ciliary spasm follows contraction of the ciliary muscle; iris pigmentation follows PGF2 alpha receptor stimulation.',
 cite:CITE('39','33811')},

{id:'EO-046', skill:'class', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-out-class-names',
 tags:['class','outflow'], source:'both',
 stem:'Which set lists only drugs that increase aqueous humor outflow?',
 options:[
  {t:'Pilocarpine, netarsudil and tafluprost', correct:true, why:'Slides 32, 41 and 37: M3 agonist, Rho kinase inhibitor and prostaglandin agonist; all three increase outflow (T@23579 begins "drugs that increase outflow").'},
  {t:'Carbachol, timolol and bimatoprost', correct:false, why:'Slide 18: timolol reduces aqueous production.'},
  {t:'Echothiophate, travoprost and dorzolamide', correct:false, why:'Slide 26: dorzolamide decreases ciliary body secretion.'},
  {t:'Netarsudil, latanoprost and apraclonidine', correct:false, why:'Slide 22: apraclonidine, an alpha 2 agonist, decreases aqueous production.'}],
 teach:'Increase outflow: parasympathomimetics, prostaglandin agonists, Rho kinase inhibitor. Decrease inflow: beta receptor antagonists, alpha 2 agonists, carbonic anhydrase inhibitors.',
 cite:CITE('30','23579')},

{id:'EO-047', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-vs-m3-agonist',
 tags:['two-classes','mechanism'], source:'both',
 stem:'Carbachol and echothiophate both contract the trabecular meshwork. Which statement describes how they reach that effect?',
 options:[
  {t:'Carbachol acts like acetylcholine at M3; echothiophate raises acetylcholine by irreversible enzyme inhibition', correct:true, why:'T@23726: M3 agonists act like acetylcholine; acetylcholinesterase inhibitors increase acetylcholine by inhibiting the enzyme that breaks it down; slides 31, 32 and 34.'},
  {t:'Carbachol raises acetylcholine by enzyme inhibition; echothiophate acts like acetylcholine at M3', correct:false, why:'Reversed; slide 31 labels carbachol direct acting and echothiophate indirect acting.'},
  {t:'Both act directly at M3, and echothiophate binds irreversibly', correct:false, why:'Slide 34: echothiophate inhibits an enzyme; it does not bind M3 itself.'},
  {t:'Both inhibit acetylcholinesterase, and carbachol does so reversibly', correct:false, why:'Slide 31: carbachol is a direct M3 agonist.'}],
 teach:'Direct acting (M3 agonists) versus indirect acting (acetylcholinesterase inhibitor).',
 cite:CITE('34','23726')},

{id:'EO-048', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-vs-m3-ae',
 tags:['two-facts','side-effect','tell-apart'], source:'both',
 stem:'Which adverse effect occurs with echothiophate but not with the M3 agonists carbachol and pilocarpine?',
 options:[
  {t:'Salivation', correct:false, why:'Slides 33 and 35: listed for both.'},
  {t:'Cataracts', correct:true, why:'Slide 35 lists cataracts for the acetylcholinesterase inhibitor; slide 33 does not list it for the M3 agonists. T@29697.'},
  {t:'Painful ciliary spasm', correct:false, why:'Slide 33 lists it for the M3 agonists.'},
  {t:'Blurred vision', correct:false, why:'Slides 33 and 35: listed for both.'}],
 teach:'Shared: burning and stinging, blurred vision, diarrhea, salivation, sweating, rhinorrhea. Echothiophate adds cataracts (and brow-ache and eyelid twitching).',
 cite:CITE('35','29697')},

{id:'EO-049', skill:'adverse', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-m3-dim-light',
 tags:['side-effect','reverse'], source:'slide',
 stem:'A patient on a glaucoma drop reports blurred vision, myopia, poor vision in dim light and more visible floaters. Which class is the likely cause?',
 options:[
  {t:'Direct M3 agonists', correct:true, why:'Slide 33: blurred vision, myopia, poor vision in dim light, increased visibility of floaters and lacrimation.'},
  {t:'Prostaglandin agonists', correct:false, why:'Slide 39: blurred vision is listed, but not myopia, poor dim light vision or floaters.'},
  {t:'Rho kinase inhibitors', correct:false, why:'Slide 43: hyperemia, verticillata, pain and hemorrhage.'},
  {t:'Beta receptor antagonists', correct:false, why:'Slide 20: decreased night vision is listed, but myopia and floaters are not.'}],
 teach:'Slide 33 lists the ocular effects of M3 agonists.',
 cite:CITE('33','28537')},

{id:'EO-050', skill:'patho', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-spaces',
 tags:['mechanism','pathophysiology'], source:'transcript',
 stem:'Between which two structures does the uveoscleral outflow that prostaglandin agonists increase pass?',
 options:[
  {t:'The iris and the lens', correct:false, why:'T@31289: the space opened is between the ciliary body and the sclera.'},
  {t:'The cornea and the iris', correct:false, why:'T@31289: the space is between the ciliary body and the sclera.'},
  {t:'The sclera and the retina', correct:false, why:'T@31289: the ciliary body, not the retina, borders the opened space.'},
  {t:'The ciliary body and the sclera', correct:true, why:'T@31289: "That space between the ciliary body and the sclera opens up ... aqueous humor flowing out through that space. That\'s not our major outflow route."'}],
 teach:'Relaxing the ciliary muscle moves it away from the sclera and widens the uveoscleral space; the lecture calls this a minor route that can still be helped.',
 cite:CITE('37','31289')},

{id:'EO-051', skill:'case', prof:'Smith', tier:'new', topic:'ey-out', sub:'m3', concept:'ey-case-sweating',
 tags:['case','side-effect','two-facts'], source:'both',
 stem:'A patient reports that a new glaucoma drop makes the eyes burn, and she now also has watery diarrhea, drooling and a runny nose. Which class explains both?',
 options:[
  {t:'Prostaglandin agonists', correct:false, why:'Slide 39: few systemic side effects; diarrhea and salivation are not listed.'},
  {t:'Parasympathomimetics', correct:true, why:'Slides 33 and 35: burning and stinging plus diarrhea, salivation, sweating and rhinorrhea; T@28697.'},
  {t:'Alpha 2 agonists', correct:false, why:'Slide 24: oral dryness, not drooling, is the systemic effect.'},
  {t:'Rho kinase inhibitors', correct:false, why:'Slide 43: hyperemia, verticillata, pain and hemorrhage; no diarrhea or salivation.'}],
 teach:'Parasympathomimetics mimic acetylcholine, so their systemic absorption gives cholinergic effects.',
 cite:CITE('33','28697')},

{id:'EO-052', skill:'tell', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-two-class-which-mech',
 tags:['two-classes','mechanism','outflow'], source:'both',
 stem:'Netarsudil and tafluprost both lower intraocular pressure by increasing outflow. Which statement pairs each drug with its mechanism?',
 options:[
  {t:'Netarsudil relaxes the ciliary muscle; tafluprost inhibits RhoA kinase', correct:false, why:'Reversed. Slide 41 (netarsudil: RhoA kinase) and slide 37 (prostaglandin agonist: ciliary muscle relaxation).'},
  {t:'Netarsudil stimulates M3 receptors; tafluprost stimulates PGF2 alpha receptors', correct:false, why:'Slide 41: netarsudil inhibits RhoA kinase and does not stimulate M3.'},
  {t:'Netarsudil inhibits RhoA kinase; tafluprost stimulates PGF2 alpha receptors', correct:true, why:'Slides 41 and 37: Rho kinase inhibitor lowering meshwork stiffness; prostaglandin agonist relaxing the ciliary muscle.'},
  {t:'Netarsudil inhibits acetylcholinesterase; tafluprost inhibits RhoA kinase', correct:false, why:'Slide 34 (acetylcholinesterase: echothiophate) and slide 41 (RhoA kinase: netarsudil).'}],
 teach:'Each outflow class has its own target: M3 or acetylcholinesterase, PGF2 alpha receptor, RhoA kinase.',
 cite:CITE('37','31096')},

{id:'EO-053', skill:'epi', prof:'Smith', tier:'new', topic:'ey-out', sub:'pg', concept:'ey-pg-hair-growth',
 tags:['side-effect','counseling'], source:'both',
 stem:'A patient starting a prostaglandin agonist for glaucoma asks about changes to expect. Which statement describes the effects listed for the class?',
 options:[
  {t:'Thickening and darkening of eyelashes, and hair growth in other areas', correct:true, why:'Slide 39: hypertrichosis and hyperpigmentation of lashes; hair growth in other areas. T@34161.'},
  {t:'Thinning of the eyelashes and loss of lid hair', correct:false, why:'Slide 39 lists hypertrichosis (more hair), not loss.'},
  {t:'Lightening of the iris toward blue or green', correct:false, why:'Slide 39: increased brown pigmentation of the iris.'},
  {t:'Eyelid swelling without any change in lashes', correct:false, why:'Slide 39 lists lid edema, but also the lash changes.'}],
 teach:'Prostaglandin agonists: darker iris and eyelids, lash hypertrichosis, hair growth elsewhere, few systemic effects.',
 cite:CITE('39','34161')},

{id:'EO-054', skill:'mech', prof:'Smith', tier:'new', topic:'ey-out', sub:'ache', concept:'ey-ache-vs-pg-direction',
 tags:['two-classes','two-facts','mechanism'], source:'both',
 stem:'A student states that every drug that increases outflow acts by contracting a muscle. Which drug contradicts this?',
 options:[
  {t:'Pilocarpine, because it relaxes the sphincter muscle', correct:false, why:'Slide 32: pilocarpine contracts the muscle and meshwork.'},
  {t:'Echothiophate, because it blocks M3 receptors', correct:false, why:'Slide 34: echothiophate increases acetylcholine and contracts the meshwork.'},
  {t:'Latanoprost, because it relaxes the ciliary muscle', correct:true, why:'Slide 37 and T@31096: PGF2 alpha receptor agonism relaxes the ciliary muscle and opens the uveoscleral route.'},
  {t:'Carbachol, because it reduces aqueous humor production', correct:false, why:'Slide 32: carbachol increases outflow.'}],
 teach:'Parasympathomimetics contract; prostaglandin agonists relax; the Rho kinase inhibitor reduces meshwork stiffness.',
 cite:CITE('37','31096')}
);
})();
