import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinProvision from "../Accomodation/JoinProvision";
import EventHero from "./EventHero";
import EventItems from "./EventItems";

const Event = () => {
  return (
    <div>
      <Header />
      <EventHero />
      <EventItems />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Event;
