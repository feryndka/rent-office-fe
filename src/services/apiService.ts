import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

// Export axios.isAxiosError
export const isAxiosError = axios.isAxiosError;

export const API_URL_STORAGE = import.meta.env.VITE_API_URL_STORAGE;

export default apiClient;
