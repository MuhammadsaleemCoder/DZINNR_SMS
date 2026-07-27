import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/dzinnr-sms")
      .then(() => console.log("Database connected"));
  } catch (error) {
    console.log("Error to creating database");
  }
};

export default connectDb;
