const BASE_URL = "https://jsonplaceholder.typicode.com";
import axios from "axios";

export const api = {
  getAllPosts: async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  },
};
