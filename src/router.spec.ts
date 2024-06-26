import request from 'supertest';
import { createRouter } from './router';
import { createAuthStore } from './store/auth';
import { createAuthRepository } from './repositories/auth';

const store = createAuthStore();
const authRepository = createAuthRepository(store);
const router = createRouter(authRepository);

describe('GET /', () => {
  it('returns 404 on unhandled root', async () => {
    const res = await request(router).get('/abyrvalg');

    expect(res.status).toBe(404);
  });
});
