import React from "react";
import PrimaryLogo from "../assets/primary-logo-83b9e819 1.png";
import hamVector from "../assets/Vector.png";
import "../styles/header.css";

const Header = () => {
  return (
    <nav>
      <div className="navbar">

        {/* logo */}
        <div className="logo">
          <img src={PrimaryLogo} alt="" />
        </div>

        {/* items */}
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
        {/* contact */}
        <div className="contact">
          <a href="">Contact</a>
        </div>

        {/* hamburger */}
          <div className="ham">
    <img src={hamVector} alt="" />
  </div>
      </div>
    </nav>
  );
};

export default Header;
