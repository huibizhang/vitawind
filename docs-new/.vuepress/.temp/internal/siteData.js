export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Vitawind v2",
  "description": "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "description": "Vitawind v2, Install and Setting Tailwindcss v3 automatically for Vite"
    },
    "/zh/": {
      "lang": "zh-TW",
      "description": "Vitawind v2，為 Vite 自動安裝及設定 Tailwindcss v3"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
