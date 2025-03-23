const passwordInput = document.getElementById("password");
const msgSuccess = document.querySelector("#msg-success");
const msgErro = document.querySelector("#msg-error");
const passwordTogglebtn = document.querySelector("#toggle-password");
const checkBtn = document.querySelector("#check-password");
const msgZone = document.querySelector(".alert");

// password.type

passwordTogglebtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    //change text
    passwordInput.type = "text";
    passwordTogglebtn.textContent = "Cacher ";
  } else {
    //change password
    passwordInput.type = "password";
    passwordTogglebtn.textContent = "Afficher";
  }
});

//check toggle

checkBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  if (!password || (password && password.length < 8)) {
    //Erro msg
    msgErro.style.display = "block";
    msgSuccess.style.display = "none";

    msgZone.classList.remove("alert-success");
    msgZone.classList.add("alert-error");
  } else {
    //succes msg
    msgErro.style.display = "none";
    msgSuccess.style.display = "block";

    msgZone.classList.remove("alert-error");
    msgZone.classList.add("alert-success");
  }
});
