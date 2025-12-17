document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = async (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(file);
    if (!res.ok) return;

    el.innerHTML = await res.text();
  };

  loadPartial("site-header", "/partials/header.html");
  loadPartial("site-footer", "/partials/footer.html");
});
