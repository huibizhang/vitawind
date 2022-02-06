<template><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># npm</span>
$ <span class="token function">npm</span> <span class="token function">install</span> vitawind@next

<span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> vitawind@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Installing vitawind , then Tailwind will be installed in your vite project by npm.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ npx vitawind
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Run <code>npx vitawind</code> and vitawind will generates config file all you need and setting automatically , but if you want to create the full configurations of <code>tailwind.config.js</code> , or maybe you want to create or set config files with your own setting , you can <a href="#configuring-with-arguments">configuring vitawind with arguments</a>.</p>
<h2 id="using" tabindex="-1"><a class="header-anchor" href="#using" aria-hidden="true">#</a> Using</h2>
<p>The final part , we need to add a line of css file import , just like :</p>
<h3 id="for-vue" tabindex="-1"><a class="header-anchor" href="#for-vue" aria-hidden="true">#</a> for Vue</h3>
<p>For vue , you need to import index.css to your <code>./src/main.js</code> :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ./src/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>  <span class="token comment">// ← ← ← add css file using</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="for-react" tabindex="-1"><a class="header-anchor" href="#for-react" aria-hidden="true">#</a> for React</h3>
<p>For react , the vite template is already have a line of import <code>index.css</code> in <code>./src/main.jsx</code> , and vitawind will replace the contents of <code>index.css</code> automatically. All you have to do is starting to develop your vite-react project with Tailwind :</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// ./src/main.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="done" tabindex="-1"><a class="header-anchor" href="#done" aria-hidden="true">#</a> Done</h3>
<p>After add to your main script , you can open dev server by <code>npm run dev</code> command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪</p>
</template>
