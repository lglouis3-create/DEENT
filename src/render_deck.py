#!/usr/bin/env python3
"""Render the clean slide decks to the images the slide viewer shows (PHAR 4346 DEENT).

    python3 render_deck.py                    every page of every deck in slide_data.js
    python3 render_deck.py --only pc mc-26    just these decks or pages (<deck id> or <deck id>-<clean page>)
    python3 render_deck.py --sheets DIR       also write one contact sheet per deck to DIR, for the
                                              look-over before the images are committed
    CLEAN_DIR=/path                           where the clean copies are (default: src/decks/clean/
                                              here, else in the main checkout)

Writes deck/<deck id>/<NN>.webp at the repository root (NN = the page of the CLEAN
copy, two digits), 1600 px wide, WebP quality 72. slide_ui.js loads them from there
(../deck/ in /preview/), one at a time, when a slide is opened; the service worker does
not save them (build.py lists only the page, the manifest and the icons for it).

Only the clean copies Louis uploaded on 2026-11-13 are read: the file names come from
slide_data.js `clean`, and a page is refused if its PDF is one of the annotated copies
the citations were written from (they carry his handwriting and are never shown here;
the walkthrough images in slides/ are a separate, older set made by render_slides.py).

Settings, measured on 2026-11-13 on a sample of 58 pages and looked at on the densest
slides (Warts, Corns and Calluses 17, 370 words; DPAW 26, the vitamin D scheme):
  JPEG 1280 q70   about 42 MB for the 557 pages; small labels legible, the 9 px lines soft
  JPEG 1600 q72   about 58 MB; clear
  WebP 1600 q72   about 32 MB; as clear as the JPEG at 1600   <- used
  WebP 1920 q60   about 35 MB; no gain at the sizes the viewer shows

Contact details are covered before a page is saved: every text line that holds an email
address, the words "office hours" or a Poll Everywhere join address (pollev.com/<handle>, the
handle being the local part of the email), and the lines that continue it, is painted over in the
color of the slide beside it (cover_rects below; the pages are listed as they are rendered). These are a professor's own
details on title, "Communication" and closing slides, not course content, and the site is
public. A telephone number is left as it is (the Poison Control number is slide content).
"""
import json, os, re, subprocess, sys, tempfile
from concurrent.futures import ProcessPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
WIDTH, QUALITY = 1600, 72
DEFAULT_CLEAN = [os.path.join(HERE, 'decks', 'clean'), '/home/user/DEENT/src/decks/clean']


def slides():
    src = open(os.path.join(HERE, 'slide_data.js'), encoding='utf-8').read()
    return json.loads(src[src.index('{', src.index('const SLIDES')):src.rindex('}') + 1])


COVER_EMAIL = re.compile(r'[\w.+-]+@[\w-]+\.[\w.-]+')
COVER_BLOCK = re.compile(r'office\s+hours?', re.I)
COVER_JOIN = re.compile(r'pollev\.com/\S', re.I)      # a personal Poll Everywhere join address (its handle is the email's)


def cover_rects(pdf, p):
    """The rectangles to paint over on page p (1-based), as fractions of the page: every text
    line that holds an email address, the words "office hours" or a Poll Everywhere join
    address, and the lines that continue such a line directly below it."""
    import pymupdf
    doc = pymupdf.open(pdf)
    page = doc[p - 1]
    W, H = page.rect.width, page.rect.height
    lines = []
    for blk in page.get_text('dict')['blocks']:
        for ln in blk.get('lines', []):
            lines.append((tuple(ln['bbox']), ''.join(sp['text'] for sp in ln['spans'])))
    doc.close()
    hit = [bb for bb, t in lines if COVER_EMAIL.search(t) or COVER_BLOCK.search(t) or COVER_JOIN.search(t)]
    grew = True
    while grew:                       # a wrapped line under a covered one, overlapping it sideways
        grew = False
        for bb, t in lines:
            if bb in hit or not t.strip():
                continue
            if any(abs(bb[1] - h[3]) < 3 and bb[0] < h[2] and h[0] < bb[2] for h in hit):
                hit.append(bb)
                grew = True
    return [(x0 / W, y0 / H, x1 / W, y1 / H) for x0, y0, x1, y1 in hit]


def encode(job):
    png, dest, cover = job
    from PIL import Image, ImageDraw
    im = Image.open(png).convert('RGB')
    if cover:
        dr = ImageDraw.Draw(im)
        for x0, y0, x1, y1 in cover:
            xa, xb = max(0, int(x0 * im.width - 8)), min(im.width - 1, int(x1 * im.width + 8))
            ya, yb = max(0, int(y0 * im.height - 2)), min(im.height - 1, int(y1 * im.height + 2))
            sx = max(0, xa - 6)
            for y in range(ya, yb + 1):   # each row in the color of the slide just left of the text
                dr.line([(xa, y), (xb, y)], fill=im.getpixel((sx, y)))
    im.save(dest, 'WEBP', quality=QUALITY, method=6)
    os.unlink(png)
    return dest, im.size, os.path.getsize(dest)


def sheet(deck, files, out_dir):
    """A contact sheet of one deck: every page small, numbered, for a look before committing."""
    from PIL import Image, ImageDraw
    cols, tw = 8, 300
    ims = []
    for n, f in files:
        im = Image.open(f).convert('RGB')
        ims.append((n, im.resize((tw, round(tw * im.height / im.width)))))
    th = max(im.height for _, im in ims)
    rows = (len(ims) + cols - 1) // cols
    # sheets of at most 5 rows, so each can be looked at without shrinking the slides further
    per, k = 5 * cols, 0
    for start in range(0, len(ims), per):
        part = ims[start:start + per]
        r = (len(part) + cols - 1) // cols
        s = Image.new('RGB', (cols * (tw + 6), r * (th + 20)), 'white')
        dr = ImageDraw.Draw(s)
        for i, (n, im) in enumerate(part):
            x, y = (i % cols) * (tw + 6), (i // cols) * (th + 20)
            s.paste(im, (x, y + 16))
            dr.text((x + 3, y + 2), f'{deck} {n}', fill='red')
        k += 1
        s.save(os.path.join(out_dir, f'{deck}_{k}.png'))


def main():
    a = sys.argv[1:]
    S = slides()
    only = a[a.index('--only') + 1:] if '--only' in a else None
    if only:
        only = [x for x in only if not x.startswith('--')]
    sheets = a[a.index('--sheets') + 1] if '--sheets' in a else None
    clean = os.environ.get('CLEAN_DIR') or next((d for d in DEFAULT_CLEAN if os.path.isdir(d)), DEFAULT_CLEAN[0])
    annotated = {f for d in S['decks'].values() for f in d['files']}
    out_root = os.path.join(ROOT, S['dir'])
    total, count, covered = 0, 0, []
    with ProcessPoolExecutor() as pool:
        for did, d in S['decks'].items():
            pages = [int(x.split('-')[1]) for x in (only or []) if x.startswith(did + '-')]
            if only and did not in only and not pages:
                continue
            if d['clean'] in annotated:
                sys.exit(f'ERROR: {did}: {d["clean"]} is the name of an annotated copy; only clean copies are rendered')
            pdf = os.path.join(clean, d['clean'])
            if not os.path.isfile(pdf):
                sys.exit(f'ERROR: {pdf} is not there (set CLEAN_DIR)')
            n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', pdf], capture_output=True, text=True, check=True).stdout).group(1))
            if n != d['pages']:
                sys.exit(f'ERROR: {did}: {d["clean"]} has {n} pages, slide_data.js says {d["pages"]}; run slide_map.py first')
            dest = os.path.join(out_root, did)
            os.makedirs(dest, exist_ok=True)
            with tempfile.TemporaryDirectory() as t:
                jobs = []
                for p in (pages or range(1, n + 1)):
                    base = os.path.join(t, f'p{p}')
                    subprocess.run(['pdftoppm', '-png', '-scale-to-x', str(WIDTH), '-scale-to-y', '-1', '-f', str(p), '-l', str(p),
                                    '-singlefile', pdf, base], check=True, stderr=subprocess.DEVNULL)
                    cov = cover_rects(pdf, p)
                    if cov:
                        covered.append(f'{did} {p}')
                    jobs.append((base + '.png', os.path.join(dest, f'{p:02d}.{S["ext"]}'), cov))
                done = list(pool.map(encode, jobs))
            sizes = {sz for _, sz, _ in done}
            b = sum(x for _, _, x in done)
            total += b
            count += len(done)
            print(f'{did:4s} {len(done):3d} pages  {b / 1e6:5.1f} MB  {sorted(sizes)}  largest {max(x for _, _, x in done) // 1024} kB')
            if sheets:
                os.makedirs(sheets, exist_ok=True)
                sheet(did, [(p, os.path.join(dest, f'{p:02d}.{S["ext"]}')) for p in range(1, n + 1)
                            if os.path.isfile(os.path.join(dest, f'{p:02d}.{S["ext"]}'))], sheets)
    print(f'{count} images, {total / 1e6:.1f} MB written under {S["dir"]}/')
    print(f'contact details covered on {len(covered)} page(s): ' + ', '.join(covered))


if __name__ == '__main__':
    main()
