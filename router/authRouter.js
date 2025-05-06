import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middlewares/validationHandler.js';
import rateLimiter from 'express-rate-limit';

const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 1,
  message: { msg: 'IP rate limit exceeded. Retry in 15 mins.' },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);

export default router;
