import express from "express";
const router = express.Router();

import {
  createTeacher,
  getTeacher,
  createStudent,
  getStudents,
} from "../controller/adminUserManagement.controller.js";

router.post("/createTeacher", createTeacher);
router.get("/teachers", getTeacher);
router.post("/createStudent", createStudent);
router.get("/students", getStudents);

export default router;
