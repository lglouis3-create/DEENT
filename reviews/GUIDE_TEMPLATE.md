# Guides objective sections: the g2 components

For writers converting a `<section class="gobj">` of `src/guide.js` from dense bullets to the
layout Louis approved on 2026-11-14 (worked example: `gobj-p5-6`, saved as
`/tmp/guide2/sections/gobj-p5-6.html`; screenshots in `/tmp/guide2/shots/`). The styles are in
`src/guide2_css.js` (every selector starts `.gobj .g2-`); do not add CSS or inline `style=` in a
section. If a section needs something the components below cannot do, say so in your report
instead of inventing a class.

## Hard rules

1. Keep EVERY fact, number and citation of the original section. You may regroup, split,
   tabulate and reorder. You may add only: block numbers, table captions, row and column labels,
   sub-headings, tile labels that state what a number measures, and the control word
   "Show answer". Nothing is dropped. Keep the original wording of each fact (verbs included:
   "Apply to a clean, dry area", not "A clean, dry area"), so `facts.py` reports no missing words.
2. Citations stay as plain text with the deck abbreviation, such as `(DT 10)` or `(AT 23&ndash;25)`;
   the page turns them into slide links. They may move to the end of their line, cell, caption or
   heading inside `<span class="g2-src">(DT 10)</span>`. `T@` marks stay.
3. A citation that covered several facts stays ONE citation placed where it still covers all of
   them (a block heading, a table caption, a `g2-sub` sub-heading). Do not copy it onto single
   facts as if each had its own source, and do not guess a narrower one. Exception: a tile may
   repeat the one citation of the sentence it came from (three tiles from one `(DT 36)` sentence
   each show `(DT 36)`).
4. A fact is marked "Said in class" (`g2-said`) only when its own citation is a `T@` mark and
   nothing else. A slide fact, or a fact with a slide and a `T@` mark, is never styled that way;
   it keeps its marks in `g2-src`.
5. No metaphors, no study advice, no sentence about the page itself. American spelling.
6. Plain HTML only. Allowed interactive elements: `<details>`, buttons with
   `data-jump="view:anchor"` and `onclick="show('ftu')"`. No scripts, no inline styles, no
   backticks, no `${`, no backslashes (the section sits inside a JavaScript template string).
7. No separators or labels made by CSS (`::before` content): what the reader sees must be real
   text that copy and search can see. Write "OR" as text.
8. Nothing that looks tappable unless it is: no pill-shaped tags for plain words.
9. Must work at 390 px (no horizontal page scroll) and 1180 px; buttons and `<summary>` are at
   least 44 px high (the CSS does this for `g2-primary`, `.g2-btns .chip`, `g2-self`). Light
   theme only.
10. Compatibility (other files read these):
    - the `<section class="gobj" id="...">` line, its `<h3>` and its `<div class="gbar">` stay
      byte-for-byte unchanged;
    - every topic block is `<div class="gpt g2-block">` and its FIRST child is the `<h5>`
      heading (search indexes `.gpt h5`); keep the heading's words, add only the number;
    - poll boxes keep class `gpoll`; `ghook`, `gask`, `gtell` boxes keep their class and may
      stay as they are;
    - existing chip buttons are kept exactly (same attributes and text) and may move into a
      `g2-btns` row; `<!--DIA:...-->` markers and every `data-*` attribute are kept exactly;
    - do not put a citation inside `<summary>`, `<button>` or `<label>` (no slide link is made
      there); put it in the answer or after the control.
11. Check before handing over:
    `python3 /tmp/guide2/facts.py <section-id> <your-section.html>` from the DEENT repo directory
    must end `RESULT: PASS`, with `MISSING words` empty or each word explained (a word moved into
    a label still counts as present). Read the `EXTRA numbers` line: each must be a block number
    you did not wrap in `g2-num`, a repeated citation on tiles, or a number repeated because one
    fact is shown in two bands; anything else is an added fact and must go.

## Which component for which content

| Content in the original | Use |
|---|---|
| One topic of the section (an old `gpt` with its `h5`) | `g2-block`, numbered in reading order |
| 3 or more parallel numbers or facts (FTU per area, drug by line, product strengths) | `g2-table` with column headings |
| A list of unlike facts, each needing a name (counseling points, "how to apply") | `g2-table g2-kv` (label and value) |
| ONE number that is itself the thing to memorize (an onset, a maximum length, a reassess time) | `g2-tile`, at most about 6 in a block |
| Treatment by severity or by step, with acute and maintenance parts | `g2-ladder` with `g2-rung` |
| A rule that applies across bands ("not resolved in 7 days: consider ...") | `g2-note`, its scope in the label |
| A formula | `g2-formula`, one line |
| Worked arithmetic | `g2-table g2-work g2-stack`, one row per case, open (not behind a tap) |
| A point whose only source is a `T@` mark | `g2-said` |
| Her poll, an in-class question | `<details class="g2-self">`: question visible, answer on tap |
| A sentence that is none of these (a pointer to another guide) | `<p class="g2-p">` |
| A jump to practice | `g2-primary` (one per section at most); Reference jumps stay `chip` |

Tables against tiles: a tile carries one number and one statement. If the reader has to compare
several drugs or areas, that is a table. Never write a tile whose label is only a drug name or
only a category word: the label, read together with the number, must be a full statement.

## Components

### Block with numbered heading

```html
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Quantity: fingertip units <span class="g2-src">(DT 10&ndash;13)</span></h5>
...
</div>
```

`g2-num` holds the number and its period as text. `facts.py` ignores it.

### Sub-heading and plain paragraph

```html
<p class="g2-sub">Formula and worked amounts <span class="g2-src">(DT 13)</span></p>
<p class="g2-p">Mechanisms: see the pharmacology and medicinal chemistry guides above <span class="g2-src">(DT 35, 38, 41, 43)</span>.</p>
```

### Two columns side by side (one column under 820 px)

```html
<div class="g2-two">
<div> ...left: tables, formula, tiles... </div>
<div> ...right... </div>
</div>
```

Two children only. Put the longer table alone on one side.

### Table with column headings

```html
<table class="g2-table">
<caption>Adult FTU per area <span class="g2-src">(DT 11)</span></caption>
<thead><tr><th scope="col">Area</th><th scope="col" class="g2-n">FTU</th></tr></thead>
<tbody>
<tr><td>Scalp</td><td class="g2-n">3</td></tr>
<tr><td>Face and neck</td><td class="g2-n">2.5</td></tr>
</tbody>
</table>
```

`g2-n` on a cell: a number column (right-aligned, bold). Use `<th scope="row">` for a first
column that names the row. Two or three columns fit a phone as they are. The page puts every
table in its own sideways-scrolling box, so a wider table never scrolls the page; for a table of
three or more columns with long text, add `g2-stack`.

### Table that becomes one card per row on phones

```html
<table class="g2-table g2-stack">
<caption>Ingredients <span class="g2-src">(DT 64)</span></caption>
<thead><tr><th scope="col">Product</th><th scope="col">Strength</th><th scope="col">What it is</th></tr></thead>
<tbody>
<tr><th scope="row">Zinc oxide</th><td><span class="g2-lab">Strength</span><b>1&ndash;40%</b></td><td>The active ingredient (common, excellent, thick and tacky)</td></tr>
<tr><th scope="row">A &amp; D Ointment</th><td></td><td>Has lanolin and petrolatum, no zinc oxide</td></tr>
</tbody>
</table>
```

The first cell of each row must be `<th scope="row">` (the card's title). On phones the column
headings are not shown, so a cell whose meaning depends on its column (a bare number) starts
with `<span class="g2-lab">Column name</span>`; it is hidden on wide screens and ignored by
`facts.py`. An empty `<td></td>` is correct where the source says nothing (it disappears on
phones). Never fill a silent cell with a dash.

### Label and value table

```html
<table class="g2-table g2-kv">
<caption>Potency and vehicle</caption>
<tbody>
<tr><th scope="row">Vehicle</th><td>Ointment &gt; cream &gt; lotion &gt; solution &gt; gel &gt; spray <span class="g2-src">(DT 37)</span></td></tr>
<tr><th scope="row">Storage</th><td>Store cool, dry, room temperature (not the bathroom, T@37049)</td></tr>
</tbody>
</table>
```

Row labels are one to three plain words. The value keeps the original sentence. The caption is
optional when the block heading already says what the table is.

### Formula line

```html
<p class="g2-formula"><span class="g2-k">Formula</span>Grams = FTU &times; 0.5 g &times; applications a day &times; days</p>
```

### Worked arithmetic

```html
<table class="g2-table g2-work g2-stack">
<thead><tr><th scope="col">Case</th><th scope="col">Arithmetic</th><th scope="col">Grams</th><th scope="col">Tube</th></tr></thead>
<tbody>
<tr><th scope="row">Face and neck BID 2 weeks</th><td>1.25 g &times; 2 &times; 14</td><td>= 35 g</td><td class="g2-ans">&rarr; 45 g</td></tr>
</tbody>
</table>
```

One step per cell, the `=` and the arrow written in the cell, the final answer in `g2-ans`. On
phones each case becomes a card with its arithmetic on one line. Column names fit the
calculation (Dose, Volume, Days ...).

### Severity or step bands

```html
<div class="g2-ladder">
<div class="g2-rung"><div class="g2-sev">Everyone</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Basic management</span><p>Skin care, moisturizer, warm baths or showers with non-soap cleansers, trigger avoidance.</p></div>
</div></div>
<div class="g2-rung g2-s2"><div class="g2-sev">Moderate</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute (moderate and severe)</span><p><b>Medium-to-high potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b>.</p></div>
<div class="g2-cell"><span class="g2-k g2-maint">Maintenance</span><ul>
<li><b>Low-potency TCS</b> 1&ndash;2 times daily (including face); <b>medium potency</b> 1&ndash;2 times weekly (except face)</li>
<li><span class="g2-or">OR</span> <b>TCI</b> 1&ndash;2 times daily or 2&ndash;3 times weekly</li>
</ul></div>
</div></div>
</div>
<div class="g2-note"><span class="g2-k">Moderate and severe, acute: not resolved in 7 days</span><p>Consider nonadherence, infection, misdiagnosis, contact allergy to medications, referral.</p></div>
```

- One `g2-rung` per band, in the source's order, mildest first. Band color: no modifier (gray,
  for "everyone" or a base step), then `g2-s1`, `g2-s2`, `g2-s3` (darker blue as severity rises).
- One or two `g2-cell` per band. Each cell starts with a `g2-k` label: `g2-acute` for the acute
  part, `g2-maint` for maintenance, plain `g2-k` for anything else. A band the source gives only
  one part for has ONE cell; there is no empty cell and no dash.
- When the source states one rule for two bands ("moderate and severe, acute: ..."), write it
  in each band it applies to and say so in the label or in parentheses, as above.
- Alternatives joined by OR in the source stay one list with `<span class="g2-or">OR</span>` as
  text at the start of each alternative; items the source joined into one option stay one `<li>`.
- `g2-note` (amber box) sits directly under the ladder; its `g2-k` label states which bands and
  which condition it covers; its content is a plain sentence, not tags.

### Number tiles

```html
<p class="g2-sub">Onset <span class="g2-src">(DT 52, 38)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Topical steroid onset: starts working in</span><span class="g2-tile-num">24&ndash;48 h</span></div>
<div class="g2-tile"><span class="g2-tile-label">TCI: reassess at</span><span class="g2-tile-num">6 weeks</span><span class="g2-src">(DT 40)</span></div>
</div>
```

- Order inside a tile is fixed: `g2-tile-label` ABOVE `g2-tile-num`, then an optional `g2-src`.
- The label says what the number measures AND for which drug or situation, so that label plus
  number read as one statement: "OTC hydrocortisone 1% BID: maximum length of treatment" /
  "3&ndash;7 days". Not allowed: "Topical steroid" under "24&ndash;48 h"; "Length" over "6 weeks".
- The label may use only words the original gives for that number (its heading word such as
  "onset" or "length", its verb such as "reassess at", "seek help at", "never past") plus a
  plain restatement of that heading word ("starts working in" for onset). Do not add a
  condition the source did not state.
- `g2-tile-num` holds the number with its unit and nothing else.
- Two tiles per row (default). `class="g2-tiles g2-wide"` lets a full-width row hold more.
- A citation shared by all the tiles of a group goes on the `g2-sub` line above the group.

### Said in class

```html
<p class="g2-said"><span class="g2-k">Said in class</span>Start low <span class="g2-src">(T@56572)</span></p>
```

Goes where the fact belongs (inside the band, the table cell, the block), not in a separate
box at the end. Rule 4 decides whether it may be used.

### Poll or in-class question as a self-test

```html
<div class="gpoll"><b>Her polls (the 21-year-old)</b>
<details class="g2-self"><summary>First-line maintenance <span class="g2-tap">Show answer</span></summary><p>Basic management + topical corticosteroid <span class="g2-src">(T@58910&ndash;59410)</span></p></details>
</div>
```

The `<summary>` holds the question in the original's words; the `<p>` holds the answer and the
citation. Closed by default (no `open` attribute). A poll that belongs to one block (a
calculation poll) may sit in that block as a `g2-self` on its own. The box's `<b>` heading is
kept as written.

### Buttons

```html
<div class="g2-btns"><button type="button" class="g2-primary" onclick="show('ftu')">Practice fingertip-unit calculations</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
```

`g2-primary` only for the fingertip-unit practice jump, in the block about amounts. Existing
`chip` buttons move, unchanged, to the end of the block they belong to.

### Citation

```html
<span class="g2-src">(DT 36; T@37425)</span>
```

Keep the parentheses and the deck abbreviation inside the span. A `T@` mark that sat inside a
sentence's own parentheses with other words ("not the bathroom, T@37049") stays where it is.

## Order of work for one section

1. Copy the original section from `git show 22b81b8:src/guide.js`.
2. List its facts with their citations; note which citation covers which facts.
3. Number the blocks in reading order (keep the original order unless one block is needed to
   read another), choose a component for each group of facts from the table above.
4. Write the section; save it as `/tmp/guide2/sections/<section-id>.html` (the whole
   `<section ...>...</section>` element).
5. Run `facts.py`; fix until `RESULT: PASS` and no unexplained missing word or extra number.
6. `python3 /tmp/guide2/splice.py src/guide.js /tmp/guide2/sections/<section-id>.html`, build
   (`cd src && python3 build.py --preview`), then
   `NODE_PATH=$(npm root -g) node /tmp/guide2/shot.js $PWD/preview/index.html <section-id>`
   (run from the repo directory): it prints link count, page width, small touch targets and
   overflowing elements, and writes `/tmp/guide2/shots/<section-id>-ipad.png`, `-phone.png` and
   `-phone-open.png`. Look at the pictures; every tile and every phone card must be clear
   without its neighbors.
