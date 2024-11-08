const menuButton = document.querySelector('.header__mobile-menu-button');
const closeMenuButton = document.querySelector('.header__mobile-close-menu');
const menu = document.querySelector('.header__mobile-menu');
const backgroundDimmed = document.querySelector(".header__mobile-menu-background-dimmed");

menuButton.addEventListener('click', () => {
    backgroundDimmed.classList.add("header__mobile-menu-background-dimmed-active");
    setTimeout(() => {
    menu.classList.add('header__mobile-menu-active');
    }, 100);
  });
  
  closeMenuButton.addEventListener('click', () => {
    backgroundDimmed.classList.remove("header__mobile-menu-background-dimmed-active");
    menu.classList.remove('header__mobile-menu-active');
  });