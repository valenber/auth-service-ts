import { Express } from 'express';

export interface ApplicationService {
  registerRoutes(router: Express): void;
}
