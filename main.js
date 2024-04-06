const orderBtn = document.querySelector('.button');
const closeOrder = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');
const mobileMenuBtn = document.querySelector('.modal-window-open-button');
const mobileMenu = document.querySelector('.modal-window-mobile');
const mobileMenuCloseBtn = document.querySelector('.mobile-close-btn');

orderBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});

closeOrder.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});