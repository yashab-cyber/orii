import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const hashPassword = async (plaintext) => bcrypt.hash(plaintext, 10);
export const comparePassword = async (plaintext, hash) => bcrypt.compare(plaintext, hash);

export const signToken = (payload, opts = {}) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d', ...opts });
