import { useState } from "react";

import { BsTrash } from "react-icons/bs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

import SideBar from "./SideBar";
import processesRequests from "../api/processes";

export default function PrincipalWrapper({ children, title, process_id }) {
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  function deleteProcess() {
    setIsDisabled(true);
    processesRequests
      .deleteProcess(process_id)
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      })
      .then((res) => {
        setIsDisabled(false);
        console.log(res);
        setOpen(false);
        navigate("/");
      });
  }
  return (
    <>
      <main className="flex h-screen w-screen">
        <SideBar />
        <div className="w-[100%]">
          <header className="flex justify-center items-center h-20 text-xl border-b-2 border-solid border-[#e8e8e8] gap-4">
            {title}
            {title !== "Welcome" && (
              <BsTrash
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            )}
          </header>
          {children}
        </div>
      </main>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="delete-process"
        aria-describedby="delete-process"
      >
        <DialogTitle id="delete-process">
          {
            "Do you want to delete this process? All subprocesses and events associated with the process will also be deleted."
          }
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={deleteProcess} disabled={isDisabled}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
