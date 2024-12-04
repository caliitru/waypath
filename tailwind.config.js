/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#151515',
          card: '#1C1C1C',
          element: '#242424',
          border: '#2F2F2F',
          text: '#FFFFFF',
          secondary: '#808080',
        },
        accent: {
          success: '#36B37E',
          error: '#FF4D4D',
        },
        brand: {
          sage: '#7A9E7E',
          orange: '#FF6B35',
          graphite: '#2F3337',
          pearl: '#F7F8F9',
          platinum: '#E5E7E9',
          charcoal: '#1A1D21',
          gray: '#4A4F54',
        }
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(at 0% 0%, rgba(54, 179, 126, 0.25) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(54, 179, 126, 0.2) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(54, 179, 126, 0.22) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(54, 179, 126, 0.18) 0px, transparent 50%),
          linear-gradient(to right bottom, rgba(54, 179, 126, 0.1), transparent)
        `,
        'noise': "url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
        'dots': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};