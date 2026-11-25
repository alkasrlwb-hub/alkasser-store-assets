/* ALKASSER LOOB — الجولة 13: المدونة بشكل عالم «رياضة وألعاب» الفاتح + «اقرأ كمان» + إخفاء مقالات المراجيح القديمة من القوائم.
   - يشتغل بس في صفحات المدونة (body.blog-index / body.blog-single / أي مسار فيه /blog).
   - التحويل للرئيسية لمقالات المراجيح الخمس (لين تنراجع) في JS المحرر (HIDEID)، وهنا نخفي روابطها من القوائم بس.
   - «اقرأ كمان»: 3 روابط ثابتة لكل مقال من مقالات الطاولات العشر (بالمعرّف). */
(function () {
  try {
    if (window.__AK_R13__) return;
    window.__AK_R13__ = 1;
    var path = '';
    try { path = decodeURIComponent(location.pathname); } catch (e) { path = location.pathname; }
    if (!/\/blog(\/|$)/.test(path)) return;
    var html = document.documentElement;
    var pre = path.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';

    // مقالات المراجيح القديمة (تصنيف «عام» 1807461238): مخفية لين تنراجع
    var OLD = ['2053465897', '390577443', '1589187168', '864286245', '299892494'];
    var OLD_CAT = '1807461238';

    // مقالات الطاولات العشر: [الرابط، العنوان المختصر، سطر صغير]
    var A = {
      '1619308213': ['billiard-table-sizes-room-guide', 'مقاسات طاولة البلياردو 7 و8 و9 قدم', 'كم مساحة تحتاج غرفتك؟'],
      '1923657160': ['4-in-1-table-vs-separate-tables', 'طاولة 4 في 1 ولا كل طاولة لحالها؟', 'مقارنة تساعدك تقرر'],
      '2030609441': ['game-tables-for-istiraha-majlis', 'أفضل طاولات الألعاب للاستراحة والمجلس', 'كيف تختار وتوزعها'],
      '615703075': ['international-table-tennis-table-guide', 'طاولة تنس طاولة مقاس دولي', 'كيف تختارها للبيت والمدرسة'],
      '306269998': ['foosball-table-home-cafe-guide', 'طاولة الفرفيرة للبيت والكوفي', 'المقاسات والحجم الكبير'],
      '1814982191': ['air-hockey-table-kids-adults-guide', 'طاولة هوكي هوائي للأطفال والكبار', 'الفرق بين الأحجام'],
      '972328232': ['billiard-table-cloth-care', 'العناية بجوخ البلياردو', 'طريقة التنظيف الصحيحة'],
      '1707002666': ['home-game-room-setup-guide', 'تجهيز غرفة ألعاب في البيت', 'خطوات وأفكار لكل مساحة'],
      '932964907': ['game-tables-for-cafes', 'طاولات ألعاب للكوفيهات', 'وش تختار عشان الزباين يرجعون'],
      '1397565493': ['family-gift-game-tables', 'هدايا للعائلة والعيال', 'طاولات ألعاب تجمع البيت']
    };
    // الربط الثابت: كل مقال ← 3 مقالات قريبة منه
    var REL = {
      '1619308213': ['972328232', '1707002666', '1923657160'],
      '1923657160': ['1619308213', '1707002666', '2030609441'],
      '2030609441': ['932964907', '1619308213', '615703075'],
      '615703075': ['1707002666', '1397565493', '2030609441'],
      '306269998': ['932964907', '1814982191', '1397565493'],
      '1814982191': ['1397565493', '306269998', '1707002666'],
      '972328232': ['1619308213', '1707002666', '932964907'],
      '1707002666': ['1619308213', '1923657160', '615703075'],
      '932964907': ['306269998', '2030609441', '972328232'],
      '1397565493': ['1814982191', '1923657160', '306269998']
    };
    var url = function (id) { return pre + '/blog/' + A[id][0] + '/a-' + id; };

    // عالم الطاولات الفاتح (ak-light يقرأ data-akpw)
    if (html.getAttribute('data-akpw') !== 'tables') html.setAttribute('data-akpw', 'tables');

    var P = 'html:not(#ak-r13a) body:is(.blog-index,.blog-single):not(#ak-r13b):not(#ak-r13c):not(#ak-r13d)';
    var M = P + ' #main-content';
    var css = ''
      // الصفحة والهيدر والفوتر فاتحة حتى لو ak-light ما اشتغل
      + 'html:has(body.blog-index),html:has(body.blog-single),' + P + ',' + P + ' .app-inner,' + M + '{background:#F4F7FB!important;background-color:#F4F7FB!important;color:#0B1A33!important}'
      + P + ' .main-nav-container.top-navbar,' + P + ' .main-nav-container .inner{background:#FFFFFF!important;background-image:none!important}'
      + P + ' .main-nav-container.top-navbar{border-bottom:2px solid #22D3EE!important}'
      + P + ' footer.store-footer,' + P + ' footer.store-footer .store-footer__inner,' + P + ' footer.store-footer > div{background:#EEF3F9!important;background-image:none!important;box-shadow:none!important}'
      + M + ' .breadcrumbs,' + M + ' .breadcrumbs :is(a,span,i){color:#55667F!important}'
      // ===== المقال =====
      + M + ' .blog-single .main-content{background:#FFFFFF!important;border:1px solid #E1E8F2;border-radius:16px!important;padding:18px 14px!important;box-shadow:0 8px 24px -18px rgba(11,26,51,.25)}'
      + '@media(min-width:1024px){' + M + ' .blog-single .main-content{padding:36px 40px!important}}'
      + M + ' .blog-single h1.article-title{font-size:24px!important;line-height:1.5!important;color:#0B1A33!important;font-weight:800!important;margin-bottom:10px!important}'
      + '@media(min-width:1024px){' + M + ' .blog-single h1.article-title{font-size:32px!important}}'
      + M + ' .blog-single .main-content > div.text-gray-500{margin-bottom:18px!important;color:#55667F!important}'
      + M + ' .blog-single .main-content > div.text-gray-500 :is(span,i){color:#55667F!important}'
      + M + ' .blog-single .main-content > img{width:100%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;background:#EEF3F9;border-radius:14px!important;margin-bottom:24px!important}'
      + M + ' article.article-body{font-size:16.5px!important;line-height:1.95!important;color:#24375A!important;max-width:760px;overflow-wrap:anywhere}'
      + M + ' article.article-body :is(p,li,span,td,th,small){font-size:inherit!important;line-height:inherit!important;color:#24375A!important}'
      + M + ' article.article-body p{margin:0 0 14px!important}'
      + M + ' article.article-body h2{font-size:21px!important;line-height:1.55!important;font-weight:800!important;color:#0B1A33!important;margin:30px 0 12px!important;padding-inline-start:12px;border-inline-start:4px solid #22D3EE}'
      + M + ' article.article-body h3{font-size:18px!important;line-height:1.6!important;font-weight:800!important;color:#0B1A33!important;margin:22px 0 8px!important}'
      + M + ' article.article-body :is(strong,b){color:#0B1A33!important;font-weight:800}'
      + M + ' article.article-body :is(ul,ol){padding-inline-start:22px!important;margin:0 0 16px!important}'
      + M + ' article.article-body ul{list-style:disc!important}' + M + ' article.article-body ol{list-style:decimal!important}'
      + M + ' article.article-body li{margin:0 0 6px!important}'
      + M + ' article.article-body li::marker{color:#0E7490}'
      + M + ' article.article-body a{color:#0E7490!important;text-decoration:underline!important;text-underline-offset:3px;font-weight:700}'
      + M + ' article.article-body img{max-width:100%!important;height:auto!important;object-fit:contain!important;border-radius:12px}'
      // الجداول: تتمرر داخل صندوقها
      + M + ' article.article-body .ak-tw{position:relative;margin:6px 0 20px;border:1px solid #E1E8F2;border-radius:12px;overflow-x:auto;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;background:#FFFFFF}'
      + M + ' article.article-body .ak-tw table{width:100%!important;min-width:100%;border-collapse:collapse!important;margin:0!important;font-size:14.5px!important;line-height:1.6!important}'
      + M + ' article.article-body .ak-tw.ak-wide table{width:max-content!important}'
      + M + ' article.article-body .ak-tw :is(td,th){padding:10px 12px!important;border-bottom:1px solid #E1E8F2!important;text-align:start!important;vertical-align:top;font-size:14.5px!important;min-width:84px}'
      + M + ' article.article-body .ak-tw.ak-wide :is(td,th){min-width:112px;max-width:230px}'
      + M + ' article.article-body .ak-tw :is(thead :is(td,th),th,table:not(:has(thead)) tbody > tr:first-child > td){background:#EEF3F9!important;color:#0B1A33!important;font-weight:800!important}'
      + M + ' article.article-body .ak-tw tr:last-child td{border-bottom:0!important}'
      + M + ' article.article-body .ak-tw tbody tr:nth-child(even) td{background:#FAFCFE}'
      + M + ' article.article-body .ak-tw-hint{display:none;margin:-14px 0 18px;font-size:12.5px!important;color:#55667F!important}'
      + M + ' article.article-body .ak-tw.ak-wide + .ak-tw-hint{display:block}'
      // «اقرأ كمان»
      + M + ' #ak-more{margin:28px 0 4px;padding:18px 16px;border-radius:16px;background:#EEF3F9;border:1px solid #E1E8F2;max-width:760px}'
      + M + ' #ak-more h2{margin:0 0 12px!important;padding:0!important;border:0!important;font-size:19px!important;font-weight:800!important;color:#0B1A33!important}'
      + M + ' #ak-more .ak-more__l{display:grid;gap:10px}'
      + '@media(min-width:760px){' + M + ' #ak-more .ak-more__l{grid-template-columns:repeat(3,1fr)}}'
      + M + ' #ak-more a{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:64px;padding:12px 14px;border-radius:12px;background:#FFFFFF;border:1px solid #E1E8F2;text-decoration:none!important;transition:border-color .15s,box-shadow .15s}'
      + M + ' #ak-more a:hover{border-color:#22D3EE;box-shadow:0 6px 16px -10px rgba(14,116,144,.45)}'
      + M + ' #ak-more a b{display:block;font-size:15px!important;line-height:1.5!important;font-weight:800;color:#0B1A33!important}'
      + M + ' #ak-more a small{display:block;margin-top:2px;font-size:12.5px!important;line-height:1.5!important;color:#55667F!important}'
      + M + ' #ak-more a i{flex:none;font-style:normal;font-weight:800;color:#0E7490!important}'
      // «مقالات ذات صلة» حق الثيم (الجانب)
      + M + ' .blog-single aside h2{color:#0B1A33!important;font-size:18px!important;font-weight:800!important}'
      + M + ' .blog-single aside .related-article-item{background:#FFFFFF!important;border:1px solid #E1E8F2;border-radius:14px!important}'
      + M + ' .blog-single aside .related-article-item :is(a,h3,h4,p,span){color:#0B1A33!important;line-height:1.6}'
      + M + ' .blog-single aside .related-article-item img{object-fit:cover}'
      // ===== صفحة المدونة =====
      + M + ' .blog-page :is(h2,h3){color:#0B1A33!important}'
      + M + ' .blog-page nav :is(a,li){color:#24375A!important}'
      + M + ' .blog-page nav a[href*="c-1252041592"]{color:#0E7490!important;font-weight:800}'
      + M + ' .blog-page .post-entry{background:#FFFFFF!important;border:1px solid #E1E8F2!important;border-radius:16px!important;overflow:hidden;box-shadow:0 8px 22px -18px rgba(11,26,51,.3)}'
      + M + ' .blog-page .post-entry .post-desc{padding:12px 14px 16px!important}'
      + M + ' .blog-page .post-entry .post-desc :is(h3,h3 a){color:#0B1A33!important;font-weight:800!important;line-height:1.55!important}'
      + M + ' .blog-page .post-entry .post-desc p{color:#24375A!important;opacity:1!important;line-height:1.75!important}'
      + M + ' .blog-page .post-entry .post-desc :is(.opacity-70,.opacity-70 *){color:#55667F!important;opacity:1!important}'
      + M + ' .blog-page .post-entry__image img{object-fit:cover}'
      + M + ' .blog-page .blog-slider__slide :is(h3,h3 a,p,span,a,i){color:#FFFFFF!important}'
      + M + ' .blog-page .blog-slider__slide img{object-fit:cover}'
      // طبقة السلايدر: تدرّج من تحت بدل الرمادي على الصورة كلها
      + M + ' .blog-page .blog-slider__slide.has-overlay::after{background:linear-gradient(0deg,rgba(0,0,0,.74) 0%,rgba(0,0,0,.42) 42%,rgba(0,0,0,0) 72%)!important;background-color:transparent!important}'
      + M + ' .blog-page .blog-slider .swiper-pagination-bullet{background:rgba(255,255,255,.7)!important;opacity:1!important}'
      + M + ' .blog-page .blog-slider .swiper-pagination-bullet-active{background:#22D3EE!important}'
      + M + ' .blog-page .dropdown__trigger,' + M + ' .blog-page .dropdown__trigger *{color:#0E7490!important}'
      + M + ' .blog-page .dropdown__menu{background:#FFFFFF!important;color:#0B1A33!important}'
      // مقالات المراجيح القديمة وتصنيفها: ما تطلع في القوائم
      + '.ak-old-off{display:none!important}';
    var st = document.createElement('style'); st.id = 'ak-r13'; st.textContent = css;
    var put = function () { if (!st.parentNode) (document.head || document.documentElement).appendChild(st); };
    put();

    var isOld = function (href) {
      if (!href) return false;
      if (href.indexOf('c-' + OLD_CAT) > -1) return true;
      var m = /\/a-(\d+)/.exec(href); return !!(m && OLD.indexOf(m[1]) > -1);
    };
    var hideOld = function () {
      var as = document.querySelectorAll('#main-content a[href*="/a-"], #main-content a[href*="c-' + OLD_CAT + '"]');
      for (var i = 0; i < as.length; i++) {
        var a = as[i]; if (!isOld(a.getAttribute('href'))) continue;
        var box = a.closest('.post-entry');
        if (box) { var par = box.parentElement; if (par && par.children.length === 1 && !par.matches('#main-content, .main-content')) box = par; }
        else box = a.closest('.swiper-slide, .related-article-item, li') || a;
        if (!box.classList.contains('ak-old-off')) box.classList.add('ak-old-off');
      }
    };
    var AR = /[٠-٩]/g;
    var digits = function () {
      var els = document.querySelectorAll('#main-content .date span, #main-content .post-desc span, #main-content .blog-slider__content span, #main-content .related-article-item span');
      for (var i = 0; i < els.length; i++) {
        var e = els[i]; if (e.children.length || !AR.test(e.textContent)) continue; AR.lastIndex = 0;
        e.textContent = e.textContent.replace(AR, function (c) { return String(c.charCodeAt(0) - 0x0660); });
      }
    };
    var tables = function () {
      var ts = document.querySelectorAll('#main-content article.article-body table');
      for (var i = 0; i < ts.length; i++) {
        var t = ts[i], w = t.parentElement;
        if (!w.classList.contains('ak-tw')) {
          w = document.createElement('div'); w.className = 'ak-tw'; w.setAttribute('role', 'region'); w.setAttribute('tabindex', '0');
          t.parentNode.insertBefore(w, t); w.appendChild(t);
          var hn = document.createElement('p'); hn.className = 'ak-tw-hint'; hn.textContent = 'اسحب الجدول عشان تشوف باقي الأعمدة ←'; w.after(hn);
        }
        // جدول عريض (أعمدة كثيرة): يتمرر أفقياً بدل ما يضغط النص
        var cols = 0, r = t.rows && t.rows[0]; if (r) cols = r.cells.length;
        var wide = cols >= 3 && w.clientWidth < cols * 135;
        w.classList.toggle('ak-wide', wide);
      }
    };
    var more = function () {
      var m = /\/a-(\d+)/.exec(path); if (!m || !REL[m[1]]) return;
      var art = document.querySelector('#main-content article.article-body'); if (!art || document.getElementById('ak-more')) return;
      var ids = REL[m[1]], h = '<h2>اقرأ كمان</h2><div class="ak-more__l">';
      for (var i = 0; i < ids.length; i++) { var x = A[ids[i]]; h += '<a href="' + url(ids[i]) + '"><span><b>' + x[1] + '</b><small>' + x[2] + '</small></span><i aria-hidden="true">←</i></a>'; }
      var box = document.createElement('section'); box.id = 'ak-more'; box.setAttribute('aria-label', 'اقرأ كمان'); box.innerHTML = h + '</div>';
      art.after(box);
    };
    var run = function () {
      try {
        if (!document.body) return;
        if (!/blog-(index|single)/.test(document.body.className) && !document.querySelector('#main-content .blog-page, #main-content .blog-single')) return;
        if (html.getAttribute('data-akpw') !== 'tables') html.setAttribute('data-akpw', 'tables');
        put(); hideOld(); digits(); tables(); more();
      } catch (e) {}
    };
    var n = 0, mo = null;
    var watch = function () {
      // صفحة المدونة تحمّل مقالات زيادة لما تنزل (salla-infinite-scroll): نعيد الإخفاء والأرقام على الجديد
      if (mo || !window.MutationObserver) return; var mc = document.getElementById('main-content'); if (!mc) return;
      var q = 0; mo = new MutationObserver(function () { if (q) return; q = setTimeout(function () { q = 0; run(); }, 120); });
      mo.observe(mc, { childList: true, subtree: true });
    };
    var tick = function () { run(); watch(); if (++n < 30) setTimeout(tick, n < 8 ? 250 : 1000); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
    window.addEventListener('load', run);
    window.addEventListener('resize', function () { try { tables(); } catch (e) {} });
  } catch (e) {}
})();
/* الجولة 13 (شكوى المالك 20:15): لمس البطاقات والشرائط على الآيفون.
   السبب: الثيم الأصلي (app.css 47569131 نسخة 1.32.0) يحط على كل بطاقة:
   - `.s-product-card-entry .s-product-card-content::before` خلفية بنفسجي (#5C02FF → #8f6897) خلف المحتوى مع transition 1 ثانية،
   - `.s-product-card-entry:hover` ظل أخضر ليموني، و`salla-add-product-button:hover` تدرج ليموني ← بنفسجي.
   والآيفون يشغّل :hover أول ما الإصبع يلمس البطاقة وهو يسحب، فيطلع اللون ويثقل السحب. ومحركنا كمان يرفع البطاقة ويلوّن إطارها في :hover.
   الحل: نشيل البنفسجي نهائياً في كل العوالم، وما فيه أي تأثير hover على اللمس، وظل خفيف بس على الكمبيوتر بالماوس.
   وشرائط المنتجات: بدون تظليل نص ولا وميض لمس، والتمرير ما ينحجز. */
(function () {
  try {
    if (window.__AK_R13T__) return;
    window.__AK_R13T__ = 1;
    var P = 'html:not(#ak-t1) body:not(#ak-t2):not(#ak-t3)';
    var CARD = P + ' .s-product-card-entry';
    var STRIP = ':is(salla-products-slider,salla-slider.s-products-slider-slider,.s-products-slider-wrapper,.ak-products,.ak-allt,.ak-pkl,.ak-osl,.ak-strip)';
    var css = ''
      // البنفسجي حق الثيم: يروح في كل الحالات
      + CARD + ' .s-product-card-content::before{content:none!important;display:none!important;background:none!important;transition:none!important}'
      + CARD + ' salla-add-product-button:hover{background:none!important}'
      + CARD + ',' + CARD + ' .s-product-card-content{background-image:none!important}'
      // اللمس: بدون وميض، وبدون تظليل نص داخل البطاقات والشرائط، وبدون قائمة الضغط المطوّل على الصور والروابط
      + P + ' ' + STRIP + ',' + CARD + '{-webkit-user-select:none!important;user-select:none!important;-webkit-tap-highlight-color:transparent!important}'
      + P + ' ' + STRIP + ' :is(a,img),' + CARD + ' :is(a,img){-webkit-touch-callout:none!important;-webkit-tap-highlight-color:transparent!important;-webkit-user-drag:none}'
      // الشرائط الأفقية حقنا (مو Swiper): تمرير أصلي ناعم، والسناب «proximity» بدل «mandatory»
      + P + ' :is(.ak-pkl,.ak-osl,.ak-allt__strip,.ak-allt__nav){touch-action:pan-x pan-y!important;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;scroll-snap-type:x proximity!important}'
      // أجهزة اللمس: ولا أي تأثير hover/active/focus على البطاقة (لا لون ولا ظل ولا حركة ولا تكبير صورة)
      + '@media (hover:none),(pointer:coarse){'
      + CARD + ':is(:hover,:active,:focus,:focus-within){box-shadow:none!important;transform:none!important;background-image:none!important}'
      + P + ' .ak-worlds-root .ak-products .s-product-card-entry:is(:hover,:active,:focus-within){border-color:var(--ak-line)!important;transform:none!important}'
      + CARD + ':hover .s-product-card-image img,' + CARD + ' .s-product-card-image:hover,' + CARD + ' .s-product-card-image:hover img{transform:none!important;opacity:1!important}'
      + CARD + ' :is(a,img,.s-product-card-image,.s-product-card-content){transition:none!important}'
      + '}'
      // الكمبيوتر بالماوس: ظل خفيف بس (بدل الظل الليموني حق الثيم)
      + '@media (hover:hover) and (pointer:fine){' + CARD + ':hover{box-shadow:0 6px 18px -10px rgba(11,26,51,.22)!important}}';
    var st = document.createElement('style'); st.id = 'ak-r13t'; st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
  } catch (e) {}
})();
