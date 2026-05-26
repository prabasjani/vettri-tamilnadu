import API from "./client";
import { API_ENDPOINTS } from "./endpoints";

export const loginUser = async (payload) => {
  const response = await API.post(API_ENDPOINTS.LOGIN, payload);
  return response.data;
};

export const logoutUser = async () => {
  const response = await API.post(API_ENDPOINTS.LOGOUT);
  return response.data;
};
