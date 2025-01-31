import React from "react";
import Header from "../Header/Header";
import Players from "../Players/Players";
import "./Board.css";

function Board() {
  const players = ["Magician the 1st", "Magician the 2nd"];
  return (
    <div className="board">
      <Header className="board-header rotateElement--flip">
        <div className="players-board-title">
          Players cristals and keys counter
        </div>
      </Header>
      <div className="board-table">
        <div className="players-board">
          <Players players={players} />
        </div>
      </div>
      <Header className="board-header">
        <div className="players-board-title">
          Players cristals and keys counter
        </div>
      </Header>
    </div>
  );
}

export default Board;
