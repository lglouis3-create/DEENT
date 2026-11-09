/* ==========================================================================
   Sun exposure and psoralens (Dr. Smith; recorded after the 11/03 lecture).
   Exam 1: the syllabus (Lecture 3) and Dr. Smith's Exam 1 study hints (pasted by
   Louis 2026-11-07: "From Sun Exposure lecture: ...") both put it on Exam 1
   (reviews/OPEN_QUESTIONS.md). Deck: DEENT_Sun_Exposure_2026.pdf
   (26 slides). "audio mm:ss" = timecode in her recording (full-lecture file),
   transcribed 2026-11-06. Tables shown only as links to the OTC textbook
   (slides 18 and 23) carry no questions: their content is not on the slides.
   ========================================================================== */
const SUN = 'Sun exposure lecture (DEENT_Sun_Exposure_2026.pdf)';

TOPICS.push(
 {id:'l3c-pso', name:'Psoralen chromophores: methoxsalen (PUVA)', prof:'Smith',
  cite:'slides 2–4 · recorded lecture', subs:[
   {id:'mech', name:'Mechanism and effects', cite:'slide 3'},
   {id:'ae',   name:'Side effects', cite:'slide 4'}]},
 {id:'l3c-uv', name:'Sun protection: risk factors, UV types, tanning, sunburn', prof:'Smith',
  cite:'slides 7–11 · recorded lecture', subs:[
   {id:'risk', name:'Risk factors and UV index', cite:'slide 7'},
   {id:'uvab', name:'UVA vs UVB', cite:'slide 8'},
   {id:'tan',  name:'Tanning and sunburn', cite:'slides 9–11'}]},
 {id:'l3c-spf', name:'Sun protection: MED, SPF, broad spectrum, SPF selection', prof:'Smith',
  cite:'slides 12–17 · recorded lecture', subs:[
   {id:'def',  name:'MED, SPF, critical wavelength', cite:'slides 12–15'},
   {id:'sel',  name:'Skin types and SPF selection', cite:'slides 16–17'}]},
 {id:'l3c-prod', name:'Sun protection: substantivity, sunblocks, sunscreens, safety', prof:'Smith',
  cite:'slides 19–25 · recorded lecture', subs:[
   {id:'sub',  name:'Substantivity', cite:'slide 19'},
   {id:'blk',  name:'Physical sunblocks', cite:'slides 20–21'},
   {id:'org',  name:'Organic sunscreens', cite:'slides 22, 24'},
   {id:'safe', name:'Safety', cite:'slide 25'}]}
);

QUESTIONS.push(
/* ---- Psoralens ----------------------------------------------------------- */
{id:'L3C-001', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'psoralen-mech',
 tags:['mechanism'], source:'both',
 stem:'How do psoralens such as methoxsalen act when exposed to UVA light?',
 options:[
  {t:'They intercalate into DNA', correct:true, why:'Slide 3: with UV light of 320 to 340 nm, psoralens intercalate into the DNA strand; (audio 00:29–01:00) they bind between the rungs of the DNA ladder.'},
  {t:'They block the vitamin D receptor in skin', correct:false, why:'Calcipotriene acts at the vitamin D receptor (Pharmacology deck); slide 3 describes DNA intercalation.'},
  {t:'They inhibit calcineurin in T cells', correct:false, why:'That is the calcineurin inhibitor class; psoralens act on DNA (slide 3).'},
  {t:'They reflect UV light off the skin', correct:false, why:'Reflecting light is the action of the physical sunblocks (slide 20).'}],
 teach:'PUVA combines UVA light with a psoralen. The light changes the psoralen, which then intercalates into DNA, so cells can no longer divide; this antiproliferative effect is the reason for its use in psoriasis (slide 3; audio 00:29–01:20).',
 cite:SUN+' slide 3; audio 00:29–01:20'},

{id:'L3C-002', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'psoralen-uva-range',
 tags:['numbers'], source:'slide',
 stem:'PUVA uses UV light in which range to make psoralens intercalate into DNA?',
 options:[
  {t:'320 to 340 nm', correct:true, why:'Slide 3 gives 320 to 340 nm as the UV light at which psoralens intercalate into DNA; this sits at the low end of UVA (320–400 nm, slide 8), which is why PUVA pairs psoralens with UVA.'},
  {t:'290 to 320 nm', correct:false, why:'That is the UVB range on slide 8.'},
  {t:'220 to 400 nm', correct:false, why:'That is the scan used in the critical wavelength test (audio 12:10–12:44).'},
  {t:'370 to 400 nm', correct:false, why:'370 nm is the critical wavelength threshold for a broad-spectrum label (slide 14).'}],
 teach:'Slide 3: PUVA combines UVA light with psoralens; with UV light of 320 to 340 nm, psoralens intercalate into the DNA strand.',
 cite:SUN+' slides 3, 8, 14; audio 12:10–12:44'},

{id:'L3C-003', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'psoralen-effects', multi:true,
 tags:['list'], source:'both',
 stem:'Which pharmacological effects do psoralens have in psoriasis? Select all that apply.',
 options:[
  {t:'Normalize the number and arrangement of keratinocytes', correct:true, why:'Slide 3; (audio 01:20–01:32).'},
  {t:'Reorganize cutaneous blood vessels', correct:true, why:'Slide 3; (audio 01:32–01:40).'},
  {t:'Kill T cells (cytotoxic)', correct:true, why:'Slide 3; (audio 01:40–01:47) they stop T cells from dividing because they intercalate DNA.'},
  {t:'Decrease melanin pigmentation', correct:false, why:'The reverse: slide 3 lists increased melanin pigmentation.'},
  {t:'Raise sebum production', correct:false, why:'Not an effect on slide 3.'}],
 teach:'Slide 3 lists four effects: normalized keratinocytes, reorganized blood vessels, T-cell cytotoxicity and increased melanin. The melanin effect is used for uneven pigmentation, not for psoriasis (audio 01:47–02:10).',
 cite:SUN+' slide 3; audio 01:20–02:10'},

{id:'L3C-004', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'psoralen-melanin',
 tags:['mechanism'], source:'both',
 stem:'Which psoralen effect is used for skin conditions other than psoriasis?',
 options:[
  {t:'Increased melanin production', correct:true, why:'Slide 3: increases melanin pigmentation; (audio 01:47–02:10) it is used for uneven skin pigmentation, not psoriasis.'},
  {t:'Cytotoxicity to T cells', correct:false, why:'This is part of the psoriasis effect (slide 3).'},
  {t:'Normalized keratinocyte arrangement', correct:false, why:'This is part of the psoriasis effect (slide 3).'},
  {t:'Reorganized blood vessels', correct:false, why:'This is part of the psoriasis effect (slide 3).'}],
 teach:'Psoralens interact with melanocytes and increase pigment production (audio 01:47–02:02).',
 note:'In the recording she said "melatonin pigment" (audio 01:59); slide 3 says melanin. Keyed to the slide.',
 cite:SUN+' slide 3; audio 01:47–02:10'},

{id:'L3C-005', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'ae', concept:'psoralen-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which are side effects of psoralens? Select all that apply.',
 options:[
  {t:'Increased risk of skin cancer', correct:true, why:'Slide 4; (audio 02:10–02:25).'},
  {t:'Cataracts', correct:true, why:'Slide 4; (audio 02:25) a side effect that does not involve the skin.'},
  {t:'Increased skin aging', correct:true, why:'Slide 4; (audio 02:10–02:25).'},
  {t:'Hypercalcemia', correct:false, why:'Hypercalcemia belongs to calcipotriene, the vitamin D analog (Pharmacology deck).'},
  {t:'Gingival hyperplasia', correct:false, why:'Gingival hyperplasia belongs to oral cyclosporine (Pharmacology deck).'}],
 teach:'Slide 4: pruritus, nausea, erythema and blistering, hyperpigmentation, increased skin aging, increased skin cancer risk and cataracts.',
 cite:SUN+' slide 4; audio 02:02–02:30'},

{id:'L3C-006', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'ae', concept:'psoralen-cataract',
 tags:['adverse'], source:'both',
 stem:'Which psoralen side effect does not involve the skin?',
 options:[
  {t:'Cataracts', correct:true, why:'(audio 02:25) "a side effect that doesn\'t involve the skin is they can increase the risk for cataracts"; slide 4.'},
  {t:'Hyperpigmentation', correct:false, why:'A skin effect on slide 4.'},
  {t:'Erythema and blistering', correct:false, why:'A skin effect on slide 4.'},
  {t:'Increased skin aging', correct:false, why:'A skin effect on slide 4.'}],
 teach:'Psoralens raise skin irritation, skin aging and skin cancer risk; she named cataracts as the side effect outside the skin (slide 4 also lists nausea) (slide 4; audio 02:10–02:30).',
 cite:SUN+' slide 4; audio 02:10–02:30'},

/* ---- Risk and UV --------------------------------------------------------- */
{id:'L3C-010', skill:'epi', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'risk', concept:'uv-index',
 tags:['definition'], source:'both',
 stem:'What does the UV index rate?',
 options:[
  {t:'UV reaching the earth at a time and place', correct:true, why:'Slide 7 defines the UV index as a rating of the UV rays reaching the earth\'s surface at a specific time and location; a higher index means greater exposure (audio 02:53–03:28). It describes the environment, not a product or the skin.'},
  {t:'The SPF that a sunscreen product provides', correct:false, why:'SPF is a ratio of MEDs measured on skin (slide 13).'},
  {t:'The minimum UV dose that reddens skin', correct:false, why:'That is the minimal erythemal dose (slide 12).'},
  {t:'How well a sunscreen stays on wet skin', correct:false, why:'That is substantivity (slide 19).'}],
 teach:'Slide 7: the higher the UV index, the greater the exposure. It depends on time of day, season, altitude and latitude, the ozone layer and land cover such as shade.',
 cite:SUN+' slides 7, 12–13, 19; audio 02:53–03:28'},

{id:'L3C-011', skill:'epi', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'risk', concept:'severe-burn-risk',
 tags:['numbers'], source:'slide',
 stem:'What does one severe sunburn before age 18 do to the lifetime risk of skin cancer?',
 options:[
  {t:'Doubles it', correct:true, why:'Slide 7: "One severe sunburn before age 18 doubles the lifetime risk of skin cancers!"'},
  {t:'Leaves it unchanged', correct:false, why:'Slide 7 lists it as a risk factor.'},
  {t:'Raises it by about 7%', correct:false, why:'Not a figure on slide 7.'},
  {t:'Raises it for skin type VI', correct:false, why:'Slide 7 gives no skin-type limit.'}],
 teach:'Slide 7 risk factors: the UV index, the amount of melanin in the skin, the SPF of the product, cumulative sun exposure, and one severe sunburn before age 18.',
 note:'In the recording she said it will "double the age of your risk" (audio 04:13); slide 7 says it doubles the lifetime risk. Keyed to the slide.',
 cite:SUN+' slide 7; audio 03:51–04:20'},

{id:'L3C-012', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uvb-range',
 tags:['numbers','tell'], source:'both',
 stem:'In Dr. Smith\'s lecture, which wavelength ranges are given for UVB and UVA?',
 options:[
  {t:'UVB 290–320 nm; UVA 320–400 nm', correct:true, why:'Slide 8 and her recording (audio 04:37) give UVB as 290 to 320 nm and UVA as 320 to 400 nm; UVB is the shorter wavelength band.'},
  {t:'UVB 320–400 nm; UVA 290–320 nm', correct:false, why:'Swaps the two ranges on slide 8.'},
  {t:'UVB 320–340 nm; UVA 290–320 nm', correct:false, why:'320–340 nm is the PUVA range for psoralens (slide 3).'},
  {t:'UVB 220–290 nm; UVA 290–320 nm', correct:false, why:'Shifts both bands below slide 8; 290–320 nm is UVB.'}],
 teach:'UVB is the shorter, more energetic band, 290–320 nm; UVA is 320–400 nm (slide 8).',
 note:'Dr. Sikazwe\'s deck gives UVB as starting at 280 nm (his material). This item asks for Dr. Smith\'s figures only.',
 cite:SUN+' slides 3, 8; audio 04:13–04:40'},

{id:'L3C-013', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uvb-vs-uva-glass',
 tags:['tell'], source:'both',
 stem:'Which statement separates UVB from UVA?',
 options:[
  {t:'UVB is mostly filtered by ozone and glass', correct:true, why:'Slide 8: UVB about 90% filtered by the ozone layer, does not penetrate glass; UVA is minimally filtered and penetrates glass (audio 04:37–05:00).'},
  {t:'UVB passes through glass; UVA is mostly filtered by ozone', correct:false, why:'Reverses slide 8.'},
  {t:'UVB penetrates further into the dermis than UVA', correct:false, why:'Slide 8: UVA penetrates further into the dermis.'},
  {t:'UVB is less energetic than UVA', correct:false, why:'Slide 8: UVA is less energetic than UVB.'}],
 teach:'Slide 8 contrasts the two: UVB is filtered about 90% by ozone, stopped by glass, causes sunburn and makes vitamin D3; UVA is minimally filtered, passes glass, goes deeper, causes most drug phototoxic reactions and is less energetic.',
 cite:SUN+' slide 8; audio 04:13–06:30'},

{id:'L3C-014', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uva-phototoxic',
 tags:['tell'], source:'both',
 stem:'Which type of UV light is responsible for most phototoxic reactions with drugs?',
 options:[
  {t:'UVA', correct:true, why:'Slide 8 places "responsible for most of the phototoxic reactions with drugs and chemical substances" under UVA; UVA also reaches deeper into the dermis (audio 05:28–05:54).'},
  {t:'UVB', correct:false, why:'Slide 8 lists the phototoxic reactions under UVA; UVB is tied to sunburn and vitamin D3.'},
  {t:'Visible light', correct:false, why:'Not the band named on slide 8.'},
  {t:'Infrared radiation', correct:false, why:'Infrared is named only as something sunblocks scatter (slide 20).'}],
 teach:'UVA reaches deeper into the dermis and is the band behind most drug and chemical phototoxic reactions (slide 8).',
 cite:SUN+' slides 8, 20; audio 05:28–05:54'},

{id:'L3C-015', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uvb-sunburn-vitd',
 tags:['tell'], source:'both',
 stem:'Which type of UV light causes sunburn and produces vitamin D3 in the skin?',
 options:[
  {t:'UVB', correct:true, why:'Slide 8 lists sunburn and vitamin D3 production under UVB. UVA is less energetic and does not tend to cause sunburn (audio 05:54–06:19).'},
  {t:'UVA', correct:false, why:'(audio 05:54–06:19) UVA does not seem to cause sunburn, because it is less energetic than UVB.'},
  {t:'UVC', correct:false, why:'Not part of Dr. Smith\'s slide 8.'},
  {t:'Visible light', correct:false, why:'Not part of slide 8.'}],
 teach:'UVB causes sunburn, makes vitamin D3 in the skin, and is the band of most concern for skin cancer; its intensity is greatest between 10:00 am and 4:00 pm (slide 8; audio 05:00–05:28).',
 cite:SUN+' slide 8; audio 05:00–06:43'},

{id:'L3C-016', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uv-peak-hours',
 tags:['counseling','numbers'], source:'both',
 stem:'Between which hours is UVB intensity greatest?',
 options:[
  {t:'10:00 am to 4:00 pm', correct:true, why:'Slide 8 gives 10:00 am to 4:00 pm as the period of greatest UV intensity, which is when counseling on avoiding sun exposure applies most (audio 05:28).'},
  {t:'6:00 am to 10:00 am', correct:false, why:'Not the window on slide 8.'},
  {t:'4:00 pm to 8:00 pm', correct:false, why:'Not the window on slide 8.'},
  {t:'8:00 am to noon', correct:false, why:'Not the window on slide 8.'}],
 teach:'Slide 8 gives 10:00 am to 4:00 pm as the period of greatest UVB intensity.',
 cite:SUN+' slide 8; audio 05:28'},

{id:'L3C-017', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'tan-not-protective',
 tags:['counseling','cue'], source:'transcript',
 stem:'Is a person who tans deeply protected from sun damage?',
 options:[
  {t:'No; the tan does not protect', correct:true, why:'(audio 07:09–07:30) "people that tan more deeply, their skin is not protected from sun damage"; she repeated it as important.'},
  {t:'Yes; melanin blocks UVB fully', correct:false, why:'She stated the opposite (audio 07:09–07:30).'},
  {t:'Yes, after the delayed tan peaks', correct:false, why:'Neither kind of tanning is good for the skin (audio 07:37–07:55).'},
  {t:'From UVB, but not from UVA', correct:false, why:'She said that people who tan more deeply are not protected from sun damage (audio 07:09).'}],
 teach:'She said this twice as an important point: a deeper tan does not protect the skin from sun damage (audio 07:09–07:30).',
 cite:SUN+' slide 9; audio 07:09–07:30'},

{id:'L3C-018', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'tanning-timing',
 tags:['tell','numbers'], source:'slide',
 stem:'Which statement about delayed pigmentation after UVA exposure is correct?',
 options:[
  {t:'Develops in 48–72 h; lasts weeks', correct:true, why:'Slide 10: takes about 48 to 72 hours to develop, peaks at 7 to 10 days and lasts weeks to months.'},
  {t:'It starts 5–10 minutes after exposure', correct:false, why:'That is immediate pigmentation (slide 10).'},
  {t:'It lasts only 24–48 hours', correct:false, why:'That is immediate pigmentation (slide 10).'},
  {t:'It peaks within 12 hours', correct:false, why:'Slide 10: it peaks at 7 to 10 days.'}],
 teach:'Slide 10: immediate pigmentation starts 5–10 minutes after exposure and lasts 24–48 hours; delayed pigmentation takes 48–72 hours, peaks at 7–10 days and lasts weeks to months.',
 cite:SUN+' slide 10; audio 07:30–07:55'},

{id:'L3C-019', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'tanning-factors', multi:true,
 tags:['list'], source:'slide',
 stem:'Which factors affect tanning? Select all that apply.',
 options:[
  {t:'Reflection from snow, water or sand', correct:true, why:'Slide 9.'},
  {t:'Thickness of the epidermis and stratum corneum', correct:true, why:'Slide 9.'},
  {t:'Existing pigmentation of the skin', correct:true, why:'Slide 9.'},
  {t:'One severe sunburn before age 18', correct:false, why:'A risk factor for skin cancer on slide 7, not a tanning factor on slide 9.'},
  {t:'Plasma level of sunscreen actives', correct:false, why:'A safety finding on slide 25, not a tanning factor on slide 9.'}],
 teach:'Slide 9: time, clouds, reflection (snow, water, sand), location, clothing, the thickness of the epidermis and stratum corneum, and the skin\'s pigmentation.',
 cite:SUN+' slides 7, 9; audio 06:19–07:09'},

{id:'L3C-020', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'sunburn-mediators',
 tags:['mechanism'], source:'both',
 stem:'Which mediators are released in sunburn?',
 options:[
  {t:'Histamine, cytokines and prostaglandins', correct:true, why:'Slide 11; (audio 08:48–09:08).'},
  {t:'IgE and eosinophils', correct:false, why:'These belong to the TH2 picture of atopic dermatitis (Pathophysiology deck), not slide 11.'},
  {t:'Melanin and vitamin D3', correct:false, why:'Melanin is pigment and vitamin D3 is a UVB product (slide 8); they are not the inflammatory mediators.'},
  {t:'Free fatty acids made from sebum glycerides', correct:false, why:'These irritate the follicle in acne (Pathophysiology deck).'}],
 teach:'Sunburn is an acute inflammatory reaction: endothelial swelling, leakage of red cells from capillaries, and release of histamine, cytokines and prostaglandins (slide 11).',
 cite:SUN+' slide 11; audio 07:55–09:08'},

{id:'L3C-021', skill:'patho', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'sunburn-timing',
 tags:['numbers'], source:'slide',
 stem:'When does the reddening of a sunburn peak?',
 options:[
  {t:'12 to 24 hours after exposure', correct:true, why:'Slide 11: reddening peaks at 12 to 24 hours after sun exposure; the tan from melanogenesis follows over the next 2 to 3 days.'},
  {t:'5 to 10 minutes after exposure', correct:false, why:'That is when immediate pigmentation starts (slide 10).'},
  {t:'7 to 10 days after exposure', correct:false, why:'That is the peak of delayed pigmentation (slide 10).'},
  {t:'2 to 3 days after exposure', correct:false, why:'Slide 11: melanogenesis follows over the next 2 to 3 days.'}],
 teach:'Slide 11: reddening peaks at 12 to 24 hours, then melanogenesis over the next 2 to 3 days gives a tan.',
 cite:SUN+' slides 10–11; audio 08:21–08:48'},

{id:'L3C-022', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'tan', concept:'severe-sunburn',
 tags:['counseling'], source:'both',
 stem:'A sunburn has blistered. How is it classified?',
 options:[
  {t:'A second-degree burn', correct:true, why:'Slide 11: severe sunburn, a second-degree burn with blisters; (audio 09:08–09:35).'},
  {t:'A first-degree burn', correct:false, why:'Blistering marks a second-degree burn (slide 11).'},
  {t:'A phototoxic drug reaction', correct:false, why:'Phototoxic reactions are tied to drugs and UVA (slide 8).'},
  {t:'A third-degree burn', correct:false, why:'Slide 11: a sunburn with blisters is a second-degree burn (audio 09:08).'}],
 teach:'Severe sunburn can bring fever, chills, weakness and shock (slide 11; audio 09:08–09:35).',
 cite:SUN+' slide 11; audio 09:08–09:35'},

/* ---- MED, SPF, broad spectrum ------------------------------------------- */
{id:'L3C-030', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'med-def',
 tags:['definition'], source:'slide',
 stem:'What is the minimal erythemal dose (MED)?',
 options:[
  {t:'Least UV dose giving clear erythema', correct:true, why:'Slide 12: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site.'},
  {t:'The wavelength at which 90% of absorption is reached', correct:false, why:'That is the critical wavelength (slide 14; audio 12:10–13:10).'},
  {t:'The concentration of sunscreen absorbed into plasma', correct:false, why:'Plasma concentration (0.5 ng/mL threshold) is a safety point on slide 25.'},
  {t:'How long a sunscreen stays on in water', correct:false, why:'That is substantivity (slide 19).'}],
 teach:'MED is the dose that just produces a clearly marginated reddening (slide 12). SPF is then built from MEDs measured with and without a product (slide 13; audio 09:35–11:33).',
 cite:SUN+' slides 12, 14, 19, 25; audio 09:35–10:28'},

{id:'L3C-031', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'spf-def',
 tags:['definition'], source:'both',
 stem:'How is the sun protection factor (SPF) defined?',
 options:[
  {t:'MED with sunscreen divided by MED without it', correct:true, why:'Slide 13: ratio of the minimal dose that produces sunburn on skin with the sunscreen to the dose that gives the same reaction without it; (audio 10:28–11:33).'},
  {t:'MED without sunscreen divided by MED with it', correct:false, why:'Inverts the ratio on slide 13.'},
  {t:'The percentage of UVA absorbed', correct:false, why:'SPF measures UVB protection and says nothing about UVA (slide 13).'},
  {t:'The critical wavelength of the product', correct:false, why:'The critical wavelength assesses UVA protection (slide 14).'}],
 teach:'SPF is the ratio of MEDs with and without the product. The higher the SPF, the less likely a burn and the longer the time that can be spent in the sun (slide 13).',
 cite:SUN+' slides 13–14; audio 10:28–12:10'},

{id:'L3C-032', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'spf-uvb-only',
 tags:['tell','cue'], source:'both',
 stem:'An SPF value on a label indicates protection against which radiation?',
 options:[
  {t:'Primarily UVB', correct:true, why:'Slide 13: SPF is primarily a measure of UVB protection; (audio 11:33) "Remember, UVB is causing the sunburn."'},
  {t:'Primarily UVA', correct:false, why:'Slide 13: SPF provides no information about UVA coverage.'},
  {t:'UVA and UVB equally', correct:false, why:'UVA is assessed separately by the critical wavelength method (slide 14).'},
  {t:'Visible and infrared light', correct:false, why:'Not what SPF measures (slide 13).'}],
 teach:'SPF is built on the MED, a sunburn endpoint, and sunburn is caused by UVB; so SPF tells nothing about UVA (slide 13; audio 11:33–12:10).',
 cite:SUN+' slides 13–14; audio 11:33–12:10'},

{id:'L3C-033', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'broad-spectrum',
 tags:['numbers'], source:'both',
 stem:'What critical wavelength allows a product to be labeled "broad spectrum"?',
 options:[
  {t:'370 nm or greater', correct:true, why:'Slide 14: products with a CW of 370 nm or greater may be labeled broad spectrum; (audio 13:10–13:37).'},
  {t:'320 nm or greater', correct:false, why:'320 nm is the UVB/UVA boundary on slide 8.'},
  {t:'290 nm or greater', correct:false, why:'290 nm is the lower end of UVB on slide 8.'},
  {t:'400 nm or greater', correct:false, why:'400 nm is the upper end of UVA on slide 8, not the label threshold.'}],
 teach:'In the critical wavelength method a thin film of product is scanned with light, and the wavelength at which 90% of its total absorption is reached is the critical wavelength (slide 14; audio 12:10–13:10).',
 cite:SUN+' slides 8, 14; audio 12:10–13:37'},

{id:'L3C-034', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'cancer-claim',
 tags:['counseling','numbers'], source:'both',
 stem:'Which product may carry the label "decreases risk of skin cancer and early aging caused by the sun"?',
 options:[
  {t:'Broad spectrum with SPF 15 or greater', correct:true, why:'Slide 14: under FDA guidance, a product needs both a broad-spectrum label (CW of 370 nm or more) and SPF 15 or greater to make this claim (audio 13:37–14:00).'},
  {t:'Any product with SPF 15 or greater', correct:false, why:'It must also be broad spectrum (slide 14).'},
  {t:'Broad spectrum with any SPF', correct:false, why:'It needs SPF 15 or greater (slide 14).'},
  {t:'Any physical sunblock with zinc oxide added', correct:false, why:'The label rule on slide 14 is broad spectrum plus SPF 15 or greater.'}],
 teach:'FDA guidance on slide 14: a CW of 370 nm or greater allows "broad spectrum"; broad spectrum plus SPF 15 or greater allows the skin cancer and early aging claim.',
 cite:SUN+' slide 14; audio 13:10–14:11'},

{id:'L3C-035', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'spf15-block',
 tags:['numbers','counseling'], source:'both',
 stem:'About what share of incoming UVB rays does SPF 15 block?',
 options:[
  {t:'93%', correct:true, why:'Slide 15: SPF 15 blocks about 93% of incoming UVB, against about 97% for SPF 30 and 98% for SPF 50 (audio 14:25).'},
  {t:'97%', correct:false, why:'97% is SPF 30 (slide 15).'},
  {t:'98%', correct:false, why:'98% is SPF 50 (slide 15).'},
  {t:'90%', correct:false, why:'About 90% is the share of UVB filtered by ozone (slide 8).'}],
 teach:'Slide 15: SPF 15 blocks about 93%, SPF 30 about 97%, SPF 50 about 98%. The gain shrinks as SPF rises, so for a patient on a budget SPF 15 is a reasonable choice (audio 14:47–15:43).',
 cite:SUN+' slides 8, 15; audio 14:25–15:43'},

{id:'L3C-036', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'spf-diminishing',
 tags:['counseling','reasoning'], source:'both',
 stem:'A patient on a tight budget asks whether an SPF 50 product is needed. Which fact about SPF applies?',
 options:[
  {t:'Higher SPF adds little UVB blocking', correct:true, why:'Slide 15: SPF 15 93%, SPF 30 97%, SPF 50 98%; (audio 14:47–15:43) the added blockage diminishes with increasing SPF, so SPF 15 may be acceptable.'},
  {t:'SPF 50 blocks twice the UVB of SPF 30', correct:false, why:'Slide 15: 98% against 97%.'},
  {t:'SPF 15 blocks less than half of UVB', correct:false, why:'Slide 15: SPF 15 blocks about 93%.'},
  {t:'SPF 50 is needed to lower skin cancer risk', correct:false, why:'The cancer claim needs broad spectrum and SPF 15 or greater (slide 14).'}],
 teach:'She advised that SPF 15 blocks about 93% of UVB, and higher-SPF products are more expensive for a small added gain (audio 14:47–15:43).',
 cite:SUN+' slides 14–15; audio 14:25–15:43'},

{id:'L3C-037', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'skin-type-i',
 tags:['counseling'], source:'slide',
 stem:'Which description fits skin type I?',
 options:[
  {t:'Always burns easily, never tans', correct:true, why:'Slide 16: type I always burns easily and never tans; type II also burns easily but tans minimally.'},
  {t:'Always burns easily, tans minimally', correct:false, why:'That is skin type II (slide 16).'},
  {t:'Sometimes burns and tans gradually', correct:false, why:'That is skin type III (slide 16).'},
  {t:'Never burns, deeply pigmented', correct:false, why:'That is skin type VI (slide 16).'}],
 teach:'Slide 16 ranks skin types I to VI by how easily they burn; the risk of burning falls as the number rises (audio 15:43–16:18). She still counsels sun protection for the higher types (audio 16:18).',
 cite:SUN+' slide 16; audio 15:43–16:32'},

{id:'L3C-038', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'spf-by-skin-type',
 tags:['counseling','numbers'], source:'slide',
 stem:'Which SPF is recommended for skin types I and II with increased risk of skin cancer?',
 options:[
  {t:'SPF greater than 30', correct:true, why:'Slide 17: skin types I and II have an increased risk of skin cancer and should use SPF greater than 30; the higher thresholds are for lupus (> 40) and photosensitizing drugs (> 45).'},
  {t:'SPF 15 to 24', correct:false, why:'That is for skin types III to V (slide 17).'},
  {t:'SPF greater than 45', correct:false, why:'That is for patients on photosensitizing drugs (slide 17).'},
  {t:'SPF greater than 40', correct:false, why:'That is for lupus (slide 17).'}],
 teach:'Slide 17: types I and II, SPF > 30; lupus, SPF > 40; photosensitizing drugs, SPF > 45; types III to V, SPF 15 to 24.',
 cite:SUN+' slide 17'},

{id:'L3C-039', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'spf-photosensitizing',
 tags:['counseling','numbers'], source:'slide',
 stem:'A patient takes a photosensitizing drug. Which SPF is recommended?',
 options:[
  {t:'SPF greater than 45', correct:true, why:'Slide 17 sets SPF greater than 45 for patients on photosensitizing drugs, the highest threshold on the slide, above lupus (> 40) and skin types I–II (> 30).'},
  {t:'SPF greater than 30', correct:false, why:'That is for skin types I and II (slide 17).'},
  {t:'SPF greater than 40', correct:false, why:'That is for lupus (slide 17).'},
  {t:'SPF 15 to 24', correct:false, why:'That is for skin types III to V (slide 17).'}],
 teach:'Patients on drugs that cause photosensitivity need counseling to use sun protection (slide 18; audio 17:27–17:48); slide 17 sets SPF > 45 for them.',
 cite:SUN+' slides 17–18; audio 17:27–18:10'},

{id:'L3C-040', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'start-high',
 tags:['counseling','cue'], source:'both',
 stem:'Why does Dr. Smith advise "start high and go low" with SPF?',
 options:[
  {t:'A higher SPF added after 1 MED helps little', correct:true, why:'Slide 17: adding higher SPF after 1 MED will not help much; (audio 16:32–16:54) once you have burned, a higher SPF does little.'},
  {t:'High SPF products lose activity after one hour', correct:false, why:'Not a reason given on slide 17.'},
  {t:'Low SPF products block more UVA', correct:false, why:'SPF says nothing about UVA (slide 13).'},
  {t:'Skin tolerates low SPF better at first', correct:false, why:'Not a reason given on slide 17.'}],
 teach:'Slide 17: start high and go low, apply the correct amount at the correct time, and reapply every 90–120 minutes.',
 cite:SUN+' slides 13, 17; audio 16:32–17:12'},

{id:'L3C-041', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'reapply-interval',
 tags:['counseling','numbers'], source:'both',
 stem:'How often should a sunscreen usually be reapplied?',
 options:[
  {t:'Every 90–120 minutes', correct:true, why:'Slide 17; (audio 17:12) "Usually, it\'s every ninety to a hundred and twenty minutes."'},
  {t:'Every 4–6 hours', correct:false, why:'Not the interval on slide 17.'},
  {t:'Once each morning before going outside', correct:false, why:'Slide 17 calls for reapplication every 90–120 minutes.'},
  {t:'Every 3–4 hours', correct:false, why:'Slide 17: re-apply every 90–120 minutes (audio 17:12).'}],
 teach:'Reapply as the label instructs, usually every 90–120 minutes (slide 17; audio 16:54–17:12).',
 cite:SUN+' slides 17, 24; audio 16:54–17:12'},

/* ---- Products ------------------------------------------------------------ */
{id:'L3C-050', skill:'class', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'sub', concept:'substantivity-def',
 tags:['definition'], source:'both',
 stem:'What does substantivity describe?',
 options:[
  {t:'Retention through water and sweat', correct:true, why:'Slide 19: the adherent qualities of a sunscreen and its retention after exposure to water and perspiration; (audio 17:48–18:35).'},
  {t:'How much UVB a sunscreen blocks', correct:false, why:'That is what SPF measures (slides 13, 15).'},
  {t:'How far UV light penetrates the skin', correct:false, why:'Penetration depth is a UVA vs UVB point (slide 8).'},
  {t:'How much sunscreen reaches the plasma', correct:false, why:'Systemic absorption is a safety point (slide 25).'}],
 teach:'Slide 19: oils have the best substantivity but are not pleasant to use; alcohols have the worst; cream bases are better than alcohol bases; polyacrylamide bases are good.',
 cite:SUN+' slides 13, 19, 25; audio 17:48–18:55'},

{id:'L3C-051', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'sub', concept:'vehicle-substantivity',
 tags:['tell'], source:'both',
 stem:'Which vehicle gives a sunscreen the worst substantivity?',
 options:[
  {t:'Alcohol', correct:true, why:'Slide 19: alcohols have the worst substantivity; (audio 18:35–18:55).'},
  {t:'Oil', correct:false, why:'Oils have the best substantivity (slide 19).'},
  {t:'Cream', correct:false, why:'Cream bases are better than alcohol bases (slide 19).'},
  {t:'Polyacrylamide', correct:false, why:'Polyacrylamide bases have good substantivity (slide 19).'}],
 teach:'An alcohol-vehicle product does not stay on well, especially in water or with heavy sweating (audio 18:35–18:55).',
 cite:SUN+' slide 19; audio 18:35–18:55'},

{id:'L3C-052', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'sunblock-vs-sunscreen',
 tags:['tell','mechanism'], source:'both',
 stem:'What separates a sunblock from an organic sunscreen?',
 options:[
  {t:'Sunblocks scatter; sunscreens absorb', correct:true, why:'Slide 20: inorganic particulates that scatter or reflect; slide 22: organic compounds absorb UV and convert it to heat.'},
  {t:'Sunblocks absorb UV; sunscreens reflect it', correct:false, why:'Reverses slides 20 and 22.'},
  {t:'Sunblocks shield from UVB but not UVA', correct:false, why:'Zinc oxide and titanium dioxide give UVA and UVB protection (slide 20).'},
  {t:'Sunscreens contain inorganic particles', correct:false, why:'Sunscreens are organic compounds (slide 22).'}],
 teach:'Sunblocks, also called physical sunscreens, carry inorganic particulates that bounce visible, UV and infrared light back off the skin. Organic sunscreens absorb UVA and/or UVB and convert it to heat (slides 20, 22; audio 18:55–21:27).',
 cite:SUN+' slides 20, 22; audio 18:55–21:45'},

{id:'L3C-053', skill:'class', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'sunblock-products',
 tags:['recall'], source:'both',
 stem:'Which two physical sunblock ingredients are available in the U.S.?',
 options:[
  {t:'Zinc oxide, titanium dioxide', correct:true, why:'Slide 20: the physical sunblocks available in the U.S. are zinc oxide and titanium dioxide, inorganic particulates that scatter or reflect light (audio 19:21–19:52).'},
  {t:'Avobenzone and oxybenzone (organic)', correct:false, why:'These are organic sunscreens (slide 25).'},
  {t:'PABA and benzophenones', correct:false, why:'Organic sunscreens (slides 24–25), not physical sunblocks.'},
  {t:'Zinc oxide and benzophenone', correct:false, why:'Benzophenones are organic sunscreens (slide 24).'}],
 teach:'Both give UVA and UVB protection. Newer microsize and nanosize particle forms are less opaque and more cosmetically appealing (slide 20; audio 19:52–20:19).',
 cite:SUN+' slides 20, 24–25; audio 19:21–20:19'},

{id:'L3C-054', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'sunblock-use',
 tags:['counseling'], source:'both',
 stem:'For which use are physical sunblocks best suited?',
 options:[
  {t:'Exposed areas like the nose and ears', correct:true, why:'Slide 20; (audio 19:21–19:52) also when sun exposure cannot be limited or controlled.'},
  {t:'Large areas of oily, acne-prone skin', correct:false, why:'They may occlude pores and cause acne (slide 21).'},
  {t:'Short exposure where reapplication is easy', correct:false, why:'They are used when exposure cannot be limited or controlled (slide 20).'},
  {t:'Patients who want an invisible film', correct:false, why:'Only the newer micro- and nanosize forms are less opaque (slide 20).'}],
 teach:'Slide 20: uses are prominently exposed areas such as the nose and ears, and situations where sun exposure cannot be limited or controlled.',
 cite:SUN+' slides 20–21; audio 19:21–19:52'},

{id:'L3C-055', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'sunblock-ae', multi:true,
 tags:['list','adverse'], source:'both',
 stem:'Which are side effects or limits of physical sunblocks? Select all that apply.',
 options:[
  {t:'May occlude pores, causing miliaria, folliculitis or acne', correct:true, why:'Slide 21; (audio 20:39).'},
  {t:'May stain clothing', correct:true, why:'Slide 21; (audio 20:39).'},
  {t:'Protection decreases after 2 hours of direct sun', correct:true, why:'Slide 21; (audio 21:04) reapply in about two hours.'},
  {t:'Washed off easily with water', correct:false, why:'Slide 21: not easily removed with water, but melts in hot sun.'},
  {t:'Lack of UVA protection', correct:false, why:'Zinc oxide and titanium dioxide protect against UVA and UVB (slide 20).'}],
 teach:'Slide 21: may occlude pores and stain clothing; not easily removed with water but melts in hot sun; protection decreases after 2 hours of direct sun.',
 cite:SUN+' slides 20–21; audio 20:39–21:04'},

{id:'L3C-056', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'organic-mech', dupOf:'L3C-052',
 tags:['mechanism'], source:'both',
 stem:'How do organic sunscreens protect the skin?',
 options:[
  {t:'They absorb UV and release heat', correct:true, why:'Slide 22: organic sunscreens absorb UV radiation in the UVB and/or UVA range and convert it to heat energy (audio 21:04–21:27); scattering is the sunblock mechanism.'},
  {t:'They scatter UV radiation off the skin', correct:false, why:'Scattering and reflection describe the inorganic sunblocks (slide 20).'},
  {t:'They raise melanin production in the skin', correct:false, why:'Increased melanin is a psoralen effect (slide 3).'},
  {t:'They thicken the stratum corneum', correct:false, why:'Not the mechanism on slide 22.'}],
 teach:'Slide 22: all sunscreens are organic compounds that absorb UV radiation in the UVB and/or UVA ranges and convert it to heat; products may combine them.',
 cite:SUN+' slides 3, 20, 22; audio 21:04–22:09'},

{id:'L3C-057', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'benzophenones-facts',
 tags:['tell'], source:'both',
 stem:'Which sunscreen family has poor substantivity and can cause sensitization?',
 options:[
  {t:'Benzophenones', correct:true, why:'Slide 24 gives benzophenones two points: poor substantivity and the ability to cause sensitization; she named both in the recording (audio 22:09–22:35).'},
  {t:'Anthranilates', correct:false, why:'Slide 24: used only in combination products for broad UV coverage.'},
  {t:'Aminobenzoates', correct:false, why:'Slide 24: the most effective UVB absorbers; may stain clothing.'},
  {t:'Dibenzoylmethanes', correct:false, why:'Slide 24: activity starts to decrease after 15 minutes of use.'}],
 teach:'Slide 24 gives one point per family; she asked students to learn these because they differ between families (audio 22:09–22:35).',
 cite:SUN+' slide 24; audio 22:09–22:35'},

{id:'L3C-058', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'aminobenzoates-facts',
 tags:['tell'], source:'slide',
 stem:'Which sunscreen family is the most effective at absorbing UVB rays?',
 options:[
  {t:'Aminobenzoates', correct:true, why:'Slide 24: the most effective at absorbing UVB rays; may stain clothing.'},
  {t:'Dibenzoylmethanes', correct:false, why:'Slide 24: activity starts to decrease after 15 minutes of use.'},
  {t:'Cinnamates', correct:false, why:'Slide 24: do not adhere well; depend on the vehicle for substantivity.'},
  {t:'Benzophenones', correct:false, why:'Slide 24: poor substantivity; can cause sensitization.'}],
 teach:'Slide 24 "fun facts": benzophenones, anthranilates, dibenzoylmethanes, aminobenzoates, cinnamates, salicylates, each with its own point.',
 cite:SUN+' slide 24'},

{id:'L3C-059', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'anthranilates-facts',
 tags:['tell'], source:'slide',
 stem:'Which sunscreen family is used only in combination products to give broad UV coverage?',
 options:[
  {t:'Anthranilates', correct:true, why:'Slide 24 (printed "Anthralates"): anthranilates are used only in combination products, to give broad UV coverage.'},
  {t:'Aminobenzoates', correct:false, why:'Slide 24: the most effective UVB absorbers.'},
  {t:'Salicylates', correct:false, why:'Slide 24: easily removed by water or perspiration.'},
  {t:'Benzophenones', correct:false, why:'Slide 24: poor substantivity; can cause sensitization.'}],
 teach:'Slide 24: anthranilates appear only in combination products, for broad UV coverage.',
 cite:SUN+' slide 24'},

{id:'L3C-060', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'dibenzoylmethane-facts',
 tags:['tell','numbers'], source:'slide',
 stem:'For which sunscreen family does activity start to decrease after 15 minutes of use?',
 options:[
  {t:'Dibenzoylmethanes', correct:true, why:'Slide 24: dibenzoylmethane activity starts to decrease after 15 minutes of use; no other family on the slide carries a time point.'},
  {t:'Cinnamates', correct:false, why:'Slide 24: do not adhere well and depend on the vehicle.'},
  {t:'Anthranilates', correct:false, why:'Slide 24: used only in combination products.'},
  {t:'Aminobenzoates', correct:false, why:'Slide 24: the most effective UVB absorbers.'}],
 teach:'Slide 24 lists the 15-minute decline for the dibenzoylmethanes.',
 note:'Dr. Sikazwe gave avobenzone, a dibenzoylmethane, a photodegradation half-life of about 2 hours (his deck, slide 62). The two figures describe different measures; each is asked only in its own professor\'s items.',
 cite:SUN+' slide 24'},

{id:'L3C-061', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'salicylates-cinnamates',
 tags:['tell'], source:'slide',
 stem:'Which sunscreen family does not adhere well and is easily removed by water or perspiration?',
 options:[
  {t:'Salicylates', correct:true, why:'Slide 24: salicylates do not adhere to the skin well and are easily removed by water or perspiration; cinnamates also adhere poorly but depend on the vehicle instead.'},
  {t:'Aminobenzoates', correct:false, why:'Slide 24: the most effective UVB absorbers; may stain clothing.'},
  {t:'Dibenzoylmethanes', correct:false, why:'Slide 24: activity starts to decrease after 15 minutes.'},
  {t:'Anthranilates', correct:false, why:'Slide 24: used only in combination products.'}],
 teach:'Slide 24: cinnamates also adhere poorly and depend on the vehicle for substantivity; salicylates are easily removed by water or perspiration.',
 cite:SUN+' slide 24'},

{id:'L3C-062', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'safe', concept:'sunscreen-reaction-risk', multi:true,
 tags:['list','adverse'], source:'both',
 stem:'Which sunscreen ingredients carry the highest risk of dermatologic reactions? Select all that apply.',
 options:[
  {t:'PABA', correct:true, why:'Slide 25; (audio 23:21–23:51).'},
  {t:'Avobenzone', correct:true, why:'Slide 25; (audio 23:21–23:51).'},
  {t:'Oxybenzone', correct:true, why:'Slide 25; (audio 23:21–23:51).'},
  {t:'Zinc oxide', correct:false, why:'Physical sunscreen ingredients are less likely to cause dermal irritation (slide 25).'},
  {t:'Titanium dioxide', correct:false, why:'Physical sunscreen ingredients are less likely to cause dermal irritation (slide 25).'}],
 teach:'Slide 25: most chemical sunscreen actives have been linked to dermatologic reactions, the risk is higher with PABA, avobenzone and oxybenzone, and physical ingredients are less likely to irritate.',
 cite:SUN+' slides 20, 25; audio 22:35–23:51'},

{id:'L3C-063', skill:'counsel', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'safe', concept:'sunscreen-refer',
 tags:['counseling'], source:'both',
 stem:'A patient develops hives and vesicles after using a sunscreen. What is the advice?',
 options:[
  {t:'Refer the patient to a provider', correct:true, why:'Slide 25: rash, vesicles, hives or exaggerated sunburn, refer patient; (audio 22:59).'},
  {t:'Switch to a higher SPF of the same product', correct:false, why:'A reaction of this kind calls for referral (slide 25).'},
  {t:'Reapply the product more often', correct:false, why:'A reaction of this kind calls for referral (slide 25).'},
  {t:'Switch to a physical sunblock and continue', correct:false, why:'Physical sunblocks irritate less (slide 25), but rash, vesicles, hives or an exaggerated sunburn call for referral.'}],
 teach:'Mild skin irritation from sunscreens is common; rash, vesicles, hives or an exaggerated sunburn need referral (slide 25; audio 22:35–23:21).',
 cite:SUN+' slide 25; audio 22:35–23:21'},

{id:'L3C-064', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'safe', concept:'sunscreen-systemic',
 tags:['numbers'], source:'both',
 stem:'What has been observed about systemic absorption of sunscreen actives?',
 options:[
  {t:'Plasma levels above 0.5 ng/mL', correct:true, why:'Slide 25; (audio 23:51–24:13) the implications are not yet known.'},
  {t:'Absorption below detection in blood', correct:false, why:'Slide 25: significant systemic absorption has been observed.'},
  {t:'Proven organ toxicity at normal levels of use', correct:false, why:'Slide 25: the implications are not yet known.'},
  {t:'Absorption limited to physical sunblocks', correct:false, why:'The observations concern sunscreen actives (slide 25).'}],
 note:'In the recording she said studies "measured zero point five nanograms per mil" (audio 23:51); slide 25 gives 0.5 ng/mL as the FDA threshold that was exceeded. Keyed to the slide.',
 teach:'Studies have found plasma concentrations beyond the FDA threshold of 0.5 ng/mL; what this means is still being watched (slide 25; audio 23:51–24:36).',
 cite:SUN+' slide 25; audio 23:51–24:36'},
/* ---- Added 2026-11-07 for Dr. Smith's Exam 1 hints (sunscreen vs sunblock by
   ingredient, SPF and broad spectrum, photosensitizing drugs, UVA vs UVB damage). */
{id:'L3C-007', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-pso', sub:'mech', concept:'psoralen-why',
 tags:['mechanism','reasoning'], source:'both',
 stem:'Why does DNA intercalation by methoxsalen help psoriasis?',
 options:[
  {t:'Cells can no longer divide', correct:true, why:'(Audio 00:59–01:10) once the light-activated psoralen intercalates, "cells can no longer divide", so psoralens treat psoriasis by their antiproliferative effect; slide 3 lists antiproliferative, immunosuppressive and anti-inflammatory effects.'},
  {t:'Keratinocytes make more filaggrin', correct:false, why:'Filaggrin belongs to the AD barrier story (Pathophys slide 15), not to psoralens.'},
  {t:'Mast cell cAMP rises', correct:false, why:'Raising cAMP is the action of PDE-4 inhibitors (PCol slide 32).'},
  {t:'IL-17A is neutralized', correct:false, why:'IL-17A is bound by secukinumab and ixekizumab (PCol slide 66).'}],
 teach:'Psoriasis is keratinocyte hyperproliferation driven by T cells (Pathophys slides 19, 23). Psoralens normalize the number and arrangement of keratinocytes and are cytotoxic to T cells because they intercalate DNA (slide 3; audio 01:10–01:50).',
 cite:SUN+' slide 3; audio 00:30–01:50'},

{id:'L3C-023', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uva-dermis-smith',
 tags:['tell'], source:'both',
 stem:'Which type of UV light penetrates further into the dermis?',
 options:[
  {t:'UVA', correct:true, why:'Slide 8: UVA penetrates further into the dermis than UVB radiation; (audio 05:30–05:45) "it will penetrate further into the skin compared to UVB".'},
  {t:'UVB', correct:false, why:'Slide 8 puts the deeper penetration with UVA.'},
  {t:'Both reach the same depth', correct:false, why:'Slide 8 states a difference: UVA penetrates further.'},
  {t:'Neither passes the stratum corneum', correct:false, why:'UVA reaches the dermis (slide 8), and UVB causes sunburn in living skin (slide 11).'}],
 teach:'UVA (320–400 nm) is minimally filtered by ozone, passes glass and reaches deeper; UVB (290–320 nm) is about 90% filtered by ozone and does not pass glass (slide 8).',
 cite:SUN+' slides 8, 11; audio 04:30–05:45'},

{id:'L3C-024', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uva-uvb-shared', multi:true,
 tags:['tell','list'], source:'both',
 stem:'Which kinds of damage can both UVA and UVB cause? Select all that apply.',
 options:[
  {t:'Photoaging', correct:true, why:'Slide 8 lists photoaging under both UVB and UVA (audio 05:00–05:10, 05:55–06:05).'},
  {t:'Immunosuppression', correct:true, why:'Slide 8 lists immunosuppression under both UVB and UVA.'},
  {t:'Skin cancer', correct:true, why:'Slide 8 lists skin cancers under both; she called UVB the most concern for skin cancer and said UVA contributes "but not so much as UVB" (audio 05:00–05:10, 06:00–06:10).'},
  {t:'Sunburn', correct:false, why:'Sunburn is listed for UVB (slide 8); UVA "does not seem to cause sunburn" because it is less energetic (audio 05:55–06:20).'},
  {t:'Most phototoxic drug reactions', correct:false, why:'Slide 8 gives these to UVA only.'}],
 teach:'Slide 8: UVB can cause sunburn and produces vitamin D3 in the skin; UVA is responsible for most phototoxic reactions with drugs. Both may cause photoaging, immunosuppression and skin cancers.',
 cite:SUN+' slide 8; audio 04:30–06:25'},

{id:'L3C-025', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-uv', sub:'uvab', concept:'uva-no-burn',
 tags:['tell','reasoning'], source:'both',
 stem:'Why does UVA tend not to cause sunburn?',
 options:[
  {t:'It is less energetic than UVB', correct:true, why:'Slide 8: UVA is less energetic than UVB; (audio 06:10–06:20) "It is a little bit less energetic than UVB light. That\'s why it doesn\'t tend to cause sunburn."'},
  {t:'Ozone filters most of it out', correct:false, why:'UVA is minimally filtered by ozone; it is UVB that is about 90% filtered (slide 8).'},
  {t:'It cannot pass through glass', correct:false, why:'UVA penetrates glass; UVB does not (slide 8).'},
  {t:'It stops at the stratum corneum', correct:false, why:'UVA penetrates further into the dermis than UVB (slide 8).'}],
 teach:'Because sunburn comes from UVB, the SPF number, which measures protection against burning, is a measure of UVB protection (slide 13; audio 11:30–11:50).',
 cite:SUN+' slides 8, 13; audio 05:45–06:20, 11:30–11:50'},

{id:'L3C-042', skill:'mech', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'critical-wavelength',
 tags:['definition'], source:'both',
 stem:'In the critical wavelength method, what is a product\'s critical wavelength?',
 options:[
  {t:'Where 90% of its UV absorption is reached', correct:true, why:'(Audio 12:30–13:10) the product is scanned from about 220 to 400 nm, and the wavelength at which 90% of its total absorption has occurred is the critical wavelength; slide 14: this method assesses UVA protection.'},
  {t:'Where it first begins to absorb any UV light', correct:false, why:'The method finds where 90% of the absorption has occurred, not where absorption begins (audio 12:30–13:10).'},
  {t:'The shortest wavelength that causes 1 MED', correct:false, why:'MED is the least UV dose giving clear erythema (slide 12); it is used for SPF, not the critical wavelength.'},
  {t:'The wavelength that ozone stops', correct:false, why:'Ozone filtering separates UVB from UVA (slide 8); it is not how a product is tested.'}],
 teach:'A product with a critical wavelength of 370 nm or greater may be labeled "broad spectrum"; a broad-spectrum product with SPF 15 or more may claim it "decreases risk of skin cancer and early aging caused by the sun" (slide 14; audio 13:10–14:00).',
 cite:SUN+' slides 8, 12, 14; audio 12:00–14:00'},

{id:'L3C-043', dupOf:'L3C-032', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'def', concept:'spf-vs-broad',
 tags:['tell','counsel'], source:'both',
 stem:'A sunscreen is labeled SPF 30 but not "broad spectrum." What does its label tell you?',
 options:[
  {t:'Its UVB protection, not its UVA coverage', correct:true, why:'Slide 13: SPF is primarily a measure of UVB protection and gives no information on UVA coverage; UVA protection is what the critical wavelength test behind "broad spectrum" assesses (slide 14; audio 11:30–12:00).'},
  {t:'It blocks about 97% of UVA', correct:false, why:'Slide 15: SPF 30 blocks about 97% of UVB, not UVA.'},
  {t:'Its critical wavelength is at least 370 nm', correct:false, why:'A critical wavelength of 370 nm or more is what allows the "broad spectrum" label, which this product lacks (slide 14).'},
  {t:'It may claim to lower skin cancer risk', correct:false, why:'That claim needs broad spectrum with SPF 15 or greater (slide 14).'}],
 teach:'SPF is the ratio of the UV dose that produces sunburn with the sunscreen to the dose that does without it (slide 13). SPF 15 blocks about 93% of UVB, SPF 30 about 97%, SPF 50 about 98% (slide 15).',
 cite:SUN+' slides 13–15; audio 10:30–14:00'},

{id:'L3C-044', skill:'adverse', prof:'Smith', tier:'new', topic:'l3c-spf', sub:'sel', concept:'photosens-drugs', multi:true,
 tags:['adverse','photosensitivity','list'], source:'both',
 stem:'Which of these drugs are photosensitizing? Select all that apply.',
 options:[
  {t:'Doxycycline', correct:true, why:'PCol slide 44: photosensitivity in fair-skinned people is a side effect of oral tetracyclines (11/03 T 42–44); slide 45: doxycycline more so than minocycline or sarecycline.'},
  {t:'Tazarotene', correct:true, why:'PCol slide 18: tazarotene causes photosensitivity.'},
  {t:'Coal tar', correct:true, why:'PCol slide 54: coal tar is photosensitizing.'},
  {t:'Methoxsalen', correct:true, why:'Slide 3: psoralens are photosensitizing compounds combined with UVA light (audio 00:30–00:45).'},
  {t:'Adapalene', correct:false, why:'PCol slide 18: adapalene is photochemically stable ("sun stable"); a patient still needs sun protection because peeling removes outer skin (10/30 T 116–130).'},
  {t:'Shale tar', correct:false, why:'PCol slide 57: shale tar has no photosensitizing activity, unlike coal tar.'}],
 teach:'Patients on photosensitizing drugs need sun protection counseling (slide 18; audio 17:27–17:48), and slide 17 sets SPF greater than 45 for them. UVA is responsible for most phototoxic reactions with drugs (slide 8).',
 note:'Slide 18 links to the OTC textbook table of photosensitizing drugs; its content is not on the slide, so the drugs here are those her own pharmacology slides call photosensitizing.',
 cite:SUN+' slides 3, 8, 17–18; audio 00:30–00:45, 17:27–17:48'},

{id:'L3C-065', dupOf:'L3C-052', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'blk', concept:'sunblock-ingredient',
 tags:['tell'], source:'both',
 stem:'A product\'s active ingredient is titanium dioxide. What kind of product is it, and how does it protect?',
 options:[
  {t:'A sunblock; it scatters and reflects UV', correct:true, why:'Slide 20: sunblocks, or physical sunscreens, are inorganic particulates that scatter or reflect visible, UV and infrared radiation; zinc oxide and titanium dioxide are the U.S. products (audio 18:55–19:35). The drug chart (Sun Protection page) lists titanium oxide and zinc oxide as physical sunscreens.'},
  {t:'A sunscreen; it absorbs UV as heat', correct:false, why:'Absorbing UV and converting it to heat is how organic sunscreens such as avobenzone work (slide 22).'},
  {t:'A sunscreen; it absorbs mainly UVB', correct:false, why:'Titanium dioxide is a physical blocker, giving UVA and UVB protection (slide 20).'},
  {t:'A sunblock; it raises melanin in the skin', correct:false, why:'Raising melanin pigmentation is a psoralen effect (slide 3), not a sunblock action.'}],
 teach:'Sunblocks suit prominently exposed areas like the nose and ears and situations where sun exposure cannot be limited; they may occlude pores and stain clothing, melt in hot sun, and lose protection after 2 hours of direct sun (slides 20–21).',
 cite:SUN+' slides 3, 20–22; audio 18:55–21:05'},

{id:'L3C-066', dupOf:'L3C-052', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'organic-ingredient',
 tags:['tell','mechanism'], source:'both',
 stem:'A sunscreen lists avobenzone and oxybenzone as its active ingredients. How do these protect the skin?',
 options:[
  {t:'They absorb UV and convert it to heat', correct:true, why:'Slide 22: organic sunscreens absorb UV radiation in the UVB and/or UVA range and convert it to heat energy (audio 21:05–21:30). The drug chart lists avobenzone (dibenzoylmethane) and oxybenzone (benzophenone) as chemical sunscreens.'},
  {t:'They scatter and reflect UV light back', correct:false, why:'Scattering and reflecting is the sunblock action of inorganic particulates such as zinc oxide (slide 20).'},
  {t:'They thicken the stratum corneum', correct:false, why:'Epidermal thickness affects tanning (slide 9); it is not how a sunscreen works.'},
  {t:'They speed melanin production', correct:false, why:'Increased melanin is a psoralen effect (slide 3).'}],
 teach:'Slide 25: avobenzone and oxybenzone, with PABA, carry the highest risk of dermatologic reactions; physical sunscreen ingredients are less likely to irritate. Slide 24: benzophenones have poor substantivity and can cause sensitization; dibenzoylmethane activity starts to fall after 15 minutes.',
 cite:SUN+' slides 3, 9, 20, 22, 24–25; audio 21:05–23:40'},

{id:'L3C-067', type:'match', skill:'tell', prof:'Smith', tier:'new', topic:'l3c-prod', sub:'org', concept:'sunscreen-families-match',
 tags:['tell','match'], source:'slide',
 stem:'Match each sun protection ingredient to its family.', left:'Ingredient', right:'Family',
 pairs:[
  {l:'Padimate O', r:'Aminobenzoate (PABA)', why:'Drug chart, Sun Protection page: octyl dimethyl PABA, padimate O, para-aminobenzoic acid. Slide 24: aminobenzoates are the most effective at absorbing UVB.'},
  {l:'Octyl methoxycinnamate', r:'Cinnamate', why:'Drug chart: cinnamates. Slide 24: they do not adhere to skin well and depend on the vehicle.'},
  {l:'Homosalate', r:'Salicylate', why:'Drug chart: salicylates. Slide 24: easily removed by water or perspiration.'},
  {l:'Oxybenzone', r:'Benzophenone', why:'Drug chart: benzophenones. Slide 24: poor substantivity; can cause sensitization.'},
  {l:'Menthyl anthranilate', r:'Anthranilate', why:'Drug chart: anthranilates. Slide 24: used only in combination products for broad UV coverage.'},
  {l:'Avobenzone', r:'Dibenzoylmethane', why:'Drug chart: dibenzoylmethane. Slide 24: activity starts to decrease after 15 minutes.'},
  {l:'Zinc oxide', r:'Oxide (physical sunblock)', why:'Drug chart: oxides, physical sunscreen. Slide 20: scatters or reflects UV.'}],
 teach:'The first six are organic (chemical) sunscreens that absorb UV and release heat (slide 22); zinc oxide and titanium dioxide are physical sunblocks that scatter and reflect it (slide 20).',
 // Maintainer note (2026-11-08): optional practice; matching items stay off the Exam 1
 // practice papers. The bank has no "chart" source value, so `source` stays 'slide' for
 // the family properties; the pairings themselves are chart-sourced (see note and cite).
 note:'The ingredient-to-family pairings come from the course drug chart, p. 1; the family properties from Sun slides 20–24.',
 cite:'Drug chart p. 1; Sun 20–24: '+SUN+' slides 20–24'}
);
