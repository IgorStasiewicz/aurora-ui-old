import React from "react";
import Navbar from "../../components/navigations/navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jobs } from "./jobs";
import { ListWrapper, ListItem, Wrapper, StyledH1 } from "./StyledJob";

const Job = () => {
  const currentLang = useSelector((state) => state.currentLang);

  return (
    <>
      <Navbar />
      <>
        <StyledH1>Oferty pracy</StyledH1>
        <ListWrapper>
          {jobs.map((el) => {
            return (
              <Wrapper>
                <Link to={`/job/${el.title}`}>
                  <ListItem img={el.img}>
                    <div className="background-img" />
                  </ListItem>
                </Link>
                <h3 className="date">{el.title}</h3>
              </Wrapper>
            );
          })}
        </ListWrapper>
      </>
    </>
  );
};

export default Job;
