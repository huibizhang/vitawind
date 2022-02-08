<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <div class="flex flex-col w-screen h-screen">
    <div class="flex-none flex p-2 justifycenter bg-green-500 text-white">
      You're looking v1 documents.
    </div>
    <Layout class="flex-1">
      <template #page-bottom>
        TEST AREA
      </template>
    </Layout>
  </div>
</template>
