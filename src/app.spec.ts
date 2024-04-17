import request from 'supertest';
import { api } from './app';

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(api).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
