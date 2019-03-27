import React from "react";
import { useArray } from "react-hanger";
import "./Player.css";

import CaptureFragments from "../CaptureFragments/CaptureFragments.js";
import KeyForger from "../KeyForger/KeyForger.js";
import FamilySelector from "../FamilySelector/FamilySelector.js";
import Counter from "../../generalComponents/Counter/Counter.js";

import osoLogo from "../../data/img/oso.jpg";

function Player({ title, familiesLogo, count, setCount }) {
  const familyImages = useArray([]);

  const removeFamily = family => {
    if (familyImages.value.length > 0) {
      // console.log(family);
      // console.log(familyImages);
      // console.log(familyImages.value.indexOf(family));
      familyImages.removeById(familyImages.value.indexOf(family));
    }
  };

  const renderPlayerFamilies = (families = [osoLogo]) =>
    families.value.map((family, i) => (
      <div key={i} className="family-image">
        <img className="family image" src={family} alt="Smiley face" />
        <div onClick={() => removeFamily(family)}>x</div>
      </div>
    ));

  return (
    <div className="player">
      <FamilySelector familiesLogo={familiesLogo} familyImages={familyImages} />
      <CaptureFragments count={count} setCount={setCount} />
      <KeyForger count={count} setCount={setCount} />
      <div className="player-families circle-container">
        {renderPlayerFamilies(familyImages)}
      </div>
      <div className="fragments-counter counter">
        <Counter
          count={count}
          setCount={setCount}
          incrementValue={-1}
          text={"-"}
          className="decrement"
        />
        <p
          className="fragments-count"
          count={count}
        >{`Key Fragments: ${count}`}</p>
        <Counter
          count={count}
          setCount={setCount}
          incrementValue={1}
          text={"+"}
          className="increment"
        />
      </div>
    </div>
  );
}

export default Player;
