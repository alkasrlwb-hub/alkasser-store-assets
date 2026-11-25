/* ALKASSER LOOB — الجولة 10 (المتابعة بعد الاعتماد، signoff-final.md › المراجعة الثانية)
   1) تنبيه «تمت الإضافة للسلة» (salla-add-product-toast) في عالم السكوترات: فحمي وأحمر بدل الأزرق
   2) منتج 112765573 و1498445893 (صورهم عليها سعر) ما يطلعون في صفحات الأقسام ولا في «منتجات مشابهه» (عرض بس، بياناتهم ما تغيّرت)
   3) المراجيح: الواتساب العائم ينخفي لما شريط الشراء (وفيه زر واتساب) ظاهر، ويرجع لما الشريط يختفي */
(function () {
  try {
    if (window.__AK_R10__) return;
    window.__AK_R10__ = 1;
    var D = document, H = D.documentElement;
    var HIDE = ['112765573', '1498445893'];
    var MW = ':is(html[data-akpw="moto"],html:has(.ak-worlds--moto)) body:not(#ak-x):not(#ak-r10) salla-add-product-toast.s-add-product-toast';
    var A = '#E11D2E', BG = '#15161A', LN = '#2A2C31', INK = '#D0D3D9', SUB = '#9A9FA8';
    var cardSel = function (id) { return 'custom-salla-product-card:has(a[href$="/p' + id + '"])'; };
    var css = ''
      // ---- 1) التنبيه
      + MW + '{background:' + BG + '!important;background-image:none!important;color:#fff!important;border:1px solid ' + LN + '!important;border-top:3px solid ' + A + '!important}'
      + MW + ' .s-add-product-toast__progress{background:' + LN + '!important}'
      + MW + ' .s-add-product-toast__progress-bar{background:' + A + '!important}'
      + MW + ' .s-add-product-toast__divider{background:' + LN + '!important}'
      + MW + ' :is(.s-add-product-toast__title,.s-add-product-toast__name,.s-add-product-toast__price,.s-add-product-toast__price *){color:#fff!important}'
      + MW + ' :is(.s-add-product-toast__options,.s-add-product-toast__options *,.s-add-product-toast__price-original){color:' + SUB + '!important}'
      + MW + ' .s-add-product-toast__show-more{color:#FF5A66!important}'
      + MW + ' .s-add-product-toast__close,' + MW + ' .s-add-product-toast__close i{color:' + SUB + '!important}'
      + MW + ' .s-add-product-toast__image{border-color:' + LN + '!important}'
      + MW + ' .s-add-product-toast__actions button.s-button-solid{background:' + A + '!important;border-color:' + A + '!important;color:#fff!important}'
      + MW + ' .s-add-product-toast__actions button.s-button-solid *{color:#fff!important}'
      + MW + ' .s-add-product-toast__actions button.s-button-outline{background:transparent!important;border-color:' + INK + '!important;color:#fff!important}'
      + MW + ' .s-add-product-toast__actions button.s-button-outline *{color:#fff!important}'
      // ---- 2) إخفاء المنتجين (صفحات الأقسام، و«منتجات مشابهه» داخل صفحة المنتج)
      + HIDE.map(function (id) { return 'body.product-index #main-content ' + cardSel(id) + ',body.product-single salla-products-slider .swiper-slide:has(a[href$="/p' + id + '"])'; }).join(',') + '{display:none!important}'
      // ---- 3) واتساب واحد في المراجيح
      + '@media (max-width:1023.98px){html[data-ak-buy][data-ak-buywa]:not([data-ak-foot]) body .fixed-btm{display:none!important}}';
    var st = D.createElement('style'); st.id = 'ak-r10'; st.textContent = css;
    (D.head || H).appendChild(st);

    // «منتجات مشابهه»: نشيل الشريحة نفسها عشان السلايدر ما يخلّي فراغ
    var hideRelated = function () {
      var b = D.body; if (!b || !b.classList.contains('product-single')) return;
      for (var i = 0; i < HIDE.length; i++) {
        var as = D.querySelectorAll('salla-products-slider a[href$="/p' + HIDE[i] + '"]');
        for (var j = 0; j < as.length; j++) {
          var sl = as[j].closest('.swiper-slide'); if (!sl || !sl.parentNode) continue;
          var sw = sl.closest('.swiper');
          sl.parentNode.removeChild(sl);
          try { if (sw && sw.swiper) sw.swiper.update(); } catch (e) {}
        }
      }
    };
    // علامة على html لما شريط الشراء فيه زر واتساب (المراجيح)
    var markWa = function () {
      var has = !!D.querySelector('#ak-buy .ak9-wa');
      if (has && !H.hasAttribute('data-ak-buywa')) H.setAttribute('data-ak-buywa', '1');
      else if (!has && H.hasAttribute('data-ak-buywa')) H.removeAttribute('data-ak-buywa');
    };
    var run = function () { try { hideRelated(); } catch (e) {} try { markWa(); } catch (e) {} };
    var q = false, sch = function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; run(); }); };
    var go = function () { run(); try { new MutationObserver(sch).observe(D.body, { childList: true, subtree: true }); } catch (e) {} };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
