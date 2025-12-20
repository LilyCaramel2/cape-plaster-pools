// =========================
// FILE: partials/include.js
// =========================
/*
POLICY-GATED FILE
Validated against /policy and /docs before generation.
Do not modify outside approved batch tasks.
*/

(function () {
  function loadPartial(id, path) {
    fetch(path)
      .then(function (res) {
        return res.text();
      })
      .then(function (html) {
        var el = document.getElementById(id);
        if (el) {
          el.innerHTML = html;
        }
      })
      .catch(function () {
        // silent fail by design
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadPartial('site-header', './partials/header.html');
    loadPartial('site-footer', './partials/footer.html');
  });
})();
