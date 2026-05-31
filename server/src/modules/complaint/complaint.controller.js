import asyncHandler from "../../utils/asyncHandler.js";
import { MESSAGES } from "../../constants/messages.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { sendSuccess } from "../../utils/response.js";
import {
  createComplaintService,
  getMyComplaintsService,
  getConstituencyFeedService,
  getComplaintByIdService,
  updateComplaintService,
  toggleSupportService,
} from "./complaint.service.js";

// CREATE COMPLAINT
export const createComplaint = asyncHandler(async (req, res) => {
  const complaint = await createComplaintService(req.body, req.user);

  return sendSuccess(
    res,
    HTTP_STATUS.CREATED,
    MESSAGES.COMPLAINT.CREATED,
    complaint,
  );
});

// GET MY COMPLAINTS
export const getMyComplaints = asyncHandler(async (req, res) => {
  const complaints = await getMyComplaintsService(req.user._id);

  return sendSuccess(
    res,
    HTTP_STATUS.OK,
    MESSAGES.COMPLAINT.LIST_FETCHED,
    complaints,
  );
});

// GET CONSTITUENCY FEED
export const getConstituencyFeed = asyncHandler(async (req, res) => {
  const complaints = await getConstituencyFeedService(req.user);

  return sendSuccess(
    res,
    HTTP_STATUS.OK,
    MESSAGES.COMPLAINT.LIST_FETCHED,
    complaints,
  );
});

// GET COMPLAINT BY ID
export const getComplaintById = asyncHandler(async (req, res) => {
  const complaint = await getComplaintByIdService(req.params.complaintId);

  return sendSuccess(
    res,
    HTTP_STATUS.OK,
    MESSAGES.COMPLAINT.FETCHED,
    complaint,
  );
});

// UPDATE COMPLAINT

export const updateComplaint = asyncHandler(async (req, res) => {
  const complaint = await updateComplaintService(
    req.params.complaintId,
    req.body,
    req.user,
  );

  return sendSuccess(
    res,
    HTTP_STATUS.OK,
    MESSAGES.COMPLAINT.UPDATED,
    complaint,
  );
});

// TOGGLE SUPPORT
export const toggleSupport = asyncHandler(async (req, res) => {
  const result = await toggleSupportService(
    req.params.complaintId,
    req.user._id,
  );

  return sendSuccess(res, HTTP_STATUS.OK, result.message, {
    supportCount: result.supportCount,
    supported: result.supported,
  });
});
