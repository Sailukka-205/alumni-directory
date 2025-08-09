import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-2xl shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
