import React, { useState, UseEffect } from "react";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import WelcometoProvision from "../../pages/Home/welcometoProvision";
import Whatarewe from "../../pages/Home/Whatarewe";
import Whatwedo from "../../pages/Home/Whatwedo";
import Whereweoperate from "../../pages/Home/Whereweoperate";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../pages/Home/WhyChooseUs";
import LatestEvents from "../../pages/Home/LatestEvent";
import { useEffect } from "react";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 768);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {/* {isMobile ? <SideBar /> : */}
       <Header />
      <WelcometoProvision />
      <Whatarewe />
      <Whatwedo />
      <Whereweoperate />
      <WhyChooseUs />
      <LatestEvents />
      <Footer />
    </div>
  );
};

export default Home;
