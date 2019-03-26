import React, { useState } from "react";
import { useArray } from "react-hanger";
import "./Player.css";

import Counter from "../../generalComponents/Counter/Counter.js";

import keyLogo from "../../data/img/forged-key.png";
import capturedFragmentskeyLogo from "../../data/img/fragments.png";
import osoLogo from "../../data/img/oso.jpg";

function Player({ title, familiesLogo }) {
  const [count, setCount] = useState(0);
  const [capture, setCapture] = useState(2);
  const capturedFragments = useArray([]);

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

  const renderCapturedFragments = number => {
    let fragments = [];
    for (var i = 0; i < number; i++) {
      fragments.push(
        <img
          key={i}
          className="capturedFragments image"
          src={capturedFragmentskeyLogo}
          alt="Smiley face"
        />
      );
    }
    return fragments;
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

  const captureFragments = ({
    count,
    setFragment,
    capture,
    setCapture,
    capturedFragments
  }) => {
    capture = count - capture > 0 ? capture : count;
    setCount(count - capture);
    if (count > 0) capturedFragments.add(capture);
  };

  const renderPlayerFamilies = (families = [osoLogo]) =>
    families.value.map((family, i) => (
      <div key={i} className="family-image">
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
      <div className="capture-fragments">
        <Counter
          count={capture}
          setCount={setCapture}
          incrementValue={-1}
          text={"-"}
          className="decrement-capturecost"
        />
        <button
          className="capture-fragments__button"
          onClick={() =>
            captureFragments({
              count,
              setCount,
              capture,
              setCapture,
              capturedFragments
            })
          }
        >
          Capture: {capture}
        </button>
        <Counter
          count={capture}
          setCount={setCapture}
          incrementValue={1}
          text={"+"}
          className="increment-capturecost"
        />
        {capturedFragments.value.length > 0 &&
          capturedFragments.value.map((capturedFragment, key) => (
            <li key={key}>
              Captured {renderCapturedFragments(capturedFragment)}
              {/*<button onClick={() => capturedFragments.removeIndex(key)}>delete</button>*/}
            </li>
          ))}
      </div>
      <div className="keys-counter counter">
        <div className="keys-container">
          <p> Keys: </p>
          <div className="keys-number">{renderKeys(key)}</div>
        </div>
        <div className="keys-counter-container">
          <Counter
            count={keycost}
            setCount={setKeycost}
            incrementValue={-1}
            text={"-"}
            className="decrement-keycost"
          />
          <button
            className="button add-key"
            onClick={() => forgeKey(count, key, keycost)}
          >
            Forge Key for {keycost}
          </button>
          <Counter
            count={keycost}
            setCount={setKeycost}
            incrementValue={1}
            text={"+"}
            className="increment-keycost"
          />
        </div>
      </div>
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
