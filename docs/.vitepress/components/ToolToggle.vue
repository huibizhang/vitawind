<template>
  <div class="bg-blue-100 rounded-md flex flex-col mb-4">
    <div class="flex justify-end">
      <div class="inline-flex justify-end py-1 items-center" style="z-index:1;">
        <label class="cursor-pointer">
          <input type="radio" :name="name" v-model="tool" :key="`${name}-npm`" class="appearance-none hidden peer" value="npm" />
          <div class="px-1.5 py-0.5 mx-2 rounded-md inline-block text-sm hover:bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white transition-all">npm</div>
        </label>
        <div class="w-0.5 h-5/6 bg-blue-300/60" />
        <label class="cursor-pointer">
          <input type="radio" :name="name" v-model="tool" :key="`${name}-yarn`" class="appearance-none hidden peer" value="yarn" />
          <div class="px-1.5 py-0.5 mx-2 rounded-md inline-block text-sm hover:bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white transition-all">yarn</div>
        </label>
      </div>
    </div>
    <div class="-my-4">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolToggle",
  props: ['name','tool'],
  watch: {
    tool: "pushBack"
  },
  methods: {
    pushBack () {
      this.$emit('tool',this.tool)
    }
  }
}
</script>

<style>

</style>