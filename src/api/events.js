async function createEvent({ title, notes, date, time, subprocess_id }) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/events/${subprocess_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, notes, date, time }),
  });
}
async function getEvents(subprocess_id) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/events/${subprocess_id}`);
}

const eventsRequests = {
  createEvent,
  getEvents,
};

export default eventsRequests;
