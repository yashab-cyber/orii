import crypto from 'crypto';
import User from '../models/User.js';
import { hashPassword, comparePassword, signToken } from '../utils/auth.js';
import { sendMail } from '../utils/mailer.js';

const baseAppUrl = process.env.APP_URL || 'http://localhost:5173';

export const signup = async (req, res) => {
  const { name, email, institution, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already registered' });
  const hashed = await hashPassword(password);
  const verificationToken = crypto.randomBytes(24).toString('hex');
  const user = await User.create({ name, email, institution, password: hashed, verificationToken });
  const link = `${baseAppUrl}/verify?token=${verificationToken}`;
  try {
    await sendMail({ to: email, subject: 'Verify your ORII account', html: `<p>Welcome ${name}! Verify: <a href="${link}">${link}</a></p>` });
  } catch (_) {
    // ignore email failures in dev
  }
  return res.status(201).json({ message: 'Signup successful. Check your email to verify.' });
};

export const verifyEmail = async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({ verificationToken: token });
  if (!user) return res.status(400).json({ message: 'Invalid token' });
  user.emailVerified = true;
  user.verificationToken = undefined;
  await user.save();
  return res.json({ message: 'Email verified' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = await comparePassword(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  if (!user.emailVerified) return res.status(403).json({ message: 'Please verify your email' });
  const token = signToken({ id: user._id, role: user.role });
  const safe = user.toObject();
  delete safe.password;
  return res.json({ token, user: safe });
};

export const me = async (req, res) => {
  return res.json({ user: req.user });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: 'If that email exists, a reset link has been sent.' });
  const token = crypto.randomBytes(24).toString('hex');
  user.resetToken = token;
  user.resetTokenExp = new Date(Date.now() + 1000 * 60 * 60); // 1h
  await user.save();
  const link = `${baseAppUrl}/reset-password?token=${token}`;
  try {
    await sendMail({ to: email, subject: 'Reset your ORII password', html: `<p>Reset link: <a href="${link}">${link}</a></p>` });
  } catch (_) {
    // ignore email failures in dev
  }
  return res.json({ message: 'If that email exists, a reset link has been sent.' });
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  const user = await User.findOne({ resetToken: token, resetTokenExp: { $gt: new Date() } });
  if (!user) return res.status(400).json({ message: 'Invalid or expired token' });
  user.password = await hashPassword(password);
  user.resetToken = undefined;
  user.resetTokenExp = undefined;
  await user.save();
  return res.json({ message: 'Password updated' });
};

export const updateProfile = async (req, res) => {
  const { name, institution, bio, researchInterests } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, institution, bio, researchInterests },
    { new: true }
  ).select('-password');
  return res.json({ user });
};

// Dev-only helper to verify by email (disabled in production)
export const devVerify = async (req, res) => {
  if (process.env.ALLOW_DEV_VERIFY !== 'true') return res.status(403).json({ message: 'Forbidden' });
  const { email } = req.body;
  const user = await User.findOneAndUpdate({ email }, { emailVerified: true, verificationToken: undefined }, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.json({ message: 'Verified', user });
};
