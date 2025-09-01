import { Router } from 'express';
import { signup, verifyEmail, login, me, forgotPassword, resetPassword, updateProfile, devVerify } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js';

const router = Router();
router.post('/signup', signup);
router.get('/verify', verifyEmail);
router.post('/login', login);
router.get('/me', auth, me);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/profile', auth, updateProfile);
router.post('/dev-verify', devVerify);

export default router;
