import React from "react";
import Header from "../components/header/index";
import Hero from "../components/hero/index";
import Notification from "../components/notification/index";

const Home = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
