const navToggle = document.querySelector('.nav-toggle');
const navToggleClose = document.querySelector('.nav-toggle-close');
const nav = document.querySelector('.nav');
const features = document.querySelector('.nav-link--features');
const company = document.querySelector('.nav-link--company');
const featuresList = document.querySelector('.nav-nested--features');
const companyList = document.querySelector('.nav-nested--company');
const arrowUpOne = document.querySelector('.arrow-up--one');
const arrowUpTwo = document.querySelector('.arrow-up--two');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

navToggleClose.addEventListener('click', (e) => {
  nav.classList.toggle('nav--visible');
});

features.addEventListener('click', (e) => {
  featuresList.classList.toggle('nav--visible');
  arrowUpOne.classList.toggle('rotate');
});

company.addEventListener('click', (e) => {
  companyList.classList.toggle('nav--visible');
  arrowUpTwo.classList.toggle('rotate');
});
