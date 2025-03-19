const navbarLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")


// Menü öffnen, wenn man auf Burger-Icon klickt
menuOpenButton.addEventListener("click", () => {

  // Mobile menu anzeigen
  document.body.classList.toggle("show-mobile-menu")
})
// Menü schliessen, bei Klick auf Kreuz
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// Menu schliessen, wenn man auf einen Menü-Punkt klickt
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click())
})

/* Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // "Punkte" für Swiper
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation Pfeile
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive Breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})
