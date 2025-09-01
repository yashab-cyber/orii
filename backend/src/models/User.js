import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['member', 'lead', 'admin'], default: 'member' },
    institution: { type: String },
    bio: { type: String },
    researchInterests: [{ type: String }],
    avatarUrl: { type: String },
    emailVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetToken: { type: String },
    resetTokenExp: { type: Date },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    certificates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' }],
    active: { type: Boolean, default: true },
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
