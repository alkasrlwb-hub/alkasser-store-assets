/* ALKASSER LOOB — الجولة 15 (مراجعة العميل 28 نوفمبر: «التعليق» والفلاتر والعداد)
   1) لون العالم: كانت قواعد html:has(.ak-worlds--tables/play/moto) تخلي المتصفح يعيد حساب تنسيق الصفحة كلها
      مع كل بطاقة تنبني (تجمد 2 إلى 3.5 ثانية في الرئيسية على الجوال). tools/bundle.mjs يحوّلها وقت البناء إلى
      html.akw-tables / html.akw-play / html.akw-moto، وهنا نحط الكلاس على <html> حسب العالم الظاهر.
   2) صفحات الأقسام: عدد «N منتج» (شريط الترتيب والفلتر) وعنوان القسم يحسبون اللي يشوفه العميل بس،
      بدون نسخ البلياردو cm المخفية (ak-r14.js) وبعد فلتر المحرر (.ak-fhide). */
(function () {
  try {
    if (window.__AK_R15__) return;
    window.__AK_R15__ = 1;
    var D = document, H = D.documentElement, WS = ['tables', 'play', 'moto'];
    var el = null, cur = null;
    var worldOf = function (e) {
      if (!e) return '';
      for (var i = 0; i < WS.length; i++) if (e.classList.contains('ak-worlds--' + WS[i])) return WS[i];
      return '';
    };
    var setW = function (w) {
      if (w === cur) return;
      cur = w;
      for (var i = 0; i < WS.length; i++) {
        var on = WS[i] === w;
        if (H.classList.contains('akw-' + WS[i]) !== on) H.classList.toggle('akw-' + WS[i], on);
      }
    };
    var attrMO = null;
    var sync = function () {
      if (!el || !el.isConnected) {
        el = D.querySelector('.ak-worlds--tables,.ak-worlds--play,.ak-worlds--moto');
        if (el) {
          try { if (attrMO) attrMO.disconnect(); attrMO = new MutationObserver(function () { setW(worldOf(el)); }); attrMO.observe(el, { attributes: true, attributeFilter: ['class'] }); } catch (e) {}
        }
      }
      setW(worldOf(el));
    };

    // ---- 2) العداد
    var title0 = null;
    var count = function () {
      var b = D.body; if (!b || !b.classList.contains('product-index')) return;
      var main = D.getElementById('main-content'); if (!main) return;
      var cs = main.querySelectorAll('.s-product-card-entry'); if (!cs.length) return;
      var rx = window.__AK_CMRX__, cm = 0, real = 0, seen = [];
      for (var i = 0; i < cs.length; i++) {
        var c = cs[i], box = c.closest('custom-salla-product-card,salla-product-card') || c;
        if (seen.indexOf(box) > -1) continue; seen.push(box);
        var a = c.querySelector('a[href*="/p"]');
        if (c.closest('[data-akcm]') || (a && rx && rx.test(a.getAttribute('href') || ''))) cm++; else real++;
      }
      var nEl = D.querySelector('#akr-tools .akr-n');
      if (nEl && window.__AK_VISN__) { var n = window.__AK_VISN__(), t = n ? n + ' منتج' : 'ما فيه منتجات بهالاختيار'; if (nEl.textContent !== t) nEl.textContent = t; }
      if (!cm) return; // العنوان ما نلمسه إلا في الأقسام اللي فيها نسخ مخفية
      var h = D.getElementById('page-main-title'), sp = h && h.querySelector('span'); if (!sp) return;
      if (title0 === null) title0 = sp.textContent;
      var btn = D.querySelector('#main-content .s-infinite-scroll-btn');
      var done = !btn || btn.offsetParent === null || btn.disabled;
      var want = done ? String(real) : title0.replace(/\d+/, String(real));
      if (!done && /أكثر من/.test(title0) === false) want = title0;
      if (sp.textContent !== want) sp.textContent = want;
    };
    var ct = 0, schCount = function () { if (ct) return; ct = setTimeout(function () { ct = 0; try { count(); } catch (e) {} }, 300); };
    D.addEventListener('click', function (e) {
      var t = e.target; if (!t || !t.closest || !t.closest('#ak-filt button,#akr-tools button')) return;
      setTimeout(function () { try { count(); } catch (x) {} }, 0);
    });

    var go = function () {
      sync(); schCount();
      try { new MutationObserver(function () { sync(); schCount(); }).observe(D.body || H, { childList: true, subtree: true }); } catch (e) {}
    };
    sync();
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
