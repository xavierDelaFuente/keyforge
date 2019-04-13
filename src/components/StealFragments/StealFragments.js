import React, { useState } from "react";

import Counter from "../../generalComponents/Counter/Counter.js";
import ValueDisplayer from "../../generalComponents/ValueDisplayer/ValueDisplayer.js";

function StealFragments({
  count,
  setCount,
  otherPlayerCount,
  otherPlayerSetCount
}) {
  const [capture, setCapture] = useState(2);
  const StealFragments = ({
    count,
    setCount,
    capture,
    setCapture,
    otherPlayerCount,
    otherPlayerSetCount
  }) => {
    capture = otherPlayerCount - capture > 0 ? capture : otherPlayerCount;
    setCount(count + capture);
    otherPlayerSetCount(otherPlayerCount - capture);
  };

  return (
    <div className="capture-fragments button">
      <Counter
        count={capture}
        setCount={setCapture}
        incrementValue={-1}
        text={"-"}
        className="decrement-stealcost"
      />
      <button
        className="counter--button steal-fragments__button"
        onClick={() =>
          StealFragments({
            count,
            setCount,
            capture,
            setCapture,
            otherPlayerCount,
            otherPlayerSetCount
          })
        }
      >
        <ValueDisplayer title="Steal" value={capture} />
      </button>
      <Counter
        count={capture}
        setCount={setCapture}
        incrementValue={1}
        text={"+"}
        className="increment-stealcost"
      />
    </div>
  );
}

export default StealFragments;
