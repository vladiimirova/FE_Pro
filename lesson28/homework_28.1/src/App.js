import React from "react";
import RegistrationForm from "./Components/RegistrationForm.js"; 
import "./App.css";

export default function App() {
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegistrationForm onSubmit={onSubmit} /> 
    </div>
  );
}
