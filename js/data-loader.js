/* ============================================================
   ANEST IWATA VIETNAM — Nạp dữ liệu sản phẩm từ API (data/products.json
   qua server), thay cho các file js/products-data*.js tĩnh trước đây.
   window.aiDataReady là Promise: các trang chờ nó resolve rồi mới render.
   ============================================================ */
window.aiDataReady = fetch("/api/products")
  .then(function (r) { return r.json(); })
  .then(function (data) {
    window.CATEGORIES = data.categories;
    window.PRODUCTS = data.products;
  });
