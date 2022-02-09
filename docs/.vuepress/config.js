const { path } = require("@vuepress/utils");
const { sidebar, navbar } = require("./configs");

module.exports = {
  // dest: "docs/.vitepress/dist",

  title: "vitawind v2",
  description: "Vitawind, create TailwindCSS v3 project rapidly",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      description: "Vitawind, create Tailwindcss v3 project rapidly.",
    },
    "/zh/": {
      lang: "zh-TW",
      description: "Vitawind，快速搭建起 Tailwindcss v3 專案開發環境。",
    },
  },
  themeConfig: {
    logo: "vitawind_pack.svg",
    logoDark: "logo.svg",
    repo: "https://github.com/huibizhang/vitawind",

    docsRepo: "https://github.com/huibizhang/vitawind",
    docsBranch: "master",
    docsDir: "docs",

    contributors: false,
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      "/zh/": {
        selectLanguageName: "繁體中文",
        selectLanguageText: "切換語言",
        selectLanguageAriaLabel: "切換語言",
        lastUpdatedText: "最後更新",
        editLinkText: "在 Github 上編輯",
        navbar: navbar.zh,
        sidebar: sidebar.zh,
      },
    },
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./global_components"),
      },
    ],
  ],
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  },
};
