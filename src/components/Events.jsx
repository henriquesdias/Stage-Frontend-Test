import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

import eventsRequests from "../api/events";
import Event from "./Event";
import useEvents from "../customHook/useEvents";

export default function Events({ subprocess_id }) {
  const [events, setEvents] = useEvents(subprocess_id);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col pl-8 w-full overflow-x-auto">
        <span className="flex items-center text-xl mb-4 font-bold gap-2">
          Events
          <GrAddCircle
            className="cursor-pointer"
            onClick={() => navigate("/new-event", { state: subprocess_id })}
          />
        </span>
        <div className="flex gap-8 h-36">
          {events.map((e) => (
            <div key={e.id} className="relative">
              <BsTrash
                className="absolute right-1 top-1 text-2xl cursor-pointer"
                onClick={() => {
                  eventsRequests
                    .deleteEvent(e.id)
                    .catch((error) => console.log(error))
                    .then(() => {
                      setEvents((events) => [
                        ...events.filter((event) => event.id !== e.id),
                      ]);
                    });
                }}
              />
              <Event event={e} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
