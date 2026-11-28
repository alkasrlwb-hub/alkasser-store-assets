/* ALKASSER LOOB — الجولة 16 (28 نوفمبر)
   1) البحث وقوائم الأقسام: الأثاث المكتبي وطاولات الاجتماعات والشاي والطعام والديكور ما تطلع في عوالم المتجر
      (رياضة وألعاب، المراجيح والروضات، السكوترات). وفي صفحة البحث يطلع للعميل منتجات عالمه بس
      (طاولات الأطفال تتبع عالم المراجيح والروضات)، ولو عالمه ما فيه شي بهالكلمة نعرض باقي العوالم (بدون الأثاث).
      الإخفاء بالكود بس (كلاس .ak-wx)، المنتجات نفسها باقية في سلة وصفحاتها تفتح بالرابط، وأقسام الأثاث نفسها تعرضها عادي.
      التصنيف من بيانات بطاقة سلة نفسها (product.category.name)، فأي منتج جديد في هالأقسام يتطبق عليه.
   2) صفحة البحث تحمّل باقي الصفحات بنفسها لما يكون فيه مخفي، والعنوان «أكثر من 15» يصير عدد الظاهر بالضبط (ak-r15.js).
   3) قسم البلياردو: صف «المقاس» كان مكرر (لوحة الترتيب فوق + شرائح المحرر تحت)، فنخفي شرائح المحرر لما لوحة الترتيب فيها المقاس.
   4) السلة: قائمة سؤال الدور كانت تعرض نص الشرح بدل «اختر» وينقص من آخره.
   5) أخطاء الكونسول «reading 'ar.trans'» من بطاقة الثيم (product-card.js): البطاقة تشتغل قبل ما تنحمّل ترجمات سلة،
      فننتظر الترجمات قبل ما تكمل (نفس النتيجة، بدون خطأ). */
(function () {
  try {
    if (window.__AK_R16__) return;
    window.__AK_R16__ = 1;
    var D = document, H = D.documentElement;

    // ---------- 5) حارس الترجمات لبطاقة الثيم ----------
    var guardCard = function () {
      try {
        var C = window.customElements && customElements.get('custom-salla-product-card');
        if (!C || C.prototype.__akLang) return !!C;
        var orig = C.prototype.onReady; if (typeof orig !== 'function') return true;
        C.prototype.__akLang = 1;
        C.prototype.onReady = function () {
          var self = this, args = arguments;
          var ok = function () { return window.salla && salla.lang && salla.lang.messages; };
          if (ok()) return orig.apply(self, args);
          var n = 0, t = setInterval(function () { if (ok() || ++n > 100) { clearInterval(t); try { orig.apply(self, args); } catch (e) {} } }, 100);
        };
        return true;
      } catch (e) { return true; }
    };
    if (!guardCard() && window.customElements && customElements.whenDefined) customElements.whenDefined('custom-salla-product-card').then(guardCard);

    var st = D.createElement('style'); st.id = 'ak-r16';
    st.textContent = 'html body:not(#ak-x):not(#ak-r9):not(#ak-w1):not(#ak-w2):not(#ak-w3) .ak-wx{display:none!important}'
      + 'html body.ak-szdup:not(#ak-r16) #ak-filt.ak-chips--f{display:none!important}'
      + '#ak-wx-none{margin:18px auto;max-width:560px;padding:18px 16px;border-radius:14px;text-align:center;font-size:15px;line-height:1.8;background:var(--l-surf,#15161A);border:1px solid var(--l-line,#2A2C31);color:var(--l-fg,#FFFFFF)}'
      + '#ak-wx-none a{font-weight:800;color:var(--l-link,#22D3EE);text-decoration:underline}';
    (D.head || H).appendChild(st);

    var path = location.pathname;
    var isSearch = /\/search\/?$/.test(path);
    var isCat = /\/c\d+\/?$/.test(path);

    // ---------- 1) العالم لكل قسم (بالاسم من بيانات البطاقة) ----------
    var FURN = /أثاث|الأثاث|مكتب|كراسي الطعام|طاولات وكراسي|الديكور|أشجار الزينة/;
    var SHARED = /الملاعب|كرة القدم|أرضيات|الأرضيات/; // في عالمين (الرياضة والمراجيح)، قرار المالك
    var MOTO = /سكوتر|دباب|تكتوك|الدراجات الهوائية|دراجات هوائية/;
    var PLAY = /حدائق|مراجيح|مرجيح|ترامبولين|نطيط|الروضات|رياض الأطفال|المدارس|توازن|كرسي دوار|كرسي هزاز|زحاليق|سيارات الأطفال/;
    var TABLES = /طاولات الألعاب|بلياردو|هوكي|تنس|فرفيرة|4 في 1|لياقة|السيور|الدراجات الثابتة|الكارديو|الهوم جيم|البنشات|الأوزان|الدمبلات|الملاكمة|إكسسوارات/;
    var worldOfCat = function (n) {
      if (!n) return '';
      if (FURN.test(n)) return 'furn';
      if (SHARED.test(n)) return 'shared';
      if (MOTO.test(n)) return 'moto';
      if (PLAY.test(n)) return 'play';
      if (TABLES.test(n)) return 'tables';
      return '';
    };
    var curWorld = function () {
      try {
        var q = /[?&]world=(tables|play|moto)/.exec(location.search); if (q) return q[1];
        var pw = H.getAttribute('data-akpw'); if (pw) return pw;
        var s = localStorage.getItem('ak-world'); if (s === 'tables' || s === 'play' || s === 'moto') return s;
      } catch (e) {}
      return 'tables';
    };
    // قسم الأثاث نفسه (أو أي قسم اسمه أثاث) يعرض منتجاته عادي
    var pageIsFurn = function () {
      var h = D.getElementById('page-main-title') || D.querySelector('#main-content h1');
      return FURN.test((h && h.textContent) || '') || /أثاث|الأثاث|طاولات-وكراسي|الديكور/.test(decodeURIComponent(path));
    };
    var catOf = function (c) {
      var p = c.product; if (!p && c.getAttribute) { try { p = JSON.parse(c.getAttribute('product') || 'null'); } catch (e) {} }
      return (p && p.category && p.category.name) || '';
    };

    var KIDS = /أطفال|اطفال|روض|مدرس|مدارس/;
    var searchQ = function () { try { return decodeURIComponent((/[?&]q=([^&]*)/.exec(location.search) || [, ''])[1].replace(/\+/g, ' ')); } catch (e) { return ''; } };
    var noneMsg = function (show) {
      var el = D.getElementById('ak-wx-none');
      if (!show) { if (el) el.remove(); return; }
      if (el) return;
      var list = D.querySelector('#main-content salla-products-list'); if (!list) return;
      el = D.createElement('div'); el.id = 'ak-wx-none';
      el.innerHTML = 'ما لقينا منتجات بهالكلمة. جرّب كلمة ثانية (بلياردو، مرجيحة، سكوتر) أو <a href="https://wa.me/' + (((window.AK_WORLDS_CONFIG || {}).WA || {})[curWorld()] || '966598060796') + '" target="_blank" rel="noopener">كلّمنا على الواتساب</a>.';
      list.parentNode.insertBefore(el, list);
    };

    var loads = 0, lastLoad = 0;
    var apply = function () {
      if (!D.body) return;
      if (!(isSearch || (isCat && D.body.classList.contains('product-index')))) return;
      if (isCat && pageIsFurn()) return;
      var cs = D.querySelectorAll('#main-content custom-salla-product-card, #main-content salla-product-card');
      if (!cs.length) return;
      var w = curWorld(), info = [], has = false, hidden = 0;
      // الجولة 17: بحث عن أطفال/روضة/مدرسة يعرض منتجات المراجيح والروضات (طاولات الأطفال) حتى لو العميل في عالم الطاولات
      if (isSearch && w === 'tables' && KIDS.test(searchQ())) w = 'play';
      for (var i = 0; i < cs.length; i++) {
        var k = worldOfCat(catOf(cs[i]));
        info.push(k);
        if (k === w || (k === 'shared' && w !== 'moto')) has = true;
      }
      for (var j = 0; j < cs.length; j++) {
        var kk = info[j], hide = false;
        if (kk === 'furn') hide = true;
        else if (isSearch && has && kk && kk !== w && !(kk === 'shared' && w !== 'moto')) hide = true;
        if (cs[j].classList.contains('ak-wx') !== hide) cs[j].classList.toggle('ak-wx', hide);
        if (hide) hidden++;
      }
      // 2) صفحة البحث: لو فيه مخفي (أثاث أو عالم ثاني أو نسخ cm) نحمّل الصفحة اللي بعدها بنفسنا
      var btn = D.querySelector('#main-content .s-infinite-scroll-btn');
      var more = btn && btn.offsetParent !== null && !btn.disabled && !btn.classList.contains('s-button-loading');
      var anyHidden = hidden || D.querySelector('#main-content [data-akcm]');
      // الجولة 17: نحمّل باقي الصفحات دايم في البحث (عشان العنوان يكون الرقم الحقيقي مو «أكثر من 15»)
      if (isSearch && more && loads < 6) {
        var wait = 1200 - (Date.now() - lastLoad);
        if (wait <= 0) { loads++; lastLoad = Date.now(); try { btn.click(); } catch (e) {} setTimeout(run, 1300); }
        else setTimeout(run, wait + 50);
      }
      if (isSearch) {
        var vis = window.__AK_VISN__ ? window.__AK_VISN__() : 0;
        noneMsg(!more && hidden && !vis);
      }
    };

    // ---------- 3) فلتر المقاس المكرر ----------
    var szDup = function () {
      if (!D.body) return;
      var dup = !!(D.querySelector('#akr-tools [data-k="size"]') && D.getElementById('ak-filt'));
      if (D.body.classList.contains('ak-szdup') !== dup) D.body.classList.toggle('ak-szdup', dup);
    };

    // ---------- 4) سؤال الدور في السلة ----------
    var floorQ = function () {
      var ss = D.querySelectorAll('select[name^="options["]:not([data-ak16])');
      for (var i = 0; i < ss.length; i++) {
        var s = ss[i], o = s.options[0];
        if (!o || o.value !== '' || !/الطاولات ثقيلة|الدور/.test(s.textContent || '')) continue;
        s.setAttribute('data-ak16', '1');
        if (/ثقيلة/.test(o.text)) o.text = 'اختر الدور';
        s.style.width = '100%'; s.style.maxWidth = '100%';
      }
    };

    var q = 0, run = function () { if (q) return; q = setTimeout(function () { q = 0; try { apply(); } catch (e) {} try { szDup(); } catch (e) {} try { floorQ(); } catch (e) {} }, 120); };
    var go = function () {
      run();
      try { new MutationObserver(run).observe(D.body, { childList: true, subtree: true }); } catch (e) {}
      var n = 0, t = setInterval(function () { run(); if (++n > 20) clearInterval(t); }, 700);
    };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
