import { useState, useEffect } from "react";

import processesRequests from "../api/processes";

export default function useProcesses() {
  const [processes, setProcesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  return { processes, setProcesses, isLoading };
}
