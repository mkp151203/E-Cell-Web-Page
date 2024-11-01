/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d8a952',
          dark: '#cf8832'
        }
      },
      aspectRatio: {
        '16/12': '16 / 12',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};