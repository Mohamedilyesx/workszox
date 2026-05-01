/* =========================================================
   JAWAKTV - CUSTOM SCRIPTS
   كل الكود في DOMContentLoaded واحدة منظمة
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* =========================================================
     1) فيديو السلايدر الرئيسي
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
    source.src = "https://green-camel-228650.hostingersite.com/wp-content/uploads/2026/05/0227-copy5.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    slide.insertBefore(video, slide.firstChild);
  }

  /* =========================================================
     2) نقل الشعار إلى منتصف الهيدر
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
    if (oldCenterLogo) oldCenterLogo.remove();

    var wrapper = document.createElement("div");
    wrapper.className = "vs-header-logo-center";
    wrapper.appendChild(originalLogo.cloneNode(true));

    var headerIcons = headerRow.querySelector(".header-wc.style2");
    if (headerIcons) {
      headerRow.insertBefore(wrapper, headerIcons);
    } else {
      headerRow.appendChild(wrapper);
    }
  }

  /* =========================================================
     3) توحيد نص زر أضف للسلة
  ========================================================= */
  function normalizeAddToCartText() {
    document.querySelectorAll(".add-to-cart-text").forEach(function (el) {
      el.textContent = "أضف للسلة";
    });
  }

  /* =========================================================
     4) تعديل قسم مميزات الاشتراك
  ========================================================= */
  function updateFeaturesSection() {
    var section = document.querySelector(
      'section[section-id="e7615fec-847b-40f0-b549-7c823b2e9910"]'
    );
    if (!section) return;

    var subTitle = section.querySelector(".title-area .sub-title");
    var mainTitle = section.querySelector(".title-area .section-title");

    if (subTitle) subTitle.innerHTML = "لماذا يختارنا العملاء";

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
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v6"></path><path d="M16.24 7.76 12 12"></path><circle cx="12" cy="12" r="8"></circle></svg>'
      },
      {
        title: "مكتبة ضخمة",
        desc: "وصول واسع إلى القنوات والمحتوى الترفيهي لتجد ما تريد بسهولة في أي وقت.",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14.5A1.5 1.5 0 0 0 18.5 17H6.5A2.5 2.5 0 0 0 4 19.5z"></path><path d="M8 8h8"></path><path d="M8 12h6"></path></svg>'
      },
      {
        title: "تعدد الأجهزة",
        desc: "تشغيل مرن على التلفاز الذكي، الجوال، التابلت، Apple TV و Android TV والكمبيوتر.",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="13" height="9" rx="2"></rect><path d="M8 19h3"></path><rect x="17" y="8" width="4" height="8" rx="1"></rect></svg>'
      },
      {
        title: "دعم فني متواصل",
        desc: "مساندة سريعة واحترافية لمساعدتك في التفعيل والمتابعة متى احتجت.",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"></path><path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z"></path><path d="M12 20h2"></path></svg>'
      }
    ];

    items.forEach(function (item, index) {
      var feature = features[index];
      if (!feature) return;
      var icon  = item.querySelector(".icon.hbtn1");
      var title = item.querySelector(".content .title");
      var desc  = item.querySelector(".content .desc");
      if (icon)  icon.innerHTML  = feature.icon;
      if (title) title.textContent = feature.title;
      if (desc)  desc.textContent  = feature.desc;
    });
  }

/* =========================================================
   5) قسم تفاعلي بالمميزات
========================================================= */
function buildInteractiveFeaturesSection() {
  var section = document.querySelector(
    'section[section-id="8d32afe8-44af-4fc2-b430-a9ce33adb61f"]'
  );
  if (!section) return;

  var features = [
    {
      key: "movies", label: "أفلام",
      title: "مكتبة أفلام ضخمة",
      desc: "أكثر من 150,000 فيلم بجودة HD و4K، من أحدث الإصدارات إلى كلاسيكيات السينما العالمية — كل ما تريد مشاهدته في مكان واحد.",
icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>'    },
    {
      key: "series", label: "مسلسلات",
      title: "آلاف المسلسلات بلا انقطاع",
      desc: "تابع أشهر المسلسلات العربية والعالمية والتركية بمحتوى متجدد يومياً، مع دعم التشغيل المستمر بين الحلقات دون توقف.",
      icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M10 9l6 3-6 3V9z" fill="currentColor"/><path d="M2 9h3M19 9h3M2 15h3M19 15h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    },
    {
      key: "sports", label: "رياضة",
      title: "تغطية رياضية مباشرة",
      desc: "شاهد مباريات كرة القدم والدوريات العالمية بجودة عالية واستقرار ممتاز وقت الذروة — دون تقطع أو تأخير.",
      icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h12l-1 7a5 5 0 0 1-10 0L6 3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 6H3a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4M18 6h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 17v3M8 20h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    },
    {
      key: "anime", label: "أنمي",
      title: "عالم الأنمي بلا حدود",
      desc: "استمتع بمئات المسلسلات والأفلام الأنمي من كلاسيكيات الثمانينات حتى أحدث إصدارات الموسم الجاري، مدبلجة ومترجمة.",
      icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2c-1 2.5-.5 4.5 1 6-2-.5-3.5-2-4-4C7 6 6 9 7 11.5 5.5 11 4.5 9.5 4 8c-.5 2.5.5 5 2.5 6.5C5 16 4.5 18 5 19.5 6.5 22 9.5 22 12 22s5.5 0 7-2.5c.5-1.5 0-3.5-1.5-5C19.5 13 20.5 10.5 20 8c-.5 1.5-1.5 3-3 3.5C18 9 18 6 16 4c-.5 2-2 3.5-4 4 1.5-1.5 2-3.5 1-5C13 3 12.5 2.5 12 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 16c1 1.5 5 1.5 6 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    }
  ];

  section.innerHTML =
    '<div class="jawak-interactive-block">' +
      '<div class="jawak-interactive-shell">' +
        '<div class="jawak-media-card">' +
          '<video autoplay muted loop playsinline preload="auto">' +
            '<source src="https://green-camel-228650.hostingersite.com/wp-content/uploads/2026/04/0203-copy-1-copy-copy-11.mp4">' +
          '</video>' +
        '</div>' +
        '<div class="jawak-content-side">' +
          '<div class="jawak-top-badge">تجربة أقوى. محتوى أكثر</div>' +
          '<h2 class="jawak-main-title">كل ما تحتاجه في اشتراك واحد</h2>' +
          '<p class="jawak-subtitle">اختر القسم الذي يهمك لتتعرف على أبرز مميزات اشتراك Jawak TV، ثم انتقل مباشرة لصفحة الشراء.</p>' +
          '<div class="jawak-tabs" role="tablist" aria-label="مميزات الاشتراك"></div>' +
          '<div class="jawak-feature-view" id="jawak-feature-view">' +
            '<h3 class="jawak-feature-title"></h3>' +
            '<p class="jawak-feature-desc"></p>' +
            '<a class="jawak-buy-btn" href="https://jawaktv.com/products/" target="_blank" rel="noopener noreferrer">شراء الآن</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  var tabsContainer = section.querySelector(".jawak-tabs");
  var titleEl       = section.querySelector(".jawak-feature-title");
  var descEl        = section.querySelector(".jawak-feature-desc");
  var featureView   = section.querySelector(".jawak-feature-view");

  function renderFeature(index) {
    var feature = features[index];
    if (!feature) return;
    titleEl.textContent = feature.title;
    descEl.textContent  = feature.desc;
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
    btn.innerHTML =
      '<span class="jawak-tab-icon">' + feature.icon + '</span>' +
      '<span class="jawak-tab-label">' + feature.label + '</span>';
    btn.addEventListener("click", function () { renderFeature(index); });
    tabsContainer.appendChild(btn);
  });

  renderFeature(0);
}
  
  /* =========================================================
     6) شريط سلة عائم (صفحة المنتج فقط)
  ========================================================= */
  function initProductStickyCartBar() {
    if (!document.querySelector(".products-details-page")) return;

    var page = document.querySelector(".prodPage");
    if (!page) return;

    var h1El     = page.querySelector(".prodDetails h1");
    var priceEl  = page.querySelector(".prodDetails .price .salePrice") ||
                   page.querySelector(".prodDetails .price");
    var cartBtn  = page.querySelector("#product-view-add-to-cart") ||
                   page.querySelector(".prodDetails .addCart .btn-product-card");

    if (cartBtn) {
      var txt = cartBtn.querySelector(".add-to-cart-text");
      if (txt) txt.textContent = "أضف إلى السلة";
    }

    if (!h1El || !cartBtn) return;
    if (document.getElementById("sticky-cart-bar")) return;

    var bar = document.createElement("div");
    bar.id = "sticky-cart-bar";
    bar.innerHTML =
      '<span class="sticky-product-name">' + h1El.textContent.trim() + '</span>' +
      '<span class="sticky-price">' + (priceEl ? priceEl.textContent.trim() : "") + '</span>' +
      '<button class="sticky-add-btn">🛒 أضف إلى السلة</button>';
    document.body.appendChild(bar);

    bar.querySelector(".sticky-add-btn").addEventListener("click", function () {
      if (typeof productAddToCart === "function") {
        productAddToCart();
      } else {
        cartBtn.click();
      }
    });

    function onScroll() {
      var rect = cartBtn.getBoundingClientRect();
      if (rect.bottom < 0) {
        bar.classList.add("show");
      } else {
        bar.classList.remove("show");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* =========================================================
     7) شريط التنقل السفلي للجوال
  ========================================================= */
  function initMobileBottomBar() {
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

    var cartHref    = pickLink(['a[href*="/cart"]', 'a[href*="checkout/cart"]', '.cart_btn a', '.header-cart a'], "/cart");
    var accountHref = pickLink(['a[href*="/auth/login"]', 'a[href*="login"]', '.user-login a'], "/auth/login");

    var nav = document.createElement("nav");
    nav.className = "arena-mobile-bottom-bar";
    nav.setAttribute("aria-label", "شريط التنقل السفلي");

    nav.innerHTML =
      '<a class="arena-mobile-nav-link" data-key="home" href="/">' +
        '<span class="arena-mobile-nav-icon-wrap">' +
          '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24"><path d="M3 10.5L12 3L21 10.5"/><path d="M5 9.5V20H19V9.5"/></svg>' +
        '</span>' +
        '<span class="arena-mobile-nav-label">الرئيسية</span>' +
      '</a>' +

      '<button class="arena-mobile-nav-link arena-search-btn" data-key="search" type="button">' +
        '<span class="arena-mobile-nav-icon-wrap">' +
          '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20L16 16"/></svg>' +
        '</span>' +
        '<span class="arena-mobile-nav-label">بحث</span>' +
      '</button>' +

      '<a class="arena-mobile-nav-link" data-key="cart" href="' + cartHref + '">' +
        '<span class="arena-mobile-nav-icon-wrap">' +
          '<span class="arena-mobile-nav-badge" id="arena-mobile-cart-badge">0</span>' +
          '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4H5L7.2 14.2A1 1 0 0 0 8.2 15H17.6A1 1 0 0 0 18.6 14.2L20 7H7"/></svg>' +
        '</span>' +
        '<span class="arena-mobile-nav-label">السلة</span>' +
      '</a>' +

      '<a class="arena-mobile-nav-link" data-key="account" href="' + accountHref + '">' +
        '<span class="arena-mobile-nav-icon-wrap">' +
          '<svg class="arena-mobile-nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20A7 7 0 0 1 19 20"/></svg>' +
        '</span>' +
        '<span class="arena-mobile-nav-label">دخول</span>' +
      '</a>';

    document.body.appendChild(nav);

    var searchBtn = nav.querySelector(".arena-search-btn");
    if (searchBtn) {
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        var realTriggers = [
          '.searchBox a', '.searchBox button',
          '.header-search a', '.header-search button',
          '.vs-menu-search', '.search-icon',
          '.popup-search-toggle', '[data-bs-target*="search"]',
          '[data-target*="search"]', 'a[href="#popup_search"]',
          'a[href*="popup_search"]', '.headerSearch-trigger', '.search-toggle'
        ];

        for (var i = 0; i < realTriggers.length; i++) {
          var trigger = document.querySelector(realTriggers[i]);
          if (trigger && !trigger.closest(".arena-mobile-bottom-bar")) {
            trigger.click();
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

        var popupBox = document.querySelector(".popup-search-box");
        if (popupBox) {
          popupBox.style.opacity    = "1";
          popupBox.style.visibility = "visible";
          popupBox.style.top        = "0px";
          var form = popupBox.querySelector(".headerSearch");
          if (form) {
            form.style.transition = "transform 0.4s ease, opacity 0.4s ease";
            form.style.transform  = "translate(-50%, -50%) scale(1)";
            form.style.opacity    = "1";
          }
          setTimeout(function () {
            var input = popupBox.querySelector(".search-input-input, input[type='search']");
            if (input) input.focus();
          }, 450);
          return;
        }

        window.location.href = "/products?q=";
      });
    }

    function markActiveItem() {
      var current = window.location.pathname;
      nav.querySelectorAll(".arena-mobile-nav-link").forEach(function (link) {
        var key = link.dataset.key;
        if (key === "home"    && current === "/")                          link.classList.add("is-active");
        if (key === "cart"    && current.indexOf("cart") !== -1)           link.classList.add("is-active");
        if (key === "account" && (current.indexOf("login") !== -1 || current.indexOf("account") !== -1)) link.classList.add("is-active");
      });
    }

    function updateCartBadge() {
      var badge   = document.getElementById("arena-mobile-cart-badge");
      if (!badge) return;
      var countEl = document.querySelector(".cart-count, .count, .cart_counter, .header-cart-count, .mini-cart-count");
      if (!countEl) return;
      var count = (countEl.textContent || "").replace(/[^\d]/g, "");
      if (!count) return;
      badge.textContent = count;
      badge.classList.add("has-count");
    }

    markActiveItem();
    updateCartBadge();
  }

  /* =========================================================
     8) Cards Slider - قسم البطاقات
     section-id: a251f72a-0eef-4bb3-8d9d-cdf16054b957
  ========================================================= */
  function initCardsSlider() {
    var section = document.querySelector('section[section-id="a251f72a-0eef-4bb3-8d9d-cdf16054b957"]');
    if (!section) return;

    var cards = section.querySelectorAll(".cards-slider .card-item:not(.slick-cloned)");
    if (!cards.length) return;

    var productLink = "https://jawaktv.com/products/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83-%D8%AC%D9%88%D9%83-%D8%B3%D8%AA%D8%B1%D9%88%D9%86%D8%AC-8k-%D9%84%D9%85%D8%AF%D8%A9-%D8%B3%D9%86%D8%A9";

    var data = [
      {
        title: "مكتبة ترفيه ضخمة",
        desc: "استمتع بأكثر من 150 ألف فيلم و40 ألف مسلسل بمحتوى متجدد وجودة مشاهدة عالية.",
        image: "https://i.ibb.co/ynwHHNkd/54.jpg",
        alt: "مكتبة أفلام ومسلسلات"
      },
      {
        title: "مونديال 2026",
        desc: "عش أجواء كأس العالم 2026 بتغطية ممتعة وتجربة مشاهدة قوية لعشاق الكرة.",
        image: "https://i.ibb.co/d4zz88R1/55.jpg",
        alt: "كأس العالم 2026"
      },
      {
        title: "قنوات وتلفاز",
        desc: "باقة واسعة تضم أكثر من 20000 قناة متنوعة بين الرياضية والترفيهية والعائلية.",
        image: "https://i.ibb.co/KxsdJRZJ/Jawaktv-1.jpg",
        alt: "قنوات وتلفاز"
      },
      {
        title: "أبطال ودوريات",
        desc: "تابع دوري الأبطال وأقوى الدوريات العالمية بمشاهدة مستقرة ومحتوى رياضي ثري.",
        image: "https://i.ibb.co/QFNdgyp6/Jawaktv.jpg",
        alt: "دوري الأبطال والدوريات"
      }
    ];

    function fillCard(card, item) {
      var imageLink = card.querySelector(".card-item-inner a");
      var image     = card.querySelector(".card-item-inner img");
      var titleLink = card.querySelector(".card-content .title a");
      var desc      = card.querySelector(".card-content .description");
      var btn       = card.querySelector(".card-content .link");

      if (imageLink) imageLink.setAttribute("href", productLink);
      if (image) {
        image.setAttribute("src", item.image);
        image.setAttribute("alt", item.alt);
      }
      if (titleLink) {
        titleLink.setAttribute("href", productLink);
        titleLink.textContent = item.title;
      }
      if (desc) desc.textContent = item.desc;
      if (btn) {
        btn.setAttribute("href", productLink);
        btn.textContent = "اشترك الآن";
      }
    }

    cards.forEach(function (card, index) {
      var item = data[index];
      if (!item) return;
      fillCard(card, item);
    });

    function syncClonedSlides() {
      var allCards = section.querySelectorAll(".cards-slider .card-item");
      allCards.forEach(function (card) {
        var idx = parseInt(card.getAttribute("data-slick-index"), 10);
        if (isNaN(idx)) return;
        var realIndex = ((idx % data.length) + data.length) % data.length;
        fillCard(card, data[realIndex]);
      });
    }

    syncClonedSlides();
    setTimeout(syncClonedSlides, 700);
    setTimeout(syncClonedSlides, 1500);
  }

  /* =========================================================
     9) تشغيل جميع الوظائف
  ========================================================= */
  function initAllCustomScripts() {
    addVideoToSlide();
    moveLogoToCenter();
    normalizeAddToCartText();
    updateFeaturesSection();
    buildInteractiveFeaturesSection();
    initProductStickyCartBar();
    initMobileBottomBar();
    initCardsSlider();
  }

  initAllCustomScripts();

  window.addEventListener("load", function () {
    addVideoToSlide();
    moveLogoToCenter();
    initCardsSlider();
  });

  setTimeout(addVideoToSlide,  1000);
  setTimeout(addVideoToSlide,  2000);
  setTimeout(addVideoToSlide,  3500);
  setTimeout(moveLogoToCenter,  500);
  setTimeout(moveLogoToCenter, 1500);
  setTimeout(moveLogoToCenter, 3000);

});

/* =========================================================
   JAWAKTV — CART + POPUP JS FIXES — FINAL v5
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

  /* تسوية input + زر الكوبون في كل مكان */
  function fixCouponRow() {
    document.querySelectorAll(
      ".footerSub .coupon-form .d-flex, .coupon-form .d-flex"
    ).forEach(function (wrap) {
      var input  = wrap.querySelector("input");
      var button = wrap.querySelector("button");
      if (!input || !button) return;

      [input, button].forEach(function (el) {
        el.style.height     = (el.tagName === "INPUT" ? "44" : "44") + "px";
        el.style.lineHeight = "44px";
        el.style.margin     = "0";
        el.style.boxSizing  = "border-box";
        el.style.display    = el.tagName === "INPUT" ? "block" : "flex";
        el.style.verticalAlign = "middle";
      });

      input.style.flex         = "1";
      input.style.minWidth     = "0";
      input.style.borderRadius = "999px 0 0 999px";
      input.style.borderLeft   = "none";
      input.style.padding      = "0 14px";

      button.style.flex           = "0 0 auto";
      button.style.borderRadius   = "0 999px 999px 0";
      button.style.padding        = "0 16px";
      button.style.alignItems     = "center";
      button.style.justifyContent = "center";
      button.style.whiteSpace     = "nowrap";
    });
  }

  /* إصلاح أزرار السلة */
  function fixCartBtns() {
    document.querySelectorAll("a.checkBtn").forEach(function (btn) {
      var href = btn.getAttribute("href") || "";
      var txt  = btn.textContent.trim();

      btn.style.display        = "flex";
      btn.style.alignItems     = "center";
      btn.style.justifyContent = "center";
      btn.style.minHeight      = "50px";
      btn.style.lineHeight     = "1";
      btn.style.boxSizing      = "border-box";
      btn.style.padding        = "0 20px";
      btn.style.width          = "100%";
      btn.style.textDecoration = "none";
      btn.style.borderRadius   = "999px";
      btn.style.fontWeight     = "700";
      btn.style.fontSize       = "15px";

      if (href.indexOf("checkout") !== -1) {
        btn.style.color  = "#0d0900";
        btn.style.border = "none";
        btn.style.setProperty("-webkit-text-fill-color","#0d0900","important");
      } else if (href === "/" || txt.indexOf("متابعة") !== -1) {
        btn.style.background = "transparent";
        btn.style.color      = "#daae49";
        btn.style.border     = "1.5px solid rgba(218,174,73,0.5)";
        btn.style.setProperty("-webkit-text-fill-color","#daae49","important");
      }
    });
  }

  /* إصلاح المجموع الكلي — أبيض */
  function fixTotalWhite() {
    var div = document.querySelector(".cart-totals-div");
    if (!div) return;
    var rows = div.querySelectorAll(".cart-totals-row-wrapper");
    rows.forEach(function (row, i) {
      var val = row.querySelector(".flex-shrink-0");
      if (!val) return;
      if (i === rows.length - 1) {
        val.style.color = "#ffffff";
        val.style.setProperty("-webkit-text-fill-color","#ffffff","important");
        val.style.fontWeight = "800";
        val.style.fontSize   = "15px";
      } else {
        val.style.color = "#daae49";
        val.style.setProperty("-webkit-text-fill-color","#daae49","important");
      }
    });
  }

  /* مراقبة البوب آب */
  function watchPopup() {
    var cartBox = document.querySelector(".cartBox, .raqami-mini-cart");
    if (!cartBox) return;
    new MutationObserver(function () {
      setTimeout(fixCouponRow, 60);
    }).observe(cartBox, { childList: true, subtree: true });
  }

  fixCouponRow();
  fixCartBtns();
  fixTotalWhite();
  watchPopup();

  setTimeout(function () {
    fixCouponRow();
    fixCartBtns();
    fixTotalWhite();
  }, 600);

  setTimeout(fixTotalWhite, 1800);
  });

// =========================================================
// MOBILE HEADER —شريط متحرك 
// =========================================================

(function () {
  "use strict";

  if (window.__JWK_BAR_LOADED__) return;
  window.__JWK_BAR_LOADED__ = true;

  var MESSAGES = [
    "أكثر من 150,000 فيلم ومسلسل — كل شيء في اشتراك واحد",
    "جودة 4K و8K بثبات تام — شاهد بلا تقطيع",
    "مونديال 2026 — عيشه بأعلى جودة مع Jawak TV",
    "يعمل على جميع أجهزتك — تلفاز، جوال، Apple TV",
    "تفعيل فوري خلال دقيقة — دعم فني على مدار الساعة",
    "عروض حصرية على الاشتراكات السنوية — لا تفوّتها",
    "أكثر من 20,000 قناة عالمية — رياضة، أفلام، أنمي",
    "وداعاً للتقطيع — أهلاً بالثبات الذي تستحقه",
    "اشتراك واحد يكفي العائلة كلها — أجهزة غير محدودة",
    "صورة نقية وصوت احترافي — تجربة المشاهدة الحقيقية",
    "تحميل فوري بلا تأخير — لأن وقتك أغلى من الانتظار",
    "محتوى حصري لا تجده في أي منصة أخرى",
    "الخيار الأول لمحبي الرياضة في الوطن العربي",
    "الدوريات الأوروبية والعالمية والعربية — كلها في مكان واحد",
    "أفلام، مسلسلات، رياضة — منصة واحدة للجميع"
  ];

  var SEPARATOR = "◆";
  var SPEED = 0.6;

  function injectStyles() {
    if (document.getElementById("jwkBarStyles")) return;
    var style = document.createElement("style");
    style.id = "jwkBarStyles";
    style.textContent = [
      ".xc-header-two__top { display:none !important; }",
      "#jwkBar {",
      "  position: relative; display: flex; align-items: center;",
      "  width: 100%; height: 42px; overflow: hidden;",
      "  background: linear-gradient(135deg,#0e0901 0%,#1a1000 35%,#221400 65%,#0e0901 100%);",
      "  border-bottom: 1px solid rgba(218,174,73,0.22);",
      "  box-shadow: 0 2px 12px rgba(0,0,0,0.55), inset 0 1px 0 rgba(218,174,73,0.08);",
      "  z-index: 99999; box-sizing: border-box; direction: ltr;",
      "}",
      "#jwkBar::before {",
      "  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;",
      "  background: linear-gradient(90deg, transparent, rgba(218,174,73,0.55) 50%, transparent);",
      "  pointer-events: none;",
      "}",
      "#jwkMask {",
      "  flex: 1 1 auto; height: 100%; overflow: hidden; position: relative; direction: ltr;",
      "  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);",
      "          mask-image: linear-gradient(90deg, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);",
      "}",
      "#jwkTrack {",
      "  display: inline-flex; flex-wrap: nowrap; width: max-content; height: 100%;",
      "  align-items: center; white-space: nowrap;",
      "  will-change: transform; transform: translate3d(0,0,0); direction: ltr;",
      "}",
      ".jwk-item {",
      "  display: inline-flex; align-items: center; height: 100%; padding: 0 28px;",
      "  color: #e8dfc0;",
      "  font-family: 'IBM Plex Sans Arabic','Tajawal','Cairo',Arial,sans-serif;",
      "  font-size: 13.5px; font-weight: 500; letter-spacing: 0.01em;",
      "  white-space: nowrap; direction: rtl; flex: 0 0 auto;",
      "  text-shadow: 0 1px 6px rgba(0,0,0,0.6);",
      "  transition: color 0.2s; cursor: default;",
      "}",
      ".jwk-item:hover { color: #f5e9aa; }",
      ".jwk-sep {",
      "  display: inline-flex; align-items: center; height: 100%; padding: 0 4px;",
      "  color: rgba(218,174,73,0.6); font-size: 8px;",
      "  white-space: nowrap; flex: 0 0 auto;",
      "}",
      "#jwkX {",
      "  flex: 0 0 auto; width: 34px; height: 100%;",
      "  display: flex; align-items: center; justify-content: center;",
      "  background: transparent; border: none; cursor: pointer;",
      "  padding: 0; margin: 0; opacity: 0.55;",
      "  transition: opacity 0.2s, color 0.2s; color: #c9a84c;",
      "}",
      "#jwkX:hover { opacity: 1; color: #f0d080; }",
      "@media (max-width: 767px) {",
      "  #jwkBar   { height: 38px; }",
      "  .jwk-item { font-size: 12.5px; padding: 0 18px; }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function buildOneCopy() {
    var html = "";
    for (var i = 0; i < MESSAGES.length; i++) {
      html += '<span class="jwk-item">' + MESSAGES[i] + "</span>";
      html += '<span class="jwk-sep">'  + SEPARATOR    + "</span>";
    }
    return html;
  }

  function buildBar() {
    if (document.getElementById("jwkBar")) return;

    var bar      = document.createElement("div"); bar.id = "jwkBar";
    var closeBtn = document.createElement("button");
    closeBtn.id  = "jwkX"; closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "إغلاق الشريط");
    closeBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="2.5" stroke-linecap="round" width="11" height="11">' +
      '<line x1="18" y1="6" x2="6" y2="18"/>' +
      '<line x1="6" y1="6" x2="18" y2="18"/></svg>';

    var mask  = document.createElement("div"); mask.id  = "jwkMask";
    var track = document.createElement("div"); track.id = "jwkTrack";
    mask.appendChild(track);
    bar.appendChild(closeBtn);
    bar.appendChild(mask);

    var inserted = false;
    var anchors  = [".vs-header",".site-header","header","#masthead","#header"];
    for (var a = 0; a < anchors.length; a++) {
      var el = document.querySelector(anchors[a]);
      if (el) { el.insertBefore(bar, el.firstChild); inserted = true; break; }
    }
    if (!inserted) document.body.insertBefore(bar, document.body.firstChild);

    var pos = 0, paused = false, raf = null, singleW = 0;
    var oneCopy = buildOneCopy();

    function fillTrack() {
      track.innerHTML = oneCopy;
      singleW = track.scrollWidth;
      if (singleW === 0) return false;
      var vw     = mask.clientWidth || window.innerWidth;
      var copies = Math.max(3, Math.ceil(vw / singleW) + 2);
      var html   = "";
      for (var c = 0; c < copies; c++) html += oneCopy;
      track.innerHTML = html;
      return true;
    }

    function tick() {
      if (!paused && singleW > 0) {
        pos -= SPEED;
        if (pos <= -singleW) pos += singleW;
        track.style.transform = "translate3d(" + pos + "px,0,0)";
      }
      raf = requestAnimationFrame(tick);
    }

    function startWhenReady() {
      if (!fillTrack()) { setTimeout(startWhenReady, 50); return; }
      raf = requestAnimationFrame(tick);
    }

    bar.addEventListener("mouseenter", function () { paused = true;  });
    bar.addEventListener("mouseleave", function () { paused = false; });

    closeBtn.addEventListener("click", function () {
      if (raf) cancelAnimationFrame(raf);
      bar.style.transition = "height .25s ease, opacity .25s ease";
      bar.style.height = "0"; bar.style.opacity = "0";
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 280);
    });

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var old = singleW;
        if (fillTrack() && old > 0) {
          pos = pos % singleW;
          if (pos > 0) pos -= singleW;
        }
      }, 150);
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        var old = singleW;
        if (fillTrack() && old > 0) {
          pos = pos % singleW;
          if (pos > 0) pos -= singleW;
        }
      });
    }

    startWhenReady();
  }

  function init() { injectStyles(); buildBar(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

 document.addEventListener("DOMContentLoaded", function() {
  var hiddenCategories = [
    '1537771',
    '1534130',
    '1534129',
    '1537773',
    '1534131'
  ];

  var path = window.location.pathname;
  var shouldHide = hiddenCategories.some(function(id) {
    return path.indexOf(id) !== -1;
  });

  if (shouldHide) {
    document.querySelectorAll('.xc-category-one__img').forEach(function(el) {
      el.remove();
    });
    document.querySelectorAll('img[alt="breadcrumb"]').forEach(function(el) {
      el.remove();
    });
    document.querySelectorAll('.breadcrumb-img').forEach(function(el) {
      el.remove();
    });
  }
});
