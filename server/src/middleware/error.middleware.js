// Global Error Middleware

import logger from "../config/logger.js";
import { sendError } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {
  console.error(err);
  logger.error(err);

  return sendError(
    res,
    err.statusCode || 500,
    err.message || "Internal Server Error",
  );
};

export default errorHandler;
