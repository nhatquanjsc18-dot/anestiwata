/* ============================================================
   ANEST IWATA VIETNAM — Header / Footer dùng chung mọi trang
   Danh mục được sinh động từ mảng CATEGORIES (nạp qua js/data-loader.js)
   để luôn đồng bộ, không phải sửa tay ở nhiều nơi.
   ============================================================ */

function aiBuildMegaMenuHTML() {
  if (typeof CATEGORIES === "undefined" || typeof PRODUCTS === "undefined") return "";

  var cols = CATEGORIES.map(function (c) {
    var inCat = PRODUCTS.filter(function (p) { return p.category === c.key; });
    var subs = {};
    var subOrder = [];
    inCat.forEach(function (p) {
      if (!p.subCat) return;
      if (!subs[p.subCat]) { subs[p.subCat] = { label: p.subCatLabel || p.subCat, count: 0 }; subOrder.push(p.subCat); }
      subs[p.subCat].count++;
    });
    var subLinks = subOrder.map(function (key) {
      return '<li><a href="san-pham.html?cat=' + c.key + '&sub=' + key + '">' +
        subs[key].label + ' <span class="mega-count">' + subs[key].count + "</span></a></li>";
    }).join("");

    return (
      '<div class="mega-col">' +
        '<a class="mega-col-title" href="san-pham.html?cat=' + c.key + '">' +
          '<span class="mega-ic">' + c.icon + "</span>" + c.label +
          ' <span class="mega-count">' + inCat.length + "</span>" +
        "</a>" +
        (subLinks ? '<ul class="mega-sublist">' + subLinks + "</ul>" : "") +
      "</div>"
    );
  }).join("");

  return (
    '<div class="mega-menu">' +
      '<div class="mega-menu-inner">' +
        cols +
        '<div class="mega-col mega-col-cta">' +
          '<p>Không tìm thấy thiết bị phù hợp?</p>' +
          '<a class="btn btn-primary btn-sm" href="san-pham.html">Xem toàn bộ catalogue</a>' +
          '<a class="btn btn-outline btn-sm" href="index.html#lien-he">Yêu cầu tư vấn</a>' +
        "</div>" +
      "</div>" +
    "</div>"
  );
}

function aiHeaderHTML(activePage) {
  var navItems = [
    { href: "index.html", label: "Trang chủ", key: "home" },
    { href: "san-pham.html", label: "Sản phẩm", key: "products", mega: true },
    { href: "index.html#gioi-thieu", label: "Giới thiệu", key: "about" },
    { href: "index.html#lien-he", label: "Liên hệ", key: "contact" }
  ];
  var nav = navItems.map(function (n) {
    if (!n.mega) {
      return '<a href="' + n.href + '"' + (activePage === n.key ? ' class="active"' : "") + ">" + n.label + "</a>";
    }
    return (
      '<div class="nav-item has-mega">' +
        '<a href="' + n.href + '" class="nav-mega-trigger' + (activePage === n.key ? " active" : "") + '">' +
          n.label + ' <span class="mega-caret">▾</span>' +
        "</a>" +
        aiBuildMegaMenuHTML() +
      "</div>"
    );
  }).join("");

  return (
    '<div class="topbar"><div class="container">' +
      '<div>Nhà phân phối thiết bị phun sơn công nghiệp Anest Iwata tại Việt Nam</div>' +
      '<div class="topbar-links"><a href="tel:0907811767">Hotline: 0907 811 767</a><span>Giao hàng toàn quốc</span></div>' +
    "</div></div>" +
    '<header class="site-header"><div class="container">' +
      '<a href="index.html" class="logo"><span class="mark">AI</span><span>ANEST IWATA<span class="brand-sub">Việt Nam</span></span></a>' +
      '<nav class="main-nav">' + nav + "</nav>" +
      '<div class="header-cta">' +
        '<button class="icon-btn" onclick="document.getElementById(\'searchInput\') ? document.getElementById(\'searchInput\').focus() : location.href=\'san-pham.html\'">🔍</button>' +
        '<a href="san-pham.html" class="btn btn-primary btn-sm">Xem catalogue</a>' +
      "</div>" +
    "</div></header>"
  );
}

function aiFooterHTML() {
  var catLinks = CATEGORIES.map(function (c) {
    return '<li><a href="san-pham.html?cat=' + c.key + '">' + c.label + "</a></li>";
  }).join("");

  return (
    '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="index.html" class="logo" style="color:#fff"><span class="mark">AI</span><span>ANEST IWATA</span></a>' +
          "<p>Đại diện phân phối chính thức các dòng thiết bị phun sơn, máy nén khí, bơm chân không và hệ thống cấp liệu sơn công nghiệp Anest Iwata tại thị trường Việt Nam.</p>" +
        "</div>" +
        '<div><h4>Danh mục sản phẩm</h4><ul>' + catLinks + "</ul></div>" +
        '<div><h4>Hỗ trợ</h4><ul>' +
          '<li><a href="san-pham.html">Toàn bộ catalogue</a></li>' +
          '<li><a href="index.html#gioi-thieu">Giới thiệu công ty</a></li>' +
          '<li><a href="index.html#lien-he">Liên hệ báo giá</a></li>' +
          '<li><a href="index.html#gioi-thieu">Chính sách bảo hành</a></li>' +
        "</ul></div>" +
        '<div><h4>Liên hệ</h4><ul>' +
          '<li><a href="tel:0907811767">Hotline: 0907 811 767</a></li>' +
          "<li>Email: info@nhatquan.vn</li>" +
          "<li>Địa chỉ: 10 Đường 18A, Phường Bình Trưng, TP. Hồ Chí Minh, Việt Nam</li>" +
          "<li>🕐 T2 - T6: 08:00 - 17:00 · T7: 08:00 - 16:00</li>" +
        "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<span>© " + new Date().getFullYear() + " Anest Iwata Việt Nam. Dữ liệu sản phẩm tổng hợp và biên soạn lại từ tài liệu kỹ thuật của hãng Anest Iwata.</span>" +
      "</div>" +
    "</div></footer>"
  );
}

function aiWireMegaMenu(headerEl) {
  var item = headerEl.querySelector(".nav-item.has-mega");
  if (!item) return;
  var trigger = item.querySelector(".nav-mega-trigger");

  trigger.addEventListener("click", function (e) {
    // Trên thiết bị cảm ứng (không hỗ trợ hover): lần bấm đầu mở mega menu
    // thay vì đi thẳng tới trang catalogue; bấm lần nữa hoặc bấm ra ngoài để đóng.
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      item.classList.toggle("open");
    }
  });

  document.addEventListener("click", function (e) {
    if (!item.contains(e.target)) item.classList.remove("open");
  });
}

function aiMountLayout(activePage) {
  var h = document.getElementById("aiHeader");
  var f = document.getElementById("aiFooter");
  if (h) { h.innerHTML = aiHeaderHTML(activePage); aiWireMegaMenu(h); }
  if (f) f.innerHTML = aiFooterHTML();
}
