const ElementButton = document.querySelector("button");
const testChange = document.getElementById("test");

const VarieVolors = ["red", "blue", "green", "yellow", "purple"];
let currentColorIndex = 0;

ElementButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % VarieVolors.length;
  testChange.style.color = VarieVolors[currentColorIndex];
});
