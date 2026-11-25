/* ALKASSER LOOB — الجولة 14 (طلب المالك 22:29)
   نسخ البلياردو «cm» (أسماء بالسنتيمتر وسعر أقل 2%) معمولة لقوقل بس، فما تطلع للعميل داخل المتجر:
   ما تطلع في صفحات الأقسام، ولا الرئيسية (العوالم، «الأكثر طلباً»، شريط «كل الطاولات»)، ولا نتائج البحث
   (الصفحة والاقتراحات)، ولا «منتجات مشابهه»، ولا البكجات. صفحة المنتج نفسها تبقى مفتوحة (قوقل يزورها).
   القائمة: /home/claude/alkasser-plans/billiard-cm-duplicates.md */
(function () {
  try {
    if (window.__AK_R14H__) return;
    window.__AK_R14H__ = 1;
    var IDS = ['233452067', '1263427645', '31102471', '238222090', '2102502672', '1618439966', '1760080993', '101823298', '284867402'];
    if (!IDS.length) return;
    var D = document;
    var RX = new RegExp('/p(' + IDS.join('|') + ')(?:[/?#]|$)');
    var has = function (id) { return 'a[href$="/p' + id + '"],a[href*="/p' + id + '?"],a[href*="/p' + id + '#"]'; };
    var sel = [];
    IDS.forEach(function (id) {
      var a = has(id);
      sel.push(':is(custom-salla-product-card,.s-product-card-entry):has(' + a + ')');
      sel.push('.swiper-slide:has(' + a + ')');
      sel.push(':is(.s-search-product,.s-search-results li,salla-search li):has(' + a + ')');
    });
    var st = D.createElement('style'); st.id = 'ak-r14h';
    st.textContent = 'body:not(#ak-x) ' + sel.join(',body:not(#ak-x) ') + '{display:none!important}';
    (D.head || D.documentElement).appendChild(st);

    // السلايدرات: نشيل الشريحة نفسها عشان ما يبقى فراغ، ونحدّث Swiper
    var clean = function () {
      var as = D.querySelectorAll('a[href*="/p"]');
      for (var i = 0; i < as.length; i++) {
        var h = as[i].getAttribute('href') || '';
        if (!RX.test(h)) continue;
        var sl = as[i].closest('.swiper-slide');
        if (sl && sl.parentNode) {
          var sw = sl.closest('.swiper');
          sl.parentNode.removeChild(sl);
          try { if (sw && sw.swiper) sw.swiper.update(); } catch (e) {}
          continue;
        }
        var c = as[i].closest('custom-salla-product-card,.s-product-card-entry');
        if (c && c.style.display !== 'none') c.style.setProperty('display', 'none', 'important');
      }
    };
    var q = false, sch = function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; try { clean(); } catch (e) {} }); };
    var go = function () { clean(); try { new MutationObserver(sch).observe(D.body, { childList: true, subtree: true }); } catch (e) {} };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
