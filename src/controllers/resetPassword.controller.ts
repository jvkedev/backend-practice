import { Request, Response, NextFunction } from "express";
import crypto from "crypto"
import User from "../models/user.model.js";
import { hashPassword } from "../utils/password.js"

// User Reset Password Controller
export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const resetToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Token invalid or expired" });
    }

    const newPassword = await hashPassword(req.body.password);

    user.password = newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;

    await user.save();

    res.status(200).json({
      message: "Password reset successfully",
    });
  } catch (error) {
    next(error);
  }
};
