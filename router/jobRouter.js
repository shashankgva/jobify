import { Router } from 'express';
import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
  showStats,
} from '../controllers/jobController.js';
import {
  validateJobInput,
  validateJobId,
} from '../middlewares/validationHandler.js';
import { checkForTestUser } from '../middlewares/authMiddleware.js';

const router = Router();

// router.get('/', getJobs);
// router.post('/', createJob);
// router.put('/:id', updateJob);
// router.delete('/:id', deleteJob);

// create routes by chaining them
router
  .route('/')
  .get(getJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateJobId, getJob)
  .put(checkForTestUser, validateJobId, validateJobInput, updateJob)
  .delete(checkForTestUser, validateJobId, deleteJob);

export default router;
