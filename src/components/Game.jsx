import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState();

  //Declaring a Winner
  useEffect(() => {
    const winner = calculateWinner(squares);
    console.log(winner);
    if (winner) {
      setWinner(winner);
    }
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  //this is for the X or O title for the square
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    } // this is for stop the game when ever 2 of this condition true.

    const nextSquare = [...squares];
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext((prev) => !prev);
  };
  //
  //Restart game
  const handlRestart = () => {
    setSquares("");
  };

  return (
    <div className="md:flex   w-3/4 h-3/4 flex flex-col items-center justify-center gap-3">
      <h2 className="md:flex  shadow-xl  text-gray-100 text-sm py-1  flex justify-center rounded-xl items-center font-light w-1/4  bg-gradient-to-tr from-red-100 to-red-400">
        Winner is: {winner ? winner : "N/N"}
      </h2>

      <div className="md:flex rounded-xl w-2/6 h-3/4 bg-gradient-to-br  from-red-200 to-red-400 flex flex-col justify-center items-center gap-6">
        <span className="md:flex text-gray-100 font-light flex flex-row justify-center items-center ">
          Next player is: {xIsNext ? "X" : "O"}
        </span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <div className="flex flex-row justify-between items-center w-1/5">
        <button className="text-cyan-500  flex items-center justify-center items-center font-light text-xs bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:text-red-500 hover:scale-125 transition ease-out  w-full rounded-lg">
          Undo
        </button>
        <button
          className="text-cyan-500 flex items-center justify-center items-center font-light text-xs bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:text-red-500 hover:scale-125 transition ease-out  w-full rounded-lg "
          onClick={handlRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Game;
