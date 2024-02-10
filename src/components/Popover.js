// src/components/Popover.js
import React from "react";
import styled from "@emotion/styled";
import "../css/index.css";

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const PopoverContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-radius: 5px;
  z-index: 1000;
`;

export const Popover = ({ isOpen, content, children }) => {
  return (
    <PopoverWrapper>
      <PopoverButton>{children}</PopoverButton>
      <PopoverContent isOpen={isOpen}>{content}</PopoverContent>
    </PopoverWrapper>
  );
};
