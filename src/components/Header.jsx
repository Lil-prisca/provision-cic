import React from "react";
import { NavLink, Link } from "react-router-dom";
import PrimaryLogo from "../assets/primary-logo-83b9e819 1.png";
import hamVector from "../assets/Vector.png";
import "../styles/header.css";

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        {/* logo */}
        <div className="logo">
          <Link to="/">
            <img src={PrimaryLogo} alt="" />
          </Link>
        </div>

        {/* items */}
        <div className="items">
          <div>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </div>
          <div>
            <NavLink to="/accomodation" className="nav-link">
              Accommodation
            </NavLink>
          </div>
          <div>
            <NavLink to="/support" className="nav-link">
              Support
            </NavLink>
          </div>
          <div>
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
          </div>
          <div>
            <NavLink to="/referals" className="nav-link">
              Referrals
            </NavLink>
          </div>
        </div>
        {/* contact */}
        <div className="contact">
          <Link to="">Contact</Link>
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
