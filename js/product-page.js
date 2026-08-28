/* ============================================================
   ANEST IWATA VIETNAM — Render trang chi tiết sản phẩm
   URL đẹp: /ten-slug-san-pham (server rewrite về product.html)
   Vẫn hỗ trợ product.html?slug=... để tương thích ngược.
   ============================================================ */

function aiEsc(s) { return (s || "").toString(); }

function aiGetSlugFromUrl() {
  var params = new URLSearchParams(window.location.search);
  if (params.get("slug")) return params.get("slug");
  var seg = window.location.pathname.split("/").filter(Boolean).pop() || "";
  if (seg.toLowerCase() === "product.html") return "";
  return decodeURIComponent(seg.replace(/\.html$/i, ""));
}

function aiRenderProductPage() {
  var slug = aiGetSlugFromUrl();
  var product = PRODUCTS.find(function (p) { return p.slug === slug; });
  var root = document.getElementById("pdRoot");

  if (!product) {
    root.innerHTML = '<div class="empty-state"><h2>Không tìm thấy sản phẩm</h2><p>Sản phẩm bạn tìm không tồn tại hoặc đã bị gỡ khỏi catalogue.</p><a class="btn btn-primary" href="san-pham.html" style="margin-top:16px;display:inline-flex;">Quay lại catalogue</a></div>';
    document.title = "Không tìm thấy sản phẩm — Anest Iwata Việt Nam";
    return;
  }

  document.title = product.name + " — Anest Iwata Việt Nam";

  var featuresHTML = (product.features || []).map(function (f) {
    return '<li><span class="emoji">' + f[0] + "</span><span>" + f[1] + "</span></li>";
  }).join("");

  var specsHTML = Object.keys(product.specs || {}).map(function (k) {
    return "<tr><td>" + k + "</td><td>" + product.specs[k] + "</td></tr>";
  }).join("");

  var appsHTML = (product.applications || []).map(function (a) {
    return "<li>" + a + "</li>";
  }).join("");

  var related = PRODUCTS.filter(function (p) {
    return p.category === product.category && p.slug !== product.slug;
  }).slice(0, 4);

  root.innerHTML =
    '<div class="breadcrumb"><a href="index.html">Trang chủ</a> / <a href="san-pham.html?cat=' + product.category + '">' + product.categoryLabel + '</a> / ' + product.name + "</div>" +
    '<div class="pd-grid">' +
      '<div class="pd-image"><img src="' + product.img + '" alt="' + product.name + '" onerror="this.parentElement.classList.add(\'img-broken\')"></div>' +
      '<div class="pd-info">' +
        '<span class="cat-tag-lg">' + product.categoryLabel + (product.subCatLabel ? " · " + product.subCatLabel : "") + "</span>" +
        "<h1>" + product.name + "</h1>" +
        '<p class="lead">' + (product.lead || product.shortDesc || "") + "</p>" +
        '<div class="actions">' +
          '<a href="index.html#lien-he" class="btn btn-primary">Yêu cầu báo giá</a>' +
          '<a href="san-pham.html" class="btn btn-outline">Xem thêm sản phẩm</a>' +
        "</div>" +
        '<ul class="feature-list">' + featuresHTML + "</ul>" +
      "</div>" +
    "</div>" +
    '<div class="tabs">' +
      '<div class="tab-btn active" data-tab="mota">MÔ TẢ CHI TIẾT</div>' +
      '<div class="tab-btn" data-tab="thongso">THÔNG SỐ KỸ THUẬT</div>' +
      '<div class="tab-btn" data-tab="ungdung">ỨNG DỤNG</div>' +
    "</div>" +
    '<div class="tab-panel active" id="tab-mota">' +
      "<p>" + (product.lead || "") + "</p>" +
      '<div class="why-box"><h4>Vì sao nên chọn ' + product.name + "?</h4><p>" + (product.why || "") + "</p></div>" +
    "</div>" +
    '<div class="tab-panel" id="tab-thongso"><table class="spec-table"><tbody>' + specsHTML + "</tbody></table></div>" +
    '<div class="tab-panel" id="tab-ungdung"><p>Sản phẩm phù hợp với các ứng dụng sau:</p><ul class="app-list">' + appsHTML + "</ul></div>" +
    '<div class="why-us">' +
      '<div class="item"><div class="ic">🏭</div><h4>Hàng chính hãng Anest Iwata</h4><p>Nhập khẩu và phân phối chính thức, đầy đủ chứng từ CO/CQ</p></div>' +
      '<div class="item"><div class="ic">🛠️</div><h4>Hỗ trợ kỹ thuật tận nơi</h4><p>Đội ngũ kỹ thuật tư vấn lắp đặt, vận hành và bảo trì</p></div>' +
      '<div class="item"><div class="ic">📦</div><h4>Sẵn phụ tùng thay thế</h4><p>Kho phụ tùng chính hãng, giao hàng nhanh toàn quốc</p></div>' +
      '<div class="item"><div class="ic">💬</div><h4>Tư vấn theo nhu cầu</h4><p>Giúp bạn chọn đúng thiết bị theo quy mô và ngân sách xưởng</p></div>' +
    "</div>" +
    '<div class="company-why">' +
      "<h3>Tại sao chọn Công ty CP Công nghiệp Nhất Quán?</h3>" +
      '<ul class="company-why-list">' +
        "<li>🛡️ Đại lý chính hãng Anest Iwata tại Việt Nam</li>" +
        "<li>🔧 Bảo hành 1 năm + hỗ trợ kỹ thuật</li>" +
        "<li>🧰 Cung cấp phụ kiện chính hãng</li>" +
        "<li>🚚 Giao hàng nhanh toàn quốc</li>" +
        "<li>💬 Tư vấn miễn phí lựa chọn máy phù hợp ngành bạn</li>" +
      "</ul>" +
      '<div class="company-why-contact">' +
        "<h4>Thông tin liên hệ</h4>" +
        '<p>Hotline: <a href="tel:0907811767">0907 811 767</a>' +
          '<a class="zalo-link" href="https://zalo.me/0907811767" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#fff"/><text x="24" y="31" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="800" fill="#0068ff">Za</text></svg>' +
            "Chat Zalo" +
          "</a>" +
          " &nbsp;·&nbsp; Email: info@nhatquan.vn" +
        "</p>" +
        "<p>Địa chỉ: 10 Đường 18A, Phường Bình Trưng, TP. Hồ Chí Minh, Việt Nam</p>" +
      "</div>" +
    "</div>" +
    (related.length ? '<h3 class="related-title" style="margin-top:60px;">Sản phẩm tương tự</h3><div class="product-grid" id="relatedGrid"></div>' : "");

  if (related.length) {
    aiRenderGrid("relatedGrid", related);
  }

  // Tabs behavior
  var tabBtns = root.querySelectorAll(".tab-btn");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      root.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      document.getElementById("tab-" + btn.getAttribute("data-tab")).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", aiRenderProductPage);
