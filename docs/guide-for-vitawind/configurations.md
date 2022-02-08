---
title: Configurations
permalinkPattern: guide-for-vitawind/:slug/
---

## Get full Tailwind's configuration

If you want to get configuration file that includes all of Tailwind’s default configuration, use `-f` or `--full` option:

```bash
npx vitawind -f
# or `npx vitawind --full`
```

## Set customzie filename and path

Tailwind compiling css need to get an output css files. By default, vitawind will named filename like:

- `./src/index.css`

But you can also customize filename you like , to do this , use `-o` or `--output` option:

```bash
npx vitawind -o {output.css}
# or `npx vitawind --output ...
```

::: warning
It's must need an argument of **_FILE-NAME_** follow behind **`-o`** or **`--output`** command.
:::
<br>

## Using after `--output` option

Difference with [Using](#using) part , we need to add a line of css file import , **this is output.css , and change the filename to your customize output.css filename setting in last section by `-o` option** :

### for Vue

```js{4}
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'your-ouput.css-filename'
// ↑↑↑ add css file using

createApp(App).mount('#app')
```

### for React

```jsx{6}
// ./src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'your-ouput.css-filename'
// ↑↑↑ add css file using

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

After add to your main script , you can open dev server by `npm run dev` command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪
<br>
