import React from "react";
import Hero from "./Home/Hero";
import Client from "./Home/Client";
import Unlock from "./Body/Unlock";
import Achievements from "./Body/Achievements";
import Calender from "./Body/Calender";
import Customers from "./Body/Customers";

const Nexcent = () => {
  return (
    <>
      <Hero />
      <Client/>
      <Unlock/>
      <Achievements/>
      <Calender/>
      <Customers/>
    </>
  );
};

export default Nexcent