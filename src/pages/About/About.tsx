import React from "react";
import Header from "../../components/Header";
import AboutHero from "./AboutHero";
import OurObjeective from "./OurObjeective";
import LatestEvent from "../Home/LatestEvent";
import Footer from "../../components/Footer";
import OurMission from "./OurMission";
import OurCoreValues from "./OurCoreValues";

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <OurCoreValues />
      <OurMission />
      <OurObjeective />
      <LatestEvent />
      <Footer />
    </>
  );
};

export default About;
