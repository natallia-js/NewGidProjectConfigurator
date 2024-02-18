import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /*backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },*/
      colors: {
        primary: 'var(--text-color-primary)',
        secondary: 'var(--text-color-secondary)',
        button: 'var(--bg-color-button)',
      },
      backgroundColor: {
        panel: 'var(--bg-color-panel)',
        page: 'var(--bg-color-page)',
        button: 'var(--bg-color-button)',
      }
    },
  },
  plugins: [],
}
export default config;
