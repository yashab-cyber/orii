import { Router } from 'express';
import { auth, requireRoles } from '../middleware/auth.js';
import { approveMember, assignMemberToProject, manageAnnouncement, listAnnouncements } from '../controllers/adminController.js';

const router = Router();
router.use(auth, requireRoles('admin', 'lead'));
router.post('/approve/:id', approveMember);
router.post('/assign', assignMemberToProject);
router.post('/announcements', manageAnnouncement);
router.get('/announcements', listAnnouncements);

export default router;
