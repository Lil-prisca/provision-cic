import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { events } from "../../Data";
import { div } from "framer-motion/client";

interface EventType {
  id: number;
  title: string;
  details: string;
}
const EventDetailsInfo = () => {
  const { id } = useParams<{ id?: string }>();
  const eventId = id ? parseInt(id) : undefined;
  const event = events.find((e) => e.id === eventId);

  return (
    <>
      <div className="!mt-[100px]">
        <Link to="/events">
          <div className=" !m-auto max-w-[350px] text-[30px] !p-[10px]">⬅️</div>
        </Link>
        <div className=" !m-auto  bg-gray-400 max-w-[350px] h-[500px] rounded-[10px] !p-[10px]">
          <h1>{event.title}</h1>
          <p>{event.text}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetailsInfo;
