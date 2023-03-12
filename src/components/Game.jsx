import React, { useState, useEffect } from "react";
import Board from "./Board";
// import History from "./History";

function Game() {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState("");
  const [winner, setWinner] = useState();
  const [player, setPlayer] = useState(false);
  const [history, setHistory] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);

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
    setXIsNext("🐼");
    setPlayer(true);
  };

  const chosePlayerTiger = () => {
    setPlayer(true);
    setXIsNext("🐯");
  };
  //Handle player
  //this is for the X or O title for the square
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    } // this is for stop the game when ever 2 of this condition true.

    const history = [...squares];
    console.log(history);
    //this const will return a list off array, if u click squares [2] is the first
    //it return Array[...], 1: 2. This one mean fisrt move is Array[2].
    // setSquares(nextHistory);
    setCurrentMove(history.length - 1);
    // console.log(currentMove);

    const nextSquare = [...squares];
    nextSquare[i] = xIsNext ? "🐼" : "🐯";
    setSquares(nextSquare);
    setXIsNext((prev) => !prev);
  };
  //
  //Restart game
  const handlRestart = () => {
    setSquares("");
    setWinner("");
    setPlayer(false);
  };

  const prevMove = (i) => {
    const rememberMove = [...squares];
    rememberMove[i] = xIsNext ? "🐼" : "🐯";
    console.log(rememberMove);
    setSquares(rememberMove);
    setXIsNext((prev) => !prev);
  };

  const moves = (currentMove) => {
    let historyBoard;
    if (currentMove > 0) {
      historyBoard = "Go to move number " + currentMove;
    } else return;
    return (
      <div>
        <li key={currentMove}>
          <button onClick={() => prevMove(currentMove)}>{historyBoard}</button>
        </li>
      </div>
    );
  };

  return (
    <div className="md:flex  w-full h-full flex flex-col items-center justify-center gap-3 py-6">
      {!player && (
        <div className="flex md:flex flex-col justify-center items-center">
          <h1 class="flex flex-row md:text-6xl justify-center w-full items-center font-bold text-3xl text-orange-500">
            Hi there
            <span class="md:flex animate-[wave_3s_ease-in-out_99]  ">👋🏻</span>
            <span className="md:flex">Choose your character</span>
          </h1>
          <div className="flex flex-row items-center justify-around gap-x-6 pt-10">
            <span
              className=" text-6xl   hover:scale-150 transition ease-in-out cursor-pointer "
              onClick={chosePlayerPanda}
            >
              🐼
            </span>

            <span
              className="text-6xl   hover:scale-150 transition ease-in-out cursor-pointer"
              onClick={chosePlayerTiger}
            >
              🐯
            </span>
          </div>
        </div>
      )}

      {winner && (
        <div className="md:flex rounded-xl w-5/12 h-full bg-gradient-to-br  from-red-300 to-orange-200 flex flex-col justify-center items-center gap-6">
          <span className="md:flex text-yellow-200 mt-6 text-2xl font-bold absolute top-0 flex flex-row justify-center items-center ">
            Winner is
            <span className="animate-[wave_3s_ease-in-out_99] ">{winner}</span>
          </span>
          <Board squares={squares} handleClick={handleClick} />
        </div>
      )}
      {player && !winner && (
        <div className="md:flex rounded-xl w-5/12 h-full bg-gradient-to-br  from-red-300 to-orange-200 flex flex-row justify-center items-center gap-6">
          <span className="md:flex text-gray-100 mt-6 text-lg font-light absolute top-0 flex flex-row justify-center items-center ">
            Next player is:
            <span className="animate-[wave_3s_ease-in-out_99] ">
              {xIsNext ? "🐼" : "🐯"}
            </span>
          </span>
          <Board squares={squares} handleClick={handleClick} />
          <div>{moves}</div>
        </div>
      )}
      {player && (
        <div className="flex flex-row justify-between   md:flex items-center w-2/5 h-fit">
          <button
            onClick={prevMove}
            className="bg-gradient-to-r from-indigo-200  via-red-200 to-yellow-200 rounded hover:scale-125 hover:text-red-500 transition duration-200 md:text-sm ease-in-out text-sm font-light  flex justify-center items-center md:flex h-full w-1/4 px-3"
          >
            Prev
          </button>
          <button
            onClick={handlRestart}
            className="bg-gradient-to-r from-indigo-200   via-red-200 to-yellow-200 rounded hover:scale-125 hover:text-red-500 transition duration-200 md:text-xs ease-in-out text-sm font-light  flex justify-center items-center md:flex h-full w-1/4 px-3"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
