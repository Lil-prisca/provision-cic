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
];

const LatestEvents = () => {
  return (
    <section className="events">
      <h2>Latest Events</h2>
      <p className="events-sub">See updates and upcoming events</p>

      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.text}</p>
            <div className="eventButtoncomp">
              <Button text="Read More" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestEvents;
