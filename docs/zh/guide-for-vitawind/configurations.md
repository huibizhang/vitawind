---
title: Configurations
permalinkPattern: guide-for-vitawind/:slug/
---

# 配置

## 取得完整的 Tailwind 配置檔

如果你想要取得包含 Tailwind 全部預設配置的完整檔，請使用 `-f` 或是 `--full` 參數：

```bash
npx vitawind -f
# 或 `npx vitawind --full`
```

## 自訂路徑或檔名

Tailwind 編譯 css 時會需要設定輸出的 css 檔。 在預設情況下，vitawind 會將它自動命名為：

- `./src/index.css`

但是你仍然可以自訂你想要的檔案名稱或路徑，如果想要這麼做，請使用 `-o` 或 `--output` 參數：

```bash
npx vitawind -o {output.css}
# 或 `npx vitawind --output ...
```

::: warning 注意
在參數 `-o` 或是 `--output` 後面必須要有**檔名**。
:::
<br>

## 使用 `--output` 參數後

不同於[使用方法](/zh/guide-for-vitawind/usage/#使用方法)的段落，我們必須新增一行 css 檔的引用，**因為這個輸出後的 css 檔在上一個段落已經用 `-o` 參數將檔案名稱改為你所自訂的輸出檔名** :

### Vue

```js{4}
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import '你自定義的檔名'
// ↑↑↑ 引用 css 檔

createApp(App).mount('#app')
```

### React

```jsx{6}
// ./src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '你自定義的檔名'
// ↑↑↑ 引用 css 檔

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

在主 js 程式中引用 css 後，以你最快的速度用 `npm run dev` (或是 `yarn dev`) 指令來開啟 dev server ... 因為 ... Tailwind 已經可以使用囉！ 享受你絕美的開發時光吧，謝謝！ 🤪
<br>
