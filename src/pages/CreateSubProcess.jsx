import { useState } from "react";

import { TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

import subprocessesRequests from "../api/subprocesses";

export default function CreateSubProcess() {
  const { state } = useLocation();
  const [subprocess, setSubprocess] = useState({
    title: "",
    description: "",
    process_id: state.id,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  function submitData(e) {
    e.preventDefault();
    setIsDisabled(true);
    subprocessesRequests
      .createSubprocess(subprocess)
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      })
      .then(() => {
        setIsDisabled(false);
        navigate("/");
      });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen #F0F0F0">
      <form
        className="flex flex-col w-50 border-2 border-gray-950 border-solid rounded-xl p-12 mx-4"
        onSubmit={submitData}
      >
        <span
          className="mb-4 cursor-pointer w-24 font-bold"
          onClick={() => navigate("/")}
        >
          Back Home
        </span>
        <h1 className="mb-8">
          Give a title and a description to your subprocess
        </h1>
        <div>
          <TextField
            className="mb-20"
            label="Title"
            name="title"
            value={subprocess.title}
            onChange={(e) =>
              setSubprocess({ ...subprocess, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Description"
            name="description"
            value={subprocess.description}
            onChange={(e) =>
              setSubprocess({ ...subprocess, [e.target.name]: e.target.value })
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
