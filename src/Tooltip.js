import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ position, text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

//get tooltip style by position
  const getTooltipStyle = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translateY(-50%)" };
      default:
        return {};
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`tooltip tooltip-${position}`}
          style={getTooltipStyle()}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
