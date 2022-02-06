<template><CreateVitawind />
<h3 id="keep-it-easy-keep-it-simple" tabindex="-1"><a class="header-anchor" href="#keep-it-easy-keep-it-simple" aria-hidden="true">#</a> Keep it easy, Keep it simple.</h3>
<p>Nothing even &quot;setup tailwindcss in jit mode&quot; can stop you developing! Now, you can create project that pre built-in tailwindcss jit mode just using one-line command. Try it!</p>
<h3 id="how-can-i-do" tabindex="-1"><a class="header-anchor" href="#how-can-i-do" aria-hidden="true">#</a> How Can I do ?</h3>
<p>To start, open terminal at your directory where you want to put project. And, run following commands:</p>
<ToolToggle :name="'tool-vue-example-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- <span class="token punctuation">{</span>template<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'yarn'">
<!-- ```bash
yarn create vitawind {project-name} {template}
``` -->
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- <span class="token punctuation">{</span>template<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i -g create-vitawind@next
<span class="token function">pnpm</span> init vitawind <span class="token punctuation">{</span>project-name<span class="token punctuation">}</span> -- <span class="token punctuation">{</span>template<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></ToolToggle>
<p>base on this command, please give project name and choose a template, for example:</p>
<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind my-first-app -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'yarn'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -g create-vitawind@next
<span class="token function">npm</span> init vitawind my-first-app -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div v-if="tool === 'pnpm'">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i -g create-vitawind@next
<span class="token function">pnpm</span> init vitawind my-first-app -- --vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></ToolToggle>
<h3 id="template-list" tabindex="-1"><a class="header-anchor" href="#template-list" aria-hidden="true">#</a> Template List</h3>
<p>Go to <a href="./templates">See all templates</a>. Or, you can using our <a href="./creator">Creator</a> tool to quick start.</p>
</template>

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
