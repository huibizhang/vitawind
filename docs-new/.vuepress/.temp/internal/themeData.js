export const themeData = {
  "repo": "https://github.com/huibizhang/vitawind",
  "contributors": false,
  "locales": {
    "/": {
      "selectLanguageName": "English",
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Customization",
          "link": "/customization/"
        },
        {
          "text": "APIs",
          "link": "/api/"
        }
      ]
    },
    "/zh/": {
      "selectLanguageName": "繁體中文",
      "selectLanguageText": "切換語言",
      "selectLanguageAriaLabel": "切換語言",
      "navbar": [
        {
          "text": "指南",
          "link": "/guide/"
        },
        {
          "text": "客製化",
          "link": "/customization/"
        },
        {
          "text": "接口",
          "link": "/api/"
        }
      ]
    }
  },
  "sidebar": {
    "/guide/": [
      {
        "text": "Guide",
        "children": [
          "/guide/",
          "/guide/getting-started/"
        ]
      }
    ],
    "/customization/": [
      {
        "text": "Customization",
        "link": "/customization/"
      }
    ],
    "/api/": [
      {
        "text": "Client APIs",
        "link": "/api/",
        "children": [
          "/api/pagination/",
          "/api/tag-list/"
        ]
      }
    ]
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
