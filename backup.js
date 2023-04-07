function onLoadHandler() {
  const addNewTaskElement = document.getElementById("addButton");
  addNewTaskElement.addEventListener("click", addToTaskList);
}

// Add new task to the tasklist
function addToTaskList() {
  const inputElement = document.getElementById("input");
  const inputValue = inputElement.value;

  if (inputValue.trim() === "") {
    // Check if input value is empty or contains only whitespace
    alert("No task has been entered");
    return;
  }

  const taskListElement = document.getElementById("taskList");
  const addedTaskElement = document.createElement("li");
  addedTaskElement.innerText = inputValue;

  // Delete an added task
  // Create a delete button
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerText = "Delete";
  deleteButtonElement.classList.add("deleteButton");

  // Delete task with the delete button
  deleteButtonElement.addEventListener("click", function () {
    addedTaskElement.remove();
  });

  // Mark task as done or not
  addedTaskElement.addEventListener("click", function () {
    if (addedTaskElement.style.textDecoration === "line-through") {
      addedTaskElement.style.textDecoration = "none";
      addedTaskElement.style.color = "#82674e";
    } else {
      addedTaskElement.style.textDecoration = "line-through";
      addedTaskElement.style.color = "gray";
    }
  });

  addedTaskElement.appendChild(deleteButtonElement);
  taskListElement.appendChild(addedTaskElement);

  // Clear input value after adding task
  inputElement.value = "";
}

window.addEventListener("load", onLoadHandler);
