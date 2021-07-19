//const { path } = require('@vuepress/shared-utils')

module.exports = {
  title: 'Vitawind',
  description: "Vitawind, Install and Setting Tailwindcss automatically for Vite",
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    repo: 'huibizhang/vitawind',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      // {
      //   text: 'Config Reference',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      // {
      //   text: 'Release Notes',
      //   link: 'https://github.com/vuejs/vitepress/releases'
      // }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      // '/advanced/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  },
  // alias: {
  //   '@': path.resolve(__dirname, '../.vuepress')
  // },
  // postcss: {
  //   plugins: [
  //     require('tailwindcss'),
  //     require('autoprefixer')
  //   ]
  // },
}

function getGuideSidebar() {
  return [
    {
      text: 'Getting Started',
      children: [
        { text: 'Instruction', link: '/guide/' },
        { text: 'Usage', link: '/guide/usage' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        {
          text: 'Configurations',
          link: '/guide/configurations'
        },
      ]
    }
  ]
}

// function getConfigSidebar() {
//   return [
//     {
//       text: 'App Config',
//       children: [{ text: 'Basics', link: '/config/basics' }]
//     },
//     {
//       text: 'Theme Config',
//       children: [
//         { text: 'Homepage', link: '/config/homepage' },
//         { text: 'Algolia Search', link: '/config/algolia-search' },
//         { text: 'Carbon Ads', link: '/config/carbon-ads' }
//       ]
//     }
//   ]
// }