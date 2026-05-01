/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#005EB8',
          600: '#004D99',
          700: '#003C8F',
          800: '#002D6B',
          900: '#001E47'
        },
        'secondary': {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#F7B500',
          600: '#D49D00',
          700: '#B18500',
          800: '#8E6D00',
          900: '#6B5500'
        },
        'neutral': {
          50: '#F5F7FA',
          100: '#E9EEF5',
          200: '#D4DFEB',
          300: '#B0B7C3',
          400: '#8B92A0',
          500: '#6B727E',
          600: '#4F5663',
          700: '#3B4149',
          800: '#2E2E2E',
          900: '#1A1C1F'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};