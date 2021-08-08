module.exports = {
  mode: 'jit',
  purge: [
    './docs/index.md',
    './docs/**/*.{md,vue}',
    './docs/.vitepress/**/*.{md,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
