import { createApp } from './app';
import { appConfig } from 'config';

const { port } = appConfig;

const app = createApp();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
