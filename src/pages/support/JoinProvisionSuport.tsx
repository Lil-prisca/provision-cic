import React from "react";

const JoinProvisionSuport = () => {
  return (
    <div className=" bg-[#FFEBDE] max-w-[400px] max-h-[113.73px] rounded-[9.75px] py-[40px]! m-auto! !mt-[30px]  md:max-w-[1231px] md:max-h-[350px]  ">
      <h2 className=" text-[11.37px] md:text-[35px] text-center">
        Join ProVision CIC Today!
      </h2>
      <div className="flex mt-[10px]! m-auto! max-w-[fit-content] gap-[10px] ">
        <a href="">
          <button
            className="  bg-[#FFFFFF]  rounded-[7px] border-[#D0D0D0] border-[0.32px] px-[13px]! py-[6.5px]! text-[#000000] text-[5.85px]  
          md:rounded-[50px] md:px-[20px]! md:py-[10px]! md:text-[18px]"
          >
            Get in touch
          </button>
        </a>
        <a href="">
          {" "}
          <button
            className="  bg-[#FD8282]  rounded-[7px] border-[#FE6D6D] border-[0.32px] px-[13px]! py-[6.5px]! text-[#FFFFFF] text-[5.85px]
          md:rounded-[50px] md:px-[20px]! md:py-[10px]! md:text-[18px]"
          >
            Make a referral
          </button>
        </a>
      </div>
    </div>
  );
};

export default JoinProvisionSuport;
