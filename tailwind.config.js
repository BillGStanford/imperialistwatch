/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'revolutionary-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        'worker-black': {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4a4a4a',
          950: '#0a0a0a',
        },
        'socialist-yellow': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        }
      },
      fontFamily: {
        'revolution': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-red': 'pulse-red 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
        'revolutionary-move': 'revolutionary-move 20s linear infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
      },
      backgroundSize: {
        'revolutionary': '400% 400%',
      },
      boxShadow: {
        'revolutionary': '0 0 20px rgba(220, 38, 38, 0.5)',
        'worker': '0 0 30px rgba(220, 38, 38, 0.7)',
        'socialist': '0 0 40px rgba(220, 38, 38, 0.9)',
      },
      backdropBlur: {
        'revolutionary': '20px',
      }
    },
  },
  plugins: [],
}