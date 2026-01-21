import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      select: false,
    },

    // Forgot password fields
    resetPasswordToken: {
      type: String
    },
    resetPasswordExpire: {
      type: Date
    }
  },
  { timestamps: true }
);

// Create User Model
export default mongoose.model("User", userSchema);
