import React from "react";
import supportworker from "../../assets/support-worker-1-f0f32ffb 1 (8).png";

const ContactHero = () => {
  return (
    <div className="relative w-full h-[150px] !mt-[10vh] md:!h-[40vh]  md:!mt-[12vh]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={supportworker}
        alt=""
      />
      <div className="absolute inset-0 bg-[#000000]/60 "></div>
      <div className="relative  z-1 flex  items-center justify-center h-full px-4">
        <div className=" max-w-[370px]  md:max-w-[1000px] text-white text-center ">
          <h2 className=" font-Mogra  text-[21px] !mb-[5px] md:text-[60px]">
            {" "}
            Get In Touch
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
