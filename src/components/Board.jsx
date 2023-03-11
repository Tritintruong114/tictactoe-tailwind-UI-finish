import React, { useState } from "react";
import Square from "./Square";

export default function Board({ color, squares, handleClick }) {
  // const [title,setTitle] = useState()
  return (
    <div className="md:flex flex w-full h-full flex-col justify-center items-center ">
      <div className="md:flex  flex flex-col h-3/4 w-3/4 justify-center items-center gap-12 ">
        <div className="w-fit h-1/4 md:flex space-x-3 flex flex-row justify-center items-center">
          <Square
            color={color}
            title={squares[0]}
            handleClick={() => handleClick(0)}
          />
          <Square
            color={color}
            title={squares[1]}
            handleClick={() => handleClick(1)}
          />
          <Square
            color={color}
            title={squares[2]}
            handleClick={() => handleClick(2)}
          />
        </div>
        <div className="w-fit h-1/4 md:flex space-x-3 flex flex-row justify-center items-center">
          <Square
            color={color}
            title={squares[3]}
            handleClick={() => handleClick(3)}
          />
          <Square
            color={color}
            title={squares[4]}
            handleClick={() => handleClick(4)}
          />
          <Square
            color={color}
            title={squares[5]}
            handleClick={() => handleClick(5)}
          />
        </div>
        <div className="w-fit h-1/4 md:flex space-x-3 flex flex-row justify-center items-center">
          <Square
            color={color}
            title={squares[6]}
            handleClick={() => handleClick(6)}
          />
          <Square
            color={color}
            title={squares[7]}
            handleClick={() => handleClick(7)}
          />
          <Square
            color={color}
            title={squares[8]}
            handleClick={() => handleClick(8)}
          />
        </div>
      </div>
    </div>
  );
}
