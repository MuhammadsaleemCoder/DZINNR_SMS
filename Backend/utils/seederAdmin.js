import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const seederAdmin = async () => {
  try {
    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!admin) {
      const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      await User.create({
        name: "saleem",
        email: process.env.ADMIN_EMAIL,
        password: hashPassword,
        role: "process.env.ADMIN",
      });
      console.log("Admin created successfully");
    } else {
      console.log("User already created");
    }
  } catch (error) {
    console.log("Error creating admin", error.message);
  }
};
