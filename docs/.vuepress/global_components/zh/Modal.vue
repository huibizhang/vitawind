<template>
  <div
    class="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center p-3 transition-all duration-500"
    :class="{ 'opacity-100': open, 'pointer-events-none opacity-0': !open }"
  >
    <div
      class="absolute top-0 left-0 h-full w-full bg-gray-900/60"
      @click="closeOverlay()"
    />
    <div
      class="flex w-full max-w-md flex-col overflow-hidden rounded-lg shadow-2xl transition-all duration-500 md:w-9/12"
      :class="{ 'scale-100': open, 'scale-0': !open }"
    >
      <div class="flex h-12 flex-none border-b bg-white">
        <div
          class="flex flex-1 items-center pl-4 font-bold leading-10 text-gray-600"
        >
          {{ title }}
        </div>
        <div
          class="flex h-12 w-12 flex-none scale-75 cursor-pointer items-center justify-center rounded-lg text-3xl transition-all hover:bg-gray-200 active:scale-[.70] active:bg-gray-300"
          @click="closeOverlay()"
        >
          <svg
            viewBox="0 0 32 32"
            class="h-4 w-4 flex-none stroke-current stroke-2"
          >
            <line x1="0" y1="0" x2="32" y2="32" style="stroke-width: 3px" />
            <line x1="0" y1="32" x2="32" y2="0" style="stroke-width: 3px" />
          </svg>
        </div>
      </div>
      <div class="flex-1 bg-gray-300">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: {
      default: false,
    },
  },
  data() {
    return {
      title: "請選擇範本",
    };
  },
  mounted() {
    // setTimeout(this.delay,500)
  },
  methods: {
    delay() {
      // this.open = true
    },
    closeOverlay() {
      this.$emit("close");
    },
  },
};
</script>
