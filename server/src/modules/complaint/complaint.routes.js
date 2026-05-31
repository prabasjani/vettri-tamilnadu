import express from "express";
import { protect } from "../../middleware/auth.middleware.js";
import { requireOnboarding } from "../../middleware/onboarding.middleware.js";
import {
  createComplaint,
  getMyComplaints,
  getConstituencyFeed,
  getComplaintById,
  updateComplaint,
  toggleSupport,
} from "./complaint.controller.js";

const router = express.Router();

router.post("/create", protect, requireOnboarding, createComplaint);

router.get("/my", protect, requireOnboarding, getMyComplaints);

router.get("/feed", protect, requireOnboarding, getConstituencyFeed);

router.patch(
  "/:complaintId/support",
  protect,
  requireOnboarding,
  toggleSupport,
);

// Doesn't depend on onboarding data. No need requireOnboarding
router.get("/:complaintId", protect, getComplaintById);

// Protected by ownership and status validation. No need requireOnboarding
router.put("/:complaintId", protect, updateComplaint);

export default router;
