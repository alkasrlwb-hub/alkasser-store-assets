/* ALKASSER LOOB — الجولة 12 (طلب المالك 25 نوفمبر 18:12)
   1) رئيسية «رياضة وألعاب»: قسم «كل الطاولات» تحت «الأكثر طلباً» داخل قسم «طاولات الألعاب».
      الترتيب: تنس طاولة ← فرفيرة ← هوكي ← بلياردو. كل نوع له عنوان صغير وصف أفقي يتمرر بالجوال،
      بنفس بطاقة العالم المعتمدة (.ak-products). المنتجات من سلة نفسها (salla-products-list بالقسم)،
      فالمخفي والمحذوف ما يطلع. كل صف ما ينحمّل إلا لما يقرب من الشاشة (IntersectionObserver).
   2) احتياط: أي بطاقة «مميزة/ترويجية» من الثيم (تدرج أخضر-بنفسجي على .s-product-card-entry) ما تبان في أي عالم.
   الحارس __AK_R12__ والستايل #ak-r12 (أسماء جديدة، مو مستخدمة في المحرر ولا الحزمة). */
(function () {
  try {
    if (window.__AK_R12__) return;
    window.__AK_R12__ = 1;
    var D = document, H = D.documentElement;
    var pre = location.pathname.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';
    var G = [
      { id: 1303174661, t: 'تنس طاولة', s: 'مقاس دولي، تنطوي وبعجلات', u: '/table-tennis-tables/c1303174661' },
      { id: 1767250951, t: 'فرفيرة', s: 'للعيال والشباب', u: '/foosball-tables/c1767250951' },
      { id: 353917441, t: 'هوكي هوائي', s: 'بعداد أهداف إلكتروني', u: '/air-hockey-tables/c353917441' },
      { id: 993213184, t: 'بلياردو', s: '7 و8 و9 قدم مع الأدوات', u: '/billiard-tables/c993213184' }
    ];
    var R = '.ak-worlds-root .ak-worlds--tables .ak-products .ak-allt';
    var css = ''
      + R + '{margin-top:30px;padding-top:22px;border-top:1px solid var(--ak-line,#E1E8F2)}'
      + R + ' .ak-allt__h{display:flex;flex-direction:column;gap:2px;margin-bottom:14px}'
      + R + ' .ak-allt__h h3{margin:0;font-size:20px;font-weight:900;line-height:1.4;color:var(--ak-fg)}'
      + R + ' .ak-allt__h small{font-size:12.5px;color:var(--ak-sub)}'
      + R + ' .ak-allt__nav{display:flex;flex-wrap:nowrap;gap:6px;margin:8px 0 4px;padding:0 0 2px;overflow-x:auto;scrollbar-width:none}'
      + R + ' .ak-allt__nav::-webkit-scrollbar{display:none}'
      + R + ' .ak-allt__nav a{flex:none;display:inline-flex;align-items:center;min-height:34px;padding:0 11px;border-radius:999px;border:1px solid var(--ak-line2,#C9D5E6);background:var(--ak-card,#fff);color:var(--ak-fg);font-size:12.5px;font-weight:800;text-decoration:none;white-space:nowrap}'
      + R + ' .ak-allt__g{scroll-margin-top:120px}'
      + R + ' .ak-allt__g+.ak-allt__g{margin-top:22px}'
      + R + ' .ak-allt__g .ak-phead{margin-bottom:8px}'
      + R + ' .ak-allt__g .ak-phead b{display:inline-flex;align-items:center;gap:8px;font-size:16px}'
      + R + ' .ak-allt__g .ak-phead b::before{content:"";width:4px;height:18px;border-radius:2px;background:var(--ak-accent,#22D3EE)}'
      + R + ' .ak-allt__g .ak-phead em{font-style:normal;font-size:12px;font-weight:600;color:var(--ak-sub)}'
      + R + ' .ak-allt__row{min-height:300px}'
      + R + ' .ak-allt__row.is-done{min-height:0}'
      // صف أفقي: بطاقتين تقريباً في الجوال، 3 في التابلت، 4 في الكمبيوتر. نفس الارتفاع لكل البطاقات
      + 'body:not(#ak-r12) ' + R + ' .ak-allt__row .s-products-list-wrapper,body:not(#ak-r12) ' + R + ' .ak-allt__row salla-products-list>div:not([class]){display:grid!important;grid-template-columns:none!important;grid-auto-flow:column!important;grid-auto-columns:calc(50% - 18px)!important;align-items:stretch;gap:10px!important;overflow-x:auto!important;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:2px 0 8px!important}'
      + 'body:not(#ak-r12) ' + R + ' .ak-allt__row .s-products-list-wrapper::-webkit-scrollbar{display:none}'
      + 'body:not(#ak-r12) ' + R + ' .ak-allt__row .s-products-list-wrapper>*{scroll-snap-align:start}'
      + '@media(min-width:760px){body:not(#ak-r12) ' + R + ' .ak-allt__row .s-products-list-wrapper{grid-auto-columns:calc(33.333% - 8px)!important}}'
      + '@media(min-width:1024px){body:not(#ak-r12) ' + R + ' .ak-allt__row .s-products-list-wrapper{grid-auto-columns:calc(25% - 8px)!important;gap:12px!important}}'
      + R + ' .ak-allt__row .s-infinite-scroll-wrapper,' + R + ' .ak-allt__row .s-products-list-placeholder{display:none!important}'
      + R + ' .ak-allt__ph{display:grid;grid-auto-flow:column;grid-auto-columns:calc(50% - 18px);gap:10px;overflow:hidden}'
      + R + ' .ak-allt__ph i{display:block;height:300px;border-radius:14px;background:linear-gradient(90deg,var(--ak-card2,#EEF3F9),var(--ak-card,#fff),var(--ak-card2,#EEF3F9));background-size:200% 100%;animation:akAlltSh 1.4s linear infinite}'
      + '@keyframes akAlltSh{to{background-position:-200% 0}}'
      + '@media(prefers-reduced-motion:reduce){' + R + ' .ak-allt__ph i{animation:none}}'
      // 2) بطاقة الثيم «المميزة»: تدرج أخضر-بنفسجي (app.css حق الثيم) يرجع لشكل بطاقات العالم
      + 'html body:not(#ak-r12) .s-product-card-entry.s-product-card-special,html body:not(#ak-r12) .s-product-card-special{background-image:none!important}';
    var st = D.createElement('style'); st.id = 'ak-r12'; st.textContent = css;
    (D.head || H).appendChild(st);

    var mk = function (tag, cls, html) { var e = D.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
    var io = null;
    var load = function (g) {
      if (g.__akDone) return; g.__akDone = 1;
      var row = g.querySelector('.ak-allt__row'); if (!row) return;
      try {
        var l = D.createElement('salla-products-list');
        l.setAttribute('source', 'categories');
        l.setAttribute('source-value', '[' + g.getAttribute('data-cat') + ']');
        l.setAttribute('limit', '12');
        row.appendChild(l);
      } catch (e) {}
      var n = 0, iv = setInterval(function () {
        n++;
        var has = row.querySelectorAll('custom-salla-product-card, salla-product-card, .s-product-card-entry').length;
        if (has || n > 60) {
          var ph = row.querySelector('.ak-allt__ph'); if (ph && (has || n > 60)) ph.parentNode.removeChild(ph);
          row.classList.add('is-done');
          // نوع ما فيه ولا منتج ظاهر: ينخفي هو بس
          if (!has) g.style.display = 'none';
          clearInterval(iv);
        }
      }, 500);
    };
    var build = function () {
      var host = null, pb = D.querySelector('.ak-worlds-root .ak-worlds--tables .ak-pblock');
      if (pb) host = pb.parentNode; // div.ak-products داخل قسم «طاولات الألعاب»
      if (!host || host.querySelector(':scope > .ak-allt')) return;
      var box = mk('div', 'ak-allt');
      box.setAttribute('aria-labelledby', 'ak-allt-h');
      var nav = '';
      for (var i = 0; i < G.length; i++) nav += '<a href="#ak-allt-' + G[i].id + '">' + G[i].t + '</a>';
      box.appendChild(mk('div', 'ak-allt__h', '<h3 id="ak-allt-h">كل الطاولات</h3><small>كل طاولاتنا مرتبة حسب النوع، اسحب يمين ويسار</small><nav class="ak-allt__nav" aria-label="أنواع الطاولات">' + nav + '</nav>'));
      for (var j = 0; j < G.length; j++) {
        var x = G[j], g = mk('section', 'ak-allt__g');
        g.id = 'ak-allt-' + x.id; g.setAttribute('data-cat', x.id); g.setAttribute('aria-label', x.t);
        g.appendChild(mk('div', 'ak-phead', '<b>' + x.t + ' <em>' + x.s + '</em></b><a href="' + pre + x.u + '">عرض الكل ←</a>'));
        g.appendChild(mk('div', 'ak-allt__row', '<div class="ak-allt__ph" aria-hidden="true"><i></i><i></i><i></i></div>'));
        box.appendChild(g);
      }
      host.appendChild(box);
      var gs = box.querySelectorAll('.ak-allt__g');
      if (window.IntersectionObserver) {
        if (!io) io = new IntersectionObserver(function (es) { for (var k = 0; k < es.length; k++) if (es[k].isIntersecting) { io.unobserve(es[k].target); load(es[k].target); } }, { rootMargin: '400px 0px' });
        for (var m = 0; m < gs.length; m++) io.observe(gs[m]);
      } else for (var q = 0; q < gs.length; q++) load(gs[q]);
      // روابط الأنواع فوق: تمرير ناعم بدون تغيير الرابط
      box.querySelector('.ak-allt__nav').addEventListener('click', function (ev) {
        var a = ev.target.closest && ev.target.closest('a'); if (!a) return;
        var t = D.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
        ev.preventDefault(); load(t);
        try { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { t.scrollIntoView(); }
      });
    };
    var pend = 0, kick = function () { if (pend) return; pend = setTimeout(function () { pend = 0; build(); }, 150); };
    var go = function () {
      build();
      try { new MutationObserver(kick).observe(D.body, { childList: true, subtree: true }); } catch (e) {}
    };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
