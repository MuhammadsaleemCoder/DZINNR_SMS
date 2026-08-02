import User from "../model/user.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Class from "../model/classes.model.js";

export const createTeacher = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      department,
      subject,

      qualification,
      experience,
      status,
      img,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      role: "teacher",
      password: hashPassword,
    });

    const newTeacher = await Teacher.create({
      user: newUser._id,
      phone,
      department,
      subject,
      qualification,
      experience,
      status,
      img,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "Teacher create successfully",
      teacher: newTeacher,
    });
    console.log(req.cookie);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server side error",
      error: error.message,
    });
  }
};

export const getTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find().populate("user");

    res.status(200).json({ success: true, count: teachers.length, teachers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server side error",
      error: error.message,
    });
  }
};

//Student
export const createStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      rollNumber,
      gender,
      dateOfBirth,
      fatherName,
      fatherPhone,
      address,
      profilePic,
      classes,
      admissionDate,
      status,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role: "student",
    });

    const newStudent = await Student.create({
      user: newUser._id,
      phone,
      rollNumber,
      gender,
      dateOfBirth,
      fatherName,
      fatherPhone,
      address,
      profilePic,
      classes,
      admissionDate,
      status,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      student: newStudent,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("user").populate("classes");

    res.status(200).json({ success: true, count: students.length, students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
