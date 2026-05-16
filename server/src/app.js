import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { corsOptions } from "./config/cors.js";
import logger from "./config/logger.js";
import errorHandler from "./middleware/error.middleware.js";
import createRateLimiter from "./middleware/rateLimit.middleware.js";
import { HTTP_STATUS } from "./constants/httpStatus.js";
import { sendSuccess, sendError } from "./utils/response.js";

import authRoutes from "./modules/auth/auth.route.js";
import profileRoutes from "./modules/profile/profile.routes.js";

const app = express();

// TRUST PROXY
app.set("trust proxy", 1);

// SECURITY MIDDLEWARE
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

// CORS
app.use(cors(corsOptions));

// BODY PARSERS
app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  }),
);

// COOKIE PARSER
app.use(cookieParser());

// MORGAN LOGGER
app.use(
  morgan("dev", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  }),
);

// GLOBAL RATE LIMITER
const globalLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: "Too many requests from this IP. Please try again later.",
});

app.use(globalLimiter);

// HEALTH CHECK
app.get("/health", (req, res) => {
  return sendSuccess(res, HTTP_STATUS.OK, "Server is running");
});

// ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);

// 404 HANDLER
app.use((req, res) => {
  return sendError(res, HTTP_STATUS.NOT_FOUND, "Route not found");
});

// GLOBAL ERROR HANDLER
app.use(errorHandler);

export default app;
