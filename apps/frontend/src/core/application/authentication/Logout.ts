import { apiClient } from '@/infrastructure/api/apiClient';
import { ENDPOINTS } from '@/infrastructure/api/endpoints';
export class Logout {
  async execute(): Promise<void> {
    await apiClient.post(ENDPOINTS.AUTH.LOGOUT);
  }
}
