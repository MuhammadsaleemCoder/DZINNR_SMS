import User from "../model/user.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Class from "../model/classes.model.js";

export const getMyClass = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ user: req.user.id });

    const classes = await Class.find({ classTeacher: teacher._id });

    const totalClass = await Class.countDocuments({
      classTeacher: teacher._id,
    });

    res.status(200).json({ success: true, classes, totalClass });
    console.log(classes);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};
