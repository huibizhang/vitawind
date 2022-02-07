<template>
  <hr class="mt-16 border-[#e0e0e0] dark:border-gray-500" />
  <div
    class="flex flex-col justify-center pt-3 text-center text-[#a0a0a0] md:flex-row md:whitespace-nowrap"
  >
    <span>MIT Licensed </span>
    <span class="mx-2 hidden md:inline">|</span>
    <span
      >Copyright© {{ new Date().getFullYear() }}-present huibizhang Rabbit</span
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
