import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../../atoms/Button";
import Logo from "../../atoms/logo";
import NavigationLink from "../../atoms/navigation-link";
import Hamburger from "../../atoms/hamburger";
import DrawerMenu from "../drawer-menu";
import {
  StyledNavbar,
  StyledNavButtons,
  StyledNavListItem,
  StyledNavList,
  SelectWrapper,
} from "./StyledNavbar";
import { routes } from "../../../helpers/routes";
import useScrollEvent from "../../../hooks/useScrollEvent";
import ReactFlagsSelect from "react-flags-select";
import { useDispatch, useSelector } from "react-redux";
import { selectLang } from "../../../redux/actions";
import { navData } from "./navbarData";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ isHomeRendered }) => {
  const scrollEvent = useScrollEvent();

  const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });

  const [whiteColor, setWhiteColor] = useState(true);
  const [small, setSmall] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = useSelector((state) => state.currentLang);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setHidden(false), 100);
  }, []);

  useEffect(() => {
    const scrollPosition = document.scrollingElement.scrollTop;

    if (scrollPosition === 0 && isHomeRendered) {
      setWhiteColor(true);
      setSmall(false);
    } else if (scrollPosition === 0 && !isHomeRendered) {
      setWhiteColor(false);
      setSmall(false);
    } else {
      setWhiteColor(false);
      setSmall(true);
    }
  }, [scrollEvent, isHomeRendered]);

  const renderNavList = () => (
    <StyledNavList white={whiteColor}>
      {navData.map(
        (item) =>
          item.lang === currentLang && (
            <>
              {item.data.map((el, i) => (
                <StyledNavListItem key={el.lang}>
                  <NavigationLink
                    size="s"
                    to={
                      i === 0
                        ? routes.home
                        : i === 1
                        ? routes.bookTravel
                        : i === 2
                        ? routes.gallery
                        : routes.home
                    }
                  >
                    {el}
                  </NavigationLink>
                </StyledNavListItem>
              ))}
            </>
          )
      )}
    </StyledNavList>
  );

  const renderNavBar = () => (
    <StyledNavbar small={small} transparent={whiteColor}>
      <Link to={routes.home}>
        <Logo whiteIcon={whiteColor} />
      </Link>

      {renderNavList()}
      {isBigScreen && (
        <SelectWrapper>
          <ReactFlagsSelect
            countries={["GB", "PL"]}
            customLabels={{
              PL: "Polski",
              GB: "English"
            }}
            placeholder="Select Language"
            selected={currentLang}
            className={whiteColor ? "white-select" : "black-select"}
            onSelect={(value) => dispatch(selectLang(value))}
          />
        </SelectWrapper>
      )}

      <StyledNavButtons>
        <Hamburger
          isOpen={isMenuOpen}
          onClickFn={() => setIsMenuOpen(!isMenuOpen)}
          whiteIcon={whiteColor}
        />
      </StyledNavButtons>

      <DrawerMenu
        isOpen={isMenuOpen}
        toggleMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
    </StyledNavbar>
  );

  return <> {!hidden && renderNavBar()} </>;
};

export default Navbar;
