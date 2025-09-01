import Project from '../models/Project.js';
import Update from '../models/Update.js';
import User from '../models/User.js';
import Announcement from '../models/Announcement.js';

export const approveMember = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { active: true }, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
};

export const assignMemberToProject = async (req, res) => {
  const { userId, projectId } = req.body;
  const proj = await Project.findByIdAndUpdate(projectId, { $addToSet: { contributors: userId } }, { new: true });
  res.json(proj);
};

export const manageAnnouncement = async (req, res) => {
  const { title, content, audience } = req.body;
  const ann = await Announcement.create({ title, content, audience, createdBy: req.user._id });
  res.status(201).json(ann);
};

export const listAnnouncements = async (req, res) => {
  const anns = await Announcement.find().sort({ createdAt: -1 });
  res.json(anns);
};
