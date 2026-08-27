/* ============================================================
   ANEST IWATA VIETNAM — Catalog rendering / filter / search logic
   Dùng chung cho san-pham.html và khối "Sản phẩm nổi bật" ở index.html
   ============================================================ */

function aiFormatImg(p) {
  return '<img src="' + p.img + '" alt="' + p.name.replace(/"/g, "") + '" loading="lazy" onerror="this.closest(\'.product-card\').classList.add(\'img-broken\')">';
}

function aiProductCardHTML(p) {
  return (
    '<a class="product-card" href="product.html?slug=' + encodeURIComponent(p.slug) + '">' +
      '<div class="thumb"><span class="cat-tag">' + p.categoryLabel + '</span>' + aiFormatImg(p) + '</div>' +
      '<div class="body">' +
        '<h3>' + p.name + '</h3>' +
        '<p>' + (p.shortDesc || "") + '</p>' +
        '<div class="card-foot"><span class="link-arrow">Xem chi tiết →</span></div>' +
      '</div>' +
    '</a>'
  );
}

function aiRenderGrid(containerId, products) {
  var el = document.getElementById(containerId);
  if (!el) return;
  if (!products.length) {
    el.innerHTML = '<div class="empty-state">Không tìm thấy sản phẩm phù hợp. Vui lòng thử từ khoá hoặc bộ lọc khác.</div>';
    return;
  }
  el.innerHTML = products.map(aiProductCardHTML).join("");
}

function aiGetSubCats(products, categoryKey) {
  var seen = {}, out = [];
  products.forEach(function (p) {
    if (categoryKey && p.category !== categoryKey) return;
    if (p.subCat && !seen[p.subCat]) {
      seen[p.subCat] = 1;
      out.push({ key: p.subCat, label: p.subCatLabel || p.subCat });
    }
  });
  return out;
}

/* ---------------- Trang catalogue đầy đủ (san-pham.html) ---------------- */
function aiInitCatalogPage() {
  var grid = document.getElementById("productGrid");
  if (!grid) return;

  var params = new URLSearchParams(window.location.search);
  var state = {
    cat: params.get("cat") || "all",
    subCat: params.get("sub") || "all",
    q: params.get("q") || ""
  };

  var tabRow = document.getElementById("catTabs");
  var subRow = document.getElementById("subCatRow");
  var searchInput = document.getElementById("searchInput");
  var countEl = document.getElementById("resultCount");

  function buildTabs() {
    var tabs = [{ key: "all", label: "Tất cả" }].concat(
      CATEGORIES.map(function (c) { return { key: c.key, label: c.label }; })
    );
    tabRow.innerHTML = tabs.map(function (t) {
      return '<div class="tab-chip' + (state.cat === t.key ? " active" : "") + '" data-cat="' + t.key + '">' + t.label + "</div>";
    }).join("");
    Array.prototype.forEach.call(tabRow.children, function (chip) {
      chip.addEventListener("click", function () {
        state.cat = chip.getAttribute("data-cat");
        state.subCat = "all";
        render();
      });
    });
  }

  function buildSubCats() {
    var subs = aiGetSubCats(PRODUCTS, state.cat === "all" ? null : state.cat);
    if (state.cat === "all" || !subs.length) {
      subRow.innerHTML = "";
      subRow.style.display = "none";
      return;
    }
    subRow.style.display = "flex";
    var chips = [{ key: "all", label: "Tất cả nhóm nhỏ" }].concat(subs);
    subRow.innerHTML = chips.map(function (s) {
      return '<div class="subcat-chip' + (state.subCat === s.key ? " active" : "") + '" data-sub="' + s.key + '">' + s.label + "</div>";
    }).join("");
    Array.prototype.forEach.call(subRow.children, function (chip) {
      chip.addEventListener("click", function () {
        state.subCat = chip.getAttribute("data-sub");
        render();
      });
    });
  }

  function filterProducts() {
    return PRODUCTS.filter(function (p) {
      if (state.cat !== "all" && p.category !== state.cat) return false;
      if (state.cat !== "all" && state.subCat !== "all" && p.subCat !== state.subCat) return false;
      if (state.q) {
        var hay = (p.name + " " + (p.shortDesc || "") + " " + (p.categoryLabel || "")).toLowerCase();
        if (hay.indexOf(state.q.toLowerCase()) === -1) return false;
      }
      return true;
    });
  }

  function render() {
    buildTabs();
    buildSubCats();
    var list = filterProducts();
    aiRenderGrid("productGrid", list);
    countEl.textContent = list.length + " sản phẩm";
  }

  if (searchInput) {
    searchInput.value = state.q;
    searchInput.addEventListener("input", function () {
      state.q = searchInput.value.trim();
      render();
    });
  }

  render();
}

/* ---------------- Khối sản phẩm nổi bật (index.html) ---------------- */
function aiInitFeaturedGrid(containerId, count) {
  var el = document.getElementById(containerId);
  if (!el) return;
  // Lấy đại diện đều từ mỗi danh mục để hiển thị đa dạng
  var byCategory = {};
  PRODUCTS.forEach(function (p) {
    if (!byCategory[p.category]) byCategory[p.category] = [];
    byCategory[p.category].push(p);
  });
  var picks = [];
  var keys = Object.keys(byCategory);
  var i = 0;
  while (picks.length < count && keys.some(function (k) { return byCategory[k].length; })) {
    var k = keys[i % keys.length];
    if (byCategory[k].length) picks.push(byCategory[k].shift());
    i++;
  }
  aiRenderGrid(containerId, picks.slice(0, count));
}

document.addEventListener("DOMContentLoaded", function () {
  aiInitCatalogPage();
  aiInitFeaturedGrid("featuredGrid", 8);
});
