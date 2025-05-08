import React, { useState } from "react";
 // Ensure this imports your CSS

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className="tooltiptext">{text}</div> // Only show when visible
      )}
    </div>
  );
};

export default Tooltip;
