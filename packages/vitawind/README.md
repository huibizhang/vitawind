<p align="center">
  <a href="https://www.github.com/huibizhang/vitawind" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://huibizhang.com/vitawind/logo.svg" alt="vitawind logo">
  </a>
</p>
<br>
<p align="center">
  <span>
    <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vitawind?style=flat-square" alt="version"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vitawind?style=flat-square" alt="node version"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/npm/dw/vitawind?style=flat-square" alt="npm-download"></a>
  </span>
  <!-- <br>
  <span>
    <span id="dep">- Dependencies -</span><br>
    <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/tailwindcss?style=flat-square" alt="tailwindcss"></a>
    <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/postcss?style=flat-square" alt="postcss"></a>
    <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/autoprefixer?style=flat-square" alt="tailwindcss"></a>
  </span> -->

</p>
<br/>

# Vitawind 🌪⚡

> #### The Lightning Wind , Stronger and Faster.

- 🧰 Easy To Install
- ⚡️ Automatically open Tailwind JIT Mode
- ⚙ One-Command Setting

## Why Vitawind
Vitawind is a Vite helper that can installing and setting Tailwind CSS in few steps. Easy to use , just install Vitawind and add one line setting , you'll have the most fantastic developer experience !

### Vite
[Vite](https://vitejs.dev/) is the best frontend dev tool in my mind. Actually , Vite is really fast and convenient when your are devloping Vue or React project. Instead to **Webpack** is , Vite's [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement) resolve that devlopers always need to take a long long time for waiting dev server updated when  modifying a very small thing.

<!-- ### What's the problem ?
Even though Vite is very fast , very helpful for devloping web application , but still have a problem. When you're using [TailwindCSS](https://tailwindcss.tw/) and **configuring purge or JIT mode** , you may need to re-build the css file which you're using in pages  because that **Tailwind will tree-shake the unused class** to keep the css file's size is small.

Because of this, you need to let Tailwind rebuild automatically when dev server is hot-updating , or you'll **never see your changes are active**. (Restart dev server can rebuild Tailwind before the port open , but make sure your Tailwind is in JIT mode.)

In the case of [VueCLI](https://cli.vuejs.org/) , we can using Webpack and [BrowserSync](https://alexanderzeitler.com/articles/watch-tailwind-changes-update-browser-sync/) to make it effact , but what about Vite ? Vite have own mechanism of hot-update , it's hard to detect timing from outside to rebuild. -->

---

## Usage

#### Installation
```bash
npm install vitawind 
```
Installing vitawind , then Tailwind will be installed in your vite project by npm.

#### Configuration
```bash

npx vitawind
```
Run `npx vitaiwnd` and vitawind will generates config file all you need and setting automatically , but if you want to create the full configurations of `tailwind.config.js` , or maybe you want to create or set config files with your own setting , you can [configuring vitawind with arguments](#configuring-with-arguments).

#### Using
The final part , we need to add a line of css file import , just like :
```js
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'  // ← ← ← add css file using

createApp(App).mount('#app')
```
after add to `./src/main.js` , you can open dev server by `npm run dev` command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪
<br>

### Configuring with arguments

#### Get full Tailwind's configuration
If you want to get configuration file that includes all of Tailwind’s default configuration , use  `-f` or `--full` option:
```bash
npx vitaiwind -f
# or `npx vitawind --full`
```

#### Set customzie filename and path
<!-- Tailwind compiliing css need to get a source and output 2 css files. By default, vitawind will named filenames like: -->
Tailwind compiling css need to get an output css files. By default, vitawind will named filenames like:

<!-- - source css file: `tailwind.css`
- output css file:`./src/index.css` -->
- `./src/index.css`

But you can also customize filenames you like , to do this , use  `-o` or `--output` option:
<!-- ```bash
npx vitaiwind -o {tailwind.css} {output.css}
# or `npx vitawind --output ...
``` -->
```bash
npx vitaiwind -o {output.css}
# or `npx vitawind --output ...
```
<!-- > **Warning :** It's must need 2 arguments follow behind **`-o`** or **`--output`** command , you can't just only set one filename . -->
> **Warning :** It's must need an argument follow behind **`-o`** or **`--output`** command.

#### Using after `--output` option
Difference with [Using](#using) part , we need to add a line of css file import , **this is output.css , and change the filename to your customize output.css filename setting in last section by `-o` option** :
```js
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'your-ouput.css-filename'
// ↑↑↑ add css file using

createApp(App).mount('#app')
```
after add to `./src/main.js` , you can open dev server by `npm run dev` command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪
<br>

<!-- There is one more argument `-m` ( or `--manual` ) that has not been mentioned yet , for good to find , it's will introduction in [Manually](#manually) part.

<br>

### Manually
#### Add config to file manually
Vitawind will add config to `vite.config.js` automatically , but if your want to add it manually , use `-m` or `--manually` option :
```bash
npx vitaiwind -m
# or `npx vitawind --manually
```
and then, import Vitawind in `vite.config.js` :
```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
...
// add vitawind import for vite
import vitawind from 'vitawind'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ...
        // add vitawind using in plugins list.
        vitawind()

        // if you had ran `-o`, you need to 
        // add your source.css and output.css file for vitawind
        vitawind('your-source.css-file','your-output.css-file')
    ]
})
```
---
<br> -->

## Dependencies 

| Package                                                       | Version Used                                                                                                                                           |
| ------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| TailwindCSS                                                   | ![version](https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/tailwindcss?style=flat-square&label=%20)                  |
| autoprefixer                                                  | ![version](https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/autoprefixer?style=flat-square&label=%20)                 |
<!-- | postcss                                                       | ![version](https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/postcss?style=flat-square&label=%20)                      |
| postcss-cli                                                   | ![version](https://img.shields.io/github/package-json/dependency-version/huibizhang/vitawind/postcss-cli?style=flat-square&label=%20)                  | -->

<!-- ## Contribution -->

## License

MIT