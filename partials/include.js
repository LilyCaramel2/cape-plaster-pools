/*
POLICY-GATED FILE
Validated against /policy and /docs before generation.
Do not modify outside approved batch tasks.
*/

function loadPartial(targetId, path) {
  fetch(path)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    });
}

loadPartial('site-header', './partials/header.html');
loadPartial('site-footer', './partials/footer.html');
