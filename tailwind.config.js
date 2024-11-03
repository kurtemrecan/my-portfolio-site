/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3730A3',
        'custom-purple': '#BAB2E7', // Özel renk tanımı
      },
    },
  },
  plugins: [],
};
