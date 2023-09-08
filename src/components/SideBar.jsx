import { useState } from "react";

import { useNavigate } from "react-router";
import { AiTwotoneHome } from "react-icons/ai";
import { BsTrash, BsFillGearFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import useProcesses from "../customHook/useProcesses";
import processesRequests from "../api/processes";

export default function SideBar({ setShowIconsDelete, showIconsDelete }) {
  const { processes, isLoading } = useProcesses();
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [process_id, setProcess_id] = useState();
  const navigate = useNavigate();
  function deleteProcess() {
    setIsDisabled(true);
    processesRequests
      .deleteProcess(process_id)
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      })
      .then(() => {
        setIsDisabled(false);
        setOpen(false);
        navigate("/");
      });
  }
  return (
    <>
      <aside className="h-full w-60  border-r-2 border-solid border-[#e8e8e8] p-4 text-lg relative">
        <AiTwotoneHome
          className="text-3xl mx-auto mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="mb-4 text-[#A4A4A4] font-bold">Processes</h1>
        <ul className="ml-4">
          {isLoading && <div>Loading</div>}
          {processes.map((e) => (
            <li
              className="flex items-center justify-between gap-2 mb-2.5 cursor-pointer"
              key={e.id}
            >
              <span
                onClick={() =>
                  navigate(`/process/${e.id}`, {
                    state: {
                      title: e.title,
                      id: e.id,
                      description: e.description,
                    },
                  })
                }
              >
                {e.title}
              </span>
              {showIconsDelete && (
                <BsTrash
                  onClick={() => {
                    setOpen(true);
                    setProcess_id(e.id);
                  }}
                />
              )}
            </li>
          ))}
        </ul>
        <BsFillGearFill
          onClick={() => setShowIconsDelete(!showIconsDelete)}
          className="text-2xl absolute left-1/2 bottom-10 translate-x-[-50%] cursor-pointer"
        />
      </aside>
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
