function onLoadHandler() {
  // Clicking the "+" button -> addToTaskList function
  const addButtonElement = document.getElementById("addButton");
  addButtonElement.addEventListener("click", addToTaskList);
}

// Add new task to the tasklist
function addToTaskList() {
  const inputElement = document.getElementById("input");
  const inputValue = inputElement.value;

  // Check if input value is empty or contains only whitespace
  if (inputValue.trim() === "") {
    alert("No task has been entered");
    return;
  }

  // Makes a list out of the input value
  const taskListElement = document.getElementById("taskList");
  const addedTaskElement = document.createElement("li");
  addedTaskElement.innerText = inputValue;

  // Create a delete button
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerText = "Delete";
  deleteButtonElement.classList.add("deleteButton");

  // Delete task with the delete button
  deleteButtonElement.addEventListener("click", removeElement);
  function removeElement() {
    const element = this.parentNode;
    element.parentNode.removeChild(element);
  }

  // Mark task as done or not
  addedTaskElement.addEventListener("click", markTask);
  function markTask() {
    if (addedTaskElement.style.textDecoration === "line-through") {
      addedTaskElement.style.textDecoration = "none";
      addedTaskElement.style.color = "#82674e";
    } else {
      addedTaskElement.style.textDecoration = "line-through";
      addedTaskElement.style.color = "gray";
    }
  }

  // Makes delete button a child of addedTaskElement
  addedTaskElement.appendChild(deleteButtonElement);
  // Makes added task a child of taskLiskElement
  taskListElement.appendChild(addedTaskElement);

  // Clear input value after adding task
  inputElement.value = "";
}

window.addEventListener("load", onLoadHandler);
