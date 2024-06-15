// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/**/*.{js,ts,vue}", "./**/*.{vue,md}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark", "light"],
  },
};
