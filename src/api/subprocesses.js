async function createSubprocess({ process_id, title, description }) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/subprocesses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ process_id, title, description }),
  });
}
async function getAllSubprocesses(process_id) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/subprocesses/${process_id}`);
}

const subprocessesRequests = {
  createSubprocess,
  getAllSubprocesses,
};

export default subprocessesRequests;
