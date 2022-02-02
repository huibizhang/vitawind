const { path } = require('@vuepress/utils')

module.exports = {
  // dest: "docs/.vitepress/dist"

  title: 'Vitawind v2',
  description: "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      description: 'Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite',
    },
    '/zh/': {
      lang: 'zh-TW',
      description: 'Vitawind v2，為 Vite 自動安裝及設定 Tailwindcss v3',
    },
  },
  themeConfig: {
    repo: 'https://github.com/huibizhang/vitawind',
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Customization',
            link: '/customization/'
          },
          {
            text: 'APIs',
            link: '/api/'
          },
        ]
      },
      '/zh/': {
        selectLanguageName: '繁體中文',
        selectLanguageText: '切換語言',
        selectLanguageAriaLabel: '切換語言',
        navbar: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '客製化',
            link: '/customization/'
          },
          {
            text: '接口',
            link: '/api/'
          },
        ]
      },
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/',
            '/guide/getting-started/',
          ]
        },
      ],
      '/customization/': [
        {
          text: 'Customization',
          link: '/customization/',
        },
      ],
      '/api/': [
        {
          text: 'Client APIs',
          link: '/api/',
          children: [
            '/api/pagination/',
            '/api/tag-list/',
          ]
        },
      ],
    },
  },
  plugins: [
    ['@vuepress/register-components', {
      componentsDir: path.resolve(__dirname, './global_components'),
    }],
  ],
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      },
    }
  },
}