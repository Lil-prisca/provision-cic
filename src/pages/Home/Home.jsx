import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import WelcometoProvision from "../../pages/Home/welcometoProvision";
import Whatarewe from "../../pages/Home/Whatarewe";
import Whatwedo from "../../pages/Home/Whatwedo";
import Whereweoperate from "../../pages/Home/Whereweoperate";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
      <WelcometoProvision />
      <Whatarewe />
      <Whatwedo />
      <Whereweoperate />
      <Footer />
    </div>
  );
};

export default Home;
