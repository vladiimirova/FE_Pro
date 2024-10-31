import React from "react";
import "./ToDoList.css";

function ToDoList({ tasks, setTaskList }) {
  function handleDelete(index) {
    setTaskList(function (prevTasks) {
      return prevTasks.filter(function (_, i) {
        return i !== index;
      });
    });
  }

  function toggleComplete(index) {
    setTaskList(function (prevTasks) {
      return prevTasks.map(function (task, i) {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  return (
    <div className="list-wrapper">
      <ul className="list">
        {tasks.map(function (task, index) {
          return (
            <li className="list-item" key={index}>
              <div className="task-wrapper">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={function () {
                      toggleComplete(index);
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="text" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.text}
                </span>
              </div>
              <div className="button-wrapper">
                <button
                  className="delete-btn"
                  onClick={function () {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
