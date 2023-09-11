import { useState, useEffect } from "react";

import eventsRequests from "../api/events";

export default function useEvents(subprocess_id) {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    eventsRequests
      .getEvents(subprocess_id)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setEvents([...data]);
      });
  }, [subprocess_id]);

  return { events, setEvents, isLoading };
}
