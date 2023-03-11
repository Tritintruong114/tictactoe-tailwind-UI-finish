import React from "react";

function Square({ title, handleClick }) {
  return (
    <div className="md:flex">
    <button
      className=" md:flex flex justify-center items-center text-6xl bg-gray-100  hover:scale-125 transition ease-out font-bold h-32 w-32 rounded-md"
      onClick={handleClick}
    >
      <span className="md:text- animate-[wave_3s_ease-in-out_99]">{title}</span>
      </button>
      </div>
  );
}

export default Square;
