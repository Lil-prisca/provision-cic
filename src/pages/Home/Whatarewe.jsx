import React from "react";
import user002 from "../../assets/Mask group.png";
import "../../styles/home/Whatarewe.css";

const Whatarewe = () => {
  return (
    <div className="whatarewe">
      <h2>Who Are We</h2>
      <p>Provision Support Services</p>
      <div className="support-service">
        <div className="oursupport">
          <p>
            At ProVision Support Services CIC, we are more than just a service
            provider; we are champions of inclusive and supported living
            experiences. Our mission is to empower individuals by connecting
            them with distinctive accommodations tailored to their unique needs
            and preferences.
          </p>
          <p>
            {" "}
            With unwavering dedication, we unlock the full potential of property
            investments for owners, while fostering a profound sense of
            belonging, sustainability, and accessibility in every stay, no
            matter who you are, what your needs are, or how long you'll be
            staying.
          </p>
          <a href="">
            <button>Discover More</button>
          </a>
        </div>
        <div className="serviceImg">
          <img src={user002} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whatarewe;
