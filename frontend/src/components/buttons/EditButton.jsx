import React from "react";

const EditButton = ({ onClick }) => {
  return (
    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
      <span
        aria-hidden
        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
      ></span>
      <button onClick={onClick}>
        <span className="relative">EDIT</span>
      </button>
    </span>
  );
};

export default EditButton;
