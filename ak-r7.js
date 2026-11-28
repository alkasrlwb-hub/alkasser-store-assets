/* ALKASSER LOOB — الجولة 7 (25 نوفمبر): طلبات لوحة العملاء الـ15
   - بحث ظاهر تحت الهيدر في كل الصفحات (يروح لصفحة بحث سلة /search?q=)
   - ترتيب وفلتر (السعر، المقاس) في صفحات الأقسام: يرتّب ويخفي البطاقات المحمّلة بـ CSS order/display بس، ما يلمس سلة
   - سطر «الدفع عند الاستلام» تحت السعر في صفحة المنتج (الرياض وجدة حسب الخطة)
   - السلة الفاضية: بدون بلوك «عروض المنتج» + زر «كمّل التسوق» وأزرار العوالم
   - بطاقات البلياردو: سطر يفرق اللون والجوخ (عرض بس، أسماء المنتجات ما تتغير)
   - صور البطاقات أخف: نسخة 480px بصيغة webp/avif من CDN سلة نفسه
   - الرئيسية أقصر: أقسام «ليش تختارنا» و«وش يناسبك» و«طاولة تقلب الجلسة» و«مميزات تهمك» تنشال من رئيسية رياضة وألعاب */
(function () {
  try {
    if (window.__AK_R7__) return;
    window.__AK_R7__ = 1;
    var D = document, html = D.documentElement;
    var path = location.pathname;
    var isCart = /\/cart\/?$/.test(path), isCheckout = /checkout/.test(path);
    var isCat = /\/c\d+\/?$/.test(path);
    var isSearch = /\/search\/?$/.test(path);

    // ---------- الشكل ----------
    var F = 'var(--l-fg,#FFFFFF)', S = 'var(--l-surf,#15161A)', LN = 'var(--l-line2,#3D4047)', AC = 'var(--l-acc,#E11D2E)', ON = 'var(--l-on,#FFFFFF)', SUB = 'var(--l-sub,#9A9FA8)';
    var css = ''
      // الرئيسية: قسم واحد لكل فكرة، والأقسام الطويلة تنشال (تمرير أقل وتحميل أسرع)
      + '.ak-worlds .ak-world>.ak-ksec:has(>.ak-why),.ak-worlds .ak-world>#ak-size,.ak-worlds .ak-world>.ak-ksec:has(>.ak-spot),.ak-worlds .ak-world>.ak-ksec:has(>.ak-stl){display:none!important}'
      // البحث
      + '#akr-search{display:block;padding-block:10px;padding-inline:16px;background:transparent}'
      + '#akr-search form{display:flex;align-items:center;gap:8px;max-width:680px;margin-inline:auto;background:' + S + ';border:1.5px solid ' + LN + ';border-radius:999px;padding-block:4px;padding-inline:16px 4px;box-shadow:0 2px 10px rgba(0,0,0,.06)}'
      + '#akr-search form:focus-within{border-color:' + AC + '}'
      + '#akr-search svg{flex:0 0 18px;width:18px;height:18px;color:' + SUB + '}'
      + '#akr-search input{flex:1 1 auto;min-width:0;border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important;color:' + F + '!important;font:inherit;font-size:15px;padding-block:8px;padding-inline:0;text-align:start}'
      + '#akr-search input::placeholder{color:' + SUB + ';opacity:1}'
      + '#akr-search button{flex:0 0 auto;border:0;border-radius:999px;background:' + AC + ';color:' + ON + ';font:inherit;font-size:14px;font-weight:700;padding-block:8px;padding-inline:18px;cursor:pointer}'
      // الترتيب والفلتر
      + '#akr-tools{margin-block:12px 4px;margin-inline:auto;max-width:1280px;padding-inline:16px;display:flex;flex-direction:column;gap:8px}'
      + '#akr-tools .akr-row{display:flex;align-items:center;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}'
      + '#akr-tools .akr-row::-webkit-scrollbar{display:none}'
      + '#akr-tools .akr-lb{flex:0 0 auto;font-size:13px;font-weight:700;color:' + SUB + ';min-width:46px}'
      + '#akr-tools .akr-c{flex:0 0 auto;border:1.5px solid ' + LN + ';background:' + S + ';color:' + F + ';border-radius:999px;font:inherit;font-size:13px;font-weight:600;padding-block:6px;padding-inline:14px;cursor:pointer;white-space:nowrap}'
      + '#akr-tools .akr-c.on{background:' + AC + ';border-color:' + AC + ';color:' + ON + '}'
      + '#akr-tools .akr-n{font-size:12px;color:' + SUB + '}'
      + '.akr-hide{display:none!important}'
      // الجولة 15: قاعدة r9 (display:flex!important بثلاث معرّفات) كانت تلغي إخفاء الفلتر، فهذي أقوى منها (5 معرّفات)
      + 'html body:not(#ak-x):not(#ak-r9):not(#ak-f1):not(#ak-f2):not(#ak-f3) :is(.akr-hide,.ak-fhide){display:none!important}'
      + '.akf-sec.akr-empty,.akf-chip.akr-empty{display:none!important}'
      + 'body.akr-tools-on .flex.items-center:has(>#product-filter){display:none!important}'
      // سطر اللون والجوخ في بطاقات البلياردو
      + '.akr-var{display:flex;align-items:center;gap:6px;margin-block:4px 2px;font-size:12.5px;font-weight:700;line-height:1.4;color:var(--l-link,' + F + ')}'
      + '.akr-var i{display:inline-block;width:12px;height:12px;border-radius:50%;border:1px solid rgba(0,0,0,.18);flex:0 0 12px}'
      // الدفع عند الاستلام تحت السعر
      + '.akr-cod{display:flex;align-items:flex-start;gap:8px;margin-block:8px 4px;padding-block:8px;padding-inline:12px;border-radius:12px;background:var(--l-surf2,#1C1D21);border:1px solid ' + LN + ';color:' + F + ';font-size:14px;line-height:1.55}'
      + '.akr-cod svg{flex:0 0 20px;width:20px;height:20px;margin-block-start:1px;color:' + AC + '}'
      + '.akr-cod b{font-weight:800}.akr-cod small{display:block;font-size:12.5px;color:' + SUB + '}'
      // السلة الفاضية
      + '.cart-sec:has(.no-content-placeholder) salla-offer,.cart-sec:has(.no-content-placeholder) .s-offer-wrapper{display:none!important}'
      + '.akr-empty-cart{display:flex;flex-direction:column;align-items:center;gap:10px;margin-block-start:12px;width:100%}'
      + '.akr-empty-cart a{display:inline-flex;justify-content:center;align-items:center;min-width:220px;border-radius:999px;font-weight:700;font-size:15px;padding-block:11px;padding-inline:22px;text-decoration:none}'
      + '.akr-empty-cart .akr-main{background:' + AC + ';color:' + ON + '}'
      + '.akr-empty-cart .akr-w{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}'
      + '.akr-empty-cart .akr-w a{min-width:0;font-size:13.5px;padding-block:8px;padding-inline:14px;border:1.5px solid ' + LN + ';color:' + F + ';background:' + S + '}'
      + '.cart-sec .no-content-placeholder>a.btn{display:none!important}'
      // بطاقة «عندك أطفال؟» في العالم الفاتح: العنوان كان أبيض على فاتح
      + 'html[data-aklight] .ak-worlds-root .ak-other b{color:var(--l-fg)!important}'
      // بطاقات المنتجات على الكمبيوتر: الصورة مربعة وكبيرة، بدون فراغ بين السعر والزر
      + '@media (min-width:640px){body:not(#ak-x) #main-content .s-product-card-entry .s-product-card-image{flex:0 0 auto!important;aspect-ratio:1/1!important;height:auto!important}'
      + 'body:not(#ak-x) #main-content .s-product-card-entry .s-product-card-image>a{height:100%!important}'
      + 'body:not(#ak-x) #main-content .s-product-card-entry .s-product-card-content{flex:1 1 auto!important}'
      + 'body:not(#ak-x) #main-content .s-product-card-entry .s-product-card-content-sub{margin-top:6px!important}'
      + 'body:not(#ak-x) #main-content .s-product-card-entry .s-product-card-content-footer{margin-top:auto!important;padding-top:10px}}'
      + '.akr-nonum{display:none!important}'
      // الرئيسية: بطاقة «خلّ عيالك يستانسون» تنشال (مفتاح العوالم فوق يكفي، الفحص الشامل بند 12)
      + '.ak-worlds-root .ak-ksec:has(>.ak-other),.ak-worlds-root .ak-other{display:none!important}';
    var st = D.createElement('style'); st.id = 'akr-style'; st.textContent = css;
    (D.head || html).appendChild(st);

    var onReady = function (fn) { if (D.readyState !== 'loading') fn(); else D.addEventListener('DOMContentLoaded', fn); };
    var ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
    var ICON_CASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/></svg>';

    // ---------- 1) البحث الظاهر ----------
    var addSearch = function () {
      if (isCart || isCheckout || D.getElementById('akr-search')) return !!D.getElementById('akr-search');
      var hdr = D.querySelector('.main-nav-container');
      if (!hdr) return false;
      var box = D.createElement('div'); box.id = 'akr-search';
      var q = '';
      try { if (isSearch) q = new URLSearchParams(location.search).get('q') || ''; } catch (e) {}
      box.innerHTML = '<form action="/search" method="get" role="search">' + ICON_SEARCH
        + '<input type="search" name="q" autocomplete="off" enterkeyhint="search" aria-label="بحث في المتجر" placeholder="وش تدوّر عليه؟ بلياردو، مرجيحة، سكوتر…">'
        + '<button type="submit">بحث</button></form>';
      box.querySelector('input').value = q;
      box.querySelector('form').addEventListener('submit', function (e) { var inp = box.querySelector('input'), v = inp.value.trim(); if (!v) { e.preventDefault(); inp.focus(); return; } inp.value = normQ(v); });
      hdr.parentNode.insertBefore(box, hdr.nextSibling);
      return true;
    };

    // ---------- 2) صور البطاقات أخف ----------
    var CDN = /^https:\/\/(cdn\.files\.salla\.network|cdn\.salla\.sa)\/(?!cdn-cgi\/)(.+)$/;
    var light = function (u) { var m = CDN.exec(u || ''); return m ? 'https://' + m[1] + '/cdn-cgi/image/fit=scale-down,width=480,format=auto/' + m[2] : null; };
    var slimImg = function (img) {
      if (img.getAttribute('data-akr')) return;
      img.setAttribute('data-akr', '1');
      var ds = img.getAttribute('data-src'), loaded = img.getAttribute('data-ll-status') === 'loaded' || (img.complete && img.naturalWidth > 0 && !ds);
      var nd = light(ds); if (nd) img.setAttribute('data-src', nd);
      if (!loaded) { var ns = light(img.getAttribute('src')); if (ns) img.setAttribute('src', ns); }
      img.addEventListener('error', function () { if (ds && img.src !== ds) { img.setAttribute('data-src', ds); img.src = ds; } }, { once: true });
    };

    // ---------- 3) سطر اللون والجوخ (البلياردو) ----------
    // 2036349930 (بلياردو 9 قدم القديم) انحذف 25 نوفمبر، فشلنا شارته
    var VAR_BY_ID = {};
    var dot = function (t) {
      var o = '';
      if (/أسود/.test(t)) o += '<i style="background:#14161A"></i>';
      else if (/خشب/.test(t)) o += '<i style="background:#8A5A35"></i>';
      if (/أخضر/.test(t)) o += '<i style="background:#1E7B45"></i>';
      else if (/أزرق/.test(t)) o += '<i style="background:#1F5FBF"></i>';
      return o;
    };
    var markVar = function (card) {
      if (card.getAttribute('data-akrv')) return;
      var img = card.querySelector('img'), a = card.querySelector('a[href*="/p"]');
      var alt = (img && img.getAttribute('alt')) || '';
      if (!/بلياردو/.test(alt) || !/قدم/.test(alt)) return;
      card.setAttribute('data-akrv', '1');
      var m = a && /\/p(\d+)/.exec(a.getAttribute('href') || ''), id = m && m[1];
      var v = (id && VAR_BY_ID[id]) || (alt.indexOf('|') > -1 ? alt.split('|').pop().trim() : '');
      if (!v) return;
      var t = card.querySelector('.s-product-card-content-title');
      if (!t || (t.textContent || '').indexOf(v) > -1) return;
      var el = D.createElement('div'); el.className = 'akr-var'; el.innerHTML = dot(v) + '<span></span>'; el.lastChild.textContent = v;
      t.parentNode.insertBefore(el, t.nextSibling);
    };

    // ---------- 4) الترتيب والفلتر في صفحات الأقسام ----------
    var state = { sort: 0, price: 0, size: 0 };
    var PRICE = [['الكل', 0, 1e9], ['أقل من 1000', 0, 999.99], ['من 1000 إلى 2500', 1000, 2500], ['فوق 2500', 2500.01, 1e9]];
    var SORT = ['الأنسب', 'الأقل سعر', 'الأعلى سعر'];
    var sizes = [];
    var priceOf = function (card) {
      var p = card.querySelector('.s-product-card-price, .s-product-card-sale-price, [class*="price"]');
      var t = (p ? p.textContent : '').replace(/[٠-٩]/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(c); }).replace(/,/g, '');
      var ns = (t.match(/\d+(\.\d+)?/g) || []).map(Number).filter(function (n) { return n > 0; });
      return ns.length ? Math.min.apply(null, ns) : 0;
    };
    var sizeOf = function (card) {
      var img = card.querySelector('img'), t = ((img && img.getAttribute('alt')) || '') + ' ' + ((card.querySelector('.s-product-card-content-title') || {}).textContent || '');
      var m = /(\d{1,2})\s*قدم/.exec(t); return m ? m[1] : '';
    };
    var cards = function () { return D.querySelectorAll('#main-content .s-product-card-entry'); };
    // الجولة 15: العداد يحسب اللي يشوفه العميل بس (بدون نسخ cm المخفية، وبدون اللي أخفاها فلتر المحرر)
    var isCm = function (c) { if (c.closest('[data-akcm]')) return true; var a = c.querySelector('a[href*="/p"]'), rx = window.__AK_CMRX__; return !!(a && rx && rx.test(a.getAttribute('href') || '')); };
    var visN = function () {
      var cs = D.querySelectorAll('#main-content .s-product-card-entry'), n = 0, seen = [];
      for (var i = 0; i < cs.length; i++) {
        var c = cs[i], box = c.closest('custom-salla-product-card,salla-product-card') || c;
        if (seen.indexOf(box) > -1) continue; seen.push(box);
        if (box.closest('.akr-hide,.ak-fhide') || c.classList.contains('akr-hide') || isCm(c)) continue;
        n++;
      }
      return n;
    };
    window.__AK_VISN__ = visN;
    var apply = function () {
      var cs = cards(), seen = {};
      for (var i = 0; i < cs.length; i++) {
        var c = cs[i];
        if (!c.hasAttribute('data-akrp')) { c.setAttribute('data-akrp', priceOf(c)); c.setAttribute('data-akrs', sizeOf(c)); c.setAttribute('data-akri', i); }
        var pr = +c.getAttribute('data-akrp'), sz = c.getAttribute('data-akrs');
        if (sz) seen[sz] = 1;
        var band = PRICE[state.price], okP = !state.price || (pr >= band[1] && pr <= band[2]);
        var okS = !state.size || sz === sizes[state.size - 1];
        c.classList.toggle('akr-hide', !(okP && okS));
        var host = c, up = 0;
        while (up < 3 && host.parentElement && !/grid|flex/.test(getComputedStyle(host.parentElement).display)) { host = host.parentElement; up++; }
        if (!/grid|flex/.test(getComputedStyle(host.parentElement || host).display)) host = c;
        if (host !== c) host.classList.toggle('akr-hide', !(okP && okS));
        host.style.order = state.sort === 1 ? String(Math.round(pr)) : state.sort === 2 ? String(1e6 - Math.round(pr)) : '';
      }
      var ss = Object.keys(seen).sort(function (a, b) { return a - b; });
      if (ss.join() !== sizes.join()) { sizes = ss; drawSizes(); }
      // أقسام الصفحة المتصلة اللي ما بقى فيها شي
      var secs = D.querySelectorAll('#ak-flow .akf-sec[data-ld]'), vis = 0;
      for (var k = 0; k < secs.length; k++) {
        var all = secs[k].querySelectorAll('.s-product-card-entry'), shown = secs[k].querySelectorAll('.s-product-card-entry:not(.akr-hide)').length;
        var empty = (state.price || state.size) && all.length && !shown;
        secs[k].classList.toggle('akr-empty', !!empty);
        var chip = D.querySelector('#ak-flow .akf-chip[data-i="' + secs[k].getAttribute('data-i') + '"]'); if (chip) chip.classList.toggle('akr-empty', !!empty);
      }
      var n = visN();
      var nEl = D.querySelector('#akr-tools .akr-n'); if (nEl) nEl.textContent = n ? n + ' منتج' : 'ما فيه منتجات بهالاختيار';
      vis = n; return vis;
    };
    var row = function (label, items, key, on) {
      var r = D.createElement('div'); r.className = 'akr-row'; r.setAttribute('data-k', key);
      var lb = D.createElement('span'); lb.className = 'akr-lb'; lb.textContent = label; r.appendChild(lb);
      items.forEach(function (t, i) { var b = D.createElement('button'); b.type = 'button'; b.className = 'akr-c' + (i === on ? ' on' : ''); b.textContent = t; b.setAttribute('data-v', i); r.appendChild(b); });
      return r;
    };
    var drawSizes = function () {
      var tools = D.getElementById('akr-tools'); if (!tools) return;
      var old = tools.querySelector('[data-k="size"]'); if (old) old.remove();
      if (sizes.length < 2) { state.size = 0; return; }
      if (state.size > sizes.length) state.size = 0;
      var r = row('المقاس', ['الكل'].concat(sizes.map(function (s) { return s + ' قدم'; })), 'size', state.size);
      tools.insertBefore(r, tools.querySelector('.akr-n'));
    };
    var addTools = function () {
      if (!isCat || D.getElementById('akr-tools')) return !!D.getElementById('akr-tools');
      var flow = D.getElementById('ak-flow');
      var native = D.querySelector('#main-content salla-products-list');
      if (!flow && !native) return false;
      if (!flow && D.querySelectorAll('#main-content .s-product-card-entry').length < 2) return false;
      var tools = D.createElement('div'); tools.id = 'akr-tools';
      tools.appendChild(row('ترتيب', SORT, 'sort', 0));
      tools.appendChild(row('السعر', PRICE.map(function (p) { return p[0]; }), 'price', 0));
      var n = D.createElement('span'); n.className = 'akr-n'; tools.appendChild(n);
      tools.addEventListener('click', function (e) {
        var b = e.target.closest('.akr-c'); if (!b) return;
        var r = b.parentNode, k = r.getAttribute('data-k'), v = +b.getAttribute('data-v');
        state[k] = v;
        var bs = r.querySelectorAll('.akr-c'); for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', i === v);
        apply();
      });
      if (flow) flow.parentNode.insertBefore(tools, flow);
      else { var box = native.closest('.products-filter, [class*="products-fil"]') || native; box.parentNode.insertBefore(tools, box); }
      D.body.classList.add('akr-tools-on');
      apply();
      return true;
    };

    // ---------- 5) الدفع عند الاستلام تحت السعر ----------
    // يلقى السعر الظاهر (مو الشريط الثابت) ويرجّع العنصر اللي السطر يجي بعده على طول
    var codAnchor = function () {
      var ps = D.querySelectorAll('#main-content .price-timer-rate, #main-content .price-rate');
      for (var i = 0; i < ps.length; i++) {
        var stk = ps[i].closest('[class*="sticky"]');
        if (ps[i].getBoundingClientRect().height > 0 && (!stk || stk === D.body || stk === html)) {
          var p = ps[i];
          return p.classList.contains('price-rate') && p.parentElement.classList.contains('price-timer-rate') ? p.parentElement : p;
        }
      }
      return null;
    };
    // السطر لازم يكون تحت السعر على طول، حتى لو ak-light.js نقل المواصفات والتبويبات بعد السعر
    var keepCod = function () {
      var el = D.querySelector('.akr-cod'); if (!el) return;
      var a = codAnchor(); if (a && a.nextElementSibling !== el) a.parentNode.insertBefore(el, a.nextSibling);
    };
    var addCod = function () {
      if (!D.body || !D.body.classList.contains('product-single')) return true;
      if (D.querySelector('.akr-cod')) { keepCod(); return true; }
      var anchor = codAnchor();
      if (!anchor) return false;
      var el = D.createElement('div'); el.className = 'akr-cod';
      el.innerHTML = ICON_CASH + '<div><b>الدفع عند الاستلام متاح في الرياض وجدة</b><small>باقي المدن: الدفع أونلاين (مدى، Apple Pay، تابي، تمارا)</small></div>';
      anchor.parentNode.insertBefore(el, anchor.nextSibling);
      return true;
    };

    // ---------- 6) السلة الفاضية ----------
    var C = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.data) || {};
    var fixCart = function () {
      if (!isCart) return true;
      var ph = D.querySelector('.cart-sec .no-content-placeholder');
      if (!ph) return false;
      if (ph.querySelector('.akr-empty-cart')) return true;
      var p = ph.querySelector('p'); if (p) p.textContent = 'سلتك فاضية';
      var box = D.createElement('div'); box.className = 'akr-empty-cart';
      box.innerHTML = '<a class="akr-main" href="/">كمّل التسوق</a><div class="akr-w">'
        + '<a href="/?world=tables">رياضة وألعاب</a><a href="/?world=play">المراجيح والروضات</a><a href="/?world=moto">السكوترات والدبابات</a></div>';
      ph.appendChild(box);
      return true;
    };

    // ---------- التشغيل ----------
    // أرقام الأقسام (05 · …) انشالت بقرار سابق، وبقى رقم في قسم الكوفيهات
    var noNums = function () {
      var sp = D.querySelectorAll('.ak-worlds-root .ak-ksec span:not(.akr-nonum)');
      for (var i = 0; i < sp.length; i++) {
        var e = sp[i];
        if (e.children.length || !/^\s*\d{2}\s*$/.test(e.textContent)) continue;
        e.classList.add('akr-nonum');
        var n = e.nextSibling;
        if (n && n.nodeType === 3) n.textContent = n.textContent.replace(/^\s*[·•\-–]\s*/, '');
      }
    };
    // ---------- 7) رقم الواتساب حسب العالم من أول لحظة (القائمة الجانبية والزر العائم وأي رابط) ----------
    var WA = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.WA) || { tables: '966598060796', play: '966598060796', moto: '966567886993' };
    var worldNow = function () {
      try {
        if (D.body && D.body.classList.contains('index')) {
          var q = /[?&]world=(tables|play|moto)/.exec(location.search); if (q) return q[1];
          var r = D.querySelector('.ak-worlds-root .ak-worlds'); if (r) { var m = /ak-worlds--(tables|play|moto)/.exec(r.className); if (m) return m[1]; }
        }
        var pw = html.getAttribute('data-akpw'); if (pw && WA[pw]) return pw;
        var lw = localStorage.getItem('ak-world'); if (lw && WA[lw]) return lw;
      } catch (e) {}
      return 'tables';
    };
    var fixWa = function (a) {
      var num = WA[worldNow()] || WA.tables, h = a.getAttribute('href') || '';
      var nh = h.replace(/(wa\.me\/)\+?\d+/, '$1' + num).replace(/([?&]phone=)\+?\d+/, '$1' + num);
      if (nh !== h) a.setAttribute('href', nh);
    };
    var waSweep = function () {
      var as = D.querySelectorAll('.akd-wa, .fixed-btm a[href*="wa.me/"], .fixed-btm a[href*="whatsapp.com/send"]');
      for (var i = 0; i < as.length; i++) fixWa(as[i]);
    };
    D.addEventListener('click', function (e) {
      var a = e.target && e.target.closest && e.target.closest('a[href*="wa.me/"], a[href*="whatsapp.com/send"]');
      if (a && !a.closest('.ak-worlds-root, #ak-ship, #ak-wa, #ak-wa-cart')) fixWa(a);
    }, true);

    // ---------- 8) أيقونة البحث في الهيدر تروح لشريط البحث الظاهر (بحث صفحة سلة يلقى «4 في 1» و«سيكل») ----------
    D.addEventListener('click', function (e) {
      var b = e.target && e.target.closest && e.target.closest('.main-nav-container .header-btn, .main-nav-container [class*="search"]');
      if (!b || b.closest('#akr-search') || !/search/i.test(b.innerHTML + ' ' + b.className)) return;
      var inp = D.querySelector('#akr-search input'); if (!inp) return;
      e.preventDefault(); e.stopPropagation(); inp.focus(); inp.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, true);
    var SYN = [[/سياكل|سيكل|سيكلات/g, 'دراجة'], [/4\s*في\s*1|٤\s*في\s*١|4\s*\*\s*1|4in1/gi, '4 في 1']];
    var normQ = function (v) { for (var i = 0; i < SYN.length; i++) v = v.replace(SYN[i][0], SYN[i][1]); return v; };

    // ---------- 9) «cm» تصير «سم» في نصوصنا ----------
    var cmFix = function () {
      var r = D.querySelectorAll('.ak-worlds-root .ak-qz, .ak-worlds-root .ak-size, #ak-flow, .akr-var');
      for (var i = 0; i < r.length; i++) {
        var w = D.createTreeWalker(r[i], NodeFilter.SHOW_TEXT, null), n;
        while ((n = w.nextNode())) if (/\bcm\b/i.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/\bcm\b/gi, 'سم');
      }
    };

    var sweep = function () {
      noNums(); waSweep(); cmFix();
      var im = D.querySelectorAll('.s-product-card-entry img:not([data-akr])');
      for (var i = 0; i < im.length; i++) slimImg(im[i]);
      var cs = D.querySelectorAll('.s-product-card-entry:not([data-akrv])');
      for (var j = 0; j < cs.length; j++) markVar(cs[j]);
    };
    onReady(function () {
      var tries = 0;
      var tick = function () {
        tries++;
        var a = addSearch(), b = isCat ? addTools() : true, c = addCod(), d = fixCart();
        sweep();
        if (!(a && b && c && d) && tries < 80) setTimeout(tick, 250);
      };
      tick();
      var pend = 0;
      new MutationObserver(function () {
        if (pend) return; pend = 1;
        requestAnimationFrame(function () {
          pend = 0; sweep();
          if (isCat) { if (!D.getElementById('akr-tools')) addTools(); else apply(); }
          if (D.body.classList.contains('product-single')) addCod();
          if (!D.getElementById('akr-search')) addSearch();
        });
      }).observe(D.body, { childList: true, subtree: true });
    });
  } catch (e) {}
})();
