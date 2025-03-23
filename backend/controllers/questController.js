import Quest from "../models/questModel.js";
import User from "../models/userModel.js";

const getQuest = async (req, res) => {
  const allQuest = await Quest.find({});
  return res.json({
    success: true,
    allQuest,
  });
};

const createQuest = async (req, res) => {
  const { name, target, reward, progressCalculation } = req.body;
  const newQuest = new Quest({
    name,
    target,
    reward,
    progressCalculation,
  });
  await newQuest.save();
  res.json({ newQuest });
};

const updateProgress = async (req, res) => {
  const { userId, idx, value } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    user.updateProgress(idx, value);
    await user.save();
    res.json({ success: true, message: "Progress updated", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const claimReward = async (req, res) => {
  const { userId, idx } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    user.claimReward(idx);
    await user.save();
    res.json({ success: true, message: "Reward claimed", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const resetUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    user.resetDaily();
    await user.save();
    res.json({ success: true, message: "UserReset", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export { getQuest, createQuest, updateProgress, claimReward, resetUser };
