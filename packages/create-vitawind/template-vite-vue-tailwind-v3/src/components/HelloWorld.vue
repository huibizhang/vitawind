<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 class="text-5xl font-black bg-gradient-to-r from-green-600 to-sky-400 bg-clip-text text-transparent selection:bg-transparent">{{ msg }}</h1>

  <p class="space-x-4 mt-6">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" class="underline text-emerald-500 hover:text-emerald-400 transition-all" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" class="underline text-emerald-500 hover:text-emerald-400 transition-all" target="_blank">Volar</a>
  </p>

  <p class="space-x-4 mt-4">
    <a href="https://vitejs.dev/guide/features.html" class="underline text-emerald-500 hover:text-emerald-400 transition-all" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" class="underline text-emerald-500 hover:text-emerald-400 transition-all" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" class="rounded bg-gray-300 px-4 py-2 my-6 hover:bg-gray-200 transition-all" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code class="text-gray-400">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>

</style>
