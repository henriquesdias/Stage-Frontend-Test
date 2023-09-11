import { useState, useEffect } from "react";

import subprocessesRequests from "../api/subprocesses";

export default function useSubprocesses(process_id) {
  const [subprocesses, setSubprocesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    subprocessesRequests
      .getAllSubprocesses(process_id)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSubprocesses([...data]);
      });
  }, [process_id]);

  return { subprocesses, setSubprocesses, isLoading };
}
