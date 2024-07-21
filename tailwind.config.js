module.exports = {
  content: [
    './src/**/*.{html,ts,scss,css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light','dark'],
    logs: true,
  },
}
