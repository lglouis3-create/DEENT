/* ==========================================================================
   Exam-style practice: Dr. Smith (Lectures 1–3, sun exposure) and Dr. Sikazwe
   (Lectures 3–4, assigned pages only), added 2026-11-12.
   Built to STYLE.md "How her exam questions are built (Louis after Exam 1,
   2026-11-10)" and to Louis's rule of 2026-11-12 (root CLAUDE.md "Purpose of
   the questions", "Recalled exam questions"): short options; each wrong option
   a true lecture fact with one key detail wrong (right molecule, wrong step;
   right drug, wrong target; a neighbouring drug's property); the key neither
   the longest option nor the only one echoing the stem. Every item restates a
   fact the bank already asks, from a harder angle, and names that item in
   `dupOf` so the two never share a paper.
   Drafts: session scratchpad exam2/smith_style_drafts.md and
   sikazwe_style_drafts.md, after review (items marked DROP left out; Smith 19
   metronidazole and 22 isotretinoin left out: their key is "mechanism not
   known", and drugs with no known target do not come up).
   Sources: Skin-PCol-Students-2026.pdf (PDF page = slide; T lines: 10/29 for
   slides 1–15, 10/30 for 16–42, 11/03 for 43–76), DEENT_Sun_Exposure_2026.pdf
   (audio mm:ss of her recording), f26-DEENT-DPAW-mc.pdf (file page; T n = line
   of the 11/03 transcript, T@n = byte offset in the 11/04 transcript; VitD L =
   line of the assigned vitamin D reading, Bikle, Endotext).
   Kept out: the held conflicts in reviews/OPEN_QUESTIONS.md (MHC class in
   signal 1, the macrolide step, the VDR binding site, upadacitinib and the
   ruxolitinib route on Dr. Smith's side, dapsone's antibacterial action in
   acne, dupilumab in psoriasis, tofacitinib's indication; 11β-HSD
   reversibility, bemotrizinol absorption magnitude), her exclusions (the
   RAR/RXR selectivity table, retinoid structures, the adenylyl cyclase and
   G-protein detail of slide 32, brand names) and his unassigned pages.
   ========================================================================== */
const XQ_PC1 = 'Lecture 1 (Skin-PCol-Students-2026.pdf)';
const XQ_PC2 = 'Lecture 2 (Skin-PCol-Students-2026.pdf)';
const XQ_PC3 = 'Lecture 3 (Skin-PCol-Students-2026.pdf)';
const XQ_SUN = 'Sun exposure lecture (DEENT_Sun_Exposure_2026.pdf)';
const XQ_S3  = 'Lecture 3 (f26-DEENT-DPAW-mc.pdf)';
const XQ_S4  = 'Lecture 4 (f26-DEENT-DPAW-mc.pdf)';

QUESTIONS.push(
/* =========================== Dr. Smith ==================================== */
/* ---- PDE-4 inhibitors (slides 32–34) ------------------------------------- */
{id:'SX-001', skill:'mech', prof:'Smith', tier:'new', topic:'l2-pde', sub:'mech', concept:'x-cris-camp-kept',
 tags:['exam-style'], source:'both', dupOf:'L2-081',
 stem:'A 6-year-old with mild atopic dermatitis starts crisaborole 2% ointment. How does it calm the skin?',
 options:[
  {t:'cAMP is not broken down in inflammatory cells', correct:true, why:'Slides 32–33: crisaborole inhibits PDE4, so cAMP is not broken down; when cellular cAMP is increased, inflammatory cells are inhibited (10/30 T 430–450).'},
  {t:'It blocks PDE4, found mainly in keratinocytes', correct:false, why:'PDE4 is the right target, but slide 32 makes it the predominant isoform in inflammatory cells (mast cells, eosinophils, neutrophils, T lymphocytes, macrophages), not keratinocytes (T 444–446).'},
  {t:'It lowers cAMP so mast cells stop releasing mediators', correct:false, why:'cAMP and mast cells are both on slide 32, but inhibiting PDE4 raises cAMP: "When cellular cAMP is increased ... inhibition of inflammatory cells" (T 433–448).'},
  {t:'It inhibits the enzyme that makes cAMP', correct:false, why:'The drug does act on a cAMP enzyme, but phosphodiesterase breaks cAMP down to 5\'-AMP (slide 32 caption; T 437–439); it does not make cAMP.'}],
 teach:'Crisaborole (2% ointment, age 2 and older, slide 33) inhibits PDE4, the isoform that predominates in inflammatory cells. PDE4 breaks cAMP down to 5\'-AMP; with PDE4 blocked, cAMP rises and the inflammatory cells are inhibited (slide 32).',
 cite:XQ_PC2+' slides 32–33; T 430–450'},

{id:'SX-002', skill:'class', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'x-apr-same-target',
 tags:['exam-style'], source:'both', dupOf:'L2-086',
 stem:'Which drug for psoriasis, taken by mouth, acts on the same target as crisaborole?',
 options:[
  {t:'Cyclosporine', correct:false, why:'Oral and used for psoriasis (slide 29), but its target is calcineurin, reached through cyclophilin (slide 26).'},
  {t:'Acitretin', correct:false, why:'Oral and used for psoriasis, especially pustular (slide 20), but it is a retinoid acting at RAR/RXR (slide 14).'},
  {t:'Methotrexate', correct:false, why:'A psoriasis drug given as tablets (slides 59, 61; 11/03 T 247–260), but it inhibits dihydrofolate reductase (slide 59).'},
  {t:'Apremilast', correct:true, why:'Slide 34: apremilast is the oral PDE-4 inhibitor for psoriasis, the same target as crisaborole (10/30 T 464–466).'}],
 teach:'Two PDE-4 inhibitors: crisaborole, topical, for atopic dermatitis (slide 33), and apremilast, oral, for psoriasis (slide 34). Both raise cAMP in inflammatory cells (slide 32).',
 cite:XQ_PC2+' slides 14, 20, 26, 29, 32–34; T 464–466'},

/* ---- Calcineurin inhibitors (slides 24–29) ------------------------------- */
{id:'SX-003', skill:'mech', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'x-pime-less-il2',
 tags:['exam-style'], source:'both', dupOf:'L2-116',
 stem:'Topical pimecrolimus relieves atopic dermatitis. Which describes its action?',
 options:[
  {t:'It raises cAMP inside T cells and mast cells of the skin', correct:false, why:'T lymphocytes and mast cells are the right cells (slide 32), but raising cAMP is the action of crisaborole, the other topical AD agent; pimecrolimus inhibits calcineurin (slides 24, 27).'},
  {t:'Less IL-2, so fewer T cells and mast cells activate', correct:true, why:'Slides 24, 27: pimecrolimus inhibits calcineurin, so less IL-2 is made, and it inhibits "the activation of key cells involved in AD, including T cells and mast cells" (10/30 T 360–365).'},
  {t:'It blocks the IL-2 receptor on T cells', correct:false, why:'IL-2 is the right molecule, but calcineurin inhibitors cut IL-2 production after signals 1 and 2; IL-2 binding CD25 is signal 3 (slide 25; 10/30 T 281–290).'},
  {t:'It suppresses immunity mainly after reaching the bloodstream', correct:false, why:'It is an immunosuppressant (slide 24), but slide 27: "Pimecrolimus may preferentially distribute to the skin as opposed to the systemic circulation" (T 367–373).'}],
 teach:'Pimecrolimus is a topical calcineurin inhibitor: less IL-2, less T-cell and mast cell activation (slides 24, 27). It tends to stay in the skin rather than the systemic circulation (slide 27).',
 cite:XQ_PC2+' slides 24–27, 32; T 281–290, 360–373'},

{id:'SX-004', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'x-csa-nfat-step',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L2-057',
 stem:'Oral cyclosporine is used for psoriasis. In the T cell, which step does it stop?',
 options:[
  {t:'Antigen on the APC reaching the T-cell receptor', correct:false, why:'A true step, signal 1 (slide 25; 10/30 T 220–241), but calcineurin inhibitors work in the cascade after signals 1 and 2 (T 281–290).'},
  {t:'CD80/86 on the APC binding CD28', correct:false, why:'A true step, signal 2 (slide 25), the one abatacept blocks (slide 63); calcineurin inhibitors act after it (T 281–290).'},
  {t:'Calcineurin removing the phosphate from NFAT', correct:true, why:'Slide 26: calcineurin dephosphorylates NFAT so it can enter the nucleus and switch on IL-2; cyclosporine with cyclophilin inhibits calcineurin (10/30 T 323–328, 343–345).'},
  {t:'IL-2 binding CD25 to start proliferation', correct:false, why:'A true step, signal 3 (slide 25), but it follows IL-2 production, which the drug lowers.'}],
 teach:'In the activated T cell, calcineurin "removes that phosphate" from NFAT; dephosphorylated NFAT moves into the nucleus and IL-2 is transcribed (slide 26, Golan Fig 44-5). Cyclosporine (with cyclophilin) and tacrolimus (with FKBP) inhibit calcineurin, so NFAT stays phosphorylated and IL-2 falls. Her slip at T 322 ("phosphorylates") is resolved to the slide.',
 cite:XQ_PC2+' slides 25–26, 29, 63; T 220–241, 281–290, 323–345'},

/* ---- Biologics and JAK inhibitors (slides 63–76) ------------------------- */
{id:'SX-005', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'dup', concept:'x-dup-ige-recruit',
 tags:['exam-style'], source:'both', dupOf:'L3-066',
 stem:'How does dupilumab help moderate-to-severe atopic dermatitis?',
 options:[
  {t:'It binds the IL-4 and IL-13 cytokines in the skin', correct:false, why:'IL-4 and IL-13 signaling is what falls, but dupilumab binds the receptor subunit, not the cytokines (slide 64; 11/03 T 365–374).'},
  {t:'It binds IL-4Rα, but IL-13 can still signal normally', correct:false, why:'IL-4Rα is right, but it is shared by the IL-4 and IL-13 receptor complexes, so IL-13 signaling through the type II receptor is blocked too (slide 64; T 369–374, 392–395).'},
  {t:'It binds IL-4Rα to block the TH1 cytokines', correct:false, why:'IL-4Rα is right, but IL-12 and interferon-gamma are the TH1 cytokines (Skin-Pathophys slide 16); IL-4 and IL-13 are TH2 cytokines that drive IgE (slide 64).'},
  {t:'It blocks IL-4Rα, so less IgE and cell recruitment', correct:true, why:'Slide 64: "By blocking IL-4ra, get decreased release of proinflammatory cytokines, chemokines, and IgE"; IL-4 and IL-13 "promote IgE synthesis and inflammatory cell recruitment" (T 374–384).'}],
 teach:'Dupilumab binds IL-4Rα, the subunit shared by the IL-4 and IL-13 receptors, so both cytokines lose their signal. IL-4 and IL-13 promote IgE synthesis and inflammatory cell recruitment; blocking them lowers proinflammatory cytokines, chemokines and IgE (slide 64).',
 cite:XQ_PC3+' slide 64; T 365–395'},

{id:'SX-006', skill:'mech', prof:'Smith', tier:'new', topic:'l3-jak', sub:'drugs', concept:'x-tofa-inside-cell',
 tags:['exam-style'], source:'both', dupOf:'L3-103',
 stem:'Tofacitinib is a JAK inhibitor. How does it reach and block its target?',
 options:[
  {t:'It enters the cell and inhibits Janus kinase', correct:true, why:'Slides 75–76: a small molecule "able to get inside the cell" that inhibits Janus kinase (11/03 T 569–573).'},
  {t:'As an antibody, it binds JAK on the cell surface', correct:false, why:'Most biologics in this lecture are antibodies, but the JAK inhibitors are "small molecule inhibitors ... They\'re not a monoclonal antibody" (11/03 T 570–573; slide 76).'},
  {t:'It binds the cytokine receptor in place of the cytokine', correct:false, why:'JAK sits at the cytokine receptor, but it is the associated kinase, not the cytokine-binding site (T 564–565).'},
  {t:'It enters the nucleus and blocks cytokine gene transcription', correct:false, why:'The end result is less cytokine transcription (T 562–569), but the drug inhibits the kinase upstream: "inhibits the production of inflammatory cytokines through the inhibition of janus kinase" (slides 75–76).'}],
 teach:'Tofacitinib, ruxolitinib and upadacitinib are small molecules, not monoclonal antibodies, so they get inside the cell and inhibit Janus kinase, which lowers inflammatory cytokine production (slides 75–76).',
 cite:XQ_PC3+' slides 75–76; T 562–573'},

{id:'SX-007', skill:'mech', prof:'Smith', tier:'new', topic:'l3-jak', sub:'mech', concept:'x-jak-phosphorylates',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L3-102',
 stem:'Cytokine receptors in inflammatory cells have no kinase activity of their own. What does Janus kinase do in this pathway?',
 options:[
  {t:'It binds the cytokine as the receptor\'s outer portion', correct:false, why:'The right molecule in the wrong part: the receptor binds the cytokine; JAK is the associated kinase (11/03 T 564–565).'},
  {t:'It dephosphorylates NFAT so IL-2 is transcribed', correct:false, why:'A true step from the calcineurin pathway (Lecture 2, slide 26; 10/30 T 323–328), not the JAK pathway.'},
  {t:'It phosphorylates the receptor to signal the nucleus', correct:true, why:'Slide 75: the receptor has no kinase activity; the associated Janus kinase phosphorylates it and the signal goes to the nucleus (11/03 T 562–569).'},
  {t:'It removes phosphate from the receptor', correct:false, why:'The right molecule with the action reversed: Janus kinase adds phosphate to the receptor (T 562–569).'}],
 teach:'A cytokine binds its receptor; the receptor itself has no kinase activity, so the associated Janus kinase phosphorylates it and the signal reaches the nucleus, where inflammatory cytokine genes are transcribed. JAK inhibitors stop that kinase step (slide 75).',
 cite:XQ_PC3+' slide 75; T 562–569'},

/* ---- Keratolytics (slides 36–40) ----------------------------------------- */
{id:'SX-008', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'x-bpo-two-actions',
 tags:['exam-style'], source:'both', dupOf:'L2-091',
 stem:'What is the postulated mechanism of benzoyl peroxide in acne?',
 options:[
  {t:'Peeling and comedolysis, with no effect on P. acnes', correct:false, why:'Peeling and comedolytic effects are half of it, but slide 36 also lists antimicrobial activity against P. acnes.'},
  {t:'Action against P. acnes, plus peeling of comedones', correct:true, why:'Slide 36: "antimicrobial activity against P acnes; peeling and comedolytic effects" (10/30 T 486–489).'},
  {t:'Action against P. acnes after conversion to hydrogen sulfide', correct:false, why:'It is converted to an active compound, but benzoyl peroxide becomes benzoic acid (slide 36; T 497–500); hydrogen sulfide is formed from sulfur (slide 38).'},
  {t:'Peeling driven by its oxidant, bleaching action', correct:false, why:'It is an oxidant (slide 37), but that property explains bleaching of hair and fabrics (T 510–515), not the peeling.'}],
 teach:'Benzoyl peroxide penetrates the stratum corneum and follicles and is converted to benzoic acid; its postulated mechanism has two parts, antimicrobial activity against P. acnes and peeling and comedolytic effects (slide 36). As an oxidant it bleaches hair and fabrics (slide 37).',
 cite:XQ_PC2+' slides 36–38; T 486–515'},

{id:'SX-009', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'x-sulfur-h2s-inflames',
 tags:['exam-style'], source:'both', dupOf:'L2-098',
 stem:'Topical sulfur is used for acne. What happens to it in the keratinocytes?',
 options:[
  {t:'It forms hydrogen sulfide, which kills P. acnes outright', correct:false, why:'Hydrogen sulfide is right, but sulfur is bacteriostatic, not bactericidal (slide 38; 10/30 T 515–518), and hydrogen sulfide acts by inflaming keratinocytes.'},
  {t:'It becomes benzoic acid, which loosens keratinocytes', correct:false, why:'Loosening keratinocytes is a keratolytic effect, but benzoic acid is the active form of benzoyl peroxide (slide 36).'},
  {t:'It forms hydrogen sulfide, which calms inflammation', correct:false, why:'Hydrogen sulfide is right, but the direction is reversed: it "causes inflammation which promotes peeling and unblocking of plugs" (slide 38; T 518–524).'},
  {t:'Hydrogen sulfide forms and inflames, driving peeling', correct:true, why:'Slide 38: sulfur is converted to hydrogen sulfide in keratinocytes, which causes inflammation that promotes peeling and unblocking of plugs (T 518–524).'}],
 teach:'Sulfur is bacteriostatic against P. acnes: it prevents growth rather than killing (slide 38). In keratinocytes it forms hydrogen sulfide, which causes inflammation, and that inflammation promotes peeling and unblocks the plugs (slide 38).',
 cite:XQ_PC2+' slides 36, 38; T 515–524'},

{id:'SX-010', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'x-salicylic-proteins',
 tags:['exam-style'], source:'both', dupOf:'L2-101',
 stem:'A patient uses 3–6% salicylic acid for acne. How is it thought to work?',
 options:[
  {t:'It loosens proteins holding the stratum corneum', correct:true, why:'Slide 39: salicylic acid "may solubilize cell surface proteins that keep the stratum corneum intact" (10/30 T 534–545).'},
  {t:'It dissolves the stratum corneum to cause deep peeling', correct:false, why:'It does act on the stratum corneum, but the goal is mild peeling (T 541–545); above 6% it may cause skin damage (slide 40; T 545–548).'},
  {t:'It is converted to benzoic acid, the active form', correct:false, why:'A keratolytic converted to an active form is benzoyl peroxide, which becomes benzoic acid (slide 36; T 497–500).'},
  {t:'It stops P. acnes from growing', correct:false, why:'Bacteriostatic action is sulfur\'s (slide 38, "doesn\'t kill off bacteria, but prevent it from growing"); slide 39 gives salicylic acid no antibacterial action.'}],
 teach:'Salicylic acid is a keratolytic: it may solubilize the cell surface proteins that keep the stratum corneum intact, giving mild peeling (slide 39). For acne, dandruff and psoriasis, products of 3 to 6% are used; above 6% may damage normal skin (slide 40).',
 cite:XQ_PC2+' slides 36, 38–40; T 497–500, 534–548'},

/* ---- Ribosomal antibiotics (slides 42–47) -------------------------------- */
{id:'SX-011', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'tet', concept:'x-doxy-30s-static',
 tags:['exam-style'], source:'both', dupOf:'L3-002',
 stem:'A patient asks how doxycycline helps acne if it does not kill the bacteria. Which answer fits?',
 options:[
  {t:'It binds the 50S subunit and stops bacterial growth', correct:false, why:'Bacteriostatic is right, but 50S is the subunit of clindamycin and the macrolides (slides 46–47); tetracyclines bind 30S (slide 43).'},
  {t:'It binds the 30S subunit of human ribosomes in follicles', correct:false, why:'30S is right, but it binds the bacterial ribosome (slide 43).'},
  {t:'It binds 30S and keeps bacteria from multiplying', correct:true, why:'Slide 43: a broad-spectrum bacteriostatic antibiotic that binds the 30S subunit, "preventing them from spreading" (11/03 T 27–36).'},
  {t:'It binds the 30S subunit reversibly, like trimethoprim', correct:false, why:'30S is right, but slide 43 says "irreversible binding to 30S"; "reversibly" describes trimethoprim at DHFR (slide 48).'}],
 teach:'The tetracyclines (doxycycline, minocycline) bind the 30S subunit of the bacterial ribosome irreversibly and block protein synthesis. They are bacteriostatic: they keep P. acnes from multiplying rather than killing it (slide 43).',
 cite:XQ_PC3+' slides 43, 46–48; T 27–36'},

{id:'SX-012', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'x-ribo-step-tetra',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L2-111',
 stem:'Minocycline acts on the 70S bacterial ribosome. Which step of protein synthesis does it block?',
 options:[
  {t:'Linking the new amino acid onto the growing chain', correct:false, why:'A true step, peptide bond formation (step 2 on slide 42, the chloramphenicol step), not the tetracycline step.'},
  {t:'Entry of the charged tRNA at the acceptor site', correct:true, why:'Slide 42, step 1: "The tetracyclines (T) bind to the 30S subunit and prevent binding of the incoming charged tRNA unit" (10/30 T 600–607).'},
  {t:'Shifting the new chain to the peptidyl site', correct:false, why:'A true step, translocation (step 4 on slide 42), the step clindamycin blocks (Lecture 3, slide 46).'},
  {t:'Release of the uncharged tRNA from the donor site', correct:false, why:'A true step (step 3 on slide 42), but no acne drug is named for it.'}],
 teach:'Slide 42 draws protein synthesis on the 70S ribosome in four steps: charged tRNA enters the acceptor site, the peptide bond forms, the uncharged tRNA leaves, and the chain translocates. The tetracyclines bind 30S and block step 1, the entry of the charged tRNA.',
 cite:XQ_PC2+' slide 42; T 600–607'},

{id:'SX-013', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abx', sub:'clinda', concept:'x-clinda-50s-transloc',
 tags:['exam-style'], source:'both', dupOf:'L3-011',
 stem:'Which describes the mechanism of clindamycin for acne?',
 options:[
  {t:'It attaches to 30S, so the chain cannot shift', correct:false, why:'"The chain cannot shift" is translocation, the right step, but the subunit is wrong: clindamycin binds 50S (slide 46); 30S is the tetracyclines (slide 43).'},
  {t:'It blocks charged tRNA at the acceptor site via 50S', correct:false, why:'50S is right, but blocking the charged tRNA at the acceptor site is the tetracycline step (Lecture 2, slide 42; slide 43).'},
  {t:'It binds 50S and is bactericidal against P. acnes', correct:false, why:'50S is right, but slide 46 lists "Pharmacologic effects: Bacteriostatic".'},
  {t:'It attaches to 50S and prevents translocation', correct:true, why:'Slide 46: clindamycin binds the 50S subunit and prevents translocation (11/03 T 53–56; her "binding together of the amino acids" at T 54–55 is resolved to the slide).'}],
 teach:'Clindamycin binds the 50S ribosomal subunit and prevents translocation; it is bacteriostatic, and resistance is a problem now (slide 46).',
 cite:XQ_PC3+' slides 43, 46; T 53–56'},

{id:'SX-014', skill:'tell', prof:'Smith', tier:'new', topic:'l3-abx', sub:'macro', concept:'x-ery-clinda-share',
 tags:['exam-style'], source:'both', dupOf:'L3H-006',
 stem:'Erythromycin and clindamycin are both topical acne antibiotics. Which feature do they share?',
 options:[
  {t:'Both attach to the 50S ribosomal subunit', correct:true, why:'Slides 46–47: clindamycin and the macrolides (erythromycin) bind the 50S subunit (11/03 T 53–55, 66–67).'},
  {t:'Both bind 30S, as doxycycline does', correct:false, why:'All three are ribosomal protein synthesis inhibitors (Lecture 2, slide 42), but 30S is the tetracyclines\' subunit (slides 43, 46–47).'},
  {t:'Both are bactericidal at the doses used in acne', correct:false, why:'Both bind the ribosome, but both slides say bacteriostatic (slides 46, 47).'},
  {t:'Both meet less P. acnes resistance than tetracyclines', correct:false, why:'Resistance is on both slides ("Resistance is a problem now", slides 46–47), but the comparison is reversed: "Less resistance in P. acnes with the tetracyclines than the macrolides and clindamycin" (slide 45).'}],
 teach:'Clindamycin and the macrolides bind 50S and are bacteriostatic; the tetracyclines bind 30S. P. acnes shows less resistance to the tetracyclines than to the macrolides and clindamycin (slides 43, 45–47).',
 cite:XQ_PC3+' slides 43, 45–47; T 53–55, 66–67'},

/* ---- Folate pathway: TMP/SMX, dapsone (slides 48–50) --------------------- */
{id:'SX-015', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'tmpsmx', concept:'x-smx-paba-step',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L3-020',
 stem:'Trimethoprim/sulfamethoxazole puts two blocks in bacterial folate synthesis. Which step does sulfamethoxazole block?',
 options:[
  {t:'Reduction of dihydrofolic acid to tetrahydrofolic acid by DHFR', correct:false, why:'A true step on the wrong component: reducing dihydrofolic acid by DHFR is blocked by trimethoprim (slide 48; 11/03 T 77–85).'},
  {t:'Use of tetrahydrofolate to make purines', correct:false, why:'A true later step (folic acid is needed for "production of purines", slide 49 note; T 84–89), but neither component blocks it directly.'},
  {t:'Use of PABA to make dihydrofolic acid', correct:true, why:'Slide 48: sulfamethoxazole "inhibits bacterial synthesis of dihydrofolic acid by competing with paraaminobenzoic acid (PABA)" (T 75–83).'},
  {t:'Human DHFR in dividing keratinocytes', correct:false, why:'A true step for another drug and organism: methotrexate inhibits DHFR in the patient (slide 59; T 213–215).'}],
 teach:'Two blocks in sequence: sulfamethoxazole competes with PABA and stops dihydrofolic acid synthesis; trimethoprim inhibits DHFR, the reduction of dihydrofolic acid to tetrahydrofolic acid. Folate is needed for purines (slides 48–49).',
 cite:XQ_PC3+' slides 48–49, 59; T 75–89, 213–215'},

{id:'SX-016', skill:'mech', prof:'Smith', tier:'new', topic:'l3-fol', sub:'dap', concept:'x-dapsone-like-smx',
 tags:['exam-style'], source:'both', dupOf:'L3-023',
 stem:'In leprosy, dapsone works the way which drug does?',
 options:[
  {t:'Trimethoprim, by inhibiting DHFR', correct:false, why:'A folate-pathway antibacterial on the slide before (slide 48), but the wrong drug and step.'},
  {t:'Sulfamethoxazole, by competing with PABA', correct:true, why:'Slide 50: in leprosy the "mechanism of action is similar to that of the sulfonamides: competitive antagonists of paraaminobenzoic acid (PABA)" (11/03 T 90–94).'},
  {t:'Methotrexate, as a folic acid analog', correct:false, why:'A folate-pathway drug (slide 59), but methotrexate inhibits DHFR in the patient.'},
  {t:'Metronidazole, by acting on neutrophil function', correct:false, why:'Neutrophils are a proposed site for both dapsone in acne and metronidazole (slides 50, 51), but in leprosy dapsone acts like the sulfonamides (slide 50).'}],
 teach:'Dapsone is used for leprosy and acne. In leprosy it acts like the sulfonamides, as a competitive antagonist of PABA in bacterial folate synthesis (slide 50).',
 cite:XQ_PC3+' slides 48, 50–51, 59; T 90–94'},

/* ---- Retinoids, vitamin D analog (slides 14, 18, 21) --------------------- */
{id:'SX-017', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'x-tret-rare',
 tags:['exam-style'], source:'both', dupOf:'L1-105',
 stem:'How does tretinoin change gene expression in acne?',
 options:[
  {t:'Its RAR–RXR heterodimer binds the RARE in the nucleus', correct:true, why:'Slide 14: the RAR–RXR heterodimer "moves into nucleus and binds to DNA" on the retinoic acid response element (RARE; slide 7; 10/29 T 895–904).'},
  {t:'Its RAR–RXR heterodimer stays in the cytoplasm to work there', correct:false, why:'The right dimer, but slide 14: the heterodimer "moves into nucleus and binds to DNA".'},
  {t:'Its retinoid receptor complex binds the GRE', correct:false, why:'A nuclear receptor response element, but the GRE is the glucocorticoid response element (slide 7); retinoids use the RARE.'},
  {t:'Its receptor pairs with the vitamin D receptor on DNA', correct:false, why:'A nuclear receptor heterodimer, but pairing with the VDR is not taught: the VDR pairs with RXR-α in calcipotriene\'s action (Lecture 2, slide 21); retinoids form RAR–RXR (slide 14).'}],
 teach:'Retinoids bind the retinoic acid receptors; the RAR–RXR heterodimer moves into the nucleus and binds DNA at the RARE, changing gene expression (slides 7, 14).',
 cite:XQ_PC1+' slides 7, 14; T 895–904'},

{id:'SX-018', skill:'class', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'x-taz-topical-pso',
 tags:['exam-style'], source:'both', dupOf:'L2-020',
 stem:'Which topical drug for psoriasis works through the retinoic acid receptors (RAR/RXR)?',
 options:[
  {t:'Coal tar', correct:false, why:'A topical for psoriasis (Lecture 3, slide 53), but it crosslinks DNA.'},
  {t:'Acitretin', correct:false, why:'A retinoid for psoriasis, but it is oral (slide 20, "Oral Retinoids").'},
  {t:'Adapalene', correct:false, why:'A topical retinoid at RAR/RXR, but it is used for mild to moderate acne (slide 18).'},
  {t:'Tazarotene', correct:true, why:'Slide 18: topical tazarotene is used for "Psoriasis, mild to moderately severe facial acne and wrinkles"; retinoids act at RAR/RXR (Lecture 1, slide 14; 10/30 T 75–81).'}],
 teach:'Tazarotene is the topical retinoid used for psoriasis as well as acne and wrinkles (slide 18). Acitretin is the oral retinoid for psoriasis (slide 20); adapalene is for acne (slide 18).',
 cite:XQ_PC2+' slides 18, 20; T 75–81'},

{id:'SX-019', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'x-calcipot-effect',
 tags:['exam-style'], source:'both', dupOf:'L2-041',
 stem:'How does calcipotriene improve psoriatic plaques?',
 options:[
  {t:'It slows keratinocyte growth and aids differentiation', correct:true, why:'Slide 21: calcipotriene "Inhibits proliferation and promotes keratinocyte differentiation" (10/30 T 142–152).'},
  {t:'It speeds keratinocyte turnover so the plaques shed faster', correct:false, why:'Faster turnover is how retinoids act in acne (Lecture 1, slide 15); calcipotriene inhibits proliferation (slide 21).'},
  {t:'It slows keratinocyte growth by blocking DHFR', correct:false, why:'Slower growth is right, but DHFR inhibition is methotrexate (Lecture 3, slide 59).'},
  {t:'It raises cytokine release to clear plaques', correct:false, why:'It changes cytokine release, but the direction is reversed: "Decreases inflammation by decreasing inflammatory cytokine release" (slide 21).'}],
 teach:'Calcipotriene, the vitamin D analog, binds the VDR; in psoriatic skin it inhibits keratinocyte proliferation, promotes their differentiation and decreases inflammatory cytokine release (slide 21).',
 cite:XQ_PC2+' slide 21; T 142–152'},

{id:'SX-020', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'x-vdr-partner',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L2-040',
 stem:'Once calcipotriene binds the vitamin D receptor, with what does that complex pair?',
 options:[
  {t:'RAR, as in retinoid signaling', correct:false, why:'A true partner from the retinoid pathway (Lecture 1, slide 14), placed on the VDR.'},
  {t:'RXR-α', correct:true, why:'Slide 21: "The VDR-drug complex heterodimerizes with RXR-α" (10/30 T 135–141).'},
  {t:'A second VDR–drug complex', correct:false, why:'Two complexes is the pattern of the glucocorticoid direct mechanism (Lecture 1, slide 5); the VDR complex heterodimerizes with RXR-α (slide 21).'},
  {t:'NF-kB, holding it off the DNA', correct:false, why:'A true step from the glucocorticoid indirect mechanism (Lecture 1, slides 5–6), placed on the VDR.'}],
 teach:'Calcipotriene binds the vitamin D receptor; the VDR–drug complex heterodimerizes with RXR-α and changes gene expression in keratinocytes (slide 21).',
 cite:XQ_PC2+' slide 21; T 135–141'},

/* ---- Antipsoriatic cytotoxic agents, methotrexate (slides 53–59) --------- */
{id:'SX-021', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'coal', concept:'x-coaltar-crosslink',
 tags:['exam-style'], source:'both', dupOf:'L3-031',
 stem:'What is the proposed mechanism of coal tar in psoriasis?',
 options:[
  {t:'It binds DNA to speed epidermal turnover', correct:false, why:'DNA is right, but the direction is reversed: cytotoxic agents act by "decreasing the rate of epidermal cell turnover" (slide 53).'},
  {t:'Its phenolic constituents block keratinocyte division', correct:false, why:'Phenolics are its named constituents, but they are antipruritic (slide 53; 11/03 T 139–145).'},
  {t:'It crosslinks DNA to slow cell division', correct:true, why:'Slide 53: coal tar "Cross links with DNA to inhibit cell division for antimitotic action but mechanism not fully known" (T 129–139).'},
  {t:'It acts on keratinocyte mitochondria to cut mitosis', correct:false, why:'An antiproliferative action of a neighbouring cytotoxic agent: that is anthralin (slide 55).'}],
 teach:'The antipsoriatic cytotoxic agents decrease the rate of epidermal cell turnover. Coal tar crosslinks DNA to inhibit cell division (mechanism not fully known); its phenolic constituents are antipruritic (slide 53).',
 cite:XQ_PC3+' slides 53, 55; T 129–145'},

{id:'SX-022', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cyto', sub:'anth', concept:'x-anth-mito-tcell',
 tags:['exam-style'], source:'both', dupOf:'L3-036',
 stem:'Anthralin is used for thick psoriatic plaques. Which actions are proposed for it?',
 options:[
  {t:'Mitochondrial effects and less T-cell activation', correct:true, why:'Slide 55: anthralin acts on mitochondria, suppressing hyperplastic keratinocyte growth, and "prevents T-lymphocyte activation" (11/03 T 160–166).'},
  {t:'DNA intercalation that slows keratinocyte division', correct:false, why:'An antiproliferative action on keratinocyte DNA, but DNA intercalation is methoxsalen\'s (sun exposure lecture, slide 3); anthralin acts on mitochondria (slide 55).'},
  {t:'It acts on mitochondria and kills T cells directly', correct:false, why:'The mitochondrial part is right, but anthralin "prevents T-lymphocyte activation" (slide 55); being cytotoxic to T cells is methoxsalen\'s effect (sun exposure lecture, slide 3).'},
  {t:'DHFR inhibition in hyperplastic keratinocytes', correct:false, why:'It does suppress hyperplastic keratinocyte growth (slide 55), but DHFR inhibition is methotrexate (slide 59).'}],
 teach:'Anthralin\'s proposed actions: effects on mitochondria that suppress hyperplastic keratinocyte growth, and prevention of T-lymphocyte activation (slide 55).',
 cite:XQ_PC3+' slides 55, 59; T 160–166'},

{id:'SX-023', skill:'mech', prof:'Smith', tier:'new', topic:'l3-mtx', sub:'mech', concept:'x-mtx-result',
 tags:['exam-style'], source:'both', dupOf:'L3-045',
 stem:'Methotrexate inhibits dihydrofolate reductase. In psoriasis, what is the result?',
 options:[
  {t:'Bacteria in the plaques cannot make tetrahydrofolate', correct:false, why:'The DHFR step is right, but the organism is wrong: "This is not a medication that\'s used to treat a microbe. This is for treating psoriasis in the body" (11/03 T 213–215); bacterial DHFR is trimethoprim (slide 48).'},
  {t:'Keratinocytes can no longer use PABA to make dihydrofolate', correct:false, why:'A folate-pathway step, but PABA competition is sulfamethoxazole in bacteria (slide 48).'},
  {t:'Folic acid itself is bound, so keratinocytes cannot absorb it', correct:false, why:'It is a folic acid analog, but it looks like folic acid and binds the enzyme (T 217–219; slide 59).'},
  {t:'Fewer purines; keratinocyte growth and T-cell numbers fall', correct:true, why:'Slide 59: methotrexate stops tetrahydrofolate synthesis, and "THF needed for de novo synthesis purine nucleotides"; it "Reduces keratinocyte hyperproliferation; Reduces the number of T-cells" (T 215–228).'}],
 teach:'Methotrexate, a folic acid analog, inhibits dihydrofolate reductase in the patient. Without tetrahydrofolate, de novo purine synthesis falls, so keratinocyte hyperproliferation and the number of T cells are reduced (slide 59).',
 cite:XQ_PC3+' slides 48, 59; T 213–228'},

/* ---- Abatacept, TNF, IL-12/23, IL-23, IL-17 (slides 63–74) ---------------- */
{id:'SX-024', skill:'mech', prof:'Smith', tier:'new', topic:'l3-abat', sub:'drug', concept:'x-abat-signal1-left',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L3-062',
 stem:'A T cell meets an antigen-presenting cell in a patient taking abatacept. Which step can still take place?',
 options:[
  {t:'CD28 on the T cell binding CD80/86 on the APC surface', correct:false, why:'A true step (positive signal 2, slides 25, 63), but it is the very step abatacept blocks: CD80/86 is occupied, so CD28 cannot bind (11/03 T 316–328).'},
  {t:'The APC presenting antigen to the T-cell receptor', correct:true, why:'Slide 63: abatacept "Blocks second signal needed for T-cell activation"; signal 1, antigen presented to the T-cell receptor, still occurs (T 355–357).'},
  {t:'The T cell making IL-2', correct:false, why:'A true step that is lost: without signal 2 activation stops and no IL-2 is made (11/03 T 339–344).'},
  {t:'IL-2 binding CD25 to start proliferation', correct:false, why:'A true step (signal 3, Lecture 2, slide 25) that is lost for the same reason: no IL-2 is made.'}],
 teach:'Abatacept binds CD80/86 on the APC, so CD28 on the T cell cannot bind and the positive second signal is blocked (slide 63). Antigen presentation to the T-cell receptor (signal 1) still happens, but without signal 2 the T cell is not activated, no IL-2 is made and signal 3 does not follow.',
 cite:XQ_PC3+' slide 63; T 316–357'},

{id:'SX-025', skill:'class', prof:'Smith', tier:'new', topic:'l3-tnf', sub:'drugs', concept:'x-etan-fusion',
 tags:['exam-style'], source:'both', dupOf:'L3-091',
 stem:'Which drug is a fusion protein that binds TNF-α?',
 options:[
  {t:'Infliximab', correct:false, why:'It binds TNF-α, but it is a chimeric mouse–human IgG1 antibody (slide 72).'},
  {t:'Abatacept', correct:false, why:'A fusion protein with an IgG Fc (slide 63), but it binds CD80/86, not TNF-α.'},
  {t:'Etanercept', correct:true, why:'Slide 71: "A fusion protein consisting of two p75-soluble TNF receptors linked to an Fc fragment of human IgG1" (11/03 T 501–509).'},
  {t:'Certolizumab pegol', correct:false, why:'It binds TNF-α and is not a whole antibody, but it is a Fab fragment of a humanized antibody attached to PEG (slide 74).'}],
 teach:'All the TNF-α inhibitors bind TNF-α; they differ in structure. Etanercept is a fusion protein of two p75 soluble TNF receptors on a human IgG1 Fc (slide 71); infliximab is a chimeric IgG1 antibody (slide 72); certolizumab pegol is a PEGylated Fab fragment (slide 74).',
 cite:XQ_PC3+' slides 63, 71–74; T 501–509'},

{id:'SX-026', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'x-uste-th1-th17',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L3-079',
 stem:'Ustekinumab keeps IL-12 and IL-23 from binding IL-12 receptor β1. Which effect follows in psoriasis?',
 options:[
  {t:'Fewer pro-inflammatory Th1 and Th17 cells form', correct:true, why:'Slide 67: ustekinumab "prevents binding of both IL-12 and IL-23 to the IL-12 receptor β1 found on the surface of CD4 T cells and NK cells. Suppresses formation of proinflammatory TH1 and TH17 cells" (11/03 T 444–453, 477–480).'},
  {t:'Fewer Th2 cells drive IgE synthesis', correct:false, why:'A true step from the atopic dermatitis axis (TH2 cytokines raise IgE, Skin-Pathophys slide 16; IL-4/IL-13 and IgE, slide 64), not the IL-12/IL-23 pathway.'},
  {t:'IL-17A is bound before it reaches keratinocytes', correct:false, why:'A true step further down the psoriasis chain, the secukinumab and ixekizumab step (slide 66), not ustekinumab\'s.'},
  {t:'TNF-α cannot reach its receptors on inflammatory cells', correct:false, why:'A true step from the TNF-α inhibitors (slide 70), not ustekinumab\'s.'}],
 teach:'Ustekinumab binds the p40 subunit shared by IL-12 and IL-23, so neither binds IL-12 receptor β1 on CD4 T cells and NK cells; formation of proinflammatory Th1 and Th17 cells is suppressed (slide 67).',
 cite:XQ_PC3+' slides 64, 66–67, 70; T 444–453, 477–480'},

{id:'SX-027', skill:'tell', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il23', concept:'x-risan-origin-target',
 tags:['exam-style'], source:'both', dupOf:'L3-114',
 stem:'Dr. Smith asks two things about each biologic: is it human or humanized, and what does it bind? Which answer fits risankizumab?',
 options:[
  {t:'Human; it binds p40 of IL-12 and IL-23', correct:false, why:'A true description of ustekinumab, the other IL-23 drug: "fully human IgG monoclonal antibody to the p40 protein" (slide 67); wrong for risankizumab in origin and target.'},
  {t:'Human; it binds p19 of IL-23', correct:false, why:'p19 is right, but human is guselkumab (slide 68).'},
  {t:'Humanized; it binds the IL-23 receptor', correct:false, why:'Humanized and IL-23 are right, but it binds the p19 subunit of the cytokine, not the receptor (slide 69).'},
  {t:'Humanized; it binds p19 of IL-23', correct:true, why:'Slide 69: risankizumab is a "humanized Ig G1 monoclonal antibody that selectively targets and binds to the p19 subunit of the IL-23" (11/03 T 480–486).'}],
 teach:'Her two questions for each biologic (11/03 T 476–477: "Is it human or humanized, and what are they binding to?"). Ustekinumab: human, p40 of IL-12 and IL-23 (slide 67). Guselkumab: human, p19 of IL-23 (slide 68). Risankizumab: humanized, p19 of IL-23 (slide 69).',
 cite:XQ_PC3+' slides 67–69; T 476–486'},

{id:'SX-028', skill:'mech', prof:'Smith', tier:'new', topic:'l3-cytok', sub:'il17', concept:'x-secu-il17a',
 tags:['exam-style'], source:'both', dupOf:'L3-071',
 stem:'How does secukinumab reduce the number and size of psoriatic plaques?',
 options:[
  {t:'It binds IL-17 receptor A on the keratinocytes', correct:false, why:'The IL-17 pathway is right and keratinocytes are IL-17\'s main target (slide 65), but binding IL-17RA is brodalumab (slide 66; 11/03 T 421–428).'},
  {t:'It binds IL-17A, keeping it off its receptor', correct:true, why:'Slide 66: secukinumab "selectively binds to the IL-17A cytokine, inhibiting its interaction with the IL-17A receptor" and "Reduces the number and size of the plaques" (T 409–413).'},
  {t:'It binds the p40 subunit, upstream of IL-17', correct:false, why:'An upstream step of the same chain, but p40 is ustekinumab (slide 67).'},
  {t:'It binds IL-17A as a humanized IgG4 monoclonal antibody', correct:false, why:'IL-17A is right, but a humanized IgG4 is ixekizumab; secukinumab is a human IgG1 (slide 66; T 416–420).'}],
 teach:'Secukinumab (human IgG1) and ixekizumab (humanized IgG4) bind the IL-17A cytokine; brodalumab binds the receptor, IL-17RA (slide 66).',
 cite:XQ_PC3+' slides 65–67; T 409–428'},

/* ---- Psoralens, corticosteroids, sunscreens ------------------------------ */
{id:'SX-029', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'x-8mop-uva-intercal',
 tags:['exam-style'], source:'both', dupOf:'L3CH-001',
 stem:'In PUVA for psoriasis, how does methoxsalen act?',
 options:[
  {t:'With UVB light, it intercalates into the DNA strand', correct:false, why:'Intercalation is right, but PUVA uses UVA (slide 3); UVB is 290–320 nm (slide 8).'},
  {t:'With UVA, it speeds keratinocyte growth', correct:false, why:'UVA is right, but the direction is reversed: it is antiproliferative and "Normalizes number and arrangement of keratinocytes" (slide 3).'},
  {t:'With UVA at 320–340 nm, it intercalates into DNA', correct:true, why:'Slide 3: with UVA light of 320 to 340 nm, psoralens intercalate into the DNA strand (audio 00:00–01:30).'},
  {t:'With UVA, it suppresses melanocytes and lowers pigmentation', correct:false, why:'UVA is right and pigment changes, but the direction is reversed: the reactions "stimulate melanocytes" and it "Increases melanin pigmentation" (slide 3).'}],
 teach:'PUVA is a psoralen with UVA. Exposed to UVA (320–340 nm), methoxsalen intercalates into DNA; it is antiproliferative, normalizes the number and arrangement of keratinocytes, and stimulates melanocytes, increasing pigmentation (slide 3).',
 cite:XQ_SUN+' slides 3, 8; audio 00:00–01:30'},

{id:'SX-030', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'x-gc-direct-two',
 tags:['exam-style'], source:'both', dupOf:'L1-071',
 stem:'Complete the sentence: In the direct mechanism of a topical corticosteroid, ______.',
 options:[
  {t:'one drug–receptor complex binds the GRE', correct:false, why:'The GRE is right, but the count is wrong: the direct mechanism "requires two drug receptor complexes that bind to a response element" (slide 5); one complex is the indirect mechanism.'},
  {t:'Hsp90 carries the drug–receptor complex to the GRE', correct:false, why:'Hsp90 belongs to the receptor, but the heat shock protein chaperones "only come off when the steroid binds" (slide 10; 10/29 T 800–804).'},
  {t:'two drug–receptor complexes bind NF-kB', correct:false, why:'Two complexes is right, but binding NF-kB is the indirect mechanism (slides 5–6).'},
  {t:'two complexes bind a response element on DNA', correct:true, why:'Slides 5–6: the direct mechanism requires two drug–receptor complexes that bind to a response element on DNA, the GRE (10/29 T 650–683).'}],
 teach:'Direct mechanism: two glucocorticoid–receptor complexes bind the glucocorticoid response element (GRE) on DNA. Indirect mechanism: one complex binds a transcription factor such as NF-kB or AP-1 and keeps it off the DNA (slides 5–7).',
 cite:XQ_PC1+' slides 5–7, 10; T 650–683, 800–804'},

{id:'SX-031', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'x-gc-indirect-step',
 tags:['exam-style','reasoning'], source:'both', dupOf:'L1-072',
 stem:'In the indirect mechanism, the glucocorticoid–receptor complex blocks one step of inflammatory gene expression. Which?',
 options:[
  {t:'NF-kB or AP-1 binding to the DNA', correct:true, why:'Slide 5: "Drug-receptor complex binds to a transcription factor preventing it from binding to DNA"; the factors are NF-kB and AP-1 (slides 6–7; 10/29 T 723–746).'},
  {t:'The cytokine activating NF-kB in the cell', correct:false, why:'A true step, but not the blocked one: the cytokine still activates the transcription factor; the complex blocks the factor (T 723–735; slide 6).'},
  {t:'Hsp90 coming off the receptor as the steroid binds', correct:false, why:'A true step that happens, not one that is blocked (slide 10; T 800–804).'},
  {t:'Corticosteroid-binding globulin carrying the steroid in blood', correct:false, why:'A true step in the circulation, not one that is blocked (slide 10; T 786–790).'}],
 teach:'In the indirect mechanism one glucocorticoid–receptor complex binds a transcription factor (NF-kB or AP-1) that a cytokine has activated and keeps it from binding DNA, so inflammatory genes are not expressed (slides 5–7).',
 cite:XQ_PC1+' slides 5–7, 10; T 723–746, 786–804'},

{id:'SX-032', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'x-zno-vs-avobenzone',
 tags:['exam-style'], source:'both', dupOf:'L3C-052',
 stem:'A patient compares a zinc oxide product with an avobenzone product. What separates how they protect?',
 options:[
  {t:'Zinc oxide turns UV into heat; avobenzone reflects it', correct:false, why:'Both mechanisms are on the slides, but reversed (slides 20, 22).'},
  {t:'Zinc oxide reflects UV; avobenzone absorbs it as heat', correct:true, why:'Slide 20: sunblocks are "Inorganic particulates that scatter or reflect visible, UV, and infrared radiation"; slide 22: organic sunscreens "absorb UV radiation ... then convert it to heat energy" (audio 18:55–21:30).'},
  {t:'Both absorb UV light, but zinc oxide is an inorganic particle', correct:false, why:'Zinc oxide is inorganic, but inorganic particulates "scatter or reflect" UV (slide 20); absorbing is the organic mechanism (slide 22).'},
  {t:'Zinc oxide scatters UVB but lets UVA pass through', correct:false, why:'Scattering is right, but zinc oxide and titanium dioxide give "UVA and UVB protection" (slide 20).'}],
 teach:'Her Exam 1 hint: "Know the difference between sunscreens and sunblocks based on the products\' ingredients". Sunblocks (zinc oxide, titanium dioxide) are inorganic particulates that scatter or reflect UVA and UVB (slide 20); organic sunscreens such as avobenzone absorb UV and convert it to heat (slide 22).',
 cite:XQ_SUN+' slides 20, 22; audio 18:55–21:30'},

{id:'SX-033', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'x-padimate-uvb-stain',
 tags:['exam-style'], source:'slide', dupOf:'L3CH-011',
 stem:'Padimate O is an aminobenzoate sunscreen. Which pairing of action and drawback fits?',
 options:[
  {t:'Scatters UVB like zinc oxide; may stain clothing', correct:false, why:'Staining is right (sunblocks may stain clothing too, slide 21), but it is an organic sunscreen that absorbs (slide 22).'},
  {t:'Converts UVB to heat; poor substantivity', correct:false, why:'The mechanism is right, but poor substantivity belongs to the benzophenones (slide 24).'},
  {t:'Absorbs UVB as heat; may stain clothing', correct:true, why:'Slides 22, 24: the aminobenzoates are "The most effective at absorbing UVB rays; May stain clothing"; organic sunscreens convert the absorbed UV to heat.'},
  {t:'Absorbs mainly UVA; may stain clothing', correct:false, why:'Staining is right, but the aminobenzoates are "The most effective at absorbing UVB rays" (slide 24).'}],
 teach:'Padimate O belongs to the aminobenzoates, the organic sunscreens most effective at absorbing UVB; they may stain clothing (slide 24). Organic sunscreens absorb UV and release it as heat (slide 22).',
 cite:XQ_SUN+' slides 21–22, 24'},

/* ---- Fill in the blank (Dr. Smith) --------------------------------------- */
{id:'BSX-001', type:'blank', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'x-b-salicylic-otc-max',
 tags:['blank','exam-style'], source:'both', dupOf:'BL2-003',
 stem:'The max for salicylic acid OTC is ___%.',
 accept:['40', '40%', '40 %', 'forty', '40 percent'],
 why:'Slide 40: "Up to 40% wart and corn removal"; "products on the market that are up to 40% salicylic acid" (10/30 T 548–549). The drug chart lists salicylic acid as OTC. Products for acne, dandruff and psoriasis are 3 to 6%.',
 cite:XQ_PC2+' slide 40; T 546–549'},

{id:'BSX-002', type:'blank', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'x-b-salicylic-3-6',
 tags:['blank','exam-style'], source:'both', dupOf:'L2-103',
 stem:'For acne, dandruff and psoriasis, salicylic acid products should be 3 to ___%.',
 accept:['6', '6%', '6 %', 'six', '6 percent'],
 why:'Slide 40: "3 to 6% - treats skin conditions like dandruff, acne and psoriasis"; "You want to use products that are only 3 to 6% salicylic acid" (10/30 T 546–547). Above 6% may damage the skin (T 547–548); up to 40% is for warts and corns.',
 cite:XQ_PC2+' slide 40; T 546–549'},

/* =========================== Dr. Sikazwe ================================== */
/* ---- Crisaborole and the JAK inhibitors (pp. 7–9) ------------------------ */
{id:'KX-001', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'adme', concept:'x-cris-nonenzymatic-step',
 tags:['exam-style'], source:'both', dupOf:'S3-014',
 stem:'Crisaborole is inactivated in several predictable steps. Which step happens without an enzyme?',
 options:[
  {t:'Oxidation of the benzyl alcohol to the acid', correct:false, why:'The next real step after deboronation, but it needs two enzymes, alcohol and aldehyde dehydrogenase (slide 7; T 705–709).'},
  {t:'Hydrolytic deboronation in the skin', correct:true, why:'Slide 7, "Hydrolytic deboronation": "That step is not enzymatic. Spontaneous, just in the presence of water in skin" (T 699–702); "Non-enzymatic is spontaneous" (T 727).'},
  {t:'Sulfation of the deboronated product', correct:false, why:'A real phase 2 step in the scheme, but the sulfate is added by sulfotransferases (slide 9; T 771–772).'},
  {t:'Formation of the glucuronide conjugate', correct:false, why:'A real phase 2 step in the scheme, but the glucuronide is made by UGT (slide 9; T 773).'}],
 teach:'Crisaborole is a soft drug with predictable inactivation: water in the skin removes the boron (hydrolytic deboronation, no enzyme); alcohol and aldehyde dehydrogenase oxidize the benzyl alcohol to the acid; sulfotransferases and UGT conjugate the products (slides 7, 9).',
 cite:XQ_S3+' slides 7, 9; T 699–773'},

{id:'KX-002', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-cris', sub:'cbda', concept:'x-cris-boron-affinity',
 tags:['exam-style'], source:'both', dupOf:'S3-018',
 stem:'What gives intact crisaborole its affinity for PDE4?',
 options:[
  {t:'Deboronation of the drug in the skin', correct:false, why:'Water does remove the boron in the skin, but that step inactivates the drug rather than binding it to PDE4 (T 699–702, 727–729).'},
  {t:'Its log P of 3, which holds it in skin', correct:false, why:'Log P 3 is crisaborole\'s real value, but it explains why the drug accumulates in the skin, not why it binds PDE4 (slide 7; T 689–699).'},
  {t:'Binding of its benzoic acid metabolite', correct:false, why:'Benzoic acid is a real product of its metabolism, but that product has lost the boron and goes on to phase 2 elimination (T 704–711).'},
  {t:'Boron coordinating Zn²⁺ and Mg²⁺', correct:true, why:'Slide 7: "It sits in there by having this boron group coordinate to two. Cations, right? Magnesium, and what? Zinc" (T 712–714); the affinity of crisaborole for PDE4 is due to binding that active site (T 800–801).'}],
 teach:'The chemical basis of crisaborole\'s action: its boron coordinates the two metal cations, Zn²⁺ and Mg²⁺, in the PDE4 active site. Once water removes the boron, the product no longer binds PDE4 (slide 7).',
 cite:XQ_S3+' slide 7; T 689–729, 800–801'},

{id:'KX-003', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'x-upa-2d6',
 tags:['exam-style'], source:'both', dupOf:'S3-030',
 stem:'Ruxolitinib and upadacitinib are both CYP3A4 substrates. Which second isoform metabolizes upadacitinib?',
 options:[
  {t:'CYP2D6', correct:true, why:'Slide 8: "Upadacitinib: T1/2 = 8-16h, 3A4/2D6 substrate"; 3A4 is shared with ruxolitinib (T 745–749).'},
  {t:'CYP2C9', correct:false, why:'The second isoform on the same slide, but it belongs to ruxolitinib, "3A4/2C9 substrate" (slide 8).'},
  {t:'CYP1A2', correct:false, why:'A minor isoform in the lecture, but of apremilast\'s O-demethylation (Lecture 4, slide 34).'},
  {t:'CYP2A6', correct:false, why:'A minor isoform in the lecture, but it also belongs to apremilast (Lecture 4, slide 34).'}],
 teach:'Slide 8: ruxolitinib is a CYP3A4/2C9 substrate and upadacitinib a CYP3A4/2D6 substrate; CYP3A4 is the major enzyme for both.',
 cite:XQ_S3+' slide 8; T 745–749'},

{id:'KX-004', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'adme', concept:'x-upa-only-feature',
 tags:['exam-style'], source:'both', dupOf:'S3-028',
 stem:'Which ADMET feature belongs to upadacitinib and not to ruxolitinib?',
 options:[
  {t:'A half-life of about 3 hours', correct:false, why:'A real JAK half-life on slide 8, but 3 h is ruxolitinib\'s; upadacitinib\'s is 8–16 h (T 742–743).'},
  {t:'Some active hydroxylated metabolites', correct:false, why:'One of the pair has them, but the active OH metabolites belong to ruxolitinib (slide 8, "some active metabolites"; T 752–754).'},
  {t:'No active metabolites', correct:true, why:'Slide 8 annotation beside upadacitinib: "has no active metabolites"; "One has active metabolites, the other one doesn\'t" (T 752–757).'},
  {t:'A log P of about 2', correct:false, why:'True of upadacitinib, but true of ruxolitinib as well, so it does not set upadacitinib apart (slide 8; T 736–737).'}],
 teach:'Slide 8: both JAK inhibitors have log P about 2 and are formulated to stay in the skin. Ruxolitinib: t1/2 3 h, CYP3A4/2C9, some active metabolites. Upadacitinib: t1/2 8–16 h, CYP3A4/2D6, no active metabolites.',
 cite:XQ_S3+' slide 8; T 736–757'},

{id:'KX-005', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s3-jak', sub:'chem', concept:'x-rux-sequestered',
 tags:['exam-style'], source:'both', dupOf:'S3-025',
 stem:'Topical ruxolitinib has a log P near 2 yet acts locally. What keeps it in the skin?',
 options:[
  {t:'High non-specific skin protein binding', correct:false, why:'A way a topical drug in this lecture stays in the skin, but it is pimecrolimus\'s reason (Lecture 4, slide 28; T@4800–5200).'},
  {t:'A formulation that sequesters it', correct:true, why:'Slide 8 annotation: "formulated to be sequestered in the skin"; "these are formulated ... to. Be sequestered ... In the skin" (T 737–741).'},
  {t:'Accumulation driven by a log P of 3', correct:false, why:'Crisaborole\'s real reason, but ruxolitinib\'s log P is about 2; accumulation from structure is crisaborole\'s explanation (slide 7; T 689–699).'},
  {t:'Rapid deboronation in the skin', correct:false, why:'Water inactivates crisaborole in the skin, but that spontaneous deboronation is specific to crisaborole\'s boron (T 699–702).'}],
 teach:'Three drugs, three reasons for staying in the skin: crisaborole accumulates from its log P of 3 (slide 7); ruxolitinib and upadacitinib, log P about 2, are formulated to be sequestered in the skin (slide 8); pimecrolimus has high non-specific skin protein binding (Lecture 4, slide 28).',
 cite:XQ_S3+' slides 7–8; T 689–741'},

/* ---- 8-MOP, glucocorticoid SAR (pp. 18–26) ------------------------------- */
{id:'KX-006', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-psor', sub:'cbda', concept:'x-8mop-crosslink-uva',
 tags:['exam-style'], source:'both', dupOf:'S3-064',
 stem:'In PUVA, what does methoxsalen do to keratinocyte DNA?',
 options:[
  {t:'Breaks it with anthranyl and superoxide radicals', correct:false, why:'The antiproliferative chemical basis of the drug on the slide before, but the cytotoxic radicals come from anthralin (slide 17).'},
  {t:'Binds it after activation by UVB light', correct:false, why:'Coal tar is combined with UVB phototherapy, but PUVA uses UVA (slides 16, 18).'},
  {t:'Intercalates, then autoxidizes to radicals', correct:false, why:'Intercalation is the true first part, but 8-MOP does not autoxidize; the Polleve-2 answer that said so was false for 8-MOP (slides 18–19; T 977–980).'},
  {t:'Crosslinks pyrimidine bases after UVA', correct:true, why:'Slide 18: methoxsalen "covalently binds to DNA pyrimidine bases"; it intercalates, and UVA makes it crosslink (T 963–976).'}],
 teach:'8-Methoxypsoralen intercalates into DNA; UVA then makes it bind covalently to pyrimidine bases and crosslink the DNA (slide 18). Autoxidation to radicals belongs to anthralin (slide 17).',
 cite:XQ_S3+' slides 16–19; T 963–980'},

{id:'KX-007', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s3-gc', sub:'sar', concept:'x-gc-c11-ketone-loss',
 tags:['exam-style','reasoning'], source:'both', dupOf:'S3-078',
 stem:'Which change to hydrocortisone would lower its anti-inflammatory activity?',
 options:[
  {t:'Oxidizing the 11β-OH to a ketone', correct:true, why:'The C11 hydroxyl must be β for activity (slide 20; T 1071–1072); 11β-HSD turns hydrocortisone into cortisone, with a C11 ketone, and "it goes inactive" (slide 26; T 1191–1196).'},
  {t:'Adding a double bond between C1 and C2', correct:false, why:'A C1–C2 double bond matters, but it is one of the four features that increase activity (slide 20; T 1023–1024).'},
  {t:'Adding an α-halogen at C9', correct:false, why:'C9 matters, but a 9α-halogen increases activity (slide 20; T 1069–1070).'},
  {t:'Formulating it in propylene glycol', correct:false, why:'The vehicle changes potency, but propylene glycol raises it by helping the drug reach the receptor (slide 25; T 1160–1163).'}],
 teach:'The glucocorticoid SAR he limited to four features (slide 20): a C1–C2 double bond, an α-halogen at C6 and C9, and an 11β-hydroxyl. Oxidizing the 11β-OH to the ketone gives cortisone, which is inactive (slide 26).',
 cite:XQ_S3+' slides 20, 25–26; T 1023–1024, 1069–1072, 1160–1163, 1191–1196'},

/* ---- Vitamin D, cyclosporine, methotrexate, apremilast (pp. 27–34) ------- */
{id:'KX-008', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'x-vitd-activating-step',
 tags:['exam-style'], source:'both', dupOf:'S4-010',
 stem:'25-OH-cholecalciferol is the inactive form circulating in blood. What step makes it active?',
 options:[
  {t:'25-Hydroxylation in the liver', correct:false, why:'A real hydroxylation in the pathway, but it is the step that makes 25-OH-cholecalciferol itself, mainly through CYP2R1 (VitD L65–67).'},
  {t:'Isomerization of pre-vitamin D3', correct:false, why:'A real pathway step, but it happens earlier, in the skin, turning pre-D3 into D3 (VitD L61–62).'},
  {t:'A kidney hydroxylation', correct:true, why:'Slide 27: 1-α-hydroxylase converts 25-OH-cholecalciferol to calcitriol; the reading places this 1-hydroxylase (CYP27B1) mainly in the kidney (VitD L13–14, L67–68; T@3600–3813).'},
  {t:'UVB light acting in the skin', correct:false, why:'The light step starts the pathway, but UVB opens the B ring of 7-dehydrocholesterol at the start, before any hydroxylation (VitD L5; slide 27).'}],
 teach:'Vitamin D3 activation (slide 27; reading): UVB opens the B ring of 7-dehydrocholesterol in the skin and pre-D3 isomerizes to D3; the liver 25-hydroxylates it (mainly CYP2R1) to the inactive circulating 25-OH-cholecalciferol; the kidney 1α-hydroxylase (CYP27B1) makes calcitriol. He made the organs and enzymes of this pathway testable: "here, I\'ve already given you the enzyme, and you can fit in what organ" (T@3600–3813).',
 cite:XQ_S4+' slide 27; T@3530–4160; VitD L5, L13–14, L61–68'},

{id:'KX-009', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'x-csa-activation-not-metabolic',
 tags:['exam-style'], source:'both', dupOf:'S4-040',
 stem:'What activates cyclosporine, a prodrug?',
 options:[
  {t:'CYP3A4 oxidation during first pass', correct:false, why:'CYP3A4 does act on cyclosporine, but that first-pass metabolism lowers its oral bioavailability to about 30% (T@12800–13060).'},
  {t:'Forming a complex with cyclophilin', correct:true, why:'Slide 33: "Activated by complexation with cyclophilin receptor"; "how it\'s bioactivated is not metabolic. It\'s simply by its binding to its receptor" (T@12289–12400).'},
  {t:'Carboxylesterase hydrolysis in skin', correct:false, why:'How a prodrug in this lecture is activated, but carboxylesterase hydrolysis activates the ester prodrug tazarotene (slide 29; T@6800–7125).'},
  {t:'Binding calcineurin phosphatase directly', correct:false, why:'Calcineurin is the target, but the cyclosporine–cyclophilin complex is what inhibits calcineurin (slide 33).'}],
 teach:'Cyclosporine is a prodrug in an unusual sense: it is not activated by metabolism but by binding its receptor, cyclophilin; the complex then inhibits calcineurin (slide 33). CYP3A4 first-pass metabolism lowers its oral bioavailability (T@12800–13060).',
 cite:XQ_S4+' slides 29, 33; T@6800–7125, T@12289–13060'},

{id:'KX-010', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'x-csa-azole-levels',
 tags:['exam-style','reasoning'], source:'both', dupOf:'S4-043',
 stem:'A patient on oral cyclosporine starts ketoconazole for acne. What change in cyclosporine is expected?',
 options:[
  {t:'Lower levels, since azoles induce 3A4', correct:false, why:'Azoles are known for their effect on CYP3A4, but they are strong 3A4 inhibitors, not inducers (slide 53; T@32300–32640).'},
  {t:'Faster activation by 3A4 metabolism', correct:false, why:'3A4 does metabolize cyclosporine, but that first-pass metabolism lowers its bioavailability (T@12800–13060), and its activation is not metabolic: "It\'s simply by its binding to its receptor" (T@12289–12400).'},
  {t:'Lower levels from lower testosterone', correct:false, why:'Ketoconazole does lower testosterone biosynthesis in acne (T@32000–32300), but that is its acne action, not a cause of lower cyclosporine levels.'},
  {t:'Higher levels, like grapefruit juice', correct:true, why:'Cyclosporine\'s first pass is by CYP3A4 (T@12800–13060); grapefruit juice blocks it, so "you can enhance what blood levels of this" (T@13190–13550); azoles are strong 3A4 inhibitors: "Have that enzyme inhibition. At the front of your mind" (T@32400–32640).'}],
 teach:'Two facts combined: cyclosporine loses much of an oral dose to CYP3A4 first-pass metabolism, and azole antifungals such as ketoconazole are strong CYP3A4 inhibitors. Like grapefruit juice, ketoconazole blocks that first pass and raises cyclosporine blood levels (slides 33, 53).',
 cite:XQ_S4+' slides 33, 53; T@12289–13550, T@32000–32640'},

{id:'KX-011', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'x-mtx-sar-lowers',
 tags:['exam-style'], source:'both', dupOf:'S4-035',
 stem:'By the methotrexate SAR, which change lowers activity?',
 options:[
  {t:'Alkylating its aromatic amines', correct:true, why:'Slide 31: "Aromatic N-alkylation ↓ activity"; "If you alkylate any one of those, you also drop the activity" (T@10400–10750).'},
  {t:'Methylating the N where folic acid has N–H', correct:false, why:'A real structural change from folic acid, but "this methylation here is also essential for activity" (slide 31, "N-CH3 - essential"; T@10750–10850).'},
  {t:'Keeping the pteridine ring aromatic', correct:false, why:'The pteridine ring is what the SAR is about, but it "should remain aromatic"; changing its double bonds is what lowers activity (slide 31; T@10380–10500).'},
  {t:'Retaining the glutamic acid portion', correct:false, why:'A real part of the molecule, but glutamic acid is one of the three required parts (slide 31; T@10000–10230).'}],
 teach:'Methotrexate SAR (slide 31): three parts are required (pteridine ring, p-aminobenzoic acid portion, glutamic acid); the pteridine stays aromatic; the N-methyl is essential; alkylating the aromatic amines lowers activity.',
 cite:XQ_S4+' slide 31; T@10000–10850'},

{id:'KX-012', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'x-apr-isoindoline-only',
 tags:['exam-style'], source:'both', dupOf:'SX-002',
 stem:'Apremilast and crisaborole share a drug target. Which statement is true of apremilast only?',
 options:[
  {t:'Its boron binds Zn²⁺ and Mg²⁺', correct:false, why:'The PDE4 binding basis taught for crisaborole, but the boron is crisaborole\'s, not apremilast\'s (Lecture 3, slide 7; 11/03 T 712–719).'},
  {t:'It leads to higher cAMP', correct:false, why:'The true result of PDE4 inhibition, but both drugs raise cAMP (Lecture 3, slide 7, "higher cAMP"; slide 34, "Leads to ↑ cAMP").'},
  {t:'It is an isoindoline', correct:true, why:'Slide 34: apremilast is "An Isoindoline"; the two share a target but not a chemical class (T@13698–13800; 11/03 T 732–733).'},
  {t:'It is cleared without CYP enzymes', correct:false, why:'Crisaborole is oxidized by "not sips, 2 enzymes" (11/03 T 708–709); apremilast relies on CYP3A4 for its metabolism (slide 34; T@13600–14100).'}],
 teach:'Same target, different chemistry: apremilast (oral, an isoindoline, CYP3A4 metabolism) and crisaborole (topical, boron-containing, non-CYP metabolism) both inhibit PDE4 and raise cAMP (slides 7, 34).',
 cite:XQ_S4+' slides 7, 34; T@13600–14100; 11/03 T 708–719, 732–733'},

/* ---- Retinoids, antiandrogens (pp. 29, 49–53) ---------------------------- */
{id:'KX-013', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g3', concept:'x-taz-ester-why',
 tags:['exam-style'], source:'both', dupOf:'S4-081',
 stem:'Tazarotene and adapalene are both 3rd-generation retinoids. Why does only tazarotene need carboxylesterases?',
 options:[
  {t:'It has fewer aromatic rings', correct:false, why:'The generations are defined by aromatic rings, but both are poly-aromatic 3rd-generation retinoids (slide 51; T@30000–30100).'},
  {t:'It is a 13-cis isomer', correct:false, why:'Geometric isomerism is a retinoid feature, but 13-cis describes isotretinoin (slide 49; T@28000–28470).'},
  {t:'It carries an alkyne (acetylenic) link', correct:false, why:'True of tazarotene, "an acetylenic retinoid" (slide 29; T@6800), but the alkyne is not what CE enzymes act on; they hydrolyze the ester.'},
  {t:'It is an ester prodrug', correct:true, why:'"it\'s also what? And Esther. Pro-drug ... it needs ester hydrolysis by. CE enzymes" (T@6800–7125); adapalene and trifarotene are "Directly active because they have this exposed carboxylic acid" (T@30000–30300; slide 51).'}],
 teach:'Among the poly-aromatic 3rd-generation retinoids, adapalene and trifarotene carry an exposed carboxylic acid and are directly active; tazarotene is an ester prodrug that needs ester hydrolysis by carboxylesterase (CE) enzymes (slides 29, 51).',
 cite:XQ_S4+' slides 29, 49, 51; T@6800–7125, T@28000–30300'},

{id:'KX-014', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g2', concept:'x-ret-same-generation',
 tags:['exam-style'], source:'both', dupOf:'S4H-007',
 stem:'Which two retinoids belong to the same generation?',
 options:[
  {t:'Isotretinoin and acitretin', correct:false, why:'Both are oral retinoids (slide 29), but isotretinoin is 1st generation (non-aromatic) and acitretin 2nd (mono-aromatic) (slides 49–50).'},
  {t:'Etretinate and acitretin', correct:true, why:'Slide 50: the 2nd generation is mono-aromatic; etretinate is bioactivated by carboxylesterases to acitretin, which is now given directly (T@28800–29650).'},
  {t:'Tazarotene and etretinate', correct:false, why:'Both are ester prodrugs activated by carboxylesterases (T@29100; T@30200), but tazarotene is 3rd generation and etretinate 2nd (slides 50–51).'},
  {t:'Tretinoin and acitretin', correct:false, why:'Both are active acids with similar names, but tretinoin is 1st generation and acitretin 2nd (slides 49–50).'}],
 teach:'Retinoid generations by aromatic rings (slides 49–51): 1st, non-aromatic (tretinoin, isotretinoin); 2nd, mono-aromatic (etretinate and its active acid acitretin); 3rd, poly-aromatic (adapalene, tazarotene, trifarotene).',
 cite:XQ_S4+' slides 29, 49–51; T@28800–30200'},

{id:'KX-015', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'x-spiro-biosynthesis',
 tags:['exam-style'], source:'both', dupOf:'S4-086',
 stem:'Spironolactone is the steroidal antiandrogen used in acne. How does it lower androgen effects?',
 options:[
  {t:'It lowers testosterone synthesis', correct:true, why:'"spironolactone and ketoconazole. These Uh, Diminish Testosterone ... Biosynthesis ... that\'s the mechanism of action" (T@32000–32300; slide 53).'},
  {t:'It blocks testosterone at its receptor', correct:false, why:'A real antiandrogen mechanism on the slide, but receptor blocking is flutamide\'s (slide 53; T@32700–32900).'},
  {t:'It acts as a strong CYP3A4 inhibitor', correct:false, why:'The warning for the other biosynthesis inhibitor on the slide: strong 3A4 inhibition belongs to the azole ketoconazole (T@32300–32640).'},
  {t:'It suppresses sebum as an estrogen', correct:false, why:'Lower sebum is the end result of every hormonal agent here (T@33140–33600), but the estrogenic route belongs to the oral contraceptives (slide 52; T@31200–31600).'}],
 teach:'Acne antiandrogens (slide 53): spironolactone (a steroid) and ketoconazole lower testosterone biosynthesis; flutamide blocks the androgen receptor. Ketoconazole, an azole, is also a strong CYP3A4 inhibitor.',
 cite:XQ_S4+' slides 52–53; T@31200–33600'},

/* ---- Sunscreens (pp. 61–66) ---------------------------------------------- */
{id:'KX-016', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'x-avobenzone-photodeg',
 tags:['exam-style'], source:'both', dupOf:'S4H-027',
 stem:'Avobenzone is a dibenzoylmethane. Which description fits it?',
 options:[
  {t:'Stays photostable for about 12 hours', correct:false, why:'Photostability is a real sunscreen property in this lecture, but about 12 hours is ensulizole (T@42930); avobenzone is rapidly degraded by UVA (slide 62).'},
  {t:'Absorbs UVA, then UVA degrades it', correct:true, why:'Slide 62: avobenzone "Absorbs the full spectrum of UVA ... Rapidly degraded by UVA"; "photodegradation, that means the same light they\'re absorbing is also degrading them" (T@40800–41000).'},
  {t:'Is highly absorbed through the skin', correct:false, why:'Skin absorption is a real sunscreen concern, but high skin absorption (log P about 4) belongs to the benzophenones; avobenzone has low skin absorption (slide 65; T@40400–40600, T@43600).'},
  {t:'Mainly absorbs UVB, as octinoxate does', correct:false, why:'Octinoxate is a real organic absorber listed under UVB (slide 63), but avobenzone absorbs the full spectrum of UVA (slide 62).'}],
 teach:'Avobenzone, a dibenzoylmethane, absorbs the full UVA spectrum but is rapidly degraded by the same UVA it absorbs, so it must be reapplied (slide 62).',
 cite:XQ_S4+' slides 62–65; T@40400–43600'},

{id:'KX-017', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'x-ensulizole-water',
 tags:['exam-style'], source:'both', dupOf:'S4-106',
 stem:'Ensulizole is photostable for about 12 hours. Why must it be reapplied after swimming?',
 options:[
  {t:'Its ester hydrolyzes to salicylic acid', correct:false, why:'The salicylates on the same slide do this, but ester hydrolysis to salicylic acid explains the analgesia of homosalate and octisalate (slide 64; T@42300–42500).'},
  {t:'Light degrades it within 1–2 hours', correct:false, why:'A 1–2 h photodegradation is a real reason to reapply, but it is octinoxate\'s (slide 63, "1-2 hrs"); ensulizole lasts about 12 h (T@42800–42950).'},
  {t:'Its log P of 4 drives skin absorption', correct:false, why:'Log P values are given for these sunscreens, but log P 4 belongs to the benzophenones; ensulizole\'s log P is 1 (T@43600; T@42800).'},
  {t:'Its sulfonic acid is water soluble', correct:true, why:'"water soluble coming from that sulfonic acid. They need to reapply" (T@42800–43270; slide 64).'}],
 teach:'Ensulizole is photostable (about 12 h) but its sulfonic acid makes it water soluble (log P 1), so it washes off and must be reapplied after swimming (slide 64).',
 cite:XQ_S4+' slides 63–64; T@42300–43600'},

{id:'KX-018', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'x-bemt-mw-reason',
 tags:['exam-style'], source:'both', dupOf:'S4-110',
 stem:'Bemotrizinol is lipophilic, yet little of it is absorbed through the skin. Why?',
 options:[
  {t:'Its high molecular weight', correct:true, why:'Slide 66: "no skin absorption due to high MW (627.81)"; "this low skin absorption for this one is because it\'s ... a high molecular weight molecule" (T@45500–45700).'},
  {t:'High non-specific skin protein binding', correct:false, why:'How lipophilic pimecrolimus stays out of the circulation (slide 28; T@4800–5200), not bemotrizinol\'s reason.'},
  {t:'A formulation that sequesters it', correct:false, why:'Formulation keeps another drug class in the skin: sequestration by formulation is the JAK inhibitors\' reason (Lecture 3, slide 8; 11/03 T 737–741).'},
  {t:'Ester hydrolysis in the skin', correct:false, why:'The salicylate sunscreens are esters that hydrolyze, but that gives salicylic acid and explains their analgesia (slide 64; T@42300–42500), not low absorption.'}],
 teach:'Bemotrizinol is lipophilic, but its high molecular weight (627.81) keeps it from being absorbed through the skin (slide 66).',
 cite:XQ_S4+' slides 28, 64, 66; T@4800–5200, T@42300–42500, T@45500–45700'},

/* ---- Limus drugs (p. 28) ------------------------------------------------- */
{id:'KX-019', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'class', concept:'x-limus-shared',
 tags:['exam-style'], source:'both', dupOf:'S4-019',
 stem:'Pimecrolimus and tacrolimus differ in skin permeation. What do they share?',
 options:[
  {t:'Low skin protein binding', correct:false, why:'A real limus property on slide 28, but only tacrolimus has low skin protein binding (T@5200–5300).'},
  {t:'A chlorine on the cyclohexyl ring', correct:false, why:'A real limus structural feature, but the chlorine is pimecrolimus\'s; tacrolimus has a hydroxyl there (slide 28; T@4400–4500).'},
  {t:'Calcineurin as their target', correct:true, why:'Slide 28: "MoA: Calcineurin inhibitors ... similar in lipophilicity, structure, mechanism, but differ in skin permeation"; "these are carcinourin inhibitors" (T@5600–5800).'},
  {t:'A cyclic peptide structure', correct:false, why:'The structure of another calcineurin inhibitor: the 11-amino-acid cyclic peptide is cyclosporine (slide 33); the limus drugs are macrolide or lactone immunosuppressants (slide 28).'}],
 teach:'Pimecrolimus and tacrolimus are macrolide (lactone) calcineurin inhibitors, similar in lipophilicity, structure and mechanism; they differ in skin permeation, because pimecrolimus has high non-specific skin protein binding and tacrolimus low (slide 28). He said the mechanism is not his emphasis (T@5702).',
 cite:XQ_S4+' slides 28, 33; T@4400–5800'},

/* ---- Fill in the blank (Dr. Sikazwe) ------------------------------------- */
{id:'BKX-001', type:'blank', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'x-b-secosteroid',
 tags:['blank','exam-style'], source:'both', dupOf:'S4-005',
 stem:'Calcitriol and calcipotriene are classified chemically as ___.',
 accept:['secosteroids', 'secosteroid', 'seco-steroids', 'seco-steroid'],
 why:'Slide 27: "Secosteroids". UV light opens the B ring of 7-dehydrocholesterol: "A move From this molecule to an open, an open molecule" (T@2800–3200).',
 cite:XQ_S4+' slide 27; T@2800–3200'},

{id:'BKX-002', type:'blank', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'x-b-vitd-kidney-enzyme',
 tags:['blank','exam-style'], source:'both', dupOf:'S4-011',
 stem:'In the kidney, 25-OH-cholecalciferol is converted to calcitriol by the enzyme ___.',
 accept:['1-alpha-hydroxylase', '1α-hydroxylase', '1-α-hydroxylase', '1-hydroxylase', 'CYP27B1', '1 alpha-hydroxylase', '1-alpha hydroxylase', '1 alpha hydroxylase', '1α hydroxylase', '1alpha-hydroxylase'],
 why:'Slide 27 names "1-α-hydroxylase" for this arrow; the reading calls CYP27B1 "the 1-hydroxylase" and places it mainly in the kidney (VitD L13–14, L67–68). He set "the reactions, the organs ... and the enzymes" of this pathway as testable (T@3530–4160).',
 cite:XQ_S4+' slide 27; T@3530–4160; VitD L13–14, L67–68'}
);
