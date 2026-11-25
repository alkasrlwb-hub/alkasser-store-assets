/* ALKASSER LOOB — الجولة 9 (طلبات الاعتماد النهائي signoff-final.md)
   1) سلة السكوترات بألوان العالم + رقم السلة أحمر في رئيسية السكوترات
   2) منتج السكوتر: تبويبات حمراء/فحمية، ومربعات المواصفات والوصف غامقة بنص فاتح
   3) رئيسية المراجيح: منتج 112765573 (صورته عليها سعر) والحصان الدوار 1498445893 ما يطلعون في الصف (عرض بس)
   4) شريط شراء ثابت على الجوال (السعر + «أضف إلى السلة»، وفي المراجيح زر واتساب صغير)
   5) شرائح الكلمات (tags) تحت/فوق اسم المنتج تنخفي عن العميل (تبقى في الصفحة للـ SEO)
   6) صور البطاقات في صفحات الأقسام بارتفاع واحد (contain بدون قص) والبطاقات بنفس الطول
   7) الدراجات في عالم السكوترات: لو الصفحة عالمها moto نحفظ العالم عشان القائمة والسلة يمشون معها
   8) تمارا وتابي بإطار رفيع بلون العالم، وصندوق «تواصل معنا للتأكد» في المراجيح كريمي بإطار أخضر
   9) عدّاد البنر «01 / 03» ينشال */
(function () {
  try {
    if (window.__AK_R9__) return;
    window.__AK_R9__ = 1;
    var D = document, H = D.documentElement;
    var MOTO = { bg: '#0D0E10', card: '#15161A', card2: '#1C1D22', line: '#2A2C31', ink: '#D0D3D9', sub: '#9A9FA8', acc: '#E11D2E', bar: '#121316' };
    // [خلفية الشريط، خطه، النص، زر، نص الزر، إطار تمارا/تابي]
    var W = {
      tables: ['#FFFFFF', '#E1E8F2', '#0B1A33', '#22D3EE', '#06101F', '#22D3EE'],
      play: ['#FFFBF2', '#E2D3B0', '#0B2620', '#F2C94C', '#1F1A05', '#1E4A3E'],
      moto: [MOTO.bar, MOTO.line, '#FFFFFF', MOTO.acc, '#FFFFFF', MOTO.acc]
    };
    var HIDE_HOME = ['112765573', '1498445893'];
    var M = 'html[data-akpw="moto"] body:not(#ak-x):not(#ak-r9)';
    var P = M + '.product-single';
    var L = 'html[data-aklight] body:not(#ak-x):not(#ak-r9)';
    var css = ''
      // ---- 1) السلة في عالم السكوترات (data-akpw=moto ينحط من المحرر على صفحة السلة)
      + M + '.cart,' + M + '.cart .app-inner,' + M + '.cart #main-content{background:' + MOTO.bg + '!important;background-image:none!important}'
      + M + ' .main-nav-container.top-navbar{border-bottom:2px solid ' + MOTO.acc + '!important}'
      // صفحات أقسام السكوترات والدراجات: الخلفية فحمي (كانت قاعدة الثيم الكحلي تغلب)
      + M + '.product-index,' + M + '.product-index .app-inner,' + M + '.product-index #main-content{background:' + MOTO.bg + '!important;background-image:none!important}'
      // زر «للأعلى» العائم كان أصفر في السكوترات
      + ':is(html[data-akpw="moto"],html:has(.ak-worlds--moto)) body:not(#ak-x):not(#ak-r9) div.but>*{background:' + MOTO.acc + '!important;background-color:' + MOTO.acc + '!important;color:#fff!important;border-color:' + MOTO.acc + '!important}'
      + M + '.cart #main-content :is(h1,h2,h3,h4,p,span,label,b,strong,small,.title){color:#fff}'
      + M + '.cart #main-content .breadcrumbs :is(a,span,i){color:' + MOTO.sub + '!important}'
      + M + '.cart #main-content :is(.s-button-primary,button.btn--primary,.btn--primary,.cart-submit-wrap .s-button-btn,.akr-empty-cart a.akr-go){background:' + MOTO.acc + '!important;border-color:' + MOTO.acc + '!important;color:#fff!important;background-image:none!important}'
      + M + '.cart #main-content :is(.s-button-primary,.btn--primary) *{color:#fff!important}'
      + M + '.cart #main-content :is(.cart-item,.cart-sec>section,.cart-submit-wrap,form>section,.bg-white,.s-coupon,salla-cart-summary){background:' + MOTO.card + '!important;border-color:' + MOTO.line + '!important;color:' + MOTO.ink + '!important}'
      + M + '.cart #main-content .akr-empty-cart .akr-w a{background:' + MOTO.card + '!important;border-color:' + MOTO.line + '!important;color:#fff!important}'
      + M + '.cart footer.store-footer{background:' + MOTO.bar + '!important;border-top:3px solid ' + MOTO.acc + '!important}'
      + M + '.cart footer.store-footer :is(.store-footer__inner,>div){background:' + MOTO.bar + '!important;background-image:none!important}'
      // رقم السلة في الهيدر أحمر في كل صفحات السكوترات (الرئيسية والداخلية)
      + ':is(html[data-akpw="moto"],html:has(.ak-worlds--moto)) body:not(#ak-x):not(#ak-r9) .main-nav-container .s-cart-summary-count{background:' + MOTO.acc + '!important;color:#fff!important}'
      // ---- 2) منتج السكوتر: التبويبات والمربعات
      + P + ' .s-tabs-header-item{background:' + MOTO.card2 + '!important;border:1px solid ' + MOTO.line + '!important;color:' + MOTO.ink + '!important;border-radius:10px!important}'
      + P + ' .s-tabs-header-item.s-tabs-active{background:' + MOTO.acc + '!important;border-color:' + MOTO.acc + '!important;color:#fff!important}'
      + P + ' .s-tabs-header-item *{color:inherit!important}'
      + P + ' :is(.s-tabs-content,.s-tabs-content-wrapper,.s-tabs-content-item){background:' + MOTO.card + '!important;color:' + MOTO.ink + '!important;border-color:' + MOTO.line + '!important}'
      + P + ' .s-tabs-content-wrapper{border:1px solid ' + MOTO.line + '!important;border-radius:14px!important}'
      + P + ' .s-tabs-content :is(p,li,span,div,td,th,strong,b,h2,h3,h4,h5,em,small,article){color:' + MOTO.ink + '!important;background-color:transparent!important}'
      + P + ' .s-tabs-content :is(h2,h3,h4,strong,b){color:#fff!important}'
      + P + ' .s-tabs-content :is(table,td,th,tr){border-color:' + MOTO.line + '!important}'
      + P + ' .s-tabs-content a,' + P + ' .s-tabs-content-wrapper .link--primary{color:#FF5A66!important}'
      + P + ' .s-tabs-content-wrapper :is(.bg-white,.bg-gray-50,.bg-gray-100,[class*="bg-white"]){background:' + MOTO.card2 + '!important}'
      + P + ' :is(salla-metadata .s-metadata-box,salla-metadata .s-metadata-wrapper>div){background:' + MOTO.card + '!important;border:1px solid ' + MOTO.line + '!important;border-radius:14px!important;color:' + MOTO.ink + '!important}'
      + P + ' salla-metadata :is(h1,h2,h3,h4,b,strong,.s-metadata-title,label){color:#fff!important}'
      + P + ' salla-metadata :is(p,span,div,td,li,small,dd,dt){color:' + MOTO.ink + '!important;border-color:' + MOTO.line + '!important}'
      // ---- 8) تمارا وتابي: إطار رفيع بلون العالم (العوالم الثلاثة)
      + 'html[data-akpw] body.product-single salla-installment :is(tamara-widget,#tabbyPromo){border:1px solid var(--ak9-tt,#2A2C31)!important;box-shadow:none!important}'
      + L + '.product-single salla-installment :is(tamara-widget,#tabbyPromo){background:#FFFFFF!important}'
      + L + '.product-single salla-installment :is(tamara-widget,#tabbyPromo) *{color:inherit}'
      // صندوق «تواصل معنا للتأكد من توفر المنتج» في المراجيح: كريمي بإطار أخضر بدل الأخضر الغامق
      + 'html[data-aklight="play"] body:not(#ak-x):not(#ak-r9) #main-content #ak-wa{background:#FFF6E0!important;background-image:none!important;border:1.5px solid #1E4A3E!important;box-shadow:none!important}'
      + 'html[data-aklight="play"] body:not(#ak-x):not(#ak-r9) #main-content #ak-wa>div,html[data-aklight="play"] body:not(#ak-x):not(#ak-r9) #main-content #ak-wa>div *{color:#0B2620!important}'
      // ---- 5) شرائح الكلمات تنخفي عن العميل
      + 'body.product-single .product-tags{display:none!important}'
      // ---- 9) عدّاد البنر
      + '.ak-worlds-root .ak-slide__n{display:none!important}'
      // ---- 3) رئيسية المراجيح: احتياط لو المنتج انرسم قبل ما يتشال
      + '.ak-worlds--play .swiper-slide:has(a[href$="/p112765573"]),.ak-worlds--play .swiper-slide:has(a[href$="/p1498445893"]){display:none!important}'
      // ---- 6) صفحات الأقسام: الصورة مربعة بنفس الارتفاع (contain بدون قص) والبطاقات بنفس الطول
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry{height:100%!important;display:flex!important;flex-direction:column!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-image{flex:0 0 auto!important;width:100%!important;aspect-ratio:1/1!important;height:auto!important;min-height:0!important;max-height:none!important;overflow:hidden!important;background:#FFFFFF!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-image>a{display:block!important;width:100%!important;height:100%!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-image img.s-product-card-image-cover{width:100%!important;height:100%!important;object-fit:contain!important;object-position:50% 50%!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry:not([data-aksz]) .s-product-card-image img.s-product-card-image-cover{transform:none!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-content{flex:1 1 auto!important;display:flex!important;flex-direction:column!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-content-title{min-height:calc(2 * 1.5em)!important;line-height:1.5!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-content-title a{display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;overflow:hidden!important}'
      + 'body.product-index:not(#ak-x):not(#ak-r9) #main-content .s-product-card-entry .s-product-card-content-footer{margin-top:auto!important}'
      // ---- 4) شريط الشراء الثابت (جوال بس)
      + '#ak-buy{display:none}'
      + '@media (max-width:1023.98px){'
      + 'html[data-ak-buy] #ak-buy{display:flex}'
      + '#ak-buy{position:fixed;inset-inline:0;bottom:0;z-index:60;align-items:center;gap:10px;padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:var(--ak9-bg);border-top:1px solid var(--ak9-ln);box-shadow:0 -8px 22px rgba(0,0,0,.16);font-family:inherit;direction:rtl}'
      + '#ak-buy .ak9-p{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;line-height:1.2;color:var(--ak9-fg)}'
      + '#ak-buy .ak9-p small{font-size:11.5px;opacity:.75;color:var(--ak9-fg)}'
      + '#ak-buy .ak9-p b{font-size:19px;font-weight:800;color:var(--ak9-fg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;gap:4px}'
      + '#ak-buy .ak9-p b :is(i,span,svg){color:inherit!important;fill:currentColor;font-size:.9em}'
      + '#ak-buy .ak9-add{flex:0 0 auto;height:46px;padding-inline:20px;border:0;border-radius:12px;background:var(--ak9-btn);color:var(--ak9-on);font-weight:800;font-size:15px;font-family:inherit;cursor:pointer}'
      + '#ak-buy .ak9-add[disabled]{opacity:.55;cursor:not-allowed}'
      + '#ak-buy .ak9-wa{flex:0 0 auto;width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;border:1.5px solid #1E4A3E}'
      + '#ak-buy .ak9-wa svg{width:24px;height:24px;fill:#1E4A3E}'
      + 'html[data-ak-buy] body.product-single{padding-bottom:76px!important}'
      // الزر العائم (واتساب) يرتفع فوق الشريط بدل ما ينغطّى
      + 'html[data-ak-buy] .fixed-btm{transform:translateY(-70px)!important;transition:transform .2s ease}'
      + 'html[data-ak-buy][data-ak-foot] #ak-buy{display:none}'
      + 'html[data-ak-buy][data-ak-foot] .fixed-btm{transform:none!important}'
      + '}';
    var st = D.createElement('style'); st.id = 'ak-r9'; st.textContent = css;
    (D.head || H).appendChild(st);

    var world = function () {
      var pw = H.getAttribute('data-akpw'); if (pw) return pw;
      var r = D.querySelector('.ak-worlds-root .ak-worlds'); if (r) { var m = /ak-worlds--(tables|play|moto)/.exec(r.className); if (m) return m[1]; }
      try { var q = /[?&]world=(tables|play|moto)/.exec(location.search); if (q) return q[1]; var s = localStorage.getItem('ak-world'); if (s && W[s]) return s; } catch (e) {}
      return 'tables';
    };

    // 7) صفحة عالمها السكوترات (منها الدراجات): نحفظ العالم عشان القائمة الجانبية والسلة والواتساب
    var keepMoto = function () {
      var b = D.body; if (!b || H.getAttribute('data-akpw') !== 'moto') return;
      if (!b.classList.contains('product-single') && !b.classList.contains('product-index')) return;
      try { if (localStorage.getItem('ak-world') !== 'moto') localStorage.setItem('ak-world', 'moto'); } catch (e) {}
    };

    // 3) رئيسية المراجيح: نشيل الشريحة من السلايدر ونحدّث السلايدر
    var homeHide = function () {
      var root = D.querySelector('.ak-worlds--play'); if (!root) return;
      for (var i = 0; i < HIDE_HOME.length; i++) {
        var as = root.querySelectorAll('a[href$="/p' + HIDE_HOME[i] + '"]');
        for (var j = 0; j < as.length; j++) {
          var sl = as[j].closest('.swiper-slide'); if (!sl || !sl.parentNode) continue;
          var sw = sl.closest('.swiper');
          sl.parentNode.removeChild(sl);
          try { if (sw && sw.swiper) sw.swiper.update(); } catch (e) {}
        }
      }
    };

    // 4) شريط الشراء
    var bar = null, src = null, io = null, srcVis = true;
    var WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm5.8 14.1c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34l.52.01c.17 0 .39-.06.61.47.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46l-.41.48c-.14.13-.28.28-.12.55.16.27.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.14.45.2.52.32.06.11.06.66-.18 1.35z"/></svg>';
    var vis = function (e) { return !!(e && e.getClientRects().length); };
    var priceNode = function () {
      // الجولة 11: السعر فوق صار يتبع الخيار (ak-r11.js يعلّمه بـ data-ak-live)، فالشريط ياخذ منه سعر الحبة نفسه
      var lv = D.querySelector('#main-content .price-rate[data-ak-live]');
      if (lv) { var lp = lv.querySelector('.with-disc h4') || lv.querySelector('h2'); if (lp) return lp; }
      // الجولة 10: السعر اللي يتحدّث مع الخيار هو h2.total-price الظاهر في صندوق الشراء (مو سعر .price-rate فوق، هذا ثابت)
      var c = D.querySelectorAll('#main-content .sticky-product-bar h2.total-price, #main-content h2.total-price');
      for (var i = 0; i < c.length; i++) if (!c[i].closest('.navbar-details') && vis(c[i])) return c[i];
      return D.querySelector('#main-content .price-rate .with-disc h4, #main-content .price-rate h2, #main-content .sticky-product-bar .total-price h2, #main-content h2.total-price');
    };
    var syncBar = function () {
      if (!bar || !src) return;
      var p = priceNode(), pb = bar.querySelector('.ak9-p b');
      if (p) { var h = p.innerHTML; if (pb.__h !== h) { pb.__h = h; pb.innerHTML = h; } }
      var add = bar.querySelector('.ak9-add'), btn = src.querySelector('button');
      var off = !btn || btn.disabled || btn.getAttribute('disabled') !== null;
      if (add.disabled !== off) add.disabled = off;
      var t = btn ? (btn.textContent || '').replace(/\s+/g, ' ').trim() : '';
      var lb = off && t ? t.slice(0, 20) : 'أضف إلى السلة';
      if (add.textContent !== lb) add.textContent = lb;
    };
    var show = function () {
      if (!bar) return;
      if (!srcVis) H.setAttribute('data-ak-buy', '1'); else H.removeAttribute('data-ak-buy');
    };
    var buildBar = function () {
      var b = D.body; if (!b || !b.classList.contains('product-single')) return;
      // الزر الأصلي في صندوق الشراء (مو اللي داخل .navbar-details المخفي)
      var all = D.querySelectorAll('#main-content .sticky-product-bar salla-add-product-button'), s = null;
      for (var k = 0; k < all.length && !s; k++) if (!all[k].closest('.navbar-details')) s = all[k];
      if (!s) return;
      var w = world(), c = W[w] || W.tables;
      if (!bar) {
        bar = D.createElement('div'); bar.id = 'ak-buy'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'شراء سريع');
        bar.innerHTML = '<div class="ak9-p"><small>السعر</small><b></b></div><button type="button" class="ak9-add">أضف إلى السلة</button>';
        bar.querySelector('.ak9-add').addEventListener('click', function () {
          var btn = src && src.querySelector('button'); if (btn && !btn.disabled) btn.click();
        });
        b.appendChild(bar);
      }
      var v = ['bg', 'ln', 'fg', 'btn', 'on'];
      for (var i = 0; i < v.length; i++) if (bar.style.getPropertyValue('--ak9-' + v[i]) !== c[i]) bar.style.setProperty('--ak9-' + v[i], c[i]);
      // المراجيح: زر واتساب صغير بنفس رقم صندوق «تواصل معنا»
      if (w === 'play' && !bar.querySelector('.ak9-wa')) {
        var wa = D.querySelector('#ak-wa a[href*="wa.me"], #ak-wa a[href*="whatsapp"]');
        var num = ''; try { num = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.WA && window.AK_WORLDS_CONFIG.WA.play) || ''; } catch (e) {}
        var href = wa ? wa.getAttribute('href') : (num ? 'https://wa.me/' + num : '');
        if (href) {
          var a = D.createElement('a'); a.className = 'ak9-wa'; a.href = href; a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', 'تواصل معنا على الواتساب'); a.innerHTML = WA_SVG;
          bar.insertBefore(a, bar.querySelector('.ak9-add'));
        }
      }
      if (src !== s) {
        src = s;
        if (io) io.disconnect();
        if (window.IntersectionObserver) {
          io = new IntersectionObserver(function (es) { srcVis = es[es.length - 1].isIntersecting; show(); });
          io.observe(src);
        }
      }
      syncBar(); show();
    };

    var run = function () {
      try { keepMoto(); } catch (e) {}
      try { homeHide(); } catch (e) {}
      try { buildBar(); } catch (e) {}
      var c = W[world()]; if (c && H.style.getPropertyValue('--ak9-tt') !== c[5]) H.style.setProperty('--ak9-tt', c[5]);
    };
    var q = false, sch = function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; run(); }); };
    var go = function () {
      run(); try { new MutationObserver(sch).observe(D.body, { childList: true, subtree: true, characterData: true }); } catch (e) {}
      // الجولة 10: لما العميل يغيّر الخيار، نعيد قراءة السعر بعد ما سلة تحدّثه
      D.addEventListener('change', function (ev) { if (ev.target && ev.target.closest && ev.target.closest('salla-product-options')) { setTimeout(sch, 400); setTimeout(sch, 1500); } }, true);
    };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
    var n = 0, t = setInterval(function () { run(); if (++n > 30) clearInterval(t); }, 400);
  } catch (e) {}
})();
