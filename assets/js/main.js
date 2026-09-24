(function () {
  var header = document.getElementById("header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  var links = nav.querySelectorAll("a");
  var sections = Array.prototype.map.call(links, function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  function setScrolled() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  function markActive() {
    var current = sections[0];
    var mark = window.scrollY + header.offsetHeight + 24;
    sections.forEach(function (section) {
      if (section && section.offsetTop <= mark) current = section;
    });
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + (current && current.id));
    });
  }

  window.addEventListener("scroll", function () {
    setScrolled();
    markActive();
  }, { passive: true });

  setScrolled();
  markActive();
})();
