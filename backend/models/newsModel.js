import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String,  },
  excerpt: { type: String, required: true },
  image: { type: String },
  link: {type: String}
});

export default mongoose.model("New", newsSchema);
