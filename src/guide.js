/* ==========================================================================
   GUIDES: one section per learning objective, grouped by slide deck
   ==========================================================================
   Order (Louis, 2026-11-08): Dr. Smith's Skin Pathophysiology deck (her five
   objectives, slide 3), her Skin Pharmacology deck (five objectives, slide 3),
   her sun-exposure deck (five objectives, slide 6, plus the psoralen slides
   2-4), then Dr. Sikazwe's DPAW deck (his objectives, p. 3), section by
   section over his assigned pages for Exam 1 (11/06); then Dr. Patel's Dermatitis
   Therapeutics deck (Exam 2; her seven objectives, slides 7-8; DT = that deck's slide,
   T@ = 11/06 transcript byte offset).

   Anchors links.js uses are kept: gobj-l1-1 (skin structure), gobj-l1-2
   (epidemiology), gobj-l1-3 (etiology and pathology), gobj-l1-4 (general
   mechanisms by drug class, now Skin Pharmacology objective 2). Every fact is
   cited: PP = Skin-Pathophys-Students-2026.pdf slide, PCol =
   Skin-PCol-Students-2026.pdf slide, Sun = DEENT_Sun_Exposure_2026.pdf slide,
   DPAW = f26-DEENT-DPAW-mc.pdf file page; T = lecture-only transcript line
   (10/29, 10/30, 11/03), audio = sun-lecture recording time, T@ = 11/04 time.
   Long tables are not repeated here; the chips jump to Tell apart, Reference,
   the Drug list and the Atlas.
   ========================================================================== */
const GUIDE_HTML = `
<h2>Guides by slide deck and learning objective</h2>
<p class="sub">Each deck's own learning objectives, one section per objective, with what the lecture taught for it and the slide it comes from. PP = Skin-Pathophys-Students-2026.pdf, PCol = Skin-PCol-Students-2026.pdf, Sun = DEENT_Sun_Exposure_2026.pdf, DPAW = f26-DEENT-DPAW-mc.pdf, where "slide N" is the PDF page number, the same number the questions cite (from PDF page 23 on, the number printed on the slide is one lower, his list of 11/06; the numbering question is still open with Louis); (T) = said in lecture. Nothing here is scored.</p>

<h2 class="gdeck" id="gdeck-pp">Skin Pathophysiology (Dr. Smith, 10/29)</h2>

<section class="gobj" id="gobj-l1-1">
<h3>Skin Pathophysiology · Objective 1: basic structures and functions of the skin</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the basic structures and functions of the skin</b><i>PP 4&ndash;6</i></div>
<div class="gpt"><h5>Layers and keratinocytes (PP 5)</h5><ul><li>Epidermis (outer), dermis (middle; vessels and nerves), hypodermis (inner; vessels, adipose, some nerve endings) (T 32&ndash;37).</li><li>Keratinocytes start cuboidal in the stratum basale, move up, flatten, make keratin and lose the nucleus by the stratum corneum (T 39&ndash;48). The flat cells of the stratum corneum lie in overlapping layers that keep bacteria out and fluid in (T 48&ndash;54).</li></ul></div>
<div class="gpt"><h5>Sebum (PP 6)</h5><ul><li>Made by the sebaceous gland: glycerides, wax esters and cholesterol; retards water loss; most on face, scalp, back and neck.</li><li>(T) &ldquo;the most important thing to remember here is we have [sebum] produced by the sebaceous gland, and these cuboidal keratinocytes, they do move on up&rdquo; (T 78&ndash;80).</li></ul></div>
<div class="gtell"><b>Where each disease starts from this anatomy</b><ul><li>AD: a barrier defect in the epidermis (filaggrin, PP 15). Psoriasis: keratinocytes divide too fast and do not mature (PP 19, 23). Acne: the pilosebaceous unit, with more sebum (PP 30, 32).</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-2">
<h3>Skin Pathophysiology · Objective 2: epidemiology of the three diseases</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Differentiate between the epidemiologic aspects of the three diseases</b><i>PP 10, 20, 31, 35</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Disease</th><th>Incidence or prevalence, as each slide words it</th><th>Sex and age</th><th>Family and setting</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> (PP 10)</td><td>Incidence in developed countries: 15&ndash;30% of children, 2&ndash;10% of adults; prevalence has increased in developed and developing countries over recent decades</td><td>Males and females alike</td><td>Lower in rural areas (hygiene hypothesis); goes with asthma and rhinitis (atopic conditions); two- to threefold risk with one atopic parent, three- to fivefold with two</td></tr>
<tr><td><b>Psoriasis</b> (PP 20)</td><td>About 3% of the US population; the most common immune-mediated inflammatory disease worldwide; other countries vary; climate, sun exposure and ethnicity are thought to affect prevalence</td><td>Males and females equally; any age, but most patients have onset before 40</td><td>A genetic basis that probably needs environmental triggers; about 30% have a first-degree relative with it</td></tr>
<tr><td><b>Acne</b> (PP 31, 35)</td><td>Lifetime prevalence approaches 90%; the most common disease treated by dermatologists</td><td>Onset at puberty with androgens; ages 25&ndash;58: 12% of women, 3% of men; often more severe in boys in puberty; women often have more severe forms in adulthood</td><td>81% likelihood if both parents had acne (PP 35)</td></tr>
</tbody></table>
<div class="gtell"><b>Tell apart</b><ul><li>3% is psoriasis; 15&ndash;30% of children is AD; about 90% lifetime is acne.</li><li>Family numbers: AD two- to threefold (one parent) and three- to fivefold (two); psoriasis about 30% first-degree relative; acne 81% with both parents.</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-3">
<h3>Skin Pathophysiology · Objective 3: etiologies and pathologies</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the etiologies and pathologies for each of these three conditions</b><i>PP 8&ndash;16, 19&ndash;26, 30&ndash;35</i></div>
<div class="gpt"><h5>Atopic dermatitis (PP 8&ndash;16)</h5><ul>
<li>Definition: a chronic, pruritic inflammatory skin disease, often called eczema; pruritus is the primary symptom (PP 8).</li>
<li>Signs: red to brownish-gray patches, itch that may be severe, especially at night, small vesicles that may leak and crust when scratched, thickened or scaly skin; often hands and feet in adults, often face and scalp in children; secondary bacterial infection common (PP 11).</li>
<li>Exacerbating factors: allergens (foods, soaps, detergents, fragrances), long hot baths, dry skin, stress, sweating, rapid temperature change or low humidity, wool or man-made fabrics (PP 12).</li>
<li>The first trigger is unknown: neuropeptides, irritation or scratching may release proinflammatory cytokines from keratinocytes; allergens may cause T-cell mediated, IgE-independent reactions (PP 13; T 163&ndash;169).</li>
<li>Features: skin barrier dysfunction; deviation toward TH2; then increased IgE; complicated by colonization with pathologic organisms (PP 13).</li>
<li>Genes: epidermal structural proteins and immune-system genes (PP 14). FLG &rarr; profilaggrin &rarr; filaggrins &rarr; barrier; a variant gives reduced function or no profilaggrin, so allergens get in; patients with variants have more persistent disease and a greater risk of multiple allergies. About 40% of people lacking FLG do not develop AD, and many AD patients have no FLG variant (PP 15).</li>
<li>TH1 cytokines (interferon-gamma, IL-12) suppress IgE; TH2 cytokines (IL-5, IL-13) increase it. AD has more TH2 activity: IL-3, IL-4, IL-5, IL-10, IL-13, blood eosinophilia, high total IgE, more mast cells. &ldquo;Some of our therapies antagonize these cytokines&rdquo; (PP 16).</li></ul></div>
<div class="gpt"><h5>Psoriasis (PP 19&ndash;26)</h5><ul>
<li>Definition: recurrent exacerbations and remissions of thickened, erythematous, scaly plaques; keratinocyte hyperproliferation and incomplete differentiation; a T-cell-mediated systemic inflammatory disease (PP 19).</li>
<li>Probably starts with some trauma (bug bite, skin infection) that triggers an abnormal immune response: T cells in skin are stimulated by antigen (as yet undefined) presented by APCs, and the cells release TNF-alpha, interferon-gamma, IL-23 and IL-17 &rarr; keratinocyte hyperproliferation and chronic systemic inflammation; comorbidities follow from the chronic inflammation (PP 21&ndash;22).</li>
<li>Keratinocytes: 1.5 days to divide and 4 to shed, against 13 and 26 normally (PP 23).</li>
<li>Contributing factors: climate, stress, infections, trauma (Koebner response: lesions at previously clear sites after friction, venipuncture, bites, surgery or pressure), medications, most commonly lithium and beta blockers (PP 24).</li>
<li>Nail psoriasis: pitting, ridging, discoloration, onycholysis. Psoriatic arthritis: asymmetric (hands, feet, knees), skin lesions usually first, no rheumatoid factor elevation (PP 26).</li></ul></div>
<div class="gpt"><h5>Acne (PP 30&ndash;35)</h5><ul>
<li>Definition: a common, self-limiting disease of the pilosebaceous units, on the face, upper back and chest (PP 30).</li>
<li>Androgens &rarr; more sebum, altered keratinization and hyperproliferation of the ductal epidermis, P. acnes colonization of the duct, inflammation (PP 32).</li>
<li>Skin cells stick together and plug the channel with sebum. P. acnes lipase turns sebum glycerides into free fatty acids, which irritate the follicle wall and are antigenic (PP 33).</li>
<li>Exacerbating factors: humidity and sweating; acne mechanica (occlusion or irritation), occupational acne, acne cosmetica (comedogenic oils); stress; hormones; drug-induced acne (phenytoin, isoniazid, phenobarbital, lithium, steroids, azathioprine, quinine, rifampin and others); genetics; high glycemic index diet, perhaps dairy (PP 35).</li></ul></div>
<!--DIA:acne-cascade-->
<div class="gpoll"><b>Her polls (PP 38)</b><ul><li>Major pathology of AD: skin barrier dysfunction (TRUE); keratinocyte hyperproliferation (FALSE, psoriasis); excess sebum (FALSE, acne).</li><li>Major pathology of psoriasis: keratinocyte hyperproliferation (TRUE).</li><li>Major pathology of acne: excess sebum production (TRUE). Keratinocyte hyperproliferation is FALSE: &ldquo;This is a feature of psoriasis&rdquo; (T 573&ndash;577).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-l1-diseases">Tell apart: the three diseases</button></div>
</section>

<section class="gobj" id="gobj-pp-4">
<h3>Skin Pathophysiology · Objective 4: classes of medications for each condition</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>List the classes of medications used to treat each of these conditions</b><i>PP 17, 28, 37</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Disease</th><th>Classes on her slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> (PP 17)</td><td>Corticosteroids; calcineurin inhibitors; PDE-4 inhibitor; IL-4 receptor alpha/IL-13 receptor antagonists; JAK inhibitor</td></tr>
<tr><td><b>Psoriasis</b> (PP 28)</td><td>Corticosteroids; DNA synthesis inhibitors; dihydrofolate reductase inhibitor/T-cell and cytokine suppressors; T-cell inhibitors; TNF-alpha inhibitors; JAK inhibitors; IL-12 &amp; IL-13 inhibitors (as printed); IL-23 inhibitor; IL-17A inhibitor; nuclear receptor binders; psoralens; calcineurin inhibitors; cytotoxic agents</td></tr>
<tr><td><b>Acne</b> (PP 37)</td><td>Keratolytics; antibiotics; nuclear receptor binders; antiandrogens</td></tr>
</tbody></table>
<div class="gtell"><b>Classes on more than one list</b><ul><li>Corticosteroids and calcineurin inhibitors: AD and psoriasis. JAK inhibitors: AD and psoriasis. Nuclear receptor binders: psoriasis and acne (PP 17, 28, 37).</li><li>Only acne: keratolytics, antibiotics, antiandrogens. Only AD: PDE-4 inhibitor and IL-4R&alpha;/IL-13R antagonists on PP 17 (apremilast, a PDE-4 inhibitor, is taught for psoriasis on PCol 34).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-l1-classes">Reference: drug classes by disease</button><button type="button" class="chip" data-jump="ref:ref-l1-acnemap">Reference: acne pathology and drugs</button></div>
</section>

<section class="gobj" id="gobj-pp-5">
<h3>Skin Pathophysiology · Objective 5: general mechanisms of the drug classes</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the general mechanisms of actions of the drug classes used to treat these three conditions</b><i>PP 16, 27, 36</i></div>
<div class="gpt"><h5>Each pathology and the classes aimed at it</h5><ul>
<li>AD: TH2 cytokines drive IgE; &ldquo;some of our therapies antagonize these cytokines&rdquo; (PP 16): dupilumab blocks IL-4R&alpha;, shared by the IL-4 and IL-13 receptors (PCol 64). Corticosteroids and calcineurin inhibitors suppress the immune response (PCol 11, 27).</li>
<li>Psoriasis treatment rationale (PP 27): agents that modulate the abnormal immune response (topical corticosteroids, biologic response modifiers) and medications that affect cell turnover (retinoids); manage comorbidities; patient-specific; quality of life.</li>
<li>Acne (PP 36): P. acnes proliferation &rarr; benzoyl peroxide, topical/oral antibiotics, isotretinoin; abnormal keratinization &rarr; salicylic acid, benzoyl peroxide, topical retinoids, isotretinoin; inflammation &rarr; intralesional or oral corticosteroids, topical/oral antibiotics; abnormal sebum &rarr; antiandrogens, isotretinoin, topical/oral antibiotics, corticosteroids, estrogens.</li></ul></div>
<div class="gask"><b>Mechanism of each class</b><ul><li>The class-by-class mechanisms are in Skin Pharmacology, Objective 2, below.</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="guide:gobj-l1-4">Guide: general mechanism of each class</button><button type="button" class="chip" data-jump="ref:ref-l1-acnemap">Reference: acne pathology and drugs</button></div>
</section>

<h2 class="gdeck" id="gdeck-pc">Skin Pharmacology (Dr. Smith, 10/29, 10/30, 11/03)</h2>
<div class="gask"><b>Her Exam 1 hints (pasted by Louis, 2026-11-07)</b><ul><li>&ldquo;The drugs in each pharmacological class (know the drug table); The general mechanism of action for each drug class. This includes being able to explain why that MOA is good for treating the skin conditions it is indicated for.; The details of the MOAs differentiate the drugs within the class; ... Know Black Box warning adverse drug reactions&rdquo;.</li><li>&ldquo;Know what the drugs target.&rdquo; Fill-in-the-blanks focus on drug mechanisms. She asks with generic names only (10/29, T 618&ndash;621).</li></ul></div>

<section class="gobj" id="gobj-pc-1">
<h3>Skin Pharmacology · Objective 1: which medications treat AD, psoriasis and acne</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List which medications are used for treating atopic dermatitis, psoriasis, and acne</b><i>PCol 8&ndash;76; Sun 3; PP 17, 28, 37</i></div>
<table class="reftab"><thead><tr><th style="width:14%">Disease</th><th>Her slide names the disease for the drug</th><th style="width:34%">Her class list names the class; the drug's use is not on her slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b></td><td>Topical corticosteroids (PCol 11); pimecrolimus, tacrolimus topical, adults and children over 2 (PCol 27); crisaborole topical (PCol 33); dupilumab, adults with moderate-to-severe AD not adequately controlled with topical therapies (PCol 64)</td><td>JAK inhibitor (PP 17): ruxolitinib and upadacitinib are on the drug chart's AD page (p. 2) and on Dr. Sikazwe's eczema page (DPAW 8); her PCol 76 gives their mechanisms only</td></tr>
<tr><td><b>Psoriasis</b></td><td>Corticosteroids (PCol 11); tazarotene (PCol 18); acitretin (PCol 20); calcipotriene (PCol 21); cyclosporine oral (PCol 29); apremilast oral (PCol 34); antipsoriatic cytotoxic agents: coal tar, anthralin, shale tar, selenium sulfide, zinc pyrithione (PCol 52&ndash;57); methotrexate (PCol 59); IL-17 inhibitors secukinumab, ixekizumab, brodalumab (PCol 65&ndash;66); risankizumab, moderate to severe plaque psoriasis (PCol 69); methoxsalen with UVA (Sun 3; audio 00:29&ndash;01:20)</td><td>Plaques named, disease not: ustekinumab (PCol 67) and the TNF-&alpha; inhibitors etanercept, infliximab, adalimumab, golimumab, certolizumab pegol (PCol 70) reduce the number and size of plaques. Class on PP 28, drug on the chart's psoriasis pages (pp. 4&ndash;5): guselkumab, tildrakizumab-asmn (IL-23 inhibitor), tofacitinib (JAK inhibitors). Abatacept: co-stimulation mechanism on PCol 63, listed on the chart's psoriasis pages</td></tr>
<tr><td><b>Acne</b></td><td>Tretinoin, adapalene, tazarotene topical (PCol 16&ndash;18); isotretinoin oral, severe cystic acne recalcitrant to standard therapies (PCol 19); benzoyl peroxide, sulfur, salicylic acid (PCol 36&ndash;39); sarecycline, minocycline, doxycycline (PCol 43&ndash;45); clindamycin (PCol 46); erythromycin, azithromycin (PCol 47); dapsone topical gel (PCol 50)</td><td>Antiandrogen (PP 37): spironolactone is on the chart's acne page (p. 3). Trimethoprim/sulfamethoxazole: mechanism only on PCol 48&ndash;49; chart p. 3</td></tr>
<tr><td><b>Other uses on her slides</b></td><td>Metronidazole: rosacea (PCol 51). Shale tar: also eczema, rosacea, acute otitis (PCol 57). Tazarotene: also wrinkles (PCol 18)</td><td>&mdash;</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="drugs:">Drug list: every chart drug as a card</button><button type="button" class="chip" data-jump="ref:ref-targets">Reference: drug targets, write it first</button></div>
</section>

<section class="gobj" id="gobj-l1-4">
<h3>Skin Pharmacology · Objective 2: general mechanism of each class, and why it helps</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>Explain the general mechanisms of action of each pharmacological drug class</b><i>PCol 5&ndash;76; Sun 3</i></div>
<div class="gpt"><h5>Nuclear receptor binders (PCol 5&ndash;7): corticosteroids, retinoids, vitamin D analog</h5><ul><li>The drug binds a receptor inside the cell; the complex acts directly at a response element or indirectly by binding NF-kB or AP-1, to promote or inhibit transcription.</li><li>(T) &ldquo;either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins&rdquo; (T 680&ndash;683).</li></ul></div>
<div class="gpt"><h5><b>Corticosteroids</b> · PCol 8&ndash;11</h5><ul><li><b>Target, mechanism:</b> Glucocorticoid receptor; CBG carries the steroid in blood; Hsp90 leaves the receptor when the steroid binds; the complex binds the GRE</li><li><b>Why it helps:</b> Immunosuppressive, so used for psoriasis and AD (PCol 11; T 873&ndash;875). Low potency (hydrocortisone 1%) for the face and for long-term maintenance; medium potency (betamethasone valerate 0.1%) for the body; mid-strength to high potency for short-term exacerbations; avoid occluded or abraded skin</li></ul></div>
<!--DIA:nr-action-->
<div class="gpt"><h5><b>Retinoids</b> (tretinoin, adapalene, tazarotene, isotretinoin, acitretin) · PCol 14&ndash;15, 19</h5><ul><li><b>Target, mechanism:</b> RAR: predominantly differentiation and proliferation (acne, psoriasis, photoaging); RXR: predominantly apoptosis (Kaposi sarcoma)</li><li><b>Why it helps:</b> Acne: less cohesion between epidermal cells, faster turnover; open comedones expelled, closed ones opened. Psoriasis: precise mechanism unknown, may be anti-inflammatory and antiproliferative. Aging: more collagen, new vessels, thicker epidermis. Isotretinoin: appears to inhibit sebaceous gland size and function (PCol 19)</li></ul></div>
<!--DIA:nr-rar-->
<div class="gpt"><h5><b>Vitamin D analog</b> (calcipotriene) · PCol 21</h5><ul><li><b>Target, mechanism:</b> Vitamin D receptor, which pairs with RXR-&alpha;</li><li><b>Why it helps:</b> Inhibits proliferation, promotes keratinocyte differentiation, decreases inflammatory cytokine release (psoriasis)</li></ul></div>
<!--DIA:nr-vdr-->
<div class="gpt"><h5><b>Calcineurin inhibitors</b> (pimecrolimus, tacrolimus, cyclosporine) · PCol 24&ndash;27</h5><ul><li><b>Target, mechanism:</b> Cyclosporine binds cyclophilin, tacrolimus binds FKBP; the complex inhibits calcineurin, so less IL-2 is made for T-cell proliferation (in the cascade after signals 1 and 2)</li><li><b>Why it helps:</b> Inhibits activation of T cells and mast cells, blocking proinflammatory cytokines and mediators; topical CNIs relieve pruritus after the first few days of treatment (PCol 27)</li><li><b>Uses of the class:</b> &ldquo;used to treat atopic dermatitis, psoriasis&rdquo; (Dr. Smith, PCol 24). The slide gives this for the class; the drug chart lists each drug&rsquo;s own indication.</li></ul></div>
<div class="f2fig" id="fig-cni-nfat"><!--DIA:fig-cni-nfat--></div>
<div class="gpt"><h5><b>PDE-4 inhibitors</b> (crisaborole, apremilast) · PCol 32&ndash;34</h5><ul><li><b>Target, mechanism:</b> PDE-4, the main PDE isoform in inflammatory cells; cAMP is not broken down</li><li><b>Why it helps:</b> More cAMP inhibits mast cells, eosinophils, neutrophils and T cells (AD: crisaborole; psoriasis: apremilast)</li></ul></div>
<div id="g-fig-pde4-camp"><!--DIA:fig-pde4-camp--></div>
<div class="gpt"><h5><b>Keratolytics</b> (benzoyl peroxide, sulfur, salicylic acid) · PCol 35&ndash;39</h5><ul><li><b>Target, mechanism:</b> BPO: postulated mechanism: antimicrobial against P. acnes plus peeling and comedolytic effects (benzoic acid probable active form). Sulfur: reduced to hydrogen sulfide in keratinocytes; bacteriostatic. Salicylic acid: may solubilize the cell surface proteins that hold the stratum corneum together</li><li><b>Why it helps:</b> Break down keratin so cells slough, follicles stay open, plugs clear (acne)</li></ul></div>
<div class="gpt"><h5><b>Antibiotics/antimicrobials</b> · PCol 42&ndash;50</h5><ul><li><b>Target, mechanism:</b> Tetracyclines: 30S, block aminoacyl-tRNA at the acceptor site. Clindamycin, macrolides: 50S, prevent translocation. All bacteriostatic. Sulfamethoxazole competes with PABA; trimethoprim inhibits bacterial DHFR. Dapsone (acne): anti-inflammatory, neutrophils a possible site</li><li><b>Why it helps:</b> A bacterium (P. acnes) contributes to acne (10/30 T 574&ndash;576); tetracycline efficacy in acne may depend more on anti-inflammatory activity (PCol 45)</li></ul></div>
<div id="g-fig-ribosome"><!--DIA:fig-ribosome--></div>
<div id="g-fig-folate-path"><!--DIA:fig-folate-path--></div>
<div class="gpt"><h5><b>Cytotoxic agents</b> (coal tar, anthralin, shale tar, selenium sulfide, zinc pyrithione) · PCol 53&ndash;57</h5><ul><li><b>Target, mechanism:</b> Coal tar: antiproliferative, anti-inflammatory, crosslinks DNA to inhibit cell division (mechanism not fully known). Anthralin: may act on keratinocyte mitochondria; prevents T-lymphocyte activation. Shale tar: unknown. Selenium sulfide, zinc pyrithione: cytostatic and antifungal</li><li><b>Why it helps:</b> Decrease the rate of epidermal cell turnover (psoriasis)</li></ul></div>
<div class="gpt"><h5><b>DHFR inhibitor</b> (methotrexate) · PCol 59</h5><ul><li><b>Target, mechanism:</b> Folic acid analog; inhibits DHFR, so less THF and fewer purines; cell death; may be directly anti-inflammatory</li><li><b>Why it helps:</b> Reduces keratinocyte hyperproliferation and the number of T cells (psoriasis)</li></ul></div>
<div id="g-fig-folate-cycle"><!--DIA:fig-folate-cycle--></div>
<div class="gpt"><h5><b>Co-stimulation inhibitor</b> (abatacept) · PCol 63</h5><ul><li><b>Target, mechanism:</b> Fusion protein (CTLA-4 domain + IgG Fc) binds CD80/86 on APCs, so CD28 cannot bind</li><li><b>Why it helps:</b> Blocks the positive second signal needed for T-cell activation</li></ul></div>
<div id="g-fig-costim"><!--DIA:fig-costim--></div>
<div class="gpt"><h5><b>IL-4R&alpha; antagonist</b> (dupilumab) · PCol 64</h5><ul><li><b>Target, mechanism:</b> IL-4 receptor alpha subunit, shared by the IL-4 and IL-13 receptors</li><li><b>Why it helps:</b> IL-4 and IL-13 promote IgE synthesis; blocking lowers proinflammatory cytokines, chemokines and IgE (AD)</li></ul></div>
<div class="gpt"><h5><b>IL-17 inhibitors</b> (secukinumab, ixekizumab, brodalumab) · PCol 65&ndash;66</h5><ul><li><b>Target, mechanism:</b> Secukinumab, ixekizumab: IL-17A cytokine. Brodalumab: IL-17 receptor A</li><li><b>Why it helps:</b> Keratinocytes are the main IL-17 target in psoriasis (hyperproliferation, barrier dysfunction); blocking reduces number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>IL-12/23 and IL-23 inhibitors</b> (ustekinumab; guselkumab, tildrakizumab-asmn, risankizumab) · PCol 67&ndash;69</h5><ul><li><b>Target, mechanism:</b> Ustekinumab: p40, shared by IL-12 and IL-23. The others: p19 of IL-23</li><li><b>Why it helps:</b> Ustekinumab: suppresses formation of proinflammatory Th1 and Th17 cells. Guselkumab, tildrakizumab-asmn, risankizumab: inhibit the release of proinflammatory cytokines and chemokines</li></ul></div>
<div class="f2fig" id="fig-il-axis"><!--DIA:fig-il-axis--></div>
<div class="gpt"><h5><b>TNF-&alpha; inhibitors</b> (etanercept, infliximab, adalimumab, golimumab, certolizumab pegol) · PCol 70&ndash;74</h5><ul><li><b>Target, mechanism:</b> Bind TNF-&alpha;, keeping it from its receptors on inflammatory cells</li><li><b>Why it helps:</b> TNF-&alpha; is an inflammatory cytokine; blocking it reduces the number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>JAK inhibitors</b> (tofacitinib, ruxolitinib, upadacitinib) · PCol 75&ndash;76</h5><ul><li><b>Target, mechanism:</b> Inhibit Janus kinase; small molecules that get inside the cell (T 570&ndash;573)</li><li><b>Why it helps:</b> Inhibit the production of inflammatory cytokines</li></ul></div>
<div class="gpt"><h5><b>Psoralens</b> (methoxsalen + UVA) · Sun 3; PCol 78</h5><ul><li><b>Target, mechanism:</b> With UV light of 320&ndash;340 nm, psoralens intercalate into DNA</li><li><b>Why it helps:</b> Through incompletely understood mechanisms the phototoxic reactions are antiproliferative, immunosuppressive and anti-inflammatory (normalizes keratinocytes, reorganizes blood vessels, cytotoxic to T cells) and stimulate melanocytes (increases melanin)</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-targets">Reference: drug targets, write it first</button><button type="button" class="chip" data-jump="tell:tell-l1-drugs">Tell apart: nuclear receptor binders</button></div>
</section>

<section class="gobj" id="gobj-pc-3">
<h3>Skin Pharmacology · Objective 3: differences between drugs in the same class</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>Explain the differences between the drugs within the same class</b><i>PCol 16&ndash;76</i></div>
<table class="reftab"><thead><tr><th style="width:17%">Class</th><th>What separates the drugs</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Topical retinoids</b></td><td>Tretinoin: &lt;10% absorbed; microsphere form may be less irritating for sensitive patients. Adapalene: photochemically stable, can be combined with benzoyl peroxide, less irritating, mild to moderate acne. Tazarotene: psoriasis, mild to moderately severe facial acne and wrinkles; photosensitivity; not in pregnancy</td><td>PCol 17&ndash;18</td></tr>
<tr><td><b>Oral retinoids</b></td><td>Isotretinoin: severe cystic acne recalcitrant to standard therapies, lipid changes, skeletal hyperostosis in children, iPLEDGE (men too). Acitretin: psoriasis, especially pustular forms, hepatotoxicity, half-life of months, no ethanol for 2 months, no blood donation or pregnancy for 3 years</td><td>PCol 19&ndash;20</td></tr>
<tr><td><b>Calcineurin inhibitors</b></td><td>Pimecrolimus may preferentially distribute to the skin rather than the systemic circulation (PCol 27); Dr. Sikazwe adds higher skin protein binding than tacrolimus (DPAW 28). Cyclosporine binds cyclophilin, tacrolimus FKBP. Cyclosporine only: gingival hyperplasia; tacrolimus only: neuropathies. Cyclosporine's Neoral (microemulsion) and Sandimmune are not bioequivalent and not interchangeable</td><td>PCol 26&ndash;30</td></tr>
<tr><td><b>PDE-4 inhibitors</b></td><td>Crisaborole: topical 2% ointment, mild to moderate AD, 2 years and older. Apremilast: oral, psoriasis, GI effects, headache, weight loss, caution in depression</td><td>PCol 33&ndash;34</td></tr>
<tr><td><b>Keratolytics</b></td><td>BPO: antimicrobial and comedolytic, sensitizer, bleaches. Sulfur: bacteriostatic, hydrogen sulfide, comedogenic, odor. Salicylic acid: 3&ndash;6% for dandruff, acne and psoriasis, 6% may cause skin damage, up to 40% for warts and corns</td><td>PCol 36&ndash;40</td></tr>
<tr><td><b>Antibiotics</b></td><td>Tetracyclines 30S; clindamycin and macrolides 50S. Doxycycline and minocycline more lipid soluble; minocycline and sarecycline may be less photosensitizing; sarecycline narrower spectrum; minocycline ototoxicity. Clindamycin: water-based gel or lotion better tolerated; metronidazole: gel more drying, cream or lotion better tolerated</td><td>PCol 43&ndash;51</td></tr>
<tr><td><b>Cytotoxic agents</b></td><td>Coal tar photosensitizing and carcinogenic; shale tar not photosensitizing and less irritating; anthralin stains and has no systemic effects; selenium sulfide and zinc pyrithione cytostatic and antifungal</td><td>PCol 53&ndash;57</td></tr>
<tr><td><b>IL-17, IL-12/23, IL-23</b></td><td>Secukinumab (human) and ixekizumab (humanized) bind IL-17A; brodalumab binds the receptor. Ustekinumab binds p40 (IL-12 and IL-23); guselkumab (human), tildrakizumab-asmn and risankizumab (humanized) bind p19</td><td>PCol 66&ndash;69</td></tr>
<tr><td><b>TNF-&alpha; inhibitors</b></td><td>Etanercept: two p75 TNF receptors + IgG1 Fc. Infliximab: chimeric, IV, anti-drug antibodies, infusion reactions, lupus-like syndrome. Adalimumab: human, SubQ, less antigenic. Golimumab: human. Certolizumab pegol: pegylated Fab, every 2 weeks, may extend to 4 after 3 doses</td><td>PCol 71&ndash;74</td></tr>
<tr><td><b>JAK inhibitors</b></td><td>Tofacitinib: oral, boxed warning. Ruxolitinib: JAK1 and JAK2, topical and oral. Upadacitinib: more potent at JAK1 and JAK2 than JAK3 and TYK2 in an enzyme assay; selectivity unsettled</td><td>PCol 76</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-l2">Tell apart: Smith 10/30</button><button type="button" class="chip" data-jump="tell:tell-l3">Tell apart: Smith 11/03</button></div>
</section>

<section class="gobj" id="gobj-pc-4">
<h3>Skin Pharmacology · Objective 4: drug interactions discussed in class</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List the drug interactions discussed in class</b><i>PCol 18, 20, 22, 30, 34, 40, 47, 67; 10/30 T 470&ndash;472, 557&ndash;563</i></div>
<table class="reftab"><thead><tr><th style="width:22%">Drug</th><th>Interaction</th><th style="width:12%">Slide</th></tr></thead><tbody>
<tr><td><b>Cyclosporine, tacrolimus</b> (oral)</td><td>Multiple drug interactions because they are metabolized by CYP3A4</td><td>PCol 30</td></tr>
<tr><td><b>Apremilast</b></td><td>Metabolized by CYP3A4: patients should not also be on CYP3A4 enzyme inducers, which lower its effect</td><td>PCol 34; 10/30 T 470&ndash;472</td></tr>
<tr><td><b>Erythromycin, azithromycin</b></td><td>Orally, many drug interactions. Topically, burning and drying, especially when combined with benzoyl peroxide</td><td>PCol 47</td></tr>
<tr><td><b>Adapalene + benzoyl peroxide</b></td><td>Adapalene can be combined with benzoyl peroxide; the other retinoids are &ldquo;way too irritating&rdquo; with it</td><td>PCol 18; 10/30 T 72&ndash;73</td></tr>
<tr><td><b>Salicylic acid</b></td><td>Salicylism (a salicylate overdose, PCol 40): other topical salicylates, such as a salicylate muscle rub, add to the salicylate absorbed (10/30 T 557&ndash;563)</td><td>PCol 40; 10/30 T 557&ndash;563</td></tr>
<tr><td><b>Calcipotriene + topical steroid</b></td><td>The steroid reduces calcipotriene's irritation</td><td>PCol 22</td></tr>
<tr><td><b>Acitretin + ethanol</b></td><td>Ethanol must be strictly avoided during treatment and for 2 months after</td><td>PCol 20</td></tr>
<tr><td><b>Ustekinumab + live vaccines</b></td><td>Live vaccines are not given with it: stop at least 15 weeks before a live vaccine; resume at least 2 weeks after</td><td>PCol 67</td></tr>
<tr><td><b>Ustekinumab + allergy immunotherapy</b></td><td>Caution in patients receiving allergy immunotherapy (serious allergic reactions are a side effect)</td><td>PCol 67</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-smith-safety">Tell apart: boxed warnings, pregnancy, interactions</button><button type="button" class="chip" data-jump="guide:gobj-mc-ddi">Guide: interactions Dr. Sikazwe named</button></div>
</section>

<section class="gobj" id="gobj-pc-5">
<h3>Skin Pharmacology · Objective 5: side effects, contraindications and boxed warnings</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List the side effects and contraindications discussed in class</b><i>PCol 12&ndash;76; Sun 4</i></div>
<h4>Boxed (black box) warnings on her slides</h4>
<table class="reftab"><thead><tr><th style="width:22%">Drug or class</th><th>Boxed warning</th><th style="width:12%">Slide</th></tr></thead><tbody>
<tr><td><b>Oral calcineurin inhibitors</b> (cyclosporine; tacrolimus)</td><td>Increased risk of lymphoma and other malignancies, particularly of the skin; increased susceptibility to bacterial, viral, fungal and protozoal infections, including opportunistic infection</td><td>PCol 30</td></tr>
<tr><td><b>TNF-&alpha; inhibitors</b> (all five)</td><td>Serious infections that may lead to hospitalization or death; lymphoma and other malignancies, some fatal, reported in children and adolescents</td><td>PCol 70; T 498&ndash;500</td></tr>
<tr><td><b>Tofacitinib</b></td><td>Severe infection, lymphoma and other malignancies; also caution in patients at high risk for GI perforation</td><td>PCol 76</td></tr>
</tbody></table>
<h4>Side effects and contraindications by drug</h4>
<div class="gpt"><ul>
<li><b>Topical corticosteroids</b> (PCol 11&ndash;12): Local: striae, atrophy, perioral dermatitis, acne, rosacea, telangiectasia, purpura, hypertrichosis, allergic contact dermatitis. Systemic: HPA suppression, infection, hyperglycemia, cataracts, glaucoma, growth retardation; possible even with low potency (T 861&ndash;865). <i>Cautions:</i> Avoid occluded or abraded skin; low potency (hydrocortisone 1%) for the face, medium potency (betamethasone valerate 0.1%) for the body, low potency for long maintenance (PCol 11).</li>
<li><b>Topical retinoids</b> (PCol 16, 18): Erythema and dryness early; photosensitivity; comedones may flare in weeks 4&ndash;6; may raise the tumorigenic potential of UV. <i>Cautions:</i> Apply to dry skin; avoid corners of nose, eyes, mouth and mucous membranes; sun protection. Tazarotene: not in pregnancy, contraceptive counseling.</li>
<li><b>Isotretinoin</b> (PCol 19): Common: dryness and itching of skin and mucous membranes, lipid abnormalities. Less common, reversible when the drug is stopped: headache, corneal opacities, pseudotumor cerebri, inflammatory bowel disease, anorexia, alopecia, muscle and joint pain. Skeletal hyperostosis possible in children. <i>Cautions:</i> Teratogen; iPLEDGE, men enrolled too (T 130&ndash;132).</li>
<li><b>Acitretin</b> (PCol 20): Hepatotoxicity, with fatal hepatitis. <i>Cautions:</i> Teratogenic: no pregnancy during treatment or for 3 years after; no blood donation for 3 years; no ethanol for 2 months.</li>
<li><b>Calcipotriene</b> (PCol 22): Burning, itching, atrophy, hyperpigmentation, folliculitis, mild photosensitivity; hypercalcemia and hypercalciuria may develop when the cumulative weekly dose exceeds the 100 g/week limit; resolves within days of stopping.</li>
<li><b>Topical pimecrolimus, tacrolimus</b> (PCol 27&ndash;28): Burning at the site; potential local skin carcinogenesis; infection if blood levels get high. <i>Cautions:</i> Over 2 years of age; sun protection.</li>
<li><b>Oral cyclosporine, tacrolimus</b> (PCol 29&ndash;30): Nephrotoxicity, hypertension, upper respiratory infections (most common), cough, headache; cyclosporine gingival hyperplasia; tacrolimus neuropathies. <i>Cautions:</i> Boxed warning (above); blood levels to prevent toxicity.</li>
<li><b>Crisaborole</b> (PCol 33): Application-site pain 4%; hypersensitivity &lt;1%. <i>Cautions:</i> Stop at once for hypersensitivity; 2 years and older.</li>
<li><b>Apremilast</b> (PCol 34): Diarrhea, nausea, headache, weight loss. <i>Cautions:</i> Use cautiously in depression.</li>
<li><b>Benzoyl peroxide</b> (PCol 36&ndash;37): Irritation; potent contact sensitizer; bleaches hair and fabric. <i>Cautions:</i> Avoid eyes and mucous membranes.</li>
<li><b>Sulfur</b> (PCol 38): Irritation, comedogenic, odor.</li>
<li><b>Salicylic acid</b> (PCol 39&ndash;40): Irritation and inflammation of normal skin; ulceration at high concentrations; allergic urticaria, anaphylaxis, erythema; salicylism, a salicylate overdose, to which other topical salicylates add (10/30 T 557&ndash;563); 6% may cause skin damage. <i>Cautions:</i> Caution on extremities in diabetes or peripheral vascular disease.</li>
<li><b>Tetracyclines</b> (PCol 44&ndash;45): N/V/D, pseudomembranous colitis (stop if blood in stool), discolored teeth and bones in the young, photosensitivity in fair-skinned people, superinfection; minocycline ototoxicity. <i>Cautions:</i> Not in pregnancy or under 8 years.</li>
<li><b>Clindamycin</b> (PCol 46): Pseudomembranous colitis, impaired liver function; about 10% absorbed topically; resistance.</li>
<li><b>Macrolides</b> (PCol 47): Oral N/V/D, epigastric pain; topical burning and drying; resistance.</li>
<li><b>Coal tar</b> (PCol 54): Photosensitizing, carcinogenic. <i>Cautions:</i> Avoid even low concentrations in acute dermatitis with vesiculation or oozing; use in pregnancy not studied.</li>
<li><b>Anthralin</b> (PCol 56): Irritation, severe conjunctivitis, staining of skin, hair and clothes; no systemic effects. <i>Cautions:</i> Caution, if at all, on face and intertriginous areas.</li>
<li><b>Methotrexate</b> (PCol 61): Cumulative liver toxicity (most significant); nausea, pulmonary toxicity, myelosuppression, megaloblastic anemia, lymphoma, pancytopenia (rare). <i>Cautions:</i> Abortifacient and teratogenic; separate counting tray and gloves.</li>
<li><b>Dupilumab</b> (PCol 64): Nasopharyngitis, headache; eye effects can be dose limiting, and some patients stop the drug for them (11/03 T 385&ndash;389).</li>
<li><b>Secukinumab</b> (PCol 66): Infection, nasopharyngitis about 12% (PCol 66); can exacerbate Crohn's disease (11/03 T 414&ndash;415). <i>Cautions:</i> Evaluate for tuberculosis first.</li>
<li><b>Ustekinumab</b> (PCol 67): Upper respiratory infection most common; serious infection; malignancy; posterior leukoencephalopathy. <i>Cautions:</i> Serious allergic reactions, including angioedema and anaphylaxis (PCol 67): the patient cannot receive it again (11/03 T 455&ndash;456); caution with allergy immunotherapy; TB evaluation; live vaccines (Objective 4).</li>
<li><b>Risankizumab</b> (PCol 69): Severe infection, TB reactivation, skin cancer (less common).</li>
<li><b>Etanercept, infliximab, adalimumab, certolizumab</b> (PCol 71&ndash;74): Etanercept: injection site, case reports of pancytopenia and demyelination. Infliximab: anti-drug antibodies, infusion reactions, lupus-like syndrome. Adalimumab: injection site, infection. Certolizumab: URTI, rash, UTI. <i>Cautions:</i> Class boxed warning (above).</li>
<li><b>Methoxsalen (PUVA)</b> (Sun 4; PCol 79): Pruritus, nausea, erythema and blistering, hyperpigmentation, skin aging, skin cancer, cataracts.</li>
</ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-l2">Reference: Smith 10/30 drugs</button><button type="button" class="chip" data-jump="ref:ref-l3">Reference: Smith 11/03 drugs</button><button type="button" class="chip" data-jump="tell:tell-smith-safety">Tell apart: boxed warnings, pregnancy, interactions</button></div>
</section>

<h2 class="gdeck" id="gdeck-sun">Sun Exposure and Psoralens (Dr. Smith, recorded lecture)</h2>
<p class="prose">Objectives on Sun 6: describe the types of ultraviolet radiation; categorize sunscreens and sunblocks into pharmacological or therapeutic classes; differentiate the mechanisms of action of products for protection from sunburn; define MED, SPF and substantivity; differentiate sunblocks and sunscreens. The psoralen slides (Sun 2&ndash;4) repeat PCol 77&ndash;79.</p>

<section class="gobj" id="gobj-sun-pso">
<h3>Sun Exposure · Psoralen chromophores (Sun 2&ndash;4)</h3>
<div class="gbar"><span>Slides</span><b>Methoxsalen: mechanism, effects and side effects</b><i>Sun 3&ndash;4; PCol 78&ndash;79</i></div>
<div class="gpt"><ul>
<li>PUVA combines UVA light with a psoralen; with UV light of 320&ndash;340 nm the psoralen intercalates into DNA, so cells can no longer divide (Sun 3; audio 00:29&ndash;01:20).</li>
<li>Effects: normalizes the number and arrangement of keratinocytes; reorganizes cutaneous blood vessels; cytotoxic to T cells; increases melanin pigmentation (used for uneven pigmentation, not for psoriasis; audio 01:47&ndash;02:10) (Sun 3).</li>
<li>Side effects: pruritus, nausea, erythema and blistering, hyperpigmentation, increased skin aging, increased skin cancer risk, cataracts (Sun 4).</li></ul></div>
</section>

<section class="gobj" id="gobj-sun-1">
<h3>Sun Exposure · Objective 1: types of ultraviolet radiation</h3>
<div class="gbar"><span>Objective (Sun 6)</span><b>Describe the types of ultraviolet radiation</b><i>Sun 7&ndash;11</i></div>
<table class="reftab"><thead><tr><th style="width:20%"></th><th>UVB</th><th>UVA</th></tr></thead><tbody>
<tr><td><b>Wavelength</b></td><td>290&ndash;320 nm; more energetic</td><td>320&ndash;400 nm; less energetic</td></tr>
<tr><td><b>Dr. Sikazwe&rsquo;s numbers</b></td><td>280&ndash;315 nm (DPAW 12, 63)</td><td>315 (or 320)&ndash;400 nm (DPAW 12, 18, 62; 11/03 T 817&ndash;818). Each professor&rsquo;s numbers are keyed in his or her own questions</td></tr>
<tr><td><b>Ozone and glass</b></td><td>About 90% filtered by ozone; does not pass glass</td><td>Minimally filtered; passes glass</td></tr>
<tr><td><b>Depth</b></td><td>&mdash;</td><td>Penetrates further into the dermis</td></tr>
<tr><td><b>Damage</b></td><td>Sunburn; may cause photoaging, immunosuppression, skin cancers (both bands); greatest intensity 10:00 am to 4:00 pm</td><td>Most phototoxic reactions with drugs and chemicals; photoaging, immunosuppression, skin cancers</td></tr>
<tr><td><b>Other</b></td><td>Produces vitamin D3 in the skin</td><td>Tanning: immediate pigmentation 5&ndash;10 minutes after exposure, lasts 24&ndash;48 h; delayed pigmentation after 48&ndash;72 h, peaks at 7&ndash;10 days (Sun 10)</td></tr>
</tbody></table>
<div class="gpt"><ul>
<li>Risk factors: the UV index, which rates the amount of UV rays reaching the earth&rsquo;s surface at a given time and place (the higher, the greater the exposure; it depends on time of day, season, altitude and latitude, ozone and land cover), skin melanin, the product's SPF, cumulative exposure; one severe sunburn before age 18 doubles the lifetime risk of skin cancers (Sun 7).</li>
<li>Sunburn: an acute inflammatory reaction (endothelial swelling, red cells leaking from capillaries; histamine, cytokines, prostaglandins); symptoms are mild erythema, tenderness and edema; reddening peaks at 12&ndash;24 h, then melanogenesis gives a tan over 2&ndash;3 days. A severe sunburn is a second-degree burn with blisters and can bring fever, chills, weakness and shock (Sun 11).</li>
<li>A deeper tan does not protect the skin from sun damage (audio 07:09&ndash;07:30).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-sun">Tell apart: sun protection</button></div>
</section>

<section class="gobj" id="gobj-sun-4">
<h3>Sun Exposure · Objective 4: MED, SPF, broad spectrum and substantivity</h3>
<div class="gbar"><span>Objective (Sun 6)</span><b>Define MED, SPF and substantivity</b><i>Sun 12&ndash;17, 19</i></div>
<div class="gpt"><ul>
<li><b>MED</b>: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site (Sun 12).</li>
<li><b>SPF</b>: the ratio of the dose of sunlight that produces sunburn with the sunscreen to the dose that does without it. The higher the SPF, the less likely a burn and the longer the time in the sun. SPF is primarily a measure of UVB protection and says nothing about UVA (Sun 13).</li>
<li>SPF 15 blocks about 93% of UVB, SPF 30 about 97%, SPF 50 about 98% (Sun 15).</li>
<li><b>Broad spectrum</b>: UVA protection is tested by the critical wavelength method; a CW of 370 nm or more may be labeled &ldquo;broad spectrum&rdquo;; broad spectrum with SPF 15 or more may claim it &ldquo;decreases risk of skin cancer and early aging caused by the sun&rdquo; (Sun 14).</li>
<li>Selection: skin types I&ndash;II, SPF &gt; 30; lupus, SPF &gt; 40; photosensitizing drugs, SPF &gt; 45; skin types III&ndash;V, SPF 15&ndash;24. Apply the correct amount at the correct time; reapply every 90&ndash;120 minutes; adding a higher SPF after 1 MED does not help much (Sun 16&ndash;17).</li>
<li><b>Substantivity</b>: how well a sunscreen adheres and stays after water and sweat. Oils best (unpleasant); alcohols worst; creams better than alcohol bases; polyacrylamide bases good. Choose waterproof, water-resistant or sweat-resistant products (Sun 19).</li></ul></div>
<div class="f2fig" id="fig-spf"><!--DIA:fig-spf--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-sun">Reference: SPF, skin types, substantivity</button><button type="button" class="chip" data-jump="tell:tell-sun">Tell apart: sun protection</button></div>
</section>

<section class="gobj" id="gobj-sun-2">
<h3>Sun Exposure · Objectives 2, 3 and 5: sunblocks vs sunscreens, classes and mechanisms</h3>
<div class="gbar"><span>Objectives (Sun 6)</span><b>Categorize sunscreens and sunblocks; differentiate their mechanisms; differentiate sunblocks and sunscreens</b><i>Sun 20&ndash;25</i></div>
<table class="reftab"><thead><tr><th style="width:20%"></th><th>Sunblocks (physical sunscreens)</th><th>Organic sunscreens</th></tr></thead><tbody>
<tr><td><b>Ingredients</b></td><td>Zinc oxide, titanium dioxide (UVA and UVB)</td><td>Families: benzophenones, anthranilates, dibenzoylmethanes, aminobenzoates, cinnamates, salicylates; products may combine them</td></tr>
<tr><td><b>Mechanism</b></td><td>Inorganic particles scatter or reflect visible, UV and infrared radiation</td><td>Organic compounds absorb UVB and/or UVA and convert it to heat</td></tr>
<tr><td><b>Use and notes</b></td><td>Prominent areas (nose, ears) and where sun exposure cannot be limited; microsize and nanosize forms less opaque; not easily washed off but melt in hot sun; protection falls after 2 hours of direct sun</td><td>&mdash;</td></tr>
<tr><td><b>Side effects</b></td><td>May occlude pores (miliaria, folliculitis, acne); may stain clothing; less likely to irritate</td><td>Most have been linked to skin reactions; risk higher with PABA, avobenzone and oxybenzone</td></tr>
</tbody></table>
<div class="f2fig" id="fig-block-vs-screen"><!--DIA:fig-block-vs-screen--></div>
<div class="gpt"><h5>One point per sunscreen family (Sun 24)</h5><ul>
<li>Benzophenones: poor substantivity; can cause sensitization.</li>
<li>Anthranilates: only in combination products, for broad UV coverage.</li>
<li>Dibenzoylmethanes: activity starts to fall after 15 minutes.</li>
<li>Aminobenzoates: most effective UVB absorbers; may stain clothing.</li>
<li>Cinnamates: adhere poorly; depend on the vehicle for substantivity.</li>
<li>Salicylates: adhere poorly; easily removed by water or sweat.</li></ul></div>
<div class="gpt"><h5>Safety (Sun 25)</h5><ul><li>Reactions: irritant, allergic, phototoxic, photoallergic; rash, vesicles, hives or an exaggerated sunburn: refer.</li><li>Studies found plasma levels above the FDA threshold of 0.5 ng/mL; implications not yet known.</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:tgt-padimate">Reference: sunscreen ingredients and their families</button><button type="button" class="chip" data-jump="atlas:at-b-sunscreens">Atlas: sunblocks and sunscreens</button></div>
</section>

<section class="gobj" id="gobj-sun-photo">
<h3>Sun Exposure · Drugs that cause photosensitivity</h3>
<div class="gbar"><span>Slides</span><b>Photosensitizing drugs and sun protection</b><i>Sun 8, 17&ndash;18</i></div>
<div class="gpt"><ul>
<li>Sun 18 shows an APhA table of drug categories linked to photosensitivity; patients on such drugs need sun protection counseling (audio 17:27&ndash;17:48) and SPF &gt; 45 (Sun 17). UVA causes most drug phototoxic reactions (Sun 8).</li>
<li>Photosensitizing drugs on her pharmacology slides: tazarotene (PCol 18); topical retinoids (PCol 16); tetracyclines, with minocycline and sarecycline possibly less (PCol 44&ndash;45); coal tar (PCol 54); calcipotriene, mild (PCol 22); psoralens (Sun 3).</li>
<li>Sun protection counseled for other reasons: adapalene is sun stable, but peeling still raises sunburn risk (10/30 T 122&ndash;130); topical pimecrolimus and tacrolimus carry a potential for local skin cancer (PCol 28). Shale tar is not photosensitizing (PCol 57).</li></ul></div>
</section>

<h2 class="gdeck" id="gdeck-mc">Dermatology Medicinal Chemistry (Dr. Sikazwe, DPAW, 11/03&ndash;11/04)</h2>

<section class="gobj" id="gobj-mc-0">
<h3>Medicinal Chemistry · His objectives and the assigned pages</h3>
<div class="gbar"><span>Objectives (DPAW slide 3)</span><b>ASSESS: targets, drug classes. PLAN: CBDA, ADMET, functional groups and SAR, drug interactions</b><i>DPAW slide 3</i></div>
<div class="gpt"><ul>
<li>ASSESS: identify the therapeutic targets; identify, and pharmacologically and chemically classify, the drug classes and drugs (DPAW slide 3).</li>
<li>PLAN: the chemical and pharmacological basis of drug action (CBDA), indication and contraindication; ADMET and how it changes with patient factors; physicochemical properties, functional groups and SAR; drug interactions that may influence the plan (DPAW slide 3).</li>
<li>Assigned for Exam 1 (his list of 11/06): printed slides 7&ndash;9, 12, 15&ndash;22, 24&ndash;33, 42&ndash;54, 60&ndash;65, which are PDF pages 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55, 61&ndash;66. Here, as in the questions, slides are numbered by PDF page, so the assigned slides are 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55 and 61&ndash;66; the sections below follow them.</li></ul></div>
</section>

<section class="gobj" id="gobj-sk-1">
<h3>Dr. Sikazwe, assigned slides · crisaborole, the JAK inhibitors and Polleve-1</h3>
<div class="gbar"><span>Objective (DPAW 7, 8, 9)</span><b>For crisaborole he says &ldquo;maybe emphasize ADM and chemical basis of drug action&rdquo; (the slide says ADMET) and mechanisms of action are not asked; for the two JAK inhibitors he stresses local action from formulation, the half-lives, the shared CYP 3A4 and the active metabolites; slide 9 is a practice set</b><i>DPAW slide 7, 8, 9</i></div>
<div class="gpt g2-block"><h5>Crisaborole: a soft drug that loses its boron (DPAW slide 7) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Crisaborole is a benzoxaborole: a benzene ring fused to a five-membered ring that contains boron carrying an OH (B-OH), joined through an oxygen to a second benzene ring that carries a nitrile (NC). A soft drug is built to undergo predictable metabolism, so it is inactivated and leaves harmless; a hard drug does not undergo metabolism.</p>
<p class="g2-p"><b>Mechanism and ADMET.</b> PDE4 inhibition raises cAMP and lowers inflammatory cytokines. Log P = 3 (dermis accumulation); half-life 12 h; he adds that once-a-day application is possible <span class="g2-src">(11/03 T 697)</span>. The slide leaves a blank after &ldquo;Hydrolytic deboronation limits systemic exposure to&rdquo;; the recording does not fill it in.</p>
<p class="g2-p"><b>The drawing, step by step.</b> Crisaborole accumulates in skin <span class="g2-src">(11/03 T 699)</span>. The first arrow (?) is loss of the boron by hydrolysis with water in the skin, no enzyme, which gives the benzyl alcohol drawn next (a CH2OH group and a ring OH where the boron ring was). The second arrow (??) converts that alcohol to the benzoic acid, a carboxylic acid, in two enzyme steps. Phase 2 conjugates such as glucuronides can follow <span class="g2-src">(11/03 T 710)</span>.</p>
<p class="g2-p"><b>Chemical basis of drug action (CBDA).</b> In the PDE4 active site the boron coordinates two cations, zinc and magnesium. The slide labels His 238, His 274, Asp 275 and Asp 392 around them (J Med Chem 2021, 64(24)).</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So that now if I were to ask you what is a hard drug, a hard drug doesn't go what? Metabolism.&rdquo; <span class="g2-src">(11/03 T 668-669)</span></li>
<li>&ldquo;crishabo is designed to be a soft drug. What does soft drug mean? It means it has to be, uh, it has to, it's a drug that is designed to undergo predictable metabolism.&rdquo; <span class="g2-src">(11/03 T 664-666)</span> [he said 'crishabo': crisaborole]</li>
<li>&ldquo;That step is not enzymatic. Spontaneous, just in the presence of water in skin, it breaks up&rdquo; <span class="g2-src">(11/03 T 701-702)</span></li>
<li>&ldquo;How many enzymes are involved here? To give you carboxylic acid. How many enzymes? 2.&rdquo; <span class="g2-src">(11/03 T 706-707)</span></li>
<li>&ldquo;So alcohol dehydrogenase, and then what? How they hide dehydrogenase, two enzymes. Not 3, not 4, not sips, 2 enzymes.&rdquo; <span class="g2-src">(11/03 T 708-709)</span> [he said 'How they hide dehydrogenase': aldehyde dehydrogenase]</li>
<li>&ldquo;It sits in there by having this boron group coordinate to two. Cations, right? Magnesium, and what? Zinc. That is the basis.&rdquo; <span class="g2-src">(11/03 T 713-714)</span></li>
<li>&ldquo;Non-enzymatic is spontaneous. No, phosphodiesterase 4 is the target.&rdquo; <span class="g2-src">(11/03 T 727)</span> [answering a student&rsquo;s question: PDE4 is the target enzyme; the deboronation needs no enzyme]</li>
</ul></div>
<p class="g2-p"><span class="g2-k">Not needed</span> &ldquo;Now, am I going to be asking you about mechanisms of action? No.&rdquo; <span class="g2-src">(11/03 T 680-681)</span></p>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-001 BS3-002 KX-001 KX-002 KX-005 KX-012 S3-008 S3-009 S3-010 S3-011 S3-012 S3-013 S3-014 S3-015 S3-016 S3-017 S3-018 S3-019 S3-020 S3-024 S3-025 S3-029 S3-048 S3-053 S3-054 S3-056 S3-058 S3-059 S3-061 S3-063 S3-064 S3-065 S3-066 S3-082 S3-083 S3-087 S3-088 S3-095 S3-103 S3H-001 S3H-002 S3H-003 S3H-004 S3H-005 S3H-008 S3H-009 S3H-011 S4H-011 S4H-015 S4H-017 S4H-021" data-qlabel="DPAW slide 7">Practice these (51)</button></div>
</div>
<div class="gpt g2-block"><h5>Ruxolitinib and upadacitinib: two topical JAK inhibitors (DPAW slide 8) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Ruxolitinib and upadacitinib are the two Janus kinase (JAK) inhibitors available topically for eczema. Both act by JAK inhibition, which ends in less cytokine signaling and less inflammation <span class="g2-src">(11/03 T 734-736)</span>. Their chemical classes differ: ruxolitinib is a pyrrolopyrimidine (blue ring system, with a pyrazole, a cyclopentyl group and a nitrile side chain); upadacitinib is an imidazopyrrolopyridine (magenta ring system, with a CF3 side chain). He gave log P as about 2 for both <span class="g2-src">(11/03 T 737)</span>, which would predict passage through skin, but the formulations keep them in the skin.</p>
<table class="g2-table g2-stack">
<caption>ADMET on the slide <span class="g2-src">(DPAW slide 8)</span></caption>
<thead><tr><th scope="col">Drug</th><th scope="col">Half-life</th><th scope="col">Enzymes</th><th scope="col">Note</th></tr></thead>
<tbody>
<tr><th scope="row">Ruxolitinib</th><td><span class="g2-lab">Half-life</span><b>3 h</b></td><td><span class="g2-lab">Enzymes</span>3A4/2C9 substrate</td><td>Some active metabolites</td></tr>
<tr><th scope="row">Upadacitinib</th><td><span class="g2-lab">Half-life</span><b>8&ndash;16 h</b></td><td><span class="g2-lab">Enzymes</span>3A4/2D6 substrate</td><td></td></tr>
</tbody>
</table>
<p class="g2-p"><b>Conflict to read carefully.</b> He said one drug is shorter-lived (multiple applications) and the other longer-lived (fewer applications), and that one has active hydroxylated metabolites and the other has none, without naming which is which <span class="g2-src">(11/03 T 742-744, 752-754)</span>. The slide names them: ruxolitinib 3 h with some active metabolites, upadacitinib 8&ndash;16 h with no metabolite note. An exam written from his lecture would key the slide&rsquo;s pairing.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So if the question was, are these chemicals, are these similar chemical, no, they are not, they are different because they are structurally different&rdquo; <span class="g2-src">(11/03 T 732-733)</span></li>
<li>&ldquo;Pay attention to the fact that these are both R3A4 as the major enzyme isoform for them, right? They are substrates of that.&rdquo; <span class="g2-src">(11/03 T 745-747)</span> [he said 'R3A4': 3A4]</li>
<li>&ldquo;Let me say caution I can't spell caution. Inhibitors And indus of what? Of 3F4. OK? Because those can, can have a say on what? The half-life of the drug.&rdquo; <span class="g2-src">(11/03 T 747-749)</span> [he said 'caution', 'indus' and '3F4': inhibitors and inducers of 3A4]</li>
<li>&ldquo;This one has no active metabolites. This one has at least the hydroxylated metabolites that form the hydroxy group. Some of these hydroxylated metabolites. are active.&rdquo; <span class="g2-src">(11/03 T 752-754)</span></li>
<li>&ldquo;these are formulated. OK, that is a different formulated to. Be sequestered. They sequestered. In the skin.&rdquo; <span class="g2-src">(11/03 T 738-739)</span></li>
<li>&ldquo;And there's some uh aspect to their half-lives. One is shorter lives, the, the other one is longer-lived, OK? So, shorter-lived, multiple applications, right? Longer lives, fewer applications.&rdquo; <span class="g2-src">(11/03 T 742-744)</span></li>
</ul></div>
<p class="g2-p"><span class="g2-k">Not needed</span> &ldquo;I am not going to bother you with trying to remember this, but this is just to distinguish that, yes, this is different from that functional group.&rdquo; <span class="g2-src">(11/03 T 730-732)</span> [he is speaking of the chemical class names of the two drugs]</p>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-003 KX-004 KX-005 S3-003 S3-008 S3-013 S3-016 S3-024 S3-025 S3-026 S3-027 S3-028 S3-029 S3-030 S3-061 S3-063 S3-098 S3H-001 S3H-002 S3H-005 S4-049 S4H-011 S4H-014" data-qlabel="DPAW slide 8">Practice these (23)</button></div>
</div>
<div class="gpt g2-block"><h5>Polleve-1: which crisaborole steps are glucuronidation (DPAW slide 9) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> A PollEv poll: &ldquo;Crisaborole&rsquo;s metabolic scheme indicates that steps ........... involve glucuronidation?&rdquo; with options (A) Steps 1 and 2, (B) Steps 2 and 3, (C) Steps 3 and 4. The scheme has four numbered arrows from crisaborole. Arrow 1 is the hydrolytic deboronation to the benzyl alcohol. Arrow 2 is the alcohol to the carboxylic acid. Arrow 3 attaches a sulfate (SO3) to the benzyl alcohol, a phase 2 step by sulfotransferases. Arrow 4 attaches a glucuronide (Gluc) to it, by UGT, also phase 2. The arrow marked 3,4 leads to a product carrying both SO3 and Gluc.</p>
<p class="g2-p"><b>Two readings.</b> Strictly, on the drawing only arrow 4 and the combined 3,4 arrow add a glucuronide; arrow 3 alone adds the sulfate. He keyed &ldquo;3 and 4&rdquo; <span class="g2-src">(11/03 T 776-777)</span>. Both readings select option C, the only option that contains step 4, so an exam written from the lecture keys Steps 3 and 4.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So this step would be the hydrolytic deboronination, right? This one, right? And then you get step two.&rdquo; <span class="g2-src">(11/03 T 767-768)</span></li>
<li>&ldquo;So, what enzyme would be that phase two enzyme? Selhorans is, right?&rdquo; <span class="g2-src">(11/03 T 772)</span> [he said 'Selhorans': sulfotransferases (SULT)]</li>
<li>&ldquo;when we say these can also form what? Gluronides. So, what enzyme is that? UGT. Remember these things, folks.&rdquo; <span class="g2-src">(11/03 T 773-774)</span></li>
<li>&ldquo;So, if the question was, what steps involve glucuronidation, then you would choose which one.&rdquo; <span class="g2-src">(11/03 T 774-775)</span></li>
<li>&ldquo;3 and 4 steps involve gluchroidation because I've, I've shown you this, right?&rdquo; <span class="g2-src">(11/03 T 776-777)</span> [he said 'gluchroidation': glucuronidation]</li>
</ul></div>
<div class="gpoll"><b>His poll</b>
<details class="g2-self"><summary>Which steps involve glucuronidation? (A) Steps 1 and 2 (B) Steps 2 and 3 (C) Steps 3 and 4 <span class="g2-tap">Show answer</span></summary><p>(C) Steps 3 and 4 <span class="g2-src">(11/03 T 774-777)</span></p></details>
</div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-001 S3-014 S3-016 S3-020 S3-021 S3-022 S3-023 S3-028 S3-102 S3-103 S3H-002 S3H-003" data-qlabel="DPAW slide 9">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-2">
<h3>Dr. Sikazwe, assigned slides · UV terminology and emollients</h3>
<div class="gbar"><span>Objective (DPAW 12, 15)</span><b>He asks you to know what is in UVR (&ldquo;know those limits&rdquo;), and for emollients to see that they are &ldquo;just palliative, what? Care&rdquo; (palliative care, not treatment of the disease)</b><i>DPAW slide 12, 15</i></div>
<div class="gpt g2-block"><h5>Terminology: UV bands, ozone, PUVA, antimetabolite, keratinocytes (DPAW slide 12) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> UVR is ultraviolet radiation. The spectrum bar runs from ultraviolet (UVC, UVB, UVA) through visible to infrared, with wavelength marks at 100, 280, 315, 400 and 700 nm. Each band has a box under it. A skin cross-section beside it shows how far each band travels: UVA goes deepest.</p>
<table class="g2-table g2-stack">
<caption>The three ultraviolet bands <span class="g2-src">(DPAW slide 12; 11/03 T 813-819)</span></caption>
<thead><tr><th scope="col">Band</th><th scope="col">Range on the slide (nm)</th><th scope="col">Range he said (nm)</th><th scope="col">Slide box</th></tr></thead>
<tbody>
<tr><th scope="row">UVC</th><td><span class="g2-lab">Range on the slide (nm)</span>100&ndash;280</td><td><span class="g2-lab">Range he said (nm)</span>100 to 280</td><td>Extremely dangerous; blocked by the ozone layer</td></tr>
<tr><th scope="row">UVB</th><td><span class="g2-lab">Range on the slide (nm)</span>280&ndash;315</td><td><span class="g2-lab">Range he said (nm)</span>280 to 315 or 320</td><td>Skin cancer, cataracts, sunburn</td></tr>
<tr><th scope="row">UVA</th><td><span class="g2-lab">Range on the slide (nm)</span>315&ndash;400</td><td><span class="g2-lab">Range he said (nm)</span>315 or 320 to 400</td><td>Premature aging, wrinkling of the skin, implicated in skin cancer</td></tr>
</tbody>
</table>
<p class="g2-p"><b>Terms on the slide.</b> Ozone blocks 100% of UVC and 90% of UVB, so about 10% of UVB reaches the skin <span class="g2-src">(11/03 T 820-823)</span>. PUVA is psoralen plus ultraviolet A light. An antimetabolite is an enzyme-substrate mimic that inhibits cellular metabolism; he said such molecules mimic natural metabolites and disrupt making DNA and RNA <span class="g2-src">(11/03 T 831-834)</span>. Keratinocytes are epidermal skin cells; in psoriasis they proliferate excessively <span class="g2-src">(11/03 T 843-845)</span>.</p>
<p class="g2-p"><b>Two readings of the limits.</b> He accepts 315 or 320 nm for the UVA start and the UVB end, &ldquo;depending on the literature you pick&rdquo;; the slide&rsquo;s axis marks 315, and slide 16 writes UVB as 280&ndash;320 nm. For visible light the slide&rsquo;s axis ends at 700 nm while he said 400 to 800. An exam from his lecture would key the band order, the 280 and 400 nm limits and the slide&rsquo;s 315; visible light has no single key.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;there are limits on the wavelengths that describe what? What is UVC, what is UVA, what is UVB. OK. So, know those limits.&rdquo; <span class="g2-src">(11/03 T 813-814)</span></li>
<li>&ldquo;So, UVA is going to go up to 400, right? So, but it starts at either, depending on the literature you pick, it will be 315 or 320 nanometers to 400 nanometers.&rdquo; <span class="g2-src">(11/03 T 817-818)</span></li>
<li>&ldquo;And then UVB then becomes what? 280 to either 315 or what? 320 nanometers.&rdquo; <span class="g2-src">(11/03 T 819)</span></li>
<li>&ldquo;The ozone layer, if we don't damage it, right? We're good. It blocks most of that. And it also blocks like 90% of UVB.&rdquo; <span class="g2-src">(11/03 T 820-822)</span></li>
<li>&ldquo;this is UV what? A. This can never be UVB. This can never be UVC because it's where UVA and it's given that range.&rdquo; <span class="g2-src">(11/03 T 828-830)</span></li>
<li>&ldquo;These are simply molecules that mimic. Natural Molecules&rdquo; <span class="g2-src">(11/03 T 832)</span></li>
<li>&ldquo;These are simply skin cells, right? Made out of what? Keratin.&rdquo; <span class="g2-src">(11/03 T 835)</span></li>
<li>&ldquo;And then here, what goes in the furthest. UVA, the deepest, right?&rdquo; <span class="g2-src">(11/03 T 838-839)</span></li>
<li>&ldquo;A question could simply be. Given the UV radiation, when we talked about UV radiation, which one is more skin penetrating? Which one? A.&rdquo; <span class="g2-src">(11/04 T@37498-37634)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-031 S3-032 S3-033 S3-034 S3-035 S3-036 S3-037 S3-038 S3-042 S3-051 S3H-009 S4H-011" data-qlabel="DPAW slide 12">Practice these (12)</button></div>
</div>
<div class="gpt g2-block"><h5>Topical agents: emollients (DPAW slide 15) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Emollients are listed as mostly water emulsions that prevent skin water loss; he also said they can contain oil and water, and some are 100% petrolatum with no water <span class="g2-src">(11/03 T 869, 873)</span>. They fill the gaps between scales and soften them, which reduces dryness and itching, so they do not treat the disease.</p>
<ul>
<li><b>Petrolatum</b> (Vaseline): the most effective emollient on the slide; a linear hydrocarbon chain of more than 25 carbons. The slide shows the yellow jelly.</li>
<li><b>Lanolin</b>: odorous wool grease; a mixture of fatty acid esters. The slide shows sheep because it comes from sheep wool. He said the odor keeps some people from using it <span class="g2-src">(11/03 T 877-879)</span>.</li>
<li><b>Silicone-based</b>: hypoallergenic and non-comedogenic (no comedone formation: no blackheads or whiteheads). Two are drawn.</li>
</ul>
<table class="g2-table g2-stack">
<caption>The two silicones <span class="g2-src">(DPAW slide 15; 11/03 T 885-887)</span></caption>
<thead><tr><th scope="col">Name</th><th scope="col">Structure on the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Dimethicone</th><td>Linear chain of alternating silicon and oxygen, repeated n times, with two plain lines drawn on each silicon (the methyl groups the name dimethicone names)</td></tr>
<tr><th scope="row">Cyclomethicone</th><td>Ring of five Si(CH3)2 units joined through oxygen, labeled a pentamer</td></tr>
</tbody>
</table>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;the key thing is that they prevent the loss of water and soften the scaling.&rdquo; <span class="g2-src">(11/03 T 870)</span></li>
<li>&ldquo;just hydrocarbons, right? About 25, a chain of hydrocarbons, uh, preferably greater than 25 carbons, linear, right?&rdquo; <span class="g2-src">(11/03 T 872-873)</span></li>
<li>&ldquo;And you see them, they look like that, but they are obtained from sheep wool.&rdquo; <span class="g2-src">(11/03 T 881)</span></li>
<li>&ldquo;these come with the advantage that is that they are hypoallergenic. And they don't promote Coon. Formation. So blackhead, whiteheads, right?&rdquo; <span class="g2-src">(11/03 T 882-883)</span> [he said 'Coon. Formation': comedone formation]</li>
<li>&ldquo;you have dimethicone. These are linear. So this is linear silicon. And oxygen chains, silicon and oxygen chains, linear. Then you you can have some that are cyclic. This is where you see cyclomethicone.&rdquo; <span class="g2-src">(11/03 T 885-887)</span></li>
<li>&ldquo;Again, are we treating the disease here? We, we just palliative, what? Care.&rdquo; <span class="g2-src">(11/03 T 889-890)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-009 S3-043 S3-044 S3-045 S3-046 S3-047 S3-049 S3-052 S3H-006" data-qlabel="DPAW slide 15">Practice these (9)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-3">
<h3>Dr. Sikazwe, assigned slides · tars and anthralin</h3>
<div class="gbar"><span>Objective (DPAW 16, 17)</span><b>Tars: he says &ldquo;it&#39;s for you to decipher what is going on&rdquo; (the old-school uses); anthralin: it is lipophilic by its log P, so &ldquo;do not apply too much of that. Because it will go systemic.&rdquo;</b><i>DPAW slide 16, 17</i></div>
<div class="gpt g2-block"><h5>Topical agents: coal, shale and wood tars (DPAW slide 16) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tars: the mechanism of action is unknown, but they may have antiproliferative activity. The slide separates three tars by whether they sensitize the skin to light (photosensitizing). The only drawing is a photograph of a coal tar solution bottle.</p>
<table class="g2-table g2-stack">
<caption>Three kinds of tar <span class="g2-src">(DPAW slide 16)</span></caption>
<thead><tr><th scope="col">Tar</th><th scope="col">Photosensitizing?</th><th scope="col">On the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Coal tar (refined coal tar)</th><td><span class="g2-lab">Photosensitizing?</span><b>Yes</b></td><td>Mixture of phenols, PAHs and heterocyclic compounds; may be used with UVB (280&ndash;320 nm)</td></tr>
<tr><th scope="row">Shale tars (ichthammol)</th><td><span class="g2-lab">Photosensitizing?</span><b>No</b></td><td>Non-photosensitizer; he said they come from distilling sedimentary rock <span class="g2-src">(11/03 T 903)</span></td></tr>
<tr><th scope="row">Wood tars</th><td><span class="g2-lab">Photosensitizing?</span><b>No</b></td><td>Non-photosensitizing; he said they come from pine, birch and juniper trees <span class="g2-src">(11/03 T 908-909)</span></td></tr>
</tbody>
</table>
<p class="g2-p">PAHs are polycyclic aromatic hydrocarbons. With coal tar the patient applies it and is then exposed to UVB light, and the photosensitizing effect is the downside. He called some of these old treatments that are no longer there, though old-school physicians may still choose them <span class="g2-src">(11/03 T 898-900)</span>. Slide 16 writes UVB as 280&ndash;320 nm while the axis of slide 12 marks 315; he accepted either end (see DPAW slide 12).</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;TAs work through an unclear mechanism. And Some people swear that these have what anti-proliferative activities as well.&rdquo; <span class="g2-src">(11/03 T 890-891)</span> [he said 'TAs': tars]</li>
<li>&ldquo;You have phenols, polycyclic aromatic hydrocarbons, and other heterocyclic compounds in there.&rdquo; <span class="g2-src">(11/03 T 895-896)</span></li>
<li>&ldquo;this also can be used in phototherapy. The patient lathers on this, then they're exposed to light, and here they are saying UVB.&rdquo; <span class="g2-src">(11/03 T 897-898)</span></li>
<li>&ldquo;The downside is that these are, this is the quotas are photosynthesizing. They sensitize the skin to the sun or to light, OK?&rdquo; <span class="g2-src">(11/03 T 901-902)</span> [he said 'the quotas' and 'photosynthesizing': coal tar, photosensitizing]</li>
<li>&ldquo;So, this also is a useful advantage non- photosensitizer.&rdquo; <span class="g2-src">(11/03 T 907-908)</span> [shale tars]</li>
<li>&ldquo;And also advantage, non-photosensitizing.&rdquo; <span class="g2-src">(11/03 T 910)</span> [wood tars]</li>
<li>&ldquo;So given the choice you have that that that. You want to choose which one is going to benefit the patient most. The one that gives them less headache, right?&rdquo; <span class="g2-src">(11/03 T 910-912)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-033 S3-037 S3-041 S3-044 S3-045 S3-046 S3-048 S3-049 S3-050 S3-051 S3-052 S3-060 S3H-007 S4H-003" data-qlabel="DPAW slide 16">Practice these (15)</button></div>
</div>
<div class="gpt g2-block"><h5>Topical agents: anthralin (dithranol) (DPAW slide 17) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Anthralin (dithranol) is a hydroxyanthrone from 1915 <span class="g2-src">(11/03 T 918-920)</span>: a tricyclic ring system with a ketone on the middle ring and an OH on each outer ring, log P = 4. Lassar&rsquo;s paste combines anthralin, ZnO, paraffin and salicylic acid; he said it is probably no longer used but may return <span class="g2-src">(11/03 T 921-922)</span>. Dendrimer formulations (nano-sized anthralin) improve pharmacokinetic properties and duration of action or half-life, because of itching and stability problems <span class="g2-src">(11/03 T 923-926)</span>.</p>
<p class="g2-sub">CBDA: how the radicals form and what they do <span class="g2-src">(DPAW slide 17)</span></p>
<ol>
<li>Anthralin is lipophilic (log P 4), so too much applied goes systemic.</li>
<li>Anthralin auto-oxidizes with no enzyme <span class="g2-src">(11/03 T 939-941)</span>. On the drawing, the arrow marked e leads to the anthranyl radical (red dot on the middle ring) together with the superoxide anion, O2 with a dot and minus sign.</li>
<li>These two radicals disrupt keratinocyte mitochondria, which stops cell respiration and kills cells, so the keratinocyte proliferation is normalized <span class="g2-src">(11/03 T 929-933)</span>.</li>
</ol>
<p class="g2-p"><b>The stain is not the treatment.</b> The slide note says anthralin autoxidizes to radicals, ROS and inactive compounds and stains fabrics permanently. The radicals polymerize into anthralin brown and then carbon black, the large polycyclic structure drawn.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;the key thing is that this is going to be a lipophilic molecule based on its what? Log p value. So watch out, do not apply too much of that. Because it will go systemic.&rdquo; <span class="g2-src">(11/03 T 927-928)</span></li>
<li>&ldquo;it will go and Disrupt Uh, kerato keratinocyte. Mitochondria.&rdquo; <span class="g2-src">(11/03 T 929-930)</span> [he said 'kerato keratinocyte': keratinocyte]</li>
<li>&ldquo;So you have two answers in this, right? Mechanism CBDA, chemical basis of drug action. It generates two radicals. One is superoxide anion&rdquo; <span class="g2-src">(11/03 T 934-936)</span> [he said 'CBDA': chemical basis of drug action]</li>
<li>&ldquo;So we can say anthralin undergoes spontaneous. Oxidation or auto-oxidation to generate what? These cytotoxic radicals. Does that involve enzymes? No.&rdquo; <span class="g2-src">(11/03 T 939-941)</span></li>
<li>&ldquo;So, Anthralin brown and carbon black. They are not part of the treatment.&rdquo; <span class="g2-src">(11/03 T 949)</span></li>
<li>&ldquo;Are those part of the treatment? No, that's part of the stain. Nothing to do with treatment.&rdquo; <span class="g2-src">(11/03 T 951-952)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-006 S3-008 S3-041 S3-043 S3-045 S3-048 S3-053 S3-054 S3-055 S3-056 S3-057 S3-058 S3-059 S3-060 S3-061 S3-064 S3-065 S3-066 S3-067 S3-082 S3-095 S3-097 S3-098 S3-103 S3H-008 S3H-009 S3H-013 S4H-003 S4H-019" data-qlabel="DPAW slide 17">Practice these (30)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-4">
<h3>Dr. Sikazwe, assigned slides · Psoralens and the autoxidation check</h3>
<div class="gbar"><span>Objective (DPAW 18, 19)</span><b>Psoralen is the one molecule he mentions whose chemical basis of drug action includes DNA intercalation; the slide 19 poll checks it against anthralin's autoxidation</b><i>DPAW slide 18, 19</i></div>
<div class="gpt g2-block"><h5>Psoralens: a furanocoumarin that crosslinks DNA under UVA light (DPAW slide 18) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The example is 8-methoxypsoralen (8-MOP, logP = 2), a furanocoumarin: a furan ring fused to a coumarin ring. Psoralen plus UVA light (315&ndash;400 nm) is PUVA. Metabolism (ADMET on the slide): several CYPs handle it, and it partially inhibits CYP3A4. Chemical basis of drug action (CBDA): antiproliferative; it binds covalently to DNA pyrimidine bases and lowers DNA synthesis.</p>
<p>The drawing reads left to right. 8-MOP sits beside two thymine (pyrimidine) bases on DNA strands, with its pyrone ring toward one and its furan ring toward the other. The arrow labeled hv is UVA light. In the product, a cyclobutane ring joins the pyrone side to one thymine and another cyclobutane ring joins the furan side to the other thymine, so the drug links the two strands. The boxed 3D picture is labeled "Intercalated DNA = Disrupted DNA synthesis": the drug lies between the base pairs.</p>
<p>The order he taught: the drug is taken by mouth or applied, it inserts between DNA base pairs (intercalation), light is then given, and the light promotes the crosslinking. The crosslinked DNA is distorted and can no longer be normal DNA, so new cell production falls.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So, chemically, this can be grouped as a furanocoumarin, because this has a furan ring and a coumarin ring.&rdquo; <span class='g2-src'>(11/03 T 958-960)</span></p>
<p>&ldquo;in terms of uh uh what you should know in terms of metabolism, that it partially inhibits 3F4. That's something to take home, right? It partially inhibits 3 or 4.&rdquo; [he said '3F4' and '3 or 4': CYP3A4] <span class='g2-src'>(11/03 T 961-963)</span></p>
<p>&ldquo;it coherently binds DNA. It goes and inserts in between DNA base pairs. And crosslinks or bridges those DNA based pairs. That process is also called intercalation.&rdquo; [he said 'coherently': covalently] <span class='g2-src'>(11/03 T 963-965)</span></p>
<p>&ldquo;Exposure to that light promotes the what? The cross-linking.&rdquo; <span class='g2-src'>(11/03 T 969-970)</span></p>
<p>&ldquo;So I would have a check question like this. I know this is not working right, but a true or false? The chemical basis of drug action, both anthralin and soarin involves autooxidation. True or false?&rdquo; [he said 'soarin': psoralen] <span class='g2-src'>(11/03 T 977-979)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-003 KX-006 KX-012 S3-003 S3-006 S3-008 S3-031 S3-032 S3-037 S3-043 S3-048 S3-049 S3-051 S3-053 S3-054 S3-056 S3-058 S3-059 S3-060 S3-061 S3-062 S3-063 S3-064 S3-065 S3-066 S3-067 S3-068 S3-069 S3-082 S3-087 S3-088 S3H-004 S3H-008 S3H-009 S3H-011" data-qlabel="DPAW slide 18">Practice these (35)</button></div>
</div>
<div class="gpt g2-block"><h5>Poll: does autoxidation explain both anthralin and 8-MOP? (DPAW slide 19) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> A poll slide with no teaching text: "TRUE/FALSE: The chemical basis of drug action for both Anthralin and 8-methoxypsoralen involves autooxidation." Both answer bars (True, False) are empty.</p>
<p>Autoxidation is oxidation that happens on its own, with no enzyme: anthralin is an unstable molecule that, once applied, spontaneously generates cytotoxic radicals (11/03 T 938-941). Psoralen works differently: its chemical basis of drug action is intercalation and crosslinking of DNA, with UVA light (DPAW slide 18). The slides therefore tie autoxidation to anthralin only.</p>
<details class="g2-self"><summary>Check question: both anthralin and 8-MOP act by autoxidation, true or false? <span class="g2-tap">Show answer</span></summary><p><b>False</b> if keyed from the lecture content: autoxidation belongs to anthralin (11/03 T 938-941), and 8-MOP intercalates and crosslinks DNA (DPAW slide 18).</p></details>
<div class="g2-note"><span class="g2-k">Unresolved</span><p>His full answer is not in the recording. After asking "which one has auto oxidation?" the transcript shows only "An ing." and then cuts to the next heading ("Glucocorticoid medicinal chemistry") (11/03 T 979-982). "An ing." is probably the start of "anthralin", which matches the answer above; that answer is reasoned from slides 17 and 18 and his lecture, not quoted from him.</p></div>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So I would have a check question like this. I know this is not working right, but a true or false? The chemical basis of drug action, both anthralin and soarin involves autooxidation. True or false?&rdquo; [he said 'soarin': psoralen] <span class='g2-src'>(11/03 T 977-979)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-064 S3-067 S3H-008 S3H-009" data-qlabel="DPAW slide 19">Practice these (5)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-5">
<h3>Dr. Sikazwe, assigned slides · Glucocorticoid structure, numbering and receptor binding</h3>
<div class="gbar"><span>Objective (DPAW 20&ndash;23)</span><b>Know what a steroid looks like, how its carbons are numbered and which way each group faces, so the SAR can be described; the glucocorticoid is held in its receptor by hydrogen bonding</b><i>DPAW slide 20, 21, 22, 23</i></div>
<div class="gpt g2-block"><h5>Steroid skeleton, alpha and beta, and the four SAR requirements (DPAW slide 20) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Glucocorticoids are corticosteroids, which he shortens to steroids. He names three things he wants known here: structure, stereochemistry and numbering <span class="g2-src">(11/03 T 987-990)</span>. The structure is tetracyclic: four fused rings labeled A, B, C and D. Rings A, B and C are six-membered and ring D is five-membered. He said a skeleton stacked this way is probably a steroid <span class="g2-src">(11/03 T 992-994)</span>.</p>
<p>Stereochemistry on a steroid: a hashed bond points away from the viewer and is alpha; a bold wedge points toward the viewer and is beta. The slide also shows the skeleton numbered 1 to 27 (ring atoms 1&ndash;17, methyls 18 and 19, side chain 20&ndash;27); numbering and orientation are separate ideas.</p>
<table class="g2-table">
<caption>SAR: anti-inflammatory activity is increased by these four features <span class="g2-src">(DPAW slide 20)</span></caption>
<thead><tr><th scope="col">Position</th><th scope="col">Required group</th><th scope="col">Orientation</th></tr></thead>
<tbody>
<tr><th scope="row">C1&ndash;C2</th><td>Alkene (the slide writes "C1-C2 db")</td><td>Not stated on the slide</td></tr>
<tr><th scope="row">C6</th><td>Halogen, X</td><td>Alpha (hashed)</td></tr>
<tr><th scope="row">C9</th><td>Halogen, X</td><td>Alpha (hashed)</td></tr>
<tr><th scope="row">C11</th><td>Hydroxyl, OH</td><td>Beta (wedge)</td></tr>
</tbody>
</table>
<p>These four are the minimal stereochemistry and substituents for anti-inflammatory activity. He asked the class to know exactly these four.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;I would like for you to know the, what steroids look like, right? And you'll see it's a four-membered ring, you know, rings are attached, are stacked a certain way. I want you to know that because that's important.&rdquo; [he said 'four-membered ring': a four-ring (tetracyclic) system, which he states correctly at T 990-993] <span class='g2-src'>(11/03 T 628-630)</span></p>
<p>&ldquo;So, in terms of structure, these are tetracyclic. OK? These are tetracyclic structures. 4 rings fused together, but the stacking of these rings is in a certain way.&rdquo; <span class='g2-src'>(11/03 T 990-991)</span></p>
<p>&ldquo;bonds that you see that are hushed, that are pointing away from you, they are called alpha-facing, alpha- face. Bonds&rdquo; [he said 'hushed': hashed] <span class='g2-src'>(11/03 T 997-999)</span></p>
<p>&ldquo;The SAR of uh serial of uh glu corticoid is a little bit complex, but I'm limiting you to 4 things. I want you to know 12341234 items.&rdquo; [he said 'serial': the transcription is unclear; he is counting 1, 2, 3, 4] <span class='g2-src'>(11/03 T 1020-1021)</span></p>
<p>&ldquo;If I give you that structure, what are the quintessential elements that need to be there for this glucocorticoid to be active?&rdquo; <span class='g2-src'>(11/03 T 1021-1022)</span></p>
<p>&ldquo;we need to know that there is a, a double bond present between carbon one. And 2&rdquo; <span class='g2-src'>(11/03 T 1023-1024)</span></p>
<p>&ldquo;OK, so, so that this 6th, uh, atom needs to have a halogen on it, and the orientation of that halogen needs to be what? Alpha.&rdquo; <span class='g2-src'>(11/03 T 1067-1069)</span></p>
<p>&ldquo;And then the 9th position is this, this 9 atom. Needs to also have a halogen. The orientation of that halogen needs to be what? alpha as well.&rdquo; <span class='g2-src'>(11/03 T 1069-1070)</span></p>
<p>&ldquo;And then the 11th carbon. Needs to have a hydroxy group on it. And this orientation needs to be what? Better.&rdquo; [he said 'Better': beta] <span class='g2-src'>(11/03 T 1070-1072)</span></p>
<p>&ldquo;The two are not related. Orientation is different from numbering.&rdquo; <span class='g2-src'>(11/03 T 1054)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-007 S3-009 S3-024 S3-053 S3-068 S3-069 S3-070 S3-071 S3-072 S3-073 S3-074 S3-075 S3-076 S3-077 S3-078 S3-079 S3-080 S3-083 S3-084 S3-090 S3-100 S3-101 S3H-010 S3H-011" data-qlabel="DPAW slide 20">Practice these (24)</button></div>
</div>
<div class="gpt g2-block"><h5>Numbering the steroid carbons, and describing a substituent (DPAW slide 21) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> "Remember steroid C- atom numbering": a steroid skeleton with the four rings, two angular methyl groups and a branched side chain at C17, and no numbers on it. The numbered version of the same skeleton is on slide 20.</p>
<p>Numbering is positional: carbon 1 is carbon 1 whatever its orientation. Start at C1 in ring A and loop through rings A and B to C10, the ring A/B junction carbon. C11 is the starting point of a second path through rings C and D that ends at C17. The two angular methyls are then 18 (on C13) and 19 (on C10), and the side chain continues from C17 as 20, 21 and onward.</p>
<p>To describe a substituent, give its carbon number and its orientation, for example "C-15, alpha-Cl" for a chlorine on that carbon drawn hashed. He framed the question as: with a chlorine placed on the skeleton, describe it.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;Always this is going to be one. So if you know where your 1 is, you know where your 11 is, and your 17, you're good to go. OK, but practice that.&rdquo; <span class='g2-src'>(11/03 T 1098-1099)</span></p>
<p>&ldquo;and I put chlorine here and I say, describe that. You need to tell me that is what?&rdquo; <span class='g2-src'>(11/03 T 1076-1077)</span></p></div>
<div class="g2-note"><span class="g2-k">Unresolved: C-15 or C-16</span><p>Reading 1: counting back from C17 ("This is 17. 16, so this is 15"), he calls his example chlorine "a C-15. Alpha CL" (11/03 T 1077). Reading 2: after he says that putting the group the other way makes it beta, a student asks "Why is it?" and he answers "Carbon, carbon 16" (11/03 T 1075-1084), which leaves open whether his example sat on C-15 or C-16. An exam written from his lecture would key the stated answer, C-15 with alpha for a hashed chlorine; the sources do not settle the carbon number, so no question in the bank asks about the chlorine position.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-072 S3-073 S3-074 S3-075" data-qlabel="DPAW slide 21">Practice these (4)</button></div>
</div>
<div class="gpt g2-block"><h5>Second build of the numbering slide: the loops and the methyls (DPAW slide 22)</h5>
<p><b>On the slide.</b> Slide 22 repeats the title and number of slide 21 (printed 21): the same "Remember steroid C- atom numbering" skeleton shown a second time. The teaching he gave with it follows the path of the numbers.</p>
<p>From C1, the path covers rings A and B and stops at C10. C11 is a new starting point, and its path snakes up to C17. The methyl nearest C17 is 18 and the next is 19, which he describes as skipping from one methyl to the other. The side chain then gives 20 and 21, then 22, 23 and onward. Orientation (alpha or beta) is separate: any ring carbon can face either way.</p>
<p>Steroid numbering is not identical across courses. He said the endocrine instructor may number steroids slightly differently (11/03 T 1126-1128); for his material this numbering is the one used.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;For my material now, this is the numbering that we're going to go with, OK?&rdquo; <span class='g2-src'>(11/03 T 1128-1129)</span></p>
<p>&ldquo;What I'm saying is for now, let's contend with this numbering.&rdquo; <span class='g2-src'>(11/03 T 1125-1126)</span></p>
<p>&ldquo;This snakes, the numbering snakes all the way up to what? 17. Right?&rdquo; <span class='g2-src'>(11/03 T 1087-1088)</span></p>
<p>&ldquo;Think of stereochemistry. Any of those atoms could have stereo chemistry, either this way or facing you. OK. The numbering is, is positional.&rdquo; <span class='g2-src'>(11/03 T 1039-1041)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Glucocorticoid chemical basis of drug action: hydrogen bonding (DPAW slide 23) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The title line reads "Glucocorticoid: CBDA: .......- bonding" (the blank is hydrogen), with the reference Foye Chapter 28, pages 1112&ndash;13. The drawing shows a glucocorticoid sitting in the glucocorticoid receptor, captioned "Key glucocorticoid receptor-ligand binding residues." Six dashed lines join the drug's oxygen-bearing groups to amino acids lining the pocket: Asn 564, Arg 611, Gln 570, Gln 642 and Thr 739.</p>
<p>Reading the picture: the C3 ketone takes two hydrogen bonds (Arg 611 and Gln 570); the 11-hydroxyl and the C21 hydroxyl each bond to Asn 564; the C20 ketone bonds to Thr 739; the 17-hydroxyl bonds to Gln 642. Every dashed line is a hydrogen bond, so the answer to "what type of interaction" is hydrogen bonding and the count is six.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So, their chemical basis of drug action. is going to be due to hydrogen bonding interactions. How many of them? 1234566 hydrogen bonding. Interactions.&rdquo; [he is counting to six] <span class='g2-src'>(11/03 T 1133-1135)</span></p>
<p>&ldquo;So, the question might be just counting the number of hydrogen bonds, or do you see any uh non-hydrogen bonds involved here? These are all hydrogen bonds.&rdquo; <span class='g2-src'>(11/03 T 1137-1139)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-004 S3-056 S3-064 S3-066 S3-074 S3-082 S3-083 S3-084 S3-100 S3-101 S3H-008 S3H-011" data-qlabel="DPAW slide 23">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-6">
<h3>Dr. Sikazwe, assigned slides · Glucocorticoid potency rankings</h3>
<div class="gbar"><span>Objective (DPAW 25)</span><b>Potency rankings of topical glucocorticoids are driven by structure, the delivery vehicle and the concentration</b><i>DPAW slide 25</i></div>
<div class="gpt g2-block"><h5>Potency classes and what drives them (DPAW slide 25) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> "Glucocorticoid potency rankings for topical agents is based on: 1) Structure; 2) Delivery vehicle; 3) Concentration (% in formulation)." Four classes come with one example each.</p>
<table class="g2-table">
<caption>Potency class and slide example <span class="g2-src">(DPAW slide 25)</span></caption>
<thead><tr><th scope="col">Class</th><th scope="col">Example on the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Super-potent</th><td>Clobetasol propionate 0.05% cream and ointment (the slide spells it "Clobesterol Proprionate")</td></tr>
<tr><th scope="row">Potent</th><td>Betamethasone dipropionate 0.05% cream and ointment</td></tr>
<tr><th scope="row">Medium potency</th><td>Betamethasone valerate 0.1% cream</td></tr>
<tr><th scope="row">Low potency</th><td>Hydrocortisone acetate 0.5% and 1% creams and ointments</td></tr>
</tbody>
</table>
<p>The drawing shows hydrocortisone, a dashed arrow, and clobetasol propionate, with the changes in color. Compared with hydrocortisone, clobetasol propionate has a C1=C2 alkene, a 9alpha-fluorine, a 16-methyl and a 17-propionate ester. Hydrocortisone is the natural product and the reference molecule for glucocorticoid activity; the others are derivatives of it <span class="g2-src">(11/03 T 1140-1145)</span>. He said structural changes can raise or lower lipophilicity (fat preference) or change how the molecule binds in the receptor, and so change potency <span class="g2-src">(11/03 T 1145-1148)</span>. The drawing is a structural change, not metabolism.</p>
<p>Delivery vehicle: many of these agents are formulated in propylene glycol, which he said lets the molecule penetrate the skin and reach the receptor site <span class="g2-src">(11/03 T 1160-1163)</span>. Concentration is the third basis; he called it the easiest to determine because creams carry the numbers <span class="g2-src">(11/03 T 1163-1164)</span>.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So lipophilicity can be manipulated, for instance, lipohilicity. Can be manipulated structurally.&rdquo; <span class='g2-src'>(11/03 T 1157-1158)</span></p>
<p>&ldquo;A lot of these agents you see them co-formulated or delivered in a vehicle called propylene. Glycol. OK? So, that also can enhance the potency of these molecules&rdquo; <span class='g2-src'>(11/03 T 1160-1162)</span></p>
<p>&ldquo;So, just know that these potency rankings are going to be driven by the structure. The delivery vehicle, as well as what? The amount, the percentage that is there in the molecule.&rdquo; <span class='g2-src'>(11/03 T 1173-1175)</span></p>
<p>&ldquo;So this is not metabolism, it's just an example of a structural manipulation that then changes the potency of the drug.&rdquo; <span class='g2-src'>(11/03 T 1177-1179)</span></p></div>
<div class="g2-note"><span class="g2-k">Not needed</span><p>The structures of the hydrocortisone derivatives (betamethasone, desonide, clobetasol, fluticasone, triamcinolone, shown on the unassigned slide 24): &ldquo;It's now for you to memorize this. No, it's just know that parent drug is that, then you can have derivatives of that.&rdquo; <span class="g2-src">(11/03 T 1152-1154)</span></p></div>
<div class="g2-note"><span class="g2-k">Unresolved: does a smaller percentage mean more potent?</span><p>Reading 1 (his words): "The tinier the percentage, right, means the more potent it is, right?" (11/03 T 1165). He then said that a cream labeled 0.05 means &ldquo;it's highly potent&rdquo; (11/03 T 1168-1170). Reading 2 (the slide): concentration is one of three bases, and the examples do not follow percentage alone: clobetasol propionate and betamethasone dipropionate are both 0.05% but in different classes (structure), and the slide does not say what happens when one drug's percentage changes. An exam written from his lecture would key his spoken rule when comparing the percentages of the slide examples (0.05% above 0.1% above 0.5% and 1%), and would not key a rule from percentage alone when the structures differ.</p></div>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;The tinier the percentage, right, means the more potent it is, right?&rdquo; <span class='g2-src'>(11/03 T 1165)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-007 S3-007 S3-080 S3-085 S3-088 S3-089 S3-090 S3-091 S3-092 S3-093 S3-094 S3H-012" data-qlabel="DPAW slide 25">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-7">
<h3>Dr. Sikazwe, assigned slides · hydrocortisone ADME and vitamin D analogs</h3>
<div class="gbar"><span>Objective (DPAW 26, 27)</span><b>Hydrocortisone, &ldquo;if you don't understand anything else that is going on&rdquo;: it goes back and forth between cortisone and hydrocortisone. Vitamin D analogs: a take-home reading, worth 2 points</b><i>DPAW slide 26, 27</i></div>
<div class="gpt"><h5>Hydrocortisone ADME (DPAW slide 26) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Hydrocortisone is a glucocorticoid applied to the skin. The slide gives its ADME (absorption, distribution, metabolism, excretion) in four lines. Less than 15% is absorbed through normal skin, compared with 95% by mouth (oral bioavailability is the fraction of a dose that reaches the blood). The half-life is 1&ndash;2 h and the slide blanks the reason, which is metabolism. The duration of action is 8&ndash;12 h and the blank is protein binding. Cortisone and urocortisol are the forms found in urine.</p>
<p>He explained that hydrocortisone has a log P of about 1.5, so it is not very lipophilic and does not penetrate skin well. He said it lingers in the skin because it is bound there (protein binding), which he gave as the reason for the long duration of action, while metabolism gives the short half-life.</p>
<p>The drawing shows three conversions. Hydrocortisone and cortisone are joined by a double-headed arrow, with the enzyme 11beta-hydroxysteroid dehydrogenase (11beta-HSD). Hydrocortisone also goes to 5beta-dihydrocortisol (5beta-reductase), and that goes to urocortisol (3alpha-HSD). Cortisone, 5beta-dihydrocortisol and urocortisol are marked inactive. The 11 in 11beta is carbon 11 of the steroid ring system.</p>
<p><b>Two readings, stated both ways.</b> (1) His words and the double arrow: the drug &ldquo;ping pongs&rdquo;, so hydrocortisone is inactivated to cortisone and cortisone can come back to active hydrocortisone. (2) The slide also calls cortisone the inactive metabolite found in urine, and he said he would not separate the two isozymes (types 1 and 2), only &ldquo;this family&rdquo;. The recording stops mid-sentence at 11/03 T 1196, before he says why the back-conversion matters. An exam written from his lecture would key the enzyme (11beta-HSD) and the interconversion in both directions; which isozyme does which direction was not taught, so the question bank keeps that detail out of scored practice.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;So, you have about, when you apply, about Less than 15% skin bioavailable. Versus if you take it orally, you see oralbi will be very high.&rdquo; <span class='g2-src'>(11/03 T 1185-1187)</span></li>
<li>&ldquo;It has a, a short half-life due to, please write this, metabolism. All right, and then its duration of action is due to high. Protein binding.&rdquo; <span class='g2-src'>(11/03 T 1187-1188)</span></li>
<li>&ldquo;this is the major metabolite of uh hydrocortisone, and the enzyme involved in that is this 1, 11 beta hydrosteroid dehydrogenase, 11 beta HSD.&rdquo; <span class='g2-src'>(11/03 T 1191-1193)</span></li>
<li>&ldquo;And this is the enzyme I mentioned that you need to pay attention to. OK. So what does 11, the number 11, stand for? The carbon, right? So this also can be written as C11 better, right?&rdquo; [he said 'better': beta] <span class='g2-src'>(11/04 T@737-922)</span></li>
</ul></div>
<p>Also on record: &ldquo;And this is important because When you apply this, it goes inactive. And guess what? comes back activated.&rdquo; <span class="g2-src">(11/03 T 1195-1196)</span></p>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS3-005 KX-007 S3-013 S3-016 S3-078 S3-085 S3-086 S3-094 S3-095 S3-096 S3-097 S3-098 S3-099 S3-100 S3-101 S3-102 S3-103 S3H-001 S3H-013" data-qlabel="DPAW slide 26">Practice these (19)</button></p>
</div>
<div class="gpt"><h5>Vitamin D analogs (DPAW slide 27) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Vitamin D analogs have two uses: bone health, and antiproliferative action (slowing cell multiplication), which is why they treat psoriasis. Calcitriol (Rocaltrol) and calcipotriene (Dovonex) are secosteroids, steroid-like molecules with one ring opened. Calcitriol raises calcium absorption from the gut into the blood. In hypercalcemia (too much calcium in the blood) these drugs are not wanted, so hypercalcemia is the limiting factor for their use. Calcipotriene was an attempt to lower the calcium effect while keeping the antiproliferative one. He said that attempt did not work: both drugs still enhance calcium absorption and both are limited by hypercalcemia.</p>
<p>The drawing is a pathway from 7-dehydrocholesterol to cholecalciferol (vitamin D3), then 25-OH-cholecalciferol (the inactive circulating form), then calcitriol by 1-alpha-hydroxylase. The reactions, organs and enzymes are blanks to fill from the take-home reading (Bikle, Endotext, the link on slide 2); that reading places the steps in skin, liver and kidney (Bikle, Endotext 2025, as used in the practice items).</p>
<p><b>Points.</b> The reading is worth 2 points. The question asks for one of three things: the reaction, the organ or the enzyme.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;I have assigned this as a reading assignment that you can do, and out of that you get 2 points.&rdquo; <span class='g2-src'>(11/04 T@1264-1359)</span></li>
<li>&ldquo;That they can affect bone health. What that means is that vitamin D increases the absorption of calcium into the bloodstream.&rdquo; <span class='g2-src'>(11/04 T@1645-1770)</span></li>
<li>&ldquo;Why is that there is a condition called hyper. Casemia. If you already the bloodstream already has too much calcium in it, then you probably don't want to use these molecules.&rdquo; [he said 'Casemia': calcemia, in hypercalcemia] <span class='g2-src'>(11/04 T@1909-2084)</span></li>
<li>&ldquo;so this becomes the limiting. Factor. For their use.&rdquo; <span class='g2-src'>(11/04 T@2112-2164)</span></li>
<li>&ldquo;One, the reaction. 2 The organs where these reactions occur, and 3. The enzymes. Involved OK.&rdquo; <span class='g2-src'>(11/04 T@3533-3626)</span></li>
<li>&ldquo;The question will be very simple and straightforward. Uh, asking you to determine one of these things, all right?&rdquo; <span class='g2-src'>(11/04 T@4082-4195)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BKX-001 BKX-002 KX-008 KX-012 S4-001 S4-002 S4-003 S4-004 S4-005 S4-006 S4-007 S4-008 S4-009 S4-010 S4-011 S4-012 S4-013 S4-014 S4H-001 S4H-002 S4H-003 S4H-009 XS-009" data-qlabel="DPAW slide 27">Practice these (23)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-8">
<h3>Dr. Sikazwe, assigned slides · pimecrolimus, tacrolimus and cyclosporine</h3>
<div class="gbar"><span>Objective (DPAW 28, 32, 33)</span><b>The two topical &ldquo;limus&rdquo; drugs are alike in lipophilicity, structure and mechanism but differ in skin absorption; classify a cyclic molecule from the group circled; cyclosporine with grapefruit juice</b><i>DPAW slide 28, 32, 33</i></div>
<div class="gpt"><h5>Pimecrolimus and tacrolimus (DPAW slide 28) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Both drugs are macrolide (large-ring) or lactone (cyclic ester) immunosuppressants and both are calcineurin inhibitors. The slide gives the mechanism as calcineurin inhibition, which decreases the release of inflammatory cytokines; he said he was not so worried about the mechanism here. The slide says the two are similar in lipophilicity, structure and mechanism but differ in skin permeation.</p>
<p>Pimecrolimus has higher non-specific skin protein binding, so it does not get into the systemic circulation and systemic adverse effects are low. Tacrolimus has low skin protein binding, so it can go in and enter the systemic circulation. His point is that the difference between the two is this pharmacokinetic property, absorption through the skin.</p>
<p>The drawing places them side by side: cLogP 6.0 for pimecrolimus and 5.8 for tacrolimus, so both are very lipophilic (he said the log P values are similar). Both drawings show the same large ring, a six-membered ring containing a nitrogen, and a cyclohexyl ring at the top. The differences are colored: a chlorine on the cyclohexyl ring of pimecrolimus where tacrolimus has a hydroxyl, and a short ethyl group where tacrolimus has an allyl group.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;Structure is similar. The only points of difference are that chlorine and that methyl group, and here you have that ylic group and hydroxy.&rdquo; [on the slide the pairs are chlorine versus hydroxyl, and ethyl versus allyl] <span class='g2-src'>(11/04 T@4610-4749)</span></li>
<li>&ldquo;they, they do not, uh, penetrate the skin highly, especially Pimecrolimus. It does not penetrate the skin highly. Why? Because Of high non-specific protein binding.&rdquo; <span class='g2-src'>(11/04 T@4927-5091)</span></li>
<li>&ldquo;But tacrolimus. On the other hand, has low skin. Binding. So that means it can do the opposite, can go in, OK?&rdquo; <span class='g2-src'>(11/04 T@5366-5476)</span></li>
<li>&ldquo;And because they are cyclic molecules, right? OK? So they have this. Group there We can call them, we can classify them chemically. Differently.&rdquo; <span class='g2-src'>(11/04 T@6097-6241)</span></li>
<li>&ldquo;So let's uh look at that question. It will come up.&rdquo; <span class='g2-src'>(11/04 T@6276-6327)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-003 KX-018 KX-019 S4-015 S4-016 S4-017 S4-018 S4-019 S4-020 S4-071 S4H-004 S4H-012 XS-007" data-qlabel="DPAW slide 28">Practice these (13)</button></p>
</div>
<div class="gpt"><h5>Polleve-3: classify the limus drug by the circled group (DPAW slide 32) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> This is his PollEv (live poll) question: &ldquo;Due to the selected functionality, this Limus drug molecule may be chemically classified as a ........&rdquo; The options are (A) lactam, (B) lactone, (C) steroid, (D) pteridine. The drawing is the pimecrolimus macrocycle (it carries the chlorine) with a red circle around the ester group in the ring, next to the six-membered ring that contains the nitrogen.</p>
<p>The reasoning has two steps. The circled group is an ester. An ester that is part of a ring is a cyclic ester, and cyclic esters are lactones. A lactam is the cyclic amide, which is a different group. A steroid is a four-ring skeleton and a pteridine is the ring system of methotrexate, so neither fits a macrocycle with an ester in it. The key is B, lactone, which agrees with the heading of slide 28, &ldquo;Macrolide or lactone immunosuppressants&rdquo;.</p>
<p><b>Unresolved points.</b> The transcript is garbled where he moves from lactones toward amides (around 11/04 T@11500-11600), and the poll results are not spoken. He ends on lactones and rejects steroids, so an exam written from his lecture keys lactone.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;I hinted on a question. If you had a molecule like this, and I circle a functional group, and I say, based on this circled feature, Uh, how can we chemically classify this?&rdquo; <span class='g2-src'>(11/04 T@11267-11439)</span></li>
<li>&ldquo;Are they called lactones? Yes. Are they called steroids? Careful now. So, no, no, no. OK. All right.&rdquo; <span class='g2-src'>(11/04 T@11649-11749)</span></li>
<li>&ldquo;So, it could be a question just that simple, just for you to understand the chemical structures you're dealing with.&rdquo; <span class='g2-src'>(11/04 T@11750-11866)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="S4-020 S4-021 S4H-012" data-qlabel="DPAW slide 32">Practice these (3)</button></p>
</div>
<div class="gpt"><h5>Cyclosporine (DPAW slide 33) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Cyclosporine is an immunosuppressant, an 11 amino acid cyclic peptide. Peptide means the units are joined by amide links, so a cyclic peptide is also a cyclic amide, a lactam. The slide calls it a prodrug, activated by complexation with the cyclophilin receptor; he said it is activated simply by binding its receptor and not by metabolism. The complex inhibits calcineurin phosphatase and T-cell signaling. The ribbon diagram shows cyclophilin A with cyclosporin bound.</p>
<p>ADMET (absorption, distribution, metabolism, excretion, toxicity) from the slide: oral bioavailability 30% because of the first-pass effect, logP 4, half-life 19 h, extensively metabolized by 3A4. He did not read the logP and half-life aloud.</p>
<p>He asked: what happens when cyclosporine is given with grapefruit juice? He said the blood levels go up because the first-pass metabolism is blocked, and the enzyme that carries out that metabolism is 3A4. He asked this question aloud; it is not printed on the slide.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;It is also described as an 11 amino acid cyclic peptide. When we say peptides, we are simply talking about these amide bonds&rdquo; <span class='g2-src'>(11/04 T@11974-12098)</span></li>
<li>&ldquo;So, here, the cyclic peptide, this can be described then as a what? And a lactam, right? cyclic lactam too.&rdquo; <span class='g2-src'>(11/04 T@12152-12259)</span></li>
<li>&ldquo;this is described as a prodrug, and how it's bioactivated is not metabolic. It's simply by its binding to its receptor. When it binds and forms that complex with the receptor, it gets activated.&rdquo; <span class='g2-src'>(11/04 T@12268-12462)</span></li>
<li>&ldquo;The or bioavailability is uh. Very poor for this molecule, right? 30%. This is ascribed to first pass metabolism&rdquo; <span class='g2-src'>(11/04 T@12781-12893)</span></li>
<li>&ldquo;that first pass metabolism and ultimate metabolism of this molecule is carried out by 3F4.&rdquo; [he said '3F4': CYP3A4] <span class='g2-src'>(11/04 T@12955-13045)</span></li>
<li>&ldquo;Of Cylo Plus Grapefruit juice, G F G JF. What would be the effect? Of co-administering these two. What would you expect?&rdquo; [he said 'Cylo': cyclosporine] <span class='g2-src'>(11/04 T@13256-13376)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-002 KX-009 KX-010 KX-019 S4-021 S4-038 S4-039 S4-040 S4-041 S4-042 S4-043 S4H-011 S4H-012 S4H-013 XS-008" data-qlabel="DPAW slide 33">Practice these (15)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-9">
<h3>Dr. Sikazwe, assigned slides · retinoids, methotrexate and apremilast in psoriasis</h3>
<div class="gbar"><span>Objective (DPAW 29, 30, 31, 34)</span><b>The retinoids used in psoriasis; methotrexate as a multi-target drug and the structure features it needs; apremilast&rsquo;s reliance on 3A4 for metabolism</b><i>DPAW slide 29, 30, 31, 34</i></div>
<div class="gpt"><h5>Retinoids in psoriasis: tazarotene (DPAW slide 29) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Retinoids are derived from vitamin A and normalize keratinization (skin cell maturation) and proliferation. The topical agent is tazarotene (Tazorac), described as an acetylenic retinoid, meaning it contains an alkyne. The oral agents are acitretin (Soriatane) and isotretinoin (Accutane). The slide says &ldquo;slides 46-49&rdquo; for the fuller description of retinoids; in class he said to correct this to 47 through 50, which are DPAW slides 48 to 51 (11/04 T@6327-6380 and T@7600-7650).</p>
<p>The drawing shows tazarotene as an ethyl ester with an arrow to its active metabolite, the free carboxylic acid. An ester prodrug is inactive until a carboxylesterase (CE enzyme) removes the ethyl group by hydrolysis in the skin. Acitretin has an aromatic ring and a chain of carbon-carbon alkenes ending in a carboxylic acid; isotretinoin has a trimethylcyclohexene ring and a similar chain with one cis alkene marked in red, also ending in a carboxylic acid. Retinoids act on nuclear receptors (RAR and RXR), and the carboxylic acid at the end is their common feature.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;Retinoids bind to what? These are non-receptors, RXR and so on, receptors, right? Nuclear receptors&rdquo; [he said 'non-receptors': nuclear receptors] <span class='g2-src'>(11/04 T@6457-6556)</span></li>
<li>&ldquo;And it's also what? And Esther. Pro-drug. So that when you give it, when you apply it to the skin, it needs ester hydrolysis by. CE enzymes, right, for activation.&rdquo; [he said 'Esther': ester] <span class='g2-src'>(11/04 T@6905-7068)</span></li>
<li>&ldquo;What are CE enzymes? Mhm. Carboxyl estraes.&rdquo; [carboxylesterases] <span class='g2-src'>(11/04 T@7069-7112)</span></li>
<li>&ldquo;And what you start seeing with all these retinoids is that they have this common functional group at the end, this carboxylic acid. So that's an important common feature that they need to have.&rdquo; <span class='g2-src'>(11/04 T@7135-7328)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-004 KX-009 KX-013 KX-014 S4-022 S4-023 S4-024 S4-025 S4-026 S4-027 S4-049 S4H-005 S4H-012 S4H-013 XS-001" data-qlabel="DPAW slide 29">Practice these (15)</button></p>
</div>
<div class="gpt"><h5>Methotrexate (DPAW slide 30) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Methotrexate (MTX; Folex, Mexate) is classified chemically as a pteridine, a two-ring nitrogen system. It is antiproliferative: it competitively inhibits dihydrofolate reductase (DHFR), the enzyme that makes tetrahydrofolic acid, which the slide calls an essential co-factor for DNA synthesis. It also has immunosuppressant and anti-inflammatory activities. He called it multi-target, since it is used in cancer, in arthritic conditions and here in psoriasis.</p>
<p>The box on the slide shows folic acid being reduced by DHFR to tetrahydrofolic acid. Methotrexate is an antimetabolite, an analog of folic acid (vitamin B9). He said the only points of difference are &ldquo;this methyl group and that amine&rdquo;. On the drawing these are the N-CH3 (folic acid has N-H there) and the NH2 on the pteridine ring (folic acid has OH there). It sits in the same enzyme cavity and has higher affinity than folic acid, so it blocks folic acid. Without tetrahydrofolic acid there is no DNA synthesis, and the cells cannot multiply.</p>
<p><b>Wording.</b> In this passage he does not say &ldquo;dihydrofolate reductase&rdquo; aloud. He says the enzyme that processes folic acid into the required tetrahydrofolic acid, so DHFR comes from the slide.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;So, chemically we classify it as a pteridine based on this group here. That's the pteridine feature.&rdquo; <span class='g2-src'>(11/04 T@8221-8321)</span></li>
<li>&ldquo;Methotrexate goes in there and sits in the same enzyme cavity and competitively inhibits the binding of what? Folic acid.&rdquo; <span class='g2-src'>(11/04 T@8972-9093)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-001 KX-012 S4-028 S4-029 S4-030 S4-031 S4-032 S4-037 S4H-003 S4H-011 S4H-015" data-qlabel="DPAW slide 30">Practice these (11)</button></p>
</div>
<div class="gpt"><h5>Methotrexate structure-activity relationship (DPAW slide 31) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> The structure-activity relationship (SAR) lists what a molecule needs to behave like methotrexate: a pteridine ring, p-aminobenzoic acid and glutamic acid. The pteridine ring should remain aromatic. Aromatic N-alkylation decreases activity. The N-CH3 is essential for activity.</p>
<p>In the drawing the pteridine is brown, the p-aminobenzoyl ring is red, and glutamic acid is green; the N-CH3 and the NH2 on the pteridine are blue. Folic acid sits beside it for comparison, with an OH on the pteridine and N-H in place of N-CH3 (both blue). Reading the SAR as a design rule: keep all three parts, keep the pteridine aromatic, do not alkylate the aromatic amines, and keep the N-methyl.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;These molecules that were going to behave like uh methotrexate had to have the following features. One, the teridine ring, which is this. 2, the paraaminobenzoic acid, the ACE group. And you, it also needed glutamic acid.&rdquo; [he said 'teridine': pteridine; 'the ACE group': the p-aminobenzoic acid group] <span class='g2-src'>(11/04 T@9997-10218)</span></li>
<li>&ldquo;the requirement was that when you have a pteridine ring, it should remain aromatic. So, if you change the double bonds within that pteridine ring, you're messing up the activity of that molecule.&rdquo; <span class='g2-src'>(11/04 T@10332-10527)</span></li>
<li>&ldquo;These are aromatic amines, right? If you alkylate any one of those, you also drop the activity.&rdquo; <span class='g2-src'>(11/04 T@10617-10712)</span></li>
<li>&ldquo;And they also noticed that this amethylation here is also essential for activity. So this is the SAR that came with this.&rdquo; [he said 'amethylation': the N-methyl group] <span class='g2-src'>(11/04 T@10806-10927)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-001 KX-011 S4-028 S4-032 S4-033 S4-034 S4-035 S4-036 S4H-010" data-qlabel="DPAW slide 31">Practice these (9)</button></p>
</div>
<div class="gpt"><h5>Apremilast (Otezla) (DPAW slide 34) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Apremilast (Otezla) treats psoriatic arthritis and moderate to severe plaque psoriasis. It is an isoindoline (the pink ring system with two carbonyls) and a phosphodiesterase-4 (PDE4) inhibitor; blocking PDE4 raises cAMP and lowers pro-inflammatory molecules. It is extensively metabolized, 3A4 major and 1A2 and 2A6 minor, via two steps. The text line leaves both names blank (&ldquo;via O-&hellip; and O-&hellip;&rdquo;); the drawing labels the first arrow O-demethylation and ends in a box marked O-Gluc (the glucuronide). Glucuronidation of the -OH metabolite is done by UGTs. His take-home point is the reliance on 3A4, so avoid 3A4 inhibitors and 3A4 inducers.</p>
<p><b>Conflict, stated both ways.</b> The slide arrow and the 11/04 lecture both say O-demethylation: removing a methyl group from the methoxy on the phenyl ring, leaving the -OH metabolite. The drawing also carries an ethoxy group. The Exam 1 question showed a picture that indicated the ethyl group, which would be O-deethylation. Both are removal of an alkyl group from an aryl ether. An exam written from his lecture keys O-demethylation, but an item that circles the ethyl group asks for O-deethylation, so read which group is marked.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;what I wanted to take from here is just simply the reliance of this molecule on 3A4 for its metabolism, and you see some of the metabolism that you see are going to be Odimethylation,&rdquo; [he said 'Odimethylation': O-demethylation] <span class='g2-src'>(11/04 T@13895-14078)</span></li>
<li>&ldquo;So all demethylation. And once that occurs, then you get this O metabolite, right, hydroxymetabolite, which then can be glucuronidated or glue. These are UGTs.&rdquo; <span class='g2-src'>(11/04 T@14108-14267)</span></li>
<li>&ldquo;So, whatever you do, here, again, avoid what? 384 Inhibitors 304 Inducers&rdquo; [he said '384' and '304': 3A4] <span class='g2-src'>(11/04 T@14272-14345)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="KX-012 S4-044 S4-045 S4-046 S4-047 S4H-011 S4H-014 S4H-015 XS-006 XS-012" data-qlabel="DPAW slide 34">Practice these (10)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-10">
<h3>Dr. Sikazwe, assigned slides · Hydroxy acid keratolytics</h3>
<div class="gbar"><span>Objective (DPAW slides 43, 44, 45)</span><b>Know what makes a hydroxy acid an alpha-hydroxy acid, how glycolic acid and salicylic acid differ, and apply the definition to a set of structures</b><i>DPAW slide 43, 44, 45</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Glycolic acid and salicylic acid (DPAW slide 43) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Hydroxy acids are keratolytics. Under salicylic acid the slide says increased hydration, and that a low pH causes the lower skin layers to swell, soften and desquamate (shed). <b>Glycolic acid (GA)</b>, HO-CH2-COOH, is an alpha-hydroxy acid: the OH sits on the carbon next to the carboxylic acid. It is hydrophilic, and higher concentrations give deeper skin peels. He gave a pKa of about 3 (an acid, so a low pKa) and a log P of about 1: water soluble, small, so it acts mostly on the surface. The arrow marked DMEs (drug-metabolizing enzymes) leads to a product with two carboxylic acids; he said two enzymes do this, alcohol dehydrogenase and aldehyde dehydrogenase.</p>
<p class="g2-p"><b>Salicylic acid (SA)</b> is drawn as a benzene ring with a carboxylic acid and an OH on the next ring carbon. The slide calls it more lipophilic than glycolic acid; he gave a log P of 1 to 2 because of the aromatic ring. Because it is an acid, some people complain of itching. The ring carbon next to the acid is the alpha carbon and carries no OH; the OH is on the next one, so he called it a beta-hydroxy acid (&ldquo;2 carbon removed from the carboxylic acid&rdquo;). Of what reaches the systemic circulation, 75% is conjugated with an amino acid to a glycine conjugate; the slide shows this product only as a question mark.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;And because this is also an acid, it's going to be water soluble, so it's a hydrophilic. So log p value is around 1. So it's going to act mostly on the surface when you give it.&rdquo; <span class="g2-src">11/04 T@20585-20762</span></li>
<li>&ldquo;So, minimal. Metabolism. Leads you to this. Diaccid So I would ask you, how many enzymes are involved in this place. Two enzymes, right? OK. Remember that tandem of enzymes, alcohol dehydrogenase and aldehyde dehydrogenase.&rdquo; [he said 'Diaccid': diacid] <span class="g2-src">11/04 T@20877-21100</span></li>
<li>&ldquo;So this is a beta hydroxy acid. OK. 2 carbon removed from the carboxylic acid.&rdquo; <span class="g2-src">11/04 T@22163-22241</span></li>
<li>&ldquo;This undergoes metabolism, 75%. Whatever gets in systemic circulation, 75% amino acid conjugation to a glycine conjugate.&rdquo; <span class="g2-src">11/04 T@22359-22480</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-055 S4-056 S4-057 S4-058 S4-059 S4-060 S4-061 S4-062 S4-071 S4H-016 S4H-017 S4H-018 S4H-019 XS-003" data-qlabel="DPAW slide 43">Practice these (14)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Hydroxy acid structure-activity relationship (DPAW slide 44) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The drawing is a generic alpha-hydroxy acid, HO2C-C(alpha)(OH)-R, with the alpha carbon in red and R in blue. The structure-activity relationship (SAR) has three parts: a COOH group (or groups); an OH on the alpha carbon, the carbon next to the CO2H, on most of them; and R, mostly alkyl. He added that R can also be an aromatic group, and that alkyl groups are the usual choice on that same alpha carbon, and the molecules still work. These are small acids, and this is the keratolytic class.</p>
<p class="g2-p">A hydroxy acid is named for its OH. The position of that OH, alpha or beta, is what separates glycolic acid (alpha) from salicylic acid (beta) on slide 43.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So this hydroxy group needs to be on the alpha atom, 2, the carboxylic acid, and you can do some things.&rdquo; <span class="g2-src">11/04 T@22949-23053</span></li>
<li>&ldquo;You can decorate this with, you know, aromatic groups, archal groups, but mostly archal groups can be put on that same alpha alpha atom. And you still have molecules that work, OK?&rdquo; [he said 'archal': alkyl] <span class="g2-src">11/04 T@23054-23234</span></li>
<li>&ldquo;So, just an exercise, can you determine or group which ones are alpha hydroxy aids? How many alpha hydroxy acids do we have?&rdquo; <span class="g2-src">11/04 T@23288-23412</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-055 S4-063 S4-064 S4-120 S4H-018 XS-003" data-qlabel="DPAW slide 44">Practice these (6)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Poll: how many alpha-hydroxy acids are in the figure? (DPAW slide 45)</h5>
<p class="g2-p"><b>On the slide.</b> His PollEv question is &ldquo;How many alpha-hydroxy acids are in the figure below?&rdquo; with the options One, Two, Three, Four. The figure holds five small carboxylic acids. To test each one, find the carboxylic acid, step to the carbon next to it (the alpha carbon) and look for an OH on that carbon.</p>
<ul>
<li>Top center, HOOC-CH(OH)-CH(OH)-COOH: each OH is on a carbon next to a carboxylic acid. Yes.</li>
<li>Top right, glycolic acid: yes.</li>
<li>Left, (CH3)2CH-COOH: no OH other than the one in the carboxylic acid itself. No.</li>
<li>Bottom, with a cyclopropane ring: the CH(OH) carbon is next to the right-hand carboxylic acid. Yes.</li>
<li>Right, with a cyclohexane ring: the carboxylic acid is on ring carbon 1 and the OH on ring carbon 2, one carbon farther than alpha. No.</li>
</ul>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;How do we define alpha hydroxy? Hydroxy group needs to be next to the what? on the carbon that is next to the carboxylic acid.&rdquo; <span class="g2-src">11/04 T@23505-23631</span></li>
<li>&ldquo;What about this one? No? What about this one? Yes, look at that, that next to the carboxylic acid, yes. What about this one? No. So how many? OK.&rdquo; <span class="g2-src">11/04 T@23723-23868</span></li>
</ul></div>
<div class="g2-note"><span class="g2-k">Conflict: the count was never said aloud</span><p>He did not say the count. He ended with &ldquo;So how many? OK.&rdquo; and moved on to sulfur, and the answers from the room are cut from the recording. Applying his definition to the five structures gives three (the top-center, top-right and bottom structures). An exam written from his lecture would key Three, as the practice question does; his own count is not on record.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-120" data-qlabel="DPAW slide 45">&#9733; Practice these (1)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-11">
<h3>Dr. Sikazwe, assigned slides · Sulfur and benzoyl peroxide</h3>
<div class="gbar"><span>Objective (DPAW slides 46, 47)</span><b>Know the drawbacks of sulfur and how it is thought to work, and the two things benzoyl peroxide does on the skin</b><i>DPAW slide 46, 47</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sulfur (DPAW slide 46) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Sulfur is used alone or in mixtures: sulfur with sodium sulfacetamide (Plexion, Avar) or sulfur with zinc oxide. The mechanism line is under CBDA (chemical basis of drug action): <b>thiolysis</b>. Sulfur reduces or breaks the disulfide bonds in keratin. The drawing shows a keratin helix held by S-S bridges, a thiolysis arrow, and the same helix with free SH groups.</p>
<p class="g2-p">Keratin is a protein, and its disulfide bonds are between cysteine residues, the amino acid he named. He called the evidence anecdotal and the mechanism less clear. Two drawbacks he named: allergy and smell. Particle size matters: it must be small, and large-particle sulfur is less effective.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Uh, what are some of the drawbacks to using sulfur? Cause of allergies. And some people just uh detest sulfur for what? Smell.&rdquo; <span class="g2-src">11/04 T@24147-24273</span></li>
<li>&ldquo;this needs to be very what small particle. So. Large particle sulfur, less effective.&rdquo; <span class="g2-src">11/04 T@24663-24748</span></li>
<li>&ldquo;there's some, uh, anecdotal evidence that this molecule works by thiolysis. That sulfur goes and breaks these. Disulfide bonds present in keratin.&rdquo; <span class="g2-src">11/04 T@25122-25268</span></li>
<li>&ldquo;Where do you find the sulfide bonds in amino acid? Cysteine, right?&rdquo; [he said 'sulfide bonds': disulfide bonds] <span class="g2-src">11/04 T@25475-25542</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS4-005 S4-021 S4-065 S4-066 S4-067 S4-068 S4H-019 S4H-020" data-qlabel="DPAW slide 46">Practice these (8)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Benzoyl peroxide (DPAW slide 47) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Benzoyl peroxide (BPO) is in Oxy-10, Clearasil and ProActiv products, and the slide names its chemical class, peroxide. It does two things: lowers pH and forms free radicals. The note on the slide says it is absorbed by the skin and forms benzoic acid, which is excreted in urine. The drawing has BPO (log P = 3.5) breaking into benzoic acid and a benzoyl radical (a radical, marked with a red dot on an oxygen).</p>
<p class="g2-p">Because it has a lipophilic part, it penetrates the skin well. Then the peroxide bond (O-O) breaks, giving two products with two different jobs: benzoic acid lowers the skin pH, which supports the keratolytic activity; the benzoyl radical kills bacteria.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;It does two things. It lowers the pH, skin pH, and it also produces free radicals.&rdquo; <span class="g2-src">11/04 T@25789-25871</span></li>
<li>&ldquo;so benzoic acid brings to the fore lowering of what? Skin pH. So you can promote even this keratolytic activity from that.&rdquo; <span class="g2-src">11/04 T@26093-26215</span></li>
<li>&ldquo;Then this one here. The benzo a radical. Go to kill some of the Bacteria.&rdquo; [he said 'benzo a radical': benzoyl radical] <span class="g2-src">11/04 T@26216-26289</span></li>
<li>&ldquo;So, keratolytic coming from here, and benzoyl peroxide, killing off bacteria. Anti-inflammatory&rdquo; <span class="g2-src">11/04 T@26496-26591</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-021 S4-069 S4-070 S4-071 S4H-019 S4H-021" data-qlabel="DPAW slide 47">Practice these (6)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-12">
<h3>Dr. Sikazwe, assigned slides · Retinoids by generation</h3>
<div class="gbar"><span>Objective (DPAW slides 48, 49, 50, 51)</span><b>Know that retinoids are vitamin A derivatives with anti-inflammatory, anti-proliferative and sebum-lowering effects, that teratogenicity limits them, and how the three generations differ</b><i>DPAW slide 48, 49, 50, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Retinoids: what they are (DPAW slide 48) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tretinoin, isotretinoin, acitretin, adapalene, tazarotene and trifarotene are derivatives of vitamin A1 (retinol). The drawing is retinol: a trimethylcyclohexene ring, a chain of alternating alkenes (a polyene) and a terminal CH2-OH, with an arrow to a box labeled RETINOIDS. The slide lists them as retinoic receptor (RAR and RXR) agonists with four effects: anti-inflammatory, anti-proliferative, decreased sebum production and teratogenic effects. In class he read out the first three and then the teratogenic caution; the RAR and RXR line was not read out on this slide.</p>
<p class="g2-p">Teratogenic means able to cause birth defects, so not everyone can use a retinoid. He called this the major limitation of these potent molecules, said part of it depends on the concentration, and told students to carry the caution with them.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So they have several properties anti-inflammatory, anti-prohiferative, even they suppress sebum oil production.&rdquo; [he said 'prohiferative': proliferative] <span class="g2-src">11/04 T@27032-27143</span></li>
<li>&ldquo;So if they are teratogenic, can everybody use them? If they are teratogenic, can everyone use them? No.&rdquo; <span class="g2-src">11/04 T@27255-27358</span></li>
<li>&ldquo;So, this is a caution that you all need to make sure you carry that with you.&rdquo; <span class="g2-src">11/04 T@27363-27440</span></li>
<li>&ldquo;Maybe the less concentrated ones can be used, but there's always that caveat.&rdquo; <span class="g2-src">11/04 T@27552-27629</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-027 S4-072 S4-073 S4H-003 S4H-009" data-qlabel="DPAW slide 48">Practice these (5)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> First generation, non-aromatic: tretinoin and isotretinoin (DPAW slide 49) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Retinol sits in a box as the parent compound. <b>Tretinoin</b> (Retin-A products) was the first retinoid for acne and is all-trans retinoic acid: every alkene in the chain is trans, and the chain ends in a carboxylic acid. He said he thinks tretinoin is topical. <b>Isotretinoin</b> (Accutane, for example) is 13-cis retinoic acid, and he said it is used orally: the alkene at carbon 13 is cis, highlighted in pink. The two are geometric isomers of each other, with the same atoms and only the orientation at that one alkene different. Neither has an aromatic ring.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;You have what are called the first gen retinoids. They are non-aromatic. There is no aromatic group in them. This is where we find tretinoin and isotretinoin.&rdquo; <span class="g2-src">11/04 T@27663-27821</span></li>
<li>&ldquo;So tretinoin is used, I think this is topical. And this one is used. Uh, orally.&rdquo; [the slide does not state the routes; it lists Retin-A products for tretinoin and Accutane for isotretinoin] <span class="g2-src">11/04 T@27822-27902</span></li>
<li>&ldquo;So, this is a cis retinoic acid, 13 in particular, 13 carbon cis. And that's the only difference.&rdquo; <span class="g2-src">11/04 T@28384-28481</span></li>
<li>&ldquo;So this relationship, C strands is called geometric isomerism. these are geometric. Isomers. C strands relationship.&rdquo; [he said 'C strands': cis-trans] <span class="g2-src">11/04 T@28609-28725</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-013 KX-014 S4-074 S4-075 S4-076 S4-077 S4H-005 S4H-006 S4H-007 S4H-008 XS-001 XS-002" data-qlabel="DPAW slide 49">Practice these (12)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Second generation, mono-aromatic: etretinate and acitretin (DPAW slide 50) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> <b>Etretinate</b> is an ethyl ester prodrug with one aromatic ring (carrying an OMe and three methyls) and a polyene chain. The slide notes: t1/2 120 days, highly lipophilic, narrow therapeutic index (TI), teratogenic, removed from the US market in 1998. An arrow leads to <b>acitretin</b> (Soriatane), the active form of etretinate, which is the free carboxylic acid. He did not say the 120 days or the 1998 date. He said the ester needs bioactivation by CEs (carboxylesterases), that acitretin keeps some teratogenicity but not to the extent of etretinate, and that acitretin is now used directly.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;The second class is monoaromatic.&rdquo; <span class="g2-src">11/04 T@28865-28898</span></li>
<li>&ldquo;it came with things like this narrow therapeutic index, quite teratogenic, so they removed it from the market.&rdquo; <span class="g2-src">11/04 T@28978-29088</span></li>
<li>&ldquo;Luckily somebody was observant enough that. This requires bioactivation to this. CEs are involved to get you to here.&rdquo; <span class="g2-src">11/04 T@29089-29206</span></li>
<li>&ldquo;Yes, there's some retention of teratogenicity, but not to the extent of the treatment.&rdquo; [he said 'treatment': etretinate] <span class="g2-src">11/04 T@29296-29382</span></li>
<li>&ldquo;So 2nd gen monoaromatics, that's where you find aci acid retin.&rdquo; [he said 'aci acid retin': acitretin] <span class="g2-src">11/04 T@29679-29742</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-014 S4-074 S4-078 S4-079 S4H-005 S4H-006 S4H-007 XS-001" data-qlabel="DPAW slide 50">Practice these (8)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Third generation, poly-aromatic: adapalene, tazarotene, trifarotene (DPAW slide 51) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> <b>Adapalene</b> (Differin) is the first synthetic retinoid, <b>trifarotene</b> (Aklief) is also on the list, and <b>tazarotene</b> (Tazorac) is a prodrug. The drawing shows tazarotene, an ethyl ester, with an arrow marked ?? to tazarotenic acid, the active form. Adapalene and trifarotene are directly active because they carry an exposed carboxylic acid; the ester is what makes tazarotene a prodrug, and he said a carboxylesterase bioactivates it. General ADMET (absorption, distribution, metabolism, excretion, toxicity): all are lipophilic and have low systemic absorption, which means fewer systemic adverse effects. He said they are retained in the skin, and that the explanation is not clear.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So now you have 3rd generation, we may be on 4th generation retinoids, uh, but the 3rd generation has all these polyaromatic, poly several aromatic features.&rdquo; <span class="g2-src">11/04 T@29902-30059</span></li>
<li>&ldquo;That's where you find adapalin, triperrotin, tazerrotin.&rdquo; [he said 'adapalin, triperrotin, tazerrotin': adapalene, trifarotene, tazarotene] <span class="g2-src">11/04 T@30105-30161</span></li>
<li>&ldquo;these two. Directly active because they have this exposed carboxylic acid, right? But. Is a prodrug carboxyestrase is. To get it bioactivated&rdquo; [the unnamed prodrug is tazarotene, per the slide] <span class="g2-src">11/04 T@30169-30310</span></li>
<li>&ldquo;if we were to look at log p values, they're quite lipophilic. OK, but somehow they get retained in the skin, and the explanation is not that clear.&rdquo; <span class="g2-src">11/04 T@30325-30472</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-013 KX-014 S4-023 S4-025 S4-074 S4-080 S4-081 S4-082 S4H-005 S4H-006 S4H-007 XS-001" data-qlabel="DPAW slide 51">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-13">
<h3>Dr. Sikazwe, assigned slides · Hormonal acne therapy</h3>
<div class="gbar"><span>Objective (DPAW slides 52, 53)</span><b>Know that the hormonal agents lower sebum production, that estrogens are steroids, and how the steroidal and non-steroidal antiandrogens differ in how they work</b><i>DPAW slide 52, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Estrogens in oral contraceptives (DPAW slide 52) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The title line is &ldquo;OCs act against hormonal triggers of acne&rdquo;. OCs are oral contraceptives, used here as hormonal adjunct therapy in females: ethinyl estradiol with norgestimate (Ortho Tri-Cyclen Lo), and ethinyl estradiol with drospirenone (Yasmin, Yaz). The reason noted on the slide is sebum oil production. The drawing shows all three structures. In the annotated copy the rings are lettered A to D on norgestimate, and he said &ldquo;A, B, C, D&rdquo; as he described the steroid nucleus:</p>
<ul>
<li>ethinyl estradiol: aromatic A ring, 3-OH, 17-ethynyl (an alkyne), 17-OH</li>
<li>norgestimate: oxime at C3, 17-acetate, 17-ethynyl, 13-ethyl</li>
<li>drospirenone: cyclopropane rings, a spiro lactone at C17, 3-keto-4-ene</li>
</ul>
<p class="g2-p">All three share the four-ring steroid nucleus, so structurally they are steroids; mechanistically they suppress sebum oil production by normalizing the hormones.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So all these, let me just say, these are, these are all going to be what? Steroids, right? Because you know the structure of steroids A, B, C, D&rdquo; <span class="g2-src">11/04 T@31021-31165</span></li>
<li>&ldquo;Essentially, what they do is they suppress Bomb production. That's the C bomb oil production.&rdquo; [he said 'Bomb' and 'C bomb': sebum] <span class="g2-src">11/04 T@31372-31465</span></li>
<li>&ldquo;So structurally, they're steroids, right? They're mechanistically, they're suppressing sebum oil production.&rdquo; <span class="g2-src">11/04 T@31579-31687</span></li>
<li>&ldquo;So here you find ethno estradiol, ethno estradiol, co-formulated with these agents also.&rdquo; [he said 'ethno estradiol': ethinyl estradiol] <span class="g2-src">11/04 T@31233-31321</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-015 S4-083 S4-084 S4H-022 S4H-023 XS-011" data-qlabel="DPAW slide 52">Practice these (6)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Antiandrogens (DPAW slide 53) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<table class="g2-table g2-stack">
<caption>Antiandrogens (AAs) on the slide</caption>
<thead><tr><th scope="col">Type</th><th scope="col">Drug</th><th scope="col">What the drawing shows</th></tr></thead>
<tbody>
<tr><th scope="row">Steroidal AA</th><td><span class="g2-lab">Drug</span>Spironolactone (Aldactone)</td><td><span class="g2-lab">Drawing</span>A steroid with a spiro-lactone and a 7alpha-thioacetyl group</td></tr>
<tr><th scope="row">Non-steroidal AA</th><td><span class="g2-lab">Drug</span>Flutamide (Eulexin)</td><td><span class="g2-lab">Drawing</span>An anilide with CF3 and NO2</td></tr>
<tr><th scope="row">Non-steroidal AA</th><td><span class="g2-lab">Drug</span>Ketoconazole</td><td><span class="g2-lab">Drawing</span>Imidazole, dioxolane, dichlorophenyl and acetylpiperazine</td></tr>
</tbody>
</table>
<p class="g2-p"><b>What each approach does.</b> Some of these diminish testosterone biosynthesis (the slide's note on spironolactone and ketoconazole); flutamide prevents testosterone from binding to its receptor, so testosterone cannot activate its pathways. For ketoconazole he stressed that azoles are strong CYP3A4 inhibitors. Both the estrogenic agents on slide 52 and the antiandrogens lead to less sebum.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Azores are strong inhibitors of what? C enzymes. So 384. Strong 3F4 inhibitor.&rdquo; [he said 'Azores': azoles; 'C enzymes': CYP enzymes; '384' and '3F4': CYP3A4] <span class="g2-src">11/04 T@32466-32544</span></li>
<li>&ldquo;Always when you see Ezo antifugo's. Have that enzyme inhibition. At the front of your mind.&rdquo; [he said 'Ezo antifugo's': azole antifungals] <span class="g2-src">11/04 T@32545-32636</span></li>
<li>&ldquo;It blocks testosterone from binding to its receptor, so testosterone cannot activate. It's pathways, OK?&rdquo; <span class="g2-src">11/04 T@32865-32969</span></li>
<li>&ldquo;So you have a steroidal approach, a non-steroidal approach, and you just differentiate them by how they work. This is the take-home message from this slide.&rdquo; <span class="g2-src">11/04 T@32970-33126</span></li>
<li>&ldquo;So you have less sebum production being being produced in both cases when you use anti-androgens as well as estrogenic compounds.&rdquo; <span class="g2-src">11/04 T@33442-33571</span></li>
</ul></div>
<div class="g2-note"><span class="g2-k">Conflict: which drugs lower testosterone biosynthesis</span><p>In the transcript he says &ldquo;Which one is the steroid? This one, right? OK, so this guy, spironolactone and ketoconazole. These Uh, Diminish Testosterone Testosterone. Biosynthesis. Decrease testosterone biosynthesis, that's the mechanism of action, so it's a steroid. This is not a steroid.&rdquo; (11/04 T@32062-32300). Reading 1 (the slide): spironolactone is the one steroid; ketoconazole and flutamide are non-steroidal. Reading 2 (the speech as transcribed): the sentence names spironolactone and ketoconazole together as lowering testosterone biosynthesis, says &ldquo;so it&rsquo;s a steroid&rdquo; (spironolactone), then &ldquo;This is not a steroid&rdquo; and goes on about the azole (ketoconazole). The handwriting on the slide brackets both drawings with &ldquo;these diminish testosterone biosynthesis&rdquo;. The two agree once the speech is read as: spironolactone and ketoconazole lower biosynthesis, flutamide blocks the receptor, and only spironolactone is a steroid. An exam written from his lecture would key the slide's classification.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-010 KX-015 S4-085 S4-086 S4-087 S4-088 S4-091 S4H-022 S4H-023 XS-004 XS-005 XS-011 XS-012" data-qlabel="DPAW slide 53">Practice these (13)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-14">
<h3>Dr. Sikazwe, assigned slides · Antibiotics for acne</h3>
<div class="gbar"><span>Objective (DPAW slides 54, 55)</span><b>Recognize the antibiotic structures, from small linear azelaic acid to cyclic erythromycin, and identify tetracyclines and tell them apart from steroids</b><i>DPAW slide 54, 55</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Azelaic acid, clindamycin, erythromycin (DPAW slide 54) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The target organism is P. acnes, a gram-positive bacterium. Three agents, in the order he gave them:</p>
<ul>
<li><b>Azelaic acid</b> (Azelex): a C9 bi-carboxylic acid (a diacid) and an anti-inflammatory agent. The drawing is a linear nine-carbon diacid.</li>
<li><b>Clindamycin</b>: a lincomycin (the slide says a sulfur antibiotic from S. lincolnensis), used topically because of GI (gastrointestinal) toxicity.</li>
<li><b>Erythromycin</b>: a macrolide with poor PO (oral) absorption, unstable at pH 4 or lower; structural modifications (acid salts and esters) increase water and lipid solubilities. The drawing is a large ring with two sugars attached.</li>
</ul>
<p class="g2-p">He placed them as options in turn: azelaic acid first, then clindamycin if that does not work, then erythromycin. What he asked students to do with the drawings is sort them by shape: small linear molecules (azelaic acid), through clindamycin, up to the large cyclic macrolide.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Azylic acid, very unusual, but very common in a lot of over these over the counter antibiotics for skin conditions, right? It's a very unusual molecule. It's a dyacid.&rdquo; [he said 'Azylic acid' and 'dyacid': azelaic acid and diacid] <span class="g2-src">11/04 T@34038-34205</span></li>
<li>&ldquo;If that doesn't work, you have options of using clindamycin. If that doesn't work, you can use erythromycin.&rdquo; <span class="g2-src">11/04 T@34274-34382</span></li>
<li>&ldquo;Now, here, you should be able to uh distinguish, right? Just the cyclic, some of the cyclic, some non-cyclic. And then the other ones are linear.&rdquo; <span class="g2-src">11/04 T@34747-34892</span></li>
<li>&ldquo;You can run from small linear molecules to large cyclic molecules as antibiotics.&rdquo; <span class="g2-src">11/04 T@34938-35019</span></li>
</ul></div>
<div class="g2-said"><span class="g2-k">Not needed</span>The antibiotic detail belongs to a later course. He said: &ldquo;Now, A lot of the antibiotic stock is going to be covered in. What course is coming up for you? ID, right? So, here, I'm not going to belabor the point.&rdquo; <span class="g2-src">11/04 T@34387-34539</span> He did not read out the clindamycin and erythromycin lines of the slide (lincomycin class, S. lincolnensis, GI toxicity, pH 4, acid salts and esters).</div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-054 S4-089 S4-090 XS-003 XS-004" data-qlabel="DPAW slide 54">Practice these (5)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Tetracyclines (DPAW slide 55) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tetracycline is broad spectrum. It chelates the metal ions Al3+, Ca2+, Mg2+, Fe3+, Zn (printed Zn3+ on the slide) and Bi3+, forming insoluble salts; a photo shows stained teeth. Its absorption is affected by food (for example dairy), and T1/2 is 8.5 h. <b>Doxycycline and minocycline</b>: food does not affect absorption; both are lipophilic and longer acting (doxycycline t1/2 = 11 to 13 h; minocycline 14 to 22 h). The note: cross reactivities due to structure similarity. The drawings are tetracycline (a linear, fused four-ring core with a 6-OH, 4-dimethylamino, 2-carboxamide and many OH and C=O groups), doxycycline, and minocycline (7-dimethylamino).</p>
<p class="g2-p">He did not read out the half-lives or the metal list. He explained the bone and tooth problem this way: bone and enamel hold a lot of calcium, the drug chelates it, and the insoluble salts stay and weaken the bone or enamel structure and stain. Doxycycline and minocycline were made to overcome the food-absorption problem. A patient allergic to tetracycline is likely to react to these two as well, because of the structural similarity.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Tetracyclines, be able to identify them 1234.&rdquo; [the transcript text &lsquo;1234&rsquo; is unclear; he goes on to say tetracyclines are linear four-ring molecules] <span class="g2-src">11/04 T@35192-35237</span></li>
<li>&ldquo;steroids, they're stacked, right? You see they're stacking, 4 rings stuck. This one is just one planet, one linear molecule.&rdquo; <span class="g2-src">11/04 T@35302-35426</span></li>
<li>&ldquo;one thing that they worry about with the use of tetracycline is the fact that this molecule can accumulate in bone. OK, and even enamel and start standing.&rdquo; [he said 'standing': staining] <span class="g2-src">11/04 T@35525-35680</span></li>
<li>&ldquo;in bone, you have a lot of what? Calcium. OK. And then when they kill it they form these insoluble sals that then remain there. And weaken the bone structure or enamel structure.&rdquo; [he said 'kill it': chelate it] <span class="g2-src">11/04 T@35916-36094</span></li>
<li>&ldquo;this main thing, absorption, being affected by food. So two versions of tetracycline were then That made to overcome this food absorption issue. OK? So, you have doxycycline and minocycline coming out of that.&rdquo; <span class="g2-src">11/04 T@36180-36389</span></li>
<li>&ldquo;Are they going to be allergic to it as well? OK. If you give them minocycline, are they going to be allergic to it? Why? Uh-huh, structural similarity.&rdquo; <span class="g2-src">11/04 T@36630-36781</span></li>
<li>&ldquo;All right, so visually, can you identify tetracyclines and distinguish them from steroids? That is something you can visually do, right?&rdquo; <span class="g2-src">11/04 T@36805-36941</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS4-006 S4-091 S4-092 S4-093 S4-094 S4H-013 S4H-024 S4H-025 XS-004 XS-005" data-qlabel="DPAW slide 55">Practice these (10)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-15">
<h3>Dr. Sikazwe, assigned slides · Sunblocks and the first organic sunscreens</h3>
<div class="gbar"><span>Objective (DPAW slides 61, 62)</span><b>Know the two metal oxide sunblockers, zinc oxide and titanium dioxide, that reflect light, and know that the organic sunscreens carry chromophores (functional groups that absorb light) and turn that energy into heat</b><i>DPAW slide 61, 62</i></div>
<div class="gpt"><h5>Sunblocks: zinc oxide and titanium dioxide (DPAW slide 61) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The inorganic chemical sunblocks are zinc oxide (ZnO) and titanium dioxide (TiO2). They are metal oxides that physically reflect or scatter light, whereas the organic sunscreens on the next slides absorb it. They are broad spectrum: they cover both UVA and UVB. The slide also states that they are inert, do not irritate the skin, and come in micronized formulations.</p>
<p>The handwritten note says size matters, and the photograph shows why. On one half of the face the zinc oxide particles are large and the film looks white. On the other half the particles are nanosized and the film looks transparent. The rule he gave: the larger the particle, the better the reflection, so the transparent nano form gives up some of its reflective power. This holds for both zinc oxide and titanium oxide. He also said some products combine a metal oxide with an organic sunscreen, and that the metal oxides are the two physical reflectors while the other agents are organic molecules.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;we have two metal oxides, zinc oxide and titanium oxide that we can put on our, on our skin. Very useful. These are broad spectra inactivity. OK, they block both UVA UVB.&rdquo; [he said &lsquo;broad spectra inactivity&rsquo;: broad-spectrum activity] <span class="g2-src">11/04 T@38555-38725</span></p>
<p>&ldquo;Now, Size Matters here. It's important. Larger size Roger particle size. Is More effective.&rdquo; [he said &lsquo;Roger particle size&rsquo;: larger particle size] <span class="g2-src">11/04 T@38730-38821</span></p>
<p>&ldquo;Large size is more effective. So for both zinc oxide as well as titanium oxide.&rdquo; <span class="g2-src">11/04 T@39280-39359</span></p>
<p>&ldquo;This same zinc oxide, it moved from being white to transparent, nano size. That's start losing some of its reflective properties.&rdquo; <span class="g2-src">11/04 T@39024-39153</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-097 S4-098 S4H-019 S4H-020 S4H-026 XS-010" data-qlabel="DPAW slide 61">Practice these (7)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 1: dibenzoylmethanes and anthranilates (DPAW slide 62) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Organic chemical sunscreens contain chromophores, functional groups that absorb UVA and UVB and convert it into harmless heat. This slide covers the two classes that absorb UVA (315-400 nm).</p>
<ul>
<li><b>Dibenzoylmethanes:</b> the product is avobenzone, a 1,3-diketone with a methoxyphenyl ring and a tert-butylphenyl ring. It absorbs the full spectrum of UVA and some UVB. It is rapidly degraded by UVA. The handwritten notes read low skin absorption and a photodegradation half-life (t1/2) of about 2 hours. He explained why low skin absorption matters: he does not want these molecules to seep into the systemic circulation (the blood).</li>
<li><b>Anthranilates:</b> meradimate (a menthyl ester of anthranilic acid) absorbs UVA. The note reads even more rapidly degraded than avobenzone.</li>
</ul>
<p>Photodegradation means the same light the molecule absorbs also breaks it down. With a half-life of about 2 hours, the person has to reapply about every 2 hours. Meradimate lasts less than that, which is the point of distinction between the two classes.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;the organic uh molecules contain what are called chromophores. These are functional groups that can absorb what? Light.&rdquo; <span class="g2-src">11/04 T@39833-39952</span></p>
<p>&ldquo;once they absorb light, they convert that photon energy, light energy into harmless heat energy.&rdquo; <span class="g2-src">11/04 T@40000-40096</span></p>
<p>&ldquo;What you need to know about this one, it has a a law. Skin absorption.&rdquo; [he said &lsquo;a law&rsquo;: a low skin absorption] <span class="g2-src">11/04 T@40552-40622</span></p>
<p>&ldquo;Why is this important? We don't want that worry. That these things are going to seep into what? Systemic circulation, OK?&rdquo; <span class="g2-src">11/04 T@40623-40744</span></p>
<p>&ldquo;Then they have a photo. Degradation. Catch my spelling on that degradation, half-life. Of about what? 2 hours. So that means after every 2 hours, the person has to come up and do it, reapply.&rdquo; <span class="g2-src">11/04 T@40745-40936</span></p>
<p>&ldquo;Whereas this might be 2 hours you apply, you probably don't have 2 hours essentially with Meradime. OK. So, that gives you a point of distinction.&rdquo; [he said &lsquo;Meradime&rsquo;: meradimate] <span class="g2-src">11/04 T@41334-41480</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-099 S4-100 S4-101 S4-102 S4-109 S4-111 S4H-026 S4H-027 S4H-031 XS-010" data-qlabel="DPAW slide 62">Practice these (11)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-16">
<h3>Dr. Sikazwe, assigned slides · UVB sunscreens: cinnamates, PABAs, salicylates, benzimidazoles</h3>
<div class="gbar"><span>Objective (DPAW slides 63, 64)</span><b>Choose among the UVB-absorbing sunscreen classes by their drawbacks: skin absorption, photodegradation half-life, allergy and water solubility</b><i>DPAW slide 63, 64</i></div>
<div class="gpt"><h5>Organic sunscreens, part 2: cinnamates and PABAs (DPAW slide 63)</h5>
<p><b>On the slide.</b> Both classes absorb UVB (280-315 nm).</p>
<ul>
<li><b>Cinnamates:</b> octinoxate and cinoxate. Octinoxate is the only one drawn: a 4-methoxycinnamate 2-ethylhexyl ester. The handwritten notes beside it say absorbed through skin and photodegradation half-life (t1/2) 1-2 hours.</li>
<li><b>PABAs (p-aminobenzoic acids):</b> PABA (&ldquo;rarely used&rdquo; on the slide) and padimate O. The drawing shows PABA and, beside it, its 2-ethylhexyl ester. The handwritten notes read &ldquo;rarely used&rdquo; and &ldquo;some ppl have allergies&rdquo;.</li>
</ul>
<p>Two drawbacks decide the choice here. Octinoxate passes into the skin, and it breaks down within 1-2 hours of light exposure. PABA and padimate O are UVB absorbers that are rarely used because of PABA allergy; he added photosensitivity but said he would give just PABA allergy as the reason. He did not name cinoxate in the lecture; it appears only as a bullet on the slide.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;So octocinome. Uh, Problem Absorbed Through Skin Limitation. OK. The photo degradation. 1 to 2 hours.&rdquo; [he said &lsquo;octocinome&rsquo;: octinoxate] <span class="g2-src">11/04 T@41651-41752</span></p>
<p>&ldquo;these are even rarely used. OK. Why? Because some, some people are allergic to paba. Paba. Paraaminobenzoic acid. Allergies.&rdquo; <span class="g2-src">11/04 T@41911-42035</span></p>
<p>&ldquo;these two are going to be rarely used. Because of that OK, so these are UVB absorbers.&rdquo; [&lsquo;these two&rsquo;: padimate (he said &lsquo;pardiment&rsquo;) and PABA] <span class="g2-src">11/04 T@42147-42233</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 KX-017 S4-103 S4-104 S4-111 S4H-028 S4H-032 XS-003" data-qlabel="DPAW slide 63">Practice these (8)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 3: salicylates and benzimidazoles (DPAW slide 64) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Both classes absorb UVB (280-315 nm).</p>
<ul>
<li><b>Salicylates</b> absorb UVB and, the slide says, provide analgesia (pain relief): homosalate and octisalate. Both are drawn as esters of salicylic acid. The handwritten notes say they are supposed to be photostable (suggestion) and that they give you salicylic acid.</li>
<li><b>Benzimidazoles:</b> ensulizole, drawn as 2-phenylbenzimidazole-5-sulfonic acid. The handwritten notes read more photostable, t1/2 = 12 hrs, log P = 1, water soluble.</li>
</ul>
<p>Salicylates are esters, so they can be hydrolyzed to salicylic acid. His caution about their photostability was a question mark: a suggestion, not a settled fact. The &ldquo;more photostable&rdquo; note belongs to ensulizole, which he called more photostable than anything seen so far. For ensulizole, the sulfonic acid makes it water soluble, so the product has to be reapplied after the person comes out of water. The 12 h figure is its photodegradation half-life.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;And the other advantage was that they were supposed, they provide analgesia&rdquo; <span class="g2-src">11/04 T@42327-42402</span></p>
<p>&ldquo;They are esters, right, so they can undergo hydrolysis to give you salicylic acid.&rdquo; <span class="g2-src">11/04 T@42538-42620</span></p>
<p>&ldquo;So I said there is this suggestion that they are photo stable. But again, even that is what. Question mark.&rdquo; <span class="g2-src">11/04 T@42621-42728</span></p>
<p>&ldquo;This benzimidazole and Sulizo. It has a log P Of one It is water soluble. Photo degradation. Tea Half-Life? It's about 12 hours.&rdquo; [he said &lsquo;Sulizo&rsquo;: ensulizole] <span class="g2-src">11/04 T@42798-42926</span></p>
<p>&ldquo;So this is photo stable, right? More for the stable. Than anything that we've seen so far.&rdquo; <span class="g2-src">11/04 T@42927-43017</span></p>
<p>&ldquo;So, water soluble coming from that sulfonic acid. They need to reapply.&rdquo; <span class="g2-src">11/04 T@43273-43344</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 KX-017 KX-018 S4-071 S4-105 S4-106 S4-109 S4-111 S4H-021 S4H-030 S4H-031 S4H-032" data-qlabel="DPAW slide 64">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-17">
<h3>Dr. Sikazwe, assigned slides · Broad-coverage sunscreens: benzophenones, octocrylene, bemotrizinol</h3>
<div class="gbar"><span>Objective (DPAW slides 65, 66)</span><b>Know why octocrylene is co-formulated as an additive, why benzophenones are a worry for skin absorption, and why bemotrizinol shows low skin absorption (high molecular weight)</b><i>DPAW slide 65, 66</i></div>
<div class="gpt"><h5>Organic sunscreens, part 4: benzophenones and octocrylene (DPAW slide 65) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> These agents cover UVB and UVA.</p>
<ul>
<li><b>Benzophenones</b> absorb full UVB and considerable UVA: oxybenzone (benzophenone-3), sulisobenzone (benzophenone-4), dioxybenzone (benzophenone-8). Oxybenzone is drawn as 2-hydroxy-4-methoxybenzophenone.</li>
<li><b>Cinnamates</b> that absorb full UVB + UVA: octocrylene, a 2-ethylhexyl ester that carries a cyano group and two phenyl rings.</li>
</ul>
<p>The handwritten notes beside the oxybenzone drawing read log P = 4 and highly absorbed through skin. He said the same of the benzophenones: log P about 4, highly absorbed through the skin, which is the worry, because what the molecules do after that is not known. Octocrylene is the best performer for photostability (handwritten: very high photostability, t1/2 = 90 hrs) and is lipophilic and oily, so it stays on the skin after swimming. The note beside it says it is used as an additive sunscreen: it is co-formulated with other sunscreens, such as oxybenzone, to give them photostability.</p>
<p>The ADMET line on the slide reads: lipophilic, with &ldquo;hydrophilic&rdquo; struck through; esters hydrolyze to inactive acids that are eliminated in urine. He said to remove &ldquo;hydrophilic&rdquo; because it was misleading, so the line reads just lipophilic. He said octocrylene is an ester: some of it may get into the systemic circulation, but it is hydrolyzed.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;So we find benzophenones. Yeah Log P About 4. Hi absorbed. Through skin. That's a worry, right? Highly absorbed through the skin.&rdquo; <span class="g2-src">11/04 T@43565-43694</span></p>
<p>&ldquo;So, okrele. has come on the market. This is the best performing in terms of photo stability, very high. Photo Stability Tea have about. 90 hours.&rdquo; [he said &lsquo;okrele&rsquo;: octocrylene] <span class="g2-src">11/04 T@43941-44086</span></p>
<p>&ldquo;Aside from it doing its own thing, it's also providing photo stability to the other components in there.&rdquo; <span class="g2-src">11/04 T@44752-44856</span></p>
<p>&ldquo;So, this is used. Or co-formulated with us as An additive. Sunscreen. Very important.&rdquo; <span class="g2-src">11/04 T@44526-44611</span></p>
<p>&ldquo;So this, this one is a nester. Some of it may get into systemic circulation, but you get hydrolyzed.&rdquo; [he said &lsquo;nester&rsquo;: an ester] <span class="g2-src">11/04 T@44989-45089</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-107 S4-108 S4-109 S4-111 S4H-027 S4H-028 S4H-029 S4H-030 S4H-031" data-qlabel="DPAW slide 65">Practice these (10)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 5: bemotrizinol (DPAW slide 66) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Methoxybenzene and triazines absorb UVB and UVA. The example is bemotrizinol (BEMT), drawn as a 1,3,5-triazine core carrying two 2-hydroxyphenyl rings with 2-ethylhexyloxy chains and a 4-methoxyphenyl. The notes read: photostable, t1/2 = 4-8 hrs, low skin absorption, a molecule that came from Europe. The typed ADMET line: photostable, lipophilic but no skin absorption due to high MW (molecular weight, 627.81).</p>
<p>The reason for the low absorption is size: a molecule this large (627.81) does not pass into the skin well, even though it is lipophilic. That is a property to weigh before recommending a product, which is how he said to read these agents.</p>
<p><b>Conflict, &ldquo;no&rdquo; versus &ldquo;low&rdquo; skin absorption.</b> The typed slide line says no skin absorption. The handwriting and his words say low skin absorption (he corrected himself aloud). An exam written from his lecture keys low skin absorption because of the high molecular weight; the existing items do not ask the difference between no and low.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;Now, there's a molecule that came from Europe. This one. Very useful molecule. It's photo stable. And he have. About 4 to 8 hours. All right? And, sorry, law. Skin Absorption.&rdquo; [he said &lsquo;law&rsquo;: low] <span class="g2-src">11/04 T@45123-45298</span></p>
<p>&ldquo;So, they say this low skin absorption for this one is because it's, this is a high molecular weight molecule.&rdquo; <span class="g2-src">11/04 T@45549-45658</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-018 S4-110 S4-111 S4H-029 S4H-030 S4H-031" data-qlabel="DPAW slide 66">Practice these (6)</button></div>
</div>
</section>

<section class="gobj" id="gobj-mc-ecz">
<h3>Medicinal Chemistry · Eczema pharmacotherapy (DPAW slides 7&ndash;9)</h3>
<div class="gbar"><span>Pages</span><b>Crisaborole; ruxolitinib and upadacitinib</b><i>DPAW slides 7&ndash;9</i></div>
<div class="gpt"><ul>
<li>Crisaborole: a benzoxaborole (boron-based) soft drug, designed for predictable metabolism to inactive, harmless products; log P 3, accumulates in the dermis; t&frac12; 12 h. Spontaneous hydrolytic deboronation (no enzyme) &rarr; benzyl alcohol &rarr; ADH, then ALDH (two enzymes, no CYPs) &rarr; benzoic acid &rarr; SULT and UGT conjugates (Polleve-1, slide 9). CBDA: the boron coordinates Zn<sup>2+</sup> and Mg<sup>2+</sup> in the PDE4 active site (slide 7).</li>
<li>Ruxolitinib and upadacitinib: same pharmacological class (JAK inhibitors), different chemical classes (names not to be recalled). Ruxolitinib t&frac12; 3 h, CYP3A4/2C9, some active hydroxyl metabolites; upadacitinib t&frac12; 8&ndash;16 h, CYP3A4/2D6, no active metabolites; both log P about 2, kept in the skin by formulation (slide 8).</li></ul></div>
<div class="rxfig" id="rx-crisaborole"><!--DIA:rx-crisaborole--></div>
<div class="rxfig" id="cb-crisaborole"><!--DIA:cb-crisaborole--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-eczema">Atlas: eczema drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="ref:ref-s3">Reference: Sikazwe 11/03</button></div>
</section>

<section class="gobj" id="gobj-mc-psotop">
<h3>Medicinal Chemistry · Psoriasis: UV and topical agents (DPAW slides 12, 15&ndash;23, 25&ndash;29)</h3>
<div class="gbar"><span>Pages</span><b>UV; emollients and tars; anthralin; 8-MOP; glucocorticoids; vitamin D; limus drugs; retinoids</b><i>DPAW slides 12&ndash;29</i></div>
<div class="gpt"><h5>UV radiation (slides 12, 18, 62&ndash;63)</h5><ul><li>UVC 100&ndash;280 nm, blocked by ozone; UVB 280&ndash;315 nm, about 90% blocked by ozone, used with coal tar; UVA 315&ndash;400 nm (&ldquo;315 or 320&rdquo; depending on the source, 11/03 T 817&ndash;818), deepest, used in PUVA (slide 18: UVA 315&ndash;400 nm). Slides 62&ndash;63 print UVA 315&ndash;400 and UVB 280&ndash;315 nm.</li><li>Dr. Smith&rsquo;s numbers differ (Sun 8: UVB 290&ndash;320, UVA 320&ndash;400; PUVA 320&ndash;340, Sun 3). Each professor&rsquo;s numbers are the ones keyed in that professor&rsquo;s questions.</li></ul></div>
<div class="gpt"><h5>Emollients and tars (slides 15&ndash;16)</h5><ul><li>Petrolatum: linear hydrocarbons over 25 carbons, the most effective emollient; lanolin: fatty acid esters from wool grease, odor; dimethicone (linear Si&ndash;O) and cyclomethicone (cyclic Si&ndash;O): hypoallergenic, non-comedogenic. Emollients fill gaps between scales and prevent water loss.</li><li>Coal tar: phenols, PAHs, heterocycles; photosensitizing; used with UVB. Shale tar (ichthammol, from sedimentary rock) and wood tars (pine, birch, juniper): not photosensitizing.</li></ul></div>
<div class="gpt"><h5>Anthralin and 8-MOP (slides 17&ndash;19)</h5><ul><li>Anthralin (dithranol): a hydroxyanthrone; spontaneous autoxidation gives the anthranyl radical and superoxide anion, which act on keratinocyte mitochondria; brown anthralin products and carbon black stain; log P 4 (lipophilic).</li><li>8-MOP (methoxsalen): a furanocoumarin; intercalates into DNA and, with UVA, covalently crosslinks pyrimidine bases; partially inhibits CYP3A4.</li><li>Polleve-2 (slide 19): the two do not both act by autoxidation.</li></ul></div>
<div class="rxfig" id="rx-anthralin"><!--DIA:rx-anthralin--></div>
<div class="rxfig" id="rx-psoralen"><!--DIA:rx-psoralen--></div>
<div class="gpt"><h5>Glucocorticoids (slides 20&ndash;23, 25&ndash;26)</h5><ul><li>Steroid skeleton: four fused rings, A&ndash;C six-membered, D five-membered. Potency up with: C1&ndash;C2 double bond, 6&alpha;-halogen, 9&alpha;-halogen, 11&beta;-OH. &alpha; = hashed bond (away), &beta; = wedge (toward the viewer); numbering and orientation are independent (slides 20&ndash;22).</li><li>Six hydrogen bonds in the receptor: C3=O (two), 11&beta;-OH, 17&alpha;-OH, C20=O, C21-OH (slide 23).</li><li>Potency (slide 25): clobetasol propionate 0.05% super-potent; betamethasone dipropionate 0.05% potent; betamethasone valerate 0.1% medium; hydrocortisone acetate 0.5% and 1% low. Potency depends on structure, vehicle and concentration. The hydrocortisone-to-clobetasol arrow is a structural change, not metabolism.</li><li>Hydrocortisone (slide 26): under 15% absorbed through skin against 95% orally; t&frac12; 1&ndash;2 h (metabolism) but duration 8&ndash;12 h (protein binding); 11&beta;-HSD converts it to and from cortisone (11-ketone, inactive).</li></ul></div>
<div class="f2fig" id="fig-steroid"><!--DIA:fig-steroid--></div>
<div class="rxfig" id="rx-hydrocortisone"><!--DIA:rx-hydrocortisone--></div>
<div class="rxfig" id="cb-gc-potency"><!--DIA:cb-gc-potency--></div>
<div class="gpt"><h5>Vitamin D, limus drugs, retinoids (slides 27&ndash;29)</h5><ul><li>Calcitriol and calcipotriene: secosteroids; calcipotriene was meant to lose the calcium effect but still raises GI calcium absorption; hypercalcemia is the limiting factor (slide 27).</li><li>Pimecrolimus vs tacrolimus: both macrolide lactones and calcineurin inhibitors with similar cLogP (6.0, 5.8); pimecrolimus has high non-specific skin protein binding and stays in the skin (low systemic ADRs), tacrolimus low binding and enters the circulation; structure: Cl and ethyl (pimecrolimus) vs OH and allyl (tacrolimus) (slide 28).</li><li>Tazarotene: acetylenic (alkyne) retinoid, ethyl ester prodrug hydrolyzed by carboxylesterases to tazarotenic acid; with acitretin and isotretinoin for psoriasis (slide 29).</li></ul></div>
<div class="rxfig" id="rx-vitd"><!--DIA:rx-vitd--></div>
<div class="rxfig" id="cb-limus"><!--DIA:cb-limus--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-topical">Atlas: emollients, anthralin, psoralen</button><button type="button" class="chip" data-jump="atlas:at-a-glucocorticoids">Atlas: glucocorticoids</button><button type="button" class="chip" data-jump="atlas:at-a-vitamin-d">Atlas: vitamin D</button><button type="button" class="chip" data-jump="atlas:at-a-limus">Atlas: limus drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="tell:tell-s4">Tell apart: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-psosys">
<h3>Medicinal Chemistry · Psoriasis: systemic agents (DPAW slides 30&ndash;34)</h3>
<div class="gbar"><span>Pages</span><b>Methotrexate; lactone vs lactam; cyclosporine; apremilast</b><i>DPAW slides 30&ndash;34</i></div>
<div class="gpt"><ul>
<li>Methotrexate: a pteridine; competitive DHFR inhibitor, also immunosuppressant and anti-inflammatory. Against folic acid it has NH<sub>2</sub> (folic acid OH) on the pteridine and N&ndash;CH<sub>3</sub> (folic acid N&ndash;H), and binds DHFR with higher affinity. SAR: pteridine (aromatic), p-aminobenzoic acid and glutamic acid parts; no alkylation of the aromatic N; the N&ndash;CH<sub>3</sub> is essential (slides 30&ndash;31).</li>
<li>Polleve-3 (slide 32): lactone = cyclic ester (pimecrolimus, tacrolimus); lactam = cyclic amide (cyclosporine).</li>
<li>Cyclosporine: an 11-amino-acid cyclic peptide; activated by forming a complex with cyclophilin (not by metabolism), then inhibits calcineurin; oral bioavailability 30% (first pass by CYP3A4); log P 4; t&frac12; 19 h; grapefruit juice raises levels (slide 33).</li>
<li>Apremilast: an isoindoline; PDE4 inhibitor, raises cAMP; CYP3A4 (major) O-demethylation then UGT O-glucuronidation; avoid CYP3A4 inhibitors and inducers (slide 34).</li></ul></div>
<div class="rxfig" id="rx-folate"><!--DIA:rx-folate--></div>
<div class="rxfig" id="cb-mtx"><!--DIA:cb-mtx--></div>
<div class="rxfig" id="cb-cyclosporine"><!--DIA:cb-cyclosporine--></div>
<div class="rxfig" id="rx-apremilast"><!--DIA:rx-apremilast--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-systemic">Atlas: retinoids and systemic agents</button><button type="button" class="chip" data-jump="atlas:at-a-features">Atlas: lactone and lactam</button><button type="button" class="chip" data-jump="guide:fig-cni-nfat">Figure: calcineurin, NFAT and IL-2 (Dr. Smith)</button><button type="button" class="chip" data-jump="ref:ref-s4">Reference: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-acne">
<h3>Medicinal Chemistry · Acne (DPAW slides 43&ndash;55)</h3>
<div class="gbar"><span>Pages</span><b>Keratolytics; retinoids by generation; hormones; antibiotics</b><i>DPAW slides 43&ndash;55</i></div>
<div class="gpt"><h5>Keratolytics (slides 43&ndash;47)</h5><ul><li>Glycolic acid: alpha-hydroxy acid, hydrophilic, log P about 1, acts at the surface; ADH then ALDH to the diacid. Salicylic acid: beta-hydroxy acid with an aromatic ring, log P about 1&ndash;2, deeper; 75% glycine conjugate. Both pKa about 3 (itching).</li><li>Alpha vs beta: the OH on the carbon next to the COOH (alpha) or two carbons away (beta) (slide 44).</li><li>Sulfur: thiolysis of keratin disulfide (cysteine) bonds; small particles work better. Benzoyl peroxide: a peroxide; benzoic acid lowers skin pH (keratolytic) and the benzoyl radical kills bacteria; log P 3.5 (slides 46&ndash;47).</li></ul></div>
<div class="rxfig" id="rx-hydroxyacids"><!--DIA:rx-hydroxyacids--></div>
<div class="rxfig" id="cb-hydroxyacids"><!--DIA:cb-hydroxyacids--></div>
<div class="rxfig" id="rx-bpo"><!--DIA:rx-bpo--></div>
<div class="gpt"><h5>Retinoids by generation (slides 48&ndash;51)</h5><ul><li>1st generation (non-aromatic): tretinoin (all-trans, topical) and isotretinoin (13-cis, oral), geometric isomers, both active.</li><li>2nd generation (mono-aromatic): etretinate, an ethyl ester prodrug (t&frac12; 120 days, narrow therapeutic index, off the US market 1998), hydrolyzed by carboxylesterases to acitretin, the active form.</li><li>3rd generation (poly-aromatic): adapalene and trifarotene, directly active (exposed COOH); tazarotene, ester prodrug. The class is teratogenic.</li></ul></div>
<div class="rxfig" id="rx-etretinate"><!--DIA:rx-etretinate--></div>
<div class="rxfig" id="rx-tazarotene"><!--DIA:rx-tazarotene--></div>
<div class="rxfig" id="cb-retinoids"><!--DIA:cb-retinoids--></div>
<div class="gpt"><h5>Hormones (slides 52&ndash;53)</h5><ul><li>Oral contraceptives (ethinyl estradiol with norgestimate or drospirenone) lower sebum in females. Spironolactone (steroidal) and ketoconazole (non-steroidal azole, strong CYP3A4 inhibitor) lower testosterone biosynthesis; flutamide (non-steroidal) blocks testosterone at its receptor.</li></ul></div>
<div class="rxfig" id="cb-antiandrogens"><!--DIA:cb-antiandrogens--></div>
<div class="gpt"><h5>Antibiotics (slides 54&ndash;55)</h5><ul><li>Azelaic acid: a C9 dicarboxylic acid; an anti-inflammatory agent (a note on slide 54 says P. acnes is a gram-positive bacterium). Clindamycin: topical because of GI toxicity. Erythromycin: poor oral absorption, unstable at pH 4 or below.</li><li>Tetracycline: four rings fused in a line (a steroid's rings are angular); chelates Al<sup>3+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, Fe<sup>3+</sup>, Zn<sup>3+</sup> (printed so on slide 55; zinc&rsquo;s ion is Zn<sup>2+</sup>), Bi<sup>3+</sup>, forming insoluble salts that can build up in bone and enamel; food (dairy) cuts absorption; t&frac12; 8.5 h. Doxycycline and minocycline: food has no effect, lipophilic, t&frac12; 11&ndash;13 h and 14&ndash;22 h; cross-allergy from structural similarity.</li></ul></div>
<div class="rxfig" id="cb-tetracycline"><!--DIA:cb-tetracycline--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-b-acne-keratolytics">Atlas: keratolytics</button><button type="button" class="chip" data-jump="atlas:at-b-retinoids">Atlas: retinoids</button><button type="button" class="chip" data-jump="atlas:at-b-hormones">Atlas: hormones</button><button type="button" class="chip" data-jump="atlas:at-b-antibiotics">Atlas: antibiotics</button><button type="button" class="chip" data-jump="tell:tell-s4">Tell apart: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-sun">
<h3>Medicinal Chemistry · Sunblocks and sunscreens (DPAW slides 61&ndash;66)</h3>
<div class="gbar"><span>Pages</span><b>Inorganic sunblocks and organic sunscreens by UV band</b><i>DPAW slides 61&ndash;66</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Band</th><th>Agents and the point he made</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Sunblocks</b></td><td>Zinc oxide, titanium dioxide: reflect and scatter UVA and UVB; inert; large particles work better (nano forms are transparent and reflect less)</td><td>61</td></tr>
<tr><td><b>All organics</b></td><td>Chromophores absorb UV and convert it to heat; they photodegrade</td><td>62</td></tr>
<tr><td><b>UVA</b></td><td>Avobenzone (dibenzoylmethane): low skin absorption, photodegradation t&frac12; about 2 h. Meradimate (anthranilate): degrades faster than avobenzone</td><td>62</td></tr>
<tr><td><b>UVB</b></td><td>Octinoxate (cinnamate): absorbed through skin, t&frac12; 1&ndash;2 h. PABA, padimate O: PABA allergy. Homosalate, octisalate (salicylates): ester hydrolyzed to salicylic acid. Ensulizole (benzimidazole): water soluble, log P 1, t&frac12; about 12 h, reapply after swimming</td><td>63&ndash;64</td></tr>
<tr><td><b>UVB/UVA</b></td><td>Oxybenzone (benzophenone): log P about 4, highly absorbed through skin. Octocrylene: lipophilic, t&frac12; about 90 h, photostabilizes other sunscreens. Bemotrizinol: MW 627.81, limited skin absorption, photostable</td><td>65&ndash;66</td></tr>
</tbody></table>
<div class="rxfig" id="cb-salicylates"><!--DIA:cb-salicylates--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-b-sunscreens">Atlas: sunblocks and sunscreens</button><button type="button" class="chip" data-jump="guide:gobj-sun-2">Guide: Dr. Smith's sunblocks vs sunscreens</button><button type="button" class="chip" data-jump="guide:fig-block-vs-screen">Figure: sunblocks vs sunscreens (both professors)</button></div>
</section>

<section class="gobj" id="gobj-mc-ddi">
<h3>Medicinal Chemistry · Drug interactions he named</h3>
<div class="gbar"><span>Objective (DPAW slide 3)</span><b>Explain drug interactions that may influence the therapeutic plan</b><i>DPAW slides 7&ndash;55</i></div>
<table class="reftab"><thead><tr><th style="width:22%">Drug</th><th>Interaction or enzyme</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Crisaborole</b></td><td>No CYPs: ADH and ALDH, then SULT and UGT</td><td>7, 9</td></tr>
<tr><td><b>Ruxolitinib; upadacitinib</b></td><td>CYP3A4 and 2C9; CYP3A4 and 2D6</td><td>8</td></tr>
<tr><td><b>Methoxsalen (8-MOP)</b></td><td>Several CYPs; partially inhibits CYP3A4</td><td>18</td></tr>
<tr><td><b>Cyclosporine</b></td><td>First pass by CYP3A4; grapefruit juice raises levels</td><td>33</td></tr>
<tr><td><b>Apremilast</b></td><td>CYP3A4 major (1A2, 2A6 minor); avoid CYP3A4 inhibitors and inducers</td><td>34</td></tr>
<tr><td><b>Ketoconazole</b></td><td>Strong CYP3A4 inhibitor</td><td>53</td></tr>
<tr><td><b>Tetracycline</b></td><td>Chelates Al<sup>3+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, Fe<sup>3+</sup>, Zn<sup>3+</sup> (as printed; Zn<sup>2+</sup>), Bi<sup>3+</sup>; food (dairy) cuts absorption; not so for doxycycline and minocycline</td><td>55</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="guide:gobj-pc-4">Guide: interactions Dr. Smith named</button></div>
</section>
<h2 class="gdeck" id="gdeck-p5">Dermatitis Therapeutics (Dr. Patel, 11/06; Exam 2)</h2>
<p class="sub">DT = Patel_Dermatitis-Therapeutics-Student.pdf, slide = PDF page; T@ = place in the 11/06 lecture transcript; PollEv = her in-class polls of 11/06. Her seven objectives (DT 7&ndash;8), one section each.</p>
<div class="gask"><b>How she asks (11/06)</b><ul><li>&ldquo;Poll everywhere will always be utilized in my lectures. This is how ... you guys learn a little bit more about my exam questions&rdquo; (T@1918&ndash;2297). Her polls were case-based: a tube size to dispense, severity and status, first-line maintenance, prescription details, counseling, when to follow up.</li><li>&ldquo;There will be a calculation on the exam&rdquo; (T@11799). &ldquo;I will always tell you what&rsquo;s available in the exam question. So remember to always round up&rdquo; (T@9636).</li><li>Not asked: pediatric fingertip units (FYI, T@8797), infant dupilumab dosing (T@50408), newborn and infant age definitions (T@71019).</li></ul></div>

<section class="gobj" id="gobj-p5-1">
<h3>Dermatitis Therapeutics · Objective 1: the self-care interview and the patient care process</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>DT 26, 28, 49, 69</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Patient care process <span class="g2-src">(DT 28; T@27992)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Step</th><th scope="col">Patient care process</th></tr></thead>
<tbody>
<tr><td class="g2-n"><span class="g2-num">1</span></td><td>Collect</td></tr>
<tr><td class="g2-n"><span class="g2-num">2</span></td><td>Assess</td></tr>
<tr><td class="g2-n"><span class="g2-num">3</span></td><td>Plan</td></tr>
<tr><td class="g2-n"><span class="g2-num">4</span></td><td>Implement</td></tr>
<tr><td class="g2-n"><span class="g2-num">5</span></td><td>Follow-up (monitor and evaluate)</td></tr>
</tbody>
</table>
<p class="g2-p">Around patient-centered care.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Her cases are written as <span class="g2-src">(DT 26, 69; T@24148&ndash;24910)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">CC</th><td>Chief complaint, the patient&rsquo;s own words</td></tr>
<tr><th scope="row">HPI</th><td>History of present illness</td></tr>
<tr><th scope="row">PMH</th><td>Past medical history</td></tr>
<tr><th scope="row">Current meds</th><td></td></tr>
<tr><th scope="row">Other</th><td>OTC products</td></tr>
<tr><th scope="row">Physical assessment</th><td></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p5-2">
<h3>Dermatitis Therapeutics · Objective 2: name the condition from signs, symptoms and history</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>DT 15&ndash;25, 56&ndash;60</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Atopic dermatitis <span class="g2-src">(DT 17&ndash;22)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>The condition <span class="g2-src">(DT 17)</span></caption>
<tbody>
<tr><th scope="row">Other name</th><td>Also known as <b>eczema</b></td></tr>
<tr><th scope="row">Type</th><td>Very common chronic or relapsing inflammatory skin disorder</td></tr>
<tr><th scope="row">Start</th><td>Often develops in childhood</td></tr>
<tr><th scope="row">Hallmark symptom</th><td><b>Pruritus</b></td></tr>
<tr><th scope="row">Cure</th><td>No cure</td></tr>
<tr><th scope="row">Spread</th><td>Not contagious</td></tr>
</tbody>
</table>
<table class="g2-table g2-kv">
<caption>Initiation and prevention <span class="g2-src">(DT 18)</span></caption>
<tbody>
<tr><th scope="row">Initiation</th><td>Disrupted barrier (FLG mutation, or dryness from cleansing or the environment) &rarr; allergen and irritant influx &rarr; inflammatory T-cell responses initiated by keratinocytes (e.g. TSLP) and dendritic cells</td></tr>
<tr><th scope="row">Prevention</th><td>Emollient therapy improves the barrier and blocks the inflammatory cascade</td></tr>
</tbody>
</table>
</div>
<div>
<p class="g2-sub">Risk factors <span class="g2-src">(DT 19)</span></p>
<ul>
<li>Personal or family history of atopic disorders (atopic triad: allergic rhinitis, asthma, AD; atopic march is the typical progression of allergic diseases that often begin early in life: dry skin, eczema, food allergies, rhinitis, asthma)</li>
<li>Loss-of-function FLG mutation</li>
<li>Urban environment</li>
<li>Smaller family size</li>
<li>Higher parental education</li>
</ul>
<table class="g2-table g2-kv">
<caption>Triggers <span class="g2-src">(DT 20)</span></caption>
<tbody>
<tr><th scope="row">Irritants</th><td>Airborne (tobacco smoke, air pollution); cosmetics, fragrances, astringents; irritating soaps, scrubs, detergents; dyes, preservatives</td></tr>
<tr><th scope="row">Allergens</th><td>Foods (eggs, milk, peanut, soy, wheat, nuts, tomato); clothing (wool, polyester); aeroallergens (house dust mites, pollens, pet dander, molds)</td></tr>
<tr><th scope="row">Environment</th><td>Extreme temperatures, low humidity</td></tr>
<tr><th scope="row">Personal</th><td>Stress, excessive washing and sanitizing</td></tr>
</tbody>
</table>
</div>
</div>
<table class="g2-table g2-stack">
<caption>By age <span class="g2-src">(DT 21)</span></caption>
<thead><tr><th scope="col">Age</th><th scope="col">Quality</th><th scope="col">Region</th><th scope="col">Timing</th></tr></thead>
<tbody>
<tr><th scope="row">Infancy (0&ndash;2 y)</th><td><span class="g2-lab">Quality</span>Erythematous papular rash that tends to ooze</td><td><span class="g2-lab">Region</span>Face, scalp, trunk, arms, legs</td><td><span class="g2-lab">Timing</span>Most common onset <b>3&ndash;6 months</b>; majority by age one</td></tr>
<tr><th scope="row">Childhood (2&ndash;puberty)</th><td><span class="g2-lab">Quality</span>Dry, flaky, rough, cracked skin, crusting, lichenification</td><td><span class="g2-lab">Region</span>Face, creases of the neck, elbows, wrists, knees, ankles</td><td><span class="g2-lab">Timing</span>Up to <b>90%</b> by age 5</td></tr>
<tr><th scope="row">Adulthood</th><td><span class="g2-lab">Quality</span>More diffuse, underlying erythema, dry scaly skin, lichenification</td><td><span class="g2-lab">Region</span>Less on the face; more on hands, neck, inner elbows, back of knees, ankles</td><td><span class="g2-lab">Timing</span>May have resolution by adulthood (<b>70&ndash;90%</b>, slide; her spoken reading differs, T@19746)</td></tr>
</tbody>
</table>
<p class="g2-p">Earlier onset, longer persistence <span class="g2-src">(DT 22; T@20296)</span>.</p>
<table class="g2-table g2-stack">
<caption>By severity <span class="g2-src">(DT 23)</span></caption>
<thead><tr><th scope="col">Severity</th><th scope="col">SCORAD</th><th scope="col">Description</th></tr></thead>
<tbody>
<tr><th scope="row">Mild</th><td><span class="g2-lab">SCORAD</span><b>&lt; 25</b></td><td>Areas of dry skin, infrequent itching (with or without small areas of redness); little impact on activities, sleep and psychosocial wellbeing</td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">SCORAD</span><b>25&ndash;50</b></td><td>Mild characteristics with frequent itching; moderate impact on everyday activities and sleep</td></tr>
<tr><th scope="row">Severe</th><td><span class="g2-lab">SCORAD</span><b>&gt; 50</b></td><td>Widespread dry skin, incessant itching, redness, thickening, bleeding, oozing, severe limitation to activities, nightly loss of sleep</td></tr>
</tbody>
</table>
<div class="gtell"><b>Status (DT 24; T@22171&ndash;22904, T@26757)</b><ul><li>Acute: acutely inflamed papules, vesicles, exudate and crusts; no dryness.</li><li>Subacute: <b>dry</b>, inflamed papules, patches or plaques.</li><li>Chronic: <b>lichenified</b> papules or plaques, fine scale, hypo- or hyperpigmentation (she calls lichenification the silvery, scaly plaque, T@18613).</li></ul></div>
<p class="g2-sub">Complications <span class="g2-src">(DT 25)</span></p>
<ul>
<li>Sleep disturbances</li>
<li>Depression</li>
<li>Quality of life of patient and family</li>
<li>Skin infections (S. aureus; prone to herpes simplex virus)</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper and incontinence-associated dermatitis <span class="g2-src">(DT 56&ndash;60)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Causes</th><td>Occlusion, moisture, microbes, GI proteolytic enzymes and bile salts, mechanical chafing and friction, alkaline skin pH <span class="g2-src">(DT 56)</span></td></tr>
<tr><th scope="row">Signs</th><td>Erythema in patches (buttocks, upper thighs, abdomen, genital region); red to bright red, shiny, wet-looking patches; graded A slight to E severe <span class="g2-src">(DT 58)</span></td></tr>
<tr><th scope="row">Not a sign</th><td><p class="g2-said"><span class="g2-k">Said in class</span>No lichenification <span class="g2-src">(T@72543)</span></p></td></tr>
<tr><th scope="row">Adults</th><td>Category 1 persistent redness, category 2 skin loss; A without, B with clinical signs of infection <span class="g2-src">(GLOBIAD, DT 60)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Another name for atopic dermatitis <span class="g2-tap">Show answer</span></summary><p>Eczema <span class="g2-src">(T@24148)</span></p></details>
<details class="g2-self"><summary>The 21-year-old (dry, inflamed, no infection, no lichenified plaques, SCORAD 40) <span class="g2-tap">Show answer</span></summary><p>Moderate, subacute <span class="g2-src">(T@25991&ndash;26757)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p5-3">
<h3>Dermatitis Therapeutics · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>DT 33, 36, 65&ndash;68</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> AD on OTC self-care <span class="g2-src">(DT 33)</span></h5>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">AD self-treatment not improved or worse: refer after</span><span class="g2-tile-num">2&ndash;3 days</span><span class="g2-src">(DT 33)</span></div>
<div class="g2-tile"><span class="g2-tile-label">On a topical steroid: the follow-up figure is</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36, 52; her poll)</span></div>
</div>
<p class="g2-p">The two figures are recorded in OPEN_QUESTIONS (Lecture 5, item 2).</p>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% not resolved: seek assistance at</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1%: never past</span><span class="g2-tile-num">2 weeks</span><span class="g2-src">(DT 36)</span></div>
</div>
<p class="g2-p">Atrophy of the skin or infection while using the topical steroid: <b>discontinue and refer</b>.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper dermatitis, do not use as self-care products <span class="g2-src">(DT 65)</span></h5>
<ul>
<li>Topical antifungals (miconazole)</li>
<li>Topical antibacterials</li>
<li>Topical anesthetics (benzocaine, lidocaine)</li>
<li>Hydrocortisone or other topical corticosteroid</li>
</ul>
<p class="g2-p">The diaper area is a significant portion of a baby&rsquo;s total body surface area, and many topical products can lead to systemic side effects.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Exclusions for self-treatment of diaper dermatitis <span class="g2-src">(DT 68, &ldquo;please know this list&rdquo;, T@80993)</span></h5>
<div class="g2-two">
<ul>
<li>Lesions <b>&gt; 7 days</b></li>
<li>No improvement in <b>7 days</b> despite care</li>
<li>Secondary infection (viral, bacterial, fungal)</li>
<li>Lesions part of or caused by another disease</li>
<li>Rash outside the diaper region</li>
<li>Diaper dermatitis possibly associated with a urinary tract infection (painful urination) or disfigurement of the penis or vulva</li>
<li>Broken skin (ulceration, blistering, peeling) due to disease progression or patient action (e.g., scratching)</li>
</ul>
<ul>
<li>Onion-skin appearance or bullae</li>
<li>Oozing, blood, vesicles or pus</li>
<li>Chronic or frequently recurrent lesions</li>
<li>Constitutional symptoms (fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, rash elsewhere)</li>
<li>Behavioral changes (lethargy, incessant crying)</li>
<li>Comorbid conditions (HIV, organ transplant, immunosuppressive therapy, hepatitis with skin manifestations)</li>
</ul>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-4">
<h3>Dermatitis Therapeutics · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>List appropriate treatment goals</b><i>DT 27, 61</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals on her slide, by condition</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Atopic dermatitis <span class="g2-src">(DT 27)</span></p>
<ul>
<li>Eliminate triggers</li>
<li>Reduce symptoms (pruritus, dermatitis)</li>
<li>Prevent future flare-ups</li>
<li>Prevent secondary infections</li>
<li>Minimize adverse drug reactions (do not use oral antibiotics or topical antibiotics over large areas of skin)</li>
<li>Reduce trans-epidermal water loss (TEWL)</li>
</ul>
</div>
<div>
<p class="g2-sub">Diaper / incontinence dermatitis <span class="g2-src">(DT 61)</span></p>
<ul>
<li>Relieve the symptoms</li>
<li>Get rid of the dermatitis</li>
<li>Prevent secondary infection</li>
<li>Prevent recurrences</li>
</ul>
</div>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-5">
<h3>Dermatitis Therapeutics · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Recommend appropriate non-drug therapy</b><i>DT 29&ndash;32, 51, 57, 59, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Atopic dermatitis</h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Fix the skin barrier <span class="g2-src">(DT 29)</span></caption>
<tbody>
<tr><th scope="row">Don&rsquo;t strip the weakened epidermis</th><td>Gentle cleansers, limit bathing time</td></tr>
<tr><th scope="row">Help re-establish it</th><td>Thick emollients, hydration</td></tr>
<tr><th scope="row">Reduce inflammation</th><td>Topical medications</td></tr>
</tbody>
</table>
<p class="g2-sub">Non-drug treatments <span class="g2-src">(DT 30)</span></p>
<ul>
<li>Bathing practices</li>
<li>Gentle cleansers</li>
<li>Wet wraps (short-term, not with TCIs)</li>
<li>Soft cotton clothing</li>
<li>Avoid known triggers</li>
<li>Decrease stress</li>
</ul>
<table class="g2-table g2-kv">
<caption>Bathing <span class="g2-src">(DT 31)</span></caption>
<tbody>
<tr><th scope="row">Bath</th><td><b>10-minute</b> lukewarm bath, gentle cleansers, pat dry</td></tr>
<tr><th scope="row">Added daily</th><td>Oatmeal or baking soda may be added daily (slide); she said &ldquo;very limited in terms of how often&rdquo; (T@31306)</td></tr>
<tr><th scope="row">Bleach</th><td>Bleach <b>0.005%</b> sodium hypochlorite (&frac12; cup per full tub) <b>twice a week</b> for moderate&ndash;severe AD to prevent recurrent bacterial infection (can irritate; her last-line advice, T@32279)</td></tr>
<tr><th scope="row">After the bath</th><td>Occlusive moisturizer right after the bath</td></tr>
</tbody>
</table>
</div>
<div>
<p class="g2-sub">Counseling <span class="g2-src">(DT 51)</span></p>
<ul>
<li>Avoid triggers</li>
<li>No tight clothing</li>
<li>Moderate temperature and low humidity</li>
<li>Short tepid showers or baths with a non-soap cleanser</li>
<li>Sponge baths in place of full-body bathing</li>
<li>Pat dry</li>
<li>Cool tap-water compresses <b>5&ndash;20 min, 4&ndash;6 times daily</b> for weeping lesions (not with TCIs)</li>
<li>Short clean nails, cotton gloves or socks at night</li>
</ul>
</div>
</div>
<table class="g2-table g2-stack">
<caption>OTC moisturizer <span class="g2-src">(DT 32)</span></caption>
<thead><tr><th scope="col">Type</th><th scope="col">Examples</th><th scope="col">Comments</th></tr></thead>
<tbody>
<tr><th scope="row">Petroleum-containing</th><td><span class="g2-lab">Examples</span>Aquaphor (petrolatum); Eucerin (petrolatum, mineral oil); Lubriderm (mineral oil, lanolin, petrolatum)</td><td><span class="g2-lab">Comments</span>Occlusive; can be greasy, uncomfortable; the most effective, thickest and longest-lasting (T@34639)</td></tr>
<tr><th scope="row">Ceramide-containing</th><td><span class="g2-lab">Examples</span>CeraVe (glycerin, petroleum, ceramides, hyaluronic acid); Aveeno eczema therapy (oatmeal, ceramides)</td><td><span class="g2-lab">Comments</span>Creams; provide a barrier</td></tr>
<tr><th scope="row">Urea-containing</th><td><span class="g2-lab">Examples</span>Carmol 10%, 20%; Lac-Hydrin 5%</td><td><span class="g2-lab">Comments</span>Humectant; burning, stinging, irritation on broken skin</td></tr>
<tr><th scope="row">Emollient lotions</th><td><span class="g2-lab">Examples</span>Cetaphil lotion, Keri Original, Neutrogena lotion</td><td><span class="g2-lab">Comments</span>Less effective; apply <b>3 times a day or more</b>, after bathing or washing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper and incontinence dermatitis</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Infants <span class="g2-src">(DT 57)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Newborns: change the diaper every</span><span class="g2-tile-num">2 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Infants: change the diaper every</span><span class="g2-tile-num">3&ndash;4 hours</span></div>
</div>
<ul>
<li>Disposable diapers mean fewer rashes</li>
<li>Clean at every change (no difference between cloth, water, mild soap or alcohol-free wipe)</li>
<li>Dry before barrier cream</li>
<li>Breastfeeding means fewer rashes (pH)</li>
</ul>
<p class="g2-sub">Adults <span class="g2-src">(DT 59)</span></p>
<ul>
<li>Bath oil or pH-neutral cleansing foam, patting with a soft cloth</li>
<li>Skin hydration</li>
<li>Barrier cream</li>
<li>Pressure sore prevention</li>
<li>Good nutrition (protein, vitamins)</li>
</ul>
</div>
<div>
<table class="g2-table g2-kv">
<caption>ABCDE <span class="g2-src">(DT 62)</span></caption>
<tbody>
<tr><th scope="row"><b>A</b>ir</th><td>Air dry, diaper-free time</td></tr>
<tr><th scope="row"><b>B</b>arrier</th><td>Protectant liberally at each change</td></tr>
<tr><th scope="row"><b>C</b>leansing</th><td>Soft cloth and warm water, or a baby wipe when stool is present</td></tr>
<tr><th scope="row"><b>D</b>iaper</th><td>Change frequently (every <b>2 hours</b>) and as soon as soiled, if possible (slide 57: infants every 3&ndash;4 hours); absorbent disposable diapers if affordable</td></tr>
<tr><th scope="row"><b>E</b>ducation</th><td>Educate parents and caregivers about nonpharmacologic diaper hygiene practices and pharmacotherapy, verifying understanding to ensure adherence</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-6">
<h3>Dermatitis Therapeutics · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (DT 8)</span><b>Dosing frequency and maximum days; onset; length of treatment; amount to dispense and tube size; adverse effects; contraindications and interactions</b><i>DT 10&ndash;13, 34&ndash;48, 52, 63&ndash;64</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Quantity: fingertip units <span class="g2-src">(DT 10&ndash;13)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Adult fingertip unit (FTU) and tube sizes <span class="g2-src">(DT 10; T@7221)</span></caption>
<tbody>
<tr><th scope="row">Adult FTU</th><td><b>= 0.5 g</b></td></tr>
<tr><th scope="row">Tubes</th><td>15, 30, 45, 60, 80, 100 g</td></tr>
<tr><th scope="row">Rounding</th><td>Always round up to an available size</td></tr>
</tbody>
</table>
<p class="g2-sub">Formula and worked amounts <span class="g2-src">(DT 13)</span></p>
<p class="g2-formula"><span class="g2-k">Formula</span>Grams = FTU &times; 0.5 g &times; applications a day &times; days</p>
<table class="g2-table g2-work g2-stack">
<thead><tr><th scope="col">Case</th><th scope="col">Arithmetic</th><th scope="col">Grams</th><th scope="col">Tube</th></tr></thead>
<tbody>
<tr><th scope="row">Face and neck BID 2 weeks</th><td>1.25 g &times; 2 &times; 14</td><td>= 35 g</td><td class="g2-ans">&rarr; 45 g</td></tr>
<tr><th scope="row">One side of trunk BID 2 weeks</th><td>3.5 g &times; 28</td><td>= 98 g</td><td class="g2-ans">&rarr; 100 g</td></tr>
</tbody>
</table>
<details class="g2-self"><summary>Her poll, face and neck TID 14 days <span class="g2-tap">Show answer</span></summary><p>1.25 &times; 3 &times; 14 = 52.5 g &rarr; <b>60 g</b> <span class="g2-src">(T@11444&ndash;11799)</span></p></details>
</div>
<div>
<table class="g2-table">
<caption>Adult FTU per area <span class="g2-src">(DT 11)</span></caption>
<thead><tr><th scope="col">Area</th><th scope="col" class="g2-n">FTU</th></tr></thead>
<tbody>
<tr><td>Scalp</td><td class="g2-n">3</td></tr>
<tr><td>Face and neck</td><td class="g2-n">2.5</td></tr>
<tr><td>One hand (front and back, with fingers)</td><td class="g2-n">1</td></tr>
<tr><td>One arm with the hand</td><td class="g2-n">4</td></tr>
<tr><td>Elbows</td><td class="g2-n">1</td></tr>
<tr><td>Both soles</td><td class="g2-n">1.5</td></tr>
<tr><td>One foot with toes</td><td class="g2-n">2</td></tr>
<tr><td>One leg with the foot</td><td class="g2-n">8</td></tr>
<tr><td>Buttocks</td><td class="g2-n">4</td></tr>
<tr><td>Knees</td><td class="g2-n">1</td></tr>
<tr><td>Trunk both sides (7 each side)</td><td class="g2-n">14</td></tr>
</tbody>
</table>
</div>
</div>
<div class="g2-btns"><button type="button" class="g2-primary" onclick="show('ftu')">Practice fingertip-unit calculations</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Step-care algorithm <span class="g2-src">(DT 47&ndash;48)</span></h5>
<div class="g2-ladder">
<div class="g2-rung"><div class="g2-sev">Everyone</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Basic management</span><p>Skin care: liberal, frequent moisturizer (petrolatum-based for non-lesional; choice per patient preference); warm baths or showers with non-soap cleansers, usually once daily and followed by moisturizer, even on clear areas; trigger avoidance (proven allergens, common irritants such as soaps, wool, temperature extremes); consider comorbidities. Mild also: antiseptic measures (antibiotics, if needed).</p></div>
</div></div>
<div class="g2-rung g2-s1"><div class="g2-sev">Non-lesional and mild</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute</span><p><b>Low-to-medium potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b> (consider TCI, crisaborole).</p><p class="g2-said"><span class="g2-k">Said in class</span>Start low <span class="g2-src">(T@56572)</span></p></div>
</div></div>
<div class="g2-rung g2-s2"><div class="g2-sev">Moderate</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute (moderate and severe)</span><p><b>Medium-to-high potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b> (consider TCI, crisaborole).</p></div>
<div class="g2-cell"><span class="g2-k g2-maint">Maintenance</span><ul>
<li><b>Low-potency TCS</b> 1&ndash;2 times daily (including face); <b>medium potency</b> 1&ndash;2 times weekly (except face)</li>
<li><span class="g2-or">OR</span> <b>TCI</b> 1&ndash;2 times daily or 2&ndash;3 times weekly</li>
<li><span class="g2-or">OR</span> <b>crisaborole 2%</b> twice daily</li>
</ul></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Severe</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute</span><ul>
<li><b>Medium-to-high potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b> (moderate and severe)</li>
<li>Consider for some patients, to help gain control: wet wraps</li>
<li>Consider for some patients: short-term hospitalization</li>
</ul></div>
<div class="g2-cell"><span class="g2-k g2-maint">Maintenance</span><ul>
<li>Referral to an AD specialist</li>
<li>Phototherapy</li>
<li>Dupilumab</li>
<li>Systemic immunosuppressants (cyclosporine A, methotrexate, mycophenolate mofetil, azathioprine, not FDA-approved for AD; corticosteroids, not for long-term maintenance)</li>
</ul></div>
</div></div>
</div>
<div class="g2-note"><span class="g2-k">Moderate and severe, acute: not resolved in 7 days</span><p>Consider nonadherence, infection, misdiagnosis, contact allergy to medications, referral.</p></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Drugs for atopic dermatitis <span class="g2-src">(DT 34&ndash;46)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<caption>Order <span class="g2-src">(DT 48; T@57389)</span></caption>
<thead><tr><th scope="col">Line</th><th scope="col">Drug</th></tr></thead>
<tbody>
<tr><th scope="row">First line</th><td>Topical corticosteroid</td></tr>
<tr><th scope="row">Second</th><td>TCI <span class="g2-src">(DT 38)</span></td></tr>
<tr><th scope="row">Third</th><td>Crisaborole <span class="g2-src">(DT 41)</span></td></tr>
<tr><th scope="row">Moderate&ndash;severe AD not controlled with, or unable to use, topical therapy</th><td>Dupilumab or tralokinumab <span class="g2-src">(DT 43, 45)</span></td></tr>
<tr><th scope="row">Last, refractory</th><td>JAK inhibitors <span class="g2-src">(DT 46)</span></td></tr>
</tbody>
</table>
<p class="g2-p">Mechanisms: see the pharmacology and medicinal chemistry guides above <span class="g2-src">(DT 35, 38, 41, 43)</span>.</p>
</div>
<div>
<p class="g2-sub">Onset <span class="g2-src">(DT 52, 38)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Topical steroid onset: starts working in</span><span class="g2-tile-num">24&ndash;48 h</span></div>
<div class="g2-tile"><span class="g2-tile-label">TCI onset: starts working in</span><span class="g2-tile-num">1&ndash;8 weeks</span></div>
</div>
<p class="g2-sub">Length of treatment</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: maximum length of treatment (or until the flare-up clears)</span><span class="g2-tile-num">3&ndash;7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: seek help at</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: never past</span><span class="g2-tile-num">2 weeks</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">TCI: reassess at</span><span class="g2-tile-num">6 weeks</span><span class="g2-src">(DT 40)</span></div>
</div>
</div>
</div>
<table class="g2-table g2-kv">
<caption>Potency and vehicle</caption>
<tbody>
<tr><th scope="row">Potency</th><td>See Reference, &ldquo;Dr. Patel: topical corticosteroid potency&rdquo;.</td></tr>
<tr><th scope="row">Vehicle</th><td>Ointment &gt; cream &gt; lotion &gt; solution &gt; gel &gt; spray <span class="g2-src">(DT 37)</span></td></tr>
<tr><th scope="row">Face</th><td>Hydrocortisone 1% is the one steroid for the face <span class="g2-src">(DT 36; T@37425)</span></td></tr>
<tr><th scope="row">Products</th><td><p class="g2-said"><span class="g2-k">Said in class</span>For AD, single-ingredient products only <span class="g2-src">(T@41713)</span></p></td></tr>
<tr><th scope="row">Absorption</th><td>Topical steroid absorption varies with age, skin integrity, skin thickness and anatomic location <span class="g2-src">(DT 35)</span></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p5-tcs">Reference: steroid potency</button><button type="button" class="chip" data-jump="ref:ref-p5-drugs">Reference: AD drugs by line</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Counseling for a topical steroid <span class="g2-src">(DT 35, 52)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Hands</th><td>Wash hands before and after</td></tr>
<tr><th scope="row">Where</th><td>Apply to a clean, dry area</td></tr>
<tr><th scope="row">Emollient</th><td>Emollient within <b>3 minutes</b> after bathing while the skin is still damp</td></tr>
<tr><th scope="row">How much</th><td>A thin layer rubbed in gently until it vanishes</td></tr>
<tr><th scope="row">How often</th><td><b>1&ndash;2 times daily</b></td></tr>
<tr><th scope="row">Storage</th><td>Store cool, dry, room temperature (not the bathroom, T@37049)</td></tr>
<tr><th scope="row">After applying</th><td>Do not wrap, which raises absorption, and let it air dry <b>3&ndash;5 minutes</b> before clothing <span class="g2-src">(T@40748)</span></td></tr>
<tr><th scope="row">Seasons</th><td>Lesions can worsen in winter and summer</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Diaper dermatitis products <span class="g2-src">(DT 63&ndash;64)</span></h5>
<div class="g2-two">
<table class="g2-table g2-kv">
<caption>Skin protectants (17 FDA-approved ingredients) <span class="g2-src">(DT 63)</span></caption>
<tbody>
<tr><th scope="row">Amount</th><td>Liberally at every change</td></tr>
<tr><th scope="row">Old product</th><td>Old product removed gently</td></tr>
<tr><th scope="row">Coverage</th><td>Red areas fully covered</td></tr>
<tr><th scope="row">Duration</th><td>Continued after healing</td></tr>
</tbody>
</table>
<table class="g2-table g2-stack">
<caption>Ingredients <span class="g2-src">(DT 64)</span></caption>
<thead><tr><th scope="col">Product</th><th scope="col">Strength</th><th scope="col">What it is</th></tr></thead>
<tbody>
<tr><th scope="row">Zinc oxide</th><td><span class="g2-lab">Strength</span><b>1&ndash;40%</b></td><td>The active ingredient (common, excellent, thick and tacky)</td></tr>
<tr><th scope="row">Petrolatum</th><td><span class="g2-lab">Strength</span><b>30&ndash;100%</b></td><td>The ointment base</td></tr>
<tr><th scope="row">A &amp; D Ointment</th><td></td><td>Has lanolin and petrolatum, no zinc oxide</td></tr>
</tbody>
</table>
</div>
</div>
<div class="gpoll"><b>Her polls (the 21-year-old)</b>
<details class="g2-self"><summary>First-line maintenance <span class="g2-tap">Show answer</span></summary><p>Basic management + topical corticosteroid <span class="g2-src">(T@58910&ndash;59410)</span></p></details>
<details class="g2-self"><summary>Prescription details <span class="g2-tap">Show answer</span></summary><p>Hydrocortisone 1%, thin layer BID for 3&ndash;7 days; start low, as he is not on a steroid now <span class="g2-src">(T@59799&ndash;60609)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p5-7">
<h3>Dermatitis Therapeutics · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (DT 8)</span><b>Provide follow-up recommendations</b><i>DT 33, 36, 48, 52, 66</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Follow-up</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Topical steroid for AD <span class="g2-src">(DT 36, 52)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: improvement in</span><span class="g2-tile-num">24&ndash;48 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: refer if not better after</span><span class="g2-tile-num">7 days</span></div>
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: never past</span><span class="g2-tile-num">2 weeks</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>Her poll answer: 7 days <span class="g2-src">(T@68450)</span></p>
<p class="g2-p">Atrophy or infection on a topical steroid: <b>discontinue and refer</b> <span class="g2-src">(DT 33)</span>.</p>
</div>
<div>
<table class="g2-table g2-kv">
<caption>Diaper dermatitis at 7 days <span class="g2-src">(DT 66)</span></caption>
<tbody>
<tr><th scope="row">Improved but not healed</th><td>Continue until healed</td></tr>
<tr><th scope="row">Not healed, not improved or worse</th><td><b>Refer</b></td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>Her poll answer: 7 days <span class="g2-src">(T@82496)</span></p>
<p class="g2-sub">JAK inhibitors</p>
<p class="g2-said"><span class="g2-k">Said in class</span>Specialty follow-up every <b>2 weeks</b> <span class="g2-src">(T@55363)</span></p>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Pharmacist role and access <span class="g2-src">(DT 50, 53)</span></h5>
<div class="g2-two">
<div>
<p class="g2-sub">Pharmacist role <span class="g2-src">(DT 50)</span></p>
<ul>
<li>Improve adherence through education</li>
<li>Therapy optimization and monitoring</li>
<li>Recommend moisturizers and OTC products</li>
<li>Patient-friendly education on the plan</li>
<li>Accessible support</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>The SCORAD score is the physician&rsquo;s to calculate <span class="g2-src">(T@21052)</span></p>
</div>
<div>
<p class="g2-sub">Access <span class="g2-src">(DT 53)</span></p>
<ul>
<li>Barriers: high out-of-pocket costs, limited formularies, prior authorization and step therapy</li>
<li>Manufacturer patient assistance programs and grant foundations help patients with limited or no coverage</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>A denied prior authorization goes to appeal and a peer-to-peer conversation; the PCP writes the statement <span class="g2-src">(T@66410)</span></p>
</div>
</div>
</div>
</section>

<details class="gdetails" id="gpl-p5">
<summary>Dr. Patel: Dermatitis slide by slide, what the lecture adds (64 slides)</summary>
<section class="gobj" id="gobj-pl-d1-1">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 7&ndash;10</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 7&ndash;10)</span><b>The objectives define what a recommendation must contain, and the first topic taught is how much topical product to dispense</b><i>Patel Dermatitis slide 7, 8, 9, 10</i></div>
<div class="gpt g2-block"><h5>Learning objectives: the patient care process (Patel Dermatitis slide 7)</h5>
<p class="g2-status"><b>Status B, E</b> (objectives read in lecture; exam cue on 11/10)</p>
<p>Objectives 1 to 5 are the steps of a patient interview and decision: interview the patient, find the condition from signs, symptoms and history, decide whether the patient is a self-care candidate, set treatment goals, and recommend non-drug therapy. She explained that the objectives follow the pharmacist-patient care process, so each one is a step in applying knowledge to a real patient safely. On 11/10 she said that the objectives at the start of her lectures are the ones she follows when she creates questions.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;apply the knowledge that we're learning to a patient appropriately and safely&rdquo; <span class='g2-src'>11/06 T@5048</span></p>
<p>&ldquo;I do create questions based on the objectives that I start off with&rdquo; <span class='g2-src'>11/10 T@2768</span></p></div></div>
<div class="gpt g2-block"><h5>Learning objective 6: the parts of a treatment recommendation (Patel Dermatitis slide 8)</h5>
<p class="g2-status"><b>Status B, E</b> (lecture lists what each sub-objective asks for; exam cue)</p>
<p>Objective 6 has six parts: dosing frequency and maximum days of use, time of onset, length of treatment, the amount of product and tube size, adverse effects, and contraindications and interactions. In lecture she tied these to what a pharmacist must state for a patient: the medication name, the dose, the education given and the length of therapy. Because most products here are topical creams and ointments, she said the amount to prescribe must be calculated. She stressed the interaction question as the case where a patient keeps current medications while a new one starts. Objective 7 adds follow-up after the recommendation.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we also need to calculate the amount that we need to prescribe the patient&rdquo; <span class='g2-src'>11/06 T@5679</span></p>
<p>&ldquo;How do we identify and manage contraindications and drug interactions&rdquo; <span class='g2-src'>11/06 T@5854</span></p>
<p>&ldquo;how do we follow up on those recommendations&rdquo; <span class='g2-src'>11/06 T@6158</span></p></div></div>
<div class="gpt g2-block"><h5>Layers of the skin (Patel Dermatitis slide 9)</h5>
<p class="g2-status"><b>Status B, E</b> (naming the layers is on the lecture; depth limit is her cue)</p>
<p>The slide is a labeled drawing of skin structures with no text of its own. In lecture she named three layers: the epidermis (the first four layers of the skin), the dermis in the middle, and the subcutis at the bottom. She uses these names later to say where a process happens, for example that the barrier break in atopic dermatitis is in the epidermis while allergens and irritants then reach the deeper layers. She told the class that knowledge of the skin beyond these three layers is not needed.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So the 1st 4 layers of your skin is called the epidermis&rdquo; <span class='g2-src'>11/06 T@6295</span></p>
<p>&ldquo;and the last layer is called the subcutis&rdquo; <span class='g2-src'>11/06 T@6392</span></p>
<p>&ldquo;I don't need you to need to know anything&rdquo; <span class='g2-src'>11/06 T@6598</span></p></div></div>
<div class="gpt g2-block"><h5>Topical product quantity, tube sizes and the fingertip unit (Patel Dermatitis slide 10)</h5>
<p class="g2-status"><b>Status B, E</b> (why rounding up; how a fingertip unit is measured; exam cue)</p>
<p>The slide lists the standard tube sizes, 15, 30, 45, 60, 80 and 100 g, and says prescribed amounts are rounded up to an available size. She explained the reason: a calculated amount that falls between sizes is dispensed in the next larger size because the smaller one would leave the patient short. A fingertip unit is the amount of product squeezed from the start of the index finger to the first line on that finger, and it equals 0.5 g. Knowing the grams per unit lets the pharmacist convert the body area treated into grams.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;And we will always dispense it rounding up&rdquo; <span class='g2-src'>11/06 T@7218</span></p>
<p>&ldquo;We're not rounding down cause we would be shortening them with the amount&rdquo; <span class='g2-src'>11/06 T@7362</span></p>
<p>&ldquo;is called a fingertip unit&rdquo; <span class='g2-src'>11/06 T@7581</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-2">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 11&ndash;13</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 11&ndash;13)</span><b>Convert body area to grams with the adult fingertip unit chart, multiply by doses and days, then round up to an available tube size</b><i>Patel Dermatitis slide 11, 12, 13</i></div>
<div class="gpt g2-block"><h5>Adult fingertip units by body area (Patel Dermatitis slide 11)</h5>
<p class="g2-status"><b>Status B, E</b> (how the areas are bounded; exam cue and repeat cue on 11/10)</p>
<p>The chart gives adult fingertip units: scalp 3, face and neck 2.5, one hand 1, one arm including the hand 4, elbows 1, both soles 1.5, one foot 2, one leg 8, buttocks 4, knees 1, and trunk 14. The lecture adds how each area is bounded: the arm runs from shoulder to fingertips, the leg from hip to toes, and the trunk from shoulder to hips. Trunk 14 is two sides of 7 units each, front and back. The lecture also reads the buttocks and knees rows as both buttocks and both knees. The chart is for adults only. She cued it on 11/06 and repeated it on 11/10 when she returned to fingertip units.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So you will need to know this chart&rdquo; <span class='g2-src'>11/06 T@7844</span></p>
<p>&ldquo;So only for an adult&rdquo; <span class='g2-src'>11/06 T@8001</span></p>
<p>&ldquo;So 7 fingertip units is one side and the back is another 7&rdquo; <span class='g2-src'>11/06 T@8794</span></p>
<p>&ldquo;it would be 4 if it is both buttocks&rdquo; <span class='g2-src'>11/06 T@8538</span></p>
<p>&ldquo;hint, please know this chart&rdquo; <span class='g2-src'>11/10 T@76469</span></p></div></div>
<div class="gpt g2-block"><h5>Pediatric fingertip units (Patel Dermatitis slide 12)</h5>
<p class="g2-status"><b>Status B, E</b> (why children differ; scope limit)</p>
<p>The slide states that the adult fingertip unit is 0.5 g and gives pediatric values for reference. In lecture she said the child amounts are smaller because they are based on the surface area of the body. She placed the pediatric chart outside what the student must know, so the adult chart is the one she asked the class to know.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I don't necessarily want you guys to memorize the pediatric fingertip units&rdquo; <span class='g2-src'>11/06 T@9029</span></p>
<p>&ldquo;because it is based on the surface area of the body&rdquo; <span class='g2-src'>11/06 T@9203</span></p></div></div>
<div class="gpt g2-block"><h5>Prescription amounts: worked examples (Patel Dermatitis slide 13)</h5>
<p class="g2-status"><b>Status B, E</b> (the arithmetic steps; the calculation cue; rounding rule)</p>
<p>Each example has three steps. First convert fingertip units to grams for one application: face and neck is 2.5 units times 0.5 g, which is 1.25 g; one side of the trunk is 7 units times 0.5 g, which is 3.5 g. Second multiply by applications per day and days of treatment: twice daily for 2 weeks gives 35 g for the face and neck and 98 g for one side of the trunk. Third round up to an available tube size: 45 g and 100 g for an adult. For a younger child or infant the slide lists 30 g and 80 g. The in-class poll applied the same steps to an 18-year-old using hydrocortisone ointment on the face and neck 3 times a day for 14 days: 1.25 g times 3 times 14 days is 52.5 g <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, so the 60 g tube. She said the available sizes will be given in the exam question and that a calculation will be on the exam.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;1.25 g per application&rdquo; <span class='g2-src'>11/06 T@11625</span></p>
<p>&ldquo;multiply it by 2, multiply it by 14, and you should get 98 g&rdquo; <span class='g2-src'>11/06 T@10489</span></p>
<p>&ldquo;So remember to always round up.&rdquo; <span class='g2-src'>11/06 T@9889</span></p>
<p>&ldquo;I will always tell you what's available in the exam question&rdquo; <span class='g2-src'>11/06 T@9827</span></p>
<p>&ldquo;there will be a calculation on the exam&rdquo; <span class='g2-src'>11/06 T@12047</span></p>
<p>&ldquo;I don't want you to worry about pediatrics&rdquo; <span class='g2-src'>11/06 T@10023</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-3">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 15&ndash;19</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 15&ndash;19)</span><b>Recognize atopic dermatitis in an adult and a child and know what it is, how the skin barrier breaks down, and who is at risk</b><i>Patel Dermatitis slide 15, 16, 17, 18, 19</i></div>
<div class="gpt g2-block"><h5>Atopic dermatitis in an adult: example presentation (Patel Dermatitis slide 15)</h5>
<p class="g2-status"><b>Status C</b> (lecture reads the example and says it is the typical eczema presentation)</p>
<p>The slide shows a 21-year-old male college student with persistent itching, dryness and irritation behind the knees and inside the elbows. The lecture adds that this picture, with the back of the knees and inside of the elbows involved, is how eczema usually presents, and that "eczema" is the other name for atopic dermatitis. The same patient is used in the case on slide 26.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;is how eczema presents itself&rdquo; <span class='g2-src'>11/06 T@12702</span></p></div></div>
<div class="gpt g2-block"><h5>Atopic dermatitis in a child: example presentation (Patel Dermatitis slide 16)</h5>
<p class="g2-status"><b>Status C</b> (lecture states that the child presentation differs)</p>
<p>The slide shows a six-month-old boy with dry, red, scaly skin on the face, head, chest, back and ankles. In lecture she pointed out that the location and look differ from the adult example but the condition is the same. She said it is a different presentation but still atopic dermatitis.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So a little different presentation, but still atopic dermatitis&rdquo; <span class='g2-src'>11/06 T@12873</span></p></div></div>
<div class="gpt g2-block"><h5>Definition: chronic, relapsing, no cure, not contagious (Patel Dermatitis slide 17)</h5>
<p class="g2-status"><b>Status B, E</b> (why chronic and relapsing matter; she calls it very important)</p>
<p>The slide defines atopic dermatitis (eczema) as a very common chronic or relapsing inflammatory skin disorder that often starts in childhood, with itching (pruritus) as the hallmark symptom, no cure and no contagion. She asked the class what pruritus means and answered itching. She stressed that there is no cure, so the disease can be chronic and can relapse. She also said it is not contagious.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So it could be chronic and it could relapse&rdquo; <span class='g2-src'>11/06 T@13159</span></p>
<p>&ldquo;Hallmark symptom is pruritus.&rdquo; <span class='g2-src'>11/06 T@13311</span></p>
<p>&ldquo;So that's very important for you guys to understand&rdquo; <span class='g2-src'>11/06 T@13074</span></p></div></div>
<div class="gpt g2-block"><h5>Pathophysiology: broken barrier and the inflammatory cascade (Patel Dermatitis slide 18)</h5>
<p class="g2-status"><b>Status B, C</b> (the slide is a figure; the lecture gives the order of events and the prevention link)</p>
<p>The figure has three steps for initiation: a disrupted barrier (from a FLG mutation or from dryness caused by cleansing or the environment), allergen and irritant influx, and inflammatory T cell responses initiated by keratinocytes (e.g. TSLP) and dendritic cells. In lecture she explained that the barrier break lets allergens and irritants enter the skin, including the dermis and subcutis, and that the immune response is what produces the redness, itching and plaques. That is why prevention is aimed at the barrier: the figure shows emollient therapy improving the skin barrier and blocking the inflammatory cascade, and she named Aquaphor as an example emollient. She called her pathophysiology explanation very brief.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there is a barrier that is broken on the epidermis of the skin&rdquo; <span class='g2-src'>11/06 T@13603</span></p>
<p>&ldquo;that is what's causing the inflammatory T cell response&rdquo; <span class='g2-src'>11/06 T@13998</span></p>
<p>&ldquo;Improves the skin barrier and blocks the inflammatory cascade&rdquo; <span class='g2-src'>11/06 T@14553</span></p></div></div>
<div class="gpt g2-block"><h5>Risk factors, atopic triad and atopic march (Patel Dermatitis slide 19)</h5>
<p class="g2-status"><b>Status B, C</b> (lecture gives the order of the march; says some factors have no explanation)</p>
<p>The slide lists personal or family history of atopic disorders, the atopic triad, the atopic march, a loss-of-function mutation in the FLG gene, urban living, smaller family size and higher parental education. The triad is the three diagnoses allergic rhinitis, asthma and atopic dermatitis in one patient. The lecture gives the march as a sequence from the diagram: dry skin at birth, then eczema within the first weeks or months, then food allergies, then rhinitis (nasal allergies), and last asthma. For smaller family size and higher parental education she said the data show an association and no reason was provided.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that is called the atopic triad&rdquo; <span class='g2-src'>11/06 T@14863</span></p>
<p>&ldquo;Atopic march refers to natural history or that progression of the allergic disease state&rdquo; <span class='g2-src'>11/06 T@14896</span></p>
<p>&ldquo;it's the FLG gene&rdquo; <span class='g2-src'>11/06 T@15428</span></p>
<p>&ldquo;There wasn't any reasoning provided in terms of that&rdquo; <span class='g2-src'>11/06 T@16040</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-4">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 20&ndash;24</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 20&ndash;24)</span><b>Know what triggers flares, how the disease looks at each age, and how to classify a patient by severity and by lesion status</b><i>Patel Dermatitis slide 20, 21, 22, 23, 24</i></div>
<div class="gpt g2-block"><h5>Triggers: irritants, allergens, environment, personal factors (Patel Dermatitis slide 20)</h5>
<p class="g2-status"><b>Status B, C</b> (why each trigger matters; everyday examples from the lecture)</p>
<p>The slide groups triggers into irritants (tobacco smoke, air pollution, cosmetics, fragrances, astringents, irritating soaps, scrubs and detergents, dyes and preservatives), allergens (foods, wool and polyester clothing, aeroallergens such as dust mites, pollens, pet dander and molds), environment (extreme temperatures, low humidity) and personal factors (stress, excessive skin washing and sanitizing). The lecture explains the common thread: because the disease is a continuing inflammatory condition with a weak barrier, anything that irritates or dries the skin can start a flare. Examples she gave are a dyed or scented laundry detergent (she named Tide), lotion or body wash with color or scent, and either extreme cold or extreme heat. She said food triggers are personal to each patient. Low humidity and over-washing both dry the barrier, which is why moisture protects it.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So remember, this is an ongoing chronic inflammatory condition&rdquo; <span class='g2-src'>11/06 T@16201</span></p>
<p>&ldquo;So as simple as a dyed laundry detergent&rdquo; <span class='g2-src'>11/06 T@16722</span></p>
<p>&ldquo;the more moisture we provide the skin barrier, the more helpful it is&rdquo; <span class='g2-src'>11/06 T@17465</span></p>
<p>&ldquo;excessive skin washing and sanitizing because you're drying out the barrier of the skin&rdquo; <span class='g2-src'>11/06 T@17748</span></p></div></div>
<div class="gpt g2-block"><h5>Clinical presentation by age (Patel Dermatitis slide 21)</h5>
<p class="g2-status"><b>Status B, E</b> (what changes with age; she will give these terms on the exam)</p>
<p>The slide compares three age groups on appearance, region and timing. Infancy (0 to 2 years): red papular rash that tends to ooze on the face, scalp, trunk, arms and legs, with onset most commonly at 3 to 6 months and the majority by age one. Childhood (2 to puberty): dry, flaky, rough, cracked skin with crusting and lichenification, with up to 90% diagnosed by age 5. Adulthood: more diffuse redness, dry scaly skin and lichenification, less on the face and more on the hands, neck, inner elbows, back of the knees and ankles. In lecture she said lichenification is the silvery scaly plaque and that she will put these descriptive terms in exam cases so the student can tell whether lichenification is present. The lecture sentence on adult resolution (70 to 90% on the slide) is garbled in the captions, so the slide governs.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;by the time they turn 1, you most likely will see a diagnosis&rdquo; <span class='g2-src'>11/06 T@18317</span></p>
<p>&ldquo;that's the terms and details that I'll also provide on the exam&rdquo; <span class='g2-src'>11/06 T@18774</span></p></div></div>
<div class="gpt g2-block"><h5>Age of onset predicts persistence (Patel Dermatitis slide 22)</h5>
<p class="g2-status"><b>Status B</b> (the slide is a graph of persistence by age at onset; the lecture states the rule)</p>
<p>The slide is a graph of the proportion of surveys reporting persistent disease by age, with separate early-onset, mid-onset and late-onset curves. Its single idea is that the earlier the disease starts, the longer it lasts. In lecture she walked through ages: onset as an infant carries the highest chance of persistent disease into adulthood, onset at about 5 years old is slightly lower, and onset at about 10 years is lower still. She gave no percentages for this slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the earlier the onset of the patient&rdquo; <span class='g2-src'>11/06 T@20474</span></p>
<p>&ldquo;the longer the persistence of the disease state&rdquo; <span class='g2-src'>11/06 T@20512</span></p></div></div>
<div class="gpt g2-block"><h5>Severity: mild, moderate, severe and the SCORAD ranges (Patel Dermatitis slide 23)</h5>
<p class="g2-status"><b>Status B, E</b> (who calculates the score; the features she highlighted; the key feature of severe)</p>
<p>SCORAD ranges on the slide are mild under 25, moderate 25 to 50 and severe over 50, and the slide describes each level by itching, effect on activities and effect on sleep. The lecture adds who uses the score: the physician calculates it, and the pharmacist does not calculate it but must recognize mild, moderate or severe and know what to do for each. Mild has infrequent itching with sleep still possible. Moderate has frequent itching and moderate effect on activities and sleep. Severe adds worse itching, redness, thickening, and oozing, with severe limitation of activities; she called nightly loss of sleep the biggest key. She said patient cases will define the level through these characteristics.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this is our main AAD recommendation that we follow&rdquo; <span class='g2-src'>11/06 T@20704</span></p>
<p>&ldquo;that is on the physician to do so&rdquo; <span class='g2-src'>11/06 T@21125</span></p>
<p>&ldquo;But we do need to understand if it's mild, moderate, and severe&rdquo; <span class='g2-src'>11/06 T@21160</span></p>
<p>&ldquo;biggest key here is nightly loss of sleep&rdquo; <span class='g2-src'>11/06 T@21892</span></p>
<p>&ldquo;I've highlighted and underlined the certain characteristics that I want you to understand&rdquo; <span class='g2-src'>11/06 T@21942</span></p></div></div>
<div class="gpt g2-block"><h5>Lesion status: acute, subacute, chronic (Patel Dermatitis slide 24)</h5>
<p class="g2-status"><b>Status B, E</b> (the slide is a photo table; the lecture gives the distinguishing feature of each step)</p>
<p>Severity and status are two separate questions. The slide shows photos of acute lesions (acutely inflamed papules, vesicles, exudate and crusts), subacute lesions (dry, inflamed papules, patches or plaques) and chronic lesions (lichenified papules or plaques, fine scale, changes in pigment). The lecture gives the rule for telling them apart: acute is inflammation and redness without dryness, subacute adds dryness to continuing inflammation, and chronic is lichenification. She said she wants both the severity and the status defined for a patient.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the difference between subacute and acute is that drying factor of the skin&rdquo; <span class='g2-src'>11/06 T@22818</span></p>
<p>&ldquo;that is the difference between chronic and subacute&rdquo; <span class='g2-src'>11/06 T@22757</span></p>
<p>&ldquo;we also need to define if it's acute, sub-acute or chronic&rdquo; <span class='g2-src'>11/06 T@22962</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-5">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 25&ndash;29</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 25&ndash;29)</span><b>Know the complications, apply severity and status to a case, state the treatment goals, and begin treatment by protecting the skin barrier</b><i>Patel Dermatitis slide 25, 26, 27, 28, 29</i></div>
<div class="gpt g2-block"><h5>Complications (Patel Dermatitis slide 25)</h5>
<p class="g2-status"><b>Status B, C</b> (how itching leads to infection; family impact)</p>
<p>The slide lists sleep disturbance, depression, effects on quality of life and skin infections (S. aureus, and a tendency toward herpes simplex virus infection). In lecture she explained the path to infection: itching leads to scratching with nails, scratching causes bleeding and oozing, and open skin is at risk for infection. She also said that quality of life can be affected for the family when the patient is young enough to need care, and that the effect on mental health can be severe. The organisms named on the slide were not discussed in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that may cause possible oozing that is at a risk for an infection&rdquo; <span class='g2-src'>11/06 T@23555</span></p>
<p>&ldquo;as well as the family's quality of life&rdquo; <span class='g2-src'>11/06 T@23262</span></p></div></div>
<div class="gpt g2-block"><h5>Case: adult atopic dermatitis, severity and status (Patel Dermatitis slide 26)</h5>
<p class="g2-status"><b>Status B, C, E</b> (how she solved it: score first, then dryness and lichenification)</p>
<p>The case gives a 21-year-old man with persistent itching of the knees and elbows for 2 to 3 months, atopic dermatitis since age 10, loratadine 10 mg daily for allergic rhinitis, Jergens lotion, dry and inflamed skin with no infection or lichenified plaques, and a SCORAD of 40. The chief complaint on the slide is that the itching will not stop and he does not sleep well. She answered in two steps. Severity comes from the score: 40 falls in the moderate range of 25 to 50. Status comes from the exam findings: dryness without lichenification is subacute, and lichenification would make it chronic. The key was moderate subacute; most students chose it, followed by moderate acute. Before the poll she told the class to pay attention to the terms and key points that separate the levels.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So remember the terms and the biggest key points&rdquo; <span class='g2-src'>11/06 T@25317</span></p>
<p>&ldquo;40 falls between 25 and 50&rdquo; <span class='g2-src'>11/06 T@26141</span></p>
<p>&ldquo;What would we take out of this sentence? The dry part, right?&rdquo; <span class='g2-src'>11/06 T@26624</span></p>
<p>&ldquo;So lichenification, chronic, dryness, subacute&rdquo; <span class='g2-src'>11/06 T@26804</span></p>
<p>&ldquo;the answer is moderate subacute&rdquo; <span class='g2-src'>11/06 T@27007</span></p></div></div>
<div class="gpt g2-block"><h5>Treatment goals (Patel Dermatitis slide 27)</h5>
<p class="g2-status"><b>Status B, C</b> (what the antibiotic and water-loss goals mean)</p>
<p>The goals on the slide are to eliminate triggers, reduce symptoms (pruritus and dermatitis), prevent flares, prevent secondary infections, minimize adverse drug reactions and reduce transepidermal water loss (TEWL). The slide says not to use oral antibiotics or topical antibiotics over large areas of skin; in lecture she placed that under minimizing side effects. Reducing water loss ties back to the skin barrier: the goal is to strengthen the barrier so allergens and irritants cannot pass into the deeper layers, using emollients and moisturizing.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not using oral antibiotics or topical antibiotics over large areas of skin&rdquo; <span class='g2-src'>11/06 T@27565</span></p>
<p>&ldquo;We also need to reduce the transepidermal water loss&rdquo; <span class='g2-src'>11/06 T@27651</span></p></div></div>
<div class="gpt g2-block"><h5>Patient care process (Patel Dermatitis slide 28)</h5>
<p class="g2-status"><b>Status C</b> (the slide is a title; the lecture lists the steps)</p>
<p>The slide is only a section title. When she introduced it she said the pharmacist-patient care process applies to every treatment decision in these lectures and listed its steps: collect information from the patient, assess it, create a plan, implement the plan, and follow up, monitor and evaluate. Earlier she said the objectives on slides 7 and 8 follow this process.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;our patient care process will always apply&rdquo; <span class='g2-src'>11/06 T@28019</span></p>
<p>&ldquo;collecting the information from the patient&rdquo; <span class='g2-src'>11/06 T@28197</span></p></div></div>
<div class="gpt g2-block"><h5>Fix the skin barrier (Patel Dermatitis slide 29)</h5>
<p class="g2-status"><b>Status B, C</b> (the first step is not stripping the skin; the scrub question)</p>
<p>The slide has three aims: do not strip off the weakened epidermis (gentle cleansers, limited bathing time), help re-establish the epidermis (thick emollients, maintained hydration) and reduce inflammation (topical medications to reduce inflammation and decrease scratching). She called not stripping the epidermis the first step, because the barrier is what is already broken. That also means gentle body washes with limited dyes and fragrances. A student asked about bathing tools such as a brush: abrasion on plaques is avoided, other body areas on an adult can be exfoliated only very gently, and she does not recommend a sugar-type scrub because the epidermis is already broken.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So don't strip off the weakened epidermis&rdquo; <span class='g2-src'>11/06 T@29178</span></p>
<p>&ldquo;limiting any dyes and fragrances to those body washes&rdquo; <span class='g2-src'>11/06 T@29300</span></p>
<p>&ldquo;Very limited in terms of the abrasion to the skin would be key&rdquo; <span class='g2-src'>11/06 T@29876</span></p>
<p>&ldquo;I'm not recommending a body scrub per se&rdquo; <span class='g2-src'>11/06 T@30193</span></p>
<p>&ldquo;reducing inflammation comes from the topical medications that we'll prescribe&rdquo; <span class='g2-src'>11/06 T@29591</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-6">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 30&ndash;33</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 30&ndash;33)</span><b>Treat atopic dermatitis first with non-drug care: bathing, moisturizers chosen by thickness, and clear points for referral</b><i>Patel Dermatitis slide 30, 31, 32, 33</i></div>
<div class="gpt g2-block"><h5>Non-drug treatments (Patel Dermatitis slide 30)</h5>
<p class="g2-status"><b>Status B</b> (wet wrap limits; the reason for the TCI exclusion is not in the materials)</p>
<p>The slide lists bathing practices, gentle cleansers, a wet wrap, soft cotton clothing, avoiding known triggers and decreasing stress. Slide 20 lists wool and polyester as clothing triggers. Two limits on the wet wrap are on the slide and were said aloud: it is short-term, and it is not used together with topical calcineurin inhibitors (TCIs). She did not explain the reason for the TCI exclusion in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;a wet wrap is very helpful, but short-term&rdquo; <span class='g2-src'>11/06 T@30597</span></p>
<p>&ldquo;we're not gonna use this with our TCIs&rdquo; <span class='g2-src'>11/06 T@30645</span></p></div></div>
<div class="gpt g2-block"><h5>Bathing practices, bleach baths and occlusive moisturizer (Patel Dermatitis slide 31)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> (the order of recommendations; how cautious she is about bleach; oatmeal frequency conflicts with the slide)</p>
<p>Bath: she explained the 10-minute lukewarm bath as water neither hot nor cold, dye-free and fragrance-free cleansers, and patting and not scrubbing because the epidermis is already broken. Moisturizer: apply an occlusive moisturizer right after the bath so the water is trapped on the skin and the barrier is strengthened. Bleach: the slide gives 0.005% sodium hypochlorite, a half cup in a full tub, twice a week, to prevent recurrent bacterial skin infections in moderate to severe disease. She taught it because the guidelines state it, but called it last line because it can irritate the skin.</p>
<div class="g2-note"><span class="g2-k">Conflict: how often to add oatmeal or baking soda</span><p>Slide: "May add oatmeal or baking soda to bath water daily." Lecture: oatmeal or baking soda baths are used, but she limited how often. An exam written from her lecture would key the limited use: she did not repeat "daily" and said to limit how often, and no number of baths is stated anywhere in the materials. Her words: &ldquo;very limited in terms of how often to do this&rdquo; <span class='g2-src'>11/06 T@31306</span>.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So lukewarm water, so not hot, not cold&rdquo; <span class='g2-src'>11/06 T@30950</span></p>
<p>&ldquo;We're patting it down. We're not scrubbing it.&rdquo; <span class='g2-src'>11/06 T@31092</span></p>
<p>&ldquo;you wanna go ahead and apply that moisturization right away&rdquo; <span class='g2-src'>11/06 T@32505</span></p>
<p>&ldquo;this is only for patients moderate to severe&rdquo; <span class='g2-src'>11/06 T@31792</span></p>
<p>&ldquo;my recommendation is, this is very much so last line recommendation&rdquo; <span class='g2-src'>11/06 T@32244</span></p>
<p>&ldquo;But keep in mind, it can also irritate it even more&rdquo; <span class='g2-src'>11/06 T@32092</span></p></div></div>
<div class="gpt g2-block"><h5>Over-the-counter moisturizers (Patel Dermatitis slide 32)</h5>
<p class="g2-status"><b>Status B</b> (why petrolatum is the most effective; why lotions need repeat application; humectant limit)</p>
<p>Slide categories: petroleum-containing (Aquaphor, Eucerin, Lubriderm), ceramide-containing (CeraVe, Aveeno eczema therapy), urea-containing (Carmol 10% and 20%, Lac-Hydrin 5%) and emollients (Cetaphil lotion, Keri Original, Neutrogena lotion). The lecture supplies the ranking and the reason for it. Petrolatum products are the most effective because they are the thickest and last longest, though they can be greasy and uncomfortable; Aquaphor is petrolatum alone and Eucerin and Lubriderm add mineral oil. Ceramides are already in the skin barrier, so a ceramide cream supplies ceramides the barrier already contains. Urea products are humectants and give less moisturizing. Lotions contain more water and absorb quickly, so they are less effective and need repeat use, which the slide gives as 3 or more times a day after bathing.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Aquaphor is the only petrolatum&rdquo; <span class='g2-src'>11/06 T@33325</span></p>
<p>&ldquo;The most effective on this chart is the petrolatum-containing moisturizers&rdquo; <span class='g2-src'>11/06 T@34600</span></p>
<p>&ldquo;it's the thickest and it'll last the longest&rdquo; <span class='g2-src'>11/06 T@34681</span></p>
<p>&ldquo;we have natural ceramides in our skin barrier&rdquo; <span class='g2-src'>11/06 T@33433</span></p>
<p>&ldquo;lotions have a lot more water containing properties in them&rdquo; <span class='g2-src'>11/06 T@34331</span></p>
<p>&ldquo;You would have to apply a lotion multiple times in a day&rdquo; <span class='g2-src'>11/06 T@34415</span></p></div></div>
<div class="gpt g2-block"><h5>Over-the-counter self-care follow-up (Patel Dermatitis slide 33)</h5>
<p class="g2-status"><b>Status B, C</b> (the referral triggers said aloud; the slide adds skin atrophy)</p>
<p>The slide gives two referral points: no improvement or worsening after 2 to 3 days of self-treatment, and skin atrophy or infection while using a topical steroid, in which case the steroid is stopped and the patient is referred to a physician. In lecture she called the first a straight referral, and she described signs of infection as oozing and bleeding, and applied the second to a patient who is using non-drug care and a medication ointment. Skin atrophy was not discussed in lecture. This is the follow-up objective (objective 7) applied to atopic dermatitis.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that would be a straight referral to the provider&rdquo; <span class='g2-src'>11/06 T@34872</span></p>
<p>&ldquo;If the skin shows any sort of infection, oozing, bleeding&rdquo; <span class='g2-src'>11/06 T@34927</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d1-7">
<h3>Dr. Patel, slide by slide &middot; Dermatitis Therapeutics &middot; slides 34&ndash;36</h3>
<div class="gbar"><span>What the lecture adds (Dermatitis 34&ndash;36)</span><b>Name the drug classes for atopic dermatitis, and state topical corticosteroid counseling and the OTC hydrocortisone 1% limits</b><i>Patel Dermatitis slide 34, 35, 36</i></div>
<div class="gpt g2-block"><h5>Pharmacologic treatments: the five classes (Patel Dermatitis slide 34)</h5>
<p class="g2-status"><b>Status C</b> (the slide is a list; the lecture ties it to the earlier lectures and to how often steroids return)</p>
<p>The slide names five treatment groups: topical corticosteroids, topical calcineurin inhibitor, topical phosphodiesterase-4 inhibitor, a monoclonal antibody (IL-4) antagonist injection, and systemic immunosuppressants. In lecture she told the class to apply what they learned in the medicinal chemistry and pharmacology lectures to these classes, and noted that topical corticosteroids will keep appearing across the therapeutics series. The detail of each class follows on the next slides.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;you will continuously see these medications throughout the therapeutics series&rdquo; <span class='g2-src'>11/06 T@35752</span></p></div></div>
<div class="gpt g2-block"><h5>Topical corticosteroids: monograph (Patel Dermatitis slide 35)</h5>
<p class="g2-status"><b>Status B, C</b> (why use a drug with these adverse effects; what absorption depends on; counseling details; combination products)</p>
<p>The slide lists indications, adverse reactions (burning, tingling, cracking, itching, acne, skin atrophy, delayed wound healing), contraindications (including diaper dermatitis), absorption, and counseling points (clean, dry area, thin layer rubbed in, store cool and dry, not longer than 2 weeks). The mechanism is referred to the medicinal chemistry and pharmacology slides. She answered the obvious objection to the adverse effects: the drug is used for a very short time, and its anti-inflammatory action is the reason for using it. Counseling additions: do not store it in the bathroom or kitchen; do not wrap the medication because wrapping increases absorption; and if it goes on a body part that clothing will cover, let it air dry 3 to 5 minutes <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. Absorption depends on the age of the patient, skin integrity, skin thickness and the site. Combination steroid products are not recommended for atopic dermatitis, and if one contains clobetasol, its very high potency is the one followed.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I want you to refer back to Medchem&rdquo; <span class='g2-src'>11/06 T@35591</span></p>
<p>&ldquo;we're utilizing them for a very short period of time&rdquo; <span class='g2-src'>11/06 T@36243</span></p>
<p>&ldquo;our main property and our main reason to utilizing this is decreasing the inflammation&rdquo; <span class='g2-src'>11/06 T@36411</span></p>
<p>&ldquo;the absorption really depends on the age of the patient, the skin integrity&rdquo; <span class='g2-src'>11/06 T@36650</span></p>
<p>&ldquo;this is not gonna be in the bathroom&rdquo; <span class='g2-src'>11/06 T@37076</span></p>
<p>&ldquo;we don't want to wrap the medication cause that'll increase the absorption as well&rdquo; <span class='g2-src'>11/06 T@40702</span></p>
<p>&ldquo;in the case of atopic dermatitis, only single medication agents will be recommended&rdquo; <span class='g2-src'>11/06 T@41802</span></p></div></div>
<div class="gpt g2-block"><h5>OTC topical corticosteroid: hydrocortisone 1% (Patel Dermatitis slide 36)</h5>
<p class="g2-status"><b>Status B, E</b> (the face rule; how the 7-day and 2-week limits fit together; her hint)</p>
<p>The slide gives hydrocortisone 1% as the low-to-medium potency product commonly used, usable on the body and always for the face, applied twice daily for a maximum of 3 to 7 days or until the flare clears. If it is not resolved in 7 days the patient should seek assistance, and it is not applied for longer than 2 weeks. She explained the two limits: 7 days is when the patient is sent for help, and 14 days is the outer limit even for a patient who goes past 7 days anyway. She also said hydrocortisone 1% is the only strength usable on the face, and she marked that with the word hint.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Hint, this is the only dose and strength&rdquo; <span class='g2-src'>11/06 T@37506</span></p>
<p>&ldquo;you may use hydrocortisone 1% on your face&rdquo; <span class='g2-src'>11/06 T@37462</span></p>
<p>&ldquo;that is straight referral&rdquo; <span class='g2-src'>11/06 T@37946</span></p>
<p>&ldquo;we're also recommending that the patient not use it past 14 days&rdquo; <span class='g2-src'>11/06 T@37977</span></p></div></div>
</section>

<section class="gobj" id="gobj-pl-d2-1">
<h3>Dr. Patel, slide by slide &middot; Atopic dermatitis therapeutics &middot; slides 37&ndash;40</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 37&ndash;40)</span><b>Know how vehicle and potency set the steroid choice, and why pimecrolimus and tacrolimus are second line with a boxed warning</b><i>Patel Dermatitis slide 37, 38, 39, 40</i></div>
<div class="gpt g2-block"><h5>Topical steroid potency and vehicle (Patel Dermatitis slide 37)</h5>
<p class="g2-status"><b>Status B, C, E</b> reasoning behind the vehicle order, practical limits added, arrows she marked</p>
<p>The slide gives a potency table and the order of vehicles, strongest to weakest: ointment, cream, lotion, solution, gel, spray. The lecture supplies the reason. The vehicle is the thickness of the base, so a thicker base stays on the skin longer. That is why the same drug changes class with its form: mometasone 0.1% is high potency as an ointment (the red arrow) and medium potency as a cream. She asked the class to concentrate on the drugs with black arrows, the most commonly prescribed.</p>
<p>The only OTC row is hydrocortisone 0.25%, 0.5% and 1%, lowest potency; on slide 36 she said 1% is the only strength that goes on the face. Asked about wrapping the area, she said no, because wrapping raises absorption. For a site that clothing will cover, she advised 3 to 5 minutes of air drying <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. For atopic dermatitis only single-ingredient products are recommended, so combination steroid creams are not advised.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this is the only dose and strength that you can utilize on your face&rdquo; <span class='g2-src'>11/06 T@37512</span></p>
<p>&ldquo;we don't want to wrap the medication cause that'll increase the absorption&rdquo; <span class='g2-src'>11/06 T@40702</span></p>
<p>&ldquo;in the case of atopic dermatitis, only single medication agents will be recommended&rdquo; <span class='g2-src'>11/06 T@41802</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Topical calcineurin inhibitors: why second line (Patel Dermatitis slide 38)</h5>
<p class="g2-status"><b>Status B, C</b> why second line, why slower, why no bathing after use</p>
<p>The slide places these drugs second line for mild-to-moderate atopic dermatitis when topical steroids give no response, and it points to a boxed warning on the next slide. The lecture ties the two together: the boxed warnings are the reason the class is held for a short period and used intermittently. Side effects (burning, tingling, cracking, itching) match the topical steroids.</p>
<p>Two counseling points get a reason. The patient does not bathe, shower or swim right after applying so the medication is absorbed. Response also takes longer than with a steroid. The slide gives 1 to 8 weeks and she said the patient keeps applying during that time; slide 52 gives 24 to 48 hours for topical steroid improvement. She added that the class is not recommended under 2 years of age.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's a second-line agent used for a very short period of time&rdquo; <span class='g2-src'>11/06 T@42369</span></p>
<p>&ldquo;we do have to continue to apply this medication a little bit longer&rdquo; <span class='g2-src'>11/06 T@43033</span></p>
<p>&ldquo;we want the medication to absorb&rdquo; <span class='g2-src'>11/06 T@42791</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Pimecrolimus and tacrolimus side by side (Patel Dermatitis slide 39)</h5>
<p class="g2-status"><b>Status B, E</b> which drug fits which severity; her cue on what to compare</p>
<p>The slide lists pimecrolimus (Elidel) cream 1% for mild-to-moderate eczema and tacrolimus (Protopic) ointment for moderate-to-severe eczema. Both are for children 2 years and older and adults, both are applied twice daily, and both reduce the incidence of flares. Tacrolimus comes in two strengths: 0.1% for adults older than 16 years and 0.03% from 2 years to 15 years of age.</p>
<p>Slide 38 describes the class as a whole as mild-to-moderate; this slide narrows it by drug, and she taught it by drug. She said the bolded items (age, percentage, dosage form) are what to take from the slide. She also asked whether a calcineurin inhibitor is first or second line; the answer given in the room was second line. No one under 2 years of age is given either drug.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;mild to moderate, tacrolimus, moderate to severe&rdquo; <span class='g2-src'>11/06 T@43374</span></p>
<p>&ldquo;our biggest things to understand with our TCIs&rdquo; <span class='g2-src'>11/06 T@44062</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Boxed warning of calcineurin inhibitors (Patel Dermatitis slide 40)</h5>
<p class="g2-status"><b>Status B, E</b> why each restriction exists; she called these the points that matter</p>
<p>The slide lists lymphoma and skin malignancy, avoiding use on malignant or premalignant skin conditions such as cutaneous T-cell lymphoma, reassessing after 6 weeks, minimum amount on involved areas only, no established safety of intermittent use beyond 1 year, no use under 2 years, and sun protection. She stressed that the cases are rare but that the patient is still counseled, and that the class is avoided in anyone who already has a history of these conditions.</p>
<p>The reason for reassessing at 6 weeks and for intermittent use is the safety profile: the long-term record is limited, so the smallest amount for the shortest time is used. Sun protection is part of the same warning, and she said she would teach more about sunscreen or sunblock the following week.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;We reassess treatment after 6 weeks because of the safety profile&rdquo; <span class='g2-src'>11/06 T@44614</span></p>
<p>&ldquo;avoid it in our patients that already have a medical history of these conditions&rdquo; <span class='g2-src'>11/06 T@44528</span></p>
<p>&ldquo;important things to kind of remember in terms of black box warnings for TCIs&rdquo; <span class='g2-src'>11/06 T@45193</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-2">
<h3>Dr. Patel, slide by slide &middot; Atopic dermatitis therapeutics &middot; slides 41&ndash;44</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 41&ndash;44)</span><b>Know where crisaborole and dupilumab fall in the order of treatment, and the age, vaccine, interaction and dosing details</b><i>Patel Dermatitis slide 41, 42, 43, 44</i></div>
<div class="gpt g2-block"><h5>Crisaborole, the third-line topical (Patel Dermatitis slide 41)</h5>
<p class="g2-status"><b>Status B</b> where it falls in the order of use</p>
<p>The slide gives crisaborole (Eucrisa) 2% ointment, a PDE-4 inhibitor, for mild-to-moderate atopic dermatitis as the third-line option if all other options fail. Side effects are skin burning and stinging, and it is not used under 3 months of age. The lecture states the order plainly: it comes after the steroid and calcineurin inhibitor have both been tried and more help is still needed. The counseling points are the same as for the other topical classes (clean, dry area; thin layer rubbed in gently until it vanishes; no bathing, showering or swimming right after; cool, dry storage at room temperature).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;This is a third-line option after the other two have been trialed&rdquo; <span class='g2-src'>11/06 T@45384</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Crisaborole use: treat flares only (Patel Dermatitis slide 42)</h5>
<p class="g2-status"><b>Status B, C</b> flare-only use, and what is done every day instead</p>
<p>The slide says to apply a thin layer twice daily for mild-to-moderate eczema, to treat flares, in adults and in infants and children older than 3 months, and only when a steroid is not appropriate or as an adjunct. The lecture explains the flare idea. Atopic dermatitis is chronic, but the patient does not flare every day of the year, so the steroid, the calcineurin inhibitor and crisaborole are all used to treat flares and are not applied every day for years.</p>
<p>What continues daily is the non-drug care (moisturizing, bathing practice, trigger avoidance).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're always applying non-pharm therapy every day&rdquo; <span class='g2-src'>11/06 T@46492</span></p>
<p>&ldquo;we're treating our flares with our medication therapy&rdquo; <span class='g2-src'>11/06 T@46547</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Dupilumab (Dupixent): who, which cautions, how to inject (Patel Dermatitis slide 43)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> specialty status, drug interaction wording, live vaccine cue, injection technique</p>
<p>The slide covers an IL-4 antagonist injection for moderate-to-severe atopic dermatitis (also asthma and other conditions), with injection site reactions, a CYP-450 caution (warfarin, cyclosporine), and no use with live vaccines or under 6 months. The lecture adds that it is a specialty medication: close monitoring by a clinical pharmacist and prior authorization are required, so it is reached through extra steps after topicals fail. She said she may put a live vaccine on a case, where the answer is not to recommend it.</p>
<p>Counseling: the lower abdomen hurts least and the upper arm is a little uncomfortable; after refrigeration the product is left to come to room temperature for 30 to 45 minutes, which she said tends to sting less.</p>
<div class="g2-note"><span class="g2-k">Conflict: how the CYP-450 caution is worded</span><p>Slide: the drug &ldquo;may interact with CYP-450 enzymes (may need to adjust warfarin or cyclosporine doses)&rdquo;. Lecture (captions read &ldquo;SIP 450&rdquo;): she said that with warfarin or cyclosporine it would be an interaction, and that it &ldquo;completely contraindicates&rdquo; with other CYP-450 medications, so other options are considered. An exam written from her lecture would key the slide wording (an interaction that can require a dose adjustment), since her first statement was &ldquo;that would be an interaction.&rdquo;</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I give you guys tips of my exam questions, so write it down&rdquo; <span class='g2-src'>11/06 T@48351</span></p>
<p>&ldquo;I may include it on a case&rdquo; <span class='g2-src'>11/06 T@48259</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Dupilumab dosing by age and weight (Patel Dermatitis slide 44)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> which doses she asked for, weight conversion, one verbal slip</p>
<p>The slide gives adult dosing (600 mg once as 2 x 300 mg, then 300 mg every other week) and weight bands for ages 6 to 17: over 60 kg uses adult dosing; 30 to 60 kg is 400 mg once (2 x 200 mg) then 200 mg every other week; 15 to 30 kg is 600 mg once (2 x 300 mg) then 300 mg every 4 weeks. Infant dosing is also on the slide; she said it is weight-based and shown for reference.</p>
<p>Children are dosed by weight, and she said she will provide the patient&rsquo;s weight; converting pounds to kilograms is division by 2.2 <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. It may be combined with topical steroids or calcineurin inhibitors, and specialty pharmacies dispense it only on order because of its cost.</p>
<div class="g2-note"><span class="g2-k">Conflict: a verbal slip about frequency</span><p>For the 15 to 30 kg band she said the dose &ldquo;does increase slightly, but remember, the frequency is also increased&rdquo; and then &ldquo;just once a month.&rdquo; The slide shows 600 mg then 300 mg every 4 weeks, which is less frequent than every other week. An exam written from her lecture would follow the slide: every 4 weeks.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I will provide you the weight of the patient&rdquo; <span class='g2-src'>11/06 T@49886</span></p>
<p>&ldquo;I want you to only know the adult and children dosing&rdquo; <span class='g2-src'>11/06 T@50601</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-3">
<h3>Dr. Patel, slide by slide &middot; Atopic dermatitis therapeutics &middot; slides 45&ndash;48</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 45&ndash;48)</span><b>Know the later-line injectable and oral options and read the step-care algorithm by severity</b><i>Patel Dermatitis slide 45, 46, 47, 48</i></div>
<div class="gpt g2-block"><h5>Tralokinumab, the alternative to dupilumab (Patel Dermatitis slide 45)</h5>
<p class="g2-status"><b>Status B</b> why several injections, how it is positioned</p>
<p>The slide lists an IL-13 inhibitor for moderate-to-severe atopic dermatitis in adults not controlled with, or unable to use, topical therapy; the slide also gives an age of over 12 years, calls it an alternative to dupilumab, and lists ocular events, upper respiratory tract infections and injection site reactions. Dosing is 600 mg as four 150 mg injections first, then 300 mg as two 150 mg injections every other week; in patients under 100 kg who have clear skin after 16 weeks, the interval can lengthen to every 4 weeks.</p>
<p>The lecture explains why the count of injections is high: the product comes only in a 150 mg form, so each dose is built from several injections. She named upper respiratory tract infections and injection site reactions as the main side effects to know; the ocular events are on the slide only. She called the initial four injections very uncomfortable and described the drug as not an ideal option, kept for when it is needed. She also said specialty drugs for skin disease change every year, and what she teaches is what the guidelines support.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;only comes in that 150 mg dosage form&rdquo; <span class='g2-src'>11/06 T@53095</span></p>
<p>&ldquo;what has been shown to be effective is what I'm teaching you&rdquo; <span class='g2-src'>11/06 T@52430</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>JAK inhibitors: last-line and heavily monitored (Patel Dermatitis slide 46)</h5>
<p class="g2-status"><b>Status B, C</b> what refractory means, why monitoring is intense, terms defined</p>
<p>The slide gives the mechanism (inhibition of the JAK enzyme lowers the downstream inflammatory response), the indication (moderate-to-severe atopic dermatitis at 12 years or older), three drugs with dosing, and a boxed warning table. Abrocitinib (Cibinqo) is 100 mg by mouth once daily, may increase to 200 mg once daily after 12 weeks; upadacitinib (Rinvoq) is 15 mg by mouth once daily, may increase to 30 mg; ruxolitinib (Opzelura) is the topical, 60 g per week or 100 g per two weeks.</p>
<p>The lecture defines refractory: disease not controlled with topicals or with the other systemic agents. Because the boxed warnings are serious (infections including TB, mortality, malignancy, MACE meaning CV death, MI and stroke, and DVT, PE and arterial thrombosis), the drug is the last line, kept as a specialty medication watched by specialty clinical pharmacists, with follow-up every 2 weeks <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. She called Rinvoq the most commonly prescribed <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;absolute last-line refractory option if we have nothing else to rely on&rdquo; <span class='g2-src'>11/06 T@55081</span></p>
<p>&ldquo;specialty clinical pharmacists monitor the medication&rdquo; <span class='g2-src'>11/06 T@55245</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Step-care algorithm: non-lesional and mild (Patel Dermatitis slide 47)</h5>
<p class="g2-status"><b>Status B, C, E</b> how the algorithm is used, what each column means, her stated focus</p>
<p>The slide shows the algorithm for the non-lesional and mild columns. Everyone receives basic management: liberal, frequent moisturizer (petrolatum-based in the non-lesional column; choice per patient preference in both), warm baths or showers with a non-soap cleanser once daily followed by moisturizer, trigger avoidance and attention to comorbidities. The mild column adds antiseptic measures (antibiotics if needed). For a flare, apply a low-to-medium potency topical steroid twice daily for 3 to 7 days beyond clearance, considering a calcineurin inhibitor or crisaborole.</p>
<p>The lecture adds how to choose: severity comes from the SCORAD score, a non-lesional patient shows no plaques, rash or signs of eczema, and the steroid always starts low and moves up as it is tolerated. The ceiling is 14 days <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, stated as a student answer to her question. On 11/12 she told the class to focus on treatment algorithms and to understand that patient specifics matter.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;you can always increase up once they are tolerating it&rdquo; <span class='g2-src'>11/06 T@56563</span></p>
<p>&ldquo;Focus on treatment algorithms, understand patient specifics matter&rdquo; <span class='g2-src'>11/12 T@95722</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Step-care algorithm: moderate and severe (Patel Dermatitis slide 48)</h5>
<p class="g2-status"><b>Status B, C</b> the order of lines, face versus body, when to refer</p>
<p>The slide gives moderate: basic management plus a topical anti-inflammatory on previous or potential symptom areas. Maintenance steroid is low potency 1 to 2 times daily including the face, or medium potency 1 to 2 times weekly except the face; or a maintenance calcineurin inhibitor (pimecrolimus, tacrolimus) 1 to 2 times daily or 2 to 3 times weekly; or crisaborole 2% twice daily. Acute: medium-to-high potency steroid twice daily for 3 to 7 days beyond clearance; if not resolved in 7 days, consider nonadherence, infection, misdiagnosis, contact allergy to medications, or referral. Severe: basic management plus referral to an AD specialist (phototherapy, dupilumab, systemic immunosuppressants).</p>
<p>The lecture orders the topical choices: steroid first line, calcineurin inhibitor second, crisaborole third. The low-potency steroid that may be used on the face is hydrocortisone 1%, so a patient can hold two different steroids, one for the face and one for the body. The acute step moves up in potency, and a patient not resolved at 7 days is referred.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;basic management and topical 1st line, 2nd line, 3rd line&rdquo; <span class='g2-src'>11/06 T@57555</span></p>
<p>&ldquo;Severe patient, usually referral to an AD specialist&rdquo; <span class='g2-src'>11/06 T@57618</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-4">
<h3>Dr. Patel, slide by slide &middot; Atopic dermatitis therapeutics &middot; slides 49&ndash;54</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 49&ndash;54)</span><b>Apply the algorithm to a patient, then counsel on the pharmacist role, daily care, how to apply medication, when to seek help and access to treatment</b><i>Patel Dermatitis slide 49, 50, 51, 52, 53, 54</i></div>
<div class="gpt g2-block"><h5>Case: adult atopic dermatitis, first-line maintenance (Patel Dermatitis slide 49)</h5>
<p class="g2-status"><b>Status B, C</b> worked answer applying the algorithm</p>
<p>The slide is the adult case: a 21-year-old man with itching on the knees and elbows for 2 to 3 months, atopic dermatitis since age 10 with corticosteroids helping in the past, loratadine 10 mg daily, dry and inflamed skin with no infection and no lichenified plaques, and a SCORAD total of 40. In lecture she brought the patient back with the severity and status already decided, moderate subacute (the reasoning is on slide 26). She asked for the first-line maintenance therapy, and the key word was first-line: basic management applies to all patients and a topical corticosteroid is the first-line topical.</p>
<p>For the prescription details she asked for the potency. The patient is not currently using a steroid, so the plan starts again at low potency, hydrocortisone 1%, twice a day for 3 to 7 days. A student asked about the past steroid use; her answer was that history of benefit does not skip the low-potency start.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it would be important that we start at a low potency corticosteroid&rdquo; <span class='g2-src'>11/06 T@59853</span></p>
<p>&ldquo;basic management we know is applied to all patients&rdquo; <span class='g2-src'>11/06 T@59188</span></p>
<p>&ldquo;we're starting again from low potency&rdquo; <span class='g2-src'>11/06 T@60841</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Pharmacist role in atopic dermatitis (Patel Dermatitis slide 50)</h5>
<p class="g2-status"><b>Status B</b> what each role means in practice</p>
<p>The slide lists five roles: improve adherence through education, optimize and monitor therapy, recommend appropriate moisturizers and OTC products, give patient-friendly education on therapy plans, and provide accessible support. The lecture turns each into a task. Adherence means the patient knows how to use each medication, how often and why it matters. Monitoring means checking how the patient applies the medication and how the skin responds, so use is safe and effective. Accessible support means giving the patient contact information so the patient understands what to do.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;always provide some sort of contact information&rdquo; <span class='g2-src'>11/06 T@62040</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Non-drug counseling for atopic dermatitis (Patel Dermatitis slide 51)</h5>
<p class="g2-status"><b>Status B, C</b> wet wrap rule, protection from scratching</p>
<p>The slide gives six points: avoid triggers (tight clothing; moderate temperature and low humidity), short showers or baths in tepid water with a non-soap cleanser, sponge baths in place of full baths, pat dry, cool tap water compresses for 5 to 20 minutes 4 to 6 times daily on weeping lesions, and short, smooth, clean fingernails with cotton gloves or socks at night.</p>
<p>The lecture adds the rule that the cool, wet wrap is not used together with the topical calcineurin inhibitors, and that it is for open, oozing or bleeding lesions. She also said sponge baths can be used but how often matters. For young children the cotton covering over the lesions keeps them out of sight, and gloves may be needed so the child does not scratch.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not applying it with our TCIs&rdquo; <span class='g2-src'>11/06 T@63011</span></p>
<p>&ldquo;out of sight, out of mind&rdquo; <span class='g2-src'>11/06 T@63226</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Counseling for topical medication (Patel Dermatitis slide 52)</h5>
<p class="g2-status"><b>Status B, D, E</b> sequence of application, the 7-day number</p>
<p>The slide gives: wash hands before and after; emollient within 3 minutes after bathing while the skin is damp; a thin layer of medication on the affected areas; topical steroid 1 to 2 times daily, not longer than 7 days; improvement in 24 to 48 hours; lesions could get worse, especially in winter and summer.</p>
<p>The lecture adds that the patient can wait a few minutes between the emollient and the medication, that the 24 to 48 hour improvement is quick compared with the calcineurin inhibitors (1 to 8 weeks), and that worsening with weather means the patient should keep up the skin care and not expect a quick solution.</p>
<div class="g2-note"><span class="g2-k">Conflict: 7 days or 2 weeks</span><p>Slide 52 says not longer than 7 days. Slide 36 and her lecture also say not longer than 2 weeks. She gave 7 days as the point to seek help and 2 weeks as the limit never exceeded. An exam written from her lecture would key 7 days for when to see a provider and 2 weeks as the maximum use.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that 7-day is the important number to remember&rdquo; <span class='g2-src'>11/06 T@64101</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Medication access and cost (Patel Dermatitis slide 53)</h5>
<p class="g2-status"><b>Status C</b> what the pharmacist does about cost and denial</p>
<p>The slide lists high out-of-pocket costs, prior authorization and step therapy as barriers, appeals and peer-to-peer conversations after a denial, and manufacturer assistance programs. The lecture adds that some insurers treat dermatology conditions as specialty or not chronic, which raises patient cost. Before prescribing, the pharmacist can run the numbers and discuss cost with the patient. If a prior authorization is denied, she sends an appeal and does not accept the denial. Because pharmacists are not signed providers in Texas at this point, the primary care provider writes the statement of need. These steps apply to the calcineurin inhibitors, dupilumab and the other specialty drugs, not to topical steroids.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not accepting a denial&rdquo; <span class='g2-src'>11/06 T@66065</span></p>
<p>&ldquo;We're sending an appeal&rdquo; <span class='g2-src'>11/06 T@66099</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Same case: counseling answers (Patel Dermatitis slide 54)</h5>
<p class="g2-status"><b>Status C, E</b> what the answers had to include</p>
<p>The slide repeats the adult case. The lecture asks what to tell this patient to use the medication appropriately. The answers she accepted: apply a thin layer to the affected areas, rub it in until it disappears, let it air dry, wash hands before and after, and seek help at 7 days. She then widened the question: the steps from beginning to end, how long to watch the symptoms before returning to the provider, how long the medication is not to be used, plus the daily non-drug care.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;What are the steps from beginning to end&rdquo; <span class='g2-src'>11/06 T@67781</span></p>
<p>&ldquo;don't forget about those counseling points as well&rdquo; <span class='g2-src'>11/06 T@68226</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-5">
<h3>Dr. Patel, slide by slide &middot; Diaper dermatitis and incontinence-associated dermatitis &middot; slides 55&ndash;59</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 55&ndash;59)</span><b>Know what causes diaper dermatitis and how prevention differs for infants and for adults who wear diapers</b><i>Patel Dermatitis slide 55, 56, 57, 58, 59</i></div>
<div class="gpt g2-block"><h5>Diaper dermatitis, section title (Patel Dermatitis slide 55)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Causes of diaper dermatitis (Patel Dermatitis slide 56)</h5>
<p class="g2-status"><b>Status B</b> what each cause does to the skin</p>
<p>The slide names six causes: occlusion from the diaper, moisture, microbes, GI tract proteolytic enzymes and bile salts, mechanical chafing and friction, and alkaline skin pH. The lecture explains how they combine. The diaper closes the area off and increases moisture on the skin, and an active infection can be present. Enzymes and bile salts from the GI tract are a further cause, and so is friction of the diaper on the skin. When the skin pH becomes more alkaline, the skin reacts with dermatitis, which is why pH comes up again with breastfeeding on the next slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the skin pH is more alkaline, then that can also cause a dermatitis reaction&rdquo; <span class='g2-src'>11/06 T@69557</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Preventing diaper rash in infants (Patel Dermatitis slide 57)</h5>
<p class="g2-status"><b>Status B, D, E</b> practical detail, who counts as an infant, what she will not test</p>
<p>The slide gives changing frequency (newborns every 2 hours, infants every 3 to 4 hours), disposable diapers with fewer rashes, cleaning at every change with no difference between cloth, water, mild soap or alcohol-free wet wipe, drying before barrier cream, barrier cream, and breastfeeding with fewer rashes from pH maintenance. The lecture adds that disposable diapers are the best choice because cloth diapers carry more infection risk, and that the area is dried before the cream and the new diaper.</p>
<p>A pull-up, training diaper or swim diaper counts as a diaper, and she put the diaper-wearing age at under about 2 years. She called a newborn up to about 3 months and an infant 6 months and older <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, then said she will not test those labels. Breast milk lowers rash episodes, which she linked to skin pH.</p>
<div class="g2-note"><span class="g2-k">Conflict: how often to change the diaper</span><p>Slide 57: newborns every 2 hours and infants every 3 to 4 hours. Slide 62 (the ABCDE table) says every 2 hours, and in the 5-month-old case the answer she accepted was ABCDE, every 2 hours. An exam written from her lecture would key every 2 hours for ABCDE, since she said the newborn and infant labels are not tested.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I'm not gonna test you on this. So don't worry&rdquo; <span class='g2-src'>11/06 T@71062</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Signs, symptoms and severity of diaper dermatitis (Patel Dermatitis slide 58)</h5>
<p class="g2-status"><b>Status B</b> how the severity pictures are read, what it is not</p>
<p>The slide lists erythema in patches (buttocks, upper thighs, abdomen, genital region), red to bright red, shiny, wet-looking patches, and five severity pictures A (slight) to E (severe). The lecture says how the pictures differ by how far the redness goes past the skin crease: slight stays at the crease, mild spreads a little past it, moderate covers more, moderate to severe reaches a wider area on the cheeks, and severe covers both cheeks. Worse cases can include dryness, bleeding and oozing.</p>
<p>She separated it from atopic dermatitis: this is a rash without lichenification, so the signs from the atopic dermatitis lecture are not expected.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;you're not gonna see symptoms of atopic dermatitis here&rdquo; <span class='g2-src'>11/06 T@72706</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Incontinence-associated dermatitis in adults (Patel Dermatitis slide 59)</h5>
<p class="g2-status"><b>Status B, C</b> why each prevention item applies to adults</p>
<p>The slide lists cleansing routine (bath oil or pH neutral foam, patting with a soft cloth), skin hydration, barrier cream, pressure sore prevention, and good nutrition (protein, vitamin status). The lecture says adults are also prone to diaper dermatitis, based on infrequent diaper changes, so the cleansing routine, hydration and barrier cream apply here too.</p>
<p>Adults who wear diapers are most likely bedridden, so constant pressure on the area can cause a sore, and the pressure sore is prevented as part of care. She linked good nutrition to the gut and the enzymes the GI tract makes. She did not discuss the protein or vitamin items on the slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;adults that wear diapers, they're most likely bedridden&rdquo; <span class='g2-src'>11/06 T@73254</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-6">
<h3>Dr. Patel, slide by slide &middot; Diaper dermatitis and incontinence-associated dermatitis &middot; slides 60&ndash;64</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 60&ndash;64)</span><b>Know how to classify incontinence-associated dermatitis, apply ABCDE, and choose a zinc oxide skin protectant</b><i>Patel Dermatitis slide 60, 61, 62, 63, 64</i></div>
<div class="gpt g2-block"><h5>Categories of incontinence-associated dermatitis (Patel Dermatitis slide 60)</h5>
<p class="g2-status"><b>Status B, C</b> how infection changes the appearance</p>
<p>The slide is a categorization chart: category 1 is persistent redness (1A without clinical signs of infection, 1B with them) and category 2 is skin loss (2A without, 2B with). The lecture explains the infection signs. In category 1 the redness is persistent, and infection may be present if there is oozing or bleeding; the skin looks paler than normal. White scales can be a clinical sign of infection. Category 2 means skin loss, which can bleed; with infection the skin is paler and less bright red, and there can be peeling and bleeding.</p>
<p>In practice, an infected-looking area (oozing, bleeding, paler skin, white scales) moves the patient away from self-care, which links to the exclusions list on slide 68.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Category 2, 2A and 2B is skin loss&rdquo; <span class='g2-src'>11/06 T@74052</span></p>
<p>&ldquo;the white scales, that could also be a clinical sign of an infection&rdquo; <span class='g2-src'>11/06 T@73982</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Therapy goals (Patel Dermatitis slide 61)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>ABCDE for diaper dermatitis (Patel Dermatitis slide 62)</h5>
<p class="g2-status"><b>Status B, C, E</b> what each letter means in care</p>
<p>The slide table gives A = Air (allow diaper-free time), B = Barrier (apply a barrier skin protectant liberally with each diaper change), C = Cleansing (gently cleanse with soft cloth and warm water, or a baby wipe when stool is present), D = Diaper (change every 2 hours and as soon as soiled; absorbent disposable diapers), E = Education (parents and caregivers, verifying understanding to ensure adherence).</p>
<p>The lecture adds that air time comes after the soiled diaper is removed and the area is cleaned, that adults may need to bathe the area more because it is larger, and that modern diapers have a wetness indicator line a caregiver can watch. Education includes the caregivers and nurses, with the non-drug care and the reason it matters. In the 5-month-old case the father was asked what to change now, and she accepted ABCDE with a change every 2 hours.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I want you guys to remember A B C D E&rdquo; <span class='g2-src'>11/06 T@74781</span></p>
<p>&ldquo;allow time for the skin to dry&rdquo; <span class='g2-src'>11/06 T@74971</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>OTC treatment with skin protectants (Patel Dermatitis slide 63)</h5>
<p class="g2-status"><b>Status B, E</b> what a protectant is for, which ones she will teach</p>
<p>The slide says to follow ABCDE and apply skin protectants, which give a physical barrier and lubrication. The FDA approved 17 ingredients for infant diaper dermatitis; apply liberally in the diaper or perineal area at every diaper change or incontinence care, remove the old product gently, completely cover the red areas with the new product, and keep using it after the rash heals to prevent a recurrence.</p>
<p>The lecture adds that the old product is removed by wiping with a diaper wipe or by washing the area, and that use continues after healing to prevent future dermatitis. She said she would teach the top ingredients from the list of 17 and not the whole list.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the top ones that I want you guys to know&rdquo; <span class='g2-src'>11/06 T@76758</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Zinc oxide and petrolatum products (Patel Dermatitis slide 64)</h5>
<p class="g2-status"><b>Status B, E</b> which ingredient is the active one</p>
<p>The slide gives zinc oxide 1 to 40% as a common and excellent protectant that is usually thick and tacky, petrolatum 30 to 100% as the ointment base, and combination products (Desitin; A &amp; D Ointment; Boudreaux&rsquo;s Butt Paste; Dr. Smith&rsquo;s ointment; Burt&rsquo;s Bees Baby Diaper Rash Ointment). The lecture ranks zinc oxide as the most commonly used ingredient in diaper creams and the most recommended and effective, thick and sticky to the touch.</p>
<p>The pairing is the point: zinc oxide is the active ingredient and petrolatum is the base, so the most effective products combine the two. A petrolatum product by itself (she used Aquaphor in the case) moisturizes but does not treat the rash.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;zinc oxide, active ingredient, petrolatin is the base for the most effective diaper cream&rdquo; <span class='g2-src'>11/06 T@77837</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-7">
<h3>Dr. Patel, slide by slide &middot; Diaper dermatitis and incontinence-associated dermatitis &middot; slides 65&ndash;68</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 65&ndash;68)</span><b>Know which products are not used for diaper dermatitis, the 7-day follow-up, the complications and the referral list</b><i>Patel Dermatitis slide 65, 66, 67, 68</i></div>
<div class="gpt g2-block"><h5>Cautions: products not used for diaper dermatitis (Patel Dermatitis slide 65)</h5>
<p class="g2-status"><b>Status B, E</b> why the list differs from atopic dermatitis</p>
<p>The slide says the diaper area is a significant portion of the baby&rsquo;s total body surface area and many topical products can lead to systemic side effects. Four products are not used as self-care: topical antifungals (such as miconazole), topical antibacterials, topical anesthetics (such as benzocaine and lidocaine), and hydrocortisone or another topical corticosteroid. The lecture adds that when the diaper area is a significant share of the baby&rsquo;s body surface, the patient may have to be treated past an OTC product.</p>
<p>She named this as the biggest difference from atopic dermatitis. The steroids and other medications taught earlier are not used here, and the treatment is the barrier protectant. In the case, hydrocortisone was the wrong choice.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not using antifungals, antibacterials, anesthetics, hydrocortisone, or topical corticosteroids&rdquo; <span class='g2-src'>11/06 T@78359</span></p>
<p>&ldquo;So that is the biggest difference here between atopic dermatitis&rdquo; <span class='g2-src'>11/06 T@78488</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Follow-up at 7 days (Patel Dermatitis slide 66)</h5>
<p class="g2-status"><b>Status B</b> same number applies to improved and not improved</p>
<p>The slide splits two outcomes at 7 days. If the rash is improved but not healed, continue treatment until healed. If it is not healed, not improved or worse after 7 days, refer to a physician. In the case the father was asked when to follow up and the answer was 7 days. She stressed that the number is the same whether or not the rash improves; what changes is the action, continue or refer.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;But regardless, 7 days&rdquo; <span class='g2-src'>11/06 T@82415</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>Complications of diaper dermatitis (Patel Dermatitis slide 67)</h5>
<p class="g2-status"><b>Status B</b> which organisms and why a rash worsens</p>
<p>The slide names fungal and bacterial infections as the most common complication, shows Candida albicans and Staphylococcus aureus, and says cutaneous infections are secondary to an untreated or improperly treated rash. The lecture adds that staph is the bacterial form most often on skin, and that a patient who already has an infection when the rash starts will have a worse rash because of it.</p>
</div>
<div class="gpt g2-block"><h5>Exclusions for self-treatment (Patel Dermatitis slide 68)</h5>
<p class="g2-status"><b>Status B, E</b> the full list means referral, not OTC advice</p>
<p>The slide lists the exclusions: lesions present longer than 7 days; no improvement in 7 days despite appropriate care; therapy complicated by secondary infection (viral, bacterial, fungal); lesions part of or caused by another disease state; diaper dermatitis outside the diaper region; possible association with a urinary tract infection (painful urination) or disfigurement of the penis or vulva; broken skin (ulceration, blistering, peeling); onion-skin-like appearance or bulla formation; oozing, blood, vesicles or pus; chronic or frequently recurrent lesions; constitutional symptoms (fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, rash elsewhere on the body); significant behavior changes (lethargy, incessant crying); and comorbid conditions (HIV infection, organ transplantation, immunosuppressive therapy, a history of hepatitis with skin manifestations).</p>
<p>She said that when any of these apply, nothing is recommended: the patient goes to the provider or urgent care, especially with oozing, bleeding or signs of infection. A dull rather than bright red rash is one of the infection signs she gave.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;please know this list&rdquo; <span class='g2-src'>11/06 T@80919</span></p>
<p>&ldquo;complete referral to the provider&rdquo; <span class='g2-src'>11/06 T@80877</span></p>
</div>
</div>
</section>

<section class="gobj" id="gobj-pl-d2-8">
<h3>Dr. Patel, slide by slide &middot; Diaper dermatitis and incontinence-associated dermatitis &middot; slides 69&ndash;71</h3>
<div class="gbar"><span>What the lecture adds (Patel Dermatitis 69&ndash;71)</span><b>Apply the diaper dermatitis answers to the 5-month-old case</b><i>Patel Dermatitis slide 69, 70, 71</i></div>
<div class="gpt g2-block"><h5>Case: diaper dermatitis in a 5-month-old (Patel Dermatitis slide 69)</h5>
<p class="g2-status"><b>Status C, E</b> first-line product, follow-up time and non-drug care</p>
<p>The slide is the case: a father of a 5-month-old reports a fussy baby with an extremely red, irritated diaper area, red wet lesions worsening over the past week, nothing used besides body cream, no past history, no medications, and Baby Aveeno lotion for irritated skin. The lecture gives three answers. First-line treatment is a skin protectant containing zinc oxide. Hydrocortisone is not used, and Aquaphor is only a petrolatum moisturizer, so it moisturizes without treating the skin. Follow-up is at 7 days. Non-drug care is ABCDE with a diaper change every 2 hours, and the lecture had the class give what each letter stands for.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Skin protectant containing zinc oxide&rdquo; <span class='g2-src'>11/06 T@81911</span></p>
<p>&ldquo;Aquaphor is just a petrolatum moisturizer&rdquo; <span class='g2-src'>11/06 T@82004</span></p>
</div>
</div>
<div class="gpt g2-block"><h5>References (Patel Dermatitis slide 70)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Dermatitis slide 71)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p6">Acne Therapeutics (Dr. Patel, 11/10; Exam 2)</h2>
<p class="sub">AT = Patel_Acne-Therapeutics-Student.pdf, slide = PDF page; T@ = place in the 11/10 lecture transcript; PollEv = her in-class polls of 11/10. Her nine objectives (AT 2), one section each.</p>
<div class="gask"><b>How she asks (11/10)</b><ul><li>&ldquo;All questions are fair game in terms of multiple choice, select all possible, fill in the blank ... calculations ... matching&rdquo;; &ldquo;I do create questions based on the objectives that I start off with&rdquo; (T@2398).</li><li>Severity words: one, some, many. &ldquo;Those are the terms that I will also use on my cases on the exam ... I&rsquo;m not gonna tell you like 10&rdquo; (T@13918).</li><li>Cases: &ldquo;what is first line for that severity? ... know exactly what has the patient tried and what is left to try&rdquo; (T@60314). Pregnancy tests: &ldquo;I said it twice because hint, it&rsquo;s a question&rdquo; (T@49632).</li></ul></div>

<section class="gobj" id="gobj-p6-1">
<h3>Acne Therapeutics · Objective 1: classify the stage and severity of acne</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Classify stages of acne</b><i>AT 5&ndash;8</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Stages: the lesions <span class="g2-src">(AT 5&ndash;6; T@6156&ndash;7508)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Lesion</th><th scope="col">Group</th><th scope="col">Description</th></tr></thead>
<tbody>
<tr><th scope="row">Open comedone</th><td>Non-inflammatory</td><td>Blackhead</td></tr>
<tr><th scope="row">Closed comedone</th><td>Non-inflammatory</td><td>Whitehead</td></tr>
<tr><th scope="row">Papule</th><td>Inflammatory</td><td>Raised, red, no pus</td></tr>
<tr><th scope="row">Pustule</th><td>Inflammatory</td><td>Visible white pus</td></tr>
<tr><th scope="row">Nodule or cyst</th><td>Inflammatory</td><td>Large, under the skin; worst stage</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Severity: the grades <span class="g2-src">(AT 7&ndash;8)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Grade</th><th scope="col">Non-inflammatory</th><th scope="col">Inflammatory</th><th scope="col">Nodules; scarring</th></tr></thead>
<tbody>
<tr><th scope="row">Mildly clear</th><td><span class="g2-lab">Non-inflammatory</span>Rare; no more than 1 small lesion</td><td></td><td></td></tr>
<tr><th scope="row">Mild</th><td><span class="g2-lab">Non-inflammatory</span>Some</td><td><span class="g2-lab">Inflammatory</span>No more than a few papules and pustules</td><td><span class="g2-lab">Nodules; scarring</span>No nodules; minimal scarring</td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">Non-inflammatory</span>Many</td><td><span class="g2-lab">Inflammatory</span>Some</td><td><span class="g2-lab">Nodules; scarring</span>No more than one nodule; mild scarring possible</td></tr>
<tr><th scope="row">Severe</th><td><span class="g2-lab">Non-inflammatory</span>Many</td><td><span class="g2-lab">Inflammatory</span>Many</td><td><span class="g2-lab">Nodules; scarring</span>No more than a few nodules; moderate to extensive scarring</td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Case 1 (16-year-old, some open and closed comedones, no inflammation) <span class="g2-tap">Show answer</span></summary><p>Mild acne <span class="g2-src">(T@12560&ndash;14612)</span></p></details>
<details class="g2-self"><summary>Case 2 (cysts on cheek, back and shoulders) <span class="g2-tap">Show answer</span></summary><p>Severe; &ldquo;is it no more than one cystic lesion or is it more than one?&rdquo; <span class="g2-src">(T@68494&ndash;69094)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-2">
<h3>Acne Therapeutics · Objective 2: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>AT 9&ndash;11, 17&ndash;18</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Exclusions for self-care <span class="g2-src">(AT 18)</span></h5>
<ul>
<li>Severe acne</li>
<li>Possible rosacea</li>
<li>Exacerbating factors</li>
<li>Comedogenic drugs</li>
</ul>
<p class="g2-p">A straight referral to dermatology <span class="g2-src">(T@19247&ndash;19941)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Drugs that cause or worsen acne <span class="g2-src">(AT 10)</span></h5>
<ul>
<li>Corticosteroids, androgens, progesterone contraceptives</li>
<li>TCAs, lithium, antiepileptics, aripiprazole, SSRIs</li>
<li>Vitamins B1, B6, B12</li>
<li>Dactinomycin, cyclosporine, sirolimus</li>
<li>Isoniazid, rifampin, ethionamide</li>
<li>Iodine, bromine, chlorine</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Complications <span class="g2-src">(AT 11)</span></h5>
<p class="g2-p">Anxiety, depression, scarring.</p>
<p class="g2-said"><span class="g2-k">Said in class</span>Scarring the most common, and can be lifelong (slide 11; in class: unless treated with something abrasive, T@11913) <span class="g2-src">(T@11709)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Testing <span class="g2-src">(AT 17)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Routine</th><td>No routine endocrine or microbiologic testing</td></tr>
<tr><th scope="row">Exception</th><td>High suspicion of PCOS or another hormonal disorder</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-3">
<h3>Acne Therapeutics · Objective 3: treatment goals and the overall approach</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recommend appropriate non-pharmacologic and pharmacologic therapy</b><i>AT 3, 13, 47</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals <span class="g2-src">(AT 13)</span></h5>
<ul>
<li>Alleviate symptoms and psychologic suffering</li>
<li>Reduce the number and severity of lesions</li>
<li>Improve appearance</li>
<li>Slow progression</li>
<li>Limit duration and recurrence</li>
<li>Prevent long-term scarring and hyperpigmentation</li>
</ul>
<p class="g2-p">No cure <span class="g2-src">(AT 3; T@11895)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Plan <span class="g2-src">(AT 47; T@71629)</span></h5>
<ul>
<li>The smallest number of agents at the lowest possible dosages</li>
<li>Topical before oral</li>
<li>Taper over time, never stop abruptly</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p6-4">
<h3>Acne Therapeutics · Objective 4: non-drug counseling</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Counsel patients on non-pharmacologic strategies</b><i>AT 19, 24, 43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Cleansing <span class="g2-src">(AT 19; T@20370, T@28136)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How often</th><td>Cleanse twice a day with a mild soap or non-soap cleanser</td></tr>
<tr><th scope="row">Avoid</th><td>No abrasive products, devices or excessive cleansing</td></tr>
<tr><th scope="row">Order</th><td>Remove dirt and makeup with an oil-based cleanser before a water-based one</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Vehicle by skin type <span class="g2-src">(AT 24)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Skin type</th><th scope="col">Vehicle</th></tr></thead>
<tbody>
<tr><th scope="row">Oily to normal</th><td>Gels, solutions, lotions</td></tr>
<tr><th scope="row">Normal to dry</th><td>Lotions and creams</td></tr>
</tbody>
</table>
<p class="g2-p">Ointments and bars are not usually recommended for any skin type. (Normal skin: gels, solutions, lotions and creams.)</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Shaving <span class="g2-src">(AT 43)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Razor</th><td>Electric or safety razor</td></tr>
<tr><th scope="row">Beard</th><td>Soften the beard</td></tr>
<tr><th scope="row">How</th><td>Shave lightly and infrequently with a sharp blade, in the direction of hair growth, each area once</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-5">
<h3>Acne Therapeutics · Objective 5: OTC and prescription-only products</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recognize non-prescription and prescription-only products</b><i>AT 22&ndash;33</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> OTC agents <span class="g2-src">(AT 23)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">OTC agent</th><th scope="col">Bactericidal</th><th scope="col">Keratolytic</th><th scope="col">Comedolytic</th></tr></thead>
<tbody>
<tr><th scope="row">Benzoyl peroxide</th><td><span class="g2-lab">Bactericidal</span>Yes</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Topical retinoid</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Alpha and beta hydroxy acids (comedolytic only for the beta-hydroxy acids)</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Sulfur</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Resorcinol</th><td><span class="g2-lab">Bactericidal</span>Yes (and antifungal)</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>No</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> First-line agent</h5>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Benzoyl peroxide targets all three ... So that means that benzoyl peroxide will be our first-line agent&rdquo; <span class="g2-src">(T@24800)</span></p>
<p class="g2-p">See Reference, &ldquo;Dr. Patel: acne agents&rdquo;.</p>
</div>
</section>

<section class="gobj" id="gobj-p6-6">
<h3>Acne Therapeutics · Objective 6: guidelines, algorithm and first-line agents</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Apply guidelines and algorithms; recognize first-line agents</b><i>AT 20, 25, 40</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Step by step <span class="g2-src">(T@54687, T@57819, T@59132)</span></h5>
<div class="g2-ladder">
<div class="g2-rung"><div class="g2-sev">First</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Mild acne, in this order (moderate: a topical combination; severe: oral antibiotic + topical combination first)</span><ul>
<li>One agent</li>
<li>Then the other</li>
<li>Then combinations of two</li>
<li>Then three</li>
</ul></div>
</div></div>
<div class="g2-rung g2-s2"><div class="g2-sev">Moderate: after the topical combinations have been tried (severe: oral antibiotic is part of the first line)</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Next</span><p>An oral antibiotic</p></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Absolute last line (she said so for moderate; slide 40 also prints it in the severe first-line box)</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Last</span><p>Isotretinoin</p></div>
</div></div>
</div>
<div class="g2-note"><span class="g2-k">Order</span><p>Topical before oral.</p></div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p6-alg">Reference: acne algorithm by severity</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Topical antibiotics <span class="g2-src">(AT 25, 31; T@28783, T@36940)</span></h5>
<p class="g2-p">Topical antibiotics are not used alone: always with BP, to reduce resistance.</p>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Case 1 first line <span class="g2-tap">Show answer</span></summary><p>Benzoyl peroxide BID to affected areas; &ldquo;keyword in this question? First line&rdquo; <span class="g2-src">(T@66568)</span></p></details>
<details class="g2-self"><summary>Case 2 next line after 8 months of doxycycline + retinoid + BP, irregular periods <span class="g2-tap">Show answer</span></summary><p>Combined oral contraceptive over spironolactone <span class="g2-src">(T@69094&ndash;69647)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-7">
<h3>Acne Therapeutics · Objective 7: topical product by symptoms</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recommend appropriate topical products based on patient symptoms</b><i>AT 23&ndash;31</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Benzoyl peroxide <span class="g2-src">(AT 23, 26)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Strength</th><td><b>2.5&ndash;10%</b> OTC</td></tr>
<tr><th scope="row">How often</th><td><b>1&ndash;2 times daily</b></td></tr>
<tr><th scope="row">Irritation</th><td>Irritation settles in <b>1&ndash;2 weeks</b></td></tr>
<tr><th scope="row">Adverse effects</th><td>Drying, photosensitivity, bleaches hair and clothing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Adapalene (Differin) 0.1% OTC <span class="g2-src">(AT 27; T@30492&ndash;31851)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">When</th><td>Apply at night after washing; separate from BP (am vs pm; she put BP as the morning wash)</td></tr>
<tr><th scope="row">Not with</th><td>Slide: do not use with sulfur, resorcinol, salicylic acid or vitamin C; in class, asked by a student: &ldquo;You may, but separate it&rdquo; (T@32038)</td></tr>
<tr><th scope="row">Also use</th><td>Moisturizer and sunscreen</td></tr>
<tr><th scope="row">Age</th><td>Over <b>12 years</b></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Salicylic acid, AHAs, tea tree oil</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Salicylic acid</th><td>Once or twice daily as a cleanser or gel; maximum effectiveness and duration of use <b>4&ndash;6 weeks</b>; limited efficacy data <span class="g2-src">(AT 29)</span></td></tr>
<tr><th scope="row">AHAs</th><td>Trial form; <b>2&ndash;4 weeks</b> between peels; sunscreen <span class="g2-src">(AT 28)</span></td></tr>
<tr><th scope="row">Tea tree oil</th><td>May be irritating if applied directly: add to a moisturizing lotion or gel vehicle <span class="g2-src">(AT 30)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Prescription <span class="g2-src">(AT 31)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Topical antibiotics</th><td>Wait <b>30 minutes</b> to shave or apply cosmetics</td></tr>
<tr><th scope="row">Azelaic acid</th><td>Adjunctive treatment of post-inflammatory dyspigmentation</td></tr>
<tr><th scope="row">Dapsone</th><td>5% gel for inflammatory acne (females on the slide; in class also both genders, low efficacy); G6PD concern; monitor CBC and reticulocyte counts</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-8">
<h3>Acne Therapeutics · Objective 8: counseling on drug and non-drug therapy</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Counseling points for non-drug and drug therapies</b><i>AT 33&ndash;38, 41&ndash;43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Topicals <span class="g2-src">(AT 42)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Before</th><td>Wash, pat dry, wait <b>20&ndash;30 minutes</b></td></tr>
<tr><th scope="row">Apply</th><td>A thin layer in the evening, avoiding eyes, ears, nostrils, mouth</td></tr>
<tr><th scope="row">If irritation</th><td>Temporarily discontinue or decrease frequency</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Orals <span class="g2-src">(AT 42)</span></h5>
<ul>
<li>Swallow whole with a full glass of water</li>
<li>May take after eating</li>
<li>Caution driving at night</li>
<li>Sunscreen</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Tetracyclines and TMP/SMX</h5>
<table class="g2-table g2-kv">
<caption>Tetracyclines <span class="g2-src">(AT 33; T@39928)</span></caption>
<tbody>
<tr><th scope="row">Age</th><td>Over <b>12 years</b> only (tooth discoloration)</td></tr>
<tr><th scope="row">Adverse effect</th><td>Photosensitivity</td></tr>
<tr><th scope="row">Pregnancy</th><td>Avoid in pregnancy</td></tr>
<tr><th scope="row">Re-evaluate</th><td>Oral antibiotics: shortest possible duration (resistance); re-evaluate at <b>3&ndash;4 months</b></td></tr>
</tbody>
</table>
<p class="g2-p">TMP/SMX only with macrolide and tetracycline allergy, not in sulfur allergy.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> COC <span class="g2-src">(AT 34&ndash;36)</span></h5>
<ul>
<li>Female wanting contraception</li>
<li>Over 14 or 2 years past menarche</li>
<li>Non-smoker under 35</li>
<li>Not for a past DVT or a smoker: COCs increase the risk of venous thrombotic events (also MI, breast or cervical cancer, decreased bone mass; slide 36)</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Isotretinoin and iPledge</h5>
<p class="g2-p">See Reference, &ldquo;Dr. Patel: isotretinoin and iPledge&rdquo;.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p6-ipledge">Reference: isotretinoin and iPledge</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Best COC candidate <span class="g2-tap">Show answer</span></summary><p>The 22-year-old who does not want to be pregnant (not DVT, not a 35-year-old smoker, not 12) <span class="g2-src">(T@45257&ndash;46636)</span></p></details>
<details class="g2-self"><summary>NOT an isotretinoin counseling point <span class="g2-tap">Show answer</span></summary><p>Dairy <span class="g2-src">(T@69647&ndash;70327)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-9">
<h3>Acne Therapeutics · Objective 9: side effects, expectations, monitoring</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Side effects, expectations of treatment, education</b><i>AT 37&ndash;38, 41, 44, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Expectations and monitoring</h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Time to see visible benefits</span><span class="g2-tile-num">8 weeks or more</span><span class="g2-src">(AT 41)</span></div>
</div>
<p class="g2-sub">Response and monitoring <span class="g2-src">(AT 44)</span></p>
<div class="g2-two">
<div>
<table class="g2-table">
<thead><tr><th scope="col">Expectation</th><th scope="col">When</th></tr></thead>
<tbody>
<tr><td>Lesion count down <b>10&ndash;25%</b></td><td>Within 4&ndash;8 weeks</td></tr>
<tr><td>Lesion count down <b>&gt;50%</b></td><td>Within 2&ndash;4 months</td></tr>
<tr><td>Comedones resolve</td><td>By 3&ndash;4 months</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Patient</th><td>Patient monitors daily</td></tr>
<tr><th scope="row">Pharmacist</th><td>Pharmacist every <b>4&ndash;8 weeks</b></td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> No response <span class="g2-src">(AT 48)</span></h5>
<ul>
<li>Check adherence and use</li>
<li>Change the vehicle to suit the skin type</li>
<li>Avoid overuse of cleansers</li>
</ul>
</div>
</section>

<details class="gdetails" id="gpl-p6">
<summary>Dr. Patel: Acne slide by slide, what the lecture adds (51 slides)</summary>
<section class="gobj" id="gobj-pl-a-1">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 1&ndash;4</h3>
<div class="gbar"><span>What the lecture adds (Acne 1&ndash;4)</span><b>The lecture explains the acne cycle that each treatment is built to interrupt, and says her questions follow the objectives</b><i>Patel Acne slide 1, 2, 3, 4</i></div>
<div class="gpt g2-block"><h5>Title slide (Patel Acne slide 1)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Learning objectives: what her questions are written from (Patel Acne slide 2)</h5>
<p class="g2-status"><b>Status E</b> Exam cue, with guideline context</p><p>The nine objectives are the list her questions follow: classify acne stages, decide self-care candidacy, recommend non-drug and drug therapy, counsel on both, tell OTC from prescription products, apply guidelines and algorithms, choose topical products from symptoms, give counseling points, and cover side effects and expectations. She said her questions are built from the objectives at the start of each lecture. She added that every one of her lectures cites guidelines (here the AAD guideline), so the treatment algorithm (slides 20 and 40, which cite the AAD guideline) is a guideline-based answer. "Expectations" means how soon a patient can expect results and whether side effects are likely.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So I do create questions based on the objectives that I start off with.&rdquo; <span class='g2-src'>11/10 T@2765</span></p>
<p>&ldquo;based on AAD recommendations&rdquo; <span class='g2-src'>11/10 T@4148</span></p>
<p>&ldquo;how soon can a patient expect results?&rdquo; <span class='g2-src'>11/10 T@4293</span></p></div>
</div>
<div class="gpt g2-block"><h5>Acne in general: chronic, multifactorial, not curable (Patel Acne slide 3)</h5>
<p class="g2-status"><b>Status B, D</b> Reasoning added; spoken percentages conflict with the slide wording</p><p>Acne is a chronic, multifactorial disease with no cure and no contagion. Multifactorial means several causes act together: she named hormones, diet, environment, genetics and race. She said puberty is when it usually begins and that females see it somewhat more often than males.</p><div class="g2-note"><span class="g2-k">Percentages: slide versus spoken version</span><p>Slide 3 prints "12% age 25-58 vs 3% in males" for girls versus boys. The captions of her spoken version read "boys about 12% between that 25 to 28 years old, but that 3% in males", which does not match the slide. An exam written from the slide would key the slide: acne in females is more frequent than in males; the spoken ages and percentages are not reliable. Puberty onset of 12 to 14 years was said in lecture <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there is no cure, and it is not contagious&rdquo; <span class='g2-src'>11/10 T@5402</span></p>
<p>&ldquo;our females are gonna see acne a little bit more often than males&rdquo; <span class='g2-src'>11/10 T@5024</span></p>
<p>&ldquo;it is a multifactorial disease&rdquo; <span class='g2-src'>11/10 T@5161</span></p></div>
</div>
<div class="gpt g2-block"><h5>Pathophysiology: the cycle the treatments are built on (Patel Acne slide 4)</h5>
<p class="g2-status"><b>Status B</b> Fact on slide, reasoning missing (lecture explains the cycle)</p><p>The cycle on the slide runs: more sebum, then P. acnes colonizing the follicle, then release of inflammatory mediators, then more follicular keratinization, and back to more sebum. She described sebum as the skin oil made by the sebaceous gland, with the epidermis at the top and the subcutis the last layer. Androgen secretion is the hormone element that restarts the cycle. This matters because each treatment later in the lecture is matched to one step of this cycle (slides 17, 21).</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that's what really starts that cycle over again&rdquo; <span class='g2-src'>11/10 T@6230</span></p>
<p>&ldquo;That increases the follicular keratinization of the skin.&rdquo; <span class='g2-src'>11/10 T@5960</span></p>
<p>&ldquo;there is a defect in the most top layer of the skin&rdquo; <span class='g2-src'>11/10 T@6045</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-2">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 5&ndash;8</h3>
<div class="gbar"><span>What the lecture adds (Acne 5&ndash;8)</span><b>Her lesion and severity words (some, many, no more than one) are the terms her case questions use, so these slides teach how to classify a patient</b><i>Patel Acne slide 5, 6, 7, 8</i></div>
<div class="gpt g2-block"><h5>Lesion stages: non-inflammatory and inflammatory (Patel Acne slide 5)</h5>
<p class="g2-status"><b>Status B, C</b> Fact on slide; lecture defines each lesion and adds a cue</p><p>Non-inflammatory lesions are the normal follicle, the blackhead (open comedo) and the whitehead (closed comedo). Inflammatory lesions are the papule, pustule, and nodule or cyst. The lecture gives the working description of each: an open comedo is a completely clogged pore; a whitehead is closed under the skin; a papule is raised and red with inflammation; a pustule is raised with pus; a nodule or cyst is the worst stage, larger and deeper. Telling the two groups apart is how a case is classified on slides 7 and 8.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So understand the difference between when it's non-inflammatory as well as inflammatory.&rdquo; <span class='g2-src'>11/10 T@8021</span></p>
<p>&ldquo;you should know exactly what stage of acne it is&rdquo; <span class='g2-src'>11/10 T@8162</span></p>
<p>&ldquo;The worst stage of acne is called a nodule or a cyst.&rdquo; <span class='g2-src'>11/10 T@7498</span></p></div>
</div>
<div class="gpt g2-block"><h5>Lesion stages: the same labels with photographs (Patel Acne slide 6)</h5>
<p class="g2-status"><b>Status B</b> Same stages as slide 5, shown on skin</p><p>Slide 6 repeats the labels of slide 5 with photographs of each lesion. Her point on this slide was that the inflammation is very limited in the non-inflammatory group and increases from the papule through the pustule, nodule and cyst. A case stem describes lesions in words, so the photographs are the picture of what the description means.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Notice the inflammation's very limited&rdquo; <span class='g2-src'>11/10 T@7878</span></p>
<p>&ldquo;the inflammation increases down below here&rdquo; <span class='g2-src'>11/10 T@7922</span></p></div>
</div>
<div class="gpt g2-block"><h5>Classification, Types 1 and 2: mildly clear and mild (Patel Acne slide 7)</h5>
<p class="g2-status"><b>Status B, E</b> Words on slide; lecture says which words the exam uses</p><table class="g2-table"><caption>Slide 7</caption><thead><tr><th scope="col">Type</th><th scope="col">Non-inflammatory lesions</th><th scope="col">Inflammatory lesions</th><th scope="col">Scarring</th></tr></thead><tbody><tr><th scope="row">1: mildly clear</th><td>Rare; no more than 1 small lesion</td><td></td><td></td></tr><tr><th scope="row">2: mild</th><td>Some</td><td>No more than a few; papules and pustules only, no nodules</td><td>Minimal</td></tr></tbody></table><p>The types differ by amount, not by lesion kind: mildly clear is one or none, mild is "some" non-inflammatory lesions with at most a few papules or pustules. She said the guideline uses words such as some and many because lesions on a face cannot be counted reliably, and her cases use the same words with no counts.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;because you can't necessarily count the different lesions on your face&rdquo; <span class='g2-src'>11/10 T@14277</span></p>
<p>&ldquo;I'm not gonna tell you like 10&rdquo; <span class='g2-src'>11/10 T@14523</span></p>
<p>&ldquo;the terms that I will also use on my cases on the exam&rdquo; <span class='g2-src'>11/10 T@14460</span></p></div>
</div>
<div class="gpt g2-block"><h5>Classification, Types 3 and 4: moderate and severe (Patel Acne slide 8)</h5>
<p class="g2-status"><b>Status B, E</b> Words on slide; lecture gives the deciding term and the case use</p><table class="g2-table"><caption>Slide 8</caption><thead><tr><th scope="col">Type</th><th scope="col">Non-inflammatory</th><th scope="col">Inflammatory</th><th scope="col">Nodules</th><th scope="col">Scarring</th></tr></thead><tbody><tr><th scope="row">3: moderate</th><td>Many</td><td>Some</td><td>No more than one</td><td>Mild possible</td></tr><tr><th scope="row">4: severe</th><td>Many</td><td>Many</td><td>No more than a few</td><td>Moderate to extensive</td></tr></tbody></table><p>The deciding terms between moderate and severe are many, some and no more than one. In her second case, lesions on the cheek plus cystic lesions on the upper back and shoulders meant more than one cystic lesion, so the patient was severe (slide 46). Slide 8 says "no more than a few nodular lesions" for severe; she described severe as "few nodules and cysts" with many lesions of both kinds.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;many, some, no more than one&rdquo; <span class='g2-src'>11/10 T@9513</span></p>
<p>&ldquo;That is how you're gonna define the difference between moderate and severe.&rdquo; <span class='g2-src'>11/10 T@9543</span></p>
<p>&ldquo;the scarring, it will be moderate to excessive&rdquo; [she said "excessive"; the slide says "extensive"] <span class='g2-src'>11/10 T@9333</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-3">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 9&ndash;12</h3>
<div class="gbar"><span>What the lecture adds (Acne 9&ndash;12)</span><b>Risk factors, medicines that cause acne and complications are applied to a patient case, ending with a severity answer</b><i>Patel Acne slide 9, 10, 11, 12</i></div>
<div class="gpt g2-block"><h5>Risk factors: what each one means in practice (Patel Acne slide 9)</h5>
<p class="g2-status"><b>Status C</b> Lecture adds examples</p><p>The slide lists age 12 to 20 years, oil-based cosmetics, a first-degree relative with acne, humidity and sweating, local friction, and medications (slide 10). She added concrete examples: skin products that are not washed off and build up, irritation from a cleanser or moisturizer, and fabric that rubs the face, such as a rough sleeve.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;continuously building the cosmetics on the face can also lead to our acne&rdquo; <span class='g2-src'>11/10 T@9937</span></p>
<p>&ldquo;certain fabrics that are touching the skin&rdquo; <span class='g2-src'>11/10 T@10331</span></p>
<p>&ldquo;first-degree family relative has also experienced acne&rdquo; <span class='g2-src'>11/10 T@10036</span></p></div>
</div>
<div class="gpt g2-block"><h5>Medicines that can cause acne (Patel Acne slide 10)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture says how much of it to carry</p><p>The slide groups drugs by class: hormones (corticosteroids, androgens, progesterone contraceptives), neuropsychotherapeutic drugs (TCAs, lithium, antiepileptics, aripiprazole, SSRIs), vitamins B1, B6 and B12, dactinomycin, cyclosporine and sirolimus, isoniazid, rifampin and ethionamide, and iodine, bromine and chlorine. She said a multivitamin is fine but excessive B vitamins have been linked to acne, and she called the other drugs on the list (cytostatic, immunomodulating and TB drugs) "specialty" ones to keep in mind only if the patient takes them. A patient on one of these has an exacerbating factor, which also affects self-care eligibility (slide 18).</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;excessive amount of B1, B6, B12&rdquo; <span class='g2-src'>11/10 T@10895</span></p>
<p>&ldquo;but if they are, kind of keep this in mind&rdquo; <span class='g2-src'>11/10 T@11161</span></p>
<p>&ldquo;So very specialized.&rdquo; <span class='g2-src'>11/10 T@11304</span></p></div>
</div>
<div class="gpt g2-block"><h5>Complications: anxiety, depression, scarring (Patel Acne slide 11)</h5>
<p class="g2-status"><b>Status C</b> Lecture adds the patient-care point</p><p>Scarring is the most common complication, and the scars can last for life. She said scars may be treated with abrasive procedures such as those at medical spas, but few patients do this. She tied anxiety and depression to appearance, the same point she made for atopic dermatitis, and noted that patients are young during puberty and may struggle with it. This is why mental health appears again as a monitoring item (slide 44).</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the scarring is the most common complication&rdquo; <span class='g2-src'>11/10 T@11709</span></p>
<p>&ldquo;could also be lifelong unless it's been treated with something abrasive&rdquo; <span class='g2-src'>11/10 T@11913</span></p>
<p>&ldquo;it may cause anxiety&rdquo; <span class='g2-src'>11/10 T@11647</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case 1: a 16-year-old before a school dance (Patel Acne slide 12)</h5>
<p class="g2-status"><b>Status C</b> Case stem; lecture gives the answer and what to look for</p><p>The stem: a 16-year-old on only occasional ibuprofen (Motrin), acne on the face only, no inflammation, open and closed comedones on the cheeks and chin, heavy makeup. Her class answer was mild acne. Reasons she accepted: no inflammation, and only "some" comedones, which separates mild from moderate (many non-inflammatory lesions as well as inflammatory ones) and from mildly clear (no more than one small lesion). The chief complaint says she wants it cured before a dance; she said there is no cure and the aim is to do the best possible.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I heard no inflammation noted. Good.&rdquo; <span class='g2-src'>11/10 T@13213</span></p>
<p>&ldquo;the answer is mild acne&rdquo; <span class='g2-src'>11/10 T@14677</span></p>
<p>&ldquo;Can we cure it?&rdquo; <span class='g2-src'>11/10 T@12400</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-4">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 13&ndash;17</h3>
<div class="gbar"><span>What the lecture adds (Acne 13&ndash;17)</span><b>Treatment goals and the patient-specific facts she asks you to collect before choosing therapy</b><i>Patel Acne slide 13, 14, 15, 16, 17</i></div>
<div class="gpt g2-block"><h5>Treatment goals (Patel Acne slide 13)</h5>
<p class="g2-status"><b>Status B</b> Fact on slide; lecture explains slowing progression and hyperpigmentation</p><p>The goals are to relieve symptoms and psychologic distress, reduce lesion number and severity, improve appearance, slow progression, limit duration and recurrence, and prevent long-term scarring and hyperpigmentation. She explained slowing progression as preventing a relapse later in puberty or into the twenties. Hyperpigmentation was explained as a scar left darker than the surrounding skin.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So that way, in the future, if a patient continues to go through puberty&rdquo; <span class='g2-src'>11/10 T@15080</span></p>
<p>&ldquo;when the scar has been discolored on the skin, causing a darker pigmentation&rdquo; <span class='g2-src'>11/10 T@15450</span></p>
<p>&ldquo;Limit the duration as well as the reoccurrence&rdquo; <span class='g2-src'>11/10 T@15229</span></p></div>
</div>
<div class="gpt g2-block"><h5>Patient care process (Patel Acne slide 14)</h5>
<p class="g2-status"><b>Status B</b> Title only on slide; lecture applies the process to acne</p><p>The slide is a title. She said the patient care process applies to acne: collect information on the patient, assess it, make a plan that is appropriate and safe, then implement the plan, follow up, monitor and evaluate. The slides that follow (15 and 16 for collecting, 40 for the plan, 44 for monitoring) fall into these steps.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So, again, our patient care process is applied here.&rdquo; <span class='g2-src'>11/10 T@15532</span></p>
<p>&ldquo;we're going to assess that information, create a plan that is appropriate and safe&rdquo; <span class='g2-src'>11/10 T@15633</span></p></div>
</div>
<div class="gpt g2-block"><h5>Considerations: why the same acne is treated differently (Patel Acne slide 15)</h5>
<p class="g2-status"><b>Status B, E</b> Boxes on slide; lecture states the patient-specific point</p><p>The boxes name what changes the choice: severity and lesion type, scarring, age, family history of persistent acne, adherence, treatment preferences, skin type or ethnic group, cost, response to previous therapy, and the psychologic effects of treating or not treating. She said classification is patient specific and the first step is severity. Adherence and preference limit how many products to add: a patient who struggles to wash daily needs a simpler routine, starting with cleansing. Response to previous therapy is one of the patient-specific points she listed.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Understand the severity before we choose their treatment.&rdquo; <span class='g2-src'>11/10 T@15984</span></p>
<p>&ldquo;adherence is a big thing here&rdquo; <span class='g2-src'>11/10 T@16198</span></p>
<p>&ldquo;What all have they tried?&rdquo; <span class='g2-src'>11/10 T@16964</span></p></div>
</div>
<div class="gpt g2-block"><h5>Clinical evaluation (Patel Acne slide 16)</h5>
<p class="g2-status"><b>Status C</b> Lecture adds how to ask and what matters most</p><p>The slide lists medical history, medication and supplement use, social history, menstrual history, and prior or current acne treatments. She said to ask open-ended questions and called prior and current treatments "huge", because what a patient used before and uses now helps decide the treatment plan. She said menstrual history (age, regularity, history of infertility) can also affect acne.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Prior or current acne treatments, that's huge.&rdquo; <span class='g2-src'>11/10 T@17782</span></p>
<p>&ldquo;what are they currently using will help us determine their treatment plan&rdquo; <span class='g2-src'>11/10 T@17868</span></p>
<p>&ldquo;trying to ask them open-ended questions&rdquo; <span class='g2-src'>11/10 T@17305</span></p></div>
</div>
<div class="gpt g2-block"><h5>Approach to acne treatment (Patel Acne slide 17)</h5>
<p class="g2-status"><b>Status B, E</b> Reasoning supplied; one table she excluded</p><p>Acne is treated as a chronic disease with no cure. Treatment aims at the opposite of each pathophysiology step: less sebum, less P. acnes, less inflammation, less hyperkeratinization. No routine endocrine or microbiologic testing is recommended; the exception on the slide is a high suspicion of PCOS or another hormonal disorder, which she tied to irregular cycles and difficulty losing weight. Antibiotics are used with attention to resistance. She told the class the exacerbating-factors table (OTC handbook Table 38-1) is for their own reference; what she covered on slide 10 is all she needs them to know.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it is approached as a chronic disease state&rdquo; <span class='g2-src'>11/10 T@17946</span></p>
<p>&ldquo;the complete opposite of the pathophysiology&rdquo; <span class='g2-src'>11/10 T@19645</span></p>
<p>&ldquo;that is all I'm gonna need you to know for, for this time&rdquo; <span class='g2-src'>11/10 T@18430</span></p>
<p>&ldquo;that is when we'll take a look at other conditions such as PCOS&rdquo; <span class='g2-src'>11/10 T@19107</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-5">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 18&ndash;21</h3>
<div class="gbar"><span>What the lecture adds (Acne 18&ndash;21)</span><b>Self-care limits, non-drug care for everyone, and how each drug class is matched to a step of acne pathogenesis</b><i>Patel Acne slide 18, 19, 20, 21</i></div>
<div class="gpt g2-block"><h5>Exclusions from self-treatment (Patel Acne slide 18)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture explains what happens to excluded patients</p><p>Severe acne, possible rosacea, and exacerbating factors such as comedogenic drugs rule out self-treatment. She illustrated the third item with a patient who is treated for another condition with a drug that worsens acne: the drug is needed, so over-the-counter acne products are not the answer and the patient is referred. For these patients the route is straight to dermatology, not a product recommendation.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it would be a straight referral to dermatology&rdquo; <span class='g2-src'>11/10 T@20133</span></p>
<p>&ldquo;So in that case, we wouldn't necessarily recommend over the counter products.&rdquo; <span class='g2-src'>11/10 T@20040</span></p></div>
</div>
<div class="gpt g2-block"><h5>Non-pharmacologic therapy for all patients (Patel Acne slide 19)</h5>
<p class="g2-status"><b>Status B, C</b> Items on slide; lecture adds reasons and counseling</p><p>The first step for everyone is cleansing with mild soap or a non-soap cleanser twice a day, without abrasive products or over-cleansing. For a patient who wears makeup, an oil-based cleanser goes on first and a water-based cleanser follows, which removes makeup without stripping the epidermis. She said not to pop, squeeze or pick lesions because that causes infection, worse lesions and scarring. Light and laser masks are sold in stores, and she urged caution because patients do not know how often to use them. Diet: low-glycemic foods, limit dairy, fish oil and a Mediterranean pattern (all on the slide); she added vegetables and lean protein.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;an oil-based cleanser, prior to a water-based cleanser&rdquo; <span class='g2-src'>11/10 T@20462</span></p>
<p>&ldquo;That is exactly what causes infections and worsening of the lesion&rdquo; <span class='g2-src'>11/10 T@20875</span></p>
<p>&ldquo;being careful with when you recommend this is important&rdquo; <span class='g2-src'>11/10 T@21057</span></p>
<p>&ldquo;4 to 8 glasses of water a day is where we start off&rdquo; <span class='g2-src'>11/10 T@22017</span></p> <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span></div>
</div>
<div class="gpt g2-block"><h5>Treatment algorithm, first appearance (same figure as slide 40) (Patel Acne slide 20)</h5>
<p class="g2-status"><b>Status B</b> Same figure as slide 40; lecture previews it and returns to it later</p><p>Slide 20 is the algorithm shown in full on slide 40. At this point she told the class that every patient starts with non-drug therapy, and that drug therapy is then chosen by the patient's severity. She said she would come back to the chart and go through it step by step, which she did after the isotretinoin material; see the full explanation under slide 40.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So all patients use non-pharm therapy, OK?&rdquo; <span class='g2-src'>11/10 T@22338</span></p>
<p>&ldquo;that is how you select the medication therapy&rdquo; <span class='g2-src'>11/10 T@22499</span></p>
<p>&ldquo;this treatment chart, we're gonna come back to it&rdquo; <span class='g2-src'>11/10 T@22174</span></p></div>
</div>
<div class="gpt g2-block"><h5>Pathogenesis and drug mechanisms (Patel Acne slide 21)</h5>
<p class="g2-status"><b>Status B, D</b> Figure on slide; lecture matches each drug to a step; one list differs</p><table class="g2-table g2-stack"><caption>Slide 21 figure: process and the drugs aimed at it</caption><thead><tr><th scope="col">Process</th><th scope="col">Drugs on the slide</th></tr></thead><tbody><tr><th scope="row">P. acnes proliferation</th><td>Benzoyl peroxide, topical or oral antibiotics, isotretinoin</td></tr><tr><th scope="row">Abnormal keratinization of follicle</th><td>Salicylic acid, benzoyl peroxide, topical retinoids, isotretinoin</td></tr><tr><th scope="row">Abnormal sebum</th><td>Antiandrogens, isotretinoin, topical or oral antibiotics, corticosteroids, estrogens</td></tr><tr><th scope="row">Inflammatory response</th><td>Intralesional corticosteroids, oral corticosteroids, topical or oral antibiotics</td></tr></tbody></table><p>She said therapy must reduce every part of the pathophysiology, and she went through the drugs aimed at each step. The slide itself says therapy "must address one of the four mechanisms"; she said every part must be reduced. Her spoken list for inflammation was "corticosteroids, both oral and topical", while the slide lists intralesional and oral. An exam question written from the figure would use the slide wording.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we need to reduce every single part of the pathophysiology of acne&rdquo; <span class='g2-src'>11/10 T@22625</span></p>
<p>&ldquo;targeting the bacteria itself, benzoyl peroxide, topical or oral antibiotics&rdquo; <span class='g2-src'>11/10 T@22739</span></p>
<p>&ldquo;we have our corticosteroids, both oral and topical&rdquo; <span class='g2-src'>11/10 T@23434</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-6">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 22&ndash;25</h3>
<div class="gbar"><span>What the lecture adds (Acne 22&ndash;25)</span><b>What each non-prescription ingredient does, which skin type tolerates which vehicle, and what the guideline says about topical agents</b><i>Patel Acne slide 22, 23, 24, 25</i></div>
<div class="gpt g2-block"><h5>Definitions: bactericidal, keratolytic, comedolytic (Patel Acne slide 22)</h5>
<p class="g2-status"><b>Status B</b> Definitions on slide; lecture says why keratolytic matters</p><p>Bactericidal means the drug destroys bacteria. Keratolytic means it thins and sheds the top layer of the epidermis and softens keratin. Comedolytic means it breaks up comedones (blackheads and whiteheads) and prevents new ones. She explained the keratolytic point as access: papules, pustules, nodules and cysts form below the epidermis, so a drug that loosens the top layer lets the medication reach the dermis. These three words are the rows of the product table on slide 23.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;means that we are destroying that bacteria&rdquo; <span class='g2-src'>11/10 T@23678</span></p>
<p>&ldquo;we can target beyond the epidermis&rdquo; <span class='g2-src'>11/10 T@23920</span></p>
<p>&ldquo;preventing the formation of new commodomes&rdquo; <span class='g2-src'>11/10 T@24522</span></p></div>
</div>
<div class="gpt g2-block"><h5>Non-prescription topical products compared (Patel Acne slide 23)</h5>
<p class="g2-status"><b>Status B</b> Table on slide; lecture says what the pattern means</p><table class="g2-table g2-stack"><caption>Slide 23: properties of each OTC ingredient</caption><thead><tr><th scope="col">Ingredient</th><th scope="col">Bactericidal</th><th scope="col">Keratolytic</th><th scope="col">Comedolytic</th><th scope="col">Strength</th></tr></thead><tbody><tr><th scope="row">Benzoyl peroxide</th><td>Yes</td><td>Yes</td><td>Yes</td><td>2.5-10%, 1-2 times daily</td></tr><tr><th scope="row">Retinoid</th><td>No</td><td>Yes</td><td>Yes</td><td>0.1% gel</td></tr><tr><th scope="row">Hydroxy acids (alpha, beta)</th><td>No</td><td>Yes</td><td>Yes (beta-hydroxy acids)</td><td>0.5-2%</td></tr><tr><th scope="row">Sulfur</th><td>No</td><td>Yes</td><td>Yes</td><td>3-10%</td></tr><tr><th scope="row">Resorcinol</th><td>Yes, plus antifungal</td><td>Yes</td><td>No</td><td>3-8%, combined with sulfur</td></tr></tbody></table><p>Benzoyl peroxide is the only product that is bactericidal, keratolytic and comedolytic, and that is her reason it is the first-line OTC agent. Side effects follow the action: benzoyl peroxide dries and peels skin and increases photosensitivity, so sunscreen is part of the advice. Resorcinol (with sulfur) causes the most irritation and skin color changes. The slide also lists bleaching of hair and clothing and contact allergy for benzoyl peroxide; she did not mention them.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;notice that benzoyl peroxide targets all three&rdquo; <span class='g2-src'>11/10 T@24875</span></p>
<p>&ldquo;So that means that benzoyl peroxide will be our first-line agent.&rdquo; <span class='g2-src'>11/10 T@25250</span></p>
<p>&ldquo;we will not be targeting the comodones&rdquo; <span class='g2-src'>11/10 T@25159</span></p>
<p>&ldquo;this causes the most skin irritation&rdquo; <span class='g2-src'>11/10 T@26674</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical formulation selection by skin type (Patel Acne slide 24)</h5>
<p class="g2-status"><b>Status B, C</b> Table on slide; lecture gives the oil reasoning and bars point</p><table class="g2-table"><caption>Slide 24</caption><thead><tr><th scope="col">Skin type</th><th scope="col">Formulations tolerated</th></tr></thead><tbody><tr><th scope="row">Oily to normal</th><td>Gels, solutions, lotions</td></tr><tr><th scope="row">Normal</th><td>Gels, solutions, lotions, creams</td></tr><tr><th scope="row">Normal to dry; "sensitive"</th><td>Lotions and creams</td></tr></tbody></table><p>Ointments and bars are not usually recommended for any skin type. Her reason for oily skin: acne already means extra sebum, so the product should contain the least oil, and gels, solutions and lotions do. An ointment is the thickest vehicle with the most oil. A bar of soap sits open by the sink or in the shower and is not sanitary on the face. In a question she kept the oil-based cleanser for makeup removal even in oily skin, because oil lifts the makeup and the water-based cleanser follows.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;They contain the least amount of that oil-based formulation.&rdquo; <span class='g2-src'>11/10 T@27089</span></p>
<p>&ldquo;ointment is the thickest vehicle&rdquo; <span class='g2-src'>11/10 T@27793</span></p>
<p>&ldquo;it's not sanitary to use that on your face&rdquo; <span class='g2-src'>11/10 T@27997</span></p>
<p>&ldquo;oil-based will also attract the makeup&rdquo; <span class='g2-src'>11/10 T@28190</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical treatments for acne: guideline statements (Patel Acne slide 25)</h5>
<p class="g2-status"><b>Status B, D, E</b> Slide statements; lecture adds reasons; dapsone differs</p><p>Benzoyl peroxide is the preferred initial OTC topical agent. Combinations that hit different parts of pathogenesis are used in most patients, topical retinoids with benzoyl peroxide or a topical antimicrobial are safe and effective, and topical antibiotics are never used as monotherapy. She repeated that acne is never treated with topical antibiotics alone. Azelaic acid is for post-inflammatory dyspigmentation: she said its benefit is mainly brightening and hyperpigmentation, and its acne benefit is limited. Sulfur, nicotinamide, resorcinol, sodium sulfacetamide, aluminum chloride and zinc have limited evidence, though many marketed products contain them.</p><div class="g2-note"><span class="g2-k">Dapsone: slide versus a later answer</span><p>Slide: topical dapsone 5% gel is recommended for inflammatory acne (females). She first said "for females", and later answered a student that it can be used in both genders but has low efficacy. She also called dapsone the last line on the mild path. An exam written from her lecture would key the slide wording (females) for a recommendation question; use in both genders was only her answer to a student.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Topical antibiotics are never recommended by itself.&rdquo; <span class='g2-src'>11/10 T@29245</span></p>
<p>&ldquo;So you will never treat acne only with topical antibiotics.&rdquo; <span class='g2-src'>11/10 T@29298</span></p>
<p>&ldquo;Azeleic acid is very limited in terms of benefits.&rdquo; <span class='g2-src'>11/10 T@32430</span></p>
<p>&ldquo;Topical Dapsone 5% gel for inflammatory lesions, but I wanna highlight for females&rdquo; <span class='g2-src'>11/10 T@29157</span></p>
<p>&ldquo;you can utilize it in both genders&rdquo; <span class='g2-src'>11/10 T@55730</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-7">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 26&ndash;29</h3>
<div class="gbar"><span>What the lecture adds (Acne 26&ndash;29)</span><b>Benzoyl peroxide, retinoid and hydroxy acid counseling: timing, separation and cautions</b><i>Patel Acne slide 26, 27, 28, 29</i></div>
<div class="gpt g2-block"><h5>Benzoyl peroxide: use, strength, monitoring (Patel Acne slide 26)</h5>
<p class="g2-status"><b>Status B, D</b> Slide facts; lecture adds sun advice; "alone" line differs from the algorithm</p><p>Benzoyl peroxide is the most common OTC acne product, recognized by FDA as safe and effective, 2.5 to 10% OTC and up to 20% by prescription. Efficacy can show as soon as 5 days; the common side effect is irritation, worse at higher strengths, and it stabilizes within 1 to 2 weeks. Sun exposure on benzoyl peroxide raises the chance of burning, scarring and hyperpigmentation, so she added sunscreen after the skincare routine. With antibiotics it prevents P. acnes resistance, which is why it is paired with topical antibiotics.</p><div class="g2-note"><span class="g2-k">"Used alone (mild to moderate)" versus the algorithm</span><p>The slide, and her reading of it, say benzoyl peroxide may be used alone for mild to moderate acne and in combination for moderate to severe. She pointed to the treatment algorithm as the place this is applied. On slide 40, benzoyl peroxide alone is a first-line single agent only for mild acne; moderate acne starts with a topical combination that contains benzoyl peroxide. An exam case would key the algorithm.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it may be used alone for mild to moderate acne&rdquo; <span class='g2-src'>11/10 T@29990</span></p>
<p>&ldquo;that is our treatment algorithm that we'll be reviewing here shortly&rdquo; <span class='g2-src'>11/10 T@30115</span></p>
<p>&ldquo;very important to utilize sunscreen or sunblock&rdquo; <span class='g2-src'>11/10 T@26044</span></p></div>
</div>
<div class="gpt g2-block"><h5>Retinoids, over the counter (Patel Acne slide 27)</h5>
<p class="g2-status"><b>Status B, C, D</b> Slide facts; lecture adds timing and reasons; two statements differ from the slide</p><p>OTC retinoids are Differin gel 0.1% and Effaclar gel 0.1% (Differin is adapalene, slide 31), added to OTC by FDA in 2016. Counseling: apply at night after washing, a thin layer, and separate from benzoyl peroxide (benzoyl peroxide as the morning wash, not the evening wash). The reason for night is photosensitivity; for separation, skin irritation. Peeling worsens the longer it is used, so she described short use, almost as a spot treatment. Moisturizer and sunscreen are needed, and the slide says FDA limits use to persons over 12 years of age; she said "12 years of age and over" is appropriate and that anything younger gets no retinoid (a small difference at exactly 12).</p><div class="g2-note"><span class="g2-k">Two points where her words differ from the slide</span><p>(1) Slide: do not use with sulfur, resorcinol, salicylic acid or vitamin C. She read this, then told a student they may be used if separated. An exam item that follows her allowance keys separated use (P6-023: adapalene at night, benzoyl peroxide in the morning, vitamin C apart); the slide's list is the wording for the products named. (2) Slide: a lower-risk topical retinoid with no labeling to caution pregnant users. She said patients who may be pregnant, or who are breastfeeding, should stop all retinoid products. An exam written from her lecture would key her statement for counseling.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;efficacy is pretty quick with retinoids&rdquo; <span class='g2-src'>11/10 T@30372</span></p>
<p>&ldquo;It is applied at night&rdquo; <span class='g2-src'>11/10 T@30727</span></p>
<p>&ldquo;it's not going to be your wash in the evening&rdquo; <span class='g2-src'>11/10 T@31000</span></p>
<p>&ldquo;We're not gonna use sulfur, resorsinol, salicylic acid, or vitamin C products&rdquo; <span class='g2-src'>11/10 T@31282</span></p>
<p>&ldquo;You may, but separate it.&rdquo; <span class='g2-src'>11/10 T@32038</span></p>
<p>&ldquo;need to be educated to completely stop all retinoid products&rdquo; <span class='g2-src'>11/10 T@31731</span></p></div>
</div>
<div class="gpt g2-block"><h5>Alpha hydroxy acids (AHA) (Patel Acne slide 28)</h5>
<p class="g2-status"><b>Status B, C</b> Fact on slide; lecture adds the role and the peel caution</p><p>AHAs are glycolic, lactic and citric acid; when "AHA" appears on a bottle, this is the group. They exfoliate non-inflammatory lesions. High concentrations are chemical peels, not OTC, and she cautioned that peels can cause pigmentation changes and scarring, so a peel is not recommended for every patient. Patients should test a small area first, wait 2 to 4 weeks between peels, and use sunscreen because photosensitivity increases.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this is an exfoliant for non-inflammatory lesions&rdquo; <span class='g2-src'>11/10 T@33208</span></p>
<p>&ldquo;trial it in a small area of your skin&rdquo; <span class='g2-src'>11/10 T@33537</span></p>
<p>&ldquo;Wait about 2 to 4 weeks between peels.&rdquo; <span class='g2-src'>11/10 T@33622</span></p>
<p>&ldquo;not always are we gonna recommend a chemical peel to all patients&rdquo; <span class='g2-src'>11/10 T@33720</span></p></div>
</div>
<div class="gpt g2-block"><h5>Beta hydroxy acid: salicylic acid (Patel Acne slide 29)</h5>
<p class="g2-status"><b>Status B, C</b> Fact on slide; lecture adds the history and the preference</p><p>Salicylic acid has limited efficacy data. The slide gives side effects (drying, photosensitivity), once or twice daily use as a cleanser or gel, gel only on the affected area, and 4 to 6 weeks as the maximum effective duration; she did not discuss the 4 to 6 weeks. She explained why older people may call it the best acne ingredient: before benzoyl peroxide was studied it was first line, and later data showed benzoyl peroxide to be more effective. So benzoyl peroxide is preferred, and salicylic acid is still available with sunscreen.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;salicylic acid was actually first line&rdquo; <span class='g2-src'>11/10 T@34661</span></p>
<p>&ldquo;it was actually much more effective than salicylic acid&rdquo; <span class='g2-src'>11/10 T@34796</span></p>
<p>&ldquo;there is limited efficacy with acne&rdquo; <span class='g2-src'>11/10 T@34173</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-8">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 30&ndash;33</h3>
<div class="gbar"><span>What the lecture adds (Acne 30&ndash;33)</span><b>Natural products and the prescription topical and oral antibiotic agents, with ages and durations</b><i>Patel Acne slide 30, 31, 32, 33</i></div>
<div class="gpt g2-block"><h5>Complementary therapy: tea tree and frankincense oil (Patel Acne slide 30)</h5>
<p class="g2-status"><b>Status C</b> Lecture adds the use rule</p><p>The slide names tea tree oil (irritating if applied directly; add to a moisturizing lotion or gel) and frankincense oil (anti-inflammatory benefit). She said natural products are not as effective as medications, may suit patients with sensitive skin, and that essential oil is never applied straight to a lesion but is mixed into a moisturizer or gel base. The transcript captions render frankincense as "Frankenstein's oil"; the slide spelling is frankincense.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;not as effective as our medications&rdquo; <span class='g2-src'>11/10 T@35106</span></p>
<p>&ldquo;especially of those with sensitive skin&rdquo; <span class='g2-src'>11/10 T@35289</span></p>
<p>&ldquo;you're never gonna use this directly straight on your skin&rdquo; <span class='g2-src'>11/10 T@35506</span></p></div>
</div>
<div class="gpt g2-block"><h5>Prescription topical agents (Patel Acne slide 31)</h5>
<p class="g2-status"><b>Status B, C, D</b> Table on slide; lecture adds reasons; adapalene strength said both ways</p><table class="g2-table g2-stack"><caption>Slide 31</caption><thead><tr><th scope="col">Class</th><th scope="col">Products</th><th scope="col">Comment on slide</th></tr></thead><tbody><tr><th scope="row">Topical retinoids</th><td>Tretinoin 0.25-0.1% (Retin-A, Altreno); adapalene 0.3% (Differin); tazarotene 0.05-0.1% (Tazorac, Fabior foam); trifarotene 0.005% (Aklief)</td><td>Apply to clean, dry skin; avoid eyes, mucous membranes, abrasions</td></tr><tr><th scope="row">Topical antibiotics</th><td>Clindamycin 1%, erythromycin 2%, minocycline foam 4%</td><td>Not monotherapy; add to benzoyl peroxide to reduce resistance; wait 30 minutes to shave or apply cosmetics</td></tr><tr><th scope="row">Topical anti-inflammatory</th><td>Azelaic acid 15-20% (Azelex, Finacea); dapsone 5-7.5% (Aczone)</td><td>Wait until dry to apply cosmetics; dapsone: G6PD concern, monitor CBC and reticulocyte counts</td></tr></tbody></table><p>The slide lists the effects: retinoids reduce inflammation and normalize keratinocyte differentiation, antibiotics reduce inflammation and decrease bacterial growth. She said the antibiotics reduce inflammation and bacterial growth, and that azelaic acid and dapsone can cause hypersensitivity and lightening of the skin (hypopigmentation). Tretinoin brands are the most commonly prescribed. She did not discuss G6PD or the blood counts for dapsone.</p><div class="g2-note"><span class="g2-k">Adapalene: higher or lower</span><p>She first said the prescription strength of Differin is "a little bit higher", then said it "is lower". The slides settle it: OTC adapalene is 0.1% (slide 27) and prescription adapalene is 0.3% (this slide), so prescription is higher.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;are the most commonly prescribed brand names&rdquo; <span class='g2-src'>11/10 T@36458</span></p>
<p>&ldquo;notice the prescription strength is a little bit higher&rdquo; <span class='g2-src'>11/10 T@36526</span></p>
<p>&ldquo;we're not using this as monotherapy&rdquo; <span class='g2-src'>11/10 T@37332</span></p>
<p>&ldquo;it could cause hypopigmentation&rdquo; <span class='g2-src'>11/10 T@37859</span></p></div>
</div>
<div class="gpt g2-block"><h5>Prescription oral agents (Patel Acne slide 32)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture explains why there are many options</p><p>The slide groups oral agents as antibiotics (doxycycline, minocycline, sarecycline, clindamycin, erythromycin, azithromycin, trimethoprim/sulfamethoxazole with limited use), hormonal agents (combined oral contraceptives and spironolactone for females, flutamide as an androgen receptor blocker) and the oral retinoid isotretinoin. Doxycycline is most commonly prescribed, then minocycline. She asked why so many antibiotics exist: for side effects, allergies and resistance, so another option is available when a patient cannot take the first choices. Hormonal agents depend on the patient, such as irregular menses or PCOS.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;doxycycline most commonly prescribed&rdquo; <span class='g2-src'>11/10 T@38382</span></p>
<p>&ldquo;there are other options available just in case a patient cannot take those options&rdquo; <span class='g2-src'>11/10 T@38792</span></p>
<p>&ldquo;Oral hormonal agents, again, keep in mind, very patient-specific&rdquo; <span class='g2-src'>11/10 T@38880</span></p>
<p>&ldquo;Flutamide is an androgen receptor blocker.&rdquo; <span class='g2-src'>11/10 T@39337</span></p></div>
</div>
<div class="gpt g2-block"><h5>Oral antibiotics: classes, ages, duration (Patel Acne slide 33)</h5>
<p class="g2-status"><b>Status B, C</b> Slide facts; lecture adds the age boundary, duration reason, allergy rule</p><table class="g2-table g2-stack"><caption>Slide 33</caption><thead><tr><th scope="col">Drug</th><th scope="col">Class</th><th scope="col">On the slide</th></tr></thead><tbody><tr><th scope="row">Minocycline, doxycycline</th><td>Tetracycline</td><td>More effective to eradicate P. acnes; over 12 years, dosed by weight; 50-100 mg BID or 100 mg daily; photosensitivity, fetal harm, tooth discoloration if under 12</td></tr><tr><th scope="row">Sarecycline</th><td>Tetracycline derivative</td><td>Moderate to severe; 60 (33-54 kg), 100 (55-84 kg), 150 mg (85-136 kg) daily</td></tr><tr><th scope="row">Clindamycin</th><td>Lincosamide</td><td>Additional agent; topical or oral</td></tr><tr><th scope="row">Sulfamethoxazole/trimethoprim</th><td>Sulfonamide</td><td>Limit to allergies to macrolides and tetracyclines; do not use if allergic to sulfur</td></tr><tr><th scope="row">Erythromycin, azithromycin</th><td>Macrolide</td><td>Less commonly used due to resistance</td></tr></tbody></table><p>The age rule is "over 12", not "12 and over", and she tied it to tooth discoloration. Use is for the shortest possible time, with re-evaluation at 3 to 4 months, because acne antibiotics are short-term, not chronic. Trimethoprim/sulfamethoxazole has limited use, for patients with allergies to macrolides and tetracyclines; she said it is a sulfur-containing drug, so a sulfur allergy rules it out.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So notice that there is no 12 years and equal to&rdquo; <span class='g2-src'>11/10 T@40268</span></p>
<p>&ldquo;completely avoiding in pregnancy&rdquo; <span class='g2-src'>11/10 T@40050</span></p>
<p>&ldquo;we're reevaluating it in about 3 to 4 months&rdquo; <span class='g2-src'>11/10 T@41532</span></p>
<p>&ldquo;it's not a chronic treatment&rdquo; <span class='g2-src'>11/10 T@41622</span></p>
<p>&ldquo;we're not gonna use it in patients that are allergic to sulfur&rdquo; <span class='g2-src'>11/10 T@40810</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-9">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 34&ndash;36</h3>
<div class="gbar"><span>What the lecture adds (Acne 34&ndash;36)</span><b>Who is a candidate for a combined oral contraceptive, which ones are approved, and why smoking and clots exclude patients</b><i>Patel Acne slide 34, 35, 36</i></div>
<div class="gpt g2-block"><h5>Hormonal agents: combined oral contraceptives and anti-androgens (Patel Acne slide 34)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> Slide facts; lecture adds the candidate rules, a case, and a conflict on the approved list</p><p>Combined oral contraceptives (COCs) are for women who also want contraception, and the slide sets the patient: older than 14 years or more than 2 years since menarche, a non-smoker, and under 35. She worked a candidate question: a 22-year-old who does not want to be pregnant was the best candidate, a patient with a past DVT is excluded because COCs raise clot risk, a 35-year-old smoker is excluded for the same reason, and a 12-year-old is too young <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. COC also fits a patient with irregular menses. Spironolactone and flutamide are the other anti-androgen options; the slide lists 25-50 mg/day in 1 to 2 divided doses, maximum 200 mg/day, and the adverse effects gynecomastia and hyperkalemia without saying which of the two drugs they belong to. She read the dose after flutamide and said not to go to the maximum.</p><div class="g2-note"><span class="g2-k">Which COCs are FDA approved for acne: slide has four, she named three</span><p>Slide 34 lists four ethinyl estradiol combinations: norgestimate, norethindrone acetate, drospirenone, and drospirenone/levomefolate. A student pointed out the difference; she said she had probably updated her slide without updating theirs, to follow her list, and that three are FDA approved: estradiol with norgestimate, with norethindrone, and with drospirenone. An exam written from her lecture would key three, ending at drospirenone (the captions garble the drug names) <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Of course, this is only for females.&rdquo; <span class='g2-src'>11/10 T@39196</span></p>
<p>&ldquo;a patient who is also a smoker is only increasing the risk even more&rdquo; <span class='g2-src'>11/10 T@45450</span></p>
<p>&ldquo;Follow my slides here, OK?&rdquo; <span class='g2-src'>11/10 T@44855</span></p>
<p>&ldquo;these are the three that are FDA approved&rdquo; <span class='g2-src'>11/10 T@44957</span></p>
<p>&ldquo;25 to 50 mg a day in two divided doses&rdquo; <span class='g2-src'>11/10 T@43478</span></p>
<p>&ldquo;I would not recommend hitting that maximum dose.&rdquo; <span class='g2-src'>11/10 T@43682</span></p>
<p>&ldquo;What is hyperkalemia? High potassium.&rdquo; <span class='g2-src'>11/10 T@43947</span></p></div>
</div>
<div class="gpt g2-block"><h5>Combined oral contraceptives: benefits (Patel Acne slide 35)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Combined oral contraceptives: increased risks (Patel Acne slide 36)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture links smoking and clots to candidate selection</p><p>The slide lists venous thrombotic events, myocardial infarction, breast or cervical cancer, and osteoporosis or decreased bone mass. She connected the first item to who is a poor candidate: smoking already raises the chance of a clot, and adding a COC raises it further, so a smoker and a patient with a past DVT are excluded. This is why the candidate rules on slide 34 include non-smoker and under 35.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;venous thrombotic events, myocardial infarction, breast or cervical cancer&rdquo; <span class='g2-src'>11/10 T@45074</span></p>
<p>&ldquo;Increases the risk of thrombus events, right?&rdquo; <span class='g2-src'>11/10 T@45325</span></p>
<p>&ldquo;past medical history of DVT&rdquo; <span class='g2-src'>11/10 T@45938</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-10">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 37&ndash;39</h3>
<div class="gbar"><span>What the lecture adds (Acne 37&ndash;39)</span><b>Isotretinoin as last line, the iPledge rules she flagged as a question, and what the outcome figure shows</b><i>Patel Acne slide 37, 38, 39</i></div>
<div class="gpt g2-block"><h5>Isotretinoin: use, risks, program (Patel Acne slide 37)</h5>
<p class="g2-status"><b>Status B, C, E</b> Facts on slide; lecture adds why it is last line and why no refills</p><p>Isotretinoin (Accutane, Absorica) is for severe refractory nodular acne and acne with significant scarring, 0.5 to 1 mg/kg/day in 2 divided doses, 15 to 20 weeks, a 30-day supply with no refills. She called it the absolute last-line agent because of the conditions it can cause and the limits on filling it, so the benefit is weighed against risk with the patient. The boxed warning is birth defects: it must not be used by women who are pregnant or may become pregnant. No refills is so that the patient can be rechecked for pregnancy each time it is dispensed. Lab monitoring on the slide is triglycerides, cholesterol, LFTs and CBC; she added LDL and HDL <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, and said she starts at 0.5 and increases if needed <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;absolute last line&rdquo; <span class='g2-src'>11/10 T@46645</span></p>
<p>&ldquo;Biggest thing here, black box warning of birth defects&rdquo; <span class='g2-src'>11/10 T@47589</span></p>
<p>&ldquo;the pharmacy needs to, as well as the pharmacist&rdquo; <span class='g2-src'>11/10 T@48222</span></p>
<p>&ldquo;we need to double-check that the patient has no risk of being pregnant&rdquo; <span class='g2-src'>11/10 T@48763</span></p>
<p>&ldquo;we're gonna start with 0.5&rdquo; <span class='g2-src'>11/10 T@48945</span></p></div>
</div>
<div class="gpt g2-block"><h5>iPledge program (REMS) (Patel Acne slide 38)</h5>
<p class="g2-status"><b>Status B, C, E</b> Slide facts; lecture gives exam cue and Q&A points</p><table class="g2-table g2-stack"><caption>Slide 38</caption><thead><tr><th scope="col">Group</th><th scope="col">Requirements</th></tr></thead><tbody><tr><th scope="row">All patients</th><td>Register; understand birth-defect risk and be reliable; sign consent; no blood donation during use and for 1 month after</td></tr><tr><th scope="row">Female patients of reproductive potential</th><td>Pregnancy test initially x 2 and monthly; not pregnant 1 month before and 1 month after; 2 forms of birth control 1 month before, during and after; 7-day window to fill</td></tr><tr><th scope="row">Male patients and females who cannot get pregnant</th><td>30-day window to fill</td></tr><tr><th scope="row">All</th><td>No vitamin A supplements, tetracyclines, steroids, progestin-only contraceptives or St. John's wort; swallow capsule whole</td></tr></tbody></table><p>Her hint was the double pregnancy test at the start, then monthly. In Q&A: no required time between the two initial tests; the second contraception form adds protection; for male patients she said the question is being studied and that as of now the birth defect is not passed on through sperm. A capsule must be swallowed whole, not opened into food. The pharmacy and pharmacist must be registered too, with registration and license rather than outside training. An expired 7-day window voids the prescription.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I said it twice because hint, it's a question&rdquo; <span class='g2-src'>11/10 T@50121</span></p>
<p>&ldquo;There is only a 7 day window to fill this prescription.&rdquo; <span class='g2-src'>11/10 T@50394</span></p>
<p>&ldquo;no time frame between that negative pregnancy test&rdquo; <span class='g2-src'>11/10 T@51468</span></p>
<p>&ldquo;just to prevent the pregnancy even more&rdquo; <span class='g2-src'>11/10 T@53226</span></p>
<p>&ldquo;it cannot be traveled through the sperm&rdquo; <span class='g2-src'>11/10 T@51896</span></p>
<p>&ldquo;You do have to swallow the capsule whole.&rdquo; <span class='g2-src'>11/10 T@51159</span></p></div>
</div>
<div class="gpt g2-block"><h5>iPledge outcomes: pregnancies reported to FDA, 1997-2017 (Patel Acne slide 39)</h5>
<p class="g2-status"><b>Status B, D</b> Figure on slide; lecture states the trend; the figure is not a steady fall</p><p>The figure shows reported pregnancies and pregnancy-related outcomes among isotretinoin patients by year, with 2006 shaded as the year iPledge was implemented. Reports peak at 768 in 2006 and are 250 in 2017. She used it to say that more control by pharmacists, providers and patients reduces fetal defects, and that every patient needs the education, because some patients have never been told the risks by the prescriber.</p><div class="g2-note"><span class="g2-k">"Every year a decrease" versus the figure</span><p>She said that every year after 2006 shows a decrease. The figure falls overall but is not steady: 525 in 2007, 719 in 2008, 388 in 2009, 471 in 2010. What the figure supports is that 2006 was the implementation year and the highest year, with a lower level afterward.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the year of 2006, is when the implementation of iPledge occurred&rdquo; <span class='g2-src'>11/10 T@52288</span></p>
<p>&ldquo;every year following that, as you notice, there has been a decrease&rdquo; <span class='g2-src'>11/10 T@52359</span></p>
<p>&ldquo;Never assume that they've had the education provided.&rdquo; <span class='g2-src'>11/10 T@52826</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-11">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 40&ndash;42</h3>
<div class="gbar"><span>What the lecture adds (Acne 40&ndash;42)</span><b>The treatment algorithm by severity, first and second line, and the counseling every patient gets</b><i>Patel Acne slide 40, 41, 42</i></div>
<div class="gpt g2-block"><h5>Acne treatment algorithm: severity, first line, second line (Patel Acne slide 40)</h5>
<p class="g2-status"><b>Status B, D, E</b> Figure on slide; lecture supplies the stepwise rule and the questions to ask; severe-box order differs</p><p>Key: BP is benzoyl peroxide, Top is topical, Abx is antibiotic, Tx is treatment. Every patient uses non-drug therapy, then the box is chosen by severity. Her rule is to move step by step, never straight to the three-product combination: try one agent (benzoyl peroxide preferred), then a retinoid, then two products, then three. For a case, find the severity, then find what the patient has tried and what is left, and check age and sex before a contraceptive or spironolactone.</p><div class="g2-ladder"><div class="g2-rung"><div class="g2-sev">Mildly clear (Type 1, comedones)</div><div class="g2-cells"><div class="g2-cell"><span class="g2-k">First line</span><p>All use non-pharmacologic therapy, plus or minus benzoyl peroxide alone <span class="g2-or">OR</span> essential oils. The slide shows no second-line box.</p></div></div></div><div class="g2-rung g2-s1"><div class="g2-sev">Mild (comedones / papulopustular)</div><div class="g2-cells"><div class="g2-cell"><span class="g2-k">First line, in steps</span><ul><li><b>Single topical:</b> benzoyl peroxide <span class="g2-or">OR</span> topical retinoid</li><li><span class="g2-or">OR</span> <b>topical combination:</b> BP + topical antibiotic; <span class="g2-or">OR</span> BP + topical retinoid; <span class="g2-or">OR</span> BP + topical retinoid + topical antibiotic</li></ul></div><div class="g2-cell"><span class="g2-k">Second line</span><ul><li>May add (if not on) topical retinoid or BP</li><li><span class="g2-or">OR</span> consider alternate retinoid</li><li><span class="g2-or">OR</span> consider topical dapsone</li></ul></div></div></div><div class="g2-rung g2-s2"><div class="g2-sev">Moderate (papulopustular / comedones)</div><div class="g2-cells"><div class="g2-cell"><span class="g2-k">First line</span><ul><li><b>Topical combination:</b> BP + topical retinoid; <span class="g2-or">OR</span> BP + topical antibiotic; <span class="g2-or">OR</span> BP + topical retinoid + topical antibiotic</li><li><span class="g2-or">OR</span> <b>with an oral antibiotic:</b> oral Abx + topical retinoid + BP; <span class="g2-or">OR</span> oral Abx + topical retinoid + BP + topical Abx</li></ul></div><div class="g2-cell"><span class="g2-k">Second line</span><ul><li>Consider alternate combination therapy</li><li><span class="g2-or">OR</span> change in oral antibiotic</li><li><span class="g2-or">OR</span> add combined oral contraceptive <span class="g2-or">OR</span> oral spironolactone (females only)</li><li><span class="g2-or">OR</span> consider oral isotretinoin</li></ul></div></div></div><div class="g2-rung g2-s3"><div class="g2-sev">Severe (papulopustular / nodular)</div><div class="g2-cells"><div class="g2-cell"><span class="g2-k">First line</span><ul><li><b>Oral antibiotic + topical combination:</b> oral Abx + (BP + topical retinoid); <span class="g2-or">OR</span> oral Abx + (BP + topical Abx); <span class="g2-or">OR</span> (BP + topical retinoid + topical Abx)</li><li><span class="g2-or">OR</span> oral isotretinoin</li></ul></div><div class="g2-cell"><span class="g2-k">Second line</span><ul><li>Consider change in oral antibiotic</li><li><span class="g2-or">OR</span> add combined oral contraceptive <span class="g2-or">OR</span> spironolactone (females only)</li><li><span class="g2-or">OR</span> consider oral isotretinoin</li></ul></div></div></div></div><p class="g2-sub">How she walked each band</p><p><b>Mild:</b> after a single agent fails, combine; "never" jump to three. If all topicals were tried, switch to one not yet used, an alternate retinoid, or dapsone, which she called absolute last line for this band. <b>Moderate:</b> topical combination before any oral antibiotic; benzoyl peroxide is in every combination; add the oral antibiotic only after the topicals were tried. If lesions stay the same or the topicals irritate, ask what has not been tried: change the oral antibiotic, a contraceptive for a female with a compelling reason such as irregular periods, spironolactone, and isotretinoin as absolute last line. <b>Severe:</b> oral antibiotic with the topical combination first, then isotretinoin if that fails, then change antibiotic, contraceptive or spironolactone, if not yet used.</p><div class="g2-note"><span class="g2-k">Severe first line: isotretinoin on the slide, after antibiotics in her walk</span><p>The slide places "Oral Isotretinoin" inside the severe first-line box and again in the second-line box. Her spoken order was oral antibiotic plus topical combination first, then isotretinoin when that did not work. She called isotretinoin last line in several places. An exam written from her lecture would key oral antibiotic plus topical combination as the first choice and isotretinoin after it has been tried. The slide's third severe combination, BP + topical retinoid + topical Abx, also has no oral antibiotic written in; she described the severe combinations as all including the oral antibiotic.</p></div><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's a step by step process&rdquo; <span class='g2-src'>11/10 T@54994</span></p>
<p>&ldquo;Notice that we're never going to just jump to the combination of three&rdquo; <span class='g2-src'>11/10 T@54915</span></p>
<p>&ldquo;benzoyl peroxide is applied to all of the combinations&rdquo; <span class='g2-src'>11/10 T@56733</span></p>
<p>&ldquo;know exactly what has the patient tried and what is left to try&rdquo; <span class='g2-src'>11/10 T@60607</span></p>
<p>&ldquo;when you receive a case on the exam&rdquo; <span class='g2-src'>11/10 T@61001</span></p>
<p>&ldquo;Last line, isotretinoin.&rdquo; <span class='g2-src'>11/10 T@59388</span></p></div>
</div>
<div class="gpt g2-block"><h5>Patient counseling: chronic disease, patience, consistency (Patel Acne slide 41)</h5>
<p class="g2-status"><b>Status B</b> Points on slide; lecture links them to the 8-week timeline</p><p>Acne is treated as a chronic disease and the slide asks for patience, at least 8 weeks to see visible benefit, and consistency in both non-drug and drug treatment. She said that the patient should expect at least 8 weeks of continuous therapy before judging results, which is why response is monitored over 8 weeks or more (slides 44, 47).</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;consistency is key&rdquo; <span class='g2-src'>11/10 T@61307</span></p>
<p>&ldquo;at least 8 weeks of continuous therapy treatment&rdquo; <span class='g2-src'>11/10 T@61388</span></p></div>
</div>
<div class="gpt g2-block"><h5>Counseling: topical and oral medicines (Patel Acne slide 42)</h5>
<p class="g2-status"><b>Status B, C</b> Points on slide; lecture adds first-dose and irritation steps</p><p>Topical: wash with mild soap, pat dry and wait 20 to 30 minutes (the wait is on the slide, not in her talk), then a thin layer in the evening or before bed, avoiding eyes, ears, nostrils and mouth. If stinging or irritation develops, stop temporarily or reduce frequency, and tell the provider, who may lower the strength or frequency. Wash hands after applying, and avoid alcohol, astringents and spices. Oral: swallow whole with a full glass of water, with food to avoid GI upset. The first dose should be taken at home at night so the patient is not driving or starting the day while learning how the drug affects them. Sunscreen applies to both routes.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;avoiding the eyes, ears, nostrils, and mouth&rdquo; <span class='g2-src'>11/10 T@61849</span></p>
<p>&ldquo;temporarily discontinue it&rdquo; <span class='g2-src'>11/10 T@61971</span></p>
<p>&ldquo;take it at night when they are already at home&rdquo; <span class='g2-src'>11/10 T@62755</span></p>
<p>&ldquo;making sure that it's at night, after dinner&rdquo; <span class='g2-src'>11/10 T@62932</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-12">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 43&ndash;46</h3>
<div class="gbar"><span>What the lecture adds (Acne 43&ndash;46)</span><b>Shaving advice, how response is monitored, and the two worked cases with her reasoning</b><i>Patel Acne slide 43, 44, 45, 46</i></div>
<div class="gpt g2-block"><h5>Shaving counseling for acne (Patel Acne slide 43)</h5>
<p class="g2-status"><b>Status B, C</b> Slide points; lecture gives reasons for blade and direction</p><p>Men with acne should use an electric or safety razor. For a safety razor: soften the beard with soap and warm water or shaving gel, shave lightly and infrequently with a sharp, clean blade, avoid nicking lesions, and shave in the direction of hair growth. She said old and rusty blades carry bacteria and cut skin, so a new blade lowers infection risk, and frequent shaving over lesions irritates them and can spread infection. Shaving against the grain increases pore blockage. The slide also says to shave each area only once, which reduces folliculitis; she did not mention this.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;light and infrequent shaving is what's recommended&rdquo; <span class='g2-src'>11/10 T@63939</span></p>
<p>&ldquo;going to increase blockage of that pore&rdquo; <span class='g2-src'>11/10 T@64325</span></p>
<p>&ldquo;in the direction of your hair growth&rdquo; <span class='g2-src'>11/10 T@64241</span></p></div>
</div>
<div class="gpt g2-block"><h5>Efficacy monitoring (Patel Acne slide 44)</h5>
<p class="g2-status"><b>Status B</b> Table on slide; lecture explains who monitors what and when</p><table class="g2-table g2-stack"><caption>Slide 44</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Time or degree of change</th><th scope="col">Action</th></tr></thead><tbody><tr><th scope="row">Lesion count (short term)</th><td>Decrease 10-25% within 4-8 weeks; over 50% within 2-4 months</td><td>Refer for escalation or de-escalation of therapy</td></tr><tr><th scope="row">Comedones</th><td>Resolve by 3-4 months</td><td></td></tr><tr><th scope="row">Inflammatory lesions</th><td>Resolve within a few weeks</td><td></td></tr><tr><th scope="row">Anxiety/depression</th><td>Control or improvement within 2-4 months</td><td></td></tr><tr><th scope="row">Severity (long term)</th><td>No progression</td><td>Refer for escalation or de-escalation</td></tr><tr><th scope="row">Recurrence</th><td>Longer acne-free periods</td><td></td></tr><tr><th scope="row">Scarring or pigmentation</th><td>No further</td><td></td></tr><tr><th scope="row">Safety: dermatitis, dryness, GI upset, photosensitivity</th><td>No adverse effects</td><td>Alternate therapy, dose reduction, stop, or treat the reaction</td></tr></tbody></table><p>The patient checks daily and the pharmacist every 4 to 8 weeks. She covered what is watched (lesion count, mood, severity down from severe toward moderate or mild, recurrence, scarring, dryness and photosensitivity) but did not state the percentages or month ranges in the table.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;every 4 to 8 weeks is when we're monitoring our patients&rdquo; <span class='g2-src'>11/10 T@64639</span></p>
<p>&ldquo;are we also improving the overall mental health of the patient?&rdquo; <span class='g2-src'>11/10 T@65186</span></p>
<p>&ldquo;have we eventually gone down to moderate?&rdquo; <span class='g2-src'>11/10 T@65548</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case 1 revisited: mild acne, first-line agent (Patel Acne slide 45)</h5>
<p class="g2-status"><b>Status B, C, E</b> Case stem; lecture gives answers and a distinction between lesion terms</p><p>For the 16-year-old with no inflammation, only some comedones, and ibuprofen as her only drug, the class answer to "most appropriate first-line agent" was benzoyl peroxide twice a day to the affected areas <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, and she said to follow the mild band of the algorithm. She then asked for the non-drug counseling: how to use benzoyl peroxide, diet and how to clean the skin (slide 19). This slide says "microcomedones and comedones", while slide 12 said "open and closed comedones". She explained that a microcomedone is a small bump with no whitehead or blackhead, and for classifying acne she said to attend to open or closed comedones.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So benzoyl peroxide, first-line agent, right? Follow the mild algorithm.&rdquo; <span class='g2-src'>11/10 T@66744</span></p>
<p>&ldquo;Microchromodomes are not blackheads or whiteheads.&rdquo; <span class='g2-src'>11/10 T@67181</span></p>
<p>&ldquo;pay attention to open or closed comodone&rdquo; <span class='g2-src'>11/10 T@67466</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case 2: severe acne, next-line therapy, isotretinoin counseling (Patel Acne slide 46)</h5>
<p class="g2-status"><b>Status B, C, E</b> Case stem; lecture gives the reasoning for each of three questions</p><p>The patient is 16, on doxycycline 50 mg daily, an OTC topical retinoid and OTC benzoyl peroxide for 8 months, with irregular periods, comedones on the forehead, nose and chin, papules and cysts on the cheek, and cystic lesions on the upper back and shoulders. Classification: severe, because more than one cystic lesion is present. Next line: she is already on an oral antibiotic with a topical retinoid and benzoyl peroxide (a severe first-line combination on slide 40), so the class chose a combined oral contraceptive over spironolactone, and she gave the reason as the irregular periods. If acne does not improve at 6 months <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> and she wants isotretinoin, the counseling points she required were the risks, the side effects, and enrolling in iPledge. The option she marked as not important is not given in the transcript (not in materials).</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;is it no more than one cystic lesion&rdquo; <span class='g2-src'>11/10 T@69015</span></p>
<p>&ldquo;severe would best classify this patient's acne&rdquo; <span class='g2-src'>11/10 T@69179</span></p>
<p>&ldquo;that could be a reason to why COC over spironolactone&rdquo; <span class='g2-src'>11/10 T@69648</span></p>
<p>&ldquo;You also have to educate about the patient enrolling in iPledge.&rdquo; <span class='g2-src'>11/10 T@70579</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-a-13">
<h3>Dr. Patel, slide by slide &middot; Acne therapeutics &middot; slides 47&ndash;51</h3>
<div class="gbar"><span>What the lecture adds (Acne 47&ndash;51)</span><b>The plan-building rules, what to check when therapy fails, and the closing slides</b><i>Patel Acne slide 47, 48, 49, 50, 51</i></div>
<div class="gpt g2-block"><h5>Summary points: building the plan (Patel Acne slide 47)</h5>
<p class="g2-status"><b>Status B</b> Points on slide; lecture adds tapering and the drug-check habit</p><p>Set the goals and outcomes first. Combine the smallest number of agents at the lowest doses that give efficacy, safety, avoidance of resistance and adherence; always include non-drug methods; add the lowest strength first; use topical before oral; monitor for 8 weeks or more; taper treatment over time and adjust to response; and check interactions, side effects and sunscreen and moisturizer. She added the reason for tapering: stopping abruptly can cause rebound acne and skin irritation. She tied the sequence to the algorithm.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we are never going to abruptly stop a medication&rdquo; <span class='g2-src'>11/10 T@71763</span></p>
<p>&ldquo;to prevent any rebound acne as well as irritation to the skin&rdquo; <span class='g2-src'>11/10 T@71864</span></p>
<p>&ldquo;Topical before oral following that treatment algorithm.&rdquo; <span class='g2-src'>11/10 T@71464</span></p></div>
</div>
<div class="gpt g2-block"><h5>If there is no response to current therapy (Patel Acne slide 48)</h5>
<p class="g2-status"><b>Status B, E</b> Table on slide; lecture says to use it with every case</p><table class="g2-table g2-stack"><caption>Slide 48</caption><thead><tr><th scope="col">Reason</th><th scope="col">Action</th></tr></thead><tbody><tr><th scope="row">Non-drug related</th><td>Check exposure to acne-provoking agents; stress and diet; cosmetic comedogenicity; endocrine profile</td></tr><tr><th scope="row">Drug related</th><td>Change vehicle to fit skin type; check type and dose of oral antibiotic; check P. acnes resistance; check topical application; in women, check contraceptive type</td></tr><tr><th scope="row">Poor adherence</th><td>Check frequency of application or oral dosing; check patient understanding</td></tr><tr><th scope="row">Adverse events</th><td>Change class or decrease dose; change formulation; avoid overuse or change type of cleanser; consider contact dermatitis and photosensitivity</td></tr></tbody></table><p>She said to think about these components when picking a treatment option for a case: ask about stress, diet and cosmetics, whether the cream was put on correctly and consistently, and whether the oral antibiotic is taken as directed, using open-ended questions to learn the patient's understanding.</p><div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;as you receive a case on the exam&rdquo; <span class='g2-src'>11/10 T@74057</span></p>
<p>&ldquo;we're open, so we're asking open-ended questions&rdquo; <span class='g2-src'>11/10 T@73528</span></p></div>
</div>
<div class="gpt g2-block"><h5>Conclusion (Patel Acne slide 49)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>References (Patel Acne slide 50)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Acne slide 51)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p7">Scaly Dermatoses Therapeutics (Dr. Patel, 11/10&ndash;11/11; Exam 2)</h2>
<p class="sub">SD = Patel_Scaly-Dermatoses-Therapeutics-Student.pdf (11/11 version), slide = PDF page; T@ = place in the 11/10 or 11/11 transcript, dated; PollEv = her polls of 11/10 and 11/11. Her seven objectives (SD 2&ndash;3), one section each.</p>
<div class="gask"><b>How she asks (11/10&ndash;11/11)</b><ul><li>Adult fingertip units again: &ldquo;hint, please know this chart, OK? So adult only&rdquo; (SD 4; T@76480 11/10).</li><li>Biologics: &ldquo;know the generic names, know the brand names, understand what class to follow through, and exactly what&rsquo;s bolded on the slide&rdquo; (T@22212 11/11); TNF-&alpha; in heart failure: &ldquo;I&rsquo;m saying this twice for a reason&rdquo; (T@22212 11/11).</li><li>&ldquo;Know exactly what we would trial with a mild to moderate patient or a moderate to severe patient first&rdquo; (T@33701 11/11). Not asked: cyclosporine dosing (T@17897 11/11), the exact turnover multiples (T@83726 11/10), severity tools other than BSA (T@10671 11/11).</li></ul></div>

<section class="gobj" id="gobj-p7-1">
<h3>Scaly Dermatoses · Objective 1: the patient interview and care process</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Perform the components of the Patient-Centered Care / STEPS process in the patient interview for dermatologic conditions</b><i>SD 29&ndash;30, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> The care process <span class="g2-src">(SD 29)</span></h5>
<p class="g2-p">Collect, assess, plan, implement, follow-up (monitor and evaluate) around patient-centered care.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Factors in choosing psoriasis therapy <span class="g2-src">(SD 30)</span></h5>
<ul>
<li>Age and sex</li>
<li>Socioeconomic status</li>
<li>Severity</li>
<li>Location of lesions</li>
<li>Past and current treatment</li>
<li>Comorbidities</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Age is huge&rdquo; <span class="g2-src">(T@9650 11/11)</span></p>
</div>
</section>

<section class="gobj" id="gobj-p7-2">
<h3>Scaly Dermatoses · Objective 2: dandruff, seborrheic dermatitis or psoriasis?</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Determine if the patient has rosacea, psoriasis, psoriatic arthritis, seborrhea or dandruff by typical signs and symptoms and patient history</b><i>SD 6, 8, 11&ndash;13, 21&ndash;27, 31</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> The three conditions compared <span class="g2-src">(SD 6)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Feature</th><th scope="col">Dandruff</th><th scope="col">Seborrheic dermatitis</th><th scope="col">Psoriasis</th></tr></thead>
<tbody>
<tr><th scope="row">Location</th><td><span class="g2-lab">Dandruff</span>Scalp</td><td><span class="g2-lab">Seborrheic dermatitis</span>Scalp, face, trunk</td><td><span class="g2-lab">Psoriasis</span>Scalp, elbows, knees, trunk, lower extremities</td></tr>
<tr><th scope="row">Exacerbating factors</th><td><span class="g2-lab">Dandruff</span>Generally stable; increases in dry climate, cold temperature, or stress</td><td><span class="g2-lab">Seborrheic dermatitis</span>Immunosuppression, neurologic conditions, environment, stress</td><td><span class="g2-lab">Psoriasis</span>Environment, infection, medications, stress, alcohol, tobacco</td></tr>
<tr><th scope="row">Appearance</th><td><span class="g2-lab">Dandruff</span>Thin, white or grey flakes</td><td><span class="g2-lab">Seborrheic dermatitis</span>Macules, patches, thin plaques of yellow, oily scales on red skin</td><td><span class="g2-lab">Psoriasis</span>Discrete symmetrical red plaques, sharp borders; silvery white scales, bleeding points</td></tr>
<tr><th scope="row">Inflammation; hyperplasia</th><td><span class="g2-lab">Dandruff</span>Absent; absent</td><td><span class="g2-lab">Seborrheic dermatitis</span>Present; present</td><td><span class="g2-lab">Psoriasis</span>Present; present</td></tr>
<tr><th scope="row">Turnover</th><td><span class="g2-lab">Dandruff</span>Slowest</td><td><span class="g2-lab">Seborrheic dermatitis</span>Second fastest</td><td><span class="g2-lab">Psoriasis</span>Fastest</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Dandruff and seborrheic dermatitis: cause and who gets it</h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Dandruff <span class="g2-src">(SD 8; T@84375 11/10)</span></caption>
<tbody>
<tr><th scope="row">Cause</th><td>Malassezia</td></tr>
<tr><th scope="row">Inflammation</th><td>Non-inflammatory on the slide, which also says Malassezia causes mild inflammation, flaking and itching; in class she said the inflammation is secondary to scratching, not there from the start (T@84589 11/10)</td></tr>
<tr><th scope="row">Onset</th><td>Puberty onset</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table g2-kv">
<caption>Seborrheic dermatitis <span class="g2-src">(SD 11&ndash;12)</span></caption>
<tbody>
<tr><th scope="row">Cause</th><td>Malassezia</td></tr>
<tr><th scope="row">Infants</th><td>Cradle cap (&ldquo;infants, it&rsquo;s only on the scalp&rdquo;, T@90696; slide 18 still gives face care); <b>may</b> persist up to <b>30 months</b></td></tr>
<tr><th scope="row">Adults</th><td>Yellow greasy scales (exudate, crusting) on red skin: head, ears, face (itching, stinging), chest, mid-upper trunk, gluteal crease, skin folds; men &gt; women</td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Psoriasis <span class="g2-src">(SD 21, 26)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How common</th><td><b>3%</b> of the US</td></tr>
<tr><th scope="row">Age</th><td>Peaks at <b>20&ndash;30</b> and <b>50&ndash;60 years</b></td></tr>
<tr><th scope="row">Sex</th><td>No gender preference</td></tr>
<tr><th scope="row">Type</th><td>Plaque type <b>&gt;80%</b></td></tr>
<tr><th scope="row">Plaques</th><td>Plaques red-violet, at least <b>0.5 cm</b>, well demarcated, silver flaking scales</td></tr>
<tr><th scope="row">Itch</th><td>Pruritus in <b>&gt;50%</b></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Severity by BSA <span class="g2-src">(SD 31)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Severity</th><th scope="col">BSA</th></tr></thead>
<tbody>
<tr><th scope="row">Mild</th><td><b>&le; 5%</b></td></tr>
<tr><th scope="row">Moderate</th><td><b>&ge; 8%</b></td></tr>
<tr><th scope="row">Severe</th><td><b>BSA &ge; 10%</b>, PASI &ge; 10, <i>or</i> DLQI &ge; 10 on the slide (she first said 20%, then &ldquo;corrected to 10% ... follow this slide&rdquo;, T@10484 11/11; &ldquo;I only want you to know the BSA&rdquo;)</td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Dandruff case <span class="g2-tap">Show answer</span></summary><p>Malassezia; mild presentation; non-medicated shampoo <span class="g2-src">(T@81752, T@82442 11/10)</span></p></details>
<details class="g2-self"><summary>Adult and infant cases <span class="g2-tap">Show answer</span></summary><p>Seborrheic dermatitis <span class="g2-src">(T@94640, T@95306 11/10)</span></p></details>
<details class="g2-self"><summary>Psoriasis case, BSA 7% <span class="g2-tap">Show answer</span></summary><p>Mild to moderate psoriasis; &ldquo;like a 9%&rdquo; would be moderate to severe <span class="g2-src">(T@34825&ndash;35074 11/11)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p7-3">
<h3>Scaly Dermatoses · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>SD 9, 16, 18, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Dandruff and adult seborrheic dermatitis <span class="g2-src">(SD 16; T@89612 11/10)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Self-care</th><td>OTC shampoos</td></tr>
<tr><th scope="row">Refer</th><td>Seborrheic dermatitis that worsens or lasts longer than <b>7 days</b>: consult a health care provider</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Infants <span class="g2-src">(SD 18; T@95994 11/10)</span></h5>
<ul>
<li>No ketoconazole</li>
<li>No corticosteroids</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Non-prescription or prescribed</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Non-prescription</th><td>Mild to moderate scaly dermatoses can often be managed with topical non-prescription products <span class="g2-src">(SD 51)</span></td></tr>
<tr><th scope="row">Prescribed</th><td>Systemic and biologic psoriasis therapy is prescribed and often specialty <span class="g2-src">(SD 40, 47)</span></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p7-4">
<h3>Scaly Dermatoses · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>List treatment goals</b><i>SD 9, 14, 28</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Dandruff <span class="g2-src">(SD 9)</span></h5>
<ul>
<li>Reduce epidermal turnover and Malassezia</li>
<li>Minimize visible scaling and itching</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis <span class="g2-src">(SD 28)</span></h5>
<ul>
<li>Minimize plaques and scales</li>
<li>Alleviate pruritus</li>
<li>Reduce flare-ups</li>
<li>Treat associated conditions (hypertension, dyslipidemia, diabetes, depression)</li>
<li>Screen lifestyle factors (stress, smoking, obesity)</li>
<li>Counsel (stress reduction, smoking cessation)</li>
<li>Cost-effective therapy</li>
<li>Avoid adverse effects</li>
<li>Quality of life</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p7-5">
<h3>Scaly Dermatoses · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Recommend appropriate non-drug therapy</b><i>SD 15, 18, 33&ndash;34</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Seborrheic dermatitis scale softening <span class="g2-src">(SD 15)</span></h5>
<ul>
<li>Mineral or olive oil, or a cream with salicylic acid or sulfur</li>
<li>Wash seborrheic skin more often than twice daily (slide 15; she said &ldquo;wash it often&rdquo;); dishwashing liquid <i>may</i> be used on tough scale</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Infants <span class="g2-src">(SD 18)</span></h5>
<ul>
<li>Massage with baby or vegetable oil, non-medicated shampoo, soft bristle brush</li>
<li>Face: mild soap and emollient</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Psoriasis, every patient <span class="g2-src">(SD 33&ndash;34; T@11707&ndash;12577 11/11)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Lifestyle</th><td>Reduce stress, regular exercise, weight management (BMI <b>18.5&ndash;24.9</b>), moderate alcohol, stop smoking</td></tr>
<tr><th scope="row">Skin care</th><td>Moisturizers, oatmeal baths, sunscreen <b>SPF 30+</b> with UVA protection</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p7-6">
<h3>Scaly Dermatoses · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (SD 3)</span><b>Dosing frequency and maximum days; topical vs oral; onset; length of treatment; adverse effects; contraindications and interactions</b><i>SD 4, 7, 9, 16&ndash;18, 35&ndash;45</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> OTC chart <span class="g2-src">(SD 7)</span></h5>
<ul>
<li>Hydrocortisone 1% <b>not for dandruff</b></li>
<li>Sulfur <b>not for psoriasis</b></li>
</ul>
<p class="g2-p">Shampoo schedules: see Reference, &ldquo;Dr. Patel: dandruff and seborrheic dermatitis&rdquo;.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-shampoo">Reference: shampoo schedules</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis: therapy by severity</h5>
<div class="g2-ladder">
<div class="g2-rung g2-s1"><div class="g2-sev">Mild to moderate</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Order of therapy</span><ul>
<li><b>Topical agents first</b>; then topical + phototherapy (on slide 35, not spoken in class); then topical + a systemic agent</li>
<li>Systemic agent <b>last line</b></li>
<li>Non-drug care for all</li>
</ul><p><span class="g2-src">(SD 35)</span></p></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Moderate to severe</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Order of therapy</span><ul>
<li><b>Systemic agent</b> (eg MTX; &ldquo;most likely methotrexate&rdquo;) &plusmn; topical agent or phototherapy; consider a biologic early if comorbidities exist (eg psoriatic arthritis); she said the topical is always continued</li>
<li>Then a more potent systemic or a biologic</li>
<li>Biologics <b>last line</b></li>
</ul><p><span class="g2-src">(SD 37; T@14941&ndash;15451 11/11)</span></p></div>
</div></div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-sys">Reference: psoriasis systemic agents</button><button type="button" class="chip" data-jump="ref:ref-p7-bio">Reference: biologics</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Topicals <span class="g2-src">(SD 36)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Agent</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Corticosteroids</th><td><b>2&ndash;4 times daily</b> (cream or lotion by day, ointment at night); low potency for face and skin folds; limit duration (<b>&le; 4 weeks</b>) and surface area. Said in class: the most effective (T@13906 11/11)</td></tr>
<tr><th scope="row">Calcipotriene</th><td>Once or twice daily (ointment); twice daily (cream or foam)</td></tr>
<tr><th scope="row">Tazarotene, adapalene</th><td>At bedtime</td></tr>
<tr><th scope="row">Anthralin</th><td>Thick plaques only, <b>&le; 2 hours</b>, then wiped off; zinc oxide around the edges</td></tr>
<tr><th scope="row">Coal tar</th><td>Apply in the evening, wash off in the morning</td></tr>
<tr><th scope="row">Salicylic acid shampoo</th><td>For the scalp</td></tr>
<tr><th scope="row">Pimecrolimus</th><td>For intertriginous areas</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-pso">Reference: psoriasis severity and topicals</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Adult seborrheic dermatitis, first line <span class="g2-tap">Show answer</span></summary><p>Ketoconazole shampoo <span class="g2-src">(T@94640 11/10)</span></p></details>
<details class="g2-self"><summary>Infant scalp <span class="g2-tap">Show answer</span></summary><p>Massage with baby oil <span class="g2-src">(T@95994 11/10)</span></p></details>
<details class="g2-self"><summary>Psoriasis case, OTC agent <span class="g2-tap">Show answer</span></summary><p>Topical corticosteroids <span class="g2-src">(T@35288 11/11)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p7-7">
<h3>Scaly Dermatoses · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (SD 3)</span><b>Provide follow-up recommendations</b><i>SD 16, 38&ndash;39, 48, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Seborrheic dermatitis</h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Seborrheic dermatitis: refer when worse or lasting longer than</span><span class="g2-tile-num">7 days</span><span class="g2-src">(SD 16)</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis</h5>
<div class="g2-two">
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Psoriasis: contact the patient in</span><span class="g2-tile-num">1&ndash;2 weeks</span><span class="g2-src">(SD 48; T@31466, T@36225 11/11)</span></div>
</div>
<p class="g2-p">SD 51 reads &ldquo;a week after self-treatment begins&rdquo;.</p>
</div>
<div>
<table class="g2-table">
<caption>Expected response <span class="g2-src">(SD 38&ndash;39)</span></caption>
<thead><tr><th scope="col">Drug</th><th scope="col">Response</th></tr></thead>
<tbody>
<tr><th scope="row">Methotrexate</th><td><b>3&ndash;6 weeks</b></td></tr>
<tr><th scope="row">Apremilast</th><td>By <b>week 4</b></td></tr>
<tr><th scope="row">Acitretin</th><td>Maximum at <b>3&ndash;6 months</b></td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Biologics <span class="g2-src">(SD 40&ndash;41)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">TB</th><td>TB screening before and during, PPD every year</td></tr>
<tr><th scope="row">Labs</th><td>CBC and LFTs for TNF-&alpha; inhibitors</td></tr>
</tbody>
</table>
</div>
</section>

<details class="gdetails" id="gpl-p7">
<summary>Dr. Patel: Scaly dermatoses slide by slide, what the lecture adds (52 slides)</summary>
<section class="gobj" id="gobj-pl-s-1">
<h3>Dr. Patel, slide by slide &middot; Scaly dermatoses &middot; slides 1-4</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 1-4)</span><b>The objectives she read aloud and the fingertip-unit chart she said to know; the lecture opens with how the three conditions differ by presentation</b><i>Patel Scaly slide 1, 2, 3, 4</i></div>
<div class="gpt g2-block"><h5>Title slide (Patel Scaly slide 1)</h5>
<p class="g2-status"><b>Status A</b> (title or divider slide)</p>
<p>On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Learning objectives 1 to 5 (Patel Scaly slide 2)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The slide lists what a student should be able to do for dandruff, seborrheic dermatitis and psoriasis, from the patient interview through non-drug therapy. In lecture she added the reason the conditions are taught side by side: the treatments overlap, so how each one looks on the patient is what decides the plan. Objective 2 names rosacea, but no slide in this deck covers rosacea; she named dandruff, seborrheic dermatitis and psoriasis as the conditions in the lecture (rosacea teaching: not in materials).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what's gonna help you determine your treatment plan&rdquo; <span class='g2-src'>11/10 T@75337</span></p></div>
</div>
<div class="gpt g2-block"><h5>Learning objectives 6 and 7 (Patel Scaly slide 3)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> Objective 6 asks for the best treatment based on six things. She spelled out what that means for a medication: the drug name, dose, frequency and duration, then how it differs from the other options, how to counsel, what education to give, how long to treat, side effects, contraindications and interactions. For objective 7 she framed follow-up as the step after the recommendation is made: what happens once treatment has started.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what drug name, the dose, the frequency, the duration&rdquo; <span class='g2-src'>11/10 T@75904</span></p>
<p>&ldquo;differentiate between the treatment options, how to counsel the patient&rdquo; <span class='g2-src'>11/10 T@75959</span></p>
<p>&ldquo;So we made a recommendation to our patient, but what happens after their treatment?&rdquo; <span class='g2-src'>11/10 T@76274</span></p></div>
</div>
<div class="gpt g2-block"><h5>Fingertip units for topical creams, adults (Patel Scaly slide 4)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Cue and meaning.</b> The table gives the number of fingertip units (FTU) for each adult body area, and one FTU is about 0.5 g. Multiplying the FTU for an area by 0.5 g gives the amount to dispense. Worked from the slide: both soles at 1.5 FTU is about 0.75 g, and one leg including the foot at 8 FTU is about 4 g. She said this chart was introduced in the dermatitis lecture and that it comes back, so it is to be known. The adult chart is the one she asked for; the pediatric chart is a reference.</p>
<p>Slide values: scalp 3, face and neck 2.5, one hand (front and back) including fingers 1, one arm including entire hand 4, elbows 1, both soles 1.5, one foot including toes 2, one leg including foot 8, buttocks 4, knees 1, trunk both sides 14 (7 FTU each side).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;hint, please know this chart&rdquo; <span class='g2-src'>11/10 T@76469</span></p>
<p>&ldquo;adult only pediatrics is a reference&rdquo; <span class='g2-src'>11/10 T@76506</span></p>
<p>&ldquo;One fingertip unit is equal to approximately 0.5 g&rdquo; <span class='g2-src'>11/10 T@76544</span></p>
<p>&ldquo;that's how we calculate the dosage form and the amount that we dispense&rdquo; <span class='g2-src'>11/10 T@76667</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-2">
<h3>Dr. Patel, slide by slide &middot; Scaly dermatoses &middot; slides 5-7</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 5-7)</span><b>How the three conditions differ and which OTC ingredients are approved for each; she said the presentation separates them while the treatments overlap</b><i>Patel Scaly slide 5, 6, 7</i></div>
<div class="gpt g2-block"><h5>Scaly dermatoses overview (dandruff, seborrheic dermatitis, psoriasis) (Patel Scaly slide 5)</h5>
<p class="g2-status"><b>Status A</b> (title or divider slide)</p>
<p>On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Dandruff, seborrheic dermatitis and psoriasis compared (Patel Scaly slide 6)</h5>
<p class="g2-status"><b>Status B, D, E</b></p>
<p><b>Reasoning added.</b> She said appearance is what mostly separates the three. Inflammation and epidermal hyperplasia (thickening of the epidermis) are absent in dandruff and present in the other two. Dandruff is called non-inflammatory because inflammation is not part of the disease from the start: itching the scalp inflames it afterward, so it is secondary. In seborrheic dermatitis and psoriasis the inflammation is there from the beginning, whether or not the skin is irritated.</p>
<p>On turnover she placed dandruff slowest and psoriasis fastest, with seborrheic dermatitis in between.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: turnover 2 times faster than normal (dandruff), 3 times (seborrheic dermatitis), 8 times (psoriasis). Lecture: she said 2, 3 and 5 <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>; a student noted the slide says 8, and she said she would look into it. An exam written from her lecture would key only the ranking, because she said she would not ask whether it is 8 or 5.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's mostly the appearance that differentiates them&rdquo; <span class='g2-src'>11/10 T@76900</span></p>
<p>&ldquo;when the patient itches their scalp, it inflames it&rdquo; <span class='g2-src'>11/10 T@84632</span></p>
<p>&ldquo;I'm not gonna be asking you, is it 8 or 5&rdquo; <span class='g2-src'>11/10 T@83918</span></p>
<p>&ldquo;psoriasis is the fastest in terms of epidermal kinetics and dandruff is the slowest&rdquo; <span class='g2-src'>11/10 T@84106</span></p></div>
</div>
<div class="gpt g2-block"><h5>FDA-approved OTC ingredients for the three conditions (Patel Scaly slide 7)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The chart lists the percentages and forms available over the counter for each condition. Two gaps matter: hydrocortisone 1% is not used for dandruff (0.5 to 1 for seborrheic dermatitis and psoriasis), and sulfur is not used for psoriasis (2 to 5 for dandruff and seborrheic dermatitis). Pyrithione zinc comes as a rinse-off product or as a residual product that stays on the skin. In answer to a student she explained that the chart shows FDA-approved efficacy: sulfur is still sold and some patients use it, but it is not effective in psoriasis.</p>
<p>She added that the drug charts are only a guide, and that the therapeutic lecture is the reference for the medications.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that's why I say that the drug charts are a guide you guys&rdquo; <span class='g2-src'>11/10 T@83491</span></p>
<p>&ldquo;hydrocortisone 1%, not effective in dandruff, sulfur, not effective in psoriasis&rdquo; <span class='g2-src'>11/10 T@83401</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-3">
<h3>Dr. Patel, slide by slide &middot; Dandruff &middot; slides 8-10</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 8-10)</span><b>Dandruff as a fungus-driven, mostly non-inflammatory scalp condition, and treating it by severity: non-medicated shampoo for mild, medicated shampoo for moderate to severe</b><i>Patel Scaly slide 8, 9, 10</i></div>
<div class="gpt g2-block"><h5>What dandruff is and who gets it (Patel Scaly slide 8)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> The slide says dandruff is non-inflammatory yet causes mild inflammation. She resolved this: the fungus drives the shedding, flaking and itching, and the inflammation comes afterward from scratching, not from the start of the condition. Malassezia fungi on the scalp are the cause. Slide numbers: 1 to 3% of the population, puberty onset, peak in adulthood, no gender preference.</p>
<p>In a student question she added that dandruff can reach the face, but it starts on the scalp.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;inflammation's caused by the itching&rdquo; <span class='g2-src'>11/10 T@84589</span></p>
<p>&ldquo;melasia fungi is what's present on the scalp that causes the shedding&rdquo; [she said "melasia": Malassezia] <span class='g2-src'>11/10 T@79924</span></p>
<p>&ldquo;It can go down to the face, but it's formed from the scalp&rdquo; <span class='g2-src'>11/10 T@84288</span></p></div>
</div>
<div class="gpt g2-block"><h5>Dandruff treatment goals and approach by severity (Patel Scaly slide 9)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Exam cue and reasoning.</b> Severity decides the product. Mild means intermittent dandruff with mild inflammation: a non-medicated shampoo daily or every other day. Moderate to severe means daily dandruff with moderate to severe inflammation: an OTC medicated shampoo (pyrithione zinc, selenium sulfide or coal tar). Leave it on 3 to 5 minutes, rinse well, use daily for 1 week, then 2 to 3 times weekly for 2 to 3 weeks, then once weekly for control. She said pyrithione zinc is most often the main ingredient in OTC products. The goals are lowering skin turnover and the number of Malassezia fungi, less visible scaling and less itching.</p>
<p>After the dandruff case she said she would make it clear on the exam which answer is right, and while working the case she told the class to pay attention to the keywords.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I'll make it clear on the exam&rdquo; <span class='g2-src'>11/10 T@82872</span></p>
<p>&ldquo;pay attention to those keywords&rdquo; <span class='g2-src'>11/10 T@82425</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case 1: young man with intermittent white flakes (Patel Scaly slide 10)</h5>
<p class="g2-status"><b>Status C</b></p>
<p><b>Clinical example.</b> A young man has intermittent white flakes on his clothing, no itch, no oily skin or hair and a scalp that does not look inflamed. She had the class name the organism (Malassezia fungi), then the severity, then the shampoo. Intermittent flakes and no daily symptoms make this mild, so the answer is a non-medicated shampoo. A medicated shampoo with one of the listed ingredients would be chosen only for moderate to severe dandruff.</p>
<p>She tied the organism question to earlier lectures: staph was covered in the dermatitis lecture, and she asked where P. acnes had been covered, so each condition goes with its own microbe.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Intermittent white flakes, right? Not daily&rdquo; <span class='g2-src'>11/10 T@82492</span></p>
<p>&ldquo;because it's mild, non-medicated shampoo&rdquo; <span class='g2-src'>11/10 T@82685</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-4">
<h3>Dr. Patel, slide by slide &middot; Seborrheic dermatitis &middot; slides 11-14</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 11-14)</span><b>What seborrheic dermatitis is, how infants and adults present differently, what triggers it, and the goals of treatment</b><i>Patel Scaly slide 11, 12, 13, 14</i></div>
<div class="gpt g2-block"><h5>Seborrheic dermatitis: overview (Patel Scaly slide 11)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> It is an inflammatory disorder in areas of sebaceous (oil) gland activity, mainly scalp, face and chest. Like dandruff it involves the fungus, but with faster skin turnover; she called it the second fastest of the three. It has no specific cure and is neither harmful nor contagious. It affects infants (it can persist up to 30 months of age) and adults (1 to 3%), men more than women. She asked the class to link infant seborrheic dermatitis to cradle cap.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;think of the cradle cap when you think of seborrheic dermatitis&rdquo; <span class='g2-src'>11/10 T@85604</span></p>
<p>&ldquo;This is the 2nd fastest in comparison to the other two&rdquo; <span class='g2-src'>11/10 T@85387</span></p></div>
</div>
<div class="gpt g2-block"><h5>Seborrheic dermatitis presentation: infants versus adults (Patel Scaly slide 12)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> The difference between age groups is the main point she pressed. Infants have greasy or dry scaling confined to the scalp (cradle cap). Adults have yellow, greasy scale in patches or plaques on red skin and can have it on the head (ears, face, sometimes forehead), chest, mid-upper trunk, gluteal crease and skin folds, often with itching and stinging. The yellow tint separates the adult presentation from the infant one. In darker pigmentation it can show as hypopigmentation.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that yellow tint is going to be shown in an adult versus the infant&rdquo; <span class='g2-src'>11/10 T@86601</span></p>
<p>&ldquo;But infants, it's only on the scalp&rdquo; <span class='g2-src'>11/10 T@90696</span></p></div>
</div>
<div class="gpt g2-block"><h5>Increased risk and triggers for seborrhea (Patel Scaly slide 13)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> Malassezia is a yeast that grows in the sebum (skin oil); slide 11 places the condition where oil glands are active. The slide lists physical stress, fatigue and travel, zinc deficiency, change of season (worse in cold weather), HIV infection or AIDS, and Parkinson disease. She read the list and added only that the yeast grows in the sebum; she gave no extra risk factors.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's a yeast, OK? It grows in the sebum of the skin&rdquo; <span class='g2-src'>11/10 T@86705</span></p>
<p>&ldquo;can definitely worsen in colder weather&rdquo; <span class='g2-src'>11/10 T@86895</span></p></div>
</div>
<div class="gpt g2-block"><h5>Seborrheic dermatitis goals and general approach (Patel Scaly slide 14)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The goals are less inflammation and slower skin turnover, less visible redness and scaling, loosening scale and crust, stopping yeast colonization, less redness and itch, and controlling secondary infection. For the skin-care advice (avoid perfumes, aftershave, ointments and soaps) she said it matches what was taught in atopic dermatitis, so the same irritant-avoidance logic applies here.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Avoid anything that impacts the skin&rdquo; <span class='g2-src'>11/10 T@87510</span></p>
<p>&ldquo;very similar to the recommendations we talked about in atopic dermatitis&rdquo; <span class='g2-src'>11/10 T@87607</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-5">
<h3>Dr. Patel, slide by slide &middot; Seborrheic dermatitis treatment &middot; slides 15-18</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 15-18)</span><b>Removing scale, treating the yeast, calming redness and itch, and the separate infant plan, where ketoconazole and corticosteroids are not used</b><i>Patel Scaly slide 15, 16, 17, 18</i></div>
<div class="gpt g2-block"><h5>Removing scales and crust (Patel Scaly slide 15)</h5>
<p class="g2-status"><b>Status B, C, D</b></p>
<p><b>Reasoning added.</b> Scale is softened with mineral oil or olive oil, a cream with salicylic acid or sulfur, and, for infants, mostly the oils. She contrasted the washing advice with other conditions: skin is not dried out in atopic dermatitis or acne, but here it should be washed often. She said she has personal opinions about the dishwashing-liquid tip, but it comes from the guidelines, and the reason is that a thick plaque can need a harsher soap.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: seborrheic skin should be washed more often than twice daily. Lecture: she said it should be washed often and then said to exfoliate the skin twice a day (captions: "more often, than not"). An exam written from her lecture would most safely key the slide wording, because she tied the tip to the guidelines and the slide is the only exact statement of the frequency.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;in this condition, we do want to wash it often&rdquo; <span class='g2-src'>11/10 T@88383</span></p>
<p>&ldquo;they have seen a harsher soap be beneficial for these patients&rdquo; <span class='g2-src'>11/10 T@88679</span></p>
<p>&ldquo;the guidelines state it, so I'm gonna teach it to you all&rdquo; <span class='g2-src'>11/10 T@88552</span></p></div>
</div>
<div class="gpt g2-block"><h5>Decreasing fungal growth: antifungal shampoo (Patel Scaly slide 16)</h5>
<p class="g2-status"><b>Status B, C, E</b></p>
<p><b>Exam cue and reasoning.</b> Ketoconazole shampoo is first line; selenium sulfide, pyrithione zinc, ciclopirox or coal tar shampoo are second line. Leave it on 3 to 5 minutes, rinse, repeat: daily for 1 to 2 weeks, then 2 to 3 times a week for 4 weeks. Frequency is lowered only if there is improvement after 4 weeks. If the condition worsens or persists beyond 7 days a health care provider is consulted. For face and body she said antifungal creams are used, and UV light therapy lowers fungus the way it lowers bacteria in acne. She named first line as the key term in the case, with an adult patient.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Adult patient, seborrheic dermatitis, ketoconazole shampoo&rdquo; <span class='g2-src'>11/10 T@95158</span></p>
<p>&ldquo;that's when you can decrease the frequency over time&rdquo; <span class='g2-src'>11/10 T@89615</span></p>
<p>&ldquo;any signs worsen after 7 days of persistent treatment&rdquo; <span class='g2-src'>11/10 T@89687</span></p>
<p>&ldquo;to also decrease the fungus growth in general&rdquo; <span class='g2-src'>11/10 T@90217</span></p></div>
</div>
<div class="gpt g2-block"><h5>Reducing redness and itching (Patel Scaly slide 17)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> The slide pairs a corticosteroid lotion for the scalp and corticosteroid creams for other body parts (mild to potent) with moisturizing emollients after washing; ketoconazole shampoo and corticosteroid lotion are combined in therapy-resistant cases. She added three points: the product follows the location of the lesions; the age limits taught for corticosteroids in atopic dermatitis apply here; and emollients after washing apply to both infants and adults.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the presentation of the location of the lesions is how we're recommending&rdquo; <span class='g2-src'>11/10 T@92129</span></p>
<p>&ldquo;remember the age parameters that we talked about in atopic dermatitis&rdquo; <span class='g2-src'>11/10 T@91631</span></p>
<p>&ldquo;that applies to both age groups&rdquo; <span class='g2-src'>11/10 T@91950</span></p></div>
</div>
<div class="gpt g2-block"><h5>Seborrheic dermatitis treatment in infants (Patel Scaly slide 18)</h5>
<p class="g2-status"><b>Status B, C, E</b></p>
<p><b>Exam cue and reasoning.</b> For an infant: massage the scalp with baby oil or another oil, then use a non-medicated shampoo and a soft bristle brush. For severe cases only, salicylic acid 3 to 5% in olive oil or a water-soluble base. On the face, a mild soap or cleanser and a facial emollient. Do not suggest corticosteroids. Asked why salicylic acid is kept for severe cases, she gave the reason: an infant scalp has a thin layer of skin that is not fully developed, so absorption is higher and irritation more likely. Ketoconazole shampoo is also not recommended in infants. In the infant case she ruled out hydrocortisone and also nystatin ointment <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;The skin's not developed completely. The absorption rate is higher&rdquo; <span class='g2-src'>11/10 T@94424</span></p>
<p>&ldquo;Ketoconazole shampoo is not recommended in infants&rdquo; <span class='g2-src'>11/10 T@95936</span></p>
<p>&ldquo;Hydrocortisone, absolutely not&rdquo; <span class='g2-src'>11/10 T@96026</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-6">
<h3>Dr. Patel, slide by slide &middot; Seborrheic dermatitis cases &middot; slides 19-20</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 19-20)</span><b>Two worked cases that separate adult seborrheic dermatitis from dandruff and set the infant plan apart</b><i>Patel Scaly slide 19, 20</i></div>
<div class="gpt g2-block"><h5>Case 2: 35-year-old man, scalp, eyebrows and ear canal (Patel Scaly slide 19)</h5>
<p class="g2-status"><b>Status C</b></p>
<p><b>Clinical example.</b> The man has itching, redness and scaling on the scalp, eyebrows and external auditory canal, only temporary relief from OTC dandruff shampoos, greasy scalp scaling and yellowish scales in the nasolabial creases. She pointed to the key terms: greasy scaling, yellowish scales, and involvement beyond the scalp. Those make this seborrheic dermatitis, not dandruff. The first-line medicated shampoo for an adult is ketoconazole.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Key terms there, greasy, scaling, yellowish scales&rdquo; <span class='g2-src'>11/10 T@94797</span></p>
<p>&ldquo;it wasn't just his scalp, it was a few other areas of his body&rdquo; <span class='g2-src'>11/10 T@94888</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case discussion: infant with scaly scalp (Patel Scaly slide 20)</h5>
<p class="g2-status"><b>Status C</b></p>
<p><b>Clinical example.</b> A mother brings an infant a couple of weeks old with scaly scalp. The picture is cradle cap, which looks different from dandruff, so the condition is seborrheic dermatitis. Treatment is non-drug: massage with baby oil or another oil. Ketoconazole shampoo is not recommended in infants; salicylic acid shampoo is for severe cases; hydrocortisone is not used.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;The image is showing very different from dandruff, right?&rdquo; <span class='g2-src'>11/10 T@95604</span></p>
<p>&ldquo;massage scalp with baby oil or some sort of oil&rdquo; <span class='g2-src'>11/10 T@95883</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-7">
<h3>Dr. Patel, slide by slide &middot; Psoriasis background &middot; slides 21-24</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 21-24)</span><b>Who gets psoriasis, why it forms, and what makes it flare; she stressed that the condition involves immune activity and that plaque type is the most common</b><i>Patel Scaly slide 21, 22, 23, 24</i></div>
<div class="gpt g2-block"><h5>Psoriasis: how common, who, and which type (Patel Scaly slide 21)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> Psoriasis affects 3% of the US population. The slide line "Plaque type &gt; 80% of psoriasis" is a share of people who have psoriasis, not of the general population: more than 80% of all patients with psoriasis have the plaque type, which is why it is the most common. It involves adaptive and innate immunity, with T-lymphocyte-mediated inflammation, similar to atopic dermatitis but with more inflammation and a stronger immune response. Onset peaks at 20 to 30 and at 50 to 60 years. Children are infrequent (under 0.2% on the slide); she said children are mostly seen with atopic and seborrheic dermatitis. No gender preference.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So greater than 80% with that type of psoriasis&rdquo; <span class='g2-src'>11/11 T@4113</span></p>
<p>&ldquo;so 20 to 30 year olds&rdquo; <span class='g2-src'>11/11 T@3716</span></p>
<p>&ldquo;So 50 to 60-year-olds of age as well&rdquo; <span class='g2-src'>11/11 T@3778</span></p>
<p>&ldquo;We're mostly seeing children with atopic dermatitis, as well as seborrheic dermatitis&rdquo; <span class='g2-src'>11/11 T@3846</span></p></div>
</div>
<div class="gpt g2-block"><h5>Clinical presentation figure (Patel Scaly slide 22)</h5>
<p class="g2-status"><b>Status C</b></p>
<p><b>Clinical example.</b> The figure shows psoriasis on the legs, arm, back and hands, with fingernail involvement in a patient with psoriatic arthritis (panel D). She skipped through the pictures but described the range: psoriasis can be mild, moderate or severe, and the severe example covers head to toe with large plaque-type lesions. The lesions can look white or silvery, matching the earlier presentation slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;psoriasis can be very mild, moderate, and pretty severe&rdquo; <span class='g2-src'>11/11 T@4295</span></p>
<p>&ldquo;It can be very severe if not taken care of&rdquo; <span class='g2-src'>11/11 T@4166</span></p></div>
</div>
<div class="gpt g2-block"><h5>Psoriasis pathophysiology figure (Patel Scaly slide 23)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Reasoning added.</b> The figure shows immune cell activation: T cells and dendritic cells release chemokines and proinflammatory cytokines, keratinocytes multiply (hyperproliferation), and silvery scale forms. She sent the detailed mechanism to the Smith and Sikazwe lectures and asked only that students understand that immune cell activation, including T cells, is occurring in the dermis. That cycle causes the silvery scale, the inflammation and the keratinocyte overgrowth. She repeated that psoriasis has the fastest turnover of the three conditions.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;refer to Doctor Smith and Doctor Causeway's side&rdquo; [she means Dr. Sikazwe; captions spell the name differently] <span class='g2-src'>11/11 T@4644</span></p>
<p>&ldquo;that is what is causing the silvery scales as well as the inflammation&rdquo; <span class='g2-src'>11/11 T@4858</span></p></div>
</div>
<div class="gpt g2-block"><h5>Predisposing and precipitating factors (Patel Scaly slide 24)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> The slide lists genetics, skin injury (horsefly bite), viral or streptococcal skin infection, alcohol, smoking, obesity or metabolic syndrome, stress, and the drugs lithium, NSAIDs, antimalarials such as chloroquine, beta-adrenergic blockers, fluoxetine, and withdrawal of corticosteroids. She said alcohol and smoking can worsen the condition, and that obesity, diet, lifestyle and stress are factors. She did not read out the drugs; she said the list is very similar to the one in the dermatitis lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there are a few medications that also may worsen psoriasis&rdquo; <span class='g2-src'>11/11 T@5463</span></p>
<p>&ldquo;the list in terms of our dermatitis lecture, very similar&rdquo; <span class='g2-src'>11/11 T@5581</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-8">
<h3>Dr. Patel, slide by slide &middot; Psoriasis presentation &middot; slides 25-27</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 25-27)</span><b>What psoriasis looks like and how it affects the patient, including diseases that travel with it</b><i>Patel Scaly slide 25, 26, 27</i></div>
<div class="gpt g2-block"><h5>Possible comorbidities (Patel Scaly slide 25)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> Psoriasis can extend beyond the skin. Psoriatic arthritis is a common condition that may occur over time. Cardiovascular disease (myocardial infarction, stroke, peripheral vascular disease), metabolic syndrome, malignancy (T-cell lymphoma), inflammatory bowel disease (Crohn disease and ulcerative colitis), anxiety, depression and renal disease are also on the slide. She gave two reasons: the activated T-cell immune system raises lymphoma risk, and inflammatory bowel disease reflects the inflammation the body is producing.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;psoriatic arthritis is a common condition that may occur over time&rdquo; <span class='g2-src'>11/11 T@5777</span></p>
<p>&ldquo;Malignancy because of that T cell autoimmune system that's being activated&rdquo; <span class='g2-src'>11/11 T@6145</span></p>
<p>&ldquo;Think about the inflammation that's being caused by the body&rdquo; <span class='g2-src'>11/11 T@6258</span></p></div>
</div>
<div class="gpt g2-block"><h5>Signs and symptoms of plaque psoriasis: lesions and skin involvement (Patel Scaly slide 26)</h5>
<p class="g2-status"><b>Status B, D</b></p>
<p><b>Reasoning added.</b> Plaques are red-violet, well demarcated and covered by silver, flaking scale, at least 0.5 cm across. She said patients usually have several, and plaques close together look larger. They can be single lesions at predisposed places such as knees and elbows or spread widely, and the spread is measured as body surface area (BSA). Slide severity: mild at 5% BSA or less; moderate at BSA or PASI of 8 or more; severe by the rule of tens (PASI 10, DLQI 10 or BSA 10% or more).</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: severe is the rule of tens (PASI 10 or more, DLQI 10 or more or BSA 10% or more); a parenthetical line adds that some phototherapy trials used BSA of 20% or more as the lower limit. Lecture, first pass: she said severe is 20% or more. Later in the same lecture she corrected it to 10%, said earlier guidelines had said 20%, and told the class to follow the slide. An exam written from her lecture would key 10%, because she said so directly. Details on slide 31.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;You tend to have multiple of these 0.5 plaques on the body&rdquo; <span class='g2-src'>11/11 T@6797</span></p>
<p>&ldquo;that's calculated by BSA&rdquo; <span class='g2-src'>11/11 T@7120</span></p></div>
</div>
<div class="gpt g2-block"><h5>Itch and quality of life (Patel Scaly slide 27)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> More than 50% of patients have pruritus (itching), which can be severe. She added that the skin around the plaque can also itch, not only the plaque. Psoriasis can be physically debilitating and socially isolating and lowers quality of life. She ranked it: among the skin conditions in the course, psoriasis has the biggest impact on mental, physical and social health.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;more than 50% of our patients experience pruritus with psoriasis&rdquo; <span class='g2-src'>11/11 T@7698</span></p>
<p>&ldquo;the skin around the plaque may also cause irritation&rdquo; <span class='g2-src'>11/11 T@7873</span></p>
<p>&ldquo;psoriasis tends to be the worst in terms of impact on mental health&rdquo; <span class='g2-src'>11/11 T@8140</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-9">
<h3>Dr. Patel, slide by slide &middot; Psoriasis assessment &middot; slides 28-31</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 28-31)</span><b>Goals of therapy, the patient-care process, the factors that decide a plan, and how severity is set; she said age, past treatment, current medicines and severity guide the choice</b><i>Patel Scaly slide 28, 29, 30, 31</i></div>
<div class="gpt g2-block"><h5>Goals of treatment (Patel Scaly slide 28)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> Goals: clear plaques and scale, relieve itch, fewer flare-ups, treat associated conditions, screen for lifestyle factors, counsel (stress reduction, smoking cessation), cost-effective therapy, avoid side effects, and maintain quality of life. She added why flare-ups are a goal: psoriasis is chronic and returns depending on the triggers. She said chronic-disease management of hypertension, dyslipidemia, diabetes and inflammatory conditions is part of the plan, and that quality of life is the most important item.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;oftentimes it will come back depending on the factors&rdquo; <span class='g2-src'>11/11 T@8571</span></p>
<p>&ldquo;the quality of life is most important&rdquo; <span class='g2-src'>11/11 T@9355</span></p></div>
</div>
<div class="gpt g2-block"><h5>Patient care process for psoriasis (Patel Scaly slide 29)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The wheel has five steps: collect, assess, plan, implement, and follow-up (monitor and evaluate), around patient-centered care with collaborate, communicate and document. She read the steps in order as the way to approach a psoriasis patient. Objective 1 on slide 2 refers to the same patient-centered care process. In the lecture this slide follows the goals of therapy, and she used it to move into the factors that shape the plan.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;collect information, assess the information, create a plan, implement&rdquo; <span class='g2-src'>11/11 T@9458</span></p></div>
</div>
<div class="gpt g2-block"><h5>Factors to consider before choosing treatment (Patel Scaly slide 30)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Exam cue and reasoning.</b> The slide lists age and sex, socioeconomic factors, severity, location of lesions, comorbidities and past or current treatment. She said age is a large factor, cost matters because these medicines cost more than the options taught so far, and the plan depends on what the patient has already tried and is on now. Location matters, for example whether lesions are on the face. Severity is mild, moderate or severe. She did not speak about sex.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Age is huge, right?&rdquo; <span class='g2-src'>11/11 T@9640</span></p>
<p>&ldquo;cost of these medications are more expensive than the other treatment options&rdquo; <span class='g2-src'>11/11 T@9694</span></p>
<p>&ldquo;what have they tried in the past, what are they currently on&rdquo; <span class='g2-src'>11/11 T@9974</span></p>
<p>&ldquo;big things to kind of keep in mind&rdquo; <span class='g2-src'>11/11 T@14378</span></p></div>
</div>
<div class="gpt g2-block"><h5>Patient assessment: type and severity (Patel Scaly slide 31)</h5>
<p class="g2-status"><b>Status B, D, E</b></p>
<p><b>Exam cue and reasoning.</b> Plaque is the most common type. Severity is set mainly by BSA: mild is 5% or less, moderate is 8% or more, severe is 10% or more (PASI or DLQI of 10 also count). Mild ends at 5 and moderate starts at 8, so a value in between falls between the two: in her case 7% was "mild to moderate", and 9% would be between moderate and severe <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. Only BSA is to be known; PASI, PGA, PSI, itch scales and DLQI are other tools.</p>
<p>She gave the reason for knowing BSA: it is the most common measure to calculate.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide 26 prints moderate as "BSA or PASI 8% or more"; slide 31 prints "BSA &gt; 8%" with the sign underlined (at least 8%), and she said "greater than or equal to 8". For severe she first said 20% (see slide 26), then said it had been corrected to 10%. An exam written from her lecture would key mild 5% or less, moderate 8% or more, severe 10% or more.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it has been corrected to 10%&rdquo; <span class='g2-src'>11/11 T@10474</span></p>
<p>&ldquo;but I want you to follow this slide&rdquo; <span class='g2-src'>11/11 T@10564</span></p>
<p>&ldquo;I only want you to know the BSA&rdquo; <span class='g2-src'>11/11 T@10661</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-10">
<h3>Dr. Patel, slide by slide &middot; Body surface area and non-drug care &middot; slides 32-34</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 32-34)</span><b>How BSA is estimated and the lifestyle and non-drug measures given to every psoriasis patient; she said non-drug care makes a large difference in outcome</b><i>Patel Scaly slide 32, 33, 34</i></div>
<div class="gpt g2-block"><h5>Body surface area (BSA) figure (Patel Scaly slide 32)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The figure gives percent of body surface by area. Adult: head 9% (front and back), back 18%, chest 18%, each arm 9%, perineum 1%, each leg 18%. Child: head 18%, back 18%, chest 18%, each arm 9%, perineum 1%, each leg 13.5%. She explained the method: the provider takes the area covered by psoriasis and compares it as a proportion of the whole body; the larger the area covered, the higher the BSA. The same applies to children, and the result is what places the patient in mild, moderate or severe.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;they calculate a proportion to the entire body&rdquo; <span class='g2-src'>11/11 T@11082</span></p>
<p>&ldquo;the larger the area that's covered by plaque, the higher the BSA&rdquo; <span class='g2-src'>11/11 T@11457</span></p></div>
</div>
<div class="gpt g2-block"><h5>Healthy lifestyle recommendations for all psoriasis patients (Patel Scaly slide 33)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Exam cue and reasoning.</b> The slide lists reducing stress, regular exercise, weight management (BMI 18.5 to 24.9, slide only), moderate alcohol and stopping smoking. Her reason: drugs alone do not give much improvement without these changes, so smoking patients should be started on a cessation plan. She said she could not stress this enough.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I can't stress this enough&rdquo; <span class='g2-src'>11/11 T@12014</span></p>
<p>&ldquo;you may be on the right medications&rdquo; <span class='g2-src'>11/11 T@12106</span></p>
<p>&ldquo;patients do not necessarily see much of an improvement&rdquo; <span class='g2-src'>11/11 T@12198</span></p></div>
</div>
<div class="gpt g2-block"><h5>Non-pharmacologic treatments (Patel Scaly slide 34)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The slide lists oatmeal baths, moisturizers and emollients, and sunscreen (SPF 30+ with UVA protection). She said moisturizers and emollients and oatmeal baths work as they do in atopic dermatitis, and that skin should be protected from the sun. Her last phrase, about burning of the plaque and hyperpigmentation, is unclear in the captions and is not used here.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;our moisturizers, or emollients come back in play&rdquo; <span class='g2-src'>11/11 T@12345</span></p>
<p>&ldquo;Oatmeal baths, very similar to atopic dermatitis lecture&rdquo; <span class='g2-src'>11/11 T@12456</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-11">
<h3>Dr. Patel, slide by slide &middot; Psoriasis treatment algorithms &middot; slides 35-37</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 35-37)</span><b>The two treatment algorithms and the topical options; she said topical agents come first, systemic last, and non-drug therapy is given to every patient</b><i>Patel Scaly slide 35, 36, 37</i></div>
<div class="gpt g2-block"><h5>Algorithm for mild-to-moderate psoriasis (Patel Scaly slide 35)</h5>
<p class="g2-status"><b>Status B, D, E</b></p>
<p><b>Exam cue and reasoning.</b> The slide shows topical agents first; if inadequate, topical agents plus phototherapy; if inadequate, topical agents plus a systemic agent. A box on the right adds moisturizers as needed and says to continue if controlled and step down to the lowest dose or potency that keeps control. She said mild to moderate is the same group for treatment (mild BSA and moderate BSA), and that non-drug therapy is always given. Her emphasis was topical first and systemic last.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: the second step of the mild-to-moderate algorithm is topical agents plus phototherapy. Lecture: she did not mention that step; she described only topical first and systemic last, and called photochemotherapy (psoralen with UVA) the absolute last line. An exam written from her lecture would key topical first and systemic last, since that is what she said repeatedly.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;topical agents will always be utilized first&rdquo; <span class='g2-src'>11/11 T@13231</span></p>
<p>&ldquo;Systemic will be last line&rdquo; <span class='g2-src'>11/11 T@13277</span></p>
<p>&ldquo;mild to moderate psoriasis patients, topical agents first&rdquo; <span class='g2-src'>11/11 T@35286</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical therapy options for psoriasis (Patel Scaly slide 36)</h5>
<p class="g2-status"><b>Status B, C, E</b></p>
<p><b>Exam cue and reasoning.</b> Choice depends on what the patient has tried and is on now. She said no topical is better than another, but corticosteroids have been shown to be the most effective. Slide regimens: corticosteroids 2 to 4 times daily (cream or lotion by day, ointment at night; low potency for face and skin folds; limit to 4 weeks or less); calcipotriene once or twice daily (ointment) or twice daily (cream or foam); tazarotene or adapalene once daily at bedtime; anthralin on thick plaques only, 2 hours or less, with zinc oxide to protect normal skin; coal tar evening to morning; salicylic acid shampoo for scalp; pimecrolimus for intertriginous areas. She said to move on to other options if low potency was tried, potency was raised and a month or so has passed <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;corticosteroids has been shown to be the most effective&rdquo; <span class='g2-src'>11/11 T@13906</span></p>
<p>&ldquo;what they've tried in the past and what they're currently on&rdquo; <span class='g2-src'>11/11 T@13712</span></p>
<p>&ldquo;they've increased the potency over time, they've waited about a month or so&rdquo; <span class='g2-src'>11/11 T@14034</span></p></div>
</div>
<div class="gpt g2-block"><h5>Algorithm for moderate-to-severe psoriasis (Patel Scaly slide 37)</h5>
<p class="g2-status"><b>Status B, D, E</b></p>
<p><b>Exam cue and reasoning.</b> A moderate patient who has tried all topical agents, or a severe patient, moves to a systemic agent, most likely methotrexate. If a systemic agent has been used for a while, the dose can be raised or another option tried. If inadequate, the next box is a more potent systemic agent or a biologic (or, less commonly, two or more systemic agents in rotation); if that is inadequate, a biologic (if not already used) with or without other agents. The first box also says to consider a biologic early if comorbidities exist (for example psoriatic arthritis). Moisturizers are always added.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: the topical agent (with phototherapy in the first box) is marked "+/-" (optional) in the first two boxes. Lecture: she read the plus or minus as always applying the topical agent, so the topical continues when a systemic is added. An exam written from her lecture would key that the topical is continued, because she said so explicitly.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Most likely methotrexate, but there are some other options available&rdquo; <span class='g2-src'>11/11 T@14931</span></p>
<p>&ldquo;last line for these patients is a biologic agent&rdquo; <span class='g2-src'>11/11 T@15441</span></p>
<p>&ldquo;you're always going to apply that topical agent&rdquo; <span class='g2-src'>11/11 T@15185</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-12">
<h3>Dr. Patel, slide by slide &middot; Systemic agents &middot; slides 38-39</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 38-39)</span><b>The oral and systemic drug options and what decides between them; she said these are options chosen by the patient, not first, second and third line</b><i>Patel Scaly slide 38, 39</i></div>
<div class="gpt g2-block"><h5>Systemic options: apremilast, tofacitinib, acitretin (Patel Scaly slide 38)</h5>
<p class="g2-status"><b>Status B, C, D, E</b></p>
<p><b>Exam cue and reasoning.</b> Apremilast (Otezla), a PDE-4 blocker: 30 mg twice a day reached in the first week, response by week 4, side effects nausea, vomiting, diarrhea, depression and weight loss; once daily dosing with renal impairment (slide only). Tofacitinib (Xeljanz), a JAK inhibitor: an option after methotrexate failure; immunosuppressive with a black box warning, so the safety profile matters. Acitretin, an oral retinoid: maximum response 3 to 6 months; not for women who are pregnant or planning pregnancy; the slide adds not to drink alcohol and to avoid pregnancy for 3 years after stopping (slide only). She said to refer back to the dermatitis slides for the classes.</p>
<p>She said the choice depends on age, safety profile and immune status.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: "Dose titration to max 30 mg BID over first week". Lecture: she said 30 mg twice a day for the first week. Both reach 30 mg twice daily; a question on the target dose is keyed 30 mg BID.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;These are options for patients based on what is most appropriate&rdquo; <span class='g2-src'>11/11 T@16696</span></p>
<p>&ldquo;pregnant or planning to be pregnant, not an option&rdquo; <span class='g2-src'>11/11 T@16405</span></p>
<p>&ldquo;refer back to my dermatitis slides&rdquo; <span class='g2-src'>11/11 T@16947</span></p></div>
</div>
<div class="gpt g2-block"><h5>Methotrexate, cyclosporine and abatacept (Patel Scaly slide 39)</h5>
<p class="g2-status"><b>Status B, C, D, E</b></p>
<p><b>Exam cue and reasoning.</b> Methotrexate: response in 3 to 6 weeks, must be given with folic acid, monitor CBC and LFTs, hepatotoxicity is the most common problem, worse with alcohol; it works for psoriasis and psoriatic arthritis. Cyclosporine: under 4 months because of nephrotoxicity; many interactions; contraindicated in untreated hypertension, systemic malignancy or infection; higher risk in elderly (hypertension). Abatacept (Orencia): subcutaneous, screen for TB, interactions with live vaccines (the slide also lists COPD). Cyclosporine is dosed on actual body weight, but she said she does not want the dosing known, only that it is an option. For picking one, she said to use the patient safety profile and age, for example choosing a drug that does not worsen liver disease in a patient with cirrhosis.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Methotrexate: she said it "tends to be first line, most affordable", and also that systemic options are not first, second or third line. Slide 37 names methotrexate (eg, MTX) in the first box. An exam written from her lecture would key methotrexate as the usual first systemic agent, and ask for the patient factor that changes the choice.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it is very important that we administer folic acid with methotrexate&rdquo; <span class='g2-src'>11/11 T@17204</span></p>
<p>&ldquo;hepatoxicity tends to be the most common with this medication class&rdquo; <span class='g2-src'>11/11 T@17398</span></p>
<p>&ldquo;less than 4 months is what's recommended&rdquo; <span class='g2-src'>11/11 T@17734</span></p>
<p>&ldquo;I don't want you to know dosing&rdquo; <span class='g2-src'>11/11 T@17887</span></p>
<p>&ldquo;we would look for a medication that doesn't necessarily worsen that&rdquo; <span class='g2-src'>11/11 T@18986</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-13">
<h3>Dr. Patel, slide by slide &middot; Biologic agents &middot; slides 40-43</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 40-43)</span><b>Biologic classes, names and safety; she said to know generic names, brand names, class and the bolded items, and to monitor for infection</b><i>Patel Scaly slide 40, 41, 42, 43</i></div>
<div class="gpt g2-block"><h5>Biologics key points (Patel Scaly slide 40)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning and example.</b> Biologics are specialty medicines that need special monitoring by clinical pharmacists and providers, very often, at least every 4 weeks <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. A PPD is the TB test: it is injected into the epidermis, and if the patient reacts, the response is read as positive or negative. No live vaccines; screen for TB before and during therapy and do a PPD annually; stop for an active infection, including flu, cold and COVID. Common effects: injection-site reaction, headache, rhinitis, upper respiratory infection. Serious: infections, hypersensitivity, lymphoma and other malignancy, and new or worse heart failure with TNF-alpha inhibitors. Her reason for the infection risk: the drug lowers the inflammatory and immune response the body normally has, so infection risk rises, which is why live vaccines are avoided and active infection stops the drug.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;no live vaccines are recommended with these medications&rdquo; <span class='g2-src'>11/11 T@19621</span></p>
<p>&ldquo;increasing the risk of infections is going to occur&rdquo; <span class='g2-src'>11/11 T@20793</span></p>
<p>&ldquo;So that's including flu, cold, COVID&rdquo; <span class='g2-src'>11/11 T@20108</span></p>
<p>&ldquo;very often, at least every 4 weeks&rdquo; <span class='g2-src'>11/11 T@19564</span></p></div>
</div>
<div class="gpt g2-block"><h5>TNF-alpha inhibitors (Patel Scaly slide 41)</h5>
<p class="g2-status"><b>Status B, C, E</b></p>
<p><b>Exam cue and reasoning.</b> Adalimumab (Humira), etanercept (Enbrel), infliximab (Remicade), golimumab (Simponi), certolizumab (Cimzia). Do PPD yearly, screen for hepatitis B, monitor CBC and LFTs. Do not use with live vaccines, a personal or first-degree family history of demyelinating disease or multiple sclerosis, or congestive heart failure. She said congestive heart failure is a complete contraindication for TNF-alpha drugs and repeated it on purpose. Humira, Enbrel and Remicade are the most commonly prescribed <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;recognize the generic names, recognize the brand names&rdquo; <span class='g2-src'>11/11 T@21649</span></p>
<p>&ldquo;congestive heart failure patients completely contraindicated in TNF alpha&rdquo; <span class='g2-src'>11/11 T@22238</span></p>
<p>&ldquo;exactly what's bolded on the slide, very important for you to know&rdquo; <span class='g2-src'>11/11 T@22407</span></p></div>
</div>
<div class="gpt g2-block"><h5>Interleukin inhibitors (Patel Scaly slide 42)</h5>
<p class="g2-status"><b>Status B, C, D, E</b></p>
<p><b>Exam cue and reasoning.</b> Ustekinumab (Stelara), IL-12 and IL-23: avoid in active TB, no live vaccines, monitor PPD, CBC, signs of infection and Crohn disease symptoms; it interacts with cyclosporine and warfarin (levels are monitored). Tildrakizumab (Ilumya) and risankizumab (Skyriza), IL-23; guselkumab (Tremfya), IL-23. Secukinumab (Cosentyx), ixekizumab (Taltz) and brodalumab (Siliq), IL-17A: Cosentyx is avoided in Crohn disease; Siliq has a black box warning for suicide risk and a REMS program. Doses are on the slide only. She said different drugs in one class have slightly different cautions, and that interleukin drugs act on inflammation, which is why inflammatory bowel disease occurs more often in this class. Skyriza is the most commonly prescribed IL-23 drug <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>; the captions garble Siliq.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: Cosentyx - avoid in Crohn disease; the black box warning is listed under brodalumab (Siliq). Lecture: in answer to a student she called the Crohn disease caution for Cosentyx a black box warning. An exam written from her lecture would key the slide: Siliq has the boxed suicide warning, and Cosentyx is avoided in Crohn disease.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;they're gonna have slightly different cautions&rdquo; <span class='g2-src'>11/11 T@27008</span></p>
<p>&ldquo;know the generic name, know the brand name&rdquo; <span class='g2-src'>11/11 T@23689</span></p>
<p>&ldquo;Anything that's bolded&rdquo; <span class='g2-src'>11/11 T@23923</span></p></div>
</div>
<div class="gpt g2-block"><h5>Safety considerations for biologics (Patel Scaly slide 43)</h5>
<p class="g2-status"><b>Status B, E</b></p>
<p><b>Exam cue and reasoning.</b> All biologics: serious infections including TB, malignancy and lymphoma, anaphylaxis. Anti-TNFs: heart failure worsening, demyelinating disease, hepatitis B reactivation, cytopenias, lupus-like syndrome. Anti-ILs: inflammatory bowel disease and worsening depression. Screen for latent TB, avoid live vaccines, test for hepatitis B before starting; liver function and lipids at the clinician's discretion. She said patients can be vaccinated while on a biologic, just not with a live vaccine, and that the main labs are LFTs, CBC and TB monitoring.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;They can be vaccinated, but just not a live vaccine&rdquo; <span class='g2-src'>11/11 T@25379</span></p>
<p>&ldquo;the main ones tend to be LFTs, CBCs, monitoring for TB&rdquo; <span class='g2-src'>11/11 T@25766</span></p>
<p>&ldquo;the biggest things to remember, to screen for and monitor appropriately&rdquo; <span class='g2-src'>11/11 T@25062</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-14">
<h3>Dr. Patel, slide by slide &middot; Photochemotherapy, alternatives and cost &middot; slides 44-47</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 44-47)</span><b>The last-line light therapy, complementary options, and cost; she said photochemotherapy is the absolute last line for severe refractory psoriasis</b><i>Patel Scaly slide 44, 45, 46, 47</i></div>
<div class="gpt g2-block"><h5>Photochemotherapy (PUVA): side effects and efficacy (Patel Scaly slide 44)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> PUVA is oral psoralens plus UVA light, with about 90% efficacy on the slide. Side effects: serious burns, blistering, peeling, itching, nausea, possible increase in some cancers (basal cell and melanoma) and photoaging. She called it the absolute last line, partly because of the UV radiation, and explained that the effect reaches below the epidermis into the dermis, where psoriasis forms, which is why the side effects are severe. The slide also says a skin biopsy is needed to confirm the diagnosis (slide only).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it is absolute last line, partly because of the UV radiation&rdquo; <span class='g2-src'>11/11 T@28240</span></p>
<p>&ldquo;90% do respond well, but it is UVA light&rdquo; <span class='g2-src'>11/11 T@28434</span></p>
<p>&ldquo;goes beyond the epidermis, and that is why the side effects are quite severe&rdquo; <span class='g2-src'>11/11 T@29080</span></p></div>
</div>
<div class="gpt g2-block"><h5>Photochemotherapy: mechanism and use (Patel Scaly slide 45)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> Psoralen cross-links with DNA in the presence of UVA light, which changes the immune response in the skin and lymphocytes. She said the treatment targets the dermis, where the whole process of psoriasis happens, so it is reserved for severe, refractory psoriasis. The captions render psoralen as "porcelain".</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what we're targeting is that dermis&rdquo; <span class='g2-src'>11/11 T@28966</span></p>
<p>&ldquo;This is only for our severe refractory psoriasis patients&rdquo; <span class='g2-src'>11/11 T@29158</span></p></div>
</div>
<div class="gpt g2-block"><h5>Integrative and alternative medicine (Patel Scaly slide 46)</h5>
<p class="g2-status"><b>Status B</b></p>
<p><b>Reasoning added.</b> The slide lists traditional Chinese medicine, herbal therapies (aloe vera, St. John's wort topical cream, which is photosensitizing, and Mahonia aquafolium 10%), fish oil and curcumin as adjuvants, a gluten-free diet for some, and stress reduction and hypnosis. She grouped them as options used along with drug therapy and returned to stress as a factor and to the non-drug measures; she did not read the herbal items.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;other options that patients can utilize along with their medication therapies&rdquo; <span class='g2-src'>11/11 T@29746</span></p>
<p>&ldquo;stress was a huge factor&rdquo; <span class='g2-src'>11/11 T@29541</span></p></div>
</div>
<div class="gpt g2-block"><h5>Pharmacoeconomics of psoriasis treatment (Patel Scaly slide 47)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> Cost items are the drug, administration, monitoring, adverse effects, failed treatment and days off work; the slide says cost can be significant ($1000s), even with insurance. She added that topicals are usually more affordable, and that moderate to severe disease (systemic and biologic) is what drives the cost. Insurance coverage is limited, so specialty pharmacies and dermatology clinical pharmacists help with prior authorizations, manufacturer coupons and assistance programs.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Topical agents usually tends to be a little bit more affordable&rdquo; <span class='g2-src'>11/11 T@30435</span></p>
<p>&ldquo;Insurance again is very limited in covering these medications&rdquo; <span class='g2-src'>11/11 T@30131</span></p>
<p>&ldquo;the only way that we're able to get the medication approved&rdquo; <span class='g2-src'>11/11 T@31309</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-s-15">
<h3>Dr. Patel, slide by slide &middot; Monitoring, education and case &middot; slides 48-52</h3>
<div class="gbar"><span>What the lecture adds (Patel Scaly 48-52)</span><b>Follow-up, patient education, a worked psoriasis case, and the closing points; she said follow-up is 1 to 2 weeks and that history and prior response guide the choice</b><i>Patel Scaly slide 48, 49, 50, 51, 52</i></div>
<div class="gpt g2-block"><h5>Monitor and evaluate (Patel Scaly slide 48)</h5>
<p class="g2-status"><b>Status B, C</b></p>
<p><b>Reasoning added.</b> Follow up with the patient or caregiver in 1 to 2 weeks, check that monitoring for effects and side effects is in place (for example lab tests), reinforce preventive measures including continued maintenance therapy, connect the patient to other resources (for example a psychologist for stress reduction) and collaborate with the care team. She added that when a patient starts a new medicine they need to be taught how to give it, the side effects, the comorbidities and how often to see the provider.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;within 1 to 2 weeks, the patient can definitely contact the provider&rdquo; <span class='g2-src'>11/11 T@31438</span></p>
<p>&ldquo;we need to educate them in terms of how to administer the medication&rdquo; <span class='g2-src'>11/11 T@32700</span></p></div>
</div>
<div class="gpt g2-block"><h5>Patient education: psoriasis (Patel Scaly slide 49)</h5>
<p class="g2-status"><b>Status C, E</b></p>
<p><b>Cue and example.</b> The slide tells students to fully inform patients and caregivers of the benefits and risks of the options and lists aad.org and psoriasis.org. She said many resources exist because there is no cure and many treatments exist, and told the class to know what would be tried first for mild to moderate and for moderate to severe patients, plus the biologic cautions and contraindications.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;partly because we haven't found a cure for it&rdquo; <span class='g2-src'>11/11 T@33427</span></p>
<p>&ldquo;Know exactly what we would trial with a mild to moderate patient&rdquo; <span class='g2-src'>11/11 T@33667</span></p></div>
</div>
<div class="gpt g2-block"><h5>Case: 52-year-old woman with elbow plaques (Patel Scaly slide 50)</h5>
<p class="g2-status"><b>Status C</b></p>
<p><b>Clinical example.</b> The patient has two plaques of about 2 cm on the ulnar surface of each elbow with silvery scales, new over a week; takes enalapril/HCTZ; coal tar and steroid creams a couple of months with good results 15 years ago; no known drug allergies; BSA 7%. The class chose mild to moderate: 7% lies between the mild and moderate BSA values; 9% would sit between moderate and severe <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. The most appropriate OTC product is a topical corticosteroid, in line with topical first and systemic after. She did not say the old good response decided it; her conclusion slide lists prior response to treatment as a basis for choosing a product. Whether enalapril/HCTZ matters was not discussed (not in materials).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;7% is in between that mild BSA score&rdquo; <span class='g2-src'>11/11 T@34899</span></p>
<p>&ldquo;like a 9%, right? So in between that moderate as well as severe&rdquo; <span class='g2-src'>11/11 T@35034</span></p>
<p>&ldquo;Good. Topical corticosteroids&rdquo; <span class='g2-src'>11/11 T@35242</span></p></div>
</div>
<div class="gpt g2-block"><h5>Conclusions (Patel Scaly slide 51)</h5>
<p class="g2-status"><b>Status B, D, E</b></p>
<p><b>Exam cue and reasoning.</b> Mild to moderate scaly dermatoses are often managed with non-prescription topical products. Choice is based on prior response and risks versus benefits; education covers topical and oral use. She summarized the topical products as first line, always considering the patient history, and said the reason to teach cautions and contraindications is that patients have a right to understand what is recommended.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: follow-up should be a week after self-treatment begins. Lecture: she said 1 to 2 weeks after self-treatment begins, and slide 48 also says 1 to 2 weeks. An exam written from her lecture would key 1 to 2 weeks for psoriasis follow-up.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;mostly managed by topical non-prescription products&rdquo; <span class='g2-src'>11/11 T@35528</span></p>
<p>&ldquo;that 1 to 2 weeks after that self-treatment begins&rdquo; <span class='g2-src'>11/11 T@36180</span></p></div>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Scaly slide 52)</h5>
<p class="g2-status"><b>Status A</b> (title or divider slide)</p>
<p>On the slide and complete; nothing added in lecture.</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p8o">Outdoor Exposure Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">OE = Patel_Outdoor-Exposures-Student.pdf, slide = PDF page; T@ = place in the 11/12 transcript; PollEv = her polls of 11/12. Her seven objectives (OE 3), one section each.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;4 to 5 questions per lecture hour is how we calculate it out&rdquo; (T@1239 11/12). &ldquo;Multiple choice, select all and then fill in the blank for my portion. Fill in the blank is calculations&rdquo; (T@96227 11/12).</li><li>Adult fingertip units: &ldquo;It&rsquo;s come back 3 times now, so make sure you practice calculations with this only adult conversion chart&rdquo; (OE 5; T@1737 11/12).</li><li>&ldquo;Pay attention to the age of the patient. Pay attention to certain key facts like we practice [in] Poll Everywhere&rdquo; (T@45397 11/12); &ldquo;make note of the certain duration of time&rdquo; (T@20438 11/12).</li><li>Not asked: repellent ingredients (T@11557 11/12); types of mosquito (T@13776 11/12); doses for the flea-borne diseases (T@15070 11/12); the antivenin protocol on OE 59 (T@42049 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8o-1">
<h3>Outdoor Exposures · Objective 1: which exposure is it?</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Determine if the patient has an insect bite, sting, plant dermatitis, lice, scabies, envenomated snake bite or rabies exposure by typical signs and symptoms and patient history</b><i>OE 8, 10, 20, 27&ndash;28, 42, 50, 52, 58, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Signs and history by exposure</h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Exposure</th><th scope="col">Signs and history</th></tr></thead>
<tbody>
<tr><th scope="row">Plant dermatitis</th><td>Itching, then erythema, then vesicles and papules; small blisters in a line; rash may appear <b>2&ndash;48 hours</b> after contact with poison ivy, oak or sumac, lasting <b>1&ndash;3 weeks</b> <span class="g2-src">(OE 8, 10)</span></td></tr>
<tr><th scope="row">Insect bite</th><td>Mosquitoes, fleas, bedbugs, ticks, chiggers; <b>nonvenomous</b>; mild pruritus, erythema, papules <span class="g2-src">(OE 20)</span></td></tr>
<tr><th scope="row">Insect sting</th><td>Bees, wasps, yellow jackets, hornets, fire ants; <b>venomous</b>; pain, pruritus, irritation <span class="g2-src">(OE 20)</span></td></tr>
<tr><th scope="row">Vector-borne disease</th><td>Fever, headache, myalgias, rash <b>2&ndash;14 days</b> after a tick bite; murine typhus: rash from the trunk to the arms and legs <b>5&ndash;6 days</b> after the first symptoms <span class="g2-src">(OE 27&ndash;28)</span></td></tr>
<tr><th scope="row">Head lice</th><td>Itching, scratch marks, live moving lice, nits within <b>4 mm</b> of the scalp; shared personal items <span class="g2-src">(OE 42, 48)</span></td></tr>
<tr><th scope="row">Scabies</th><td>Inflammation and itching, often on fingers, wrists, buttocks, armpits, skin folds; needs prolonged physical contact <span class="g2-src">(OE 50)</span></td></tr>
<tr><th scope="row">Spider</th><td><b>Brown recluse:</b> fever, blood in urine, rash, joint pain within <b>48 hours</b>, necrosis. <b>Black widow:</b> abdominal pain like appendicitis, muscle pain, sweating, swollen eyelids <span class="g2-src">(OE 52)</span></td></tr>
<tr><th scope="row">Pit viper</th><td>Graded minimal, moderate or severe by local, systemic and coagulation signs <span class="g2-src">(OE 58)</span></td></tr>
<tr><th scope="row">Rabies exposure</th><td>Most often a bite (raccoons, bats, foxes, skunks, cats, dogs); rarely a scratch, abrasion, open wound or mucous membrane contaminated with saliva or other infectious material (such as brain tissue) from a rabid animal <span class="g2-src">(OE 62)</span></td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Pay attention to what insects fall under the bites versus the stings&rdquo; <span class="g2-src">(T@10123 11/12)</span></p>
<p class="g2-said"><span class="g2-k">Said in class</span>Pit viper grades: &ldquo;local, systemic and coagulation, minimum, moderate, and severe&rdquo; <span class="g2-src">(T@41933 11/12)</span></p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-bites">Reference: bites and stings</button><button type="button" class="chip" data-jump="ref:ref-p8-venom">Reference: spiders, snakes, rabies</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8o-2">
<h3>Outdoor Exposures · Objective 2: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>OE 12, 16, 31, 36, 40, 44, 53, 56, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant dermatitis, refer <span class="g2-src">(OE 16)</span></h5>
<ul>
<li>No improvement after <b>7 days</b></li>
<li>Worse</li>
<li>A large area of the face or swollen eyelids</li>
<li>Genitalia</li>
<li>Secondary infection</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Bites, refer <span class="g2-src">(OE 31, 40)</span></h5>
<ul>
<li>Symptoms after <b>7 days</b> of treatment or worse during it</li>
<li>A secondary infection: fever, joint pain, lymph node enlargement, neurologic symptoms</li>
<li>A suspected vector-borne disease</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings, emergency care <span class="g2-src">(OE 36)</span></h5>
<ul>
<li>A severe reaction history</li>
<li>Hives, dizziness, nausea or vomiting, difficulty breathing at any time after the sting</li>
</ul>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-bites">Reference: bites and stings</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Under 2 years <span class="g2-src">(OE 12, 25, 39)</span></h5>
<p class="g2-p">No hydrocortisone, local anesthetic or counterirritant.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Lice, not self-care <span class="g2-src">(OE 44)</span></h5>
<div class="g2-two">
<div>
<ul>
<li>No live lice seen</li>
<li>Allergy to chrysanthemums, ragweed or an ingredient</li>
<li>Secondary skin infection</li>
<li>Eyelids or eyebrows</li>
<li>Pregnancy or breast-feeding</li>
<li>Active tumors</li>
</ul>
</div>
<div>
<p class="g2-sub">Age</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Pyrethrins: not self-care under</span><span class="g2-tile-num">2 years</span></div>
<div class="g2-tile"><span class="g2-tile-label">Permethrin: not self-care under</span><span class="g2-tile-num">2 months</span></div>
</div>
</div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Never self-care <span class="g2-src">(OE 53, 56, 62)</span></h5>
<ul>
<li>Venomous spider bite</li>
<li>Snake bite (poison control, transport to a medical facility)</li>
<li>Rabies exposure (referral for prophylaxis)</li>
</ul>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>A hunter with symptoms after a tick exposure <span class="g2-tap">Show answer</span></summary><p>Immediate medical referral (not a cold and flu product, not watching for 3&ndash;5 days) <span class="g2-src">(T@21518 11/12)</span></p></details>
<details class="g2-self"><summary>Wasp or bee sting with hives and swelling <span class="g2-tap">Show answer</span></summary><p>Immediate referral to the emergency room <span class="g2-src">(T@23898 11/12)</span></p></details>
<details class="g2-self"><summary>When is OTC lice treatment not appropriate <span class="g2-tap">Show answer</span></summary><p>&ldquo;Pay attention to the age category&rdquo; <span class="g2-src">(T@33447 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-3">
<h3>Outdoor Exposures · Objective 3: treatment goals</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Apply treatment goals to recommendations</b><i>OE 11, 23, 35, 42, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant dermatitis <span class="g2-src">(OE 11)</span></h5>
<ul>
<li>Treat the inflammation</li>
<li>Relieve itching and excessive scratching</li>
<li>Relieve the debris from oozing, crusting and scaling</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Insect bites <span class="g2-src">(OE 23)</span></h5>
<ul>
<li>Relieve symptoms</li>
<li>Prevent secondary bacterial infections</li>
<li>Minimize medication adverse effects</li>
<li>Identify and eradicate transmissible diseases</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings <span class="g2-src">(OE 35)</span></h5>
<ul>
<li>Relieve itching and pain</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Lice <span class="g2-src">(OE 42)</span></h5>
<ul>
<li>Kill adult and nymph lice</li>
<li>Remove eggs and nits</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<ul>
<li>Kill the mites and eggs</li>
<li>Reduce symptoms</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8o-4">
<h3>Outdoor Exposures · Objective 4: non-drug therapy</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Recommend appropriate non-drug therapy</b><i>OE 9, 14, 21, 24, 35, 38, 43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant <span class="g2-src">(OE 9, 11, 14)</span></h5>
<div class="g2-two">
<div>
<ul>
<li>Protective clothing and gloves</li>
<li>After exposure remove urushiol as soon as possible, large volumes of water, then soap and water including under the nails</li>
<li>Cool soaks</li>
<li>Colloidal oatmeal bath <b>15&ndash;20 minutes twice daily</b></li>
</ul>
</div>
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Urushiol enters the skin within</span><span class="g2-tile-num">10 minutes</span><span class="g2-src">(OE 8)</span></div>
</div>
</div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-plant">Reference: plant dermatitis</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Bites</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Bites and tick <span class="g2-src">(OE 24)</span></p>
<ul>
<li>Ice pack promptly</li>
<li>No scratching, nails trimmed</li>
<li>No rough clothing over the bite</li>
<li><b>Tick:</b> tweezers at the head, pull gently, clean with rubbing alcohol, keep the tick in a plastic bag</li>
</ul>
</div>
<div>
<p class="g2-sub">Prevention <span class="g2-src">(OE 21)</span></p>
<ul>
<li>Repellent</li>
<li>Covered skin</li>
<li>Pant legs cuffed into socks</li>
<li>No standing water</li>
</ul>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings <span class="g2-src">(OE 35, 38)</span></h5>
<ul>
<li>Remove the stinger and venom sac without squeezing</li>
<li>Soap and water</li>
<li>Ice or a cold pack</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Lice <span class="g2-src">(OE 43)</span></h5>
<ul>
<li>FDA-approved nit comb</li>
<li>No shared combs, brushes, towels, hats</li>
<li>Clothing, bedding, brushes and combs washed in hot water</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8o-5">
<h3>Outdoor Exposures · Objective 5: recommend the best treatment</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Dosing frequency and max days of use; length of treatment; onset; adverse effects; contraindications and interactions</b><i>OE 5, 12&ndash;15, 25, 27&ndash;30, 39, 45, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Topical OTC chart <span class="g2-src">(OE 12&ndash;13)</span></h5>
<p class="g2-p">The class, the condition and the comment for each <span class="g2-src">(T@6763 11/12)</span>.</p>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Diphenhydramine cream</th><td>Not on plant dermatitis, sunburn, chicken pox or broken skin</td></tr>
<tr><th scope="row">The &ldquo;caines&rdquo;</th><td>Not under occlusion or on broken skin; methemoglobinemia</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-otc">Reference: topical OTC chart</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Plant dermatitis <span class="g2-src">(OE 12&ndash;15)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Presentation</th><th scope="col">Treatment</th></tr></thead>
<tbody>
<tr><th scope="row">Itch</th><td>An oral antihistamine</td></tr>
<tr><th scope="row">Dry lesions</th><td>An anesthetic or a counterirritant (dry only); hydrocortisone (wet or dry)</td></tr>
<tr><th scope="row">Weeping lesions</th><td>An astringent (aluminum acetate); hydrocortisone is also listed for wet or dry</td></tr>
<tr><th scope="row">Severe</th><td>Oral corticosteroids; topical corticosteroids suit any presentation</td></tr>
</tbody>
</table>
<p class="g2-p"><b>No</b> topical antihistamine or topical antibiotic.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-plant">Reference: plant dermatitis</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Bites and stings <span class="g2-src">(OE 25, 39)</span></h5>
<p class="g2-p">Any one or a combination of: protectant (can be used under 2 years), hydrocortisone, anesthetic, counterirritant, oral antihistamine.</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Anesthetics and counterirritants: how often</span><span class="g2-tile-num">3&ndash;4 times daily</span></div>
<div class="g2-tile"><span class="g2-tile-label">Anesthetics and counterirritants: not longer than</span><span class="g2-tile-num">7 days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Antibiotic by disease <span class="g2-src">(OE 27&ndash;30)</span></h5>
<div class="g2-two">
<table class="g2-table">
<thead><tr><th scope="col">Disease</th><th scope="col">Antibiotic</th></tr></thead>
<tbody>
<tr><th scope="row">Murine typhus</th><td>Doxycycline</td></tr>
<tr><th scope="row">Lyme prophylaxis for a high-risk bite (Ixodes tick, high endemic area, attached over <b>36 hours</b>), within <b>72 hours</b> of detaching the tick</th><td>Doxycycline <b>200 mg once</b> (adult; child 4.4 mg/kg up to 200 mg)</td></tr>
<tr><th scope="row">Rickettsial fevers</th><td>Doxycycline</td></tr>
<tr><th scope="row">STARI</th><td>IDSA: no antibiotic recommendation</td></tr>
</tbody>
</table>
<table class="g2-table">
<caption>Erythema migrans</caption>
<thead><tr><th scope="col">Antibiotic</th><th scope="col" class="g2-n">Days</th></tr></thead>
<tbody>
<tr><td>Doxycycline</td><td class="g2-n">10</td></tr>
<tr><td>Amoxicillin</td><td class="g2-n">14</td></tr>
<tr><td>Cefuroxime axetil</td><td class="g2-n">14</td></tr>
<tr><td>Azithromycin (second line)</td><td class="g2-n">7</td></tr>
</tbody>
</table>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-vector">Reference: antibiotic by disease</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Lice <span class="g2-src">(OE 45)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col" class="g2-n">Age</th></tr></thead>
<tbody>
<tr><td>Pyrethrins and malathion</td><td class="g2-n">over 2 years</td></tr>
<tr><td>Permethrin and dimethicone</td><td class="g2-n">over 2 months</td></tr>
<tr><td>Ivermectin, benzyl alcohol, spinosad</td><td class="g2-n">over 6 months</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<p class="g2-p">A list of options with no first, second or third line <span class="g2-src">(T@35653 11/12)</span>.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">7.</span> Quantity <span class="g2-src">(OE 5)</span></h5>
<p class="g2-formula"><span class="g2-k">Formula</span>Grams = fingertip units &times; 0.5 g &times; applications a day &times; days</p>
<p class="g2-p">Rounded up to the tube size.</p>
<details class="g2-self"><summary>Her poll, hydrocortisone 1% to both feet twice daily for 3 days <span class="g2-tap">Show answer</span></summary><p><b>15 grams</b> <span class="g2-src">(T@1904 11/12)</span></p></details>
<div class="g2-btns"><button type="button" class="g2-primary" onclick="show('ftu')">Practice fingertip-unit calculations</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Poison ivy itch <span class="g2-tap">Show answer</span></summary><p>Diphenhydramine by mouth (&ldquo;any oral antihistamine&rdquo;, T@9933 11/12); not the aluminum acetate compress, not diphenhydramine 2% cream.</p></details>
<details class="g2-self"><summary>Poison ivy, to reduce weeping <span class="g2-tap">Show answer</span></summary><p>Aluminum acetate <span class="g2-src">(T@9484 11/12)</span></p></details>
<details class="g2-self"><summary>Bedbug itch, neomycin allergy <span class="g2-tap">Show answer</span></summary><p>Oral diphenhydramine; not witch hazel, not Neosporin <span class="g2-src">(T@19887 11/12)</span></p></details>
<details class="g2-self"><summary>Head lice, 10 years old <span class="g2-tap">Show answer</span></summary><p>Permethrin; not malathion, not lindane <span class="g2-src">(T@33250 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-6">
<h3>Outdoor Exposures · Objective 6: monitoring and follow-up</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Provide monitoring and follow-up recommendations</b><i>OE 13, 16, 31, 36, 39, 47, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Self-care limit <span class="g2-src">(OE 13, 16, 31, 36, 39)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">The self-care limit for plant dermatitis, bites, stings and topical antibiotics is</span><span class="g2-tile-num">Seven days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Lice <span class="g2-src">(OE 47)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Repeat</th><td>Repeat in <b>7 to 10 days</b> if lice or nits are seen</td></tr>
<tr><th scope="row">Follow up</th><td>Follow up with the caregiver in <b>a week</b></td></tr>
<tr><th scope="row">Refer</th><td>Live lice after <b>2 rounds one week apart</b>, refer for a prescription product</td></tr>
</tbody>
</table>
<p class="g2-p">OE 42 prints &ldquo;in 7 days&rdquo;; see Reference.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<p class="g2-p">Itch can last <b>4 weeks</b> after treatment (hypersensitivity): oral antihistamines or topical steroids on the slide; she said &ldquo;most likely we&rsquo;re leaning on that oral antihistamine&rdquo;<span class="g2-src">(T@36103 11/12)</span>.</p>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Maximum treatment duration for self-care <span class="g2-tap">Show answer</span></summary><p>Seven days (not three, ten or fourteen) <span class="g2-src">(T@20142 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-7">
<h3>Outdoor Exposures · Objective 7: actions after an outdoor exposure</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Counsel a patient on the actions needed after an &ldquo;outdoor exposure&rdquo;</b><i>OE 9, 24, 35, 47, 53, 56, 62&ndash;63, 65</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Lice product <span class="g2-src">(OE 45, 47)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Step</th><th scope="col">Lice product</th></tr></thead>
<tbody>
<tr><td class="g2-n"><span class="g2-num">1</span></td><td>No conditioner first</td></tr>
<tr><td class="g2-n"><span class="g2-num">2</span></td><td>Enough to wet the dry hair and scalp</td></tr>
<tr><td class="g2-n"><span class="g2-num">3</span></td><td>A full <b>10 minutes</b></td></tr>
<tr><td class="g2-n"><span class="g2-num">4</span></td><td>Rinse</td></tr>
<tr><td class="g2-n"><span class="g2-num">5</span></td><td>Nit comb in sections</td></tr>
<tr><td class="g2-n"><span class="g2-num">6</span></td><td>No re-washing for <b>1&ndash;2 days</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Spider bite <span class="g2-src">(OE 53)</span></h5>
<ul>
<li>Soap and water</li>
<li>Cold pack</li>
<li>Elevate the limb</li>
<li>Acetaminophen</li>
<li>Emergency room</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Snake bite <span class="g2-src">(OE 56)</span></h5>
<ul>
<li>Calm and still</li>
<li>A photo, no capture</li>
<li>Remove jewelry and tight clothing</li>
<li>Soap and water</li>
<li><b>Immobilize</b>, even with or slightly lower than the heart</li>
<li>Call poison control, <b>1-800-222-1222</b>, and transport</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Biggest thing to remember, immobilize&rdquo; <span class="g2-src">(T@39310 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Rabies <span class="g2-src">(OE 62&ndash;63)</span></h5>
<p class="g2-p">Wash with soap and water at once; prophylaxis as soon as possible, &ldquo;urgency, not emergency&rdquo; <span class="g2-src">(T@44130 11/12)</span>.</p>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Patient</th><th scope="col">Prophylaxis</th><th scope="col">Vaccine days</th></tr></thead>
<tbody>
<tr><th scope="row">Not previously vaccinated</th><td>Immune globulin plus vaccine</td><td><span class="g2-lab">Vaccine</span>on days <b>0, 3, 7, 14</b></td></tr>
<tr><th scope="row">Previously vaccinated</th><td>No immune globulin; vaccine</td><td><span class="g2-lab">Vaccine</span>on days <b>0 and 3</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-venom">Reference: spiders, snakes, rabies</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Counseling points for the lice patient and his mother (open response) <span class="g2-tap">Show answer</span></summary><p>Her answer: dry hair, 10 minutes, rinse, nit comb, repeat in 7 to 10 days <span class="g2-src">(T@33250&ndash;34351 11/12)</span></p></details>
</div>
</section>

<details class="gdetails" id="gpl-p8o">
<summary>Dr. Patel: Outdoor exposure slide by slide, what the lecture adds (67 slides)</summary>
<section class="gobj" id="gobj-pl-o-1">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 1&ndash;5</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 1&ndash;5)</span><b>Frame for the Outdoor Exposure lecture: her objectives, how she says she builds exam questions, and the fingertip-unit calculation she said has now returned three times</b><i>Patel Outdoor slide 1, 2, 3, 4, 5</i></div>
<div class="gpt g2-block"><h5>Title slide: Outdoor Exposure Therapeutics (Patel Outdoor slide 1)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Poll Everywhere sign-in (Patel Outdoor slide 2)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Learning objectives: what each question can ask (Patel Outdoor slide 3)</h5>
<p class="g2-status"><b>Status E</b> exam cue about how she builds questions</p>
<p class="g2-p">The objectives list the kinds of decisions a question can test: decide from signs, symptoms and history whether the patient has an insect bite, sting, plant dermatitis, lice, scabies, snake bite or rabies exposure; decide if the patient is a self-care candidate; apply treatment goals; recommend non-drug therapy; recommend the best treatment (dosing frequency and maximum days of use, length of treatment, expected onset or relief, common adverse effects, contraindications and interactions); give monitoring and follow-up; and counsel on actions needed after an outdoor exposure.</p>
<p class="g2-p">She tied these to her exam writing, and gave the count of questions per lecture hour. The 70% share and the five questions each from Dr. Sikazwe and Dr. Smith are spoken only <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;This is how I create my exam questions as well&rdquo; <span class='g2-src'>11/12 T@962</span></p>
<p>&ldquo;this is what I want you to know&rdquo; <span class='g2-src'>11/12 T@1183</span></p>
<p>&ldquo;4 to 5 questions per lecture hour is how we calculate it out&rdquo; <span class='g2-src'>11/12 T@1239</span></p></div>
</div>
<div class="gpt g2-block"><h5>Lecture outline: OTC topical medications, then conditions (Patel Outdoor slide 4)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Fingertip units: quantity of cream needed (Patel Outdoor slide 5)</h5>
<p class="g2-status"><b>Status B, E</b> reasoning for the calculation, and her repeat cue</p>
<p class="g2-p">On the slide, one fingertip unit (FTU) is about 0.5 g, and each body area has an FTU count: scalp 3, face and neck 2.5, one hand 1, one arm 4, elbows 1, both soles 1.5, one foot including toes 2, one leg including foot 8, buttocks 4, knees 1, trunk both sides 14 (7 each side). The lecture shows how the chart becomes a dispensing decision: find the area, multiply FTU by 0.5 g for one application, then multiply by applications per day and by days.</p>
<p class="g2-p">Her worked case was hydrocortisone 1% cream twice a day for 3 days on both feet <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. Two feet with toes is 4 FTU, which is 2 g per application, so 12 g in total, and she rounded up to a 15 g tube <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. The tube sizes in her poll (15, 30, 60, 90 g) come from her PollEV page, not the slide <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. She also limited the chart to adults.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;It's come back 3 times now&rdquo; <span class='g2-src'>11/12 T@1732</span></p>
<p>&ldquo;this only adult conversion chart&rdquo; <span class='g2-src'>11/12 T@1804</span></p>
<p>&ldquo;So you get a total of 12 g&rdquo; <span class='g2-src'>11/12 T@2408</span></p>
<p>&ldquo;Round it up to 15 g&rdquo; <span class='g2-src'>11/12 T@2436</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-2">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 6&ndash;11</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 6&ndash;11)</span><b>Plant contact dermatitis: what causes the reaction, how it is prevented, how it looks, and what the treatment goals are (objectives 1, 3, 4 and 5)</b><i>Patel Outdoor slide 6, 7, 8, 9, 10, 11</i></div>
<div class="gpt g2-block"><h5>Divider: Plant contact dermatitis (Patel Outdoor slide 6)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Urushiol sensitivity runs in families (Patel Outdoor slide 7)</h5>
<p class="g2-status"><b>Status B</b> who reacts, and why severity differs</p>
<p class="g2-p">The slide says 50 to 70% of people are sensitive to urushiol, that sensitivity tends to run in families, and that once a person is sensitized, later exposure produces contact dermatitis. In lecture she separated two ideas: whether a person reacts can have a genetic basis, but how severe the reaction is varies from patient to patient.</p>
<p class="g2-p">This matters at the counter because the same plant exposure can produce a mild rash in one customer and a severe one in another, so the recommendation follows the individual's own signs. She said the plant liquid is what causes the reaction (the transcript spells it as 'urchile' and 'Urischi', and calls it a serum; the slide names it urushiol, an oily liquid).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;50 to 70% tend to be in contact&rdquo; <span class='g2-src'>11/12 T@2534</span></p>
<p>&ldquo;in terms of how severe it is, it is patient-specific&rdquo; <span class='g2-src'>11/12 T@2805</span></p></div>
<div class="g2-note"><span class="g2-k">Wording differs, slide governs</span><p>The slide says 50 to 70% of people are sensitive to urushiol. She said 50 to 70% 'tend to be in contact' with plant contact dermatitis. Both give the same range; a question written from the slide would say sensitive.</p></div>
</div>
<div class="gpt g2-block"><h5>Urushiol: how fast it acts, when the rash appears, how long it lasts (Patel Outdoor slide 8)</h5>
<p class="g2-status"><b>Status B</b> timing, with the patient-to-patient variation</p>
<p class="g2-p">The slide gives the sequence: urushiol enters the skin within 10 minutes, binds epidermal proteins to form an antigen (sensitization), and with continued or later exposure a hypersensitivity reaction occurs (elicitation). The rash may appear 2 to 48 hours after exposure and continues 1 to 3 weeks.</p>
<p class="g2-p">The lecture adds that the 2-to-48-hour onset depends on the patient, and that healing takes a little bit longer than other rashes. The sensitivity develops within 10 minutes of contact, yet the rash itself appears hours to 2 days later and lasts weeks, so a patient may arrive with a rash after contact that happened days earlier. She did not explain the sensitization and elicitation phases; that explanation is not in materials.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;That is what causes the sensitivity within 10 minutes, so pretty quick&rdquo; <span class='g2-src'>11/12 T@3013</span></p>
<p>&ldquo;the rash may appear within 2 to 48 hours depending on the patient&rdquo; <span class='g2-src'>11/12 T@3101</span></p>
<p>&ldquo;it does take about 1 to 3 weeks to heal&rdquo; <span class='g2-src'>11/12 T@3172</span></p></div>
</div>
<div class="gpt g2-block"><h5>Preventing plant contact dermatitis, and removing urushiol (Patel Outdoor slide 9)</h5>
<p class="g2-status"><b>Status C</b> clothing, dead plants, pets and rinsing</p>
<p class="g2-p">The slide lists transfer routes (plant, hands, objects), that urushiol stays active for years in dead dried plants and contaminated objects, that pets transfer it, protective clothing and gloves, and removal by rinsing, washing with soap and water (including under nails), or Tecnu, Zanfel or Dial Ultra.</p>
<p class="g2-p">In lecture she made clothing the main prevention step for anyone hiking or gardening: cover with socks, pants, sleeves and gloves. She added that dead plants stay active, so gloves apply there too, and that after contact the patient should rinse and wash the skin right away to remove the oil, with moisturizer afterward. She did not read the product names on the slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;main thing is prevention with clothing&rdquo; <span class='g2-src'>11/12 T@3279</span></p>
<p>&ldquo;in terms of dead dried plants, it also is active&rdquo; <span class='g2-src'>11/12 T@3591</span></p>
<p>&ldquo;Pets are often the cause that causes the transfer to humans&rdquo; <span class='g2-src'>11/12 T@3673</span></p>
<p>&ldquo;you remove and rinse the skin immediately as soon as you can&rdquo; <span class='g2-src'>11/12 T@3811</span></p></div>
</div>
<div class="gpt g2-block"><h5>Signs and symptoms of plant contact dermatitis (Patel Outdoor slide 10)</h5>
<p class="g2-status"><b>Status B, C</b> pattern of lesions and rare severe reactions</p>
<p class="g2-p">Early lesions are small blisters (vesicles) in a line where the skin brushed the plant. The general order is itching, erythema, then vesicles and papules. The slide also lists severe respiratory symptoms, which may follow inhalation of burning poison ivy, oak or sumac plants.</p>
<p class="g2-p">The lecture explains the line: the early lesions mark where the skin touched the plant. She said some patients may be extremely allergic and have an anaphylactic reaction, but most patients have the three main symptoms. Burning-plant inhalation and the slide's footnote that the vesicles do not contain antigenic material were not discussed in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;wherever the skin came in contact with the plant&rdquo; <span class='g2-src'>11/12 T@4271</span></p>
<p>&ldquo;it could be an anaphylaxis reaction&rdquo; <span class='g2-src'>11/12 T@4537</span></p>
<p>&ldquo;most likely, it's going to be the three main symptoms&rdquo; <span class='g2-src'>11/12 T@4578</span></p></div>
</div>
<div class="gpt g2-block"><h5>Treatment goals for plant contact dermatitis (Patel Outdoor slide 11)</h5>
<p class="g2-status"><b>Status B</b> what the goals mean and the length of the course</p>
<p class="g2-p">The slide gives the goals: treat inflammation, relieve itching and scratching, clear debris from oozing, crusting and scaling, and minimize medication adverse effects. Options include calamine, emollients and anesthetics, cool soaks or baths, oral antihistamines, topical corticosteroids (any presentation) and oral corticosteroids (severe). It resolves in 1 to 3 weeks with or without treatment.</p>
<p class="g2-p">After the 1-to-3-week figure she said consistency is key in treating plant dermatitis, so the treatment is kept up through the course of the rash. She described oral corticosteroids as the worst-case option, reserved for severe presentations.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;but in severe cases, we may utilize oral corticosteroids&rdquo; <span class='g2-src'>11/12 T@5036</span></p>
<p>&ldquo;So consistency is key with treating plant dermatitis.&rdquo; <span class='g2-src'>11/12 T@5341</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-3">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 12&ndash;16</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 12&ndash;16)</span><b>Choosing the topical or oral product by condition, age and skin state, and when to refer (objectives 5 and 6)</b><i>Patel Outdoor slide 12, 13, 14, 15, 16</i></div>
<div class="gpt g2-block"><h5>Topical hydrocortisone, anesthetics and antihistamines by condition (Patel Outdoor slide 12)</h5>
<p class="g2-status"><b>Status B, E</b> matching product, condition and comment</p>
<p class="g2-p">The table pairs each product with its conditions and cautions. Hydrocortisone: insect bites and stings, plant dermatitis (wet or dry), atopic dermatitis, very mild psoriasis; not for a child under 2 years. Topical anesthetics (pramoxine, benzocaine, dibucaine, lidocaine): bites and stings, dry plant dermatitis, sunburn; not under occlusive dressing or on broken skin; methemoglobinemia is the adverse effect of the 'caines'. Topical diphenhydramine 0.5 to 2%: bites and stings only; avoid in chickenpox, plant dermatitis, sunburn and broken, oozing skin.</p>
<p class="g2-p">Her instruction was to choose by reading three columns together: the product category, the condition, and the comment, with age included. She spoke the broken-skin and antihistamine cautions; the methemoglobinemia comment was not discussed in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not gonna use the topical anesthetic under broken or occlusive skin&rdquo; <span class='g2-src'>11/12 T@5684</span></p>
<p>&ldquo;We're avoiding topical antihistamines in patients in terms of chickenpox&rdquo; <span class='g2-src'>11/12 T@5763</span></p>
<p>&ldquo;pay attention to what type of medication falls under what category&rdquo; <span class='g2-src'>11/12 T@6746</span></p>
<p>&ldquo;that's how you would know which one to choose&rdquo; <span class='g2-src'>11/12 T@6899</span></p></div>
</div>
<div class="gpt g2-block"><h5>Counterirritants, astringents and topical antibiotics (Patel Outdoor slide 13)</h5>
<p class="g2-status"><b>Status B, D</b> which type for which skin</p>
<p class="g2-p">Antipruritics or counterirritants (phenol, camphor, menthol, benzyl alcohol, calamine) are for bites, stings and dry plant dermatitis, not broken skin. Astringents (aluminum acetate, witch hazel) are for wet or weeping plant or atopic dermatitis: they reduce inflammation by vasoconstriction and cool and dry the skin by evaporation. Topical antibiotics (bacitracin, neomycin, polymyxin B, mupirocin) are for minor burns and cuts; contact the provider if there is no improvement after 7 days.</p>
<p class="g2-p">The lecture ties each type to the skin it fits: dry lesions get the counterirritant group, wet weeping lesions an astringent, and antibiotics prevent infection in minor wounds. She called the counterirritant group 'antipyretics', a slip for the slide's antipruritic heading.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So this is called our antipyretics&rdquo; <span class='g2-src'>11/12 T@6112</span></p>
<p>&ldquo;this is for our wet weeping plant dermatitis&rdquo; <span class='g2-src'>11/12 T@6406</span></p>
<p>&ldquo;contact provider after 7 days if no improvement is found&rdquo; <span class='g2-src'>11/12 T@6625</span></p></div>
<div class="g2-note"><span class="g2-k">Slide 13 versus slides 25 and 39: calamine</span><p>Slide 13 lists calamine as a counterirritant; slides 25 and 39 list it as a skin protectant, and she said it may be used under age 2 and in bacterial infection. For a child under 2 or a bite question, key a skin protectant (her words on those slides); a question asking only the class on this table follows slide 13.</p></div>
</div>
<div class="gpt g2-block"><h5>Reducing itch in plant contact dermatitis (Patel Outdoor slide 14)</h5>
<p class="g2-status"><b>Status B</b> why oral, why not topical</p>
<p class="g2-p">Two options reduce itch: a colloidal oatmeal bath (sprinkle a cup into fast-running bath water, soak 15 to 20 minutes twice a day, pat dry rather than wipe, and note the tub is very slippery) or an oral antihistamine. The slide states plainly not to use topical antihistamines or topical antibiotics.</p>
<p class="g2-p">She tied the oatmeal bath to the dermatitis lecture and did not go through the bath steps. The reason for choosing an oral antihistamine over a topical one is given at slide 18: plant dermatitis can affect more than the spot that was touched, so a systemic product treats the whole body. The topical exclusion repeats the caution on slide 12.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;very similar to how we talked about it in dermatitis lecture&rdquo; <span class='g2-src'>11/12 T@7085</span></p>
<p>&ldquo;We are not using topical antihistamines or topical antibiotics to treat itching&rdquo; <span class='g2-src'>11/12 T@7173</span></p></div>
</div>
<div class="gpt g2-block"><h5>Astringents: aluminum sulfate and calcium acetate soaks (Patel Outdoor slide 15)</h5>
<p class="g2-status"><b>Status B</b> what it treats and how the patient uses it</p>
<p class="g2-p">The slide says aluminum sulfate/calcium acetate reduces weeping and decreases itch, used as a soak or wet dressing. In lecture, weeping meant the oozing seen in the line of lesions on the earlier picture, which is why astringents belong to wet plant dermatitis.</p>
<p class="g2-p">She added that the patient does the work: soaking and making a wet wrap at home, so the counseling is the technique, not just the product name. In her poll the astringent answer was written as aluminum acetate (slide 13 uses that name), while this slide names aluminum sulfate/calcium acetate; the lecture treats them as the same use.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;they're reducing the weeping&rdquo; <span class='g2-src'>11/12 T@7408</span></p>
<p>&ldquo;the weeping is the lesion that we just saw in that line&rdquo; <span class='g2-src'>11/12 T@7441</span></p>
<p>&ldquo;Patients do have to soak and create a wet wrap for themselves&rdquo; <span class='g2-src'>11/12 T@7525</span></p></div>
</div>
<div class="gpt g2-block"><h5>Plant dermatitis follow-up: when to refer (Patel Outdoor slide 16)</h5>
<p class="g2-status"><b>Status B, C</b> referral triggers and what counts as infection</p>
<p class="g2-p">The slide says refer to a physician if there is no improvement after 7 days, symptoms become worse, the rash covers a large area of the face or eyelids swell, the rash involves the genitalia, or there is a secondary infection. It also says symptoms can last up to 3 weeks.</p>
<p class="g2-p">In lecture she added what secondary infection looks like at the counter: oozing and fever. She also separated the two time facts: the rash lasting up to 3 weeks is expected and is not by itself a reason to refer, while no improvement at 7 days is. She called each of these findings a straight referral.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;if we don't see any benefit after that 7 days, we're referring them&rdquo; <span class='g2-src'>11/12 T@7630</span></p>
<p>&ldquo;these are all symptoms of a possible infection, straight referral&rdquo; <span class='g2-src'>11/12 T@8031</span></p>
<p>&ldquo;if any of these areas do hit, we will straight refer the patient&rdquo; <span class='g2-src'>11/12 T@8185</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-4">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 17&ndash;18</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 17&ndash;18)</span><b>The patient-care process applied to a poison ivy case: decide what the patient needs treated before choosing a product</b><i>Patel Outdoor slide 17, 18</i></div>
<div class="gpt g2-block"><h5>Patient-centered care process wheel (Patel Outdoor slide 17)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Poison ivy case: itching without weeping (Patel Outdoor slide 18)</h5>
<p class="g2-status"><b>Status B, C</b> reasoning behind the poll answers</p>
<p class="g2-p">The patient hiked 2 days ago and has vesicles and papules on red skin of the legs and ankles; the vesicles are not open and there is no weeping; she has hypertension and takes lisinopril 10 mg at bedtime. Her question is what the patient needs treated. The problem is itching, so the answer is an oral antihistamine. A weeping-lesion product would be wrong because the exam notes no weeping, and a topical antihistamine is not used in plant dermatitis.</p>
<p class="g2-p">The second poll asked for the best product to reduce weeping from poison ivy, and the answer is aluminum acetate. When a student asked why oral rather than topical, she answered that an oral antihistamine is systemic and treats the whole body, which matters because the rash can worsen beyond the touched area. She also said any oral antihistamine is appropriate; the one named was only an example.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what are we treating with this patient? Itching, right?&rdquo; <span class='g2-src'>11/12 T@8896</span></p>
<p>&ldquo;B would treat weeping&rdquo; <span class='g2-src'>11/12 T@9159</span></p>
<p>&ldquo;it could cause worsening symptoms for the entire body&rdquo; <span class='g2-src'>11/12 T@9831</span></p>
<p>&ldquo;Any oral antihistamine. That was just one example.&rdquo; <span class='g2-src'>11/12 T@9933</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-5">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 19&ndash;23</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 19&ndash;23)</span><b>Insect bites versus stings, prevention and the four treatment goals (objectives 1, 3 and 4)</b><i>Patel Outdoor slide 19, 20, 21, 22, 23</i></div>
<div class="gpt g2-block"><h5>Divider: Insect bites (Patel Outdoor slide 19)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Bites versus stings (Patel Outdoor slide 20)</h5>
<p class="g2-status"><b>Status B, E</b> how to sort insects, and what the symptoms are</p>
<p class="g2-p">Bites are nonvenomous (mosquitoes, fleas, bedbugs, ticks, chiggers, most spiders) and produce local mild itching, erythema and papules. Stings are venomous and contain allergenic proteins (bees, wasps, yellow jackets, hornets, fire ants) and produce pain, itching and irritation. Mosquitoes, fleas and ticks are marked as disease vectors.</p>
<p class="g2-p">Her first instruction was to learn which insects belong in which group. She added that Texas has all of them, so the cases come up often at the counter. The vector marks were not discussed here; the vector diseases are taught on the slides after this.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Pay attention to what insects fall under the bites versus the stings&rdquo; <span class='g2-src'>11/12 T@10123</span></p>
<p>&ldquo;Bites tend to be non-venomous versus stings are venomous&rdquo; <span class='g2-src'>11/12 T@10193</span></p>
<p>&ldquo;in terms of Texas, we have all of the above&rdquo; <span class='g2-src'>11/12 T@10260</span></p></div>
</div>
<div class="gpt g2-block"><h5>Preventing insect bites (Patel Outdoor slide 21)</h5>
<p class="g2-status"><b>Status B, E</b> non-chemical prevention, and a stated exclusion</p>
<p class="g2-p">The slide lists repellents (DEET, picaridin, IR3535, oil of lemon eucalyptus, PMD, permethrin) and contact avoidance (cover skin, cuff pant legs into socks, avoid habitat areas, keep pets free of pests, remove standing water and wood piles).</p>
<p class="g2-p">In lecture she stressed prevention as the main tool and named examples: covering skin, avoiding habitat areas, keeping pets free of pests and treated, avoiding standing water such as ponds (she said it increases contact with insects) and wood piles. She said repellents contain many different ingredients, and she excluded the ingredient list from questions.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;prevention is key&rdquo; <span class='g2-src'>11/12 T@10556</span></p>
<p>&ldquo;keeping pets free of pests, getting treatment done for your pets as well&rdquo; <span class='g2-src'>11/12 T@10748</span></p>
<p>&ldquo;Avoiding any areas that have that standing water&rdquo; <span class='g2-src'>11/12 T@10822</span></p>
<p>&ldquo;I'm not going to ask you certain ingredients that are in repellents&rdquo; <span class='g2-src'>11/12 T@11557</span></p></div>
</div>
<div class="gpt g2-block"><h5>Insect repellents table (Medical Letter) (Patel Outdoor slide 22)</h5>
<p class="g2-status"><b>Status E</b> reference table she excluded from questions</p>
<p class="g2-p">The slide is a table from The Medical Letter listing repellents with formulation, duration of protection and comments (for example, DEET products and picaridin, with notes on pregnancy and children). She did not teach it line by line.</p>
<p class="g2-p">She said patients just need to know the list holds many FDA-approved ingredients and said she will not ask for specific ingredients.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I'm not going to ask you certain ingredients that are in repellents&rdquo; <span class='g2-src'>11/12 T@11557</span></p>
<p>&ldquo;just know that there are many ingredients that are FDA approved&rdquo; <span class='g2-src'>11/12 T@11630</span></p></div>
</div>
<div class="gpt g2-block"><h5>Insect bite treatment goals (Patel Outdoor slide 23)</h5>
<p class="g2-status"><b>Status B</b> why identifying the insect matters</p>
<p class="g2-p">The four goals are to relieve symptoms, prevent secondary bacterial infection, minimize medication adverse effects, and identify and eradicate transmissible diseases. The slide shows only the four labels.</p>
<p class="g2-p">The lecture explains the fourth goal in practice: knowing which type of bite or sting it was is what lets the patient be treated correctly. The tick handling on the next slide applies this.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what type of bite it was or what type of sting it was&rdquo; <span class='g2-src'>11/12 T@11908</span></p>
<p>&ldquo;then that is most helpful to treat the patient&rdquo; <span class='g2-src'>11/12 T@11963</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-6">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 24&ndash;28</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 24&ndash;28)</span><b>Bite first aid and treatment, and the vector-borne diseases she tied to mosquitoes, fleas and ticks (objectives 4, 5 and 6)</b><i>Patel Outdoor slide 24, 25, 26, 27, 28</i></div>
<div class="gpt g2-block"><h5>Non-drug measures for insect bites (Patel Outdoor slide 24)</h5>
<p class="g2-status"><b>Status B</b> reasons for saving the tick and cleaning afterward</p>
<p class="g2-p">The slide lists: apply an ice pack promptly to reduce swelling, itching and pain; avoid scratching and keep nails trimmed; do not wear rough, irritating clothing over the bite; and remove ticks with tweezers by gently pulling (the slide says to remove the head), clean the area with rubbing alcohol and keep the tick in a plastic bag.</p>
<p class="g2-p">She explained the purpose of saving the tick: knowing which tick it was lets the provider treat the patient accordingly. She said to clean the skin with rubbing alcohol after removal. The plastic bag detail was not spoken in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Avoid scratching, especially with nails&rdquo; <span class='g2-src'>11/12 T@12121</span></p>
<p>&ldquo;save the tick so that way we can address&rdquo; <span class='g2-src'>11/12 T@12449</span></p>
<p>&ldquo;treat the affected area once the tick is removed with alcohol&rdquo; <span class='g2-src'>11/12 T@12580</span></p></div>
</div>
<div class="gpt g2-block"><h5>Insect bite treatment choices (Patel Outdoor slide 25)</h5>
<p class="g2-status"><b>Status B</b> why skin protectants are the option under age 2</p>
<p class="g2-p">The slide says any one or a combination of: skin protectants (petrolatum, calamine; can be used in children under 2 years), hydrocortisone, topical anesthetics (pramoxine, benzocaine), topical counterirritants (camphor, menthol) and oral antihistamines.</p>
<p class="g2-p">The lecture gives the reason behind the age note: corticosteroids are not recommended under 2 years, so a skin protectant is the option for that age group. Hydrocortisone remains an option for older patients. So for a child under 2 with a bite, the skin protectant is the listed choice.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;calamine may be used in children less than 2 years of age&rdquo; <span class='g2-src'>11/12 T@12821</span></p>
<p>&ldquo;Cause we're not gonna recommend corticosteroids in that age group&rdquo; <span class='g2-src'>11/12 T@12917</span></p></div>
</div>
<div class="gpt g2-block"><h5>Mosquito-borne diseases (Patel Outdoor slide 26)</h5>
<p class="g2-status"><b>Status B, E</b> prevention emphasis and an exclusion</p>
<p class="g2-p">The slide gives prevention (DEET or other repellent, protective clothing, removing standing water), malaria worldwide, and a list of U.S. neuro-invasive and febrile viral diseases (West Nile, dengue, chikungunya, Zika, St. Louis encephalitis, La Crosse encephalitis, Eastern equine encephalitis, yellow fever).</p>
<p class="g2-p">She explained the travel link: malaria risk is for patients traveling to certain parts of the world, and those patients are treated for prevention. She said West Nile is the most common in the U.S. <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> and said she does not necessarily need students to know which types of mosquitoes occur in the U.S.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;prevention is key once again&rdquo; <span class='g2-src'>11/12 T@13188</span></p>
<p>&ldquo;Worldwide malaria may be found&rdquo; <span class='g2-src'>11/12 T@13287</span></p>
<p>&ldquo;I don't necessarily need you to know what type of mosquitoes&rdquo; <span class='g2-src'>11/12 T@13776</span></p></div>
</div>
<div class="gpt g2-block"><h5>Flea-borne diseases: murine typhus and plague (Patel Outdoor slide 27)</h5>
<p class="g2-status"><b>Status B, E</b> which antibiotic for which disease</p>
<p class="g2-p">Murine typhus (Rickettsia typhi) in Texas: carried by cats, rodents and opossums; incubation 6 to 14 days; headache, fever, nausea and body aches; a rash starts on the trunk 5 to 6 days after the first symptoms and spreads to arms and legs; treated with doxycycline; untreated it may last months. Bubonic plague (Yersinia pestis), Southwest U.S., carried by rodents, cats and dogs: streptomycin, ciprofloxacin, levofloxacin, moxifloxacin, doxycycline, aminoglycosides.</p>
<p class="g2-p">Her point was matching disease to antibiotic, not doses; the slide bolds the antibiotic lines (doxycycline for murine typhus, the list for plague). She said the flu-like symptoms occur around the same time as the rash. She named streptomycin, ciprofloxacin, levofloxacin, doxycycline and aminoglycosides for plague and did not name moxifloxacin.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this can last for several months&rdquo; <span class='g2-src'>11/12 T@14740</span></p>
<p>&ldquo;I don't need you to know dosing&rdquo; <span class='g2-src'>11/12 T@15070</span></p>
<p>&ldquo;just understand which antibiotic would treat which flea-borne disease&rdquo; <span class='g2-src'>11/12 T@15107</span></p>
<p>&ldquo;it's bolded for a reason&rdquo; <span class='g2-src'>11/12 T@15185</span></p></div>
</div>
<div class="gpt g2-block"><h5>Tick-borne diseases (Patel Outdoor slide 28)</h5>
<p class="g2-status"><b>Status B</b> what to do with the tick</p>
<p class="g2-p">The slide lists Lyme disease, rickettsial spotted fevers, tularemia and ehrlichiosis, with symptoms 2 to 14 days after the bite: fever, headache, myalgias and rash.</p>
<p class="g2-p">In lecture, Lyme disease and the rickettsial infections were named the most common. She tied this to counseling: the patient removes the tick, applies alcohol and keeps the tick so the clinicians know exactly what is being treated. She described the early symptoms as cold-like or flu-like, with a rash.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Keep the ticks so that way we understand exactly what we're treating here&rdquo; <span class='g2-src'>11/12 T@15510</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-7">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 29&ndash;31</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 29&ndash;31)</span><b>Lyme disease and other tick-borne treatment, and when a bite is referred (objectives 5 and 6)</b><i>Patel Outdoor slide 29, 30, 31</i></div>
<div class="gpt g2-block"><h5>Lyme disease: prophylaxis and treatment by stage (Patel Outdoor slide 29)</h5>
<p class="g2-status"><b>Status B, E</b> timing, drug choice by allergy and the durations she compared</p>
<p class="g2-p">The slide gives high risk as an Ixodes (black-legged) tick, a high-endemic area and attachment over 36 hours. Prophylaxis within 72 hours of detaching the tick: doxycycline 200 mg once in adults (children 4.4 mg/kg up to 200 mg). Erythema migrans: doxycycline 100 mg twice a day for 10 days; amoxicillin 500 mg three times a day for 14 days; cefuroxime axetil 500 mg twice a day for 14 days; second-line azithromycin 500 mg daily for 7 days (children are weight-based: 4.4, 50, 30 and 10 mg/kg daily). Neurologic or cardiac manifestations: 14 to 21 days; arthritic: oral antibiotics for 28 days.</p>
<p class="g2-p">She said a patient with the erythema migrans rash may be past 72 hours and is still treated. She compared durations (azithromycin shortest) and said the several first choices exist because of allergy, with azithromycin for when none of the three fits because of allergy or resistance. She did not discuss the 36-hour criterion or the 28-day course.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;pay attention to the hour, right?&rdquo; <span class='g2-src'>11/12 T@16022</span></p>
<p>&ldquo;So 72 hours within detaching the tick, that is prophylaxis treatment.&rdquo; <span class='g2-src'>11/12 T@16056</span></p>
<p>&ldquo;It could have been a little bit longer than 72 hours&rdquo; <span class='g2-src'>11/12 T@16222</span></p>
<p>&ldquo;it depends on their allergy&rdquo; <span class='g2-src'>11/12 T@16376</span></p>
<p>&ldquo;azithromycin is the shortest time frame, 7 days&rdquo; <span class='g2-src'>11/12 T@17265</span></p></div>
</div>
<div class="gpt g2-block"><h5>Southern tick-associated rash illness and rickettsial spotted fevers (Patel Outdoor slide 30)</h5>
<p class="g2-status"><b>Status B, D</b> which tick, which drug, and a duration conflict</p>
<p class="g2-p">The slide says STARI (Lone Star tick) has no IDSA antibiotic recommendation. Rickettsial spotted fevers: doxycycline 100 mg twice a day for 7 days (children 2.2 mg/kg daily, max 100 mg/dose), recommended for all suspected rickettsial infections (Rocky Mountain, Gulf Coast, Pacific Coast, rickettsial pox), continued at least 3 days after the fever subsides with clinical improvement.</p>
<p class="g2-p">In lecture she said no antibiotic is recommended for the Lone Star tick illness and that doxycycline is the recommended spotted fever treatment. The transcript spells the disease 'ricket spotted fever'.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there are no antibiotic recommendations for this tick-borne disease&rdquo; <span class='g2-src'>11/12 T@17832</span></p>
<p>&ldquo;just remember doxycycline is our recommended treatment&rdquo; <span class='g2-src'>11/12 T@18108</span></p>
<p>&ldquo;should be treated with doxycycline at least 3 days after&rdquo; <span class='g2-src'>11/12 T@18453</span></p></div>
<div class="g2-note"><span class="g2-k">Slide and lecture differ on the 3 days</span><p>Slide: treat a suspected infection until at least 3 days after the fever subsides. Lecture: a traveler should mention the trip to the provider, who may prescribe doxycycline for at least 3 days after, in case of contact. A question from the slide keys 3 days after fever resolution; her remark is a precautionary prescription.</p></div>
</div>
<div class="gpt g2-block"><h5>Insect bite follow-up: when to refer (Patel Outdoor slide 31)</h5>
<p class="g2-status"><b>Status B</b> what counts as a secondary infection</p>
<p class="g2-p">The slide says refer to a physician if symptoms persist after 7 days of treatment, symptoms worsen during treatment, or the patient develops a secondary infection (fever, joint pain, lymph node enlargement, neurologic symptoms).</p>
<p class="g2-p">She added that this 7-day supply and 7-day check applies to bites as it did to plant dermatitis, and that any other symptom that has worsened over time is also a referral. She called any of these findings straight referral.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;symptoms worsen during treatment&rdquo; <span class='g2-src'>11/12 T@18901</span></p>
<p>&ldquo;that is straight referral&rdquo; <span class='g2-src'>11/12 T@19119</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-8">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 32&ndash;37</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 32&ndash;37)</span><b>Two bite cases, the move to stings, bee sting first aid and referral, and the sting case (objectives 1, 2 and 6)</b><i>Patel Outdoor slide 32, 33, 34, 35, 36, 37</i></div>
<div class="gpt g2-block"><h5>Bedbug case and the maximum self-care duration (Patel Outdoor slide 32)</h5>
<p class="g2-status"><b>Status B, E</b> why witch hazel and the neomycin product are not the answer, and the repeat 7-day cue</p>
<p class="g2-p">The patient is a 23-year-old man with very itchy bedbug bites on the lower legs and torso, no medical history and no medications, and a neomycin allergy that worsened a rash. The goal is itch relief. Her poll options were oral diphenhydramine, witch hazel, Neosporin and referral <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> (the options are on her PollEV page, not the slide). She tied the neomycin allergy to Neosporin (she called its ingredient very similar) and said witch hazel is more for inflammation. Of those options, the one that treats itch is oral diphenhydramine, the same oral antihistamine logic as the poison ivy case; she did not state the choice aloud.</p>
<p class="g2-p">The next poll asked for the maximum treatment duration for self-care, with options of 3, 7, 10 and 14 days <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. She said seven days, linked it to atopic dermatitis and said it comes up again with bites.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So in this case, very similar.&rdquo; <span class='g2-src'>11/12 T@19852</span></p>
<p>&ldquo;he's already allergic to neomycin&rdquo; <span class='g2-src'>11/12 T@19900</span></p>
<p>&ldquo;It's more so for that inflammation.&rdquo; <span class='g2-src'>11/12 T@20087</span></p>
<p>&ldquo;What other lecture did we talk about 7 days referral?&rdquo; <span class='g2-src'>11/12 T@20213</span></p>
<p>&ldquo;So make note of the certain duration of time&rdquo; <span class='g2-src'>11/12 T@20435</span></p></div>
</div>
<div class="gpt g2-block"><h5>Hunting trip case: flu-like illness with a rash (Patel Outdoor slide 33)</h5>
<p class="g2-status"><b>Status B, E</b> key words that make this a referral</p>
<p class="g2-p">A 24-year-old man has had flu-like symptoms and muscle aches for a couple of days. He has a rash on his leg that started several days after he returned from a hunting trip to Minnesota; that trip was about 10 days ago. He has taken 2 days off work to rest and drink fluids and symptoms persist. The answer she gave is immediate medical referral.</p>
<p class="g2-p">She asked what words stood out: the duration, feeling ill, and muscle aches after about 10 days. She tied the referral to the time frame and the symptoms: 7 days as well as the symptoms he has. She did not name a disease for this case.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what were some key terms that stood out? That duration, right?&rdquo; <span class='g2-src'>11/12 T@21107</span></p>
<p>&ldquo;so immediate medical referral&rdquo; <span class='g2-src'>11/12 T@21515</span></p></div>
</div>
<div class="gpt g2-block"><h5>Divider: Insect stings (Patel Outdoor slide 34)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Bee sting first aid (Patel Outdoor slide 35)</h5>
<p class="g2-status"><b>Status B</b> what comes first and when oral pain relief is added</p>
<p class="g2-p">The goals are to relieve itching and pain and to minimize medication adverse effects. The steps are: remove the stinger, wash with soap and water, apply ice or a cold pack (the slide says it slows absorption and reduces pain and swelling), and use the same drugs as for insect bites. If topical products do not relieve pain, consider an oral analgesic.</p>
<p class="g2-p">She said stinger removal comes first if possible, that treatment of the sting is the same as for insect bites, and that the analgesic step means an oral product. She sent students back to the chart at the start of the presentation for examples. She did not explain the ice reasoning in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the removal of the bee, that would be first if possible&rdquo; <span class='g2-src'>11/12 T@21776</span></p>
<p>&ldquo;it would be the same as insect bites&rdquo; <span class='g2-src'>11/12 T@21994</span></p>
<p>&ldquo;So analgesic being oral&rdquo; <span class='g2-src'>11/12 T@22150</span></p></div>
</div>
<div class="gpt g2-block"><h5>Bee, wasp and scorpion stings: referral and follow-up (Patel Outdoor slide 36)</h5>
<p class="g2-status"><b>Status B, C</b> why emergency care is immediate</p>
<p class="g2-p">The slide says emergency care immediately for a history of a severe reaction, or at any time after the sting hives, dizziness, nausea or vomiting, or difficulty breathing; the picture adds loss of consciousness, swelling of the tongue and inability to swallow, and rapid swelling of the throat tissues. Triage to a provider if symptoms worsen or do not improve after 7 days of topical treatment.</p>
<p class="g2-p">The lecture gives the reason: a patient may be having anaphylaxis, which can come on very quickly, and some patients do not know they are severely allergic. So a severe reaction at any time means 911 <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. The 7-day rule applies to bee, wasp and scorpion stings.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Some patients don't even know that they're severely allergic to bees&rdquo; <span class='g2-src'>11/12 T@22408</span></p>
<p>&ldquo;if there is a severe reaction at any time, 911&rdquo; <span class='g2-src'>11/12 T@22481</span></p>
<p>&ldquo;7-day referral policy applies here as well&rdquo; <span class='g2-src'>11/12 T@22911</span></p></div>
</div>
<div class="gpt g2-block"><h5>Wasp sting case in a 7-year-old (Patel Outdoor slide 37)</h5>
<p class="g2-status"><b>Status B, E</b> the key words in the stem</p>
<p class="g2-p">A 7-year-old was stung on the right thigh near a creek by a yellow and black insect. The thigh hurts, itches and is swollen and bright red. His mother scraped off the stinger with a credit card and used ice, which helped at first, but the swelling is increasing. He has hives away from the sting site, asthma and seasonal allergic rhinitis, an amoxicillin rash allergy, and takes loratadine 10 mg and montelukast 5 mg daily.</p>
<p class="g2-p">The answer is immediate referral to the emergency room. She pointed to hives and swelling as the keywords. The referral slide lists hives as an emergency symptom, and the hives here are away from the sting site, so a local anesthetic, a topical antihistamine or an Epsom salt soak (the other poll options <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>) does not address them.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Keyword here, hives and swelling, right?&rdquo; <span class='g2-src'>11/12 T@23898</span></p>
<p>&ldquo;remember the symptoms of emergency cases that would include immediate referral&rdquo; <span class='g2-src'>11/12 T@23982</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-9">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 38&ndash;40</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 38&ndash;40)</span><b>Sting non-drug measures and the OTC counseling points for bites and stings (objectives 4, 5 and 7)</b><i>Patel Outdoor slide 38, 39, 40</i></div>
<div class="gpt g2-block"><h5>Non-drug measures for insect stings (Patel Outdoor slide 38)</h5>
<p class="g2-status"><b>Status C</b> extra step after a sting</p>
<p class="g2-p">The slide repeats the bite measures (ice, no scratching, no rough clothing) and adds honeybee stinger removal by grasping the stinger before all the venom is injected, then cleaning the area with rubbing alcohol.</p>
<p class="g2-p">In lecture she treated this as the same approach as bites: prevent, then ice, remove the insect, and limit scratching. She added a monitoring step that is not on the slide: after the sting, check that the patient is not showing emergency symptoms, which connects to slide 36.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we would remove the bee at that point&rdquo; <span class='g2-src'>11/12 T@24473</span></p>
<p>&ldquo;ensure that the patient's not experiencing any emergency care symptoms&rdquo; <span class='g2-src'>11/12 T@24559</span></p></div>
</div>
<div class="gpt g2-block"><h5>OTC counseling for bites and stings (Patel Outdoor slide 39)</h5>
<p class="g2-status"><b>Status B, C, D</b> dosing limits and which product class</p>
<p class="g2-p">The slide gives local anesthetics or counterirritants: apply to the bite area 3 to 4 times daily, not in children under 2, not longer than 7 days. Local anesthetics (pramoxine or benzyl alcohol) are less likely to cause sensitization or adverse effects; counterirritants are menthol or camphor. Skin protectants (zinc oxide or calamine) reduce irritation or inflammation, may be used in bacterial infection, are applied up to 4 times daily and may be used under age 2.</p>
<p class="g2-p">She repeated the limits and added counseling that is not on the slide: clean the area, apply, and wait until dry for the counterirritants.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;applying it to the bite or the sting 3 to 4 times a day&rdquo; <span class='g2-src'>11/12 T@24801</span></p>
<p>&ldquo;local anesthetics such as benzoyl alcohol&rdquo; <span class='g2-src'>11/12 T@24974</span></p>
<p>&ldquo;less likely to cause sensitation or side effects&rdquo; <span class='g2-src'>11/12 T@25017</span></p>
<p>&ldquo;wait until dry&rdquo; <span class='g2-src'>11/12 T@25234</span></p>
<p>&ldquo;Protectants can also be applied in children younger than 2 years of age&rdquo; <span class='g2-src'>11/12 T@25472</span></p></div>
<div class="g2-note"><span class="g2-k">Benzyl alcohol: two classes</span><p>Slide 13 lists benzyl alcohol with the counterirritants; this slide lists it with local anesthetics. In lecture she grouped it with local anesthetics here (the transcript spells it 'benzoyl alcohol', a captioning error for the slide's benzyl alcohol). A counseling question about bites and stings keys it as a local anesthetic.</p></div>
</div>
<div class="gpt g2-block"><h5>Hydrocortisone cautions: scabies, bacterial and fungal infections (Patel Outdoor slide 40)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
</section>

<section class="gobj" id="gobj-pl-o-10">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 41&ndash;45</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 41&ndash;45)</span><b>Lice: types, non-drug care, who should not self-treat, and the pediculicide options with their age limits (objectives 2 and 5)</b><i>Patel Outdoor slide 41, 42, 43, 44, 45</i></div>
<div class="gpt g2-block"><h5>Divider: Pediculosis (Patel Outdoor slide 41)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Pediculosis: the three lice and treatment goals (Patel Outdoor slide 42)</h5>
<p class="g2-status"><b>Status B</b> why repeat treatment is expected</p>
<p class="g2-p">Head lice (Pediculus humanus capitis) are the most common infestation, spread by head-to-head contact or shared personal items, found within 4 mm (0.16 inches) of the scalp, and most common in school children. Body lice (P. humanus corporis) live in clothing seams and can transmit infection (typhus, trench fever). The pubic louse (Phthirus pubis) is spread by sexual contact, shared bedding or clothing; the slide labels it body lice. Goals: kill adult and nymph lice and remove eggs and nits; treatment may need repeating in 7 days.</p>
<p class="g2-p">She stressed there are three different lice and that each is found in a different place. On repeating, she gave the reason: the first round may not cure it, so repeating in 7 days is expected. The counseling slide later says 7 to 10 days (see slide 47).</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;in terms of head lice, that is the most common lice infestation&rdquo; <span class='g2-src'>11/12 T@26279</span></p>
<p>&ldquo;found within 4 millimeters deep of the scalp&rdquo; <span class='g2-src'>11/12 T@26504</span></p>
<p>&ldquo;the highest population is children in school&rdquo; <span class='g2-src'>11/12 T@26579</span></p>
<p>&ldquo;it may not be cured within that first round of treatment&rdquo; <span class='g2-src'>11/12 T@27208</span></p></div>
</div>
<div class="gpt g2-block"><h5>Non-drug treatment and prevention of lice (Patel Outdoor slide 43)</h5>
<p class="g2-status"><b>Status C</b> school, household and sharing</p>
<p class="g2-p">The slide lists careful inspection with an FDA-approved nit comb; the AirAllé device, which applies heat to dehydrate; avoiding contact with an infested person; not sharing combs, brushes, towels, caps and hats; cleaning sports equipment before and after use; washing clothing, bedding, brushes and combs in hot water; and cleaning the home regularly.</p>
<p class="g2-p">She added counseling examples: a child with lice should stay home from school the next day, and the contact warning extends to family members. Cleaning means the whole home, not only the patient's space. She said the heat device dehydrates the eggs and the lice. The device name is spoken as 'air ale' in the transcript <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;completely dehydrates the eggs and the lice&rdquo; <span class='g2-src'>11/12 T@27948</span></p>
<p>&ldquo;it is best recommended that they don't go to school the next day&rdquo; <span class='g2-src'>11/12 T@28137</span></p>
<p>&ldquo;cleaning the home completely&rdquo; <span class='g2-src'>11/12 T@28642</span></p></div>
</div>
<div class="gpt g2-block"><h5>Who should not self-treat lice (Patel Outdoor slide 44)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Head lice pediculicides: products, time on hair, cost and age limits (Patel Outdoor slide 45)</h5>
<p class="g2-status"><b>Status B, D, E</b> which products are common and why, with a boundary conflict</p>
<p class="g2-p">The slide lists, with product, trade names and age limit: pyrethrins plus piperonyl butoxide (RID, A-20 as printed on the slide, Pronto; OTC; older than 2 years; chrysanthemum allergy) and permethrin (Nix; OTC; older than 2 months) and dimethicone 100% (LiceMD; OTC; older than 2 months), each 10 minutes; ivermectin 0.5% (Sklice; OTC/Rx), benzyl alcohol 5% (Ulesfia; Rx) and spinosad 0.9% (Natroba; Rx), each older than 6 months; malathion 0.5% (Ovide; Rx; 8 to 12 hours; older than 2 years). Do not use conditioner first, do not rewash for 1 to 2 days, and do not use one product more than 2 to 3 times if ineffective.</p>
<p class="g2-p">She said the first three are the ones found over the counter in pharmacies, and that price makes the others less common.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;notice the price of these products as well&rdquo; <span class='g2-src'>11/12 T@30082</span></p>
<p>&ldquo;the 1st 3 are most common&rdquo; <span class='g2-src'>11/12 T@30227</span></p>
<p>&ldquo;highlight the age restriction for each of these products&rdquo; <span class='g2-src'>11/12 T@30350</span></p></div>
<div class="g2-note"><span class="g2-k">Slide 44 versus slide 45: age boundaries</span><p>Slide 44 excludes under 2 years (pyrethrin) and under 2 months (permethrin); this table says older than 2 years and 2 months. Neither covers exactly 2, and she read 'greater than'. Key the greater-than ages; exactly 2 is not in materials. The slide's 2 to 3 uses of one product also differs from slide 47, which refers after 2 rounds.</p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-11">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 46&ndash;49</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 46&ndash;49)</span><b>Lice wetting agents, counseling and follow-up, and the lice case (objectives 5, 6 and 7)</b><i>Patel Outdoor slide 46, 47, 48, 49</i></div>
<div class="gpt g2-block"><h5>Lice wetting and occlusive agents (Patel Outdoor slide 46)</h5>
<p class="g2-status"><b>Status B</b> how these products work</p>
<p class="g2-p">The slide lists Cetaphil cleanser with a hair dryer (the Nuvo method), dimethicone lotion (Nix Ultra, LiceMD), Lycelle, and the homeopathic Natrum muriaticum (Vamousse, Licefree).</p>
<p class="g2-p">The lecture supplies the mechanism: these products dehydrate the lice and the eggs on the scalp, which kills them, and the products are then removed. For Cetaphil she described applying it to the head and drying it with a hair dryer, calling it the Nouveau method <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, where the slide says Nuvo. She read Lycelle's brand as 'Lysol Mission'.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;helping dehydrate the lice and the eggs found on the scalp&rdquo; <span class='g2-src'>11/12 T@30800</span></p>
<p>&ldquo;this is called the Nouveau method&rdquo; <span class='g2-src'>11/12 T@30863</span></p>
<p>&ldquo;completely dehydrating them and killing them&rdquo; <span class='g2-src'>11/12 T@31061</span></p></div>
</div>
<div class="gpt g2-block"><h5>Lice counseling and follow-up (Patel Outdoor slide 47)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> steps, eye protection and when to refer</p>
<p class="g2-p">The slide's counseling: use pyrethrin/piperonyl butoxide shampoo or ivermectin lotion, wet the dry hair and scalp, leave on a full 10 minutes, rinse, nit comb in sections, repeat in 7 to 10 days if lice or nits are seen; significant irritation or eye exposure needs medical attention. Follow-up: live lice after 2 treatment rounds one week apart means referral to the PCP for a prescription product.</p>
<p class="g2-p">She added a visor cover for a child's face to keep the product from the forehead and eyes, and said one round probably will not cure it. In the counseling poll she listed what an answer covers: how it is applied, how long it stays, how the eggs and lice are removed, and how many days to repeat. The transcript reads 'wet, dry hair'; the slide says 'wet the dry hair'.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;if it's a child, apply some sort of a visor cover&rdquo; <span class='g2-src'>11/12 T@31883</span></p>
<p>&ldquo;if lice has found after 2 treatment rounds&rdquo; <span class='g2-src'>11/12 T@32262</span></p>
<p>&ldquo;to go ahead and get a stronger prescription product&rdquo; <span class='g2-src'>11/12 T@32386</span></p>
<p>&ldquo;counseling them on these steps would be most important&rdquo; <span class='g2-src'>11/12 T@34163</span></p>
<p>&ldquo;We're leaving it on for a full 10 minutes&rdquo; <span class='g2-src'>11/12 T@34308</span></p>
<p>&ldquo;Repeat the process, 7 to 10 days.&rdquo; <span class='g2-src'>11/12 T@34463</span></p></div>
<div class="g2-note"><span class="g2-k">Repeat in 7 days or 7 to 10 days</span><p>Slide 42 and her lecture on goals say repeat in 7 days; slide 47 and her counseling answer say 7 to 10 days. For counseling, key 7 to 10 days, the interval in her poll answer.</p></div>
</div>
<div class="gpt g2-block"><h5>Lice case: a child who shared a helmet (Patel Outdoor slide 48)</h5>
<p class="g2-status"><b>Status B, E</b> first-line choice and what to counsel</p>
<p class="g2-p">A mother brings in her son, Bobby, whose scalp itches with scratch marks and no signs of infection. He shared a helmet at T-ball, the mother saw moving gray-white bugs, and there is no reported resistance to pyrethrins or permethrin. In the poll, he is 10 years old <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<p class="g2-p">The question asked for the first-line agent. Her poll listed permethrin, malathion, lindane and referral to the PCP <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>; she said option A is right because it is a first-line agent that fits his age (A is permethrin on her PollEV page), and then asked when the same product would not fit, which is the age category: the slide 45 limits. Her follow-up poll asked what to counsel the mother, and she moved from non-drug points to the steps for using the product.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's a first-line agent, right? Age-wise, appropriate to utilize, right?&rdquo; <span class='g2-src'>11/12 T@33290</span></p>
<p>&ldquo;pay attention to the age category&rdquo; <span class='g2-src'>11/12 T@33447</span></p>
<p>&ldquo;counsel them on how to utilize what you just recommended&rdquo; <span class='g2-src'>11/12 T@33686</span></p></div>
</div>
<div class="gpt g2-block"><h5>Divider: Fatal bites and parasites (Patel Outdoor slide 49)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
</section>

<section class="gobj" id="gobj-pl-o-12">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 50&ndash;54</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 50&ndash;54)</span><b>Scabies, venomous spiders and venomous snakes: signs, first aid and prevention (objectives 1, 4 and 7)</b><i>Patel Outdoor slide 50, 51, 52, 53, 54</i></div>
<div class="gpt g2-block"><h5>Scabies: cause, spread and who is at risk (Patel Outdoor slide 50)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; she read the same points and added nothing new</p>
</div>
<div class="gpt g2-block"><h5>Scabies treatment and the itch afterward (Patel Outdoor slide 51)</h5>
<p class="g2-status"><b>Status B, D</b> no ranking among treatments, and why itching persists</p>
<p class="g2-p">The slide gives goals: kill mites and eggs (permethrin 5% cream, crotamiton 10%, sulfur 5 to 10% ointment, lindane 1% lotion, oral ivermectin 200 mcg/kg per dose, two doses one week apart) and reduce symptoms. Itching can last 4 weeks after treatment because of hypersensitivity; options are oral antihistamines and topical steroids.</p>
<p class="g2-p">She said none is first, second or third line: the choice depends on the patient and severity. The lingering itch comes from a hypersensitivity reaction after the mites are killed, and she leaned on oral antihistamines for it. She called the sulfur product a cream where the slide says ointment.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there isn't first line, second line, or third line&rdquo; <span class='g2-src'>11/12 T@35653</span></p>
<p>&ldquo;It just depends on what would be the most appropriate for the patient&rdquo; <span class='g2-src'>11/12 T@35705</span></p>
<p>&ldquo;because of the hypersensitivity reaction that has occurred&rdquo; <span class='g2-src'>11/12 T@35919</span></p>
<p>&ldquo;most likely we're leaning on that oral antihistamine&rdquo; <span class='g2-src'>11/12 T@36085</span></p></div>
<div class="g2-note"><span class="g2-k">Slide 40 versus slide 51: steroids with scabies</span><p>Slide 40: no hydrocortisone on scabies, since steroids can mask or worsen it. Slide 51: topical steroids are an option for itch after treatment; she said they can be used but leaned on the oral antihistamine. Key an oral antihistamine for post-treatment itch; she did not reconcile the two slides.</p></div>
</div>
<div class="gpt g2-block"><h5>Venomous spiders found in Texas (Patel Outdoor slide 52)</h5>
<p class="g2-status"><b>Status B, E</b> symptom pictures she said to know</p>
<p class="g2-p">Brown recluse bite: fever, blood in urine, rash and joint pain within 48 hours; tissue necrosis; may need surgical intervention. Black widow bite: abdominal pain that feels like appendicitis, pain in muscles or the soles of the feet, alternating salivation and dry mouth, paralysis of the diaphragm, seizures, profuse sweating and swollen eyelids.</p>
<p class="g2-p">Her instruction was to learn the symptoms and what each spider looks like. She said surgery is the worst case if the venom stays in the body for the brown recluse, and that the black widow is worse. For the diaphragm she described muscle pain and tension, where the slide says paralysis; the transcript is unclear there. She did not say tissue necrosis.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;what each type of spider looks like is pretty important to understand&rdquo; <span class='g2-src'>11/12 T@36481</span></p>
<p>&ldquo;worst-case scenario if that venom is still in the body&rdquo; <span class='g2-src'>11/12 T@36679</span></p>
<p>&ldquo;Abdomen pain feels like you're having some sort of a flare with your appendix&rdquo; <span class='g2-src'>11/12 T@36764</span></p></div>
</div>
<div class="gpt g2-block"><h5>Venomous spider bite first aid (Patel Outdoor slide 53)</h5>
<p class="g2-status"><b>Status C, D</b> what to give for pain and how to identify the spider</p>
<p class="g2-p">The slide lists: clean with soap and water, apply a cold pack, elevate the limb, acetaminophen may be given for pain, kill or capture the spider in a sealed container if possible, bring the spider and the victim to the emergency room, and antivenom (Latrodectus mactans, equine) for severe black widow bites.</p>
<p class="g2-p">She said to treat it like the bug bites. The slide only says acetaminophen may be given; her addition was to recommend Tylenol over ibuprofen, and the reason for that preference is not in the lecture. She said to take a picture if possible, because we need to understand exactly whether the spider was venomous so the patient can be treated appropriately. She also said emergency visits for these bites are common in Texas.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Elevate the limb.&rdquo; <span class='g2-src'>11/12 T@37396</span></p>
<p>&ldquo;Tylenol over ibuprofen&rdquo; <span class='g2-src'>11/12 T@37545</span></p>
<p>&ldquo;If possible, if you can take a picture of a spider&rdquo; <span class='g2-src'>11/12 T@37573</span></p>
<p>&ldquo;we do need to understand exactly if the spider was venomous or not&rdquo; <span class='g2-src'>11/12 T@37725</span></p></div>
<div class="g2-note"><span class="g2-k">Capture or photograph the spider</span><p>Slide: kill or capture the spider in a sealed container. Lecture: take a picture if you can, and it is fine if you cannot. A question that lists a photograph keys the photograph, following her words; a question that offers only capture in a sealed container follows the slide.</p></div>
</div>
<div class="gpt g2-block"><h5>Venomous snakes in Texas and prevention (Patel Outdoor slide 54)</h5>
<p class="g2-status"><b>Status B</b> what she stressed from the slide</p>
<p class="g2-p">The slide lists pit vipers (copperheads and water moccasins, Agkistrodon; rattlesnakes, Crotalus), whose venom has about 50 toxic compounds and up to 30% of bites are dry bites, and the Texas coral snake (Elapidae), with about 60% dry bites and fang marks often hard to find. There are an average of 2 to 3 deaths a year from snakebites (0.2%). Prevention: eliminate rock, brush and wood piles and tall grass near homes, wear thick work gloves and boots, control insect and rodent populations.</p>
<p class="g2-p">She said the types are on the slide and that prevention is the key. Her examples were for hiking: avoid going through rocks and dead plants, wear thick gloves when working outside, and wear boots or socks that cover the legs and ankles. She did not discuss the dry-bite percentages or the death rate.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Just know that in terms of prevention, prevention is key&rdquo; <span class='g2-src'>11/12 T@38138</span></p>
<p>&ldquo;wear thick gloves if working outside&rdquo; <span class='g2-src'>11/12 T@38321</span></p>
<p>&ldquo;Boots is very important as well&rdquo; <span class='g2-src'>11/12 T@38359</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-13">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 55&ndash;59</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 55&ndash;59)</span><b>Pit viper effects, snake bite first aid and medical care, severity grading and the inpatient protocol (objectives 1, 4 and 7)</b><i>Patel Outdoor slide 55, 56, 57, 58, 59</i></div>
<div class="gpt g2-block"><h5>Adverse effects of pit viper bites (table) (Patel Outdoor slide 55)</h5>
<p class="g2-status"><b>Status B, C</b> what the table is for</p>
<p class="g2-p">The slide is a table of systemic effects after native pit viper bites in a snakebite registry: for rattlesnakes (n = 256), copperheads (130), cottonmouths (15) and unspecified pit vipers (41), it lists vomiting, diarrhea, hypotension, tachycardia, angioedema, neurotoxicity, rhabdomyolysis, bleeding and respiratory failure with counts and percentages.</p>
<p class="g2-p">She gave only the general idea: effects can be severe and are not limited to swelling and itching. She listed vomiting, nausea, diarrhea, hypotension, tachycardia and, worst case, neurotoxicity. The percentages and the group sizes were not discussed in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So we're not just saying swelling and itching.&rdquo; <span class='g2-src'>11/12 T@38725</span></p>
<p>&ldquo;This is quite dangerous in terms of how severe the symptoms can get&rdquo; <span class='g2-src'>11/12 T@38772</span></p></div>
</div>
<div class="gpt g2-block"><h5>Snake bite first aid (Patel Outdoor slide 56)</h5>
<p class="g2-status"><b>Status B, C, D, E</b> reasons for staying still and the poison control step</p>
<p class="g2-p">The slide gives: keep the patient calm and still; identify the snake (photo, do not capture); remove constrictions; wash the bite; immobilize the area level with or slightly lower than the heart; check for envenomation; mark the leading edge of swelling and tenderness; treat pain; obtain initial labs (PT, Hgb, platelets, fibrinogen); call poison control, 1-800-222-1222, and transport.</p>
<p class="g2-p">Her main point was a calm, still patient with no walking on the limb. Later, after the severity table, she gave the reason: the limb is not moved because the effects can reach the heart and bloodstream very quickly. She said to keep the limb lower than the heart, then that elevating the leg is fine if the patient is seated. She said poison control would be the next step as well as 911 <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> (911 is not on the slide). The number serves any poison control situation nationwide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;keep the patient calm and still, that is the biggest thing&rdquo; <span class='g2-src'>11/12 T@38894</span></p>
<p>&ldquo;We are not ambulating any body part&rdquo; <span class='g2-src'>11/12 T@38954</span></p>
<p>&ldquo;Biggest thing to remember, immobilize.&rdquo; <span class='g2-src'>11/12 T@39310</span></p>
<p>&ldquo;This is a nationwide number, so it's not state-specific.&rdquo; <span class='g2-src'>11/12 T@39843</span></p>
<p>&ldquo;what number are we calling, OK?&rdquo; <span class='g2-src'>11/12 T@40792</span></p>
<p>&ldquo;they can reach the heart bloodstream very quickly&rdquo; <span class='g2-src'>11/12 T@42598</span></p></div>
<div class="g2-note"><span class="g2-k">Position of the bitten limb</span><p>Slide: level with or slightly lower than the heart. Lecture: lower than the heart, then 'elevating the leg is just fine' if seated. Key the slide's wording. Elevation is the instruction for spider bites (slide 53).</p></div>
</div>
<div class="gpt g2-block"><h5>Snake bite medical care (Patel Outdoor slide 57)</h5>
<p class="g2-status"><b>Status B</b> what 'based on symptoms' means</p>
<p class="g2-p">The slide lists a tetanus injection and considering antibiotics to cover gram-negative organisms from a snake's mouth. A coral snake bite gets no antivenin, only supportive care. A pit viper bite is scored to assess need for antivenin: many bites are dry, and symptoms evolve over several hours. Mild or moderate envenomation gets supportive therapy; severe gets antivenin if available, supportive therapy, and watching for compartment syndrome (call surgery).</p>
<p class="g2-p">She said the treatment depends on symptom severity, how severe the bite was and how long the snake held on, and that supportive therapy is the key. She named tetanus and gram-negative coverage. She did not discuss the coral snake rule or compartment syndrome, so those are on the slide only.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;usually, we will give the patient a tetanus injection&rdquo; <span class='g2-src'>11/12 T@40146</span></p>
<p>&ldquo;especially gram-negative coverage&rdquo; <span class='g2-src'>11/12 T@40222</span></p>
<p>&ldquo;But supportive therapy is the biggest key.&rdquo; <span class='g2-src'>11/12 T@40824</span></p></div>
</div>
<div class="gpt g2-block"><h5>Pit viper severity grading (Patel Outdoor slide 58)</h5>
<p class="g2-status"><b>Status B</b> how the three rows rise together</p>
<p class="g2-p">The table grades local signs, systemic signs and coagulation as minimal, moderate or severe. Minimal: swelling, erythema or ecchymosis confined to the bite site; no systemic signs; no coagulation abnormality. Moderate: swelling beyond the bite site; non-life-threatening systemic signs (nausea, vomiting, mild hypotension, perioral paresthesias, myokymia); mild abnormal coagulation without significant bleeding. Severe: rapid swelling involving the whole body part; systolic pressure below 80 mm Hg, altered sensorium, tachycardia, tachypnea, respiratory distress; abnormal coagulation with bleeding (INR, aPTT, fibrinogen, platelet count below 20,000/µL).</p>
<p class="g2-p">She walked down each row. For coagulation she said moderate means mild abnormal signs with no significant bleeding but a possible risk of clots <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, and severe shows up on lab work with INR and aPTT changes.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that's when you could experience the nausea, vomiting, hypotension&rdquo; <span class='g2-src'>11/12 T@41314</span></p>
<p>&ldquo;Moderate, there can be mild abnormal coagulation signs&rdquo; <span class='g2-src'>11/12 T@41556</span></p>
<p>&ldquo;Severe is complete abnormal coagulation profile&rdquo; <span class='g2-src'>11/12 T@41682</span></p></div>
</div>
<div class="gpt g2-block"><h5>Snakebite treatment protocol (CroFab algorithm) (Patel Outdoor slide 59)</h5>
<p class="g2-status"><b>Status E</b> she presented it as reference only</p>
<p class="g2-p">The flowchart starts with the snakebite severity score: if antivenin is not warranted, monitor; if it is, give 4 to 6 vials of CroFab (adults and children get the same loading dose), assess the score hourly, repeat the loading dose if it increases, and if stable or decreased, begin maintenance of 2 vials every 6 hours for 3 doses.</p>
<p class="g2-p">She presented the protocol as one that providers follow in inpatient stays, with clinical pharmacists helping and administering the medications. The numbers were not discussed in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;just for reference&rdquo; <span class='g2-src'>11/12 T@42049</span></p>
<p>&ldquo;providers follow protocols inpatient&rdquo; <span class='g2-src'>11/12 T@42261</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-14">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 60&ndash;63</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 60&ndash;63)</span><b>Rabies: exposure, referral as an urgency, clinical stages and post-exposure prophylaxis (objectives 1, 5 and 7)</b><i>Patel Outdoor slide 60, 61, 62, 63</i></div>
<div class="gpt g2-block"><h5>Rabies map of Texas, 2022 (Patel Outdoor slide 60)</h5>
<p class="g2-status"><b>Status A</b> On the slide; she said only that rabies is common in Texas</p>
</div>
<div class="gpt g2-block"><h5>Clinical stages of human rabies (Patel Outdoor slide 61)</h5>
<p class="g2-status"><b>Status B, D</b> how the stages progress</p>
<p class="g2-p">The table gives: incubation period 20 to 90 days, no symptoms; prodrome 2 to 10 days with fever, malaise, anorexia, nausea, vomiting and paresthesias, pain or itching at the wound site; acute neurologic disease, encephalitic (80%) 2 to 7 days with anxiety, agitation, hyperactivity, bizarre behavior, hallucinations, autonomic dysfunction and hydrophobia, or paralytic (20%) 2 to 10 days with flaccid paralysis; coma and death 0 to 14 days, and recovery is rare.</p>
<p class="g2-p">She said the incubation period varies and described the stages worsening with the number of days: no symptoms, then fever and nausea, worsening to dehydration, and finally severe, bizarre behavior and hallucinations.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;in terms of rabies incubation period, it differs&rdquo; <span class='g2-src'>11/12 T@42719</span></p>
<p>&ldquo;So 2 days, you're starting off with possibly no symptoms&rdquo; <span class='g2-src'>11/12 T@42903</span></p>
<p>&ldquo;Severe, bizarre behaviors, hallucinations, worst-case scenario&rdquo; <span class='g2-src'>11/12 T@43073</span></p></div>
<div class="g2-note"><span class="g2-k">Her day counts and the table</span><p>Slide: incubation 20 to 90 days; prodrome 2 to 10 days. Lecture: 'So 2 days, you're starting off with possibly no symptoms' in a loose description of staging. A question with durations keys the table; she did not state the table's numbers in lecture.</p></div>
</div>
<div class="gpt g2-block"><h5>Rabies: exposure, first steps and urgency (Patel Outdoor slide 62)</h5>
<p class="g2-status"><b>Status B, C, E</b> why referral is urgent but not an emergency</p>
<p class="g2-p">The slide says rabies comes from exposure to a carrier, usually through saliva; a bite is most common (raccoons, bats, foxes, skunks, cats, dogs) and non-bite exposure (scratches, abrasions, open wounds, mucous membranes) is rare. First wash the wound with soap and water, or povidone-iodine if available. Refer as soon as possible for post-exposure prophylaxis (PEP): a medical urgency, not an emergency. Rabies vaccine and HRIG are never given at the same site or in the same syringe, and HRIG is not given in previously immunized patients. Untreated rabies is fatal.</p>
<p class="g2-p">She stressed the urgency and the fatal outcome as the reason to send the patient quickly. She described iodine as an ointment, where the slide says povidone-iodine, and said the injection is not given at the bite site.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;a bite is most common&rdquo; <span class='g2-src'>11/12 T@43322</span></p>
<p>&ldquo;A non-bite is pretty rare&rdquo; <span class='g2-src'>11/12 T@43423</span></p>
<p>&ldquo;So this is a medical urgency, not necessarily emergency&rdquo; <span class='g2-src'>11/12 T@43815</span></p>
<p>&ldquo;giving the injection at the same site where that bite has occurred&rdquo; <span class='g2-src'>11/12 T@44011</span></p>
<p>&ldquo;untreated rabies is fatal&rdquo; <span class='g2-src'>11/12 T@44130</span></p>
<p>&ldquo;it's urgency, not emergency&rdquo; <span class='g2-src'>11/12 T@44271</span></p></div>
</div>
<div class="gpt g2-block"><h5>Rabies post-exposure prophylaxis table (Patel Outdoor slide 63)</h5>
<p class="g2-status"><b>Status B, E</b> what changes with prior vaccination</p>
<p class="g2-p">Not previously vaccinated: cleanse wounds with soap and water (irrigate with povidone-iodine if available); human rabies immune globulin 20 IU/kg, infiltrating around and into the wounds if possible and giving any remainder IM away from the vaccine site; vaccine (HDCV or PCECV) 1 mL IM in an unaffected deltoid on days 0, 3, 7 and 14, with a fifth dose on day 28 for immunosuppressed patients. Previously vaccinated: cleanse the wound, no HRIG, vaccine 1 mL in the deltoid on days 0 and 3.</p>
<p class="g2-p">She gave the structure without the numbers: wound care, immune globulin and vaccine for patients not vaccinated; wound care and vaccine, with no immune globulin, for those vaccinated before; and the duration differs between the two. The reason prior vaccination removes the immune globulin is not in the lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're not going to go ahead and provide the immunoglobulin treatment&rdquo; <span class='g2-src'>11/12 T@44746</span></p>
<p>&ldquo;notice in terms of duration, differs between the patient&rdquo; <span class='g2-src'>11/12 T@44900</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-o-15">
<h3>Dr. Patel, slide by slide &middot; Outdoor exposures &middot; slides 64&ndash;67</h3>
<div class="gbar"><span>What the lecture adds (Outdoor 64&ndash;67)</span><b>Closing points: how to approach any outdoor exposure, the poison control number, references</b><i>Patel Outdoor slide 64, 65, 66, 67</i></div>
<div class="gpt g2-block"><h5>Conclusions: how to approach an outdoor exposure (Patel Outdoor slide 64)</h5>
<p class="g2-status"><b>Status E</b> her closing instructions</p>
<p class="g2-p">The slide says to identify the primary problem from the patient history and signs and symptoms, use the appropriate assessment and plan, and counsel the patient and family on prevention and the treatment plan.</p>
<p class="g2-p">She named the sources for identifying the cause: the history, the subjective information and the objective information, and said to use the pharmacist patient care plan. She tied the age of the patient and the key facts in the polls to the decision, and ended on prevention: all of these conditions can be prevented, so counseling on prevention is as important as the treatment plan.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Use the pharmacist patient care plan to best provide recommendation&rdquo; <span class='g2-src'>11/12 T@45324</span></p>
<p>&ldquo;Pay attention to the age of the patient.&rdquo; <span class='g2-src'>11/12 T@45397</span></p>
<p>&ldquo;Pay attention to certain key facts like we practice&rdquo; <span class='g2-src'>11/12 T@45438</span></p>
<p>&ldquo;remember, all of this can be prevented&rdquo; <span class='g2-src'>11/12 T@45585</span></p></div>
</div>
<div class="gpt g2-block"><h5>Poison control hotline (Patel Outdoor slide 65)</h5>
<p class="g2-status"><b>Status E</b> the number she asked students to retain</p>
<p class="g2-p">The slide gives the poison control center as a 24/7 hotline for supportive care, for envenomations as well as regular overdose support, with treatment suggestions and monitoring support: 1-800-222-1222.</p>
<p class="g2-p">She asked the class about the number and gave examples of its range: a child who got into bleach, bleach in the eyes, a snake bite. It is nationwide and open at all hours.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Remember this phone number?&rdquo; <span class='g2-src'>11/12 T@45749</span></p>
<p>&ldquo;It's a 24/7 hotline.&rdquo; <span class='g2-src'>11/12 T@45793</span></p>
<p>&ldquo;my child came in contact with bleach&rdquo; <span class='g2-src'>11/12 T@45911</span></p></div>
</div>
<div class="gpt g2-block"><h5>References (Patel Outdoor slide 66)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Outdoor slide 67)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture.</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p8s">Sun Exposure Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">SE = Patel_Sun-Exposure-Student.pdf, slide = PDF page; T@ = place in the 11/12 transcript; PollEv = her polls of 11/12. Her seven objectives (SE 3&ndash;4), one section each. Dr. Smith&rsquo;s Exam 1 sun lecture is a separate deck with its own guide above.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;Learning objectives very similar to all my lecture slides, so please review it. This is how I create my questions&rdquo; (T@46619 11/12).</li><li>&ldquo;For exam purposes, broad spectrum SPF greater than or equal to 15&rdquo; (T@53466 11/12); &ldquo;So hint, broad-spectrum SPF greater than or equal to 15 ... Know how much to apply. Know how often to apply&rdquo; (T@66751 11/12).</li><li>&ldquo;For her questions, pay attention to what she&rsquo;s focused on. For my questions, recommendation in terms of treatment ... if I ask you a question that&rsquo;s specific to an age, like I&rsquo;ll make it obvious&rdquo; (T@56238&ndash;56572 11/12).</li><li>Reference only: UVA against UVB detail, left to Dr. Smith&rsquo;s and Dr. Sikazwe&rsquo;s slides (T@47346 11/12); the anti-aging approaches table on SE 41 (T@70385 11/12); plant extracts on SE 51 (T@75069 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8s-1">
<h3>Sun Exposure · Objective 1: the self-care interview</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>SE 8&ndash;11, 19</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> History for sun protection <span class="g2-src">(SE 19)</span></h5>
<ul>
<li>Allergies</li>
<li>Skin sensitivities or disorders</li>
<li>Current medications and complementary products</li>
<li>Excluded from sunscreens</li>
<li>Photosensitizing agents</li>
<li>A previous adverse reaction to a sunscreen</li>
<li>Exposure and use pattern</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Photosensitizing drugs she named <span class="g2-src">(SE 10; T@49890&ndash;50187 11/12)</span></h5>
<ul>
<li>Doxycycline and the tetracyclines (and other antibiotics)</li>
<li>Ibuprofen</li>
<li>Combined oral contraceptives (&ldquo;to a certain extent&rdquo;)</li>
<li>Retinoids</li>
<li>Sulfonylureas</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Highlight the ones that we&rsquo;ve talked about to treat our derm conditions&rdquo; <span class="g2-src">(T@50187 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Highest risk <span class="g2-src">(SE 8&ndash;9)</span></h5>
<ul>
<li>Fitzpatrick types I and II</li>
<li>Blonde, red or light brown hair</li>
<li>A blistering sunburn</li>
<li>Tanning beds</li>
<li>A family member with melanoma</li>
<li>Freckles</li>
<li>A previous growth on skin or lips from UV exposure</li>
<li>A previous or current UV-induced skin disorder (skin cancer, DNA repair deficiency, photodermatitis, vitiligo)</li>
<li>A history of autoimmune disease</li>
<li>Photosensitizing or immunosuppressive medications</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-2">
<h3>Sun Exposure · Objective 2: name the condition</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>SE 24, 28, 39&ndash;40</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 24)</span></h5>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">After exposure, sunburn symptoms start at about</span><span class="g2-tile-num">4 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn erythema peaks at around</span><span class="g2-tile-num">24 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn may last up to</span><span class="g2-tile-num">5 days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Suspicious lesion, ABCDE <span class="g2-src">(SE 28)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">A</th><td>Asymmetry</td></tr>
<tr><th scope="row">B</th><td>Border irregular</td></tr>
<tr><th scope="row">C</th><td>Color uneven</td></tr>
<tr><th scope="row">D</th><td>Diameter, most larger than <b>6 millimeters</b></td></tr>
<tr><th scope="row">E</th><td>Evolving over weeks or months</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging and chronologic aging <span class="g2-src">(SE 40)</span></h5>
<div class="g2-two">
<div>
<p class="g2-sub">Photoaging</p>
<ul>
<li>Atrophic skin</li>
<li>Coarse wrinkles</li>
<li>Leathery skin</li>
<li>Lentigines</li>
<li>Bronzed appearance</li>
<li>Yellow cobblestone appearance</li>
<li>Telangiectasis</li>
<li>Bruising</li>
<li>Sun-induced dermatitis</li>
</ul>
</div>
<div>
<p class="g2-sub">Chronologic aging</p>
<ul>
<li>Thin skin</li>
<li>Fine wrinkles</li>
<li>Xerosis</li>
<li>Laxity</li>
</ul>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Glogau types <span class="g2-src">(SE 39)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Type</th><th scope="col">Wrinkles</th><th scope="col">Age</th></tr></thead>
<tbody>
<tr><th scope="row">I</th><td>Mild, no wrinkles</td><td><span class="g2-lab">Age</span><b>20&ndash;30 years</b> <span class="g2-src">(T@68961 11/12)</span></td></tr>
<tr><th scope="row">II</th><td>Wrinkles in motion</td><td><span class="g2-lab">Age</span><b>30&ndash;40</b></td></tr>
<tr><th scope="row">III</th><td>Wrinkles at rest</td><td><span class="g2-lab">Age</span><b>50 or older</b></td></tr>
<tr><th scope="row">IV</th><td>Only wrinkles</td><td><span class="g2-lab">Age</span><b>60 or older</b></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p8s-3">
<h3>Sun Exposure · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>SE 13, 30, 37, 46, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn, not self-care <span class="g2-src">(SE 30)</span></h5>
<ul>
<li>Large areas of blistering</li>
<li>Fever</li>
<li>Extreme pain</li>
<li>Headache or confusion</li>
<li>Lightheadedness or vision changes</li>
<li>Severe swelling</li>
<li>Signs of infection</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Excluded from sunscreen <span class="g2-src">(SE 13)</span></h5>
<ul>
<li>Under <b>6 months</b> of age</li>
<li>Allergy to all sunscreen ingredients</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> ABCDE rule <span class="g2-src">(SE 37)</span></h5>
<p class="g2-p">A suspicious skin lesion is looked at by a health care provider, to decide whether it is skin cancer or another lesion that needs treatment.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Hydroquinone and chemical peels</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Hydroquinone</th><td>When prescribed by a licensed provider <span class="g2-src">(SE 48)</span></td></tr>
<tr><th scope="row">Chemical peels</th><td><p class="g2-said"><span class="g2-k">Said in class</span>Not self-applied OTC <span class="g2-src">(T@72287 11/12)</span></p></td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Can she use the product on her four-month-old <span class="g2-tap">Show answer</span></summary><p>The infant wears protective clothing and sunlight is restricted (not applying it twice daily before exposure; not waiting until over 7 or over 8 months of age) <span class="g2-src">(T@66129&ndash;66269 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8s-4">
<h3>Sun Exposure · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>List treatment goals</b><i>SE 13, 29, 42</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 29)</span></h5>
<ul>
<li>Hydration</li>
<li>Relieve pain</li>
<li>Provide physical protection</li>
<li>Reduce the chances of infection or scarring</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sun protection <span class="g2-src">(SE 13)</span></h5>
<ul>
<li>Everyone should wear sunscreen</li>
<li>UV radiation causes premature skin aging and skin cancers</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging: no goals slide; prevention <span class="g2-src">(SE 42, 53)</span></h5>
<ul>
<li>Photoaging is preventable and cumulative</li>
<li>Sunscreen, protective clothing, less exposure to air pollution and smoking</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-5">
<h3>Sun Exposure · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Recommend appropriate non-drug therapy</b><i>SE 12, 29, 37, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sun safety <span class="g2-src">(SE 12, 37)</span></h5>
<ul>
<li>Limit sun from <b>10 am to 4 pm</b></li>
<li>Check the UV index, a cloudy day is not protective</li>
<li>Wide-brimmed hat (<b>4 inches</b>)</li>
<li>Tight-weave clothing</li>
<li>Sunglasses with UV protection</li>
<li>Shade</li>
<li>No tanning beds</li>
<li>Snow and sand reflect UV radiation</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sunburn <span class="g2-src">(SE 29)</span></h5>
<ul>
<li>The first treatment is non-drug</li>
<li>Within the past <b>20 minutes</b>, cool water or cool wet cloths</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging <span class="g2-src">(SE 53)</span></h5>
<ul>
<li>Face cleaned <b>twice daily</b> with a mild cleanser</li>
<li>Moisturizer <b>twice daily or more often</b>, lips included</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-6">
<h3>Sun Exposure · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (SE 4)</span><b>Dosing frequency and max days of use; onset; length of treatment; common and rare but serious adverse effects; contraindications and interactions</b><i>SE 14&ndash;18, 21, 31&ndash;33, 43&ndash;49, 54</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunscreen <span class="g2-src">(SE 14&ndash;15)</span></h5>
<div class="g2-two">
<table class="g2-table g2-kv">
<caption>Which product</caption>
<tbody>
<tr><th scope="row">Spectrum</th><td>Broad spectrum</td></tr>
<tr><th scope="row">SPF</th><td>SPF <b>&ge; 15</b>, prefer <b>30+</b></td></tr>
<tr><th scope="row">Water</th><td>Water resistant for swimming or sweating</td></tr>
</tbody>
</table>
<table class="g2-table g2-kv">
<caption>Applying it <span class="g2-src">(SE 21)</span></caption>
<tbody>
<tr><th scope="row">Amount</th><td>Adult: about <b>1 ounce</b> over all exposed skin</td></tr>
<tr><th scope="row">When</th><td><b>15 minutes</b> before</td></tr>
<tr><th scope="row">Reapply</th><td>Every <b>40&ndash;80 minutes</b> (as labeled), and after moisture or towel drying; more often if swimming, sweating or not water resistant</td></tr>
</tbody>
</table>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sensitive skin or a previous reaction <span class="g2-src">(SE 17)</span></h5>
<p class="g2-p">Avoid <b>PABA</b>; consider a GRASE sunscreen: <b>zinc oxide or titanium dioxide</b>.</p>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;What two ingredients are most effective, OK? Zinc oxide, titanium dioxide&rdquo; <span class="g2-src">(T@55166 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Sunburn <span class="g2-src">(SE 31&ndash;33)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Systemic analgesic</th><td>For the first <b>1&ndash;2 days</b></td></tr>
<tr><th scope="row">Skin protectant</th><td>After <b>24 hours</b></td></tr>
<tr><th scope="row">Aloe vera</th><td>On intact skin as an alternative</td></tr>
<tr><th scope="row">First-aid antiseptics and topical anesthetics</th><td><b>Not recommended for routine use</b>; if used, only 1&ndash;2% BSA of intact skin, no more than 3&ndash;4 times a day</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Photoaging <span class="g2-src">(SE 43&ndash;49, 54)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Retinoid</th><td>Once at bedtime to dry skin, SPF 30+ by day</td></tr>
<tr><th scope="row">Alpha hydroxy acid</th><td>To dry skin within <b>15 minutes</b> of cleansing</td></tr>
<tr><th scope="row">Hydroquinone 4%</th><td>For hyperpigmentation, <b>three months at most</b>, with sunscreen, not FDA-approved for OTC sale, ochronosis</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-sun">Reference: sunscreen, sunburn, photoaging</button><button type="button" class="chip" data-jump="ref:ref-p8-smithpatel">Reference: Dr. Smith and Dr. Patel compared</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Sunburn pain and tenderness <span class="g2-tap">Show answer</span></summary><p>Oral ibuprofen (not topical bacitracin, hydrocortisone or benzocaine) <span class="g2-src">(T@65246 11/12)</span></p></details>
<details class="g2-self"><summary>Daily use to prevent skin cancer <span class="g2-tap">Show answer</span></summary><p>Water-resistant broad-spectrum sunscreen, SPF 50 (not SPF 10; not SPF 30 without broad spectrum; not clothing and hats alone) <span class="g2-src">(T@65588&ndash;65673 11/12)</span></p></details>
<details class="g2-self"><summary>Hyperpigmentation <span class="g2-tap">Show answer</span></summary><p>Hydroquinone (not benzoyl peroxide, sodium hyaluronate or lactic acid) <span class="g2-src">(T@76234 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8s-7">
<h3>Sun Exposure · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (SE 4)</span><b>Provide follow-up recommendations</b><i>SE 34, 37, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 34)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Sunburn: refer if progressed or worse after</span><span class="g2-tile-num">24&ndash;48 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn: refer if not healed in</span><span class="g2-tile-num">7 days</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;7-day policy applies here as well&rdquo; <span class="g2-src">(T@64695 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sunscreen <span class="g2-src">(SE 37)</span></h5>
<ul>
<li>Stop any product that causes redness, itching, rash or exaggerated sunburn</li>
<li>On a photosensitizing drug, sunscreen and protective clothing every day</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging <span class="g2-src">(SE 53)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Photoaging: results take at least</span><span class="g2-tile-num">four weeks</span></div>
</div>
</div>
</section>

<details class="gdetails" id="gpl-p8s">
<summary>Dr. Patel: Sun exposure slide by slide, what the lecture adds (56 slides)</summary>
<section class="gobj" id="gobj-pl-u-1">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 1&ndash;5</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 1&ndash;5)</span><b>Her objectives slides are where she says her questions come from, so the lecture is read against them</b><i>Patel Sun Exposure slide 1, 3, 4, 5</i></div>
<div class="gpt g2-block"><h5>Title slide (Patel Sun Exposure slide 1)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Learning objectives 1 to 5 (Patel Sun Exposure slide 3)</h5>
<p class="g2-status"><b>Status E</b> exam cue: the objectives are the source of her questions</p>
<p>Objectives 1 to 5 are the self-care interview, deciding the condition from signs, symptoms and history, deciding whether the patient is an appropriate self-care candidate, listing treatment goals, and recommending non-drug therapy. Her cue covers the whole objectives list: it tells the class where her questions come from, so the later slides are read against it.</p>
<p>In this lecture the self-care candidate decision has concrete answers: infants under 6 months and patients allergic to every sunscreen ingredient are excluded, and a sunburn with blistering, fever or signs of infection is not self-treated.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Learning objectives very similar to all my lecture slides, so please review it.&rdquo; <span class='g2-src'>11/12 T@46539</span></p>
<p>&ldquo;This is how I create my questions.&rdquo; <span class='g2-src'>11/12 T@46619</span></p></div>
</div>
<div class="gpt g2-block"><h5>Learning objectives 6 and 7 (Patel Sun Exposure slide 4)</h5>
<p class="g2-status"><b>Status E</b> exam cue plus the numbers the lecture gives for objective 6</p>
<p>Objective 6 asks for dosing frequency and maximum days of use for the ingredients highlighted in lecture, onset, length of treatment, adverse effects, contraindications, interactions, and follow-up. The numbers in this lecture that fit it are the 40 to 80 minute reapplication interval, the 1 to 2 day limit for systemic analgesics in sunburn, the 7-day follow-up, and the 3-month limit for hydroquinone.</p>
<p>At the start of the day she said that anytime she gives hints, those are what she wants the class to know; the later blocks mark each point she flagged.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this is what I want you to know. Make note of that.&rdquo; <span class='g2-src'>11/12 T@1183</span></p></div>
</div>
<div class="gpt g2-block"><h5>Poll Everywhere slide (Patel Sun Exposure slide 5)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>

<section class="gobj" id="gobj-pl-u-2">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 6&ndash;8</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 6&ndash;8)</span><b>Which UV rays reach which layer of skin, and the skin-tone scale that guides each recommendation</b><i>Patel Sun Exposure slide 6, 7, 8</i></div>
<div class="gpt g2-block"><h5>UV light has two types of radiation reaching the skin (Patel Sun Exposure slide 6)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds where each type reaches and whom to follow for details</p>
<p>The picture shows UV-A and UV-B entering the skin layers. UVA reaches deeper, the dermis, and UVB stays in the epidermis. She sent the class to Dr. Smith and Dr. Sikazwe for the difference between the two, and she uses the terms UVA and UVB in her own slides.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;refer to Doctor Smith and Doctor Sicasway's slides&rdquo; <span class='g2-src'>11/12 T@47346</span></p>
<p>&ldquo;UVA penetrates a bit deeper to the dermis&rdquo; <span class='g2-src'>11/12 T@47663</span></p>
<p>&ldquo;UVB penetrates a little bit less, stays at the epidermis layer.&rdquo; <span class='g2-src'>11/12 T@47710</span></p></div>
</div>
<div class="gpt g2-block"><h5>UV radiation: all UV is potentially hazardous (Patel Sun Exposure slide 7)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the practical result for sunscreen choice</p>
<p>The slide lists UVC, UVB and UVA with wavelengths in nanometers. For recommendations, the two points she stressed are that the atmosphere absorbs much of the UVB and most sunscreens block it, while UVA is the largest part of sunlight, goes deeper, and is blocked by broad-spectrum sunscreens. That is why broad spectrum, not SPF alone, is the key term in the later slides.</p>
<p>The slide also says UVB is the region most responsible for sunburn and produces more DNA lesions; she did not discuss these points.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the atmosphere absorbs the UVB quite often&rdquo; <span class='g2-src'>11/12 T@48005</span></p>
<p>&ldquo;UVA is the largest contributor to sunlight&rdquo; <span class='g2-src'>11/12 T@48174</span></p>
<p>&ldquo;It is blocked by broad spectrum sunscreens. That is the biggest key term there.&rdquo; <span class='g2-src'>11/12 T@48262</span></p></div>
</div>
<div class="gpt g2-block"><h5>Fitzpatrick scale of skin tone (Patel Sun Exposure slide 8)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds how the scale is used</p>
<p>The scale runs from I, very fair, always burns and cannot tan, to VI, dark brown, never burns and always tans. She uses it to tailor advice, together with the patient's genetics, and she names Fitzpatrick I and II as the patients with the worst outcomes from UV radiation. Type IV is olive, rarely burns and always tans, and the patient case on slide 52 is a type IV patient.</p>
<p>The captions print 'Fitzpatrick 11' for type II.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;based on their skin tone as well as their genetics&rdquo; <span class='g2-src'>11/12 T@48434</span></p>
<p>&ldquo;oftentimes we're seeing our patients, Fitzpatrick 1 and 11, have the worst-case scenarios&rdquo; <span class='g2-src'>11/12 T@48974</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-3">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 9&ndash;11</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 9&ndash;11)</span><b>Who is at highest risk from UV radiation, and which drugs add to that risk</b><i>Patel Sun Exposure slide 9, 10, 11</i></div>
<div class="gpt g2-block"><h5>Patients at highest risk of UV-induced problems (Patel Sun Exposure slide 9)</h5>
<p class="g2-status"><b>Status B, C</b> slide lists the risks; lecture adds the drug link and what each risk means</p>
<p>Highest risk: Fitzpatrick I and II, light hair, freckles, a history of blistering sunburns, a prior UV-caused growth, a UV-induced skin disorder such as skin cancer or DNA repair deficiency, a family member with melanoma, tanning beds, photosensitizing or immunosuppressive drugs, and autoimmune disease. The lecture ties this to drugs the class has already seen: tetracyclines are the drug class, and doxycycline is the most common photosensitizing antibiotic. A patient taking doxycycline falls under the photosensitizing-drug item on the slide.</p>
<p>She described tanning beds as extra ray exposure beyond sunlight.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Tetracyclines in general is the medication class.&rdquo; <span class='g2-src'>11/12 T@49936</span></p>
<p>&ldquo;that is the most common photosensitizing antibiotic&rdquo; <span class='g2-src'>11/12 T@50043</span></p>
<p>&ldquo;if you are increasing your ray exposure, so such as tanning beds&rdquo; <span class='g2-src'>11/12 T@49624</span></p></div>
</div>
<div class="gpt g2-block"><h5>Medications associated with increased sun sensitivity (Patel Sun Exposure slide 10)</h5>
<p class="g2-status"><b>Status C, E</b> slide lists many drugs; lecture says which to focus on</p>
<p>The slide covers antibiotics, antifungals, antihistamines, statins, diuretics, NSAIDs, combined oral contraceptives and estrogens, phenothiazines, psoralens, retinoids, sulfonamides, sulfonylureas for type 2 diabetes, and alpha-hydroxy acids in cosmetics. Her instruction is to mark the ones used for the skin conditions covered in her course: the doxycyclines and other antibiotics, ibuprofen, combined oral contraceptives ("to a certain extent"), retinoids, and sulfonylureas. She gave the reason that this way the student knows how to educate the patient.</p>
<p>The antibiotic names on the slide include ciprofloxacin, doxycycline, levofloxacin, ofloxacin, tetracycline and trimethoprim.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;The list of medications that increase sun sensitivity is endless.&rdquo; <span class='g2-src'>11/12 T@50187</span></p>
<p>&ldquo;So highlight the ones that we've talked about to treat our derm conditions.&rdquo; <span class='g2-src'>11/12 T@50562</span></p></div>
</div>
<div class="gpt g2-block"><h5>Medications that may contribute to photosensitivity (Patel Sun Exposure slide 11)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture explains how the two lists differ</p>
<p>Slide 10 holds drugs associated with increased sun sensitivity. Slide 11 holds drug groups that may contribute: anticonvulsants, antidepressants and antipsychotics, antihypertensives and diuretics, NSAIDs, oral contraceptives, and retinoids. She said the second list is possible, not definite, and that a few drugs appear on both; by the two slides these are diuretics, NSAIDs, oral contraceptives and retinoids.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;it's not definite in terms of if they can or cannot&rdquo; <span class='g2-src'>11/12 T@50764</span></p>
<p>&ldquo;notice that there's a few that are on both lists&rdquo; <span class='g2-src'>11/12 T@50930</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-4">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 12&ndash;15</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 12&ndash;15)</span><b>Who should use sunscreen, how to choose it, and the SPF number she keys for the exam</b><i>Patel Sun Exposure slide 12, 13, 14, 15</i></div>
<div class="gpt g2-block"><h5>Sun safety measures (Patel Sun Exposure slide 12)</h5>
<p class="g2-status"><b>Status B, C</b> slide lists measures; lecture adds the timing and the UV index tool</p>
<p>The measures are avoiding the high-risk window, checking the UV index, sunscreen, sunglasses, a hat, clothing, shade, and no tanning devices. The rays are strongest between 10 a.m. and 4 p.m., and she tells pharmacists to point patients to the UV index in a phone weather app. The slide adds that a cloudy or overcast day is not protective, a hat brim of 4 inches, and tight-weave or high-SPF clothing; she did not discuss these.</p>
<p>Her framing for the whole slide is prevention.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;between that 10:00 to 4 p.m. is when the rays are the highest&rdquo; <span class='g2-src'>11/12 T@51127</span></p>
<p>&ldquo;within our weather apps, you can educate our patients to check the UV index&rdquo; <span class='g2-src'>11/12 T@51217</span></p>
<p>&ldquo;prevention is key&rdquo; <span class='g2-src'>11/12 T@51024</span></p></div>
</div>
<div class="gpt g2-block"><h5>Who should use sunscreen and who is excluded (Patel Sun Exposure slide 13)</h5>
<p class="g2-status"><b>Status B, D</b> fact on slide; lecture adds the reasons and what replaces sunscreen; "all" versus "any" allergy</p>
<p>Everyone should wear sunscreen, because UV radiation causes premature aging and skin cancer. She stressed that patients who think they do not burn or tan still need it, so Fitzpatrick type does not remove the recommendation. The exclusions are age under 6 months and allergy to all sunscreen ingredients; for an infant she recommends clothing, hats and shade instead. The slide says skin cancers raise the risk of other cancers; she spoke only of melanoma risk.</p>
<p>Her caption wording 'non-farm' means non-pharmacologic.</p>
<div class="g2-note"><span class="g2-k">Both versions</span><p>Slide 13 lists the exclusion as allergy to all sunscreen ingredients. She said a patient allergic to any of the sunscreen ingredients is self-excluded. An exam written from her slides would key the slide wording, all ingredients; the existing practice questions do not test the difference.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;everybody, even anybody that thinks that they're not gonna burn or tan&rdquo; <span class='g2-src'>11/12 T@51459</span></p>
<p>&ldquo;we would not recommend to wear sunscreen&rdquo; <span class='g2-src'>11/12 T@51867</span></p>
<p>&ldquo;if a patient's allergic to any of the sunscreen ingredients&rdquo; <span class='g2-src'>11/12 T@52014</span></p>
<p>&ldquo;Instead, we're protecting their skin with all the other non-farm measures, clothing, hats, shade.&rdquo; <span class='g2-src'>11/12 T@51909</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunscreen selection: four questions (Patel Sun Exposure slide 14)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the ranking and the matching to the patient</p>
<p>The slide gives four steps: compare spectrum coverage, choose among active and inert ingredients, match to the patient's history and Fitzpatrick score, and match to the planned activity. She called broad spectrum the main point to pay attention to. Activity changes the product: for swimming or heavy sweating she recommends a sunscreen for that activity. She said "waterproof"; slides 36 and 55 and her case answer use the label term water resistant.</p>
<p>She mentioned fragrance-free and hypoallergenic products as other choices.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;The biggest thing to pay attention to is broad spectrum&rdquo; <span class='g2-src'>11/12 T@52237</span></p>
<p>&ldquo;that best fits the patient's medical history as well as the Fitzpatrick scale&rdquo; <span class='g2-src'>11/12 T@52539</span></p>
<p>&ldquo;So if they're gonna be in the water, there's waterproof sunscreen.&rdquo; <span class='g2-src'>11/12 T@52695</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunscreen selection continued: SPF (Patel Sun Exposure slide 15)</h5>
<p class="g2-status"><b>Status B, E</b> fact on slide; lecture adds why SPF is not enough and which number is keyed</p>
<p>SPF indicates only UVB protection, which is why the product must also be broad spectrum to cover UVA. The slide's ladder is SPF 15 blocks 93% of UVB, SPF 30 blocks 97%, SPF 50 blocks 98%, and SPF 100 blocks 99%. For exam purposes the number is SPF 15 or higher with broad spectrum; the slide prefers SPF 30+, and for a patient she said the higher the SPF the better.</p>
<p>She gave the exam answer and the higher-SPF advice separately.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;SPF is only indicated to cover UVB.&rdquo; <span class='g2-src'>11/12 T@52976</span></p>
<p>&ldquo;for exam purposes, broad spectrum SPF greater than or equal to 15&rdquo; <span class='g2-src'>11/12 T@53466</span></p>
<p>&ldquo;Education purposes, patient-specific, personal purposes, the higher the SPF the better&rdquo; <span class='g2-src'>11/12 T@53533</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-5">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 16&ndash;18</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 16&ndash;18)</span><b>Physical and chemical sunscreen ingredients and which ones she wants named as most effective</b><i>Patel Sun Exposure slide 16, 17, 18</i></div>
<div class="gpt g2-block"><h5>Sunscreen ingredients: physical and chemical (Patel Sun Exposure slide 16)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds how each type works and the irritation difference</p>
<p>Physical sunscreens, zinc oxide and titanium dioxide, are opaque and reflect and scatter UV rays. Chemical sunscreens absorb the rays and then block them. Because chemical ingredients absorb the radiation, they can irritate the skin and even cause burning, which is the reverse of what the patient wants; physical ingredients reflect the rays, and slide 17 points sensitive skin to the physical pair. The slide lists many chemical ingredients, including padimate O, meradimate, oxybenzone, avobenzone, octinoxate and ecamsule, and shows an overlap for combination products.</p>
<p>She did not go through the chemical ingredient list by name.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Physical, zinc oxide, titanium dioxide. This reflects the UV rays&rdquo; <span class='g2-src'>11/12 T@53716</span></p>
<p>&ldquo;Chemical ingredients also tend to irritate the skin&rdquo; <span class='g2-src'>11/12 T@53859</span></p>
<p>&ldquo;it's absorbing the rays, then it's blocking it&rdquo; <span class='g2-src'>11/12 T@54117</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunscreen ingredient choice for sensitive skin and photosensitive patients (Patel Sun Exposure slide 17)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds what is on the market and the preferred ingredients</p>
<p>For sensitive skin or earlier allergic reactions the slide says avoid ortho-aminobenzoic acid (PABA) and consider a GRASE sunscreen, zinc oxide or titanium dioxide. For a patient with a sun-induced disorder or on photosensitizing drugs, it says to reduce sun exposure and use a broad-spectrum product such as avobenzone with padimate O or octocrylene, meradimate, titanium dioxide or benzophenones. She added that few products on the market are free of chemical ingredients, and that a product with the first ingredient she names plus titanium dioxide is a mixture of chemical and physical. The first ingredient is probably octocrylene from slide 17. Her last statement for patient advice is the physical pair as most preferred.</p>
<p>Her spoken name for that ingredient is garbled in the captions: 'octorolin' <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;not a lot of sunscreens on the market that don't have chemical ingredients&rdquo; <span class='g2-src'>11/12 T@54711</span></p>
<p>&ldquo;Just understand that it's a mixture of chemical and physical&rdquo; <span class='g2-src'>11/12 T@54945</span></p>
<p>&ldquo;Physical ingredients, zinc oxide, titanium dioxide is most preferred.&rdquo; <span class='g2-src'>11/12 T@55941</span></p></div>
</div>
<div class="gpt g2-block"><h5>Proposed GRASE status of sunscreen ingredients (Patel Sun Exposure slide 18)</h5>
<p class="g2-status"><b>Status B, E</b> fact on slide; lecture states which two she wants known</p>
<p>The FDA table puts zinc oxide and titanium dioxide in the GRASE (generally recognized as safe and effective) column, aminobenzoic acid (PABA) and trolamine salicylate in the not-GRASE column for safety concerns, and cinoxate, dioxybenzone, ensulizole, homosalate, meradimate, octinoxate, octisalate, octocrylene, padimate O, sulisobenzone, oxybenzone and avobenzone in the column that needs more data. Her emphasis was a single point: know the two ingredients that are GRASE and most effective.</p>
<p>The captions print GRASE as 'graze' and 'gray'.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;zinc oxide and titanium dioxide were listed as a graze ingredient&rdquo; <span class='g2-src'>11/12 T@55070</span></p>
<p>&ldquo;I want you to understand what two ingredients are most effective&rdquo; <span class='g2-src'>11/12 T@55141</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-6">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 19&ndash;23</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 19&ndash;23)</span><b>The sun-protection interview, why chemical absorption matters, how much and how often to apply, and vitamin D</b><i>Patel Sun Exposure slide 19, 20, 21, 22, 23</i></div>
<div class="gpt g2-block"><h5>Medical history questions for sun protection (Patel Sun Exposure slide 19)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds how the answers decide the product</p>
<p>The slide asks about allergies, skin sensitivities, current medications and CAM, exclusion from sunscreen, photosensitizing drugs, earlier reactions, and exposure pattern. She explained that the answers decide the recommendation, and that when nothing excludes the patient the default is a broad-spectrum product of SPF 15 or higher. The exclusions are age under 6 months and allergy; when neither applies, that is the default.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that is how we're gonna go ahead and recommend the sunscreen&rdquo; <span class='g2-src'>11/12 T@55683</span></p>
<p>&ldquo;We're gonna recommend a sunscreen that's broad-spectrum, greater than or equal to SPF 15.&rdquo; <span class='g2-src'>11/12 T@55824</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunscreen ingredient absorption into the blood (Patel Sun Exposure slide 20)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds the threshold meaning and the pharmacist role</p>
<p>The chart shows the average maximum blood level of avobenzone, homosalate, octisalate, octocrylene, octinoxate and oxybenzone from FDA testing. The red line is the FDA threshold of 0.5 ng/mL on the slide, which she said means chemical ingredients could cause harm. Every bar on the chart is above the line, and oxybenzone is by far the highest. Some products still use that ingredient and some have dropped it, so the pharmacist's job is to read the ingredient list and recommend accordingly.</p>
<p>The chart scale is on the slide; she gave no numbers for it.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;this red line right here is the FDA threshold&rdquo; <span class='g2-src'>11/12 T@56775</span></p>
<p>&ldquo;oxybenzone being the highest average absorption in the blood level&rdquo; <span class='g2-src'>11/12 T@56885</span></p>
<p>&ldquo;it is our job as pharmacists to educate and provide the best recommendation&rdquo; <span class='g2-src'>11/12 T@57110</span></p></div>
</div>
<div class="gpt g2-block"><h5>How to apply sunscreen (Patel Sun Exposure slide 21)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds why patients still burn</p>
<p>Adults apply about 1 ounce to all exposed skin, 15 minutes before UV exposure, and reapply after moisture or towel drying and every 40 to 80 minutes. The biggest causes of sunburn are not enough product, not often enough, and not evenly. When a patient says sunscreen failed, the first check is how it was applied.</p>
<p>The captions print 'evenly' as 'vastly' in the first mention.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;they'll say I use sunscreen, but I still burnt&rdquo; <span class='g2-src'>11/12 T@57379</span></p>
<p>&ldquo;1 ounce throughout the areas that are exposed&rdquo; <span class='g2-src'>11/12 T@57500</span></p>
<p>&ldquo;reapply 40 to 80 minutes in increments of such&rdquo; <span class='g2-src'>11/12 T@57714</span></p>
<p>&ldquo;not applying enough&rdquo; <span class='g2-src'>11/12 T@57808</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunscreen application study: uncovered skin (Patel Sun Exposure slide 22)</h5>
<p class="g2-status"><b>Status B</b> figure and one result on slide; lecture explains what the red areas show</p>
<p>The images from a coverage study use red to mark skin the sunscreen did not cover. Her reading is that red areas are where the patient did not apply evenly, and the back and the feet were the most common misses. The slide's result, females 13.57% uncovered against males 21.94% (P=0.0045), was not read in the lecture. The counseling use is to apply evenly, often and regularly.</p>
<p>The study figure shows a well-covered person on the left and a woman with missed areas on the right.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;an example of how a patient did not apply the sunscreen evenly&rdquo; <span class='g2-src'>11/12 T@57945</span></p>
<p>&ldquo;the feet tend to be the most common&rdquo; <span class='g2-src'>11/12 T@58161</span></p></div>
</div>
<div class="gpt g2-block"><h5>Vitamin D while wearing sunscreen (Patel Sun Exposure slide 23)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the patient-question context</p>
<p>Daily broad-spectrum sunscreen with high UVA protection does not compromise vitamin D status in healthy people. Patients often say they skip sunscreen or going outside because of vitamin D, and this is the answer to them. The slide adds that vitamin D screening and supplementation are recommended in photosensitivity disorders and other high-risk groups (elderly, Fitzpatrick IV to VI); she did not mention that part.</p>
<p>Her statement applies to broad-spectrum products.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;It will not compromise your vitamin D absorption&rdquo; <span class='g2-src'>11/12 T@58428</span></p>
<p>&ldquo;So in general, it will not compromise vitamin D levels.&rdquo; <span class='g2-src'>11/12 T@58738</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-7">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 24&ndash;28</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 24&ndash;28)</span><b>The timeline of sunburn, the scale of skin cancer, the lasting skin and eye changes, and the ABCDE rule</b><i>Patel Sun Exposure slide 24, 25, 26, 27, 28</i></div>
<div class="gpt g2-block"><h5>Sunburn: what happens and when (Patel Sun Exposure slide 24)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds what the timeline looks like to the patient</p>
<p>Symptoms start about 4 hours after exposure, erythema peaks at around 24 hours, and the burn may last up to 5 days. A patient therefore feels fine outdoors and notices the burn after coming inside, which explains why a patient who had no pain during the activity can still be burned. The slide also names peripheral vasodilation in the epidermis and an inflammatory reaction with lymphocyte infiltrates; she did not discuss the mechanism.</p>
<p>The captions print the duration as 'within 10, 5 days' <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>; the slide says up to 5 days.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;symptoms start about 4 hours after exposure&rdquo; <span class='g2-src'>11/12 T@58911</span></p>
<p>&ldquo;that peak of symptoms occur within 24 hours&rdquo; <span class='g2-src'>11/12 T@59109</span></p>
<p>&ldquo;they come inside and then they notice that they're burnt&rdquo; <span class='g2-src'>11/12 T@59006</span></p></div>
</div>
<div class="gpt g2-block"><h5>Skin cancer statistics and the base tan message (Patel Sun Exposure slide 25)</h5>
<p class="g2-status"><b>Status D</b> lecture figure differs slightly from the slide</p>
<p>The CDC graphic says nearly 5 million people are treated for skin cancers each year at a cost of more than $8 billion, and about 76,000 new melanoma cases and 9,000 deaths; it also says most skin cancers can be prevented, and a poster reads a base tan is not a safe tan.</p>
<div class="g2-note"><span class="g2-k">Both versions</span><p>Slide 25 reads 'Nearly 5 million people are treated'. The lecture says 'over 5 million'. An exam written from her slides would key the slide wording, because she says her questions come from the slides and objectives; neither figure is an objective. The 76,000 and 9,000 figures are on the slide only.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So over 5 million people are treated for skin cancer.&rdquo; <span class='g2-src'>11/12 T@59450</span></p>
<p>&ldquo;And this can all be prevented.&rdquo; <span class='g2-src'>11/12 T@59585</span></p></div>
</div>
<div class="gpt g2-block"><h5>Skin and eye changes from sun exposure (Patel Sun Exposure slide 26)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the cause and the preventive action</p>
<p>The slide shows cataract, pterygium, age spots, wrinkles and melasma as the skin and eye changes from sun exposure. She tied them to protection: sunglasses protect the eyes, a hat protects the face, and shade and sunscreen protect the skin. The captions print pterygium as 'phyrogen' <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>; the slide label is the spelling to use.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Cataracts. Age spots, wrinkles, melasma.&rdquo; <span class='g2-src'>11/12 T@59687</span></p>
<p>&ldquo;not wearing sunglasses, not protecting your face with a hat&rdquo; <span class='g2-src'>11/12 T@59855</span></p></div>
</div>
<div class="gpt g2-block"><h5>Long-term risks of UV: three skin cancers and premature aging (Patel Sun Exposure slide 27)</h5>
<p class="g2-status"><b>Status B, C</b> slide gives locations; lecture adds how each cancer looks</p>
<p>The slide lists squamous cell carcinoma and basal cell carcinoma, both common on sun-exposed face, head and neck (basal cell also on the trunk), and melanoma, which can occur anywhere and is more common on skin with intermittent intense exposure, torso and legs. The lecture gives the appearance that separates cancer from a mole: an irregular border as the sign of cancer rather than a mole, squamous cell lighter in color, basal cell a little larger and a little darker pink, and melanoma the darkest. Premature aging means wrinkling and hyperpigmentation.</p>
<p>Her wording makes melanoma the worst case.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;that irregularity of the border is there&rdquo; <span class='g2-src'>11/12 T@60223</span></p>
<p>&ldquo;squamous cell carcinoma tends to be lighter in skin color&rdquo; <span class='g2-src'>11/12 T@60160</span></p>
<p>&ldquo;Basal cell carcinoma is a little bit larger&rdquo; <span class='g2-src'>11/12 T@60265</span></p>
<p>&ldquo;Melanoma, worst case scenario is the darkest and often found on the body.&rdquo; <span class='g2-src'>11/12 T@60354</span></p></div>
</div>
<div class="gpt g2-block"><h5>ABCDE rule for skin cancer (Patel Sun Exposure slide 28)</h5>
<p class="g2-status"><b>Status D</b> diameter wording differs between slide and lecture</p>
<p>The rule is asymmetry, irregular border, uneven color, diameter, and evolving. Diameter on the slide means a change in size, usually an increase. Color can be black, brown and tan; the slide adds gray, red, pink, blue and white areas, while she named white, pink and red. Evolving means the mole changed over weeks or months; she described one mole progressing to the next.</p>
<div class="g2-note"><span class="g2-k">Both versions</span><p>Slide 28: 'most are larger than 6 millimeters wide (about 1/4 inch wide)'. Lecture: 'about 6 millimeters ... like a quarter inch wide'. Both use 6 mm and a quarter inch, but the slide says most melanomas are larger than that, while she said about 6 mm and added that this is 'like the largest'. An exam written from her slides would key the slide: 'larger than 6 mm (about 1/4 inch)', and the existing question P8S-039 keys 6 millimeters on that basis.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;A B C D E rule applies here again&rdquo; <span class='g2-src'>11/12 T@60584</span></p>
<p>&ldquo;The diameter tends to be about 6 millimeters&rdquo; <span class='g2-src'>11/12 T@60842</span></p>
<p>&ldquo;that's like the largest&rdquo; <span class='g2-src'>11/12 T@60927</span></p>
<p>&ldquo;it's evolving&rdquo; <span class='g2-src'>11/12 T@60956</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-8">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 29&ndash;32</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 29&ndash;32)</span><b>How sunburn is treated: goals, who is not a self-care patient, recommended products, and aloe</b><i>Patel Sun Exposure slide 29, 30, 31, 32</i></div>
<div class="gpt g2-block"><h5>Sunburn: treatment goals and plan (Patel Sun Exposure slide 29)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the infection signs and how products are chosen</p>
<p>Goals are hydration, pain relief, physical protection, lower chance of infection or scarring, and few drug adverse effects. Initial treatment is non-drug: if the burn happened in the past 20 minutes, immerse in cool water or use cool wet cloths. After that, any combination of indicated OTC products is acceptable, and the choice depends on patient preference, allergies and what has worked before. She tied the infection and scarring goal to peeling, oozing and blistering skin.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;if the burn has occurred within 20 minutes, immerse yourself in cool water&rdquo; <span class='g2-src'>11/12 T@61282</span></p>
<p>&ldquo;what they may be allergic to, what has worked in the past&rdquo; <span class='g2-src'>11/12 T@61542</span></p>
<p>&ldquo;especially if your skin is peeling, oozing, blistering&rdquo; <span class='g2-src'>11/12 T@61170</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunburn: exclusions for self-treatment (Patel Sun Exposure slide 30)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Sunburn treatment: recommended products (Patel Sun Exposure slide 31)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds the choice of analgesic and the timing of protectants</p>
<p>Systemic analgesics are listed first: an anti-inflammatory drug, an NSAID or acetaminophen, to reduce pain, erythema and edema, used for the first 1 to 2 days. Skin protectants, such as cocoa butter or petrolatum, help rehydration and irritation, are applied as often as needed, and are started only after 24 hours, because the skin is very sensitive early. She told the class to avoid products with alcohol or witch hazel. The captions name the example analgesics as Tylenol and ibuprofen <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<p>The slide adds that systemic analgesics last longer than topical anesthetics; she did not say this.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;the chart that I reviewed earlier comes into play here&rdquo; <span class='g2-src'>11/12 T@61900</span></p>
<p>&ldquo;you can go ahead and use it for up to 1 to 2 days&rdquo; <span class='g2-src'>11/12 T@62128</span></p>
<p>&ldquo;any products that have alcohol in them, witch hazel&rdquo; <span class='g2-src'>11/12 T@62310</span></p>
<p>&ldquo;because remember, the skin is very sensitive right when it does occur&rdquo; <span class='g2-src'>11/12 T@62551</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunburn: aloe vera as alternative treatment (Patel Sun Exposure slide 32)</h5>
<p class="g2-status"><b>Status C</b> fact on slide; lecture adds how to tell real aloe on the shelf</p>
<p>The slide says aloe vera is used topically on intact skin, may lower pain by inhibiting bradykinin and the inflammatory process, is not FDA approved for burns, and should not be taken internally because of drug interactions and adverse effects. The lecture adds the counseling point for products: read the ingredient list, because a bottle that lists aloe juice mixed with glycerin and other ingredients contains only about 5% aloe <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. She said the lack of FDA approval is partly because aloe is a natural ingredient, like supplements and vitamins, and that it has still shown data to be very effective.</p>
<p>Her check for the patient is the label wording below.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;look at the back of the bottle, look at the ingredients&rdquo; <span class='g2-src'>11/12 T@62806</span></p>
<p>&ldquo;make sure that it says pure aloe vera juice or pure aloe vera gel&rdquo; <span class='g2-src'>11/12 T@64152</span></p>
<p>&ldquo;It hasn't been approved by the FDA partly because it is a natural ingredient&rdquo; <span class='g2-src'>11/12 T@64219</span></p>
<p>&ldquo;it has shown data to be very effective&rdquo; <span class='g2-src'>11/12 T@64373</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-9">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 33&ndash;35</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 33&ndash;35)</span><b>Products not to recommend for sunburn, follow-up timing, and the case answers she gave</b><i>Patel Sun Exposure slide 33, 34, 35</i></div>
<div class="gpt g2-block"><h5>Sunburn treatment: not recommended (Patel Sun Exposure slide 33)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the reason</p>
<p>First aid antiseptics and topical anesthetics are not recommended for routine use. She said antiseptics can irritate and burn the skin even more. The slide's limit if they are used anyway is small areas (1 to 2% body surface area) of intact skin, no more than 3 to 4 times a day, with a risk of hypersensitivity and systemic symptoms; she did not repeat these limits.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;first aid antiseptics cause it can irritate and burn the skin even more&rdquo; <span class='g2-src'>11/12 T@64451</span></p>
<p>&ldquo;only recommend the products that we just covered&rdquo; <span class='g2-src'>11/12 T@64645</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sunburn follow-up (Patel Sun Exposure slide 34)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture ties it to the 7-day rule</p>
<p>Refer to a physician if the burn has progressed or worsened after 24 to 48 hours, or has not healed in 7 days. She stated that the 7-day policy used earlier in the course applies here as well. The caption prints 'worsened' as 'wears' <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;If it doesn't heal within 7 days, 7-day policy applies here as well&rdquo; <span class='g2-src'>11/12 T@64740</span></p></div>
</div>
<div class="gpt g2-block"><h5>Practice case: sun exposure in a 21-year-old woman (Patel Sun Exposure slide 35)</h5>
<p class="g2-status"><b>Status C, E</b> lecture gives the answers and reasoning; options are not on the slide</p>
<p>The case is a Fitzpatrick 2 woman with a one-day painful sunburn after a weekend with no sunscreen, no vesicles or peeling, cold showers helping, taking Yazmin. Three questions were asked and answered aloud; the option text is in the poll, not on the slide, so the letters are <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>. Pain and tenderness: option A, oral ibuprofen (the poll option text), which fits the systemic analgesic on slide 31. Daily skin cancer prevention: option D, a water-resistant broad-spectrum sunscreen with SPF 50, because she said the other options had an inappropriate SPF or lacked broad spectrum or water resistance. A 4-month-old: option A, protective clothing and restricting sun exposure, because sunscreen is excluded under 6 months.</p>
<p>Each answer applies a rule from slides 13, 15 and 31.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Remember key terms, pain and tenderness?&rdquo; <span class='g2-src'>11/12 T@65352</span></p>
<p>&ldquo;not appropriate SPF, right? Or wasn't broad-spectrum or wasn't water resistant&rdquo; <span class='g2-src'>11/12 T@65773</span></p>
<p>&ldquo;Remember, 6 months of age, OK, so not 7, not 8.&rdquo; <span class='g2-src'>11/12 T@66259</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-10">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 36&ndash;37</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 36&ndash;37)</span><b>The sun exposure counseling points she flagged as hints</b><i>Patel Sun Exposure slide 36, 37</i></div>
<div class="gpt g2-block"><h5>Sun exposure counseling points for patients (Patel Sun Exposure slide 36)</h5>
<p class="g2-status"><b>Status E, B</b> exam cue: she called the first point a hint and listed what to know</p>
<p>The slide's points are broad-spectrum SPF 15 or higher, 1 ounce over exposed areas, avoiding eyes and mucous membranes, application 15 minutes before exposure, the most substantive sunscreen available, limiting time in the sun from 10 a.m. to 4 p.m., reapplying at least every 40 to 80 minutes, more often with swimming or sweating or a product that is not water resistant, and checking expiration dates. She flagged three of them: the SPF and spectrum, how much to apply, and how often. Expired product is discarded because it is no longer effective, and water activity calls for a water-resistant broad-spectrum product.</p>
<p>The 1 ounce, 15 minutes and 40 to 80 minute figures are on the slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;So hint, broad-spectrum SPF greater than or equal to 15.&rdquo; <span class='g2-src'>11/12 T@66751</span></p>
<p>&ldquo;Know how much to apply. Know how often to apply.&rdquo; <span class='g2-src'>11/12 T@66812</span></p>
<p>&ldquo;water resistant, broad-spectrum sunscreen is what we're recommending&rdquo; <span class='g2-src'>11/12 T@67066</span></p>
<p>&ldquo;throw them out cause they're not effective anymore&rdquo; <span class='g2-src'>11/12 T@67211</span></p></div>
</div>
<div class="gpt g2-block"><h5>Sun exposure counseling points continued (Patel Sun Exposure slide 37)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds winter use, stopping a product, and early referral</p>
<p>The slide covers hats, sunglasses and clothing; snow and sand reflecting UV; daily sunscreen and clothing with photosensitizing drugs; stopping a product that causes redness, itching, rash or exaggerated sunburn; and referring a suspicious lesion. She added that a cold winter day does not remove the need, though less is needed than in summer, because snow still reflects sunlight. For a lesion the goal is early detection, since it may need only removal. In response to a student's comment on face sunscreens, she recommended a face product with SPF 15 or higher. The sunglass blocking percentages on the slide were not read.</p>
<p>The stop-the-product point was stated as a rule.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;snow and sand reflect UV rays&rdquo; <span class='g2-src'>11/12 T@67386</span></p>
<p>&ldquo;You still do, but not to the same extent&rdquo; <span class='g2-src'>11/12 T@67516</span></p>
<p>&ldquo;If the product causes redness, itching, rash, you're stopping the product.&rdquo; <span class='g2-src'>11/12 T@68005</span></p>
<p>&ldquo;catch it early. That is the biggest key.&rdquo; <span class='g2-src'>11/12 T@68231</span></p>
<p>&ldquo;SPF for the face that is also SPF greater than or equal to 15&rdquo; <span class='g2-src'>11/12 T@68535</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-11">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 38&ndash;42</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 38&ndash;42)</span><b>What photoaging is, how it differs from chronologic aging, and how it is prevented</b><i>Patel Sun Exposure slide 38, 39, 40, 41, 42</i></div>
<div class="gpt g2-block"><h5>Photoaging section divider (Patel Sun Exposure slide 38)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Photoaging and its classification by age (Patel Sun Exposure slide 39)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture reads the table and explains what it grades</p>
<p>The classification grades photoaging as mild, moderate, advanced or severe by the patient's age and by the wrinkles. Type I is mild, no wrinkles, 20 to 30 years of age; type II is moderate, wrinkles in motion, 30 to 40; type III is advanced, wrinkles at rest, 50 or older; type IV is severe, only wrinkles with a yellow-gray color, 60 or older. The table is a Glogau classification on the slide. The statement that fair North Americans show photodamage by age 50 was not discussed.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;depends on the age of the patient as well as how severe the wrinkles&rdquo; <span class='g2-src'>11/12 T@68874</span></p>
<p>&ldquo;Type 3, advanced, greater than or equal to 50 years of age&rdquo; <span class='g2-src'>11/12 T@69272</span></p></div>
</div>
<div class="gpt g2-block"><h5>Chronologic aging compared with photoaging (Patel Sun Exposure slide 40)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the key relationship</p>
<p>Chronologic aging brings thin skin, fine wrinkles, xerosis, laxity, seborrheic keratoses and senile angiomas. Photoaging brings atrophic skin, coarse wrinkles, leathery skin, lentigines, a bronzed or yellow cobblestone appearance, telangiectasis, bruising and sun-induced dermatitis. Her relationship is the exam-relevant one: aging happens regardless, and sun exposure makes the same processes worse, adding hyperpigmentation and sunspots. She named collagen loss and loss of elasticity for ordinary aging.</p>
<p>Individual items on the slide were not read in the lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;photoaging advances the process of aging of the skin&rdquo; <span class='g2-src'>11/12 T@69627</span></p>
<p>&ldquo;collagen decreases, thins the skin&rdquo; <span class='g2-src'>11/12 T@69721</span></p>
<p>&ldquo;that decrease in that elasticity of the skin&rdquo; <span class='g2-src'>11/12 T@69793</span></p></div>
</div>
<div class="gpt g2-block"><h5>Skin anti-aging approaches (Patel Sun Exposure slide 41)</h5>
<p class="g2-status"><b>Status C</b> reference slide; lecture adds the most common option and the sunscreen emphasis</p>
<p>The slide groups approaches as cosmetic care, topical medications, invasive procedures, systemic agents and prevention. She called it a reference slide of options for the patient, said cosmetic care is the most common option, and returned to prevention, including a sunscreen on the face in any weather or season. The slide lists the procedures and systemic agents without detail, and she did not teach them.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;This is just a reference slide&rdquo; <span class='g2-src'>11/12 T@70385</span></p>
<p>&ldquo;Cosmetic care being the most common.&rdquo; <span class='g2-src'>11/12 T@70141</span></p>
<p>&ldquo;Wear that sunscreen on your face, no matter what weather it is&rdquo; <span class='g2-src'>11/12 T@70517</span></p></div>
</div>
<div class="gpt g2-block"><h5>Photoaging prevention (Patel Sun Exposure slide 42)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>

<section class="gobj" id="gobj-pl-u-12">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 43&ndash;46</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 43&ndash;46)</span><b>The photoaging drug classes she named, how retinoids and hydroxy acids are used, and why peels are not an OTC option</b><i>Patel Sun Exposure slide 43, 44, 45, 46</i></div>
<div class="gpt g2-block"><h5>Photoaging: pharmacologic treatments (Patel Sun Exposure slide 43)</h5>
<p class="g2-status"><b>Status B</b> table on slide; lecture names which classes matter and for what</p>
<p>The table lists topical retinoids (OTC retinol and retinyl palmitate, which the skin must convert to retinoic acid, a limit on efficacy; Rx tretinoin and tazarotene, which can reduce wrinkles and repair collagen over 6 to 12 months), keratolytics, antioxidant vitamins, and depigmenting agents (hydroquinone, monobenzone). She went through them by purpose: retinoids, keratolytics, vitamins E, C and coenzyme Q10, and hydroquinone as the most commonly used brightening agent. She said the ingredients in products marketed for brightening or aging are most likely among these. The table's keratolytic start, every other night for 1 week, was not read.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;We have our keratolytic as well as our vitamin E, C, and CoQ10s.&rdquo; <span class='g2-src'>11/12 T@70812</span></p>
<p>&ldquo;brightening of skin is hydroquinone, and that is most commonly used&rdquo; <span class='g2-src'>11/12 T@70896</span></p>
<p>&ldquo;Most likely the ingredients are one of these.&rdquo; <span class='g2-src'>11/12 T@71142</span></p></div>
</div>
<div class="gpt g2-block"><h5>Vitamin A derivatives: retinoids (Patel Sun Exposure slide 44)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds why they appear in aging products and the sun precaution</p>
<p>Retinoids increase keratinocyte cell division, build collagen and elastic fibers, reduce melanin production, and improve wrinkles, mottled pigment and texture. Benefit requires long-term daily use and may take months. They are the same drugs used for acne, so many anti-aging products contain them. The side effects are dryness, scaling and phototoxicity, so a moisturizer is mixed in and the sunscreen goes on after the skincare routine. The slide's way to reduce them is a cream-based moisturizer with SPF 30+ in the daytime and the retinoid product at night or on alternate days.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;a lot of our aging-related type of products has retinoids in them&rdquo; <span class='g2-src'>11/12 T@71401</span></p>
<p>&ldquo;long-term usage has to be continued in order to see benefit&rdquo; <span class='g2-src'>11/12 T@71622</span></p>
<p>&ldquo;we're always applying that sunscreen after the skincare routine is completed&rdquo; <span class='g2-src'>11/12 T@71941</span></p></div>
</div>
<div class="gpt g2-block"><h5>Keratolytics: alpha hydroxy acids (Patel Sun Exposure slide 45)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture adds the course link</p>
<p>The slide names lactic, glycolic, citric and malic acids, which increase dermal thickness, improve collagen and elastic fibers, reduce hyperpigmentation and increase exfoliation. In lecture she tied them back to the acne lecture and stated two effects: less hyperpigmentation and more collagen. The slide 10 list also includes alpha-hydroxy acids in cosmetics as a sun-sensitizing ingredient.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;AHAs play a role too, so we talked about this in acne.&rdquo; <span class='g2-src'>11/12 T@72023</span></p>
<p>&ldquo;Reducing hyperpigmentation, increasing collagen.&rdquo; <span class='g2-src'>11/12 T@72078</span></p></div>
</div>
<div class="gpt g2-block"><h5>Keratolytic chemical peels (Patel Sun Exposure slide 46)</h5>
<p class="g2-status"><b>Status C</b> table on slide; lecture adds who performs them and her recommendation</p>
<p>The table classifies peels by depth: superficial, medium and deep, with the agents, depth of penetration and side effects. She said peels are usually done by medical spas and aestheticians, and she would not recommend an over-the-counter peel for use on one's own skin because of the side effects and risks. Deep peels are professional medical use only. The table lists deep-peel risks including cardiotoxicity and arrhythmia, hepatotoxicity and nephrotoxicity, which she did not read.</p>
<p>Her examples by depth: superficial AHA and BHA, medium salicylic acid, glycolic acid and TCA, deep TCA with other ingredients.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;I would not recommend chemical peels that are over the counter&rdquo; <span class='g2-src'>11/12 T@72287</span></p>
<p>&ldquo;partly because of the side effects and the risk factors that can occur&rdquo; <span class='g2-src'>11/12 T@72402</span></p>
<p>&ldquo;that is only professional medical use&rdquo; <span class='g2-src'>11/12 T@72649</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-13">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 47&ndash;51</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 47&ndash;51)</span><b>Hydroquinone limits, the FDA position, antioxidants, product labels and plant extracts</b><i>Patel Sun Exposure slide 47, 48, 49, 50, 51</i></div>
<div class="gpt g2-block"><h5>Depigmentation: hydroquinone (Patel Sun Exposure slide 47)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds the safe-use counseling and the regulatory status</p>
<p>Hydroquinone reduces sun-associated hyperpigmentation, melasma and lentigines. Use is limited to 3 months and sunscreen is worn after it. The slide lists combination products with hydroquinone 4% (slide-only figure). She added that it is not FDA approved for OTC sale in the US, yet products with it are still sold and are not FDA regulated, so the pharmacist educates on strength and safe use; a patient who chooses it starts low and increases slowly, and licensed aestheticians are best placed to apply it.</p>
<p>The practice case answer for hyperpigmentation is hydroquinone.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;we're limiting use to 3 months&rdquo; <span class='g2-src'>11/12 T@72872</span></p>
<p>&ldquo;we're also wearing sunscreen always after the product is applied&rdquo; <span class='g2-src'>11/12 T@72908</span></p>
<p>&ldquo;it is not FDA approved for OTC sale in the US&rdquo; <span class='g2-src'>11/12 T@73083</span></p>
<p>&ldquo;we're starting low, increasing it slowly&rdquo; <span class='g2-src'>11/12 T@73645</span></p></div>
</div>
<div class="gpt g2-block"><h5>FDA skin product safety: hydroquinone (Patel Sun Exposure slide 48)</h5>
<p class="g2-status"><b>Status D</b> slide says use only when prescribed; lecture describes counseling for OTC users</p>
<p>The FDA sheet says skin lightening products with hydroquinone are not FDA approved for OTC sale, are used to correct uneven tone and remove dark spots, can cause permanent discoloration (ochronosis), rashes and facial swelling, and should be used only when prescribed by a licensed health care provider.</p>
<div class="g2-note"><span class="g2-k">Both versions</span><p>Slide 48: use hydroquinone products only when prescribed by a licensed health care provider. Lecture: products are still available over the counter, and the pharmacist educates the patient who chooses one. An exam written from her slides would key the FDA statements (not approved for OTC sale; prescribed use); her counseling points (3 months, sunscreen, start low) are the lecture's answer for a patient who already uses it. The side effects on the slide were not read.</p></div>
<div class="g2-note"><span class="g2-k">General source, not from the course</span><p>The slide is an FDA sheet. FDA's own statement (April 2022) says OTC skin lightening products containing hydroquinone are unapproved drugs, not generally recognized as safe and effective, and have not been legally marketable in the U.S. since September 23, 2020; Tri-Luma, a prescription product, is the only FDA-approved drug containing hydroquinone. So the products she described as still sold over the counter are sold against that rule, and &ldquo;not FDA regulated&rdquo; is her loose wording for &ldquo;not FDA approved&rdquo;. Source: FDA, https://www.fda.gov/drugs/drug-safety-communications/fda-works-protect-consumers-potentially-harmful-otc-skin-lightening-products</p></div>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;there are still products available over the counter that have it&rdquo; <span class='g2-src'>11/12 T@73173</span></p>
<p>&ldquo;this is when pharmacists educate patients on the strength, how to apply it&rdquo; <span class='g2-src'>11/12 T@73278</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical antioxidants (Patel Sun Exposure slide 49)</h5>
<p class="g2-status"><b>Status B, C</b> fact on slide; lecture adds which are common and how long to wait</p>
<p>The slide lists niacinamide (vitamin B3), ascorbic acid (vitamin C), D-alpha-tocopherol (vitamin E), coenzyme Q-10 and alpha-lipoic acid, with some evidence of protection but no proven formula for delivery to the skin. She named niacinamide and vitamin C as the most common in skincare products and described vitamin C as brightening. Asked how long to use a product before switching, she answered as for acne: consistent daily use for at least a month, in line with the at-least-four-weeks point on slide 53.</p>
<p>The no-proven-formula point was not read in lecture.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;especially niacinamide and vitamin C&rdquo; <span class='g2-src'>11/12 T@74029</span></p>
<p>&ldquo;at least more than a month to really see some efficacy&rdquo; <span class='g2-src'>11/12 T@74891</span></p>
<p>&ldquo;consistent use as in we're using it daily&rdquo; <span class='g2-src'>11/12 T@74986</span></p></div>
</div>
<div class="gpt g2-block"><h5>Cosmeceutical product ingredient labels (Patel Sun Exposure slide 50)</h5>
<p class="g2-status"><b>Status C</b> label image on slide; lecture says what to look for</p>
<p>The slide shows ingredient lists from cosmeceutical skincare products with several ingredients highlighted. She told the class to notice the highlighted ingredients and said they will see a lot of ascorbic acid, niacinamide, a retinoid and hyaluronic acid. The full lists were not read.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;you're gonna see a lot of ascorbic acid, niacinamide, retinoid, hyaluronic acid&rdquo; <span class='g2-src'>11/12 T@74527</span></p>
<p>&ldquo;notice the highlighted ingredients&rdquo; <span class='g2-src'>11/12 T@74491</span></p></div>
</div>
<div class="gpt g2-block"><h5>Plant extracts in skincare (Patel Sun Exposure slide 51)</h5>
<p class="g2-status"><b>Status B</b> table on slide; lecture treats it as reference</p>
<p>The table pairs plant extracts with actions: green tea epicatechins (reduce UV erythema and cyclobutene pyrimidine dimers, antioxidant), soy isoflavones, grape seed polyphenols, coffee berry, ginkgo biloba (stimulates fibroblast and collagen production) and ginseng. She gave it as reference and said natural ingredients are marketed because patients do not want irritating ingredients; the effects she named are collagen, reduced melanin and UV protection.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Plant extracts. Also here for your reference&rdquo; <span class='g2-src'>11/12 T@75069</span></p>
<p>&ldquo;patients just don't want ingredients that irritate their skin&rdquo; <span class='g2-src'>11/12 T@75278</span></p>
<p>&ldquo;reduce melanin and protect from UV rays&rdquo; <span class='g2-src'>11/12 T@75581</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-u-14">
<h3>Dr. Patel, slide by slide &middot; Sun exposure &middot; slides 52&ndash;57</h3>
<div class="gbar"><span>What the lecture adds (Sun Exposure 52&ndash;57)</span><b>The photoaging case answer, photoaging counseling, retinoid and hydroxy acid use, and her closing list</b><i>Patel Sun Exposure slide 52, 53, 54, 55, 56, 57</i></div>
<div class="gpt g2-block"><h5>Practice case: photoaging in a 65-year-old woman (Patel Sun Exposure slide 52)</h5>
<p class="g2-status"><b>Status C, E</b> lecture gives the answer and the key term; options are not on the slide</p>
<p>The case is a 65-year-old Fitzpatrick IV woman with wrinkles and brown spotting on the face, hands and forearms, a yellowish facial color, fine wrinkles deepening at the eyes and mouth, a smoking history (quit 15 years ago), a multivitamin, and calcium 600 mg with vitamin D 400 IU. The question asked which option improves hyperpigmentation. Her cue was the keyword hyperpigmentation, and the answer is hydroquinone, option C <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span>, the depigmenting agent from slide 47.</p>
<p>The other findings in the case describe photoaging and do not change the answer.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Which of the following treatment options would help improve hyperpigmentation of the skin?&rdquo; <span class='g2-src'>11/12 T@76182</span></p>
<p>&ldquo;So keyword here, hyperpigmentation.&rdquo; <span class='g2-src'>11/12 T@76273</span></p>
<p>&ldquo;So that should be answer C, hydroquinone.&rdquo; <span class='g2-src'>11/12 T@76346</span></p></div>
</div>
<div class="gpt g2-block"><h5>Photoaging counseling points (Patel Sun Exposure slide 53)</h5>
<p class="g2-status"><b>Status B</b> fact on slide; lecture links it to sunscreen counseling</p>
<p>The slide says photoaging is preventable and cumulative, protect skin from further damage, use broad-spectrum SPF 15 or higher daily and reapply often, clean the face twice daily with a mild cleanser, use products in the order suggested, avoid eyes and mucous membranes, use moisturizers, adopt a healthy lifestyle and stop smoking, and expect results in at least four weeks. She summarized with two themes and pointed back to the sunscreen counseling points of slide 36 as applying here too.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Biggest things, prevention is key. Consistency is key.&rdquo; <span class='g2-src'>11/12 T@76403</span></p>
<p>&ldquo;Very similar to the counseling points we talked about with the sunscreen&rdquo; <span class='g2-src'>11/12 T@76458</span></p></div>
</div>
<div class="gpt g2-block"><h5>Photoaging counseling: hydroxy acid and retinoid products (Patel Sun Exposure slide 54)</h5>
<p class="g2-status"><b>Status E, B</b> she told the class to review this slide; lecture adds the sun precaution</p>
<p>For hydroxy acid products apply to dry skin within 15 minutes of cleansing; adverse events are stinging, burning, itching, skin lightening and dryness. For retinoids, apply once at bedtime to dry skin after cleansing, add a moisturizer or foundation with SPF 30 or higher during the day, and expect scaling, redness, burning and dermatitis. She skipped through it for time and said to review it thoroughly, so the slide wording is the source. Her added point: the SPF is needed the day after a night retinoid.</p>
<p>The hydroxy acid and retinoid adverse event lists were not read aloud.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Please do review the slide thoroughly.&rdquo; <span class='g2-src'>11/12 T@76557</span></p>
<p>&ldquo;apply to dry skin 15 minutes of cleansing&rdquo; <span class='g2-src'>11/12 T@76707</span></p>
<p>&ldquo;should be at night, should be after cleansing&rdquo; <span class='g2-src'>11/12 T@76826</span></p>
<p>&ldquo;don't skip out on that SPF the next day&rdquo; <span class='g2-src'>11/12 T@76959</span></p></div>
</div>
<div class="gpt g2-block"><h5>Conclusions (Patel Sun Exposure slide 55)</h5>
<p class="g2-status"><b>Status E, B</b> closing list she read; pointers to the mnemonic and patient factors</p>
<p>The slide says sunscreen ingredients are UV-length specific, products are labeled UVA, UVB, broad-spectrum or water resistant because of their ingredients, and the risks of sun exposure are real and preventable. In her wrap-up she listed what to know: the specific SPF amount, the patient's age, how to prevent exposure, and how a suspected skin cancer lesion looks, and told the class to remember the mnemonic, which in context is the ABCDE rule on slide 28. The captions print mnemonic as 'pneumonic'.</p>
<div class='g2-said'><span class='g2-k'>She said</span>
<p>&ldquo;Specific SPF amount, so pay attention to that, age of the patient&rdquo; <span class='g2-src'>11/12 T@77144</span></p>
<p>&ldquo;What does that lesion look like? So remember the pneumonic.&rdquo; <span class='g2-src'>11/12 T@77300</span></p></div>
</div>
<div class="gpt g2-block"><h5>References (Patel Sun Exposure slide 56)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Sun Exposure slide 57)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p8w">Wound Care Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">WC = Patel_Wound-Care.pdf, slide = PDF page; T@ = place in the 11/12 transcript. Her three objectives (WC 2), one section each. No PollEv questions were asked in this lecture.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;I&rsquo;m gonna tell you guys exactly what I want you guys to know. There&rsquo;s more information in these slides for your reference&rdquo; (T@77775 11/12); &ldquo;All that I mentioned, key terms, key points is what I want you to know&rdquo; (T@87898 11/12).</li><li>Self-care exclusions: &ldquo;I need you to know them&rdquo; (WC 7; T@79663 11/12). Dressings: &ldquo;Know the advantages, know the disadvantages&rdquo; (WC 8&ndash;9; T@80276 11/12). Burn categories: &ldquo;I want you to know&rdquo; (WC 16; T@83577 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8w-1">
<h3>Wound Care · Objective 1: wound type and severity</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Identify wound type and severity</b><i>WC 4&ndash;6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Types <span class="g2-src">(WC 4)</span></h5>
<ul>
<li>Abrasions</li>
<li>Punctures (bites, sharp objects)</li>
<li>Lacerations</li>
<li>Burns (thermal, electrical, chemical, UV radiation)</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Stages by depth <span class="g2-src">(WC 5)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Stage</th><th scope="col">Depth</th></tr></thead>
<tbody>
<tr><td class="g2-n">1</td><td>Unbroken, reddened, non-blanching skin</td></tr>
<tr><td class="g2-n">2</td><td>Blister or partial-thickness loss (epidermis and part of the dermis)</td></tr>
<tr><td class="g2-n">3</td><td>Full-thickness loss</td></tr>
<tr><td class="g2-n">4</td><td>Into subcutaneous tissue, muscle, tendon and bone</td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>The higher the stage, the longer the healing <span class="g2-src">(T@79102 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Healing phases <span class="g2-src">(WC 6, 27)</span></h5>
<ul>
<li>Inflammatory</li>
<li>Proliferative</li>
<li>Remodeling</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Burns <span class="g2-src">(WC 16)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Category</th><th scope="col">Adult</th><th scope="col">Child</th><th scope="col">Or</th></tr></thead>
<tbody>
<tr><th scope="row">Minor</th><td><span class="g2-lab">Adult</span><b>Under 15%</b> BSA superficial in an adult</td><td><span class="g2-lab">Child</span><b>Under 10%</b> superficial in a child</td><td>Or under 2% BSA deep partial or full thickness, not involving eyes, ears, face or genitalia</td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">Adult</span><b>15%&ndash;25%</b> superficial partial thickness in an adult</td><td><span class="g2-lab">Child</span><b>10&ndash;20%</b> superficial partial thickness in a child</td><td>Or 2%&ndash;10% BSA deep partial or full thickness, not involving eyes, ears, face or genitalia</td></tr>
<tr><th scope="row">Major</th><td><span class="g2-lab">Adult</span><b>Over 25%</b> superficial partial thickness in an adult</td><td><span class="g2-lab">Child</span><b>Over 20%</b> superficial partial thickness in a child</td><td>Or deep partial or full thickness over 10% BSA; eyes, ears, face, genitalia; inhalation or electrical burns; fractures or major trauma; poor-risk patients</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wound">Reference: wound stages and burn categories</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8w-2">
<h3>Wound Care · Objective 2: assess and recommend treatment</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Assess and recommend treatment for wounds</b><i>WC 3, 8&ndash;11, 14&ndash;15, 18&ndash;20, 25, 27</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals <span class="g2-src">(WC 3)</span></h5>
<ul>
<li>Facilitate healing</li>
<li>Reduce scarring</li>
<li>Prevent secondary bacterial skin infection</li>
<li>Refer if necessary</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Order <span class="g2-src">(WC 27; T@82489, T@87422 11/12)</span></h5>
<ol>
<li>Cleanse with clean water or saline</li>
<li>Use topical antiseptics, antibiotics and anesthetics only when indicated</li>
<li>Then a dressing suited to the wound</li>
<li>A moist healing environment</li>
</ol>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> First-aid antibiotics <span class="g2-src">(WC 11, 20)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Drugs</th><td>Bacitracin, neomycin, polymyxin B</td></tr>
<tr><th scope="row">When</th><td>After cleansing and before bandaging</td></tr>
<tr><th scope="row">How often</th><td><b>1 to 3 times a day</b></td></tr>
<tr><th scope="row">Toxicity</th><td>Risk rises with large areas of application (all three); neomycin: systemic toxicity; polymyxin B: hypersensitivity</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Topical anesthetics <span class="g2-src">(WC 14, 20)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How often</th><td><b>Up to 4 times daily</b></td></tr>
<tr><th scope="row">Relief</th><td>Relief for <b>15 to 45 minutes</b></td></tr>
<tr><th scope="row">Broken skin</th><td>Small quantities and low concentrations on broken skin</td></tr>
<tr><th scope="row">Benzocaine</th><td>If absorbed systemically: methemoglobinemia (cyanosis, dyspnea, syncope, seizures, coma)</td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Understand the systemic toxicity of overuse&rdquo; <span class="g2-src">(T@85399 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Antiseptics <span class="g2-src">(WC 15, 19)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Where</th><td>Intact skin at the wound edges</td></tr>
<tr><th scope="row">Inside the wound</th><td>Inside the wound they reduce healing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Dressings <span class="g2-src">(WC 8&ndash;9)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Dressing</th><th scope="col">Absorption</th><th scope="col">Moist environment</th><th scope="col">Notes</th></tr></thead>
<tbody>
<tr><th scope="row">Gauze</th><td><span class="g2-lab">Absorption</span>Absorbs</td><td><span class="g2-lab">Moist environment</span>None by itself; only with another product (e.g., a skin protectant)</td><td><span class="g2-lab">Notes</span>Needs frequent changes</td></tr>
<tr><th scope="row">Hydrocolloid</th><td></td><td><span class="g2-lab">Moist environment</span>Gives a moist environment</td><td><span class="g2-lab">Notes</span>For uninfected wounds only</td></tr>
<tr><th scope="row">Transparent film</th><td><span class="g2-lab">Absorption</span>Film is not absorptive</td><td><span class="g2-lab">Moist environment</span>Gives a moist environment</td><td><span class="g2-lab">Notes</span>For uninfected wounds only</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">7.</span> Minor burn <span class="g2-src">(WC 18&ndash;20)</span></h5>
<ul>
<li>Cool water</li>
<li>Acetaminophen or an NSAID</li>
<li>Skin protectant</li>
<li>Antibiotic or anesthetic as above</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">8.</span> Smoking <span class="g2-src">(WC 25)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Smoking</th><th scope="col">Flap necrosis</th></tr></thead>
<tbody>
<tr><td>1 pack per day</td><td><b>3 times</b> the flap necrosis</td></tr>
<tr><td>2 packs</td><td><b>6 times</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wound">Reference: wound products and burns</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8w-3">
<h3>Wound Care · Objective 3: referral and follow-up</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Provide appropriate referral and/or follow-up for wound care</b><i>WC 7, 16&ndash;17, 20</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Refer a wound <span class="g2-src">(WC 7)</span></h5>
<ul>
<li>Face, hands, feet, major joints, genitals or perineum</li>
<li>Larger than <b>3 inches</b></li>
<li>Animal or human bite</li>
<li>Chemical, electrical, inhalation or circumferential burn</li>
<li>Deep partial thickness or deeper</li>
<li>Suspected non-accidental injury</li>
<li>Signs of infection</li>
<li>Diabetes or another disorder that complicates management</li>
<li>Foreign matter after irrigation</li>
<li>Chronic wound</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Follow-up <span class="g2-src">(WC 7; T@79459 11/12)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Wound</th><td>Worse or not healed in <b>24&ndash;48 hours</b> and/or <b>7 days</b></td></tr>
<tr><th scope="row">Topical antibiotic</th><td>Topical antibiotic with no improvement within <b>7 days</b>: primary care provider <span class="g2-src">(WC 20)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Refer a burn <span class="g2-src">(WC 16&ndash;17)</span></h5>
<ul>
<li>Moderate or major</li>
<li><b>2% BSA</b> or more of a moderate to severe burn</li>
<li>Eyes, ears, face, hands, feet or perineum</li>
<li>Chemical (after first aid), electrical or inhalation</li>
<li>Advanced age</li>
<li>Diabetes or multiple medical disorders</li>
<li>Immunocompromised</li>
</ul>
</div>
</section>

<details class="gdetails" id="gpl-p8w">
<summary>Dr. Patel: Wound care slide by slide, what the lecture adds (29 slides)</summary>
<section class="gobj" id="gobj-pl-w-1">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 1&ndash;5</h3>
<div class="gbar"><span>What the lecture adds (Wound 1&ndash;5)</span><b>Identify the wound type and severity, then assess, recommend treatment and refer; the stage of a wound is set by its depth</b><i>Patel Wound slide 1, 2, 3, 4, 5</i></div>
<div class="gpt g2-block"><h5>Title slide (Patel Wound slide 1)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Learning objectives: identify, assess and recommend, refer (Patel Wound slide 2)</h5>
<p class="g2-status"><b>Status A, E</b> On the slide; lecture adds her cue about how exam questions are built</p>
<p>The slide gives three objectives: identify the wound type and severity, assess and recommend treatment, and provide referral or follow-up. She restated them in the same order at the start of the lecture, ending with "appropriate referral". Her cue about objectives was said at the start of the day, before the outdoor exposure lecture, about learning objectives in general. It ties the three objectives here (what kind of wound and how severe, what to recommend, and when the patient goes to a provider) to the way she writes questions.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;First, identifying the wound, the severity&rdquo; <span class='g2-src'>(11/12 T@77978)</span></p><p>&ldquo;This is how I create my exam questions as well&rdquo; <span class='g2-src'>(11/12 T@962)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Wound treatment goals (Patel Wound slide 3)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Types of acute wounds and burns (Patel Wound slide 4)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Wound stages 1 to 4 are set by depth (Patel Wound slide 5)</h5>
<p class="g2-status"><b>Status B, C, E</b> Fact on slide; lecture gives the basis for the staging and an exam cue</p>
<p>The slide lists four stages: stage 1 has no loss of skin layers (reddened, non-blanching, unbroken skin); stage 2 is a blister or partial-thickness loss; stage 3 is full-thickness loss that may involve the subcutaneous tissue; stage 4 reaches subcutaneous tissue, muscle, tendon and bone. The reason the stages are ordered this way is depth: the slide heading says the classification is "based on depth of the wound", and she repeated that. She applied the stage to dressing choice: a stage 4 wound is not managed with an adhesive bandage, while a stage 1 wound possibly could be (Patel Wound slide 8).</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;that is based on the depth of the wound&rdquo; <span class='g2-src'>(11/12 T@78446)</span></p><p>&ldquo;there's 4 stages of a wound, so know each stage&rdquo; <span class='g2-src'>(11/12 T@87283)</span></p><p>&ldquo;we're not just putting a band-aid on it&rdquo; <span class='g2-src'>(11/12 T@80486)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-w-2">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 6&ndash;9</h3>
<div class="gbar"><span>What the lecture adds (Wound 6&ndash;9)</span><b>Know the healing phases, the list of wounds that are not self-treated, and the advantages and disadvantages of each dressing</b><i>Patel Wound slide 6, 7, 8, 9</i></div>
<div class="gpt g2-block"><h5>Healing phases and why deeper wounds take longer (Patel Wound slide 6)</h5>
<p class="g2-status"><b>Status B, E</b> Fact on slide; lecture adds the reasoning about duration and an exam cue</p>
<p>The timeline slide shows three overlapping phases: inflammation, proliferation and remodeling, on a scale from minutes to months. She named the three phases in her conclusion and said to understand them (Patel Wound slide 27). She did not read the cells and mediators listed in each phase. Her added point is about stage and duration: the higher the stage, the longer the healing, because the stage reflects depth. Her statement that stage 1 takes weeks is not on the slide. <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> Slide 5 uses "stage" for wound depth, and slide 27 uses "phases" for the healing sequence (inflammatory, proliferative, remodeling); these are separate ideas.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;the higher the stage, the longer the duration of healing&rdquo; <span class='g2-src'>(11/12 T@79102)</span></p><p>&ldquo;Wound healing timeline really depends on if there's inflammation&rdquo; <span class='g2-src'>(11/12 T@78858)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Wounds and burns excluded from self-treatment (Patel Wound slide 7)</h5>
<p class="g2-status"><b>Status B, C, E</b> List on slide; lecture adds what the items mean and an exam cue to know the full list</p>
<p>The slide gives twelve exclusions, from body location and size (face, hands, feet, major joints, genitals or perineum; larger than 3 inches) to chemical, electrical or inhalation burns, bites, signs of infection, diabetes and a chronic wound. She called these patients completely self-excluded and tied the timing item to the 7-day policy. She defined chronic in plain terms: the wound is not healing and keeps getting larger over time. Deep partial-thickness and full-thickness injuries are on this list, which bears on the burn categories on slide 16.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;The list that's listed here for you, I need you to know them&rdquo; <span class='g2-src'>(11/12 T@79663)</span></p><p>&ldquo;This complete list, you would not recommend a patient to treat themselves&rdquo; <span class='g2-src'>(11/12 T@80089)</span></p><p>&ldquo;7-day policy applies here&rdquo; <span class='g2-src'>(11/12 T@79466)</span></p><p>&ldquo;it's not healing, it's continuing to increase over time&rdquo; <span class='g2-src'>(11/12 T@80032)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Gauze, nonadherent and adhesive dressings (Patel Wound slide 8)</h5>
<p class="g2-status"><b>Status C, E</b> Table on slide; lecture adds the link between depth and dressing and an exam cue</p>
<p>The table gives, for each dressing type, brand names, advantages and disadvantages. Her cue was to know the advantages and disadvantages of each. Her added point is that the dressing follows the depth of the wound. On the slide, gauze, nonadherent dressings and adhesive bandages each list a disadvantage about moist healing: gauze does not provide a moist healing environment unless used with another product, and many nonadherent dressings and adhesive bandages do not provide one either. Slide 27 states that wound treatment includes a moist healing environment.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Know the advantages, know the disadvantages of each of them&rdquo; <span class='g2-src'>(11/12 T@80276)</span></p><p>&ldquo;there's different ways of healing a wound by different types of gauze dressings&rdquo; <span class='g2-src'>(11/12 T@80576)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Hydrocolloids and transparent adhesive films (Patel Wound slide 9)</h5>
<p class="g2-status"><b>Status C</b> Table on slide; lecture adds everyday examples to recognize each type</p>
<p>The slide describes hydrocolloids as wafer dressings of hydrophilic particles in an adhesive, covered by a water-resistant film or foam, and transparent adhesive films as thin semi-occlusive polyurethane or co-polyester films. Both provide a moist healing environment and both are for uninfected wounds only. She tied each type to an example a patient would know: a waterproof adhesive bandage is a hydrocolloid film, and the film put over an IV is a transparent adhesive film. She named a brand, Nexederm. <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> The slide lists Exuderm, DuoDERM and Band-Aid Advanced Healing Strips under hydrocolloids.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;whenever you see a band-aid that says waterproof&rdquo; <span class='g2-src'>(11/12 T@80742)</span></p><p>&ldquo;what's put over an IV, that's an example of that&rdquo; <span class='g2-src'>(11/12 T@80969)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-w-3">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 10&ndash;15</h3>
<div class="gbar"><span>What the lecture adds (Wound 10&ndash;15)</span><b>Reduce scarring, and use OTC antibiotics, anesthetics and antiseptics only when indicated, because each has limits and risks</b><i>Patel Wound slide 10, 11, 12, 13, 14, 15</i></div>
<div class="gpt g2-block"><h5>Minimizing scarring (Patel Wound slide 10)</h5>
<p class="g2-status"><b>Status B</b> Fact on slide; lecture adds the consequence of leaving the steps out</p>
<p>The slide lists avoiding UV exposure to the wound, silicone sheets or gels, laser therapy, and appropriate and consistent wound care. She stated limiting UV exposure to the wound first, and said consistent wound care is what makes the wound heal. The reasoning she added is the reverse case: when these steps are not applied, scarring can occur. This ties to the treatment goal on slide 3 of reducing scarring.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;if we're not applying any of these steps, that's when scarring can also occur&rdquo; <span class='g2-src'>(11/12 T@81314)</span></p></div>
</div>
<div class="gpt g2-block"><h5>First aid antibiotics: timing and area (Patel Wound slide 11)</h5>
<p class="g2-status"><b>Status B</b> Facts on slide; lecture stresses the order of application and the area limit</p>
<p>The slide lists the OTC ingredients (bacitracin, neomycin, polymyxin B sulfate), says the use is preventive with limited evidence of efficacy, and says to apply after cleansing and before bandaging. It also says toxicity risk increases with large areas. She emphasized the order twice, after cleansing and before the bandage, and repeated the area limit as a caution. She gave no mechanism for either point, so the materials support the rule but not a reason for it.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Apply it right after cleansing the wound area, and then before bandaging&rdquo; <span class='g2-src'>(11/12 T@81569)</span></p><p>&ldquo;Toxicity risk does increase if we're utilizing it in large areas&rdquo; <span class='g2-src'>(11/12 T@81702)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical antimicrobials: pros and cons (Patel Wound slide 12)</h5>
<p class="g2-status"><b>Status B</b> Table on slide; lecture connects the toxicity risk to short use on a small area</p>
<p>The slide lists pros (concentrated delivery to the site, less systemic toxicity, regular visual inspection of the wound) and cons (limited evidence of efficacy, local allergic reactions, minimal penetration depth, bacterial resistance from unnecessary use, product contamination, and others). She named delivery, fewer systemic effects, inspection, limited evidence, allergy and resistance. Her added reasoning links the risk to how the product is used: short duration and a small wound area. She did not read the remaining cons on the slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;we're using it for a short period of time&rdquo; <span class='g2-src'>(11/12 T@82492)</span></p><p>&ldquo;we're using it on a smaller area of a wound&rdquo; <span class='g2-src'>(11/12 T@82539)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Antibiotic ointment versus Aquaphor in the trial (Patel Wound slide 13)</h5>
<p class="g2-status"><b>Status D</b> Slide and lecture word one point differently</p>
<p>The slide says antibiotic-containing ointments reduced healing in a clean surgical wound model, that Aquaphor ointment was superior in that trial, that antibiotic ointment is used for infection prophylaxis in acute, minor, uncomplicated wounds, and that it can cause sensitivity reactions. The lecture gave no reason why the antibiotic ointments healed worse; the materials do not say.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: Aquaphor was the comparison ointment that did better than the antibiotic-containing ointments, and slide 19 lists Aquaphor among skin protectants.</p><p>Lecture: she said that among antibiotic-containing ointments, Aquaphor has one for wound healing, which classes it as an antibiotic ointment.</p><p>An exam written from her lecture would key what both versions share: Aquaphor was superior in the trial and is an option for the wound. A question on its class would follow the slides (skin protectant), because the trial summary and slide 19 do not describe Aquaphor as containing an antibiotic.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Aquaphor has one for wound healing&rdquo; <span class='g2-src'>(11/12 T@82655)</span></p><p>&ldquo;this was superior in a trial that was conducted&rdquo; <span class='g2-src'>(11/12 T@82695)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Topical anesthetics: stinging first, numbing after (Patel Wound slide 14)</h5>
<p class="g2-status"><b>Status C</b> Facts on slide; lecture adds a counseling point about the open wound</p>
<p>The slide gives the purpose (temporary pain relief), limited evidence of efficacy or safety, the ingredients lidocaine, pramoxine and benzocaine, and the risk with benzocaine absorbed systemically: methemoglobinemia, cyanosis, dyspnea, syncope, seizures and coma. She named lidocaine and benzocaine only. Her counseling point is that the product can sting on an open wound at first, and that the pain relief comes afterward because the skin is numbed. She did not read the systemic effects.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;it can sting, right? If you have an open wound&rdquo; <span class='g2-src'>(11/12 T@83052)</span></p><p>&ldquo;We're numbing the skin completely&rdquo; <span class='g2-src'>(11/12 T@83243)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Antiseptics: cytotoxicity and what comes first (Patel Wound slide 15)</h5>
<p class="g2-status"><b>Status B, D</b> Reason on slide is brief; lecture adds a first-step statement that differs from slide 27</p>
<p>The slide lists chlorhexidine, hydrogen peroxide and povidone-iodine, and says they may cause cytotoxicity that reduces wound healing. She named hydrogen peroxide and gave the same reason: it could be toxic to the wound itself. Slide 19 limits antiseptics to intact skin and the wound edges and says they reduce healing if used within the wound, which matches the cytotoxicity reason.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide 15 lecture passage: she called antiseptics "cleaning the skin, first step".</p><p>Slide 27 and her conclusion: the first step is to cleanse the wound with clean water or saline.</p><p>An exam written from her lecture would key water or saline as the first step, because she gave that as the first step in her conclusion and it is the first-step line on slide 27. The antiseptic remark was said in passing, before the burn section.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;it could cause cytotoxicity to the wound itself&rdquo; <span class='g2-src'>(11/12 T@83399)</span></p><p>&ldquo;First aid antiseptics, of course, cleaning the skin, first step&rdquo; <span class='g2-src'>(11/12 T@83282)</span></p><p>&ldquo;cleansing it with water or saline&rdquo; <span class='g2-src'>(11/12 T@87473)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-w-4">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 16&ndash;20</h3>
<div class="gbar"><span>What the lecture adds (Wound 16&ndash;20)</span><b>Sort a burn by BSA and depth into minor, moderate or major, decide who is excluded from self-care, and counsel on cooling and OTC products</b><i>Patel Wound slide 16, 17, 18, 19, 20</i></div>
<div class="gpt g2-block"><h5>Burn severity: minor, moderate and major (Patel Wound slide 16)</h5>
<p class="g2-status"><b>Status C, D, E</b> Table on slide; lecture adds the link to BSA, an exam cue, and a point that differs from slide 7</p>
<p>Slide 16 sorts burns by BSA and depth. Minor (self-care): under 15% BSA superficial in an adult, under 10% in a child, or under 2% BSA deep or full thickness without the eyes, ears, face or genitalia. Moderate (referral): 15% to 25% superficial partial-thickness in an adult, 10% to 20% in a child, or 2% to 10% deep or full thickness without those areas. Major (referral): over 25% in an adult, over 20% in a child, deep or full thickness over 10%, or any burn of the eyes, ears, face or genitalia, inhalation, electrical or poor-risk patient. She linked BSA to the psoriasis lecture and read the minor and moderate cutoffs aloud. Her words "deep thickness" are shorthand for the slide wording.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide 16: a deep partial-thickness or full-thickness burn under 2% BSA not involving eyes, ears, face or genitalia is minor, self-care.</p><p>Slide 7: deep partial-thickness, full-thickness or subdermal injuries are excluded from self-treatment, and she said of that list that you would not recommend a patient to treat themselves.</p><p>The materials do not settle this. A question that gives a burn size and depth would follow slide 16, the table she read the cutoffs from when she said to know them. A question on the general exclusion list would follow slide 7.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;I want you to know that a minor BSA in an adult&rdquo; <span class='g2-src'>(11/12 T@83580)</span></p><p>&ldquo;in a child is less than 10%&rdquo; <span class='g2-src'>(11/12 T@83646)</span></p><p>&ldquo;remember how we talked about BSA and psoriasis? Comes back again&rdquo; <span class='g2-src'>(11/12 T@83511)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Exclusions for self-treatment of burns (Patel Wound slide 17)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture adds the reason for excluding immunocompromised patients</p>
<p>The slide excludes a moderate to severe burn of 2% BSA or more, burns of the eyes, ears, face, hands, feet or perineum, chemical burns (first aid, then refer), electrical or inhalation burns, advanced age, diabetes or multiple medical disorders, and immunocompromised patients. She gave the reason for one group: immunocompromised patients are excluded because of the risk of infection. She grouped advanced age with chronic disease or immune disorders. She did not mention the first-aid step for chemical burns that is on the slide.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Immunocompromised patients also are self-excluded because of that risk of infection&rdquo; <span class='g2-src'>(11/12 T@84416)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Non-drug care for a minor burn (Patel Wound slide 18)</h5>
<p class="g2-status"><b>Status C</b> Facts on slide; lecture adds the link to sunburn care</p>
<p>The slide lists cool water, which reduces the burning sensation and decreases morbidity; honey, with evidence for accelerated healing of superficial and partial-thickness burns; and aloe vera, labeled traditional. She said to put cool water straight on the burn, said honey has data showing benefit for healing, and connected aloe vera to what was covered earlier for sunburn.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Cool water straight on that burn&rdquo; <span class='g2-src'>(11/12 T@84538)</span></p><p>&ldquo;just like how we talked about when it came to a sunburn&rdquo; <span class='g2-src'>(11/12 T@84673)</span></p></div>
</div>
<div class="gpt g2-block"><h5>OTC products for minor burns: analgesics, protectants, antiseptics (Patel Wound slide 19)</h5>
<p class="g2-status"><b>Status C</b> Facts on slide; lecture adds the limit to minor burns</p>
<p>The slide lists OTC analgesics (acetaminophen, NSAIDs), skin protectants (allantoin, cocoa butter, petrolatum, Aquaphor) and topical antiseptics, with the rules that antiseptics go only on intact skin after debris is removed, are applied to the edges of the wound, and reduce healing if used within the wound. She added that all of this applies only to minor burns, with anything larger going straight to referral, and she named Tylenol for pain. <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> The slide lists Aquaphor as a skin protectant.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;anything besides minor would be straight referral&rdquo; <span class='g2-src'>(11/12 T@84849)</span></p><p>&ldquo;treating the pain, Tylenol, NSAIDs, skin protectants&rdquo; <span class='g2-src'>(11/12 T@84916)</span></p></div>
</div>
<div class="gpt g2-block"><h5>OTC antibiotics and anesthetics for burns: toxicity (Patel Wound slide 20)</h5>
<p class="g2-status"><b>Status E</b> Facts on slide; lecture adds an emphasis cue on systemic toxicity</p>
<p>The slide gives the antibiotics (polymyxin B, neomycin, bacitracin) for 1 to 3 times a day, with systemic toxicity possible with neomycin, hypersensitivity with polymyxin B, and a primary care visit if there is no improvement in 7 days. For anesthetics it gives a maximum of 4 times daily, small quantities and low concentrations on broken skin to prevent systemic absorption, systemic toxicity with lidocaine, hypersensitivity with benzocaine and lidocaine, and relief of only 15 to 45 minutes. The slide notes that continuous pain control cannot be achieved. She gave none of the numbers aloud; her added point is to understand the systemic toxicity that comes from overuse of the anesthetic.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;I want you guys to understand the systemic toxicity of overuse of this product&rdquo; <span class='g2-src'>(11/12 T@85399)</span></p><p>&ldquo;This is numbing the skin, mostly for pain&rdquo; <span class='g2-src'>(11/12 T@85332)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-w-5">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 21&ndash;26</h3>
<div class="gbar"><span>What the lecture adds (Wound 21&ndash;26)</span><b>Know what slows wound healing, from local and systemic factors to drugs, comorbidities and smoking, and how chronic wounds are managed</b><i>Patel Wound slide 21, 22, 23, 24, 25, 26</i></div>
<div class="gpt g2-block"><h5>Local factors that impair wound healing (Patel Wound slide 21)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Systemic factors that impair wound healing (Patel Wound slide 22)</h5>
<p class="g2-status"><b>Status B</b> List on slide; lecture defines one term</p>
<p>The slide lists poor vascularization, bacterial infection, inadequate nutrition, coexisting medical conditions and medications. She defined poor vascularization as blood flow to the wound. The smoking slide describes reduced blood supply as well (slide 25). The other four items were named without added detail.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;poor vascularization, so blood flow to that wound&rdquo; <span class='g2-src'>(11/12 T@85809)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Prescription medications that impede wound healing (Patel Wound slide 23)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Comorbidities that impair wound healing (Patel Wound slide 24)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Smoking and wound healing (Patel Wound slide 25)</h5>
<p class="g2-status"><b>Status B</b> Numbers and mechanism on slide; lecture adds how the pieces connect</p>
<p>The slide gives one pack per day as 3 times the frequency of flap necrosis and two packs per day as 6 times. She said two packs doubles the frequency, which is the step from 3 times to 6 times; the slide figure for two packs is 6 times. The mechanism on the slide is nicotine acting through the sympathetic system to cause vasoconstriction and limit distal perfusion, and carbon monoxide shifting the oxygen-hemoglobin curve to the left so tissue oxygen delivery falls. She stated both in terms of blood supply and oxygen supply, and added that necrosis can occur much sooner in patients who keep smoking during wound healing. The slide figure that one cigarette causes vasoconstriction for more than 90 minutes was not mentioned.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Notice the pack per day, 3 times frequency of necrosis&rdquo; <span class='g2-src'>(11/12 T@86371)</span></p><p>&ldquo;we're restricting that blood supply, that blood flow to the body already&rdquo; <span class='g2-src'>(11/12 T@86485)</span></p><p>&ldquo;Carbon monoxide, same thing again, lack of oxygen supply to the body&rdquo; <span class='g2-src'>(11/12 T@86735)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Chronic wounds: conservative care first (Patel Wound slide 26)</h5>
<p class="g2-status"><b>Status C</b> List on slide; lecture adds a counseling step and stresses infection control</p>
<p>The slide starts with the same conservative treatment as acute wounds (cleaning, dressings), then pressure relief or compression, nutrition status, infection control and debridement (sharp, mechanical or enzymatic, surgical), with biopsy to guide antibiotics and reconstructive options. She kept the order: clean and dress, relieve pressure, assess nutrition and educate, and control infection. She called infection control very important. The transcript reads "debris" where the slide says debridement. Debridement types were named only as sharp, mechanical and surgical, and chosen by stage.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;control the infection, that's very important&rdquo; <span class='g2-src'>(11/12 T@87019)</span></p><p>&ldquo;Understand the nutrition status of the patient, educate accordingly&rdquo; <span class='g2-src'>(11/12 T@86950)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-w-6">
<h3>Dr. Patel, slide by slide &middot; Wound care &middot; slides 27&ndash;29</h3>
<div class="gbar"><span>What the lecture adds (Wound 27&ndash;29)</span><b>Her closing points on wound care: four stages, three phases, clean first, moist healing, appropriate dressings, and antiseptics and antibiotics only when indicated</b><i>Patel Wound slide 27, 28, 29</i></div>
<div class="gpt g2-block"><h5>Conclusions: what she said to know (Patel Wound slide 27)</h5>
<p class="g2-status"><b>Status E, C</b> Summary on slide; lecture adds emphasis and the first-step statement</p>
<p>The slide gives six conclusions: four stages, three healing phases (inflammatory, proliferative, remodeling), clean water or saline as the first step, a moist healing environment, dressings appropriate to the wound, and antiseptics, antibiotics and anesthetics only when indicated. She added that prevention of infection is the most important point, together with what is safe and effective for the patient with no pain. This slide settles the first-step question raised on slide 15: cleansing with water or saline.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;most importantly, Uh, prevention of infection&rdquo; <span class='g2-src'>(11/12 T@87615)</span></p><p>&ldquo;key terms, key points is what I want you to know&rdquo; <span class='g2-src'>(11/12 T@87920)</span></p><p>&ldquo;cleansing it with water or saline&rdquo; <span class='g2-src'>(11/12 T@87473)</span></p></div>
</div>
<div class="gpt g2-block"><h5>References (Patel Wound slide 28)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Wound slide 29)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>
</details>
<h2 class="gdeck" id="gdeck-p8c">Warts, Corns and Calluses Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">WCC = Patel_Warts-Corns-Calluses.pdf, slide = PDF page; T@ = place in the 11/12 transcript. Her seven objectives (WCC 2&ndash;3), one section each. No PollEv questions were asked in this lecture.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;Pay attention to how many days you&rsquo;re using the products for. How many times can we repeat it for, OK? When do we refer the patient? Those are big things with this PowerPoint&rdquo; (T@94913 11/12).</li><li>Wart types: &ldquo;Know what is self-treatable&rdquo; (WCC 6; T@90202 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8c-1">
<h3>Warts, Corns and Calluses · Objective 1: the self-care interview</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>WCC 5&ndash;6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Answers that change the plan</h5>
<ul>
<li>Where the lesion is and what it looks like <span class="g2-src">(WCC 5&ndash;6)</span></li>
<li>Diabetes or poor blood circulation; irritated, infected or reddened skin; a mole or birthmark <span class="g2-src">(WCC 16)</span></li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>Footwear &ldquo;tends to be the most common cause&rdquo; of corns and calluses <span class="g2-src">(T@93710 11/12)</span></p>
</div>
</section>

<section class="gobj" id="gobj-p8c-2">
<h3>Warts, Corns and Calluses · Objective 2: wart, corn or callus?</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>WCC 4&ndash;6, 13</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Wart, corn or callus</h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Lesion</th><th scope="col">Cause or site</th><th scope="col">Appearance</th><th scope="col">Skin ridges</th><th scope="col">Pain</th><th scope="col">Size</th></tr></thead>
<tbody>
<tr><th scope="row">Wart <span class="g2-src">(WCC 4&ndash;5)</span></th><td><span class="g2-lab">Cause or site</span>HPV, limited to the epidermis; hands HPV-2, -4, -27, -57, feet HPV-1</td><td><span class="g2-lab">Appearance</span>Rough, cauliflower-like</td><td><span class="g2-lab">Skin ridges</span>A plantar wart disrupts the skin ridges</td><td></td><td></td></tr>
<tr><th scope="row">Corn <span class="g2-src">(WCC 5, 13)</span></th><td><span class="g2-lab">Cause or site</span>Over a bony prominence of the foot</td><td><span class="g2-lab">Appearance</span>Small, raised, sharply demarcated, with a central core</td><td></td><td><span class="g2-lab">Pain</span>Painful</td><td><span class="g2-lab">Size</span>A few millimeters to <b>1 cm</b></td></tr>
<tr><th scope="row">Callus <span class="g2-src">(WCC 5, 13)</span></th><td><span class="g2-lab">Cause or site</span>Weight-bearing areas</td><td><span class="g2-lab">Appearance</span>Broad base, diffuse borders, yellowish</td><td><span class="g2-lab">Skin ridges</span>Normal skin ridges</td><td><span class="g2-lab">Pain</span>Usually not painful, but may hurt where pressure is significant (e.g., soles)</td><td><span class="g2-lab">Size</span>A few millimeters to several centimeters</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wcc">Reference: wart, corn or callus</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8c-3">
<h3>Warts, Corns and Calluses · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>WCC 6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Self-treatable warts <span class="g2-src">(WCC 6)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<caption>Self-treatable</caption>
<thead><tr><th scope="col">Wart</th><th scope="col">Site</th></tr></thead>
<tbody>
<tr><th scope="row">Common warts</th><td>Hands</td></tr>
<tr><th scope="row">Plantar warts</th><td>Feet</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table">
<caption>Not self-treatable</caption>
<thead><tr><th scope="col">Wart</th><th scope="col">Site or form</th></tr></thead>
<tbody>
<tr><th scope="row">Flat</th><td>Face</td></tr>
<tr><th scope="row">Mosaic</th><td>Grouped plantar</td></tr>
<tr><th scope="row">Periungual</th><td>Around the nail</td></tr>
<tr><th scope="row">Filiform</th><td>Face</td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> No salicylic acid <span class="g2-src">(WCC 16)</span></h5>
<ul>
<li>Diabetes</li>
<li>Poor blood circulation</li>
<li>Irritated, infected or reddened skin</li>
<li>Moles or birthmarks</li>
<li>Warts with hair growing from them</li>
<li>Face, genital or mucous membrane warts (inside the mouth, nose, anus, genitals, lips)</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-4">
<h3>Warts, Corns and Calluses · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>List treatment goals</b><i>WCC 7, 14</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Warts <span class="g2-src">(WCC 7)</span></h5>
<ul>
<li>Eliminate signs and symptoms</li>
<li>Remove the lesion without scarring</li>
<li>Prevent recurrence</li>
<li>Prevent the spread of HPV</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Corns and calluses <span class="g2-src">(WCC 14)</span></h5>
<ul>
<li>Symptomatic relief</li>
<li>Remove the corn or callus</li>
<li>Prevent recurrence by correcting the cause</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-5">
<h3>Warts, Corns and Calluses · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Recommend appropriate non-drug therapy</b><i>WCC 8, 15</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Warts <span class="g2-src">(WCC 8)</span></h5>
<ul>
<li>No cutting, shaving or picking</li>
<li>Hands washed before and after touching the wart</li>
<li>A designated towel</li>
<li>No shared towels, razors, socks or shoes</li>
<li>The wart kept covered</li>
<li>Foot coverings in bathrooms and public spaces</li>
<li>Plantar wart: may suggest padding (lamb&rsquo;s wool or moleskin) over pressure points to relieve discomfort</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Corns and calluses <span class="g2-src">(WCC 15)</span></h5>
<ul>
<li>Soak <b>5 minutes</b> in warm water daily</li>
<li>Remove dead tissue gently</li>
<li>Circular foam or gel cushioning pads</li>
<li>Well-fitting, non-binding footwear</li>
<li>Orthotics</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-6">
<h3>Warts, Corns and Calluses · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (WCC 3)</span><b>Dosing frequency and max days of use; onset; length of treatment; amount of topical product and tube size; adverse effects; contraindications and interactions</b><i>WCC 9&ndash;12, 16&ndash;17</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Wart, salicylic acid <span class="g2-src">(WCC 10)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Directions</th></tr></thead>
<tbody>
<tr><th scope="row">40% pad</th><td>Removed after <b>48 hours</b> and repeated every <b>48 hours</b></td></tr>
<tr><th scope="row">17% liquid</th><td><b>1&ndash;2 times a day</b></td></tr>
</tbody>
</table>
</div>
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Wart, salicylic acid, either the pad or the liquid: for up to</span><span class="g2-tile-num">12 weeks</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>Salicylic acid &ldquo;is the most effective&rdquo; <span class="g2-src">(T@92731 11/12)</span></p>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Wart, cryotherapy <span class="g2-src">(WCC 11)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Common wart</th><td><b>About 20 seconds</b> for a common wart</td></tr>
<tr><th scope="row">Plantar wart</th><td><b>About 40 seconds</b> for a plantar wart</td></tr>
<tr><th scope="row">Repeat</th><td>Repeated after <b>2 weeks</b> if needed</td></tr>
<tr><th scope="row">Maximum</th><td>Up to <b>3 treatments</b></td></tr>
<tr><th scope="row">Use</th><td>Warts only</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Corn or callus, salicylic acid <span class="g2-src">(WCC 17)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Product</th><th scope="col">Directions</th><th scope="col">Length of use</th></tr></thead>
<tbody>
<tr><th scope="row">17%</th><td><span class="g2-lab">Directions</span>No more than <b>twice daily</b></td><td><span class="g2-lab">Length of use</span>For up to <b>14 days</b></td></tr>
<tr><th scope="row">40% plaster</th><td><span class="g2-lab">Directions</span>Removed within <b>48 hours</b>, reapplied every <b>48 hours</b></td><td><span class="g2-lab">Length of use</span>No longer than <b>14 days</b> (7 applications)</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Before each <span class="g2-src">(WCC 10, 17)</span></h5>
<ul>
<li>Wash, soak <b>5 minutes</b> in warm water, dry</li>
<li>Keep the product off healthy skin</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Amount and tube size</h5>
<p class="g2-p">Objective 6.4 names the amount and tube size of a topical product; this deck has no worked calculation. The adult fingertip-unit chart is in Reference.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wcc">Reference: salicylic acid and cryotherapy directions</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8c-7">
<h3>Warts, Corns and Calluses · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (WCC 3)</span><b>Provide follow-up recommendations</b><i>WCC 4, 10&ndash;11, 17</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Corn or callus <span class="g2-src">(WCC 17; T@94630 11/12)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Medical attention</th><td>Medical attention if redness or irritation occurs, or if it is not removed after <b>14 days</b> of treatment</td></tr>
<tr><th scope="row">Time to resolve</th><td>It may take several days to months to resolve</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Wart <span class="g2-src">(WCC 10&ndash;11)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Wart: the product limit of salicylic acid is</span><span class="g2-tile-num">12 weeks</span></div>
<div class="g2-tile"><span class="g2-tile-label">Wart: the product limit of cryotherapy is</span><span class="g2-tile-num">3 treatments</span></div>
</div>
<p class="g2-p">WCC 4 prints &ldquo;Recurrent or recalcitrant warts should be referred&rdquo;; she said &ldquo;if you see reoccurrence of the wart, that&rsquo;s when we need treatment&rdquo; (T@88519 11/12); see Reference.</p>
</div>
</section>

<details class="gdetails" id="gpl-p8c">
<summary>Dr. Patel: Warts, corns and calluses slide by slide, what the lecture adds (20 slides)</summary>
<section class="gobj" id="gobj-pl-c-1">
<h3>Dr. Patel, slide by slide &middot; Warts, corns and calluses &middot; slides 1&ndash;5</h3>
<div class="gbar"><span>What the lecture adds (Warts 1&ndash;5)</span><b>Know what causes warts, how a wart differs from a corn and a callus, and the objectives she builds exam questions from</b><i>Patel Warts slide 1, 2, 3, 4, 5</i></div>
<div class="gpt g2-block"><h5>Title slide (Patel Warts slide 1)</h5>
<p class="g2-status"><b>Status C</b> Slide title is wrong; she corrected it</p>
<p>The title slide reads "WCC: Wounds, Corns, and Calluses". She announced the lecture the same way and then corrected herself: the lecture is on warts, corns and calluses. The slides that follow cover warts on slides 4 to 12 and corns and calluses on slides 13 to 17, which matches the corrected title.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;That should say warts. I'm sorry.&rdquo; <span class='g2-src'>(11/12 T@88031)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Learning objectives 1 to 5 (Patel Warts slide 2)</h5>
<p class="g2-status"><b>Status A, E</b> On the slide; lecture adds her cues about objectives</p>
<p>The slide lists five objectives: perform the SCHOLAR-MAC/QuEST and Pharmacist's Patient Care Process interview, determine the condition from signs, symptoms and history, determine whether the patient is a self-care candidate, list treatment goals, and recommend non-drug therapy. She did not go through the interview components in this lecture. She said the objectives repeat the pattern of her earlier lectures and, at the start of the day, that this is how she creates exam questions.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Objectives very similar to my previous lectures&rdquo; <span class='g2-src'>(11/12 T@88102)</span></p><p>&ldquo;This is how I create my exam questions as well&rdquo; <span class='g2-src'>(11/12 T@962)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Learning objectives 6 and 7: dosing, length, follow-up (Patel Warts slide 3)</h5>
<p class="g2-status"><b>Status E</b> On the slide; lecture adds what she asked students to focus on</p>
<p>Objective 6 asks for the dosing frequency and maximum days of use of the active ingredients highlighted in lecture, the expected onset, a recommended length of treatment, the amount of topical product and tube size, adverse effects, and contraindications and interactions; objective 7 is follow-up. In her summary she named the parts she wants attention on: counseling on how to use the ingredients, the number of days of use, how many times a treatment can be repeated, and when to refer. She did not teach a product-amount or tube-size calculation, onset, adverse effects or interactions for the wart, corn and callus products. Not in materials.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;make sure you understand how to counsel and educate the patient&rdquo; <span class='g2-src'>(11/12 T@94815)</span></p><p>&ldquo;Pay attention to how many days you're using the products for&rdquo; <span class='g2-src'>(11/12 T@94913)</span></p><p>&ldquo;How many times can we repeat it for&rdquo; <span class='g2-src'>(11/12 T@94975)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Warts: cause, HPV types, spread, recurrence (Patel Warts slide 4)</h5>
<p class="g2-status"><b>Status D, E</b> Facts on slide; lecture stresses the HPV-by-site point, and the refer wording differs</p>
<p>The slide says warts are caused by human papillomavirus, spread from other people, by auto-inoculation or on fomites, are limited to the epidermis, and may resolve without treatment. Hand warts are HPV-2, HPV-4, HPV-27 and HPV-57; foot warts are HPV-1. She said to know that feet are HPV 1 and that the other types are on the hands. She stated the epidermis limit without giving a reason.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: recurrent or recalcitrant warts should be referred.</p><p>Lecture: warts may resolve alone, but when a wart comes back, that is when treatment is needed.</p><p>An exam written from her lecture would key referral for a recurrent wart, because the slide says so and her summary named "when do we refer the patient" as one of the big things in this deck.</p></div>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;know that feet is HPV 1 and the other types are on the hands&rdquo; <span class='g2-src'>(11/12 T@88457)</span></p><p>&ldquo;When do we refer the patient? Those are big things&rdquo; <span class='g2-src'>(11/12 T@95016)</span></p></div>
</div>
<div class="gpt g2-block"><h5>How a wart, a corn and a callus differ (Patel Warts slide 5)</h5>
<p class="g2-status"><b>Status B, C</b> Table on slide; lecture adds plain-language distinctions</p>
<p>The table compares location, appearance, pain, size, timing, cause and modifying factors. Warts occur on any skin the virus can infect and have a rough cauliflower look; plantar warts disrupt the normal skin ridges. Corns sit over bony prominences of the foot, are raised, sharply demarcated and have a central core. Calluses are on weight-bearing areas, are yellowish, broad-based, and keep the normal skin-ridge pattern. She added that corns are painful regardless, while a callus hurts when weight is put on the foot, and that salicylic acid is the usual treatment for all three. The slide lists salicylic acid or cryotherapy for warts, and salicylic acid alone for corns and calluses.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;So corns, painful regardless&rdquo; <span class='g2-src'>(11/12 T@89254)</span></p><p>&ldquo;when a weight is applied on the foot, that can cause pain&rdquo; <span class='g2-src'>(11/12 T@89297)</span></p><p>&ldquo;oftentimes is with salicylic acid for all three&rdquo; <span class='g2-src'>(11/12 T@90006)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-c-2">
<h3>Dr. Patel, slide by slide &middot; Warts, corns and calluses &middot; slides 6&ndash;9</h3>
<div class="gbar"><span>What the lecture adds (Warts 6&ndash;9)</span><b>Know which warts are self-treatable, the goals and non-drug steps for warts, and the OTC products used</b><i>Patel Warts slide 6, 7, 8, 9</i></div>
<div class="gpt g2-block"><h5>Types of non-genital warts: which are self-treatable (Patel Warts slide 6)</h5>
<p class="g2-status"><b>Status E</b> Table on slide; lecture adds the exam cue</p>
<p>The table gives six types. Self-treatable: common wart (hands; children and adolescents; dome-shaped, rough papules) and plantar wart (feet; adolescents and young adults; flat, callus-like with disrupted skin markings). Not self-treatable: flat wart (face; children), mosaic wart (feet; multiple closely grouped plantar warts), periungual wart (around the nail; people who bite their nails) and filiform wart (face; threadlike projections). Neither the slide nor the lecture gives a reason for each sorting. The one related statement is on slide 16, which lists warts on the face among places not to use the corn and callus product.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Know what is self-treatable and know what is not self-treatable&rdquo; <span class='g2-src'>(11/12 T@90202)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Wart treatment goals (Patel Warts slide 7)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Non-drug care for warts (Patel Warts slide 8)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>OTC wart removers: salicylic acid and cryotherapy (Patel Warts slide 9)</h5>
<p class="g2-status"><b>Status B</b> Products on slide; lecture adds what cryotherapy does</p>
<p>The slide shows four products: salicylic acid 40% (pads, strips, patches), salicylic acid 17% (gel, liquid, stick), cryotherapy with dimethyl ether and propane, and cryotherapy with nitrous oxide. She gave the strength and form pairs and described cryotherapy as burning off or freezing off the wart. She did not name the cryotherapy gases. Both cryotherapy and salicylic acid are available over the counter.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Cryotherapy is where we basically burn off and freeze off the wart&rdquo; <span class='g2-src'>(11/12 T@90995)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-c-3">
<h3>Dr. Patel, slide by slide &middot; Warts, corns and calluses &middot; slides 10&ndash;12</h3>
<div class="gbar"><span>What the lecture adds (Warts 10&ndash;12)</span><b>Know how each OTC wart product is applied, for how long and how often, and how salicylic acid ranks against the complementary options</b><i>Patel Warts slide 10, 11, 12</i></div>
<div class="gpt g2-block"><h5>Salicylic acid counseling: 40% plaster and 17% liquid or gel (Patel Warts slide 10)</h5>
<p class="g2-status"><b>Status B, E</b> Steps on slide; lecture adds the reason for the tape and an exam cue on days of use</p>
<p>The slide gives the shared steps (wash hands, soak the area in warm water for 5 minutes, wash and dry). For the 40% plaster, pad or strip: apply, cover with occlusive tape, remove after 48 hours, repeat every 48 hours up to 12 weeks. For the 17% liquid, gel or stick: apply 1 drop at a time, protect healthy skin, let it dry, cover, repeat 1 to 2 times a day up to 12 weeks. She gave the reason for the tape, to keep the plaster on, and restated the 48 hours as 2 days on the wart. The reason for the soak is not in the materials. Both products share the 12-week maximum; the frequencies differ.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;using the occlusive tape to keep it on&rdquo; <span class='g2-src'>(11/12 T@91362)</span></p><p>&ldquo;remove it after 48 hours, so it does stay on for 2 days&rdquo; <span class='g2-src'>(11/12 T@91477)</span></p><p>&ldquo;Pay attention to how many days you're using the products for&rdquo; <span class='g2-src'>(11/12 T@94913)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Cryotherapy counseling: halo, seconds, repeats (Patel Warts slide 11)</h5>
<p class="g2-status"><b>Status C</b> Steps on slide; lecture adds a description of the device</p>
<p>The slide gives approximately 20 seconds for common warts and 40 seconds for plantar warts, discarding the single-use applicator, repeating after 2 weeks if needed, and a maximum of 3 treatments. Its other steps include not holding the canister near the face, body or clothing, flammability, and lightly abrading plantar warts with a file or pumice stone. She described the applicator as a stick, said the application produces a halo like a bubble around the wart, and said the wart is gone "within" 20 seconds for common warts and 40 seconds for plantar warts, where the slide says approximately. She did not mention flammability or the file or pumice stone. The slide wording for the time is "apply ... until a halo appears", approximately 20 or 40 seconds.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;it creates this halo around the wart like a bubble&rdquo; <span class='g2-src'>(11/12 T@92292)</span></p><p>&ldquo;it's a single-use device discarded after one use&rdquo; <span class='g2-src'>(11/12 T@92437)</span></p><p>&ldquo;repeat it after 2 weeks if needed&rdquo; <span class='g2-src'>(11/12 T@92495)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Complementary options and the ranking of salicylic acid (Patel Warts slide 12)</h5>
<p class="g2-status"><b>Status C</b> List on slide; lecture adds a ranking</p>
<p>The slide lists topical vitamin A (case report only), dietary zinc at 10 mg/kg/day (small study), topical garlic chloroform extract (small study) and duct tape applied for 6 days and repeated up to 2 months. She named vitamin A, zinc, garlic and duct tape without doses or timing, called them interesting but available, and said salicylic acid is the most effective. The slide labels vitamin A as case report only and zinc and garlic as small studies.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;Quite interesting, but it is available to use&rdquo; <span class='g2-src'>(11/12 T@92664)</span></p><p>&ldquo;the salicylic acid is the most effective to treat the warts&rdquo; <span class='g2-src'>(11/12 T@92731)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-c-4">
<h3>Dr. Patel, slide by slide &middot; Warts, corns and calluses &middot; slides 13&ndash;17</h3>
<div class="gbar"><span>What the lecture adds (Warts 13&ndash;17)</span><b>Tell a corn from a callus, and know the non-drug care, cautions and counseling limits for salicylic acid on corns and calluses</b><i>Patel Warts slide 13, 14, 15, 16, 17</i></div>
<div class="gpt g2-block"><h5>Corn versus callus (Patel Warts slide 13)</h5>
<p class="g2-status"><b>Status B</b> Definitions on slide; lecture adds the contrast</p>
<p>The slide defines a corn (clavus) as small, raised, sharply demarcated and hyperkeratotic with a central core, caused by pressure from underlying bony prominences or joints. A callus has a broad base with relatively even thickening, usually on the bottom of the foot: heel, ball, toes and sides. She contrasted them by location and look: a corn sits on the bony area of the foot, small and raised; a callus is thick skin on the sole where weight is borne, yellowish in color.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;we're talking about the bony area of the feet&rdquo; <span class='g2-src'>(11/12 T@92852)</span></p><p>&ldquo;we're talking about the sole part of the feet where weight is based&rdquo; <span class='g2-src'>(11/12 T@92908)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Corn and callus treatment goals (Patel Warts slide 14)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Non-drug care for corns and calluses: footwear first (Patel Warts slide 15)</h5>
<p class="g2-status"><b>Status B, C</b> List on slide; lecture adds practical detail and the common cause</p>
<p>The slide lists daily 5-minute soaks in warm water, gentle removal of dead tissue, circular foam or gel pads, well-fitting non-binding footwear and orthotics. She said footwear is most often the cause, using athletes and weight training as an example of shoes that are too tight at the sides or do not support the foot. She added Epsom salt or an exfoliator for removing dead tissue, and described orthotics as prescription-based footwear. <span class="g2-tonly" title="Transcript only: not on the slide">Transcript-only, verify against slide</span> The slide does not name Epsom salt.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;footwear tends to be the most common cause&rdquo; <span class='g2-src'>(11/12 T@93724)</span></p><p>&ldquo;you can use Epsom salt or an exfoliator as well&rdquo; <span class='g2-src'>(11/12 T@93344)</span></p><p>&ldquo;orthotics being it is a prescription-based footwear&rdquo; <span class='g2-src'>(11/12 T@93804)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Cautions for corn and callus products (Patel Warts slide 16)</h5>
<p class="g2-status"><b>Status B, C, D</b> List on slide; lecture gives a shorter, differently worded version</p>
<p>The slide says not to use the product on irritated skin, infected or reddened areas, moles, birthmarks, warts with hair growing from them, genital warts, warts on the face, or warts on the mucous membranes (mouth, nose, anus, genitals, lips), and not to use it if diabetic or with poor blood circulation. It shows trade names with 17% or 40% salicylic acid, which she did not read. She named irritated skin, moles and diabetic patients, and said salicylic acid at 17% or 40% is the main treatment. No reason for the diabetes exclusion is given in the materials.</p>
<div class="g2-note"><span class="g2-k">Slide and lecture differ</span><p>Slide: the product is not used on warts with hair, genital warts, face warts or mucous-membrane warts.</p><p>Lecture: she said not to apply it to irritated skin or if there are moles or warts to the skin, which read literally would rule out wart treatment.</p><p>An exam written from her lecture would key the slide list, because the same lecture teaches salicylic acid on common and plantar warts (slides 9 and 10).</p></div>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;we're not applying it to irritated skin or if there's moles&rdquo; <span class='g2-src'>(11/12 T@93973)</span></p><p>&ldquo;that is also not the time to use these agents&rdquo; <span class='g2-src'>(11/12 T@94100)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Counseling on 17% and 40% products for corns and calluses (Patel Warts slide 17)</h5>
<p class="g2-status"><b>Status B, E</b> Steps on slide; lecture adds the link between 7 applications and referral</p>
<p>For the 17% product the slide says to apply no more than twice daily for up to 14 days, one drop at a time, let it dry, cap the container tightly to prevent evaporation (which would raise the concentration), and store it away from light and heat. For the 40% plaster or pad: remove within 48 hours, reapply every 48 hours, never longer than 14 days, which is no more than 7 applications, and seek medical attention for redness or irritation or if the corn or callus is not gone after 14 days. She gave the 40% limits of 14 days and 7 applications and said failure after that goes to the provider. She did not give the twice daily or 14 day limit for the 17% product, and the 40% limit here (14 days) differs from the 40% wart limit (12 weeks, slide 10).</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;You're not gonna use it longer than 14 days&rdquo; <span class='g2-src'>(11/12 T@94581)</span></p><p>&ldquo;then that's when you would go ahead and refer over to the provider&rdquo; <span class='g2-src'>(11/12 T@94703)</span></p><p>&ldquo;Pay attention to how many days you're using the products for&rdquo; <span class='g2-src'>(11/12 T@94913)</span></p></div>
</div>
</section>

<section class="gobj" id="gobj-pl-c-5">
<h3>Dr. Patel, slide by slide &middot; Warts, corns and calluses &middot; slides 18&ndash;20</h3>
<div class="gbar"><span>What the lecture adds (Warts 18&ndash;20)</span><b>Her closing points on this lecture: the objectives, counseling, days of use, number of repeats and when to refer</b><i>Patel Warts slide 18, 19, 20</i></div>
<div class="gpt g2-block"><h5>Summary: what she called the big things (Patel Warts slide 18)</h5>
<p class="g2-status"><b>Status E</b> Slide lists the focus; lecture names the exam-relevant points</p>
<p>The slide says to answer the learning objectives and to focus on medication selection and counseling, covering bathing and non-pharm techniques, OTC topicals, prescription topicals and referral to a dermatologist. Her version names the working points: understand how to counsel and educate on each ingredient, the number of days of use, how many times a treatment can be repeated, and when to refer. The lecture contained no prescription topical or dermatologist content for warts, corns or calluses.</p>
<div class='g2-said'><span class='g2-k'>She said</span><p>&ldquo;look at the objectives&rdquo; <span class='g2-src'>(11/12 T@94791)</span></p><p>&ldquo;Pay attention to how many days you're using the products for&rdquo; <span class='g2-src'>(11/12 T@94913)</span></p><p>&ldquo;Those are big things with this PowerPoint&rdquo; <span class='g2-src'>(11/12 T@95046)</span></p></div>
</div>
<div class="gpt g2-block"><h5>References (Patel Warts slide 19)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
<div class="gpt g2-block"><h5>Questions slide (Patel Warts slide 20)</h5>
<p class="g2-status"><b>Status A</b> On the slide and complete; nothing added in lecture</p>
</div>
</section>
</details>
`;

/* ==========================================================================
   TOPICS TAB, GROUPED BY SLIDE DECK (Louis, 2026-11-08)
   ==========================================================================
   The core lists TOPICS in array order with no grouping. TOPIC_DECKS
   (q1_topics.js) names each deck's topics in slide order. Once every question
   file has pushed its topics, this orders TOPICS by deck, marks each topic
   with its deck, and on the Topics tab puts each deck's topic cards in a
   folder: a heading button (deck name, file, dates, question count, a chevron)
   that opens and closes them. Folders start closed (Louis, 2026-11-08: "a
   collapse folder that way it reduces the scrolling need"); the ones a reader
   opens are remembered on this device only, under `<NS>:deckOpen` (a list of
   deck ids), never in the progress or history keys. A filter that leaves a
   deck no topic leaves no folder. An optional topic (outside the exam) stays
   outside the folders, after them, with its own "Optional" label in view.
   If something opens a topic card inside a closed folder (the core's "Learn a
   topic" fallback, a test), the folder opens with it. Topic ids, sub ids and
   questions are unchanged, and progress is kept by question id, so nothing
   stored changes. */
(function topicsByDeck(){
  if (typeof TOPICS === 'undefined' || typeof TOPIC_DECKS === 'undefined') return;
  const rank = {};
  TOPIC_DECKS.forEach((d, di) => d.topics.forEach((id, ti) => { rank[id] = [di, ti]; }));
  const sorted = TOPICS.map((t, i) => ({t, k: rank[t.id] || [TOPIC_DECKS.length, i]}))
    .sort((a, b) => a.k[0] - b.k[0] || a.k[1] - b.k[1]).map(x => x.t);
  sorted.forEach((t, i) => {
    TOPICS[i] = t;
    const d = TOPIC_DECKS.find(x => x.topics.includes(t.id));
    if (d) t.deck = d.id;
  });
  if (typeof renderTopics !== 'function' || typeof document === 'undefined') return;

  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = COURSE.ns; } return ns + ':deckOpen'; };
  const readOpen = () => {
    try { const v = JSON.parse(localStorage.getItem(KEY()) || '[]'); return new Set(Array.isArray(v) ? v : []); }
    catch (e) { return new Set(); }
  };
  const saveOpen = set => { try { localStorage.setItem(KEY(), JSON.stringify([...set])); } catch (e) { /* this device only */ } };
  const CSS = `
.deckfold{margin:14px 0 0}
.deckfold>h3{margin:0;font-size:inherit}
.deckbtn{display:flex;align-items:center;gap:12px;width:100%;min-height:44px;text-align:left;
  background:var(--paper);color:var(--text);border:1px solid var(--line);border-radius:var(--r,10px);padding:10px 14px}
.deckbtn:hover{border-color:var(--accent)}
.deckbtn:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.deckbtn .decktxt{flex:1;min-width:0}
.deckbtn .deckname{display:block;font-size:16px;font-weight:600;line-height:1.3}
.deckbtn .deckmeta{display:block;font-size:13px;color:var(--text-dim);margin-top:2px;overflow-wrap:anywhere}
.deckbtn .deckchev{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--accent);font-weight:500}
.deckbtn .deckchev i{font-style:normal;display:inline-block;font-size:18px;line-height:1;transition:transform .15s}
.deckbtn[aria-expanded="true"] .deckchev i{transform:rotate(90deg)}
.deckbtn[aria-expanded="true"]{border-color:var(--accent);background:var(--accent-bg)}
.deckbody{padding:8px 0 0 10px;border-left:3px solid var(--accent-bg);margin-left:6px}
.deckbody[hidden]{display:none}
.examfold{margin:16px 0 0}
.examfold>h3{margin:0;font-size:inherit}
.exambtn{border-width:2px}
.exambtn .deckname{font-size:17px;font-weight:700}
.exambody{padding:2px 0 0 6px}
.exambody[hidden]{display:none}
@media (prefers-reduced-motion: reduce){.deckbtn .deckchev i{transition:none}}`;
  const addCss = () => {
    if (document.getElementById('deckcss')) return;
    const s = document.createElement('style'); s.id = 'deckcss'; s.textContent = CSS; document.head.appendChild(s);
  };

  /* Exam folders (Louis, 2026-11-10: "Group the lecture per exam like intro to pharmacology/
     pharmacokinetics where the lecture are closed in an exam 1 folder"). Each deck folder goes
     into the folder of the exam its deck is on (TOPIC_DECKS `exam`); an optional topic stays
     after the folders, its "Optional" label in view (the core's optional_test). The active exam's folder starts open and the others
     closed; a reader's own open or close is kept on this device under `<NS>:examOpen`
     ({exam number: true|false}), never in progress or history. */
  const EKEY = () => KEY().replace(/deckOpen$/, 'examOpen');
  const readEx = () => { try { const v = JSON.parse(localStorage.getItem(EKEY()) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (err) { return {}; } };
  const saveEx = v => { try { localStorage.setItem(EKEY(), JSON.stringify(v)); } catch (err) { /* this device only */ } };
  const activeN = () => { const m = String(COURSE.activeExam || '').match(/(\d+)$/); return m ? +m[1] : null; };
  function groupByExam(el, cards, shown, e) {
    const examOf = t => (TOPIC_DECKS.find(x => x.id === t.deck) || {}).exam;
    const nums = [...new Set(shown.map(examOf).filter(n => n != null))].sort((a, b) => a - b);
    if (nums.length < 1) return;
    const saved = readEx();
    nums.forEach(n => {
      const decks = [...el.querySelectorAll('section.deckfold')].filter(s => (TOPIC_DECKS.find(x => x.id === s.dataset.deck) || {}).exam === n);
      if (!decks.length) return;
      const ex = (COURSE.exams || []).find(x => x.id === 'exam' + n) || {};
      const lec = (COURSE.lectures || []).find(l => l.exam === n && l.module);
      const title = lec ? lec.module.replace(/^(Exam \d+): /, '$1 · ') : 'Exam ' + n;
      const tops = shown.filter(t => examOf(t) === n && !t.optional);
      const q = tops.reduce((s, t) => s + poolFor(t.id, null).length, 0);
      const isOpen = n in saved ? !!saved[n] : n === activeN();
      const sec = document.createElement('section');
      sec.className = 'examfold'; sec.dataset.exam = String(n);
      sec.innerHTML = `<h3><button type="button" class="deckbtn exambtn" id="exambtn-${n}" aria-expanded="${isOpen}" aria-controls="exambody-${n}">` +
        `<span class="decktxt"><span class="deckname">${e(title)}</span>` +
        `<span class="deckmeta">${ex.date ? e(ex.date) + ' · ' : ''}${decks.length} lecture deck${decks.length === 1 ? '' : 's'} · ${q} questions</span></span>` +
        `<span class="deckchev" aria-hidden="true">${isOpen ? 'Close' : 'Open'} <i>›</i></span></button></h3>` +
        `<div class="exambody" id="exambody-${n}" role="region" aria-labelledby="exambtn-${n}"${isOpen ? '' : ' hidden'}></div>`;
      decks[0].before(sec);
      const body = sec.querySelector('.exambody'), btn = sec.querySelector('.exambtn');
      decks.forEach(d => body.appendChild(d));
      const set = (on, keep) => {
        btn.setAttribute('aria-expanded', String(on)); body.hidden = !on;
        btn.querySelector('.deckchev').firstChild.textContent = (on ? 'Close' : 'Open') + ' ';
        if (!keep) return;
        const now = readEx(); now[n] = on; saveEx(now);
      };
      btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true', true));
      // a topic card opened by code in a closed exam folder brings the folder open
      // (the deck folder's listener, inside this one, clears the drawn-open mark)
      body.addEventListener('toggle', ev => {
        const c = ev.target;
        if (!c || !c.matches || !c.matches('details.topic') || c.dataset.drawnOpen) return;
        if (c.open && body.hidden) set(true, false);
      }, true);
    });
  }

  const base = renderTopics;
  renderTopics = function(){
    const r = base.apply(this, arguments);
    try {
      const el = document.getElementById('v-topics');
      if (!el || !el.querySelectorAll || !document.createElement) return r;
      const cards = [...el.querySelectorAll('details.topic')];
      const shown = TOPICS.filter(t => poolFor(t.id, null).length);
      if (cards.length !== shown.length) return r;
      addCss();
      const e = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'})[c]);
      const open = readOpen();
      const folded = (t, i) => !t.optional && TOPIC_DECKS.some(x => x.id === t.deck) ? i : -1;
      let fold = null;
      shown.forEach((t, i) => {
        if (folded(t, i) < 0) { fold = null; return; }
        if (!fold || fold.deck !== t.deck) {
          const d = TOPIC_DECKS.find(x => x.id === t.deck);
          const mine = shown.filter(x => x.deck === d.id && !x.optional);
          const n = mine.reduce((s, x) => s + poolFor(x.id, null).length, 0);
          const isOpen = open.has(d.id);
          const sec = document.createElement('section');
          sec.className = 'deckfold'; sec.dataset.deck = d.id;
          sec.innerHTML = `<h3><button type="button" class="deckbtn" id="deckbtn-${e(d.id)}" aria-expanded="${isOpen}" aria-controls="deckbody-${e(d.id)}">` +
            `<span class="decktxt"><span class="deckname">${e(d.name)}</span>` +
            `<span class="deckmeta">${e(d.file)} · ${e(d.when)} · ${n} questions</span></span>` +
            `<span class="deckchev" aria-hidden="true">${mine.length} topic${mine.length === 1 ? '' : 's'} <i>›</i></span></button></h3>` +
            `<div class="deckbody" id="deckbody-${e(d.id)}" role="region" aria-labelledby="deckbtn-${e(d.id)}"${isOpen ? '' : ' hidden'}></div>`;
          cards[i].before(sec);
          fold = {deck: t.deck, body: sec.querySelector('.deckbody'), btn: sec.querySelector('.deckbtn')};
          const {body, btn} = fold, id = d.id;
          const set = (on, keep) => {
            btn.setAttribute('aria-expanded', String(on)); body.hidden = !on;
            if (!keep) return;
            const now = readOpen(); if (on) now.add(id); else now.delete(id); saveOpen(now);
          };
          btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true', true));
          // a topic card opened by code inside a closed folder brings its folder open
          // (a card the core drew open fires one toggle of its own as it is drawn; that one is not a reason)
          body.addEventListener('toggle', ev => {
            const c = ev.target;
            if (!c || !c.matches || !c.matches('details.topic')) return;
            if (c.dataset.drawnOpen) { delete c.dataset.drawnOpen; return; }
            if (c.open && body.hidden) set(true, false);
          }, true);
        }
        if (cards[i].open) cards[i].dataset.drawnOpen = '1';
        fold.body.appendChild(cards[i]);
      });
      groupByExam(el, cards, shown, e);
    } catch (err) { /* the list stays as the core drew it */ }
    return r;
  };
})();
