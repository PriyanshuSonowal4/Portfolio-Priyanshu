import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Skills from "./Skills";
import Education from "./Education";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Skills />
      <Education />
    </>
  );
};

export default Home;
