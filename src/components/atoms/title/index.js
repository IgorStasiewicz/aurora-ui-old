import React from "react";
import styled from "styled-components";
import { titleAnimation } from "../../../global-styles/animations";

const StyledTitle = styled.h1`
  text-align: center;
  color: black;
  font-size: 24px;
  opacity: 0;
  position: relative;
  animation: ${titleAnimation} 0.1s ease forwards;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  font-weight: 400;
  @media (max-width: 430px) {
    font-size: 40px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const Title = ({ children, styleType }) => {
  return <StyledTitle styleType={styleType}>{children}</StyledTitle>;
};

export default Title;
