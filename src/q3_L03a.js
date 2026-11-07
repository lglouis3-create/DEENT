/* ==========================================================================
   Lecture 3, Dr. Smith's part (Tuesday 11/03/2026): Skin-PCol-Students-2026.pdf
   slides 43-76, with the lecture transcript (T, line numbers of
   DEENT_11_03_Lecture_Only_Transcript.txt, lines 1-587; Dr. Sikazwe starts at 588).
   Slides 41-42 (ribosome figure) were recapped only (T 19-26) and belong to Lecture 2.
   Slides 77-80 (psoralens) and the sun-exposure lecture were deferred to her recording
   (T 556-561, 581-583); their questions are in q6_L03c.js.
   Held out (sources disagree on the keyed fact): MHC class in signal 1, dupilumab
   for psoriasis, whether dapsone's acne effect is tied to its antibacterial action,
   ruxolitinib route, metronidazole's indication table, coal tar in children, the
   infliximab antibody percentage, the count of leukoencephalopathy cases.
   ========================================================================== */
const D3 = 'Lecture 3 (Skin-PCol-Students-2026.pdf)';

TOPICS.push(
 {id:'l3-abx', name:'Acne antibiotics on the ribosome', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 43–47',
  subs:[
   {id:'tet',    name:'Tetracyclines', cite:'slides 43–45'},
   {id:'clinda', name:'Clindamycin', cite:'slide 46'},
   {id:'macro',  name:'Macrolides', cite:'slide 47'}]},
 {id:'l3-fol', name:'Folate-pathway antimicrobials, dapsone, metronidazole', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 48–51',
  subs:[
   {id:'tmpsmx', name:'Trimethoprim/sulfamethoxazole', cite:'slides 48–49'},
   {id:'dap',    name:'Dapsone', cite:'slide 50'},
   {id:'metro',  name:'Metronidazole', cite:'slide 51'}]},
 {id:'l3-cyto', name:'Antipsoriatic cytotoxic agents', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 52–57',
  subs:[
   {id:'coal',  name:'Coal tar', cite:'slides 53–54'},
   {id:'anth',  name:'Anthralin and SCAT', cite:'slides 55–56'},
   {id:'other', name:'Shale tar, selenium sulfide, zinc pyrithione', cite:'slide 57'}]},
 {id:'l3-mtx', name:'Methotrexate', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 58–61',
  subs:[
   {id:'mech', name:'Mechanism and folate cycle', cite:'slides 59–60'},
   {id:'ae',   name:'Adverse effects and handling', cite:'slide 61'}]},
 {id:'l3-abat', name:'Abatacept and co-stimulation', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 62–63',
  subs:[
   {id:'sig',  name:'Signal 1 and positive or negative signal 2', cite:'slide 63'},
   {id:'drug', name:'Abatacept structure and mechanism', cite:'slide 63'}]},
 {id:'l3-cytok', name:'Cytokine antagonists: IL-4Rα, IL-17, IL-12/23, IL-23', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 64–69',
  subs:[
   {id:'dup',  name:'Dupilumab', cite:'slide 64'},
   {id:'il17', name:'IL-17 inhibitors', cite:'slides 65–66'},
   {id:'il23', name:'Ustekinumab and IL-23 inhibitors', cite:'slides 67–69'},
   {id:'make', name:'Cytokine or receptor; human, humanized or chimeric', cite:'slides 64–74'}]},
 {id:'l3-tnf', name:'TNF-alpha inhibitors', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 70–74',
  subs:[
   {id:'class', name:'TNF-α and the class black box warning', cite:'slide 70'},
   {id:'drugs', name:'Etanercept, infliximab, adalimumab, golimumab, certolizumab pegol', cite:'slides 71–74'}]},
 {id:'l3-jak', name:'JAK inhibitors', prof:'Smith',
  cite:'Lecture 3 (11/03) — Skin-PCol-Students-2026.pdf, slides 75–76',
  subs:[
   {id:'mech',  name:'JAK and cytokine receptor signaling', cite:'slide 75'},
   {id:'drugs', name:'Tofacitinib, ruxolitinib, upadacitinib', cite:'slide 76'}]}
);

QUESTIONS.push(
/* ---- Tetracyclines ------------------------------------------------------ */
{id:'L3-001', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-30s', dupOf:'L2-111',
 tags:['mechanism'], source:'both',
 stem:'How do doxycycline and minocycline stop bacterial protein synthesis?',
 options:[
  {t:'Bind 30S and block tRNA at the acceptor site', correct:true, why:'Tetracyclines bind the 30S subunit and block aminoacyl-tRNA binding to the acceptor site (slide 43; T 29–31).'},
  {t:'Bind 50S and prevent translocation', correct:false, why:'That is clindamycin (slide 46; T 53–55); tetracyclines bind 30S (slide 43).'},
  {t:'Compete with PABA in bacterial folate synthesis', correct:false, why:'That is sulfamethoxazole, a different class (slide 48; T 75–76).'},
  {t:'Inhibit bacterial dihydrofolate reductase', correct:false, why:'That is trimethoprim (slide 48; T 77–79).'}],
 teach:'The tetracycline class (sarecycline, minocycline, doxycycline) binds the 30S subunit of the bacterial ribosome and keeps the charged tRNA from entering the acceptor site, so the protein is not made (slide 43; T 27–31). Clindamycin and the macrolides act on the other subunit, 50S.',
 cite:D3+' slide 43; T 27–31'},

{id:'L3-002', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-static',
 tags:['definition'], source:'both',
 stem:'The tetracyclines are broad-spectrum bacteriostatic antibiotics. What does bacteriostatic mean here?',
 options:[
  {t:'They keep bacteria from multiplying', correct:true, why:'She explained that they are not really killing the bacteria but preventing them from multiplying (T 34–36; slide 43).'},
  {t:'They lyse the bacterial cell wall', correct:false, why:'Tetracyclines act on the 30S ribosomal subunit, not the cell wall (slide 43).'},
  {t:'They kill the bacteria within a few hours', correct:false, why:'Killing is bactericidal; she said these are "not really killing them" (T 35).'},
  {t:'They act on human keratinocytes', correct:false, why:'Antimicrobial pharmacology is how the drug works in the bug, not in the body (T 9–11).'}],
 teach:'Bacteriostatic drugs stop the bacteria from multiplying rather than killing them, which still helps clear an infection (T 34–36). Clindamycin and the macrolides are bacteriostatic too (slides 46–47; T 56, 67–68).',
 cite:D3+' slide 43; T 34–36'},

{id:'L3-003', skill:'pk', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-entry', lowYield:true,
 tags:['recall'], source:'both',
 stem:'How do tetracyclines get into susceptible bacteria?',
 options:[
  {t:'Passive diffusion and active transport', correct:true, why:'Slide 43; T 31–32 ("It just depends on which medication").'},
  {t:'Receptor-mediated endocytosis', correct:false, why:'Not the route given for tetracyclines (slide 43).'},
  {t:'Through a pore made by the drug', correct:false, why:'Not described; they enter by diffusion and transport (slide 43).'},
  {t:'Carried in on a bacterial folate transporter', correct:false, why:'Folate links belong to the sulfonamides and trimethoprim (slide 48).'}],
 teach:'Tetracyclines enter microorganisms by passive diffusion and active transport, and susceptible organisms concentrate the drug inside the cell (slide 43; T 31–34).',
 cite:D3+' slide 43; T 31–34'},

{id:'L3-004', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-colitis',
 tags:['counseling'], source:'both',
 stem:'A patient taking oral doxycycline for acne reports blood in the stool. What should happen?',
 options:[
  {t:'Stop the doxycycline', correct:true, why:'Blood in the stool suggests pseudomembranous colitis; "they need to stop taking these medications" (T 38–41; slide 44).'},
  {t:'Take it with milk to settle the gut', correct:false, why:'Not advised; blood in the stool is a reason to stop (T 40–41).'},
  {t:'Switch to a higher dose', correct:false, why:'The GI effect is from the drug; more drug does not help (T 37–41).'},
  {t:'Continue and add an antacid', correct:false, why:'She said to stop the drug when blood appears (T 40–41).'}],
 teach:'GI nausea, vomiting and diarrhea from tetracyclines can be significant, and some patients develop pseudomembranous colitis, an inflammation of the GI tract; blood in the stool means the drug must be stopped (slide 44; T 36–41).',
 cite:D3+' slide 44; T 36–41'},

{id:'L3-005', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-young',
 tags:['numbers'], source:'both',
 stem:'Why are tetracyclines avoided in a 6-year-old child?',
 options:[
  {t:'They discolor teeth and impair bone growth', correct:true, why:'Slide 44; T 41–42. Slide 45 gives the age: not in patients younger than 8 years.'},
  {t:'They cause ototoxicity in children', correct:false, why:'Ototoxicity is the minocycline special side effect, not the reason for the age limit (slide 45; T 50–51).'},
  {t:'They are inactive against P. acnes', correct:false, why:'They are effective acne antibiotics (slide 45).'},
  {t:'They cause a lupus-like autoimmune syndrome', correct:false, why:'That is infliximab (slide 72; T 524–530).'}],
 teach:'Bones and teeth are discolored and growth is impaired in the young (slide 44; T 41–42). Slide 45 says the class should not be used in pregnancy or in patients younger than 8 years.',
 cite:D3+' slides 44–45; T 41–42'},

{id:'L3-006', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-photo',
 tags:['counseling'], source:'both',
 stem:'Which counseling point fits a patient starting oral doxycycline for acne?',
 options:[
  {t:'Use sun protection; sunburn can come fast', correct:true, why:'Photosensitivity: "you\'re gonna burn easily ... burn quickly and badly" (T 42–44; slide 44).'},
  {t:'Avoid live vaccines for as long as it is taken', correct:false, why:'That is ustekinumab (slide 67; T 456–460).'},
  {t:'Wipe it off the skin after 2 hours', correct:false, why:'That is the SCAT regimen for anthralin (slide 56; T 170–175).'},
  {t:'Have a TB test before the first dose', correct:false, why:'TB evaluation is stated for secukinumab and ustekinumab (slides 66–67).'}],
 teach:'Tetracyclines cause photosensitivity (slide 44 says in fair-skinned people): the patient burns quickly and badly in the sun (T 42–44). Minocycline and sarecycline may be less photosensitizing than tetracycline or doxycycline (slide 45).',
 cite:D3+' slides 44–45; T 42–44'},

{id:'L3-007', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-ae-list', multi:true,
 tags:['list'], source:'both',
 stem:'Which are adverse effects of oral tetracyclines? Select all that apply.',
 options:[
  {t:'Nausea, vomiting and diarrhea', correct:true, why:'Slide 44; T 37–38 ("can be really significant").'},
  {t:'Pseudomembranous colitis', correct:true, why:'Slide 44; T 38–40.'},
  {t:'Superinfection after overuse', correct:true, why:'Slide 44; T 44–46.'},
  {t:'Severe conjunctivitis on contact', correct:false, why:'Severe conjunctivitis with eye contact is anthralin (slide 56; T 166–167).'}],
 teach:'Slide 44 lists GI nausea, vomiting and diarrhea, pseudomembranous colitis, discolored bones and teeth with impaired growth in the young, photosensitivity, and more superinfections. She added that resistance to the class and overuse have led to superinfections that are hard to treat (T 44–46).',
 cite:D3+' slide 44; T 36–46'},

{id:'L3-008', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-analog-gi',
 tags:['tell'], source:'both',
 stem:'What advantage do minocycline, doxycycline and sarecycline have over the original tetracycline?',
 options:[
  {t:'Better GI absorption', correct:true, why:'Slide 45; T 47–50: a reason to use one of the later analogs.'},
  {t:'Bactericidal action', correct:false, why:'The class is bacteriostatic (slide 43; T 34–36).'},
  {t:'Safe use in pregnancy', correct:false, why:'Slide 45: the class should not be used during pregnancy.'},
  {t:'Binding to the 50S subunit', correct:false, why:'Tetracyclines bind 30S (slide 43).'}],
 teach:'She pointed out that the later analogs have better GI absorption than the original tetracycline, which may be a reason to choose them (slide 45; T 47–50). Slide 45 adds that doxycycline and minocycline are more lipid soluble and that sarecycline has a narrower spectrum.',
 cite:D3+' slide 45; T 46–50'},

{id:'L3-009', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'mino-oto',
 tags:['tell'], source:'both',
 stem:'Which tetracycline has ototoxicity as a special side effect?',
 options:[
  {t:'Minocycline', correct:true, why:'"Another thing I want to point out is a kind of a special side effect. Minocycline will cause [ototoxicity]" (T 50–51; slide 45).'},
  {t:'Doxycycline', correct:false, why:'Ototoxicity is stated for minocycline, not doxycycline (slide 45).'},
  {t:'Sarecycline', correct:false, why:'Slide 45 notes a narrower spectrum for sarecycline, not ototoxicity.'},
  {t:'Azithromycin', correct:false, why:'A macrolide, not a tetracycline (slide 47).'}],
 teach:'Minocycline can cause ototoxicity (slide 45; T 50–51). She singled this out among the tetracycline facts on slide 45.',
 cite:D3+' slide 45; T 50–51'},

{id:'L3-010', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-pregnancy',
 tags:['recall'], source:'slide',
 stem:'A pregnant patient asks about doxycycline for her acne. What is the concern?',
 options:[
  {t:'The class should not be used in pregnancy', correct:true, why:'Slide 45: should not be used during pregnancy or in patients younger than 8 years.'},
  {t:'It is too weak to clear acne during pregnancy', correct:false, why:'Slide 45: tetracyclines are effective and inexpensive.'},
  {t:'It must be given by IV infusion', correct:false, why:'It is given orally for acne (slide 44, oral tetracyclines).'},
  {t:'It causes cumulative liver toxicity', correct:false, why:'That is methotrexate (slide 61; T 237–240).'}],
 teach:'Slide 45: tetracyclines should not be used during pregnancy or in patients younger than 8 years, because they discolor bones and teeth and impair growth (slide 44; T 41–42).',
 cite:D3+' slides 44–45; T 41–42'},

/* ---- Clindamycin -------------------------------------------------------- */
{id:'L3-011', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'clinda-50s',
 tags:['mechanism'], source:'both',
 stem:'What is the mechanism of clindamycin?',
 options:[
  {t:'Binds 50S and prevents translocation', correct:true, why:'Slide 46; T 53–55.'},
  {t:'Binds 30S and blocks tRNA entry', correct:false, why:'That is the tetracyclines (slide 43; T 29–31).'},
  {t:'Inhibits bacterial dihydropteroate formation', correct:false, why:'That step is blocked by sulfamethoxazole competing with PABA (slide 49; T 81–83).'},
  {t:'Inhibits a mite on the skin', correct:false, why:'Inhibition of Demodex brevis is a proposed metronidazole effect (slide 51; T 104–106).'}],
 teach:'Clindamycin attaches to the 50S subunit of the bacterial ribosome and prevents translocation, which the bacteria need for protein synthesis; it is bacteriostatic (slide 46; T 53–56).',
 note:'At T 54–55 she described translocation as "the binding together of the amino acids"; slide 46 says "prevents translocation". Keyed to the slide.',
 cite:D3+' slide 46; T 53–56'},

{id:'L3-012', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'clinda-oral-ae',
 tags:['recall'], source:'both',
 stem:'Which are the most significant adverse effects of oral clindamycin?',
 options:[
  {t:'Pseudomembranous colitis and liver impairment', correct:true, why:'T 56–58; slide 46 (with N/V/D and rare neutropenia).'},
  {t:'Ototoxicity and tooth discoloration', correct:false, why:'Ototoxicity is minocycline and tooth discoloration the tetracyclines (slides 44–45).'},
  {t:'Lupus-like syndrome and acute infusion reactions', correct:false, why:'Those are infliximab (slide 72; T 519–530).'},
  {t:'Conjunctivitis and blepharitis', correct:false, why:'Eye effects belong to dupilumab (slide 64; T 387–389).'}],
 teach:'"Probably the most significant side effects are pseudomembranous colitis, and then impaired liver function" (T 56–58). Slide 46 also lists N/V/D and rare neutropenia.',
 cite:D3+' slide 46; T 56–58'},

{id:'L3-013', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'clinda-topical-absorb',
 tags:['numbers'], source:'both',
 stem:'Why does topical clindamycin still carry a risk of pseudomembranous colitis?',
 options:[
  {t:'About 10% of the applied dose is absorbed', correct:true, why:'Slide 46; T 59–61: even that smallish absorption leaves a (rare) risk.'},
  {t:'The foam vehicle irritates the gut', correct:false, why:'The vehicles cause drying and irritation of the skin (slide 46; T 61–63).'},
  {t:'It is converted to a macrolide in the skin', correct:false, why:'Not stated; clindamycin itself is absorbed (slide 46).'},
  {t:'About 90% of the dose reaches the blood', correct:false, why:'Slide 46 gives approximately 10%, not 90%.'}],
 teach:'Approximately 10% of an applied topical dose of clindamycin is absorbed, so there is still a risk, though rare, of pseudomembranous colitis (slide 46; T 58–61). The Katzung reading gives the same figure.',
 cite:D3+' slide 46; T 58–61'},

{id:'L3-014', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'clinda-vehicle',
 tags:['counseling'], source:'both',
 stem:'A patient finds a hydroalcoholic clindamycin product drying and irritating. Which form is better tolerated?',
 options:[
  {t:'A water-based gel or lotion', correct:true, why:'Slide 46; T 62–64: less irritation on application.'},
  {t:'A foam formulation', correct:false, why:'Slide 46 groups the foam with the hydroalcoholic vehicle as drying and irritating.'},
  {t:'A higher-strength hydroalcoholic solution', correct:false, why:'The vehicle causes the irritation; more of it does not help (slide 46).'},
  {t:'A product combined with benzoyl peroxide', correct:false, why:'Burning with benzoyl peroxide is stated for topical macrolides (slide 47).'}],
 teach:'Hydroalcoholic and foam clindamycin vehicles can cause drying, burning and stinging; water-based gel and lotion formulations are better tolerated (slide 46; T 61–64).',
 cite:D3+' slide 46; T 61–64'},

{id:'L3-015', skill:'class', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'clinda-resistance',
 tags:['recall'], source:'both',
 stem:'Which problem may limit the use of clindamycin for acne?',
 options:[
  {t:'Bacterial resistance', correct:true, why:'"Resistance is a problem now ... that may limit our use of this drug for treating acne" (T 64–65; slide 46).'},
  {t:'Photosensitivity', correct:false, why:'Photosensitivity is a tetracycline effect (slide 44).'},
  {t:'Staining of clothing', correct:false, why:'Staining is anthralin (slide 56; T 168–169).'},
  {t:'Cumulative liver toxicity', correct:false, why:'That is methotrexate (slide 61; T 237–240).'}],
 teach:'Resistance is now a problem with clindamycin and may limit its use in acne (slide 46; T 64–65). Resistance is also an issue for the macrolides and the tetracyclines (slides 44, 47; T 44, 71); slide 45 says P. acnes resistance is less with the tetracyclines than with the macrolides and clindamycin.',
 cite:D3+' slides 45–47; T 64–65'},

/* ---- Macrolides --------------------------------------------------------- */
{id:'L3-016', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'ribosome-subunit-tell', dupOf:'L3-001',
 tags:['tell'], source:'both',
 stem:'Which acne antibiotic binds the 30S ribosomal subunit rather than the 50S?',
 options:[
  {t:'Minocycline', correct:true, why:'Tetracyclines bind 30S (slide 43; T 29–31).'},
  {t:'Erythromycin', correct:false, why:'Macrolides attach to 50S (slide 47; T 66–67).'},
  {t:'Clindamycin', correct:false, why:'Clindamycin attaches to 50S (slide 46; T 54).'},
  {t:'Azithromycin', correct:false, why:'Macrolides attach to 50S (slide 47; T 66–67).'}],
 teach:'Of the three ribosome-acting acne antibiotics, the tetracyclines bind 30S; clindamycin and the macrolides (erythromycin, azithromycin) bind 50S (slides 43, 46–47; T 29–31, 53–55, 66–67). Clindamycin prevents translocation (slide 46).',
 cite:D3+' slides 43, 46–47; T 29–31, 53–55, 66–67'},

{id:'L3-017', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'macro-ddi',
 tags:['recall'], source:'both',
 stem:'Why do oral erythromycin and azithromycin cause many drug interactions?',
 options:[
  {t:'Because of how they are metabolized', correct:true, why:'"These drugs have lots of drug interactions because of how they\'re metabolized" (T 69–70; slide 47).'},
  {t:'They bind albumin and displace other drugs', correct:false, why:'Not the reason she gave; she named metabolism (T 69–70).'},
  {t:'They block dihydrofolate reductase', correct:false, why:'That is trimethoprim and methotrexate (slides 48, 59).'},
  {t:'They are pegylated proteins', correct:false, why:'PEG is attached to certolizumab (slide 74).'}],
 teach:'Oral macrolides cause nausea, vomiting and diarrhea (the worst ones) and epigastric pain, and have many drug interactions because of how they are metabolized (slide 47; T 68–70).',
 cite:D3+' slide 47; T 68–70'},

{id:'L3-018', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'macro-topical',
 tags:['counseling'], source:'both',
 stem:'What side effect is expected with topical erythromycin, especially with benzoyl peroxide?',
 options:[
  {t:'Burning and drying at the site', correct:true, why:'Slide 47 ("especially when combined with benzoyl peroxide"); T 70–71 (burning, stinging).'},
  {t:'Dark brown staining of the skin', correct:false, why:'That is anthralin (slide 56).'},
  {t:'Ototoxicity', correct:false, why:'That is minocycline (slide 45).'},
  {t:'Photosensitivity in fair skin', correct:false, why:'Stated for oral tetracyclines (slide 44).'}],
 teach:'Topical macrolides cause burning and drying, especially when combined with benzoyl peroxide (slide 47); she described burning and stinging at the site of application (T 70–71).',
 cite:D3+' slide 47; T 70–71'},

{id:'L3-019', skill:'class', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'ribosome-classes', multi:true,
 tags:['list'], source:'both',
 stem:'Which acne antibiotics act on the bacterial ribosome? Select all that apply.',
 options:[
  {t:'Doxycycline', correct:true, why:'Tetracycline class, 30S (slide 43).'},
  {t:'Clindamycin', correct:true, why:'50S (slide 46).'},
  {t:'Erythromycin', correct:true, why:'Macrolide, 50S (slide 47).'},
  {t:'Trimethoprim/sulfamethoxazole', correct:false, why:'"Another completely different class": it blocks two steps of folate synthesis (slides 48–49; T 73–79).'}],
 teach:'"The tetracycline class, clindamycin, and the macrolides, those are on the image that we showed of how these drugs work" (T 71–73): all three inhibit protein synthesis at the ribosome. Trimethoprim/sulfamethoxazole works on folate synthesis instead (slides 48–49).',
 cite:D3+' slides 43, 46–48; T 71–75'},

/* ---- Trimethoprim/sulfamethoxazole -------------------------------------- */
{id:'L3-020', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'tmpsmx', concept:'smx-paba',
 tags:['mechanism'], source:'both',
 stem:'How does sulfamethoxazole act?',
 options:[
  {t:'Competes with PABA, blocking dihydrofolic acid', correct:true, why:'Slide 48; T 75–76, 81–83.'},
  {t:'Inhibits bacterial dihydrofolate reductase enzyme', correct:false, why:'That is the trimethoprim component (slide 48; T 77–79).'},
  {t:'Binds the 30S ribosomal subunit', correct:false, why:'That is the tetracyclines (slide 43).'},
  {t:'Crosslinks bacterial DNA', correct:false, why:'DNA crosslinking is proposed for coal tar (slide 53; T 133–135).'}],
 teach:'Sulfamethoxazole competes with para-aminobenzoic acid (PABA), so the bacterium cannot make dihydropteroic acid and then dihydrofolic acid (slides 48–49; T 75–76, 81–83).',
 cite:D3+' slides 48–49; T 75–83'},

{id:'L3-021', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'tmpsmx', concept:'tmp-dhfr',
 tags:['mechanism'], source:'both',
 stem:'Which step does the trimethoprim component block?',
 options:[
  {t:'Dihydrofolic acid to tetrahydrofolic acid', correct:true, why:'Trimethoprim reversibly inhibits dihydrofolate reductase (slide 48; T 77–79, 84–85).'},
  {t:'PABA to dihydropteroic acid', correct:false, why:'That step is blocked by sulfamethoxazole (slide 49; T 81–83).'},
  {t:'Aminoacyl-tRNA binding at the ribosome acceptor site', correct:false, why:'That is the tetracyclines (slide 43).'},
  {t:'JAK phosphorylation of a receptor', correct:false, why:'That is the JAK inhibitors (slide 75; T 562–569).'}],
 teach:'Trim/sulfa puts two blocks in one pathway: sulfamethoxazole at the PABA step and trimethoprim at dihydrofolate reductase, so less tetrahydrofolic acid is made (slides 48–49; T 79–85). Slide 49 notes the combination is much more effective than either drug by itself.',
 cite:D3+' slides 48–49; T 77–85'},

{id:'L3-022', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'tmpsmx', concept:'folate-purines',
 tags:['reasoning','room'], source:'both',
 quote:'Room question, 11/03, T 85–86: "what is folic acid needed for in cells? Anybody remember?"',
 stem:'Why does blocking tetrahydrofolic acid production stop a microbe from dividing?',
 options:[
  {t:'It cannot make purines for DNA', correct:true, why:'Answer given in class: "Production of like your purines, right?" (T 86–89).'},
  {t:'Its ribosome cannot read mRNA', correct:false, why:'Ribosome blockade is the tetracycline, clindamycin and macrolide mechanism (slides 43–47).'},
  {t:'Its cell wall loses peptidoglycan', correct:false, why:'Not part of the folate pathway taught (slide 49).'},
  {t:'Its membrane fills with sterols', correct:false, why:'Not part of the folate pathway taught (slide 49).'}],
 teach:'Folate is needed to make purines, two of the DNA bases; without purines the microbe does not have the machinery to divide (T 85–89). Methotrexate uses the same logic in keratinocytes (slide 59; T 219–223).',
 cite:D3+' slide 49; T 84–89'},

/* ---- Dapsone ------------------------------------------------------------ */
{id:'L3-023', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'dap', concept:'dapsone-leprosy-mech',
 tags:['mechanism'], source:'both',
 stem:'What is the mechanism of dapsone in leprosy?',
 options:[
  {t:'Like the sulfonamides, it antagonizes PABA', correct:true, why:'Slide 50; T 91–94: competing for PABA in folic acid synthesis.'},
  {t:'Like the macrolides, it binds 50S', correct:false, why:'Dapsone is compared to the sulfonamides, not the macrolides (slide 50).'},
  {t:'Like methotrexate, it blocks the human DHFR enzyme', correct:false, why:'Methotrexate acts in the body (slide 59); dapsone in leprosy acts on bacterial PABA use (slide 50).'},
  {t:'Like etanercept, it binds TNF-α', correct:false, why:'Etanercept is a TNF fusion protein (slide 71).'}],
 teach:'For leprosy, dapsone acts like the sulfonamides: a competitive antagonist of PABA that prevents normal bacterial use of PABA for folic acid synthesis (slide 50; T 91–94). In acne its mechanism is not fully understood (slide 50; T 91).',
 cite:D3+' slide 50; T 90–94'},

{id:'L3-024', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'dap', concept:'dapsone-acne-mech',
 tags:['mechanism'], source:'both',
 stem:'What is thought to explain the benefit of topical dapsone gel in acne?',
 options:[
  {t:'Anti-inflammatory action on neutrophils', correct:true, why:'Slide 50: neutrophils and their products may be the site of action; T 94–98: reducing cytokines from neutrophils.'},
  {t:'Inhibition of human dihydrofolate reductase', correct:false, why:'That is methotrexate in psoriasis (slide 59).'},
  {t:'Binding to IL-17A in the follicle', correct:false, why:'IL-17A binding is secukinumab and ixekizumab (slide 66).'},
  {t:'Shrinking the sebaceous gland', correct:false, why:'Not proposed for dapsone (slide 50).'}],
 teach:'Dapsone is used as a topical gel for acne (slide 50; T 101–102). Its acne mechanism is not fully understood; anti-inflammatory activity is thought to be useful, with neutrophils and neutrophil products a possible site of action (slide 50; T 94–98).',
 note:'Not keyed: whether the acne effect is tied to its antibacterial action. She said "It\'s associated a bit with an antibacterial action" (T 94–96); slide 50 says it "does not appear to be associated with its antibacterial action".',
 cite:D3+' slide 50; T 94–102'},

{id:'L3-025', skill:'class', prof:'Smith', tier:'new', topic:'l3-fol', sub:'dap', concept:'dapsone-uses',
 tags:['recall'], source:'both',
 stem:'Dapsone is used for which two conditions?',
 options:[
  {t:'Leprosy, and acne as a topical gel', correct:true, why:'Slide 50; T 90–91, 101–102.'},
  {t:'Rosacea and dandruff', correct:false, why:'Rosacea is metronidazole (slide 51) and dandruff selenium sulfide (T 199–200).'},
  {t:'Psoriasis and otitis externa', correct:false, why:'Shale tar has the otitis externa use (slide 57; T 191–193).'},
  {t:'Atopic dermatitis, and leprosy as a gel', correct:false, why:'Dapsone\'s skin use is acne (slide 50).'}],
 teach:'Dapsone treats leprosy and, topically, acne (slide 50; T 90–91, 101–102).',
 cite:D3+' slide 50; T 89–102'},

/* L3-026 held out: a side remark on leprosy and armadillos (T 98-100), on no slide and outside her exam cues. */
{id:'L3-027', skill:'class', prof:'Smith', tier:'new', topic:'l3-fol', sub:'metro', concept:'metro-use',
 tags:['recall'], source:'both',
 stem:'Topical metronidazole is usually used for which skin condition?',
 options:[
  {t:'Rosacea', correct:true, why:'"Usually this is used for rosacea" (T 102–103); Katzung also gives rosacea.'},
  {t:'Plaque psoriasis', correct:false, why:'Metronidazole is taught with the antimicrobials, not the antipsoriatics (slides 51–52).'},
  {t:'Atopic dermatitis', correct:false, why:'Not an indication given for metronidazole (slide 51; T 102–104).'},
  {t:'Dandruff', correct:false, why:'Dandruff shampoos contain selenium sulfide (T 199–200).'}],
 teach:'Metronidazole is an antimicrobial used topically, usually for rosacea; it has been used for a long time and works, though how is not clear (slide 51; T 102–108).',
 note:'Acne is not offered as an option: the drug chart places metronidazole in its acne table, while she said "it\'s on your drug list as being used for rosacea" (T 103).',
 cite:D3+' slide 51; T 102–108'},

{id:'L3-028', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'metro', concept:'metro-mech',
 tags:['mechanism'], source:'both',
 stem:'What is proposed for the mechanism of topical metronidazole?',
 options:[
  {t:'Inhibits Demodex brevis or acts on neutrophils', correct:true, why:'Slide 51; T 104–107: mechanism unknown, these are the proposals.'},
  {t:'Binds the p40 subunit of IL-12 and IL-23', correct:false, why:'That is ustekinumab (slide 67).'},
  {t:'Inhibits translocation on the 50S subunit', correct:false, why:'That is clindamycin (slide 46).'},
  {t:'Stops keratinocyte turnover by crosslinking DNA', correct:false, why:'Proposed for coal tar (slide 53).'}],
 teach:'The mechanism of metronidazole in rosacea is unknown. It may inhibit the mite Demodex brevis, or act as an anti-inflammatory through a direct effect on neutrophil function (slide 51; T 104–108).',
 cite:D3+' slide 51; T 104–108'},

{id:'L3-029', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-fol', sub:'metro', concept:'metro-vehicle',
 tags:['counseling'], source:'both',
 stem:'Which metronidazole formulations tend to be better tolerated on the skin?',
 options:[
  {t:'Cream and lotion', correct:true, why:'Slide 51; T 111.'},
  {t:'Gel', correct:false, why:'The gel is the more drying form (slide 51; T 110–112).'},
  {t:'Ear drops', correct:false, why:'Ear drops are a shale tar use for otitis externa (T 192–193).'},
  {t:'Medicated shampoo', correct:false, why:'Shampoos are the selenium sulfide and zinc pyrithione products (T 199).'}],
 teach:'All metronidazole formulations cause some irritation at the application site; the gel is more drying (dry skin, redness, watering of the eyes), and cream and lotion formulations are better tolerated (slide 51; T 108–112).',
 note:'She called the gels "water-based" (T 110) and then "alcohol-based" (T 112); slide 51 says water-based. The key does not depend on the vehicle base.',
 cite:D3+' slide 51; T 108–112'},

/* ---- Cytotoxic agents --------------------------------------------------- */
{id:'L3-030', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'cyto-general',
 tags:['mechanism'], source:'both',
 stem:'How are the cytotoxic agents such as coal tar thought to help psoriasis?',
 options:[
  {t:'By slowing epidermal cell turnover', correct:true, why:'Slide 53: "decreasing the rate of epidermal cell turnover"; T 131–132.'},
  {t:'By killing P. acnes in the follicle', correct:false, why:'P. acnes is the target of the acne antibiotics (slides 43–47).'},
  {t:'By binding TNF-α in plasma', correct:false, why:'That is the TNF-α inhibitors (slide 70).'},
  {t:'By blocking signal 2 on T cells', correct:false, why:'That is abatacept (slide 63).'}],
 teach:'The cytotoxic agents are old products whose mechanisms are not clear and whose efficacy is not always known; they are used for psoriasis and are thought to decrease the rate of epidermal cell turnover (slide 53; T 118–132).',
 cite:D3+' slides 52–53; T 118–132'},

{id:'L3-031', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'coal-mech',
 tags:['mechanism'], source:'both',
 stem:'What is the proposed mechanism of coal tar in psoriasis?',
 options:[
  {t:'Antiproliferative and anti-inflammatory; crosslinks DNA', correct:true, why:'Slide 53; T 132–135.'},
  {t:'Folic acid analog that blocks DHFR', correct:false, why:'That is methotrexate (slide 59).'},
  {t:'Synthetic chrysarobin that acts on keratinocyte mitochondria', correct:false, why:'That is anthralin (slide 55).'},
  {t:'Fusion protein that binds CD80/86', correct:false, why:'That is abatacept (slide 63).'}],
 teach:'Coal tar is thought to be antiproliferative and anti-inflammatory; it crosslinks with DNA, which probably inhibits cell division of the dividing keratinocytes. The mechanism is not fully known because coal tar has so many components that each is hard to test (slide 53; T 132–139).',
 cite:D3+' slide 53; T 129–139'},

{id:'L3-032', skill:'chem', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'coal-phenol',
 tags:['recall'], source:'both',
 stem:'Which coal tar constituents relieve itching?',
 options:[
  {t:'The phenolics', correct:true, why:'Slide 53: phenolic constituents are antipruritic; T 139–142.'},
  {t:'The sulfur compounds', correct:false, why:'Sulfur products were mentioned for odor, not itch (T 211–212).'},
  {t:'The zinc salts', correct:false, why:'Zinc pyrithione is a separate product (slide 57).'},
  {t:'The selenium salts', correct:false, why:'Selenium sulfide is a separate product (slide 57).'}],
 teach:'A class of compounds in coal tar, the phenolics, is good at stopping the itch of psoriasis, one reason people use coal tar so often (slide 53; T 139–142). Its benefit may partly be a placebo effect; it is OTC and inexpensive (slide 53; T 142–145).',
 cite:D3+' slide 53; T 139–145'},

{id:'L3-033', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'coal-photo-carc',
 tags:['counseling'], source:'both',
 stem:'A patient has used coal tar for psoriasis for years. Which two adverse effects are the main concerns?',
 options:[
  {t:'Photosensitivity and carcinogenicity', correct:true, why:'"The photosensitizing ... that\'s a big issue. And then ... it\'s carcinogenic" (T 145–148; slide 54).'},
  {t:'Ototoxicity and staining of the teeth', correct:false, why:'Those are tetracycline effects (slides 44–45).'},
  {t:'Liver toxicity and pancytopenia', correct:false, why:'Those are methotrexate (slide 61).'},
  {t:'Conjunctivitis and dry eye', correct:false, why:'Those are dupilumab eye effects (slide 64).'}],
 teach:'Coal tar has many side effects (slide 54: irritation, folliculitis, contact dermatitis, staining, odor). She pointed out photosensitivity and carcinogenicity: a long-term user should see a dermatologist regularly to check the skin (T 145–150).',
 cite:D3+' slide 54; T 145–150'},

{id:'L3-034', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'coal-oozing',
 tags:['reasoning'], source:'both',
 stem:'Why is coal tar a concern on psoriasis with oozing vesicles?',
 options:[
  {t:'More of it can be absorbed systemically', correct:true, why:'"If your skin is open like that with oozing vesicles, the absorption systemically could occur" (T 152–155). Slide 54 lists the caution without a reason.'},
  {t:'It turns the vesicles dark brown', correct:false, why:'Dark brown or black staining is anthralin (slide 56).'},
  {t:'The exudate inactivates the coal tar quickly', correct:false, why:'Not the reason given (T 152–155).'},
  {t:'It causes severe conjunctivitis', correct:false, why:'Severe conjunctivitis with eye contact is anthralin (slide 56).'}],
 teach:'Open skin with vesicles or oozing lets coal tar reach the circulation, so it is used with caution there (T 152–155). Slide 54 also lists cautions in pregnancy and breastfeeding.',
 note:'Slide 54 also states "Systemic side effects do not occur" for coal tar in ordinary use; the oozing-skin reason is hers (T 154–155). The advice differs in degree: she said to "use low concentration products" on vesicular or oozing skin (T 152–153); slide 54 says to "avoid even low concentration products" there. The question asks the reason, on which both agree.',
 cite:D3+' slide 54; T 150–155'},

{id:'L3-035', skill:'chem', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'anth-source',
 tags:['recall'], source:'both',
 stem:'What is anthralin?',
 options:[
  {t:'Synthetic chrysarobin, from araroba tree bark', correct:true, why:'Slide 55; T 156–160.'},
  {t:'A petroleum fraction that is also called ichthammol', correct:false, why:'That is shale tar (slide 57; T 184–186).'},
  {t:'A folic acid analog', correct:false, why:'That is methotrexate (slide 59).'},
  {t:'A selenium salt used in shampoos', correct:false, why:'That is selenium sulfide (slide 57).'}],
 teach:'Anthralin is a synthetic version of chrysarobin, which comes from the bark of the Brazilian araroba tree; it began as a herbal product and is now made in the lab (slide 55; T 156–160).',
 cite:D3+' slide 55; T 156–160'},

{id:'L3-036', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'anth-mech',
 tags:['mechanism'], source:'both',
 stem:'Which effects are proposed for anthralin in psoriasis?',
 options:[
  {t:'Antiproliferative, and less T-lymphocyte activation', correct:true, why:'Slide 55; T 160–165.'},
  {t:'Antifungal and cytostatic', correct:false, why:'That pair is selenium sulfide and zinc pyrithione (slide 57).'},
  {t:'Binding of the IL-17A and IL-17F cytokines in plaques', correct:false, why:'Biological drugs bind IL-17 or its receptor (slide 66).'},
  {t:'Blockade of bacterial folate synthesis', correct:false, why:'That is trimethoprim/sulfamethoxazole (slide 48).'}],
 teach:'The exact mechanism is not known. Anthralin may act directly on epidermal keratinocytes, affecting mitochondria and reducing mitotic activity, and it prevents T-lymphocyte activation, a form of immunosuppression that helps with the inflammation of psoriasis. The result is less hyperproliferation in the plaques (slide 55; T 160–166).',
 cite:D3+' slide 55; T 160–166'},

{id:'L3-037', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'anth-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which are adverse effects of anthralin? Select all that apply.',
 options:[
  {t:'Skin irritation', correct:true, why:'Slide 56 (may be significant); T 166.'},
  {t:'Severe conjunctivitis with eye contact', correct:true, why:'Slide 56; T 166–167.'},
  {t:'Staining of skin, hair and clothes', correct:true, why:'Slide 56; T 168–169.'},
  {t:'Liver toxicity after systemic absorption', correct:false, why:'Systemic side effects do not occur with anthralin (slide 56; T 167–168).'}],
 teach:'Anthralin causes local irritation, folliculitis, allergic contact dermatitis, erythema on normal skin, severe conjunctivitis with eye contact, and dark brown or black staining of skin, hair and clothes; systemic side effects do not occur (slide 56; T 166–169).',
 cite:D3+' slide 56; T 166–169'},

{id:'L3-038', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'scat-regimen',
 tags:['counseling','numbers'], source:'both',
 stem:'In short-contact anthralin therapy (SCAT), how is the ointment used?',
 options:[
  {t:'On thick plaques for 2 hours or less, then wiped off', correct:true, why:'Slide 56; T 170–173.'},
  {t:'On the whole body overnight, then washed off', correct:false, why:'It goes on thick plaques and comes off within 2 hours (slide 56).'},
  {t:'On the face first, then the plaques', correct:false, why:'The face is avoided (slide 56; T 177–181).'},
  {t:'Under occlusion for 24 hours, then washed off with soap', correct:false, why:'Contact is short: 2 hours or less (slide 56).'}],
 teach:'SCAT: the anthralin ointment is applied to thick plaques for 2 hours or less and then wiped off, after the surrounding normal skin is protected with zinc oxide ointment or a nonmedicated stiff paste (slide 56; T 169–175). "The SCAT therapy regimen is really important" (T 181–182).',
 cite:D3+' slide 56; T 169–183'},

{id:'L3-039', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'scat-zinc',
 tags:['counseling'], source:'both',
 stem:'What goes on the healthy skin around the plaques before anthralin ointment is applied?',
 options:[
  {t:'Zinc oxide ointment', correct:true, why:'Slide 56; T 173–175.'},
  {t:'Coal tar gel', correct:false, why:'Coal tar is another antipsoriatic, not a protectant (slide 53).'},
  {t:'Benzoyl peroxide wash', correct:false, why:'Not part of SCAT (slide 56).'},
  {t:'Topical clindamycin', correct:false, why:'An acne antibiotic, not part of SCAT (slide 46).'}],
 teach:'In SCAT the healthy skin around the plaques is protected with zinc oxide (or a nonmedicated stiff paste), then anthralin is applied to the plaques (slide 56; T 173–175).',
 cite:D3+' slide 56; T 173–175'},

{id:'L3-040', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'scat-why',
 tags:['reasoning'], source:'transcript',
 stem:'Why is anthralin ointment wiped off the plaques after a short contact time?',
 options:[
  {t:'To prevent desquamation and peeling', correct:true, why:'"It\'s pretty strong. You don\'t want desquamation" (T 175–177, 182–183).'},
  {t:'Because it loses activity after an hour', correct:false, why:'Not the reason she gave; it is removed because it is strong (T 175–177).'},
  {t:'To limit absorption and liver toxicity', correct:false, why:'Systemic side effects do not occur with anthralin (slide 56).'},
  {t:'To let the zinc oxide be absorbed', correct:false, why:'Zinc oxide protects the surrounding skin (slide 56).'}],
 teach:'Anthralin is strong; leaving it on risks desquamation, with the plaques peeling and exposing a layer of skin. SCAT protects healthy skin and gets the ointment off the plaque (T 175–177, 181–183).',
 cite:D3+' slide 56; T 175–183'},

{id:'L3-041', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'anth-intertrig',
 tags:['room'], source:'both',
 quote:'Room question, 11/03, T 178–179: "Does anybody know what the intertriginous regions of our body are?"',
 stem:'Besides the face, where should anthralin ointment be avoided even if plaques are present?',
 options:[
  {t:'Skin folds such as the underarms', correct:true, why:'Intertriginous regions: inner elbows, knees, under the arms, where the skin is thin (T 178–181; slide 56).'},
  {t:'The thick plaques on the front of the knees', correct:false, why:'Thick plaques are where SCAT applies it (slide 56); the folds are avoided.'},
  {t:'The scalp', correct:false, why:'Not one of the areas she named (T 177–181).'},
  {t:'The trunk', correct:false, why:'Not one of the areas she named (T 177–181).'}],
 teach:'Anthralin should be used with caution, if at all, on the face and intertriginous areas because of severe irritation (slide 56). Intertriginous regions are where the body folds, such as the inner elbows, behind the knees and under the arms; the skin there is thin (T 178–181).',
 cite:D3+' slide 56; T 177–183'},

{id:'L3-042', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'other', concept:'shale-vs-coal',
 tags:['tell'], source:'both',
 stem:'Why might shale tar be preferred over coal tar for a patient who wants a tar product?',
 options:[
  {t:'It is not photosensitizing', correct:true, why:'"It also is not photosensitizing like coal tar. So ... using the shale tar might be better" (T 189–191; slide 57).'},
  {t:'Clinical studies prove it works', correct:false, why:'No clinical studies have shown its effectiveness (slide 57; T 187–188).'},
  {t:'Its mechanism is well defined', correct:false, why:'Its mechanism is not clear (slide 57; T 187).'},
  {t:'It has no odor', correct:false, why:'Coal tar and shale products do not smell good (T 210–211).'}],
 teach:'Shale tar (ichthammol) is another petroleum product, a different fraction of compounds than coal tar. It gives symptomatic relief, helps itching and, unlike coal tar, has no photosensitizing activity; slide 57 adds that it is less irritating (slide 57; T 184–191).',
 cite:D3+' slide 57; T 184–191'},

{id:'L3-043', skill:'class', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'other', concept:'shale-uses', multi:true,
 tags:['list'], source:'both',
 stem:'Besides psoriasis, shale tar is used for which conditions? Select all that apply.',
 options:[
  {t:'Eczema', correct:true, why:'Slide 57; T 191–192.'},
  {t:'Rosacea', correct:true, why:'Slide 57; T 192.'},
  {t:'Acute otitis externa', correct:true, why:'Slide 57; T 192–193: drops in the ear for an outer ear infection.'},
  {t:'Pseudomembranous colitis', correct:false, why:'A tetracycline and clindamycin adverse effect, not a shale tar use (slides 44, 46).'}],
 teach:'Shale tar is used for psoriasis and also for eczema, rosacea and acute otitis externa, as ear drops (slide 57; T 191–193).',
 cite:D3+' slide 57; T 191–193'},

{id:'L3-044', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'other', concept:'se-zn',
 tags:['recall'], source:'both',
 stem:'Which activities do selenium sulfide and zinc pyrithione have?',
 options:[
  {t:'Cytostatic and antifungal', correct:true, why:'Slide 57; T 193–195. Their mechanism is not known (T 200–201).'},
  {t:'Antibacterial and photosensitizing', correct:false, why:'Photosensitizing is coal tar (slide 54).'},
  {t:'Immunosuppressive via signal 2', correct:false, why:'That is abatacept (slide 63).'},
  {t:'Keratolytic and comedolytic', correct:false, why:'Not the activities given for these two (slide 57).'}],
 teach:'Selenium sulfide and zinc pyrithione are cytostatic (they stop keratinocytes from proliferating so much) and antifungal; the antifungal part is not why they are used in psoriasis but may help in dandruff shampoos. Their mechanism is not known (slide 57; T 193–201).',
 cite:D3+' slide 57; T 193–201'},

/* ---- Methotrexate ------------------------------------------------------- */
{id:'L3-045', skill:'mech', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'mtx-mech',
 tags:['mechanism'], source:'both',
 stem:'How does methotrexate reduce keratinocyte hyperproliferation in psoriasis?',
 options:[
  {t:'Inhibits DHFR, so less THF and fewer purines', correct:true, why:'Slide 59; T 216–223.'},
  {t:'Competes with PABA in bacterial folate synthesis', correct:false, why:'That is sulfamethoxazole and dapsone (slides 48, 50).'},
  {t:'Binds the p19 subunit of IL-23', correct:false, why:'That is guselkumab, tildrakizumab and risankizumab (slides 68–69).'},
  {t:'Inhibits JAK in keratinocytes', correct:false, why:'That is the JAK inhibitors (slide 75).'}],
 teach:'Methotrexate, a folic acid analog, inhibits dihydrofolate reductase (DHFR), stopping tetrahydrofolate (THF) synthesis. THF is needed for de novo purine synthesis, so the rapidly proliferating keratinocytes lack the building blocks for DNA (slide 59; T 215–223).',
 note:'At T 218–219 she said "inhibit the activity of tetrahydrofolate, the reductase"; slide 59 and her own class name (dihydrofolate reductase inhibitor, T 213) say DHFR. Keyed to the slide.',
 cite:D3+' slides 58–59; T 212–224'},

{id:'L3-046', skill:'chem', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'mtx-analog',
 tags:['definition'], source:'both',
 stem:'Methotrexate is called a folic acid analog. What does that mean for how it works?',
 options:[
  {t:'It resembles folic acid and binds a folate enzyme', correct:true, why:'"The methotrexate drug looks like folic acid. Therefore ... it will bind to and inhibit" the reductase (T 217–219; slide 59).'},
  {t:'It is converted to folic acid by the liver before acting', correct:false, why:'It is not a folate supplement; it inhibits DHFR (slide 59).'},
  {t:'It binds folic acid in the gut', correct:false, why:'It binds the enzyme, not folic acid itself (T 218–219).'},
  {t:'It replaces PABA in bacteria', correct:false, why:'PABA competition is sulfamethoxazole and dapsone (slides 48, 50).'}],
 teach:'Because methotrexate looks like folic acid, it binds to and inhibits dihydrofolate reductase in the folic acid scheme (slide 59; T 217–219).',
 cite:D3+' slide 59; T 216–219'},

{id:'L3-047', skill:'tell', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'mtx-vs-tmp',
 tags:['tell'], source:'both',
 stem:'Trimethoprim and methotrexate both inhibit dihydrofolate reductase. What separates them?',
 options:[
  {t:'Trimethoprim targets the microbe; methotrexate the body', correct:true, why:'Methotrexate "is not a medication that\'s used to treat a microbe. This is for treating psoriasis in the body" (T 213–215; slides 48, 59).'},
  {t:'Trimethoprim is a monoclonal antibody given by injection', correct:false, why:'Trimethoprim is one component of an oral antibiotic product (slide 48).'},
  {t:'Methotrexate blocks the PABA step', correct:false, why:'PABA competition is sulfamethoxazole (slide 48).'},
  {t:'Methotrexate binds the 30S subunit', correct:false, why:'That is the tetracyclines (slide 43).'}],
 teach:'Antimicrobial pharmacology is how a drug works in the bug (T 9–11): trimethoprim inhibits bacterial DHFR so the microbe cannot divide (slide 48; T 77–89). Methotrexate inhibits DHFR in the patient, so psoriatic keratinocytes cannot proliferate (slide 59; T 213–223).',
 cite:D3+' slides 48, 59; T 9–11, 213–223'},

{id:'L3-048', skill:'mech', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'mtx-folate-cycle', multi:true,
 tags:['figure'], source:'both',
 stem:'When methotrexate lowers tetrahydrofolate in keratinocytes, which building blocks fall? Select all that apply.',
 options:[
  {t:'Purines', correct:true, why:'Slide 60 (folate cycle); T 230–236.'},
  {t:'dTMP', correct:true, why:'Slide 60; T 231, 235: dTMP for DNA synthesis.'},
  {t:'PABA', correct:false, why:'PABA is a bacterial starting material that sulfamethoxazole competes with (slide 49).'},
  {t:'Dietary dihydrofolate', correct:false, why:'Dihydrofolate comes from the diet and sits before the blocked enzyme (T 232–234).'}],
 teach:'In the folate cycle, dihydrofolate is reduced to tetrahydrofolate, which is used for purines and for dTMP. Methotrexate inhibits the reductase, so purine and dTMP levels fall and keratinocytes cannot proliferate (slide 60; T 228–237).',
 cite:D3+' slide 60; T 228–237'},

{id:'L3-049', skill:'mech', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'mtx-pd',
 tags:['recall'], source:'both',
 stem:'Besides reducing keratinocyte hyperproliferation, which effect of methotrexate is seen in psoriasis?',
 options:[
  {t:'Fewer T cells', correct:true, why:'Slide 59; T 224–228: part of a possible anti-inflammatory action.'},
  {t:'More IL-2 production', correct:false, why:'Methotrexate reduces T cells; more IL-2 would mean more T-cell activation (slide 59).'},
  {t:'Fewer P. acnes bacteria', correct:false, why:'Methotrexate acts in the body for psoriasis (T 213–215).'},
  {t:'Thicker epidermis', correct:false, why:'It reduces hyperproliferation (slide 59).'}],
 teach:'Methotrexate may have a direct anti-inflammatory action (mechanism unknown); its pharmacodynamic effects are reduced keratinocyte hyperproliferation and a reduced number of T cells (slide 59; T 224–228).',
 cite:D3+' slide 59; T 224–228'},

{id:'L3-050', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'mtx-liver',
 tags:['recall'], source:'both',
 stem:'What is the most significant adverse effect of methotrexate?',
 options:[
  {t:'Cumulative liver toxicity', correct:true, why:'"This is the most significant adverse effect with this drug" (T 237–239; slide 61).'},
  {t:'Ototoxicity', correct:false, why:'That is minocycline (slide 45).'},
  {t:'Photosensitivity', correct:false, why:'That is coal tar and the tetracyclines (slides 44, 54).'},
  {t:'Local injection site reactions', correct:false, why:'Methotrexate is dispensed as a tablet (T 249); injection site reactions belong to the biologicals (slides 71, 73).'}],
 teach:'Cumulative liver toxicity is the most significant adverse effect of methotrexate: the total dose is watched, and once the patient reaches the cumulative limit the drug is stopped to protect the liver (slide 61; T 237–240).',
 cite:D3+' slide 61; T 237–240'},

{id:'L3-051', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'mtx-cumdose',
 tags:['reasoning'], source:'transcript',
 stem:'How is the liver protected during long-term methotrexate therapy for psoriasis?',
 options:[
  {t:'Stop at the cumulative dose limit', correct:true, why:'T 239–240: "Once they reach that cumulative dose, we have to stop them".'},
  {t:'Give it with an antacid', correct:false, why:'Not the measure she described (T 239–240).'},
  {t:'Premedicate with a corticosteroid each time', correct:false, why:'Premedication is for infliximab infusion reactions (slide 72; T 521–522).'},
  {t:'Switch to the topical form', correct:false, why:'Methotrexate is discussed as a tablet (T 249).'}],
 teach:'Because the liver toxicity is cumulative, the total methotrexate dose a patient has received is followed and the drug is stopped at the cumulative dose (T 237–240).',
 cite:D3+' slide 61; T 237–240'},

{id:'L3-052', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'mtx-blood',
 tags:['recall'], source:'both',
 stem:'Why are periodic blood counts done in patients taking methotrexate?',
 options:[
  {t:'To catch rare blood problems', correct:true, why:'Slide 61; T 241–244: rare, but watched for.'},
  {t:'To measure the drug\'s IgE effect', correct:false, why:'IgE reduction is dupilumab (slide 64).'},
  {t:'To screen for tuberculosis', correct:false, why:'TB screening is stated for secukinumab and ustekinumab (slides 66–67).'},
  {t:'To detect anti-drug antibodies', correct:false, why:'Anti-drug antibodies are an infliximab problem (slide 72).'}],
 teach:'Blood problems with methotrexate (megaloblastic anemia, increased lymphoma, pancytopenia) are rare, but patients get blood counts at regular intervals (slide 61; T 241–244). Slide 61 also lists nausea, pulmonary toxicity and acute myelosuppression.',
 cite:D3+' slide 61; T 241–244'},

{id:'L3-053', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'mtx-pregnancy',
 tags:['counseling'], source:'both',
 stem:'A patient with psoriasis plans to become pregnant next year. What applies to methotrexate?',
 options:[
  {t:'Contraindicated: abortifacient and teratogenic', correct:true, why:'Slide 61; T 244–247: not for patients who are pregnant or trying to conceive.'},
  {t:'Safe if taken with folic acid', correct:false, why:'Not stated; it is contraindicated in pregnancy and when trying to conceive (T 244–247).'},
  {t:'Acceptable to use in the third trimester of pregnancy', correct:false, why:'It is contraindicated in pregnancy (slide 61; T 244–247).'},
  {t:'Safe because absorption is low', correct:false, why:'No such statement; it is teratogenic (slide 61).'}],
 teach:'Methotrexate is an abortifacient and teratogenic, so it is contraindicated in people who are pregnant or wanting to become pregnant (slide 61; T 244–247).',
 cite:D3+' slide 61; T 244–247'},

{id:'L3-054', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'ae', concept:'mtx-dispense',
 tags:['counseling'], source:'transcript',
 stem:'How should methotrexate tablets be handled when counted by hand in a pharmacy?',
 options:[
  {t:'On a separate counting tray, with gloves', correct:true, why:'"Methotrexate should be counted on a separate counting tray, and women ... should be using gloves" (T 253–255).'},
  {t:'On the shared tray, then crushed', correct:false, why:'A separate tray is used, kept in its own area (T 253–260).'},
  {t:'In a refrigerator to protect the tablet coating', correct:false, why:'Not stated; she described an uncoated tablet counted on its own tray (T 249–255).'},
  {t:'By the patient at home', correct:false, why:'Not stated (T 253–260).'}],
 teach:'Because methotrexate is abortifacient and teratogenic, it is counted on a separate counting tray kept in its own area, and women handling it should wear gloves (T 247–260).',
 cite:D3+' slide 61; T 247–260'},

/* ---- Abatacept ---------------------------------------------------------- */
{id:'L3-055', skill:'patho', prof:'Smith', tier:'new', topic:'l3-abat', sub:'sig', concept:'signal-1',
 tags:['room','figure'], source:'both',
 quote:'Room question, 11/03, T 289–290: "what signal is that?"',
 stem:'An antigen-presenting cell presents antigen to the T-cell receptor. Which signal is this?',
 options:[
  {t:'Signal 1', correct:true, why:'Answer given in class: "Signal number 1, right?" (T 289–290; slide 63).'},
  {t:'Positive signal 2', correct:false, why:'Positive signal 2 is CD80/86 binding CD28 (T 294–298).'},
  {t:'Negative signal 2', correct:false, why:'Negative signal 2 is CD80/86 binding CTLA-4 (T 300–303).'},
  {t:'Signal 3', correct:false, why:'Signal 3 was the third step of the signal 1, 2, 3 figure reviewed at T 270–271, not antigen presentation.'}],
 teach:'Signal 1 is antigen presentation by the APC to the T-cell receptor; it wakes the T cell up to a possible immune response (slide 63; T 288–292).',
 note:'The MHC class is not asked: on 11/03 she said "MHC1" (T 289), while the projected figure and her 10/30 lecture say MHC II.',
 cite:D3+' slide 63; T 284–292'},

{id:'L3-056', skill:'patho', prof:'Smith', tier:'new', topic:'l3-abat', sub:'sig', concept:'pos-signal-2',
 tags:['room','figure'], source:'both',
 quote:'Room question, 11/03, T 293–294: "Can you guys find where the confirming signal 2 is?"',
 stem:'Which interaction gives a positive signal 2?',
 options:[
  {t:'APC CD80/86 with T-cell CD28', correct:true, why:'T 294–298; slide 63.'},
  {t:'APC CD80/86 with T-cell CTLA-4', correct:false, why:'That gives a negative signal 2 (T 300–303).'},
  {t:'IL-17A with IL-17RA on keratinocytes', correct:false, why:'A cytokine and its receptor, not signal 2 (slide 66).'},
  {t:'TNF-α with its receptor', correct:false, why:'A cytokine and its receptor, not signal 2 (slide 70).'}],
 teach:'A positive signal 2, the confirming signal, is CD80/86 on the antigen-presenting cell interacting with CD28 on the T cell (slide 63; T 292–298).',
 cite:D3+' slide 63; T 292–298'},

{id:'L3-057', skill:'patho', prof:'Smith', tier:'new', topic:'l3-abat', sub:'sig', concept:'neg-signal-2',
 tags:['room'], source:'transcript',
 quote:'Room question, 11/03, T 303–304: "So what do you think happens if you get a negative signal 2?"',
 stem:'CD80/86 on an antigen-presenting cell binds CTLA-4 on a T cell. What follows?',
 options:[
  {t:'T-cell activation stops; no IL-2 is made', correct:true, why:'Answer given in class: "the activation of the T cell stops" (T 303–308).'},
  {t:'The T cell is activated and makes IL-2', correct:false, why:'That is the result of a positive signal 2 (CD28) (T 294–298).'},
  {t:'The T cell presents antigen back to the APC', correct:false, why:'The APC presents antigen to the T cell (T 288–290).'},
  {t:'The T cell makes IgE', correct:false, why:'IgE synthesis is promoted by IL-4 and IL-13 (slide 64).'}],
 teach:'CD80/86 on the APC interacting with CTLA-4 on the T cell is a negative signal 2: the APC tells the T cell not to activate, so activation stops and no interleukin 2 is made (T 298–308).',
 cite:D3+' slide 63; T 298–308'},

{id:'L3-058', skill:'class', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-structure',
 tags:['room'], source:'both',
 quote:'Room question, 11/03, T 316–317: "what did I say the structure of the drug is?"',
 stem:'What is the structure of abatacept?',
 options:[
  {t:'CTLA-4 extracellular domain fused to human IgG Fc', correct:true, why:'Slide 63; T 275–278.'},
  {t:'Two p75 soluble TNF receptors fused to human IgG1 Fc', correct:false, why:'That is etanercept (slide 71).'},
  {t:'A pegylated Fab fragment of an antibody', correct:false, why:'That is certolizumab pegol (slide 74).'},
  {t:'A small molecule that enters cells', correct:false, why:'That describes the JAK inhibitors (T 570–573).'}],
 teach:'Abatacept is a fusion protein: one part looks like the extracellular domain of the CTLA-4 receptor and is fused to a human IgG Fc chain that gives it structure (slide 63; T 275–278).',
 cite:D3+' slide 63; T 274–279'},

{id:'L3-059', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-mech',
 tags:['mechanism'], source:'both',
 stem:'How does abatacept prevent T-cell activation?',
 options:[
  {t:'It binds APC CD80/86, so CD28 cannot bind', correct:true, why:'Slide 63; T 279–281, 318–327.'},
  {t:'It binds CD28 on the T cell', correct:false, why:'It binds CD80/86 on the antigen-presenting cell (slide 63).'},
  {t:'It binds the T-cell receptor', correct:false, why:'It acts on signal 2, not signal 1 (slide 63; T 356–357).'},
  {t:'It neutralizes IL-2 in the plasma after release', correct:false, why:'Less IL-2 results from blocked activation (T 326–328); it does not bind IL-2.'}],
 teach:'Abatacept looks like CTLA-4 and binds CD80/86 on the antigen-presenting cell. CD80/86 is then not free to bind CD28, so there is no positive signal 2, no T-cell activation and no IL-2 production (slide 63; T 316–328).',
 cite:D3+' slide 63; T 279–281, 316–328'},

{id:'L3-060', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-why-ctla4',
 tags:['room','reasoning'], source:'transcript',
 quote:'Room question, 11/03, T 322–323: "So why do you think we made the drug Abatacept look like CTLA-4?"',
 stem:'Why was abatacept built to look like CTLA-4 rather than CD28?',
 options:[
  {t:'CTLA-4 likely binds CD80/86 more tightly than CD28 does', correct:true, why:'Answer given in class: "It probably has better binding affinity to [CD80/86] then like CD28" (T 322–323).'},
  {t:'CTLA-4 gives the drug a longer half-life', correct:false, why:'Longer half-life from PEG is certolizumab pegol (slide 74; T 547–548).'},
  {t:'CTLA-4 lets the drug get inside the T cells to act', correct:false, why:'It acts on the APC surface (slide 63); entering cells is the JAK inhibitors (T 570–573).'},
  {t:'CTLA-4 delivers a positive signal 2', correct:false, why:'CTLA-4 gives a negative signal 2 (T 300–303).'}],
 teach:'CTLA-4 is the partner that gives a negative signal 2. A drug that looks like CTLA-4 binds CD80/86 well and stays there, occupying it so it cannot bind CD28 (T 316–327).',
 cite:D3+' slide 63; T 316–327'},

{id:'L3-061', skill:'class', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-costim',
 tags:['room'], source:'both',
 quote:'Room question, 11/03, T 350–351: "we call abatacept an inhibitor of co-stimulation. Why do we call it that?"',
 stem:'Why is abatacept called an inhibitor of co-stimulation?',
 options:[
  {t:'It blocks the co-stimulatory positive signal 2', correct:true, why:'T 351–355; slide 63 title.'},
  {t:'It blocks signal 1 and signal 3 together', correct:false, why:'It works on signal 2 (T 356–357).'},
  {t:'It stimulates the CTLA-4 receptor on the T cell surface', correct:false, why:'It resembles CTLA-4 and binds CD80/86 on the APC (slide 63).'},
  {t:'It inhibits both IL-4 and IL-13', correct:false, why:'That is dupilumab (slide 64).'}],
 teach:'Signal 1 starts the stimulation; a positive signal 2 is the second, co-stimulating signal. In immunosuppression and transplantation language, signal 2 is co-stimulation, and abatacept inhibits it (T 350–355).',
 cite:D3+' slide 63; T 350–357'},

{id:'L3-062', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-costim', dupOf:'L3-061',
 tags:['room'], source:'both',
 quote:'Room question, 11/03, T 356: "what signal is this working on?"',
 stem:'Which T-cell activation signal does abatacept act on?',
 options:[
  {t:'Signal 2', correct:true, why:'Answer given in class: "Signal too [two], right?" (T 356–357; slide 63).'},
  {t:'Signal 1', correct:false, why:'Signal 1 is antigen presentation to the T-cell receptor (T 289–290).'},
  {t:'Signal 3', correct:false, why:'Abatacept acts on the CD80/86 to CD28 step, signal 2 (slide 63).'},
  {t:'JAK signaling', correct:false, why:'That is the JAK inhibitors (slide 75).'}],
 teach:'Abatacept stops a positive signal 2 by occupying CD80/86 on the APC (slide 63; T 355–357).',
 cite:D3+' slide 63; T 355–357'},

{id:'L3-063', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'abat-effect',
 tags:['reasoning'], source:'transcript',
 stem:'Why is abatacept a strong immunosuppressant in psoriasis?',
 options:[
  {t:'It acts upstream, stopping T-cell activation', correct:true, why:'"It\'s an anti-inflammatory kind of in the upstream part ... You stop the T cell activation, you can stop a whole lot of T cell proliferation" (T 339–344).'},
  {t:'It kills activated T cells directly', correct:false, why:'It prevents activation; it does not kill cells (T 339–344).'},
  {t:'It binds several inflammatory cytokines in the plaque', correct:false, why:'It binds CD80/86, not cytokines (slide 63).'},
  {t:'It blocks purine synthesis in T cells', correct:false, why:'That is methotrexate (slide 59).'}],
 teach:'By preventing T-cell activation, abatacept stops IL-2 production and the immune response that follows, so a great deal of T-cell proliferation and inflammation never starts (T 339–344).',
 cite:D3+' slide 63; T 339–344'},

/* ---- Dupilumab ---------------------------------------------------------- */
{id:'L3-064', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'dup-target',
 tags:['mechanism'], source:'both',
 stem:'What does dupilumab bind?',
 options:[
  {t:'The IL-4 receptor alpha subunit', correct:true, why:'Slide 64; T 369–372.'},
  {t:'The IL-4 cytokine itself', correct:false, why:'It binds the receptor subunit, not the cytokine (T 368–369).'},
  {t:'The IL-17 receptor A', correct:false, why:'That is brodalumab (slide 66).'},
  {t:'The p40 subunit of IL-12 and IL-23', correct:false, why:'That is ustekinumab (slide 67).'}],
 teach:'Dupilumab, a human monoclonal IgG4 antibody, binds the IL-4 receptor alpha (IL-4Rα) subunit, which is part of the receptor complexes through which both IL-4 and IL-13 signal (slide 64; T 366–374).',
 cite:D3+' slide 64; T 365–374'},

{id:'L3-065', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'dup-both',
 tags:['reasoning'], source:'both',
 stem:'Dupilumab binds one receptor subunit. Why does it block both IL-4 and IL-13?',
 options:[
  {t:'Both cytokines signal through IL-4Rα', correct:true, why:'Slide 64; T 370–374, 392–395.'},
  {t:'IL-13 is made from IL-4 by skin T cells', correct:false, why:'They are separate cytokines; they share a receptor subunit (slide 64).'},
  {t:'The antibody has two arms, one per cytokine', correct:false, why:'It binds one subunit, IL-4Rα (slide 64).'},
  {t:'It enters T cells and blocks JAK', correct:false, why:'Entering cells to block JAK is the small molecule JAK inhibitors (T 570–573).'}],
 teach:'The IL-4Rα subunit belongs to the receptor complexes for both IL-4 and IL-13; with dupilumab on it, neither cytokine can signal (slide 64; T 369–374, 392–395). Slide 64: it blocks IL-4 through the type I receptor and IL-4 and IL-13 through the type II receptor.',
 cite:D3+' slide 64; T 369–374, 392–395'},

{id:'L3-066', skill:'patho', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'il4-il13-role',
 tags:['cytokines'], source:'both',
 stem:'Why is blocking IL-4 and IL-13 useful in atopic dermatitis?',
 options:[
  {t:'They drive IgE and inflammatory cell recruitment', correct:true, why:'Slide 64; T 374–380.'},
  {t:'They activate DNA crosslinking in dividing keratinocytes', correct:false, why:'DNA crosslinking is a proposed coal tar effect (slide 53).'},
  {t:'They supply purines to T cells', correct:false, why:'Purines depend on tetrahydrofolate (slide 59).'},
  {t:'They form the stratum corneum barrier', correct:false, why:'Not a role given for IL-4 or IL-13 (slide 64).'}],
 teach:'IL-4 and IL-13 promote IgE synthesis and bring inflammatory cells to the skin. Blocking IL-4Rα lowers pro-inflammatory cytokines, chemokines and IgE (slide 64; T 374–380); in AD, the Th1/Th2 imbalance drives much IgE production (T 383–384).',
 cite:D3+' slide 64; T 374–384'},

{id:'L3-067', skill:'class', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'dup-indication',
 tags:['recall'], source:'both',
 stem:'For which patients is dupilumab approved?',
 options:[
  {t:'Moderate-to-severe AD not controlled by topicals', correct:true, why:'Slide 64; T 380–382 ("usually ... after they\'ve failed other therapies").'},
  {t:'Mild AD as first-line therapy', correct:false, why:'It is for moderate-to-severe AD after other therapy (slide 64; T 381–382).'},
  {t:'Moderate acne with clindamycin-resistant P. acnes', correct:false, why:'Not an indication for dupilumab (slide 64).'},
  {t:'Rosacea with Demodex mites', correct:false, why:'Rosacea is a metronidazole use (slide 51).'}],
 teach:'Dupilumab is approved for adults with moderate-to-severe atopic dermatitis not adequately controlled with topical therapies, and it is given subcutaneously (slide 64; T 380–385).',
 note:'Psoriasis is not offered as an option: she said "I am pretty sure it\'s listed off label in your table for also treating psoriasis" (T 382–383), but slide 64 and the drug chart give AD only.',
 cite:D3+' slide 64; T 380–385'},

{id:'L3-068', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'dup-eye',
 tags:['recall'], source:'both',
 stem:'Which dupilumab side effects can be dose limiting?',
 options:[
  {t:'Eye effects such as conjunctivitis', correct:true, why:'T 387–389: "something that sometimes can be dose limiting"; slide 64 lists conjunctivitis, blepharitis, keratitis, eye pruritus, dry eye.'},
  {t:'Cumulative liver toxicity over time', correct:false, why:'That is methotrexate (slide 61).'},
  {t:'Ototoxicity', correct:false, why:'That is minocycline (slide 45).'},
  {t:'Lupus-like syndrome', correct:false, why:'That is infliximab (slide 72).'}],
 teach:'The most frequent dupilumab effects are nasopharyngitis and headache; eye effects can be dose limiting, and some patients stop the drug because of them (slide 64; T 385–389).',
 cite:D3+' slide 64; T 385–389'},

{id:'L3-069', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'dup-common',
 tags:['recall'], source:'both',
 stem:'Which adverse effects are most frequent with dupilumab?',
 options:[
  {t:'Nasopharyngitis and headache', correct:true, why:'Slide 64; T 385–387.'},
  {t:'Pancytopenia and demyelination', correct:false, why:'Case reports with etanercept (slide 71).'},
  {t:'Severe conjunctivitis and staining', correct:false, why:'Those are anthralin (slide 56).'},
  {t:'Diarrhea and epigastric pain', correct:false, why:'Oral macrolides (slide 47).'}],
 teach:'Dupilumab adverse effects are generally mild; nasopharyngitis and headache are the most frequent, and injection site reactions, oral herpes and eye effects also occur (slide 64; T 385–389).',
 cite:D3+' slide 64; T 385–389'},

/* ---- IL-17 inhibitors --------------------------------------------------- */
{id:'L3-070', skill:'patho', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'il17-role',
 tags:['cytokines'], source:'both',
 stem:'What does IL-17 do in psoriasis?',
 options:[
  {t:'Drives keratinocyte inflammation and proliferation', correct:true, why:'Slide 65; T 399–402.'},
  {t:'Promotes IgE synthesis by B cells', correct:false, why:'That is IL-4 and IL-13 (slide 64).'},
  {t:'Phosphorylates cytokine receptors to signal the nucleus', correct:false, why:'That is JAK (slide 75; T 564–566).'},
  {t:'Provides a negative signal 2', correct:false, why:'That is CD80/86 with CTLA-4 (T 300–303).'}],
 teach:'Keratinocytes are the major IL-17 target in psoriasis: IL-17 raises their expression of inflammatory cytokines and helps drive hyperproliferation and barrier dysfunction. IL-17A levels are raised in psoriatic plaques, and IL-17 inhibitors are among the most efficacious psoriasis therapies (slide 65; T 399–405).',
 cite:D3+' slide 65; T 399–406'},

{id:'L3-071', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'secu-target',
 tags:['mechanism'], source:'both',
 stem:'What is secukinumab, and what does it bind?',
 options:[
  {t:'A human antibody to the IL-17A cytokine', correct:true, why:'Slide 66 (human IgG1); T 410–412.'},
  {t:'A human antibody to the IL-17 receptor', correct:false, why:'That is brodalumab (slide 66; T 421–426).'},
  {t:'A humanized antibody to the IL-17A cytokine', correct:false, why:'That is ixekizumab (slide 66; T 416–420).'},
  {t:'A chimeric antibody to TNF-α', correct:false, why:'That is infliximab (slide 72).'}],
 teach:'Secukinumab is a human monoclonal antibody that binds the IL-17A cytokine, so the cytokine cannot reach its receptor. It is given SubQ and reduces the number and size of plaques (slide 66; T 409–413).',
 cite:D3+' slide 66; T 409–413'},

{id:'L3-072', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'ixe-vs-secu',
 tags:['room','tell'], source:'both',
 quote:'Room question, 11/03, T 416–417: "How does ixekizumab differ from secukinumab?"',
 stem:'How does ixekizumab differ from secukinumab?',
 options:[
  {t:'Ixekizumab is humanized; secukinumab is human', correct:true, why:'T 417–420; slide 66. Both bind the IL-17A cytokine.'},
  {t:'Ixekizumab binds the receptor, not the cytokine', correct:false, why:'Both bind the IL-17A cytokine; brodalumab binds the receptor (T 420–428).'},
  {t:'Ixekizumab is chimeric; secukinumab is human', correct:false, why:'Ixekizumab is humanized, not chimeric (slide 66).'},
  {t:'Ixekizumab binds p19 of IL-23', correct:false, why:'p19 binders are the IL-23 inhibitors (slides 68–69).'}],
 teach:'Ixekizumab and secukinumab target the same thing, the IL-17A cytokine; the difference is how the antibody was made: ixekizumab is humanized, secukinumab human (slide 66; T 416–420).',
 cite:D3+' slide 66; T 416–420'},

{id:'L3-073', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'brod-receptor',
 tags:['room','tell'], source:'both',
 quote:'Room question, 11/03, T 422: "And it is binding to what?" (brodalumab)',
 stem:'What separates brodalumab from the other IL-17 inhibitors?',
 options:[
  {t:'It binds the IL-17 receptor, not the cytokine', correct:true, why:'Answer given in class: "The receptor" (T 422–428; slide 66, IL-17RA).'},
  {t:'It is a chimeric antibody', correct:false, why:'Brodalumab is human (slide 66; T 422).'},
  {t:'It binds IL-4 receptor alpha', correct:false, why:'That is dupilumab (slide 64).'},
  {t:'It is a small molecule inhibitor taken by mouth', correct:false, why:'It is a human monoclonal antibody (slide 66).'}],
 teach:'Brodalumab is a human monoclonal antibody that binds the IL-17 receptor A (IL-17RA), preventing IL-17 from binding there; secukinumab and ixekizumab bind the cytokine (slide 66; T 421–428).',
 cite:D3+' slide 66; T 421–428'},

{id:'L3-074', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'secu-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which apply to secukinumab? Select all that apply.',
 options:[
  {t:'Evaluate for tuberculosis before starting', correct:true, why:'Risk for infection; slide 66; T 413–414.'},
  {t:'Nasopharyngitis is common', correct:true, why:'Slide 66 gives about 12%; T 414–415.'},
  {t:'It can exacerbate Crohn\'s disease', correct:true, why:'T 415.'},
  {t:'Premedicate to prevent its infusion reactions', correct:false, why:'Premedication is for infliximab, given IV (slide 72; T 519–522); secukinumab is given SQ (slide 66).'}],
 teach:'Secukinumab raises the risk of infection, so patients are evaluated for tuberculosis before therapy; nasopharyngitis occurs in about 12% (slide 66); it can exacerbate Crohn\'s disease (T 413–416). "These are side effects that you need to pay attention to" (T 415–416).',
 cite:D3+' slide 66; T 413–416'},

{id:'L3-075', skill:'class', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'make', concept:'chimeric-allergy',
 tags:['room','reasoning'], source:'transcript',
 quote:'Room question, 11/03, T 432–433: "Why do we care if it\'s chimeric versus human?"',
 stem:'Why does it matter whether a monoclonal antibody is chimeric or human?',
 options:[
  {t:'Chimeric antibodies cause more allergic reactions', correct:true, why:'Answer given in class: "the kind of allergic reaction patients might have" (T 432–436).'},
  {t:'Human antibodies cannot bind cytokines', correct:false, why:'Human antibodies such as secukinumab bind cytokines (slide 66).'},
  {t:'Chimeric antibodies can be taken orally as tablets', correct:false, why:'Infliximab, the chimeric example, is given IV (slide 72).'},
  {t:'Human antibodies enter cells', correct:false, why:'Monoclonals are too big to get into cells (T 570–573).'}],
 teach:'A human or humanized antibody is much less likely to cause an allergic reaction; a chimeric antibody has mouse ("mousy") parts and is very likely to cause an allergic-type response (T 431–436). Infliximab is the chimeric example (slide 72; T 522–523).',
 cite:D3+' slides 66, 72; T 429–436'},

{id:'L3-076', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'make', concept:'bind-cytokine', multi:true,
 tags:['tell','list'], source:'both',
 stem:'Which drugs bind the cytokine itself rather than its receptor? Select all that apply.',
 options:[
  {t:'Ixekizumab', correct:true, why:'Binds the IL-17A cytokine (slide 66; T 420–421).'},
  {t:'Guselkumab', correct:true, why:'Binds the p19 subunit of the IL-23 cytokine (slide 68; T 472–475).'},
  {t:'Brodalumab', correct:false, why:'Binds the IL-17 receptor A (slide 66; T 421–428).'},
  {t:'Dupilumab', correct:false, why:'Binds the IL-4 receptor alpha subunit (slide 64; T 369–372).'}],
 teach:'"Sometimes we\'re binding the compound floating around in the system, like a cytokine. Sometimes we ... made a drug that binds to the receptor. OK, so gotta pay attention to that" (T 429–431). Cytokine binders: secukinumab, ixekizumab, ustekinumab, the IL-23 p19 binders and the TNF-α inhibitors. Receptor binders: brodalumab and dupilumab.',
 cite:D3+' slides 64, 66–68; T 429–431'},

{id:'L3-077', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'make', concept:'human-list', dupOf:'L3-085', multi:true,
 tags:['tell','list'], source:'both',
 stem:'Which of these IL-17 and IL-23 inhibitors are human antibodies? Select all that apply.',
 options:[
  {t:'Secukinumab', correct:true, why:'Human IgG1 (slide 66; T 410).'},
  {t:'Brodalumab', correct:true, why:'Human IgG2 (slide 66; T 422).'},
  {t:'Guselkumab', correct:true, why:'Human IgG1 (slide 68; T 472).'},
  {t:'Tildrakizumab-asmn', correct:false, why:'Humanized, not human (slide 68; T 472).'}],
 teach:'Human: secukinumab, brodalumab, ustekinumab, guselkumab, adalimumab, golimumab, dupilumab. Humanized: ixekizumab, tildrakizumab-asmn, risankizumab, and the Fab of certolizumab pegol. Chimeric: infliximab (slides 64, 66–69, 72–74; T 410–481, 512, 543–546).',
 cite:D3+' slides 66, 68–69; T 410–422, 470–481'},

/* ---- Ustekinumab and IL-23 inhibitors ----------------------------------- */
{id:'L3-078', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'uste-p40',
 tags:['mechanism'], source:'both',
 stem:'What does ustekinumab bind?',
 options:[
  {t:'The p40 subunit shared by IL-12 and IL-23', correct:true, why:'Slide 67; T 444–447.'},
  {t:'The p19 subunit of IL-23', correct:false, why:'That is guselkumab, tildrakizumab and risankizumab (slides 68–69; T 472–476).'},
  {t:'The IL-12 receptor beta-1 on the surface of T cells', correct:false, why:'It binds the cytokines, which then cannot bind the receptor (T 447–448).'},
  {t:'The p75 TNF receptor', correct:false, why:'p75 receptors make up etanercept (slide 71).'}],
 teach:'Ustekinumab, a human monoclonal antibody, binds the p40 protein subunit that IL-12 and IL-23 share; the bound cytokines cannot reach their receptor (slide 67; T 444–448).',
 cite:D3+' slide 67; T 443–448'},

{id:'L3-079', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'il23-th17',
 tags:['room','mechanism'], source:'both',
 quote:'Room question, 11/03, T 478–479: "Why are we targeting those cytokines?"',
 stem:'Blocking IL-12 and IL-23 helps psoriasis by suppressing which cells?',
 options:[
  {t:'Pro-inflammatory Th1 and Th17 cells', correct:true, why:'Slide 67; T 449–450; room answer at T 479–480.'},
  {t:'Th2 cells that make IgE', correct:false, why:'IgE is the IL-4/IL-13 axis (slide 64).'},
  {t:'Macrophages that make TNF-α', correct:false, why:'TNF-α is the target of the TNF inhibitors (slide 70).'},
  {t:'Neutrophils in the pilosebaceous follicle', correct:false, why:'Neutrophil effects are proposed for dapsone and metronidazole (slides 50–51).'}],
 teach:'Suppressing IL-12 and IL-23 activity suppresses the formation of pro-inflammatory Th1 and Th17 cells, reducing the number and size of plaques (slide 67; T 448–453, 477–480).',
 cite:D3+' slides 67–68; T 448–453, 477–480'},

{id:'L3-080', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'uste-vaccine',
 tags:['counseling','numbers'], source:'both',
 stem:'A patient on ustekinumab needs a live vaccine. What timing applies?',
 options:[
  {t:'Stop 15 weeks before; restart 2 weeks after', correct:true, why:'Slide 67 (at least 15 weeks before, at least 2 weeks after); T 457–460.'},
  {t:'Stop 2 weeks before; restart 15 weeks after', correct:false, why:'Reversed: 15 weeks before and 2 weeks after (slide 67).'},
  {t:'Give the vaccine on the day of a dose', correct:false, why:'Live vaccines should not be given with ustekinumab (slide 67).'},
  {t:'Give a double vaccine dose to overcome the drug', correct:false, why:'Not stated; the drug is stopped before the vaccine (slide 67).'}],
 teach:'Ustekinumab makes live vaccines ineffective, so it is stopped at least 15 weeks before a live vaccine and resumed at least 2 weeks after (slide 67; T 456–460).',
 cite:D3+' slide 67; T 456–460'},

{id:'L3-081', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'uste-allergy',
 tags:['recall'], source:'both',
 stem:'A patient has angioedema after a dose of ustekinumab. What follows?',
 options:[
  {t:'The drug cannot be given again', correct:true, why:'"Serious allergic reaction, angioedema, anaphylaxis. Obviously, the patient cannot receive the medication again" (T 454–455; slide 67).'},
  {t:'Halve the next dose', correct:false, why:'A serious allergic reaction rules out giving it again (T 454–455).'},
  {t:'Switch it to IV infusion', correct:false, why:'Route does not prevent the reaction; it is given SQ (slide 67).'},
  {t:'Continue it with diphenhydramine cover', correct:false, why:'Premedication was described for infliximab infusion reactions (T 521–522), not ustekinumab anaphylaxis.'}],
 teach:'Serious allergic reactions to ustekinumab, including angioedema and anaphylaxis, mean the patient cannot receive it again (slide 67; T 453–455). The most common side effect is upper respiratory tract infection (slide 67; T 453–454).',
 cite:D3+' slide 67; T 453–456'},

{id:'L3-082', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'uste-common',
 tags:['recall'], source:'both',
 stem:'What is the most common side effect of ustekinumab?',
 options:[
  {t:'Upper respiratory tract infection', correct:true, why:'Slide 67; T 453–454.'},
  {t:'Cumulative liver toxicity over years', correct:false, why:'That is methotrexate (slide 61).'},
  {t:'Ototoxicity', correct:false, why:'That is minocycline (slide 45).'},
  {t:'Skin staining', correct:false, why:'That is anthralin (slide 56).'}],
 teach:'The most common side effect of ustekinumab is upper respiratory tract infection; serious effects include allergic reactions, infections (with TB evaluation before therapy, slide 67) and malignancy (slide 67; T 453–461).',
 cite:D3+' slide 67; T 452–461'},

{id:'L3-083', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'uste-pres',
 tags:['recall'], source:'both',
 stem:'Which rare but dangerous CNS syndrome has been reported with ustekinumab?',
 options:[
  {t:'Posterior leukoencephalopathy syndrome', correct:true, why:'Slide 67; T 461–464.'},
  {t:'Demyelinating syndromes such as multiple sclerosis', correct:false, why:'Demyelination case reports belong to etanercept (slide 71; T 509–511).'},
  {t:'Ototoxic hearing loss', correct:false, why:'That is minocycline (slide 45).'},
  {t:'Lupus-like cerebritis', correct:false, why:'A lupus-like syndrome is reported with infliximab (slide 72).'}],
 teach:'Reversible posterior leukoencephalopathy syndrome has been reported with ustekinumab. Rare but significant effects keep appearing with immune-modifying biologicals, so the label of the chosen biological should be read (slide 67; T 461–468).',
 note:'The count is not asked: slide 67 says "one case"; she said "a couple of cases" (T 461) and then "a case of it" (T 464).',
 cite:D3+' slide 67; T 461–468'},

{id:'L3-084', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'p19-vs-p40',
 tags:['tell'], source:'both',
 stem:'How does guselkumab differ from ustekinumab in its target?',
 options:[
  {t:'Guselkumab binds p19 of IL-23; ustekinumab binds p40', correct:true, why:'Slides 67–68; T 472–475.'},
  {t:'Guselkumab binds p40; ustekinumab binds p19', correct:false, why:'Reversed (slides 67–68).'},
  {t:'Guselkumab binds the IL-17A cytokine; ustekinumab binds IL-23', correct:false, why:'Guselkumab is an IL-23 inhibitor (slide 68).'},
  {t:'Guselkumab binds the IL-23 receptor', correct:false, why:'It binds the p19 subunit of the IL-23 cytokine (slide 68).'}],
 teach:'Ustekinumab binds p40, shared by IL-12 and IL-23. Guselkumab, tildrakizumab-asmn and risankizumab bind p19, a different subunit found in IL-23, so they are IL-23 inhibitors (slides 67–69; T 469–481).',
 cite:D3+' slides 67–69; T 469–481'},

{id:'L3-085', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'gusel-vs-tildra',
 tags:['tell'], source:'both',
 stem:'Guselkumab and tildrakizumab-asmn both bind p19 of IL-23. What separates them?',
 options:[
  {t:'Guselkumab is human; tildrakizumab is humanized', correct:true, why:'T 471–472; slide 68. "Is it human or humanized, and what are they binding to?" (T 476–477).'},
  {t:'Guselkumab is humanized; tildrakizumab is human', correct:false, why:'Reversed (slide 68).'},
  {t:'Tildrakizumab-asmn binds the p40 subunit instead', correct:false, why:'Both bind p19 (slide 68; T 475–476).'},
  {t:'Tildrakizumab is a fusion protein', correct:false, why:'It is a humanized monoclonal antibody (slide 68).'}],
 teach:'"That\'s all you need to know. Their drug name, how to pronounce them ... Is it human or humanized, and what are they binding to?" (T 476–477). Guselkumab is human and tildrakizumab-asmn humanized; both bind p19 of IL-23 (slide 68).',
 cite:D3+' slide 68; T 469–477'},

{id:'L3-086', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'risan',
 tags:['tell'], source:'both',
 stem:'Which IL-23 inhibitor is given SubQ or IV for moderate to severe plaque psoriasis?',
 options:[
  {t:'Risankizumab', correct:true, why:'Slide 69; T 480–483 ("more significant disease").'},
  {t:'Guselkumab', correct:false, why:'No IV route or separate indication was given for it (slide 68).'},
  {t:'Tildrakizumab-asmn', correct:false, why:'No IV route or separate indication was given for it (slide 68).'},
  {t:'Ustekinumab', correct:false, why:'An IL-12/IL-23 inhibitor given SQ (slide 67).'}],
 teach:'Risankizumab is humanized, binds p19 of IL-23, is given SQ or IV, and is used for moderate to severe plaque psoriasis, a slightly different indication for more significant disease (slide 69; T 480–483).',
 cite:D3+' slide 69; T 480–483'},

{id:'L3-087', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'risan-severe', multi:true,
 tags:['list'], source:'both',
 stem:'Which less common but severe effects are seen with risankizumab? Select all that apply.',
 options:[
  {t:'Severe infection', correct:true, why:'Slide 69; T 483–484.'},
  {t:'Reactivation of tuberculosis', correct:true, why:'Slide 69; T 484–485.'},
  {t:'Skin cancer', correct:true, why:'Slide 69; T 485.'},
  {t:'Severe conjunctivitis on eye contact', correct:false, why:'Severe conjunctivitis with eye contact is anthralin (slide 56).'}],
 teach:'Risankizumab: common effects are fatigue, arthralgia, nasopharyngitis, headache, rash and injection reactions; less common but severe are severe infection, TB reactivation in a patient who had TB, and skin cancer (slide 69; T 483–486).',
 cite:D3+' slide 69; T 483–486'},

/* ---- TNF-alpha inhibitors ----------------------------------------------- */
{id:'L3-088', skill:'patho', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'tnf-physio',
 tags:['cytokines'], source:'both',
 stem:'Which normal role of TNF-α explains the infection and cancer risk of TNF-α inhibitors?',
 options:[
  {t:'It helps resist infection and fight cancer', correct:true, why:'Slide 70; T 491–493, 497–500.'},
  {t:'It supplies purines to dividing cells', correct:false, why:'Purines depend on tetrahydrofolate (slide 59).'},
  {t:'It gives the negative signal 2', correct:false, why:'Negative signal 2 is CD80/86 with CTLA-4 (T 300–303).'},
  {t:'It promotes IgE synthesis by B cells in the skin', correct:false, why:'That is IL-4 and IL-13 (slide 64).'}],
 teach:'TNF-α is an inflammatory cytokine made by macrophages and monocytes in acute inflammation; it has a role in necrosis and apoptosis and is important for resistance to infection and cancers (slide 70; T 489–493). Blocking it brings the class black box warnings for serious infection and malignancy (slide 70; T 497–500).',
 cite:D3+' slide 70; T 489–500'},

{id:'L3-089', skill:'mech', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'tnf-class-mech',
 tags:['mechanism'], source:'both',
 stem:'How do the marketed TNF-α inhibitors work?',
 options:[
  {t:'They bind TNF-α so it cannot reach its receptors', correct:true, why:'Slide 70; T 493–495.'},
  {t:'They bind TNF receptors on inflammatory cells', correct:false, why:'They bind TNF-α itself (slide 70; T 493–495).'},
  {t:'They block TNF-α gene transcription via JAK', correct:false, why:'JAK inhibition is a separate class (slide 75).'},
  {t:'They block CD80/86 on the antigen-presenting cells', correct:false, why:'That is abatacept (slide 63).'}],
 teach:'All the drugs on the market bind TNF-α, so it cannot bind its receptors on inflammatory cells; this reduces the number and size of psoriatic plaques (slide 70; T 493–497).',
 cite:D3+' slide 70; T 493–497'},

{id:'L3-090', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'tnf-bbw',
 tags:['recall'], source:'both',
 stem:'What are the black box warnings for the TNF-α inhibitor class?',
 options:[
  {t:'Serious infections and lymphoma or other cancers', correct:true, why:'Slide 70; T 497–500: "Risk of significant infections and then cancer".'},
  {t:'Cumulative liver toxicity and teratogenic effects', correct:false, why:'Those are methotrexate (slide 61).'},
  {t:'Ototoxicity and tooth discoloration', correct:false, why:'Tetracycline effects (slides 44–45).'},
  {t:'Eye effects and nasopharyngitis', correct:false, why:'Dupilumab effects (slide 64).'}],
 teach:'"One big important thing is this whole class of medications has a black box warning": increased risk of serious infections that may lead to hospitalization or death, and lymphoma and other malignancies (slide 70; T 497–500).',
 cite:D3+' slide 70; T 497–500'},

{id:'L3-091', skill:'class', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'etan-structure',
 tags:['recall'], source:'both',
 stem:'What is the structure of etanercept?',
 options:[
  {t:'Two p75 soluble TNF receptors linked to IgG1 Fc', correct:true, why:'Slide 71; T 502–507.'},
  {t:'A chimeric mouse-human antibody to TNF', correct:false, why:'That is infliximab (slide 72).'},
  {t:'CTLA-4 extracellular domain fused to human IgG Fc', correct:false, why:'That is abatacept (slide 63).'},
  {t:'A pegylated Fab fragment', correct:false, why:'That is certolizumab pegol (slide 74).'}],
 teach:'Etanercept is a fusion protein: two p75 soluble TNF receptor pieces linked to the Fc fragment of human IgG1. Either side binds TNF, which is then not free to act; it is given SubQ (slide 71; T 501–509).',
 cite:D3+' slide 71; T 501–509'},

{id:'L3-092', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'etan-ae',
 tags:['recall'], source:'both',
 stem:'Besides injection site reactions, which rare effects have case reports with etanercept?',
 options:[
  {t:'Pancytopenia and nerve demyelination', correct:true, why:'Slide 71; T 509–511.'},
  {t:'Lupus-like syndrome and infusion reactions', correct:false, why:'Infliximab (slide 72).'},
  {t:'Posterior leukoencephalopathy syndrome', correct:false, why:'Reported with ustekinumab (slide 67).'},
  {t:'Ototoxicity', correct:false, why:'Minocycline (slide 45).'}],
 teach:'Etanercept side effects are usually rare, mostly local injection-site reactions, with case reports of pancytopenia and demyelinating syndromes such as multiple sclerosis (slide 71; T 508–511).',
 cite:D3+' slide 71; T 508–511'},

{id:'L3-093', skill:'tell', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'inflix-chimeric',
 tags:['tell'], source:'both',
 stem:'Which TNF-α inhibitor is a chimeric antibody given by IV infusion?',
 options:[
  {t:'Infliximab', correct:true, why:'Slide 72; T 512–513.'},
  {t:'Adalimumab', correct:false, why:'Human, given SubQ (slide 73; T 542–544).'},
  {t:'Golimumab', correct:false, why:'Human (slide 74; T 546).'},
  {t:'Etanercept', correct:false, why:'A fusion protein given SubQ (slide 71).'}],
 teach:'Infliximab combines portions of mouse and human IgG1 (chimeric), binds TNF, and is given by IV infusion (slide 72; T 511–513).',
 cite:D3+' slide 72; T 511–513'},

{id:'L3-094', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'inflix-ada',
 tags:['reasoning'], source:'both',
 stem:'Why can infliximab lose its effect in some patients?',
 options:[
  {t:'Patients make antibodies against the chimeric drug', correct:true, why:'Slide 72; T 513–518.'},
  {t:'TNF receptors on inflammatory cells are downregulated', correct:false, why:'Not the reason given; the body makes antibodies against the drug (T 513–518).'},
  {t:'The liver toxicity limit is reached', correct:false, why:'A cumulative liver limit is methotrexate (slide 61).'},
  {t:'Bacteria become resistant', correct:false, why:'Resistance applies to the acne antibiotics (slides 46–47).'}],
 teach:'Because infliximab is chimeric ("mousy"), many patients make antibodies against it; the body fights and breaks down the drug, so it is less effective (slide 72; T 513–518). Slide 72 gives antibodies in 14% to 40% of patients.',
 note:'She said "up to 40%" (T 518); slide 72 says 14% to 40%. No option uses the number.',
 cite:D3+' slide 72; T 513–518'},

{id:'L3-095', skill:'counsel', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'inflix-premed',
 tags:['counseling'], source:'both',
 stem:'What is done to prevent infusion reactions to infliximab?',
 options:[
  {t:'Premedicate with diphenhydramine or a steroid', correct:true, why:'Slide 72 ("premedicate"); T 519–522 (diphenhydramine, which she named by brand, or steroids).'},
  {t:'Give it with zinc oxide paste', correct:false, why:'Zinc oxide protects skin in SCAT (slide 56).'},
  {t:'Stop it for 15 weeks before each infusion is due', correct:false, why:'The 15-week stop is ustekinumab before live vaccines (slide 67).'},
  {t:'Count it on a separate tray', correct:false, why:'That is methotrexate dispensing (T 253–255).'}],
 teach:'Infliximab can cause acute (within 24 hours) and delayed (24 hours to 14 days) infusion reactions (slide 72) with chills, fever and itch, which can be anaphylactic; patients are premedicated with diphenhydramine or steroids (T 519–522).',
 cite:D3+' slide 72; T 518–522'},

{id:'L3-096', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'inflix-infusion-why', dupOf:'L3-075',
 tags:['room','reasoning'], source:'both',
 quote:'Room question, 11/03, T 522: "Why would people have infusion reactions? For this drug"',
 stem:'Why are infusion reactions a particular problem with infliximab?',
 options:[
  {t:'It is chimeric, with mouse protein', correct:true, why:'Answer given in class: "Cause it\'s mousy, OK? It\'s chimeric" (T 522–523; slide 72).'},
  {t:'It is a small molecule', correct:false, why:'It is a monoclonal antibody (slide 72).'},
  {t:'It is a pegylated antibody fragment', correct:false, why:'That is certolizumab pegol (slide 74).'},
  {t:'It binds the TNF receptor', correct:false, why:'It binds TNF itself (slide 72).'}],
 teach:'Infliximab\'s mouse portions make the body react to it, giving infusion reactions and anti-drug antibodies (slide 72; T 513–523). Adalimumab is human and does not share that profile (slide 73; T 542–544).',
 cite:D3+' slide 72; T 513–523'},

{id:'L3-097', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'inflix-lupus',
 tags:['reasoning'], source:'both',
 stem:'A patient on infliximab develops lupus-like symptoms. What explains this, and what is expected?',
 options:[
  {t:'Autoantibodies; it fades slowly after stopping', correct:true, why:'Slide 72; T 524–530, 536–542.'},
  {t:'An infection; it resolves with an antibiotic', correct:false, why:'She described an autoimmune reaction (T 527–530).'},
  {t:'Liver toxicity; it resolves with a lower weekly dose', correct:false, why:'Liver toxicity is methotrexate (slide 61).'},
  {t:'Photosensitivity; it resolves with sunscreen', correct:false, why:'Photosensitivity is tetracyclines and coal tar (slides 44, 54).'}],
 teach:'While fighting the mouse part of infliximab, the immune system may work too hard and make autoantibodies against the body, giving lupus-like symptoms, an autoimmune adverse reaction. It tends to go away after the drug is stopped, though that can take a while (slide 72; T 524–542).',
 cite:D3+' slide 72; T 524–542'},

{id:'L3-098', skill:'tell', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'adalim',
 tags:['tell'], source:'both',
 stem:'Why does adalimumab not share the infusion-reaction profile of infliximab?',
 options:[
  {t:'It is a human antibody', correct:true, why:'"It\'s human, so we don\'t have the side effect profile ... like we have for infliximab" (T 542–544); slide 73: less antigenic.'},
  {t:'It does not bind TNF-α', correct:false, why:'It is a human IgG1 antibody to TNF (slide 73).'},
  {t:'It is a fusion protein', correct:false, why:'That is etanercept (slide 71).'},
  {t:'It is given by IV infusion', correct:false, why:'Adalimumab is given SubQ (slide 73; T 544).'}],
 teach:'Adalimumab is a human IgG1 antibody to TNF, given SubQ; it is less antigenic than infliximab. Its most common side effects are local injection-site reactions, with increased infection risk (slide 73; T 542–545).',
 cite:D3+' slide 73; T 542–545'},

{id:'L3-099', skill:'pk', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'certo-peg',
 tags:['mechanism'], source:'both',
 stem:'What does attaching polyethylene glycol (PEG) do for certolizumab pegol?',
 options:[
  {t:'Greatly lengthens its half-life', correct:true, why:'"We increase its half-life by a lot" (T 547–548; slide 74).'},
  {t:'Lets it enter keratinocytes', correct:false, why:'Entering cells is the small molecule JAK inhibitors (T 570–573).'},
  {t:'Makes it bind the TNF receptor instead', correct:false, why:'It is a Fab fragment against TNF-α (slide 74).'},
  {t:'Lets it be taken by mouth', correct:false, why:'It is given subcutaneously (slide 74; T 549).'}],
 teach:'Certolizumab pegol is a Fab fragment of a humanized anti-TNF-α antibody attached to polyethylene glycol; linking PEG to a biological product increases its half-life a great deal, so it is dosed SubQ every other week (slide 74; T 546–550).',
 cite:D3+' slide 74; T 546–550'},

{id:'L3-100', skill:'pk', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'certo-extend',
 tags:['numbers','reasoning'], source:'both',
 stem:'After the first three doses, certolizumab pegol dosing may be extended to every 4 weeks. Why?',
 options:[
  {t:'To lower immunological reactions and keep the effect', correct:true, why:'T 552–555; slide 74 (every other week, may extend to every 4 weeks after the first three doses).'},
  {t:'Because antibodies have cleared the drug', correct:false, why:'The aim is less drug with the same effect (T 552–555).'},
  {t:'To allow live vaccines between doses', correct:false, why:'Live-vaccine timing is stated for ustekinumab (slide 67).'},
  {t:'Because its half-life shortens over the first three doses', correct:false, why:'PEG lengthens its half-life (T 547–548).'}],
 teach:'Certolizumab pegol is given SubQ every other week; after three doses the interval may be extended to every 4 weeks. The patient still gets an effect on the disease with less risk of immunological reactions (slide 74; T 549–555). Its most common adverse reactions are upper respiratory infections (slide 74; T 555–556).',
 cite:D3+' slide 74; T 549–556'},

{id:'L3-101', skill:'class', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'tnf-human', multi:true,
 tags:['tell','list'], source:'both',
 stem:'Which TNF-α inhibitors are human antibodies? Select all that apply.',
 options:[
  {t:'Adalimumab', correct:true, why:'Slide 73; T 543.'},
  {t:'Golimumab', correct:true, why:'Slide 74; T 546.'},
  {t:'Infliximab', correct:false, why:'Chimeric (slide 72; T 512).'},
  {t:'Etanercept', correct:false, why:'A fusion protein of TNF receptors and IgG1 Fc, not an antibody (slide 71).'}],
 teach:'TNF-α inhibitors by make: etanercept, a receptor-IgG1 Fc fusion protein; infliximab, chimeric; adalimumab and golimumab, human; certolizumab pegol, a pegylated Fab fragment of a humanized antibody (slides 71–74; T 501–547).',
 cite:D3+' slides 71–74; T 501–547'},

/* ---- JAK inhibitors ----------------------------------------------------- */
{id:'L3-102', skill:'mech', prof:'Smith', tier:'new', topic:'l3-jak', sub:'mech', concept:'jak-role',
 tags:['mechanism','figure'], source:'both',
 stem:'Why does blocking JAK reduce inflammatory cytokine production?',
 options:[
  {t:'Cytokine receptors need JAK to signal', correct:true, why:'Slide 75; T 562–569.'},
  {t:'JAK is the receptor that cytokines bind', correct:false, why:'JAK is a kinase associated with the receptor (T 564–565).'},
  {t:'JAK makes tetrahydrofolate', correct:false, why:'Tetrahydrofolate comes from dihydrofolate reductase (slide 59).'},
  {t:'JAK presents antigen to T cells', correct:false, why:'Antigen presentation is signal 1 (T 289–290).'}],
 teach:'Cytokine receptors have no kinase activity of their own; the associated Janus kinase phosphorylates the receptor, the signal goes to the nucleus, and inflammatory cytokines are transcribed. JAK inhibitors cut that signal and lower inflammatory cytokine production (slide 75; T 562–569).',
 cite:D3+' slide 75; T 562–569'},

{id:'L3-103', skill:'class', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'jak-small',
 tags:['tell'], source:'both',
 stem:'How do tofacitinib, ruxolitinib and upadacitinib differ from the monoclonal antibodies in this lecture?',
 options:[
  {t:'They are small molecules that enter cells', correct:true, why:'T 570–573: "Monoclonals are too big to get in the cell".'},
  {t:'They are fusion proteins with an Fc chain', correct:false, why:'Fusion proteins are abatacept and etanercept (slides 63, 71).'},
  {t:'They are chimeric and cause infusion reactions', correct:false, why:'That is infliximab (slide 72).'},
  {t:'They bind cytokines in plasma', correct:false, why:'They act on JAK inside the cell (slide 75; T 570–573).'}],
 teach:'The JAK inhibitors are small molecule inhibitors, not monoclonal antibodies: they get inside the cell to reach JAK, while monoclonals are too big to enter cells (T 569–573). Slide 76 gives tofacitinib as administered orally.',
 note:'The drug chart lists ruxolitinib and upadacitinib under chemical class "Peptides"; she called them small molecule inhibitors (T 570–572), and slide 62 groups the biologicals as fusion proteins, monoclonals and small molecule inhibitors. No option uses the word peptide.',
 cite:D3+' slides 62, 76; T 569–573'},

{id:'L3-104', skill:'tell', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'rux-jak12',
 tags:['tell'], source:'both',
 stem:'Which JAK inhibitor acts on JAK1 and JAK2?',
 options:[
  {t:'Ruxolitinib', correct:true, why:'Slide 76; T 574–576 ("binds two of the JAK subtypes").'},
  {t:'Tofacitinib', correct:false, why:'Slide 76 gives tofacitinib as a JAK inhibitor with no subtype pair; the two-subtype drug is ruxolitinib (T 574–576).'},
  {t:'Abatacept', correct:false, why:'Not a JAK inhibitor; it binds CD80/86 (slide 63).'},
  {t:'Ustekinumab', correct:false, why:'Not a JAK inhibitor; it binds p40 (slide 67).'}],
 teach:'Ruxolitinib binds two JAK subtypes, JAK1 and JAK2 (slide 76; T 573–576). Upadacitinib binds JAK1, JAK2 and possibly JAK3 and TYK2 (T 576–577).',
 cite:D3+' slide 76; T 573–577'},

{id:'L3-105', skill:'tell', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'upa',
 tags:['tell'], source:'both',
 stem:'What is known about upadacitinib compared with tofacitinib and ruxolitinib?',
 options:[
  {t:'It hits more JAK targets; better efficacy is unproven', correct:true, why:'"It\'s binding to more JAK targets, but ... we still don\'t know if it is more efficacious" (T 576–578). Slide 76 gives greater potency at JAK1 and JAK2 than at JAK3 and TYK2 and says its selectivity is still unsettled.'},
  {t:'It binds TNF-α outside the cell', correct:false, why:'It is a small molecule JAK inhibitor (T 569–573).'},
  {t:'It is proven more effective than tofacitinib and ruxolitinib', correct:false, why:'"We still don\'t know if it is more efficacious" (T 577–578).'},
  {t:'It is a humanized antibody to JAK', correct:false, why:'JAK inhibitors are small molecules, not antibodies (T 570–573).'}],
 teach:'Upadacitinib binds JAK1, JAK2 and maybe JAK3 and TYK2, so it hits more JAK targets, but it is not known whether it is more efficacious than tofacitinib or ruxolitinib (slide 76; T 576–578).',
 cite:D3+' slide 76; T 576–578'},

{id:'L3-106', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'tofa-bbw',
 tags:['recall'], source:'both',
 stem:'What is the black box warning for tofacitinib?',
 options:[
  {t:'Severe infection, lymphoma and other malignancies', correct:true, why:'Slide 76; T 579–581: "Just like your TNF alpha inhibitors".'},
  {t:'Cumulative liver toxicity', correct:false, why:'That is methotrexate (slide 61).'},
  {t:'Dose-limiting conjunctivitis, keratitis and dry eye', correct:false, why:'That is dupilumab (slide 64; T 387–389).'},
  {t:'Demyelinating syndromes', correct:false, why:'Case reports with etanercept (slide 71).'}],
 teach:'Tofacitinib, given orally, carries a black box warning for severe infection, lymphoma and other malignancies, like the TNF-α inhibitors; slide 76 adds caution in patients at high risk for GI perforation (slide 76; T 578–581).',
 cite:D3+' slides 70, 76; T 578–581'},

{id:'L3-107', skill:'tell', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'bbw-classes', multi:true,
 tags:['tell','list'], source:'both',
 stem:'Which drugs carry a black box warning for serious infection and malignancy? Select all that apply.',
 options:[
  {t:'Adalimumab', correct:true, why:'The TNF-α inhibitor class carries it (slide 70; T 497–500).'},
  {t:'Etanercept', correct:true, why:'The TNF-α inhibitor class carries it (slide 70; T 497–500).'},
  {t:'Tofacitinib', correct:true, why:'Slide 76; T 579–581.'},
  {t:'Secukinumab', correct:false, why:'Its stated risks are infection (TB evaluation first), nasopharyngitis and Crohn\'s flares; no black box warning was given (slide 66; T 413–416).'}],
 teach:'At the close she asked, "did I mention a black box warning?" (T 586). In this lecture the TNF-α inhibitor class (slide 70; T 497–500) and tofacitinib (slide 76; T 579–581) carry black box warnings for serious infection and for lymphoma and other malignancies.',
 cite:D3+' slides 70, 76; T 497–500, 579–586'},

{id:'L3-108', skill:'pk', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'tofa-oral',
 tags:['recall'], source:'both',
 stem:'How is tofacitinib given?',
 options:[
  {t:'Orally', correct:true, why:'Slide 76 ("Administered orally"); T 578–579.'},
  {t:'By IV infusion', correct:false, why:'IV infusion is infliximab (slide 72).'},
  {t:'Subcutaneously every other week', correct:false, why:'That is certolizumab pegol (slide 74).'},
  {t:'As a topical gel', correct:false, why:'Slide 76 gives oral administration for tofacitinib.'}],
 teach:'Unlike the injected biologicals, tofacitinib is a small molecule given orally (slide 76; T 569–579).',
 note:'Ruxolitinib\'s route is not asked: she said "these are given orally" (T 578–579), slide 76 says ruxolitinib is used topically and orally, and the drug chart lists it as topical for AD.',
 cite:D3+' slide 76; T 569–579'}
);

/* ---- Added 2026-11-07 for Dr. Smith's Exam 1 hints: targets, within-class
   differences, why each MOA helps, boxed warnings. "10/30 T" = line numbers of
   DEENT_10_30_Lecture_Only_Transcript.txt; plain "T" = the 11/03 transcript. */
TOPICS.push(
 {id:'l3-sum', name:'Across her pharmacology lectures: targets and boxed warnings', prof:'Smith',
  cite:'Lectures 1–3 — Skin-PCol-Students-2026.pdf, slides 14–78', subs:[
   {id:'tgt', name:'Drug targets and what sets drugs apart (matching)', cite:'slides 14–78'},
   {id:'bbw', name:'Which drugs carry a black box warning', cite:'slides 30, 70, 76'}]}
);

QUESTIONS.push(
{id:'L3-109', dupOf:'L3-001', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'sarecycline-target',
 tags:['mechanism','target'], source:'both',
 stem:'Where on the bacterium does sarecycline act to stop protein synthesis?',
 options:[
  {t:'The 30S ribosomal subunit', correct:true, why:'Slide 43: the tetracycline class, sarecycline included, binds the 30S subunit irreversibly and blocks aminoacyl-tRNA binding at the acceptor site (T 27–31).'},
  {t:'The 50S ribosomal subunit', correct:false, why:'Clindamycin and the macrolides bind the 50S subunit (slides 46–47).'},
  {t:'Bacterial dihydrofolate reductase', correct:false, why:'That is trimethoprim (slide 48).'},
  {t:'PABA use in folic acid synthesis', correct:false, why:'Sulfamethoxazole competes with PABA (slide 48).'}],
 teach:'Sarecycline, minocycline and doxycycline are the tetracyclines on the drug list; all bind the 30S subunit and are broad-spectrum bacteriostatic antibiotics (slide 43; T 27–36).',
 cite:D3+' slides 43, 46–48; T 27–36'},

{id:'L3-110', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'sarecycline-narrow',
 tags:['tell'], source:'slide',
 stem:'Which feature sets sarecycline apart from the other tetracyclines?',
 options:[
  {t:'A narrower antimicrobial spectrum', correct:true, why:'Slide 45: sarecycline has a more narrow antimicrobial spectrum than the other tetracyclines, which may mean less disruption of the vulvovaginal and GI microbiome.'},
  {t:'It binds the 50S ribosomal subunit', correct:false, why:'Like the whole class it binds the 30S subunit (slide 43).'},
  {t:'It can cause ototoxicity', correct:false, why:'Ototoxicity is the special side effect of minocycline (slide 45; T 50–51).'},
  {t:'It is safe in children under 8', correct:false, why:'Slide 45: the class should not be used in patients younger than 8 years.'}],
 teach:'Within the tetracyclines (slide 45): minocycline, doxycycline and sarecycline absorb better from the GI tract than tetracycline; doxycycline and minocycline are more lipid soluble; minocycline can cause ototoxicity; sarecycline has the narrowest spectrum.',
 note:'Slide 45 facts she left to reading: "You can read the rest of these other little facts I put on this slide" (T 51–52).',
 cite:D3+' slides 43, 45; T 46–52'},

{id:'L3-111', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-less-photo',
 tags:['tell','photosensitivity'], source:'slide',
 stem:'Which tetracyclines may be less photosensitizing than tetracycline or doxycycline?',
 options:[
  {t:'Minocycline and sarecycline', correct:true, why:'Slide 45: minocycline and sarecycline may be less photosensitizing than either tetracycline or doxycycline.'},
  {t:'Doxycycline and minocycline', correct:false, why:'Doxycycline is one of the two the comparison is made against (slide 45).'},
  {t:'Doxycycline and sarecycline', correct:false, why:'Doxycycline is one of the two the comparison is made against (slide 45).'},
  {t:'Tetracycline and minocycline', correct:false, why:'Tetracycline is one of the two the comparison is made against (slide 45).'}],
 teach:'Photosensitivity in fair-skinned people is a class side effect of oral tetracyclines (slide 44): "you\'re gonna burn easily when you\'re out in the sun, burn quickly and badly" (T 42–44). Slide 45 adds that minocycline and sarecycline may cause less of it.',
 note:'Slide 45 facts she left to reading (T 51–52).',
 cite:D3+' slides 44–45; T 42–44, 51–52'},

{id:'L3-112', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'tet-anti-inflam',
 tags:['mechanism','reasoning'], source:'slide',
 stem:'Tetracyclines are antimicrobials. On what may their efficacy in acne depend more?',
 options:[
  {t:'Their anti-inflammatory activity', correct:true, why:'Slide 45: although the tetracyclines are antimicrobials, their efficacy in acne may be more dependent on anti-inflammatory activity.'},
  {t:'Killing P. acnes outright in the follicle', correct:false, why:'Slide 43: they are bacteriostatic, keeping bacteria from multiplying rather than killing them (T 34–36).'},
  {t:'Lowering androgen production', correct:false, why:'Androgens are the target of the antiandrogen class (Pathophys slides 36–37), not the tetracyclines.'},
  {t:'Shedding of the stratum corneum', correct:false, why:'That is the action of keratolytics such as salicylic acid (PCol slide 39).'}],
 teach:'Inflammation with release of inflammatory mediators is one of the four acne factors (Pathophys slide 32), and the acne pathogenesis figure places antibiotics against both P. acnes and the inflammatory response (Pathophys slide 36).',
 note:'Slide 45 facts she left to reading (T 51–52).',
 cite:D3+' slides 39, 43, 45; T 34–36, 51–52'},

{id:'L3-113', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'doxy-mino-lipid',
 tags:['tell'], source:'slide',
 stem:'Why do doxycycline and minocycline penetrate the pilosebaceous follicle more efficiently?',
 options:[
  {t:'They are more lipid soluble', correct:true, why:'Slide 45: doxycycline and minocycline are more lipid soluble, penetrating the pilosebaceous follicle more efficiently.'},
  {t:'They are applied topically', correct:false, why:'The tetracyclines in this lecture are oral (slide 44: side effects of oral tetracyclines).'},
  {t:'They bind the 50S subunit', correct:false, why:'They bind the 30S subunit (slide 43); slide 45 puts their better follicle entry down to lipid solubility.'},
  {t:'They kill bacteria rather than slow them', correct:false, why:'They are bacteriostatic, keeping bacteria from multiplying (slide 43).'}],
 teach:'The pilosebaceous unit, the hair follicle with its sebaceous gland, is where acne develops (Pathophys slide 30; 10/29 T 408–410), so a drug that enters it well reaches the disease.',
 note:'Slide 45 facts she left to reading (T 51–52).',
 cite:D3+' slides 43–45; T 51–52'},

{id:'L3-114', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'risan-target',
 tags:['mechanism','target'], source:'both',
 stem:'What does risankizumab bind?',
 options:[
  {t:'The p19 subunit of IL-23', correct:true, why:'Slide 69: a humanized IgG1 antibody that binds the p19 subunit of IL-23 (T 480–482).'},
  {t:'The p40 subunit of IL-12 and IL-23', correct:false, why:'That is ustekinumab (slide 67).'},
  {t:'IL-17 receptor A', correct:false, why:'That is brodalumab (slide 66).'},
  {t:'The IL-4 receptor alpha subunit', correct:false, why:'That is dupilumab (slide 64).'}],
 teach:'Guselkumab, tildrakizumab and risankizumab all bind p19 of IL-23. Risankizumab is the one given SubQ or IV, for moderate to severe plaque psoriasis (slides 68–69; T 480–486).',
 cite:D3+' slides 64, 66–69; T 480–486'},

{id:'L3-115', skill:'mech', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'tnf-why-pso',
 tags:['mechanism','reasoning'], source:'both',
 stem:'Why does blocking TNF-α reduce psoriatic plaques?',
 options:[
  {t:'It is an inflammatory cytokine in psoriasis', correct:true, why:'Slide 70: TNF-α is an inflammatory cytokine; the inhibitors keep it from its receptors on inflammatory cells and reduce the number and size of plaques (T 489, 493–497). Pathophys slide 21 names TNF-α among the cytokines released in psoriasis.'},
  {t:'It crosslinks the DNA of dividing keratinocytes', correct:false, why:'DNA crosslinking is the proposed action of coal tar (slide 53), not a cytokine role.'},
  {t:'It raises sebum output in the follicle', correct:false, why:'Sebum belongs to the acne story (Pathophys slide 32).'},
  {t:'It breaks down cAMP inside mast cells', correct:false, why:'cAMP is broken down by phosphodiesterase (slide 32).'}],
 teach:'In psoriasis, APCs, T cells and keratinocytes release TNF-α, IL-23 and IL-17, which drive keratinocyte hyperproliferation and chronic inflammation (Pathophys slides 21–22). "In general, TNF alpha inhibitors are anti-inflammatory" (T 496–497).',
 cite:D3+' slides 32, 53, 70; T 489–497'},

{id:'L3-116', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'class', concept:'tnf-bbw-young',
 tags:['adverse','recall'], source:'slide',
 stem:'The black box warning of the TNF-α inhibitors reports fatal lymphoma and other malignancies in which patients?',
 options:[
  {t:'Children and adolescents', correct:true, why:'Slide 70: lymphoma and other malignancies, some fatal, have been reported in children and adolescent patients.'},
  {t:'Pregnant women', correct:false, why:'Not part of the boxed warning on slide 70.'},
  {t:'Adults over 65', correct:false, why:'Not part of the boxed warning on slide 70.'},
  {t:'Patients with diabetes mellitus', correct:false, why:'Diabetes is a caution for salicylic acid on the extremities (slide 40), not part of this warning.'}],
 teach:'The class boxed warning has two parts: serious infections that may lead to hospitalization or death, and lymphoma and other malignancies (slide 70; T 497–500).',
 note:'The children-and-adolescents detail is on slide 70 only; in class she named the two parts, infection and cancer (T 497–500).',
 cite:D3+' slides 40, 70; T 497–500'},

{id:'L3-117', skill:'adverse', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'tofa-gi-perf',
 tags:['adverse'], source:'slide',
 stem:'Besides its black box warning, which caution applies to tofacitinib?',
 options:[
  {t:'Caution at high risk of GI perforation', correct:true, why:'Slide 76: it should also be used with caution in patients who are at high risk for GI perforation.'},
  {t:'Regular hearing checks during therapy', correct:false, why:'Ototoxicity is minocycline\'s special side effect (slide 45).'},
  {t:'Count tablets on a separate counting tray', correct:false, why:'That handling rule is for methotrexate (T 253–255).'},
  {t:'Stop 15 weeks before a live vaccine', correct:false, why:'That timing is for ustekinumab (slide 67).'}],
 teach:'Tofacitinib is an oral small-molecule JAK inhibitor with a black box warning for severe infection, lymphoma and other malignancies, "just like your TNF alpha inhibitors" (slide 76; T 579–581).',
 cite:D3+' slides 45, 67, 76; T 253–255, 579–581'},

{id:'L3-118', skill:'tell', prof:'Smith', tier:'new', topic:'l3-sum', sub:'bbw', concept:'bbw-which-drug',
 tags:['tell','adverse'], source:'both',
 stem:'Which of these drugs carries a black box warning?',
 options:[
  {t:'Oral cyclosporine', correct:true, why:'Slide 30: oral calcineurin inhibitors carry a black box warning for lymphoma and other malignancies and for infections (10/30 T 396–398).'},
  {t:'Injected dupilumab', correct:false, why:'Its adverse effects are generally mild: nasopharyngitis, headache, eye effects (slide 64); no boxed warning was given.'},
  {t:'Topical crisaborole', correct:false, why:'Its notable risk is hypersensitivity at the site, in less than 1% (slide 33); no boxed warning was given.'},
  {t:'Secukinumab', correct:false, why:'Its risks are infection (TB evaluation first) and nasopharyngitis (slide 66); no boxed warning was given.'}],
 teach:'The black box warnings in her pharmacology lectures: oral cyclosporine (slide 30), the TNF-α inhibitor class (slide 70) and tofacitinib (slide 76); each is for serious infection and for lymphoma and other malignancies. At the end of 11/03 she listed what to know: "What is the target of these drugs? What\'s different between the drugs in each category, and then, did I mention a black box warning?" (T 584–586).',
 cite:D3+' slides 30, 33, 64, 66, 70, 76; T 497–500, 579–586'},

/* ---- Matching: drug to target. Fill-in-the-blank practice for her target
   questions is the write-then-check list in Reference ("Drug targets"). ---- */
{id:'L3-119', type:'match', skill:'mech', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-ad',
 tags:['target','match'], source:'both',
 stem:'Match each drug used for atopic dermatitis to its target.', left:'Drug', right:'Target',
 pairs:[
  {l:'Crisaborole', r:'Phosphodiesterase 4 (PDE4)', why:'Slides 32–33; 10/30 T 430–450.'},
  {l:'Pimecrolimus', r:'Calcineurin', why:'Slides 24–27; 10/30 T 360–365.'},
  {l:'Tacrolimus', r:'FKBP, then calcineurin', why:'Slide 26: tacrolimus binds FKBP and the complex inhibits calcineurin.'},
  {l:'Dupilumab', r:'IL-4 receptor alpha subunit', why:'Slide 64: binds IL-4Rα, shared by the IL-4 and IL-13 receptors.'},
  {l:'Ruxolitinib', r:'JAK1 and JAK2', why:'Slide 76; T 574–576.'}],
 teach:'The AD drugs on her drug table (atopic dermatitis page): two calcineurin inhibitors, a PDE-4 inhibitor, an IL-4R antagonist and two JAK inhibitors. Upadacitinib, also a JAK inhibitor, was more potent at JAK1 and JAK2 than at JAK3 and TYK2 in an isolated enzyme assay; its selectivity is still unsettled (slide 76).',
 cite:D3+' slides 24–27, 32–33, 64, 76; T 574–576'},

{id:'L3-120', type:'match', skill:'mech', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-acne-abx',
 tags:['target','match'], source:'both',
 stem:'Match each acne antimicrobial to its target.', left:'Drug', right:'Target',
 pairs:[
  {l:'Doxycycline', r:'30S ribosomal subunit', why:'Slide 43; T 27–31.'},
  {l:'Clindamycin', r:'50S subunit; blocks translocation', why:'Slide 46; T 53–55.'},
  {l:'Sulfamethoxazole', r:'PABA use in dihydrofolic acid synthesis', why:'Slide 48: competes with PABA.'},
  {l:'Trimethoprim', r:'Bacterial dihydrofolate reductase', why:'Slide 48: dihydrofolic to tetrahydrofolic acid blocked.'},
  {l:'Topical dapsone (acne)', r:'Neutrophils (anti-inflammatory)', why:'Slide 50: the acne effect is anti-inflammatory, with neutrophils a possible site of action.'}],
 teach:'Erythromycin and azithromycin, like clindamycin, attach to the 50S subunit (slide 47). Metronidazole\'s mechanism is unknown: Demodex brevis or neutrophils (slide 51).',
 cite:D3+' slides 43, 46–48, 50–51; T 27–31, 53–55'},

{id:'L3-121', type:'match', skill:'mech', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-ker-cyto',
 tags:['target','match'], source:'slide',
 stem:'Match each keratolytic or cytotoxic agent to its proposed action.', left:'Agent', right:'Proposed action',
 pairs:[
  {l:'Benzoyl peroxide', r:'Antimicrobial against P. acnes; comedolytic', why:'PCol slide 36.'},
  {l:'Sulfur', r:'Reduced to hydrogen sulfide in keratinocytes', why:'PCol slide 38.'},
  {l:'Salicylic acid', r:'Solubilizes proteins holding the stratum corneum', why:'PCol slide 39.'},
  {l:'Coal tar', r:'Crosslinks DNA to inhibit cell division', why:'PCol slide 53.'},
  {l:'Anthralin', r:'May act on keratinocyte mitochondria', why:'PCol slide 55: exact mechanism not known; may reduce mitotic activity by affecting mitochondria; also prevents T-lymphocyte activation.'}],
 teach:'Shale tar\'s mechanism is unknown; selenium sulfide and zinc pyrithione are cytostatic and antifungal with mechanism unknown (PCol slide 57). The cytotoxic agents as a group decrease the rate of epidermal cell turnover (PCol slide 53).',
 cite:D2+' slides 36, 38–39, 53, 55, 57'},

{id:'L3-122', type:'match', skill:'mech', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-pso-small',
 tags:['target','match'], source:'both',
 stem:'Match each psoriasis drug to its target.', left:'Drug', right:'Target',
 pairs:[
  {l:'Methotrexate', r:'Dihydrofolate reductase', why:'Slide 59; T 215–220.'},
  {l:'Calcipotriene', r:'Vitamin D receptor', why:'Slide 21.'},
  {l:'Cyclosporine', r:'Cyclophilin, then calcineurin', why:'Slide 26: the cyclosporine–cyclophilin complex binds calcineurin.'},
  {l:'Apremilast', r:'Phosphodiesterase 4 (PDE4)', why:'Slide 34; 10/30 T 464–466: "the same mechanism of action" as crisaborole.'},
  {l:'Methoxsalen', r:'DNA, by intercalation after UVA', why:'Slide 78; sun lecture audio 00:30–01:00.'}],
 teach:'Tofacitinib, on the psoriasis page of her drug table, inhibits JAK (slide 76). Acitretin and tazarotene are retinoids acting through RAR and RXR (slides 14, 18, 20).',
 cite:D3+' slides 14, 18, 20–21, 26, 34, 59, 76, 78; T 215–220'},

{id:'L3-123', type:'match', skill:'mech', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-biologics',
 tags:['target','match'], source:'both',
 stem:'Match each biologic to what it binds.', left:'Drug', right:'Binds',
 pairs:[
  {l:'Abatacept', r:'CD80/86 on antigen-presenting cells', why:'Slide 63; T 316–323.'},
  {l:'Secukinumab', r:'IL-17A cytokine', why:'Slide 66.'},
  {l:'Brodalumab', r:'IL-17 receptor A', why:'Slide 66; T 422.'},
  {l:'Ustekinumab', r:'p40 subunit of IL-12 and IL-23', why:'Slide 67.'},
  {l:'Tildrakizumab-asmn', r:'p19 subunit of IL-23', why:'Slide 68.'}],
 teach:'Ixekizumab also binds the IL-17A cytokine (humanized; secukinumab is human). Guselkumab and risankizumab also bind p19 of IL-23 (slides 66, 68–69). "Is it human or humanized, and what are they binding to?" (T 476–477).',
 cite:D3+' slides 63, 66–69; T 316–323, 422, 476–477'},

{id:'L3-124', type:'match', skill:'tell', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-tnf-make',
 tags:['tell','match'], source:'both',
 stem:'All of these bind TNF-α. Match each to its structure.', left:'Drug', right:'Structure',
 pairs:[
  {l:'Etanercept', r:'Two p75 TNF receptors fused to IgG1 Fc', why:'Slide 71; T 501–505.'},
  {l:'Infliximab', r:'Chimeric mouse–human IgG1 antibody', why:'Slide 72.'},
  {l:'Adalimumab', r:'Human IgG1 antibody', why:'Slide 73.'},
  {l:'Certolizumab pegol', r:'PEG-linked Fab of a humanized antibody', why:'Slide 74.'}],
 teach:'All the marketed TNF-α inhibitors bind TNF-α so it cannot reach its receptors on inflammatory cells (slide 70; T 493–495). Golimumab is a human antibody to TNF-α (slide 74).',
 cite:D3+' slides 70–74; T 493–505'},

{id:'L3-125', type:'match', skill:'tell', prof:'Smith', tier:'new', topic:'l3-sum', sub:'tgt', concept:'tgt-retinoids',
 tags:['tell','match'], source:'slide',
 stem:'Match each retinoid to the feature that sets it apart.', left:'Retinoid', right:'Feature',
 pairs:[
  {l:'Tretinoin', r:'All-trans retinoic acid; microsphere form', why:'PCol slide 17.'},
  {l:'Adapalene', r:'Sun stable; can be used with benzoyl peroxide', why:'PCol slide 18.'},
  {l:'Tazarotene', r:'Psoriasis, acne and wrinkles; photosensitizing', why:'PCol slide 18.'},
  {l:'Isotretinoin', r:'Oral, for recalcitrant severe cystic acne', why:'PCol slide 19.'},
  {l:'Acitretin', r:'Oral, for psoriasis, especially pustular', why:'PCol slide 20.'}],
 teach:'All of them bind the retinoic acid receptors, RAR and RXR, and change gene transcription at the RARE; the RAR effect on differentiation and proliferation is the one wanted in acne and psoriasis (PCol slide 14).',
 cite:D2+' slides 14, 17–20'}
);
