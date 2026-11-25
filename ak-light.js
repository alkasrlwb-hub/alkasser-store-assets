/* ALKASSER LOOB — الثيم الفاتح لعالمي «رياضة وألعاب» و«المراجيح والروضات» (قرار المالك 25 نوفمبر 03:33) + ترتيب صفحة المنتج.
   السكوترات تبقى غامقة. يتحمّل آخر شي عشان يغلب قواعد المحرر القديمة. */
(function () {
  try {
    if (window.__AK_LIGHT__) return;
    window.__AK_LIGHT__ = 1;
    var L = {
      // [خلفية، سطح، سطح ثاني، خط، خط ثاني، نص، نص ثانوي، باهت، تمييز، نص على التمييز، سعر/روابط]
      tables: ['#F4F7FB', '#FFFFFF', '#EEF3F9', '#E1E8F2', '#C9D5E6', '#0B1A33', '#24375A', '#55667F', '#22D3EE', '#06101F', '#0E7490'],
      play: ['#FFFBF2', '#FFFFFF', '#FFF6E0', '#EFE6D2', '#E2D3B0', '#0B2620', '#1E4A3E', '#5B7468', '#F2C94C', '#1F1A05', '#0B2620']
    };
    var html = document.documentElement;
    var world = function () {
      var r = document.querySelector('.ak-worlds-root .ak-worlds');
      if (r) { var m = /ak-worlds--(tables|play|moto)/.exec(r.className); if (m) return m[1]; }
      var pw = html.getAttribute('data-akpw'); if (pw) return pw;
      try { var q = /[?&]world=(tables|play|moto)/.exec(location.search); if (q) return q[1]; var s = localStorage.getItem('ak-world'); if (s) return s; } catch (e) {}
      return 'tables';
    };
    var V = function (w) {
      var p = L[w]; var k = ['bg', 'surf', 'surf2', 'line', 'line2', 'fg', 'ink', 'sub', 'acc', 'on', 'link'], o = '';
      for (var i = 0; i < k.length; i++) o += '--l-' + k[i] + ':' + p[i] + ';';
      return o;
    };
    var H = 'html[data-aklight]:not(#ak-x)';
    var B = H + ' body:not(#ak-x):not(#ak-y)';
    var css = ''
      + 'html[data-aklight="tables"]{' + V('tables') + '}html[data-aklight="play"]{' + V('play') + '}'
      // الخلفية والنص
      + H + ',' + B + ',' + B + ' .app-inner,' + B + ' main,' + B + ' #main-content{background:var(--l-bg)!important;background-color:var(--l-bg)!important;color:var(--l-fg)!important}'
      + B + ' #main-content :is(h1,h2,h3,h4,h5,.section-title,.title,.s-block__title,.s-slider-block__title h2){color:var(--l-fg)!important}'
      + B + ' #main-content :is(p,label,li,small,.s-filters-label){color:var(--l-ink)!important}'
      + B + ' .breadcrumbs,' + B + ' .breadcrumbs :is(a,span,i){color:var(--l-sub)!important}'
      // الهيدر
      + B + ' .main-nav-container.top-navbar,' + B + ' .main-nav-container .inner{background:#FFFFFF!important;box-shadow:0 2px 12px rgba(11,26,51,.08)!important}'
      + B + ' .main-nav-container.top-navbar{border-bottom:2px solid var(--l-acc)!important}'
      + B + ' .main-nav-container .inner :is(a,button,i,span,svg,.sicon-menu,.header-btn){color:var(--l-fg)!important;fill:currentColor}'
      + B + ' .main-nav-container .inner .s-cart-summary-count,' + B + ' .main-nav-container .inner .s-cart-summary-count *{background:var(--l-acc)!important;color:var(--l-on)!important}'
      // الفوتر
      + B + ' footer.store-footer,' + B + ' footer.store-footer .store-footer__inner,' + B + ' footer.store-footer > div{background:var(--l-surf2)!important;background-image:none!important;box-shadow:none!important}'
      + B + ' footer.store-footer{border-top:3px solid var(--l-acc)!important}'
      + B + ' footer.store-footer :is(p,a,span,h2,h3,h4,li,i,div,small,b){color:var(--l-ink)!important}'
      + B + ' footer.store-footer :is(h2,h3,h4,b){color:var(--l-fg)!important}'
      // الشرائح الفرعية في صفحة القسم
      + B + ' #main-content salla-slider.sub-categories .text-parent{background:var(--l-surf)!important;border:1px solid var(--l-line2)!important}'
      + B + ' #main-content salla-slider.sub-categories .title{color:var(--l-fg)!important}'
      // صفحة المنتج
      + B + '.product-single h1,' + B + ' .product-single h1{color:var(--l-fg)!important}'
      + B + ' .product-entry__sub-title{color:var(--l-sub)!important}'
      + B + ' .price-timer-rate :is(h4,.total-price,.price,span,b){color:var(--l-link)!important}'
      + B + ' #ak-ship,' + B + ' #ak-wa > a,' + B + ' #ak-pw-box,' + B + ' .ak-ship-box{background:var(--l-surf)!important;background-image:none!important;border:1px solid var(--l-line2)!important;box-shadow:0 6px 18px -10px rgba(11,26,51,.18)!important}'
      + B + ' #ak-ship :is(b,strong,h3,h4){color:var(--l-fg)!important}'
      + B + ' #ak-ship :is(span,small,p,div,li){color:var(--l-ink)!important}'
      + B + ' #ak-wa > a,' + B + ' #ak-wa > a *{color:var(--l-fg)!important}'
      + B + ' salla-metadata .s-metadata-box,' + B + ' form.product-form section,' + B + ' salla-installment > div{background:var(--l-surf)!important;border:1px solid var(--l-line)!important;border-radius:14px!important;color:var(--l-fg)!important}'
      + B + ' salla-metadata :is(h2,h3,b,strong,dt){color:var(--l-fg)!important}' + B + ' salla-metadata :is(span,dd,p,li){color:var(--l-ink)!important}'
      + B + ' form.product-form :is(label,span,p,h4,b){color:var(--l-fg)!important}'
      + B + ' form.product-form :is(input,textarea,select){background:#fff!important;color:var(--l-fg)!important;border-color:var(--l-line2)!important}'
      // زرّا «إضافة ملاحظة» و«إرفاق ملف»: خلفية فاتحة ونص غامق واضح (كانت غامق على غامق)
      + B + ' form.product-form .btn-tab{background:var(--l-surf2)!important;background-image:none!important;border:1px solid var(--l-line2)!important;color:var(--l-fg)!important;border-radius:10px!important;font-weight:700}'
      + B + ' form.product-form .btn-tab :is(span,i,b,svg){color:var(--l-fg)!important;fill:currentColor}'
      + B + ' form.product-form .btn-tab:is(:hover,:focus-visible,.is-active,[aria-expanded="true"]){background:var(--l-surf)!important;border-color:var(--l-acc)!important}'
      // التبويبات: النشط بلون التمييز، الباقي سطح بحدود
      + B + ' salla-tabs .s-tabs{background:transparent!important}'
      + B + ' salla-tabs .s-tabs-header{display:flex!important;gap:8px!important;flex-wrap:wrap;background:transparent!important;border:0!important;padding:0!important;margin:0 0 12px!important}'
      + B + ' salla-tabs .s-tabs-header-item{flex:1 1 auto;min-height:42px;display:flex!important;align-items:center;justify-content:center;padding:0 14px!important;border-radius:999px!important;background:var(--l-surf)!important;border:1px solid var(--l-line2)!important;color:var(--l-ink)!important;font-weight:800!important;font-size:14px!important;box-shadow:none!important}'
      + B + ' salla-tabs .s-tabs-header-item *{color:inherit!important}'
      + B + ' salla-tabs .s-tabs-header-item.s-tabs-active{background:var(--l-acc)!important;border-color:var(--l-acc)!important;color:var(--l-on)!important}'
      + B + ' salla-tabs .s-tabs-header-item::after,' + B + ' salla-tabs .s-tabs-header-item::before{display:none!important}'
      + B + ' salla-tabs .s-tabs-content-wrapper,' + B + ' salla-tabs .s-tabs-content{background:transparent!important}'
      // بطاقة الوصف
      + B + ' salla-tabs .product__description{background:var(--l-surf)!important;border:1px solid var(--l-line)!important;border-radius:16px!important;padding:16px 18px!important;color:var(--l-ink)!important}'
      + B + ' salla-tabs .product__description :is(p,li,span){color:var(--l-ink)!important;line-height:1.85!important}'
      + B + ' salla-tabs .product__description :is(h2,h3,h4,strong,b){color:var(--l-fg)!important}'
      + B + ' salla-tabs .product__description article{position:relative;opacity:1!important;-webkit-mask-image:none!important;mask-image:none!important;max-height:none;filter:none!important}'
      + B + ' salla-tabs .product__description article *{opacity:1!important;-webkit-text-fill-color:currentColor!important}'
      + B + ' salla-tabs .product__description article.ak-clip{max-height:330px;overflow:hidden}'
      + B + ' salla-tabs .product__description article.ak-clip::after{content:"";position:absolute;inset:auto 0 0 0;height:96px;background:linear-gradient(180deg,rgba(255,255,255,0),var(--l-surf) 85%);pointer-events:none}'
      + B + ' salla-tabs .product__description article::before,' + B + ' salla-tabs .product__description article::after{border:0!important}'
      + B + ' salla-tabs .product__description a.link--primary{display:flex!important;align-items:center;justify-content:center;width:100%;min-height:44px;margin-top:10px!important;border-radius:10px;background:var(--l-surf2)!important;border:1px solid var(--l-line2);color:var(--l-fg)!important;font-weight:800;text-decoration:none!important}'
      + B + ' salla-comments,' + B + ' salla-comments *{color:var(--l-fg)}'
      // صفحة المنتج: مسافات ثابتة 16–24 بكسل وما فيه فراغ كبير
      + B + ' .product-details .left .main-content > *{margin-top:0!important}'
      + B + ' .product-details .left .main-content > *:not(salla-hook):not(salla-cashback-banner){margin-bottom:16px!important}'
      + B + ' .product-details .main-content{min-height:0!important;height:auto!important}'
      + B + ' .product-details > salla-tabs{margin-top:0!important}'
      // القائمة الجانبية
      + H + ' #ak-dr .akd-p{background:#FFFFFF!important;color:var(--l-fg)!important}'
      + H + ' #ak-dr :is(.akd-r,.akd-h b,.akd-l){color:var(--l-fg)!important}' + H + ' #ak-dr .akd-s{color:var(--l-ink)!important}'
      + H + ' #ak-dr :is(.akd-r,.akd-h,.akd-ls){border-color:var(--l-line)!important}'
      + H + ' #ak-dr :is(.akd-open,.akd-s.all,.akd-r.cur,.akd-s.cur){color:var(--l-link)!important}'
      + H + ' #ak-dr .akd-w{color:var(--l-ink)!important;border-color:var(--l-line2)!important}'
      + H + ' #ak-dr .akd-x{background:var(--l-surf2)!important;color:var(--l-fg)!important}';
    var st = document.createElement('style'); st.id = 'ak-light-css'; st.textContent = css;
    var put = function () { (document.head || document.documentElement).appendChild(st); };
    put();

    // صفحة المنتج: المعرض ← الاسم والسعر ← المواصفات والتبويبات ← الشراء ← التوصيل ← التقسيط
    var order = function () {
      var b = document.body; if (!b || !b.classList.contains('product-single')) return;
      var mc = document.querySelector('.product-details .left .main-content'); if (!mc || mc.getAttribute('data-ako')) return;
      var tabs = document.querySelector('.product-details > salla-tabs, salla-tabs.salla-taps');
      var form = mc.querySelector('form.product-form');
      if (!tabs || !form || !tabs.querySelector('.s-tabs-header-item')) return;
      mc.setAttribute('data-ako', '1');
      var meta = mc.querySelector('salla-metadata');
      var anchor = mc.querySelector('.price-timer-rate');
      var after = anchor; var nx = anchor && anchor.nextElementSibling;
      if (nx && /رقم الموديل/.test(nx.textContent || '')) after = nx;
      if (after) {
        if (meta) { after.after(meta); after = meta; }
        after.after(tabs);
        after = tabs;
        var cmp = document.getElementById('ak-q4c') || document.querySelector('.ak-cmp, [data-ak="compare"]');
        if (cmp) after.after(cmp);
      }
      // التوصيل والواتساب والتقسيط بعد أزرار الشراء
      var tail = ['#ak-ship', '#ak-wa', 'salla-installment'];
      var ref = form;
      for (var i = 0; i < tail.length; i++) { var el = mc.querySelector(tail[i]); if (el) { ref.after(el); ref = el; } }
    };
    var clip = function () {
      var a = document.querySelector('salla-tabs .product__description article');
      if (!a || a.getAttribute('data-akc')) return;
      a.setAttribute('data-akc', '1');
      if (a.scrollHeight > 420) {
        a.classList.add('ak-clip');
        var more = document.querySelector('salla-tabs .product__description a.link--primary');
        var btn = more || document.createElement('a');
        if (!more) { btn.className = 'link--primary inline-block mt-2'; btn.href = '#'; a.after(btn); }
        btn.textContent = 'اقرأ الوصف كامل';
        btn.addEventListener('click', function (e) { e.preventDefault(); e.stopImmediatePropagation(); var open = a.classList.toggle('ak-clip'); btn.textContent = open ? 'اقرأ الوصف كامل' : 'إخفاء'; }, true);
      }
    };
    var n = 0;
    var tick = function () {
      try {
        var w = world();
        if (L[w]) { if (html.getAttribute('data-aklight') !== w) html.setAttribute('data-aklight', w); }
        else if (html.hasAttribute('data-aklight')) html.removeAttribute('data-aklight');
        if (st.parentNode && st !== st.parentNode.lastElementChild && document.head) put();
        order(); clip();
      } catch (e) {}
      n++;
      if (n < 40) setTimeout(tick, n < 10 ? 300 : 1000); else setTimeout(tick, 800);
    };
    tick();
  } catch (e) {}
})();
