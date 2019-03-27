import React from "react";
import { useArray } from "react-hanger";
import "./Player.css";

import CaptureFragments from "../CaptureFragments/CaptureFragments.js";
import KeyForger from "../KeyForger/KeyForger.js";
import FamilySelector from "../FamilySelector/FamilySelector.js";
import FragmentsCounter from "../FragmentsCounter/FragmentsCounter.js";
import PlayerFamilies from "../PlayerFamilies/PlayerFamilies.js";

function Player({ title, familiesLogo, count, setCount }) {
  const familyImages = useArray([]);

  return (
    <div className="player">
      <FamilySelector familiesLogo={familiesLogo} familyImages={familyImages} />
      <CaptureFragments count={count} setCount={setCount} />
      <PlayerFamilies familyImages={familyImages} />
      <KeyForger count={count} setCount={setCount} />
      <FragmentsCounter count={count} setCount={setCount} />
    </div>
  );
}

export default Player;
