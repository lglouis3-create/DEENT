/* ==========================================================================
   DRAFT: Exam 1 style practice items (Louis, 2026-11-13: "Yes draft them").
   NOT in course.js `files` and not in any build: Louis reads them first.
   Built from the 25 recalled Exam 1 questions (src/STYLE.md "Exam questions Louis recalls")
   and Dr. Sikazwe's stated cues (STYLE.md, Lectures 3 and 4). What changes against the
   current bank, each from that comparison:
     - structures drawn without names (images from src/drafts/make_draft_images.py: Atlas core
       structures only, numbered 1-5), where the current bank names the drug in the stem;
     - "conclude" and "assume" stems that state a property or a premise and ask what follows;
     - select-all with no partial credit, from drug-to-class lists and from statements whose
       wrong options swap an organ or a step;
     - short options from one category (receptor / DNA site / ligand; drug names; numbers),
       with the difficulty in telling them apart, not in sentence length.
   Sources: f26-DEENT-DPAW-mc.pdf (PDF page numbers as in q4_L03b.js and q5_L04.js), the 11/04
   transcript (Drive 1twKCc0dxcqPJIs-m7pphfV0lzSGEGcW5; quoted, no offsets), Skin-PCol-Students-2026.pdf,
   Skin-Pathophys-Students-2026.pdf. XS-* Dr. Sikazwe; XM-* Dr. Smith.
   ========================================================================== */
const XS = 'Lecture 4 (f26-DEENT-DPAW-mc.pdf)';
const XP = 'Lecture 1 (Skin-Pathophys-Students-2026.pdf)';
const XC = 'Lecture 1 (Skin-PCol-Students-2026.pdf)';
const XC2 = 'Lecture 2 (Skin-PCol-Students-2026.pdf)';
const XC3 = 'Lecture 3 (Skin-PCol-Students-2026.pdf)';

QUESTIONS.push(
/* ================= Dr. Sikazwe: drawings, schemes and conclusions ================= */
{id:'XS-001', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'x-alkyne-picture',
 tags:['exam-style','structure'], source:'both', img:'x-retinoids5',
 stem:'Only one of the five retinoids drawn contains a carbon–carbon triple bond. Which numbered structure is it?',
 options:[
  {t:'Structure 4', correct:true, why:'Tazarotene: slide 29 calls it "an acetylenic retinoid"; the triple bond joins the two ring systems, and the ethyl ester at the end makes it a prodrug (slide 51; "ester hydrolysis by CE enzymes").'},
  {t:'Structure 1', correct:false, why:'Tretinoin, all-trans retinoic acid (slide 49): a chain of double bonds, no triple bond.'},
  {t:'Structure 2', correct:false, why:'Adapalene (slide 51): a naphthoic acid with an adamantyl group; no triple bond.'},
  {t:'Structure 3', correct:false, why:'Acitretin (slide 50, 2nd generation, mono-aromatic): a chain of double bonds; no triple bond.'},
  {t:'Structure 5', correct:false, why:'Isotretinoin, 13-cis retinoic acid (slide 49): double bonds only.'}],
 teach:'"So we can say acetylenic is our kind. Retinoid. And it\'s also an ester prodrug" (11/04). Alkyne and acetylenic name the same carbon–carbon triple bond. Of the retinoids on slides 49–51, tazarotene is the only one drawn with it.',
 cite:XS+' slides 29, 49–51; 11/04 transcript'},

{id:'XS-002', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'iso', concept:'x-geometric-isomer-picture',
 tags:['exam-style','structure'], source:'both', img:'x-retinoids5',
 stem:'Structure 1 is tretinoin (all-trans retinoic acid). Which numbered structure is its geometric isomer, 13-cis retinoic acid?',
 options:[
  {t:'Structure 5', correct:true, why:'Isotretinoin: the same atoms and the same chain as tretinoin, with the double bond at carbon 13 cis instead of trans (slide 49; "13 carbon cis. And that\'s the only difference").'},
  {t:'Structure 3', correct:false, why:'Acitretin has an aromatic ring in place of the cyclohexene ring and a methoxy group (slide 50, mono-aromatics), so it is a different molecule, not an isomer.'},
  {t:'Structure 2', correct:false, why:'Adapalene is a polyaromatic retinoid with an adamantyl group (slide 51).'},
  {t:'Structure 4', correct:false, why:'Tazarotene is a polyaromatic ethyl ester with a triple bond (slides 29, 51).'}],
 teach:'"These are called geometric isomers... they are all trans up to here, but here, cis. So this is a cis retinoic acid, 13 in particular" (11/04). Tretinoin is used topically and isotretinoin orally, and both are active (11/04; slide 29 lists isotretinoin as an oral agent).',
 cite:XS+' slide 49; 11/04 transcript'},

{id:'XS-003', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'x-aha-select-picture',
 tags:['exam-style','structure','select-all'], source:'both', img:'x-hydroxy5',
 stem:'Select all that apply. No partial credit will be given. Which of the numbered molecules are alpha-hydroxy acids?',
 options:[
  {t:'Structure 1', correct:true, why:'Glycolic acid, HO–CH2–COOH: the OH is on the carbon next to the carboxylic acid carbon (slide 43; "the hydroxy group is on the atom that is alpha to the carboxylic acid").'},
  {t:'Structure 3', correct:true, why:'Lactic acid, CH3–CH(OH)–COOH: the OH is on the alpha carbon (slide 44 SAR: "most possess OH on alpha-C").'},
  {t:'Structure 2', correct:false, why:'Salicylic acid: the OH is one carbon farther from the carboxylic acid carbon, so it is a beta-hydroxy acid (slide 43; "this is a beta hydroxy acid").'},
  {t:'Structure 4', correct:false, why:'Azelaic acid is a C9 dicarboxylic acid with no hydroxy group (slide 54).'},
  {t:'Structure 5', correct:false, why:'PABA, p-aminobenzoic acid, has an amino group and no hydroxy group (slide 63).'}],
 teach:'Slide 44: the molecule needs a COOH group, and most have the OH on the alpha carbon, the carbon next to CO2H. "How do we define alpha hydroxy? Hydroxy group needs to be on the carbon that is next to the carboxylic acid" (11/04).',
 cite:XS+' slides 43–44, 54, 63; 11/04 transcript'},

{id:'XS-004', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'x-tetracycline-picture',
 tags:['exam-style','structure'], source:'both', img:'x-tetra4',
 stem:'A patient is allergic to tetracycline. Which numbered drug shares its core structure with tetracycline and so risks a cross-reaction?',
 options:[
  {t:'Structure 2', correct:true, why:'Doxycycline: four six-membered rings fused in a straight line, the tetracycline core. Slide 55: "cross reactivities due to structure similarity".'},
  {t:'Structure 3', correct:false, why:'Hydrocortisone is a steroid: its four rings are stacked at angles, not in a line (11/04: "visually, can you identify tetracyclines and distinguish them from steroids?").'},
  {t:'Structure 1', correct:false, why:'Spironolactone is also a steroid, with the angled four-ring skeleton (slide 53).'},
  {t:'Structure 4', correct:false, why:'Azelaic acid is a small linear dicarboxylic acid with no rings (slide 54).'}],
 teach:'"Tetracyclines, be able to identify them... that\'s a linear tetracyclic molecule; in steroids, they\'re stacked." Doxycycline and minocycline share the tetracycline core, so cross-allergy is expected ("structural similarity").',
 cite:XS+' slides 53–55; 11/04 transcript'},

{id:'XS-005', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'x-steroid-or-not-picture',
 tags:['exam-style','structure','select-all'], source:'both', img:'x-steroid-or-not5',
 stem:'Select all that apply. No partial credit will be given. Which of the numbered molecules are steroids?',
 options:[
  {t:'Structure 2', correct:true, why:'Hydrocortisone: four fused rings, three six-membered and one five-membered, stacked at angles (slide 20 shows its skeleton and numbering; 11/04: "A, B, C, D").'},
  {t:'Structure 3', correct:true, why:'Spironolactone: the steroidal antiandrogen (slide 53; "which one is the steroid? This one, right?").'},
  {t:'Structure 1', correct:false, why:'Tetracycline: four six-membered rings fused in a straight line, not the steroid skeleton (slide 55).'},
  {t:'Structure 5', correct:false, why:'Minocycline: a tetracycline, with the linear four-ring core (slide 55).'},
  {t:'Structure 4', correct:false, why:'Ketoconazole: an azole antifungal, "this is not a steroid" (slide 53); it is a strong CYP3A4 inhibitor.'}],
 teach:'Steroids have the A, B, C, D ring skeleton (11/04; slide 20 shows it with the numbering). On slide 53 the steroidal antiandrogen is spironolactone; ketoconazole and flutamide are not steroids.',
 cite:XS+' slides 20, 53, 55; 11/04 transcript'},

{id:'XS-006', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'x-apremilast-dealkyl-picture',
 tags:['exam-style','structure','scheme'], source:'both', img:'x-apremilast-groups',
 stem:'Which lettered group of apremilast is lost when CYP3A4 O-deethylates it?',
 options:[
  {t:'a, on the ethoxy oxygen', correct:true, why:'De-ethylation removes an ethyl group from the ether oxygen: the ethoxy (O–CH2CH3, group a) becomes an OH.'},
  {t:'b, on the methoxy oxygen', correct:false, why:'Removing this methyl is O-demethylation, the step named on slide 34 ("O-demethylation → –OH metabolite → O-Gluc").'},
  {t:'c, on the sulfone sulfur', correct:false, why:'This methyl is on sulfur, not on an ether oxygen, so no O-dealkylation can remove it.'},
  {t:'d, on the amide carbonyl', correct:false, why:'This methyl is on a carbonyl carbon of an amide, not on an ether oxygen.'}],
 teach:'O-dealkylation takes the alkyl group off an ether oxygen and leaves an OH: methyl off, "O-demethylation"; ethyl off, "O-deethylation". Slide 33: apremilast is extensively metabolized, 3A4 major (1A2 and 2A6 minor), then O-glucuronidation of the OH metabolite. In the 11/04 lecture he named O-demethylation ("the methyl group is here"); Exam 1 keyed an O-deethylated metabolite as the one "indicated" (see note).',
 note:'Slide 33 and the 11/04 lecture name O-demethylation; the Exam 1 item (Louis, 2026-11-13) keyed "O-deethylated" for the metabolite indicated. We have not seen the exam picture, so which alkyl group it showed removed is open. This draft teaches both reactions by structure. S4-046 and S4H-014 in the bank say O-demethylation, as slide 34 does: ask Louis which alkyl group the exam scheme showed before changing them.',
 cite:XS+' slide 34; 11/04 transcript'},

{id:'XS-007', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'x-limus-conclude',
 tags:['exam-style','conclude','pk'], source:'both',
 stem:'Pimecrolimus and tacrolimus are similar in lipophilicity, structure and mechanism, but pimecrolimus has higher non-specific skin protein binding. It is correct to conclude that, compared with tacrolimus, topical pimecrolimus is:',
 options:[
  {t:'Less likely to reach the circulation', correct:true, why:'Slide 28: pimecrolimus, higher non-specific skin protein binding (low systemic ADRs); tacrolimus, low skin protein binding. "So it binds to the skin... so that it doesn\'t get into systemic circulation" (11/04).'},
  {t:'A different kind of immunosuppressant', correct:false, why:'Slide 28: similar in lipophilicity, structure and mechanism; both are calcineurin inhibitors.'},
  {t:'Much less lipophilic', correct:false, why:'He stated the log P values are similar; both are very lipophilic (slide 28; cLogP 6.0 and 5.8).'},
  {t:'More likely to cause systemic adverse reactions', correct:false, why:'The reverse: tacrolimus can enter the circulation, which is why people say "don\'t use tacrolimus as much" (11/04).'}],
 teach:'They differ in one PK property, skin permeation: "this is the biggest thing... absorption through the skin" (11/04). High skin protein binding keeps pimecrolimus in the skin and lowers systemic exposure.',
 cite:XS+' slide 28; 11/04 transcript'},

{id:'XS-008', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'x-csa-azole-conclude',
 tags:['exam-style','conclude','interaction'], source:'both',
 stem:'Oral cyclosporine has about 30% bioavailability because of first-pass metabolism by CYP3A4. Ketoconazole, an azole antifungal, is added. It is correct to conclude that cyclosporine blood levels will:',
 options:[
  {t:'Rise, because first-pass metabolism is blocked', correct:true, why:'Slide 33: PO bioavailability 30%, first-pass effect, extensively metabolized by 3A4. Azoles are strong 3A4 inhibitors (11/04; ketoconazole is listed on slide 53), so less is lost on first pass; the same logic as grapefruit juice (11/04).'},
  {t:'Rise, because cyclophilin binding is increased', correct:false, why:'Cyclophilin binding activates cyclosporine but is not changed by a 3A4 inhibitor (slide 33).'},
  {t:'Fall, because first-pass metabolism is induced', correct:false, why:'Azoles inhibit 3A4; they do not induce it (11/04: "strong 3A4 inhibitor... always have that enzyme inhibition at the front of your mind").'},
  {t:'Fall, because cyclophilin binding is blocked', correct:false, why:'Ketoconazole does not act at cyclophilin; its effect here is on CYP3A4.'}],
 teach:'Two facts combine: cyclosporine\'s low oral bioavailability is first-pass metabolism by 3A4 (slide 33), and azole antifungals are strong 3A4 inhibitors (11/04). Inhibiting the enzyme that causes the first-pass loss raises blood levels.',
 cite:XS+' slide 33; 11/04 transcript'},

{id:'XS-009', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'x-vitd-organs-select',
 tags:['exam-style','select-all','take-home'], source:'both',
 stem:'Select all that apply. No partial credit will be given. After UV light opens the B ring of 7-dehydrocholesterol in the skin, which statements describe the later steps to calcitriol?',
 options:[
  {t:'25-hydroxylation occurs in the liver', correct:true, why:'The take-home reading (Bikle, Endotext 2025): vitamin D3 is hydroxylated at carbon 25 in the liver, giving 25-hydroxyvitamin D, the circulating form.'},
  {t:'1α-hydroxylation occurs in the kidney', correct:true, why:'Slide 27 prints the one enzyme, 1α-hydroxylase; it acts in the kidney to give calcitriol, the active form (Bikle, Endotext 2025).'},
  {t:'25-hydroxylation occurs in the kidney', correct:false, why:'The organs are swapped: 25-hydroxylation is the liver step.'},
  {t:'1α-hydroxylation occurs in the liver', correct:false, why:'The organs are swapped: 1α-hydroxylation is the kidney step.'}],
 teach:'"You need to identify one, the reaction, two, the organs where these reactions occur, and three, the enzymes involved... light is going to be involved" (11/04). Skin: UV light breaks the B ring (7-dehydrocholesterol to previtamin D3, then vitamin D3). Liver: 25-hydroxylation. Kidney: 1α-hydroxylation, giving calcitriol.',
 cite:XS+' slide 27; 11/04 transcript; Bikle, Endotext 2025 (Overview)'},

{id:'XS-010', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'x-avobenzone-conclude',
 tags:['exam-style','conclude'], source:'both',
 stem:'Avobenzone absorbs the full spectrum of UVA and some UVB, and is rapidly degraded by UVA. It is correct to conclude that an avobenzone sunscreen:',
 options:[
  {t:'Loses protection with sun exposure and needs reapplying', correct:true, why:'Slide 62: "rapidly degraded by UVA"; he gave a photodegradation half-life of about 2 hours: "after every 2 hours, the person has to... reapply" (11/04).'},
  {t:'Protects against UVB only, and is stable in sunlight', correct:false, why:'Slide 62: it absorbs the full spectrum of UVA and some UVB, and is rapidly degraded by UVA.'},
  {t:'Reflects light the way the metal oxide sunblocks do', correct:false, why:'Organic sunscreens absorb light and convert it to heat; zinc oxide and titanium dioxide reflect or scatter it (slides 61–62).'},
  {t:'Is absorbed through the skin to act systemically', correct:false, why:'He gave avobenzone low skin absorption (11/04); it acts as a light absorber in the skin, not systemically.'}],
 teach:'Organic sunscreens contain chromophores that absorb UV and convert it to harmless heat (slide 62). Photodegradation means the light they absorb also degrades them, so protection falls over time.',
 cite:XS+' slides 61–62; 11/04 transcript'},

{id:'XS-011', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'x-flutamide-receptor',
 tags:['exam-style','tell'], source:'both',
 stem:'Which non-steroidal antiandrogen works by blocking the receptor testosterone binds to?',
 options:[
  {t:'Flutamide', correct:true, why:'Slide 53: the non-steroidal antiandrogen; "it prevents testosterone from binding to its receptor" (11/04).'},
  {t:'Spironolactone', correct:false, why:'The steroidal antiandrogen of slide 53, so it is excluded by "non-steroidal" (11/04).'},
  {t:'Ketoconazole', correct:false, why:'Also non-steroidal, but it is used to block the biosynthesis of testosterone, not the receptor; a strong CYP3A4 inhibitor (11/04).'},
  {t:'Ethinyl estradiol', correct:false, why:'An oral contraceptive component that suppresses sebum production by rebalancing hormones (slide 52).'}],
 teach:'"You have a steroidal approach, a non-steroidal approach, and you just differentiate them by how they work." Two ways to lower androgen action: less synthesis (spironolactone, ketoconazole) or a blocked receptor (flutamide).',
 cite:XS+' slides 52–53; 11/04 transcript'},

{id:'XS-012', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'x-apremilast-azole-assume',
 tags:['exam-style','conclude','interaction'], source:'both',
 stem:'Assume apremilast is extensively metabolized by CYP3A4. Which added drug would most likely raise its blood levels?',
 options:[
  {t:'Ketoconazole', correct:true, why:'Azoles are strong 3A4 inhibitors (11/04; ketoconazole is on slide 53; "always when you see azole antifungals, have that enzyme inhibition at the front of your mind"). For apremilast: "avoid 3A4 inhibitors" (11/04).'},
  {t:'Flutamide', correct:false, why:'A non-steroidal antiandrogen with no 3A4-inhibitor role on the slides (slide 53).'},
  {t:'Azelaic acid', correct:false, why:'A small dicarboxylic acid antibiotic (slide 54); not a 3A4 inhibitor.'},
  {t:'Tretinoin', correct:false, why:'A retinoid (slide 49); the 3A4 interaction he stressed is with azoles.'}],
 teach:'Slide 34: apremilast depends on CYP3A4 (major). The 11/04 caution: "avoid 3A4 inhibitors, 3A4 inducers". Azole antifungals are the inhibitors he stressed.',
 cite:XS+' slides 34, 53; 11/04 transcript'},

/* ================= Dr. Smith: what each drug binds, and which class ================= */
{id:'XM-001', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'drugs', concept:'x-nrb-select',
 tags:['exam-style','select-all'], source:'both',
 stem:'Select all that apply. No partial credit will be given. Which of these medications change gene expression by binding a nuclear receptor?',
 options:[
  {t:'Betamethasone valerate', correct:true, why:'A topical corticosteroid: binds the glucocorticoid receptor, which binds the GRE (PCol slides 7, 11).'},
  {t:'Tretinoin', correct:true, why:'A retinoid: binds the retinoic acid receptors RAR/RXR, which bind the RARE (PCol slides 7, 14).'},
  {t:'Calcipotriene', correct:true, why:'The vitamin D analog: binds the vitamin D receptor, which pairs with RXR-α (PCol slide 21).'},
  {t:'Crisaborole', correct:false, why:'Inhibits phosphodiesterase 4 (PCol slides 32–33), an enzyme, not a nuclear receptor.'},
  {t:'Methotrexate', correct:false, why:'A folic acid analog that inhibits dihydrofolate reductase (PCol slide 59).'},
  {t:'Secukinumab', correct:false, why:'A monoclonal antibody that binds the cytokine IL-17A (PCol slide 66).'}],
 teach:'Nuclear receptor binders on PCol slide 7: the glucocorticoid receptor (GRE), the retinoic acid receptors RAR/RXR (RARE) and the vitamin D receptor. The other classes act on enzymes, cytokines or cell-surface receptors.',
 cite:XC+' slides 7, 11, 14, 21, 32–33, 59, 66'},

{id:'XM-002', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'drugs', concept:'x-cni-select',
 tags:['exam-style','select-all'], source:'both',
 stem:'Select all that apply. No partial credit will be given. Which medications inhibit calcineurin?',
 options:[
  {t:'Tacrolimus', correct:true, why:'Binds FKBP; the complex inhibits calcineurin (PCol slide 26; T 349–353).'},
  {t:'Cyclosporine', correct:true, why:'Binds cyclophilin; the complex inhibits calcineurin (PCol slide 26; T 349–353).'},
  {t:'Pimecrolimus', correct:true, why:'A topical calcineurin inhibitor with tacrolimus, for atopic dermatitis (PCol slide 27).'},
  {t:'Abatacept', correct:false, why:'Binds CD80/86 on the antigen-presenting cell, blocking the co-stimulatory signal to CD28 (PCol slide 63).'},
  {t:'Ruxolitinib', correct:false, why:'A JAK inhibitor (PCol slides 75–76).'},
  {t:'Etanercept', correct:false, why:'A fusion protein that binds TNF-α (PCol slide 71).'}],
 teach:'Calcineurin inhibitors: cyclosporine (binds cyclophilin), tacrolimus (binds FKBP) and pimecrolimus. Less IL-2 is made, so fewer T cells proliferate (PCol slides 25–26).',
 cite:XC2+' slides 25–27, 63; '+XC3+' slides 71, 75–76'},

{id:'XM-003', skill:'class', prof:'Smith', tier:'new', topic:'pso', sub:'drugs', concept:'x-pso-classes-select',
 tags:['exam-style','select-all','list'], source:'slide',
 stem:'Select all that apply. No partial credit will be given. Which classes of medications are used to treat psoriasis?',
 options:[
  {t:'Calcineurin inhibitors', correct:true, why:'Listed on the psoriasis medication slide (Pathophys slide 28).'},
  {t:'Nuclear receptor binders', correct:true, why:'Listed on the psoriasis medication slide (Pathophys slide 28).'},
  {t:'TNF-α inhibitors', correct:true, why:'Listed on the psoriasis medication slide (Pathophys slide 28).'},
  {t:'PDE-4 inhibitors', correct:true, why:'Apremilast, a PDE-4 inhibitor, is used for plaque psoriasis (Dr. Sikazwe, slide 34); Exam 1 counted this class as right in its psoriasis list. It is not printed on Pathophys slide 28.'},
  {t:'Antibiotics', correct:false, why:'On the acne list (Pathophys slide 37), not on the psoriasis list.'},
  {t:'Antiandrogens', correct:false, why:'On the acne list (Pathophys slide 37), not on the psoriasis list.'}],
 teach:'Pathophys slide 28, psoriasis: corticosteroids, DNA synthesis inhibitors, the DHFR inhibitor, T-cell inhibitors, TNF-α inhibitors, JAK inhibitors, "IL-12 & IL-13 inhibitors" (as printed), IL-23 inhibitor, IL-17A inhibitor, nuclear receptor binders, psoralens, calcineurin inhibitors, cytotoxic agents. Slide 37, acne: keratolytics, antibiotics, nuclear receptor binders, antiandrogens.',
 note:'Exam 1 item 45 (class list for psoriasis) keyed retinoids, calcineurin inhibitors and PDE-4 inhibitors correct and keratolytics and antibiotics wrong. Slide 28 does not list PDE-4 inhibitors (apremilast is on Sikazwe slide 33 for psoriasis), and PCol slide 40 says salicylic acid 3 to 6% treats acne, dandruff and psoriasis, so keratolytics are a class-list answer that conflicts with a product-slide fact. For "which classes" questions the class-list slides decide; this draft stays on slide 28 and 37 only.',
 cite:XP+' slides 28, 37'},

{id:'XM-004', skill:'class', prof:'Smith', tier:'new', topic:'acne', sub:'drugs', concept:'x-acne-classes-select',
 tags:['exam-style','select-all','list'], source:'slide',
 stem:'Select all that apply. No partial credit will be given. Which classes of medications are used to treat acne?',
 options:[
  {t:'Antibiotics', correct:true, why:'Listed on the acne medication slide (Pathophys slide 37).'},
  {t:'Keratolytics', correct:true, why:'Listed on the acne medication slide (Pathophys slide 37).'},
  {t:'Nuclear receptor binders', correct:true, why:'Listed on the acne medication slide: the retinoids (Pathophys slide 37).'},
  {t:'Antiandrogens', correct:true, why:'Listed on the acne medication slide (Pathophys slide 37).'},
  {t:'JAK inhibitors', correct:false, why:'On the atopic dermatitis list (slide 17) and the psoriasis list (slide 28), not the acne list.'},
  {t:'TNF-α inhibitors', correct:false, why:'On the psoriasis list (slide 28), not the acne list.'}],
 teach:'Pathophys slide 37, acne: keratolytics, antibiotics, nuclear receptor binders, antiandrogens.',
 cite:XP+' slides 17, 28, 37'},

{id:'XM-005', skill:'class', prof:'Smith', tier:'new', topic:'ad', sub:'drugs', concept:'x-ad-classes-select',
 tags:['exam-style','select-all','list'], source:'slide',
 stem:'Select all that apply. No partial credit will be given. Which classes of medications are used to treat atopic dermatitis?',
 options:[
  {t:'PDE-4 inhibitors', correct:true, why:'Listed on the atopic dermatitis medication slide (Pathophys slide 17).'},
  {t:'IL-4Rα/IL-13 receptor antagonists', correct:true, why:'Listed on slide 17 (the drug is dupilumab, PCol slide 64).'},
  {t:'Corticosteroids', correct:true, why:'Listed on slide 17.'},
  {t:'Keratolytics', correct:false, why:'On the acne list (slide 37), not the atopic dermatitis list.'},
  {t:'Antiandrogens', correct:false, why:'On the acne list (slide 37), not the atopic dermatitis list.'},
  {t:'TNF-α inhibitors', correct:false, why:'On the psoriasis list (slide 28), not the atopic dermatitis list.'}],
 teach:'Pathophys slide 17, atopic dermatitis: corticosteroids, calcineurin inhibitors, PDE-4 inhibitor, IL-4Rα/IL-13 receptor antagonists, JAK inhibitor.',
 cite:XP+' slides 17, 28, 37'},

{id:'XM-006', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'x-tacrolimus-binds',
 tags:['exam-style','tell'], source:'both',
 stem:'Which protein does tacrolimus bind first, before the complex inhibits calcineurin?',
 options:[
  {t:'FKBP', correct:true, why:'Tacrolimus binds FKBP; the tacrolimus–FKBP complex inhibits calcineurin (PCol slide 26; T 349–353).'},
  {t:'Cyclophilin', correct:false, why:'Cyclosporine\'s binding protein (PCol slide 26).'},
  {t:'NFAT', correct:false, why:'The transcription factor calcineurin dephosphorylates; it is not what the drug binds (PCol slide 26).'},
  {t:'CD28', correct:false, why:'The T-cell surface receptor for the CD80/86 co-signal (PCol slide 25); abatacept blocks that signal (slide 63).'}],
 teach:'Cyclosporine binds cyclophilin and tacrolimus binds FKBP (T 349–353); each complex inhibits calcineurin, so NFAT stays phosphorylated and less IL-2 is made (PCol slides 25–26).',
 cite:XC2+' slides 25–26; T 349–353'},

{id:'XM-007', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'recs', concept:'x-rare-site',
 tags:['exam-style','tell'], source:'both',
 stem:'A retinoid-bound RAR–RXR heterodimer binds DNA at which of these?',
 options:[
  {t:'RARE', correct:true, why:'The retinoic acid response element, the DNA binding site of the retinoic acid receptors (PCol slides 7, 14).'},
  {t:'GRE', correct:false, why:'The glucocorticoid response element, the DNA site of the glucocorticoid receptor (PCol slide 7).'},
  {t:'RXR', correct:false, why:'A receptor, half of the heterodimer, not a DNA site (PCol slide 14).'},
  {t:'NF-kB', correct:false, why:'A transcription factor that works with the nuclear receptors (PCol slide 7), not the retinoid DNA site.'}],
 teach:'Receptor versus site: RAR and RXR are receptors; the RARE is the DNA site they bind (slide 14); the GRE is the glucocorticoid receptor\'s site (slide 7).',
 cite:XC+' slides 7, 14'},

{id:'XM-008', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'x-nrb-indirect-conclude',
 tags:['exam-style','conclude'], source:'both',
 stem:'A drug–receptor complex binds a transcription factor and keeps it from binding DNA. It is correct to conclude that this is the ______ route and needs ______ complex(es).',
 options:[
  {t:'indirect; one', correct:true, why:'PCol slide 5: the indirect mechanism requires only one drug–receptor complex, which binds a transcription factor (NF-kB, AP-1) and prevents it from binding DNA.'},
  {t:'direct; two', correct:false, why:'Direct action: two drug–receptor complexes bind a response element on DNA (slide 5).'},
  {t:'indirect; two', correct:false, why:'The indirect route needs one complex, not two (slide 5).'},
  {t:'direct; one', correct:false, why:'The direct route needs two complexes (slide 5).'}],
 teach:'Slide 5: direct action, two drug–receptor complexes at a response element, to promote or inhibit transcription. Indirect action, one complex on a transcription factor, which then cannot bind DNA, so transcription of inflammatory proteins falls.',
 cite:XC+' slides 5–6'},

{id:'XM-009', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'x-il17-receptor-vs-cytokine',
 tags:['exam-style','tell'], source:'both',
 stem:'Which of these drugs blocks a receptor, not the cytokine itself?',
 options:[
  {t:'Brodalumab', correct:true, why:'Binds the interleukin-17 receptor A (IL-17RA) and blocks IL-17A, IL-17F and IL-17C from binding (PCol slide 66).'},
  {t:'Secukinumab', correct:false, why:'Binds the cytokine IL-17A (PCol slide 66).'},
  {t:'Ixekizumab', correct:false, why:'A humanized antibody against the cytokine IL-17A (PCol slide 66).'},
  {t:'Ustekinumab', correct:false, why:'Binds the p40 subunit shared by the cytokines IL-12 and IL-23 (PCol slide 67).'}],
 teach:'Secukinumab and ixekizumab bind the cytokine IL-17A; brodalumab binds its receptor, IL-17RA; ustekinumab binds the p40 subunit of IL-12 and IL-23 (slides 66–67).',
 cite:XC3+' slides 66–67'},

{id:'XM-010', skill:'mech', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'x-etanercept-mechanism',
 tags:['exam-style','tell'], source:'both',
 stem:'What is the mechanism of action of etanercept?',
 options:[
  {t:'Binding TNF-α to stop it reaching receptors', correct:true, why:'A fusion protein of two p75 soluble TNF receptors and an Fc fragment; it binds TNF and makes it inactive (PCol slide 71).'},
  {t:'Blocking IL-17 receptor A on keratinocytes', correct:false, why:'Brodalumab (PCol slide 66).'},
  {t:'Inhibiting Janus kinases inside the T cell', correct:false, why:'The JAK inhibitors (PCol slides 75–76).'},
  {t:'Binding the p40 subunit of IL-12 and IL-23', correct:false, why:'Ustekinumab (PCol slide 67).'}],
 teach:'All TNF-α inhibitors bind TNF-α and prevent it from interacting with TNF receptors on inflammatory cells (slide 70). Etanercept does it as a receptor–Fc fusion protein (slide 71).',
 cite:XC3+' slides 66–67, 70–71, 75–76'}
);
