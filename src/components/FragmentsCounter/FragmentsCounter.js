import React from "react";
import "./FragmentsCounter.css";

import Counter from "../../generalComponents/Counter/Counter.js";

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
  );
}

export default FragmentsCounter;
