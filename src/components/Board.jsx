import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  // const [title,setTitle] = useState()
  return (
    <div className="md:flex">
      <div className="md:flex flex flex-col h-fit w-fit justify-center items-center gap-3 ">
        <div className="w-fit md:flex space-x-3 flex flex-row justify-center items-center">
          <Square title={squares[0]} handleClick={() => handleClick(0)} />
          <Square title={squares[1]} handleClick={() => handleClick(1)} />
          <Square title={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="w-fit md:flex space-x-3 flex flex-row justify-center items-center">
          <Square title={squares[3]} handleClick={() => handleClick(3)} />
          <Square title={squares[4]} handleClick={() => handleClick(4)} />
          <Square title={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="w-fit md:flex space-x-3 flex flex-row justify-center items-center">
          <Square title={squares[6]} handleClick={() => handleClick(6)} />
          <Square title={squares[7]} handleClick={() => handleClick(7)} />
          <Square title={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
