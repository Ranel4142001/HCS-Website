import { z } from 'zod';

/**
 * Reusable Zod field schemas.
 * Import these into feature-level schemas to keep validation DRY.
 */

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address');

export const phoneSchema = z
  .string()
  .min(10, 'Phone number must be at least 10 digits')
  .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number');

export const requiredStringSchema = (fieldName: string) =>
  z.string().min(1, `${fieldName} is required`);

export const npiSchema = z
  .string()
  .length(10, 'NPI must be exactly 10 digits')
  .regex(/^\d{10}$/, 'NPI must contain only digits');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const urlSchema = z
  .string()
  .url('Please enter a valid URL')
  .optional()
  .or(z.literal(''));
