import { Request, Response, NextFunction } from "express";
import feeling from "../models/feeling.model.js";

export const feelingController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await feeling.create(req.body);

    res.status(200).json({ message: "she likes you" });
  } catch (error) {
    next(error);
  }
};
