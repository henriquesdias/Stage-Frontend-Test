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

const processesRequests = {
  getProcesses,
  createProcess,
};

export default processesRequests;
