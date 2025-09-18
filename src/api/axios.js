import axios from "axios";

// 🔹 For production, point to your Render backend URL
// 🔹 For local development, you can use localhost:7777
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:7777/api",
  withCredentials: true,
});

export default api;

