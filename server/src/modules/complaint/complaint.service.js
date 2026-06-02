import { Complaint } from "./complaint.model.js";
import {
  COMPLAINT_CATEGORIES,
  COMPLAINT_PRIORITY,
  COMPLAINT_STATUS,
  CATEGORY_DEPARTMENT_MAP,
} from "../../constants/complaint.constants.js";
import { MESSAGES } from "../../constants/messages.js";
import ApiError from "../../utils/ApiError.js";
import { generateSequentialId } from "../../utils/generateSequentialId.js";

// HELPER METHODS
const getBasePriority = (category) => {
  switch (category) {
    case COMPLAINT_CATEGORIES.CORRUPTION:

    case COMPLAINT_CATEGORIES.PUBLIC_SAFETY:
      return COMPLAINT_PRIORITY.HIGH;

    case COMPLAINT_CATEGORIES.WATER:

    case COMPLAINT_CATEGORIES.ELECTRICITY:
      return COMPLAINT_PRIORITY.MEDIUM;

    default:
      return COMPLAINT_PRIORITY.LOW;
  }
};

const buildInitialTimeline = () => [
  {
    status: COMPLAINT_STATUS.PENDING,

    message: "Complaint submitted successfully",

    createdAt: new Date(),
  },
];

const calculateFinalPriority = (basePriority, supportCount) => {
  if (basePriority === COMPLAINT_PRIORITY.HIGH) {
    return COMPLAINT_PRIORITY.HIGH;
  }

  if (supportCount >= 100) {
    return COMPLAINT_PRIORITY.HIGH;
  }

  if (supportCount >= 25) {
    return COMPLAINT_PRIORITY.MEDIUM;
  }

  return basePriority;
};

// CREATE COMPLAINT
export const createComplaintService = async (payload, user) => {
  const { title, description, category, images } = payload;

  if (!category) {
    throw new ApiError(400, "Complaint category is required");
  }

  const isCorruption = category === COMPLAINT_CATEGORIES.CORRUPTION;

  const basePriority = getBasePriority(category);

  const complaintId = await generateSequentialId({
    idName: "complaintId",
    prefix: "CMP",
  });

  const complaint = await Complaint.create({
    complaintId,

    userId: user._id,

    constituency: user.constituency,

    district: user.district,

    state: user.state,

    title: title,

    description: description,

    category: category,

    department: CATEGORY_DEPARTMENT_MAP[category],

    images: images || [],

    isAnonymous: isCorruption,

    priority: {
      base: basePriority,

      score: 0,

      final: basePriority,
    },

    timeline: buildInitialTimeline(),
  });

  return complaint;
};

// GET MY COMPLAINTS
export const getMyComplaintsService = async (userId) => {
  const complaints = await Complaint.find({
    userId,
    isDeleted: false,
  }).sort({ createdAt: -1 });

  return complaints.map((complaint) => {
    const supportCount = complaint.supports.length;

    return {
      ...complaint.toObject(),

      supportCount,

      supported: complaint.supports.some(
        (id) => id.toString() === userId.toString(),
      ),
    };
  });
};

// GET CONSTITUENCY FEED
export const getConstituencyFeedService = async (user) => {
  const complaints = await Complaint.find({
    constituency: user.constituency,
    isDeleted: false,
  })
    .populate("userId", "name")
    .sort({
      createdAt: -1,
    });

  return complaints.map((complaint) => {
    const supportCount = complaint.supports.length;

    return {
      ...complaint.toObject(),

      supportCount,

      supported: complaint.supports.some(
        (id) => id.toString() === user._id.toString(),
      ),

      priority: {
        ...complaint.priority,
        final: calculateFinalPriority(complaint.priority.base, supportCount),
      },
    };
  });
};

// GET COMPLAINT BY ID
export const getComplaintByIdService = async (complaintId) => {
  const complaint = await Complaint.findOne({
    complaintId,
    isDeleted: false,
  }).populate("userId", "name constituency");

  if (!complaint) {
    throw new ApiError(404, MESSAGES.COMPLAINT.NOT_FOUND);
  }

  return complaint;
};

// UPDATE COMPLAINT
export const updateComplaintService = async (complaintId, payload, user) => {
  const complaint = await Complaint.findOne({
    complaintId,
    isDeleted: false,
  });

  if (!complaint) {
    throw new ApiError(404, MESSAGES.COMPLAINT.NOT_FOUND);
  }

  if (complaint.userId.toString() !== user._id.toString()) {
    throw new ApiError(403, MESSAGES.COMPLAINT.NOT_OWNER);
  }

  if (complaint.status !== COMPLAINT_STATUS.PENDING) {
    throw new ApiError(400, MESSAGES.COMPLAINT.EDIT_NOT_ALLOWED);
  }

  if (payload.title) {
    complaint.title = payload.title;
  }

  if (payload.description) {
    complaint.description = payload.description;
  }

  if (payload.images) {
    complaint.images = payload.images;
  }

  if (payload.category) {
    complaint.category = payload.category;

    complaint.department = CATEGORY_DEPARTMENT_MAP[payload.category];

    const basePriority = getBasePriority(payload.category);

    complaint.priority.base = basePriority;

    complaint.priority.final = calculateFinalPriority(
      basePriority,
      complaint.supports.length,
    );

    complaint.isAnonymous =
      payload.category === COMPLAINT_CATEGORIES.CORRUPTION;
  }

  complaint.timeline.push({
    status: complaint.status,
    message: "Complaint updated by user",
    createdAt: new Date(),
  });

  await complaint.save();

  return complaint;
};

// TOGGLE SUPPORT
export const toggleSupportService = async (complaintId, userId) => {
  const complaint = await Complaint.findOne({
    complaintId,
    isDeleted: false,
  });

  if (!complaint) {
    throw new ApiError(404, MESSAGES.COMPLAINT.NOT_FOUND);
  }

  const alreadySupported = complaint.supports.some(
    (id) => id.toString() === userId.toString(),
  );

  if (alreadySupported) {
    complaint.supports = complaint.supports.filter(
      (id) => id.toString() !== userId.toString(),
    );
  } else {
    complaint.supports.push(userId);
  }

  complaint.priority.final = calculateFinalPriority(
    complaint.priority.base,
    complaint.supports.length,
  );

  await complaint.save();

  return {
    supportCount: complaint.supports.length,

    supported: !alreadySupported,

    message: alreadySupported
      ? MESSAGES.COMPLAINT.SUPPORT_REMOVED
      : MESSAGES.COMPLAINT.SUPPORT_ADDED,
  };
};
