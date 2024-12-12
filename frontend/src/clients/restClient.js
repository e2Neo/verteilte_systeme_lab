import axios from "axios"

export const RestClient = {
  async get(endpoint) {
    return await axios.get(endpoint);
  },
  async post(endpoint, body) {
    return await axios.post(endpoint, body);
  },
  async put(endpoint, body) {
    return await axios.put(endpoint, body);
  },
  async delete(endpoint) {
    return await axios.delete(endpoint);
  },
};
