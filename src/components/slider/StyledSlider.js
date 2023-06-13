import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const StyledSlider = styled(AutoplaySlider)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  --slider-height-percentage: 48%;
  --slider-transition-duration: 770ms;
  --organic-arrow-thickness: 3px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 20px;
  --organic-arrow-color: lightGrey;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: transparent;
  --control-bullet-active-color: transparent;
  --loader-bar-color: transparent;
  --loader-bar-height: 3px;
`;
