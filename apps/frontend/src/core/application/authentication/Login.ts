import { apiClient } from '@/infrastructure/api/apiClient';
import { ENDPOINTS } from '@/infrastructure/api/endpoints';
export class Login {
  async execute(email: string, password: string) {
    const res = await apiClient.post(ENDPOINTS.AUTH.LOGIN, { email, password });
    return res.data;
  }
}
