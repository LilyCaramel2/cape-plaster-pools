
async function loadPartial(targetId, file) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const response = await fetch(file);
  target.innerHTML = await response.text();
}

loadPartial("site-header", "/partials/header.html");
loadPartial("site-footer", "/partials/footer.html");
