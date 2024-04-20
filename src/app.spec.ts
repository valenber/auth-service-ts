import request from 'supertest';
import { createApp } from './app';

const app = createApp();

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(app).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
