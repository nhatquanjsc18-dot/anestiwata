# Anest Iwata Việt Nam — Website Catalogue

Website catalogue sản phẩm Anest Iwata (thiết bị phun sơn, máy nén khí, bơm chân không, hệ thống cấp liệu sơn), chạy bằng Node.js + Express phục vụ file tĩnh (HTML/CSS/JS) sẵn có.

## Chạy local

```bash
npm install
npm start
```

Mặc định chạy tại `http://localhost:3000` (đổi bằng biến môi trường `PORT`).

## Cấu trúc

```
server.js          Express server phục vụ file tĩnh
index.html          Trang chủ
san-pham.html        Trang catalogue (lọc/tìm kiếm)
product.html         Template trang chi tiết sản phẩm (dùng chung, đọc ?slug=)
404.html             Trang lỗi 404
css/style.css        Toàn bộ style
js/                  layout.js, catalog.js, product-page.js, products-data*.js
assets/              Ảnh/tài nguyên tĩnh
```

## URL đẹp cho trang sản phẩm

Trang chi tiết sản phẩm dùng URL dạng `/ten-slug-san-pham` (ví dụ `/dps-120-dps-90`) thay vì `/product.html?slug=...`.

- Khi chạy qua `server.js` (Node.js/Express): route catch-all trong `server.js` tự rewrite mọi đường dẫn 1 segment không có dấu chấm về `product.html`.
- Khi deploy tĩnh qua Apache/LiteSpeed (Shared Hosting): file `.htaccess` đã có sẵn rule `mod_rewrite` tương đương — chỉ cần đảm bảo `mod_rewrite` được bật (mặc định có trên Hostinger).

`js/product-page.js` đọc slug trực tiếp từ đường dẫn URL (`window.location.pathname`), vẫn hỗ trợ ngược `?slug=` nếu cần.

## Deploy lên Hostinger (Node.js hosting qua hPanel)

1. Đăng nhập **hPanel** → mục **Website → Node.js** (Hostinger hỗ trợ Node.js App trên gói Business/Cloud/VPS).
2. Tạo ứng dụng Node.js mới, chọn:
   - **Node.js version**: 18 trở lên
   - **Application startup file**: `server.js`
   - **Application root**: thư mục chứa mã nguồn deploy (repo này)
3. Kết nối trực tiếp với repo GitHub của dự án (hPanel hỗ trợ deploy từ Git) để mỗi lần `git push` lên nhánh `main` sẽ tự động deploy, hoặc upload thủ công qua File Manager/FTP.
4. Sau khi tạo app, bấm **NPM Install** trong hPanel để cài dependencies từ `package.json`, sau đó **Restart** app.
5. Trỏ domain/subdomain vào ứng dụng Node.js vừa tạo trong mục **Domains**.

> Nếu gói hosting chỉ hỗ trợ **Shared Hosting tĩnh** (không có Node.js App), có thể bỏ qua Express và deploy trực tiếp các file `.html/.css/.js` qua File Manager/FTP vào thư mục `public_html` — trang vẫn chạy bình thường vì không phụ thuộc server-side rendering.

## Đẩy code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: Anest Iwata Việt Nam website"
git branch -M main
git remote add origin <URL_REPO_GITHUB_CUA_BAN>
git push -u origin main
```
