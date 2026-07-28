import Class from "../model/classes.model.js";
import Teacher from "../model/teacher.model.js";
import Student from "../model/teacher.model.js";

export const createClass = async (req, res) => {
  try {
    const { className, section, classTeacherId, studentsId, subject } =
      req.body;
    if (!classTeacherId || !studentsId) {
      return res
        .status(400)
        .json({ success: false, message: "teacher not found  " });
    }

    const teacherId = await Teacher.findById(classTeacherId);
    if (!teacherId) {
      return res
        .status(400)
        .json({ success: false, message: "teacher not found" });
    }
    const studentId = await Teacher.findById(studentsId);
    if (!student) {
      return res
        .status(400)
        .json({ success: false, message: "Field are required" });
    }
    const newClass = await Class.create({
      className,
      section,
      classTeacher: classTeacherId,
      students: studentsId,
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
    const classes = await Class.find();
    res.status(200).json({ success: true, count: classes.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
