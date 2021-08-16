---
title: Usage
slug: usage
---

## Installation
```bash
# npm
$ npm install vitawind 

# yarn
$ yarn add vitawind 
```
Installing vitawind , then Tailwind will be installed in your vite project by npm.

## Configuration
```bash
$ npx vitawind
```
Run `npx vitawind` and vitawind will generates config file all you need and setting automatically , but if you want to create the full configurations of `tailwind.config.js` , or maybe you want to create or set config files with your own setting , you can [configuring vitawind with arguments](#configuring-with-arguments).

## Using
The final part , we need to add a line of css file import , just like :

### for Vue
For vue , you need to import index.css to your `./src/main.js` :
```js{4}
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'  // ← ← ← add css file using

createApp(App).mount('#app')
```

### for React
For react , the vite template is already have a line of import `index.css` in `./src/main.jsx` , and vitawind will replace the contents of `index.css` automatically. All you have to do is starting to develop your vite-react project with Tailwind :
```jsx{4}
// ./src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

### Done
After add to your main script , you can open dev server by `npm run dev` command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪
