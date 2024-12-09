/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{js,ts,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#f79f1a",
        "apple-green": "#046e1b",
        "dire-wolf": "#292727",
      }
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    animation: {
      'transition': 'transition 1s ease-in-out',
    },
    keyframes: {
      'transition': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
  },
  plugins: [],
}

