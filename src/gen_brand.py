"""DEENT's own icons and link-preview image (2026-11-08).

Writes, under src/icons/:
  icon-192.png, icon-512.png       rounded tile (Android, browsers)
  icon-maskable-512.png            full-bleed tile, mark inside the 80% safe zone
  apple-touch-icon.png  (180x180)  full-bleed tile (iOS rounds the corners itself)
  og-image.png        (1200x630)   the card a shared link shows (iMessage, Slack, ...)

build.py copies the four icons to the site root (core: "A course supplies its own
as PNG files under src/icons/"); brand.py copies og-image.png and adds the share
tags. The mark is plain type in the site's accent colour (#2F5FA8, the core's
theme colour): no school or third-party logo. Font: Inter (SIL Open Font License).

    python3 gen_brand.py      (needs Pillow and the Inter font files)
"""
import os
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'icons')
ACCENT = (0x2F, 0x5F, 0xA8)
DEEP = (0x1F, 0x44, 0x7E)
TINT = (0xA9, 0xC3, 0xEA)
WHITE = (255, 255, 255)
INK = (0x16, 0x20, 0x2E)
DIM = (0x5A, 0x68, 0x78)
SURFACE = (0xF2, 0xF4, 0xF7)
FONT_DIR = '/usr/share/fonts/opentype/inter'
XBOLD = os.path.join(FONT_DIR, 'Inter-ExtraBold.otf')
BOLD = os.path.join(FONT_DIR, 'Inter-Bold.otf')
SEMI = os.path.join(FONT_DIR, 'Inter-SemiBold.otf')
SS = 4  # supersampling factor


def gradient(size, top, bottom):
    w, h = size
    g = Image.new('RGB', (1, h))
    for y in range(h):
        t = y / max(1, h - 1)
        g.putpixel((0, y), tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))
    return g.resize((w, h))


def fit_font(path, text, width, start):
    size = start
    while size > 6:
        f = ImageFont.truetype(path, size)
        l, t, r, b = f.getbbox(text)
        if r - l <= width:
            return f
        size -= 1
    return ImageFont.truetype(path, size)


def mark(d, cx, cy, span):
    """'DEENT' in white with a short tinted bar under it, centred on (cx, cy),
    the word `span` px wide."""
    f = fit_font(XBOLD, 'DEENT', span, int(span / 2.2))
    l, t, r, b = f.getbbox('DEENT')
    tw, th = r - l, b - t
    bar_h = max(2, round(th * 0.16))
    gap = round(th * 0.32)
    total = th + gap + bar_h
    x = cx - tw / 2 - l
    y = cy - total / 2 - t
    d.text((x, y), 'DEENT', font=f, fill=WHITE)
    bw = tw * 0.42
    by = cy - total / 2 + th + gap
    d.rounded_rectangle([cx - bw / 2, by, cx + bw / 2, by + bar_h], radius=bar_h / 2, fill=TINT)


def tile(px, rounded, span_frac):
    S = px * SS
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    bg = gradient((S, S), ACCENT, DEEP).convert('RGBA')
    if rounded:
        m = Image.new('L', (S, S), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, S - 1, S - 1], radius=round(S * 0.22), fill=255)
        img.paste(bg, (0, 0), m)
    else:
        img = bg
    mark(ImageDraw.Draw(img), S / 2, S / 2, S * span_frac)
    img = img.resize((px, px), Image.LANCZOS)
    return img if rounded else img.convert('RGB')


def og():
    W, H = 1200 * 2, 630 * 2
    img = Image.new('RGB', (W, H), SURFACE)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, 24], fill=ACCENT)
    side = 2 * 330
    S = side * 2
    t = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    m = Image.new('L', (S, S), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, S - 1, S - 1], radius=round(S * 0.22), fill=255)
    t.paste(gradient((S, S), ACCENT, DEEP).convert('RGBA'), (0, 0), m)
    mark(ImageDraw.Draw(t), S / 2, S / 2, S * 0.74)
    t = t.resize((side, side), Image.LANCZOS)
    lx, ly = 2 * 90, (H - side) // 2 + 12
    img.paste(t, (lx, ly), t)
    tx = lx + side + 2 * 70
    room = W - tx - 2 * 80
    f1 = fit_font(BOLD, 'DEENT Exam Review', room, 2 * 92)
    f2 = fit_font(SEMI, 'PHAR 4346 · Exam 1 practice', room, 2 * 44)
    f3 = ImageFont.truetype(SEMI, 2 * 30)
    y = H / 2 - 2 * 110
    d.text((tx, y), 'DEENT Exam Review', font=f1, fill=INK)
    d.text((tx, y + 2 * 125), 'PHAR 4346 · Exam 1 practice', font=f2, fill=ACCENT)
    d.text((tx, y + 2 * 195), 'Questions, structures and drug targets', font=f3, fill=DIM)
    return img.resize((1200, 630), Image.LANCZOS)


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    tile(192, True, 0.80).save(os.path.join(OUT, 'icon-192.png'), optimize=True)
    tile(512, True, 0.80).save(os.path.join(OUT, 'icon-512.png'), optimize=True)
    tile(512, False, 0.62).save(os.path.join(OUT, 'icon-maskable-512.png'), optimize=True)
    tile(180, False, 0.82).save(os.path.join(OUT, 'apple-touch-icon.png'), optimize=True)
    og().save(os.path.join(OUT, 'og-image.png'), optimize=True)
    for n in sorted(os.listdir(OUT)):
        p = os.path.join(OUT, n)
        print(n, Image.open(p).size, os.path.getsize(p), 'bytes')
