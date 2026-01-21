import app from "./app.js";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.config.js";

// Load environment variable
dotenv.config();

// Define the port
const PORT = process.env.PORT || 3000;

// Start server function
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(colors.cyan.bold(`Server running at http://localhost:${PORT}`));
  });
};

startServer();
