export type ContactRole = 'individual' | 'group' | 'enterprise';

export interface ContactFormData {
  role: ContactRole;
  name: string;
  phone: string;
  email: string;
  message?: string;
}
