import React from "react";
import useStore from "../Store/Store.js";

function Footer() {
  const store = useStore();
  const clearData = store.clearData;

  return (
    <div className="flex justify-center mt-5">
      <button
        className="btn btn-secondary w-32 py-2 px-4 text-white bg-gray-500 hover:bg-gray-700 rounded-lg"
        onClick={clearData}
      >
        Clear Data
      </button>
    </div>
  );
}

export default Footer;