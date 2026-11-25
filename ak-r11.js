/* ALKASSER LOOB — الجولة 11: السعر فوق في صفحة المنتج يتبع الخيار
   السبب: قالب الثيم يطبع السعر فوق (.price-rate h2) بدون الكلاس total-price، وسلة لما يتغيّر الخيار
   تحدّث بس .total-price (صندوق الشراء)، فالسعر فوق يبقى على سعر المنتج الأساسي (مثال EVA: 42 حتى مع 2.5 سم = 55).
   الحل: نسمع حدث سلة نفسه (product::price.updated) ونكتب السعر في العنصر اللي فوق.
   - سعر الحدث = سعر الوحدة × الكمية، فنقسمه على الكمية عشان فوق يبقى سعر الحبة.
   - نحط السعر في window.__AK_LIVE_PRICE__ عشان مربع التوصيل في المحرر (akPrice) ياخذه.
   - نعلّم .price-rate بـ data-ak-live عشان شريط الشراء (ak-r9.js) يقرأ منه.
   - نحدّث price حق salla-installment (تمارا وتابي) بسعر الطلب. */
(function () {
  try {
    if (window.__AK_R11__) return;
    window.__AK_R11__ = 1;
    var D = document;
    var NUM = /[0-9٠-٩][0-9٠-٩.,٫٬]*/;
    var fmt = function (n) { return (Math.round(n * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 }); };
    var num = function (s) {
      var m = NUM.exec(s || ''); if (!m) return 0;
      var t = m[0].replace(/[٠-٩]/g, function (c) { return String(c.charCodeAt(0) - 0x660); }).replace(/[,٬]/g, '').replace(/٫/g, '.');
      return parseFloat(t) || 0;
    };
    var isP = function () { return D.body && D.body.classList.contains('product-single'); };
    var top = function () {
      var ps = D.querySelectorAll('#main-content .price-rate');
      for (var i = 0; i < ps.length; i++) if (!ps[i].closest('.sticky-product-bar') && !ps[i].closest('.navbar-details')) return ps[i];
      return null;
    };
    var qty = function () {
      var c = D.querySelectorAll('#main-content form.product-form input[name="quantity"], #main-content form.product-form salla-quantity-input input');
      for (var i = 0; i < c.length; i++) {
        if (c[i].closest('.navbar-details')) continue;
        var v = parseInt(c[i].value, 10); if (v > 0) return v;
      }
      return 1;
    };
    // يغيّر الرقم بس في أول نص فيه رقم، فالأيقونة (sicon-sar) والتنسيق يبقون
    var setNum = function (el, n) {
      if (!el) return false;
      var s = fmt(n), w = D.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), t;
      while ((t = w.nextNode())) {
        if (NUM.test(t.nodeValue)) { var nv = t.nodeValue.replace(NUM, s); if (nv !== t.nodeValue) t.nodeValue = nv; return true; }
      }
      return false;
    };
    var mark = function () {
      var t = top(); if (t && !t.hasAttribute('data-ak-live')) t.setAttribute('data-ak-live', '1');
      return t;
    };
    var apply = function (res) {
      if (!isP()) return;
      var d = res && res.data; if (!d) return;
      var tot = +d.price; if (!(tot > 0)) return;
      var q = qty(), unit = tot / q;
      window.__AK_LIVE_PRICE__ = unit;
      var t = mark(); if (!t) return;
      var sale = t.querySelector('.with-disc h4');
      setNum(sale || t.querySelector('h2'), unit);
      if (sale) {
        // سعر قبل الخصم القديم: لو صار أقل من السعر الجديد أو يساويه نخفيه (ما فيه منتج حالياً فيه خصم وخيارات بأسعار مختلفة)
        var lt = t.querySelector('.line-through');
        if (lt) { var old = num(lt.textContent); lt.style.display = old > unit ? '' : 'none'; }
      }
      var ins = D.querySelectorAll('salla-installment');
      for (var i = 0; i < ins.length; i++) if (ins[i].getAttribute('price') !== String(tot)) ins[i].setAttribute('price', String(tot));
    };
    var n = 0, hook = function () {
      var S = window.salla;
      if (S && S.product && S.product.event && S.product.event.onPriceUpdated) {
        S.product.event.onPriceUpdated(apply);
        mark();
        return true;
      }
      return false;
    };
    if (!hook()) { var iv = setInterval(function () { if (hook() || ++n > 60) clearInterval(iv); }, 250); }
  } catch (e) {}
})();
