const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Mobile Menu einblenden mit Klick auf Burger
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Mobile Menu ausblenden mit Klick auf Kreuz
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
