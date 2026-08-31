# Anest Iwata Việt Nam — Website Catalogue

Website catalogue sản phẩm Anest Iwata (thiết bị phun sơn, máy nén khí, bơm chân không, hệ thống cấp liệu sơn), chạy bằng Node.js + Express. Có trang quản trị `/admin` để thêm/sửa/xóa sản phẩm mà không cần sửa code.

## Chạy local

```bash
npm install
npm start
```

Mặc định chạy tại `http://localhost:3000` (đổi bằng biến môi trường `PORT`).

## Cấu trúc

```
server.js          Express server: file tĩnh + API + xác thực admin
data/products.json  Nguồn dữ liệu sản phẩm duy nhất (server đọc/ghi qua API)
index.html          Trang chủ
san-pham.html        Trang catalogue (lọc/tìm kiếm)
product.html         Template trang chi tiết sản phẩm (dùng chung, URL /ten-slug)
admin.html           Trang quản trị (đăng nhập + CRUD sản phẩm)
404.html             Trang lỗi 404
css/style.css        Toàn bộ style
js/                  layout.js, catalog.js, product-page.js, data-loader.js, admin.js
assets/              Ảnh/tài nguyên tĩnh
```

## Trang quản trị `/admin`

Truy cập `https://<domain>/admin`, đăng nhập bằng tài khoản quản trị để thêm/sửa/xóa sản phẩm ngay trên web — dữ liệu ghi trực tiếp vào `data/products.json` trên server, hiển thị lại ngay trên toàn site.

- Tài khoản mặc định: username `admindynabrade` (mật khẩu do chủ site tự đặt, lưu dưới dạng bcrypt hash trong `server.js`, không lưu plaintext).
- Đổi tài khoản/mật khẩu: đặt biến môi trường `ADMIN_USER` và `ADMIN_PASSWORD_HASH` khi chạy server (hash tạo bằng `node -e "console.log(require('bcryptjs').hashSync('mat-khau-moi', 10))"`), hoặc thay trực tiếp hằng số trong `server.js`.
- **Quan trọng: `/admin` và API quản lý sản phẩm chỉ hoạt động khi site chạy qua `server.js` (Node.js hosting).** Nếu deploy dạng Shared Hosting tĩnh (chỉ upload file HTML/CSS/JS, không chạy Node.js), phần xem sản phẩm vẫn hoạt động bình thường nhưng trang quản trị sẽ không hoạt động vì không có backend xử lý đăng nhập/API.

### Vùng lưu dữ liệu sản phẩm (`DATA_DIR`)

Dữ liệu sản phẩm đọc/ghi tại `data/products.json`. Mặc định file này nằm trong chính thư mục mã nguồn (tiện cho chạy local), **nhưng nếu Hostinger tự động deploy mỗi khi `git push`, file này sẽ bị ghi đè về bản trong repo ở lần deploy tiếp theo — xóa mất mọi thay đổi thêm/sửa/xóa qua `/admin` trên site thật.**

Để dữ liệu admin sửa được giữ nguyên qua các lần deploy, đặt biến môi trường `DATA_DIR` trỏ tới một thư mục **nằm ngoài vùng mã nguồn được Git deploy lại mỗi lần** (ví dụ một thư mục riêng ngoài repo trên hosting, không bị git ghi đè):

```
DATA_DIR=/home/<user>/data-anestiwata
```

Lần chạy đầu tiên với `DATA_DIR` mới, server tự động copy dữ liệu gốc từ `data/products.json` trong repo sang làm dữ liệu khởi tạo tại đường dẫn đó; từ sau, mọi thêm/sửa/xóa qua `/admin` chỉ ghi vào đây, không đụng tới file trong repo nên deploy lại không mất dữ liệu. Trong hPanel Node.js App, thêm biến này ở mục **Environment Variables** trước khi Restart app.

## URL đẹp cho trang sản phẩm

Trang chi tiết sản phẩm dùng URL dạng `/ten-slug-san-pham` (ví dụ `/dps-120-dps-90`) thay vì `/product.html?slug=...`.

- Khi chạy qua `server.js` (Node.js/Express): route catch-all trong `server.js` tự rewrite mọi đường dẫn 1 segment không có dấu chấm về `product.html`.
- Khi deploy tĩnh qua Apache/LiteSpeed (Shared Hosting): file `.htaccess` đã có sẵn rule `mod_rewrite` tương đương — chỉ cần đảm bảo `mod_rewrite` được bật (mặc định có trên Hostinger). Lưu ý: cách này chỉ phục vụ trang xem sản phẩm, không có trang quản trị (xem mục trên).

`js/product-page.js` đọc slug trực tiếp từ đường dẫn URL (`window.location.pathname`), vẫn hỗ trợ ngược `?slug=` nếu cần.

## Deploy lên Hostinger (Node.js hosting qua hPanel)

1. Đăng nhập **hPanel** → mục **Website → Node.js** (Hostinger hỗ trợ Node.js App trên gói Business/Cloud/VPS).
2. Tạo ứng dụng Node.js mới, chọn:
   - **Node.js version**: 18 trở lên
   - **Application startup file**: `server.js`
   - **Application root**: thư mục chứa mã nguồn deploy (repo này)
   - Biến môi trường: `NODE_ENV=production` (bắt buộc để cookie đăng nhập admin hoạt động đúng qua HTTPS)
3. Kết nối trực tiếp với repo GitHub của dự án (hPanel hỗ trợ deploy từ Git) để mỗi lần `git push` lên nhánh `main` sẽ tự động deploy, hoặc upload thủ công qua File Manager/FTP.
4. Sau khi tạo app, bấm **NPM Install** trong hPanel để cài dependencies từ `package.json`, sau đó **Restart** app.
5. Trỏ domain/subdomain vào ứng dụng Node.js vừa tạo trong mục **Domains**.

> Nếu gói hosting chỉ hỗ trợ **Shared Hosting tĩnh** (không có Node.js App), có thể deploy trực tiếp các file `.html/.css/.js` qua File Manager/FTP vào thư mục `public_html` — trang xem sản phẩm vẫn chạy bình thường, nhưng **sẽ không có trang quản trị `/admin`**.

## Đẩy code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: Anest Iwata Việt Nam website"
git branch -M main
git remote add origin <URL_REPO_GITHUB_CUA_BAN>
git push -u origin main
```
