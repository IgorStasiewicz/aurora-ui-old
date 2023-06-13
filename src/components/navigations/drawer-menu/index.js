import React from "react";
import { routes } from "../../../helpers/routes";
import { StyledDrawerMenu, StyledLink } from "./StyledDrawerMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectLang } from "../../../redux/actions";
import ReactFlagsSelect from "react-flags-select";
import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  @media (max-width: 500px) {
    /* display: none; */
  }

  margin-bottom: 20px;

  li {
    color: black !important;
  }
  .white-select {
    li {
      color: black !important;
    }

    button {
      border-color: white !important;
      color: white !important;
      &:after {
        /* border-top: 0 !important;
        border-left: 5px solid transparent !important;
        border-right: 5px solid transparent !important;
        border-bottom: 5px solid white !important; */
      }
      span {
        color: white !important;

        &:after {
          color: white !important;
        }
      }
    }
  }

  .black-select {
    border-color: black;
  }
`;

const DrawerMenu = ({ isOpen, toggleMenuOpen }) => {
  const currentLang = useSelector((state) => state.currentLang);

  const dispatch = useDispatch();

  return (
    <StyledDrawerMenu isOpen={isOpen}>
      <SelectWrapper>
        <ReactFlagsSelect
          countries={["GB", "PL", "NO", "UA", "IT"]}
          customLabels={{
            PL: "Polski",
            GB: "English",
            NO: "Norsk",
            UA: "Yкраїнський",
            IT: "Italiano",
          }}
          placeholder="Select Language"
          selected={currentLang}
          className={"black-select"}
          onSelect={(value) => dispatch(selectLang(value))}
        />
      </SelectWrapper>
      <StyledLink to={routes.home} onClick={toggleMenuOpen}>
        Home
      </StyledLink>
      <StyledLink to={routes.bookTravel} onClick={toggleMenuOpen}>
        Book Travel
      </StyledLink>
      <StyledLink to={routes.gallery} onClick={toggleMenuOpen}>
        Photos
      </StyledLink>
    </StyledDrawerMenu>
  );
};

export default DrawerMenu;
