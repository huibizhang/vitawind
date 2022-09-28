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

# Templates

The Tailwind CSS v3 built-in template that can help you setup developing environment quickly and easily.

::: tip There are full list of templates:

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

### Vanilla-JS in Vite <MyBadge color="green" text="BETA" />
Use flag `--pure` to create project with vanilla-js in vite.

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

---

### React in Vite

Use flag `--react` to create project with react in vite.

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

## CLI

### Create React App

Use flag `--cra` to create project with Create React App.

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

Use flag `--ng` to create project with Angular 12.

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
