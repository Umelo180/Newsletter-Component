'use strict';

// Accounts
const account1 = {
  username: 'Dera',
  email: 'dera@crimson.co',
};

const account2 = {
  username: 'Kevin',
  email: 'kevin@temp.org',
};

const accounts = [account1, account2];

////////// Elements ////////////////
// Newsletter body
const showNewsletter = document.querySelector('.newsletter__wrapper');

// Buttons
const btnSubscribe = document.querySelector('.button--subscribe');
const btnDismiss = document.querySelector('.button--dismiss');

// Show Success message modal
const showModal = document.querySelector('.success__message');

// Show modal email
const displayUserEmail = document.querySelector('.user__email');

// Email field
const emailInput = document.querySelector('.form__email');
const emailError = document.querySelector('.label--invalid');

// Functions
// Show subcribed email
const displaySubscribedEmail = function () {
  if (emailValue) {
    displayUserEmail.textContent = emailValue.email;
  } else {
    displayUserEmail.textContent = emailValue?.value;
  }
};

// Show Success Message
const showModalComponent = function () {
  showModal.classList.add('success__message--shown');
};

// Display Email Error Message
const displayEmailError = function () {
  emailError.classList.add('label--hidden');
  emailInput.classList.add('email--error');
};

// Remove Email Error Message
const removeEmailError = function () {
  emailInput.classList.remove('email--error');
  emailError.classList.remove('label--hidden');
};

// Clear Email Input Field
const clearInput = function () {
  emailInput.value = '';
};

// Event listeners
let emailValue;

btnSubscribe.addEventListener('click', e => {
  e.preventDefault();

  // Finding inputed email
  emailValue = accounts.find(acc => acc?.email === emailInput.value.trim());

  if (emailInput.value === emailValue?.email) {
    console.log(emailValue);
    // Remove newsletter
    showNewsletter.style.opacity = 0;

    // Displaying user email in modal component
    displaySubscribedEmail();

    // Show confirmation message
    showModalComponent();

    // Remove Email Error
    removeEmailError();

    // Clear input field
    clearInput();
  } else {
    // Display Email Error
    displayEmailError();

    // Clear Input field
    clearInput();
  }
});

// Close Modal
btnDismiss.addEventListener('click', e => {
  e.preventDefault();

  showModal.classList.remove('success__message--shown');

  showNewsletter.style.opacity = 100;
});
