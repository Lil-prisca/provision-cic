import React from "react";
import Header from "../../components/Header";
import AccomodationHero from "./AccomodationHero";
import OurAccomodation from "./OurAccomodation";
import AccomodationProvides from "./AccomodationProvides";
import JoinProvision from "./JoinProvision";
import Footer from "../../components/Footer";

const Accomodation = () => {
  return (
    <div>
      <Header />
      <AccomodationHero />
      <OurAccomodation />
      <AccomodationProvides />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Accomodation;
