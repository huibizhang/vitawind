import { getDirname, path }  from "@vuepress/utils";
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { 
  sidebarEn,
  sidebarZh,
  navbarEn,
  navbarZh,
} from "./configs";

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

const __dirname = getDirname(import.meta.url)

export default {
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
  theme: defaultTheme({
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
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      "/zh/": {
        selectLanguageName: "繁體中文",
        selectLanguageText: "切換語言",
        selectLanguageAriaLabel: "切換語言",
        lastUpdatedText: "最後更新",
        editLinkText: "在 Github 上編輯",
        navbar: navbarZh,
        sidebar: sidebarZh,
      },
    },
  }),
  plugins: [
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "./global_components"),
      }),
    ],
  ],
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    }
  })
};
