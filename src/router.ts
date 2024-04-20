import express, { Express } from 'express';
import { AuthRepository } from 'repositories/auth';
import { createLoginService } from 'services/login';

/** Connects the services to the app */
function createRouter(authRepository: AuthRepository): Express {
  const router = express();

  // general middleware
  router.use(express.static('src/ui'));
  router.use(express.urlencoded({ extended: false }));

  // services
  const loginService = createLoginService(authRepository);
  loginService.registerRoutes(router);

  return router;
}

export { createRouter };
