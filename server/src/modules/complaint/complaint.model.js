import mongoose from "mongoose";

import {
  COMPLAINT_STATUS,
  COMPLAINT_PRIORITY,
} from "../../constants/complaint.constants.js";

const timelineSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
);

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    constituency: {
      type: String,
      required: true,
      index: true,
    },

    district: {
      type: String,
    },

    state: {
      type: String,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    images: [String],

    isAnonymous: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: Object.values(COMPLAINT_STATUS),
      default: COMPLAINT_STATUS.PENDING,
    },

    priority: {
      base: {
        type: String,
        enum: Object.values(COMPLAINT_PRIORITY),
        default: COMPLAINT_PRIORITY.LOW,
      },

      score: {
        type: Number,
        default: 0,
      },

      final: {
        type: String,
        enum: Object.values(COMPLAINT_PRIORITY),
        default: COMPLAINT_PRIORITY.LOW,
      },
    },

    supports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    timeline: [timelineSchema],

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Complaint = mongoose.model("Complaint", complaintSchema);
