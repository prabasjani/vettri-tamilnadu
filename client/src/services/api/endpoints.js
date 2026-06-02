export const API_ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  LOGOUT: "/api/v1/auth/logout",
  REFRESH_TOKEN: "/api/v1/auth/refresh-token",

  // ONBOARDING/PROFILE ENDPOINTS
  REGISTER: "/api/v1/auth/register",
  PERSONAL_INFO: "/api/v1/profile/personal-info",
  LOCATION: "/api/v1/profile/location",
  IDENTITY: "/api/v1/profile/identity",
  INTERESTS: "/api/v1/profile/interests",

  // COMPLAINT ENDPOINTS
  CREATE_COMPLAINT: "/api/v1/complaints/create",
  MY_COMPLAINTS: "api/v1/complaints/my",
  COMMUNITY_FEED: "/api/v1/complaints/feed",
  COMPLAINT_BY_ID: (complaintId) => `/api/v1/complaints/${complaintId}`,
  SUPPORT_COMPLAINT: (complaintId) =>
    `/api/v1/complaints/${complaintId}/support`,
};
