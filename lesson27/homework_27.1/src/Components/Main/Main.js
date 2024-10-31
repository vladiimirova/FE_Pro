import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList/ToDoList";
import "./Main.css";

function Main() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(function saveTasks() {
    if (taskList.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }, [taskList]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTask = { text: task, completed: false };
      setTaskList(function (prevTasks) {
        return [...prevTasks, newTask];
      });
      setTask("");
    }
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <div className="Main">
      <div className="container">
        <h1>To Do List</h1>
        <div className="todo-wrapper">
          <form className="form-todo" onSubmit={handleSubmit}>
            <input
              className="input-todo"
              type="text"
              value={task}
              onChange={handleChange}
              placeholder="Введите задачу"
            />
            <button className="btn-todo" type="submit">Добавить задачу</button>
          </form>
          <ToDoList tasks={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </div>
  );
}

export default Main;
