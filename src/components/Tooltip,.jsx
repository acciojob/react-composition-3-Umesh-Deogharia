import React from "react";
import { useState } from "react";
export default function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="maindiv" style={{ paddingTop: "20px" }}>
      <div
        onMouseOver={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
        className="tooltip"
      >
        {children}
        {showTooltip && <div className="tooltiptext">{text}</div>}
      </div>

      <div className="forhr">
        <h1>
          <div>
            
          </div>
        </h1>
      </div>
    </div>
  );
}
