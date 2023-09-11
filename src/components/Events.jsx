import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import eventsRequests from "../api/events";
import Event from "./Event";
import useEvents from "../customHook/useEvents";
import DefaultLoading from "../styles/Loading";

export default function Events({ subprocess_id }) {
  const { events, setEvents, isLoading } = useEvents(subprocess_id);
  const [eventId, setEventId] = useState();
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function deleteEvent() {
    setIsDisabled(true);
    eventsRequests
      .deleteEvent(eventId)
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
        setOpen(false);
      })
      .then(() => {
        setEvents((events) => [
          ...events.filter((event) => event.id !== eventId),
        ]);
        setIsDisabled(false);
        setOpen(false);
      });
  }
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
          {isLoading && <DefaultLoading />}
          {events.map((e) => (
            <div key={e.id} className="relative">
              <BsTrash
                className="absolute right-1 top-1 text-2xl cursor-pointer"
                onClick={() => {
                  setEventId(e.id);
                  setOpen(true);
                }}
              />
              <Event event={e} />
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="delete-confirmation"
        aria-describedby="delete-confirmation"
      >
        <DialogTitle id="delete-confirmation">
          {"Would you like to delete this event ?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={deleteEvent} disabled={isDisabled}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
