import { createRouter } from './router';
import { appConfig } from 'config';

const { port } = appConfig;

// Router <-- Services <-- DataRepositories

const router = createRouter();

router.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
