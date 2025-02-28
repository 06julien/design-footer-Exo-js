const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  let valid = true;

  // Reset error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate email
  if (email.value === "") {
    emailError.textContent = "L'email est requis.";
    valid = false;
  } else if (!validateEmail(email.value)) {
    emailError.textContent = "L'email n'est pas valide.";
    valid = false;
  }

  // Validate password
  if (password.value === "") {
    passwordError.textContent = "Le mot de passe est requis.";
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
