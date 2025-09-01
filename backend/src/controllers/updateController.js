import Update from '../models/Update.js';

export const submitUpdate = async (req, res) => {
  const { title, description, projectId } = req.body;
  const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
  const upd = await Update.create({ title, description, projectId, userId: req.user._id, fileUrl });
  res.status(201).json(upd);
};

export const listMyUpdates = async (req, res) => {
  const upds = await Update.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(upds);
};

export const reviewUpdate = async (req, res) => {
  const { status } = req.body; // Approved/Rejected
  const upd = await Update.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!upd) return res.status(404).json({ message: 'Not found' });
  res.json(upd);
};
