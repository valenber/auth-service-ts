export interface AuthRepository {
  login: () => Promise<null>;
}

export const authRepository: AuthRepository = {
  login: async () => {
    console.log('authRepository.login');
    return null;
  }
};
