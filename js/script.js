document.addEventListener("DOMContentLoaded", function () {
  // Scroll-to-top button
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  // Accordion inside mobile nav
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.closest(".accordion-item");
      const content = parent.querySelector(".accordion-content");

      // Close others
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== parent) {
          item.classList.remove("open");
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Toggle current
      parent.classList.toggle("open");
      if (parent.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
