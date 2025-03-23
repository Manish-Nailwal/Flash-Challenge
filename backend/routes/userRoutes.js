import express from "express";

import {
  getScore,
  login,
  register,
  updateScore,
  updateUser,
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";


const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/score", updateScore);
userRouter.get("/score", getScore);
userRouter.post("/verify", userAuth);
userRouter.post("/update", updateUser);

export default userRouter;
