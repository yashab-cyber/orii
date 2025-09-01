import crypto from 'crypto';
import Certificate from '../models/Certificate.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import { generateCertificate } from '../utils/certificates.js';

export const listMyCertificates = async (req, res) => {
  const certs = await Certificate.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(certs);
};

export const issueCertificate = async (req, res) => {
  const { userId, projectId, summary } = req.body;
  const user = await User.findById(userId);
  const project = await Project.findById(projectId);
  if (!user || !project) return res.status(404).json({ message: 'User or project not found' });
  const certificateId = crypto.randomUUID();
  const { publicPath, verifyUrl } = await generateCertificate({
    userName: user.name,
    projectTitle: project.title,
    summary: summary || 'Significant contribution to the project',
    certificateId,
  });
  const cert = await Certificate.create({ userId, projectId, certificateId, certificateUrl: publicPath, qrCode: verifyUrl });
  res.status(201).json(cert);
};

export const verifyCertificate = async (req, res) => {
  const { id } = req.params; // certificateId
  const cert = await Certificate.findOne({ certificateId: id }).populate('userId', 'name').populate('projectId', 'title');
  if (!cert) return res.status(404).json({ valid: false });
  return res.json({ valid: true, certificate: cert });
};
