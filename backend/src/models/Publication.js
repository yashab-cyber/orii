import mongoose from 'mongoose';

const PublicationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: [{ type: String }],
    abstract: String,
    doi: String,
    url: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Publication', PublicationSchema);
