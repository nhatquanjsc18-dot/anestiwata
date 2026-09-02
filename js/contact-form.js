/* ============================================================
   ANEST IWATA VIETNAM — Form liên hệ gửi qua Web3Forms
   Access key doc tu /site.json (khong hardcode trong JS)
   ============================================================ */

function aiInitContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var statusEl = document.getElementById("cfStatus");
  var submitBtn = document.getElementById("cfSubmit");
  var keyInput = document.getElementById("cfAccessKey");

  fetch("/site.json", { cache: "no-store" })
    .then(function (r) { return r.json(); })
    .then(function (cfg) {
      keyInput.value = cfg.web3formsAccessKey || "";
    })
    .catch(function () {
      statusEl.textContent = "Không tải được cấu hình gửi form. Vui lòng gọi hotline để được hỗ trợ.";
      statusEl.className = "cf-status cf-error";
    });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEl.textContent = "";
    statusEl.className = "cf-status";

    if (!keyInput.value) {
      statusEl.textContent = "Chưa có access key Web3Forms. Vui lòng thử lại sau ít phút.";
      statusEl.className = "cf-status cf-error";
      return;
    }

    var formData = new FormData(form);
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
          statusEl.textContent = "Đã gửi thành công! Đội ngũ kỹ thuật sẽ liên hệ tư vấn trong 24h.";
          statusEl.className = "cf-status cf-success";
          form.reset();
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
        submitBtn.textContent = "Gửi yêu cầu tư vấn";
      });
  });
}

document.addEventListener("DOMContentLoaded", aiInitContactForm);
