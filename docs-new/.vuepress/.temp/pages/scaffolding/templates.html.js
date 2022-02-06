export const data = {
  "key": "v-13ddff3c",
  "path": "/scaffolding/templates.html",
  "title": "Templates",
  "lang": "en-US",
  "frontmatter": {
    "title": "Templates",
    "head": [
      [
        "meta",
        {
          "name": "description",
          "content": "Choose a template for your tailwind project. Keep it easy, Keep it simple."
        }
      ],
      [
        "meta",
        {
          "name": "keywords",
          "content": "create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular"
        }
      ]
    ],
    "sidebarDepth": 3
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Vue in Vite",
      "slug": "vue-in-vite",
      "children": []
    },
    {
      "level": 3,
      "title": "React in Vite",
      "slug": "react-in-vite",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1643809954000
  },
  "filePathRelative": "scaffolding/templates.md"
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
