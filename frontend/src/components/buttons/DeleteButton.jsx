import React from "react";

const DeleteButton = ({ onClick, isCustomer }) => {
  return (
    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
      <span
        aria-hidden
        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
      ></span>
      <button onClick={onClick} type={isCustomer ? "submit" : "button"}>
        <span className="relative">DELETE</span>
      </button>
    </span>
  );
};

export default DeleteButton;
