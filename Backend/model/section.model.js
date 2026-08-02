import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ["A", "B", "C", "D"],
    default: "A",
  },
});

const Section = mongoose.model("Section", sectionSchema);
export default Section;
