<script>
import Badge from './Badge.vue'
import ToolToggle from './ToolToggle.vue'

export default{
  data () {
    return {
      tool: 'npm',
      test: '<a>123</a>',
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
    Badge,ToolToggle
  }
}
</script>

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


<component v-html="test">
</component>


```bash
cd {project-name}
pnpm install
pnpm start
```
</div></ToolToggle>