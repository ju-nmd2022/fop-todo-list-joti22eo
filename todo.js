function onLoadHandler() {
  const addNewTaskElement = document.getElementById("addButton");
  addNewTaskElement.addEventListener("click", addToTaskList);
}

// Add new task to the tasklist
function addToTaskList() {
  const inputElement = document.getElementById("input").value;
  const addedTask = document.createElement("li");
  addedTask.innerText = inputElement;
  document.getElementById("taskList").appendChild(addedTask);
}

window.addEventListener("load", onLoadHandler);
