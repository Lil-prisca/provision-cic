import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import WelcometoProvision from "../../pages/Home/welcometoProvision";
import Whatarewe from "../../pages/Home/Whatarewe";
import Whatwedo from "../../pages/Home/Whatwedo";
import Whereweoperate from "../../pages/Home/Whereweoperate";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../pages/Home/WhyChooseUs";
import LatestEvents from "../../pages/Home/LatestEvent";
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
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
