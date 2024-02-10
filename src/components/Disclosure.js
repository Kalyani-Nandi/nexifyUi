import React, { useState } from "react";
import "../css/index.css";

export const Disclosure = ({ title, children, className, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-disclosure ${className}`}>
      <button
        className={`disclosure-button ${className}`}
        onClick={toggleDisclosure}
      >
        <span>{title}</span>
        <span className={`icon ${isOpen ? "icon-rotate" : ""}`}>
          {icon ? (
            icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className={`disclosure-content ${className}`}>{children}</div>
      )}
    </div>
  );
};
