import React, { useState } from "react";
import "./Player.css";

import CaptureFragments from "../CaptureFragments/CaptureFragments.js";
import KeyForger from "../KeyForger/KeyForger.js";
import FamilySelector from "../FamilySelector/FamilySelector.js";
import FragmentsCounter from "../FragmentsCounter/FragmentsCounter.js";
import PlayerFamilies from "../PlayerFamilies/PlayerFamilies.js";
import StealFragments from "../StealFragments/StealFragments.js";

function Player({
  title,
  familiesLogo,
  count,
  setCount,
  otherPlayerCount,
  otherPlayerSetCount
}) {
  const [familyImages, setfamilyImages] = useState([]);

  return (
    <>
      <FamilySelector
        familiesLogo={familiesLogo}
        familyImages={familyImages}
        setfamilyImages={setfamilyImages}
      />
      <div className="player">
        <div className="player-keys">
          <KeyForger count={count} setCount={setCount} />
        </div>
        <div className="player-fragments">
          <CaptureFragments
            count={otherPlayerCount}
            setCount={otherPlayerSetCount}
          />
          <FragmentsCounter count={count} setCount={setCount} />
          <StealFragments
            count={count}
            setCount={setCount}
            otherPlayerCount={otherPlayerCount}
            otherPlayerSetCount={otherPlayerSetCount}
          />
        </div>
      </div>
      <PlayerFamilies
        familyImages={familyImages}
        setfamilyImages={setfamilyImages}
      />
    </>
  );
}

export default Player;
