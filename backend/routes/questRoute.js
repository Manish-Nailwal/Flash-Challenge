import express from "express"
import { claimReward, createQuest, getQuest, resetUser, updateProgress } from "../controllers/questController.js";

const questRouter = express.Router();

questRouter.get('/',getQuest);

questRouter.post('/create',createQuest);

questRouter.put('/progress',updateProgress);

questRouter.put('/claim',claimReward);

questRouter.put('/reset',resetUser)



export default questRouter;