/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
          faint: 'var(--ink-faint)',
        },
        teal: {
          900: 'var(--teal-900)',
          800: 'var(--teal-800)',
          700: 'var(--teal-700)',
          600: 'var(--teal-600)',
          500: 'var(--teal-500)',
        },
        cyan: {
          400: 'var(--cyan-400)',
          300: 'var(--cyan-300)',
        },
        mint: {
          100: 'var(--mint-100)',
        },
        line: 'var(--line)',
        gold: 'var(--gold)',
      },
      fontFamily: {
        sans: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '12px',
        md: '20px',
        lg: '28px',
        pill: '16px',
      },
      boxShadow: {
        sm: '0 2px 10px rgba(14,27,48,.07)',
        md: '0 14px 34px -10px rgba(14,27,48,.22)',
        lg: '0 30px 70px -16px rgba(14,27,48,.32)',
      },
    },
  },
  plugins: [],
};
