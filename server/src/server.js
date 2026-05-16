import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";

// SERVER
const server = http.createServer(app);

// DATABASE CONNECTION + SERVER START
const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    // Start Server
    server.listen(env.PORT, () => {
      logger.info(`Server running on port ${env.PORT}`);
      logger.info(`Environment: ${env.NODE_ENV}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();

// UNHANDLED PROMISE REJECTIONS
process.on("unhandledRejection", (reason) => {
  logger.error(`Unhandled Rejection: ${reason}`);
  server.close(() => {
    process.exit(1);
  });
});

// UNCAUGHT EXCEPTIONS
process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception: ${error.message}`);
  process.exit(1);
});

// GRACEFUL SHUTDOWN
process.on("SIGTERM", () => {
  logger.warn("SIGTERM received. Shutting down gracefully.");
  server.close(() => {
    logger.info("Process terminated.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  logger.warn("SIGINT received. Shutting down gracefully.");
  server.close(() => {
    logger.info("Process terminated.");
    process.exit(0);
  });
});
