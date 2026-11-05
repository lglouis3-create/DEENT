const TELL_HTML = `
<h2>Tell apart</h2>
<p class="sub">Pairs that share wording. Each row gives the feature that separates them and the slide it comes from. Nothing here is scored.</p>

<h3 id="tell-l1-diseases">Lecture 1: the three diseases (Skin-Pathophys-Students-2026.pdf)</h3>
<table class="reftab"><thead><tr><th style="width:22%">Looks alike</th><th>What separates them</th><th style="width:26%">The trap</th><th style="width:9%">Slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> vs <b>psoriasis</b> vs <b>acne</b></td><td>Major pathology: AD, skin barrier dysfunction; psoriasis, keratinocyte hyperproliferation; acne, excess sebum production.</td><td>Keratinocyte hyperproliferation offered for acne: in class she said it is a feature of psoriasis, not acne (T 573–577).</td><td>38</td></tr>
<tr><td><b>AD keratinocytes</b> vs <b>psoriasis keratinocytes</b></td><td>AD: a structural defect; too little profilaggrin and filaggrin, cells do not lie flat, gaps let allergens in. Psoriasis: cells divide too fast and do not mature.</td><td>Calling both "hyperproliferation".</td><td>15, 19</td></tr>
<tr><td><b>TH1</b> vs <b>TH2</b> cytokines</td><td>TH1 (interferon-gamma, IL-12) suppress IgE. TH2 (IL-5, IL-13) increase IgE. AD has more TH2 than TH1.</td><td>Swapping which group raises IgE.</td><td>16</td></tr>
<tr><td><b>Normal</b> vs <b>psoriatic</b> keratinocyte cycle</td><td>Normal: 13 days to divide, 26 days to mature and shed. Psoriasis: 1.5 days and 4 days.</td><td>Swapping the divide and mature figures.</td><td>23</td></tr>
<tr><td><b>Psoriatic arthritis</b> vs <b>rheumatoid arthritis</b></td><td>Psoriatic: asymmetric, skin lesions usually first, no rheumatoid factor elevation.</td><td>Joint pain before skin lesions.</td><td>26</td></tr>
<tr><td><b>Acne mechanica</b> vs <b>cosmetica</b> vs <b>occupational</b></td><td>Mechanica: occlusion or irritation of the skin. Cosmetica: comedogenic oils in cosmetics. Occupational: dirt, vaporized cooking oil, industrial chemicals.</td><td>A helmet or strap called cosmetica.</td><td>35</td></tr>
</tbody></table>

<h3 id="tell-l1-drugs">Lecture 1: nuclear receptor binders (Skin-PCol-Students-2026.pdf)</h3>
<table class="reftab"><thead><tr><th style="width:22%">Looks alike</th><th>What separates them</th><th style="width:26%">The trap</th><th style="width:9%">Slide</th></tr></thead><tbody>
<tr><td><b>Direct</b> vs <b>indirect</b> nuclear receptor action</td><td>Direct: two drug–receptor complexes bind a response element (GRE). Indirect: one complex binds a transcription factor (NF-kB, AP-1) and keeps it off the DNA.</td><td>Reversing the number of complexes.</td><td>5–6</td></tr>
<tr><td><b>CBG</b> vs <b>Hsp90</b></td><td>CBG carries the steroid in the blood. Hsp90 chaperones the receptor in the cell and comes off when the steroid binds.</td><td>Hsp90 as the carrier protein.</td><td>10</td></tr>
<tr><td><b>Local</b> vs <b>systemic</b> topical steroid effects</td><td>Local: striae, atrophy, perioral dermatitis, acne, rosacea, telangiectasias, purpura, focal hypertrichosis, allergic contact dermatitis. Systemic: HPA axis suppression, infections, hyperglycemia, cataracts, glaucoma, growth retardation in children.</td><td>Thinking low potency rules out systemic effects (T 861–865).</td><td>12</td></tr>
<tr><td><b>RAR</b> vs <b>RXR</b> targeting retinoids</td><td>RAR: differentiation and proliferation; acne, psoriasis, photoaging. RXR: apoptosis; cancers such as Kaposi sarcoma.</td><td>"RXR" for skin disease: a slip in class (T 901–903); the slide and her next sentence say RAR.</td><td>14</td></tr>
</tbody></table>
`;
