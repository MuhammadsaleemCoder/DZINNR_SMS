import express from "express";

import { protect } from "../middlewares/protect.middleware.js";
import { authorized } from "../middlewares/authorizedUser.middlewares.js";

import { getMyClass } from "../controller/teacherManag.controller.js";
const router = express.Router();

router.get("/myClass", protect, authorized("teacher"), getMyClass);

export default router;
