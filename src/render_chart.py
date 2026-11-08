#!/usr/bin/env python3
"""Render the dermatology drug chart pages and find each drug line's row (PHAR 4346 DEENT).

    python3 -I render_chart.py <chart.pdf> [--sheet DIR]

<chart.pdf> is "2026 Drug Chart - Dermatology" (7 pages; MD5
6d768218ff6de08f2e38790146b427bd, the chart druglist_data.js was built from).
It is not kept in the repository; copy it into an empty directory of its own
and pass its path (run with -I: the PDF is outside input).

Writes
  chart/chart-p1.jpg ... chart-p7.jpg at the repository root, 1600 px wide,
      JPEG quality 75, each page cropped to its table (p. 1 keeps its title);
      the root page and /preview/ load them from there (druglist_ui.js, the
      same base as walk_ui.js uses for slides/), and the service worker does
      not precache them;
  src/chart_boxes.js (CHART_BOXES), the row of every chart line in
      druglist_data.js CHART_ROWS, as fractions of its page image:
        pages  {page: {file, w, h}}
        drugs  {cardId: [{page, row, line, x0, y0, x1, y1, text}]}
        other  [{page, row, line, x0, y0, x1, y1, text}]  lines with no card (p. 7)
      row is the drug row's number on its page (1 = first row under the
      header), line the CHART_ROWS index, text the drug cell's words.

How a row is found: the chart is a ruled table. The horizontal rules that
cross the first (Drug) column split the page into rows; a line's row is the
first one, at or after the previous line's row, whose Drug cell holds the
line's generic name (the text before its first comma or bracket) and the
first word of its brand. The box spans the whole table width, top rule to
bottom rule. Every box is then verified against the PDF: the words inside it
must include that generic name (CHART_TYPOS lists the chart's own spellings).
With --sheet DIR it also writes DIR/contact-p<N>.jpg, every highlighted row
with its line's name, to look at.
"""
import json, os, re, subprocess, sys

import pymupdf

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, 'chart')
WIDTH, QUALITY = 1600, 75
# how the chart itself spells a name that CHART_ROWS writes correctly (both disclosed
# on the cards: "2-ethyhexyl salicylate", druglist_data.js octisalate; "Trimetoprim")
CHART_TYPOS = {'trimethoprim': 'trimetoprim', 'ethylhexyl': 'ethyhexyl'}


def chart_rows():
    js = ("const fs=require('fs'),vm=require('vm');const sb={};vm.createContext(sb);"
          "vm.runInContext(fs.readFileSync('druglist_data.js','utf8')+';this.R=DRUGLIST.CHART_ROWS;',sb);"
          "process.stdout.write(JSON.stringify(sb.R))")
    r = subprocess.run(['node', '-e', js], cwd=HERE, capture_output=True, text=True)
    if r.returncode:
        sys.exit('could not read druglist_data.js:\n' + r.stderr)
    return json.loads(r.stdout)


def norm(s):
    return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()


def generic(line):
    g = norm(re.split(r'[,(]', line)[0])
    for k, v in CHART_TYPOS.items():
        g = g.replace(k, v)
    return g


def brand(line):
    m = re.search(r'\(([^)]*)\)', line)
    return norm(m.group(1)).split(' ')[0] if m else ''


def hrules(page):
    hs = []
    for d in page.get_drawings():
        for it in d['items']:
            if it[0] == 'l' and abs(it[1].y - it[2].y) < 0.6:
                hs.append((it[1].y, min(it[1].x, it[2].x), max(it[1].x, it[2].x)))
            elif it[0] == 're' and it[1].height < 1.6 and it[1].width > 5:
                hs.append((it[1].y0, it[1].x0, it[1].x1))
    return hs


def page_rows(page):
    """[(top, bottom, drug-cell text)] for the table rows, header rows left out."""
    hs = hrules(page)
    left = min(h[1] for h in hs)
    first = [h for h in hs if h[1] <= left + 2 and h[2] - h[1] > 60]
    col_r = min(h[2] for h in first if h[2] - h[1] < 300)       # the Drug column's right edge
    right = max(h[2] for h in hs)
    ys = sorted({round(h[0], 1) for h in first})
    words = page.get_text('words')
    rows = []
    for top, bot in zip(ys, ys[1:]):
        ws = [w for w in words if (w[0] + w[2]) / 2 < col_r and top < (w[1] + w[3]) / 2 < bot]
        ws.sort(key=lambda w: (round(w[1]), w[0]))
        txt = ' '.join(w[4] for w in ws)
        if not txt.strip() or 'Generic' in txt:
            continue
        rows.append((top, bot, txt))
    return rows, left, right


def clip_for(page, top, bot, left, right, pno):
    t = 28 if pno == 1 else top - 10
    return pymupdf.Rect(left - 8, t, right + 8, bot + 10)


def main():
    a = sys.argv[1:]
    if not a or not a[0].lower().endswith('.pdf'):
        sys.exit(__doc__)
    sheet = a[a.index('--sheet') + 1] if '--sheet' in a else None
    doc = pymupdf.open(a[0])
    if doc.page_count != 7:
        sys.exit(f'expected the 7-page chart, got {doc.page_count} pages')
    rows_by_line = chart_rows()
    os.makedirs(OUT, exist_ok=True)
    pages, drugs, other, problems = {}, {}, [], []
    geo = {}
    for pno in range(1, 8):
        page = doc[pno - 1]
        rows, left, right = page_rows(page)
        clip = clip_for(page, rows[0][0] - (40 if pno != 5 else 0), rows[-1][1], left, right, pno)
        if pno != 1:
            # keep the page's title and column headers: start at the table's top rule
            top_rule = min(h[0] for h in hrules(page))
            clip.y0 = top_rule - 8
        zoom = WIDTH / clip.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), clip=clip, alpha=False)
        name = f'chart-p{pno}.jpg'
        pix.save(os.path.join(OUT, name), jpg_quality=QUALITY)
        pages[pno] = {'file': name, 'w': pix.width, 'h': pix.height}
        geo[pno] = (rows, left, right, clip)
    for pno in range(1, 8):
        rows, left, right, clip = geo[pno]
        page = doc[pno - 1]
        at = 0
        for i, (p, line, card) in enumerate(rows_by_line):
            if p != pno:
                continue
            g, b = generic(line), brand(line)
            hit = None
            for j in range(at, len(rows)):
                t = norm(rows[j][2])
                if g in t and (not b or b in t):
                    hit = j
                    break
            if hit is None:
                problems.append(f'p. {pno} "{line}": no row holds "{g}"' + (f' and "{b}"' if b else ''))
                continue
            at = hit
            top, bot, txt = rows[hit]
            r = pymupdf.Rect(left, top, right, bot)
            inside = norm(page.get_textbox(r))
            if g not in inside:
                problems.append(f'p. {pno} "{line}": the box holds no "{g}"')
            f = lambda v, o, s: round((v - o) / s, 4)
            box = {'page': pno, 'row': hit + 1, 'line': i,
                   'x0': f(left, clip.x0, clip.width), 'y0': f(top, clip.y0, clip.height),
                   'x1': f(right, clip.x0, clip.width), 'y1': f(bot, clip.y0, clip.height),
                   'text': re.sub(r'\s+', ' ', txt).strip()}
            if card:
                drugs.setdefault(card, []).append(box)
            else:
                other.append(box)
    if problems:
        sys.exit('rows not found or not verified:\n  ' + '\n  '.join(problems))
    body = json.dumps({'pages': pages, 'drugs': drugs, 'other': other}, indent=1, ensure_ascii=False)
    with open(os.path.join(HERE, 'chart_boxes.js'), 'w', encoding='utf-8') as fh:
        fh.write('/* Generated by render_chart.py from the dermatology drug chart (7 pages, MD5\n'
                 '   6d768218ff6de08f2e38790146b427bd); do not edit by hand. The row of every\n'
                 '   chart line in druglist_data.js CHART_ROWS, as fractions of its page image in\n'
                 '   chart/; checked by druglist_check.js. */\n'
                 'const CHART_BOXES = ' + body + ';\n')
    n = sum(len(v) for v in drugs.values())
    print(f'7 pages in chart/; {n} boxes on {len(drugs)} cards, {len(other)} lines with no card; every box verified')
    if sheet:
        contact(sheet, pages, drugs, other, rows_by_line)


def contact(dest, pages, drugs, other, rows_by_line):
    from PIL import Image, ImageDraw
    os.makedirs(dest, exist_ok=True)
    allb = [(c, b) for c, bs in drugs.items() for b in bs] + [(None, b) for b in other]
    for pno in range(1, 8):
        im = Image.open(os.path.join(OUT, pages[pno]['file'])).convert('RGB')
        W, H = im.size
        strips = []
        for c, b in sorted((x for x in allb if x[1]['page'] == pno), key=lambda x: x[1]['line']):
            y0, y1 = int(b['y0'] * H), int(b['y1'] * H)
            crop = im.crop((0, max(0, y0 - 40), W, min(H, y1 + 40))).copy()
            ov = Image.new('RGBA', crop.size, (0, 0, 0, 0))
            d = ImageDraw.Draw(ov)
            d.rectangle((int(b['x0'] * W), y0 - max(0, y0 - 40), int(b['x1'] * W), y1 - max(0, y0 - 40)),
                        fill=(255, 200, 0, 90), outline=(220, 0, 0, 255), width=4)
            crop = Image.alpha_composite(crop.convert('RGBA'), ov).convert('RGB')
            lab = Image.new('RGB', (W, 34), 'white')
            ImageDraw.Draw(lab).text((8, 8), f'line {b["line"]} -> {c} | row {b["row"]} | CHART_ROWS: {rows_by_line[b["line"]][1]}',
                                     fill='black')
            strips += [lab, crop]
        tot = sum(s.size[1] for s in strips)
        out = Image.new('RGB', (W, tot), 'white')
        y = 0
        for s in strips:
            out.paste(s, (0, y)); y += s.size[1]
        out.thumbnail((1000, 100000))
        out.save(os.path.join(dest, f'contact-p{pno}.jpg'), quality=70)
    print('contact sheets in', dest)


if __name__ == '__main__':
    main()
