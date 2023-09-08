import { useState, useEffect } from "react";

import { useNavigate } from "react-router";

import subprocessesRequests from "../api/subprocesses";

export default function Subprocesses({ process_id }) {
  const [subprocesses, setSubprocesses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    subprocessesRequests
      .getAllSubprocesses(process_id)
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => setSubprocesses([...data]));
  }, [process_id]);

  return (
    <ul className="ml-6 h-52 flex flex-wrap gap-4 overflow-y-auto">
      {subprocesses.length === 0 && <p>No subprocesses registered yet.</p>}
      {subprocesses.map((e) => (
        <li
          className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] rounded-2xl text-xl cursor-pointer font-bold text-center"
          onClick={() =>
            navigate(`/process/${process_id}/${e.id}`, {
              state: { id: e.id, title: e.title, description: e.description },
            })
          }
          key={e.id}
        >
          {e.title}
        </li>
      ))}
    </ul>
  );
}
