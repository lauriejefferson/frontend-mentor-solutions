const input = document.querySelector('input');
const btn = document.querySelector('.early-access__submit');
const errorMessage = document.querySelector('.error-message');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value && input.validity.patternMismatch === true) {
    errorMessage.style.visibility = 'visible';
  }
});
