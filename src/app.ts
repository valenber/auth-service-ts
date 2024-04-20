import express, { Express, Response } from 'express';

function createApp(): Express {
  const server: Express = express();

  server.get('/', (_, res: Response) => {
    res.send('Express is running!');
  });

  return server;
}

export { createApp };
