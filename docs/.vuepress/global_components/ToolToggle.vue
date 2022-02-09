<template>
  <div
    class="mb-4 flex flex-col rounded-md bg-blue-100 transition-all dark:bg-gray-600"
  >
    <div class="flex justify-end">
      <div class="inline-flex items-center justify-end py-1" style="z-index: 1">
        <!-- npm -->
        <label class="cursor-pointer">
          <input
            type="radio"
            :name="name"
            v-model="tool"
            :key="`${name}-npm`"
            class="peer hidden appearance-none"
            value="npm"
          />
          <div
            class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            npm
          </div>
        </label>
        <div class="h-5/6 w-0.5 bg-blue-300/60" />
        <!-- yarn -->
        <label class="cursor-pointer">
          <input
            type="radio"
            :name="name"
            v-model="tool"
            :key="`${name}-yarn`"
            class="peer hidden appearance-none"
            value="yarn"
          />
          <div
            class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            yarn
          </div>
        </label>
        <div class="h-5/6 w-0.5 bg-blue-300/60" />
        <!-- pnpm -->
        <label class="cursor-pointer">
          <input
            type="radio"
            :name="name"
            v-model="tool"
            :key="`${name}-pnpm`"
            class="peer hidden appearance-none"
            value="pnpm"
          />
          <div
            class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            pnpm
          </div>
        </label>
      </div>
    </div>
    <div class="-my-4">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolToggle",
  props: ["name", "tool"],
  watch: {
    tool: "pushBack",
  },
  methods: {
    pushBack() {
      this.$emit("tool", this.tool);
    },
  },
};
</script>

<style></style>
