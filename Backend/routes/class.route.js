import express from "express";
import { createClass, getClass } from "../controller/class.controller.js";
const router = express.Router();

router.post("/class", createClass);
router.get("/class", getClass);

export default router;
