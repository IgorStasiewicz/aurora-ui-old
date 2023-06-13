import React from "react";
import Router from "../router/Router";
import GlobalStylesTemplate from "../templates/GlobalStyleTemplate";

const Root = () => {
  return (
    <GlobalStylesTemplate>
      <Router />
    </GlobalStylesTemplate>
  );
};

export default Root;
