import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  { ignores: ['.next/**', '.next-audit/**', 'node_modules/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // A leading underscore marks a parameter that is intentionally unused.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },

  // Architecture: app/ uses a feature only through its public index.ts.
  {
    files: ['app/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['@/features/*/*'],
          message: 'Import from the feature entry point (e.g. "@/features/pricing"), not its internal files.',
        }],
      }],
    },
  },

  // Architecture: features are independent; shared code belongs in src/shared.
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['@/features/*'],
          message: 'Features must not import other features. Move shared code to src/shared, or compose features in app/.',
        }],
      }],
    },
  },

  // Shared code must not depend on features.
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{ group: ['@/features/*'], message: 'src/shared must not depend on features.' }],
      }],
    },
  },
];

export default eslintConfig;
