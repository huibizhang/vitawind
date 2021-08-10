<template>
  <div class="p-3 pointer-events-auto flex flex-col gap-3 select-none">

    <!-- Vite -->
    <div class="rounded-lg overflow-hidden">
      <div class="h-10 bg-gray-200 text-gray-500 font-bold flex justify-center items-center">
        <img :src="'/vite-logo.svg'" class="w-8 h-8 object-contain p-1">Vite
      </div>
      <div class="bg-gray-100 p-2 grid grid-cols-1 gap-2">
        <TemplateItem :key="list.pure.id" v-bind="list.pure" :current="template" @checked="template=$event" class="text-center" />
        <div class="grid grid-cols-2 gap-2">
          <TemplateItem v-for="t in list.vite" :key="t.id" v-bind="t" :current="template" @checked="template=$event" />
        </div>
      </div>
    </div>

    <!-- CLI -->
    <div class="rounded-lg overflow-hidden">
      <div class="h-10 bg-gray-200 text-gray-500 font-bold flex justify-center items-center">
        <img :src="'/webpack-logo.svg'" class="w-9 h-9 object-contain p-1">CLI
      </div>
      <div class="bg-gray-100 p-2 grid grid-cols-2 gap-2">
        <TemplateItem v-for="t in list.cli" :key="t.id" v-bind="t" :current="template" @checked="template=$event" />
      </div>
    </div>
    
    <button
      class="w-1/2 h-10 text-base text-white font-bold bg-blue-400 hover:bg-blue-300 active:bg-blue-500 active:scale-95 disabled:bg-gray-500 flex justify-center items-center inset-0 mx-auto rounded-md transition-all cursor-pointer border-0"
      :disabled="template===''"
      @click="$emit('confirm',template)"
    >
      Confirm
    </button>
  </div>
</template>

<script>
import TemplateItem from './TemplateItem.vue'

export default {
  name: "TemplateList",
  props: ['modalStatus'],
  data () {
    return {
      template: '',
      list: {
        pure: {
          id: 'pure',
          name: 'Vanilla JS',
          color: "yellow",
        },
        vite: [
          {
            id: 'vue',
            name: 'Vue',
            color: "green",
          },
          {
            id: 'vue-ts',
            name: 'Vue + Typescript',
            color: "green",
          },
          {
            id: 'react',
            name: 'React',
            color: "blue",
          },
          {
            id: 'react-ts',
            name: 'React + Typescript',
            color: "blue",
          },
        ],
        cli: [
          {
            id: 'vuecli',
            name: 'Vue-CLI',
            color: "green",
          },
          {
            id: 'vuecli5',
            name: 'Vue-CLI 5',
            color: "green",
          },
          {
            id: 'cra',
            name: 'Create React App',
            color: "blue",
          },
          {
            id: 'ng',
            name: 'Angular',
            color: "red",
          },
        ]
      }
    }
  },
  watch: {
    modalStatus: "modalState",
  },
  methods: {
    modalState () {
      this.template = !this.modalStatus?'':this.template
    }
  },
  components: {
    TemplateItem
  }
}
</script>

<style>

</style>