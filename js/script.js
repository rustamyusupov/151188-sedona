var menuToggleBtn = document.querySelector(".header__menu-toggle");
var navMenu = document.querySelector(".menu");

menuToggleBtn.addEventListener("click", menuToggle);

function menuToggle() {
  navMenu.classList.toggle("menu--closed");
  menuToggleBtn.classList.toggle("header__menu-toggle--closed");
}
