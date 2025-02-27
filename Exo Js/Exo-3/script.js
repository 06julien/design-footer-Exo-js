const ElementButton = document.querySelector("button");
const Otext = document.querySelector("p");
ElementButton.addEventListener("click", () => {
  if (Otext.style.display === "none") {
    Otext.style.display = "block";
  } else {
    Otext.style.display = "none";
  }
});
