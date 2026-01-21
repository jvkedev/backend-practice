import mongoose from "mongoose";

const feelingSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // mood: {
  //   type: String,
  //   required: true,
  // },
});

export default mongoose.model("Feeling", feelingSchema);
