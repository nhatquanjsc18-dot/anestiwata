const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

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
// (chỉ khớp 1 segment không có dấu chấm, để không đụng tới các request tài nguyên)
app.get(/^\/[a-zA-Z0-9-]+$/, (req, res) => {
  res.sendFile(path.join(__dirname, "product.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Anest Iwata Việt Nam đang chạy tại http://localhost:${PORT}`);
});
