import React from "react";
import Header from "../../components/Header";
import SupportHero from "./SupportHero";
import SupportList from "./SupportList";
import Footer from "../../components/Footer";
import JoinProvisionSuport from "./JoinProvisionSuport";
import SupportCommunities from "./SupportCommunities";

const Support = () => {
  return (
    <div>
      <Header />
      <SupportHero />
      <SupportList />
      <SupportCommunities />
      <JoinProvisionSuport />
      <Footer />
    </div>
  );
};

export default Support;
