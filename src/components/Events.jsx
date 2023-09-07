import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";

import eventsRequests from "../api/events";

export default function Events({ subprocess_id }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    eventsRequests
      .getEvents(subprocess_id)
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents([...data]);
      });
  }, [subprocess_id]);

  console.log(events);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pl-8 w-full overflow-x-auto">
      <span className="flex items-center text-xl mb-4 font-bold gap-2">
        Events
        <GrAddCircle
          className="cursor-pointer"
          onClick={() => navigate("/new-event", { state: subprocess_id })}
        />
      </span>
      <div className="flex gap-8">
        {events.map((e) => (
          <div
            className="flex flex-col justify-center items-center gap-3 p-2 w-44 h-28 bg-[#e3f5fe] rounded-xl cursor-pointer"
            key={e.id}
          >
            <span>{e.title}</span>
            <span>Date: {e.date.split("T")[0].replaceAll("-", "/")}</span>
            <span>Time: {e.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
