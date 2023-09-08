import requests from "./requests";

async function createSubprocess({ process_id, title, description }) {
  return requests.post("subprocesses", { process_id, title, description });
}
async function getAllSubprocesses(process_id) {
  return requests.get(`subprocesses/${process_id}`);
}

const subprocessesRequests = {
  createSubprocess,
  getAllSubprocesses,
};

export default subprocessesRequests;
