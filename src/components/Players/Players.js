import React from "react";
import Player from "../Player/Player";
import "./Players.css";

import familiesLogo from "../../data/img/families/index.js";

function Players({ players }) {
  return (
    <>
      {players.map(player => (
        <div key={player} className="player-container">
          <h5 className="player-title">{player}</h5>
          <Player title={player} familiesLogo={familiesLogo} />
        </div>
      ))}
    </>
  );
}

export default Players;
