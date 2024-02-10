import React from "react";
import "../css/index.css";

export const Tooltip = ({ text, children, className, position }) => {
  return (
    <div className="tooltip">
      {children && (
        <div>
          {children}
          <span className={`tooltip-text ${className} ${position}`}>
            {text}
          </span>
        </div>
      )}
    </div>
  );
};
