/* slideview_test.js: the slide viewer and the look of the slide links in a browser, on the PREVIEW
 * build (preview/index.html), served read-only over HTTP as GitHub Pages lays the site out
 * (/DEENT/ and /DEENT/preview/), with the pictures under /DEENT/deck/ answered late or not at all
 * where a case needs it. Window sizes: 390x844 and 844x390 (touch), 320x568, 1376x1032, 1728x1117.
 *
 *     NODE_PATH=$(npm root -g) node slideview_test.js        (after: python3 build.py --preview)
 *     SLIDEVIEW_ROOT=/other/site node slideview_test.js      (another built site, e.g. an older build, to see it fail there)
 *
 * What it checks at each size (slide_test.js checks which slide a citation opens; this file checks
 * the viewer itself and the links' styles):
 *   - opening with a late picture: the picture box has the slide's shape and its final size from
 *     the first frame, Close, Previous, Next and Open full size do not move when the picture
 *     arrives; the picture is not lazy and is asked for after the box is on screen;
 *   - Previous / Next with a late picture: the picture before it is taken off at once, a line
 *     says which slide is loading, the box keeps its size;
 *   - the viewer fits the window, nothing overflows sideways, the buttons are inside it and 44 px
 *     high, Previous and Next are one line each; in a short wide window (a phone held sideways) a
 *     4:3 slide is at least 300 px high;
 *   - Previous / Next follow the cited deck's numbering (Dr. Smith's Sun 4 -> Sun 5 and back; the
 *     ends are the cited deck's ends); the lines under the heading say what was cited only while
 *     that is the slide on screen (DPAW page 22, a cited range); the number printed on DPAW page 60;
 *   - closing and opening again at once leaves the picture in place;
 *   - the page behind does not scroll (wheel, finger, keys) while the viewer is open, is at the
 *     same place after it closes, does not move sideways, and scrolls again afterwards;
 *   - over an enlarged figure Tab moves through the viewer and the first Escape closes the viewer
 *     only; after Try again focus is on Close (on Try again when the picture fails once more);
 *   - every slide link in every tab that has links: contrast with what is behind it at least
 *     4.5:1 (light and dark color scheme), on the guide bars the bar's own type and a focus ring
 *     that shows; a touch area at least 24 px high that moves no text (no block changes height, no
 *     link's text moves, no scroll box gains overflow), does not lie over a neighboring button,
 *     summary, field or link, and a tap midway between two links that sit close together opens
 *     one of the two;
 *   - no page error, no sideways scroll.
 */
const fs = require('fs'), path = require('path'), vm = require('vm'), http = require('http'), child = require('child_process');
const L = require('./check_lib');
const NAME = 'slideview_test.js';
const {check} = L;
const ROOT = process.env.SLIDEVIEW_ROOT ? path.resolve(process.env.SLIDEVIEW_ROOT) : (L.PAGE.ROOT || path.join(__dirname, '..'));
const PREVIEW = path.join(ROOT, 'preview', 'index.html');
if (!fs.existsSync(PREVIEW)) L.notRun(NAME, 'there is no preview build (python3 build.py --preview)');
if (!/const SLIDE_UI = /.test(fs.readFileSync(PREVIEW, 'utf8'))) L.notRun(NAME, 'the preview build has no slide_ui.js in it (rebuild: python3 build.py --preview)');

/* slide_data.js and the parser, as slide_check.js loads them */
const sb = {console}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'slide_data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(__dirname, 'slide_ui.js'), 'utf8') + '\nthis.S = SLIDES; this.P = SLIDE_UI.parser;', sb);
const S = sb.S, P = sb.P, D = S.decks;
const fileOf = (deck, n, printed) => { const r = P.resolve(deck, n, printed); return r ? '../' + P.file(r.deck, r.page) : null; };

const SIZES = [
  {name: '390x844 touch', w: 390, h: 844, touch: true},
  {name: '844x390 touch', w: 844, h: 390, touch: true},
  {name: '320x568', w: 320, h: 568},
  {name: '1376x1032', w: 1376, h: 1032},
  {name: '1728x1117', w: 1728, h: 1117},
];

/* the site folder, read-only, under /DEENT/; a picture under /DEENT/deck/ is answered after
   site.delay ms, or with 503 while site.fail is set */
function serveSite(root){
  const site = {delay: 0, fail: false, pictures: 0};
  const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png',
                 '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json'};
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
    let p; try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch (e) { res.writeHead(400); res.end(); return; }
    if (p.indexOf('/DEENT/') !== 0) { res.writeHead(404); res.end(); return; }
    let rel = p.slice('/DEENT/'.length); if (!rel || rel.slice(-1) === '/') rel += 'index.html';
    const file = path.normalize(path.join(root, rel));
    if (file.indexOf(root + path.sep) !== 0 || /(^|\/)\.git(\/|$)/.test(rel)) { res.writeHead(403); res.end(); return; }
    const pic = rel.indexOf('deck/') === 0;
    const send = () => fs.readFile(file, (e, body) => {
      if (e) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, {'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Content-Length': body.length});
      res.end(req.method === 'HEAD' ? undefined : body);
    });
    if (pic) { site.pictures++; if (site.fail) { res.writeHead(503, {'Cache-Control': 'no-store'}); res.end(); return; } }
    if (pic && site.delay) setTimeout(send, site.delay); else send();
  });
  server.on('connection', s => s.unref());
  return new Promise((ok, no) => { server.on('error', no); server.listen(0, '127.0.0.1', () => { server.unref(); site.url = `http://127.0.0.1:${server.address().port}/DEENT/`; ok(site); }); });
}

/* ---- functions run in the page ---- */
const viewerFn = () => {
  const d = document.querySelector('dialog.slv'); if (!d) return null;
  const q = s => d.querySelector(s), i = q('.slv-img'), wait = q('.slv-wait');
  const r = el => { if (!el) return null; const b = el.getBoundingClientRect(); return {l: b.left, t: b.top, r: b.right, b: b.bottom, w: b.width, h: b.height}; };
  const has = !!i.getAttribute('src') && i.complete && i.naturalWidth > 0, cs = getComputedStyle(i), a = document.activeElement;
  return {open: d.open, modal: d.open && d.matches(':modal'), deck: q('.slv-deck').textContent, pos: q('.slv-pos').textContent,
    note: q('.slv-note').hidden ? '' : q('.slv-note').textContent, src: i.getAttribute('src') || '', loaded: has, lazy: i.getAttribute('loading') || '',
    shown: has && cs.visibility !== 'hidden' && i.getBoundingClientRect().height > 1, hidden: cs.visibility === 'hidden',
    wait: wait && !wait.hidden ? wait.textContent : '', waitOpacity: wait && !wait.hidden ? +getComputedStyle(wait).opacity : 0, err: !q('.slv-err').hidden,
    box: r(d), pic: r(q('.slv-pic')), img: r(i), errBox: r(q('.slv-err')), againBox: r(q('[data-slv=again]')), x: r(q('.slv-x')), prev: r(q('[data-slv=prev]')), next: r(q('[data-slv=next]')), full: r(q('.slv-full')),
    prevOff: q('[data-slv=prev]').disabled, nextOff: q('[data-slv=next]').disabled,
    scrollH: d.scrollHeight, clientH: d.clientHeight, scrollW: d.scrollWidth, clientW: d.clientWidth, vw: innerWidth, vh: innerHeight,
    active: a ? (a.getAttribute('data-slv') || (a.classList.contains('slv-a') ? 'picture' : a.classList.contains('slv-full') ? 'full' : a.tagName)) : '', inside: !!a && d.contains(a),
    pageX: scrollX, pageY: scrollY, side: document.documentElement.scrollWidth - document.documentElement.clientWidth};
};
/* every slide link that can be seen in `root`: its color over what is behind it */
const contrastFn = sel => {
  const parse = c => { const m = /rgba?\(([^)]+)\)/.exec(c || ''); if (!m) return [0, 0, 0, 0]; const p = m[1].split(/[,\s\/]+/).filter(Boolean).map(Number); return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; };
  const over = (top, bot) => [0, 1, 2].map(i => top[i] * top[3] + bot[i] * (1 - top[3])).concat([1]);
  const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const behind = el => { const layers = []; for (let a = el; a; a = a.parentElement) { const c = parse(getComputedStyle(a).backgroundColor); if (c[3] > 0) { layers.push(c); if (c[3] >= 1) break; } }
    let bg = [255, 255, 255, 1]; for (let i = layers.length - 1; i >= 0; i--) bg = over(layers[i], bg); return bg; };
  const out = {n: 0, min: 99, low: []};
  document.querySelectorAll(sel).forEach(l => {
    if (!l.getClientRects().length || (l.checkVisibility && !l.checkVisibility({checkOpacity: true, checkVisibilityCSS: true}))) return;
    let op = 1; for (let a = l; a; a = a.parentElement) op *= +getComputedStyle(a).opacity;
    const fg = parse(getComputedStyle(l).color), bg = behind(l), c = ratio(over([fg[0], fg[1], fg[2], fg[3] * op], bg), bg);
    out.n++; if (c < out.min) out.min = c;
    if (c < 4.5 && out.low.length < 5) out.low.push(l.textContent + ' ' + c.toFixed(2) + ' in ' + (l.parentElement.className || l.parentElement.tagName));
  });
  out.min = +out.min.toFixed(2);
  return out;
};
/* the touch areas of the links of one view (or of one box in it, by selector): their height; whether they move
   anything (measured with the enlargement switched off and on); whether one lies over a neighboring control or
   over another link's text */
const areasFn = async sel => {
  const view = document.querySelector(sel);
  // not the links inside a box clipped to nothing (the heading row a narrow table keeps for screen readers only)
  const seen = l => { for (let a = l.parentElement; a && a !== view; a = a.parentElement) { const c = getComputedStyle(a); if (c.overflowX !== 'visible' || c.clip !== 'auto') { const b = a.getBoundingClientRect(); if (b.width <= 1 || b.height <= 1) return false; } } return true; };
  const links = [...view.querySelectorAll('.slk')].filter(l => l.getClientRects().length && seen(l));
  const out = {links: links.length, short: 0, minH: 999, blocks: 0, moved: 0, textMoved: 0, overflow: 0, near: 0, over: [], covered: [], stolen: [], pairs: 0, side: 0, sideOff: 0};
  document.querySelectorAll('[data-over]').forEach(e => e.removeAttribute('data-over'));
  links.forEach(l => { [...l.getClientRects()].forEach(b => { if (b.height < out.minH) out.minH = b.height; if (b.height < 23.5) out.short++; }); });
  const textRects = l => { const r = document.createRange(); r.selectNodeContents(l); return [...r.getClientRects()]; };
  const measure = () => {
    const o = view.getBoundingClientRect();
    return {blocks: [...view.querySelectorAll('*')].filter(e => !e.classList.contains('slk')).map(e => { const b = e.getBoundingClientRect(); return b.height.toFixed(2) + 'x' + b.width.toFixed(2); }),
      text: links.map(l => textRects(l).map(b => [(b.left - o.left).toFixed(2), (b.top - o.top).toFixed(2), b.width.toFixed(2), b.height.toFixed(2)].join(',')).join(';')),
      scroll: [document.documentElement].concat([...view.querySelectorAll('*')].filter(e => { const c = getComputedStyle(e); return c.overflowX !== 'visible' || c.overflowY !== 'visible'; }))
        .map(e => (e.scrollWidth - e.clientWidth) + ',' + (e.scrollHeight - e.clientHeight))};
  };
  const on = measure();
  const st = document.createElement('style'); st.textContent = '.slk{padding:0!important;margin:0!important}'; document.head.appendChild(st);
  const off = measure();
  out.sideOff = document.documentElement.scrollWidth - document.documentElement.clientWidth; st.remove();
  out.side = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  out.blocks = on.blocks.length;
  out.moved = on.blocks.filter((v, i) => v !== off.blocks[i]).length;
  out.textMoved = on.text.filter((v, i) => v !== off.text[i]).length;
  out.overflow = on.scroll.filter((v, i) => v !== off.scroll[i]).length;
  // neighbors: every control of the view that is not a slide link (their boxes are read anew for each link: some stick to the window)
  const ctl = [...view.querySelectorAll('button,summary,input,select,textarea,a[href],label,[role=button]:not(.slk),[role=checkbox],[tabindex]:not(.slk):not([tabindex="-1"])')].filter(c => c.getClientRects().length && (!c.checkVisibility || c.checkVisibility()));
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    l.scrollIntoView({block: 'center', inline: 'center'});
    const t = textRects(l)[0]; if (!t) continue;
    // the middle of a link's own text is the link's
    const top = document.elementFromPoint(t.left + t.width / 2, t.top + t.height / 2);
    if (top !== l && !l.contains(top) && out.stolen.length < 5) out.stolen.push(l.textContent + ' -> ' + (top ? (top.className || top.tagName) + ' ' + JSON.stringify((top.textContent || '').slice(0, 20)) : 'nothing'));
    // where its area and the box of a control that can be seen overlap, the control is on top
    const mine = [...l.getClientRects()];
    ctl.forEach(c => {
      if (c.contains(l)) return;
      const k = c.getBoundingClientRect();
      mine.forEach(a => {
        const x0 = Math.max(a.left, k.left), x1 = Math.min(a.right, k.right), y0 = Math.max(a.top, k.top), y1 = Math.min(a.bottom, k.bottom);
        if (x1 - x0 <= 0.5 || y1 - y0 <= 0.5) return;
        const pts = [[(x0 + x1) / 2, (y0 + y1) / 2], [x0 + 0.5, y0 + 0.5], [x1 - 0.5, y0 + 0.5], [x0 + 0.5, y1 - 0.5], [x1 - 0.5, y1 - 0.5]];
        out.near++;
        // the link's margin lies over the control: without the link, a tap there reaches the control. The point is kept
        // (from the corner of the link's first box) and the link marked, so that it can be tapped for real
        const over = pts.filter(p => { const e = document.elementFromPoint(p[0], p[1]); if (!e || !(e === l || l.contains(e))) return false;
          l.style.pointerEvents = 'none'; const u = document.elementFromPoint(p[0], p[1]); l.style.pointerEvents = ''; return !!u && (u === c || c.contains(u)); })[0];
        if (over && out.over.length < 8) {
          const k0 = mine[0]; l.setAttribute('data-over', String(out.over.length));
          out.over.push({dx: over[0] - k0.left, dy: over[1] - k0.top, what: JSON.stringify(l.textContent) + ' over ' + c.tagName.toLowerCase() + '.' + c.className + ' ' + JSON.stringify((c.textContent || '').trim().slice(0, 24)) + ' by ' + (x1 - x0).toFixed(1) + 'x' + (y1 - y0).toFixed(1)});
        }
      });
    });
  }
  // two links on one line less than 12 px apart
  for (let i = 0; i + 1 < links.length; i++) {
    const a = textRects(links[i]), b = textRects(links[i + 1]); if (!a.length || !b.length) continue;
    const ra = a[a.length - 1], rb = b[0], gap = rb.left - ra.right;
    if (Math.abs(ra.top - rb.top) < 3 && gap > 0.5 && gap < 12) out.pairs++;
  }
  out.minH = +out.minH.toFixed(1);
  window.scrollTo(0, 0);
  return out;
};
/* how much of two PNG pictures of the same box differs (0 to 1) */
const differFn = async ([a, b]) => {
  const px = async s => { const im = new Image(); im.src = 'data:image/png;base64,' + s; await im.decode(); const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
    const x = c.getContext('2d'); x.drawImage(im, 0, 0); return x.getImageData(0, 0, c.width, c.height); };
  const A = await px(a), B = await px(b); if (A.width !== B.width || A.height !== B.height) return 1;
  let n = 0; for (let i = 0; i < A.data.length; i += 4) if (Math.abs(A.data[i] - B.data[i]) + Math.abs(A.data[i + 1] - B.data[i + 1]) + Math.abs(A.data[i + 2] - B.data[i + 2]) > 12) n++;
  return n / (A.data.length / 4);
};
/* the k-th of up to four such pairs, spread over the view: the point midway between the two, and what each opens */
const pairPointFn = ([id, k]) => {
  const links = [...document.getElementById(id).querySelectorAll('.slk')].filter(l => l.getClientRects().length), pairs = [];
  const tr = l => { const r = document.createRange(); r.selectNodeContents(l); return [...r.getClientRects()]; };
  for (let i = 0; i + 1 < links.length; i++) {
    const a = tr(links[i]), b = tr(links[i + 1]); if (!a.length || !b.length) continue;
    const gap = b[0].left - a[a.length - 1].right;
    if (Math.abs(a[a.length - 1].top - b[0].top) < 3 && gap > 0.5 && gap < 12) pairs.push(i);
  }
  const i = pairs.filter((v, n) => n % Math.max(1, Math.floor(pairs.length / 4)) === 0)[k]; if (i === undefined) return null;
  const a = links[i], b = links[i + 1];
  a.scrollIntoView({block: 'center', inline: 'center'});
  const ra = tr(a).pop(), rb = tr(b)[0]; if (!ra || !rb) return null;
  const at = l => ({deck: l.getAttribute('data-deck'), n: +l.getAttribute('data-n'), printed: l.hasAttribute('data-printed'), text: l.textContent});
  return {x: (ra.right + rb.left) / 2, y: (ra.top + ra.bottom) / 2, gap: rb.left - ra.right, a: at(a), b: at(b)};
};

(async () => {
  const {browser} = await L.launch(NAME);
  const site = await serveSite(ROOT);
  try {
    let dzDeep = 0;
    for (const size of SIZES) {
      console.log(`\n=== ${size.name} ===`);
      const T = s => `${size.name}: ${s}`;
      const ctx = await browser.newContext({viewport: {width: size.w, height: size.h}, deviceScaleFactor: 1, hasTouch: !!size.touch, isMobile: !!size.touch, serviceWorkers: 'block'});
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage(), errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
      page.on('dialog', d => d.accept().catch(() => {}));
      site.delay = 0; site.fail = false;
      await page.goto(site.url + 'preview/index.html');
      await page.waitForFunction(() => document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      const settle = ms => page.waitForTimeout(ms || 300);
      await settle(500);
      if (!check(await page.evaluate(() => typeof SLIDE_UI === 'object' && !!SLIDE_UI && typeof SLIDE_UI.open === 'function' && BUILD.preview === true), T('slide_ui.js is running in the preview build'))) { await ctx.close(); continue; }
      const viewer = () => page.evaluate(viewerFn);
      const loaded = async () => { for (let t = 0; t < 80; t++) { const v = await viewer(); if (v && v.open && (v.shown || v.err)) return v; await settle(75); } return viewer(); };
      const openV = async (deck, n, to, printed) => { await page.evaluate(([deck, n, to, printed]) => { SLIDE_UI.close(); return new Promise(r => setTimeout(() => r(SLIDE_UI.open(deck, n, to || 0, !!printed, null)), 30)); }, [deck, n, to, printed]); return loaded(); };
      const press = async which => { await page.evaluate(w => document.querySelector('dialog.slv [data-slv=' + w + ']').click(), which); return loaded(); };
      const closeV = async () => { await page.evaluate(() => SLIDE_UI.close()); await settle(60); };
      const tap = (x, y) => size.touch ? page.touchscreen.tap(x, y) : page.mouse.click(x, y);
      const show = async v => { await page.evaluate(v => show(v), v); await settle(800); await page.evaluate(() => document.querySelectorAll('details').forEach(d => { if (d.querySelector('.slk')) d.open = true; })); await settle(150); };
      const sideways = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      const near = (a, b, tol) => Math.abs(a - b) <= (tol || 0.5);
      const same = (a, b) => !!a && !!b && near(a.l, b.l) && near(a.t, b.t) && near(a.w, b.w) && near(a.h, b.h);
      const sameSize = (a, b) => !!a && !!b && near(a.w, b.w) && near(a.h, b.h);

      /* ---- opening with a late picture: the box has its size at once, nothing moves (D-F2) ---- */
      await show('ref');
      const first = await page.evaluate(() => {
        // a slide in the middle of a deck whose slides have no note of their own, far enough down that the page is scrolled
        const l = [...document.querySelectorAll('#v-ref td .slk')].find(b => b.getClientRects().length && b.getAttribute('data-deck') === 'pc' && !b.hasAttribute('data-to') && +b.getAttribute('data-n') >= 5 && +b.getAttribute('data-n') <= 60 &&
          b.getBoundingClientRect().top + scrollY > innerHeight * 2); if (!l) return null;
        l.setAttribute('data-svt', '1'); l.scrollIntoView({block: 'center', inline: 'center'});
        const b = l.getClientRects()[0];
        // what the picture element holds when the box is put on screen, and every frame of the box from then on
        const orig = HTMLDialogElement.prototype.showModal; window.__atShow = [];
        HTMLDialogElement.prototype.showModal = function(){ const i = this.querySelector('.slv-img'); if (i) window.__atShow.push(i.getAttribute('src') || ''); return orig.call(this); };
        window.__restoreShow = () => { HTMLDialogElement.prototype.showModal = orig; };
        window.__fr = []; window.__frOn = true;
        const tick = () => {
          if (!window.__frOn) return;
          const d = document.querySelector('dialog.slv');
          if (d && d.open) {
            const g = s => { const r = d.querySelector(s).getBoundingClientRect(); return [r.left, r.top, r.width, r.height]; }, i = d.querySelector('.slv-img');
            window.__fr.push({d: g('.slv-in'), x: g('.slv-x'), p: g('[data-slv=prev]'), n: g('[data-slv=next]'), f: g('.slv-full'), i: g('.slv-img'), ok: !!i.getAttribute('src') && i.complete && i.naturalWidth > 0});
          }
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        return {x: b.left + b.width / 2, y: b.top + b.height / 2, deck: l.getAttribute('data-deck'), n: +l.getAttribute('data-n'), text: l.textContent, y0: scrollY};
      });
      if (check(!!first, T('Reference has a slide link in a table'), first)) {
        site.delay = 700;
        await tap(first.x, first.y);
        const v0 = await (async () => { for (let t = 0; t < 40; t++) { const v = await viewer(); if (v && v.open) return v; await settle(25); } return viewer(); })();
        check(!!v0 && v0.open && v0.modal, T(`a tap on "${first.text}" opens the viewer`), v0 && {open: v0.open});
        const v1 = await loaded(); await settle(200);
        const fr = await page.evaluate(() => { window.__frOn = false; window.__restoreShow(); return {fr: window.__fr, atShow: window.__atShow}; });
        const before = fr.fr.filter(f => !f.ok), after = fr.fr.filter(f => f.ok);
        const spread = k => { let m = 0; fr.fr.forEach(f => f[k].forEach((v, i) => { m = Math.max(m, Math.abs(v - fr.fr[0][k][i])); })); return +m.toFixed(1); };
        check(!!v1 && v1.loaded && v1.src === fileOf(first.deck, first.n), T(`it shows ${fileOf(first.deck, first.n)}`), v1 && v1.src);
        check(before.length >= 3 && after.length >= 1, T(`the picture was held back 700 ms (${before.length} frames before it, ${after.length} after)`));
        check(before.length > 0 && before[0].i[3] > 100 && near(before[0].i[3], after.length ? after[after.length - 1].i[3] : -1) && near(before[0].i[2] / before[0].i[3], D[P.resolve(first.deck, first.n).deck].ar, 0.02),
          T(`the picture box has the slide's shape and its final size before the picture arrives (${before.length ? before[0].i[2].toFixed(0) + 'x' + before[0].i[3].toFixed(0) : 'no frame'})`), before.length ? before[0].i : '');
        const mv = {box: spread('d'), close: spread('x'), previous: spread('p'), next: spread('n'), full: spread('f')};
        check(Object.values(mv).every(v => v <= 0.5), T('the box, Close, Previous, Next and Open full size do not move between open and loaded'), mv);
        check(fr.atShow.length === 1 && fr.atShow[0] === '' && v0.lazy !== 'lazy', T('the picture is asked for after the box is on screen, and is not lazy'), {atShow: fr.atShow, loading: v0.lazy});

        /* ---- Previous / Next with a late picture (D-F1) ---- */
        site.delay = 1600;
        const picA = await page.locator('dialog.slv .slv-pic').screenshot();
        const pA = v1.pic, nb = v1.next;
        await tap(nb.l + nb.w / 2, nb.t + nb.h / 2);
        const n0 = await viewer(), pic0 = await page.locator('dialog.slv .slv-pic').screenshot();
        const differ = (a, b) => page.evaluate(differFn, [a.toString('base64'), b.toString('base64')]);
        const want = P.citedOf(P.resolve(first.deck, first.n).deck, P.resolve(first.deck, first.n).page) + 1, d0 = await differ(picA, pic0);
        check(n0.pos.indexOf(D[P.resolve(first.deck, first.n).deck].unit + ' ' + want + ' of ') === 0 && !n0.shown && d0 > 0.2, T(`Next: the heading says ${want} and the picture of the slide before is off the screen at once (${Math.round(d0 * 100)}% of the box changed)`), {pos: n0.pos, shown: n0.shown, changed: d0});
        await settle(500);
        const n1 = await viewer(), picB = await page.locator('dialog.slv .slv-pic').screenshot(), d1 = await differ(picA, picB);
        check(!n1.loaded && /^Loading (slide|page) \d+…$/.test(n1.wait) && n1.wait.indexOf(' ' + want + '…') > 0 && n1.waitOpacity === 1, T(`while it loads the box says "${n1.wait}"`), {wait: n1.wait, opacity: n1.waitOpacity, loaded: n1.loaded});
        check(d1 > 0.2, T('and still does not show the slide before'), {changed: d1});
        check(same(n1.pic, pA) && same(n1.next, nb) && same(n1.prev, v1.prev) && same(n1.x, v1.x) && same(n1.full, v1.full), T('the box keeps its size while it loads; the buttons stay where they were'), {pic: n1.pic, was: pA});
        const n2 = await loaded(); await settle(120);
        const n3 = await viewer();
        check(n3.loaded && n3.shown && !n3.wait && same(n3.pic, n1.pic) && same(n3.next, n1.next) && same(n3.x, n1.x), T('when the picture arrives it is shown, the line is gone, and nothing has moved'), {shown: n3.shown, wait: n3.wait, pic: n3.pic});
        await page.keyboard.press('ArrowRight');
        const k0 = await viewer();
        check(k0.pos !== n3.pos && !k0.shown && k0.hidden && /^Loading /.test(k0.wait) && sameSize(k0.pic, pA), T(`the arrow keys: the same (the picture is off at once, "${k0.wait}", the box the same size)`), {pos: k0.pos, shown: k0.shown, hidden: k0.hidden, wait: k0.wait});
        site.delay = 0;
        await loaded();

        /* ---- the page behind (D-F7) ---- */
        const geo = () => page.evaluate(() => { const m = document.querySelector('main').getBoundingClientRect(), l = document.querySelector('[data-svt]').getBoundingClientRect();
          return {y: scrollY, x: scrollX, cw: document.documentElement.clientWidth, bar: innerWidth - document.documentElement.clientWidth, main: m.left.toFixed(2) + ',' + m.width.toFixed(2), link: l.left.toFixed(2) + ',' + l.top.toFixed(2)}; });
        const g1 = await geo();
        await page.mouse.move(3, size.h / 2); await page.mouse.wheel(0, 400); await settle(250);
        const w1 = await geo();
        check(first.y0 > 0 && w1.y === first.y0, T(`a wheel turn on the dimmed page does not scroll the page behind (at ${first.y0} px)`), {before: first.y0, after: w1.y});
        const cdp = await ctx.newCDPSession(page);
        const drag = async (x, ya, yb) => {
          await cdp.send('Input.dispatchTouchEvent', {type: 'touchStart', touchPoints: [{x, y: ya}]});
          for (let k = 1; k <= 12; k++) { await cdp.send('Input.dispatchTouchEvent', {type: 'touchMove', touchPoints: [{x, y: ya + (yb - ya) * k / 12}]}); await settle(16); }
          await cdp.send('Input.dispatchTouchEvent', {type: 'touchEnd', touchPoints: []}); await settle(300);
        };
        if (size.touch) {
          await drag(3, size.h * 0.75, size.h * 0.25);
          const t1 = await geo(), tv = await viewer();
          check(t1.y === first.y0 && tv.open, T('a finger dragged on the dimmed page does not scroll the page behind, and the viewer stays open'), {before: first.y0, after: t1.y, open: tv.open});
        }
        await page.keyboard.press('PageDown'); await page.keyboard.press('End'); await settle(250);
        const k1 = await geo();
        check(k1.y === first.y0, T('Page Down and End do not scroll the page behind'), {before: first.y0, after: k1.y});
        check(g1.cw === k1.cw && g1.main === k1.main && g1.link === k1.link, T(`nothing on the page moved sideways while the viewer is open (scrollbar ${g1.bar} px wide)`), {open: g1, now: k1});
        // moved by script while open (what a browser that ignores the lock would do): it is put back on close
        await page.evaluate(() => window.scrollBy(0, 180));
        await page.keyboard.press('Escape'); await settle(250);
        const c1 = await geo(), cv = await viewer();
        check(!cv.open && c1.y === first.y0 && c1.x === 0, T('after Escape the page is at the same place as before the tap'), {before: first.y0, after: c1.y});
        check(c1.cw === g1.cw && c1.main === g1.main && c1.link === g1.link && (await page.evaluate(() => document.documentElement.style.overflow === '' && document.activeElement.hasAttribute('data-svt'))),
          T('the page is as wide as before, its scroll lock is released and focus is back on the citation'), {open: g1, closed: c1});
        await page.mouse.move(size.w / 2, size.h / 2); await page.mouse.wheel(0, 300); await settle(250);
        const w2 = await geo();
        check(w2.y > first.y0, T('with the viewer closed the page scrolls again'), {before: first.y0, after: w2.y});
      }

      /* ---- the viewer fits; a phone held sideways (D-F3); one-line buttons (D-F14) ---- */
      const pics = {};
      for (const [deck, n, what] of [['pp', 20, '4:3'], ['p6', 12, '16:9'], ['mc', 60, 'the longest heading'], ['sun', 3, 'a note']]) {
        const v = await openV(deck, n); pics[what] = v.pic;
        const ctl = [v.x, v.prev, v.next, v.full];
        const inside = v.box.l >= -0.5 && v.box.r <= v.vw + 0.5 && v.box.t >= -0.5 && v.box.b <= v.vh + 0.5;
        const noScroll = v.scrollW <= v.clientW && v.scrollH <= v.clientH + 1 && v.side <= 1;
        check(v.loaded && inside && noScroll && ctl.every(c => c.l >= v.box.l - 0.5 && c.r <= v.box.r + 0.5 && c.t >= v.box.t - 0.5 && c.b <= v.box.b + 0.5 && c.h >= 43.5) && v.img.l >= v.box.l && v.img.r <= v.box.r + 0.5,
          T(`${deck} ${n} (${what}): the viewer is inside the window, does not scroll, the buttons are inside it and 44 px high (picture ${v.img.w.toFixed(0)}x${v.img.h.toFixed(0)})`),
          {box: v.box, scroll: [v.scrollW, v.clientW, v.scrollH, v.clientH], side: v.side, heights: ctl.map(c => c.h)});
        check(near(v.prev.h, v.next.h) && v.prev.h < 50, T(`${deck} ${n}: Previous and Next are one line each (${v.prev.h.toFixed(0)} and ${v.next.h.toFixed(0)} px high)`));
        check(near(v.img.w / v.img.h, D[P.resolve(deck, n).deck].ar, 0.02), T(`${deck} ${n}: the picture keeps the slide's shape`), v.img);
        if (size.h <= 480 && size.w / size.h >= 5 / 3 && what === '4:3') check(v.img.h >= 300 && v.img.w >= 356, T(`a 4:3 slide is at least 300 px high in this short window (${v.img.w.toFixed(0)}x${v.img.h.toFixed(0)})`), v.img);
      }
      await closeV();

      /* ---- paging by the cited deck's numbers (D-F5) ---- */
      const SUN = D.sun.label, PC = D.pc.label;
      let v = await openV('sun', 3);
      check(v.deck === PC && v.pos === 'Slide 78 of 80' && v.note === 'Cited as Dr. Smith, Sun Exposure, slide 3. That slide is slide 78 of this deck.', T('Sun 3 opens Skin Pharmacology slide 78 and says how it was cited'), [v.deck, v.pos, v.note]);
      v = await press('next');
      check(v.src === '../deck/pc/79.webp' && v.pos === 'Slide 79 of 80' && v.note === 'Dr. Smith, Sun Exposure, slide 4 is slide 79 of this deck.' && !v.nextOff, T('Next from Sun 3 is Sun 4 (Skin Pharmacology slide 79), named as such'), [v.src, v.pos, v.note]);
      v = await press('next');
      check(v.src === '../deck/sun/01.webp' && v.deck === SUN && v.pos === 'Slide 5 of 26' && !v.note && !v.prevOff, T('Next from Sun 4 is Sun 5, in her Sun Exposure deck'), [v.src, v.deck, v.pos, v.note]);
      v = await press('prev');
      check(v.src === '../deck/pc/79.webp' && v.deck === PC && /^Dr\. Smith, Sun Exposure, slide 4 is slide 79/.test(v.note), T('Previous from Sun 5 is Sun 4'), [v.src, v.deck, v.note]);
      v = await press('prev');
      check(v.src === '../deck/pc/78.webp' && /^Cited as Dr\. Smith, Sun Exposure, slide 3\./.test(v.note), T('and back on Sun 3 the line says "Cited as" again'), [v.src, v.note]);
      v = await openV('sun', 5);
      check(v.pos === 'Slide 5 of 26' && !v.prevOff, T('Sun 5 opened by itself: Previous is on'), [v.pos, v.prevOff]);
      await page.keyboard.press('ArrowLeft'); v = await loaded();
      check(v.src === '../deck/pc/79.webp', T('and the left arrow goes to Sun 4'), v.src);
      v = await openV('sun', 1);
      check(v.src === '../deck/pc/01.webp' && v.prevOff && !v.nextOff, T('Sun 1 (Skin Pharmacology slide 1): Previous is off, as on the first slide of the cited deck'), [v.src, v.prevOff, v.nextOff]);
      v = await press('next');
      check(v.src === '../deck/pc/77.webp', T('Next from Sun 1 is Sun 2 (Skin Pharmacology slide 77)'), v.src);
      v = await openV('sun', 26);
      check(v.src === '../deck/sun/22.webp' && v.nextOff && !v.prevOff, T('Sun 26: Next is off'), [v.src, v.nextOff]);
      v = await openV('pc', 79); v = await press('next');
      check(v.src === '../deck/pc/80.webp' && v.nextOff && !v.note, T('cited as Skin Pharmacology 79: Next is slide 80 of that deck, where it ends'), [v.src, v.nextOff, v.note]);
      v = await openV('pc', 1);
      check(v.prevOff && !v.nextOff, T('Skin Pharmacology 1: Previous is off'));

      /* ---- what the lines say (D-F6) and the printed number (C-F3) ---- */
      v = await openV('mc', 22);
      check(v.src === '../deck/mc/21.webp' && v.pos === 'Page 21 of 71' && v.note === 'Cited as page 22. Page 22 of the lecture copy is the same slide as page 21.', T('DPAW page 22 opens page 21 and says why'), [v.src, v.pos, v.note]);
      v = await press('next');
      check(v.src === '../deck/mc/22.webp' && v.pos === 'Page 23 of 71 · slide number printed on it: 22' && !v.note, T('Next from there is page 23, and the line is gone'), [v.src, v.pos, v.note]);
      v = await press('prev');
      check(v.src === '../deck/mc/21.webp' && /^Cited as page 22\./.test(v.note), T('Previous comes back to it, with the line'), [v.src, v.note]);
      v = await press('prev');
      check(v.src === '../deck/mc/20.webp' && v.pos === 'Page 20 of 71' && !v.note, T('Previous again is page 20 (the page that repeats is passed once)'), [v.src, v.pos]);
      v = await openV('mc', 21);
      check(v.pos === 'Page 21 of 71' && !v.note, T('DPAW page 21 has no such line'), v.note);
      v = await press('next');
      check(v.src === '../deck/mc/22.webp', T('and Next from page 21 is page 23, not the same slide again'), v.src);
      v = await openV('pc', 5, 7);
      check(v.note === 'Cited: slides 5–7.', T('a cited range is named on its first slide'), v.note);
      v = await press('next'); v = await press('next');
      check(v.pos === 'Slide 7 of 80' && v.note === 'Cited: slides 5–7.', T('and on its last slide'), [v.pos, v.note]);
      v = await press('next');
      check(v.pos === 'Slide 8 of 80' && !v.note, T('one slide past the range the line is gone'), [v.pos, v.note]);
      v = await press('prev');
      check(v.note === 'Cited: slides 5–7.', T('and back inside it the line is back'), v.note);
      v = await openV('pc', 5, 7); for (let k = 0; k < 2; k++) v = await press('prev');
      check(v.pos === 'Slide 3 of 80' && !v.note, T('before the range there is no line either'), [v.pos, v.note]);
      v = await openV('pp', 38); const n38 = v.note; v = await press('prev'); const n37 = v.note; v = await press('next');
      check(/PollEv questions/.test(n38) && !n37 && v.note === n38, T('the note of Skin Pathophysiology slide 38 shows on that slide only, also when it is reached with Next'), [n38, n37]);
      v = await openV('mc', 60);
      check(v.src === '../deck/mc/59.webp' && v.pos === 'Page 60 of 71 · slide number printed on it: 51', T('DPAW page 60: the slide prints 51, and the heading says 51'), v.pos);
      v = await openV('mc', 59);
      check(v.pos === 'Page 59 of 71 · slide number printed on it: 58', T('DPAW page 59: printed number 58'), v.pos);
      v = await openV('mc', 12);
      check(v.pos === 'Page 12 of 71', T('DPAW page 12: page and printed number agree, nothing added'), v.pos);

      /* ---- closing and opening again at once (C-F5) ---- */
      const again = await page.evaluate(async () => {
        const out = [], img = () => document.querySelector('dialog.slv .slv-img');
        for (const [deck, n] of [['mc', 23], ['sun', 1], ['sun', 5], ['sun', 26], ['pc', 80], ['p8o', 65], ['p5', 9], ['p7', 30]]) {
          SLIDE_UI.close(); SLIDE_UI.open(deck, n, 0, false, null);
          for (let t = 0; t < 60 && !(img().getAttribute('src') && img().complete && img().naturalWidth > 0); t++) await new Promise(r => setTimeout(r, 50));
          out.push({deck, n, src: img().getAttribute('src'), w: img().naturalWidth, open: document.querySelector('dialog.slv').open});
        }
        return out;
      });
      const empty = again.filter(x => !x.open || !x.src || !x.w);
      check(again.length === 8 && !empty.length, T('closed and opened again in one go, eight times: the picture is there every time'), empty.map(x => x.deck + ' ' + x.n + ': src ' + x.src).join('; '));
      const lockNow = await page.evaluate(() => ({o: document.documentElement.style.overflow, open: document.querySelector('dialog.slv').open}));
      await closeV();
      const lockOff = await page.evaluate(() => document.documentElement.style.overflow);
      check(lockNow.open && lockNow.o === 'hidden' && lockOff === '', T('the page is locked while that viewer is open and released when it closes'), {open: lockNow, closed: lockOff});

      /* ---- a picture that does not load: where focus goes (D-F10) ---- */
      site.fail = true;
      v = await openV('p7', 33);
      check(v.err && !v.loaded, T('a picture that does not load gives the message'));
      const inBox = (a, b) => !!a && !!b && a.l >= b.l - 0.5 && a.r <= b.r + 0.5 && a.t >= b.t - 0.5 && a.b <= b.b + 0.5;
      check(sameSize(v.pic, pics['16:9']) && inBox(v.errBox, v.pic) && inBox(v.againBox, v.errBox) && v.scrollH <= v.clientH + 1,
        T('the message and Try again are inside the picture box, which is as large as with the picture'), {pic: v.pic, with: pics['16:9'], message: v.errBox});
      await page.evaluate(() => document.querySelector('dialog.slv [data-slv=again]').focus());
      await page.keyboard.press('Enter'); await settle(500);
      v = await loaded();
      check(v.err && v.active === 'again' && v.inside, T('Try again fails once more: focus is on Try again, inside the viewer'), [v.err, v.active]);
      site.fail = false;
      await page.keyboard.press('Enter');
      v = await (async () => { for (let t = 0; t < 60; t++) { const x = await viewer(); if (x.shown) return x; await settle(75); } return viewer(); })();
      check(v.loaded && !v.err && v.shown && v.active === 'close' && v.inside, T('Try again works: the picture shows and focus is on Close, inside the viewer'), [v.loaded, v.err, v.active, v.inside]);
      // focus on the picture itself: the arrow keys page on while pictures load, and focus is not lost with a picture that fails
      v = await openV('pc', 30);
      await page.evaluate(() => document.querySelector('dialog.slv .slv-a').focus());
      site.delay = 400;
      await page.keyboard.press('ArrowRight'); const a1 = await viewer();
      await page.keyboard.press('ArrowRight'); const a2 = await viewer();
      site.delay = 0; const a3 = await loaded();
      check(a1.active === 'picture' && a1.inside && !a1.shown && a2.inside && a3.pos === 'Slide 32 of 80' && a3.shown && a3.active === 'picture',
        T('with focus on the picture, the arrow keys page on while the pictures load and focus stays on the picture'), [a1.active, a1.shown, a2.active, a3.pos, a3.active]);
      site.fail = true;
      await page.keyboard.press('ArrowRight');
      const a4 = await loaded();
      check(a4.err && a4.inside && a4.active === 'close', T('when the next picture does not load, focus goes from the picture to Close'), [a4.err, a4.active, a4.inside]);
      site.fail = false;
      await closeV();

      /* ---- over an enlarged figure (D-F10) ---- */
      await show('diagrams');
      const fig = await page.evaluate(() => {
        const f = [...document.querySelectorAll('#v-diagrams figure')].find(f => f.querySelector('[data-go="big"]') && f.querySelector('figcaption .slk')); if (!f) return null;
        f.querySelector('[data-go="big"]').click();
        const l = f.querySelector('figcaption .slk'); l.focus();
        return {big: f.classList.contains('big'), text: l.textContent};
      });
      if (check(!!fig && fig.big, T('a figure with a slide link in its caption is enlarged'), fig)) {
        await page.keyboard.press('Enter'); v = await loaded();
        check(v.open && v.modal && v.active === 'close', T(`Enter on "${fig.text}" opens the viewer over the enlarged figure`), [v.open, v.active]);
        const stops = [];
        for (let k = 0; k < 6; k++) { await page.keyboard.press('Tab'); const x = await viewer(); stops.push(x.inside ? x.active : 'outside'); }
        const ring = ['picture'].concat(v.prevOff ? [] : ['prev'], v.nextOff ? [] : ['next'], ['full', 'close']), expect = [0, 1, 2, 3, 4, 5].map(k => ring[k % ring.length]);
        check(stops.join() === expect.join(), T('Tab goes round inside the viewer: ' + stops.join(', ')), {stops, expect});
        await page.keyboard.press('Escape'); await settle(250);
        const e1 = await page.evaluate(() => ({viewer: document.querySelector('dialog.slv').open, big: !!document.querySelector('figure.big'), back: !!document.activeElement && document.activeElement.classList.contains('slk')}));
        check(!e1.viewer && e1.big && e1.back, T('the first Escape closes the viewer only; the figure stays enlarged and focus is back on the citation'), e1);
        await page.keyboard.press('Escape'); await settle(250);
        check(await page.evaluate(() => !document.querySelector('figure.big')), T('the second Escape closes the enlarged figure'));
      }

      /* ---- a button set right before a link (made here): the 6 px of the link's area that lie over it are the button's ---- */
      await show('ref');
      const fx = await page.evaluate(() => {
        const tr = l => { const r = document.createRange(); r.selectNodeContents(l); return r.getClientRects(); };
        const cand = [...document.querySelectorAll('#v-ref td .slk')].filter(b => b.getClientRects().length === 1 && b.getAttribute('data-deck') === 'pc' && b.getBoundingClientRect().top + scrollY > innerHeight * 2).slice(0, 30);
        window.__fx = 0;
        for (const l of cand) {
          const b = document.createElement('button'); b.type = 'button'; b.id = 'svt-fx'; b.textContent = 'x'; b.style.cssText = 'font:inherit;padding:0 5px;margin:0;border:1px solid #888;background:#eee';
          b.addEventListener('click', () => { window.__fx++; });
          l.parentNode.insertBefore(b, l); l.scrollIntoView({block: 'center', inline: 'center'});
          const k = b.getBoundingClientRect(), t = tr(l)[0], a = l.getClientRects()[0], x = k.right - 2, y = k.top + k.height / 2, top = document.elementFromPoint(x, y);
          // the button and the link side by side on one line, the button in sight
          if (Math.abs(t.left - k.right) < 1 && Math.abs((k.top + k.bottom) - (t.top + t.bottom)) < 8 && (top === l || top === b)) {
            l.setAttribute('data-fx', '1');
            return {x, y, tx: t.left + t.width / 2, ty: t.top + t.height / 2, gap: t.left - k.right, reach: k.right - a.left, onTop: top === l ? 'link' : 'button', text: l.textContent};
          }
          b.remove();
        }
        return null;
      });
      if (check(!!fx && Math.abs(fx.gap) < 1, T('a button is set right before a link in a Reference table'), fx)) {
        await page.mouse.click(fx.x, fx.y); await settle(300);
        const f1 = await page.evaluate(() => ({n: window.__fx, open: !!document.querySelector('dialog.slv') && document.querySelector('dialog.slv').open}));
        check(f1.n === 1 && !f1.open, T(`a click on the button's edge, ${fx.reach.toFixed(0)} px of which lie under the link's area, presses the button and opens no slide`), {f1, fx});
        await page.mouse.click(fx.tx, fx.ty);
        const f2 = await loaded();
        check(!!f2 && f2.open && (await page.evaluate(() => window.__fx)) === 1, T(`a click on the link's own text ("${fx.text}") opens its slide`), f2 && f2.open);
        await closeV();
      }
      await page.evaluate(() => { const b = document.getElementById('svt-fx'); if (b) b.remove(); document.querySelectorAll('[data-fx]').forEach(e => e.removeAttribute('data-fx')); });

      /* ---- the links: contrast (D-F0), touch areas (D-F11) ---- */
      await L.quizOn(page, await page.evaluate(() => (QUESTIONS.find(q => !q.type && !q.multi && q.options && q.options.length > 1 && /Skin-PCol[^)]*\) slide \d+/.test(q.cite) && q.options.some(o => /slide \d/.test(o.why))) || {}).id));
      await settle(300);
      await page.evaluate(() => document.querySelector('#v-quiz button.opt[data-o]').click()); await settle(500);
      /* the touch areas of one view; where a link's margin lies over a control that can be reached, a real click
         at that point must not open the viewer (the control gets it) */
      const areas = async sel => {
        const r = await page.evaluate(areasFn, sel);
        for (let k = 0; k < r.over.length; k++) {
          const pt = await page.evaluate(([k, o]) => { const l = document.querySelector('[data-over="' + k + '"]'); if (!l) return null; l.scrollIntoView({block: 'center', inline: 'center'}); const b = l.getClientRects()[0]; return {x: b.left + o.dx, y: b.top + o.dy}; }, [k, r.over[k]]);
          if (!pt) { r.covered.push(r.over[k].what + ' (not found again)'); continue; }
          await page.mouse.click(pt.x, pt.y); await settle(250);
          const x = await viewer();
          if (x && x.open) { r.covered.push(r.over[k].what); await closeV(); }
        }
        r.overlaps = r.over.length;
        return r;
      };
      const color = {quiz: await page.evaluate(contrastFn, '#v-quiz .slk')}, area = {quiz: await areas('#v-quiz')};
      for (const v of ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams', 'dz', 'gaps']) {
        await show(v);
        color[v] = await page.evaluate(contrastFn, '#v-' + v + ' .slk');
        if (v !== 'gaps') area[v] = await areas('#v-' + v);
        if (v === 'guide') {
          const bar = await page.evaluate(() => {
            const ls = [...document.querySelectorAll('#v-guide .gbar .slk')], cs = e => getComputedStyle(e);
            return {n: ls.length, bars: new Set(ls.map(l => l.closest('.gbar'))).size,
              type: ls.filter(l => { const a = cs(l), p = cs(l.parentElement); return a.fontSize !== p.fontSize || a.textTransform !== p.textTransform || a.letterSpacing !== p.letterSpacing || a.fontStyle !== p.fontStyle || a.color !== p.color; }).length};
          });
          const onBar = await page.evaluate(contrastFn, '#v-guide .gbar .slk');
          check(bar.n >= 60 && onBar.n === bar.n && onBar.min >= 4.5, T(`Guides: the ${bar.n} slide links on ${bar.bars} objective bars can be read (lowest contrast ${onBar.min}:1)`), onBar.low);
          check(bar.type === 0, T('they have the size, case, spacing and color of the bar text they sit in'), bar.type + ' differ');
          const ring = await page.evaluate(() => { const l = document.querySelector('#v-guide .gbar .slk'); l.scrollIntoView({block: 'center'}); l.setAttribute('data-ring', '1'); l.focus(); return true; });
          await page.keyboard.press('Tab'); await page.keyboard.press('Shift+Tab'); await settle(120);
          const rg = await page.evaluate(() => {
            const l = document.querySelector('[data-ring]'), c = getComputedStyle(l), b = getComputedStyle(l.closest('.gbar')).backgroundColor;
            const p = s => (/rgba?\(([^)]+)\)/.exec(s)[1].split(/[,\s\/]+/).filter(Boolean).map(Number)), f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
            const lum = x => 0.2126 * f(x[0]) + 0.7152 * f(x[1]) + 0.0722 * f(x[2]), a = lum(p(c.outlineColor)), d = lum(p(b));
            return {focused: document.activeElement === l && l.matches(':focus-visible'), style: c.outlineStyle, width: c.outlineWidth, ratio: +((Math.max(a, d) + 0.05) / (Math.min(a, d) + 0.05)).toFixed(2)};
          });
          check(ring && rg.focused && rg.style === 'solid' && parseFloat(rg.width) >= 2 && rg.ratio >= 3, T(`a bar link reached with Tab has a focus ring that shows on the bar (${rg.ratio}:1)`), rg);
          if (!size.touch) {
            const pt = await page.evaluate(() => { const l = document.querySelector('[data-ring]'), r = document.createRange(); r.selectNodeContents(l); const b = r.getClientRects()[0]; return {x: b.left + b.width / 2, y: b.top + b.height / 2}; });
            await page.mouse.move(pt.x, pt.y); await settle(120);
            const hov = await page.evaluate(contrastFn, '[data-ring]');
            check(hov.n === 1 && hov.min >= 4.5, T(`under the mouse pointer it can still be read (${hov.min}:1)`), hov.low);
            await page.mouse.move(2, 2);
          }
          await page.evaluate(() => { document.querySelector('[data-ring]').removeAttribute('data-ring'); document.activeElement.blur(); });
        }
        if (v !== 'gaps' && area[v].pairs) {   // (taps: the tabs; the Diseases cards and panels are measured, not tapped)
          let opened = 0; const missed = [], taps = Math.min(4, area[v].pairs);
          for (let k = 0; k < taps; k++) {
            const pt = await page.evaluate(pairPointFn, ['v-' + v, k]); if (!pt) { missed.push('pair ' + k + ' was not found again'); continue; }
            await tap(pt.x, pt.y); await settle(350);
            const x = await viewer();
            if (x && x.open && (x.src === fileOf(pt.a.deck, pt.a.n, pt.a.printed) || x.src === fileOf(pt.b.deck, pt.b.n, pt.b.printed))) opened++; else missed.push(JSON.stringify(pt.a.text) + ' | ' + JSON.stringify(pt.b.text) + ' gap ' + pt.gap.toFixed(1));
            await closeV();
          }
          check(opened === taps, T(`${v}: a tap midway between two links that sit close together opens one of the two (${opened} of ${taps} taps; ${area[v].pairs} such pairs)`), missed.join('; '));
        }
        const sw = await sideways(), own = v !== 'gaps' && sw > 1 && sw === area[v].sideOff;
        if (own) console.log(`  note  ${size.name}: ${v}: the tab itself is ${sw} px wider than the window, with or without the slide links (not checked here)`);
        check(sw <= 1 || own, T(`${v}: no sideways scroll from the slide links`), sw);
      }
      // Diseases: every card, every drug panel and the other three views (two sizes; the colors do not depend on the window)
      if (dzDeep < 2 && (size.w === 390 || size.w === 1376)) {
        dzDeep++;
        await page.evaluate(() => show('dz')); await settle(500);
        const dz = await page.evaluate(() => ({cards: DZ.cards.map(c => c.id), drugs: Object.keys(DZ.drugs)}));
        const acc = {n: 0, min: 99, low: []}, add = r => { acc.n += r.n; if (r.n && r.min < acc.min) acc.min = r.min; acc.low = acc.low.concat(r.low).slice(0, 5); };
        const all = {links: 0, short: 0, minH: 999, blocks: 0, moved: 0, textMoved: 0, overflow: 0, near: 0, overlaps: 0, covered: [], stolen: [], pairs: 0};
        const addArea = r => { ['links', 'short', 'blocks', 'moved', 'textMoved', 'overflow', 'near', 'overlaps', 'pairs'].forEach(k => { all[k] += r[k]; }); if (r.links && r.minH < all.minH) all.minH = r.minH; all.covered = all.covered.concat(r.covered).slice(0, 6); all.stolen = all.stolen.concat(r.stolen).slice(0, 5); };
        for (const id of dz.cards) {
          await page.evaluate(id => { const c = DZ.cards.find(x => x.id === id); DZ_UI.state.view = 'cards'; DZ_UI.state.card = id; c.steps.forEach((s, i) => { DZ_UI.state.open[id + ':' + i] = true; }); DZ_UI.render(); }, id);
          await settle(220); add(await page.evaluate(contrastFn, '#v-dz .slk')); addArea(await areas('#v-dz'));
        }
        const openDz = k => page.evaluate(k => { const b = document.createElement('button'); b.setAttribute('data-drug', k); b.style.display = 'none'; document.querySelector('#v-dz .dzbody').appendChild(b); b.click(); b.remove(); }, k);
        for (const k of dz.drugs) { await openDz(k); await settle(120); add(await page.evaluate(contrastFn, '#v-dz .dzdlg .slk')); addArea(await areas('#v-dz .dzdlg')); }
        await page.evaluate(() => { const d = document.querySelector('#v-dz .dzdlg'); if (d && d.open) d.close(); });
        for (const view of ['tell', 'pairs', 'rules']) { await page.evaluate(view => { DZ_UI.state.view = view; DZ_UI.render(); }, view); await settle(400); add(await page.evaluate(contrastFn, '#v-dz .slk')); addArea(await areas('#v-dz')); }
        color['dz, all cards and panels'] = acc; area['dz, all cards and panels'] = all;
      }
      const deep = color['dz, all cards and panels'];
      if (deep) check(deep.n > 500 && area['dz, all cards and panels'].links > 500, T(`Diseases: every card, every drug panel and the three other views were read (${deep.n} links)`), deep.n);
      const tabs = Object.keys(color).filter(k => color[k].n > 0), low = tabs.filter(k => color[k].min < 4.5);
      console.log('  links read for contrast: ' + tabs.map(k => `${k} ${color[k].n} (min ${color[k].min})`).join(', '));
      check(tabs.length >= 8 && ['quiz', 'ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams', 'dz'].every(k => color[k] && color[k].n > 0) && !low.length,
        T(`every slide link in every tab with links has a contrast of at least 4.5:1 with what is behind it (${tabs.reduce((s, k) => s + color[k].n, 0)} links, ${tabs.length} places)`), low.map(k => k + ': ' + color[k].low.join(' | ')).join('; '));
      const views = Object.keys(area), sum = k => views.reduce((s, v) => s + area[v][k], 0);
      console.log('  touch areas: ' + views.map(v => `${v} ${area[v].links} links (lowest ${area[v].minH} px, ${area[v].pairs} close pairs, ${area[v].near} beside a control, ${area[v].overlaps} over one)`).join(', '));
      check(sum('links') > 1000 && sum('short') === 0, T(`the touch area of every slide link is at least 24 px high (${sum('links')} links)`), views.filter(v => area[v].short).map(v => v + ': ' + area[v].short + ' under 24 px, lowest ' + area[v].minH).join('; '));
      check(sum('blocks') > 3000 && sum('moved') === 0 && sum('textMoved') === 0 && sum('overflow') === 0,
        T(`the larger touch areas move nothing: of ${sum('blocks')} boxes none changes size, no link's text moves, no scroll box gains overflow`), views.map(v => `${v}: ${area[v].moved} boxes, ${area[v].textMoved} texts, ${area[v].overflow} scroll boxes`).join('; '));
      check(views.every(v => !area[v].covered.length), T(`no link's touch area takes a tap from a neighboring button, summary, field or other control (${sum('near')} lie beside one; where the area reaches over one, ${sum('overlaps')} place(s), a click there is not the link's)`), views.filter(v => area[v].covered.length).map(v => v + ': ' + area[v].covered.join(' | ')).join('; '));
      check(views.every(v => !area[v].stolen.length), T('the middle of every link\'s own text is that link\'s'), views.filter(v => area[v].stolen.length).map(v => v + ': ' + area[v].stolen.join(' | ')).join('; '));

      /* ---- dark color scheme: the same contrast (the page has no dark theme of its own; one rule of jump_ui.js) ---- */
      if (size.w === 1376) {
        await page.emulateMedia({colorScheme: 'dark'});
        const dark = {};
        for (const v of ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams', 'dz']) { await show(v); dark[v] = await page.evaluate(contrastFn, '#v-' + v + ' .slk'); }
        const bad = Object.keys(dark).filter(k => !dark[k].n || dark[k].min < 4.5);
        check(!bad.length, T(`with the dark color scheme asked for, the same: at least 4.5:1 in every tab (${Object.keys(dark).reduce((s, k) => s + dark[k].n, 0)} links)`), bad.map(k => k + ': ' + dark[k].low.join(' | ')).join('; '));
        await page.emulateMedia({colorScheme: 'light'});
      }

      /* ---- a browser without <dialog>: the page lock is released there too ---- */
      if (size.w === 390) {
        await show('ref');
        const fb = await page.evaluate(async () => {
          HTMLDialogElement.prototype.showModal = undefined;
          const l = [...document.querySelectorAll('#v-ref td .slk')].find(b => b.getClientRects().length); l.scrollIntoView({block: 'center'});
          const y0 = scrollY; l.focus(); l.click(); await new Promise(r => setTimeout(r, 400));
          const all = document.querySelectorAll('dialog.slv'), d = all[all.length - 1], during = {open: d.hasAttribute('open'), o: document.documentElement.style.overflow, src: !!d.querySelector('.slv-img').getAttribute('src')};
          window.scrollBy(0, 150);
          d.querySelector('[data-slv=close]').click(); await new Promise(r => setTimeout(r, 200));
          return {y0, during, after: {open: d.hasAttribute('open'), o: document.documentElement.style.overflow, y: scrollY, back: document.activeElement === l}};
        });
        check(fb.during.open && fb.during.src && fb.during.o === 'hidden' && !fb.after.open && fb.after.o === '' && fb.after.y === fb.y0 && fb.after.back,
          T('without <dialog> the viewer opens, locks the page, and Close releases it at the same place with focus on the citation'), fb);
      }

      check(!errors.length, T('no page error'), errors.slice(0, 4).join(' | '));
      await ctx.close();
    }

    /* ---- a window whose scrollbar takes room: the page is locked with the scrollbar left in place (D-F7) ---- */
    console.log('\n=== A scrollbar that takes room (1376x1032) ===');
    const wide = await L.browserType(NAME).launch({ignoreDefaultArgs: ['--hide-scrollbars']});
    try {
      const ctx = await wide.newContext({viewport: {width: 1376, height: 1032}, deviceScaleFactor: 1, serviceWorkers: 'block'});
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage(), errors = [];
      page.on('pageerror', e => errors.push(e.message));
      site.delay = 0; site.fail = false;
      await page.goto(site.url + 'preview/index.html');
      await page.waitForFunction(() => document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      await page.evaluate(() => show('ref')); await page.waitForTimeout(900);
      await page.evaluate(() => document.querySelectorAll('details').forEach(d => { if (d.querySelector('.slk')) d.open = true; })); await page.waitForTimeout(200);
      const at = await page.evaluate(() => { const l = [...document.querySelectorAll('#v-ref td .slk')].find(b => b.getClientRects().length && b.getBoundingClientRect().top + scrollY > innerHeight * 2);
        l.setAttribute('data-svt', '1'); l.scrollIntoView({block: 'center', inline: 'center'}); const b = l.getClientRects()[0]; return {x: b.left + b.width / 2, y: b.top + b.height / 2}; });
      const geo = () => page.evaluate(() => { const m = document.querySelector('main').getBoundingClientRect(), l = document.querySelector('[data-svt]').getBoundingClientRect(), n = document.querySelector('#nav').getBoundingClientRect(), s = document.documentElement.style;
        return {y: scrollY, bar: innerWidth - document.documentElement.clientWidth, cw: document.documentElement.clientWidth, main: m.left.toFixed(2) + ',' + m.width.toFixed(2), link: l.left.toFixed(2) + ',' + l.top.toFixed(2), nav: n.left.toFixed(2) + ',' + n.width.toFixed(2),
                style: [s.overflow, s.scrollbarGutter || '', s.paddingRight].join('|'), open: !!document.querySelector('dialog.slv') && document.querySelector('dialog.slv').open}; });
      const g0 = await geo();
      if (!g0.bar) L.skip('nothing moves sideways when the scrollbar goes', 'this browser draws no scrollbar that takes room');
      else {
        await page.mouse.click(at.x, at.y); await page.waitForTimeout(500);
        const g1 = await geo();
        await page.mouse.move(40, 500); await page.mouse.wheel(0, 500); await page.waitForTimeout(250);
        const g2 = await geo();
        await page.keyboard.press('PageDown'); await page.keyboard.press('End'); await page.keyboard.press('ArrowDown'); await page.waitForTimeout(350);
        const g3 = await geo();
        await page.evaluate(() => window.scrollBy(0, 240)); await page.waitForTimeout(200);       // what a drag on the scrollbar does
        const g4 = await geo();
        await page.keyboard.press('Escape'); await page.waitForTimeout(250);
        const g5 = await geo();
        await page.mouse.move(700, 500); await page.mouse.wheel(0, 300); await page.waitForTimeout(250);
        const g6 = await geo();
        // every box that was measured, the scrollbar and the root's own style: the same
        const still = (a, b) => a.cw === b.cw && a.bar === b.bar && a.main === b.main && a.link === b.link && a.nav === b.nav && a.y === b.y;
        check(g0.y > 0 && g1.open && still(g0, g1) && g1.style === g0.style, `with a scrollbar ${g0.bar} px wide: when the viewer opens the scrollbar stays and nothing on the page moves`, {before: g0, open: g1});
        check(still(g0, g2), 'a wheel turn on the dimmed page does not scroll the page behind', {before: g0, after: g2});
        check(still(g0, g3), 'Page Down, End and the down arrow do not scroll it', {before: g0, after: g3});
        check(still(g0, g4), 'the page moved another way (as a drag on the scrollbar moves it) is put back at once', {before: g0, after: g4});
        check(!g5.open && still(g0, g5) && g5.style === g0.style, 'after Escape the page is as it was and where it was', {before: g0, closed: g5});
        check(g6.y > g0.y, 'and it scrolls again', {before: g0.y, after: g6.y});
      }
      check(!errors.length, 'no page error', errors.slice(0, 4).join(' | '));
      await ctx.close();
    } finally { await wide.close(); }

    /* ---- the printed numbers, against the clean deck where it is on this machine ---- */
    console.log('\n=== Printed slide numbers (Dr. Sikazwe\'s clean deck) ===');
    const rows = (S.printed || []).filter(r => r[0] === 'mc');
    check(rows.length === 1 && rows[0][1] === 59 && rows[0][2] === 51, 'slide_data.js lists clean page 59 as printing 51, and no other page', JSON.stringify(S.printed || null));
    const clean = ['/home/user/DEENT/src/decks/clean', path.join(__dirname, 'decks', 'clean')].map(d => path.join(d, D.mc.clean)).find(f => fs.existsSync(f));
    let text = null;
    if (clean) { try { text = child.execFileSync('pdftotext', ['-enc', 'UTF-8', clean, '-'], {encoding: 'utf8', maxBuffer: 1 << 26}); } catch (e) { text = null; } }
    if (!text) L.skip('the number printed on each clean page, read with pdftotext', clean ? 'pdftotext did not run' : 'the clean deck is not on this machine (gitignored)');
    else {
      const pages = text.split('\f'); if (!pages[pages.length - 1].trim()) pages.pop();
      const printed = pages.map(p => { const n = p.split('\n').map(x => x.trim()).filter(x => /^\d{1,3}$/.test(x)); return n.length ? +n[n.length - 1] : 0; });
      const off = printed.map((n, i) => [i + 1, n]).filter(x => x[0] !== x[1]);
      check(pages.length === D.mc.pages && JSON.stringify(off) === JSON.stringify(rows.map(r => [r[1], r[2]])), `pdftotext: of the ${pages.length} clean pages, the ones that print another number than their place are exactly the rows of the table`, JSON.stringify(off));
    }
  } finally { await browser.close(); }
  L.finish(NAME);
})().catch(e => { console.error(e); console.log(`FAIL: ${NAME}: stopped: ${e && e.message}`); process.exit(1); });
