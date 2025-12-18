document.addEventListener("DOMContentLoaded", () => {

  fetch("./partials/header.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
    });

  fetch("./partials/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("site-footer").innerHTML = html;
    });

});
