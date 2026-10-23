import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  globalIgnores(['.next/**', '.next-audit/**', 'node_modules/**', 'next-env.d.ts']),
  ...nextVitals,
  ...nextTs,
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
]);
