import React from "react";
import Navbar from "../../components/navigations/navbar";
import { useSelector } from "react-redux";
import { aboutUsPageData, aboutUsTitle } from "./aboutUsData";
import { StyledWrapper, ContentWrapper } from "./StyledAbout";

const AboutUs = () => {
  const currentLang = useSelector((state) => state.currentLang);

  return (
    <>
      <Navbar />
      <StyledWrapper>
        <ContentWrapper>
          <h1>{aboutUsTitle[`${currentLang}aboutData`]}</h1>
          <ul>
            {aboutUsPageData[`${currentLang}AboutUsData`].map((item) => (
              <li className="item-wrapper">
                <h3>{item.title}</h3>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default AboutUs;
