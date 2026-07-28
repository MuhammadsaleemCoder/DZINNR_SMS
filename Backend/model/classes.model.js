import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
    students: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    subject: {
      type: String,
      required: true,
    },
    totalStudent: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Class = mongoose.model("Class", classSchema);
export default Class;
