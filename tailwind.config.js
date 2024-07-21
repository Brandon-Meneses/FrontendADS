module.exports = {
  content: [
    './src/**/*.{html,ts,scss}', // Incluye archivos HTML, TS, y SCSS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: true,
    logs: true,
  },
}
