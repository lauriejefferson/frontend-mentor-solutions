const navToggle = document.querySelector('.nav-toggle');
const navToggleClose = document.querySelector('.nav-toggle-close');
const nav = document.querySelector('.nav');
const features = document.querySelector('.nav-link--features');
const company = document.querySelector('.nav-link--company');
const featuresList = document.querySelector('.nav-nested--features');
const companyList = document.querySelector('.nav-nested--company');
const arrowDownOne = document.querySelector('.arrow-down--one');
const arrowDownTwo = document.querySelector('.arrow-down--two');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

navToggleClose.addEventListener('click', (e) => {
  nav.classList.toggle('nav--visible');
  if (featuresList.classList.contains('nav--visible-features')) {
    featuresList.classList.remove('nav--visible-features');
  }
  if (companyList.classList.contains('nav--visible-company')) {
    companyList.classList.remove('nav--visible-company');
  }
});

features.addEventListener('click', (e) => {
  featuresList.classList.toggle('nav--visible-features');
  arrowDownOne.classList.toggle('rotate');
});

company.addEventListener('click', (e) => {
  companyList.classList.toggle('nav--visible-company');
  arrowDownTwo.classList.toggle('rotate');
});
