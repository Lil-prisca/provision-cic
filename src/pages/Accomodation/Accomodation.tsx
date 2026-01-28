import React from "react";
import Header from "../../components/Header";
import AccomodationHero from "./AccomodationHero";
import OurAccomodation from "./OurAccomodation";
import AccomodationProvides from "./AccomodationProvides";

import JoinProvision from "./JoinProvision";

const Accomodation = () => {
  return (
    <div>
      <AccomodationHero />
      <OurAccomodation />
      {/* <AccomodationProvides /> */}
      <JoinProvision />
      <Header />
    </div>
  );
};

export default Accomodation;
