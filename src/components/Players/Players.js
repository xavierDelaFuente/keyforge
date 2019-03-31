import React, { useState } from "react";
import Player from "../Player/Player";
import "./Players.css";

import familiesLogo from "../../data/img/families/index.js";

function Players({ players }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div key={players[0]} className="player-container rotateElement--right">
        <h5 className="player-title">{players[0]}</h5>
        <Player
          familiesLogo={familiesLogo}
          count={count1}
          setCount={setCount1}
          otherPlayerCount={count2}
          otherPlayerSetCount={setCount2}
        />
      </div>
      <div key={players[1]} className="player-container rotateElement--left">
        <h5 className="player-title">{players[1]}</h5>
        <Player
          familiesLogo={familiesLogo}
          count={count2}
          setCount={setCount2}
          otherPlayerCount={count1}
          otherPlayerSetCount={setCount1}
        />
      </div>
    </>
  );
}

export default Players;
