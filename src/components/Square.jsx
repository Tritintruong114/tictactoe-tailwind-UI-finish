import React from "react";

function Square({ title, handleClick }) {
  return (
    <div className="h-full flex justify-center items-center md:flex w-1/4 ">
      <button
        onClick={handleClick}
        className="bg-gradient-to-r flex justify-center items-center md:flex hover:scale-125 transition ease-in-out duration-600  from-rose-100 rounded-md to-teal-100 h-full w-full"
      >
        <span className="text-3xl md:flex">{title}</span>
      </button>
    </div>
  );
}

export default Square;
