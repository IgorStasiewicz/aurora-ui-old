import React from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.JPEG";
import img5 from "../../assets/5.jpeg";
import "react-awesome-slider/dist/styles.css";

import { StyledSlider } from "./StyledSlider";

const Slider = () => {
  return (
    <>
      <StyledSlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        mobileTouch={true}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
        <div data-src={img5} />
      </StyledSlider>
    </>
  );
};

export default Slider;
