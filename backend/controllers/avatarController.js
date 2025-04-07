import Avatar from '../models/avatarModel.js';

export const getAllAvatars = async (req, res) => {
  try {
    const avatars = await Avatar.find();
    res.status(200).json(avatars);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching avatars', error: err });
  }
};

export const addAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;
    const newAvatar = new Avatar({ avatar });
    await newAvatar.save();
    res.status(201).json(newAvatar);
  } catch (err) {
    res.status(500).json({ message: 'Error saving avatar', error: err });
  }
};
