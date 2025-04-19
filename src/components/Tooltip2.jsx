import React from "react";
import { useState } from "react";

export default function Tooltip2({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="maindiv">
      <div
        className="tooltip"
        onMouseOver={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
      >
        {children}
        {showTooltip && <div className="tooltiptext">{text}</div>}
      </div>
      <div className="forhr"></div>
    </div>
  );
}