import React from "react";
import Header from "../../components/Header";
import AboutHero from "./AboutHero";
import LatestEvent from "../Home/LatestEvent";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />

      <LatestEvent />
      <Footer />
    </>
  );
};

export default About;
