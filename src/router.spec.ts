import request from 'supertest';
import { createRouter } from './router';

const router = createRouter();

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(router).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
