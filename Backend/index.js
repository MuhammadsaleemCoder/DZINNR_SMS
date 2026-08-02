import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import { seederAdmin } from "./utils/seederAdmin.js";
import authRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/adminUserManag.route.js";
import classRouter from "./routes/class.route.js";
import teacherManagRoute from "./routes/teacherManag.route.js";
import studentManag from "./routes/studentManag.route.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
connectDb().then(() => seederAdmin());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/admin", classRouter);

//teacher route
app.use("/api/teacher", teacherManagRoute);

// student  route
app.use("/api/student", studentManag);
app.get("/cookie", (req, res) => {
  console.log(req.cookies);
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("backend start");
});
