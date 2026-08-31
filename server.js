const express = require("express");
const compression = require("compression");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PRODUCTS_PATH = path.join(__dirname, "data", "products.json");

// --- Tài khoản quản trị ---
// Mật khẩu không lưu dạng plaintext trong code — chỉ lưu bcrypt hash.
// Có thể override qua biến môi trường ADMIN_USER / ADMIN_PASSWORD_HASH khi deploy.
const ADMIN_USER = process.env.ADMIN_USER || "admindynabrade";
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  "$2a$10$tI9b7e78nzxQzPFxpczdo.W8bPIP6x/HYM7RiQco38EWt8uw0LteS";

app.set("trust proxy", 1);
app.use(compression());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex"),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 8 * 60 * 60 * 1000,
    },
  })
);

function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  res.status(401).json({ error: "Chưa đăng nhập" });
}

function readProducts() {
  return JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"));
}

function writeProducts(data) {
  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(data, null, 2), "utf8");
}

function slugify(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------- API công khai ----------------
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

app.get("/api/me", (req, res) => {
  res.json({ loggedIn: !!(req.session && req.session.isAdmin), username: req.session && req.session.username });
});

// ---------------- Đăng nhập / đăng xuất ----------------
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Thiếu tên đăng nhập hoặc mật khẩu" });
  }
  if (username !== ADMIN_USER || !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    return res.status(401).json({ error: "Sai tên đăng nhập hoặc mật khẩu" });
  }
  req.session.isAdmin = true;
  req.session.username = username;
  res.json({ ok: true });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

// ---------------- Quản lý sản phẩm (yêu cầu đăng nhập) ----------------
app.post("/api/products", requireAdmin, (req, res) => {
  const data = readProducts();
  const p = req.body || {};
  if (!p.name) return res.status(400).json({ error: "Thiếu tên sản phẩm" });
  const slug = slugify(p.slug || p.name);
  if (!slug) return res.status(400).json({ error: "Không tạo được slug hợp lệ" });
  if (data.products.some((x) => x.slug === slug)) {
    return res.status(409).json({ error: "Slug đã tồn tại: " + slug });
  }
  const cat = data.categories.find((c) => c.key === p.category);
  const newProduct = Object.assign({}, p, {
    slug: slug,
    categoryLabel: cat ? cat.label : p.categoryLabel || "",
  });
  data.products.push(newProduct);
  writeProducts(data);
  res.status(201).json(newProduct);
});

app.put("/api/products/:slug", requireAdmin, (req, res) => {
  const data = readProducts();
  const idx = data.products.findIndex((x) => x.slug === req.params.slug);
  if (idx === -1) return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
  const p = req.body || {};
  const cat = data.categories.find((c) => c.key === (p.category || data.products[idx].category));
  data.products[idx] = Object.assign({}, data.products[idx], p, {
    slug: req.params.slug,
    categoryLabel: cat ? cat.label : data.products[idx].categoryLabel,
  });
  writeProducts(data);
  res.json(data.products[idx]);
});

app.delete("/api/products/:slug", requireAdmin, (req, res) => {
  const data = readProducts();
  const idx = data.products.findIndex((x) => x.slug === req.params.slug);
  if (idx === -1) return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
  data.products.splice(idx, 1);
  writeProducts(data);
  res.json({ ok: true });
});

// ---------------- File tĩnh ----------------
app.use(
  express.static(__dirname, {
    extensions: ["html"],
    maxAge: "1d",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// URL đẹp cho trang chi tiết sản phẩm: /ten-slug -> product.html
// (chỉ khớp 1 segment không có dấu chấm, để không đụng tới các request tài nguyên/API)
app.get(/^\/[a-zA-Z0-9-]+$/, (req, res) => {
  res.sendFile(path.join(__dirname, "product.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Anest Iwata Việt Nam đang chạy tại http://localhost:${PORT}`);
});
