import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle } from "@mui/material";

export default function Event({ event }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-3 p-2 w-44 h-28 bg-[#e3f5fe] rounded-xl cursor-pointer shadow-[10px_10px_8px_-6px_rgba(0,0,0,0.1);]"
        onClick={() => setOpen(true)}
      >
        <span className="text-center">{event.title}</span>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="event-model"
        aria-describedby="event-model"
      >
        <DialogTitle id="event-model">{event.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="event-model">
            <span className="flex flex-col gap-3">
              <span>Date: {event.date.split("T")[0].replaceAll("-", "/")}</span>
              <span>Time: {event.time}</span>
              <span className="flex flex-col">
                <span>Notes :</span>
                <span>{event.notes ? event.notes : "Empty"}</span>
              </span>
              <span>is Completed ? {event.completed ? "Yes" : "No"}</span>
            </span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
