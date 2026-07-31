import express from "express";
import { createClass, getClass } from "../controller/class.controller.js";
import { protect } from "../middlewares/protect.middleware.js";
const router = express.Router();

router.post("/class", protect, createClass);
router.get("/class", protect, getClass);

export default router;
