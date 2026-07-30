import express from "express";
const router = express.Router();

import {
  createTeacher,
  getTeacher,
  createStudent,
  getStudents,
} from "../controller/adminUserManagement.controller.js";

router.post("/teachers", createTeacher);
router.get("/teachers", getTeacher);
router.post("/students", createStudent);
router.get("/students", getStudents);

export default router;
