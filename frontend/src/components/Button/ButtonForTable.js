import React from "react";

const ButtonForTable = ({ onClick, children }) => {
  return (
    <>
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
        ></span>
        <button onClick={onClick}>
          <span className="relative">{children}</span>
        </button>
      </span>
    </>
  );
};

export default ButtonForTable;
