import express from "express";
const router = express.Router();

import { protect } from "../middlewares/protect.middleware.js";
import { authorized } from "../middlewares/authorizedUser.middlewares.js";
import { getProfile } from "../controller/studenManag.controller.js";

router.get("/myProfile", protect, authorized("student"), getProfile);

export default router;
