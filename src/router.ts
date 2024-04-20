import express, { Express } from 'express';
import { AuthRepository } from 'repositories/auth';
import { createLoginService } from 'services/login';

/** Connects the services to the app */
function createRouter(authRepository: AuthRepository): Express {
  console.log('authRepository', typeof authRepository);

  const router = express();

  const loginService = createLoginService(authRepository);
  loginService.registerRoutes(router);

  return router;
}

export { createRouter };
