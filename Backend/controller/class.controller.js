import Class from "../model/classes.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/student.model.js";

export const createClass = async (req, res) => {
  try {
    const { classId, section, classTeacherId, studentsId, subject } = req.body;
    if (!classTeacherId || !studentsId) {
      return res
        .status(400)
        .json({ success: false, message: "field are required " });
    }

    const teacherId = await Teacher.findById(classTeacherId);
    if (!teacherId) {
      return res
        .status(400)
        .json({ success: false, message: "teacher not found" });
    }
    const studentId = await Student.findById(studentsId);
    if (!studentId) {
      return res
        .status(400)
        .json({ success: false, message: "Student not found" });
    }
    const newClass = await Class.create({
      className: classId,
      section,
      classTeacher: classTeacherId,
      student: studentsId,
      subject,
    });

    res.status(201).json({
      success: true,
      message: "Class create successfully",
      class: newClass,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getClass = async (req, res) => {
  try {
    const classes = await Class.find().populate({
      path: "classTeacher",
      populate: { path: "user" },
    });

    res.status(200).json({ success: true, count: classes.length, classes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
