import requests from "./requests";

async function createEvent({ title, notes, date, time, subprocess_id }) {
  return requests.post(`events/${subprocess_id}`, { title, notes, date, time });
}
async function getEvents(subprocess_id) {
  return requests.get(`events/${subprocess_id}`);
}
async function deleteEvent(event_id) {
  return requests.deleteElement(`events/${event_id}`);
}

const eventsRequests = {
  createEvent,
  getEvents,
  deleteEvent,
};

export default eventsRequests;
