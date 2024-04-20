import { authRepository } from 'repositories/auth';
import { createRouter } from './router';
import { appConfig } from 'config';

const { port } = appConfig;

// Repositories --> Router --> Services

const router = createRouter(authRepository);

router.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
