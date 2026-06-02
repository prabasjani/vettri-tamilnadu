import API from "./client";
import { API_ENDPOINTS } from "./endpoints";

export const createComplaint = async (payload) => {
  return await API.post(API_ENDPOINTS.CREATE_COMPLAINT, payload);
};

export const getMyComplaints = async () => {
  return await API.get(API_ENDPOINTS.MY_COMPLAINTS);
};

export const getCommunityFeed = async () => {
  return await API.get(API_ENDPOINTS.COMMUNITY_FEED);
};

export const getComplaintById = async (complaintId) => {
  return await API.get(API_ENDPOINTS.COMPLAINT_BY_ID(complaintId));
};

export const updateComplaint = async (complaintId, payload) => {
  return await API.put(API_ENDPOINTS.COMPLAINT_BY_ID(complaintId), payload);
};

export const supportComplaint = async (complaintId) => {
  return await API.patch(API_ENDPOINTS.SUPPORT_COMPLAINT(complaintId));
};
