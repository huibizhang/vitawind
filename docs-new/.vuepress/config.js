<<<<<<< HEAD
<<<<<<< HEAD
const { path } = require("@vuepress/utils");
const { sidebar, navbar } = require("./configs");
=======
const { path } = require('@vuepress/utils')
>>>>>>> 3118ad5 (update: vitepress for mentaining old v2 docs)
=======
const { path } = require("@vuepress/utils");
const { sidebar, navbar } = require("./configs");
>>>>>>> 66655a1 (updated: v2 blog using vuepress)

module.exports = {
  // dest: "docs/.vitepress/dist"

<<<<<<< HEAD
<<<<<<< HEAD
  title: "vitawind v2",
  description: "Vitawind, create TailwindCSS v3 project rapidly",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      description:
        "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite",
    },
    "/zh/": {
      lang: "zh-TW",
      description: "Vitawind v2，為 Vite 自動安裝及設定 Tailwindcss v3",
    },
  },
  themeConfig: {
    logo: "vitawind_pack.svg",
    logoDark: "logo.svg",
    repo: "https://github.com/huibizhang/vitawind",
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
    // [() => {}],
=======
  title: 'Vitawind v2',
  description: "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
=======
  title: "vitawind v2",
  description: "Vitawind, create TailwindCSS v3 project rapidly",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
>>>>>>> 66655a1 (updated: v2 blog using vuepress)
  locales: {
    "/": {
      lang: "en-US",
      description:
        "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite",
    },
    "/zh/": {
      lang: "zh-TW",
      description: "Vitawind v2，為 Vite 自動安裝及設定 Tailwindcss v3",
    },
  },
  themeConfig: {
    logo: "vitawind_pack.svg",
    logoDark: "logo.svg",
    repo: "https://github.com/huibizhang/vitawind",
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
        navbar: navbar.zh,
        sidebar: sidebar.zh,
      },
    },
  },
  plugins: [
<<<<<<< HEAD
    ['@vuepress/register-components', {
      componentsDir: path.resolve(__dirname, './global_components'),
    }],
>>>>>>> 3118ad5 (update: vitepress for mentaining old v2 docs)
=======
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./global_components"),
      },
    ],
    // [() => {}],
>>>>>>> 66655a1 (updated: v2 blog using vuepress)
  ],
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
<<<<<<< HEAD
<<<<<<< HEAD
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  },
};
=======
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
=======
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
>>>>>>> 66655a1 (updated: v2 blog using vuepress)
      },
    },
  },
<<<<<<< HEAD
}
>>>>>>> 3118ad5 (update: vitepress for mentaining old v2 docs)
=======
};
>>>>>>> 66655a1 (updated: v2 blog using vuepress)
