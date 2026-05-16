import User from "../user/user.model.js";
import ApiError from "../../utils/ApiError.js";
import { encrypt } from "../../utils/security/encryption.js";
import { REGEX } from "../../constants/regex.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { MESSAGES } from "../../constants/messages.js";

// Personal Info ------------------------------------------------------------------
export const updatePersonalInfoService = async ({
  userId,
  payload,
  isOnboarding,
}) => {
  const { fullname, gender, dob, profilePhoto } = payload;

  // Required validation
  if (!fullname || !gender || !dob) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, MESSAGES.FIELD_REQUIRED);
  }

  // Name validation
  if (!REGEX.NAME.test(fullname)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid fullname");
  }

  const updateData = {
    fullname,
    gender,
    dob,
    profilePhoto,
  };

  // Update onboarding step
  if (isOnboarding) {
    updateData.onboardingStep = 2;
  }

  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  return user;
};

// Location ------------------------------------------------------------------------
export const updateLocationService = async ({
  userId,
  payload,
  isOnboarding,
}) => {
  const { mobile, state, district, constituency, address, pincode } = payload;

  // Required validation
  if (!mobile || !state || !district || !constituency || !address || !pincode) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, MESSAGES.FIELD_REQUIRED);
  }

  // Mobile validation
  if (!REGEX.MOBILE.test(mobile)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid mobile number");
  }

  // Pincode validation
  if (!REGEX.PINCODE.test(pincode)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid pincode");
  }

  // Check existing mobile
  const existingMobile = await User.findOne({
    mobile,
    _id: {
      $ne: userId,
    },
  });

  if (existingMobile) {
    throw new ApiError(409, "Mobile already exists");
  }

  const updateData = {
    mobile,
    state,
    district,
    constituency,
    address,
    pincode,
  };

  // Update onboarding step
  if (isOnboarding) {
    updateData.onboardingStep = 3;
  }

  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  return user;
};

// Identity ------------------------------------------------------------------------
export const updateIdentityService = async ({
  userId,
  payload,
  isOnboarding,
}) => {
  const { identityType, identityNumber } = payload;

  // Required validation
  if (!identityType || !identityNumber) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, MESSAGES.FIELD_REQUIRED);
  }

  // Aadhaar validation
  if (identityType === "aadhaar" && !REGEX.AADHAAR.test(identityNumber)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid Aadhaar number");
  }

  // PAN validation
  if (identityType === "pan" && !REGEX.PAN.test(identityNumber)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid PAN number");
  }

  // Voter ID validation
  if (identityType === "voterId" && !REGEX.VOTER_ID.test(identityNumber)) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid Voter ID");
  }

  // Encrypt identity number
  const encryptedIdentity = encrypt(identityNumber);

  const updateData = {
    identityType,
    identityNumber: encryptedIdentity,
  };

  // Update onboarding step
  if (isOnboarding) {
    updateData.onboardingStep = 4;
  }

  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  return user;
};

// Interests -----------------------------------------------------------------------
export const updateInterestsService = async ({
  userId,
  payload,
  isOnboarding,
}) => {
  const { interests } = payload;

  // Required validation
  if (!interests || !Array.isArray(interests) || interests.length === 0) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Select at least one interest");
  }

  const updateData = {
    interests,
  };

  // Complete onboarding
  if (isOnboarding) {
    updateData.onboardingStep = 5;
    updateData.hasCompletedOnboarding = true;
  }

  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  return user;
};
