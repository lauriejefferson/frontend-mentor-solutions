const form = document.querySelector('form');
const input = document.querySelector('input');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value && input.validity.patternMismatch === true) {
    errorMessage.style.visibility = 'visible';
  } else {
    errorMessage.style.visibility = 'hidden';
  }
});
