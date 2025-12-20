/*
POLICY-GATED FILE
Validated against policy constraints.
Structural baseline only.
*/

function loadPartial(targetId, path) {
  fetch(path)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById(targetId).innerHTML = html;
    });
}

loadPartial("site-header", "./partials/header.html");
loadPartial("site-footer", "./partials/footer.html");
