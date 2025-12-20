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
      })
      .catch(function (error) {
        throw new Error("Failed to load partial: " + partialPath);
      });
  }

  // After footer loads, set current year in copyright
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
      });
  }

  injectPartial("header", "./partials/header.html");
  injectPartial("footer", "./partials/footer.html");
})();
