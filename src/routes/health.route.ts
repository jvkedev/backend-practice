import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ status: "OK", message: "Server is healthy" });
  console.log("Health route reached");
});

export default router;
