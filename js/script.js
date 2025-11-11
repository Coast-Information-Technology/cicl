// var acc = document.getElementById("service");

//   acc.addEventListener("click", function() {
//     var panel = document.querySelector(".mega-menu");
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//     });

const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {
      // Show button after 200px of scrolling
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "flex";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");
  const accordions = document.querySelectorAll(".accordion-toggle");

  // Hamburger menu toggle
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Accordion toggle for mobile
  accordions.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
        toggle.querySelector("i").classList.remove("fa-chevron-up");
        toggle.querySelector("i").classList.add("fa-chevron-down");
      } else {
        content.style.display = "flex";
        toggle.querySelector("i").classList.remove("fa-chevron-down");
        toggle.querySelector("i").classList.add("fa-chevron-up");
      }
    });
  });
})

document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const prevBtn = document.querySelector('.arrow-btn.prev');
    const nextBtn = document.querySelector('.arrow-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    let cardsPerView = getCardsPerView(); // Determine initially visible cards
    let currentSlide = 0;

    // Helper to get number of cards visible based on screen size
    function getCardsPerView() {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 1024) {
            return 2;
        } else {
            return 3;
        }
    }

    // Recalculate cards per view and reset position on resize
    window.addEventListener('resize', () => {
        cardsPerView = getCardsPerView();
        currentSlide = 0; // Reset to first slide on resize
        updateCarousel();
    });

    // Create dots dynamically
    const totalDots = Math.ceil(cards.length / cardsPerView);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
    const dots = Array.from(document.querySelectorAll('.dot'));

    // Update carousel position, dots, and arrows
    function updateCarousel() {
        const offset = -currentSlide * (cardWidth * cardsPerView);
        carouselTrack.style.transform = `translateX(${offset}px)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Update arrows
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide >= (totalDots - 1);
    }

    // Navigation Buttons
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < (totalDots - 1)) {
            currentSlide++;
            updateCarousel();
        }
    });

    // Initial load
    updateCarousel();
});
