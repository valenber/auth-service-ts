import { AuthStore } from '../store/auth';

export interface AuthRepository {
  login: () => Promise<null>;
}

/** Returns a set of methods to interact with the auth store */
export function createAuthRepository(store: AuthStore): AuthRepository {
  console.log('createAuthRepository', typeof store);

  return {
    login: async () => {
      console.log('authRepository.login');
      return null;
    }
  };
}
