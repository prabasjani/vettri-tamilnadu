import asyncHandler from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/response.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";
import {
  updatePersonalInfoService,
  updateLocationService,
  updateIdentityService,
  updateInterestsService,
} from "../profile/profile.service.js";

// Personal Info
export const updatePersonalInfo = asyncHandler(async (req, res) => {
  const data = await updatePersonalInfoService({
    userId: req.user.id,
    payload: req.body,
    isOnboarding: !req.user.hasCompletedOnboarding,
  });

  return sendSuccess(res, HTTP_STATUS.OK, "Personal info updated", data);
});

// Location
export const updateLocation = asyncHandler(async (req, res) => {
  const data = await updateLocationService({
    userId: req.user.id,
    payload: req.body,
    isOnboarding: !req.user.hasCompletedOnboarding,
  });

  return sendSuccess(res, HTTP_STATUS.OK, "Location updated", data);
});

// Identity
export const updateIdentity = asyncHandler(async (req, res) => {
  const data = await updateIdentityService({
    userId: req.user.id,
    payload: req.body,
    isOnboarding: !req.user.hasCompletedOnboarding,
  });

  return sendSuccess(res, HTTP_STATUS.OK, "Identity updated", data);
});

// Interests
export const updateInterests = asyncHandler(async (req, res) => {
  const data = await updateInterestsService({
    userId: req.user.id,
    payload: req.body,
    isOnboarding: !req.user.hasCompletedOnboarding,
  });

  return sendSuccess(res, HTTP_STATUS.OK, "Interests updated", data);
});
