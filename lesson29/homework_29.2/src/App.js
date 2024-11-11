import React from "react";
import ToDoForm from "./Components/ToDoForm.js"; 
import "./App.css";

export default function App() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToDoForm/> 
    </div>
  );
}
