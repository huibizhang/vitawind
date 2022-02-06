<template><h1 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> Templates</h1>
<p>The Tailwind CSS v3 pre built-in template that can help you setup developing environment quickly and easily.</p>
<div class="custom-container tip"><p class="custom-container-title">There are full list of templates:</p>
<!-- - [`--pure`](#vanilla-js-in-vite) <Badge color="green" text="BETA" size="small" /> -->
<ul>
<li><a href="#vue-in-vite"><code>--vue</code></a>
<ul>
<li><a href="#typescript-for-vue"><code>--vue-ts</code></a></li>
</ul>
</li>
<li><a href="#react-in-vite"><code>--react</code></a>
<ul>
<li><a href="#typescript-for-react"><code>--react-ts</code></a></li>
</ul>
</li>
</ul>
</div>
<!-- - [`--vuecli`](#vue-cli) -->
  <!-- - [`--vuecli5`](#vue-cli-5) <Badge color="green" text="BETA" size="small" /> -->
<!-- - [`--cra`](#create-react-app) -->
<!-- - [`--ng`](#angular) -->
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>
<!-- ### Vanilla-JS in Vite <Badge color="green" text="BETA" />
Use flag `--pure` to create project with vanilla-js in vite.

<ToolToggle :name="'tool-pure-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm i -g create-vitawind@next
npm init vitawind {project-name} -- --pure
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --pure
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm i -g create-vitawind@next
pnpm init vitawind {project-name} -- --pure
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-pure'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {project-name}
npm install
npm run dev
```
</div><div v-if="tool === 'yarn'">

```bash
cd {project-name}
yarn
yarn dev
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {project-name}
pnpm install
pnpm dev
```
</div></ToolToggle>

----- -->
<h3 id="vue-in-vite" tabindex="-1"><a class="header-anchor" href="#vue-in-vite" aria-hidden="true">#</a> Vue in Vite</h3>
<p>Use flag <code>--vue</code> to create project with vue in vite.</p>
<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'yarn'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i -g create-vitawind@next
<span class="token function">pnpm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></ToolToggle>
<p>After creating project, you need:</p>
<ToolToggle :name="'tool-vue'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div v-if="tool === 'yarn'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">yarn</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token function">pnpm</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></ToolToggle>
<h4 id="typescript-for-vue" tabindex="-1"><a class="header-anchor" href="#typescript-for-vue" aria-hidden="true">#</a> Typescript for Vue</h4>
<p>To create project with <strong>typescript</strong> for vue in vite, use flag <code>--vue-ts</code>.</p>
<hr>
<h3 id="react-in-vite" tabindex="-1"><a class="header-anchor" href="#react-in-vite" aria-hidden="true">#</a> React in Vite</h3>
<p>Use flag <code>--react</code> to create project with react in vite.</p>
<ToolToggle :name="'tool-react-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --react
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'yarn'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --react
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i -g create-vitawind@next
<span class="token function">pnpm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- --react
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></ToolToggle>
<p>After creating project, you need:</p>
<ToolToggle :name="'tool-react'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div v-if="tool === 'yarn'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">yarn</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token function">pnpm</span> run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></ToolToggle>
<h4 id="typescript-for-react" tabindex="-1"><a class="header-anchor" href="#typescript-for-react" aria-hidden="true">#</a> Typescript for React</h4>
<p>To create project with <strong>typescript</strong> for react in vite, use flag <code>--react-ts</code>.</p>
<!-- ---

### Vue-CLI
Use flag `--vuecli` to create project with Vue-CLI 4.

<ToolToggle :name="'tool-vuecli-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm i -g create-vitawind@next
npm init vitawind {project-name} -- --vuecli
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vuecli
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm i -g create-vitawind@next
pnpm init vitawind {project-name} -- --vuecli
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-vuecli'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {project-name}
npm install
npm run serve
```
</div><div v-if="tool === 'yarn'">

```bash
cd {project-name}
yarn
yarn serve
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {project-name}
pnpm install
pnpm serve
```
</div></ToolToggle>

#### Vue-CLI 5 <Badge color="green" text="BETA" />
**Vue-CLI 5 builds on postcss 8** that is more better than Vue-CLI 4 to develop with Tailwind CSS. To create project with **Vue-CLI 5**, please use flag `--vuecli5`.

---

### Create React App 
Use flag `--cra` to create project with Create React App.

<ToolToggle :name="'tool-cra-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm i -g create-vitawind@next
npm init vitawind {project-name} -- --cra
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --cra
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm i -g create-vitawind@next
pnpm init vitawind {project-name} -- --cra
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-cra'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="tool === 'yarn'">

```bash
cd {project-name}
yarn
yarn start
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {project-name}
pnpm install
pnpm start
```
</div></ToolToggle>

---

### Angular
Use flag `--ng` to create project with Angular CLI.

<ToolToggle :name="'tool-ng-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm i -g create-vitawind@next
npm init vitawind {project-name} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vue
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm i -g create-vitawind@next
pnpm init vitawind {project-name} -- --vue
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-ng'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="tool === 'yarn'">

```bash
cd {project-name}
yarn
yarn start
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {project-name}
pnpm install
pnpm start
```
</div></ToolToggle> --></template>

<script>
import Badge from '../.vitepress/components/Badge.vue'
import ToolToggle from '../.vitepress/components/ToolToggle.vue'
import TemplateCmd from '../.vitepress/components/TemplateCmd.md'

export default{
  data () {
    return {
      tool: 'npm',
      storage: undefined
    }
  },
  mounted () {
    let tool = ''
    if (typeof window !== 'undefined') {
      if(window.localStorage.length>0) {
        tool = window.localStorage.getItem('tool')
      }
    }
    this.tool = tool?tool:'npm';
    this.ct(this.tool)
  },
  methods:{
    ct (event) {
      this.tool = event
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      // if (this.storage = !) {
      //   this.storage.setItem('tool',event)
      // }
    }
  },
  components: {
    Badge,ToolToggle,TemplateCmd
  }
}
</script>
