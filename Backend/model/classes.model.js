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
    // students: {
    //   type: String,
    //   ref: "Student",
    // },

    totalStudent: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

classSchema.index({ className: 1, section: 1 }, { unique: true });

const Class = mongoose.model("Class", classSchema);
export default Class;
