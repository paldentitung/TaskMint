import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-indigo-400 text-gray-50 px-6 py-2 rounded-md shadow  transition-all duration-300  opacity-85 hover:cursor-pointer active:opacity-50 hover:opacity-100">
      {name}
    </button>
  );
};

export default Button;
