import React from "react";
import PrimaryLogo from "../assets/primary-logo-83b9e819 1.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={PrimaryLogo} alt="" />
        </div>
        <div className="items">
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Accommodation</a>
          </div>
          <div>
            <a href="">Support</a>
          </div>
          <div>
            <a href="">Events</a>
          </div>
          <div>
            {" "}
            <a href="">Communities</a>
          </div>
          <div>
            <a href="">Referrals</a>
          </div>
        </div>
        <div className="contact">
          <a href="">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
