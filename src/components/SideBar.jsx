import { useState, useEffect } from "react";

import processesRequests from "../api/processes";

export default function SideBar() {
  const [processes, setProcesses] = useState([]);
  useEffect(() => {
    processesRequests
      .getProcesses()
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => setProcesses([...data]));
  }, []);

  return (
    <aside className="h-full w-60 border-r-2 border-solid border-[#e8e8e8] p-12 text-xl">
      <h1 className="mb-4 text-[#A4A4A4]">Processes</h1>
      <ul className="ml-4">
        {processes.map((e) => (
          <li className="mb-2.5 cursor-pointer" key={e.id}>
            {e.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
