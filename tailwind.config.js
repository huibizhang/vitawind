module.exports = {
  content: [
    "./docs/index.md",
    "./docs/**/*.{md,vue}",
    "./docs/.vuepress/**/*.{md,vue}",
  ],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
