import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { contactSchema, applicationSchema } from '../validation/schemas.js';
import { submitContact, submitApplication } from '../controllers/formsController.js';

const router = Router();
router.post('/contact', validate(contactSchema), submitContact);
router.post('/applications', validate(applicationSchema), submitApplication);

export default router;
