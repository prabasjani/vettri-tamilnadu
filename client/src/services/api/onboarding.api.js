import API from "./client";
import { API_ENDPOINTS } from "./endpoints";

export const registerUser = async (payload) => {
  return API.post(API_ENDPOINTS.REGISTER, payload);
};

export const updatePersonalInfo = async (payload) => {
  return await API.patch(API_ENDPOINTS.PERSONAL_INFO, payload);
};

export const updateLocation = async (payload) => {
  return await API.patch(API_ENDPOINTS.LOCATION, payload);
};

export const updateIdentity = async (payload) => {
  return await API.patch(API_ENDPOINTS.IDENTITY, payload);
};

export const updateInterests = async (payload) => {
  return await API.patch(API_ENDPOINTS.INTERESTS, payload);
};
