export const maskAadhaar = (aadhaar) => {
  return `XXXX-XXXX-${aadhaar.slice(-4)}`;
};

export const maskPAN = (pan) => {
  return `${pan.slice(0, 2)}XXXXXX${pan.slice(-2)}`;
};

export const maskVoterId = (voterId) => {
  return `${voterId.slice(0, 3)}XXXX${voterId.slice(-3)}`;
};
