/* ============================================================
   ANEST IWATA VIETNAM — Popup "Yêu cầu báo giá" trên trang sản phẩm
   Dùng chung Web3Forms access key voi form lien he trang chu (site.json)
   ============================================================ */

var aiQuoteAccessKey = "";

function aiQuoteModalHTML() {
  return (
    '<div class="quote-modal-backdrop" id="quoteModalBackdrop">' +
      '<div class="quote-modal">' +
        '<h3>Yêu cầu báo giá</h3>' +
        '<p class="qf-product">Sản phẩm quan tâm: <strong id="qfProductName">—</strong></p>' +
        '<form id="quoteForm">' +
          '<input type="hidden" name="access_key" id="qfAccessKey" value="">' +
          '<input type="hidden" name="subject" id="qfSubject" value="">' +
          '<input type="checkbox" name="botcheck" style="display:none;" tabindex="-1" autocomplete="off">' +
          '<div class="cf-row">' +
            '<div class="cf-field"><label for="qfName">Họ tên *</label><input type="text" id="qfName" name="name" required></div>' +
            '<div class="cf-field"><label for="qfPhone">Số điện thoại *</label><input type="tel" id="qfPhone" name="phone" required></div>' +
          "</div>" +
          '<div class="cf-field"><label for="qfEmail">Email</label><input type="email" id="qfEmail" name="email"></div>' +
          '<div class="cf-field"><label for="qfMessage">Yêu cầu thêm (số lượng, quy cách...)</label><textarea id="qfMessage" name="message" rows="3"></textarea></div>' +
          '<div class="quote-modal-actions">' +
            '<button type="submit" class="btn btn-primary" id="qfSubmit">Gửi yêu cầu báo giá</button>' +
            '<button type="button" class="btn btn-outline" id="qfCancel">Hủy</button>' +
          "</div>" +
          '<div id="qfStatus" class="cf-status" role="status"></div>' +
        "</form>" +
      "</div>" +
    "</div>"
  );
}

function aiOpenQuoteModal(productName) {
  document.getElementById("qfProductName").textContent = productName;
  document.getElementById("qfSubject").value = "Yêu cầu báo giá: " + productName;
  document.getElementById("qfStatus").textContent = "";
  document.getElementById("qfStatus").className = "cf-status";
  document.getElementById("quoteModalBackdrop").classList.add("open");
}

function aiCloseQuoteModal() {
  document.getElementById("quoteModalBackdrop").classList.remove("open");
}

function aiInitQuoteModal() {
  if (document.getElementById("quoteModalBackdrop")) return;
  var wrap = document.createElement("div");
  wrap.innerHTML = aiQuoteModalHTML();
  document.body.appendChild(wrap.firstElementChild);

  fetch("/site.json", { cache: "no-store" })
    .then(function (r) { return r.json(); })
    .then(function (cfg) {
      aiQuoteAccessKey = cfg.web3formsAccessKey || "";
      document.getElementById("qfAccessKey").value = aiQuoteAccessKey;
    });

  document.getElementById("qfCancel").addEventListener("click", aiCloseQuoteModal);
  document.getElementById("quoteModalBackdrop").addEventListener("click", function (e) {
    if (e.target === this) aiCloseQuoteModal();
  });

  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var statusEl = document.getElementById("qfStatus");
    var submitBtn = document.getElementById("qfSubmit");
    statusEl.textContent = "";
    statusEl.className = "cf-status";

    if (!aiQuoteAccessKey) {
      statusEl.textContent = "Chưa có access key Web3Forms. Vui lòng thử lại sau ít phút.";
      statusEl.className = "cf-status cf-error";
      return;
    }

    var formData = new FormData(e.target);
    var payload = {};
    formData.forEach(function (value, key) { payload[key] = value; });

    submitBtn.disabled = true;
    submitBtn.textContent = "Đang gửi...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.success) {
          statusEl.textContent = "Đã gửi thành công! Đội ngũ kỹ thuật sẽ báo giá trong 24h.";
          statusEl.className = "cf-status cf-success";
          e.target.reset();
        } else {
          statusEl.textContent = "Gửi thất bại: " + (data.message || "Vui lòng thử lại hoặc gọi hotline.");
          statusEl.className = "cf-status cf-error";
        }
      })
      .catch(function () {
        statusEl.textContent = "Có lỗi kết nối, vui lòng thử lại hoặc gọi hotline 0907 811 767.";
        statusEl.className = "cf-status cf-error";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Gửi yêu cầu báo giá";
      });
  });
}
