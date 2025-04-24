import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { verifyToken } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError('Authentication invalid');
  }

  try {
    const { userId, role } = verifyToken(token);

    const testUser = userId === '6805f2cc9a2314bf77c7d1ca';

    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

export const authorizePermissions =
  (...roles) =>
  (req, res, next) => {
    console.log('roles>>>', roles);
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Not authorized to access this route');
    }
    next();
  };

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!!!');
  next();
};
