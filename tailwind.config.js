/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13523C',    // ciemna zieleń
        bg: '#F9F7F0',         // kremowe tło
        accent: '#E6F2EB',     // hover / zaznaczenie
      },
      spacing: {
        '5.5': '1.375rem',     // 22px
      },
      borderRadius: {
        xl: '1.25rem',         // 20px
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
