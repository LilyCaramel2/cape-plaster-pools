async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(file, { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed");
    el.innerHTML = await res.text();
  } catch (err) {
    console.error("Partial load error:", file, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "/partials/header.html");
  loadPartial("site-footer", "/partials/footer.html");
});
