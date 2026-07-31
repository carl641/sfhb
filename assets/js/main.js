/* Southern Family Home Builders: navigation, scroll reveals, gallery, estimate form. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ----- Mobile navigation ----- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  function closeMenu() {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("nav-open")) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ----- Scroll reveals ----- */
  var reveals = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ----- Gallery controls ----- */
  var gallery = document.querySelector(".gallery");
  document.querySelectorAll(".gallery-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = gallery.querySelector(".gallery-item");
      if (!item) return;
      var step = item.getBoundingClientRect().width + 22;
      gallery.scrollBy({
        left: step * Number(btn.dataset.dir),
        behavior: reduceMotion ? "auto" : "smooth"
      });
    });
  });

  /* ----- Estimate form ----- */
  var form = document.getElementById("estimate-form");
  var success = document.querySelector(".form-success");

  function setFieldState(input, ok) {
    var field = input.closest(".field");
    var error = field.querySelector(".error");
    field.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    if (error) {
      error.hidden = ok;
      if (!ok) input.setAttribute("aria-describedby", error.id);
    }
    return ok;
  }

  function validate() {
    var name = form.elements.name;
    var phone = form.elements.phone;
    var email = form.elements.email;
    var project = form.elements.project;

    var okName = setFieldState(name, name.value.trim().length >= 2);
    var okPhone = setFieldState(phone, /^[\d\s()+.-]{7,}$/.test(phone.value.trim()));
    var okEmail = setFieldState(
      email,
      email.value.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    );
    var okProject = setFieldState(project, project.value !== "");

    var firstBad = [
      [okName, name], [okPhone, phone], [okEmail, email], [okProject, project]
    ].find(function (pair) { return !pair[0]; });
    if (firstBad) firstBad[1].focus();

    return !firstBad;
  }

  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      /* Placeholder handling: no backend is wired yet. Connect this form to
         Netlify Forms, Formspree, or the site's CMS before launch. */
      form.hidden = true;
      success.hidden = false;
      success.focus && success.setAttribute("tabindex", "-1");
      success.focus();
    });

    ["name", "phone", "email", "project"].forEach(function (key) {
      var input = form.elements[key];
      input.addEventListener("blur", function () {
        if (input.closest(".field").classList.contains("invalid")) validate();
      });
    });
  }

  /* ----- Footer year ----- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
