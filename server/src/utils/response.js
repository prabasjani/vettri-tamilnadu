import logger from "../config/logger.js";

export const sendSuccess = (
  res,
  statusCode = 200,
  message = "Success",
  data = null,
) => {
  logger.info(message);
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res,
  statusCode = 500,
  message = "Something went wrong",
  errors = null,
) => {
  logger.error(errors);
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
