export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme
        primary: '#2F80ED',
        secondary: '#F2C94C',
        background: '#F2F2F2',
        text: '#333333',

        // Dark Theme
        'dark-background': '#1A1A1A',
        'dark-text': '#F2F2F2',

        // Opcionales
        'border-light': '#E0E0E0',
        'border-dark': '#3C3C3C',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
}