import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PrimaryLogo from "../assets/primary-logo-83b9e819 1.png";
import hamVector from "../assets/Vector.png";
import "../styles/header.css";
import { p } from "framer-motion/client";

const Header = () => {
  const [openBar, setOpenBar] = useState("true");
  function openSideBar() {
    setOpenBar(!openBar);
  }
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
            <NavLink to="/referrals" className="nav-link">
              Referrals
            </NavLink>
          </div>
        </div>
        {/* contact */}
        <div className="contact">
          <Link to="/contact">Contact</Link>
        </div>

        {/* hamburger */}
        <div className="ham relative">
          <div
            onClick={openSideBar}
            className="w-[50px] h-[50px] !p-auto !px-auto  !py-auto  "
          >
            {openBar ? (
              <img className="!mx-auto !pt-[15px]" src={hamVector} alt="" />
            ) : (
              <p className="  !pt-[15px] !m-auto h-fit w-fit">x</p>
            )}
          </div>

          {/* sidebar */}
          {openBar ? (
            ""
          ) : (
            <div className=" absolute !mt-[40px] !ml-auto w-[200px] h-[500px] !p-[20px] rounded-[0px 0px_10px_0px] text-[20px] bg-[red] right-[-30px] top-[20px]">
              <div className=" ">
                <div>
                  <NavLink to="/about" className="!mb-[50px]  ">
                    {" "}
                    About{" "}
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/accomodation" className="">
                    Accommodation{" "}
                  </NavLink>{" "}
                </div>
                <div>
                  <NavLink to="/support" className="">
                    Support
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/events" className="">
                    Events
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/referrals" className="">
                    Referrals
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
