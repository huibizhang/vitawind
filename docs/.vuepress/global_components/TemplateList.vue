<template>
  <div class="pointer-events-auto flex select-none flex-col gap-3 p-3">
    <!-- Vite -->
    <div class="overflow-hidden rounded-lg">
      <div
        class="flex h-10 items-center justify-center bg-gray-200 font-bold text-gray-500"
      >
        <img :src="'/vite-logo.svg'" class="h-8 w-8 object-contain p-1" />Vite
      </div>
      <div class="grid grid-cols-1 gap-2 bg-gray-100 p-2">
        <!-- TemplateItem :key="list.pure.id" v-bind="list.pure" :current="template" @checked="template=$event" class="text-center" /-->
        <div class="grid grid-cols-2 gap-2">
          <TemplateItem
            v-for="t in list.vite"
            :key="t.id"
            v-bind="t"
            :current="template"
            @checked="template = $event"
          />
        </div>
      </div>
    </div>

    <!-- CLI -->
    <div class="overflow-hidden rounded-lg">
      <div
        class="flex h-10 items-center justify-center bg-gray-200 font-bold text-gray-500"
      >
        <img :src="'/webpack-logo.svg'" class="h-9 w-9 object-contain p-1" />CLI
      </div>
      <div class="grid grid-cols-2 gap-2 bg-gray-100 p-2">
        <TemplateItem
          v-for="t in list.cli"
          :key="t.id"
          v-bind="t"
          :current="template"
          @checked="template = $event"
        />
      </div>
    </div>

    <button
      class="inset-0 mx-auto flex h-10 w-1/2 cursor-pointer items-center justify-center rounded-md border-0 bg-blue-400 text-base font-bold text-white transition-all hover:bg-blue-300 active:scale-95 active:bg-blue-500 disabled:bg-gray-500"
      :disabled="template === ''"
      @click="$emit('confirm', template)"
    >
      Confirm
    </button>
  </div>
</template>

<script>
import TemplateItem from "./TemplateItem.vue";

export default {
  name: "TemplateList",
  props: ["modalStatus"],
  data() {
    return {
      template: "",
      list: {
        pure: {
          id: "pure",
          name: "Vanilla JS",
          color: "yellow",
        },
        vite: [
          {
            id: "vue",
            name: "Vue",
            color: "green",
          },
          {
            id: "vue-ts",
            name: "Vue + Typescript",
            color: "green",
          },
          {
            id: "react",
            name: "React",
            color: "blue",
          },
          {
            id: "react-ts",
            name: "React + Typescript",
            color: "blue",
          },
        ],
        cli: [
          // {
          //   id: "vuecli",
          //   name: "Vue-CLI",
          //   color: "green",
          // },
          // {
          //   id: "vuecli5",
          //   name: "Vue-CLI 5",
          //   color: "green",
          // },
          {
            id: "cra",
            name: "Create React App",
            color: "blue",
          },
          {
            id: "ng",
            name: "Angular",
            color: "red",
          },
        ],
      },
    };
  },
  watch: {
    modalStatus: "modalState",
  },
  methods: {
    modalState() {
      this.template = !this.modalStatus ? "" : this.template;
    },
  },
  components: {
    TemplateItem,
  },
};
</script>

<style></style>
