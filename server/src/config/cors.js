import { env } from "./env.js";

export const corsOptions = {
  origin: env.CLIENT_URL || "http://localhost:5173",
  credentials: true, // allow cookies
};
