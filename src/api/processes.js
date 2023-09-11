import requests from "./requests";

async function getProcesses() {
  return requests.get("processes");
}
async function createProcess({ title, description }) {
  return requests.post("processes", { title, description });
}
async function deleteProcess(process_id) {
  return requests.deleteElement(`processes/${process_id}`);
}
async function getUniqueProcess(process_id) {
  return requests.get(`processes/${process_id}`);
}

const processesRequests = {
  getProcesses,
  createProcess,
  deleteProcess,
  getUniqueProcess,
};

export default processesRequests;
