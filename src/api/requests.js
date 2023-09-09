const BASE_URL = import.meta.env.VITE_BASE_URL;

async function get(endpoint) {
  return fetch(`${BASE_URL}/${endpoint}`, { method: "GET" });
}
async function deleteElement(endpoint) {
  return fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
  });
}
async function post(endpoint, body) {
  return fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
async function update(endpoint, body) {
  return fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

const requests = {
  get,
  deleteElement,
  post,
  update,
};

export default requests;
