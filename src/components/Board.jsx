import React, { useState } from "react";
import Square from "./Square";

export default function Board({ color, squares, handleClick }) {
  // const [title,setTitle] = useState()
  return (
    <div className="h-3/4 w-3/4 flex md:flex flex-col justify-around  ">
      <div className="flex flex-row gap-x-1 md:flexmd:flex justify-around  h-1/4 ">
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
      <div className="flex flex-row gap-x-1  justify-around h-1/4 md:flex">
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
      <div className="flex flex-row gap-x-1  justify-around h-1/4 md:flex">
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
  );
}
