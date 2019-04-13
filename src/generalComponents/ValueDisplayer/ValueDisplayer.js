import React from "react";
import "./ValueDisplayer.css";

function ValueDisplayer({ title, value }) {
  return (
    <svg height="4em" width="4em">
      <circle cx="2em" cy="2em" r="2em" fill="darkseagreen" />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        fill="white"
        font-size=".6em"
        dy=".3em"
      >
        {title}
      </text>
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        fill="#282c34"
        font-size="2em"
        dy=".3em"
      >
        {value}
      </text>
    </svg>
  );
}

export default ValueDisplayer;
