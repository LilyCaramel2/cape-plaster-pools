// partials/include.js
// Loads header and footer into #site-header and #site-footer on every page.
// Must work locally and on Cloudflare Pages (no absolute paths, no frameworks).

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
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectPartial("site-header", "./partials/header.html");
      injectPartial("site-footer", "./partials/footer.html");
    });
  } else {
    injectPartial("site-header", "./partials/header.html");
    injectPartial("site-footer", "./partials/footer.html");
  }
})();
