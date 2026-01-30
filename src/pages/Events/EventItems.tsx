import React from "react";
import "../../styles/home/LatestEvent.css";
import Button from "../../components/Button";

const events = [
  {
    title: "2025 Christmas Celebration",
    text: "A joyful and memorable Christmas 2025 celebration filled with laughter, togetherness, and community spirit, as residents, staff, and supporters came together to mark the festive season.",
  },
  {
    title: "Amber Weather Warning — Important",
    text: " An amber weather warning has been issued for the West Midlands due to the potential impact of heavy snowfall, strong winds, and cold conditions between January 8 and January 12, 2026.",
  },
  {
    title: "Community Wellbeing Workshop",
    text: "Join us for a free Community Wellbeing Workshop designed to support individuals and families with practical resources, wellbeing tips, and local support information.",
  },

  {
    title: "2025 Christmas Celebration",
    text: "A joyful and memorable Christmas 2025celebration filled with laughter,togetherness, and community spirit, asresidents, staff, and supporters cametogether to mark the festive season.",
  },
  {
    title: "Amber Weather Warning — Important",
    text: " An amber weather warning has been issued for the West Midlands due to the potential impact of heavy snowfall, strong winds, and cold conditions between January 8 and January 12, 2026.",
  },
  {
    title: "Community Wellbeing Workshop",
    text: "Join us for a free Community Wellbeing Workshop designed to support individuals and families with practical resources, wellbeing tips, and local support information.",
  },
  {
    title: "2025 Christmas Celebration",
    text: "A joyful and memorable Christmas 2025 celebration filled with laughter, togetherness, and community spirit, as residents, staff, and supporters came together to mark the festive season.",
  },
  {
    title: "Amber Weather Warning — Important",
    text: " An amber weather warning has been issued for the West Midlands due to the potential impact of heavy snowfall, strong winds, and cold conditions between January 8 and January 12, 2026.",
  },
  {
    title: "Community Wellbeing Workshop",
    text: "Join us for a free Community Wellbeing Workshop designed to support individuals and families with practical resources, wellbeing tips, and local support information.",
  },
];

const EventItems = () => {
  return (
    <section className="events">
      <h3 className="!m-auto text-center text-[18px] md:text-[25px] !mb-[30px]">
        Stay Updated with Our Latest Events
      </h3>
      <div className=" !m-auto  grid   gap-[12px]  max-w-[370px] md:grid-cols-3 md:max-w-[700px]  lg:max-w-[1100px] ">
        {events.map((event, index) => (
          <div
            className="  relative bg-[#1d1836] !mx-auto text-[#f7f7f7] !px-[30px] !py-[30px]  rounded-[10px] lg:max-w-[350px]"
            key={index}
          >
            <h3 className="!mb-[10px]">{event.title}</h3>
            <p className=" text-[16px] !mb-[56px]">{event.text}</p>
            <div className=" absolute right-[30px] bottom-[30px] ">
              <Button text="Read More" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventItems;
