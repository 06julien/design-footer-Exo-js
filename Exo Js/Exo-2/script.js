const ElementButton = document.querySelector("button");
const testChange = document.getElementById("test");

let clickCount = 0;

ElementButton.addEventListener("click", () => {
  clickCount++;
  testChange.textContent = clickCount;
});
