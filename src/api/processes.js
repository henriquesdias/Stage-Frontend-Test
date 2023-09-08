async function getProcesses() {
  return fetch(`${import.meta.env.VITE_BASE_URL}/processes`, {
    method: "GET",
  });
}
async function createProcess({ title, description }) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/processes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });
}
async function deleteProcess(process_id) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/processes/${process_id}`, {
    method: "DELETE",
  });
}

const processesRequests = {
  getProcesses,
  createProcess,
  deleteProcess,
};

export default processesRequests;
