// partials/include.js
/*
 * POLICY-GATED FILE
 * Validated against policy and docs before generation.
 * Do not modify outside approved batch tasks.
 * Source: POLICY-GATED-CPP-HANDOFF.md
 * Date: 21 December 2025
 */

(function () {
    function loadPartial(id, path) {
        fetch(path)
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                var target = document.getElementById(id);
                if (target) {
                    target.innerHTML = html;
                    if (id === "site-header") {
                        bindHeaderInteractions();
                    }
                }
            })
            .catch(function () {
                // Silent fail to avoid breaking page
            });
    }

    function bindHeaderInteractions() {
        var nav = document.querySelector(".nav");
        var toggle = document.querySelector(".nav-toggle");
        var dropdowns = document.querySelectorAll(".nav-dropdown");

        if (toggle && nav) {
            toggle.addEventListener("click", function () {
                var open = nav.classList.toggle("open");
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            });
        }

        dropdowns.forEach(function (wrap) {
            var button = wrap.querySelector(".nav-dropdown-toggle");
            var menu = wrap.querySelector(".nav-dropdown-menu");

            if (!button || !menu) return;

            button.addEventListener("click", function (event) {
                event.stopPropagation();
                var isOpen = wrap.classList.contains("open");
                dropdowns.forEach(function (other) {
                    if (other !== wrap) other.classList.remove("open");
                });
                wrap.classList.toggle("open", !isOpen);
            });
        });

        document.addEventListener("click", function () {
            dropdowns.forEach(function (wrap) {
                wrap.classList.remove("open");
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        loadPartial("site-header", "./partials/header.html");
        loadPartial("site-footer", "./partials/footer.html");
    });
})();
