"""Release step 1b (DEENT, 2026-11-08): the link preview of a shared drill link.

The core's shell.html has a fixed <title>Exam drill</title> and no Open Graph
tags, and build.py has no course field for them (kit request to the main kit session,
2026-11-08: course.js `share`). Until the core does this, run after
`./run_checks.sh` (and after `python3 build.py --preview`):

    python3 brand.py

It (1) puts DEENT's title, description and og:/twitter: tags into the <head> of
the built index.html and preview/index.html, (2) copies src/icons/og-image.png to
the site root, (3) sets the web manifest's short_name. The icons themselves come
from src/icons/ through build.py (core support). Running it twice changes nothing.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SITE = 'https://lglouis3-create.github.io/DEENT/'
TITLE = 'DEENT Exam Review'
SHORT = 'DEENT Review'
DESC = 'PHAR 4346 Exam 1 practice: questions, structures and drug targets for Dr. Smith\'s and Dr. Sikazwe\'s lectures.'
IMAGE = SITE + 'og-image.png'
IMAGE_ALT = 'DEENT Exam Review: PHAR 4346, Exam 1 practice'
START, END = '<!-- brand.py: share tags -->', '<!-- /brand.py -->'


def tags(url):
    return '\n'.join([
        START,
        f'<meta name="description" content="{DESC}">',
        f'<meta name="apple-mobile-web-app-title" content="{SHORT}">',
        '<link rel="icon" type="image/png" sizes="192x192" href="./icon-192.png">' if url == SITE else '',
        '<meta property="og:type" content="website">',
        f'<meta property="og:site_name" content="{TITLE}">',
        f'<meta property="og:title" content="{TITLE}">',
        f'<meta property="og:description" content="{DESC}">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:image" content="{IMAGE}">',
        '<meta property="og:image:type" content="image/png">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        f'<meta property="og:image:alt" content="{IMAGE_ALT}">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{TITLE}">',
        f'<meta name="twitter:description" content="{DESC}">',
        f'<meta name="twitter:image" content="{IMAGE}">',
        END]).replace('\n\n', '\n')


def patch(path, url):
    if not os.path.exists(path):
        print(f'  skip {os.path.relpath(path, ROOT)} (not built)')
        return
    html = open(path, encoding='utf-8').read()
    html = re.sub(re.escape(START) + r'.*?' + re.escape(END) + r'\n', '', html, flags=re.S)
    head_end = html.find('</head>')
    if head_end < 0 or html.count('<title>Exam drill</title>') + html.count(f'<title>{TITLE}</title>') != 1:
        sys.exit(f'ERROR: {path}: no single <title> of the core shell before </head>; '
                 'the shell changed, so check this script against it')
    html = html.replace('<title>Exam drill</title>', f'<title>{TITLE}</title>', 1)
    i = html.find(f'<title>{TITLE}</title>') + len(f'<title>{TITLE}</title>')
    html = html[:i] + '\n' + tags(url) + html[i:]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'  {os.path.relpath(path, ROOT)}: title and share tags ({url})')


patch(os.path.join(ROOT, 'index.html'), SITE)
patch(os.path.join(ROOT, 'preview', 'index.html'), SITE + 'preview/')
src = os.path.join(HERE, 'icons', 'og-image.png')
with open(src, 'rb') as a, open(os.path.join(ROOT, 'og-image.png'), 'wb') as b:
    b.write(a.read())
print('  og-image.png copied to the site root')
man_path = os.path.join(ROOT, 'manifest.json')
if os.path.exists(man_path):
    man = json.load(open(man_path, encoding='utf-8'))
    if man.get('short_name') != SHORT:
        man['short_name'] = SHORT
        with open(man_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(man, ensure_ascii=False, indent=1) + '\n')
    print(f'  manifest.json short_name "{SHORT}"')
