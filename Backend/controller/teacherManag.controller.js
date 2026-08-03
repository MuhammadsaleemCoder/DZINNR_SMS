import User from "../model/user.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Class from "../model/classes.model.js";

export const getMyClass = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ user: req.user.id }).populate(
      "user",
    );

    const classes = await Class.find({ classTeacher: teacher._id }).populate({
      path: "classTeacher",
      populate: { path: "user" },
    });
    const totalClass = await Class.countDocuments({
      classTeacher: teacher._id,
    });

    res.status(200).json({ success: true, classes, totalClass });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ user: req.user.id }).populate(
      "user",
    );
    const user = await User.findOne({ id: teacher._d });
    console.log(user);
    res.status(200).json({ success: true, user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server side error", error });
  }
};
