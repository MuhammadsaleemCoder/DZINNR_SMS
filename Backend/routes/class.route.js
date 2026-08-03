import express from "express";
import { createClass, getClass } from "../controller/class.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

import { authorized } from "../middlewares/authorizedUser.middlewares.js";
const router = express.Router();

router.post("/class", protect, authorized("admin"), createClass);
router.get("/class", protect, authorized("admin"), getClass);

export default router;
