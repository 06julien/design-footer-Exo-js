const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

const randomNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess)) {
    message.textContent = "Veuillez entrer un nombre valide.";
  } else if (userGuess < randomNumber) {
    message.textContent = "Trop petit ! Essayez encore.";
  } else if (userGuess > randomNumber) {
    message.textContent = "Trop grand ! Essayez encore.";
  } else {
    message.textContent = "Félicitations ! Vous avez deviné le nombre.";
  }
});
