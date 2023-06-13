import React from "react";
import { ListWrapper, ListItem } from "./StyledHome";
import { Link } from "react-router-dom";
import { discoveryPageData } from "./discoveryPageData";
import { useSelector } from "react-redux";
const DiscoveryList = () => {
  const currentLang = useSelector((state) => state.currentLang);
  return (
    <div>
      <ListWrapper>
        {discoveryPageData[`${currentLang}DiscoveryData`].map((item) => (
          <Link to={item.route}>
            <ListItem>
              <div className="background-img" />
              <div className="content">
                <h3>{item.title}</h3>
              </div>
            </ListItem>
          </Link>
        ))}
      </ListWrapper>
    </div>
  );
};

export default DiscoveryList;
