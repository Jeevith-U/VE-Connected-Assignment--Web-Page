import React from "react";
import Hero from "./Home/Hero";
import Client from "./Home/Client";
import Unlock from "./Body/Unlock";
import Achievements from "./Body/Achievements";
import Calender from "./Body/Calender";
import Customers from "./Body/Customers";
import Community from "./Body/Community";
import Footer from "./Footer/footer";

const Nexcent = () => {
  return (
    <>
      <Hero />
      <Client/>
      <Unlock/>
      <Achievements/>
      <Calender/>
      <Customers/>
      <Community/>
      <Footer/>
    </>
  );
};

export default Nexcent