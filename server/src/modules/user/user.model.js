import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // SYSTEM
    userId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    role: {
      type: String,
      enum: ["citizen", "admin", "district_admin", "super_admin"],
      default: "citizen",
    },

    // ACCOUNT SETUP
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    refreshToken: {
      type: String,
      select: false,
    },

    // BASIC INFO
    fullname: {
      type: String,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    dob: {
      type: Date,
    },

    profilePhoto: {
      type: String,
    },

    // CONTACT & LOCATION
    mobile: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    district: {
      type: String,
      trim: true,
    },

    constituency: {
      type: String,
      trim: true,
    },
   
    address: {
      type: String,
      trim: true,
    },

    pincode: {
      type: String,
      trim: true,
    },

    // IDENTITY
    identityType: {
      type: String,
      enum: ["aadhaar", "voterId", "pan"],
    },

    //  Store ONLY encrypted value
    identityNumber: {
      type: String,
      select: false,
    },

    // INTERESTS
    interests: [
      {
        type: String,
        enum: [
          "education",
          "health",
          "transport",
          "corruption",
          "infrastructure",
          "employment",
          "agriculture",
          "women_welfare",
          "youth_development",
          "digital_governance",
        ],
      },
    ],

    // ACCOUNT STATUS
    isVerified: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    // ONBOARDING
    onboardingStep: {
      type: Number,
      default: 1,
    },

    hasCompletedOnboarding: {
      type: Boolean,
      default: false,
    },

    // LAST LOGIN
    lastLoginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// TRANSFORM RESPONSE
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.refreshToken;
  delete obj.identityNumber;
  delete obj.__v;
  return obj;
};

const User = mongoose.model("User", userSchema);

export default User;
