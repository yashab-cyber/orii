import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { auth, requireRoles } from '../middleware/auth.js';
import { submitUpdate, listMyUpdates, reviewUpdate } from '../controllers/updateController.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/zip'];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Invalid file type'));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 10 * 1024 * 1024 } });

const router = Router();
router.use(auth);
router.post('/submit', upload.single('file'), submitUpdate);
router.get('/mine', listMyUpdates);
router.patch('/:id/review', requireRoles('lead', 'admin'), reviewUpdate);

export default router;
