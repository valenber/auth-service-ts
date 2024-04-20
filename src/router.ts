import express, { Express } from 'express';
import { AuthRepository } from 'repositories/auth';

function createRouter(authRepository: AuthRepository): Express {
  console.log('authRepository', typeof authRepository);

  const router = express();
  router.use(express.static('src/ui'));

  router.get('/login', function (_, res) {
    res.sendFile('src/ui/login.html', { root: '.' });
  });

  return router;
}

export { createRouter };
