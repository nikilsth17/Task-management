import mongoose from "mongoose";

// Create schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 55,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: ["pending", "in-progress", "completed"],
    },
    userId: {
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create model
export const Task = mongoose.model("Task", taskSchema);
