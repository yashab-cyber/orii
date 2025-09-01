import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    institution: String,
    researchArea: String,
    github: String,
    linkedin: String,
    whyJoin: String,
    experience: String,
    availability: String,
  },
  { timestamps: true }
);

export default mongoose.model('Application', ApplicationSchema);
