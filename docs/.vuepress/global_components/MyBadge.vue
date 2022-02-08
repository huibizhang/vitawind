<template>
  <span
    :class="[
      {
        'px-[0.1rem] text-[0.6rem]': size === 'small',
        '-translate-y-2 px-[0.2rem] text-[0.9rem] font-bold': size !== 'small',
      },
      'ml-1 inline-flex rounded-sm',
      colors,
    ]"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "Badge",
  props: ["color", "text", "size"],
  data() {
    return {};
  },
  computed: {
    colors() {
      if (this.color === "green") {
        return "badgeGreen";
      } else if (this.color === "red") {
        return "badgeRed";
      }
    },
  },
};
</script>

<style lang="postcss">
.badgeGreen {
  @apply bg-green-600 text-white;
}
.badgeRed {
  @apply bg-red-500 text-white;
}
</style>
