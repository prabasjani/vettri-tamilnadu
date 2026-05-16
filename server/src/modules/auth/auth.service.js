import User from "../user/user.model.js";
import ApiError from "../../utils/ApiError.js";
import { hashPassword, comparePassword } from "../../utils/security/hashing.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/security/token.js";
import { generateSequentialId } from "../../utils/generateSequentialId.js";

import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { MESSAGES } from "../../constants/messages.js";

// REGISTER USER
export const registerUserService = async (payload) => {
  const { email, password } = payload;

  // CHECK EXISTING USER
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new ApiError(409, MESSAGES.USER_ALREADY_EXISTS);
  }

  // HASH PASSWORD
  const hashedPwd = await hashPassword(password);

  // GENERATE USER ID
  const userId = await generateSequentialId({
    idName: "userId",
    prefix: "TVK",
  });

  // CREATE USER
  const user = await User.create({
    ...payload,
    userId,
    password: hashedPwd,
  });

  // GENERATE TOKENS
  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user._id,
  });

  // SAVE REFRESH TOKEN
  user.refreshToken = refreshToken;
  await user.save();

  return {
    user,
    accessToken,
    refreshToken,
  };
};

// LOGIN USER
export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, MESSAGES.INVALID_CREDENTIALS);
  }

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user._id,
  });

  user.refreshToken = refreshToken;
  user.lastLoginAt = new Date();

  await user.save();

  return {
    user,
    accessToken,
    refreshToken,
  };
};
