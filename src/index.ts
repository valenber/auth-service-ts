import { createAuthRepository } from 'repositories/auth';
import { createRouter } from './router';
import { appConfig } from 'config';
import { createAuthStore } from 'store/auth';

const { port } = appConfig;

// Store --> Repository --> Router --> Services

const store = createAuthStore();
const authRepository = createAuthRepository(store);
const router = createRouter(authRepository);

router.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
