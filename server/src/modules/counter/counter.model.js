import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
  {
    idName: {
      type: String,
      required: true,
      unique: true,
    },

    sequence: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
