import styled from "styled-components";
import formImage from "../../assets/IMG_0063.jpg";
import { Form, Field } from "formik";
import { show } from "../../global-styles/animations";

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
  margin-top: 170px;
`;

export const StyledContactImage = styled.div`
  width: 100%;
  height: calc(50vh - 210px);
  background-image: url(${formImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const StyledForm = styled(Form)`
  width: 50%;
  min-width: 728px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;
export const StyledFormElementsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: ${({ first }) => (first ? "space-between" : "none")};
  flex-direction: ${({ second }) => (second ? "column" : "none")};
  margin-top: ${({ first }) => (first ? "50px" : "")};
  margin-bottom: 10px;
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const StyledFormElements = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  width: ${({ first }) => (first ? "45%" : "")};
  @media (max-width: 430px) {
    width: ${({ first }) => (first ? "100%" : "")};
  }
`;

export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
  color: black;
`;
export const StyledSpan = styled.span`
  content: "";
  position: absolute;
  height: 1.5px;
  background-color: black;
  transition: all 0.5s linear;
  width: 0;
  bottom: ${({ textarea }) => (textarea ? "33%" : "45%")};
`;

export const StyledField = styled(Field)`
  border: none;
  border-bottom: 1.5px solid gray;
  outline: none;
  padding: 8px 0;
  resize: none;
  background-color: transparent;
  &::-webkit-input-placeholder {
    color: grey;
    font-size: 12px;
  }
  &:focus ~ {
    ${StyledSpan} {
      width: 100%;
      transition: 0.4s;
    }
  }
`;

export const StyledError = styled.div`
  color: crimson;
  height: 10px;
  font-size: 12px;
  margin-top: ${({ checkbox }) => (checkbox ? "5px" : "10px")};
  margin-bottom: ${({ message, checkbox }) =>
    message || checkbox ? "15px" : "25px"};
`;
export const StyledContactElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 40px; */
`;

export const StyledCheckboxWrapper = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const StyledCheckbox = styled(Field)`
  height: initial;
  width: initial;
  display: none;

  cursor: pointer;

  ::placeholder {
    font-size: 5px;
  }
`;

export const StyledCheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  text-align: center;
  color: black;
  font-size: 14px;
  :before {
    content: "";
    -webkit-appearance: none;
    background-color: white;
    border: 1.5px solid black;
    padding: 5px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin: 0 7px 3px 0;
    border-radius: 2px;
    transition: 1s all ease;
  }
`;

export const StyledCheckboxElements = styled.div`
  display: flex;
  justify-content: center;
  /* ${StyledCheckbox}:checked + ${StyledCheckboxLabel}:after {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    left: 2.3%;
    width: 3px;
    height: 7px;
    border: solid blue;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  } */
  ${StyledCheckbox}:checked + ${StyledCheckboxLabel}:before {
    background-color: black;
  }
`;

export const LoadingSpinnerSvg = styled.svg`
  position: absolute;
  top: -35%;
  left: 30%;
  width: 70px;
  stroke: black;
`;

export const ShapeSvg = styled.svg`
  height: 40px;
  width: 150px;
`;

export const ShapeRectSvg = styled.rect`
  height: 40px;
  width: 150px;
  stroke-width: 2px;
  fill: transparent;
  stroke: black;
  stroke-dashoffset: -220;
  transition: 1s all ease;
`;
export const TextSvg = styled.p`
  margin-top: -30px;
  text-align: center;
  color: black;
  text-transform: uppercase;
  transition: 1s all ease;
`;

export const ArrowSvg = styled.svg`
  width: 11px;
  position: absolute;
  left: 70%;
  bottom: 20%;
  fill: black;
  transition: 1s all ease;
`;

export const ButtonSvg = styled.button`
  width: 150px;
  height: 40px;
  position: relative;
  outline: none;
  border: none;
  background-color: transparent;
  &:active {
    ${TextSvg} {
      color: lightblue;
    }
    ${ArrowSvg} {
      fill: lightblue;
    }
    ${ShapeRectSvg} {
      fill: black;
    }
  }
  &:hover {
    ${ShapeRectSvg} {
      stroke-dasharray: 50 0;
      stroke-width: 2px;
      stroke-dashoffset: 0;
    }
  }
  &:focus {
    ${ShapeRectSvg} {
      stroke-dasharray: 50 0;
      stroke-width: 2px;
      stroke-dashoffset: 0;
    }
  }
`;
