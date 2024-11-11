import React, { useState } from 'react';
import useStore from '../Store/Store.js'; 

function Input({ onSubmit }) {
  const [inputValue, setInputValue] = useState(''); 
  const setId = useStore(function (state) { return state.setId; }); 

  function handleSubmit() {
    if (inputValue.trim()) {
      setId(inputValue); 
      setInputValue(''); 
    }
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter SWAPI URL or ID (e.g. people/1)"
              value={inputValue}
              onChange={function (e) { setInputValue(e.target.value); }} 
            />
            <button
              className="btn btn-primary w-32 py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-lg"
              onClick={handleSubmit}
            >
              Get Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;