<template><h2 id="get-full-tailwind-s-configuration" tabindex="-1"><a class="header-anchor" href="#get-full-tailwind-s-configuration" aria-hidden="true">#</a> Get full Tailwind's configuration</h2>
<p>If you want to get configuration file that includes all of Tailwind’s default configuration, use  <code>-f</code> or <code>--full</code> option:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx vitawind -f
<span class="token comment"># or `npx vitawind --full`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="set-customzie-filename-and-path" tabindex="-1"><a class="header-anchor" href="#set-customzie-filename-and-path" aria-hidden="true">#</a> Set customzie filename and path</h2>
<p>Tailwind compiling css need to get an output css files. By default, vitawind will named filename like:</p>
<ul>
<li><code>./src/index.css</code></li>
</ul>
<p>But you can also customize filename you like , to do this , use  <code>-o</code> or <code>--output</code> option:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx vitawind -o <span class="token punctuation">{</span>output.css<span class="token punctuation">}</span>
<span class="token comment"># or `npx vitawind --output ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>It's must need an argument of <em><strong>FILE-NAME</strong></em> follow behind <strong><code>-o</code></strong> or <strong><code>--output</code></strong> command.</p>
</div>
<br>
<h2 id="using-after-output-option" tabindex="-1"><a class="header-anchor" href="#using-after-output-option" aria-hidden="true">#</a> Using after <code>--output</code> option</h2>
<p>Difference with <a href="#using">Using</a> part , we need to add a line of css file import , <strong>this is output.css , and change the filename to your customize output.css filename setting in last section by <code>-o</code> option</strong> :</p>
<h3 id="for-vue" tabindex="-1"><a class="header-anchor" href="#for-vue" aria-hidden="true">#</a> for Vue</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ./src/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token string">'your-ouput.css-filename'</span>
<span class="token comment">// ↑↑↑ add css file using</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="for-react" tabindex="-1"><a class="header-anchor" href="#for-react" aria-hidden="true">#</a> for React</h3>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// ./src/main.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>
<span class="token keyword">import</span> <span class="token string">'your-ouput.css-filename'</span>
<span class="token comment">// ↑↑↑ add css file using</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>After add to your main script , you can open dev server by <code>npm run dev</code> command as fast as you can ... because , it's working ! Enjoy your devloping time , thank you ! 🤪
<br></p>
</template>
