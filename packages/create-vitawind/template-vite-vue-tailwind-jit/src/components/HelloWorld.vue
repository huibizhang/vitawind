<template>

  <h1 class="text-3xl font-bold">{{ msg }}</h1>

  <p class="text-green-500 space-x-4 mt-4">
    <a
      class="underline hover:text-green-400 transition-all"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    <a 
      class="underline hover:text-green-400 transition-all" 
      href="https://v3.vuejs.org/"
      target="_blank"
    >
      Vue 3 Documentation
    </a>
  </p>

  <button
    class="rounded bg-gray-300 px-2 py-2 my-6 hover:bg-gray-200 transition-all" 
    @click="state.count++"
  >
    count is: {{ state.count }}
  </button>

  <p>
    Edit
    <code class="text-gray-500">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>