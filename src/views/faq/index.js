import React from "react";
import Navbar from "../../components/navigations/navbar";
import { useSelector } from "react-redux";
import { faqPageData, faqTitle } from "./faqData";
import { StyledWrapper, ContentWrapper } from "./StyledFaq";

const Faq = () => {
  const currentLang = useSelector((state) => state.currentLang);

  return (
    <>
      <Navbar />
      <StyledWrapper>
        <ContentWrapper>
          <h1>{faqTitle[`${currentLang}faqData`]}</h1>
          <div>
            {faqPageData[`${currentLang}faqData`].map((item) => (
              <div key={item.title} className="item-wrapper">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default Faq;
