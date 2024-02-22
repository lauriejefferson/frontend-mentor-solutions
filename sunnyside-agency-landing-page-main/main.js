const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const heroTitle = document.querySelector('.hero-title');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
  heroTitle.classList.toggle('hero-title--hidden');
});
