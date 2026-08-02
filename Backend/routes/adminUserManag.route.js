import express from "express";
const router = express.Router();

import {
  createTeacher,
  getTeacher,
  createStudent,
  getStudents,
} from "../controller/adminUserManagement.controller.js";
import { protect } from "../middlewares/protect.middleware.js";
import { authorized } from "../middlewares/authorizedUser.middlewares.js";

router.post("/teachers", protect, authorized("admin"), createTeacher);
router.get("/teachers", protect, authorized("admin"), getTeacher);
router.post("/students", protect, authorized("admin"), createStudent);
router.get("/students", protect, authorized("admin"), getStudents);
router.get("/students", protect, authorized("admin"), getStudents);

export default router;
