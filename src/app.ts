import express from "express";
import healthRoute from "./routes/health.route.js";
import authRoute from "./routes/auth.routes.js";
import feelingRouter from "./routes/feelings.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use("/auth", authRoute);
app.use("/", feelingRouter);
app.use("/health", healthRoute);

// Test route to force an error
app.get("/force-error", (_req, _res, next) => {
  const err = new Error("Something went wrong");
  next(err);
});

app.use(errorHandler);

export default app;
