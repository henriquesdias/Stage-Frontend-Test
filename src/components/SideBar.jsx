import { useState, useEffect } from "react";

import { useNavigate } from "react-router";
import { AiTwotoneHome } from "react-icons/ai";

import processesRequests from "../api/processes";

export default function SideBar() {
  const [processes, setProcesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    processesRequests
      .getProcesses()
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProcesses([...data]);
      });
  }, []);

  return (
    <aside className="h-full w-60  border-r-2 border-solid border-[#e8e8e8] p-8 text-xl">
      <div className="w-full flex justify-center">
        <AiTwotoneHome
          className="text-3xl mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <h1 className="mb-4 text-[#A4A4A4] font-bold">Processes</h1>
      <ul className="ml-4">
        {isLoading && <div>Loading</div>}
        {processes.map((e) => (
          <li
            className="mb-2.5 cursor-pointer"
            key={e.id}
            onClick={() =>
              navigate(`/process/${e.id}`, {
                state: { title: e.title, id: e.id, description: e.description },
              })
            }
          >
            {e.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
