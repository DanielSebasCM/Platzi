
document.addEventListener("DOMContentLoaded", () => {
  const navbarEmail = document.querySelector('.navbar-email');
  const desktopMenu = document.querySelector('.desktop-menu');
  const menu = document.querySelector('.menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const shoppingCart = document.querySelector('.navbar-shopping-cart');
  const shoppingCartDropdown = document.querySelector('.product-detail');

  navbarEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
    shoppingCartDropdown.classList.add('inactive');
  });

  menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    shoppingCartDropdown.classList.add('inactive');
  });

  shoppingCart.addEventListener('click', () => {
    shoppingCartDropdown.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

  });
});