import React from "react";
import PrimaryLogo from "../assets/primary-logo-83b9e819 1.png";
import hamVector from "../assets/Vector.png";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="side">
      <div className="logo">
        <img src={PrimaryLogo} alt="" />
      </div>
      <div className="ham">
        <img src={hamVector} alt="" />
      </div>
    </div>
  );
};

export default SideBar;
