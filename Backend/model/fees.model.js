import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    feeType: {
      type: String,
      enum: ["tuition", "admission", "exam", "transport", "hostel", "other"],
      default: "tuition",
    },
    month: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    dueAmount: {
      type: Number,
      default: 0,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    paidDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["paid", "unpaid", "partial", "overdue"],
      default: "unpaid",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "bank_transfer", "card", "online"],
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

feeSchema.pre("save", async function () {
  this.dueAmount = this.totalAmount - this.paidAmount;

  if (this.paidAmount === 0) {
    this.status = "unpaid";
  } else if (this.paidAmount >= this.totalAmount) {
    this.status = "paid";
  } else {
    this.status = "partial";
  }
});

feeSchema.index({ student: 1, month: 1, feeType: 1 }, { unique: true });

const Fee = mongoose.model("Fee", feeSchema);
export default Fee;
