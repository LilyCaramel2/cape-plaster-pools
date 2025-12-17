document.addEventListener("DOMContentLoaded", function () {
  loadPartial("site-header", "./partials/header.html");
  loadPartial("site-footer", "./partials/footer.html");
});

function loadPartial(targetId, filePath) {
  fetch(filePath)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load " + filePath);
      }
      return response.text();
    })
    .then(function (html) {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(function (error) {
      console.error(error);
    });
}
