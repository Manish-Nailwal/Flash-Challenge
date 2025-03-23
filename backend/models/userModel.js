import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  email: { type: String, default: "" },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },
  bio: { type: String, default: "" },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dojqjc99q/image/upload/v1741285039/FlashGame_DEV/avatars/g0ek3r5sld6uwl1pxowt.png",
  },
  key: { type: Number, default: 0 },
  progress: { type: [Number], default: [0, 0, 0, 0, 0] },
  claim: { type: [Boolean], default: [false, false, false, false, false] },
  lastReset: { type: String, default: new Date().toDateString() },
});

userSchema.methods.resetDaily = function () {
  const today = new Date().toDateString();
  if (this.lastReset !== today) {
    this.progress = [0, 0, 0, 0, 0];
    this.claim = [false, false, false, false, false];
    this.lastReset = today;
  }
};

userSchema.methods.updateProgress = function (index) {
  this.resetDaily();
  if (index >= 0 && index < this.progress.length) {
    ++this.progress[index];
  }
};

userSchema.methods.claimReward = function (index) {
  this.resetDaily();
  if (index >= 0 && index < this.claim.length) {
    this.claim[index] = true;
    ++this.key;
  }
};
export default mongoose.model("User", userSchema);
