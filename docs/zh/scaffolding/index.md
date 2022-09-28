---
title: 快速建立專案
head:
  - - meta
    - name: description
      content: 輕鬆簡單地建立 Tailwindcss v3 專案
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 2
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

<zh-CreateVitawind />

### 輕鬆又簡單

就算是「安裝 Tailwind 並設定 jit 模式」也不能成為停下你開發腳步的阻礙！ 現在，你可以只用一行指令來建立「預先建構好 Tailwind jit 模式」的專案，快試試看吧！

### 我該做些什麼？

首先，在你要放置專案的資料夾中開啟 terminal，然後執行下列指令：

<ToolToggle :name="'tool-vue-example-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {project-name} -- {template}
```

</div><div v-if="tool === 'yarn'">

<!-- ```bash
yarn create vitawind {project-name} {template}
``` -->

```bash
npm init vitawind {project-name} -- {template}
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {project-name} -- {template}
```

</div></ToolToggle>

請基於這個指令，換成你的專案名稱以及你所要使用的範本，舉例：

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind my-first-app -- --vue
```

</div><div v-if="tool === 'yarn'">

```bash
npm init vitawind my-first-app -- --vue
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind my-first-app -- --vue
```

</div></ToolToggle>

### 有哪些範本呢？

來去[看看所有的範本](./templates)。 或者，你可以使用 [Creator](./creator) 工具來快速開始你的奇幻之旅。
