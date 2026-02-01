import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EventDetailsInfo from "./EventDetailsInfo";

const EventDetails = () => {
  return (
    <div>
      <Header />
      <EventDetailsInfo />
      <Footer />
    </div>
  );
};

export default EventDetails;
