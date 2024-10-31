import React from "react";

function InputField({ label, register, errors, type }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}:</label>
      <input
        {...register}
        type={type}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
      />
      {errors && <p className="text-red-500">{errors.message}</p>} 
    </div>
  );
}

export default InputField;
