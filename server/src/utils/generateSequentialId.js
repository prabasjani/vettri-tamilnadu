import Counter from "../modules/counter/counter.model.js";

export const generateSequentialId = async ({ idName, prefix }) => {
  const year = new Date().getFullYear();

  // Increment counter
  const counter = await Counter.findOneAndUpdate(
    { idName },
    {
      $inc: {
        sequence: 1,
      },
    },

    {
      new: true,
      upsert: true,
    },
  );

  // Format sequence
  const sequence = String(counter.sequence).padStart(6, "0");

  return `${prefix}-${year}-${sequence}`;
};
