/* ALKASSER LOOB — «وش الفرق بين الموديلين؟» لطاولات 4 في 1
   يطلع في صفحة قسم 4 في 1 وفي صفحات الطاولات الثلاث. النصوص من AK_WORLDS_CONFIG.q4cmp، والأسعار من بيانات سلة الحية. */
(function () {
  try {
    if (window.__AK_Q4CMP__) return;
    window.__AK_Q4CMP__ = 1;

    var D = {
      cat: 529136902,
      ak: { ids: [1821944654, 455856464], name: 'AK-101', sub: 'أسود أو بني' },
      bn: { id: 680552681, name: 'الدوّارة', sub: 'أسود مع قماش أزرق' },
      title: 'وش الفرق بين الموديلين؟',
      lead: 'الثنتين نفس المقاس ونفس الألعاب. الفرق في الإضافات اللي على AK-101.',
      common: ['المقاس 210 × 110 × 81 سم', 'الوزن 180 كجم', 'بلياردو · هوكي هوائي · تنس طاولة · طاولة طعام أو طاولة مكتبية'],
      rows: [
        ['مروحة الهوكي', 'أكبر وأقوى: الهوا أقوى، فالقرص ينزلق أسرع وأنعم', 'عادية'],
        ['عداد أهداف إلكتروني للهوكي', 'موجود', 'ما فيها'],
        ['غطاء حماية', 'يجي معها غطاء حماية من الغبار', 'ما يجي معها غطاء'],
        ['لوح التنس وقت القلب', 'يبقى ثابت في مكانه، تقلب بدون ما تشيله', 'لازم تشيل لوح التنس كل ما تقلب بين الهوكي والبلياردو'],
        ['الألعاب الأربع والمقاس والوزن', 'نفس الشي', 'نفس الشي']
      ],
      diff: 'فرق السعر {d} ريال، وتاخذ معه: مروحة هوكي أقوى، وعداد أهداف إلكتروني، وغطاء حماية، ولوح تنس يبقى مكانه.',
      notes: [
        'سطح التنس في الطاولتين للعب في البيت، مو مقاس دولي. تبي مقاس دولي؟ ',
        'مروحة الهوكي تحتاج فيش كهرباء قريب من الطاولة.',
        'توصيل وتركيب مجاني للطاولتين في الرياض وجدة والدمام والقصيم، لأن سعرها فوق 2000 ريال.'
      ],
      tennisLink: 'شوف طاولات التنس الدولية',
      tennisUrl: '/table-tennis-tables/c1303174661',
      here: 'هذي الطاولة',
      go: 'شوف الطاولة',
      black: 'الأسود', brown: 'البني'
    };
    var C = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.q4cmp) || {};
    if (C.on === false) return;
    var K = function (k) { return C[k] !== undefined ? C[k] : D[k]; };
    var AK = K('ak'), BN = K('bn');
    var ALL = AK.ids.concat([BN.id]);

    var pre = location.pathname.indexOf('/alkasser-2023') === 0 ? '/alkasser-2023' : '';
    var pid = function () { var m = /\/p(\d+)(\D|$)/.exec(location.pathname); return m ? +m[1] : 0; };
    var onCat = function () { return new RegExp('/c' + K('cat') + '(\\D|$)').test(decodeURIComponent(location.pathname)); };
    var where = function () {
      var b = document.body; if (!b) return null;
      if (b.classList.contains('product-single') && ALL.indexOf(pid()) > -1) return 'p';
      if (onCat()) return 'c';
      return null;
    };

    var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

    var CSS = '.akq{--bg:#06101F;--c1:#0B1630;--c2:#0F1D3A;--ln:#1D2E52;--ln2:#2A3E66;--ac:#22D3EE;--on:#06101F;--i2:#C5D3EC;--sb:#8FA3C8;' +
      'font-family:Cairo,"DINNextLTArabic-Regular",system-ui,sans-serif;direction:rtl;text-align:start;color:#fff;background:linear-gradient(135deg,#0B2350,#06101F);border:1px solid var(--ln);border-radius:18px;padding:18px 16px;margin:4px 0 20px;font-variant-numeric:tabular-nums;line-height:1.6;box-sizing:border-box;max-width:100%}' +
      '.akq *{box-sizing:border-box;letter-spacing:0}' +
      '.akq h2{margin:0;font-size:22px;font-weight:800;line-height:1.35;color:#fff}' +
      '.akq__lead{margin:6px 0 12px;font-size:14.5px;color:var(--i2);font-weight:600}' +
      '.akq__chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px;padding:0;list-style:none}' +
      '.akq__chips li{font-size:12.5px;font-weight:700;color:var(--i2);background:rgba(255,255,255,.06);border:1px solid var(--ln);border-radius:999px;padding:4px 10px}' +
      '.akq__t{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0;border:1px solid var(--ln);border-radius:14px;overflow:hidden;background:var(--c1)}' +
      '.akq__h{padding:12px 10px;background:var(--c2);border-bottom:1px solid var(--ln);display:flex;flex-direction:column;gap:2px;min-width:0}' +
      '.akq__h + .akq__h{border-inline-start:1px solid var(--ln)}' +
      '.akq__h b{font-size:16px;font-weight:800;color:#fff}' +
      '.akq__h small{font-size:12.5px;color:var(--sb);font-weight:600}' +
      '.akq__p{font-size:18px;font-weight:800;color:var(--ac)}.akq__p i{font-style:normal;font-size:13px;font-weight:700;margin-inline-start:4px;color:var(--i2)}' +
      '.akq__h--ak{box-shadow:inset 0 3px 0 var(--ac)}' +
      '.akq__tag{align-self:flex-start;font-size:11.5px;font-weight:800;color:var(--on);background:var(--ac);border-radius:999px;padding:1px 9px;margin-bottom:2px}' +
      '.akq__f{grid-column:1 / -1;padding:9px 10px 2px;font-size:13px;font-weight:800;color:var(--sb);border-top:1px solid var(--ln)}' +
      
      '.akq__v{padding:2px 10px 10px;font-size:14px;font-weight:700;color:var(--i2);min-width:0;overflow-wrap:anywhere}' +
      '.akq__v--ak{color:#fff}.akq__v--ak:before{content:"✓";color:var(--ac);font-weight:800;margin-inline-end:6px}' +
      '.akq__v--no{color:var(--sb);font-weight:600}' +
      '.akq__v--same:before{content:"✓";color:var(--sb);margin-inline-end:6px}' +
      '.akq__go{display:flex;flex-wrap:wrap;gap:6px;padding:10px;border-top:1px solid var(--ln);align-content:flex-start}' +
      '.akq__go + .akq__go{border-inline-start:1px solid var(--ln)}' +
      '.akq a.akq__btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;flex:1 1 100%;padding:6px 10px;border-radius:12px;font-size:13.5px;font-weight:800;text-decoration:none;background:var(--ac);color:var(--on)!important;text-align:center}' +
      '.akq a.akq__btn--o{background:transparent;color:var(--ac)!important;border:1px solid var(--ln2)}' +
      '.akq__diff{margin:12px 0 0;padding:10px 12px;border-radius:12px;background:rgba(34,211,238,.10);border-inline-start:4px solid var(--ac);font-size:14.5px;font-weight:700;color:#fff}' +
      '.akq__notes{margin:10px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:4px}' +
      '.akq__notes li{font-size:13px;color:var(--i2);padding-inline-start:14px;position:relative}' +
      '.akq__notes li:before{content:"";position:absolute;inset-inline-start:0;top:.65em;width:5px;height:5px;border-radius:50%;background:var(--ac)}' +
      '.akq__notes a{color:var(--ac)!important;font-weight:800;text-decoration:underline}' +
      '@media(min-width:768px){.akq{padding:24px 24px;margin:8px 0 26px}.akq h2{font-size:28px}' +
      '.akq__t{grid-template-columns:minmax(180px,1.1fr) minmax(0,1fr) minmax(0,1fr)}' +
      '.akq__corner{display:block!important;background:var(--c2);border-bottom:1px solid var(--ln)}' +
      '.akq__h{border-inline-start:1px solid var(--ln);padding:14px 16px}' +
      '.akq__f{grid-column:auto;border-top:1px solid var(--ln);padding:12px 16px;font-size:14px;color:var(--i2)}' +
      '.akq__v{border-top:1px solid var(--ln);border-inline-start:1px solid var(--ln);padding:12px 16px}' +
      
      '.akq__gocorner{display:block!important;border-top:1px solid var(--ln)}' +
      '.akq__go{border-inline-start:1px solid var(--ln)}}' +
      '.akq__corner,.akq__gocorner{display:none}' +
      'body.product-single .s-tabs-content-wrapper .akq{margin:16px 0 4px}' +
      // ألوان الثيم تفرض لون غامق على h2/p/span/small بـ!important، فنرجّع ألواننا بقوة أعلى
      'html body #ak-q4cmp#ak-q4cmp,html body #ak-q4cmp#ak-q4cmp h2,html body #ak-q4cmp#ak-q4cmp b,html body #ak-q4cmp#ak-q4cmp .akq__v--ak,html body #ak-q4cmp#ak-q4cmp .akq__diff,html body #ak-q4cmp#ak-q4cmp .akq__diff span{color:#fff!important}' +
      'html body #ak-q4cmp#ak-q4cmp .akq__lead,html body #ak-q4cmp#ak-q4cmp .akq__chips li,html body #ak-q4cmp#ak-q4cmp .akq__v,html body #ak-q4cmp#ak-q4cmp .akq__notes li,html body #ak-q4cmp#ak-q4cmp .akq__p i{color:#C5D3EC!important}' +
      'html body #ak-q4cmp#ak-q4cmp small,html body #ak-q4cmp#ak-q4cmp .akq__f,html body #ak-q4cmp#ak-q4cmp .akq__v--no{color:#8FA3C8!important}' +
      'html body #ak-q4cmp#ak-q4cmp .akq__p,html body #ak-q4cmp#ak-q4cmp .akq__notes a{color:#22D3EE!important}' +
      'html body #ak-q4cmp#ak-q4cmp .akq__tag{color:#06101F!important}' +
      '@media(min-width:768px){html body #ak-q4cmp#ak-q4cmp .akq__f{color:#C5D3EC!important}}' +
      'html body #ak-q4cmp#ak-q4cmp .akq__v--ak{color:#fff!important}';

    var font = function () {
      if (document.getElementById('akq-font')) return;
      var l = document.createElement('link'); l.id = 'akq-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap';
      document.head.appendChild(l);
    };
    var style = function () {
      if (document.getElementById('akq-css')) return;
      var s = document.createElement('style'); s.id = 'akq-css'; s.textContent = CSS; document.head.appendChild(s);
    };

    var data = null, busy = false;
    var load = function (cb) {
      if (data) return cb(data);
      if (busy) return; busy = true;
      var done = function (list) {
        var m = {};
        (list || []).forEach(function (p) { m[+p.id] = { price: +(p.is_on_sale && p.sale_price ? p.sale_price : p.price) || 0, url: p.url || '' }; });
        data = m; busy = false; cb(m);
      };
      try {
        window.salla.api.product.fetch({ source: 'selected', source_value: ALL }).then(function (r) { done(r && r.data); }, function () { done([]); });
      } catch (e) { done([]); }
    };

    var priceOf = function (m, ids) { var v = 0; ids.forEach(function (i) { if (m[i] && m[i].price && !v) v = m[i].price; }); return v; };
    var urlOf = function (m, id, fb) { return (m[id] && m[id].url) || (pre + fb); };

    var build = function (m, mode) {
      var cur = pid();
      var pa = priceOf(m, AK.ids), pb = priceOf(m, [BN.id]);
      var pr = function (v) { return v ? '<span class="akq__p"><bdi dir="ltr">' + fmt(v) + '</bdi> <i>ريال</i></span>' : ''; };
      var isAk = AK.ids.indexOf(cur) > -1, isBn = cur === BN.id;
      var h = '<h2>' + esc(K('title')) + '</h2><p class="akq__lead">' + esc(K('lead')) + '</p>';
      h += '<ul class="akq__chips">' + K('common').map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>';
      h += '<div class="akq__t" role="table" aria-label="' + esc(K('title')) + '">';
      h += '<div class="akq__corner" aria-hidden="true"></div>';
      h += '<div class="akq__h akq__h--ak" role="columnheader">' + (mode === 'p' && isAk ? '<span class="akq__tag">' + esc(K('here')) + '</span>' : '') + '<b>' + esc(AK.name) + '</b><small>' + esc(AK.sub) + '</small>' + pr(pa) + '</div>';
      h += '<div class="akq__h" role="columnheader">' + (mode === 'p' && isBn ? '<span class="akq__tag">' + esc(K('here')) + '</span>' : '') + '<b>' + esc(BN.name) + '</b><small>' + esc(BN.sub) + '</small>' + pr(pb) + '</div>';
      K('rows').forEach(function (r) {
        var same = r[1] === r[2];
        h += '<div class="akq__f" role="rowheader">' + esc(r[0]) + '</div>';
        h += '<div class="akq__v ' + (same ? 'akq__v--same' : 'akq__v--ak') + '" role="cell">' + esc(r[1]) + '</div>';
        h += '<div class="akq__v ' + (same ? 'akq__v--same' : 'akq__v--no') + '" role="cell">' + esc(r[2]) + '</div>';
      });
      var u1 = urlOf(m, AK.ids[0], '/4-in-1-game-table-black/p' + AK.ids[0]);
      var u2 = urlOf(m, AK.ids[1], '/4-in-1-game-table-brown/p' + AK.ids[1]);
      var u3 = urlOf(m, BN.id, '/p' + BN.id);
      var b = function (u, t, id) { return cur === id ? '' : '<a class="akq__btn' + (id === BN.id ? ' akq__btn--o' : '') + '" href="' + esc(u) + '">' + esc(t) + '</a>'; };
      h += '<div class="akq__gocorner" aria-hidden="true"></div>';
      h += '<div class="akq__go">' + b(u1, K('go') + ' · ' + K('black'), AK.ids[0]) + b(u2, K('go') + ' · ' + K('brown'), AK.ids[1]) + '</div>';
      h += '<div class="akq__go">' + b(u3, K('go'), BN.id) + '</div>';
      h += '</div>';
      if (pa && pb && pa > pb) h += '<p class="akq__diff">' + esc(K('diff')).replace('{d}', '<span dir="ltr">' + fmt(pa - pb) + '</span>') + '</p>';
      var n = K('notes');
      h += '<ul class="akq__notes"><li>' + esc(n[0]) + '<a href="' + esc(pre + K('tennisUrl')) + '">' + esc(K('tennisLink')) + '</a></li>';
      for (var i = 1; i < n.length; i++) h += '<li>' + esc(n[i]) + '</li>';
      h += '</ul>';
      return h;
    };

    var spot = function (mode) {
      if (mode === 'c') {
        var h1 = document.querySelector('#main-content h1');
        var box = h1 && h1.closest('div.mb-4');
        if (box && box.parentNode) return [box, 'afterend'];
        var pl = document.querySelector('salla-products-list');
        return pl ? [pl, 'beforebegin'] : null;
      }
      var tw = document.querySelector('.s-tabs-content-wrapper');
      if (tw) return [tw, 'afterend'];
      var d = document.querySelector('.product__description');
      return d ? [d, 'afterend'] : null;
    };

    var put = function () {
      var mode = where(); if (!mode) return;
      if (document.getElementById('ak-q4cmp')) return;
      var s = spot(mode); if (!s) return;
      if (!(window.salla && window.salla.api && window.salla.api.product)) return;
      style(); font();
      load(function (m) {
        if (document.getElementById('ak-q4cmp')) return;
        var s2 = spot(mode); if (!s2) return;
        var el = document.createElement('div'); el.setAttribute('role', 'region');
        el.id = 'ak-q4cmp'; el.className = 'akq'; el.setAttribute('aria-label', K('title'));
        el.innerHTML = build(m, mode);
        s2[0].insertAdjacentElement(s2[1], el);
      });
    };

    var n = 0;
    var tick = function () { try { put(); } catch (e) {} if (++n < 60) setTimeout(tick, n < 20 ? 300 : 1000); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick, { once: true }); else tick();
  } catch (e) {}
})();
