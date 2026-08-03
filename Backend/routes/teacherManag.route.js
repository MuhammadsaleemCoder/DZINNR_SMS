import express from "express";

import { protect } from "../middlewares/protect.middleware.js";
import { authorized } from "../middlewares/authorizedUser.middlewares.js";

import {
  getMyClass,
  getProfile,
} from "../controller/teacherManag.controller.js";
const router = express.Router();

router.get("/myClass", protect, authorized("teacher"), getMyClass);
router.get("/myProfile", protect, authorized("teacher"), getProfile);

export default router;
