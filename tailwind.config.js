module.exports = {
  content: [
    "./docs-new/index.md",
    "./docs-new/**/*.{md,vue}",
    "./docs-new/.vuepress/**/*.{md,vue}",
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
