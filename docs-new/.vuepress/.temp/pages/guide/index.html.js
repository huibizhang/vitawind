export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "sidebarDepth": 2
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Why Vitawind",
      "slug": "why-vitawind",
      "children": [
        {
          "level": 3,
          "title": "Vite",
          "slug": "vite",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1643809954000
  },
  "filePathRelative": "guide/index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
