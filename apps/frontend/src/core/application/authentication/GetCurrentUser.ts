import { apiClient } from '@/infrastructure/api/apiClient';
import { ENDPOINTS } from '@/infrastructure/api/endpoints';
export class GetCurrentUser {
  async execute() {
    const res = await apiClient.get(ENDPOINTS.AUTH.ME);
    return res.data;
  }
}
