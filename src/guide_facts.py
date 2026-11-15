#!/usr/bin/env python3
"""facts.py: does a rewritten guide section keep every fact of the original?

usage: python3 facts.py <section-id> <new-section-html-file> [--src <path to original guide.js>]

Without --src the original is read with `git show 22b81b8:src/guide.js` in the current
directory's repository. The original <section id=...> is cut out of it; tags and entities are
removed from both texts; then:
  (a) number tokens are compared as multisets (MISSING numbers fail; EXTRA are listed);
  (b) citation strings are compared as sets: a deck abbreviation with its slide numbers
      ("DT 10-13", "DT 35, 38, 41, 43") and every T@ mark (MISSING fail; EXTRA are listed);
  (c) content words of 4 or more letters in the original that the new text lacks are listed.
Text inside <span class="g2-num">...</span> (block numbers) and <span class="g2-lab">...</span>
(column names repeated for phones) is left out of the new text.
Exit status 1 when a number or a citation is missing, 2 on a usage error, else 0.
"""
import collections, html, re, subprocess, sys

BASE = '22b81b8'
DASH = '–—−‐‑'
NOT_DECKS = ('BID', 'TID', 'QID', 'FTU', 'OTC', 'TCS', 'TCI', 'FDA', 'JAK', 'SPF', 'UVA', 'UVB', 'PDE')


def section(src, sid):
    m = re.search(r'<section\b[^>]*\bid="%s"[^>]*>.*?</section>' % re.escape(sid), src, re.S)
    if not m:
        sys.exit('facts.py: no <section id="%s"> found' % sid)
    return m.group(0)


def text(h):
    h = re.sub(r'<!--.*?-->', ' ', h, flags=re.S)
    h = re.sub(r'<span class="g2-(?:num|lab)">.*?</span>', ' ', h, flags=re.S)
    h = re.sub(r'<(script|style)\b.*?</\1>', ' ', h, flags=re.S)
    h = re.sub(r'<[^>]+>', ' ', h)
    h = html.unescape(h)
    for d in DASH:
        h = h.replace(d, '-')
    return re.sub(r'\s+', ' ', h.replace(' ', ' ')).strip()


def numbers(t):
    # T@ marks are citations, not numbers; every other run of digits (with a decimal part) counts
    t = re.sub(r'T@\d+(?:-\d+)?', ' ', t)
    return collections.Counter(re.findall(r'\d+(?:\.\d+)?', t))


CITE = re.compile(r'\b([A-Z]{2,5}) (\d+(?:-\d+)?(?:, ?\d+(?:-\d+)?)*)')


def cites(t):
    out = set(re.findall(r'T@\d+(?:-\d+)?', t))
    for deck, nums in CITE.findall(t):
        if deck in NOT_DECKS:
            continue
        out.add(deck + ' ' + re.sub(r', ?', ', ', nums))
    return out


def words(t):
    return set(w.lower() for w in re.findall(r"[A-Za-z][A-Za-z'-]{3,}", t))


def main(argv):
    src_path = None
    if '--src' in argv:
        i = argv.index('--src')
        if i + 1 >= len(argv):
            print(__doc__)
            return 2
        src_path = argv[i + 1]
        argv = argv[:i] + argv[i + 2:]
    if len(argv) != 2:
        print(__doc__)
        return 2
    sid, newfile = argv
    if src_path:
        src = open(src_path, encoding='utf-8').read()
    else:
        src = subprocess.run(['git', 'show', BASE + ':src/guide.js'], check=True, capture_output=True).stdout.decode('utf-8')
    new_html = open(newfile, encoding='utf-8').read()
    old, new = text(section(src, sid)), text(section(new_html, sid))
    on, nn = numbers(old), numbers(new)
    miss_n = sorted((on - nn).elements(), key=float)
    extra_n = sorted((nn - on).elements(), key=float)
    oc, nc = cites(old), cites(new)
    miss_c, extra_c = sorted(oc - nc), sorted(nc - oc)
    miss_w = sorted(words(old) - words(new))
    print('%s: original %d characters, %d numbers, %d citations; new %d characters'
          % (sid, len(old), sum(on.values()), len(oc), len(new)))
    print('MISSING numbers (%d): %s' % (len(miss_n), ' '.join(miss_n) or 'none'))
    print('MISSING citations (%d): %s' % (len(miss_c), '; '.join(miss_c) or 'none'))
    print('MISSING words (%d): %s' % (len(miss_w), ' '.join(miss_w) or 'none'))
    print('EXTRA numbers (%d): %s' % (len(extra_n), ' '.join(extra_n) or 'none'))
    print('EXTRA citations (%d): %s' % (len(extra_c), '; '.join(extra_c) or 'none'))
    bad = bool(miss_n or miss_c)
    print('RESULT: %s' % ('FAIL (a number or citation of the original is missing)' if bad
                          else 'PASS (every number and citation of the original is present)'))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
