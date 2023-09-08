import { useState, useEffect } from "react";

import eventsRequests from "../api/events";

export default function useEvents(subprocess_id) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    eventsRequests
      .getEvents(subprocess_id)
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => setEvents([...data]));
  }, [subprocess_id]);

  return [events, setEvents];
}
