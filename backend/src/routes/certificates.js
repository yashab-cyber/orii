import { Router } from 'express';
import { auth, requireRoles } from '../middleware/auth.js';
import { listMyCertificates, issueCertificate, verifyCertificate } from '../controllers/certificateController.js';

const router = Router();
router.use(auth);
router.get('/mine', listMyCertificates);
router.post('/issue', requireRoles('lead', 'admin'), issueCertificate);
// Public verify endpoint (no auth)
const pub = Router();
pub.get('/verify/:id', verifyCertificate);

export { pub as certificatesPublicRouter };

export default router;
