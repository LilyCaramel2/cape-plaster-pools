async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file, { cache: "no-store" });
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "/partials/header.html");
  loadPartial("site-footer", "/partials/footer.html");
});
