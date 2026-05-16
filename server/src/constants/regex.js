export const REGEX = {
  // Indian Mobile Number
  MOBILE: /^[6-9]\d{9}$/,

  // Email
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,

  // Aadhaar Number (12 digits)
  AADHAAR: /^\d{12}$/,

  // PAN Card
  // Example: ABCDE1234F
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,

  // Indian Voter ID
  // Example: ABC1234567
  VOTER_ID: /^[A-Z]{3}[0-9]{7}$/,

  // Strong Password
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,

  // Pincode
  PINCODE: /^[1-9][0-9]{5}$/,

  // Name
  NAME: /^[a-zA-Z\s]{2,50}$/,

  // Username
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
};

// REGEX.MOBILE.test(mobile) use like this
