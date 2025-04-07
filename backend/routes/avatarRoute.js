import express from 'express';
import { addAvatar, getAllAvatars } from '../controllers/avatarController.js';


const avatarRouter = express.Router();

avatarRouter.get('/', getAllAvatars);
avatarRouter.post('/', addAvatar);

export default avatarRouter;
