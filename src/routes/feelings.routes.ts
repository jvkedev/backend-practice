import { Router } from "express";
import { feelingController } from "../controllers/feeling.controller.js";

const feelingRouter = Router();

feelingRouter.get("/confess-your-feelings", feelingController)

export default feelingRouter

