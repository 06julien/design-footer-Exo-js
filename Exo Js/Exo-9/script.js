const circle = document.getElementById("circle");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});
