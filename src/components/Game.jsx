import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState();
  const [winner, setWinner] = useState();
  const [color, setColor] = useState();
  const [player, setPlayer] = useState(false);

  //Declaring a Winner
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(() => {
        return <hi className="text-red-500 px-1">{winner}</hi>;
      });
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
  const chosePlayerPanda = () => {
    console.log(setSquares(squares));
  };

  const chosePlayerTiger = () => {
    setXIsNext("🐯");
    setPlayer(true);
  };
  //Handle player
  //this is for the X or O title for the square
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    } // this is for stop the game when ever 2 of this condition true.
    const nextSquare = [...squares];
    nextSquare[i] = xIsNext ? "🐼" : "🐯";
    setSquares(nextSquare);

    const prevSquare = nextSquare[i];

    console.log(prevSquare);

    setXIsNext((prev) => !prev);
  };
  //
  //Restart game
  const handlRestart = () => {
    setSquares("");
    setWinner("");
    setPlayer(false);
  };

  const prevMove = () => {
    setSquares("");
    // setPlayer(false);
  };

  return (
    <div className="md:flex  w-3/4 h-5/6 flex flex-col items-center justify-center gap-3">
      {!player && (
        <div className="flex md:flex flex-col justify-center items-center">
          <h1 class="flex flex-row md:text-6xl justify-center w-full items-center font-bold text-3xl text-orange-500">
            Hi there{" "}
            <span class="animate-[wave_3s_ease-in-out_99] md:text-6xl ">
              👋🏻
            </span>
            <span>Choose your character</span>
          </h1>
          <div className="flex flex-row gap-x-6">
            <button
              className="h-20 hover:scale-150 transition ease-in-out "
              onClick={chosePlayerPanda}
            >
              🐼
            </button>

            <button
              className="h-20 hover:scale-150 transition ease-in-out"
              onClick={chosePlayerTiger}
            >
              🐯
            </button>
          </div>
        </div>
      )}

      {winner && (
        <h2 className="md:flex space-x-3 shadow-xl  text-gray-100 text-sm py-1  flex justify-center rounded-xl items-center font-light w-1/4  bg-gradient-to-tr from-red-100 to-red-400">
          Winner is : {winner ? winner : ""}
        </h2>
      )}

      {player && (
        <div className="md:flex rounded-xl w-2/6 h-3/4 bg-gradient-to-br  from-red-200 to-red-400 flex flex-col justify-center items-center gap-6">
          <span className="md:flex text-gray-100 font- flex flex-row justify-center items-center ">
            Next player is: {xIsNext ? "🐼" : "🐯"}
          </span>
          <Board squares={squares} handleClick={handleClick} />
        </div>
      )}
      {player && (
        <div className="flex flex-row justify-around items-center w-2/5 h-fit">
          <button
            onClick={prevMove}
            className="text-red-500  font-light text-xs bg-gradient-to-r from-indigo-200 h-5  via-red-200 to-yellow-200 hover:text-red-500 hover:scale-125 transition ease-out  w-1/4  rounded-lg"
          >
            Prev
          </button>

          <button
            className="text-red-500  font-light text-xs bg-gradient-to-r from-indigo-200 h-5 via-red-200 to-yellow-200 hover:text-red-500 hover:scale-125 transition ease-out  w-1/4  rounded-lg "
            onClick={handlRestart}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
