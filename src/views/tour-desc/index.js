import React from "react";
import Navbar from "../../components/navigations/navbar";
import img1 from "../../assets/1.jpg";
import { StyledJobImgWrapper, StyledWrapper } from "./StyledTourDesc";
import { useSelector } from "react-redux";
import { jobData, jobTitle } from "./tour-data";

const TourDescData = () => {
  const currentLang = useSelector((state) => state.currentLang);
  console.log(currentLang)
  return (
    <>
      <Navbar />

      <div>
        <StyledJobImgWrapper>
          <img src={img1} className="image" />
          <h1>{jobTitle[`${currentLang}JobData`].title}</h1>
        </StyledJobImgWrapper>

        <StyledWrapper>
          <div>
            <p>{jobData[`${currentLang}JobData`][0].about.one}</p>
            <p>{jobData[`${currentLang}JobData`][0].about.two}</p>
            <div className="list">
              <h2>{jobData[`${currentLang}JobData`][0].duties.title}</h2>
              <ul>
                <li>{jobData[`${currentLang}JobData`][0].duties.one}</li>
                <li>{jobData[`${currentLang}JobData`][0].duties.two}</li>
                <li>{jobData[`${currentLang}JobData`][0].duties.tree}</li>
                <li>{jobData[`${currentLang}JobData`][0].duties.four}</li>
                <li>{jobData[`${currentLang}JobData`][0].duties.five}</li>
                <li>{jobData[`${currentLang}JobData`][0].duties.six}</li>
              </ul>

              <p className="bottom-p">
                {jobData[`${currentLang}JobData`][0].about.two}
              </p>
            </div>
            <div className="list">
              <h2>{jobData[`${currentLang}JobData`][0].requirements.title}</h2>
              <ul>
                <li>{jobData[`${currentLang}JobData`][0].requirements.one}</li>
                <li> {jobData[`${currentLang}JobData`][0].requirements.two}</li>
                <li>{jobData[`${currentLang}JobData`][0].requirements.tree}</li>
                <li>{jobData[`${currentLang}JobData`][0].requirements.four}</li>
                <li>{jobData[`${currentLang}JobData`][0].requirements.five}</li>
                <li> {jobData[`${currentLang}JobData`][0].requirements.six}</li>
                <li>
                  {jobData[`${currentLang}JobData`][0].requirements.seven}
                </li>
              </ul>
            </div>
            <div className="list">
              <h2>{jobData[`${currentLang}JobData`][0].application.title}</h2>
              <h3>
                {jobData[`${currentLang}JobData`][0].application.subTitle}
              </h3>
              <ul>
                <li>{jobData[`${currentLang}JobData`][0].application.one}</li>
                <li> {jobData[`${currentLang}JobData`][0].application.two}</li>
                <li> {jobData[`${currentLang}JobData`][0].application.tree}</li>
                <li> {jobData[`${currentLang}JobData`][0].application.four}</li>
                <li> {jobData[`${currentLang}JobData`][0].application.five}</li>
                <li> {jobData[`${currentLang}JobData`][0].application.six}</li>
              </ul>

              <h3>{jobData[`${currentLang}JobData`][0].ending}</h3>
            </div>
          </div>

          <div className="second-column">
            <div className="item">
              <label>
                {jobData[`${currentLang}JobData`][0].secondColumn.firstTitle}
              </label>
              <h3>{jobData[`${currentLang}JobData`][0].secondColumn.one}</h3>
            </div>
            <div className="item">
              <label>
                {jobData[`${currentLang}JobData`][0].secondColumn.secondTitle}
              </label>
              <h3>{jobData[`${currentLang}JobData`][0].secondColumn.two}</h3>
            </div>
            <div className="item">
              <label>
                {jobData[`${currentLang}JobData`][0].secondColumn.thirdTitle}
              </label>
              <h3>{jobData[`${currentLang}JobData`][0].secondColumn.tree}</h3>
            </div>
            <div className="item">
              <label>
                {jobData[`${currentLang}JobData`][0].secondColumn.fourthTitle}
              </label>
              <h3>{jobData[`${currentLang}JobData`][0].secondColumn.four}</h3>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </>
  );
};

export default TourDescData;
