document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* =========================================================
     1) فيديو السلايدر الرئيسي
     - يزيل صورة الخلفية من أول سلايد
     - يضيف فيديو داخل السلايد
  ========================================================= */
  function addVideoToSlide() {
    var slide = document.querySelector(".slide-0.hero-main");
    if (!slide) return;
    if (slide.querySelector(".custom-bg-video")) return;

    slide.style.setProperty("background-image", "none", "important");
    slide.style.setProperty("background", "none", "important");

    var video = document.createElement("video");
    video.className = "custom-bg-video";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "auto");

    var source = document.createElement("source");
    source.src = "https://green-camel-228650.hostingersite.com/wp-content/uploads/2026/04/0227-copy3.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    slide.insertBefore(video, slide.firstChild);
  }

  /* =========================================================
     2) نقل الشعار إلى منتصف الهيدر
     - ينسخ الشعار الأصلي
     - يضعه في المنتصف داخل الهيدر الثابت
  ========================================================= */
  function moveLogoToCenter() {
    var headerRow = document.querySelector(
      ".vs-header.layout3 .sticky-active > .container.custom-container > .d-flex"
    );

    var originalLogo = document.querySelector(
      ".vs-header.layout3 .sticky-active > .container.custom-container > .d-flex > .d-flex.align-items-center.justify-content-between > .header-logo.style3.text-center"
    );

    if (!headerRow || !originalLogo) return;

    var oldCenterLogo = headerRow.querySelector(".vs-header-logo-center");
    if (oldCenterLogo) {
      oldCenterLogo.remove();
    }

    var wrapper = document.createElement("div");
    wrapper.className = "vs-header-logo-center";

    var cloned = originalLogo.cloneNode(true);
    wrapper.appendChild(cloned);

    var headerIcons = headerRow.querySelector(".header-wc.style2");
    if (headerIcons) {
      headerRow.insertBefore(wrapper, headerIcons);
    } else {
      headerRow.appendChild(wrapper);
    }
  }

  /* =========================================================
     3) توحيد نص زر أضف للسلة
     - يغيّر النصوص إلى: أضف للسلة
  ========================================================= */
  function normalizeAddToCartText() {
    document.querySelectorAll(".add-to-cart-text").forEach(function (el) {
      el.textContent = "أضف للسلة";
    });
  }

  /* =========================================================
     4) تعديل قسم مميزات الاشتراك
     - يغيّر العنوان الفرعي
     - يغيّر العنوان الرئيسي
     - يبدّل الأيقونات والعناوين والوصف داخل بطاقات المميزات
  ========================================================= */
  function updateFeaturesSection() {
    var section = document.querySelector(
      'section[section-id="e7615fec-847b-40f0-b549-7c823b2e9910"]'
    );
    if (!section) return;

    var subTitle = section.querySelector(".title-area .sub-title");
    var mainTitle = section.querySelector(".title-area .section-title");

    if (subTitle) {
      subTitle.innerHTML = "لماذا يختارنا العملاء";
    }

    if (mainTitle) {
      var svg = mainTitle.querySelector("svg");
      mainTitle.childNodes[0].nodeValue = "مميزات الاشتراك";
      if (svg) mainTitle.appendChild(svg);
    }

    var items = section.querySelectorAll(".raqami-iconbox.style-01");

    var features = [
      {
        title: "ثبات وقت الذروة",
        desc: "مصادر بث احتياطية تساعد على تقليل الانقطاع خصوصًا أثناء المباريات والأحداث المهمة.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v6"></path>
            <path d="M16.24 7.76 12 12"></path>
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
        `
      },
      {
        title: "مكتبة ضخمة",
        desc: "وصول واسع إلى القنوات والمحتوى الترفيهي لتجد ما تريد بسهولة في أي وقت.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14.5A1.5 1.5 0 0 0 18.5 17H6.5A2.5 2.5 0 0 0 4 19.5z"></path>
            <path d="M8 8h8"></path>
            <path d="M8 12h6"></path>
          </svg>
        `
      },
      {
        title: "تعدد الأجهزة",
        desc: "تشغيل مرن على التلفاز الذكي، الجوال، التابلت، Apple TV و Android TV والكمبيوتر.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="13" height="9" rx="2"></rect>
            <path d="M8 19h3"></path>
            <rect x="17" y="8" width="4" height="8" rx="1"></rect>
          </svg>
        `
      },
      {
        title: "دعم فني متواصل",
        desc: "مساندة سريعة واحترافية لمساعدتك في التفعيل والمتابعة متى احتجت.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12a8 8 0 0 1 16 0"></path>
            <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"></path>
            <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z"></path>
            <path d="M12 20h2"></path>
          </svg>
        `
      }
    ];

    items.forEach(function (item, index) {
      var feature = features[index];
      if (!feature) return;

      var icon = item.querySelector(".icon.hbtn1");
      var title = item.querySelector(".content .title");
      var desc = item.querySelector(".content .desc");

      if (icon) icon.innerHTML = feature.icon;
      if (title) title.textContent = feature.title;
      if (desc) desc.textContent = feature.desc;
    });
  }

  /* =========================================================
     5) إنشاء قسم تفاعلي جديد بالمميزات
     - يبني سكشن كامل داخل section-id محدد
     - يضيف فيديو
     - يضيف تبويبات مميزات
     - يغيّر النص حسب الزر المضغوط
  ========================================================= */
  function buildInteractiveFeaturesSection() {
    var section = document.querySelector(
      'section[section-id="8d32afe8-44af-4fc2-b430-a9ce33adb61f"]'
    );
    if (!section) return;

    var features = [
      {
        key: "movies",
        label: "الأفلام",
        title: "مكتبة أفلام ضخمة",
        desc: "أكثر من 150,000 فيلم و40,000 مسلسل بجودة عالية ومحتوى متجدد لتجد دائمًا ما يستحق المشاهدة.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <path d="M8 5v14"></path>
            <path d="M16 5v14"></path>
            <path d="M3 10h18"></path>
            <path d="M3 14h18"></path>
          </svg>
        `
      },
      {
        key: "sports",
        label: "الرياضة",
        title: "تغطية رياضية قوية",
        desc: "قنوات رياضية وبث متجدد للأحداث المهمة مع استقرار أفضل وقت الذروة لعشاق المباريات والمتابعة المباشرة.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18c4-8 8-12 12-12"></path>
            <path d="M8 6c1.5 1.5 2.5 2.5 4 4"></path>
            <path d="M6 14c1.5 1.5 2.5 2.5 4 4"></path>
          </svg>
        `
      },
      {
        key: "channels",
        label: "القنوات",
        title: "تنوع كبير في القنوات",
        desc: "وصول واسع إلى باقات متنوعة من القنوات الترفيهية والرياضية لتستمتع بمحتوى أكثر في مكان واحد.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="6" width="16" height="10" rx="2"></rect>
            <path d="M10 20h4"></path>
            <path d="M12 16v4"></path>
          </svg>
        `
      },
      {
        key: "devices",
        label: "الأجهزة",
        title: "تشغيل مرن على كل أجهزتك",
        desc: "متوافق مع الشاشات الذكية، الجوال، التابلت، Apple TV وAndroid TV والكمبيوتر لتشاهد بالطريقة التي تناسبك.",
        icon: `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="13" height="9" rx="2"></rect>
            <rect x="17" y="8" width="4" height="8" rx="1"></rect>
            <path d="M8 19h3"></path>
          </svg>
        `
      }
    ];

    section.innerHTML = `
      <div class="jawak-interactive-block">
        <div class="jawak-interactive-shell">
          <div class="jawak-media-card">
            <video autoplay muted loop playsinline preload="auto">
              <source src="https://green-camel-228650.hostingersite.com/wp-content/uploads/2026/04/0203-copy-1-copy-copy-1.mp4">
            </video>
          </div>

          <div class="jawak-content-side">
            <div class="jawak-top-badge">تجربة أقوى. محتوى أكثر</div>
            <h2 class="jawak-main-title">كل ما تحتاجه في اشتراك واحد</h2>
            <p class="jawak-subtitle">
              اختر الميزة التي تهمك لتتعرف بسرعة على أبرز نقاط القوة في اشتراك Jawak TV،
              ثم انتقل مباشرة إلى صفحة الشراء.
            </p>

            <div class="jawak-tabs" role="tablist" aria-label="مميزات الاشتراك"></div>

            <div class="jawak-feature-view" id="jawak-feature-view">
              <h3 class="jawak-feature-title"></h3>
              <p class="jawak-feature-desc"></p>
              <a class="jawak-buy-btn" href="https://jawaktv.com/products/jawak-strong-1-month-sports-movies" target="_blank" rel="noopener noreferrer">شراء الآن</a>
            </div>
          </div>
        </div>
      </div>
    `;

    var tabsContainer = section.querySelector(".jawak-tabs");
    var featureView = section.querySelector(".jawak-feature-view");
    var titleEl = section.querySelector(".jawak-feature-title");
    var descEl = section.querySelector(".jawak-feature-desc");

    function renderFeature(index) {
      var feature = features[index];
      if (!feature) return;

      titleEl.textContent = feature.title;
      descEl.textContent = feature.desc;

      featureView.classList.remove("is-animating");
      void featureView.offsetWidth;
      featureView.classList.add("is-animating");

      section.querySelectorAll(".jawak-tab-btn").forEach(function (btn, i) {
        btn.classList.toggle("active", i === index);
        btn.setAttribute("aria-selected", i === index ? "true" : "false");
      });
    }

    features.forEach(function (feature, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "jawak-tab-btn" + (index === 0 ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
      btn.innerHTML = `
        <span class="jawak-tab-icon">${feature.icon}</span>
        <span class="jawak-tab-label">${feature.label}</span>
      `;
      btn.addEventListener("click", function () {
        renderFeature(index);
      });
      tabsContainer.appendChild(btn);
    });

    renderFeature(0);
  }

  /* =========================================================
     6) شريط سلة عائم في صفحة المنتج
     - يقرأ اسم المنتج والسعر
     - ينشئ شريط ثابت يظهر عند النزول
     - عند الضغط عليه يضغط زر السلة الأصلي
  ========================================================= */
  function initProductStickyCartBar() {
    var page = document.querySelector(".prodPage");
    if (!page) return;

    var titleEl = page.querySelector(".prodDetails > section > h1:first-of-type");
    var priceEl =
      page.querySelector(".prodDetails .price .salePrice") ||
      page.querySelector(".prodDetails .price");
    var cartBtn = page.querySelector(".prodDetails .addCart .btn-product-card");

    if (cartBtn) {
      var txt = cartBtn.querySelector(".add-to-cart-text");
      if (txt) txt.textContent = "أضف إلى السلة";
    }

    if (!titleEl || !cartBtn) return;

    var titleText = titleEl.textContent.trim();
    var priceText = priceEl ? priceEl.textContent.trim() : "";

    if (!document.querySelector(".jawak-sticky-cart-bar")) {
      var sticky = document.createElement("div");
      sticky.className = "jawak-sticky-cart-bar";
      sticky.innerHTML = `
        <div class="jawak-sticky-cart-meta">
          <div class="jawak-sticky-cart-title">${titleText}</div>
          <div class="jawak-sticky-cart-price">${priceText}</div>
        </div>
        <button type="button" class="jawak-sticky-cart-btn">أضف إلى السلة</button>
      `;

      document.body.appendChild(sticky);

      sticky
        .querySelector(".jawak-sticky-cart-btn")
        .addEventListener("click", function () {
          cartBtn.click();
        });

      function toggleStickyBar() {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 500) {
          sticky.classList.add("show");
        } else {
          sticky.classList.remove("show");
        }
      }

      window.addEventListener("scroll", toggleStickyBar, { passive: true });
      toggleStickyBar();
    }
  }

  /* =========================================================
     7) تشغيل جميع الوظائف
     - هنا فقط ترتيب التنفيذ
  ========================================================= */
  function initAllCustomScripts() {
    addVideoToSlide();
    moveLogoToCenter();
    normalizeAddToCartText();
    updateFeaturesSection();
    buildInteractiveFeaturesSection();
    initProductStickyCartBar();
    initMobileBottomBar();
  }

  initAllCustomScripts();

  window.addEventListener("load", function () {
    addVideoToSlide();
    moveLogoToCenter();
  });

  setTimeout(addVideoToSlide, 1000);
  setTimeout(addVideoToSlide, 2000);
  setTimeout(addVideoToSlide, 3500);

  setTimeout(moveLogoToCenter, 500);
  setTimeout(moveLogoToCenter, 1500);
  setTimeout(moveLogoToCenter, 3000);
}); 


(function () {
  // تأكد من تشغيله على صفحة المنتج فقط
  if (!document.querySelector('.products-details-page')) return;

  function initProductPage() {
    var prodPage = document.querySelector('.prodPage');
    if (!prodPage) return;

    // ===== Sticky Add to Cart Bar =====
    var productName = '';
    var productPrice = '';
    var h1El = prodPage.querySelector('.prodDetails h1');
    var priceEl = prodPage.querySelector('.price .salePrice');

    if (h1El) productName = h1El.textContent.trim();
    if (priceEl) productPrice = priceEl.textContent.trim();

    // إنشاء الشريط
    if (!document.getElementById('sticky-cart-bar')) {
      var bar = document.createElement('div');
      bar.id = 'sticky-cart-bar';
      bar.innerHTML =
        '<span class="sticky-product-name">' + productName + '</span>' +
        '<span class="sticky-price">' + productPrice + '</span>' +
        '<button class="sticky-add-btn">🛒 أضف إلى السلة</button>';
      document.body.appendChild(bar);

      // ربط زر الشريط بزر الإضافة الحقيقي
      bar.querySelector('.sticky-add-btn').addEventListener('click', function () {
        if (typeof productAddToCart === 'function') {
          productAddToCart();
        } else {
          var mainBtn = document.getElementById('product-view-add-to-cart');
          if (mainBtn) mainBtn.click();
        }
      });
    }

    // إظهار/إخفاء الشريط عند التمرير
    var mainAddBtn = document.getElementById('product-view-add-to-cart');
    var stickyBar = document.getElementById('sticky-cart-bar');

    function onScroll() {
      if (!mainAddBtn || !stickyBar) return;
      var rect = mainAddBtn.getBoundingClientRect();
      var isOutOfView = rect.bottom < 0;
      if (isOutOfView) {
        stickyBar.classList.add('show');
      } else {
        stickyBar.classList.remove('show');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // تشغيل بعد اكتمال jQuery والصفحة
  if (typeof $ !== 'undefined') {
    $(document).ready(function () {
      // انتظار قصير لضمان اكتمال hydration
      setTimeout(initProductPage, 500);
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(initProductPage, 800);
    });
  }
})();


/* =========================================================
   شريط سفلي للجوال فقط
   يضيف أزرار: الرئيسية - البحث - السلة - الدخول
   ويعمل فقط على الهاتف بدون التأثير على الديسكتوب
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (window.location.pathname.indexOf("/auth/") !== -1) return;
  if (window.innerWidth > 768) return;
  if (document.querySelector(".arena-mobile-bottom-bar")) return;

  function pickLink(selectors, fallback) {
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el && el.getAttribute("href")) return el.getAttribute("href");
    }
    return fallback;
  }

  var cartHref = pickLink(
    ['a[href*="/cart"]', 'a[href*="checkout/cart"]', '.cart_btn a', '.header-cart a'],
    "/cart"
  );

  var accountHref = pickLink(
    ['a[href*="/auth/login"]', 'a[href*="login"]', '.user-login a'],
    "/auth/login"
  );

  var bar = document.createElement("nav");
  bar.className = "arena-mobile-bottom-bar";
  bar.setAttribute("aria-label", "شريط التنقل السفلي");

  bar.innerHTML =
    '<a class="arena-mobile-nav-link" data-key="home" href="/">' +
      '<span class="arena-mobile-nav-icon-wrap">' +
        '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24">' +
          '<path d="M3 10.5L12 3L21 10.5"/>' +
          '<path d="M5 9.5V20H19V9.5"/>' +
        '</svg>' +
      '</span>' +
      '<span class="arena-mobile-nav-label">الرئيسية</span>' +
    '</a>' +

    '<button class="arena-mobile-nav-link arena-search-btn" data-key="search" type="button">' +
      '<span class="arena-mobile-nav-icon-wrap">' +
        '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24">' +
          '<circle cx="11" cy="11" r="6"/>' +
          '<path d="M20 20L16 16"/>' +
        '</svg>' +
      '</span>' +
      '<span class="arena-mobile-nav-label">بحث</span>' +
    '</button>' +

    '<a class="arena-mobile-nav-link" data-key="cart" href="' + cartHref + '">' +
      '<span class="arena-mobile-nav-icon-wrap">' +
        '<span class="arena-mobile-nav-badge" id="arena-mobile-cart-badge">0</span>' +
        '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24">' +
          '<circle cx="9" cy="20" r="1.5"/>' +
          '<circle cx="18" cy="20" r="1.5"/>' +
          '<path d="M3 4H5L7.2 14.2A1 1 0 0 0 8.2 15H17.6A1 1 0 0 0 18.6 14.2L20 7H7"/>' +
        '</svg>' +
      '</span>' +
      '<span class="arena-mobile-nav-label">السلة</span>' +
    '</a>' +

    '<a class="arena-mobile-nav-link" data-key="account" href="' + accountHref + '">' +
      '<span class="arena-mobile-nav-icon-wrap">' +
        '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24">' +
          '<circle cx="12" cy="8" r="3.5"/>' +
          '<path d="M5 20A7 7 0 0 1 19 20"/>' +
        '</svg>' +
      '</span>' +
      '<span class="arena-mobile-nav-label">دخول</span>' +
    '</a>';

  document.body.appendChild(bar);

  /* ===== حل مشكلة البحث ===== */
  var searchBtn = bar.querySelector(".arena-search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();

      /* الخطوة 1: ابحث عن زر البحث الحقيقي في الهيدر واضغطه */
      var realTriggers = [
        '.searchBox a',
        '.searchBox button',
        '.header-search a',
        '.header-search button',
        '.vs-menu-search',
        '.search-icon',
        '.popup-search-toggle',
        '[data-bs-target*="search"]',
        '[data-target*="search"]',
        'a[href="#popup_search"]',
        'a[href*="popup_search"]',
        '.headerSearch-trigger',
        '.search-toggle'
      ];

      for (var i = 0; i < realTriggers.length; i++) {
        var trigger = document.querySelector(realTriggers[i]);
        if (trigger && !trigger.closest(".arena-mobile-bottom-bar")) {
          trigger.click();

          /* انتظر ثم ركّز على حقل البحث */
          setTimeout(function () {
            var input = document.querySelector(
              ".popup-search-box .search-input-input, " +
              ".popup-search-box input[type='search'], " +
              ".headerSearch input"
            );
            if (input) input.focus();
          }, 350);
          return;
        }
      }

      /* الخطوة 2: إذا ما وجدنا زر، نفعّل popup يدويًا مع تشغيل animation */
      var popupBox = document.querySelector(".popup-search-box");
      if (popupBox) {
        popupBox.style.opacity = "1";
        popupBox.style.visibility = "visible";
        popupBox.style.top = "0px";

        var form = popupBox.querySelector(".headerSearch");
        if (form) {
          form.style.transition = "transform 0.4s ease, opacity 0.4s ease";
          form.style.transform = "translate(-50%, -50%) scale(1)";
          form.style.opacity = "1";
        }

        setTimeout(function () {
          var input = popupBox.querySelector(".search-input-input, input[type='search']");
          if (input) input.focus();
        }, 450);
        return;
      }

      /* الخطوة 3: احتياطي */
      window.location.href = "/products?q=";
    });
  }

  function markActiveItem() {
    var current = window.location.pathname;
    bar.querySelectorAll(".arena-mobile-nav-link").forEach(function (link) {
      var key = link.dataset.key;
      if (key === "home" && current === "/") link.classList.add("is-active");
      if (key === "cart" && current.indexOf("cart") !== -1) link.classList.add("is-active");
      if (key === "account" && (current.indexOf("login") !== -1 || current.indexOf("account") !== -1)) {
        link.classList.add("is-active");
      }
    });
  }

  function updateCartBadge() {
    var badge = document.getElementById("arena-mobile-cart-badge");
    if (!badge) return;
    var countEl = document.querySelector(
      ".cart-count, .count, .cart_counter, .header-cart-count, .mini-cart-count"
    );
    if (!countEl) return;
    var count = (countEl.textContent || "").replace(/[^\d]/g, "");
    if (!count) return;
    badge.textContent = count;
    badge.classList.add("has-count");
  }

  markActiveItem();
  updateCartBadge();
});
