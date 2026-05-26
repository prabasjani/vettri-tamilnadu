import asyncHandler from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/response.js";
import { loginUserService, registerUserService } from "./auth.service.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { MESSAGES } from "../../constants/messages.js";
import { cookieOptions } from "../../config/cookie.js";
import ApiError from "../../utils/ApiError.js";
import {
  generateAccessToken,
  verifyRefreshToken,
} from "../../utils/security/token.js";

// REGISTER USER
export const registerUser = asyncHandler(async (req, res) => {
  const data = await registerUserService(req.body);

  // Set refresh token cookie
  res.cookie("accessToken", data.accessToken, cookieOptions);
  res.cookie("refreshToken", data.refreshToken, cookieOptions);

  return sendSuccess(res, HTTP_STATUS.CREATED, "Registration successful", {
    user: data.user,
    accessToken: data.accessToken,
    onboardingStep: data.user.onboardingStep,
  });
});

// LOGIN USER
export const loginUser = asyncHandler(async (req, res) => {
  const data = await loginUserService(req.body);
  console.log(req.body);

  res.cookie("accessToken", data.accessToken, cookieOptions);
  res.cookie("refreshToken", data.refreshToken, cookieOptions);

  return sendSuccess(res, HTTP_STATUS.OK, MESSAGES.LOGIN_SUCCESS, {
    user: data.user,
    accessToken: data.accessToken,
    onboardingStep: data.user.onboardingStep,
  });
});

// REFRESH TOKEN
export const refreshAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.UNAUTHORIZED);
  }

  const decoded = verifyRefreshToken(refreshToken);
  const accessToken = generateAccessToken({
    id: decoded.id,
  });

  res.cookie("accessToken", accessToken, cookieOptions);
  return sendSuccess(res, HTTP_STATUS.OK, "Access token refreshed");
});

// LOGOUT USER
export const logoutUser = asyncHandler(async (req, res) => {
  // Clear access token
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return sendSuccess(res, HTTP_STATUS.OK, MESSAGES.LOGOUT_SUCCESS);
});

// GET ME
export const getMe = asyncHandler(async (req, res) => {
  return sendSuccess(res, HTTP_STATUS.OK, "User fetched successfully", {
    user: req.user,
  });
});
