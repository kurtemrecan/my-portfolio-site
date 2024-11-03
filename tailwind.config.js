/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0077B5',
        'custom-purple': '#BAB2E7', // Özel renk tanımı
        'custom-green': '#00AB6B',
      },
    },
  },
  plugins: [],
};
