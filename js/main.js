/* Mejillas Tequila mockup: age gate + navigation. No dependencies. */
(function () {
  "use strict";

  /* ---------- Age gate (birth-year entry, sessionStorage) ---------- */
  var gate = document.getElementById("age-gate");
  if (gate) {
    var PASSED_KEY = "mejillas-age-verified";
    if (sessionStorage.getItem(PASSED_KEY) === "yes") {
      gate.hidden = true;
    } else {
      gate.hidden = false;
      document.body.style.overflow = "hidden";
      var form = gate.querySelector("form");
      var input = gate.querySelector("input[type='number']");
      var error = gate.querySelector(".age-error");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var year = parseInt(input.value, 10);
        var now = new Date().getFullYear();
        if (!year || year < 1900 || year > now) {
          error.textContent = "Please enter a valid four-digit birth year.";
          return;
        }
        if (now - year >= 21) {
          sessionStorage.setItem(PASSED_KEY, "yes");
          gate.hidden = true;
          document.body.style.overflow = "";
        } else {
          error.textContent = "You must be of legal drinking age to enter this site.";
        }
      });
      if (input) { input.focus(); }
    }
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Submenu disclosure buttons (touch / keyboard) ---------- */
  document.querySelectorAll(".submenu-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest(".has-menu");
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".js-year").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Mock forms: acknowledge without submitting anywhere ---------- */
  document.querySelectorAll("form[data-mock]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-ack");
      if (note) { note.textContent = form.getAttribute("data-mock"); }
    });
  });
})();
