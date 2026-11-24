/* المرحلة 2: قائمة جانبية لكل عالم (store-fix-plan §4-د و§8-ب-6) + «دراجة هوائية» بدل «سيكل» في العرض */
(function () {
try {
if (window.__AK_DRAWER__) return; window.__AK_DRAWER__ = 1;
var W = {
tables: { name: 'رياضة وألعاب', wa: '966598060796', v: ['#06101F', '#0B1630', '#1D2E52', '#2A3E66', '#C5D3EC', '#8FA3C8', '#22D3EE', '#06101F', '34,211,238'] },
play: { name: 'المراجيح والروضات', wa: '966598060796', v: ['#0B2620', '#0F2F27', '#1E4A3E', '#2B5F50', '#CFE3D9', '#8DB5A4', '#F2C94C', '#1F1A05', '242,201,76'] },
moto: { name: 'السكوترات والدبابات', wa: '966567886993', v: ['#0D0E10', '#15161A', '#2A2C31', '#3D4047', '#D0D3D9', '#9A9FA8', '#E11D2E', '#FFFFFF', '225,29,46'] }
};
try { var CW = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.WA) || {}; for (var wk in W) if (CW[wk]) W[wk].wa = CW[wk]; } catch (e0) {}
// الأقسام لكل عالم: [رقم التصنيف، الاسم]. المنتجات المشتركة (الملاعب وكرة القدم والأرضيات) تطلع في عالمين (قرار المالك 05:10)
var COURTS = [[481125644, 'الملاعب الخارجية'], [1119897091, 'كرة القدم والتدريب']];
var M = {
tables: [
{ t: 'طاولات الألعاب', k: [[993213184, 'طاولات بلياردو'], [353917441, 'طاولات هوكي'], [1303174661, 'طاولات تنس الطاولة'], [1767250951, 'طاولات فرفيرة'], [529136902, 'طاولات 4 في 1']], all: [428244369, 'كل طاولات الألعاب'] },
{ t: 'دراجات هوائية', k: [[778074738, 'دراجات الكبار والشباب'], [1679231858, 'دراجات الأطفال']] },
{ t: 'أجهزة كارديو', k: [[1130992222, 'السيور الكهربائية'], [955842393, 'الدراجات الثابتة وأجهزة الكارديو']] },
{ t: 'الهوم جيم والأوزان', k: [[490123615, 'الهوم جيم والبنشات'], [180690522, 'الأوزان والدمبلات'], [1863569496, 'إكسسوارات وأرضيات']] },
{ t: 'الملاكمة', c: 1688354139 },
{ t: 'الملاعب وكرة القدم', k: COURTS.concat([[2055314181, 'التنس والمضارب']]) },
{ t: 'الأرضيات', k: [[780253807, 'أرضيات الجيم'], [2020530536, 'أرضيات الحدائق والملاعب']], all: [48135277, 'كل الأرضيات'] }
],
play: [
{ t: 'مراجيح', c: 1376791097 },
{ t: 'ملاعب متكاملة', c: 1721936584 },
{ t: 'نطيطات ترامبولين', c: 175080959 },
{ t: 'ألعاب الروضات والمدارس', c: 1677012877 },
{ t: 'ألعاب صغيرة وتوازن', k: [[1160136731, 'كراسي التوازن'], [1248444183, 'كرسي دوار'], [427559449, 'كرسي هزاز']] },
{ t: 'الملاعب الخارجية وكرة القدم', k: COURTS },
{ t: 'الأرضيات', k: [[2020530536, 'أرضيات الحدائق والملاعب'], [780253807, 'أرضيات الجيم']], all: [48135277, 'كل الأرضيات'] },
{ t: 'كل ألعاب الحدائق', c: 46021744 }
],
moto: [
{ t: 'سكوترات كهربائية', c: 726194163 },
{ t: 'دبابات', c: 1499711730 },
{ t: 'دبابات شحن وتكتوك', c: 85325564 },
{ t: 'كل السكوترات والدبابات', c: 1599672881 }
]
};
var LINKS = [['سياسة التوصيل', 'page-1343888314'], ['الاستبدال والاسترجاع', 'page-877714872'], ['من نحن', 'page-1896341707'], ['الاستخدام والخصوصية', 'page-1387788131']];
var pre = location.pathname.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';
var href = function (id) {
var a = document.querySelector('#mobile-menu a[href$="c' + id + '"], .main-menu a[href$="c' + id + '"], footer a[href$="c' + id + '"]');
return a ? a.getAttribute('href') : pre + '/c' + id;
};
var page = function (p) { var a = document.querySelector('footer a[href$="' + p + '"], a[href$="' + p + '"]'); return a ? a.getAttribute('href') : pre + '/' + p; };
var world = function () {
var w = null;
try { var m = /[?&]world=(tables|play|moto)/.exec(location.search); if (m) w = m[1]; } catch (e) {}
try { if (!w) w = localStorage.getItem('ak-world'); } catch (e) {}
return W[w] ? w : 'tables';
};
var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
var css = '#ak-dr,#ak-dr *{box-sizing:border-box}#ak-dr{position:fixed;inset:0;z-index:100000;visibility:hidden;font-family:inherit}#ak-dr.on{visibility:visible}'
+ '#ak-dr .akd-ov{position:absolute;inset:0;background:rgba(0,0,0,.55);opacity:0;transition:opacity .2s}#ak-dr.on .akd-ov{opacity:1}'
+ '#ak-dr .akd-p{position:absolute;top:0;bottom:0;inset-inline-start:0;width:min(86vw,360px);background:var(--d-bg);color:#fff;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .22s ease;box-shadow:0 0 40px rgba(0,0,0,.4)}'
+ '[dir=ltr] #ak-dr .akd-p{transform:translateX(-100%)}#ak-dr.on .akd-p{transform:none}'
+ '#ak-dr .akd-h{height:56px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-bottom:1px solid rgba(var(--d-rgb),.2)}'
+ '#ak-dr .akd-h img{height:32px;width:auto;display:block}#ak-dr .akd-h b{font-size:16px;font-weight:800}'
+ '#ak-dr .akd-x{width:40px;height:40px;border-radius:999px;border:0;background:rgba(255,255,255,.06);color:var(--d-acc);display:flex;align-items:center;justify-content:center;cursor:pointer}'
+ '#ak-dr .akd-b{flex:1;overflow-y:auto;overscroll-behavior:contain;padding-bottom:calc(16px + env(safe-area-inset-bottom))}'
+ '#ak-dr .akd-ws{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:14px 16px 8px}'
+ '#ak-dr .akd-w{height:40px;border-radius:999px;border:1px solid var(--d-line2);background:transparent;color:var(--d-ink2);font:inherit;font-size:12.5px;font-weight:800;line-height:1.15;padding:0 6px;cursor:pointer}'
+ '#ak-dr .akd-w.is-on{border-color:transparent;background:var(--w-acc);color:var(--w-on)}'
+ '#ak-dr .akd-open{display:block;padding:2px 16px 10px;font-size:13px;font-weight:700;color:var(--d-acc);text-decoration:none}'
+ '#ak-dr .akd-c{transition:opacity .18s}#ak-dr .akd-c.fade{opacity:0}'
+ '#ak-dr .akd-r,#ak-dr .akd-s{display:flex;align-items:center;justify-content:space-between;width:100%;text-align:start;text-decoration:none;font:inherit;background:none;border:0;cursor:pointer}'
+ '#ak-dr .akd-r{min-height:48px;padding:0 16px;font-size:15px;font-weight:700;color:#fff;border-top:1px solid rgba(var(--d-rgb),.2)}'
+ '#ak-dr .akd-r svg{flex:none;color:var(--d-sub);transition:transform .2s}#ak-dr .akd-g.open > .akd-r svg{transform:rotate(180deg)}'
+ '#ak-dr .akd-sub{display:none;padding-bottom:6px}#ak-dr .akd-g.open > .akd-sub{display:block}'
+ '#ak-dr .akd-s{min-height:44px;padding-inline:28px 16px;font-size:14px;font-weight:600;color:var(--d-ink2)}#ak-dr .akd-s.all{color:var(--d-acc);font-weight:700}'
+ '#ak-dr .akd-r.cur,#ak-dr .akd-s.cur{color:var(--d-acc)}'
+ '#ak-dr .akd-wa{display:flex;align-items:center;justify-content:center;gap:10px;margin:16px 16px 6px;height:48px;border-radius:12px;background:var(--d-acc);color:var(--d-on)!important;font-size:15px;font-weight:800;text-decoration:none}'
+ '#ak-dr .akd-note{margin:0 16px 8px;font-size:12.5px;color:var(--d-sub);text-align:center}'
+ '#ak-dr .akd-l{display:flex;align-items:center;min-height:40px;padding:0 16px;font-size:14px;color:var(--d-ink2);text-decoration:none}'
+ '#ak-dr .akd-ls{border-top:1px solid rgba(var(--d-rgb),.2);margin-top:8px;padding-top:6px}'
+ '#ak-dr .akd-acc{display:flex;align-items:center;gap:8px;width:100%;min-height:48px;padding:0 16px;margin-top:6px;border:0;border-top:1px solid rgba(var(--d-rgb),.2);background:none;color:#fff;font:inherit;font-size:14px;font-weight:700;cursor:pointer;text-align:start}'
+ 'html.ak-dr-lock,html.ak-dr-lock body{overflow:hidden!important}';
var CHEV = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
var WAI = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3z"/></svg>';
var root = null, shown = 'tables';
var here = decodeURIComponent(location.pathname);
var isCur = function (id) { return new RegExp('c' + id + '(\\D|$)').test(here); };
var setVars = function (el, w) {
var v = W[w].v;
el.style.setProperty('--d-bg', v[0]); el.style.setProperty('--d-card', v[1]); el.style.setProperty('--d-line', v[2]); el.style.setProperty('--d-line2', v[3]);
el.style.setProperty('--d-ink2', v[4]); el.style.setProperty('--d-sub', v[5]); el.style.setProperty('--d-acc', v[6]); el.style.setProperty('--d-on', v[7]); el.style.setProperty('--d-rgb', v[8]);
};
var content = function (w) {
var h = '<a class="akd-r" href="' + esc(pre + '/?world=' + w) + '"><span>الرئيسية</span></a>';
var L = M[w];
for (var i = 0; i < L.length; i++) {
var g = L[i];
if (g.c) { h += '<a class="akd-r' + (isCur(g.c) ? ' cur' : '') + '" href="' + esc(href(g.c)) + '"><span>' + esc(g.t) + '</span></a>'; continue; }
var open = false, s = '';
for (var j = 0; j < g.k.length; j++) { var c = isCur(g.k[j][0]); if (c) open = true; s += '<a class="akd-s' + (c ? ' cur' : '') + '" href="' + esc(href(g.k[j][0])) + '">' + esc(g.k[j][1]) + '</a>'; }
if (g.all) { if (isCur(g.all[0])) open = true; s += '<a class="akd-s all" href="' + esc(href(g.all[0])) + '">' + esc(g.all[1]) + '</a>'; }
h += '<div class="akd-g' + (open ? ' open' : '') + '"><button type="button" class="akd-r" aria-expanded="' + open + '"><span>' + esc(g.t) + '</span>' + CHEV + '</button><div class="akd-sub">' + s + '</div></div>';
}
if (w === 'tables') h += '<a class="akd-r" href="' + esc(pre + '/?world=tables#ak-size') + '"><span>وش يناسبك؟ اختر مقاس طاولتك</span></a>';
var msg = w === 'moto' ? 'السلام عليكم، عندي سؤال عن السكوترات والدبابات' : (w === 'play' ? 'السلام عليكم، ودي أتأكد من توفر منتج من المراجيح والروضات' : 'السلام عليكم، ودي أستفسر عن منتج');
h += '<a class="akd-wa" target="_blank" rel="noopener" href="https://wa.me/' + W[w].wa + '?text=' + encodeURIComponent(msg) + '">' + WAI + '<span>كلّمنا على الواتساب</span></a>';
if (w === 'play') h += '<div class="akd-note">تواصل معنا للتأكد من توفر المنتج</div>';
h += '<div class="akd-ls">';
for (var k = 0; k < LINKS.length; k++) h += '<a class="akd-l" href="' + esc(page(LINKS[k][1])) + '">' + esc(LINKS[k][0]) + '</a>';
h += '</div><button type="button" class="akd-acc"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg><span>حسابي</span></button>';
return h;
};
var paint = function (w, fade) {
shown = w;
var p = root.querySelector('.akd-p'); setVars(p, w);
var bs = root.querySelectorAll('.akd-w');
for (var i = 0; i < bs.length; i++) { var on = bs[i].getAttribute('data-w') === w; bs[i].classList.toggle('is-on', on); bs[i].setAttribute('aria-pressed', on); }
var op = root.querySelector('.akd-open'), cur = world();
op.style.display = w === cur ? 'none' : 'block';
op.setAttribute('href', pre + '/?world=' + w); op.textContent = 'افتح عالم ' + W[w].name + ' ←';
var c = root.querySelector('.akd-c');
if (fade) { c.classList.add('fade'); setTimeout(function () { c.innerHTML = content(w); c.classList.remove('fade'); }, 180); }
else c.innerHTML = content(w);
};
var build = function () {
if (root) return root;
var st = document.createElement('style'); st.id = 'ak-dr-css'; st.textContent = css; document.head.appendChild(st);
root = document.createElement('div'); root.id = 'ak-dr'; root.setAttribute('aria-hidden', 'true');
var lg = document.querySelector('a.navbar-brand img, header .navbar-brand img');
var logo = lg ? '<img src="' + esc(lg.currentSrc || lg.src) + '" alt="الكاسر لوب">' : '<b>الكاسر لوب</b>';
var ws = '';
for (var k in W) { var v = W[k].v; ws += '<button type="button" class="akd-w" data-w="' + k + '" style="--w-acc:' + v[6] + ';--w-on:' + v[7] + '">' + W[k].name + '</button>'; }
root.innerHTML = '<div class="akd-ov"></div><nav class="akd-p" role="dialog" aria-modal="true" aria-label="القائمة"><div class="akd-h">' + logo + '<button type="button" class="akd-x" aria-label="إغلاق القائمة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div><div class="akd-b"><div class="akd-ws">' + ws + '</div><a class="akd-open" href="#"></a><div class="akd-c"></div></div></nav>';
document.body.appendChild(root);
root.addEventListener('click', function (e) {
var t = e.target;
if (t.closest('.akd-ov') || t.closest('.akd-x')) { close(); return; }
var wb = t.closest('.akd-w'); if (wb) { var nw = wb.getAttribute('data-w'); if (nw !== shown) paint(nw, true); return; }
var gb = t.closest('.akd-g > .akd-r'); if (gb) { var g = gb.parentNode, o = !g.classList.contains('open'); g.classList.toggle('open', o); gb.setAttribute('aria-expanded', o); return; }
if (t.closest('.akd-acc')) { close(); var u = document.querySelector('header .sicon-user-circle, header .sicon-user'); u = u && (u.closest('a,button,salla-user-menu') || u); if (u) u.click(); return; }
if (t.closest('a')) { var hh = t.closest('a').getAttribute('href') || ''; if (/#ak-size$/.test(hh) && document.getElementById('ak-size')) { e.preventDefault(); close(); document.getElementById('ak-size').scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('on')) close(); });
return root;
};
var open = function () {
build(); paint(world(), false);
root.classList.add('on'); root.setAttribute('aria-hidden', 'false');
document.documentElement.classList.add('ak-dr-lock');
setTimeout(function () { var x = root.querySelector('.akd-x'); if (x) x.focus(); }, 60);
};
var close = function () {
if (!root) return;
root.classList.remove('on'); root.setAttribute('aria-hidden', 'true');
document.documentElement.classList.remove('ak-dr-lock');
};
// زر القائمة في الهيدر يفتح قائمتنا بدل قائمة سلة العامة
document.addEventListener('click', function (e) {
var a = e.target && e.target.closest && e.target.closest('a[href="#mobile-menu"], .mburger');
if (!a) return;
e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
open();
}, true);
window.akDrawer = { open: open, close: close };
// «سيكل/سياكل» تظهر «دراجة/دراجات هوائية» (قاعدة المالك) – عرض فقط، والأوصاف نفسها لمراجعة 24 ديسمبر
var SR = [[/سيكل ثابت/g, 'دراجة ثابتة'], [/السياكل/g, 'الدراجات الهوائية'], [/سياكل/g, 'دراجات هوائية'], [/السيكل/g, 'الدراجة الهوائية'], [/سيكل/g, 'دراجة هوائية']];
var bikeTxt = function () {
try {
var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = tw.nextNode())) {
var v = nd.nodeValue; if (!v || (v.indexOf('سيكل') < 0 && v.indexOf('سياكل') < 0)) continue;
var pn = nd.parentNode && nd.parentNode.nodeName; if (pn === 'SCRIPT' || pn === 'STYLE' || pn === 'TEXTAREA') continue;
for (var i = 0; i < SR.length; i++) v = v.replace(SR[i][0], SR[i][1]);
nd.nodeValue = v;
}
} catch (e) {}
};
var q = 0, sched = function () { if (q) return; q = setTimeout(function () { q = 0; bikeTxt(); }, 300); };
var go = function () { bikeTxt(); try { new MutationObserver(sched).observe(document.body, { childList: true, subtree: true, characterData: true }); } catch (e) {} };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
} catch (e) {}
})();
