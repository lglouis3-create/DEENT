"""splice.py <guide.js> <section-html-file>: replace that section (by id) in guide.js."""
import re, sys
g, sec = sys.argv[1], open(sys.argv[2], encoding='utf-8').read().strip()
sid = re.search(r'id="([^"]+)"', sec).group(1)
s = open(g, encoding='utf-8').read()
pat = re.compile(r'<section\b[^>]*\bid="%s"[^>]*>.*?</section>' % re.escape(sid), re.S)
assert len(pat.findall(s)) == 1, 'section not found exactly once'
assert '`' not in sec and '${' not in sec and '\\' not in sec, 'backtick, ${ or backslash in the section'
open(g, 'w', encoding='utf-8').write(pat.sub(lambda m: sec, s))
print('spliced', sid)
