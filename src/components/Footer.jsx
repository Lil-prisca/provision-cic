import React from "react";
import companylogo from "../assets/primary-logo-83b9e819 1.png";
import "../styles/Footer.css";
import linkedin from "../assets/mdi_linkedin.png";
import twitter from "../assets/prime_twitter.png";
import instagram from "../assets/mdi_instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="companyinfo">
        <h2>ProVison CIC</h2>
        <p>
          Our core ethos centers on the well-being of individuals. This is
          evident in our dedication to providing safe, high-quality homes and
          supporting people in their journey toward greater independence.
        </p>
        <img src={companylogo} alt="" />
      </div>
      <hr />

      <div className="joinnewsletter">
        <h2>Join Our Newsletter</h2>

        <div className="subscribe">
          <input type="text" placeholder="Your Email" />
          <button>Suscribe</button>
        </div>
        <div className="socials">
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
