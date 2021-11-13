<p align="center">
  <a href="https://www.github.com/huibizhang/vitawind" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://huibizhang.com/vitawind/logo.svg" alt="vitawind logo">
  </a>
</p>
<br>
<p align="center">
  <span>
    <a href="https://npmjs.com/package/vitawind"><img src="https://img.shields.io/npm/v/vitawind?style=flat-square" alt="version"></a>
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
[Read the documents to learn more.](https://vitawind-blog.vercel.app/)

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