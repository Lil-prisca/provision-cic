import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TermsAndConditionHero from "../TermsAndCondition/TermsAndConditionHero";
import Terms from "./Terms";
import JoinProvision from "../Accomodation/JoinProvision";

const TermsAndCondition = () => {
  return (
    <div>
      <Header />
      <TermsAndConditionHero />
      <Terms />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
