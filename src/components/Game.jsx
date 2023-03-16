import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState("");
  const [winner, setWinner] = useState();
  const [player, setPlayer] = useState(false);
  const [historys, setHistorys] = useState([]);
  const [havePlayer, setHavePlayer] = useState();

  // const [current,setCurrent]

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(() => {
        return <h1 className="text-red-500 px-1">{winner}</h1>;
      });
    }
  }, [squares]);
  //for checking
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

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    //if have the calculate then stop
    //and squares have a "X" of "O" then cant click to that squares

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "🐼" : "🐯";
    setSquares(nextSquares);
    setXIsNext((prev) => !prev);

    const addMove = {
      player: nextSquares[i],
      position: i,
    };

    const saveMove = [...historys];
    saveMove.push(addMove); //push method
    setHistorys(saveMove);

    // console.log(addMove);
  };

  const handlRestart = () => {
    setSquares(Array(9).fill(null));
    setWinner("");
    setPlayer(false);
    setHistorys([]);
  };

  const chosePlayerPanda = (i) => {
    setXIsNext(true);
    setPlayer(true);
  };

  const chosePlayerTiger = (i) => {
    setXIsNext(false);
    setPlayer(true);
  };

  const prevMove = () => {
    //lui 1 buoc lay thang duoi cung ra
    // console.log("ABC");
    if (winner) {
      return;
    }
    const notNullSquares = squares.filter((square) => {
      return square !== null;
    });

    if (notNullSquares.length === 0) {
      return;
    }

    const lastMove = historys.pop();
    // console.log(lastMove);
    // console.log(lastMove);
    //xoa vi tri cua phan tu cuoi cung

    const saveMove = [...squares];
    saveMove[lastMove.position] = null;
    setSquares(saveMove);
    setXIsNext((prev) => !prev);

    // lastMove.position = ;

    //set lai luot danh xIsNext?
  };

  return (
    <div className="md:flex w-full h-full flex flex-col justify-center items-center gap-3 py-6">
      {!player && (
        <div className="flex md:flex flex-col justify-center items-center">
          <h1 className="flex flex-row md:text-6xl justify-center w-full items-center font-bold text-3xl text-orange-500">
            Hi there
            <span className="md:flex animate-[wave_3s_ease-in-out_99]  ">
              👋🏻
            </span>
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
          <span className="md:flex md:text-5xl text-yellow-200 mt-6 text-2xl font-bold absolute top-0 flex flex-row justify-center items-center ">
            Winner is
            <span className="animate-[wave_3s_ease-in-out_99] ">{winner}</span>
          </span>
          <Board squares={squares} handleClick={handleClick} />
        </div>
      )}

      {player && !winner && (
        <div className="md:flex rounded-xl w-5/12 h-full bg-gradient-to-br  from-red-300 to-orange-200 flex flex-row justify-center items-center gap-6">
          <span className="md:flex md:text-6xl text-gray-100 mt-6 text-lg font-light absolute pt-3 md:pt-6 top-0 flex flex-row justify-center items-center ">
            Next player is:
            <span className="animate-[wave_3s_ease-in-out_99] ">
              {xIsNext ? "🐼" : "🐯"}
            </span>
          </span>
          <Board squares={squares} handleClick={handleClick} />
        </div>
      )}
      {player && (
        <div className="flex flex-row justify-between   md:flex items-center w-2/5 h-fit">
          <button
            onClick={handlRestart}
            className="bg-gradient-to-r  from-indigo-200   via-red-200 to-yellow-200 rounded hover:scale-125 hover:text-red-500 transition duration-200 md:text-3xl ease-in-out text-sm font-light  flex justify-center items-center md:flex h-full w-1/4 px-3"
          >
            Restart
          </button>
        </div>
      )}

      {}
      <div className="flex absolute right-0">
        <History historys={historys} />
      </div>
    </div>
  );
}

export default Game;
