import mongoose from "mongoose";

const avatarSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

export default mongoose.model('Avatar', avatarSchema);
