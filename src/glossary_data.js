/* glossary_data.js: the course glossary read by glossary_ui.js (2026-11-15).
   763 entries from the slides of the eleven decks (Dr. Smith's Pathophysiology, PCol and Sun Exposure; Dr. Sikazwe's DPAW; Dr. Patel's
   Dermatitis, Acne, Scaly Dermatoses, Outdoor Exposures, Sun Exposure, Wound Care and Warts) and the Diseases tab's terms, each checked
   against its cited slide, or against the public source named in its cite when src is 'general' (a word the slides use without defining).
   Where the same term is taught by more than one professor the entry gives each definition under the professor's name.
   Fields: id; term (the name shown); also (other spellings and abbreviations the detector matches); cs:true (matched only in the case
   written, for an abbreviation that is also an ordinary word); def; cite (plain text, turned into slide links by slide_ui.js);
   src 'slide' | 'lecture' | 'general'; deck; prof; exam 1 | 2 | [1, 2]; kind. Written by the glossary build of 2026-11-15; edit the
   entries here, not the page script. */
const GLOSSARY_TERMS = [
{
"id": "sk-1a-hydroxylase",
"term": "1-α-hydroxylase",
"also": [
"1α-hydroxylase",
"1-alpha-hydroxylase",
"1-hydroxylase",
"1alpha-hydroxylase"
],
"def": "The enzyme named on slide 27 for the last step: it converts 25-OH-cholecalciferol to calcitriol (1,25-di-OH-cholecalciferol), the active vitamin D3.",
"cite": "DPAW slide 27",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-11b-hsd",
"term": "11β-HSD",
"also": [
"11β-hydroxysteroid dehydrogenase",
"11beta-HSD",
"11β-hydroxysteroid dehydrogenase (11β-HSD)"
],
"def": "11β-hydroxysteroid dehydrogenase; on slide 26 it interconverts hydrocortisone and cortisone (inactive).",
"cite": "DPAW slide 26",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-11b-oh",
"term": "11β-OH",
"also": [
"11β-hydroxyl",
"11-OH",
"11β-hydroxy",
"11beta-OH"
],
"def": "The hydroxyl group on the β face of C11; in slide 20's SAR it raises anti-inflammatory activity. 11β-HSD turns it into the C=O of inactive cortisone (slide 26).",
"cite": "DPAW slide 20; DPAW slide 26",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-13cis",
"term": "13-cis retinoic acid",
"also": [
"13-cis",
"13 cis"
],
"def": "Isotretinoin, the geometric isomer of tretinoin (slide 49).",
"cite": "DPAW slide 49",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-gen1",
"term": "1st generation retinoids",
"also": [
"first-generation retinoid",
"1st-generation",
"1st Gen. retinoids",
"non-aromatic retinoids",
"non-aromatic",
"non-aromatics",
"first generation retinoids"
],
"def": "The non-aromatic retinoids on slide 49: tretinoin and isotretinoin.",
"cite": "DPAW slide 49",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-25ohd",
"term": "25-OH-cholecalciferol",
"also": [
"25-hydroxycholecalciferol",
"25-hydroxyvitamin D3",
"25OHD",
"25-hydroxyvitamin D"
],
"def": "The inactive circulating form of vitamin D3 on slide 27, with an OH added at carbon 25.",
"cite": "DPAW slide 27",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-gen2",
"term": "2nd generation retinoids",
"also": [
"second-generation retinoid",
"2nd-generation",
"2nd Gen. retinoids",
"mono-aromatic",
"mono-aromatics",
"monoaromatic",
"second generation retinoids"
],
"def": "The mono-aromatic retinoids on slide 50: etretinate and its active form acitretin.",
"cite": "DPAW slide 50",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-30s",
"term": "30S subunit",
"also": [
"30S"
],
"def": "The subunit of the bacterial ribosome that tetracyclines bind irreversibly, which blocks binding of the incoming charged (aminoacyl) tRNA to the acceptor site.",
"cite": "PCol slide 42; PCol slide 43",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-gen3",
"term": "3rd generation retinoids",
"also": [
"third-generation retinoid",
"3rd-generation",
"3rd Gen. retinoids",
"poly-aromatic",
"poly-aromatics",
"polyaromatic",
"third generation retinoids"
],
"def": "The poly-aromatic retinoids on slide 51: adapalene (first synthetic retinoid), trifarotene and tazarotene (a prodrug).",
"cite": "DPAW slide 51",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-3a-hsd",
"term": "3α-HSD",
"also": [
"3alpha-HSD",
"3α-hydroxysteroid dehydrogenase"
],
"def": "The enzyme on slide 26 that interconverts 5β-dihydrocortisol and urocortisol (inactive); cortisone and urocortisol appear in urine.",
"cite": "DPAW slide 26",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-50s",
"term": "50S subunit",
"also": [
"50S",
"50S ribosomal unit"
],
"def": "The subunit of the bacterial ribosome bound by clindamycin and the macrolides, which prevents translocation. In the Katzung figure macrolides and chloramphenicol bind it.",
"cite": "PCol slide 42; PCol slide 46; PCol slide 47",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-5b-reductase",
"term": "5β-reductase",
"also": [
"5beta-reductase"
],
"def": "The enzyme on slide 26 that converts hydrocortisone to 5β-dihydrocortisol (inactive).",
"cite": "DPAW slide 26",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-halogen-6-9",
"term": "6α-X and 9α-X",
"also": [
"6α-X",
"9α-X",
"9α-halogen",
"6α-halogen",
"9-halogen",
"6α-fluoro",
"9α-fluoro"
],
"def": "Substituents (X) on the α face of C6 and C9 that raise anti-inflammatory activity in slide 20's SAR; slide 24's structures carry fluorine there.",
"cite": "DPAW slide 20; DPAW slide 24",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-7dhc",
"term": "7-dehydrocholesterol",
"also": [
"7-DHC"
],
"def": "The steroid that starts slide 27's vitamin D3 scheme; a reaction in an organ the slide asks you to name turns it into cholecalciferol.",
"cite": "DPAW slide 27",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-70s-ribosome",
"term": "70S ribosome",
"also": [
"ribosome",
"bacterial ribosome",
"ribosomal"
],
"def": "The bacterial ribosome-mRNA complex where protein synthesis takes place. It has a 50S subunit and a 30S subunit, each a target of acne antibiotics.",
"cite": "PCol slide 42; PCol slide 43",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-aa-conj",
"term": "AA-conjugation",
"also": [
"AA-Conjugation",
"amino acid conjugation",
"glycine conjugation",
"glycine conjugate"
],
"def": "The metabolic step slide 43 draws for salicylic acid with a question mark; in lecture the amino acid was glycine.",
"cite": "DPAW slide 43; T@22443 11/04",
"src": "lecture",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-abcde",
"term": "ABCDE mnemonic",
"also": [
"ABCDE"
],
"def": "Diaper dermatitis treatment: Air (diaper-free time), Barrier (skin protectant every change), Cleansing, Diaper (change every 2 hours), Education.",
"cite": "Patel Dermatitis slide 62; Patel Dermatitis slide 63",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-abcde-rule",
"term": "ABCDE rule",
"also": [],
"def": "Skin cancer identifiers: Asymmetry, irregular Border, uneven Color, Diameter (most melanomas over 6 mm, about 1/4 inch) and Evolving (changed over weeks or months).",
"cite": "Patel Sun Exposure slide 28",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-abnormal-keratinization",
"term": "abnormal keratinization",
"also": [
"keratinization",
"alteration in the keratinization process"
],
"def": "In acne, skin cells stick together and are not shed, so the channel is plugged by skin cells and sebum; it turns a normal follicle into a microcomedone.",
"cite": "Pathophys slide 32; Pathophys slide 33; Pathophys slide 34",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-abx",
"term": "Abx",
"also": [],
"def": "Antibiotic, as abbreviated in the acne treatment algorithm key (Top = topical).",
"cite": "Patel Acne slide 20",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "smB-acceptor-site",
"term": "acceptor site",
"also": [],
"def": "The place on the mRNA-ribosome complex where the incoming charged tRNA binds (step 1). Tetracyclines block binding there.",
"cite": "PCol slide 42; PCol slide 43",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-acetonide",
"term": "acetonide",
"also": [
"acetonides"
],
"def": "Cyclic acetals derived from acetone and diols. On slide 24: triamcinolone acetonide and desonide.",
"cite": "DPAW slide 24; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/alcoh.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-acetylenic-retinoid",
"term": "acetylenic retinoid",
"also": [
"acetylenic"
],
"def": "Dr. Smith: The slide's chemical description of tazarotene, the topical retinoid used for psoriasis, mild to moderately severe facial acne and wrinkles. Dr. Sikazwe: Slide 29's class for tazarotene: a retinoid whose structure contains an alkyne (acetylenes are hydrocarbons with one or more carbon-carbon triple bonds, per IUPAC).",
"cite": "PCol slide 18; DPAW slide 29; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/hydro.html",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-acid-salts",
"term": "acid salts and esters",
"also": [
"acid salts",
"acid salt"
],
"def": "The structural modifications of erythromycin on slide 54, made to raise its water and lipid solubilities; the parent drug has poor oral absorption and is unstable at pH 4 or lower.",
"cite": "DPAW slide 54",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-acne-class",
"term": "acne classification",
"also": [
"acne type"
],
"def": "Type 1 mildly clear: rare noninflammatory lesions. Type 2 mild: a few papules and pustules, no nodules. Type 3 moderate: many noninflammatory, one nodule at most. Type 4 severe: many lesions, a few nodules, scarring.",
"cite": "Patel Acne slide 7; Patel Acne slide 8",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-acne-cosmetica",
"term": "acne cosmetica",
"also": [],
"def": "A mild form of acne due to comedogenic oils in cosmetics.",
"cite": "Pathophys slide 35",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-acne-monitor",
"term": "acne efficacy monitoring",
"also": [
"efficacy monitoring"
],
"def": "Patient checks daily, pharmacist every 4 to 8 weeks. Lesion count should fall 10-25% in 4-8 weeks and over 50% in 2-4 months; comedones resolve by 3-4 months.",
"cite": "Patel Acne slide 44",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pA-acne-exclusions",
"term": "acne exclusions for self-treatment",
"also": [
"exclusions for self-treatment of acne"
],
"def": "Severe acne, possible rosacea, exacerbating factors and comedogenic drugs.",
"cite": "Patel Acne slide 18",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-acne-mechanica",
"term": "acne mechanica",
"also": [],
"def": "Acne from anything that occludes the skin or irritates it.",
"cite": "Pathophys slide 35",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-acne-medicamentosa",
"term": "acne medicamentosa",
"also": [
"drug-induced acne",
"acne medica mentosa"
],
"def": "Drug-induced acne; the slide lists phenytoin, isoniazid, phenobarbital, lithium, estrogen, steroids, azathioprine, quinine and rifampin among the causes.",
"cite": "Pathophys slide 35",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-acne-vulgaris",
"term": "acne vulgaris",
"also": [
"acne",
"common acne"
],
"def": "Dr. Smith: A common, self-limiting disease of the pilosebaceous units of the skin, typically located on the face, upper back and chest. Dr. Sikazwe: Common acne: a condition due to changes in pilosebaceous units (slide 40). Slide 41's components: more sebum, excess follicular keratinization, P. acnes growth and inflammation.",
"cite": "Pathophys slide 30; DPAW slide 40; DPAW slide 41",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-acute",
"term": "acute",
"also": [],
"def": "Describes symptoms or signs that begin and worsen quickly; not chronic. Dr. Smith calls sunburn an acute reaction.",
"cite": "Smith Sun Exposure slide 11; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/acute",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-ad-abbr",
"term": "AD",
"also": [],
"def": "Atopic dermatitis: a chronic, pruritic inflammatory skin disease, often called eczema.",
"cite": "Pathophys slide 8",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "pA-adherence",
"term": "adherence",
"also": [],
"def": "Whether the patient uses treatment as directed, such as the frequency of application or oral doses. Poor adherence is a listed reason for no response; improve it with patient education.",
"cite": "Patel Dermatitis slide 50; Patel Acne slide 48",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pB-adhesive-bandage",
"term": "Adhesive bandage",
"also": [
"adhesive bandages"
],
"def": "A bandage with a nonadherent pad in the center. Readily available and cost effective, but many do not give a moist healing environment, and removal may cause bleeding or pain.",
"cite": "Patel Wound slide 8",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-adipose-tissue",
"term": "adipose tissue",
"also": [
"adipose"
],
"def": "Fat tissue, made of adipose (fat) cells; the slide's diagram places it in the hypodermis, under the dermis.",
"cite": "Pathophys slide 5; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "sk-admet",
"term": "ADMET",
"also": [
"ADME"
],
"def": "The slides' heading for a drug's pharmacokinetic properties. ADME stands for absorption, distribution, metabolism, excretion; the slides do not spell out the T.",
"cite": "DPAW slide 3; DPAW slide 7; DPAW slide 8; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "pA-adr",
"term": "ADR",
"also": [
"adverse drug reaction",
"adverse drug reactions"
],
"def": "Adverse drug reaction. The drug-monograph slides list the ADRs of each product, such as skin burning and tingling.",
"cite": "Patel Dermatitis slide 35; Patel Acne slide 33",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "smB-adrenal-cortex",
"term": "adrenal cortex",
"also": [],
"def": "The outer part of the adrenal gland, a small organ on top of each kidney. It makes androgen and corticosteroid hormones.",
"cite": "PCol slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/adrenal-cortex",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pA-aeroallergen",
"term": "aeroallergen",
"also": [
"aeroallergens"
],
"def": "Slide 20 groups house dust mites, pollens, pet dander and molds as aeroallergens, one of the trigger categories for atopic dermatitis.",
"cite": "Patel Dermatitis slide 20",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "immunology"
},
{
"id": "sk-agonist",
"term": "agonist",
"also": [
"agonists"
],
"def": "An endogenous substance or a drug that can interact with a receptor and initiate a response characteristic of that receptor. Slide 48: retinoids are RAR and RXR agonists.",
"cite": "DPAW slide 48; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-aha",
"term": "AHA",
"also": [
"alpha hydroxy acid",
"alpha hydroxy acids"
],
"def": "Alpha hydroxy acid (glycolic, lactic, citric). Exfoliates non-inflammatory lesions; at high concentration used as a chemical peel (not OTC). Needs sunscreen for photosensitivity.",
"cite": "Patel Acne slide 23; Patel Acne slide 28",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "class",
"cs": true
},
{
"id": "sk-alcohol",
"term": "alcohol",
"also": [
"alcohols"
],
"def": "Compounds in which a hydroxy group, -OH, is attached to a saturated carbon atom. Slide 7 labels crisaborole's first metabolite a benzyl alcohol.",
"cite": "DPAW slide 7; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/alcoh.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-adh",
"term": "alcohol dehydrogenase",
"also": [
"alcohol dehydrogenases",
"ADH"
],
"def": "An enzyme family that metabolizes ethanol, retinol and other aliphatic alcohols. Slide 7 draws crisaborole's benzyl alcohol metabolite becoming the benzoic acid in steps marked with question marks.",
"cite": "DPAW slide 7; general: NCI Thesaurus C16272, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C16272?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-aldh",
"term": "aldehyde dehydrogenase",
"also": [
"aldehyde dehydrogenases",
"ALDH"
],
"def": "A family of enzymes that catalyze the oxidation and detoxification of aldehydes. Slide 7 draws crisaborole's benzyl alcohol metabolite becoming the benzoic acid in steps marked with question marks.",
"cite": "DPAW slide 7; general: NCI Thesaurus C118481, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C118481?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-alkene",
"term": "alkene",
"also": [
"alkenes"
],
"def": "Acyclic hydrocarbons with one carbon-carbon double bond (IUPAC); with more than one they are alkadienes and so on. Slide 49 draws tretinoin's chain as a series of alkenes.",
"cite": "DPAW slide 49; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/hydro.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-alkyl",
"term": "alkyl",
"also": [
"alkyl group",
"alkyl groups"
],
"def": "A group derived from an alkane by removal of a hydrogen atom from any carbon atom. Slide 44: the R of hydroxy acids is mostly alkyl.",
"cite": "DPAW slide 44; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/hydro.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-alkyne",
"term": "alkyne",
"also": [
"alkynes"
],
"def": "A hydrocarbon functional group, RC≡CR in IUPAC class notation. Tazarotene's alkyne links its two ring systems on slide 51; slide 29 calls the drug an acetylenic retinoid.",
"cite": "DPAW slide 29; DPAW slide 51; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/hydro.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-atra",
"term": "all-trans retinoic acid",
"also": [
"all-trans"
],
"def": "Tretinoin, the first retinoid for acne (slides 49 and 70).",
"cite": "DPAW slide 49; DPAW slide 70",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-allergen",
"term": "allergen",
"also": [
"allergens"
],
"def": "An allergy-causing substance.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-allergic-contact-eczema",
"term": "allergic contact eczema",
"also": [
"allergic contact dermatitis"
],
"def": "A red, itchy, weepy reaction where the skin has touched a substance the immune system recognizes as foreign, such as poison ivy or certain preservatives.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-allergic-rhinitis",
"term": "allergic rhinitis",
"also": [
"hay fever"
],
"def": "Nose symptoms that occur when you breathe in something you are allergic to, such as dust, animal dander or pollen. When caused by pollen it is commonly called hay fever.",
"cite": "Patel Dermatitis slide 19; Patel Dermatitis slide 26; general: MedlinePlus Medical Encyclopedia, https://medlineplus.gov/ency/article/000813.htm",
"src": "general",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-aloe-vera",
"term": "Aloe vera",
"also": [
"aloe"
],
"def": "Alternative sunburn treatment for intact skin only. Not FDA-approved for burns; avoid internal use; multiple drug interactions and adverse effects.",
"cite": "Patel Sun Exposure slide 32",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-alopecia",
"term": "alopecia",
"also": [],
"def": "The lack or loss of hair from areas of the body where hair is usually found. Listed as a less common side effect of isotretinoin.",
"cite": "PCol slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/alopecia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-alpha-carbon",
"term": "alpha carbon",
"also": [
"alpha-C",
"α-carbon",
"α carbon",
"alpha-carbon"
],
"def": "The carbon next to the -CO2H group (slide 44).",
"cite": "DPAW slide 44",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-aha",
"term": "Alpha hydroxy acids",
"also": [
"AHAs"
],
"def": "Keratolytic photoaging treatment (lactic, glycolic, citric, malic acids): increases dermal thickness and exfoliation, improves collagen and elastic fibers, reduces hyperpigmentation. Adverse events: stinging, burning, itching, skin lightening, dryness.",
"cite": "Patel Sun Exposure slide 45; Patel Sun Exposure slide 54",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "sk-amide",
"term": "amide",
"also": [
"amides",
"amide bond"
],
"def": "Derivatives of oxoacids in which an acidic hydroxy group has been replaced by an amino or substituted amino group, RC(=O)NR2. Methotrexate and folic acid contain one (slide 31).",
"cite": "DPAW slide 31; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/oneN.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-aminoacyl-trna",
"term": "aminoacyl-tRNA",
"also": [
"charged tRNA",
"aminoacyl tRNA",
"tRNA"
],
"def": "The tRNA unit carrying an amino acid. In step 1 it binds the acceptor site on the ribosome; tetracyclines prevent this binding.",
"cite": "PCol slide 42; PCol slide 43",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-aminobenzoates",
"term": "aminobenzoates",
"also": [
"aminobenozoates",
"aminobenzoate"
],
"def": "The organic sunscreen family most effective at absorbing UVB rays; may stain clothing.",
"cite": "Smith Sun Exposure slide 24",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-analog",
"term": "analog",
"also": [
"analogs",
"analogue",
"analogues"
],
"def": "A drug whose structure is related to that of another drug but whose chemical and biological properties may be quite different.",
"cite": "DPAW slide 27; DPAW slide 30; DPAW slide 40; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-anaphylaxis",
"term": "anaphylaxis",
"also": [
"anaphylactic"
],
"def": "A severe and sometimes life-threatening immune system reaction to an antigen a person was previously exposed to; it may include itchy skin, edema, fainting and difficulty breathing (NCI entry: anaphylactic shock).",
"cite": "PCol slide 40; PCol slide 67; PCol slide 72; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/anaphylactic-shock",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-androgen",
"term": "androgen",
"also": [
"androgens",
"androgen levels"
],
"def": "Dr. Smith: A type of hormone that promotes the development and maintenance of male sex characteristics. Increased androgen production triggers acne. Dr. Sikazwe: A type of hormone that promotes the development and maintenance of male sex characteristics. Slide 53: regulating androgen levels prevents excess sebum production.",
"cite": "Pathophys slide 31; Pathophys slide 32; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/androgen; DPAW slide 53; general: NCI Thesaurus C2298, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C2298?include=definitions",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-antagonist",
"term": "antagonist",
"also": [
"antagonists",
"receptor antagonist"
],
"def": "A drug or compound that opposes the physiological effects of another; at the receptor it opposes the responses normally induced by another agent.",
"cite": "DPAW slide 36; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-anthranilates",
"term": "anthranilates",
"also": [
"anthralates",
"anthranilate"
],
"def": "Dr. Smith: An organic sunscreen family used only in combination products to give broad UV coverage; the slide spells it anthralates. Dr. Sikazwe: UVA (315-400 nm) sunscreen class on slide 62; they absorb UVA. The structure drawn is meradimate.",
"cite": "Smith Sun Exposure slide 24; DPAW slide 62",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-anthranyl",
"term": "anthranyl radical",
"also": [
"anthranyl"
],
"def": "The radical formed from anthralin on slide 17; with the superoxide anion it is the cytotoxic radical behind anthralin's antiproliferative action.",
"cite": "DPAW slide 17",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pB-anti-il",
"term": "Anti-IL (interleukin inhibitor) biologics",
"also": [
"anti-ILs",
"anti-IL",
"interleukin inhibitor"
],
"def": "Biologics classed by the interleukin they target: ustekinumab IL-12 and IL-23; tildrakizumab, risankizumab and guselkumab IL-23; secukinumab, ixekizumab and brodalumab IL-17A. Anti-IL safety slide: inflammatory bowel disease, worsening depression.",
"cite": "Patel Scaly slide 42; Patel Scaly slide 43",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-anti-inflammatory",
"term": "anti-inflammatory",
"also": [],
"def": "Having to do with reducing inflammation.",
"cite": "Smith Sun Exposure slide 3; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/anti-inflammatory",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-antiandrogen",
"term": "antiandrogen",
"also": [
"antiandrogens",
"anti-androgen",
"anti-androgenic",
"AAs",
"steroidal AA",
"non-steroidal AA",
"nonsteroidal antiandrogen"
],
"def": "Dr. Smith: A substance that keeps androgens from binding to androgen receptors, blocking their effects. Listed for acne, acting on abnormal sebum. Dr. Sikazwe: A substance that prevents cells from making or using androgens. Slide 53: steroidal (spironolactone) and non-steroidal (flutamide, ketoconazole).",
"cite": "Pathophys slide 36; Pathophys slide 37; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antiandrogen; DPAW slide 53; general: NCI Thesaurus C242, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C242?include=definitions",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-antibiotics",
"term": "antibiotics",
"also": [
"antibiotic"
],
"def": "Drugs used to treat infections caused by bacteria and other microorganisms. Listed for acne, acting on P. acnes proliferation and the inflammatory response.",
"cite": "Pathophys slide 36; Pathophys slide 37; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antibiotic",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-antifungal",
"term": "antifungal",
"also": [],
"def": "A drug that treats infections caused by fungi. Selenium sulfide and zinc pyrithione both have cytostatic and antifungal activity.",
"cite": "PCol slide 57; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antifungal",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-antifungal-shampoo",
"term": "Antifungal shampoo for seborrheic dermatitis",
"also": [
"antifungal shampoo"
],
"def": "Used to decrease fungal growth: ketoconazole shampoo is first line; selenium sulfide, pyrithione zinc, ciclopirox or coal tar shampoo is second line. Leave on 3 to 5 minutes, then rinse.",
"cite": "Patel Scaly slide 16",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-antigen",
"term": "antigen",
"also": [
"antigens",
"antigenic"
],
"def": "Any substance that causes the body to make an immune response against that substance. In psoriasis, T cells are stimulated by antigen presented by APCs.",
"cite": "Pathophys slide 21; Pathophys slide 33; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antigen",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "pC-antihistamine",
"term": "Antihistamine",
"also": [
"antihistamines",
"oral antihistamine",
"oral antihistamines",
"topical antihistamine",
"topical antihistamines"
],
"def": "An oral antihistamine reduces itching in plant dermatitis. Topical antihistamines (diphenhydramine 0.5 to 2%) are for insect bites and are avoided in plant dermatitis, chicken pox, sunburn and broken, oozing skin.",
"cite": "Patel Outdoor slide 12; Patel Outdoor slide 14",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "sk-antimetabolite",
"term": "antimetabolite",
"also": [
"antimetabolites"
],
"def": "Slide 12: enzyme substrate mimetic molecules which inhibit cellular metabolism. Slide 30 labels methotrexate an antimetabolite, an analog of DHFR's substrate folic acid.",
"cite": "DPAW slide 12; DPAW slide 30",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-antimitotic",
"term": "antimitotic",
"also": [
"antimitotic action"
],
"def": "Inhibiting cell division. Coal tar cross-links with DNA to inhibit cell division, which the slide calls antimitotic action.",
"cite": "PCol slide 53",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-antiproliferative",
"term": "antiproliferative",
"also": [
"anti-proliferative",
"antiproliferatives",
"antiproliferative activity"
],
"def": "Dr. Smith: One of the effects induced by the phototoxic reactions of psoralens with UVA, listed with immunosuppressive and anti-inflammatory effects. The slide also lists normalizing the number and arrangement of keratinocytes. Dr. Sikazwe: Acting against cell proliferation. The slides use it for tars (possibly), anthralin, psoralens, vitamin D analogs, methotrexate and retinoids.",
"cite": "Smith Sun Exposure slide 3; DPAW slide 16; DPAW slide 17; DPAW slide 18; DPAW slide 27; DPAW slide 30; DPAW slide 48",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-antipruritic",
"term": "antipruritic",
"also": [],
"def": "Acting against pruritus. The phenolic constituents of coal tar have antipruritic properties.",
"cite": "PCol slide 53",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "dz-antivenin",
"term": "Antivenin (antivenom)",
"also": [],
"def": "A product given to counter venom; for severe pit viper bites and severe black widow bites on her slides.",
"cite": "Patel Outdoor slides 53, 57",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-ap1",
"term": "AP-1",
"also": [
"AP1",
"activator protein 1"
],
"def": "Activator protein 1, one of the two example transcription factors (with NF-kB) that work with nuclear receptors.",
"cite": "PCol slide 7; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-apc",
"term": "APC",
"also": [
"APCs",
"antigen-presenting cell",
"antigen-presenting cells"
],
"def": "Antigen-presenting cell: an immune cell that boosts immune responses by showing antigens on its surface to other immune cells. In psoriasis APCs present antigen to skin T cells.",
"cite": "Pathophys slide 21; Pathophys slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antigen-presenting-cell",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-apoptosis",
"term": "apoptosis",
"also": [],
"def": "A type of cell death in which a series of molecular steps in a cell leads to its death; also called programmed cell death. Retinoids that target RXRs mainly induce it.",
"cite": "PCol slide 14; PCol slide 70; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/apoptosis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-areolar-tissue",
"term": "areolar tissue",
"also": [],
"def": "A tissue labeled in the hypodermis of the slide's skin diagram, together with adipose tissue.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smB-aromatic-retinoid",
"term": "aromatic retinoid",
"also": [],
"def": "The slide's chemical description of etretinate; acitretin is a metabolite of this aromatic retinoid.",
"cite": "PCol slide 20",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-aromatic",
"term": "aromatic ring",
"also": [
"aromatic",
"aromatic rings",
"aromatics"
],
"def": "In the retinoid slides, the benzene-type rings counted to name the generations: none (non-aromatic), one (mono-aromatic), more than one (poly-aromatic). Slide 31: methotrexate's pteridine ring should remain aromatic.",
"cite": "DPAW slide 31; DPAW slide 49; DPAW slide 50; DPAW slide 51",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-arthralgia",
"term": "arthralgia",
"also": [],
"def": "Joint pain. Listed among the most common side effects of risankizumab.",
"cite": "PCol slide 69; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/arthralgia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pC-wet-dressing",
"term": "Astringent",
"also": [
"astringents",
"wet dressing",
"wet dressings"
],
"def": "Reduces inflammation by vasoconstriction, cools and dries skin by evaporation, retards oozing and weeping. Aluminum sulfate/calcium acetate is used as a soak or wet dressing to reduce weeping and itch.",
"cite": "Patel Outdoor slide 13; Patel Outdoor slide 15",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-atopic-conditions",
"term": "atopic conditions",
"also": [
"atopic condition",
"atopic parent",
"atopic parents"
],
"def": "Asthma and rhinitis, as the slide names them. Atopic dermatitis shows an inheritance pattern and an association with these conditions.",
"cite": "Pathophys slide 10",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-atopic-dermatitis",
"term": "atopic dermatitis",
"also": [],
"def": "A chronic, pruritic inflammatory skin disease and the most common kind of dermatitis; often called eczema. Pruritus is its primary symptom.",
"cite": "Pathophys slide 8; Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-atopic-march",
"term": "atopic march",
"also": [],
"def": "The typical progression of allergic diseases that often begin early in life: allergic rhinitis, asthma, atopic dermatitis and food allergies.",
"cite": "Patel Dermatitis slide 19",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pA-atopic-triad",
"term": "atopic triad",
"also": [],
"def": "Allergic rhinitis (hay fever), asthma and atopic dermatitis; a personal or family history of these is a risk factor for atopic dermatitis.",
"cite": "Patel Dermatitis slide 19",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-atra",
"term": "ATRA",
"also": [
"all-trans retinoic acid"
],
"def": "All-trans retinoic acid, another name for tretinoin, the acid form of vitamin A.",
"cite": "PCol slide 17",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-auspitz-sign",
"term": "Auspitz sign",
"also": [
"Ausptiz sign",
"Auspitz"
],
"def": "Pinpoint bleeding from the salmon-pink lesion underneath the scales of plaque psoriasis.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "dz-autoinoc",
"term": "Auto-inoculation",
"also": [],
"def": "Spread of the virus from one site to another on the same person.",
"cite": "plain meaning, not from the slides",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-autoantibody",
"term": "autoantibody",
"also": [
"autoantibodies"
],
"def": "An antibody made against substances formed by a person's own body. Psoriatic arthritis lacks the autoantibodies seen in rheumatoid arthritis.",
"cite": "Pathophys slide 26; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/autoantibody",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-autoimmune-disease",
"term": "autoimmune disease",
"also": [
"autoimmune diseases"
],
"def": "A condition in which the immune system mistakes the body's own healthy tissues as foreign and attacks them. The slide lists autoimmune diseases as a therapeutic use of corticosteroids.",
"cite": "PCol slide 9; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/autoimmune-disease",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-autoimmune",
"term": "autoimmune response",
"also": [
"autoimmune"
],
"def": "An immune response directed against the body's own tissues, which it recognizes as foreign. Slide 13 lists it as a major component of psoriasis.",
"cite": "DPAW slide 13; general: NCI Thesaurus C2889, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C2889?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-autoxidation",
"term": "autoxidation",
"also": [
"autoxidizes",
"autoxidize",
"autoxidized",
"auto-oxidation"
],
"def": "Slide 17's note on anthralin: it autoxidizes to radicals, ROS and inactive compounds (drawn ending in carbon black), and can stain fabrics permanently.",
"cite": "DPAW slide 17",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-avascular-necrosis",
"term": "avascular bone necrosis",
"also": [
"avascular necrosis"
],
"def": "A condition in which loss of blood flow to bone tissue causes the bone to die; long-term steroid use is one cause. Listed as an oral corticosteroid adverse effect.",
"cite": "PCol slide 13; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/avascular-necrosis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-bactericidal",
"term": "bactericidal",
"also": [
"bactericidal properties"
],
"def": "Destroys bacteria. Slide 22 pairs it with preventing infection by inhibiting growth or action of microorganisms; benzoyl peroxide has it.",
"cite": "Patel Acne slide 22; Patel Acne slide 23",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smB-bacteriostatic",
"term": "bacteriostatic",
"also": [],
"def": "Preventing the growth of bacteria, as opposed to bactericidal agents, which kill bacteria. Sulfur, the tetracyclines, clindamycin and the macrolides are described as bacteriostatic.",
"cite": "PCol slide 38; PCol slide 43; PCol slide 46; PCol slide 47; general: PMC (J Antimicrob Chemother), Bactericidal versus bacteriostatic antibacterials, https://pmc.ncbi.nlm.nih.gov/articles/PMC11695898/",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-barrier-cream",
"term": "barrier cream",
"also": [
"barrier creams"
],
"def": "Slide 57: applied to dry skin after cleaning at diaper changes to help prevent diaper rash in infants. Slide 59 lists barrier cream application in adult incontinence-associated dermatitis prevention.",
"cite": "Patel Dermatitis slide 57; Patel Dermatitis slide 59",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "pA-bbw",
"term": "BBW",
"also": [],
"def": "Black box warning, the abbreviation on the isotretinoin and calcineurin inhibitor slides. Isotretinoin: birth defects. Calcineurin inhibitors: rare lymphoma and skin malignancy.",
"cite": "Patel Dermatitis slide 38; Patel Dermatitis slide 40; Patel Acne slide 37",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "sk-benzimidazole",
"term": "benzimidazoles",
"also": [
"benzimidazole"
],
"def": "UVB (280-315 nm) sunscreen class of ensulizole (slide 64).",
"cite": "DPAW slide 64",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-benzoic-acid",
"term": "benzoic acid",
"also": [],
"def": "What benzoyl peroxide is metabolized to after it penetrates the stratum corneum or follicular openings.",
"cite": "PCol slide 36",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-benzophenones",
"term": "benzophenones",
"also": [
"benzophenone"
],
"def": "Dr. Smith: An organic sunscreen family with poor substantivity that can cause sensitization. Dr. Sikazwe: UVB/UVA sunscreen class that absorbs full UVB and considerable UVA: oxybenzone (benzophenone-3), sulisobenzone (benzophenone-4), dioxybenzone (benzophenone-8) (slide 65).",
"cite": "Smith Sun Exposure slide 24; DPAW slide 65",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-benzoxaborole",
"term": "benzoxaborole",
"also": [
"benzoxaboroles"
],
"def": "The chemical class slide 7 gives for crisaborole; its ring holds a boron atom (B-OH), drawn in green.",
"cite": "DPAW slide 7",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-bha",
"term": "BHA",
"also": [
"beta-hydroxy acid",
"beta hydroxy acid"
],
"def": "Beta-hydroxy acid; the slide's example is salicylic acid. Limited efficacy data; drying and photosensitizing. Slide 29: maximum effectiveness and duration of use 4 to 6 weeks.",
"cite": "Patel Acne slide 23; Patel Acne slide 29",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "class",
"cs": true
},
{
"id": "sk-diacid",
"term": "bi-carboxylic acid",
"also": [
"dicarboxylic acid",
"diacid",
"C9 bi-carboxylic acid",
"C9 dicarboxylic acid"
],
"def": "An acid with two COOH groups. Slide 54: azelaic acid is a C9 bi-carboxylic acid, drawn with a COOH at each end of the chain.",
"cite": "DPAW slide 54",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-bioavailability",
"term": "bioavailability",
"also": [
"bioavailable",
"PO bioavailability"
],
"def": "Dr. Smith: The ability of a drug or other substance to be absorbed and used by the body. Neoral has increased bioavailability compared with Sandimmune. Dr. Sikazwe: The rate and extent to which a drug is absorbed or is otherwise available to the treatment site in the body.",
"cite": "PCol slide 29; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/bioavailable; DPAW slide 26; DPAW slide 33; DPAW slide 37; general: NCI Thesaurus C70913, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C70913?include=definitions",
"src": "general",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-bioequivalent",
"term": "bioequivalent",
"also": [
"bioequivalence",
"not bioequivalent"
],
"def": "Two products that can be used interchangeably. Neoral is not bioequivalent to oral Sandimmune because Neoral has increased bioavailability.",
"cite": "PCol slide 29",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-biologic-response-modifiers",
"term": "biologic response modifiers",
"also": [
"biologic response modifier",
"biological response modifier",
"biologics",
"biologic"
],
"def": "Treatments that use substances made from living organisms; some stimulate or suppress the immune system. In psoriasis they modulate the abnormal immune response.",
"cite": "Pathophys slide 27; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/biological-response-modifier-therapy",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-biological",
"term": "biologicals",
"also": [
"biological"
],
"def": "Slide 14's second group of systemic psoriasis agents, the MAbs; slide 37 lists them with their shared ADME.",
"cite": "DPAW slide 14; DPAW slide 37",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-black-box-warning",
"term": "black box warning",
"also": [
"black box warnings",
"boxed warning"
],
"def": "The slides' heading for serious risks: lymphoma, other malignancies and serious infections for oral calcineurin inhibitors, TNF-alpha inhibitors and tofacitinib.",
"cite": "PCol slide 30; PCol slide 70; PCol slide 76",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "pC-black-widow",
"term": "Black widow spider bite",
"also": [
"black widow",
"Latrodectus mactans"
],
"def": "Venomous Texas spider bite: abdominal pain that feels like appendicitis, muscle pain, salivation alternating with dry mouth, diaphragm paralysis, seizures, sweating. Severe bites get equine antivenom.",
"cite": "Patel Outdoor slide 52; Patel Outdoor slide 53",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pA-blackhead",
"term": "blackhead",
"also": [
"blackheads"
],
"def": "An open comedo, a non-inflammatory acne lesion.",
"cite": "Patel Acne slide 5; Patel Acne slide 6",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pA-bleach-bath",
"term": "bleach bath",
"also": [
"bleach baths"
],
"def": "A bath with 0.005% sodium hypochlorite (1/2 cup of bleach in a full tub), twice a week, to prevent recurrent bacterial skin infections in moderate to severe disease. It can cause irritation.",
"cite": "Patel Dermatitis slide 31",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-body-lice",
"term": "Body lice",
"also": [
"Pediculus humanus corporis",
"body louse"
],
"def": "Lice that live in the seams of clothing and can transmit infections such as typhus and trench fever.",
"cite": "Patel Outdoor slide 42",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-bsa",
"term": "Body surface area (BSA)",
"also": [
"BSA",
"body surface area"
],
"def": "Percentage of the body involved. Psoriasis severity is rated by % BSA (mild under 5%, moderate over 8%, severe over 10%); burn severity also uses % BSA.",
"cite": "Patel Scaly slide 31; Patel Wound slide 16",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pA-bp",
"term": "BP",
"also": [],
"def": "Benzoyl peroxide, as abbreviated in the acne treatment algorithm key (not blood pressure there).",
"cite": "Patel Acne slide 20",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "smA-broad-spectrum",
"term": "broad spectrum",
"also": [
"broad-spectrum"
],
"def": "Dr. Smith: A label allowed for sunscreen products with a critical wavelength of 370 nm or greater, which shows UVA protection. Dr. Sikazwe: Slide 61 uses it for sunblocks that cover both UVA and UVB. Slide 55 also calls tetracycline broad spectrum, an antibiotic term the slide does not define.",
"cite": "Smith Sun Exposure slide 14; DPAW slide 55; DPAW slide 61",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "counseling"
},
{
"id": "pC-brown-recluse",
"term": "Brown recluse spider bite",
"also": [
"brown recluse",
"Loxosceles reclusa"
],
"def": "Venomous Texas spider bite: fever, blood in urine, rash and joint pain within 48 hours, plus tissue necrosis that may need surgery.",
"cite": "Patel Outdoor slide 52",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-bubonic-plague",
"term": "Bubonic plague",
"also": [
"Yersinia pestis"
],
"def": "Flea-borne infection (Yersinia pestis) in the southwestern US; flea carriers are rodents, cats and dogs. Treated with streptomycin, ciprofloxacin, levofloxacin, moxifloxacin, doxycycline or aminoglycosides.",
"cite": "Patel Outdoor slide 27",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "dz-bullae",
"term": "Bullae",
"also": [],
"def": "Large blisters; a vesicle is a small one.",
"cite": "plain meaning, not from the slides",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-c1c2",
"term": "C1-C2 db",
"also": [
"C1–C2 db",
"C1- C2 db",
"C1-C2 alkene",
"C1–C2 alkene"
],
"def": "Slide 20's first item in the SAR list that raises anti-inflammatory activity: the db at C1-C2 (an alkene in ring A, drawn in pink), with 6α-X, 9α-X and 11β-OH.",
"cite": "DPAW slide 20",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-calcineurin",
"term": "calcineurin",
"also": [],
"def": "The T-cell enzyme in the Golan figure. Active calcineurin, with Ca2+ and calmodulin, converts inactive NFAT (carrying a phosphate) to active NFAT, which leads to IL-2 gene transcription.",
"cite": "PCol slide 26",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-calcineurin-inhibitors",
"term": "calcineurin inhibitors",
"also": [
"calcineurin inhibitor",
"calcineurin",
"calcineurin inhibitors",
"calcineurin phosphatase"
],
"def": "Dr. Smith: Immunosuppressants that inhibit normal calcineurin activity, which blocks production of the IL-2 needed for T-cell proliferation. Used for atopic dermatitis and psoriasis. Dr. Smith: A drug class on Dr. Smith's lists of medications for atopic dermatitis and for psoriasis. Dr. Sikazwe: A drug that inhibits calcineurin, a protein phosphatase. The slides give the result as less release of inflammatory cytokines and blocked T-cell signaling: pimecrolimus, tacrolimus, cyclosporin.",
"cite": "PCol slide 24; PCol slide 26; Pathophys slide 17; Pathophys slide 28; DPAW slide 28; DPAW slide 33; general: NCI Thesaurus C17275, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C17275?include=definitions",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pB-callus",
"term": "Callus",
"also": [
"calluses"
],
"def": "A raised, yellowish thickening of skin with a broad base and diffuse borders, on weight-bearing areas of the foot. Caused by friction, barefoot walking or structural foot problems.",
"cite": "Patel Warts slide 5; Patel Warts slide 13",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-calmodulin",
"term": "calmodulin",
"also": [],
"def": "Drawn with calcium (Ca2+) on active calcineurin in the Golan figure of the calcineurin pathway.",
"cite": "PCol slide 26",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-camp",
"term": "cAMP",
"also": [
"cyclic AMP"
],
"def": "Dr. Smith: The second messenger that phosphodiesterases hydrolyze. When cellular cAMP is increased there is relaxation of smooth muscle and inhibition of inflammatory cells. Dr. Sikazwe: Cyclic AMP, a second messenger molecule synthesized from ATP by the enzyme adenylate cyclase. On slides 7 and 34, PDE4 inhibition raises it.",
"cite": "PCol slide 32; DPAW slide 7; DPAW slide 34; general: NCI Thesaurus C208, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C208?include=definitions",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-candida",
"term": "Candida albicans",
"also": [],
"def": "The fungus named on slide 67 as a cause of the infections that are the most common complication of diaper dermatitis.",
"cite": "Patel Dermatitis slide 67",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-carboxylesterase",
"term": "carboxylesterase",
"also": [
"carboxylesterases"
],
"def": "A family of enzymes that hydrolyze carboxylic esters. On slides 50 and 51 the ethyl esters etretinate and tazarotene become the free acids acitretin and tazarotenic acid.",
"cite": "DPAW slide 50; DPAW slide 51; general: NCI Thesaurus C112051, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C112051?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-carboxylic",
"term": "carboxylic acid",
"also": [
"COOH",
"-COOH",
"CO2H",
"carboxyl group",
"carboxylic acids",
"COOH group"
],
"def": "Compounds having the structure RC(=O)OH. Slide 44: hydroxy acids need COOH group(s).",
"cite": "DPAW slide 44; DPAW slide 54; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/carba.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-carcinogen",
"term": "carcinogen",
"also": [
"carcinogenic"
],
"def": "Any substance that causes cancer. Coal tar is listed as carcinogenic and a possible carcinogen.",
"cite": "PCol slide 54; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/carcinogen",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-carcinogenesis",
"term": "carcinogenesis",
"also": [],
"def": "The process by which normal cells are transformed into cancer cells. Topical calcineurin inhibitors have a potential for local skin carcinogenesis, so sun protection is recommended.",
"cite": "PCol slide 28; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/carcinogenesis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-cataract",
"term": "cataract",
"also": [
"cataracts"
],
"def": "A condition in which the lens of the eye becomes cloudy. A side effect of psoralens.",
"cite": "Smith Sun Exposure slide 4; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cataract",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-cbc",
"term": "CBC",
"also": [
"complete blood count"
],
"def": "Complete blood count, a lab monitored during isotretinoin treatment and, with reticulocyte counts, during dapsone.",
"cite": "Patel Acne slide 31; Patel Acne slide 37",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "measure",
"cs": true
},
{
"id": "sk-cbda",
"term": "CBDA",
"also": [
"chemical basis of drug action",
"chemical and pharmacological basis of drug action"
],
"def": "Chemical and pharmacological basis of drug action: the slide heading for how a drug acts chemically at its target (for example hydrogen bonding, thiolysis, free radicals).",
"cite": "DPAW slide 3; DPAW slide 7; DPAW slide 17; DPAW slide 23; DPAW slide 46; DPAW slide 47",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-cbg",
"term": "CBG",
"also": [
"corticosteroid-binding globulin"
],
"def": "Corticosteroid-binding globulin (transcortin), the main cortisol-binding protein. In the Katzung figure the steroid (S) is bound to CBG outside the cell and leaves it before entering the cell.",
"cite": "PCol slide 10; general: PubMed, Corticosteroid-Binding Globulin: A Review of Basic and Clinical Advances, https://pubmed.ncbi.nlm.nih.gov/27214312/",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "pA-cc",
"term": "CC",
"also": [
"chief complaint"
],
"def": "Chief complaint: the patient's main reason for coming, the first line of the case.",
"cite": "Patel Dermatitis slide 26; Patel Acne slide 12",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "smB-cd25",
"term": "CD25",
"also": [
"IL-2 receptor"
],
"def": "The IL-2 receptor on the T cell. IL-2 binding to CD25 is signal 3 and starts T-cell proliferation.",
"cite": "PCol slide 25",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-cd28",
"term": "CD28",
"also": [
"CD 28"
],
"def": "The molecule on the T cell that binds CD80/86 on the antigen-presenting cell to receive signal 2 (the co-signal).",
"cite": "PCol slide 25; PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-cd4-t-cell",
"term": "CD4+ T cell",
"also": [
"CD4+ T-cell",
"CD4 T cells",
"CD4 T cell",
"CD4+ T cells"
],
"def": "The T cell in the three-signal figure: an antigen-presenting cell activates it, it makes IL-2 and it proliferates. Ustekinumab's target receptor is on CD4 T cells and NK cells.",
"cite": "PCol slide 25; PCol slide 67",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-cd80-86",
"term": "CD80/86",
"also": [
"CD80/CD86",
"CD 80/86",
"CD80",
"CD86"
],
"def": "Molecules on the antigen-presenting cell that bind CD28 on the T cell to give signal 2. Abatacept binds CD80/CD86, so CD28 cannot bind.",
"cite": "PCol slide 25; PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "pA-ceramide",
"term": "ceramide-containing moisturizer",
"also": [
"ceramide",
"ceramides",
"ceramide-containing"
],
"def": "A cream type that provides barrier support. Slide 32 examples: CeraVe (glycerin, ceramides, hyaluronic acid) and Aveeno eczema therapy (oatmeal, ceramides).",
"cite": "Patel Dermatitis slide 32",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "sk-chelation",
"term": "chelation",
"also": [
"chelate",
"chelates",
"chelating",
"chealation"
],
"def": "Forming bonds between a metal atom and another compound. Slide 55: tetracycline chelates Al3+, Ca2+, Mg2+, Fe3+, zinc and Bi3+.",
"cite": "DPAW slide 55; general: NCI Thesaurus C40483, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C40483?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-peel",
"term": "chemical peel",
"also": [
"chemical peels",
"keratolytic chemical peels"
],
"def": "Dr. Patel: High-concentration alpha hydroxy acid used to reduce acne scarring; not OTC. Glycolic acid is first applied as a trial for sensitivity; wait 2 to 4 weeks between peels. Dr. Patel: A keratolytic treatment classed by depth of tissue injury as superficial, medium or deep; examples are glycolic acid, salicylic acid, TCA and the Baker-Gordon phenol peel.",
"cite": "Patel Acne slide 28; Patel Sun Exposure slide 46",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-chemical-sunscreen",
"term": "Chemical sunscreen",
"also": [
"chemical sunscreens",
"organic sunscreen ingredient"
],
"def": "Absorbs UVR and so blocks its transmission to the epidermis. Examples: padimate O, meradimate, benzophenones, octinoxate, octocrylene, avobenzone, ecamsule.",
"cite": "Patel Sun Exposure slide 16",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-chemokine",
"term": "chemokine",
"also": [
"chemokines"
],
"def": "A type of cytokine that stimulates the movement of certain white blood cells and attracts them to areas of inflammation.",
"cite": "Pathophys slide 21; Pathophys slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/chemokine",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-chimeric",
"term": "chimeric antibody",
"also": [
"chimeric"
],
"def": "An antibody combining portions of mouse and human IgG1. Infliximab is the example; antibodies against it develop in 14% to 40% of patients.",
"cite": "PCol slide 72",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-cholecalciferol",
"term": "cholecalciferol",
"also": [
"vitamin D3",
"Vit. D3",
"Vit D3"
],
"def": "Vitamin D3, the second structure in slide 27's scheme, formed from 7-dehydrocholesterol.",
"cite": "DPAW slide 27",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-chromophore",
"term": "chromophore",
"also": [
"chromophores"
],
"def": "Slide 62: the organic chemical sunscreens are chromophores which absorb UVA/B and convert it into harmless heat.",
"cite": "DPAW slide 62",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-chronic",
"term": "chronic",
"also": [
"chronic disease"
],
"def": "Lasting a long time: a chronic disease usually lasts 3 months or longer and can usually be controlled but not cured.",
"cite": "Pathophys slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/chronic-disease",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "pB-chronic-wound",
"term": "Chronic wound",
"also": [],
"def": "A wound excluded from self-treatment. Care starts conservatively as for acute wounds, then adds pressure relief or compression, nutrition, infection control and debridement.",
"cite": "Patel Wound slide 7; Patel Wound slide 26",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-chronologic-aging",
"term": "Chronologic aging",
"also": [
"chronological aging"
],
"def": "Normal aging, compared with photoaging on her slide: thin skin, fine wrinkles, xerosis, laxity, seborrheic keratoses and senile angiomas.",
"cite": "Patel Sun Exposure slide 40",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-chrysarobin",
"term": "chrysarobin",
"also": [],
"def": "A substance derived from the bark of the Brazilian araroba tree; anthralin is a synthetic version of it.",
"cite": "PCol slide 55",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-cinnamates",
"term": "cinnamates",
"also": [
"cinnamate"
],
"def": "Dr. Smith: An organic sunscreen family that does not adhere to skin well and depends on the vehicle for substantivity. Dr. Sikazwe: Sunscreen class. Slide 63 (UVB, 280-315 nm): octinoxate and cinoxate. Slide 65 (UVB/UVA): octocrylene, which absorbs full UVB plus UVA.",
"cite": "Smith Sun Exposure slide 24; DPAW slide 63; DPAW slide 65",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-closed-comedone",
"term": "closed comedone",
"also": [
"closed comedones"
],
"def": "The acne lesion that follows the microcomedone when sebum production increases; it can become an open comedone or go on to a papule.",
"cite": "Pathophys slide 34",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pC-coagulation-profile",
"term": "Coagulation profile",
"also": [
"coagulation abnormalities",
"abnormal coagulation"
],
"def": "Clotting tests named on the snakebite slides: INR, aPTT, fibrinogen and platelet count. No abnormality is minimal; abnormal with bleeding, or platelets under 20,000/µL, is severe.",
"cite": "Patel Outdoor slide 58; Patel Outdoor slide 56",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "sk-coal-tar",
"term": "coal tar",
"also": [
"refined coal tar"
],
"def": "Slide 16: a mixture of phenols, PAHs and heterocyclic compounds; may be used with UVB (280-320 nm); it is photosensitizing.",
"cite": "DPAW slide 16",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pA-coc",
"term": "COC",
"also": [
"COCs",
"combined oral contraceptive",
"combined oral contraceptives",
"combination oral contraceptives"
],
"def": "Combined oral contraceptive. FDA-approved for acne: ethinyl estradiol with norgestimate, norethindrone acetate or drospirenone (with or without levomefolate). Over 14 years or 2 years past menarche; non-smoker under 35.",
"cite": "Patel Acne slide 34",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "class",
"cs": true
},
{
"id": "smB-collagen",
"term": "collagen",
"also": [
"dermal collagen",
"collagen production"
],
"def": "Dr. Smith: A structural protein that makes up the bulk of the dermis; it is produced by fibroblasts. Prolonged retinoid use promotes dermal collagen synthesis. Dr. Sikazwe: A family of large fibrous proteins that are the main components of connective tissue. AHAs (slide 68) and topical retinoids (slide 70) stimulate its production.",
"cite": "PCol slide 15; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology; DPAW slide 68; DPAW slide 70; general: NCI Thesaurus C16447, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C16447?include=definitions",
"src": "general",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pB-collodion",
"term": "Collodion-like vehicle",
"also": [
"collodion"
],
"def": "Vehicle of 17% salicylic acid for corns and calluses. Drops dry and harden so the solution does not run; cap tightly to prevent evaporation, which would raise the concentration.",
"cite": "Patel Warts slide 17",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "chemistry"
},
{
"id": "pC-colloidal-oatmeal-bath",
"term": "Colloidal oatmeal bath",
"also": [
"colloidal oatmeal",
"oatmeal bath"
],
"def": "A soak that reduces itching: sprinkle a cup into a fast-running bath, soak 15 to 20 minutes twice daily, and pat the skin dry. The tub becomes very slippery.",
"cite": "Patel Outdoor slide 14",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pA-combo-tx",
"term": "combination therapy",
"also": [
"topical combination",
"combination treatment"
],
"def": "Using agents that affect different aspects of acne pathogenesis together, recommended for most patients (slide 25), combining the smallest number of agents at the lowest possible dosages (slide 47).",
"cite": "Patel Acne slide 25; Patel Acne slide 47",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pA-comedogenic",
"term": "comedogenic drugs",
"also": [
"comedogenic",
"acne-causing drugs"
],
"def": "Medications that can cause acne (slide 10): hormones (corticosteroids, androgens, progesterone contraceptives), TCAs, lithium, antiepileptics, vitamins B1, B6, B12, cyclosporine, isoniazid, rifampin and halogens. Slide 18: an exclusion for self-treatment.",
"cite": "Patel Acne slide 10; Patel Acne slide 18",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smB-comedolytic",
"term": "comedolytic",
"also": [],
"def": "An effect on comedones. Benzoyl peroxide has peeling and comedolytic effects: it loosens keratinocytes, increases their turnover and prevents closure of follicles.",
"cite": "PCol slide 36",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-comedone",
"term": "comedone",
"also": [
"comedones",
"comedo"
],
"def": "The plugged-follicle lesion of acne; the cascade runs microcomedone, closed comedone, then open comedone or papule.",
"cite": "Pathophys slide 33; Pathophys slide 34",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pB-common-wart",
"term": "Common wart (verruca vulgaris)",
"also": [
"verruca vulgaris",
"common warts"
],
"def": "On the hands; skin-colored or brown, dome-shaped, hyperkeratotic papules with a rough surface; seen in children and adolescents. Self-treatable.",
"cite": "Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smA-comorbidity",
"term": "comorbidity",
"also": [
"comorbidities"
],
"def": "The condition of having two or more diseases at the same time. In psoriasis, comorbidities are a consequence of chronic inflammation.",
"cite": "Pathophys slide 21; Pathophys slide 27; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/comorbidity",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "dz-compartment-syndrome",
"term": "Compartment syndrome",
"also": [],
"def": "Pressure that builds inside a swollen limb and cuts off its blood supply; her slide says to call surgery.",
"cite": "Patel Outdoor slide 57; definition is plain meaning",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-competitive-antagonist",
"term": "competitive antagonist",
"also": [
"competitive antagonists"
],
"def": "A drug that competes with a natural substance. Sulfonamides and dapsone compete with PABA and prevent bacteria from using it to synthesize folic acid.",
"cite": "PCol slide 50; PCol slide 48",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-competitive",
"term": "competitive inhibition",
"also": [
"competitively inhibits",
"competitive inhibitor",
"competitively"
],
"def": "How slide 30 says methotrexate blocks DHFR: as an analog of the enzyme's substrate, folic acid.",
"cite": "DPAW slide 30",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-conjunctivitis",
"term": "conjunctivitis",
"also": [],
"def": "Inflammation or infection of the conjunctiva, the membranes lining the eyelids and covering the white of the eye; also called pinkeye. Anthralin in the eye causes severe conjunctivitis.",
"cite": "PCol slide 56; PCol slide 64; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/conjunctivitis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-constitutional",
"term": "constitutional symptoms",
"also": [],
"def": "Whole-body signs listed as an exclusion for self-care: fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, or rash on other parts of the body.",
"cite": "Patel Dermatitis slide 68",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-contact-eczema",
"term": "contact eczema",
"also": [
"contact dermatitis"
],
"def": "A localized reaction with redness, itching and burning where the skin has come into contact with an allergen or with an irritant such as an acid or cleaning agent.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-contraindication",
"term": "contraindication",
"also": [
"contraindications",
"contraindicated"
],
"def": "A symptom or medical condition that makes a particular treatment or procedure inadvisable because a person is likely to have a bad reaction.",
"cite": "DPAW slide 3; general: NCI Thesaurus C50646, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C50646?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-cool-water",
"term": "Cool running water first aid",
"also": [
"cool water"
],
"def": "Non-drug care for a minor burn: cool water reduces the burning sensation and decreases morbidity. Honey and aloe vera are also listed.",
"cite": "Patel Wound slide 18",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pA-tap-compress",
"term": "cool tap water compress",
"also": [
"cool tap water compresses",
"tap water compress"
],
"def": "Compress used to dry weeping lesions: cool tap water for 5 to 20 minutes, 4 to 6 times a day. Not used with topical calcineurin inhibitors.",
"cite": "Patel Dermatitis slide 51",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-coral-snake",
"term": "Coral snake",
"also": [
"Elapidae",
"Micrurus",
"Texas coral snake"
],
"def": "Elapidae snake (Micrurus). About 60% of bites are dry; fang marks are hard to find. No antivenin is given; care is supportive only.",
"cite": "Patel Outdoor slide 54; Patel Outdoor slide 57",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-corn",
"term": "Corn",
"also": [
"corns",
"clavus"
],
"def": "A small, raised, sharply demarcated, hyperkeratotic, painful lesion with a central core, over bony prominences of the foot; caused by pressure from underlying bony prominences or joints.",
"cite": "Patel Warts slide 5; Patel Warts slide 13",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-corticosteroids",
"term": "corticosteroids",
"also": [
"corticosteroid",
"topical corticosteroids"
],
"def": "Dr. Smith: Endogenous corticosteroids are made by the adrenal cortex in two types, glucocorticoids and mineralocorticoids, and have many physiological effects; they are also given as drugs for many therapeutic purposes. Dr. Smith: Steroid hormones made in the adrenal cortex or in the laboratory; used to suppress the immune system. Listed for atopic dermatitis and psoriasis.",
"cite": "PCol slide 8; PCol slide 9; Pathophys slide 17; Pathophys slide 28; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/corticosteroid",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-costimulation",
"term": "costimulation",
"also": [
"inhibitor of costimulation",
"co-stimulation"
],
"def": "The second signal needed for T-cell activation (CD80/86 binding CD28). Abatacept is the inhibitor of costimulation.",
"cite": "PCol slide 63; PCol slide 25",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "dz-counterirritant",
"term": "Counterirritant",
"also": [],
"def": "A topical antipruritic such as camphor or menthol that relieves pain and itching.",
"cite": "Patel Outdoor slide 13",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "dz-cradle-cap",
"term": "Cradle cap",
"also": [],
"def": "Seborrheic dermatitis of an infant’s scalp: greasy or dry scaling.",
"cite": "Patel Scaly slide 12",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-critical-wavelength",
"term": "critical wavelength",
"also": [
"critical wavelength method"
],
"def": "The method used to assess a sunscreen's UVA protection; a product with a critical wavelength of 370 nm or greater may be labeled broad spectrum.",
"cite": "Smith Sun Exposure slide 14",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pC-crofab",
"term": "CroFab",
"also": [],
"def": "Antivenin in the pit viper protocol: loading dose 4 to 6 vials (same for adults and children), then SSS hourly. Stable or lower SSS: 2 vials every 6 hours three times; higher: repeat loading dose.",
"cite": "Patel Outdoor slide 59",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smB-crohn",
"term": "Crohn's disease",
"also": [
"Crohn disease",
"Crohn’s disease"
],
"def": "A condition in which the gastrointestinal tract is inflamed over a long period of time; it usually affects the small intestine and colon. Secukinumab may exacerbate it.",
"cite": "PCol slide 66; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/crohn-disease",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-cross-reactivity",
"term": "cross reactivity",
"also": [
"cross-reactivity",
"cross reactivities",
"cross-reactivities"
],
"def": "Slide 55's note on the tetracyclines: cross reactivities due to structure similarity.",
"cite": "DPAW slide 55",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-crust",
"term": "crust",
"also": [
"crusted",
"crusting"
],
"def": "The result of plasma exuding through an eroded epidermis; it is rough on the surface and yellow or brown.",
"cite": "Pathophys slide 11; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "dz-cryotherapy",
"term": "Cryotherapy",
"also": [],
"def": "Freezing a wart with an OTC device (dimethyl ether and propane, or nitrous oxide).",
"cite": "Patel Warts slides 9, 11",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-ctla4",
"term": "CTLA-4",
"also": [
"CTLA4"
],
"def": "The T-cell surface molecule whose extracellular domain is used in abatacept; fused to human IgG Fc, it binds CD80/CD86 on antigen-presenting cells.",
"cite": "PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-cutaneous",
"term": "cutaneous",
"also": [],
"def": "Having to do with the skin. PUVA reorganizes cutaneous blood vessels.",
"cite": "Smith Sun Exposure slide 3; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cutaneous",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pA-ctcl",
"term": "cutaneous T-cell lymphoma",
"also": [
"CTCL"
],
"def": "A cancer that begins in T cells and affects the skin. Slide 40 lists it as a malignant skin condition on which topical calcineurin inhibitors must be avoided.",
"cite": "Patel Dermatitis slide 40; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cutaneous-t-cell-lymphoma",
"src": "general",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-cyclic-peptide",
"term": "cyclic peptide",
"also": [
"cyclic peptides"
],
"def": "Slide 33's class for cyclosporin: an 11 amino acid cyclic peptide. A peptide is two or more amino acids joined through the carboxyl group of one and the amino group of another.",
"cite": "DPAW slide 33; general: NCI Thesaurus C735, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C735?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-cyclophilin",
"term": "cyclophilin",
"also": [
"cyclophilin receptor",
"complexation"
],
"def": "Dr. Smith: The T-cell protein that cyclosporine binds. The cyclosporine-cyclophilin complex binds calcineurin and holds it inactive. Dr. Sikazwe: The receptor protein cyclosporin complexes with; slide 33 says this complexation activates cyclosporin, which then inhibits calcineurin phosphatase and T-cell signaling.",
"cite": "PCol slide 26; DPAW slide 33",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-cyp3a4",
"term": "CYP3A4",
"also": [
"Cyp3A4",
"CYP 3A4"
],
"def": "The enzyme that metabolizes cyclosporine and tacrolimus, which is why they have multiple drug interactions. Apremilast should not be used with strong CYP3A4 enzyme inducers.",
"cite": "PCol slide 30; PCol slide 34",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-cyst",
"term": "cyst",
"also": [
"cysts"
],
"def": "A papule or nodule that contains fluid or semi-fluid material.",
"cite": "Pathophys slide 34; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-cyp",
"term": "cytochrome P450",
"also": [
"CYP",
"CYPs",
"3A4",
"CYP2C9",
"2C9",
"CYP2D6",
"2D6",
"CYP1A2",
"1A2",
"CYP2A6",
"2A6"
],
"def": "A group of enzymes involved in drug metabolism and found in high levels in the liver. The slides name isoforms by number, such as 3A4, 2C9, 2D6, 1A2 and 2A6.",
"cite": "DPAW slide 8; DPAW slide 18; DPAW slide 33; DPAW slide 34; DPAW slide 35; general: NCI Thesaurus C16484, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C16484?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-cytokine",
"term": "cytokine",
"also": [
"cytokines",
"proinflammatory cytokines",
"proinflammatory cytokine",
"inflammatory cytokines"
],
"def": "Dr. Smith: A type of protein made by certain immune and non-immune cells that has an effect on the immune system. Interleukins and interferons are cytokines. Dr. Sikazwe: A type of protein made by certain immune and non-immune cells that has an effect on the immune system; some cytokines stimulate it and others slow it down.",
"cite": "Pathophys slide 13; Pathophys slide 16; Pathophys slide 21; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cytokine; DPAW slide 7; DPAW slide 28",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-cytokine-storm",
"term": "cytokine storm",
"also": [
"first-dose cytokine storm"
],
"def": "A severe immune reaction in which the body releases too many cytokines into the blood too quickly. Corticosteroids are used to block a first-dose cytokine storm.",
"cite": "PCol slide 9; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cytokine-storm",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "dz-cytostatic",
"term": "Cytostatic",
"also": [],
"def": "Stops cells from multiplying so much. Dr. Smith on selenium sulfide and zinc pyrithione: they stop keratinocytes from proliferating so much.",
"cite": "Smith PCol slide 57; 11/03 lecture",
"src": "slide",
"deck": "dz",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-cytotoxic-agents",
"term": "cytotoxic agents",
"also": [
"cytotoxic agent",
"antipsoriatic cytotoxic agents",
"cytotoxic"
],
"def": "Dr. Smith: Dr. Smith's antipsoriatic class that works by decreasing the rate of epidermal cell turnover: coal tar, anthralin, shale tar (ichthammol), selenium sulfide and zinc pyrithione. Dr. Smith: Substances that kill cells. A class on Dr. Smith's psoriasis medication list; psoralens with UVA are cytotoxic to T cells.",
"cite": "PCol slide 52; PCol slide 53; PCol slide 55; PCol slide 57; Pathophys slide 28; Smith Sun Exposure slide 3; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cytotoxic-agent",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "dz-cytotoxic",
"term": "Cytotoxicity",
"also": [],
"def": "Damage to cells; antiseptics may cause it and so reduce wound healing.",
"cite": "Patel Wound slide 15",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pB-dandruff",
"term": "Dandruff",
"also": [],
"def": "A chronic, non-inflammatory, hyperproliferative epidermal scalp condition with accelerated cell turnover, abnormal keratinization and Malassezia fungi; it causes mild inflammation, flaking and pruritus.",
"cite": "Patel Scaly slide 8",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-debridement",
"term": "Debridement",
"also": [],
"def": "Removal of devitalized tissue from a chronic wound: sharp (scalpel or devices), mechanical or enzymatic (abrasion, whirlpool, wet-to-dry dressing, maggot therapy, collagenase) or surgical.",
"cite": "Patel Wound slide 26; Patel Wound slide 8",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-delayed-pigmentation",
"term": "delayed pigmentation",
"also": [
"delayed tanning"
],
"def": "UVA tanning that takes about 48 to 72 hours to develop after exposure, peaks at 7 to 10 days and lasts weeks to months.",
"cite": "Smith Sun Exposure slide 10",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-dendrimer",
"term": "dendrimer formulation",
"also": [
"dendrimer",
"dendrimer formulations",
"dendrimers"
],
"def": "A formulation of anthralin that slide 17 says improves PK properties and DoA or half-life.",
"cite": "DPAW slide 17",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-dendritic-cell",
"term": "dendritic cell",
"also": [
"dendritic cells",
"dendritic APCs",
"dendritic"
],
"def": "An immune cell found in tissues such as the skin that shows antigens on its surface to other immune cells; a type of antigen-presenting cell.",
"cite": "Pathophys slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/dendritic-cell",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-depigmentation",
"term": "depigmentation",
"also": [
"skin whitening",
"depigmenting"
],
"def": "Slide 67's use for topical hydroquinone: whitening or depigmentation of aged spots, by inhibiting melanin biosynthesis through tyrosinase inhibition.",
"cite": "DPAW slide 67",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pC-depigmenting-agent",
"term": "Depigmenting agent",
"also": [
"hydroquinone"
],
"def": "Bleaches hyperpigmented areas, such as melasma and lentigines. Hydroquinone 4%: limit use to three months and wear sunscreen.",
"cite": "Patel Sun Exposure slide 43; Patel Sun Exposure slide 47",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-dermatitis",
"term": "dermatitis",
"also": [],
"def": "Skin inflammation; the slides write \"dermatitis (or eczema)\" for its many kinds, of which atopic dermatitis is the most common.",
"cite": "Pathophys slide 8; Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pB-dlqi",
"term": "Dermatology Life Quality Index",
"also": [
"DLQI"
],
"def": "One of the measures listed for psoriasis. A DLQI over 10 is one criterion for severe psoriasis.",
"cite": "Patel Scaly slide 31",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-dermis",
"term": "dermis",
"also": [
"dermal"
],
"def": "The skin layer below the epidermis and above the hypodermis; the slide divides it into a papillary region and a reticular region.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "sk-desquamate",
"term": "desquamate",
"also": [
"desquamates"
],
"def": "Slide 43's word for what the lower skin layers do after salicylic acid's low pH makes them swell and soften; keratolytics promote skin shedding (slide 42).",
"cite": "DPAW slide 42; DPAW slide 43",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-desquamation",
"term": "desquamation",
"also": [],
"def": "Dr. Smith: Peeling. Salicylic acid causes desquamation of keratotic debris by solubilizing cell surface proteins that keep the stratum corneum intact. Dr. Smith: Skin coming off in scales.",
"cite": "PCol slide 39; Pathophys slide 25; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-dhfr",
"term": "DHFR",
"also": [
"dihydrofolate reductase"
],
"def": "Dr. Smith: Dihydrofolate reductase, the enzyme that makes tetrahydrofolic acid from dihydrofolic acid. Trimethoprim reversibly inhibits the bacterial enzyme; methotrexate inhibits DHFR to treat psoriasis. Dr. Sikazwe: Dihydrofolate reductase, the enzyme that on slide 30 reduces folic acid to tetrahydrofolic acid; methotrexate inhibits it competitively.",
"cite": "PCol slide 48; PCol slide 59; DPAW slide 30",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "pA-diaper-dermatitis",
"term": "diaper dermatitis",
"also": [
"diaper rash"
],
"def": "Rash in the diaper area with patches of red to bright red, shiny, wet-looking skin on the buttocks, upper thighs, abdomen and genital region. Causes include occlusion, moisture, microbes, friction and alkaline skin pH.",
"cite": "Patel Dermatitis slide 56; Patel Dermatitis slide 58",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smA-dibenzoylmethanes",
"term": "dibenzoylmethanes",
"also": [
"dibenzoylmethane"
],
"def": "Dr. Smith: An organic sunscreen family whose activity starts to decrease after 15 minutes of use. Dr. Sikazwe: UVA (315-400 nm) sunscreen class of avobenzone: absorbs the full spectrum of UVA and some UVB, and is rapidly degraded by UVA (slide 62).",
"cite": "Smith Sun Exposure slide 24; DPAW slide 62",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-differentiation",
"term": "differentiation",
"also": [
"incomplete differentiation"
],
"def": "The process by which immature cells become mature cells with specific functions. In psoriasis keratinocyte differentiation is incomplete.",
"cite": "Pathophys slide 19; Pathophys slide 15; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/differentiation",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-dhfr-inhibitor",
"term": "dihydrofolate reductase inhibitor",
"also": [
"dihydrofolate reductase inhibitors",
"DHFR inhibitor"
],
"def": "A drug class on Dr. Smith's psoriasis list, written as \"dihydrofolate reductase inhibitor/T-cell and cytokine suppressors\".",
"cite": "Pathophys slide 28",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-dihydrofolic-acid",
"term": "dihydrofolic acid",
"also": [
"dihydrofolate"
],
"def": "The folate that bacteria synthesize using PABA (blocked by sulfamethoxazole) and that dihydrofolate reductase then converts to tetrahydrofolic acid.",
"cite": "PCol slide 48; PCol slide 60",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-direct-action",
"term": "direct action",
"also": [
"direct mechanism"
],
"def": "Nuclear receptor action in which the drug-receptor complex binds DNA at a response element to inhibit or promote transcription. It requires two drug-receptor complexes.",
"cite": "PCol slide 5; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "dz-vector",
"term": "Disease vector",
"also": [],
"def": "An insect that carries an infection to people; on her slide mosquitoes, fleas and ticks.",
"cite": "Patel Outdoor slide 20",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-disulfide",
"term": "disulfide bond",
"also": [
"disulfide bonds",
"disulfide",
"S-S bond"
],
"def": "The sulfur-sulfur links in keratin that sulfur reduces or breaks (thiolysis); slide 46 draws them turning into SH groups.",
"cite": "DPAW slide 46",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "dz-dmard",
"term": "DMARD",
"also": [],
"def": "Disease-modifying antirheumatic drug. Her slide labels methotrexate and cyclosporine oral DMARDs.",
"cite": "Patel Scaly slide 39; expansion is the plain meaning",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-dna-synthesis-inhibitors",
"term": "DNA synthesis inhibitors",
"also": [
"DNA synthesis inhibitor"
],
"def": "A drug class on Dr. Smith's list of medications for treating psoriasis.",
"cite": "Pathophys slide 28",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-do-your-part",
"term": "Do Your P.A.R.T. program",
"also": [
"Do Your P.A.R.T.",
"Do Your PART"
],
"def": "The program US prescribers should use with acitretin, which is teratogenic. It must not be used by women who are or may become pregnant, during treatment or for at least 3 years after it.",
"cite": "PCol slide 20",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "sk-doa",
"term": "DoA",
"also": [
"duration of action"
],
"def": "The slides' abbreviation, read in this course as duration of action. Slide 26: hydrocortisone's DoA is 8 to 12 h; slide 17: dendrimer formulations improve DoA.",
"cite": "DPAW slide 17; DPAW slide 26",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-drug-receptor-complex",
"term": "drug-receptor complex",
"also": [
"drug receptor complex",
"drug-receptor complexes",
"drug receptor complexes"
],
"def": "The drug bound to its nuclear receptor. The complex binds either a DNA response element (direct action) or a transcription factor (indirect action).",
"cite": "PCol slide 5; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-druggable",
"term": "druggable components",
"also": [
"druggable component",
"major druggable components",
"Maj. Druggable Components"
],
"def": "The parts of a disease process that drugs act on. Slide 4 lists immune response and inflammation for dermatitis; slides 13 and 41 list those of psoriasis and acne.",
"cite": "DPAW slide 4; DPAW slide 13; DPAW slide 41",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "dz-dry-bite",
"term": "Dry bite",
"also": [],
"def": "A snake bite that delivers no venom.",
"cite": "Patel Outdoor slide 54",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pB-duct-tape",
"term": "Duct tape for warts",
"also": [
"duct tape"
],
"def": "A complementary therapy: apply to the wart for 6 days, remove, wash, dry, and repeat with new tape every 6 days for up to 2 months until the wart resolves.",
"cite": "Patel Warts slide 12",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-dyshidrotic-eczema",
"term": "dyshidrotic eczema",
"also": [],
"def": "Irritation of the skin on the palms of the hands and soles of the feet, characterized by clear, deep blisters that itch and burn.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-ecchymosis",
"term": "Ecchymosis",
"also": [],
"def": "A small bruise caused by blood leaking from broken blood vessels into the tissues of the skin or mucous membranes.",
"cite": "Patel Outdoor slide 58; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/ecchymosis",
"src": "general",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-eczema",
"term": "eczema",
"also": [],
"def": "Dr. Smith: A general term for several types of skin inflammation; the slides use it interchangeably with dermatitis, and atopic dermatitis is often called eczema. Dr. Sikazwe: A form of dermatitis characterized by red, itchy, scaly or crusty patches that can be chronic or intermittent. Slide 4's treatment goals: suppress the immune response and inflammation.",
"cite": "Pathophys slide 8; Pathophys slide 9; DPAW slide 4; DPAW slide 5; general: NCI Thesaurus C3001, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3001?include=definitions",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-edema",
"term": "edema",
"also": [],
"def": "Swelling caused by excess fluid in body tissues. A symptom of sunburn, with mild erythema and tenderness.",
"cite": "Smith Sun Exposure slide 11; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/edema",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pC-elicitation-phase",
"term": "Elicitation phase",
"also": [
"elicitation"
],
"def": "On continued or later exposure, a hypersensitivity reaction occurs. The rash may appear 2 to 48 hours after exposure and lasts 1 to 3 weeks.",
"cite": "Patel Outdoor slide 8",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "immunology"
},
{
"id": "pA-emollient",
"term": "emollient",
"also": [
"emollients"
],
"def": "Dr. Patel: Moisturizer used to help re-establish the weakened epidermis (slide 29: thick emollients). Slide 32 labels the lotion group (Cetaphil, Keri, Neutrogena) emollients: less effective, apply 3 or more times a day. Dr. Sikazwe: Slide 15: mostly water emulsions that prevent skin water loss. Types: petrolatum, lanolin and silicone based (dimethicone, cyclomethicone).",
"cite": "Patel Dermatitis slide 29; Patel Dermatitis slide 32; DPAW slide 14; DPAW slide 15",
"src": "slide",
"deck": "p5",
"prof": "Patel/Sikazwe",
"exam": [
1,
2
],
"kind": "pharmacology"
},
{
"id": "pC-rabies-encephalitic",
"term": "Encephalitic rabies",
"also": [
"furious rabies"
],
"def": "Form of acute rabies in 80% of cases, lasting 2 to 7 days: anxiety, agitation, hyperactivity, bizarre behavior, hallucinations, autonomic dysfunction, hydrophobia.",
"cite": "Patel Outdoor slide 61",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "dz-envenomation",
"term": "Envenomation",
"also": [],
"def": "Injection of venom by a bite or sting.",
"cite": "plain meaning, not from the slides",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-enzyme",
"term": "enzyme",
"also": [
"enzymes",
"enzymatic"
],
"def": "A macromolecule, usually a protein, that functions as a biocatalyst by increasing the reaction rate.",
"cite": "DPAW slide 26; DPAW slide 27; DPAW slide 30; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-eosinophil",
"term": "eosinophil",
"also": [
"eosinophils"
],
"def": "A type of white blood cell with granules whose enzymes are released during infections, allergic reactions and asthma.",
"cite": "Pathophys slide 16; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/eosinophil",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-eosinophilia",
"term": "eosinophilia",
"also": [
"blood eosinophilia"
],
"def": "A condition in which the number of eosinophils, a type of white blood cell, in the blood is greatly increased; in atopic dermatitis it results from TH2 cytokines.",
"cite": "Pathophys slide 16; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/eosinophilia",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-epidemiology",
"term": "epidemiology",
"also": [
"epidemiologic"
],
"def": "The study of the patterns, causes and control of disease in groups of people.",
"cite": "Pathophys slide 3; Pathophys slide 10; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/epidemiology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-epidermal-cell-cycle",
"term": "epidermal cell cycle",
"also": [
"cell turnover"
],
"def": "The time keratinocytes take to divide, mature, migrate to the stratum corneum and shed: 13 days plus 26 days normally, 1.5 days plus 4 days in psoriasis.",
"cite": "Pathophys slide 23",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "dz-hyperplasia",
"term": "Epidermal hyperplasia",
"also": [],
"def": "Thickening of the epidermis.",
"cite": "11/10 lecture",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "dz-kinetics",
"term": "Epidermal kinetics",
"also": [],
"def": "How fast the epidermis turns over and sheds.",
"cite": "Patel Scaly slide 6; 11/10 lecture",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-epidermis",
"term": "epidermis",
"also": [
"epidermal"
],
"def": "The top layer of the skin in the slide's diagram, made up of the stratum corneum, lucidum, granulosum, spinosum and basale; it lies above the dermis.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-erythema",
"term": "erythema",
"also": [
"erythematous",
"erythemateous"
],
"def": "Red skin due to an increased blood supply.",
"cite": "Pathophys slide 19; Pathophys slide 25; Smith Sun Exposure slide 4; Smith Sun Exposure slide 11; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "dz-erythema-migrans",
"term": "Erythema migrans",
"also": [],
"def": "The acute skin lesion of early localized Lyme disease.",
"cite": "Patel Outdoor slide 29",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-erythrodermic-psoriasis",
"term": "erythrodermic psoriasis",
"also": [
"erythrodermic"
],
"def": "The most severe form: generalized erythema with little or no scaling, covering 75% of body surface area, that can lead to generalized desquamation and may lead to death.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-essential-oil",
"term": "essential oil",
"also": [
"essential oils",
"tea tree oil",
"complementary therapy"
],
"def": "Complementary acne therapy. Tea tree oil may irritate if applied directly, so add it to a moisturizing lotion or gel vehicle; frankincense oil showed anti-inflammatory benefit.",
"cite": "Patel Acne slide 30",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "sk-ester",
"term": "ester",
"also": [
"esters",
"ester group"
],
"def": "Compounds formally derived from an oxoacid and an alcohol or phenol by linking with formal loss of water. Slide 24 steroids carry propionate and dipropionate esters.",
"cite": "DPAW slide 24; DPAW slide 50; DPAW slide 54; DPAW slide 65; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/carba.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-estrogen",
"term": "estrogen",
"also": [
"estrogens",
"estrogenic"
],
"def": "A type of hormone that helps develop and maintain female sex characteristics; estrogens made in the laboratory may be used as a type of birth control.",
"cite": "DPAW slide 52; general: NCI Thesaurus C2293, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C2293?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-ethyl-ester",
"term": "ethyl ester prodrug",
"also": [
"ethyl ester",
"ester prodrug"
],
"def": "Slide 50's description of etretinate, converted to its active form acitretin (the free acid); slide 51 draws tazarotene going to tazarotenic acid the same way.",
"cite": "DPAW slide 50; DPAW slide 51",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-etiology",
"term": "etiology",
"also": [
"etiologies"
],
"def": "The cause or origin of disease.",
"cite": "Pathophys slide 2; Pathophys slide 13; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/etiology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "pB-self-treatment-exclusion",
"term": "Exclusion for self-treatment",
"also": [
"self-treatment exclusion",
"exclusions for self-treatment",
"self-care exclusion"
],
"def": "For wounds and burns, a finding that rules out self-care and means referral: face, hands, feet, joints or genitals; injury over 3 inches; bite; infection; diabetes; chemical, electrical or inhalation burn.",
"cite": "Patel Wound slide 7; Patel Wound slide 17",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pA-self-exclusions",
"term": "exclusions for self-treatment of diaper dermatitis",
"also": [
"diaper dermatitis exclusions",
"diaper rash exclusions"
],
"def": "Findings that mean referral rather than self-care. For diaper dermatitis: lesions over 7 days, no improvement in 7 days, secondary infection, oozing, spread beyond the diaper area, constitutional symptoms.",
"cite": "Patel Dermatitis slide 66; Patel Dermatitis slide 68",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pA-exudate",
"term": "exudate",
"also": [
"exudative"
],
"def": "Fluid and white blood cells that move from the circulation to a site of injury in response to local inflammation. Slide 24 lists exudate in acute atopic dermatitis lesions.",
"cite": "Patel Dermatitis slide 24; general: PubMed, Spear M. Wound exudate, https://pubmed.ncbi.nlm.nih.gov/22647956/",
"src": "general",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smB-fab",
"term": "Fab fragment",
"also": [
"Fab"
],
"def": "The antibody piece in certolizumab pegol: a recombinant Fab fragment of a humanized anti-TNF-alpha monoclonal antibody, attached to a polyethylene glycol.",
"cite": "PCol slide 74",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology",
"cs": true
},
{
"id": "pB-impaired-healing",
"term": "Factors that impair wound healing",
"also": [
"impaired wound healing"
],
"def": "Local: tissue perfusion, bacterial contamination, foreign bodies, necrotic tissue, eschar. Systemic: poor vascularization, infection, inadequate nutrition, coexisting medical conditions, medications.",
"cite": "Patel Wound slide 21; Patel Wound slide 22",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-fc",
"term": "Fc",
"also": [
"Fc fragment",
"IgG Fc"
],
"def": "The part of human IgG that is fused onto the receptor portion of the fusion proteins abatacept and etanercept.",
"cite": "PCol slide 63; PCol slide 71",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology",
"cs": true
},
{
"id": "smA-filaggrin",
"term": "filaggrin",
"also": [
"filaggrins"
],
"def": "Proteins formed when profilaggrin degrades; they have a role in differentiation of the epidermis and formation of the skin barrier, and their breakdown products are natural moisturizers.",
"cite": "Pathophys slide 15",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pB-filiform-wart",
"term": "Filiform wart",
"also": [
"filiform warts"
],
"def": "On the face; flesh-colored, rapidly growing, with threadlike projections. Not self-treatable.",
"cite": "Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pA-ftu",
"term": "fingertip unit (FTU)",
"also": [
"FTU",
"FTUs",
"fingertip units",
"finger-tip unit"
],
"def": "Measure for topical product amounts: 1 adult FTU = 0.5 grams. The slide 11 chart gives FTUs per body area, for adults only; slide 12 says pediatric units are smaller.",
"cite": "Patel Dermatitis slide 10; Patel Dermatitis slide 11; Patel Dermatitis slide 12",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pB-first-aid-antibiotic",
"term": "First aid antibiotic ointment",
"also": [
"TAO",
"first aid antibiotics",
"first aid antibiotic"
],
"def": "Bacitracin, neomycin and polymyxin B, applied after cleansing and before bandaging to prevent infection. Evidence of efficacy is limited, and toxicity risk rises over large areas.",
"cite": "Patel Wound slide 11; Patel Wound slide 13; Patel Wound slide 20",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pB-antiseptic",
"term": "First aid antiseptic",
"also": [
"antiseptic",
"antiseptics"
],
"def": "Chlorhexidine, hydrogen peroxide or povidone-iodine. May be cytotoxic and reduce wound healing; use only on intact skin or wound edges after debris removal.",
"cite": "Patel Wound slide 15; Patel Wound slide 19",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-first-degree-relative",
"term": "first-degree relative",
"also": [
"first degree relative"
],
"def": "A parent, sibling or child. About 30% of psoriasis patients have a first-degree relative with psoriasis.",
"cite": "Pathophys slide 20; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/first-degree-relative",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "sk-firstpass",
"term": "first-pass effect",
"also": [
"first pass effect",
"1st pass effect",
"first-pass metabolism",
"first pass metabolism",
"1st pass"
],
"def": "A pharmacological phenomenon in which a medication is metabolized at a specific location in the body. Slide 33 lists a 1st pass effect beside cyclosporin's 30% oral bioavailability.",
"cite": "DPAW slide 33; general: First-Pass Effect, StatPearls, NCBI Bookshelf, https://www.ncbi.nlm.nih.gov/books/NBK551679/",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pC-fitzpatrick",
"term": "Fitzpatrick skin type",
"also": [
"Fitzpatrick",
"Fitzpatrick score",
"Fitzpatrick type",
"Fitzpatrick scale",
"skin phototype"
],
"def": "A scale of types I to VI that classifies skin by its reaction to sunlight: type I always burns and does not tan, type VI never burns and always tans darkly.",
"cite": "Patel Sun Exposure slide 9; Patel Sun Exposure slide 14; general: DermNet NZ, https://dermnetnz.org/topics/skin-phototype",
"src": "general",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-fkbp",
"term": "FKBP",
"also": [],
"def": "The T-cell protein that tacrolimus (FK506) binds. The tacrolimus-FKBP complex binds calcineurin and holds it inactive.",
"cite": "PCol slide 26",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "pB-flat-wart",
"term": "Flat wart (verruca plana)",
"also": [
"verruca plana",
"flat warts"
],
"def": "On the face; smooth, flat-topped, yellow-brown papules, common in children and rare in adults. Not self-treatable.",
"cite": "Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smA-flg",
"term": "FLG",
"also": [
"filaggrin gene",
"FLG gene",
"FLG variants",
"FLG variant"
],
"def": "The filaggrin gene, which encodes profilaggrin. Variants cause reduced or no profilaggrin production and skin permeability barrier dysfunction.",
"cite": "Pathophys slide 15",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-folic-acid",
"term": "folic acid",
"also": [
"folate"
],
"def": "Dr. Smith: A B-complex vitamin (folate) the body needs in small amounts; it helps make red blood cells. Methotrexate is a folic acid analog. Dr. Sikazwe: DHFR's substrate on slide 30; methotrexate is its analog and differs on slide 31 by NH2 in place of OH and an N-CH3 in place of N-H.",
"cite": "PCol slide 59; PCol slide 48; PCol slide 50; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/folate; DPAW slide 30; DPAW slide 31",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-folic-acid-analog",
"term": "folic acid analog",
"also": [
"folate analog"
],
"def": "The slide's description of methotrexate: a compound resembling folic acid that inhibits dihydrofolate reductase and stops tetrahydrofolate synthesis.",
"cite": "PCol slide 59",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pB-fomite",
"term": "Fomite",
"also": [
"fomites"
],
"def": "A surface of an inanimate object; one way HPV is transmitted.",
"cite": "Patel Warts slide 4",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-free-fatty-acids",
"term": "free fatty acids",
"also": [
"free fatty acid"
],
"def": "The products of lipase acting on sebum glyceride; they irritate the follicular walls in acne.",
"cite": "Pathophys slide 33",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-radical",
"term": "free radical",
"also": [
"free radicals",
"radical",
"radicals",
"cytotoxic radicals",
"benzoyl radical"
],
"def": "Molecules or atoms with at least one unpaired electron; chemically unstable, they take an electron from a nearby molecule and damage it. Slides: anthralin (17), benzoyl peroxide (47).",
"cite": "DPAW slide 17; DPAW slide 47; general: NCI Thesaurus C512, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C512?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pB-full-thickness",
"term": "Full-thickness skin loss",
"also": [
"full thickness",
"full-thickness"
],
"def": "Damage to the entire epidermis, dermis and dermal appendages, possibly the subcutaneous tissues (stage 3 wound). Full thickness burns are not self-care when over 2% BSA.",
"cite": "Patel Wound slide 5; Patel Wound slide 16",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-furanocoumarin",
"term": "furanocoumarin",
"also": [
"furanocoumarins",
"furocoumarin"
],
"def": "The chemical class slide 18 gives for psoralens; the drawing labels a furan ring fused to a pyrone (coumarin) ring system.",
"cite": "DPAW slide 18",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-fusion-protein",
"term": "fusion protein",
"also": [
"fusion proteins"
],
"def": "A drug made by joining parts of two proteins. Abatacept is the extracellular domain of CTLA-4 fused to human IgG Fc; etanercept is two p75 TNF receptors linked to an IgG1 Fc fragment.",
"cite": "PCol slide 63; PCol slide 71; PCol slide 62",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "pA-g6pd",
"term": "G6PD",
"also": [
"G6PD deficiency"
],
"def": "Glucose-6-phosphate dehydrogenase, an enzyme; deficiency lets red blood cells break down when certain medicines are taken. Slide 31 gives a G6PD concern for dapsone, with CBC monitoring.",
"cite": "Patel Acne slide 31; general: MedlinePlus, https://medlineplus.gov/ency/article/000528.htm",
"src": "general",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology",
"cs": true
},
{
"id": "pB-gauze-dressing",
"term": "Gauze dressing",
"also": [
"gauze dressings"
],
"def": "A nonocclusive fiber dressing with a loose, open weave. Readily available, cost effective and highly absorbent, but needs a secondary dressing, frequent changes, and debridement is nonselective.",
"cite": "Patel Wound slide 8",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-genetic-predisposition",
"term": "genetic predisposition",
"also": [],
"def": "An inherited increase in the risk of developing a disease. Psoriasis patients seem to have one.",
"cite": "Pathophys slide 21; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/genetic-predisposition",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "sk-geometric",
"term": "geometric isomer",
"also": [
"geometric isomers",
"cis-trans isomer",
"cis/trans",
"geometric isomerism"
],
"def": "Slide 49's relation between isotretinoin (13-cis) and tretinoin (all-trans): the same structure except that the highlighted double bond at carbon 13 is cis instead of trans.",
"cite": "DPAW slide 49",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-gingival-hyperplasia",
"term": "gingival hyperplasia",
"also": [
"gingival overgrowth"
],
"def": "Pathological growth of gingival tissue caused by a drug; cyclosporine is the leading immunosuppressant cause. On the slide it is the cyclosporine-only side effect.",
"cite": "PCol slide 30; general: PMC, Drug-induced gingival overgrowth in cardiovascular patients, https://pmc.ncbi.nlm.nih.gov/articles/PMC8069521/",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-glaucoma",
"term": "glaucoma",
"also": [],
"def": "A condition in which fluid builds up in the eye and presses on the retina and optic nerve; it can damage the optic nerve and cause loss of vision.",
"cite": "PCol slide 12; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/glaucoma",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-globiad",
"term": "GLOBIAD",
"also": [],
"def": "Ghent Global IAD Categorisation Tool. Category 1 is persistent redness and category 2 is skin loss; A means without and B means with clinical signs of infection.",
"cite": "Patel Dermatitis slide 60",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-glucocorticoid",
"term": "glucocorticoid",
"also": [
"glucocorticoids"
],
"def": "Dr. Smith: A compound in the corticosteroid family that affects metabolism and has anti-inflammatory and immunosuppressive effects; it may be a natural hormone or a synthetic drug. Dr. Sikazwe: Slide 20: glucocorticoids are corticosteroids or steroids. They affect metabolism and have anti-inflammatory and immunosuppressive effects.",
"cite": "PCol slide 8; PCol slide 7; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/glucocorticoid; DPAW slide 20; DPAW slide 24; general: NCI Thesaurus C2323, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C2323?include=definitions",
"src": "general",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-glucocorticoid-receptor",
"term": "glucocorticoid receptor",
"also": [
"glucocorticoid receptors"
],
"def": "The nuclear receptor for corticosteroids. In the Katzung figure the steroid binds the receptor, two steroid-receptor units form an activated dimer, and the dimer binds the GRE on DNA.",
"cite": "PCol slide 7; PCol slide 10",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-glucuronidation",
"term": "glucuronidation",
"also": [
"glucuronide",
"glucuronidated",
"O-glucuronide",
"O-Gluc",
"Gluc"
],
"def": "Linking a drug to glucuronic acid, which is highly soluble in water; an inactivating pathway that allows excretion in urine or bile. Marked Gluc on the slides.",
"cite": "DPAW slide 9; DPAW slide 34; general: NCI Thesaurus C63811, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C63811?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-glycemic-index",
"term": "glycemic index",
"also": [
"high glycemic index",
"high-glycemic"
],
"def": "A measure of the rise in blood glucose caused by eating a specific carbohydrate compared with glucose. A high glycemic index diet is listed as an acne exacerbating factor.",
"cite": "Pathophys slide 35; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/glycemic-index",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "smA-glycerides",
"term": "glycerides",
"also": [
"glyceride"
],
"def": "A component of sebum, with wax esters and cholesterol. Lipase from P. acnes breaks sebum glyceride down into free fatty acids.",
"cite": "Pathophys slide 6; Pathophys slide 33",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-grase",
"term": "GRASE",
"also": [
"Generally Recognized as Safe and Effective"
],
"def": "Generally Recognized as Safe and Effective: the type of sunscreen to consider when avoiding ortho-aminobenzoic acid with sensitive skin or previous allergic reactions.",
"cite": "Patel Sun Exposure slide 17",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation"
},
{
"id": "smB-gre",
"term": "GRE",
"also": [
"glucocorticoid response element"
],
"def": "Glucocorticoid response element: the DNA site that the activated steroid-receptor dimer binds in the nucleus.",
"cite": "PCol slide 7; PCol slide 10; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-guttate-psoriasis",
"term": "guttate psoriasis",
"also": [
"eruptive psoriasis",
"guttate"
],
"def": "Eruptive psoriasis: a sudden eruption of pinpoint dark-red scaling lesions on the trunk and limbs, frequent in young adults and frequently preceded by a strep infection.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-gynecomastia",
"term": "gynecomastia",
"also": [],
"def": "Abnormal amount of breast tissue in males. Slide 34 lists it, with hyperkalemia, as an adverse reaction of spironolactone.",
"cite": "Patel Acne slide 34; general: MedlinePlus, https://medlineplus.gov/ency/article/003165.htm",
"src": "general",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-ha",
"term": "HA",
"also": [],
"def": "Hyaluronic acid (slide 69). High-MW HA stays on the skin surface; low-MW HA penetrates into deeper skin.",
"cite": "DPAW slide 69; DPAW slide 71",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "smA-hair-erector-muscle",
"term": "hair erector muscle",
"also": [
"arrector pili",
"arrector pili muscle"
],
"def": "A muscle attached to the hair follicle; its contraction results in goosebumps. DermNet calls it the arrector pili muscle.",
"cite": "Pathophys slide 6; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-hair-follicle",
"term": "hair follicle",
"also": [
"hair follicles",
"follicle",
"follicles",
"follicular"
],
"def": "A shaft or opening on the surface of the skin through which hair grows; in the slide's cross-section the sebaceous gland sits against it.",
"cite": "Pathophys slide 6; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hair-follicle",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "sk-half-life",
"term": "half-life",
"also": [
"half life",
"t1/2",
"T1/2",
"t½",
"half-lives"
],
"def": "The amount of time needed for a material to lose half of its physical, chemical or biological activity. Written t1/2 on the slides.",
"cite": "DPAW slide 7; DPAW slide 8; DPAW slide 26; DPAW slide 55; general: NCI Thesaurus C70916, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C70916?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "measure"
},
{
"id": "pC-hdcv-pcecv",
"term": "HDCV and PCECV",
"also": [
"HDCV",
"PCECV",
"human diploid cell vaccine",
"purified chick embryo cell vaccine"
],
"def": "The two rabies vaccines on the PEP slide: human diploid cell vaccine and purified chick embryo cell vaccine, 1 mL IM in the deltoid. Immunosuppressed patients get a fifth dose on day 28.",
"cite": "Patel Outdoor slide 63",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "pC-head-lice",
"term": "Head lice",
"also": [
"Pediculus humanus capitis",
"head louse"
],
"def": "The most common lice infestation, spread by head-to-head contact or shared personal items. Found within 4 mm (0.16 inch) of the scalp; highest in school children.",
"cite": "Patel Outdoor slide 42",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-hemostasis",
"term": "Hemostasis",
"also": [],
"def": "The first step of the inflammation phase on the healing timeline: platelets form a fibrin clot and release vasoactive mediators, cytokines and growth factors.",
"cite": "Patel Wound slide 6",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-heterodimer",
"term": "heterodimer",
"also": [
"heterodimers",
"RAR-RXR",
"heterodimerizes",
"heterodimerize"
],
"def": "A pair of two different receptors joined together. A retinoid-bound RAR and RXR form the RAR-RXR heterodimer, which enters the nucleus and binds the RARE; the VDR-drug complex pairs with RXR.",
"cite": "PCol slide 14; PCol slide 21",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pC-uvr-high-risk",
"term": "High risk for UVR-induced problems",
"also": [
"highest risk of UVR-induced problems"
],
"def": "Fitzpatrick I or II, blonde, red or light brown hair, freckles, blistering sunburns, prior UV-caused growths, family melanoma, tanning beds, photosensitizing or immunosuppressive drugs, autoimmune disease.",
"cite": "Patel Sun Exposure slide 9",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pC-high-risk-hours",
"term": "High-risk sun hours",
"also": [
"10 am and 4 pm",
"10 a.m. and 4 p.m."
],
"def": "Between 10 am and 4 pm, when sun exposure should be limited. Check the UV index; a cloudy day is not protective.",
"cite": "Patel Sun Exposure slide 12; Patel Sun Exposure slide 36",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-lyme-high-risk",
"term": "High-risk tick bite",
"also": [
"high risk tick bite"
],
"def": "High risk if the tick is Ixodes (black-legged), the area is highly endemic and the tick was attached over 36 hours. Prophylaxis: doxycycline once, within 72 hours of detaching the tick.",
"cite": "Patel Outdoor slide 29",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-histamine",
"term": "histamine",
"also": [],
"def": "A substance released from some white blood cells during allergic reactions that makes small blood vessels widen and leak. Released in sunburn.",
"cite": "Smith Sun Exposure slide 11; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/histamine",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-hives",
"term": "hives",
"also": [
"urticaria"
],
"def": "Itchy, raised red areas on the skin; also called urticaria. With rash, vesicles or exaggerated sunburn after a sunscreen, refer the patient.",
"cite": "Smith Sun Exposure slide 25; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hives",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-hormone",
"term": "hormone",
"also": [
"hormones",
"hormonal"
],
"def": "A substance produced by endocrine glands, released in very low concentration into the bloodstream, that exerts regulatory effects on specific organs or tissues distant from the site of secretion.",
"cite": "DPAW slide 42; DPAW slide 52; DPAW slide 53; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-hpa-axis",
"term": "HPA axis suppression",
"also": [
"hypothalamic-pituitary-adrenal axis suppression",
"hypothalamic-pituitary-adrenal axis",
"HPA axis",
"HPA suppression"
],
"def": "Suppression of the hypothalamic-pituitary-adrenal axis, listed first among the systemic adverse effects that topical corticosteroids may cause.",
"cite": "PCol slide 12",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-hpi",
"term": "HPI",
"also": [],
"def": "History of present illness, in the case format used on the slides; it follows the chief complaint.",
"cite": "Patel Dermatitis slide 26",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "dz-hpv",
"term": "HPV",
"also": [],
"def": "Human papillomavirus, the cause of warts.",
"cite": "Patel Warts slide 4",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "dz-hrig",
"term": "HRIG",
"also": [],
"def": "Human rabies immune globulin; her slides also write RHIG.",
"cite": "Patel Outdoor slides 62–63",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-hsp90",
"term": "Hsp90",
"also": [
"heat shock protein 90"
],
"def": "Heat shock protein 90, a chaperone protein that works with the glucocorticoid receptor. In the Katzung figure two Hsp90 molecules sit on the unbound steroid receptor (R) and come off after the steroid binds.",
"cite": "PCol slide 10; general: PMC, Glucocorticoid Receptor Function Regulated by Coordinated Action of the Hsp90 and Hsp70 Chaperone Cycles, https://pmc.ncbi.nlm.nih.gov/articles/PMC4087167/",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-humanized",
"term": "humanized antibody",
"also": [
"humanized",
"humanized monoclonal antibody"
],
"def": "An antibody made in the laboratory by combining a human antibody with a small part of a mouse or rat monoclonal antibody; the animal part binds the target antigen.",
"cite": "PCol slide 66; PCol slide 68; PCol slide 69; PCol slide 74; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/humanized-monoclonal-antibody",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "pA-humectant",
"term": "humectant",
"also": [
"humectants"
],
"def": "A hygroscopic substance that helps the stratum corneum absorb water by drawing it from the dermis and humid air into the epidermis. Slide 32 lists urea-containing moisturizers as humectants.",
"cite": "Patel Dermatitis slide 32; general: Aversa et al., PMC5849435, https://pmc.ncbi.nlm.nih.gov/articles/PMC5849435/",
"src": "general",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "sk-hyaluronic",
"term": "hyaluronic acid",
"also": [
"hyaluronic"
],
"def": "An endogenous mucopolysaccharide, non-antigenic and non-immunogenic, that creates a hygroscopic viscoelastic film maintaining skin moisture (slide 69); a component of connective tissue and skin.",
"cite": "DPAW slide 69; general: NCI Thesaurus C549, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C549?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-hydroalcoholic",
"term": "hydroalcoholic vehicle",
"also": [
"hydroalcoholic"
],
"def": "A topical clindamycin vehicle that, like the foam formulation, may cause drying, burning and stinging; water-based gel and lotion formulations are well tolerated.",
"cite": "PCol slide 46",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-hydrocarbon",
"term": "hydrocarbon",
"also": [
"hydrocarbons"
],
"def": "Compounds consisting of carbon and hydrogen only. Slide 15: petrolatum is hydrocarbons.",
"cite": "DPAW slide 15; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/hydro.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "dz-hydrocolloid",
"term": "Hydrocolloid dressing",
"also": [],
"def": "An occlusive, self-adherent dressing that keeps the wound moist and manages exudate by particle swelling; uninfected wounds only.",
"cite": "Patel Wound slide 9",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-h-bonding",
"term": "hydrogen bonding",
"also": [
"hydrogen bond",
"hydrogen bonds",
"H-bond",
"H-bonds",
"H-bonding"
],
"def": "The glucocorticoid CBDA on slide 23: dashed lines from the steroid's oxygens at C3, C11, C17, C20 and C21 to receptor residues Arg611, Gln570, Asn564, Gln642 and Thr739.",
"cite": "DPAW slide 23",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-hydrogen-sulfide",
"term": "hydrogen sulfide",
"also": [],
"def": "What sulfur is reduced to inside the keratinocytes. It causes inflammation, which promotes peeling and unblocking of plugs.",
"cite": "PCol slide 38",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-hydrolysis",
"term": "hydrolysis",
"also": [
"hydrolyze",
"hydrolyzed",
"hydrolyzes",
"hydrolytic"
],
"def": "A chemical reaction that uses water to break down a compound. Slide 65: sunscreen esters hydrolyze to inactive acids eliminated in urine.",
"cite": "DPAW slide 7; DPAW slide 65; general: NCI Thesaurus C16702, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C16702?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-deboronation",
"term": "hydrolytic deboronation",
"also": [
"deboronation",
"deboronated"
],
"def": "Loss of crisaborole's boron by hydrolysis. Slide 7 says it limits systemic exposure and draws the products: the benzyl alcohol, then the benzoic acid.",
"cite": "DPAW slide 7",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-hydrophilic",
"term": "hydrophilic",
"also": [
"hydrophilicity",
"hydrophylic"
],
"def": "Hydrophilicity is the tendency of a molecule to be solvated by water. Slide 43 calls glycolic acid a hydrophilic acid.",
"cite": "DPAW slide 43; DPAW slide 65; DPAW slide 68; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-hydroxyanthrone",
"term": "hydroxyanthrone",
"also": [],
"def": "The chemical class slide 17 gives for anthralin (dithranol); the drawing shows three fused rings with two OH groups beside a C=O.",
"cite": "DPAW slide 17",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-hygiene-hypothesis",
"term": "hygiene hypothesis",
"also": [],
"def": "The idea that the absence of early childhood exposure to infectious agents increases susceptibility to allergic diseases; offered for the lower prevalence of atopic dermatitis in rural areas.",
"cite": "Pathophys slide 10",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "sk-hygroscopic",
"term": "hygroscopic viscoelastic film",
"also": [],
"def": "What hyaluronic acid creates on the skin; slide 69 says the film maintains skin moisture.",
"cite": "DPAW slide 69",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smB-hypercalcemia",
"term": "hypercalcemia",
"also": [
"hypercalcaemia"
],
"def": "Dr. Smith: Higher than normal levels of calcium in the blood. With calcipotriene it may develop when the cumulative weekly dose exceeds 100 g/week. Dr. Sikazwe: Higher than normal levels of calcium in the blood.",
"cite": "PCol slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hypercalcemia; DPAW slide 27 (annotation on the student copy; lecture T@1580–2000); general: NCI Thesaurus C3112, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3112?include=definitions",
"src": "general",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-hyperglycemia",
"term": "hyperglycemia",
"also": [],
"def": "Higher than normal amount of glucose (a type of sugar) in the blood; also called high blood sugar.",
"cite": "PCol slide 12; PCol slide 13; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hyperglycemia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pA-hyperkalemia",
"term": "hyperkalemia",
"also": [
"high potassium"
],
"def": "A blood potassium level higher than normal. Slide 34 lists it as an adverse reaction of spironolactone.",
"cite": "Patel Acne slide 34; general: MedlinePlus, https://medlineplus.gov/ency/article/001179.htm",
"src": "general",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-hyperkeratinization",
"term": "hyperkeratinization",
"also": [
"hyper keratinization",
"hyper-keratinization",
"follicular keratinization"
],
"def": "Increased epithelial cell turnover, which can cause clogging of pores (slide 40). Slide 41 lists excessive follicular keratinization as an acne component.",
"cite": "DPAW slide 40; DPAW slide 41",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-hyperpigmentation",
"term": "hyperpigmentation",
"also": [],
"def": "Darkened skin compared to normal; it can be localized or generalized. A side effect of psoralens.",
"cite": "Smith Sun Exposure slide 4; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-hyperplasia",
"term": "hyperplasia",
"also": [
"hyperplastic"
],
"def": "An increase in the number of cells in an organ or tissue. Gingival hyperplasia is the cyclosporine-only side effect; anthralin suppresses hyperplastic keratinocyte growth.",
"cite": "PCol slide 30; PCol slide 55; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hyperplasia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-hypersensitivity",
"term": "hypersensitivity",
"also": [],
"def": "An exaggerated response by the immune system to a drug or other substance. With crisaborole it may show as contact urticaria, severe pruritus, swelling or erythema; discontinue immediately.",
"cite": "PCol slide 33; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hypersensitivity",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-hypodermis",
"term": "hypodermis",
"also": [
"subcutaneous tissue",
"subcutis"
],
"def": "The deepest layer in the slide's skin diagram, below the dermis; it holds adipose tissue and areolar tissue. The cross-section on slide 6 labels it subcutaneous tissue.",
"cite": "Pathophys slide 5; Pathophys slide 6",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pA-ipledge",
"term": "I-PLEDGE program",
"also": [
"I-PLEDGE",
"iPLEDGE program",
"I-PLEDGE REMS"
],
"def": "FDA-regulated REMS program for isotretinoin. All patients register, sign consent and have a 30-day window to fill. Females of reproductive potential need pregnancy tests, two forms of birth control and a 7-day window.",
"cite": "Patel Acne slide 37; Patel Acne slide 38",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-ige",
"term": "IgE",
"also": [
"total serum IgE",
"serum IgE"
],
"def": "An immunoglobulin whose production TH2 cytokines (IL-5, IL-13) increase and TH1 cytokines (interferon-gamma, IL-12) suppress; total serum IgE is increased in atopic dermatitis.",
"cite": "Pathophys slide 13; Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-ige-independent",
"term": "IgE-independent",
"also": [
"IgE independent"
],
"def": "Describes the T-cell mediated reactions that allergens embedded in the skin or eaten as food may cause in atopic dermatitis: they do not depend on IgE.",
"cite": "Pathophys slide 13",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-il-12",
"term": "IL-12",
"also": [
"interleukin-12"
],
"def": "A TH1 cytokine that, with interferon-gamma, suppresses IgE production.",
"cite": "Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-il12-23-inhibitor",
"term": "IL-12/IL-23 inhibitor",
"also": [
"IL-12 and IL-23 antagonist",
"IL-12/23 inhibitor"
],
"def": "Ustekinumab: a human monoclonal antibody to the p40 subunit shared by IL-12 and IL-23. It suppresses formation of proinflammatory TH1 and TH17 cells.",
"cite": "PCol slide 67",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smA-il-17",
"term": "IL-17",
"also": [],
"def": "One of the proinflammatory cytokines released by APCs, T cells and keratinocytes in psoriasis; an IL-17A inhibitor is on the psoriasis medication list.",
"cite": "Pathophys slide 21; Pathophys slide 22; Pathophys slide 28",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-il17-inhibitors",
"term": "IL-17 inhibitors",
"also": [
"IL-17 inhibitor",
"IL-17A inhibitor"
],
"def": "Monoclonal antibodies for plaque psoriasis. Secukinumab and ixekizumab bind the IL-17A cytokine; brodalumab binds the IL-17 receptor A.",
"cite": "PCol slide 65; PCol slide 66",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-il17a",
"term": "IL-17A",
"also": [
"IL-17",
"interleukin-17"
],
"def": "A cytokine whose major target in psoriasis is the keratinocyte. It increases keratinocyte expression of inflammatory cytokines, contributing to epidermal hyperproliferation and barrier dysfunction; elevated in psoriatic plaques.",
"cite": "PCol slide 65; PCol slide 66",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-il17a-inhibitor",
"term": "IL-17A inhibitor",
"also": [
"IL-17A inhibitors"
],
"def": "A drug class on Dr. Smith's list of medications for treating psoriasis; IL-17 is one of the proinflammatory cytokines released in psoriasis.",
"cite": "Pathophys slide 28; Pathophys slide 21",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-il17ra",
"term": "IL-17RA",
"also": [
"interleukin-17 receptor A",
"IL-17A receptor",
"IL-17 receptor A"
],
"def": "Interleukin-17 receptor A. Brodalumab binds it and blocks its interactions with IL-17A, IL-17F, IL-17C, the IL-17A/F heterodimer and IL-25.",
"cite": "PCol slide 66",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-il2",
"term": "IL-2",
"also": [
"interleukin-2",
"IL2"
],
"def": "The cytokine a CD4+ T cell transcribes after signals 1 and 2. It exits the T cell and binds CD25, the IL-2 receptor (signal 3), which starts T-cell proliferation.",
"cite": "PCol slide 25; PCol slide 26",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-il-23",
"term": "IL-23",
"also": [
"interleukin-23"
],
"def": "One of the proinflammatory cytokines released by APCs, T cells and keratinocytes in psoriasis; an IL-23 inhibitor is on the psoriasis medication list.",
"cite": "Pathophys slide 21; Pathophys slide 22; Pathophys slide 28",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-il23-inhibitors",
"term": "IL-23 inhibitors",
"also": [
"IL-23 inhibitor",
"IL-23 inhibitors"
],
"def": "Dr. Smith: Monoclonal antibodies (guselkumab, tildrakizumab, risankizumab) that bind the p19 subunit of IL-23 and inhibit release of proinflammatory cytokines and chemokines. Dr. Smith: A drug class on Dr. Smith's list of medications for treating psoriasis; IL-23 is one of the proinflammatory cytokines released in psoriasis.",
"cite": "PCol slide 68; PCol slide 69; Pathophys slide 28; Pathophys slide 21",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-il23",
"term": "IL-23 receptor antagonist",
"also": [
"Interleukin-23 (IL-23) receptor antagonist"
],
"def": "Slide 36's mechanism for icotrokinra. Interleukin-23 is a cytokine that binds the IL-23 receptor and activates the JAK-STAT signaling pathway.",
"cite": "DPAW slide 36; general: NCI Thesaurus C147535, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C147535?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-il4-il13",
"term": "IL-4 and IL-13",
"also": [],
"def": "Key cytokines that promote IgE synthesis and inflammatory cell recruitment. Dupilumab blocks the signaling of both.",
"cite": "PCol slide 64",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-il4r-il13r-antagonists",
"term": "IL-4 receptor alpha/IL-13 receptor antagonists",
"also": [
"interleukin-4 receptor alpha",
"IL-13 receptor antagonists",
"IL-4 receptor alpha antagonist"
],
"def": "A drug class on Dr. Smith's list of medications for atopic dermatitis; some atopic dermatitis therapies antagonize the TH2 cytokines.",
"cite": "Pathophys slide 17; Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-il4ra",
"term": "IL-4Rα",
"also": [
"IL-4Ralpha",
"IL-4ra",
"IL-4R alpha",
"IL-4 receptor alpha"
],
"def": "The receptor subunit shared by the IL-4 and IL-13 receptor complexes. Dupilumab binds it, blocking IL-4 signaling through the Type I receptor and IL-4 and IL-13 signaling through the Type II receptor.",
"cite": "PCol slide 64",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-imidazopyrrolopyridine",
"term": "imidazopyrrolopyridine",
"also": [],
"def": "The chemical class slide 8 gives for upadacitinib; the fused ring system is drawn in pink.",
"cite": "DPAW slide 8",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-immediate-pigmentation",
"term": "immediate pigmentation",
"also": [
"immediate pigment darkening"
],
"def": "UVA tanning in which pigment darkening starts 5 to 10 minutes after exposure and lasts 24 to 48 hours.",
"cite": "Smith Sun Exposure slide 10",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smA-immune-deviation-th2",
"term": "immune deviation toward TH2",
"also": [
"immune deviation"
],
"def": "A feature of atopic dermatitis pathophysiology: patients tend to have more TH2 than TH1 cells, and IgE subsequently increases.",
"cite": "Pathophys slide 13; Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-immunoglobulin",
"term": "immunoglobulin",
"also": [
"immunoglobulins"
],
"def": "A protein made by B cells and plasma cells, which are types of white blood cells, that helps the body fight infection.",
"cite": "Pathophys slide 16; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/immunoglobulin",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-immunosuppressant",
"term": "immunosuppressant",
"also": [
"immunosuppressants",
"immuno-suppressant"
],
"def": "An agent that decreases the body's immune responses; used in conditions marked by over-active immune responses, such as autoimmune diseases.",
"cite": "DPAW slide 14; DPAW slide 28; DPAW slide 30; DPAW slide 33; general: NCI Thesaurus C574, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C574?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-immunosuppression",
"term": "immunosuppression",
"also": [
"immunosuppressive"
],
"def": "Suppression of the body's immune system and its ability to fight infections and other diseases. UVA and UVB may cause it; psoralens with UVA have immunosuppressive effects.",
"cite": "Smith Sun Exposure slide 3; Smith Sun Exposure slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/immunosuppression",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-incidence",
"term": "incidence",
"also": [],
"def": "The number of new cases of a disease diagnosed each year.",
"cite": "Pathophys slide 10; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/incidence",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pA-iad",
"term": "incontinence-associated dermatitis",
"also": [
"IAD",
"incontinence associated dermatitis"
],
"def": "Dermatitis related to incontinence. Slide 59 lists prevention in adults: pH-neutral cleansing with patting, skin hydration, barrier cream, pressure sore prevention and good nutrition (protein, vitamin status).",
"cite": "Patel Dermatitis slide 55; Patel Dermatitis slide 59",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-rabies-incubation",
"term": "Incubation period",
"also": [
"incubation"
],
"def": "The symptom-free phase after exposure. Human rabies: 20 to 90 days with no symptoms; murine typhus: 6 to 14 days; warts: may be several months.",
"cite": "Patel Outdoor slide 61; Patel Outdoor slide 27; Patel Warts slide 5",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-indirect-action",
"term": "indirect action",
"also": [
"indirect mechanism"
],
"def": "Nuclear receptor action in which the drug-receptor complex binds a transcription factor and keeps it from binding DNA, which inhibits transcription of proteins. It requires only one drug-receptor complex.",
"cite": "PCol slide 5; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-inert",
"term": "inert",
"also": [],
"def": "Slide 61's word for the inorganic sunblocks: they do not irritate the skin.",
"cite": "DPAW slide 61",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-inflammation",
"term": "inflammation",
"also": [
"inflammatory",
"inflamed",
"anti-inflammatory"
],
"def": "Dr. Smith: The body's response to injury or infection, in which released chemicals trigger an immune response. Chronic inflammation does not end when it should. Dr. Sikazwe: Redness, swelling, pain and/or a feeling of heat in an area of the body; a protective reaction to injury, disease or irritation of the tissues.",
"cite": "Pathophys slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/inflammation; DPAW slide 4; DPAW slide 13; DPAW slide 41; general: NCI Thesaurus C3137, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3137?include=definitions",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-ibd",
"term": "inflammatory bowel disease",
"also": [
"IBD"
],
"def": "A general term for inflammation of the colon and rectum; it includes ulcerative colitis and Crohn disease. Listed as a less common side effect of isotretinoin.",
"cite": "PCol slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/inflammatory-bowel-disease",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-inflam-lesion",
"term": "inflammatory lesion",
"also": [
"inflammatory lesions",
"inflammatory acne"
],
"def": "Acne lesion with a plug and inflammation: the papule, the pustule and the nodule or cyst.",
"cite": "Patel Acne slide 5; Patel Acne slide 6",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-phase-inflammatory",
"term": "Inflammatory phase of wound healing",
"also": [
"inflammatory phase",
"inflammation phase"
],
"def": "The first phase, starting within minutes: hemostasis (platelets), then 'master cells' (as printed on her slide), neutrophils, monocytes and macrophages, which kill, phagocytose and clear wound debris.",
"cite": "Patel Wound slide 6; Patel Wound slide 27",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-infusion-reactions",
"term": "infusion reactions",
"also": [
"infusion reaction"
],
"def": "Reactions to infliximab infusion, acute (within 24 hours) or delayed (24 hours to 14 days): fever, chills, pruritus and rash. They result from antibodies to the drug; premedicate.",
"cite": "PCol slide 72",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-inorganic-particulates",
"term": "inorganic particulates",
"also": [
"microsize",
"nanosize"
],
"def": "The particles that make up sunblocks; they scatter or reflect radiation. Newer microsize and nanosize formulations are less opaque and more cosmetically appealing.",
"cite": "Smith Sun Exposure slide 20",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-insect-bite",
"term": "Insect bite",
"also": [
"insect bites"
],
"def": "A nonvenomous bite (mosquitoes, fleas, bedbugs, ticks, chiggers, most spiders). Local effects are mild pruritus, erythema and papules. Mosquitoes, fleas and ticks are disease vectors.",
"cite": "Patel Outdoor slide 20",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-insect-repellent",
"term": "Insect repellent",
"also": [
"repellent",
"repellents",
"insect repellant"
],
"def": "Applied to prevent bites. The slide lists DEET, picaridin, IR3535, oil of lemon eucalyptus, PMD and permethrin.",
"cite": "Patel Outdoor slide 21",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-insect-sting",
"term": "Insect sting",
"also": [
"insect stings",
"venomous sting"
],
"def": "A venomous sting (bees, wasps, yellow jackets, hornets, fire ants) that contains allergenic proteins. Local effects are pain, pruritus and irritation.",
"cite": "Patel Outdoor slide 20",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-intercalate",
"term": "intercalate",
"also": [
"intercalation",
"intercalates"
],
"def": "What psoralens do to DNA under UV light of 320 to 340 nm: they intercalate into the DNA strand, the start of the phototoxic reactions of PUVA.",
"cite": "PCol slide 78",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-intercalation",
"term": "intercalated DNA",
"also": [
"crosslink",
"crosslinks",
"crosslinking",
"cross-link",
"DNA crosslink"
],
"def": "Slide 18: psoralen sits between the DNA strands and, with light (hv), bonds covalently to pyrimidine bases on both; the slide labels this intercalated DNA, meaning disrupted DNA synthesis.",
"cite": "DPAW slide 18",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-interferon-gamma",
"term": "interferon-gamma",
"also": [
"interferon-γ",
"IFN-γ",
"IFN-gamma",
"interferon"
],
"def": "An interferon, a natural substance that helps the immune system fight infection and disease. TH1 cells produce it to suppress IgE production; it is also released in psoriasis.",
"cite": "Pathophys slide 16; Pathophys slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/interferon",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-interleukin",
"term": "interleukin",
"also": [
"interleukins"
],
"def": "One of a group of related proteins made by white blood cells and other cells that regulate immune responses. An interleukin is a type of cytokine.",
"cite": "Pathophys slide 16; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/interleukin",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "dz-intertriginous",
"term": "Intertriginous areas",
"also": [],
"def": "Skin folds, or surfaces of the skin that lie against each other.",
"cite": "Patel Scaly slide 12",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-intralesional",
"term": "intralesional",
"also": [],
"def": "Within an area of disease, for example within a tumor in the skin (NCI wording). The acne drug-mechanism figure lists intralesional corticosteroids against the inflammatory response.",
"cite": "Pathophys slide 36; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/intralesional",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-intrinsic",
"term": "intrinsic factors",
"also": [
"skin barrier integrity"
],
"def": "The center of slide 5's eczema figure: mutation and skin barrier integrity (filaggrin, tight junctions, lipids), surrounded by protective factors and risk factors.",
"cite": "DPAW slide 5",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-inverse-psoriasis",
"term": "inverse psoriasis",
"also": [],
"def": "Smooth patches of red, inflamed skin in the armpits, groin, under the breasts, around the genitals and in skin folds; worsened by friction and sweating.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-ipledge",
"term": "iPLEDGE",
"also": [
"iPledge"
],
"def": "The registration and follow-up system that must be used with isotretinoin, because teratogenicity is a significant risk.",
"cite": "PCol slide 19",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "smA-irritant",
"term": "irritant",
"also": [
"irritants"
],
"def": "A substance such as an acid, cleaning agent or other chemical that causes a contact reaction where it touches the skin.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-isoform",
"term": "isoform",
"also": [
"isoforms"
],
"def": "One of several forms of an enzyme. PDE4 is the predominant phosphodiesterase isoform in inflammatory cells.",
"cite": "PCol slide 32",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-isoindoline",
"term": "isoindoline",
"also": [
"isoindolines"
],
"def": "The chemical class slide 34 gives for apremilast (Otezla); the ring system is drawn in pink.",
"cite": "DPAW slide 34",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-iv",
"term": "IV",
"also": [
"intravenous",
"Intravenous",
"IV infusion"
],
"def": "Intravenous: into or within a vein, usually through a needle or tube. Infliximab is given by IV infusion.",
"cite": "PCol slide 69; PCol slide 72; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/intravenous",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "pC-ixodes",
"term": "Ixodes tick",
"also": [
"Ixodes",
"black-legged tick",
"black legged tick"
],
"def": "The black-legged tick; a bite from Ixodes species is one criterion for high Lyme disease risk.",
"cite": "Patel Outdoor slide 29",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "anatomy"
},
{
"id": "smB-jak",
"term": "JAK",
"also": [
"Janus kinase",
"janus kinase",
"JAK inhibitor",
"JAK inhibitors",
"JAK1",
"JAK2",
"JAK3"
],
"def": "Janus kinase. JAK inhibitors inhibit the production of inflammatory cytokines by inhibiting it. The slides name JAK1, JAK2, JAK3 and TYK2.",
"cite": "PCol slide 75; PCol slide 76",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-jak-inhibitor",
"term": "JAK inhibitor",
"also": [
"Janus kinase inhibitor",
"Janus kinase inhibitors",
"Janus kinase (JAK) inhibitor",
"Janus kinase (JAK) inhibitors"
],
"def": "Dr. Smith: Janus kinase inhibitor: a drug class on Dr. Smith's lists of medications for atopic dermatitis and for psoriasis. Dr. Sikazwe: A drug that inhibits Janus kinases, intracellular enzymes that pass on signals from certain cytokine receptors. On the slides: ruxolitinib, upadacitinib and tofacitinib.",
"cite": "Pathophys slide 17; Pathophys slide 28; DPAW slide 8; DPAW slide 10; DPAW slide 35; general: NCI Thesaurus C129387, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C129387?include=definitions",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-kaposi-sarcoma",
"term": "Kaposi sarcoma",
"also": [],
"def": "A cancer in which usually purple lesions grow in the skin, lymph nodes, lining of the mouth, nose and throat, and other tissues. RXR-targeting retinoids are used in it.",
"cite": "PCol slide 14; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/kaposi-sarcoma",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-keratin",
"term": "keratin",
"also": [
"keratins"
],
"def": "Dr. Smith: A type of protein found on epithelial cells; keratins help form the tissues of the hair, nails and the outer layer of the skin. Dr. Sikazwe: A family of cysteine-rich fibrous structural proteins that form tough filaments; the main component of intermediate filaments in the epidermis, hair and nails.",
"cite": "Pathophys slide 32; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/keratin; DPAW slide 46; general: NCI Thesaurus C20693, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C20693?include=definitions",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-keratinocyte",
"term": "keratinocyte",
"also": [
"keratinocytes"
],
"def": "Dr. Smith: The cells that make up the epidermis and produce the protein keratin. Normally they take 13 days to divide and 26 days to mature, migrate to the stratum corneum and shed. Dr. Sikazwe: Epidermal skin cells (slide 12).",
"cite": "Pathophys slide 13; Pathophys slide 23; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology; DPAW slide 12; DPAW slide 13",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-keratinocyte-hyperproliferation",
"term": "keratinocyte hyperproliferation",
"also": [
"hyperproliferation",
"hyperproliferate",
"cell proliferation",
"proliferation"
],
"def": "Dr. Smith: A defining feature of psoriasis: keratinocytes take 1.5 days to divide and 4 days to mature and shed, a 7-fold increase over the normal 13 and 26 days. Dr. Sikazwe: Excess multiplication of keratinocytes, a major component of psoriasis on slide 13; the matching treatment goal is to normalize cell proliferation.",
"cite": "Pathophys slide 19; Pathophys slide 21; Pathophys slide 23; DPAW slide 13",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-keratolytics",
"term": "keratolytics",
"also": [
"keratolytic",
"keratolytics"
],
"def": "Dr. Smith: Dr. Smith's class for benzoyl peroxide, sulfur and salicylic acid: agents that loosen keratinocytes and cause peeling of the stratum corneum. Dr. Smith: A drug class on Dr. Smith's list of medications for treating acne. Dr. Sikazwe: Agents that promote skin shedding (slide 42): glycolic acid (AHA), salicylic acid, sulfur and benzoyl peroxide.",
"cite": "PCol slide 35; PCol slide 36; PCol slide 38; PCol slide 39; Pathophys slide 37; DPAW slide 42",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-keratotic",
"term": "keratotic",
"also": [
"keratotic debris"
],
"def": "Describes horny scale. Salicylic acid causes desquamation of keratotic debris.",
"cite": "PCol slide 39; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-ketone",
"term": "ketone",
"also": [
"ketones"
],
"def": "Compounds in which a carbonyl group is bonded to two carbon atoms, R2C=O. On slide 26, cortisone has one at C11 where hydrocortisone has the 11β-OH.",
"cite": "DPAW slide 26; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/aldke.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-kinase",
"term": "kinase",
"also": [
"kinases"
],
"def": "A type of enzyme that adds phosphates to other molecules, such as proteins, which can make them active or inactive. The cAMP figure shows cAMP-dependent kinases; JAK is a kinase.",
"cite": "PCol slide 32; PCol slide 75; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/kinase",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-koebner-response",
"term": "Koebner response",
"also": [
"Koebner",
"Koebner phenomenon"
],
"def": "Psoriasis lesions beginning at previously clear sites on the skin as a result of trauma, such as friction, venipuncture, bites, surgery or pressure.",
"cite": "Pathophys slide 24",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-lactam",
"term": "lactam",
"also": [
"lactams"
],
"def": "Cyclic amides of amino carboxylic acids. It is an answer choice next to lactone in Polleve-3.",
"cite": "DPAW slide 32; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/oneN.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-lactone",
"term": "lactone",
"also": [
"lactones"
],
"def": "Cyclic esters of hydroxy carboxylic acids. Slide 28 heads pimecrolimus and tacrolimus as macrolide or lactone immunosuppressants.",
"cite": "DPAW slide 28; DPAW slide 32; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/carba.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-lanolin",
"term": "lanolin",
"also": [
"wool grease"
],
"def": "An emollient on slide 15: wool grease, made of fatty acid esters; odorous.",
"cite": "DPAW slide 15",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-lassar",
"term": "Lassar’s paste",
"also": [
"Lassar's paste",
"Lassar paste",
"Lassars paste"
],
"def": "Anthralin + zinc oxide + paraffin + salicylic acid (slide 17).",
"cite": "DPAW slide 17",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "dz-lentigines",
"term": "Lentigines",
"also": [],
"def": "Liver spots, freckles.",
"cite": "Patel Sun slide 40",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-lesion",
"term": "lesion",
"also": [
"lesions"
],
"def": "Any single area of altered skin; it may be solitary or multiple.",
"cite": "Pathophys slide 25; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pA-lft",
"term": "LFTs",
"also": [
"liver function tests"
],
"def": "Liver function tests, one of the lab tests (with triglycerides, cholesterol and CBC) monitored during isotretinoin treatment.",
"cite": "Patel Acne slide 37",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "measure",
"cs": true
},
{
"id": "pA-lichenification",
"term": "lichenification",
"also": [
"lichenified",
"lichenified plaque",
"lichenified plaques"
],
"def": "Slide 24: chronic atopic dermatitis shows lichenified papules or plaques with fine scale and hypo- or hyperpigmentation. In lecture Dr. Patel calls it a silvery, scaly plaque (T@18585 11/06).",
"cite": "Patel Dermatitis slide 21; Patel Dermatitis slide 24; T@18585 11/06",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-limus",
"term": "limus drug",
"also": [
"limus",
"-limus",
"limus drugs"
],
"def": "Polleve-3's word for pimecrolimus and tacrolimus, whose names end in -limus (underlined on slide 28).",
"cite": "DPAW slide 28; DPAW slide 32",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-lincomycin",
"term": "lincomycin class",
"also": [
"lincomycin",
"lincosamide"
],
"def": "Slide 54's class for clindamycin: a lincomycin, a sulfur antibiotic from S. lincolnensis.",
"cite": "DPAW slide 54",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pA-line",
"term": "line of treatment",
"also": [
"first-line",
"second-line",
"third-line",
"first line",
"second line",
"third line",
"2nd line",
"1st line"
],
"def": "The order of choice. Slide 38: topical calcineurin inhibitors are second line when steroids fail in mild-to-moderate AD; slide 41: crisaborole is third line if all other options fail.",
"cite": "Patel Dermatitis slide 38; Patel Dermatitis slide 41; Patel Acne slide 20",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-lipase",
"term": "lipase",
"also": [],
"def": "The enzyme produced by P. acnes that breaks down glyceride from sebum into free fatty acids.",
"cite": "Pathophys slide 33",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-lipid-soluble",
"term": "lipid soluble",
"also": [
"lipid-soluble"
],
"def": "Doxycycline and minocycline are the more lipid soluble tetracyclines, so they penetrate the pilosebaceous follicle more efficiently.",
"cite": "PCol slide 45",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-lipophilic",
"term": "lipophilic",
"also": [
"lipophilicity",
"lipid solubility",
"lipid solubilities"
],
"def": "Lipophilicity is the affinity of a molecule or a moiety for a lipophilic environment. Slide 28 says pimecrolimus and tacrolimus are similar in it; slide 43: salicylic acid is more lipophilic than glycolic acid.",
"cite": "DPAW slide 28; DPAW slide 43; DPAW slide 51; DPAW slide 66; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-live-vaccines",
"term": "live vaccines",
"also": [
"live vaccine"
],
"def": "Vaccines that use a weakened (attenuated) form of the germ that causes a disease. They should not be given with ustekinumab.",
"cite": "PCol slide 67; general: HHS, Vaccine Types, https://www.hhs.gov/vaccines/basics/types/index.html",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "smB-local-adverse-effects",
"term": "local adverse effects",
"also": [
"local adverse effect",
"topical side effects"
],
"def": "Adverse effects at the treated skin. For topical corticosteroids: striae, skin atrophy, perioral dermatitis, acne, rosacea, telangiectasias, purpura, focal hypertrichosis and allergic contact dermatitis (often from the vehicle).",
"cite": "PCol slide 12; PCol slide 22",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-logp",
"term": "log P",
"also": [
"logP",
"LogP",
"cLogP",
"clogP",
"log P value"
],
"def": "The slides' number for lipophilicity. Lipophilicity is commonly measured by the partition coefficient, the ratio of a dissolved substance between two phases such as octan-1-ol and water.",
"cite": "DPAW slide 7; DPAW slide 17; DPAW slide 18; DPAW slide 28; DPAW slide 33; DPAW slide 47; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html; NCI Thesaurus C20610, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C20610?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "measure"
},
{
"id": "smA-lupus",
"term": "lupus",
"also": [],
"def": "A chronic, inflammatory connective tissue disease that can affect the joints and many organs, including the skin. Dr. Smith's slide gives SPF above 40 for lupus.",
"cite": "Smith Sun Exposure slide 17; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/lupus",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-lyme-disease",
"term": "Lyme disease",
"also": [
"Borrelia burgdorferi"
],
"def": "Tick-borne infection (Borrelia burgdorferi) with an acute skin lesion, erythema migrans. Treated with doxycycline, amoxicillin or cefuroxime; azithromycin is second line.",
"cite": "Patel Outdoor slide 29",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-lymphoma",
"term": "lymphoma",
"also": [],
"def": "Cancer that begins in cells of the immune system. It appears in the black box warnings on the slides.",
"cite": "PCol slide 30; PCol slide 61; PCol slide 70; PCol slide 76; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/lymphoma",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-mab",
"term": "MAb",
"also": [
"MAbs"
],
"def": "Monoclonal antibody: a type of protein made in the laboratory that binds one substance in the body. Slide 37: poor oral bioavailability, low distribution, half-life 11-30 days, about 150 kDa.",
"cite": "DPAW slide 14; DPAW slide 37; general: NCI Thesaurus C20401, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C20401?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pA-mace",
"term": "MACE",
"also": [],
"def": "Boxed-warning risk of JAK inhibitors, defined on slide 46 as CV death, MI and stroke. Dr. Patel notes it appears often in cardiovascular treatment comparisons.",
"cite": "Patel Dermatitis slide 46; T@54703 11/06",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "class",
"cs": true
},
{
"id": "pA-maceration",
"term": "macerated skin",
"also": [
"maceration",
"macerated"
],
"def": "Dr. Patel: Softening and breaking down of skin from prolonged moisture exposure; it becomes soft, wrinkly and whitish. Slide 60 lists it among the additional criteria of incontinence-associated dermatitis. Dr. Patel: The soft white skin of a corn or callus after soaking the foot in warm water for 5 minutes; it is removed by gentle scrubbing.",
"cite": "Patel Dermatitis slide 60; general: NCBI MedGen, http://www.ncbi.nlm.nih.gov/medgen/108234; Patel Warts slide 17; Patel Wound slide 9",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smB-macrolides",
"term": "macrolides",
"also": [
"macrolide",
"macrolides",
"macrolide immunosuppressant",
"macrolide or lactone immunosuppressants"
],
"def": "Dr. Smith: The antibiotic class of erythromycin and azithromycin. They attach to the 50S ribosomal unit, prevent translocation and are bacteriostatic. Dr. Sikazwe: Macrocyclic lactones with a ring of twelve or more members. On the slides: pimecrolimus and tacrolimus (28) and erythromycin (54).",
"cite": "PCol slide 47; PCol slide 42; DPAW slide 28; DPAW slide 54; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/carba.html",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-macrophage",
"term": "macrophage",
"also": [
"macrophages"
],
"def": "A type of white blood cell that surrounds and kills microorganisms, removes dead cells and stimulates other immune cells. Macrophages and monocytes produce TNF alpha.",
"cite": "PCol slide 32; PCol slide 70; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/macrophage",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-maintenance-therapy",
"term": "maintenance therapy",
"also": [
"long duration maintenance therapy"
],
"def": "Long-duration treatment. The slide assigns low-potency topical corticosteroids to long duration maintenance therapy and stronger ones to short-term management of exacerbations.",
"cite": "PCol slide 11",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "pB-major-burn",
"term": "Major burn",
"also": [],
"def": "Needs referral: over 25% BSA superficial partial thickness (adult), over 20% (child), deep or full thickness over 10%, or any burn of eyes, ears, face or genitalia, plus inhalation or electrical burns.",
"cite": "Patel Wound slide 16",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "dz-malassezia",
"term": "Malassezia",
"also": [],
"def": "A yeast-like fungus that grows in the sebum of the skin; linked to dandruff and seborrheic dermatitis.",
"cite": "Patel Scaly slides 8, 13",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-malignancy",
"term": "malignancy",
"also": [
"malignancies"
],
"def": "A term for diseases in which abnormal cells divide without control and can invade nearby tissues; also called cancer.",
"cite": "PCol slide 30; PCol slide 67; PCol slide 70; PCol slide 76; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/malignancy",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-mast-cell",
"term": "mast cell",
"also": [
"mast cells"
],
"def": "A type of white blood cell found in connective tissue that releases histamine and other chemicals during allergic reactions.",
"cite": "Pathophys slide 16; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/mast-cell",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-med",
"term": "MED",
"also": [],
"def": "Minimal erythemal dose: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site.",
"cite": "Smith Sun Exposure slide 12",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure",
"cs": true
},
{
"id": "pB-healing-meds",
"term": "Medications that impede wound healing",
"also": [],
"def": "Chemotherapeutic agents delay the proliferation response. Corticosteroids impair the inflammatory response, interfere with fibrogenesis, angiogenesis, wound contraction and macrophage migration.",
"cite": "Patel Wound slide 23",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smA-melanin",
"term": "melanin",
"also": [
"melanin pigmentation"
],
"def": "Dr. Smith: The skin pigment produced by melanocytes. The amount in a person's skin is a risk factor for sun damage, and psoralens increase melanin pigmentation. Dr. Sikazwe: A pigment that gives color to skin and eyes and helps protect it from damage by ultraviolet light. Hydroquinone inhibits its biosynthesis (slide 67).",
"cite": "Smith Sun Exposure slide 3; Smith Sun Exposure slide 7; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology; DPAW slide 67; general: NCI Thesaurus C631, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C631?include=definitions",
"src": "general",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-melanocytes",
"term": "melanocytes",
"also": [
"melanocyte"
],
"def": "Pigment cells of the epidermis that produce melanin. The phototoxic reactions of psoralens with UVA stimulate them.",
"cite": "Pathophys slide 6; Smith Sun Exposure slide 3; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-melanogenesis",
"term": "melanogenesis",
"also": [],
"def": "The process that follows sunburn reddening over the next 2 to 3 days and results in a tan.",
"cite": "Smith Sun Exposure slide 11",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "dz-melasma",
"term": "Melasma",
"also": [],
"def": "A skin change from sun exposure on her slide 26; hydroquinone reduces this hyperpigmentation.",
"cite": "Patel Sun slides 26, 47",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-metabolism",
"term": "metabolism",
"also": [
"metabolized",
"metabolised",
"metabolize"
],
"def": "In medicinal chemistry, the biotransformation (chemical conversion by living organisms or enzymes) of xenobiotics, particularly drugs.",
"cite": "DPAW slide 8; DPAW slide 34; DPAW slide 35; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-metabolite",
"term": "metabolite",
"also": [
"metabolites",
"active metabolite",
"active metabolites"
],
"def": "Dr. Smith: A substance made or used when the body breaks down food, drugs or chemicals. Acitretin is a metabolite of etretinate; benzoyl peroxide is metabolized to benzoic acid. Dr. Sikazwe: Any intermediate or product resulting from metabolism. Slide 8: ruxolitinib has some active metabolites; slide 34: apremilast gives an -OH metabolite.",
"cite": "PCol slide 20; PCol slide 36; PCol slide 30; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/metabolite; DPAW slide 8; DPAW slide 34; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-metal-oxide",
"term": "metal oxides",
"also": [
"metal oxide"
],
"def": "Zinc oxide and titanium dioxide: slide 61 says they physically reflect or scatter light, are broad spectrum (UVA/B) and inert.",
"cite": "DPAW slide 61",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "dz-methemoglobinemia",
"term": "Methemoglobinemia",
"also": [],
"def": "A condition in which the blood holds methemoglobin, a form of hemoglobin that carries oxygen poorly. Her slides list it as the adverse effect of the \"caine\" topical anesthetics; with benzocaine that is absorbed systemically: risk of cyanosis, dyspnea, syncope, seizures, coma.",
"cite": "Patel Outdoor slide 12; Wound slide 14; the first sentence is the plain meaning",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-mtx-parts",
"term": "methotrexate's three parts",
"also": [
"glutamic acid",
"glutamic acid portion"
],
"def": "Slide 31 colors methotrexate's three parts: the pteridine ring, p-aminobenzoic acid and glutamic acid.",
"cite": "DPAW slide 31",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-triazine",
"term": "methoxybenzene and triazines",
"also": [
"triazine",
"triazines",
"methoxybenzene"
],
"def": "UVB/UVA sunscreen class of bemotrizinol (BEMT): photostable and lipophilic, but with no skin absorption because of its high molecular weight, 627.81 (slide 66).",
"cite": "DPAW slide 66",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-mhc-ii",
"term": "MHC II",
"also": [
"MHC class II",
"MHC"
],
"def": "The class II molecule on the antigen-presenting cell that, together with antigen, binds the T-cell receptor (signal 1).",
"cite": "PCol slide 25; PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-microcomedone",
"term": "microcomedone",
"also": [
"micro comedone",
"microcomedones"
],
"def": "The first lesion in the acne cascade, formed from a normal follicle by abnormal keratinization; with increased sebum production it becomes a closed comedone.",
"cite": "Pathophys slide 34",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-microemulsion",
"term": "microemulsion formulation",
"also": [
"microemulsion",
"modified cyclosporine"
],
"def": "The Neoral form of cyclosporine (modified cyclosporine). It has increased bioavailability compared with Sandimmune, so the two cannot be used interchangeably.",
"cite": "PCol slide 29",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-micronized",
"term": "micronized",
"also": [
"micronized formulations",
"micronized formulation"
],
"def": "A small-particle formulation of a sunblock (slide 61). The slide's photo compares nanosized ZnO particles with large ZnO particles on a face.",
"cite": "DPAW slide 61",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smB-mineralocorticoid",
"term": "mineralocorticoid",
"also": [
"mineralocorticoids"
],
"def": "One of the two types of endogenous corticosteroid produced by the adrenal cortex; the other type is the glucocorticoids.",
"cite": "PCol slide 8",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smA-minimal-erythemal-dose",
"term": "minimal erythemal dose",
"also": [
"minimal erythema dose"
],
"def": "Minimal erythemal dose: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site.",
"cite": "Smith Sun Exposure slide 12",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pB-minor-burn",
"term": "Minor burn",
"also": [],
"def": "Self-care range: under 15% BSA superficial burn (adult) or under 10% (child), or under 2% BSA deep partial or full thickness burn not involving eyes, ears, face or genitalia.",
"cite": "Patel Wound slide 16",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-mitochondria",
"term": "mitochondria",
"also": [],
"def": "Small structures in the cytoplasm of a cell that make most of the cell's energy. Anthralin may act on keratinocyte mitochondria, reducing mitotic activity.",
"cite": "PCol slide 55; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/mitochondria",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smB-moa",
"term": "MOA",
"also": [
"MoA"
],
"def": "Mechanism of action: how a drug produces its effect. The slides use the abbreviation and the full phrase as headings for the same thing.",
"cite": "PCol slide 32; PCol slide 53; PCol slide 36",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "pB-moderate-burn",
"term": "Moderate burn",
"also": [],
"def": "Needs referral: 15 to 25% BSA superficial partial thickness (adult), 10 to 20% (child), or 2 to 10% BSA deep partial or full thickness burn not involving eyes, ears, face or genitalia.",
"cite": "Patel Wound slide 16",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pB-moist-healing",
"term": "Moist healing environment",
"also": [
"moist wound healing"
],
"def": "A goal of wound treatment on her slides. Hydrocolloids and transparent films provide one; plain gauze and many adhesive bandages do not unless combined with another product.",
"cite": "Patel Wound slide 8; Patel Wound slide 9; Patel Wound slide 27",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smB-monoclonal-antibody",
"term": "monoclonal antibody",
"also": [
"monoclonal antibodies",
"monoclonals",
"monoclonal"
],
"def": "A protein made in the laboratory that binds to only one target (antigen) in the body. Dupilumab, the IL-17 and IL-23 inhibitors and most TNF-alpha inhibitors are monoclonal antibodies.",
"cite": "PCol slide 62; PCol slide 64; PCol slide 66; PCol slide 68; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/monoclonal-antibody",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-monocyte",
"term": "monocyte",
"also": [
"monocytes"
],
"def": "A type of white blood cell made in the bone marrow that travels to tissues and becomes a macrophage or dendritic cell. Macrophages/monocytes produce TNF alpha.",
"cite": "PCol slide 70; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/monocyte",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "pA-monotherapy",
"term": "monotherapy",
"also": [
"single therapy"
],
"def": "Treatment with a single agent. Topical antibiotics are never recommended alone; add benzoyl peroxide to reduce resistance.",
"cite": "Patel Acne slide 20; Patel Acne slide 25; Patel Acne slide 31",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pB-mosaic-wart",
"term": "Mosaic wart",
"also": [
"mosaic warts"
],
"def": "Multiple, closely grouped plantar warts on the feet. Not self-treatable.",
"cite": "Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-mosquito-borne",
"term": "Mosquito-borne disease",
"also": [
"mosquito-borne diseases",
"mosquito borne"
],
"def": "Infection spread by mosquitoes; prevention is key. Malaria worldwide; in the US mainly neuro-invasive or febrile viral diseases (West Nile, dengue, Zika and others).",
"cite": "Patel Outdoor slide 26",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-mucopolysaccharide",
"term": "mucopolysaccharide",
"also": [
"mucopolysaccharides"
],
"def": "Slide 69's class for hyaluronic acid, an endogenous mucopolysaccharide.",
"cite": "DPAW slide 69",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-mucous-membrane",
"term": "mucous membranes",
"also": [
"mucous membrane",
"mucosa"
],
"def": "The moist inner lining of some organs and body cavities, such as the nose and mouth. Topical retinoids and benzoyl peroxide are kept away from them.",
"cite": "PCol slide 16; PCol slide 37; PCol slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/mucous-membrane",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pA-multifactorial",
"term": "multifactorial",
"also": [],
"def": "Caused by several factors together. Acne depends on genetics, race, hormones, diet and environment.",
"cite": "Patel Acne slide 3",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-murine-typhus",
"term": "Murine typhus",
"also": [
"flea-borne disease",
"flea-borne diseases"
],
"def": "Flea-borne rickettsial disease in Texas; incubation 6 to 14 days; headache, fever, nausea and body aches, then a trunk rash spreading to arms and legs. Treated with doxycycline.",
"cite": "Patel Outdoor slide 27",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-mw",
"term": "MW",
"also": [
"molecular weight"
],
"def": "Molecular weight. Slide 66: bemotrizinol's high MW (627.81) stops skin absorption. Slide 69: high-MW hyaluronic acid stays on the skin surface, low-MW penetrates deeper.",
"cite": "DPAW slide 66; DPAW slide 69",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-myelosuppression",
"term": "myelosuppression",
"also": [
"acute myelosuppression"
],
"def": "A condition in which bone marrow activity is decreased, resulting in fewer red blood cells, white blood cells and platelets. Listed as a methotrexate side effect.",
"cite": "PCol slide 61; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/myelosuppression",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-n-alkylation",
"term": "N-alkylation",
"also": [
"N-alkyl",
"aromatic N-alkylation",
"N-CH3",
"N-methyl"
],
"def": "Attaching an alkyl group to a nitrogen. Slide 31: N-alkylation of the aromatic ring lowers methotrexate's activity, while its N-CH3 is essential for activity.",
"cite": "DPAW slide 31",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-nail-psoriasis",
"term": "nail psoriasis",
"also": [],
"def": "Psoriasis of the nails, with pitting, ridging, discoloration and onycholysis.",
"cite": "Pathophys slide 26",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-naphthoic-acid",
"term": "naphthoic acid derivative",
"also": [
"naphthoic acid"
],
"def": "The slide's chemical description of adapalene: a derivative of naphthoic acid that resembles retinoic acid.",
"cite": "PCol slide 18",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-necrosis",
"term": "necrosis",
"also": [],
"def": "The death of living tissues. TNF alpha has a role in necrosis and apoptosis.",
"cite": "PCol slide 70; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/necrosis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-nephrotoxicity",
"term": "nephrotoxicity",
"also": [
"nephrotoxic"
],
"def": "Being poisonous or damaging to the kidney. A side effect of both cyclosporine and tacrolimus.",
"cite": "PCol slide 30; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/nephrotoxic",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-neurodermatitis",
"term": "neurodermatitis",
"also": [],
"def": "Scaly patches on the head, lower legs, wrists or forearms caused by a localized itch, such as an insect bite, that become intensely irritated when scratched.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-neuropathy",
"term": "neuropathy",
"also": [
"neuropathies"
],
"def": "A nerve problem that causes pain, numbness, tingling, swelling or muscle weakness in different parts of the body. On the slide it is the tacrolimus-only side effect.",
"cite": "PCol slide 30; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neuropathy",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-neutropenia",
"term": "neutropenia",
"also": [],
"def": "A lower-than-normal number of neutrophils (a type of white blood cell) in the blood. A rare side effect of oral clindamycin.",
"cite": "PCol slide 46; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neutropenia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-neutrophil",
"term": "neutrophil",
"also": [
"neutrophils"
],
"def": "A type of white blood cell that helps the body fight infection and is one of the first immune cells to respond. Dapsone and metronidazole may act on neutrophils.",
"cite": "PCol slide 32; PCol slide 50; PCol slide 51; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neutrophil",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-nfkb",
"term": "NF-kB",
"also": [
"NF-κB",
"NF-kb",
"NFkB",
"nuclear factor kappa B"
],
"def": "Nuclear factor kappa B, one of the two example transcription factors that work with nuclear receptors. In indirect action the drug-receptor complex binds a transcription factor so it cannot bind DNA.",
"cite": "PCol slide 7; PCol slide 6; PCol slide 5",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-nfat",
"term": "NFAT",
"also": [],
"def": "The factor in the Golan figure that turns on the IL-2 gene. Inactive NFAT carries a phosphate; active calcineurin converts it to active NFAT, which enters the nucleus.",
"cite": "PCol slide 26",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "dz-nit",
"term": "Nit",
"also": [],
"def": "A louse egg.",
"cite": "Patel Outdoor slide 42",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-nit-comb",
"term": "Nit comb",
"also": [
"nit combing",
"FDA-approved nit comb"
],
"def": "A comb used to remove nits and dead lice; part the hair into segments and comb each area. Repeat treatment in 7 to 10 days if lice or nits are seen.",
"cite": "Patel Outdoor slide 43; Patel Outdoor slide 47",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smB-nk-cell",
"term": "NK cells",
"also": [
"NK cell",
"natural killer cell",
"natural killer cells"
],
"def": "Natural killer cells: immune cells with granules of enzymes that can kill tumor cells or virus-infected cells. They carry the IL-12 receptor that ustekinumab's target cytokines bind.",
"cite": "PCol slide 67; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/natural-killer-cell",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-nodule",
"term": "nodule",
"also": [
"nodules",
"nodule or cyst"
],
"def": "An elevated, solid, palpable lesion more than 1 cm, mainly in the deeper layers of the skin. In the acne cascade a foreign body response turns a papule into a nodule or cyst.",
"cite": "Pathophys slide 34; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-nonbiological",
"term": "non-biologicals",
"also": [
"non-biological",
"nonbiological",
"non-biologics"
],
"def": "Slide 14's first group of systemic psoriasis agents: methotrexate, cyclosporine, mycophenolate, Otezla (apremilast) and tofacitinib.",
"cite": "DPAW slide 14; DPAW slide 30",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pA-noninflam",
"term": "non-inflammatory lesion",
"also": [
"non-inflammatory",
"noninflammatory"
],
"def": "Acne lesion without inflammation: the normal follicle, the blackhead (open comedo) and the whitehead (closed comedo).",
"cite": "Patel Acne slide 5; Patel Acne slide 6",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-nonadherent-dressing",
"term": "Nonadherent dressing",
"also": [
"nonadherent dressings",
"non-adherent dressing"
],
"def": "A lightly coated porous gauze-type dressing that is less adherent than plain gauze; many do not give a moist healing environment, and a secondary dressing is needed to adhere to skin.",
"cite": "Patel Wound slide 8",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smB-nuclear-receptor",
"term": "nuclear receptor",
"also": [
"nuclear receptors"
],
"def": "A receptor that modulates protein synthesis, directly or indirectly, by inhibiting or promoting DNA transcription. The DEENT examples are the glucocorticoid receptor, RAR/RXR and the vitamin D receptor.",
"cite": "PCol slide 5; PCol slide 7",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-nuclear-receptor-binders",
"term": "nuclear receptor binders",
"also": [
"nuclear receptor binder"
],
"def": "Dr. Smith: Dr. Smith's heading for the drugs that act through nuclear receptors: the corticosteroids, the retinoids and the vitamin D analog calcipotriene. Dr. Smith: A drug class on Dr. Smith's lists of medications for treating psoriasis and for treating acne.",
"cite": "PCol slide 2; PCol slide 4; PCol slide 8; PCol slide 14; PCol slide 21; Pathophys slide 28; Pathophys slide 37",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smA-nummular-eczema",
"term": "nummular eczema",
"also": [
"nummular"
],
"def": "Coin-shaped patches of irritated skin, most common on the arms, back, buttocks and lower legs, that may be crusted, scaling and extremely itchy.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-o-demethylation",
"term": "O-demethylation",
"also": [
"O-demethylated",
"O-dealkylation",
"demethylation",
"O-deethylation"
],
"def": "The step slide 34 labels for apremilast: O-demethylation gives an -OH metabolite, which is then glucuronidated (O-Gluc). The slide notes 3A4 as the major enzyme.",
"cite": "DPAW slide 34",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pB-occlusive-dressing",
"term": "Occlusive dressing",
"also": [],
"def": "Hydrocolloid dressings are occlusive: impermeable to fluids, bacteria and gases, with a moist healing environment, but used for uninfected wounds only and they make assessment of the wound difficult.",
"cite": "Patel Wound slide 9",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pA-occlusive",
"term": "occlusive moisturizer",
"also": [
"occlusive",
"occlusive moisturizers"
],
"def": "A moisturizer that decreases moisture release from the skin; petrolatum products are the most effective and long lasting but can be greasy and uncomfortable. Apply right after a bath to trap moisture.",
"cite": "Patel Dermatitis slide 31; Patel Dermatitis slide 32",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smA-occupational-acne",
"term": "occupational acne",
"also": [],
"def": "Acne from excessive dirt, vaporized cooking oil or exposure to some industrial chemicals.",
"cite": "Pathophys slide 35",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "dz-ochronosis",
"term": "Ochronosis",
"also": [],
"def": "Skin discoloration that may be permanent: a serious side effect reported with hydroquinone skin-lightening products.",
"cite": "Patel Sun slide 48",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-oc",
"term": "OCs",
"also": [
"oral contraceptive",
"oral contraceptives",
"contraceptives",
"contraceptive"
],
"def": "Slide 52's estrogen combinations (ethinyl estradiol with norgestimate or drospirenone), which act against hormonal triggers of acne as hormonal adjunct therapy in females.",
"cite": "DPAW slide 52",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-off-label",
"term": "off label",
"also": [
"off-label"
],
"def": "The legal use of a prescription drug to treat a condition for which the FDA has not approved it. Topical calcineurin inhibitor use in psoriasis is off label.",
"cite": "PCol slide 27; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/off-label",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "dz-onycholysis",
"term": "Onycholysis",
"also": [],
"def": "Separation of the nail from the nail bed. Dr. Smith lists it with pitting, ridging and discoloration in nail psoriasis.",
"cite": "Smith Pathophys slide 26; the definition is the plain meaning, not from the slides",
"src": "slide",
"deck": "dz",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-open-comedone",
"term": "open comedone",
"also": [
"open comedones"
],
"def": "The acne lesion formed from a closed comedone when the pore dilates.",
"cite": "Pathophys slide 34",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-opportunistic-infection",
"term": "opportunistic infection",
"also": [
"opportunistic infections"
],
"def": "An infection caused by an organism that does not normally cause disease; it occurs in people with weakened immune systems.",
"cite": "PCol slide 30; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/opportunistic-infection",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-organic-sunscreens",
"term": "organic sunscreens",
"also": [
"organic sunscreen"
],
"def": "Organic compounds that absorb UV radiation in the UVB and/or UVA ranges and convert it to heat energy; products may combine several.",
"cite": "Smith Sun Exposure slide 22; Smith Sun Exposure slide 25",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "pC-ortho-aminobenzoic",
"term": "Ortho-aminobenzoic acid",
"also": [],
"def": "A chemical sunscreen ingredient on her slide (the avoid line also writes PABA). Avoid it with sensitive skin or previous allergic reactions; consider a GRASE sunscreen instead.",
"cite": "Patel Sun Exposure slide 16; Patel Sun Exposure slide 17",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "chemistry"
},
{
"id": "smB-osteopenia",
"term": "osteopenia",
"also": [],
"def": "Lower-than-normal bone mass or bone mineral density; a less severe form of bone loss than osteoporosis.",
"cite": "PCol slide 13; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/osteopenia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-otc",
"term": "OTC",
"also": [
"over the counter",
"over-the-counter"
],
"def": "Over the counter: available without a prescription, as in OTC moisturizers, OTC hydrocortisone and OTC acne products.",
"cite": "Patel Dermatitis slide 32; Patel Dermatitis slide 36",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "pB-medicated-shampoo",
"term": "OTC medicated shampoo",
"also": [
"medicated shampoo",
"medicated shampoos"
],
"def": "For moderate to severe dandruff: shampoos with pyrithione zinc, selenium sulfide or coal tar, left on the scalp 3 to 5 minutes, then rinsed well. Mild dandruff uses a non-medicated shampoo.",
"cite": "Patel Scaly slide 9",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smB-ototoxicity",
"term": "ototoxicity",
"also": [
"ototoxic"
],
"def": "Damage to the inner ear (cochlear and vestibular structures) from exposure to certain drugs or chemicals. The slide says minocycline can cause ototoxicity.",
"cite": "PCol slide 45; general: PMC, Mechanisms of Ototoxicity & Otoprotection, https://pmc.ncbi.nlm.nih.gov/articles/PMC8597902/",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-oxidant",
"term": "oxidant",
"also": [],
"def": "Benzoyl peroxide is an oxidant, so it has the potential to bleach hair or colored fabrics.",
"cite": "PCol slide 37",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-ozone",
"term": "ozone",
"also": [],
"def": "The atmospheric layer that, on slide 12, blocks 100% of UVC and 90% of UVB.",
"cite": "DPAW slide 12",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-ozone-layer",
"term": "ozone layer",
"also": [
"ozone"
],
"def": "The atmospheric layer that filters UV: about 90% of UVB but only minimally UVA. Its integrity is one factor affecting the UV index.",
"cite": "Smith Sun Exposure slide 7; Smith Sun Exposure slide 8",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-p19",
"term": "p19 subunit",
"also": [
"p19"
],
"def": "The subunit of IL-23 bound by guselkumab, tildrakizumab and risankizumab; binding stops its interaction with the IL-23 receptor.",
"cite": "PCol slide 68; PCol slide 69",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-p40",
"term": "p40 subunit",
"also": [
"p40"
],
"def": "The protein subunit of both IL-12 and IL-23. Ustekinumab binds it, preventing both cytokines from binding the IL-12 receptor b1 on CD4 T cells and NK cells.",
"cite": "PCol slide 67",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-paba",
"term": "PABA",
"also": [
"paraaminobenzoic acid",
"para-aminobenzoic acid",
"PABA",
"p-aminobenzoic acids",
"p-aminobenzoic acid"
],
"def": "Dr. Smith: Paraaminobenzoic acid, which bacteria use to synthesize folic acid. Sulfamethoxazole and dapsone compete with it. Dr. Sikazwe: p-Aminobenzoic acids, a UVB (280-315 nm) sunscreen class: PABA (rarely used) and padimate O (slide 63).",
"cite": "PCol slide 48; PCol slide 50; DPAW slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-pancytopenia",
"term": "pancytopenia",
"also": [],
"def": "A lower-than-normal number of red blood cells, white blood cells and platelets in the blood. Listed as a methotrexate side effect.",
"cite": "PCol slide 61; PCol slide 71; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pancytopenia",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smA-papillary-region",
"term": "papillary region",
"also": [
"papillary dermis"
],
"def": "The upper part of the dermis, directly beneath the epidermis.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-papule",
"term": "papule",
"also": [
"papules"
],
"def": "An elevated, solid, palpable lesion 1 cm or less in diameter. In the acne cascade a closed comedone becomes a papule.",
"cite": "Pathophys slide 25; Pathophys slide 34; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pC-rabies-paralytic",
"term": "Paralytic rabies",
"also": [],
"def": "Form of acute rabies in 20% of cases, lasting 2 to 10 days: flaccid paralysis of limbs progressing to quadriparesis with facial paralysis.",
"cite": "Patel Outdoor slide 61",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-paresthesia",
"term": "Paresthesia",
"also": [
"paresthesias",
"perioral paresthesias"
],
"def": "An abnormal touch sensation, such as burning or prickling, that occurs without an outside stimulus.",
"cite": "Patel Outdoor slide 58; Patel Outdoor slide 61; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/paresthesia",
"src": "general",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-partial-thickness",
"term": "Partial-thickness skin loss",
"also": [
"partial thickness",
"partial-thickness"
],
"def": "Skin loss through all of the epidermis and part of the dermis (stage 2 wound). Burns are also graded as superficial or deep partial thickness.",
"cite": "Patel Wound slide 5; Patel Wound slide 16",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-patch",
"term": "patch",
"also": [
"patches"
],
"def": "A large area of color change with a smooth surface. Atopic dermatitis shows red to brownish-gray patches.",
"cite": "Pathophys slide 11; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pA-pap",
"term": "patient assistance program",
"also": [
"patient assistance programs",
"manufacturer patient assistance"
],
"def": "Manufacturer programs and grant foundations that can provide medication access to patients with limited or no insurance coverage.",
"cite": "Patel Dermatitis slide 53",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pA-pcos",
"term": "PCOS",
"also": [
"polycystic ovary syndrome"
],
"def": "Polycystic ovary syndrome, a hormonal disorder affecting the ovaries. Slide 17 lists high suspicion of PCOS or another hormonal disorder as the exception to no routine endocrine testing.",
"cite": "Patel Acne slide 17; general: MedlinePlus, https://medlineplus.gov/polycysticovarysyndrome.html",
"src": "general",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "disease",
"cs": true
},
{
"id": "smB-pde4-inhibitors",
"term": "PDE-4 inhibitors",
"also": [
"PDE-4 inhibitor",
"PDE4 inhibitor",
"PDE4 inhibitors",
"phosphodiesterase 4 inhibitors",
"phosphodiesterase 4 inhibitor",
"PDE-4 inhibitors",
"PDE-4",
"PDE4"
],
"def": "Dr. Smith: Nonsteroidal anti-inflammatory drugs that inhibit phosphodiesterase 4. Cellular cAMP rises, which inhibits inflammatory cells. Crisaborole (topical) and apremilast (oral) are the products. Dr. Smith: Phosphodiesterase 4 inhibitor: a drug class on Dr. Smith's list of medications for atopic dermatitis.",
"cite": "PCol slide 32; PCol slide 33; PCol slide 34; Pathophys slide 17",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-pde4",
"term": "PDE4",
"also": [
"phosphodiesterase 4",
"phosphodiesterase-4"
],
"def": "The predominant phosphodiesterase isoform in inflammatory cells, including mast cells, eosinophils, neutrophils, T lymphocytes and macrophages.",
"cite": "PCol slide 32",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-pde4-site",
"term": "PDE4 active site",
"also": [
"active site"
],
"def": "Slide 7's CBDA figure: crisaborole's boron-oxygen group sits in the PDE4 active site beside the Zn2+ and Mg2+ ions held by histidine and aspartate residues.",
"cite": "DPAW slide 7",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-pde4",
"term": "PDE4 inhibitor",
"also": [
"PDE4 inhibition",
"phosphodiesterase (PDE4) inhibitor"
],
"def": "A drug that inhibits phosphodiesterase 4. The slides give the result as higher cAMP and fewer inflammatory cytokines. Crisaborole (slide 7) and apremilast (slide 34).",
"cite": "DPAW slide 7; DPAW slide 10; DPAW slide 34",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "dz-pediculicide",
"term": "Pediculicide",
"also": [],
"def": "A product that kills lice.",
"cite": "Patel Outdoor slides 44–45",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "dz-pediculosis",
"term": "Pediculosis",
"also": [],
"def": "Infestation with lice.",
"cite": "Patel Outdoor slides 41–42",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pA-peer-to-peer",
"term": "peer-to-peer conversation",
"also": [
"peer to peer",
"peer-to-peer"
],
"def": "A step taken with an appeal when a prior authorization is denied, to obtain coverage. Dr. Patel: it usually needs a provider statement of the drug's purpose and need; the PCP writes it in Texas.",
"cite": "Patel Dermatitis slide 53; T@66204 11/06",
"src": "lecture",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-peptide",
"term": "peptide",
"also": [
"peptides"
],
"def": "A compound of two or more amino acids where the alpha carboxyl group of one is bound to the alpha amino group of another. Slide 36: icotrokinra is a peptide.",
"cite": "DPAW slide 33; DPAW slide 36; DPAW slide 37; general: NCI Thesaurus C735, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C735?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-peptide-bond",
"term": "peptide bond formation",
"also": [
"peptide bond"
],
"def": "Step 2 of bacterial protein synthesis: the growing amino acid chain is joined to the next amino acid. In the Katzung figure chloramphenicol and macrolides block it.",
"cite": "PCol slide 42",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-periungual-wart",
"term": "Periungual wart",
"also": [
"periungual warts"
],
"def": "Thickened, fissured, cauliflower-textured skin around the nail plate, in people who bite their nails. Not self-treatable.",
"cite": "Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-peroxide",
"term": "peroxide",
"also": [
"peroxides",
"peroxide chemical class"
],
"def": "Compounds of structure ROOR. Slide 47 puts benzoyl peroxide in the peroxide chemical class; its CBDA is pH lowering and free radicals.",
"cite": "DPAW slide 47; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/alcoh.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-petrolatum",
"term": "petrolatum",
"also": [],
"def": "The emollient slide 15 calls most effective: hydrocarbons with more than 25 carbons.",
"cite": "DPAW slide 15",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-ppcp",
"term": "Pharmacist Patient Care Process",
"also": [
"PPCP",
"PCPP"
],
"def": "The process that frames Dr. Sikazwe's objectives; slide 3 lists them under its ASSESS and PLAN steps.",
"cite": "DPAW slide 3",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "pB-pharmacoeconomics",
"term": "Pharmacoeconomics",
"also": [
"pharmaco-economics"
],
"def": "Cost of a psoriasis treatment, counted as drug, administration, monitoring, adverse effects, failed treatment and days off work. Her slide says it can be significant ($1000s), even with insurance.",
"cite": "Patel Scaly slide 47",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "sk-pk",
"term": "pharmacokinetics",
"also": [
"pharmacokinetic",
"PK properties"
],
"def": "The study of absorption, distribution, metabolism and excretion (ADME) of bioactive compounds in a higher organism.",
"cite": "DPAW slide 3; DPAW slide 10; DPAW slide 17; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-phenol",
"term": "phenol",
"also": [
"phenols",
"phenolic"
],
"def": "Compounds having one or more hydroxy groups attached to a benzene or other arene ring. Slide 16 lists phenols in coal tar.",
"cite": "DPAW slide 16; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/alcoh.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-phosphatase",
"term": "phosphatase",
"also": [
"phosphatases"
],
"def": "An enzyme that removes phosphates from substrate proteins, as in the cAMP pathway figure.",
"cite": "PCol slide 32",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-pde",
"term": "phosphodiesterase",
"also": [
"phosphodiesterases",
"PDE"
],
"def": "An enzyme that hydrolyzes (breaks down) cAMP. PDE4 is the predominant PDE isoform in inflammatory cells.",
"cite": "PCol slide 32",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-photoaging",
"term": "photoaging",
"also": [
"photo-aging",
"photoageing"
],
"def": "Dr. Smith: Skin aging caused by the sun; the slide lists it, with immunosuppression and skin cancers, as something both UVB and UVA may cause. Dr. Sikazwe: Skin aging due to exposure to sunlight (slide 40).",
"cite": "Smith Sun Exposure slide 8; Smith Sun Exposure slide 14; DPAW slide 40",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-photoaging-features",
"term": "Photoaging features",
"also": [
"photodamaged skin",
"photodamage"
],
"def": "Compared with normal aging: atrophic skin, coarse wrinkles, leathery skin, lentigines, bronzed or yellow cobblestone appearance, telangiectasis, bruising, sun-induced dermatitis.",
"cite": "Patel Sun Exposure slide 40",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smB-photochemically-stable",
"term": "photochemically stable",
"also": [
"sun stable"
],
"def": "Said of adapalene: it is stable in light, so it may be used in combination with benzoyl peroxide.",
"cite": "PCol slide 18",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pB-photochemotherapy",
"term": "Photochemotherapy",
"also": [
"PUVA"
],
"def": "PUVA: oral psoralens plus UVA light. The psoralen cross-links with DNA in the presence of UVA and affects the immune response in skin and lymphocytes. Reserved for severe, refractory psoriasis.",
"cite": "Patel Scaly slide 44; Patel Scaly slide 45",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smA-photosensitivity",
"term": "photosensitivity",
"also": [
"photosensitivity reactions",
"photosensitivity reaction"
],
"def": "A condition in which the skin becomes very sensitive to sunlight or other ultraviolet light and may burn easily; certain medicines can cause it.",
"cite": "Smith Sun Exposure slide 18; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/photosensitivity",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-photosensitizing",
"term": "photosensitizing",
"also": [
"photosensitizing drugs",
"photosensitizing compounds",
"photosensitizer",
"non-photosensitizer",
"non-photosensitizing",
"photosensitivity",
"photosensitization"
],
"def": "Dr. Smith: Describes compounds such as psoralens, which are activated by light, and drugs that cause photosensitivity. Patients on photosensitizing drugs should use an SPF above 45. Dr. Sikazwe: Increased sensitivity of the skin to light exposure. On slide 16 coal tar is photosensitizing; shale tars and wood tars are not.",
"cite": "Smith Sun Exposure slide 3; Smith Sun Exposure slide 17; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/psoralen; DPAW slide 16; general: NCI Thesaurus C38004, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C38004?include=definitions",
"src": "general",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "dz-photosens",
"term": "Photosensitizing drug",
"also": [],
"def": "A medication associated with increased sun sensitivity. A patient who takes one uses sunscreen and protective clothing every day.",
"cite": "Patel Sun slides 10, 37",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-photostable",
"term": "photostable",
"also": [
"photostability",
"photodegradation",
"photodegrade",
"photodegrades",
"photo-degradation"
],
"def": "Not broken down by light. Slide 66 calls bemotrizinol photostable; slide 62 says avobenzone is rapidly degraded by UVA.",
"cite": "DPAW slide 62; DPAW slide 66",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-phototherapy",
"term": "phototherapy",
"also": [],
"def": "The treatment of a disorder by exposure to light, including ultraviolet radiation. Slide 16: coal tar may be used with UVB; slide 18: psoralen with UVA (PUVA).",
"cite": "DPAW slide 16; DPAW slide 18; general: NCI Thesaurus C15301, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C15301?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-phototoxic",
"term": "phototoxic",
"also": [
"phototoxic reaction",
"phototoxic reactions",
"phototoxicity"
],
"def": "Phototoxicity is skin made very sensitive to light by certain drugs or topical agents, causing sunburn and blisters. UVA is responsible for most phototoxic reactions with drugs and chemicals.",
"cite": "Smith Sun Exposure slide 3; Smith Sun Exposure slide 8; Smith Sun Exposure slide 25; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/phototoxicity",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-physical-sunscreen",
"term": "Physical sunscreen",
"also": [
"physical sunscreens"
],
"def": "Opaque; reflects and scatters UVR rays, giving broad spectrum coverage. Zinc oxide and titanium dioxide.",
"cite": "Patel Sun Exposure slide 16",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pB-pga",
"term": "Physician Global Assessment",
"also": [
"PGA"
],
"def": "One of the measures of symptoms and involvement listed for psoriasis, along with BSA, PASI, PSI and DLQI.",
"cite": "Patel Scaly slide 31",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-pilosebaceous-unit",
"term": "pilosebaceous unit",
"also": [
"pilosebaceous units",
"pilosebaceous"
],
"def": "Dr. Smith: The skin structure containing a hair and its sebaceous gland. Acne vulgaris is a disease of the pilosebaceous units. Dr. Sikazwe: A small hair follicle plus its sebaceous gland (slide 40).",
"cite": "Pathophys slide 30; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology; DPAW slide 40",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pC-pit-viper",
"term": "Pit viper",
"also": [
"pit vipers",
"Crotalidae",
"crotaline",
"Agkistrodon"
],
"def": "Crotalidae snakes in Texas: copperheads and water moccasins (Agkistrodon) and rattlesnakes (Crotalus). Venom has about 50 toxic compounds; up to 30% of bites are dry.",
"cite": "Patel Outdoor slide 54; Patel Outdoor slide 56",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-placebo",
"term": "placebo effect",
"also": [
"placebo"
],
"def": "A placebo is an inactive substance that looks the same as, and is given the same way as, an active drug. The slide says coal tar's effect may be due to placebo effect.",
"cite": "PCol slide 53; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/placebo",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "pC-plant-contact-dermatitis",
"term": "Plant contact dermatitis",
"also": [
"plant dermatitis",
"poison ivy dermatitis"
],
"def": "A rash from urushiol on the skin. Early lesions are small blisters (vesicles) in a line where skin brushed the plant; itching, erythema, vesicles and papules follow. It resolves in 1 to 3 weeks.",
"cite": "Patel Outdoor slide 7; Patel Outdoor slide 10; Patel Outdoor slide 11",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-plantar-wart",
"term": "Plantar wart (verruca plantaris)",
"also": [
"verruca plantaris",
"plantar warts"
],
"def": "On the feet; skin-colored, flat, callus-like, hyperkeratotic lesions that disrupt normal skin markings; adolescents and young adults. Self-treatable.",
"cite": "Patel Warts slide 5; Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smA-plaque",
"term": "plaque",
"also": [
"plaques"
],
"def": "A circumscribed, palpable skin lesion more than 1 cm in diameter; most plaques are elevated. Psoriasis shows thickened, erythematous, scaly plaques.",
"cite": "Pathophys slide 19; Pathophys slide 25; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pB-plaque-psoriasis",
"term": "Plaque psoriasis",
"also": [],
"def": "The most common type (over 80% of psoriasis). Plaques are erythematous, red-violet, at least 0.5 cm, well demarcated and covered by silver, flaking scales, often at knees and elbows.",
"cite": "Patel Scaly slide 21; Patel Scaly slide 26",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pA-pmh",
"term": "PMH",
"also": [],
"def": "Past medical history, listed in the case with current medications.",
"cite": "Patel Dermatitis slide 26",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "pC-poison-control",
"term": "Poison control center",
"also": [
"poison control",
"1-800-222-1222"
],
"def": "24/7 hotline, 1-800-222-1222, for supportive care, treatment suggestions and monitoring, from envenomations to regular overdoses.",
"cite": "Patel Outdoor slide 65; Patel Outdoor slide 56",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-polyacrylamide-bases",
"term": "polyacrylamide bases",
"also": [
"polyacrylamide"
],
"def": "Sunscreen bases with good substantivity because they are not easily washed off.",
"cite": "Smith Sun Exposure slide 19",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-peg",
"term": "polyethylene glycol",
"also": [
"pegol"
],
"def": "The molecule attached to the Fab fragment in certolizumab pegol.",
"cite": "PCol slide 74",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-post-scabies-pruritus",
"term": "Post-scabies pruritus",
"also": [
"pruritus after scabies"
],
"def": "Itching can last 4 weeks after scabies treatment because of hypersensitivity reactions; oral antihistamines and topical steroids relieve it.",
"cite": "Patel Outdoor slide 51",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "dz-pep",
"term": "Postexposure prophylaxis (PEP)",
"also": [],
"def": "Treatment given after an exposure to prevent the disease: for rabies, wound cleansing, vaccine and, if not previously vaccinated, immune globulin.",
"cite": "Patel Outdoor slide 63",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smB-potency",
"term": "potency",
"also": [
"low-potency",
"low potency",
"medium-potency",
"mid-strength",
"high-potency",
"high potency"
],
"def": "Strength grade of a topical corticosteroid. Low potency (hydrocortisone 1%) for the face and long maintenance; medium (betamethasone valerate 0.1%) for the body; mid-strength and high potency for short-term management of exacerbations.",
"cite": "PCol slide 11",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "sk-potency",
"term": "potency ranking",
"also": [
"super-potent",
"superpotent",
"potent",
"potency rankings"
],
"def": "Slide 25: topical glucocorticoids are ranked super-potent, potent, medium and low potency, based on structure, delivery vehicle and concentration (% in formulation).",
"cite": "DPAW slide 25",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "measure"
},
{
"id": "dz-ppd",
"term": "PPD",
"also": [],
"def": "The tuberculosis skin test: injected into the skin, then read as a positive or negative reaction.",
"cite": "11/11 lecture",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-prevalence",
"term": "prevalence",
"also": [
"lifetime prevalence"
],
"def": "A measure of the total number of people in a specific group who have, or had, a disease at a specific point in time or during a given period.",
"cite": "Pathophys slide 10; Pathophys slide 31; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/prevalence",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pA-prior-auth",
"term": "prior authorization",
"also": [
"prior authorizations"
],
"def": "An insurer coverage requirement for a treatment, listed with step therapy. If it is denied, appeals and peer-to-peer conversations are the next step to obtain coverage.",
"cite": "Patel Dermatitis slide 53; T@47367 11/06",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-rabies-prodrome",
"term": "Prodrome",
"also": [
"prodromal"
],
"def": "Second phase of human rabies, 2 to 10 days: fever, malaise, anorexia, nausea and vomiting; paresthesias, pain or pruritus at the wound site.",
"cite": "Patel Outdoor slide 61",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-prodrug",
"term": "prodrug",
"also": [
"prodrugs",
"pro-drug"
],
"def": "Any compound that undergoes biotransformation before exhibiting its pharmacological effects. On the slides: tazarotene, etretinate (ethyl ester prodrugs) and cyclosporin (\"prodrug\").",
"cite": "DPAW slide 33; DPAW slide 50; DPAW slide 51; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-profilaggrin",
"term": "profilaggrin",
"also": [],
"def": "The protein encoded by the filaggrin gene (FLG); it degrades to filaggrins.",
"cite": "Pathophys slide 15",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pB-phase-proliferative",
"term": "Proliferative phase of wound healing",
"also": [
"proliferative phase",
"proliferation phase"
],
"def": "The second phase: keratinocytes resurface the skin (reepithelialization), and endothelial cells and fibroblasts restore the dermis (angiogenesis, fibroplasia).",
"cite": "Patel Wound slide 6; Patel Wound slide 27",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-p-acnes",
"term": "Propionibacterium acnes",
"also": [
"P. acnes",
"Cutibacterium acnes",
"C. acnes"
],
"def": "Dr. Smith: The bacterium that colonizes the follicular duct in acne. It produces lipase, which breaks sebum glyceride into free fatty acids, and has an antigenic effect. Dr. Sikazwe: The principal acne bacteria (slide 40).",
"cite": "Pathophys slide 32; Pathophys slide 33; DPAW slide 40; DPAW slide 41",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-prostaglandins",
"term": "prostaglandins",
"also": [
"prostaglandin"
],
"def": "Hormone-like substances made by the body that control processes within the tissues where they are made. Released in sunburn with histamine and cytokines.",
"cite": "Smith Sun Exposure slide 11; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/prostaglandin",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-protein-binding",
"term": "protein binding",
"also": [
"skin protein binding",
"protein bound",
"plasma protein binding"
],
"def": "Attachment of a drug to proteins. Slide 26 gives it as the reason for hydrocortisone's 8-12 h DoA; slide 28: pimecrolimus has higher non-specific skin protein binding than tacrolimus.",
"cite": "DPAW slide 26; DPAW slide 28",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-proteolysis",
"term": "proteolysis",
"also": [
"protease degradation",
"proteolytic"
],
"def": "Hydrolysis of peptide bonds in a protein, forming smaller polypeptides. Slide 37: MAbs are eliminated as short peptides after proteolysis, not intact through the kidneys.",
"cite": "DPAW slide 37; general: NCI Thesaurus C18105, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C18105?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-pruritus",
"term": "pruritus",
"also": [
"pruritic",
"pruritis"
],
"def": "Itching. It is the primary symptom of atopic dermatitis.",
"cite": "Pathophys slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pruritus",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-pseudomembranous-colitis",
"term": "pseudomembranous colitis",
"also": [],
"def": "Swelling or inflammation of the large intestine (colon) due to an overgrowth of Clostridioides difficile bacteria. A side effect of oral tetracyclines and of clindamycin.",
"cite": "PCol slide 44; PCol slide 46; general: MedlinePlus Medical Encyclopedia, Pseudomembranous colitis, https://medlineplus.gov/ency/article/000259.htm",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-psoralens",
"term": "psoralens",
"also": [
"psoralen",
"psoralen chromophores",
"8-MOP",
"8-methoxypsoralen"
],
"def": "Dr. Smith: Photosensitizing compounds (methoxsalen) combined with UVA light in PUVA. With UV light of 320 to 340 nm they intercalate into the DNA strand. Dr. Smith: Photosensitizing compounds that, with UV light of 320 to 340 nm, intercalate into the DNA strand; combined with UVA light in PUVA. Methoxsalen is the example. Dr. Sikazwe: Furanocoumarins used with UVA light (PUVA), for example 8-methoxypsoralen (8-MOP). Slide 18: antiproliferative, bind covalently to DNA pyrimidine bases and lower DNA synthesis.",
"cite": "PCol slide 78; PCol slide 77; Smith Sun Exposure slide 3; Pathophys slide 28; DPAW slide 18",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-psoriasis",
"term": "psoriasis",
"also": [
"psoriatic"
],
"def": "Dr. Smith: A chronic, T-cell-mediated systemic inflammatory disease with recurrent exacerbations and remissions of thickened, erythematous, scaly plaques; keratinocytes hyperproliferate and differentiate incompletely. Dr. Sikazwe: A chronic disease of the skin marked by red patches covered with white scales. Slide 13's components: keratinocyte hyperproliferation, inflammation and an autoimmune response.",
"cite": "Pathophys slide 19; DPAW slide 11; DPAW slide 13; DPAW slide 34; general: NCI Thesaurus C3346, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3346?include=definitions",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "pB-pasi",
"term": "Psoriasis Area and Severity Index",
"also": [
"PASI"
],
"def": "One of the measures of symptoms and involvement listed for psoriasis. A PASI over 10 is one criterion for severe psoriasis.",
"cite": "Patel Scaly slide 31",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pB-psoriasis-severity",
"term": "Psoriasis severity",
"also": [
"severity of psoriasis"
],
"def": "Slide: mild BSA under 5%, moderate over 8%, severe over 10% (or PASI or DLQI over 10). On 11/11 she said 5% or less, 8% or more, 10% or more, and to follow the slide.",
"cite": "Patel Scaly slide 31; 11/11 lecture",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pB-psi",
"term": "Psoriasis Symptom Inventory",
"also": [
"Psoriasis symptom inventory",
"psoriasis symptom inventory",
"PSI"
],
"def": "One of the measures of symptoms and involvement listed for psoriasis, along with BSA, PASI, PGA and DLQI.",
"cite": "Patel Scaly slide 31",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure",
"cs": true
},
{
"id": "smA-psoriasis-vulgaris",
"term": "psoriasis vulgaris",
"also": [],
"def": "Plaque psoriasis, the most common form (about 80%): sharply demarcated erythematous papules covered with thick silvery scales, mostly on elbows, knees, sacrum, limbs, hands and scalp.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-psoriatic-arthritis",
"term": "psoriatic arthritis",
"also": [],
"def": "Dr. Smith: Asymmetric joint involvement in the hands, feet and knees; skin lesions usually come first, and it lacks the rheumatoid factors and autoantibodies seen in rheumatoid arthritis. Dr. Sikazwe: Joint inflammation associated with psoriasis. Slide 34 lists it with moderate to severe plaque psoriasis as uses of apremilast.",
"cite": "Pathophys slide 26; DPAW slide 34; general: NCI Thesaurus C61277, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C61277?include=definitions",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-pteridine",
"term": "pteridine",
"also": [
"pteridines",
"pteridine ring"
],
"def": "The chemical class slide 30 gives for methotrexate; slide 31 draws the fused two-ring nitrogen system in brown and says it should remain aromatic.",
"cite": "DPAW slide 30; DPAW slide 31",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-pterygium",
"term": "Pterygium",
"also": [],
"def": "A noncancerous growth that starts in the clear, thin tissue (conjunctiva) of the eye.",
"cite": "Patel Sun Exposure slide 26; general: MedlinePlus, https://medlineplus.gov/ency/article/001011.htm",
"src": "general",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "anatomy"
},
{
"id": "pC-pubic-lice",
"term": "Pubic lice",
"also": [
"Phthirus pubis"
],
"def": "Lice of the pubic area (Phthirus pubis), spread by sexual contact or shared bedding or clothing.",
"cite": "Patel Outdoor slide 42",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-purine",
"term": "purine nucleotides",
"also": [
"purine",
"purines"
],
"def": "Purines are compounds cells use to make the building blocks of DNA and RNA. Tetrahydrofolate is needed for their de novo synthesis, which methotrexate stops.",
"cite": "PCol slide 59; PCol slide 60; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/purine",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-purpura",
"term": "purpura",
"also": [],
"def": "Bleeding into the skin, as small red, purple or brown spots or as bruises; it does not blanch with pressure. Listed as a local adverse effect of topical corticosteroids.",
"cite": "PCol slide 12; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smA-pustular-psoriasis",
"term": "pustular psoriasis",
"also": [
"von Zumbusch"
],
"def": "A generalized eruption of painful erythematous plaques with rows or clusters of yellow pustules, with fever and malaise; generalized or localized to the palms and soles.",
"cite": "Pathophys slide 25",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smA-pustule",
"term": "pustule",
"also": [
"pustules"
],
"def": "A circumscribed lesion that contains pus. In the acne cascade a papule can become a pustule.",
"cite": "Pathophys slide 25; Pathophys slide 34; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smB-puva",
"term": "PUVA",
"also": [
"PUVA therapy"
],
"def": "Dr. Smith: Treatment that combines UVA light with psoralens. The phototoxic reactions stimulate melanocytes and induce antiproliferative, immunosuppressive and anti-inflammatory effects. Dr. Smith: Treatment that combines UVA light with photosensitizing compounds called psoralens. Dr. Sikazwe: Psoralen plus ultraviolet A light (315-400 nm).",
"cite": "PCol slide 78; Smith Sun Exposure slide 3; DPAW slide 12; DPAW slide 18",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "sk-pyrimidine",
"term": "pyrimidine bases",
"also": [
"pyrimidine",
"pyrimidines",
"pyrimidine base"
],
"def": "One of two classes of nitrogen bases found in DNA and RNA; in DNA the pyrimidines are cytosine and thymine. Psoralens bind covalently to them (slide 18).",
"cite": "DPAW slide 18; general: NCI Thesaurus C789, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C789?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-pyrrolopyrimidine",
"term": "pyrrolopyrimidine",
"also": [
"pyrrolopyrimidines"
],
"def": "The chemical class the slides give for ruxolitinib and tofacitinib; slide 8 draws the fused ring system in blue.",
"cite": "DPAW slide 8; DPAW slide 35",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-rabies",
"term": "Rabies",
"also": [
"rabid animal",
"rabid"
],
"def": "Infection from the saliva of a rabid animal, usually a bite (raccoons, bats, foxes, skunks, cats, dogs); scratches or contaminated open wounds are rare. Untreated rabies is fatal.",
"cite": "Patel Outdoor slide 62",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pC-rabies-vaccination-status",
"term": "Rabies vaccination status",
"also": [
"previously vaccinated",
"not previously vaccinated"
],
"def": "Not previously vaccinated: wound cleansing, HRIG 20 IU/kg and vaccine days 0, 3, 7, 14. Previously vaccinated: no HRIG, vaccine only on days 0 and 3.",
"cite": "Patel Outdoor slide 63",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-rar",
"term": "RAR",
"also": [
"RARs",
"retinoic acid receptor",
"retinoic acid receptors"
],
"def": "Retinoic acid receptor. Retinoids that target RARs mainly affect cellular differentiation and proliferation and are used to treat acne, psoriasis and photoaging.",
"cite": "PCol slide 14; PCol slide 7",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "sk-rar",
"term": "RAR and RXR",
"also": [
"retinoic receptors",
"retinoid X receptor"
],
"def": "The retinoic receptors; slide 48 says retinoids are their agonists, with anti-inflammatory, anti-proliferative, sebum-lowering and teratogenic effects.",
"cite": "DPAW slide 48",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-rare",
"term": "RARE",
"also": [
"retinoic acid response element"
],
"def": "Retinoic acid response element: the DNA site the RAR-RXR heterodimer binds in the nucleus to affect gene transcription.",
"cite": "PCol slide 7; PCol slide 14",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "sk-receptor",
"term": "receptor",
"also": [
"receptors"
],
"def": "A molecule or polymeric structure in or on a cell that specifically recognizes and binds a compound acting as a molecular messenger, such as a hormone or a drug.",
"cite": "DPAW slide 23; DPAW slide 36; DPAW slide 48; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-refractory",
"term": "refractory",
"also": [
"refractory option"
],
"def": "Not adequately controlled with other treatment. Slide 46 calls JAK inhibitors the option for people whose disease is not adequately controlled with other systemic or biologic therapy.",
"cite": "Patel Dermatitis slide 46; Patel Acne slide 37",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-remission",
"term": "remission",
"also": [
"remissions"
],
"def": "A decrease in or disappearance of the signs and symptoms of a disease (the NCI entry words it for cancer). Psoriasis runs in recurrent exacerbations and remissions.",
"cite": "Pathophys slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/remission",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "pB-phase-remodeling",
"term": "Remodeling phase of wound healing",
"also": [
"remodeling phase"
],
"def": "The last phase, lasting weeks to months: epidermis matures, myofibroblasts contract the wound, and apoptosis and scar maturation occur.",
"cite": "Patel Wound slide 6; Patel Wound slide 27",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "dz-rems",
"term": "REMS",
"also": [],
"def": "Risk Evaluation and Mitigation Strategy: a safety program the prescriber and patient must complete before the drug is dispensed.",
"cite": "plain meaning, not from the slides",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-resp-failure",
"term": "Respiratory failure",
"also": [
"respiratory failure"
],
"def": "On the pit viper adverse effects table, respiratory failure means requiring mechanical ventilation.",
"cite": "Patel Outdoor slide 55",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smB-response-element",
"term": "response element",
"also": [
"response elements",
"promoter region"
],
"def": "The DNA binding site of a nuclear receptor's drug-receptor complex; the slide also calls it the promoter region. Examples are GRE, RARE and TRE.",
"cite": "PCol slide 5; PCol slide 7",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-reticular-region",
"term": "reticular region",
"also": [
"reticular dermis"
],
"def": "The lower part of the dermis, below the papillary region and above the hypodermis.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smB-retinoids",
"term": "retinoids",
"also": [
"retinoid",
"retinoids"
],
"def": "Dr. Smith: Drugs with vitamin A-like biological activity. They affect gene expression by binding two families of receptors, RARs and RXRs; used for acne, psoriasis and wrinkles. Dr. Smith: Vitamin A or vitamin A-like compounds. Dr. Smith lists them as the psoriasis medications that affect cell turnover. Dr. Sikazwe: Vitamin A analogs (slide 40), derivatives of vitamin A1, retinol (slide 48); RAR and RXR agonists that normalize keratinization and proliferation.",
"cite": "PCol slide 14; PCol slide 15; Pathophys slide 27; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/retinoid; DPAW slide 29; DPAW slide 40; DPAW slide 48",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pC-retinoids-photoaging",
"term": "Retinoids for photoaging",
"also": [
"topical retinoids"
],
"def": "Increase keratinocyte division, build collagen and elastic fibers, reduce melanin. Benefit takes months. Side effects: dryness, scaling, phototoxicity; use SPF 30+ by day.",
"cite": "Patel Sun Exposure slide 43; Patel Sun Exposure slide 44",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "sk-retinol",
"term": "retinol",
"also": [
"vitamin A1",
"vitamin A"
],
"def": "Vitamin A1, the parent compound of the retinoids (slides 48-49).",
"cite": "DPAW slide 48; DPAW slide 49",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-rhabdomyolysis",
"term": "Rhabdomyolysis",
"also": [],
"def": "On the pit viper adverse effects table, defined as CPK of 1,000 IU/L or higher.",
"cite": "Patel Outdoor slide 55",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pC-rickettsial-spotted-fevers",
"term": "Rickettsial spotted fevers",
"also": [
"Rocky Mountain spotted fever",
"rickettsial infection"
],
"def": "Rocky Mountain, Gulf Coast, Pacific Coast and rickettsialpox. Doxycycline treats all suspected cases, continued at least 3 days after the fever subsides and clinical improvement.",
"cite": "Patel Outdoor slide 30",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "sk-ros",
"term": "ROS",
"also": [
"reactive oxygen species"
],
"def": "Reactive oxygen species; superoxide is one. Oxygen radicals contain an oxygen atom with an unpaired electron, which makes them highly reactive with other molecules.",
"cite": "DPAW slide 17; general: NCI Thesaurus C852, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C852?include=definitions; NCI Thesaurus C1421, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C1421?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-rosacea",
"term": "rosacea",
"also": [],
"def": "A long-term disease that affects the skin and sometimes the eyes; it can range from redness in the face to acne and thickened skin.",
"cite": "PCol slide 12; PCol slide 57; PCol slide 51; general: MedlinePlus, Rosacea, https://medlineplus.gov/rosacea.html",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "smB-rxr",
"term": "RXR",
"also": [
"RXRs"
],
"def": "The second family of retinoid receptors. Retinoids that target RXRs mainly induce apoptosis and are used in cancers such as Kaposi sarcoma. RXR also pairs with RAR and with the vitamin D receptor.",
"cite": "PCol slide 14; PCol slide 21; PCol slide 7",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-salicylates",
"term": "salicylates",
"also": [
"salicylate"
],
"def": "Dr. Smith: An organic sunscreen family that does not adhere to the skin well and is easily removed by water or perspiration. Dr. Sikazwe: UVB (280-315 nm) sunscreen class: homosalate and octisalate. Slide 64: the salicylic acid functional group absorbs UVB and provides analgesia.",
"cite": "Smith Sun Exposure slide 24; DPAW slide 64",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-sar-abbr",
"term": "SAR",
"also": [],
"def": "Structure-activity relationship: which parts of a structure raise, lower or are essential for activity (slides 20, 31 and 44).",
"cite": "DPAW slide 3; DPAW slide 20; DPAW slide 31; DPAW slide 44",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "pC-scabies",
"term": "Scabies",
"also": [
"Sarcoptes scabiei"
],
"def": "Contagious skin infection from the mite Sarcoptes scabiei, spread by prolonged contact; the mite lives up to 72 hours in clothing or bedding. Itching often on fingers, wrists, buttocks, armpits and skin folds.",
"cite": "Patel Outdoor slide 50",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-scale-softening",
"term": "Scale and crust removal",
"also": [
"softening scales"
],
"def": "Scales are softened with mineral oil or olive oil, or a cream with salicylic acid or sulfur. Seborrheic skin is washed more often than twice daily.",
"cite": "Patel Scaly slide 15",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-scale",
"term": "scaling",
"also": [
"scales",
"scaly",
"scaling lesions"
],
"def": "An increase in the dead cells on the surface of the skin (stratum corneum). Plaque psoriasis lesions are covered with thick silvery scales.",
"cite": "Pathophys slide 19; Pathophys slide 25; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pB-scaly-dermatoses",
"term": "Scaly dermatoses",
"also": [
"scaly dermatosis"
],
"def": "The group Dr. Patel teaches together: dandruff, seborrheic dermatitis and psoriasis. Slide 6 compares them by location, exacerbating factors, appearance, inflammation, epidermal hyperplasia and epidermal kinetics.",
"cite": "Patel Scaly slide 5; Patel Scaly slide 6",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-scar-minimization",
"term": "Scar minimization",
"also": [
"minimize scarring"
],
"def": "Avoid UVR exposure to the wound, use silicone sheets or gels, laser therapy, and appropriate, consistent wound care.",
"cite": "Patel Wound slide 10",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smB-scat",
"term": "SCAT",
"also": [
"short-contact anthralin therapy"
],
"def": "Short-contact anthralin therapy: anthralin ointment is applied only to thick plaques for 2 hours or less, then wiped off; zinc oxide ointment or a stiff paste protects surrounding normal skin.",
"cite": "PCol slide 56",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "pA-scorad",
"term": "SCORAD",
"also": [
"SCORAD scale",
"SCORAD index"
],
"def": "SCORing Atopic Dermatitis: a clinical tool that rates the extent and severity of atopic dermatitis. Mild is under 25, moderate is 25 to 50, severe is over 50.",
"cite": "Patel Dermatitis slide 23",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smA-sebaceous-gland",
"term": "sebaceous gland",
"also": [
"sebaceous glands",
"sebaceous"
],
"def": "Dr. Smith: The gland attached to the hair follicle in the slide's skin cross-section. Sebaceous glands secrete sebum. Dr. Sikazwe: The gland of the pilosebaceous unit that produces sebum (slide 40); decreasing its activity is an acne treatment goal (slide 41).",
"cite": "Pathophys slide 6; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology; DPAW slide 40; DPAW slide 41",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "pB-seborrheic-dermatitis",
"term": "Seborrheic dermatitis",
"also": [
"seborrhea"
],
"def": "A chronic inflammatory disorder of areas with sebaceous gland activity (scalp, face, chest) that involves Malassezia and accelerated epidermal proliferation. It has no specific cure and is neither harmful nor contagious.",
"cite": "Patel Scaly slide 11; Patel Scaly slide 13",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smA-seborrheic-eczema",
"term": "seborrheic eczema",
"also": [],
"def": "Yellowish, oily, scaly patches of skin on the scalp, face and occasionally other parts of the body.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-seb-keratosis",
"term": "Seborrheic keratosis",
"also": [
"seborrheic keratoses",
"seborrhoeic keratosis"
],
"def": "A harmless warty spot that appears during adult life as a common sign of skin aging.",
"cite": "Patel Sun Exposure slide 40; general: DermNet, https://dermnetnz.org/topics/seborrhoeic-keratosis",
"src": "general",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-sebum",
"term": "sebum",
"also": [
"sebum production"
],
"def": "Dr. Smith: A mixture of glycerides, wax esters and cholesterol that retards water loss from the skin; it is found on the face, scalp, back and neck. Dr. Sikazwe: The oily secretion produced by the sebaceous glands (slide 40).",
"cite": "Pathophys slide 6; DPAW slide 40; DPAW slide 41",
"src": "slide",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-second-degree-burn",
"term": "second degree burn",
"also": [
"second-degree burn"
],
"def": "A burn with blisters; the slide's description of a severe sunburn, which can come with fever, chills, weakness and shock.",
"cite": "Smith Sun Exposure slide 11",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-secosteroid",
"term": "secosteroid",
"also": [
"secosteroids"
],
"def": "The chemical class slide 27 gives for calcitriol and calcipotriene; its drawings show the steroid B ring of 7-dehydrocholesterol opened between C9 and C10.",
"cite": "DPAW slide 27",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-exclusion-criteria",
"term": "Self-treatment exclusion criteria",
"also": [
"exclusion criteria"
],
"def": "Findings that rule out OTC self-treatment, so the patient is referred. Lice: no live lice seen, secondary skin infection, eyelid or eyebrow infestation, pregnancy. Sunscreen: allergy to all ingredients, under 6 months.",
"cite": "Patel Outdoor slide 44; Patel Sun Exposure slide 13; Patel Sun Exposure slide 30",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pB-semiocclusive",
"term": "Semiocclusive dressing",
"also": [
"semi occlusive",
"semi-occlusive"
],
"def": "On her slide, transparent adhesive films are semiocclusive: gas-permeable but impermeable to fluids and bacteria.",
"cite": "Patel Wound slide 9",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pC-senile-angioma",
"term": "Senile angioma",
"also": [
"senile angiomas",
"cherry angioma",
"cherry hemangioma"
],
"def": "Also called cherry angioma, cherry hemangioma or Campbell de Morgan spot: a harmless, benign vascular skin lesion.",
"cite": "Patel Sun Exposure slide 40; general: DermNet NZ, https://dermnetnz.org/topics/cherry-angioma",
"src": "general",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "dz-sensitization",
"term": "Sensitization",
"also": [],
"def": "The first exposure that makes the immune system react to a substance at later exposures.",
"cite": "Patel Outdoor slide 8",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-sensitization-phase",
"term": "Sensitization phase",
"also": [
"sensitization phase of urushiol"
],
"def": "First step of plant contact dermatitis: urushiol enters the skin within 10 minutes and binds epidermal proteins to form an antigen.",
"cite": "Patel Outdoor slide 8",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "immunology"
},
{
"id": "smB-sequential-block",
"term": "sequential blocks",
"also": [
"sequential block"
],
"def": "A sulfonamide plus trimethoprim block two successive steps in the pathway to tetrahydrofolate; the combination is much more effective than either agent alone.",
"cite": "PCol slide 49",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-shale-tar",
"term": "shale tar",
"also": [
"shale tars",
"ichthammol"
],
"def": "Ichthammol; slide 16 lists it as a non-photosensitizer.",
"cite": "DPAW slide 16",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-signal-1",
"term": "Signal 1",
"also": [],
"def": "First signal to the CD4+ T cell: MHC II plus antigen on the antigen-presenting cell binds the T-cell receptor.",
"cite": "PCol slide 25",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-signal-2",
"term": "Signal 2",
"also": [
"co-signal",
"second signal"
],
"def": "Second signal to the CD4+ T cell (the co-signal): CD80/86 on the antigen-presenting cell binds CD28 on the T cell. Signals 1 and 2 start activation leading to IL-2 transcription.",
"cite": "PCol slide 25; PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-signal-3",
"term": "Signal 3",
"also": [],
"def": "Third signal to the CD4+ T cell: IL-2 binds CD25, the IL-2 receptor on the T cell, and starts T-cell proliferation.",
"cite": "PCol slide 25",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-silicone",
"term": "silicone-based emollient",
"also": [
"silicone based",
"silicone-based",
"silicone"
],
"def": "Slide 15's third emollient type, described as hypoallergenic and non-comedogenic; examples are dimethicone and cyclomethicone.",
"cite": "DPAW slide 15",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-skin-atrophy",
"term": "skin atrophy",
"also": [
"atrophy"
],
"def": "Skin thinning. Listed as a local adverse effect of topical corticosteroids and a topical side effect of calcipotriene.",
"cite": "PCol slide 12; PCol slide 22; general: DermNet, Topical steroid, https://dermnetnz.org/topics/topical-steroid",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smA-skin-barrier-dysfunction",
"term": "skin barrier dysfunction",
"also": [
"skin permeability barrier dysfunction",
"barrier dysfunction"
],
"def": "A feature of atopic dermatitis pathophysiology: the skin barrier fails, so allergens penetrate the skin. FLG variants that reduce or stop profilaggrin production cause it.",
"cite": "Pathophys slide 13; Pathophys slide 15",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "sk-permeation",
"term": "skin permeation",
"also": [
"permeation",
"skin penetration",
"skin absorption"
],
"def": "Passage of a drug through the skin. Slide 28: pimecrolimus and tacrolimus are similar in lipophilicity, structure and mechanism but differ in skin permeation.",
"cite": "DPAW slide 28; DPAW slide 66; DPAW slide 69",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pA-skin-protectant",
"term": "skin protectant",
"also": [
"skin protectants",
"barrier skin protectant"
],
"def": "A product applied liberally in the diaper area to give a physical barrier and lubrication. Examples: zinc oxide 1 to 40% and petrolatum 30 to 100%.",
"cite": "Patel Dermatitis slide 63; Patel Dermatitis slide 64",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "pB-skin-ridges",
"term": "Skin ridge pattern",
"also": [
"skin ridges",
"skin markings"
],
"def": "Plantar warts disrupt the normal skin ridges and skin markings; calluses keep the normal pattern of skin ridges.",
"cite": "Patel Warts slide 5; Patel Warts slide 6",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-skin-type",
"term": "skin type",
"also": [
"skin types",
"skin type I",
"skin type II",
"skin type III",
"skin type IV",
"skin type V",
"skin type VI"
],
"def": "A six-step scale of how skin responds to sun, from type I (always burns easily, never tans) to type VI (never burns, deeply pigmented); it guides SPF selection.",
"cite": "Smith Sun Exposure slide 16; Smith Sun Exposure slide 17",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pB-smoking-wound",
"term": "Smoking and wound healing",
"also": [],
"def": "Nicotine causes vasoconstriction, limiting distal perfusion (one cigarette, over 90 minutes). Carbon monoxide shifts the oxygen-hemoglobin curve left, decreasing tissue oxygen delivery.",
"cite": "Patel Wound slide 25",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "pC-snakebite-severity",
"term": "Snakebite Severity Scale (SSS)",
"also": [
"snakebite severity score",
"snake bite severity score"
],
"def": "Grades a pit viper bite as minimal, moderate or severe from local, systemic and coagulation findings. It decides whether antivenin is needed and is reassessed hourly.",
"cite": "Patel Outdoor slide 57; Patel Outdoor slide 58; Patel Outdoor slide 59",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "sk-soft-drug",
"term": "soft drug",
"also": [
"soft drugs"
],
"def": "A compound that is degraded in vivo to predictable non-toxic and inactive metabolites after having achieved its therapeutic role. Slide 7 calls crisaborole a benzoxaborole soft drug.",
"cite": "DPAW slide 7; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-spf",
"term": "SPF",
"also": [
"sun protection factor"
],
"def": "Sun protection factor: the ratio of the minimal dose of sunlight that produces sunburn on skin with the sunscreen to the dose that does so without it; mainly a measure of UVB protection.",
"cite": "Smith Sun Exposure slide 13; Smith Sun Exposure slide 15",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "pC-spf-percentages",
"term": "SPF blocking percentages",
"also": [
"SPF 15",
"SPF 30",
"SPF 50",
"SPF 100"
],
"def": "SPF only indicates UVB protection: SPF 15 blocks 93%, SPF 30 97%, SPF 50 98%, SPF 100 99% of UVB. Advise at least SPF 15; prefer SPF 30+.",
"cite": "Patel Sun Exposure slide 15",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-sq",
"term": "SQ",
"also": [
"subcutaneous",
"subcutaneously",
"Subcutaneous"
],
"def": "Subcutaneous: beneath the skin. The slides use SQ for drugs injected under the skin, such as dupilumab, secukinumab and ustekinumab.",
"cite": "PCol slide 64; PCol slide 66; PCol slide 67; PCol slide 71; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/subcutaneous",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation",
"cs": true
},
{
"id": "pB-wound-stage-1",
"term": "Stage 1 wound",
"also": [],
"def": "No loss of skin layers; reddened, non-blanching, unbroken skin. Wound stages are based on the depth of the wound.",
"cite": "Patel Wound slide 5",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-wound-stage-2",
"term": "Stage 2 wound",
"also": [],
"def": "A blister or partial-thickness skin loss that involves all of the epidermis and part of the dermis. Wound stages are based on the depth of the wound.",
"cite": "Patel Wound slide 5",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-wound-stage-3",
"term": "Stage 3 wound",
"also": [],
"def": "Full-thickness skin loss: damage to the entire epidermis, dermis and dermal appendages; may involve the subcutaneous tissues. Wound stages are based on the depth of the wound.",
"cite": "Patel Wound slide 5",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-wound-stage-4",
"term": "Stage 4 wound",
"also": [],
"def": "Extends further into the subcutaneous tissue, underlying muscle, tendon and bone. Wound stages are based on the depth of the wound.",
"cite": "Patel Wound slide 5",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pA-tube-sizes",
"term": "standard tube sizes",
"also": [
"tube size",
"tube sizes"
],
"def": "Topical products come in 15, 30, 45, 60, 80 and 100 g tubes. The amount calculated is rounded up to an available tube size, and prescribed amounts are rounded the same way.",
"cite": "Patel Dermatitis slide 10; Patel Dermatitis slide 13",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pA-saureus",
"term": "Staphylococcus aureus",
"also": [
"S. aureus"
],
"def": "A bacterium named as a skin infection risk in atopic dermatitis (slide 25) and as a cause of secondary infection in diaper dermatitis (slide 67).",
"cite": "Patel Dermatitis slide 25; Patel Dermatitis slide 67",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "dz-stari",
"term": "STARI",
"also": [],
"def": "Southern tick-associated rash illness, from the Lone Star tick. The Infectious Diseases Society of America (IDSA) makes no antibiotic recommendation for it.",
"cite": "Patel Outdoor slide 30; the expansion of IDSA is the plain meaning",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-stasis-dermatitis",
"term": "stasis dermatitis",
"also": [],
"def": "A skin irritation on the lower legs, generally related to circulatory problems.",
"cite": "Pathophys slide 9",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-step-care",
"term": "step-care management",
"also": [
"step care"
],
"def": "Table of acute and maintenance treatment by severity. Maintenance: skin care and trigger avoidance. Flares: TCS twice daily for 3 to 7 days beyond clearance, low-to-medium potency (non-lesional, mild) or medium-to-high (moderate).",
"cite": "Patel Dermatitis slide 47; Patel Dermatitis slide 48",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "sk-steroid",
"term": "steroid",
"also": [
"steroids",
"steroidal",
"steroid skeleton",
"steroid nucleus"
],
"def": "Compounds based on the cyclopenta[a]phenanthrene carbon skeleton, usually with methyl groups at C-10 and C-13. Slide 20 letters its four rings A, B, C and D.",
"cite": "DPAW slide 20; DPAW slide 21; general: IUPAC Glossary of Class Names of Organic Compounds (1995), https://iupac.qmul.ac.uk/class/terp.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-steroid-numbering",
"term": "steroid numbering",
"also": [
"steroid C-atom numbering",
"carbon numbering",
"steroid carbon numbering"
],
"def": "The carbon numbers on slide 20: C1-C10 in rings A and B, C11-C14 in ring C, C15-C17 in ring D, methyl carbons 18 (on C13) and 19 (on C10).",
"cite": "DPAW slide 20; DPAW slide 21",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-vehicle-potency",
"term": "steroid vehicle potency order",
"also": [
"vehicle potency"
],
"def": "The vehicle changes a steroid's strength. From highest to weakest: ointment, creams, lotions, solutions, gels, sprays.",
"cite": "Patel Dermatitis slide 37",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "smB-steroid-receptor-dimer",
"term": "steroid-receptor dimer",
"also": [
"dimer"
],
"def": "The activated pair of steroid-bound receptors in the Katzung figure. It moves into the nucleus and binds the GRE on DNA, leading to mRNA, protein and the response.",
"cite": "PCol slide 10",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-stratum-basale",
"term": "stratum basale",
"also": [
"basal layer"
],
"def": "The deepest layer of the epidermis, next to the dermis; the slide groups it with the stratum spinosum as the stratum germinativum.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-stratum-corneum",
"term": "stratum corneum",
"also": [],
"def": "The outermost layer of the epidermis. Keratinocytes mature, migrate up to it and are shed from it.",
"cite": "Pathophys slide 5; Pathophys slide 23",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-stratum-germinativum",
"term": "stratum germinativum",
"also": [],
"def": "The slide's name for the stratum spinosum and stratum basale together, the two deepest layers of the epidermis.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-stratum-granulosum",
"term": "stratum granulosum",
"also": [],
"def": "The epidermal layer between the stratum lucidum above and the stratum spinosum below in the slide's diagram.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-stratum-lucidum",
"term": "stratum lucidum",
"also": [],
"def": "The epidermal layer directly below the stratum corneum and above the stratum granulosum in the slide's diagram.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smA-stratum-spinosum",
"term": "stratum spinosum",
"also": [],
"def": "The epidermal layer between the stratum granulosum and the stratum basale; the slide groups it with the stratum basale as the stratum germinativum.",
"cite": "Pathophys slide 5",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "anatomy"
},
{
"id": "smB-striae",
"term": "striae",
"also": [
"stria"
],
"def": "Stretch marks. Listed with skin atrophy as a local adverse effect of topical corticosteroids.",
"cite": "PCol slide 12; general: DermNet, Topical steroid, https://dermnetnz.org/topics/topical-steroid",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "sk-sar",
"term": "structure-activity relationship",
"also": [
"structure activity relationship",
"structure activity relationships",
"structure-activity relationships",
"SARs"
],
"def": "The relationship between chemical structure and pharmacological activity for a series of compounds. Slides give one for glucocorticoids, methotrexate and hydroxy acids.",
"cite": "DPAW slide 3; DPAW slide 20; DPAW slide 31; DPAW slide 44; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-subacute",
"term": "subacute lesion",
"also": [
"subacute"
],
"def": "Atopic dermatitis lesion stage between acute and chronic: dry, inflamed papules, patches or plaques. Acute lesions are inflamed papules, vesicles, exudate and crusts; chronic lesions are lichenified.",
"cite": "Patel Dermatitis slide 24",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "smA-substantivity",
"term": "substantivity",
"also": [],
"def": "The adherent qualities of a sunscreen and its ability to be retained after the skin is exposed to water and perspiration.",
"cite": "Smith Sun Exposure slide 19",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "counseling"
},
{
"id": "sk-substrate",
"term": "substrate",
"also": [
"substrates",
"3A4 substrate",
"CYP substrate"
],
"def": "The molecule an enzyme operates on. Slide 8: ruxolitinib is a 3A4/2C9 substrate and upadacitinib a 3A4/2D6 substrate.",
"cite": "DPAW slide 8; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ah.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-sulfation",
"term": "sulfation",
"also": [
"sulfate conjugate",
"sulfated",
"SO3"
],
"def": "The formation of a sulfate through the addition of a sulfo group to an acceptor molecule. Marked SO3 in the crisaborole scheme of Polleve-1.",
"cite": "DPAW slide 9; general: NCI Thesaurus C63855, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C63855?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-sulfonamides",
"term": "sulfonamides",
"also": [
"sulfonamide"
],
"def": "The antibiotic class of sulfamethoxazole: competitive antagonists of PABA that block bacterial folic acid synthesis. Dapsone's mechanism in leprosy is similar.",
"cite": "PCol slide 49; PCol slide 50; PCol slide 48",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-sulfotransferase",
"term": "sulfotransferase",
"also": [
"sulfotransferases",
"SULT"
],
"def": "Enzymes that transfer a sulfate group from active sulfate to the hydroxyl group of an acceptor, giving the sulfated product. Slide 9 marks the sulfate conjugates SO3.",
"cite": "DPAW slide 9; general: NCI Thesaurus C17171, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C17171?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smA-sunblock",
"term": "sunblock",
"also": [
"sunblocks",
"sun block",
"sun blocks"
],
"def": "Inorganic particulates that scatter or reflect visible, UV and infrared radiation; in the U.S. zinc oxide and titanium dioxide, which protect against UVA and UVB.",
"cite": "Smith Sun Exposure slide 20; Smith Sun Exposure slide 21",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "sk-sunblocker",
"term": "sunblockers",
"also": [
"sunblocker",
"inorganic chemical sunblocks",
"inorganic sunblock"
],
"def": "Physical agents capable of reflecting, absorbing or scattering UVR (slide 40). Slide 61: zinc oxide and titanium dioxide, the inorganic chemical sunblocks.",
"cite": "DPAW slide 40; DPAW slide 61",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smA-sunburn",
"term": "sunburn",
"also": [
"sun burn"
],
"def": "An acute dermatological reaction to excessive sunlight: an inflammatory response with swelling of the endothelium and leakage of red blood cells from capillaries; reddening peaks at 12 to 24 hours.",
"cite": "Smith Sun Exposure slide 11",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pC-sunburn-time-course",
"term": "Sunburn time course",
"also": [
"sunburn timeline"
],
"def": "Symptoms start about 4 hours after exposure, erythema peaks around 24 hours, and the burn may last up to 5 days. UV light causes epidermal vasodilation and an inflammatory reaction.",
"cite": "Patel Sun Exposure slide 24",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "pC-sunscreen-vitamin-d",
"term": "Sunscreen and vitamin D status",
"also": [
"vitamin D synthesis"
],
"def": "Daily broad-spectrum sunscreen with high UVA protection does not compromise vitamin D status in healthy people. Screen and supplement in photosensitivity disorders or high-risk groups.",
"cite": "Patel Sun Exposure slide 23",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-sunscreen-application",
"term": "Sunscreen application",
"also": [
"sunscreen amount",
"reapply sunscreen",
"reapplication"
],
"def": "Adults apply about 1 ounce to all exposed skin 15 minutes before UV exposure and reapply after water or towel drying and every 40 to 80 minutes.",
"cite": "Patel Sun Exposure slide 21; Patel Sun Exposure slide 36",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-sunscreen-vehicle",
"term": "sunscreen vehicle",
"also": [
"alcohol-based vehicles",
"cream based vehicles",
"cream-based vehicles"
],
"def": "The base of a sunscreen product. Alcohol-based vehicles have the worst substantivity, cream-based vehicles better, polyacrylamide bases good, oils the best.",
"cite": "Smith Sun Exposure slide 19; Smith Sun Exposure slide 24",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-sunscreen",
"term": "sunscreens",
"also": [
"sunscreen",
"organic chemical sunscreens"
],
"def": "Agents applied topically to reflect, absorb or scatter UVR (slide 40). Slide 62: organic chemical sunscreens are chromophores which absorb UVA/B and convert it into harmless heat.",
"cite": "DPAW slide 40; DPAW slide 62",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-superoxide",
"term": "superoxide anion",
"also": [
"superoxide"
],
"def": "A reactive oxygen species containing a negatively charged dioxygen group. Slide 17 draws it (O2 with a dot and a minus) formed alongside the anthranyl radical.",
"cite": "DPAW slide 17; general: NCI Thesaurus C852, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C852?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smA-systemic",
"term": "systemic",
"also": [
"systemically",
"systemic exposure",
"systemic absorption",
"systemic agents",
"systemic agent"
],
"def": "Dr. Smith: Affecting the entire body. Psoriasis is a systemic inflammatory disease. Dr. Sikazwe: Relating to or affecting the whole body. Slide 14 separates systemic agents from topical agents; slides 7 and 51 describe drugs with limited systemic exposure or absorption.",
"cite": "Pathophys slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/systemic; DPAW slide 7; DPAW slide 14; DPAW slide 51; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "pp",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "other"
},
{
"id": "smA-systemic-absorption",
"term": "systemic absorption",
"also": [],
"def": "Significant systemic absorption of sunscreen ingredients: studies observed plasma concentrations above the FDA-established threshold of 0.5 ng/mL; the implications are not yet known.",
"cite": "Smith Sun Exposure slide 25",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-systemic-adverse-effects",
"term": "systemic adverse effects",
"also": [
"systemic adverse effect",
"systemic side effects",
"systemic effects"
],
"def": "Adverse effects in the rest of the body. For topical corticosteroids they depend on potency, site, occlusiveness, body surface area covered and duration, and can occur even with low-potency products.",
"cite": "PCol slide 12; PCol slide 22; PCol slide 28",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pC-systemic-analgesic",
"term": "Systemic analgesic",
"also": [
"systemic analgesics"
],
"def": "First-line oral treatment for sunburn, preferably with anti-inflammatory action (NSAIDs, acetaminophen). Decreases pain, erythema and edema; used for the first 1 to 2 days.",
"cite": "Patel Sun Exposure slide 31",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smA-t-cell",
"term": "T cell",
"also": [
"T cells",
"T-cell",
"T-cells",
"T-cell mediated",
"T-cell-mediated"
],
"def": "A type of white blood cell that is part of the immune system. The slides describe atopic dermatitis reactions and psoriasis as T-cell mediated.",
"cite": "Pathophys slide 13; Pathophys slide 19; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/t-cell",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-t-cell-inhibitors",
"term": "T-cell inhibitors",
"also": [
"T-cell inhibitor"
],
"def": "A drug class on Dr. Smith's list of medications for treating psoriasis.",
"cite": "Pathophys slide 28",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-tcr",
"term": "T-cell receptor",
"also": [
"TCR",
"T cell receptor"
],
"def": "The receptor on the CD4+ T cell that binds MHC II plus antigen on the antigen-presenting cell (signal 1).",
"cite": "PCol slide 25; PCol slide 63",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "pC-tachycardia",
"term": "Tachycardia",
"also": [],
"def": "A heart rate faster than normal, above 100 beats per minute.",
"cite": "Patel Outdoor slide 55; general: MedlinePlus, https://medlineplus.gov/ency/article/007855.htm",
"src": "general",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pC-tachypnea",
"term": "Tachypnea",
"also": [],
"def": "Breathing that is too fast, especially fast and shallow.",
"cite": "Patel Outdoor slide 58; general: MedlinePlus, https://medlineplus.gov/ency/article/007198.htm",
"src": "general",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pC-tanning-bed",
"term": "Tanning bed",
"also": [
"tanning beds",
"tanning booth",
"tanning booths"
],
"def": "Listed as increased UVR exposure that raises the risk of UVR-induced problems; the sun safety slide says to avoid tanning beds and devices.",
"cite": "Patel Sun Exposure slide 9; Patel Sun Exposure slide 12",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "sk-tar",
"term": "tars",
"also": [
"tar"
],
"def": "Topical psoriasis agents whose mechanism slide 16 gives as unknown, possibly antiproliferative. Three kinds: coal tar, shale tars (ichthammol) and wood tars.",
"cite": "DPAW slide 14; DPAW slide 16",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pA-tcs",
"term": "TCS",
"also": [
"topical steroid",
"topical steroids"
],
"def": "Topical corticosteroid (topical steroid), as abbreviated in the step-care table.",
"cite": "Patel Dermatitis slide 47",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "smB-telangiectasia",
"term": "telangiectasia",
"also": [
"telangiectasias",
"telangiectasis"
],
"def": "Prominent cutaneous blood vessels that are red or purple. Listed as a local adverse effect of topical corticosteroids.",
"cite": "PCol slide 12; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pA-tepid",
"term": "tepid water",
"also": [
"tepid",
"lukewarm"
],
"def": "Slide 51 advises warm (tepid) water for short showers or baths with a non-soap cleanser, and tepid sponge baths for full-body bathing; slide 31 says a 10-minute lukewarm bath.",
"cite": "Patel Dermatitis slide 51",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "sk-teratogenic",
"term": "teratogenic",
"also": [
"teratogen",
"teratogenicity",
"teratogens"
],
"def": "A teratogen is a substance that produces a malformation in a fetus. Slide 48 lists it for retinoids; slide 50 for etretinate.",
"cite": "DPAW slide 48; DPAW slide 50; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-tetracyclines",
"term": "tetracyclines",
"also": [
"tetracycline class"
],
"def": "Dr. Smith: The antibiotic class of sarecycline, minocycline and doxycycline: broad-spectrum bacteriostatic antibiotics that bind the 30S ribosomal subunit. Their efficacy in acne may depend more on anti-inflammatory activity. Dr. Sikazwe: Slide 55's antibiotic class: tetracycline (absorption affected by food), and the lipophilic, longer acting doxycycline and minocycline (food does not affect absorption).",
"cite": "PCol slide 43; PCol slide 45; DPAW slide 55",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "sk-thf",
"term": "tetrahydrofolic acid",
"also": [],
"def": "The product of folate reduction by DHFR; slide 30 labels it an essential co-factor for DNA synthesis.",
"cite": "DPAW slide 30",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-tewl",
"term": "TEWL",
"also": [
"trans-epidermal water loss",
"transepidermal water loss"
],
"def": "Trans-epidermal water loss. Reducing it is one of the treatment goals of atopic dermatitis.",
"cite": "Patel Dermatitis slide 27",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "measure",
"cs": true
},
{
"id": "smA-th1",
"term": "TH1 cells",
"also": [
"TH1",
"TH1 cell",
"T-helper 1"
],
"def": "T-helper cells that produce cytokines that suppress IgE production (interferon-gamma and IL-12).",
"cite": "Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-th17",
"term": "TH17 cells",
"also": [
"TH17",
"Th17"
],
"def": "A proinflammatory T-cell type named with TH1 cells on the ustekinumab slide; ustekinumab suppresses formation of both.",
"cite": "PCol slide 67",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-th2",
"term": "TH2 cells",
"also": [
"TH2",
"TH2 cell",
"T-helper 2"
],
"def": "T-helper cells that produce cytokines that increase IgE production (IL-5 and IL-13). Atopic dermatitis patients tend to have more TH2 than TH1 cells.",
"cite": "Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-th2-cytokines",
"term": "TH2 cytokines",
"also": [
"IL-4",
"IL-3",
"IL-5",
"IL-10",
"IL-13",
"interleukin-4",
"interleukin-13",
"interleukin-5"
],
"def": "The cytokines released by increased TH2 activity in atopic dermatitis (IL-3, IL-4, IL-5, IL-10, IL-13), resulting in blood eosinophilia, increased serum IgE and mast cell growth.",
"cite": "Pathophys slide 16",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "sk-ti",
"term": "therapeutic index",
"also": [
"narrow TI",
"narrow therapeutic index"
],
"def": "The difference between the concentration at which clinical benefit is seen and that at which toxicity occurs; the larger it is, the safer the drug. Slide 50: etretinate has a narrow TI.",
"cite": "DPAW slide 50; general: NCI Thesaurus C18223, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C18223?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "measure"
},
{
"id": "smB-thf",
"term": "THF",
"also": [
"tetrahydrofolate",
"tetrahydrofolic acid"
],
"def": "Tetrahydrofolate, made from dihydrofolic acid by dihydrofolate reductase. It is needed for de novo synthesis of purine nucleotides.",
"cite": "PCol slide 59; PCol slide 48; PCol slide 60",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "sk-thiolysis",
"term": "thiolysis",
"also": [],
"def": "Sulfur's CBDA on slide 46: sulfur reduces or breaks the disulfide bonds in keratin.",
"cite": "DPAW slide 46",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pA-thrombosis",
"term": "thrombosis",
"also": [
"thrombotic"
],
"def": "A JAK inhibitor boxed-warning risk, listed on slide 46 as DVT, PE and arterial thrombosis.",
"cite": "Patel Dermatitis slide 46",
"src": "slide",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "pharmacology"
},
{
"id": "pC-tick-borne",
"term": "Tick-borne disease",
"also": [
"tick-borne diseases",
"tick borne"
],
"def": "Infection spread by ticks (Lyme disease, rickettsial spotted fevers, tularemia, ehrlichiosis). Fever, headache, myalgias and rash start 2 to 14 days after the bite.",
"cite": "Patel Outdoor slide 28",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-timed-release",
"term": "timed-release formulation",
"also": [
"timed-release",
"microspheres"
],
"def": "Retin-A Micro is a timed-release tretinoin formulation containing microspheres; it may be less irritating for sensitive patients.",
"cite": "PCol slide 17",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "smB-tnf-alpha",
"term": "TNF alpha",
"also": [
"TNF-alpha",
"TNF-α",
"TNFa",
"TNF",
"tumor necrosis factor alpha",
"tumor necrosis factor"
],
"def": "Tumor necrosis factor alpha: an inflammatory cytokine produced by macrophages/monocytes during acute inflammation. It has a role in necrosis and apoptosis and is important for resistance to infection and cancers.",
"cite": "PCol slide 70",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-tnf-inhibitors",
"term": "TNF-alpha inhibitors",
"also": [
"TNF-alpha inhibitor",
"TNFa inhibitors",
"TNF-α inhibitors",
"TNF inhibitors"
],
"def": "Drugs that all bind TNF alpha and keep it from interacting with TNF receptors on inflammatory cells, reducing the number and size of plaques.",
"cite": "PCol slide 70; PCol slide 71; PCol slide 72; PCol slide 73; PCol slide 74",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smA-tnf-alpha",
"term": "TNF-α",
"also": [
"TNF-a"
],
"def": "Tumor necrosis factor: a cytokine made by white blood cells in response to an antigen or infection. One of the proinflammatory cytokines released in psoriasis.",
"cite": "Pathophys slide 21; Pathophys slide 22; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tumor-necrosis-factor",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smA-tnf-inhibitors",
"term": "TNF-α inhibitors",
"also": [
"TNF-a inhibitors",
"TNF-α inhibitor",
"TNF inhibitor"
],
"def": "A drug class on Dr. Smith's list of medications for treating psoriasis; TNF-α is one of the proinflammatory cytokines released in psoriasis.",
"cite": "Pathophys slide 28; Pathophys slide 21",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smA-topical",
"term": "topical",
"also": [],
"def": "On the surface of the body.",
"cite": "Pathophys slide 27; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/topical",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "sk-topical",
"term": "topical agents",
"also": [
"topical agent",
"topically"
],
"def": "Slide 14's group of psoriasis agents used on the skin: emollients, tars, anthralin, psoralen, corticosteroids, vitamin D3 analogs, retinoids and immunosuppressants.",
"cite": "DPAW slide 14",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-topical-anesthetic",
"term": "Topical anesthetic",
"also": [
"topical anesthetics",
"local anesthetic",
"local anesthetics"
],
"def": "Pramoxine, benzocaine, dibucaine or lidocaine numb the skin for temporary relief of pain and itch (15 to 45 minutes, up to 4 times daily). Benzocaine absorption can cause methemoglobinemia. Not recommended for routine sunburn use.",
"cite": "Patel Wound slide 14; Patel Wound slide 20; Patel Outdoor slide 12; Patel Sun Exposure slide 33",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pC-topical-antibiotic",
"term": "Topical antibiotic",
"also": [
"topical antibiotics"
],
"def": "Prevents or treats minor infection in minor burns and cuts (bacitracin, neomycin, polymyxin B, mupirocin). Contact a physician if no improvement after 7 days.",
"cite": "Patel Outdoor slide 13",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pC-topical-antioxidants",
"term": "Topical antioxidants",
"also": [
"antioxidants"
],
"def": "Niacinamide, vitamin C, vitamin E, coenzyme Q10, alpha-lipoic acid. Some evidence of protection from sun and pollutant damage, but delivery to skin is difficult and no formula is proven.",
"cite": "Patel Sun Exposure slide 49",
"src": "slide",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smB-tci",
"term": "topical calcineurin inhibitors",
"also": [
"topical calcineurin inhibitor",
"TCI",
"TCIs"
],
"def": "Pimecrolimus and tacrolimus applied to the skin for atopic dermatitis. They inhibit activation of T cells and mast cells and relieve pruritus within the first few days.",
"cite": "PCol slide 27; PCol slide 28",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "smB-topical-corticosteroids",
"term": "topical corticosteroids",
"also": [
"topical corticosteroid"
],
"def": "Corticosteroids applied to the skin. They treat psoriasis and atopic dermatitis because they are immunosuppressive; the product is matched to the severity and site of disease.",
"cite": "PCol slide 11; PCol slide 12",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "class"
},
{
"id": "pC-toxicodendron",
"term": "Toxicodendron",
"also": [
"poison ivy",
"poison oak",
"poison sumac"
],
"def": "The heading for plant contact dermatitis from poison ivy, oak and sumac. Urushiol, an oily liquid, is the active irritant.",
"cite": "Patel Outdoor slide 8; Patel Outdoor slide 10",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "smB-transcription",
"term": "transcription",
"also": [
"DNA transcription",
"gene transcription"
],
"def": "The process by which a cell makes an RNA copy (messenger RNA) of a piece of DNA; the mRNA carries the information needed to make proteins.",
"cite": "PCol slide 5; PCol slide 10; PCol slide 14; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/transcription",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smB-transcription-factor",
"term": "transcription factor",
"also": [
"transcription factors"
],
"def": "One of a group of proteins that control when genes are turned on or off by binding to nearby DNA. The slide's examples are NF-kB and AP-1.",
"cite": "PCol slide 5; PCol slide 7; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/transcription-factor",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "immunology"
},
{
"id": "smB-translocation",
"term": "translocation",
"also": [],
"def": "Step 4 of bacterial protein synthesis: the new amino acid chain with its tRNA shifts to the peptidyl site. Clindamycin and macrolides prevent it.",
"cite": "PCol slide 42; PCol slide 46; PCol slide 47",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-transparent-film",
"term": "Transparent adhesive film",
"also": [
"transparent adhesive films",
"transparent film"
],
"def": "A semiocclusive, translucent polyurethane or co-polyester film dressing: moist environment, impermeable to fluids and bacteria, gas-permeable, allows inspection; not absorptive, for uninfected wounds only.",
"cite": "Patel Wound slide 9",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "smB-tre",
"term": "TRE",
"also": [
"transcription factor response element"
],
"def": "Transcription factor response element: the DNA binding site drawn under the transcription factors NF-kB and AP-1 in the indirect pathway.",
"cite": "PCol slide 7; PCol slide 6",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-tuberculosis",
"term": "tuberculosis",
"also": [],
"def": "A disease caused by a type of bacteria that spreads through the air and most often affects the lungs. Patients must be evaluated for it before secukinumab or ustekinumab.",
"cite": "PCol slide 66; PCol slide 67; PCol slide 69; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tuberculosis",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "disease"
},
{
"id": "pA-tx",
"term": "Tx",
"also": [],
"def": "Treatment, as abbreviated in the acne treatment algorithm key.",
"cite": "Patel Acne slide 20",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "abbreviation",
"cs": true
},
{
"id": "sk-tyrosinase",
"term": "tyrosinase",
"also": [
"tyrosinase inhibition",
"tyrosinase inhibitor"
],
"def": "An enzyme involved in pigment biosynthesis. Slide 67: hydroquinone inhibits melanin biosynthesis via tyrosinase inhibition.",
"cite": "DPAW slide 67; general: NCI Thesaurus C17226, https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C17226?include=definitions",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "smB-ulceration",
"term": "ulceration",
"also": [
"ulcer"
],
"def": "An ulcer is full-thickness loss of the epidermis plus at least part of the dermis. High concentrations of salicylic acid can cause ulceration.",
"cite": "PCol slide 40; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "smA-uv-radiation",
"term": "ultraviolet radiation",
"also": [
"UV radiation",
"UV light",
"ultraviolet light",
"UV rays",
"UV"
],
"def": "Invisible rays that are part of the energy that comes from the sun; the radiation that reaches the Earth's surface is made up of UVA and UVB.",
"cite": "Smith Sun Exposure slide 8; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/ultraviolet-radiation",
"src": "general",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "dz-urushiol",
"term": "Urushiol",
"also": [],
"def": "The oily liquid in poison ivy, oak and sumac that causes the rash; the active irritant.",
"cite": "Patel Outdoor slide 8",
"src": "slide",
"deck": "dz",
"prof": "Patel",
"exam": 2,
"kind": "other"
},
{
"id": "smA-uv-index",
"term": "UV index",
"also": [],
"def": "A numeric system that rates the amount of UV rays reaching the earth's surface at a specific time and location; the higher the index, the greater the exposure.",
"cite": "Smith Sun Exposure slide 7",
"src": "slide",
"deck": "sun",
"prof": "Smith",
"exam": 1,
"kind": "measure"
},
{
"id": "smA-uva",
"term": "UVA",
"also": [
"UV-A",
"ultraviolet A"
],
"def": "Dr. Smith: UV light of 320 to 400 nm: minimally filtered by ozone, penetrates glass and further into the dermis than UVB, less energetic, and responsible for most phototoxic drug reactions. Dr. Sikazwe: The 315-400 nm band of ultraviolet radiation. Slide 12 links it to premature ageing, wrinkling of the skin and skin cancer; it reaches below the skin surface.",
"cite": "Smith Sun Exposure slide 8; DPAW slide 12; DPAW slide 62",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-uvb",
"term": "UVB",
"also": [
"UV-B",
"ultraviolet B"
],
"def": "Dr. Smith: UV light of 290 to 320 nm: about 90% filtered by the ozone layer, does not pass through glass, can cause sunburn and produces vitamin D3 in the skin. Dr. Sikazwe: The 280-315 nm band of ultraviolet radiation. Slide 12 links it to skin cancer, cataracts and sunburn; ozone blocks 90% of it.",
"cite": "Smith Sun Exposure slide 8; DPAW slide 12; DPAW slide 63",
"src": "slide",
"deck": "sun",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "sk-uvc",
"term": "UVC",
"also": [],
"def": "The 100-280 nm band of ultraviolet radiation. Slide 12: extremely dangerous, blocked by the ozone layer.",
"cite": "DPAW slide 12",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "measure"
},
{
"id": "sk-uvr",
"term": "UVR",
"also": [],
"def": "Ultraviolet radiation: UVA, UVB and UVC. On slide 12's spectrum UVC is 100-280 nm, UVB 280-315 nm and UVA 315-400 nm, below visible light.",
"cite": "DPAW slide 12; DPAW slide 40; DPAW slide 58",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smB-vdr",
"term": "VDR",
"also": [
"vitamin D receptor",
"Vit D receptor"
],
"def": "Vitamin D receptor. The VDR-drug complex heterodimerizes with RXR and binds vitamin D response elements on DNA, increasing expression of genes that modulate epidermal differentiation and inflammation.",
"cite": "PCol slide 21; PCol slide 7",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "abbreviation"
},
{
"id": "smA-venipuncture",
"term": "venipuncture",
"also": [],
"def": "A procedure in which a needle is used to take blood from a vein. Listed as a traumatic cause of the Koebner response.",
"cite": "Pathophys slide 24; general: NCI Dictionary of Cancer Terms, https://www.cancer.gov/publications/dictionaries/cancer-terms/def/venipuncture",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "other"
},
{
"id": "smA-vesicle",
"term": "vesicle",
"also": [
"vesicles"
],
"def": "A small blister, 1 cm or less across, that contains liquid. In atopic dermatitis small raised vesicles may leak fluid and crust over when scratched.",
"cite": "Pathophys slide 11; Smith Sun Exposure slide 25; general: DermNet, Terminology in dermatology, https://dermnetnz.org/topics/terminology",
"src": "general",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "sign"
},
{
"id": "pB-vas-nrs",
"term": "Visual analog scale and numeric rating scale",
"also": [
"visual analog scale",
"numeric rating scale",
"VAS",
"NRS"
],
"def": "Scales her slide names for rating the severity of itch in psoriasis.",
"cite": "Patel Scaly slide 31",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "measure"
},
{
"id": "smB-vitamin-d-analog",
"term": "vitamin D analog",
"also": [
"vitamin D analogs",
"vitamin D analogue",
"vitamin D analog",
"vitamin D3 analogs",
"vitamin D3 analog",
"vitamin D analogues"
],
"def": "Dr. Smith: Dr. Smith's class name for calcipotriene, used topically for psoriasis. It acts through the vitamin D receptor, inhibiting keratinocyte proliferation, promoting differentiation and decreasing inflammatory cytokine release. Dr. Sikazwe: Slide 27: calcitriol and calcipotriene, secosteroids with two roles, bone health and antiproliferative action.",
"cite": "PCol slide 21; PCol slide 22; DPAW slide 14; DPAW slide 27",
"src": "slide",
"deck": "pc",
"prof": "Smith/Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "smB-vdre",
"term": "vitamin D response element",
"also": [
"vitamin D response elements"
],
"def": "The DNA site bound by the VDR-drug complex after it pairs with RXR.",
"cite": "PCol slide 21",
"src": "slide",
"deck": "pc",
"prof": "Smith",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pB-wart",
"term": "Wart",
"also": [
"warts",
"verruca"
],
"def": "Caused by human papillomavirus, limited to the epidermis; spreads from other people, by auto-inoculation or from fomites. May resolve without treatment; recurrent or recalcitrant warts should be referred.",
"cite": "Patel Warts slide 4",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "disease"
},
{
"id": "pB-remover-cautions",
"term": "Wart and corn remover cautions",
"also": [],
"def": "Do not use on irritated, infected or reddened skin, moles, birthmarks, warts with hair, genital or facial warts, or mucous membranes. Do not use with diabetes or poor circulation.",
"cite": "Patel Warts slide 16",
"src": "slide",
"deck": "p8c",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "smA-wax-esters",
"term": "wax esters",
"also": [
"wax ester"
],
"def": "A component of sebum, listed with glycerides and cholesterol.",
"cite": "Pathophys slide 6",
"src": "slide",
"deck": "pp",
"prof": "Smith",
"exam": 1,
"kind": "chemistry"
},
{
"id": "pC-weeping",
"term": "Weeping lesion",
"also": [
"weeping",
"oozing",
"weeping lesions"
],
"def": "Fluid oozing from lesions. Vesicle fluids oozing, crusting and scaling form debris, and astringents are used for wet or weeping plant or atopic dermatitis.",
"cite": "Patel Outdoor slide 11; Patel Outdoor slide 13",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pB-well-demarcated",
"term": "Well demarcated",
"also": [
"well-demarcated",
"sharply demarcated"
],
"def": "Clearly distinguished from normal skin. Her psoriasis plaque slide says well demarcated; her corn description says sharply demarcated.",
"cite": "Patel Scaly slide 26; Patel Warts slide 5",
"src": "slide",
"deck": "p7",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "pA-wet-wrap",
"term": "wet wrap",
"also": [
"wet wraps"
],
"def": "A cool wet dressing for open, oozing or bleeding lesions, applied for about 5 to 20 minutes. Short term only, and not used with topical calcineurin inhibitors.",
"cite": "Patel Dermatitis slide 30; Patel Dermatitis slide 51; T@62830 11/06",
"src": "lecture",
"deck": "p5",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "pC-lice-wetting-agent",
"term": "Wetting agents for lice",
"also": [
"wetting agent",
"wetting agents",
"wetting/occlusive agents",
"Nuvo method"
],
"def": "Head lice treatment group on her slide (wetting or occlusive agents): Cetaphil cleanser with a hair dryer (Nuvo method), dimethicone lotion, Lycelle, and homeopathic Natrum muriaticum.",
"cite": "Patel Outdoor slide 46",
"src": "slide",
"deck": "p8o",
"prof": "Patel",
"exam": 2,
"kind": "class"
},
{
"id": "pA-whitehead",
"term": "whitehead",
"also": [
"whiteheads"
],
"def": "A closed comedo, a non-inflammatory acne lesion.",
"cite": "Patel Acne slide 5; Patel Acne slide 6",
"src": "slide",
"deck": "p6",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-wood-tar",
"term": "wood tars",
"also": [
"wood tar"
],
"def": "A kind of tar on slide 16 that is non-photosensitizing.",
"cite": "DPAW slide 16",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "class"
},
{
"id": "pB-wound-cleansing",
"term": "Wound cleansing",
"also": [],
"def": "First step in wound care: cleanse the wound with clean water or saline.",
"cite": "Patel Wound slide 27",
"src": "slide",
"deck": "p8w",
"prof": "Patel",
"exam": 2,
"kind": "counseling"
},
{
"id": "sk-xenobiotic",
"term": "xenobiotic",
"also": [
"xenobiotics",
"xenobiotic exposure"
],
"def": "A compound foreign to an organism.",
"cite": "DPAW slide 58; general: IUPAC Glossary of Terms Used in Medicinal Chemistry (1998), https://iupac.qmul.ac.uk/medchem/ix.html",
"src": "general",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "pharmacology"
},
{
"id": "pC-xerosis",
"term": "Xerosis",
"also": [],
"def": "The medical term for dry skin, which occurs when skin loses too much water and oil.",
"cite": "Patel Sun Exposure slide 40; general: MedlinePlus, https://medlineplus.gov/ency/article/000835.htm",
"src": "general",
"deck": "p8s",
"prof": "Patel",
"exam": 2,
"kind": "sign"
},
{
"id": "sk-alpha-beta",
"term": "α and β (steroid faces)",
"also": [
"alpha-facing",
"beta-facing",
"α-face",
"β-face",
"alpha face",
"beta face"
],
"def": "Labels for the two faces of the steroid ring system. On slide 20, α points to a hashed bond and β to a solid wedge, as in 6α-X and 11β-OH.",
"cite": "DPAW slide 20",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
},
{
"id": "sk-aha",
"term": "α-hydroxy acid",
"also": [
"α-hydroxy acids",
"α-OH acids",
"hydroxy acid"
],
"def": "Dr. Sikazwe: A carboxylic acid with an OH on the alpha carbon, such as glycolic acid (slides 43-44). Slide 68: AHAs promote dead skin cell removal and stimulate collagen production. Dr. Sikazwe: Slide 43's heading for glycolic acid and salicylic acid. Slide 44's SAR: COOH group(s), most with OH on the alpha carbon, R mostly alkyl.",
"cite": "DPAW slide 43; DPAW slide 44; DPAW slide 68",
"src": "slide",
"deck": "mc",
"prof": "Sikazwe",
"exam": 1,
"kind": "chemistry"
}
];
