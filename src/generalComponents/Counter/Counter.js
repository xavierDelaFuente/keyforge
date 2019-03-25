import React from "react";
import "./Counter.css";

function Counter({ count, setCount, incrementValue, text, className }) {
  const increment = (count, value = 1) => setCount(count + value);

  return (
    <button className={`${className} button`} onClick={() => increment(count, incrementValue)}>
      {text}
    </button>
  );
}

export default Counter;
