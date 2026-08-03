import User from "../model/user.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Class from "../model/classes.model.js";

export const getProfile = async (req, res) => {
  try {
    const student = await Student.findOne({ user: req.user.id })
      .populate({
        path: "classes",
        populate: {
          path: "classTeacher",
          populate: {
            path: "user",
          },
        },
      })
      .populate("user");
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    res.status(200).json({ success: true, student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server side error" });
  }
};
