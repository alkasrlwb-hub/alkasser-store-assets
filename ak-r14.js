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
    var RX = new RegExp('/p(' + IDS.join('|') + ')(?:[/?#\\s]|$)'); // سلة أحياناً تحط مسافة آخر الرابط
    window.__AK_CMRX__ = RX;
    // الجولة 15: بدل قواعد :has() (كانت 27 قاعدة تعيد حساب الصفحة كلها مع كل بطاقة) نعلّم البطاقة نفسها بـ data-akcm من الجافاسكربت
    var BOX = 'custom-salla-product-card,.s-product-card-entry,.swiper-slide,.s-search-product,.s-search-results li,salla-search li';
    var st = D.createElement('style'); st.id = 'ak-r14h';
    st.textContent = 'html body:not(#ak-x):not(#ak-r9):not(#ak-cm1):not(#ak-cm2):not(#ak-cm3) [data-akcm]{display:none!important}';
    (D.head || D.documentElement).appendChild(st);
    var mark = function (a) {
      var h = a.getAttribute('href') || '';
      if (!RX.test(h)) return;
      var e = a.parentElement, up = 0;
      while (e && e !== D.body && up < 12) {
        if (e.matches(BOX)) { if (!e.hasAttribute('data-akcm')) e.setAttribute('data-akcm', '1'); if (e.matches('.swiper-slide,li')) break; }
        e = e.parentElement; up++;
      }
    };
    var scan = function (n) {
      if (!n || n.nodeType !== 1) return;
      if (n.tagName === 'A') { mark(n); return; }
      if (!n.querySelectorAll) return;
      var as = n.querySelectorAll('a[href*="/p"]');
      for (var i = 0; i < as.length; i++) mark(as[i]);
    };
    // السلايدرات: نشيل الشريحة نفسها عشان ما يبقى فراغ، ونحدّث Swiper
    var clean = function () {
      var ss = D.querySelectorAll('.swiper-slide[data-akcm]');
      for (var i = 0; i < ss.length; i++) {
        var sl = ss[i]; if (!sl.parentNode) continue;
        var sw = sl.closest('.swiper');
        sl.parentNode.removeChild(sl);
        try { if (sw && sw.swiper) sw.swiper.update(); } catch (e) {}
      }
    };
    // صفحة القسم: النسخ المخفية تاخذ أماكن في أول صفحة (15)، فنضغط «عرض المزيد» بنفسنا عشان الأصول كلها تبان (مرة وحدة لكل قائمة)
    var more = function () {
      if (!D.body || !D.body.classList.contains('product-index')) return;
      var ls = D.querySelectorAll('salla-products-list');
      for (var i = 0; i < ls.length; i++) {
        var l = ls[i], n = l.__akMore || 0;
        if (n >= 1) continue;
        var cs = l.querySelectorAll('custom-salla-product-card,.s-product-card-entry'), hid = 0;
        for (var j = 0; j < cs.length; j++) { var a = cs[j].querySelector('a[href*="/p"]'); if (a && RX.test(a.getAttribute('href') || '')) hid++; }
        if (!hid) continue;
        var b = l.querySelector('.s-infinite-scroll-btn') || (l.parentNode && l.parentNode.querySelector('.s-infinite-scroll-btn'));
        if (!b || b.offsetParent === null || b.disabled) continue;
        l.__akMore = 1;
        try { b.click(); } catch (e) {}
      }
    };
    var q = false, sch = function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; try { clean(); } catch (e) {} try { more(); } catch (e) {} }); };
    var onMut = function (rs) {
      for (var i = 0; i < rs.length; i++) {
        var r = rs[i];
        if (r.type === 'attributes') { if (r.target.tagName === 'A') mark(r.target); continue; }
        for (var j = 0; j < r.addedNodes.length; j++) scan(r.addedNodes[j]);
      }
      sch();
    };
    var go = function () { scan(D.body); clean(); try { more(); } catch (e) {} try { new MutationObserver(onMut).observe(D.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] }); } catch (e) {} };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
