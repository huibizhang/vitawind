<template>
  <span class="badge" :class="colors">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props:['color','text'],
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

<style>
  .badge {
    font-size:0.8rem;
    font-weight: bold;
    padding:0.1rem;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-0.5rem);
    border-radius: 0.2rem;
    margin-left: 0.3rem;
  }
  .badgeGreen {
    background-color: #248d24;
    color:white;
  }
</style>