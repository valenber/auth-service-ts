import { ApplicationService } from './entities';
import { AuthRepository } from 'repositories/auth';

export interface LoginService extends ApplicationService {}

export function createLoginService(repository: AuthRepository): LoginService {
  console.log('repository', typeof repository);

  return {
    registerRoutes: function (router) {
      router.get('/login', function (_, res) {
        res.sendFile('src/ui/login.html', { root: '.' });
      });

      router.post('/login', function (req, res) {
        res.json({ message: 'OK', ...req.body });
      });
    }
  };
}
