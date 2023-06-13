import React from "react";
import Navbar from "../../components/navigations/navbar";
import Slider from "../../components/slider";
import DiscoveryList from "./DiscoveryList";

const Home = () => {
  return (
    <>
      <Navbar isHomeRendered={true} />
      <div style={{ height: "100vh" }}>
        <Slider />
      </div>
      <DiscoveryList />
    </>
  );
};

export default Home;
