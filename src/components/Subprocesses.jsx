import { useState } from "react";

import { useNavigate } from "react-router";
import { BsTrash } from "react-icons/bs";

import DialogModel from "./DialogModel";
import useSubprocesses from "../customHook/useSubprocesses";
import subprocessesRequests from "../api/subprocesses";
import DefaultLoading from "../styles/Loading";

export default function Subprocesses({ process_id }) {
  const { subprocesses, setSubprocesses, isLoading } =
    useSubprocesses(process_id);
  const [open, setOpen] = useState(false);
  const [subprocess_id, setSubprocess_id] = useState();
  const navigate = useNavigate();

  function deleteSubprocess() {
    subprocessesRequests
      .deleteSubprocess(subprocess_id)
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setSubprocesses((sub) => [
          ...sub.filter((e) => e.id !== subprocess_id),
        ]);
        setOpen(false);
      });
  }

  return (
    <>
      <ul className="ml-6 flex flex-wrap gap-4">
        {!subprocesses && <p>No subprocesses registered yet.</p>}
        {isLoading && <DefaultLoading />}
        {subprocesses.map((e) => (
          <div key={e.id} className="relative">
            <li
              className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] rounded-2xl text-xl cursor-pointer font-bold text-center relative shadow-[10px_10px_8px_-6px_rgba(0,0,0,0.1);]"
              onClick={() =>
                navigate(`/process/${process_id}/${e.id}`, {
                  state: {
                    id: e.id,
                    title: e.title,
                    description: e.description,
                  },
                })
              }
            >
              {e.title}
            </li>
            <BsTrash
              className="absolute top-2 right-2 text-xl cursor-pointer"
              onClick={() => {
                setSubprocess_id(e.id);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </ul>
      <DialogModel
        open={open}
        setOpen={setOpen}
        action={deleteSubprocess}
        isDisabled={isLoading}
        title={
          "Do you want to delete this subprocess? All events associated with this subprocess will be deleted."
        }
      />
    </>
  );
}
