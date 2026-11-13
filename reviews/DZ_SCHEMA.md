# Disease map: content schema (one JSON file per writer: part_<X>.json)

The approved layout is the mockup the mockup of 2026-11-12 (version 6; not kept in the repo) (open it and read its psoriasis and poison ivy cards: your cards must read like those: short labelled rows, bullets, no paragraphs). A renderer turns your JSON into that layout. Write valid JSON (UTF-8, no comments, no trailing commas); validate with `python3 -c "import json;json.load(open('part_X.json'))"`.

```
{
 "cards":[ CARD, ... ],
 "drugs":{ "<key>": DRUG, ... },
 "terms":{ "<key>": ["Shown name","One-line definition","source"] },
 "tell":[ TELL, ... ],
 "pairs":[ PAIR, ... ],
 "photos":[ {"id":"ps-plaque","file":"ps-plaque.jpg","alt":"what it shows","src":"Patel Scaly slide 26"} ]
}
```

## Inline marks inside any text string
- `{{text}}`  a key fact covered in Recall mode (a number, drug name, cut-off, cytokine). Use on the 3–8 facts per step a question would turn on. Never cover a whole sentence.
- `[[key|shown text]]`  a defined term (key in "terms"). At most once per card per term.
- `**bold**`, and a leading `★ ` on a point she flagged in class (poll, "know this", repeated).
- `<<drugkey|Shown name>>` inside text makes a drug button (opens the drug panel).
- No other markup. No HTML.

## CARD
```
{"id":"psoriasis", "name":"Psoriasis", "group":"algorithm" | "selfcare",
 "lectures":"Smith 10/29 · Sikazwe 11/04 · Patel 11/11",
 "topics":["p7-pso","p7-psotx","p7-psosys","p7-bio","pso"],     // topic ids in the question bank, for the Practise button
 "short":["one line per step, max 5 lines, plain statements"],
 "steps":[ STEP, ... ],          // algorithm group: Who gets it / What goes wrong / How it looks and is graded / Treat it.  selfcare group: Cause and timing / Recognise it / Self-care or refer? / Treat it: match the product to the symptom.  Add or drop a step only if the lecture material requires it; keep 3–5 steps.
 "patients":[ PATIENT ×4–6 ],
 "numbers":[ ["≤ 5%","mild psoriasis (BSA)","Patel Scaly slide 31"], ... ]   // "Numbers to know": every figure a question could use, 4–12 rows
}
```
STEP: `{"title":"Treat it: her order of treatment","profs":["pa"],"q":"Recall-mode question for this step","src":"Patel Scaly slides 35–45; 11/11 lecture","blocks":[ BLOCK, ... ]}`  (profs: "sm" Smith, "sk" Sikazwe, "pa" Patel)

BLOCK kinds:
- `{"k":"facts","rows":[["Label","value text"],["Label",["bullet","bullet"]]]}`   label 1–4 words
- `{"k":"pts","items":["short point","short point"]}`
- `{"k":"sub","text":"Small heading"}`
- `{"k":"grades","rows":[["Mild","BSA {{≤ 5%}}","optional note"]]}`
- `{"k":"prof","p":"sm","rows":[["Label","value"]]}`   a professor-coloured box of labelled rows (use for Dr. Smith's or Dr. Sikazwe's content inside a step)
- `{"k":"map","title":"Which drug blocks which signal","rows":[["TNF-α","Adalimumab, etanercept, infliximab"]],"src":"Smith PCol slides 66–74"}`
- `{"k":"line","label":"First","title":"Topical agents (mild to moderate)","drugs":["steroid","calcipotriene"],"pts":["..."],"warn":"optional red warning","facts":[["Before the first dose",["..",".."]]],"pick":[["Face or skin folds","Low-potency corticosteroid"]],"move":"Move to the next line when: ..."}`
   algorithm cards: labels First / Next / Then / Last (her order). selfcare cards: the label is the symptom or situation ("Itching", "Wet or weeping", "Under 2 years", "Severe"). "pick" = "Pick by the patient": which choice in this line fits which patient detail (age, pregnancy, comorbidity, site, what was tried). "drugs" are keys in "drugs".
- `{"k":"warn","text":"..."}`
- `{"k":"photo","id":"ps-plaque"}`
- `{"k":"fig","label":"Watch how it works: the IL-23 / IL-17 step-through","jump":"guide:<section id>"}`  only for a figure/walkthrough/reference section that exists: find ids in /home/user/DEENT/src/guide.js, diagrams.js, figs2.js, reference.js (`data-jump="guide:..."` / `"ref:..."` values already used in the site are valid).

PATIENT (the "Practice patients" box; her case format; patient specifics decide the answer):
`{"t":"One or two sentences: a full patient.","q":"What do you recommend?","o":["four","choices","same","kind"],"a":0,"w":"Why the right one is right, with her cue if any.","x":{"choice text":"why this choice does not fit this patient"}}`  Give an "x" line for every wrong choice. Include: her polls for this condition retold (not verbatim), a next-step patient, a patient with an exclusion or age limit, a referral patient. The right answer must not stand out by length.

## DRUG  (the panel that opens from a drug button; one entry per drug or drug class used on your cards)
```
{"name":"Methotrexate","brand":"",
 "sm":{"text":"Target: inhibits dihydrofolate reductase (DHFR); purines run short.","src":"PCol slide 59"},        // Dr. Smith: target/mechanism. Omit if she did not teach it.
 "sk":{"text":"A folic acid analog; its pteridine ring competes at DHFR.","src":"DPAW pages 30–31"},            // Dr. Sikazwe: chemistry. Omit if not taught.
 "pa":[{"dz":"psoriasis","role":"Usually the first oral systemic agent","how":"Onset 3–6 weeks; folic acid 1–5 mg daily","src":"Patel Scaly slide 39"}],   // Dr. Patel: one row per disease card it is used in, so the same drug's roles across diseases sit together (e.g. salicylic acid: acne / scaly dermatoses / warts with the strength for each)
 "counsel":["What to tell the patient: one instruction per line (how to apply or take it, how long, what to expect and when, what to avoid, when to come back or stop)"],
 "counselSrc":"Patel Scaly slides 36, 39; 11/11 lecture",
 "avoid":["Who should not get it / cautions: age limits, pregnancy, comorbidities, interactions"]}
```
"counsel" is required wherever her slides or words give counseling for the drug; her objectives ask students to counsel on directions, duration, expected onset, adverse effects, and follow-up.

## TELL  ("Tell apart" view)
`{"id":"scaly3","title":"Dandruff, seborrheic dermatitis or psoriasis","cols":["Dandruff","Seborrheic dermatitis","Psoriasis"],"path":[{"q":"Is the skin inflamed?","a":["No → **dandruff**","Yes → next question"]}],"rows":[["Scale",["Thin white or grey flakes","Yellow, oily, on red skin","Silvery-white on sharp-bordered plaques"],"optional one-line key that separates them"]],"photo":"optional photo id","src":"Patel Scaly slide 6; 11/10 lecture"}`
"path" is the order of questions to ask to decide (2–3 questions).

## PAIR  ("Drugs that get confused" view)
`{"title":"IL-17A cytokine or IL-17 receptor?","a":["Secukinumab, ixekizumab","bind the IL-17A cytokine"],"b":["Brodalumab","binds IL-17 receptor A"],"same":"What the two share.","profs":[["sm","text with source"],["pa","text with source"]]}`

## Rules for every writer
- Every number, age, dose, duration, drug name and claim must be read this session from a slide, a transcript or an existing Reference section / question in the repo, and its location goes in the nearest "src". If you cannot find it, leave it out. Where slide and speech conflict and it is unresolved, state both in one row or leave the point out (the Reference sections and question-file header comments record these).
- Literal language. No metaphors, no study advice, no sentence about the card itself. Labels and values short enough to read on a phone.
- Use what Dr. Patel stressed (polls, "know this", repeats) to choose what goes on the card; put ★ on those points.
- Sources in the repo (read-only; do NOT edit anything under /home/user/DEENT, do not run git): /home/user/DEENT/src/reference.js (Reference tables with slide numbers: ref-p5-*, ref-p6-*, ref-p7-*, ref-p8-*, ref-targets rows tgt-* for Dr. Smith's drug targets, and Dr. Sikazwe's chemistry tables), guide.js (objective sections), the question files q*.js (items carry `why`, `teach`, `cite`), likely_data.js (stars = what she stressed), druglist_data.js, decks in /home/user/DEENT/src/decks/ (PDFs; transcripts DEENT_Lecture_11.06/11.10/11.11/11.12_transcript.txt; polls PollEV_Dr_Patel.pdf and PollEV_Dr_Patel_11.12.pdf).
- Photos: where the look of the condition is what a question tests, crop the picture out of her slide. The decks are a student's annotated copies: the crop must contain NO handwriting, highlighting or typed student notes, only the photograph/figure. Method: `pdftoppm -r 110 -f N -l N -jpeg deck.pdf src/dz_parts/tmp_<id>` then crop with Python PIL to the photo's box, save to .../dz/img/<id>.jpg (longest side ≤ 900 px, quality 82), then OPEN the saved crop with the Read tool and confirm it is clean; if you cannot get a clean crop, skip that photo. 0–3 photos per card.
- Finish by validating the JSON, and checking: every drug key used in a "line" or `<<key|..>>` exists in "drugs"; every `[[key|..]]` exists in "terms"; every photo id has a file; every patient has 4 choices, one answer and "x" for each wrong choice.
- Report back: cards written, drug keys, photos saved, anything left out for lack of a source, and any conflict you met.
