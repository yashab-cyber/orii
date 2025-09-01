import Publication from '../models/Publication.js';
import { asyncHandler } from '../middleware/validate.js';

export const list = asyncHandler(async (req, res) => {
  const items = await Publication.find().sort({ createdAt: -1 });
  res.json(items);
});

export const getById = asyncHandler(async (req, res) => {
  const item = await Publication.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

export const create = asyncHandler(async (req, res) => {
  const item = await Publication.create(req.validated);
  res.status(201).json(item);
});

export const update = asyncHandler(async (req, res) => {
  const item = await Publication.findByIdAndUpdate(req.params.id, req.validated, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

export const remove = asyncHandler(async (req, res) => {
  const item = await Publication.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
});
