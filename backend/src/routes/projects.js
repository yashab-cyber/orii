import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { projectSchema } from '../validation/schemas.js';
import * as ctrl from '../controllers/projectsController.js';

const router = Router();
router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', validate(projectSchema), ctrl.create);
router.put('/:id', validate(projectSchema.partial()), ctrl.update);
router.delete('/:id', ctrl.remove);

export default router;
