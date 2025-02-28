const draggable = document.querySelector(".draggable");
const dropzones = document.querySelectorAll(".dropzone");

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    dropzone.appendChild(draggableElement);
  });
});
