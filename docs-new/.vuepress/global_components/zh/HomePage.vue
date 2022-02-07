<template>
  <div class="flex w-full justify-center">
    <h1 class="text-center text-6xl font-black transition-all md:text-7xl">
      極速建立
      <span
        class="bg-gradient-to-r from-emerald-500 to-sky-400 box-decoration-clone bg-clip-text text-transparent md:whitespace-nowrap"
        >TailwindCSS v3</span
      >
      專案
    </h1>
  </div>

  <div class="text-center text-lg text-gray-400">
    create-vitawind，一個 Tailwind CSS v3 專案的腳手架
  </div>

  <div class="mt-8 flex justify-center space-x-5">
    <a href="#起手式" class="relative !no-underline">
      <button
        class="absolute flex h-10 items-center space-x-3 rounded-md border-0 bg-emerald-500 px-4 py-2 text-base font-bold leading-5 text-white transition-all duration-500 hover:bg-emerald-500/0"
      >
        <span> 馬上開始 </span>
        <span class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </span>
      </button>
      <button
        class="flex h-10 items-center space-x-3 rounded-md border-0 bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-base font-bold leading-5 text-transparent"
      >
        <span> 馬上開始 </span>
        <span class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </span>
      </button>
    </a>
    <a href="/guide-for-vitawind/" class="no-underline">
      <button
        class="h-10 rounded-md border-0 bg-gray-200 px-4 py-2 text-base leading-5 text-gray-700 transition-all duration-500 hover:bg-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400"
      >
        了解更多
      </button>
    </a>
  </div>
  <br />
  <div
    class="mt-10 mb-10 grid items-start space-y-10 md:grid-cols-3 md:space-y-0 md:space-x-5"
  >
    <div class="flex flex-col text-lg">
      <span class="font-bold text-gray-600 dark:text-gray-400">已支援 v3</span>
      <span class="text-base text-gray-500"
        >所有範本專案都已經升級並內建好 Tailwindcss v3
      </span>
    </div>
    <div class="flex flex-col text-lg">
      <span class="font-bold text-gray-600 dark:text-gray-400"
        >Prettier For Tailwind</span
      >
      <span class="text-base text-gray-500">
        <!-- Prettier is now build-in the templates, you don't to install and
        setting prettier for tailwindcss yourselfs anymore. -->
        現在，Prettier 已經內建在專案之中。你不需要再自己幫 tailwind
        專案安裝或設定 Prettier
      </span>
    </div>
    <div class="flex flex-col text-lg">
      <span class="font-bold text-gray-600 dark:text-gray-400">保持簡單</span>
      <span class="text-base text-gray-500">
        <!-- Just few steps, get the scaffolding-creating commands for your
        project. -->
        只需要幾個小步驟，就能夠產生建立範本專案的指令
      </span>
    </div>
  </div>
  <br />
</template>

<script></script>
