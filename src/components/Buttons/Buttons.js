import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";
import styled from "styled-components";
const ButtonStyle = styled.button`
  background-color: rgb(254, 186, 23);
  font-size: 18px;
  color: #fff;
  font-family: bold;
  padding: 5px 6px;
  border: 0 !important;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;
const CloseStyle = styled.button`
  font-size: 15px;
  border: 0 !important;
  color: #000;
  background: none;
`;
const Buttons = ({ label, onClick, fullWidth }) => {
  return (
    <>
      <ButtonStyle onClick={onClick} fullWidth={fullWidth}>
        {label}
      </ButtonStyle>
    </>
  );
};
const Close = ({ label, onClick }) => {
  return (
    <>
      <CloseStyle onClick={onClick}>{label}</CloseStyle>
    </>
  );
};

const ButtonView = ({ label, onClick, className }) => {
  return (
    <div>
      <Button onClick={onClick} className={className}>
        {label}
      </Button>
    </div>
  );
};

export { Buttons, Close, ButtonView };
