import { api } from './app';
import { appConfig } from 'config';

const { port } = appConfig;

function init() {
  api.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

init();
