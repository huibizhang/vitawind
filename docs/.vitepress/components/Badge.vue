<template>
  <span
    :class="[
      {'text-[0.6rem] px-[0.1rem]':size==='small',
      'text-[0.9rem] font-bold px-[0.2rem] -translate-y-2':size!=='small'},
      'ml-1 inline-flex rounded-sm',
      colors
    ]" >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props:['color','text', 'size'],
  data() {
    return {

    }
  },
  computed: {
    colors () {
      if (this.color==='green') {
        return 'badgeGreen'
      }
    }    
  }
}
</script>

<style lang="postcss">
  .badgeGreen {
    @apply bg-green-600 text-white
  }
</style>