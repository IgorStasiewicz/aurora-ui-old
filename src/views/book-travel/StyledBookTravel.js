import styled from "styled-components";
import { Form, Field } from "formik";
import { show } from "../../global-styles/animations";

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-evenly;
  width: 82vw;
  margin: 0 auto;

  .catering-btn {
    padding: 1px 6px;
    border: 1px solid black;
    background: transparent;
    outline: none;

    :hover {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
    }
  }
`;

export const DatePickerWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 100vw;
  }

  .MuiPickersToolbar-penIconButton,
  .MuiButton-text {
    display: none !important;
  }

  .Mui-selected {
    background-color: #6ae6b2 !important;
  }

  button {
    font-size: 12px !important;
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledFormElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: ${({ small }) => (small ? "100px" : "300px")};
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

export const StyledInput = styled.input`
  width: ${({ small }) => (small ? "100px" : "300px")};
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
export const StyledCheckboxWrapper = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
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

export const StyledNormalCheckbox = styled.input`
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
  margin-right: 20px;
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
  align-items: center;
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

  ${StyledNormalCheckbox}:checked + ${StyledCheckboxLabel}:before {
    background-color: black;
  }
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 140px;

  ${({ theme }) => theme.mq.tablet} {
    width: 80vw;
    margin-left: 0px;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 66vw;
  margin: 0 auto;

  span {
    color: black !important;
  }
`;

export const SecondColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    width: 80vw;
  }

  .img-price {
    font-size: 10px;
  }

  .total-wrapper {
    margin-top: 50px;
    align-self: flex-end;
    p {
      margin: 10px 0;
      font-size: 16px;
    }

    .total {
      font-size: 20px;
    }
  }
`;
