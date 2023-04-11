// Array to store tasks
const tasks = [];

function onLoadHandler() {
  // Clicking the "+" button -> addToTaskList function
  const addButtonElement = document.getElementById("addButton");
  addButtonElement.addEventListener("click", addToTaskList);

  // Load tasks from localStorage if available
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks.push(...JSON.parse(savedTasks));
    displayTasks();
  }
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

  // Add task to tasks array
  tasks.push({ taskName: inputValue, completed: false });
  displayTasks();
  inputElement.value = ""; // Clear input value after adding task
}

// Display tasks in the tasklist
function displayTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = ""; // Clear existing tasks

  // Loop through tasks array and create HTML elements
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskElement = document.createElement("li");
    taskElement.innerText = task.taskName;

    // Mark task as done or not
    if (task.completed) {
      taskElement.style.textDecoration = "line-through";
      taskElement.style.color = "gray";
    } else {
      taskElement.style.textDecoration = "none";
      taskElement.style.color = "#090502";
    }

    // Create a delete button
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.innerText = "Delete";
    deleteButtonElement.classList.add("deleteButton");

    // Delete task with the delete button
    deleteButtonElement.addEventListener("click", () => {
      tasks.splice(i, 1);
      displayTasks();
    });

    // Toggle marked task (completed or not) by click, then update tasklist display
    taskElement.addEventListener("click", () => {
      task.completed = !task.completed;
      displayTasks();
    });

    // Makes delete button a child of taskElement
    taskElement.appendChild(deleteButtonElement);
    // Makes taskElement a child of taskListElement
    taskListElement.appendChild(taskElement);
  }

  // Save tasks to localStorage
  saveTasksToLocalStorage();
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.addEventListener("load", onLoadHandler);
