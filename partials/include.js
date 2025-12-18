document.addEventListener("DOMContentLoaded", () => {

  fetch("./partials/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;
    });

  fetch("./partials/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("site-footer").innerHTML = data;
    });

});
