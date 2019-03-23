import React, { useState } from "react";
import { useArray, useBoolean } from "react-hanger";
import "./Player.css";

import familiesLogo from "../../data/img/families/index.js";
import keyLogo from "../../data/img/forged-key.png";
import osoLogo from "../../data/img/oso.jpg";

function Player() {
  const [count, setCount] = useState(0);
  const increment = (count, value = 1) => setCount(count + value);

  const maxKey = 3;
  // const disableForgeKey = useBoolean(false);
  const [key, setKey] = useState(0);
  const forgeKey = (count, key, value = 6) => {
    if (count >= value) {
      if (key < maxKey) {
        setKey(key + 1);
        setCount(count - value);
      }
      // else{
      // 	disableForgeKey.toggle
      // }
    }
  };

  const renderKeys = number => {
    let keys = [];
    for (var i = 0; i < number; i++) {
      keys.push(<img className="key image" src={keyLogo} alt="Smiley face" />);
    }
    return keys;
  };

  const familyImages = useArray([]);
  const addFamily = family => {
    if (familyImages.value.length < 3) {
      familyImages.add(familiesLogo[family]);
    }
  };

  const renderPlayerFamilies = (families = [osoLogo]) =>
    families.value.map(family => (
      <img className="family image" src={family} alt="Smiley face" />
    ));

  const renderFamilySelector = () => (
    <select
      familiesLogo={familiesLogo}
      onChange={({ target: { value } }) => addFamily(value)}
    >
      {Object.keys(familiesLogo).map(family => (
        <option value={family}>{family}</option>
      ))}
    </select>
  );

  return (
    <div className="player">
      {renderFamilySelector()}
      <div className="keys-counter counter">
        <div className="keys-container">
          <p> Keys: </p>
          <div className="keys-number">{renderKeys(key)}</div>
        </div>
        <button className="button add-key" onClick={() => forgeKey(count, key)}>
          Forge Key
        </button>
      </div>
      <div className="player-families circle-container">
        {renderPlayerFamilies(familyImages)}
      </div>
      <div className="fragments-counter counter">
        <button
          className="decrement button"
          onClick={() => increment(count, -1)}
        >
          -
        </button>
        <p>{`Key Fragments: ${count}`}</p>
        <button className="increment button" onClick={() => increment(count)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Player;
