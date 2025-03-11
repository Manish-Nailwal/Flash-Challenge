import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  email: { type: String, default: "" },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },
  bio: {type: String, default: ""},
  avatar: {type: String, default: "https://res.cloudinary.com/dojqjc99q/image/upload/v1741285039/FlashGame_DEV/avatars/g0ek3r5sld6uwl1pxowt.png"}
});

export default mongoose.model("User", userSchema);
