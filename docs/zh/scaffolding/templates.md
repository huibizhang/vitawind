---
title: 範本
head:
  - - meta
    - name: description
      content: Tailwindcss v3 專案的範本列表
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 3
permalinkPattern: scaffolding/:slug/
---

<script>
export default{
  data () {
    return {
      tool: 'npm',
      storage: undefined
    }
  },
  mounted () {
    let tool = ''
    if (typeof window != 'undefined') {
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
      if (typeof window != 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      // if (this.storage = !) {
      //   this.storage.setItem('tool',event)
      // }
    }
  },
}
</script>

# 範本

預建構好 Tailwind CSS v3 的範本可以幫你輕鬆又快速的建立開發環境。

::: tip 全部可用範本列表：

Vite:

- [`--pure`](#vanilla-js-in-vite) <MyBadge color="green" text="BETA" size="small" />
- [`--vue`](#vue-in-vite)
  - [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
  - [`--react-ts`](#typescript-for-react)

---

CLI:

- [`--cra`](#create-react-app)
- [`--ng`](#angular)
  :::

## Vite

### Vanilla-JS in Vite <Badge color="green" text="BETA" />
使用 `--pure` 來建立 vite 的原生 js 專案。

<ToolToggle :name="'tool-pure-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- --pure
```
</div><div v-if="tool === 'yarn'">

```bash
npm init vitawind {project-name} -- --pure
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- --pure
```
</div></ToolToggle>

建立專案之後，你需要做：

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

使用 `--vue` 參數來建立 vite 的 vue 專案。

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- --vue
```

</div><div v-if="tool === 'yarn'">

```bash
npm init vitawind {project-name} -- --vue
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- --vue
```

</div></ToolToggle>

建立專案之後，你需要做：

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

若要建立加入 **typescript** 的 vite vue 專案，請使用 `--vue-ts` 參數。

---

### React in Vite

使用 `--react` 參數來建立 vite 的 react 專案。

<ToolToggle :name="'tool-react-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- --react
```

</div><div v-if="tool === 'yarn'">

```bash
npm init vitawind {project-name} -- --react
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- --react
```

</div></ToolToggle>

建立專案之後，你需要做：

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

若要建立加入 **typescript** 的 vite react 專案，請使用 `--react-ts` 參數。

---

## CLI

### Create React App

使用 `--cra` 參數來建立 Create React App 專案。

<ToolToggle :name="'tool-cra-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- --cra
```

</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --cra
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- --cra
```

</div></ToolToggle>

建立專案之後，你需要做：

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

使用 `--ng` 參數來建立 Angular 12 專案。

<ToolToggle :name="'tool-ng-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- --ng
```

</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --ng
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- --ng
```

</div></ToolToggle>

建立專案之後，你需要做：

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
