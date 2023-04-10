const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('blur', () => {
  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }
});