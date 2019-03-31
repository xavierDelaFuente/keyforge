import React, { useState } from "react";
import { useArray } from "react-hanger";
import "./CaptureFragments.css";

import Counter from "../../generalComponents/Counter/Counter.js";
import capturedFragmentskeyLogo from "../../data/img/fragments.png";

function CaptureFragments({ count, setCount }) {
  const [capture, setCapture] = useState(0);
  const capturedFragments = useArray([]);

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

  return (
    <div className="capture-fragments button">
      <Counter
        count={capture}
        setCount={setCapture}
        incrementValue={-1}
        text={"-"}
        className="decrement-capturecost"
      />
      <button
        className="capture-fragments__button counter--button"
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
        Capture:
        {capture}
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
  );
}

export default CaptureFragments;
