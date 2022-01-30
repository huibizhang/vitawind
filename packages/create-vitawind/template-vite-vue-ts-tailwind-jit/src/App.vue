<template>
  <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Tailwind jit" />
  <img class="mx-auto my-8" alt="powered-by" src="./assets/powered-by-vitawind-bright.png">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style lang="postcss">
  #app {
    @apply text-center
  }
</style>