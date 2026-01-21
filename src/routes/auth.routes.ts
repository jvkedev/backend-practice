import { Router } from "express";
import { registerUser, loginUser, forgotPassword } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { resetPassword } from "../controllers/resetPassword.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword )

router.get("/test", protect, (req, res) => {
    res.json({
        message: "You are authorized",
        userId: (req as any).user
    })
})

export default router;
