import React from "react";
const contactCards = [
  {
    icon: "📧",
    text: (
      <>
        info@provisionsupportservices.co.uk
        <br />
        referrals@provisionsupportservices.co.uk
      </>
    ),
  },
  {
    icon: "📞",
    text: (
      <>
        +44 7581 487408
        <br />
        +44 7829 887031
      </>
    ),
  },
  {
    icon: "⏰",
    text: (
      <>
        Mon – Fri – 8:00am – 5:30pm
        <br />
        Sat – Sun – By appointment
      </>
    ),
  },
  {
    icon: "📍",
    text: (
      <>
        32 Heathville Road, B28 9QF
        <br />
        Birmingham
      </>
    ),
  },
];

const ContactInfo = () => {
  return (
    <div className="max-w-full !mt-[40px] !m-auto !px-4">
      <div className="grid grid-cols-4 md:grid-cols-4 gap-[10px]">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="
          bg-[#F5F5F5]
          rounded-[14px]
          border
          border-[#D6D6D6]
          !p-[20px]
          flex
          flex-col
          items-center
          text-center
          gap-[12px]
          relative"
          >
            {/* Icon */}
            <div className="w-[44px] h-[44px] rounded-full  flex items-center justify-center text-[20px]">
              {card.icon}
            </div>

            {/* Text */}
            <p className="text-[10px] leading-[18px] text-[#333]">
              {card.text}
            </p>

            {/* Arrow */}
            <span className="absolute top-[14px] right-[14px] text-[14px]">
              ↗
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
