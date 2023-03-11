import React from "react";

function Square({ title, handleClick }) {
  return (
    <button
      className=" md:flex bg-gray-100 hover:scale-125 transition ease-out font-light h-8 w-8 text-red-500 rounded-md"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Square;
