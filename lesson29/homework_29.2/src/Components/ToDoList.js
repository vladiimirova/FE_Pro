import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleComplete } from "../Store/Store.js";

function ToDoList() {
  const dispatch = useDispatch(); 
  const tasks = useSelector(function(state) {
    return state.tasks.taskList;
  });

  function handleDelete(id) {
    dispatch(deleteTask(id)); 
  }

  function handleToggleComplete(id) {
    dispatch(toggleComplete(id)); 
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="space-y-4">
        {tasks.map(function(task) {
          return (
            <li
              className="flex justify-between items-center w-[500px] bg-white p-3 rounded transition-colors duration-300"
              key={task.id} 
            >
              <div className="flex items-center gap-2">
                <label className="custom-checkbox relative cursor-pointer inline-block">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={function() {
                      handleToggleComplete(task.id); 
                    }}
                    className="opacity-0 absolute cursor-pointer h-0 w-0"
                  />
                  <span
                    className={`checkmark h-5 w-5 border-2 rounded-full inline-block relative mr-2 transition-all duration-200 ${
                      task.completed ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'
                    }`}
                  >
                    {task.completed && (
                      <svg
                        className="absolute inset-0 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="white"
                      >
                        <path d="M20.285 5.637a1 1 0 00-1.415 0L9 15.422 5.138 11.56a1 1 0 00-1.415 1.415l4.5 4.5a1 1 0 001.415 0l12-12a1 1 0 000-1.415z" />
                      </svg>
                    )}
                  </span>
                </label>
                <span className={`text text-lg ${task.completed ? "line-through" : ""}`}>
                  {task.text}
                </span>
              </div>
              <div className="button-wrapper">
                <button
                  className="bg-red-500 text-white rounded-lg py-1 px-3 text-base"
                  onClick={function() {
                    handleDelete(task.id); 
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