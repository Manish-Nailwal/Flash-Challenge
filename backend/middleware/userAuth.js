import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const userAuth = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.json({
        success: false,
        message: token,
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(token_decode.id);
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid Token!!",
      });
    }
    user.resetDaily();
    await user.save();
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default userAuth;
