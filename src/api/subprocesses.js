async function createSubprocess({ process_id, title, description }) {
  return fetch(`${import.meta.env.VITE_BASE_URL}/subprocesses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ process_id, title, description }),
  });
}

const subprocessesRequests = {
  createSubprocess,
};

export default subprocessesRequests;
