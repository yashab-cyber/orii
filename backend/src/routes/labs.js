import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { labSchema } from '../validation/schemas.js';
import * as ctrl from '../controllers/labsController.js';

const router = Router();
router.get('/', ctrl.list);
router.get('/:slug', ctrl.getBySlug);
router.post('/', validate(labSchema), ctrl.create);
router.put('/:slug', validate(labSchema.partial()), ctrl.update);
router.delete('/:slug', ctrl.remove);

export default router;
