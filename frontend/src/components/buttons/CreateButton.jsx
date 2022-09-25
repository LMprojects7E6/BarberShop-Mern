import React from "react";

function CreateButton({ onClick }) {
  return (
    <button
      type="button"
      className="btn-style_newAccount inline-block px-6 py-2 border-2 border-black-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={onClick}
    >
      CREATE EMPLOYEE
    </button>
  );
}

export default CreateButton;
