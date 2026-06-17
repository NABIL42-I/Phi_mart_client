import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://phi-mart-project-drf.vercel.app/api/v1",
});

export default apiClient;