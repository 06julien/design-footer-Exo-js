const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Terminer";
    completeButton.addEventListener("click", () => {
      span.classList.toggle("completed");
    });
    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
