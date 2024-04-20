import express, { Express, Response } from 'express';

function createServer(): Express {
  const server: Express = express();

  server.get('/', (_, res: Response) => {
    res.send('Express is running!');
  });

  return server;
}

export { createServer };
