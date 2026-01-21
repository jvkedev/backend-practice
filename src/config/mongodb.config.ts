import mongoose from "mongoose";
import colors from "colors";

// MongoDB Connection URL
const MONGO_URL = process.env.MONGO_URL;

// Throw an error if the url is missing
if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined in .env file");
}

// Establish MongoDB connection
const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(colors.green.bold(`MongoDB Connected ${conn.connection.host}`));
  } catch (error) {
    console.error(colors.red.bold(`Error in mongoDB: ${error}`));
  }
};

export default connectDB;
