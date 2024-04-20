import request from 'supertest';
import { createServer } from './app';

const server = createServer();

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(server).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
