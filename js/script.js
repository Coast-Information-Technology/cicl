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

  (function () {
    const body = document.body;
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn'); // inside panel (kept)

    function openMobile() {
      mobileNav.classList.add('active');
      body.classList.add('no-scroll');
      mobileNav.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Close menu');
      menuBtn.classList.add('is-open');
    }

    function closeMobile() {
      mobileNav.classList.remove('active');
      body.classList.remove('no-scroll');
      mobileNav.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      menuBtn.classList.remove('is-open');
    }

    // Toggle via the same button (morphs bars ↔ times)
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('active');
      isOpen ? closeMobile() : openMobile();
    });

    // Panel's internal close button still works
    if (closeBtn) closeBtn.addEventListener('click', closeMobile);

    // Close after selecting any link in the panel
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

    // ESC to close
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobile(); });
  })();
});


