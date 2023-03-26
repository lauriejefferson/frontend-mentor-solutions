const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');

const addError = (element, message) => {
  element.parentElement.classList.remove("success");
  element.parentElement.classList.add("error");

  element.setAttribute("aria-invalid", true);
  element.nextElementSibling.textContent = message;
};

const removeError = (element) => {
  element.parentElement.classList.remove('error');
  element.parentElement.classList.add('success');
  
  element.setAttribute("aria-invalid", false);

};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (firstname.value === ''){
        addError(firstname, 'First Name cannot be empty');
    } else {
        removeError(firstname);
    }

    if (lastname.value === ''){
        addError(lastname, 'Last Name cannot be empty');
    }else {
        removeError(lastname);
    }

    if (email.value === ''){
        addError(email, 'Email cannot be empty');
    }else if (email.value && email.validity.patternMismatch === true){
        addError(email, 'Looks like this is not an email')
    }else {
        removeError(email);
    }

    if (password.value === ''){
        addError(password, 'Password cannot be empty');
    }else {
        removeError(password);
    }
})


