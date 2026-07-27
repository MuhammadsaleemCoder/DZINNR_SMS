import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import { seederAdmin } from "./utils/seederAdmin.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

dotenv.config();
connectDb().then(() => seederAdmin());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("backend start");
});
