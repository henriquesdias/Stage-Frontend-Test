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

const processesRequests = {
  getProcesses,
  createProcess,
  deleteProcess,
};

export default processesRequests;
