import React, { useState } from "react";
import "./CaptureFragments.css";

import Counter from "../../generalComponents/Counter/Counter.js";
import capturedFragmentskeyLogo from "../../data/img/fragments.png";

function CaptureFragments({ count, setCount }) {
  const [capture, setCapture] = useState(0);
  const [capturedFragments, setCapturedFragments] = useState([]);

  const renderCapturedFragments = ({ value, index }) => {
    let fragments = [];
    for (var i = 0; i < value; i++) {
      fragments.push(
        <img
          key={index}
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
    capturedFragments,
    setCapturedFragments
  }) => {
    capture = count - capture > 0 ? capture : count;
    setCount(count - capture);
    if (count > 0) setCapturedFragments([...capturedFragments, 
      { value: capture, index: Object.values(capturedFragments).length}
      ]);
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
            capturedFragments,
            setCapturedFragments
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
      {capturedFragments.length > 0 && (
        <div className="capturedFragments-list">
          {capturedFragments.map((capturedFragment, key) => (
            <div key={`${capturedFragment}${key}`} className="capturedFragments-container">
              <button
                className="capturedFragments--delete"
                onClick={() => {
                  setCount(count + capturedFragment.value )
                  setCapturedFragments(capturedFragments.filter((current) => current.index!==capturedFragment.index))
                }}
              >
                x
              </button>
              {renderCapturedFragments(capturedFragment)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaptureFragments;
