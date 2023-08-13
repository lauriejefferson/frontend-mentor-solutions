const navToggle = document.querySelector('.nav-toggle');
const navToggleClose = document.querySelector('.nav-toggle-close');
const nav = document.querySelector('.nav');
const features = document.querySelector('.nav-link--features');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

navToggleClose.addEventListener('click', (e) => {
  nav.classList.toggle('nav--visible');
});
