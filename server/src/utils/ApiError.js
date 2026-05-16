// Custom ApiError Class
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
// Beautiful debugging using this ApiError
