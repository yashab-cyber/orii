import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Open', 'Active', 'Completed'], default: 'Active' },
    contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    requests: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
      },
    ],
    tech: [{ type: String }],
    githubUrl: { type: String },
    demoUrl: { type: String },
    lead: { type: String },
    funding: { type: String },
    startDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
