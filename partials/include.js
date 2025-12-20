// partials/include.js
// Injects header and footer partials into the page using relative paths.

(function () {
  function injectPartial(targetId, partialPath) {
    var container = document.getElementById(targetId);
    if (!container) return;

    fetch(partialPath)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load partial: " + partialPath);
        }
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;

        if (targetId === "site-footer") {
          var yearEl = document.getElementById("cpp-year");
          if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function init() {
    injectPartial("site-header", "./partials/header.html");
    injectPartial("site-footer", "./partials/footer.html");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
