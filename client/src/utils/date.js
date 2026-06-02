// src/utils/date.js

const DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const DATETIME_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

export const formatDate = (date) => {
  if (!date) return "";
  return DATE_FORMATTER.format(new Date(date));
};

export const formatDateTime = (date) => {
  if (!date) return "";
  return DATETIME_FORMATTER.format(new Date(date));
};
