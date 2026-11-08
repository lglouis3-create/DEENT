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
      header), line the CHART_ROWS index, text the drug cell's words; x0..y1
      is the row band across the table, and
        cells  [{col, page, x0, y0, x1, y1, text, merged, cont}]: every cell
               of the line, one per column: its own cells in its row and each
               merged (spanning) cell that covers its row (class, chemical
               class, indication, potency class on p. 6), as printed. merged:
               the cell is taller than the row; cont: the part of a merged
               cell on the other side of the p. 4/5 page break (the
               chemical-class and indication cells of p. 4's last rows run on
               at the top of p. 5, empty there). Chart errors (p. 5's shifted
               columns) are kept as printed; nothing is realigned.

How a line's cells are found: the vertical rules give the columns (COLS
names them); in each column the horizontal rules that cross it bound its
cells, and the line's cell in that column is the one holding its row's middle.

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


def dark(d):
    """A drawn rule, not a cell-coloured patch: the chart hides some cell borders
    by painting them in the cell's background colour (p. 3, the Antibiotics block)."""
    c = d.get('fill') if d.get('fill') is not None else d.get('color')
    return c is None or sum(c[:3]) / 3 < 0.5


def hrules(page, only_dark=True):
    hs = []
    for d in page.get_drawings():
        if only_dark and not dark(d):
            continue
        for it in d['items']:
            if it[0] == 'l' and abs(it[1].y - it[2].y) < 0.6:
                hs.append((it[1].y, min(it[1].x, it[2].x), max(it[1].x, it[2].x)))
            elif it[0] == 're' and it[1].height < 1.6 and it[1].width > 5:
                hs.append((it[1].y0, it[1].x0, it[1].x1))
    return hs


def page_rows(page):
    """[(top, bottom, drug-cell text)] for the table rows, header rows left out."""
    hs = hrules(page, False)    # as drawn, so the row bands and page crops stay as published
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


COLS = ['Drug', 'Rx/OTC', 'Pharmacological Class', 'Chemical Class', 'Indication']
COLS6 = ['Drug', 'Rx/OTC', 'Potency Class', 'Pharmacological Class', 'Chemical Class', 'Indication']


def vrules(page):
    vs = []
    for d in page.get_drawings():
        if not dark(d):
            continue
        for it in d['items']:
            if it[0] == 'l' and abs(it[1].x - it[2].x) < 0.6:
                vs.append((it[1].x, min(it[1].y, it[2].y), max(it[1].y, it[2].y)))
            elif it[0] == 're' and it[1].width < 1.6 and it[1].height > 3:
                vs.append((it[1].x0, it[1].y0, it[1].y1))
    return vs


def columns(page, pno):
    """[(name, x0, x1, [rule ys crossing the column])], left to right."""
    vs, hs = vrules(page), hrules(page)
    tall = max(b for _, _, b in vs) - min(a for _, a, _ in vs)
    xs = {}
    for x, a, b in vs:
        k = round(x)
        xs[k] = xs.get(k, 0) + (b - a)
    xs = sorted(x for x, n in xs.items() if n > 0.4 * tall)
    names = COLS6 if pno == 6 else COLS
    if len(xs) - 1 != len(names):
        sys.exit(f'p. {pno}: {len(xs) - 1} columns found, expected {len(names)}')
    out = []
    for name, x0, x1 in zip(names, xs, xs[1:]):
        ys = sorted({round(h[0], 1) for h in hs if min(h[2], x1) - max(h[1], x0) > 0.8 * (x1 - x0)})
        out.append((name, x0, x1, ys))
    return out


def cell_at(col, y):
    name, x0, x1, ys = col
    top = max([v for v in ys if v <= y], default=None)
    bot = min([v for v in ys if v > y], default=None)
    return None if top is None or bot is None else (x0, top, x1, bot)


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
            top_rule = min(h[0] for h in hrules(page, False))   # the page's top edge, coloured title band included
            clip.y0 = top_rule - 8
        zoom = WIDTH / clip.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), clip=clip, alpha=False)
        name = f'chart-p{pno}.jpg'
        pix.save(os.path.join(OUT, name), jpg_quality=QUALITY)
        pages[pno] = {'file': name, 'w': pix.width, 'h': pix.height}
        geo[pno] = (rows, left, right, clip)
    cols = {pno: columns(doc[pno - 1], pno) for pno in range(1, 8)}
    cell_text = lambda pno, r: re.sub(r'\s+', ' ', doc[pno - 1].get_textbox(pymupdf.Rect(*r))).strip()
    def frac(pno, r):
        c = geo[pno][3]
        return {'x0': round((r[0] - c.x0) / c.width, 4), 'y0': round((r[1] - c.y0) / c.height, 4),
                'x1': round((r[2] - c.x0) / c.width, 4), 'y1': round((r[3] - c.y0) / c.height, 4)}
    tb = {p: (min(y for c in cols[p] for y in c[3]), max(y for c in cols[p] for y in c[3])) for p in (4, 5)}
    def cells_for(pno, top, bot):
        out = []
        for ci, col in enumerate(cols[pno]):
            r = cell_at(col, (top + bot) / 2)
            if r is None:
                problems.append(f'p. {pno}: no {col[0]} cell at y {top:.0f}-{bot:.0f}')
                continue
            t = cell_text(pno, r)
            c = dict(col=col[0], page=pno, **frac(pno, r), text=t, merged=(r[3] - r[1]) > (bot - top) + 1, cont=False)
            out.append(c)
            # a merged cell cut by the p. 4/5 page break: its part on the other page
            if pno == 4 and abs(r[3] - tb[4][1]) < 1:
                o = cell_at(cols[5][ci], tb[5][0] + 1)
                if o and cell_text(5, o) == '':
                    out.append(dict(col=col[0], page=5, **frac(5, o), text='', merged=True, cont=True))
                    c['merged'] = True
            if pno == 5 and abs(r[1] - tb[5][0]) < 1 and t == '':
                o = cell_at(cols[4][ci], tb[4][1] - 1)
                if o:
                    out.append(dict(col=col[0], page=4, **frac(4, o), text=cell_text(4, o), merged=True, cont=True))
                    c['merged'] = True
        return out
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
                   'text': re.sub(r'\s+', ' ', txt).strip(), 'cells': cells_for(pno, top, bot)}
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
    """One strip per line and page: every cell of the line outlined on its page."""
    from PIL import Image, ImageDraw
    os.makedirs(dest, exist_ok=True)
    ims = {p: Image.open(os.path.join(OUT, pages[p]['file'])).convert('RGB') for p in pages}
    allb = [(c, b) for c, bs in drugs.items() for b in bs] + [(None, b) for b in other]
    for pno in range(1, 8):
        strips = []
        for c, b in sorted((x for x in allb if x[1]['page'] == pno), key=lambda x: x[1]['line']):
            for sp in sorted({x['page'] for x in b['cells']}, key=lambda q: (q != pno, q)):
                im = ims[sp]; W, H = im.size
                cs = [x for x in b['cells'] if x['page'] == sp]
                y0 = max(0, int(min(x['y0'] for x in cs) * H) - 30); y1 = min(H, int(max(x['y1'] for x in cs) * H) + 30)
                crop = im.crop((0, y0, W, y1)).convert('RGBA')
                ov = Image.new('RGBA', crop.size, (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
                for x in cs:
                    d.rectangle((int(x['x0'] * W) + 2, int(x['y0'] * H) - y0 + 2, int(x['x1'] * W) - 2, int(x['y1'] * H) - y0 - 2),
                                fill=(255, 214, 0, 80), outline=(0, 90, 220, 255) if x['merged'] else (220, 0, 0, 255), width=4)
                crop = Image.alpha_composite(crop, ov).convert('RGB')
                lab = Image.new('RGB', (W, 30), 'white')
                ImageDraw.Draw(lab).text((8, 8), f'line {b["line"]} -> {c} | p. {b["page"]} row {b["row"]}' + (f' | PART ON p. {sp}' if sp != pno else '') +
                                         f' | {rows_by_line[b["line"]][1]} | ' + ' / '.join(f"{x['col']}: {x['text'][:30]}" for x in cs if x['col'] != 'Drug'), fill='black')
                strips += [lab, crop]
        out = Image.new('RGB', (strips[0].size[0], sum(s.size[1] for s in strips)), 'white')
        y = 0
        for st in strips:
            out.paste(st, (0, y)); y += st.size[1]
        out.thumbnail((1100, 100000))
        out.save(os.path.join(dest, f'contact-p{pno}.jpg'), quality=72)
    print('contact sheets in', dest)


if __name__ == '__main__':
    main()
