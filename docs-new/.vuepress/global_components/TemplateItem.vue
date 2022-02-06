<template>
  <label class="relative" @click="$emit('checked',id)">
    <input type="radio" name="template" class="appearance-none hidden peer" :value="id" :checked="current===id" />
    <div
      class="px-2 py-1 rounded-md overflow-hidden cursor-pointer peer-checked:ring-2 transition-all text-gray-500"
      :class="{
        'bg-green-100 hover:bg-green-200 active:bg-green-300 ring-green-400 peer-checked:text-green-600': (color==='green'),
        'bg-blue-100 hover:bg-blue-200 active:bg-blue-300 ring-blue-400 peer-checked:text-blue-600': (color==='blue'),
        'bg-red-100 hover:bg-red-200 active:bg-red-300 ring-red-400 peer-checked:text-red-600': (color==='red'),
        'bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 ring-yellow-400 peer-checked:text-yellow-600': (color==='yellow'),
      }"
    >
      {{name}}
    </div>
    <svg
      class="absolute top-2 right-2 w-4 h-4 fill-current opacity-0 peer-checked:opacity-100 transition-all " viewBox="0 0 512 512"
      :class="{
        'peer-checked:text-green-500': (color==='green'),
        'peer-checked:text-blue-500': (color==='blue'),
        'peer-checked:text-red-500': (color==='red'),
        'peer-checked:text-yellow-500': (color==='yellow'),
      }"  
    >
      <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
          c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
          C514.5,101.703,514.499,85.494,504.502,75.496z"/>
    </svg>
  </label>
</template>

<script>
export default {
  name: "TemplateItem",
  props:['id','name','color','current'],
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>