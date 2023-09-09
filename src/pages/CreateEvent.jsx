import { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import eventsRequests from "../api/events";

export default function CreateEvent() {
  const { state: subprocess_id } = useLocation();
  const [isDisabled, setIsDisabled] = useState(false);
  const [event, setEvent] = useState({
    title: "",
    notes: "",
    date: "",
    time: "",
    subprocess_id,
  });
  const dateObj = new Date();
  const navigate = useNavigate();
  function createEvent(e) {
    e.preventDefault();
    setIsDisabled(true);
    eventsRequests
      .createEvent(event)
      .catch(() => {
        setIsDisabled(false);
      })
      .then(() => {
        setIsDisabled(false);
        navigate("/");
      });
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#F0F0F0]">
      <form
        className="flex flex-col w-50 border-2 border-gray-950 border-solid rounded-xl p-12 mx-4 text-lg"
        onSubmit={createEvent}
      >
        <span
          className="mb-4 cursor-pointer w-24 font-bold"
          onClick={() => navigate("/")}
        >
          Back Home
        </span>
        <h1 className="mb-4">Create a new event</h1>
        <label htmlFor="date">Date of event</label>
        <input
          id="date"
          type="date"
          name="date"
          className="outline-none mb-4 bg-[#F0F0F0]"
          value={event.date}
          min={dateObj.toISOString().split("T")[0]}
          required
          onChange={(e) =>
            setEvent({ ...event, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="time">Schedule of event</label>
        <input
          type="time"
          name="time"
          id="time"
          className="outline-none mb-4 bg-[#F0F0F0]"
          required
          value={event.time}
          onChange={(e) =>
            setEvent({ ...event, [e.target.name]: e.target.value })
          }
        />
        <div>
          <TextField
            className="mb-20"
            label="Title"
            name="title"
            required
            onChange={(e) =>
              setEvent({ ...event, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Observations"
            name="notes"
            onChange={(e) =>
              setEvent({ ...event, [e.target.name]: e.target.value })
            }
          />
        </div>
        <Button variant="contained" type="submit" disabled={isDisabled}>
          Create
        </Button>
      </form>
    </div>
  );
}
