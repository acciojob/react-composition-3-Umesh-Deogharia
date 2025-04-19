import React from "react";
import { useState } from "react";
export default function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="maindiv" style={{ paddingTop: "20px" }}>
      <div
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
        className="tooltip"
      >
        {children}
        {showTooltip && <div className="tooltiptext" role="tooltip">{text}</div>}
      </div>

      <div className="forhr">
      </div>
    </div>
  );
}
