/* شرح طاولة 4 في 1 – قسم c529136902 (24 نوفمبر 2026). نصوص قابلة للتعديل من AK_WORLDS_CONFIG.q4x */
(function () {
  try {
    if (window.__akq4x) return; window.__akq4x = 1;
    var CFG = (window.AK_WORLDS_CONFIG && window.AK_WORLDS_CONFIG.q4x) || {};
    if (CFG.on === false) return;
    var CAT = CFG.cat || '529136902';
    if (!new RegExp('/c' + CAT + '(\\D|$)').test(decodeURIComponent(location.pathname))) return;
    var BASE = (function () { var s = document.querySelector('script[src*="ak-q4explain.js"]'); return s ? s.src.replace(/\/ak-q4explain\.js.*$/, '') : 'https://cdn.jsdelivr.net/gh/alkasrlwb-hub/alkasser-store-assets@main'; })();
    var IMG = BASE + '/img/q4x/';
    var WA = String(CFG.wa || '966598060796').replace(/\D/g, '');
    var wa = function (t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); };
    var AK = CFG.ak || 1821944654, BN = CFG.bn || 680552681;
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };
    var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var T = {
      badge: '4 في 1', title: 'وحدة بدل أربع', lead: 'تقلبها وتصير',
      words: ['بلياردو', 'هوكي', 'تنس', 'طاولة طعام أو مكتبية'],
      sub: 'طاولة وحدة بمقاس 210 × 110 سم، تقلبها وتصير لعبة ثانية.',
      ship: 'توصيل مجاني للرياض وجدة والدمام والقصيم',
      see: 'شوف الموديلات ↓', ask: 'اسألنا بالواتساب',
      askMsg: 'السلام عليكم، أبي أسأل عن طاولة 4 في 1',
      cards: [
        ['u_bil', 'بلياردو', 'قماش أزرق وجيوب، ومعها العصي والكرات'],
        ['u_hok', 'هوكي هوائي', 'تحدي سريع بين اثنين'],
        ['u_ten', 'تنس طاولة', 'الشبكة والمضارب والكور معها'],
        ['u_din', 'طاولة طعام أو طاولة مكتبية', 'بعد اللعب تتعشون عليها أو تشتغل عليها']
      ],
      pickT: 'وش يهمك أكثر؟',
      pick1: 'لوح التنس يبقى مكانه + عداد هوكي إلكتروني + غطاء حماية', pick1n: 'AK-101 · أسود أو بني',
      pick2: 'أقل سعر بنفس المقاس', pick2n: 'طاولة 4 في 1 الدوّارة · أسود مع أزرق',
      colT: 'لونين: أسود وبني', colS: 'نفس الطاولة ونفس الألعاب، تختار اللون من صفحة المنتج.',
      pickHelp: 'محتار؟ كلّمنا بالواتساب ونساعدك تختار.',
      stepsT: 'من بلياردو لهوكي لتنس',
      steps: [['s1', '1', 'بلياردو'], ['s3', '2', 'تقلبها: هوكي'], ['s4', '3', 'تنس، والوجه المسطح طاولة طعام أو مكتبية']],
      stepsNote: 'في AK-101 لوح التنس يبقى مكانه وقت القلب.',
      dimT: 'المقاس بالضبط',
      dims: [['210 سم', 'الطول'], ['110 سم', 'العرض'], ['81 سم', 'الارتفاع'], ['180 كجم', 'الوزن']],
      dimNote: 'نفس المقاس والوزن للموديلين.',
      floor: 'ساكن في دور علوي؟ اكتب لنا رقم الدور في الملاحظات وقت الطلب.',
      roomT: 'يناسب مجلسك؟',
      room: ['للبلياردو: خل الغرفة 5 × 4 م تقريباً، عشان العصا تتحرك براحة.', 'للهوكي والتنس وطاولة الطعام: يكفي مكان تمشي فيه حولها.', 'مروحة الهوكي تحتاج فيش كهرباء قريب.'],
      endT: 'تبي تتأكد قبل ما تطلب؟',
      endS: 'كلّمنا بالواتساب: نرسل لك صور ومقاسات، ونتأكد من التوصيل لمدينتك.',
      bulk: 'تبي أكثر من طاولة؟ اطلب عرض سعر',
      bulkMsg: 'السلام عليكم، أبي عرض سعر لأكثر من طاولة 4 في 1',
      bulkSub: 'للكوفيهات والاستراحات والمدارس'
    };
    for (var k in CFG) if (T[k] !== undefined) T[k] = CFG[k];

    var R = 'html body :is(#ak-q4x-top,#ak-q4x-bot).akx';
    var CSS = [
      R + '{position:relative;z-index:3;isolation:isolate;direction:rtl;font-family:Cairo,inherit;color:#E6EEF8;background:#06101F;border-radius:18px;padding:18px 16px;margin:14px 0;overflow:hidden;line-height:1.6;text-align:right}',
      R + ' *{box-sizing:border-box}',
      R + ' :is(h2,h3,p,li,b,span,a,figcaption){color:inherit!important;font-family:Cairo,inherit!important}',
      R + ' h2{font-size:26px!important;font-weight:800!important;margin:6px 0 2px!important;line-height:1.3!important;color:#fff!important}',
      R + ' h3{font-size:20px!important;font-weight:800!important;margin:0 0 10px!important;color:#fff!important}',
      R + ' .akx-b{display:inline-block;background:#22D3EE;color:#06101F!important;font-weight:800;font-size:13px;border-radius:999px;padding:2px 12px}',
      R + ' .akx-l{font-size:18px;font-weight:700;margin:0}',
      R + ' .akx-w{color:#22D3EE!important;display:inline-block;min-width:4em}',
      R + ' .akx-s{font-size:15px;opacity:.9;margin:4px 0 12px}',
      R + ' .akx-btns{display:flex;gap:8px;flex-wrap:wrap}',
      R + ' .akx-btn{flex:1 1 0;min-width:140px;display:inline-flex;align-items:center;justify-content:center;min-height:46px;border-radius:12px;font-weight:800;font-size:15px;text-decoration:none!important;padding:8px 12px;text-align:center}',
      R + ' .akx-btn--p{background:#22D3EE;color:#06101F!important}',
      R + ' .akx-btn--o{border:1.5px solid #22D3EE;color:#22D3EE!important;background:transparent}',
      R + ' .akx-ship{font-size:13px;opacity:.85;margin:10px 0 0}',
      R + ' .akx-cards{display:grid;grid-auto-flow:column;grid-auto-columns:72%;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;margin:16px -16px 0;padding:0 16px 6px;list-style:none}',
      R + ' .akx-cards,' + R + ' .akx-steps{scrollbar-width:none}' + R + ' .akx-cards::-webkit-scrollbar,' + R + ' .akx-steps::-webkit-scrollbar{display:none}',
      R + ' .akx-cards li{scroll-snap-align:start;background:#0B1630;border-radius:14px;overflow:hidden;margin:0}',
      R + ' .akx-cards img,' + R + ' .akx-steps img{display:block;width:100%;aspect-ratio:4/3;height:auto;object-fit:cover;background:#0B1630}',
      R + ' .akx-cards b{display:block;font-size:16px;font-weight:800;padding:8px 12px 0;color:#fff!important}',
      R + ' .akx-cards span{display:block;font-size:13px;opacity:.85;padding:0 12px 12px}',
      R + ' .akx-pick{margin-top:18px}',
      R + ' .akx-dots{display:flex;justify-content:center;gap:6px;margin:8px 0 0}' + R + ' .akx-dots span{width:7px;height:7px;border-radius:50%;background:#1E3A5F}' + R + ' .akx-dots span.on{background:#22D3EE;width:18px;border-radius:4px}',
      R + ' .akx-cols{margin-top:18px}' + R + ' .akx-cols ul{display:flex;gap:10px;margin:0;padding:0;list-style:none;flex-wrap:wrap}' + R + ' .akx-cols li{display:flex;align-items:center;gap:10px;background:#0B1630;border:1.5px solid #1E3A5F;border-radius:999px;padding:8px 16px 8px 12px;margin:0}' + R + ' .akx-cols i{display:inline-block;width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.35);box-shadow:0 0 0 3px #0B1630,0 0 0 4.5px rgba(255,255,255,.35)}' + R + ' .akx-cols b{font-weight:800;color:#fff!important}',
      R + ' .akx-picks{display:grid;gap:10px}',
      R + ' .akx-pk{display:block;background:#0B1630;border:1.5px solid #1E3A5F;border-radius:14px;padding:12px 14px;text-decoration:none!important}',
      R + ' .akx-pk:hover{border-color:#22D3EE}',
      R + ' .akx-pk b{display:block;font-size:15px;font-weight:800;color:#fff!important}',
      R + ' .akx-pk span{display:block;font-size:14px;color:#22D3EE!important;font-weight:700;margin-top:4px}',
      R + ' .akx-help{font-size:14px;margin:10px 0 0}',
      R + ' .akx-help a{color:#22D3EE!important;font-weight:800}',
      R + ' .akx-steps{display:grid;grid-auto-flow:column;grid-auto-columns:78%;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -16px;padding:0 16px 6px;list-style:none}',
      R + ' .akx-steps li{scroll-snap-align:start;background:#0B1630;border-radius:14px;overflow:hidden;margin:0}',
      R + ' .akx-steps p{margin:0;padding:10px 12px;font-size:15px;font-weight:700}',
      R + ' .akx-steps i{font-style:normal;display:inline-flex;width:26px;height:26px;border-radius:50%;background:#22D3EE;color:#06101F!important;align-items:center;justify-content:center;font-weight:800;margin-left:8px}',
      R + ' .akx-note{font-size:13px;opacity:.85;margin:10px 0 0}',
      R + ' .akx-sec{margin-top:22px}',
      R + ' .akx-sec:first-child{margin-top:0}',
      R + ' .akx-fig{margin:0;border-radius:14px;overflow:hidden;background:#fff}',
      R + ' .akx-fig img{display:block;width:100%;aspect-ratio:4/3;height:auto;object-fit:cover}',
      R + ' .akx-dims{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:10px 0 0;padding:0;list-style:none}',
      R + ' .akx-dims li{background:#0B1630;border-radius:12px;padding:8px 4px;text-align:center;margin:0}',
      R + ' .akx-dims b{display:block;font-size:17px;font-weight:800;color:#22D3EE!important}',
      R + ' .akx-dims span{font-size:12px;opacity:.85}',
      R + ' .akx-room ul{margin:10px 0 0;padding:0 18px 0 0}',
      R + ' .akx-room li{font-size:15px;margin:4px 0}',
      R + ' .akx-end{background:#0B1630;border-radius:14px;padding:14px}',
      R + ' .akx-end .akx-btns{margin-top:10px}',
      R + ' .akx-bsub{display:block;font-size:12px;font-weight:600;opacity:.9}',
      '@media (min-width:768px){' + R + '{padding:28px}' + R + ' .akx-dots{display:none}' + R + ' h2{font-size:40px!important}' + R + ' .akx-top{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:24px;align-items:center}' +
        R + ' .akx-cards{grid-auto-flow:row;grid-template-columns:repeat(2,minmax(0,1fr));overflow:visible;margin:0;padding:0}' +
        R + ' .akx-picks{grid-template-columns:1fr 1fr}' + R + ' .akx-steps{grid-auto-flow:row;grid-template-columns:repeat(3,minmax(0,1fr));overflow:visible;margin:0;padding:0}' +
        R + ' .akx-two{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}' + R + ' .akx-btn{flex:0 1 auto}}',
      '@media (min-width:1100px){' + R + ' .akx-cards{grid-template-columns:repeat(4,minmax(0,1fr))}' + R + ' .akx-top{grid-template-columns:1fr}}'
    ].join('\n');

    var img = function (n, alt, eager) { return '<img src="' + IMG + n + '.webp" alt="' + esc(alt) + '" width="640" height="480" ' + (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async">'; };

    var top = function () {
      var h = '<div class="akx-top"><div>';
      h += '<span class="akx-b">' + esc(T.badge) + '</span><h2>' + esc(T.title) + '</h2>';
      h += '<p class="akx-l">' + esc(T.lead) + ' <span class="akx-w" aria-live="off">' + esc(T.words[0]) + '</span></p>';
      h += '<p class="akx-s">' + esc(T.sub) + '</p>';
      h += '<div class="akx-btns"><a class="akx-btn akx-btn--p" href="#akx-products" data-akx-go>' + esc(T.see) + '</a><a class="akx-btn akx-btn--o" href="' + wa(T.askMsg) + '" target="_blank" rel="noopener">' + esc(T.ask) + '</a></div>';
      h += '<p class="akx-ship">' + esc(T.ship) + '</p></div>';
      h += '<ul class="akx-cards">' + T.cards.map(function (c, i) { return '<li>' + img(c[0], 'طاولة 4 في 1 – ' + c[1], i === 0) + '<b>' + esc(c[1]) + '</b><span>' + esc(c[2]) + '</span></li>'; }).join('') + '</ul></div>';
      h += '<div class="akx-dots" aria-hidden="true">' + T.cards.map(function (c, i) { return '<span' + (i ? '' : ' class="on"') + '></span>'; }).join('') + '</div>';
      h += '<div class="akx-cols"><h3>' + esc(T.colT) + '</h3><ul>' + [['#111418', 'أسود'], ['#4A2C20', 'بني']].map(function (c) { return '<li><i style="background:' + c[0] + '"></i><b>' + c[1] + '</b></li>'; }).join('') + '</ul><p class="akx-note">' + esc(T.colS) + '</p></div>';
      h += '<div class="akx-pick"><h3>' + esc(T.pickT) + '</h3><div class="akx-picks">';
      h += '<a class="akx-pk" data-akx-p="' + AK + '" href="#"><b>' + esc(T.pick1) + '</b><span>' + esc(T.pick1n) + '<bdi class="akx-pr"></bdi></span></a>';
      h += '<a class="akx-pk" data-akx-p="' + BN + '" href="#"><b>' + esc(T.pick2) + '</b><span>' + esc(T.pick2n) + '<bdi class="akx-pr"></bdi></span></a>';
      h += '</div><p class="akx-help">' + esc(T.pickHelp).replace('بالواتساب', '<a href="' + wa(T.askMsg) + '" target="_blank" rel="noopener">بالواتساب</a>') + '</p></div>';
      return h;
    };

    var bot = function () {
      var h = '<div class="akx-sec"><h3>' + esc(T.stepsT) + '</h3><ol class="akx-steps">';
      h += T.steps.map(function (s) { return '<li>' + img(s[0], 'طاولة 4 في 1 – ' + s[2]) + '<p><i>' + s[1] + '</i>' + esc(s[2]) + '</p></li>'; }).join('');
      h += '</ol><p class="akx-note">' + esc(T.stepsNote) + '</p></div>';
      h += '<div class="akx-two">';
      h += '<div class="akx-sec"><h3>' + esc(T.dimT) + '</h3><figure class="akx-fig">' + img('dim', 'طاولة 4 في 1 بمقاس 210 × 110 × 81 سم') + '</figure>';
      h += '<ul class="akx-dims">' + T.dims.map(function (d) { return '<li><b><bdi>' + esc(d[0]) + '</bdi></b><span>' + esc(d[1]) + '</span></li>'; }).join('') + '</ul>';
      h += '<p class="akx-note">' + esc(T.dimNote) + ' ' + esc(T.floor) + '</p></div>';
      h += '<div class="akx-sec akx-room"><h3>' + esc(T.roomT) + '</h3><figure class="akx-fig">' + img('room2', 'طاولة 4 في 1 من فوق في مجلس مقاسه 5 × 4 م تقريباً') + '</figure>';
      h += '<ul>' + T.room.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>';
      h += '</div>';
      h += '<div class="akx-sec akx-end"><h3>' + esc(T.endT) + '</h3><p style="margin:0">' + esc(T.endS) + '</p><div class="akx-btns">';
      h += '<a class="akx-btn akx-btn--p" href="' + wa(T.askMsg) + '" target="_blank" rel="noopener">' + esc(T.ask) + '</a>';
      h += '<a class="akx-btn akx-btn--o" href="' + wa(T.bulkMsg) + '" target="_blank" rel="noopener"><span>' + esc(T.bulk) + '<span class="akx-bsub">' + esc(T.bulkSub) + '</span></span></a>';
      h += '</div><p class="akx-ship">' + esc(T.ship) + '</p></div>';
      return h;
    };

    var prices = function (el) {
      if (!(window.salla && window.salla.api && window.salla.api.product)) return;
      window.salla.api.product.fetch({ source: 'selected', source_value: [AK, BN] }).then(function (r) {
        (r && r.data || []).forEach(function (p) {
          var a = el.querySelector('[data-akx-p="' + p.id + '"]'); if (!a) return;
          if (p.url) a.href = p.url;
          var v = +(p.is_on_sale && p.sale_price ? p.sale_price : p.price) || 0;
          var s = a.querySelector('.akx-pr'); if (s && v) s.textContent = ' · ' + fmt(v) + ' ريال';
        });
      }, function () {});
    };

    var rotate = function (el) {
      var w = el.querySelector('.akx-w'); if (!w || RM) return;
      var i = 0, n = 0;
      var t = setInterval(function () { i = (i + 1) % T.words.length; w.textContent = T.words[i]; if (++n >= T.words.length * 3) { clearInterval(t); w.textContent = T.words[0]; } }, 2600);
    };

    var put = function () {
      var list = document.querySelector('salla-products-list');
      var h1 = document.querySelector('#main-content h1');
      var box = h1 && h1.closest('div.mb-4');
      if (!list && !box) return false;
      if (!document.getElementById('akx-css')) { var s = document.createElement('style'); s.id = 'akx-css'; s.textContent = CSS; document.head.appendChild(s); }
      var t = document.getElementById('ak-q4x-top');
      if (!t) {
        t = document.createElement('div'); t.id = 'ak-q4x-top'; t.className = 'akx'; t.setAttribute('role', 'region'); t.setAttribute('aria-label', T.title);
        t.innerHTML = top();
        if (box) box.insertAdjacentElement('afterend', t); else list.insertAdjacentElement('beforebegin', t);
        t.addEventListener('click', function (e) {
          var g = e.target.closest && e.target.closest('[data-akx-go]'); if (!g) return;
          var l = document.querySelector('salla-products-list'); if (!l) return;
          e.preventDefault(); l.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
        });
        prices(t); rotate(t);
        var row = t.querySelector('.akx-cards'), dots = t.querySelectorAll('.akx-dots span');
        if (row && dots.length) row.addEventListener('scroll', function () { var w = row.firstElementChild ? row.firstElementChild.offsetWidth + 10 : 1; var i = Math.min(dots.length - 1, Math.round(Math.abs(row.scrollLeft) / w)); for (var d = 0; d < dots.length; d++) dots[d].className = d === i ? 'on' : ''; }, { passive: true });
      }
      // المقارنة (ak-q4compare) تجي بعد الافتتاحية مباشرة
      var cmp = document.getElementById('ak-q4cmp');
      if (cmp && t.nextElementSibling !== cmp && cmp.parentNode === t.parentNode) t.insertAdjacentElement('afterend', cmp);
      if (list && !document.getElementById('ak-q4x-bot')) {
        var b = document.createElement('div'); b.id = 'ak-q4x-bot'; b.className = 'akx'; b.setAttribute('role', 'region'); b.setAttribute('aria-label', T.stepsT);
        b.innerHTML = bot();
        var host = list.parentElement, anchor = list;
        if (host && /flex|grid/.test(getComputedStyle(host).display) && host.children.length <= 3) anchor = host; // القائمة داخل صف flex: نحط الشرح تحت الصف كامل مو جنبه
        anchor.insertAdjacentElement('afterend', b);
        list.id = list.id || 'akx-products';
      }
      return !!(t && document.getElementById('ak-q4x-bot'));
    };

    var n = 0;
    var tick = function () { var ok = false; try { ok = put(); } catch (e) {} if (++n < 40 && !(ok && document.getElementById('ak-q4cmp'))) setTimeout(tick, n < 20 ? 300 : 1000); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick, { once: true }); else tick();
  } catch (e) {}
})();
