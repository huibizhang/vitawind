<script>
import Badge from '../.vitepress/components/Badge.vue'
import ToolToggle from '../.vitepress/components/ToolToggle.vue'

export default{
  data () {
    return {
      tool: 'npm',
      npm: true,
      yarn: false,
      storage: window.localStorage
    }
  },
  mounted () {
    let tool = this.storage.getItem('tool')
    console.log(tool)
    this.tool = tool?tool:'npm';
    this.ct(this.tool)
  },
  methods:{
    ct (event) {
      const status = (event==='npm')
      this.tool = event
      this.npm = status
      this.yarn = !status
      this.storage.setItem('tool',event)
    }
  },
  components: {
    Badge,ToolToggle
  }
}
</script>

# Templates

The Tailwind CSS jit mode pre built-in template that can help you setup developing environment quickly and easily.

::: tip There are full list of templates:
- [`--vue`](#vue-in-vite)
- [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
- [`--react-ts`](#typescript-for-react)
- [`--vuecli`](#vue-cli)
- [`--cra`](#create-react-app)
- [`--ng`](#angular)
:::
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>

### Vue in Vite 
Use flag `--vue` to create project with vue in vite.
```bash
npm init vitawind@latest {project-name} -- --vue
```
After creating project, you need:

<ToolToggle :name="'tool-vue'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run dev
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn dev
```
</div></ToolToggle>

#### Typescript for Vue 
To create project with **typescript** for vue in vite, use flag `--vue-ts`.


### React in Vite 
Use flag `--react` to create project with react in vite.
```bash
npm init vitawind@latest {project-name} -- --react
```
After creating project, you need:

<ToolToggle :name="'tool-react'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run dev
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn dev
```
</div></ToolToggle>

#### Typescript for React 
To create project with **typescript** for react in vite, use flag `--react-ts`.


### Vue-CLI
Use flag `--vuecli` to create project with Vue-CLI.
```bash
npm init vitawind@latest {project-name} -- --vuecli
```
After creating project, you need:

<ToolToggle :name="'tool-vuecli'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run serve
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn serve
```
</div></ToolToggle>

#### Vue-CLI 5 <Badge color="green" text="BETA" />
**Vue-CLI 5 builds on postcss 8** that is more better than Vue-CLI 4 to develop with Tailwind CSS. To create project with **Vue-CLI 5**, please use flag `--vuecli5`.


### Create React App 
Use flag `--cra` to create project with Create React App.
```bash
npm init vitawind@latest {project-name} -- --cra
```
After creating project, you need:

<ToolToggle :name="'tool-cra'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn start
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

### Angular
Use flag `--ng` to create project with Angular CLI.

```bash
npm init vitawind@latest {project-name} -- --ng
```
After creating project, you need:

<ToolToggle :name="'tool-ng'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn start
```
</div></ToolToggle>