import { Router } from 'express';
import { listAnnouncements } from '../controllers/adminController.js';

const router = Router();
router.get('/', listAnnouncements);

export default router;
