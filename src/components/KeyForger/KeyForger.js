import React, { useState } from "react";
import "./KeyForger.css";

import Counter from "../../generalComponents/Counter/Counter.js";
import keyLogo from "../../data/img/forged-key.png";

function KeyForger({ count, setCount }) {
  const maxKey = 3;
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
      //  disableForgeKey.toggle
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

  return (
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
  );
}

export default KeyForger;
