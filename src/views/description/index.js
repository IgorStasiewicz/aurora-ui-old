import React from "react";
import Navbar from "../../components/navigations/navbar";
import img1 from "../../assets/IMG_0063.jpg";
import { StyledDescImgWrapper, StyledWrapper } from "./StyledDesc";
import { useSelector } from "react-redux";
import { descData, descTitle } from "./desc-data";

const Description = () => {
  const currentLang = useSelector((state) => state.currentLang);
  console.log(currentLang)
  return (
    <>
      <Navbar />

      <div>
        <StyledDescImgWrapper>
          <img src={img1} className="image" alt="Hero" />
          <h1>{descTitle[`${currentLang}DescData`].title}</h1>
        </StyledDescImgWrapper>

        <StyledWrapper>
          <div>
            <p>{descData[`${currentLang}DescData`][0].about.one}</p>
            <p>{descData[`${currentLang}DescData`][0].about.two}</p>
            <p>{descData[`${currentLang}DescData`][0].about.tree}</p>
            <p className="bottom-p">
              {descData[`${currentLang}DescData`][0].about.four}
            </p>
            <div className="list">
              <h2>{descData[`${currentLang}DescData`][0].offer.title}</h2>
              <ul>
                <li>{descData[`${currentLang}DescData`][0].offer.one}</li>
                <li>{descData[`${currentLang}DescData`][0].offer.two}</li>
                <li>{descData[`${currentLang}DescData`][0].offer.tree}</li>
                <li>{descData[`${currentLang}DescData`][0].offer.four}</li>
                <li>{descData[`${currentLang}DescData`][0].offer.five}</li>
                <li>{descData[`${currentLang}DescData`][0].offer.six}</li>
              </ul>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </>
  );
};

export default Description;
