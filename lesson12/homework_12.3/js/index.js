const taskList = document.createElement("ul");
taskList.id = "task-list";
document.body.appendChild(taskList);

const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.id = "taskInput";
taskInput.placeholder = "Введіть нове завдання";
document.body.appendChild(taskInput);

const addTaskButton = document.createElement("button");
addTaskButton.id = "addTaskButton";
addTaskButton.textContent = "Додати";
document.body.appendChild(addTaskButton);

taskList.style.cssText = `
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 20px;
`;

taskInput.style.cssText = `
  margin-right: 10px;
  padding: 5px;
`;

addTaskButton.style.cssText = `
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const initialTasks = ["Завдання 1", "Завдання 2", "Завдання 3"];

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.style.cssText = `
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        border: 2px solid red;
        border-radius: 5px;
        background-color: #f8d7da;
        color: red;
        cursor: pointer;
    `;

  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

function addInitialTasks() {
  initialTasks.forEach(function (task) {
    addTask(task);
  });
}

function handleAddTaskButtonClick() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
}

addTaskButton.addEventListener("click", handleAddTaskButtonClick);

function handleTaskListClick(event) {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    taskList.removeChild(li);
  }
}

taskList.addEventListener("click", handleTaskListClick);

addInitialTasks();
