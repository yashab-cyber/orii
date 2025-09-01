import Project from '../models/Project.js';
import User from '../models/User.js';

export const listAssigned = async (req, res) => {
  const projects = await Project.find({ contributors: req.user._id }).sort({ createdAt: -1 });
  res.json(projects);
};

export const listOpen = async (req, res) => {
  const projects = await Project.find({ status: { $in: ['Open', 'Active'] } }).sort({ createdAt: -1 });
  res.json(projects);
};

export const requestJoin = async (req, res) => {
  const { projectId } = req.body;
  const project = await Project.findById(projectId);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  // naive: auto-add a pending request array
  project.requests = project.requests || [];
  if (project.requests.find((r) => r.user.toString() === req.user._id.toString())) {
    return res.status(409).json({ message: 'Already requested' });
  }
  project.requests.push({ user: req.user._id, status: 'Pending' });
  await project.save();
  res.json({ message: 'Join request submitted' });
};

export const details = async (req, res) => {
  const p = await Project.findById(req.params.id).populate('contributors', 'name email');
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
};
