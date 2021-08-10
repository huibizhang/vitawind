---
title: Templates
head:
  - - meta
    - name: description
      content: Choose a template for your tailwind project. Keep it easy, Keep it simple.
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 3
---

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

# Templates

The Tailwind CSS jit mode pre built-in template that can help you setup developing environment quickly and easily.

::: tip There are full list of templates:
- [`--pure`](#vanilla-js-in-vite) <Badge color="green" text="BETA" size="small" />
- [`--vue`](#vue-in-vite)
  - [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
  - [`--react-ts`](#typescript-for-react)
- [`--vuecli`](#vue-cli)
  - [`--vuecli5`](#vue-cli-5) <Badge color="green" text="BETA" size="small" />
- [`--cra`](#create-react-app)
- [`--ng`](#angular)
:::
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>

### Vanilla-JS in Vite <Badge color="green" text="BETA" />
Use flag `--pure` to create project with vanilla-js in vite.

<ToolToggle :name="'tool-pure-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --pure
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --pure
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

-----

### Vue in Vite 
Use flag `--vue` to create project with vue in vite.

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vue
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-vue'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

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

#### Typescript for Vue 
To create project with **typescript** for vue in vite, use flag `--vue-ts`.

----

### React in Vite 
Use flag `--react` to create project with react in vite.

<ToolToggle :name="'tool-react-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --react
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --react
```
</div></ToolToggle>

After creating project, you need:

<ToolToggle :name="'tool-react'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

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
pnpm run dev
```
</div></ToolToggle>

#### Typescript for React 
To create project with **typescript** for react in vite, use flag `--react-ts`.

---

### Vue-CLI
Use flag `--vuecli` to create project with Vue-CLI 4.

<ToolToggle :name="'tool-vuecli-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --vuecli
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vuecli
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

<ToolToggle :name="'tool-cra-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --cra
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --cra
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

<!-- ### Create React App 
Use flag `--cra` to create project with Create React App and ***Tailwind CSS version is 2.1.4***. For newest version of Tailwind, see ["Create React App + TailwindCSS 2.2"](#create-react-app-tailwindcss-2-2) section.
```bash
npm init vitawind {project-name} --cra
```
After creating project, you need:
```bash
cd {project-name}
npm install  # or `yarn`
npm run start  # or `yarn start`
``` -->

<!-- ### Create React App + TailwindCSS 2.2
Use flag `--cra22` to create project with Create React App and ***Tailwind CSS version is 2.2 or higher***.

```bash
npm init vitawind {project-name} --cra22
```
After creating project, you need:
```bash
cd {project-name}
npm install  # or `yarn`
npm run start  # or `yarn start`
``` -->

---

### Angular
Use flag `--ng` to create project with Angular CLI.

<ToolToggle :name="'tool-ng-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm' || tool === 'pnpm'">

```bash
npm init vitawind@latest {project-name} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vue
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
</div></ToolToggle>

<!-- <TemplateCmd /> -->