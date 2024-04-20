import { createServer } from './app';
import { appConfig } from 'config';

const { port } = appConfig;

const server = createServer();

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
