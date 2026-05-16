import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5001,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL: process.env.CLIENT_URL,
  // Token Secret
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  // Token Expiry env
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  // Encryption Secret
  ENCRYPTION_SECRET: process.env.ENCRYPTION_SECRET,
};
