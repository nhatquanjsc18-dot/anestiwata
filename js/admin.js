/* ============================================================
   ANEST IWATA VIETNAM — Trang quản trị sản phẩm (admin.html)
   ============================================================ */

var aiAdminState = { products: [], categories: [], search: "" };

function aiAdminEsc(s) {
  return (s || "").toString().replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

function aiAdminShowLogin() {
  document.getElementById("loginView").classList.remove("hidden");
  document.getElementById("dashView").classList.add("hidden");
}

function aiAdminShowDash() {
  document.getElementById("loginView").classList.add("hidden");
  document.getElementById("dashView").classList.remove("hidden");
  aiAdminLoadProducts();
}

function aiAdminLoadProducts() {
  fetch("/api/products")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      aiAdminState.products = data.products;
      aiAdminState.categories = data.categories;
      var sel = document.getElementById("f_category");
      sel.innerHTML = data.categories.map(function (c) {
        return '<option value="' + c.key + '">' + c.label + "</option>";
      }).join("");
      aiAdminRenderTable();
    });
}

function aiAdminRenderTable() {
  var q = aiAdminState.search.toLowerCase();
  var list = aiAdminState.products.filter(function (p) {
    return !q || p.name.toLowerCase().indexOf(q) !== -1 || p.slug.toLowerCase().indexOf(q) !== -1;
  });
  document.getElementById("adminCount").textContent = list.length + " / " + aiAdminState.products.length + " sản phẩm";
  document.getElementById("adminTbody").innerHTML = list.map(function (p) {
    return "<tr>" +
      '<td><img src="' + p.img + '" alt=""></td>' +
      "<td>" + aiAdminEsc(p.name) + "</td>" +
      "<td><code>" + aiAdminEsc(p.slug) + "</code></td>" +
      "<td>" + aiAdminEsc(p.categoryLabel || p.category) + "</td>" +
      '<td class="actions">' +
        '<a data-edit="' + aiAdminEsc(p.slug) + '">Sửa</a>' +
        '<a data-del="' + aiAdminEsc(p.slug) + '" style="color:#c0392b;">Xóa</a>' +
      "</td>" +
    "</tr>";
  }).join("") || '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:24px;">Không có sản phẩm phù hợp</td></tr>';
}

function aiAdminOpenModal(product) {
  document.getElementById("formError").textContent = "";
  document.getElementById("modalTitle").textContent = product ? "Sửa sản phẩm" : "Thêm sản phẩm";
  document.getElementById("f_originalSlug").value = product ? product.slug : "";
  document.getElementById("f_name").value = product ? product.name : "";
  document.getElementById("f_slug").value = product ? product.slug : "";
  document.getElementById("f_category").value = product ? product.category : "";
  document.getElementById("f_subCat").value = product ? (product.subCat || "") : "";
  document.getElementById("f_subCatLabel").value = product ? (product.subCatLabel || "") : "";
  document.getElementById("f_img").value = product ? product.img : "";
  document.getElementById("f_shortDesc").value = product ? (product.shortDesc || "") : "";
  document.getElementById("f_lead").value = product ? (product.lead || "") : "";
  document.getElementById("f_features").value = product && product.features
    ? product.features.map(function (f) { return f[0] + " | " + f[1]; }).join("\n") : "";
  document.getElementById("f_specs").value = product && product.specs
    ? Object.keys(product.specs).map(function (k) { return k + ": " + product.specs[k]; }).join("\n") : "";
  document.getElementById("f_applications").value = product && product.applications ? product.applications.join("\n") : "";
  document.getElementById("f_why").value = product ? (product.why || "") : "";
  document.getElementById("modalBackdrop").classList.add("open");
}

function aiAdminCloseModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
}

function aiAdminParseLines(text) {
  return (text || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
}

function aiAdminBuildPayload() {
  var features = aiAdminParseLines(document.getElementById("f_features").value).map(function (line) {
    var i = line.indexOf("|");
    return i === -1 ? ["✅", line.trim()] : [line.slice(0, i).trim(), line.slice(i + 1).trim()];
  });
  var specs = {};
  aiAdminParseLines(document.getElementById("f_specs").value).forEach(function (line) {
    var i = line.indexOf(":");
    if (i === -1) return;
    specs[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  var catSel = document.getElementById("f_category");
  var catLabel = catSel.options[catSel.selectedIndex] ? catSel.options[catSel.selectedIndex].textContent : "";
  return {
    name: document.getElementById("f_name").value.trim(),
    slug: document.getElementById("f_slug").value.trim(),
    category: catSel.value,
    categoryLabel: catLabel,
    subCat: document.getElementById("f_subCat").value.trim(),
    subCatLabel: document.getElementById("f_subCatLabel").value.trim(),
    img: document.getElementById("f_img").value.trim(),
    shortDesc: document.getElementById("f_shortDesc").value.trim(),
    lead: document.getElementById("f_lead").value.trim(),
    features: features,
    specs: specs,
    applications: aiAdminParseLines(document.getElementById("f_applications").value),
    why: document.getElementById("f_why").value.trim(),
  };
}

function aiInitAdmin() {
  fetch("/api/me").then(function (r) { return r.json(); }).then(function (me) {
    if (me.loggedIn) aiAdminShowDash();
    else aiAdminShowLogin();
  });

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var errEl = document.getElementById("loginError");
    errEl.textContent = "";
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.getElementById("loginUser").value,
        password: document.getElementById("loginPass").value,
      }),
    }).then(function (r) {
      if (!r.ok) return r.json().then(function (d) { throw new Error(d.error || "Đăng nhập thất bại"); });
      return r.json();
    }).then(function () {
      aiAdminShowDash();
    }).catch(function (err) {
      errEl.textContent = err.message;
    });
  });

  document.getElementById("btnLogout").addEventListener("click", function () {
    fetch("/api/logout", { method: "POST" }).then(function () { aiAdminShowLogin(); });
  });

  document.getElementById("btnAdd").addEventListener("click", function () { aiAdminOpenModal(null); });
  document.getElementById("btnCancel").addEventListener("click", aiAdminCloseModal);
  document.getElementById("modalBackdrop").addEventListener("click", function (e) {
    if (e.target === this) aiAdminCloseModal();
  });

  document.getElementById("adminSearch").addEventListener("input", function () {
    aiAdminState.search = this.value;
    aiAdminRenderTable();
  });

  document.getElementById("adminTbody").addEventListener("click", function (e) {
    var editSlug = e.target.getAttribute("data-edit");
    var delSlug = e.target.getAttribute("data-del");
    if (editSlug) {
      var p = aiAdminState.products.find(function (x) { return x.slug === editSlug; });
      if (p) aiAdminOpenModal(p);
    } else if (delSlug) {
      if (!confirm('Xóa sản phẩm "' + delSlug + '"? Hành động này không thể hoàn tác.')) return;
      fetch("/api/products/" + encodeURIComponent(delSlug), { method: "DELETE" })
        .then(function (r) {
          if (!r.ok) return r.json().then(function (d) { throw new Error(d.error); });
          aiAdminLoadProducts();
        })
        .catch(function (err) { alert(err.message); });
    }
  });

  document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var errEl = document.getElementById("formError");
    errEl.textContent = "";
    var originalSlug = document.getElementById("f_originalSlug").value;
    var payload = aiAdminBuildPayload();
    var isEdit = !!originalSlug;
    var url = isEdit ? "/api/products/" + encodeURIComponent(originalSlug) : "/api/products";
    var method = isEdit ? "PUT" : "POST";
    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(function (r) {
      if (!r.ok) return r.json().then(function (d) { throw new Error(d.error || "Lỗi không xác định"); });
      return r.json();
    }).then(function () {
      aiAdminCloseModal();
      aiAdminLoadProducts();
    }).catch(function (err) {
      errEl.textContent = err.message;
    });
  });
}
