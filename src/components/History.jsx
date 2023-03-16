import React from "react";

function History({ historys }) {

  
  return (
    <div className="history bg-slate-500 h-fit w-fit">
      {historys.map((history) => (
        <h1>
          Player {history.player} move to {history.position}
        </h1>
      ))}
    </div>
  );
}

export default History;
