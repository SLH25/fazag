/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fazag-green': {
          400: '#008C5D',
          500: '#006747',
          600: '#005A3D',
        },
        'fazag-blue': '#0000FF',
        'fazag-dark-blue': '#1a202c',
        'fazag-light-grey': '#f8f8f8',
        'fazag-accent': '#3B82F6',
        'fazag-bg-dark': '#0F172A',
        'fazag-bg-light': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-fade': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-up-fade': 'slide-up-fade 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'scale-fade': 'scale-fade 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};