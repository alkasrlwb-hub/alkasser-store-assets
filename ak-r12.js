/* ALKASSER LOOB — الجولة 12 (طلب المالك 25 نوفمبر 18:12، وتصحيحه 18:48)
   1) رئيسية «رياضة وألعاب»: قسم «كل الطاولات» تحت «الأكثر طلباً» داخل قسم «طاولات الألعاب».
      شريط واحد أفقي، كل الطاولات جنب بعض: كل التنس ← الفرفيرة ← الهوكي ← البلياردو ← 4 في 1 (الجولة 16). العميل يسحب بإصبعه ويطلع له الباقي.
      فوقه شرائح الأنواع: الضغط عليها يحرّك الشريط لأول طاولة من النوع. وكل بطاقة فوق عنوانها كلمة صغيرة بنوعها.
      بنفس بطاقة العالم المعتمدة (.ak-products). المنتجات من سلة نفسها (salla-products-list بالقسم)، فالمخفي والمحذوف ما يطلع.
      الشريط ما ينحمّل إلا لما يقرب من الشاشة، والصور lazy من سلة (اللي برا الشاشة يمين ويسار ما تنزل إلا لما توصلها).
   3) صفحات الأقسام في الرياضة والمراجيح: شرائح الأقسام والمقاسات فاتحة (كانت كحلي غامق).
   2) احتياط: أي بطاقة «مميزة/ترويجية» من الثيم (تدرج أخضر-بنفسجي على .s-product-card-entry) ما تبان في أي عالم.
   الحارس __AK_R12__ والستايل #ak-r12 (أسماء جديدة، مو مستخدمة في المحرر ولا الحزمة). */
(function () {
  try {
    if (window.__AK_R12__) return;
    window.__AK_R12__ = 1;
    var D = document, H = D.documentElement;
    var G = [
      { id: 1303174661, k: 'tennis', t: 'تنس طاولة', l: 'تنس' },
      { id: 1767250951, k: 'foos', t: 'فرفيرة', l: 'فرفيرة' },
      { id: 353917441, k: 'hockey', t: 'هوكي هوائي', l: 'هوكي' },
      { id: 993213184, k: 'billiard', t: 'بلياردو', l: 'بلياردو' },
      // الجولة 16: طاولات 4 في 1 كانت ناقصة من الشريط (مراجعة الجولة 15، بند 15)
      { id: 529136902, k: 'q4', t: '4 في 1', l: '4 في 1' }
    ];
    var R = '.ak-worlds-root .ak-worlds--tables .ak-products .ak-allt';
    var X = 'body:not(#ak-r12) ' + R; // أولوية أعلى من قواعد .ak-products حق المحرك
    var css = ''
      + R + '{margin-top:30px;padding-top:22px;border-top:1px solid var(--ak-line,#E1E8F2)}'
      + R + ' .ak-allt__h{display:flex;flex-direction:column;gap:2px;margin-bottom:10px}'
      + R + ' .ak-allt__h h3{margin:0;font-size:20px;font-weight:900;line-height:1.4;color:var(--ak-fg)}'
      + R + ' .ak-allt__h small{font-size:12.5px;color:var(--ak-sub)}'
      + R + ' .ak-allt__nav{display:flex;flex-wrap:nowrap;gap:6px;margin:8px 0 2px;padding:0 0 2px;overflow-x:auto;scrollbar-width:none}'
      + R + ' .ak-allt__nav::-webkit-scrollbar{display:none}'
      + R + ' .ak-allt__nav button{flex:none;display:inline-flex;align-items:center;min-height:34px;padding:0 11px;border-radius:999px;border:1px solid var(--ak-line2,#C9D5E6);background:var(--ak-card,#fff);color:var(--ak-fg);font:inherit;font-size:12.5px;font-weight:800;white-space:nowrap;cursor:pointer}'
      + R + ' .ak-allt__nav button.is-on{background:var(--ak-accent,#22D3EE);border-color:var(--ak-accent,#22D3EE);color:var(--ak-on-accent,#06101F)}'
      // الشريط الواحد: القوائم الأربع ورا بعض في صف واحد يتمرر أفقياً
      + X + ' .ak-allt__strip{display:flex;flex-wrap:nowrap;gap:10px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:4px 0 10px;container-type:inline-size;min-height:300px;overflow-anchor:none}'
      + X + ' .ak-allt__strip::-webkit-scrollbar{display:none}'
      + X + ' .ak-allt__strip.is-done{min-height:0}'
      + X + ' .ak-allt__strip{align-items:stretch}'
      // كل القوائم بنفس طول أطول بطاقة، فكل البطاقات في الشريط نفس الارتفاع
      + X + ' .ak-allt__l{flex:none;display:flex!important;flex-direction:column;max-width:none!important;min-width:0}'
      + X + ' .ak-allt__l .s-products-list-wrapper{flex:1 1 auto;height:auto!important;align-content:stretch}'
      + X + ' .ak-allt__l .s-products-list-wrapper>*{height:100%!important}'
      + X + ' .ak-allt__l .s-products-list-wrapper,' + X + ' .ak-allt__l salla-products-list>div:not([class]){display:grid!important;grid-template-columns:none!important;grid-auto-flow:column!important;grid-auto-columns:calc(50cqw - 18px)!important;align-items:stretch;gap:10px!important;width:auto!important;max-width:none!important;overflow:visible!important;padding:0!important;margin:0!important}'
      + '@media(min-width:760px){' + X + ' .ak-allt__l .s-products-list-wrapper{grid-auto-columns:calc(33.333cqw - 8px)!important}}'
      + '@media(min-width:1024px){' + X + ' .ak-allt__l .s-products-list-wrapper{grid-auto-columns:calc(25cqw - 9px)!important;gap:12px!important}' + X + ' .ak-allt__strip{gap:12px}}'
      + X + ' .ak-allt__l .s-products-list-wrapper>*{scroll-snap-align:start}'
      + X + ' .ak-allt__l .s-infinite-scroll-wrapper,' + X + ' .ak-allt__l .s-products-list-placeholder{display:none!important}'
      + X + ' .ak-allt__l.is-empty{display:none!important}'
      // كلمة النوع الصغيرة فوق عنوان البطاقة
      + G.map(function (g) { return X + ' .ak-allt__l[data-k="' + g.k + '"] .s-product-card-content-main::before{content:"' + g.l + '"}'; }).join('')
      + X + ' .ak-allt__l .s-product-card-content-main::before{display:block;width:max-content;margin-bottom:3px;padding:0 7px;border-radius:5px;background:var(--ak-card2,#EEF3F9);color:var(--ak-sub,#55667F);font-size:10.5px;font-weight:800;line-height:18px}'
      // هيكل التحميل
      + R + ' .ak-allt__ph{flex:none;display:flex;gap:10px;width:100%;overflow:hidden}'
      + R + ' .ak-allt__ph i{flex:none;display:block;width:calc(50% - 18px);height:300px;border-radius:14px;background:linear-gradient(90deg,var(--ak-card2,#EEF3F9),var(--ak-card,#fff),var(--ak-card2,#EEF3F9));background-size:200% 100%;animation:akAlltSh 1.4s linear infinite}'
      + '@keyframes akAlltSh{to{background-position:-200% 0}}'
      + '@media(prefers-reduced-motion:reduce){' + R + ' .ak-allt__ph i{animation:none}}'
      // 3) صفحة القسم في العالمين الفاتحين: شرائح الأقسام والمقاسات (من المحرر، كانت كحلي غامق بنص أبيض) تصير فاتحة مثل أزرار الترتيب
      + 'html[data-aklight]:not(#ak-r12) body .ak-chips .ak-chip:not(.is-on){background:var(--l-surf,#fff)!important;border-color:var(--l-line2,#C9D5E6)!important;color:var(--l-fg,#0B1A33)!important}'
      + 'html[data-aklight]:not(#ak-r12) body .ak-chips--f b{color:var(--l-sub,#55667F)!important}'
      // 2) بطاقة الثيم «المميزة»: تدرج أخضر-بنفسجي (app.css حق الثيم) يرجع لشكل بطاقات العالم
      + 'html body:not(#ak-r12) .s-product-card-entry.s-product-card-special,html body:not(#ak-r12) .s-product-card-special{background-image:none!important}';
    var st = D.createElement('style'); st.id = 'ak-r12'; st.textContent = css;
    (D.head || H).appendChild(st);

    var mk = function (tag, cls, html) { var e = D.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
    var cardsIn = function (el) { return el.querySelectorAll('custom-salla-product-card, salla-product-card, .s-product-card-entry'); };
    var io = null;
    var load = function (box) {
      if (box.__akDone) return; box.__akDone = 1;
      var strip = box.querySelector('.ak-allt__strip'); if (!strip) return;
      var ls = [];
      for (var i = 0; i < G.length; i++) {
        try {
          var l = D.createElement('salla-products-list');
          l.className = 'ak-allt__l';
          l.setAttribute('data-k', G[i].k);
          l.setAttribute('source', 'categories');
          l.setAttribute('source-value', '[' + G[i].id + ']');
          l.setAttribute('limit', G[i].id === 993213184 ? '21' : '12'); // الجولة 14: +9 لأن نسخ cm المخفية (ak-r14.js) تاخذ أماكن في البلياردو
          strip.appendChild(l); ls.push(l);
        } catch (e) {}
      }
      var n = 0, iv = setInterval(function () {
        n++;
        var all = 0, done = 0;
        for (var j = 0; j < ls.length; j++) {
          var c = cardsIn(ls[j]).length; all += c;
          if (c || /لا توجد منتجات|No products/i.test(ls[j].textContent || '') || ls[j].querySelector('.s-products-list-no-content, salla-no-content, .s-no-content')) done++;
        }
        var ph = strip.querySelector('.ak-allt__ph');
        if (all && ph) ph.parentNode.removeChild(ph);
        // القوائم توصل بأوقات مختلفة، فالشريط ممكن ينط لنوع ثاني. لين العميل يلمسه، نخليه على أول التنس
        if (!box.__akTouched && strip.scrollLeft !== 0) strip.scrollLeft = 0;
        if (done === ls.length || n > 60) {
          for (var q = 0; q < ls.length; q++) if (!cardsIn(ls[q]).length) { ls[q].classList.add('is-empty'); var b = box.querySelector('.ak-allt__nav [data-k="' + ls[q].getAttribute('data-k') + '"]'); if (b) b.style.display = 'none'; }
          if (ph && ph.parentNode) ph.parentNode.removeChild(ph);
          strip.classList.add('is-done');
          if (!all) box.style.display = 'none';
          clearInterval(iv);
        }
      }, 500);
    };
    // الشريحة المضيئة تتبع مكان الشريط (أول نوع ظاهر من بداية الشريط)
    var sync = function (box) {
      var strip = box.querySelector('.ak-allt__strip'); if (!strip) return;
      var sr = strip.getBoundingClientRect(), rtl = getComputedStyle(strip).direction === 'rtl';
      var edge = rtl ? sr.right - 40 : sr.left + 40, cur = null;
      var ls = strip.querySelectorAll('.ak-allt__l:not(.is-empty)');
      for (var i = 0; i < ls.length; i++) { var r = ls[i].getBoundingClientRect(); if (r.width && r.left <= edge && r.right >= edge) { cur = ls[i].getAttribute('data-k'); break; } }
      if (!cur) return;
      var bs = box.querySelectorAll('.ak-allt__nav button');
      for (var j = 0; j < bs.length; j++) bs[j].classList.toggle('is-on', bs[j].getAttribute('data-k') === cur);
    };
    var build = function () {
      var host = null, pb = D.querySelector('.ak-worlds-root .ak-worlds--tables .ak-pblock');
      if (pb) host = pb.parentNode; // div.ak-products داخل قسم «طاولات الألعاب»
      if (!host || host.querySelector(':scope > .ak-allt')) return;
      var box = mk('div', 'ak-allt');
      box.setAttribute('aria-labelledby', 'ak-allt-h');
      var nav = '';
      for (var i = 0; i < G.length; i++) nav += '<button type="button" data-k="' + G[i].k + '"' + (i ? '' : ' class="is-on"') + '>' + G[i].t + '</button>';
      box.appendChild(mk('div', 'ak-allt__h', '<h3 id="ak-allt-h">كل الطاولات</h3><small>كل طاولاتنا في شريط واحد، اسحب يمين ويسار</small><nav class="ak-allt__nav" aria-label="أنواع الطاولات">' + nav + '</nav>'));
      box.appendChild(mk('div', 'ak-allt__strip', '<div class="ak-allt__ph" aria-hidden="true"><i></i><i></i><i></i></div>'));
      host.appendChild(box);
      var strip = box.querySelector('.ak-allt__strip');
      if (window.IntersectionObserver) {
        if (!io) io = new IntersectionObserver(function (es) { for (var k = 0; k < es.length; k++) if (es[k].isIntersecting) { io.unobserve(es[k].target); load(es[k].target); } }, { rootMargin: '400px 0px' });
        io.observe(box);
      } else load(box);
      // الشرائح: تحرّك الشريط لأول طاولة من النوع (بدون ما تتحرك الصفحة)
      box.querySelector('.ak-allt__nav').addEventListener('click', function (ev) {
        var b = ev.target.closest && ev.target.closest('button[data-k]'); if (!b) return;
        box.__akTouched = 1; load(box);
        var l = strip.querySelector('.ak-allt__l[data-k="' + b.getAttribute('data-k') + '"]'); if (!l) return;
        var sr = strip.getBoundingClientRect(), lr = l.getBoundingClientRect(), rtl = getComputedStyle(strip).direction === 'rtl';
        var dx = rtl ? lr.right - sr.right : lr.left - sr.left;
        try { strip.scrollBy({ left: dx, behavior: 'smooth' }); } catch (e) { strip.scrollLeft += dx; }
        var bs = box.querySelectorAll('.ak-allt__nav button');
        for (var j = 0; j < bs.length; j++) bs[j].classList.toggle('is-on', bs[j] === b);
      });
      var touch = function () { box.__akTouched = 1; };
      strip.addEventListener('pointerdown', touch, { passive: true }); strip.addEventListener('touchstart', touch, { passive: true }); strip.addEventListener('wheel', touch, { passive: true });
      box.querySelector('.ak-allt__nav').addEventListener('pointerdown', touch, { passive: true });
      var raf = 0;
      strip.addEventListener('scroll', function () { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; sync(box); }); }, { passive: true });
    };
    var pend = 0, kick = function () { if (pend) return; pend = setTimeout(function () { pend = 0; build(); }, 150); };
    var go = function () {
      build();
      try { new MutationObserver(kick).observe(D.body, { childList: true, subtree: true }); } catch (e) {}
    };
    if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', go); else go();
  } catch (e) {}
})();
