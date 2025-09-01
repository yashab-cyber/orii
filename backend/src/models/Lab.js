import mongoose from 'mongoose';

const LabSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: String,
    focus: [{ type: String }],
    stats: {
      projects: Number,
      researchers: Number,
      publications: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Lab', LabSchema);
