import express from "express";
import { createFee } from "../controller/fees.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

import { authorized } from "../middlewares/authorizedUser.middlewares.js";
const router = express.Router();

router.post("/fee", protect, authorized("admin"), createFee);

export default router;
