window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-gallery", {
    loop: true,
    navigation: {
      nextEl: ".swiper-gallery-next",
      prevEl: ".swiper-gallery-prev",
    },
    grid: {
      rows: 2,
    },

    breakpoints: {
      320: {
        spaceBetween: 12,
        slidesPerView: 2,
      },
      544: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });

  // Menu

  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuLink = document.querySelectorAll("a[data-anchor]");

  hamburger.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    menu.classList.toggle("active");
  });

  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });

  // Smooth scroll

  document.querySelectorAll("a[data-anchor]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = e.target.getAttribute("href");
      const scrollTarget = document.querySelector(id);
      const elementPosition =
        scrollTarget.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    });
  });
});
