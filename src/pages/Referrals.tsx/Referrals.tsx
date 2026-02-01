import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReferralHero from "./ReferralHero";
import ReferralsForm from "./ReferralsForm";
import JoinProvision from "../Accomodation/JoinProvision";

const Referrals = () => {
  return (
    <div>
      <Header />
      <ReferralHero />
      <ReferralsForm />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Referrals;
