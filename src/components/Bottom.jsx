import React from "react";

function Bottom(handlRestart) {
  return (
    <div className="flex flex-row justify-around items-center w-2/5 h-fit">
      <button className="text-red-500  font-light text-xs bg-gradient-to-r from-indigo-200 h-5  via-red-200 to-yellow-200 hover:text-red-500 hover:scale-125 transition ease-out  w-1/4  rounded-lg">
        Undo
      </button>
      <button
        className="text-red-500  font-light text-xs bg-gradient-to-r from-indigo-200 h-5 via-red-200 to-yellow-200 hover:text-red-500 hover:scale-125 transition ease-out  w-1/4  rounded-lg "
        onClick={handlRestart}
      >
        Restart
      </button>
    </div>
  );
}

export default Bottom;
