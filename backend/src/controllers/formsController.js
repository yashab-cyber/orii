import ContactMessage from '../models/ContactMessage.js';
import Application from '../models/Application.js';
import { asyncHandler } from '../middleware/validate.js';

export const submitContact = asyncHandler(async (req, res) => {
  const doc = await ContactMessage.create(req.validated);
  res.status(201).json({ success: true, id: doc._id });
});

export const submitApplication = asyncHandler(async (req, res) => {
  const doc = await Application.create(req.validated);
  res.status(201).json({ success: true, id: doc._id });
});
