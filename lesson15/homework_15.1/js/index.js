const taskInput = document.querySelector('.form__input');
const taskList = document.querySelector('.js--todos-wrapper');
const addTaskButton = document.querySelector('.form__btn');

function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

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

function handleAddTaskButtonClick() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        const tasks = loadTasks();
        tasks.push({ text: taskText, checked: false }); 
        saveTasks(tasks); 
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
    const tasks = loadTasks();
    const taskIndex = Array.from(taskList.children).indexOf(li);
    if (taskIndex !== -1) {
        tasks[taskIndex].checked = checkbox.checked;
        saveTasks(tasks);
    }
}

function handleTaskListClick(event) {
    if (event.target.tagName === "BUTTON") {
        const li = event.target.parentElement;
        const tasks = loadTasks();
        const taskIndex = Array.from(taskList.children).indexOf(li);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            saveTasks(tasks);
        }
        taskList.removeChild(li); 
    }
}

taskList.addEventListener("click", handleTaskListClick);

function initializeExistingTasks() {
    taskList.innerHTML = '';
    const tasks = loadTasks();
    tasks.forEach(function(task) {
        addTask(task.text, task.checked);
    });
}

initializeExistingTasks();
