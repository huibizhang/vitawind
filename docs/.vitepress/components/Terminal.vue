<template>
  <div class="mt-14 max-w-xl inset-0 mx-auto">
    <div class="mb-4 justify-center h-8 flex gap-3">
      <div class="relative flex-1 min-w-0">
        <input id="project-name" type="text" class="block w-full h-8 border-0 border-b-2 placeholder-shown:border-gray-400 border-b-blue-500 focus:border-b-blue-500 text-base inset-0 mx-auto peer outline-none" placeholder=" " v-model="projectName" @input="$emit('typing',nameChecker(projectName))" />
        <label for="project-name" class="absolute -top-7 -left-1 w-full h-8 inset-0 mx-auto peer-focus:-top-7 peer-focus:-left-1 text-sm peer-focus:text-sm text-blue-500 peer-focus:text-blue-500 peer-placeholder-shown:left-0.5 peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 font-bold transition-all">your project name</label>
      </div>
      <div class="flex:none h-8 bg-gray-300 hover:bg-blue-200 active:bg-blue-400 rounded-md border-0 cursor-pointer flex items-center text-gray-700 active:text-gray-100 active:scale-90 transition-all p-1 gap-1 select-none" @click="$emit('choosing')">
        <div class="flex-1 text-center pl-1">
          {{ !template?'template':template }}
        </div>
        <svg viewBox="0 0 32 32" class="flex-none w-6 h-6 scale-50 stroke-current stroke-2">
          <line x1="0" y1="16.5" x2="32" y2="16.5" style="stroke-width:3px" />
          <line x1="16.5" y1="0" x2="16.5" y2="32" style="stroke-width:3px" />
        </svg>
      </div>
    </div>
    <div class="bg-gray-400 rounded-lg flex flex-col mb-4 overflow-hidden text-gray-200">
      <div class="flex justify-between">
        <div class="flex gap-1 px-2 items-center">
          <div class="w-3 h-3 bg-red-600 hover:bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-600 hover:bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-600 hover:bg-green-400 rounded-full"></div>
        </div>
        <div class="inline-flex justify-end py-1 items-center" style="z-index:1;">
          <!-- npm -->
          <label class="cursor-pointer">
            <input type="radio" :name="name" v-model="tool" :key="`${name}-npm`" class="appearance-none hidden peer" value="npm" />
            <div class="px-1.5 py-0.5 mx-2 rounded-md inline-block text-sm hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700 transition-all">npm</div>
          </label>
          <div class="w-0.5 h-5/6 bg-gray-500/60" />
          <!-- yarn -->
          <label class="cursor-pointer">
            <input type="radio" :name="name" v-model="tool" :key="`${name}-yarn`" class="appearance-none hidden peer" value="yarn" />
            <div class="px-1.5 py-0.5 mx-2 rounded-md inline-block text-sm hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700 transition-all">yarn</div>
          </label>
          <div class="w-0.5 h-5/6 bg-gray-500/60" />
          <!-- pnpm -->
          <label class="cursor-pointer">
            <input type="radio" :name="name" v-model="tool" :key="`${name}-pnpm`" class="appearance-none hidden peer" value="pnpm" />
            <div class="px-1.5 py-0.5 mx-2 rounded-md inline-block text-sm hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700 transition-all">pnpm</div>
          </label>
        </div>
      </div>
      <div class="w-full bg-gray-900 px-4 text-gray-300 text-sm overflow-x-auto pr-4">
        <slot class="inline-block">
        </slot>
      </div>
    </div>
    <div class="text-center">
      <button 
        :class="[
          'min-w-0 min-h-0 px-4 py-2 inset-0 mx-auto transition-all',
          'border-0 rounded-lg bg-green-600 hover:bg-green-500 active:bg-green-700 disabled:bg-yellow-300 disabled:ring-4 ring-yellow-400/50',
          'text-lg disabled:text-base text-white disabled:text-yellow-700 disabled:text-left',
          'hover:scale-110 active:scale-90 disabled:hover:scale-100'
        ]"
        @click="$emit('copy')" :disabled="invalid || !template"
      >
        {{ 
          invalid || !template?
          'Please setting project name and choose a template'
          :
          'Copy it !'
         }}
      </button>
    </div>
  </div>
</template>

<script>
import clsx from 'clsx'

export default {
  name: "Terminal",
  props: ['name','tool','template'],
  data () {
    return {
      projectName: "test-project",
      invalid: false,
    }
  },
  watch: {
    tool: "pushBack",
  },
  methods: {
    pushBack () {
      this.$emit('tool',this.tool)
    },
    nameChecker (project_name) {
      if (this.isValidPackageName(project_name)) {
        this.invalid = false
        return project_name
      } else {
        const rename = this.toValidPackageName(project_name)
        this.invalid = !this.isValidPackageName(rename)
        return rename
      }
    },
    isValidPackageName (projectName) {
      return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
        projectName
      )
    },
    toValidPackageName(projectName) {
      return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/^[._]/, '')
        .replace(/[^a-z0-9-~]+/g, '-')
    }
  }
}
</script>