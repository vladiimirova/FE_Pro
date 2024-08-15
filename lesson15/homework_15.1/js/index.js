const taskInput = document.querySelector('.form__input');
const taskList = document.querySelector('.js--todos-wrapper');
const addTaskButton = document.querySelector('.form__btn');

function addTask(taskText, checked = false) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    const li = document.createElement("li");
    li.classList.add('todo-item');

    if (checked) {
        li.classList.add('todo-item--checked');
    }

    const spanText = document.createElement("span");
    spanText.classList.add('todo-item__description');
    spanText.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add('todo-item__delete');

    checkbox.addEventListener('click', checkedTask.bind(null, checkbox, li));

    li.appendChild(checkbox);
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function handleAddTaskButtonClick(event) {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", handleAddTaskButtonClick);

function checkedTask(checkbox, li) {
    if (checkbox.checked) {
        li.classList.add('todo-item--checked');
    } else {
        li.classList.remove('todo-item--checked');
    }
    saveTasks();
}

function handleTaskListClick(event) {
    if (event.target.tagName === "BUTTON") {
      const li = event.target.parentElement;
      taskList.removeChild(li);
      saveTasks();  
    }
}
  
taskList.addEventListener("click", handleTaskListClick);

function initializeExistingTasks() {
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        addTask(task.text, task.checked);
    });
}

function saveTasks() {
    const tasks = [];
    const items = taskList.querySelectorAll('li');
    items.forEach(function(item) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const text = item.querySelector('.todo-item__description').textContent;
        tasks.push({
            text: text,
            checked: checkbox.checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

initializeExistingTasks();
