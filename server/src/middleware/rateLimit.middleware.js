import rateLimit from "express-rate-limit";

// Make dynamic limiters
const createRateLimiter = ({ windowMs = 15 * 60 * 1000, max, message }) => {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    // newer versions of express-rate-limit work better with handler
    // handler you control everything
    handler: (req, res, next, options) => {
      return res.status(options.statusCode).json({
        success: false,
        message,
      });
    },
  });
};

export default createRateLimiter;
