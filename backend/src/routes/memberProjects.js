import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { listAssigned, listOpen, requestJoin, details } from '../controllers/projectController.js';

const router = Router();
router.use(auth);
router.get('/assigned', listAssigned);
router.get('/open', listOpen);
router.post('/join', requestJoin);
router.get('/:id', details);

export default router;
