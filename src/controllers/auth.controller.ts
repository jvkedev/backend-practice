import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.js";
import { generateResetToken } from "../utils/resetToken.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import sendEmail from "../utils/sendEmail.js";
import { generateToken } from "../utils/jwt.js";

// User Registration Controller
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Send response
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// User Login Controller
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    // Find user by email and always send password
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists and password correct
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken({ id: user._id.toString() });

    // Send response
    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// User Forgot Password Controller
export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({
        message: "User not found",
      });
    }

    const { token, hashedToken } = generateResetToken();

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    const resetLink = `http://localhost:5000/reset-password/${token}`;

    await sendEmail({
      to: user.email,
      subject: "Reset your password",
      text: `Click here to reset  your password: ${resetLink}`,
    });
    res.status(200).json({
      message: "Reset password email sent",
    });
  } catch (error) {
    next(error);
  }
};
