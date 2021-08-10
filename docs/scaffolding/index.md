---
title: Scaffolding
head:
  - - meta
    - name: description
      content: Scaffolding for your tailwind project. Keep it easy, Keep it simple.
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 2
---

<script>
import CreateVitawind from '../.vitepress/components/CreateVitawind.vue'
import Badge from '../.vitepress/components/Badge.vue'
import ToolToggle from '../.vitepress/components/ToolToggle.vue'

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
    CreateVitawind,Badge,ToolToggle
  }
}
</script>

<CreateVitawind />

### Keep it easy, Keep it simple.

Nothing even "setup tailwindcss in jit mode" can stop you developing! Now, you can create project that pre built-in tailwindcss jit mode just using one-line command. Try it!

### How Can I do ?

To start, open terminal at your directory where you want to put project. And, run following commands:

<ToolToggle :name="'tool-vue-example-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {project-name} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {project-name} --vue
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {project-name} -- --vue
```
</div></ToolToggle>

base on this command, please give project name and choose a template, for example:

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest my-first-app -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind my-first-app --vue
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest my-first-app -- --vue
```
</div></ToolToggle>

### Template List
Go to [See all templates](./templates). Or, you can using our [Creator](./creator) tool to quick start.