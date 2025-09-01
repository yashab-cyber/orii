import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    audience: { type: String, enum: ['all', 'members', 'leads'], default: 'all' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    publishAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('Announcement', announcementSchema);
