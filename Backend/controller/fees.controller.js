import Fee from "../model/fees.model.js";
import Student from "../model/student.model.js";
import Class from "../model/classes.model.js";

// 1. Create Fee Record
export const createFee = async (req, res) => {
  try {
    const { student, feeType, month, totalAmount, dueDate, remarks } = req.body;

    if (!student || !month || !totalAmount || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // Student se class khud nikal lete hain (frontend se classId lena zaroori nahi)
    const studentExists = await Student.findById(student);
    if (!studentExists) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const existingFee = await Fee.findOne({
      student,
      month,
      feeType: feeType || "tuition",
    });
    if (existingFee) {
      return res.status(400).json({
        success: false,
        message:
          "Fee record already exists for this student, month, and fee type",
      });
    }

    const fee = await Fee.create({
      student,
      class: studentExists.classes, // Student document se liya
      feeType,
      month,
      totalAmount,
      dueDate,
      remarks,
    });

    res.status(201).json({
      success: true,
      message: "Fee record created successfully",
      fee,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
