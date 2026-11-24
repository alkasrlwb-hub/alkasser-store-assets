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
gymfloor: U('/أرضيات-الجيم/c780253807')
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
// مؤقتًا: عالم اللياقة مخفي، فقسم «الرياضة» يعرض الطاولات بس
var SPORT = [];
window.AK_WORLDS_CONFIG = {
// أرقام الواتساب لكل عالم (المكان الوحيد اللي تتغير منه)
WA: { tables: '966598060796', play: '966598060796', moto: '966567886993' },
imgBase: BASE + '/img',
products: {
moto: [
{ source: 'categories', value: [726194163], title: 'السكوترات الكهربائية', layout: 'slider', limit: 8, allUrl: C.scooters },
{ source: 'categories', value: [1499711730], title: 'دبابات البنزين', layout: 'slider', limit: 8, allUrl: C.motos },
{ source: 'categories', value: [85325564], title: 'دبابات الشحن والتكتوك', layout: 'slider', limit: 8, allUrl: C.cargo },
{ source: 'categories', value: [778074738, 1679231858, 1340798385], title: 'الدراجات الهوائية · للكبار والأطفال', layout: 'slider', limit: 12, allUrl: C.bikes }
],
tables: [
{ source: 'categories', value: [529136902], title: 'طاولة 4 في 1', layout: 'slider', limit: 4, allUrl: C.q4 },
{ source: 'categories', value: [993213184], title: 'طاولات البلياردو · 7 و8 و9 قدم', layout: 'slider', limit: 12, allUrl: C.billiard },
{ source: 'categories', value: [353917441], title: 'طاولات الهوكي', layout: 'slider', limit: 4, allUrl: C.hockey },
{ source: 'categories', value: [1303174661], title: 'طاولات تنس الطاولة', layout: 'slider', limit: 4, allUrl: C.tennis },
{ source: 'categories', value: [1767250951], title: 'طاولات الفرفيرة', layout: 'slider', limit: 4, allUrl: C.foos }
]
},
data: {
t_size7_url: C.billiard, t_size8_url: C.billiard, t_size9_url: C.billiard, t_all_url: C.tables,
t_cats: [
{ title: 'طاولات البلياردو', sub: '7 · 8 · 9 قدم', image: IMG + 'b8_kb.jpg', url: C.billiard },
{ title: '4 في 1', sub: 'بلياردو، هوكي، تنس، طاولة طعام أو مكتبية', image: IMG + 'q4.jpg', url: C.q4 },
{ title: 'هوكي', sub: 'عداد أهداف إلكتروني', image: IMG + 'hk.jpg', url: C.hockey },
{ title: 'تنس طاولة', sub: 'المقاس الدولي · للبيت والمدارس', image: IMG + 'tt.jpg', url: C.tennis },
{ title: 'فرفيرة', sub: 'صناعة هندية · 3 ألوان', image: IMG + 'fb.jpg', url: C.foos },
{ title: 'دراجات هوائية', sub: 'للكبار والأطفال · كل المقاسات', image: "https://cdn.files.salla.network/products/112199751/b59777f9-f79a-4853-87ba-16700b1ce186-thumbnail.webp", url: C.bikes, photo: true }
],
p_small_url: C.garden, p_medium_url: C.garden, p_large_url: C.garden, p_all_url: C.garden,
p_cats: [
{ title: 'مراجيح', image: IMG + 'p_swing_only.jpg', url: C.garden },
{ title: 'ملاعب متكاملة', image: IMG + 'p_sw04.jpg', url: C.garden },
{ title: 'ألعاب الروضة', image: IMG + 'w_club.jpg', url: C.kinder }
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
{ title: 'سكوترات كهربائية', sub: 'DASH · VOXER', image: IMG + 'm_scooter.jpg', url: C.scooters },
{ title: 'دبابات بنزين', sub: 'VOXER · SWEYD · BOXER', image: IMG + 'm_moto.jpg', url: C.motos },
{ title: 'دبابات شحن وتكتوك', sub: 'للمزارع والمقاولات', image: IMG + 'm_tri.jpg', url: C.cargo },
{ title: 'الدراجات الهوائية', sub: 'جبلية · للشباب والكبار', image: "https://cdn.files.salla.network/products/112199751/b59777f9-f79a-4853-87ba-16700b1ce186-thumbnail.webp", url: C.bikes, photo: true },
{ title: 'دراجات الأطفال', sub: 'مقاس 20 · كوبرا وBritish Eagle', image: "https://cdn.files.salla.network/products/112199751/6aa69088-98dc-4bda-9e8f-1ac0f7fe6ddf-thumbnail.webp", url: C.kbikes, photo: true }
],
f_cardio_url: C.treadmills, f_easy_url: C.cardio, f_strength_url: C.gym, f_boxing_url: C.boxing, f_all_url: C.fit,
h_dining_url: C.dining, h_office_url: C.office, h_decor_url: C.decor, h_all_url: C.home,
bundle_url: C.tables,
worlds_on: 'tables,play,moto',
t_tab: 'الطاولات',
t_products_title: 'طاولات الألعاب'
}
};
window.AK_WORLDS_CONFIG.data.whatsapp = window.AK_WORLDS_CONFIG.WA.tables;
window.AK_WORLDS_CONFIG.data.m_whatsapp = window.AK_WORLDS_CONFIG.WA.moto;
// مقارنة طاولات 4 في 1 (قسم 4 في 1 + صفحات الطاولات الثلاث). أي نص في ak-q4compare.js يتغير من هنا بنفس الاسم: title, lead, common, rows, diff, notes
window.AK_WORLDS_CONFIG.q4cmp = { on: true };
try { var q4s = document.createElement('script'); q4s.src = BASE + '/ak-q4compare.js'; q4s.async = true; (document.head || document.documentElement).appendChild(q4s); } catch (e) {}
// مؤقتًا: إخفاء أقسام القائمة غير المعروضة (الطاولات والمراجيح والسكوترات فقط)
var HIDE = ['أثاث منزلي - مكتبي', 'سيارات الأطفال', 'المدونة', 'أجهزة رياضية ولياقة', 'زحاليق', 'طاولات وكراسي الطعام', 'الديكور وأشجار الزينة'];
// نفس الأقسام بالرقم (تشمل الأقسام الفرعية و«عرض الكل») + المدونة
var HIDEID = /\/c(99902540|1338663500|428900685|2112701251|1473413965|1130992222|955842393|490123615|180690522|1688354139|1863569496|2055314181|1640674614|1448847542|1165578940|1945475206|1340798385)(\D|$)|\/blog(\/|$)/;
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
var WRX = [['moto', /سكوتر|دباب|تكتوك|سيكل|سياكل|دراجة هوائية|دراجات هوائية|دراجة جبلية/], ['play', /مراجيح|مرجيحة|نطيط|ترامبولين|ألعاب حدائق|العاب حدائق|روض|زحليق|ألعاب أطفال|العاب اطفال|مدارس/], ['tables', /طاول|بلياردو|هوكي|تنس|فرفيرة|رياض|لياقة|سير|جيم|أوزان|دمبل|ملاكمة|كرة القدم|ملاعب|أرضيات/]];
var worldSync = function () {
try {
var b = document.body; if (!b || b.classList.contains('index')) return;
if (!(b.classList.contains('product-index') || b.classList.contains('product-single'))) return;
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var tx = ((bc && bc.textContent) || '') + ' ' + ((document.querySelector('h1') || {}).textContent || '');
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
for (var i = 0; i < els.length; i++) if (els[i].style.getPropertyValue('background-color') !== 'rgb(6, 16, 31)') els[i].style.setProperty('background-color', '#06101F', 'important');
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
all.innerHTML = '<i>\u2605</i><b>كل منتجات الرياضة</b><small>تصفّح الكل \u2190</small>';
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
// صفحة المنتج: صندوق «توصيل وتركيب مجاني» للطاولات فقط (الرياض 30 ساعة، جدة والدمام 3-5 أيام)
var isTablePage = function () {
if (/p554888247/.test(location.pathname)) return false;
var bc = document.querySelector('.breadcrumbs, nav[aria-label*="breadcrumb"], salla-breadcrumb');
var nm = ((document.querySelector('h1') || {}).textContent || '');
var tx = ((bc && bc.textContent) || '') + ' ' + nm;
if (/سكوتر|دباب|تكتوك|دراجة|دراجات|سيكل|مرجيح|مراجيح|نطيط|زحليق|ألعاب حدائق|العاب حدائق/.test(tx)) return false;
if (/4 في 1|بلياردو|هوكي|فرفيرة|تنس طاولة/.test(tx)) return true;
if (/طعام|كراسي|مكتب/.test(tx)) return false;
return /طاولات الألعاب|طاولة ألعاب/.test(tx);
};
var akPrice = function () {
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
return [((bc && bc.textContent) || '') + ' ' + nm, nm];
};
// نوع المنتج عشان مربع التوصيل: طاولة / لياقة / ملاعب وأرضيات / مراجيح / سكوترات
var akKind = function () {
if (/p554888247/.test(location.pathname)) return null;
var t = akTx(), tx = t[0], nm = t[1];
if (/سكوتر|دباب|تكتوك/.test(tx) && !/هوائية|سيكل|سياكل|جبلية/.test(nm)) return 'moto';
if (/دراجة هوائية|دراجات هوائية|الدراجات الهوائية|سيكل|سياكل|دراجة جبلية|دراجات الأطفال/.test(tx)) return null;
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
if (document.getElementById('ak-ship')) return;
var kind = akKind(); if (!kind) return;
var f = document.querySelector('form.product-form'); if (!f) return;
var an = document.querySelector('salla-installment, .salla-installment') || f;
if (!an.parentNode) return;
var price = akPrice();
// المنتجات غير الطاولات والسكوترات: الشحن المجاني يبدأ من سلة 500، فما نوعد به تحتها
if ((kind === 'fit' || kind === 'court' || kind === 'play') && price < 500) return;
var row = function (city, txt) { return '<div style="padding:8px 12px;margin-top:8px;border-radius:12px;background:rgba(34,211,238,.10);font-size:14.5px;line-height:1.6"><b style="display:block;color:#22D3EE">' + city + '</b><span style="display:block;font-weight:700">' + txt + '</span></div>'; };
var note = function (txt) { return '<div style="margin-top:10px;font-size:13.5px;line-height:1.6;font-weight:700;color:#FACC15">' + txt + '</div>'; };
var OUT = row('باقي المدن', 'كلّمنا قبل الطلب نتأكد من توفر الشحن');
var RIY = 'توصيل وتركيب مجاني خلال 30 ساعة · الدفع عند الاستلام متاح';
var body = '';
if (kind === 'play') {
body = row('الرياض', 'توصيل مجاني، والتركيب وموعده نأكده معك بالواتساب') + row('جدة والدمام والخبر والظهران والقصيم', 'توصيل مجاني خلال 3–5 أيام، والتركيب نأكد تفاصيله معك بالواتساب') + OUT;
} else if (kind === 'court') {
body = row('الرياض', 'توصيل مجاني · الدفع عند الاستلام متاح') + row('جدة', 'توصيل مجاني خلال 3–5 أيام · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران والقصيم', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('التركيب', 'نأكد تفاصيله معك بالواتساب') + OUT;
} else {
if (kind === 'fit') RIY = 'توصيل وتركيب مجاني · الدفع عند الاستلام متاح';
if (price >= 2000) {
body = row('الرياض', RIY) + row('جدة', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع أونلاين') + row('القصيم', 'توصيل مجاني خلال 3–5 أيام · تركيب مجاني · الدفع أونلاين') + OUT + note('التركيب المجاني في جدة والدمام والقصيم إذا كانت سلتك 2000 ريال أو أكثر بعد الخصم');
} else {
body = row('الرياض', RIY) + row('جدة', 'توصيل مجاني خلال 3–5 أيام · الدفع عند الاستلام متاح') + row('الدمام والخبر والظهران', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('القصيم', 'توصيل مجاني خلال 3–5 أيام · الدفع أونلاين') + row('التركيب في جدة والدمام والقصيم', 'مجاني إذا كانت سلتك 2000 ريال أو أكثر بعد الخصم، وإلا يوصلك بكرتونه أو نركّبه لك بـ150 ريال') + OUT;
}
if (kind === 'moto') body += note(WSPEC[akMotoType()]);
}
var d = document.createElement('div'); d.id = 'ak-ship'; d.setAttribute('data-kind', kind);
d.setAttribute('style', 'margin:14px 0 16px;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#0B2350,#06101F);border:2px solid #22D3EE;box-shadow:0 0 22px rgba(34,211,238,.25);color:#fff;text-align:start');
d.innerHTML = '<div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;line-height:1.4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg><span>توصيل <span style="color:#FACC15">مجاني</span> للرياض وجدة والدمام والقصيم</span></div>' + body;
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
var tx = ((bc && bc.textContent) || '') + ' ' + nm;
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
var hoursFix = function () {
try {
var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nd;
while ((nd = w.nextNode())) {
var v = nd.nodeValue;
if (!v || v.indexOf('24') < 0) continue;
var p = nd.parentNode && nd.parentNode.nodeName;
if (p === 'SCRIPT' || p === 'STYLE' || p === 'TEXTAREA') continue;
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
var s = document.createElement('script');
s.src = 'https://cdn.jsdelivr.net/gh/alkasrlwb-hub/alkasser-store-assets@cb8947c5dad845c98dfb4e7c1664e63cd6193d2c/alkasser-worlds.js';
s.async = true;
(document.head || document.documentElement).appendChild(s);
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
