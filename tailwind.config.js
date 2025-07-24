/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       francois: ['var(--font-francois)', 'sans-serif'],
        sans: ['system-ui', 'open-sans'],
        
      },
      colors: {
        gray: {
          800: '#404040', // override gray-800
        },
        darkcustom: '#404040',
      },
    },
  },
  plugins: [],
}
