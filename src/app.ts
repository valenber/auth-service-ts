import express, { Express, Response } from 'express';

function createApp(): Express {
  const server: Express = express();
  server.use(express.static('src/ui'));

  server.get('/login', function (_, res: Response) {
    res.sendFile('src/ui/login.html', { root: '.' });
  });

  return server;
}

export { createApp };
