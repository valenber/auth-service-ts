import request from 'supertest';
import { createRouter } from './router';
import { authRepository } from './repositories/auth';

jest.mock('./repositories/auth');

const router = createRouter(authRepository);

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(router).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
