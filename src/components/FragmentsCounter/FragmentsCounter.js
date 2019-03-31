import React from "react";
import "./FragmentsCounter.css";

import Counter from "../../generalComponents/Counter/Counter.js";

function FragmentsCounter({ count, setCount }) {
  return (
    <div className="fragments-counter counter">
      <p className="fragments-count button" count={count}>
        <Counter
          count={count}
          setCount={setCount}
          incrementValue={-1}
          text={"-"}
          className="decrement"
        />
        {`Key Fragments: ${count}`}
        <Counter
          count={count}
          setCount={setCount}
          incrementValue={1}
          text={"+"}
          className="increment"
        />
      </p>
    </div>
  );
}

export default FragmentsCounter;
