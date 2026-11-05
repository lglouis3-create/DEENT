const GUIDE_HTML = `
<h2>Objective guides</h2>
<p class="sub">One section per learning objective on Dr. Smith's Lecture 1 slides, with the points in slide order and what she said in lecture marked (T). Nothing here is scored.</p>

<section class="gobj" id="gobj-l1-1">
<h3>Lecture 1 (Skin-Pathophys-Students-2026.pdf) &mdash; Objective 1 of 5: basic structures and functions of the skin</h3>
<div class="gbar"><span>OBJECTIVE (slide 3)</span><b>Describe the basic structures and functions of the skin</b><i>slides 5&ndash;6</i></div>
<div class="gpt"><h5>1. Layers and keratinocytes (slide 5)</h5><ul><li>Epidermis (outer), dermis (middle; vessels and nerves), hypodermis (inner; vessels, adipose, some nerve endings) (T 32&ndash;37).</li><li>Keratinocytes start cuboidal in the stratum basale, move up, flatten, make keratin and lose the nucleus by the stratum corneum (T 39&ndash;48).</li></ul></div>
<div class="gpt"><h5>2. Sebum (slide 6)</h5><ul><li>Glycerides, wax esters and cholesterol; retards water loss; most on face, scalp, back and neck.</li><li>(T) &ldquo;the most important thing to remember here is we have [sebum] produced by the sebaceous gland, and these cuboidal keratinocytes, they do move on up&rdquo; (T 78&ndash;80).</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-2">
<h3>Lecture 1 &mdash; Objective 2 of 5: epidemiology of the three diseases</h3>
<div class="gbar"><span>OBJECTIVE (slide 3)</span><b>Differentiate between the epidemiologic aspects of the three diseases</b><i>slides 10, 20, 31</i></div>
<div class="gpt"><h5>Atopic dermatitis (slide 10)</h5><ul><li>15&ndash;30% of children and 2&ndash;10% of adults in developed countries; males and females alike; lower in rural areas (hygiene hypothesis); two- to threefold risk with one atopic parent, three- to fivefold with two.</li></ul></div>
<div class="gpt"><h5>Psoriasis (slide 20)</h5><ul><li>About 3% of the US population; the most common immune-mediated inflammatory disease worldwide; males and females equally; about 30% have a first-degree relative.</li></ul></div>
<div class="gpt"><h5>Acne (slides 31, 35)</h5><ul><li>Lifetime prevalence approaches 90%; onset at puberty with androgens; more severe in boys in puberty, in women in adulthood; 81% likelihood if both parents had acne.</li></ul></div>
<div class="gtell"><b>Tell apart</b><ul><li>3% is psoriasis; 15&ndash;30% of children is AD; about 90% lifetime is acne.</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-3">
<h3>Lecture 1 &mdash; Objective 3 of 5: etiologies and pathologies</h3>
<div class="gbar"><span>OBJECTIVE (slide 3)</span><b>Describe the etiologies and pathologies for each of these three conditions</b><i>slides 13&ndash;16, 19&ndash;24, 32&ndash;35</i></div>
<div class="gpt"><h5>Atopic dermatitis (slides 13&ndash;16)</h5><ul><li>T-cell mediated, IgE-independent at first; skin barrier dysfunction; deviation toward TH2; IgE-mediated reactions on later exposures; secondary infection.</li><li>FLG &rarr; profilaggrin &rarr; filaggrins &rarr; barrier; variants let allergens in. About 40% of people lacking FLG do not develop AD.</li></ul></div>
<div class="gpt"><h5>Psoriasis (slides 19&ndash;24)</h5><ul><li>Trauma &rarr; APCs present antigen to T cells &rarr; TNF-alpha, interferon-gamma, IL-23, IL-17 &rarr; keratinocyte hyperproliferation and chronic systemic inflammation.</li><li>Keratinocytes: 1.5 days to divide and 4 to shed, against 13 and 26 normally. Koebner response; lithium and beta blockers worsen it.</li></ul></div>
<div class="gpt"><h5>Acne (slides 32&ndash;35)</h5><ul><li>Androgens &rarr; more sebum, altered keratinization in the duct, P. acnes colonization, inflammation. P. acnes lipase makes free fatty acids from sebum glycerides.</li></ul></div>
<!--DIA:acne-cascade-->
<div class="gpoll"><b>Her polls (slide 38)</b><ul><li>Major pathology of AD: skin barrier dysfunction (TRUE); keratinocyte hyperproliferation (FALSE, psoriasis); excess sebum (FALSE, acne).</li><li>Major pathology of psoriasis: keratinocyte hyperproliferation (TRUE).</li><li>Major pathology of acne: excess sebum production (TRUE). Keratinocyte hyperproliferation is FALSE: &ldquo;This is a feature of psoriasis&rdquo; (T 573&ndash;577).</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-4">
<h3>Lecture 1 &mdash; Objectives 4 and 5 of 5: drug classes and their general mechanisms</h3>
<div class="gbar"><span>OBJECTIVE (slide 3)</span><b>List the classes of medications used to treat each condition and describe their general mechanisms</b><i>Pathophys 17, 28, 36&ndash;37; PCol 5&ndash;15</i></div>
<div class="gpt"><h5>Nuclear receptor binders (PCol 5&ndash;7)</h5><ul><li>Promote or inhibit transcription, directly at a response element or indirectly by binding NF-kB or AP-1.</li><li>(T) &ldquo;either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins&rdquo; (T 680&ndash;683).</li></ul></div>
<!--DIA:nr-action-->
<div class="gpt"><h5>Corticosteroids (PCol 8&ndash;12)</h5><ul><li>CBG carries the steroid; Hsp90 leaves the receptor when the steroid binds; complex binds the GRE.</li><li>Low potency for the face and for maintenance; avoid occluded or abraded skin; systemic effects possible even with low potency.</li></ul></div>
<div class="gpt"><h5>Retinoids (PCol 14&ndash;15)</h5><ul><li>RAR: differentiation and proliferation (acne, psoriasis, photoaging); RXR: apoptosis (Kaposi sarcoma).</li><li>Acne: less cohesion, faster turnover, comedones opened. Aging: more collagen, new vessels, thicker epidermis.</li></ul></div>
<div class="gask"><b>How it is asked</b><ul><li>She asks with generic names only (T 618&ndash;621).</li></ul></div>
</section>
`;
