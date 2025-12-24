/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B87333',
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f3d9bd',
          300: '#e8bc8a',
          400: '#d99855',
          500: '#B87333',
          600: '#a55e28',
          700: '#8a4d21',
          800: '#6f3e1d',
          900: '#5c341a',
        },
        dark: {
          bg: '#101112',
          card: 'rgb(45 46 47)',
          border: 'rgb(67 68 69)',
          text: '#f9f9f9',
          muted: 'rgb(208 208 208)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

