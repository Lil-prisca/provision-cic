import React from "react";
import Button from "../../components/Button";
import "../../styles/home/Whatwedo.css";
import frame11 from "../../assets/Frame 11.png";
import frame12 from "../../assets/Frame 11 (1).png";
import frame13 from "../../assets/Frame 11 (3).png";

const Whatwedo = () => {
  return (
    <div className="whatwedo">
      <h2>What We Do</h2>
      <p>Provision CIC Servives</p>
      <div className="services">
        <div className="service one ">
          <div className="img1">
            <img src={frame11} alt="" />
          </div>
          <p className="title">Our Accommodation</p>
          <p className="text">
            We provide outstanding guest experiences by offering well-maintained
            properties, attentive customer service, and local recommendations.
          </p>
          <div className="btncomp">
            {" "}
            <Button text="Learn More" />{" "}
          </div>
        </div>

        {/* 2 */}
        <div className="service two ">
          <div className="img1">
            <img src={frame12} alt="" />
          </div>
          <p className="title">Support Service</p>
          <p className="text">
            We specialise in helping individuals maintain their tenancy and
            prepare for self-sufficient living. Our mission is to provide
            inclusive and supported living experiences tailored to the unique
            needs and preferences of our clients.
          </p>
          <div className="btncomp">
            {" "}
            <Button text="Learn More" />{" "}
          </div>
        </div>

        {/* 3 */}
        <div className="service three">
          <div className="img1">
            <img src={frame13} alt="" />
          </div>
          <p className="title">Communities</p>
          <p className="text">
            Our community development is guided by integrity, transparency, and
            a strong commitment to the well-being of the people we serve. We
            focus on creating positive, lasting change that improves lives and
            strengthens the overall growth and vitality of the community.
          </p>

          <div className="btncomp">
            {" "}
            <Button text="Learn More" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
