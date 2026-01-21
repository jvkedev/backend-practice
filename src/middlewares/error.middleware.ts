import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);

  // Handle specific errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  // Handle duplicate key error (MongoDB)
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate field value",
    });
  }

  // Default to 500
  const statusCode = err.status || 500;
  const message =
    process.env.NODE_ENV === "development"
      ? err.message
      : "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
};
