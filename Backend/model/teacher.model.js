import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    phone: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "On Leave"],
      default: "Active",
    },
    img: {
      url: String,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Teacher", teacherSchema);
export default Student;
