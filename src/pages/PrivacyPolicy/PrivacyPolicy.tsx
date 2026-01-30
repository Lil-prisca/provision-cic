import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Policies from "./Policies";
import PrivacyPolicyHero from "./PrivacyPolicyHero";
import JoinProvision from "../Accomodation/JoinProvision";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <PrivacyPolicyHero />
      <Policies />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
