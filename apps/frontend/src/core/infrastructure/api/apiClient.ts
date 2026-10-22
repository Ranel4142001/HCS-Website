import { axiosInstance } from './axios';
import { tokenStorage } from '../storage/tokenStorage';

/**
 * API client with request/response interceptors.
 * All HTTP calls go through this — never import axiosInstance directly in features.
 */
export const apiClient = axiosInstance;

// Request: attach Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response: handle 401 globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.clearAll();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
