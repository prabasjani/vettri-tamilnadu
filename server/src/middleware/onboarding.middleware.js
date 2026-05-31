import { HTTP_STATUS } from "../constants/httpStatus.js";
import ApiError from "../utils/ApiError.js";

export const validateOnboardingStep = (requiredStep) => {
  return (req, res, next) => {
    const user = req.user;

    // Allow profile editing
    if (user.hasCompletedOnboarding) {
      return next();
    }

    const currentStep = user.onboardingStep;

    // Prevent revisiting
    if (currentStep > requiredStep) {
      return next(
        new ApiError(HTTP_STATUS.FORBIDDEN, "Step already completed"),
      );
    }

    // Prevent skipping
    if (currentStep < requiredStep) {
      return next(
        new ApiError(HTTP_STATUS.FORBIDDEN, "Complete previous steps first"),
      );
    }

    next();
  };
};

export const requireOnboarding = (req, res, next) => {
  if (!req.user?.hasCompletedOnboarding) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      "Please complete onboarding to continue",
    );
  }

  next();
};
