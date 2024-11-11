const menuButton = document.querySelector('.header__mobile-menu-button');
const closeMenuButton = document.querySelector('.nav__mobile-close-menu');
const menu = document.querySelector('.nav');
const backgroundDimmed = document.querySelector(".header__mobile-menu-background-dimmed");

menuButton.addEventListener('click', () => {
  backgroundDimmed.classList.add("header__mobile-menu-background-dimmed-active");
  setTimeout(() => {
    menu.classList.add('nav__mobile-menu-active');
  }, 200);
});

closeMenuButton.addEventListener('click', () => {
  backgroundDimmed.classList.remove("header__mobile-menu-background-dimmed-active");
  menu.classList.remove('nav__mobile-menu-active');
});