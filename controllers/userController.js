import { StatusCodes } from 'http-status-codes';
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';
import User from '../models/User.js';
import Job from '../models/Job.js';

export const getCurrentUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const userBeforeUpdate = await User.findByIdAndUpdate(
    req.user.userId,
    newUser
  );

  if (req.file && userBeforeUpdate.avatarPublicId) {
    await cloudinary.uploader.destroy(userBeforeUpdate.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: 'User Updated Successfully' });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};
