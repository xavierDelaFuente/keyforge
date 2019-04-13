import React from "react";
import "./FragmentsCounter.css";

import Counter from "../../generalComponents/Counter/Counter.js";
import ValueDisplayer from "../../generalComponents/ValueDisplayer/ValueDisplayer.js";

function FragmentsCounter({ count, setCount }) {
  return (
    <div className="fragments-counter counter">
      <Counter
        count={count}
        setCount={setCount}
        incrementValue={-1}
        text={"-"}
        className="decrement"
      />
      <button className="counter--button">
        <ValueDisplayer title="Fragments" value={count} />
      </button>
      <Counter
        count={count}
        setCount={setCount}
        incrementValue={1}
        text={"+"}
        className="increment"
      />
    </div>
  );
}

export default FragmentsCounter;
