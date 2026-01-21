import React from "react";
import "../styles/Button.css";
const Button = (props) => {
  return (
    <div className="btncomponent" style={{ position: "relative" }}>
      <div className="firstlayer">{props.text}</div>
      <div className="secondlayer"></div>{" "}
    </div>
  );
};

export default Button;
