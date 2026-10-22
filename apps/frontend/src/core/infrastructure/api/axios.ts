import axios from 'axios';
import { envConfig } from '@/shared/config/env.config';

/**
 * Base Axios instance.
 * Separating instance creation (axios.ts) from interceptor logic (apiClient.ts)
 * keeps each file single-responsibility.
 */
export const axiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
