import express from 'express';
import { ApplicationService } from './entities';
import { AuthRepository } from 'repositories/auth';

export interface LoginService extends ApplicationService {}

export function createLoginService(repository: AuthRepository): LoginService {
  console.log('repository', typeof repository);

  return {
    registerRoutes: function (router) {
      router.use(express.static('src/ui'));

      router.get('/login', function (_, res) {
        res.sendFile('src/ui/login.html', { root: '.' });
      });

      router.use(express.urlencoded({ extended: false }));

      router.post('/login', function (req, res) {
        res.json({ message: 'OK', ...req.body });
      });
    }
  };
}
