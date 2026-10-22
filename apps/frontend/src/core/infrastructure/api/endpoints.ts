/**
 * All API endpoint paths in one place.
 * If the backend changes a route, only this file needs updating.
 */
export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // Providers
  PROVIDERS: {
    BASE: '/providers',
    BY_ID: (id: string) => `/providers/${id}`,
  },

  // Organizations
  ORGANIZATIONS: {
    BASE: '/organizations',
    BY_ID: (id: string) => `/organizations/${id}`,
  },

  // Credentialing
  CREDENTIALING: {
    BASE: '/credentialing',
    BY_ID: (id: string) => `/credentialing/${id}`,
    SUBMIT: '/credentialing/submit',
  },

  // Documents
  DOCUMENTS: {
    BASE: '/documents',
    BY_ID: (id: string) => `/documents/${id}`,
    UPLOAD: '/documents/upload',
  },

  // Appointments
  APPOINTMENTS: {
    BASE: '/appointments',
    BY_ID: (id: string) => `/appointments/${id}`,
  },

  // Notifications
  NOTIFICATIONS: {
    BASE: '/notifications',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
  },
} as const;
