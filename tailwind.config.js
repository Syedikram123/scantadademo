/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E8E1D7',
          300: '#D8CEC2',
        },
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#090D16',
        },
        charcoal: {
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        gold: {
          200: '#F6E7BC',
          300: '#EED696',
          400: '#D4AF37',
          500: '#C5A880',
          600: '#A9895F',
        },
        peach: {
          100: '#FEF3EC',
          200: '#FAD5C0',
          300: '#F5BEA1',
        },
        coral: {
          500: '#E26D5C',
          600: '#D9534F',
          700: '#C8433F',
        },
        burgundy: {
          700: '#9E2A2B',
          800: '#881337',
          900: '#540B1A',
        },
        festiveBlue: {
          400: '#60829D',
          500: '#4A6B82',
          600: '#385366',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 14px 40px rgba(15, 23, 42, 0.09)',
        'gold-glow': '0 10px 30px rgba(212, 175, 55, 0.2)',
      }
    },
  },
  plugins: [],
}
