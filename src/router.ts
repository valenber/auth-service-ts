import express, { Express } from 'express';

function createRouter(): Express {
  const server: Express = express();
  server.use(express.static('src/ui'));

  server.get('/login', function (_, res) {
    res.sendFile('src/ui/login.html', { root: '.' });
  });

  return server;
}

export { createRouter };