#!/usr/bin/env python3
"""The page map for the slide links (PHAR 4346 DEENT): slide_data.js.

    python3 slide_map.py                 compare every deck, print the report, write slide_data.js
    python3 slide_map.py --report F.md   also write the report to F
    python3 slide_map.py --tables        rewrite only the hand-kept tables below (names, sections)
                                         into slide_data.js, keeping its page maps and titles; this
                                         needs no deck file
    DECKS_DIR=/path CLEAN_DIR=/path      where the decks are (defaults: src/decks/ and
                                         src/decks/clean/ of the main checkout, see DEFAULT_DECKS)

The site's citations were written from Louis's annotated copies of the decks
(src/decks/, gitignored: they carry his handwriting and are never shown). The
slide viewer shows the clean copies he uploaded on 2026-11-13 (src/decks/clean/).
For each deck this script takes the text of every page of both copies
(pdftotext), aligns the two page sequences (a page of the annotated copy goes to
the clean page with the same text, in order), and writes, per deck:

  id, prof, exam    the deck's short id, its professor and the exam it is on
  files             the file names the citations use for it (course.js `lectures[].deck`)
  label             what a reader sees in the viewer ("Dr. Smith, Skin Pharmacology")
  unit              'Slide' or 'Page' (Dr. Sikazwe's deck is cited by the page of the file)
  pages, ar         the number of clean pages (images deck/<id>/<NN>.webp, render_deck.py) and their
                    width over height
  cited             the highest number a citation of this deck may carry
  map               {cited number: clean page} ONLY where the two differ; a cited number that
                    has no clean page maps to 0 and is never linked; null = every cited number
                    is its own clean page
  titles            one line per clean page, for the image's alt text

and copies in the two hand-kept tables of slide_tables.json that slide_ui.js resolves a
citation with: names (how a citation names a deck in words) and sections (which deck
a bare "slide 12" belongs to inside a Reference, Tell apart or Guide section).

A page pair whose text does not settle it (few words on the page, or a low
score) is compared as a picture as well (pdftoppm, 48 px wide, grey), and the
report lists every such pair and every place the map is not the identity, so
they can be looked at before the map is trusted.
"""
import difflib, json, os, re, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'slide_data.js')
# The decks are gitignored; a worktree does not have them, the main checkout does.
DEFAULT_DECKS = [os.path.join(HERE, 'decks'), '/home/user/DEENT/src/decks']

# id, professor, exam, annotated file (the name the citations use), clean file, label, unit
DECKS = [
    ('pp',  'Smith',   1, 'Skin-Pathophys-Students-2026.pdf', 'SkinPathophysStudents2026.pdf', 'Dr. Smith, Skin Pathophysiology', 'Slide'),
    ('pc',  'Smith',   1, 'Skin-PCol-Students-2026.pdf', 'SkinPColStudents2026.pdf', 'Dr. Smith, Skin Pharmacology', 'Slide'),
    ('sun', 'Smith',   1, 'DEENT_Sun_Exposure_2026.pdf', 'SunExposure2026Students.pdf', 'Dr. Smith, Sun Exposure', 'Slide'),
    ('mc',  'Sikazwe', 1, 'f26-DEENT-DPAW-mc.pdf', 'f26DEENTDPAWmc.pdf', 'Dr. Sikazwe, Medicinal Chemistry (DPAW)', 'Page'),
    ('p5',  'Patel',   2, 'Patel_Dermatitis-Therapeutics-Student.pdf', 'Patel_Dermatitis.pdf', 'Dr. Patel, Dermatitis', 'Slide'),
    ('p6',  'Patel',   2, 'Patel_Acne-Therapeutics-Student.pdf', 'Patel_Acne.pdf', 'Dr. Patel, Acne', 'Slide'),
    ('p7',  'Patel',   2, 'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf', 'Patel_ScalyDermatoses.pdf', 'Dr. Patel, Scaly Dermatoses', 'Slide'),
    ('p8o', 'Patel',   2, 'Patel_Outdoor-Exposures-Student.pdf', 'Patel_OutdoorExposures.pdf', 'Dr. Patel, Outdoor Exposures', 'Slide'),
    ('p8s', 'Patel',   2, 'Patel_Sun-Exposure-Student.pdf', 'Patel_SunExposure.pdf', 'Dr. Patel, Sun Exposure', 'Slide'),
    ('p8w', 'Patel',   2, 'Patel_Wound-Care.pdf', 'Patel_WoundCare.pdf', 'Dr. Patel, Wound Care', 'Slide'),
    ('p8c', 'Patel',   2, 'Patel_Warts-Corns-Calluses.pdf', 'Patel_WartsCornsCalluses.pdf', 'Dr. Patel, Warts, Corns and Calluses', 'Slide'),
]

# ---- hand-kept tables: src/slide_tables.json (slide_ui.js and slide_check.js read them from
# slide_data.js, where this script copies them) ------------------------------------------------
#   names     [name, deck id, bare]: how running text names a deck directly before "slide N"
#             ("Patel Scaly slide 12", "DPAW p. 43"); with bare = 1 the number may follow the name
#             itself ("PCol 55", "PP 8"). Longest names are tried first. The deck 'sun?' is the
#             word "Sun", which two decks share: it is settled by the professor named beside it or
#             by the section it is read in, and is not linked when neither says.
#   sections  [id or id prefix ending in "-", deck id or null, note]: the deck of a bare "slide N",
#             "(p. N)" or Slide-column number, by the section it is read in (the <h3 id> of
#             reference.js and tell.js, the <section class="gobj" id> of guide.js, an Atlas board
#             at-*, a drawn figure dg-rx-* / dg-cb-*). null = the section draws on more than one
#             deck: a bare number there is never linked (a citation that names its deck still is).
#             An exact id wins over a prefix, a longer prefix over a shorter one. slide_check.js
#             fails when a section of the three reading files has no row here.
TABLES = os.path.join(HERE, 'slide_tables.json')


def tables():
    t = json.load(open(TABLES, encoding='utf-8'))
    return t['names'], t['sections']


def deck_dirs():
    d = os.environ.get('DECKS_DIR')
    if not d:
        d = next((x for x in DEFAULT_DECKS if os.path.isfile(os.path.join(x, DECKS[0][3]))), DEFAULT_DECKS[0])
    return d, os.environ.get('CLEAN_DIR') or os.path.join(d, 'clean')


def aspect(pdf):
    """Width over height of the deck's pages (the viewer reserves the picture's space with it)."""
    m = re.search(r'Page size:\s+([\d.]+) x ([\d.]+)', subprocess.run(['pdfinfo', pdf], capture_output=True, text=True, check=True).stdout)
    return round(float(m.group(1)) / float(m.group(2)), 4)


def page_texts(pdf):
    """The text of every page of a PDF, in reading order (pdftotext splits pages with a form feed)."""
    r = subprocess.run(['pdftotext', '-enc', 'UTF-8', pdf, '-'], capture_output=True, check=True)
    pages = r.stdout.decode('utf-8', 'replace').split('\f')
    if pages and not pages[-1].strip():
        pages.pop()
    n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', pdf], capture_output=True, text=True, check=True).stdout).group(1))
    pages += [''] * (n - len(pages))
    return pages[:n]


def words(t):
    return re.findall(r'[a-z0-9µα-ω]+', t.lower())


def text_sim(a, b):
    """0..1: how alike two pages' word sequences are (None when either has under 4 words)."""
    wa, wb = words(a), words(b)
    if len(wa) < 4 or len(wb) < 4:
        return None
    return difflib.SequenceMatcher(None, wa, wb, autojunk=False).ratio()


_thumbs = {}


def thumbs(pdf):
    """A 48 x 36 grey thumbnail of every page of a PDF (one pdftoppm run), as bytes."""
    if pdf not in _thumbs:
        from PIL import Image
        with tempfile.TemporaryDirectory() as d:
            subprocess.run(['pdftoppm', '-gray', '-png', '-scale-to-x', '96', '-scale-to-y', '-1', pdf, os.path.join(d, 't')],
                           check=True, stderr=subprocess.DEVNULL)
            fs = sorted(os.listdir(d), key=lambda f: int(re.search(r'-(\d+)\.png$', f).group(1)))
            _thumbs[pdf] = [Image.open(os.path.join(d, f)).convert('L').resize((48, 36)).tobytes() for f in fs]
    return _thumbs[pdf]


def img_sim(pdf_a, pa, pdf_b, pb):
    """0..1 from the correlation of the two thumbnails. Two different slides of one template
    still score 0.5 to 0.85 (the shared header band); the same slide with handwriting on one
    copy scores 0.75 to 1.0. It is therefore used with the text, never instead of a clear text match."""
    a, b = thumbs(pdf_a)[pa - 1], thumbs(pdf_b)[pb - 1]
    ma, mb = sum(a) / len(a), sum(b) / len(b)
    num = sum((x - ma) * (y - mb) for x, y in zip(a, b))
    da = sum((x - ma) ** 2 for x in a) ** .5
    db = sum((y - mb) ** 2 for y in b) ** .5
    if da == 0 or db == 0:
        return 1.0 if a == b else 0.0
    return max(0.0, num / (da * db))


BAND = 8        # a cited page is looked for within 8 pages of its own number
GAP = 0.45      # a pairing under this score is worse than leaving both pages unpaired


def align(annot_pdf, clean_pdf):
    """([(annotated page, clean page or 0, score, text score or None, picture score)], clean pages
    left over, annotated texts, clean texts): the best in-order pairing of the two page sequences.
    Every pair inside the band is scored the same way: the mean of the text score and the picture
    score, or the picture score alone when either page has under 4 words."""
    A, C = page_texts(annot_pdf), page_texts(clean_pdf)
    na, nc = len(A), len(C)
    S = {}

    def score(i, j):
        if (i, j) not in S:
            t = text_sim(A[i - 1], C[j - 1])
            im = img_sim(annot_pdf, i, clean_pdf, j)
            S[(i, j)] = ((t + im) / 2 if t is not None else im, t, im)
        return S[(i, j)]

    NEG = -1e9
    F = [[NEG] * (nc + 1) for _ in range(na + 1)]
    B = [[None] * (nc + 1) for _ in range(na + 1)]
    F[0][0] = 0
    for i in range(na + 1):
        for j in range(nc + 1):
            if i == 0 and j == 0:
                continue
            best, bk = NEG, None
            if i and j and abs(i - j) <= BAND:
                v = F[i - 1][j - 1] + score(i, j)[0] - GAP
                if v > best:
                    best, bk = v, 'm'
            if i and F[i - 1][j] > best:
                best, bk = F[i - 1][j], 'a'
            if j and F[i][j - 1] > best:
                best, bk = F[i][j - 1], 'c'
            F[i][j], B[i][j] = best, bk
    out, i, j = [], na, nc
    left_clean = []
    while i or j:
        bk = B[i][j]
        if bk == 'm':
            out.append((i, j) + S[(i, j)])
            i, j = i - 1, j - 1
        elif bk == 'a':
            out.append((i, 0, 0.0, None, 0.0))
            i -= 1
        else:
            left_clean.append(j)
            j -= 1
    out.reverse()
    # pages that changed places (the in-order pairing cannot see a swap): pair what is left over
    left_clean.sort()
    for k, row in enumerate(out):
        if row[1] == 0 and left_clean:
            i = row[0]
            cand = max(left_clean, key=lambda j: score(i, j)[0])
            if score(i, cand)[0] >= 0.6:
                out[k] = (i, cand) + score(i, cand)
                left_clean.remove(cand)
    return out, left_clean, A, C, score


def title_of(text, n):
    """A short name for the slide, for alt text: its first block of real words (a heading that
    runs over two or three lines is joined), skipping the deck's footer and source lines. '' for
    a page with no heading text (a picture)."""
    REFERENCE = re.compile(r'(\bIn:|\beds?\.|\bet al\b|https?://|\bdoi\b|Published \d|Accessed|\b(?:19|20)\d\d;|©|UIW-FSOP|McGraw|courtesy of)')
    BULLET = re.compile(r'^\s*(?:[•●▪○➢–‣-]|o\s|\d{1,2}[.)]\s)')
    MORE = re.compile(r'(?:[,/&–-]|\b(?:of|for|and|the|to|in|with|used|that|from))$', re.I)
    caps = lambda x: bool(re.search(r'[A-Z]{3,}', x)) and not re.search(r'[a-z]{2,}', x)
    for block in re.split(r'\n\s*\n', text):
        raw = [x for x in block.splitlines() if x.strip()]
        if not raw or BULLET.match(raw[0]):
            continue
        clean = lambda x: re.sub(r'\s+', ' ', re.sub(r'[-]', ' ', x)).strip(' •●▪➢')
        s = clean(raw[0])
        for nxt in raw[1:3]:
            short = len(nxt.split()) <= 3 and not re.search(r'[.:;]', nxt)
            if BULLET.match(nxt) or REFERENCE.search(nxt) or not (MORE.search(s) or (caps(s) and caps(nxt)) or short):
                break
            s += ' ' + clean(nxt)
        s = re.sub(r'\s*DR\. NIRALI PATEL.*$', '', s).strip()
        if (REFERENCE.search(s) or re.match(r'(?:[A-Z][a-z]+ [A-Z]{1,3}, ){2}', s) or re.fullmatch(r'Key:?', s)
                or 'Medical Letter' in s or len(re.findall(r'[A-Za-z]{3,}', s)) < 1 or len(s) < 4):
            continue
        if len(s) > 80:
            s = s[:80].rsplit(' ', 1)[0].rstrip(' ,;:(') + '…'
        return s
    return ''


# Hand-confirmed entries the comparison cannot settle by itself, each looked at as a picture
# (2026-11-13; the comparison's own findings for these pages are in the report under "look at").
#   {deck: {cited number: clean page, or [other deck id, its clean page]}}
OVERRIDES = {
    # Dr. Smith's Sun Exposure file as Louis has it (26 pages) opens with four slides of her Skin
    # Pharmacology deck: its title slide and the three psoralen slides. The clean Sun Exposure copy
    # (22 pages) starts at "Sun Protection", so cited 5-26 are its pages 1-22 (found by the
    # comparison). Cited 1-4 are, word for word, clean Skin Pharmacology slides 1, 77, 78, 79.
    'sun': {1: ['pc', 1], 2: ['pc', 77], 3: ['pc', 78], 4: ['pc', 79]},
    # Dr. Sikazwe's file as Louis has it (71 pages) holds printed slide 21 twice (pages 21 and 22;
    # the second copy carries his ring circles). The clean copy (70 pages) has it once, and its
    # page N is printed slide N throughout, so cited 23-71 are clean pages 22-70 (found by the
    # comparison) and cited 22 is clean page 21.
    'mc': {22: 21},
}


def best_other(score, i, j, nc):
    """The best score of annotated page i against any clean page in the band other than j."""
    return max([score(i, k)[0] for k in range(max(1, i - BAND), min(nc, i + BAND) + 1) if k != j] or [0.0])


def fmt(t):
    return 'none' if t is None else f'{t:.2f}'


def build(report):
    ddir, cdir = deck_dirs()
    decks = {}
    for did, prof, exam, afile, cfile, label, unit in DECKS:
        ap, cp = os.path.join(ddir, afile), os.path.join(cdir, cfile)
        for p in (ap, cp):
            if not os.path.isfile(p):
                sys.exit(f'ERROR: {p} is not there; set DECKS_DIR / CLEAN_DIR, or use --tables')
        pairs, extra_clean, A, C, score = align(ap, cp)
        m, look = {}, []
        for a, c, s, t, im in pairs:
            m[a] = c
            if not c:
                # no clean page: say which clean page it is most like, for a decision by eye
                k = max(range(1, len(C) + 1), key=lambda j: (text_sim(A[a - 1], C[j - 1]) or 0))
                look.append(f'cited {a}: no clean page paired; its text is most like clean page {k} '
                            f'(text {fmt(text_sim(A[a - 1], C[k - 1]))}, picture {img_sim(ap, a, cp, k):.2f})')
                continue
            ob = best_other(score, a, c, len(C))
            if t is None and im < 0.95:
                look.append(f'cited {a} -> clean {c}: no text on the page, picture {im:.2f} (best other page {ob:.2f})')
            elif s - ob < 0.05:
                look.append(f'cited {a} -> clean {c}: score {s:.2f} (text {fmt(t)}, picture {im:.2f}) is close to another page ({ob:.2f})')
            elif s < 0.62:
                look.append(f'cited {a} -> clean {c}: low score {s:.2f} (text {fmt(t)}, picture {im:.2f}; best other page {ob:.2f})')
        over = OVERRIDES.get(did, {})
        for a, c in over.items():
            m[a] = c
        ident = len(A) == len(C) and all(m[a] == a for a in m)
        runs, run = [], None
        for a in range(1, len(A) + 1):
            c = m[a]
            key = ('x', c[0], c[1] - a) if isinstance(c, list) else (None if not c else c - a)
            if run and run[2] == key:
                run[1] = a
            else:
                if run:
                    runs.append(tuple(run))
                run = [a, a, key]
        if run:
            runs.append(tuple(run))

        def say(a, b, key):
            who = f'cited {a}' if a == b else f'cited {a}-{b}'
            if key is None:
                return who + ' = no clean page'
            if isinstance(key, tuple):
                return who + f' = {key[1]} page {a + key[2]}' + ('' if a == b else f'-{b + key[2]}')
            return who + (' = same page' if key == 0 else f' = clean page {a + key}' + ('' if a == b else f'-{b + key}'))
        report.append(f'### {did}: {afile} ({len(A)} pages) -> {cfile} ({len(C)} pages)')
        report.append('- ' + ('identity: every cited number is its own clean page' if ident else
                              'NOT the identity: ' + '; '.join(say(*r) for r in runs)))
        if over:
            report.append('- decided by eye (OVERRIDES): ' + ', '.join(f'cited {a} -> {c}' for a, c in over.items()))
        if extra_clean:
            report.append(f'- clean pages with no annotated page: {extra_clean}')
        sc = [s for a, c, s, t, im in pairs if c]
        tx = [t for a, c, s, t, im in pairs if c and t is not None]
        report.append(f'- {sum(1 for r in pairs if r[1])} pairs: score min {min(sc):.2f}, median {sorted(sc)[len(sc) // 2]:.2f}; '
                      f'text min {min(tx):.2f}, median {sorted(tx)[len(tx) // 2]:.2f}; '
                      f'{sum(1 for a, c, s, t, im in pairs if c and t is None)} page(s) with no text, paired by the picture; '
                      f'{sum(1 for r in pairs if not r[1])} annotated page(s) unpaired')
        for line in look:
            report.append('  - look at: ' + line)
        titles = [title_of(C[k], k + 1) for k in range(len(C))]
        decks[did] = {'id': did, 'prof': prof, 'exam': exam, 'files': [afile], 'clean': cfile, 'label': label, 'unit': unit,
                      'pages': len(C), 'cited': len(A), 'ar': aspect(cp),
                      'map': (None if ident else {str(a): m[a] for a in range(1, len(A) + 1) if m[a] != a}),
                      'titles': titles}
        report.append('')
    return decks


def read_existing():
    src = open(OUT, encoding='utf-8').read()
    return json.loads(src[src.index('{', src.index('const SLIDES')):src.rindex('}') + 1])


def write(decks):
    names, sections = tables()
    data = {'dir': 'deck', 'ext': 'webp', 'decks': decks, 'names': names, 'sections': sections}
    head = ('/* slide_data.js: GENERATED by slide_map.py (the page maps and titles from the decks; the\n'
            '   names and sections tables from slide_tables.json). Do not edit by hand:\n'
            '   change the table and run `python3 slide_map.py --tables` (no deck needed), or the whole\n'
            '   script when a deck changes. Read by slide_ui.js (the slide links and the viewer) and\n'
            '   slide_check.js. `map` lists only the cited numbers whose clean page differs; 0 = no clean\n'
            '   page for that number (never linked). */\n')
    body = ['const SLIDES = {', f' "dir": {json.dumps(data["dir"])}, "ext": {json.dumps(data["ext"])},', ' "decks": {']
    ids = list(decks)
    for k, did in enumerate(ids):
        d = decks[did]
        body.append(f'  {json.dumps(did)}: {{' + ', '.join(f'{json.dumps(f)}: {json.dumps(d[f], ensure_ascii=False)}'
                    for f in ('id', 'prof', 'exam', 'files', 'clean', 'label', 'unit', 'pages', 'cited', 'ar', 'map')) + ',')
        body.append('   "titles": ' + json.dumps(d['titles'], ensure_ascii=False) + '}' + (',' if k < len(ids) - 1 else ''))
    body.append(' },')
    body.append(' "names": ' + json.dumps(data['names'], ensure_ascii=False) + ',')
    body.append(' "sections": [')
    sec = data['sections']
    for k, row in enumerate(sec):
        body.append('  ' + json.dumps(row, ensure_ascii=False) + (',' if k < len(sec) - 1 else ''))
    body.append(' ]')
    body.append('};')
    open(OUT, 'w', encoding='utf-8').write(head + '\n'.join(body) + '\n')


def main():
    a = sys.argv[1:]
    if '--tables' in a:
        decks = read_existing()['decks']
        write(decks)
        print('slide_data.js: tables rewritten ({} names, {} section rules); page maps kept'.format(*map(len, tables())))
        return
    report = ['## Page map: annotated copy (what the citations number) against the clean copy (what is shown)', '']
    decks = build(report)
    write(decks)
    text = '\n'.join(report)
    print(text)
    if '--report' in a:
        open(a[a.index('--report') + 1], 'w', encoding='utf-8').write(text + '\n')
    print(f'wrote slide_data.js: {len(decks)} decks, {sum(d["pages"] for d in decks.values())} clean pages')


if __name__ == '__main__':
    main()
