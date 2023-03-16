import React from "react";
import Game from "./components/Game";
function App() {
  return (
    <div className="md:flex flex justify-center pr-3 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100 via-red-100 to-cyan-300 items-center h-screen w-screen ">
      <Game />
    </div>
  );
}

export default App;
