import jwt from "jsonwebtoken";
import User from "../modules/user/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { MESSAGES } from "../constants/messages.js";
import { verifyAccessToken } from "../utils/security/token.js";

export const protect = asyncHandler(async (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.accessToken;

  // No token
  if (!token) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.UNAUTHORIZED);
  }

  // Verify token
  const decoded = verifyAccessToken(token);

  // Find user
  const user = await User.findById(decoded.id).select(
    "-password -refreshToken",
  );

  // User not found
  if (!user) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.USER_NOT_FOUND);
  }

  // Attach user
  req.user = user;
  next();
});
