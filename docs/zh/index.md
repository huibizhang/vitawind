---
title: 極速建立 Tailwind CSS v3 專案
# head:
#   - - meta
#     - name: description
#       content: Install and Setting Tailwindcss automatically for Vite. Easy To Install, automatically open Tailwind JIT Mode and  One-Command Setting
#   - - meta
#     - name: keywords
#       content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr scaffolding
head:
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebar: false
lastUpdated: false
editLink: false
---

<script>
export default{
  data () {
    return {
      projectName: 'test-project',
      tool: 'npm',
      storage: undefined,
      modalOpen: false,
      msgShow: false,
      template: '',
      templates:{
        'pure':{
          name: 'Vite Vanilla-JS',
          script: ['run','dev'],
        },
        'vue':{
          name: 'Vite Vue',
          script: ['run','dev'],
        },
        'vue-ts':{
          name: 'Vite Vue + Typscript',
          script: ['run','dev'],
        },
        'react':{
          name: 'Vite React',
          script: ['run','dev'],
        },
        'react-ts':{
          name: 'Vite React + Typescript',
          script: ['run','dev'],
        },
        'vuecli':{
          name: 'Vue-CLI',
          script: ['run','serve'],
        },
        'vuecli5':{
          name: 'Vue-CLI 5',
          script: ['run','serve'],
        },
        'cra':{
          name: 'Create React App',
          script: ['','start'],
        },
        'ng':{
          name: 'Angular CLI',
          script: ['','start'],
        },
      }
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
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      this.tool = event
    },
    copy () {
      const copied = document.getElementById(`code-${this.tool}`).innerText
      var promise = navigator.clipboard.writeText(copied)
      this.msgShow = true
      setTimeout(this.clearMsg,2500)
    },
    clearMsg() {
      this.msgShow = false
    },
    getScript() {
      const template = this.templates[this.template]

      if (!template) { return '' }

      if (this.tool==='npm' || this.tool==='pnpm') {
        return template.script.join(' ')
      } else {
        return template.script[1]
      }
    }
  },
  // components: {
  //   Terminal, MyBadge, Modal, TemplateList
  // }
}
</script>

<!-- <zh-HomePage /> -->
<zh-HomePage />

## 起手式

**Creator** 是一個能快速產生範本專案建置指令給你用的工具，僅僅只要輸入專案名稱並且選擇所想使用的範本類型。

還不快試試？

<zh-Terminal :name="'terminal'" :tool="tool" :template="template" @tool="ct($event)" @copy="copy" @typing="projectName=$event" @choosing="modalOpen=true">

<div v-if="tool === 'npm'"><pre id="code-npm" class="!p-0">
npm init vitawind {{projectName}} -- --{{template?template:'{template}'}}
cd {{projectName}}
npm install
npm {{getScript()?getScript().trim():'{script}'}}
</pre></div>

<div v-if="tool === 'yarn'"><pre id="code-yarn" class="!p-0">
npm init vitawind {{projectName}} -- --{{template?template:'{template}'}}
cd {{projectName}}
yarn
yarn {{getScript()?getScript().trim():'{script}'}}
</pre></div>

<div v-if="tool === 'pnpm'"><pre id="code-pnpm" class="!p-0">
pnpm init vitawind {{projectName}} -- --{{template?template:'{template}'}}
cd {{projectName}}
pnpm install
pnpm {{getScript()?getScript().trim():'{script}'}}
</pre></div>

</zh-Terminal>

<div
  class="text-sm text-gray-500 text-center mt-4 transition-all"
  :class="{'scale-100':msgShow,'scale-0':!msgShow}"
>
  <span class="bg-gray-200 p-1 rounded-md">
    已複製到剪貼簿
  </span>
</div>

<zh-Modal :open="modalOpen" @close="modalOpen=false">
<zh-TemplateList :modalStatus="modalOpen" @confirm="template=$event;modalOpen=false" />
</zh-Modal>

<Footer />
