import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinProvision from "../Accomodation/JoinProvision";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <JoinProvision />
      <Footer />
    </div>
  );
};

export default Contact;
