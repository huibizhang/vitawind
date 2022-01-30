<template>
  <h1 class="text-3xl font-bold">{{ msg }}</h1>

  <p class="space-x-4 mt-4 text-gray-700">
    Recommended IDE setup:<br>
    <a
      class="text-green-500 hover:underline hover:text-green-400 transition-all"
      href="https://code.visualstudio.com/"
      target="_blank"
      >VSCode</a
    >
    +
    <a
      class="text-green-500 hover:underline hover:text-green-400 transition-all"
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a
      class="text-green-500 hover:underline hover:text-green-400 transition-all"
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
      >Volar</a
    >
    (if using
    <code class="bg-gray-100 p-1 rounded text-gray-700">&lt;script setup&gt;</code>)
  </p>

  <p class="space-x-4 mt-4">See <code class="bg-gray-100 p-1 rounded text-gray-700">README.md</code> for more information.</p>

  <p class="space-x-4 mt-4">
    <a class="text-green-500 hover:underline hover:text-green-400 transition-all" href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a class="text-green-500 hover:underline hover:text-green-400 transition-all" href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button
    class="rounded bg-gray-300 px-2 py-2 my-6 hover:bg-gray-200 transition-all active:scale-95" 
    @click="count++"
  >
    count is: {{ count }}
  </button>
  
  <p class="space-x-4 mb-4">
    Edit
    <code class="bg-gray-100 p-1 rounded text-gray-700">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>