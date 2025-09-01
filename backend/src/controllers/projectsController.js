import Project from '../models/Project.js';
import { asyncHandler } from '../middleware/validate.js';

export const list = asyncHandler(async (req, res) => {
  const { category, status } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;
  const items = await Project.find(filter).sort({ createdAt: -1 });
  res.json(items);
});

export const getById = asyncHandler(async (req, res) => {
  const item = await Project.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

export const create = asyncHandler(async (req, res) => {
  const item = await Project.create(req.validated);
  res.status(201).json(item);
});

export const update = asyncHandler(async (req, res) => {
  const item = await Project.findByIdAndUpdate(req.params.id, req.validated, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

export const remove = asyncHandler(async (req, res) => {
  const item = await Project.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
});
