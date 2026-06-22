import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://phi-mart-project-drf.vercel.app/api/v1",
  // baseURL: "http://127.0.0.1:8000/api/v1", // For Debug 
});

export default apiClient;