import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { publicationSchema } from '../validation/schemas.js';
import * as ctrl from '../controllers/publicationsController.js';

const router = Router();
router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', validate(publicationSchema), ctrl.create);
router.put('/:id', validate(publicationSchema.partial()), ctrl.update);
router.delete('/:id', ctrl.remove);

export default router;
