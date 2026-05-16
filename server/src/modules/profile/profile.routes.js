import express from "express";
import {
  updatePersonalInfo,
  updateLocation,
  updateIdentity,
  updateInterests,
} from "../profile/profile.controller.js";
import { validateOnboardingStep } from "../../middleware/onboarding.middleware.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

// Personal Info
router.patch(
  "/personal-info",
  protect,
  validateOnboardingStep(1),
  updatePersonalInfo,
);

// Location
router.patch("/location", protect, validateOnboardingStep(2), updateLocation);

// Identity
router.patch("/identity", protect, validateOnboardingStep(3), updateIdentity);

// Interests
router.patch("/interests", protect, validateOnboardingStep(4), updateInterests);

export default router;
