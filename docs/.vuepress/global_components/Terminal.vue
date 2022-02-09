<template>
  <div class="inset-0 mx-auto mt-14 max-w-xl">
    <div class="mb-4 flex h-8 justify-center gap-3">
      <div class="relative min-w-0 flex-1">
        <input
          id="project-name"
          type="text"
          class="peer inset-0 mx-auto block h-8 w-full border-0 border-b-2 border-b-sky-500 text-base outline-none placeholder-shown:border-gray-400 focus:border-b-sky-500 dark:bg-[#22272e]"
          placeholder=" "
          v-model="projectName"
          @input="$emit('typing', nameChecker(projectName))"
        />
        <label
          for="project-name"
          class="absolute inset-0 -top-7 -left-1 mx-auto h-8 w-full text-sm font-bold text-sky-500 transition-all peer-placeholder-shown:left-0.5 peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:-left-1 peer-focus:text-sm peer-focus:text-sky-500"
          >your project name</label
        >
      </div>
      <div
        class="flex:none flex h-8 cursor-pointer select-none items-center gap-1 rounded-md border-0 bg-gray-300 p-1 leading-3 text-gray-700 transition-all hover:bg-blue-200 active:scale-90 active:bg-blue-400 active:text-gray-100 dark:bg-gray-400"
        @click="$emit('choosing')"
      >
        <div class="flex-1 pl-1 text-center">
          {{ !template ? "template" : template }}
        </div>
        <svg
          viewBox="0 0 32 32"
          class="h-6 w-6 flex-none scale-50 stroke-current stroke-2"
        >
          <line x1="0" y1="16.5" x2="32" y2="16.5" style="stroke-width: 3px" />
          <line x1="16.5" y1="0" x2="16.5" y2="32" style="stroke-width: 3px" />
        </svg>
      </div>
    </div>
    <div
      class="mt-8 mb-4 flex flex-col overflow-hidden rounded-lg bg-gray-400 text-gray-200"
    >
      <div class="flex justify-between">
        <div class="flex items-center gap-1 px-2">
          <div class="h-3 w-3 rounded-full bg-red-600 hover:bg-red-500"></div>
          <div
            class="h-3 w-3 rounded-full bg-yellow-600 hover:bg-yellow-500"
          ></div>
          <div
            class="h-3 w-3 rounded-full bg-green-600 hover:bg-green-400"
          ></div>
        </div>
        <div
          class="inline-flex items-center justify-end py-1"
          style="z-index: 1"
        >
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
              class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700"
            >
              npm
            </div>
          </label>
          <div class="h-5/6 w-0.5 bg-gray-500/60" />
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
              class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700"
            >
              yarn
            </div>
          </label>
          <div class="h-5/6 w-0.5 bg-gray-500/60" />
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
              class="mx-2 inline-block rounded-md px-1.5 py-0.5 text-sm transition-all hover:bg-gray-500 peer-checked:bg-white/70 peer-checked:text-gray-700"
            >
              pnpm
            </div>
          </label>
        </div>
      </div>
      <div
        class="w-full overflow-x-auto bg-gray-900 px-4 pr-4 text-sm text-gray-300"
      >
        <slot class="inline-block"> </slot>
      </div>
    </div>
    <div class="text-center">
      <button
        :class="[
          'inset-0 mx-auto min-h-0 min-w-0 px-4 py-2 transition-all',
          'rounded-lg border-0 bg-emerald-600 ring-yellow-400/50 hover:bg-emerald-500 active:bg-emerald-700 disabled:bg-yellow-300 disabled:ring-4',
          'text-lg text-white disabled:text-left disabled:text-base disabled:text-yellow-700',
          'hover:scale-110 active:scale-90 disabled:hover:scale-100',
        ]"
        @click="$emit('copy')"
        :disabled="invalid || !template"
      >
        {{
          invalid || !template
            ? "Please setting project name and choose a template"
            : "Copy it !"
        }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: ["name", "tool", "template"],
  data() {
    return {
      projectName: "test-project",
      invalid: false,
    };
  },
  watch: {
    tool: "pushBack",
  },
  methods: {
    pushBack() {
      this.$emit("tool", this.tool);
    },
    nameChecker(project_name) {
      if (this.isValidPackageName(project_name)) {
        this.invalid = false;
        return project_name;
      } else {
        const rename = this.toValidPackageName(project_name);
        this.invalid = !this.isValidPackageName(rename);
        return rename;
      }
    },
    isValidPackageName(projectName) {
      return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
        projectName
      );
    },
    toValidPackageName(projectName) {
      return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z0-9-~]+/g, "-");
    },
  },
};
</script>
