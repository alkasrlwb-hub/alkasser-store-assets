/* ALKASSER LOOB — صفحة القسم الرئيسي متصلة: شريط فروع ثابت + كل فرع قسم تحت الثاني (قرار المالك 25 نوفمبر) */
(function () {
  try {
    if (window.__AK_CATFLOW__) return;
    window.__AK_CATFLOW__ = 1;
    var PAL = {
      tables: ['#F4F7FB', '#FFFFFF', '#E1E8F2', '#C9D5E6', '#24375A', '#55667F', '#22D3EE', '#06101F', '#0B1A33', '#0E7490'],
      play: ['#FFFBF2', '#FFFFFF', '#EFE6D2', '#E2D3B0', '#1E4A3E', '#5B7468', '#F2C94C', '#1F1A05', '#0B2620', '#0B2620'],
      moto: ['#0D0E10', '#15161A', '#2A2C31', '#3D4047', '#D0D3D9', '#9A9FA8', '#E11D2E', '#FFFFFF', '#FFFFFF', '#FF5A66']
    };
    // رقم القسم الرئيسي: العالم + الفروع [عنوان، [أرقام التصنيفات]]
    var IB = 'https://cdn.jsdelivr.net/gh/alkasrlwb-hub/alkasser-store-assets@main/img/fl/', CB = 'https://alkasser.netlify.app/ban/';
    // الجولة 8 (مراجعة الصور المستقلة): صور حقيقية من معارض المنتجات بدل صور جيمنج المرفوضة
    // (كور طايرة في بنر البلياردو، S.R.H على الهوكي، مرجيحة وبرج خشب ما نبيعها، حصان خشب). الهوكي والتوازن بدون صورة رأس لين تجي صورة معتمدة
    var RC = 'https://cdn.files.salla.network/products/112199751/9236dfee-849d-4e54-ae93-eb4861f77051-standard.webp';
    var RS = 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=1000,format=auto/xKZow/1e1331f2-17dc-45ec-a8e5-b54f5dd418c7-1000x1000-fuyyRnCMlWhQ8tF7gLGwuuG4doOMoUNpunMTxjb0.jpg';
    var RP = 'https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=1000,format=auto/xKZow/dfcdfb20-2c52-4919-a024-e0fb92f092b1-1000x1000-E6a6v0XagQEVmd8mJ3GPJ5Blk5IsKYTgHvznAl50.jpg';
    // رقم القسم الرئيسي: العالم + الفروع [عنوان، [أرقام التصنيفات]، صورة الفرع (جيمنج)]
    var FLOW = {
      428244369: { w: 'tables', s: [['بلياردو', [993213184], RC], ['هوكي', [353917441]], ['تنس طاولة', [1303174661], CB + 'ak_t_tt.webp'], ['فرفيرة', [1767250951], CB + 'ak_t_fb.webp'], ['4 في 1', [529136902], IB + 'q4.webp']] },
      1473413965: { w: 'tables', s: [['أجهزة كارديو', [1130992222, 955842393], IB + 'cardio.webp'], ['الهوم جيم والأوزان', [490123615, 180690522, 1863569496], IB + 'gym.webp'], ['الملاكمة', [1688354139], IB + 'boxing.webp']] },
      481125644: { w: 'tables', s: [['الملاعب الخارجية', [481125644], IB + 'courts.webp'], ['كرة القدم والتدريب', [1119897091]], ['التنس والمضارب', [2055314181]]] },
      48135277: { w: 'tables', s: [['أرضيات الجيم', [780253807], IB + 'floor.webp'], ['أرضيات الحدائق والملاعب', [2020530536]]] },
      46021744: { w: 'play', s: [['مراجيح', [1376791097], RS], ['ألعاب حدائق كبيرة', [1721936584], RP], ['نطيطات ترامبولين', [175080959], IB + 'tramp.webp'], ['زحاليق', [1121609936], IB + 'slides.webp'], ['كراسي التوازن', [1160136731]], ['كراسي دوارة', [1248444183]], ['كراسي هزازة', [427559449]], ['أرضيات الحدائق', [2020530536]]] },
      1599672881: { w: 'moto', s: [['سكوترات كهربائية', [726194163], IB + 'scooters.webp'], ['دبابات بنزين', [1499711730], IB + 'petrol.webp'], ['دبابات شحن وتكتوك', [85325564], IB + 'cargo.webp']] }
    };
    var LIMIT = 12;
    var m = /\/c(\d+)\/?$/.exec(decodeURIComponent(location.pathname));
    var F = m && FLOW[m[1]];
    var w = F ? F.w : null;
    var lw = null; try { var qm = /[?&]world=(tables|play|moto)/.exec(location.search); lw = qm ? qm[1] : localStorage.getItem('ak-world'); } catch (e) {}
    // الجولة 9: أقسام السكوترات الفرعية والدراجات دايم بألوان السكوترات، حتى لو العميل جاي من عالم ثاني أو من قوقل
    var FORCE = { 726194163: 'moto', 1499711730: 'moto', 85325564: 'moto', 778074738: 'moto', 1679231858: 'moto' };
    if (!w && m && FORCE[m[1]]) w = FORCE[m[1]];
    if (!w || (m && m[1] === '48135277')) w = PAL[lw] ? lw : (w || 'tables');
    var P = PAL[w];
    var css = ''
      + 'body{--f-bg:' + P[0] + ';--f-card:' + P[1] + ';--f-line:' + P[2] + ';--f-line2:' + P[3] + ';--f-ink:' + P[4] + ';--f-sub:' + P[5] + ';--f-acc:' + P[6] + ';--f-on:' + P[7] + ';--f-fg:' + P[8] + ';--f-price:' + P[9] + '}#ak-flow{color:var(--f-fg);margin:0 0 24px}'
      + '#ak-flow *{box-sizing:border-box}'
      + '#ak-flow .akf-bar{position:sticky;top:var(--akf-top,0px);z-index:30;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 0;margin:0 0 8px;background:var(--f-bg);border-bottom:1px solid var(--f-line)}'
      + '#ak-flow .akf-bar::-webkit-scrollbar{display:none}'
      + '#ak-flow .akf-chip{flex:none;height:38px;padding:0 16px;border-radius:999px;border:1px solid var(--f-line2);background:var(--f-card);color:var(--f-ink);font:inherit;font-size:14px;font-weight:800;white-space:nowrap;cursor:pointer;transition:background .2s,color .2s,border-color .2s}'
      + '#ak-flow .akf-chip.on{background:var(--f-acc);border-color:var(--f-acc);color:var(--f-on)}'
      + '#ak-flow .akf-sec{scroll-margin-top:calc(var(--akf-top,0px) + 64px);padding:12px 0 8px}'
      + '#ak-flow .akf-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:4px 0 12px}'
      + 'body:not(#ak-x) #ak-flow .akf-h h2{margin:0;font-size:20px;font-weight:900;color:var(--f-fg)!important;border-inline-start:4px solid var(--f-acc);padding-inline-start:10px;line-height:1.3}'
      + '#ak-flow .akf-all{font-size:13px;font-weight:800;color:var(--f-price)!important;text-decoration:none;white-space:nowrap}'
      + '#ak-flow .akf-ban{display:block;width:100%;aspect-ratio:16/6;object-fit:cover;border-radius:14px;margin:0 0 12px;background:var(--f-card)}'
      + '#ak-flow .akf-ph{min-height:320px;border-radius:14px;background:var(--f-card);opacity:.5}'
      + '#ak-flow .akf-more{display:flex;justify-content:center;margin:12px 0 0}'
      + '#ak-flow .akf-more a{display:inline-flex;align-items:center;min-height:42px;padding:0 22px;border-radius:10px;border:1px solid var(--f-line2);color:var(--f-fg)!important;font-weight:800;font-size:13px;text-decoration:none}'
      + 'body:not(#ak-x) #ak-flow salla-products-list{display:block}'
      + 'body:not(#ak-x) #ak-flow .s-products-list-wrapper{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important;margin:0!important;padding:0!important}'
      + '@media(min-width:760px){body:not(#ak-x) #ak-flow .s-products-list-wrapper{grid-template-columns:repeat(3,minmax(0,1fr))!important}}'
      + '@media(min-width:1024px){body:not(#ak-x) #ak-flow .s-products-list-wrapper{grid-template-columns:repeat(4,minmax(0,1fr))!important}}'
      + 'body:not(#ak-x) #ak-flow .s-products-list-wrapper>*{width:auto!important;max-width:none!important;min-width:0!important;margin:0!important}'
      + 'body:not(#ak-x) custom-salla-product-card.s-product-card-entry,body:not(#ak-x) .s-product-card-entry{display:flex!important;flex-direction:column!important;height:100%!important;overflow:hidden;border-radius:14px!important;background:var(--f-card)!important;background-image:none!important;border:1px solid var(--f-line)!important;box-shadow:0 6px 18px -12px rgba(11,26,51,.25)!important;padding:0!important;color:var(--f-fg)!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-image{background:#fff!important;aspect-ratio:1/1!important;width:100%!important;height:auto!important;padding:0!important;margin:0!important;border-radius:0!important;border:0!important;overflow:hidden}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-image img,body:not(#ak-x) .s-product-card-entry .s-product-card-image img.s-product-card-image-cover{width:100%!important;height:100%!important;padding:7%!important;object-fit:contain!important;mix-blend-mode:multiply;background:transparent!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-content{display:flex!important;flex-direction:column!important;flex:1 1 auto;gap:4px;padding:10px 12px 12px!important;background:transparent!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-content-title a{display:block!important;-webkit-line-clamp:unset!important;white-space:normal!important;text-overflow:clip!important;overflow:hidden!important;max-height:3em!important;min-height:3em;font-size:14px!important;line-height:1.5!important;font-weight:800!important;color:var(--f-fg)!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-content-subtitle{color:var(--f-sub)!important;font-size:11.5px!important;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-price,body:not(#ak-x) .s-product-card-entry .s-product-card-sale-price h4{color:var(--f-price)!important;font-size:19px!important;font-weight:900!important;margin:0!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-content-sub{margin-top:auto!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-price *,body:not(#ak-x) .s-product-card-entry .s-product-card-sale-price *,body:not(#ak-x) .s-product-card-entry .s-product-card-starting-price *{color:var(--f-price)!important}'
      + 'body:not(#ak-x) .s-product-card-entry .s-product-card-sale-price span,body:not(#ak-x) .s-product-card-entry .s-product-card-starting-price p{color:var(--f-sub)!important;font-size:12px!important}'
      + 'body:not(#ak-x) .s-product-card-entry salla-add-product-button .s-button-btn{padding:0 6px!important;font-size:13px!important;background:var(--f-acc)!important;border-color:var(--f-acc)!important;color:var(--f-on)!important}'
      + 'body:not(#ak-x) .s-product-card-entry salla-add-product-button .s-button-text,body:not(#ak-x) .s-product-card-entry salla-add-product-button .s-button-text span{overflow:visible!important;text-overflow:clip!important;white-space:nowrap!important}'
      + 'body.ak-flow-on #categories-container,body.ak-flow-on #sub-categories-slider,body.ak-flow-on .ak-flow-native{display:none!important}';
    var st = document.createElement('style'); st.id = 'ak-flow-css'; st.textContent = css; document.head.appendChild(st);

    var lines = function (a) { var r = document.createRange(); r.selectNodeContents(a); var t = {}; var n = 0; var q = r.getClientRects(); for (var i = 0; i < q.length; i++) { if (q[i].width > 1) { var k = Math.round(q[i].top); if (!t[k]) { t[k] = 1; n++; } } } return n; };
    var fit = function (root) {
      var as = root.querySelectorAll('.s-product-card-content-title a');
      for (var i = 0; i < as.length; i++) {
        var a = as[i]; if (!a.offsetWidth) continue;
        var key = a.offsetWidth + '|' + a.textContent; if (a.getAttribute('data-akf') === key) continue;
        if (!(a.dataset.akFull && a.textContent.trim() === a.dataset.akDone)) a.dataset.akFull = a.textContent.trim();
        var f = a.dataset.akFull; a.textContent = f;
        if (lines(a) > 2) { var ws = f.split(/\s+/), n = ws.length; while (n > 1) { n--; a.textContent = ws.slice(0, n).join(' ') + '…'; if (lines(a) <= 2) break; } a.title = f; }
        a.dataset.akDone = a.textContent.trim(); a.setAttribute('data-akf', a.offsetWidth + '|' + a.textContent);
      }
    };
    setInterval(function () { fit(document); }, 1500);
    window.addEventListener('resize', function () { var as = document.querySelectorAll('[data-akf]'); for (var i = 0; i < as.length; i++) as[i].removeAttribute('data-akf'); });
    if (!F) return;
    var catUrl = function (id) {
      var a = document.querySelector('a[href$="/c' + id + '"]');
      return a ? a.getAttribute('href') : null;
    };

    var mount = function () {
      if (document.getElementById('ak-flow')) return true;
      var native = document.querySelector('#main-content salla-products-list[source="product.index"]');
      if (!native) return false;
      var box = native.closest('.products-filter, [class*="products-fil"]') || native.parentElement;
      var root = document.createElement('div'); root.id = 'ak-flow';
      var bar = document.createElement('div'); bar.className = 'akf-bar'; bar.setAttribute('role', 'tablist');
      root.appendChild(bar);
      F.s.forEach(function (s, i) {
        var chip = document.createElement('button'); chip.type = 'button'; chip.className = 'akf-chip' + (i ? '' : ' on'); chip.textContent = s[0]; chip.setAttribute('data-i', i);
        bar.appendChild(chip);
        var sec = document.createElement('section'); sec.className = 'akf-sec'; sec.id = 'akf-' + i; sec.setAttribute('data-i', i);
        var h = document.createElement('div'); h.className = 'akf-h';
        var h2 = document.createElement('h2'); h2.textContent = s[0]; h.appendChild(h2);
        sec.appendChild(h);
        if (s[2]) { var bi = document.createElement('img'); bi.className = 'akf-ban'; bi.src = s[2]; bi.alt = s[0]; bi.loading = i ? 'lazy' : 'eager'; bi.decoding = 'async'; bi.onerror = function () { this.remove(); }; sec.appendChild(bi); }
        var ph = document.createElement('div'); ph.className = 'akf-ph'; sec.appendChild(ph);
        root.appendChild(sec);
      });
      box.parentNode.insertBefore(root, box);
      box.classList.add('ak-flow-native');
      document.body.classList.add('ak-flow-on');

      var load = function (sec) {
        if (sec.getAttribute('data-ld')) return; sec.setAttribute('data-ld', '1');
        var i = +sec.getAttribute('data-i'), s = F.s[i];
        var pl = document.createElement('salla-products-list');
        pl.setAttribute('source', 'categories'); pl.setAttribute('source-value', JSON.stringify(s[1])); pl.setAttribute('limit', String(LIMIT + (s[1].indexOf(993213184) > -1 ? 9 : 0))); /* الجولة 14: +9 لنسخ cm المخفية */
        var ph = sec.querySelector('.akf-ph'); sec.replaceChild(pl, ph);
        var tries = 0, iv = setInterval(function () {
          tries++;
          var cards = pl.querySelectorAll('custom-salla-product-card, .s-product-card-entry');
          if (cards.length) {
            fit(pl);
            if (cards.length >= LIMIT + (s[1].indexOf(993213184) > -1 ? 9 : 0) && s[1].length === 1 && !sec.querySelector('.akf-more')) {
              var u = catUrl(s[1][0]);
              if (u) { var mo = document.createElement('div'); mo.className = 'akf-more'; var a = document.createElement('a'); a.href = u; a.textContent = 'كل ' + s[0] + ' ←'; mo.appendChild(a); sec.appendChild(mo); }
            }
          }
          if (tries > 8 && !cards.length && pl.querySelector('.s-products-list-placeholder, salla-no-content, .s-no-content')) { sec.style.display = 'none'; var c = bar.querySelector('[data-i="' + i + '"]'); if (c) c.style.display = 'none'; clearInterval(iv); }
          if (tries > 40) clearInterval(iv);
        }, 500);
      };
      var secs = root.querySelectorAll('.akf-sec');
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { load(e.target); io.unobserve(e.target); } }); }, { rootMargin: '600px 0px' });
        for (var k = 0; k < secs.length; k++) io.observe(secs[k]);
      } else { for (var k2 = 0; k2 < secs.length; k2++) load(secs[k2]); }
      load(secs[0]);
      // الجولة 7: باقي الأقسام تتحمّل وحدة ورا الثانية (لو العميل نزل بسرعة أو استخدم الفلتر ما يلقى قسم فاضي)
      var seq = 1, nextSec = function () { if (seq >= secs.length) return; load(secs[seq++]); setTimeout(nextSec, 900); };
      setTimeout(nextSec, 1500);

      var topOff = function () {
        var t = 0, hs = document.querySelectorAll('header, .main-nav-container, #ak-wbar, .ak-wbar');
        for (var i = 0; i < hs.length; i++) { var cs = getComputedStyle(hs[i]); if (cs.position === 'fixed' || cs.position === 'sticky') { var r = hs[i].getBoundingClientRect(); if (r.top <= 1 && r.bottom > t && r.bottom < 200) t = r.bottom; } }
        root.style.setProperty('--akf-top', Math.round(t) + 'px');
        return t;
      };
      var setOn = function (i) {
        var cs = bar.querySelectorAll('.akf-chip');
        for (var j = 0; j < cs.length; j++) cs[j].classList.toggle('on', +cs[j].getAttribute('data-i') === i);
        var c = bar.querySelector('[data-i="' + i + '"]');
        if (c) { var bl = bar.scrollLeft, br = bar.getBoundingClientRect(), crr = c.getBoundingClientRect(); if (crr.left < br.left || crr.right > br.right) bar.scrollTo({ left: bl + (crr.left - br.left) - (br.width - crr.width) / 2, behavior: 'smooth' }); }
      };
      var lock = 0;
      bar.addEventListener('click', function (e) {
        var c = e.target.closest('.akf-chip'); if (!c) return;
        var i = +c.getAttribute('data-i'); var sec = document.getElementById('akf-' + i); if (!sec) return;
        for (var j = 0; j <= i; j++) load(secs[j]);
        setOn(i); lock = Date.now() + 900;
        var y = sec.getBoundingClientRect().top + window.pageYOffset - topOff() - bar.offsetHeight - 6;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
      var onScroll = function () {
        var t = topOff(); if (Date.now() < lock) return;
        var line = t + bar.offsetHeight + 80, cur = 0;
        for (var j = 0; j < secs.length; j++) { if (secs[j].style.display === 'none') continue; if (secs[j].getBoundingClientRect().top <= line) cur = j; }
        setOn(cur);
      };
      var tk = 0;
      window.addEventListener('scroll', function () { if (!tk) { tk = 1; requestAnimationFrame(function () { tk = 0; onScroll(); }); } }, { passive: true });
      window.addEventListener('resize', function () { var as = root.querySelectorAll('[data-akf]'); for (var i = 0; i < as.length; i++) as[i].removeAttribute('data-akf'); fit(root); });
      topOff();
      return true;
    };
    var n = 0, iv0 = setInterval(function () { n++; if (mount() || n > 60) clearInterval(iv0); }, 250);
  } catch (e) {}
})();
