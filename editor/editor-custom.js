/* الجولة 8: صور معرض صفحة المنتج بنسخة أخف من CDN سلة نفسه (عرض الجوال ×2، أقصى 1000px، webp/avif). رابط التكبير يبقى الأصلي، ولو فشلت النسخة ترجع الأصلية */
(function () { try {
if (!/\/p\d+\/?$/.test(location.pathname)) return;
var W = Math.min(1000, Math.ceil(Math.min(window.innerWidth || 400, 1000) * Math.min(window.devicePixelRatio || 1, 2) / 100) * 100);
var RX = /^https:\/\/(cdn\.files\.salla\.network|cdn\.salla\.sa)\/(?!cdn-cgi\/)(.+\.(?:jpe?g|png|webp))$/i;
var fix = function () { var im = document.querySelectorAll('.swiper-slide img[data-src]:not([data-akg])'); for (var i = 0; i < im.length; i++) { var e = im[i]; e.setAttribute('data-akg', '1'); if (e.getAttribute('data-ll-status')) continue; var ds = e.getAttribute('data-src'), m = RX.exec(ds || ''); if (!m) continue; e.setAttribute('data-src', 'https://' + m[1] + '/cdn-cgi/image/fit=scale-down,width=' + W + ',format=auto/' + m[2]); (function (e, ds) { e.addEventListener('error', function () { if (e.getAttribute('src') !== ds) e.setAttribute('src', ds); }, { once: true }); })(e, ds); } };
fix(); document.addEventListener('DOMContentLoaded', fix); var gn = 0, gi = setInterval(function () { fix(); if (++gn > 40) clearInterval(gi); }, 150);
} catch (e) {} })();
/* ALKASSER LOOB — عوالم الكاسر (ليل ونهار). يتحمّل من مستودع alkasser-store-assets */
(function () {
try {
if (window.__AK_WORLDS_LOADER__) return;
window.__AK_WORLDS_LOADER__ = 1;
var BASE = 'https://cdn.jsdelivr.net/gh/alkasrlwb-hub/alkasser-store-assets@main';
var IMG = BASE + '/img/';
var pre = location.pathname.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';
function U(p) { return pre + p; }
var C = {
billiard: U('/billiard-tables/c993213184'),
hockey: U('/air-hockey-tables/c353917441'),
tennis: U('/table-tennis-tables/c1303174661'),
foos: U('/foosball-tables/c1767250951'),
q4: U('/4-in-1-game-table/c529136902'),
tables: U('/طاولات-الألعاب/c428244369'),
garden: U('/العاب-حدائق-كبيره-مناسب-للصغار-والكبار/c1721936584'),
kinder: U('/العاب-المدارس-و-رياض-الأطفال/c1677012877'),
rocking: U('/كرسي-هزاز/c427559449'),
bikes: U('/bicycles/c778074738'),
kbikes: U('/kids-bicycles/c1679231858'),
moto: U('/سكوترات/c1599672881'),
scooters: U('/سكوترات-كهربائية/c726194163'),
motos: U('/دبابات/c1499711730'),
cargo: U('/دبابات-شحن-وتكتوك-للمزارع/c85325564'),
fit: U('/أجهزة-رياضية-ولياقة/c1473413965'),
treadmills: U('/السيور-الكهربائية/c1130992222'),
cardio: U('/الدراجات-الثابتة-وأجهزة-الكارديو/c955842393'),
gym: U('/الهوم-جيم-والبنشات/c490123615'),
weights: U('/الأوزان-والدمبلات/c180690522'),
boxing: U('/الملاكمة/c1688354139'),
acc: U('/إكسسوارات-وأرضيات/c1863569496'),
home: U('/أثاث-منزلي-مكتبي/c99902540'),
office: U('/الأثاث-المكتبي/c1338663500'),
dining: U('/طاولات-وكراسي-الطعام/c428900685'),
decor: U('/الديكور-وأشجار-الزينة/c2112701251'),
outdoor: U('/الملاعب-الخارجية/c481125644'),
football: U('/كرة-القدم-والتدريب/c1119897091'),
gymfloor: U('/أرضيات-الجيم/c780253807'),
gardenAll: U('/swings-trampolines-playground/c46021744'),
floors: U('/الأرضيات/c48135277')
};
// عالم «الرياضة»: الطاولات أولًا (منتجاتنا الأساسية)، وبعدها أقسام الرياضة
var SPORT_ALL = [
{ key: 'outdoor', ids: [481125644], title: 'الملاعب الخارجية', url: C.outdoor },
{ key: 'football', ids: [1119897091], title: 'كرة القدم والتدريب', url: C.football },
{ key: 'boxing', ids: [1688354139], title: 'الملاكمة', url: C.boxing },
{ key: 'gym', ids: [490123615], title: 'الهوم جيم', url: C.gym },
{ key: 'cardio', ids: [1130992222, 955842393], title: 'السيور والدراجات', url: C.treadmills },
{ key: 'weights', ids: [180690522], title: 'الأوزان والدمبلات', url: C.weights },
{ key: 'acc', ids: [1863569496, 780253807], title: 'الأدوات والأرضيات', url: C.acc }
];
// المرحلة 2: اللياقة 4 أقسام داخل «رياضة وألعاب» بعد الطاولات (قرار المالك 04:56، الأسماء بالحرف)
var SPORT = []; // قرار المالك 25 نوفمبر: الرئيسية أقسام رئيسية بس، والفرعية داخل صفحة القسم
window.AK_WORLDS_CONFIG = {
// أرقام الواتساب لكل عالم (المكان الوحيد اللي تتغير منه)
WA: { tables: '966598060796', play: '966598060796', moto: '966567886993' },
imgBase: BASE + '/img',
products: {
// الجولة 7: صف واحد لكل عالم في الرئيسية (طلب تقصير الرئيسية والتحميل أسرع)
moto: [
{ source: 'categories', value: [726194163, 1499711730, 85325564], title: 'سكوترات ودبابات', layout: 'slider', limit: 10, allUrl: C.moto }
],
play: [
{ source: 'categories', value: [1721936584, 1677012877, 427559449], title: 'مراجيح وألعاب حدائق', layout: 'slider', limit: 10, allUrl: C.gardenAll }
],
tables: [
{ source: 'categories', value: [993213184, 529136902, 353917441, 1303174661, 1767250951], title: 'الأكثر طلباً', layout: 'slider', limit: 10, allUrl: C.tables }
]
},
data: {
t_game_urls: [C.billiard, C.q4, C.hockey, C.tennis, C.foos, C.bikes],
t_size7_url: C.billiard, t_size8_url: C.billiard, t_size9_url: C.billiard, t_all_url: C.tables,
t_cats: [
{ title: 'طاولات الألعاب', sub: 'بلياردو · هوكي · تنس طاولة · فرفيرة · 4 في 1', image: IMG + 't_cat_tables.jpg', url: C.tables, photo: true },
{ title: 'اللياقة', sub: 'أجهزة كارديو · الهوم جيم والأوزان · الملاكمة', image: IMG + 't_cat_fit.jpg', url: C.fit, photo: true },
{ title: 'الملاعب وكرة القدم', sub: 'ملاعب خارجية · كرة القدم والتدريب', image: IMG + 't_cat_courts.jpg', url: C.outdoor, photo: true },
{ title: 'الأرضيات', sub: 'أرضيات الجيم · أرضيات الحدائق والملاعب', image: IMG + 't_cat_floor.jpg', url: C.floors, photo: true }
],
p_small_url: C.garden, p_medium_url: C.garden, p_large_url: C.garden, p_all_url: C.garden,
p_cats: [
{ title: 'ألعاب الحدائق', sub: 'مراجيح · ملاعب متكاملة · نطيطات · كراسي توازن', image: 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=1000,format=auto/xKZow/37b1b5df-08e2-4017-bf01-c5236ff4ad7e-1000x1000-LaREp3N4gsdsOKm4SIMjInX6RNYdYPROmAiczzPk.jpg', url: C.gardenAll, photo: true },
{ title: 'ألعاب الروضات والمدارس', sub: 'زحاليق وألعاب آمنة للروضات', image: IMG + 'p_kinder.jpg', url: C.kinder, photo: true },
{ title: 'نطيطات ترامبولين', sub: 'مقاسات من 8 إلى 14 قدم مع الشبك', image: IMG + 'fl/tramp.webp', url: U('/trampolines/c175080959'), photo: true },
{ title: 'ألعاب صغيرة وتوازن', sub: 'كراسي هزازة ودوّارة وكراسي توازن', image: IMG + 'fl/small.webp', url: C.rocking, photo: true },
{ title: 'الأرضيات', sub: 'بلاط مطاطي للحدائق والروضات', image: IMG + 't_cat_floor.jpg', url: C.floors, photo: true }
],
b_bikes_url: C.bikes, b_all_url: C.bikes,
b_cats: [
{ title: 'الدراجات الهوائية', sub: 'للأطفال والشباب والكبار · كل المقاسات', image: IMG + 'b_tri.jpg', url: C.bikes },
{ title: 'دراجات الأطفال', sub: 'من 12 إلى 24 إنش', url: C.bikes },
{ title: 'الدراجات الهوائية', sub: 'للشباب والكبار', url: C.bikes },
{ title: 'الألعاب الصغيرة', sub: 'أنفاق وزحاليق صغيرة', image: IMG + 'b_tunnel.jpg', url: C.kinder },
{ title: 'ألعاب التوازن', sub: 'سيسو وكراسي دوّارة', image: IMG + 'b_seesaw.jpg', url: C.rocking },
{ title: 'السلة والأهداف', sub: 'سلة كرة وأهداف للأطفال', image: IMG + 'b_basket.jpg', url: C.kinder }
],
m_delivery_url: C.scooters, m_daily_url: C.scooters, m_farm_url: C.cargo, m_all_url: C.moto,
m_badge: 'سكوترات كهربائية · دبابات · تكتوك · دراجات هوائية',
m_cats: [
{ title: 'سكوترات كهربائية', sub: 'DASH · VOXER', image: IMG + 'm_cat_scooter.jpg', url: C.scooters, photo: true },
{ title: 'دبابات بنزين', sub: 'VOXER · SWEYD · BOXER', image: IMG + 'm_cat_moto.jpg', url: C.motos, photo: true },
{ title: 'دبابات شحن وتكتوك', sub: 'للمزارع والمقاولات', image: IMG + 'm_cat_cargo.jpg', url: C.cargo, photo: true },
{ title: 'الدراجات الهوائية', sub: 'جبلية · للشباب والكبار', image: IMG + 'm_cat_bikes.jpg', url: C.bikes, photo: true },
{ title: 'دراجات الأطفال', sub: 'مقاس 20 · كوبرا و British Eagle', image: IMG + 'm_cat_kbikes.jpg', url: C.kbikes, photo: true }
],
f_cardio_url: C.treadmills, f_easy_url: C.cardio, f_strength_url: C.gym, f_boxing_url: C.boxing, f_all_url: C.fit,
h_dining_url: C.dining, h_office_url: C.office, h_decor_url: C.decor, h_all_url: C.home,
bundle_url: C.tables,
worlds_on: 'tables,play,moto',
t_tab: 'رياضة وألعاب',
t_products_title: 'طاولات الألعاب'
}
};
window.AK_WORLDS_CONFIG.data.whatsapp = window.AK_WORLDS_CONFIG.WA.tables;
window.AK_WORLDS_CONFIG.data.m_whatsapp = window.AK_WORLDS_CONFIG.WA.moto;
// مقارنة طاولات 4 في 1 (قسم 4 في 1 + صفحات الطاولات الثلاث). أي نص في ak-q4compare.js يتغير من هنا بنفس الاسم: title, lead, common, rows, diff, notes
window.AK_WORLDS_CONFIG.q4cmp = { on: true };
// الجولة 8: ملف واحد ak-bundle.js = المحرك + catflow + light + r7 + q4compare (+ r9 من الجولة 9 + r10 من الجولة 10 + r11 من الجولة 11 + r12 من الجولة 12) (بدل 5 طلبات). المصدر في المستودع، ويتبنى بـ tools/bundle.mjs
try { var akb = document.createElement('script'); akb.src = 'https://cdn.jsdelivr.net/gh/alkasrlwb-hub/alkasser-store-assets@8b9b3151f63b3b79189028f973571869909b2db2/ak-bundle.js'; akb.async = true; (document.head || document.documentElement).appendChild(akb); } catch (e) {}
// مؤقتًا: إخفاء أقسام القائمة غير المعروضة (الطاولات والمراجيح والسكوترات فقط)
var HIDE = ['أثاث منزلي - مكتبي', 'سيارات الأطفال', 'المدونة', 'أجهزة رياضية ولياقة', 'زحاليق', 'طاولات وكراسي الطعام', 'الديكور وأشجار الزينة'];
// نفس الأقسام بالرقم (تشمل الأقسام الفرعية و«عرض الكل») + المدونة
// المرحلة 2 (قرار المالك 04:56): أقسام اللياقة انفتحت داخل «رياضة وألعاب»، فطلعت من قائمة الإخفاء
var HIDEID = /\/c(99902540|1338663500|428900685|2112701251|1640674614|1448847542|1165578940|1945475206|1340798385)(\D|$)|\/blog(\/|$)/;
// الأقسام المخفية لو أحد دخلها برابط مباشر يرجع للرئيسية
try { if (HIDEID.test(decodeURIComponent(location.pathname))) location.replace(pre + '/' + (location.search.indexOf('preview') > -1 ? '?preview=true' : '')); } catch (e) {}
var st = document.createElement('style');
var OFF = ['fit', 'bikes', 'home'];
var css = '@media(max-width:1023.98px){div.but{display:none!important}body.product-single .fixed-btm{bottom:150px!important}body.cart .fixed-btm{bottom:120px!important}}li.language_currency,button.header-btn[onclick*="locali"]{display:none!important}.ak-menu-off{display:none!important}.ak-worlds-root .ak-fam--home{display:none!important}';
for (var k = 0; k < OFF.length; k++) css += '.ak-worlds-root .ak-switch__btn--' + OFF[k] + ',.ak-worlds-root .ak-bar__pill--' + OFF[k] + ',.ak-worlds-root .ak-other--' + OFF[k] + '{display:none!important}';
css += '.ak-worlds-root .ak-products .swiper-wrapper:not(:has(>:nth-child(3))){justify-content:center}' +
'@media(min-width:760px){.ak-worlds-root .ak-products .swiper-wrapper:not(:has(>:nth-child(4))){justify-content:center}}' +
'@media(min-width:1024px){.ak-worlds-root .ak-products .swiper-wrapper:not(:has(>:nth-child(5))){justify-content:center}}' +
// شارة «توصيل 24 ساعة» فوق صور المنتجات تخرب الصورة
'.s-product-card-promotion-title{display:none!important}' +
// صفحات الأقسام بنفس ألوان العالم بدل البيج
'html:has(body.product-index),html body.product-index,html body.product-index .app-inner,html body.product-index main{background:#06101F!important;background-color:#06101F!important;color:#fff}' +
'body.product-index .breadcrumbs,body.product-index .breadcrumbs a,body.product-index .breadcrumbs span{color:#9FB3CF!important}' +
'body.product-index h1{color:#fff!important}' +
'body.product-index .s-product-card-entry{background:linear-gradient(135deg,#0B2350,#06101F)!important;border:1px solid #1D2E52!important;color:#fff!important}' +
'body.product-index .s-product-card-content{background:transparent!important}' +
'body.product-index .s-product-card-content-title a,body.product-index .s-product-card-content-sub,body.product-index .s-product-card-content-title{color:#fff!important}' +
'body.product-index .s-product-card-price,body.product-index .s-product-card-sale-price h4{color:#22D3EE!important}' +
'body.product-index .s-product-card-image{background:#fff}' +
'body.product-index label,body.product-index .s-filters-label,body.product-index p{color:#DCE6F5}' +
'.main-nav-container.top-navbar,.main-nav-container .inner{background:#06101F!important}.main-nav-container.top-navbar{border-bottom:2px solid #22D3EE!important;box-shadow:0 4px 18px rgba(0,0,0,.45)!important}.main-nav-container .inner, .main-nav-container .inner a, .main-nav-container .inner button, .main-nav-container .inner i, .main-nav-container .inner salla-button, .main-nav-container .inner .header-btn{color:#fff!important}.main-nav-container .s-cart-summary-count{background:#22D3EE!important;color:#06101F!important}@media(min-width:1024px){.main-nav-container .inner .main-menu > li > a, .main-nav-container .inner .main-menu > li > a *{color:#E6EEF8!important}.main-nav-container .inner .main-menu > li > a:hover{color:#22D3EE!important}}@media(max-width:1023.98px){.main-nav-container .inner .mobile-menu, .main-nav-container .inner .mobile-menu a, .main-nav-container .inner .mobile-menu i{color:#0E2A47!important}}.main-nav-container .inner .sub-menu, .main-nav-container .inner .sub-menu a{color:#0E2A47!important}' +
'html body .app-inner{background:#06101F!important}footer.store-footer{background:#06101F!important;border-top:3px solid #22D3EE!important;box-shadow:0 -10px 30px rgba(34,211,238,.08)}footer.store-footer .store-footer__inner{background:linear-gradient(180deg,#0B2350,#06101F)!important}footer.store-footer,footer.store-footer p,footer.store-footer div,footer.store-footer span,footer.store-footer li,footer.store-footer a{color:#DCE6F5!important}footer.store-footer h3{color:#fff!important}footer.store-footer a:hover{color:#22D3EE!important}footer.store-footer .copyright-div{border-top:1px solid #1D2E52!important;color:#9FB3CF!important}.ak-tile--all{display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:100%;text-align:center;background:radial-gradient(circle at 50% 30%,rgba(34,211,238,.35),transparent 60%),linear-gradient(160deg,#0B2350,#06101F)!important;border:1px solid #22D3EE!important;box-shadow:0 0 24px rgba(34,211,238,.25) inset;color:#fff!important;text-decoration:none}.ak-tile--all i{font-style:normal;font-size:44px;line-height:1;color:#22D3EE}.ak-tile--all b{font-size:clamp(17px,4.4vw,22px);color:#fff}.ak-tile--all small{font-size:13px;color:#22D3EE;font-weight:700}';
// فحص قبل الإطلاق: الأقسام الفاضية تنخفي، سعر العرض يبان، وصفحات المنتج والسلة والبحث وباقي الصفحات بألوان العالم بدل نص أبيض على بيج
css += 'footer.store-footer .footer-item:has(> salla-contacts),footer.store-footer salla-contacts,footer.store-footer a.logo-footer,footer.store-footer .footer-item > a.flex.items-center{display:none!important}' +
'.fixed-btm{transition:transform .2s ease,opacity .2s ease!important}.fixed-btm.ak-fab-off{opacity:0!important;pointer-events:none!important}' +
'#ak-wbadge{display:flex;align-items:center;gap:8px;width:max-content;max-width:100%;margin:12px 0 4px;padding:6px 12px;border-radius:6px;background:#E11D2E;color:#fff;font-weight:800;font-size:13px;line-height:1.4}#ak-wbadge svg{flex:none}' +
'.ak-empty-off{display:none!important}' +
'html body .ak-worlds-root .ak-worlds .ak-products .s-product-card-sale-price h4{color:var(--ak-price)!important}' +
'body.product-index .s-product-card-content-subtitle{color:#9FB3CF!important;opacity:1!important}' +
'body.product-index .s-product-card-content-title a{-webkit-line-clamp:2!important;font-size:16px!important;line-height:1.5!important;min-height:48px}' +
'html:has(body:not(.index)),html body:not(.index),html body:not(.index) .app-inner,html body:not(.index) #main-content{background:#06101F!important;background-color:#06101F!important}' +
'html body:not(.index) #main-content{color:#DCE6F5!important}' +
'html body:not(.index):not(.product-index) #main-content section:not(.hero-sec) :is(h1,h2,h3,h4,h5,p,span,small,i,label,.section-title,.title){color:inherit!important}' +
'html body:not(.index):not(.product-index) #main-content .s-product-card-entry{color:#0E2A47}' +
'html body:not(.index):not(.product-index) #main-content .s-product-card-entry .s-product-card-sale-price h4{color:#E11D48!important}' +
'html body:not(.index) #main-content .cart-item .title a{color:#fff!important}' +
'html body[class*="blog-"] #main-content a.py-3{color:#DCE6F5!important}' +
'html body:not(.index) #main-content .no-content-placeholder p{color:#DCE6F5!important}html body:not(.index) #main-content .no-content-placeholder .btn--outline-primary{color:#22D3EE!important;border-color:#22D3EE!important}' +
'body.product-single #main-content :is(.s-metadata-box,.s-tabs-content-wrapper){color:#0E2A47}' +
'body.product-single #main-content .s-tabs-content-wrapper{background:#fff;border-radius:16px;padding:10px 8px;margin-top:10px}' +
'html body.product-single:not(.a):not(.b):not(.c) #main-content :is(.price-rate h2,.price-wrapper h2,h2.total-price){color:#22D3EE!important}' +
'body.product-single #main-content .s-tabs-content-wrapper .link--primary{color:#0E7490!important}' +
// بلاطة «كل منتجات الرياضة»: كانت تطلع برا الشاشة في الجوال بسبب نسبة العرض للارتفاع
'.ak-worlds-root .ak-tile--all{aspect-ratio:auto!important;min-width:0!important;min-height:120px!important;height:auto!important}' +
'.ak-worlds-root .ak-tile--all[data-sp]:not([data-sp="span 1"]){flex-direction:row!important;gap:14px!important}' +
// زر «أضف إلى السلة» في صفحة القسم بالجوال كان ينقص نصه
'@media(max-width:640px){body.product-index .s-product-card-entry salla-add-product-button button{padding-inline:6px!important;font-size:13px!important}body.product-index .s-product-card-entry salla-add-product-button .s-button-text{font-size:13px!important;gap:4px}}';
// تكبير صور المنتجات في القوائم عشان الطاولة تبان كبيرة وفخمة
css += '.s-product-card-entry:not([data-aksz]) .s-product-card-image{aspect-ratio:4/3!important;height:auto!important;overflow:hidden!important;background:#fff}.s-product-card-entry:not([data-aksz]) .s-product-card-image img.s-product-card-image-cover{width:100%!important;height:100%!important;object-fit:cover!important;transform:scale(1.05);transform-origin:center 55%;transition:transform .4s ease}.s-product-card-entry:not([data-aksz]):hover .s-product-card-image img.s-product-card-image-cover{transform:scale(1.12)}';
st.textContent = css;
try {
var qw = (location.search.match(/[?&]world=([a-z]+)/) || [])[1];
var sv = localStorage.getItem('ak-world');
if (OFF.indexOf(qw) > -1) history.replaceState(null, '', location.pathname);
if (OFF.indexOf(sv) > -1) localStorage.setItem('ak-world', 'tables');
} catch (e) {}
(document.head || document.documentElement).appendChild(st);
var hideMenu = function () {
try {
var as = document.querySelectorAll('header a, nav a, .main-menu a, .mobile-menu a, footer a, .s-menu a, salla-menu a, .main-menu li > span, .mobile-menu li > span');
for (var i = 0; i < as.length; i++) {
var t = (as[i].textContent || '').replace(/\s+/g, ' ').trim();
var hh = as[i].getAttribute && as[i].getAttribute('href');
var hd = ''; try { hd = hh ? decodeURIComponent(hh) : ''; } catch (e2) { hd = hh || ''; }
if (HIDE.indexOf(t) > -1 || (hd && HIDEID.test(hd))) {
var li = as[i].closest('li') || as[i];
if (li.className.indexOf('ak-menu-off') < 0) li.className += ' ak-menu-off';
}
}
} catch (e) {}
};
// الطاولات اللي كميتها خلصت ما تظهر في المتجر (ترجع لحالها أول ما تتوفر)
var TBL = /طاولة\s*(بلياردو|هوكي|تنس|فرفيرة)/;
// منتجات مخفية من المتجر (طاولتي 4 في 1 القديمة: البني والأسود)
var GONE = /^$/; // 24 نوفمبر: المالك رجّع إظهار AK-101 الأسود والبني (كانت: /\/p(455856464|1821944654)(\D|$)/)
// الأرقام إنجليزية في كل الصفحة
var AD = /[٠-٩۰-۹]/;
var FOOT = 'وجهتك لطاولات الألعاب في السعودية: بلياردو وهوكي وتنس وفرفيرة و4 في 1، مع المراجيح وألعاب الروضات والسكوترات والدراجات الهوائية. نوصّل مجاناً في الرياض وجدة والدمام والقصيم، وباقي المدن كلّمنا على الواتساب قبل الطلب ونتأكد لك من الشحن.';
// اللي يجي من قوقل لصفحة قسم أو منتج: نحفظ عالمه ونخلي الشعار و«الرئيسية» يودونه لنفس العالم
var WRX = [['moto', /سكوتر|دباب|تكتوك|سيكل|سياكل|دراجة هوائية|دراجات هوائية|الدراجات الهوائية|دراجات الأطفال|دراجة جبلية/], ['play', /مراجيح|مرجيحة|نطيط|ترامبولين|ألعاب حدائق|العاب حدائق|روض|زحليق|ألعاب أطفال|العاب اطفال|مدارس/], ['tables', /طاول|بلياردو|هوكي|تنس|فرفيرة|رياض|لياقة|سير|جيم|أوزان|دمبل|ملاكمة|كرة القدم|ملاعب|أرضيات/]];
// مسار الصفحة في سلة ياخذ آخر قسم زاره العميل (مثلاً سير كهربائي يطلع تحت «طاولات بلياردو»)، فقسم المنتج الحقيقي ناخذه من product:category
var akBc = function (bc) {
var m = document.querySelector('meta[property="product:category"]');
if (m && m.content && document.body && document.body.classList.contains('product-single')) return m.content;
return (bc && bc.textContent) || '';
};
var worldSync = function () {
try {
var b = document.body; if (!b || b.classList.contains('index')) return;
if (!(b.classList.contains('product-index') || b.classList.contains('product-single'))) return;
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var tx = akBc(bc) + ' ' + ((document.querySelector('h1') || {}).textContent || '');
var w = null; for (var i = 0; i < WRX.length && !w; i++) if (WRX[i][1].test(tx)) w = WRX[i][0];
if (!w) return;
if (localStorage.getItem('ak-world') !== w) localStorage.setItem('ak-world', w);
var home = '/' + (location.pathname.split('/')[1] === 'alkasser-2023' ? 'alkasser-2023' : '');
var as = document.querySelectorAll('a.navbar-brand, header a[href$="alkasser-2023"], header a[href="/"], .breadcrumbs a');
for (var j = 0; j < as.length; j++) {
var h = as[j].getAttribute('href') || '';
if (/[?&]world=/.test(h)) continue;
var bare = h.replace(/https?:\/\/[^/]+/, '').replace(/\/$/, '');
if (bare === '' || bare === home.replace(/\/$/, '')) as[j].setAttribute('href', (h.replace(/\/$/, '') || '') + '/?world=' + w);
}
} catch (e) {}
};
var catBg = function () {
var bd = document.body;
// صفحة البحث وأخواتها (product-index-search) تاخذ نفس شكل صفحة القسم
if (bd && /(^|\s)product-index-/.test(bd.className) && !bd.classList.contains('product-index')) bd.classList.add('product-index');
if (!document.body || !document.body.classList.contains('product-index')) return;
var els = document.querySelectorAll('main, .app-inner');
var pw0 = document.documentElement.getAttribute('data-akpw'); if (document.documentElement.hasAttribute('data-aklight') || pw0 !== 'moto') { for (var j = 0; j < els.length; j++) els[j].style.removeProperty('background-color'); return; } // الجولة 12: الكحلي الغامق ما ينرسم إلا في السكوترات // الثيم الفاتح (قرار المالك 03:33)
// الجولة 9: صفحات أقسام السكوترات والدراجات فحمي #0D0E10 بدل الكحلي
var mo = document.documentElement.getAttribute('data-akpw') === 'moto', bgc = mo ? '#0D0E10' : '#06101F', bgr = mo ? 'rgb(13, 14, 16)' : 'rgb(6, 16, 31)';
for (var i = 0; i < els.length; i++) if (els[i].style.getPropertyValue('background-color') !== bgr) els[i].style.setProperty('background-color', bgc, 'important');
};
var footTxt = function () {
var d = document.querySelector('footer.store-footer .max-w-sm');
if (d && d.textContent.trim() !== FOOT) d.textContent = FOOT;
};
var digits = function () {
try {
var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = w.nextNode())) {
var v = nd.nodeValue;
if (v && AD.test(v)) {
var p = nd.parentNode && nd.parentNode.nodeName;
if (p === 'SCRIPT' || p === 'STYLE' || p === 'TEXTAREA') continue;
nd.nodeValue = v.replace(/[٠-٩]/g, function (d) { return d.charCodeAt(0) - 0x660; }).replace(/[۰-۹]/g, function (d) { return d.charCodeAt(0) - 0x6F0; }).replace(/٫/g, '.').replace(/٬/g, ',');
}
}
} catch (e) {}
};
var hideOut = function () {
try {
var cards = document.querySelectorAll('.s-product-card-entry, custom-salla-product-card, salla-product-card');
for (var i = 0; i < cards.length; i++) {
var c = cards[i], tx = c.innerText || '';
var lk = c.querySelector('a[href]'), hr = lk ? lk.getAttribute('href') : '';
if ((tx.indexOf('نفدت الكمية') > -1 && TBL.test(tx)) || GONE.test(hr)) {
var box = c.closest('.swiper-slide') || c.closest('custom-salla-product-card') || c.closest('salla-product-card') || c;
if (box.className.indexOf('ak-menu-off') < 0) box.className += ' ak-menu-off';
}
}
var blocks = document.querySelectorAll('.ak-pblock');
for (var b = 0; b < blocks.length; b++) {
var sl = blocks[b].querySelectorAll('.swiper-slide');
var off = blocks[b].querySelectorAll('.swiper-slide.ak-menu-off');
if (sl.length && sl.length === off.length && blocks[b].className.indexOf('ak-menu-off') < 0) blocks[b].className += ' ak-menu-off';
// قسم ما فيه ولا منتج ما يطلع فاضي في الرئيسية (يرجع لحاله أول ما تنضاف له منتجات)
var em = !!blocks[b].querySelector('salla-products-slider.hydrated .swiper-slide') && !blocks[b].querySelector('.s-product-card-entry, custom-salla-product-card, salla-product-card');
if (em !== blocks[b].classList.contains('ak-empty-off')) blocks[b].classList.toggle('ak-empty-off', em);
}
} catch (e) {}
};
var sportTiles = function () {
try {
var root = document.querySelector('.ak-worlds-root .ak-worlds--tables');
if (!root) return;
var hs = root.querySelectorAll('.ak-kh');
var sec = null;
for (var i = 0; i < hs.length; i++) if ((hs[i].textContent || '').indexOf('اختر لعبتك') > -1 || (hs[i].textContent || '').indexOf('اختر قسمك') > -1) sec = hs[i].parentElement;
if (sec) {
var hb = sec.querySelector('.ak-kh h2, .ak-kh h3, .ak-kh b');
if (hb && hb.textContent.indexOf('اختر لعبتك') > -1) hb.textContent = hb.textContent.replace('اختر لعبتك', 'اختر قسمك');
var grid = sec.querySelector('.ak-tiles.ak-sport-tiles');
if (!grid && !SPORT.length) grid = null; else if (!grid) {
grid = document.createElement('div');
grid.className = 'ak-tiles ak-tiles--4 ak-sport-tiles';
grid.style.marginTop = '12px';
for (var k = 0; k < SPORT.length; k++) {
var a = document.createElement('a');
a.href = SPORT[k].url;
a.className = 'ak-tile ak-tile--txt';
a.setAttribute('data-k', SPORT[k].key);
a.innerHTML = '<span class="ak-tile__tx"><b></b></span>';
a.querySelector('b').textContent = SPORT[k].title;
grid.appendChild(a);
}
var all = document.createElement('a');
all.href = C.fit;
all.className = 'ak-tile ak-tile--all';
all.setAttribute('data-k', 'all');
all.innerHTML = '<i>\u2605</i><b>كل الرياضة واللياقة</b><small>تصفّح الكل \u2190</small>';
grid.appendChild(all);
var first = sec.querySelector('.ak-tiles');
if (first) first.parentNode.insertBefore(grid, first.nextSibling);
}
// صورة كل قسم = صورة أول منتج يظهر في سلايدره
var blocks = root.querySelectorAll('.ak-pblock');
for (var b = 0; b < blocks.length; b++) {
var t = (blocks[b].querySelector('.ak-phead b') || {}).textContent || '';
for (var m = 0; m < SPORT.length; m++) if (t === SPORT[m].title) {
var tile = grid.querySelector('[data-k="' + SPORT[m].key + '"]');
var eo = blocks[b].className.indexOf('ak-empty-off') > -1;
if (tile && eo !== tile.classList.contains('ak-empty-off')) tile.classList.toggle('ak-empty-off', eo);
var im = blocks[b].querySelector('.swiper-slide img[src*="cdn.files.salla"], .s-product-card-entry img[src*="cdn.files.salla"]');
if (tile && im && !tile.querySelector('img')) {
var ni = document.createElement('img');
ni.src = im.getAttribute('src'); ni.alt = ''; ni.loading = 'lazy';
tile.insertBefore(ni, tile.firstChild);
tile.className = 'ak-tile ak-tile--cut';
}
}
}
// بلاطة «كل منتجات الرياضة» تكمّل الصف الأخير عشان ما يبقى فراغ
var allT = grid && grid.querySelector('.ak-tile--all');
var cols = allT ? (getComputedStyle(grid).gridTemplateColumns || '').split(' ').length : 0;
var vis = allT ? grid.querySelectorAll('.ak-tile:not(.ak-tile--all):not(.ak-empty-off)').length : 0;
if (allT && cols > 1) { var spn = 'span ' + (cols - (vis % cols)); if (allT.getAttribute('data-sp') !== spn) { allT.setAttribute('data-sp', spn); allT.style.gridColumn = spn; } }
}
} catch (e) {}
};
// صفحة المنتج: صندوق التوصيل. «30 ساعة» والتركيب للطاولات بس، وباقي المنتجات الرياض 2–3 أيام (قرار المالك)
var isTablePage = function () {
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var nm = ((document.querySelector('h1') || {}).textContent || '');
var tx = akBc(bc) + ' ' + nm;
if (/سكوتر|دباب|تكتوك|دراجة|دراجات|سيكل|مرجيح|مراجيح|نطيط|زحليق|ألعاب حدائق|العاب حدائق/.test(tx)) return false;
if (/4 في 1|بلياردو|هوكي|فرفيرة|تنس طاولة/.test(tx)) return true;
if (/طعام|كراسي|مكتب/.test(tx)) return false;
return /طاولات الألعاب|طاولة ألعاب/.test(tx);
};
var akPrice = function () {
// الجولة 11: لو العميل غيّر الخيار، ak-r11.js يحط سعر الحبة الجديد هنا
if (window.__AK_LIVE_PRICE__ > 0) return window.__AK_LIVE_PRICE__;
try {
var ld = document.querySelectorAll('script[type="application/ld+json"]');
for (var q = 0; q < ld.length; q++) { var m = /"price"\s*:\s*"?([0-9.]+)/.exec(ld[q].textContent); if (m) return parseFloat(m[1]); }
var mt = document.querySelector('meta[property="product:price:amount"]'); if (mt) return parseFloat(mt.content);
} catch (e) {}
return 0;
};
var akTx = function () {
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var nm = ((document.querySelector('h1') || {}).textContent || '').replace(/\s+/g, ' ').trim();
return [akBc(bc) + ' ' + nm, nm];
};
// نوع المنتج عشان مربع التوصيل: طاولة / لياقة / ملاعب وأرضيات / مراجيح / سكوترات
var akKind = function () {
var t = akTx(), tx = t[0], nm = t[1];
if (/سكوتر|دباب|تكتوك/.test(tx) && !/هوائية|سيكل|سياكل|جبلية/.test(nm)) return 'moto';
// قسم المنتج أول: منتج في المراجيح أو الروضات (حتى لو اسمه «دراجة هوائية» مثل دراجة الفولاذ 6 مقاعد) ياخذ مربع المراجيح
if (/مرجيح|مراجيح|نطيط|ترامبولين|زحليق|زحاليق|ألعاب حدائق|العاب حدائق|الروض|روضة|رياض الأطفال|المدارس|هزاز|دوار|دوّار|التوازن|توازن/.test(akBc(null))) return 'play';
if (/دراجة هوائية|دراجات هوائية|الدراجات الهوائية|سيكل|سياكل|دراجة جبلية|دراجات الأطفال/.test(tx)) return 'bike';
if (isTablePage()) return 'table';
if (/مرجيح|مراجيح|نطيط|ترامبولين|زحليق|زحاليق|ألعاب حدائق|العاب حدائق|الروض|روضة|المدارس|هزاز/.test(tx)) return 'play';
if (/الملاعب الخارجية|كرة القدم|أرضيات/.test(tx)) return 'court';
if (/السيور|سير كهربائي|سير مشي|كارديو|الدراجات الثابتة|الهوم جيم|البنشات|الأوزان|الدمبلات|الملاكمة|أجهزة رياضية/.test(tx)) return 'fit';
return null;
};
// كهربائي (سكوترات، دبابات شحن كهربائية، تكتوك) = الماطور · بنزين = المكينة
var akMotoType = function () {
var t = akTx(), nm = t[1];
if (/كهربائ|سكوتر|تكتوك/.test(nm)) return 'e';
if (/بنزين|\d\s*cc|سي\s*سي|بوكسر|سويد|زلزال/i.test(t[0])) return 'p';
return /دباب/.test(nm) ? 'p' : 'e';
};
var WBADGE = { e: 'ضمان 6 أشهر على الماطور', p: 'ضمان 6 أشهر على المكينة' };
var WSPEC = { e: '6 أشهر على الماطور، ولا يشمل سوء الاستخدام', p: '6 أشهر على المكينة، ولا يشمل سوء الاستخدام' };
WSPEC.e = 'ضمان ' + WSPEC.e; WSPEC.p = 'ضمان ' + WSPEC.p;
var shipBox = function () {
try {
var b = document.body; if (!b || !b.classList.contains('product-single')) return;
// الجولة 11: المربع يتبني من جديد (في نفس مكانه) لو السعر تغيّر مع الخيار، لأن نصه يعتمد على 500 و1000 و2000
var old = document.getElementById('ak-ship'); if (old && old.getAttribute('data-p') === String(akPrice())) return;
var kind = akKind(); if (!kind) return;
var f = document.querySelector('form.product-form'); if (!f) return;
var an = document.querySelector('salla-installment, .salla-installment') || f;
if (!an.parentNode) return;
var price = akPrice();
// المنتجات غير الطاولات والسكوترات: الشحن المجاني يبدأ من سلة 500، فما نوعد به تحتها
// الجولة 7: المنتجات تحت 500 ياخذون المربع بعد، بس بدون «مجاني» (الشحن المجاني من سلة 500)
var small = (kind === 'fit' || kind === 'court' || kind === 'play' || kind === 'bike') && price < 500;
var row = function (city, txt) { return '<div style="padding:8px 12px;margin-top:8px;border-radius:12px;background:rgba(34,211,238,.10);font-size:14.5px;line-height:1.6"><b style="display:block;color:#22D3EE">' + city + '</b><span style="display:block;font-weight:700">' + txt + '</span></div>'; };
var note = function (txt) { return '<div style="margin-top:10px;font-size:13.5px;line-height:1.6;font-weight:700;color:#FACC15">' + txt + '</div>'; };
var OUT = row('باقي المدن', 'كلّمنا قبل الطلب نتأكد من توفر الشحن');
var RIY = 'توصيل وتركيب مجاني خلال 30 ساعة · الدفع عند الاستلام متاح';
var body = '';
if (kind === 'play') {
body = row('الرياض', 'توصيل مجاني خلال 2–3 أيام · الدفع عند الاستلام متاح · التركيب وموعده نأكده معك بالواتساب') + row('جدة والدمام والخبر والظهران والقصيم', 'توصيل مجاني خلال 3–5 أيام، والتركيب نأكد تفاصيله معك بالواتساب') + OUT;
} else if (kind === 'court') {
body = row('الرياض', 'توصيل مجاني خلال 2–3 أيام · الدفع عند الاستلام متاح') + row('جدة', 'توصيل مجاني خلال 3–5 أيام · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران والقصيم', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('التركيب', 'نأكد تفاصيله معك بالواتساب') + OUT;
} else if (kind === 'moto' || kind === 'fit' || kind === 'bike') {
// غير الطاولات: بدون 30 ساعة وبدون وعد تركيب
// قرار المالك: أجهزة اللياقة اللي سعرها فوق 1000 ريال تركيبها مجاني في الرياض (بدون 30 ساعة)
body = row('الرياض', 'توصيل مجاني خلال 2–3 أيام' + (kind === 'fit' && price > 1000 ? ' · تركيب مجاني' : '') + ' · الدفع عند الاستلام متاح') + row('جدة', 'توصيل مجاني خلال 3–5 أيام · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('القصيم', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + OUT;
if (kind === 'moto') body += note(WSPEC[akMotoType()]);
} else {
if (price >= 2000) {
body = row('الرياض', RIY) + row('جدة', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع أونلاين') + row('القصيم', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع أونلاين') + OUT + note('التركيب المجاني في جدة والدمام والقصيم إذا كانت سلتك 2000 ريال أو أكثر بعد الخصم');
} else {
body = row('الرياض', RIY) + row('جدة', 'توصيل مجاني خلال 3–5 أيام · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('القصيم', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('التركيب في جدة والدمام والقصيم', 'مجاني إذا كانت سلتك 2000 ريال أو أكثر بعد الخصم، وإلا يوصلك بكرتونه أو نركّبه لك بـ150 ريال') + OUT;
}
}
var d = document.createElement('div'); d.id = 'ak-ship'; d.setAttribute('data-kind', kind); d.setAttribute('data-p', String(price));
d.setAttribute('style', 'margin:14px 0 16px;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#0B2350,#06101F);border:2px solid #22D3EE;box-shadow:0 0 22px rgba(34,211,238,.25);color:#fff;text-align:start');
d.innerHTML = '<div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;line-height:1.4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg><span>توصيل <span style="color:#FACC15">مجاني</span> للرياض وجدة والدمام والقصيم</span></div>' + body;
if (small) { d.innerHTML = d.innerHTML.replace(/توصيل مجاني/g, 'توصيل').replace('توصيل <span style="color:#FACC15">مجاني</span> للرياض', 'توصيل للرياض') + note('التوصيل مجاني إذا وصلت سلتك 500 ريال أو أكثر، وأقل من كذا رسومه 30 ريال'); }
if (old) { old.setAttribute('data-kind', kind); old.setAttribute('data-p', String(price)); if (old.innerHTML !== d.innerHTML) old.innerHTML = d.innerHTML; return; }
an.parentNode.insertBefore(d, an);
} catch (e) {}
};
var waNum = function (w) { var W = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.WA) || {}; return W[w] || W.tables; };
var waBtn = function (num, txt, label, sub) {
var a = document.createElement('a');
a.href = 'https://wa.me/' + num + '?text=' + encodeURIComponent(txt);
a.target = '_blank'; a.rel = 'noopener';
a.setAttribute('style', 'display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:13px 16px;border-radius:14px;background:#25D366;color:#fff!important;font-weight:800;font-size:17px;text-decoration:none;box-shadow:0 6px 18px rgba(37,211,102,.35)');
a.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3z"/></svg><span>' + label + '</span>';
var w = document.createElement('div'); w.setAttribute('style', 'margin:0 0 16px'); w.appendChild(a);
if (sub) { var p = document.createElement('div'); p.setAttribute('style', 'margin-top:6px;font-size:13px;text-align:center;opacity:.85'); p.textContent = sub; w.appendChild(p); }
return w;
};
var contactWa = function () {
try {
var b = document.body; if (!b) return;
if (b.classList.contains('product-single') && !document.getElementById('ak-wa')) {
var box = document.getElementById('ak-ship') || document.querySelector('salla-installment, .salla-installment') || document.querySelector('form.product-form'); if (!box || !box.parentNode) return; var afterBox = box.id === 'ak-ship';
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var nm = ((document.querySelector('h1') || {}).textContent || '').replace(/\s+/g, ' ').trim();
var tx = akBc(bc) + ' ' + nm;
var w = null; for (var i = 0; i < WRX.length && !w; i++) if (WRX[i][1].test(tx)) w = WRX[i][0];
var kind = akKind(), link = '\n' + nm + '\n' + location.origin + location.pathname, el;
if (kind === 'play') {
// المراجيح والروضات: الشراء متاح، ونشجع العميل يتأكد من التوفر بالواتساب (غير إجباري)
el = waBtn(waNum('play'), 'السلام عليكم، ودي أتأكد من توفر هذا المنتج:' + link, 'تواصل معنا على الواتساب', '');
var hd = document.createElement('div');
hd.setAttribute('style', 'margin:0 0 10px;font-weight:800;font-size:17px;line-height:1.5;color:#fff;text-align:center');
hd.textContent = 'تواصل معنا للتأكد من توفر المنتج';
el.insertBefore(hd, el.firstChild);
el.setAttribute('style', 'margin:14px 0 16px;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#0B2350,#06101F);border:2px solid #25D366');
var pf = document.querySelector('form.product-form');
if (pf && pf.parentNode) { box = pf; afterBox = true; }
} else if (kind) {
el = waBtn(waNum(kind === 'moto' ? 'moto' : 'tables'), 'السلام عليكم، ودي أتأكد من توفر الشحن لمدينتي لهذا المنتج:' + link + '\nمدينتي: ', 'خارج الرياض وجدة والدمام والقصيم؟ كلّمنا قبل الطلب', 'نتأكد لك من توفر الشحن لمدينتك ونرد عليك بسرعة');
} else {
el = waBtn(waNum(w), 'السلام عليكم، ودي أتأكد من موعد التوصيل لهذا المنتج:' + link + '\nمدينتي: ', 'كلّمنا قبل الطلب ونأكد لك موعد التوصيل', 'رد سريع على الواتساب');
}
el.id = 'ak-wa'; box.parentNode.insertBefore(el, afterBox ? box.nextSibling : box);
}
if (b.classList.contains('cart') && !document.getElementById('ak-wa-cart')) {
var sw = document.querySelector('.cart-submit-wrap'); if (!sw || !sw.parentNode) return;
var cw = 'tables'; try { cw = localStorage.getItem('ak-world') || 'tables'; } catch (e3) {}
var n = document.createElement('div'); n.id = 'ak-wa-cart';
n.setAttribute('style', 'margin:0 0 14px;padding:12px 14px;border-radius:12px;background:#ECFDF5;border:2px solid #25D366;color:#065F46;font-weight:700;font-size:15px;line-height:1.6;text-align:start');
n.textContent = 'قبل ما تكمل الطلب: تواصل معنا عشان نتأكد من موعد التوصيل لمدينتك';
var c = waBtn(waNum(cw), 'السلام عليكم، عندي طلب في السلة وودي أتأكد من موعد التوصيل.\nمدينتي: ', 'تواصل معنا على الواتساب', '');
c.style.margin = '10px 0 0'; n.appendChild(c);
sw.parentNode.insertBefore(n, sw);
}
} catch (e) {}
};
// رقم الواتساب حسب العالم في الزر العائم والفوتر وأي رابط واتساب من الثيم
var curWorld = function () {
var w = null;
try {
var b = document.body;
if (b && (b.classList.contains('product-single') || b.classList.contains('product-index'))) { var tx = akTx()[0]; for (var i = 0; i < WRX.length && !w; i++) if (WRX[i][1].test(tx)) w = WRX[i][0]; }
if (!w) w = localStorage.getItem('ak-world');
} catch (e) {}
return w || 'tables';
};
var waFix = function () {
try {
var num = waNum(curWorld());
var as = document.querySelectorAll('a[href*="wa.me/"], a[href*="whatsapp.com/send"]');
for (var i = 0; i < as.length; i++) {
if (as[i].closest('#ak-ship, #ak-wa, #ak-wa-cart, .ak-worlds-root')) continue;
var h = as[i].getAttribute('href') || '';
var nh = h.replace(/(wa\.me\/)\+?\d*/, '$1' + num).replace(/([?&]phone=)\+?\d*/, '$1' + num);
if (nh !== h) as[i].setAttribute('href', nh);
}
} catch (e) {}
};
// بطاقة «تستاهل شحن مجاني!» في السلة تطلع لكل المدن، فنخفيها
var cartCard = function () {
try {
var b = document.body; if (!b || !b.classList.contains('cart')) return;
var w = document.createTreeWalker(b, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = w.nextNode())) {
if ((nd.nodeValue || '').indexOf('تستاهل شحن مجاني') < 0) continue;
var el = nd.parentElement; if (!el || el.closest('.ak-menu-off')) continue;
var box = el.closest('salla-conditional-offer, [class*="free-shipping"], [class*="free_shipping"], [class*="shipping-bar"], .s-cart-free-shipping') || el.parentElement || el;
if (box === b || box.querySelector('.cart-submit-wrap, .cart-item')) box = el;
box.classList.add('ak-menu-off');
}
} catch (e) {}
};
// فوتر كل العوالم: بدون «تواصل معنا» ولا الشعار ولا «متجر الكاسر لوب للتجارة»، وأي رقم يظهر في عالم السكوترات = رقم السكوترات من الإعدادات
var footFix = function () {
try {
var f = document.querySelector('footer.store-footer'); if (!f) return;
var cr = f.querySelectorAll('.copyright-text a');
for (var i = 0; i < cr.length; i++) if (cr[i].textContent.indexOf('للتجارة') > -1) cr[i].textContent = 'الكاسر لوب';
if (curWorld() !== 'moto') return;
var W = window.AK_WORLDS_CONFIG.WA, mo = W.moto, re = new RegExp('(\\+?966|0)' + W.tables.slice(3), 'g');
var as = f.querySelectorAll('a[href^="tel:"]');
for (var j = 0; j < as.length; j++) if (as[j].getAttribute('href') !== 'tel:+' + mo) as[j].setAttribute('href', 'tel:+' + mo);
var w = document.createTreeWalker(f, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = w.nextNode())) if (re.test(nd.nodeValue)) { re.lastIndex = 0; nd.nodeValue = nd.nodeValue.replace(re, '+' + mo); }
} catch (e) {}
};
// شارة الضمان تحت المعرض بلون العالم + سطر «الضمان» في المواصفات (عرض فقط، الحقل نفسه بيتعدل في مراجعة المحتوى)
var warrantyFix = function () {
try {
var b = document.body; if (!b || !b.classList.contains('product-single')) return;
var kind = akKind(), rows = document.querySelectorAll('.s-metadata-row'), i, k, v;
if (kind !== 'moto') {
for (i = 0; i < rows.length; i++) { k = rows[i].querySelector('.s-metadata-row-name'); if (k && /ضمان/.test(k.textContent) && !rows[i].classList.contains('ak-menu-off')) rows[i].classList.add('ak-menu-off'); }
return;
}
var t = akMotoType();
var rb = document.querySelectorAll('.ribbon');
for (i = 0; i < rb.length; i++) if (/ضمان/.test(rb[i].textContent) && !rb[i].classList.contains('ak-menu-off')) rb[i].classList.add('ak-menu-off');
var sl = document.querySelector('salla-slider.details-slider');
var bd = document.getElementById('ak-wbadge');
if (sl && sl.parentNode && !bd) {
bd = document.createElement('div'); bd.id = 'ak-wbadge';
bd.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg><span></span>';
sl.parentNode.insertBefore(bd, sl.nextSibling);
}
if (bd && bd.lastChild.textContent !== WBADGE[t]) bd.lastChild.textContent = WBADGE[t];
var val = WSPEC[t].replace(/^ضمان /, '');
for (i = 0; i < rows.length; i++) {
k = rows[i].querySelector('.s-metadata-row-name'); v = rows[i].querySelector('.s-metadata-row-value');
if (k && v && /ضمان/.test(k.textContent) && v.textContent.trim() !== val) v.textContent = val;
}
} catch (e) {}
};
// أي «خلال 24 ساعة» معروض عن التوصيل/التركيب يصير 30 ساعة (عرض فقط)
var H24 = /((?:خلال|غضون|توصيل|التوصيل|التركيب|تركيب|نوصل|يوصل)[^.،\n]{0,24}?)24(\s*ساع)/g;
// وفي صفحة منتج مو طاولة (سكوتر، مرجيحة، لياقة، دراجة…) أي «خلال 24/30 ساعة» يصير «خلال 2–3 أيام» (30 ساعة للطاولات بس)
var HNT = /((?:خلال|غضون|توصيل|التوصيل|التركيب|تركيب|نوصل|يوصل)[^.،\n]{0,24}?)(?:24|30)\s*ساعة/g;
var hoursFix = function () {
try {
var bb = document.body, nt = bb && bb.classList.contains('product-single') && akKind() !== 'table';
var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = w.nextNode())) {
var v = nd.nodeValue;
if (!v || (v.indexOf('24') < 0 && !(nt && v.indexOf('30') > -1))) continue;
var p = nd.parentNode && nd.parentNode.nodeName;
if (p === 'SCRIPT' || p === 'STYLE' || p === 'TEXTAREA') continue;
if (nt && !(nd.parentNode.closest && nd.parentNode.closest('#ak-ship'))) { HNT.lastIndex = 0; if (HNT.test(v)) { HNT.lastIndex = 0; nd.nodeValue = v.replace(HNT, '$12–3 أيام'); continue; } }
H24.lastIndex = 0; if (!H24.test(v)) continue;
H24.lastIndex = 0; nd.nodeValue = v.replace(H24, '$130$2');
}
} catch (e) {}
};
// القائمة الجانبية: «رياضة وألعاب» فيها الملاعب الخارجية وكرة القدم وأرضيات الجيم، والملاعب كمان تحت «ألعاب الحدائق» (قرار المالك 05:10)
var SPORT_MENU = ['481125644', '1119897091', '780253807'];
var menuFix = function () {
try {
var ul = document.querySelector('#mobile-menu ul.main-menu'); if (!ul) return;
var gs = ul.querySelectorAll(':scope > li[id="1473413965"]'), sp = null, i;
for (i = 0; i < gs.length; i++) if (gs[i].querySelector(':scope > ul')) sp = gs[i];
var src = null;
if (sp) {
var lab = sp.querySelector(':scope > span');
if (lab && lab.textContent.trim() !== 'رياضة وألعاب') lab.textContent = 'رياضة وألعاب';
if (sp.classList.contains('ak-menu-off')) sp.classList.remove('ak-menu-off');
var sub = sp.querySelector(':scope > ul'), kids = sub.children;
for (i = 0; i < kids.length; i++) { var on = SPORT_MENU.indexOf(kids[i].id) > -1; if (on === kids[i].classList.contains('ak-menu-off')) kids[i].classList.toggle('ak-menu-off', !on); }
var order = []; for (i = 0; i < kids.length; i++) if (SPORT_MENU.indexOf(kids[i].id) > -1) order.push(kids[i].id);
if (order.join() !== SPORT_MENU.join()) for (i = 0; i < SPORT_MENU.length; i++) { var li = sub.querySelector(':scope > li[id="' + SPORT_MENU[i] + '"]'); if (li) sub.appendChild(li); }
src = sub.querySelector(':scope > li[id="481125644"]');
}
var gd = ul.querySelectorAll(':scope > li[id="46021744"]'), gsub = null;
for (i = 0; i < gd.length; i++) if (gd[i].querySelector(':scope > ul')) gsub = gd[i].querySelector(':scope > ul');
if (gsub && src && !gsub.querySelector('[data-ak-clone]')) {
var c = src.cloneNode(true); c.removeAttribute('id'); c.setAttribute('data-ak-clone', '481125644'); c.classList.remove('ak-menu-off');
var fl = gsub.querySelector(':scope > li[id="2020530536"]');
gsub.insertBefore(c, fl ? fl.nextSibling : null);
}
} catch (e) {}
};
// زر الواتساب العائم ما يغطي أي زر: يرتفع لأقرب مكان فاضي، ولو ما فيه يختفي لحظياً
var fabGuard = function () {
try {
var f = document.querySelector('.fixed-btm'); if (!f) return;
if (window.innerWidth >= 1024) { f.style.removeProperty('transform'); f.classList.remove('ak-fab-off'); return; }
var prev = f.style.transform;
f.style.setProperty('transition', 'none', 'important'); f.style.removeProperty('transform');
var r = f.getBoundingClientRect();
f.style.transform = prev; void f.offsetWidth; f.style.removeProperty('transition');
if (!r.width) return;
var hit = function (x, y) {
if (y < 64 || y > window.innerHeight - 2) return true;
if (x < 0 || x > window.innerWidth) return false;
var els = document.elementsFromPoint(x, y);
for (var i = 0; i < els.length; i++) {
var el = els[i]; if (f.contains(el)) continue;
var c = el.closest && el.closest('a,button,[role="button"],input,select,textarea,label,summary,salla-add-product-button,salla-button,salla-quantity-input');
if (c && !f.contains(c)) { var cr = c.getBoundingClientRect(); if (cr.height > 0 && cr.height < 140) return true; }
}
return false;
};
var steps = [0, 64, 128, 192, 256, 320], m = 4;
var clear = function (t) {
for (var gy = 0; gy < 5; gy++) for (var gx = 0; gx < 5; gx++) if (hit(r.left - m + gx * (r.width + 2 * m) / 4, t - m + gy * (r.height + 2 * m) / 4)) return false;
return true;
};
for (var s = 0; s < steps.length; s++) {
if (clear(r.top - steps[s])) {
var tf = steps[s] ? 'translateY(-' + steps[s] + 'px)' : '';
if (f.style.transform !== tf) f.style.transform = tf;
f.classList.remove('ak-fab-off'); return;
}
}
f.classList.add('ak-fab-off');
} catch (e) {}
};
try { var fq = 0, fab = function () { if (fq) return; fq = requestAnimationFrame(function () { fq = 0; fabGuard(); }); }; window.addEventListener('scroll', fab, { passive: true }); window.addEventListener('resize', fab); setInterval(function () { if (window.innerWidth < 1024) fab(); }, 400); } catch (e) {}
var tick = function () { hideMenu(); menuFix(); hideOut(); sportTiles(); digits(); footTxt(); catBg(); worldSync(); shipBox(); contactWa(); waFix(); cartCard(); footFix(); warrantyFix(); hoursFix(); fabGuard(); };
tick();
document.addEventListener('DOMContentLoaded', tick);
var n = 0, iv = setInterval(function () { tick(); if (++n > 60) clearInterval(iv); }, 500);
try { var pend = 0; new MutationObserver(function () { if (pend) return; pend = setTimeout(function () { pend = 0; tick(); }, 400); }).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
// المحرك alkasser-worlds.js صار داخل ak-bundle.js (فوق)
} catch (e) {}
})();
/* فرق المقاسات في بطاقات البلياردو: 9 قدم أكبر، 8 أصغر شوي، 7 أصغر (اقتراح فريق التسويق والتصميم) */
(function(){try{var st=document.createElement('style');st.id='ak-bil-sz';st.textContent=".s-product-card-entry[data-aksz]{--aksz:1}.s-product-card-entry[data-aksz=\"7\"]{--aksz:.78}.s-product-card-entry[data-aksz=\"8\"]{--aksz:.89}.s-product-card-entry[data-aksz=\"9\"]{--aksz:1}.s-product-card-entry[data-aksz] .s-product-card-image{position:relative;aspect-ratio:4/3;height:auto;overflow:hidden;background:var(--ak-pimg,radial-gradient(circle at 50% 40%,#FFFFFF,#DCE6F5 75%));}.s-product-card-entry[data-aksz] .s-product-card-image > a{display:block;width:100%;height:100%;}.s-product-card-entry[data-aksz] .s-product-card-image img.s-product-card-image-cover{display:block;width:100%;height:100%;padding:0;object-fit:cover;object-position:50% 50%;mix-blend-mode:multiply;transform:scale(var(--aksz,1));transform-origin:50% 66%;transition:transform .35s ease;}@media (hover:hover){.s-product-card-entry[data-aksz]:hover .s-product-card-image img.s-product-card-image-cover{transform:scale(calc(var(--aksz,1) * 1.04));}}.ak-szb{position:absolute;inset-block-start:var(--ak-szb-top,8px);inset-inline-start:8px;z-index:2;box-sizing:border-box;display:inline-flex;align-items:center;gap:6px;height:24px;padding-inline:10px;border-radius:999px;white-space:nowrap;unicode-bidi:isolate;font-size:12px;line-height:1;box-shadow:0 2px 8px rgba(6,16,31,.18);pointer-events:none;}.ak-szb b{font-weight:800}.ak-szb i{font-style:normal;font-weight:600;display:inline-flex;align-items:center;gap:6px}.ak-szb i::before{content:\"\";inline-size:4px;block-size:4px;border-radius:50%;background:currentColor;opacity:.6;}.s-product-card-entry[data-aksz=\"7\"] .ak-szb{background:#E0F7FC;color:#06101F;border:1px solid #22D3EE}.s-product-card-entry[data-aksz=\"8\"] .ak-szb{background:#22D3EE;color:#06101F}.s-product-card-entry[data-aksz=\"9\"] .ak-szb{background:linear-gradient(135deg,#0B2350,#1456C8);color:#FFFFFF}.s-product-card-entry:has(.s-product-card-promotion-title) .ak-szb{--ak-szb-top:34px}@media (max-width:759px){.ak-szb{height:22px;font-size:11px;padding-inline:8px;gap:5px}}";(document.head||document.documentElement).appendChild(st);}catch(e){}})();
(function () {
"use strict";
var LABELS = { "7": "للبيوت", "8": "للاستراحات", "9": "مقاس دولي" };
var CARD = ".s-product-card-entry";

/* يحول الأرقام الهندية والفارسية إلى إنجليزية قبل البحث */
function norm(s) {
return String(s || "")
.replace(/[\u0660-\u0669]/g, function (d) { return d.charCodeAt(0) - 1632; })
.replace(/[\u06F0-\u06F9]/g, function (d) { return d.charCodeAt(0) - 1776; });
}

function sizeOf(card) {
var t = card.querySelector(".s-product-card-content-title") || card;
var txt = norm(t.textContent);
if (txt.indexOf("بلياردو") < 0) return null;
var m = txt.match(/(?:^|[^0-9])([789])\s*قدم/);
return m ? m[1] : null;
}

function decorate(card) {
var s = sizeOf(card);
if (!s) return;
if (card.getAttribute("data-aksz") !== s) card.setAttribute("data-aksz", s);

var host = card.querySelector(".s-product-card-image") || card;
var old = host.querySelector(".ak-szb");
if (old) {
if (old.getAttribute("data-s") === s) return;
old.remove();
}
var badge = document.createElement("span");
badge.className = "ak-szb";
badge.setAttribute("dir", "rtl");
badge.setAttribute("data-s", s);
var b = document.createElement("b");
b.textContent = s + " قدم";
var i = document.createElement("i");
i.textContent = LABELS[s];
badge.appendChild(b);
badge.appendChild(i);
host.appendChild(badge);
}

function scan() {
var cards = document.querySelectorAll(CARD);
for (var k = 0; k < cards.length; k++) decorate(cards[k]);
}

var queued = false;
function schedule() {
if (queued) return;
queued = true;
requestAnimationFrame(function () { queued = false; scan(); });
}

function start() {
scan();
new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
else start();
})();
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
// الجولة 9: الدراجات صارت في عالم السكوترات بس (انشالت من قائمة الرياضة)
{ t: 'دراجات هوائية', k: [[778074738, 'دراجات الكبار والشباب'], [1679231858, 'دراجات الأطفال']] },
{ t: 'كل السكوترات والدبابات', c: 1599672881 }
]
};
var LINKS = [['سياسة التوصيل', 'page-1343888314'], ['الاستبدال والاسترجاع', 'page-877714872'], ['من نحن', 'page-1896341707'], ['الاستخدام والخصوصية', 'page-1387788131']];
var pre = location.pathname.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';
// روابط الأقسام كاملة (بدون الاسم سلة ترجع «الرابط غير موجود» 410)
var SLUG = {"46021744":"/swings-trampolines-playground","48135277":"/الأرضيات","85325564":"/دبابات-شحن-وتكتوك-للمزارع","175080959":"/trampolines","180690522":"/الأوزان-والدمبلات","353917441":"/air-hockey-tables","427559449":"/كرسي-هزاز","428244369":"/game-tables","481125644":"/الملاعب-الخارجية","490123615":"/الهوم-جيم-والبنشات","529136902":"/4-in-1-game-table","726194163":"/سكوترات-كهربائية","778074738":"/bicycles","780253807":"/أرضيات-الجيم","955842393":"/الدراجات-الثابتة-وأجهزة-الكارديو","993213184":"/billiard-tables","1119897091":"/كرة-القدم-والتدريب","1130992222":"/السيور-الكهربائية","1160136731":"/كراسي-التوازن","1248444183":"/كرسي-دوار","1303174661":"/table-tennis-tables","1376791097":"/kids-swings","1499711730":"/دبابات","1599672881":"/electric-scooters","1677012877":"/kindergarten-school-play","1679231858":"/kids-bicycles","1688354139":"/الملاكمة","1721936584":"/العاب-حدائق-كبيره-مناسب-للصغار-والكبار","1767250951":"/foosball-tables","1863569496":"/إكسسوارات-وأرضيات","2020530536":"/أرضيات-الحدائق-والملاعب","2055314181":"/التنس-والمضارب"};
var href = function (id) {
var a = document.querySelector('#mobile-menu a[href$="c' + id + '"], .main-menu a[href$="c' + id + '"], footer a[href$="c' + id + '"]');
return a ? a.getAttribute('href') : pre + (SLUG[id] || '') + '/c' + id;
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
+ '#ak-dr .akd-b{flex:1;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--d-line2) transparent;padding-bottom:calc(16px + env(safe-area-inset-bottom))}'
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
+ '#ak-dr .akd-b::-webkit-scrollbar{width:4px}#ak-dr .akd-b::-webkit-scrollbar-thumb{background:var(--d-line2);border-radius:4px}#ak-dr button:focus{outline:none}#ak-dr :focus-visible{outline:2px solid var(--d-acc);outline-offset:2px}'
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
if (w === 'tables') h += '<a class="akd-r" href="' + esc(href(993213184)) + '"><span>وش يناسبك؟ اختر مقاس طاولتك</span></a>';
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
root.innerHTML = '<div class="akd-ov"></div><div class="akd-p" role="dialog" aria-modal="true" aria-label="القائمة"><div class="akd-h">' + logo + '<button type="button" class="akd-x" aria-label="إغلاق القائمة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div><div class="akd-b"><div class="akd-ws">' + ws + '</div><a class="akd-open" href="#"></a><div class="akd-c"></div></div></div>';
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
// المرحلة 2 (2.9 + 2.10): شرائح الأقسام الفرعية أعلى صفحة القسم + فلتر المقاس (البلياردو) والاستخدام (السكوترات)
var curId = (/c(\d+)(?:\D|$)/.exec(here) || [])[1];
var chipGroup = function () {
if (!curId) return null;
var id = +curId, order = [world()].concat(['tables', 'play', 'moto'].filter(function (x) { return x !== world(); }));
for (var o = 0; o < order.length; o++) {
var L = M[order[o]], singles = [];
for (var i = 0; i < L.length; i++) {
var g = L[i];
if (g.c) { singles.push([g.c, g.t]); continue; }
var hit = g.all && g.all[0] === id;
for (var j = 0; j < g.k.length && !hit; j++) if (g.k[j][0] === id) hit = true;
if (hit) { var r = g.all ? [[g.all[0], 'الكل']] : []; return { w: order[o], k: r.concat(g.k) }; }
}
for (var s = 0; s < singles.length; s++) if (singles[s][0] === id && singles.length > 1) return { w: order[o], k: singles };
}
return null;
};
var FILT = {
993213184: { t: 'المقاس', k: [['', 'الكل'], ['7', '7 قدم'], ['8', '8 قدم'], ['9', '9 قدم']], f: function (c, v) { return c.getAttribute('data-aksz') === v; } },
726194163: { t: 'الاستخدام', k: [['', 'الكل'], ['d', 'للتوصيل'], ['p', 'للمشاوير اليومية']], f: function (c, v) { var d = /توصيل|شنطة|صندوق/.test((c.querySelector('.s-product-card-content-title') || c).textContent); return v === 'd' ? d : !d; } }
};
var fval = '';
var CHCSS = '.ak-chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px 0 14px;margin:0;-webkit-overflow-scrolling:touch}.ak-chips::-webkit-scrollbar{display:none}'
+ '.ak-chip{flex:none;display:inline-flex;align-items:center;height:36px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:700;white-space:nowrap;text-decoration:none!important;background:var(--c-card);border:1px solid var(--c-line2);color:#fff!important;cursor:pointer;font-family:inherit}'
+ '.ak-chip.is-on{background:var(--c-acc);border-color:var(--c-acc);color:var(--c-on)!important}'
+ '.ak-chips--f .ak-chip{height:32px;font-size:13px;padding:0 12px}.ak-chips--f b{flex:none;align-self:center;font-size:13px;font-weight:700;color:var(--c-sub);margin-inline-end:2px}'
+ '.ak-fhide{display:none!important}i.sicon-barcode{display:none!important}';
var chips = function () {
try {
if (!document.getElementById('ak-chips-css') && document.head) { var st = document.createElement('style'); st.id = 'ak-chips-css'; st.textContent = CHCSS; document.head.appendChild(st); }
modelRow();
var b = document.body; if (!b || !b.classList.contains('product-index') || !curId) return;
var t = document.getElementById('page-main-title'); if (!t) return;
var row = t.parentNode;
var grp = chipGroup(), F = FILT[curId];
if (grp && !document.getElementById('ak-chips')) {
var v = W[grp.w].v, h = '';
for (var i = 0; i < grp.k.length; i++) h += '<a class="ak-chip' + (String(grp.k[i][0]) === curId ? ' is-on' : '') + '" href="' + esc(href(grp.k[i][0])) + '">' + esc(grp.k[i][1]) + '</a>';
var d = document.createElement('nav'); d.id = 'ak-chips'; d.className = 'ak-chips'; d.setAttribute('aria-label', 'الأقسام');
d.style.cssText = '--c-card:' + v[1] + ';--c-line2:' + v[3] + ';--c-acc:' + v[6] + ';--c-on:' + v[7] + ';--c-sub:' + v[5];
d.innerHTML = h; row.parentNode.insertBefore(d, row.nextSibling);
var on = d.querySelector('.is-on'); if (on && on.scrollIntoView) d.scrollLeft = on.offsetLeft - d.clientWidth / 2;
}
if (F && !document.getElementById('ak-filt')) {
var w2 = W[(grp && grp.w) || world()].v, fh = '<b>' + F.t + ':</b>';
for (var k = 0; k < F.k.length; k++) fh += '<button type="button" class="ak-chip' + (F.k[k][0] === fval ? ' is-on' : '') + '" data-v="' + F.k[k][0] + '">' + F.k[k][1] + '</button>';
var fd = document.createElement('div'); fd.id = 'ak-filt'; fd.className = 'ak-chips ak-chips--f';
fd.style.cssText = '--c-card:' + w2[1] + ';--c-line2:' + w2[3] + ';--c-acc:' + w2[6] + ';--c-on:' + w2[7] + ';--c-sub:' + w2[5];
fd.innerHTML = fh;
var after = document.getElementById('ak-chips') || row; after.parentNode.insertBefore(fd, after.nextSibling);
fd.addEventListener('click', function (e) { var bt = e.target.closest('button[data-v]'); if (!bt) return; fval = bt.getAttribute('data-v'); var all = fd.querySelectorAll('button'); for (var q = 0; q < all.length; q++) all[q].classList.toggle('is-on', all[q] === bt); applyF(); });
}
applyF();
} catch (e) {}
};
// «رقم الموديل» اللي قيمته اسم مورد/منافس (باناصر، صقر) ما يطلع للعميل (قاعدة المالك: أسماء المنافسين في كلمات SEO بس)
var modelRow = function () {
try {
var ic = document.querySelectorAll('i.sicon-barcode');
for (var i = 0; i < ic.length; i++) {
var r = ic[i].parentNode && ic[i].parentNode.parentNode; if (!r || r.getAttribute('data-akm')) continue;
r.setAttribute('data-akm', '1');
if (/banasser|saqr|باناصر|صقر/i.test(r.textContent)) r.style.setProperty('display', 'none', 'important');
}
} catch (e) {}
};
var applyF = function () {
var F = FILT[curId]; if (!F) return;
var cs = document.querySelectorAll('salla-products-list .s-product-card-entry');
for (var i = 0; i < cs.length; i++) {
var box = cs[i].closest('custom-salla-product-card, salla-product-card') || cs[i];
var hide = !!fval && !F.f(cs[i], fval);
if (hide !== box.classList.contains('ak-fhide')) box.classList.toggle('ak-fhide', hide);
}
};
var fixTitle = function () {
var t = document.title; if (t.indexOf('متجر الكاسر لوب للتجارة') < 0) return;
var n = t.indexOf('ALKASSER LOOB') > -1 ? t.replace(/\s*\|\s*متجر الكاسر لوب للتجارة/g, '') : t.replace(/متجر الكاسر لوب للتجارة/g, 'ALKASSER LOOB');
if (n !== t) document.title = n;
};
var cq = 0, csched = function () { if (cq) return; cq = setTimeout(function () { cq = 0; chips(); fixTitle(); }, 250); };
var cgo = function () { chips(); fixTitle(); try { new MutationObserver(csched).observe(document.body, { childList: true, subtree: true }); new MutationObserver(fixTitle).observe(document.querySelector('title') || document.head, { childList: true, characterData: true, subtree: true }); } catch (e) {} };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cgo); else cgo();
// المرحلة 2 (2.6): قائمة الكمبيوتر بالهيدر = العوالم الثلاثة بنفس ترتيب وأقسام القائمة الجانبية (بدل قائمة سلة القديمة). قائمة سلة نفسها باقية للجوال لأن القائمة الجانبية تاخذ روابطها منها
var DNCSS = '#ak-dn{display:none;align-items:stretch;gap:4px;margin-inline-start:20px;height:100%;font-family:inherit}'
+ '#ak-dn .akn-i{position:relative;display:flex;align-items:center}'
+ '#ak-dn .akn-t{display:flex;align-items:center;gap:6px;height:40px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:800;color:#fff!important;text-decoration:none!important;white-space:nowrap;border:1px solid transparent}'
+ '#ak-dn .akn-t svg{opacity:.7;transition:transform .2s}#ak-dn .akn-i:hover .akn-t svg,#ak-dn .akn-i:focus-within .akn-t svg{transform:rotate(180deg)}'
+ '#ak-dn .akn-i.is-on .akn-t{border-color:var(--n-acc);color:var(--n-acc)!important}'
+ '#ak-dn .akn-p{position:absolute;top:100%;inset-inline-start:0;z-index:60;min-width:260px;padding:16px;border-radius:16px;background:var(--n-card);border:1px solid var(--n-line2);box-shadow:0 18px 40px rgba(0,0,0,.45);display:grid;gap:14px 22px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .15s,transform .15s,visibility .15s}'
+ '#ak-dn .akn-i:hover .akn-p,#ak-dn .akn-i:focus-within .akn-p{opacity:1;visibility:visible;transform:none}'
+ '#ak-dn .akn-p.c2{grid-template-columns:repeat(2,minmax(180px,1fr))}#ak-dn .akn-p.c3{grid-template-columns:repeat(3,minmax(170px,1fr))}'
+ '#ak-dn .akn-g{display:flex;flex-direction:column;gap:2px;min-width:0}'
+ '#ak-dn .akn-h{display:block;font-size:14px;font-weight:800;color:#fff!important;text-decoration:none!important;padding:4px 0}#ak-dn a.akn-h:hover{color:var(--n-acc)!important}'
+ '#ak-dn .akn-s{display:block;font-size:13.5px;font-weight:600;color:var(--n-ink2)!important;text-decoration:none!important;padding:5px 0}#ak-dn .akn-s:hover,#ak-dn .akn-s.cur,#ak-dn .akn-h.cur{color:var(--n-acc)!important}'
+ '#ak-dn .akn-all{grid-column:1/-1;border-top:1px solid var(--n-line2);padding-top:10px;font-size:13.5px;font-weight:800;color:var(--n-acc)!important;text-decoration:none!important}'
+ '#ak-dn :focus-visible{outline:2px solid var(--n-acc);outline-offset:2px}'
+ '@media(min-width:1024px){custom-main-menu .main-menu>li{display:none!important}#ak-dn{display:flex}}';
var ALLW = { tables: 'tables', play: 46021744, moto: 1599672881 };
var dnav = function () {
try {
if (document.getElementById('ak-dn')) return;
var mm = document.querySelector('custom-main-menu'); if (!mm || !mm.parentNode) return;
if (!document.getElementById('ak-dn-css')) { var st = document.createElement('style'); st.id = 'ak-dn-css'; st.textContent = DNCSS; document.head.appendChild(st); }
var cw = world(), h = '', order = ['tables', 'play', 'moto'];
var CH = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
for (var o = 0; o < order.length; o++) {
var w = order[o], L = M[w], v = W[w].v, g, p = '';
for (var i = 0; i < L.length; i++) {
g = L[i];
if (g.c) { if (g.c === ALLW[w]) continue; p += '<div class="akn-g"><a class="akn-h' + (isCur(g.c) ? ' cur' : '') + '" href="' + esc(href(g.c)) + '">' + esc(g.t) + '</a></div>'; continue; }
p += '<div class="akn-g">' + (g.all ? '<a class="akn-h' + (isCur(g.all[0]) ? ' cur' : '') + '" href="' + esc(href(g.all[0])) + '">' + esc(g.t) + '</a>' : '<span class="akn-h">' + esc(g.t) + '</span>');
for (var j = 0; j < g.k.length; j++) p += '<a class="akn-s' + (isCur(g.k[j][0]) ? ' cur' : '') + '" href="' + esc(href(g.k[j][0])) + '">' + esc(g.k[j][1]) + '</a>';
p += '</div>';
}
var allHref = ALLW[w] === 'tables' ? pre + '/?world=tables' : href(ALLW[w]);
p += '<a class="akn-all" href="' + esc(allHref) + '">' + (w === 'tables' ? 'رئيسية رياضة وألعاب' : 'كل ' + esc(W[w].name)) + '</a>';
h += '<div class="akn-i' + (w === cw ? ' is-on' : '') + '" style="--n-acc:' + v[6] + ';--n-card:' + v[1] + ';--n-line2:' + v[3] + ';--n-ink2:' + v[4] + '">'
+ '<a class="akn-t" href="' + esc(pre + '/?world=' + w) + '" aria-haspopup="true">' + esc(W[w].name) + CH + '</a>'
+ '<div class="akn-p ' + (L.length > 5 ? 'c3' : 'c2') + '">' + p + '</div></div>';
}
var nv = document.createElement('nav'); nv.id = 'ak-dn'; nv.setAttribute('aria-label', 'الأقسام'); nv.innerHTML = h;
mm.parentNode.insertBefore(nv, mm.nextSibling);
} catch (e) {}
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dnav); else dnav();
// «سيكل/سياكل» تظهر «دراجة/دراجات هوائية» (قاعدة المالك) – عرض فقط، والأوصاف نفسها لمراجعة 24 ديسمبر
var SR = [[/سيكل ثابت/g, 'دراجة ثابتة'], [/السياكل/g, 'الدراجات الهوائية'], [/سياكل/g, 'دراجات هوائية'], [/السيكل/g, 'الدراجة الهوائية'], [/سيكل/g, 'دراجة هوائية'], [/اضغط علي الصورة/g, 'اضغط على الصورة']];
var bikeTxt = function () {
try {
var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = tw.nextNode())) {
var v = nd.nodeValue; if (!v || (v.indexOf('سيكل') < 0 && v.indexOf('سياكل') < 0 && v.indexOf('علي الصورة') < 0)) continue;
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
/* الجولة 5: زر الواتساب العائم (.fixed-btm) يختفي على الجوال لما مربع التوصيل #ak-ship ظاهر في الشاشة، عشان ما يغطي نصه (المربع فيه زر واتساب خاص) */
(function () {
try {
if (window.__AK_WAHIDE__) return; window.__AK_WAHIDE__ = 1;
var st = document.createElement('style');
st.textContent = '.fixed-btm{transition:opacity .2s}@media (max-width:1023px){html[data-ak-ship] .fixed-btm{opacity:0!important;visibility:hidden!important;pointer-events:none!important}}.details-slider .swiper:has(.ribbon) .discount{display:none!important}';
(document.head || document.documentElement).appendChild(st);
var mo = null, hook = function () {
var s = document.getElementById('ak-ship'); if (!s || s.__akIO || !window.IntersectionObserver) return;
s.__akIO = 1;
new IntersectionObserver(function (es) { if (es[0].isIntersecting) document.documentElement.setAttribute('data-ak-ship', '1'); else document.documentElement.removeAttribute('data-ak-ship'); }).observe(s);
};
var go = function () { hook(); try { mo = new MutationObserver(function () { hook(); var s = document.getElementById('ak-ship'); if (s && s.__akIO && mo) { mo.disconnect(); mo = null; } }); mo.observe(document.body, { childList: true, subtree: true }); setTimeout(function () { if (mo) { mo.disconnect(); mo = null; } }, 20000); } catch (e) {} };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
} catch (e) {}
})();
/* الجولة 6: ألوان العالم في صفحة المنتج وصفحات الأقسام (store-fix-plan §8-ب-1 و5) + معرض 1:1 + حجم السعر + مسافة الزر العائم + زر السلة بلون العالم */
(function () {
try {
if (window.__AK_PW__) return; window.__AK_PW__ = 1;
// [الخلفية، البطاقة، سطح ثاني، الخط، نص ثانوي، باهت، التمييز، نص على التمييز، السعر، rgb التمييز، نهاية خلفية الصورة، الهيدر]
var P = {
tables: ['#06101F', '#0B1630', '#0F1D3A', '#1D2E52', '#C5D3EC', '#8FA3C8', '#22D3EE', '#06101F', '#22D3EE', '34,211,238', '#DCE6F5', '#081530'],
play: ['#0B2620', '#0F2F27', '#133830', '#1E4A3E', '#CFE3D9', '#8DB5A4', '#F2C94C', '#1F1A05', '#F2C94C', '242,201,76', '#E6EFE9', '#092019'],
moto: ['#0D0E10', '#15161A', '#1C1D22', '#2A2C31', '#D0D3D9', '#9A9FA8', '#E11D2E', '#FFFFFF', '#FF5A66', '225,29,46', '#E6E7EA', '#121316']
};
var K = ['bg', 'card', 'card2', 'line', 'ink2', 'sub', 'acc', 'on', 'price', 'rgb', 'pimg', 'bar'];
var world = function () {
var b = document.body; if (!b) return null;
var one = b.classList.contains('product-single'), idx = b.classList.contains('product-index');
// الجولة 9: السلة تاخذ ألوان السكوترات لو العميل جاي من عالم السكوترات (العالمين الفاتحين يمشون من ak-light)
if (b.classList.contains('cart')) { var cw = ''; try { cw = localStorage.getItem('ak-world') || ''; } catch (e) {} return cw === 'moto' ? 'moto' : null; }
if (!one && !idx) return null;
var m = document.querySelector('meta[property="product:category"]');
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var h1 = ((document.querySelector('h1') || {}).textContent || '').replace(/\s+/g, ' ');
var cat = (one && m && m.content) ? m.content : ((bc && bc.textContent) || '');
var tx = cat + ' ' + h1;
// الجولة 9: الدراجات الهوائية ودراجات الأطفال في عالم السكوترات (الدراجات الثابتة حق اللياقة ما تدخل)
if (/سكوتر|دباب|تكتوك|دراج(ة|ات) هوائي|الدراجات الهوائية|دراجات الأطفال|دراجات الكبار|سيكل|سياكل/.test(tx) && !/ثابت/.test(tx)) return 'moto';
if (/4 في 1|بلياردو|هوكي|فرفيرة|تنس طاولة|تنس الطاولة|طاولة ألعاب|طاولات الألعاب/.test(tx)) return 'tables';
if (/مرجيح|مراجيح|أرجوحة|نطيط|نطاطة|ترامبولين|زحليق|زحاليق|حدائق|روض|رياض الأطفال|المدارس|هزاز|توازن|دوار|ملاعب متكاملة/.test(tx)) return 'play';
if (/ملاعب|أرضيات|الأرضيات/.test(tx)) { var sv = ''; try { sv = localStorage.getItem('ak-world') || ''; } catch (e) {} return sv === 'play' ? 'play' : 'tables'; }
return 'tables';
};
var V = 'html[data-akpw]';
var css =
// المرحلة 3: شرائح الأقسام الفرعية بلون العالم بدل المربعات البيضاء
V + ' body #main-content salla-slider.sub-categories .text-parent{background:var(--akp-card)!important;border:1px solid var(--akp-line)!important;box-shadow:none!important}' + V + ' body #main-content salla-slider.sub-categories .sub-category-item{border-color:var(--akp-line)!important}' + V + ' body #main-content salla-slider.sub-categories .title{color:#fff!important}' +
// الشريط الترويجي (مثل «توصيل 30 ساعة بالرياض» و«خصم 40 ريال») وشارة الخصم بلون العالم
V + ' .details-slider .ribbon,' + V + ' .details-slider .discount{background:var(--akp-acc)!important;color:var(--akp-on)!important;border:0!important;font-weight:800!important}' +
V + ' .details-slider .ribbon *{color:var(--akp-on)!important;background-color:var(--akp-acc)!important}' +
V + ' .details-slider .ribbon::before{border-top-color:var(--akp-acc)!important}' + V + ' .details-slider .ribbon::after{border-bottom-color:var(--akp-acc)!important}' +
// المعرض: إطار 1:1 بخلفية فاتحة بدون أشرطة كحلية فوق وتحت الصورة
V + ' body.product-single .details-slider .s-slider-container:not(.s-slider-thumbs-container){background:radial-gradient(circle at 50% 45%,#FFFFFF 0%,var(--akp-pimg) 75%)!important;border:1px solid var(--akp-line)!important;border-radius:16px!important;overflow:hidden!important}' +
V + ' body.product-single .details-slider .s-slider-container:not(.s-slider-thumbs-container) .swiper-wrapper{background:transparent!important;height:auto!important}' +
V + ' body.product-single .details-slider .s-slider-container:not(.s-slider-thumbs-container) .swiper-slide{background:radial-gradient(circle at 50% 45%,#FFFFFF 0%,var(--akp-pimg) 75%)!important;height:auto!important;aspect-ratio:1/1!important;display:flex!important;align-items:center!important;justify-content:center!important}' +
V + ' body.product-single .details-slider .s-slider-container:not(.s-slider-thumbs-container) .swiper-slide img{width:100%!important;height:100%!important;object-fit:contain!important;padding:4%!important;background:transparent!important;mix-blend-mode:multiply}' +
V + ' body.product-single .details-slider .s-slider-thumbs-container,' + V + ' body.product-single .details-slider .s-slider-thumbs .swiper-wrapper{background:transparent!important}' +
V + ' body.product-single .details-slider .s-slider-thumbs .swiper-slide img{mix-blend-mode:multiply}' +
// وسوم المنتج تحت المعرض
V + ' body.product-single .product-tags a{border-color:rgba(var(--akp-rgb),.55)!important;color:var(--akp-price)!important;background:transparent!important}' +
V + ' body.product-single .details-slider .s-slider-thumbs .swiper-slide{background:radial-gradient(circle,#FFFFFF 0%,var(--akp-pimg) 80%)!important;border-radius:10px!important;border:2px solid transparent!important;overflow:hidden!important}' +
V + ' body.product-single .details-slider .s-slider-thumbs .swiper-slide-thumb-active{border-color:var(--akp-acc)!important}' +
// الزر العائم (يسار الشاشة على الجوال) ما يغطي آخر مصغّرة
'@media(max-width:1023.98px){' + V + ' body.product-single .details-slider .s-slider-thumbs{padding-inline-end:64px!important}}' +
// السعر 26px جوال و30px كمبيوتر بلون سعر العالم
V + ' body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .sticky-product-bar :is(.price-wrapper h2,h2.total-price,div.total-price h2),html[data-akpw] body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .price-rate h2,html[data-akpw] body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .price-rate .with-disc h4{font-size:26px!important;line-height:1.3!important;font-weight:800!important;color:var(--akp-price)!important;font-variant-numeric:tabular-nums}' +
'@media(min-width:1024px){' + V + ' body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .sticky-product-bar :is(.price-wrapper h2,h2.total-price,div.total-price h2),html[data-akpw] body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .price-rate h2,html[data-akpw] body.product-single:not(.a):not(.b):not(.c):not(.d) #main-content .price-rate .with-disc h4{font-size:30px!important}}' +
V + ' body.product-single #main-content .price-rate .with-disc .line-through{font-size:15px!important;color:var(--akp-sub)!important}' +
// مربع التوصيل وزر الواتساب حقه بلون العالم
V + ' #ak-ship{border:1px solid var(--akp-line)!important;border-inline-start:4px solid var(--akp-acc)!important;box-shadow:none!important;background:var(--akp-card2)!important}' +
V + ' #ak-ship svg{stroke:var(--akp-acc)!important}' +
V + ' #ak-ship div[style*="34,211,238"]{background:rgba(var(--akp-rgb),.10)!important}' +
V + ' #ak-ship div[style*="34,211,238"] b{color:var(--akp-price)!important}' +
V + ' #ak-ship [style*="FACC15"]{color:var(--akp-price)!important}' +
V + ' #ak-wa a,' + V + ' #ak-wa-cart a{background:var(--akp-acc)!important;box-shadow:0 6px 18px rgba(var(--akp-rgb),.30)!important}' +
V + ' #ak-wa a svg,' + V + ' #ak-wa-cart a svg{fill:var(--akp-on)!important}' +
V + ' #ak-wa[style*="25D366"]{border-color:var(--akp-acc)!important;background:var(--akp-card2)!important}' +
V + ' #ak-wbadge{background:var(--akp-acc)!important;color:var(--akp-on)!important}' +
// زر «أضف إلى السلة» في البطاقات (كان أصفر) بلون تمييز العالم
V + ' .s-product-card-entry .s-button-btn{background:var(--akp-acc)!important;border-color:var(--akp-acc)!important;color:var(--akp-on)!important}' +
V + ' .s-product-card-entry .s-button-btn *{color:var(--akp-on)!important}' +
V + ' .s-product-card-entry :is(.s-product-card-price,.s-product-card-sale-price) .sicon-sar{color:inherit!important}' +
// صفحة القسم: نشيل الفراغ الكبير تحت البطاقات (min-h-screen من الثيم)
V + ' body.product-index #main-content div.flex.min-h-screen{min-height:0!important}' +
// عالم المراجيح والسكوترات: خلفية الصفحة والبطاقات والهيدر والفوتر من ألوان العالم
'html[data-akpw="play"],html[data-akpw="moto"]{background:var(--akp-bg)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) body:not(.index):not(.a),:is(html[data-akpw="play"],html[data-akpw="moto"]) body:not(.index) :is(.app-inner,#main-content){background:var(--akp-bg)!important;background-color:var(--akp-bg)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) .main-nav-container.top-navbar,:is(html[data-akpw="play"],html[data-akpw="moto"]) .main-nav-container .inner{background:var(--akp-bar)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) .main-nav-container.top-navbar{border-bottom-color:var(--akp-acc)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) .main-nav-container .s-cart-summary-count{background:var(--akp-acc)!important;color:var(--akp-on)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) footer.store-footer{background:var(--akp-bar)!important;border-top-color:var(--akp-acc)!important;box-shadow:none!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) footer.store-footer .store-footer__inner{background:var(--akp-bar)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) footer.store-footer a:hover{color:var(--akp-price)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) body.product-index .s-product-card-entry{background:var(--akp-card)!important;border:1px solid var(--akp-line)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) body.product-index :is(.s-product-card-price,.s-product-card-sale-price h4){color:var(--akp-price)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) body.product-index .s-product-card-content-subtitle,:is(html[data-akpw="play"],html[data-akpw="moto"]) body.product-index .breadcrumbs :is(a,span){color:var(--akp-sub)!important}' +
':is(html[data-akpw="play"],html[data-akpw="moto"]) body:not(.index) #main-content .s-product-card-entry .s-product-card-sale-price h4{color:var(--akp-price)!important}';
var st = document.createElement('style'); st.id = 'ak-pw'; st.textContent = css;
(document.head || document.documentElement).appendChild(st);
var paint = function () {
var w = world(); if (!w) return;
var r = document.documentElement;
if (r.getAttribute('data-akpw') !== w) {
r.setAttribute('data-akpw', w);
for (var i = 0; i < K.length; i++) r.style.setProperty('--akp-' + K[i], P[w][i]);
}
// نص زر الواتساب مكتوب inline بـ!important، فنغيّره هنا بلون النص على التمييز
var as = document.querySelectorAll('#ak-wa a, #ak-wa-cart a');
for (var j = 0; j < as.length; j++) if (as[j].style.getPropertyValue('color') !== P[w][7]) as[j].style.setProperty('color', P[w][7], 'important');
};
// الجولة 12: الرياضة والمراجيح فاتحين من أول رسمة (قبل ما توصل الحزمة). ينطبق بس لين ak-light يحط data-aklight
var LP = ':is(html[data-akpw="tables"],html[data-akpw="play"]):not([data-aklight]):not(#ak-lp)', LB = LP + ' body:not(#ak-lp2)';
var lst = document.createElement('style'); lst.id = 'ak-lp';
lst.textContent = 'html[data-akpw="tables"]{--akl-bg:#F4F7FB;--akl-s2:#EEF3F9;--akl-fg:#0B1A33;--akl-ink:#24375A;--akl-sub:#55667F;--akl-line:#E1E8F2;--akl-link:#0E7490}' +
'html[data-akpw="play"]{--akl-bg:#FFFBF2;--akl-s2:#FFF6E0;--akl-fg:#0B2620;--akl-ink:#1E4A3E;--akl-sub:#5B7468;--akl-line:#EFE6D2;--akl-link:#0B2620}' +
LP + ',' + LB + ',' + LB + ' .app-inner,' + LB + ' main,' + LB + ' #main-content{background:var(--akl-bg)!important;background-color:var(--akl-bg)!important;color:var(--akl-fg)!important}' +
LB + ' #main-content :is(h1,h2,h3,h4,h5,.section-title,.title){color:var(--akl-fg)!important}' +
LB + ' #main-content :is(p,label,li,small,.s-filters-label){color:var(--akl-ink)!important}' +
LB + ' .breadcrumbs,' + LB + ' .breadcrumbs :is(a,span,i){color:var(--akl-sub)!important}' +
LB + ' .main-nav-container.top-navbar,' + LB + ' .main-nav-container .inner,' + LB + ' .navbar-details{background:#FFFFFF!important;background-image:none!important}' +
LB + ' .main-nav-container .inner :is(a,button,i,svg,.header-btn){color:var(--akl-fg)!important;fill:currentColor}' +
LB + ' #main-content .s-product-card-entry{background:#FFFFFF!important;background-image:none!important;border:1px solid var(--akl-line)!important;color:var(--akl-fg)!important}' +
LB + ' #main-content .s-product-card-entry :is(.s-product-card-content-title,.s-product-card-content-title a){color:var(--akl-fg)!important}' +
LB + ' #main-content .s-product-card-entry .s-product-card-content-subtitle{color:var(--akl-sub)!important}' +
LB + ' #main-content :is(.s-product-card-price,.s-product-card-sale-price h4,.price-rate h2,.price-wrapper h2,h2.total-price){color:var(--akl-link)!important}' +
LB + ' footer.store-footer,' + LB + ' footer.store-footer .store-footer__inner{background:var(--akl-s2)!important;background-image:none!important}' +
LB + ' footer.store-footer :is(p,a,span,h2,h3,h4,li,i,small,b,div){color:var(--akl-ink)!important}' +
// تدرج الثيم الأخضر-البنفسجي على البطاقات (app.css: .s-product-card-entry) ما يبان في أي عالم ولا أي صفحة.
// نفس أولوية قاعدة الثيم وبعدها، فأي لون بطاقة من عوالمنا (أولوية أعلى) يبقى زي ما هو
'.s-product-card-entry{background-image:none;background-color:#FFFFFF}';
(document.head || document.documentElement).appendChild(lst);
try { if (document.body) paint(); } catch (e) {}
var n = 0, t = setInterval(function () { paint(); if (++n > 40) clearInterval(t); }, 250);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint); else paint();
window.addEventListener('load', paint);
} catch (e) {}
})();
/* الجولة 6 (ملاحظات مراجع الذوق): صورة المعرض تعبي الإطار (قص الحواف البيضاء + خلفية بلون الصورة أو خلفية مغبّشة للمشاهد) + سطر H1 بـ1.4 + «ماطور» بدل «موتور/دينمو» في عالم السكوترات (عرض فقط) */
(function () {
try {
if (window.__AK_FIT__) return; window.__AK_FIT__ = 1;
var st = document.createElement('style'); st.id = 'ak-fit';
st.textContent = 'html[data-akpw] body.product-single #main-content h1{line-height:1.4!important}' +
'html[data-akpw] body.product-single .details-slider .swiper-slide[data-akfit]{position:relative;overflow:hidden}' +
'html[data-akpw] body.product-single .details-slider .swiper-slide[data-akfit] img{mix-blend-mode:normal!important;position:relative;z-index:1}' +
'html[data-akpw] body.product-single .details-slider .swiper-slide:is([data-akfit="u"],[data-akfit="s"]) img{padding:0!important}' +
// تابي وتمارا داخل إطار بلون العالم (§8-ب-5 البند 7)، والمحتوى الداخلي ما نلمسه
'html[data-akpw] body.product-single salla-installment :is(tamara-widget,#tabbyPromo){display:block!important;background:var(--akp-card)!important;border:1px solid var(--akp-line)!important;border-radius:12px!important;padding:8px!important;overflow:hidden}' +
'.ak-fitbg{position:absolute;inset:-8%;background-size:cover;background-position:center;filter:blur(18px) brightness(.9);z-index:0;pointer-events:none}';
(document.head || document.documentElement).appendChild(st);
var near = function (a, b, t) { return Math.abs(a[0] - b[0]) <= t && Math.abs(a[1] - b[1]) <= t && Math.abs(a[2] - b[2]) <= t; };
var fit = function (img) {
var sl = img.closest('.swiper-slide'); if (!sl || sl.getAttribute('data-akfit')) return;
var src = img.currentSrc || img.src; if (!src || /^blob:|^data:/.test(src)) return;
sl.setAttribute('data-akfit', 'p');
var im = new Image(); im.crossOrigin = 'anonymous';
im.onload = function () {
try {
var W = im.naturalWidth, H = im.naturalHeight, k = Math.min(1, 300 / Math.max(W, H)), w = Math.round(W * k), h = Math.round(H * k);
var c = document.createElement('canvas'); c.width = w; c.height = h; var x = c.getContext('2d'); x.drawImage(im, 0, 0, w, h);
var d = x.getImageData(0, 0, w, h).data, px = function (i, j) { var o = (j * w + i) * 4; return [d[o], d[o + 1], d[o + 2]]; };
var cs = [px(1, 1), px(w - 2, 1), px(1, h - 2), px(w - 2, h - 2)], bg = cs[0];
var pad = near(cs[0], cs[1], 14) && near(cs[0], cs[2], 14) && near(cs[0], cs[3], 14);
var x0 = 0, y0 = 0, x1 = w - 1, y1 = h - 1;
if (pad) {
x0 = w; y0 = h; x1 = -1; y1 = -1;
for (var j = 0; j < h; j++) for (var i = 0; i < w; i++) if (!near(px(i, j), bg, 26)) { if (i < x0) x0 = i; if (i > x1) x1 = i; if (j < y0) y0 = j; if (j > y1) y1 = j; }
if (x1 < 0) return;
}
// لون حافة المحتوى: لو موحّد نخلي خلفية الإطار بنفس اللون، وإلا (مشهد كامل) خلفية مغبّشة من نفس الصورة
var ring = [px(x0, y0), px(x1, y0), px(x0, y1), px(x1, y1), px((x0 + x1) >> 1, y0), px((x0 + x1) >> 1, y1), px(x0, (y0 + y1) >> 1), px(x1, (y0 + y1) >> 1)];
var uni = true; for (var r = 1; r < ring.length; r++) if (!near(ring[0], ring[r], 22)) uni = false;
var white = uni && ring[0][0] > 240 && ring[0][1] > 240 && ring[0][2] > 240;
var cut = pad && ((x1 - x0 + 1) * (y1 - y0 + 1)) < w * h * 0.88;
if (white && !cut) { sl.setAttribute('data-akfit', 'w'); img.style.setProperty('mix-blend-mode', 'multiply', 'important'); return; }
var put = function (url) {
if (uni) { sl.setAttribute('data-akfit', 'u'); sl.style.setProperty('background', 'rgb(' + edge.join(',') + ')', 'important'); }
else { sl.setAttribute('data-akfit', 's'); if (!sl.querySelector('.ak-fitbg')) { var b = document.createElement('div'); b.className = 'ak-fitbg'; b.style.backgroundImage = 'url("' + url + '")'; sl.insertBefore(b, sl.firstChild); } }
if (url !== src) { img.removeAttribute('srcset'); img.src = url; }
};
// لون الزاوية بالضبط (بكسل داخل زوايا المحتوى) عشان خلفية الإطار تطابق الصورة
var cr = [px(Math.min(x1, x0 + 3), Math.min(y1, y0 + 3)), px(Math.max(x0, x1 - 3), Math.min(y1, y0 + 3)), px(Math.min(x1, x0 + 3), Math.max(y0, y1 - 3)), px(Math.max(x0, x1 - 3), Math.max(y0, y1 - 3))];
var edge = [0, 1, 2].map(function (z) { return Math.round((cr[0][z] + cr[1][z] + cr[2][z] + cr[3][z]) / 4); });
if (!cut && !uni) { put(src); return; }
var m = cut ? -2 : 0, sx = Math.max(0, x0 - m) / k, sy = Math.max(0, y0 - m) / k, sw = Math.min(w, x1 + m + 1) / k - sx, sh = Math.min(h, y1 + m + 1) / k - sy;
if (!cut) { sx = 0; sy = 0; sw = W; sh = H; }
var c2 = document.createElement('canvas'); c2.width = Math.round(sw); c2.height = Math.round(sh);
var g2 = c2.getContext('2d'); g2.drawImage(im, sx, sy, sw, sh, 0, 0, c2.width, c2.height);
// حواف ناعمة بلون الخلفية عشان ما يبان مستطيل الصورة
if (uni) { var col = 'rgb(' + edge.join(',') + ')', tr = 'rgba(' + edge.join(',') + ',0)', fw = Math.round(c2.width * 0.05), fh = Math.round(c2.height * 0.06), gr;
gr = g2.createLinearGradient(0, 0, fw, 0); gr.addColorStop(0, col); gr.addColorStop(1, tr); g2.fillStyle = gr; g2.fillRect(0, 0, fw, c2.height);
gr = g2.createLinearGradient(c2.width, 0, c2.width - fw, 0); gr.addColorStop(0, col); gr.addColorStop(1, tr); g2.fillStyle = gr; g2.fillRect(c2.width - fw, 0, fw, c2.height);
gr = g2.createLinearGradient(0, 0, 0, fh); gr.addColorStop(0, col); gr.addColorStop(1, tr); g2.fillStyle = gr; g2.fillRect(0, 0, c2.width, fh);
gr = g2.createLinearGradient(0, c2.height, 0, c2.height - fh); gr.addColorStop(0, col); gr.addColorStop(1, tr); g2.fillStyle = gr; g2.fillRect(0, c2.height - fh, c2.width, fh); }
c2.toBlob(function (bl) { if (bl) put(URL.createObjectURL(bl)); }, 'image/jpeg', 0.92);
} catch (e) { sl.setAttribute('data-akfit', 'x'); }
};
im.onerror = function () { sl.setAttribute('data-akfit', 'x'); };
im.src = src;
};
var MOT = /موتور|دينمو/g;
var words = function () {
if (document.documentElement.getAttribute('data-akpw') !== 'moto') return;
var mc = document.getElementById('main-content'); if (!mc) return;
var tw = document.createTreeWalker(mc, NodeFilter.SHOW_TEXT, null), n;
while ((n = tw.nextNode())) if (MOT.test(n.nodeValue)) { MOT.lastIndex = 0; n.nodeValue = n.nodeValue.replace(MOT, 'ماطور'); }
MOT.lastIndex = 0;
};
var run = function () {
if (!document.documentElement.getAttribute('data-akpw')) return;
var ims = document.querySelectorAll('body.product-single .details-slider .s-slider-container:not(.s-slider-thumbs-container) .swiper-slide img');
for (var i = 0; i < ims.length; i++) if (ims[i].complete && ims[i].naturalWidth) fit(ims[i]);
words();
};
var n = 0, t = setInterval(function () { run(); if (++n > 40) clearInterval(t); }, 300);
window.addEventListener('load', run);
} catch (e) {}
})();
/* الجولة 6 (طلبات المنسّق والمراجع): الزر العائم يختفي عند مربع «فرق السعر» في شرح 4 في 1، إطار تابي مثل تمارا، خيار المنتج بعرض كامل، عنوان المنتج 20/26 وذيل «| …» ما ينقسم (وعلى الكمبيوتر سطر لحاله)، ورقم موديل AK-101 بدون لاحقة اللون (عرض فقط) */
(function () {
try {
if (window.__AK_R10__) return; window.__AK_R10__ = 1;
var P = 'html[data-akpw] body.product-single ';
var st = document.createElement('style'); st.id = 'ak-r10';
st.textContent = '@media(max-width:1023px){html[data-ak-wa2] .fixed-btm{opacity:0!important;visibility:hidden!important;pointer-events:none!important}}' +
P + '#tabbyPromoWrapper{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:0!important}' +
P + 'salla-installment .mb-5{margin-bottom:12px!important}' +
P + '.s-product-options-option{display:block!important}' +
P + '.s-product-options-option-label{display:block!important;width:100%!important;margin:0 0 8px!important;color:#fff!important;text-align:start}' +
P + '.s-product-options-option-label small{color:var(--akp-sub)!important;margin-inline-start:6px}' +
P + '.s-product-options-option-content,' + P + '.s-product-options-option-content > div{width:100%!important;max-width:100%!important}' +
P + '.s-product-options-option select.s-form-control{width:100%!important;height:48px!important;background-color:var(--akp-card2)!important;color:#fff!important;border:1px solid var(--akp-line)!important;border-radius:12px!important}' +
P + '#main-content h1:not(.product-title){font-size:20px!important;line-height:1.4!important;font-weight:800!important}' +
'@media(min-width:1024px){' + P + '#main-content h1:not(.product-title){font-size:26px!important}' + P + '#main-content h1 .ak-h1tail{display:block}}' +
'.ak-h1tail{white-space:nowrap}.ak-h1tail::before{content:"| "}@media(min-width:1024px){.ak-h1tail::before{content:none}}' +
// شريط الشراء: «اشترِ الآن» لون صافي، زر السلة حدود بلون العالم، «إضافة ملاحظة» بألوان العالم (§8-ب-5)
'html[data-ak-bar] body.product-single .navbar-details{display:none!important}' +
P + '.navbar-details{background:var(--akp-bar)!important;border-top:1px solid var(--akp-line)!important;box-shadow:0 -6px 18px rgba(0,0,0,.35)!important}' +
P + ':is(.sticky-product-bar,.navbar-details) salla-button.s-button-wrap{background:transparent!important;background-image:none!important}' +
P + ':is(.sticky-product-bar,.navbar-details) salla-mini-checkout-widget{background:var(--akp-acc)!important;background-image:none!important;border-radius:12px!important}' +
P + ':is(.sticky-product-bar,.navbar-details) .s-button-btn.s-button-primary{background:transparent!important;border:1.5px solid var(--akp-acc)!important;color:var(--akp-acc)!important;border-radius:12px!important}' +
P + ':is(.sticky-product-bar,.navbar-details) .s-button-btn.s-button-primary *{color:var(--akp-acc)!important}' +
P + '#main-content .btn--collapse{background:var(--akp-card2)!important;border:1px solid var(--akp-line)!important;color:#fff!important}' +
P + '#main-content .btn--collapse *{color:#fff!important}';
(document.head || document.documentElement).appendChild(st);
var seen = [], vis = 0;
var watch = function () {
if (!window.IntersectionObserver) return;
var els = document.querySelectorAll('.akq__diff, #ak-wa');
for (var i = 0; i < els.length; i++) {
if (seen.indexOf(els[i]) > -1) continue; seen.push(els[i]);
new IntersectionObserver(function (es) { for (var k = 0; k < es.length; k++) vis += es[k].isIntersecting ? 1 : (es[k].target.__akV ? -1 : 0), es[k].target.__akV = es[k].isIntersecting; if (vis > 0) document.documentElement.setAttribute('data-ak-wa2', '1'); else document.documentElement.removeAttribute('data-ak-wa2'); }).observe(els[i]);
}
};
var fix = function () {
var b = document.body; if (!b) return;
watch();
if (!b.classList.contains('product-single')) return;
// AK-101: موديل واحد للونين، فنعرض «AK-101» بس
if (/\/p1821944654(\D|$)/.test(location.pathname)) {
var ms = document.querySelectorAll('#main-content .text-unicode');
for (var j = 0; j < ms.length; j++) if (/^\s*AK-101-[A-Z]+\s*$/.test(ms[j].textContent)) ms[j].textContent = 'AK-101';
}
// شريط الشراء الثابت يطلع بس لما أزرار الشراء الأصلية تطلع برا الشاشة (§8-ب-5)
var sb = document.querySelector('#main-content .sticky-product-bar');
if (sb && !sb.__akIO && window.IntersectionObserver) { sb.__akIO = 1; new IntersectionObserver(function (es) { if (es[0].isIntersecting) document.documentElement.setAttribute('data-ak-bar', '1'); else document.documentElement.removeAttribute('data-ak-bar'); }).observe(sb); }
var mc = document.querySelectorAll('.sticky-product-bar salla-mini-checkout-widget, .navbar-details salla-mini-checkout-widget');
for (var z = 0; z < mc.length; z++) { var sr = mc[z].shadowRoot; if (sr && !sr.getElementById('ak-mc')) { var y = document.createElement('style'); y.id = 'ak-mc'; y.textContent = '.s-fast-checkout-button{background:transparent!important;border:0!important;color:var(--akp-on)!important;font-weight:800!important}.s-fast-checkout-button *{color:var(--akp-on)!important;fill:var(--akp-on)!important}'; sr.appendChild(y); } }
var hs = document.querySelectorAll('#main-content h1');
for (var h = 0; h < hs.length; h++) {
var e = hs[h]; if (e.getAttribute('data-aktail') || e.children.length) continue;
var t = e.textContent, p = t.lastIndexOf(' | '); if (p < 1) continue;
e.setAttribute('data-aktail', '1'); e.textContent = t.slice(0, p) + ' ';
var s = document.createElement('span'); s.className = 'ak-h1tail'; s.textContent = t.slice(p + 3).trim(); e.appendChild(s);
}
};
var q = false, sch = function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; fix(); }); };
var go = function () { fix(); try { new MutationObserver(sch).observe(document.body, { childList: true, subtree: true, characterData: true }); } catch (e) {} };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
} catch (e) {}
})();
/* المرحلة 3 (مراجع الذوق): الفوتر على الجوال (الوصف سطر كامل والروابط عمودين) + الزر العائم يختفي داخل الفوتر + صف كروت الأقسام المكرر ينخفي لما تكون شرائح القسم موجودة + شارة المقاس تحت داخل الصورة بعيد عن القلب */
(function () {
try {
if (window.__AK_P3__) return; window.__AK_P3__ = 1;
var st = document.createElement('style'); st.id = 'ak-p3';
st.textContent = '@media(max-width:1023.98px){footer.store-footer .footer-div{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:20px 12px!important}footer.store-footer .footer-div>*{width:auto!important;max-width:none!important;margin:0!important}footer.store-footer .footer-div>.footer-item:first-child,footer.store-footer .footer-div>.footer-item:nth-child(2){grid-column:1/-1}footer.store-footer .footer-item:first-child .max-w-sm{max-width:none!important}footer.store-footer .s-menu-footer-list{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 12px}footer.store-footer .s-menu-footer-list>*{min-height:40px;display:flex;align-items:center}footer.store-footer{padding-bottom:88px!important}html[data-ak-foot] .fixed-btm{opacity:0!important;pointer-events:none!important}}' +
'html:has(nav.ak-chips) salla-slider.sub-categories{display:none!important}' +
'#main-content .s-product-card-image .ak-szb{inset-block-start:auto!important;inset-block-end:8px!important}';
(document.head || document.documentElement).appendChild(st);
var go = function () { var f = document.querySelector('footer.store-footer'); if (!f || !window.IntersectionObserver) return; new IntersectionObserver(function (es) { if (es[0].isIntersecting) document.documentElement.setAttribute('data-ak-foot', '1'); else document.documentElement.removeAttribute('data-ak-foot'); }).observe(f); };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
} catch (e) {}
})();