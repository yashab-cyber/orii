import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  certificateId: { type: String, required: true, unique: true },
    certificateUrl: { type: String, required: true },
    qrCode: { type: String },
    issuedAt: { type: Date, default: Date.now },
    meta: { type: Object },
  },
  { timestamps: true }
);

export default mongoose.model('Certificate', certificateSchema);
