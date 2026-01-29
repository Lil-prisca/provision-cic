import React from "react";
import Header from "../../components/Header";
import SupportHero from "./SupportHero";
import SupportList from "./SupportList";
import Footer from "../../components/Footer";
import JoinProvisionSuport from "./JoinProvisionSuport";

const Support = () => {
  return (
    <div>
      <Header />
      <SupportHero />
      <SupportList />
      <JoinProvisionSuport />
      <Footer />
    </div>
  );
};

export default Support;
