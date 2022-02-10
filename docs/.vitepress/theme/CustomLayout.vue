<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-x-hidden">
    <div
      class="flex-none flex h-8 justify-center bg-gradient-to-r from-green-500 to-blue-400 text-white items-center fixed w-screen z-50"
    >
      You're looking v1 documents. For newest contents, see&nbsp;
      <a href="https://vitawind.vercel.app" class="text-white underline"
        >v2.x document</a
      >.
    </div>
    <Layout class="flex-1" />
  </div>
</template>

<style>
.nav-bar {
  top: 2rem !important;
}

.sidebar,
.theme {
  margin-top: 2rem;
}
</style>
