import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// login
const login = async (req, res) => {
  try {
    const { userId, password, score } = req.body;
    const user = await User.findOne({ userId });

    if (!user) {
      return res.json({
        success: false,
        message: "User Does not Exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      if (user.score < score) {
        user.score = score;
        await user.save();
      }
      return res.json({
        success: true,
        message: "Logged In Successfully",
        token,
      });
    }
    return res.json({
      success: false,
      message: "Invalid credential!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//register
const register = async (req, res) => {
  const { name, userId, password, score } = req.body;
  checkfn(name, userId, password, res);
  try {
    //checking for existing user
    const exist = await User.findOne({ userId });
    if (exist) {
      return res.json({
        success: false,
        message: "User already exist with same userId",
      });
    }

    //validating email and strong password

    // if (!validator.isEmail(email)) {
    //   return res.json({
    //     success: false,
    //     message: "Your email is not valid!!",
    //   });
    // }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Your password is Weak!!",
      });
    }

    // hash pass
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    // create new user

    const newUser = new User({ name, userId, password: hashpassword, score });
    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({
      success: true,
      message: "User register successfully",
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//get high score
const getScore = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findOne({ userId });

  if (!user) {
    return res.json({ success: false, message: "User does not Exist" });
  }
  res.json({
    success: true,
    highScore: user.highScore,
  });
};

//update prev high score
const updateScore = async (req, res) => {
  const { userId, score } = req.body;

  const user = await User.findById({ userId });
  if (score > user.score) {
    user.score = score;
    await user.save();
  }

  return res.json({
    success: true,
    user,
  });
};

export { login, register, getScore, updateScore };

let checkfn = (name, userId, password, res) => {
  if (name != "") {
    if (userId != "") {
      if (!password.length > 0) {
        res.json({
          success: false,
          message: "password is req",
        });
      }
    } else {
      res.json({
        success: false,
        message: "userId is req",
      });
    }
  } else {
    res.json({
      success: false,
      message: "name is req",
    });
  }
};
