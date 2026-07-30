import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  phone: {
    type: Number,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  fatherPhone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      "Active",
      "Inactive",
      "Suspended",
      "Graduated",
      "Transferred",
      "Dropped",
    ],
  },

  createdAt: Date,
  updatedAt: Date,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
