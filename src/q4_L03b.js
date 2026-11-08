/* ==========================================================================
   Lecture 3, second half (Dr. Sikazwe, medicinal chemistry, Tuesday 11/03/2026).
   Source: f26-DEENT-DPAW-mc.pdf, PDF pages 1-26 ("slide N" below is the PDF
   page; from p.23 on the printed slide number is one lower), with the lecture
   transcript (T, line numbers of DEENT_11_03_Lecture_Only_Transcript.txt,
   lines 588-1196). The recording ends mid-sentence on p.26; the two sentences
   that finish p.26 on 11/04 are cited as "11/04 transcript @offset" (byte
   offset in DEENT_Lecture_11.04_transcript.txt).
   Left out on purpose (he said so in class): the eczema risk-factor wheel
   (slide 5, T 655-656), mechanisms of action as such (T 680-682), the JAK
   inhibitor chemical class names (T 730-732), the structures of the
   hydrocortisone derivatives (T 1152-1154). Held out as conflicts (see the
   notes file): visible-light range, the UVB upper limit, 11beta-HSD
   reversibility, the C-15/C-16 numbering exercise, and the "smaller
   percentage means more potent" rule.
   ========================================================================== */
TOPICS.push(
 {id:'s3-frame', name:'Objectives: PPCP, chemical class, interactions', prof:'Sikazwe',
  cite:'slide 3 (not on his assigned slides) · taught 11/03 (Lecture 3)',
  subs:[
   {id:'plan', name:'Chemical class and CYP interactions in the plan', cite:'slide 3'}]},
 {id:'s3-cris', name:'Eczema pharmacotherapy: crisaborole, a soft drug', prof:'Sikazwe',
  cite:'slides 7, 9 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'chem', name:'Benzoxaborole and soft drug', cite:'slide 7'},
   {id:'adme', name:'Log P, half-life, deboronation, two enzymes', cite:'slide 7'},
   {id:'poll', name:'Polleve-1: phase 2 steps', cite:'slide 9'},
   {id:'cbda', name:'Boron binding Zn and Mg in PDE4', cite:'slide 7'}]},
 {id:'s3-jak', name:'Eczema pharmacotherapy: ruxolitinib and upadacitinib', prof:'Sikazwe',
  cite:'slide 8 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'chem', name:'Chemical class and formulation', cite:'slide 8'},
   {id:'adme', name:'Half-life, CYP3A4, active metabolites', cite:'slide 8'}]},
 {id:'s3-uv', name:'Psoriasis: UV radiation and terms', prof:'Sikazwe',
  cite:'slide 12 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'uvr',   name:'UVA, UVB, UVC and ozone', cite:'slide 12'},
   {id:'terms', name:'PUVA and antimetabolite', cite:'slide 12'}]},
 {id:'s3-pso', name:'Psoriasis pharmacotherapy: topical and systemic agents', prof:'Sikazwe',
  cite:'slide 14 (not on his assigned slides) · taught 11/03 (Lecture 3)',
  subs:[
   {id:'drugs', name:'Topical and systemic agents', cite:'slide 14'}]},
 {id:'s3-emol', name:'Psoriasis topical agents: emollients and tars', prof:'Sikazwe',
  cite:'slides 15–16 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'emol', name:'Petrolatum, lanolin, silicones', cite:'slide 15'},
   {id:'tar',  name:'Coal, shale and wood tars', cite:'slide 16'}]},
 {id:'s3-anth', name:'Psoriasis topical agents: anthralin', prof:'Sikazwe',
  cite:'slides 17, 19 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'chem', name:'Hydroxyanthrone, formulations, log P', cite:'slide 17'},
   {id:'cbda', name:'Autoxidation radicals and staining', cite:'slide 17'}]},
 {id:'s3-psor', name:'Psoriasis topical agents: psoralens (8-MOP)', prof:'Sikazwe',
  cite:'slides 18–19 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'chem', name:'Furanocoumarin and CYP3A4', cite:'slide 18'},
   {id:'cbda', name:'DNA intercalation with UVA', cite:'slide 18'},
   {id:'poll', name:'Polleve-2: autoxidation', cite:'slide 19'}]},
 {id:'s3-gc', name:'Psoriasis topical agents: glucocorticoid structure and SAR', prof:'Sikazwe',
  cite:'slides 20–23 · taught 11/03 (Lecture 3)',
  subs:[
   {id:'struct', name:'Steroid skeleton and alpha/beta faces', cite:'slide 20'},
   {id:'num',    name:'Carbon numbering', cite:'slides 20–22'},
   {id:'sar',    name:'The four SAR features', cite:'slide 20'},
   {id:'gr',     name:'Hydrogen bonds in the receptor', cite:'slide 23'}]},
 {id:'s3-hc', name:'Psoriasis topical agents: hydrocortisone, derivatives, potency', prof:'Sikazwe',
  cite:'slides 24–26 (slide 24 not on his assigned slides) · taught 11/03 (Lecture 3)',
  subs:[
   {id:'deriv', name:'Reference molecule and derivatives', cite:'slide 24'},
   {id:'pot',   name:'Potency ranking', cite:'slide 25'},
   {id:'adme',  name:'Hydrocortisone ADME and 11β-HSD', cite:'slide 26'}]}
);

const S3 = 'Lecture 3 (f26-DEENT-DPAW-mc.pdf)';

QUESTIONS.push(
/* ---- Framing: skin, PPCP, chemical class ------------------------------- */
{id:'S3-001', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'skin', concept:'skin-functions', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which are functions of the skin? Select all that apply.',
 options:[
  {t:'Physical barrier', correct:true, why:'First function on slide 2; (T 609).'},
  {t:'Body temperature regulation', correct:true, why:'Slide 2; (T 609) "Body temperature regulation, it does that."'},
  {t:'Sensory organ', correct:true, why:'Slide 2; (T 611) "it\'s a sensory organ."'},
  {t:'Elimination', correct:true, why:'Slide 2; "It\'s an elimination organ" (T 611).'},
  {t:'Production of red blood cells', correct:false, why:'Not a skin function on slide 2; the slide lists barrier, temperature, nutrients, sensation and elimination.'},
  {t:'Bile acid secretion', correct:false, why:'Not a skin function on slide 2.'}],
 teach:'Slide 2: physical barrier, body temperature regulation, synthesis and storage of nutrients, sensory organ and elimination. He called the skin the largest organ and asked the class to respect what it does while so many chemicals are applied to it (T 606–613). Vitamin D3 synthesis in skin is the assigned reading (slide 2).',
 cite:S3+' slide 2; T 606–613'},

{id:'S3-002', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-frame', sub:'plan', concept:'chem-class-allergy',
 tags:['reasoning'], source:'transcript',
 stem:'When planning drug therapy, why does the chemical class of a drug matter?',
 options:[
  {t:'It flags allergy cross-reactivity', correct:true, why:'(T 622–624) A sulfur drug for a sulfur-allergic patient "is a problem", so chemical classes become a consideration.'},
  {t:'It sets the pharmacological target', correct:false, why:'The target is the pharmacological class (Dr. Smith\'s material, T 620–621); two JAK inhibitors share a target yet differ in chemical class (slide 8).'},
  {t:'It decides the brand name', correct:false, why:'Brand names play no part in his PPCP framing (slide 3).'},
  {t:'It fixes the dosing interval', correct:false, why:'Dosing follows half-life, an ADMET property (for example slide 8), not the chemical class itself.'}],
 teach:'In the PPCP he places chemical class under Assess and the chemical basis of drug action (CBDA), ADMET, SAR and drug interactions under Plan (slide 3; T 613–632). Chemical class matters in the plan because a patient allergic to one class should not get another drug of that class (T 622–624).',
 cite:S3+' slide 3; T 613–632'},

{id:'S3-003', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-frame', sub:'plan', concept:'cyp-watch',
 tags:['interaction'], source:'transcript',
 stem:'A drug depends on CYP3A4 or CYP2D6 for its metabolism. What should the plan check for?',
 options:[
  {t:'Drugs that inhibit or induce that enzyme', correct:true, why:'(T 630–632) "wherever you see 3A4 as a requirement or 2D6 as a requirement ... you don\'t want to hinder those or enhance those enzymes."'},
  {t:'Drugs that are glucuronidated by UGT', correct:false, why:'Glucuronidation is a phase 2 step by UGT (slide 9), not the CYP requirement he warned about.'},
  {t:'Drugs that belong to the same chemical class', correct:false, why:'Same chemical class matters for allergy (T 622–624), not for a CYP requirement.'},
  {t:'Drugs that bind PDE4 in the skin', correct:false, why:'PDE4 is crisaborole\'s target (slide 7), not a metabolizing enzyme.'}],
 teach:'An inhibitor of the required CYP raises exposure and an inducer lowers it; for the JAK inhibitors he said both can change the half-life (T 745–749). He applied the rule to ruxolitinib and upadacitinib (3A4 substrates, slide 8) and to methoxsalen (a partial 3A4 inhibitor, slide 18).',
 cite:S3+' slides 8, 18; T 630–632, 745–749'},

/* ---- Eczema -------------------------------------------------------------- */
{id:'S3-004', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'ecz', concept:'eczema-components', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which are the major druggable components of atopic eczema? Select all that apply.',
 options:[
  {t:'Immune response', correct:true, why:'Slide 4; (T 640–642) "there\'s an immune response to it".'},
  {t:'Inflammation', correct:true, why:'Slide 4; (T 642) "There\'s a whole lot of inflammation."'},
  {t:'Keratinocyte hyperproliferation', correct:false, why:'A major component of psoriasis (slide 13), not of eczema on slide 4.'},
  {t:'Excess sebum production', correct:false, why:'Not a druggable component of eczema on slide 4.'}],
 teach:'Slide 4: the major druggable components of eczema are the immune response and inflammation, so the treatment goals are to suppress the immune response and suppress inflammation. That is why anti-inflammatory agents and immunosuppressants are used (T 640–646). Of the seven versions of eczema on the slide, atopic eczema is the focus (T 636–637).',
 cite:S3+' slides 4, 13; T 636–646'},

{id:'S3-005', skill:'tell', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'ecz', concept:'goals-ecz-vs-pso', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['tell'], source:'both',
 stem:'Which treatment goal applies to psoriasis but not to eczema?',
 options:[
  {t:'Normalize cell proliferation', correct:true, why:'Slide 13: psoriasis carries keratinocyte hyperproliferation, so its first goal is to normalize cell proliferation (T 842–850).'},
  {t:'Suppress inflammation', correct:false, why:'A goal for both eczema (slide 4) and psoriasis (slide 13).'},
  {t:'Suppress the immune response', correct:false, why:'A goal for both eczema (slide 4) and psoriasis (slide 13).'},
  {t:'Prevent skin water loss', correct:false, why:'That is what an emollient does (slide 15); it is not one of the treatment goals on slides 4 or 13.'}],
 teach:'Eczema (slide 4): immune response and inflammation, so suppress both. Psoriasis (slide 13): keratinocyte hyperproliferation, inflammation and an autoimmune response, so normalize proliferation and suppress both inflammation and the immune response. The extra component explains the antiproliferative agents (tars, anthralin, psoralens) in the psoriasis list.',
 cite:S3+' slides 4, 13; T 640–646, 842–850'},

{id:'S3-006', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'ecz', concept:'eczema-drug-list', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which drugs are used for eczema? Select all that apply.',
 options:[
  {t:'Crisaborole', correct:true, why:'Slide 6; one of the two he emphasized (T 660).'},
  {t:'Ruxolitinib', correct:true, why:'Slide 6; one of the "-tinib" drugs he emphasized (T 660–662).'},
  {t:'Upadacitinib', correct:true, why:'Slide 6; the other "-tinib" drug (T 660–662).'},
  {t:'Tacrolimus', correct:true, why:'Slide 6 lists tacrolimus and pimecrolimus.'},
  {t:'Methotrexate', correct:false, why:'A systemic non-biological for psoriasis (slide 14), not on the eczema list on slide 6.'},
  {t:'Methoxsalen', correct:false, why:'A psoralen used with UVA for psoriasis (slides 14, 18).'}],
 teach:'Slide 6: steroids (low to medium potency), crisaborole, pimecrolimus, tacrolimus, dupilumab, ruxolitinib and upadacitinib. For eczema he emphasized crisaborole and the "-tinib" drugs (T 660–662); some of the others return under psoriasis (T 662–664).',
 cite:S3+' slides 6, 14, 17–18; T 658–664'},

{id:'S3-007', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'ecz', concept:'eczema-steroid-potency', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['recall'], source:'slide',
 stem:'Which topical steroid potency range is used for eczema?',
 options:[
  {t:'Low to medium potency', correct:true, why:'Slide 6: "Steroids (low to medium potency)".'},
  {t:'Super-potent class', correct:false, why:'Super-potent is the top class (clobetasol propionate, slide 25), not the eczema range on slide 6.'},
  {t:'Potent to super-potent', correct:false, why:'Above the range on slide 6.'},
  {t:'Mineralocorticoid strength', correct:false, why:'Mineralocorticoids are the other adrenal steroid group (T 984–985), not a potency class.'}],
 teach:'Potency classes run super-potent, potent, medium and low (slide 25). For eczema the deck lists steroids of low to medium potency (slide 6).',
 cite:S3+' slides 6, 25; T 984–985'},

/* ---- Crisaborole --------------------------------------------------------- */
{id:'S3-008', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'chem', concept:'crisaborole-class',
 tags:['class'], source:'both',
 stem:'Crisaborole belongs to which chemical class?',
 options:[
  {t:'Benzoxaborole', correct:true, why:'Slide 7: "Crisaborole: A benzoxaborole soft drug"; a boron-based drug molecule (T 683–689).'},
  {t:'Hydroxyanthrone', correct:false, why:'The class of anthralin (slide 17).'},
  {t:'Furanocoumarin', correct:false, why:'The class of the psoralens such as 8-MOP (slide 18).'},
  {t:'Steroid', correct:false, why:'The class of the glucocorticoids: three six-membered rings and one five-membered ring fused together (slide 20; T 990–995).'}],
 teach:'Crisaborole carries a boron atom in a five-membered oxaborole ring fused to a benzene ring, hence benzoxaborole (slide 7 structure). Very few drugs contain boron (T 683); household boron compounds are borax and boric acid (T 685–686).',
 cite:S3+' slides 7–8, 17–18; T 683–689'},

{id:'S3-009', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'chem', concept:'crisaborole-boron',
 tags:['recall'], source:'both',
 stem:'Which element sets crisaborole apart from most drug molecules?',
 options:[
  {t:'Boron', correct:true, why:'"this is a boron bearing molecule. Very few drugs have boron in them" (T 683); slide 7.'},
  {t:'Silicon', correct:false, why:'Silicon appears in the silicone emollients dimethicone and cyclomethicone (slide 15).'},
  {t:'Fluorine', correct:false, why:'Fluorine is the halogen in many glucocorticoid derivatives (slides 20, 24), not crisaborole\'s distinguishing atom.'},
  {t:'Sulfur', correct:false, why:'He used sulfur drugs as his allergy example (T 623), not crisaborole.'}],
 teach:'Crisaborole is a boron-bearing drug (slide 7). Borax (a cleaning agent) and boric acid (used to kill roaches) are household boron compounds (T 685–686). The boron is the part that binds the PDE4 active-site metals, and losing it inactivates the drug (slide 7; T 699–719).',
 cite:S3+' slides 7, 15, 20; T 683–689'},

{id:'S3-010', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'chem', concept:'soft-drug',
 tags:['definition'], source:'both',
 stem:'Crisaborole is designed as a soft drug. What does that mean?',
 options:[
  {t:'Predictable metabolism to inactive products', correct:true, why:'(T 665–668) "a drug that is designed to undergo predictable metabolism ... it will be inactivated and it will go out harmless"; slide 7.'},
  {t:'No metabolism; it leaves the body unchanged', correct:false, why:'That describes a hard drug (T 668–669).'},
  {t:'Liver metabolism needed to become active', correct:false, why:'That describes a prodrug; crisaborole is active as given and binds PDE4 intact (T 788–791).'},
  {t:'Low abuse potential compared with hard drugs', correct:false, why:'He set the street meaning of "hard drugs" aside: here the terms are about metabolism (T 669–672).'}],
 teach:'Soft drug: designed to undergo predictable metabolism to inactive, harmless products. For crisaborole every step is predictable: spontaneous deboronation, then two dehydrogenases to the acid, then phase 2 conjugation, "hence, soft drug" (slide 7; T 699–711).',
 cite:S3+' slide 7; T 664–672, 699–711, 788–791'},

{id:'S3-011', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'chem', concept:'hard-drug',
 tags:['definition'], source:'transcript',
 stem:'In medicinal chemistry, what is a hard drug?',
 options:[
  {t:'A drug that does not undergo metabolism', correct:true, why:'(T 668–669) "a hard drug doesn\'t go what? Metabolism."'},
  {t:'A drug with predictable metabolism', correct:false, why:'That is the soft drug (T 665–668).'},
  {t:'A drug with a high potential for drug abuse', correct:false, why:'The street meaning, which he set aside (T 669–671).'},
  {t:'A drug with a boron functional group', correct:false, why:'Boron marks crisaborole, which is a soft drug (slide 7).'}],
 teach:'Hard drug: not metabolized. Soft drug: designed for predictable metabolism to inactive products (T 665–672). Crisaborole is his example of a soft drug (slide 7).',
 cite:S3+' slide 7; T 665–672'},

{id:'S3-012', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'crisaborole-logp',
 tags:['adme'], source:'both',
 stem:'Crisaborole has a log P of about 3. Where does topically applied crisaborole end up?',
 options:[
  {t:'It accumulates in the skin', correct:true, why:'Slide 7: "LogP = 3 (dermis accumulation)"; (T 695–696) "It accumulates in the skin itself."'},
  {t:'It passes through skin into the blood', correct:false, why:'Lipophilic enough in principle, but "it doesn\'t ... go through skin" (T 690–691).'},
  {t:'It stays on the surface of the skin', correct:false, why:'It enters the skin and accumulates there (slide 7; T 695).'},
  {t:'It is trapped in sebum in the follicle', correct:false, why:'He described accumulation in the skin, not in sebum (T 695–699).'}],
 teach:'A log P of 3 is lipophilic enough to suggest it might cross the skin, but the stratum corneum is cells stacked in layers that are hard for a molecule to get through, so crisaborole stays and accumulates in the skin, where the cytokines are formed (T 690–696). Deboronation in the skin then limits systemic exposure (slide 7).',
 cite:S3+' slide 7; T 689–699'},

{id:'S3-013', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'crisaborole-thalf',
 tags:['number'], source:'both',
 stem:'What is the half-life of crisaborole?',
 options:[
  {t:'About 12 hours', correct:true, why:'Slide 7: t1/2 = 12 h; he suggested "maybe application once a day" (T 697).'},
  {t:'About 3 hours', correct:false, why:'The half-life of ruxolitinib (slide 8).'},
  {t:'About 1 to 2 hours', correct:false, why:'The half-life of hydrocortisone (slide 26).'},
  {t:'About 8 to 16 hours', correct:false, why:'The half-life of upadacitinib (slide 8).'}],
 teach:'Slide 7 lists crisaborole with log P 3 and t1/2 12 h. Half-lives in this lecture: crisaborole 12 h (slide 7), ruxolitinib 3 h and upadacitinib 8–16 h (slide 8), hydrocortisone 1–2 h (slide 26).',
 cite:S3+' slides 7–8, 26; T 696–698'},

{id:'S3-014', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'deboronation',
 tags:['metabolism'], source:'both',
 stem:'How is the boron removed from crisaborole in the skin?',
 options:[
  {t:'Spontaneous hydrolysis, no enzyme', correct:true, why:'(T 699–702) "hydrolytic deboronation ... That step is not enzymatic. Spontaneous, just in the presence of water in skin"; slide 7.'},
  {t:'CYP3A4 oxidation in the dermis', correct:false, why:'No CYP acts in this step; it is non-enzymatic (T 700–701). 3A4 matters for the JAK inhibitors (slide 8).'},
  {t:'PDE4 cleavage in the active site', correct:false, why:'PDE4 is the target, not the cause of deboronation (T 727).'},
  {t:'UGT conjugation of the boron atom', correct:false, why:'UGT forms glucuronides in phase 2 (slide 9), after deboronation.'}],
 teach:'Step 1 of crisaborole\'s metabolism is hydrolytic deboronation: water in the skin breaks off the boron spontaneously, giving a benzyl alcohol product (slide 7; T 699–704). He answered a student: "Non-enzymatic is spontaneous. No, phosphodiesterase 4 is the target" (T 727).',
 cite:S3+' slides 7, 9; T 698–704, 723–729'},

{id:'S3-015', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'two-enzymes-count',
 tags:['number','metabolism'], source:'both',
 stem:'How many enzymes convert crisaborole\'s benzyl alcohol product into the benzoic acid?',
 options:[
  {t:'Two', correct:true, why:'(T 706–709) "How many enzymes? 2 ... Not 3, not 4, not sips, 2 enzymes."'},
  {t:'One', correct:false, why:'Alcohol to carboxylic acid takes two steps, each with its own enzyme (T 707–708).'},
  {t:'Three', correct:false, why:'"Not 3" (T 708); alcohol to acid is two oxidations.'},
  {t:'Four', correct:false, why:'"not 4, not sips" (T 708–709).'}],
 teach:'Benzyl alcohol is oxidized to the aldehyde by alcohol dehydrogenase and the aldehyde to benzoic acid by aldehyde dehydrogenase: two enzymes, no CYPs (T 705–709; slide 7, the "??" arrow).',
 cite:S3+' slide 7; T 704–711'},

{id:'S3-016', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'two-enzymes-names',
 tags:['metabolism'], source:'both',
 stem:'Which enzymes turn crisaborole\'s benzyl alcohol product into the carboxylic acid?',
 options:[
  {t:'Alcohol and aldehyde dehydrogenase', correct:true, why:'(T 707–708) "alcohol dehydrogenase, and then ... aldehyde dehydrogenase, two enzymes."'},
  {t:'Cytochromes P450 3A4 and 2D6', correct:false, why:'"not sips" (T 709); these are the CYPs of the JAK inhibitors (slide 8).'},
  {t:'Sulfotransferase and UGT (phase 2)', correct:false, why:'Phase 2 enzymes that make sulfate and glucuronide conjugates (slide 9; T 771–773).'},
  {t:'11β-HSD and 5β-reductase enzymes', correct:false, why:'Enzymes of hydrocortisone metabolism (slide 26).'}],
 teach:'Alcohol to aldehyde (alcohol dehydrogenase), aldehyde to carboxylic acid (aldehyde dehydrogenase). The acid is then ready for phase 2 conjugation (T 709–711). Every step is predictable, so crisaborole is a soft drug (T 711).',
 cite:S3+' slides 7–9, 26; T 704–711'},

{id:'S3-017', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'deboronation-exposure',
 tags:['adme'], source:'both',
 stem:'What does hydrolytic deboronation do for the safety of crisaborole?',
 options:[
  {t:'It limits systemic exposure', correct:true, why:'Slide 7: "Hydrolytic deboronation limits systemic exposure"; the product is inactive and goes out harmless (T 666–667).'},
  {t:'It activates the drug in skin', correct:false, why:'Intact crisaborole is the form that binds PDE4 (T 788–791); deboronation inactivates it.'},
  {t:'It lets the drug enter blood', correct:false, why:'The reverse: it limits systemic exposure (slide 7).'},
  {t:'It raises its affinity for PDE4', correct:false, why:'The boron is what binds the PDE4 metals (T 712–719); losing it removes that binding.'}],
 teach:'Crisaborole binds PDE4 through its boron (slide 7 CBDA). Once water removes the boron, the product cannot bind that way, and it is further oxidized and conjugated for elimination (T 699–711). This predictable inactivation keeps systemic exposure low.',
 cite:S3+' slide 7; T 664–668, 699–719, 788–791'},

{id:'S3-018', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'cbda', concept:'crisaborole-zn-mg',
 tags:['cbda'], source:'both',
 stem:'In the PDE4 active site, the boron of crisaborole coordinates to which two cations?',
 options:[
  {t:'Zn²⁺ and Mg²⁺', correct:true, why:'(T 713–714) "coordinate to two. Cations, right? Magnesium, and what? Zinc"; slide 7 CBDA figure.'},
  {t:'Ca²⁺ and Mg²⁺', correct:false, why:'Calcium is not in the PDE4 active site on slide 7; the metals are zinc and magnesium.'},
  {t:'Fe²⁺ and Cu²⁺', correct:false, why:'Not the metals in the PDE4 active site (slide 7).'},
  {t:'Zn²⁺ and Na⁺', correct:false, why:'Zinc is right, but the second cation is magnesium (T 714).'}],
 teach:'Chemical basis of drug action for crisaborole: its boron coordinates to the Zn²⁺ and Mg²⁺ ions in the PDE4 active site, which is how the molecule links onto and sits in the enzyme (slide 7; T 712–719). "this becomes the chemical basis of drug action" (T 718).',
 cite:S3+' slide 7; T 712–719'},

{id:'S3-019', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'cbda', concept:'crisaborole-boron-role',
 tags:['cbda','reasoning'], source:'both',
 stem:'Why does crisaborole\'s deboronated benzyl alcohol product not act on PDE4?',
 options:[
  {t:'It lacks the boron that binds the metals', correct:true, why:'The boron coordinates the active-site Zn²⁺ and Mg²⁺ (slide 7; T 712–719); deboronation removes it (T 700–702).'},
  {t:'It is too lipophilic to stay in skin', correct:false, why:'Lipophilicity (log P 3) refers to the parent drug and explains its accumulation in skin (slide 7).'},
  {t:'It is bound tightly to plasma proteins', correct:false, why:'Protein binding was discussed for hydrocortisone (slide 26), not for this product.'},
  {t:'It is a hard drug that resists any change', correct:false, why:'It is a metabolite of a soft drug and is oxidized and conjugated further (T 704–711).'}],
 teach:'The affinity of crisaborole for PDE4 comes from the boron binding the active site (T 799–801). Spontaneous loss of the boron in skin gives a product without that binding group, which is then oxidized to the acid and conjugated: predictable inactivation (T 699–711).',
 cite:S3+' slide 7; T 699–719, 787–801'},

{id:'S3-020', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'cbda', concept:'pde4-target-not-metab',
 tags:['tell'], source:'transcript',
 stem:'What role does PDE4 have for crisaborole?',
 options:[
  {t:'It is the target, not a metabolizing enzyme', correct:true, why:'Student question (T 723–728): "Non-enzymatic is spontaneous. No, phosphodiesterase 4 is the target."'},
  {t:'It removes the boron from crisaborole', correct:false, why:'Deboronation is spontaneous hydrolysis with no enzyme (T 700–702).'},
  {t:'It oxidizes the benzyl alcohol product', correct:false, why:'Alcohol and aldehyde dehydrogenase do that (T 707–708).'},
  {t:'It conjugates the benzoic acid with glucuronide', correct:false, why:'UGT forms the glucuronide (slide 9; T 773).'}],
 teach:'Two things happen to applied crisaborole: some is deboronated by water and metabolized, and intact crisaborole reaches PDE4 and binds its active site, keeping the enzyme from working (T 788–792).',
 cite:S3+' slides 7, 9; T 723–729, 787–801'},

{id:'S3-021', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'poll', concept:'crisaborole-gluc-steps',
 tags:['poll','verbatim'], source:'both',
 stem:'Crisaborole\'s metabolic scheme indicates that steps ........... involve glucuronidation?',
 options:[
  {t:'Steps 1 and 2', correct:false, why:'Step 1 is hydrolytic deboronation and step 2 leads to the carboxylic acid (slide 9; T 767–769); neither is glucuronidation.'},
  {t:'Steps 2 and 3', correct:false, why:'Step 2 is the oxidation to the carboxylic acid (two dehydrogenases), not a conjugation (slide 9; T 767–769). The keyed pair is 3 and 4, the steps on the route to the glucuronide-bearing products in the scheme (T 774–777).'},
  {t:'Steps 3 and 4', correct:true, why:'His answer: "3 and 4 steps involve gluchroidation" (T 776–777); in the scheme on slide 9, step 4 adds the glucuronide (UGT) and the "3,4" arrow gives the product with sulfate and glucuronide.'}],
 teach:'Slide 9 scheme: 1, hydrolytic deboronation; 2, oxidation to the carboxylic acid (two dehydrogenases); 3, sulfation by sulfotransferases; 4, glucuronidation by UGT; "3,4", both conjugates on one product. "Remember these things, folks" (T 774).',
 note:'At T 774 the transcript reads "a combination of what? UGT and 3F4". In the slide 9 scheme the arrow labelled "3,4" combines steps 3 and 4, so this is read as "3 and 4", not CYP3A4. The key does not depend on it.',
 quote:'Polleve, 11/03, slide 9',
 cite:S3+' slide 9; T 758–777'},

{id:'S3-022', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'poll', concept:'crisaborole-sult',
 tags:['metabolism'], source:'both',
 stem:'Which enzyme forms the sulfate conjugate of deboronated crisaborole?',
 options:[
  {t:'Sulfotransferase', correct:true, why:'(T 771–772) the products "can form sulfates ... what enzyme would be that phase two enzyme?" sulfotransferases; step 3 on slide 9.'},
  {t:'UDP-glucuronosyltransferase', correct:false, why:'UGT forms the glucuronide, step 4 (slide 9; T 773).'},
  {t:'Aldehyde dehydrogenase', correct:false, why:'A phase 1 enzyme in the route to the carboxylic acid (T 708).'},
  {t:'CYP3A4', correct:false, why:'Not part of crisaborole\'s scheme; "not sips" (T 709).'}],
 teach:'Phase 2 for crisaborole: sulfotransferases (SULT) add sulfate (step 3) and UGT adds glucuronide (step 4) (slide 9; T 770–774).',
 cite:S3+' slide 9; T 766–774'},

{id:'S3-023', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'poll', concept:'crisaborole-ugt',
 tags:['metabolism'], source:'both',
 stem:'Which enzyme forms the glucuronide of deboronated crisaborole?',
 options:[
  {t:'UGT', correct:true, why:'(T 773) "these can also form what? Gluronides. So, what enzyme is that? UGT."'},
  {t:'Sulfotransferase', correct:false, why:'Forms the sulfate, step 3 (slide 9; T 771–772).'},
  {t:'Alcohol dehydrogenase', correct:false, why:'The first of the two phase 1 oxidations (T 708).'},
  {t:'11β-HSD', correct:false, why:'Interconverts hydrocortisone and cortisone (slide 26).'}],
 teach:'Step 4 on slide 9 adds a glucuronide (Gluc) through UGT; together with step 3 (sulfate) these are the phase 2 steps of a soft drug designed for predictable inactivation (T 709–711, 770–777).',
 cite:S3+' slide 9; T 770–777'},

/* ---- Ruxolitinib and upadacitinib ---------------------------------------- */
{id:'S3-024', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'chem', concept:'jak-diff-class',
 tags:['tell','class'], source:'both',
 stem:'Ruxolitinib and upadacitinib are both JAK inhibitors. How do they compare chemically?',
 options:[
  {t:'Different chemical classes', correct:true, why:'(T 732–733) "are these similar chemical, no, they are not, they are different because they are structurally different"; slide 8.'},
  {t:'One shared chemical class', correct:false, why:'They share a pharmacological class (JAK inhibitors, slide 8), not a chemical class.'},
  {t:'Both are benzoxaboroles', correct:false, why:'Benzoxaborole is crisaborole\'s class (slide 7).'},
  {t:'Both are steroid derivatives', correct:false, why:'Neither has the four fused rings of a steroid (slides 8, 20).'}],
 teach:'Slide 8 gives ruxolitinib as a pyrrolopyrimidine and upadacitinib as an imidazopyrrolopyridine. He said the names need not be recalled; the point is that one pharmacological class can hold structurally different molecules (T 730–734). Both reduce inflammation and cytokine signaling through the JAK pathway (T 734–736).',
 cite:S3+' slides 7–8, 20; T 729–736'},

{id:'S3-025', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'chem', concept:'jak-sequestered',
 tags:['adme'], source:'both',
 stem:'Topical ruxolitinib and upadacitinib both have a log P of about 2. What keeps them acting locally in the skin?',
 options:[
  {t:'Their formulation sequesters them', correct:true, why:'(T 738–742) "these are formulated ... to be sequestered ... In the skin"; "Both are locally acting because they\'re formulated that way" (T 755–756).'},
  {t:'Their high log P blocks absorption', correct:false, why:'A log P of 2 would let them go through by their own nature (T 738, 740–741).'},
  {t:'Water removes a boron group', correct:false, why:'Hydrolytic deboronation belongs to crisaborole (slide 7).'},
  {t:'Skin enzymes inactivate them at once', correct:false, why:'He named formulation, not rapid inactivation, as the reason (T 738–742).'}],
 teach:'With log P about 2 "naturally, we would think that this will go into the skin and go through", but formulation scientists make them stay in the skin (T 736–742). Compare crisaborole, whose structure itself accumulates in the skin with log P 3 (slide 7).',
 note:'The log P of 2 is spoken (T 736–737); it is not printed on slide 8.',
 cite:S3+' slides 7–8; T 736–742, 755–756'},

{id:'S3-026', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'jak-3a4',
 tags:['interaction'], source:'both',
 stem:'Which CYP isoform is the major enzyme for both ruxolitinib and upadacitinib?',
 options:[
  {t:'CYP3A4', correct:true, why:'Slide 8 (3A4 in bold for both); (T 745–746) "these are both [3A4] as the major enzyme isoform".'},
  {t:'CYP2D6', correct:false, why:'A substrate listing for upadacitinib besides 3A4, not for ruxolitinib (slide 8).'},
  {t:'CYP2C9', correct:false, why:'A substrate listing for ruxolitinib besides 3A4, not for upadacitinib (slide 8).'},
  {t:'CYP1A2', correct:false, why:'Not listed for either drug on slide 8.'}],
 teach:'Slide 8: ruxolitinib is a 3A4/2C9 substrate and upadacitinib a 3A4/2D6 substrate; 3A4 is the one they share and the one he stressed (T 745–749).',
 cite:S3+' slide 8; T 745–749'},

{id:'S3-027', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'cyp-watch', dupOf:'S3-003',
 tags:['interaction'], source:'both',
 stem:'A patient using ruxolitinib starts a drug that changes CYP3A4 activity. What is the concern?',
 options:[
  {t:'The ruxolitinib half-life can change', correct:true, why:'(T 747–749) inhibitors and inducers of 3A4 "can have a say on what? The half-life of the drug."'},
  {t:'The ruxolitinib boron group can be lost', correct:false, why:'Ruxolitinib has no boron; deboronation is crisaborole\'s (slide 7).'},
  {t:'The ruxolitinib log P can rise', correct:false, why:'Log P is a property of the molecule (slide 8), not changed by a CYP.'},
  {t:'The ruxolitinib class can change', correct:false, why:'Chemical class is fixed by structure (slide 8).'}],
 teach:'Both JAK inhibitors are 3A4 substrates, so "caution" with 3A4 inhibitors and inducers (slide 8; T 745–749, 756–757). An inhibitor slows its metabolism and lengthens exposure; an inducer does the reverse.',
 cite:S3+' slide 8; T 745–757'},

{id:'S3-028', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'jak-active-metab',
 tags:['tell'], source:'both',
 stem:'How do ruxolitinib and upadacitinib differ in their metabolites?',
 options:[
  {t:'Ruxolitinib has active hydroxylated metabolites', correct:true, why:'(T 752–754) some hydroxylated metabolites are active; slide 8 "(some active metabolites)" for ruxolitinib.'},
  {t:'Upadacitinib has active hydroxylated metabolites', correct:false, why:'Reversed: upadacitinib "has no active metabolites" (T 752–753; slide 8).'},
  {t:'Both have active glucuronide metabolites', correct:false, why:'Glucuronides belong to crisaborole\'s scheme (slide 9); for these two he spoke of hydroxylated metabolites.'},
  {t:'Neither drug forms metabolites', correct:false, why:'Both are 3A4 substrates (slide 8), and ruxolitinib\'s hydroxylated metabolites are partly active (T 753–754).'}],
 teach:'His summary (T 755–757): both act locally because of formulation; they have different half-lives; both are 3A4 substrates; one (ruxolitinib) has active metabolites and the other (upadacitinib) does not.',
 cite:S3+' slides 8–9; T 749–757'},

{id:'S3-029', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'jak-thalf',
 tags:['adme','number'], source:'both',
 stem:'Based on half-life, which topical JAK inhibitor would need more applications?',
 options:[
  {t:'Ruxolitinib, with a half-life near 3 h', correct:true, why:'Slide 8: ruxolitinib t1/2 = 3 h; (T 742–744) "shorter-lived, multiple applications".'},
  {t:'Upadacitinib, with a half-life near 3 h', correct:false, why:'Upadacitinib has the longer half-life, 8–16 h (slide 8).'},
  {t:'Upadacitinib, with a half-life of 8–16 h', correct:false, why:'Longer-lived means fewer applications (T 743–744).'},
  {t:'Neither; both have a 12 h half-life', correct:false, why:'12 h is crisaborole\'s half-life (slide 7).'}],
 teach:'Slide 8: ruxolitinib t1/2 3 h; upadacitinib t1/2 8–16 h. Shorter half-life means more applications; longer half-life, fewer (T 742–744).',
 cite:S3+' slides 7–8; T 742–744'},

{id:'S3-030', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'jak-minor-cyp', lowYield:true,
 tags:['tell'], source:'slide',
 stem:'Besides CYP3A4, which isoform metabolizes upadacitinib?',
 options:[
  {t:'CYP2D6', correct:true, why:'Slide 8: upadacitinib is a 3A4/2D6 substrate.'},
  {t:'CYP2C9', correct:false, why:'The second isoform for ruxolitinib (slide 8).'},
  {t:'CYP2E1', correct:false, why:'Not listed for either JAK inhibitor on slide 8.'},
  {t:'CYP1A2', correct:false, why:'Not listed for either JAK inhibitor on slide 8.'}],
 teach:'Slide 8: ruxolitinib 3A4/2C9; upadacitinib 3A4/2D6. In class he stressed the shared 3A4 (T 745–749); his general rule covers 2D6 as well (T 630–632).',
 cite:S3+' slide 8; T 630–632, 745–749'},

/* ---- UV radiation and terms ---------------------------------------------- */
{id:'S3-031', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'uvc-range',
 tags:['number'], source:'both',
 stem:'Which wavelength range is UVC?',
 options:[
  {t:'100–280 nm', correct:true, why:'Slide 12 spectrum (100 to 280); spoken "UVC is going to be what? Simply [100 to 280]" (T 819–820).'},
  {t:'280–315 nm', correct:false, why:'This is in the UVB band, which begins at 280 nm (slide 12; T 819).'},
  {t:'315–400 nm', correct:false, why:'UVA (slide 12; slide 18).'},
  {t:'400–450 nm', correct:false, why:'Above 400 nm is visible light, not UV (slide 12).'}],
 teach:'"My ask is that you know what is in UVR ... know those limits" (T 810–814). Shortest to longest: UVC 100–280 nm, UVB from 280 nm, UVA up to 400 nm, then visible light (slide 12; T 815–820).',
 note:'Transcript T 820 reads "Simply 1002 to 80"; the slide 12 spectrum gives 100–280, so it is keyed to 100–280 nm.',
 cite:S3+' slides 12, 18; T 810–820'},

{id:'S3-032', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'uva-range',
 tags:['number'], source:'both',
 stem:'Which wavelength range is UVA?',
 options:[
  {t:'315 (or 320) to 400 nm', correct:true, why:'(T 817–818) "depending on the literature you pick, it will be 315 or 320 nanometers to 400"; slide 18 gives 315–400 nm for PUVA.'},
  {t:'280 (or 260) to 315 nm', correct:false, why:'Starts at the UVB lower limit, 280 nm (slide 12); UVA ends at 400 nm.'},
  {t:'100 (or 120) to 280 nm', correct:false, why:'This is UVC (slide 12; T 820).'},
  {t:'200 (or 220) to 250 nm', correct:false, why:'Inside the UVC band (slide 12).'}],
 teach:'UVA ends at 400 nm, where visible light begins, and starts at 315 or 320 nm depending on the source (T 817–818). PUVA uses UVA only, "This can never be UVB. This can never be UVC" (T 828–830).',
 cite:S3+' slides 12, 18; T 815–830'},

{id:'S3-033', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'uvb-lower',
 tags:['number'], source:'both',
 stem:'Which UV band begins at 280 nm?',
 options:[
  {t:'UVB', correct:true, why:'Slide 12 spectrum; (T 819) "UVB then becomes what? 280 to ..."'},
  {t:'UVA', correct:false, why:'UVA begins at 315 or 320 nm (T 817–818).'},
  {t:'UVC', correct:false, why:'UVC ends at 280 nm; it begins at 100 nm (slide 12; T 820).'},
  {t:'Visible', correct:false, why:'Visible light begins at 400 nm (slide 12; T 816).'}],
 teach:'UVC ends and UVB begins at 280 nm (slide 12). UVB is the band used with coal tar phototherapy (slide 16) and the one ozone blocks about 90% of (slide 12).',
 cite:S3+' slides 12, 16; T 815–820'},

{id:'S3-034', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'ozone-uvb',
 tags:['number'], source:'both',
 stem:'About what share of solar UVB does the ozone layer block?',
 options:[
  {t:'About 90%', correct:true, why:'Slide 12: "Ozone: blocks 100% UVC & 90% UVB"; (T 821–822) "like 90% of UVB ... we receive about 10%".'},
  {t:'About 10%', correct:false, why:'10% is what reaches us, not what ozone blocks (T 822).'},
  {t:'About 50%', correct:false, why:'Not the figure on slide 12 or in T 821–822.'},
  {t:'About 25%', correct:false, why:'Not the figure on slide 12 or in T 821–822.'}],
 teach:'Ozone blocks UVC (slide 12: 100%; spoken "most of that", T 821) and about 90% of UVB, so about 10% of UVB reaches us, still enough to penetrate the skin (T 822–823).',
 cite:S3+' slide 12; T 820–824'},

{id:'S3-035', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'uva-deepest',
 tags:['recall'], source:'both',
 stem:'Which UV band penetrates the skin most deeply?',
 options:[
  {t:'UVA', correct:true, why:'(T 838–839) "what goes in the furthest. UVA, the deepest"; on the slide 12 figure UVA reaches the dermis.'},
  {t:'UVB', correct:false, why:'UVB stops at a shallower level than UVA in the slide 12 figure.'},
  {t:'UVC', correct:false, why:'UVC is blocked by the ozone layer (slide 12).'},
  {t:'Infrared', correct:false, why:'He crossed infrared out as outside the topic (T 812; slide 12).'}],
 teach:'On the slide 12 figure UVA reaches the dermis, UVB stops in the epidermis, and UVC is stopped by the ozone layer (T 836–839). Clothing also protects against UVB and UVC (T 837–838).',
 cite:S3+' slide 12; T 820–824, 836–840'},

{id:'S3-036', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'uvr', concept:'uv-effects',
 tags:['recall'], source:'slide',
 stem:'Which harm is linked mainly to UVA rather than UVB?',
 options:[
  {t:'Premature ageing and wrinkling', correct:true, why:'Slide 12: UVA, "premature ageing, wrinkling of the skin, implicated in skin cancer".'},
  {t:'Sunburn of exposed skin surfaces', correct:false, why:'Slide 12 lists sunburn under UVB.'},
  {t:'Cataracts of the eye', correct:false, why:'Slide 12 lists cataracts under UVB.'},
  {t:'Ozone-layer damage', correct:false, why:'Ozone blocks UV (slide 12); it is not a UV harm to skin.'}],
 teach:'Slide 12 boxes: UVC, extremely dangerous and blocked by the ozone layer; UVB, skin cancer, cataracts and sunburn; UVA, premature ageing, wrinkling and a role in skin cancer. UVA penetrates deepest (T 838–839).',
 cite:S3+' slide 12; T 836–839'},

{id:'S3-037', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'terms', concept:'puva',
 tags:['definition'], source:'both',
 stem:'In PUVA therapy, a psoralen is combined with which radiation?',
 options:[
  {t:'UVA light', correct:true, why:'Slide 12: "PUVA: Psoralen + Ultraviolet A light"; (T 828–830) "This can never be UVB. This can never be UVC".'},
  {t:'UVB light', correct:false, why:'UVB is used with coal tar (slide 16), not in PUVA (T 829).'},
  {t:'UVC light', correct:false, why:'"This can never be UVC" (T 829); UVC is blocked by ozone (slide 12).'},
  {t:'Infrared light', correct:false, why:'Infrared is outside UV (slide 12; T 812).'}],
 teach:'P-U-V-A: psoralen plus UVA (315–400 nm on slide 18). The patient takes or applies the psoralen and is then exposed to UVA, which activates its double bonds to crosslink DNA (slide 18; T 825–830, 967–971).',
 cite:S3+' slides 12, 16, 18; T 825–830, 967–971'},

{id:'S3-038', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s3-uv', sub:'terms', concept:'antimetabolite',
 tags:['definition'], source:'both',
 stem:'What is an antimetabolite?',
 options:[
  {t:'A molecule that mimics a natural metabolite', correct:true, why:'(T 831–834) molecules that "mimic. Natural Molecules ... can disrupt the bioprocessing" of end products like DNA and RNA; slide 12 "enzyme substrate mimetic molecules".'},
  {t:'A molecule that blocks a nuclear receptor', correct:false, why:'Not his definition (slide 12); antimetabolites mimic enzyme substrates.'},
  {t:'A drug that undergoes predictable metabolism', correct:false, why:'That is a soft drug (T 665–668).'},
  {t:'A drug that does not undergo metabolism', correct:false, why:'That is a hard drug (T 668–669).'}],
 teach:'Slide 12: enzyme substrate mimetic molecules that inhibit cellular metabolism. Many anticancer agents are antimetabolites; methotrexate is his example (T 830–834).',
 cite:S3+' slide 12; T 830–835'},

/* ---- Psoriasis components and drugs ------------------------------------- */
{id:'S3-039', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'pso', concept:'psoriasis-components', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which are the major components of psoriasis? Select all that apply.',
 options:[
  {t:'Keratinocyte hyperproliferation', correct:true, why:'Slide 13; leads to skin build-up (T 842–845).'},
  {t:'Inflammation', correct:true, why:'Slide 13; "a heavy load of inflammation" (T 846).'},
  {t:'Autoimmune response', correct:true, why:'Slide 13; the immune system fights the body\'s own tissue (T 846–848).'},
  {t:'Excess sebum production', correct:false, why:'Not a component of psoriasis on slide 13.'},
  {t:'Bacterial overgrowth in follicles', correct:false, why:'Not a component of psoriasis on slide 13.'}],
 teach:'Slide 13: keratinocyte hyperproliferation (skin build-up), inflammation and an autoimmune response; the goals are to normalize cell proliferation, suppress inflammation and suppress the immune response (T 842–850).',
 cite:S3+' slide 13; T 840–850'},

{id:'S3-040', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'pso', concept:'autoimmune-def', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['definition'], source:'transcript',
 stem:'What does it mean that psoriasis involves an autoimmune response?',
 options:[
  {t:'The immune system attacks the body\'s own cells', correct:true, why:'(T 847–848) "The immune system is ... Fighting ... The natural things that is not supposed to fight."'},
  {t:'The immune system is too weak to fight infection', correct:false, why:'That is immunodeficiency, not his definition (T 847–848).'},
  {t:'The skin barrier lets allergens enter freely', correct:false, why:'A barrier problem is not what he described for psoriasis (slide 13).'},
  {t:'The immune response is set off by UV light exposure', correct:false, why:'He did not link the autoimmune response to UV light (T 846–848).'}],
 teach:'Because psoriasis is autoimmune, suppressing the immune response is one of its treatment goals (slide 13; T 848–850).',
 cite:S3+' slide 13; T 846–850'},

{id:'S3-041', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'pso', concept:'pso-systemic-sikazwe', lowYield:true, unassigned:true, multi:true,
 tags:['list'], source:'both',
 stem:'Which are systemic non-biological agents for psoriasis? Select all that apply.',
 options:[
  {t:'Methotrexate', correct:true, why:'Slide 14, systemic non-biologicals; (T 855).'},
  {t:'Cyclosporine', correct:true, why:'Slide 14, systemic non-biologicals; (T 855).'},
  {t:'Tofacitinib', correct:true, why:'Slide 14, systemic non-biologicals (T 856).'},
  {t:'Apremilast', correct:true, why:'Slide 14 lists it by its brand, Otezla (T 856).'},
  {t:'Topical anthralin', correct:false, why:'A topical agent for psoriasis (slides 14, 17).'},
  {t:'Topical coal tar', correct:false, why:'A topical agent for psoriasis (slides 14, 16).'}],
 teach:'Slide 14. Topical: emollients, tars, anthralin, psoralen (topical or oral), corticosteroids, vitamin D3 analogs, retinoids (topical or oral), immunosuppressants. Systemic non-biologicals: methotrexate, cyclosporine, mycophenolate (off-label), apremilast, tofacitinib. Biologicals: monoclonal antibodies.',
 note:'Slide 14 names apremilast by its brand (Otezla); the generic name is used here (Dermatology drug chart). Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 cite:S3+' slides 14, 16–17; T 850–862'},

{id:'S3-042', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-pso', sub:'drugs', concept:'mycophenolate-offlabel', lowYield:true,
 tags:['recall'], source:'both',
 stem:'What is the status of mycophenolate for psoriasis?',
 options:[
  {t:'It is used off label', correct:true, why:'(T 855–856) "mycophenolate, we used to talk about but it\'s off label now"; slide 14 "off label use?".'},
  {t:'It is a first-line topical', correct:false, why:'It is in the systemic non-biological list (slide 14).'},
  {t:'It is a biological antibody', correct:false, why:'Biologicals on slide 14 are the MAbs; mycophenolate is a small molecule.'},
  {t:'It is used with UVA as PUVA', correct:false, why:'PUVA is psoralen plus UVA (slide 12).'}],
 teach:'Slide 14 marks mycophenolate with an asterisk and "off label use?"; he confirmed it is off label now (T 855–856).',
 cite:S3+' slides 12, 14; T 854–856'},

/* ---- Emollients ---------------------------------------------------------- */
{id:'S3-043', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'emollient-role',
 tags:['counsel'], source:'both',
 stem:'What do emollients do for a patient with psoriasis?',
 options:[
  {t:'Soften scales and prevent water loss', correct:true, why:'Slide 15 "prevent skin H2O loss"; (T 865–870) they fill gaps in the scales, soften them and prevent water loss.'},
  {t:'Slow down keratinocyte proliferation', correct:false, why:'"we\'re not treating the disease per se" (T 866); antiproliferative action belongs to agents like anthralin (slide 17).'},
  {t:'Suppress the autoimmune response itself', correct:false, why:'Emollients are palliative (T 889–890), not immunosuppressive.'},
  {t:'Crosslink DNA after UVA exposure', correct:false, why:'That is the psoralens (slide 18).'}],
 teach:'Psoriasis brings scaling, dryness and itching. Emollients fill the gaps in the scales, soften them and prevent water loss, easing the itching and desquamation: palliative care, not treatment of the disease (T 862–870, 889–890).',
 cite:S3+' slides 15, 17–18; T 862–890'},

{id:'S3-044', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'petrolatum',
 tags:['chem'], source:'both',
 stem:'What is petrolatum chemically?',
 options:[
  {t:'Linear hydrocarbons of more than 25 carbons', correct:true, why:'Slide 15 "Petrolatum (most effective, >25 Carbons) - hydrocarbons"; (T 871–873) "preferably greater than 25 carbons, linear".'},
  {t:'Fatty acid esters obtained from sheep wool grease', correct:false, why:'That is lanolin (slide 15; T 876–881).'},
  {t:'Linear chains of silicon and oxygen atoms', correct:false, why:'That is dimethicone (slide 15; T 885–886).'},
  {t:'Phenols and polycyclic aromatic compounds', correct:false, why:'That is coal tar (slide 16; T 895–896).'}],
 teach:'Petrolatum (Vaseline products) is the most effective emollient on slide 15: hydrocarbons, preferably linear and longer than 25 carbons (T 870–875).',
 cite:S3+' slides 15–16; T 870–889'},

{id:'S3-045', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'lanolin',
 tags:['chem'], source:'both',
 stem:'What limits the use of lanolin as an emollient?',
 options:[
  {t:'Its odor', correct:true, why:'Slide 15 "Lanolin (odorus, wool grease)"; (T 877–879) "that order prevents people from perhaps using that".'},
  {t:'It causes photosensitivity', correct:false, why:'Photosensitizing is a property of coal tar (slide 16).'},
  {t:'It promotes comedones', correct:false, why:'Not said of lanolin; non-comedogenic is the silicone advantage (slide 15).'},
  {t:'It stains fabrics', correct:false, why:'Staining belongs to anthralin (slide 17).'}],
 teach:'Lanolin is wool grease from sheep wool, made of fatty acid esters; its odor puts people off (slide 15; T 876–881).',
 note:'The transcript writes "order" for "odor" (T 877, 879); slide 15 says "odorus".',
 cite:S3+' slides 15–17; T 876–882'},

{id:'S3-046', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'silicone-advantage',
 tags:['tell'], source:'both',
 stem:'What advantages do silicone-based emollients have?',
 options:[
  {t:'Hypoallergenic and non-comedogenic', correct:true, why:'Slide 15; (T 882–884) they are hypoallergenic and do not promote blackheads or whiteheads.'},
  {t:'Antiproliferative and keratolytic', correct:false, why:'Antiproliferative activity is claimed for tars (slide 16), not silicones.'},
  {t:'Photosensitizing for phototherapy', correct:false, why:'Coal tar is the photosensitizer used with UVB (slide 16).'},
  {t:'Odorless and made from wool grease', correct:false, why:'Wool grease is lanolin, which has an odor (slide 15).'}],
 teach:'Silicone-based emollients (dimethicone, cyclomethicone) are hypoallergenic and non-comedogenic: they do not promote comedones, the blackheads and whiteheads (slide 15; T 882–884).',
 cite:S3+' slides 15–16; T 882–889'},

{id:'S3-047', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'emol', concept:'dimethicone-vs-cyclo',
 tags:['tell','chem'], source:'both',
 stem:'How does dimethicone differ structurally from cyclomethicone?',
 options:[
  {t:'Dimethicone is a linear Si–O chain', correct:true, why:'(T 885–887) dimethicone "linear silicon. And oxygen chains"; cyclomethicone is "silicon, but in a cyclic structure"; slide 15.'},
  {t:'Dimethicone is a cyclic Si–O ring', correct:false, why:'Reversed: cyclomethicone is the cyclic one (a pentamer on slide 15).'},
  {t:'Dimethicone is a C–C hydrocarbon', correct:false, why:'Linear hydrocarbons are petrolatum (slide 15).'},
  {t:'Dimethicone is a long fatty acid ester', correct:false, why:'Fatty acid esters are lanolin (slide 15).'}],
 teach:'Both are silicone emollients built from silicon–oxygen units with methyl groups: dimethicone as a linear chain, cyclomethicone as a ring (slide 15 shows a pentamer) (T 884–889).',
 cite:S3+' slide 15; T 882–889'},

/* ---- Tars ---------------------------------------------------------------- */
{id:'S3-048', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'tar-moa',
 tags:['mechanism'], source:'both',
 stem:'What is known about how tars act in psoriasis?',
 options:[
  {t:'Unclear; possibly antiproliferative', correct:true, why:'Slide 16 "MoA is unknown.. but may have antiproliferative activities"; (T 890–891).'},
  {t:'They crosslink DNA once activated by UVA light', correct:false, why:'That is the psoralen CBDA (slide 18).'},
  {t:'They form radicals that damage mitochondria', correct:false, why:'That is anthralin (slide 17).'},
  {t:'They bind zinc and magnesium in PDE4', correct:false, why:'That is crisaborole (slide 7).'}],
 teach:'Tars are mixtures of hydrocarbons from coal, shale or wood; their mechanism is unclear, though some hold that they are antiproliferative (slide 16; T 890–893).',
 cite:S3+' slides 7, 16–18; T 890–893'},

{id:'S3-049', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'coal-tar-content',
 tags:['chem'], source:'both',
 stem:'Coal tar is a mixture mainly of which compounds?',
 options:[
  {t:'Phenols, PAHs and heterocycles', correct:true, why:'Slide 16 "Mixture of phenols, PAHs & heterocyclic compounds"; (T 895–896).'},
  {t:'Fatty acid esters and wax esters', correct:false, why:'Fatty acid esters are lanolin (slide 15).'},
  {t:'Linear silicon–oxygen chains', correct:false, why:'That is dimethicone (slide 15).'},
  {t:'Furan and coumarin rings', correct:false, why:'Those make up the psoralens (slide 18).'}],
 teach:'Coal tar, crude or refined, holds phenols, polycyclic aromatic hydrocarbons (PAHs) and other heterocyclic compounds (slide 16; T 893–896).',
 cite:S3+' slides 15–16, 18; T 892–896'},

{id:'S3-050', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'tar-photosens',
 tags:['tell','adverse'], source:'both',
 stem:'Which tar is photosensitizing?',
 options:[
  {t:'Coal tar', correct:true, why:'Slide 16 "Is photosensitizing"; (T 901–902) coal tars "sensitize the skin to the sun or to light".'},
  {t:'Shale tar (ichthammol)', correct:false, why:'Slide 16 "Non-photosensitizer" (T 907–908).'},
  {t:'Pine tar', correct:false, why:'A wood tar: "Non-photosensitizing" (slide 16; T 908–910).'},
  {t:'Birch tar', correct:false, why:'A wood tar: "Non-photosensitizing" (slide 16; T 908–910).'}],
 teach:'Coal tar sensitizes the skin to light and may be used with UVB phototherapy; shale tar (ichthammol) and wood tars (pine, birch, juniper) do not photosensitize, which is their advantage (slide 16; T 896–911).',
 cite:S3+' slide 16; T 893–912'},

{id:'S3-051', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'coal-tar-uvb',
 tags:['counsel'], source:'both',
 stem:'With which light can coal tar be combined in phototherapy?',
 options:[
  {t:'UVB', correct:true, why:'Slide 16 "May be used with UVB"; (T 896–898) "they\'re exposed to light, and here they are saying UVB".'},
  {t:'UVA', correct:false, why:'UVA is paired with psoralens in PUVA (slides 12, 18).'},
  {t:'UVC', correct:false, why:'UVC is blocked by ozone and not used (slide 12).'},
  {t:'Infrared', correct:false, why:'Infrared is outside UV (slide 12).'}],
 teach:'The patient applies coal tar and is then exposed to UVB; coal tar is photosensitizing (slide 16; T 896–902). Psoralens are the drugs paired with UVA (slide 18).',
 note:'Slide 16 gives the UVB band for this use as 280–320 nm; the answer here does not depend on the UVB upper limit, which differs across the deck (see notes).',
 cite:S3+' slides 12, 16, 18; T 896–902'},

{id:'S3-052', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-emol', sub:'tar', concept:'shale-tar-source',
 tags:['recall'], source:'both',
 stem:'From what is shale tar (ichthammol) obtained?',
 options:[
  {t:'Oil distilled from sedimentary rock', correct:true, why:'(T 902–905) "obtained from ... organic rocks that sediment ... sedimentary rocks"; slide 16.'},
  {t:'Crude or refined coal', correct:false, why:'That is coal tar (slide 16; T 893–894).'},
  {t:'Wood of pine, birch or juniper trees', correct:false, why:'Those are wood tars (slide 16; T 908–910).'},
  {t:'Grease from sheep wool', correct:false, why:'That is lanolin (slide 15).'}],
 teach:'Three tars on slide 16: coal tar (photosensitizing), shale tar or ichthammol from sedimentary rock (non-photosensitizer) and wood tars from pine, birch or juniper (non-photosensitizing) (T 893–911).',
 cite:S3+' slides 15–16; T 893–911'},

/* ---- Anthralin ----------------------------------------------------------- */
{id:'S3-053', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'chem', concept:'anthralin-class',
 tags:['class'], source:'both',
 stem:'Anthralin (dithranol) belongs to which chemical class?',
 options:[
  {t:'Hydroxyanthrone', correct:true, why:'Slide 17 "Anthralin or Dithranol: A hydroxyanthrone"; (T 919–920).'},
  {t:'Furanocoumarin', correct:false, why:'The class of the psoralens (slide 18).'},
  {t:'Benzoxaborole', correct:false, why:'The class of crisaborole (slide 7).'},
  {t:'Steroid', correct:false, why:'The class of the glucocorticoids: three six-membered rings and one five-membered ring fused together (slide 20; T 990–995).'}],
 teach:'Anthralin is a tricyclic anthrone carrying hydroxyl groups, hence hydroxyanthrone (slide 17 structure). It dates from 1915 and is still in use (T 918–920).',
 cite:S3+' slides 7, 17–18, 20; T 918–920, 990–995'},

{id:'S3-054', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'cbda', concept:'anthralin-autox',
 tags:['cbda'], source:'both',
 stem:'How does anthralin generate its active species?',
 options:[
  {t:'Spontaneous autoxidation, no enzyme', correct:true, why:'(T 938–942) "anthralin undergoes spontaneous ... auto-oxidation ... Does that involve enzymes? No."'},
  {t:'CYP3A4 oxidation in the liver', correct:false, why:'No enzyme is involved (T 941).'},
  {t:'UVA activation of its double bonds', correct:false, why:'UVA activation is how psoralens bind DNA (slide 18; T 969–971).'},
  {t:'Hydrolysis of a boron group in skin', correct:false, why:'Hydrolytic deboronation is crisaborole\'s (slide 7).'}],
 teach:'Anthralin is an unstable molecule: once applied, it autoxidizes spontaneously to cytotoxic radicals, the anthranyl radical and superoxide anion (slide 17; T 933–942).',
 cite:S3+' slides 7, 17–18; T 933–942'},

{id:'S3-055', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'cbda', concept:'anthralin-radicals', multi:true,
 tags:['cbda'], source:'both',
 stem:'Which species account for the antiproliferative action of anthralin? Select all that apply.',
 options:[
  {t:'Anthranyl radical', correct:true, why:'Slide 17 CBDA; (T 934–937).'},
  {t:'Superoxide anion', correct:true, why:'Slide 17 CBDA; (T 934–936).'},
  {t:'Anthralin brown', correct:false, why:'A polymer that stains; "Are those part of the treatment? No" (T 949–951).'},
  {t:'Carbon black polymer', correct:false, why:'The final polymer, part of the stain, not the treatment (T 947–951).'}],
 teach:'Slide 17: "Antiproliferative via cytotoxic radicals (Anthranyl + Superoxide anion)". The radicals disrupt keratinocyte mitochondria; the cells die, and proliferation is normalized (T 928–937).',
 cite:S3+' slide 17; T 928–953'},

{id:'S3-056', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'cbda', concept:'anthralin-mito',
 tags:['cbda'], source:'both',
 stem:'What do the anthralin radicals disrupt in keratinocytes?',
 options:[
  {t:'The mitochondria', correct:true, why:'(T 928–930) "it will go and Disrupt ... keratinocyte. Mitochondria".'},
  {t:'The DNA base pairs', correct:false, why:'DNA crosslinking is the psoralen action (slide 18).'},
  {t:'The PDE4 active site', correct:false, why:'PDE4 is crisaborole\'s target (slide 7).'},
  {t:'The glucocorticoid receptor', correct:false, why:'Glucocorticoids bind it by hydrogen bonds (slide 23).'}],
 teach:'Mitochondria carry out cell respiration; when the radicals disrupt them, keratinocytes die, which helps normalize keratinocyte proliferation (T 929–933).',
 cite:S3+' slides 7, 17–18, 23; T 928–937'},

{id:'S3-057', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'cbda', concept:'anthralin-stain',
 tags:['counsel'], source:'both',
 stem:'What are anthralin brown and carbon black?',
 options:[
  {t:'Polymers that stain, not the treatment', correct:true, why:'(T 945–951) the radicals polymerize to anthralin brown and then carbon black; "that\'s part of the stain. Nothing to do with treatment."'},
  {t:'The cytotoxic radicals that kill keratinocytes', correct:false, why:'Those are the anthranyl radical and superoxide anion (slide 17; T 951–952).'},
  {t:'The metabolites made by liver CYPs', correct:false, why:'No enzyme is involved; they form spontaneously from the radicals (T 938–947).'},
  {t:'Excipients in Lassar\'s paste', correct:false, why:'Lassar\'s paste is anthralin, zinc oxide, paraffin and salicylic acid (slide 17).'}],
 teach:'Slide 17 note: anthralin autoxidizes to radicals, ROS and inactive compounds and can stain fabrics permanently. Patients should keep it away from fine linen (T 942–944).',
 cite:S3+' slide 17; T 942–953'},

{id:'S3-058', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'chem', concept:'anthralin-systemic',
 tags:['counsel','adme'], source:'both',
 stem:'Why should a patient not apply too much anthralin?',
 options:[
  {t:'It is lipophilic and can go systemic', correct:true, why:'(T 927–928) "a lipophilic molecule based on its ... Log p value ... do not apply too much of that. Because it will go systemic"; slide 17 log P = 4.'},
  {t:'It is hydrophilic and washes off quickly', correct:false, why:'The reverse: its log P (4 on slide 17) makes it lipophilic.'},
  {t:'It needs UVA to be activated', correct:false, why:'That is the psoralens (slide 18).'},
  {t:'It inhibits CYP3A4 partially', correct:false, why:'That is methoxsalen (slide 18).'}],
 teach:'Anthralin\'s log P is 4 (slide 17 structure). A lipophilic molecule applied in excess can cross into the circulation (T 927–928). Compare crisaborole, log P 3, which accumulates in the skin (slide 7).',
 note:'He did not say the number; log P = 4 is printed under the anthralin structure on slide 17.',
 cite:S3+' slides 7, 17–18; T 927–928'},

{id:'S3-059', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'chem', concept:'anthralin-dendrimer',
 tags:['recall'], source:'both',
 stem:'Why are anthralin dendrimer or nanoparticle formulations being made?',
 options:[
  {t:'To improve PK and duration of action', correct:true, why:'Slide 17 "Dendrimer formulations improve PK properties & DoA or t1/2"; (T 923–926).'},
  {t:'To add a boron group to the drug', correct:false, why:'Boron belongs to crisaborole (slide 7).'},
  {t:'To make it work with UVA light', correct:false, why:'UVA pairs with psoralens (slide 18).'},
  {t:'To remove its antiproliferative effect', correct:false, why:'The radicals are the treatment (slide 17); formulations aim to improve PK.'}],
 teach:'Because anthralin has itching and stability issues, it is being reformulated, including nano-sized dendrimer forms, to improve its pharmacokinetic properties and duration of action (slide 17; T 922–926).',
 cite:S3+' slides 7, 17–18; T 921–927'},

{id:'S3-060', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-anth', sub:'chem', concept:'lassar-paste', multi:true, lowYield:true,
 tags:['list'], source:'slide',
 stem:'Which ingredients make up Lassar\'s paste? Select all that apply.',
 options:[
  {t:'Anthralin', correct:true, why:'Slide 17: Lassar\'s paste (Anthralin + ZnO + Paraffin + Salicylic Acid).'},
  {t:'Zinc oxide', correct:true, why:'Slide 17: zinc oxide (ZnO) is in Lassar\'s paste.'},
  {t:'Salicylic acid', correct:true, why:'Slide 17: salicylic acid is in Lassar\'s paste.'},
  {t:'Coal tar', correct:false, why:'A separate topical tar (slide 16), not in Lassar\'s paste on slide 17.'},
  {t:'Crisaborole ointment', correct:false, why:'A benzoxaborole for eczema (slides 6–7), not in Lassar\'s paste.'}],
 teach:'Slide 17: Lassar\'s paste is anthralin with zinc oxide, paraffin and salicylic acid, an older formulation that may see a resurgence (T 920–923).',
 cite:S3+' slides 16–18; T 920–923'},

/* ---- Psoralens ----------------------------------------------------------- */
{id:'S3-061', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'chem', concept:'psoralen-class',
 tags:['class'], source:'both',
 stem:'Methoxsalen (8-methoxypsoralen) belongs to which chemical class?',
 options:[
  {t:'Furanocoumarin', correct:true, why:'Slide 18 "A furanocoumarin"; (T 958–960) "this has a furan ring and a coumarin ring".'},
  {t:'Hydroxyanthrone', correct:false, why:'The class of anthralin (slide 17).'},
  {t:'Benzoxaborole', correct:false, why:'The class of crisaborole (slide 7).'},
  {t:'Steroid', correct:false, why:'The class of the glucocorticoids: three six-membered rings and one five-membered ring fused together (slide 20; T 990–995).'}],
 teach:'A psoralen is a coumarin (benzopyrone) fused to a furan ring; slide 18 marks the pyrone and furan parts. It began as a fish poison used by fishing communities before its antiproliferative use in psoriasis was found (T 954–958).',
 note:'The Dermatology drug chart lists a different class beside methoxsalen on its p.5 because that page\'s chemical-class column is shifted by one row; the deck and the lecture are followed.',
 cite:S3+' slides 7–8, 17–18; T 954–960'},

{id:'S3-062', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'chem', concept:'psoralen-3a4',
 tags:['interaction'], source:'both',
 stem:'Which CYP effect does methoxsalen have?',
 options:[
  {t:'It partially inhibits CYP3A4', correct:true, why:'Slide 18 "ADMET: Several CYPs & it partially inhibits 3A4"; (T 961–963) "That\'s something to take home".'},
  {t:'It is a strong CYP3A4 inducer', correct:false, why:'Inhibition, not induction (slide 18).'},
  {t:'It fully inhibits CYP2D6', correct:false, why:'Slide 18 names partial inhibition of 3A4.'},
  {t:'It is not handled by CYPs', correct:false, why:'Slide 18: several CYPs are involved in its metabolism.'}],
 teach:'Methoxsalen is metabolized by several CYPs and partially inhibits 3A4 (slide 18). By his rule on 3A4 (T 630–632), it can raise exposure to drugs that need 3A4.',
 note:'The transcript writes "3F4" and "3 or 4" (T 962–963); slide 18 reads 3A4.',
 cite:S3+' slide 18; T 630–632, 961–963'},

{id:'S3-063', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'chem', concept:'psoralen-jak-interaction',
 tags:['interaction','reasoning'], source:'both',
 stem:'A patient on PUVA with methoxsalen also uses topical ruxolitinib. What interaction is expected?',
 options:[
  {t:'Ruxolitinib exposure may rise', correct:true, why:'Methoxsalen partially inhibits 3A4 (slide 18) and ruxolitinib is a 3A4 substrate (slide 8); a 3A4 inhibitor can change its half-life (T 747–749).'},
  {t:'Ruxolitinib exposure may fall', correct:false, why:'A fall would follow a 3A4 inducer; methoxsalen is an inhibitor (slide 18).'},
  {t:'Methoxsalen will lose its boron', correct:false, why:'Methoxsalen has no boron; deboronation is crisaborole\'s (slide 7).'},
  {t:'Ruxolitinib will crosslink DNA', correct:false, why:'DNA crosslinking is the psoralen action (slide 18), not ruxolitinib\'s.'}],
 teach:'Put two take-home points together: methoxsalen partially inhibits 3A4 (slide 18; T 962–963), and ruxolitinib and upadacitinib are 3A4 substrates whose half-life 3A4 inhibitors can change (slide 8; T 745–749). Inhibiting the metabolizing enzyme slows clearance and raises exposure.',
 cite:S3+' slides 7–8, 18; T 630–632, 745–749, 961–963'},

{id:'S3-064', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'cbda', concept:'psoralen-dna',
 tags:['cbda'], source:'both',
 stem:'What is the chemical basis of drug action of methoxsalen in PUVA?',
 options:[
  {t:'It intercalates and crosslinks DNA', correct:true, why:'Slide 18 "covalently binds to DNA pyrimidine bases & decreased DNA synthesis"; (T 963–966) it inserts between base pairs and crosslinks them, "also called intercalation".'},
  {t:'It autoxidizes to cytotoxic radicals', correct:false, why:'That is anthralin (slide 17; Polleve-2, slide 19).'},
  {t:'It binds Zn²⁺ and Mg²⁺ in PDE4', correct:false, why:'That is crisaborole (slide 7).'},
  {t:'It hydrogen bonds to a receptor', correct:false, why:'That is the glucocorticoid CBDA (slide 23).'}],
 teach:'Methoxsalen inserts between DNA base pairs; UVA then activates its double bonds so it bonds covalently to pyrimidine bases of both strands, crosslinking them. The distorted DNA cannot support new cell production, so proliferation falls (slide 18; T 963–976). "This is the only molecule I\'m going to mention that has [this] as part of [its] chemical basis of action" (T 966–967).',
 cite:S3+' slides 7, 17–19, 23; T 963–977'},

{id:'S3-065', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'cbda', concept:'psoralen-uva-role',
 tags:['cbda'], source:'both',
 stem:'What does UVA do to methoxsalen in PUVA?',
 options:[
  {t:'Activates its double bonds to bind DNA', correct:true, why:'(T 969–971) light "activates these double bonds here to bind to DNA base pairs"; slide 18 scheme (hv) with pyrimidine bases.'},
  {t:'Removes a boron group to inactivate it', correct:false, why:'Deboronation is crisaborole\'s, and it needs water, not light (slide 7).'},
  {t:'Oxidizes it to the superoxide anion', correct:false, why:'Superoxide comes from anthralin autoxidation (slide 17).'},
  {t:'Converts it into an active steroid', correct:false, why:'Methoxsalen is a furanocoumarin, not a steroid (slide 18).'}],
 teach:'The patient takes or applies methoxsalen, waits, and is then exposed to UVA; the light promotes the crosslinking of DNA base pairs (slide 18; T 967–976).',
 cite:S3+' slides 7, 17–18; T 963–977'},

{id:'S3-066', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'cbda', concept:'which-drug-intercalates', dupOf:'S3-064',
 tags:['tell'], source:'both',
 stem:'Which drug acts by intercalating into and crosslinking DNA?',
 options:[
  {t:'Methoxsalen', correct:true, why:'Slide 18; (T 966–967) "the only molecule I\'m going to mention" with this chemical basis of action.'},
  {t:'Anthralin', correct:false, why:'Anthralin works through radicals that disrupt mitochondria (slide 17).'},
  {t:'Crisaborole', correct:false, why:'Crisaborole binds the PDE4 active-site metals (slide 7).'},
  {t:'Hydrocortisone', correct:false, why:'Glucocorticoids bind their receptor by hydrogen bonds (slide 23).'}],
 teach:'CBDA by drug: crisaborole, boron coordinating Zn²⁺/Mg²⁺ in PDE4 (slide 7); anthralin, autoxidation to radicals (slide 17); methoxsalen, DNA intercalation and crosslinking with UVA (slide 18); glucocorticoids, six hydrogen bonds in the receptor (slide 23).',
 cite:S3+' slides 7, 17–18, 23; T 966–967'},

{id:'S3-067', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'poll', concept:'autox-anthralin-vs-psoralen',
 tags:['poll'], source:'both',
 stem:'True or false: the chemical basis of drug action for both anthralin and 8-methoxypsoralen involves autoxidation. Which assessment is correct?',
 options:[
  {t:'False; anthralin autoxidizes, 8-MOP does not', correct:true, why:'His answer (T 979–980): false; "which one has auto oxidation? [Anthralin]". 8-MOP crosslinks DNA with UVA (slide 18).'},
  {t:'False; 8-MOP autoxidizes, anthralin does not', correct:false, why:'Reversed: anthralin autoxidizes spontaneously (slide 17; T 938–942).'},
  {t:'True; both autoxidize to cytotoxic radicals', correct:false, why:'8-MOP does not; its CBDA is DNA intercalation and crosslinking (slide 18).'},
  {t:'False; neither drug involves autoxidation', correct:false, why:'Anthralin does (slide 17; T 938–942).'}],
 teach:'Anthralin: spontaneous autoxidation to the anthranyl radical and superoxide anion (slide 17). 8-MOP: inserts between DNA base pairs and, with UVA, crosslinks them (slide 18).',
 note:'Polleve-2 (slide 19) is a two-choice TRUE/FALSE poll; the drill needs at least three options, so the true/false choice is kept with the reason attached. The poll as asked is kept verbatim in the notes for STYLE.md. The spoken answer is "We should say safe force, right?" (T 979), read as "false", which matches the reasoning that follows (T 979–980).',
 quote:'Polleve, 11/03, slide 19',
 cite:S3+' slides 17–19; T 977–980'},

/* ---- Glucocorticoids: structure, numbering, SAR ------------------------- */
{id:'S3-068', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'struct', concept:'adrenal-steroids',
 tags:['recall'], source:'both',
 stem:'The adrenal cortex makes glucocorticoids and which other group of steroids?',
 options:[
  {t:'Mineralocorticoids', correct:true, why:'(T 984–985) "Some are glucocorticoids, what are the others? Mineral corticoids."'},
  {t:'Furanocoumarins', correct:false, why:'A plant-derived class, the psoralens (slide 18).'},
  {t:'Retinoids', correct:false, why:'Vitamin A derivatives (slide 14), not adrenal steroids.'},
  {t:'Vitamin D3 analogs', correct:false, why:'A separate topical class for psoriasis (slide 14).'}],
 teach:'Of the two adrenal cortex steroid groups, glucocorticoids are the focus because they are anti-inflammatory (T 984–987). Hydrocortisone has both glucocorticoid and mineralocorticoid activity (T 1141–1142).',
 cite:S3+' slides 14, 18, 20; T 984–987, 1140–1142'},

{id:'S3-069', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'struct', concept:'steroid-skeleton',
 tags:['chem'], source:'both',
 stem:'Which description fits the steroid skeleton of a glucocorticoid?',
 options:[
  {t:'Three six-membered rings and one five-membered ring', correct:true, why:'(T 990–994) "4 rings fused together ... 6 ... 6 ... 6-membered ring, then the last membered ring is 5"; slide 20 "tetracyclic structure".'},
  {t:'Four six-membered rings fused together in a straight row', correct:false, why:'Ring D is five-membered (slide 20; T 993).'},
  {t:'Two six-membered rings and two five-membered rings', correct:false, why:'Three rings are six-membered and one is five-membered (T 992–993).'},
  {t:'A furan ring fused to a coumarin ring system', correct:false, why:'That is a furanocoumarin, the psoralens (slide 18).'}],
 teach:'A glucocorticoid is tetracyclic: rings A, B and C are six-membered and ring D is five-membered, fused in a set arrangement. "Whenever you see something like that ... it has a steroid skeleton" (slide 20; T 990–995). He asked the class to know what steroids look like (T 628–630).',
 cite:S3+' slides 18, 20; T 628–630, 987–996'},

{id:'S3-070', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'struct', concept:'ring-d',
 tags:['chem'], source:'both',
 fg:'hydrocortisone', stem:'Which ring of the steroid skeleton is five-membered?',
 options:[
  {t:'Ring D', correct:true, why:'Slide 20 rings A, B, C, D; (T 992–995) the last ring is five-membered.'},
  {t:'Ring A', correct:false, why:'Ring A is six-membered and carries C1–C5 and C10 (slide 20).'},
  {t:'Ring B', correct:false, why:'Ring B is six-membered (slide 20).'},
  {t:'Ring C', correct:false, why:'Ring C is six-membered and holds C11 (slide 20).'}],
 teach:'Rings A, B and C are six-membered; ring D (C13–C17) is five-membered and carries the side chain at C17 (slide 20; Foye Ch. 24, steroid numbering).',
 cite:S3+' slide 20; T 990–996; Foye Ch. 24 (support)'},

{id:'S3-071', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'struct', concept:'alpha-beta-face',
 tags:['chem'], source:'both',
 stem:'In steroid stereochemistry, what is a hashed bond pointing away from the viewer called?',
 options:[
  {t:'Alpha-facing', correct:true, why:'(T 997–999) bonds "that are hushed [hashed], that are pointing away from you, they are called alpha-facing"; slide 20.'},
  {t:'Beta-facing', correct:false, why:'Beta bonds point toward the viewer (T 999–1000; slide 20).'},
  {t:'Equatorial', correct:false, why:'Not the steroid term he used (slide 20).'},
  {t:'Axial', correct:false, why:'Not the steroid term he used (slide 20).'}],
 teach:'Alpha: hashed bond, pointing away from you. Beta: bold wedge, pointing toward you (slide 20; T 996–1000). Orientation is needed, with numbering, to state the SAR (T 1000–1001).',
 cite:S3+' slide 20; T 996–1002'},

{id:'S3-072', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'num', concept:'numbering-c10',
 tags:['chem'], source:'both',
 stem:'In steroid numbering, which carbon ends the first loop that runs from C1 around rings A and B?',
 options:[
  {t:'C10', correct:true, why:'(T 1007–1008) from 1, "it\'s going to cover these two rings and stop here, that\'s number 10"; slide 20.'},
  {t:'C9', correct:false, why:'C9 is the ring B/C junction reached before C10 in the loop (slide 20).'},
  {t:'C5', correct:false, why:'C5 is the A/B junction partway round the loop (slide 20).'},
  {t:'C17', correct:false, why:'C17 ends the second run, the "snake" from C11 (T 1011–1012).'}],
 teach:'His method: from C1 loop around rings A and B to C10; start again at C11 and snake through rings C and D to C17; then "hopscotch" to the methyls C18 and C19; then C20 and C21 on the side chain (slide 20; T 1003–1016). Foye Ch. 24 gives the same order.',
 cite:S3+' slides 20–22; T 1002–1017, 1084–1099; Foye Ch. 24 (support)'},

{id:'S3-073', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'num', concept:'numbering-c11',
 tags:['chem'], source:'both',
 stem:'Which carbon begins the run of numbers that snakes through rings C and D?',
 options:[
  {t:'C11', correct:true, why:'(T 1010–1012) "know where 11 is ... another starting point ... it snakes ... and stops at 17".'},
  {t:'C10', correct:false, why:'C10 ends the first loop over rings A and B (T 1008).'},
  {t:'C13', correct:false, why:'C13 is partway along the snake and carries the C18 methyl (slide 20).'},
  {t:'C18', correct:false, why:'C18 is a methyl reached by "hopscotch" after C17 (T 1013–1014).'}],
 teach:'"if you know where your 1 is, you know where your 11 is, and your 17, you\'re good to go" (T 1098–1099). C11 lies in ring C next to ring B and carries the 11β-OH needed for activity (slide 20).',
 cite:S3+' slide 20; T 1010–1017, 1098–1099'},

{id:'S3-074', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'num', concept:'numbering-c17-side',
 tags:['chem'], source:'both',
 stem:'At which carbon does the side chain (C20 onward) attach to the steroid nucleus?',
 options:[
  {t:'C17', correct:true, why:'Slide 20 numbering diagram, C20 on C17; the snake "stops at 17" (T 1012) and the chain continues with 20 and 21 (T 1015–1016).'},
  {t:'C13', correct:false, why:'C13 carries the C18 methyl (slide 20).'},
  {t:'C10', correct:false, why:'C10 carries the C19 methyl (slide 20).'},
  {t:'C3', correct:false, why:'C3 in ring A carries the ketone of hydrocortisone (slide 23).'}],
 teach:'C17 is the last ring carbon in ring D; the side chain starts at C20 attached to C17 (slide 20; T 1015–1016, 1088–1090). Foye Ch. 24: "The 17-side chain begins with C20."',
 cite:S3+' slides 20, 23; T 1011–1017, 1084–1092; Foye Ch. 24 (support)'},

{id:'S3-075', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'num', concept:'numbering-c19',
 tags:['chem'], source:'both',
 stem:'The angular methyl C19 is attached to which carbon?',
 options:[
  {t:'C10', correct:true, why:'Slide 20 diagram (19 at the A/B ring junction); Foye Ch. 24: C19 attached to C10.'},
  {t:'C13', correct:false, why:'C13 carries C18, the methyl numbered first in the hopscotch (slide 20; T 1013–1014).'},
  {t:'C17', correct:false, why:'C17 carries the side chain from C20 (slide 20).'},
  {t:'C9', correct:false, why:'C9 carries the 9α-halogen in active glucocorticoids (slide 20), not a methyl.'}],
 teach:'After C17 he "hopscotches" to the two angular methyls: C18 on C13 first, then C19 on C10 (slide 20; T 1012–1014, 1088–1089). Foye Ch. 24 gives the same assignment.',
 cite:S3+' slide 20; T 1012–1016, 1084–1090; Foye Ch. 24 (support)'},

{id:'S3-076', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'num', concept:'numbering-vs-orientation',
 tags:['tell'], source:'transcript',
 stem:'How does the number of a steroid carbon relate to the alpha or beta orientation of its substituent?',
 options:[
  {t:'They are separate descriptors', correct:true, why:'(T 1054) "The two are not related. Orientation is different from numbering"; (T 1039–1041) "The numbering is ... positional".'},
  {t:'Odd carbons are alpha-facing', correct:false, why:'Any carbon can carry either orientation (T 1039–1040).'},
  {t:'Ring D carbons are beta-facing', correct:false, why:'Orientation is set by the bond, not the ring (T 1039–1041, 1073–1074).'},
  {t:'The number sets the orientation', correct:false, why:'He said the two are not related (T 1054).'}],
 teach:'A substituent is described by both: its carbon number (position) and its orientation (α away, β toward the viewer), as in 6α-X, 9α-X and 11β-OH (slide 20; T 1067–1074).',
 cite:S3+' slide 20; T 1037–1074'},

{id:'S3-077', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'gc-sar-four', multi:true,
 tags:['sar'], source:'both',
 stem:'Which structural features increase the anti-inflammatory activity of a glucocorticoid? Select all that apply.',
 options:[
  {t:'C1–C2 double bond', correct:true, why:'SAR item 1 on slide 20; (T 1023–1024).'},
  {t:'6α-halogen', correct:true, why:'SAR item 2 on slide 20; (T 1025, 1067–1069).'},
  {t:'9α-halogen', correct:true, why:'SAR item 3 on slide 20; (T 1069–1070).'},
  {t:'11β-hydroxyl', correct:true, why:'SAR item 4 on slide 20; (T 1070–1072).'},
  {t:'11α-hydroxyl', correct:false, why:'The 11-OH must be β (T 1071–1072).'},
  {t:'6β-halogen', correct:false, why:'The 6-halogen must be α (T 1068–1069).'}],
 teach:'"I\'m limiting you to 4 things" (T 1020–1021): C1–C2 double bond, 6α-halogen, 9α-halogen and 11β-OH (slide 20). He called them the minimal stereochemistry for anti-inflammatory properties (T 1072–1073); other positions such as 16 are "free play" (T 1075).',
 cite:S3+' slide 20; T 1019–1075'},

{id:'S3-078', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'sar-11-beta', dupOf:'S3-077',
 tags:['sar'], source:'both',
 stem:'For anti-inflammatory activity, what orientation must the hydroxyl at C11 have?',
 options:[
  {t:'Beta', correct:true, why:'(T 1070–1072) "the 11th carbon. Needs to have a hydroxy group ... this orientation needs to be ... [Beta]"; slide 20 "11β-OH".'},
  {t:'Alpha', correct:false, why:'Alpha is the orientation of the 6- and 9-halogens (slide 20).'},
  {t:'Either one', correct:false, why:'The SAR on slide 20 specifies 11β.'},
  {t:'It must be absent', correct:false, why:'An 11β-OH is one of the four features that increase activity (slide 20).'}],
 teach:'The two halogens are α (6α-X, 9α-X); the C11 hydroxyl is β (slide 20; T 1067–1072). Cortisone, which carries a ketone at C11 instead of the 11β-OH, is inactive (slide 26).',
 cite:S3+' slides 20, 26; T 1067–1074'},

{id:'S3-079', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'sar-9-alpha', dupOf:'S3-077',
 tags:['sar'], source:'both',
 stem:'Which substituent at C9 increases glucocorticoid anti-inflammatory activity?',
 options:[
  {t:'A 9α-halogen', correct:true, why:'Slide 20 "9α-X"; (T 1069–1070) "the 9th position ... Needs to also have a halogen ... alpha as well".'},
  {t:'A 9β-halogen', correct:false, why:'The 9-halogen must be α (T 1070).'},
  {t:'A 9β-hydroxyl', correct:false, why:'The hydroxyl in the SAR is at C11, β (slide 20).'},
  {t:'A 9α-methyl', correct:false, why:'The C9 feature in the SAR is a halogen (slide 20).'}],
 teach:'In the derivatives on slide 24 the 9α-halogen is fluorine (for example betamethasone dipropionate, clobetasol propionate, triamcinolone acetonide).',
 cite:S3+' slides 20, 24; T 1067–1072'},

{id:'S3-080', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'sar-c1c2', dupOf:'S3-077',
 tags:['sar'], source:'both',
 stem:'Where is the double bond that increases glucocorticoid anti-inflammatory activity?',
 options:[
  {t:'Between C1 and C2', correct:true, why:'Slide 20 "C1- C2 db"; (T 1023–1024) "a double bond present between carbon one. And 2".'},
  {t:'Between C4 and C5', correct:false, why:'Hydrocortisone already has the C4–C5 double bond (slide 24 structure); the added SAR double bond is C1–C2.'},
  {t:'Between C16 and C17', correct:false, why:'Ring D positions are "free play" in his SAR (T 1075).'},
  {t:'Between C20 and C21', correct:false, why:'Side-chain positions are not part of his four SAR features (slide 20).'}],
 teach:'Comparing hydrocortisone with clobetasol propionate on slide 25, the added C1–C2 double bond (drawn in color) is one of the structural changes that move a low-potency steroid to high potency (T 1175–1179).',
 cite:S3+' slides 20, 24–25; T 1019–1025, 1075, 1175–1179'},

/* S3-081 held out: it needs the slide 25 derivative structures, which he said not to memorize (T 1152-1154); no figure in the bank yet. */
{id:'S3-082', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'gr', concept:'gr-hbond-type',
 tags:['cbda'], source:'both',
 stem:'What type of interaction underlies glucocorticoid binding to the glucocorticoid receptor?',
 options:[
  {t:'Hydrogen bonding', correct:true, why:'(T 1133–1134) "their chemical basis of drug action is going to be due to hydrogen bonding interactions"; slide 23.'},
  {t:'Metal coordination', correct:false, why:'Coordination to Zn²⁺/Mg²⁺ is crisaborole in PDE4 (slide 7).'},
  {t:'Covalent DNA binding', correct:false, why:'That is methoxsalen with UVA (slide 18).'},
  {t:'Radical formation', correct:false, why:'That is anthralin (slide 17).'}],
 teach:'Functional groups exposed on the steroid form hydrogen bonds with amino acids lining the receptor\'s binding site (slide 23; T 1135–1137). "do you see any ... non-hydrogen bonds involved here? These are all hydrogen bonds" (T 1138–1139).',
 cite:S3+' slides 7, 17–18, 23; T 1131–1139'},

{id:'S3-083', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'gr', concept:'gr-hbond-count',
 tags:['cbda','number'], source:'both',
 stem:'How many hydrogen bonds hold a glucocorticoid in the glucocorticoid receptor?',
 options:[
  {t:'Six', correct:true, why:'(T 1134) "How many of them? 1234566 hydrogen bonding"; six highlighted on slide 23.'},
  {t:'Four', correct:false, why:'Four is the number of SAR features (slide 20), not of hydrogen bonds.'},
  {t:'Two', correct:false, why:'Two is the number of cations crisaborole binds (slide 7).'},
  {t:'Eight', correct:false, why:'Slide 23 shows six hydrogen bonds.'}],
 teach:'"the question might be just counting the number of hydrogen bonds" (T 1137–1138). On slide 23 the six bonds are with Arg611 and Gln570 (C3 carbonyl), Asn564 (11-OH and 21-OH), Thr739 (C20 carbonyl) and Gln642 (17-OH).',
 cite:S3+' slides 7, 20, 23; T 1131–1139'},

{id:'S3-084', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'gr', concept:'gr-hbond-groups', multi:true,
 tags:['cbda'], source:'slide',
 stem:'Which groups of the glucocorticoid take part in hydrogen bonds in the receptor? Select all that apply.',
 options:[
  {t:'C3 carbonyl', correct:true, why:'Slide 23: bonds to Arg611 and Gln570.'},
  {t:'11β-hydroxyl', correct:true, why:'Slide 23: bond to Asn564.'},
  {t:'17α-hydroxyl', correct:true, why:'Slide 23: bond to Gln642.'},
  {t:'C18 methyl', correct:false, why:'A methyl group has no hydrogen-bond donor or acceptor; it is not bonded on slide 23.'},
  {t:'C1–C2 double bond', correct:false, why:'An SAR feature (slide 20), but not one of the hydrogen bonds on slide 23.'}],
 teach:'Slide 23: six hydrogen bonds, from the C3 carbonyl (two), the 11β-OH, the C20 carbonyl, the C21-OH and the 17α-OH. The 11β-OH bond links this picture to the SAR requirement for an 11β-OH (slide 20).',
 cite:S3+' slides 20, 23; T 1131–1139'},

/* ---- Hydrocortisone, derivatives and potency ----------------------------- */
{id:'S3-085', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'hc', concept:'hc-reference', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['recall'], source:'both',
 stem:'What is the reference molecule for glucocorticoid activity?',
 options:[
  {t:'Hydrocortisone', correct:true, why:'(T 1142–1144) "the gold standard or reference molecule for glucocorticoid activity, hydrocortisone"; slide 24 "(parent drug)".'},
  {t:'Clobetasol propionate', correct:false, why:'A super-potent derivative of hydrocortisone (slides 24–25).'},
  {t:'Cortisone', correct:false, why:'The inactive metabolite of hydrocortisone (slide 26).'},
  {t:'Triamcinolone acetonide', correct:false, why:'A derivative of hydrocortisone (slide 24).'}],
 teach:'Hydrocortisone (cortisol) is the natural product we make; it has both mineralocorticoid and glucocorticoid activity and is the reference against which derivatives are compared (T 1140–1145).',
 cite:S3+' slides 24–26; T 1139–1145'},

{id:'S3-086', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'deriv', concept:'hc-dual-activity',
 tags:['recall'], source:'transcript',
 stem:'Which activities does natural hydrocortisone have?',
 options:[
  {t:'Glucocorticoid and mineralocorticoid', correct:true, why:'(T 1141–1142) "This has both mineral corticoid and glucocorticoid activity."'},
  {t:'Glucocorticoid but not mineralocorticoid', correct:false, why:'It also has mineralocorticoid activity (T 1141–1142).'},
  {t:'Mineralocorticoid but not glucocorticoid', correct:false, why:'Its glucocorticoid (anti-inflammatory) activity makes it the reference (T 1142–1143).'},
  {t:'Neither, until it is converted to cortisone', correct:false, why:'Hydrocortisone is active; cortisone is the inactive form (slide 26).'}],
 teach:'Glucocorticoid property means anti-inflammatory property (T 1142). Hydrocortisone has both glucocorticoid and mineralocorticoid activity and is the reference molecule (T 1140–1144).',
 cite:S3+' slide 26; T 1140–1145'},

{id:'S3-087', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'hc', concept:'hc-derivatives', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which drugs are structural derivatives of hydrocortisone? Select all that apply.',
 options:[
  {t:'Betamethasone dipropionate', correct:true, why:'Slide 24: a derivative of hydrocortisone (T 1150–1152).'},
  {t:'Desonide', correct:true, why:'Slide 24: a derivative of hydrocortisone (T 1151).'},
  {t:'Fluticasone propionate', correct:true, why:'Slide 24: a derivative of hydrocortisone (T 1151).'},
  {t:'Triamcinolone acetonide', correct:true, why:'Slide 24: a derivative of hydrocortisone (T 1151).'},
  {t:'Crisaborole', correct:false, why:'A benzoxaborole, not a steroid (slide 7).'},
  {t:'Methoxsalen', correct:false, why:'A furanocoumarin, not a steroid (slide 18).'}],
 teach:'Slide 24: betamethasone dipropionate, desonide, clobetasol propionate, fluticasone propionate and triamcinolone acetonide are derivatives of hydrocortisone, the parent drug. The point is the parent–derivative relation, not the individual structures (T 1150–1154).',
 cite:S3+' slides 7, 18, 24; T 1144–1154'},

{id:'S3-088', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'deriv', concept:'derivative-why-potency',
 tags:['sar'], source:'both',
 stem:'How do structural changes to hydrocortisone alter the potency of its derivatives?',
 options:[
  {t:'They alter lipophilicity and receptor fit', correct:true, why:'(T 1146–1148) "some increase lipophillicity ... Others change the way the molecule is going to bond in that particular receptor".'},
  {t:'They turn the drug into a designed soft drug', correct:false, why:'Soft drug describes crisaborole\'s designed metabolism (slide 7), not steroid potency.'},
  {t:'They let the drug crosslink DNA', correct:false, why:'DNA crosslinking is methoxsalen\'s CBDA (slide 18).'},
  {t:'They add a boron that binds metals', correct:false, why:'Boron coordination is crisaborole\'s CBDA (slide 7).'}],
 teach:'Derivatives are made from hydrocortisone by structural changes that raise or lower lipophilicity or change the way the molecule bonds in the receptor, and so change potency (T 1145–1148, 1157–1160).',
 cite:S3+' slides 7, 18, 24–25; T 1145–1160'},

{id:'S3-089', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'potency-bases', multi:true,
 tags:['list'], source:'both',
 stem:'Topical glucocorticoid potency rankings are based on which factors? Select all that apply.',
 options:[
  {t:'Structure', correct:true, why:'Slide 25 item 1; (T 1157–1160).'},
  {t:'Delivery vehicle', correct:true, why:'Slide 25 item 2; propylene glycol (T 1160–1163).'},
  {t:'Concentration', correct:true, why:'Slide 25 item 3, % in formulation (T 1163–1164).'},
  {t:'Plasma half-life', correct:false, why:'Not one of the three bases on slide 25.'},
  {t:'Route of elimination', correct:false, why:'Not one of the three bases on slide 25.'}],
 teach:'Slide 25: potency rankings rest on (1) structure, (2) delivery vehicle and (3) concentration (% in formulation). "these potency rankings are going to be driven by the structure. The delivery vehicle, as well as ... the percentage" (T 1173–1175).',
 cite:S3+' slide 25; T 1154–1175'},

{id:'S3-090', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'propylene-glycol',
 tags:['counsel'], source:'both',
 stem:'How does a propylene glycol vehicle raise the potency of a topical glucocorticoid?',
 options:[
  {t:'It helps the drug reach the receptor', correct:true, why:'(T 1160–1163) propylene glycol "allows the molecule to penetrate the skin and reach the receptor site".'},
  {t:'It adds a 9α-halogen to the steroid', correct:false, why:'A vehicle does not change the molecule; the 9α-halogen is structural (slide 20).'},
  {t:'It inhibits 11β-HSD in the skin', correct:false, why:'Not stated; he gave penetration as the vehicle\'s effect (T 1162–1163).'},
  {t:'It lowers the percentage in the cream', correct:false, why:'Concentration is a separate factor on slide 25.'}],
 teach:'The delivery vehicle is the second basis of potency ranking (slide 25). Propylene glycol enhances penetration of the skin, so more drug reaches the glucocorticoid receptor (T 1160–1163).',
 cite:S3+' slides 20, 25; T 1160–1164'},

{id:'S3-091', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'clobetasol-superpotent',
 tags:['recall'], source:'slide',
 stem:'Which potency class does clobetasol propionate 0.05% cream belong to?',
 options:[
  {t:'Super-potent', correct:true, why:'Slide 25: "Super-potent (e.g., Clobetasol Propionate 0.05% cream & ointment)".'},
  {t:'Potent', correct:false, why:'Slide 25 gives betamethasone dipropionate 0.05% as the potent example.'},
  {t:'Medium potency', correct:false, why:'Slide 25 gives betamethasone valerate 0.1% as the medium example.'},
  {t:'Low potency', correct:false, why:'Slide 25 gives hydrocortisone acetate 0.5% and 1% as the low examples.'}],
 teach:'Slide 25 examples, top to bottom: super-potent clobetasol propionate 0.05%; potent betamethasone dipropionate 0.05%; medium betamethasone valerate 0.1%; low hydrocortisone acetate 0.5% and 1%. Clobetasol and betamethasone dipropionate share 0.05% yet differ in class, so structure matters as well as percentage.',
 note:'Slide 25 spells it "Clobesterol Proprionate"; slide 24 and the structure label give clobetasol propionate.',
 cite:S3+' slides 24–25; T 1154–1170'},

{id:'S3-092', skill:'class', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'potency-low-example',
 tags:['recall'], source:'slide',
 stem:'Which of these topical glucocorticoid products ranks lowest in potency?',
 options:[
  {t:'Hydrocortisone acetate 1% cream', correct:true, why:'Slide 25: low potency example.'},
  {t:'Betamethasone valerate 0.1% cream', correct:false, why:'Slide 25: medium potency.'},
  {t:'Betamethasone dipropionate 0.05% cream', correct:false, why:'Slide 25: potent, one class above medium.'},
  {t:'Clobetasol propionate 0.05% cream', correct:false, why:'Slide 25: super-potent, the top class.'}],
 teach:'Hydrocortisone is the parent drug and sits at the low-potency end; its derivatives with structural changes (C1–C2 double bond, 9α-F and others) rank higher (slides 24–25; T 1175–1179).',
 cite:S3+' slides 24–25; T 1154–1179'},

{id:'S3-093', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'potency-frequency',
 tags:['counsel'], source:'transcript',
 stem:'How does potency relate to how often a topical glucocorticoid is applied?',
 options:[
  {t:'Higher potency, fewer applications', correct:true, why:'(T 1170–1173) high-potency agents are applied fewer times; "this low potency, you may have to apply more times".'},
  {t:'Higher potency, more applications', correct:false, why:'Reversed: high potency means fewer (T 1170–1173).'},
  {t:'Lower potency, fewer applications', correct:false, why:'Low potency may need more applications (T 1172–1173).'},
  {t:'Potency has no bearing on frequency', correct:false, why:'He linked them directly (T 1170–1173).'}],
 teach:'A high-potency agent does more per application, so doctors often direct fewer applications; low-potency agents may be applied more often (T 1170–1173).',
 cite:S3+' slide 25; T 1168–1174'},

{id:'S3-094', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'pot', concept:'hc-to-clobetasol-not-metab',
 tags:['tell'], source:'both',
 stem:'Going from hydrocortisone to clobetasol propionate is an example of what?',
 options:[
  {t:'Structural changes that raise potency', correct:true, why:'(T 1175–1179) "this is not metabolism, it\'s just an example of a structural manipulation that then changes the potency"; slide 25.'},
  {t:'A metabolic step that occurs in the skin', correct:false, why:'"this is not metabolism" (T 1177–1178).'},
  {t:'An oxidation by 11β-HSD', correct:false, why:'11β-HSD converts hydrocortisone to cortisone (slide 26).'},
  {t:'A drop from high to low potency', correct:false, why:'The change moves hydrocortisone from low to high potency (T 1175–1176).'}],
 teach:'Hydrocortisone (low potency) becomes clobetasol propionate (super-potent) by added groups and a C1–C2 double bond: medicinal chemistry, not biotransformation (slide 25; T 1175–1179).',
 cite:S3+' slides 25–26; T 1175–1179'},

/* ---- Hydrocortisone ADME and 11β-HSD ------------------------------------- */
{id:'S3-095', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'hc-logp',
 tags:['adme'], source:'transcript',
 stem:'Hydrocortisone has a log P of about 1.5. What follows for topical use?',
 options:[
  {t:'It penetrates the skin poorly', correct:true, why:'(T 1182–1185) "it actually doesn\'t penetrate the skin that well. It\'s [log] P ... about 1.5 ... not that lipophilic".'},
  {t:'It readily goes systemic if overused', correct:false, why:'That warning was for anthralin, which is lipophilic (log P 4, slide 17; T 927–928).'},
  {t:'It accumulates in the dermis', correct:false, why:'Dermis accumulation is crisaborole, log P 3 (slide 7).'},
  {t:'It needs UVA to penetrate', correct:false, why:'UVA pairs with psoralens (slide 18).'}],
 teach:'Though the steroid skeleton looks very lipophilic, hydrocortisone\'s log P is about 1.5, so it does not penetrate the skin well: less than 15% is bioavailable through normal skin versus 95% orally (slide 26; T 1181–1187).',
 note:'Log P 1.5 is spoken (T 1183) and is not printed on slide 26.',
 cite:S3+' slides 7, 17, 26; T 1180–1187'},

{id:'S3-096', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'hc-bioavail',
 tags:['adme','number'], source:'both',
 stem:'How does the bioavailability of hydrocortisone through normal skin compare with oral bioavailability?',
 options:[
  {t:'Below 15% on skin vs 95% orally', correct:true, why:'Slide 26: "<15% normal Skin vs. 95% PO bioavailable"; (T 1185–1187).'},
  {t:'About 95% on skin vs 15% orally', correct:false, why:'Reversed; slide 26 gives <15% skin, 95% PO.'},
  {t:'About 50% by both routes', correct:false, why:'Not the figures on slide 26.'},
  {t:'Below 15% by both routes', correct:false, why:'Oral bioavailability is high, 95% (slide 26; T 1186–1187).'}],
 teach:'Hydrocortisone is not that lipophilic (log P about 1.5), so little crosses normal skin (<15%), whereas oral bioavailability is 95% (slide 26; T 1182–1187).',
 cite:S3+' slide 26; T 1181–1187'},

{id:'S3-097', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'hc-thalf-metab',
 tags:['adme'], source:'both',
 stem:'Why is the half-life of hydrocortisone short (1–2 h)?',
 options:[
  {t:'Because of metabolism', correct:true, why:'(T 1187–1188) "It has a, a short half-life due to, please write this, metabolism"; slide 26 T1/2 = 1–2 h.'},
  {t:'Because of protein binding', correct:false, why:'High protein binding explains its long duration of action, 8–12 h (slide 26; T 1188).'},
  {t:'Because of poor penetration', correct:false, why:'Poor penetration explains low skin bioavailability (slide 26), not the half-life.'},
  {t:'Because of autoxidation', correct:false, why:'Spontaneous autoxidation is anthralin (slide 17).'}],
 teach:'Slide 26: T1/2 = 1–2 h due to metabolism; duration of action = 8–12 h due to high protein binding. Metabolism includes 11β-HSD (to cortisone) and 5β-reductase (to 5β-dihydrocortisol) (slide 26).',
 cite:S3+' slides 17, 26; T 1187–1189'},

{id:'S3-098', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'hc-doa-protein',
 tags:['adme'], source:'both',
 stem:'Hydrocortisone has a short half-life but a duration of action of 8–12 h. What explains the long duration?',
 options:[
  {t:'High protein binding', correct:true, why:'(T 1188–1189) "its duration of action is due to high. Protein binding ... It will linger around in the skin"; slide 26 DoA = 8–12 h.'},
  {t:'Rapid metabolism', correct:false, why:'Metabolism explains the short half-life (T 1187–1188).'},
  {t:'Active hydroxy metabolites', correct:false, why:'Active hydroxylated metabolites were said of ruxolitinib (T 752–754); hydrocortisone\'s metabolites on slide 26 are inactive.'},
  {t:'A dendrimer formulation', correct:false, why:'Dendrimer formulations were discussed for anthralin (slide 17).'}],
 teach:'Short half-life: metabolism. Long duration of action: high protein binding, which keeps it in the skin (slide 26; T 1187–1189).',
 cite:S3+' slides 8, 17, 26; T 1187–1189'},

{id:'S3-099', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'11bhsd-enzyme',
 tags:['metabolism'], source:'both',
 stem:'Which enzyme converts hydrocortisone to cortisone?',
 options:[
  {t:'11β-hydroxysteroid dehydrogenase', correct:true, why:'Slide 26; (T 1191–1193) "the enzyme involved in that is this ... 11 beta hydrosteroid dehydrogenase, 11 beta HSD".'},
  {t:'5β-reductase', correct:false, why:'Converts hydrocortisone to 5β-dihydrocortisol (slide 26).'},
  {t:'3α-hydroxysteroid dehydrogenase (3α-HSD)', correct:false, why:'Converts 5β-dihydrocortisol to urocortisol (slide 26).'},
  {t:'Aldehyde dehydrogenase', correct:false, why:'Acts in crisaborole\'s route to the carboxylic acid (T 708).'}],
 teach:'"if you don\'t understand anything else that is going on, I want you to pay attention to this" (T 1190): hydrocortisone and its major metabolite cortisone are linked by 11β-HSD, an oxidoreductase (slide 26; T 1190–1196).',
 note:'At T 1191 he described hydrocortisone as going "ping pong" between hydrocortisone and cortisone. Whether the enzyme works in both directions differs by isozyme in the assigned reading (Foye Ch. 24), and the recording ends before he finished; no item here depends on reversibility (see notes).',
 cite:S3+' slide 26; T 1190–1196'},

{id:'S3-100', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'11bhsd-name',
 tags:['chem'], source:'both',
 stem:'In the name 11β-HSD, what does "11β" refer to?',
 options:[
  {t:'The β-oriented group on carbon 11', correct:true, why:'(11/04 transcript @790–@925) "what does 11, the number 11, stand for? The carbon ... this also can be written as C11 [beta]".'},
  {t:'The eleventh enzyme of a CYP family', correct:false, why:'11 is a carbon position in steroid numbering, not an enzyme number.'},
  {t:'An α-hydroxyl group on carbon 11', correct:false, why:'The 11-OH of hydrocortisone is β (slides 20, 26).'},
  {t:'Eleven hydrogen bonds to a receptor', correct:false, why:'Glucocorticoids make six hydrogen bonds in the receptor (slide 23).'}],
 teach:'The enzyme acts at C11, where hydrocortisone carries its 11β-OH (slide 26). Steroid numbering (slide 20) names the position; β gives the orientation (toward the viewer).',
 cite:S3+' slides 20, 23, 26; T 1190–1196; 11/04 transcript @722–@925'},

{id:'S3-101', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'cortisone-inactive-why',
 tags:['sar','reasoning'], source:'slide',
 stem:'Why is cortisone inactive as a glucocorticoid?',
 options:[
  {t:'It has a C11 ketone instead of the 11β-OH', correct:true, why:'Slide 26 structures: cortisone (inactive) has C=O at C11; the 11β-OH is one of the four SAR features (slide 20).'},
  {t:'It lacks the C4–C5 double bond found in ring A', correct:false, why:'Cortisone keeps the C4–C5 double bond and the C3 ketone (slide 26).'},
  {t:'It has a 9α-fluorine added to ring B', correct:false, why:'Cortisone has no 9α-halogen (slide 26); a 9α-halogen would raise activity (slide 20).'},
  {t:'It has lost the side chain at C17', correct:false, why:'Cortisone keeps the C17 side chain (slide 26).'}],
 teach:'11β-HSD oxidizes the 11β-OH of hydrocortisone to the 11-ketone of cortisone (slide 26 structures). Since the 11β-OH is needed for activity and also forms one of the receptor hydrogen bonds (slides 20, 23), cortisone is inactive.',
 cite:S3+' slides 20, 23, 26; T 1190–1196'},

{id:'S3-102', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'11bhsd-oxidoreductase',
 tags:['metabolism'], source:'transcript',
 stem:'What type of enzyme is 11β-HSD?',
 options:[
  {t:'An oxidoreductase', correct:true, why:'(T 1193–1194) "It goes oxidation reduction. Oxido reductase enzyme."'},
  {t:'A transferase', correct:false, why:'Transferases such as UGT and sulfotransferase add conjugates (slide 9).'},
  {t:'A hydrolase', correct:false, why:'He named it an oxidoreductase (T 1193).'},
  {t:'A cytochrome P450', correct:false, why:'He named it a hydroxysteroid dehydrogenase, an oxidoreductase (T 1192–1193).'}],
 teach:'11β-HSD oxidizes the C11 hydroxyl of hydrocortisone to the ketone of cortisone; he called it an oxidation–reduction (oxidoreductase) enzyme. Types 1 and 2 exist, but he did not go into them (slide 26; T 1192–1195).',
 cite:S3+' slides 9, 26; T 1190–1196'},

{id:'S3-103', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-hc', sub:'adme', concept:'hc-urine', lowYield:true,
 tags:['metabolism'], source:'slide',
 stem:'Which hydrocortisone metabolites appear in urine?',
 options:[
  {t:'Cortisone and urocortisol', correct:true, why:'Slide 26: "Cortisone & Urocortisol, in urine".'},
  {t:'Benzoic acid and its glucuronide', correct:false, why:'Products of crisaborole (slides 7, 9).'},
  {t:'Anthralin brown and carbon black', correct:false, why:'Polymers of anthralin that stain (slide 17).'},
  {t:'Hydroxylated active metabolites', correct:false, why:'Said of ruxolitinib (T 752–754); hydrocortisone\'s metabolites on slide 26 are inactive.'}],
 teach:'Slide 26: hydrocortisone to cortisone (11β-HSD, inactive); hydrocortisone to 5β-dihydrocortisol (5β-reductase, inactive) to urocortisol (3α-HSD, inactive). Cortisone and urocortisol are excreted in urine.',
 cite:S3+' slides 7, 9, 17, 26; T 1179–1181'}
);
