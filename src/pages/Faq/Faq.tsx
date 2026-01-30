import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinProvision from "../Accomodation/JoinProvision";
import Faqs from "./Faqs";
import FaqHero from "./FaqHero";

const Faq = () => {
  return (
    <div>
      <Header />
      <FaqHero></FaqHero>
      <Faqs />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Faq;
