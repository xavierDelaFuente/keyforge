import React, { useState } from "react";
import { useArray, useBoolean } from "react-hanger";
import "./Player.css";

import Counter from '../../generalComponents/Counter/Counter.js'

import keyLogo from "../../data/img/forged-key.png";
import osoLogo from "../../data/img/oso.jpg";

function Player({ title, familiesLogo }) {
  const [count, setCount] = useState(0);

  const maxKey = 3;
  const maxImg = 3;
  const initialKeyCost = 6;
  const [keycost, setKeycost] = useState(initialKeyCost);
  // const disableForgeKey = useBoolean(false);
  const [key, setKey] = useState(0);
  const forgeKey = (count, key, keycost = initialKeyCost) => {
    if (count >= keycost) {
      if (key < maxKey) {
        setKey(key + 1);
        setCount(count - keycost);
      }
      // else{
      // 	disableForgeKey.toggle
      // }
    }
  };

  const renderKeys = number => {
    let keys = [];
    for (var i = 0; i < number; i++) {
      keys.push(
        <img key={i} className="key image" src={keyLogo} alt="Smiley face" />
      );
    }
    return keys;
  };

  const familyImages = useArray([]);
  const addFamily = family => {
    if (familyImages.value.length < maxImg) {
      familyImages.add(familiesLogo[family]);
    }
  };

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
      <div key={i} className="family-image" key={family}>
        <img className="family image" src={family} alt="Smiley face" />
        <div onClick={() => removeFamily(family)}>x</div>
      </div>
    ));

  const renderFamilySelector = () => (
    <select
      onChange={({ target: { value } }) => addFamily(value)}
      className="family-selector"
    >
      {Object.keys(familiesLogo).map(family => (
        <option key={family} value={family} className="family-selector--option">
          {family}
        </option>
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
        <div className="keys-counter-container">
          <Counter count={keycost} setCount={setKeycost} incrementValue={-1} text={'-'} className="decrement-keycost"/>
          <button className="button add-key" onClick={() => forgeKey(count, key, keycost)}>
            Forge Key for {keycost}
          </button>
          <Counter count={keycost} setCount={setKeycost} incrementValue={1} text={'+'} className="increment-keycost"/>
        </div>
      </div>
      <div className="player-families circle-container">
        {renderPlayerFamilies(familyImages)}
      </div>
      <div className="fragments-counter counter">
        <Counter count={count} setCount={setCount} incrementValue={-1} text={'-'} className="decrement"/>
        <p
          className="fragments-count"
          count={count}
        >{`Key Fragments: ${count}`}</p>
        <Counter count={count} setCount={setCount} incrementValue={1} text={'+'} className="increment"/>
      </div>
    </div>
  );
}

export default Player;
