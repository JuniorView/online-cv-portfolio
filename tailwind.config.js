/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A14',
        accent: '#7B61FF',
        surface: '#18181B',
        textMain: '#F0EFF4'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
        fira: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
