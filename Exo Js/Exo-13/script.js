const square = document.getElementById("square");
let position = 0;
const speed = 1; // pixels per frame

function animate() {
  position += speed;
  if (position > window.innerWidth) {
    position = -square.offsetWidth;
  }
  square.style.left = position + "px";
  requestAnimationFrame(animate);
}

animate();
