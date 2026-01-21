import React from "react";
import "../../styles/home/whereweoperate.css";
import areaImg1 from "../../assets/coventry-f6acc2bd 2.png";
import areaImg2 from "../../assets/image 1.png";
const Whereweoperate = () => {
  return (
    <div className="whereweoperate">
      <h2>Where we Operate</h2>
      <p className="operationp">Coventry Supported Living Services</p>
      {/* Area 1 */}
      <div className="operationArea">
        <div className="areainfo">
          <p>
            ProVision Support Services CIC provides supported living and
            person-centred care services across Coventry City. We work closely
            with individuals, families, and local partners to deliver safe,
            inclusive, and high-quality support that meets individual needs.
          </p>
          <ul>
            <li>Person-centred care</li>
            <li>Local partnerships</li>
            <li>Safe & inclusive</li>
            <li>High-quality practice</li>
          </ul>
          <div className="operationbuttons">
            <a href="">
              <button>Get Support</button>
            </a>
            <a href="">
              <button className="referbtn">Refer Someones</button>
            </a>
          </div>
        </div>
        <div className="areaimg">
          <img src={areaImg1} alt="" />
        </div>
      </div>

      <h4 className="referalText">
        Refer someone who needs support — we’ll take it from here
      </h4>
      <p className="referalTextp">ProVision Support Services CIC</p>

      {/* Area 2 */}
      <div className="operationArea">
        <div className="areaimg">
          <img src={areaImg2} alt="" />
        </div>
        <div className="areainfo">
          <p>
            ProVision Support Services CIC provides supported living and
            person-centred care services across Coventry City. We work closely
            with individuals, families, and local partners to deliver safe,
            inclusive, and high-quality support that meets individual needs.
          </p>

          <ul>
            <li>Person-centred care</li>

            <li>Local partnerships</li>

            <li>Safe & inclusive</li>

            <li>High-quality practice</li>
          </ul>

          <div className="operationbuttons">
            <a href="">
              <button>Get Support</button>
            </a>

            <a href="">
              <button className="referbtn">Refer Someones</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whereweoperate;
