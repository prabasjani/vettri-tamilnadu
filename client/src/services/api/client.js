import axios from "axios";
import { API_ENDPOINTS } from "./endpoints";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    const isAuthRoute =
      originalRequest.url.includes(API_ENDPOINTS.LOGIN) ||
      originalRequest.url.includes(API_ENDPOINTS.REGISTER);

    if (isAuthRoute) {
      return Promise.reject(error);
    }

    const isRefreshRequest = originalRequest.url.includes(
      API_ENDPOINTS.REFRESH_TOKEN,
    );

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshRequest
    ) {
      originalRequest._retry = true;

      try {
        await API.post(API_ENDPOINTS.REFRESH_TOKEN);

        return API(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default API;
